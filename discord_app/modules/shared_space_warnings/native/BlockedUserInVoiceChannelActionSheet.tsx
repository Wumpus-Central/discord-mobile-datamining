// === Module 13740: BlockedUserInVoiceChannelActionSheet ===

// Module 13740 (BlockedUserInVoiceChannelActionSheet)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5411 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const require = fn;
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4 } = get_ActivityIndicator);
const setDismissalTimeForUser = fn(13734).setDismissalTimeForUser;
const SharedSpaceWarningConstants = fn(13737);
({ BlockWarningEngagements: closure_9, VoiceChannelWarningSurfaces: c10 } = SharedSpaceWarningConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_12, jsxs: map1, jsx: closure_14 } = jsxProd);
fn(4560);
let createStyles = { container: null, headerImage: null, headerText: null, centerText: null, buttonGroup: null };
createStyles = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
createStyles.container = createStyles;
createStyles.headerImage = { alignSelf: "center", width: 73, height: 86 };
createStyles.headerText = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
createStyles.centerText = { textAlign: "center", alignSelf: "center" };
let obj1 = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
createStyles.buttonGroup = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
let closure_15 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default function BlockedUserInVoiceChannelActionSheet(arg0) {
  ({ channelId: require, blockedUserId } = arg0);
  let stateFromStores;
  const tmp = closure_15();
  let obj = require("initialize");
  let items = [RelationshipStore];
  stateFromStores = obj.useStateFromStores(items, () => RelationshipStore.isBlocked(blockedUserId));
  let obj1 = require("initialize");
  let items1 = [ChannelStore];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => ChannelStore.getChannel(channel_id));
  const user = UserStore.getUser(blockedUserId);
  obj = { children: null };
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (stateFromStores) {
    let items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = tmp2(tmp3[12]).intl;
    items2[2] = intl3.string(tmp2(tmp3[12]).t.UKQ4Cn);
    obj.children = items2;
    let tmp9 = obj;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = tmp2(tmp3[12]).intl;
    items3[2] = intl2.string(tmp2(tmp3[12]).t.wWueRW);
    obj.children = items3;
    tmp9 = obj;
  }
  obj = { style: tmp.container, children: null };
  obj1 = { source: blockedUserId(tmp3[14]), style: tmp.headerImage };
  const items4 = [closure_14(closure_3, obj1), , , ];
  let obj2 = { style: tmp.headerText, children: null };
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl4 = tmp2(tmp3[12]).intl;
  obj3.children = intl4.string(require("util").t["1/gpFh"]);
  const items5 = [closure_14(require("Text/Text").Text, obj3), ];
  const tmp7Result = closure_13(closure_12, tmp9);
  items5[1] = closure_14(require("Text/Text").Text, { variant: "text-md/medium", style: tmp.centerText, children: closure_13(closure_12, tmp9) });
  obj2.children = items5;
  items4[1] = closure_13(closure_4, obj2);
  if (null != user) {
    const obj5 = { size: tmp2(tmp3[18]).AvatarSizes.SMALL, user, guildId: null };
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    obj5.guildId = guild_id;
    let tmp11Result = tmp11(tmp2(tmp3[18]).Avatar, obj5);
  } else {
    tmp11Result = tmp11(tmp2(tmp3[19]).UserIcon, {});
  }
  const obj6 = { icon: tmp11Result, label: null };
  const intl5 = tmp2(tmp3[12]).intl;
  let username;
  if (user != null) {
    username = user.username;
  }
  const obj7 = { startExpanded: true, children: null };
  const obj8 = { hasIcons: true, children: null };
  obj6.label = intl5.formatToPlainString(require("util").t.w0YvUo, { userName: username });
  const items6 = [closure_14(require("TableRow").TableRow, obj6), ];
  const obj9 = { icon: closure_14(require("MicrophoneIcon").MicrophoneIcon, {}), label: null };
  const intl6 = tmp2(tmp3[12]).intl;
  obj9.label = intl6.string(require("util").t["+4O9nX"]);
  items6[1] = closure_14(require("TableRow").TableRow, obj9);
  obj8.children = items6;
  items4[2] = closure_13(require("TableRowGroup").TableRowGroup, obj8);
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = {
    size: "lg",
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      SelectedChannelActionCreatorsDefault.disconnect();
      obj = { action: constants.CLICK_TO_LEAVE, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    },
    text: null
  };
  const intl7 = tmp2(tmp3[12]).intl;
  obj11.text = intl7.string(require("util").t["Y56/oK"]);
  const items7 = [closure_14(require("components/Button/Button").Button, obj11), ];
  const obj12 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      let obj = ActionSheetActionCreatorsDefault;
      obj.hideActionSheet();
      setDismissalTimeForUser(blockedUserId);
      obj = { action: constants.CLICK_TO_STAY, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [tmp2];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [tmp2];
      }
      obj.ignored_user_ids = items2;
      obj.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    },
    text: null
  };
  const intl8 = tmp2(tmp3[12]).intl;
  obj12.text = intl8.string(require("util").t.bCcJST);
  items7[1] = closure_14(require("components/Button/Button").Button, obj12);
  obj10.children = items7;
  items4[3] = closure_13(closure_4, obj10);
  obj.children = items4;
  obj7.children = closure_13(closure_4, obj);
  return closure_14(require("ActionSheet").ActionSheet, obj7);
};