// === Module 15857: HexagonCampaignAnalytics ===

// Module 15857 (HexagonCampaignAnalytics)
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AdCreativeType from "AdCreativeType" /* 6717 */;
import getDeviceMetadataDefault from "getDeviceMetadata" /* 7750 */;
import AnalyticsActions from "AnalyticsActions" /* 7792 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7801 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const HexagonCampaignConstants = fn(4996);
({ HEXAGON_CAMPAIGN_AD_CONTENT_ID: closure_4, HEXAGON_CAMPAIGN_PERK_ANALYTICS_ACTION: hasOwnProperty, HEXAGON_SPECIAL_EVENT_ID: metroRequire } = HexagonCampaignConstants);
const AnalyticEvents = fn(1087).AnalyticEvents;
const ReactCompilerGating = fn(558);
function trackHexagonCampaignContentViewed(contentSurface) {
  ({ content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  const obj2 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: null, sourceQuestContent: null };
  const obj3 = {};
  const obj = AnalyticsActions;
  const merged = Object.assign(AnalyticsTypes.getContentProperties(content));
  const merged1 = Object.assign(getDeviceMetadataDefault());
  obj3.content_surface = contentSurface.contentSurface;
  obj2.properties = obj3;
  obj2.sourceQuestContent = sourceQuestContent;
  obj.trackAdContentEvent(obj2);
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/hexagon_campaign/HexagonCampaignAnalytics.tsx");

export const HexagonCampaignContentSurface = { FONT_PICKER: "FONT_PICKER", PROFILE_ROW_PROMO: "PROFILE_ROW_PROMO", NON_NITRO_CARD: "NON_NITRO_CARD", THEME_PICKER: "THEME_PICKER", APP_ICON_PICKER: "APP_ICON_PICKER", USER_PROFILE: "USER_PROFILE", GUILD_PROFILE: "GUILD_PROFILE" };
export { trackHexagonCampaignContentViewed };
export const useTrackHexagonCampaignContentViewed = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrackHexagonCampaignContentViewed(content, contentSurface, arg2) {
  _require = content;
  dependencyMap = arg2;
  const cResult = require("c").c(5);
  if (cResult[0] === content) {
    if (cResult[1] === contentSurface) {
      if (cResult[2] === arg2) {
        let tmp2 = cResult[3];
        let tmp3 = cResult[4];
      }
      const effect = noop.useEffect(tmp2, tmp3);
    }
  }
  const fn = function _() {
    if (closure_2) {
      const obj = { content, contentSurface };
      ({ content, sourceQuestContent } = obj);
      if (sourceQuestContent === undefined) {
        sourceQuestContent = content;
      }
      const obj3 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: null, sourceQuestContent: null };
      const obj4 = {};
      const obj2 = AnalyticsActions;
      const merged = Object.assign(AnalyticsTypes.getContentProperties(content));
      const merged1 = Object.assign(getDeviceMetadataDefault());
      obj4.content_surface = obj.contentSurface;
      obj3.properties = obj4;
      obj3.sourceQuestContent = sourceQuestContent;
      obj2.trackAdContentEvent(obj3);
    }
  };
  const items = [content, contentSurface, arg2];
  cResult[0] = content;
  cResult[1] = contentSurface;
  cResult[2] = arg2;
  cResult[3] = fn;
  cResult[4] = items;
  tmp3 = items;
  tmp2 = fn;
  let obj = require("c");
}) : (function useTrackHexagonCampaignContentViewed(content, contentSurface, arg2) {
  closure_2 = arg2;
  const items = [content, contentSurface, arg2];
  const effect = noop.useEffect(() => {
    if (closure_2) {
      const obj = { content, contentSurface };
      ({ content, sourceQuestContent } = obj);
      if (sourceQuestContent === undefined) {
        sourceQuestContent = content;
      }
      const obj3 = { adContentId, adCreativeType: AdCreativeType.AdCreativeType.QUEST_HOME_HERO, event: AnalyticEvents.QUEST_CONTENT_VIEWED, properties: null, sourceQuestContent: null };
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
});
export const trackHexagonCampaignPerkAction = function trackHexagonCampaignPerkAction(contentSurface) {
  ({ perks, content, sourceQuestContent } = contentSurface);
  if (sourceQuestContent === undefined) {
    sourceQuestContent = content;
  }
  const obj2 = {};
  const obj = AnalyticsUtilsDefault;
  const merged = Object.assign(AnalyticsActions.getAdSessionProperties(sourceQuestContent, AdCreativeType.AdCreativeType.QUEST_HOME_HERO));
  obj2.actions = perks.map((item) => closure_1_5[item]);
  obj2.content_id = content;
  obj2.content_name = AnalyticsTypes.getQuestContentName(content);
  obj2.content_surface = contentSurface.contentSurface;
  obj2.ad_content_id = ad_content_id;
  obj.track(AnalyticEvents.QUEST_PROMOTIONAL_EVENT_USER_ACTION, obj2);
};