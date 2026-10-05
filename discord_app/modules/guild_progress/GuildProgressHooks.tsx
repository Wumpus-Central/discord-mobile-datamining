// discord_app/modules/guild_progress/GuildProgressHooks.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import _modDef12 from "../../../_runtime/metro/00012__.js";
import react2 from "../../../_runtime/00576_react.js";
import canViewInviteModal from "../instant_invite/canViewInviteModal.tsx";
import react from "../../../_runtime/00019_react.js";
import AuthenticationStore from "../../stores/AuthenticationStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import GuildChannelStore_mod from "../../stores/GuildChannelStore.tsx";
import GuildMemberCountStore from "../../stores/GuildMemberCountStore.tsx";
import GuildStore from "../../stores/GuildStore.tsx";
import LayerStore from "../../stores/LayerStore.tsx";
import MessageStore from "../../stores/MessageStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

let closure_14;
let closure_15;
let metroImportDefault;
let metroRequire;
let GuildChannelStore = GuildChannelStore_mod;
({ GUILD_SELECTABLE_CHANNELS_KEY: metroRequire, GUILD_VOCAL_CHANNELS_KEY: metroImportDefault } = GuildChannelStore);
GuildChannelStore = GuildChannelStore_mod;
({ Permissions: closure_14, MessageTypes: closure_15 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0, arg1) => {
      let closure_0;
      let first;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("react");
      const cResult = obj.c(5);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [PermissionStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === arg0) {
        let tmp6;
        let tmp7;
        if (cResult[2] === arg1) {
          tmp6 = cResult[3];
          tmp7 = cResult[4];
        }
        const tmpResult = tmp(504);
        return tmpResult.useStateFromStoresObject(first, tmp6, tmp7);
      }
      const fn = function o() {
        let canResult;
        let canResult1;
        let canResult2;
        let obj2;
        const obj = {
          canInvite: obj2.canViewInviteModal(PermissionStore, closure_1, closure_0),
          canManageGuild: canResult,
          canMessage: canResult1,
          canCreateChannel: canResult2,
        };
        obj2 = canViewInviteModal;
        canResult = null != closure_1 && PermissionStore.can(constants.MANAGE_GUILD, closure_1);
        canResult1 = null != closure_0 && PermissionStore.can(constants.SEND_MESSAGES, closure_0);
        canResult2 = null != closure_1 && PermissionStore.can(constants.MANAGE_CHANNELS, closure_1);
        return obj;
      };
      const items1 = [arg1, arg0];
      cResult[1] = arg0;
      cResult[2] = arg1;
      cResult[3] = fn;
      cResult[4] = items1;
      tmp7 = items1;
      tmp6 = fn;
    }
  : (arg0, arg1) => {
      let closure_0;
      _require = arg0;
      let closure_1 = arg1;
      let obj = require("get initialized");
      const items = [PermissionStore];
      const items1 = [arg1, arg0];
      return obj.useStateFromStoresObject(
        items,
        () => {
          let canResult;
          let canResult1;
          let canResult2;
          let obj2;
          const obj = {
            canInvite: obj2.canViewInviteModal(PermissionStore, closure_1, closure_0),
            canManageGuild: canResult,
            canMessage: canResult1,
            canCreateChannel: canResult2,
          };
          obj2 = canViewInviteModal;
          canResult = null != closure_1 && PermissionStore.can(constants.MANAGE_GUILD, closure_1);
          canResult1 = null != closure_0 && PermissionStore.can(constants.SEND_MESSAGES, closure_0);
          canResult2 = null != closure_1 && PermissionStore.can(constants.MANAGE_CHANNELS, closure_1);
          return obj;
        },
        items1,
      );
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let tmp6;
      let tmp7;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function s() {
          id = undefined;
          const getChannels = GuildChannelStore.getChannels;
          if (id != null) {
            id = id.id;
          }
          const channels = getChannels(id);
          let obj = channels[metroImportDefault];
          function hasNewChannel(channel) {
            let tmp2 = null != id;
            if (tmp2) {
              const obj = SnowflakeUtilsDefault;
              const extractTimestampResult = obj.extractTimestamp(channel.channel.id);
              const obj2 = SnowflakeUtilsDefault;
              tmp2 = extractTimestampResult - obj2.extractTimestamp(tmp.id) > 500;
            }
            return tmp2;
          }
          let obj2 = channels[metroRequire];
          const tmp4 = obj2.some(hasNewChannel) || obj.some(hasNewChannel);
          return tmp4;
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStores(first, tmp6, tmp7);
    }
  : (arg0) => {
      _require = arg0;
      let obj = require("get initialized");
      const items = [GuildChannelStore];
      const items1 = [arg0];
      return obj.useStateFromStores(
        items,
        () => {
          id = undefined;
          const getChannels = GuildChannelStore.getChannels;
          if (id != null) {
            id = id.id;
          }
          function hasNewChannel(channel) {
            let tmp2 = null != id;
            if (tmp2) {
              const obj = SnowflakeUtilsDefault;
              const extractTimestampResult = obj.extractTimestamp(channel.channel.id);
              const obj2 = SnowflakeUtilsDefault;
              tmp2 = extractTimestampResult - obj2.extractTimestamp(tmp.id) > 500;
            }
            return tmp2;
          }
          const channels = getChannels(id);
          let obj = channels[metroImportDefault];
          let obj2 = channels[metroRequire];
          const tmp4 = obj2.some(hasNewChannel) || obj.some(hasNewChannel);
          return tmp4;
        },
        items1,
      );
    };
let closure_16 = tmp5;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (systemChannelId) => {
      let first;
      let stateFromStoresArray;
      let tmp11;
      let tmp13;
      let tmp15;
      let tmp8;
      _require = systemChannelId;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(13);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      systemChannelId = undefined;
      const tmp6 = cResult[1];
      if (systemChannelId != null) {
        systemChannelId = systemChannelId.systemChannelId;
      }
      if (tmp6 !== systemChannelId) {
        let systemChannelId1;
        if (systemChannelId != null) {
          systemChannelId1 = systemChannelId.systemChannelId;
        }
        const fn = function o() {
          systemChannelId = undefined;
          const getChannel = ChannelStore.getChannel;
          if (systemChannelId != null) {
            systemChannelId = systemChannelId.systemChannelId;
          }
          return getChannel(systemChannelId);
        };
        cResult[1] = systemChannelId1;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = tmp(stateFromStoresArray[13]);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MessageStore];
        cResult[3] = items1;
        tmp11 = items1;
      } else {
        tmp11 = cResult[3];
      }
      if (cResult[4] !== stateFromStores) {
        const fn2 = function c() {
          let toArrayResult;
          if (null != stateFromStores) {
            const messages = MessageStore.getMessages(tmp.id);
            toArrayResult = messages.toArray();
          } else {
            toArrayResult = [];
          }
          return toArrayResult;
        };
        cResult[4] = stateFromStores;
        cResult[5] = fn2;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[5];
      }
      const tmpResult3 = tmp(stateFromStoresArray[13]);
      stateFromStoresArray = tmpResult3.useStateFromStoresArray(tmp11, tmp13);
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [GuildMemberCountStore];
        cResult[6] = items2;
        tmp15 = items2;
      } else {
        tmp15 = cResult[6];
      }
      let id;
      const tmp17 = cResult[7];
      if (systemChannelId != null) {
        id = systemChannelId.id;
      }
      if (tmp17 === id) {
        let tmp19;
        if (cResult[8] === stateFromStoresArray) {
          tmp19 = cResult[9];
        }
        if (cResult[10] === systemChannelId) {
          let tmp21;
          if (cResult[11] === stateFromStoresArray) {
            tmp21 = cResult[12];
          }
          const tmpResult4 = tmp(stateFromStoresArray[13]);
          return tmpResult4.useStateFromStores(tmp15, tmp19, tmp21);
        }
        const items3 = [systemChannelId, stateFromStoresArray];
        cResult[10] = systemChannelId;
        cResult[11] = stateFromStoresArray;
        cResult[12] = items3;
        tmp21 = items3;
      }
      let id1;
      if (systemChannelId != null) {
        id1 = systemChannelId.id;
      }
      const fn3 = function v() {
        let id;
        const getMemberCount = GuildMemberCountStore.getMemberCount;
        if (systemChannelId != null) {
          id = systemChannelId.id;
        }
        let num = getMemberCount(id);
        if (num == null) {
          num = 0;
        }
        const tmp3 = num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
        return tmp3;
      };
      cResult[7] = id1;
      cResult[8] = stateFromStoresArray;
      cResult[9] = fn3;
      tmp19 = fn3;
    }
  : (arg0) => {
      let closure_0;
      let stateFromStoresArray;
      _require = arg0;
      const items = [ChannelStore];
      const obj = require("get initialized");
      let closure_1 = obj.useStateFromStores(items, () => {
        let systemChannelId;
        const getChannel = ChannelStore.getChannel;
        if (closure_0 != null) {
          systemChannelId = closure_0.systemChannelId;
        }
        return getChannel(systemChannelId);
      });
      const items1 = [MessageStore];
      const obj2 = require("get initialized");
      stateFromStoresArray = obj2.useStateFromStoresArray(items1, () => {
        let toArrayResult;
        if (null != closure_1) {
          const messages = MessageStore.getMessages(tmp.id);
          toArrayResult = messages.toArray();
        } else {
          toArrayResult = [];
        }
        return toArrayResult;
      });
      const items2 = [GuildMemberCountStore];
      const items3 = [arg0, stateFromStoresArray];
      const obj3 = require("get initialized");
      return obj3.useStateFromStores(
        items2,
        () => {
          let id;
          const getMemberCount = GuildMemberCountStore.getMemberCount;
          if (closure_0 != null) {
            id = closure_0.id;
          }
          let num = getMemberCount(id);
          if (num == null) {
            num = 0;
          }
          const tmp3 = num > 1 || stateFromStoresArray.some((type) => type.type === constants.USER_JOIN);
          return tmp3;
        },
        items3,
      );
    };
