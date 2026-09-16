// === Module 16518: YouBarName ===

// Module 16518 (YouBarName)
import nativeDefault from "native" /* 576 */;
import GuildTagDefault from "GuildTag" /* 9327 */;
import useDiscoverableApplicationStream from "useDiscoverableApplicationStream" /* 11024 */;
import useUserVoiceActivity from "useUserVoiceActivity" /* 11025 */;
import UsernameWithEffectsDefault from "UsernameWithEffects" /* 11045 */;
import ChevronSmallDownIcon from "ChevronSmallDownIcon" /* 11306 */;
import YouBarGuildTagExperiment from "YouBarGuildTagExperiment" /* 16498 */;
import shouldShowActivityStatusDefault from "shouldShowActivityStatus" /* 16519 */;
import noop from "module_19" /* 19 */;
import ApplicationStreamingStore from "ApplicationStreamingStore" /* 4660 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import PermissionStore from "PermissionStore" /* 4276 */;
import PresenceStore from "PresenceStore" /* 4678 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;
import SelfPresenceStore from "SelfPresenceStore" /* 5365 */;
import VoiceStateStore from "VoiceStateStore" /* 4657 */;

const require = globalThis.__r;

require = fn;
function Username(userId) {
  userId = userId.userId;
  const tmp = closure_15();
  const obj2 = { style: null, children: null };
  const items = [tmp.usernameRow];
  obj2.style = items;
  const isYouBarGuildTagEnabled = YouBarGuildTagExperiment.useIsYouBarGuildTagEnabled("YouBarName");
  const items1 = [closure_1_12(UsernameWithEffectsDefault, { userId, userName: userId.username, defaultColor: "mobile-text-heading-primary", variant: "heading-md/semibold", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, containerStyle: tmp.username, style: tmp.username }), , ];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    const obj4 = { userId, disabledTooltip: true, containerStyles: tmp.guildTag };
    tmp7Result = closure_1_12(GuildTagDefault, obj4);
  }
  items1[1] = tmp7Result;
  items1[2] = closure_1_12(ChevronSmallDownIcon.ChevronSmallDownIcon, { size: "xs", color: "mobile-text-heading-primary" });
  obj2.children = items1;
  return map1(View, obj2);
}
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4638);
let obj = { userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 }, statusRow: { flexDirection: "row", gap: nativeDefault.space.PX_4 }, statusEmoji: { width: 16, height: 16 }, usernameRow: { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 }, username: { flexShrink: 1 }, guildTag: { marginLeft: 2, flexShrink: 0 }, statusText: { flexShrink: 1 } };
let closure_15 = createStyles.createStyles(obj);
let obj3 = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(function YouName(username) {
  const userId = username.userId;
  let stateFromStores;
  const tmp = closure_15();
  importDefault = userId(stateFromStores[17]).useYouBarActivityStatusEnabled("YouBar");
  const obj = userId(stateFromStores[17]);
  let items = [SelfPresenceStore];
  stateFromStores = userId(stateFromStores[18]).useStateFromStores(items, () => status.getStatus());
  let obj2 = userId(stateFromStores[18]);
  const customStatusActivity = userId(stateFromStores[19]).useCustomStatusActivity();
  const obj3 = userId(stateFromStores[19]);
  let state;
  if (customStatusActivity != null) {
    state = customStatusActivity.state;
  }
  const gameMentionsAsPlainText = userId(stateFromStores[20]).useGameMentionsAsPlainText(state);
  const obj4 = userId(stateFromStores[20]);
  const items1 = [PresenceStore, ApplicationStreamingStore, RelationshipStore, ChannelStore, PermissionStore, VoiceStateStore];
  const obj5 = { style: tmp.userText, children: null };
  const stateFromStores1 = userId(stateFromStores[18]).useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = useDiscoverableApplicationStream.getDiscoverableApplicationStream(userId, items);
    useUserVoiceActivity;
    let tmp6 = closure_1;
    if (closure_1) {
      const obj2 = { activities: found, status: stateFromStores, applicationStream: discoverableApplicationStream, voiceChannel: tmp5 };
      tmp6 = shouldShowActivityStatusDefault(obj2);
    }
    return tmp6;
  });
  const items2 = [closure_12(Username, { username: username.username, userId }), ];
  const obj6 = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    const obj7 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = closure_12(require("ActivityStatus"), obj7);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result2 = null;
    if (null != emoji) {
      const obj8 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result2 = closure_12(require("ActivityEmoji"), obj8);
    }
    const items3 = [tmp11Result2, ];
    const obj9 = { variant: "text-xs/medium", color: "text-muted", lineClamp: 1, ellipsizeMode: "tail", maxFontSizeMultiplier: 1.75, style: tmp.statusText, children: null };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      humanizeStatusResult = tmp2(tmp3[27]).humanizeStatus(stateFromStores);
      const tmp2Result2 = tmp2(tmp3[27]);
    }
    const obj10 = { children: null };
    obj9.children = humanizeStatusResult;
    items3[1] = closure_12(tmp2(tmp3[26]).Text, obj9);
    obj10.children = items3;
    tmp9Result = closure_13(closure_14, obj10);
  }
  obj6.children = tmp9Result;
  items2[1] = closure_12(View, obj6);
  obj5.children = items2;
  return closure_13(View, obj5);
});