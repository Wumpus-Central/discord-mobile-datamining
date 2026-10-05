// === Module 379: ? ===

// Module 379
import javaScriptFlagGetterAll from "javaScriptFlagGetter" /* 27 */;
import _createClassDefault from "_createClass" /* 42 */;
import get_nativeEventEmitterDefault from "get nativeEventEmitter" /* 357 */;
import _modDef380 from "module_380" /* 380 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

let closure_4, importDefault;

let c4 = 1;
class Animation {
  constructor(isInteraction) {
    let iterations;
    const self = this;
    _classCallCheck(this, Animation);
    const obj = get_nativeEventEmitterDefault;
    this._useNativeDriver = obj.shouldUseNativeDriver(isInteraction);
    this.__active = false;
    isInteraction = isInteraction.isInteraction;
    if (isInteraction == null) {
      isInteraction = !self._useNativeDriver;
    }
    self.__isInteraction = isInteraction;
    ({ isLooping: self.__isLooping, iterations } = isInteraction);
    if (iterations == null) {
      iterations = 1;
    }
    self.__iterations = iterations;
  }
}
const entry = {
  key: "start",
  value: function start(arg0, arg1, _onEnd, arg3, __isNative) {
    const self = this;
    if (!this._useNativeDriver) {
      if (true === __isNative.__isNative) {
        const _Error = Error;
        const self2 = this;
        const self3 = this;
        const error = new Error("Attempting to run JS driven animation on animated node that has been moved to \"native\" earlier by starting an animation with `useNativeDriver: true`");
        throw error;
      }
    }
    self._onEnd = _onEnd;
    self.__active = true;
  }
};
let items = [
  entry,
  {
    key: "stop",
    value: function stop() {
      const self = this;
      if (null != this._nativeID) {
        const _nativeID = self._nativeID;
        const _HermesInternal = HermesInternal;
        const combined = "" + _nativeID + ":stopAnimation";
        try {
          const API = get_nativeEventEmitterDefault.API;
          const result = API.setWaitingForIdentifier(combined);
          const API2 = get_nativeEventEmitterDefault.API;
          API2.stopAnimation(_nativeID);
          const API3 = get_nativeEventEmitterDefault.API;
          const result1 = API3.unsetWaitingForIdentifier(combined);
        } catch (tmp10) {
          const API4 = get_nativeEventEmitterDefault.API;
          const result2 = API4.unsetWaitingForIdentifier(combined);
          throw tmp10;
        }
      }
      self.__active = false;
    }
  },
  {
    key: "__getNativeAnimationConfig",
    value: function __getNativeAnimationConfig() {
      const error = new Error("This animation type cannot be offloaded to native");
      throw error;
    }
  },
  {
    key: "__findAnimatedPropsNodes",
    value: function __findAnimatedPropsNodes(item10014) {
      const self = this;
      const items = [];
      if (item10014 instanceof _modDef380) {
        items.push(item10014);
        return items;
      } else {
        const __getChildrenResult = item10014.__getChildren();
        for (const item10014 of __getChildrenResult) {
          let push = items.push;
          let items1 = [];
          let arraySpreadResult = HermesBuiltin.arraySpread(items1, self.__findAnimatedPropsNodes(item10014), 0);
          let applyResult = HermesBuiltin.apply(push, items1, items);
          continue;
        }
        return items;
      }
    }
  },
  {
    key: "__startAnimationIfNative",
    value: function __startAnimationIfNative(__makeNative) {
      const self = this;
      importDefault = __makeNative;
      if (this._useNativeDriver) {
        const tmp2 = globalThis;
        const _HermesInternal = HermesInternal;
        const combined = "" + closure_4 + ":startAnimation";
        closure_4 = closure_4 + 1;
        const API = get_nativeEventEmitterDefault.API;
        let result = API.setWaitingForIdentifier(combined);
        try {
          let result1 = self.__getNativeAnimationConfig();
          __makeNative.__makeNative(result1.platformConfig);
          const tmp5Result = get_nativeEventEmitterDefault;
          self._nativeID = tmp5Result.generateNewAnimationId();
          const API2 = tmp5(357).API;
          API2.startAnimatingNode(self._nativeID, __makeNative.__getNativeTag(), result1, (value) => {
            self.__notifyAnimationEnd(value);
            value = value.value;
            if (null != value) {
              const result = __makeNative.__onAnimatedValueUpdateReceived(value, tmp2);
              javaScriptFlagGetterAll;
              const result1 = self.__findAnimatedPropsNodes(__makeNative);
              const item = result1.forEach((update) => update.update());
            }
          });
          const API3 = tmp5(357).API;
          const result2 = API3.unsetWaitingForIdentifier(combined);
          return true;
        } catch (tmp14) {
          const API4 = tmp5(357).API;
          const result3 = API4.unsetWaitingForIdentifier(combined);
          throw tmp14;
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