// === Module 11623: GuildHighlightsNotificationsActionCreators ===

// Module 11623 (GuildHighlightsNotificationsActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Constants2 from "Constants" /* 11624 */;
import size from "module_2" /* 2 */;

let constants = Constants2.NotificationUserFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(guild_id1, message, notificationType, MESSAGE_EMBED, arg4) {
  _require = guild_id1;
  importDefault = message;
  dependencyMap = notificationType;
  constants = MESSAGE_EMBED;
  closure_4 = arg4;
  let obj = { guildId: guild_id1, feedbackSettings: null };
  obj = { reasons: null, onFeedbackShown: null, onFeedbackCompleted: null };
  const obj1 = { value: constants.TOO_MANY, label: null };
  const intl = require("util").intl;
  obj1.label = intl.string(require("util").t.pLeQp0);
  const items = [obj1, , , , ];
  const obj2 = { value: constants.IRRELEVANT_CHANNEL, label: null };
  const intl2 = require("util").intl;
  obj2.label = intl2.string(require("util").t.Lu4n25);
  items[1] = obj2;
  const obj3 = { value: constants.IRRELEVANT_USER, label: null };
  const intl3 = require("util").intl;
  obj3.label = intl3.string(require("util").t.TF6AhF);
  items[2] = obj3;
  const obj4 = { value: constants.IRRELEVANT_TOPIC, label: null };
  const intl4 = require("util").intl;
  obj4.label = intl4.string(require("util").t["s+8J8f"]);
  items[3] = obj4;
  const obj5 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC, label: null };
  const intl5 = require("util").intl;
  obj5.label = intl5.string(require("util").t.fEUR7Y);
  items[4] = obj5;
  obj.reasons = items;
  obj.onFeedbackShown = function onFeedbackShown() {
    const obj = { type, location: _location, guild_id, channel_id: message.channel_id, message_id: message.id };
    const merged = Object.assign(closure_4);
    obj.track(AnalyticEvents.FEEDBACK_FORM_VIEWED, obj);
  };
  obj.onFeedbackCompleted = function onFeedbackCompleted(rating) {
    const obj = { type, location: _location, rating: rating.rating, reason: null, guild_id: null, channel_id: null, message_id: null };
    value = undefined;
    if (rating.reason != null) {
      value = iter.value;
    }
    obj.reason = value;
    obj.guild_id = guild_id;
    ({ channel_id: obj2.channel_id, id: obj2.message_id } = closure_1);
    const merged = Object.assign(closure_4);
    obj.track(AnalyticEvents.FEEDBACK_FORM_SUBMITTED, obj);
  };
  obj.feedbackSettings = obj;
  obj.openLazy(require("asyncRequireImpl")(11625, dependencyMap.paths), "GuildHighlightsNotifications", obj);
};