// === Module 1678: ? ===

// Module 1678
import Fragment from "Fragment" /* 21 */;
import _modDef38 from "module_38" /* 38 */;
import LayoutAnimationType from "LayoutAnimationType" /* 1668 */;
import startWebLayoutAnimation from "startWebLayoutAnimation" /* 1697 */;
import _modDef1738 from "module_1738" /* 1738 */;
import _mod1739 from "module_1739" /* 1739 */;
import ComponentRegistry2 from "ComponentRegistry" /* 1746 */;
import PropsFilter from "PropsFilter" /* 1747 */;
import setAndForwardRefDefault from "setAndForwardRef" /* 1749 */;
import NativeEventsManager from "NativeEventsManager" /* 1750 */;
import PropsRegistryGarbageCollector2 from "PropsRegistryGarbageCollector" /* 1752 */;
import _mod1757 from "module_1757" /* 1757 */;
import maybeBuild2 from "maybeBuild" /* 1758 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import hasOwnProperty from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import module_1679 from "module_1679" /* 1679 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import module_1646_mod from "module_1646" /* 1646 */;

const require = globalThis.__r;
let _require, dependencyMap, disableReactSync, importDefault, set;

let Platform;
let c10;
let c9;
let tmp21;
const startMapper = tmp21(1687);
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
({ Platform, processColor: c9, StyleSheet: c10 } = react_native);
const jsx = Fragment.jsx;
let module_1646 = module_1646_mod;
module_1646.isWeb();
module_1646 = module_1646_mod;
let closure_14 = module_1646.isJest();
module_1646 = module_1646_mod;
let closure_15 = module_1646.isReact19();
module_1646 = module_1646_mod;
let closure_16 = module_1646.shouldBeUseWeb();
if (module_1646) {
  const _module6 = startWebLayoutAnimation;
  let result = _module6.configureWebLayoutAnimations();
}
let closure_17 = 0;

