// _runtime/metro/01671__.js
import _modDef38 from "00038__.js";
import _mod1639 from "01639__.js";
import startWebLayoutAnimation from "../01690_startWebLayoutAnimation.js";
import NativeEventsManager from "../01743_NativeEventsManager.js";
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
  } catch (err) {
  }
}
const startObservingProgress = fn(1672);
get_ActivityIndicator = fn(17);
({ Platform, processColor: closure_9, StyleSheet: c10 } = get_ActivityIndicator);
const jsx = fn(21).jsx;
let module_1639 = fn(1639);
module_1639.isWeb();
module_1639 = fn(1639);
let closure_14 = module_1639.isJest();
module_1639 = fn(1639);
let closure_15 = module_1639.isReact19();
module_1639 = fn(1639);
let closure_16 = module_1639.shouldBeUseWeb();
if (module_1639) {
  let result = fn(1690).configureWebLayoutAnimations();
  let obj5 = fn(1690);
}
let c17 = 0;

export const createAnimatedComponent = function createAnimatedComponent(name, arg1) {
  let AnimatedComponent = name;
  importDefault = arg1;
  if (!closure_15) {
    let tmp4 = typeof name !== "function";
    if (typeof name === "function") {
      tmp4 = name.prototype && name.prototype.isReactComponent;
      let tmp5 = name.prototype && name.prototype.isReactComponent;
    }
    class AnimatedComponent {
      constructor(arg0) {
        self = this;
        tmp = closure_3(this, AnimatedComponent);
        items = [];
        items[0] = name;
        tmp2 = metroRequire;
        obj = metroRequire(AnimatedComponent);
        tmp3 = hasOwnProperty;
        if (closure_12()) {
          tmp5 = globalThis;
          _Reflect = Reflect;
          constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
        } else {
          constructResult = obj.apply(self, items);
        }
        tmp3Result = tmp3(self, constructResult);
        closure_0 = tmp3Result;
        tmp3Result._styles = null;
        tmp3Result._isFirstRender = true;
        tmp3Result.jestAnimatedStyle = { value: {} };
        tmp3Result.jestAnimatedProps = { value: {} };
        tmp3Result._componentRef = null;
        tmp3Result._componentDOMRef = null;
        tmp3Result._sharedElementTransition = null;
        tmp6 = c2;
        tmp7 = new closure_1(c2[12])();
        tmp3Result._jsPropsUpdater = tmp7;
        tmp8 = closure_0;
        inlinePropManager = new closure_0(c2[13]).InlinePropManager();
        tmp3Result._InlinePropManager = inlinePropManager;
        propsFilter = new closure_0(c2[14]).PropsFilter();
        tmp3Result._PropsFilter = propsFilter;
        tmp11 = +closure_17;
        closure_17 = tmp11 + 1;
        tmp3Result.reanimatedID = tmp11;
        tmp3Result._willUnmount = false;
        tmp3Result._resolveComponentRef = (getAnimatableRef) => {
          if (getAnimatableRef) {
            if (getAnimatableRef.getAnimatableRef) {
              let animatableRef = getAnimatableRef.getAnimatableRef();
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
        obj = {
          getForwardedRef() {
                  return closure_0.props.forwardedRef;
                },
          setLocalRef(arg0) {
                  if (arg0) {
                    if (arg0 !== closure_0._componentRef) {
                      obj._componentRef = obj._resolveComponentRef(arg0);
                      obj._viewInfo = undefined;
                    }
                    const props = obj.props;
                    ({ entering, sharedTransitionTag } = props);
                    if (!closure_2_16) {
                      const result = AnimatedComponent(1680).enableLayoutAnimations(true, false);
                      const obj2 = AnimatedComponent(1680);
                    }
                    if (sharedTransitionTag) {
                      const result1 = obj._configureSharedTransition();
                    }
                    const context = obj.context;
                    if (context != null) {
                      const current = context.current;
                    }
                    let isFabricResult = !entering;
                    if (entering) {
                      isFabricResult = AnimatedComponent(1639).isFabric();
                      const obj3 = AnimatedComponent(1639);
                    }
                    if (!isFabricResult) {
                      isFabricResult = current;
                    }
                    if (!isFabricResult) {
                      isFabricResult = module_1639;
                    }
                    if (!isFabricResult) {
                      const result2 = obj._configureLayoutAnimation(AnimatedComponent(1661).LayoutAnimationType.ENTERING, obj.props.entering);
                    }
                  }
                }
        };
        tmp3Result._setComponentRef = closure_1(c2[15])(obj);
        if (closure_3_14) {
          obj1 = { value: null };
          obj1.value = {};
          tmp3Result.jestAnimatedStyle = obj1;
          obj2 = { value: null };
          obj2.value = {};
          tmp3Result.jestAnimatedProps = obj2;
        }
        tmp3Result.state = { settledProps: {}, reanimatedProps: {} };
        context = tmp3Result.context;
        current = undefined;
        if (context != null) {
          current = context.current;
        }
        tmp8Result = tmp8(tmp6[9]);
        tmp13 = tmp8Result.isFabric() && !current;
        if (tmp13) {
          result = tmp3Result._configureLayoutAnimation(tmp8(tmp6[17]).LayoutAnimationType.ENTERING, tmp3Result.props.entering);
        }
        return tmp3Result;
      }
    }
    _modDef38(tmp4, "Looks like you're passing a function component `" + name.name + "` to `createAnimatedComponent` function which supports only class components. Please wrap your function component with `React.forwardRef()` or use a class component instead.");
  }
  class AnimatedComponent {
    constructor(arg0) {
      self = this;
      tmp = closure_3(this, AnimatedComponent);
      items = [];
      items[0] = name;
      tmp2 = metroRequire;
      obj = metroRequire(AnimatedComponent);
      tmp3 = hasOwnProperty;
      if (closure_12()) {
        tmp5 = globalThis;
        _Reflect = Reflect;
        constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
      } else {
        constructResult = obj.apply(self, items);
      }
      tmp3Result = tmp3(self, constructResult);
      closure_0 = tmp3Result;
      tmp3Result._styles = null;
      tmp3Result._isFirstRender = true;
      tmp3Result.jestAnimatedStyle = { value: {} };
      tmp3Result.jestAnimatedProps = { value: {} };
      tmp3Result._componentRef = null;
      tmp3Result._componentDOMRef = null;
      tmp3Result._sharedElementTransition = null;
      tmp6 = c2;
      tmp7 = new closure_1(c2[12])();
      tmp3Result._jsPropsUpdater = tmp7;
      tmp8 = closure_0;
      inlinePropManager = new closure_0(c2[13]).InlinePropManager();
      tmp3Result._InlinePropManager = inlinePropManager;
      propsFilter = new closure_0(c2[14]).PropsFilter();
      tmp3Result._PropsFilter = propsFilter;
      tmp11 = +closure_17;
      closure_17 = tmp11 + 1;
      tmp3Result.reanimatedID = tmp11;
      tmp3Result._willUnmount = false;
      tmp3Result._resolveComponentRef = (getAnimatableRef) => {
        if (getAnimatableRef) {
          if (getAnimatableRef.getAnimatableRef) {
            let animatableRef = getAnimatableRef.getAnimatableRef();
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
      obj = {
        getForwardedRef() {
              return closure_0.props.forwardedRef;
            },
        setLocalRef(arg0) {
              if (arg0) {
                if (arg0 !== closure_0._componentRef) {
                  obj._componentRef = obj._resolveComponentRef(arg0);
                  obj._viewInfo = undefined;
                }
                const props = obj.props;
                ({ entering, sharedTransitionTag } = props);
                if (!closure_2_16) {
                  const result = AnimatedComponent(1680).enableLayoutAnimations(true, false);
                  const obj2 = AnimatedComponent(1680);
                }
                if (sharedTransitionTag) {
                  const result1 = obj._configureSharedTransition();
                }
                const context = obj.context;
                if (context != null) {
                  const current = context.current;
                }
                let isFabricResult = !entering;
                if (entering) {
                  isFabricResult = AnimatedComponent(1639).isFabric();
                  const obj3 = AnimatedComponent(1639);
                }
                if (!isFabricResult) {
                  isFabricResult = current;
                }
                if (!isFabricResult) {
                  isFabricResult = module_1639;
                }
                if (!isFabricResult) {
                  const result2 = obj._configureLayoutAnimation(AnimatedComponent(1661).LayoutAnimationType.ENTERING, obj.props.entering);
                }
              }
            }
      };
      tmp3Result._setComponentRef = closure_1(c2[15])(obj);
      if (closure_3_14) {
        obj1 = { value: null };
        obj1.value = {};
        tmp3Result.jestAnimatedStyle = obj1;
        obj2 = { value: null };
        obj2.value = {};
        tmp3Result.jestAnimatedProps = obj2;
      }
      tmp3Result.state = { settledProps: {}, reanimatedProps: {} };
      context = tmp3Result.context;
      current = undefined;
      if (context != null) {
        current = context.current;
      }
      tmp8Result = tmp8(tmp6[9]);
      tmp13 = tmp8Result.isFabric() && !current;
      if (tmp13) {
        result = tmp3Result._configureLayoutAnimation(tmp8(tmp6[17]).LayoutAnimationType.ENTERING, tmp3Result.props.entering);
      }
      return tmp3Result;
    }
  }
  _inherits(AnimatedComponent, noop.Component);
  const entry = {
    key: "componentDidMount",
    value: function componentDidMount() {
      let firstChild1;
      const self = this;
      if (!module_1639) {
        const nativeEventsManager = new NativeEventsManager.NativeEventsManager(self, closure_1);
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
      let isFabricResult = _mod1639.isFabric();
      if (isFabricResult) {
        isFabricResult = -1 !== componentViewTag;
      }
      if (isFabricResult) {
        const PropsRegistryGarbageCollector = tmp17(1745).PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.registerView(componentViewTag, self);
      }
      if (-1 !== componentViewTag) {
        const ComponentRegistry = tmp17(1739).ComponentRegistry;
        ComponentRegistry.register(componentViewTag, self);
      }
      const result2 = self._configureLayoutAnimation(tmp17(1661).LayoutAnimationType.LAYOUT, self.props.layout);
      const result3 = self._configureLayoutAnimation(tmp17(1661).LayoutAnimationType.EXITING, self.props.exiting);
      let tmp25 = tmp17;
      if (module_1639) {
        tmp25 = tmp17;
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
          delete tmp2[tmp];
          if (self.props.exiting) {
            startWebLayoutAnimation.saveSnapshot(_componentDOMRef);
          }
          if (self.props.entering) {
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
                tmp25 = tmp32;
                if (_componentDOMRef.style) {
                  _componentDOMRef.style.visibility = "initial";
                  tmp25 = tmp32;
                }
              } else {
                const result4 = tmp32(1690).startWebLayoutAnimation(self.props, _componentDOMRef, tmp32(1661).LayoutAnimationType.ENTERING);
                tmp25 = tmp32;
                const tmp32Result = tmp32(1690);
              }
            }
            obj3 = startWebLayoutAnimation;
          } else {
            self._isFirstRender = false;
          }
        }
      }
      let _willUnmount = !closure_16;
      if (!closure_16) {
        let tmp25Result = tmp25(1639);
        _willUnmount = tmp25Result.isFabric();
      }
      if (_willUnmount) {
        _willUnmount = self._willUnmount;
      }
      if (_willUnmount) {
        _willUnmount = typeof componentViewTag === "number";
      }
      if (_willUnmount) {
        tmp25Result = tmp25(1680);
        const result5 = tmp25Result.unmarkNodeAsRemovable(componentViewTag);
      }
      self._isFirstRender = false;
    }
  };
  let items = [
    entry,
    {
      key: "componentWillUnmount",
      value: function componentWillUnmount() {
        const self = this;
        const _NativeEventsManager = this._NativeEventsManager;
        if (_NativeEventsManager != null) {
          _NativeEventsManager.detachEvents();
        }
        const _jsPropsUpdater = self._jsPropsUpdater;
        const result = _jsPropsUpdater.removeOnJSPropsChangeListener(self);
        const componentViewTag = self.getComponentViewTag();
        let isFabricResult = AnimatedComponent(1639).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = tmp4(1745).PropsRegistryGarbageCollector;
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
          const ComponentRegistry = tmp4(1739).ComponentRegistry;
          ComponentRegistry.unregister(componentViewTag);
        }
        if (module_1639) {
          if (self._componentDOMRef) {
            if (exiting) {
              let tmp4Result = tmp4(1690);
              if (tmp4Result.getReducedMotionFromConfig(exiting)) {
                const callbackV = exiting.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                tmp4Result = tmp4(1723);
                const result2 = tmp4Result.addHTMLMutationObserver();
                ({ props, _componentDOMRef } = self);
                const result3 = tmp4(1690).startWebLayoutAnimation(props, _componentDOMRef, tmp4(1661).LayoutAnimationType.EXITING);
                const tmp4Result1 = tmp4(1690);
              }
            }
            const _viewInfo = self._viewInfo;
            let isFabricResult1 = !closure_1_16;
            if (!closure_1_16) {
              isFabricResult1 = tmp4(1639).isFabric();
              const tmp4Result2 = tmp4(1639);
            }
            if (isFabricResult1) {
              isFabricResult1 = shadowNodeWrapper;
            }
            if (isFabricResult1) {
              tmp4(1680).markNodeAsRemovable(shadowNodeWrapper);
              const tmp4Result3 = tmp4(1680);
            }
            self._willUnmount = true;
          }
        }
        if (exiting) {
          if (!module_1639) {
            if (!tmp4Result4.isFabric()) {
              if ("getReduceMotion" in exiting) {
                if (typeof exiting.getReduceMotion === "function") {
                  let reduceMotionFromConfig = tmp4(1676).getReduceMotionFromConfig(exiting.getReduceMotion());
                  const tmp4Result5 = tmp4(1676);
                }
                if (!reduceMotionFromConfig) {
                  const result4 = self._configureLayoutAnimation(tmp4(1661).LayoutAnimationType.EXITING, exiting);
                }
              }
              reduceMotionFromConfig = tmp4(1676).getReduceMotionFromConfig();
              const tmp4Result6 = tmp4(1676);
            }
            tmp4Result4 = tmp4(1639);
          }
        }
      }
    },
    {
      key: "_syncStylePropsBackToReact",
      value: function _syncStylePropsBackToReact(arg0) {
        closure_0 = arg0;
        this.setState((settledProps) => {
          let obj = { settledProps: null };
          obj = {};
          const merged = Object.assign(settledProps.settledProps);
          const merged1 = Object.assign(closure_0);
          obj.settledProps = obj;
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
            viewDescriptors = undefined;
            if (animatedProps != null) {
              viewDescriptors = animatedProps.viewDescriptors;
            }
            if (viewDescriptors) {
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
        let setNativeProps;
        if (closure_1 != null) {
          setNativeProps = obj.setNativeProps;
        }
        const self = this;
        if (setNativeProps) {
          obj.setNativeProps(self._componentRef, props);
        } else {
          const _componentRef = self._componentRef;
          if (_componentRef != null) {
            setNativeProps = _componentRef.setNativeProps;
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
        let disableReactSync;
        if (closure_1 != null) {
          disableReactSync = closure_1.disableReactSync;
        }
        if (!disableReactSync) {
          let reanimatedProps = {};
          for (const key10015 in arg0) {
            let tmp8 = arg0[key10015];
            if ("color" === key10015) {
              if (tmp8) {
                if (typeof tmp8 === "string") {
                  let tmp4 = React7(tmp8);
                  reanimatedProps[key10015] = tmp4;
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
            reanimatedProps = { reanimatedProps: null };
            reanimatedProps = {};
            const merged = Object.assign(reanimatedProps.reanimatedProps);
            const merged1 = Object.assign(reanimatedProps);
            reanimatedProps.reanimatedProps = reanimatedProps;
            return reanimatedProps;
          });
        }
      }
    },
    {
      key: "_getViewInfo",
      value: function _getViewInfo() {
        const self = this;
        if (undefined !== this._viewInfo) {
          return self._viewInfo;
        } else {
          if (closure_1_16) {
            ({ _componentRef: viewTag, _componentDOMRef } = self);
            let shadowNodeWrapperFromRef = null;
            viewConfig = null;
            viewName = null;
          } else {
            let obj = AnimatedComponent(1665);
            const findHostInstanceResult = obj.findHostInstance(self);
            if (findHostInstanceResult) {
              let tmpResult = tmp(1749);
              const viewInfo = tmpResult.getViewInfo(findHostInstanceResult);
              ({ viewTag, viewName, viewConfig } = viewInfo);
              tmpResult = tmp(1639);
              shadowNodeWrapperFromRef = null;
              if (tmpResult.isFabric()) {
                shadowNodeWrapperFromRef = tmp(1664).getShadowNodeWrapperFromRef(self, findHostInstanceResult);
                const tmpResult1 = tmp(1664);
              }
              _componentDOMRef = null;
            } else {
              const reanimatedError = new tmp(1647).ReanimatedError("Cannot find host instance for this component. Maybe it renders nothing?");
              throw reanimatedError;
            }
          }
          obj = { viewTag, viewName, shadowNodeWrapper: shadowNodeWrapperFromRef, viewConfig };
          self._viewInfo = obj;
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
        const self = this;
        if (this.props.style) {
          let obj = isStyleAttached(_styles[27]);
          let items = (function onlyAnimatedStyles(arr) {
            return arr.filter((viewDescriptors) => {
              viewDescriptors = undefined;
              if (viewDescriptors != null) {
                viewDescriptors = viewDescriptors.viewDescriptors;
              }
              return viewDescriptors;
            });
          })(obj.flattenArray(self.props.style));
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
        let viewDescriptors;
        if (animatedProps2 != null) {
          viewDescriptors = animatedProps2.viewDescriptors;
        }
        if (!viewDescriptors) {
          viewDescriptors = items.length;
        }
        if (viewDescriptors) {
          viewDescriptors = viewConfig;
        }
        if (viewDescriptors) {
          isStyleAttached(_styles[28]).adaptViewConfig(viewConfig);
          const obj2 = isStyleAttached(_styles[28]);
        }
        const set = new Set(items);
        isStyleAttached = function isStyleAttached(_styles) {

        };
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
        let viewDescriptors1;
        if (animatedProps3 != null) {
          viewDescriptors1 = animatedProps3.viewDescriptors;
        }
        let tmp10 = !viewDescriptors1;
        if (viewDescriptors1) {
          let hasItem = _animatedProps === self.props.animatedProps;
          if (hasItem) {
            viewDescriptors = self.props.animatedProps.viewDescriptors;
            hasItem = viewDescriptors.has(viewTag);
          }
          tmp10 = hasItem;
        }
        if (!tmp8) {
          if (_styles) {
            function _loop(iter) {
              closure_0 = iter;
              if (!items.some((viewDescriptors) => {
                let tmp = viewDescriptors !== closure_0;
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
          let tmp16 = animatedProps;
          if (animatedProps) {
            tmp16 = closure_14;
          }
          if (tmp16) {
            obj = {};
            let merged = Object.assign(self.jestAnimatedProps.value);
            value = undefined;
            if (animatedProps != null) {
              if (animatedProps.initial != null) {
                value = iter2.value;
              }
            }
            let merged1 = Object.assign(value);
            self.jestAnimatedProps.value = obj;
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
              let obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
              viewDescriptors.add(obj, viewDescriptors.styleUpdaterContainer);
              if (closure_2_14) {
                obj = {};
                const merged = Object.assign(self.jestAnimatedStyle.value);
                const merged1 = Object.assign(viewDescriptors.initial.value);
                self.jestAnimatedStyle.value = obj;
                viewDescriptors.jestAnimatedValues.current = self.jestAnimatedStyle;
              }
            });
          }
          let tmp26 = _animatedProps;
          if (_animatedProps) {
            tmp26 = _animatedProps !== self.props.animatedProps;
          }
          if (tmp26) {
            let viewDescriptors2 = _animatedProps.viewDescriptors;
            viewDescriptors2.remove(viewTag);
          }
          let tmp28 = !tmp10;
          if (!tmp10) {
            const animatedProps4 = self.props.animatedProps;
            viewDescriptors2 = undefined;
            if (animatedProps4 != null) {
              viewDescriptors2 = animatedProps4.viewDescriptors;
            }
            tmp28 = viewDescriptors2;
          }
          if (tmp28) {
            const viewDescriptors3 = self.props.animatedProps.viewDescriptors;
            obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
            viewDescriptors3.add(obj, self.props.animatedProps.styleUpdaterContainer);
          }
        }
      }
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(layout, arg1, arg2) {
        const self = this;
        const result = this._configureLayoutAnimation(AnimatedComponent(1661).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
        const result1 = this._configureLayoutAnimation(AnimatedComponent(1661).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
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
        let _componentDOMRef = module_1639;
        if (module_1639) {
          _componentDOMRef = self.props.exiting;
        }
        if (_componentDOMRef) {
          _componentDOMRef = self._componentDOMRef;
        }
        if (_componentDOMRef) {
          let tmpResult = tmp(1690);
          tmpResult.saveSnapshot(self._componentDOMRef);
        }
        if (module_1639) {
          if (arg2) {
            if (self.props.layout) {
              tmpResult = tmp(1690);
              if (tmpResult.getReducedMotionFromConfig(self.props.layout)) {
                layout = self.props.layout;
                const callbackV = layout.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                const result4 = tmp(1690).tryActivateLayoutTransition(self.props, self._componentDOMRef, arg2);
                const tmpResult1 = tmp(1690);
              }
            }
          }
        }
      }
    },
    {
      key: "_configureLayoutAnimation",
      value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
        if (!map1) {
          if (exiting !== exiting2) {
            const self = this;
            const obj = AnimatedComponent(1750);
            if (obj2.isFabric()) {
              if (EXITING === tmp5(1661).LayoutAnimationType.ENTERING) {
                let reanimatedID = self.reanimatedID;
              }
              let maybeBuildResult = tmp3;
              if (tmp3) {
                let tmp8;
                if (EXITING !== tmp5(1661).LayoutAnimationType.LAYOUT) {
                  const props = self.props;
                  let style;
                  if (props != null) {
                    style = props.style;
                  }
                  tmp8 = style;
                }
                maybeBuildResult = tmp5(1751).maybeBuild(tmp3, tmp8, AnimatedComponent.displayName);
                const tmp5Result = tmp5(1751);
              }
              const result = obj.updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
            }
            reanimatedID = self.getComponentViewTag();
            obj2 = AnimatedComponent(1639);
          }
        }
      }
    },
    {
      key: "_configureSharedTransition",
      value: function _configureSharedTransition(flag) {
        if (flag === undefined) {
          flag = false;
        }
        if (!module_1639) {
          const self = this;
          const sharedTransitionTag = this.props.sharedTransitionTag;
          if (sharedTransitionTag) {
            let _sharedElementTransition2 = self.props.sharedTransitionStyle;
            if (_sharedElementTransition2 == null) {
              _sharedElementTransition2 = self._sharedElementTransition;
            }
            if (_sharedElementTransition2 == null) {
              _sharedElementTransition2 = new AnimatedComponent(1752).SharedTransition();
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
        if (getReduceMotion) {
          if ("getReduceMotion" in getReduceMotion) {
            if (typeof getReduceMotion.getReduceMotion === "function") {
              let reduceMotionFromConfig = AnimatedComponent(1676).getReduceMotionFromConfig(getReduceMotion.getReduceMotion());
              const obj2 = AnimatedComponent(1676);
            }
            return reduceMotionFromConfig;
          }
        }
        reduceMotionFromConfig = AnimatedComponent(1676).getReduceMotionFromConfig();
      }
    },
    {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate() {
        let boundingClientRect = null;
        if (module_1639) {
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
        const self = this;
        const _PropsFilter = this._PropsFilter;
        const result = _PropsFilter.filterNonAnimatedProps(this);
        if (closure_14) {
          ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
        }
        let tmp3 = self._isFirstRender && module_1639 && result.entering;
        if (tmp3) {
          let obj = startWebLayoutAnimation;
          tmp3 = !obj.getReducedMotionFromConfig(result.entering);
        }
        if (!tmp3) {
          const context = self.context;
          let current;
          if (context != null) {
            current = context.current;
          }
          if (!current) {
            let obj3 = _mod1639;
            if (obj3.isFabric()) {
              const _HermesInternal = HermesInternal;
              const combined = "" + self.reanimatedID;
            }
          }
          if (closure_14) {
            let style2 = self.props.style;
            if (style2) {
              let style = self.props.style;
              if (!style) {
                style2 = style;
              } else {
                const _Array2 = Array;
                if (Array.isArray(style)) {
                  style = style.filter((item) => {
                    let tmp = item;
                    if (item) {
                      tmp = "viewDescriptors" in item;
                    }
                    return !tmp;
                  });
                  let mapped = style.map((viewDescriptors) => {
                    let tmp = viewDescriptors;
                    if (Array.isArray(viewDescriptors)) {
                      if (!viewDescriptors) {
                        tmp = viewDescriptors;
                      } else {
                        const _Array = Array;
                        if (Array.isArray(viewDescriptors)) {
                          const found = viewDescriptors.filter((item) => {
                            let tmp = item;
                            if (item) {
                              tmp = "viewDescriptors" in item;
                            }
                            return !tmp;
                          });
                          let mapped = found.map((viewDescriptors) => {
                            let tmp = viewDescriptors;
                            if (Array.isArray(viewDescriptors)) {
                              if (!viewDescriptors) {
                                tmp = viewDescriptors;
                              } else {
                                const _Array = Array;
                                if (Array.isArray(viewDescriptors)) {
                                  const found = viewDescriptors.filter((item) => {
                                    let tmp = item;
                                    if (item) {
                                      tmp = "viewDescriptors" in item;
                                    }
                                    return !tmp;
                                  });
                                  let mapped = found.map((viewDescriptors) => {
                                    let tmp = viewDescriptors;
                                    if (Array.isArray(viewDescriptors)) {
                                      if (!viewDescriptors) {
                                        tmp = viewDescriptors;
                                      } else {
                                        const _Array = Array;
                                        if (Array.isArray(viewDescriptors)) {
                                          const found = viewDescriptors.filter(() => { ... });
                                          let mapped = found.map(() => { ... });
                                        } else {
                                          viewDescriptors = undefined;
                                          if (viewDescriptors != null) {
                                            viewDescriptors = viewDescriptors.viewDescriptors;
                                          }
                                          mapped = viewDescriptors;
                                          if (viewDescriptors) {
                                            mapped = {};
                                          }
                                        }
                                      }
                                    }
                                    return tmp;
                                  });
                                } else {
                                  viewDescriptors = undefined;
                                  if (viewDescriptors != null) {
                                    viewDescriptors = viewDescriptors.viewDescriptors;
                                  }
                                  mapped = viewDescriptors;
                                  if (viewDescriptors) {
                                    mapped = {};
                                  }
                                }
                              }
                            }
                            return tmp;
                          });
                        } else {
                          viewDescriptors = undefined;
                          if (viewDescriptors != null) {
                            viewDescriptors = viewDescriptors.viewDescriptors;
                          }
                          mapped = viewDescriptors;
                          if (viewDescriptors) {
                            mapped = {};
                          }
                        }
                      }
                    }
                    return tmp;
                  });
                } else {
                  let viewDescriptors;
                  if (style != null) {
                    viewDescriptors = style.viewDescriptors;
                  }
                  mapped = style;
                  if (viewDescriptors) {
                    mapped = {};
                  }
                }
              }
            }
            obj = { jestInlineStyle: style2, jestAnimatedStyle: null, jestAnimatedProps: null };
            ({ jestAnimatedStyle: obj7.jestAnimatedStyle, jestAnimatedProps: obj7.jestAnimatedProps } = self);
          } else {
            obj = {};
          }
          const obj1 = { collapsable: false };
          if (obj9.isFabric()) {
            const obj2 = {};
            const merged = Object.assign(closure_2_10.flatten(result.style));
            const merged1 = Object.assign(self.state.settledProps);
            obj3 = { nativeID: combined };
            const merged2 = Object.assign(result);
            const merged3 = Object.assign(obj);
            obj3.style = obj2;
            const merged4 = Object.assign(self.state.settledProps);
            const merged5 = Object.assign(self.state.reanimatedProps);
            obj3.ref = self._setComponentRef;
            const merged6 = Object.assign(obj1);
            return <AnimatedComponent nativeID={combined} />;
          } else {
            const obj4 = { nativeID: combined };
            const merged7 = Object.assign(result);
            const merged8 = Object.assign(obj);
            const merged9 = Object.assign(self.state.reanimatedProps);
            obj4.ref = self._setComponentRef;
            const merged10 = Object.assign(obj1);
            return <AnimatedComponent nativeID={combined} />;
          }
          obj9 = _mod1639;
        } else {
          let _Array = Array;
          style = result.style;
          if (Array.isArray(result.style)) {
            const items = [{ visibility: "hidden" }];
            let combined1 = style.concat(items);
          } else {
            let obj5 = style;
            if (style == null) {
              obj5 = {};
            }
            combined1 = {};
            const merged11 = Object.assign(obj5);
            combined1.visibility = "hidden";
          }
          result.style = combined1;
        }
      }
    }
  ];
  const tmp9 = _createClass(AnimatedComponent, items);
  dependencyMap = tmp9;
  tmp9.contextType = AnimatedComponent(1774).SkipEnteringContext;
  tmp9.displayName = "AnimatedComponent(" + name.displayName || name.name || "Component" + ")";
  const componentWithRefResult = AnimatedComponent(1775).componentWithRef((arg0, forwardedRef) => {
    let obj = {};
    const merged = Object.assign(arg0);
    let tmp4 = null;
    if (null !== forwardedRef) {
      obj = { forwardedRef };
      tmp4 = obj;
    }
    const merged1 = Object.assign(tmp4);
    return <closure_2 />;
  });
  componentWithRefResult.displayName = name.displayName || name.name || "Component";
  return componentWithRefResult;
};