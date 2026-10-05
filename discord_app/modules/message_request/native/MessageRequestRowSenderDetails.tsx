// === Module 17056: MessageRequestRowSenderDetails ===

// Module 17056 (MessageRequestRowSenderDetails)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import utils_AvatarUtilsDefault from "utils/AvatarUtils" /* 1405 */;
import UserUtilsDefault from "UserUtils" /* 4722 */;
import MessageRequestPreviewDefault from "MessageRequestPreview" /* 17058 */;
import MessageRequestMutualServersDefault from "MessageRequestMutualServers" /* 17059 */;
import react from "react" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let nickname;

let hasOwnProperty;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { avatar: obj2, avatarContainer: { marginRight: 16, alignItems: "flex-start", height: "100%" }, detailsContainer: { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 }, messageDetails: { flexDirection: "row", alignItems: "center" }, username: obj3, timestampSeparator: { marginHorizontal: 6 }, messagePreview: { marginTop: 2 }, usernameTextContainer: { flexShrink: 1 } };
obj2 = { borderRadius: native.AVATAR_SIZE_MAP[native.AvatarSizes.NORMAL] / 2, backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH };
createStyles = createStyles.createStyles;
obj3 = { flexShrink: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let closure_8 = createStyles(obj);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  let Avatar;
  let avatarDecoration;
  let avatarDecoration1;
  let channel;
  let channel2;
  let intl2;
  let intl4;
  let items1;
  let items10;
  let items11;
  let items2;
  let items3;
  let items4;
  let items5;
  let items8;
  let items9;
  let obj19;
  let otherUser;
  let otherUser2;
  let stringResult1;
  let tmp14Result2;
  if (closure_9) {
    let first;
    let tmp35;
    let obj15;
    const obj17 = otherUser(576);
    const cResult = obj17.c(47);
    ({ channel: channel2, otherUser: otherUser2 } = isRestricted);
    isRestricted = isRestricted.isRestricted;
    const tmp31 = closure_8();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [RelationshipStore];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== otherUser2) {
      const fn = function v() {
        let tmp2 = null;
        if (null != otherUser2) {
          nickname = nickname.getNickname(otherUser2.id);
          if (nickname == null) {
            const obj = UserUtilsDefault;
            nickname = obj.getGlobalName(otherUser2);
          }
          tmp2 = nickname;
        }
        return tmp2;
      };
      cResult[1] = otherUser2;
      cResult[2] = fn;
      tmp35 = fn;
    } else {
      tmp35 = cResult[2];
    }
    const tmp26Result = otherUser(504);
    const stateFromStores = tmp26Result.useStateFromStores(first, tmp35);
    const tmp26Result3 = otherUser(17057);
    const messageRequestRelativeTimestampText = tmp26Result3.useMessageRequestRelativeTimestampText(channel2);
    const _Math3 = Math;
    const _Math4 = Math;
    const floor2 = Math.floor;
    const random = Math.random();
    const floor2Result = floor2(random * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
    const tmp41 = utils_AvatarUtilsDefault.DEFAULT_AVATARS[floor2Result];
    if (cResult[3] === otherUser2) {
      let tmp42;
      if (cResult[4] === tmp31.avatar) {
        tmp42 = cResult[5];
      }
      if (cResult[6] === tmp31.avatarContainer) {
        let tmp47;
        if (cResult[7] === tmp42) {
          tmp47 = cResult[8];
        }
        let username;
        const tmp51 = cResult[9];
        if (otherUser2 != null) {
          username = otherUser2.username;
        }
        if (tmp51 === username) {
          let tmp54;
          if (cResult[10] === stateFromStores) {
            tmp54 = cResult[11];
          }
          if (cResult[12] === tmp31.username) {
            let tmp58;
            if (cResult[13] === tmp54) {
              tmp58 = cResult[14];
            }
            if (cResult[15] === otherUser2) {
              let tmp61;
              if (cResult[16] === stateFromStores) {
                tmp61 = cResult[17];
              }
              if (cResult[18] === tmp31.usernameTextContainer) {
                if (cResult[19] === tmp58) {
                  let tmp64;
                  let tmp67;
                  let tmp70;
                  if (cResult[20] === tmp61) {
                    tmp64 = cResult[21];
                  }
                  if (cResult[22] !== tmp31.timestampSeparator) {
                    const obj3 = { style: tmp31.timestampSeparator, variant: "text-xs/medium", color: "text-muted", children: "\u00B7" };
                    const tmp69 = closure_5(otherUser(4886).Text, obj3);
                    cResult[22] = tmp31.timestampSeparator;
                    cResult[23] = tmp69;
                    tmp67 = tmp69;
                  } else {
                    tmp67 = cResult[23];
                  }
                  if (cResult[24] !== messageRequestRelativeTimestampText) {
                    const obj4 = { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText };
                    const tmp72 = closure_5(otherUser(4886).Text, obj4);
                    cResult[24] = messageRequestRelativeTimestampText;
                    cResult[25] = tmp72;
                    tmp70 = tmp72;
                  } else {
                    tmp70 = cResult[25];
                  }
                  if (cResult[26] === tmp31.messageDetails) {
                    if (cResult[27] === tmp67) {
                      if (cResult[28] === tmp70) {
                        let tmp73;
                        if (cResult[29] === tmp64) {
                          tmp73 = cResult[30];
                        }
                        if (cResult[31] === channel2) {
                          if (cResult[32] === (undefined !== isRestricted && isRestricted)) {
                            let tmp77;
                            if (cResult[33] === tmp31.messagePreview) {
                              tmp77 = cResult[34];
                            }
                            if (cResult[35] === (undefined !== isRestricted && isRestricted)) {
                              if (cResult[36] === otherUser2) {
                                let tmp80;
                                if (cResult[37] === tmp31.messagePreview) {
                                  tmp80 = cResult[38];
                                }
                                if (cResult[39] === tmp31.detailsContainer) {
                                  if (cResult[40] === tmp73) {
                                    if (cResult[41] === tmp77) {
                                      let tmp84;
                                      if (cResult[42] === tmp80) {
                                        tmp84 = cResult[43];
                                      }
                                      if (cResult[44] === tmp84) {
                                        let tmp88;
                                        if (cResult[45] === tmp47) {
                                          tmp88 = cResult[46];
                                        }
                                        tmp14Result2 = tmp88;
                                      }
                                      const obj5 = { children: items1 };
                                      items1 = [tmp47, tmp84];
                                      const tmp91 = closure_6(closure_7, obj5);
                                      cResult[44] = tmp84;
                                      cResult[45] = tmp47;
                                      cResult[46] = tmp91;
                                      tmp88 = tmp91;
                                    }
                                  }
                                }
                                const obj6 = { style: tmp31.detailsContainer, children: items2 };
                                items2 = [tmp73, tmp77, tmp80];
                                const tmp87 = closure_6(View, obj6);
                                cResult[39] = tmp31.detailsContainer;
                                cResult[40] = tmp73;
                                cResult[41] = tmp77;
                                cResult[42] = tmp80;
                                cResult[43] = tmp87;
                                tmp84 = tmp87;
                              }
                            }
                            let tmp81 = tmp29 && null != otherUser2;
                            if (tmp81) {
                              const obj7 = { style: tmp31.messagePreview, userId: otherUser2.id, suffix: intl4.string(otherUser(1126).t.hTltPn) };
                              const tmp39Result = MessageRequestMutualServersDefault;
                              intl4 = otherUser(1126).intl;
                              tmp81 = closure_5(tmp39Result, obj7);
                            }
                            cResult[35] = undefined !== isRestricted && isRestricted;
                            cResult[36] = otherUser2;
                            cResult[37] = tmp31.messagePreview;
                            cResult[38] = tmp81;
                            tmp80 = tmp81;
                          }
                        }
                        let tmp78 = !tmp29;
                        if (tmp78) {
                          const obj8 = { style: tmp31.messagePreview, channel: channel2 };
                          tmp78 = closure_5(MessageRequestPreviewDefault, obj8);
                        }
                        cResult[31] = channel2;
                        cResult[32] = undefined !== isRestricted && isRestricted;
                        cResult[33] = tmp31.messagePreview;
                        cResult[34] = tmp78;
                        tmp77 = tmp78;
                      }
                    }
                  }
                  const obj9 = { style: tmp31.messageDetails, children: items3 };
                  items3 = [tmp64, tmp67, tmp70];
                  const tmp76 = closure_6(View, obj9);
                  cResult[26] = tmp31.messageDetails;
                  cResult[27] = tmp67;
                  cResult[28] = tmp70;
                  cResult[29] = tmp64;
                  cResult[30] = tmp76;
                  tmp73 = tmp76;
                }
              }
              const obj10 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp31.usernameTextContainer, children: items4 };
              items4 = [tmp58, tmp61];
              const tmp66 = closure_6(otherUser(4886).Text, obj10);
              cResult[18] = tmp31.usernameTextContainer;
              cResult[19] = tmp58;
              cResult[20] = tmp61;
              cResult[21] = tmp66;
              tmp64 = tmp66;
            }
            let tmp62 = null != stateFromStores;
            if (tmp62) {
              const obj11 = { variant: "text-md/medium", color: "text-muted", children: items5 };
              const Text4 = otherUser(4886).Text;
              items5 = [" "];
              const tmp26Result4 = otherUser(4722);
              items5[1] = tmp26Result4.getUserTag(otherUser2);
              tmp62 = closure_6(Text4, obj11);
            }
            cResult[15] = otherUser2;
            cResult[16] = stateFromStores;
            cResult[17] = tmp62;
            tmp61 = tmp62;
          }
          const obj12 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp31.username, children: tmp54 };
          const tmp60 = closure_5(otherUser(4886).Text, obj12);
          cResult[12] = tmp31.username;
          cResult[13] = tmp54;
          cResult[14] = tmp60;
          tmp58 = tmp60;
        }
        let stringResult = stateFromStores;
        if (stateFromStores == null) {
          let username1;
          if (otherUser2 != null) {
            username1 = otherUser2.username;
          }
          stringResult = username1;
        }
        if (stringResult == null) {
          const intl3 = otherUser(1126).intl;
          stringResult = intl3.string(otherUser(1126).t["30mdIx"]);
        }
        let username2;
        if (otherUser2 != null) {
          username2 = otherUser2.username;
        }
        cResult[9] = username2;
        cResult[10] = stateFromStores;
        cResult[11] = stringResult;
        tmp54 = stringResult;
      }
      const obj13 = { style: tmp31.avatarContainer, children: tmp42 };
      const tmp50 = closure_5(View, obj13);
      cResult[6] = tmp31.avatarContainer;
      cResult[7] = tmp42;
      cResult[8] = tmp50;
      tmp47 = tmp50;
    }
    const Avatar2 = otherUser(1188).Avatar;
    if (null != otherUser2) {
      const obj14 = { avatarStyle: tmp31.avatar, user: otherUser2, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration };
      avatarDecoration = undefined;
      if (otherUser2 != null) {
        avatarDecoration = otherUser2.avatarDecoration;
      }
      obj15 = obj14;
    } else {
      obj15 = { avatarStyle: tmp31.avatar, source: tmp41 };
    }
    const tmp43Result = closure_5(Avatar2, obj15);
    cResult[3] = otherUser2;
    cResult[4] = tmp31.avatar;
    cResult[5] = tmp43Result;
    tmp42 = tmp43Result;
  } else {
    ({ channel, otherUser } = isRestricted);
    let flag = isRestricted.isRestricted;
    if (flag === undefined) {
      flag = false;
    }
    const tmp3 = closure_8();
    let obj = otherUser(504);
    const items6 = [RelationshipStore];
    const stateFromStores1 = obj.useStateFromStores(items6, () => {
      let tmp2 = null;
      if (null != otherUser) {
        nickname = RelationshipStore.getNickname(otherUser.id);
        if (nickname == null) {
          const obj = UserUtilsDefault;
          nickname = obj.getGlobalName(otherUser);
        }
        tmp2 = nickname;
      }
      return tmp2;
    });
    const _Math = Math;
    const _Math2 = Math;
    const obj2 = otherUser(17057);
    const messageRequestRelativeTimestampText1 = obj2.useMessageRequestRelativeTimestampText(channel);
    const random1 = Math.random();
    const obj16 = { style: tmp3.avatarContainer, children: closure_5(Avatar, obj19) };
    const floorResult = floor(random1 * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
    const tmp13 = utils_AvatarUtilsDefault.DEFAULT_AVATARS[floorResult];
    Avatar = otherUser(1188).Avatar;
    if (null != otherUser) {
      const obj18 = { avatarStyle: tmp3.avatar, user: otherUser, guildId: "IconComponent", disablePlaceholder: null, avatarDecoration: avatarDecoration1 };
      avatarDecoration1 = undefined;
      if (otherUser != null) {
        avatarDecoration1 = otherUser.avatarDecoration;
      }
      obj19 = obj18;
    } else {
      obj19 = { avatarStyle: tmp3.avatar, source: tmp13 };
    }
    const items7 = [closure_5(View, obj16), ];
    const obj20 = { style: tmp3.detailsContainer, children: items11 };
    const obj21 = { style: tmp3.messageDetails, children: items10 };
    const obj22 = { lineClamp: 1, variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp3.usernameTextContainer, children: items8 };
    const Text = otherUser(4886).Text;
    const obj23 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp3.username, children: stringResult1 };
    stringResult1 = stateFromStores1;
    const Text2 = otherUser(4886).Text;
    if (stateFromStores1 == null) {
      let username3;
      if (otherUser != null) {
        username3 = otherUser.username;
      }
      stringResult1 = username3;
    }
    if (stringResult1 == null) {
      const intl = otherUser(1126).intl;
      stringResult1 = intl.string(otherUser(1126).t["30mdIx"]);
    }
    items8 = [closure_5(Text2, obj23), ];
    let tmp14Result = null != stateFromStores1;
    if (tmp14Result) {
      const obj24 = { variant: "text-md/medium", color: "text-muted", children: items9 };
      const Text3 = otherUser(4886).Text;
      items9 = [" "];
      const tmp4Result = otherUser(4722);
      items9[1] = tmp4Result.getUserTag(otherUser);
      tmp14Result = closure_6(Text3, obj24);
    }
    items8[1] = tmp14Result;
    items10 = [closure_6(Text, obj22), , ];
    const obj25 = { style: tmp3.timestampSeparator, variant: "text-xs/medium", color: "text-muted", children: "\u00B7" };
    items10[1] = closure_5(otherUser(4886).Text, obj25);
    const obj26 = { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText1 };
    items10[2] = closure_5(otherUser(4886).Text, obj26);
    items11 = [closure_6(View, obj21), , ];
    let tmp16Result = !flag;
    if (tmp16Result) {
      const obj27 = { style: tmp3.messagePreview, channel };
      tmp16Result = closure_5(MessageRequestPreviewDefault, obj27);
    }
    items11[1] = tmp16Result;
    if (flag) {
      flag = null != otherUser;
    }
    if (flag) {
      const obj28 = { style: tmp3.messagePreview, userId: otherUser.id, suffix: intl2.string(otherUser(1126).t.hTltPn) };
      const tmp11Result = MessageRequestMutualServersDefault;
      intl2 = otherUser(1126).intl;
      flag = closure_5(tmp11Result, obj28);
    }
    const obj29 = { children: items7 };
    items11[2] = flag;
    items7[1] = closure_6(View, obj20);
    tmp14Result2 = closure_6(closure_7, obj29);
  }
  return tmp14Result2;
};