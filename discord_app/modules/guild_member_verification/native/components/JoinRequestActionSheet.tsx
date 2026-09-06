// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx
import isChangelogUserDefault from "../../../changelog/utils/isChangelogUser.tsx";
import GuildJoinRequestAnalyticUtils from "../../GuildJoinRequestAnalyticUtils.tsx";
import maybeFetchUserProfileDefault from "../../../user_profile/maybeFetchUserProfile.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../../a11y/AccessibilityStore.tsx";
import UserRecord from "../../../../records/UserRecord.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

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
    items1 = [,];
    items1[0] = user;
    items1[1] = userId;
    stateFromStores = obj.useStateFromStores(
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
    bottomSheetRef = tmp2Result.useBottomSheetRef();
    obj3 = guildId;
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
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
    items4 = [, ,];
    items4[0] = guildId;
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    effect = obj3.useEffect(() => {
      const obj = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
      const result = obj.trackMemberApplicationViewed(obj);
    }, items4);
    items5 = [,];
    items5[0] = guildId;
    items5[1] = stateFromStores;
    effect1 = obj3.useEffect(() => {
      let obj = stateFromStores;
      let tmp = null == stateFromStores;
      if (!tmp) {
        let isNonUserBotResult = obj.isNonUserBot();
        if (isNonUserBotResult) {
          isNonUserBotResult = !isChangelogUserDefault(obj.id);
        }
        tmp = isNonUserBotResult;
      }
      if (!tmp) {
        obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId };
        maybeFetchUserProfileDefault(obj.id, obj.getAvatarURL(guildId, 80), obj);
      }
    }, items5);
    if (null == user) {
      tmp24 = jsx;
      obj = { children: null };
      obj1 = { style: null, Illustration: null, body: null };
      obj1.style = { marginTop: 42 };
      obj1.Illustration = tmp2(tmp3[24]).NoResults;
      intl = tmp2(tmp3[25]).intl;
      obj1.body = intl.string(tmp2(tmp3[25]).t.eAn6z2);
      obj.children = jsx(tmp2(tmp3[23]).EmptyState, obj1);
      tmp25 = jsx(tmp2(tmp3[22]).BottomSheet, obj);
    } else {
      tmp26 = jsx;
      obj2 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
      obj2.theme = theme;
      obj2.primaryColor = primaryColor;
      obj2.secondaryColor = secondaryColor;
      tmp27 = jsxs;
      obj3 = {
        ref: null,
        handleDisabled: true,
        scrollable: true,
        startExpanded: true,
        contentStyles: null,
        children: null,
      };
      obj3.ref = bottomSheetRef;
      obj3.contentStyles = tmp.noPadding;
      obj4 = { scrollsToTop: false, style: null, ref: null, onScroll: null, children: null };
      items6 = [,];
      items6[0] = tmp.container;
      obj5 = { backgroundColor: null };
      obj5.backgroundColor = int2hexResult;
      items6[1] = obj5;
      obj4.style = items6;
      obj4.ref = ref;
      obj4.onScroll = callback;
      tmp28 = closure_4;
      obj6 = { children: null };
      obj7 = { style: null, children: null };
      obj7.style = tmp.profileContainer;
      obj8 = { joinRequest: null, user: null, displayProfile: null };
      obj8.joinRequest = joinRequest;
      obj8.user = stateFromStores;
      obj8.displayProfile = tmp6Result;
      obj7.children = jsx(tmp5(tmp3[28]), obj8);
      obj6.children = jsx(closure_4, obj7);
      obj4.children = jsx(closure_4, obj6);
      items7 = [,];
      items7[0] = jsx(tmp2(tmp3[27]).BottomSheetScrollView, obj4);
      obj9 = { variant: "floating", tabStyle: null, onPress: null };
      obj10 = { backgroundColor: null };
      obj10.backgroundColor = token;
      obj9.tabStyle = obj10;
      obj9.onPress = bottomSheetClose;
      items7[1] = jsx(tmp2(tmp3[29]).ActionSheetHeaderBar, obj9);
      obj3.children = items7;
      obj2.children = jsxs(tmp2(tmp3[22]).BottomSheet, obj3);
      tmp25 = jsx(tmp2(tmp3[26]).ThemeContextProvider, obj2);
    }
    return tmp25;
  }
}
const View = fn(17).View;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1074).EMPTY_STRING_SNOWFLAKE_ID;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({
  container: { flex: 1 },
  profileContainer: { position: "relative" },
  noPadding: { paddingHorizontal: 0 },
});
const size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx",
);

export default noop.memo(JoinRequestActionSheet);
export { JoinRequestActionSheet };
