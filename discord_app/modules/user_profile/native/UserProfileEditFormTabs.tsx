// discord_app/modules/user_profile/native/UserProfileEditFormTabs.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef1654 from "../../../../_runtime/metro/01654__.js";
import ChatInputUtils from "../../../utils/native/ChatInputUtils.tsx";
import UserProfileGameWidgetTypes from "../UserProfileGameWidgetTypes.tsx";
import useMeasuredLayoutDefault from "../../screen/native/useMeasuredLayout.tsx";
import UserProfileSharedStylesDefault from "UserProfileSharedStyles.tsx";
import UserProfileWidgetsBoardDefault from "UserProfileWidgetsBoard.tsx";
import UserProfileWidgetsEmptyStateDefault from "UserProfileWidgetsEmptyState.tsx";
import UserProfileTabPagesDefault from "UserProfileTabPages.tsx";
import UserProfileEditFormMainPageContextDefault from "UserProfileEditFormMainPageContext.tsx";
import UserProfileWidgetEditingHeaderDefault from "UserProfileWidgetEditingHeader.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ProfileCustomizationNavigationStore from "../../profile_customization/ProfileCustomizationNavigationStore.tsx";

const require = globalThis.__r;

require = fn;
function MainPage() {
  const tmp = closure_12();
  return React6(timestampProducer, {
    style: closure_12().page,
    children: noop.useContext(UserProfileEditFormMainPageContextDefault),
  });
}
get_ActivityIndicator = fn(17);
({ StyleSheet: hasOwnProperty, View: closure_6 } = get_ActivityIndicator);
const UserProfileSections = fn(6137).UserProfileSections;
const PROFILE_SIDE_PADDING = fn(7557).PROFILE_SIDE_PADDING;
const jsxProd = fn(21);
({ jsx: closure_9, Fragment: closure_10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5043);
let obj = {
  tabbedContainer: { marginHorizontal: -PROFILE_SIDE_PADDING },
  stickyTabs: { zIndex: 1, paddingTop: nativeDefault.space.PX_12 },
  page: null,
};
let obj3 = { zIndex: 1, paddingTop: nativeDefault.space.PX_12 };
obj.page = {
  paddingHorizontal: PROFILE_SIDE_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
let closure_12 = createStyles.createStyles(obj);
let closure_14 = {
  code: "(function UserProfileEditFormTabsTsx1(){let[stickyTranslateY]=this.__closure;return{transform:[{translateY:stickyTranslateY.get()}]};})",
};
let closure_15 = {
  code: "(function UserProfileEditFormTabsTsx2(){let[stickyTranslateY]=this.__closure;return{opacity:stickyTranslateY.get()>0?1:0};})",
};
let closure_16 = {
  code: "(function UserProfileEditFormTabsTsx3(){let[tabsState,BOARD_TAB_INDEX]=this.__closure;return tabsState.visiblePageRange.get()[1]>=BOARD_TAB_INDEX;})",
};
let closure_17 = {
  code: "(function UserProfileEditFormTabsTsx4(isOnScreen){let[isBoardTabOnScreen]=this.__closure;return isBoardTabOnScreen.set(isOnScreen);})",
};
let obj4 = {
  paddingHorizontal: PROFILE_SIDE_PADDING,
  paddingTop: nativeDefault.space.PX_24,
  gap: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditFormTabs.tsx");

export default noop.memo(function UserProfileEditFormTabs(userId) {
  userId = userId.userId;
  _require = userId;
  const containerBackground = userId.containerBackground;
  importDefault = containerBackground;
  const stickyTranslateY = userId.stickyTranslateY;
  let card;
  let first;
  absoluteFill = undefined;
  let arr5;
  closure_7 = undefined;
  ({ initialTab, hasCustomProfileTheme, scrollPosition, scrollViewRef, isBoardTabOnScreen, onStickyTabsLayout } =
    userId);
  const tmp = closure_12();
  dependencyMap = tmp;
  const themeContext = require("native").useThemeContext();
  ({ primaryColor, secondaryColor, theme } = themeContext);
  let obj = require("native");
  const gradientFallbackBackground = require("useUserProfileColors").useUserProfileColors({
    theme,
    primaryColor,
    secondaryColor,
  }).gradientFallbackBackground;
  require("useUserProfileGradientColors");
  let tmp8 = gradientFallbackBackground;
  if (null != primaryColor) {
    tmp8 = gradientFallbackBackground;
    if (null != secondaryColor) {
      tmp8 = tmp7;
    }
  }
  let obj2 = require("useUserProfileColors");
  const tmp6 = card;
  let items1 = [closure_14, stickyTranslateY];
  _require = undefined;
  [tmp9, tmp10] = items1;
  class UserProfileEditFormTabsTsx1 {
    constructor() {
      obj = { transform: null };
      obj1 = { translateY: closure_0.get() };
      items = [];
      items[0] = obj1;
      obj.transform = items;
      return obj;
    }
  }
  let items2 = [tmp10];
  UserProfileEditFormTabsTsx1.__closure = items2;
  UserProfileEditFormTabsTsx1.__workletHash = 9996648724256;
  UserProfileEditFormTabsTsx1.__initData = tmp9;
  const animatedStyle = require("../../../../_runtime/metro/01654__.js").useAnimatedStyle(UserProfileEditFormTabsTsx1);
  let tmp2Result = require("../../../../_runtime/metro/01654__.js");
  const items3 = [closure_15, stickyTranslateY];
  _require = undefined;
  [tmp12, tmp13] = items3;
  class UserProfileEditFormTabsTsx2 {
    constructor() {
      opacity = 0;
      if (closure_0.get() > 0) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items4 = [tmp13];
  UserProfileEditFormTabsTsx2.__closure = items4;
  UserProfileEditFormTabsTsx2.__workletHash = 5290718826457;
  UserProfileEditFormTabsTsx2.__initData = tmp12;
  const animatedStyle1 = require("../../../../_runtime/metro/01654__.js").useAnimatedStyle(UserProfileEditFormTabsTsx2);
  const tmp16 = UserProfileSharedStylesDefault();
  card = tmp16;
  const tmp17 = useMeasuredLayoutDefault();
  const width = tmp17.width;
  let num = 0;
  ({ ref, onLayout } = tmp17);
  if (undefined !== width) {
    num = width;
  }
  let num2 = 0;
  if (initialTab === UserProfileSections.WIDGETS) {
    num2 = 1;
  }
  const tmp6Result = tmp6(first.useState(num2), 2);
  first = tmp6Result[0];
  absoluteFill = tmp6Result[1];
  arr5 = tmp15(14566)(userId);
  closure_7 = tmp20;
  const items5 = [arr5];
  const memo = first.useMemo(() => arr5.filter(UserProfileGameWidgetTypes.isGameWidget), items5);
  const tmp2Result6 = require("../../../../_runtime/metro/01654__.js");
  const fetchSuggestedGames = require("SuggestedGameHooks").useFetchSuggestedGames(true, memo);
  const items6 = [first];
  const layoutEffect = first.useLayoutEffect(() => {
    if (1 === first) {
      let MAIN = UserProfileSections.WIDGETS;
    } else {
      MAIN = UserProfileSections.MAIN;
    }
    ProfileCustomizationNavigationStore.setState({ editingTab: MAIN });
  }, items6);
  const items7 = [userId, first, arr5.length > 0, containerBackground, tmp.page, tmp16.card];
  const callback = first.useCallback((arg0) => {
    ChatInputUtils.dismissKeyboard();
    closure_5(arg0);
  }, []);
  const memo1 = first.useMemo(() => {
    const obj = { id: UserProfileSections.MAIN, label: null, page: null };
    const intl = util.intl;
    obj.label = intl.string(util.t.LXw470);
    obj.page = React6(MainPage, {});
    items = [obj];
    const obj2 = { id: UserProfileSections.WIDGETS, label: null, page: null };
    const intl2 = util.intl;
    obj2.label = intl2.string(util.t.laViwx);
    const obj3 = { style: page.page, children: null };
    if (closure_7) {
      const obj4 = { children: null };
      const items1 = [React6(UserProfileWidgetEditingHeaderDefault, {})];
      const obj5 = { userId, isVisible: 1 === first, isEditing: true, cardStyle: null };
      const items2 = [card.card];
      const obj6 = { backgroundColor };
      items2[1] = obj6;
      obj5.cardStyle = items2;
      items1[1] = React6(UserProfileWidgetsBoardDefault, obj5);
      obj4.children = items1;
      let tmp2Result = closure_2_11(refs, obj4);
    } else {
      tmp2Result = React6(UserProfileWidgetsEmptyStateDefault, {});
    }
    obj3.children = tmp2Result;
    obj2.page = React6(timestampProducer, obj3);
    items[1] = obj2;
    return items;
  }, items7);
  const tmp2Result7 = require("SuggestedGameHooks");
  const measuredTabItems = require("UserProfileTabPages").useMeasuredTabItems(memo1);
  ({ items, pageHeights } = measuredTabItems);
  const tmp2Result8 = require("UserProfileTabPages");
  const segmentedControlState = require("SegmentedControlState").useSegmentedControlState({
    pageWidth: num,
    defaultIndex: num2,
    items,
    onPageChange: callback,
  });
  const tmp2Result9 = require("SegmentedControlState");
  const items8 = [closure_16, segmentedControlState, 1];
  _require = undefined;
  importDefault = undefined;
  [tmp28, tmp29, tmp30] = items8;
  class UserProfileEditFormTabsTsx3 {
    constructor() {
      visiblePageRange = closure_0.visiblePageRange;
      return visiblePageRange.get()[1] >= closure_1;
    }
  }
  const items9 = [tmp29, tmp30];
  UserProfileEditFormTabsTsx3.__closure = items9;
  UserProfileEditFormTabsTsx3.__workletHash = 9814947251011;
  UserProfileEditFormTabsTsx3.__initData = tmp28;
  const items10 = [closure_17, isBoardTabOnScreen];
  _require = undefined;
  [tmp31, tmp32] = items10;
  class UserProfileEditFormTabsTsx4 {
    constructor(arg0) {
      return closure_0.set(userId);
    }
  }
  const items11 = [tmp32];
  UserProfileEditFormTabsTsx4.__closure = items11;
  UserProfileEditFormTabsTsx4.__workletHash = 2474607394788;
  UserProfileEditFormTabsTsx4.__initData = tmp31;
  const animatedReaction = require("../../../../_runtime/metro/01654__.js").useAnimatedReaction(
    UserProfileEditFormTabsTsx3,
    UserProfileEditFormTabsTsx4,
  );
  let obj3 = { style: tmp.tabbedContainer, ref, onLayout, children: null };
  let obj4 = { style: null, onLayout: onStickyTabsLayout, children: null };
  const items12 = [tmp.stickyTabs, animatedStyle];
  obj4.style = items12;
  let obj5 = { pointerEvents: "none", style: null };
  const items13 = [absoluteFill.absoluteFill, { backgroundColor: tmp8 }, animatedStyle1];
  obj5.style = items13;
  const items14 = [closure_9(_modDef1654.View, obj5)];
  let obj6 = { state: segmentedControlState, variant: null };
  let str;
  if (hasCustomProfileTheme) {
    str = "overlay";
  }
  obj6.variant = str;
  items14[1] = closure_9(require("Tabs/Tabs").Tabs, obj6);
  obj4.children = items14;
  const items15 = [
    closure_11(_modDef1654.View, obj4),
    closure_9(UserProfileTabPagesDefault, { state: segmentedControlState, pageHeights, scrollPosition, scrollViewRef }),
  ];
  obj3.children = items15;
  return closure_11(arr5, obj3);
});
