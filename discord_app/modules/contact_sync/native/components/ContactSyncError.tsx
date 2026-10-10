// discord_app/modules/contact_sync/native/components/ContactSyncError.tsx
import ReanimatedRexportDefault from "../../../reanimated/ReanimatedRexport.tsx";
import timing from "../../../../design/animation/reanimated/timing/timing.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
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
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/contact_sync/native/components/ContactSyncError.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ContactSyncError(arg0) {
      const cResult = require("c").c(10);
      ({ style, error } = arg0);
      const tmp4 = closure_4();
      let tmp5 = null != error;
      if (tmp5) {
        tmp5 = "" !== error;
      }
      _require = tmp5;
      let obj = require("c");
      const fn = function s() {
        let num = 0;
        if (closure_0) {
          num = 44;
        }
        return { height: timing.withTiming(num) };
      };
      const tmpResult = require("ReanimatedRexport");
      fn.__closure = { withTiming: require("timing").withTiming, hasError: tmp5, ERROR_HEIGHT: 44 };
      fn.__workletHash = 14558247431913;
      fn.__initData = __initData;
      const animatedStyle = tmpResult.useAnimatedStyle(fn);
      if (cResult[0] === animatedStyle) {
        if (cResult[1] === style) {
          if (cResult[2] === tmp4.container) {
            let tmp7 = cResult[3];
          }
          if (cResult[4] === error) {
            if (cResult[5] === tmp4.error) {
              let tmp8 = cResult[6];
            }
            if (cResult[7] === tmp7) {
              if (cResult[8] === tmp8) {
                let tmp11 = cResult[9];
              }
              return tmp11;
            }
            const obj3 = { style: tmp7, children: tmp8 };
            const tmp14 = jsx(ReanimatedRexportDefault.View, { style: tmp7, children: tmp8 });
            cResult[7] = tmp7;
            cResult[8] = tmp8;
            cResult[9] = tmp14;
            tmp11 = tmp14;
          }
          const obj4 = {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            style: tmp4.error,
            children: error,
          };
          const tmp10 = jsx(tmp(5088).Text, {
            variant: "text-sm/medium",
            color: "text-feedback-critical",
            style: tmp4.error,
            children: error,
          });
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
      const obj2 = { withTiming: require("timing").withTiming, hasError: tmp5, ERROR_HEIGHT: 44 };
    }
  : function ContactSyncError(error) {
      error = error.error;
      _require = undefined;
      const tmp = closure_4();
      let tmp2 = null != error;
      if (tmp2) {
        tmp2 = "" !== error;
      }
      _require = tmp2;
      const fn = function l() {
        let num = 0;
        if (closure_0) {
          num = 44;
        }
        return { height: timing.withTiming(num) };
      };
      let obj = require("ReanimatedRexport");
      fn.__closure = { withTiming: require("timing").withTiming, hasError: tmp2, ERROR_HEIGHT: 44 };
      fn.__workletHash = 16862151134186;
      fn.__initData = __initData2;
      const animatedStyle = obj.useAnimatedStyle(fn);
      const obj3 = {
        style: null,
        children: jsx(require("Text/Text").Text, {
          variant: "text-sm/medium",
          color: "text-feedback-critical",
          style: tmp.error,
          children: error,
        }),
      };
      const items = [tmp.container, error.style, animatedStyle];
      obj3.style = items;
      return jsx(ReanimatedRexportDefault.View, {
        style: null,
        children: jsx(require("Text/Text").Text, {
          variant: "text-sm/medium",
          color: "text-feedback-critical",
          style: tmp.error,
          children: error,
        }),
      });
    };
