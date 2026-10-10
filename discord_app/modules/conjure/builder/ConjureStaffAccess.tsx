// === Module 17075: ConjureStaffAccess ===

// Module 17075 (ConjureStaffAccess)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import GuildChannelStore from "GuildChannelStore" /* 4748 */;
import GuildStore from "GuildStore" /* 2087 */;
import RelationshipStore from "RelationshipStore" /* 4760 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureStaffAccess.tsx");

export const CONJURE_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const CONJURE_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export const useConjureStaffAccessTarget = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureStaffAccessTarget() {
  const cResult = c.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
    class S {
      constructor() {
        currentUser = closure_1_5.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.isStaff();
        }
        if (flag == null) {
          flag = false;
        }
        if (flag) {
          tmp = closure_1_3;
          guildsArray = closure_1_3.getGuildsArray();
          tmp3 = guildsArray;
          tmp4 = guildsArray;
          for (const item10017 of guildsArray) {
            features = item10017.features;
            tmp6 = closure_1_6;
            tmp5 = item10017;
            if (!features.has(closure_1_6.INTERNAL_EMPLOYEE_ONLY)) {
            } else {
              tmp7 = closure_1_2;
              tmp8 = item10017;
              selectableChannels = closure_1_2.getSelectableChannels(tmp5.id);
              found = selectableChannels.find(() => { ... });
              tmp10 = found;
              if (null != found) {
                obj1 = { isStaff: null, guildId: null, channelId: null };
                obj1.isStaff = flag;
                obj1.guildId = item10017.id;
                obj1.channelId = found.channel.id;
                tmp11 = obj3;
                obj3.return();
                return obj1;
              }
            }
            continue;
          }
          obj6 = { isStaff: null, guildId: null, channelId: null };
          obj6.isStaff = flag;
          return obj6;
        } else {
          obj7 = { isStaff: null, guildId: null, channelId: null };
          obj7.isStaff = flag;
          return obj7;
        }
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp4 = items;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, S);
  ({ guildId, channelId } = stateFromStoresObject);
  if (!stateFromStoresObject.isStaff) {
    return null;
  } else {
    if (null == guildId) {
      const _Symbol = Symbol;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        let obj2 = { kind: "url", url };
        cResult[5] = obj2;
      }
    }
    if (cResult[2] === channelId) {
    }
    const obj3 = { kind: "channel", guildId, channelId };
    cResult[2] = channelId;
    cResult[3] = guildId;
    class S {
      constructor() {
        currentUser = closure_1_5.getCurrentUser();
        flag = undefined;
        if (currentUser != null) {
          flag = currentUser.isStaff();
        }
        if (flag == null) {
          flag = false;
        }
        if (flag) {
          tmp = closure_1_3;
          guildsArray = closure_1_3.getGuildsArray();
          tmp3 = guildsArray;
          tmp4 = guildsArray;
          for (const item10017 of guildsArray) {
            features = item10017.features;
            tmp6 = closure_1_6;
            tmp5 = item10017;
            if (!features.has(closure_1_6.INTERNAL_EMPLOYEE_ONLY)) {
            } else {
              tmp7 = closure_1_2;
              tmp8 = item10017;
              selectableChannels = closure_1_2.getSelectableChannels(tmp5.id);
              found = selectableChannels.find(() => { ... });
              tmp10 = found;
              if (null != found) {
                obj1 = { isStaff: null, guildId: null, channelId: null };
                obj1.isStaff = flag;
                obj1.guildId = item10017.id;
                obj1.channelId = found.channel.id;
                tmp11 = obj3;
                obj3.return();
                return obj1;
              }
            }
            continue;
          }
          obj6 = { isStaff: null, guildId: null, channelId: null };
          obj6.isStaff = flag;
          return obj6;
        } else {
          obj7 = { isStaff: null, guildId: null, channelId: null };
          obj7.isStaff = flag;
          return obj7;
        }
      }
    }
    cResult[4] = obj3;
  }
  const tmpResult = initialize;
}) : (function useConjureStaffAccessTarget() {
  const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
  const stateFromStoresObject = initialize.useStateFromStoresObject(items, () => {
    currentUser = currentUser.getCurrentUser();
    let flag;
    if (currentUser != null) {
      flag = currentUser.isStaff();
    }
    if (flag == null) {
      flag = false;
    }
    if (flag) {
      guildsArray = guildsArray.getGuildsArray();
      for (const item10017 of guildsArray) {
        let features = item10017.features;
        if (features.has(constants.INTERNAL_EMPLOYEE_ONLY)) {
          selectableChannels = selectableChannels.getSelectableChannels(item10017.id);
          let found = selectableChannels.find((channel) => closure_1_0(closure_1_1[7]).computeChannelName(channel.channel, currentUser, closure_1_4) === closure_1_7);
          if (null != found) {
            let obj = { isStaff: flag, guildId: item10017.id, channelId: found.channel.id };
            obj3.return();
            return obj;
          }
        }
        continue;
      }
      const obj2 = { isStaff: flag, guildId: null, channelId: null };
      return obj2;
    } else {
      const obj4 = { isStaff: flag, guildId: null, channelId: null };
      return obj4;
    }
  });
  ({ guildId, channelId } = stateFromStoresObject);
  if (!stateFromStoresObject.isStaff) {
    return null;
  } else {
    if (null == guildId) {
      let obj2 = { kind: "url", url };
    }
    const obj3 = { kind: "channel", guildId, channelId };
  }
});