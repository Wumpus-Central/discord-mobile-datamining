// === Module 6563: useFastestListPropsScrollReporting ===

// Module 6563 (useFastestListPropsScrollReporting)
import react from "react" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let scrollReporting;

const __initData = { code: "function useFastestListPropsScrollReportingNativeTsx1(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}" };
const __initData2 = { code: "function useFastestListPropsScrollReportingNativeTsx2(event){const{scrollPosition,horizontal}=this.__closure;if(scrollPosition!=null){scrollPosition.set(horizontal?event.contentOffset.x:event.contentOffset.y);}}" };
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((scrollReporting, horizontal) => {
  let fn;
  let closure_0 = horizontal;
  const obj = react;
  const cResult = obj.c(8);
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  const obj2 = { onScroll: fn };
  fn = function t(contentOffset) {
    if (null != scrollPosition) {
      contentOffset = contentOffset.contentOffset;
      const result = scrollPosition.set(closure_0 ? contentOffset.x : contentOffset.y);
    }
  };
  fn.__closure = { scrollPosition, horizontal };
  fn.__workletHash = 14196294214838;
  fn.__initData = __initData;
  const tmpResult = ReanimatedRexport;
  const animatedScrollHandler = tmpResult.useAnimatedScrollHandler(obj2);
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    let tmp8;
    if (cResult[0] !== animatedScrollHandler) {
      const obj3 = { onScroll: animatedScrollHandler };
      cResult[0] = animatedScrollHandler;
      cResult[1] = obj3;
      tmp8 = obj3;
    } else {
      tmp8 = cResult[1];
    }
    return tmp8;
  } else if ("animatedCallbacks" === scrollReporting) {
    let tmp7;
    if (cResult[2] !== scrollReporting.scrollHandlerAnimated) {
      const obj5 = { onScroll: scrollReporting.scrollHandlerAnimated };
      cResult[2] = scrollReporting.scrollHandlerAnimated;
      cResult[3] = obj5;
      tmp7 = obj5;
    } else {
      tmp7 = cResult[3];
    }
    return tmp7;
  } else {
    if (cResult[4] === scrollReporting.onScroll) {
      if (cResult[5] === scrollReporting.onScrollBeginDrag) {
        let tmp6;
        if (cResult[6] === scrollReporting.onScrollEndDrag) {
          tmp6 = cResult[7];
        }
        return tmp6;
      }
    }
    const obj6 = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj4.onScroll, onScrollBeginDrag: obj4.onScrollBeginDrag, onScrollEndDrag: obj4.onScrollEndDrag } = scrollReporting);
    cResult[4] = scrollReporting.onScroll;
    cResult[5] = scrollReporting.onScrollBeginDrag;
    cResult[6] = scrollReporting.onScrollEndDrag;
    cResult[7] = obj6;
    tmp6 = obj6;
  }
}) : ((scrollReporting, horizontal) => {
  let closure_0 = horizontal;
  let scrollPosition;
  if ("animatedScrollPosition" === scrollReporting.scrollReporting) {
    scrollPosition = scrollReporting.scrollPosition;
  }
  ReanimatedRexport;
  const fn = function t(contentOffset) {
    if (null != scrollPosition) {
      contentOffset = contentOffset.contentOffset;
      const result = scrollPosition.set(closure_0 ? contentOffset.x : contentOffset.y);
    }
  };
  fn.__closure = { scrollPosition, horizontal };
  fn.__workletHash = 16229658519349;
  fn.__initData = __initData2;
  ({ onScroll: null }.onScroll) = fn;
  scrollReporting = scrollReporting.scrollReporting;
  if ("animatedScrollPosition" === scrollReporting) {
    return { onScroll: tmp3 };
  } else if ("animatedCallbacks" === scrollReporting) {
    return { onScroll: scrollReporting.scrollHandlerAnimated };
  } else {
    const obj = { onScroll: null, onScrollBeginDrag: null, onScrollEndDrag: null };
    ({ onScroll: obj.onScroll, onScrollBeginDrag: obj.onScrollBeginDrag, onScrollEndDrag: obj.onScrollEndDrag } = scrollReporting);
    return obj;
  }
});
let result = size.fileFinishedImporting("modules/fastest_list/props/useFastestListPropsScrollReporting.native.tsx");

export default tmp2;