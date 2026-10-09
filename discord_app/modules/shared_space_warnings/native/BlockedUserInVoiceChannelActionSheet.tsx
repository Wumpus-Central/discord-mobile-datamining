// === Module 13953: BlockedUserInVoiceChannelActionSheet ===

// Module 13953 (BlockedUserInVoiceChannelActionSheet)
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1265 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5055 */;
import SelectedChannelActionCreatorsDefault from "SelectedChannelActionCreators" /* 5886 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import RelationshipStore from "RelationshipStore" /* 4719 */;
import UserStore from "UserStore" /* 1390 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const setDismissalTimeForUser = fn(13950).setDismissalTimeForUser;
const SharedSpaceWarningConstants = fn(13952);
({ BlockWarningEngagements: closure_8, VoiceChannelWarningSurfaces: closure_9 } = SharedSpaceWarningConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsxProd = fn(21);
({ Fragment: closure_11, jsxs: closure_12, jsx: map1 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 }, headerImage: { alignSelf: "center", width: 73, height: 86 }, headerText: null, centerText: null, buttonGroup: null };
let obj3 = { paddingTop: nativeDefault.space.PX_12, gap: nativeDefault.space.PX_8 };
obj2.headerText = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.centerText = { textAlign: "center", alignSelf: "center" };
let obj4 = { gap: nativeDefault.space.PX_4, marginBottom: nativeDefault.space.PX_16 };
obj2.buttonGroup = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
let closure_14 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { paddingVertical: nativeDefault.space.PX_16, gap: 8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function BlockedUserInVoiceChannelActionSheet(channelId) {
  const cResult = channelId(stateFromStores[12]).c(79);
  channelId = channelId.channelId;
  const blockedUserId = channelId.blockedUserId;
  closure_14();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== blockedUserId) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
    cResult[1] = blockedUserId;
    cResult[2] = A;
  } else {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  let obj = channelId(stateFromStores[12]);
  stateFromStores = channelId(stateFromStores[13]).useStateFromStores(first, A);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
    let items1 = [ChannelStore];
    cResult[3] = items1;
    const tmp9 = items1;
  } else {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  if (cResult[4] !== channelId) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
    cResult[4] = channelId;
    cResult[5] = tmp11;
  } else {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  const tmpResult = channelId(stateFromStores[13]);
  const stateFromStores1 = channelId(stateFromStores[13]).useStateFromStores(tmp9, tmp11);
  if (stateFromStores1 != null) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  if (cResult[6] === undefined) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  const user = UserStore.getUser(blockedUserId);
  if (cResult[27] === channelId) {
    class A {
      constructor() {
        return closure_5.isBlocked(blockedUserId);
      }
    }
  }
  function handleDismissAndStay() {
    ActionSheetActionCreatorsDefault.hideActionSheet();
    setDismissalTimeForUser(blockedUserId);
    const obj3 = { action: constants.CLICK_TO_STAY, channel_id: channelId, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
    if (stateFromStores) {
      const items = [blockedUserId];
      let items1 = items;
    } else {
      items1 = [];
    }
    obj3.blocked_user_ids = items1;
    if (stateFromStores) {
      let items2 = [];
    } else {
      items2 = [blockedUserId];
    }
    obj3.ignored_user_ids = items2;
    obj3.warning_surface = constants2.POST_JOIN_SHEET;
    AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj3);
  }
  cResult[27] = channelId;
  cResult[28] = stateFromStores;
  cResult[29] = blockedUserId;
  cResult[30] = handleDismissAndStay;
  const tmpResult2 = channelId(stateFromStores[13]);
}) : (function BlockedUserInVoiceChannelActionSheet(arg0) {
  ({ channelId: require, blockedUserId } = arg0);
  let stateFromStores;
  const tmp = closure_14();
  let items = [RelationshipStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => RelationshipStore.isBlocked(blockedUserId));
  let obj = require("initialize");
  let items1 = [ChannelStore];
  const stateFromStores1 = require("initialize").useStateFromStores(items1, () => ChannelStore.getChannel(channel_id));
  const user = UserStore.getUser(blockedUserId);
  let obj3 = { children: null };
  const intl = require("util").intl;
  const string = intl.string;
  const t = require("util").t;
  if (stateFromStores) {
    let items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = require("util").intl;
    items2[2] = intl3.string(require("util").t.UKQ4Cn);
    obj3.children = items2;
    let tmp9 = obj3;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = require("util").intl;
    items3[2] = intl2.string(require("util").t.wWueRW);
    obj3.children = items3;
    tmp9 = obj3;
  }
  let obj2 = require("initialize");
  let obj4 = { style: tmp.container, children: null };
  const obj5 = { source: null, style: null };
  const tmp7Result = closure_12(closure_11, tmp9);
  obj5.source = blockedUserId(stateFromStores[20]);
  obj5.style = tmp.headerImage;
  const items4 = [closure_13(blockedUserId(stateFromStores[19]), obj5), , , ];
  const obj6 = { style: tmp.headerText, children: null };
  const obj7 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl4 = require("util").intl;
  obj7.children = intl4.string(require("util").t["1/gpFh"]);
  const items5 = [closure_13(require("Text/Text").Text, obj7), closure_13(require("Text/Text").Text, { variant: "text-md/medium", style: tmp.centerText, children: tmp7Result })];
  obj6.children = items5;
  items4[1] = closure_12(View, obj6);
  if (null != user) {
    const obj9 = { size: require("native").AvatarSizes.SMALL, user, guildId: null };
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    obj9.guildId = guild_id;
    let tmp11Result = closure_13(require("native").Avatar, obj9);
  } else {
    tmp11Result = closure_13(require("UserIcon").UserIcon, {});
  }
  const obj10 = { icon: tmp11Result, label: null };
  const intl5 = require("util").intl;
  let username;
  if (user != null) {
    username = user.username;
  }
  const obj11 = { startExpanded: true, children: null };
  const obj12 = { hasIcons: true, children: null };
  obj10.label = intl5.formatToPlainString(require("util").t.w0YvUo, { userName: username });
  const items6 = [closure_13(require("TableRow").TableRow, obj10), ];
  const obj13 = { icon: closure_13(require("MicrophoneIcon").MicrophoneIcon, {}), label: null };
  const intl6 = require("util").intl;
  obj13.label = intl6.string(require("util").t["+4O9nX"]);
  items6[1] = closure_13(require("TableRow").TableRow, obj13);
  obj12.children = items6;
  items4[2] = closure_12(require("TableRowGroup").TableRowGroup, obj12);
  const obj14 = { style: tmp.buttonGroup, children: null };
  const obj15 = {
    size: "lg",
    onPress: function handleDismissAndLeave() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      SelectedChannelActionCreatorsDefault.disconnect();
      const obj4 = { action: constants.CLICK_TO_LEAVE, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj4.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj4.ignored_user_ids = items2;
      obj4.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj4);
    },
    text: null
  };
  const intl7 = require("util").intl;
  obj15.text = intl7.string(require("util").t["Y56/oK"]);
  const items7 = [closure_13(require("components/Button/Button").Button, obj15), ];
  const obj16 = {
    size: "lg",
    variant: "secondary",
    onPress: function handleDismissAndStay() {
      ActionSheetActionCreatorsDefault.hideActionSheet();
      setDismissalTimeForUser(blockedUserId);
      const obj3 = { action: constants.CLICK_TO_STAY, channel_id, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj3.blocked_user_ids = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj3.ignored_user_ids = items2;
      obj3.warning_surface = constants2.POST_JOIN_SHEET;
      AnalyticsUtilsDefault.track(AnalyticEvents.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj3);
    },
    text: null
  };
  const intl8 = require("util").intl;
  obj16.text = intl8.string(require("util").t.bCcJST);
  items7[1] = closure_13(require("components/Button/Button").Button, obj16);
  obj14.children = items7;
  items4[3] = closure_12(View, obj14);
  obj4.children = items4;
  obj11.children = closure_12(View, obj4);
  return closure_13(require("ActionSheet").ActionSheet, obj11);
});