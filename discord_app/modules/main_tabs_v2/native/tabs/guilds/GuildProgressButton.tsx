// === Module 18618: GuildProgressButton ===

// Module 18618 (GuildProgressButton)
import nativeDefault from "native" /* 575 */;
import useScaledTextLineHeight from "useScaledTextLineHeight" /* 5885 */;
import MobileVisualRefreshExperiment from "MobileVisualRefreshExperiment" /* 12739 */;
import GuildProgressUtils from "GuildProgressUtils" /* 14312 */;
import GuildProgressActionCreatorsDefault from "GuildProgressActionCreators" /* 14315 */;
import noop from "module_19" /* 19 */;

require = fn;
const jsx = fn(21).jsx;
const size = fn(2);
let result = size.fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  const guildProgressStep = guild(14312).useGuildProgressStep(guild);
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
  let obj = guild(14312);
  obj2.icon = jsx(guild(8252).RowButton.Icon, { source: completed(18619) });
  const intl = guild(1113).intl;
  obj2.label = intl.string(guild(1113).t.o3HK3d);
  obj2.subLabel = subtitle;
  obj2.onPress = callback;
  obj2.trailing = jsx(completed(14434), { percent: percentComplete });
  return jsx(guild(8252).RowButton, { icon: null, label: null, subLabel: null, onPress: null, trailing: null });
};
export function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = MobileVisualRefreshExperiment.resolveRefreshToken(nativeDefault.modules.mobile.TABLE_ROW_PADDING);
  const sum = refreshToken + useScaledTextLineHeight.scaleTextLineHeight("body-md/semibold", fontScale);
  return sum + 2 * useScaledTextLineHeight.scaleTextLineHeight("body-xs/medium", fontScale) + refreshToken;
}