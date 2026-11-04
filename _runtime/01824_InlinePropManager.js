// === Module 1824: InlinePropManager ===

// Module 1824 (InlinePropManager)
import _classCallCheck from "_classCallCheck" /* 41 */;
import _createClass from "_createClass" /* 42 */;
import _slicedToArray from "module_32" /* 32 */;

function isInlineStyleTransform(arr) {
  return Array.isArray(arr) && arr.some((item) => {
    let someResult = item;
    if (someResult) {
      let _Object = Object;
      let keys = Object.keys(item);
      someResult = keys.some((item) => {
        let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
        if (!isSharedValueResult) {
          let tmp2 = "transform" === item;
          if (tmp2) {
            let _Array = Array;
            tmp2 = Array.isArray(obj) && obj.some((item) => {
              let someResult = item;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(item);
                someResult = keys.some((item) => {
                  let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === item;
                    if (tmp2) {
                      let _Array = Array;
                      tmp2 = Array.isArray(obj) && obj.some(/* F82936 */ function() { ... });
                      let tmp4 = Array.isArray(obj) && obj.some(/* F82936 */ function() { ... });
                    }
                    isSharedValueResult = tmp2;
                  }
                  return isSharedValueResult;
                });
              }
              return someResult;
            });
            let tmp4 = Array.isArray(obj) && obj.some((item) => {
              let someResult = item;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(item);
                someResult = keys.some((item) => {
                  let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === item;
                    if (tmp2) {
                      let _Array = Array;
                      tmp2 = Array.isArray(obj) && obj.some(/* F82936 */ function() { ... });
                      let tmp4 = Array.isArray(obj) && obj.some(/* F82936 */ function() { ... });
                    }
                    isSharedValueResult = tmp2;
                  }
                  return isSharedValueResult;
                });
              }
              return someResult;
            });
          }
          isSharedValueResult = tmp2;
        }
        return isSharedValueResult;
      });
    }
    return someResult;
  });
}
function inlinePropsHasChanged(arg0, _inlineStyleProps) {
  if (Object.keys(arg0).length !== Object.keys(_inlineStyleProps).length) {
    return true;
  } else {
    const _Object = Object;
    const keys = Object.keys(arg0);
    for (const item10018 of keys) {
      if (arg0[item10018] !== arg1[item10018]) {
        obj.return();
        let flag = true;
        return true;
      }
    }
    return false;
  }
}
let items = [{ code: "(function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;let[isSharedValue]=this.__closure;if(isSharedValue(styleValue)){return styleValue.value;}if(Array.isArray(styleValue)){return styleValue.map(getInlinePropsUpdate_Pnpm_InlinePropManagerTs1);}if(styleValue&&typeof styleValue==='object'){const update={};for(const[key,value]of Object.entries(styleValue)){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(value);}return update;}return styleValue;})" }, fn(1769).isSharedValue];
let InlinePropManager;
[tmp3, tmp4] = items;
function getInlinePropsUpdate(value) {
  if (InlinePropManager(value)) {
    return value.value;
  } else {
    const _Array = Array;
    if (Array.isArray(value)) {
      return value.map(getInlinePropsUpdate);
    } else {
      if (value) {
        if (typeof value === "object") {
          const obj = {};
          const _Object = Object;
          const entries = Object.entries(value);
          const tmp4 = entries[Symbol.iterator]();
          while (tmp4 !== undefined) {
            let tmp9 = _slicedToArray(tmp6, 2);
            obj[tmp9[0]] = getInlinePropsUpdate(tmp9[1]);
            continue;
          }
          return obj;
        }
      }
      return value;
    }
  }
}
let items1 = [tmp4];
getInlinePropsUpdate.__closure = items1;
getInlinePropsUpdate.__workletHash = 10013339811272;
getInlinePropsUpdate.__initData = tmp3;
let closure_7 = { code: "(function pnpm_InlinePropManagerTs2(){let[hasInlineStyleProps,updateProps,shareableViewDescriptors,getInlinePropsUpdate,inlineStyleProps,hasInlineTopLevelProps,inlineTopLevelProps]=this.__closure;if(hasInlineStyleProps){updateProps(shareableViewDescriptors,getInlinePropsUpdate(inlineStyleProps));}if(hasInlineTopLevelProps){updateProps(shareableViewDescriptors,getInlinePropsUpdate(inlineTopLevelProps),true);}})" };
class InlinePropManager {
  constructor() {
    tmp = c2(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineStyleProps = {};
    this._inlineTopLevelProps = {};
    return;
  }
}
const entry = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    const props = self.props;
    let obj = {};
    InlinePropManager = obj;
    const obj2 = {};
    for (const key10009 in props) {
      let tmp30 = props[key10009];
      if ("style" === key10009) {
        let obj4 = InlinePropManager(getInlinePropsUpdate[4]);
        let style = props.style;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj4.flattenArray(style);
        let item = flattenArrayResult.forEach((item) => {
          if (item) {
            const _Object = Object;
            const entries = Object.entries(item);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp9 = _slicedToArray(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              let obj = InlinePropManager(getInlinePropsUpdate[3]);
              let isSharedValueResult = obj.isSharedValue(tmp11);
              if (!isSharedValueResult) {
                let tmp17 = "transform" === tmp10;
                if (tmp17) {
                  tmp17 = isInlineStyleTransform(tmp11);
                }
                isSharedValueResult = tmp17;
              }
              if (isSharedValueResult) {
                c0[tmp10] = tmp11;
              }
              continue;
            }
          }
        });
        continue;
      } else {
        let obj3 = InlinePropManager(getInlinePropsUpdate[3]);
        if (!obj3.isSharedValue(tmp30)) {
          continue;
        } else {
          obj2[key10009] = tmp30;
          continue;
        }
        continue;
      }
      continue;
    }
    self = this;
    if (inlinePropsHasChanged(obj, this._inlineStyleProps)) {
      if (!self._inlinePropsViewDescriptors) {
        self._inlinePropsViewDescriptors = InlinePropManager(getInlinePropsUpdate[5]).makeViewDescriptorsSet();
        const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
        ({ viewTag: obj6.tag, shadowNodeWrapper: obj6.shadowNodeWrapper } = self2);
        _inlinePropsViewDescriptors.add({ tag: null, shadowNodeWrapper: null });
        const obj5 = InlinePropManager(getInlinePropsUpdate[5]);
        const obj7 = { tag: null, shadowNodeWrapper: null };
      }
      let _Object = Object;
      const tmp12 = Object.keys(obj).length > 0;
      const _Object2 = Object;
      const tmp13 = Object.keys(obj2).length > 0;
      let tmp14 = tmp12;
      if (!tmp12) {
        tmp14 = tmp13;
      }
      items = [closure_7, tmp12, InlinePropManager(getInlinePropsUpdate[6]).updateProps, self._inlinePropsViewDescriptors.shareableViewDescriptors, c6, obj, tmp13, obj2];
      InlinePropManager = undefined;
      getInlinePropsUpdate = undefined;
      c2 = undefined;
      c3 = undefined;
      c4 = undefined;
      inlinePropsHasChanged = undefined;
      c6 = undefined;
      [tmp20, tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27] = items;
      function pnpm_InlinePropManagerTs2() {
        if (c0) {
          _undefined(c2, _undefined2(c4));
        }
        if (c5) {
          _undefined(c2, _undefined2(c6), true);
        }
      }
      const items1 = [tmp21, tmp22, tmp23, tmp24, tmp25, tmp26, tmp27];
      pnpm_InlinePropManagerTs2.__closure = items1;
      pnpm_InlinePropManagerTs2.__workletHash = 16733823581382;
      pnpm_InlinePropManagerTs2.__initData = tmp20;
      self._inlineStyleProps = obj;
      self._inlineTopLevelProps = obj2;
      if (self._inlinePropsMapperId) {
        tmp16(tmp17[7]).stopMapper(self._inlinePropsMapperId);
        const tmp16Result = tmp16(tmp17[7]);
      }
      self._inlinePropsMapperId = null;
      if (tmp14) {
        const items2 = [obj, obj2];
        self._inlinePropsMapperId = tmp16(tmp17[7]).startMapper(pnpm_InlinePropManagerTs2, items2);
        const tmp16Result2 = tmp16(tmp17[7]);
      }
    }
  }
};
let items2 = [
  entry,
  {
    key: "detachInlineProps",
    value: function detachInlineProps() {
      const self = this;
      if (this._inlinePropsMapperId) {
        InlinePropManager(getInlinePropsUpdate[7]).stopMapper(self._inlinePropsMapperId);
        self._inlinePropsMapperId = null;
        const obj = InlinePropManager(getInlinePropsUpdate[7]);
      }
      self._inlinePropsViewDescriptors = null;
      self._inlineStyleProps = {};
      self._inlineTopLevelProps = {};
    }
  }
];

