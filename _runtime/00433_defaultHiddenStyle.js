import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import noop from "noop";
import { jsx } from "jsxProd";
import importDefaultResult2 from "__INTERNAL_VIEW_CONFIG";

let c5;
let closure_6;
let c0 = arg1;
let c1 = importDefault;
function defaultHiddenStyle(height) {
  return { minHeight: height.height, minWidth: height.width };
}
let c4 = importAllResult;
({ startTransition: c5, useState: closure_6 } = noop);
if (importDefaultResult.hasViewManagerConfig("VirtualView")) {
  if (!importDefaultResult1.hasViewManagerConfig("VirtualViewExperimental")) {
    let importDefaultResult2 = require("__INTERNAL_VIEW_CONFIG");
  }
  let c9 = null;
  c0 = null;
  c1 = false;
  exports.default = importAllResult.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
    let c2;
    let closure_1;
    let nativeID;
    let style;
    let tmp2;
    hiddenStyle = hiddenStyle.hiddenStyle;
    if (hiddenStyle === undefined) {
      hiddenStyle = outer1_10;
    }
    ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
    c2 = undefined;
    let c3;
    let closure_4;
    [tmp2, c2] = outer1_3(outer1_6(hiddenStyle), 2);
    c3 = tmp3;
    obj = obj(outer1_2[6]);
    closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
    obj = { initialHidden: callback, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, style: null, onModeChange: null, children: null };
    VirtualViewRenderState = globalThis.VirtualViewRenderState;
    let composeResult = style;
    if (tmp2 !== outer1_9) {
      composeResult = callback(tmp4[8]).compose(style, callback(tmp4[7])(tmp2));
      const obj3 = callback(tmp4[8]);
    }
    obj[5] = composeResult;
    obj[6] = function onModeChange(nativeEvent) {
      let closure_0 = nativeEvent;
      const tmpResult = outer1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      let obj = { mode: tmpResult, renderState: c3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      const current = ref.current;
      if (current != null) {
        current.logModeChange(obj);
      }
      let bindResult = null;
      if (null != closure_1) {
        bindResult = closure_1.bind(null, obj);
      }
      closure_1 = bindResult;
      if (tmpResult !== globalThis.VirtualViewMode.Visible) {
        if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
          if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
            const _Error = Error;
            throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
          } else {
            outer1_5(() => {
              let obj = nativeEvent(nativeEvent.nativeEvent.targetRect);
              if (obj == null) {
                obj = {};
              }
              outer1_2(obj);
              if (bindResult != null) {
                bindResult();
              }
            });
          }
        } else {
          outer1_5(() => {
            outer1_2(outer2_9);
            if (bindResult != null) {
              bindResult();
            }
          });
        }
      } else {
        _undefined(outer1_9);
        if (bindResult != null) {
          bindResult();
        }
      }
    };
    let children = null;
    if (tmp2 === outer1_9) {
      children = hiddenStyle.children;
    }
    obj[7] = children;
    return outer1_7(outer1_8, obj);
  });
  exports.createHiddenVirtualView = function createHiddenVirtualView(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    let closure_1 = obj !== c9;
    return importAllResult.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
      let c2;
      let closure_1;
      let nativeID;
      let style;
      let tmp2;
      hiddenStyle = hiddenStyle.hiddenStyle;
      if (hiddenStyle === undefined) {
        hiddenStyle = outer1_10;
      }
      ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
      c2 = undefined;
      let c3;
      let closure_4;
      [tmp2, c2] = outer1_3(outer1_6(hiddenStyle), 2);
      c3 = tmp3;
      obj = obj(outer1_2[6]);
      closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
      obj = { initialHidden: callback, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, style: null, onModeChange: null, children: null };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      let composeResult = style;
      if (tmp2 !== outer1_9) {
        composeResult = callback(tmp4[8]).compose(style, callback(tmp4[7])(tmp2));
        const obj3 = callback(tmp4[8]);
      }
      obj[5] = composeResult;
      obj[6] = function onModeChange(nativeEvent) {
        let closure_0 = nativeEvent;
        const tmpResult = outer1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
        let obj = { mode: tmpResult, renderState: c3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        VirtualViewRenderState = globalThis.VirtualViewRenderState;
        const current = ref.current;
        if (current != null) {
          current.logModeChange(obj);
        }
        let bindResult = null;
        if (null != closure_1) {
          bindResult = closure_1.bind(null, obj);
        }
        closure_1 = bindResult;
        if (tmpResult !== globalThis.VirtualViewMode.Visible) {
          if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
            if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
              const _Error = Error;
              throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
            } else {
              outer1_5(() => {
                let obj = nativeEvent(nativeEvent.nativeEvent.targetRect);
                if (obj == null) {
                  obj = {};
                }
                outer1_2(obj);
                if (bindResult != null) {
                  bindResult();
                }
              });
            }
          } else {
            outer1_5(() => {
              outer1_2(outer2_9);
              if (bindResult != null) {
                bindResult();
              }
            });
          }
        } else {
          _undefined(outer1_9);
          if (bindResult != null) {
            bindResult();
          }
        }
      };
      let children = null;
      if (tmp2 === outer1_9) {
        children = hiddenStyle.children;
      }
      obj[7] = children;
      return outer1_7(outer1_8, obj);
    });
  };
  exports._logs = {};
}