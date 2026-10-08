// discord_app/modules/messages/useReactionPermissions.tsx
import _slicedToArray from "../../../_runtime/metro/00032__.js";
import LurkingStore from "../lurker_mode/LurkingStore.tsx";
import GuildMemberStore from "../../stores/GuildMemberStore.tsx";
import GuildVerificationStore from "../../stores/GuildVerificationStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

const require = globalThis.__r;

const require = fn;
const Permissions = fn(1085).Permissions;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/messages/useReactionPermissions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useReactionPermissions(guild_id) {
      _require = guild_id;
      const cResult = require("c").c(30);
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildVerificationStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== guild_id) {
        const fn = function h() {
          let canChatInGuildResult = null == guild_id;
          if (!canChatInGuildResult) {
            canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        };
        const items1 = [guild_id];
        cResult[1] = guild_id;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp8 = items1;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const obj = require("c");
      stateFromStores = require("initialize").useStateFromStores(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [LurkingStore];
        cResult[4] = items2;
        let tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== guild_id) {
        const fn2 = function v() {
          let isLurkingResult = null != guild_id;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(tmp);
          }
          return isLurkingResult;
        };
        const items3 = [guild_id];
        cResult[5] = guild_id;
        cResult[6] = fn2;
        cResult[7] = items3;
        let tmp13 = items3;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[6];
        tmp13 = cResult[7];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp10, tmp12, tmp13);
      if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
        const items4 = [GuildMemberStore];
        cResult[8] = items4;
        let tmp15 = items4;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== guild_id) {
        class P {
          constructor() {
            isCurrentUserGuestResult = null != guild_id;
            if (isCurrentUserGuestResult) {
              tmp3 = closure_5;
              isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
            }
            return isCurrentUserGuestResult;
          }
        }
        const items5 = [guild_id];
        cResult[9] = guild_id;
        cResult[10] = P;
        cResult[11] = items5;
        let tmp18 = items5;
      } else {
        class P {
          constructor() {
            isCurrentUserGuestResult = null != guild_id;
            if (isCurrentUserGuestResult) {
              tmp3 = closure_5;
              isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
            }
            return isCurrentUserGuestResult;
          }
        }
        tmp18 = cResult[11];
      }
      const tmpResult7 = require("initialize");
      const stateFromStores2 = require("initialize").useStateFromStores(tmp15, P, tmp18);
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class P {
          constructor() {
            isCurrentUserGuestResult = null != guild_id;
            if (isCurrentUserGuestResult) {
              tmp3 = closure_5;
              isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
            }
            return isCurrentUserGuestResult;
          }
        }
        const items6 = [PermissionStore];
        cResult[12] = items6;
        const tmp20 = items6;
      } else {
        class P {
          constructor() {
            isCurrentUserGuestResult = null != guild_id;
            if (isCurrentUserGuestResult) {
              tmp3 = closure_5;
              isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
            }
            return isCurrentUserGuestResult;
          }
        }
      }
      if (cResult[13] === stateFromStores) {
        class P {
          constructor() {
            isCurrentUserGuestResult = null != guild_id;
            if (isCurrentUserGuestResult) {
              tmp3 = closure_5;
              isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
            }
            return isCurrentUserGuestResult;
          }
        }
        const stateFromStores3 = tmp(tmp2[8]).useStateFromStores(tmp20, G, items7);
        const tmpResult9 = tmp(tmp2[8]);
        const currentUserAutomodQuaratinedProfile = tmp(tmp2[9]).useCurrentUserAutomodQuaratinedProfile(guild_id);
        const tmpResult10 = tmp(tmp2[9]);
        const tmp24 = _slicedToArray(tmp(tmp2[10]).useCurrentUserCommunicationDisabled(guild_id), 2)[1];
        const tmpResult11 = tmp(tmp2[10]);
        const isActiveChannelOrUnarchivableThread = tmp(tmp2[11]).useIsActiveChannelOrUnarchivableThread(guild_id);
        if (null == guild_id) {
          class P {
            constructor() {
              isCurrentUserGuestResult = null != guild_id;
              if (isCurrentUserGuestResult) {
                tmp3 = closure_5;
                isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
              }
              return isCurrentUserGuestResult;
            }
          }
          if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
            class P {
              constructor() {
                isCurrentUserGuestResult = null != guild_id;
                if (isCurrentUserGuestResult) {
                  tmp3 = closure_5;
                  isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
                }
                return isCurrentUserGuestResult;
              }
            }
            cResult[17] = tmp30;
          } else {
            class P {
              constructor() {
                isCurrentUserGuestResult = null != guild_id;
                if (isCurrentUserGuestResult) {
                  tmp3 = closure_5;
                  isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
                }
                return isCurrentUserGuestResult;
              }
            }
          }
          return tmp30;
        } else {
          class P {
            constructor() {
              isCurrentUserGuestResult = null != guild_id;
              if (isCurrentUserGuestResult) {
                tmp3 = closure_5;
                isCurrentUserGuestResult = closure_5.isCurrentUserGuest(tmp);
              }
              return isCurrentUserGuestResult;
            }
          }
          const obj2 = {
            channel: guild_id,
            canChat: stateFromStores,
            renderReactions: true,
            canAddNewReactions: stateFromStores3,
            isLurking: stateFromStores1,
            communicationDisabled: tmp24,
            isActiveChannelOrUnarchivableThread,
            isAutomodQuarantined: currentUserAutomodQuaratinedProfile,
          };
          const tmp28 = guild_id(tmp2[12])(obj2);
          cResult[18] = stateFromStores3;
          cResult[19] = stateFromStores;
          cResult[20] = guild_id;
          cResult[21] = tmp24;
          cResult[22] = isActiveChannelOrUnarchivableThread;
          cResult[23] = currentUserAutomodQuaratinedProfile;
          cResult[24] = stateFromStores1;
          cResult[25] = tmp28;
        }
        const tmpResult12 = tmp(tmp2[11]);
      }
      class G {
        constructor() {
          canResult = closure_2;
          if (closure_2) {
            tmp2 = closure_7;
            tmp3 = Permissions;
            tmp4 = closure_0;
            canResult = closure_7.can(Permissions.ADD_REACTIONS, closure_0);
          }
          return canResult;
        }
      }
      items7 = [stateFromStores, guild_id];
      cResult[13] = stateFromStores;
      cResult[14] = guild_id;
      cResult[15] = G;
      cResult[16] = items7;
      const tmpResult8 = require("initialize");
    }
  : function useReactionPermissions(guild_id) {
      _require = guild_id;
      guild_id = undefined;
      if (guild_id != null) {
        guild_id = guild_id.guild_id;
      }
      const items = [GuildVerificationStore];
      const items1 = [guild_id];
      stateFromStores = require("initialize").useStateFromStores(
        items,
        () => {
          let canChatInGuildResult = null == guild_id;
          if (!canChatInGuildResult) {
            canChatInGuildResult = GuildVerificationStore.canChatInGuild(tmp);
          }
          return canChatInGuildResult;
        },
        items1,
      );
      const obj = require("initialize");
      const tmp2 = stateFromStores;
      const items2 = [LurkingStore];
      const items3 = [guild_id];
      const stateFromStores1 = require("initialize").useStateFromStores(
        items2,
        () => {
          let isLurkingResult = null != guild_id;
          if (isLurkingResult) {
            isLurkingResult = LurkingStore.isLurking(tmp);
          }
          return isLurkingResult;
        },
        items3,
      );
      const obj2 = require("initialize");
      const items4 = [GuildMemberStore];
      const items5 = [guild_id];
      const stateFromStores2 = require("initialize").useStateFromStores(
        items4,
        () => {
          let isCurrentUserGuestResult = null != guild_id;
          if (isCurrentUserGuestResult) {
            isCurrentUserGuestResult = GuildMemberStore.isCurrentUserGuest(tmp);
          }
          return isCurrentUserGuestResult;
        },
        items5,
      );
      const obj3 = require("initialize");
      const items6 = [PermissionStore];
      const items7 = [stateFromStores, guild_id];
      const stateFromStores3 = require("initialize").useStateFromStores(
        items6,
        () => {
          let canResult = stateFromStores;
          if (stateFromStores) {
            canResult = PermissionStore.can(Permissions.ADD_REACTIONS, closure_0);
          }
          return canResult;
        },
        items7,
      );
      const obj4 = require("initialize");
      const currentUserAutomodQuaratinedProfile =
        require("AutomodPermissionUtils").useCurrentUserAutomodQuaratinedProfile(guild_id);
      const obj5 = require("AutomodPermissionUtils");
      require("ThreadHooks");
      if (null == guild_id) {
        let obj7 = {
          disableReactionReads: true,
          disableReactionCreates: true,
          disableReactionUpdates: true,
          isLurking: false,
          isGuest: false,
          isPendingMember: false,
        };
      } else {
        obj7 = {};
        const obj8 = {
          channel: guild_id,
          canChat: stateFromStores,
          renderReactions: true,
          canAddNewReactions: stateFromStores3,
          isLurking: stateFromStores1,
          communicationDisabled: _slicedToArray(obj6.useCurrentUserCommunicationDisabled(guild_id), 2)[1],
          isActiveChannelOrUnarchivableThread: tmp9,
          isAutomodQuarantined: currentUserAutomodQuaratinedProfile,
        };
        const merged = Object.assign(guild_id(tmp2[12])(obj8));
        obj7.isLurking = stateFromStores1;
        obj7.isGuest = stateFromStores2;
        obj7.isPendingMember = false;
      }
      return obj7;
    };
