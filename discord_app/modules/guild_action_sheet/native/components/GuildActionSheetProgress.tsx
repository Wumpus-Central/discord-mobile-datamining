// discord_app/modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import PressableCard from "../../../../design/components/Card/native/Card.native.tsx";
import useIOSCompletionStates from "../../../guild_progress/native/GuildProgressUtils.tsx";
import GuildProgressOverviewViewDefault from "../../../guild_progress/native/components/GuildProgressOverview.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { title: null, cardStyle: null };
createCacheKey = { color: ThemesDefault.colors.TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: ThemesDefault.space.PX_16, padding: 0, marginBottom: ThemesDefault.space.PX_24 };
let closure_4 = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginHorizontal: ThemesDefault.space.PX_16, padding: 0, marginBottom: ThemesDefault.space.PX_24 };
const result = require("set").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  guild = guild.guild;
  const tmp = callback();
  let obj = useIOSCompletionStates;
  const iOSCompletionStates = obj.useIOSCompletionStates(guild);
  ({ completed, dismissed } = iOSCompletionStates);
  let tmp5 = null;
  if (obj2.useIsEligibleForGuildProgress(guild)) {
    tmp5 = null;
    if (!completed) {
      tmp5 = null;
      if (dismissed) {
        obj = { style: null, children: null };
        obj[0] = tmp.cardStyle;
        obj = { guild: null, titleStyle: null, longPressDisabled: true, resume: true };
        obj[0] = guild;
        obj[1] = tmp.title;
        obj[1] = jsx(GuildProgressOverviewViewDefault, { guild: null, titleStyle: null, longPressDisabled: true, resume: true });
        tmp5 = jsx(PressableCard.Card, { guild: null, titleStyle: null, longPressDisabled: true, resume: true });
      }
    }
  }
  return tmp5;
};