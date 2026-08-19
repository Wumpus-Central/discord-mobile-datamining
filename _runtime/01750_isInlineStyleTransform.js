// === Module 1750: isInlineStyleTransform ===

// Module 1750 (isInlineStyleTransform)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;
import _slicedToArray from "_slicedToArray" /* 32 */;

function isInlineStyleTransform(arr) {
  return Array.isArray(arr) && arr.some((item, index) => {
    closure_0 = item;
    let someResult = item;
    if (someResult) {
      let _Object = Object;
      let keys = Object.keys(item);
      someResult = keys.some((item, index) => {
        let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
        if (!isSharedValueResult) {
          let tmp2 = "transform" === item;
          if (tmp2) {
            let _Array = Array;
            tmp2 = Array.isArray(obj) && obj.some((item, index) => {
              closure_0 = item;
              let someResult = item;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(item);
                someResult = keys.some((item, index) => {
                  let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === item;
                    if (tmp2) {
                      let _Array = Array;
                      tmp2 = Array.isArray(obj) && obj.some(() => { ... });
                      let tmp4 = Array.isArray(obj) && obj.some(() => { ... });
                    }
                    isSharedValueResult = tmp2;
                  }
                  return isSharedValueResult;
                });
              }
              return someResult;
            });
            let tmp4 = Array.isArray(obj) && obj.some((item, index) => {
              closure_0 = item;
              let someResult = item;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(item);
                someResult = keys.some((item, index) => {
                  let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === item;
                    if (tmp2) {
                      let _Array = Array;
                      tmp2 = Array.isArray(obj) && obj.some(() => { ... });
                      let tmp4 = Array.isArray(obj) && obj.some(() => { ... });
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
function getInlinePropsUpdate(item) {
  const obj = {};
  const entries = Object.entries(item);
  while (tmp2 !== undefined) {
    let tmp5 = callback2(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = InlinePropManager(1703);
    if (obj2.isSharedValue(tmp7)) {
      obj[tmp6] = tmp7.value;
    } else {
      let _Array = Array;
      if (Array.isArray(tmp7)) {
        obj[tmp6] = tmp7.map((item, index) => callback(item));
      } else {
        if (typeof tmp7 === "object") {
          let tmp15 = InlinePropManager(tmp7);
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
const InlinePropManager = getInlinePropsUpdate;
let obj = { isSharedValue: require("isSharedValue").isSharedValue };
getInlinePropsUpdate.__closure = obj;
getInlinePropsUpdate.__workletHash = 14886679339062;
getInlinePropsUpdate.__initData = { code: "function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(inlineProps){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;const{isSharedValue}=this.__closure;const update={};for(const[key,styleValue]of Object.entries(inlineProps)){if(isSharedValue(styleValue)){update[key]=styleValue.value;}else if(Array.isArray(styleValue)){update[key]=styleValue.map(function(item){return getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(item);});}else if(typeof styleValue==='object'){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue);}else{update[key]=styleValue;}}return update;}" };
let closure_6 = { code: "function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}" };
class InlinePropManager {
  constructor() {
    tmp = closure_2(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineProps = {};
    return;
  }
}
obj = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    const props = self.props;
    let obj = {};
    for (const key10008 in props) {
      let tmp20 = props[key10008];
      if ("style" === key10008) {
        let obj3 = obj(shareableViewDescriptors[4]);
        let style = props.style;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj3.flattenArray(style);
        let item = flattenArrayResult.forEach((item, index) => {
          if (item) {
            const _Object = Object;
            const entries = Object.entries(item);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp9 = closure_1_3(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              obj = obj(shareableViewDescriptors[3]);
              let isSharedValueResult = obj.isSharedValue(tmp11);
              if (!isSharedValueResult) {
                let tmp17 = "transform" === tmp10;
                if (tmp17) {
                  tmp17 = isInlineStyleTransform(tmp11);
                }
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
        let obj2 = obj(shareableViewDescriptors[3]);
        if (!obj2.isSharedValue(tmp20)) {
          continue;
        } else {
          obj[key10008] = tmp20;
          continue;
        }
        continue;
      }
      continue;
    }
    self = this;
    if ((function inlinePropsHasChanged(arg0, _inlineProps) {
      if (Object.keys(arg0).length !== Object.keys(_inlineProps).length) {
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
    })(obj, this._inlineProps)) {
      if (!self._inlinePropsViewDescriptors) {
        self._inlinePropsViewDescriptors = obj(shareableViewDescriptors[5]).makeViewDescriptorsSet();
        const viewConfig = self2.viewConfig;
        let _Object = Object;
        ({ viewTag, viewName, shadowNodeWrapper } = self2);
        const obj4 = obj(shareableViewDescriptors[5]);
        const tmp7 = obj;
        const tmp8 = shareableViewDescriptors;
        if (tmp10) {
          tmp7(tmp8[6]).adaptViewConfig(viewConfig);
          const tmp7Result = tmp7(tmp8[6]);
        }
        const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
        obj = { tag: null, name: null, shadowNodeWrapper: null };
        obj[0] = viewTag;
        obj[1] = viewName;
        obj[2] = shadowNodeWrapper;
        _inlinePropsViewDescriptors.add(obj);
        tmp10 = Object.keys(obj).length && viewConfig;
      }
      shareableViewDescriptors = self._inlinePropsViewDescriptors.shareableViewDescriptors;
      const fn = function o() {
        obj = obj(shareableViewDescriptors[7]);
        obj.updateProps(shareableViewDescriptors, getInlinePropsUpdate(obj));
      };
      obj = { getInlinePropsUpdate: null, newInlineProps: null, updateProps: null, shareableViewDescriptors: null };
      obj[0] = getInlinePropsUpdate;
      obj[1] = obj;
      obj[2] = obj(shareableViewDescriptors[7]).updateProps;
      obj[3] = shareableViewDescriptors;
      fn.__closure = obj;
      fn.__workletHash = 4459550727912;
      fn.__initData = closure_6;
      self._inlineProps = obj;
      if (self._inlinePropsMapperId) {
        let tmp14Result = tmp14(tmp15[8]);
        tmp14Result.stopMapper(self._inlinePropsMapperId);
      }
      self._inlinePropsMapperId = null;
      const _Object2 = Object;
      if (Object.keys(obj).length) {
        tmp14Result = tmp14(tmp15[8]);
        const _Object3 = Object;
        self._inlinePropsMapperId = tmp14Result.startMapper(fn, Object.values(obj));
      }
    }
  }
};
const items = [
  obj,
  {
    key: "detachInlineProps",
    value: function detachInlineProps() {
      if (this._inlinePropsMapperId) {
        InlinePropManager(1702).stopMapper(tmp._inlinePropsMapperId);
        const obj = InlinePropManager(1702);
      }
    }
  }
];

export const hasInlineStyles = function hasInlineStyles(item) {
  closure_0 = item;
  let someResult = item;
  if (someResult) {
    const _Object = Object;
    const keys = Object.keys(item);
    someResult = keys.some((item, index) => {
      let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
      if (!isSharedValueResult) {
        let tmp2 = "transform" === item;
        if (tmp2) {
          let _Array = Array;
          tmp2 = Array.isArray(obj) && obj.some((item, index) => {
            closure_0 = item;
            let someResult = item;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(item);
              someResult = keys.some((item, index) => {
                let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === item;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((item, index) => {
                      closure_0 = item;
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item, index) => {
                      closure_0 = item;
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(() => { ... });
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
          let tmp4 = Array.isArray(obj) && obj.some((item, index) => {
            closure_0 = item;
            let someResult = item;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(item);
              someResult = keys.some((item, index) => {
                let isSharedValueResult = item(closure_1_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === item;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((item, index) => {
                      closure_0 = item;
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item, index) => {
                      closure_0 = item;
                      let someResult = item;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(item);
                        someResult = keys.some(() => { ... });
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
};
export const getInlineStyle = function getInlineStyle(item, _isFirstRender) {
  if (_isFirstRender) {
    return getInlinePropsUpdate(item);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(item);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp9 = callback2(tmp6, 2);
      [tmp10, tmp11] = tmp9;
      let obj2 = InlinePropManager(1703);
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
};
export const InlinePropManager = _createClassDefault(InlinePropManager, items);