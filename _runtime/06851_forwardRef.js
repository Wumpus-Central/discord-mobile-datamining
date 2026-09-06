// _runtime/06851_forwardRef.js
import noopDefault from "00019_noop.js";
import closure_4 from "metro/00109__objectWithoutProperties.js";
import noop from "00019_noop.js";
import { jsx } from "react/00021_jsxProd.js";

let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
const forwardRef = noop.forwardRef;
({ useMemo: closure_6, memo } = noop);
noopDefault;
try {
  let closure_3 = require("metro/06852__.js");
  const memoResult = memo(
    forwardRef((focusHook, ref) => {
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
      return (
        <FlashList.FlashList
          ref={arg1}
          renderScrollComponent={callback2(
            () =>
              closure_1_5((arg0, ref) => {
                const merged = Object.assign(arg0, Object.create(null));
                const obj = { ref };
                const merged1 = Object.assign(merged);
                obj.focusHook = closure_0;
                obj.scrollEventsHandlersHook = closure_1;
                obj.enableFooterMarginAdjustment = closure_2;
                return closure_1_7(closure_1_0(closure_1_1[4]), obj);
              }),
            items,
          )}
        />
      );
    }),
  );
  exports.default = memoResult;
  exports.BottomSheetFlashList = memoResult;
} catch (err) {}
