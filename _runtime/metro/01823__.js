// _runtime/metro/01823__.js
import _possibleConstructorReturnDefault from "00093__possibleConstructorReturn.js";
import JSPropsUpdaterNativeDefault from "../01837_JSPropsUpdaterNative.js";
import _modDef1876 from "01876__.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";

const AnimatedComponent = fn;
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
_possibleConstructorReturnDefault;
const Fragment = fn(19).Fragment;
const jsx = fn(21).jsx;
let c10 = 0;
const DynamicFlags = fn(1793);
let staticFeatureFlag = DynamicFlags.getStaticFeatureFlag("FORCE_REACT_RENDER_FOR_SETTLED_ANIMATIONS");
if (staticFeatureFlag) {
  staticFeatureFlag = !fn(1793).getStaticFeatureFlag("USE_ANIMATION_BACKEND");
  let obj2 = fn(1793);
}
class AnimatedComponent {
  constructor(arg0, arg1, arg2, arg3) {
    self = this;
    tmp = closure_3(this, AnimatedComponent);
    items = [, ];
    items[0] = global;
    items[1] = fn;
    tmp2 = hasOwnProperty;
    obj = hasOwnProperty(AnimatedComponent);
    tmp3 = closure_4;
    if (closure_9()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    tmp3Result._animatedStyles = [];
    tmp3Result._prevAnimatedStyles = [];
    tmp3Result._animatedProps = [];
    tmp3Result._prevAnimatedProps = [];
    tmp3Result._isFirstRender = true;
    tmp3Result.jestAnimatedStyle = { value: {} };
    tmp3Result.jestAnimatedProps = { value: {} };
    tmp6 = closure_0;
    tmp7 = c2;
    inlinePropManager = new closure_0(c2[9]).InlinePropManager();
    tmp3Result._InlinePropManager = inlinePropManager;
    propsFilter = new closure_0(c2[10]).PropsFilter();
    tmp3Result._PropsFilter = propsFilter;
    tmp10 = +closure_10;
    closure_10 = tmp10 + 1;
    tmp3Result.reanimatedID = tmp10;
    tmp3Result._options = importAll;
    tmp3Result._displayName = importDefault;
    if (closure_11) {
      tmp3Result.state = {};
    }
    if (tmp6(tmp7[11]).IS_JEST) {
      obj1 = { value: null };
      obj1.value = {};
      tmp3Result.jestAnimatedStyle = obj1;
      obj5 = { value: null };
      obj5.value = {};
      tmp3Result.jestAnimatedProps = obj5;
    }
    result = tmp3Result._configureSharedTransition(true);
    context = tmp3Result.context;
    current = undefined;
    if (context != null) {
      current = context.current;
    }
    if (!current) {
      result1 = tmp3Result._configureLayoutAnimation(tmp6(tmp7[12]).LayoutAnimationType.ENTERING, tmp3Result.props.entering);
    }
    return tmp3Result;
  }
}
_inherits(AnimatedComponent, _modDef1876);
const entry = {
  key: "componentDidMount",
  value: function componentDidMount() {
    const self = this;
    let fn = _get(hasOwnProperty(AnimatedComponent.prototype), "componentDidMount", this);
    if (typeof fn === "function") {
      fn = (items1) => fn.apply(self, items1);
    }
    fn([]);
    const nativeEventsManager = new AnimatedComponent(1865).NativeEventsManager(self, self._options);
    self._NativeEventsManager = nativeEventsManager;
    const _NativeEventsManager = self._NativeEventsManager;
    if (_NativeEventsManager != null) {
      _NativeEventsManager.attachEvents();
    }
    const result = self._updateAnimatedStylesAndProps();
    const _InlinePropManager = self._InlinePropManager;
    _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    if (closure_11) {
      const componentViewTag = self.getComponentViewTag();
      if (-1 !== componentViewTag) {
        const PropsRegistryGarbageCollector = AnimatedComponent(1867).PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.registerView(componentViewTag, self);
      }
    }
    const _options = self._options;
    let length;
    if (_options != null) {
      const jsProps = _options.jsProps;
      if (jsProps != null) {
        length = jsProps.length;
      }
    }
    if (length) {
      JSPropsUpdaterNativeDefault.registerComponent(self, self._options.jsProps);
    }
    const context = self.context;
    if (context != null) {
      const current = context.current;
    }
    const IS_IOS = AnimatedComponent(1665).IS_IOS;
    let _isFirstRender = !IS_IOS;
    if (IS_IOS) {
      _isFirstRender = self._isFirstRender;
    }
    if (!_isFirstRender) {
      _isFirstRender = current;
    }
    if (!_isFirstRender) {
      const result1 = self._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.ENTERING, self.props.entering);
    }
    const result2 = self._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.LAYOUT, self.props.layout);
    const result3 = self._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.EXITING, self.props.exiting);
    self._isFirstRender = false;
  }
};
let items = [
  entry,
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      let fn = _get(hasOwnProperty(AnimatedComponent.prototype), "componentWillUnmount", this);
      if (typeof fn === "function") {
        fn = (items1) => fn.apply(self, items1);
      }
      fn([]);
      const _NativeEventsManager = self._NativeEventsManager;
      if (_NativeEventsManager != null) {
        _NativeEventsManager.detachEvents();
      }
      self._detachStyles();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.detachInlineProps();
      if (closure_11) {
        const componentViewTag = self.getComponentViewTag();
        if (-1 !== componentViewTag) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1867).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.unregisterView(componentViewTag);
        }
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        JSPropsUpdaterNativeDefault.unregisterComponent(self);
      }
    }
  },
  {
    key: "_syncStylePropsBackToReact",
    value: function _syncStylePropsBackToReact(styleProps) {
      if (staticFeatureFlag) {
        const self = this;
        const _Set = Set;
        const _animatedProps = this._animatedProps;
        items = [];
        const _Object = Object;
        HermesBuiltin.arraySpread(Object.keys(this._InlinePropManager._inlineTopLevelProps), HermesBuiltin.arraySpread(_animatedProps.flatMap((initial) => {
          let obj;
          if (initial.initial != null) {
            obj = iter.value;
          }
          if (obj == null) {
            obj = {};
          }
          return Object.keys(obj);
        }), 0));
        const set = new Set(items);
        if (0 !== set.size) {
          self.setState((settledProps) => {
            settledProps = {};
            const merged = Object.assign(settledProps.settledProps);
            const obj = {};
            const merged1 = Object.assign(settledProps.settledStyle);
            for (const key10011 in closure_0) {
              let tmp6 = styleProps[key10011];
              if (set.has(key10011)) {
                settledProps[key10011] = tmp6;
                continue;
              } else {
                obj[key10011] = tmp6;
                continue;
              }
              continue;
            }
            return { settledProps, settledStyle: obj };
          });
        } else {
          self.setState((settledStyle) => {
            const obj = { settledStyle: null };
            const merged = Object.assign(settledStyle.settledStyle);
            const merged1 = Object.assign(closure_0);
            obj.settledStyle = {};
            return obj;
          });
        }
        const arraySpreadResult = HermesBuiltin.arraySpread(_animatedProps.flatMap((initial) => {
          let obj;
          if (initial.initial != null) {
            obj = iter.value;
          }
          if (obj == null) {
            obj = {};
          }
          return Object.keys(obj);
        }), 0);
      }
    }
  },
  {
    key: "_detachHostBindings",
    value: function _detachHostBindings(viewTag) {
      const self = this;
      viewTag = viewTag.viewTag;
      this._detachStyles(viewTag);
      const _InlinePropManager = this._InlinePropManager;
      _InlinePropManager.detachInlineProps();
      let tmp3 = staticFeatureFlag;
      if (staticFeatureFlag) {
        const viewsMap = AnimatedComponent(1867).PropsRegistryGarbageCollector.viewsMap;
        tmp3 = viewsMap.get(viewTag) === self;
      }
      if (tmp3) {
        const PropsRegistryGarbageCollector = AnimatedComponent(1867).PropsRegistryGarbageCollector;
        PropsRegistryGarbageCollector.unregisterView(viewTag);
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        JSPropsUpdaterNativeDefault.unregisterComponent(self);
      }
    }
  },
  {
    key: "_attachHostBindings",
    value: function _attachHostBindings() {
      const self = this;
      const result = this._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.LAYOUT, this.props.layout);
      const result1 = this._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.EXITING, this.props.exiting);
      this._sharedTransition = undefined;
      const result2 = this._configureSharedTransition();
      if (staticFeatureFlag) {
        const componentViewTag = self.getComponentViewTag();
        if (-1 !== componentViewTag) {
          const PropsRegistryGarbageCollector = AnimatedComponent(1867).PropsRegistryGarbageCollector;
          PropsRegistryGarbageCollector.registerView(componentViewTag, self);
        }
      }
      const _options = self._options;
      let length;
      if (_options != null) {
        const jsProps = _options.jsProps;
        if (jsProps != null) {
          length = jsProps.length;
        }
      }
      if (length) {
        JSPropsUpdaterNativeDefault.registerComponent(self, self._options.jsProps);
      }
      const result3 = self._updateAnimatedStylesAndProps();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    }
  },
  {
    key: "_detachStyles",
    value: function _detachStyles() {
      const self = this;
      let componentViewTag = viewTag;
      if (viewTag === undefined) {
        componentViewTag = self.getComponentViewTag();
      }
      if (-1 !== componentViewTag) {
        items = [];
        HermesBuiltin.arraySpread(self._animatedStyles, HermesBuiltin.arraySpread(self._prevAnimatedStyles, 0));
        for (const item10006 of items) {
          let viewDescriptors = item10006.viewDescriptors;
          let removeResult = viewDescriptors.remove(componentViewTag);
          continue;
        }
        const items1 = [];
        HermesBuiltin.arraySpread(self._animatedProps, HermesBuiltin.arraySpread(self._prevAnimatedProps, 0));
        const iter = items1[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          if (nextResult != null) {
            let viewDescriptors2 = nextResult.viewDescriptors;
            if (viewDescriptors2 != null) {
              let removeResult1 = viewDescriptors2.remove(componentViewTag);
            }
          }
          continue;
        }
      }
    }
  },
  {
    key: "setNativeProps",
    value: function setNativeProps(arg0) {
      const self = this;
      const _options = this._options;
      let setNativeProps1;
      if (_options != null) {
        setNativeProps1 = _options.setNativeProps;
      }
      if (setNativeProps1) {
        const _options2 = self._options;
        _options2.setNativeProps(self._componentRef, arg0);
      } else {
        const _componentRef = self._componentRef;
        if (_componentRef != null) {
          const setNativeProps = _componentRef.setNativeProps;
          if (setNativeProps != null) {
            setNativeProps(arg0);
          }
        }
      }
    }
  },
  {
    key: "_handleAnimatedStylesUpdate",
    value: function _handleAnimatedStylesUpdate(_prevAnimatedProps, _animatedProps, jestAnimatedProps) {
      const current = jestAnimatedProps;
      ({ viewTag: dependencyMap, shadowNodeWrapper: _classCallCheck } = this._getViewInfo());
      const set = new Set(_animatedProps);
      function isStyleAttached(viewDescriptors) {
        viewDescriptors = viewDescriptors.viewDescriptors;
        return viewDescriptors.has(tag);
      }
      if (_prevAnimatedProps) {
        function _loop(iter) {
          _animatedProps = iter;
          if (!_animatedProps.some((viewDescriptors) => {
            let tmp = viewDescriptors !== closure_0;
            if (!tmp) {
              if (typeof isStyleAttached === "function") {
                viewDescriptors = viewDescriptors.viewDescriptors;
                tmp = !viewDescriptors.has(tag);
              } else {
                throw new TypeError("Trying to call a non-function");
              }
            }
            let flag = !tmp;
            if (!tmp) {
              set.delete(viewDescriptors);
              flag = true;
            }
            return flag;
          })) {
            let viewDescriptors = iter.viewDescriptors;
            viewDescriptors.remove(closure_2);
          }
        }
        const iter = _prevAnimatedProps[Symbol.iterator]();
        while (iter !== undefined) {
          let _loopResult = _loop(iter.next());
          continue;
        }
      }
      const item = set.forEach((viewDescriptors) => {
        viewDescriptors = viewDescriptors.viewDescriptors;
        viewDescriptors.add({ tag, shadowNodeWrapper }, viewDescriptors.styleUpdaterContainer);
        if (AnimatedComponent(1665).IS_JEST) {
          const _Object = Object;
          const merged = Object.assign(current.value, viewDescriptors.initial.value);
          viewDescriptors.jestAnimatedValues.current = current;
        }
        const obj = { tag, shadowNodeWrapper };
      });
    }
  },
  {
    key: "_updateAnimatedStylesAndProps",
    value: function _updateAnimatedStylesAndProps() {
      const result = this._handleAnimatedStylesUpdate(this._prevAnimatedStyles, this._animatedStyles, this.jestAnimatedStyle);
      const result1 = this._handleAnimatedStylesUpdate(this._prevAnimatedProps, this._animatedProps, this.jestAnimatedProps);
    }
  },
  {
    key: "componentDidUpdate",
    value: function componentDidUpdate(current) {
      const self = this;
      this._refreshComponentRef();
      const _NativeEventsManager = this._NativeEventsManager;
      if (_NativeEventsManager != null) {
        _NativeEventsManager.updateEvents(current);
      }
      const result = self._updateAnimatedStylesAndProps();
      const _InlinePropManager = self._InlinePropManager;
      _InlinePropManager.attachInlineProps(self, self._getViewInfo());
    }
  },
  {
    key: "_updateStyles",
    value: function _updateStyles(style) {
      const obj = AnimatedComponent(1825);
      style = style.style;
      if (style == null) {
        style = [];
      }
      const self = this;
      const filterStylesResult = obj.filterStyles(AnimatedComponent(1825).flattenArray(style));
      this._prevAnimatedStyles = this._animatedStyles;
      this._animatedStyles = filterStylesResult.animatedStyles;
      const obj2 = AnimatedComponent(1825);
      const tmp3Result = AnimatedComponent(1825);
      let animatedProps = style.animatedProps;
      if (animatedProps == null) {
        animatedProps = [];
      }
      const filterStylesResult1 = tmp3Result.filterStyles(AnimatedComponent(1825).flattenArray(animatedProps));
      self._prevAnimatedProps = self._animatedProps;
      self._animatedProps = filterStylesResult1.animatedStyles;
      if (filterStylesResult1.cssStyle) {
        const obj3 = {};
        const merged = Object.assign(style);
        const merged1 = Object.assign(filterStylesResult1.cssStyle);
        delete tmp[tmp2];
        delete tmp[tmp2];
        self._cssStyle = obj3;
      } else {
        let cssStyle = filterStylesResult.cssStyle;
        if (cssStyle == null) {
          cssStyle = {};
        }
        self._cssStyle = cssStyle;
      }
      const tmp3Result2 = AnimatedComponent(1825);
    }
  },
  {
    key: "_configureLayoutAnimation",
    value: function _configureLayoutAnimation(EXITING, exiting, exiting2) {
      if (exiting !== exiting2) {
        const self = this;
        if (EXITING === AnimatedComponent(1697).LayoutAnimationType.ENTERING) {
          let reanimatedID = self.reanimatedID;
        } else {
          reanimatedID = self.getComponentViewTag();
        }
        let maybeBuildResult = exiting;
        if (exiting) {
          maybeBuildResult = AnimatedComponent(1870).maybeBuild(exiting);
          const tmp2Result = AnimatedComponent(1870);
        }
        const result = AnimatedComponent(1868).updateLayoutAnimations(reanimatedID, EXITING, maybeBuildResult);
        const obj = AnimatedComponent(1868);
      }
    }
  },
  {
    key: "_configureSharedTransition",
    value: function _configureSharedTransition(arg0) {
      let obj = AnimatedComponent;
      let result = dependencyMap;
      if (obj2.getStaticFeatureFlag("ENABLE_SHARED_ELEMENT_TRANSITIONS")) {
        const self = this;
        if (this.props.sharedTransitionTag) {
          let sharedTransitionTag = self.props.sharedTransitionStyle;
          if (sharedTransitionTag == null) {
            sharedTransitionTag = self._sharedTransition;
          }
          if (sharedTransitionTag == null) {
            sharedTransitionTag = new obj(1871).SharedTransition();
          }
          if (!tmp11) {
            const objResult = obj(1868);
            if (arg0) {
              let reanimatedID2 = self.reanimatedID;
            } else {
              reanimatedID2 = self.getComponentViewTag();
            }
            const LayoutAnimationType2 = obj(1697).LayoutAnimationType;
            const tmp12 = arg0 ? LayoutAnimationType2.SHARED_ELEMENT_TRANSITION_NATIVE_ID : LayoutAnimationType2.SHARED_ELEMENT_TRANSITION;
            obj = obj(1870);
            result = objResult.updateLayoutAnimations(reanimatedID2, tmp12, obj.maybeBuild(sharedTransitionTag), undefined, self.props.sharedTransitionTag);
            self._sharedTransition = sharedTransitionTag;
            sharedTransitionTag = self.props.sharedTransitionTag;
            self._sharedTransitionTag = sharedTransitionTag;
          }
          tmp11 = self._sharedTransition === sharedTransitionTag && self._sharedTransitionTag === self.props.sharedTransitionTag;
        } else if (self._sharedTransitionTag) {
          const objResult2 = obj(1868);
          if (arg0) {
            let reanimatedID = self.reanimatedID;
          } else {
            reanimatedID = self.getComponentViewTag();
          }
          const LayoutAnimationType = obj(1697).LayoutAnimationType;
          const tmp3 = arg0 ? LayoutAnimationType.SHARED_ELEMENT_TRANSITION_NATIVE_ID : LayoutAnimationType.SHARED_ELEMENT_TRANSITION;
          const result1 = objResult2.updateLayoutAnimations(reanimatedID, tmp3, undefined, undefined, undefined);
          self._sharedTransitionTag = undefined;
        }
      }
    }
  },
  {
    key: "getSnapshotBeforeUpdate",
    value: function getSnapshotBeforeUpdate(layout) {
      const result = this._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.LAYOUT, this.props.layout, layout.layout);
      const result1 = this._configureLayoutAnimation(AnimatedComponent(1697).LayoutAnimationType.EXITING, this.props.exiting, layout.exiting);
      const result2 = this._configureSharedTransition();
      return null;
    }
  },
  {
    key: "render",
    value: function render() {
      const self = this;
      const _PropsFilter = this._PropsFilter;
      const result = _PropsFilter.filterNonAnimatedProps(this);
      if (AnimatedComponent(1665).IS_JEST) {
        ({ jestAnimatedStyle: tmp.jestAnimatedStyle, jestAnimatedProps: tmp.jestAnimatedProps } = self);
      }
      const context = self.context;
      if (context != null) {
        const current = context.current;
      }
      if (AnimatedComponent(1665).IS_JEST) {
        let style = self.props.style;
        if (style) {
          let style1 = self.props.style;
          if (!style1) {
            style = style1;
          } else {
            let _Array = Array;
            if (Array.isArray(style1)) {
              style1 = style1.filter((item) => {
                let tmp = item;
                if (item) {
                  tmp = "viewDescriptors" in item;
                }
                return !tmp;
              });
              let mapped = style1.map((viewDescriptors) => {
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
                                              const found = viewDescriptors.filter(/* F82788 */ function() { ... });
                                              let mapped = found.map(/* F82789 */ function() { ... });
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
              if (style1 != null) {
                viewDescriptors = style1.viewDescriptors;
              }
              mapped = style1;
              if (viewDescriptors) {
                mapped = {};
              }
            }
          }
        }
        const obj = { jestInlineStyle: style, jestAnimatedStyle: null, jestAnimatedProps: null };
        ({ jestAnimatedStyle: obj2.jestAnimatedStyle, jestAnimatedProps: obj2.jestAnimatedProps } = self);
      } else if (!current) {
        const _HermesInternal = HermesInternal;
        const combined = "" + self.reanimatedID;
      }
      let tmp11 = "RadialGradient" !== self.ChildComponent.displayName;
      if (tmp11) {
        tmp11 = "LinearGradient" !== self.ChildComponent.displayName;
      }
      if (!tmp11) {
        if (undefined === result.children) {
          result.children = <metroImportDefault />;
        }
      }
      if (closure_11) {
        if (self.state.settledStyle) {
          let fn2 = _get(hasOwnProperty(AnimatedComponent.prototype), "render", self);
          let fn = fn2;
          if (typeof fn2 === "function") {
            fn2 = (items1) => fn.apply(self, items1);
          }
          const obj3 = { nativeID: combined };
          const merged = Object.assign(result);
          const merged1 = Object.assign(self.state.settledProps);
          items = [];
          items[HermesBuiltin.arraySpread(AnimatedComponent(1825).flattenArray(result.style), 0)] = self.state.settledStyle;
          obj3.style = items;
          const merged2 = Object.assign(tmp4);
          const items1 = [obj3];
          let fn2Result = fn2(items1);
          const tmp2Result = AnimatedComponent(1825);
        }
        return fn2Result;
      }
      fn = _get(hasOwnProperty(AnimatedComponent.prototype), "render", self);
      if (typeof fn === "function") {
        fn = (items1) => fn.apply(self, items1);
      }
      const merged3 = Object.assign(result);
      const merged4 = Object.assign(tmp4);
      const items2 = [{ nativeID: combined }];
      fn2Result = fn(items2);
      const obj4 = { nativeID: combined };
    }
  }
];
const importDefaultResultResult = _createClass(AnimatedComponent, items);
importDefaultResultResult.contextType = fn(1881).SkipEnteringContext;

export default importDefaultResultResult;