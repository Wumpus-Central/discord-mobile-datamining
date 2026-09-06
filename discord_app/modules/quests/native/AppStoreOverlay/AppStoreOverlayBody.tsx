// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel.tsx";
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel.tsx";
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
let closure_6 = fn(7151).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  containerWithHeader: null,
  iconContainer: null,
  icon: null,
  textBlock: null,
  mediaSection: null,
  header: null,
  footer: null,
  footerGradient: null,
};
createStyles = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
createStyles.container = createStyles;
createStyles.containerWithHeader = { paddingTop: 110 };
let size = {
  width: 84,
  height: 84,
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  borderWidth: 6,
  borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
createStyles.iconContainer = size;
createStyles.icon = { width: 72, height: 72 };
createStyles.textBlock = { gap: nativeDefault.space.PX_4 };
let obj1 = { gap: nativeDefault.space.PX_4 };
createStyles.mediaSection = { gap: nativeDefault.space.PX_8 };
createStyles.header = {
  width: "100%",
  height: 156,
  overflow: "hidden",
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
};
let obj2 = { gap: nativeDefault.space.PX_8 };
createStyles.footer = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
};
createStyles.footerGradient = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_10 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = function AppStoreOverlayBody(metadata) {
  metadata = metadata.metadata;
  ({ onOpenReviews, onMediaGetGamePress } = metadata);
  const tmp = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  let tmp5 = null != headerUrl;
  if (tmp5) {
    let obj = { style: tmp.header, children: null };
    obj = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    obj = { uri: headerUrl };
    obj.source = obj;
    obj.style = tmp.header;
    obj.children = React5(FastImageDefault, obj);
    tmp5 = React5(View, obj);
  }
  const items = [tmp5];
  const items1 = [tmp.container];
  const obj1 = { style: items1, children: null };
  items1[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp12 = null != metadata.iconUrl;
  if (tmp12) {
    tmp12 = "" !== metadata.iconUrl;
  }
  if (tmp12) {
    const obj2 = { style: tmp.iconContainer, children: null };
    const obj3 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj4 = { uri: metadata.iconUrl };
    obj3.source = obj4;
    obj3.style = tmp.icon;
    obj2.children = React5(FastImageDefault, obj3);
    tmp12 = React5(View, obj2);
  }
  const items2 = [tmp12, , , ,];
  const obj5 = { style: tmp.textBlock, children: null };
  const items3 = [
    React5(Text_Text.Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: metadata.title,
    }),
  ];
  let tmp16Result = null != metadata.subtitle;
  if (tmp16Result) {
    tmp16Result = "" !== metadata.subtitle;
  }
  if (tmp16Result) {
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp16Result = React5(Text_Text.Text, obj7);
  }
  items3[1] = tmp16Result;
  obj5.children = items3;
  items2[1] = React6(View, obj5);
  tmp16Result = null != metadata.stats;
  if (tmp16Result) {
    tmp16Result = metadata.stats.length > 0;
  }
  if (tmp16Result) {
    const obj8 = { stats: metadata.stats, onRatingPress: onOpenReviews };
    tmp16Result = React5(AppStoreOverlayStatsCarouselDefault, obj8);
  }
  items2[2] = tmp16Result;
  let tmp3Result = null != metadata.media;
  if (tmp3Result) {
    tmp3Result = metadata.media.length > 0;
  }
  if (tmp3Result) {
    const obj9 = { style: tmp.mediaSection, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj10.children = intl.string(util.t["EV1W/L"]);
    const items4 = [React5(Text_Text.Text, obj10)];
    const obj11 = { media: metadata.media, onGetGamePress: onMediaGetGamePress };
    items4[1] = React5(AppStoreOverlayMediaCarouselDefault, obj11);
    obj9.children = items4;
    tmp3Result = React6(View, obj9);
  }
  items2[3] = tmp3Result;
  let tmp16Result1 = null != metadata.description;
  if (tmp16Result1) {
    tmp16Result1 = "" !== metadata.description;
  }
  if (tmp16Result1) {
    const obj12 = { description: metadata.description };
    tmp16Result1 = React5(AppStoreOverlayAboutSectionDefault, obj12);
  }
  const obj13 = { children: null };
  items2[4] = tmp16Result1;
  obj1.children = items2;
  items[1] = React6(View, obj1);
  obj13.children = items;
  return React6(React7, obj13);
};
export const AppStoreOverlayFooter = function AppStoreOverlayFooter(arg0) {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1611)().bottom;
  let obj = bottom(4262);
  token = obj.useToken(token(576).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), token];
    return items;
  }, items);
  obj = { style: tmp.footer, onLayout, children: null };
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_6) }), items1);
  obj = {
    pointerEvents: "none",
    style: tmp.footerGradient,
    colors: memo,
    start: VerticalGradient.START,
    end: VerticalGradient.END,
  };
  const items2 = [closure_7(token(4987), obj)];
  const obj1 = { style: memo1, children: null };
  const obj2 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1114).intl;
  obj2.text = intl.string(bottom(1114).t.lwQdjB);
  obj2.onPress = onInstallPress;
  obj1.children = closure_7(bottom(4975).Button, obj2);
  items2[1] = closure_7(View, obj1);
  obj.children = items2;
  return closure_8(View, obj);
};
