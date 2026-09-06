// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import ReanimatedRexport from "../../../../reanimated/ReanimatedRexport.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import ClientThemesOverrides from "../../../../client_themes/native/ClientThemesOverrides.tsx";
import useFastestListTableRowPlaceholderConfig from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import UserRowDefault from "UserRow.tsx";
import GroupDMRowDefault from "GroupDMRow.tsx";
import ChannelRowDefault from "ChannelRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function Placeholder(arg0) {
  ({ start, end } = arg0);
  let obj = useFastestListTableRowPlaceholderConfig;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  obj = { end, start, label: null, icon: null, height: "100%" };
  obj = { style: null };
  const items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    _slicedToArray(
      noop.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
      1,
    )[0],
  ];
  obj.style = items;
  obj.label = React5(View, obj);
  obj.icon = React5(View, { style: fastestListTableRowPlaceholderStyles.placeholderAvatar });
  return React5(TableRow.TableRow, obj);
}
function PlaceholderSection() {
  return React5(View, {});
}
const View = fn(17).View;
const UsersFastListConstants = fn(10213);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
fn(4560);
let obj = {
  sectionHeader: null,
  stickyHeader: null,
  list: null,
  emptySection: null,
  section: null,
  interactiveSection: null,
  titlePressable: null,
  titleRow: null,
  badgeWrapper: null,
  badge: null,
};
obj = { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING };
obj.sectionHeader = obj;
const createStyles = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.stickyHeader = createStyles;
obj.list = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.emptySection = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj.section = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS,
  textTransform: "none",
};
let obj2 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.interactiveSection = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
let obj3 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
obj.titlePressable = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
let obj4 = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.badgeWrapper = { height: "100%" };
const rect = { position: "absolute", left: nativeDefault.space.PX_4 + nativeDefault.space.PX_4 / 2, top: 5 };
obj.badge = rect;
let closure_10 = createStyles.createStyles(obj);
const __initData = {
  code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}",
};
const __initData2 = {
  code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}",
};
const __initData3 = {
  code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}",
};
let closure_16 = noop.memo(function UserSectionInner(stickyAt) {
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  let animatedStyle;
  ({ action, disableStickySections } = stickyAt);
  const tmp = closure_10();
  noop = tmp;
  let items = [colorOverride];
  const memo = noop.useMemo(() => {
    let tmp2 = null != colorOverride;
    if (tmp2) {
      const obj = { color: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  let obj = ClientThemesOverrides;
  const clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [, , ,];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = noop.useMemo(() => {
    const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  let obj1 = ReanimatedRexport;
  const fn = function w() {
    value = undefined;
    if (scrollPosValue != null) {
      value = scrollPosValue.get();
    }
    let tmp2 = null != value;
    if (tmp2) {
      tmp2 = null != stickyAt;
    }
    if (tmp2) {
      tmp2 = value >= stickyAt;
    }
    return tmp2;
  };
  fn.__closure = { scrollPosValue, stickyAt };
  fn.__workletHash = 15448160320615;
  fn.__initData = __initData;
  const derivedValue = obj1.useDerivedValue(fn);
  let obj2 = ReanimatedRexport;
  class C {
    constructor() {
      backgroundColor = "transparent";
      if (closure_6.get()) {
        tmp = closure_4;
        backgroundColor = closure_4.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  C.__closure = { isSticky: derivedValue, styles: tmp };
  C.__workletHash = 6340072007400;
  C.__initData = __initData2;
  animatedStyle = obj2.useAnimatedStyle(C);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = noop.useMemo(() => {
    const items = [closure_4.sectionHeader, animatedStyle];
    return items;
  }, items2);
  let obj3 = ReanimatedRexport;
  class H {
    constructor() {
      opacity = 0;
      if (closure_6.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  H.__closure = { isSticky: derivedValue };
  H.__workletHash = 13270974904859;
  H.__initData = __initData3;
  const animatedStyle1 = obj3.useAnimatedStyle(H);
  if (null == title) {
    if (null == actionTitle) {
      obj = { style: tmp.emptySection };
      return React5(View, obj);
    }
  }
  obj = {
    maxFontSizeMultiplier: 2,
    accessibilityRole: "header",
    variant: "text-md/medium",
    color: "text-subtle",
    style: memo,
    children: null,
  };
  const items3 = [title];
  let tmp12 = null;
  if (null != badge) {
    obj1 = { style: tmp.badgeWrapper, children: null };
    obj2 = { style: tmp.badge, value: badge };
    obj1.children = React5(native.Badge, obj2);
    tmp12 = React5(View, obj1);
  }
  items3[1] = tmp12;
  obj.children = items3;
  let tmp11Result = React6(Text_Text.Text, obj);
  if (null != titleLeading) {
    obj3 = { style: tmp.titleRow, children: null };
    const items4 = [titleLeading, tmp11Result];
    obj3.children = items4;
    tmp11Result = React6(View, obj3);
  }
  let tmp18 = tmp11Result;
  if (null != onTitlePress) {
    const obj4 = {
      accessibilityRole: "button",
      style: tmp.titlePressable,
      onPress: onTitlePress,
      children: tmp11Result,
    };
    tmp18 = React5(Pressables.PressableOpacity, obj4);
  }
  const obj5 = { style: memo1, children: null };
  const items5 = [tmp18];
  let tmp21 = null;
  if (null != actionTitle) {
    const obj6 = { onPress: action, children: null };
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    obj6.children = React5(Text_Text.Text, obj7);
    tmp21 = React5(Pressables.PressableOpacity, obj6);
  }
  items5[1] = tmp21;
  obj5.children = items5;
  const tmp11Result1 = React6(View, obj5);
  let tmp11Result2 = tmp11Result1;
  if (!disableStickySections) {
    const obj8 = { style: memo2, children: null };
    let tmp26 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj9 = {
        style: animatedStyle1,
        children: React5(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }),
      };
      tmp26 = React5(ReanimatedRexportDefault.View, obj9);
    }
    const items6 = [tmp26, tmp11Result1];
    obj8.children = items6;
    tmp11Result2 = React6(ReanimatedRexportDefault.View, obj8);
  }
  return tmp11Result2;
});
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = noop.forwardRef(function UsersFastListInner(getItemProps, ref) {
  getItemProps = getItemProps.getItemProps;
  const getSectionProps = getItemProps.getSectionProps;
  ({ getItemSize, insetEnd } = getItemProps);
  ({ sections, keyExtractor, insetStart } = getItemProps);
  if (insetEnd === undefined) {
    insetEnd = 0;
  }
  let flag = getItemProps.disableBottomSafeZone;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = getItemProps.disableStickySections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const disableThemedGradient = getItemProps.disableThemedGradient;
  const disableBackgroundOverlay = getItemProps.disableBackgroundOverlay;
  const listStyleOverride = getItemProps.listStyleOverride;
  closure_7 = undefined;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader } = getItemProps);
  let tmp = closure_10();
  const list = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[15])().bottom;
  }
  const sum = insetEnd + num;
  const tmp6 = getSectionProps(flag2[17])();
  closure_7 = tmp6;
  let obj = getItemProps(tmp3[9]);
  clientThemesOverride = obj.useClientThemesOverride();
  let items = [getSectionProps, flag2, disableThemedGradient];
  const items1 = [getItemProps];
  const callback = disableBackgroundOverlay.useCallback((arg0, arg1, scrollPosValue, stickyAt) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return React5(PlaceholderSection, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj.disableStickySections = flag2;
      obj.disableThemedGradient = disableThemedGradient;
      obj.scrollPosValue = scrollPosValue;
      obj.stickyAt = stickyAt;
      return React5(closure_16, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp6];
  const callback1 = disableBackgroundOverlay.useCallback((flag2, arg1) => {
    const element = getItemProps(flag2, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      let obj = {};
      const merged = Object.assign(element.props);
      return React5(UserRowDefault, obj);
    } else if ("placeholder" === type) {
      obj = {};
      const merged1 = Object.assign(element.props);
      return React5(Placeholder, obj);
    } else if ("gdm" === type) {
      const obj1 = {};
      const merged2 = Object.assign(element.props);
      return React5(GroupDMRowDefault, obj1);
    } else if ("channel" === type) {
      const obj2 = {};
      const merged3 = Object.assign(element.props);
      return React5(ChannelRowDefault, obj2);
    } else if ("custom" === type) {
      obj = { children: element.component() };
      return React5(React7, obj);
    } else {
      return null;
    }
  }, items1);
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const callback2 = disableBackgroundOverlay.useCallback((arg0) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return closure_7;
    } else if ("section" === type) {
      if (element.props.hideTitle) {
        return 0;
      }
    } else {
      return 0;
    }
  }, items2);
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [list.list, ,];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  const tmp5 = getSectionProps(flag2[16])();
  obj = {
    sections,
    sectionHeaderIsSticky: !flag2,
    sectionHeaderSize: callback2,
    estimatedListSize: "windowSize",
    keyExtractor,
    ref,
    style: memo,
    itemSize: null,
    renderItem: null,
    renderListHeader: null,
    renderSectionHeader: null,
    insetStart: null,
    insetEnd: null,
    keyboardDismissMode: "on-drag",
    keyboardShouldPersistTaps: "always",
    inActionSheet: null,
    onContentLengthChange: null,
    onScroll: null,
    onLayout: null,
    placeholderConfig: null,
    listId: "users-fast-list",
    listHeaderSize: null,
    listHeaderAlwaysMounted: true,
    scrollReporting: "callbacks",
    wrapChildren: true,
  };
  const tmp12 = getSectionProps(flag2[7])();
  const tmp13 = closure_7;
  if (getItemSize == null) {
    getItemSize = tmp5;
  }
  obj.itemSize = getItemSize;
  obj.renderItem = callback1;
  obj.renderListHeader = renderListHeader;
  obj.renderSectionHeader = callback;
  obj.insetStart = insetStart;
  obj.insetEnd = sum;
  obj.inActionSheet = inActionSheet;
  obj.onContentLengthChange = onContentLengthChange;
  obj.onScroll = onScroll;
  obj.onLayout = onLayout;
  obj.placeholderConfig = tmp12;
  obj.listHeaderSize = listHeaderSize;
  return tmp13(getSectionProps(flag2[21]), obj);
});
