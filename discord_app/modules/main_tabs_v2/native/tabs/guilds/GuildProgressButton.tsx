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
  const guildProgressStep = guild(12728).useGuildProgressStep(guild);
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
  let obj2 = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  let obj = guild(12728);
  obj2.icon = jsx(guild(8873).RowButton.Icon, { source: completed(16537) });
  const intl = guild(1115).intl;
  obj2.label = intl.string(guild(1115).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(12843), { percent: percentComplete });
  return jsx(guild(8873).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
}
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(
    nativeDefault.modules.mobile.TABLE_ROW_PADDING,
  );
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
