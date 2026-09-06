// _runtime/00357_result1.js
import _modDef361 from "metro/00361__.js";
import javaScriptFlagGetter from "metro/00358__.js";
import javaScriptFlagGetter from "metro/00027__.js";

let closure_0 = importDefault;
if (javaScriptFlagGetter == null) {
  javaScriptFlagGetter = _modDef361;
}
let closure_5 = 1;
let closure_6 = 1;
const set = new Set();
let c8 = false;
let closure_9 = [];
let closure_10 = [];
let prop;
if (javaScriptFlagGetter != null) {
  prop = javaScriptFlagGetter.queueAndExecuteBatchedOperations;
}
let result = null != prop;
if (result) {
  result = javaScriptFlagGetter.animatedShouldUseSingleOp();
  const importAllResult = javaScriptFlagGetter;
}
let c11 = null;
let closure_12 = {};
let closure_13 = {};
let closure_14 = null;
let closure_15 = null;
javaScriptFlagGetter.cxxNativeAnimatedEnabled();
javaScriptFlagGetter = javaScriptFlagGetter.cxxNativeAnimatedEnabled();
if (javaScriptFlagGetter) {
  javaScriptFlagGetter = javaScriptFlagGetter.useSharedAnimatedBackend();
  const importAllResult3 = javaScriptFlagGetter;
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
  items.push("connectAnimatedNodeToShadowNodeFamily");
}
let obj = {};
if (result) {
  let num3 = 0;
  let num4 = 0;
  if (tmp9) {
    do {
      closure_0 = num3 + 1;
      obj[items[num3]] = () => {
        const items = [closure_0, ...HermesBuiltin.copyRestArgs()];
        c10.push.apply(items);
        if (value) {
          const _clearImmediate = clearImmediate;
          clearImmediate(immediate);
          const _setImmediate = setImmediate;
          immediate = setImmediate(collapsedCategories.flushQueue);
        }
      };
      num3 = num4 + 1;
      num4 = num3;
    } while (num3 < length);
  }
} else {
  let num = 0;
  let num2 = 0;
  if (tmp9) {
    do {
      let tmp10 = items[num];
      closure_0 = tmp10;
      obj[tmp10] = () => {
        const items = [...arguments];
        const tmp = closure_0(70)(closure_4)[closure_0];
        closure_1 = tmp;
        if (!closure_8) {
          if (0 === closure_9.length) {
            if (value) {
              closure_9.push(() => closure_1(...items));
              const _clearImmediate = clearImmediate;
              clearImmediate(immediate);
              const _setImmediate = setImmediate;
              immediate = setImmediate(collapsedCategories.flushQueue);
            } else {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
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
obj = {
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
      if (javaScriptFlagGetter != null) {
        const animatedNode = javaScriptFlagGetter.createAnimatedNode(newNodeTag, __getNativeConfigResult);
      }
    } else {
      const animatedNode1 = javaScriptFlagGetter.createAnimatedNode(newNodeTag, __getNativeConfigResult);
    }
  },
  disableQueue() {
    closure_0(38)(javaScriptFlagGetter, "Native animated module is not available");
    obj = javaScriptFlagGetter;
    if (obj.animatedShouldDebounceQueueFlush()) {
      const _clearImmediate = clearImmediate;
      clearImmediate(immediate);
      const _setImmediate = setImmediate;
      immediate = setImmediate(obj.flushQueue);
    } else {
      obj.flushQueue();
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
        closure_0(38)(javaScriptFlagGetter, "Native animated module is not available");
        c11 = null;
        if (0 !== closure_10.length) {
          if (!closure_14) {
            let tmpResult = closure_0(92);
            closure_14 = tmpResult.addListener("onNativeAnimatedModuleGetValue", (value) => {
              if (closure_1_12[value.tag]) {
                tmp3(value.value);
                delete tmp[tmp2];
              }
            });
            tmpResult = closure_0(92);
            closure_15 = tmpResult.addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
              let tmp3 = arg0;
              if (!Array.isArray(arg0)) {
                const items = [arg0];
                tmp3 = items;
              }
              for (const item10014 of tmp3) {
                let animationId = item10014.animationId;
                let tmp7 = closure_1_13[animationId];
                if (tmp7) {
                  let tmp8Result = tmp8(tmp4);
                  delete tmp2[tmp];
                }
                continue;
              }
            });
          }
          if (javaScriptFlagGetter != null) {
            const queueAndExecuteBatchedOperations = javaScriptFlagGetter.queueAndExecuteBatchedOperations;
            if (queueAndExecuteBatchedOperations != null) {
              const result = queueAndExecuteBatchedOperations(closure_10);
            }
          }
          closure_10.length = 0;
        }
      }
    : () => {
        closure_0(38)(javaScriptFlagGetter, "Native animated module is not available");
        c11 = null;
        let arr = closure_9;
        if (0 !== closure_9.length) {
          if (javaScriptFlagGetter != null) {
            const startOperationBatch = javaScriptFlagGetter.startOperationBatch;
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
            } while (num2 < length);
          }
          arr.length = 0;
          if (javaScriptFlagGetter != null) {
            const finishOperationBatch = javaScriptFlagGetter.finishOperationBatch;
            if (finishOperationBatch != null) {
              finishOperationBatch();
            }
          }
        }
      },
  getValue: result
    ? (arg0, arg1) => {
        if (arg1) {
          closure_12[arg0] = arg1;
        }
        value = obj.getValue(arg0);
      }
    : (arg0, arg1) => {
        value = obj.getValue(arg0, arg1);
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
      if (tmp6) {
        const _clearImmediate = clearImmediate;
        clearImmediate(c11);
      }
      tmp6 = javaScriptFlagGetter.animatedShouldDebounceQueueFlush() && c11;
    }
  },
  startAnimatingNode: result
    ? (arg0, arg1, arg2, arg3) => {
        if (arg3) {
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
        obj.disableQueue();
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
const obj1 = {
  API: obj,
  assertNativeAnimatedModule() {
    closure_0(38)(javaScriptFlagGetter, "Native animated module is not available");
  },
  generateNewAnimationId() {
    closure_6 = tmp + 1;
    return +closure_6;
  },
  generateNewNodeTag() {
    closure_5 = tmp + 1;
    return +closure_5;
  },
};
Object.defineProperty(obj1, "nativeEventEmitter", {
  get: () => {
    let tmp = closure_3;
    if (!closure_3) {
      const tmp7 = new closure_0(209)(null);
      closure_3 = tmp7;
      tmp = tmp7;
    }
    return tmp;
  },
  set: undefined,
});
obj1.shouldSignalBatch = javaScriptFlagGetter;
obj1.shouldUseNativeDriver = function shouldUseNativeDriver(useNativeDriver) {
  if (null == useNativeDriver.useNativeDriver) {
    const _console = console;
    console.warn(
      "Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`",
    );
  }
  if (true === useNativeDriver.useNativeDriver) {
    if (!javaScriptFlagGetter) {
      let flag = false;
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
  const tmp7 = useNativeDriver.useNativeDriver || false;
};
obj1.transformDataType = function transformDataType(item) {
  if (typeof item !== "string") {
    return item;
  } else if (item.endsWith("deg")) {
    const _parseFloat2 = parseFloat;
    const _Math = Math;
    let result = ((parseFloat(item) || 0) * Math.PI) / 180;
    const tmp5 = parseFloat(item) || 0;
  } else {
    result = item;
    if (item.endsWith("rad")) {
      const _parseFloat = parseFloat;
      result = parseFloat(item) || 0;
      const tmp3 = parseFloat(item) || 0;
    }
  }
};

export default obj1;
