// _runtime/metro/00380__.js
import javaScriptFlagGetterAll from "../00027_javaScriptFlagGetter.js";
import _modDef38 from "00038__.js";
import renderElement from "../00114_renderElement.js";
import flattenStyleDefault from "../00148_flattenStyle.js";
import get_BatchedBridge from "../00272_get_BatchedBridge.js";
import get_nativeEventEmitterDefault from "../00357_get_nativeEventEmitter.js";
import _modDef367 from "00367__.js";
import _modDef381 from "00381__.js";
import _modDef382 from "00382__.js";
import attachNativeEventImpl from "../00384_attachNativeEventImpl.js";
import _slicedToArray from "00032__slicedToArray.js";
import _classCallCheck from "00041__classCallCheck.js";
import _createClass from "00042__createClass.js";
import metroRequire from "00093__possibleConstructorReturn.js";
import _getPrototypeOf from "../00095__getPrototypeOf.js";
import _get from "00096__get.js";
import _inherits from "../00098__inherits.js";
import _classPrivateFieldBase from "../00090__classPrivateFieldBase.js";
import _classPrivateFieldKey from "../00091__classPrivateFieldKey.js";

function _isNativeReflectConstruct() {
  try {
    const _Boolean = Boolean;
    const _Reflect = Reflect;
    const _Boolean2 = Boolean;
    let closure_0 = !valueOf.call(Reflect.construct(Boolean, [], () => {}));
    _isNativeReflectConstruct = function _isNativeReflectConstruct() {
      return closure_0;
    };
    return _isNativeReflectConstruct();
  } catch (err) {}
}
function _connectAnimatedView2(instance) {
  const self = this;
  _modDef38(this.__isNative, 'Expected node to be marked as "native"');
  const obj = renderElement;
  const findNodeHandleResult = obj.findNodeHandle(instance.instance);
  if (null == findNodeHandleResult) {
    const _Error = Error;
    const self2 = this;
    const self3 = this;
    const error = new Error("Unable to locate attached view in the native tree");
    throw error;
  } else {
    const API = get_nativeEventEmitterDefault.API;
    const result = API.connectAnimatedNodeToView(self.__getNativeTag(), findNodeHandleResult);
    instance.connectedViewTag = findNodeHandleResult;
  }
}
function _connectShadowNode2(instance) {
  const obj = javaScriptFlagGetterAll;
  if (obj.cxxNativeAnimatedEnabled()) {
    const tmpResult = javaScriptFlagGetterAll;
    if (tmpResult.useSharedAnimatedBackend()) {
      const self = this;
      _modDef38(this.__isNative, 'Expected node to be marked as "native"');
      const obj3 = get_BatchedBridge;
      const nodeFromPublicInstance = obj3.getNodeFromPublicInstance(instance.instance);
      if (null != nodeFromPublicInstance) {
        const API = get_nativeEventEmitterDefault.API;
        const result = API.connectAnimatedNodeToShadowNodeFamily(self.__getNativeTag(), nodeFromPublicInstance);
      }
    }
  }
}
function _disconnectAnimatedView2(connectedViewTag) {
  const self = this;
  _modDef38(this.__isNative, 'Expected node to be marked as "native"');
  connectedViewTag = connectedViewTag.connectedViewTag;
  if (null != connectedViewTag) {
    const API = get_nativeEventEmitterDefault.API;
    const result = API.disconnectAnimatedNodeFromView(self.__getNativeTag(), connectedViewTag);
    connectedViewTag.connectedViewTag = null;
  }
}
let closure_11 = _classPrivateFieldKey("connectAnimatedView");
let closure_12 = _classPrivateFieldKey("connectShadowNode");
let closure_13 = _classPrivateFieldKey("disconnectAnimatedView");
class AnimatedProps {
  constructor(arg0, _callback, style, _rootTag, arg4) {
    let constructResult;
    const self = this;
    _classCallCheck(this, AnimatedProps);
    const items = [arg4];
    const obj = _getPrototypeOf(AnimatedProps);
    if (_isNativeReflectConstruct()) {
      const _Reflect = Reflect;
      constructResult = Reflect.construct(obj, items, _getPrototypeOf(self).constructor);
    } else {
      constructResult = obj.apply(self, items);
    }
    const tmp3Result = metroRequire(self, constructResult);
    const obj2 = { value: _disconnectAnimatedView2 };
    Object.defineProperty(tmp3Result, closure_13, obj2);
    const obj3 = { value: _connectShadowNode2 };
    Object.defineProperty(tmp3Result, closure_12, obj3);
    const obj4 = { value: _connectAnimatedView2 };
    Object.defineProperty(tmp3Result, closure_11, obj4);
    tmp3Result._target = null;
    tmp3Result._rootTag = undefined;
    const items1 = [];
    const items2 = [];
    const obj5 = {};
    const keys = Object.keys(arg0);
    let num = 0;
    if (0 < keys.length) {
      while (true) {
        let tmp17;
        let fromResult;
        let tmp10 = keys[num];
        let tmp11 = arg0[tmp10];
        if (null != style) {
          if (!fn(style, tmp10)) {
            obj5[tmp10] = tmp11;
          }
          num = num + 1;
          if (num >= length) {
            break;
          }
        }
        if ("style" === tmp10) {
          tmp17 = tmp11;
          if (typeof tmp11 === "object") {
            tmp17 = tmp11;
            if (null != tmp11) {
              let tmp20 = flattenStyleDefault(tmp11);
              let tmp21 = _modDef381;
              style = undefined;
              let from = tmp21.from;
              if (style != null) {
                style = style.style;
              }
              fromResult = from(tmp20, style, tmp11);
              tmp17 = tmp20;
            }
          }
        } else {
          fromResult = tmp11;
          if (!(tmp11 instanceof _modDef367)) {
            let tmp14Result = _modDef382;
            fromResult = tmp14Result.from(tmp11);
          }
          tmp17 = tmp11;
        }
        if (null == fromResult) {
          obj5[tmp10] = tmp17;
        } else {
          let arr = items1.push(tmp10);
          let arr2 = items2.push(fromResult);
          obj5[tmp10] = fromResult;
        }
      }
    }
    const items3 = [items1, items2, obj5];
    [tmp6._nodeKeys, tmp6._nodes, tmp6._props] = items3;
    tmp3Result._callback = _callback;
    tmp3Result._rootTag = _rootTag;
    _slicedToArray(items3, 3);
    return tmp3Result;
  }
}
_inherits(AnimatedProps, _modDef367);
const entry = {
  key: "__getValue",
  value: function __getValue() {
    let num;
    const obj = {};
    const keys = Object.keys(this._props);
    const length = keys.length;
    for (let num = 0; num < length; num = num + 1) {
      let tmp = keys[num];
      let obj2 = this._props[tmp];
      if (obj2 instanceof _modDef367) {
        obj[tmp] = obj2.__getValue();
      } else if (obj2 instanceof attachNativeEventImpl.AnimatedEvent) {
        obj[tmp] = obj2.__getHandler();
      } else {
        obj[tmp] = obj2;
      }
    }
    return obj;
  },
};
let items = [
  entry,
  {
    key: "__getValueWithStaticProps",
    value: function __getValueWithStaticProps(style) {
      let num;
      const obj = {};
      const merged = Object.assign(style);
      const keys = Object.keys(style);
      const length = keys.length;
      for (let num = 0; num < length; num = num + 1) {
        let tmp2 = keys[num];
        let obj2 = this._props[tmp2];
        if ("style" === tmp2) {
          style = style.style;
          let tmp9 = flattenStyleDefault(style);
          if (obj2 instanceof _modDef381) {
            let obj3;
            if (null == tmp9) {
              obj3 = {};
            } else {
              obj3 = tmp9;
              if (tmp9 === style) {
                let obj4 = {};
                let merged1 = Object.assign(tmp9);
                obj3 = obj4;
              }
            }
            let result = obj2.__replaceAnimatedNodeWithValues(obj3);
            obj[tmp2] = obj2.__getValueForStyle(obj3);
          } else {
            obj[tmp2] = tmp9;
          }
        } else if (obj2 instanceof _modDef367) {
          obj[tmp2] = obj2.__getValue();
        } else if (obj2 instanceof attachNativeEventImpl.AnimatedEvent) {
          obj[tmp2] = obj2.__getHandler();
        }
      }
      return obj;
    },
  },
  {
    key: "__getNativeAnimatedEventTuples",
    value: function __getNativeAnimatedEventTuples() {
      let num;
      const items = [];
      const keys = Object.keys(this._props);
      const length = keys.length;
      for (let num = 0; num < length; num = num + 1) {
        let tmp = keys[num];
        let tmp2 = this._props[tmp];
        let __isNative = tmp2 instanceof attachNativeEventImpl.AnimatedEvent;
        if (__isNative) {
          __isNative = tmp2.__isNative;
        }
        if (__isNative) {
          let items1 = [tmp, tmp2];
          let arr = items.push(items1);
        }
      }
      return items;
    },
  },
  {
    key: "__getAnimatedValue",
    value: function __getAnimatedValue() {
      let num;
      const obj = {};
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = _nodes[num];
        obj[this._nodeKeys[num]] = obj2.__getAnimatedValue();
      }
      return obj;
    },
  },
  {
    key: "__attach",
    value: function __attach() {
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __addChildResult = obj.__addChild(self);
      }
      fn = _get(_getPrototypeOf(AnimatedProps.prototype), "__attach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "__detach",
    value: function __detach() {
      let num;
      const self = this;
      const __isNative = this.__isNative && null != self._target;
      if (__isNative) {
        const tmp4 = _classPrivateFieldBase(self, closure_13);
        tmp4[closure_13](self._target);
      }
      self._target = null;
      const _nodes = self._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __removeChildResult = obj.__removeChild(self);
      }
      fn = _get(_getPrototypeOf(AnimatedProps.prototype), "__detach", self);
      if (typeof fn === "function") {
        fn = (items) => fn.apply(self, items);
      }
      fn([]);
    },
  },
  {
    key: "update",
    value: function update() {
      this._callback();
    },
  },
  {
    key: "__makeNative",
    value: function __makeNative(arg0) {
      let num;
      const self = this;
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj = _nodes[num];
        let __makeNativeResult = obj.__makeNative(arg0);
      }
      if (!self.__isNative) {
        self.__isNative = true;
        fn = _get(_getPrototypeOf(AnimatedProps.prototype), "__setPlatformConfig", self);
        if (typeof fn === "function") {
          fn = (items) => fn.apply(self, items);
        }
        const items = [arg0];
        fn(items);
        if (null != self._target) {
          const _target = self._target;
          const tmp9 = _classPrivateFieldBase(self, closure_11);
          tmp9[closure_11](_target);
          const tmp12 = _classPrivateFieldBase(self, closure_12);
          tmp12[closure_12](_target);
        }
      }
    },
  },
  {
    key: "setNativeView",
    value: function setNativeView(instance) {
      const self = this;
      const _target = this._target;
      instance = undefined;
      if (_target != null) {
        instance = _target.instance;
      }
      if (instance !== instance) {
        const obj = { instance, connectedViewTag: null };
        self._target = obj;
        if (self.__isNative) {
          const tmp4 = _classPrivateFieldBase(self, closure_11);
          tmp4[closure_11](obj);
          const tmp7 = _classPrivateFieldBase(self, closure_12);
          tmp7[closure_12](obj);
        }
      }
    },
  },
  {
    key: "__restoreDefaultValues",
    value: function __restoreDefaultValues() {
      const self = this;
      if (this.__isNative) {
        const API = get_nativeEventEmitterDefault.API;
        API.restoreDefaultValues(self.__getNativeTag());
      }
    },
  },
  {
    key: "__getNativeConfig",
    value: function __getNativeConfig() {
      let _rootTag;
      let num;
      const self = this;
      const obj = {};
      const _nodes = this._nodes;
      const length = _nodes.length;
      for (let num = 0; num < length; num = num + 1) {
        let obj2 = _nodes[num];
        let tmp2 = this._nodeKeys[num];
        let __makeNativeResult = obj2.__makeNative(tmp);
        obj[tmp2] = obj2.__getNativeTag();
      }
      const element = { type: "props", props: obj, rootTag: _rootTag, debugID: self.__getDebugID() };
      _rootTag = self._rootTag;
      return element;
    },
  },
];
let fn = Object.hasOwn;
const importDefaultResultResult = _createClass(AnimatedProps, items);
if (fn == null) {
  fn = (arg0, arg1) => hasOwnProperty.call(arg0, arg1);
}

export default importDefaultResultResult;
