// === Module 11177: RecentChannelsActionCreators ===

// Module 11177 (RecentChannelsActionCreators)
import Constants from "Constants" /* 1085 */;
import UserSettingsProtoActionCreators from "UserSettingsProtoActionCreators" /* 2033 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import size from "module_2" /* 2 */;

let closure_2, closure_3;

let obj = function _bulkClearRecents() {
  obj = _asyncToGenerator(async (guildId, channelIds) => {
    let c4 = 0;
    let c5 = 0;
    return (async (arg0, value) => {
      let obj8;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              return { value, done: true };
            } else {
              closure_3 = tmp4;
              closure_2 = tmp;
              c4 = 1;
              c5 = 1;
              const obj4 = {
                value: obj8.updateUserGuildSettings(guildId, (arg0) => {
                          const Timestamp = guildId(closure_1_2[3]).Timestamp;
                          const fromDate = Timestamp.fromDate;
                          const date = new Date();
                          arg0.guildRecentsDismissedAt = fromDate(date);
                          return true;
                        }, UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION),
                done: false
              };
              obj8 = UserSettingsProtoActionCreators;
              return obj4;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            return { value, done: true };
          } else {
            const obj6 = { type: "BULK_CLEAR_RECENTS", guildId, channelIds };
            const obj5 = closure_131_1(closure_131_2[4]);
            obj5.dispatch(obj6);
            const obj7 = closure_131_1(closure_131_2[5]);
            obj7.track(closure_131_4.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp5) {
          c5 = 3;
          throw tmp5;
        }
      }
    })();
  });
  return obj(...arguments);
};
const AnalyticEvents = Constants.AnalyticEvents;
const result = size.fileFinishedImporting("modules/recent_channels/RecentChannelsActionCreators.tsx");

export const bulkClearRecents = function bulkClearRecents() {
  return obj(...arguments);
};