let closure_17 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      let tmp12;
      let tmp4;
      let tmp5;
      let tmp8;
      _require = id;
      const obj = require("react");
      const cResult = obj.c(5);
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
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [GuildStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      id = undefined;
      const tmp10 = cResult[3];
      if (id != null) {
        id = id.id;
      }
      if (tmp10 !== id) {
        let id1;
        if (id != null) {
          id1 = id.id;
        }
        const fn2 = function u() {
          id = undefined;
          const getGuild = GuildStore.getGuild;
          if (id != null) {
            id = id.id;
          }
          return getGuild(id);
        };
        cResult[3] = id1;
        cResult[4] = fn2;
        tmp12 = fn2;
      } else {
        tmp12 = cResult[4];
      }
      const tmpResult2 = require("get initialized");
      const stateFromStores1 = tmpResult2.useStateFromStores(tmp8, tmp12);
      let icon;
      if (stateFromStores1 != null) {
        icon = stateFromStores1.icon;
      }
      return null != icon && !stateFromStores;
    }
  : (arg0) => {
      _require = arg0;
      const items = [LayerStore];
      const obj = require("get initialized");
      const stateFromStores = obj.useStateFromStores(items, () => LayerStore.hasLayers());
      const items1 = [GuildStore];
      const obj2 = require("get initialized");
      const stateFromStores1 = obj2.useStateFromStores(items1, () => {
        id = undefined;
        const getGuild = GuildStore.getGuild;
        if (id != null) {
          id = id.id;
        }
        return getGuild(id);
      });
      let icon;
      if (stateFromStores1 != null) {
        icon = stateFromStores1.icon;
      }
      return null != icon && !stateFromStores;
    };
