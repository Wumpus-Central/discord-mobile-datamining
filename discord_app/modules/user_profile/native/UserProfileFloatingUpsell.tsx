// discord_app/modules/user_profile/native/UserProfileFloatingUpsell.tsx
import c from "../../../../_runtime/00576_c.js";
import useSafeAreaInsetsDefault from "../../safe_area/useSafeAreaInsets.native.tsx";
import UserProfileUpsellCardV2 from "UserProfileUpsellCardV2.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";

const UserProfileUpsellCardV2Default = UserProfileUpsellCardV2;

require = fn;
const Constants = fn(6891);
({ FLOATING_UPSELL_HEIGHT: hasOwnProperty, PROFILE_SIDE_PADDING: metroRequire } = Constants);
const jsx = fn(21).jsx;
const createStyles = fn(5090);
let closure_8 = createStyles.createStyles((bottom) => {
  const obj = {
    container: {
      position: "absolute",
      bottom,
      start: 0,
      end: 0,
      marginHorizontal: timestampProducer - UserProfileUpsellCardV2.GRADIENT_BORDER_WIDTH,
    },
  };
  return obj;
});
fn(558);
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useFloatingUpsellHeight() {
      const cResult = c.c(3);
      [tmp3, require] = noop.useState(hasOwnProperty);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n(nativeEvent) {
          return require(nativeEvent.nativeEvent.layout.height);
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp3) {
        const obj2 = { height: tmp3, onLayout: first };
        cResult[1] = tmp3;
        cResult[2] = obj2;
        let tmp5 = obj2;
      } else {
        tmp5 = cResult[2];
      }
      return tmp5;
    }
  : function useFloatingUpsellHeight() {
      const tmp = _slicedToArray(noop.useState(hasOwnProperty), 2);
      closure_0 = tmp[1];
      return {
        height: tmp[0],
        onLayout: noop.useCallback((nativeEvent) => closure_0(nativeEvent.nativeEvent.layout.height), []),
      };
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileFloatingUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserProfileFloatingUpsell(arg0) {
      const cResult = c.c(3);
      const tmp4 = closure_8(useSafeAreaInsetsDefault().bottom);
      if (cResult[0] === arg0) {
        if (cResult[1] === tmp4.container) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const obj2 = { style: tmp4.container };
      const merged = Object.assign(arg0);
      const tmp8 = jsx(UserProfileUpsellCardV2Default, { style: tmp4.container });
      cResult[0] = arg0;
      cResult[1] = tmp4.container;
      cResult[2] = tmp8;
      tmp5 = tmp8;
      const tmp3Result = UserProfileUpsellCardV2Default;
    }
  : function UserProfileFloatingUpsell(arg0) {
      const tmp = closure_8(useSafeAreaInsetsDefault().bottom);
      const obj = { style: closure_8(useSafeAreaInsetsDefault().bottom).container };
      const merged = Object.assign(arg0);
      return jsx(UserProfileUpsellCardV2Default, { style: closure_8(useSafeAreaInsetsDefault().bottom).container });
    };
export const useFloatingUpsellHeight = tmp3;
