// discord_app/modules/channel/native/openStaticChannelRoute.tsx
import GlobalUtils from "../../../utils/GlobalUtils.tsx";
import asyncRequireImpl from "../../../../_runtime/02121_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import ModalActionCreatorsDefault from "../../../actions/ModalActionCreators.tsx";
import safeTransitionToDefault from "../../links/safeTransitionTo.native.tsx";
import GuildMemberStore from "../../../stores/GuildMemberStore.tsx";
import GuildRoleStore from "../../../stores/GuildRoleStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";

require = fn;
const StaticChannelRoute = fn(5162).StaticChannelRoute;
const Constants = fn(1072);
({ GuildFeatures: metroImportDefault, Routes: closure_8 } = Constants);
const GuildOnboardingTab = fn(7218).GuildOnboardingTab;
let closure_10 = fn(7866).CHANNELS_AND_ROLES_MODAL_KEY;
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
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12466, dependencyMap.paths), obj3, closure_10);
        }
      } else if ("customize" === staticRoute) {
        const features2 = guild.features;
        if (features2.has(constants.COMMUNITY)) {
          const obj5 = { guildId, defaultTab: GuildOnboardingTab.CUSTOMIZE };
          ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12466, dependencyMap.paths), obj5, closure_10);
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
                      obj2.openLazy(
                        asyncRequireImpl(12479, dependencyMap.paths),
                        "GuildRoleConnectionsConnectAccountsActionSheet-" + role.id,
                        obj6,
                      );
                      const tmp9 = asyncRequireImpl(12479, dependencyMap.paths);
                    }
                  }
                }
              }
              const obj8 = { guildId };
              ModalActionCreatorsDefault.pushLazy(asyncRequireImpl(12488, dependencyMap.paths), obj8);
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
}
