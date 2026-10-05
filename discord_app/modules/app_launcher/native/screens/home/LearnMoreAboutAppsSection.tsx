// discord_app/modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx
import react_native from "../../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import intl5 from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import TrackSectionHeaderDefault from "TrackSectionHeader.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

let visible;

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, body: { textAlign: "center" }, divider: obj3, linkButton: obj4 };
obj2 = {
  marginTop: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  paddingHorizontal: nativeDefault.space.PX_64,
};
createStyles = createStyles.createStyles;
obj3 = { height: nativeDefault.space.PX_16 };
obj4 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  paddingVertical: 12,
  paddingHorizontal: 16,
  minHeight: 48,
  justifyContent: "center",
  alignItems: "center",
};
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
let closure_8 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      let first;
      let intl4;
      let items;
      let tmp12;
      let tmp16;
      let tmp19;
      let tmp22;
      let tmp26;
      let tmp29;
      let tmp32;
      let tmp6;
      let tmp7;
      let tmp8;
      let obj = react2;
      const cResult = obj.c(26);
      visible = visible.visible;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const openURL = LinkingDefault.openURL;
          LinkingDefault;
          const obj = HelpdeskUtilsDefault;
          openURL(obj.getAppsSupportURL(constants.APPS_LEARN_MORE));
        };
        cResult[0] = fn;
        first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(intl5.t["kw8/Ec"]);
        const intl2 = intl5.intl;
        const stringResult1 = intl2.string(intl5.t.GZoV1O);
        const intl3 = intl5.intl;
        const obj2 = { sectionTitle: stringResult, sectionBody: stringResult1 };
        const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.xx5Sug, obj2);
        cResult[1] = stringResult1;
        cResult[2] = stringResult;
        cResult[3] = formatToPlainStringResult;
        tmp8 = formatToPlainStringResult;
        tmp7 = stringResult;
        tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp4.divider) {
        const obj3 = { style: tmp4.divider };
        const tmp15 = metroRequire(View, obj3);
        cResult[4] = tmp4.divider;
        cResult[5] = tmp15;
        tmp12 = tmp15;
      } else {
        tmp12 = cResult[5];
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = {
          accessibilityRole: "header",
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: tmp7,
        };
        const tmp18 = metroRequire(Text_Text.Text, obj4);
        cResult[6] = tmp18;
        tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== tmp4.body) {
        const obj5 = { variant: "text-xs/normal", color: "text-default", style: tmp4.body, children: tmp6 };
        const tmp21 = metroRequire(Text_Text.Text, obj5);
        cResult[7] = tmp4.body;
        cResult[8] = tmp21;
        tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== tmp4.divider) {
        const obj6 = { style: tmp4.divider };
        const tmp25 = metroRequire(View, obj6);
        cResult[9] = tmp4.divider;
        cResult[10] = tmp25;
        tmp22 = tmp25;
      } else {
        tmp22 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: intl4.string(intl5.t.Ye51oT),
        };
        const Text = Text_Text.Text;
        intl4 = intl5.intl;
        const tmp28 = metroRequire(Text, obj7);
        cResult[11] = tmp28;
        tmp26 = tmp28;
      } else {
        tmp26 = cResult[11];
      }
      if (cResult[12] !== tmp4.linkButton) {
        const obj8 = {
          style: tmp4.linkButton,
          onPress: first,
          accessibilityRole: "link",
          accessibilityLabel: tmp8,
          children: tmp26,
        };
        const tmp31 = metroRequire(Pressables.PressableHighlight, obj8);
        cResult[12] = tmp4.linkButton;
        cResult[13] = tmp31;
        tmp29 = tmp31;
      } else {
        tmp29 = cResult[13];
      }
      if (cResult[14] !== tmp4.divider) {
        const obj9 = { style: tmp4.divider };
        const tmp35 = metroRequire(View, obj9);
        cResult[14] = tmp4.divider;
        cResult[15] = tmp35;
        tmp32 = tmp35;
      } else {
        tmp32 = cResult[15];
      }
      if (cResult[16] === tmp4.container) {
        if (cResult[17] === tmp12) {
          if (cResult[18] === tmp19) {
            if (cResult[19] === tmp22) {
              if (cResult[20] === tmp29) {
                let tmp36;
                if (cResult[21] === tmp32) {
                  tmp36 = cResult[22];
                }
                if (cResult[23] === tmp36) {
                  let tmp38;
                  if (cResult[24] === visible) {
                    tmp38 = cResult[25];
                  }
                  return tmp38;
                }
                const obj10 = {
                  sectionName: AppLauncherTypes.AppLauncherSectionName.NEW_TO_APPS,
                  numItems: 1,
                  numVisibleItems: 1,
                  viewed: visible,
                  children: tmp36,
                };
                const tmp41 = TrackSectionHeaderDefault;
                const tmp42 = metroRequire(tmp41, obj10);
                cResult[23] = tmp36;
                cResult[24] = visible;
                cResult[25] = tmp42;
                tmp38 = tmp42;
              }
            }
          }
        }
      }
      const obj11 = { style: tmp4.container, children: items };
      items = [tmp12, tmp16, tmp19, tmp22, tmp29, tmp32];
      const tmp37 = metroImportDefault(View, obj11);
      cResult[16] = tmp4.container;
      cResult[17] = tmp12;
      cResult[18] = tmp19;
      cResult[19] = tmp22;
      cResult[20] = tmp29;
      cResult[21] = tmp32;
      cResult[22] = tmp37;
      tmp36 = tmp37;
    }
  : (visible) => {
      let Text;
      let intl4;
      let items;
      let obj2;
      let obj7;
      visible = visible.visible;
      const tmp = closure_8();
      const callback = react.useCallback(() => {
        const openURL = LinkingDefault.openURL;
        LinkingDefault;
        const obj = HelpdeskUtilsDefault;
        openURL(obj.getAppsSupportURL(constants.APPS_LEARN_MORE));
      }, []);
      const intl = intl5.intl;
      const stringResult = intl.string(intl5.t["kw8/Ec"]);
      const intl2 = intl5.intl;
      const stringResult1 = intl2.string(intl5.t.GZoV1O);
      const intl3 = intl5.intl;
      let obj = {
        sectionName: AppLauncherTypes.AppLauncherSectionName.NEW_TO_APPS,
        numItems: 1,
        numVisibleItems: 1,
        viewed: visible,
        children: metroImportDefault(View, obj2),
      };
      const formatToPlainStringResult = intl3.formatToPlainString(intl5.t.xx5Sug, {
        sectionTitle: stringResult,
        sectionBody: stringResult1,
      });
      obj2 = { style: tmp.container, children: items };
      items = [, , , , ,];
      const obj3 = { style: tmp.divider };
      const tmp6 = TrackSectionHeaderDefault;
      items[0] = metroRequire(View, obj3);
      items[1] = metroRequire(Text_Text.Text, {
        accessibilityRole: "header",
        variant: "heading-lg/bold",
        color: "mobile-text-heading-primary",
        children: stringResult,
      });
      const obj4 = { variant: "text-xs/normal", color: "text-default", style: tmp.body, children: stringResult1 };
      items[2] = metroRequire(Text_Text.Text, obj4);
      const obj5 = { style: tmp.divider };
      items[3] = metroRequire(View, obj5);
      const obj6 = {
        style: tmp.linkButton,
        onPress: callback,
        accessibilityRole: "link",
        accessibilityLabel: formatToPlainStringResult,
        children: metroRequire(Text, obj7),
      };
      const PressableHighlight = Pressables.PressableHighlight;
      obj7 = {
        variant: "text-md/semibold",
        color: "mobile-text-heading-primary",
        children: intl4.string(intl5.t.Ye51oT),
      };
      Text = Text_Text.Text;
      intl4 = intl5.intl;
      items[4] = metroRequire(PressableHighlight, obj6);
      const obj8 = { style: tmp.divider };
      items[5] = metroRequire(View, obj8);
      return metroRequire(tmp6, obj);
    };
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default tmp5;
