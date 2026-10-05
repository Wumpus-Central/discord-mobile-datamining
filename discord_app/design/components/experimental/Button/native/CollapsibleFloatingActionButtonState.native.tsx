// discord_app/design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import ReanimatedRexport from "../../../../../modules/reanimated/ReanimatedRexport.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import ReactCompilerGating_mod from "../../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let set;

let ReactCompilerGating = ReactCompilerGating_mod;
const __initData = {
  code: "function CollapsibleFloatingActionButtonStateNativeTsx1(t3){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;const{nativeEvent:nativeEvent}=t3;if(nativeEvent==null){return;}const{contentOffset:t4,contentSize:t5,layoutMeasurement:t6}=nativeEvent;const{y:currentOffset}=t4;const{height:contentHeight}=t5;const{height:layoutHeight}=t6;if(currentOffset<initialScrollStart){return;}const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight){return;}const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}",
};
const __initData2 = {
  code: "function CollapsibleFloatingActionButtonStateNativeTsx2({nativeEvent:nativeEvent}){const{initialScrollStart,previousOffset,MINIMUM_SCROLL_DISTANCE_TO_CLOSE,collapseText,SCROLL_OFFSET_THRESHOLD}=this.__closure;if(nativeEvent==null)return;const{contentOffset:{y:currentOffset},contentSize:{height:contentHeight},layoutMeasurement:{height:layoutHeight}}=nativeEvent;if(currentOffset<initialScrollStart)return;const contentHeightAsOffset=currentOffset+layoutHeight;if(contentHeightAsOffset>contentHeight)return;const offsetChanged=currentOffset-previousOffset.get();if(currentOffset<MINIMUM_SCROLL_DISTANCE_TO_CLOSE){collapseText.set(0);}else{if(Math.abs(offsetChanged)>SCROLL_OFFSET_THRESHOLD){collapseText.set(offsetChanged<0?0:1);}}previousOffset.set(currentOffset);}",
};
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const obj2 = ReanimatedRexport;
      const sharedValue = obj2.useSharedValue(0);
      if (cResult[0] !== sharedValue) {
        const obj3 = { collapseText: sharedValue };
        cResult[0] = sharedValue;
        cResult[1] = obj3;
        tmp3 = obj3;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      let obj2;
      const obj = { collapseText: obj2.useSharedValue(0) };
      obj2 = ReanimatedRexport;
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (collapseText, point) => {
      const obj = react2;
      const cResult = obj.c(4);
      collapseText = collapseText.collapseText;
      let num = 0;
      if (undefined !== point) {
        num = point;
      }
      const tmpResult = ReanimatedRexport;
      const sharedValue = tmpResult.useSharedValue(num);
      if (cResult[0] === collapseText) {
        if (cResult[1] === num) {
          let tmp5;
          if (cResult[2] === sharedValue) {
            tmp5 = cResult[3];
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
                  set = collapseText.set;
                  if (diff < 0) {
                    num2 = 0;
                  }
                  const result1 = set(num2);
                }
              }
              const result2 = sharedValue.set(y);
            }
          }
        }
      };
      fn.__closure = {
        initialScrollStart: num,
        previousOffset: sharedValue,
        MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10,
        collapseText,
        SCROLL_OFFSET_THRESHOLD: 10,
      };
      fn.__workletHash = 16490416007724;
      fn.__initData = __initData;
      cResult[0] = collapseText;
      cResult[1] = num;
      cResult[2] = sharedValue;
      cResult[3] = fn;
      tmp5 = fn;
    }
  : (collapseText) => {
      collapseText = collapseText.collapseText;
      let num = point;
      if (point === undefined) {
        num = 0;
      }
      const obj = ReanimatedRexport;
      const sharedValue = obj.useSharedValue(num);
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
                  set = collapseText.set;
                  if (diff < 0) {
                    num2 = 0;
                  }
                  const result1 = set(num2);
                }
              }
              const result2 = sharedValue.set(y);
            }
          }
        }
      };
      fn.__closure = {
        initialScrollStart: num,
        previousOffset: sharedValue,
        MINIMUM_SCROLL_DISTANCE_TO_CLOSE: 10,
        collapseText,
        SCROLL_OFFSET_THRESHOLD: 10,
      };
      fn.__workletHash = 1424697708457;
      fn.__initData = __initData2;
      const items = [num, sharedValue, collapseText];
      return react.useCallback(fn, items);
    };
let result = size.fileFinishedImporting(
  "design/components/experimental/Button/native/CollapsibleFloatingActionButtonState.native.tsx",
);

export const useCollapsibleFloatingActionButtonState = tmp2;
export const useCollapsibleFloatingActionButtonScroll = tmp3;
