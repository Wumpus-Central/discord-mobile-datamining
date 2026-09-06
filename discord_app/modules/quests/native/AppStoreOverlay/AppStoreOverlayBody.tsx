// === Module 11502: APP_STORE_OVERLAY_HEIGHT_RATIO ===

// Module 11502 (APP_STORE_OVERLAY_HEIGHT_RATIO)
import ThemesDefault from "Themes" /* 576 */;
import Text from "Text" /* 4556 */;
import preloadDefault from "preload" /* 5587 */;
import AppStoreOverlayStatCardItemDefault from "AppStoreOverlayStatCardItem" /* 11503 */;
import getMeasurableUrlDefault from "getMeasurableUrl" /* 11506 */;
import AppStoreOverlayAboutSectionDefault from "AppStoreOverlayAboutSection" /* 11511 */;
import closure_3 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { VerticalGradient } from "ME" /* 1074 */;
import { ACTION_SHEET_MINIMUM_BOTTOM_PADDING as closure_6 } from "ACTION_SHEET_START_HEIGHT_RATIO" /* 7151 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
createCacheKey = { container: null, containerWithHeader: null, iconContainer: null, icon: null, textBlock: null, mediaSection: null, header: null, footer: null, footerGradient: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_16, paddingHorizontal: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingTop: 110 };
createCacheKey[2] = { width: 84, height: 84, borderRadius: ThemesDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[3] = { width: 72, height: 72 };
let obj1 = { width: 84, height: 84, borderRadius: ThemesDefault.radii.xl, overflow: "hidden", borderWidth: 6, borderColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[4] = { gap: ThemesDefault.space.PX_4 };
let obj2 = { gap: ThemesDefault.space.PX_4 };
createCacheKey[5] = { gap: ThemesDefault.space.PX_8 };
createCacheKey[6] = { width: "100%", height: 156, overflow: "hidden", position: "absolute", top: 0, left: 0, right: 0 };
let obj3 = { gap: ThemesDefault.space.PX_8 };
createCacheKey[7] = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
createCacheKey[8] = { position: "absolute", top: -32, right: 0, left: 0, height: 32 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/quests/native/AppStoreOverlay/AppStoreOverlayBody.tsx");

export const APP_STORE_OVERLAY_HEIGHT_RATIO = 0.7;
export const APP_STORE_OVERLAY_FOOTER_GRADIENT_HEIGHT = 32;
export const AppStoreOverlayBody = function AppStoreOverlayBody(metadata) {
  metadata = metadata.metadata;
  ({ onOpenReviews, onMediaGetGamePress } = metadata);
  const tmp = callback3();
  let headerUrl = metadata.headerUrl;
  if (headerUrl == null) {
    headerUrl = null;
  }
  let tmp5 = null != headerUrl;
  if (tmp5) {
    let obj = { style: null, children: null };
    obj[0] = tmp.header;
    obj = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    obj = { uri: null };
    obj[0] = headerUrl;
    obj[0] = obj;
    obj[1] = tmp.header;
    obj[1] = callback(preloadDefault, obj);
    tmp5 = callback(View, obj);
  }
  const items = [tmp5, ];
  const items1 = [tmp.container, ];
  obj1 = { style: items1, children: null };
  items1[1] = null != headerUrl && tmp.containerWithHeader;
  let tmp12 = null != metadata.iconUrl;
  if (tmp12) {
    tmp12 = "" !== metadata.iconUrl;
  }
  if (tmp12) {
    const obj2 = { style: null, children: null };
    obj2[0] = tmp.iconContainer;
    const obj3 = { source: null, style: null, accessibilityIgnoresInvertColors: true };
    const obj4 = { uri: null };
    obj4[0] = metadata.iconUrl;
    obj3[0] = obj4;
    obj3[1] = tmp.icon;
    obj2[1] = callback(preloadDefault, obj3);
    tmp12 = callback(tmp10, obj2);
  }
  const items2 = [tmp12, , , , ];
  const obj5 = { style: tmp.textBlock, children: null };
  const items3 = [callback(Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", accessibilityRole: "header", children: metadata.title }), ];
  let tmp16Result = null != metadata.subtitle;
  if (tmp16Result) {
    tmp16Result = "" !== metadata.subtitle;
  }
  if (tmp16Result) {
    const obj7 = { variant: "text-sm/medium", color: "text-subtle", children: null };
    obj7[2] = metadata.subtitle;
    tmp16Result = tmp16(tmp17(4556).Text, obj7);
  }
  items3[1] = tmp16Result;
  obj5[1] = items3;
  items2[1] = closure_8(View, obj5);
  tmp16Result = null != metadata.stats;
  if (tmp16Result) {
    tmp16Result = metadata.stats.length > 0;
  }
  if (tmp16Result) {
    const obj8 = { stats: null, onRatingPress: null };
    obj8[0] = metadata.stats;
    obj8[1] = onOpenReviews;
    tmp16Result = tmp16(AppStoreOverlayStatCardItemDefault, obj8);
  }
  items2[2] = tmp16Result;
  let tmp3Result = null != metadata.media;
  if (tmp3Result) {
    tmp3Result = metadata.media.length > 0;
  }
  if (tmp3Result) {
    const obj9 = { style: null, children: null };
    obj9[0] = tmp.mediaSection;
    const obj10 = { variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    const intl = tmp17(1114).intl;
    obj10[2] = intl.string(tmp17(1114).t["EV1W/L"]);
    const items4 = [tmp16(tmp17(4556).Text, obj10), ];
    const obj11 = { media: null, onGetGamePress: null };
    obj11[0] = metadata.media;
    obj11[1] = onMediaGetGamePress;
    items4[1] = tmp16(getMeasurableUrlDefault, obj11);
    obj9[1] = items4;
    tmp3Result = tmp3(tmp10, obj9);
  }
  items2[3] = tmp3Result;
  let tmp16Result1 = null != metadata.description;
  if (tmp16Result1) {
    tmp16Result1 = "" !== metadata.description;
  }
  if (tmp16Result1) {
    const obj12 = { description: null };
    obj12[0] = metadata.description;
    tmp16Result1 = tmp16(AppStoreOverlayAboutSectionDefault, obj12);
  }
  const obj13 = { children: null };
  items2[4] = tmp16Result1;
  obj1[1] = items2;
  items[1] = closure_8(View, obj1);
  obj13[0] = items;
  return closure_8(closure_9, obj13);
};
export const AppStoreOverlayFooter = function AppStoreOverlayFooter(arg0) {
  let bottom;
  let token;
  ({ onInstallPress, onLayout } = arg0);
  const tmp = callback3();
  bottom = token(1611)().bottom;
  let obj = bottom(4262);
  token = obj.useToken(token(576).colors.MOBILE_ACTIONSHEET_BACKGROUND);
  let items = [token];
  const items1 = [bottom];
  const memo = React.useMemo(() => {
    const obj = token(closure_1_2[15])(token);
    const items = [token(closure_1_2[15])(token).alpha(0).hex(), token];
    return items;
  }, items);
  obj = { style: tmp.footer, onLayout, children: null };
  const memo1 = React.useMemo(() => ({ paddingBottom: Math.max(bottom, closure_1_6) }), items1);
  obj = { pointerEvents: "none", style: tmp.footerGradient, colors: memo, start: VerticalGradient.START, end: VerticalGradient.END };
  const items2 = [callback(token(4987), obj), ];
  obj1 = { style: memo1, children: null };
  const obj2 = { size: "lg", text: null, onPress: null };
  const intl = bottom(1114).intl;
  obj2[1] = intl.string(bottom(1114).t.lwQdjB);
  obj2[2] = onInstallPress;
  obj1[1] = callback(bottom(4975).Button, obj2);
  items2[1] = callback(View, obj1);
  obj[2] = items2;
  return callback2(View, obj);
};