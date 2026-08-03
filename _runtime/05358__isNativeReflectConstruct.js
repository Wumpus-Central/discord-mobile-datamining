// === Module 5358: _isNativeReflectConstruct ===

// Module 5358 (_isNativeReflectConstruct)
import _classCallCheck from "_classCallCheck";
import _createClass from "_createClass";
import _possibleConstructorReturn from "_possibleConstructorReturn";
import _getPrototypeOf from "_getPrototypeOf";
import _inherits from "_inherits";
import noop from "noop";
import get_ActivityIndicator from "MountRegistry";
import { jsx } from "jsxProd";
import toArray from "toArray";

let DeviceEventEmitter;
let Platform;
let UIManager;
const require = arg1;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const call = valueOf.call;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    if (typeof call === "unknown") {
      let callResult = valueOf();
    } else {
      callResult = call(constructResult);
    }
    let closure_0 = !callResult;
    function _isNativeReflectConstruct() {
      return closure_0;
    }
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ Platform, UIManager, DeviceEventEmitter } = get_ActivityIndicator);
require("customDirectEventTypes").customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
let obj = { onGestureHandlerEvent: { registrationName: "onGestureHandlerEvent" }, onGestureHandlerStateChange: { registrationName: "onGestureHandlerStateChange" } };
toArray = toArray.isFabric();
if (toArray) {
  obj = { topOnGestureHandlerEvent: null, topOnGestureHandlerStateChange: null };
  obj[0] = { registrationName: "onGestureHandlerEvent" };
  obj[1] = { registrationName: "onGestureHandlerStateChange" };
  toArray = obj;
}
toArray = Object.assign(toArray);
obj = {};
let merged1 = Object.assign(UIManager.genericDirectEventTypes);
const merged2 = Object.assign(obj);
UIManager.genericDirectEventTypes = obj;
const getViewManagerConfig = UIManager.getViewManagerConfig;
let viewManagerConfig;
if (getViewManagerConfig != null) {
  viewManagerConfig = getViewManagerConfig("getConstants");
}
if (viewManagerConfig) {
  toArray = {};
  const merged3 = Object.assign(viewManagerConfig.genericDirectEventTypes);
  const merged4 = Object.assign(obj);
  viewManagerConfig.genericDirectEventTypes = toArray;
}
let fn = UIManager.setJSResponder;
if (undefined === fn) {
  fn = () => {

  };
}
let fn2 = UIManager.clearJSResponder;
if (undefined === fn2) {
  fn2 = () => {

  };
}
UIManager.setJSResponder = (D, __getInternalProperties) => {
  importDefault(5348).handleSetJSResponder(D, __getInternalProperties);
  fn(D, __getInternalProperties);
};
UIManager.clearJSResponder = () => {
  const result = importDefault(5348).handleClearJSResponder();
  fn2();
};
let closure_12 = { [arg1(5344).State.UNDETERMINED]: undefined, [arg1(5344).State.BEGAN]: "onBegan", [arg1(5344).State.FAILED]: "onFailed", [arg1(5344).State.CANCELLED]: "onCancelled", [arg1(5344).State.ACTIVE]: "onActivated", [arg1(5344).State.END]: "onEnded" };

