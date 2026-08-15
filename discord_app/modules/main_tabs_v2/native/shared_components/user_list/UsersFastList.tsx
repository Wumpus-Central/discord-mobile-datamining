// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import _slicedToArray from "_slicedToArray";
import importAllResult from "UserRowSubLabel";
import { View } from "useScaledRowHeight";
import PX_24 from "PX_24";
import jsxProd from "module_9918";
import createCacheKey from "createCacheKey";
import { TableRowInner } from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import { styles } from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";

let c9;
let error;
let metroImportAll;
const require = arg1;
function Placeholder(arg0) {
  let end;
  let start;
  ({ start, end } = arg0);
  let obj = styles;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  obj = { end, start, label: null, icon: null, height: "100%" };
  const items = [fastestListTableRowPlaceholderStyles.placeholderUsername, callback(importAllResult.useState(() => ({ width: `${10 + 80 * Math.random() | 0}%` })), 1)[0]];
  obj[2] = callback2(View, { style: items });
  obj = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
  obj[3] = callback2(View, obj);
  return callback2(TableRowInner.TableRow, obj);
}
function PlaceholderSection() {
  return callback2(View, {});
}
let c4 = importAllResult;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = PX_24.USERS_LIST_PADDING_BETWEEN_SECTIONS;
({ jsx: error, jsxs: metroImportAll, Fragment: c9 } = jsxProd);
obj = { sectionHeader: obj, stickyHeader: null, list: null, emptySection: null, section: null, interactiveSection: null, titlePressable: null, titleRow: null, badgeWrapper: null, badge: null };
obj = { flex: 1, overflow: "hidden", top: -1 * PX_24.USERS_LIST_SECTION_BOTTOM_PADDING };
createCacheKey = { backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[1] = createCacheKey;
obj[2] = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj[3] = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj[4] = { flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS, textTransform: "none" };
let obj2 = { flex: 1, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj[5] = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - require("Themes").space.PX_8 };
let obj3 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - require("Themes").space.PX_8 };
obj[6] = { paddingVertical: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_8 };
let obj4 = { paddingVertical: require("Themes").space.PX_8, paddingRight: require("Themes").space.PX_8 };
obj[7] = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
obj[8] = { height: "100%" };
let obj6 = { position: "absolute", left: null, top: 5 };
obj6[1] = require("Themes").space.PX_4 + require("Themes").space.PX_4 / 2;
obj[9] = obj6;
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = { code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
let closure_14 = { code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}" };
let closure_15 = { code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
let closure_16 = importAllResult.memo(function UserSectionInner(stickyAt) {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let onTitlePress;
  let scrollPosValue;
  let title;
  let titleLeading;
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  let importAllResult;
  let clientThemesOverride;
  let derivedValue;
  let animatedStyle;
  ({ action, disableStickySections } = stickyAt);
  const tmp = callback3();
  importAllResult = tmp;
  const tmp4 = scrollPosValue(stickyAt[9])("UserSectionInner");
  let items = [colorOverride];
  const memo = importAllResult.useMemo(() => {
    let tmp2 = null != colorOverride;
    if (tmp2) {
      const obj = { color: null };
      obj[0] = tmp;
      tmp2 = obj;
    }
    return tmp2;
  }, items);
  let obj = colorOverride(stickyAt[10]);
  clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [, , , ];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = importAllResult.useMemo(() => {
    const items = [_undefined.section, null != onTitlePress && _undefined.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  let obj1 = colorOverride(stickyAt[11]);
  const fn = function w() {
    let value;
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
  fn.__initData = closure_13;
  derivedValue = obj1.useDerivedValue(fn);
  let obj2 = colorOverride(stickyAt[11]);
  class I {
    constructor() {
      backgroundColor = "transparent";
      if (c6.get()) {
        tmp = closure_4;
        backgroundColor = closure_4.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  I.__closure = { isSticky: derivedValue, styles: tmp };
  I.__workletHash = 6340072007400;
  I.__initData = closure_14;
  animatedStyle = obj2.useAnimatedStyle(I);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = importAllResult.useMemo(() => {
    const items = [_undefined.sectionHeader, animatedStyle];
    return items;
  }, items2);
  let obj3 = colorOverride(stickyAt[11]);
  class C {
    constructor() {
      opacity = 0;
      if (c6.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  C.__closure = { isSticky: derivedValue };
  C.__workletHash = 13270974904859;
  C.__initData = closure_15;
  const animatedStyle1 = obj3.useAnimatedStyle(C);
  if (null == title) {
    if (null == actionTitle) {
      obj = { style: null };
      obj[0] = tmp.emptySection;
      return animatedStyle(clientThemesOverride, obj);
    }
  }
  let str = "text-sm/semibold";
  if (tmp4) {
    str = "text-md/medium";
  }
  obj = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: str, color: null, style: null, children: null };
  let str2 = "interactive-text-default";
  if (tmp4) {
    str2 = "text-subtle";
  }
  obj[3] = str2;
  obj[4] = memo;
  const items3 = [title, ];
  let tmp14 = null;
  if (null != badge) {
    obj1 = { style: null, children: null };
    obj1[0] = tmp.badgeWrapper;
    obj2 = { style: null, value: null };
    obj2[0] = tmp.badge;
    obj2[1] = badge;
    obj1[1] = animatedStyle(tmp6(tmp3[13]).Badge, obj2);
    tmp14 = animatedStyle(clientThemesOverride, obj1);
  }
  items3[1] = tmp14;
  obj[5] = items3;
  let tmp13Result = tmp13(tmp6(tmp3[12]).Text, obj);
  if (null != titleLeading) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.titleRow;
    const items4 = [titleLeading, tmp13Result];
    obj3[1] = items4;
    tmp13Result = tmp13(clientThemesOverride, obj3);
  }
  let tmp20 = tmp13Result;
  if (null != onTitlePress) {
    const obj4 = { accessibilityRole: "button", style: null, onPress: null, children: null };
    obj4[1] = tmp.titlePressable;
    obj4[2] = onTitlePress;
    obj4[3] = tmp13Result;
    tmp20 = animatedStyle(tmp6(tmp3[14]).PressableOpacity, obj4);
  }
  const obj5 = { style: memo1, children: null };
  const items5 = [tmp20, ];
  let tmp23 = null;
  if (null != actionTitle) {
    const obj6 = { onPress: null, children: null };
    obj6[0] = action;
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    obj7[2] = actionTitle;
    obj6[1] = animatedStyle(tmp6(tmp3[12]).Text, obj7);
    tmp23 = animatedStyle(tmp6(tmp3[14]).PressableOpacity, obj6);
  }
  items5[1] = tmp23;
  obj5[1] = items5;
  const tmp13Result1 = closure_8(clientThemesOverride, obj5);
  let tmp13Result2 = tmp13Result1;
  if (!disableStickySections) {
    const obj8 = { style: null, children: null };
    obj8[0] = memo2;
    let tmp27 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj9 = { style: null, children: null };
      obj9[0] = animatedStyle1;
      obj9[1] = animatedStyle(tmp2(tmp3[15]), { absolute: true, tall: true, wide: true, mix: true });
      tmp27 = animatedStyle(tmp2(tmp3[11]).View, obj9);
    }
    const items6 = [tmp27, tmp13Result1];
    obj8[1] = items6;
    tmp13Result2 = tmp13(tmp2(tmp3[11]).View, obj8);
  }
  return tmp13Result2;
});
let obj5 = { flexDirection: "row", alignItems: "center", gap: require("Themes").space.PX_4 };
const forwardRefResult = importAllResult.forwardRef(function UsersFastListInner(getItemProps, ref) {
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let listHeaderSize;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  getItemProps = getItemProps.getItemProps;
  const getSectionProps = getItemProps.getSectionProps;
  ({ getItemSize, insetEnd } = getItemProps);
  ({ sections, insetStart } = getItemProps);
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
  let c6;
  let c7;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onScroll, onLayout, renderListHeader } = getItemProps);
  let tmp = callback3();
  c6 = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[16])().bottom;
  }
  const sum = insetEnd + num;
  const tmp6 = getSectionProps(flag2[18])();
  c7 = tmp6;
  let obj = getItemProps(tmp3[10]);
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
      return _undefined2(outer1_12, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj.disableStickySections = flag2;
      obj.disableThemedGradient = disableThemedGradient;
      obj.scrollPosValue = scrollPosValue;
      obj.stickyAt = stickyAt;
      return _undefined2(outer1_16, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp6];
  const callback1 = disableBackgroundOverlay.useCallback((arg0, arg1) => {
    const element = getItemProps(arg0, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      let obj = {};
      const merged = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[19]), obj);
    } else if ("placeholder" === type) {
      obj = {};
      const merged1 = Object.assign(element.props);
      return _undefined2(outer1_11, obj);
    } else if ("gdm" === type) {
      const obj1 = {};
      const merged2 = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[20]), obj1);
    } else if ("channel" === type) {
      const obj2 = {};
      const merged3 = Object.assign(element.props);
      return _undefined2(getSectionProps(flag2[21]), obj2);
    } else if ("custom" === type) {
      obj = { children: null };
      obj[0] = element.component();
      return _undefined2(outer1_9, obj);
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
      return c7;
    } else if ("section" === type) {
      if (element.props.hideTitle) {
        return 0;
      }
    } else {
      return 0;
    }
  }, items2);
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [_undefined.list, , ];
    let tmp = disableBackgroundOverlay;
    if (disableBackgroundOverlay) {
      tmp = clientThemesOverride;
    }
    items[1] = tmp;
    items[2] = listStyleOverride;
    return items;
  }, items3);
  const tmp5 = getSectionProps(flag2[17])();
  obj = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", ref, style: memo, itemSize: null, renderItem: null, renderListHeader: null, renderSectionHeader: null, insetStart: null, insetEnd: null, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", inActionSheet: null, onScroll: null, onLayout: null, placeholderConfig: null, listId: "users-fast-list", listHeaderSize: null, listHeaderAlwaysMounted: true, scrollReporting: "callbacks", wrapChildren: true };
  const tmp12 = getSectionProps(flag2[7])();
  const tmp13 = c7;
  if (getItemSize == null) {
    getItemSize = tmp5;
  }
  obj[6] = getItemSize;
  obj[7] = callback1;
  obj[8] = renderListHeader;
  obj[9] = callback;
  obj[10] = insetStart;
  obj[11] = sum;
  obj[14] = inActionSheet;
  obj[15] = onScroll;
  obj[16] = onLayout;
  obj[17] = tmp12;
  obj[19] = listHeaderSize;
  return tmp13(getSectionProps(flag2[22]), obj);
});
const result = require("get ActivityIndicator").fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = forwardRefResult;