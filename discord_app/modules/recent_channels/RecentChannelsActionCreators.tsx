// === Module 11122: _bulkClearRecents ===

// Module 11122 (_bulkClearRecents)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import { AnalyticEvents } from "ME" /* 676 */;

const require = arg1;
function _bulkClearRecents() {
  const self = this;
  const tmp = callback((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
    c4 = 0;
    c5 = 0;
    return (function*(arg0, arg1) {
      if (c5 === 2) {
        c5 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c5 = 2;
          if (0 === constants) {
            if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              closure_3 = tmp5;
              dependencyMap = tmp2;
              constants = 1;
              c5 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = callback(closure_1_2[2]).updateUserGuildSettings(callback, (arg0) => {
                const Timestamp = callback(tmp2[3]).Timestamp;
                arg0.guildRecentsDismissedAt = Timestamp.fromDate(new Date());
                return true;
              }, callback(closure_1_2[2]).UserSettingsDelay.INFREQUENT_USER_ACTION);
              return obj1;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const obj2 = { type: "BULK_CLEAR_RECENTS", guildId: null, channelIds: null };
            obj2[1] = callback;
            obj2[2] = callback2;
            callback2(709).dispatch(obj2);
            const obj5 = callback2(709);
            callback2(698).track(constants.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
            c5 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp6) {
          c5 = tmp;
          throw tmp6;
        }
      }
    })();
  });
  closure_5 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
const result = require("set").fileFinishedImporting("modules/recent_channels/RecentChannelsActionCreators.tsx");

export const bulkClearRecents = function bulkClearRecents(closure_0, closure_1) {
  const self = this;
  const apply = _bulkClearRecents.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};