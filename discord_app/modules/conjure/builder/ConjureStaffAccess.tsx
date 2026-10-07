// discord_app/modules/conjure/builder/ConjureStaffAccess.tsx
import initialize from "../../../../discord_common/js/packages/flux/index.tsx";
import c from "../../../../_runtime/00576_c.js";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const GuildFeatures = fn(1085).GuildFeatures;
let c7 = "conjuring-help";
let c8 = "https://i.dis.gd/conjuring-access";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/builder/ConjureStaffAccess.tsx");

export const CONJURE_STAFF_ACCESS_CHANNEL_NAME = "conjuring-help";
export const CONJURE_STAFF_ACCESS_URL = "https://i.dis.gd/conjuring-access";
export const useConjureStaffAccessTarget = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(6);
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
                let found = selectableChannels.find(
                  (channel) =>
                    closure_1_0(closure_1_1[7]).computeChannelName(channel.channel, currentUser, closure_1_4) ===
                    closure_1_7,
                );
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
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStoresObject = initialize.useStateFromStoresObject(tmp4, tmp5);
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
        cResult[4] = obj3;
      }
      const tmpResult = initialize;
    }
  : () => {
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
              let found = selectableChannels.find(
                (channel) =>
                  closure_1_0(closure_1_1[7]).computeChannelName(channel.channel, currentUser, closure_1_4) ===
                  closure_1_7,
              );
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
    };
