// === Module 1472: ? ===

// Module 1472
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let c3, c4;

class State {
  constructor(arg0) {
    const self = this;
    let tmp = _classCallCheck(this, State);
    this._nativeEventSubscription = null;
    this._subscriptions = new Set();
    this._latestState = null;
    this._handleNativeStateUpdate = (arg0) => {
      const _internetReachability = self._internetReachability;
      _internetReachability.update(arg0);
      const _convertStateResult = self._convertState(arg0);
      self._latestState = _convertStateResult;
      const _subscriptions = self._subscriptions;
      const item = _subscriptions.forEach((fn) => fn(_convertStateResult));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (self._latestState) {
        const obj = { isInternetReachable };
        const merged = Object.assign(self._latestState);
        self._latestState = obj;
        const _subscriptions = self._subscriptions;
        const item = _subscriptions.forEach((fn) => fn(obj));
      }
    };
    new Set();
    let closure_0 = _asyncToGenerator(async (arg0) => {
      let closure_2;
      let obj3;
      closure_0 = arg0;
      if (c4 === 2) {
        c4 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          let closure_1;
          let tmp4;
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw value;
            } else if (arg0 === 2) {
              c4 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = undefined;
              tmp4 = undefined;
              c3 = 1;
              c4 = 1;
              const obj5 = { value: obj3.getCurrentState(closure_0), done: false };
              obj3 = closure_0(dependencyMap[3]);
              return obj5;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_1 = value;
            const _internetReachability = closure_0._internetReachability;
            _internetReachability.update(closure_1);
            tmp4 = closure_0._convertState(closure_1);
            if (!closure_0) {
              closure_0._latestState = tmp4;
              const _subscriptions = closure_0._subscriptions;
              const item = _subscriptions.forEach((fn) => fn(closure_1_2));
            }
            c4 = 3;
            const obj = { value: tmp4, done: true };
            return obj;
          }
        } catch (tmp15) {
          c4 = 3;
          throw tmp15;
        }
      }
    });
    this._fetchCurrentState = function(arg0) {
      return closure_0(...arguments);
    };
    this._convertState = (isInternetReachable) => {
      let _internetReachability;
      let tmp = isInternetReachable;
      if (typeof isInternetReachable.isInternetReachable !== "boolean") {
        const obj = { isInternetReachable: _internetReachability.currentState() };
        const merged = Object.assign(isInternetReachable);
        _internetReachability = self._internetReachability;
        tmp = obj;
      }
      return tmp;
    };
    this.latest = (arg0) => {
      let _fetchCurrentStateResult;
      if (arg0) {
        _fetchCurrentStateResult = self._fetchCurrentState(arg0);
      } else if (self._latestState) {
        _fetchCurrentStateResult = Promise.resolve(self._latestState);
      } else {
        _fetchCurrentStateResult = self._fetchCurrentState();
      }
      return _fetchCurrentStateResult;
    };
    this.add = (fn) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.add(fn);
      if (self._latestState) {
        fn(self._latestState);
      } else {
        const latestResult = self.latest();
        latestResult.then(fn);
      }
    };
    this.remove = (arg0) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.delete(arg0);
    };
    this.tearDown = () => {
      if (self._internetReachability) {
        const _internetReachability = self._internetReachability;
        _internetReachability.tearDown();
      }
      if (self._nativeEventSubscription) {
        const _nativeEventSubscription = self._nativeEventSubscription;
        _nativeEventSubscription.remove();
      }
      const _subscriptions = self._subscriptions;
      _subscriptions.clear();
    };
    const tmp3 = new self(1475)(arg0, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    const eventEmitter = self(1473).eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(self(1476).DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    let _fetchCurrentStateResult = this._fetchCurrentState();
  }
}

export default _createClass(State);