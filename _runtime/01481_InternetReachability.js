// _runtime/01481_InternetReachability.js
import _createClassDefault from "_createClass" /* 42 */;
import closure_0 from "_classCallCheck" /* 41 */;

class InternetReachability {
  constructor(arg0, arg1) {
    self = this;
    tmp = self(this, InternetReachability);
    this._isInternetReachable = undefined;
    this._currentInternetReachabilityCheckHandler = null;
    this._currentTimeoutHandle = null;
    this._setIsInternetReachable = (_isInternetReachable) => {
      if (self._isInternetReachable !== _isInternetReachable) {
        obj._isInternetReachable = _isInternetReachable;
        obj._listener(obj._isInternetReachable);
      }
    };
    this._setExpectsConnection = (arg0) => {
      if (null !== self._currentInternetReachabilityCheckHandler) {
        obj._currentInternetReachabilityCheckHandler.cancel();
        obj._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = obj._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(obj._currentTimeoutHandle);
        obj._currentTimeoutHandle = null;
      }
      if (arg0) {
        const _configuration = obj._configuration;
        if (_configuration.reachabilityShouldRun()) {
          if (!obj._isInternetReachable) {
            const result = obj._setIsInternetReachable(null);
          }
          obj._currentInternetReachabilityCheckHandler = obj._checkInternetReachability();
        }
      }
      const result1 = obj._setIsInternetReachable(false);
    };
    this._checkInternetReachability = () => {
      const abortController = new AbortController();
      let obj = { headers: self._configuration.reachabilityHeaders, method: self._configuration.reachabilityMethod, cache: "no-cache", signal: abortController.signal };
      const response = fetch(self._configuration.reachabilityUrl, obj);
      let promise = new Promise((arg0, arg1) => {
        let timeout = arg1;
        timeout = setTimeout(() => callback("timedout"), closure_1_0._configuration.reachabilityRequestTimeout);
      });
      function cancel() {

      }
      promise = new Promise((arg0, arg1) => {
        closure_0 = arg1;
        cancel = function cancel() {
          return callback("canceled");
        };
      });
      obj = { promise: null, cancel: null };
      const items = [response, promise, promise];
      const racePromise = Promise.race(items);
      const nextPromise = Promise.race(items).then((status) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(status);
      });
      const nextPromise1 = Promise.race(items).then((status) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(status);
      }).then((arg0) => {
        const result = closure_0._setIsInternetReachable(arg0);
        const _configuration = closure_0._configuration;
        closure_0._currentTimeoutHandle = setTimeout(closure_0._checkInternetReachability, closure_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      });
      obj[0] = Promise.race(items).then((status) => {
        const _configuration = closure_0._configuration;
        return _configuration.reachabilityTest(status);
      }).then((arg0) => {
        const result = closure_0._setIsInternetReachable(arg0);
        const _configuration = closure_0._configuration;
        closure_0._currentTimeoutHandle = setTimeout(closure_0._checkInternetReachability, closure_0._isInternetReachable ? _configuration.reachabilityLongTimeout : _configuration.reachabilityShortTimeout);
      }).catch((arg0) => {
        if ("canceled" === arg0) {
          abortController.abort();
        } else {
          if ("timedout" === arg0) {
            abortController.abort();
          }
          const result = closure_1_0._setIsInternetReachable(false);
          const _setTimeout = setTimeout;
          closure_1_0._currentTimeoutHandle = setTimeout(closure_1_0._checkInternetReachability, closure_1_0._configuration.reachabilityShortTimeout);
        }
      }).then(() => {
        clearTimeout(closure_0);
      }, (arg0) => {
        clearTimeout(closure_0);
        throw arg0;
      });
      obj[1] = cancel;
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
        tmp._currentInternetReachabilityCheckHandler.cancel();
        tmp._currentInternetReachabilityCheckHandler = null;
        const _currentInternetReachabilityCheckHandler = tmp._currentInternetReachabilityCheckHandler;
      }
      if (null !== self._currentTimeoutHandle) {
        const _clearTimeout = clearTimeout;
        clearTimeout(tmp._currentTimeoutHandle);
        tmp._currentTimeoutHandle = null;
      }
    };
    this._configuration = global;
    this._listener = arg1;
    return;
  }
}

export default _createClassDefault(InternetReachability);