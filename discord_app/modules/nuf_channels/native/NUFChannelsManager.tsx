// discord_app/modules/nuf_channels/native/NUFChannelsManager.tsx
import Storage3 from "../../../../discord_common/js/packages/storage/Storage.tsx";
import nameFromUser from "../../../utils/UserUtils.tsx";
import getRootNavigationRef from "../../main_tabs_v2/RootNavigationRef.native.tsx";
import ACTION_SHEET_HEIGHT_HALFDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import initializeDefault from "../../../lib/AutomaticLifecycleManager.tsx";
import trackCommunicationDisabled from "../../../stores/GuildMemberStore.tsx";
import createGuildRecordFromRust from "../../../stores/GuildStore.tsx";
import handleConnectionOpen from "../../../stores/SelectedGuildStore.tsx";
import mergeGuildAvatar from "../../../stores/UserStore.tsx";
import { GuildFeatures } from "../../../Constants.tsx";
import { GuildMemberFlags } from "../../guild_member/GuildMemberConstants.tsx";

require = fn;
let c9 = "2020_02_nuf_channels";
let c10 = "2020_02_nuf_voice_channels";
initializeDefault;
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
        const guildId = closure_1_5.getGuildId();
        const guild = closure_1_4.getGuild(guildId);
        let tmp5 = null != guildId;
        if (tmp5) {
          let hasItem;
          if (guild != null) {
            const features = guild.features;
            hasItem = features.has(GuildFeatures.HUB);
          }
          tmp5 = !hasItem;
        }
        let selfMember = null;
        if (null != guild) {
          selfMember = closure_1_3.getSelfMember(guild.id);
        }
        let hasItem1 = null != guild;
        if (hasItem1) {
          const features2 = guild.features;
          hasItem1 = features2.has(GuildFeatures.GUILD_ONBOARDING);
        }
        if (hasItem1) {
          let tmpResult = applyArgumentsResult(dependencyMap[11]);
          let num;
          if (selfMember != null) {
            num = selfMember.flags;
          }
          if (num == null) {
            num = 0;
          }
          hasItem1 = tmpResult.hasFlag(num, GuildMemberFlags.STARTED_ONBOARDING);
        }
        if (hasItem1) {
          tmpResult = applyArgumentsResult(dependencyMap[11]);
          let num2;
          if (selfMember != null) {
            num2 = selfMember.flags;
          }
          if (num2 == null) {
            num2 = 0;
          }
          hasItem1 = !tmpResult.hasFlag(num2, GuildMemberFlags.COMPLETED_ONBOARDING);
        }
        if (tmp5) {
          tmp5 = !hasItem1;
        }
        if (tmp5) {
          const Storage = applyArgumentsResult(dependencyMap[6]).Storage;
          const value = Storage.get(closure_1_9);
          let isNewUserResult = !value;
          if (!value) {
            isNewUserResult = applyArgumentsResult(dependencyMap[7]).isNewUser(closure_1_6.getCurrentUser());
            const tmpResult1 = applyArgumentsResult(dependencyMap[7]);
          }
          if (isNewUserResult) {
            ACTION_SHEET_HEIGHT_HALFDefault.openLazy(applyArgumentsResult(dependencyMap[14])(dependencyMap[13], dependencyMap.paths), "NUFChannelsActionSheet");
            const Storage2 = applyArgumentsResult(dependencyMap[6]).Storage;
            const result = Storage2.set(closure_1_9, true);
          }
          applyArgumentsResult.terminate();
        }
      }
      obj = applyArgumentsResult(dependencyMap[10]);
    };
    applyArgumentsResult.requiresVoiceChannelsOnboard = function requiresVoiceChannelsOnboard() {
      const Storage = applyArgumentsResult(595).Storage;
      const value = Storage.get(closure_10);
      let isNewUserResult = !value;
      if (!value) {
        isNewUserResult = applyArgumentsResult(4219).isNewUser(currentUser.getCurrentUser());
        const tmpResult = applyArgumentsResult(4219);
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
  const Storage = Storage3.Storage;
  const value = Storage.get(c9);
  let isNewUserResult = !value;
  if (!value) {
    let tmpResult = nameFromUser;
    isNewUserResult = tmpResult.isNewUser(currentUser.getCurrentUser());
  }
  if (isNewUserResult) {
    tmpResult = getRootNavigationRef;
    const rootNavigationRef = tmpResult.getRootNavigationRef();
    if (rootNavigationRef != null) {
      const self = this;
      rootNavigationRef.addListener("state", this.handleNavigationStateChanged);
    }
  }
};
prototype["_terminate"] = function _terminate() {
  const rootNavigationRef = getRootNavigationRef.getRootNavigationRef();
  if (rootNavigationRef != null) {
    const self = this;
    rootNavigationRef.removeListener("state", this.handleNavigationStateChanged);
  }
};
const nUFChannelsManager = new NUFChannelsManager();
let result = require("obj132").fileFinishedImporting("modules/nuf_channels/native/NUFChannelsManager.tsx");

export default nUFChannelsManager;