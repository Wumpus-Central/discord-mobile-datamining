// === Module 18530: TwelveDaysNotice ===

// Module 18530 (TwelveDaysNotice)
import nativeDefault from "native" /* 575 */;
import ConstantsIOS from "ConstantsIOS" /* 1092 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1264 */;
import LinearGradientDefault from "LinearGradient" /* 5893 */;
import useTrackImpression from "useTrackImpression" /* 6338 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
function NoticeGradient() {
  const obj = { colors, start: ConstantsIOS.HorizontalGradient.START, end: ConstantsIOS.HorizontalGradient.END, style: absoluteFill.absoluteFill, pointerEvents: "none" };
  return React6(LinearGradientDefault, obj);
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const UserSettingsSections = fn(1072).UserSettingsSections;
const ContentDismissActionType = fn(5152).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: closure_10 } = jsxProd);
const colors = ["rgba(14, 56, 100, 0.7)", "rgba(6, 138, 185, 0.7)"];
const TextVariantsFlat = fn(5930).TextVariantsFlat;
const found = TextVariantsFlat.find((name) => "body-sm/normal" === name.name);
let lineHeight;
if (found != null) {
  lineHeight = found.lineHeight;
}
const createStyles = fn(5306);
let obj2 = { nagbar: null, nagbarContent: null, nagbarText: null, indexNotice: null, indexNoticeIcon: null, indexNoticeCopy: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, zIndex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, overflow: "hidden" };
obj2.nagbar = rect;
obj2.nagbarContent = { flex: 1, alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.nagbarText = { flex: 1 };
let obj3 = { flex: 1, alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
obj2.indexNotice = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.indexNoticeIcon = { height: lineHeight, justifyContent: "center" };
let obj4 = { flexDirection: "row", alignItems: "flex-start", gap: nativeDefault.space.PX_8, padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
obj2.indexNoticeCopy = { flex: 1, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles.createStyles(obj2);
let items = [fn(5139).DismissibleContent.SHOP_TWELVE_DAYS_MOBILE_HOME_NAGBAR];
let closure_14 = [];
const constants = { SHOP_HOME: "shop_home", COLLECTION_INDEX: "collection_index" };
const size = fn(2);
const result = size.fileFinishedImporting("modules/collectibles/native/TwelveDaysNotice.tsx");

export (collectionSkuId) => {
  collectionSkuId = collectionSkuId.collectionSkuId;
  let collectiblesAnalyticsContext;
  _slicedToArray = undefined;
  const tmp = closure_12();
  const navigation = collectionSkuId(collectiblesAnalyticsContext[16]).useNavigation();
  const obj = collectionSkuId(collectiblesAnalyticsContext[16]);
  collectiblesAnalyticsContext = collectionSkuId(collectiblesAnalyticsContext[10]).useCollectiblesAnalyticsContext();
  const obj2 = collectionSkuId(collectiblesAnalyticsContext[10]);
  let enabled = collectionSkuId(collectiblesAnalyticsContext[17]).useShopTwelveDaysPromoConfig("TwelveDaysHomeNagbar").enabled;
  const obj3 = collectionSkuId(collectiblesAnalyticsContext[17]);
  const obj4 = collectionSkuId(collectiblesAnalyticsContext[18]);
  const tmp8 = _slicedToArray(collectionSkuId(collectiblesAnalyticsContext[18]).useSelectedDismissibleContent(enabled ? items : closure_14), 2)[1];
  _slicedToArray = tmp8;
  if (enabled) {
    enabled = null != tmp7;
  }
  const SHOP_HOME = constants.SHOP_HOME;
  closure_129_0 = SHOP_HOME;
  closure_129_1 = collectionSkuId;
  closure_129_2 = enabled;
  closure_129_3 = undefined;
  closure_129_4 = undefined;
  const tmp6 = _slicedToArray(collectionSkuId(collectiblesAnalyticsContext[18]).useSelectedDismissibleContent(enabled ? items : closure_14), 2);
  const collectiblesAnalyticsContext1 = collectionSkuId(collectiblesAnalyticsContext[10]).useCollectiblesAnalyticsContext();
  let sessionId;
  if (collectiblesAnalyticsContext1 != null) {
    sessionId = collectiblesAnalyticsContext1.sessionId;
  }
  closure_129_3 = sessionId;
  const analyticsLocations = navigation(tmp3[11])().analyticsLocations;
  closure_129_4 = analyticsLocations;
  items = [enabled, SHOP_HOME, collectionSkuId, sessionId, analyticsLocations];
  const effect = noop.useEffect(() => {
    if (enabled) {
      const obj2 = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_PROMO_NOTICE, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: null };
      const obj3 = { surface: COLLECTION_INDEX, sku_id: collectionSkuId, shop_session_id: sessionId, location_stack: analyticsLocations };
      obj2.properties = obj3;
      useTrackImpression.trackImpression(obj2, false, true);
    }
  }, items);
  const items1 = [navigation, collectionSkuId, collectiblesAnalyticsContext];
  [][0] = tmp8;
  const callback = noop.useCallback(() => {
    navigation.navigate(UserSettingsSections.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { categorySkuId: collectionSkuId, analyticsContext: collectiblesAnalyticsContext });
  }, items1);
  let tmp16 = null;
  if (enabled) {
    const obj5 = { style: tmp.nagbar, children: null };
    const items2 = [closure_9(NoticeGradient, {}), , ];
    const obj6 = { style: tmp.nagbarContent, accessibilityRole: "button", accessibilityHint: null, onPress: null, children: null };
    const intl = tmp2(tmp3[20]).intl;
    obj6.accessibilityHint = intl.string(tmp2(tmp3[20]).t.F8ma9x);
    obj6.onPress = callback;
    const obj7 = { size: "xs", color: tmp12(tmp3[8]).colors.ICON_OVERLAY_LIGHT };
    const items3 = [closure_9(tmp2(tmp3[21]).TagIcon, obj7), ];
    const obj8 = { variant: "body-sm/semibold", color: "text-overlay-light", lineClamp: 2, style: tmp.nagbarText, children: null };
    const intl2 = tmp2(tmp3[20]).intl;
    obj8.children = intl2.string(tmp2(tmp3[20]).t.htSz0L);
    items3[1] = closure_9(tmp2(tmp3[22]).Text, obj8);
    obj6.children = items3;
    items2[1] = closure_10(tmp2(tmp3[19]).PressableOpacity, obj6);
    const obj9 = { variant: "icon-only", size: "sm", icon: null, accessibilityLabel: null, onPress: null };
    const obj10 = { size: "sm", color: tmp12(tmp3[8]).colors.ICON_OVERLAY_LIGHT };
    obj9.icon = closure_9(tmp2(tmp3[24]).XSmallIcon, obj10);
    const intl3 = tmp2(tmp3[20]).intl;
    obj9.accessibilityLabel = intl3.string(tmp2(tmp3[20]).t.WAI6xu);
    obj9.onPress = tmp15;
    items2[2] = closure_9(tmp2(tmp3[23]).IconButton, obj9);
    obj5.children = items2;
    tmp16 = closure_10(closure_6, obj5);
  }
  return tmp16;
}
export (collectionSkuId) => {
  collectionSkuId = collectionSkuId.collectionSkuId;
  const tmp = closure_12();
  enabled = COLLECTION_INDEX(enabled[17]).useShopTwelveDaysPromoConfig("TwelveDaysIndexNotice").enabled;
  COLLECTION_INDEX = constants.COLLECTION_INDEX;
  let analyticsLocations;
  let obj = COLLECTION_INDEX(enabled[17]);
  const collectiblesAnalyticsContext = COLLECTION_INDEX(enabled[10]).useCollectiblesAnalyticsContext();
  let sessionId;
  if (collectiblesAnalyticsContext != null) {
    sessionId = collectiblesAnalyticsContext.sessionId;
  }
  analyticsLocations = collectionSkuId(tmp3[11])().analyticsLocations;
  items = [enabled, COLLECTION_INDEX, collectionSkuId, sessionId, analyticsLocations];
  const effect = analyticsLocations.useEffect(() => {
    if (enabled) {
      const obj2 = { name: discord_common_AnalyticsUtils.ImpressionNames.SHOP_PROMO_NOTICE, type: discord_common_AnalyticsUtils.ImpressionTypes.VIEW, properties: null };
      const obj3 = { surface: COLLECTION_INDEX, sku_id: collectionSkuId, shop_session_id: sessionId, location_stack: analyticsLocations };
      obj2.properties = obj3;
      useTrackImpression.trackImpression(obj2, false, true);
    }
  }, items);
  let tmp8 = null;
  if (enabled) {
    let obj3 = { style: tmp.indexNotice, children: null };
    const items1 = [closure_9(NoticeGradient, {}), , ];
    const obj4 = { style: tmp.indexNoticeIcon, children: null };
    const obj5 = { size: "xs", color: collectionSkuId(tmp3[8]).colors.ICON_OVERLAY_LIGHT };
    obj4.children = closure_9(tmp2(tmp3[21]).TagIcon, obj5);
    items1[1] = closure_9(closure_6, obj4);
    const obj6 = { style: tmp.indexNoticeCopy, children: null };
    const obj7 = { variant: "body-sm/semibold", color: "text-overlay-light", children: null };
    const intl = tmp2(tmp3[20]).intl;
    obj7.children = intl.string(tmp2(tmp3[20]).t.htSz0L);
    const items2 = [closure_9(tmp2(tmp3[22]).Text, obj7), ];
    const obj8 = { variant: "body-sm/normal", color: "text-overlay-light", children: null };
    const intl2 = tmp2(tmp3[20]).intl;
    obj8.children = intl2.string(tmp2(tmp3[20]).t.acMr0Q);
    items2[1] = closure_9(tmp2(tmp3[22]).Text, obj8);
    obj6.children = items2;
    items1[2] = closure_10(closure_6, obj6);
    obj3.children = items1;
    tmp8 = closure_10(closure_6, obj3);
  }
  return tmp8;
}