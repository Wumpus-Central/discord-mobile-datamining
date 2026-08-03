// === Module 15129: AudienceItem ===

// Module 15129 (AudienceItem)
import { View } from "get ActivityIndicator";
import trackCommunicationDisabled from "trackCommunicationDisabled";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import importAllResult from "noop";

let c5;
let closure_6;
const require = arg1;
function AudienceItem(arg0) {
  let audienceCount;
  let collapsed;
  ({ audienceCount, collapsed } = arg0);
  const tmp2 = callback2(importDefault(8834)());
  let formatToPlainStringResult = audienceCount;
  if (!collapsed) {
    const intl = require(1236) /* getSystemLocale */.intl;
    let obj = { count: null };
    obj[0] = audienceCount;
    formatToPlainStringResult = intl.formatToPlainString(require(1236) /* getSystemLocale */.t["+v2pN2"], obj);
  }
  obj = { style: collapsed ? tmp2.listenersCollapsed : tmp2.listeners, children: null };
  obj = { style: tmp2.listenersIconWrapper, children: callback(require(11633) /* HeadphonesIcon */.HeadphonesIcon, obj1) };
  const items = [callback(View, obj), callback(require(4189) /* Text */.Text, { style: tmp2.listenersText, variant: c7, color: "redesign-channel-name-muted-text", children: formatToPlainStringResult })];
  obj[1] = items;
  return closure_6(View, obj);
}
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let c7 = "text-sm/medium";
let closure_8 = createCacheKey.createStyles((arg0) => {
  const colors = importDefault(712).colors;
  if (arg0) {
    let BACKGROUND_BASE_LOWEST = colors.MOBILE_EXPRESSION_PICKER_BACKGROUND_DEFAULT;
    let tmp4 = tmp;
  } else {
    BACKGROUND_BASE_LOWEST = colors.BACKGROUND_BASE_LOWEST;
    tmp4 = tmp;
  }
  const round = tmp4(712).radii.round;
  let obj = { listeners: { display: "flex", flexDirection: "row", alignItems: "center", padding: 4, marginTop: 4, marginLeft: -8 }, listenersCollapsed: { flexDirection: "row", alignItems: "center", backgroundColor: BACKGROUND_BASE_LOWEST, borderRadius: round, marginLeft: -16, marginTop: 4, paddingLeft: 2, paddingRight: 6 }, listenersIconWrapper: null, listenersText: null, userCollapsedOverlap: null, headphonesIcon: null };
  obj = { alignItems: "center", justifyContent: "center", backgroundColor: BACKGROUND_BASE_LOWEST, marginRight: 8, marginLeft: 4, borderRadius: round };
  const merged = Object.assign(require(10299) /* getLayoutStyles */.makeSizeStyle(20));
  obj[2] = obj;
  obj[3] = { marginRight: 4 };
  obj[4] = { marginLeft: -20 };
  const obj3 = require(10299) /* getLayoutStyles */;
  obj[5] = require(10299) /* getLayoutStyles */.makeSizeStyle(14);
  return obj;
});
let closure_9 = require("noop").memo((voiceState) => {
  let isGuest;
  let member;
  let storeMember;
  let voiceState2;
  voiceState = voiceState.voiceState;
  const user = voiceState.user;
  ({ member, voiceState: voiceState2 } = voiceState);
  const channel = voiceState.channel;
  const collapsed = voiceState.collapsed;
  let obj = user(589);
  const items = [trackCommunicationDisabled];
  const items1 = [channel.guild_id, user.id];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ storeMember: outer1_4.getMember(channel.guild_id, user.id), isGuest: outer1_4.isGuestOrLurker(channel.guild_id, user.id) }), items1);
  let userCollapsedOverlap = null;
  ({ storeMember, isGuest } = stateFromStoresObject);
  if (collapsed) {
    userCollapsedOverlap = null;
    if (!voiceState.isFirst) {
      userCollapsedOverlap = tmp3.userCollapsedOverlap;
    }
  }
  obj = { style: userCollapsedOverlap, children: null };
  obj = { user, member: null, mute: null, deaf: null, selfVideo: null, selfMute: null, selfDeaf: null, suppress: null, collapsed: null, sessionId: null, channel: null, isGuest: null };
  const tmp = channel;
  tmp3 = callback2(channel(8834)());
  const tmp6 = View;
  if (member == null) {
    member = storeMember;
  }
  obj[1] = member;
  ({ mute: obj3[2], deaf: obj3[3], selfVideo: obj3[4], selfMute: obj3[5], selfDeaf: obj3[6], suppress: obj3[7] } = voiceState2);
  obj[8] = collapsed;
  obj[9] = voiceState2.sessionId;
  obj[10] = channel;
  obj[11] = isGuest;
  obj[1] = closure_5(channel(15130), obj, user.id);
  return closure_5(tmp6, obj);
});
const result = require("trackCommunicationDisabled").fileFinishedImporting("modules/guild_sidebar/native/VoiceUsers.tsx");

export default function VoiceUsers(collapsed) {
  let audienceCount;
  let importDefault;
  let voiceStates;
  collapsed = collapsed.collapsed;
  ({ channel: importDefault, voiceStates, audienceCount } = collapsed);
  let tmp = null;
  if (0 !== voiceStates.length) {
    let obj = { collapsed: null, children: null };
    obj[0] = collapsed;
    const items = [voiceStates.map((user) => outer1_5(outer1_9, { voiceState: user, channel: closure_1, collapsed, isFirst: 0 === arg1 }, "voice-user-item-" + user.user.id + "-" + user.voiceState.sessionId)), ];
    let tmp2 = null != audienceCount && audienceCount > 0;
    if (tmp2) {
      obj = { audienceCount: null, collapsed: null };
      obj[0] = audienceCount;
      obj[1] = collapsed;
      tmp2 = callback(AudienceItem, obj);
    }
    items[1] = tmp2;
    obj[1] = items;
    tmp = closure_6(importDefault(15134), obj);
    const tmp5 = closure_6;
    const tmp8 = importDefault(15134);
  }
  return tmp;
};
export const getAudienceItemHeight = function getAudienceItemHeight(fontScale) {
  return 8 + Math.max(20, require(9925) /* map */.scaleTextLineHeight(c7, fontScale));
};