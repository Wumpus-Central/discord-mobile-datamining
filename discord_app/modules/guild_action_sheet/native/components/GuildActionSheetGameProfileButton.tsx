// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetGameProfileButton.tsx
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import _modDef7439 from "../../../../../_runtime/metro/07439__.js";
import useOpenGameProfileModalDefault from "../../../game_profile/hooks/useOpenGameProfileModal.tsx";
import GuildActionSheetAnalyticsUtils from "../GuildActionSheetAnalyticsUtils.tsx";
import GuildActionSheetTypes from "../GuildActionSheetTypes.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function GameProfileButton(applicationId) {
  const guildId = applicationId.guildId;
  let obj = {
    applicationId: applicationId.applicationId,
    source: guildId(10286).GameProfileSources.GuildActionSheet,
    trackEntryPointImpression: true,
  };
  const tmp3Result = useOpenGameProfileModalDefault(obj, {
    onOpened(gameId) {
      const obj = GuildActionSheetAnalyticsUtils;
      return obj.trackGuildActionSheetOptionPressed({
        guildId,
        option: GuildActionSheetTypes.GuildActionSheetOptions.GAME_PROFILE,
        canAccessSettings: false,
        gameId,
      });
    },
  });
  importDefault = tmp3Result;
  let tmp6 = null;
  if (null != tmp3Result) {
    const obj3 = { variant: "secondary", label: null, icon: null, grow: true, onPress: null };
    const intl = tmp4(1113).intl;
    obj3.label = intl.string(tmp4(1113).t.f7aVGn);
    obj3.icon = _modDef7439;
    obj3.onPress = function onPress() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      closure_1();
    };
    tmp6 = jsx(tmp4(7988).IconButton, { variant: "secondary", label: null, icon: null, grow: true, onPress: null });
  }
  return tmp6;
}
function ExperimentGate(children) {
  children = null;
  if (obj.useIsGameProfilesServerPreviewEnabled({ location: "guild_action_sheet" })) {
    children = children.children;
  }
  return children;
}
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_action_sheet/native/components/GuildActionSheetGameProfileButton.tsx",
);

export default function GuildActionSheetGameProfileButton(guild) {
  guild = guild.guild;
  const gameApplicationIds = guild.gameApplicationIds;
  length = undefined;
  if (gameApplicationIds != null) {
    length = gameApplicationIds.length;
  }
  let first = null;
  if (1 === length) {
    first = guild.gameApplicationIds[0];
  }
  let tmp3 = null;
  if (!obj.useGuildActionSheetPermissions(guild).canAccessSettings) {
    tmp3 = null;
    if (null != first) {
      const obj2 = { children: null };
      const obj3 = { guildId: guild.id, applicationId: first };
      obj2.children = <GameProfileButton guildId={guild.id} applicationId={first} />;
      tmp3 = <ExperimentGate>{null}</ExperimentGate>;
    }
  }
  return tmp3;
}
