// discord_app/modules/recent_channels/RecentChannelsActionCreators.tsx
import UserSettingsProtoActionCreators from "../user_settings/UserSettingsProtoActionCreators.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";

require = fn;
let closure_5 = async function _bulkClearRecents(arg0, value) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
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
          obj = { value, done: true };
          return obj;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          c4 = 1;
          c5 = 1;
          const obj1 = {
            value: UserSettingsProtoActionCreators.updateUserGuildSettings(
              closure_0,
              (arg0) => {
                const Timestamp = closure_1_0(closure_1_2[3]).Timestamp;
                arg0.guildRecentsDismissedAt = Timestamp.fromDate(new Date());
                return true;
              },
              UserSettingsProtoActionCreators.UserSettingsDelay.INFREQUENT_USER_ACTION,
            ),
            done: false,
          };
          return obj1;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const obj2 = { type: "BULK_CLEAR_RECENTS", guildId: closure_130_0, channelIds: closure_130_1 };
        closure_131_1(closure_131_2[4]).dispatch(obj2);
        const obj5 = closure_131_1(closure_131_2[4]);
        closure_131_1(closure_131_2[5]).track(closure_131_4.CHANNEL_LIST_UPDATED, { action_type: "recents_dismissed" });
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp6) {
      c5 = tmp;
      throw tmp6;
    }
  }
};
const AnalyticEvents = fn(1074).AnalyticEvents;
const size = fn(2);
const result = size.fileFinishedImporting("modules/recent_channels/RecentChannelsActionCreators.tsx");

export const bulkClearRecents = function bulkClearRecents() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
