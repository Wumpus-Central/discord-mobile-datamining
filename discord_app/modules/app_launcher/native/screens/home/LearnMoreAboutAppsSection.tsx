// discord_app/modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx
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
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { container: null, body: null, divider: null, linkButton: null };
createStyles = {
  marginTop: nativeDefault.space.PX_32,
  borderRadius: nativeDefault.radii.lg,
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  paddingHorizontal: nativeDefault.space.PX_64,
};
createStyles.container = createStyles;
createStyles.body = { textAlign: "center" };
createStyles.divider = { height: nativeDefault.space.PX_16 };
const obj1 = { height: nativeDefault.space.PX_16 };
const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
createStyles.linkButton = {
  borderRadius: nativeDefault.radii.round,
  backgroundColor: nativeDefault.colors.CONTROL_SECONDARY_BACKGROUND_DEFAULT,
  paddingVertical: 12,
  paddingHorizontal: 16,
  minHeight: 48,
  justifyContent: "center",
  alignItems: "center",
};
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/app_launcher/native/screens/home/LearnMoreAboutAppsSection.tsx");

export default function LearnMoreAboutAppsSection(visible) {
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
  obj = { style: tmp.container, children: null };
  obj = { style: tmp.divider };
  const items = [
    timestampProducer(View, obj),
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
  const obj3 = {
    style: tmp.linkButton,
    onPress: callback,
    accessibilityRole: "link",
    accessibilityLabel: formatToPlainStringResult,
    children: null,
  };
  const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = util.intl;
  obj4.children = intl4.string(util.t.Ye51oT);
  obj3.children = timestampProducer(Text_Text.Text, obj4);
  items[4] = timestampProducer(Pressables.PressableHighlight, obj3);
  items[5] = timestampProducer(View, { style: tmp.divider });
  obj.children = items;
  obj.children = React5(View, obj);
  return timestampProducer(TrackSectionHeaderDefault, obj);
}
