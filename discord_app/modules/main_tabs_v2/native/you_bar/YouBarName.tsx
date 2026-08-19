// discord_app/modules/main_tabs_v2/native/you_bar/YouBarName.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import nameFromUser from "../../../../utils/UserUtils.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import _activityFromSetting from "../../../custom_status/utils/userSettingToActivity.tsx";
import useGameMentionsAsPlainText from "../../../game_mentions/hooks/useGameMentionsAsPlainText.tsx";
import AVERAGE_FONT_WIDTH_RATIODefault from "../../../display_name_styles/native/UsernameWithEffects.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import memoResult1Default from "../../../guild_tag/native/GuildTag.tsx";
import ActivityEmojiDefault from "../../../activity_status/native/ActivityEmoji.tsx";
import apexExperiment from "YouBarGuildTagExperiment.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import filterPlayingActivities from "../../../../stores/SelfPresenceStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import importAllResult from "../../../../../_runtime/00019_noop.js";

require = fn;
function Username(userId) {
  userId = userId.userId;
  const tmp = callback2();
  let obj = { style: items, children: null };
  items = [tmp.usernameRow];
  const isYouBarGuildTagEnabled = obj.useIsYouBarGuildTagEnabled("YouBarName");
  obj = { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username };
  const items1 = [callback(AVERAGE_FONT_WIDTH_RATIODefault, obj), , ];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    obj1 = { userId: null, disabledTooltip: true, containerStyles: null };
    obj1[0] = userId;
    obj1[2] = tmp.guildTag;
    tmp7Result = callback(memoResult1Default, obj1);
  }
  items1[1] = tmp7Result;
  items1[2] = callback(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  obj[1] = items1;
  return callback(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = { flexDirection: "row", gap: ThemesDefault.space.PX_4 };
obj[1] = obj;
obj[2] = { width: 16, height: 16 };
obj[3] = { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 };
obj[4] = { flexShrink: 1 };
obj[5] = { marginLeft: 2, flexShrink: 0 };
obj[6] = { flexShrink: 1 };
let closure_7 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function YouName(arg0) {
  ({ userId, username } = arg0);
  const tmp = callback2();
  let obj = initialize;
  const items = [closure_4];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus());
  obj1 = _activityFromSetting;
  const customStatusActivity = obj1.useCustomStatusActivity();
  let obj2 = useGameMentionsAsPlainText;
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  let gameMentionsAsPlainText = obj2.useGameMentionsAsPlainText(state);
  const items1 = [callback(Username, { username, userId }), ];
  obj = { style: tmp.statusRow, children: null };
  let emoji;
  if (customStatusActivity != null) {
    emoji = customStatusActivity.emoji;
  }
  let tmp10Result = null;
  if (null != emoji) {
    obj1 = { size: 16, style: null, emoji: null };
    obj1[1] = tmp.statusEmoji;
    obj1[2] = customStatusActivity.emoji;
    tmp10Result = callback(ActivityEmojiDefault, obj1);
  }
  const items2 = [tmp10Result, ];
  obj2 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
  if (gameMentionsAsPlainText == null) {
    gameMentionsAsPlainText = nameFromUser.humanizeStatus(stateFromStores);
    const tmp2Result = nameFromUser;
  }
  obj2[6] = gameMentionsAsPlainText;
  items2[1] = callback(Text.Text, obj2);
  obj[1] = items2;
  items1[1] = callback(View, obj);
  obj[1] = items1;
  return callback(View, obj);
});
const result = require("obj132").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;