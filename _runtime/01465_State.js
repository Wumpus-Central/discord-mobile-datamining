// === Module 1465: State ===

// Module 1465 (State)
import _modDef1466 from "module_1466" /* 1466 */;
import InternetReachabilityDefault from "InternetReachability" /* 1468 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _createClass from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

class State {
  constructor(arg0) {
    self = this;
    closure_0 = this;
    tmp = closure_4(this, State);
    this._nativeEventSubscription = null;
    set = new Set();
    this._subscriptions = set;
    this._latestState = null;
    this._handleNativeStateUpdate = (arg0) => {
      const _internetReachability = self._internetReachability;
      _internetReachability.update(arg0);
      const _convertStateResult = self._convertState(arg0);
      closure_0 = _convertStateResult;
      self._latestState = _convertStateResult;
      const _subscriptions = self._subscriptions;
      const item = _subscriptions.forEach((fn) => fn(_convertStateResult));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (self._latestState) {
        const _latestState = {};
        const merged = Object.assign(tmp._latestState);
        _latestState.isInternetReachable = isInternetReachable;
        tmp._latestState = _latestState;
        const _subscriptions = tmp._subscriptions;
        const item = _subscriptions.forEach((fn) => fn(obj));
      }
    };
    closure_0 = undefined;
    closure_0 = closure_3(async (arg0) => {
      closure_2 = tmp5;
      closure_1 = tmp2;
      closure_129_0 = closure_0;
      closure_129_1 = await closure_0(dependencyMap[3]).getCurrentState(closure_0);
      const _internetReachability = closure_0._internetReachability;
      _internetReachability.update(closure_129_1);
      closure_129_2 = closure_0._convertState(closure_129_1);
      if (!closure_129_0) {
        closure_0._latestState = closure_129_2;
        const _subscriptions = closure_0._subscriptions;
        const item = _subscriptions.forEach((fn) => fn(closure_1_2));
      }
      return closure_129_2;
    });
    this._fetchCurrentState = function(arg0) {
      self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    this._convertState = (isInternetReachable) => {
      let tmp = isInternetReachable;
      if (typeof isInternetReachable.isInternetReachable !== "boolean") {
        const obj = {};
        const merged = Object.assign(isInternetReachable);
        const _internetReachability = self._internetReachability;
        obj.isInternetReachable = _internetReachability.currentState();
        tmp = obj;
      }
      return tmp;
    };
    this.latest = (arg0) => {
      if (arg0) {
        let _fetchCurrentStateResult = obj._fetchCurrentState(arg0);
      } else if (obj._latestState) {
        _fetchCurrentStateResult = Promise.resolve(obj._latestState);
      } else {
        _fetchCurrentStateResult = obj._fetchCurrentState();
      }
      return _fetchCurrentStateResult;
    };
    this.add = (fn) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.add(fn);
      if (self._latestState) {
        fn(obj._latestState);
      } else {
        obj.latest().then(fn);
        const latestResult = obj.latest();
      }
    };
    this.remove = (arg0) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.delete(arg0);
    };
    this.tearDown = () => {
      if (self._internetReachability) {
        const _internetReachability = tmp._internetReachability;
        _internetReachability.tearDown();
      }
      if (self._nativeEventSubscription) {
        const _nativeEventSubscription = tmp._nativeEventSubscription;
        _nativeEventSubscription.remove();
      }
      const _subscriptions = tmp._subscriptions;
      _subscriptions.clear();
    };
    tmp3 = new closure_0(closure_2[4])(global, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    eventEmitter = closure_0(closure_2[3]).eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(self(closure_2[5]).DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    _fetchCurrentStateResult = this._fetchCurrentState();
    return;
  }
}

export default _createClass(State);