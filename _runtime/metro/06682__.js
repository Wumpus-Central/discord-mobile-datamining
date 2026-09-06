// _runtime/metro/06682__.js
import handlerIDToTag2 from "../06659_handlerIDToTag.js";
import tagMessage from "../06660_tagMessage.js";
import _mod6677 from "06677__.js";
import RNGestureHandlerModuleDefault from "../06684_RNGestureHandlerModule.js";
import transformIntoHandlerTags from "../06686_transformIntoHandlerTags.js";
import ghQueueMicrotask from "../06687_ghQueueMicrotask.js";
import ActionType from "../06688_ActionType.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import hasOwnProperty from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _inherits from "../00098__inherits.js";
import noop from "00019__.js";

require = fn;
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
    closure_0 = !callResult;
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
get_ActivityIndicator = fn(17);
({ DeviceEventEmitter, Platform } = get_ActivityIndicator);
const jsx = fn(21).jsx;
fn(6683).customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
let closure_10 = {
  [fn(6661).State.UNDETERMINED]: undefined,
  [fn(6661).State.BEGAN]: "onBegan",
  [fn(6661).State.FAILED]: "onFailed",
  [fn(6661).State.CANCELLED]: "onCancelled",
  [fn(6661).State.ACTIVE]: "onActivated",
  [fn(6661).State.END]: "onEnded",
};

