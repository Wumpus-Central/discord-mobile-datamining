// === Module 16842: JoinRequestActionSheet ===

// Module 16842 (JoinRequestActionSheet)
import isChangelogUserDefault from "isChangelogUser" /* 2010 */;
import GuildJoinRequestAnalyticUtils from "GuildJoinRequestAnalyticUtils" /* 5713 */;
import maybeFetchUserProfileDefault from "maybeFetchUserProfile" /* 8417 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4714 */;
import UserRecord from "UserRecord" /* 1386 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
class JoinRequestActionSheet {
  constructor(arg0) {
    joinRequest = global.joinRequest;
    user = undefined;
    userId = undefined;
    guildId = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    tmp = closure_11();
    user = joinRequest.user;
    userId = joinRequest.userId;
    guildId = joinRequest.guildId;
    tmp2 = joinRequest;
    tmp3 = userId;
    obj = joinRequest(userId[8]);
    items = [];
    items[0] = closure_7;
    items1 = [, ];
    items1[0] = user;
    items1[1] = userId;
    stateFromStores = obj.useStateFromStores(items, () => {
      user = UserStore.getUser(userId);
      if (null == user) {
        user = new UserRecord(user);
      }
      return user;
    }, items1);
    closure_4 = stateFromStores;
    tmp5 = user;
    id = undefined;
    tmp6 = user(userId[9]);
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp6Result = tmp6(id);
    tmp2Result = tmp2(tmp3[10]);
    bottomSheetRef1 = tmp2Result.useBottomSheetRef();
    obj3 = guildId;
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef1);
    ref = guildId.useRef(null);
    tmp2Result1 = tmp2(tmp3[11]);
    sharedValue = tmp2Result1.useSharedValue(0);
    closure_5 = sharedValue;
    items2 = [];
    items2[0] = sharedValue;
    callback = guildId.useCallback((nativeEvent) => {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    }, items2);
    tmp13 = tmp5(tmp3[12])({ user: stateFromStores, displayProfile: tmp6Result });
    ({ theme, secondaryColor, primaryColor } = tmp13);
    tmp2Result2 = tmp2(tmp3[8]);
    items3 = [];
    items3[0] = closure_5;
    stateFromStores1 = tmp2Result2.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
    tmp15 = tmp5(tmp3[13])();
    tmp2Result3 = tmp2(tmp3[14]);
    profileThemeValues = tmp2Result3.useProfileThemeValues(theme);
    tmp2Result4 = tmp2(tmp3[15]);
    tmp18 = profileThemeValues == null;
    token = tmp2Result4.useToken(tmp5(tmp3[16]).colors.INTERACTIVE_TEXT_HOVER, theme);
    if (stateFromStores1) {
      prop = undefined;
      if (!tmp18) {
        prop = profileThemeValues.overlaySyncedWithUserTheme;
      }
      overlay = prop;
    } else if (!tmp18) {
      overlay = profileThemeValues.overlay;
    }
    tmp2Result5 = tmp2(tmp3[15]);
    token1 = tmp2Result5.useToken(tmp5(tmp3[16]).colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp15);
    int2hexResult = token1;
    if (null != secondaryColor) {
      int2hexResult = token1;
      if (null != profileThemeValues) {
        int2hexResult = token1;
        if (null != overlay) {
          tmp2Result6 = tmp2(tmp3[17]);
          tmp2Result7 = tmp2(tmp3[18]);
          int2hexResult = tmp2Result6.int2hex(tmp2Result7.calculateOverlayedColor(secondaryColor, overlay));
        }
      }
    }
    items4 = [, , ];
    items4[0] = guildId;
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    effect = obj3.useEffect(() => {
      const result = GuildJoinRequestAnalyticUtils.trackMemberApplicationViewed({ guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId });
    }, items4);
    items5 = [, ];
    items5[0] = guildId;
    items5[1] = stateFromStores;
    effect1 = obj3.useEffect(() => {
      let tmp = null == stateFromStores;
      if (!tmp) {
        let isNonUserBotResult = stateFromStores.isNonUserBot();
        if (isNonUserBotResult) {
          isNonUserBotResult = !isChangelogUserDefault(stateFromStores.id);
        }
        tmp = isNonUserBotResult;
      }
      if (!tmp) {
        const obj2 = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
        maybeFetchUserProfileDefault(stateFromStores.id, stateFromStores.getAvatarURL(guildId, 80), obj2);
      }
    }, items5);
    if (null == user) {
      tmp24 = jsx;
      obj1 = { children: null };
      obj22 = { style: null, Illustration: null, body: null };
      obj22.style = { marginTop: 42 };
      obj22.Illustration = tmp2(tmp3[24]).NoResults;
      intl = tmp2(tmp3[25]).intl;
      obj22.body = intl.string(tmp2(tmp3[25]).t.eAn6z2);
      obj1.children = jsx(tmp2(tmp3[23]).EmptyState, obj22);
      tmp25 = jsx(tmp2(tmp3[22]).BottomSheet, obj1);
    } else {
      tmp26 = jsx;
      obj23 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
      obj23.theme = theme;
      obj23.primaryColor = primaryColor;
      obj23.secondaryColor = secondaryColor;
      tmp27 = jsxs;
      obj24 = { ref: null, handleDisabled: true, scrollable: true, startExpanded: true, contentStyles: null, children: null };
      obj24.ref = bottomSheetRef;
      obj24.contentStyles = tmp.noPadding;
      obj25 = { scrollsToTop: false, style: null, ref: null, onScroll: null, children: null };
      items6 = [, ];
      items6[0] = tmp.container;
      obj26 = { backgroundColor: null };
      obj26.backgroundColor = int2hexResult;
      items6[1] = obj26;
      obj25.style = items6;
      obj25.ref = ref;
      obj25.onScroll = callback;
      tmp28 = closure_4;
      obj27 = { children: null };
      obj28 = { style: null, children: null };
      obj28.style = tmp.profileContainer;
      obj29 = { joinRequest: null, user: null, displayProfile: null };
      obj29.joinRequest = joinRequest;
      obj29.user = stateFromStores;
      obj29.displayProfile = tmp6Result;
      obj28.children = jsx(tmp5(tmp3[28]), obj29);
      obj27.children = jsx(closure_4, obj28);
      obj25.children = jsx(closure_4, obj27);
      items7 = [, ];
      items7[0] = jsx(tmp2(tmp3[27]).BottomSheetScrollView, obj25);
      obj30 = { variant: "floating", tabStyle: null, onPress: null };
      obj31 = { backgroundColor: null };
      obj31.backgroundColor = token;
      obj30.tabStyle = obj31;
      obj30.onPress = bottomSheetClose;
      items7[1] = jsx(tmp2(tmp3[29]).ActionSheetHeaderBar, obj30);
      obj24.children = items7;
      obj23.children = jsxs(tmp2(tmp3[22]).BottomSheet, obj24);
      tmp25 = jsx(tmp2(tmp3[26]).ThemeContextProvider, obj23);
    }
    return tmp25;
  }
}
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4722);
let closure_11 = createStyles.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default noop.memo(JoinRequestActionSheet);
export { JoinRequestActionSheet };