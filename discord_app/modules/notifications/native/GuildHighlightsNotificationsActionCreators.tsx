// === Module 11246: GuildHighlightsNotificationsActionCreators ===

// Module 11246 (GuildHighlightsNotificationsActionCreators)
import Constants from "Constants" /* 1085 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Constants2 from "Constants" /* 11247 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, dependencyMap, importDefault;

let constants = Constants2.NotificationUserFeedbackReasons;
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(guild_id2, message, notificationType, MESSAGE_EMBED, arg4) {
  let _location;
  let guild_id;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let obj2;
  let type;
  _require = guild_id2;
  importDefault = message;
  dependencyMap = notificationType;
  constants = MESSAGE_EMBED;
  let closure_4 = arg4;
  const tmp = ActionSheetActionCreatorsDefault;
  const openLazy = tmp.openLazy;
  let obj = { guildId: guild_id2, feedbackSettings: obj2 };
  obj2 = {
    reasons: items,
    onFeedbackShown() {
      const track = AnalyticsUtilsDefault.track;
      const FEEDBACK_FORM_VIEWED = AnalyticEvents.FEEDBACK_FORM_VIEWED;
      const obj = { type, location: _location, guild_id, channel_id: message.channel_id, message_id: message.id };
      AnalyticsUtilsDefault;
      const merged = Object.assign(closure_4);
      track(FEEDBACK_FORM_VIEWED, obj);
    },
    onFeedbackCompleted(reason) {
      let value;
      const rating = reason.rating;
      const obj = { type, location: _location, rating, reason: value, guild_id, channel_id: null, message_id: null };
      value = undefined;
      const track = AnalyticsUtilsDefault.track;
      const FEEDBACK_FORM_SUBMITTED = AnalyticEvents.FEEDBACK_FORM_SUBMITTED;
      AnalyticsUtilsDefault;
      if (reason.reason != null) {
        value = iter.value;
      }
      ({ channel_id: obj.channel_id, id: obj.message_id } = message);
      const merged = Object.assign(closure_4);
      track(FEEDBACK_FORM_SUBMITTED, obj);
    }
  };
  const obj3 = { value: constants.TOO_MANY, label: intl.string(require("intl").t.pLeQp0) };
  const tmp2 = require("asyncRequire")(11248, dependencyMap.paths);
  intl = require("intl").intl;
  items = [obj3, , , , ];
  const obj4 = { value: constants.IRRELEVANT_CHANNEL, label: intl2.string(require("intl").t.Lu4n25) };
  intl2 = require("intl").intl;
  items[1] = obj4;
  const obj5 = { value: constants.IRRELEVANT_USER, label: intl3.string(require("intl").t.TF6AhF) };
  intl3 = require("intl").intl;
  items[2] = obj5;
  const obj6 = { value: constants.IRRELEVANT_TOPIC, label: intl4.string(require("intl").t["s+8J8f"]) };
  intl4 = require("intl").intl;
  items[3] = obj6;
  const obj7 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC, label: intl5.string(require("intl").t.fEUR7Y) };
  intl5 = require("intl").intl;
  items[4] = obj7;
  openLazy(tmp2, "GuildHighlightsNotifications", obj);
};