// === Module 7600: ExplicitMediaRedactionUtils ===

// Module 7600 (ExplicitMediaRedactionUtils)
import util from "util" /* 1114 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1187 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 4773 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5423 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5424 */;
import SelfModUtils from "SelfModUtils" /* 7291 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 7602 */;
import MetricEvents from "MetricEvents" /* 7607 */;
import ExplicitMediaManager from "ExplicitMediaManager" /* 7608 */;
import DevSettingsStore from "DevSettingsStore" /* 4559 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 7293 */;

const ObscureMediaModels = tmp(7296);
require = fn;
const ExplicitMediaRedactionConstants = fn(7601);
({ EXPLICIT_MEDIA_MIN_HEIGHT: metroRequire, EXPLICIT_MEDIA_MIN_WIDTH: closure_7 } = ExplicitMediaRedactionConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx");

export const redactionSettingToRenderedString = function redactionSettingToRenderedString(prop) {
  if (preloaded_user_settings.ExplicitContentRedaction.SHOW === prop) {
    return () => {
      const intl = util.intl;
      return intl.string(util.t["5k5OFp"]);
    };
  } else if (tmp(1187).ExplicitContentRedaction.BLUR === prop) {
    return () => {
      const intl = util.intl;
      return intl.string(util.t.S49Uad);
    };
  } else if (tmp(1187).ExplicitContentRedaction.BLOCK === prop) {
    return () => {
      const intl = util.intl;
      return intl.string(util.t["D/157Y"]);
    };
  }
};
export const isPendingScanVersion = function isPendingScanVersion(contentScanVersion) {
  value = DevSettingsStore.get("explicit_media_redaction_ignore_pending_scan");
  let tmp2 = !value;
  if (!value) {
    let tmp4 = 0 !== contentScanVersion;
    if (tmp4) {
      tmp4 = -1 !== contentScanVersion;
    }
    if (tmp4) {
      let tmp6 = null == contentScanVersion;
      if (!tmp6) {
        tmp6 = contentScanVersion !== ExplicitMediaStore.validContentScanVersion;
      }
      tmp4 = tmp6;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const TrackMediaRedactionActionType = { EXPLICIT_MEDIA_LEARN_MORE_VIEWED: "explicit_media_learn_more_viewed", EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS: "explicit_media_learn_more_click_settings", EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE: "explicit_media_learn_more_click_learn_more", EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS: "explicit_media_learn_more_click_dismiss", EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE: "explicit_media_learn_more_click_false_positive", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY: "explicit_media_learn_more_click_age_verify_reverify", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE: "explicit_media_learn_more_click_age_verify_learn_more", EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED: "explicit_media_false_positive_viewed", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM: "explicit_media_false_positive_click_confirm", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL: "explicit_media_false_positive_click_cancel", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED: "explicit_media_sender_false_positive_button_clicked", EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT: "explicit_media_false_positive_clyde_message_sent" };
export const TrackMediaRedactionContext = { EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW: "explicit_media_obscured_false_positive_flow", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW: "explicit_media_sender_false_positive_flow", EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "explicit_media_message_send_blocked", EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED: "explicit_media_add_media_to_forum_post_blocked" };
export const trackMediaRedactionAction = function trackMediaRedactionAction(arg0) {
  ({ channelId, messageId } = arg0);
  if (null != channelId) {
    if (null != messageId) {
      const channel = ChannelStore.getChannel(channelId);
      let obj = { action: tmp, guild_id: null, channel_id: null, message_id: null, user_is_underage: null, context: null };
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj.guild_id = guild_id;
      obj.channel_id = channelId;
      obj.message_id = messageId;
      obj = SelfModUtils;
      obj.user_is_underage = obj.isCurrentUserTeen();
      obj.context = tmp2;
      AnalyticsUtilsDefault.track(AnalyticEvents.EXPLICIT_MEDIA_ACTION, obj);
    }
  }
};
export const TimeoutCancelSource = { UPDATE: "update", TIMEOUT: "timeout" };
export const trackScanTiming = function trackScanTiming(setAt, UPDATE) {
  const bound = Math.min(Math.floor((Date.now() - setAt) / 1000), 3);
  const obj = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING, tags: null };
  const items = ["timingBucket:" + bound, "source:" + UPDATE, "metricVersion:1"];
  obj.tags = items;
  obj.increment(obj);
};
export const trackScanningTimedOut = function trackScanningTimedOut(arg0) {
  ({ channelId, messageId, attachmentIds, embedIds } = arg0);
  if (null != channelId) {
    if (null != messageId) {
      let num;
      if (attachmentIds != null) {
        num = attachmentIds.length;
      }
      if (num == null) {
        num = 0;
      }
      if (0 !== num) {
        const channel = ChannelStore.getChannel(channelId);
        let obj = { channel_id: channelId, guild_id: null, message_id: null, embed_ids: null, user_is_underage: null, scan_timeout_duration: null, attachment_ids_v2: null };
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj.guild_id = guild_id;
        obj.message_id = messageId;
        obj.embed_ids = embedIds;
        obj.user_is_underage = SelfModUtils.isCurrentUserTeen();
        obj.scan_timeout_duration = ExplicitMediaManager.MESSAGE_SCAN_TIMEOUT;
        obj.attachment_ids_v2 = attachmentIds;
        obj.track(AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, obj);
        let tmp3Result = tmp3(7602);
        obj = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] };
        tmp3Result.increment(obj);
        tmp3Result = tmp3(7602);
        const obj1 = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION };
        let num4;
        if (attachmentIds != null) {
          num4 = attachmentIds.length;
        }
        if (num4 == null) {
          num4 = 0;
        }
        let num5;
        if (embedIds != null) {
          num5 = embedIds.length;
        }
        if (num5 == null) {
          num5 = 0;
        }
        tmp3Result.distribution(obj1, num4 + num5);
      } else {
        let num3;
        if (embedIds != null) {
          num3 = embedIds.length;
        }
        if (num3 == null) {
          num3 = 0;
        }
      }
    }
  }
};
export const trackExplicitMediaRedactableMessagedLoaded = function trackExplicitMediaRedactableMessagedLoaded(arg0) {
  ({ channelId, numOfAttachmentsPendingScan, numOfEmbedsPendingScan } = arg0);
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let obj = { channel_id: channelId, guild_id: null, num_of_attachments: null, num_of_attachments_pending_scan: null, num_of_embeds: null, num_of_embeds_pending_scan: null };
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj.num_of_attachments = tmp;
    obj.num_of_attachments_pending_scan = numOfAttachmentsPendingScan;
    obj.num_of_embeds = tmp2;
    obj.num_of_embeds_pending_scan = numOfEmbedsPendingScan;
    AnalyticsUtilsDefault.track(AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, obj);
    const sum = numOfAttachmentsPendingScan + numOfEmbedsPendingScan;
    if (sum > 0) {
      obj = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 };
      tmp10(7602).distribution(obj, sum);
      const tmp10Result = tmp10(7602);
    }
    tmp10 = importDefault;
  }
};
export const trackRedactableMessageLoaded = function trackRedactableMessageLoaded(arg0) {
  ({ messageId, channelId, numOfSelfHarmAttachments, numOfGoreAttachments, numOfExplicitAttachments, numOfSelfHarmEmbeds, numOfGoreEmbeds, numOfExplicitEmbeds } = arg0);
  let tmp = numOfExplicitAttachments > 0;
  ({ numOfAttachments, numOfEmbeds } = arg0);
  if (!tmp) {
    tmp = numOfExplicitEmbeds > 0;
  }
  if (null != channelId) {
    if (null != messageId) {
      const channel = ChannelStore.getChannel(channelId);
      const obj = { message_id: messageId, channel_id: channelId, channel_type: null, guild_id: null, num_of_attachments: null, num_of_gore_attachments: null, num_of_explicit_attachments: null, num_of_self_harm_attachments: null, num_of_embeds: null, num_of_gore_embeds: null, num_of_explicit_embeds: null, num_of_self_harm_embeds: null, has_redactable_explicit: null, has_redactable_gore: null, has_redactable_self_harm: null };
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj.channel_type = type;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj.guild_id = guild_id;
      obj.num_of_attachments = numOfAttachments;
      obj.num_of_gore_attachments = numOfGoreAttachments;
      obj.num_of_explicit_attachments = numOfExplicitAttachments;
      obj.num_of_self_harm_attachments = numOfSelfHarmAttachments;
      obj.num_of_embeds = numOfEmbeds;
      obj.num_of_gore_embeds = numOfGoreEmbeds;
      obj.num_of_explicit_embeds = numOfExplicitEmbeds;
      obj.num_of_self_harm_embeds = numOfSelfHarmEmbeds;
      obj.has_redactable_explicit = tmp;
      obj.has_redactable_gore = tmp2;
      obj.has_redactable_self_harm = tmp3;
      obj.track(AnalyticEvents.REDACTABLE_MESSAGE_LOADED, obj);
    }
  }
};
export const trackExplicitMediaScanComplete = function trackExplicitMediaScanComplete(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    const obj = { message_id: tmp, channel_id: channelId, channel_type: null, guild_id: null, num_of_attachments: null, num_of_explicit_attachments: null, num_of_embeds: null, num_of_explicit_embeds: null };
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj.channel_type = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj.guild_id = guild_id;
    obj.num_of_attachments = tmp2;
    obj.num_of_explicit_attachments = tmp3;
    obj.num_of_embeds = tmp4;
    obj.num_of_explicit_embeds = tmp5;
    obj.track(AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, obj);
  }
};
export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  let attachments = message.attachments;
  let embeds = message.embeds;
  attachments = attachments.map((item) => {
    item.content_scan_version = -1;
    return item;
  });
  let messageSnapshots = message.messageSnapshots;
  embeds = embeds.map((item) => {
    item.contentScanVersion = -1;
    return item;
  });
  if (null != messageSnapshots) {
    if (0 !== messageSnapshots.length) {
      messageSnapshots = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map((item) => {
          item.content_scan_version = -1;
          return item;
        });
        let obj = {
          attachments: mapped,
          embeds: embeds.map((item) => {
            item.contentScanVersion = -1;
            return item;
          })
        };
        obj = { message: message.merge(obj) };
        return message.merge(obj);
      });
    }
  }
  return message.merge({ attachments, embeds, messageSnapshots });
};
export const isObscuredMediaBelowConstraints = function isObscuredMediaBelowConstraints(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    let tmp3 = arg0 <= React5;
    if (!tmp3) {
      tmp3 = arg1 <= timestampProducer;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const shouldAgeVerifyForExplicitMedia = function shouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGatedResult = RegionalFeatureConfigUtils.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForExplicitMedia = function useShouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
export const useShouldAgeVerifyForReason = function useShouldAgeVerifyForReason(obscureReason) {
  let isFeatureAgeGated = RegionalFeatureConfigUtils.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  let tmp4 = !isFeatureAgeGated;
  if (isFeatureAgeGated) {
    tmp4 = null == obscureReason;
  }
  let hasItem = !tmp4;
  if (!tmp4) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = ObscureMediaModels.AGE_VERIFICATION_OBSCURABLE_REASONS;
    hasItem = AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason);
  }
  return hasItem;
};
export const trackToggleMediaObscurityV2 = function trackToggleMediaObscurityV2(obscure) {
  let obj = AgeVerificationUtils;
  if (obj.isVerifiedAdult()) {
    let str = "show";
    if (obscure.obscure) {
      str = "hide";
    }
    obj = { toggle_direction: str };
    AnalyticsUtilsDefault.track(AnalyticEvents.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, obj);
  }
};
export const hasMessageSnapshotsWithAttachmentsOrEmbeds = function hasMessageSnapshotsWithAttachmentsOrEmbeds(message) {
  const message_snapshots = message.message_snapshots;
  let someResult;
  if (message_snapshots != null) {
    someResult = message_snapshots.some((message) => {
      message = message.message;
      let attachments;
      if (message != null) {
        attachments = message.attachments;
      }
      let tmp2 = null != attachments;
      if (tmp2) {
        tmp2 = message.message.attachments.length > 0;
      }
      if (!tmp2) {
        const message2 = message.message;
        let embeds;
        if (message2 != null) {
          embeds = message2.embeds;
        }
        let tmp4 = null != embeds;
        if (tmp4) {
          tmp4 = message.message.embeds.length > 0;
        }
        tmp2 = tmp4;
      }
      return tmp2;
    });
  }
  return someResult;
};