let closure_18 = tmp7;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let id;
      let tmp4;
      let tmp5;
      let tmp8;
      _require = arg0;
      let tmp = _require;
      let obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [AuthenticationStore];
        const fn = function o() {
          return id.getId();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MessageStore];
        cResult[2] = items1;
        tmp8 = items1;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === arg0) {
        let tmp10;
        if (cResult[4] === stateFromStores) {
          tmp10 = cResult[5];
        }
        const tmpResult2 = tmp(504);
        return tmpResult2.useStateFromStores(tmp8, tmp10);
      }
      const fn2 = function c() {
        const obj = _modDef12;
        return obj.some(closure_0, (id) => {
          messages = messages.getMessages(id.id);
          const toArrayResult = messages.toArray();
          const obj2 = stateFromStores(dependencyMap[15]);
          return obj2.some(toArrayResult, (author) => {
            const tmp = author.author.id === closure_1_1 && !stateFromStores(closure_2_2[16])(author);
            return tmp;
          });
        });
      };
      cResult[3] = arg0;
      cResult[4] = stateFromStores;
      cResult[5] = fn2;
      tmp10 = fn2;
    }
  : (arg0) => {
      let closure_0;
      let id;
      _require = arg0;
      let obj = require("get initialized");
      const items = [AuthenticationStore];
      let closure_1 = obj.useStateFromStores(items, () => id.getId());
      let obj2 = require("get initialized");
      const items1 = [MessageStore];
      return obj2.useStateFromStores(items1, () => {
        const obj = _modDef12;
        return obj.some(closure_0, (id) => {
          messages = messages.getMessages(id.id);
          const toArrayResult = messages.toArray();
          const obj2 = closure_1(dependencyMap[15]);
          return obj2.some(toArrayResult, (author) => {
            const tmp = author.author.id === closure_1_1 && !closure_2_1(closure_2_2[16])(author);
            return tmp;
          });
        });
      });
    };
