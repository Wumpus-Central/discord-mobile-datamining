// === Module 7301: useFastestListPropsScrollReporting ===

// Module 7301 (useFastestListPropsScrollReporting)
import _mod1652 from "module_1652" /* 1652 */;
import size from "module_2" /* 2 */;

let closure_2 = { code: "(function useFastestListPropsScrollReportingNativeTsx1(event){let[scrollPosition,horizontal]=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}})" };
let result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default function useFastestListPropsScrollReporting(scrollReporting, arg1) {
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  _mod1652;
  items = [closure_2, scrollPosition, arg1];
  c0 = undefined;
  c1 = undefined;
  [tmp3, tmp4, tmp5] = items;
  function useFastestListPropsScrollReportingNativeTsx1(contentOffset) {
    if (null != _undefined) {
      contentOffset = contentOffset.contentOffset;
      const result = _undefined.set(c1 ? contentOffset.x : contentOffset.y);
    }
  }
  const items1 = [tmp4, tmp5];
  useFastestListPropsScrollReportingNativeTsx1.__closure = items1;
  useFastestListPropsScrollReportingNativeTsx1.__workletHash = 11602000785903;
  useFastestListPropsScrollReportingNativeTsx1.__initData = tmp3;
  { onScroll: null }.onScroll = useFastestListPropsScrollReportingNativeTsx1;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    const obj2 = { onScroll: tmp6 };
    return obj2;
  } else if ("animatedCallbacks" === scrollReporting) {
    const obj3 = { onScroll: scrollReporting.scrollHandlerAnimated };
    return obj3;
  } else {
    const obj = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj.onScroll, onScrollBeginDrag: obj.onScrollBeginDrag, onScrollEndDrag: obj.onScrollEndDrag } = scrollReporting);
    return obj;
  }
};