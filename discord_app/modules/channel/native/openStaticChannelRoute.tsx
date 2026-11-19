// === Module 11928: openStaticChannelRoute ===

// Module 11928 (openStaticChannelRoute)
import GlobalUtils from "GlobalUtils" /* 1255 */;
import asyncRequireImpl from "asyncRequireImpl" /* 2121 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5006 */;
import ModalActionCreatorsDefault from "ModalActionCreators" /* 6308 */;
import safeTransitionToDefault from "safeTransitionTo" /* 6748 */;
import GuildMemberStore from "GuildMemberStore" /* 4704 */;
import GuildRoleStore from "GuildRoleStore" /* 4698 */;
import GuildStore from "GuildStore" /* 4663 */;

require = fn;
const StaticChannelRoute = fn(4648).StaticChannelRoute;
const Constants = fn(1072);
({ GuildFeatures: metroImportDefault, Routes: closure_8 } = Constants);
const GuildOnboardingTab = fn(6701).GuildOnboardingTab;
let closure_10 = fn(7349).CHANNELS_AND_ROLES_MODAL_KEY;
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
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11929, dependencyMap.paths), obj3, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(constants.COMMUNITY)) {
          const obj5 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11929, dependencyMap.paths), obj5, closure_10);
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
                      obj2.openLazy(asyncRequireImpl(11942, dependencyMap.paths), "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id, obj6);
                      const tmp9 = asyncRequireImpl(11942, dependencyMap.paths);
                    }
                  }
                }
              }
              const obj8 = { guildId };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(11951, dependencyMap.paths), obj8);
            } else {
              GlobalUtils.assertNever(staticRoute);
            }
          }
        }
        const features = guild.features;
        if (features.has(constants.COMMUNITY)) {
          const obj10 = { navigationReplace, openChannel: true };
          safeTransitionToDefault(React5.CHANNEL(guildId, StaticChannelRoute.GUILD_HOME), obj10);
        }
      }
    }
  }
};