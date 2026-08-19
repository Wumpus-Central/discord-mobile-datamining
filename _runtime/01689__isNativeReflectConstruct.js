// === Module 1689: _isNativeReflectConstruct ===

// Module 1689 (_isNativeReflectConstruct)
import _modDef38 from "module_38" /* 38 */;
import isJest2 from "isJest" /* 1657 */;
import isWorkletFunction from "isWorkletFunction" /* 1679 */;
import JSPropsUpdaterPaperDefault from "JSPropsUpdaterPaper" /* 1749 */;
import isInlineStyleTransform from "isInlineStyleTransform" /* 1750 */;
import dummyListener from "dummyListener" /* 1758 */;
import setAndForwardRefDefault from "setAndForwardRef" /* 1760 */;
import updateLayoutAnimations from "updateLayoutAnimations" /* 1768 */;
import maybeBuild from "maybeBuild" /* 1769 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _possibleConstructorReturn from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;
import startObservingProgress from "startObservingProgress" /* 1690 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { jsx } from "jsxProd" /* 21 */;
import isJest from "isJest" /* 1657 */;

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
({ Platform, processColor: c9, StyleSheet: c10 } = get_ActivityIndicator);
isJest.isWeb();
let closure_14 = isJest.isJest();
let closure_15 = isJest.isReact19();
let closure_16 = isJest.shouldBeUseWeb();
if (isJest) {
  let result = require("startWebLayoutAnimation").configureWebLayoutAnimations();
  let obj5 = require("startWebLayoutAnimation");
}
let closure_17 = 0;

