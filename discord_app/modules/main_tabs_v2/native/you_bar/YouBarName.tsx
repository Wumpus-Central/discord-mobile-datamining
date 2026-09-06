// discord_app/modules/main_tabs_v2/native/you_bar/YouBarName.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import GuildTagDefault from "../../../guild_tag/native/GuildTag.tsx";
import useDiscoverableApplicationStream from "../../../blocking/useDiscoverableApplicationStream.tsx";
import useUserVoiceActivity from "../../../activity_status/useUserVoiceActivity.tsx";
import UsernameWithEffectsDefault from "../../../display_name_styles/native/UsernameWithEffects.tsx";
import ChevronSmallDownIcon from "../../../../design/components/Icon/native/redesign/generated/ChevronSmallDownIcon.tsx";
import YouBarGuildTagExperiment from "YouBarGuildTagExperiment.tsx";
import shouldShowActivityStatusDefault from "../../../activity_status/shouldShowActivityStatus.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import ApplicationStreamingStore from "../../../../stores/ApplicationStreamingStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import PermissionStore from "../../../../stores/PermissionStore.tsx";
import PresenceStore from "../../../../stores/PresenceStore.tsx";
import RelationshipStore from "../../../../stores/RelationshipStore.tsx";
import SelfPresenceStore from "../../../../stores/SelfPresenceStore.tsx";
import VoiceStateStore from "../../../../stores/VoiceStateStore.tsx";

require = fn;
function Username(userId) {
  userId = userId.userId;
  const tmp = closure_15();
  let obj = { style: null, children: null };
  const items = [tmp.usernameRow];
  obj.style = items;
  const isYouBarGuildTagEnabled = obj.useIsYouBarGuildTagEnabled("YouBarName");
  obj = {
    userId,
    userName: userId.username,
    defaultColor: "mobile-text-heading-primary",
    variant: "heading-md/semibold",
    lineClamp: 1,
    ellipsizeMode: "tail",
    maxFontSizeMultiplier: 1.75,
    containerStyle: tmp.username,
    style: tmp.username,
  };
  const items1 = [closure_1_12(UsernameWithEffectsDefault, obj), ,];
  let tmp7Result = null;
  if (isYouBarGuildTagEnabled) {
    const obj1 = { userId, disabledTooltip: true, containerStyles: tmp.guildTag };
    tmp7Result = closure_1_12(GuildTagDefault, obj1);
  }
  items1[1] = tmp7Result;
  items1[2] = closure_1_12(ChevronSmallDownIcon.ChevronSmallDownIcon, {
    size: "xs",
    color: "mobile-text-heading-primary",
  });
  obj.children = items1;
  return map1(View, obj);
}
const View = fn(17).View;
const ActivityTypes = fn(1074).ActivityTypes;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1, Fragment: closure_14 } = jsxProd);
const createStyles = fn(4560);
let obj = {
  userText: { flexDirection: "column", justifyContent: "center", height: "100%", gap: 1 },
  statusRow: null,
  statusEmoji: null,
  usernameRow: null,
  username: null,
  guildTag: null,
  statusText: null,
};
obj = { flexDirection: "row", gap: nativeDefault.space.PX_4 };
obj.statusRow = obj;
obj.statusEmoji = { width: 16, height: 16 };
obj.usernameRow = { flexDirection: "row", alignItems: "center", overflow: "visible", gap: 2 };
obj.username = { flexShrink: 1 };
obj.guildTag = { marginLeft: 2, flexShrink: 0 };
obj.statusText = { flexShrink: 1 };
let closure_15 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/you_bar/YouBarName.tsx");

export default noop.memo(function YouName(username) {
  const userId = username.userId;
  let stateFromStores;
  const tmp = closure_15();
  let obj = userId(stateFromStores[17]);
  importDefault = obj.useYouBarActivityStatusEnabled("YouBar");
  let obj1 = userId(stateFromStores[18]);
  let items = [SelfPresenceStore];
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
  const items1 = [
    PresenceStore,
    ApplicationStreamingStore,
    RelationshipStore,
    ChannelStore,
    PermissionStore,
    VoiceStateStore,
  ];
  obj = { style: tmp.userText, children: null };
  const stateFromStores1 = tmp2Result.useStateFromStores(items1, () => {
    const activities = PresenceStore.getActivities(userId);
    const found = activities.filter((type) => type.type !== constants.CUSTOM_STATUS);
    let obj = useDiscoverableApplicationStream;
    const items = [ApplicationStreamingStore, RelationshipStore];
    const discoverableApplicationStream = obj.getDiscoverableApplicationStream(userId, items);
    useUserVoiceActivity;
    let tmp6 = closure_1;
    if (closure_1) {
      obj = {
        activities: found,
        status: stateFromStores,
        applicationStream: discoverableApplicationStream,
        voiceChannel: tmp5,
      };
      tmp6 = shouldShowActivityStatusDefault(obj);
    }
    return tmp6;
  });
  const items2 = [closure_12(Username, { username: username.username, userId })];
  obj = { style: tmp.statusRow, children: null };
  if (stateFromStores1) {
    obj1 = { userId, emojiSize: 16, maxFontSizeMultiplier: 1.75 };
    let tmp9Result = closure_12(require("ActivityStatus"), obj1);
  } else {
    let emoji;
    if (customStatusActivity != null) {
      emoji = customStatusActivity.emoji;
    }
    let tmp11Result = null;
    if (null != emoji) {
      obj2 = { size: 16, style: tmp.statusEmoji, emoji: customStatusActivity.emoji };
      tmp11Result = closure_12(require("ActivityEmoji"), obj2);
    }
    const items3 = [tmp11Result];
    obj3 = {
      variant: "text-xs/medium",
      color: "text-muted",
      lineClamp: 1,
      ellipsizeMode: "tail",
      maxFontSizeMultiplier: 1.75,
      style: tmp.statusText,
      children: null,
    };
    let humanizeStatusResult = gameMentionsAsPlainText;
    if (gameMentionsAsPlainText == null) {
      tmp2Result = tmp2(tmp3[27]);
      humanizeStatusResult = tmp2Result.humanizeStatus(stateFromStores);
    }
    const obj4 = { children: null };
    obj3.children = humanizeStatusResult;
    items3[1] = closure_12(tmp2(tmp3[26]).Text, obj3);
    obj4.children = items3;
    tmp9Result = closure_13(closure_14, obj4);
  }
  obj.children = tmp9Result;
  items2[1] = closure_12(View, obj);
  obj.children = items2;
  return closure_13(View, obj);
});
