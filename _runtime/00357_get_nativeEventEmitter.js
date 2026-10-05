// _runtime/00357_get_nativeEventEmitter.js
import _modDef38 from "metro/00038__.js";
import nullthrowsDefault from "00070_nullthrows.js";
import _modDef92 from "metro/00092__.js";
import shouldUseTurboAnimatedModuleDefault from "00361_shouldUseTurboAnimatedModule.js";
import shouldUseTurboAnimatedModule_mod from "00358_shouldUseTurboAnimatedModule.js";
import javaScriptFlagGetter_mod from "00027_javaScriptFlagGetter.js";

const require = globalThis.__r;
let closure_3, tag;

let javaScriptFlagGetter;
let shouldUseTurboAnimatedModule = shouldUseTurboAnimatedModule_mod;
if (shouldUseTurboAnimatedModule == null) {
  shouldUseTurboAnimatedModule = shouldUseTurboAnimatedModuleDefault;
}
let closure_5 = 1;
let closure_6 = 1;
const set = new Set();
let c8 = false;
let closure_9 = [];
let length = [];
let prop;
if (shouldUseTurboAnimatedModule != null) {
  prop = shouldUseTurboAnimatedModule.queueAndExecuteBatchedOperations;
}
let result = null != prop;
if (result) {
  const importAllResult = javaScriptFlagGetter;
  result = importAllResult.animatedShouldUseSingleOp();
}
let closure_11 = null;
let closure_12 = {};
let closure_13 = {};
let closure_14 = null;
let closure_15 = null;
javaScriptFlagGetter = javaScriptFlagGetter_mod;
javaScriptFlagGetter.cxxNativeAnimatedEnabled();
javaScriptFlagGetter = javaScriptFlagGetter_mod;
javaScriptFlagGetter = javaScriptFlagGetter.cxxNativeAnimatedEnabled();
if (javaScriptFlagGetter) {
  const importAllResult3 = javaScriptFlagGetter;
  javaScriptFlagGetter = importAllResult3.useSharedAnimatedBackend();
}
let items = [
  "createAnimatedNode",
  "updateAnimatedNodeConfig",
  "getValue",
  "startListeningToAnimatedNodeValue",
  "stopListeningToAnimatedNodeValue",
  "connectAnimatedNodes",
  "disconnectAnimatedNodes",
  "startAnimatingNode",
  "stopAnimation",
  "setAnimatedNodeValue",
  "setAnimatedNodeOffset",
  "flattenAnimatedNodeOffset",
  "extractAnimatedNodeOffset",
  "connectAnimatedNodeToView",
  "disconnectAnimatedNodeFromView",
  "restoreDefaultValues",
  "dropAnimatedNode",
  "addAnimatedEventToView",
  "removeAnimatedEventFromView",
  "addListener",
  "removeListener",
];
if (javaScriptFlagGetter) {
  let arr = items.push("connectAnimatedNodeToShadowNodeFamily");
}
let obj = {};
length = items.length;
if (result) {
  let num3 = 0;
  let num4 = 0;
  if (0 < length) {
    do {
      let closure_0 = num3 + 1;
      obj[items[num3]] = () => {
        let immediate;
        const items = [closure_0, ...HermesBuiltin.copyRestArgs()];
        navigation.push.apply(items);
        if (javaScriptFlagGetter) {
          const _clearImmediate = clearImmediate;
          clearImmediate(immediate);
          const _setImmediate = setImmediate;
          immediate = setImmediate(obj2.flushQueue);
        }
      };
      num3 = num4 + 1;
      num4 = num3;
    } while (num3 < length);
  }
} else {
  let num = 0;
  let num2 = 0;
  if (0 < length) {
    do {
      let tmp10 = items[num];
      closure_0 = tmp10;
      obj[tmp10] = () => {
        let immediate;
        const items = [...arguments];
        const tmp2 = nullthrowsDefault(shouldUseTurboAnimatedModule)[closure_0];
        let closure_1 = tmp2;
        if (!c8) {
          if (0 === closure_9.length) {
            if (javaScriptFlagGetter) {
              closure_9.push(() => closure_1(...items));
              const _clearImmediate = clearImmediate;
              clearImmediate(immediate);
              const _setImmediate = setImmediate;
              immediate = setImmediate(obj2.flushQueue);
            } else {
              const items1 = [];
              HermesBuiltin.arraySpread(items1, items, 0);
              HermesBuiltin.apply(tmp2, items1, undefined);
            }
          }
        }
        closure_9.push(() => closure_1(...items));
      };
      num = num2 + 1;
      num2 = num;
    } while (num < length);
  }
}
const obj2 = {
  addAnimatedEventToView(c4, arg1, item) {
    const result = obj.addAnimatedEventToView(c4, arg1, item);
  },
  connectAnimatedNodes(__getNativeTagResult, __makeNative) {
    obj.connectAnimatedNodes(__getNativeTagResult, __makeNative);
  },
  connectAnimatedNodeToShadowNodeFamily(self, nodeFromPublicInstance) {
    const connectAnimatedNodeToShadowNodeFamily = obj.connectAnimatedNodeToShadowNodeFamily;
    if (connectAnimatedNodeToShadowNodeFamily != null) {
      const result = connectAnimatedNodeToShadowNodeFamily(self, nodeFromPublicInstance);
    }
  },
  connectAnimatedNodeToView(self, findNodeHandleResult) {
    const result = obj.connectAnimatedNodeToView(self, findNodeHandleResult);
  },
  createAnimatedNode(newNodeTag, __getNativeConfigResult) {
    if (__getNativeConfigResult.disableBatchingForNativeCreate) {
      if (shouldUseTurboAnimatedModule != null) {
        const animatedNode = shouldUseTurboAnimatedModule.createAnimatedNode(newNodeTag, __getNativeConfigResult);
      }
    } else {
      const animatedNode1 = shouldUseTurboAnimatedModule.createAnimatedNode(newNodeTag, __getNativeConfigResult);
    }
  },
  disableQueue() {
    let immediate;
    _modDef38(shouldUseTurboAnimatedModule, "Native animated module is not available");
    obj = javaScriptFlagGetter;
    if (obj.animatedShouldDebounceQueueFlush()) {
      const _clearImmediate = clearImmediate;
      clearImmediate(immediate);
      const _setImmediate = setImmediate;
      immediate = setImmediate(obj2.flushQueue);
    } else {
      obj2.flushQueue();
    }
  },
  disconnectAnimatedNodeFromView(self, connectedViewTag) {
    const result = obj.disconnectAnimatedNodeFromView(self, connectedViewTag);
  },
  disconnectAnimatedNodes(__getNativeTagResult, __isNative) {
    const result = obj.disconnectAnimatedNodes(__getNativeTagResult, __isNative);
  },
  dropAnimatedNode(__nativeTag) {
    obj.dropAnimatedNode(__nativeTag);
  },
  extractAnimatedNodeOffset(self) {
    const result = obj.extractAnimatedNodeOffset(self);
  },
  flattenAnimatedNodeOffset(self) {
    const result = obj.flattenAnimatedNodeOffset(self);
  },
  flushQueue: result
    ? () => {
        const tmp4 = _modDef38(shouldUseTurboAnimatedModule, "Native animated module is not available");
        closure_11 = null;
        if (0 !== length.length) {
          const tmp6 = closure_14;
          if (!tmp6) {
            const tmpResult = _modDef92;
            closure_14 = tmpResult.addListener("onNativeAnimatedModuleGetValue", (tag) => {
              tag = tag.tag;
              if (closure_1_12[tag]) {
                closure_1_12[tag](tag.value);
                delete tmp[tag];
              }
            });
            const tmpResult2 = _modDef92;
            closure_15 = tmpResult2.addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
              let tmp = arg0;
              if (!Array.isArray(arg0)) {
                const items = [arg0];
                tmp = items;
              }
              for (const item10014 of tmp) {
                let animationId = item10014.animationId;
                let tmp5 = closure_1_13[animationId];
                if (tmp5) {
                  let tmp6Result = tmp6(tmp2);
                  delete tmp4[animationId];
                }
                continue;
              }
            });
          } else {
            let tmp7 = closure_15;
          }
          if (shouldUseTurboAnimatedModule != null) {
            const queueAndExecuteBatchedOperations = shouldUseTurboAnimatedModule.queueAndExecuteBatchedOperations;
            if (queueAndExecuteBatchedOperations != null) {
              const result = queueAndExecuteBatchedOperations(length);
            }
          }
          length.length = 0;
        }
      }
    : () => {
        _modDef38(shouldUseTurboAnimatedModule, "Native animated module is not available");
        closure_11 = null;
        let arr = closure_9;
        if (0 !== closure_9.length) {
          if (shouldUseTurboAnimatedModule != null) {
            const startOperationBatch = shouldUseTurboAnimatedModule.startOperationBatch;
            if (startOperationBatch != null) {
              startOperationBatch();
            }
          }
          let num2 = 0;
          if (0 < arr.length) {
            do {
              let tmp5 = closure_9[num2]();
              num2 = num2 + 1;
              arr = closure_9;
            } while (num2 < arr.length);
          }
          arr.length = 0;
          if (shouldUseTurboAnimatedModule != null) {
            const finishOperationBatch = shouldUseTurboAnimatedModule.finishOperationBatch;
            if (finishOperationBatch != null) {
              finishOperationBatch();
            }
          }
        }
      },
  getValue: result
    ? (arg0, arg1) => {
        const tmp = arg1;
        if (tmp) {
          closure_12[arg0] = arg1;
        }
        const value = obj.getValue(arg0);
      }
    : (arg0, arg1) => {
        const value = obj.getValue(arg0, arg1);
      },
  removeAnimatedEventFromView(arg0, arg1, animatedValueTag) {
    const result = obj.removeAnimatedEventFromView(arg0, arg1, animatedValueTag);
  },
  restoreDefaultValues(self) {
    const restoreDefaultValues = obj.restoreDefaultValues;
    if (restoreDefaultValues != null) {
      restoreDefaultValues(self);
    }
  },
  setAnimatedNodeOffset(self, _offset) {
    const result = obj.setAnimatedNodeOffset(self, _offset);
  },
  setAnimatedNodeValue(self, _startingValue) {
    obj.setAnimatedNodeValue(self, _startingValue);
  },
  setWaitingForIdentifier(combined) {
    if (!javaScriptFlagGetter) {
      set.add(combined);
      c8 = true;
      obj = javaScriptFlagGetter;
      const tmp7 = obj.animatedShouldDebounceQueueFlush() && closure_11;
      if (tmp7) {
        const _clearImmediate = clearImmediate;
        clearImmediate(closure_11);
      }
    }
  },
  startAnimatingNode: result
    ? (arg0, arg1, arg2, arg3) => {
        const tmp = arg3;
        if (tmp) {
          closure_13[arg0] = arg3;
        }
        obj.startAnimatingNode(arg0, arg1, arg2);
      }
    : (arg0, arg1, arg2, arg3) => {
        obj.startAnimatingNode(arg0, arg1, arg2, arg3);
      },
  startListeningToAnimatedNodeValue(__getNativeTagResult) {
    const result = obj.startListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  stopAnimation(arg0) {
    obj.stopAnimation(arg0);
  },
  stopListeningToAnimatedNodeValue(__getNativeTagResult) {
    const result = obj.stopListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  unsetWaitingForIdentifier(combined) {
    if (!javaScriptFlagGetter) {
      set.delete(combined);
      if (0 === set.size) {
        c8 = false;
        obj2.disableQueue();
      }
    }
  },
  updateAnimatedNodeConfig(self, self2) {
    const updateAnimatedNodeConfig = obj.updateAnimatedNodeConfig;
    if (updateAnimatedNodeConfig != null) {
      const result = updateAnimatedNodeConfig(self, self2);
    }
  },
};
let c19 = false;
const obj3 = {
  API: obj2,
  assertNativeAnimatedModule() {
    _modDef38(shouldUseTurboAnimatedModule, "Native animated module is not available");
  },
  generateNewAnimationId() {
    closure_6 = tmp + 1;
    return +closure_6;
  },
  generateNewNodeTag() {
    closure_5 = tmp + 1;
    return +closure_5;
  },
  shouldSignalBatch: javaScriptFlagGetter,
  shouldUseNativeDriver(useNativeDriver) {
    if (null == useNativeDriver.useNativeDriver) {
      const _console = console;
      console.warn(
        "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
      );
    }
    if (true === useNativeDriver.useNativeDriver) {
      let flag;
      if (!shouldUseTurboAnimatedModule) {
        flag = false;
        if (!c19) {
          const _console2 = console;
          console.warn(
            "Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md",
          );
          c19 = true;
          flag = false;
        }
      }
      return flag;
    }
    flag = useNativeDriver.useNativeDriver || false;
  },
  transformDataType(item) {
    let tmp = item;
    if (typeof item === "string") {
      let result;
      if (item.endsWith("deg")) {
        const _parseFloat2 = parseFloat;
        const _Math = Math;
        result = ((parseFloat(item) || 0) * Math.PI) / 180;
        parseFloat(item) || 0;
      } else {
        result = item;
        if (item.endsWith("rad")) {
          const _parseFloat = parseFloat;
          result = parseFloat(item) || 0;
          parseFloat(item) || 0;
        }
      }
      tmp = result;
    }
    return tmp;
  },
};
Object.defineProperty(obj3, "nativeEventEmitter", {
  get: function () {
    let tmp = closure_3;
    if (!tmp) {
      const self = this;
      const self2 = this;
      const tmp5 = new require("metro/00209__.js")(null);
      closure_3 = tmp5;
      tmp = tmp5;
    }
    return tmp;
  },
  set: undefined,
});

export default obj3;
