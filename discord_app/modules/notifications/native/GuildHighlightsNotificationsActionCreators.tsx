// discord_app/modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx
import set from "../../../../_runtime/00002_set.js";
import ME from "../../../Constants.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import NotificationUserFeedbackReasons from "Constants.tsx";
import { asyncRequireImpl } from "../../../../_runtime/01896_asyncRequireImpl.js";

let closure_3 = NotificationUserFeedbackReasons.NotificationUserFeedbackReasons;
const AnalyticEvents = ME.AnalyticEvents;
const result = set.fileFinishedImporting("modules/notifications/native/GuildHighlightsNotificationsActionCreators.tsx");

export const openGuildHighlightNotificationForPush = function openGuildHighlightNotificationForPush(
  guildId,
  arg1,
  TRENDING_CONTENT_PUSH,
  NOTIFICATION_CENTER,
  arg4,
) {
  const _require = guildId;
  importDefault = arg1;
  dependencyMap = TRENDING_CONTENT_PUSH;
  const constants = NOTIFICATION_CENTER;
  closure_4 = arg4;
  let obj = ACTION_SHEET_HEIGHT_HALFDefault;
  obj = { guildId, feedbackSettings: null };
  obj = { reasons: null, onFeedbackShown: null, onFeedbackCompleted: null };
  obj1 = { value: constants.TOO_MANY, label: null };
  const intl = require("../../../intl/index.native.tsx").intl;
  obj1[1] = intl.string(require("../../../intl/index.native.tsx").t.pLeQp0);
  const items = [obj1, , , ,];
  const obj2 = { value: constants.IRRELEVANT_CHANNEL, label: null };
  const intl2 = require("../../../intl/index.native.tsx").intl;
  obj2[1] = intl2.string(require("../../../intl/index.native.tsx").t.Lu4n25);
  items[1] = obj2;
  const obj3 = { value: constants.IRRELEVANT_USER, label: null };
  const intl3 = require("../../../intl/index.native.tsx").intl;
  obj3[1] = intl3.string(require("../../../intl/index.native.tsx").t.TF6AhF);
  items[2] = obj3;
  const obj4 = { value: constants.IRRELEVANT_TOPIC, label: null };
  const intl4 = require("../../../intl/index.native.tsx").intl;
  obj4[1] = intl4.string(require("../../../intl/index.native.tsx").t["s+8J8f"]);
  items[3] = obj4;
  const obj5 = { value: constants.SENSITIVE_OR_OFFENSIVE_TOPIC, label: null };
  const intl5 = require("../../../intl/index.native.tsx").intl;
  obj5[1] = intl5.string(require("../../../intl/index.native.tsx").t.fEUR7Y);
  items[4] = obj5;
  obj[0] = items;
  obj[1] = function onFeedbackShown() {
    let obj = lib(TRENDING_CONTENT_PUSH[6]);
    obj = {
      type: TRENDING_CONTENT_PUSH,
      location: closure_3,
      guild_id: closure_0,
      channel_id: lib.channel_id,
      message_id: lib.id,
    };
    const merged = Object.assign(constants);
    obj.track(constants.FEEDBACK_FORM_VIEWED, obj);
  };
  obj[2] = function onFeedbackCompleted(rating) {
    let obj = lib(TRENDING_CONTENT_PUSH[6]);
    obj = {
      type: TRENDING_CONTENT_PUSH,
      location: closure_3,
      rating: rating.rating,
      reason: null,
      guild_id: null,
      channel_id: null,
      message_id: null,
    };
    let value;
    if (rating.reason != null) {
      value = iter.value;
    }
    obj[3] = value;
    obj[4] = closure_0;
    ({ channel_id: obj2[5], id: obj2[6] } = lib);
    const merged = Object.assign(constants);
    obj.track(constants.FEEDBACK_FORM_SUBMITTED, obj);
  };
  obj[1] = obj;
  obj.openLazy(asyncRequireImpl(11625, dependencyMap.paths), "GuildHighlightsNotifications", obj);
};
