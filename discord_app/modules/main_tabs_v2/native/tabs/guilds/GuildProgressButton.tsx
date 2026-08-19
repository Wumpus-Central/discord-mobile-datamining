// === Module 15459: GuildProgressButton ===

// Module 15459 (GuildProgressButton)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 9288 */;
import noop from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = fn;
let result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  let obj = guild(11643);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  const completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = completed(dependencyMap[6]).markCompletedProgressSeen(guild.id);
      const obj = completed(dependencyMap[6]);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = React.useCallback(() => {
    if (!completed) {
      const progress = completed(dependencyMap[6]).createProgress(guild.id);
      const obj = completed(dependencyMap[6]);
    }
    guild(dependencyMap[5]).openActionSheet(guild);
    const obj2 = guild(dependencyMap[5]);
  }, items1);
  obj = { source: completed(15460) };
  obj[0] = jsx(guild(8086).RowButton.Icon, { source: completed(15460) });
  const intl = guild(1236).intl;
  obj[1] = intl.string(guild(1236).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(11759), { percent: percentComplete });
  return jsx(guild(8086).RowButton, { source: completed(15460) });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const sum = refreshToken + map.scaleTextLineHeight("text-md/semibold", fontScale);
  return sum + 2 * map.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};