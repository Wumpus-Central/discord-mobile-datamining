// discord_app/modules/guild_progress/GuildProgressHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import c from "../../../_runtime/00576_c.js";
import canViewInviteModal from "../instant_invite/canViewInviteModal.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../stores/GuildChannelStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import LayerStore from "../../stores/LayerStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";

require = fn;
let GuildChannelStore = fn(4705);
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: closure_7 } = GuildChannelStore);
let GuildChannelStore = GuildChannelStore_mod;
const Constants = fn(1085);
({ Permissions: closure_14, MessageTypes: closure_15 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildChannelCreated(arg0) {
      _require = arg0;
      const cResult = require("c").c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          const channels = GuildChannelStore.getChannels(id);
          function hasNewChannel(channel) {
            let tmp2 = null != id;
            if (tmp2) {
              const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(channel.channel.id);
              tmp2 = extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(tmp.id) > 500;
            }
            return tmp2;
          }
          return channels[timestampProducer].some(hasNewChannel) || channels[React5].some(hasNewChannel);
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        let tmp7 = items1;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      let obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6, tmp7);
    }
  : function useGuildChannelCreated(arg0) {
      _require = arg0;
      const items = [GuildChannelStore];
      const items1 = [arg0];
      return require("initialize").useStateFromStores(
        items,
        () => {
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          function hasNewChannel(channel) {
            let tmp2 = null != id;
            if (tmp2) {
              const extractTimestampResult = SnowflakeUtilsDefault.extractTimestamp(channel.channel.id);
              tmp2 = extractTimestampResult - SnowflakeUtilsDefault.extractTimestamp(tmp.id) > 500;
            }
            return tmp2;
          }
          const channels = GuildChannelStore.getChannels(id);
          return channels[timestampProducer].some(hasNewChannel) || channels[React5].some(hasNewChannel);
        },
        items1,
      );
    };
let closure_16 = tmp5;
ReactCompilerGating = fn(558);
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildPopulated(systemChannelId) {
      _require = systemChannelId;
      const cResult = require("c").c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      systemChannelId = undefined;
      if (systemChannelId != null) {
        systemChannelId = systemChannelId.systemChannelId;
      }
      if (cResult[1] !== systemChannelId) {
        let systemChannelId1;
        if (systemChannelId != null) {
          systemChannelId1 = systemChannelId.systemChannelId;
        }
        const fn = function l() {
          systemChannelId = undefined;
          if (systemChannelId != null) {
            systemChannelId = systemChannelId.systemChannelId;
          }
          return ChannelStore.getChannel(systemChannelId);
        };
        cResult[1] = systemChannelId1;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp7);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MessageStore];
        cResult[3] = items1;
        let tmp10 = items1;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function c() {
          if (null != stateFromStores) {
            const messages = MessageStore.getMessages(tmp.id);
            let toArrayResult = messages.toArray();
          } else {
            toArrayResult = [];
          }
          return toArrayResult;
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        let tmp12 = fn2;
      } else {
        tmp12 = cResult[5];
      }
      const tmpResult = require("initialize");
      stateFromStoresArray = require("initialize").useStateFromStoresArray(tmp10, tmp12);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberCountStore];
        cResult[6] = items2;
        let tmp14 = items2;
      } else {
        tmp14 = cResult[6];
      }
      let id;
      if (systemChannelId != null) {
        id = systemChannelId.id;
      }
      if (cResult[7] === id) {
        if (cResult[8] === stateFromStoresArray) {
          let tmp17 = cResult[9];
        }
        if (cResult[10] === systemChannelId) {
          if (cResult[11] === stateFromStoresArray) {
            let tmp19 = cResult[12];
          }
          return tmp(tmp2[13]).useStateFromStores(tmp14, tmp17, tmp19);
        }
        const items3 = [systemChannelId, stateFromStoresArray];
        cResult[10] = systemChannelId;
        cResult[11] = stateFromStoresArray;
        cResult[12] = items3;
        tmp19 = items3;
      }
      let id1;
      if (systemChannelId != null) {
        id1 = systemChannelId.id;
      }
      const fn3 = function v() {
        let id;
        if (systemChannelId != null) {
          id = systemChannelId.id;
        }
        let num = GuildMemberCountStore.getMemberCount(id);
        if (num == null) {
          num = 0;
        }
        return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
      };
      cResult[7] = id1;
      cResult[8] = stateFromStoresArray;
      cResult[9] = fn3;
      tmp17 = fn3;
      const tmpResult3 = require("initialize");
    }
  : function useGuildPopulated(arg0) {
      _require = arg0;
      const items = [ChannelStore];
      closure_1 = require("initialize").useStateFromStores(items, () => {
        let systemChannelId;
        if (closure_0 != null) {
          systemChannelId = closure_0.systemChannelId;
        }
        return ChannelStore.getChannel(systemChannelId);
      });
      const obj = require("initialize");
      const items1 = [MessageStore];
      stateFromStoresArray = require("initialize").useStateFromStoresArray(items1, () => {
        if (null != closure_1) {
          const messages = MessageStore.getMessages(tmp.id);
          let toArrayResult = messages.toArray();
        } else {
          toArrayResult = [];
        }
        return toArrayResult;
      });
      const obj2 = require("initialize");
      const items2 = [GuildMemberCountStore];
      const items3 = [arg0, stateFromStoresArray];
      return require("initialize").useStateFromStores(
        items2,
        () => {
          let id;
          if (closure_0 != null) {
            id = closure_0.id;
          }
          let num = GuildMemberCountStore.getMemberCount(id);
          if (num == null) {
            num = 0;
          }
          return num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
        },
        items3,
      );
    };
