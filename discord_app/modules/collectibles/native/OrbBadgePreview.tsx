// discord_app/modules/collectibles/native/OrbBadgePreview.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import useCurrentUser from "../hooks/useCurrentUser.tsx";
import collectibles_CollectiblesUtils from "CollectiblesUtils.tsx";
import UserProfilePreviewDefault from "../../user_profile/native/UserProfilePreview.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const View = react_native.View;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ container: { flex: 1, justifyContent: "center", alignItems: "center" } });
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp6;
      let tmp7;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_5();
      const obj2 = useCurrentUser;
      const currentUser = obj2.useCurrentUser();
      const container = tmp4.container;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [];
        const tmpResult = collectibles_CollectiblesUtils;
        items[0] = tmpResult.createOrbProfileBadge();
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.bxcI6Y);
        cResult[0] = items;
        cResult[1] = stringResult;
        tmp6 = items;
        tmp7 = stringResult;
      } else {
        [tmp6, tmp7] = cResult;
      }
      if (cResult[2] !== currentUser) {
        const tmp12 = jsx(UserProfilePreviewDefault, {
          compact: true,
          user: currentUser,
          additionalBadges: tmp6,
          accessibilityLabel: tmp7,
        });
        cResult[2] = currentUser;
        cResult[3] = tmp12;
        tmp9 = tmp12;
      } else {
        tmp9 = cResult[3];
      }
      if (cResult[4] === tmp4.container) {
        let tmp13;
        if (cResult[5] === tmp9) {
          tmp13 = cResult[6];
        }
        return tmp13;
      }
      const tmp14 = <View style={container}>{tmp9}</View>;
      cResult[4] = tmp4.container;
      cResult[5] = tmp9;
      cResult[6] = tmp14;
      tmp13 = tmp14;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_5();
      const obj = useCurrentUser;
      const currentUser = obj.useCurrentUser();
      ({ compact: true, user: currentUser, additionalBadges: items, accessibilityLabel: intl.string(intl2.t.bxcI6Y) });
      UserProfilePreviewDefault;
      items = [];
      const obj4 = collectibles_CollectiblesUtils;
      items[0] = obj4.createOrbProfileBadge();
      intl = intl2.intl;
      return <View style={tmp.container}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/collectibles/native/OrbBadgePreview.tsx");

export const OrbBadgePreview = tmp3;
