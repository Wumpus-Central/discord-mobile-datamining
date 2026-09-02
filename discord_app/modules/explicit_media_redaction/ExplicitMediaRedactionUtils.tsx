// === Module 7354: redactionSettingToRenderedString ===

// Module 7354 (redactionSettingToRenderedString)
import expandEventPropertiesDefault from "expandEventProperties" /* 695 */;
import create from "create" /* 1305 */;
import isFeatureAgeGated2 from "isFeatureAgeGated" /* 4172 */;
import useAgeVerificationRunner from "useAgeVerificationRunner" /* 4733 */;
import AgeGatedFeature from "AgeGatedFeature" /* 5375 */;
import isCurrentUserTeen from "isCurrentUserTeen" /* 6145 */;
import ObscureReason from "ObscureReason" /* 6150 */;
import setDefault from "set" /* 7356 */;
import set from "set" /* 7361 */;
import resetManager from "resetManager" /* 7362 */;
import closure_3 from "getUserAgnosticState" /* 4477 */;
import closure_4 from "ensureGuildLoaded" /* 1386 */;
import closure_5 from "getFpMessageInfo" /* 6147 */;
import USER_SETTING_ACTION_SHEET_KEY from "USER_SETTING_ACTION_SHEET_KEY" /* 7355 */;
import { AnalyticEvents } from "ME" /* 673 */;

require = arg1;
({ EXPLICIT_MEDIA_MIN_HEIGHT: closure_6, EXPLICIT_MEDIA_MIN_WIDTH: error } = USER_SETTING_ACTION_SHEET_KEY);
const result = require("set").fileFinishedImporting("modules/explicit_media_redaction/ExplicitMediaRedactionUtils.tsx");

