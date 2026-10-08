// discord_app/modules/message_request/native/MessageRequestRowSenderDetails.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import utils_AvatarUtilsDefault from "../../../utils/native/AvatarUtils.tsx";
import UserUtilsDefault from "../../../utils/UserUtils.tsx";
import MessageRequestPreviewDefault from "MessageRequestPreview.tsx";
import MessageRequestMutualServersDefault from "MessageRequestMutualServers.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire, Fragment: closure_7 } = jsxProd);
const createStyles = fn(5090);
const obj2 = {
  avatar: {
    borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2,
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  },
  avatarContainer: { marginRight: 16, alignItems: "flex-start", height: "100%" },
  detailsContainer: { marginRight: 8, justifyContent: "flex-start", alignItems: "flex-start", flex: 1 },
  messageDetails: { flexDirection: "row", alignItems: "center" },
  username: null,
  timestampSeparator: null,
  messagePreview: null,
  usernameTextContainer: null,
};
let obj3 = {
  borderRadius: fn(1200).AVATAR_SIZE_MAP[fn(undefined, 1200).AvatarSizes.NORMAL] / 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
};
obj2.username = { flexShrink: 1, color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.timestampSeparator = { marginHorizontal: 6 };
obj2.messagePreview = { marginTop: 2 };
obj2.usernameTextContainer = { flexShrink: 1 };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled();
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestRowSenderDetails.tsx");

export default function MessageRequestRowSenderDetails(isRestricted) {
  if (closure_9) {
    const cResult = otherUser(576).c(47);
    ({ channel: channel2, otherUser: otherUser2 } = isRestricted);
    closure_129_0 = otherUser2;
    isRestricted = isRestricted.isRestricted;
    const tmp28 = closure_8();
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const items = [RelationshipStore];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    if (cResult[1] !== otherUser2) {
      const fn = function v() {
        let tmp2 = null;
        if (null != otherUser) {
          let nickname = RelationshipStore.getNickname(otherUser.id);
          if (nickname == null) {
            nickname = UserUtilsDefault.getGlobalName(otherUser);
          }
          tmp2 = nickname;
        }
        return tmp2;
      };
      cResult[1] = otherUser2;
      cResult[2] = fn;
      let tmp32 = fn;
    } else {
      tmp32 = cResult[2];
    }
    const obj17 = otherUser(576);
    const stateFromStores = otherUser(504).useStateFromStores(first, tmp32);
    const tmp23Result = otherUser(504);
    const messageRequestRelativeTimestampText = otherUser(17364).useMessageRequestRelativeTimestampText(channel2);
    const _Math3 = Math;
    const _Math4 = Math;
    const random = Math.random();
    const rounded = Math.floor(random * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
    if (cResult[3] === otherUser2) {
      if (cResult[4] === tmp28.avatar) {
        if (cResult[6] === tmp28.avatarContainer) {
          if (cResult[7] === tmp38) {
            let tmp44 = cResult[8];
          }
          let username;
          if (otherUser2 != null) {
            username = otherUser2.username;
          }
          if (cResult[9] === username) {
            if (cResult[10] === stateFromStores) {
              let tmp50 = cResult[11];
            }
            if (cResult[12] === tmp28.username) {
              if (cResult[13] === tmp50) {
                let tmp54 = cResult[14];
              }
              if (cResult[15] === otherUser2) {
                if (cResult[16] === stateFromStores) {
                  let tmp57 = cResult[17];
                }
                if (cResult[18] === tmp28.usernameTextContainer) {
                  if (cResult[19] === tmp54) {
                    if (cResult[20] === tmp57) {
                      let tmp60 = cResult[21];
                    }
                    if (cResult[22] !== tmp28.timestampSeparator) {
                      const obj3 = {
                        style: tmp28.timestampSeparator,
                        variant: "text-xs/medium",
                        color: "text-muted",
                        children: "\u00B7",
                      };
                      const tmp65 = closure_5(otherUser(5086).Text, obj3);
                      cResult[22] = tmp28.timestampSeparator;
                      cResult[23] = tmp65;
                      let tmp63 = tmp65;
                    } else {
                      tmp63 = cResult[23];
                    }
                    if (cResult[24] !== messageRequestRelativeTimestampText) {
                      const obj4 = {
                        variant: "text-xs/semibold",
                        color: "text-muted",
                        children: messageRequestRelativeTimestampText,
                      };
                      const tmp68 = closure_5(otherUser(5086).Text, obj4);
                      cResult[24] = messageRequestRelativeTimestampText;
                      cResult[25] = tmp68;
                      let tmp66 = tmp68;
                    } else {
                      tmp66 = cResult[25];
                    }
                    if (cResult[26] === tmp28.messageDetails) {
                      if (cResult[27] === tmp63) {
                        if (cResult[28] === tmp66) {
                          if (cResult[29] === tmp60) {
                            let tmp69 = cResult[30];
                          }
                          if (cResult[31] === channel2) {
                            if (cResult[32] === tmp26) {
                              if (cResult[33] === tmp28.messagePreview) {
                                let tmp73 = cResult[34];
                              }
                              if (cResult[35] === tmp26) {
                                if (cResult[36] === otherUser2) {
                                  if (cResult[37] === tmp28.messagePreview) {
                                    let tmp76 = cResult[38];
                                  }
                                  if (cResult[39] === tmp28.detailsContainer) {
                                    if (cResult[40] === tmp69) {
                                      if (cResult[41] === tmp73) {
                                        if (cResult[42] === tmp76) {
                                          let tmp80 = cResult[43];
                                        }
                                        if (cResult[44] === tmp80) {
                                        }
                                        const obj5 = { children: null };
                                        const items1 = [tmp44, tmp80];
                                        obj5.children = items1;
                                        const tmp87 = closure_6(closure_7, obj5);
                                        cResult[44] = tmp80;
                                        cResult[45] = tmp44;
                                        cResult[46] = tmp87;
                                      }
                                    }
                                  }
                                  const obj6 = { style: tmp28.detailsContainer, children: null };
                                  const items2 = [tmp69, tmp73, tmp76];
                                  obj6.children = items2;
                                  const tmp83 = closure_6(View, obj6);
                                  cResult[39] = tmp28.detailsContainer;
                                  cResult[40] = tmp69;
                                  cResult[41] = tmp73;
                                  cResult[42] = tmp76;
                                  cResult[43] = tmp83;
                                  tmp80 = tmp83;
                                }
                              }
                              let tmp77 = tmp26;
                              if (tmp26) {
                                tmp77 = null != otherUser2;
                              }
                              if (tmp77) {
                                const obj7 = { style: tmp28.messagePreview, userId: otherUser2.id, suffix: null };
                                const intl4 = otherUser(1126).intl;
                                obj7.suffix = intl4.string(otherUser(1126).t.hTltPn);
                                tmp77 = closure_5(MessageRequestMutualServersDefault, obj7);
                                const tmp36Result = MessageRequestMutualServersDefault;
                              }
                              cResult[35] = tmp26;
                              cResult[36] = otherUser2;
                              cResult[37] = tmp28.messagePreview;
                              cResult[38] = tmp77;
                              tmp76 = tmp77;
                            }
                          }
                          let tmp74 = !tmp26;
                          if (!tmp26) {
                            const obj8 = { style: tmp28.messagePreview, channel: channel2 };
                            tmp74 = closure_5(MessageRequestPreviewDefault, obj8);
                          }
                          cResult[31] = channel2;
                          cResult[32] = tmp26;
                          cResult[33] = tmp28.messagePreview;
                          cResult[34] = tmp74;
                          tmp73 = tmp74;
                        }
                      }
                    }
                    const obj9 = { style: tmp28.messageDetails, children: null };
                    const items3 = [tmp60, tmp63, tmp66];
                    obj9.children = items3;
                    const tmp72 = closure_6(View, obj9);
                    cResult[26] = tmp28.messageDetails;
                    cResult[27] = tmp63;
                    cResult[28] = tmp66;
                    cResult[29] = tmp60;
                    cResult[30] = tmp72;
                    tmp69 = tmp72;
                  }
                }
                const obj10 = {
                  lineClamp: 1,
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  style: tmp28.usernameTextContainer,
                  children: null,
                };
                const items4 = [tmp54, tmp57];
                obj10.children = items4;
                const tmp62 = closure_6(otherUser(5086).Text, obj10);
                cResult[18] = tmp28.usernameTextContainer;
                cResult[19] = tmp54;
                cResult[20] = tmp57;
                cResult[21] = tmp62;
                tmp60 = tmp62;
              }
              let tmp58 = null != stateFromStores;
              if (tmp58) {
                const obj11 = { variant: "text-md/medium", color: "text-muted", children: null };
                const items5 = [" ", otherUser(4922).getUserTag(otherUser2)];
                obj11.children = items5;
                tmp58 = closure_6(otherUser(5086).Text, obj11);
                const tmp23Result4 = otherUser(4922);
              }
              cResult[15] = otherUser2;
              cResult[16] = stateFromStores;
              cResult[17] = tmp58;
              tmp57 = tmp58;
            }
            const obj12 = {
              variant: "text-md/semibold",
              color: "mobile-text-heading-primary",
              style: tmp28.username,
              children: tmp50,
            };
            const tmp56 = closure_5(otherUser(5086).Text, obj12);
            cResult[12] = tmp28.username;
            cResult[13] = tmp50;
            cResult[14] = tmp56;
            tmp54 = tmp56;
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
          tmp50 = stringResult;
        }
        const obj13 = { style: tmp28.avatarContainer, children: cResult[5] };
        const tmp47 = closure_5(View, obj13);
        cResult[6] = tmp28.avatarContainer;
        cResult[7] = cResult[5];
        cResult[8] = tmp47;
        tmp44 = tmp47;
      }
    }
    let avatar = otherUser(1200).Avatar;
    let tmp40 = null;
    if (null != otherUser2) {
      const obj14 = {
        avatarStyle: tmp28.avatar,
        user: otherUser2,
        guildId: "IconComponent",
        disablePlaceholder: null,
        avatarDecoration: "Warning",
      };
      tmp40 = otherUser2 == tmp40;
      let avatarDecoration;
      if (!tmp40) {
        avatarDecoration = otherUser2.avatarDecoration;
      }
      obj14.avatarDecoration = avatarDecoration;
      let obj15 = obj14;
    } else {
      obj15 = { avatarStyle: tmp28.avatar, source: utils_AvatarUtilsDefault.DEFAULT_AVATARS[rounded] };
    }
    const tmp39Result = closure_5(avatar, obj15);
    cResult[3] = otherUser2;
    avatar = tmp28.avatar;
    cResult[4] = avatar;
    cResult[5] = tmp39Result;
    const tmp23Result3 = otherUser(17364);
  } else {
    ({ channel, otherUser } = isRestricted);
    let flag = isRestricted.isRestricted;
    if (flag === undefined) {
      flag = false;
    }
    let tmp2 = closure_8();
    const items6 = [RelationshipStore];
    const stateFromStores1 = otherUser(504).useStateFromStores(items6, () => {
      let tmp2 = null;
      if (null != otherUser) {
        let nickname = RelationshipStore.getNickname(otherUser.id);
        if (nickname == null) {
          nickname = UserUtilsDefault.getGlobalName(otherUser);
        }
        tmp2 = nickname;
      }
      return tmp2;
    });
    let obj = otherUser(504);
    const _Math = Math;
    const _Math2 = Math;
    const messageRequestRelativeTimestampText1 = otherUser(17364).useMessageRequestRelativeTimestampText(channel);
    const random1 = Math.random();
    const rounded1 = Math.floor(random1 * utils_AvatarUtilsDefault.DEFAULT_AVATARS.length);
    const obj16 = { style: tmp2.avatarContainer, children: null };
    if (null != otherUser) {
      const obj18 = {
        avatarStyle: tmp2.avatar,
        user: otherUser,
        guildId: "IconComponent",
        disablePlaceholder: null,
        avatarDecoration: "Warning",
      };
      let avatarDecoration1;
      if (otherUser != null) {
        avatarDecoration1 = otherUser.avatarDecoration;
      }
      obj18.avatarDecoration = avatarDecoration1;
      let obj19 = obj18;
    } else {
      obj19 = { avatarStyle: tmp2.avatar, source: utils_AvatarUtilsDefault.DEFAULT_AVATARS[rounded1] };
    }
    obj16.children = closure_5(otherUser(1200).Avatar, obj19);
    const items7 = [closure_5(View, obj16)];
    const obj20 = { style: tmp2.detailsContainer, children: null };
    const obj21 = { style: tmp2.messageDetails, children: null };
    const obj22 = {
      lineClamp: 1,
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp2.usernameTextContainer,
      children: null,
    };
    const obj23 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      style: tmp2.username,
      children: null,
    };
    let stringResult1 = stateFromStores1;
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
    obj23.children = stringResult1;
    const items8 = [closure_5(otherUser(5086).Text, obj23)];
    let tmp12Result = null != stateFromStores1;
    if (tmp12Result) {
      const obj24 = { variant: "text-md/medium", color: "text-muted", children: null };
      const items9 = [" ", otherUser(4922).getUserTag(otherUser)];
      obj24.children = items9;
      tmp12Result = closure_6(otherUser(5086).Text, obj24);
      const tmp3Result = otherUser(4922);
    }
    items8[1] = tmp12Result;
    obj22.children = items8;
    const items10 = [closure_6(otherUser(5086).Text, obj22), ,];
    const obj25 = {
      style: tmp2.timestampSeparator,
      variant: "text-xs/medium",
      color: "text-muted",
      children: "\u00B7",
    };
    items10[1] = closure_5(otherUser(5086).Text, obj25);
    const obj26 = { variant: "text-xs/semibold", color: "text-muted", children: messageRequestRelativeTimestampText1 };
    items10[2] = closure_5(otherUser(5086).Text, obj26);
    obj21.children = items10;
    const items11 = [closure_6(View, obj21), ,];
    let tmp14Result = !flag;
    if (!flag) {
      const obj27 = { style: tmp2.messagePreview, channel };
      tmp14Result = closure_5(MessageRequestPreviewDefault, obj27);
    }
    items11[1] = tmp14Result;
    if (flag) {
      flag = null != otherUser;
    }
    if (flag) {
      const obj28 = { style: tmp2.messagePreview, userId: otherUser.id, suffix: null };
      const intl2 = otherUser(1126).intl;
      obj28.suffix = intl2.string(otherUser(1126).t.hTltPn);
      flag = closure_5(MessageRequestMutualServersDefault, obj28);
      const tmp10Result = MessageRequestMutualServersDefault;
    }
    const obj29 = { children: null };
    items11[2] = flag;
    obj20.children = items11;
    items7[1] = closure_6(View, obj20);
    obj29.children = items7;
    return closure_6(closure_7, obj29);
  }
}
