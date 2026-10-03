// discord_app/modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx
import c from "../../../../../../_runtime/00576_c.js";
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
const View = fn(17).View;
const UsersFastListConstants = fn(10599);
const USERS_LIST_PADDING_BETWEEN_SECTIONS = UsersFastListConstants.USERS_LIST_PADDING_BETWEEN_SECTIONS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8, Fragment: closure_9 } = jsxProd);
const createStyles = fn(4890);
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
let ReactCompilerGating = fn(558);
let closure_11 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(11);
      ({ start, end } = arg0);
      const fastestListTableRowPlaceholderStyles =
        useFastestListTableRowPlaceholderConfig.useFastestListTableRowPlaceholderStyles();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const fn = function n() {
          return { width: `${(10 + 80 * Math.random()) | 0}%` };
        };
        cResult[0] = fn;
        let first = fn;
      } else {
        first = cResult[0];
      }
      const first1 = _slicedToArray(noop.useState(first), 1)[0];
      if (cResult[1] === fastestListTableRowPlaceholderStyles.placeholderUsername) {
        if (cResult[2] === first1) {
          let tmp7 = cResult[3];
        }
        if (cResult[4] !== fastestListTableRowPlaceholderStyles.placeholderAvatar) {
          const obj3 = { style: fastestListTableRowPlaceholderStyles.placeholderAvatar };
          const tmp12 = React5(View, obj3);
          cResult[4] = fastestListTableRowPlaceholderStyles.placeholderAvatar;
          cResult[5] = tmp12;
          let tmp9 = tmp12;
        } else {
          tmp9 = cResult[5];
        }
        if (cResult[6] === end) {
          if (cResult[7] === start) {
            if (cResult[8] === tmp7) {
              if (cResult[9] === tmp9) {
                let tmp13 = cResult[10];
              }
              return tmp13;
            }
          }
        }
        const obj4 = { end, start, label: tmp7, icon: tmp9, height: "100%" };
        const tmp15 = React5(TableRow.TableRow, obj4);
        cResult[6] = end;
        cResult[7] = start;
        cResult[8] = tmp7;
        cResult[9] = tmp9;
        cResult[10] = tmp15;
        tmp13 = tmp15;
      }
      const obj5 = { style: null };
      const items = [fastestListTableRowPlaceholderStyles.placeholderUsername, first1];
      obj5.style = items;
      const tmp8 = React5(View, obj5);
      cResult[1] = fastestListTableRowPlaceholderStyles.placeholderUsername;
      cResult[2] = first1;
      cResult[3] = tmp8;
      tmp7 = tmp8;
    }
  : (arg0) => {
      ({ start, end } = arg0);
      const fastestListTableRowPlaceholderStyles =
        useFastestListTableRowPlaceholderConfig.useFastestListTableRowPlaceholderStyles();
      const obj2 = { end, start, label: null, icon: null, height: "100%" };
      const obj3 = { style: null };
      const items = [
        fastestListTableRowPlaceholderStyles.placeholderUsername,
        _slicedToArray(
          noop.useState(() => ({ width: `${(10 + 80 * Math.random()) | 0}%` })),
          1,
        )[0],
      ];
      obj3.style = items;
      obj2.label = React5(View, obj3);
      obj2.icon = React5(View, { style: fastestListTableRowPlaceholderStyles.placeholderAvatar });
      return React5(TableRow.TableRow, obj2);
    };
ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp5 = React5(View, {});
        cResult[0] = tmp5;
        let first = tmp5;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => React5(View, {});
