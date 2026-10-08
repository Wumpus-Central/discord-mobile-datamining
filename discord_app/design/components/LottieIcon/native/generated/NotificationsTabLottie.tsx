// discord_app/design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx
import c from "../../../../../../_runtime/00576_c.js";
import LottieIcon from "../LottieIcon.tsx";
import _mod14068 from "../../../../../../_runtime/metro/14068__.js";
import _objectWithoutProperties from "../../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_2 = ["ref"];
const jsx = fn(21).jsx;
const layers = ["IconAnimation_Notifications_3D_LottieFix02"];
const items = [{ name: "all", start: 0, duration: 67 }];
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("design/components/LottieIcon/native/generated/NotificationsTabLottie.tsx");

export const NotificationsTabLottie = ReactCompilerGating.isReactCompilerEnabled()
  ? function NotificationsTabLottie(ref) {
      const cResult = c.c(7);
      if (cResult[0] !== ref) {
        const tmp8 = _objectWithoutProperties(ref.ref, closure_2);
        cResult[0] = ref.ref;
        cResult[1] = tmp8;
        cResult[2] = ref.ref;
        let tmp5 = ref;
        let tmp4 = tmp8;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmpResult = _mod14068;
        cResult[3] = tmpResult;
        let tmp9 = tmpResult;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4) {
        if (cResult[5] === tmp5) {
          let tmp11 = cResult[6];
        }
        return tmp11;
      }
      const merged = Object.assign(tmp4);
      const tmp13 = jsx(LottieIcon.LottieIcon, {
        dotLottie: tmp9,
        animation: "all",
        ref: tmp5,
        layers,
        markers: items,
      });
      cResult[4] = tmp4;
      cResult[5] = tmp5;
      cResult[6] = tmp13;
      tmp11 = tmp13;
      const obj2 = { dotLottie: tmp9, animation: "all", ref: tmp5, layers, markers: items };
    }
  : function NotificationsTabLottie(ref) {
      const merged = Object.assign(ref, Object.assign({ ref: 0 }));
      const merged1 = Object.assign(merged);
      return jsx(LottieIcon.LottieIcon, {
        dotLottie: _mod14068,
        animation: "all",
        ref: ref.ref,
        layers,
        markers: items,
      });
    };
