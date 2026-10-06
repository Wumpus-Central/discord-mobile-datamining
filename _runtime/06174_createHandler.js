// === Module 6174: createHandler ===

// Module 6174 (createHandler)
import Fragment from "Fragment" /* 21 */;
import handlerIDToTag from "handlerIDToTag" /* 6151 */;
import tagMessage from "tagMessage" /* 6152 */;
import State from "State" /* 6153 */;
import customDirectEventTypes from "customDirectEventTypes" /* 6175 */;
import selectProperties from "selectProperties" /* 6178 */;
import ghQueueMicrotask from "ghQueueMicrotask" /* 6179 */;
import react_nativeDefault from "react-native" /* 6182 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;

let constructResult, str, str2, tmp3Result, tmp5, tmp9;

let DeviceEventEmitter;
let Platform;
function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {

    }));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {
  }
}
({ DeviceEventEmitter, Platform } = react_native);
const jsx = Fragment.jsx;
customDirectEventTypes.customDirectEventTypes.topGestureHandlerEvent = { registrationName: "onGestureHandlerEvent" };
let closure_10 = { [State.State.UNDETERMINED]: undefined, [State.State.BEGAN]: "onBegan", [State.State.FAILED]: "onFailed", [State.State.CANCELLED]: "onCancelled", [State.State.ACTIVE]: "onActivated", [State.State.END]: "onEnded" };

export default function createHandler(name) {
  let customNativeProps;
  const f137350 = (current) => current && null === current.current;
  name = name.name;
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
      tmp2 = closure_6;
      obj = closure_6(Handler);
      tmp3 = closure_5;
      if (_isNativeReflectConstruct()) {
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
              props2.onHandlerStateChange(nativeEvent);
            }
          }
          const tmp7 = closure_3_10[nativeEvent.nativeEvent.state] && closure_0.props[closure_3_10[nativeEvent.nativeEvent.state]];
          const tmp8 = tmp7 && typeof tmp7 === "function";
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
        const Children = React.Children;
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
        const obj = Handler(config[10]);
        closure_0.handlerTag = obj.getNextHandlerTag();
        closure_0.config = config;
        const obj2 = allowedProps(config[11]);
        obj2.createGestureHandler(closure_2_0, closure_0.handlerTag, config);
        const configureRelations = allowedProps(config[11]).configureRelations;
        const handlerTag = closure_0.handlerTag;
        allowedProps(config[11]);
        const obj3 = Handler(config[12]);
        configureRelations(handlerTag, obj3.selectProperties(config, ["waitFor", "simultaneousHandlers", "blocksHandlers"]));
      };
      tmp3Result.attachGestureHandler = (viewTag) => {
        closure_0.viewTag = viewTag;
        const obj = Handler(config[13]);
        const obj2 = { onGestureEvent: closure_0.onGestureHandlerEvent, onGestureStateChange: closure_0.onGestureHandlerStateChange };
        let result = obj.registerOldGestureHandler(closure_0.handlerTag, obj2);
        const props = closure_0.props;
        let onGestureEvent;
        if (props != null) {
          onGestureEvent = props.onGestureEvent;
        }
        let tmp6 = onGestureEvent;
        if (tmp6) {
          tmp6 = "current" in onGestureEvent || "workletEventHandler" in onGestureEvent;
          const tmp7 = "current" in onGestureEvent || "workletEventHandler" in onGestureEvent;
        }
        const props2 = closure_0.props;
        if (!tmp6) {
          let REANIMATED_WORKLET;
          if (!onHandlerStateChange) {
            if (onGestureEvent) {
              if ("__isNative" in onGestureEvent) {
                REANIMATED_WORKLET = Handler(config[14]).ActionType.NATIVE_ANIMATED_EVENT;
              }
            }
            REANIMATED_WORKLET = Handler(config[14]).ActionType.JS_FUNCTION_OLD_API;
          }
          const obj3 = allowedProps(config[11]);
          obj3.attachGestureHandler(closure_0.handlerTag, viewTag, REANIMATED_WORKLET);
          const tmp2Result = Handler(config[12]);
          const result1 = tmp2Result.scheduleFlushOperations();
          const tmp2Result2 = Handler(config[15]);
          tmp2Result2.ghQueueMicrotask(() => {
            const MountRegistry = Handler(closure_3_2[16]).MountRegistry;
            const result = MountRegistry.gestureHandlerWillMount(closure_1_0);
          });
        }
        REANIMATED_WORKLET = Handler(config[14]).ActionType.REANIMATED_WORKLET;
      };
      tmp3Result.setGestureHandlerConfig = (config) => {
        closure_0.config = config;
        const obj = allowedProps(config[11]);
        const result = obj.setGestureHandlerConfig(closure_0.handlerTag, config);
        const configureRelations = allowedProps(config[11]).configureRelations;
        const handlerTag = closure_0.handlerTag;
        allowedProps(config[11]);
        const obj2 = Handler(config[12]);
        configureRelations(handlerTag, obj2.selectProperties(config, ["waitFor", "simultaneousHandlers", "blocksHandlers"]));
        const obj3 = Handler(config[12]);
        const result1 = obj3.scheduleFlushOperations();
      };
      tmp3Result.config = {};
      tmp3Result.propsRef = closure_8.createRef();
      tmp3Result.isMountedRef = closure_8.createRef();
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
          self2 = this;
          self3 = this;
          error = new Error("Handler with ID \"" + name.id + "\" already registered");
          tmp11 = error;
          throw error;
        } else {
          tmp7(tmp8[13]).handlerIDToTag[name.id] = tmp3Result.handlerTag;
        }
      }
      return tmp3Result;
    }
  }
  let tmp = _inherits(Handler, react.Component);
  const entry = {
    key: "componentDidMount",
    value: function componentDidMount() {
      let someResult;
      const self = this;
      const props = this.props;
      this.isMountedRef.current = true;
      if (Array.isArray(props.simultaneousHandlers)) {
        someResult = simultaneousHandlers.some(f137350);
      } else {
        someResult = simultaneousHandlers && null === simultaneousHandlers.current;
      }
      if (!someResult) {
        let someResult1;
        const waitFor = props.waitFor;
        const _Array = Array;
        if (Array.isArray(waitFor)) {
          someResult1 = waitFor.some(f137350);
        } else {
          someResult1 = waitFor && null === waitFor.current;
        }
        someResult = someResult1;
      }
      if (someResult) {
        const obj = ghQueueMicrotask;
        obj.ghQueueMicrotask(() => {
          self.update(1);
        });
      }
      const props2 = self.props;
      const createGestureHandler = self.createGestureHandler;
      const filterConfig = selectProperties.filterConfig;
      const items = [];
      selectProperties;
      const tmp11 = _classCallCheck ? _classCallCheck(props2) : props2;
      HermesBuiltin.arraySpread(items, customNativeProps, HermesBuiltin.arraySpread(items, allowedProps, 0));
      createGestureHandler(filterConfig(tmp11, items, config));
      if (self.viewNode) {
        self.attachGestureHandler(react_nativeDefault(self.viewNode));
      } else {
        const _Error = Error;
        const _HermesInternal = HermesInternal;
        const self2 = this;
        const self3 = this;
        const error = new Error("[Gesture Handler] Failed to obtain view for " + Handler.displayName + ". Note that old API doesn't support functional components.");
        throw error;
      }
    }
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
        const obj = name(config[13]);
        const result = obj.unregisterOldGestureHandler(self.handlerTag);
        const obj2 = allowedProps(config[11]);
        obj2.dropGestureHandler(self.handlerTag);
        const obj3 = name(config[12]);
        const result1 = obj3.scheduleFlushOperations();
        const id = self.props.id;
        if (id) {
          delete name(undefined, config[13]).handlerIDToTag[id];
        }
        const MountRegistry = name(config[16]).MountRegistry;
        const result2 = MountRegistry.gestureHandlerWillUnmount(self);
      }
    },
    {
      key: "update",
      value: function update(arg0) {
        const self = this;
        let closure_0 = arg0;
        if (this.isMountedRef.current) {
          let someResult;
          const props = self.props;
          const _Array = Array;
          if (Array.isArray(props.simultaneousHandlers)) {
            someResult = simultaneousHandlers.some(f137350);
          } else {
            someResult = simultaneousHandlers && null === simultaneousHandlers.current;
          }
          if (!someResult) {
            let someResult1;
            const waitFor = props.waitFor;
            const _Array2 = Array;
            if (Array.isArray(waitFor)) {
              someResult1 = waitFor.some(f137350);
            } else {
              someResult1 = waitFor && null === waitFor.current;
            }
            someResult = someResult1;
          }
          if (someResult) {
            if (arg0 > 0) {
              const obj2 = ghQueueMicrotask;
              obj2.ghQueueMicrotask(() => {
                self.update(closure_0 - 1);
              });
            }
          }
          const props2 = self.props;
          const filterConfig = selectProperties.filterConfig;
          const items = [];
          selectProperties;
          const tmp10 = _classCallCheck ? _classCallCheck(props2) : props2;
          HermesBuiltin.arraySpread(items, customNativeProps, HermesBuiltin.arraySpread(items, allowedProps, 0));
          const filterConfigResult = filterConfig(tmp10, items, config);
          const tmp7Result = tagMessage;
          if (!tmp7Result.deepEqual(self.config, filterConfigResult)) {
            const result = self.setGestureHandlerConfig(filterConfigResult);
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
        let tmp4 = obj;
        const filterConfig = selectProperties.filterConfig;
        selectProperties;
        if (_classCallCheck) {
          tmp4 = _classCallCheck(obj);
        }
        const items = [...customNativeProps];
        const result = self.setGestureHandlerConfig(filterConfig(tmp4, items, config));
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
        let testID;
        let tmp;
        let tmp4;
        const self = this;
        ({ onGestureHandlerEvent, props } = this);
        ({ onGestureEvent, onGestureHandlerEvent: onGestureHandlerEvent2 } = props);
        if (onGestureEvent) {
          let tmp2;
          if (typeof onGestureEvent !== "function") {
            tmp = onGestureEvent;
            if (onGestureHandlerEvent2) {
              const _Error3 = Error;
              const self6 = this;
              const self7 = this;
              const error = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error;
            }
          }
          ({ onGestureHandlerStateChange, props: props2 } = self);
          ({ onHandlerStateChange, onGestureHandlerStateChange: onGestureHandlerStateChange2 } = props2);
          if (onHandlerStateChange) {
            if (typeof onHandlerStateChange !== "function") {
              tmp2 = onHandlerStateChange;
              if (onGestureHandlerStateChange2) {
                const _Error2 = Error;
                const self4 = this;
                const self5 = this;
                const error1 = new Error("Nesting touch handlers with native animated driver is not supported yet");
                throw error1;
              }
            }
            let tmp3;
            if (self.state.allowTouches) {
              tmp3 = tmp;
            }
            const obj = { onGestureHandlerEvent: tmp3, onGestureHandlerStateChange: tmp4 };
            tmp4 = undefined;
            if (self.state.allowTouches) {
              tmp4 = tmp2;
            }
            self.propsRef.current = obj;
            try {
              let obj5;
              const Children = react.Children;
              const onlyResult = Children.only(self.props.children);
              const children = onlyResult.props.children;
              const cloneElement = react.cloneElement;
              const obj2 = { ref: self.refHandler, collapsable: false, testID };
              const obj3 = tagMessage;
              if (obj3.isTestEnv()) {
                obj5 = { handlerType: name, handlerTag: self.handlerTag, enabled: self.props.enabled };
                const obj4 = { handlerType: name, handlerTag: self.handlerTag, enabled: self.props.enabled };
              } else {
                obj5 = {};
              }
              const merged = Object.assign(obj5);
              testID = self.props.testID ?? onlyResult.props.testID;
              const merged1 = Object.assign(obj);
              return cloneElement(onlyResult, obj2, children);
            } catch (err) {
              const _Error = Error;
              const _HermesInternal = HermesInternal;
              const self2 = this;
              const self3 = this;
              const obj6 = tagMessage;
              const error2 = new Error(obj6.tagMessage("" + name + " got more than one view as a child. If you want the gesture to work on multiple views, wrap them with a common parent and attach the gesture to that view."));
              throw error2;
            }
          }
          tmp2 = onGestureHandlerStateChange;
          if (onGestureHandlerStateChange2) {
            tmp2 = onGestureHandlerStateChange;
            if (typeof onGestureHandlerStateChange2 !== "function") {
              const _Error5 = Error;
              const self10 = this;
              const self11 = this;
              const error3 = new Error("Nesting touch handlers with native animated driver is not supported yet");
              throw error3;
            }
          }
        }
        tmp = onGestureHandlerEvent;
        if (onGestureHandlerEvent2) {
          tmp = onGestureHandlerEvent;
          if (typeof onGestureHandlerEvent2 !== "function") {
            const _Error4 = Error;
            const self8 = this;
            const self9 = this;
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