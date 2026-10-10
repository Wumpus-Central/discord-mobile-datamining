// === Module 10697: openStaticChannelRoute ===

// Module 10697 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1388 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2000 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 5934 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6949 */;
import GuildMemberStore from "GuildMemberStore" /* 2125 */;
import GuildRoleStore from "GuildRoleStore" /* 2119 */;
import GuildStore from "GuildStore" /* 2087 */;

require = fn;
const StaticChannelRoute = fn(2072).StaticChannelRoute;
const Constants = fn(1085);
({ GuildFeatures: closure_7, Routes: closure_8 } = Constants);
const GuildOnboardingTab = fn(6789).GuildOnboardingTab;
let closure_10 = fn(6785).CHANNELS_AND_ROLES_MODAL_KEY;
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
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10698, dependencyMap.paths), obj3, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(constants.COMMUNITY)) {
          const obj5 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10698, dependencyMap.paths), obj5, closure_10);
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
                      obj2.openLazy(asyncRequireImpl(10711, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj6);
                      const tmp9 = asyncRequireImpl(10711, dependencyMap.paths);
                    }
                  }
                }
              }
              const obj8 = { guildId };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(10720, dependencyMap.paths), obj8);
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