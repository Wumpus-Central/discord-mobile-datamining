// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
let closure_4 = createStyles.createStyles({
  container: { justifyContent: "center" },
  error: { paddingHorizontal: 16, textAlign: "center" },
});
const __initData = {
  code: "function ContactSyncErrorTsx1(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}",
};
const __initData2 = {
  code: "function ContactSyncErrorTsx2(){const{withTiming,hasError,ERROR_HEIGHT}=this.__closure;return{height:withTiming(hasError?ERROR_HEIGHT:0)};}",
};
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let error;
      let style;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(10);
      ({ style, error } = arg0);
      const tmp4 = closure_4();
      _require = tmp5;
      const fn = function s() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (closure_0) {
          num = 44;
        }
        const obj = { height: withTiming(num) };
        return obj;
      };
      const tmpResult = tmp(4612);
      fn.__closure = { withTiming: tmp(4891).withTiming, hasError: null != error && "" !== error, ERROR_HEIGHT: 44 };
      fn.__workletHash = 14558247431913;
      fn.__initData = __initData;
      ({ withTiming: tmp(4891).withTiming, hasError: null != error && "" !== error, ERROR_HEIGHT: 44 });
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === style) {
          let tmp7;
          if (cResult[2] === tmp4.container) {
            tmp7 = cResult[3];
          }
          if (cResult[4] === error) {
            let tmp8;
            if (cResult[5] === tmp4.error) {
              tmp8 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              let tmp11;
              if (cResult[8] === tmp8) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
            const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp7, children: tmp8 });
            cResult[7] = tmp7;
            cResult[8] = tmp8;
            cResult[9] = tmp14;
            tmp11 = tmp14;
          }
          const tmp10 = jsx(tmp(4886).Text, {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            style: tmp4.error,
            children: error,
          });
          let num = 4;
          cResult[4] = error;
          cResult[5] = tmp4.error;
          cResult[6] = tmp10;
          tmp8 = tmp10;
        }
      }
      const items = [tmp4.container, style, animatedStyle];
      cResult[0] = animatedStyle;
      cResult[1] = style;
      cResult[2] = tmp4.container;
      cResult[3] = items;
      tmp7 = items;
    }
  : (error) => {
      let closure_0;
      error = error.error;
      const style = error.style;
      const tmp = closure_4();
      _require = tmp2;
      let obj = require("ReanimatedRexport");
      const fn = function l() {
        let num = 0;
        const withTiming = timing.withTiming;
        timing;
        if (closure_0) {
          num = 44;
        }
        const obj = { height: withTiming(num) };
        return obj;
      };
      fn.__closure = {
        withTiming: require("timing").withTiming,
        hasError: null != error && "" !== error,
        ERROR_HEIGHT: 44,
      };
      fn.__workletHash = 16862151134186;
      fn.__initData = __initData2;
      ({ withTiming: require("timing").withTiming, hasError: null != error && "" !== error, ERROR_HEIGHT: 44 });
      const animatedStyle = obj.useAnimatedStyle(fn);
      const items = [tmp.container, style, animatedStyle];
      const View = ReanimatedRexportDefault.View;
      return <View style={items}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default tmp3;
