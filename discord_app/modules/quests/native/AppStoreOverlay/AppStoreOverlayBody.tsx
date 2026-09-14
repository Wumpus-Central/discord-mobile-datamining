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
let closure_6 = fn(7254).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4636);
let obj2 = {
  container: {
    paddingTop: nativeDefault.space.PX_16,
    paddingHorizontal: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  },
  containerWithHeader: { paddingTop: 110 },
  iconContainer: null,
  icon: null,
  textBlock: null,
  mediaSection: null,
  header: null,
  footer: null,
  footerGradient: null,
};
let size = {
  width: 84,
  height: 84,
  borderRadius: nativeDefault.radii.xl,
  overflow: "hidden",
  borderWidth: 6,
  borderColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
};
obj2.iconContainer = size;
obj2.icon = { width: 72, height: 72 };
let obj3 = {
  paddingTop: nativeDefault.space.PX_16,
  paddingHorizontal: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
obj2.textBlock = { gap: nativeDefault.space.PX_4 };
let obj4 = { gap: nativeDefault.space.PX_4 };
obj2.mediaSection = { gap: nativeDefault.space.PX_8 };
obj2.header = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
let obj5 = { gap: nativeDefault.space.PX_8 };
obj2.footer = {
  backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND,
  paddingHorizontal: nativeDefault.space.PX_16,
};
obj2.footerGradient = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_10 = createStyles.createStyles(obj2);
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
    const obj = { style: tmp.header, children: null };
    const obj2 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj3 = { uri: headerUrl };
    obj2.source = obj3;
    obj2.style = tmp.header;
    obj.children = React5(FastImageDefault, obj2);
    tmp5 = React5(View, obj);
  }
  const items = [tmp5];
  const items1 = [tmp.container];
  const obj4 = { style: items1, children: null };
  items1[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp12 = null != metadata.iconUrl;
  if (tmp12) {
    tmp12 = "" !== metadata.iconUrl;
  }
  if (tmp12) {
    const obj5 = { style: tmp.iconContainer, children: null };
    const obj6 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj7 = { uri: metadata.iconUrl };
    obj6.source = obj7;
    obj6.style = tmp.icon;
    obj5.children = React5(FastImageDefault, obj6);
    tmp12 = React5(View, obj5);
  }
  const items2 = [tmp12, , , ,];
  const obj8 = { style: tmp.textBlock, children: null };
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
    const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp16Result = React5(Text_Text.Text, obj10);
  }
  items3[1] = tmp16Result;
  obj8.children = items3;
  items2[1] = React6(View, obj8);
  let tmp16Result3 = null != metadata.stats;
  if (tmp16Result3) {
    tmp16Result3 = metadata.stats.length > 0;
  }
  if (tmp16Result3) {
    const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews };
    tmp16Result3 = React5(AppStoreOverlayStatsCarouselDefault, obj11);
  }
  items2[2] = tmp16Result3;
  let tmp3Result = null != metadata.media;
  if (tmp3Result) {
    tmp3Result = metadata.media.length > 0;
  }
  if (tmp3Result) {
    const obj12 = { style: tmp.mediaSection, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = util.intl;
    obj13.children = intl.string(util.t["EV1W/L"]);
    const items4 = [React5(Text_Text.Text, obj13)];
    const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress };
    items4[1] = React5(AppStoreOverlayMediaCarouselDefault, obj14);
    obj12.children = items4;
    tmp3Result = React6(View, obj12);
  }
  items2[3] = tmp3Result;
  let tmp16Result4 = null != metadata.description;
  if (tmp16Result4) {
    tmp16Result4 = "" !== metadata.description;
  }
  if (tmp16Result4) {
    const obj15 = { description: metadata.description };
    tmp16Result4 = React5(AppStoreOverlayAboutSectionDefault, obj15);
  }
  const obj16 = { children: null };
  items2[4] = tmp16Result4;
  obj4.children = items2;
  items[1] = React6(View, obj4);
  obj16.children = items;
  return React6(React7, obj16);
};
export const AppStoreOverlayFooter = function AppStoreOverlayFooter(arg0) {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1611)().bottom;
  token = bottom(4338).useToken(token(576).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = noop.useMemo(() => {
    const obj = _modDef672(token);
    const items = [_modDef672(token).alpha(0).hex(), token];
    return items;
  }, items);
  const obj2 = { style: tmp.footer, onLayout, children: null };
  const memo1 = noop.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_6) }), items1);
  const items2 = [
    closure_7(token(5068), {
      pointerEvents: "none",
      style: tmp.footerGradient,
      colors: memo,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
    }),
  ];
  const obj4 = { style: memo1, children: null };
  const obj5 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1114).intl;
  obj5.text = intl.string(bottom(1114).t.lwQdjB);
  obj5.onPress = onInstallPress;
  obj4.children = closure_7(bottom(5056).Button, obj5);
  items2[1] = closure_7(View, obj4);
  obj2.children = items2;
  return closure_8(View, obj2);
};
