// === Module 15634: GuildProgressButton ===

// Module 15634 (GuildProgressButton)
import ThemesDefault from "Themes" /* 712 */;
import useIsMobileVisualRefreshExperimentEnabled from "useIsMobileVisualRefreshExperimentEnabled" /* 1367 */;
import map from "map" /* 9666 */;
import closure_3 from "noop" /* 19 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  let completed;
  let obj = guild(12107);
  const guildProgressStep = obj.useGuildProgressStep(guild);
  completed = guildProgressStep.completed;
  const items = [completed, guild.id];
  ({ percentComplete, subtitle } = guildProgressStep);
  const effect = React.useEffect(() => {
    if (completed) {
      const result = completed(closure_1_2[6]).markCompletedProgressSeen(guild.id);
      const obj = completed(closure_1_2[6]);
    }
  }, items);
  const items1 = [guild, completed];
  const callback = React.useCallback(() => {
    if (!completed) {
      const progress = completed(closure_1_2[6]).createProgress(guild.id);
      const obj = completed(closure_1_2[6]);
    }
    guild(closure_1_2[5]).openActionSheet(guild);
  }, items1);
  obj = { icon: null, label: null, subLabel: null, onPress: null, trailing: null };
  obj = { source: completed(15635) };
  obj[0] = jsx(guild(8188).RowButton.Icon, { source: completed(15635) });
  const intl = guild(1236).intl;
  obj[1] = intl.string(guild(1236).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(12221), { percent: percentComplete });
  return jsx(guild(8188).RowButton, { source: completed(15635) });
};
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale, isRefreshEnabled) {
  const refreshToken = useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(ThemesDefault.modules.mobile.TABLE_ROW_PADDING, isRefreshEnabled);
  const obj = useIsMobileVisualRefreshExperimentEnabled;
  const sum = refreshToken + map.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = map;
  return sum + 2 * map.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};