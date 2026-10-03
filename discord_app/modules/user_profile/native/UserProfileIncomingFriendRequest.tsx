// === Module 12948: UserProfileIncomingFriendRequest ===

// Module 12948 (UserProfileIncomingFriendRequest)
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1402 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { rowGap: 16, flexDirection: "column" }, buttons: { flexDirection: "row", columnGap: 12 }, gameIcon: { paddingTop: 2 }, friendRequestNote: { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG } };
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderWidth: 1, borderColor: nativeDefault.colors.BORDER_STRONG };
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileIncomingFriendRequest.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = isGameRelationship(trackUserProfileAction[6]).c(42);
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
  let obj = isGameRelationship(trackUserProfileAction[6]);
  trackUserProfileAction = isGameRelationship(trackUserProfileAction[8]).useUserProfileAnalyticsContext().trackUserProfileAction;
  const newestAnalyticsLocation = require("useAnalyticsLocations")().newestAnalyticsLocation;
  if (cResult[0] === applicationId) {
    if (cResult[1] === tmp4) {
      if (cResult[2] === newestAnalyticsLocation) {
        if (cResult[3] === showUserProfile) {
          if (cResult[4] === user.id) {
            let tmp8 = cResult[5];
          }
          const friendRequestActions = tmp(tmp2[10]).useFriendRequestActions(tmp8);
          const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
          const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
          const tmpResult3 = tmp(tmp2[10]);
          let gameIcon = tmp6(tmp2[11]).useName(guildId, channelId, user);
          if (cResult[6] === acceptFriendRequest) {
            if (cResult[7] === tmp4) {
              if (cResult[8] === trackUserProfileAction) {
                let tmp10 = cResult[9];
              }
              if (cResult[10] === cancelFriendRequest) {
                if (cResult[11] === tmp4) {
                  if (cResult[12] === trackUserProfileAction) {
                    let tmp11 = cResult[13];
                  }
                  class S {
                    constructor() {
                      tmp = cancelFriendRequest();
                      str = "IGNORE_FRIEND_REQUEST";
                      tmp2 = trackUserProfileAction;
                      if (isGameRelationship) {
                        str = "IGNORE_GAME_FRIEND_REQUEST";
                      }
                      tmp2Result = tmp2({ action: str });
                      return;
                    }
                  }
                  const getOrFetchApplication = tmp(tmp2[12]).useGetOrFetchApplication(applicationId);
                  if (tmp13) {
                    if (null == getOrFetchApplication) {
                      return null;
                    }
                  }
                  if (cResult[14] === tmp7.card) {
                    if (cResult[15] === style) {
                      if (cResult[16] === tmp5.container) {
                        let tmp15 = cResult[17];
                      }
                      if (cResult[18] === getOrFetchApplication) {
                        if (cResult[19] === tmp4) {
                          if (cResult[20] === gameIcon) {
                            if (cResult[21] === tmp13) {
                              if (cResult[22] === tmp5.gameIcon) {
                                if (cResult[24] === tmp5.friendRequestNote) {
                                  if (cResult[25] === user.id) {
                                    let tmp22 = cResult[26];
                                  }
                                  class S {
                                    constructor() {
                                      tmp = cancelFriendRequest();
                                      str = "IGNORE_FRIEND_REQUEST";
                                      tmp2 = trackUserProfileAction;
                                      if (isGameRelationship) {
                                        str = "IGNORE_GAME_FRIEND_REQUEST";
                                      }
                                      tmp2Result = tmp2({ action: str });
                                      return;
                                    }
                                  }
                                  if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                                    const string = tmp(tmp2[14]).intl.string;
                                    class S {
                                      constructor() {
                                        tmp = cancelFriendRequest();
                                        str = "IGNORE_FRIEND_REQUEST";
                                        tmp2 = trackUserProfileAction;
                                        if (isGameRelationship) {
                                          str = "IGNORE_GAME_FRIEND_REQUEST";
                                        }
                                        tmp2Result = tmp2({ action: str });
                                        return;
                                      }
                                    }
                                    cResult[27] = tmp26;
                                  }
                                  if (cResult[28] !== tmp10) {
                                    let obj2 = { size: "sm", variant: "primary", text: null, onPress: null };
                                    class S {
                                      constructor() {
                                        tmp = cancelFriendRequest();
                                        str = "IGNORE_FRIEND_REQUEST";
                                        tmp2 = trackUserProfileAction;
                                        if (isGameRelationship) {
                                          str = "IGNORE_GAME_FRIEND_REQUEST";
                                        }
                                        tmp2Result = tmp2({ action: str });
                                        return;
                                      }
                                    }
                                    obj2.onPress = tmp10;
                                    const tmp29 = getOrFetchApplication(tmp(tmp2[18]).Button, obj2);
                                    cResult[28] = tmp10;
                                    cResult[29] = tmp29;
                                    let tmp27 = tmp29;
                                  } else {
                                    tmp27 = cResult[29];
                                  }
                                  const _Symbol = Symbol;
                                  class C {
                                    constructor() {
                                      tmp = acceptFriendRequest();
                                      str = "ACCEPT_FRIEND_REQUEST";
                                      tmp2 = trackUserProfileAction;
                                      if (isGameRelationship) {
                                        str = "ACCEPT_GAME_FRIEND_REQUEST";
                                      }
                                      tmp2Result = tmp2({ action: str });
                                      return;
                                    }
                                  }
                                  if (cResult[31] !== tmp11) {
                                    const obj3 = { size: "sm", variant: "secondary", text: null, onPress: null };
                                    class S {
                                      constructor() {
                                        tmp = cancelFriendRequest();
                                        str = "IGNORE_FRIEND_REQUEST";
                                        tmp2 = trackUserProfileAction;
                                        if (isGameRelationship) {
                                          str = "IGNORE_GAME_FRIEND_REQUEST";
                                        }
                                        tmp2Result = tmp2({ action: str });
                                        return;
                                      }
                                    }
                                    obj3.onPress = tmp11;
                                    const tmp33 = getOrFetchApplication(tmp(tmp2[18]).Button, obj3);
                                    cResult[31] = tmp11;
                                    cResult[32] = tmp33;
                                    let tmp31 = tmp33;
                                  } else {
                                    tmp31 = cResult[32];
                                  }
                                  if (cResult[33] === tmp5.buttons) {
                                    if (cResult[34] === tmp27) {
                                      if (cResult[35] === tmp31) {
                                        let tmp34 = cResult[36];
                                      }
                                      if (cResult[37] === tmp34) {
                                        if (cResult[38] === tmp15) {
                                          if (cResult[39] === tmp16) {
                                            if (cResult[40] === tmp22) {
                                              let tmp38 = cResult[41];
                                            }
                                            return tmp38;
                                          }
                                        }
                                      }
                                      class S {
                                        constructor() {
                                          tmp = cancelFriendRequest();
                                          str = "IGNORE_FRIEND_REQUEST";
                                          tmp2 = trackUserProfileAction;
                                          if (isGameRelationship) {
                                            str = "IGNORE_GAME_FRIEND_REQUEST";
                                          }
                                          tmp2Result = tmp2({ action: str });
                                          return;
                                        }
                                      }
                                      let obj4 = { style: tmp15, children: null };
                                      const items = [tmp16, tmp22, tmp34];
                                      class C {
                                        constructor() {
                                          tmp = acceptFriendRequest();
                                          str = "ACCEPT_FRIEND_REQUEST";
                                          tmp2 = trackUserProfileAction;
                                          if (isGameRelationship) {
                                            str = "ACCEPT_GAME_FRIEND_REQUEST";
                                          }
                                          tmp2Result = tmp2({ action: str });
                                          return;
                                        }
                                      }
                                      const tmp40 = closure_6(cancelFriendRequest, obj4);
                                      cResult[37] = tmp34;
                                      cResult[38] = tmp15;
                                      cResult[39] = tmp16;
                                      cResult[40] = tmp22;
                                      cResult[41] = tmp40;
                                      tmp38 = tmp40;
                                    }
                                  }
                                  const obj5 = { style: tmp5.buttons, children: null };
                                  const items1 = [tmp27, tmp31];
                                  obj5.children = items1;
                                  const tmp37 = closure_6(cancelFriendRequest, obj5);
                                  cResult[33] = tmp5.buttons;
                                  cResult[34] = tmp27;
                                  cResult[35] = tmp31;
                                  cResult[36] = tmp37;
                                  tmp34 = tmp37;
                                }
                                class S {
                                  constructor() {
                                    tmp = cancelFriendRequest();
                                    str = "IGNORE_FRIEND_REQUEST";
                                    tmp2 = trackUserProfileAction;
                                    if (isGameRelationship) {
                                      str = "IGNORE_GAME_FRIEND_REQUEST";
                                    }
                                    tmp2Result = tmp2({ action: str });
                                    return;
                                  }
                                }
                                const obj6 = { userId: user.id, styles: tmp5.friendRequestNote, analyticsLocation: "User Profile" };
                                const tmp23 = getOrFetchApplication(tmp6(tmp2[17]), obj6);
                                cResult[24] = tmp5.friendRequestNote;
                                class C {
                                  constructor() {
                                    tmp = acceptFriendRequest();
                                    str = "ACCEPT_FRIEND_REQUEST";
                                    tmp2 = trackUserProfileAction;
                                    if (isGameRelationship) {
                                      str = "ACCEPT_GAME_FRIEND_REQUEST";
                                    }
                                    tmp2Result = tmp2({ action: str });
                                    return;
                                  }
                                }
                                cResult[26] = tmp23;
                                tmp22 = tmp23;
                              }
                            }
                          }
                        }
                      }
                      class S {
                        constructor() {
                          tmp = cancelFriendRequest();
                          str = "IGNORE_FRIEND_REQUEST";
                          tmp2 = trackUserProfileAction;
                          if (isGameRelationship) {
                            str = "IGNORE_GAME_FRIEND_REQUEST";
                          }
                          tmp2Result = tmp2({ action: str });
                          return;
                        }
                      }
                      const obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
                      const intl = tmp(tmp2[14]).intl;
                      let t = tmp(tmp2[14]).t;
                      if (tmp13) {
                        const obj8 = { username: gameIcon, applicationName: null, applicationIcon: null };
                        class S {
                          constructor() {
                            tmp = cancelFriendRequest();
                            str = "IGNORE_FRIEND_REQUEST";
                            tmp2 = trackUserProfileAction;
                            if (isGameRelationship) {
                              str = "IGNORE_GAME_FRIEND_REQUEST";
                            }
                            tmp2Result = tmp2({ action: str });
                            return;
                          }
                        }
                        if (getOrFetchApplication != null) {
                          const name = getOrFetchApplication.name;
                        }
                        obj8.applicationName = name;
                        obj8.applicationIcon = function applicationIcon() {
                          let tmp2 = null;
                          if (null != getOrFetchApplication) {
                            const obj = { source: null, size: null, style: null };
                            ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
                            obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
                            obj.size = native.AvatarSizes.XXSMALL;
                            obj.style = gameIcon.gameIcon;
                            tmp2 = hasOwnProperty(native.Avatar, obj, getOrFetchApplication.id);
                            const obj4 = { id: null, icon: null };
                          }
                          return tmp2;
                        };
                        t = intl.format(tmp4 ? t.syHjLL : t.V15uUI, obj8);
                        obj7.children = t;
                        let tmp18 = obj7;
                        const tmp19 = tmp4 ? t.syHjLL : t.V15uUI;
                      } else {
                        { username: null }.username = gameIcon;
                        class S {
                          constructor() {
                            tmp = cancelFriendRequest();
                            str = "IGNORE_FRIEND_REQUEST";
                            tmp2 = trackUserProfileAction;
                            if (isGameRelationship) {
                              str = "IGNORE_GAME_FRIEND_REQUEST";
                            }
                            tmp2Result = tmp2({ action: str });
                            return;
                          }
                        }
                        tmp18 = obj7;
                        const obj9 = { username: null };
                      }
                      const tmp17Result = tmp17(tmp(tmp2[13]).Text, tmp18);
                      class C {
                        constructor() {
                          tmp = acceptFriendRequest();
                          str = "ACCEPT_FRIEND_REQUEST";
                          tmp2 = trackUserProfileAction;
                          if (isGameRelationship) {
                            str = "ACCEPT_GAME_FRIEND_REQUEST";
                          }
                          tmp2Result = tmp2({ action: str });
                          return;
                        }
                      }
                      cResult[18] = getOrFetchApplication;
                      cResult[19] = tmp4;
                      cResult[20] = gameIcon;
                      cResult[21] = tmp13;
                      gameIcon = tmp5.gameIcon;
                      cResult[22] = gameIcon;
                      cResult[23] = tmp17Result;
                    }
                  }
                  const items2 = [tmp5.container, , ];
                  class C {
                    constructor() {
                      tmp = acceptFriendRequest();
                      str = "ACCEPT_FRIEND_REQUEST";
                      tmp2 = trackUserProfileAction;
                      if (isGameRelationship) {
                        str = "ACCEPT_GAME_FRIEND_REQUEST";
                      }
                      tmp2Result = tmp2({ action: str });
                      return;
                    }
                  }
                  items2[2] = style;
                  cResult[14] = tmp7.card;
                  cResult[15] = style;
                  cResult[16] = tmp5.container;
                  cResult[17] = items2;
                  tmp15 = items2;
                  const tmpResult4 = tmp(tmp2[12]);
                }
              }
              class S {
                constructor() {
                  tmp = cancelFriendRequest();
                  str = "IGNORE_FRIEND_REQUEST";
                  tmp2 = trackUserProfileAction;
                  if (isGameRelationship) {
                    str = "IGNORE_GAME_FRIEND_REQUEST";
                  }
                  tmp2Result = tmp2({ action: str });
                  return;
                }
              }
              cResult[10] = cancelFriendRequest;
              cResult[11] = tmp4;
              cResult[12] = trackUserProfileAction;
              class C {
                constructor() {
                  tmp = acceptFriendRequest();
                  str = "ACCEPT_FRIEND_REQUEST";
                  tmp2 = trackUserProfileAction;
                  if (isGameRelationship) {
                    str = "ACCEPT_GAME_FRIEND_REQUEST";
                  }
                  tmp2Result = tmp2({ action: str });
                  return;
                }
              }
              tmp11 = S;
            }
          }
          class C {
            constructor() {
              tmp = acceptFriendRequest();
              str = "ACCEPT_FRIEND_REQUEST";
              tmp2 = trackUserProfileAction;
              if (isGameRelationship) {
                str = "ACCEPT_GAME_FRIEND_REQUEST";
              }
              tmp2Result = tmp2({ action: str });
              return;
            }
          }
          cResult[6] = acceptFriendRequest;
          cResult[7] = tmp4;
          cResult[8] = trackUserProfileAction;
          cResult[9] = C;
          tmp10 = C;
          const tmp6Result = tmp6(tmp2[11]);
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
  const tmpResult = isGameRelationship(trackUserProfileAction[8]);
}) : ((style) => {
  ({ user, isGameRelationship } = style);
  ({ channelId, guildId } = style);
  if (isGameRelationship === undefined) {
    isGameRelationship = false;
  }
  ({ applicationId, showUserProfile } = style);
  let trackUserProfileAction;
  let items4 = closure_7();
  let tmp = items4;
  let userResult = trackUserProfileAction;
  const tmp3 = items4(trackUserProfileAction[7])();
  trackUserProfileAction = isGameRelationship(trackUserProfileAction[8]).useUserProfileAnalyticsContext().trackUserProfileAction;
  let obj = isGameRelationship(trackUserProfileAction[8]);
  let obj2 = isGameRelationship(trackUserProfileAction[10]);
  const friendRequestActions = obj2.useFriendRequestActions({ userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[9])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile });
  const acceptFriendRequest = friendRequestActions.acceptFriendRequest;
  const cancelFriendRequest = friendRequestActions.cancelFriendRequest;
  const obj3 = { userId: user.id, applicationId, isGameRelationship, location: items4(trackUserProfileAction[9])().newestAnalyticsLocation, onConfirm: showUserProfile, onCancel: showUserProfile };
  let name = items4(trackUserProfileAction[11]).useName(guildId, channelId, user);
  const items = [acceptFriendRequest, isGameRelationship, trackUserProfileAction];
  let Button = acceptFriendRequest.useCallback(() => {
    acceptFriendRequest();
    let str = "ACCEPT_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "ACCEPT_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items);
  const items1 = [cancelFriendRequest, isGameRelationship, trackUserProfileAction];
  let tmp8 = null;
  const callback = acceptFriendRequest.useCallback(() => {
    cancelFriendRequest();
    let str = "IGNORE_FRIEND_REQUEST";
    if (isGameRelationship) {
      str = "IGNORE_GAME_FRIEND_REQUEST";
    }
    trackUserProfileAction({ action: str });
  }, items1);
  let obj4 = items4(trackUserProfileAction[11]);
  const getOrFetchApplication = isGameRelationship(trackUserProfileAction[12]).useGetOrFetchApplication(applicationId);
  if (null != applicationId) {
    if (tmp8 == getOrFetchApplication) {
      return null;
    }
  }
  const obj6 = { style: null, children: null };
  const items2 = [items4.container, tmp3.card, style.style];
  obj6.style = items2;
  let Text = tmp4(userResult[13]).Text;
  let obj7 = { variant: "text-sm/semibold", color: "text-default", children: null };
  const intl = tmp4(userResult[14]).intl;
  const format = intl.format;
  let intl2 = tmp4(userResult[14]).t;
  if (null != applicationId) {
    isGameRelationship = isGameRelationship ? intl2.syHjLL : intl2.V15uUI;
    const obj8 = { username: name, applicationName: null, applicationIcon: null };
    tmp8 = getOrFetchApplication == tmp8;
    name = undefined;
    if (!tmp8) {
      name = getOrFetchApplication.name;
    }
    obj8.applicationName = name;
    obj8.applicationIcon = function applicationIcon() {
      let tmp2 = null;
      if (null != getOrFetchApplication) {
        const obj = { source: null, size: null, style: null };
        ({ id: obj3.id, icon: obj3.icon } = getOrFetchApplication);
        obj.source = AvatarUtilsDefault.getApplicationIconSource({ id: null, icon: null });
        obj.size = native.AvatarSizes.XXSMALL;
        obj.style = items4.gameIcon;
        tmp2 = hasOwnProperty(native.Avatar, obj, getOrFetchApplication.id);
        const obj4 = { id: null, icon: null };
      }
      return tmp2;
    };
    obj7.children = format(isGameRelationship, obj8);
    let tmp15 = obj7;
  } else {
    const obj9 = { username: name };
    obj7.children = format(intl2.uIomXw, obj9);
    tmp15 = obj7;
  }
  const items3 = [getOrFetchApplication(Text, tmp15), getOrFetchApplication(tmp(userResult[17]), { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" }), ];
  const obj11 = { style: items4.buttons, children: null };
  const obj12 = { size: "sm", variant: "primary", text: null, onPress: null };
  intl2 = tmp4(userResult[14]).intl;
  obj12.text = intl2.string(isGameRelationship(userResult[14]).t.Zcibdf);
  obj12.onPress = Button;
  items4 = [getOrFetchApplication(isGameRelationship(userResult[18]).Button, obj12), ];
  Button = tmp4(userResult[18]).Button;
  const obj13 = { size: "sm", variant: "secondary", text: null, onPress: null };
  obj7 = tmp4(userResult[14]).intl;
  user = obj7.string;
  userResult = user(tmp4(userResult[14]).t.xuio0C);
  obj13.text = userResult;
  obj13.onPress = callback;
  tmp = tmp14(Button, obj13);
  items4[1] = tmp;
  obj11.children = items4;
  Text = closure_6(tmp13, obj11);
  items3[2] = Text;
  obj6.children = items3;
  closure_6(cancelFriendRequest, obj6);
  const obj10 = { userId: user.id, styles: items4.friendRequestNote, analyticsLocation: "User Profile" };
  const obj5 = isGameRelationship(trackUserProfileAction[12]);
});