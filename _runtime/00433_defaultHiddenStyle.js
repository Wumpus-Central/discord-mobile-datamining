// === Module 433: defaultHiddenStyle ===

// Module 433 (defaultHiddenStyle)
import _modDef434 from "module_434" /* 434 */;
import _slicedToArray from "module_32" /* 32 */;
import "module_19";
import measure from "measure" /* 68 */;
import __INTERNAL_VIEW_CONFIG from "module_435" /* 435 */;

let c0 = fn;
let c1 = importDefault;
function defaultHiddenStyle(height) {
  return { minHeight: height.height, minWidth: height.width };
}
const noop = fn(19);
({ startTransition: hasOwnProperty, useState: metroRequire } = noop);
const jsx = fn(21).jsx;
if (measure.hasViewManagerConfig("VirtualView")) {
  if (!importDefaultResult1.hasViewManagerConfig("VirtualViewExperimental")) {
    let __INTERNAL_VIEW_CONFIG = _modDef434;
  }
  let c9 = null;
  c0 = null;
  c1 = false;
  exports.default = noop.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
    hiddenStyle = hiddenStyle.hiddenStyle;
    if (hiddenStyle === undefined) {
      hiddenStyle = defaultHiddenStyle;
    }
    ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
    c2 = undefined;
    [tmp2, c2] = _slicedToArray(timestampProducer(obj), 2);
    closure_3 = tmp3;
    obj = c0(436);
    ref = obj.useVirtualViewLogging(tmp3, nativeID);
    obj = { initialHidden, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: null, style: null, onModeChange: null, children: null };
    obj.renderState = tmp2 !== c9 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered;
    let composeResult = style;
    if (tmp2 !== c9) {
      composeResult = initialHidden(254).compose(style, initialHidden(70)(tmp2));
      const obj3 = initialHidden(254);
    }
    obj.style = composeResult;
    obj.onModeChange = function onModeChange(nativeEvent) {
      const tmpResult = initialHidden(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
      obj = { mode: tmpResult, renderState: null, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
      obj.renderState = closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered;
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
      obj2 = closure_1;
      const tmp = initialHidden(_undefined[7]);
    };
    let children = null;
    if (tmp2 === c9) {
      children = hiddenStyle.children;
    }
    obj.children = children;
    return <__INTERNAL_VIEW_CONFIG initialHidden={initialHidden} nativeID={nativeID} ref={ref} removeClippedSubviews={hiddenStyle.removeClippedSubviews} renderState={null} style={null} onModeChange={null}>{null}</__INTERNAL_VIEW_CONFIG>;
  });
  exports.createHiddenVirtualView = function createHiddenVirtualView(arg0) {
    let obj = arg0;
    if (arg0 == null) {
      obj = {};
    }
    const initialHidden = obj !== c9;
    return noop.forwardRef(function VirtualView_withRef(hiddenStyle, ref) {
      hiddenStyle = hiddenStyle.hiddenStyle;
      if (hiddenStyle === undefined) {
        hiddenStyle = defaultHiddenStyle;
      }
      ({ nativeID, style, onModeChange: closure_1 } = hiddenStyle);
      c2 = undefined;
      [tmp2, c2] = _slicedToArray(timestampProducer(obj), 2);
      closure_3 = tmp3;
      obj = c0(436);
      ref = obj.useVirtualViewLogging(tmp3, nativeID);
      obj = { initialHidden, nativeID, ref, removeClippedSubviews: hiddenStyle.removeClippedSubviews, renderState: null, style: null, onModeChange: null, children: null };
      obj.renderState = tmp2 !== c9 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered;
      let composeResult = style;
      if (tmp2 !== c9) {
        composeResult = initialHidden(254).compose(style, initialHidden(70)(tmp2));
        const obj3 = initialHidden(254);
      }
      obj.style = composeResult;
      obj.onModeChange = function onModeChange(nativeEvent) {
        const tmpResult = initialHidden(_undefined[7])(globalThis.VirtualViewMode.cast(nativeEvent.nativeEvent.mode));
        obj = { mode: tmpResult, renderState: null, target: nativeEvent.currentTarget, targetRect: nativeEvent.nativeEvent.targetRect, thresholdRect: nativeEvent.nativeEvent.thresholdRect };
        obj.renderState = closure_3 ? VirtualViewRenderState.None : VirtualViewRenderState.Rendered;
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
        obj2 = closure_1;
        const tmp = initialHidden(_undefined[7]);
      };
      let children = null;
      if (tmp2 === c9) {
        children = hiddenStyle.children;
      }
      obj.children = children;
      return <__INTERNAL_VIEW_CONFIG initialHidden={initialHidden} nativeID={nativeID} ref={ref} removeClippedSubviews={hiddenStyle.removeClippedSubviews} renderState={null} style={null} onModeChange={null}>{null}</__INTERNAL_VIEW_CONFIG>;
    });
  };
  exports._logs = {};
}