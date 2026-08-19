// _runtime/01478_State.js
import _createClassDefault from "metro/00042__createClass.js";
import get_ActivityIndicatorDefault from "01479_get_ActivityIndicator.js";
import InternetReachabilityDefault from "01481_InternetReachability.js";
import asyncGeneratorStep from "00005_asyncGeneratorStep.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

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
      const item = _subscriptions.forEach((item, index) => item(closure_0));
    };
    this._handleInternetReachabilityUpdate = (isInternetReachable) => {
      if (self._latestState) {
        const obj = {};
        const merged = Object.assign(self._latestState);
        obj.isInternetReachable = isInternetReachable;
        self._latestState = obj;
        const _subscriptions = self._subscriptions;
        const item = _subscriptions.forEach((item, index) => item(obj));
      }
    };
    closure_0 = undefined;
    closure_0 = closure_3((arg0) => {
      closure_0 = arg0;
      c3 = 0;
      c4 = 0;
      return (function*(arg0) {
        const obj2 = lib(dependencyMap[3]);
        closure_1 = yield obj2.getCurrentState(lib);
        const _internetReachability = lib._internetReachability;
        _internetReachability.update(closure_1);
        closure_2 = lib._convertState(closure_1);
        if (!lib) {
          lib._latestState = closure_2;
          const _subscriptions = lib._subscriptions;
          const item = _subscriptions.forEach((item, index) => item(closure_2));
        }
        return closure_2;
      })();
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
        let _fetchCurrentStateResult = self._fetchCurrentState(arg0);
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
        self.latest().then(fn);
        const latestResult = self.latest();
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
    tmp3 = new require("InternetReachability")(global, this._handleInternetReachabilityUpdate);
    this._internetReachability = tmp3;
    eventEmitter = require("get ActivityIndicator").eventEmitter;
    this._nativeEventSubscription = eventEmitter.addListener(require("metro/01482__.js").DEVICE_CONNECTIVITY_EVENT, this._handleNativeStateUpdate);
    _fetchCurrentStateResult = this._fetchCurrentState();
    return;
  }
}

export default _createClassDefault(State);