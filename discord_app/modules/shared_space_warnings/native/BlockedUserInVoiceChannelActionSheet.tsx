// discord_app/modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_5 from "ensureGuildLoaded" /* 1391 */;
import closure_6 from "markAllUserIdListsStale" /* 4030 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import { setDismissalTimeForUser } from "useSharedSpacesWarningStore" /* 13283 */;
import GdmWarningMedium from "GdmWarningMedium" /* 13286 */;
import { AnalyticEvents } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
noopAll;
({ Image: c3, View: c4 } = get_ActivityIndicator);
({ BlockWarningEngagements: c9, VoiceChannelWarningSurfaces: c10 } = GdmWarningMedium);
({ Fragment: closure_12, jsxs: map1, jsx: closure_14 } = jsxProd);
createCacheKey = { container: null, headerImage: null, headerText: null, centerText: null, buttonGroup: null };
createCacheKey = { paddingTop: ThemesDefault.space.PX_12, gap: ThemesDefault.space.PX_8 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", width: 73, height: 86 };
createCacheKey[2] = { gap: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[3] = { textAlign: "center", alignSelf: "center" };
let obj1 = { gap: ThemesDefault.space.PX_4, marginBottom: ThemesDefault.space.PX_16 };
createCacheKey[4] = { paddingVertical: ThemesDefault.space.PX_16, gap: 8 };
let closure_15 = createCacheKey.createStyles(createCacheKey);
let obj2 = { paddingVertical: ThemesDefault.space.PX_16, gap: 8 };
const result = require("set").fileFinishedImporting("modules/shared_space_warnings/native/BlockedUserInVoiceChannelActionSheet.tsx");

export default function BlockedUserInVoiceChannelActionSheet(arg0) {
  ({ channelId: require, blockedUserId } = arg0);
  let stateFromStores;
  const tmp = callback2();
  let obj = require(stateFromStores[11]);
  let items = [closure_6];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_6.isBlocked(blockedUserId));
  obj1 = require(stateFromStores[11]);
  let items1 = [closure_5];
  const stateFromStores1 = obj1.useStateFromStores(items1, () => closure_1_5.getChannel(closure_0));
  user = user.getUser(blockedUserId);
  obj = { children: null };
  const intl = require(stateFromStores[12]).intl;
  const string = intl.string;
  const t = require(stateFromStores[12]).t;
  if (stateFromStores) {
    let items2 = [string(t.cpgfFk), "\n", ];
    const intl3 = tmp2(tmp3[12]).intl;
    items2[2] = intl3.string(tmp2(tmp3[12]).t.UKQ4Cn);
    obj[0] = items2;
    let tmp9 = obj;
  } else {
    const items3 = [string(t.xj3j47), "\n", ];
    const intl2 = tmp2(tmp3[12]).intl;
    items3[2] = intl2.string(tmp2(tmp3[12]).t.wWueRW);
    obj[0] = items3;
    tmp9 = obj;
  }
  obj = { style: tmp.container, children: null };
  obj1 = { source: blockedUserId(tmp3[14]), style: tmp.headerImage };
  const items4 = [callback(closure_3, obj1), , , ];
  let obj2 = { style: tmp.headerText, children: null };
  const obj3 = { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp.centerText, children: null };
  const intl4 = tmp2(tmp3[12]).intl;
  obj3[3] = intl4.string(require(stateFromStores[12]).t["1/gpFh"]);
  const items5 = [callback(require(stateFromStores[15]).Text, obj3), ];
  const tmp7Result = closure_13(closure_12, tmp9);
  const tmp8 = closure_12;
  items5[1] = callback(require(stateFromStores[15]).Text, { variant: "text-md/medium", style: tmp.centerText, children: closure_13(closure_12, tmp9) });
  obj2[1] = items5;
  items4[1] = closure_13(closure_4, obj2);
  if (null != user) {
    const obj5 = { size: null, user: null, guildId: null };
    obj5[0] = tmp2(tmp3[18]).AvatarSizes.SMALL;
    obj5[1] = user;
    let guild_id;
    if (stateFromStores1 != null) {
      guild_id = stateFromStores1.guild_id;
    }
    obj5[2] = guild_id;
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
  obj6[1] = intl5.formatToPlainString(require(stateFromStores[12]).t.w0YvUo, { userName: username });
  const items6 = [callback(require(stateFromStores[17]).TableRow, obj6), ];
  const obj9 = { icon: callback(require(stateFromStores[20]).MicrophoneIcon, {}), label: null };
  const intl6 = tmp2(tmp3[12]).intl;
  obj9[1] = intl6.string(require(stateFromStores[12]).t["+4O9nX"]);
  items6[1] = callback(require(stateFromStores[17]).TableRow, obj9);
  obj8[1] = items6;
  items4[2] = closure_13(require(stateFromStores[16]).TableRowGroup, obj8);
  const obj10 = { style: tmp.buttonGroup, children: null };
  const obj11 = {
    size: "lg",
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      blockedUserId(stateFromStores[23]).disconnect();
      const obj2 = blockedUserId(stateFromStores[23]);
      obj = { action: closure_1_9.CLICK_TO_LEAVE, channel_id: closure_0, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [blockedUserId];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj[2] = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [blockedUserId];
      }
      obj[3] = items2;
      obj[4] = closure_1_10.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(closure_1_11.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    },
    text: null
  };
  const intl7 = tmp2(tmp3[12]).intl;
  obj11[2] = intl7.string(require(stateFromStores[12]).t["Y56/oK"]);
  const items7 = [callback(require(stateFromStores[21]).Button, obj11), ];
  const obj12 = {
    size: "lg",
    variant: "secondary",
    onPress() {
      let obj = blockedUserId(stateFromStores[22]);
      obj.hideActionSheet();
      closure_1_8(blockedUserId);
      obj = { action: closure_1_9.CLICK_TO_STAY, channel_id: closure_0, blocked_user_ids: null, ignored_user_ids: null, warning_surface: null };
      if (stateFromStores) {
        const items = [tmp2];
        let items1 = items;
      } else {
        items1 = [];
      }
      obj[2] = items1;
      if (stateFromStores) {
        let items2 = [];
      } else {
        items2 = [tmp2];
      }
      obj[3] = items2;
      obj[4] = closure_1_10.POST_JOIN_SHEET;
      blockedUserId(stateFromStores[24]).track(closure_1_11.VOICE_CHANNEL_BLOCKED_USER_WARNING_ENGAGEMENT, obj);
    },
    text: null
  };
  const intl8 = tmp2(tmp3[12]).intl;
  obj12[3] = intl8.string(require(stateFromStores[12]).t.bCcJST);
  items7[1] = callback(require(stateFromStores[21]).Button, obj12);
  obj10[1] = items7;
  items4[3] = closure_13(closure_4, obj10);
  obj[1] = items4;
  obj7[1] = closure_13(closure_4, obj);
  return callback(require(stateFromStores[13]).ActionSheet, obj7);
};