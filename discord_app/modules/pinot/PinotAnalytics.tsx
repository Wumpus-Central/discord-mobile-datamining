// discord_app/modules/pinot/PinotAnalytics.tsx
import Constants from "../../Constants.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import PinotDraft from "PinotDraft.tsx";
import size from "../../../_runtime/metro/00002__.js";

const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/pinot/PinotAnalytics.tsx");

export function trackPinotNoticeViewed(noticeType) {
  if ("member_channel" === noticeType.noticeType) {
    const obj5 = { guild_id: null, channel_id: null, channel_type: null, notice_type: null };
    ({ guild_id: obj3.guild_id, id: obj3.channel_id, type: obj3.channel_type } = noticeType.channel);
    obj5.notice_type = noticeType.noticeType;
    let obj6 = obj5;
  } else {
    obj6 = { guild_id: null, notice_type: null };
    ({ guildId: obj2.guild_id, noticeType: obj2.notice_type } = noticeType);
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.SWP_NOTICE_VIEWED, obj6);
}
export function trackPinotNoticeAction(noticeType, dismiss) {
  if ("member_channel" === noticeType.noticeType) {
    const obj4 = { guild_id: null, channel_id: null, channel_type: null, notice_type: null };
    ({ guild_id: obj3.guild_id, id: obj3.channel_id, type: obj3.channel_type } = noticeType.channel);
    obj4.notice_type = noticeType.noticeType;
    let obj7 = obj4;
  } else {
    obj7 = { guild_id: null, notice_type: null };
    ({ guildId: obj2.guild_id, noticeType: obj2.notice_type } = noticeType);
  }
  const obj8 = {};
  const merged = Object.assign(obj7);
  obj8.action = dismiss;
  AnalyticsUtilsDefault.track(AnalyticEvents.SWP_NOTICE_ACTION, obj8);
}
export function trackPinotSettingsViewed(guild_id, view, feature_key, channels, arg4) {
  let includedChannelIds = arg4;
  const eligibleChannelIdsResult = PinotDraft.eligibleChannelIds(channels);
  if (null != arg4) {
    let found = eligibleChannelIdsResult.filter((item) => {
      includedChannelIds = includedChannelIds.includedChannelIds;
      return includedChannelIds.has(item);
    });
  } else {
    channels = channels.channels;
    found = channels.filter((eligible) => eligible.eligible && eligible.included);
  }
  AnalyticsUtilsDefault.track(AnalyticEvents.SWP_SETTINGS_VIEWED, {
    guild_id,
    view,
    feature_key,
    feature_enabled: channels.enabled,
    eligible_channel_count: eligibleChannelIdsResult.length,
    included_channel_count: found.length,
  });
  const obj3 = {
    guild_id,
    view,
    feature_key,
    feature_enabled: channels.enabled,
    eligible_channel_count: eligibleChannelIdsResult.length,
    included_channel_count: found.length,
  };
}
