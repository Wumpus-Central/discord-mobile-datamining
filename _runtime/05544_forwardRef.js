// _runtime/05544_forwardRef.js
import _objectWithoutProperties from "_objectWithoutProperties";
import noop from "noop";
import "noop";
import { jsx } from "jsxProd";

let closure_6;
let memo;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
const forwardRef = noop.forwardRef;
({ useMemo: closure_6, memo } = noop);
try {
  let closure_3 = require("module_5545");
  const memoResult = memo(forwardRef((focusHook, ref) => {
    focusHook = focusHook.focusHook;
    const scrollEventsHandlersHook = focusHook.scrollEventsHandlersHook;
    const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
    callback2(() => {
      if (!closure_3) {
        throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
      }
    }, []);
    const items = [focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment];
    const tmp = callback(focusHook, enableFooterMarginAdjustment);
    let merged = Object.assign(tmp);
    return <FlashList.FlashList ref={arg1} renderScrollComponent={callback2(() => outer1_5((arg0, ref) => {
      const merged = Object.assign(arg0, Object.create(null));
      const obj = { ref };
      const merged1 = Object.assign(merged);
      obj.focusHook = closure_0;
      obj.scrollEventsHandlersHook = closure_1;
      obj.enableFooterMarginAdjustment = closure_2;
      return outer1_7(outer1_0(outer1_1[4]), obj);
    }), items)} />;
  }));
  exports.default = memoResult;
  exports.BottomSheetFlashList = memoResult;
} catch (err) {
}