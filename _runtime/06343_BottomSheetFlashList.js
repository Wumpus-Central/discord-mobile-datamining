// _runtime/06343_BottomSheetFlashList.js
import Fragment from "react/00021_Fragment.js";
import _mod6344 from "metro/06344__.js";
import _objectWithoutProperties from "metro/00109__objectWithoutProperties.js";
import react_mod from "00019_react.js";

let focusHook;

let memo;
let metroRequire;
let closure_2 = ["focusHook", "scrollEventsHandlersHook", "enableFooterMarginAdjustment"];
let react = react_mod;
const forwardRef = react.forwardRef;
({ useMemo: metroRequire, memo } = react);
react = react_mod;
const jsx = Fragment.jsx;
try {
  let FlashList = _mod6344;
} catch (err) {}
const memoResult = memo(
  forwardRef((focusHook, ref) => {
    focusHook = focusHook.focusHook;
    const scrollEventsHandlersHook = focusHook.scrollEventsHandlersHook;
    const enableFooterMarginAdjustment = focusHook.enableFooterMarginAdjustment;
    const tmp = _objectWithoutProperties(focusHook, enableFooterMarginAdjustment);
    const tmp2 = closure_6(() => {
      if (!FlashList) {
        throw "You need to install FlashList first, `yarn install @shopify/flash-list`";
      }
    }, []);
    const items = [focusHook, scrollEventsHandlersHook, enableFooterMarginAdjustment];
    FlashList = FlashList.FlashList;
    let merged = Object.assign(tmp);
    return (
      <FlashList
        ref={ref}
        renderScrollComponent={closure_6(
          () =>
            forwardRef((arg0, ref) => {
              const merged = Object.assign(arg0, Object.assign({ data: 0 }));
              focusHook(scrollEventsHandlersHook[4]);
              const merged1 = Object.assign(merged);
              return (
                <tmp2
                  ref={ref}
                  focusHook={focusHook}
                  scrollEventsHandlersHook={scrollEventsHandlersHook}
                  enableFooterMarginAdjustment={enableFooterMarginAdjustment}
                />
              );
            }),
          items,
        )}
      />
    );
  }),
);

export default memoResult;
export const BottomSheetFlashList = memoResult;