let closure_17 = tmp6;
ReactCompilerGating = fn(558);
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildPersonalized(id) {
      _require = id;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [LayerStore];
        const fn = function s() {
          return LayerStore.hasLayers();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      id = undefined;
      if (id != null) {
        id = id.id;
      }
      if (cResult[3] !== id) {
        let id1;
        if (id != null) {
          id1 = id.id;
        }
        const fn2 = function u() {
          id = undefined;
          if (id != null) {
            id = id.id;
          }
          return GuildStore.getGuild(id);
        };
        cResult[3] = id1;
        cResult[4] = fn2;
        let tmp11 = fn2;
      } else {
        tmp11 = cResult[4];
      }
      const tmpResult = require("initialize");
      const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp11);
      let icon;
      if (stateFromStores1 != null) {
        icon = stateFromStores1.icon;
      }
      return null != icon && !stateFromStores;
    }
  : function useGuildPersonalized(arg0) {
      _require = arg0;
      const items = [LayerStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => LayerStore.hasLayers());
      const obj = require("initialize");
      const items1 = [GuildStore];
      const stateFromStores1 = require("initialize").useStateFromStores(items1, () => {
        id = undefined;
        if (id != null) {
          id = id.id;
        }
        return GuildStore.getGuild(id);
      });
      let icon;
      if (stateFromStores1 != null) {
        icon = stateFromStores1.icon;
      }
      return null != icon && !stateFromStores;
    };
let closure_18 = tmp7;
ReactCompilerGating = fn(558);
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelsMessaged(arg0) {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function l() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MessageStore];
        cResult[2] = items1;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === arg0) {
        if (cResult[4] === stateFromStores) {
          let tmp10 = cResult[5];
        }
        return tmp(504).useStateFromStores(tmp8, tmp10);
      }
      const fn2 = function c() {
        return _modDef12.some(closure_0, (id) => {
          messages = messages.getMessages(id.id);
          const toArrayResult = messages.toArray();
          return stateFromStores(dependencyMap[15]).some(toArrayResult, (author) => {
            let tmp = author.author.id === closure_1_1;
            if (tmp) {
              tmp = !stateFromStores(closure_2_2[16])(author);
            }
            return tmp;
          });
        });
      };
      cResult[3] = arg0;
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      tmp10 = fn2;
      const tmpResult = require("initialize");
    }
  : function useChannelsMessaged(arg0) {
      _require = arg0;
      const items = [AuthenticationStore];
      closure_1 = require("initialize").useStateFromStores(items, () => id.getId());
      const obj = require("initialize");
      const items1 = [MessageStore];
      return require("initialize").useStateFromStores(items1, () =>
        _modDef12.some(closure_0, (id) => {
          messages = messages.getMessages(id.id);
          const toArrayResult = messages.toArray();
          return closure_1(dependencyMap[15]).some(toArrayResult, (author) => {
            let tmp = author.author.id === closure_1_1;
            if (tmp) {
              tmp = !closure_2_1(closure_2_2[16])(author);
            }
            return tmp;
          });
        }),
      );
    };