export const redactionSettingToRenderedString = function redactionSettingToRenderedString(prop) {
  if (create.ExplicitContentRedaction.SHOW === prop) {
    return () => {
      const intl = callback(1233).intl;
      return intl.string(callback(1233).t["5k5OFp"]);
    };
  } else if (tmp(1305).ExplicitContentRedaction.BLUR === prop) {
    return () => {
      const intl = callback(1233).intl;
      return intl.string(callback(1233).t.S49Uad);
    };
  } else if (tmp(1305).ExplicitContentRedaction.BLOCK === prop) {
    return () => {
      const intl = callback(1233).intl;
      return intl.string(callback(1233).t["D/157Y"]);
    };
  }
};
export const isPendingScanVersion = function isPendingScanVersion(contentScanVersion) {
  const value = closure_3.get("explicit_media_redaction_ignore_pending_scan");
  let tmp2 = !value;
  if (!value) {
    let tmp4 = 0 !== contentScanVersion;
    if (tmp4) {
      tmp4 = -1 !== contentScanVersion;
    }
    if (tmp4) {
      let tmp6 = null == contentScanVersion;
      if (!tmp6) {
        tmp6 = contentScanVersion !== obj.validContentScanVersion;
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
      const channel = store.getChannel(channelId);
      let obj = { action: null, guild_id: null, channel_id: null, message_id: null, user_is_underage: null, context: null };
      obj[0] = tmp;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj[1] = guild_id;
      obj[2] = channelId;
      obj[3] = messageId;
      obj = isCurrentUserTeen;
      obj[4] = obj.isCurrentUserTeen();
      obj[5] = tmp2;
      expandEventPropertiesDefault.track(AnalyticEvents.EXPLICIT_MEDIA_ACTION, obj);
      const obj2 = expandEventPropertiesDefault;
    }
  }
};
export const TimeoutCancelSource = { UPDATE: "update", TIMEOUT: "timeout" };
export const trackScanTiming = function trackScanTiming(setAt, UPDATE) {
  const bound = Math.min(Math.floor((Date.now() - setAt) / 1000), 3);
  let obj = setDefault;
  obj = { name: set.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMING, tags: null };
  const items = ["timingBucket:" + bound, "source:" + UPDATE, "metricVersion:1"];
  obj[1] = items;
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
        const channel = store.getChannel(channelId);
        let obj = expandEventPropertiesDefault;
        obj = { channel_id: null, guild_id: null, message_id: null, embed_ids: null, user_is_underage: null, scan_timeout_duration: null, attachment_ids_v2: null };
        obj[0] = channelId;
        let guild_id;
        if (channel != null) {
          guild_id = channel.guild_id;
        }
        obj[1] = guild_id;
        obj[2] = messageId;
        obj[3] = embedIds;
        obj[4] = isCurrentUserTeen.isCurrentUserTeen();
        obj[5] = resetManager.MESSAGE_SCAN_TIMEOUT;
        obj[6] = attachmentIds;
        obj.track(AnalyticEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT, obj);
        let tmp3Result = tmp3(7356);
        obj = { name: null, tags: null };
        obj[0] = set.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT;
        obj[1] = ["metricVersion:1"];
        tmp3Result.increment(obj);
        tmp3Result = tmp3(7356);
        obj1 = { name: null };
        obj1[0] = set.MetricEvents.EXPLICIT_MEDIA_SCAN_CLIENT_TIMED_OUT_DISTRIBUTION;
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
        const obj3 = isCurrentUserTeen;
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
    const channel = store.getChannel(channelId);
    let obj = { channel_id: null, guild_id: null, num_of_attachments: null, num_of_attachments_pending_scan: null, num_of_embeds: null, num_of_embeds_pending_scan: null };
    obj[0] = channelId;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[1] = guild_id;
    obj[2] = tmp;
    obj[3] = numOfAttachmentsPendingScan;
    obj[4] = tmp2;
    obj[5] = numOfEmbedsPendingScan;
    expandEventPropertiesDefault.track(AnalyticEvents.EXPLICIT_MEDIA_REDACTABLE_MESSAGES_LOADED, obj);
    const sum = numOfAttachmentsPendingScan + numOfEmbedsPendingScan;
    if (sum > 0) {
      obj = { name: null };
      obj[0] = set.MetricEvents.EXPLICIT_MEDIA_PENDING_MESSAGE_LOADED_V2;
      tmp10(7356).distribution(obj, sum);
      const tmp10Result = tmp10(7356);
    }
    const obj3 = expandEventPropertiesDefault;
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
      const channel = store.getChannel(channelId);
      let obj = expandEventPropertiesDefault;
      obj = { message_id: null, channel_id: null, channel_type: null, guild_id: null, num_of_attachments: null, num_of_gore_attachments: null, num_of_explicit_attachments: null, num_of_self_harm_attachments: null, num_of_embeds: null, num_of_gore_embeds: null, num_of_explicit_embeds: null, num_of_self_harm_embeds: null, has_redactable_explicit: null, has_redactable_gore: null, has_redactable_self_harm: null };
      obj[0] = messageId;
      obj[1] = channelId;
      let type;
      if (channel != null) {
        type = channel.type;
      }
      obj[2] = type;
      let guild_id;
      if (channel != null) {
        guild_id = channel.guild_id;
      }
      obj[3] = guild_id;
      obj[4] = numOfAttachments;
      obj[5] = numOfGoreAttachments;
      obj[6] = numOfExplicitAttachments;
      obj[7] = numOfSelfHarmAttachments;
      obj[8] = numOfEmbeds;
      obj[9] = numOfGoreEmbeds;
      obj[10] = numOfExplicitEmbeds;
      obj[11] = numOfSelfHarmEmbeds;
      obj[12] = tmp;
      obj[13] = tmp2;
      obj[14] = tmp3;
      obj.track(AnalyticEvents.REDACTABLE_MESSAGE_LOADED, obj);
    }
  }
};
export const trackExplicitMediaScanComplete = function trackExplicitMediaScanComplete(channelId) {
  channelId = channelId.channelId;
  if (null != channelId) {
    const channel = store.getChannel(channelId);
    let obj = expandEventPropertiesDefault;
    obj = { message_id: null, channel_id: null, channel_type: null, guild_id: null, num_of_attachments: null, num_of_explicit_attachments: null, num_of_embeds: null, num_of_explicit_embeds: null };
    obj[0] = tmp;
    obj[1] = channelId;
    let type;
    if (channel != null) {
      type = channel.type;
    }
    obj[2] = type;
    let guild_id;
    if (channel != null) {
      guild_id = channel.guild_id;
    }
    obj[3] = guild_id;
    obj[4] = tmp2;
    obj[5] = tmp3;
    obj[6] = tmp4;
    obj[7] = tmp5;
    obj.track(AnalyticEvents.EXPLICIT_MEDIA_RETROACTIVE_SCAN_COMPLETE, obj);
  }
};
export const handleExplicitMediaScanTimeoutForMessage = function handleExplicitMediaScanTimeoutForMessage(message) {
  let attachments = message.attachments;
  let embeds = message.embeds;
  attachments = attachments.map((arg0) => {
    arg0.content_scan_version = -1;
    return arg0;
  });
  let messageSnapshots = message.messageSnapshots;
  embeds = embeds.map((arg0) => {
    arg0.contentScanVersion = -1;
    return arg0;
  });
  if (null != messageSnapshots) {
    if (0 !== messageSnapshots.length) {
      messageSnapshots = messageSnapshots.map((message) => {
        message = message.message;
        const attachments = message.attachments;
        const embeds = message.embeds;
        const mapped = attachments.map((arg0) => {
          arg0.content_scan_version = -1;
          return arg0;
        });
        let obj = {
          attachments: mapped,
          embeds: embeds.map((arg0) => {
            arg0.contentScanVersion = -1;
            return arg0;
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
    let tmp3 = arg0 <= closure_7;
    if (!tmp3) {
      tmp3 = arg1 <= closure_6;
    }
    tmp = tmp3;
  }
  return tmp;
};
export const shouldAgeVerifyForExplicitMedia = function shouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGatedResult = isFeatureAgeGated2.isFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj = isFeatureAgeGated2;
  if (isFeatureAgeGatedResult) {
    isFeatureAgeGatedResult = obj2.shouldShowTiggerPawtect();
  }
  return isFeatureAgeGatedResult;
};
export const useShouldAgeVerifyForExplicitMedia = function useShouldAgeVerifyForExplicitMedia() {
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj = isFeatureAgeGated2;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  return isFeatureAgeGated;
};
export const useShouldAgeVerifyForReason = function useShouldAgeVerifyForReason(obscureReason) {
  let isFeatureAgeGated = isFeatureAgeGated2.useIsFeatureAgeGated(AgeGatedFeature.AgeGatedFeature.SENSITIVE_CONTENT_SHOW_SETTING);
  const obj = isFeatureAgeGated2;
  const tmp = require;
  if (isFeatureAgeGated) {
    isFeatureAgeGated = obj2.useShouldShowTiggerPawtect();
  }
  let tmp4 = !isFeatureAgeGated;
  if (isFeatureAgeGated) {
    tmp4 = null == obscureReason;
  }
  let hasItem = !tmp4;
  if (!tmp4) {
    const AGE_VERIFICATION_OBSCURABLE_REASONS = ObscureReason.AGE_VERIFICATION_OBSCURABLE_REASONS;
    hasItem = AGE_VERIFICATION_OBSCURABLE_REASONS.has(obscureReason);
  }
  return hasItem;
};
export const trackToggleMediaObscurityV2 = function trackToggleMediaObscurityV2(obscure) {
  let obj = useAgeVerificationRunner;
  if (obj.isVerifiedAdult()) {
    let str = "show";
    if (obscure.obscure) {
      str = "hide";
    }
    obj = { toggle_direction: null };
    obj[0] = str;
    expandEventPropertiesDefault.track(AnalyticEvents.EXPLICIT_MEDIA_OBSCURITY_TOGGLE_V2, obj);
    const obj2 = expandEventPropertiesDefault;
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