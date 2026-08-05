// discord_app/modules/nuf_channels/native/NUFChannelsManager.tsx
import trackCommunicationDisabled from "trackCommunicationDisabled";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleConnectionOpen from "handleConnectionOpen";
import mergeGuildAvatar from "mergeGuildAvatar";
import { GuildFeatures } from "ME";
import { GuildMemberFlags } from "GuildMemberFlags";
import "initialize";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";
import { getRootNavigationRef } from "../../main_tabs_v2/RootNavigationRef.native.tsx";

let require = arg1;
let c9 = "2020_02_nuf_channels";
let c10 = "2020_02_nuf_voice_channels";
class NUFChannelsManager extends tmp2 {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    applyArgumentsResult.actions = {
      LOGOUT() {
            return applyArgumentsResult.clear();
          }
    };
    applyArgumentsResult.handleNavigationStateChanged = function handleNavigationStateChanged() {
      if ("guilds" === obj.getCurrentNavigationRouteName()) {
        const guildId = outer1_5.getGuildId();
        const guild = outer1_4.getGuild(guildId);
        let tmp5 = null != guildId;
        if (tmp5) {
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(outer1_7.HUB);
          }
          tmp5 = !hasItem;
        }
        let selfMember = null;
        if (null != guild) {
          selfMember = outer1_3.getSelfMember(guild.id);
        }
        let hasItem1 = null != guild;
        if (hasItem1) {
          const features2 = guild.features;
          hasItem1 = features2.has(outer1_7.GUILD_ONBOARDING);
        }
        if (hasItem1) {
          let tmpResult = tmp(tmp2[11]);
          let num;
          if (selfMember != null) {
            num = selfMember.flags;
          }
          if (num == null) {
            num = 0;
          }
          hasItem1 = tmpResult.hasFlag(num, outer1_8.STARTED_ONBOARDING);
        }
        if (hasItem1) {
          tmpResult = tmp(tmp2[11]);
          let num2;
          if (selfMember != null) {
            num2 = selfMember.flags;
          }
          if (num2 == null) {
            num2 = 0;
          }
          hasItem1 = !tmpResult.hasFlag(num2, outer1_8.COMPLETED_ONBOARDING);
        }
        if (tmp5) {
          tmp5 = !hasItem1;
        }
        if (tmp5) {
          const Storage = tmp(tmp2[6]).Storage;
          const value = Storage.get(outer1_9);
          let isNewUserResult = !value;
          if (!value) {
            isNewUserResult = tmp(tmp2[7]).isNewUser(outer1_6.getCurrentUser());
            const tmpResult1 = tmp(tmp2[7]);
          }
          if (isNewUserResult) {
            outer1_1(tmp2[12]).openLazy(tmp(tmp2[14])(tmp2[13], tmp2.paths), "NUFChannelsActionSheet");
            const Storage2 = tmp(tmp2[6]).Storage;
            const result = Storage2.set(tmp12, true);
            const obj5 = outer1_1(tmp2[12]);
          }
          applyArgumentsResult.terminate();
          tmp12 = outer1_9;
        }
      }
    };
    applyArgumentsResult.requiresVoiceChannelsOnboard = function requiresVoiceChannelsOnboard() {
      const Storage = applyArgumentsResult(595).Storage;
      const value = Storage.get(closure_10);
      let isNewUserResult = !value;
      if (!value) {
        isNewUserResult = applyArgumentsResult(4124).isNewUser(currentUser.getCurrentUser());
        const tmpResult = applyArgumentsResult(4124);
      }
      return isNewUserResult;
    };
    applyArgumentsResult.handleVoiceChannelsOnboard = function handleVoiceChannelsOnboard() {
      const Storage = applyArgumentsResult(595).Storage;
      const result = Storage.set(closure_10, true);
    };
    applyArgumentsResult.clear = function clear() {
      const Storage = applyArgumentsResult(595).Storage;
      Storage.remove(closure_9);
      const Storage2 = applyArgumentsResult(595).Storage;
      Storage2.remove(closure_10);
    };
    return applyArgumentsResult;
  }
}
const prototype = NUFChannelsManager.prototype;
prototype["_initialize"] = function _initialize() {
  const Storage = Storage /* Storage */.Storage;
  const value = Storage.get(c9);
  let isNewUserResult = !value;
  if (!value) {
    let tmpResult = tmp(4124);
    isNewUserResult = tmpResult.isNewUser(currentUser.getCurrentUser());
  }
  if (isNewUserResult) {
    tmpResult = tmp(4137);
    const rootNavigationRef = tmpResult.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const self = this;
      rootNavigationRef.addListener("state", this.handleNavigationStateChanged);
    }
  }
};
prototype["_terminate"] = function _terminate() {
  const rootNavigationRef = getRootNavigationRef /* getRootNavigationRef */.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const self = this;
    rootNavigationRef.removeListener("state", this.handleNavigationStateChanged);
  }
};
const nUFChannelsManager = new NUFChannelsManager();
let result = require("handleConnectionOpen").fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default nUFChannelsManager;