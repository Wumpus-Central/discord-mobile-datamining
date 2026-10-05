// discord_app/modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import ClydeIcon2 from "../../../design/components/Icon/native/redesign/generated/ClydeIcon.tsx";
import react from "../../../../_runtime/00019_react.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import PlatformUtils_mod from "../../../utils/PlatformUtils.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let PlatformUtils;
let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let space;
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let obj = { exclusiveBadge: obj2, exclusiveBadgeText: obj3 };
obj2 = {
  flexDirection: "row",
  alignItems: "center",
  textAlignVertical: "center",
  alignSelf: "flex-start",
  gap: nativeDefault.space.PX_4,
  borderRadius: nativeDefault.radii.round,
  paddingHorizontal: nativeDefault.space.PX_8,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
createStyles = createStyles.createStyles;
obj3 = {
  textTransform: "uppercase",
  fontSize: nativeDefault.space.PX_12,
  lineHeight: PlatformUtils ? space.PX_12 : space.PX_16,
};
PlatformUtils = PlatformUtils_mod;
PlatformUtils = PlatformUtils.isAndroid();
space = nativeDefault.space;
let closure_6 = createStyles(obj);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let items;
      let tmp11;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(7);
      const tmp4 = closure_6();
      const exclusiveBadge = tmp4.exclusiveBadge;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
        const ClydeIcon = ClydeIcon2.ClydeIcon;
        const tmp8 = React3(ClydeIcon, obj2);
        cResult[0] = tmp8;
        first = tmp8;
      } else {
        first = cResult[0];
      }
      const exclusiveBadgeText = tmp4.exclusiveBadgeText;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl2.intl;
        const stringResult = intl.string(intl2.t.RiDMFz);
        cResult[1] = stringResult;
        tmp9 = stringResult;
      } else {
        tmp9 = cResult[1];
      }
      if (cResult[2] !== tmp4.exclusiveBadgeText) {
        const obj3 = {
          variant: "text-xs/bold",
          color: "text-overlay-light",
          style: exclusiveBadgeText,
          children: tmp9,
        };
        const tmp13 = React3(Text_Text.Text, obj3);
        cResult[2] = tmp4.exclusiveBadgeText;
        cResult[3] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] === tmp4.exclusiveBadge) {
        let tmp14;
        if (cResult[5] === tmp11) {
          tmp14 = cResult[6];
        }
        return tmp14;
      }
      const obj4 = { style: exclusiveBadge, children: items };
      items = [first, tmp11];
      const tmp15 = hasOwnProperty(View, obj4);
      cResult[4] = tmp4.exclusiveBadge;
      cResult[5] = tmp11;
      cResult[6] = tmp15;
      tmp14 = tmp15;
    }
  : () => {
      let intl;
      let items;
      const tmp = closure_6();
      const obj = { style: tmp.exclusiveBadge, children: items };
      const obj2 = { size: "xs", color: nativeDefault.colors.WHITE };
      const ClydeIcon = ClydeIcon2.ClydeIcon;
      items = [React3(ClydeIcon, obj2)];
      const obj3 = {
        variant: "text-xs/bold",
        color: "text-overlay-light",
        style: tmp.exclusiveBadgeText,
        children: intl.string(intl2.t.RiDMFz),
      };
      const Text = Text_Text.Text;
      intl = intl2.intl;
      items[1] = React3(Text, obj3);
      return hasOwnProperty(View, obj);
    };
const result = size.fileFinishedImporting("modules/slayer_storefront/native/SocialLayerStorefrontBadges.tsx");

export const ExclusiveBadge = tmp6;
