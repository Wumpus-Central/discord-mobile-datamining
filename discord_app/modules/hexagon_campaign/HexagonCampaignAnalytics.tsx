// discord_app/modules/hexagon_campaign/HexagonCampaignAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getDeviceMetadataDefault from "../device/getDeviceMetadata.native.tsx";
import AnalyticsActions from "../quests/lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../quests/lib/analytics/AnalyticsTypes.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
let closure_8 = async function _trackHexagonCampaignContentClicked(arg0) {
  let content = arg0;
  c6 = 0;
  c7 = 0;
  let iter = (async (arg0) => {
    const tmp22 = closure_131_0(closure_131_2[4]);
    closure_5 = tmp22;
    trackAdContentEvent = tmp22.trackAdContentEvent;
    obj5 = {
      adContentId: closure_131_5,
      adCreativeType: closure_131_0(closure_131_2[5]).AdCreativeType.QUEST_HOME_HERO,
      event: closure_131_7.QUEST_CONTENT_CLICKED,
    };
    await closure_131_0(closure_131_2[4]).getCommonClickEventProperties({
      questContent: closure_132_0,
      questContentCTA: closure_132_1,
    });
    obj5.properties = value;
    obj5.sourceQuestContent = closure_132_2;
    trackAdContentEvent(obj5);
    await "HermesInternal";
    closure_4 = tmp2;
    content = content.content;
    closure_132_0 = content;
    ({ questContentCTA: closure_132_1, sourceQuestContent } = content);
    if (sourceQuestContent === undefined) {
      sourceQuestContent = content;
    }
    closure_132_2 = sourceQuestContent;
    return "flexDirection";
  })();
  iter.next();
  return iter;
};
const HexagonCampaignConstants = fn(5268);
({ HEXAGON_CAMPAIGN_AD_CONTENT_ID: hasOwnProperty, HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: closure_6 } =
  HexagonCampaignConstants);
const AnalyticEvents = fn(1072).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignAnalytics.tsx");

export const HexagonCampaignContentSurface = {
  FONT_PICKER: "FONT_PICKER",
  PROFILE_ROW_PROMO: "PROFILE_ROW_PROMO",
  NON_NITRO_CARD: "NON_NITRO_CARD",
  THEME_PICKER: "THEME_PICKER",
  APP_ICON_PICKER: "APP_ICON_PICKER",
  USER_PROFILE: "USER_PROFILE",
  GUILD_PROFILE: "GUILD_PROFILE",
};
export function trackHexagonCampaignContentViewed(contentSurface) {
  ({ content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  const obj2 = {
    adContentId,
    adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO,
    event: AnalyticEvents.QUEST_CONTENT_VIEWED,
    properties: null,
    sourceQuestContent: null,
  };
  const obj3 = {};
  const obj = AnalyticsActions;
  const merged = Object.assign(AnalyticsTypes.getContentProperties(content));
  const merged1 = Object.assign(getDeviceMetadataDefault());
  obj3.content_surface = contentSurface.contentSurface;
  obj2.properties = obj3;
  obj2.sourceQuestContent = sourceQuestContent;
  obj.trackAdContentEvent(obj2);
}
export function useTrackHexagonCampaignContentViewed(
  DISPLAY_NAME_STYLES_SETTINGS,
  APP_ICON_PICKER,
  isThumbstickScrollDevice,
) {
  const content = DISPLAY_NAME_STYLES_SETTINGS;
  const contentSurface = APP_ICON_PICKER;
  closure_2 = isThumbstickScrollDevice;
  items = [DISPLAY_NAME_STYLES_SETTINGS, APP_ICON_PICKER, isThumbstickScrollDevice];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      const obj = { content, contentSurface };
      ({ content, sourceQuestContent } = obj);
      if (sourceQuestContent === undefined) {
        sourceQuestContent = content;
      }
      const obj3 = {
        adContentId,
        adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO,
        event: AnalyticEvents.QUEST_CONTENT_VIEWED,
        properties: null,
        sourceQuestContent: null,
      };
      const obj4 = {};
      const obj2 = AnalyticsActions;
      const merged = Object.assign(AnalyticsTypes.getContentProperties(content));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj4.content_surface = obj.contentSurface;
      obj3.properties = obj4;
      obj3.sourceQuestContent = sourceQuestContent;
      obj2.trackAdContentEvent(obj3);
    }
  }, items);
}
export function trackHexagonCampaignContentClicked() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function trackHexagonCampaignPerkAction(contentSurface) {
  ({ perks, content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(
    AnalyticsActions.getAdSessionProperties(sourceQuestContent, AdCreativeType.AdCreativeType.QUEST_HOME_HERO),
  );
  obj2.actions = perks.map((item) => closure_1_6[item]);
  obj2.content_id = content;
  obj2.content_name = AnalyticsTypes.getQuestContentName(content);
  obj2.content_surface = contentSurface.contentSurface;
  obj2.ad_content_id = ad_content_id;
  obj.track(AnalyticEvents.QUEST_PROMOTIONAL_EVENT_USER_ACTION, obj2);
}
