// === Module 10611: UsersFastList ===

// Module 10611 (UsersFastList)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import ReanimatedRexport from "ReanimatedRexport" /* 4618 */;
import Text_Text from "Text/Text" /* 4892 */;
import Pressables from "Pressables" /* 5916 */;
import ThemedGradientDefault from "ThemedGradient" /* 5918 */;
import TableRow2 from "TableRow" /* 6000 */;
import ClientThemesOverrides from "ClientThemesOverrides" /* 7518 */;
import useFastestListTableRowPlaceholderConfig from "useFastestListTableRowPlaceholderConfig" /* 10613 */;
import UserRowDefault from "UserRow" /* 10615 */;
import GroupDMRowDefault from "GroupDMRow" /* 10660 */;
import ChannelRowDefault from "ChannelRow" /* 10663 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UsersFastListConstants from "UsersFastListConstants" /* 10612 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const ReanimatedRexportDefault = ReanimatedRexport;
let dependencyMap, tmp3;

let c9;
let metroImportAll;
let metroImportDefault;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let rect;
let react = react_mod;
let View = react_native.View;
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const USERS_LIST_SECTION_BOTTOM_PADDING = UsersFastListConstants.USERS_LIST_SECTION_BOTTOM_PADDING;
({ jsx: metroImportDefault, jsxs: metroImportAll, Fragment: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { sectionHeader: obj2, stickyHeader: obj3, list: obj4, emptySection: { paddingBottom: USERS_LIST_PADDING_BETWEEN_SECTIONS }, section: { flex: 1, display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "space-between", paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS, textTransform: "none" }, interactiveSection: obj5, titlePressable: obj6, titleRow: obj7, badgeWrapper: { height: "100%" }, badge: rect };
obj2 = { flex: 1, overflow: "hidden", top: -1 * USERS_LIST_SECTION_BOTTOM_PADDING };
obj3 = { backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND };
createStyles = createStyles.createStyles;
obj4 = { flex: 1, backgroundColor: nativeDefault.colors.MOBILE_ACTIONSHEET_BACKGROUND, paddingHorizontal: 16 };
obj5 = { paddingTop: USERS_LIST_PADDING_BETWEEN_SECTIONS - nativeDefault.space.PX_8 };
obj6 = { paddingVertical: nativeDefault.space.PX_8, paddingRight: nativeDefault.space.PX_8 };
obj7 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
rect = { position: "absolute", left: nativeDefault.space.PX_4 + nativeDefault.space.PX_4 / 2, top: 5 };
let closure_10 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_11 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let end;
  let first;
  let items;
  let start;
  let obj = react2;
  const cResult = obj.c(11);
  ({ start, end } = arg0);
  const obj2 = useFastestListTableRowPlaceholderConfig;
  const fastestListTableRowPlaceholderStyles = obj2.useFastestListTableRowPlaceholderStyles();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const fn = function n() {
      const obj = { width: `${10 + 80 * Math.random() | 0}%` };
      return obj;
    };
    cResult[0] = fn;
    first = fn;
  } else {
    first = cResult[0];
  }
  const first1 = _slicedToArray(react.useState(first), 1)[0];
  if (cResult[1] === fastestListTableRowPlaceholderStyles.placeholderUsername) {
    let tmp7;
    let tmp9;
    if (cResult[2] === first1) {
      tmp7 = cResult[3];
    }
    if (cResult[4] !== fastestListTableRowPlaceholderStyles.placeholderAvatar) {
      const obj3 = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
      const tmp12 = metroImportDefault(View, obj3);
      cResult[4] = fastestListTableRowPlaceholderStyles.placeholderAvatar;
      cResult[5] = tmp12;
      tmp9 = tmp12;
    } else {
      tmp9 = cResult[5];
    }
    if (cResult[6] === end) {
      if (cResult[7] === start) {
        if (cResult[8] === tmp7) {
          let tmp13;
          if (cResult[9] === tmp9) {
            tmp13 = cResult[10];
          }
          return tmp13;
        }
      }
    }
    const obj4 = { end, start, label: tmp7, icon: tmp9, height: "100%" };
    const tmp15 = metroImportDefault(TableRow2.TableRow, obj4);
    cResult[6] = end;
    cResult[7] = start;
    cResult[8] = tmp7;
    cResult[9] = tmp9;
    cResult[10] = tmp15;
    tmp13 = tmp15;
  }
  const obj5 = { style: items };
  items = [fastestListTableRowPlaceholderStyles.placeholderUsername, first1];
  const tmp8 = metroImportDefault(View, obj5);
  cResult[1] = fastestListTableRowPlaceholderStyles.placeholderUsername;
  cResult[2] = first1;
  cResult[3] = tmp8;
  tmp7 = tmp8;
}) : ((arg0) => {
  let end;
  let items;
  let obj3;
  let obj4;
  let start;
  ({ start, end } = arg0);
  let obj = useFastestListTableRowPlaceholderConfig;
  const fastestListTableRowPlaceholderStyles = obj.useFastestListTableRowPlaceholderStyles();
  const obj2 = { end, start, label: metroImportDefault(View, obj3), icon: metroImportDefault(View, obj4), height: "100%" };
  obj3 = { style: items };
  items = [
    fastestListTableRowPlaceholderStyles.placeholderUsername,
    _slicedToArray(react.useState(() => {
      const obj = { width: `${10 + 80 * Math.random() | 0}%` };
      return obj;
    }), 1)[0]
  ];
  const TableRow = TableRow2.TableRow;
  obj4 = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
  return metroImportDefault(TableRow, obj2);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  const obj = react2;
  const cResult = obj.c(1);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp5 = metroImportDefault(View, {});
    cResult[0] = tmp5;
    first = tmp5;
  } else {
    first = cResult[0];
  }
  return first;
}) : (() => metroImportDefault(View, {}));
const __initData = { code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
const __initData2 = { code: "function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:\"transparent\"};}" };
const __initData3 = { code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
const __initData4 = { code: "function UsersFastListTsx4(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}" };
const __initData5 = { code: "function UsersFastListTsx5(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}" };
const __initData6 = { code: "function UsersFastListTsx6(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}" };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((stickyAt) => {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let items1;
  let items3;
  let obj9;
  let onTitlePress;
  let scrollPosValue;
  let title;
  let titleLeading;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(40);
  ({ title, colorOverride, actionTitle, action, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableStickySections, disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  const tmp4 = closure_10();
  dependencyMap = tmp4;
  if (cResult[0] !== colorOverride) {
    let tmp7 = null != colorOverride;
    if (tmp7) {
      tmp7 = { color: colorOverride };
      const obj2 = { color: colorOverride };
    }
    cResult[0] = colorOverride;
    cResult[1] = tmp7;
    tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  const tmpResult = ClientThemesOverrides;
  const clientThemesOverride = tmpResult.useClientThemesOverride();
  if (cResult[2] === tmp4.section) {
    if (cResult[3] === (null != onTitlePress && tmp4.interactiveSection)) {
      let tmp10;
      if (cResult[4] === clientThemesOverride) {
        tmp10 = cResult[5];
      }
      const tmpResult4 = ReanimatedRexport;
      class E {
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
      const obj3 = { scrollPosValue, stickyAt };
      E.__closure = obj3;
      E.__workletHash = 15448160320615;
      E.__initData = __initData;
      const derivedValue = tmpResult4.useDerivedValue(E);
      const tmpResult5 = ReanimatedRexport;
      class O {
        constructor() {
          backgroundColor = "transparent";
          if (closure_3.get()) {
            tmp = closure_2;
            backgroundColor = closure_2.stickyHeader.backgroundColor;
          }
          return { backgroundColor };
        }
      }
      const obj4 = { isSticky: derivedValue, styles: tmp4 };
      O.__closure = obj4;
      O.__workletHash = 11315917458152;
      O.__initData = __initData2;
      const animatedStyle = tmpResult5.useAnimatedStyle(O);
      if (cResult[6] === animatedStyle) {
        let tmp15;
        if (cResult[7] === tmp4.sectionHeader) {
          tmp15 = cResult[8];
        }
        const tmpResult6 = ReanimatedRexport;
        class M {
          constructor() {
            opacity = 0;
            if (closure_3.get()) {
              opacity = 1;
            }
            return { opacity };
          }
        }
        const obj5 = { isSticky: derivedValue };
        M.__closure = obj5;
        M.__workletHash = 13270974904859;
        M.__initData = __initData3;
        const animatedStyle1 = tmpResult6.useAnimatedStyle(M);
        if (null == title) {
          if (null == actionTitle) {
            let tmp43;
            if (cResult[9] !== tmp4.emptySection) {
              class M {
                constructor() {
                  opacity = 0;
                  if (closure_3.get()) {
                    opacity = 1;
                  }
                  return { opacity };
                }
              }
              tmp46[0] = tmp4.emptySection;
              const tmp47 = metroImportDefault(View, tmp46);
              cResult[9] = tmp4.emptySection;
              cResult[10] = tmp47;
              tmp43 = tmp47;
            } else {
              tmp43 = cResult[10];
            }
            return tmp43;
          }
        }
        if (cResult[11] === badge) {
          if (cResult[12] === tmp4.badge) {
            let tmp18;
            if (cResult[13] === tmp4.badgeWrapper) {
              tmp18 = cResult[14];
            }
            if (cResult[15] === tmp18) {
              if (cResult[16] === tmp5) {
                let tmp20;
                let tmp23;
                if (cResult[17] === title) {
                  tmp20 = cResult[18];
                }
                if (cResult[19] === tmp4.titleRow) {
                  if (cResult[20] === titleLeading) {
                    let tmp22;
                    let tmp28;
                    if (cResult[21] === tmp20) {
                      tmp22 = cResult[22];
                    }
                    if (cResult[23] === onTitlePress) {
                      if (cResult[24] === tmp4.titlePressable) {
                        let tmp27;
                        let tmp31;
                        if (cResult[25] === tmp22) {
                          tmp27 = cResult[26];
                        }
                        if (cResult[27] === action) {
                          let tmp30;
                          if (cResult[28] === actionTitle) {
                            tmp30 = cResult[29];
                          }
                          if (cResult[30] === tmp10) {
                            if (cResult[31] === tmp30) {
                              let tmp33;
                              let tmp38Result;
                              if (cResult[32] === tmp27) {
                                tmp33 = cResult[33];
                              }
                              if (cResult[34] === animatedStyle1) {
                                if (cResult[35] === disableStickySections) {
                                  if (cResult[36] === disableThemedGradient) {
                                    if (cResult[37] === tmp33) {
                                      let tmp36;
                                      if (cResult[38] === tmp15) {
                                        tmp36 = cResult[39];
                                      }
                                      return tmp36;
                                    }
                                  }
                                }
                              }
                              class M {
                                constructor() {
                                  opacity = 0;
                                  if (closure_3.get()) {
                                    opacity = 1;
                                  }
                                  return { opacity };
                                }
                              }
                              if (!disableStickySections) {
                                class M {
                                  constructor() {
                                    opacity = 0;
                                    if (closure_3.get()) {
                                      opacity = 1;
                                    }
                                    return { opacity };
                                  }
                                }
                                tmp40[0] = tmp15;
                                let tmp41 = !disableThemedGradient;
                                View = ReanimatedRexportDefault.View;
                                if (!disableThemedGradient) {
                                  const obj6 = { style: null, children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }) };
                                  class M {
                                    constructor() {
                                      opacity = 0;
                                      if (closure_3.get()) {
                                        opacity = 1;
                                      }
                                      return { opacity };
                                    }
                                  }
                                  const View2 = ReanimatedRexportDefault.View;
                                  tmp41 = metroImportDefault(View2, obj6);
                                }
                                const items = [tmp41, tmp33];
                                tmp40[1] = items;
                                tmp38Result = metroImportAll(View, tmp40);
                              }
                              cResult[34] = animatedStyle1;
                              cResult[35] = disableStickySections;
                              cResult[36] = disableThemedGradient;
                              cResult[37] = tmp33;
                              cResult[38] = tmp15;
                              class O {
                                constructor() {
                                  backgroundColor = "transparent";
                                  if (closure_3.get()) {
                                    tmp = closure_2;
                                    backgroundColor = closure_2.stickyHeader.backgroundColor;
                                  }
                                  return { backgroundColor };
                                }
                              }
                              cResult[39] = tmp38Result;
                              tmp36 = tmp38Result;
                            }
                          }
                          class M {
                            constructor() {
                              opacity = 0;
                              if (closure_3.get()) {
                                opacity = 1;
                              }
                              return { opacity };
                            }
                          }
                          const obj7 = { style: tmp10, children: items1 };
                          items1 = [tmp27, tmp30];
                          const tmp35 = metroImportAll(View, obj7);
                          cResult[30] = tmp10;
                          class O {
                            constructor() {
                              backgroundColor = "transparent";
                              if (closure_3.get()) {
                                tmp = closure_2;
                                backgroundColor = closure_2.stickyHeader.backgroundColor;
                              }
                              return { backgroundColor };
                            }
                          }
                          cResult[32] = tmp27;
                          cResult[33] = tmp35;
                          tmp33 = tmp35;
                        }
                        class M {
                          constructor() {
                            opacity = 0;
                            if (closure_3.get()) {
                              opacity = 1;
                            }
                            return { opacity };
                          }
                        }
                        if (null != actionTitle) {
                          const obj8 = { onPress: null, children: metroImportDefault(Text_Text.Text, obj9) };
                          class M {
                            constructor() {
                              opacity = 0;
                              if (closure_3.get()) {
                                opacity = 1;
                              }
                              return { opacity };
                            }
                          }
                          const PressableOpacity = Pressables.PressableOpacity;
                          obj9 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
                          tmp31 = metroImportDefault(PressableOpacity, obj8);
                        }
                        cResult[27] = action;
                        cResult[28] = actionTitle;
                        cResult[29] = tmp31;
                        tmp30 = tmp31;
                      }
                    }
                    class M {
                      constructor() {
                        opacity = 0;
                        if (closure_3.get()) {
                          opacity = 1;
                        }
                        return { opacity };
                      }
                    }
                    if (null != onTitlePress) {
                      const obj10 = { accessibilityRole: "button", style: null, onPress: onTitlePress, children: tmp22 };
                      class M {
                        constructor() {
                          opacity = 0;
                          if (closure_3.get()) {
                            opacity = 1;
                          }
                          return { opacity };
                        }
                      }
                      tmp28 = metroImportDefault(Pressables.PressableOpacity, obj10);
                    }
                    cResult[23] = onTitlePress;
                    cResult[24] = tmp4.titlePressable;
                    cResult[25] = tmp22;
                    cResult[26] = tmp28;
                    tmp27 = tmp28;
                  }
                }
                class M {
                  constructor() {
                    opacity = 0;
                    if (closure_3.get()) {
                      opacity = 1;
                    }
                    return { opacity };
                  }
                }
                if (null != titleLeading) {
                  class M {
                    constructor() {
                      opacity = 0;
                      if (closure_3.get()) {
                        opacity = 1;
                      }
                      return { opacity };
                    }
                  }
                  tmp26[0] = tmp4.titleRow;
                  const items2 = [titleLeading, tmp20];
                  tmp26[1] = items2;
                  tmp23 = metroImportAll(View, tmp26);
                }
                cResult[19] = tmp4.titleRow;
                cResult[20] = titleLeading;
                cResult[21] = tmp20;
                cResult[22] = tmp23;
                tmp22 = tmp23;
              }
            }
            class M {
              constructor() {
                opacity = 0;
                if (closure_3.get()) {
                  opacity = 1;
                }
                return { opacity };
              }
            }
            const obj11 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: tmp5, children: items3 };
            items3 = [title, tmp18];
            const tmp21 = metroImportAll(Text_Text.Text, obj11);
            cResult[15] = tmp18;
            cResult[16] = tmp5;
            class O {
              constructor() {
                backgroundColor = "transparent";
                if (closure_3.get()) {
                  tmp = closure_2;
                  backgroundColor = closure_2.stickyHeader.backgroundColor;
                }
                return { backgroundColor };
              }
            }
            cResult[17] = title;
            cResult[18] = tmp21;
            tmp20 = tmp21;
          }
        }
        class O {
          constructor() {
            backgroundColor = "transparent";
            if (closure_3.get()) {
              tmp = closure_2;
              backgroundColor = closure_2.stickyHeader.backgroundColor;
            }
            return { backgroundColor };
          }
        }
        cResult[11] = badge;
        cResult[12] = tmp4.badge;
        cResult[13] = tmp4.badgeWrapper;
        cResult[14] = null;
        tmp18 = tmp19;
      }
      const items4 = [tmp4.sectionHeader, animatedStyle];
      cResult[6] = animatedStyle;
      cResult[7] = tmp4.sectionHeader;
      cResult[8] = items4;
      tmp15 = items4;
    }
  }
  const items5 = [tmp4.section, null != onTitlePress && tmp4.interactiveSection, clientThemesOverride];
  cResult[2] = tmp4.section;
  cResult[3] = null != onTitlePress && tmp4.interactiveSection;
  cResult[4] = clientThemesOverride;
  cResult[5] = items5;
  tmp10 = items5;
}) : ((stickyAt) => {
  let action;
  let actionTitle;
  let badge;
  let colorOverride;
  let disableStickySections;
  let disableThemedGradient;
  let items3;
  let items4;
  let items5;
  let items6;
  let obj13;
  let obj8;
  let onTitlePress;
  let scrollPosValue;
  let title;
  let titleLeading;
  ({ title, colorOverride } = stickyAt);
  ({ actionTitle, badge, scrollPosValue } = stickyAt);
  stickyAt = stickyAt.stickyAt;
  ({ disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
  let animatedStyle;
  ({ action, disableStickySections } = stickyAt);
  const tmp = closure_10();
  react = tmp;
  let items = [colorOverride];
  const memo = react.useMemo(() => {
    let tmp2 = null != colorOverride;
    if (tmp2) {
      tmp2 = { color: tmp };
      const obj = { color: tmp };
    }
    return tmp2;
  }, items);
  let obj = ClientThemesOverrides;
  const clientThemesOverride = obj.useClientThemesOverride();
  const items1 = [, , , ];
  ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
  items1[2] = onTitlePress;
  items1[3] = clientThemesOverride;
  const memo1 = react.useMemo(() => {
    const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
    return items;
  }, items1);
  const fn = function x() {
    let value;
    if (scrollPosValue != null) {
      value = scrollPosValue.get();
    }
    return null != value && null != stickyAt && value >= stickyAt;
  };
  fn.__closure = { scrollPosValue, stickyAt };
  fn.__workletHash = 1305370085058;
  fn.__initData = __initData4;
  const obj2 = ReanimatedRexport;
  const derivedValue = obj2.useDerivedValue(fn);
  const obj3 = ReanimatedRexport;
  class C {
    constructor() {
      let backgroundColor = "transparent";
      if (derivedValue.get()) {
        backgroundColor = closure_4.stickyHeader.backgroundColor;
      }
      return { backgroundColor };
    }
  }
  C.__closure = { isSticky: derivedValue, styles: tmp };
  C.__workletHash = 2763129547727;
  C.__initData = __initData5;
  animatedStyle = obj3.useAnimatedStyle(C);
  const items2 = [tmp.sectionHeader, animatedStyle];
  const memo2 = react.useMemo(() => {
    const items = [closure_4.sectionHeader, animatedStyle];
    return items;
  }, items2);
  const obj4 = ReanimatedRexport;
  class H {
    constructor() {
      let opacity = 0;
      if (derivedValue.get()) {
        opacity = 1;
      }
      return { opacity };
    }
  }
  H.__closure = { isSticky: derivedValue };
  H.__workletHash = 9025735048830;
  H.__initData = __initData6;
  const animatedStyle1 = obj4.useAnimatedStyle(H);
  if (null == title) {
    if (null == actionTitle) {
      const obj5 = { style: tmp.emptySection };
      return metroImportDefault(View, obj5);
    }
  }
  const obj6 = { maxFontSizeMultiplier: 2, accessibilityRole: "header", variant: "text-md/medium", color: "text-subtle", style: memo, children: items3 };
  items3 = [title, ];
  let tmp12 = null;
  const Text = Text_Text.Text;
  if (null != badge) {
    const obj7 = { style: tmp.badgeWrapper, children: metroImportDefault(native.Badge, obj8) };
    obj8 = { style: tmp.badge, value: badge };
    tmp12 = metroImportDefault(View, obj7);
  }
  items3[1] = tmp12;
  const tmp11Result = metroImportAll(Text, obj6);
  let tmp11Result4 = tmp11Result;
  if (null != titleLeading) {
    const obj9 = { style: tmp.titleRow, children: items4 };
    items4 = [titleLeading, tmp11Result];
    tmp11Result4 = metroImportAll(View, obj9);
  }
  let tmp18 = tmp11Result4;
  if (null != onTitlePress) {
    const obj10 = { accessibilityRole: "button", style: tmp.titlePressable, onPress: onTitlePress, children: tmp11Result4 };
    tmp18 = metroImportDefault(Pressables.PressableOpacity, obj10);
  }
  const obj11 = { style: memo1, children: items5 };
  items5 = [tmp18, ];
  let tmp21 = null;
  const tmp20 = View;
  if (null != actionTitle) {
    const obj12 = { onPress: action, children: metroImportDefault(Text_Text.Text, obj13) };
    const PressableOpacity = Pressables.PressableOpacity;
    obj13 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
    tmp21 = metroImportDefault(PressableOpacity, obj12);
  }
  items5[1] = tmp21;
  const tmp11Result5 = metroImportAll(tmp20, obj11);
  let tmp11Result6 = tmp11Result5;
  if (!disableStickySections) {
    let tmp26 = !disableThemedGradient;
    const obj14 = { style: memo2, children: items6 };
    View = ReanimatedRexportDefault.View;
    if (!disableThemedGradient) {
      const obj15 = { style: animatedStyle1, children: metroImportDefault(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }) };
      const View2 = ReanimatedRexportDefault.View;
      tmp26 = metroImportDefault(View2, obj15);
    }
    items6 = [tmp26, tmp11Result5];
    tmp11Result6 = metroImportAll(View, obj14);
  }
  return tmp11Result6;
}));
ReactCompilerGating = ReactCompilerGating_mod;
const forwardRefResult = react.forwardRef(ReactCompilerGating.isReactCompilerEnabled() ? ((getSectionProps, arg1) => {
  let disableBackgroundOverlay;
  let disableBottomSafeZone;
  let disableStickySections;
  let disableThemedGradient;
  let getItemProps;
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let keyExtractor;
  let listHeaderSize;
  let listStyleOverride;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  let obj = getItemProps(disableThemedGradient[8]);
  const cResult = obj.c(32);
  ({ sections, getItemProps } = getSectionProps);
  getSectionProps = getSectionProps.getSectionProps;
  ({ getItemSize, keyExtractor, insetStart, insetEnd, disableBottomSafeZone, disableStickySections, disableThemedGradient } = getSectionProps);
  ({ disableBackgroundOverlay, inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader, listStyleOverride } = getSectionProps);
  disableStickySections = tmp5;
  const tmp4 = undefined !== disableBottomSafeZone && disableBottomSafeZone;
  const tmp6 = closure_10();
  let tmp7 = getSectionProps;
  let num2 = 0;
  if (!tmp4) {
    num2 = getSectionProps(disableThemedGradient[17])().bottom;
  }
  tmp7(disableThemedGradient[18])();
  const tmp9 = tmp7(disableThemedGradient[19])();
  let closure_4 = tmp9;
  getItemProps(disableThemedGradient[11]);
  if (cResult[0] === (undefined !== disableStickySections && disableStickySections)) {
    if (cResult[1] === disableThemedGradient) {
      if (cResult[4] !== getItemProps) {
        class X {
          constructor(disableThemedGradient, arg1) {
            const element = getItemProps(disableThemedGradient, arg1);
            let type;
            if (element != null) {
              type = element.type;
            }
            if ("user" === type) {
              const obj2 = {};
              const tmp23 = UserRowDefault;
              const merged = Object.assign(element.props);
              return metroImportDefault(tmp23, obj2);
            } else if ("placeholder" === type) {
              const obj3 = {};
              const merged1 = Object.assign(element.props);
              return metroImportDefault(closure_11, obj3);
            } else if ("gdm" === type) {
              const obj4 = {};
              const tmp13 = GroupDMRowDefault;
              const merged2 = Object.assign(element.props);
              return metroImportDefault(tmp13, obj4);
            } else if ("channel" === type) {
              const obj5 = {};
              const tmp7 = ChannelRowDefault;
              const merged3 = Object.assign(element.props);
              return metroImportDefault(tmp7, obj5);
            } else if ("custom" === type) {
              const obj = { children: element.component() };
              return metroImportDefault(React4, obj);
            } else {
              return null;
            }
          }
        }
        cResult[4] = getItemProps;
        class K {
          constructor(arg0) {
            const element = getSectionProps(arg0);
            let type;
            if (element != null) {
              type = element.type;
            }
            if ("placeholder" === type) {
              return closure_4;
            } else if ("section" === type) {
              let num2 = 0;
              if (!element.props.hideTitle) {
                num2 = null == element.props.title ? USERS_LIST_PADDING_BETWEEN_SECTIONS : closure_4;
              }
              return num2;
            } else {
              return 0;
            }
          }
        }
        cResult[5] = X;
      } else {
        class X {
          constructor(disableThemedGradient, arg1) {
            const element = getItemProps(disableThemedGradient, arg1);
            let type;
            if (element != null) {
              type = element.type;
            }
            if ("user" === type) {
              const obj2 = {};
              const tmp23 = UserRowDefault;
              const merged = Object.assign(element.props);
              return metroImportDefault(tmp23, obj2);
            } else if ("placeholder" === type) {
              const obj3 = {};
              const merged1 = Object.assign(element.props);
              return metroImportDefault(closure_11, obj3);
            } else if ("gdm" === type) {
              const obj4 = {};
              const tmp13 = GroupDMRowDefault;
              const merged2 = Object.assign(element.props);
              return metroImportDefault(tmp13, obj4);
            } else if ("channel" === type) {
              const obj5 = {};
              const tmp7 = ChannelRowDefault;
              const merged3 = Object.assign(element.props);
              return metroImportDefault(tmp7, obj5);
            } else if ("custom" === type) {
              const obj = { children: element.component() };
              return metroImportDefault(React4, obj);
            } else {
              return null;
            }
          }
        }
      }
      if (cResult[6] === getSectionProps) {
        class X {
          constructor(disableThemedGradient, arg1) {
            const element = getItemProps(disableThemedGradient, arg1);
            let type;
            if (element != null) {
              type = element.type;
            }
            if ("user" === type) {
              const obj2 = {};
              const tmp23 = UserRowDefault;
              const merged = Object.assign(element.props);
              return metroImportDefault(tmp23, obj2);
            } else if ("placeholder" === type) {
              const obj3 = {};
              const merged1 = Object.assign(element.props);
              return metroImportDefault(closure_11, obj3);
            } else if ("gdm" === type) {
              const obj4 = {};
              const tmp13 = GroupDMRowDefault;
              const merged2 = Object.assign(element.props);
              return metroImportDefault(tmp13, obj4);
            } else if ("channel" === type) {
              const obj5 = {};
              const tmp7 = ChannelRowDefault;
              const merged3 = Object.assign(element.props);
              return metroImportDefault(tmp7, obj5);
            } else if ("custom" === type) {
              const obj = { children: element.component() };
              return metroImportDefault(React4, obj);
            } else {
              return null;
            }
          }
        }
        if (disableBackgroundOverlay) {
          class X {
            constructor(disableThemedGradient, arg1) {
              const element = getItemProps(disableThemedGradient, arg1);
              let type;
              if (element != null) {
                type = element.type;
              }
              if ("user" === type) {
                const obj2 = {};
                const tmp23 = UserRowDefault;
                const merged = Object.assign(element.props);
                return metroImportDefault(tmp23, obj2);
              } else if ("placeholder" === type) {
                const obj3 = {};
                const merged1 = Object.assign(element.props);
                return metroImportDefault(closure_11, obj3);
              } else if ("gdm" === type) {
                const obj4 = {};
                const tmp13 = GroupDMRowDefault;
                const merged2 = Object.assign(element.props);
                return metroImportDefault(tmp13, obj4);
              } else if ("channel" === type) {
                const obj5 = {};
                const tmp7 = ChannelRowDefault;
                const merged3 = Object.assign(element.props);
                return metroImportDefault(tmp7, obj5);
              } else if ("custom" === type) {
                const obj = { children: element.component() };
                return metroImportDefault(React4, obj);
              } else {
                return null;
              }
            }
          }
        }
        if (cResult[9] === listStyleOverride) {
          class X {
            constructor(disableThemedGradient, arg1) {
              const element = getItemProps(disableThemedGradient, arg1);
              let type;
              if (element != null) {
                type = element.type;
              }
              if ("user" === type) {
                const obj2 = {};
                const tmp23 = UserRowDefault;
                const merged = Object.assign(element.props);
                return metroImportDefault(tmp23, obj2);
              } else if ("placeholder" === type) {
                const obj3 = {};
                const merged1 = Object.assign(element.props);
                return metroImportDefault(closure_11, obj3);
              } else if ("gdm" === type) {
                const obj4 = {};
                const tmp13 = GroupDMRowDefault;
                const merged2 = Object.assign(element.props);
                return metroImportDefault(tmp13, obj4);
              } else if ("channel" === type) {
                const obj5 = {};
                const tmp7 = ChannelRowDefault;
                const merged3 = Object.assign(element.props);
                return metroImportDefault(tmp7, obj5);
              } else if ("custom" === type) {
                const obj = { children: element.component() };
                return metroImportDefault(React4, obj);
              } else {
                return null;
              }
            }
          }
        }
        class K {
          constructor(arg0) {
            const element = getSectionProps(arg0);
            let type;
            if (element != null) {
              type = element.type;
            }
            if ("placeholder" === type) {
              return closure_4;
            } else if ("section" === type) {
              let num2 = 0;
              if (!element.props.hideTitle) {
                num2 = null == element.props.title ? USERS_LIST_PADDING_BETWEEN_SECTIONS : closure_4;
              }
              return num2;
            } else {
              return 0;
            }
          }
        }
        tmp15[0] = tmp6.list;
        tmp15[1] = disableBackgroundOverlay;
        tmp15[2] = listStyleOverride;
        cResult[9] = listStyleOverride;
        cResult[10] = tmp6.list;
        cResult[11] = disableBackgroundOverlay;
        cResult[12] = tmp15;
      }
      class K {
        constructor(arg0) {
          const element = getSectionProps(arg0);
          let type;
          if (element != null) {
            type = element.type;
          }
          if ("placeholder" === type) {
            return closure_4;
          } else if ("section" === type) {
            let num2 = 0;
            if (!element.props.hideTitle) {
              num2 = null == element.props.title ? USERS_LIST_PADDING_BETWEEN_SECTIONS : closure_4;
            }
            return num2;
          } else {
            return 0;
          }
        }
      }
      cResult[6] = getSectionProps;
      cResult[7] = tmp9;
      cResult[8] = K;
    }
  }
  const fn = function l(arg0, arg1, scrollPosValue, stickyAt) {
    const element = getSectionProps(arg0);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("placeholder" === type) {
      return metroImportDefault(closure_12, {});
    } else if ("section" === type) {
      const obj = { disableStickySections, disableThemedGradient, scrollPosValue, stickyAt };
      const merged = Object.assign(element.props);
      return metroImportDefault(closure_19, obj);
    } else {
      return null;
    }
  };
  cResult[0] = undefined !== disableStickySections && disableStickySections;
  cResult[1] = disableThemedGradient;
  cResult[2] = getSectionProps;
  cResult[3] = fn;
}) : ((getItemProps, ref) => {
  let getItemSize;
  let inActionSheet;
  let insetEnd;
  let insetStart;
  let keyExtractor;
  let listHeaderSize;
  let onContentLengthChange;
  let onLayout;
  let onScroll;
  let renderListHeader;
  let sections;
  let tmp12;
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
  let closure_7;
  let clientThemesOverride;
  ({ inActionSheet, listHeaderSize, onContentLengthChange, onScroll, onLayout, renderListHeader } = getItemProps);
  const tmp = closure_10();
  const list = tmp;
  let num = 0;
  if (!flag) {
    num = getSectionProps(flag2[17])().bottom;
  }
  const sum = insetEnd + num;
  const tmp5 = getSectionProps(flag2[18])();
  const tmp6 = getSectionProps(flag2[19])();
  closure_7 = tmp6;
  let obj = getItemProps(tmp3[11]);
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
      return metroImportDefault(closure_12, {});
    } else if ("section" === type) {
      const obj = { disableStickySections: flag2, disableThemedGradient, scrollPosValue, stickyAt };
      const merged = Object.assign(element.props);
      return metroImportDefault(closure_19, obj);
    } else {
      return null;
    }
  }, items);
  const items2 = [getSectionProps, tmp6];
  const callback1 = disableBackgroundOverlay.useCallback((disableThemedGradient, arg1) => {
    const element = getItemProps(disableThemedGradient, arg1);
    let type;
    if (element != null) {
      type = element.type;
    }
    if ("user" === type) {
      const obj2 = {};
      const tmp23 = UserRowDefault;
      const merged = Object.assign(element.props);
      return metroImportDefault(tmp23, obj2);
    } else if ("placeholder" === type) {
      const obj3 = {};
      const merged1 = Object.assign(element.props);
      return metroImportDefault(closure_11, obj3);
    } else if ("gdm" === type) {
      const obj4 = {};
      const tmp13 = GroupDMRowDefault;
      const merged2 = Object.assign(element.props);
      return metroImportDefault(tmp13, obj4);
    } else if ("channel" === type) {
      const obj5 = {};
      const tmp7 = ChannelRowDefault;
      const merged3 = Object.assign(element.props);
      return metroImportDefault(tmp7, obj5);
    } else if ("custom" === type) {
      const obj = { children: element.component() };
      return metroImportDefault(React4, obj);
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
      let num2 = 0;
      if (!element.props.hideTitle) {
        num2 = null == element.props.title ? USERS_LIST_PADDING_BETWEEN_SECTIONS : closure_7;
      }
      return num2;
    } else {
      return 0;
    }
  }, items2);
  const memo = disableBackgroundOverlay.useMemo(() => {
    const items = [list.list, disableBackgroundOverlay && clientThemesOverride, listStyleOverride];
    return items;
  }, items3);
  let tmp13 = closure_7;
  let obj2 = { sections, sectionHeaderIsSticky: !flag2, sectionHeaderSize: callback2, estimatedListSize: "windowSize", keyExtractor, ref, style: memo, itemSize: getItemSize, renderItem: callback1, renderListHeader, renderSectionHeader: callback, insetStart, insetEnd: sum, keyboardDismissMode: "on-drag", keyboardShouldPersistTaps: "always", inActionSheet, onContentLengthChange, onScroll, onLayout, placeholderConfig: tmp12, listId: "users-fast-list", listHeaderSize, listHeaderAlwaysMounted: true, scrollReporting: "callbacks", wrapChildren: true };
  tmp12 = getSectionProps(flag2[9])();
  const tmp2Result = getSectionProps(flag2[23]);
  if (getItemSize == null) {
    getItemSize = tmp5;
  }
  return tmp13(tmp2Result, obj2);
}));
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = forwardRefResult;