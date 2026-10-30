// === Module 16935: HexagonCampaignQuestHomeHeader ===

// Module 16935 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 575 */;
import QuestTypes from "QuestTypes" /* 6778 */;
import AdCreativeType from "AdCreativeType" /* 6782 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7812 */;
import AnalyticsActions from "AnalyticsActions" /* 7855 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7864 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_6 = fn(5034).HEXAGON_CAMPAIGN_AD_CONTENT_ID;
const AnalyticEvents = fn(1072).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 }, banner: { width: "100%", aspectRatio: 1 }, bannerImage: { width: "100%", height: "100%" }, logo: null, sponsoredTag: null, cardShadow: null, card: null, cardArt: null, cardContent: null, cardBody: null };
let size = { position: "absolute", top: nativeDefault.space.PX_4, left: nativeDefault.space.PX_8, width: 88, height: 88 };
obj2.logo = size;
const rect = { position: "absolute", top: nativeDefault.space.PX_16, right: nativeDefault.space.PX_16, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_MUTED, backgroundColor: nativeDefault.colors.CONTROL_OVERLAY_SECONDARY_BACKGROUND_DEFAULT };
obj2.sponsoredTag = rect;
let obj3 = { width: "100%", maxWidth: 448, alignSelf: "center", marginBottom: nativeDefault.space.PX_40 };
let merged = Object.assign(nativeDefault.shadows.SHADOW_HIGH);
obj2.cardShadow = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj4 = { marginTop: -146, marginHorizontal: nativeDefault.space.PX_16, borderRadius: nativeDefault.radii.xl, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.card = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
let obj5 = { borderRadius: nativeDefault.radii.xl, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE, overflow: "hidden", backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
obj2.cardArt = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
let obj6 = { alignItems: "center", paddingTop: nativeDefault.space.PX_12 };
obj2.cardContent = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
obj2.cardBody = { opacity: 0.8 };
let closure_10 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default function HexagonCampaignQuestHomeHeader() {
  const tmp = closure_10();
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(5075);
  isHexagonCampaignQuestHomeHeaderEnabled = isHexagonCampaignQuestHomeHeaderEnabled(5038).useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5038);
  token = isHexagonCampaignQuestHomeHeaderEnabled(5591).useToken(token(575).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
  const memo = noop.useMemo(() => {
    const items = [0, 0.83, 1];
    return items.map((item) => {
      const obj = token(671)(closure_1_1);
      return token(671)(closure_1_1).alpha(item).css();
    });
  }, items);
  const effect = noop.useEffect(() => {
    if (isHexagonCampaignQuestHomeHeaderEnabled) {
      const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: null, sourceQuestContent: null };
      const obj3 = {};
      const obj = AnalyticsActions;
      const merged = Object.assign(AnalyticsTypes.getContentProperties(QuestTypes.QuestContent.QUEST_HOME_MOBILE, 0));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj2.properties = obj3;
      obj2.sourceQuestContent = QuestTypes.QuestContent.QUEST_HOME_MOBILE;
      obj.trackAdContentEvent(obj2);
    }
  }, items1);
  let tmp11Result = null;
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    let obj4 = { style: tmp.container, children: null };
    const obj5 = { style: tmp.banner, children: null };
    const obj6 = { source: tmp5(16947), style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    const items2 = [closure_8(tmp5(5712), obj6), , , ];
    const obj7 = { colors: memo, locations: [0.716, 0.823, 1], style: absoluteFill.absoluteFill, pointerEvents: "none" };
    items2[1] = closure_8(tmp5(5582), obj7);
    const obj8 = { source: null, style: null, resizeMode: "contain", accessible: false };
    const tmp5Result = tmp5(5712);
    obj8.source = tmp5(16948);
    obj8.style = tmp.logo;
    items2[2] = closure_8(tmp5(5712), obj8);
    const obj9 = { style: tmp.sponsoredTag, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = tmp2(1114).intl;
    obj10.children = intl.string(tmp5(4282).kVJc0r);
    obj9.children = closure_8(tmp2(5619).Text, obj10);
    items2[3] = closure_8(closure_5, obj9);
    obj5.children = items2;
    const items3 = [closure_9(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: null };
    const obj12 = { style: tmp.card, children: null };
    const obj13 = { style: tmp.cardArt, children: closure_8(tmp2(16949).BundleAbstractUI, { accessible: false }) };
    const items4 = [closure_8(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: tmp5(575).space.PX_12, style: tmp.cardContent, children: null };
    const obj15 = { direction: "vertical", spacing: tmp5(575).space.PX_8, children: null };
    const obj16 = { direction: "vertical", spacing: tmp5(575).space.PX_4, children: null };
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp2(1114).intl;
    obj17.children = intl2.string(tmp5(4282)["fShp/D"]);
    const items5 = [closure_8(tmp2(5619).Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: null };
    const intl3 = tmp2(1114).intl;
    obj18.children = intl3.string(tmp5(4282).XLqMej);
    items5[1] = closure_8(tmp2(5619).Text, obj18);
    obj16.children = items5;
    const items6 = [closure_9(tmp2(6022).Stack, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl4 = tmp2(1114).intl;
    const obj20 = {
      learnMoreHook(children, arg1) {
          return closure_1_8(isHexagonCampaignQuestHomeHeaderEnabled(5619).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: isHexagonCampaignQuestHomeHeaderEnabled(16430).openHexagonCampaignLearnMore, children }, arg1);
        }
    };
    obj19.children = intl4.format(tmp5(4282).uL0TOA, obj20);
    items6[1] = closure_8(tmp2(5619).Text, obj19);
    obj15.children = items6;
    const items7 = [closure_9(tmp2(6022).Stack, obj15), ];
    const tmp5Result2 = tmp5(5712);
    let str = "primary-overlay";
    if (tmp2Result.isThemeLight(obj.useThemeContext().theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: null, onPress: null, grow: true };
    const intl5 = tmp2(1114).intl;
    obj21.text = intl5.string(tmp5(4282)["KX1/jp"]);
    obj21.onPress = tmp9;
    items7[1] = closure_8(tmp2(5629).Button, obj21);
    obj14.children = items7;
    items4[1] = closure_9(tmp2(6022).Stack, obj14);
    obj12.children = items4;
    obj11.children = closure_9(closure_5, obj12);
    items3[1] = closure_8(closure_5, obj11);
    obj4.children = items3;
    tmp11Result = closure_9(closure_5, obj4);
    tmp2Result = tmp2(5016);
  }
  return tmp11Result;
};