export const createAnimatedComponent = function createAnimatedComponent(name, arg1) {
  let closure_2;
  _require = name;
  importDefault = arg1;
  if (!closure_15) {
    let tmp2 = importDefault;
    let tmp3 = dependencyMap;
    let tmp5 = typeof name !== "function";
    let tmp4 = _modDef38;
    if (typeof name === "function") {
      const tmp6 = name.prototype && name.prototype.isReactComponent;
      tmp5 = tmp6;
    }
    let tmp7 = globalThis;
    class AnimatedComponent {
      constructor(arg0) {
        let constructResult;
        const self = this;
        let tmp = _classCallCheck(this, AnimatedComponent);
        const items = [arg0];
        const obj = _getPrototypeOf(AnimatedComponent);
        if (_isNativeReflectConstruct()) {
          const _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        const tmp3Result = hasOwnProperty(self, constructResult);
        let closure_0 = tmp3Result;
        tmp3Result._styles = null;
        tmp3Result._isFirstRender = true;
        tmp3Result.jestAnimatedStyle = { value: {} };
        tmp3Result.jestAnimatedProps = { value: {} };
        tmp3Result._componentRef = null;
        tmp3Result._componentDOMRef = null;
        tmp3Result._sharedElementTransition = null;
        tmp3Result._jsPropsUpdater = new _modDef1738();
        const tmp7 = new _modDef1738();
        const inlinePropManager = new _mod1739.InlinePropManager();
        tmp3Result._InlinePropManager = inlinePropManager;
        const propsFilter = new PropsFilter.PropsFilter();
        tmp3Result._PropsFilter = propsFilter;
        closure_17 = tmp11 + 1;
        tmp3Result.reanimatedID = +closure_17;
        tmp3Result._willUnmount = false;
        tmp3Result._resolveComponentRef = (getAnimatableRef) => {
          let animatableRef;
          const tmp = getAnimatableRef;
          if (tmp) {
            if (getAnimatableRef.getAnimatableRef) {
              animatableRef = getAnimatableRef.getAnimatableRef();
            }
            return animatableRef;
          }
          animatableRef = getAnimatableRef;
          if (closure_2_16) {
            if (getAnimatableRef) {
              if (getAnimatableRef.elementRef) {
                closure_0._componentDOMRef = getAnimatableRef.elementRef.current;
                animatableRef = getAnimatableRef;
              }
            }
            closure_0._componentDOMRef = getAnimatableRef;
            animatableRef = getAnimatableRef;
          }
        };
        let obj2 = {
          getForwardedRef() {
            return closure_0.props.forwardedRef;
          },
          setLocalRef(arg0) {
            let entering;
            let sharedTransitionTag;
            const tmp = arg0;
            if (tmp) {
              let current;
              if (arg0 !== closure_0._componentRef) {
                closure_0._componentRef = closure_0._resolveComponentRef(arg0);
                closure_0._viewInfo = undefined;
              }
              const props = closure_0.props;
              ({ entering, sharedTransitionTag } = props);
              if (!closure_2_16) {
                const obj2 = AnimatedComponent(closure_2_2[16]);
                const result = obj2.enableLayoutAnimations(true, false);
              }
              if (sharedTransitionTag) {
                const result1 = closure_0._configureSharedTransition();
              }
              const context = closure_0.context;
              if (context != null) {
                current = context.current;
              }
              let isFabricResult = !entering;
              if (entering) {
                const obj3 = AnimatedComponent(closure_2_2[9]);
                isFabricResult = obj3.isFabric();
              }
              if (!isFabricResult) {
                isFabricResult = current;
              }
              if (!isFabricResult) {
                isFabricResult = closure_2_13;
              }
              if (!isFabricResult) {
                const result2 = closure_0._configureLayoutAnimation(AnimatedComponent(closure_2_2[17]).LayoutAnimationType.ENTERING, closure_0.props.entering);
              }
            }
          }
        };
        tmp3Result._setComponentRef = setAndForwardRefDefault(obj2);
        if (closure_14) {
          let obj3 = { value: {} };
          tmp3Result.jestAnimatedStyle = obj3;
          const obj4 = { value: {} };
          tmp3Result.jestAnimatedProps = obj4;
        }
        tmp3Result.state = { settledProps: {}, reanimatedProps: {} };
        let context = tmp3Result.context;
        let current;
        if (context != null) {
          current = context.current;
        }
        const tmp8Result = module_1646;
        const tmp14 = tmp8Result.isFabric() && !current;
        if (tmp14) {
          let result = tmp3Result._configureLayoutAnimation(LayoutAnimationType.LayoutAnimationType.ENTERING, tmp3Result.props.entering);
        }
        return tmp3Result;
      }
    }
    const str = "` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.";
    let tmp4Result = tmp4(tmp5, "Looks like you're passing a function component `" + name.name + "` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.");
  }
  class AnimatedComponent {
    constructor(arg0) {
      let constructResult;
      const self = this;
      let tmp = _classCallCheck(this, AnimatedComponent);
      const items = [arg0];
      const obj = _getPrototypeOf(AnimatedComponent);
      if (_isNativeReflectConstruct()) {
        const _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      const tmp3Result = hasOwnProperty(self, constructResult);
      let closure_0 = tmp3Result;
      tmp3Result._styles = null;
      tmp3Result._isFirstRender = true;
      tmp3Result.jestAnimatedStyle = { value: {} };
      tmp3Result.jestAnimatedProps = { value: {} };
      tmp3Result._componentRef = null;
      tmp3Result._componentDOMRef = null;
      tmp3Result._sharedElementTransition = null;
      tmp3Result._jsPropsUpdater = new _modDef1738();
      const tmp7 = new _modDef1738();
      const inlinePropManager = new _mod1739.InlinePropManager();
      tmp3Result._InlinePropManager = inlinePropManager;
      const propsFilter = new PropsFilter.PropsFilter();
      tmp3Result._PropsFilter = propsFilter;
      closure_17 = tmp11 + 1;
      tmp3Result.reanimatedID = +closure_17;
      tmp3Result._willUnmount = false;
      tmp3Result._resolveComponentRef = (getAnimatableRef) => {
        let animatableRef;
        const tmp = getAnimatableRef;
        if (tmp) {
          if (getAnimatableRef.getAnimatableRef) {
            animatableRef = getAnimatableRef.getAnimatableRef();
          }
          return animatableRef;
        }
        animatableRef = getAnimatableRef;
        if (closure_2_16) {
          if (getAnimatableRef) {
            if (getAnimatableRef.elementRef) {
              closure_0._componentDOMRef = getAnimatableRef.elementRef.current;
              animatableRef = getAnimatableRef;
            }
          }
          closure_0._componentDOMRef = getAnimatableRef;
          animatableRef = getAnimatableRef;
        }
      };
      let obj2 = {
        getForwardedRef() {
          return closure_0.props.forwardedRef;
        },
        setLocalRef(arg0) {
          let entering;
          let sharedTransitionTag;
          const tmp = arg0;
          if (tmp) {
            let current;
            if (arg0 !== closure_0._componentRef) {
              closure_0._componentRef = closure_0._resolveComponentRef(arg0);
              closure_0._viewInfo = undefined;
            }
            const props = closure_0.props;
            ({ entering, sharedTransitionTag } = props);
            if (!closure_2_16) {
              const obj2 = AnimatedComponent(closure_2_2[16]);
              const result = obj2.enableLayoutAnimations(true, false);
            }
            if (sharedTransitionTag) {
              const result1 = closure_0._configureSharedTransition();
            }
            const context = closure_0.context;
            if (context != null) {
              current = context.current;
            }
            let isFabricResult = !entering;
            if (entering) {
              const obj3 = AnimatedComponent(closure_2_2[9]);
              isFabricResult = obj3.isFabric();
            }
            if (!isFabricResult) {
              isFabricResult = current;
            }
            if (!isFabricResult) {
              isFabricResult = closure_2_13;
            }
            if (!isFabricResult) {
              const result2 = closure_0._configureLayoutAnimation(AnimatedComponent(closure_2_2[17]).LayoutAnimationType.ENTERING, closure_0.props.entering);
            }
          }
        }
      };
      tmp3Result._setComponentRef = setAndForwardRefDefault(obj2);
      if (closure_14) {
        let obj3 = { value: {} };
        tmp3Result.jestAnimatedStyle = obj3;
        const obj4 = { value: {} };
        tmp3Result.jestAnimatedProps = obj4;
      }
      tmp3Result.state = { settledProps: {}, reanimatedProps: {} };
      let context = tmp3Result.context;
      let current;
      if (context != null) {
        current = context.current;
      }
      const tmp8Result = module_1646;
      const tmp14 = tmp8Result.isFabric() && !current;
      if (tmp14) {
        let result = tmp3Result._configureLayoutAnimation(LayoutAnimationType.LayoutAnimationType.ENTERING, tmp3Result.props.entering);
      }
      return tmp3Result;
    }
  }
  _inherits(AnimatedComponent, react.Component);
  const entry = {
    key: "componentDidMount",
    value: function componentDidMount() {
      let firstChild1;
      const self = this;
      if (!module_1646) {
        const self2 = this;
        const self3 = this;
        const nativeEventsManager = new NativeEventsManager.NativeEventsManager(self, disableReactSync);
        self._NativeEventsManager = nativeEventsManager;
      }
      const _NativeEventsManager = self._NativeEventsManager;
      if (_NativeEventsManager != null) {
        _NativeEventsManager.attachEvents();
      }
      const _jsPropsUpdater = self._jsPropsUpdater;
      const result = _jsPropsUpdater.addOnJSPropsChangeListener(self);
      const result1 = self._attachAnimatedStyles();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.attachInlineProps(self, self._getViewInfo());
      const componentViewTag = self.getComponentViewTag();
      const obj = module_1646;
      const isFabricResult = obj.isFabric() && -1 !== componentViewTag;
      if (isFabricResult) {
        const PropsRegistryGarbageCollector = PropsRegistryGarbageCollector2.PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.registerView(componentViewTag, self);
      }
      if (-1 !== componentViewTag) {
        const ComponentRegistry = ComponentRegistry2.ComponentRegistry;
        ComponentRegistry.register(componentViewTag, self);
      }
      const result2 = self._configureLayoutAnimation(LayoutAnimationType.LayoutAnimationType.LAYOUT, self.props.layout);
      const result3 = self._configureLayoutAnimation(LayoutAnimationType.LayoutAnimationType.EXITING, self.props.exiting);
      if (module_1646) {
        if (self._componentDOMRef) {
          const _componentDOMRef = self._componentDOMRef;
          const dummyClone = _componentDOMRef.dummyClone;
          let firstChild;
          if (dummyClone != null) {
            firstChild = dummyClone.firstChild;
          }
          if (firstChild) {
            do {
              let appendChildResult = _componentDOMRef.appendChild(dummyClone.firstChild);
              firstChild1 = undefined;
              if (dummyClone != null) {
                firstChild1 = dummyClone.firstChild;
              }
            } while (firstChild1);
          }
          delete _componentDOMRef["dummyClone"];
          if (self.props.exiting) {
            const obj2 = startWebLayoutAnimation;
            obj2.saveSnapshot(_componentDOMRef);
          }
          if (self.props.entering) {
            const obj3 = startWebLayoutAnimation;
            if (obj3.getReducedMotionFromConfig(self.props.entering)) {
              self._isFirstRender = false;
              const entering = self.props.entering;
              const callbackV = entering.callbackV;
              if (callbackV != null) {
                callbackV(true);
              }
            } else {
              const context = self.context;
              let current;
              if (context != null) {
                current = context.current;
              }
              if (current) {
                if (_componentDOMRef.style) {
                  _componentDOMRef.style.visibility = "initial";
                }
              } else {
                const tmp28Result = startWebLayoutAnimation;
                const result4 = tmp28Result.startWebLayoutAnimation(self.props, _componentDOMRef, LayoutAnimationType.LayoutAnimationType.ENTERING);
              }
            }
          } else {
            self._isFirstRender = false;
          }
        }
      }
      let _willUnmount = !closure_16;
      if (_willUnmount) {
        const tmp21Result = module_1646;
        _willUnmount = tmp21Result.isFabric();
      }
      if (_willUnmount) {
        _willUnmount = self._willUnmount;
      }
      if (_willUnmount) {
        _willUnmount = typeof componentViewTag === "number";
      }
      if (_willUnmount) {
        const tmp21Result2 = startMapper;
        const result5 = tmp21Result2.unmarkNodeAsRemovable(componentViewTag);
      }
      self._isFirstRender = false;
    }
  };
  let items = [
    entry,
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        let _componentDOMRef;
        let props;
        const self = this;
        const _NativeEventsManager = this._NativeEventsManager;
        if (_NativeEventsManager != null) {
          _NativeEventsManager.detachEvents();
        }
        const _jsPropsUpdater = self._jsPropsUpdater;
        const result = _jsPropsUpdater.removeOnJSPropsChangeListener(self);
        const componentViewTag = self.getComponentViewTag();
        const obj = name(closure_2[9]);
        const isFabricResult = obj.isFabric() && -1 !== componentViewTag;
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = name(closure_2[19]).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.unregisterView(componentViewTag);
        }
        self._detachStyles();
        const _InlinePropManager = self._InlinePropManager;
        _InlinePropManager.detachInlineProps();
        if (self.props.sharedTransitionTag) {
          const result1 = self._configureSharedTransition(true);
        }
        const _sharedElementTransition = self._sharedElementTransition;
        if (_sharedElementTransition != null) {
          _sharedElementTransition.unregisterTransition(self.getComponentViewTag(), true);
        }
        const exiting = self.props.exiting;
        if (-1 !== componentViewTag) {
          const ComponentRegistry = name(closure_2[20]).ComponentRegistry;
          ComponentRegistry.unregister(componentViewTag);
        }
        if (module_1646) {
          if (self._componentDOMRef) {
            if (exiting) {
              const tmp4Result = name(closure_2[10]);
              if (tmp4Result.getReducedMotionFromConfig(exiting)) {
                const callbackV = exiting.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                const tmp4Result8 = name(closure_2[21]);
                const result2 = tmp4Result8.addHTMLMutationObserver();
                ({ props, _componentDOMRef } = self);
                const tmp4Result9 = name(closure_2[10]);
                const result3 = tmp4Result9.startWebLayoutAnimation(props, _componentDOMRef, name(closure_2[17]).LayoutAnimationType.EXITING);
              }
            }
            const _viewInfo = self._viewInfo;
            let isFabricResult1 = !closure_1_16;
            if (isFabricResult1) {
              const tmp4Result10 = name(closure_2[9]);
              isFabricResult1 = tmp4Result10.isFabric();
            }
            if (isFabricResult1) {
              isFabricResult1 = shadowNodeWrapper;
            }
            if (isFabricResult1) {
              const tmp4Result11 = name(closure_2[16]);
              tmp4Result11.markNodeAsRemovable(shadowNodeWrapper);
            }
            self._willUnmount = true;
          }
        }
        if (exiting) {
          if (!module_1646) {
            const tmp4Result12 = name(closure_2[9]);
            if (!tmp4Result12.isFabric()) {
              if ("getReduceMotion" in exiting) {
                let reduceMotionFromConfig;
                if (typeof exiting.getReduceMotion === "function") {
                  const tmp4Result13 = name(closure_2[22]);
                  reduceMotionFromConfig = tmp4Result13.getReduceMotionFromConfig(exiting.getReduceMotion());
                }
                if (!reduceMotionFromConfig) {
                  const result4 = self._configureLayoutAnimation(name(closure_2[17]).LayoutAnimationType.EXITING, exiting);
                }
              }
              const tmp4Result14 = name(closure_2[22]);
              reduceMotionFromConfig = tmp4Result14.getReduceMotionFromConfig();
            }
          }
        }
      }
    },
    {
      key: "_syncStylePropsBackToReact",
      value: function _syncStylePropsBackToReact(arg0) {
        let closure_0 = arg0;
        this.setState((settledProps) => {
          let obj2;
          const obj = { settledProps: obj2 };
          obj2 = {};
          const merged = Object.assign(settledProps.settledProps);
          const merged1 = Object.assign(closure_0);
          return obj;
        });
      }
    },
    {
      key: "getComponentViewTag",
      value: function getComponentViewTag() {
        return this._getViewInfo().viewTag;
      }
    },
    {
      key: "_detachStyles",
      value: function _detachStyles() {
        const self = this;
        const componentViewTag = this.getComponentViewTag();
        if (-1 !== componentViewTag) {
          if (null !== self._styles) {
            const _styles = self._styles;
            for (const item10009 of _styles) {
              let viewDescriptors = item10009.viewDescriptors;
              let removeResult = viewDescriptors.remove(componentViewTag);
              continue;
            }
            const animatedProps = self.props.animatedProps;
            let viewDescriptors1;
            if (animatedProps != null) {
              viewDescriptors1 = animatedProps.viewDescriptors;
            }
            if (viewDescriptors1) {
              const viewDescriptors2 = self.props.animatedProps.viewDescriptors;
              viewDescriptors2.remove(componentViewTag);
            }
          }
        }
      }
    },
    {
      key: "_updateFromNative",
      value: function _updateFromNative(props) {
        let setNativeProps1;
        if (disableReactSync != null) {
          setNativeProps1 = disableReactSync.setNativeProps;
        }
        const self = this;
        if (setNativeProps1) {
          disableReactSync.setNativeProps(self._componentRef, props);
        } else {
          const _componentRef = self._componentRef;
          if (_componentRef != null) {
            const setNativeProps = _componentRef.setNativeProps;
            if (setNativeProps != null) {
              setNativeProps(props);
            }
          }
        }
      }
    },
    {
      key: "_updateReanimatedProps",
      value: function _updateReanimatedProps(obj) {
        disableReactSync = undefined;
        if (disableReactSync != null) {
          disableReactSync = disableReactSync.disableReactSync;
        }
        if (!disableReactSync) {
          obj = {};
          for (const key10015 in obj) {
            let tmp4;
            let tmp8 = obj[key10015];
            if ("color" === key10015) {
              if (tmp8) {
                if (typeof tmp8 === "string") {
                  tmp4 = React4(tmp8);
                  obj[key10015] = tmp4;
                  continue;
                }
              }
            }
            if ("top" != key10015) {
              if ("bottom" != key10015) {
                if (!key10015.startsWith("margin")) {
                  tmp4 = tmp8;
                }
              }
            }
          }
          const self = this;
          this.setState((reanimatedProps) => {
            let obj2;
            obj = { reanimatedProps: obj2 };
            obj2 = {};
            const merged = Object.assign(reanimatedProps.reanimatedProps);
            const merged1 = Object.assign(obj);
            return obj;
          });
        }
      }
    },
    {
      key: "_getViewInfo",
      value: function _getViewInfo() {
        let _componentDOMRef;
        let viewConfig;
        let viewName;
        let viewTag;
        const self = this;
        if (undefined !== this._viewInfo) {
          return self._viewInfo;
        } else {
          let shadowNodeWrapperFromRef;
          if (closure_1_16) {
            ({ _componentRef: viewTag, _componentDOMRef } = self);
            shadowNodeWrapperFromRef = null;
            viewConfig = null;
            viewName = null;
          } else {
            const obj = name(closure_2[23]);
            const findHostInstanceResult = obj.findHostInstance(self);
            if (findHostInstanceResult) {
              const tmpResult = name(closure_2[25]);
              const viewInfo = tmpResult.getViewInfo(findHostInstanceResult);
              ({ viewTag, viewName, viewConfig } = viewInfo);
              shadowNodeWrapperFromRef = null;
              const tmpResult3 = name(closure_2[9]);
              if (tmpResult3.isFabric()) {
                const tmpResult4 = name(closure_2[26]);
                shadowNodeWrapperFromRef = tmpResult4.getShadowNodeWrapperFromRef(self, findHostInstanceResult);
              }
              _componentDOMRef = null;
            } else {
              const self2 = this;
              const self3 = this;
              const reanimatedError = new name(closure_2[24]).ReanimatedError("Cannot find host instance for this component. Maybe it renders nothing?");
              throw reanimatedError;
            }
          }
          const obj2 = { viewTag, viewName, shadowNodeWrapper: shadowNodeWrapperFromRef, viewConfig };
          self._viewInfo = obj2;
          if (_componentDOMRef) {
            self._viewInfo.DOMElement = _componentDOMRef;
          }
          return self._viewInfo;
        }
      }
    },
    {
      key: "_attachAnimatedStyles",
      value: function _attachAnimatedStyles() {
        let _styles;
        let isStyleAttached;
        let items;
        function onlyAnimatedStyles(arr) {
          return arr.filter((viewDescriptors) => {
            viewDescriptors = undefined;
            if (viewDescriptors != null) {
              viewDescriptors = viewDescriptors.viewDescriptors;
            }
            return viewDescriptors;
          });
        }
        const self = this;
        if (this.props.style) {
          let tmp = isStyleAttached;
          let obj = isStyleAttached(_styles[27]);
          items = onlyAnimatedStyles(obj.flattenArray(self.props.style));
        } else {
          items = [];
        }
        const animatedProps = self.props.animatedProps;
        _styles = self._styles;
        self._styles = items;
        const _animatedProps = self._animatedProps;
        self._animatedProps = animatedProps;
        const _getViewInfoResult = self._getViewInfo();
        const viewTag = _getViewInfoResult.viewTag;
        const viewName = _getViewInfoResult.viewName;
        const shadowNodeWrapper = _getViewInfoResult.shadowNodeWrapper;
        const viewConfig = _getViewInfoResult.viewConfig;
        const animatedProps2 = self.props.animatedProps;
        let viewDescriptors1;
        if (animatedProps2 != null) {
          viewDescriptors1 = animatedProps2.viewDescriptors;
        }
        if (!viewDescriptors1) {
          viewDescriptors1 = items.length;
        }
        if (viewDescriptors1) {
          viewDescriptors1 = viewConfig;
        }
        if (viewDescriptors1) {
          let obj2 = isStyleAttached(_styles[28]);
          obj2.adaptViewConfig(viewConfig);
        }
        isStyleAttached = function isStyleAttached(_styles) {

        };
        set = new Set(items);
        const tmp8 = null != _styles && items.length === _styles.length && items.every((viewDescriptors, index) => {
          let hasItem = viewDescriptors === _styles[index];
          if (hasItem) {
            if (typeof isStyleAttached === "function") {
              viewDescriptors = viewDescriptors.viewDescriptors;
              hasItem = viewDescriptors.has(viewTag);
            } else {
              throw new TypeError("Trying to call a non-function");
            }
          }
          return hasItem;
        });
        const animatedProps3 = self.props.animatedProps;
        let viewDescriptors4;
        if (animatedProps3 != null) {
          viewDescriptors4 = animatedProps3.viewDescriptors;
        }
        let tmp10 = !viewDescriptors4;
        if (viewDescriptors4) {
          let hasItem = _animatedProps === self.props.animatedProps;
          if (hasItem) {
            let viewDescriptors = self.props.animatedProps.viewDescriptors;
            hasItem = viewDescriptors.has(viewTag);
          }
          tmp10 = hasItem;
        }
        if (!tmp8) {
          if (_styles) {
            function _loop(iter) {
              let closure_0 = iter;
              if (!items.some((viewDescriptors) => {
                let tmp = viewDescriptors !== iter;
                if (!tmp) {
                  if (typeof isStyleAttached === "function") {
                    viewDescriptors = viewDescriptors.viewDescriptors;
                    tmp = !viewDescriptors.has(viewTag);
                  } else {
                    throw new TypeError("Trying to call a non-function");
                  }
                }
                return !tmp;
              })) {
                let viewDescriptors = iter.viewDescriptors;
                viewDescriptors.remove(viewTag);
              }
            }
            const iter = _styles[Symbol.iterator]();
            while (iter !== undefined) {
              let _loopResult = _loop(iter.next());
              continue;
            }
          }
          const tmp16 = animatedProps && closure_14;
          if (tmp16) {
            const jestAnimatedProps = self.jestAnimatedProps;
            const obj3 = {};
            let merged = Object.assign(self.jestAnimatedProps.value);
            let value;
            if (animatedProps != null) {
              if (animatedProps.initial != null) {
                value = iter2.value;
              }
            }
            let merged1 = Object.assign(value);
            jestAnimatedProps.value = obj3;
            let jestAnimatedValues;
            if (animatedProps != null) {
              jestAnimatedValues = animatedProps.jestAnimatedValues;
            }
            if (jestAnimatedValues) {
              animatedProps.jestAnimatedValues.current = self.jestAnimatedProps;
            }
          }
          if (!tmp8) {
            const item = set.forEach((viewDescriptors) => {
              viewDescriptors = viewDescriptors.viewDescriptors;
              const obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
              viewDescriptors.add(obj, viewDescriptors.styleUpdaterContainer);
              if (closure_2_14) {
                const jestAnimatedStyle = self.jestAnimatedStyle;
                const obj2 = {};
                const merged = Object.assign(self.jestAnimatedStyle.value);
                const merged1 = Object.assign(viewDescriptors.initial.value);
                jestAnimatedStyle.value = obj2;
                viewDescriptors.jestAnimatedValues.current = self.jestAnimatedStyle;
              }
            });
          }
          const tmp26 = _animatedProps && _animatedProps !== self.props.animatedProps;
          if (tmp26) {
            const viewDescriptors2 = _animatedProps.viewDescriptors;
            viewDescriptors2.remove(viewTag);
          }
          let tmp28 = !tmp10;
          if (tmp28) {
            const animatedProps4 = self.props.animatedProps;
            let viewDescriptors5;
            if (animatedProps4 != null) {
              viewDescriptors5 = animatedProps4.viewDescriptors;
            }
            tmp28 = viewDescriptors5;
          }
          if (tmp28) {
            const viewDescriptors3 = self.props.animatedProps.viewDescriptors;
            const obj4 = { tag: viewTag, name: viewName, shadowNodeWrapper };
            viewDescriptors3.add(obj4, self.props.animatedProps.styleUpdaterContainer);
          }
        }
      }
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(layout, arg1, arg2) {
        const self = this;
        const result = this._configureLayoutAnimation(name(closure_2[17]).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
        const result1 = this._configureLayoutAnimation(name(closure_2[17]).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
        const tmp5 = undefined === this.props.sharedTransitionTag && undefined === layout.sharedTransitionTag;
        if (!tmp5) {
          const result2 = self._configureSharedTransition();
        }
        const _NativeEventsManager = self._NativeEventsManager;
        if (_NativeEventsManager != null) {
          _NativeEventsManager.updateEvents(layout);
        }
        const result3 = self._attachAnimatedStyles();
        const _InlinePropManager = self._InlinePropManager;
        _InlinePropManager.attachInlineProps(self, self._getViewInfo());
        const _componentDOMRef = module_1646 && self.props.exiting && self._componentDOMRef;
        if (_componentDOMRef) {
          const tmpResult = name(closure_2[10]);
          tmpResult.saveSnapshot(self._componentDOMRef);
        }
        if (module_1646) {
          const tmp12 = arg2;
          if (tmp12) {
            if (self.props.layout) {
              const tmpResult3 = name(closure_2[10]);
              if (tmpResult3.getReducedMotionFromConfig(self.props.layout)) {
                layout = self.props.layout;
                const callbackV = layout.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                const tmpResult4 = name(closure_2[10]);
                const result4 = tmpResult4.tryActivateLayoutTransition(self.props, self._componentDOMRef, arg2);
              }
            }
          }
        }
      }
    },
    {
      key: "_configureLayoutAnimation",
      value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
        if (!module_1646) {
          if (exiting !== exiting2) {
            const self = this;
            const updateLayoutAnimations = _mod1757.updateLayoutAnimations;
            _mod1757;
            const obj = module_1646;
            if (obj.isFabric()) {
              let reanimatedID;
              if (EXITING === LayoutAnimationType.LayoutAnimationType.ENTERING) {
                reanimatedID = self.reanimatedID;
              }
              let maybeBuildResult = tmp4;
              if (maybeBuildResult) {
                const maybeBuild = maybeBuild2.maybeBuild;
                let tmp11;
                maybeBuild2;
                if (EXITING !== LayoutAnimationType.LayoutAnimationType.LAYOUT) {
                  const props = self.props;
                  let style;
                  if (props != null) {
                    style = props.style;
                  }
                  tmp11 = style;
                }
                maybeBuildResult = maybeBuild(tmp4, tmp11, AnimatedComponent.displayName);
              }
              const result = updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
            }
            reanimatedID = self.getComponentViewTag();
          }
        }
      }
    },
    {
      key: "_configureSharedTransition",
      value: function _configureSharedTransition() {
        if (!module_1646) {
          const self = this;
          const sharedTransitionTag = this.props.sharedTransitionTag;
          if (sharedTransitionTag) {
            let _sharedElementTransition2 = self.props.sharedTransitionStyle;
            if (_sharedElementTransition2 == null) {
              _sharedElementTransition2 = self._sharedElementTransition;
            }
            if (_sharedElementTransition2 == null) {
              const self2 = this;
              const self3 = this;
              _sharedElementTransition2 = new name(closure_2[31]).SharedTransition();
            }
            _sharedElementTransition2.registerTransition(self.getComponentViewTag(), sharedTransitionTag, flag);
            self._sharedElementTransition = _sharedElementTransition2;
          } else {
            const _sharedElementTransition = self._sharedElementTransition;
            if (_sharedElementTransition != null) {
              _sharedElementTransition.unregisterTransition(self.getComponentViewTag(), flag);
            }
            self._sharedElementTransition = null;
          }
        }
      }
    },
    {
      key: "_isReducedMotion",
      value: function _isReducedMotion(getReduceMotion) {
        const tmp = getReduceMotion;
        if (tmp) {
          if ("getReduceMotion" in getReduceMotion) {
            let reduceMotionFromConfig;
            if (typeof getReduceMotion.getReduceMotion === "function") {
              const obj2 = name(closure_2[22]);
              reduceMotionFromConfig = obj2.getReduceMotionFromConfig(getReduceMotion.getReduceMotion());
            }
            return reduceMotionFromConfig;
          }
        }
        const obj = name(closure_2[22]);
        reduceMotionFromConfig = obj.getReduceMotionFromConfig();
      }
    },
    {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate() {
        let boundingClientRect = null;
        if (module_1646) {
          const self = this;
          boundingClientRect = null;
          if (this.props.layout) {
            const _componentDOMRef = self._componentDOMRef;
            let prop;
            if (_componentDOMRef != null) {
              prop = _componentDOMRef.getBoundingClientRect;
            }
            boundingClientRect = null;
            if (prop) {
              const _componentDOMRef2 = self._componentDOMRef;
              boundingClientRect = _componentDOMRef2.getBoundingClientRect();
            }
          }
        }
        return boundingClientRect;
      }
    },
    {
      key: "render",
      value: function render() {
        let combined1;
        let obj5;
        const f84491 = (item) => !(item && "viewDescriptors" in item);
        const f84492 = (viewDescriptors) => {
          let tmp = viewDescriptors;
          if (Array.isArray(viewDescriptors)) {
            let tmp2 = viewDescriptors;
            if (tmp2) {
              let mapped;
              const _Array = Array;
              if (Array.isArray(viewDescriptors)) {
                const found = viewDescriptors.filter(f84491);
                mapped = found.map(f84492);
              } else {
                viewDescriptors = undefined;
                if (viewDescriptors != null) {
                  viewDescriptors = viewDescriptors.viewDescriptors;
                }
                mapped = viewDescriptors && {};
              }
              tmp2 = mapped;
            }
            tmp = tmp2;
          }
          return tmp;
        };
        const self = this;
        const _PropsFilter = this._PropsFilter;
        const result = _PropsFilter.filterNonAnimatedProps(this);
        if (closure_14) {
          ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
        }
        let tmp3 = self._isFirstRender && module_1646 && result.entering;
        if (tmp3) {
          const obj = startWebLayoutAnimation;
          tmp3 = !obj.getReducedMotionFromConfig(result.entering);
        }
        if (tmp3) {
          let combined;
          let _Array = Array;
          const style = result.style;
          if (Array.isArray(result.style)) {
            const items = [{ visibility: "hidden" }];
            combined = style.concat(items);
          } else {
            let obj2 = style;
            if (style == null) {
              obj2 = {};
            }
            combined = { visibility: "hidden" };
            const merged = Object.assign(obj2);
          }
          result.style = combined;
        }
        const context = self.context;
        let current;
        if (context != null) {
          current = context.current;
        }
        if (!current) {
          const obj4 = module_1646;
          if (obj4.isFabric()) {
            const _HermesInternal = HermesInternal;
            combined1 = "" + self.reanimatedID;
          }
        }
        if (closure_14) {
          let style2 = self.props.style;
          if (style2) {
            const style1 = self.props.style;
            let tmp16 = style1;
            if (tmp16) {
              let mapped;
              const _Array2 = Array;
              if (Array.isArray(style1)) {
                let found = style1.filter(f84491);
                mapped = found.map(f84492);
              } else {
                let viewDescriptors;
                if (style1 != null) {
                  viewDescriptors = style1.viewDescriptors;
                }
                mapped = style1;
                if (viewDescriptors) {
                  mapped = {};
                }
              }
              tmp16 = mapped;
            }
            style2 = tmp16;
          }
          const obj3 = { jestInlineStyle: style2, jestAnimatedStyle: null, jestAnimatedProps: null };
          ({ jestAnimatedStyle: obj7.jestAnimatedStyle, jestAnimatedProps: obj7.jestAnimatedProps } = self);
          obj5 = obj3;
        } else {
          obj5 = {};
        }
        const obj6 = { collapsable: false };
        const obj9 = module_1646;
        if (obj9.isFabric()) {
          const obj8 = {};
          const merged1 = Object.assign(authStore.flatten(result.style));
          const merged2 = Object.assign(self.state.settledProps);
          const merged3 = Object.assign(result);
          const merged4 = Object.assign(obj5);
          const merged5 = Object.assign(self.state.settledProps);
          const merged6 = Object.assign(self.state.reanimatedProps);
          const merged7 = Object.assign(obj6);
          return <name nativeID={combined1} style={obj8} ref={self._setComponentRef} />;
        } else {
          const merged8 = Object.assign(result);
          const merged9 = Object.assign(obj5);
          const merged10 = Object.assign(self.state.reanimatedProps);
          const merged11 = Object.assign(obj6);
          return <name nativeID={combined1} ref={self._setComponentRef} />;
        }
      }
    }
  ];
  let tmp10 = _createClass(AnimatedComponent, items);
  dependencyMap = tmp10;
  let tmp11 = _require;
  let tmp12 = dependencyMap;
  tmp10.contextType = require("module_1781").SkipEnteringContext;
  const tmp13 = name.displayName || name.name || "Component";
  tmp10.displayName = "AnimatedComponent(" + tmp13 + ")";
  const tmp11Result = tmp11(1782);
  const componentWithRefResult = tmp11Result.componentWithRef((arg0, forwardedRef) => {
    const merged = Object.assign(arg0);
    let tmp4 = null;
    if (null !== forwardedRef) {
      tmp4 = { forwardedRef };
      const obj2 = { forwardedRef };
    }
    const merged1 = Object.assign(tmp4);
    return <closure_2 />;
  });
  componentWithRefResult.displayName = name.displayName || name.name || "Component";
  return componentWithRefResult;
};