// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx
import isChangelogUserDefault from "../../../changelog/utils/isChangelogUser.tsx";
import GuildJoinRequestAnalyticUtils from "../../GuildJoinRequestAnalyticUtils.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4896);
let closure_11 = createStyles.createStyles({
  container: { flex: 1 },
  profileContainer: { position: "relative" },
  noPadding: { paddingHorizontal: 0 },
});
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (joinRequest) => {
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
        const tmpResult8 = tmp(tmp2[12]);
        const sharedValue = tmp(tmp2[13]).useSharedValue(0);
        if (cResult[5] !== sharedValue) {
          class R {
            constructor(arg0) {
              result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
              return;
            }
          }
          cResult[5] = sharedValue;
          cResult[6] = R;
        } else {
          class R {
            constructor(arg0) {
              result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
              return;
            }
          }
        }
        if (cResult[7] === tmp11Result) {
          class R {
            constructor(arg0) {
              result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
              return;
            }
          }
          ({ theme, primaryColor, secondaryColor } = tmp10(tmp2[14])(tmp20));
          const _Symbol = Symbol;
          if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
            const items1 = [sharedValue];
            class F {
              constructor() {
                return closure_5.syncProfileThemeWithUserTheme;
              }
            }
            cResult[10] = items1;
            cResult[11] = F;
            let tmp23 = F;
            const tmp22 = items1;
          } else {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
            tmp23 = cResult[11];
          }
          const tmp21 = tmp10(tmp2[14])(tmp20);
          const stateFromStores1 = tmp(tmp2[10]).useStateFromStores(tmp22, tmp23);
          const tmpResult10 = tmp(tmp2[10]);
          const tmp25 = tmp10(tmp2[15])();
          const profileThemeValues = tmp(tmp2[16]).useProfileThemeValues(theme);
          const tmpResult11 = tmp(tmp2[16]);
          const token = tmp(tmp2[17]).useToken(tmp10(tmp2[18]).colors.INTERACTIVE_TEXT_HOVER, theme);
          if (stateFromStores1) {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
            if (!tmp28) {
              class R {
                constructor(arg0) {
                  result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                  return;
                }
              }
            }
          } else {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
            if (!tmp28) {
              class R {
                constructor(arg0) {
                  result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                  return;
                }
              }
            }
          }
          const tmpResult12 = tmp(tmp2[17]);
          const token1 = tmp(tmp2[17]).useToken(
            tmp10(tmp2[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
            tmp25,
          );
          if (cResult[12] === token1) {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
          }
          if (null != secondaryColor) {
            class R {
              constructor(arg0) {
                result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                return;
              }
            }
            if (null != profileThemeValues) {
              class R {
                constructor(arg0) {
                  result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                  return;
                }
              }
              if (null != tmp30) {
                class R {
                  constructor(arg0) {
                    result = closure_5.set(joinRequest.nativeEvent.contentOffset.y);
                    return;
                  }
                }
                const int2hex = tmp34.int2hex;
                tmp(tmp2[20]);
                class F {
                  constructor() {
                    return closure_5.syncProfileThemeWithUserTheme;
                  }
                }
              }
            }
          }
          cResult[12] = token1;
          cResult[13] = profileThemeValues;
          cResult[14] = secondaryColor;
          cResult[15] = tmp30;
          cResult[16] = token1;
          const tmpResult13 = tmp(tmp2[17]);
        }
        let obj2 = { user: stateFromStores, displayProfile: tmp11Result };
        cResult[7] = tmp11Result;
        cResult[8] = stateFromStores;
        cResult[9] = obj2;
        tmp20 = obj2;
        const tmpResult9 = tmp(tmp2[13]);
      }
      const fn = function y() {
        user = UserStore.getUser(userId);
        if (null == user) {
          user = new UserRecord(user);
        }
        return user;
      };
      const items2 = [user, userId];
      cResult[1] = user;
      cResult[2] = userId;
      cResult[3] = fn;
      cResult[4] = items2;
      tmp8 = items2;
      tmp7 = fn;
      const obj = joinRequest(userId[9]);
    }
  : (joinRequest) => {
      joinRequest = joinRequest.joinRequest;
      let sharedValue;
      let tmp = closure_11();
      let user = joinRequest.user;
      const userId = joinRequest.userId;
      const guildId = joinRequest.guildId;
      const items = [UserStore];
      const items1 = [user, userId];
      const stateFromStores = joinRequest(userId[10]).useStateFromStores(
        items,
        () => {
          user = UserStore.getUser(userId);
          if (null == user) {
            user = new UserRecord(user);
          }
          return user;
        },
        items1,
      );
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
      ({ theme, secondaryColor, primaryColor } = user(userId[14])({
        user: stateFromStores,
        displayProfile: tmp6Result,
      }));
      const tmp13 = user(userId[14])({ user: stateFromStores, displayProfile: tmp6Result });
      const items3 = [sharedValue];
      const stateFromStores1 = joinRequest(userId[10]).useStateFromStores(
        items3,
        () => sharedValue.syncProfileThemeWithUserTheme,
      );
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
      const token1 = joinRequest(userId[17]).useToken(
        tmp5(tmp3[18]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT,
        tmp15,
      );
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
      const items4 = [guildId, ,];
      ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
      const effect = obj3.useEffect(() => {
        const result = GuildJoinRequestAnalyticUtils.trackMemberApplicationViewed({
          guildId,
          applicationStatus: joinRequest.applicationStatus,
          applicationUserId: joinRequest.userId,
        });
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
          const obj2 = {
            type: "action_sheet",
            withMutualGuilds: true,
            withMutualFriends: true,
            dispatchWait: true,
            guildId,
          };
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
        const obj6 = {
          ref: bottomSheetRef,
          handleDisabled: true,
          scrollable: true,
          startExpanded: true,
          contentStyles: tmp.noPadding,
          children: null,
        };
        const obj7 = { scrollsToTop: false, style: null, ref: null, onScroll: null, children: null };
        const items6 = [tmp.container];
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
        const items7 = [closure_9(tmp2(tmp3[29]).BottomSheetScrollView, obj7)];
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
    };
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx",
);

export default noop.memo(tmp3);
export const JoinRequestActionSheet = tmp3;
