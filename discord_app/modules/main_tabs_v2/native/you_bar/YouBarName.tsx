// === Module 15889: Username ===

// Module 15889 (Username)
import ThemesDefault from "Themes" /* 712 */;
import AVERAGE_FONT_WIDTH_RATIODefault from "AVERAGE_FONT_WIDTH_RATIO" /* 8846 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 8858 */;
import memoResult1Default from "memoResult1" /* 8929 */;
import apexExperiment from "apexExperiment" /* 15872 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_4 from "reset" /* 4467 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "getUncachedChannelPermissions" /* 4089 */;
import closure_7 from "sortActivity" /* 4534 */;
import closure_8 from "markAllUserIdListsStale" /* 4098 */;
import closure_9 from "filterPlayingActivities" /* 5175 */;
import closure_10 from "updateVoiceState" /* 4464 */;
import { ActivityTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4445 */;
import importAllResult from "noop" /* 19 */;

require = arg1;
function Username(userId) {
  userId = userId.userId;
  const tmp = callback2();
  let obj = apexExperiment;
  obj = { style: items, children: null };
  items = [tmp.usernameRow];
  const isYouBarGuildTagEnabled = obj.useIsYouBarGuildTagEnabled("YouBarName");
  obj = { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username };
  const items1 = [callback(AVERAGE_FONT_WIDTH_RATIODefault, obj), , ];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    obj1 = { userId: null, disabledTooltip: true, containerStyles: null };
    obj1[0] = userId;
    obj1[2] = tmp.guildTag;
    tmp7Result = tmp7(memoResult1Default, obj1);
  }
  items1[1] = tmp7Result;
  items1[2] = callback(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  obj[1] = items1;
  return closure_13(View, obj);
}
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: null, statusEmoji: null, usernameRow: null, username: null, guildTag: null, statusText: null };
obj = { flexDirection: "row", gap: ThemesDefault.space.PX_4 };
obj[1] = obj;
obj[2] = { width: 16, height: 16 };
obj[3] = { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 };
obj[4] = { flexShrink: 1 };
obj[5] = { marginLeft: 2, flexShrink: 0 };
obj[6] = { flexShrink: 1 };
let closure_15 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function YouName(username) {
  const userId = username.userId;
  importDefault = undefined;
  let stateFromStores;
  const tmp = callback2();
  let obj = userId(stateFromStores[17]);
  importDefault = obj.useYouBarActivityStatusEnabled("YouBar");
  obj1 = userId(stateFromStores[18]);
  let items = [closure_9];
  stateFromStores = obj1.useStateFromStores(items, () => status.getStatus());
  let obj2 = userId(stateFromStores[19]);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let obj3 = userId(stateFromStores[20]);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = obj3.useGameMentionsAsPlainText(state);
  let tmp2Result = tmp2(tmp3[18]);
  const items1 = [closure_7, closure_4, closure_8, closure_5, closure_6, closure_10];
  obj = { style: tmp.userText, children: null };
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const activities = closure_1_7.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    let obj = userId(stateFromStores[21]);
    const items = [closure_1_4, closure_1_8];
    const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
    userId(stateFromStores[22]);
    let tmp6 = callback;
    if (callback) {
      obj = { activities: null, status: null, applicationStream: null, voiceChannel: null };
      obj[0] = found;
      obj[1] = stateFromStores;
      obj[2] = discoverableApplicationStream;
      obj[3] = tmp5;
      tmp6 = callback(stateFromStores[23])(obj);
    }
    return tmp6;
  });
  const items2 = [callback(Username, { username: username.username, userId }), ];
  obj = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    obj1 = { userId: null, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    obj1[0] = userId;
    let tmp9Result = tmp11(importDefault(tmp3[24]), obj1);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result = null;
    if (null != emoji) {
      obj2 = { size: 16, style: null, emoji: null };
      obj2[1] = tmp.statusEmoji;
      obj2[2] = customStatusActivity.emoji;
      tmp11Result = tmp11(importDefault(tmp3[25]), obj2);
    }
    const items3 = [tmp11Result, ];
    obj3 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: null, children: null };
    obj3[5] = tmp.statusText;
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      tmp2Result = tmp2(tmp3[27]);
      humanizeStatusResult = tmp2Result.humanizeStatus(stateFromStores);
    }
    const obj4 = { children: null };
    obj3[6] = humanizeStatusResult;
    items3[1] = tmp11(tmp2(tmp3[26]).Text, obj3);
    obj4[0] = items3;
    tmp9Result = tmp9(closure_14, obj4);
    const tmp12 = closure_14;
  }
  obj[1] = tmp9Result;
  items2[1] = callback(View, obj);
  obj[1] = items2;
  return closure_13(View, obj);
});
const result = require("set").fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;