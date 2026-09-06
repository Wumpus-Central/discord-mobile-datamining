// === Module 1468: InternetReachability ===

// Module 1468 (InternetReachability)
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class InternetReachability {
  constructor(arg0, arg1) {
    self = this;
    tmp = closure_0(this, InternetReachability);
    this._isInternetReachable = undefined;
    this._currentInternetReachabilityCheckHandler = null;
    this._currentTimeoutHandle = null;
    this._setIsInternetReachable = (_isInternetReachable) => {
      if (self._isInternetReachable !== _isInternetReachable) {
        self._isInternetReachable = _isInternetReachable;
        self._listener(self._isInternetReachable);
      }
    };
    this._setExpectsConnection = (arg0) => {
      if (null !== self._currentInternetReachabilityCheckHandler) {
        self._currentInternetReachabilityCheckHandler.cancel();
        self._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = self._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._currentTimeoutHandle);
        self._currentTimeoutHandle = null;
      }
      if (arg0) {
        const _configuration = self._configuration;
        if (_configuration.reachabilityShouldRun()) {
          if (!self._isInternetReachable) {
            const result = self._setIsInternetReachable(null);
          }
          self._currentInternetReachabilityCheckHandler = self._checkInternetReachability();
        }
      }
      const result1 = self._setIsInternetReachable(false);
    };
    this._checkInternetReachability = () => {
      const abortController = new AbortController();
      let obj = { headers: _self._configuration.reachabilityHeaders, method: _self._configuration.reachabilityMethod, cache: "no-cache", signal: abortController.signal };
      const response = fetch(_self._configuration.reachabilityUrl, obj);
      new Promise((arg0, arg1) => {
        const timeout = setTimeout(() => closure_0("timedout"), self._configuration.reachabilityRequestTimeout);
      });
      function cancel() {

      }
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg1;
        cancel = function cancel() {
          return closure_0("canceled");
        };
      });
      obj = { promise: null, cancel: null };
      const items = [response, promise, promise];
      const racePromise = Promise.race(items);
      const nextPromise = Promise.race(items).then((result) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(result);
      });
      const nextPromise1 = Promise.race(items).then((result) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(result);
      }).then((result) => {
        result = closure_0._setIsInternetReachable(result);
        const _configuration = closure_0._configuration;
        closure_0._currentTimeoutHandle = setTimeout(closure_0._checkInternetReachability, closure_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      });
      obj.promise = Promise.race(items).then((result) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(result);
      }).then((result) => {
        result = closure_0._setIsInternetReachable(result);
        const _configuration = closure_0._configuration;
        closure_0._currentTimeoutHandle = setTimeout(closure_0._checkInternetReachability, closure_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      }).catch((error) => {
        if ("canceled" === error) {
          abortController.abort();
        } else {
          if ("timedout" === error) {
            abortController.abort();
          }
          const result = self._setIsInternetReachable(false);
          const _setTimeout = setTimeout;
          self._currentTimeoutHandle = setTimeout(self._checkInternetReachability, self._configuration.reachabilityShortTimeout);
        }
      }).then(() => {
        clearTimeout(closure_0);
      }, (arg0) => {
        clearTimeout(closure_0);
        throw arg0;
      });
      obj.cancel = cancel;
      return obj;
    };
    this.update = (isInternetReachable) => {
      if (typeof isInternetReachable.isInternetReachable === "boolean") {
        if (self._configuration.useNativeReachability) {
          const result = self._setIsInternetReachable(isInternetReachable.isInternetReachable);
        }
      }
      const result1 = self._setExpectsConnection(isInternetReachable.isConnected);
    };
    this.currentState = () => self._isInternetReachable;
    this.tearDown = () => {
      if (null !== self._currentInternetReachabilityCheckHandler) {
        self._currentInternetReachabilityCheckHandler.cancel();
        self._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = self._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(self._currentTimeoutHandle);
        self._currentTimeoutHandle = null;
      }
    };
    this._configuration = global;
    this._listener = arg1;
    return;
  }
}

export default _createClass(InternetReachability);