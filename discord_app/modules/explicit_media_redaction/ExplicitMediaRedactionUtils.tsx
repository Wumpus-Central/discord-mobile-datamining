// === Module 7122: ExplicitMediaRedactionUtils ===

// Module 7122 (ExplicitMediaRedactionUtils)
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AgeVerificationUtils from "AgeVerificationUtils" /* 5108 */;
import MonitoringAgentDefault from "MonitoringAgent" /* 5416 */;
import MetricEvents from "MetricEvents" /* 5421 */;
import RegionalFeatureConfigUtils from "RegionalFeatureConfigUtils" /* 5587 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5588 */;
import SelfModUtils from "SelfModUtils" /* 6804 */;
import ObscuredMediaUtils from "ObscuredMediaUtils" /* 6805 */;
import ObscureMediaModels from "ObscureMediaModels" /* 6809 */;
import DevSettingsStore from "DevSettingsStore" /* 4895 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import ExplicitMediaStore from "ExplicitMediaStore" /* 6806 */;
import ExplicitMediaRedactionConstants from "ExplicitMediaRedactionConstants" /* 7123 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let metroImportAll;
let metroImportDefault;
let metroRequire;
({ EXPLICIT_MEDIA_MIN_HEIGHT: metroRequire, EXPLICIT_MEDIA_MIN_WIDTH: metroImportDefault, MESSAGE_SCAN_TIMEOUT: metroImportAll } = ExplicitMediaRedactionConstants);
const AnalyticEvents = Constants.AnalyticEvents;
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
}) : (() => {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGated = obj.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
});
let closure_10 = tmp3;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react;
  const cResult = obj.c(2);
  const tmp4 = closure_10();
  let tmp5 = !tmp4;
  if (tmp4) {
    tmp5 = null == arg0;
  }
  let tmp7 = !tmp5;
  if (tmp7) {
    let tmp8;
    if (cResult[0] !== arg0) {
      const AGE_VERIFICATION_OBSCURABLE_REASONS = ObscureMediaModels.AGE_VERIFICATION_OBSCURABLE_REASONS;
      const hasItem = AGE_VERIFICATION_OBSCURABLE_REASONS.has(arg0);
      cResult[0] = arg0;
      cResult[1] = hasItem;
      tmp8 = hasItem;
    } else {
      tmp8 = cResult[1];
    }
    tmp7 = tmp8;
  }
  return tmp7;
}) : ((arg0) => {
  const tmp = closure_10();
  let tmp2 = !tmp;
  if (tmp) {
    tmp2 = null == arg0;
  }
  let hasItem = !tmp2;
  if (hasItem) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = ObscureMediaModels.AGE_VERIFICATION_OBSCURABLE_REASONS;
    hasItem = AGE_VERIFICATION_OBSCURABLE_REASONS.has(arg0);
  }
  return hasItem;
});
let result = size.fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx");

export const redactionSettingToRenderedString = function redactionSettingToRenderedString(prop) {
  if (preloaded_user_settings.ExplicitContentRedaction.SHOW === prop) {
    return () => {
      const intl = intl2.intl;
      return intl.string(intl2.t["5k5OFp"]);
    };
  } else if (preloaded_user_settings.ExplicitContentRedaction.BLUR === prop) {
    return () => {
      const intl = intl2.intl;
      return intl.string(intl2.t.S49Uad);
    };
  } else if (preloaded_user_settings.ExplicitContentRedaction.BLOCK === prop) {
    return () => {
      const intl = intl2.intl;
      return intl.string(intl2.t["D/157Y"]);
    };
  }
};
export const isPendingScanVersion = function isPendingScanVersion(contentScanVersion) {
  const value = DevSettingsStore.get("explicit_media_redaction_ignore_pending_scan");
  let tmp2 = !value;
  if (tmp2) {
    let tmp4 = 0 !== contentScanVersion && -1 !== contentScanVersion;
    if (tmp4) {
      tmp4 = null == contentScanVersion || contentScanVersion !== ExplicitMediaStore.validContentScanVersion;
      const tmp6 = null == contentScanVersion || contentScanVersion !== ExplicitMediaStore.validContentScanVersion;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};
export const TrackMediaRedactionActionType = { EXPLICIT_MEDIA_LEARN_MORE_VIEWED: "explicit_media_learn_more_viewed", EXPLICIT_MEDIA_LEARN_MORE_CLICK_SETTINGS: "explicit_media_learn_more_click_settings", EXPLICIT_MEDIA_LEARN_MORE_CLICK_LEARN_MORE: "explicit_media_learn_more_click_learn_more", EXPLICIT_MEDIA_LEARN_MORE_CLICK_DISMISS: "explicit_media_learn_more_click_dismiss", EXPLICIT_MEDIA_LEARN_MORE_CLICK_FALSE_POSITIVE: "explicit_media_learn_more_click_false_positive", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_REVERIFY: "explicit_media_learn_more_click_age_verify_reverify", EXPLICIT_MEDIA_LEARN_MORE_CLICK_AGE_VERIFY_LEARN_MORE: "explicit_media_learn_more_click_age_verify_learn_more", EXPLICIT_MEDIA_FALSE_POSITIVE_VIEWED: "explicit_media_false_positive_viewed", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CONFIRM: "explicit_media_false_positive_click_confirm", EXPLICIT_MEDIA_FALSE_POSITIVE_CLICK_CANCEL: "explicit_media_false_positive_click_cancel", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_BUTTON_CLICKED: "explicit_media_sender_false_positive_button_clicked", EXPLICIT_MEDIA_FALSE_POSITIVE_CLYDE_MESSAGE_SENT: "explicit_media_false_positive_clyde_message_sent" };
export const TrackMediaRedactionContext = { EXPLICIT_MEDIA_OBSCURED_FALSE_POSITIVE_FLOW: "explicit_media_obscured_false_positive_flow", EXPLICIT_MEDIA_SENDER_FALSE_POSITIVE_FLOW: "explicit_media_sender_false_positive_flow", EXPLICIT_MEDIA_MESSAGE_SEND_BLOCKED: "explicit_media_message_send_blocked", EXPLICIT_MEDIA_ADD_MEDIA_TO_FORUM_POST_BLOCKED: "explicit_media_add_media_to_forum_post_blocked" };
export const trackMediaRedactionAction = function trackMediaRedactionAction(arg0) {
  let channelId;
  let guild_id;
  let messageId;
  let obj;
  ({ channelId, messageId } = arg0);
  if (null != channelId) {
    if (null != messageId) {
      const channel = ChannelStore.getChannel(channelId);
      const obj2 = { action: tmp, guild_id, channel_id: channelId, message_id: messageId, user_is_underage: obj.isCurrentUserTeen(), context: tmp2 };
      guild_id = undefined;
      const track = AnalyticsUtilsDefault.track;
      const EXPLICIT_MEDIA_ACTION = AnalyticEvents.EXPLICIT_MEDIA_ACTION;
      AnalyticsUtilsDefault;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj = SelfModUtils;
      track(EXPLICIT_MEDIA_ACTION, obj2);
    }
  }
};
export const TimeoutCancelSource = { UPDATE: "update", TIMEOUT: "timeout" };
export const trackScanTiming = function trackScanTiming(setAt, UPDATE) {
  let items;
  const bound = Math.min(Math.floor((Date.now() - setAt) / 1000), 3);
  const tmp2 = MonitoringAgentDefault;
  const increment = tmp2.increment;
  const obj = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING, tags: items };
  items = ["timingBucket:" + bound, "source:" + UPDATE, "metricVersion:1"];
  increment(obj);
};
export const trackScanningTimedOut = function trackScanningTimedOut(arg0) {
  let attachmentIds;
  let channelId;
  let embedIds;
  let guild_id;
  let messageId;
  let obj2;
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
        const obj = { channel_id: channelId, guild_id, message_id: messageId, embed_ids: embedIds, user_is_underage: obj2.isCurrentUserTeen(), scan_timeout_duration: metroImportAll, attachment_ids_v2: attachmentIds };
        guild_id = undefined;
        const track = AnalyticsUtilsDefault.track;
        const EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT = AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
        AnalyticsUtilsDefault;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj2 = SelfModUtils;
        track(EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, obj);
        const obj3 = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, tags: ["metricVersion:1"] };
        const increment = MonitoringAgentDefault.increment;
        MonitoringAgentDefault;
        increment(obj3);
        const obj4 = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION };
        const distribution = MonitoringAgentDefault.distribution;
        MonitoringAgentDefault;
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
        distribution(obj4, num4 + num5);
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
  let channelId;
  let guild_id;
  let numOfAttachmentsPendingScan;
  let numOfEmbedsPendingScan;
  ({ channelId, numOfAttachmentsPendingScan, numOfEmbedsPendingScan } = arg0);
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    const obj2 = { channel_id: channelId, guild_id, num_of_attachments: tmp, num_of_attachments_pending_scan: numOfAttachmentsPendingScan, num_of_embeds: tmp2, num_of_embeds_pending_scan: numOfEmbedsPendingScan };
    guild_id = undefined;
    const track = AnalyticsUtilsDefault.track;
    const EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED = AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED;
    AnalyticsUtilsDefault;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    track(EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, obj2);
    const sum = numOfAttachmentsPendingScan + numOfEmbedsPendingScan;
    if (sum > 0) {
      const obj = { name: MetricEvents.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2 };
      const distribution = MonitoringAgentDefault.distribution;
      MonitoringAgentDefault;
      distribution(obj, sum);
    }
  }
};
export const trackRedactableMessageLoaded = function trackRedactableMessageLoaded(arg0) {
  let channelId;
  let guild_id;
  let messageId;
  let numOfAttachments;
  let numOfEmbeds;
  let numOfExplicitAttachments;
  let numOfExplicitEmbeds;
  let numOfGoreAttachments;
  let numOfGoreEmbeds;
  let numOfSelfHarmAttachments;
  let numOfSelfHarmEmbeds;
  let type;
  ({ messageId, channelId, numOfSelfHarmAttachments, numOfGoreAttachments, numOfExplicitAttachments, numOfSelfHarmEmbeds, numOfGoreEmbeds, numOfExplicitEmbeds } = arg0);
  let tmp = numOfExplicitAttachments > 0;
  ({ numOfAttachments, numOfEmbeds } = arg0);
  if (!tmp) {
    tmp = numOfExplicitEmbeds > 0;
  }
  const tmp2 = numOfGoreAttachments > 0 || numOfGoreEmbeds > 0;
  const tmp3 = numOfSelfHarmAttachments > 0 || numOfSelfHarmEmbeds > 0;
  if (null != channelId) {
    if (null != messageId) {
      const channel = ChannelStore.getChannel(channelId);
      const obj = { message_id: messageId, channel_id: channelId, channel_type: type, guild_id, num_of_attachments: numOfAttachments, num_of_gore_attachments: numOfGoreAttachments, num_of_explicit_attachments: numOfExplicitAttachments, num_of_self_harm_attachments: numOfSelfHarmAttachments, num_of_embeds: numOfEmbeds, num_of_gore_embeds: numOfGoreEmbeds, num_of_explicit_embeds: numOfExplicitEmbeds, num_of_self_harm_embeds: numOfSelfHarmEmbeds, has_redactable_explicit: tmp, has_redactable_gore: tmp2, has_redactable_self_harm: tmp3 };
      type = undefined;
      const track = AnalyticsUtilsDefault.track;
      const REDACTABLE_MESSAGE_LOADED = AnalyticEvents.REDACTABLE_MESSAGE_LOADED;
      AnalyticsUtilsDefault;
      if (channel != null) {
        type = channel.type;
      }
      guild_id = undefined;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      track(REDACTABLE_MESSAGE_LOADED, obj);
    }
  }
};
export const trackExplicitMediaScanComplete = function trackExplicitMediaScanComplete(channelId) {
  let guild_id;
  let type;
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = ChannelStore.getChannel(channelId);
    const obj = { message_id: tmp, channel_id: channelId, channel_type: type, guild_id, num_of_attachments: tmp2, num_of_explicit_attachments: tmp3, num_of_embeds: tmp4, num_of_explicit_embeds: tmp5 };
    type = undefined;
    const track = AnalyticsUtilsDefault.track;
    const EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE = AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE;
    AnalyticsUtilsDefault;
    if (channel != null) {
      type = channel.type;
    }
    guild_id = undefined;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    track(EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, obj);
  }
};
export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  const f94367 = (item) => {
    item.content_scan_version = -1;
    return item;
  };
  const f94368 = (components) => {
    components.contentScanVersion = -1;
    components = components.components;
    const failOverComponentMedia = closure_1_0(closure_1_2[11]).failOverComponentMedia;
    closure_1_0(closure_1_2[11]);
    if (components == null) {
      components = [];
    }
    const result = failOverComponentMedia(components);
    return components;
  };
  let attachments = message.attachments;
  let embeds = message.embeds;
  const attachments1 = attachments.map(f94367);
  let components = message.components;
  const embeds1 = embeds.map(f94368);
  let obj = ObscuredMediaUtils;
  let result = obj.failOverComponentMedia(components);
  const messageSnapshots = message.messageSnapshots;
  let messageSnapshots1 = messageSnapshots;
  if (null != messageSnapshots) {
    messageSnapshots1 = messageSnapshots;
    if (0 !== messageSnapshots.length) {
      messageSnapshots1 = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map(f94367);
        let components = message.components;
        const mapped1 = embeds.map(f94368);
        const obj = ObscuredMediaUtils;
        let result = obj.failOverComponentMedia(components);
        const obj2 = { message: message.merge({ attachments: mapped, embeds: mapped1, components }) };
        return message.merge(obj2);
      });
    }
  }
  return message.merge({ attachments: attachments1, embeds: embeds1, components, messageSnapshots: messageSnapshots1 });
};
export const isObscuredMediaBelowConstraints = function isObscuredMediaBelowConstraints(arg0, arg1) {
  let tmp = null != arg0 && null != arg1;
  if (tmp) {
    tmp = arg0 <= metroImportDefault || arg1 <= metroRequire;
    const tmp3 = arg0 <= metroImportDefault || arg1 <= metroRequire;
  }
  return tmp;
};
export const shouldAgeVerifyForExplicitMedia = function shouldAgeVerifyForExplicitMedia() {
  const obj = RegionalFeatureConfigUtils;
  let isFeatureAgeGatedResult = obj.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj2 = AgeVerificationUtils;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForExplicitMedia = tmp3;
export const useShouldAgeVerifyForReason = tmp4;
export const trackToggleMediaObscurityV2 = function trackToggleMediaObscurityV2(obscure) {
  obscure = obscure.obscure;
  const obj = AgeVerificationUtils;
  if (obj.isVerifiedAdult()) {
    let str = "show";
    const track = AnalyticsUtilsDefault.track;
    const EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2 = AnalyticEvents.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2;
    AnalyticsUtilsDefault;
    if (obscure) {
      str = "hide";
    }
    const obj2 = { toggle_direction: str };
    track(EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, obj2);
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
      let tmp2 = null != attachments && message.message.attachments.length > 0;
      if (!tmp2) {
        const message2 = message.message;
        let embeds;
        if (message2 != null) {
          embeds = message2.embeds;
        }
        tmp2 = null != embeds && message.message.embeds.length > 0;
        const tmp4 = null != embeds && message.message.embeds.length > 0;
      }
      return tmp2;
    });
  }
  return someResult;
};