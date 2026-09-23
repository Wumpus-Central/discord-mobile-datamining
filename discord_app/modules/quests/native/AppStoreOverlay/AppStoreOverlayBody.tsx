// discord_app/modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef672 from "../../../../../_runtime/metro/00672__.js";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import AnalyticsActions from "../../lib/analytics/AnalyticsActions.tsx";
import AppStoreOverlayStatsCarouselDefault from "AppStoreOverlayStatsCarousel.tsx";
import AppStoreOverlayMediaCarouselDefault from "AppStoreOverlayMediaCarousel.tsx";
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const VerticalGradient = fn(1074).VerticalGradient;
let closure_6 = fn(7482).ACTION_SHEET_MINIMUM_BOTTOM_PADDING;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4827);
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
export const AppStoreOverlayBody = function AppStoreOverlayBody(arg0) {
  ({ metadata, onCarouselScroll, onOverlaySurfaceClick } = arg0);
  ({ onOpenReviews, onMediaGetGamePress } = arg0);
  const tmp = closure_10();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  const items = [onOverlaySurfaceClick];
  let tmp6 = null != headerUrl;
  const callback = noop.useCallback(() => {
    if (onOverlaySurfaceClick != null) {
      tmp(AnalyticsActions.AppStoreOverlaySurfaces.SEE_MORE);
    }
  }, items);
  if (tmp6) {
    const obj = { style: tmp.header, children: null };
    const obj2 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj3 = { uri: headerUrl };
    obj2.source = obj3;
    obj2.style = tmp.header;
    obj.children = closure_7(FastImageDefault, obj2);
    tmp6 = closure_7(View, obj);
  }
  const items1 = [tmp6];
  const items2 = [tmp.container];
  const obj4 = { style: items2, children: null };
  items2[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp13 = null != metadata.iconUrl;
  if (tmp13) {
    tmp13 = "" !== metadata.iconUrl;
  }
  if (tmp13) {
    const obj5 = { style: tmp.iconContainer, children: null };
    const obj6 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj7 = { uri: metadata.iconUrl };
    obj6.source = obj7;
    obj6.style = tmp.icon;
    obj5.children = closure_7(FastImageDefault, obj6);
    tmp13 = closure_7(View, obj5);
  }
  const items3 = [tmp13, , , ,];
  const obj8 = { style: tmp.textBlock, children: null };
  const items4 = [
    closure_7(onOverlaySurfaceClick(4823).Text, {
      variant: "heading-xl/bold",
      color: "mobile-text-heading-primary",
      accessibilityRole: "header",
      children: metadata.title,
    }),
  ];
  let tmp17Result = null != metadata.subtitle;
  if (tmp17Result) {
    tmp17Result = "" !== metadata.subtitle;
  }
  if (tmp17Result) {
    const obj10 = { variant: "text-sm/medium", color: "text-subtle", children: metadata.subtitle };
    tmp17Result = closure_7(onOverlaySurfaceClick(4823).Text, obj10);
  }
  items4[1] = tmp17Result;
  obj8.children = items4;
  items3[1] = closure_8(View, obj8);
  let tmp17Result3 = null != metadata.stats;
  if (tmp17Result3) {
    tmp17Result3 = metadata.stats.length > 0;
  }
  if (tmp17Result3) {
    const obj11 = { stats: metadata.stats, onRatingPress: onOpenReviews, onCarouselScroll };
    tmp17Result3 = closure_7(AppStoreOverlayStatsCarouselDefault, obj11);
  }
  items3[2] = tmp17Result3;
  let tmp4Result = null != metadata.media;
  if (tmp4Result) {
    tmp4Result = metadata.media.length > 0;
  }
  if (tmp4Result) {
    const obj12 = { style: tmp.mediaSection, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = onOverlaySurfaceClick(1115).intl;
    obj13.children = intl.string(onOverlaySurfaceClick(1115).t["EV1W/L"]);
    const items5 = [closure_7(onOverlaySurfaceClick(4823).Text, obj13)];
    const obj14 = { media: metadata.media, onGetGamePress: onMediaGetGamePress, onCarouselScroll };
    items5[1] = closure_7(AppStoreOverlayMediaCarouselDefault, obj14);
    obj12.children = items5;
    tmp4Result = closure_8(View, obj12);
  }
  items3[3] = tmp4Result;
  let tmp17Result4 = null != metadata.description;
  if (tmp17Result4) {
    tmp17Result4 = "" !== metadata.description;
  }
  if (tmp17Result4) {
    const obj15 = { description: metadata.description, onSeeMorePress: callback };
    tmp17Result4 = closure_7(AppStoreOverlayAboutSectionDefault, obj15);
  }
  const obj16 = { children: null };
  items3[4] = tmp17Result4;
  obj4.children = items3;
  items1[1] = closure_8(View, obj4);
  obj16.children = items1;
  return closure_8(closure_9, obj16);
};
export const AppStoreOverlayFooter = function AppStoreOverlayFooter(arg0) {
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = closure_10();
  const bottom = token(1612)().bottom;
  token = bottom(4524).useToken(token(576).colors.MOBILE_ACTIONSHEET_BACKGROUND);
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
    closure_7(token(5283), {
      pointerEvents: "none",
      style: tmp.footerGradient,
      colors: memo,
      start: VerticalGradient.START,
      end: VerticalGradient.END,
    }),
  ];
  const obj4 = { style: memo1, children: null };
  const obj5 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1115).intl;
  obj5.text = intl.string(bottom(1115).t.lwQdjB);
  obj5.onPress = onInstallPress;
  obj4.children = closure_7(bottom(5271).Button, obj5);
  items2[1] = closure_7(View, obj4);
  obj2.children = items2;
  return closure_8(View, obj2);
};
