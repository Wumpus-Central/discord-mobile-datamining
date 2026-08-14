// _runtime/01477_State.js
import 01481__ from "metro/01481__.js";
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";

class State {
  constructor(arg0) {
    self = this;
    f103676 = this;
    tmp = _classCallCheck(this, State);
    this._nativeEventSubscription = null;
    set = new Set();
    this._subscriptions = set;
    this._latestState = null;
    this._handleNativeStateUpdate = (arg0) => {
      const _internetReachability = self._internetReachability;
      _internetReachability.update(arg0);
      const _convertStateResult = self._convertState(arg0);
      let closure_0 = _convertStateResult;
      self._latestState = _convertStateResult;
      const _subscriptions = self._subscriptions;
      const item = _subscriptions.forEach((arg0) => arg0(closure_0));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (self._latestState) {
        const obj = {};
        const merged = Object.assign(tmp._latestState);
        obj.isInternetReachable = isInternetReachable;
        tmp._latestState = obj;
        const _subscriptions = tmp._subscriptions;
        const item = _subscriptions.forEach((arg0) => arg0(obj));
      }
    };
    f103676 = undefined;
    f103676 = module_1481((arg0) => {
      let closure_0 = arg0;
      let c3 = 0;
      let c4 = 0;
      return (function*(arg0) {
        let closure_2 = tmp5;
        let closure_1 = tmp2;
        const obj2 = lib(outer2_2[3]);
        closure_1 = yield obj2.getCurrentState(lib);
        const _internetReachability = lib._internetReachability;
        _internetReachability.update(closure_1);
        closure_2 = lib._convertState(closure_1);
        if (!lib) {
          lib._latestState = closure_2;
          const _subscriptions = lib._subscriptions;
          const item = _subscriptions.forEach((arg0) => arg0(closure_2));
        }
        return closure_2;
      })();
    });
    this._fetchCurrentState = function(arg0) {
      const self = this;
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
    this.add = (arg0) => {
      const _subscriptions = self._subscriptions;
      _subscriptions.add(arg0);
      if (self._latestState) {
        arg0(obj._latestState);
      } else {
        obj.latest().then(arg0);
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
    tmp3 = new require("InternetReachability")(global, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    eventEmitter = require("get ActivityIndicator").eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(require("module_1481").DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    _fetchCurrentStateResult = this._fetchCurrentState();
    return;
  }
}

export default _createClass(State);