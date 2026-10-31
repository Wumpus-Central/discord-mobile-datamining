// === Module 10733: UsersFastList ===

// Module 10733 (UsersFastList)
import nativeDefault from "native" /* 575 */;
import native from "native" /* 1187 */;
import ReanimatedRexport from "ReanimatedRexport" /* 5095 */;
import Text_Text from "Text/Text" /* 5624 */;
import TableRow from "TableRow" /* 6975 */;
import Pressables from "Pressables" /* 6980 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 9821 */;
import useFastestListTableRowPlaceholderConfig from "useFastestListTableRowPlaceholderConfig" /* 10735 */;
import ThemedGradientDefault from "ThemedGradient" /* 10736 */;
import UserRowDefault from "UserRow" /* 10738 */;
import GroupDMRowDefault from "GroupDMRow" /* 10798 */;
import ChannelRowDefault from "ChannelRow" /* 10801 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const ReanimatedRexportDefault = ReanimatedRexport;

require = fn;
function Placeholder(arg0) {
  ({ start, end } = arg0);
  const fastestListTableRowPlaceholderStyles = useFastestListTableRowPlaceholderConfig.useFastestListTableRowPlaceholderStyles();
  const obj2 = { end, start, label: null, icon: null, height: "100%" };
  const obj3 = { style: null };
  const items = [fastestListTableRowPlaceholderStyles.placeholderUsername, _slicedToArray(noop.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj3.style = items;
  obj2.label = React5(View, obj3);
  obj2.icon = React5(View, { style: fastestListTableRowPlaceholderStyles.placeholderAvatar });
  return React5(TableRow.TableRow, obj2);
}
function PlaceholderSection() {
  return React5(View, {});
}
const View = fn(17).View;
const UsersFastListConstants = fn(10734);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5014);
let obj = { sectionHeader: { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING }, stickyHeader: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND }, list: null, emptySection: null, section: null, interactiveSection: null, titlePressable: null, titleRow: null, badgeWrapper: null, badge: null };
let obj3 = { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj.list = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.emptySection = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj.section = { flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS, textTransform: "none" };
let obj5 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj.interactiveSection = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
let obj6 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
obj.titlePressable = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
let obj7 = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
obj.badgeWrapper = { height: "100%" };
const rect = { position: "absolute", left: nativeDefault.space.PX_4 + nativeDefault.space.PX_4 / 2, top: 5 };
obj.badge = rect;
let closure_10 = createStyles.createStyles(obj);
const __initData = { code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
const __initData2 = { code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}" };
const __initData3 = { code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
let closure_16 = noop.memo(function UserSectionInner(stickyAt) {
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  let derivedValue;
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
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  const items1 = [, , , ];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = noop.useMemo(() => {
    const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  class C {
    constructor() {
      obj = scrollPosValue;
      value = undefined;
      if (scrollPosValue != null) {
        value = obj.get();
      }
      tmp2 = null != value;
      if (tmp2) {
        tmp3 = stickyAt;
        tmp2 = null != stickyAt;
      }
      if (tmp2) {
        tmp4 = stickyAt;
        tmp2 = value >= stickyAt;
      }
      return tmp2;
    }
  }
  C.__closure = { scrollPosValue, stickyAt };
  C.__workletHash = 15448160320615;
  C.__initData = __initData;
  derivedValue = ReanimatedRexport.useDerivedValue(C);
  class H {
    constructor() {
      backgroundColor = "transparent";
      if (closure_6.get()) {
        tmp = closure_4;
        backgroundColor = closure_4.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  H.__closure = { isSticky: derivedValue, styles: tmp };
  H.__workletHash = 6340072007400;
  H.__initData = __initData2;
  animatedStyle = ReanimatedRexport.useAnimatedStyle(H);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = noop.useMemo(() => {
    const items = [closure_4.sectionHeader, animatedStyle];
    return items;
  }, items2);
  const fn = function w() {
    let opacity = 0;
    if (derivedValue.get()) {
      opacity = 1;
    }
    return { opacity };
  };
  fn.__closure = { isSticky: derivedValue };
  fn.__workletHash = 13270974904859;
  fn.__initData = __initData3;
  const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(fn);
  if (null == title) {
    if (null == actionTitle) {
      const obj5 = { style: tmp.emptySection };
      return React5(View, obj5);
    }
  }
  const obj6 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: memo, children: null };
  const items3 = [title, ];
  let tmp12 = null;
  if (null != badge) {
    const obj7 = { style: tmp.badgeWrapper, children: null };
    const obj8 = { style: tmp.badge, value: badge };
    obj7.children = React5(native.Badge, obj8);
    tmp12 = React5(View, obj7);
  }
  items3[1] = tmp12;
  obj6.children = items3;
  const tmp11Result = React6(Text_Text.Text, obj6);
  let tmp11Result4 = tmp11Result;
  if (null != titleLeading) {
    const obj9 = { style: tmp.titleRow, children: null };
    const items4 = [titleLeading, tmp11Result];
    obj9.children = items4;
    tmp11Result4 = React6(View, obj9);
  }
  let tmp18 = tmp11Result4;
  if (null != onTitlePress) {
    const obj10 = { accessibilityRole: "button", style: tmp.titlePressable, onPress: onTitlePress, children: tmp11Result4 };
    tmp18 = React5(Pressables.PressableOpacity, obj10);
  }
  const obj11 = { style: memo1, children: null };
  const items5 = [tmp18, ];
  let tmp21 = null;
  if (null != actionTitle) {
    const obj12 = { onPress: action, children: null };
    const obj13 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    obj12.children = React5(Text_Text.Text, obj13);
    tmp21 = React5(Pressables.PressableOpacity, obj12);
  }
  items5[1] = tmp21;
  obj11.children = items5;
  const tmp11Result5 = React6(View, obj11);
  let tmp11Result6 = tmp11Result5;
  if (!disableStickySections) {
    const obj14 = { style: memo2, children: null };
    let tmp26 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj15 = { style: animatedStyle1, children: React5(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }) };
      tmp26 = React5(ReanimatedRexportDefault.View, obj15);
    }
    const items6 = [tmp26, tmp11Result5];
    obj14.children = items6;
    tmp11Result6 = React6(ReanimatedRexportDefault.View, obj14);
  }
  return tmp11Result6;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = function UsersFastListInner(onSelectUser) {
  ({ sections, getItemProps } = onSelectUser);
  const getSectionProps = onSelectUser.getSectionProps;
  ({ getItemSize, keyExtractor, insetStart, insetEnd } = onSelectUser);
  if (insetEnd === undefined) {
    insetEnd = 0;
  }
  let flag = onSelectUser.disableBottomSafeZone;
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = onSelectUser.disableStickySections;
  if (flag2 === undefined) {
    flag2 = false;
  }
  const disableThemedGradient = onSelectUser.disableThemedGradient;
  const disableBackgroundOverlay = onSelectUser.disableBackgroundOverlay;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader, listStyleOverride } = onSelectUser);
  closure_7 = undefined;
  let clientThemesOverride;
  let tmp = closure_10();
  const list = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[15])().bottom;
  }
  const sum = insetEnd + num;
  const tmp5 = getSectionProps(flag2[16])();
  const tmp6 = getSectionProps(flag2[17])();
  closure_7 = tmp6;
  clientThemesOverride = getItemProps(flag2[9]).useClientThemesOverride();
  let items = [getSectionProps, flag2, disableThemedGradient];
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
  const items1 = [getItemProps];
  const callback1 = disableBackgroundOverlay.useCallback((flag2, arg1) => {
    const element = getItemProps(flag2, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      const obj2 = {};
      const merged = Object.assign(element.props);
      return React5(UserRowDefault, obj2);
    } else if ("placeholder" === type) {
      const obj3 = {};
      const merged1 = Object.assign(element.props);
      return React5(Placeholder, obj3);
    } else if ("gdm" === type) {
      const obj4 = {};
      const merged2 = Object.assign(element.props);
      return React5(GroupDMRowDefault, obj4);
    } else if ("channel" === type) {
      const obj5 = {};
      const merged3 = Object.assign(element.props);
      return React5(ChannelRowDefault, obj5);
    } else if ("custom" === type) {
      const obj = { children: element.component() };
      return React5(React7, obj);
    } else {
      return null;
    }
  }, items1);
  const items2 = [getSectionProps, tmp6];
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
  const items3 = [tmp.list, disableBackgroundOverlay, clientThemesOverride, listStyleOverride];
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [list.list, , ];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  let obj = getItemProps(flag2[9]);
  const tmp12 = getSectionProps(flag2[7])();
  if ("legend" === tmp2Result.useConfig({ location: "Users List" }).list) {
    let obj2 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, keyExtractor, ref, style: memo, itemSize: null, renderItem: null, renderListHeader: null, renderSectionHeader: null, insetStart: null, insetEnd: null, inActionSheet: null, onContentLengthChange: null, onScroll: null, onLayout: null, listHeaderSize: null };
    if (getItemSize == null) {
      getItemSize = tmp5;
    }
    obj2.itemSize = getItemSize;
    obj2.renderItem = callback1;
    obj2.renderListHeader = renderListHeader;
    obj2.renderSectionHeader = callback;
    obj2.insetStart = insetStart;
    obj2.insetEnd = sum;
    obj2.inActionSheet = inActionSheet;
    obj2.onContentLengthChange = onContentLengthChange;
    obj2.onScroll = onScroll;
    obj2.onLayout = onLayout;
    obj2.listHeaderSize = listHeaderSize;
    let tmp13Result = closure_7(tmp2(tmp3[22]), obj2);
    const tmp2Result3 = tmp2(tmp3[22]);
  } else {
    let obj3 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", keyExtractor, ref, style: memo, itemSize: null, renderItem: null, renderListHeader: null, renderSectionHeader: null, insetStart: null, insetEnd: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", inActionSheet: null, onContentLengthChange: null, onScroll: null, onLayout: null, placeholderConfig: null, listId: "users-fast-list", listHeaderSize: null, listHeaderAlwaysMounted: true, scrollReporting: "callbacks", wrapChildren: true };
    let tmp16 = getItemSize;
    if (getItemSize == null) {
      tmp16 = tmp5;
    }
    obj3.itemSize = tmp16;
    obj3.renderItem = callback1;
    obj3.renderListHeader = renderListHeader;
    obj3.renderSectionHeader = callback;
    obj3.insetStart = insetStart;
    obj3.insetEnd = sum;
    obj3.inActionSheet = inActionSheet;
    obj3.onContentLengthChange = onContentLengthChange;
    obj3.onScroll = onScroll;
    obj3.onLayout = onLayout;
    obj3.placeholderConfig = tmp12;
    obj3.listHeaderSize = listHeaderSize;
    tmp13Result = closure_7(tmp2(tmp3[23]), obj3);
    const tmp2Result4 = tmp2(tmp3[23]);
  }
  return tmp13Result;
};