let closure_19 = tmp8;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp6;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          let mutableBasicGuildChannelsForGuild = null;
          if (null != closure_0) {
            mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
          }
          return mutableBasicGuildChannelsForGuild;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6);
      if (null != stateFromStores) {
        let tmp9;
        if (cResult[4] !== stateFromStores) {
          const obj3 = _modDef12;
          const values = obj3.values(stateFromStores);
          cResult[4] = stateFromStores;
          cResult[5] = values;
          tmp9 = values;
        } else {
          tmp9 = cResult[5];
        }
        tmp8 = tmp9;
      } else {
        const _Symbol = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [];
          cResult[3] = items1;
          tmp8 = items1;
        } else {
          tmp8 = cResult[3];
        }
      }
      return closure_19(tmp8);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      let items = [ChannelStore];
      const stateFromStores = obj.useStateFromStores(items, () => {
        let mutableBasicGuildChannelsForGuild = null;
        if (null != closure_0) {
          mutableBasicGuildChannelsForGuild = ChannelStore.getMutableBasicGuildChannelsForGuild(tmp.id);
        }
        return mutableBasicGuildChannelsForGuild;
      });
      const items1 = [stateFromStores];
      return closure_19(
        react.useMemo(() => {
          let items;
          if (null == stateFromStores) {
            items = [];
          } else {
            const obj = _modDef12;
            items = obj.values(tmp);
          }
          return items;
        }, items1),
      );
    };
let closure_20 = tmp9;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp10 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = react2;
      const cResult = obj.c(5);
      const tmp2 = closure_17(arg0);
      const tmp3 = closure_20(arg0);
      const tmp4 = closure_18(arg0);
      const tmp5 = closure_16(arg0);
      if (cResult[0] === tmp2) {
        if (cResult[1] === tmp3) {
          if (cResult[2] === tmp4) {
            let tmp6;
            if (cResult[3] === tmp5) {
              tmp6 = cResult[4];
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
  : (arg0) => {
      const obj = {
        guildPopulated: closure_17(arg0),
        guildMessaged: closure_20(arg0),
        guildPersonalized: closure_18(arg0),
        guildChannelCreated: closure_16(arg0),
      };
      return obj;
    };
const result = size.fileFinishedImporting("modules/guild_progress/GuildProgressHooks.tsx");

export const usePermissions = tmp4;
export const useGuildChannelCreated = tmp5;
export const useGuildPopulated = tmp6;
export const useGuildPersonalized = tmp7;
export const useChannelsMessaged = tmp8;
export const useGuildMessaged = tmp9;
export const useCompletedStates = tmp10;
