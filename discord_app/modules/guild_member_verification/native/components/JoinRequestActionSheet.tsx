// === Module 17023: JoinRequestActionSheet ===

// Module 17023 (JoinRequestActionSheet)
import isChangelogUserDefault from "isChangelogUser" /* 2114 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 6118 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8311 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 5081 */;
import UserRecord from "UserRecord" /* 1404 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function JoinRequestActionSheet(joinRequest) {
  const cResult = joinRequest(userId[9]).c(59);
  joinRequest = joinRequest.joinRequest;
  closure_11();
  let user = joinRequest.user;
  userId = joinRequest.userId;
  const guildId = joinRequest.guildId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === user) {
    if (cResult[2] === userId) {
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    const stateFromStores = tmp(tmp2[10]).useStateFromStores(first, tmp7, tmp8);
    let id;
    const tmpResult = tmp(tmp2[10]);
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    const tmp11Result = user(tmp2[11])(id);
    const tmp11 = user(tmp2[11]);
    const bottomSheetRef1 = tmp(tmp2[12]).useBottomSheetRef();
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    guildId.useRef(null);
    const obj4 = guildId;
    const tmpResult8 = tmp(tmp2[12]);
    const sharedValue = tmp(tmp2[13]).useSharedValue(0);
    if (cResult[5] !== sharedValue) {
      const fn2 = function b(nativeEvent) {
        const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
      };
      cResult[5] = sharedValue;
      cResult[6] = fn2;
    }
    if (cResult[7] === tmp11Result) {
      if (cResult[8] === stateFromStores) {
        let tmp19 = cResult[9];
      }
      ({ theme, primaryColor, secondaryColor } = tmp10(tmp2[14])(tmp19));
      const _Symbol = Symbol;
      if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [sharedValue];
        class F {
          constructor() {
            return closure_5.syncProfileThemeWithUserTheme;
          }
        }
        cResult[10] = items1;
        cResult[11] = F;
        let tmp22 = F;
        let tmp21 = items1;
      } else {
        tmp21 = cResult[10];
        tmp22 = cResult[11];
      }
      const tmp20 = tmp10(tmp2[14])(tmp19);
      const stateFromStores1 = tmp(tmp2[10]).useStateFromStores(tmp21, tmp22);
      const tmpResult10 = tmp(tmp2[10]);
      const tmp25 = tmp10(tmp2[15])();
      const profileThemeValues = tmp(tmp2[16]).useProfileThemeValues(theme);
      const tmpResult11 = tmp(tmp2[16]);
      const token = tmp(tmp2[17]).useToken(tmp10(tmp2[18]).colors.INTERACTIVE_TEXT_HOVER, theme);
      if (stateFromStores1) {
        let prop;
        if (!tmp28) {
          prop = profileThemeValues.overlaySyncedWithUserTheme;
        }
        let overlay = prop;
      } else if (!tmp28) {
        overlay = profileThemeValues.overlay;
      }
      const tmpResult12 = tmp(tmp2[17]);
      const token1 = tmp(tmp2[17]).useToken(tmp10(tmp2[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp25);
      if (cResult[12] === token1) {
        if (cResult[13] === profileThemeValues) {
          if (cResult[14] === secondaryColor) {
            if (cResult[17] === guildId) {
              if (cResult[18] === joinRequest.applicationStatus) {
                if (cResult[19] === joinRequest.userId) {
                  let tmp34 = cResult[20];
                  let tmp35 = cResult[21];
                }
                const effect = obj4.useEffect(tmp35, tmp34);
                class Y {
                  constructor() {
                    obj = closure_0(closure_2[21]);
                    obj1 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                    result = obj.trackMemberApplicationViewed(obj1);
                    return;
                  }
                }
                class Q {
                  constructor() {
                    obj = closure_4;
                    tmp = null == closure_4;
                    if (!tmp) {
                      isNonUserBotResult = obj.isNonUserBot();
                      if (isNonUserBotResult) {
                        tmp3 = closure_1;
                        tmp4 = closure_2;
                        isNonUserBotResult = !closure_1(closure_2[22])(obj.id);
                      }
                      tmp = isNonUserBotResult;
                    }
                    if (!tmp) {
                      tmp5 = closure_1;
                      tmp6 = closure_2;
                      tmp8 = guildId;
                      num = 80;
                      tmp7 = closure_1(closure_2[23]);
                      obj1 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, guildId: null };
                      obj1.guildId = guildId;
                      tmp7Result = tmp7(obj.id, obj.getAvatarURL(guildId, 80), obj1);
                    }
                    return;
                  }
                }
                const items2 = [guildId, stateFromStores];
                cResult[22] = guildId;
                cResult[23] = stateFromStores;
                cResult[24] = Q;
                cResult[25] = items2;
              }
            }
            class Y {
              constructor() {
                obj = closure_0(closure_2[21]);
                obj1 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                result = obj.trackMemberApplicationViewed(obj1);
                return;
              }
            }
            class F {
              constructor() {
                return closure_5.syncProfileThemeWithUserTheme;
              }
            }
            tmp36[0] = guildId;
            ({ applicationStatus: tmp36[1], userId: tmp36[2] } = joinRequest);
            cResult[17] = guildId;
            cResult[18] = joinRequest.applicationStatus;
            cResult[19] = joinRequest.userId;
            cResult[20] = tmp36;
            cResult[21] = Y;
            tmp35 = Y;
            tmp34 = tmp36;
          }
        }
      }
      let tmp32 = token1;
      if (null != secondaryColor) {
        tmp32 = token1;
        if (null != profileThemeValues) {
          tmp32 = token1;
          if (null != overlay) {
            const int2hex = tmp(tmp2[19]).int2hex;
            class Y {
              constructor() {
                obj = closure_0(closure_2[21]);
                obj1 = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
                result = obj.trackMemberApplicationViewed(obj1);
                return;
              }
            }
            class Q {
              constructor() {
                obj = closure_4;
                tmp = null == closure_4;
                if (!tmp) {
                  isNonUserBotResult = obj.isNonUserBot();
                  if (isNonUserBotResult) {
                    tmp3 = closure_1;
                    tmp4 = closure_2;
                    isNonUserBotResult = !closure_1(closure_2[22])(obj.id);
                  }
                  tmp = isNonUserBotResult;
                }
                if (!tmp) {
                  tmp5 = closure_1;
                  tmp6 = closure_2;
                  tmp8 = guildId;
                  num = 80;
                  tmp7 = closure_1(closure_2[23]);
                  obj1 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, guildId: null };
                  obj1.guildId = guildId;
                  tmp7Result = tmp7(obj.id, obj.getAvatarURL(guildId, 80), obj1);
                }
                return;
              }
            }
            const tmpResult14 = tmp(tmp2[19]);
          }
        }
      }
      cResult[12] = token1;
      cResult[13] = profileThemeValues;
      cResult[14] = secondaryColor;
      cResult[15] = overlay;
      cResult[16] = tmp32;
      const tmpResult13 = tmp(tmp2[17]);
    }
    let obj2 = { user: stateFromStores, displayProfile: tmp11Result };
    cResult[7] = tmp11Result;
    cResult[8] = stateFromStores;
    cResult[9] = obj2;
    tmp19 = obj2;
    const tmpResult9 = tmp(tmp2[13]);
  }
  const fn = function y() {
    user = UserStore.getUser(userId);
    if (null == user) {
      user = new UserRecord(user);
    }
    return user;
  };
  const items3 = [user, userId];
  cResult[1] = user;
  cResult[2] = userId;
  cResult[3] = fn;
  cResult[4] = items3;
  tmp8 = items3;
  tmp7 = fn;
  const obj = joinRequest(userId[9]);
}) : (function JoinRequestActionSheet(joinRequest) {
  joinRequest = joinRequest.joinRequest;
  let sharedValue;
  let tmp = closure_11();
  let user = joinRequest.user;
  const userId = joinRequest.userId;
  const guildId = joinRequest.guildId;
  const items = [UserStore];
  const items1 = [user, userId];
  const stateFromStores = joinRequest(userId[10]).useStateFromStores(items, () => {
    user = UserStore.getUser(userId);
    if (null == user) {
      user = new UserRecord(user);
    }
    return user;
  }, items1);
  let id;
  const obj = joinRequest(userId[10]);
  if (user != null) {
    id = user.id;
  }
  if (id == null) {
    id = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp6Result = user(userId[11])(id);
  const tmp6 = user(userId[11]);
  const bottomSheetRef1 = joinRequest(userId[12]).useBottomSheetRef();
  ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
  const tmp2Result = joinRequest(userId[12]);
  const ref = guildId.useRef(null);
  sharedValue = joinRequest(userId[13]).useSharedValue(0);
  const items2 = [sharedValue];
  const callback = guildId.useCallback((nativeEvent) => {
    const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
  }, items2);
  const tmp2Result8 = joinRequest(userId[13]);
  ({ theme, secondaryColor, primaryColor } = user(userId[14])({ user: stateFromStores, displayProfile: tmp6Result }));
  const tmp13 = user(userId[14])({ user: stateFromStores, displayProfile: tmp6Result });
  const items3 = [sharedValue];
  const stateFromStores1 = joinRequest(userId[10]).useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
  const tmp2Result9 = joinRequest(userId[10]);
  const tmp15 = user(userId[15])();
  const profileThemeValues = joinRequest(userId[16]).useProfileThemeValues(theme);
  const tmp2Result10 = joinRequest(userId[16]);
  const token = joinRequest(userId[17]).useToken(tmp5(tmp3[18]).colors.INTERACTIVE_TEXT_HOVER, theme);
  if (stateFromStores1) {
    let prop;
    if (!tmp18) {
      prop = profileThemeValues.overlaySyncedWithUserTheme;
    }
    let overlay = prop;
  } else if (!tmp18) {
    overlay = profileThemeValues.overlay;
  }
  const tmp2Result11 = joinRequest(userId[17]);
  const token1 = joinRequest(userId[17]).useToken(tmp5(tmp3[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp15);
  let int2hexResult = token1;
  if (null != secondaryColor) {
    int2hexResult = token1;
    if (null != profileThemeValues) {
      int2hexResult = token1;
      if (null != overlay) {
        const tmp2Result13 = tmp2(tmp3[19]);
        int2hexResult = tmp2Result13.int2hex(tmp2(tmp3[20]).calculateOverlayedColor(secondaryColor, overlay));
        const tmp2Result14 = tmp2(tmp3[20]);
      }
    }
  }
  const items4 = [guildId, , ];
  ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
  const effect = obj3.useEffect(() => {
    const result = GuildJoinRequestAnalyticUtils.trackMemberApplicationViewed({ guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId });
  }, items4);
  const items5 = [guildId, stateFromStores];
  const effect1 = obj3.useEffect(() => {
    let tmp = null == stateFromStores;
    if (!tmp) {
      let isNonUserBotResult = stateFromStores.isNonUserBot();
      if (isNonUserBotResult) {
        isNonUserBotResult = !isChangelogUserDefault(stateFromStores.id);
      }
      tmp = isNonUserBotResult;
    }
    if (!tmp) {
      const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, guildId };
      maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
    }
  }, items5);
  if (null == user) {
    let obj2 = { children: null };
    const obj4 = { style: { marginTop: 42 }, Illustration: tmp2(tmp3[26]).NoResults, body: null };
    const intl = tmp2(tmp3[27]).intl;
    obj4.body = intl.string(tmp2(tmp3[27]).t.eAn6z2);
    obj2.children = closure_9(tmp2(tmp3[25]).EmptyState, obj4);
    let tmp25 = closure_9(tmp2(tmp3[24]).BottomSheet, obj2);
  } else {
    const obj5 = { theme, primaryColor, secondaryColor, children: null };
    const obj6 = { ref: bottomSheetRef, handleDisabled: true, scrollable: true, startExpanded: true, contentStyles: tmp.noPadding, children: null };
    const obj7 = { scrollsToTop: false, style: null, ref: null, onScroll: null, children: null };
    const items6 = [tmp.container, ];
    const obj8 = { backgroundColor: int2hexResult };
    items6[1] = obj8;
    obj7.style = items6;
    obj7.ref = ref;
    obj7.onScroll = callback;
    const obj9 = { children: null };
    const obj10 = { style: tmp.profileContainer, children: null };
    const obj11 = { joinRequest, user: stateFromStores, displayProfile: tmp6Result };
    obj10.children = closure_9(tmp5(tmp3[28]), obj11);
    obj9.children = closure_9(stateFromStores, obj10);
    obj7.children = closure_9(stateFromStores, obj9);
    const items7 = [closure_9(tmp2(tmp3[29]).BottomSheetScrollView, obj7), ];
    const obj12 = { variant: "floating", tabStyle: null, onPress: null };
    const obj13 = { backgroundColor: token };
    obj12.tabStyle = obj13;
    obj12.onPress = bottomSheetClose;
    items7[1] = closure_9(tmp2(tmp3[30]).ActionSheetHeaderBar, obj12);
    obj6.children = items7;
    obj5.children = closure_10(tmp2(tmp3[24]).BottomSheet, obj6);
    tmp25 = closure_9(tmp2(tmp3[31]).ThemeContextProvider, obj5);
  }
  return tmp25;
});
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default noop.memo(tmp3);
export const JoinRequestActionSheet = tmp3;