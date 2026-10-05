// _runtime/metro/00433__.js
import Fragment from "../react/00021_Fragment.js";
import nullthrowsDefault from "../00070_nullthrows.js";
import get_hairlineWidthDefault from "../00254_get_hairlineWidth.js";
import _modDef434 from "00434__.js";
import react2 from "../00436_react.js";
import _slicedToArray from "00032__slicedToArray.js";
import "react";
import react from "../00019_react.js";
import 00068__ from "00068__.js";
import __INTERNAL_VIEW_CONFIG_mod from "00435__.js";

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