let closure_19 = tmp8;
ReactCompilerGating = fn(558);
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function useGuildMessaged(arg0) {
      _require = arg0;
      let values = dependencyMap;
      const cResult = require("c").c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let mutableBasicGuildChannelsForGuild = null;
          if (null != closure_0) {
            mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
          }
          return mutableBasicGuildChannelsForGuild;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("initialize").useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        if (cResult[4] !== stateFromStores) {
          values = _modDef12.values(stateFromStores);
          cResult[4] = stateFromStores;
          cResult[5] = values;
        }
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[3] = items1;
          let tmp8 = items1;
        } else {
          tmp8 = cResult[3];
        }
        return closure_19(tmp8);
      }
      const tmpResult = require("initialize");
    }
  : function useGuildMessaged(arg0) {
      _require = arg0;
      let items = [ChannelStore];
      const stateFromStores = require("initialize").useStateFromStores(items, () => {
        let mutableBasicGuildChannelsForGuild = null;
        if (null != closure_0) {
          mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
        }
        return mutableBasicGuildChannelsForGuild;
      });
      const items1 = [stateFromStores];
      return closure_19(
        noop.useMemo(() => {
          if (null == stateFromStores) {
            let items = [];
          } else {
            items = _modDef12.values(tmp);
          }
          return items;
        }, items1),
      );
    };
let closure_20 = tmp9;
ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePermissions(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        if (cResult[2] === arg1) {
          let tmp6 = cResult[3];
          let tmp7 = cResult[4];
        }
        return tmp(504).useStateFromStoresObject(first, tmp6, tmp7);
      }
      const fn = function l() {
        const obj = {
          canInvite: canViewInviteModal.canViewInviteModal(PermissionStore, closure_1, closure_0),
          canManageGuild: null,
          canMessage: null,
          canCreateChannel: null,
        };
        let canResult = null != closure_1;
        if (canResult) {
          canResult = PermissionStore.can(constants.MANAGE_GUILD, closure_1);
        }
        obj.canManageGuild = canResult;
        let canResult1 = null != closure_0;
        if (canResult1) {
          canResult1 = PermissionStore.can(constants.SEND_MESSAGES, closure_0);
        }
        obj.canMessage = canResult1;
        let canResult2 = null != closure_1;
        if (canResult2) {
          canResult2 = PermissionStore.can(constants.MANAGE_CHANNELS, closure_1);
        }
        obj.canCreateChannel = canResult2;
        return obj;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
      let obj = require("c");
      tmp = _require;
    }
  : function usePermissions(arg0, arg1) {
      _require = arg0;
      closure_1 = arg1;
      const items = [PermissionStore];
      const items1 = [arg1, arg0];
      return require("initialize").useStateFromStoresObject(
        items,
        () => {
          const obj = {
            canInvite: canViewInviteModal.canViewInviteModal(PermissionStore, closure_1, closure_0),
            canManageGuild: null,
            canMessage: null,
            canCreateChannel: null,
          };
          let canResult = null != closure_1;
          if (canResult) {
            canResult = PermissionStore.can(constants.MANAGE_GUILD, closure_1);
          }
          obj.canManageGuild = canResult;
          let canResult1 = null != closure_0;
          if (canResult1) {
            canResult1 = PermissionStore.can(constants.SEND_MESSAGES, closure_0);
          }
          obj.canMessage = canResult1;
          let canResult2 = null != closure_1;
          if (canResult2) {
            canResult2 = PermissionStore.can(constants.MANAGE_CHANNELS, closure_1);
          }
          obj.canCreateChannel = canResult2;
          return obj;
        },
        items1,
      );
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = tmp4;
export const useGuildChannelCreated = tmp5;
export const useGuildPopulated = tmp6;
export const useGuildPersonalized = tmp7;
export const useChannelsMessaged = tmp8;
export const useGuildMessaged = tmp9;
export const useCompletedStates = ReactCompilerGating.isReactCompilerEnabled()
  ? function useCompletedStates(arg0) {
      const cResult = c.c(5);
      const tmp2 = closure_17(arg0);
      const tmp3 = closure_20(arg0);
      const tmp4 = closure_18(arg0);
      const tmp5 = closure_16(arg0);
      if (cResult[0] === tmp2) {
        if (cResult[1] === tmp3) {
          if (cResult[2] === tmp4) {
            if (cResult[3] === tmp5) {
              let tmp6 = cResult[4];
            }
            return tmp6;
          }
        }
      }
      const obj2 = { guildPopulated: tmp2, guildMessaged: tmp3, guildPersonalized: tmp4, guildChannelCreated: tmp5 };
      cResult[0] = tmp2;
      cResult[1] = tmp3;
      cResult[2] = tmp4;
      cResult[3] = tmp5;
      cResult[4] = obj2;
      tmp6 = obj2;
    }
  : function useCompletedStates(arg0) {
      return {
        guildPopulated: closure_17(arg0),
        guildMessaged: closure_20(arg0),
        guildPersonalized: closure_18(arg0),
        guildChannelCreated: closure_16(arg0),
      };
    };