const __initData = {
  code: "function UsersFastListTsx1(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}",
};
const __initData2 = {
  code: 'function UsersFastListTsx2(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:"transparent"};}',
};
const __initData3 = {
  code: "function UsersFastListTsx3(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}",
};
const __initData4 = {
  code: "function UsersFastListTsx4(){const{scrollPosValue,stickyAt}=this.__closure;var _scrollPosValue;const scrollPos=(_scrollPosValue=scrollPosValue)===null||_scrollPosValue===void 0?void 0:_scrollPosValue.get();if(scrollPos==null||stickyAt==null){return false;}return scrollPos>=stickyAt;}",
};
const __initData5 = {
  code: "function UsersFastListTsx5(){const{isSticky,styles}=this.__closure;return{backgroundColor:isSticky.get()?styles.stickyHeader.backgroundColor:'transparent'};}",
};
const __initData6 = {
  code: "function UsersFastListTsx6(){const{isSticky}=this.__closure;return{opacity:isSticky.get()?1:0};}",
};
ReactCompilerGating = fn(558);
let closure_19 = noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (stickyAt) => {
        const cResult = c.c(40);
        ({ title, colorOverride, actionTitle, action, badge, scrollPosValue } = stickyAt);
        stickyAt = stickyAt.stickyAt;
        ({ disableStickySections, disableThemedGradient, titleLeading, onTitlePress } = stickyAt);
        const tmp4 = closure_10();
        dependencyMap = tmp4;
        if (cResult[0] !== colorOverride) {
          let tmp7 = null != colorOverride;
          if (tmp7) {
            const obj2 = { color: colorOverride };
            tmp7 = obj2;
          }
          cResult[0] = colorOverride;
          cResult[1] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
        if (cResult[2] === tmp4.section) {
          if (cResult[3] === tmp9) {
            if (cResult[4] === clientThemesOverride) {
              let tmp10 = cResult[5];
            }
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
            const derivedValue = ReanimatedRexport.useDerivedValue(E);
            const tmpResult4 = ReanimatedRexport;
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
            const animatedStyle = ReanimatedRexport.useAnimatedStyle(O);
            if (cResult[6] === animatedStyle) {
              if (cResult[7] === tmp4.sectionHeader) {
                let tmp15 = cResult[8];
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
              const obj5 = { isSticky: derivedValue };
              M.__closure = obj5;
              M.__workletHash = 13270974904859;
              M.__initData = __initData3;
              const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(M);
              if (null == title) {
                if (null == actionTitle) {
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
                    const tmp47 = React5(View, tmp46);
                    cResult[9] = tmp4.emptySection;
                    cResult[10] = tmp47;
                    let tmp43 = tmp47;
                  } else {
                    tmp43 = cResult[10];
                  }
                  return tmp43;
                }
              }
              if (cResult[11] === badge) {
                if (cResult[12] === tmp4.badge) {
                  if (cResult[13] === tmp4.badgeWrapper) {
                    let tmp18 = cResult[14];
                  }
                  if (cResult[15] === tmp18) {
                    if (cResult[16] === tmp5) {
                      if (cResult[17] === title) {
                        let tmp20 = cResult[18];
                      }
                      if (cResult[19] === tmp4.titleRow) {
                        if (cResult[20] === titleLeading) {
                          if (cResult[21] === tmp20) {
                            let tmp22 = cResult[22];
                          }
                          if (cResult[23] === onTitlePress) {
                            if (cResult[24] === tmp4.titlePressable) {
                              if (cResult[25] === tmp22) {
                                let tmp27 = cResult[26];
                              }
                              if (cResult[27] === action) {
                                if (cResult[28] === actionTitle) {
                                  let tmp30 = cResult[29];
                                }
                                if (cResult[30] === tmp10) {
                                  if (cResult[31] === tmp30) {
                                    if (cResult[32] === tmp27) {
                                      let tmp33 = cResult[33];
                                    }
                                    if (cResult[34] === animatedStyle1) {
                                      if (cResult[35] === disableStickySections) {
                                        if (cResult[36] === disableThemedGradient) {
                                          if (cResult[37] === tmp33) {
                                            if (cResult[38] === tmp15) {
                                              let tmp36 = cResult[39];
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
                                      if (!disableThemedGradient) {
                                        const obj6 = { style: null, children: null };
                                        class M {
                                          constructor() {
                                            opacity = 0;
                                            if (closure_3.get()) {
                                              opacity = 1;
                                            }
                                            return { opacity };
                                          }
                                        }
                                        obj6.children = React5(ThemedGradientDefault, {
                                          absolute: true,
                                          tall: true,
                                          wide: true,
                                          mix: true,
                                        });
                                        tmp41 = React5(ReanimatedRexportDefault.View, obj6);
                                      }
                                      const items = [tmp41, tmp33];
                                      tmp40[1] = items;
                                      const tmp38Result = closure_1_8(ReanimatedRexportDefault.View, tmp40);
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
                                const obj7 = { style: tmp10, children: null };
                                const items1 = [tmp27, tmp30];
                                obj7.children = items1;
                                const tmp35 = closure_1_8(View, obj7);
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
                                const obj8 = { onPress: null, children: null };
                                class M {
                                  constructor() {
                                    opacity = 0;
                                    if (closure_3.get()) {
                                      opacity = 1;
                                    }
                                    return { opacity };
                                  }
                                }
                                const obj9 = {
                                  variant: "text-sm/semibold",
                                  color: "text-brand",
                                  children: actionTitle,
                                };
                                obj8.children = React5(Text_Text.Text, obj9);
                                const tmp31 = React5(Pressables.PressableOpacity, obj8);
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
                            const obj10 = { accessibilityRole: "button", style: null, onPress: null, children: null };
                            class M {
                              constructor() {
                                opacity = 0;
                                if (closure_3.get()) {
                                  opacity = 1;
                                }
                                return { opacity };
                              }
                            }
                            obj10.onPress = onTitlePress;
                            obj10.children = tmp22;
                            const tmp28 = React5(Pressables.PressableOpacity, obj10);
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
                        const tmp23 = closure_1_8(View, tmp26);
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
                  const obj11 = {
                    maxFontSizeMultiplier: 2,
                    accessibilityRole: "header",
                    variant: "text-md/medium",
                    color: "text-subtle",
                    style: tmp5,
                    children: null,
                  };
                  const items3 = [title, tmp18];
                  obj11.children = items3;
                  const tmp21 = closure_1_8(Text_Text.Text, obj11);
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
              const tmpResult6 = ReanimatedRexport;
            }
            const items4 = [tmp4.sectionHeader, animatedStyle];
            cResult[6] = animatedStyle;
            cResult[7] = tmp4.sectionHeader;
            cResult[8] = items4;
            tmp15 = items4;
            const tmpResult5 = ReanimatedRexport;
          }
        }
        const items5 = [tmp4.section, null != onTitlePress && tmp4.interactiveSection, clientThemesOverride];
        cResult[2] = tmp4.section;
        cResult[3] = null != onTitlePress && tmp4.interactiveSection;
        cResult[4] = clientThemesOverride;
        cResult[5] = items5;
        tmp10 = items5;
        const tmpResult = ClientThemesOverrides;
      }
    : (stickyAt) => {
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
        const clientThemesOverride = ClientThemesOverrides.useClientThemesOverride();
        const items1 = [, , ,];
        ({ section: arr2[0], interactiveSection: arr2[1] } = tmp);
        items1[2] = onTitlePress;
        items1[3] = clientThemesOverride;
        const memo1 = noop.useMemo(() => {
          const items = [closure_4.section, null != onTitlePress && closure_4.interactiveSection, clientThemesOverride];
          return items;
        }, items1);
        const fn = function x() {
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
        fn.__workletHash = 1305370085058;
        fn.__initData = __initData4;
        const derivedValue = ReanimatedRexport.useDerivedValue(fn);
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
        C.__workletHash = 2763129547727;
        C.__initData = __initData5;
        animatedStyle = ReanimatedRexport.useAnimatedStyle(C);
        const items2 = [tmp.sectionHeader, animatedStyle];
        const memo2 = noop.useMemo(() => {
          const items = [closure_4.sectionHeader, animatedStyle];
          return items;
        }, items2);
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
        H.__workletHash = 9025735048830;
        H.__initData = __initData6;
        const animatedStyle1 = ReanimatedRexport.useAnimatedStyle(H);
        if (null == title) {
          if (null == actionTitle) {
            const obj5 = { style: tmp.emptySection };
            return React5(View, obj5);
          }
        }
        const obj6 = {
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
          const obj7 = { style: tmp.badgeWrapper, children: null };
          const obj8 = { style: tmp.badge, value: badge };
          obj7.children = React5(native.Badge, obj8);
          tmp12 = React5(View, obj7);
        }
        items3[1] = tmp12;
        obj6.children = items3;
        const tmp11Result = closure_1_8(Text_Text.Text, obj6);
        let tmp11Result4 = tmp11Result;
        if (null != titleLeading) {
          const obj9 = { style: tmp.titleRow, children: null };
          const items4 = [titleLeading, tmp11Result];
          obj9.children = items4;
          tmp11Result4 = closure_1_8(View, obj9);
        }
        let tmp18 = tmp11Result4;
        if (null != onTitlePress) {
          const obj10 = {
            accessibilityRole: "button",
            style: tmp.titlePressable,
            onPress: onTitlePress,
            children: tmp11Result4,
          };
          tmp18 = React5(Pressables.PressableOpacity, obj10);
        }
        const obj11 = { style: memo1, children: null };
        const items5 = [tmp18];
        let tmp21 = null;
        if (null != actionTitle) {
          const obj12 = { onPress: action, children: null };
          const obj13 = { variant: "text-sm/semibold", color: "text-brand", children: actionTitle };
          obj12.children = React5(Text_Text.Text, obj13);
          tmp21 = React5(Pressables.PressableOpacity, obj12);
        }
        items5[1] = tmp21;
        obj11.children = items5;
        const tmp11Result5 = closure_1_8(View, obj11);
        let tmp11Result6 = tmp11Result5;
        if (!disableStickySections) {
          const obj14 = { style: memo2, children: null };
          let tmp26 = !disableThemedGradient;
          if (!disableThemedGradient) {
            const obj15 = {
              style: animatedStyle1,
              children: React5(ThemedGradientDefault, { absolute: true, tall: true, wide: true, mix: true }),
            };
            tmp26 = React5(ReanimatedRexportDefault.View, obj15);
          }
          const items6 = [tmp26, tmp11Result5];
          obj14.children = items6;
          tmp11Result6 = closure_1_8(ReanimatedRexportDefault.View, obj14);
        }
        return tmp11Result6;
      },
);
ReactCompilerGating = fn(558);
let obj8 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/main_tabs_v2/native/shared_components/user_list/UsersFastList.tsx");

export const UsersFastList = noop.forwardRef(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (getSectionProps, arg1) => {
        const cResult = getItemProps(disableThemedGradient[8]).c(32);
        ({ sections, getItemProps } = getSectionProps);
        getSectionProps = getSectionProps.getSectionProps;
        ({
          getItemSize,
          keyExtractor,
          insetStart,
          insetEnd,
          disableBottomSafeZone,
          disableStickySections,
          disableThemedGradient,
        } = getSectionProps);
        ({
          disableBackgroundOverlay,
          inActionSheet,
          listHeaderSize,
          onContentLengthChange,
          onScroll,
          onLayout,
          renderListHeader,
          listStyleOverride,
        } = getSectionProps);
        disableStickySections = tmp5;
        const tmp6 = closure_10();
        if (!tmp4) {
          getSectionProps(disableThemedGradient[17])().bottom;
        }
        getSectionProps(disableThemedGradient[18])();
        const tmp9 = getSectionProps(disableThemedGradient[19])();
        closure_4 = tmp9;
        getItemProps(disableThemedGradient[11]);
        if (cResult[0] === (undefined !== disableStickySections && disableStickySections)) {
          if (cResult[1] === disableThemedGradient) {
            if (cResult[4] !== getItemProps) {
              class X {
                constructor(arg0, arg1) {
                  element = getItemProps(getSectionProps, arg1);
                  type = undefined;
                  if (element != null) {
                    type = element.type;
                  }
                  if ("user" === type) {
                    tmp20 = jsx;
                    tmp21 = closure_1;
                    tmp22 = closure_2;
                    obj1 = {};
                    tmp24 = obj1;
                    tmp23 = closure_1(closure_2[20]);
                    merged = Object.assign(element.props);
                    return jsx(tmp23, obj1);
                  } else {
                    str3 = "placeholder";
                    if ("placeholder" === type) {
                      tmp16 = jsx;
                      tmp17 = f55293;
                      obj6 = {};
                      tmp18 = obj6;
                      merged1 = Object.assign(element.props);
                      return jsx(f55293, obj6);
                    } else {
                      str4 = "gdm";
                      if ("gdm" === type) {
                        tmp10 = jsx;
                        tmp11 = closure_1;
                        tmp12 = closure_2;
                        obj7 = {};
                        tmp14 = obj7;
                        tmp13 = closure_1(closure_2[21]);
                        merged2 = Object.assign(element.props);
                        return jsx(tmp13, obj7);
                      } else {
                        str = "channel";
                        if ("channel" === type) {
                          tmp4 = jsx;
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj8 = {};
                          tmp8 = obj8;
                          tmp7 = closure_1(closure_2[22]);
                          merged3 = Object.assign(element.props);
                          return jsx(tmp7, obj8);
                        } else {
                          str2 = "custom";
                          if ("custom" === type) {
                            tmp2 = jsx;
                            tmp3 = Fragment;
                            obj = { children: null };
                            obj.children = element.component();
                            return jsx(Fragment, obj);
                          } else {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
              }
              cResult[4] = getItemProps;
              class K {
                constructor(arg0) {
                  element = getSectionProps(getSectionProps);
                  type = undefined;
                  if (element != null) {
                    type = element.type;
                  }
                  if ("placeholder" === type) {
                    tmp3 = closure_4;
                    return closure_4;
                  } else {
                    str = "section";
                    if ("section" === type) {
                      num2 = 0;
                      if (element.props.hideTitle) {
                        return 0;
                      } else {
                        tmp2 = null == element.props.title ? closure_6 : closure_4;
                      }
                    } else {
                      num = 0;
                      return 0;
                    }
                  }
                  return;
                }
              }
              cResult[5] = X;
            } else {
              class X {
                constructor(arg0, arg1) {
                  element = getItemProps(getSectionProps, arg1);
                  type = undefined;
                  if (element != null) {
                    type = element.type;
                  }
                  if ("user" === type) {
                    tmp20 = jsx;
                    tmp21 = closure_1;
                    tmp22 = closure_2;
                    obj1 = {};
                    tmp24 = obj1;
                    tmp23 = closure_1(closure_2[20]);
                    merged = Object.assign(element.props);
                    return jsx(tmp23, obj1);
                  } else {
                    str3 = "placeholder";
                    if ("placeholder" === type) {
                      tmp16 = jsx;
                      tmp17 = f55293;
                      obj6 = {};
                      tmp18 = obj6;
                      merged1 = Object.assign(element.props);
                      return jsx(f55293, obj6);
                    } else {
                      str4 = "gdm";
                      if ("gdm" === type) {
                        tmp10 = jsx;
                        tmp11 = closure_1;
                        tmp12 = closure_2;
                        obj7 = {};
                        tmp14 = obj7;
                        tmp13 = closure_1(closure_2[21]);
                        merged2 = Object.assign(element.props);
                        return jsx(tmp13, obj7);
                      } else {
                        str = "channel";
                        if ("channel" === type) {
                          tmp4 = jsx;
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj8 = {};
                          tmp8 = obj8;
                          tmp7 = closure_1(closure_2[22]);
                          merged3 = Object.assign(element.props);
                          return jsx(tmp7, obj8);
                        } else {
                          str2 = "custom";
                          if ("custom" === type) {
                            tmp2 = jsx;
                            tmp3 = Fragment;
                            obj = { children: null };
                            obj.children = element.component();
                            return jsx(Fragment, obj);
                          } else {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
            if (cResult[6] === getSectionProps) {
              class X {
                constructor(arg0, arg1) {
                  element = getItemProps(getSectionProps, arg1);
                  type = undefined;
                  if (element != null) {
                    type = element.type;
                  }
                  if ("user" === type) {
                    tmp20 = jsx;
                    tmp21 = closure_1;
                    tmp22 = closure_2;
                    obj1 = {};
                    tmp24 = obj1;
                    tmp23 = closure_1(closure_2[20]);
                    merged = Object.assign(element.props);
                    return jsx(tmp23, obj1);
                  } else {
                    str3 = "placeholder";
                    if ("placeholder" === type) {
                      tmp16 = jsx;
                      tmp17 = f55293;
                      obj6 = {};
                      tmp18 = obj6;
                      merged1 = Object.assign(element.props);
                      return jsx(f55293, obj6);
                    } else {
                      str4 = "gdm";
                      if ("gdm" === type) {
                        tmp10 = jsx;
                        tmp11 = closure_1;
                        tmp12 = closure_2;
                        obj7 = {};
                        tmp14 = obj7;
                        tmp13 = closure_1(closure_2[21]);
                        merged2 = Object.assign(element.props);
                        return jsx(tmp13, obj7);
                      } else {
                        str = "channel";
                        if ("channel" === type) {
                          tmp4 = jsx;
                          tmp5 = closure_1;
                          tmp6 = closure_2;
                          obj8 = {};
                          tmp8 = obj8;
                          tmp7 = closure_1(closure_2[22]);
                          merged3 = Object.assign(element.props);
                          return jsx(tmp7, obj8);
                        } else {
                          str2 = "custom";
                          if ("custom" === type) {
                            tmp2 = jsx;
                            tmp3 = Fragment;
                            obj = { children: null };
                            obj.children = element.component();
                            return jsx(Fragment, obj);
                          } else {
                            return null;
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (disableBackgroundOverlay) {
                class X {
                  constructor(arg0, arg1) {
                    element = getItemProps(getSectionProps, arg1);
                    type = undefined;
                    if (element != null) {
                      type = element.type;
                    }
                    if ("user" === type) {
                      tmp20 = jsx;
                      tmp21 = closure_1;
                      tmp22 = closure_2;
                      obj1 = {};
                      tmp24 = obj1;
                      tmp23 = closure_1(closure_2[20]);
                      merged = Object.assign(element.props);
                      return jsx(tmp23, obj1);
                    } else {
                      str3 = "placeholder";
                      if ("placeholder" === type) {
                        tmp16 = jsx;
                        tmp17 = f55293;
                        obj6 = {};
                        tmp18 = obj6;
                        merged1 = Object.assign(element.props);
                        return jsx(f55293, obj6);
                      } else {
                        str4 = "gdm";
                        if ("gdm" === type) {
                          tmp10 = jsx;
                          tmp11 = closure_1;
                          tmp12 = closure_2;
                          obj7 = {};
                          tmp14 = obj7;
                          tmp13 = closure_1(closure_2[21]);
                          merged2 = Object.assign(element.props);
                          return jsx(tmp13, obj7);
                        } else {
                          str = "channel";
                          if ("channel" === type) {
                            tmp4 = jsx;
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj8 = {};
                            tmp8 = obj8;
                            tmp7 = closure_1(closure_2[22]);
                            merged3 = Object.assign(element.props);
                            return jsx(tmp7, obj8);
                          } else {
                            str2 = "custom";
                            if ("custom" === type) {
                              tmp2 = jsx;
                              tmp3 = Fragment;
                              obj = { children: null };
                              obj.children = element.component();
                              return jsx(Fragment, obj);
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              if (cResult[9] === listStyleOverride) {
                class X {
                  constructor(arg0, arg1) {
                    element = getItemProps(getSectionProps, arg1);
                    type = undefined;
                    if (element != null) {
                      type = element.type;
                    }
                    if ("user" === type) {
                      tmp20 = jsx;
                      tmp21 = closure_1;
                      tmp22 = closure_2;
                      obj1 = {};
                      tmp24 = obj1;
                      tmp23 = closure_1(closure_2[20]);
                      merged = Object.assign(element.props);
                      return jsx(tmp23, obj1);
                    } else {
                      str3 = "placeholder";
                      if ("placeholder" === type) {
                        tmp16 = jsx;
                        tmp17 = f55293;
                        obj6 = {};
                        tmp18 = obj6;
                        merged1 = Object.assign(element.props);
                        return jsx(f55293, obj6);
                      } else {
                        str4 = "gdm";
                        if ("gdm" === type) {
                          tmp10 = jsx;
                          tmp11 = closure_1;
                          tmp12 = closure_2;
                          obj7 = {};
                          tmp14 = obj7;
                          tmp13 = closure_1(closure_2[21]);
                          merged2 = Object.assign(element.props);
                          return jsx(tmp13, obj7);
                        } else {
                          str = "channel";
                          if ("channel" === type) {
                            tmp4 = jsx;
                            tmp5 = closure_1;
                            tmp6 = closure_2;
                            obj8 = {};
                            tmp8 = obj8;
                            tmp7 = closure_1(closure_2[22]);
                            merged3 = Object.assign(element.props);
                            return jsx(tmp7, obj8);
                          } else {
                            str2 = "custom";
                            if ("custom" === type) {
                              tmp2 = jsx;
                              tmp3 = Fragment;
                              obj = { children: null };
                              obj.children = element.component();
                              return jsx(Fragment, obj);
                            } else {
                              return null;
                            }
                          }
                        }
                      }
                    }
                  }
                }
              }
              class K {
                constructor(arg0) {
                  element = getSectionProps(getSectionProps);
                  type = undefined;
                  if (element != null) {
                    type = element.type;
                  }
                  if ("placeholder" === type) {
                    tmp3 = closure_4;
                    return closure_4;
                  } else {
                    str = "section";
                    if ("section" === type) {
                      num2 = 0;
                      if (element.props.hideTitle) {
                        return 0;
                      } else {
                        tmp2 = null == element.props.title ? closure_6 : closure_4;
                      }
                    } else {
                      num = 0;
                      return 0;
                    }
                  }
                  return;
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
                element = getSectionProps(getSectionProps);
                type = undefined;
                if (element != null) {
                  type = element.type;
                }
                if ("placeholder" === type) {
                  tmp3 = closure_4;
                  return closure_4;
                } else {
                  str = "section";
                  if ("section" === type) {
                    num2 = 0;
                    if (element.props.hideTitle) {
                      return 0;
                    } else {
                      tmp2 = null == element.props.title ? closure_6 : closure_4;
                    }
                  } else {
                    num = 0;
                    return 0;
                  }
                }
                return;
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
            return React5(closure_12, {});
          } else if ("section" === type) {
            const obj = {};
            const merged = Object.assign(element.props);
            obj.disableStickySections = disableStickySections;
            obj.disableThemedGradient = disableThemedGradient;
            obj.scrollPosValue = scrollPosValue;
            obj.stickyAt = stickyAt;
            return React5(closure_19, obj);
          } else {
            return null;
          }
        };
        cResult[0] = undefined !== disableStickySections && disableStickySections;
        cResult[1] = disableThemedGradient;
        cResult[2] = getSectionProps;
        cResult[3] = fn;
        let obj = getItemProps(disableThemedGradient[8]);
        tmp4 = undefined !== disableBottomSafeZone && disableBottomSafeZone;
      }
    : (getItemProps, ref) => {
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
          num = getSectionProps(flag2[17])().bottom;
        }
        const sum = insetEnd + num;
        const tmp6 = getSectionProps(flag2[19])();
        closure_7 = tmp6;
        const tmp5 = getSectionProps(flag2[18])();
        clientThemesOverride = getItemProps(flag2[11]).useClientThemesOverride();
        let items = [getSectionProps, flag2, disableThemedGradient];
        const items1 = [getItemProps];
        const callback = disableBackgroundOverlay.useCallback((arg0, arg1, scrollPosValue, stickyAt) => {
          const element = getSectionProps(arg0);
          let type;
          if (element != null) {
            type = element.type;
          }
          if ("placeholder" === type) {
            return React5(closure_12, {});
          } else if ("section" === type) {
            const obj = {};
            const merged = Object.assign(element.props);
            obj.disableStickySections = flag2;
            obj.disableThemedGradient = disableThemedGradient;
            obj.scrollPosValue = scrollPosValue;
            obj.stickyAt = stickyAt;
            return React5(closure_19, obj);
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
            const merged = Object.assign(element.props);
            return React5(UserRowDefault, obj2);
          } else if ("placeholder" === type) {
            const obj3 = {};
            const merged1 = Object.assign(element.props);
            return React5(closure_11, obj3);
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
            return React5(options, obj);
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
        let obj = getItemProps(flag2[11]);
        let obj2 = {
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
        const tmp12 = getSectionProps(flag2[9])();
        const tmp13 = closure_7;
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
        obj2.placeholderConfig = tmp12;
        obj2.listHeaderSize = listHeaderSize;
        return tmp13(getSectionProps(flag2[23]), obj2);
      },
);
