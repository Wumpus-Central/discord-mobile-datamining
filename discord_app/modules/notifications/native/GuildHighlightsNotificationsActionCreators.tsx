// === Module 11773: GuildHighlightsNotificationsActionCreators ===

// Module 11773 (GuildHighlightsNotificationsActionCreators)
import Constants from "Constants" /* 1074 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4607 */;
import Constants2 from "Constants" /* 11774 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let constants = Constants2.NotificationUserFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(guild_id2, message, notificationType, MESSAGE_EMBED, arg4) {
  _require = guild_id2;
  importDefault = message;
  dependencyMap = notificationType;
  constants = MESSAGE_EMBED;
  closure_4 = arg4;
  const obj2 = { guildId: guild_id2, feedbackSettings: null };
  let obj3 = { reasons: null, onFeedbackShown: null, onFeedbackCompleted: null };
  const obj4 = { value: constants.TOO_MANY, label: null };
  const obj = ActionSheetActionCreatorsDefault;
  const intl = require("util").intl;
  obj4.label = intl.string(require("util").t.pLeQp0);
  const items = [obj4, , , , ];
  const obj5 = { value: constants.IRRELEVANT_CHANNEL, label: null };
  const intl2 = require("util").intl;
  obj5.label = intl2.string(require("util").t.Lu4n25);
  items[1] = obj5;
  const obj6 = { value: constants.IRRELEVANT_USER, label: null };
  const intl3 = require("util").intl;
  obj6.label = intl3.string(require("util").t.TF6AhF);
  items[2] = obj6;
  const obj7 = { value: constants.IRRELEVANT_TOPIC, label: null };
  const intl4 = require("util").intl;
  obj7.label = intl4.string(require("util").t["s+8J8f"]);
  items[3] = obj7;
  const obj8 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC, label: null };
  const intl5 = require("util").intl;
  obj8.label = intl5.string(require("util").t.fEUR7Y);
  items[4] = obj8;
  obj3.reasons = items;
  obj3.onFeedbackShown = function onFeedbackShown() {
    const merged = Object.assign(closure_4);
    AnalyticsUtilsDefault.track(AnalyticEvents.FEEDBACK_FORM_VIEWED, { type, location: _location, guild_id, channel_id: message.channel_id, message_id: message.id });
  };
  obj3.onFeedbackCompleted = function onFeedbackCompleted(rating) {
    const obj3 = { type, location: _location, rating: rating.rating, reason: null, guild_id: null, channel_id: null, message_id: null };
    value = undefined;
    if (rating.reason != null) {
      value = iter.value;
    }
    obj3.reason = value;
    obj3.guild_id = guild_id;
    ({ channel_id: obj2.channel_id, id: obj2.message_id } = closure_1);
    const merged = Object.assign(closure_4);
    AnalyticsUtilsDefault.track(AnalyticEvents.FEEDBACK_FORM_SUBMITTED, obj3);
  };
  obj2.feedbackSettings = obj3;
  obj.openLazy(require("asyncRequireImpl")(11775, dependencyMap.paths), "GuildHighlightsNotifications", obj2);
};