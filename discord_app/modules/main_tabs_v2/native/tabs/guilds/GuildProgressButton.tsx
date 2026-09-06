// discord_app/modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useScaledTextLineHeight from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import MobileVisualRefreshExperiment from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import GuildProgressUtils from "../../../../guild_progress/native/GuildProgressUtils.tsx";
import GuildProgressActionCreatorsDefault from "../../../../guild_progress/GuildProgressActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  let obj = guild(12474);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = noop.useEffect(() => {
    if (completed) {
      const result = GuildProgressActionCreatorsDefault.markCompletedProgressSeen(guild.id);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = noop.useCallback(() => {
    if (!completed) {
      const progress = GuildProgressActionCreatorsDefault.createProgress(guild.id);
    }
    GuildProgressUtils.openActionSheet(guild);
  }, items1);
  obj = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  obj = { source: completed(16198) };
  obj.icon = jsx(guild(8595).RowButton.Icon, { source: completed(16198) });
  const intl = guild(1114).intl;
  obj.label = intl.string(guild(1114).t.o3HK3d);
  obj.subLabel = subtitle;
  obj.onPress = callback;
  obj.trailing = jsx(completed(12590), { percent: percentComplete });
  return jsx(guild(8595).RowButton, { source: completed(16198) });
}
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(
    nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  );
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
