// discord_app/modules/user_profile/native/UserProfilePrivateBanner.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_ColorUtils from "../../../../discord_common/js/shared/utils/ColorUtils.tsx";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import LockIcon2 from "../../../design/components/Icon/native/redesign/generated/LockIcon.tsx";
import Constants from "Constants.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let primaryColor;

let closure_4;
let hasOwnProperty;
let obj2;
const View = react_native.View;
const PROFILE_TOP_LAYER_Z_INDEX = Constants.PROFILE_TOP_LAYER_Z_INDEX;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let obj = { banner: obj2 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: 6,
  paddingTop: 18,
  paddingBottom: nativeDefault.space.PX_12,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  position: "relative",
  zIndex: PROFILE_TOP_LAYER_Z_INDEX,
};
let closure_6 = createStyles.createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (primaryColor) => {
      let intl;
      let items;
      let tmp5;
      let tmpResult;
      const obj = react2;
      const cResult = obj.c(9);
      primaryColor = primaryColor.primaryColor;
      const tmp4 = closure_6();
      if (cResult[0] !== primaryColor) {
        let tmp7 = null != primaryColor;
        if (tmp7) {
          const obj2 = { backgroundColor: tmpResult.int2hex(primaryColor) };
          tmp7 = obj2;
          tmpResult = utils_ColorUtils;
        }
        cResult[0] = primaryColor;
        cResult[1] = tmp7;
        tmp5 = tmp7;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.banner) {
        let tmp8;
        let tmp10;
        let tmp14;
        let tmp17;
        if (cResult[3] === tmp5) {
          tmp8 = cResult[4];
        }
        const _Symbol = Symbol;
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT };
          const LockIcon = LockIcon2.LockIcon;
          const tmp13 = React3(LockIcon, obj3);
          cResult[5] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[5];
        }
        const _Symbol2 = Symbol;
        if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl2.t.KPnd2O) };
          const Text = Text_Text.Text;
          intl = intl2.intl;
          const tmp16 = React3(Text, obj4);
          cResult[6] = tmp16;
          tmp14 = tmp16;
        } else {
          tmp14 = cResult[6];
        }
        if (cResult[7] !== tmp8) {
          const obj5 = { style: tmp8, children: items };
          items = [tmp10, tmp14];
          const tmp20 = hasOwnProperty(View, obj5);
          cResult[7] = tmp8;
          cResult[8] = tmp20;
          tmp17 = tmp20;
        } else {
          tmp17 = cResult[8];
        }
        return tmp17;
      }
      const items1 = [tmp4.banner, tmp5];
      cResult[2] = tmp4.banner;
      cResult[3] = tmp5;
      cResult[4] = items1;
      tmp8 = items1;
    }
  : (primaryColor) => {
      let intl;
      let items1;
      let obj2;
      primaryColor = primaryColor.primaryColor;
      const items = [closure_6().banner];
      let tmp3 = null != primaryColor;
      if (tmp3) {
        const obj = { backgroundColor: obj2.int2hex(primaryColor) };
        tmp3 = obj;
        obj2 = utils_ColorUtils;
      }
      const obj3 = { style: items, children: items1 };
      items[1] = tmp3;
      const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_DEFAULT };
      const LockIcon = LockIcon2.LockIcon;
      items1 = [React3(LockIcon, obj4)];
      const obj5 = { variant: "text-sm/medium", color: "text-default", children: intl.string(intl2.t.KPnd2O) };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items1[1] = React3(Text, obj5);
      return hasOwnProperty(View, obj3);
    };
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfilePrivateBanner.tsx");

export default tmp4;
