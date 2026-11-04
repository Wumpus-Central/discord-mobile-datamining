// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import _mod1652 from "../../../../../../_runtime/metro/01652__.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TableRow from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import Pressables from "../../../../../design/void/Pressables/native/Pressables.tsx";
import ClientThemesOverrides from "../../../../client_themes/native/ClientThemesOverrides.tsx";
import useFastestListTableRowPlaceholderConfig from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import ThemedGradientDefault from "../../../../client_themes/native/ThemedGradient.tsx";
import UserRowDefault from "UserRow.tsx";
import GroupDMRowDefault from "GroupDMRow.tsx";
import ChannelRowDefault from "ChannelRow.tsx";
import _slicedToArray from "../../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

const _modDef1652 = _mod1652;

require = fn;
function Placeholder(arg0) {
  ({ start, end } = arg0);
  const fastestListTableRowPlaceholderStyles =
    useFastestListTableRowPlaceholderConfig.useFastestListTableRowPlaceholderStyles();
  const obj2 = { end, start, label: null, icon: null, height: "100%" };
  const obj3 = { style: null };
  items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    _slicedToArray(
      noop.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
      1,
    )[0],
  ];
  obj3.style = items;
  obj2.label = metroImportDefault(View, obj3);
  obj2.icon = metroImportDefault(View, { style: fastestListTableRowPlaceholderStyles.placeholderAvatar });
  return metroImportDefault(TableRow.TableRow, obj2);
}
function PlaceholderSection() {
  return metroImportDefault(View, {});
}
const View = fn(17).View;
const UsersFastListConstants = fn(10912);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const jsxProd = fn(21);
({ jsx: metroImportDefault, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(5141);
let obj = {
  sectionHeader: { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING },
  stickyHeader: { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND },
  list: null,
  emptySection: null,
  section: null,
  interactiveSection: null,
  titlePressable: null,
  titleRow: null,
  badgeWrapper: null,
  badge: null,
};
let obj3 = { flex: 1, overflow: "hidden", top: -1 * UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING };
let obj4 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
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
let closure_13 = {
  code: "(function UsersFastListTsx1(){let[scrollPosValue,stickyAt]=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;})",
};
let closure_14 = {
  code: "(function UsersFastListTsx2(){let[isSticky,styles]=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};})",
};
let closure_15 = {
  code: "(function UsersFastListTsx3(){let[isSticky]=this.__closure;return{opacity:isSticky.get()?1:0};})",
};
let closure_16 = noop.memo(function UserSectionInner(arg0) {
  ({ title, colorOverride } = arg0);
  ({ actionTitle, badge, disableThemedGradient, titleLeading, onTitlePress } = arg0);
  let animatedStyle;
  ({ action, scrollPosValue, stickyAt, disableStickySections } = arg0);
  const tmp = closure_10();
  closure_2 = tmp;
  items = [colorOverride];
  const memo = noop.useMemo(() => {
    let tmp2 = null != c0;
    if (tmp2) {
      const obj = { color: tmp };
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
  const items1 = [, , ,];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = noop.useMemo(() => {
    items = [closure_2.section, null != c1 && closure_2.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  const items2 = [closure_13, scrollPosValue, stickyAt];
  c0 = undefined;
  c1 = undefined;
  [tmp7, tmp8, tmp9] = items2;
  class UsersFastListTsx1 {
    constructor() {
      obj = closure_0;
      value = undefined;
      if (closure_0 != null) {
        value = obj.get();
      }
      tmp2 = null != value;
      if (tmp2) {
        tmp3 = closure_1;
        tmp2 = null != closure_1;
      }
      if (tmp2) {
        tmp4 = closure_1;
        tmp2 = value >= closure_1;
      }
      return tmp2;
    }
  }
  const items3 = [tmp8, tmp9];
  UsersFastListTsx1.__closure = items3;
  UsersFastListTsx1.__workletHash = 5651317094590;
  UsersFastListTsx1.__initData = tmp7;
  const derivedValue = _mod1652.useDerivedValue(UsersFastListTsx1);
  const items4 = [closure_14, derivedValue, tmp];
  c0 = undefined;
  c1 = undefined;
  [tmp11, tmp12, tmp13] = items4;
  class UsersFastListTsx2 {
    constructor() {
      backgroundColor = "transparent";
      if (closure_0.get()) {
        tmp = closure_1;
        backgroundColor = closure_1.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  const items5 = [tmp12, tmp13];
  UsersFastListTsx2.__closure = items5;
  UsersFastListTsx2.__workletHash = 3082250653169;
  UsersFastListTsx2.__initData = tmp11;
  animatedStyle = _mod1652.useAnimatedStyle(UsersFastListTsx2);
  const items6 = [tmp.sectionHeader, animatedStyle];
  const memo2 = noop.useMemo(() => {
    items = [closure_2.sectionHeader, animatedStyle];
    return items;
  }, items6);
  const tmp3Result = _mod1652;
  const items7 = [closure_15, derivedValue];
  c0 = undefined;
  [tmp16, tmp17] = items7;
  class UsersFastListTsx3 {
    constructor() {
      opacity = 0;
      if (closure_0.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  const items8 = [tmp17];
  UsersFastListTsx3.__closure = items8;
  UsersFastListTsx3.__workletHash = 4870088856322;
  UsersFastListTsx3.__initData = tmp16;
  const animatedStyle1 = _mod1652.useAnimatedStyle(UsersFastListTsx3);
  if (null == title) {
    if (null == actionTitle) {
      const obj4 = { style: tmp.emptySection };
      return metroImportDefault(View, obj4);
    }
  }
  const obj5 = {
    maxFontSizeMultiplier: 2,
    accessibilityRole: "header",
    variant: "body-md/medium",
    color: "text-subtle",
    style: memo,
    children: null,
  };
  const items9 = [title];
  let tmp20 = null;
  if (null != badge) {
    const obj6 = { style: tmp.badgeWrapper, children: null };
    const obj7 = { style: tmp.badge, value: badge };
    obj6.children = metroImportDefault(native.Badge, obj7);
    tmp20 = metroImportDefault(View, obj6);
  }
  items9[1] = tmp20;
  obj5.children = items9;
  const tmp19Result = React5(Text_Text.Text, obj5);
  let tmp19Result4 = tmp19Result;
  if (null != titleLeading) {
    const obj8 = { style: tmp.titleRow, children: null };
    const items10 = [titleLeading, tmp19Result];
    obj8.children = items10;
    tmp19Result4 = React5(View, obj8);
  }
  let tmp26 = tmp19Result4;
  if (null != onTitlePress) {
    const obj9 = {
      accessibilityRole: "button",
      style: tmp.titlePressable,
      onPress: onTitlePress,
      children: tmp19Result4,
    };
    tmp26 = metroImportDefault(Pressables.PressableOpacity, obj9);
  }
  const obj10 = { style: memo1, children: null };
  const items11 = [tmp26];
  let tmp29 = null;
  if (null != actionTitle) {
    const obj11 = { onPress: action, children: null };
    const obj12 = { variant: "body-sm/semibold", color: "text-brand", children: actionTitle };
    obj11.children = metroImportDefault(Text_Text.Text, obj12);
    tmp29 = metroImportDefault(Pressables.PressableOpacity, obj11);
  }
  items11[1] = tmp29;
  obj10.children = items11;
  const tmp19Result5 = React5(View, obj10);
  let tmp19Result6 = tmp19Result5;
  if (!disableStickySections) {
    const obj13 = { style: memo2, children: null };
    let tmp34 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj14 = {
        style: animatedStyle1,
        children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }),
      };
      tmp34 = metroImportDefault(_modDef1652.View, obj14);
    }
    const items12 = [tmp34, tmp19Result5];
    obj13.children = items12;
    tmp19Result6 = React5(_modDef1652.View, obj13);
  }
  return tmp19Result6;
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
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader, listStyleOverride } =
    onSelectUser);
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
  items = [getSectionProps, flag2, disableThemedGradient];
  const callback = disableBackgroundOverlay.useCallback((arg0, arg1, scrollPosValue, stickyAt) => {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return metroImportDefault(PlaceholderSection, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj.disableStickySections = flag2;
      obj.disableThemedGradient = disableThemedGradient;
      obj.scrollPosValue = scrollPosValue;
      obj.stickyAt = stickyAt;
      return metroImportDefault(closure_16, obj);
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
      return metroImportDefault(UserRowDefault, obj2);
    } else if ("placeholder" === type) {
      const obj3 = {};
      const merged1 = Object.assign(element.props);
      return metroImportDefault(Placeholder, obj3);
    } else if ("gdm" === type) {
      const obj4 = {};
      const merged2 = Object.assign(element.props);
      return metroImportDefault(GroupDMRowDefault, obj4);
    } else if ("channel" === type) {
      const obj5 = {};
      const merged3 = Object.assign(element.props);
      return metroImportDefault(ChannelRowDefault, obj5);
    } else if ("custom" === type) {
      const obj = { children: element.component() };
      return metroImportDefault(React6, obj);
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
    items = [list.list, ,];
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
    let obj2 = {
      sections,
      sectionHeaderIsSticky: !flag2,
      sectionHeaderSize: callback2,
      keyExtractor,
      ref,
      style: memo,
      itemSize: null,
      renderItem: null,
      renderListHeader: null,
      renderSectionHeader: null,
      insetStart: null,
      insetEnd: null,
      inActionSheet: null,
      onContentLengthChange: null,
      onScroll: null,
      onLayout: null,
      listHeaderSize: null,
    };
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
    let obj3 = {
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
