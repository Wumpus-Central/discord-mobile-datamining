// discord_app/modules/in_app_notifications/native/NotificationProgress.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import ReanimatedRexport from "../../reanimated/ReanimatedRexport.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

let obj2;
const View = react_native.View;
const jsx = Fragment.jsx;
let obj = { progress: obj2, progressContainerBottom: { width: "100%", position: "absolute", bottom: -1 } };
obj2 = { borderRadius: nativeDefault.radii.xs, backgroundColor: nativeDefault.colors.BACKGROUND_BRAND, height: 4 };
let closure_7 = createStyles.createStyles(obj);
const __initData = {
  code: 'function NotificationProgressTsx1(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==="number"?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}',
};
const __initData2 = {
  code: "function NotificationProgressTsx2(){const{percent,width}=this.__closure;const percentRemaining=(typeof percent==='number'?percent:percent.get())/100;return{transform:[{translateX:-width+width*percentRemaining}]};}",
};
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (percent) => {
      let closure_2;
      let first;
      let first1;
      let tmp8;
      let closure_0 = percent;
      const obj = react2;
      const cResult = obj.c(3);
      [first, closure_2] = react.useState(0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function s(nativeEvent) {
          return closure_2(nativeEvent.nativeEvent.layout.width);
        };
        cResult[0] = fn;
        first1 = fn;
      } else {
        first1 = cResult[0];
      }
      const fn2 = function y() {
        let items;
        let value = closure_0;
        if (typeof closure_0 !== "number") {
          value = closure_0.get();
        }
        const obj2 = { transform: items };
        items = [];
        const obj3 = { translateX: first * (value / 100) - first };
        items[0] = obj3;
        return obj2;
      };
      fn2.__closure = { percent, width: first };
      fn2.__workletHash = 7122786095468;
      fn2.__initData = __initData;
      const tmpResult = ReanimatedRexport;
      const animatedStyle = tmpResult.useAnimatedStyle(fn2);
      if (cResult[1] !== animatedStyle) {
        let obj2 = { animatedStyles: animatedStyle, handleLayout: first1 };
        cResult[1] = animatedStyle;
        cResult[2] = obj2;
        tmp8 = obj2;
      } else {
        tmp8 = cResult[2];
      }
      return tmp8;
    }
  : (percent) => {
      let callback;
      let closure_2;
      let first;
      let fn;
      let obj2;
      let closure_0 = percent;
      [first, closure_2] = react.useState(0);
      const obj = { animatedStyles: obj2.useAnimatedStyle(fn), handleLayout: callback };
      callback = react.useCallback((nativeEvent) => closure_2(nativeEvent.nativeEvent.layout.width), []);
      obj2 = ReanimatedRexport;
      fn = function s() {
        let items;
        let value = closure_0;
        if (typeof closure_0 !== "number") {
          value = closure_0.get();
        }
        const obj2 = { transform: items };
        items = [];
        const obj3 = { translateX: first * (value / 100) - first };
        items[0] = obj3;
        return obj2;
      };
      fn.__closure = { percent, width: first };
      fn.__workletHash = 16319973237775;
      fn.__initData = __initData2;
      return obj;
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (percent) => {
      let animatedStyles;
      let handleLayout;
      const obj = react2;
      const cResult = obj.c(7);
      percent = percent.percent;
      const tmp3 = closure_7();
      ({ animatedStyles, handleLayout } = closure_10(percent));
      closure_10(percent);
      if (cResult[0] === animatedStyles) {
        let tmp5;
        if (cResult[1] === tmp3.progress) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === handleLayout) {
          if (cResult[4] === tmp3.progressContainerBottom) {
            let tmp7;
            if (cResult[5] === tmp5) {
              tmp7 = cResult[6];
            }
            return tmp7;
          }
        }
        const tmp10 = (
          <View onLayout={handleLayout} style={tmp3.progressContainerBottom}>
            {tmp5}
          </View>
        );
        cResult[3] = handleLayout;
        cResult[4] = tmp3.progressContainerBottom;
        cResult[5] = tmp5;
        cResult[6] = tmp10;
        tmp7 = tmp10;
      }
      const items = [tmp3.progress, animatedStyles];
      const tmp6 = jsx(ReanimatedRexportDefault.View, { style: items });
      cResult[0] = animatedStyles;
      cResult[1] = tmp3.progress;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (percent) => {
      percent = percent.percent;
      const tmp = closure_7();
      const tmp2 = closure_10(percent);
      const items = [tmp.progress, tmp2.animatedStyles];
      return (
        <View onLayout={tmp2.handleLayout} style={tmp.progressContainerBottom}>
          {null}
        </View>
      );
    };
const result = size.fileFinishedImporting("modules/in_app_notifications/native/NotificationProgress.tsx");

export default tmp2;
