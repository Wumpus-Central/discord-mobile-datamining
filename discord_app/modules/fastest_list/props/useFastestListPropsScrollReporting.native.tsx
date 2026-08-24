// === Module 8684: useFastestListPropsScrollReporting ===

// Module 8684 (useFastestListPropsScrollReporting)
import set from "set" /* 2 */;

let closure_2 = { code: "function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}" };
let result = set.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default function useFastestListPropsScrollReporting(scrollReporting, horizontal) {
  const _require = horizontal;
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  _require(scrollPosition[0]);
  const fn = function n(contentOffset) {
    if (null != scrollPosition) {
      contentOffset = contentOffset.contentOffset;
      const result = scrollPosition.set(closure_0 ? contentOffset.x : contentOffset.y);
    }
  };
  fn.__closure = { scrollPosition, horizontal };
  fn.__workletHash = 14196294214838;
  fn.__initData = closure_2;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    let obj = { onScroll: null };
    obj[0] = tmp3;
    return obj;
  } else if ("animatedCallbacks" === scrollReporting) {
    obj = { onScroll: null };
    obj[0] = scrollReporting.scrollHandlerAnimated;
    return obj;
  } else {
    obj = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj[0], onScrollBeginDrag: obj[1], onScrollEndDrag: obj[2] } = scrollReporting);
    return obj;
  }
};