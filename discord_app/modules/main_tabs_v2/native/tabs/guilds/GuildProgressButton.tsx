// === Module 18589: GuildProgressButton ===

// Module 18589 (GuildProgressButton)
import nativeDefault from "native" /* 575 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5883 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12725 */;
import GuildProgressUtils from "GuildProgressUtils" /* 14286 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 14289 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  const guildProgressStep = guild(14286).useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  items = [completed, guild.id];
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
  let obj = guild(14286);
  obj2.icon = jsx(guild(8248).RowButton.Icon, { source: completed(18590) });
  const intl = guild(1113).intl;
  obj2.label = intl.string(guild(1113).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(14408), { percent: percentComplete });
  return jsx(guild(8248).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
};
export function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("body-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("body-xs/medium", fontScale) + refreshToken;
}