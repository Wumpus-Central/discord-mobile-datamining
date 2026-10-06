// === Module 17309: VoicePanelCTACardCallerDisconnected ===

// Module 17309 (VoicePanelCTACardCallerDisconnected)
import nativeDefault from "native" /* 587 */;
import NicknameUtilsDefault from "NicknameUtils" /* 5048 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UserStore from "UserStore" /* 1377 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let dependencyMap, num, num2;

let c9;
let metroImportAll;
let size;
let size1;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: size, avatarContainer: { flexDirection: "row", gap: 24 }, avatarWrapper: size1, avatar: { width: 80, height: 80 }, disconnectedAvatar: { opacity: 0.2 }, textContainer: { position: "absolute", left: 0, right: 0, bottom: 0, padding: 16, width: "100%" }, text: { textAlign: "center" } };
size = { width: "100%", height: "100%", alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.VOICE_VIDEO_VIDEO_TILE_BACKGROUND };
createStyles = createStyles.createStyles;
size1 = { width: 80, height: 80, borderRadius: nativeDefault.radii.round, overflow: "hidden" };
let closure_10 = createStyles(obj);
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let channelId;
  let closure_2;
  let first;
  let intl2;
  let items1;
  let items2;
  let items3;
  let items4;
  let obj10;
  let obj13;
  let obj6;
  let text;
  let textContainer;
  let tmp12;
  let tmp15;
  let tmp20;
  let tmp21;
  let tmp22;
  let tmp4Result4;
  let tmp4Result6;
  let tmp6;
  const obj = channelId(576);
  const cResult = obj.c(35);
  channelId = react.useContext(first(11915)).channelId;
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
    tmp6 = recipients;
  } else {
    tmp6 = cResult[1];
  }
  first = _slicedToArray(tmp6, 1)[0];
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const id = AuthenticationStore.getId();
    cResult[2] = id;
    tmp12 = id;
  } else {
    tmp12 = cResult[2];
  }
  dependencyMap = tmp12;
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [UserStore];
    cResult[3] = items;
    tmp15 = items;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === channelId) {
    let tmp17;
    let tmp18;
    if (cResult[5] === first) {
      tmp17 = cResult[6];
      tmp18 = cResult[7];
    }
    const tmpResult = channelId(504);
    [tmp20, tmp21, tmp22] = tmpResult.useStateFromStoresArray(tmp15, tmp17, tmp18);
    _slicedToArray(tmpResult.useStateFromStoresArray(tmp15, tmp17, tmp18), 3);
    if (cResult[8] === tmp20) {
      if (cResult[9] === tmp5.avatar) {
        let tmp24;
        if (cResult[10] === tmp5.avatarWrapper) {
          tmp24 = cResult[11];
        }
        if (cResult[12] === tmp21) {
          if (cResult[13] === tmp5.avatar) {
            if (cResult[14] === tmp5.avatarWrapper) {
              let tmp31;
              if (cResult[15] === tmp5.disconnectedAvatar) {
                tmp31 = cResult[16];
              }
              if (cResult[17] === tmp5.avatarContainer) {
                if (cResult[18] === tmp24) {
                  let tmp38;
                  let tmp41;
                  let tmp43;
                  if (cResult[19] === tmp31) {
                    tmp38 = cResult[20];
                  }
                  const _Symbol = Symbol;
                  ({ textContainer, text } = tmp5);
                  if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
                    const intl = tmp(1126).intl;
                    const stringResult = intl.string(channelId(1126).t.WkAgPU);
                    cResult[21] = stringResult;
                    tmp41 = stringResult;
                  } else {
                    tmp41 = cResult[21];
                  }
                  if (cResult[22] !== tmp5.text) {
                    const obj2 = { style: text, variant: "heading-sm/semibold", color: "text-overlay-light", children: tmp41 };
                    const tmp45 = closure_8(channelId(4892).Text, obj2);
                    cResult[22] = tmp5.text;
                    cResult[23] = tmp45;
                    tmp43 = tmp45;
                  } else {
                    tmp43 = cResult[23];
                  }
                  if (cResult[24] === tmp5.text) {
                    let tmp46;
                    if (cResult[25] === tmp22) {
                      tmp46 = cResult[26];
                    }
                    if (cResult[27] === tmp5.textContainer) {
                      if (cResult[28] === tmp43) {
                        let tmp50;
                        if (cResult[29] === tmp46) {
                          tmp50 = cResult[30];
                        }
                        if (cResult[31] === tmp5.container) {
                          if (cResult[32] === tmp50) {
                            let tmp53;
                            if (cResult[33] === tmp38) {
                              tmp53 = cResult[34];
                            }
                            return tmp53;
                          }
                        }
                        let obj3 = { style: tmp23, children: items1 };
                        items1 = [tmp38, tmp50];
                        const tmp55 = closure_9(first(5983), obj3);
                        cResult[31] = tmp5.container;
                        cResult[32] = tmp50;
                        cResult[33] = tmp38;
                        cResult[34] = tmp55;
                        tmp53 = tmp55;
                      }
                    }
                    const obj4 = { style: textContainer, children: items2 };
                    items2 = [tmp43, tmp46];
                    const tmp52 = closure_9(first(5983), obj4);
                    cResult[27] = tmp5.textContainer;
                    cResult[28] = tmp43;
                    cResult[29] = tmp46;
                    cResult[30] = tmp52;
                    tmp50 = tmp52;
                  }
                  let tmp48 = null != tmp22;
                  if (tmp48) {
                    const obj5 = { style: tmp5.text, variant: "text-xs/medium", color: "text-overlay-light", children: intl2.format(channelId(1126).t.kXrAqz, obj6) };
                    const Text = tmp(4892).Text;
                    intl2 = tmp(1126).intl;
                    obj6 = { username: tmp22 };
                    tmp48 = closure_8(Text, obj5);
                  }
                  cResult[24] = tmp5.text;
                  cResult[25] = tmp22;
                  cResult[26] = tmp48;
                  tmp46 = tmp48;
                }
              }
              const obj7 = { style: tmp5.avatarContainer, children: items3 };
              items3 = [tmp24, tmp31];
              const tmp40 = closure_9(first(5983), obj7);
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
          let tmp37 = tmp21;
          const obj8 = { style: tmp5.avatarWrapper, children: closure_8(tmp4Result4, obj10) };
          const tmp4Result = first(5983);
          tmp4Result4 = first(5981);
          if (typeof tmp21 !== "number") {
            tmp37 = { uri: tmp21 };
            const obj9 = { uri: tmp21 };
          }
          obj10 = { source: tmp37, style: items4 };
          items4 = [, ];
          ({ avatar: arr4[0], disconnectedAvatar: arr4[1] } = tmp5);
          tmp34Result = closure_8(tmp4Result, obj8);
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
      let tmp30 = tmp20;
      const obj11 = { style: tmp5.avatarWrapper, children: closure_8(tmp4Result6, obj13) };
      const tmp4Result5 = first(5983);
      tmp4Result6 = first(5981);
      if (typeof tmp20 !== "number") {
        tmp30 = { uri: tmp20 };
        const obj12 = { uri: tmp20 };
      }
      obj13 = { source: tmp30, style: tmp5.avatar };
      tmp27Result = closure_8(tmp4Result5, obj11);
    }
    cResult[8] = tmp20;
    cResult[9] = tmp5.avatar;
    cResult[10] = tmp5.avatarWrapper;
    cResult[11] = tmp27Result;
    tmp24 = tmp27Result;
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
}) : (() => {
  let first;
  let id;
  let intl;
  let intl2;
  let items2;
  let items3;
  let items4;
  let items5;
  let obj13;
  let obj6;
  let obj9;
  let tmp10;
  let tmp11;
  let tmp9;
  let tmpResult11;
  let tmpResult9;
  const f129804 = () => {
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
    const obj3 = NicknameUtilsDefault;
    items[2] = obj3.getName(undefined, channelId, user1);
    return items;
  };
  const channelId = react.useContext(first(id[10])).channelId;
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
  [tmp9, tmp10, tmp11] = obj.useStateFromStoresArray(items, f129804, items1);
  const obj2 = { style: tmp3.container, children: items4 };
  _slicedToArray(obj.useStateFromStoresArray(items, f129804, items1), 3);
  let obj3 = { style: tmp3.avatarContainer, children: items2 };
  let tmp16Result = null != tmp9;
  const tmpResult = first(id[13]);
  const tmpResult7 = first(id[13]);
  if (tmp16Result) {
    let tmp19 = tmp9;
    const obj4 = { style: tmp3.avatarWrapper, children: closure_8(tmpResult9, obj6) };
    const tmpResult8 = first(id[13]);
    tmpResult9 = first(id[14]);
    if (typeof tmp9 !== "number") {
      tmp19 = { uri: tmp9 };
      const obj5 = { uri: tmp9 };
    }
    obj6 = { source: tmp19, style: tmp3.avatar };
    tmp16Result = closure_8(tmpResult8, obj4);
  }
  items2 = [tmp16Result, ];
  let tmp21Result = null != tmp10;
  if (tmp21Result) {
    let tmp24 = tmp10;
    const obj7 = { style: tmp3.avatarWrapper, children: closure_8(tmpResult11, obj9) };
    const tmpResult10 = first(id[13]);
    tmpResult11 = first(id[14]);
    if (typeof tmp10 !== "number") {
      tmp24 = { uri: tmp10 };
      const obj8 = { uri: tmp10 };
    }
    obj9 = { source: tmp24, style: items3 };
    items3 = [, ];
    ({ avatar: arr5[0], disconnectedAvatar: arr5[1] } = tmp3);
    tmp21Result = closure_8(tmpResult10, obj7);
  }
  items2[1] = tmp21Result;
  items4 = [closure_9(tmpResult7, obj3), ];
  const obj10 = { style: tmp3.textContainer, children: items5 };
  const obj11 = { style: tmp3.text, variant: "heading-sm/semibold", color: "text-overlay-light", children: intl.string(channelId(id[15]).t.WkAgPU) };
  const tmpResult12 = first(id[13]);
  const Text = tmp7(tmp2[16]).Text;
  intl = tmp7(tmp2[15]).intl;
  items5 = [closure_8(Text, obj11), ];
  let tmp26Result = null != tmp11;
  if (tmp26Result) {
    const obj12 = { style: tmp3.text, variant: "text-xs/medium", color: "text-overlay-light", children: intl2.format(channelId(id[15]).t.kXrAqz, obj13) };
    const Text2 = tmp7(tmp2[16]).Text;
    intl2 = tmp7(tmp2[15]).intl;
    obj13 = { username: tmp11 };
    tmp26Result = closure_8(Text2, obj12);
  }
  items5[1] = tmp26Result;
  items4[1] = closure_9(tmpResult12, obj10);
  return closure_9(tmpResult, obj2);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/voice_panel/native/card/VoicePanelCTACardCallerDisconnected.tsx");

export default memoResult;