export default function createHandler(name) {
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
      tmp = closure_3(this, Handler);
      items = [];
      items[0] = name;
      tmp2 = metroRequire;
      obj = metroRequire(Handler);
      tmp3 = hasOwnProperty;
      if (closure_9()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      closure_0 = tmp3Result;
      tmp3Result.handlerTag = -1;
      tmp3Result.onGestureHandlerEvent = (nativeEvent) => {
        if (nativeEvent.nativeEvent.handlerTag === closure_0.handlerTag) {
          if (typeof closure_0.props.onGestureEvent === "function") {
            const props2 = closure_0.props;
            const onGestureEvent = props2.onGestureEvent;
            if (onGestureEvent != null) {
              onGestureEvent(nativeEvent);
            }
          }
        } else {
          const props = closure_0.props;
          if (props.onGestureHandlerEvent != null) {
            const result = onGestureHandlerEvent(nativeEvent);
          }
        }
      };
      tmp3Result.onGestureHandlerStateChange = (nativeEvent) => {
        if (nativeEvent.nativeEvent.handlerTag === closure_0.handlerTag) {
          if (typeof closure_0.props.onHandlerStateChange === "function") {
            const props2 = closure_0.props;
            if (props2.onHandlerStateChange != null) {
              onHandlerStateChange(nativeEvent);
            }
          }
          let tmp7 = tmp6;
          if (closure_10[nativeEvent.nativeEvent.state]) {
            tmp7 = closure_0.props[tmp6];
          }
          let tmp8 = tmp7;
          if (tmp7) {
            tmp8 = typeof tmp7 === "function";
          }
          if (tmp8) {
            tmp7(nativeEvent);
          }
        } else {
          const props = closure_0.props;
          if (props.onGestureHandlerStateChange != null) {
            const result = onGestureHandlerStateChange(nativeEvent);
          }
        }
      };
      tmp3Result.refHandler = (viewNode) => {
        closure_0.viewNode = viewNode;
        const Children = noop.Children;
        const props = Children.only(closure_0.props.children).props;
        let ref;
        if (props != null) {
          ref = props.ref;
        }
        if (ref) {
          if (typeof ref === "function") {
            ref(viewNode);
          } else {
            ref.current = viewNode;
          }
        }
      };
      tmp3Result.createGestureHandler = (config) => {
        closure_0.handlerTag = _mod6677.getNextHandlerTag();
        closure_0.config = config;
        RNGestureHandlerModuleDefault.createGestureHandler(Handler, closure_0.handlerTag, config);
        const obj3 = RNGestureHandlerModuleDefault;
        obj3.configureRelations(
          closure_0.handlerTag,
          transformIntoHandlerTags.selectProperties(config, ["waitFor", "simultaneousHandlers", "blocksHandlers"]),
        );
      };
      tmp3Result.attachGestureHandler = (viewTag) => {
        closure_0.viewTag = viewTag;
        const obj = {
          onGestureEvent: closure_0.onGestureHandlerEvent,
          onGestureStateChange: closure_0.onGestureHandlerStateChange,
        };
        let result = obj.registerOldGestureHandler(closure_0.handlerTag, obj);
        const props = closure_0.props;
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
        const props2 = closure_0.props;
        if (!tmp6) {
          if (!onHandlerStateChange) {
            if (onGestureEvent) {
              if ("__isNative" in onGestureEvent) {
                let REANIMATED_WORKLET = ActionType.ActionType.NATIVE_ANIMATED_EVENT;
              }
            }
            REANIMATED_WORKLET = ActionType.ActionType.JS_FUNCTION_OLD_API;
          }
          RNGestureHandlerModuleDefault.attachGestureHandler(closure_0.handlerTag, viewTag, REANIMATED_WORKLET);
          let tmp2Result = transformIntoHandlerTags;
          const result1 = tmp2Result.scheduleFlushOperations();
          tmp2Result = ghQueueMicrotask;
          tmp2Result.ghQueueMicrotask(() => {
            const MountRegistry = Handler(config[16]).MountRegistry;
            const result = MountRegistry.gestureHandlerWillMount(closure_1_0);
          });
        }
        REANIMATED_WORKLET = ActionType.ActionType.REANIMATED_WORKLET;
      };
      tmp3Result.setGestureHandlerConfig = (config) => {
        closure_0.config = config;
        const result = RNGestureHandlerModuleDefault.setGestureHandlerConfig(closure_0.handlerTag, config);
        const obj2 = RNGestureHandlerModuleDefault;
        obj2.configureRelations(
          closure_0.handlerTag,
          transformIntoHandlerTags.selectProperties(config, ["waitFor", "simultaneousHandlers", "blocksHandlers"]),
        );
        const result1 = transformIntoHandlerTags.scheduleFlushOperations();
      };
      tmp3Result.config = {};
      tmp3Result.propsRef = closure_8.createRef();
      tmp3Result.isMountedRef = closure_8.createRef();
      tmp3Result.state = { allowTouches: true };
      if (name.id) {
        tmp7 = closure_0;
        tmp8 = c2;
        if (undefined !== closure_0(c2[13]).handlerIDToTag[name.id]) {
          tmp9 = globalThis;
          _Error = Error;
          _HermesInternal = HermesInternal;
          str = '" already registered';
          str2 = 'Handler with ID "';
          tmp10 = new.target;
          tmp11 = new.target;
          error = new Error('Handler with ID "' + name.id + '" already registered');
          tmp13 = error;
          throw error;
        } else {
          tmp7(tmp8[13]).handlerIDToTag[name.id] = tmp3Result.handlerTag;
        }
      }
      return tmp3Result;
    }
  }
  _inherits(Handler, noop.Component);
  const entry = {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
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
          Handler(6687).ghQueueMicrotask(() => {
            self.update(1);
          });
          const obj = Handler(6687);
        }
        const props2 = self.props;
        const items = [];
        const obj2 = Handler(6686);
        HermesBuiltin.arraySpread(_createClass, HermesBuiltin.arraySpread(importDefault, 0));
        self.createGestureHandler(
          obj2.filterConfig(_classCallCheck ? _classCallCheck(props2) : props2, items, dependencyMap),
        );
        if (self.viewNode) {
          self.attachGestureHandler(allowedProps(6690)(self.viewNode));
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error(
            "[Gesture Handler] Failed to obtain view for " +
              Handler.displayName +
              ". Note that old API doesn't support functional components.",
          );
          throw error;
        }
        const tmp11 = _classCallCheck ? _classCallCheck(props2) : props2;
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
    },
  };
  let items = [
    entry,
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate() {
        const self = this;
        const tmp = allowedProps(config[17])(this.viewNode);
        if (this.viewTag !== tmp) {
          self.attachGestureHandler(tmp);
        }
        self.update(1);
      },
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
        allowedProps(config[11]).dropGestureHandler(self.handlerTag);
        const obj2 = allowedProps(config[11]);
        const result1 = Handler(config[12]).scheduleFlushOperations();
        if (self.props.id) {
          const handlerIDToTag = Handler(config[13]).handlerIDToTag;
          delete tmp[tmp2];
        }
        const MountRegistry = Handler(config[16]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
        const obj3 = Handler(config[12]);
      },
    },
    {
      key: "update",
      value: function update(arg0) {
        const self = this;
        closure_0 = arg0;
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
                ghQueueMicrotask.ghQueueMicrotask(() => {
                  self.update(closure_0 - 1);
                });
              }
            }
            const props2 = self.props;
            const items = [];
            const obj = transformIntoHandlerTags;
            HermesBuiltin.arraySpread(customNativeProps, HermesBuiltin.arraySpread(allowedProps, 0));
            const filterConfigResult = obj.filterConfig(
              _classCallCheck ? _classCallCheck(props2) : props2,
              items,
              config,
            );
            const tmp9 = _classCallCheck ? _classCallCheck(props2) : props2;
            if (!tmp7Result.deepEqual(self.config, filterConfigResult)) {
              const result = self.setGestureHandlerConfig(filterConfigResult);
            }
            tmp7Result = tagMessage;
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
      },
    },
    {
      key: "setNativeProps",
      value: function setNativeProps(arg0) {
        const self = this;
        const obj = {};
        const merged = Object.assign(this.props);
        const merged1 = Object.assign(arg0);
        let tmp3 = obj;
        if (_classCallCheck) {
          tmp3 = _classCallCheck(obj);
        }
        const items = [...customNativeProps];
        const result = self.setGestureHandlerConfig(transformIntoHandlerTags.filterConfig(tmp3, items, config));
      },
    },
    {
      key: "render",
      value: function render() {
        const self = this;
        ({ onGestureHandlerEvent, props } = this);
        ({ onGestureEvent, onGestureHandlerEvent: onGestureHandlerEvent2 } = props);
        if (onGestureEvent) {
          if (typeof onGestureEvent !== "function") {
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
            if (typeof onHandlerStateChange !== "function") {
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
            let obj = { onGestureHandlerEvent: tmp4, onGestureHandlerStateChange: null };
            let tmp5;
            if (self.state.allowTouches) {
              tmp5 = tmp3;
            }
            obj.onGestureHandlerStateChange = tmp5;
            self.propsRef.current = obj;
            try {
              let obj1 = noop;
              const Children = noop.Children;
              const onlyResult = Children.only(self.props.children);
              obj = { ref: self.refHandler, collapsable: false };
              if (obj4.isTestEnv()) {
                obj = { handlerType: Handler, handlerTag: self.handlerTag, enabled: self.props.enabled };
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
              const error2 = new Error(
                tagMessage.tagMessage(
                  "" +
                    Handler +
                    " got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view.",
                ),
              );
              throw error2;
            }
          }
          tmp3 = onGestureHandlerStateChange;
          if (onGestureHandlerStateChange2) {
            tmp3 = onGestureHandlerStateChange;
            if (typeof onGestureHandlerStateChange2 !== "function") {
              const _Error5 = Error;
              const error3 = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error3;
            }
          }
        }
        tmp2 = onGestureHandlerEvent;
        if (onGestureHandlerEvent2) {
          tmp2 = onGestureHandlerEvent;
          if (typeof onGestureHandlerEvent2 !== "function") {
            const _Error4 = Error;
            const error4 = new Error("Nesting touch handlers with native animated driver is not supported yet");
            throw error4;
          }
        }
      },
    },
  ];
  let tmp2 = customNativeProps(Handler, items);
  tmp2.displayName = name;
  tmp2.contextType = allowedProps(config[19]);
  return tmp2;
}
