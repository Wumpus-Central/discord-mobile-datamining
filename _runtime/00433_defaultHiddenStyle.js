// _runtime/00433_defaultHiddenStyle.js
import __INTERNAL_VIEW_CONFIGDefault from "metro/00434___INTERNAL_VIEW_CONFIG.js";
import closure_3 from "metro/00032__slicedToArray.js";
import importAllResult from "00019_noop.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";
import importDefaultResult2 from "metro/00435___INTERNAL_VIEW_CONFIG.js";

let c0 = arg1;
let c1 = importDefault;
function defaultHiddenStyle(height) {
  return { minHeight: height.height, minWidth: height.width };
}
let c4 = importAllResult;
({ startTransition: c5, useState: closure_6 } = noop);
if (importDefaultResult.hasViewManagerConfig("VirtualView")) {
  if (!importDefaultResult1.hasViewManagerConfig("VirtualViewExperimental")) {
    let importDefaultResult2 = __INTERNAL_VIEW_CONFIGDefault;
  }
  let c9 = null;
  c0 = null;
  c1 = false;
  exports.default = importAllResult.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
    hiddenStyle = hiddenStyle.hiddenStyle;
    if (hiddenStyle === undefined) {
      hiddenStyle = closure_1_10;
    }
    ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
    c2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    [tmp2, c2] = closure_1_3(closure_1_6(hiddenStyle), 2);
    closure_3 = tmp3;
    obj = obj(closure_1_2[6]);
    closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
    obj = {
      initialHidden: callback,
      nativeID,
      ref,
      removeClippedSubviews: hiddenStyle.removeClippedSubviews,
      renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered,
      style: null,
      onModeChange: null,
      children: null,
    };
    VirtualViewRenderState = globalThis.VirtualViewRenderState;
    let composeResult = style;
    if (tmp2 !== closure_1_9) {
      composeResult = callback(tmp4[8]).compose(style, callback(tmp4[7])(tmp2));
      const obj3 = callback(tmp4[8]);
    }
    obj[5] = composeResult;
    obj[6] = function onModeChange(nativeEvent) {
      closure_0 = nativeEvent;
      const tmpResult = closure_1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      obj = {
        mode: tmpResult,
        renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered,
        target: nativeEvent.currentTarget,
        targetRect: nativeEvent.nativeEvent.targetRect,
        thresholdRect: nativeEvent.nativeEvent.thresholdRect,
      };
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
            throw Error(
              "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                tmpResult,
            );
          } else {
            closure_1_5(() => {
              obj = nativeEvent(nativeEvent.nativeEvent.targetRect);
              if (obj == null) {
                obj = {};
              }
              closure_1_2(obj);
              if (bindResult != null) {
                bindResult();
              }
            });
          }
        } else {
          closure_1_5(() => {
            closure_1_2(closure_2_9);
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
    };
    let children = null;
    if (tmp2 === closure_1_9) {
      children = hiddenStyle.children;
    }
    obj[7] = children;
    return closure_1_7(closure_1_8, obj);
  });
  exports.createHiddenVirtualView = function createHiddenVirtualView(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    closure_1 = obj !== c9;
    return importAllResult.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
      hiddenStyle = hiddenStyle.hiddenStyle;
      if (hiddenStyle === undefined) {
        hiddenStyle = closure_1_10;
      }
      ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
      c2 = undefined;
      closure_3 = undefined;
      closure_4 = undefined;
      [tmp2, c2] = closure_1_3(closure_1_6(hiddenStyle), 2);
      closure_3 = tmp3;
      obj = obj(closure_1_2[6]);
      closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
      obj = {
        initialHidden: callback,
        nativeID,
        ref,
        removeClippedSubviews: hiddenStyle.removeClippedSubviews,
        renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered,
        style: null,
        onModeChange: null,
        children: null,
      };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      let composeResult = style;
      if (tmp2 !== closure_1_9) {
        composeResult = callback(tmp4[8]).compose(style, callback(tmp4[7])(tmp2));
        const obj3 = callback(tmp4[8]);
      }
      obj[5] = composeResult;
      obj[6] = function onModeChange(nativeEvent) {
        closure_0 = nativeEvent;
        const tmpResult = closure_1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
        obj = {
          mode: tmpResult,
          renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered,
          target: nativeEvent.currentTarget,
          targetRect: nativeEvent.nativeEvent.targetRect,
          thresholdRect: nativeEvent.nativeEvent.thresholdRect,
        };
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
              throw Error(
                "Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " +
                  tmpResult,
              );
            } else {
              closure_1_5(() => {
                obj = nativeEvent(nativeEvent.nativeEvent.targetRect);
                if (obj == null) {
                  obj = {};
                }
                closure_1_2(obj);
                if (bindResult != null) {
                  bindResult();
                }
              });
            }
          } else {
            closure_1_5(() => {
              closure_1_2(closure_2_9);
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
      };
      let children = null;
      if (tmp2 === closure_1_9) {
        children = hiddenStyle.children;
      }
      obj[7] = children;
      return closure_1_7(closure_1_8, obj);
    });
  };
  exports._logs = {};
}
