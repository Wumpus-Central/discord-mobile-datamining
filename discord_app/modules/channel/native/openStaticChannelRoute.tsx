// === Module 11238: openStaticChannelRoute ===

// Module 11238 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2002 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5210 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6672 */;
import safeTransitionToDefault from "safeTransitionTo" /* 7347 */;
import GuildMemberStore from "GuildMemberStore" /* 4883 */;
import GuildRoleStore from "GuildRoleStore" /* 4877 */;
import GuildStore from "GuildStore" /* 4845 */;

require = fn;
const StaticChannelRoute = fn(4830).StaticChannelRoute;
const Constants = fn(1087);
({ GuildFeatures: closure_7, Routes: closure_8 } = Constants);
const GuildOnboardingTab = fn(7196).GuildOnboardingTab;
let closure_10 = fn(7192).CHANNELS_AND_ROLES_MODAL_KEY;
const size = fn(2);
const result = size.fileFinishedImporting("modules/channel/native/openStaticChannelRoute.tsx");

export default function openStaticChannelRoute(arg0) {
  ({ guildId, staticRoute, itemId, navigationReplace } = arg0);
  if (navigationReplace === undefined) {
    navigationReplace = false;
  }
  if (null != guildId) {
    guild = GuildStore.getGuild(guildId);
    if (null != guild) {
      if ("browse" === staticRoute) {
        const features3 = guild.features;
        if (features3.has(constants.COMMUNITY)) {
          const obj3 = { guildId, defaultTab: GuildOnboardingTab.BROWSE };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11239, dependencyMap.paths), obj3, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(constants.COMMUNITY)) {
          const obj5 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11239, dependencyMap.paths), obj5, closure_10);
        }
      } else {
        if ("home" !== staticRoute) {
          if ("guide" !== staticRoute) {
            if ("linked-roles" === staticRoute) {
              if (null != itemId) {
                const selfMember = GuildMemberStore.getSelfMember(guildId);
                if (null != selfMember) {
                  const role = GuildRoleStore.getRole(guildId, itemId);
                  if (null != role) {
                    const roles = selfMember.roles;
                    if (!roles.includes(role.id)) {
                      const _HermesInternal = HermesInternal;
                      const obj2 = ActionSheetActionCreatorsDefault;
                      const obj6 = { role, guildId };
                      obj2.openLazy(asyncRequireImpl(11252, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj6);
                      const tmp9 = asyncRequireImpl(11252, dependencyMap.paths);
                    }
                  }
                }
              }
              const obj8 = { guildId };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11261, dependencyMap.paths), obj8);
            } else {
              GlobalUtils.assertNever(staticRoute);
            }
          }
        }
        const features = guild.features;
        if (features.has(constants.COMMUNITY)) {
          const obj10 = { navigationReplace, openChannel: true };
          safeTransitionToDefault(closure_1_8.CHANNEL(guildId, StaticChannelRoute.GUILD_HOME), obj10);
        }
      }
    }
  }
};