// === Module 17590: VoicePanelCTACardCallerDisconnected ===

// Module 17590 (VoicePanelCTACardCallerDisconnected)
import nativeDefault from "native" /* 587 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5405 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2063 */;
import UserStore from "UserStore" /* 1389 */;

const require = fn;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(5090);
let obj = { container: null, avatarContainer: null, avatarWrapper: null, avatar: null, disconnectedAvatar: null, textContainer: null, text: null };
let size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
obj.container = size;
obj.avatarContainer = { flexDirection: "row", gap: 24 };
const size1 = { width: 80, height: 80, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
obj.avatarWrapper = size1;
obj.avatar = { width: 80, height: 80 };
obj.disconnectedAvatar = { opacity: 0.2 };
obj.textContainer = { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" };
obj.text = { textAlign: "center" };
let closure_10 = createStyles.createStyles(obj);
const ReactCompilerGating = fn(558);
size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelCTACardCallerDisconnected() {
  const cResult = channelId(576).c(35);
  channelId = noop.useContext(first(11988)).channelId;
  const tmp5 = closure_10();
  if (cResult[0] !== channelId) {
    const channel = ChannelStore.getChannel(channelId);
    let recipients;
    if (channel != null) {
      recipients = channel.recipients;
    }
    if (recipients == null) {
      recipients = [];
    }
    cResult[0] = channelId;
    cResult[1] = recipients;
    let tmp6 = recipients;
  } else {
    tmp6 = cResult[1];
  }
  first = _slicedToArray(tmp6, 1)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[2] = id;
    let tmp12 = id;
  } else {
    tmp12 = cResult[2];
  }
  dependencyMap = tmp12;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[3] = items;
    let tmp15 = items;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === channelId) {
    if (cResult[5] === first) {
      let tmp17 = cResult[6];
      let tmp18 = cResult[7];
    }
    const tmpResult = tmp(504);
    [tmp20, tmp21, tmp22] = tmp(504).useStateFromStoresArray(tmp15, tmp17, tmp18);
    if (cResult[8] === tmp20) {
      if (cResult[9] === tmp5.avatar) {
        if (cResult[10] === tmp5.avatarWrapper) {
          let tmp24 = cResult[11];
        }
        if (cResult[12] === tmp21) {
          if (cResult[13] === tmp5.avatar) {
            if (cResult[14] === tmp5.avatarWrapper) {
              if (cResult[15] === tmp5.disconnectedAvatar) {
                let tmp31 = cResult[16];
              }
              if (cResult[17] === tmp5.avatarContainer) {
                if (cResult[18] === tmp24) {
                  if (cResult[19] === tmp31) {
                    let tmp38 = cResult[20];
                  }
                  const _Symbol = Symbol;
                  ({ textContainer, text } = tmp5);
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(1126).intl;
                    const stringResult = intl.string(tmp(1126).t.WkAgPU);
                    cResult[21] = stringResult;
                    let tmp41 = stringResult;
                  } else {
                    tmp41 = cResult[21];
                  }
                  if (cResult[22] !== tmp5.text) {
                    const obj2 = { style: text, variant: "heading-sm/semibold", color: "text-overlay-light", children: tmp41 };
                    const tmp45 = closure_8(tmp(5086).Text, obj2);
                    cResult[22] = tmp5.text;
                    cResult[23] = tmp45;
                    let tmp43 = tmp45;
                  } else {
                    tmp43 = cResult[23];
                  }
                  if (cResult[24] === tmp5.text) {
                    if (cResult[25] === tmp22) {
                      let tmp46 = cResult[26];
                    }
                    if (cResult[27] === tmp5.textContainer) {
                      if (cResult[28] === tmp43) {
                        if (cResult[29] === tmp46) {
                          let tmp50 = cResult[30];
                        }
                        if (cResult[31] === tmp5.container) {
                          if (cResult[32] === tmp50) {
                            if (cResult[33] === tmp38) {
                              let tmp53 = cResult[34];
                            }
                            return tmp53;
                          }
                        }
                        const obj3 = { style: tmp23, children: null };
                        const items1 = [tmp38, tmp50];
                        obj3.children = items1;
                        const tmp55 = closure_9(tmp4(6166), obj3);
                        cResult[31] = tmp5.container;
                        cResult[32] = tmp50;
                        cResult[33] = tmp38;
                        cResult[34] = tmp55;
                        tmp53 = tmp55;
                      }
                    }
                    const obj4 = { style: textContainer, children: null };
                    const items2 = [tmp43, tmp46];
                    obj4.children = items2;
                    const tmp52 = closure_9(tmp4(6166), obj4);
                    cResult[27] = tmp5.textContainer;
                    cResult[28] = tmp43;
                    cResult[29] = tmp46;
                    cResult[30] = tmp52;
                    tmp50 = tmp52;
                  }
                  let tmp48 = null != tmp22;
                  if (tmp48) {
                    const obj5 = { style: tmp5.text, variant: "text-xs/medium", color: "text-overlay-light", children: null };
                    const intl2 = tmp(1126).intl;
                    const obj6 = { username: tmp22 };
                    obj5.children = intl2.format(tmp(1126).t.kXrAqz, obj6);
                    tmp48 = closure_8(tmp(5086).Text, obj5);
                  }
                  cResult[24] = tmp5.text;
                  cResult[25] = tmp22;
                  cResult[26] = tmp48;
                  tmp46 = tmp48;
                }
              }
              const obj7 = { style: tmp5.avatarContainer, children: null };
              const items3 = [tmp24, tmp31];
              obj7.children = items3;
              const tmp40 = closure_9(tmp4(6166), obj7);
              cResult[17] = tmp5.avatarContainer;
              cResult[18] = tmp24;
              cResult[19] = tmp31;
              cResult[20] = tmp40;
              tmp38 = tmp40;
            }
          }
        }
        let tmp34Result = null != tmp21;
        if (tmp34Result) {
          const obj8 = { style: tmp5.avatarWrapper, children: null };
          let tmp37 = tmp21;
          const tmp4Result = tmp4(6166);
          if (typeof tmp21 !== "number") {
            const obj9 = { uri: tmp21 };
            tmp37 = obj9;
          }
          const obj10 = { source: tmp37, style: null };
          const items4 = [, ];
          ({ avatar: arr4[0], disconnectedAvatar: arr4[1] } = tmp5);
          obj10.style = items4;
          obj8.children = closure_8(tmp4(6164), obj10);
          tmp34Result = closure_8(tmp4Result, obj8);
          const tmp4Result4 = tmp4(6164);
        }
        cResult[12] = tmp21;
        cResult[13] = tmp5.avatar;
        cResult[14] = tmp5.avatarWrapper;
        cResult[15] = tmp5.disconnectedAvatar;
        cResult[16] = tmp34Result;
        tmp31 = tmp34Result;
      }
    }
    let tmp27Result = null != tmp20;
    if (tmp27Result) {
      const obj11 = { style: tmp5.avatarWrapper, children: null };
      let tmp30 = tmp20;
      const tmp4Result5 = tmp4(6166);
      if (typeof tmp20 !== "number") {
        const obj12 = { uri: tmp20 };
        tmp30 = obj12;
      }
      const obj13 = { source: tmp30, style: tmp5.avatar };
      obj11.children = closure_8(tmp4(6164), obj13);
      tmp27Result = closure_8(tmp4Result5, obj11);
      const tmp4Result6 = tmp4(6164);
    }
    cResult[8] = tmp20;
    cResult[9] = tmp5.avatar;
    cResult[10] = tmp5.avatarWrapper;
    cResult[11] = tmp27Result;
    tmp24 = tmp27Result;
    const tmp10Result = _slicedToArray(tmp(504).useStateFromStoresArray(tmp15, tmp17, tmp18), 3);
  }
  class U {
    constructor() {
      user = closure_7.getUser(closure_2);
      user1 = closure_7.getUser(closure_1);
      avatarURL = undefined;
      if (user != null) {
        num = 80;
        avatarURL = user.getAvatarURL(undefined, 80);
      }
      items = [, , ];
      items[0] = avatarURL;
      avatarURL1 = undefined;
      if (user1 != null) {
        num2 = 80;
        avatarURL1 = user1.getAvatarURL(undefined, 80);
      }
      items[1] = avatarURL1;
      obj3 = closure_1(closure_2[11]);
      items[2] = obj3.getName(undefined, channelId, user1);
      return items;
    }
  }
  const items5 = [channelId, tmp12, first];
  cResult[4] = channelId;
  cResult[5] = first;
  cResult[6] = U;
  cResult[7] = items5;
  tmp18 = items5;
  tmp17 = U;
  const obj = channelId(576);
}) : (function VoicePanelCTACardCallerDisconnected() {
  const channelId = noop.useContext(first(id[10])).channelId;
  const tmp3 = closure_10();
  const channel = ChannelStore.getChannel(channelId);
  let recipients;
  if (channel != null) {
    recipients = channel.recipients;
  }
  if (recipients == null) {
    recipients = [];
  }
  first = _slicedToArray(recipients, 1)[0];
  id = AuthenticationStore.getId();
  let items = [UserStore];
  const items1 = [channelId, id, first];
  const obj = channelId(id[12]);
  [tmp9, tmp10, tmp11] = channelId(id[12]).useStateFromStoresArray(items, () => {
    const user = UserStore.getUser(id);
    const user1 = UserStore.getUser(first);
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
    items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
    return items;
  }, items1);
  const obj2 = { style: tmp3.container, children: null };
  const tmp8 = _slicedToArray(channelId(id[12]).useStateFromStoresArray(items, () => {
    const user = UserStore.getUser(id);
    const user1 = UserStore.getUser(first);
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
    items[2] = NicknameUtilsDefault.getName(undefined, channelId, user1);
    return items;
  }, items1), 3);
  const obj3 = { style: tmp3.avatarContainer, children: null };
  let tmp16Result = null != tmp9;
  const tmpResult = first(id[13]);
  if (tmp16Result) {
    const obj4 = { style: tmp3.avatarWrapper, children: null };
    let tmp19 = tmp9;
    const tmpResult8 = tmp(tmp2[13]);
    if (typeof tmp9 !== "number") {
      const obj5 = { uri: tmp9 };
      tmp19 = obj5;
    }
    const obj6 = { source: tmp19, style: tmp3.avatar };
    obj4.children = closure_8(tmp(tmp2[14]), obj6);
    tmp16Result = closure_8(tmpResult8, obj4);
    const tmpResult9 = tmp(tmp2[14]);
  }
  const items2 = [tmp16Result, ];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    const obj7 = { style: tmp3.avatarWrapper, children: null };
    let tmp24 = tmp10;
    const tmpResult10 = tmp(tmp2[13]);
    if (typeof tmp10 !== "number") {
      const obj8 = { uri: tmp10 };
      tmp24 = obj8;
    }
    const obj9 = { source: tmp24, style: null };
    const items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    obj9.style = items3;
    obj7.children = closure_8(tmp(tmp2[14]), obj9);
    tmp21Result = closure_8(tmpResult10, obj7);
    const tmpResult11 = tmp(tmp2[14]);
  }
  items2[1] = tmp21Result;
  obj3.children = items2;
  const items4 = [closure_9(first(id[13]), obj3), ];
  const obj10 = { style: tmp3.textContainer, children: null };
  const tmpResult7 = first(id[13]);
  const obj11 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: null };
  const intl = tmp7(tmp2[15]).intl;
  obj11.children = intl.string(channelId(id[15]).t.WkAgPU);
  const items5 = [closure_8(channelId(id[16]).Text, obj11), ];
  let tmp26Result = null != tmp11;
  if (tmp26Result) {
    const obj12 = { style: tmp3.text, variant: "text-xs/medium", color: "text-overlay-light", children: null };
    const intl2 = tmp7(tmp2[15]).intl;
    const obj13 = { username: tmp11 };
    obj12.children = intl2.format(tmp7(tmp2[15]).t.kXrAqz, obj13);
    tmp26Result = closure_8(tmp7(tmp2[16]).Text, obj12);
  }
  items5[1] = tmp26Result;
  obj10.children = items5;
  items4[1] = closure_9(first(id[13]), obj10);
  obj2.children = items4;
  return closure_9(tmpResult, obj2);
}));