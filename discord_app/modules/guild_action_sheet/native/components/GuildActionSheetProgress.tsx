import "noop";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { title: null, cardStyle: null };
createCacheKey = { color: require("Themes").colors.TEXT_DEFAULT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { marginHorizontal: require("Themes").space.PX_16, padding: 0, marginBottom: require("Themes").space.PX_24 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { marginHorizontal: require("Themes").space.PX_16, padding: 0, marginBottom: require("Themes").space.PX_24 };
const result = require("createCacheKey").fileFinishedImporting("modules/guild_action_sheet/native/components/GuildActionSheetProgress.tsx");

export default function GuildActionSheetProgress(guild) {
  let completed;
  let dismissed;
  guild = guild.guild;
  const tmp = createCacheKey();
  let obj = require(11686) /* useIOSCompletionStates */;
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
        obj[1] = jsx(importDefault(13196), { guild: null, titleStyle: null, longPressDisabled: true, resume: true });
        tmp5 = jsx(require(5288) /* PressableCard */.Card, { guild: null, titleStyle: null, longPressDisabled: true, resume: true });
      }
    }
  }
  return tmp5;
};