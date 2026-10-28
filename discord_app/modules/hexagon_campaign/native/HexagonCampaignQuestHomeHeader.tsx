// === Module 16643: HexagonCampaignQuestHomeHeader ===

// Module 16643 (HexagonCampaignQuestHomeHeader)
import nativeDefault from "native" /* 587 */;
import _modDef683 from "module_683" /* 683 */;
import QuestTypes from "QuestTypes" /* 6748 */;
import AdCreativeType from "AdCreativeType" /* 6752 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7785 */;
import AnalyticsActions from "AnalyticsActions" /* 7827 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7836 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const adContentId = fn(5029).HEXAGON_CAMPAIGN_AD_CONTENT_ID;
const AnalyticEvents = fn(1084).AnalyticEvents;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5004);
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
const ReactCompilerGating = fn(558);
let obj7 = { paddingTop: nativeDefault.space.PX_10, paddingHorizontal: nativeDefault.space.PX_16, paddingBottom: nativeDefault.space.PX_16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/hexagon_campaign/native/HexagonCampaignQuestHomeHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function HexagonCampaignQuestHomeHeader() {
  const cResult = isHexagonCampaignQuestHomeHeaderEnabled(576).c(52);
  const tmp4 = closure_10();
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(576);
  const theme = isHexagonCampaignQuestHomeHeaderEnabled(5070).useThemeContext().theme;
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5070);
  isHexagonCampaignQuestHomeHeaderEnabled = isHexagonCampaignQuestHomeHeaderEnabled(5033).useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  let obj3 = isHexagonCampaignQuestHomeHeaderEnabled(5033);
  token = isHexagonCampaignQuestHomeHeaderEnabled(5288).useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  if (cResult[0] !== token) {
    const items = [0, 0.83, 1];
    const mapped = items.map((item) => {
      const obj = _modDef683(token);
      return _modDef683(token).alpha(item).css();
    });
    cResult[0] = token;
    cResult[1] = mapped;
    let tmp8 = mapped;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] !== isHexagonCampaignQuestHomeHeaderEnabled) {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
    const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
    cResult[2] = isHexagonCampaignQuestHomeHeaderEnabled;
    cResult[3] = H;
    cResult[4] = items1;
    let tmp11 = items1;
  } else {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
    tmp11 = cResult[4];
  }
  const effect = noop.useEffect(H, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
    cResult[5] = tmp14;
  } else {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
  }
  if (isHexagonCampaignQuestHomeHeaderEnabled) {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      cResult[6] = tmp16;
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    const container = tmp4.container;
    if (cResult[7] !== tmp4.bannerImage) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      const obj5 = { source: tmp6(16655), style: tmp4.bannerImage, resizeMode: "cover", accessible: false };
      const tmp19 = closure_8(tmp6(5705), obj5);
      cResult[7] = tmp4.bannerImage;
      cResult[8] = tmp19;
      const tmp6Result = tmp6(5705);
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    const _Symbol = Symbol;
    if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      cResult[9] = tmp21;
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    if (cResult[10] !== tmp8) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      const obj6 = { colors: tmp8, locations: tmp21, style: closure_4.absoluteFill, pointerEvents: "none" };
      const tmp24 = closure_8(tmp6(5294), obj6);
      cResult[10] = tmp8;
      cResult[11] = tmp24;
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    if (cResult[12] !== tmp4.logo) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      const obj7 = { source: tmp6(16656), style: tmp4.logo, resizeMode: "contain", accessible: false };
      const tmp27 = closure_8(tmp6(5705), obj7);
      cResult[12] = tmp4.logo;
      cResult[13] = tmp27;
      const tmp6Result2 = tmp6(5705);
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[14] === Symbol.for("react.memo_cache_sentinel")) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      const obj8 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
      const intl = tmp(1125).intl;
      obj8.children = intl.string(tmp6(4280).kVJc0r);
      const tmp29 = closure_8(tmp(5270).Text, obj8);
      cResult[14] = tmp29;
      const tmp28 = tmp29;
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    if (cResult[15] !== tmp4.sponsoredTag) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
      const obj9 = { style: tmp4.sponsoredTag, children: tmp28 };
      const tmp32 = closure_8(closure_5, obj9);
      cResult[15] = tmp4.sponsoredTag;
      cResult[16] = tmp32;
    } else {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    if (cResult[17] === tmp4.banner) {
      class H {
        constructor() {
          if (closure_0) {
            tmp = closure_0;
            tmp2 = closure_2;
            obj = closure_0(closure_2[13]);
            obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
            tmp3 = closure_6;
            obj1.adContentId = closure_6;
            obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
            tmp4 = AnalyticEvents;
            obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
            obj5 = {};
            obj4 = closure_0(closure_2[15]);
            num = 0;
            tmp5 = obj5;
            merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
            tmp7 = closure_1;
            tmp8 = obj5;
            merged1 = Object.assign(closure_1(closure_2[17])());
            obj1.properties = obj5;
            obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
            trackAdContentEventResult = obj.trackAdContentEvent(obj1);
          }
          return;
        }
      }
    }
    const obj10 = { style: tmp4.banner, children: null };
    const items2 = [tmp17, tmp22, tmp25, tmp30];
    obj10.children = items2;
    const tmp36 = closure_9(closure_5, obj10);
    cResult[17] = tmp4.banner;
    cResult[18] = tmp30;
    cResult[19] = tmp17;
    cResult[20] = tmp22;
    cResult[21] = tmp25;
    cResult[22] = tmp36;
  } else {
    class H {
      constructor() {
        if (closure_0) {
          tmp = closure_0;
          tmp2 = closure_2;
          obj = closure_0(closure_2[13]);
          obj1 = { adContentId: null, adCreativeType: null, event: null, properties: null, sourceQuestContent: null };
          tmp3 = closure_6;
          obj1.adContentId = closure_6;
          obj1.adCreativeType = closure_0(closure_2[14]).AdCreativeType.QUEST_HOME_HERO;
          tmp4 = AnalyticEvents;
          obj1.event = AnalyticEvents.QUEST_CONTENT_VIEWED;
          obj5 = {};
          obj4 = closure_0(closure_2[15]);
          num = 0;
          tmp5 = obj5;
          merged = Object.assign(obj4.getContentProperties(closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE, 0));
          tmp7 = closure_1;
          tmp8 = obj5;
          merged1 = Object.assign(closure_1(closure_2[17])());
          obj1.properties = obj5;
          obj1.sourceQuestContent = closure_0(closure_2[16]).QuestContent.QUEST_HOME_MOBILE;
          trackAdContentEventResult = obj.trackAdContentEvent(obj1);
        }
        return;
      }
    }
    return null;
  }
  let obj4 = isHexagonCampaignQuestHomeHeaderEnabled(5288);
}) : (function HexagonCampaignQuestHomeHeader() {
  const tmp = closure_10();
  let obj = isHexagonCampaignQuestHomeHeaderEnabled(5070);
  isHexagonCampaignQuestHomeHeaderEnabled = isHexagonCampaignQuestHomeHeaderEnabled(5033).useIsHexagonCampaignQuestHomeHeaderEnabled("HexagonCampaignQuestHomeHeader");
  let obj2 = isHexagonCampaignQuestHomeHeaderEnabled(5033);
  token = isHexagonCampaignQuestHomeHeaderEnabled(5288).useToken(token(587).colors.BACKGROUND_BASE_LOWEST);
  let items = [token];
  const items1 = [isHexagonCampaignQuestHomeHeaderEnabled];
  const memo = noop.useMemo(() => {
    const items = [0, 0.83, 1];
    return items.map((item) => {
      const obj = token(683)(closure_1_1);
      return token(683)(closure_1_1).alpha(item).css();
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
    const obj6 = { source: tmp5(16655), style: tmp.bannerImage, resizeMode: "cover", accessible: false };
    const items2 = [closure_8(tmp5(5705), obj6), , , ];
    const obj7 = { colors: memo, locations: [0.716, 0.823, 1], style: closure_4.absoluteFill, pointerEvents: "none" };
    items2[1] = closure_8(tmp5(5294), obj7);
    const obj8 = { source: null, style: null, resizeMode: "contain", accessible: false };
    const tmp5Result = tmp5(5705);
    obj8.source = tmp5(16656);
    obj8.style = tmp.logo;
    items2[2] = closure_8(tmp5(5705), obj8);
    const obj9 = { style: tmp.sponsoredTag, children: null };
    const obj10 = { variant: "text-sm/semibold", color: "text-overlay-light", children: null };
    const intl = tmp2(1125).intl;
    obj10.children = intl.string(tmp5(4280).kVJc0r);
    obj9.children = closure_8(tmp2(5270).Text, obj10);
    items2[3] = closure_8(closure_5, obj9);
    obj5.children = items2;
    const items3 = [closure_9(closure_5, obj5), ];
    const obj11 = { style: tmp.cardShadow, children: null };
    const obj12 = { style: tmp.card, children: null };
    const obj13 = { style: tmp.cardArt, children: closure_8(tmp2(16657).BundleAbstractUI, { accessible: false }) };
    const items4 = [closure_8(closure_5, obj13), ];
    const obj14 = { direction: "vertical", spacing: tmp5(587).space.PX_12, style: tmp.cardContent, children: null };
    const obj15 = { direction: "vertical", spacing: tmp5(587).space.PX_8, children: null };
    const obj16 = { direction: "vertical", spacing: tmp5(587).space.PX_4, children: null };
    const obj17 = { variant: "text-lg/semibold", color: "text-strong", children: null };
    const intl2 = tmp2(1125).intl;
    obj17.children = intl2.string(tmp5(4280)["fShp/D"]);
    const items5 = [closure_8(tmp2(5270).Heading, obj17), ];
    const obj18 = { variant: "text-sm/medium", color: "text-default", style: tmp.cardBody, children: null };
    const intl3 = tmp2(1125).intl;
    obj18.children = intl3.string(tmp5(4280).XLqMej);
    items5[1] = closure_8(tmp2(5270).Text, obj18);
    obj16.children = items5;
    const items6 = [closure_9(tmp2(6013).Stack, obj16), ];
    const obj19 = { variant: "text-xs/medium", color: "text-subtle", children: null };
    const intl4 = tmp2(1125).intl;
    const obj20 = {
      learnMoreHook(children, arg1) {
          return closure_1_8(isHexagonCampaignQuestHomeHeaderEnabled(5270).Text, { variant: "text-xs/medium", color: "text-link", accessibilityRole: "link", onPress: isHexagonCampaignQuestHomeHeaderEnabled(16138).openHexagonCampaignLearnMore, children }, arg1);
        }
    };
    obj19.children = intl4.format(tmp5(4280).uL0TOA, obj20);
    items6[1] = closure_8(tmp2(5270).Text, obj19);
    obj15.children = items6;
    const items7 = [closure_9(tmp2(6013).Stack, obj15), ];
    const tmp5Result2 = tmp5(5705);
    let str = "primary-overlay";
    if (tmp2Result.isThemeLight(obj.useThemeContext().theme)) {
      str = "primary";
    }
    const obj21 = { variant: str, text: null, onPress: null, grow: true };
    const intl5 = tmp2(1125).intl;
    obj21.text = intl5.string(tmp5(4280)["KX1/jp"]);
    obj21.onPress = tmp9;
    items7[1] = closure_8(tmp2(5280).Button, obj21);
    obj14.children = items7;
    items4[1] = closure_9(tmp2(6013).Stack, obj14);
    obj12.children = items4;
    obj11.children = closure_9(closure_5, obj12);
    items3[1] = closure_8(closure_5, obj11);
    obj4.children = items3;
    tmp11Result = closure_9(closure_5, obj4);
    tmp2Result = tmp2(5011);
  }
  return tmp11Result;
});