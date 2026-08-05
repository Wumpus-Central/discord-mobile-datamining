// _runtime/01702_isInlineStyleTransform.js
import _classCallCheck from "_classCallCheck";
import _slicedToArray from "_slicedToArray";

let InlinePropManager = arg1;
function isInlineStyleTransform(arr) {
  return Array.isArray(arr) && arr.some((arg0) => {
    let closure_0 = arg0;
    let someResult = arg0;
    if (someResult) {
      let _Object = Object;
      let keys = Object.keys(arg0);
      someResult = keys.some((arg0) => {
        let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
        if (!isSharedValueResult) {
          let tmp2 = "transform" === arg0;
          if (tmp2) {
            let _Array = Array;
            tmp2 = Array.isArray(obj) && obj.some((arg0) => {
              let closure_0 = arg0;
              let someResult = arg0;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(arg0);
                someResult = keys.some((arg0) => {
                  let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === arg0;
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
            let tmp4 = Array.isArray(obj) && obj.some((arg0) => {
              let closure_0 = arg0;
              let someResult = arg0;
              if (someResult) {
                let _Object = Object;
                let keys = Object.keys(arg0);
                someResult = keys.some((arg0) => {
                  let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
                  if (!isSharedValueResult) {
                    let tmp2 = "transform" === arg0;
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
function getInlinePropsUpdate(viewDescriptors) {
  let tmp6;
  let tmp7;
  const obj = {};
  const entries = Object.entries(viewDescriptors);
  while (tmp2 !== undefined) {
    let tmp4 = callback2;
    let tmp5 = callback2(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let iter = tmp7;
    let tmp8 = InlinePropManager;
    let tmp9 = dependencyMap;
    let obj2 = InlinePropManager(1655);
    if (obj2.isSharedValue(tmp7)) {
      let tmp16 = tmp6;
      let tmp17 = tmp7;
      obj[tmp6] = iter.value;
    } else {
      let _Array = Array;
      let tmp10 = tmp7;
      let tmp11 = tmp6;
      let tmp12 = tmp7;
      if (Array.isArray(iter)) {
        obj[tmp6] = iter.map((arg0) => callback(arg0));
      } else {
        if (typeof iter === "object") {
          let tmp13 = InlinePropManager;
          let tmp14 = tmp7;
          let tmp15 = InlinePropManager(iter);
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
InlinePropManager = getInlinePropsUpdate;
let obj = { isSharedValue: require("isSharedValue").isSharedValue };
getInlinePropsUpdate.__closure = obj;
getInlinePropsUpdate.__workletHash = 14886679339062;
getInlinePropsUpdate.__initData = { code: "function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(inlineProps){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;const{isSharedValue}=this.__closure;const update={};for(const[key,styleValue]of Object.entries(inlineProps)){if(isSharedValue(styleValue)){update[key]=styleValue.value;}else if(Array.isArray(styleValue)){update[key]=styleValue.map(function(item){return getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(item);});}else if(typeof styleValue==='object'){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue);}else{update[key]=styleValue;}}return update;}" };
let closure_6 = { code: "function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}" };
class InlinePropManager {
  constructor() {
    tmp = isInlineStyleTransform(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineProps = {};
    return;
  }
}
obj = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    let shadowNodeWrapper;
    let viewName;
    let viewTag;
    const props = self.props;
    let obj = {};
    for (const key10008 in props) {
      let tmp19 = key10008;
      let tmp20 = props[key10008];
      if ("style" === key10008) {
        let tmp3 = obj;
        let tmp4 = shareableViewDescriptors;
        let obj3 = obj(shareableViewDescriptors[4]);
        let style = props.style;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj3.flattenArray(style);
        let item = flattenArrayResult.forEach((arg0) => {
          let tmp10;
          let tmp11;
          if (arg0) {
            const _Object = Object;
            const entries = Object.entries(arg0);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp8 = outer1_3;
              let tmp9 = outer1_3(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              let tmp12 = tmp11;
              let tmp13 = obj;
              let tmp14 = shareableViewDescriptors;
              obj = obj(shareableViewDescriptors[3]);
              let isSharedValueResult = obj.isSharedValue(tmp11);
              if (!isSharedValueResult) {
                let tmp16 = tmp10;
                let tmp17 = "transform" === tmp10;
                if (tmp17) {
                  let tmp18 = outer1_4;
                  let tmp19 = tmp11;
                  tmp17 = outer1_4(tmp12);
                }
                isSharedValueResult = tmp17;
              }
              if (isSharedValueResult) {
                let tmp20 = obj;
                let tmp21 = tmp10;
                let tmp22 = tmp11;
                obj[tmp10] = tmp12;
              }
              continue;
            }
          }
        });
        continue;
      } else {
        let tmp = obj;
        let tmp2 = shareableViewDescriptors;
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
            let tmp4 = obj;
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
        let tmp8 = shareableViewDescriptors;
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
        obj.updateProps(shareableViewDescriptors, outer1_5(obj));
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
        InlinePropManager(1654).stopMapper(tmp._inlinePropsMapperId);
        const obj = InlinePropManager(1654);
      }
    }
  }
];

export const hasInlineStyles = function hasInlineStyles(viewDescriptors) {
  let closure_0 = viewDescriptors;
  let someResult = viewDescriptors;
  if (someResult) {
    const _Object = Object;
    const keys = Object.keys(viewDescriptors);
    someResult = keys.some((arg0) => {
      let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
      if (!isSharedValueResult) {
        let tmp2 = "transform" === arg0;
        if (tmp2) {
          let _Array = Array;
          tmp2 = Array.isArray(obj) && obj.some((arg0) => {
            let closure_0 = arg0;
            let someResult = arg0;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(arg0);
              someResult = keys.some((arg0) => {
                let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === arg0;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((arg0) => {
                      let closure_0 = arg0;
                      let someResult = arg0;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(arg0);
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((arg0) => {
                      let closure_0 = arg0;
                      let someResult = arg0;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(arg0);
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
          let tmp4 = Array.isArray(obj) && obj.some((arg0) => {
            let closure_0 = arg0;
            let someResult = arg0;
            if (someResult) {
              let _Object = Object;
              let keys = Object.keys(arg0);
              someResult = keys.some((arg0) => {
                let isSharedValueResult = dependencyMap(outer1_1[3]).isSharedValue(obj);
                if (!isSharedValueResult) {
                  let tmp2 = "transform" === arg0;
                  if (tmp2) {
                    let _Array = Array;
                    tmp2 = Array.isArray(obj) && obj.some((arg0) => {
                      let closure_0 = arg0;
                      let someResult = arg0;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(arg0);
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((arg0) => {
                      let closure_0 = arg0;
                      let someResult = arg0;
                      if (someResult) {
                        let _Object = Object;
                        let keys = Object.keys(arg0);
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
export const getInlineStyle = function getInlineStyle(viewDescriptors, _isFirstRender) {
  let tmp10;
  let tmp11;
  if (_isFirstRender) {
    return getInlinePropsUpdate(viewDescriptors);
  } else {
    const obj = {};
    const _Object = Object;
    const entries = Object.entries(viewDescriptors);
    const tmp4 = entries[Symbol.iterator]();
    while (tmp4 !== undefined) {
      let tmp8 = callback2;
      let tmp9 = callback2(tmp6, 2);
      [tmp10, tmp11] = tmp9;
      let tmp12 = tmp11;
      let tmp13 = InlinePropManager;
      let tmp14 = dependencyMap;
      let obj2 = InlinePropManager(1655);
      let isSharedValueResult = obj2.isSharedValue(tmp11);
      if (!isSharedValueResult) {
        let tmp16 = tmp10;
        let tmp17 = "transform" === tmp10;
        if (tmp17) {
          let tmp18 = isInlineStyleTransform;
          let tmp19 = tmp11;
          tmp17 = isInlineStyleTransform(tmp12);
        }
        isSharedValueResult = tmp17;
      }
      if (!isSharedValueResult) {
        let tmp20 = tmp10;
        let tmp21 = tmp11;
        obj[tmp10] = tmp12;
      }
      continue;
    }
    return obj;
  }
};
export const InlinePropManager = require("_createClass")(InlinePropManager, items);