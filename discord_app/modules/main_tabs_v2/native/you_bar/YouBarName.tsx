// === Module 16330: YouBarName ===

// Module 16330 (YouBarName)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import GuildTagDefault from "GuildTag" /* 9395 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10611 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10612 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10633 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 10844 */;
import shouldShowActivityStatusDefault from "shouldShowActivityStatus" /* 16331 */;
import react from "react" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4912 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import PresenceStore from "PresenceStore" /* 4930 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5438 */;
import VoiceStateStore from "VoiceStateStore" /* 4909 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let obj1;

let closure_12;
let closure_14;
let map1;
let obj2;
const View = react_native.View;
const ActivityTypes = Constants.ActivityTypes;
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = Fragment);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: obj2, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
obj2 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
let closure_15 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let items1;
  let tmp5;
  let userId;
  let username;
  const obj = react2;
  const cResult = obj.c(14);
  ({ userId, username } = arg0);
  const tmp4 = closure_15();
  if (cResult[0] !== tmp4.usernameRow) {
    const items = [tmp4.usernameRow];
    cResult[0] = tmp4.usernameRow;
    cResult[1] = items;
    tmp5 = items;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.username) {
    if (cResult[3] === userId) {
      let tmp6;
      if (cResult[4] === username) {
        tmp6 = cResult[5];
      }
      if (cResult[6] === tmp4.guildTag) {
        let tmp8;
        let tmp13;
        if (cResult[7] === userId) {
          tmp8 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp15 = closure_12(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
          cResult[9] = tmp15;
          tmp13 = tmp15;
        } else {
          tmp13 = cResult[9];
        }
        if (cResult[10] === tmp5) {
          if (cResult[11] === tmp6) {
            let tmp16;
            if (cResult[12] === tmp8) {
              tmp16 = cResult[13];
            }
            return tmp16;
          }
        }
        const obj2 = { style: tmp5, children: items1 };
        items1 = [tmp6, tmp8, tmp13];
        const tmp19 = map1(View, obj2);
        cResult[10] = tmp5;
        cResult[11] = tmp6;
        cResult[12] = tmp8;
        cResult[13] = tmp19;
        tmp16 = tmp19;
      }
      const obj3 = { userId, disabledTooltip: true, containerStyles: tmp4.guildTag };
      const tmp11 = closure_12(GuildTagDefault, obj3);
      cResult[6] = tmp4.guildTag;
      cResult[7] = userId;
      cResult[8] = tmp11;
      tmp8 = tmp11;
    }
  }
  const obj4 = { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp4.username, style: tmp4.username };
  const tmp7 = closure_12(UsernameWithEffectsDefault, obj4);
  cResult[2] = tmp4.username;
  cResult[3] = userId;
  cResult[4] = username;
  cResult[5] = tmp7;
  tmp6 = tmp7;
}) : ((userId) => {
  let items;
  let items1;
  userId = userId.userId;
  const username = userId.username;
  const tmp = closure_15();
  const obj = { style: items, children: items1 };
  items = [tmp.usernameRow];
  items1 = [, , ];
  const obj2 = { userId, userName: username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username };
  items1[0] = closure_12(UsernameWithEffectsDefault, obj2);
  const obj3 = { userId, disabledTooltip: true, containerStyles: tmp.guildTag };
  items1[1] = closure_12(GuildTagDefault, obj3);
  items1[2] = closure_12(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  return map1(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  let status;
  let tmp13;
  let tmp5;
  let tmp6;
  let obj = userId(576);
  const cResult = obj.c(24);
  userId = userId.userId;
  const username = userId.username;
  closure_15();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [SelfPresenceStore];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    cResult[0] = items;
    cResult[1] = C;
    tmp5 = items;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const tmpResult = userId(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp5, C);
  const tmpResult4 = userId(10826);
  const customStatusActivity = tmpResult4.useCustomStatusActivity();
  let state;
  const useGameMentionsAsPlainText = userId(10613).useGameMentionsAsPlainText;
  userId(10613);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state);
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [PresenceStore, , , , , ];
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    items1[1] = ApplicationStreamingStore;
    items1[2] = RelationshipStore;
    items1[3] = ChannelStore;
    items1[4] = PermissionStore;
    items1[5] = VoiceStateStore;
    cResult[2] = items1;
    tmp13 = items1;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === stateFromStores) {
    let tmp19;
    if (cResult[4] === userId) {
      tmp19 = cResult[5];
    }
    const tmpResult6 = userId(504);
    const stateFromStores1 = tmpResult6.useStateFromStores(tmp13, tmp19);
    class C {
      constructor() {
        return closure_1_9.getStatus();
      }
    }
    let obj2 = { username, userId };
    cResult[6] = userId;
    cResult[7] = username;
    cResult[8] = closure_12(closure_16, obj2);
    const tmp24 = closure_12(closure_16, obj2);
  }
  class M {
    constructor() {
      activities = closure_7.getActivities(userId);
      found = activities.filter(() => { /* body not rendered: F145854 */ });
      obj = closure_0(closure_2[21]);
      items = [, ];
      items[0] = closure_4;
      items[1] = closure_8;
      discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
      obj2 = closure_0(closure_2[22]);
      obj1 = { userId };
      obj6 = { ChannelStore: closure_5, PermissionStore: closure_6, VoiceStateStore: closure_10 };
      obj7 = { activities: found, status: closure_1, applicationStream: discoverableApplicationStream, voiceChannel: obj2.getVisibleUserVoiceActivity(obj1, obj6).voiceChannel };
      return closure_1(closure_2[23])(obj7);
    }
  }
  cResult[3] = stateFromStores;
  cResult[4] = userId;
  cResult[5] = M;
  tmp19 = M;
}) : ((userId) => {
  let humanizeStatusResult;
  let items2;
  let status;
  let tmp10Result;
  userId = userId.userId;
  const username = userId.username;
  const tmp = closure_15();
  let obj = userId(504);
  let items = [SelfPresenceStore];
  const stateFromStores = obj.useStateFromStores(items, () => status.getStatus());
  let obj2 = userId(10826);
  const customStatusActivity = obj2.useCustomStatusActivity();
  let state;
  const useGameMentionsAsPlainText = userId(10613).useGameMentionsAsPlainText;
  userId(10613);
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = useGameMentionsAsPlainText(state);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  let obj3 = { style: tmp.userText, children: items2 };
  const tmp2Result = userId(504);
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const obj = useDiscoverableApplicationStream;
    const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
    const obj2 = useUserVoiceActivity;
    const obj3 = { userId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    const obj5 = { activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: obj2.getVisibleUserVoiceActivity(obj3, obj4).voiceChannel };
    return shouldShowActivityStatusDefault(obj5);
  });
  items2 = [closure_12(closure_16, { username, userId }), ];
  let obj4 = { style: tmp.statusRow, children: tmp10Result };
  if (stateFromStores1) {
    let obj5 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    tmp10Result = closure_12(stateFromStores(10609), obj5);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp12Result2 = null;
    if (null != emoji) {
      const obj6 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp12Result2 = closure_12(stateFromStores(10629), obj6);
    }
    const items3 = [tmp12Result2, ];
    const obj7 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: humanizeStatusResult };
    humanizeStatusResult = gameMentionsAsPlainText;
    const Text = tmp2(4886).Text;
    if (gameMentionsAsPlainText == null) {
      const tmp2Result2 = userId(4722);
      humanizeStatusResult = tmp2Result2.humanizeStatus(stateFromStores);
    }
    const obj8 = { children: items3 };
    items3[1] = closure_12(Text, obj7);
    tmp10Result = closure_13(closure_14, obj8);
  }
  items2[1] = closure_12(View, obj4);
  return closure_13(View, obj3);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default memoResult;