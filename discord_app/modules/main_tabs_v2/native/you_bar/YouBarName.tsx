// === Module 18801: YouBarName ===

// Module 18801 (YouBarName)
import nativeDefault from "native" /* 575 */;
import GuildTagDefault from "GuildTag" /* 9375 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 10866 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 10867 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 10891 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11555 */;
import shouldShowActivityStatusDefault from "shouldShowActivityStatus" /* 18802 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 6769 */;
import ChannelStore from "ChannelStore" /* 4989 */;
import PermissionStore from "PermissionStore" /* 5072 */;
import PresenceStore from "PresenceStore" /* 5890 */;
import RelationshipStore from "RelationshipStore" /* 5082 */;
import SelfPresenceStore from "SelfPresenceStore" /* 6625 */;
import VoiceStateStore from "VoiceStateStore" /* 5803 */;

require = fn;
function Username(userId) {
  userId = userId.userId;
  const tmp = closure_14();
  const obj = { style: tmp.usernameRow, children: null };
  items = [closure_1_11(UsernameWithEffectsDefault, { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-sm/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username }), closure_1_11(GuildTagDefault, { userId, disabledTooltip: true, containerStyles: tmp.guildTag }), closure_1_11(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" })];
  obj.children = items;
  return application_id(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_11, jsxs: closure_12, Fragment: map1 } = jsxProd);
const createStyles = fn(5140);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: { flexDirection: "row", gap: nativeDefault.space.PX_4 }, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
let closure_14 = createStyles.createStyles(obj);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(function YouName(username) {
  const userId = username.userId;
  const tmp = closure_14();
  items = [SelfPresenceStore];
  const stateFromStores = userId(504).useStateFromStores(items, () => status.getStatus());
  let obj = userId(504);
  const customStatusActivity = userId(11535).useCustomStatusActivity();
  let obj2 = userId(11535);
  state = undefined;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(10868).useGameMentionsAsPlainText(state);
  let obj3 = userId(10868);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  let obj4 = { style: tmp.userText, children: null };
  const stateFromStores1 = userId(504).useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== userId(closure_1_2[18]).ActivityTypes.CUSTOM_STATUS);
    items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(userId, items);
    const obj3 = { userId };
    const obj4 = { ChannelStore, PermissionStore, VoiceStateStore };
    return shouldShowActivityStatusDefault({ activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: useUserVoiceActivity.getVisibleUserVoiceActivity({ userId }, { ChannelStore, PermissionStore, VoiceStateStore }).voiceChannel });
  });
  const items2 = [closure_11(Username, { username: username.username, userId }), ];
  const obj5 = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    const obj6 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = closure_11(stateFromStores(10864), obj6);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result2 = null;
    if (null != emoji) {
      const obj7 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result2 = closure_11(stateFromStores(10885), obj7);
    }
    const items3 = [tmp11Result2, ];
    const obj8 = { variant: "body-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      humanizeStatusResult = tmp2(5194).humanizeStatus(stateFromStores);
      const tmp2Result2 = tmp2(5194);
    }
    const obj9 = { children: null };
    obj8.children = humanizeStatusResult;
    items3[1] = closure_11(tmp2(5751).Text, obj8);
    obj9.children = items3;
    tmp9Result = closure_12(closure_13, obj9);
  }
  obj5.children = tmp9Result;
  items2[1] = closure_11(View, obj5);
  obj4.children = items2;
  return closure_12(View, obj4);
});