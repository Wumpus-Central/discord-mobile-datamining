// _runtime/00379_Animation.js
import _createClassDefault from "metro/00042__createClass.js";
import _classCallCheck from "metro/00041__classCallCheck.js";

let Animation = importDefault;
let c4 = 1;
class Animation {
  constructor(arg0) {
    self = this;
    tmp = closure_3(this, Animation);
    obj = require("set");
    this._useNativeDriver = obj.shouldUseNativeDriver(global);
    this.__active = false;
    isInteraction = global.isInteraction;
    if (isInteraction == null) {
      isInteraction = !self._useNativeDriver;
    }
    self.__isInteraction = isInteraction;
    ({ isLooping: self.__isLooping, iterations } = global);
    if (iterations == null) {
      iterations = 1;
    }
    self.__iterations = iterations;
    return;
  }
}
let items = [
  {
    key: "start",
    value: function start(arg0, arg1, _onEnd, arg3, __isNative) {
      const self = this;
      if (!this._useNativeDriver) {
        if (true === __isNative.__isNative) {
          const _Error = Error;
          error = new Error("Attempting to run JS driven animation on animated node that has been moved to \"native\" earlier by starting an animation with `useNativeDriver: true`");
          throw error;
        }
      }
      self._onEnd = _onEnd;
      self.__active = true;
    }
  },
  {
    key: "stop",
    value: function stop() {
      const self = this;
      if (null != this._nativeID) {
        const _nativeID = self._nativeID;
        const _HermesInternal = HermesInternal;
        const combined = "" + _nativeID + ":stopAnimation";
        try {
          const API = Animation(357).API;
          const result = API.setWaitingForIdentifier(combined);
          const API2 = Animation(357).API;
          API2.stopAnimation(_nativeID);
          const API3 = Animation(357).API;
          const result1 = API3.unsetWaitingForIdentifier(combined);
        } catch (tmp11) {
          const API4 = Animation(357).API;
          const result2 = API4.unsetWaitingForIdentifier(tmp);
          throw tmp11;
        }
      }
      self.__active = false;
    }
  },
  {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      error = new Error("This animation type cannot be offloaded to native");
      throw error;
    }
  },
  {
    key: "__findAnimatedPropsNodes",
    value: function __findAnimatedPropsNodes(closure_0) {
      const self = this;
      const items = [];
      if (Animation instanceof Animation(380)) {
        items.push(Animation);
        return items;
      } else {
        const __getChildrenResult = Animation.__getChildren();
        for (const item10014 of __getChildrenResult) {
          let push = items.push;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(self.__findAnimatedPropsNodes(item10014), 0);
          let applyResult = HermesBuiltin.apply(items1, items);
          continue;
        }
        return items;
      }
    }
  },
  {
    key: "__startAnimationIfNative",
    value: function __startAnimationIfNative(self) {
      self = this;
      Animation = self;
      if (this._useNativeDriver) {
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_4 + ":startAnimation";
        closure_4 = closure_4 + 1;
        const API = Animation(357).API;
        let result = API.setWaitingForIdentifier(combined);
        try {
          let result1 = self.__getNativeAnimationConfig();
          self.__makeNative(result1.platformConfig);
          self._nativeID = tmp9(357).generateNewAnimationId();
          const API2 = tmp9(357).API;
          API2.startAnimatingNode(self._nativeID, self.__getNativeTag(), result1, (value) => {
            self.__notifyAnimationEnd(value);
            value = value.value;
            if (null != value) {
              const result = _self.__onAnimatedValueUpdateReceived(value, tmp2);
              const result1 = self.__findAnimatedPropsNodes(_self);
              const item = result1.forEach((item, index) => item.update());
              const obj2 = self(dependencyMap[4]);
            }
          });
          const API3 = tmp9(357).API;
          const result2 = API3.unsetWaitingForIdentifier(combined);
          return true;
        } catch (tmp18) {
          const API4 = tmp4(tmp[2]).API;
          const result3 = API4.unsetWaitingForIdentifier(tmp3);
          throw tmp18;
        }
      } else {
        return false;
      }
    }
  },
  {
    key: "__notifyAnimationEnd",
    value: function __notifyAnimationEnd(value) {
      const _onEnd = this._onEnd;
      if (null != _onEnd) {
        tmp._onEnd = null;
        _onEnd(value);
      }
    }
  },
  {
    key: "__getDebugID",
    value: function __getDebugID() {

    }
  }
];

export default _createClassDefault(Animation, items);