export function hasInlineStyles(viewDescriptors) {
  closure_0 = viewDescriptors;
  let someResult = viewDescriptors;
  if (someResult) {
    const _Object = Object;
    const keys = Object.keys(viewDescriptors);
    someResult = keys.some((item) => {
      let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
      if (!isSharedValueResult) {
        let tmp2 = "transform" === item;
        if (tmp2) {
          let _Array = Array;
          tmp2 = Array.isArray(obj) && obj.some((item) => {
            let someResult = item;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(item);
              someResult = keys.some((item) => {
                let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === item;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((item) => {
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(/* F82937 */ function() { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item) => {
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(/* F82937 */ function() { ... });
                      }
                      return someResult;
                    });
                  }
                  isSharedValueResult = tmp2;
                }
                return isSharedValueResult;
              });
            }
            return someResult;
          });
          let tmp4 = Array.isArray(obj) && obj.some((item) => {
            let someResult = item;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(item);
              someResult = keys.some((item) => {
                let isSharedValueResult = closure_2_0(closure_2_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === item;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((item) => {
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(/* F82937 */ function() { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item) => {
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(/* F82937 */ function() { ... });
                      }
                      return someResult;
                    });
                  }
                  isSharedValueResult = tmp2;
                }
                return isSharedValueResult;
              });
            }
            return someResult;
          });
        }
        isSharedValueResult = tmp2;
      }
      return isSharedValueResult;
    });
  }
  return someResult;
}
export function getInlineStyle(viewDescriptors, _isFirstRender) {
  if (_isFirstRender) {
    return getInlinePropsUpdate(viewDescriptors);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(viewDescriptors);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = _slicedToArray(tmp6, 2);
      [tmp10, tmp11] = tmp9;
      let obj2 = InlinePropManager(getInlinePropsUpdate[3]);
      let isSharedValueResult = obj2.isSharedValue(tmp11);
      if (!isSharedValueResult) {
        let tmp17 = "transform" === tmp10;
        if (tmp17) {
          tmp17 = isInlineStyleTransform(tmp11);
        }
        isSharedValueResult = tmp17;
      }
      if (!isSharedValueResult) {
        obj[tmp10] = tmp11;
      }
      continue;
    }
    return obj;
  }
}
export const InlinePropManager = _createClass(InlinePropManager, items2);