// discord_app/modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../../../utils/HelpdeskUtils.tsx";
import LinkingDefault from "../../../../../lib/native/Linking.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import AppLauncherTypes from "../../../AppLauncherTypes.tsx";
import TrackSectionHeaderDefault from "TrackSectionHeader.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = {
  container: {
    marginTop: nativeDefault.space.PX_32,
    borderRadius: nativeDefault.radii.lg,
    alignItems: "center",
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    paddingHorizontal: nativeDefault.space.PX_64,
  },
  body: { textAlign: "center" },
  divider: null,
  linkButton: null,
};
let obj3 = {
  marginTop: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  paddingHorizontal: nativeDefault.space.PX_64,
};
obj2.divider = { height: nativeDefault.space.PX_16 };
let obj4 = { height: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
obj2.linkButton = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  paddingVertical: 12,
  paddingHorizontal: 16,
  minHeight: 48,
  justifyContent: "center",
  alignItems: "center",
};
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  paddingVertical: 12,
  paddingHorizontal: 16,
  minHeight: 48,
  justifyContent: "center",
  alignItems: "center",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (visible) => {
      const cResult = c.c(26);
      visible = visible.visible;
      const tmp4 = closure_8();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function o() {
          const obj = LinkingDefault;
          obj.openURL(HelpdeskUtilsDefault.getAppsSupportURL(constants.APPS_LEARN_MORE));
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t["kw8/Ec"]);
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t.GZoV1O);
        const intl3 = util.intl;
        const obj2 = { sectionTitle: stringResult, sectionBody: stringResult1 };
        const formatToPlainStringResult = intl3.formatToPlainString(util.t.xx5Sug, obj2);
        cResult[1] = stringResult1;
        cResult[2] = stringResult;
        cResult[3] = formatToPlainStringResult;
        let tmp8 = formatToPlainStringResult;
        let tmp7 = stringResult;
        let tmp6 = stringResult1;
      } else {
        tmp6 = cResult[1];
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      if (cResult[4] !== tmp4.divider) {
        const obj3 = { style: tmp4.divider };
        const tmp15 = timestampProducer(View, obj3);
        cResult[4] = tmp4.divider;
        cResult[5] = tmp15;
        let tmp12 = tmp15;
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
        const tmp18 = timestampProducer(Text_Text.Text, obj4);
        cResult[6] = tmp18;
        let tmp16 = tmp18;
      } else {
        tmp16 = cResult[6];
      }
      if (cResult[7] !== tmp4.body) {
        const obj5 = { variant: "text-xs/normal", color: "text-default", style: tmp4.body, children: tmp6 };
        const tmp21 = timestampProducer(Text_Text.Text, obj5);
        cResult[7] = tmp4.body;
        cResult[8] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[8];
      }
      if (cResult[9] !== tmp4.divider) {
        const obj6 = { style: tmp4.divider };
        const tmp25 = timestampProducer(View, obj6);
        cResult[9] = tmp4.divider;
        cResult[10] = tmp25;
        let tmp22 = tmp25;
      } else {
        tmp22 = cResult[10];
      }
      if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
        const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
        const intl4 = util.intl;
        obj7.children = intl4.string(util.t.Ye51oT);
        const tmp28 = timestampProducer(Text_Text.Text, obj7);
        cResult[11] = tmp28;
        let tmp26 = tmp28;
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
        const tmp31 = timestampProducer(Pressables.PressableHighlight, obj8);
        cResult[12] = tmp4.linkButton;
        cResult[13] = tmp31;
        let tmp29 = tmp31;
      } else {
        tmp29 = cResult[13];
      }
      if (cResult[14] !== tmp4.divider) {
        const obj9 = { style: tmp4.divider };
        const tmp35 = timestampProducer(View, obj9);
        cResult[14] = tmp4.divider;
        cResult[15] = tmp35;
        let tmp32 = tmp35;
      } else {
        tmp32 = cResult[15];
      }
      if (cResult[16] === tmp4.container) {
        if (cResult[17] === tmp12) {
          if (cResult[18] === tmp19) {
            if (cResult[19] === tmp22) {
              if (cResult[20] === tmp29) {
                if (cResult[21] === tmp32) {
                  let tmp36 = cResult[22];
                }
                if (cResult[23] === tmp36) {
                  if (cResult[24] === visible) {
                    let tmp38 = cResult[25];
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
                const tmp42 = timestampProducer(TrackSectionHeaderDefault, obj10);
                cResult[23] = tmp36;
                cResult[24] = visible;
                cResult[25] = tmp42;
                tmp38 = tmp42;
              }
            }
          }
        }
      }
      const obj11 = { style: tmp4.container, children: null };
      const items = [tmp12, tmp16, tmp19, tmp22, tmp29, tmp32];
      obj11.children = items;
      const tmp37 = React5(View, obj11);
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
      const tmp = closure_8();
      const callback = noop.useCallback(() => {
        const obj = LinkingDefault;
        obj.openURL(HelpdeskUtilsDefault.getAppsSupportURL(constants.APPS_LEARN_MORE));
      }, []);
      const intl = util.intl;
      const stringResult = intl.string(util.t["kw8/Ec"]);
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.GZoV1O);
      const intl3 = util.intl;
      let obj = { sectionName: null, numItems: 1, numVisibleItems: 1, viewed: null, children: null };
      const formatToPlainStringResult = intl3.formatToPlainString(util.t.xx5Sug, {
        sectionTitle: stringResult,
        sectionBody: stringResult1,
      });
      obj.sectionName = AppLauncherTypes.AppLauncherSectionName.NEW_TO_APPS;
      obj.viewed = visible.visible;
      const obj2 = { style: tmp.container, children: null };
      const items = [
        timestampProducer(View, { style: tmp.divider }),
        timestampProducer(Text_Text.Text, {
          accessibilityRole: "header",
          variant: "heading-lg/bold",
          color: "mobile-text-heading-primary",
          children: stringResult,
        }),
        timestampProducer(Text_Text.Text, {
          variant: "text-xs/normal",
          color: "text-default",
          style: tmp.body,
          children: stringResult1,
        }),
        timestampProducer(View, { style: tmp.divider }),
        ,
      ];
      const obj6 = {
        style: tmp.linkButton,
        onPress: callback,
        accessibilityRole: "link",
        accessibilityLabel: formatToPlainStringResult,
        children: null,
      };
      const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
      const intl4 = util.intl;
      obj7.children = intl4.string(util.t.Ye51oT);
      obj6.children = timestampProducer(Text_Text.Text, obj7);
      items[4] = timestampProducer(Pressables.PressableHighlight, obj6);
      items[5] = timestampProducer(View, { style: tmp.divider });
      obj2.children = items;
      obj.children = React5(View, obj2);
      return timestampProducer(TrackSectionHeaderDefault, obj);
    };