export const createAnimatedComponent = function createAnimatedComponent(name) {
  const AnimatedComponent = name;
  importDefault = arg1;
  if (!closure_15) {
    let tmp4 = typeof name !== "function";
    if (typeof name === "function") {
      tmp4 = name.prototype && name.prototype.isReactComponent;
    }
    class AnimatedComponent {
      constructor(arg0) {
        self = this;
        tmp = closure_3(this, closure_0);
        items = [];
        items[0] = name;
        tmp2 = closure_6;
        obj = closure_6(closure_0);
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
        tmp3Result._styles = null;
        tmp3Result._isFirstRender = true;
        tmp3Result.jestAnimatedStyle = { value: {} };
        tmp3Result.jestAnimatedProps = { value: {} };
        tmp3Result._componentRef = null;
        tmp3Result._componentDOMRef = null;
        tmp3Result._sharedElementTransition = null;
        tmp6 = closure_2;
        tmp7 = new closure_1(closure_2[12])();
        tmp3Result._jsPropsUpdater = tmp7;
        tmp8 = closure_0;
        inlinePropManager = new closure_0(closure_2[13]).InlinePropManager();
        tmp3Result._InlinePropManager = inlinePropManager;
        propsFilter = new closure_0(closure_2[14]).PropsFilter();
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
          if (closure_1_16) {
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
                  return lib.props.forwardedRef;
                },
          setLocalRef(arg0) {
                  if (arg0) {
                    if (arg0 !== lib._componentRef) {
                      lib._componentRef = lib._resolveComponentRef(arg0);
                      lib._viewInfo = undefined;
                    }
                    const props = lib.props;
                    ({ entering, sharedTransitionTag } = props);
                    if (!closure_1_16) {
                      const result = lib(closure_1_2[16]).enableLayoutAnimations(true, false);
                      const obj2 = lib(closure_1_2[16]);
                    }
                    if (sharedTransitionTag) {
                      const result1 = lib._configureSharedTransition();
                    }
                    const context = lib.context;
                    if (context != null) {
                      const current = context.current;
                    }
                    let isFabricResult = !entering;
                    if (entering) {
                      isFabricResult = lib(closure_1_2[9]).isFabric();
                      const obj3 = lib(closure_1_2[9]);
                    }
                    if (!isFabricResult) {
                      isFabricResult = current;
                    }
                    if (!isFabricResult) {
                      isFabricResult = closure_1_13;
                    }
                    if (!isFabricResult) {
                      const result2 = lib._configureLayoutAnimation(lib(closure_1_2[17]).LayoutAnimationType.ENTERING, lib.props.entering);
                    }
                  }
                }
        };
        tmp3Result._setComponentRef = closure_1(closure_2[15])(obj);
        if (closure_14) {
          obj1 = { value: null };
          obj1[0] = {};
          tmp3Result.jestAnimatedStyle = obj1;
          obj2 = { value: null };
          obj2[0] = {};
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
      tmp = closure_3(this, closure_0);
      items = [];
      items[0] = name;
      tmp2 = closure_6;
      obj = closure_6(closure_0);
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
      tmp3Result._styles = null;
      tmp3Result._isFirstRender = true;
      tmp3Result.jestAnimatedStyle = { value: {} };
      tmp3Result.jestAnimatedProps = { value: {} };
      tmp3Result._componentRef = null;
      tmp3Result._componentDOMRef = null;
      tmp3Result._sharedElementTransition = null;
      tmp6 = closure_2;
      tmp7 = new closure_1(closure_2[12])();
      tmp3Result._jsPropsUpdater = tmp7;
      tmp8 = closure_0;
      inlinePropManager = new closure_0(closure_2[13]).InlinePropManager();
      tmp3Result._InlinePropManager = inlinePropManager;
      propsFilter = new closure_0(closure_2[14]).PropsFilter();
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
        if (closure_1_16) {
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
              return lib.props.forwardedRef;
            },
        setLocalRef(arg0) {
              if (arg0) {
                if (arg0 !== lib._componentRef) {
                  lib._componentRef = lib._resolveComponentRef(arg0);
                  lib._viewInfo = undefined;
                }
                const props = lib.props;
                ({ entering, sharedTransitionTag } = props);
                if (!closure_1_16) {
                  const result = lib(closure_1_2[16]).enableLayoutAnimations(true, false);
                  const obj2 = lib(closure_1_2[16]);
                }
                if (sharedTransitionTag) {
                  const result1 = lib._configureSharedTransition();
                }
                const context = lib.context;
                if (context != null) {
                  const current = context.current;
                }
                let isFabricResult = !entering;
                if (entering) {
                  isFabricResult = lib(closure_1_2[9]).isFabric();
                  const obj3 = lib(closure_1_2[9]);
                }
                if (!isFabricResult) {
                  isFabricResult = current;
                }
                if (!isFabricResult) {
                  isFabricResult = closure_1_13;
                }
                if (!isFabricResult) {
                  const result2 = lib._configureLayoutAnimation(lib(closure_1_2[17]).LayoutAnimationType.ENTERING, lib.props.entering);
                }
              }
            }
      };
      tmp3Result._setComponentRef = closure_1(closure_2[15])(obj);
      if (closure_14) {
        obj1 = { value: null };
        obj1[0] = {};
        tmp3Result.jestAnimatedStyle = obj1;
        obj2 = { value: null };
        obj2[0] = {};
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
  callback2(AnimatedComponent, Component.Component);
  let items = [
    {
      key: "componentDidMount",
      value: function componentDidMount() {
        let firstChild1;
        const self = this;
        if (!isJest) {
          const nativeEventsManager = new AnimatedComponent(1761).NativeEventsManager(self, closure_1);
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
        let isFabricResult = AnimatedComponent(1657).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1763).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.registerView(componentViewTag, self);
        }
        if (-1 !== componentViewTag) {
          const ComponentRegistry = AnimatedComponent(1757).ComponentRegistry;
          ComponentRegistry.register(componentViewTag, self);
        }
        const result2 = self._configureLayoutAnimation(AnimatedComponent(1679).LayoutAnimationType.LAYOUT, self.props.layout);
        const result3 = self._configureLayoutAnimation(AnimatedComponent(1679).LayoutAnimationType.EXITING, self.props.exiting);
        let tmp25 = AnimatedComponent;
        if (isJest) {
          tmp25 = AnimatedComponent;
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
              AnimatedComponent(1708).saveSnapshot(_componentDOMRef);
              const obj2 = AnimatedComponent(1708);
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
                  tmp25 = AnimatedComponent;
                  if (_componentDOMRef.style) {
                    _componentDOMRef.style.visibility = "initial";
                    tmp25 = AnimatedComponent;
                  }
                } else {
                  const result4 = AnimatedComponent(1708).startWebLayoutAnimation(self.props, _componentDOMRef, AnimatedComponent(1679).LayoutAnimationType.ENTERING);
                  tmp25 = AnimatedComponent;
                  const tmp32Result = AnimatedComponent(1708);
                }
              }
              obj3 = AnimatedComponent(1708);
            } else {
              self._isFirstRender = false;
            }
          }
        }
        let _willUnmount = !closure_1_16;
        if (!closure_1_16) {
          let tmp25Result = tmp25(1657);
          _willUnmount = tmp25Result.isFabric();
        }
        if (_willUnmount) {
          _willUnmount = self._willUnmount;
        }
        if (_willUnmount) {
          _willUnmount = typeof componentViewTag === "number";
        }
        if (_willUnmount) {
          tmp25Result = tmp25(1698);
          const result5 = tmp25Result.unmarkNodeAsRemovable(componentViewTag);
        }
        self._isFirstRender = false;
        const obj = AnimatedComponent(1657);
      }
    },
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
        let isFabricResult = AnimatedComponent(1657).isFabric();
        if (isFabricResult) {
          isFabricResult = -1 !== componentViewTag;
        }
        if (isFabricResult) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1763).PropsRegistryGarbageCollector;
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
          const ComponentRegistry = AnimatedComponent(1757).ComponentRegistry;
          ComponentRegistry.unregister(componentViewTag);
        }
        if (closure_13) {
          if (self._componentDOMRef) {
            if (exiting) {
              let tmp4Result = AnimatedComponent(1708);
              if (tmp4Result.getReducedMotionFromConfig(exiting)) {
                const callbackV = exiting.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                tmp4Result = AnimatedComponent(1741);
                const result2 = tmp4Result.addHTMLMutationObserver();
                ({ props, _componentDOMRef } = self);
                const result3 = AnimatedComponent(1708).startWebLayoutAnimation(props, _componentDOMRef, AnimatedComponent(1679).LayoutAnimationType.EXITING);
                const tmp4Result1 = AnimatedComponent(1708);
              }
            }
            const _viewInfo = self._viewInfo;
            let isFabricResult1 = !closure_16;
            if (!closure_16) {
              isFabricResult1 = AnimatedComponent(1657).isFabric();
              const tmp4Result2 = AnimatedComponent(1657);
            }
            if (isFabricResult1) {
              isFabricResult1 = shadowNodeWrapper;
            }
            if (isFabricResult1) {
              AnimatedComponent(1698).markNodeAsRemovable(shadowNodeWrapper);
              const tmp4Result3 = AnimatedComponent(1698);
            }
            self._willUnmount = true;
          }
        }
        if (exiting) {
          if (!closure_13) {
            if (!tmp4Result4.isFabric()) {
              if ("getReduceMotion" in exiting) {
                if (typeof exiting.getReduceMotion === "function") {
                  let reduceMotionFromConfig = AnimatedComponent(1694).getReduceMotionFromConfig(exiting.getReduceMotion());
                  const tmp4Result5 = AnimatedComponent(1694);
                }
                if (!reduceMotionFromConfig) {
                  const result4 = self._configureLayoutAnimation(AnimatedComponent(1679).LayoutAnimationType.EXITING, exiting);
                }
              }
              reduceMotionFromConfig = AnimatedComponent(1694).getReduceMotionFromConfig();
              const tmp4Result6 = AnimatedComponent(1694);
            }
            tmp4Result4 = AnimatedComponent(1657);
          }
        }
        const obj = AnimatedComponent(1657);
      }
    },
    {
      key: "_syncStylePropsBackToReact",
      value: function _syncStylePropsBackToReact(arg0) {
        closure_0 = arg0;
        this.setState((settledProps) => {
          const obj = {};
          const merged = Object.assign(settledProps.settledProps);
          const merged1 = Object.assign(closure_0);
          obj[0] = obj;
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
        if (nativeProps != null) {
          setNativeProps = nativeProps.setNativeProps;
        }
        const self = this;
        if (setNativeProps) {
          nativeProps.setNativeProps(self._componentRef, props);
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
        if (disableReactSync != null) {
          disableReactSync = disableReactSync.disableReactSync;
        }
        if (!disableReactSync) {
          obj = {};
          for (const key10015 in arg0) {
            let tmp8 = arg0[key10015];
            if ("color" === key10015) {
              if (tmp8) {
                if (typeof tmp8 === "string") {
                  let tmp4 = closure_1_9(tmp8);
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
            obj = {};
            const merged = Object.assign(reanimatedProps.reanimatedProps);
            const merged1 = Object.assign(obj);
            obj[0] = obj;
            return obj;
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
          if (closure_16) {
            ({ _componentRef: viewTag, _componentDOMRef } = self);
            let shadowNodeWrapperFromRef = null;
            viewConfig = null;
            viewName = null;
          } else {
            let obj = AnimatedComponent(1683);
            const findHostInstanceResult = obj.findHostInstance(self);
            if (findHostInstanceResult) {
              let tmpResult = AnimatedComponent(1767);
              const viewInfo = tmpResult.getViewInfo(findHostInstanceResult);
              ({ viewTag, viewName, viewConfig } = viewInfo);
              tmpResult = AnimatedComponent(1657);
              shadowNodeWrapperFromRef = null;
              if (tmpResult.isFabric()) {
                shadowNodeWrapperFromRef = AnimatedComponent(1682).getShadowNodeWrapperFromRef(self, findHostInstanceResult);
                const tmpResult1 = AnimatedComponent(1682);
              }
              _componentDOMRef = null;
            } else {
              const reanimatedError = new AnimatedComponent(1665).ReanimatedError("Cannot find host instance for this component. Maybe it renders nothing?");
              throw reanimatedError;
            }
          }
          obj = { viewTag: null, viewName: null, shadowNodeWrapper: null, viewConfig: null };
          obj[0] = viewTag;
          obj[1] = viewName;
          obj[2] = shadowNodeWrapperFromRef;
          obj[3] = viewConfig;
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
            return arr.filter((item, index) => {
              let viewDescriptors;
              if (item != null) {
                viewDescriptors = item.viewDescriptors;
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
        const tmp8 = null != _styles && items.length === _styles.length && items.every((item, index) => {
          let hasItem = item === _styles[index];
          if (hasItem) {
            if (typeof isStyleAttached !== "function") {
              HermesBuiltin.throwTypeError();
            }
            const viewDescriptors = item.viewDescriptors;
            hasItem = viewDescriptors.has(viewTag);
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
              if (!items.some((item, index) => {
                let tmp = item !== closure_0;
                if (!tmp) {
                  if (typeof closure_0 !== "function") {
                    HermesBuiltin.throwTypeError();
                  }
                  const viewDescriptors = item.viewDescriptors;
                  tmp = !viewDescriptors.has(viewTag);
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
            let value;
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
            const item = set.forEach((item, index) => {
              const viewDescriptors = item.viewDescriptors;
              let obj = { tag: viewTag, name: viewName, shadowNodeWrapper };
              viewDescriptors.add(obj, item.styleUpdaterContainer);
              if (closure_1_14) {
                obj = {};
                const merged = Object.assign(self.jestAnimatedStyle.value);
                const merged1 = Object.assign(item.initial.value);
                self.jestAnimatedStyle.value = obj;
                item.jestAnimatedValues.current = self.jestAnimatedStyle;
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
            obj = { tag: null, name: null, shadowNodeWrapper: null };
            obj[0] = viewTag;
            obj[1] = viewName;
            obj[2] = shadowNodeWrapper;
            viewDescriptors3.add(obj, self.props.animatedProps.styleUpdaterContainer);
          }
        }
      }
    },
    {
      key: "componentDidUpdate",
      value: function componentDidUpdate(layout) {
        const self = this;
        const result = this._configureLayoutAnimation(AnimatedComponent(1679).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
        const result1 = this._configureLayoutAnimation(AnimatedComponent(1679).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
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
        let _componentDOMRef = closure_13;
        if (closure_13) {
          _componentDOMRef = self.props.exiting;
        }
        if (_componentDOMRef) {
          _componentDOMRef = self._componentDOMRef;
        }
        if (_componentDOMRef) {
          let tmpResult = AnimatedComponent(1708);
          tmpResult.saveSnapshot(self._componentDOMRef);
        }
        if (closure_13) {
          if (arg2) {
            if (self.props.layout) {
              tmpResult = AnimatedComponent(1708);
              if (tmpResult.getReducedMotionFromConfig(self.props.layout)) {
                layout = self.props.layout;
                const callbackV = layout.callbackV;
                if (callbackV != null) {
                  callbackV(true);
                }
              } else {
                const result4 = AnimatedComponent(1708).tryActivateLayoutTransition(self.props, self._componentDOMRef, arg2);
                const tmpResult1 = AnimatedComponent(1708);
              }
            }
          }
        }
        tmp5 = undefined === this.props.sharedTransitionTag && undefined === layout.sharedTransitionTag;
      }
    },
    {
      key: "_configureLayoutAnimation",
      value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
        if (!isJest) {
          if (exiting !== exiting2) {
            const self = this;
            const obj = updateLayoutAnimations;
            if (obj2.isFabric()) {
              if (EXITING === isWorkletFunction.LayoutAnimationType.ENTERING) {
                let reanimatedID = self.reanimatedID;
              }
              let maybeBuildResult = tmp3;
              if (tmp3) {
                let tmp8;
                if (EXITING !== isWorkletFunction.LayoutAnimationType.LAYOUT) {
                  const props = self.props;
                  let style;
                  if (props != null) {
                    style = props.style;
                  }
                  tmp8 = style;
                }
                maybeBuildResult = maybeBuild.maybeBuild(tmp3, tmp8, AnimatedComponent.displayName);
                const tmp5Result = maybeBuild;
              }
              const result = obj.updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
            }
            reanimatedID = self.getComponentViewTag();
            obj2 = isJest2;
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
        if (!closure_13) {
          const self = this;
          const sharedTransitionTag = this.props.sharedTransitionTag;
          if (sharedTransitionTag) {
            let _sharedElementTransition2 = self.props.sharedTransitionStyle;
            if (_sharedElementTransition2 == null) {
              _sharedElementTransition2 = self._sharedElementTransition;
            }
            if (_sharedElementTransition2 == null) {
              _sharedElementTransition2 = new AnimatedComponent(1770).SharedTransition();
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
              let reduceMotionFromConfig = AnimatedComponent(1694).getReduceMotionFromConfig(getReduceMotion.getReduceMotion());
              const obj2 = AnimatedComponent(1694);
            }
            return reduceMotionFromConfig;
          }
        }
        reduceMotionFromConfig = AnimatedComponent(1694).getReduceMotionFromConfig();
        const obj = AnimatedComponent(1694);
      }
    },
    {
      key: "getSnapshotBeforeUpdate",
      value: function getSnapshotBeforeUpdate() {
        let boundingClientRect = null;
        if (closure_13) {
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
        if (closure_1_14) {
          ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
        }
        let tmp3 = self._isFirstRender && isJest && result.entering;
        if (tmp3) {
          let obj = AnimatedComponent(1708);
          tmp3 = !obj.getReducedMotionFromConfig(result.entering);
        }
        if (!tmp3) {
          const context = self.context;
          let current;
          if (context != null) {
            current = context.current;
          }
          if (!current) {
            let obj3 = AnimatedComponent(1657);
            if (obj3.isFabric()) {
              const _HermesInternal = HermesInternal;
              const combined = "" + self.reanimatedID;
            }
          }
          if (closure_1_14) {
            let style2 = self.props.style;
            if (style2) {
              let style = self.props.style;
              if (!style) {
                style2 = style;
              } else {
                const _Array2 = Array;
                if (Array.isArray(style)) {
                  style = style.filter((item, index) => {
                    let tmp = item;
                    if (item) {
                      tmp = "viewDescriptors" in item;
                    }
                    return !tmp;
                  });
                  let mapped = style.map((item, index) => {
                    let tmp = item;
                    if (Array.isArray(item)) {
                      if (!item) {
                        tmp = item;
                      } else {
                        const _Array = Array;
                        if (Array.isArray(item)) {
                          const found = item.filter((item, index) => {
                            let tmp = item;
                            if (item) {
                              tmp = "viewDescriptors" in item;
                            }
                            return !tmp;
                          });
                          let mapped = found.map((item, index) => {
                            let tmp = item;
                            if (Array.isArray(item)) {
                              if (!item) {
                                tmp = item;
                              } else {
                                const _Array = Array;
                                if (Array.isArray(item)) {
                                  const found = item.filter((item, index) => {
                                    let tmp = item;
                                    if (item) {
                                      tmp = "viewDescriptors" in item;
                                    }
                                    return !tmp;
                                  });
                                  let mapped = found.map((item, index) => {
                                    let tmp = item;
                                    if (Array.isArray(item)) {
                                      if (!item) {
                                        tmp = item;
                                      } else {
                                        const _Array = Array;
                                        if (Array.isArray(item)) {
                                          const found = item.filter(() => { ... });
                                          let mapped = found.map(() => { ... });
                                        } else {
                                          let viewDescriptors;
                                          if (item != null) {
                                            viewDescriptors = item.viewDescriptors;
                                          }
                                          mapped = item;
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
                                  if (item != null) {
                                    viewDescriptors = item.viewDescriptors;
                                  }
                                  mapped = item;
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
                          if (item != null) {
                            viewDescriptors = item.viewDescriptors;
                          }
                          mapped = item;
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
            obj = { jestInlineStyle: null, jestAnimatedStyle: null, jestAnimatedProps: null };
            obj[0] = style2;
            ({ jestAnimatedStyle: obj7[1], jestAnimatedProps: obj7[2] } = self);
          } else {
            obj = {};
          }
          obj1 = { collapsable: false };
          if (obj9.isFabric()) {
            const obj2 = {};
            const merged = Object.assign(closure_1_10.flatten(result.style));
            const merged1 = Object.assign(self.state.settledProps);
            obj3 = { nativeID: null };
            obj3[0] = combined;
            const merged2 = Object.assign(result);
            const merged3 = Object.assign(obj);
            obj3.style = obj2;
            const merged4 = Object.assign(self.state.settledProps);
            const merged5 = Object.assign(self.state.reanimatedProps);
            obj3.ref = self._setComponentRef;
            const merged6 = Object.assign(obj1);
            return <AnimatedComponent nativeID={null} />;
          } else {
            const obj4 = { nativeID: null };
            obj4[0] = combined;
            const merged7 = Object.assign(result);
            const merged8 = Object.assign(obj);
            const merged9 = Object.assign(self.state.reanimatedProps);
            obj4.ref = self._setComponentRef;
            const merged10 = Object.assign(obj1);
            return <AnimatedComponent nativeID={null} />;
          }
          obj9 = AnimatedComponent(1657);
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
  const tmp9 = callback(AnimatedComponent, items);
  dependencyMap = tmp9;
  tmp9.contextType = AnimatedComponent(1792).SkipEnteringContext;
  tmp9.displayName = "AnimatedComponent(" + name.displayName || name.name || "Component" + ")";
  const componentWithRefResult = AnimatedComponent(1793).componentWithRef((arg0, arg1) => {
    let obj = {};
    const merged = Object.assign(arg0);
    let tmp4 = null;
    if (null !== arg1) {
      obj = { forwardedRef: null };
      obj[0] = arg1;
      tmp4 = obj;
    }
    const merged1 = Object.assign(tmp4);
    return <closure_2 />;
  });
  componentWithRefResult.displayName = name.displayName || name.name || "Component";
  return componentWithRefResult;
};