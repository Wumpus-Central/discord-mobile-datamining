// === Module 12969: UserProfileIncomingFriendRequest ===

// Module 12969 (UserProfileIncomingFriendRequest)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let hasOwnProperty;
let metroRequire;
let obj2;
const View = react_native.View;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: obj2 };
obj2 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
let closure_7 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let applicationId;
  let channelId;
  let gameIcon;
  let guildId;
  let isGameRelationship;
  let items1;
  let name;
  let showUserProfile;
  let style;
  let trackUserProfileAction;
  let user;
  let tmp2 = trackUserProfileAction;
  let obj = isGameRelationship(trackUserProfileAction[6]);
  const cResult = obj.c(42);
  ({ user, isGameRelationship, applicationId, style, showUserProfile } = arg0);
  let tmp4 = undefined !== isGameRelationship;
  ({ channelId, guildId } = arg0);
  if (tmp4) {
    tmp4 = isGameRelationship;
  }
  isGameRelationship = tmp4;
  const tmp5 = closure_7();
  importDefault = tmp5;
  const tmp7 = require("UserProfileSharedStyles")();
  const tmpResult = isGameRelationship(tmp2[8]);
  trackUserProfileAction = tmpResult.useUserProfileAnalyticsContext().trackUserProfileAction;
  const newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  if (cResult[0] === applicationId) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === newestAnalyticsLocation) {
        if (cResult[3] === showUserProfile) {
          let tmp8;
          if (cResult[4] === user.id) {
            tmp8 = cResult[5];
          }
          const tmpResult3 = isGameRelationship(tmp2[10]);
          const friendRequestActions = tmpResult3.useFriendRequestActions(tmp8);
          const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
          const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
          const tmp6Result = require("NicknameUtils");
          const name1 = tmp6Result.useName(guildId, channelId, user);
          if (cResult[6] === acceptFriendRequest) {
            if (cResult[7] === tmp4) {
              let tmp11;
              if (cResult[8] === trackUserProfileAction) {
                tmp11 = cResult[9];
              }
              if (cResult[10] === cancelFriendRequest) {
                if (cResult[11] === tmp4) {
                  let tmp12;
                  if (cResult[12] === trackUserProfileAction) {
                    tmp12 = cResult[13];
                  }
                  class S {
                    constructor() {
                      cancelFriendRequest();
                      let str = "IGNORE_FRIEND_REQUEST";
                      if (isGameRelationship) {
                        str = "IGNORE_GAME_FRIEND_REQUEST";
                      }
                      trackUserProfileAction({ action: str });
                    }
                  }
                  const tmpResult4 = isGameRelationship(tmp2[12]);
                  const getOrFetchApplication = tmpResult4.useGetOrFetchApplication(applicationId);
                  if (tmp14) {
                    if (null == getOrFetchApplication) {
                      return null;
                    }
                  }
                  if (cResult[14] === tmp7.card) {
                    if (cResult[15] === style) {
                      let tmp16;
                      let tmp19;
                      if (cResult[16] === tmp5.container) {
                        tmp16 = cResult[17];
                      }
                      if (cResult[18] === getOrFetchApplication) {
                        if (cResult[19] === tmp4) {
                          if (cResult[20] === name1) {
                            if (cResult[21] === tmp14) {
                              let tmp17;
                              if (cResult[22] === tmp5.gameIcon) {
                                tmp17 = cResult[23];
                              }
                              if (cResult[24] === tmp5.friendRequestNote) {
                                let tmp22;
                                let tmp27;
                                let tmp31;
                                if (cResult[25] === user.id) {
                                  tmp22 = cResult[26];
                                }
                                class S {
                                  constructor() {
                                    cancelFriendRequest();
                                    let str = "IGNORE_FRIEND_REQUEST";
                                    if (isGameRelationship) {
                                      str = "IGNORE_GAME_FRIEND_REQUEST";
                                    }
                                    trackUserProfileAction({ action: str });
                                  }
                                }
                                let str = "react.memo_cache_sentinel";
                                const buttons = tmp5.buttons;
                                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                                  const string = tmp(tmp2[14]).intl.string;
                                  class S {
                                    constructor() {
                                      cancelFriendRequest();
                                      let str = "IGNORE_FRIEND_REQUEST";
                                      if (isGameRelationship) {
                                        str = "IGNORE_GAME_FRIEND_REQUEST";
                                      }
                                      trackUserProfileAction({ action: str });
                                    }
                                  }
                                  cResult[27] = tmp26;
                                }
                                if (cResult[28] !== tmp11) {
                                  let obj2 = { size: "sm", variant: "primary", text: null, onPress: tmp11 };
                                  class S {
                                    constructor() {
                                      cancelFriendRequest();
                                      let str = "IGNORE_FRIEND_REQUEST";
                                      if (isGameRelationship) {
                                        str = "IGNORE_GAME_FRIEND_REQUEST";
                                      }
                                      trackUserProfileAction({ action: str });
                                    }
                                  }
                                  const tmp29 = getOrFetchApplication(isGameRelationship(tmp2[18]).Button, obj2);
                                  cResult[28] = tmp11;
                                  cResult[29] = tmp29;
                                  tmp27 = tmp29;
                                } else {
                                  tmp27 = cResult[29];
                                }
                                const _Symbol = Symbol;
                                class C {
                                  constructor() {
                                    acceptFriendRequest();
                                    let str = "ACCEPT_FRIEND_REQUEST";
                                    if (isGameRelationship) {
                                      str = "ACCEPT_GAME_FRIEND_REQUEST";
                                    }
                                    trackUserProfileAction({ action: str });
                                  }
                                }
                                if (cResult[31] !== tmp12) {
                                  const obj3 = { size: "sm", variant: "secondary", text: null, onPress: tmp12 };
                                  class S {
                                    constructor() {
                                      cancelFriendRequest();
                                      let str = "IGNORE_FRIEND_REQUEST";
                                      if (isGameRelationship) {
                                        str = "IGNORE_GAME_FRIEND_REQUEST";
                                      }
                                      trackUserProfileAction({ action: str });
                                    }
                                  }
                                  const tmp33 = getOrFetchApplication(isGameRelationship(tmp2[18]).Button, obj3);
                                  cResult[31] = tmp12;
                                  cResult[32] = tmp33;
                                  tmp31 = tmp33;
                                } else {
                                  tmp31 = cResult[32];
                                }
                                if (cResult[33] === tmp5.buttons) {
                                  if (cResult[34] === tmp27) {
                                    let tmp34;
                                    if (cResult[35] === tmp31) {
                                      tmp34 = cResult[36];
                                    }
                                    if (cResult[37] === tmp34) {
                                      if (cResult[38] === tmp16) {
                                        if (cResult[39] === tmp17) {
                                          let tmp38;
                                          if (cResult[40] === tmp22) {
                                            tmp38 = cResult[41];
                                          }
                                          return tmp38;
                                        }
                                      }
                                    }
                                    class S {
                                      constructor() {
                                        cancelFriendRequest();
                                        let str = "IGNORE_FRIEND_REQUEST";
                                        if (isGameRelationship) {
                                          str = "IGNORE_GAME_FRIEND_REQUEST";
                                        }
                                        trackUserProfileAction({ action: str });
                                      }
                                    }
                                    let obj4 = { style: tmp16, children: null };
                                    const items = [tmp17, tmp22, tmp34];
                                    class C {
                                      constructor() {
                                        acceptFriendRequest();
                                        let str = "ACCEPT_FRIEND_REQUEST";
                                        if (isGameRelationship) {
                                          str = "ACCEPT_GAME_FRIEND_REQUEST";
                                        }
                                        trackUserProfileAction({ action: str });
                                      }
                                    }
                                    const tmp40 = closure_6(cancelFriendRequest, obj4);
                                    cResult[37] = tmp34;
                                    cResult[38] = tmp16;
                                    cResult[39] = tmp17;
                                    cResult[40] = tmp22;
                                    cResult[41] = tmp40;
                                    tmp38 = tmp40;
                                  }
                                }
                                const obj5 = { style: buttons, children: items1 };
                                items1 = [tmp27, tmp31];
                                const tmp37 = closure_6(cancelFriendRequest, obj5);
                                cResult[33] = tmp5.buttons;
                                cResult[34] = tmp27;
                                cResult[35] = tmp31;
                                cResult[36] = tmp37;
                                tmp34 = tmp37;
                              }
                              class S {
                                constructor() {
                                  cancelFriendRequest();
                                  let str = "IGNORE_FRIEND_REQUEST";
                                  if (isGameRelationship) {
                                    str = "IGNORE_GAME_FRIEND_REQUEST";
                                  }
                                  trackUserProfileAction({ action: str });
                                }
                              }
                              const obj6 = { userId: user.id, styles: tmp5.friendRequestNote, analyticsLocation: "User Profile" };
                              const tmp23 = getOrFetchApplication(require("FriendRequestNote"), obj6);
                              cResult[24] = tmp5.friendRequestNote;
                              class C {
                                constructor() {
                                  acceptFriendRequest();
                                  let str = "ACCEPT_FRIEND_REQUEST";
                                  if (isGameRelationship) {
                                    str = "ACCEPT_GAME_FRIEND_REQUEST";
                                  }
                                  trackUserProfileAction({ action: str });
                                }
                              }
                              cResult[26] = tmp23;
                              tmp22 = tmp23;
                            }
                          }
                        }
                      }
                      class S {
                        constructor() {
                          cancelFriendRequest();
                          let str = "IGNORE_FRIEND_REQUEST";
                          if (isGameRelationship) {
                            str = "IGNORE_GAME_FRIEND_REQUEST";
                          }
                          trackUserProfileAction({ action: str });
                        }
                      }
                      const obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
                      const Text = tmp(tmp2[13]).Text;
                      const intl = tmp(tmp2[14]).intl;
                      const format = intl.format;
                      const t = tmp(tmp2[14]).t;
                      if (tmp14) {
                        const obj8 = {
                          username: name1,
                          applicationName: name,
                          applicationIcon() {
                                                  let obj2;
                                                  let obj4;
                                                  let tmp2 = null;
                                                  if (null != getOrFetchApplication) {
                                                    const obj = { source: obj2.getApplicationIconSource(obj4), size: native.AvatarSizes.XXSMALL, style: gameIcon.gameIcon };
                                                    const Avatar = native.Avatar;
                                                    obj4 = { id: null, icon: null };
                                                    ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
                                                    obj2 = AvatarUtilsDefault;
                                                    tmp2 = hasOwnProperty(Avatar, obj, getOrFetchApplication.id);
                                                  }
                                                  return tmp2;
                                                }
                        };
                        class S {
                          constructor() {
                            cancelFriendRequest();
                            let str = "IGNORE_FRIEND_REQUEST";
                            if (isGameRelationship) {
                              str = "IGNORE_GAME_FRIEND_REQUEST";
                            }
                            trackUserProfileAction({ action: str });
                          }
                        }
                        const tmp20 = tmp4 ? t.syHjLL : t.V15uUI;
                        if (getOrFetchApplication != null) {
                          name = getOrFetchApplication.name;
                        }
                        obj7.children = format(tmp20, obj8);
                        tmp19 = obj7;
                      } else {
                        class S {
                          constructor() {
                            cancelFriendRequest();
                            let str = "IGNORE_FRIEND_REQUEST";
                            if (isGameRelationship) {
                              str = "IGNORE_GAME_FRIEND_REQUEST";
                            }
                            trackUserProfileAction({ action: str });
                          }
                        }
                        tmp19 = obj7;
                      }
                      const tmp18Result = tmp18(Text, tmp19);
                      class C {
                        constructor() {
                          acceptFriendRequest();
                          let str = "ACCEPT_FRIEND_REQUEST";
                          if (isGameRelationship) {
                            str = "ACCEPT_GAME_FRIEND_REQUEST";
                          }
                          trackUserProfileAction({ action: str });
                        }
                      }
                      cResult[18] = getOrFetchApplication;
                      cResult[19] = tmp4;
                      cResult[20] = name1;
                      cResult[21] = tmp14;
                      cResult[22] = tmp5.gameIcon;
                      cResult[23] = tmp18Result;
                      tmp17 = tmp18Result;
                    }
                  }
                  const items2 = [tmp5.container, , ];
                  class C {
                    constructor() {
                      acceptFriendRequest();
                      let str = "ACCEPT_FRIEND_REQUEST";
                      if (isGameRelationship) {
                        str = "ACCEPT_GAME_FRIEND_REQUEST";
                      }
                      trackUserProfileAction({ action: str });
                    }
                  }
                  items2[2] = style;
                  cResult[14] = tmp7.card;
                  cResult[15] = style;
                  cResult[16] = tmp5.container;
                  cResult[17] = items2;
                  tmp16 = items2;
                }
              }
              class S {
                constructor() {
                  cancelFriendRequest();
                  let str = "IGNORE_FRIEND_REQUEST";
                  if (isGameRelationship) {
                    str = "IGNORE_GAME_FRIEND_REQUEST";
                  }
                  trackUserProfileAction({ action: str });
                }
              }
              cResult[10] = cancelFriendRequest;
              cResult[11] = tmp4;
              cResult[12] = trackUserProfileAction;
              class C {
                constructor() {
                  acceptFriendRequest();
                  let str = "ACCEPT_FRIEND_REQUEST";
                  if (isGameRelationship) {
                    str = "ACCEPT_GAME_FRIEND_REQUEST";
                  }
                  trackUserProfileAction({ action: str });
                }
              }
              tmp12 = S;
            }
          }
          class C {
            constructor() {
              acceptFriendRequest();
              let str = "ACCEPT_FRIEND_REQUEST";
              if (isGameRelationship) {
                str = "ACCEPT_GAME_FRIEND_REQUEST";
              }
              trackUserProfileAction({ action: str });
            }
          }
          cResult[6] = acceptFriendRequest;
          cResult[7] = tmp4;
          cResult[8] = trackUserProfileAction;
          cResult[9] = C;
          tmp11 = C;
        }
      }
    }
  }
  const obj10 = { userId: user.id, applicationId, isGameRelationship: tmp4, location: newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  cResult[0] = applicationId;
  cResult[1] = tmp4;
  cResult[2] = newestAnalyticsLocation;
  cResult[3] = showUserProfile;
  cResult[4] = user.id;
  cResult[5] = obj10;
  tmp8 = obj10;
}) : ((style) => {
  let applicationId;
  let channelId;
  let gameIcon;
  let guildId;
  let intl2;
  let intl3;
  let isGameRelationship;
  let items2;
  let items3;
  let items4;
  let name1;
  let showUserProfile;
  let tmp13Result;
  let user;
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let trackUserProfileAction;
  style = style.style;
  const tmp = closure_7();
  importDefault = tmp;
  let tmp2 = importDefault;
  const tmp4 = require("UserProfileSharedStyles")();
  let obj = isGameRelationship(trackUserProfileAction[8]);
  trackUserProfileAction = obj.useUserProfileAnalyticsContext().trackUserProfileAction;
  const newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  let obj2 = isGameRelationship(trackUserProfileAction[10]);
  const obj3 = { userId: user.id, applicationId, isGameRelationship, location: newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  const friendRequestActions = obj2.useFriendRequestActions(obj3);
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  let obj4 = require("NicknameUtils");
  const name = obj4.useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  const items1 = [cancelFriendRequest, isGameRelationship, trackUserProfileAction];
  const callback = acceptFriendRequest.useCallback(() => {
    acceptFriendRequest();
    let str = "ACCEPT_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "ACCEPT_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items);
  const callback1 = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items1);
  const obj5 = isGameRelationship(trackUserProfileAction[12]);
  const getOrFetchApplication = obj5.useGetOrFetchApplication(applicationId);
  if (null == applicationId) {
    let tmp16;
    const obj6 = { style: items2, children: items3 };
    items2 = [tmp.container, tmp4.card, style];
    const obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
    const Text = tmp5(tmp3[13]).Text;
    const intl = tmp5(tmp3[14]).intl;
    const format = intl.format;
    const t = tmp5(tmp3[14]).t;
    if (null != applicationId) {
      const obj8 = {
        username: name,
        applicationName: name1,
        applicationIcon() {
              let obj2;
              let obj4;
              let tmp2 = null;
              if (null != getOrFetchApplication) {
                const obj = { source: obj2.getApplicationIconSource(obj4), size: native.AvatarSizes.XXSMALL, style: gameIcon.gameIcon };
                const Avatar = native.Avatar;
                obj4 = { id: null, icon: null };
                ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
                obj2 = AvatarUtilsDefault;
                tmp2 = hasOwnProperty(Avatar, obj, getOrFetchApplication.id);
              }
              return tmp2;
            }
      };
      name1 = undefined;
      const tmp17 = isGameRelationship ? t.syHjLL : t.V15uUI;
      if (getOrFetchApplication != null) {
        name1 = getOrFetchApplication.name;
      }
      obj7.children = format(tmp17, obj8);
      tmp16 = obj7;
    } else {
      const obj9 = { username: name };
      obj7.children = format(t.uIomXw, obj9);
      tmp16 = obj7;
    }
    items3 = [getOrFetchApplication(Text, tmp16), , ];
    const obj10 = { userId: user.id, styles: tmp.friendRequestNote, analyticsLocation: "User Profile" };
    items3[1] = getOrFetchApplication(tmp2(trackUserProfileAction[17]), obj10);
    const obj11 = { style: tmp.buttons, children: items4 };
    const obj12 = { size: "sm", variant: "primary", text: intl2.string(isGameRelationship(trackUserProfileAction[14]).t.Zcibdf), onPress: callback };
    const Button = tmp5(tmp3[18]).Button;
    intl2 = tmp5(tmp3[14]).intl;
    items4 = [getOrFetchApplication(Button, obj12), ];
    const obj13 = { size: "sm", variant: "secondary", text: intl3.string(isGameRelationship(trackUserProfileAction[14]).t.xuio0C), onPress: callback1 };
    const Button2 = tmp5(tmp3[18]).Button;
    intl3 = tmp5(tmp3[14]).intl;
    items4[1] = getOrFetchApplication(Button2, obj13);
    items3[2] = closure_6(cancelFriendRequest, obj11);
    tmp13Result = closure_6(tmp14, obj6);
  } else {
    tmp13Result = null;
  }
  return tmp13Result;
});
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default tmp3;