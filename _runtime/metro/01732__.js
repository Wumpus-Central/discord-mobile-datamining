// === Module 1732: ? ===

// Module 1732
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
  const obj = {};
  const entries = Object.entries(viewDescriptors);
  while (tmp2 !== undefined) {
    let tmp5 = _slicedToArray(tmp3, 2);
    [tmp6, tmp7] = tmp5;
    let obj2 = InlinePropManager(1685);
    if (obj2.isSharedValue(tmp7)) {
      obj[tmp6] = tmp7.value;
    } else {
      let _Array = Array;
      if (Array.isArray(tmp7)) {
        obj[tmp6] = tmp7.map((item) => InlinePropManager(item));
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
getInlinePropsUpdate.__closure = { isSharedValue: fn(1685).isSharedValue };
getInlinePropsUpdate.__workletHash = 14886679339062;
getInlinePropsUpdate.__initData = { code: "function getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(inlineProps){const getInlinePropsUpdate_Pnpm_InlinePropManagerTs1=this._recur;const{isSharedValue}=this.__closure;const update={};for(const[key,styleValue]of Object.entries(inlineProps)){if(isSharedValue(styleValue)){update[key]=styleValue.value;}else if(Array.isArray(styleValue)){update[key]=styleValue.map(function(item){return getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(item);});}else if(typeof styleValue==='object'){update[key]=getInlinePropsUpdate_Pnpm_InlinePropManagerTs1(styleValue);}else{update[key]=styleValue;}}return update;}" };
const __initData = { code: "function pnpm_InlinePropManagerTs2(){const{getInlinePropsUpdate,newInlineProps,updateProps,shareableViewDescriptors}=this.__closure;const update=getInlinePropsUpdate(newInlineProps);updateProps(shareableViewDescriptors,update);}" };
class InlinePropManager {
  constructor() {
    tmp = c2(this, InlinePropManager);
    this._inlinePropsViewDescriptors = null;
    this._inlinePropsMapperId = null;
    this._inlineProps = {};
    return;
  }
}
const entry = {
  key: "attachInlineProps",
  value: function attachInlineProps(self, self2) {
    const props = self.props;
    let _inlineProps = {};
    for (const key10008 in props) {
      let tmp20 = props[key10008];
      if ("style" === key10008) {
        let obj3 = _inlineProps(1733);
        let style = props.style;
        if (style == null) {
          style = [];
        }
        let flattenArrayResult = obj3.flattenArray(style);
        let item = flattenArrayResult.forEach((item) => {
          if (item) {
            const _Object = Object;
            const entries = Object.entries(item);
            const tmp4 = entries[Symbol.iterator]();
            while (tmp4 !== undefined) {
              let tmp9 = _slicedToArray(tmp6, 2);
              [tmp10, tmp11] = tmp9;
              obj = InlinePropManager(1685);
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
        let obj2 = _inlineProps(1685);
        if (!obj2.isSharedValue(tmp20)) {
          continue;
        } else {
          _inlineProps[key10008] = tmp20;
          continue;
        }
        continue;
      }
      continue;
    }
    self = this;
    closure_129_0 = _inlineProps;
    if ((function inlinePropsHasChanged(_inlineProps, _inlineProps) {
      if (Object.keys(_inlineProps).length !== Object.keys(_inlineProps).length) {
        return true;
      } else {
        const _Object = Object;
        const keys = Object.keys(_inlineProps);
        for (const item10018 of keys) {
          if (arg0[item10018] !== arg1[item10018]) {
            obj.return();
            let flag = true;
            return true;
          }
        }
        return false;
      }
    })(_inlineProps, this._inlineProps)) {
      if (!self._inlinePropsViewDescriptors) {
        self._inlinePropsViewDescriptors = _inlineProps(1734).makeViewDescriptorsSet();
        const viewConfig = self2.viewConfig;
        let _Object = Object;
        ({ viewTag, viewName, shadowNodeWrapper } = self2);
        const obj4 = _inlineProps(1734);
        const tmp7 = _inlineProps;
        if (tmp10) {
          tmp7(1735).adaptViewConfig(viewConfig);
          const tmp7Result = tmp7(1735);
        }
        const _inlinePropsViewDescriptors = self._inlinePropsViewDescriptors;
        _inlineProps = { tag: viewTag, name: viewName, shadowNodeWrapper };
        _inlinePropsViewDescriptors.add(_inlineProps);
        tmp10 = Object.keys(_inlineProps).length && viewConfig;
      }
      const shareableViewDescriptors = self._inlinePropsViewDescriptors.shareableViewDescriptors;
      closure_129_1 = shareableViewDescriptors;
      const fn = function o() {
        obj = InlinePropManager(1736);
        obj.updateProps(dependencyMap, getInlinePropsUpdate(obj));
      };
      _inlineProps = { getInlinePropsUpdate, newInlineProps: null, updateProps: null, shareableViewDescriptors: null };
      _inlineProps.newInlineProps = _inlineProps;
      _inlineProps.updateProps = _inlineProps(1736).updateProps;
      _inlineProps.shareableViewDescriptors = shareableViewDescriptors;
      fn.__closure = _inlineProps;
      fn.__workletHash = 4459550727912;
      fn.__initData = __initData;
      self._inlineProps = _inlineProps;
      if (self._inlinePropsMapperId) {
        let tmp14Result = tmp14(1684);
        tmp14Result.stopMapper(self._inlinePropsMapperId);
      }
      self._inlinePropsMapperId = null;
      const _Object2 = Object;
      if (Object.keys(_inlineProps).length) {
        tmp14Result = tmp14(1684);
        const _Object3 = Object;
        self._inlinePropsMapperId = tmp14Result.startMapper(fn, Object.values(_inlineProps));
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
        InlinePropManager(1684).stopMapper(tmp._inlinePropsMapperId);
        const obj = InlinePropManager(1684);
      }
    }
  }
];

export const hasInlineStyles = function hasInlineStyles(viewDescriptors) {
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
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item) => {
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
                        someResult = keys.some(() => { ... });
                      }
                      return someResult;
                    });
                    let tmp4 = Array.isArray(obj) && obj.some((item) => {
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
export const getInlineStyle = function getInlineStyle(viewDescriptors, _isFirstRender) {
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
      let obj2 = InlinePropManager(1685);
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
export const InlinePropManager = _createClass(InlinePropManager, items);