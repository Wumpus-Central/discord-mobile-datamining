// discord_app/modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx
import importAllResult from "trackMemberApplicationViewed";
import { View } from "int2hslRaw";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import createdAt from "createdAt";
import mergeGuildAvatar from "mergeGuildAvatar";
import { EMPTY_STRING_SNOWFLAKE_ID } from "ME";
import jsxProd from "maybeFetchUserProfile";
import createCacheKey from "createCacheKey";

let c10;
let c9;
const require = arg1;
class JoinRequestActionSheet {
  constructor(arg0) {
    joinRequest = global.joinRequest;
    user = undefined;
    userId = undefined;
    guildId = undefined;
    c4 = undefined;
    useSharedValue = undefined;
    tmp = jsxs();
    user = joinRequest.user;
    userId = joinRequest.userId;
    guildId = joinRequest.guildId;
    tmp2 = joinRequest;
    tmp3 = userId;
    obj = require("initialize");
    items = [];
    items[0] = View;
    items1 = [, ];
    items1[0] = user;
    items1[1] = userId;
    stateFromStores = obj.useStateFromStores(items, () => {
      let user = outer1_7.getUser(userId);
      if (null == user) {
        user = new outer1_6(user);
      }
      return user;
    }, items1);
    c4 = stateFromStores;
    tmp5 = user;
    id = undefined;
    tmp6 = require("useDisplayProfile");
    if (user != null) {
      id = user.id;
    }
    if (id == null) {
      id = EMPTY_STRING_SNOWFLAKE_ID;
    }
    tmp6Result = tmp6(id);
    tmp2Result = require("useBottomSheetRef");
    bottomSheetRef = tmp2Result.useBottomSheetRef();
    obj3 = guildId;
    ({ bottomSheetRef, bottomSheetClose } = bottomSheetRef);
    ref = guildId.useRef(null);
    tmp2Result1 = require("module_4054");
    sharedValue = require("noop");
    useSharedValue = sharedValue;
    items2 = [];
    items2[0] = sharedValue;
    callback = guildId.useCallback((nativeEvent) => {
      const result = sharedValue.set(nativeEvent.nativeEvent.contentOffset.y);
    }, items2);
    tmp13 = require("useProfileTheme")({ user: stateFromStores, displayProfile: tmp6Result });
    ({ theme, secondaryColor, primaryColor } = tmp13);
    tmp2Result2 = require("initialize");
    items3 = [];
    items3[0] = useSharedValue;
    stateFromStores1 = tmp2Result2.useStateFromStores(items3, () => sharedValue.syncProfileThemeWithUserTheme);
    tmp15 = require("useTheme")();
    tmp2Result3 = require("useProfileThemeValues");
    profileThemeValues = tmp2Result3.useProfileThemeValues(theme);
    tmp2Result4 = require("map");
    tmp18 = profileThemeValues == null;
    token = tmp2Result4.useToken(require("Themes").colors.INTERACTIVE_TEXT_HOVER, theme);
    if (stateFromStores1) {
      prop = undefined;
      if (!tmp18) {
        prop = profileThemeValues.overlaySyncedWithUserTheme;
      }
      overlay = prop;
    } else if (!tmp18) {
      overlay = profileThemeValues.overlay;
    }
    tmp2Result5 = require("map");
    token1 = tmp2Result5.useToken(require("Themes").colors.MOBILE_ACTIONSHEET_GRADIENT_BACKGROUND_DEFAULT, tmp15);
    int2hexResult = token1;
    if (null != secondaryColor) {
      int2hexResult = token1;
      if (null != profileThemeValues) {
        int2hexResult = token1;
        if (null != overlay) {
          tmp2Result6 = require("int2hslRaw");
          tmp2Result7 = require("getProfileTheme");
          int2hexResult = tmp2Result6.int2hex(tmp2Result7.calculateOverlayedColor(secondaryColor, overlay));
        }
      }
    }
    items4 = [, , ];
    items4[0] = guildId;
    ({ applicationStatus: arr5[1], userId: arr5[2] } = joinRequest);
    effect = obj3.useEffect(() => {
      let obj = joinRequest(userId[19]);
      obj = { guildId, applicationStatus: joinRequest.applicationStatus, applicationUserId: joinRequest.userId };
      const result = obj.trackMemberApplicationViewed(obj);
    }, items4);
    items5 = [, ];
    items5[0] = guildId;
    items5[1] = stateFromStores;
    effect1 = obj3.useEffect(() => {
      let obj = stateFromStores;
      let tmp = null == stateFromStores;
      if (!tmp) {
        let isNonUserBotResult = obj.isNonUserBot();
        if (isNonUserBotResult) {
          isNonUserBotResult = !user(userId[20])(obj.id);
        }
        tmp = isNonUserBotResult;
      }
      if (!tmp) {
        obj = { type: "action_sheet", withMutualGuilds: true, withMutualFriends: true, dispatchWait: true, guildId: null };
        obj[4] = guildId;
        user(userId[21])(obj.id, obj.getAvatarURL(guildId, 80), obj);
        const tmp7 = user(userId[21]);
      }
    }, items5);
    if (null == user) {
      tmp24 = jsx;
      obj = { children: null };
      obj1 = { style: null, Illustration: null, body: null };
      obj1[0] = { marginTop: 42 };
      obj1[1] = require("getNoResultsSource").NoResults;
      intl = require("getSystemLocale").intl;
      obj1[2] = intl.string(require("getSystemLocale").t.eAn6z2);
      obj[0] = jsx(require("Button").EmptyState, obj1);
      tmp25 = jsx(require("Background").BottomSheet, obj);
    } else {
      tmp26 = jsx;
      obj2 = { theme: null, primaryColor: null, secondaryColor: null, children: null };
      obj2[0] = theme;
      obj2[1] = primaryColor;
      obj2[2] = secondaryColor;
      tmp27 = jsxs;
      obj3 = { ref: null, handleDisabled: true, scrollable: true, startExpanded: true, contentStyles: null, children: null };
      obj3[0] = bottomSheetRef;
      obj3[4] = tmp.noPadding;
      obj4 = { scrollsToTop: false, style: null, ref: null, onScroll: null, children: null };
      items6 = [, ];
      items6[0] = tmp.container;
      obj5 = { backgroundColor: null };
      obj5[0] = int2hexResult;
      items6[1] = obj5;
      obj4[1] = items6;
      obj4[2] = ref;
      obj4[3] = callback;
      tmp28 = c4;
      obj6 = { children: null };
      obj7 = { style: null, children: null };
      obj7[0] = tmp.profileContainer;
      obj8 = { joinRequest: null, user: null, displayProfile: null };
      obj8[0] = joinRequest;
      obj8[1] = stateFromStores;
      obj8[2] = tmp6Result;
      obj7[1] = jsx(require("OpenInterviewButton"), obj8);
      obj6[0] = jsx(c4, obj7);
      obj4[4] = jsx(c4, obj6);
      items7 = [, ];
      items7[0] = jsx(require("BottomSheetModal").BottomSheetScrollView, obj4);
      obj9 = { variant: "floating", tabStyle: null, onPress: null };
      obj10 = { backgroundColor: null };
      obj10[0] = token;
      obj9[1] = obj10;
      obj9[2] = bottomSheetClose;
      items7[1] = jsx(require("ActionSheetHeaderBar").ActionSheetHeaderBar, obj9);
      obj3[5] = items7;
      obj2[3] = jsxs(require("Background").BottomSheet, obj3);
      tmp25 = jsx(require("ManaContext").ThemeContextProvider, obj2);
    }
    return tmp25;
  }
}
let c3 = importAllResult;
({ jsx: c9, jsxs: c10 } = jsxProd);
let closure_11 = createCacheKey.createStyles({ container: { flex: 1 }, profileContainer: { position: "relative" }, noPadding: { paddingHorizontal: 0 } });
const memoResult = importAllResult.memo(JoinRequestActionSheet);
let result = require("maybeApplyNoTextColorForLightCustomTheme").fileFinishedImporting("modules/guild_member_verification/native/components/JoinRequestActionSheet.tsx");

export default memoResult;
export { JoinRequestActionSheet };