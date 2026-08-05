// _runtime/00357_set.js
import importDefaultResult from "shouldUseTurboAnimatedModule";
import importAllResult1 from "javaScriptFlagGetter";

let importDefault;
if (importDefaultResult == null) {
  importDefaultResult = require("shouldUseTurboAnimatedModule");
}
let c4 = importDefaultResult;
let c5 = 1;
let c6 = 1;
const set = new Set();
let c8 = false;
let closure_9 = [];
let closure_10 = [];
let prop;
if (importDefaultResult != null) {
  prop = importDefaultResult.queueAndExecuteBatchedOperations;
}
let result = null != prop;
if (result) {
  result = require("javaScriptFlagGetter").animatedShouldUseSingleOp();
  const importAllResult = require("javaScriptFlagGetter");
}
let c11 = null;
let closure_12 = {};
let closure_13 = {};
let c14 = null;
let c15 = null;
const result1 = require("javaScriptFlagGetter").cxxNativeAnimatedEnabled();
let result2 = require("javaScriptFlagGetter").cxxNativeAnimatedEnabled();
if (result2) {
  result2 = require("javaScriptFlagGetter").useSharedAnimatedBackend();
  const importAllResult3 = require("javaScriptFlagGetter");
}
let items = ["createAnimatedNode", "updateAnimatedNodeConfig", "getValue", "startListeningToAnimatedNodeValue", "stopListeningToAnimatedNodeValue", "connectAnimatedNodes", "disconnectAnimatedNodes", "startAnimatingNode", "stopAnimation", "setAnimatedNodeValue", "setAnimatedNodeOffset", "flattenAnimatedNodeOffset", "extractAnimatedNodeOffset", "connectAnimatedNodeToView", "disconnectAnimatedNodeFromView", "restoreDefaultValues", "dropAnimatedNode", "addAnimatedEventToView", "removeAnimatedEventFromView", "addListener", "removeListener"];
if (result2) {
  items.push("connectAnimatedNodeToShadowNodeFamily");
}
let obj = {};
if (result) {
  let num3 = 0;
  let num4 = 0;
  if (tmp9) {
    do {
      importDefault = num3 + 1;
      obj[items[num3]] = () => {
        const items = [closure_0, ...HermesBuiltin.copyRestArgs()];
        outer1_10.push.apply(items);
        if (outer1_16) {
          const _clearImmediate = clearImmediate;
          clearImmediate(outer1_11);
          const _setImmediate = setImmediate;
          outer1_11 = setImmediate(outer1_18.flushQueue);
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
      importDefault = tmp10;
      obj[tmp10] = () => {
        const items = [...arguments];
        let c1;
        const tmp = outer1_0(outer1_2[3])(outer1_4)[items];
        c1 = tmp;
        if (!outer1_8) {
          if (0 === outer1_9.length) {
            if (outer1_16) {
              outer1_9.push(() => _undefined(...items));
              const _clearImmediate = clearImmediate;
              clearImmediate(outer1_11);
              const _setImmediate = setImmediate;
              outer1_11 = setImmediate(outer1_18.flushQueue);
            } else {
              const items1 = [];
              HermesBuiltin.arraySpread(items, 0);
              HermesBuiltin.apply(items1, undefined);
            }
          }
        }
        outer1_9.push(() => _undefined(...items));
      };
      num = num2 + 1;
      num2 = num;
    } while (num < length);
  }
}
obj = {
  addAnimatedEventToView(c4, closure_0, arg2) {
    const result = obj.addAnimatedEventToView(c4, closure_0, arg2);
  },
  connectAnimatedNodes(__getNativeTagResult, arg1) {
    obj.connectAnimatedNodes(__getNativeTagResult, arg1);
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
      if (closure_4 != null) {
        const animatedNode = obj.createAnimatedNode(newNodeTag, __getNativeConfigResult);
      }
    } else {
      const animatedNode1 = obj.createAnimatedNode(newNodeTag, __getNativeConfigResult);
    }
  },
  disableQueue() {
    importDefault(38)(closure_4, "Native animated module is not available");
    const obj = importAll(27);
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
  disconnectAnimatedNodes(__getNativeTagResult, arg1) {
    const result = obj.disconnectAnimatedNodes(__getNativeTagResult, arg1);
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
  flushQueue: result ? (() => {
    importDefault(38)(closure_4, "Native animated module is not available");
    let c11 = null;
    if (0 !== length.length) {
      if (!closure_14) {
        let tmpResult = tmp(92);
        closure_14 = tmpResult.addListener("onNativeAnimatedModuleGetValue", (value) => {
          if (table[value.tag]) {
            tmp3(value.value);
            delete tmp[tmp2];
          }
        });
        tmpResult = tmp(92);
        let closure_15 = tmpResult.addListener("onNativeAnimatedModuleAnimationFinished", (arg0) => {
          let tmp3 = arg0;
          if (!Array.isArray(arg0)) {
            const items = [arg0];
            tmp3 = items;
          }
          for (const item10014 of tmp3) {
            let animationId = item10014.animationId;
            let tmp5 = animationId;
            let tmp6 = table2;
            let tmp7 = table2[animationId];
            if (tmp7) {
              let tmp9 = tmp7;
              let tmp10 = item10014;
              let tmp8Result = tmp8(tmp4);
              let tmp12 = animationId;
              delete tmp2[tmp];
            }
            continue;
          }
        });
      }
      if (tmp3 != null) {
        const queueAndExecuteBatchedOperations = tmp3.queueAndExecuteBatchedOperations;
        if (queueAndExecuteBatchedOperations != null) {
          const result = queueAndExecuteBatchedOperations(tmp5);
        }
      }
      tmp5.length = 0;
    }
  }) : (() => {
    importDefault(38)(closure_4, "Native animated module is not available");
    let c11 = null;
    let arr = lib;
    if (0 !== lib.length) {
      if (tmp != null) {
        const startOperationBatch = tmp.startOperationBatch;
        if (startOperationBatch != null) {
          startOperationBatch();
        }
      }
      let num2 = 0;
      if (0 < arr.length) {
        do {
          let tmp4 = lib;
          let tmp5 = lib[num2]();
          num2 = num2 + 1;
          arr = lib;
        } while (num2 < length);
      }
      arr.length = 0;
      if (closure_4 != null) {
        const finishOperationBatch = tmp6.finishOperationBatch;
        if (finishOperationBatch != null) {
          finishOperationBatch();
        }
      }
      tmp6 = closure_4;
    }
  }),
  getValue: result ? ((arg0, arg1) => {
    if (arg1) {
      closure_12[arg0] = arg1;
    }
    const value = obj.getValue(arg0);
  }) : ((arg0, arg1) => {
    const value = obj.getValue(arg0, arg1);
  }),
  removeAnimatedEventFromView(closure_4, closure_0, animatedValueTag) {
    const result = obj.removeAnimatedEventFromView(closure_4, closure_0, animatedValueTag);
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
    if (!result1) {
      set.add(combined);
      let c8 = true;
      const obj = importAll(27);
      if (tmp6) {
        const _clearImmediate = clearImmediate;
        clearImmediate(c11);
      }
      tmp6 = importAll(27).animatedShouldDebounceQueueFlush() && c11;
    }
  },
  startAnimatingNode: result ? ((arg0, arg1, arg2, arg3) => {
    if (arg3) {
      closure_13[arg0] = arg3;
    }
    obj.startAnimatingNode(arg0, arg1, arg2);
  }) : ((arg0, arg1, arg2, arg3) => {
    obj.startAnimatingNode(arg0, arg1, arg2, arg3);
  }),
  startListeningToAnimatedNodeValue(__getNativeTagResult) {
    const result = obj.startListeningToAnimatedNodeValue(__getNativeTagResult);
  },
  stopAnimation(arg0) {
    obj.stopAnimation(arg0);
  },
  stopListeningToAnimatedNodeValue(closure_1) {
    const result = obj.stopListeningToAnimatedNodeValue(closure_1);
  },
  unsetWaitingForIdentifier(combined) {
    if (!result1) {
      set.delete(combined);
      if (0 === set.size) {
        let c8 = false;
        obj.disableQueue();
      }
    }
  },
  updateAnimatedNodeConfig(arg0, self) {
    const updateAnimatedNodeConfig = obj.updateAnimatedNodeConfig;
    if (updateAnimatedNodeConfig != null) {
      const result = updateAnimatedNodeConfig(arg0, self);
    }
  }
};
let c19 = false;
const obj1 = {
  API: obj,
  assertNativeAnimatedModule() {
    importDefault(38)(closure_4, "Native animated module is not available");
  },
  generateNewAnimationId() {
    let closure_6 = tmp + 1;
    return +closure_6;
  },
  generateNewNodeTag() {
    let closure_5 = tmp + 1;
    return +closure_5;
  }
};
Object.defineProperty(obj1, "nativeEventEmitter", {
  get: () => {
    let tmp = closure_3;
    if (!closure_3) {
      const tmp7 = new importDefault(209)(null);
      closure_3 = tmp7;
      tmp = tmp7;
    }
    return tmp;
  },
  set: undefined
});
obj1.shouldSignalBatch = result1;
obj1.shouldUseNativeDriver = function shouldUseNativeDriver(useNativeDriver) {
  if (null == useNativeDriver.useNativeDriver) {
    const _console = console;
    console.warn("Animated: `useNativeDriver` was not specified. This is a required option and must be explicitly set to `true` or `false`");
  }
  if (true === useNativeDriver.useNativeDriver) {
    if (!closure_4) {
      let flag = false;
      if (!c19) {
        const _console2 = console;
        console.warn("Animated: `useNativeDriver` is not supported because the native animated module is missing. Falling back to JS-based animation. To resolve this, add `RCTAnimation` module to this app, or remove `useNativeDriver`. Make sure to run `bundle exec pod install` first. Read more about autolinking: https://github.com/react-native-community/cli/blob/master/docs/autolinking.md");
        c19 = true;
        flag = false;
      }
    }
    return flag;
  }
  flag = useNativeDriver.useNativeDriver || false;
};
obj1.transformDataType = function transformDataType(str) {
  if (typeof str !== "string") {
    return str;
  } else if (str.endsWith("deg")) {
    const _parseFloat2 = parseFloat;
    const _Math = Math;
    let result = (parseFloat(str) || 0) * Math.PI / 180;
    const tmp5 = parseFloat(str) || 0;
  } else {
    result = str;
    if (str.endsWith("rad")) {
      const _parseFloat = parseFloat;
      result = parseFloat(str) || 0;
      const tmp3 = parseFloat(str) || 0;
    }
  }
};

export default obj1;