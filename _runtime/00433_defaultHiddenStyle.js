// === Module 433: defaultHiddenStyle ===

// Module 433 (defaultHiddenStyle)
import __INTERNAL_VIEW_CONFIGDefault from "__INTERNAL_VIEW_CONFIG" /* 434 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;
import importDefaultResult2 from "__INTERNAL_VIEW_CONFIG" /* 435 */;

let c0 = fn;
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
      hiddenStyle = defaultHiddenStyle;
    }
    ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
    c2 = undefined;
    [tmp2, c2] = closure_1_3(closure_1_6(hiddenStyle), 2);
    closure_3 = tmp3;
    obj = obj(dependencyMap[6]);
    closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
    obj = { initialHidden: callback, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, style: null, onModeChange: null, children: null };
    VirtualViewRenderState = globalThis.VirtualViewRenderState;
    let composeResult = style;
    if (tmp2 !== closure_1_9) {
      composeResult = callback(dependencyMap[8]).compose(style, callback(dependencyMap[7])(tmp2));
      const obj3 = callback(dependencyMap[8]);
    }
    obj[5] = composeResult;
    obj[6] = function onModeChange(nativeEvent) {
      closure_0 = nativeEvent;
      const tmpResult = closure_1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      obj = { mode: tmpResult, renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      const current = ref.current;
      if (current != null) {
        current.logModeChange(obj);
      }
      let bindResult = null;
      if (null != closure_1) {
        bindResult = obj2.bind(null, obj);
      }
      closure_1 = bindResult;
      if (tmpResult !== globalThis.VirtualViewMode.Visible) {
        if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
          if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
            const _Error = Error;
            throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
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
      obj2 = closure_1;
      const tmp = closure_1_1(_undefined[7]);
    };
    let children = null;
    if (tmp2 === closure_1_9) {
      children = hiddenStyle.children;
    }
    obj[7] = children;
    return <importDefaultResult2 initialHidden={callback} nativeID={nativeID} ref={ref} removeClippedSubviews={hiddenStyle.removeClippedSubviews} renderState={tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered} style={null} onModeChange={null}>{null}</importDefaultResult2>;
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
        hiddenStyle = defaultHiddenStyle;
      }
      ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
      c2 = undefined;
      [tmp2, c2] = closure_1_3(closure_1_6(hiddenStyle), 2);
      closure_3 = tmp3;
      obj = obj(dependencyMap[6]);
      closure_4 = obj.useVirtualViewLogging(tmp3, nativeID);
      obj = { initialHidden: callback, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, style: null, onModeChange: null, children: null };
      VirtualViewRenderState = globalThis.VirtualViewRenderState;
      let composeResult = style;
      if (tmp2 !== closure_1_9) {
        composeResult = callback(dependencyMap[8]).compose(style, callback(dependencyMap[7])(tmp2));
        const obj3 = callback(dependencyMap[8]);
      }
      obj[5] = composeResult;
      obj[6] = function onModeChange(nativeEvent) {
        closure_0 = nativeEvent;
        const tmpResult = closure_1_1(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
        obj = { mode: tmpResult, renderState: closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        VirtualViewRenderState = globalThis.VirtualViewRenderState;
        const current = ref.current;
        if (current != null) {
          current.logModeChange(obj);
        }
        let bindResult = null;
        if (null != closure_1) {
          bindResult = obj2.bind(null, obj);
        }
        closure_1 = bindResult;
        if (tmpResult !== globalThis.VirtualViewMode.Visible) {
          if (tmpResult !== globalThis.VirtualViewMode.Prerender) {
            if (tmpResult !== globalThis.VirtualViewMode.Hidden) {
              const _Error = Error;
              throw Error("Match: No case succesfully matched. Make exhaustive or add a wildcard case using '_'. Argument: " + tmpResult);
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
        obj2 = closure_1;
        const tmp = closure_1_1(_undefined[7]);
      };
      let children = null;
      if (tmp2 === closure_1_9) {
        children = hiddenStyle.children;
      }
      obj[7] = children;
      return <importDefaultResult2 initialHidden={callback} nativeID={nativeID} ref={ref} removeClippedSubviews={hiddenStyle.removeClippedSubviews} renderState={tmp3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered} style={null} onModeChange={null}>{null}</importDefaultResult2>;
    });
  };
  exports._logs = {};
}