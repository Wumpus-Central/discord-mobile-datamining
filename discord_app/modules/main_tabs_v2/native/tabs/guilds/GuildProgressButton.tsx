// === Module 16294: GuildProgressButton ===

// Module 16294 (GuildProgressButton)
import nativeDefault from "native" /* 576 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 10247 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12317 */;
import GuildProgressUtils from "GuildProgressUtils" /* 12604 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 12607 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  const guildProgressStep = guild(12604).useGuildProgressStep(guild);
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
  let obj = guild(12604);
  obj2.icon = jsx(guild(8718).RowButton.Icon, { source: completed(16295) });
  const intl = guild(1114).intl;
  obj2.label = intl.string(guild(1114).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(12720), { percent: percentComplete });
  return jsx(guild(8718).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};