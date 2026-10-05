// === Module 433: ? ===

// Module 433
import Fragment from "Fragment" /* 21 */;
import nullthrowsDefault from "nullthrows" /* 70 */;
import get_hairlineWidthDefault from "get hairlineWidth" /* 254 */;
import _modDef434 from "module_434" /* 434 */;
import react2 from "react" /* 436 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import "react";
import react from "react" /* 19 */;
import module_68 from "module_68" /* 68 */;
import __INTERNAL_VIEW_CONFIG_mod from "module_435" /* 435 */;

let hasOwnProperty;
let metroRequire;
function defaultHiddenStyle(height) {
  return { minHeight: height.height, minWidth: height.width };
}
({ startTransition: hasOwnProperty, useState: metroRequire } = react);
const jsx = Fragment.jsx;
if (module_68.hasViewManagerConfig("VirtualView")) {
  const importDefaultResult1 = module_68;
  if (!importDefaultResult1.hasViewManagerConfig("VirtualViewExperimental")) {
    let __INTERNAL_VIEW_CONFIG = _modDef434;
  }
  let c9 = null;
  let c0 = null;
  let c1 = false;
  exports.default = react.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
    let c2;
    let closure_129_1;
    let nativeID;
    let style;
    let tmp2;
    hiddenStyle = hiddenStyle.hiddenStyle;
    const children = hiddenStyle.children;
    if (hiddenStyle === undefined) {
      hiddenStyle = defaultHiddenStyle;
    }
    ({ nativeID, style, onModeChange: closure_129_1 } = hiddenStyle);
    c2 = undefined;
    const removeClippedSubviews = hiddenStyle.removeClippedSubviews;
    let tmp = _slicedToArray(metroRequire(obj), 2);
    [tmp2, c2] = tmp;
    let closure_3 = tmp3;
    obj = react2;
    let closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
    let composeResult = style;
    if (tmp2 !== c9) {
      const obj3 = get_hairlineWidthDefault;
      composeResult = obj3.compose(style, nullthrowsDefault(tmp2));
    }
    let tmp9 = null;
    if (tmp2 === c9) {
      tmp9 = children;
    }
    return <__INTERNAL_VIEW_CONFIG initialHidden={initialHidden} nativeID={nativeID} ref={ref} removeClippedSubviews={removeClippedSubviews} renderState={tmp2 !== c9 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered} style={composeResult} onModeChange={function onModeChange(nativeEvent) {
      let VirtualViewRenderState;
      let bindResult;
      const tmp = closure_1_1(_undefined[7]);
      const tmpResult = tmp(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      obj = { mode: tmpResult, renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      const current = ref.current;
      if (current != null) {
        current.logModeChange(obj);
      }
      const obj2 = bindResult;
      bindResult = null;
      if (null != bindResult) {
        bindResult = obj2.bind(null, obj);
      }
      if (tmpResult !== globalThis.VirtualViewMode.Visible) {
        if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
          const VirtualViewMode2 = globalThis.VirtualViewMode;
          if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
            const _Error = Error;
            throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
          } else {
            closure_1_5(() => {
              obj = hiddenStyle(nativeEvent.nativeEvent.targetRect);
              if (obj == null) {
                obj = {};
              }
              c2(obj);
              if (bindResult != null) {
                bindResult();
              }
            });
          }
        } else {
          closure_1_5(() => {
            c2(closure_3_9);
            if (bindResult != null) {
              bindResult();
            }
          });
        }
      } else {
        _undefined(closure_1_9);
        if (bindResult != null) {
          bindResult();
        }
      }
    }}>{tmp9}</__INTERNAL_VIEW_CONFIG>;
  });
  exports.createHiddenVirtualView = function createHiddenVirtualView(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    const initialHidden = obj !== c9;
    return react.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
      let c2;
      let closure_129_1;
      let nativeID;
      let style;
      let tmp2;
      hiddenStyle = hiddenStyle.hiddenStyle;
      const children = hiddenStyle.children;
      if (hiddenStyle === undefined) {
        hiddenStyle = defaultHiddenStyle;
      }
      ({ nativeID, style, onModeChange: closure_129_1 } = hiddenStyle);
      c2 = undefined;
      const removeClippedSubviews = hiddenStyle.removeClippedSubviews;
      let tmp = _slicedToArray(metroRequire(obj), 2);
      [tmp2, c2] = tmp;
      let closure_3 = tmp3;
      obj = react2;
      let closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
      let composeResult = style;
      if (tmp2 !== c9) {
        const obj3 = get_hairlineWidthDefault;
        composeResult = obj3.compose(style, nullthrowsDefault(tmp2));
      }
      let tmp9 = null;
      if (tmp2 === c9) {
        tmp9 = children;
      }
      return <__INTERNAL_VIEW_CONFIG initialHidden={initialHidden} nativeID={nativeID} ref={ref} removeClippedSubviews={removeClippedSubviews} renderState={tmp2 !== c9 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered} style={composeResult} onModeChange={function onModeChange(nativeEvent) {
        let VirtualViewRenderState;
        let bindResult;
        const tmp = closure_1_1(_undefined[7]);
        const tmpResult = tmp(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
        obj = { mode: tmpResult, renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        VirtualViewRenderState = globalThis.VirtualViewRenderState;
        const current = ref.current;
        if (current != null) {
          current.logModeChange(obj);
        }
        const obj2 = bindResult;
        bindResult = null;
        if (null != bindResult) {
          bindResult = obj2.bind(null, obj);
        }
        if (tmpResult !== globalThis.VirtualViewMode.Visible) {
          if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
            const VirtualViewMode2 = globalThis.VirtualViewMode;
            if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
              const _Error = Error;
              throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
            } else {
              closure_1_5(() => {
                obj = hiddenStyle(nativeEvent.nativeEvent.targetRect);
                if (obj == null) {
                  obj = {};
                }
                c2(obj);
                if (bindResult != null) {
                  bindResult();
                }
              });
            }
          } else {
            closure_1_5(() => {
              c2(closure_3_9);
              if (bindResult != null) {
                bindResult();
              }
            });
          }
        } else {
          _undefined(closure_1_9);
          if (bindResult != null) {
            bindResult();
          }
        }
      }}>{tmp9}</__INTERNAL_VIEW_CONFIG>;
    });
  };
  exports._logs = {};
}
let __INTERNAL_VIEW_CONFIG = __INTERNAL_VIEW_CONFIG_mod;