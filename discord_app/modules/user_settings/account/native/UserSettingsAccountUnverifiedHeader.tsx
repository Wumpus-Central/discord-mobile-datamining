// discord_app/modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import EmailVerificationModalActionCreatorsDefault from "../../../../actions/native/EmailVerificationModalActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import UserStore from "../../../../stores/UserStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
function handleOpenEmailVerification() {
  const obj = EmailVerificationModalActionCreatorsDefault;
  obj.open();
}
function getBannerText(stateFromStores) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let tmp = null;
  if (null != stateFromStores) {
    let tmp4;
    if (null == stateFromStores.email) {
      const obj2 = { title: intl3.string(intl5.t["/yqgqs"]), button: intl4.string(intl5.t.ydw5nX) };
      intl3 = intl5.intl;
      intl4 = intl5.intl;
      tmp4 = obj2;
    } else {
      tmp4 = null;
      if (!stateFromStores.verified) {
        const obj = { title: intl.string(intl5.t["3sWbf3"]), button: intl2.string(intl5.t["13ofGu"]) };
        intl = intl5.intl;
        intl2 = intl5.intl;
        tmp4 = obj;
      }
    }
    tmp = tmp4;
  }
  return tmp;
}
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { accountWarning: obj2, accountWarningText: { flex: 1, lineHeight: 16 }, accountWarningButton: obj3 };
obj2 = {
  backgroundColor: nativeDefault.unsafe_rawColors.RED_400,
  height: 36,
  alignItems: "center",
  alignSelf: "stretch",
  flexDirection: "row",
  paddingHorizontal: 16,
};
createStyles = createStyles.createStyles;
obj3 = {
  borderWidth: 1,
  borderColor: nativeDefault.colors.WHITE,
  borderRadius: nativeDefault.radii.xs,
  paddingHorizontal: 8,
  paddingVertical: 4,
};
let closure_6 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let currentUser;
      let items1;
      let tmp5;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(14);
      const tmp4 = closure_6();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore];
        const fn = function u() {
          return currentUser.getCurrentUser();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      const tmpResult = get_initialized;
      const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
      if (cResult[2] !== stateFromStores) {
        const tmp11 = getBannerText(stateFromStores);
        cResult[2] = stateFromStores;
        cResult[3] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[3];
      }
      let tmp12 = null;
      if (null != tmp9) {
        if (cResult[4] === tmp9.title) {
          let tmp13;
          if (cResult[5] === tmp4.accountWarningText) {
            tmp13 = cResult[6];
          }
          if (cResult[7] === tmp9.button) {
            let tmp16;
            if (cResult[8] === tmp4.accountWarningButton) {
              tmp16 = cResult[9];
            }
            if (cResult[10] === tmp4.accountWarning) {
              if (cResult[11] === tmp13) {
                let tmp19;
                if (cResult[12] === tmp16) {
                  tmp19 = cResult[13];
                }
                tmp12 = tmp19;
              }
            }
            const obj2 = {
              accessibilityRole: "button",
              style: tmp4.accountWarning,
              onPress: handleOpenEmailVerification,
              children: items1,
            };
            items1 = [tmp13, tmp16];
            const tmp22 = hasOwnProperty(Pressables.PressableOpacity, obj2);
            cResult[10] = tmp4.accountWarning;
            cResult[11] = tmp13;
            cResult[12] = tmp16;
            cResult[13] = tmp22;
            tmp19 = tmp22;
          }
          const obj3 = {
            style: tmp4.accountWarningButton,
            variant: "text-xs/medium",
            color: "text-overlay-light",
            children: tmp9.button,
          };
          const tmp18 = React3(Text_Text.Text, obj3);
          cResult[7] = tmp9.button;
          cResult[8] = tmp4.accountWarningButton;
          cResult[9] = tmp18;
          tmp16 = tmp18;
        }
        const obj4 = {
          style: tmp4.accountWarningText,
          variant: "text-xs/bold",
          color: "text-overlay-light",
          children: tmp9.title,
        };
        const tmp15 = React3(Text_Text.Text, obj4);
        cResult[4] = tmp9.title;
        cResult[5] = tmp4.accountWarningText;
        cResult[6] = tmp15;
        tmp13 = tmp15;
      }
      return tmp12;
    }
  : () => {
      let currentUser;
      let items1;
      const tmp = closure_6();
      const items = [UserStore];
      const obj = get_initialized;
      const tmp4 = getBannerText(obj.useStateFromStores(items, () => currentUser.getCurrentUser()));
      let tmp5 = null;
      if (null != tmp4) {
        const obj2 = {
          accessibilityRole: "button",
          style: tmp.accountWarning,
          onPress: handleOpenEmailVerification,
          children: items1,
        };
        const PressableOpacity = Pressables.PressableOpacity;
        const obj3 = {
          style: tmp.accountWarningText,
          variant: "text-xs/bold",
          color: "text-overlay-light",
          children: tmp4.title,
        };
        items1 = [React3(Text_Text.Text, obj3)];
        const obj4 = {
          style: tmp.accountWarningButton,
          variant: "text-xs/medium",
          color: "text-overlay-light",
          children: tmp4.button,
        };
        items1[1] = React3(Text_Text.Text, obj4);
        tmp5 = hasOwnProperty(PressableOpacity, obj2);
      }
      return tmp5;
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/account/native/UserSettingsAccountUnverifiedHeader.tsx",
);

export default tmp5;
export { getBannerText };
