// === Module 16052: ? ===

// Module 16052
import _slicedToArray from "_slicedToArray";
import importAllResult from "noop";
import fetchFingerprint from "fetchFingerprint";
import ensureGuildLoaded from "ensureGuildLoaded";
import mergeGuildAvatar from "mergeGuildAvatar";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
let c4 = importAllResult;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let obj = { container: null, avatarContainer: null, avatarWrapper: null, avatar: null, disconnectedAvatar: null, textContainer: null, text: null };
obj = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: require("Themes").colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj[0] = obj;
obj[1] = { flexDirection: "row", gap: 24 };
createCacheKey = { width: 80, height: 80, borderRadius: require("Themes").radii.round, overflow: "hidden" };
obj[2] = createCacheKey;
obj[3] = { width: 80, height: 80 };
obj[4] = { opacity: 0.2 };
obj[5] = { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" };
obj[6] = { textAlign: "center" };
let closure_10 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function VoicePanelCTACardCallerDisconnected() {
  let tmp10;
  let tmp11;
  let tmp9;
  const channelId = importAllResult.useContext(first(id[8])).channelId;
  const tmp3 = callback3();
  channel = channel.getChannel(channelId);
  let recipients;
  if (channel != null) {
    recipients = channel.recipients;
  }
  if (recipients == null) {
    recipients = [];
  }
  first = callback(recipients, 1)[0];
  id = id.getId();
  let obj = channelId(tmp2[9]);
  let items = [mergeGuildAvatar];
  const items1 = [channelId, id, first];
  [tmp9, tmp10, tmp11] = callback(obj.useStateFromStoresArray(items, () => {
    const user = outer1_7.getUser(id);
    const user1 = outer1_7.getUser(first);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (user1 != null) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    items[2] = first(id[10]).getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  obj = { style: tmp3.container, children: null };
  let tmpResult = tmp(tmp2[11]);
  obj = { style: tmp3.avatarContainer, children: null };
  let tmp16Result = null != tmp9;
  tmpResult = tmp(tmp2[11]);
  if (tmp16Result) {
    const obj1 = { style: null, children: null };
    obj1[0] = tmp3.avatarWrapper;
    let tmp19 = tmp9;
    const tmpResult1 = tmp(tmp2[11]);
    if (typeof tmp9 !== "Object") {
      const obj2 = { uri: null };
      obj2[0] = tmp9;
      tmp19 = obj2;
    }
    const obj3 = { source: null, style: null };
    obj3[0] = tmp19;
    obj3[1] = tmp3.avatar;
    obj1[1] = callback2(tmp(tmp2[12]), obj3);
    tmp16Result = tmp16(tmpResult1, obj1);
    const tmpResult2 = tmp(tmp2[12]);
  }
  const items2 = [tmp16Result, ];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    const obj4 = { style: null, children: null };
    obj4[0] = tmp3.avatarWrapper;
    let tmp24 = tmp10;
    const tmpResult3 = tmp(tmp2[11]);
    if (typeof tmp10 !== "Object") {
      const obj5 = { uri: null };
      obj5[0] = tmp10;
      tmp24 = obj5;
    }
    const obj6 = { source: null, style: null };
    obj6[0] = tmp24;
    const items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    obj6[1] = items3;
    obj4[1] = callback2(tmp(tmp2[12]), obj6);
    tmp21Result = tmp21(tmpResult3, obj4);
    const tmpResult4 = tmp(tmp2[12]);
  }
  items2[1] = tmp21Result;
  obj[1] = items2;
  const items4 = [closure_9(tmpResult, obj), ];
  const obj7 = { style: tmp3.textContainer, children: null };
  const tmp8 = callback(obj.useStateFromStoresArray(items, () => {
    const user = outer1_7.getUser(id);
    const user1 = outer1_7.getUser(first);
    let avatarURL;
    if (user != null) {
      avatarURL = user.getAvatarURL(undefined, 80);
    }
    const items = [avatarURL, , ];
    let avatarURL1;
    if (user1 != null) {
      avatarURL1 = user1.getAvatarURL(undefined, 80);
    }
    items[1] = avatarURL1;
    items[2] = first(id[10]).getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  const obj8 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: null };
  const intl = tmp7(tmp2[14]).intl;
  obj8[3] = intl.string(channelId(id[14]).t.WkAgPU);
  const items5 = [callback2(channelId(id[13]).Text, obj8), ];
  let tmp26Result = null != tmp11;
  if (tmp26Result) {
    const obj9 = { style: null, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    obj9[0] = tmp3.text;
    const intl2 = tmp7(tmp2[14]).intl;
    const obj10 = { username: null };
    obj10[0] = tmp11;
    obj9[3] = intl2.format(tmp7(tmp2[14]).t.kXrAqz, obj10);
    tmp26Result = callback2(tmp7(tmp2[13]).Text, obj9);
  }
  items5[1] = tmp26Result;
  obj7[1] = items5;
  items4[1] = closure_9(first(id[11]), obj7);
  obj[1] = items4;
  return closure_9(tmpResult, obj);
});
const result = require("fetchFingerprint").fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default memoResult;