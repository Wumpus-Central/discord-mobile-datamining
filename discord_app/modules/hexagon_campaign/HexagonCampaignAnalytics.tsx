// discord_app/modules/hexagon_campaign/HexagonCampaignAnalytics.tsx
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import AdCreativeType from "../../../discord_common/js/shared/shared-constants/AdCreativeType.tsx";
import getDeviceMetadataDefault from "../device/getDeviceMetadata.native.tsx";
import AnalyticsActions from "../quests/lib/analytics/AnalyticsActions.tsx";
import AnalyticsTypes from "../quests/lib/analytics/AnalyticsTypes.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const HexagonCampaignConstants = fn(5039);
({
  HEXAGON_CAMPAIGN_AD_CONTENT_ID: closure_4,
  HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: hasOwnProperty,
  HEXAGON_SPECIAL_EVENT_ID: metroRequire,
} = HexagonCampaignConstants);
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
  const items = [DISPLAY_NAME_STYLES_SETTINGS, APP_ICON_PICKER, isThumbstickScrollDevice];
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
  obj2.actions = perks.map((item) => closure_1_5[item]);
  obj2.content_id = content;
  obj2.content_name = AnalyticsTypes.getQuestContentName(content);
  obj2.content_surface = contentSurface.contentSurface;
  obj2.ad_content_id = ad_content_id;
  obj.track(AnalyticEvents.QUEST_PROMOTIONAL_EVENT_USER_ACTION, obj2);
}
