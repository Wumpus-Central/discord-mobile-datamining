// === Module 1739: ? ===

// Module 1739
import _mod1691 from "module_1691" /* 1691 */;
import _mod1692 from "module_1692" /* 1692 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function isInlineStyleTransform(arr) {
  const f84843 = (item) => {
    let someResult = item;
    if (someResult) {
      let tmp2 = globalThis;
      let _Object = Object;
      let keys = Object.keys(item);
      someResult = keys.some(f84844);
    }
    return someResult;
  };
  const tmp = Array.isArray(arr) && arr.some(f84843);
  return tmp;
}
function getInlinePropsUpdate(iter) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(iter);
  const tmp2 = entries[Symbol.iterator]();
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = _mod1692;
    if (obj2.isSharedValue(tmp7)) {
      obj[tmp6] = tmp7.value;
    } else {
      let _Array = Array;
      if (Array.isArray(tmp7)) {
        obj[tmp6] = tmp7.map((item) => getInlinePropsUpdate(item));
      } else {
        let tmp15;
        if (typeof tmp7 === "object") {
          tmp15 = getInlinePropsUpdate(tmp7);
        } else {
          tmp15 = tmp7;
        }
        obj[tmp6] = tmp15;
      }
    }
    continue;
  }
  return obj;
}
let obj = { isSharedValue: _mod1692.isSharedValue };
getInlinePropsUpdate.__closure = obj;
getInlinePropsUpdate.__workletHash = 14886679339062;
getInlinePropsUpdate.__initData = { code: "function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(inlineProps){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;const{isSharedValue}=this.__closure;const update={};for(const[key,styleValue]of Object.entries(inlineProps)){if(isSharedValue(styleValue)){update[key]=styleValue.value;}else if(Array.isArray(styleValue)){update[key]=styleValue.map(function(item){return getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(item);});}else if(typeof styleValue==='object'){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue);}else{update[key]=styleValue;}}return update;}" };
const __initData = { code: "function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}" };
class InlinePropManager {
  constructor() {
    _classCallCheck(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineProps = {};
  }
}
const entry = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    let shadowNodeWrapper;
    let viewName;
    let viewTag;
    function inlinePropsHasChanged(_inlineProps, _inlineProps2) {
      if (Object.keys(_inlineProps).length !== Object.keys(_inlineProps).length) {
        return true;
      } else {
        const _Object = Object;
        const keys = Object.keys(_inlineProps);
        for (const item10018 of keys) {
          if (_inlineProps[item10018] !== _inlineProps[item10018]) {
            obj.return();
            let flag = true;
            return true;
          }
        }
        return false;
      }
    }
    const props = self.props;
    const _inlineProps = {};
    for (const key10008 in props) {
      let tmp21 = props[key10008];
      if ("style" === key10008) {
        let tmp5 = _inlineProps(1740);
        let style = props.style;
        let flattenArray = tmp5.flattenArray;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = flattenArray(style);
        let item = flattenArrayResult.forEach((item) => {
          let tmp10;
          let tmp11;
          if (item) {
            const _Object = Object;
            const entries = Object.entries(item);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp9 = _slicedToArray(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              obj = _mod1692;
              let isSharedValueResult = obj.isSharedValue(tmp11);
              if (!isSharedValueResult) {
                let tmp17 = "transform" === tmp10 && isInlineStyleTransform(tmp11);
                isSharedValueResult = tmp17;
              }
              if (isSharedValueResult) {
                obj[tmp10] = tmp11;
              }
              continue;
            }
          }
        });
        continue;
      } else {
        let tmp = _inlineProps;
        let obj2 = _inlineProps(1692);
        if (!obj2.isSharedValue(tmp21)) {
          continue;
        } else {
          _inlineProps[key10008] = tmp21;
          continue;
        }
        continue;
      }
      continue;
    }
    self = this;
    if (inlinePropsHasChanged(_inlineProps, this._inlineProps)) {
      if (!self._inlinePropsViewDescriptors) {
        const obj3 = _inlineProps(1741);
        self._inlinePropsViewDescriptors = obj3.makeViewDescriptorsSet();
        const viewConfig = self2.viewConfig;
        const tmp10 = globalThis;
        let _Object = Object;
        ({ viewTag, viewName, shadowNodeWrapper } = self2);
        const tmp11 = Object.keys(_inlineProps).length && viewConfig;
        const tmp8 = _inlineProps;
        if (tmp11) {
          const tmp8Result = tmp8(1742);
          tmp8Result.adaptViewConfig(viewConfig);
        }
        const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
        const obj4 = { tag: viewTag, name: viewName, shadowNodeWrapper };
        _inlinePropsViewDescriptors.add(obj4);
      }
      const shareableViewDescriptors = self._inlinePropsViewDescriptors.shareableViewDescriptors;
      const fn = function o() {
        const tmp = getInlinePropsUpdate(obj);
        obj = obj(dependencyMap[7]);
        obj.updateProps(shareableViewDescriptors, tmp);
      };
      fn.__closure = { getInlinePropsUpdate, newInlineProps: _inlineProps, updateProps: _inlineProps(1743).updateProps, shareableViewDescriptors };
      fn.__workletHash = 4459550727912;
      fn.__initData = __initData;
      self._inlineProps = _inlineProps;
      const obj5 = { getInlinePropsUpdate, newInlineProps: _inlineProps, updateProps: _inlineProps(1743).updateProps, shareableViewDescriptors };
      if (self._inlinePropsMapperId) {
        const tmp15Result = _inlineProps(1691);
        tmp15Result.stopMapper(self._inlinePropsMapperId);
      }
      self._inlinePropsMapperId = null;
      const _Object2 = Object;
      if (Object.keys(_inlineProps).length) {
        const _Object3 = Object;
        const tmp15Result2 = _inlineProps(1691);
        self._inlinePropsMapperId = tmp15Result2.startMapper(fn, Object.values(_inlineProps));
      }
    }
  }
};
const items = [
  entry,
  {
    key: "detachInlineProps",
    value: function detachInlineProps() {
      if (this._inlinePropsMapperId) {
        const obj = _mod1691;
        obj.stopMapper(tmp._inlinePropsMapperId);
      }
    }
  }
];
const InlinePropManager_export = _createClass(InlinePropManager, items);

export const hasInlineStyles = function hasInlineStyles(viewDescriptors) {
  const f84844 = (item) => {
    let obj = item[item];
    let obj2 = closure_2_0(closure_2_1[3]);
    let isSharedValueResult = obj2.isSharedValue(obj);
    if (!isSharedValueResult) {
      let str = "transform";
      let tmp2 = "transform" === item;
      if (tmp2) {
        let tmp3 = globalThis;
        let _Array = Array;
        let tmp4 = Array.isArray(obj) && obj.some(f84843);
        tmp2 = tmp4;
      }
      isSharedValueResult = tmp2;
    }
    return isSharedValueResult;
  };
  let closure_0 = viewDescriptors;
  let someResult = viewDescriptors;
  if (someResult) {
    const _Object = Object;
    const keys = Object.keys(viewDescriptors);
    someResult = keys.some(f84844);
  }
  return someResult;
};
export const getInlineStyle = function getInlineStyle(viewDescriptors, _isFirstRender) {
  let tmp11;
  let tmp12;
  const tmp = _isFirstRender;
  if (tmp) {
    return getInlinePropsUpdate(viewDescriptors);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(viewDescriptors);
    const tmp5 = entries[Symbol.iterator]();
    while (tmp5 !== undefined) {
      let tmp10 = _slicedToArray(tmp7, 2);
      [tmp11, tmp12] = tmp10;
      let obj2 = _mod1692;
      let isSharedValueResult = obj2.isSharedValue(tmp12);
      if (!isSharedValueResult) {
        let tmp18 = "transform" === tmp11 && isInlineStyleTransform(tmp12);
        isSharedValueResult = tmp18;
      }
      if (!isSharedValueResult) {
        obj[tmp11] = tmp12;
      }
      continue;
    }
    return obj;
  }
};
export { InlinePropManager_export as InlinePropManager };