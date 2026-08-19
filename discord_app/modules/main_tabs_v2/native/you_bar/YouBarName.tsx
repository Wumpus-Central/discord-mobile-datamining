// === Module 15645: Username ===

// Module 15645 (Username)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import nameFromUser from "nameFromUser" /* 4219 */;
import Text from "Text" /* 4734 */;
import _activityFromSetting from "_activityFromSetting" /* 7256 */;
import useGameMentionsAsPlainText from "useGameMentionsAsPlainText" /* 9287 */;
import AVERAGE_FONT_WIDTH_RATIODefault from "AVERAGE_FONT_WIDTH_RATIO" /* 9452 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 9464 */;
import memoResult1Default from "memoResult1" /* 9509 */;
import ActivityEmojiDefault from "ActivityEmoji" /* 9541 */;
import apexExperiment from "apexExperiment" /* 15628 */;
import { View } from "get ActivityIndicator" /* 17 */;
import filterPlayingActivities from "filterPlayingActivities" /* 7250 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;
import importAllResult from "noop" /* 19 */;

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