// === Module 1879: ? ===

// Module 1879
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import c3 from "_possibleConstructorReturn" /* 93 */;
import _getPrototypeOf from "_getPrototypeOf" /* 95 */;
import _inherits from "_inherits" /* 98 */;

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
get_ActivityIndicator = fn(17);
({ Platform, StyleSheet: hasOwnProperty } = get_ActivityIndicator);
const jsx = fn(21).jsx;
class AnimatedComponent {
  constructor(arg0, arg1) {
    self = this;
    tmp = c2(this, AnimatedComponent);
    items = [];
    items[0] = fn;
    tmp2 = closure_4;
    obj = closure_4(AnimatedComponent);
    tmp3 = closure_3;
    if (metroImportDefault()) {
      tmp5 = globalThis;
      _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, tmp2(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    tmp3Result = tmp3(self, constructResult);
    closure_0 = tmp3Result;
    tmp3Result._cssStyle = {};
    tmp3Result._componentRef = null;
    tmp3Result._rawComponentRef = null;
    tmp3Result._componentDOMRef = null;
    tmp3Result._willUnmount = false;
    tmp3Result._setComponentRef = (_rawComponentRef) => {
      const forwardedRef = props.props.forwardedRef;
      if (_rawComponentRef) {
        props._forwardedRefCleanup = AnimatedComponent(1880).assignRef(forwardedRef, _rawComponentRef);
        if (_rawComponentRef !== props._rawComponentRef) {
          props._rawComponentRef = _rawComponentRef;
          const _resolveComponentRefResult = props._resolveComponentRef(_rawComponentRef);
          if (_resolveComponentRefResult !== props._componentRef) {
            props._updateComponentRef(_resolveComponentRefResult);
          }
        }
        props._onSetLocalRef();
        const obj3 = AnimatedComponent(1880);
      } else if (props._forwardedRefCleanup) {
        props._forwardedRefCleanup();
        props._forwardedRefCleanup = undefined;
      } else {
        AnimatedComponent(1880).assignRef(forwardedRef, null);
        const obj2 = AnimatedComponent(1880);
      }
    };
    tmp3Result._resolveComponentRef = (getAnimatableRef) => {
      let animatableRef = getAnimatableRef;
      if (getAnimatableRef) {
        animatableRef = getAnimatableRef;
        if (getAnimatableRef.getAnimatableRef) {
          animatableRef = getAnimatableRef.getAnimatableRef();
        }
      }
      return animatableRef;
    };
    tmp3Result.ChildComponent = global;
    return tmp3Result;
  }
}
_inherits(AnimatedComponent, fn(19).Component);
const entry = {
  key: "getComponentViewTag",
  value: function getComponentViewTag() {
    return this._getViewInfo().viewTag;
  }
};
let items = [
  entry,
  {
    key: "_onSetLocalRef",
    value: function _onSetLocalRef() {

    }
  },
  {
    key: "_getViewInfo",
    value: function _getViewInfo() {
      const self = this;
      if (undefined === this._viewInfo) {
        self._viewInfo = self._resolveViewInfo();
      }
      return self._viewInfo;
    }
  },
  {
    key: "_resolveViewInfo",
    value: function _resolveViewInfo() {
      const findHostInstanceResult = AnimatedComponent(1707).findHostInstance(this);
      if (findHostInstanceResult) {
        const viewInfo = AnimatedComponent(1881).getViewInfo(findHostInstanceResult);
        let num = viewInfo.viewTag;
        if (num == null) {
          num = -1;
        }
        const obj2 = { viewTag: num, shadowNodeWrapper: null, reactViewName: null };
        const tmpResult = AnimatedComponent(1881);
        obj2.shadowNodeWrapper = AnimatedComponent(1706).getShadowNodeWrapperFromRef(this, findHostInstanceResult);
        obj2.reactViewName = viewInfo.reactViewName;
        return obj2;
      } else {
        const _Error = Error;
        const error = new Error("[Reanimated] Cannot find host instance for this component. Maybe it renders nothing?");
        throw error;
      }
      const obj = AnimatedComponent(1707);
    }
  },
  {
    key: "_refreshComponentRef",
    value: function _refreshComponentRef() {
      const self = this;
      const _rawComponentRef = this._rawComponentRef;
      let getAnimatableRef;
      if (_rawComponentRef != null) {
        getAnimatableRef = _rawComponentRef.getAnimatableRef;
      }
      if (getAnimatableRef) {
        const _resolveComponentRefResult = self._resolveComponentRef(_rawComponentRef);
        if (_resolveComponentRefResult !== self._componentRef) {
          self._updateComponentRef(_resolveComponentRefResult);
        }
      }
    }
  },
  {
    key: "_updateComponentRef",
    value: function _updateComponentRef(_resolveComponentRefResult) {
      const self = this;
      const _viewInfo = this._viewInfo;
      this._componentRef = _resolveComponentRefResult;
      if (undefined !== _viewInfo) {
        const _resolveViewInfoResult = self._resolveViewInfo();
        if (_resolveViewInfoResult.viewTag !== _viewInfo.viewTag) {
          self._detachHostBindings(_viewInfo);
          if (_viewInfo.shadowNodeWrapper) {
            AnimatedComponent(1658).markNodeAsRemovable(shadowNodeWrapper);
            const obj = AnimatedComponent(1658);
          }
          self._viewInfo = _resolveViewInfoResult;
          if (self._CSSManager) {
            const _CSSManager = self._CSSManager;
            _CSSManager.unmountCleanup();
            self._CSSManager = self._createCSSManager();
            const _CSSManager2 = self._CSSManager;
            _CSSManager2.update(self._cssStyle, self.props);
          }
          self._attachHostBindings();
        } else {
          self._viewInfo = _resolveViewInfoResult;
        }
      }
    }
  },
  {
    key: "_detachHostBindings",
    value: function _detachHostBindings(arg0) {

    }
  },
  {
    key: "_attachHostBindings",
    value: function _attachHostBindings() {

    }
  },
  {
    key: "_createCSSManager",
    value: function _createCSSManager() {
      let name = this.ChildComponent.displayName;
      if (name == null) {
        name = this.ChildComponent.name;
      }
      const cSSManager = new AnimatedComponent(1882).CSSManager(this._getViewInfo(), name);
      return cSSManager;
    }
  },
  {
    key: "_updateStyles",
    value: function _updateStyles(style) {
      let flattenResult = hasOwnProperty.flatten(style.style);
      if (flattenResult == null) {
        flattenResult = {};
      }
      this._cssStyle = flattenResult;
    }
  },
  {
    key: "componentDidMount",
    value: function componentDidMount() {
      const self = this;
      this._updateStyles(this.props);
      const _viewInfo = this._viewInfo;
      let viewTag;
      if (_viewInfo != null) {
        viewTag = _viewInfo.viewTag;
      }
      if (tmp3) {
        const result = AnimatedComponent(1658).unmarkNodeAsRemovable(viewTag);
        const obj = AnimatedComponent(1658);
      }
      if (self._CSSManager == null) {
        self._CSSManager = self._createCSSManager();
      }
      const _CSSManager = self._CSSManager;
      if (_CSSManager != null) {
        _CSSManager.update(self._cssStyle, self.props);
      }
      self._willUnmount = false;
      tmp3 = self._willUnmount && typeof viewTag === "number";
    }
  },
  {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      const self = this;
      if (this._CSSManager) {
        const _CSSManager = self._CSSManager;
        _CSSManager.unmountCleanup();
      }
      const _viewInfo = self._viewInfo;
      let shadowNodeWrapper;
      if (_viewInfo != null) {
        shadowNodeWrapper = _viewInfo.shadowNodeWrapper;
      }
      if (shadowNodeWrapper) {
        AnimatedComponent(1658).markNodeAsRemovable(shadowNodeWrapper);
        const obj = AnimatedComponent(1658);
      }
      self._willUnmount = true;
    }
  },
  {
    key: "shouldComponentUpdate",
    value: function shouldComponentUpdate(arg0) {
      const self = this;
      this._updateStyles(arg0);
      if (this._CSSManager) {
        const _CSSManager = self._CSSManager;
        _CSSManager.update(self._cssStyle, arg0);
      }
      return true;
    }
  },
  {
    key: "render",
    value: function render(props) {
      const self = this;
      if (props == null) {
        props = self.props;
      }
      const obj2 = {};
      const merged = Object.assign(AnimatedComponent(1883).filterCSSProps(props));
      obj2.collapsable = false;
      obj2.ref = self._setComponentRef;
      return jsx(this.ChildComponent, {});
    }
  }
];

export default _createClass(AnimatedComponent, items);