// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import ThemesDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import TableRowInner from "../../../../../design/components/TableRow/native/TableRow.native.tsx";
import styles from "../../../../fastest_list/placeholders/useFastestListTableRowPlaceholderConfig.native.tsx";
import closure_3 from "../../../../../../_runtime/metro/00032__slicedToArray.js";
import importAllResult from "../../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../../_runtime/00017_get_ActivityIndicator.js";
import PX_24 from "UsersFastListConstants.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function Placeholder(arg0) {
  ({ start, end } = arg0);
  let obj = styles;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  obj = { end, start, label: null, icon: null, height: "100%" };
  const items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    callback(
      importAllResult.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
      1,
    )[0],
  ];
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
({ jsx: error, jsxs: closure_8, Fragment: c9 } = jsxProd);
obj = {
  sectionHeader: obj,
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
obj = { flex: 1, overflow: "hidden", top: -1 * PX_24.USERS_LIST_SECTION_BOTTOM_PADDING };
createCacheKey = { backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
obj[1] = createCacheKey;
obj[2] = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj[3] = { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS };
obj[4] = {
  flex: 1,
  display: "flex",
  flexDirection: "row",
  alignItems: "flex-start",
  justifyContent: "space-between",
  paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS,
  textTransform: "none",
};
let obj2 = { flex: 1, backgroundColor: ThemesDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj[5] = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - ThemesDefault.space.PX_8 };
let obj3 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - ThemesDefault.space.PX_8 };
obj[6] = { paddingVertical: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_8 };
let obj4 = { paddingVertical: ThemesDefault.space.PX_8, paddingRight: ThemesDefault.space.PX_8 };
obj[7] = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[8] = { height: "100%" };
let obj5 = { flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_4 };
obj[9] = { position: "absolute", left: ThemesDefault.space.PX_4 + ThemesDefault.space.PX_4 / 2, top: 5 };
let closure_10 = createCacheKey.createStyles(obj);
let closure_13 = {
  code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}",
};
let closure_14 = {
  code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}",
};
let closure_15 = {
  code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}",
};
let closure_16 = importAllResult.memo(function UserSectionInner(stickyAt) {
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  importAllResult = undefined;
  let clientThemesOverride;
  let derivedValue;
  let animatedStyle;
  ({ action, disableStickySections } = stickyAt);
  const tmp = callback3();
  importAllResult = tmp;
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
  let obj = colorOverride(stickyAt[9]);
  clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [, , ,];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = importAllResult.useMemo(() => {
    const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  obj1 = colorOverride(stickyAt[10]);
  const fn = function x() {
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
  let obj2 = colorOverride(stickyAt[10]);
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
  C.__initData = closure_14;
  animatedStyle = obj2.useAnimatedStyle(C);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = importAllResult.useMemo(() => {
    const items = [closure_4.sectionHeader, animatedStyle];
    return items;
  }, items2);
  let obj3 = colorOverride(stickyAt[10]);
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
  H.__initData = closure_15;
  const animatedStyle1 = obj3.useAnimatedStyle(H);
  if (null == title) {
    if (null == actionTitle) {
      obj = { style: null };
      obj[0] = tmp.emptySection;
      return animatedStyle(clientThemesOverride, obj);
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
    obj1 = { style: null, children: null };
    obj1[0] = tmp.badgeWrapper;
    obj2 = { style: null, value: null };
    obj2[0] = tmp.badge;
    obj2[1] = badge;
    obj1[1] = animatedStyle(tmp3(tmp4[12]).Badge, obj2);
    tmp12 = animatedStyle(clientThemesOverride, obj1);
  }
  items3[1] = tmp12;
  obj[5] = items3;
  let tmp11Result = tmp11(tmp3(tmp4[11]).Text, obj);
  if (null != titleLeading) {
    obj3 = { style: null, children: null };
    obj3[0] = tmp.titleRow;
    const items4 = [titleLeading, tmp11Result];
    obj3[1] = items4;
    tmp11Result = tmp11(clientThemesOverride, obj3);
  }
  let tmp18 = tmp11Result;
  if (null != onTitlePress) {
    const obj4 = { accessibilityRole: "button", style: null, onPress: null, children: null };
    obj4[1] = tmp.titlePressable;
    obj4[2] = onTitlePress;
    obj4[3] = tmp11Result;
    tmp18 = animatedStyle(tmp3(tmp4[13]).PressableOpacity, obj4);
  }
  const obj5 = { style: memo1, children: null };
  const items5 = [tmp18];
  let tmp21 = null;
  if (null != actionTitle) {
    const obj6 = { onPress: null, children: null };
    obj6[0] = action;
    const obj7 = { variant: "text-sm/semibold", color: "text-brand", children: null };
    obj7[2] = actionTitle;
    obj6[1] = animatedStyle(tmp3(tmp4[11]).Text, obj7);
    tmp21 = animatedStyle(tmp3(tmp4[13]).PressableOpacity, obj6);
  }
  items5[1] = tmp21;
  obj5[1] = items5;
  const tmp11Result1 = closure_8(clientThemesOverride, obj5);
  let tmp11Result2 = tmp11Result1;
  if (!disableStickySections) {
    const obj8 = { style: null, children: null };
    obj8[0] = memo2;
    let tmp26 = !disableThemedGradient;
    if (!disableThemedGradient) {
      const obj9 = { style: null, children: null };
      obj9[0] = animatedStyle1;
      obj9[1] = animatedStyle(tmp25(tmp4[14]), { absolute: true, tall: true, wide: true, mix: true });
      tmp26 = animatedStyle(tmp25(tmp4[10]).View, obj9);
    }
    const items6 = [tmp26, tmp11Result1];
    obj8[1] = items6;
    tmp11Result2 = tmp11(scrollPosValue(tmp4[10]).View, obj8);
  }
  return tmp11Result2;
});
let obj6 = { position: "absolute", left: ThemesDefault.space.PX_4 + ThemesDefault.space.PX_4 / 2, top: 5 };
const forwardRefResult = importAllResult.forwardRef(function UsersFastListInner(getItemProps, ref) {
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
  closure_6 = undefined;
  closure_7 = undefined;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onScroll, onLayout, renderListHeader } = getItemProps);
  let tmp = callback3();
  closure_6 = tmp;
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
      return callback(closure_1_12, {});
    } else if ("section" === type) {
      const obj = {};
      const merged = Object.assign(element.props);
      obj.disableStickySections = flag2;
      obj.disableThemedGradient = disableThemedGradient;
      obj.scrollPosValue = scrollPosValue;
      obj.stickyAt = stickyAt;
      return callback(closure_1_16, obj);
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
      return callback(getSectionProps(flag2[18]), obj);
    } else if ("placeholder" === type) {
      obj = {};
      const merged1 = Object.assign(element.props);
      return callback(closure_1_11, obj);
    } else if ("gdm" === type) {
      obj1 = {};
      const merged2 = Object.assign(element.props);
      return callback(getSectionProps(flag2[19]), obj1);
    } else if ("channel" === type) {
      const obj2 = {};
      const merged3 = Object.assign(element.props);
      return callback(getSectionProps(flag2[20]), obj2);
    } else if ("custom" === type) {
      obj = { children: null };
      obj[0] = element.component();
      return callback(closure_1_9, obj);
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
  return tmp13(getSectionProps(flag2[21]), obj);
});
const result = require("set").fileFinishedImporting(
  "modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx",
);

export const UsersFastList = forwardRefResult;
