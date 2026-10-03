// === Module 8575: CollapsibleFloatingActionButtonState ===

// Module 8575 (CollapsibleFloatingActionButtonState)
import c from "c" /* 576 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4612 */;
import noop from "module_19" /* 19 */;

require = fn;
fn(558);
const __initData = { code: "function CollapsibleFloatingActionButtonStateNativeTsx1(t3){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;const{nativeEvent:nativeEvent}=t3;if(nativeEvent==null){return;}const{contentOffset:t4,contentSize:t5,layoutMeasurement:t6}=nativeEvent;const{y:currentOffset}=t4;const{height:contentHeight}=t5;const{height:layoutHeight}=t6;if(currentOffset<initialScrollStart){return;}const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight){return;}const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}" };
const __initData2 = { code: "function CollapsibleFloatingActionButtonStateNativeTsx2({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}" };
const ReactCompilerGating = fn(558);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = c.c(2);
  const sharedValue = ReanimatedRexport.useSharedValue(0);
  if (cResult[0] !== sharedValue) {
    const obj3 = { collapseText: sharedValue };
    cResult[0] = sharedValue;
    cResult[1] = obj3;
    let tmp3 = obj3;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (() => {
  const obj = { collapseText: ReanimatedRexport.useSharedValue(0) };
  return obj;
});
const size = fn(2);
let result = size.fileFinishedImporting("design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx");

export const useCollapsibleFloatingActionButtonState = tmp2;
export const useCollapsibleFloatingActionButtonScroll = ReactCompilerGating.isReactCompilerEnabled() ? ((collapseText, point) => {
  const cResult = c.c(4);
  collapseText = collapseText.collapseText;
  let num = 0;
  if (undefined !== point) {
    num = point;
  }
  const sharedValue = ReanimatedRexport.useSharedValue(num);
  if (cResult[0] === collapseText) {
    if (cResult[1] === num) {
      if (cResult[2] === sharedValue) {
        let tmp5 = cResult[3];
      }
      return tmp5;
    }
  }
  const fn = function l(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      const y = nativeEvent.contentOffset.y;
      if (y >= num) {
        if (y + nativeEvent.layoutMeasurement.height <= tmp8) {
          const diff = y - sharedValue.get();
          if (y < 10) {
            const result = collapseText.set(0);
          } else {
            const _Math = Math;
            if (Math.abs(diff) > 10) {
              let num2 = 1;
              if (diff < 0) {
                num2 = 0;
              }
              const result1 = collapseText.set(num2);
            }
          }
          const result2 = sharedValue.set(y);
        }
      }
    }
  };
  fn.__closure = { initialScrollStart: num, previousOffset: sharedValue, MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10, collapseText, SCROLL_OFFSET_THRESHOLD: 10 };
  fn.__workletHash = 16490416007724;
  fn.__initData = __initData;
  cResult[0] = collapseText;
  cResult[1] = num;
  cResult[2] = sharedValue;
  cResult[3] = fn;
  tmp5 = fn;
  const tmpResult = ReanimatedRexport;
}) : ((collapseText) => {
  collapseText = collapseText.collapseText;
  let num = point;
  if (point === undefined) {
    num = 0;
  }
  const sharedValue = ReanimatedRexport.useSharedValue(num);
  const fn = function l(nativeEvent) {
    nativeEvent = nativeEvent.nativeEvent;
    if (null != nativeEvent) {
      const y = nativeEvent.contentOffset.y;
      if (y >= num) {
        if (y + nativeEvent.layoutMeasurement.height <= tmp8) {
          const diff = y - sharedValue.get();
          if (y < 10) {
            const result = collapseText.set(0);
          } else {
            const _Math = Math;
            if (Math.abs(diff) > 10) {
              let num2 = 1;
              if (diff < 0) {
                num2 = 0;
              }
              const result1 = collapseText.set(num2);
            }
          }
          const result2 = sharedValue.set(y);
        }
      }
    }
  };
  fn.__closure = { initialScrollStart: num, previousOffset: sharedValue, MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10, collapseText, SCROLL_OFFSET_THRESHOLD: 10 };
  fn.__workletHash = 1424697708457;
  fn.__initData = __initData2;
  const items = [num, sharedValue, collapseText];
  return noop.useCallback(fn, items);
});