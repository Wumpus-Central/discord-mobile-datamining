// === Module 18374: HeroBlockHeader ===

// Module 18374 (HeroBlockHeader)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import QuestContent from "QuestContent" /* 5280 */;
import QuestUtils from "QuestUtils" /* 10061 */;
import noop from "module_19" /* 19 */;

require = fn;
function onTapEarnOrbs() {
  const obj = QuestUtils;
  obj.openQuestHome({ mergeExistingRoutes: true, fromContent: QuestContent.QuestContent.ORBS_SHOP_HERO_CTA });
}
const View = fn(17).View;
const Constants = fn(1072);
({ AnalyticEvents: closure_4, UserSettingsSections: hasOwnProperty, VerticalGradient: closure_6 } = Constants);
const jsxProd = fn(21);
({ jsx: metroImportDefault, Fragment: closure_8, jsxs: closure_9 } = jsxProd);
const result = 0.75 * fn(10349).COLLECTIBLES_SHOP_CARD_WIDTH;
const createStyles = fn(5243);
let obj2 = { heroBannerContainer: null, heroBannerImage: { width: "100%", height: "100%", resizeMode: "cover" }, orbsBackgroundGradient: { position: "absolute", top: 0, left: 0, bottom: 0, right: 0 }, fadeOutGradient: { position: "absolute", bottom: 0, height: "50%", width: "100%", zIndex: 1 }, heroInfoContainer: { display: "flex", justifyContent: "center", flex: 1, minWidth: "100%", maxHeight: 240, aspectRatio: 2.2 }, innerContainer: null, heroLogoContainer: null, heroLogo: null, heroViewAllIcon: null, orbsInnerContainer: null, orbsTitle: null };
const rect = { position: "absolute", top: 0, left: 0, width: "100%", maxHeight: 240 + result, aspectRatio: 1.4883720930232558 };
obj2.heroBannerContainer = rect;
let size = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", paddingHorizontal: nativeDefault.space.PX_16, width: "100%", height: "100%" };
obj2.innerContainer = size;
obj2.heroLogoContainer = { flex: 1, maxWidth: "80%", maxHeight: "80%" };
obj2.heroLogo = { resizeMode: "contain", maxHeight: "100%", maxWidth: "100%", aspectRatio: 1 };
obj2.heroViewAllIcon = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
let obj3 = { backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT, padding: nativeDefault.space.PX_8, borderRadius: nativeDefault.radii.round };
obj2.orbsInnerContainer = { paddingHorizontal: nativeDefault.space.PX_16, alignItems: "flex-start", gap: nativeDefault.space.PX_16 };
obj2.orbsTitle = { fontSize: 24, lineHeight: 30 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
const result1 = size.fileFinishedImporting("modules/collectibles/native/HeroBlockHeader.tsx");

export default function HeroBlockHeader(heroBlock) {
  heroBlock = heroBlock.heroBlock;
  const category = heroBlock.category;
  dependencyMap = heroBlock(1499).useNavigation();
  let obj = heroBlock(1499);
  const analyticsContext = heroBlock(9353).useCollectiblesAnalyticsContext();
  let obj2 = heroBlock(9353);
  const tmp5 = closure_10();
  const tmp4 = category(5484)();
  const token = heroBlock(5839).useToken(category(575).colors.BACKGROUND_BASE_LOW);
  let obj3 = heroBlock(5839);
  const obj4 = heroBlock(5240);
  const obj5 = heroBlock(5240);
  const hexToRgbaStringResult = obj4.hexToRgbaString(heroBlock(5240).hexWithOpacity(token, 0));
  const isOrbsExclusive = category.isOrbsExclusive;
  const token1 = heroBlock(5839).useToken(category(575).colors.BACKGROUND_BASE_LOWEST);
  const obj6 = heroBlock(5839);
  let isEligibleForQuests = heroBlock(10065).getIsEligibleForQuests();
  let heroBannerUrl = heroBlock.mobileHeroUrl;
  if (heroBannerUrl == null) {
    heroBannerUrl = heroBlock.heroBannerUrl;
  }
  const heroLogoUrl = heroBlock.heroLogoUrl;
  const tmp10 = null != heroBlock.mobileTitle ? heroBlock.mobileTitle : heroBlock.title;
  const tmp11 = null != heroBlock.mobileSummary ? heroBlock.mobileSummary : heroBlock.summary;
  if (!isOrbsExclusive) {
    const obj8 = { style: tmp5.heroBannerContainer, children: null };
    let tmp14Result = null != heroBannerUrl;
    if (tmp14Result) {
      let tmp16Result = isOrbsExclusive;
      if (isOrbsExclusive) {
        const obj9 = { colors: ["rgba(39, 30, 173, 0.3)", "transparent"], start: null, end: null, style: null };
        ({ START: obj10.start, END: obj10.end } = closure_6);
        obj9.style = tmp5.orbsBackgroundGradient;
        tmp16Result = closure_7(tmp3(5830), obj9);
      }
      const obj11 = { children: null };
      items = [tmp16Result, , ];
      const obj12 = { style: tmp5.heroBannerImage, source: null };
      const obj13 = { uri: heroBannerUrl };
      obj12.source = obj13;
      items[1] = closure_7(tmp3(5957), obj12);
      const obj15 = { colors: null, start: null, end: null, style: null };
      const items1 = [hexToRgbaStringResult, token1];
      obj15.colors = items1;
      ({ START: obj14.start, END: obj14.end } = closure_6);
      obj15.style = tmp5.fadeOutGradient;
      items[2] = closure_7(tmp3(5830), obj15);
      obj11.children = items;
      tmp14Result = closure_9(closure_8, obj11);
    }
    obj8.children = tmp14Result;
    const items2 = [closure_7(analyticsContext, obj8), ];
    const obj16 = { style: tmp5.heroInfoContainer, children: null };
    if (isOrbsExclusive) {
      const obj17 = { style: tmp5.orbsInnerContainer, children: null };
      let tmp16Result4 = null != tmp10;
      if (tmp16Result4) {
        const obj18 = { variant: "display-md", color: "mobile-text-heading-primary", style: tmp5.orbsTitle, children: tmp10 };
        tmp16Result4 = closure_7(tmp(5866).Text, obj18);
      }
      const items3 = [tmp16Result4, ];
      let tmp16Result5 = null != tmp11;
      if (tmp16Result5) {
        tmp16Result5 = "" !== tmp11;
      }
      if (tmp16Result5) {
        const obj19 = { variant: "body-md/medium", children: tmp11 };
        tmp16Result5 = closure_7(tmp(5866).Text, obj19);
      }
      const obj20 = { children: null };
      items3[1] = tmp16Result5;
      obj20.children = items3;
      const items4 = [closure_9(tmp17, obj20), ];
      if (isEligibleForQuests) {
        const obj21 = { variant: "tertiary", shrink: true, grow: false, size: "sm", text: null, onPress: null };
        const intl3 = tmp(1113).intl;
        obj21.text = intl3.string(tmp(1113).t.ynollq);
        obj21.onPress = onTapEarnOrbs;
        isEligibleForQuests = closure_7(tmp(5873).Button, obj21);
      }
      items4[1] = isEligibleForQuests;
      obj17.children = items4;
      let tmp14Result2 = closure_9(tmp17, obj17);
    } else {
      const obj22 = { accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, activeOpacity: 0.6, androidRippleConfig: null, hitSlop: 8, onPress: null, children: null };
      const intl = tmp(1113).intl;
      const obj23 = { category: category.name };
      obj22.accessibilityLabel = intl.formatToPlainString(tmp(1113).t.FNtLb3, obj23);
      const intl2 = tmp(1113).intl;
      obj22.accessibilityHint = intl2.string(tmp(1113).t.F8ma9x);
      const obj24 = { radius: tmp3(575).radii.lg };
      obj22.androidRippleConfig = obj24;
      obj22.onPress = function onTapViewAll() {
        let sessionId;
        if (analyticsContext != null) {
          sessionId = analyticsContext.sessionId;
        }
        const obj2 = { collectibles_shop_session_id: sessionId, sku_id: heroBlock.categoryStoreListingId, page_type: "mobile_home", page_section: null, page_category: null, tile_type: "HERO_BLOCK", tile_position: null, cta_name: null };
        let pageSection;
        if (analyticsContext != null) {
          pageSection = analyticsContext.pageSection;
        }
        obj2.page_section = pageSection;
        let pageCategory;
        if (analyticsContext != null) {
          pageCategory = analyticsContext.pageCategory;
        }
        obj2.page_category = pageCategory;
        let tilePosition;
        if (analyticsContext != null) {
          tilePosition = analyticsContext.tilePosition;
        }
        obj2.tile_position = String(tilePosition);
        AnalyticsUtilsDefault.track(constants.COLLECTIBLES_SHOP_ELEMENT_CLICKED, obj2);
        navigation.navigate(constants2.COLLECTIBLES_SHOP_VIEW_ALL_CATEGORY_ITEMS, { category, analyticsContext });
        const obj3 = { category, analyticsContext };
      };
      const obj25 = { style: tmp5.innerContainer, children: null };
      let tmp16Result6 = null != heroLogoUrl;
      if (tmp16Result6) {
        const obj26 = { style: tmp5.heroLogoContainer, children: null };
        const obj27 = { style: tmp5.heroLogo, source: null };
        const obj28 = { uri: heroLogoUrl };
        obj27.source = obj28;
        obj26.children = closure_7(tmp3(5957), obj27);
        tmp16Result6 = closure_7(tmp17, obj26);
      }
      const items5 = [tmp16Result6, ];
      const obj29 = { style: tmp5.heroViewAllIcon, children: closure_7(tmp(7897).ChevronSmallRightIcon, { size: "sm", color: "white" }) };
      items5[1] = closure_7(tmp17, obj29);
      obj25.children = items5;
      obj22.children = closure_9(tmp17, obj25);
      tmp14Result2 = closure_7(tmp(7364).PressableOpacity, obj22, category.storeListingId);
    }
    const obj50 = { children: null };
    obj16.children = tmp14Result2;
    items2[1] = closure_7(analyticsContext, obj16);
    obj50.children = items2;
    return closure_9(closure_8, obj50);
  } else {
    if (tmpResult.isThemeDark(tmp4)) {
      let tmp3Result = tmp3(18375);
    } else {
      tmp3Result = tmp3(18376);
    }
    tmpResult = tmp(5250);
  }
  const obj7 = heroBlock(10065);
};