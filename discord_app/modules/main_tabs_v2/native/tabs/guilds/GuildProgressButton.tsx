// discord_app/modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import map from "../../../../screen/native/useScaledTextLineHeight.android.tsx";
import useIsMobileVisualRefreshExperimentEnabled from "../../../../themes/experiments/MobileVisualRefreshExperiment.tsx";
import closure_3 from "../../../../../../_runtime/00019_noop.js";
import { jsx } from "../../../../../../_runtime/react/00021_jsxProd.js";

require = arg1;
let result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/tabs/guilds/GuildProgressButton.tsx");

export default function GuildProgressButton(guild) {
  guild = guild.guild;
  let completed;
  let obj = guild(12262);
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
  obj = { source: completed(16018) };
  obj[0] = jsx(guild(8374).RowButton.Icon, { source: completed(16018) });
  const intl = guild(1233).intl;
  obj[1] = intl.string(guild(1233).t.o3HK3d);
  obj[2] = subtitle;
  obj[3] = callback;
  obj[4] = jsx(completed(12378), { percent: percentComplete });
  return jsx(guild(8374).RowButton, { source: completed(16018) });
}
export const getScaledGuildProgressButtonHeight = function getScaledGuildProgressButtonHeight(fontScale) {
  const refreshToken = useIsMobileVisualRefreshExperimentEnabled.resolveRefreshToken(
    ThemesDefault.modules.mobile.TABLE_ROW_PADDING,
  );
  const obj = useIsMobileVisualRefreshExperimentEnabled;
  const sum = refreshToken + map.scaleTextLineHeight("text-md/semibold", fontScale);
  const obj2 = map;
  return sum + 2 * map.scaleTextLineHeight("text-xs/medium", fontScale) + refreshToken;
};
