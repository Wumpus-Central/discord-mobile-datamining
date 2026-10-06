// === Module 16620: ConjureStaffAccess ===

// Module 16620 (ConjureStaffAccess)
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import GuildChannelStore from "GuildChannelStore" /* 4513 */;
import GuildStore from "GuildStore" /* 2074 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let channel, currentUser, guildsArray, selectableChannels;

const GuildFeatures = Constants.GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let guildId;
  let tmp4;
  let tmp5;
  let obj = react;
  const cResult = obj.c(6);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
    const fn = function h() {
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
            let found = selectableChannels.find((channel) => {
              channel = channel.channel;
              const obj = closure_1_0(closure_1_1[7]);
              return obj.computeChannelName(channel, currentUser, closure_1_4) === closure_1_7;
            });
            if (null != found) {
              let obj = { isStaff: flag, guildId: item10017.id, channelId: found.channel.id };
              obj3.return();
              return obj;
            }
          }
          continue;
        }
        return { isStaff: flag, guildId: null, channelId: null };
      } else {
        return { isStaff: flag, guildId: null, channelId: null };
      }
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp4 = items;
    tmp5 = fn;
  } else {
    [tmp4, tmp5] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStoresObject = tmpResult.useStateFromStoresObject(tmp4, tmp5);
  ({ guildId, channelId } = stateFromStoresObject);
  let tmp11 = null;
  if (stateFromStoresObject.isStaff) {
    let tmp12;
    if (null != guildId) {
      if (null != channelId) {
        if (cResult[2] === channelId) {
          let tmp14;
          if (cResult[3] === guildId) {
            tmp14 = cResult[4];
          }
          tmp12 = tmp14;
        }
        const obj2 = { kind: "channel", guildId, channelId };
        cResult[2] = channelId;
        cResult[3] = guildId;
        cResult[4] = obj2;
        tmp14 = obj2;
      }
      tmp11 = tmp12;
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { kind: "url", url };
      cResult[5] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[5];
    }
  }
  return tmp11;
}) : (() => {
  let channelId;
  let guildId;
  let obj = get_initialized;
  const items = [UserStore, GuildStore, GuildChannelStore, RelationshipStore];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => {
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
          let found = selectableChannels.find((channel) => {
            channel = channel.channel;
            const obj = closure_1_0(closure_1_1[7]);
            return obj.computeChannelName(channel, currentUser, closure_1_4) === closure_1_7;
          });
          if (null != found) {
            let obj = { isStaff: flag, guildId: item10017.id, channelId: found.channel.id };
            obj3.return();
            return obj;
          }
        }
        continue;
      }
      return { isStaff: flag, guildId: null, channelId: null };
    } else {
      return { isStaff: flag, guildId: null, channelId: null };
    }
  });
  ({ guildId, channelId } = stateFromStoresObject);
  let tmp2 = null;
  if (stateFromStoresObject.isStaff) {
    if (null != guildId) {
      let obj3;
      if (null != channelId) {
        const obj2 = { kind: "channel", guildId, channelId };
        obj3 = obj2;
      }
      tmp2 = obj3;
    }
    obj3 = { kind: "url", url };
  }
  return tmp2;
});
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureStaffAccess.tsx");

export const CONJURE_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const CONJURE_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export const useConjureStaffAccessTarget = tmp2;