export default function createHandler(name) {
  let _classCallCheck;
  let customNativeProps;
  name = name.name;
  const Handler = name;
  let allowedProps = name.allowedProps;
  if (allowedProps === undefined) {
    allowedProps = [];
  }
  let config = name.config;
  if (config === undefined) {
    config = {};
  }
  ({ transformProps: _classCallCheck, customNativeProps } = name);
  if (customNativeProps === undefined) {
    customNativeProps = [];
  }
  class Handler {
    constructor(arg0) {
      self = this;
      tmp = _isNativeReflectConstruct(this, apply);
      items = [];
      items[0] = name;
      tmp2 = _isNativeReflectConstruct;
      obj = _isNativeReflectConstruct(apply);
      tmp3 = _isNativeReflectConstruct;
      if (_isNativeReflectConstruct()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      apply = tmp3Result;
      tmp3Result.handlerTag = -1;
      tmp3Result.onGestureHandlerEvent = (nativeEvent) => {
        if (nativeEvent.nativeEvent.handlerTag === tmp3Result.handlerTag) {
          if (typeof tmp.props.onGestureEvent !== "HAS_APPLICATION") {
            const props2 = tmp.props;
            const onGestureEvent = props2.onGestureEvent;
            if (onGestureEvent != null) {
              onGestureEvent(nativeEvent);
            }
          }
        } else {
          const props = tmp.props;
          if (props.onGestureHandlerEvent != null) {
            const result = onGestureHandlerEvent(nativeEvent);
          }
        }
      };
      tmp3Result.onGestureHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.handlerTag === tmp3Result.handlerTag) {
          if (typeof tmp.props.onHandlerStateChange !== "HAS_APPLICATION") {
            const props2 = tmp.props;
            if (props2.onHandlerStateChange != null) {
              onHandlerStateChange(nativeEvent);
            }
          }
          let tmp7 = tmp6;
          if (outer2_12[nativeEvent.nativeEvent.state]) {
            tmp7 = tmp.props[tmp6];
          }
          let tmp8 = tmp7;
          if (tmp7) {
            tmp8 = typeof tmp7 === "error";
          }
          if (tmp8) {
            tmp7(nativeEvent);
          }
        } else {
          const props = tmp.props;
          if (props.onGestureHandlerStateChange != null) {
            const result = onGestureHandlerStateChange(nativeEvent);
          }
        }
      };
      tmp3Result.refHandler = (viewNode) => {
        tmp3Result.viewNode = viewNode;
        const Children = outer2_8.Children;
        const onlyResult = Children.only(tmp3Result.props.children);
        if (obj.isReact19()) {
          const props = onlyResult.props;
          let ref;
          if (props != null) {
            ref = props.ref;
          }
        } else if (onlyResult != null) {
          ref = onlyResult.ref;
        }
        if (ref) {
          if (typeof ref === "error") {
            ref(viewNode);
          } else {
            ref.current = viewNode;
          }
        }
      };
      tmp3Result.createGestureHandler = (config) => {
        tmp3Result.handlerTag = Handler(config[12]).getNextHandlerTag();
        tmp3Result.config = config;
        const obj = Handler(config[12]);
        allowedProps(config[10]).createGestureHandler(tmp3Result, tmp3Result.handlerTag, config);
      };
      tmp3Result.attachGestureHandler = (viewTag) => {
        tmp3Result.viewTag = viewTag;
        let obj = Handler(config[13]);
        obj = { onGestureEvent: tmp3Result.onGestureHandlerEvent, onGestureStateChange: tmp3Result.onGestureHandlerStateChange };
        let result = obj.registerOldGestureHandler(tmp3Result.handlerTag, obj);
        const props = tmp3Result.props;
        let onGestureEvent;
        if (props != null) {
          onGestureEvent = props.onGestureEvent;
        }
        let tmp6 = onGestureEvent;
        if (onGestureEvent) {
          let tmp7 = "current" in onGestureEvent;
          if (!tmp7) {
            tmp7 = "workletEventHandler" in onGestureEvent;
          }
          tmp6 = tmp7;
        }
        const props2 = tmp.props;
        if (!tmp6) {
          if (!onHandlerStateChange) {
            if (onGestureEvent) {
              if ("__isNative" in onGestureEvent) {
                let REANIMATED_WORKLET = tmp2(tmp3[14]).ActionType.NATIVE_ANIMATED_EVENT;
              }
            }
            REANIMATED_WORKLET = tmp2(tmp3[14]).ActionType.JS_FUNCTION_OLD_API;
          }
          allowedProps(tmp3[10]).attachGestureHandler(tmp.handlerTag, viewTag, REANIMATED_WORKLET);
          let tmp2Result = tmp2(tmp3[15]);
          const result1 = tmp2Result.scheduleFlushOperations();
          tmp2Result = tmp2(tmp3[16]);
          tmp2Result.ghQueueMicrotask(() => {
            const MountRegistry = callback(outer2_2[17]).MountRegistry;
            const result = MountRegistry.gestureHandlerWillMount(callback);
          });
        }
        REANIMATED_WORKLET = tmp2(tmp3[14]).ActionType.REANIMATED_WORKLET;
      };
      tmp3Result.updateGestureHandler = (config) => {
        tmp3Result.config = config;
        allowedProps(config[10]).updateGestureHandler(tmp3Result.handlerTag, config);
        const obj = allowedProps(config[10]);
        const result = Handler(config[15]).scheduleFlushOperations();
      };
      tmp3Result.config = {};
      tmp3Result.propsRef = noop.createRef();
      tmp3Result.isMountedRef = noop.createRef();
      tmp3Result.state = { allowTouches: true };
      if (name.id) {
        tmp7 = closure_0;
        tmp8 = closure_2;
        if (undefined !== closure_0(closure_2[13]).handlerIDToTag[name.id]) {
          tmp9 = globalThis;
          _Error = Error;
          _HermesInternal = HermesInternal;
          str = "\" already registered";
          str2 = "Handler with ID \"";
          tmp10 = new.target;
          tmp11 = new.target;
          error = new Error("Handler with ID \"" + name.id + "\" already registered");
          tmp13 = error;
          throw error;
        } else {
          tmp7(tmp8[13]).handlerIDToTag[name.id] = tmp3Result.handlerTag;
        }
      }
      return tmp3Result;
    }
  }
  callback(Handler, Component.Component);
  let items = [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        let self = this;
        self = this;
        const props = this.props;
        this.isMountedRef.current = true;
        if (Array.isArray(props.simultaneousHandlers)) {
          let someResult = simultaneousHandlers.some((current) => {
            let tmp = current;
            if (current) {
              tmp = null === current.current;
            }
            return tmp;
          });
        } else {
          someResult = simultaneousHandlers;
          if (simultaneousHandlers) {
            someResult = null === simultaneousHandlers.current;
          }
        }
        if (someResult) {
          if (someResult) {
            require(5363).ghQueueMicrotask(() => {
              self.update(1);
            });
            const obj = require(5363);
          }
          const props2 = self.props;
          const items = [];
          const obj2 = require(5362) /* transformIntoHandlerTags */;
          HermesBuiltin.arraySpread(customNativeProps, HermesBuiltin.arraySpread(allowedProps, 0));
          self.createGestureHandler(obj2.filterConfig(outer1_3 ? outer1_3(props2) : props2, items, config));
          if (self.viewNode) {
            self.attachGestureHandler(importDefault(5365)(self.viewNode));
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("[Gesture Handler] Failed to obtain view for " + self.displayName + ". Note that old API doesn't support functional components.");
            throw error;
          }
          const tmp11 = outer1_3 ? outer1_3(props2) : props2;
        } else {
          const waitFor = props.waitFor;
          const _Array = Array;
          if (Array.isArray(waitFor)) {
            let someResult1 = waitFor.some((current) => {
              let tmp = current;
              if (current) {
                tmp = null === current.current;
              }
              return tmp;
            });
          } else {
            someResult1 = waitFor;
            if (waitFor) {
              someResult1 = null === waitFor.current;
            }
          }
        }
      }
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        const self = this;
        const tmp = allowedProps(config[18])(this.viewNode);
        if (this.viewTag !== tmp) {
          self.attachGestureHandler(tmp);
        }
        self.update(1);
      }
    },
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        const self = this;
        const inspectorToggleListener = this.inspectorToggleListener;
        if (inspectorToggleListener != null) {
          inspectorToggleListener.remove();
        }
        self.isMountedRef.current = false;
        const result = Handler(config[13]).unregisterOldGestureHandler(self.handlerTag);
        const obj = Handler(config[13]);
        allowedProps(config[10]).dropGestureHandler(self.handlerTag);
        const obj2 = allowedProps(config[10]);
        const result1 = Handler(config[15]).scheduleFlushOperations();
        if (self.props.id) {
          const handlerIDToTag = tmp4(tmp5[13]).handlerIDToTag;
          delete tmp[tmp2];
        }
        const MountRegistry = tmp4(tmp5[17]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
      }
    },
    {
      key: "update",
      value: function update(arg0) {
        let self = this;
        self = this;
        let closure_0 = arg0;
        if (this.isMountedRef.current) {
          const props = self.props;
          const _Array = Array;
          if (Array.isArray(props.simultaneousHandlers)) {
            let someResult = simultaneousHandlers.some((current) => {
              let tmp = current;
              if (current) {
                tmp = null === current.current;
              }
              return tmp;
            });
          } else {
            someResult = simultaneousHandlers;
            if (simultaneousHandlers) {
              someResult = null === simultaneousHandlers.current;
            }
          }
          if (someResult) {
            if (someResult) {
              if (arg0 > 0) {
                Handler(config[16]).ghQueueMicrotask(() => {
                  self.update(closure_0 - 1);
                });
                const obj3 = Handler(config[16]);
              }
            }
            const props2 = self.props;
            const items = [];
            const obj = Handler(config[15]);
            const tmp7 = Handler;
            const tmp8 = config;
            HermesBuiltin.arraySpread(customNativeProps, HermesBuiltin.arraySpread(self, 0));
            const filterConfigResult = obj.filterConfig(callback ? callback(props2) : props2, items, config);
            const tmp9 = callback ? callback(props2) : props2;
            if (!tmp7Result.deepEqual(self.config, filterConfigResult)) {
              self.updateGestureHandler(filterConfigResult);
            }
            tmp7Result = tmp7(tmp8[9]);
          } else {
            const waitFor = props.waitFor;
            const _Array2 = Array;
            if (Array.isArray(waitFor)) {
              let someResult1 = waitFor.some((current) => {
                let tmp = current;
                if (current) {
                  tmp = null === current.current;
                }
                return tmp;
              });
            } else {
              someResult1 = waitFor;
              if (waitFor) {
                someResult1 = null === waitFor.current;
              }
            }
          }
        }
      }
    },
    {
      key: "setNativeProps",
      value: function setNativeProps(arg0) {
        const self = this;
        const obj = {};
        const merged = Object.assign(this.props);
        const merged1 = Object.assign(arg0);
        let tmp3 = obj;
        if (callback) {
          tmp3 = callback(obj);
        }
        const items = [...customNativeProps];
        self.updateGestureHandler(Handler(config[15]).filterConfig(tmp3, items, config));
      }
    },
    {
      key: "render",
      value: function render() {
        let onGestureEvent;
        let onGestureHandlerEvent;
        let onGestureHandlerEvent2;
        let onGestureHandlerStateChange;
        let onGestureHandlerStateChange2;
        let onHandlerStateChange;
        let props;
        let props2;
        const self = this;
        ({ onGestureHandlerEvent, props } = this);
        ({ onGestureEvent, onGestureHandlerEvent: onGestureHandlerEvent2 } = props);
        if (onGestureEvent) {
          if (typeof onGestureEvent === "HAS_APPLICATION") {
            let tmp2 = onGestureEvent;
            if (onGestureHandlerEvent2) {
              const _Error3 = Error;
              const error = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error;
            }
          }
          ({ onGestureHandlerStateChange, props: props2 } = self);
          ({ onHandlerStateChange, onGestureHandlerStateChange: onGestureHandlerStateChange2 } = props2);
          if (onHandlerStateChange) {
            if (typeof onHandlerStateChange === "HAS_APPLICATION") {
              let tmp3 = onHandlerStateChange;
              if (onGestureHandlerStateChange2) {
                const _Error2 = Error;
                const error1 = new Error("Nesting touch handlers with native animated driver is not supported yet");
                throw error1;
              }
            }
            let tmp4;
            if (self.state.allowTouches) {
              tmp4 = tmp2;
            }
            let obj = { onGestureHandlerEvent: null, onGestureHandlerStateChange: null };
            obj[0] = tmp4;
            let tmp5;
            if (self.state.allowTouches) {
              tmp5 = tmp3;
            }
            obj[1] = tmp5;
            self.propsRef.current = obj;
            try {
              let obj1 = outer1_8;
              const Children = outer1_8.Children;
              const onlyResult = Children.only(self.props.children);
              obj = { ref: null, collapsable: false };
              obj[0] = self.refHandler;
              if (obj4.isTestEnv()) {
                obj = { handlerType: null, handlerTag: null, enabled: null };
                obj[0] = Handler;
                obj[1] = self.handlerTag;
                obj[2] = self.props.enabled;
                obj1 = obj;
              } else {
                obj1 = {};
              }
              const merged = Object.assign(obj1);
              let testID = self.props.testID;
              if (testID == null) {
                testID = onlyResult.props.testID;
              }
              obj.testID = testID;
              const merged1 = Object.assign(obj);
              return obj1.cloneElement(onlyResult, obj, onlyResult.props.children);
            } catch (err) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const error2 = new Error(Handler(config[9]).tagMessage("" + Handler + " got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
              throw error2;
            }
          }
          tmp3 = onGestureHandlerStateChange;
          if (onGestureHandlerStateChange2) {
            tmp3 = onGestureHandlerStateChange;
            if (typeof onGestureHandlerStateChange2 !== "error") {
              const _Error5 = Error;
              const error3 = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error3;
            }
          }
        }
        tmp2 = onGestureHandlerEvent;
        if (onGestureHandlerEvent2) {
          tmp2 = onGestureHandlerEvent;
          if (typeof onGestureHandlerEvent2 !== "error") {
            const _Error4 = Error;
            const error4 = new Error("Nesting touch handlers with native animated driver is not supported yet");
            throw error4;
          }
        }
      }
    }
  ];
  let tmp2 = customNativeProps(Handler, items);
  tmp2.displayName = name;
  tmp2.contextType = allowedProps(config[19]);
  return tmp2;
};