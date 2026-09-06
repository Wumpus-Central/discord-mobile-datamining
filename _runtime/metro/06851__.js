// === Module 6851: ? ===

// Module 6851
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
let noop = fn(19);
const forwardRef = noop.forwardRef;
({ useMemo: metroRequire, memo } = noop);
const jsx = fn(21).jsx;
try {
  const FlashList = fn(6852);
  const memoResult = memo(forwardRef((focusHook, ref) => {
    focusHook = focusHook.focusHook;
    const scrollEventsHandlersHook = focusHook.scrollEventsHandlersHook;
    const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
    closure_6(() => {
      if (!FlashList) {
        throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
      }
    }, []);
    const items = [focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment];
    const tmp = _objectWithoutProperties(focusHook, enableFooterMarginAdjustment);
    let merged = Object.assign(tmp);
    return <FlashList.FlashList ref={ref} renderScrollComponent={closure_6(() => forwardRef((arg0, ref) => {
      const merged = Object.assign(arg0, Object.assign({ data: 0 }));
      const obj = { ref };
      const merged1 = Object.assign(merged);
      obj.focusHook = focusHook;
      obj.scrollEventsHandlersHook = scrollEventsHandlersHook;
      obj.enableFooterMarginAdjustment = enableFooterMarginAdjustment;
      return jsx(focusHook(scrollEventsHandlersHook[4]), { ref });
    }), items)} />;
  }));
  exports.default = memoResult;
  exports.BottomSheetFlashList = memoResult;
} catch (err) {
}