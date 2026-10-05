// === Module 15013: QuestDockBountyHeader ===

// Module 15013 (QuestDockBountyHeader)
import nativeDefault from "native" /* 587 */;
import spring from "spring" /* 5597 */;
import QuestTypes from "QuestTypes" /* 5626 */;
import AnalyticsTypes from "AnalyticsTypes" /* 7212 */;
import QuestDisclosureModalActionCreatorsDefault from "QuestDisclosureModalActionCreators" /* 14914 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import QuestConstants from "QuestConstants" /* 5623 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT;
let StyleSheet;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let size;
({ View: closure_4, StyleSheet } = react_native);
({ QuestDockMode: hasOwnProperty, QuestsExperimentLocations: metroRequire } = QuestConstants);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: metroImportDefault } = QuestDockConstants);
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const PX_32 = nativeDefault.space.PX_32;
let c10 = 0.7;
const PX_12 = nativeDefault.space.PX_12;
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, productIcon: size, crossFadeWrapper: { alignSelf: "stretch", flex: 1 }, copy: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 }, promotedLabel: { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 }, smokeArt: { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 }, smokeArtFade: obj3, title: { lineHeight: 16 } };
obj2 = { alignItems: "center", alignSelf: "stretch", display: "flex", flexDirection: "row", gap: nativeDefault.space.PX_12, justifyContent: "flex-start", flex: 1, paddingLeft: PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST, borderRadius: nativeDefault.radii.sm, flexGrow: 0, flexShrink: 0, height: PX_32, width: PX_32 };
obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
let closure_11 = createStyles(obj);
const __initData = { code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData2 = { code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData3 = { code: "function QuestDockBountyHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const __initData4 = { code: "function QuestDockBountyHeaderTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}" };
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let activeQuestDockMode;
  let bountyCreative;
  let height;
  let intl;
  let items;
  let items1;
  let items2;
  let obj17;
  let tmp11;
  let width;
  const tmp = activeQuestDockMode;
  let obj = activeQuestDockMode(576);
  const cResult = obj.c(67);
  let obj2 = activeQuestDockMode(14925);
  const questDockBounty = obj2.useQuestDockBounty();
  const tmp5 = closure_11();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  activeQuestDockMode = react.useContext(tmp(14897).QuestDockGestureContext).activeQuestDockMode;
  const fn = function o() {
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = 0;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult = tmp(4612);
  const obj3 = { withSpring: tmp(5597).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj3;
  fn.__workletHash = 16909083558605;
  fn.__initData = __initData;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const fn2 = function s() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = c10;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult7 = tmp(4612);
  fn2.__closure = { withSpring: tmp(5597).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 273450441779;
  fn2.__initData = __initData2;
  ({ withSpring: tmp(5597).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
  const EXPANDED = QuestDockMode.EXPANDED;
  const tmp9 = bountyCreative(7941)(activeQuestDockMode);
  const tmpResult8 = tmp(15007);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = tmpResult8.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  if (cResult[0] !== isBountiesAndroidQuestBarSmokeAnimationEnabled) {
    const tmpResult9 = tmp(1369);
    const tmp12 = tmpResult9.isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
    let num = 0;
    cResult[0] = isBountiesAndroidQuestBarSmokeAnimationEnabled;
    cResult[1] = tmp12;
    tmp11 = tmp12;
  } else {
    tmp11 = cResult[1];
  }
  const tmpResult10 = tmp(15006);
  const smokeArtSize = tmpResult10.useSmokeArtSize();
  ({ width, height } = smokeArtSize);
  if (cResult[2] === height) {
    let tmp14;
    let tmp17;
    let tmp19;
    if (cResult[3] === width) {
      tmp14 = cResult[4];
    }
    const tmpResult11 = tmp(14925);
    bountyCreative = tmpResult11.useBountyCreative(questDockBounty);
    const tmpResult12 = tmp(14893);
    const actionSheetPressHandler = tmpResult12.useActionSheetPressHandler(bountyCreative);
    if (cResult[5] !== bountyCreative) {
      const fn3 = function w() {
        const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
        const obj = QuestDisclosureModalActionCreatorsDefault;
        ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
        obj.showModal(obj2);
      };
      cResult[5] = bountyCreative;
      cResult[6] = fn3;
      tmp17 = fn3;
    } else {
      tmp17 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp21 = closure_8(bountyCreative(15014), {});
      cResult[7] = tmp21;
      tmp19 = tmp21;
    } else {
      tmp19 = cResult[7];
    }
    if (cResult[8] === tmp14) {
      let tmp22;
      if (cResult[9] === tmp5.smokeArt) {
        tmp22 = cResult[10];
      }
      let str3 = "no-offscreen-compositing";
      if (tmp11) {
        str3 = "offscreen-compositing";
      }
      if (cResult[11] === animatedStyle) {
        let tmp23;
        let tmp25;
        if (cResult[12] === tmp5.smokeArtFade) {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== (tmp9 === EXPANDED)) {
          const obj5 = { surface: tmp(15006).QuestDockBountySmokeSurface.COLLAPSED, paused: tmp9 === EXPANDED };
          const tmp8Result = bountyCreative(15006);
          const tmp28 = closure_8(tmp8Result, obj5);
          cResult[14] = tmp9 === EXPANDED;
          cResult[15] = tmp28;
          tmp25 = tmp28;
        } else {
          tmp25 = cResult[15];
        }
        if (cResult[16] === tmp11) {
          if (cResult[17] === str3) {
            if (cResult[18] === tmp23) {
              let tmp29;
              if (cResult[19] === tmp25) {
                tmp29 = cResult[20];
              }
              if (cResult[21] === tmp22) {
                let tmp32;
                if (cResult[22] === tmp29) {
                  tmp32 = cResult[23];
                }
                if (cResult[24] === questDockBounty.productIcon) {
                  let tmp36;
                  if (cResult[25] === tmp5.productIcon) {
                    tmp36 = cResult[26];
                  }
                  if (cResult[27] === animatedStyle) {
                    let tmp39;
                    if (cResult[28] === tmp5.copy) {
                      tmp39 = cResult[29];
                    }
                    let str5 = "yes";
                    if (tmp9 === EXPANDED) {
                      str5 = "no-hide-descendants";
                    }
                    if (cResult[30] === tmp5.title) {
                      let tmp40;
                      if (cResult[31] === str) {
                        tmp40 = cResult[32];
                      }
                      if (cResult[33] === tmp9 === EXPANDED) {
                        if (cResult[34] === str5) {
                          if (cResult[35] === tmp40) {
                            let tmp43;
                            if (cResult[36] === str) {
                              tmp43 = cResult[37];
                            }
                            if (cResult[38] === tmp39) {
                              let tmp47;
                              if (cResult[39] === tmp43) {
                                tmp47 = cResult[40];
                              }
                              if (cResult[41] === animatedStyle1) {
                                let tmp50;
                                let tmp51;
                                let tmp54;
                                if (cResult[42] === tmp5.promotedLabel) {
                                  tmp50 = cResult[43];
                                }
                                let str6 = "none";
                                if (tmp9 === EXPANDED) {
                                  str6 = "auto";
                                }
                                let str7 = "no-hide-descendants";
                                if (tmp9 === EXPANDED) {
                                  str7 = "yes";
                                }
                                const _Symbol2 = Symbol;
                                if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                  const obj6 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(1126).t.o6FLcF) };
                                  const Text = tmp(4886).Text;
                                  intl = tmp(1126).intl;
                                  const tmp53 = closure_8(Text, obj6);
                                  cResult[44] = tmp53;
                                  tmp51 = tmp53;
                                } else {
                                  tmp51 = cResult[44];
                                }
                                if (cResult[45] !== tmp17) {
                                  const obj7 = { onPress: tmp17, accessibilityRole: "button", children: tmp51 };
                                  const tmp56 = closure_8(tmp(5909).PressableOpacity, obj7);
                                  cResult[45] = tmp17;
                                  cResult[46] = tmp56;
                                  tmp54 = tmp56;
                                } else {
                                  tmp54 = cResult[46];
                                }
                                if (cResult[47] === str6) {
                                  if (cResult[48] === tmp9 !== EXPANDED) {
                                    if (cResult[49] === str7) {
                                      let tmp58;
                                      if (cResult[50] === tmp54) {
                                        tmp58 = cResult[51];
                                      }
                                      if (cResult[52] === tmp50) {
                                        let tmp62;
                                        if (cResult[53] === tmp58) {
                                          tmp62 = cResult[54];
                                        }
                                        if (cResult[55] === tmp5.crossFadeWrapper) {
                                          if (cResult[56] === tmp47) {
                                            let tmp65;
                                            if (cResult[57] === tmp62) {
                                              tmp65 = cResult[58];
                                            }
                                            if (cResult[59] === tmp5.wrapper) {
                                              if (cResult[60] === tmp36) {
                                                let tmp69;
                                                if (cResult[61] === tmp65) {
                                                  tmp69 = cResult[62];
                                                }
                                                if (cResult[63] === actionSheetPressHandler) {
                                                  if (cResult[64] === tmp69) {
                                                    let tmp73;
                                                    if (cResult[65] === tmp32) {
                                                      tmp73 = cResult[66];
                                                    }
                                                    return tmp73;
                                                  }
                                                }
                                                const obj8 = { onSubmenuPress: actionSheetPressHandler, hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: tmp19, secondaryContentWidth: tmp(15014).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH, children: items };
                                                items = [tmp32, tmp69];
                                                const tmp8Result2 = bountyCreative(14996);
                                                const tmp76 = closure_9(tmp8Result2, obj8);
                                                cResult[63] = actionSheetPressHandler;
                                                cResult[64] = tmp69;
                                                cResult[65] = tmp32;
                                                cResult[66] = tmp76;
                                                tmp73 = tmp76;
                                              }
                                            }
                                            const obj9 = { style: tmp5.wrapper, children: items1 };
                                            items1 = [tmp36, tmp65];
                                            const tmp72 = closure_9(closure_4, obj9);
                                            cResult[59] = tmp5.wrapper;
                                            cResult[60] = tmp36;
                                            cResult[61] = tmp65;
                                            cResult[62] = tmp72;
                                            tmp69 = tmp72;
                                          }
                                        }
                                        const obj10 = { style: tmp5.crossFadeWrapper, children: items2 };
                                        items2 = [tmp47, tmp62];
                                        const tmp68 = closure_9(closure_4, obj10);
                                        cResult[55] = tmp5.crossFadeWrapper;
                                        cResult[56] = tmp47;
                                        cResult[57] = tmp62;
                                        cResult[58] = tmp68;
                                        tmp65 = tmp68;
                                      }
                                      const obj11 = { style: tmp50, children: tmp58 };
                                      const tmp64 = closure_8(bountyCreative(6570), obj11);
                                      cResult[52] = tmp50;
                                      cResult[53] = tmp58;
                                      cResult[54] = tmp64;
                                      tmp62 = tmp64;
                                    }
                                  }
                                }
                                const obj12 = { pointerEvents: str6, accessibilityElementsHidden: tmp9 !== EXPANDED, importantForAccessibility: str7, children: tmp54 };
                                const tmp61 = closure_8(closure_4, obj12);
                                cResult[47] = str6;
                                cResult[48] = tmp9 !== EXPANDED;
                                cResult[49] = str7;
                                cResult[50] = tmp54;
                                cResult[51] = tmp61;
                                tmp58 = tmp61;
                              }
                              const items3 = [tmp5.promotedLabel, animatedStyle1];
                              cResult[41] = animatedStyle1;
                              cResult[42] = tmp5.promotedLabel;
                              cResult[43] = items3;
                              tmp50 = items3;
                            }
                            const obj13 = { style: tmp39, children: tmp43 };
                            const tmp49 = closure_8(bountyCreative(6570), obj13);
                            cResult[38] = tmp39;
                            cResult[39] = tmp43;
                            cResult[40] = tmp49;
                            tmp47 = tmp49;
                          }
                        }
                      }
                      const obj14 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp9 === EXPANDED, importantForAccessibility: str5, children: tmp40 };
                      const tmp46 = closure_8(closure_4, obj14);
                      cResult[33] = tmp9 === EXPANDED;
                      cResult[34] = str5;
                      cResult[35] = tmp40;
                      cResult[36] = str;
                      cResult[37] = tmp46;
                      tmp43 = tmp46;
                    }
                    const obj15 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp5.title, children: str };
                    const tmp42 = closure_8(tmp(4886).Text, obj15);
                    cResult[30] = tmp5.title;
                    cResult[31] = str;
                    cResult[32] = tmp42;
                    tmp40 = tmp42;
                  }
                  const items4 = [tmp5.copy, animatedStyle];
                  cResult[27] = animatedStyle;
                  cResult[28] = tmp5.copy;
                  cResult[29] = items4;
                  tmp39 = items4;
                }
                let tmp37 = null != questDockBounty.productIcon;
                if (tmp37) {
                  const obj16 = { style: tmp5.productIcon, source: obj17, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
                  obj17 = { uri: questDockBounty.productIcon };
                  tmp37 = closure_8(tmp8(5974), obj16);
                }
                cResult[24] = questDockBounty.productIcon;
                cResult[25] = tmp5.productIcon;
                cResult[26] = tmp37;
                tmp36 = tmp37;
              }
              const obj18 = { style: tmp22, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: tmp29 };
              const tmp35 = closure_8(closure_4, obj18);
              cResult[21] = tmp22;
              cResult[22] = tmp29;
              cResult[23] = tmp35;
              tmp32 = tmp35;
            }
          }
        }
        const obj19 = { style: tmp23, needsOffscreenAlphaCompositing: tmp11, children: tmp25 };
        const tmp31 = closure_8(bountyCreative(6570), obj19, str3);
        cResult[16] = tmp11;
        cResult[17] = str3;
        cResult[18] = tmp23;
        cResult[19] = tmp25;
        cResult[20] = tmp31;
        tmp29 = tmp31;
      }
      const items5 = [tmp5.smokeArtFade, animatedStyle];
      cResult[11] = animatedStyle;
      cResult[12] = tmp5.smokeArtFade;
      cResult[13] = items5;
      tmp23 = items5;
    }
    const items6 = [tmp5.smokeArt, tmp14];
    cResult[8] = tmp14;
    cResult[9] = tmp5.smokeArt;
    cResult[10] = items6;
    tmp22 = items6;
  }
  size = { width, height };
  cResult[2] = height;
  cResult[3] = width;
  cResult[4] = size;
  tmp14 = size;
}) : (() => {
  let PressableOpacity;
  let Text;
  let activeQuestDockMode;
  let bountyCreative;
  let height;
  let intl;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let obj11;
  let obj14;
  let obj15;
  let obj17;
  let obj18;
  let obj19;
  let obj7;
  let obj8;
  let str2;
  let str3;
  let str5;
  let tmp7Result5;
  let tmp7Result6;
  let width;
  const tmp = activeQuestDockMode;
  let obj = activeQuestDockMode(height[9]);
  const questDockBounty = obj.useQuestDockBounty();
  const tmp4 = closure_11();
  let str = questDockBounty.productName;
  if (str == null) {
    str = "";
  }
  let obj2 = bountyCreative;
  activeQuestDockMode = bountyCreative.useContext(tmp(tmp2[10]).QuestDockGestureContext).activeQuestDockMode;
  const fn = function o() {
    const withSpring = spring.withSpring;
    let num = 1;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = 0;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult = tmp(height[11]);
  const obj3 = { withSpring: tmp(tmp2[12]).withSpring, activeQuestDockMode, QuestDockMode, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn.__closure = obj3;
  fn.__workletHash = 1400703902479;
  fn.__initData = __initData3;
  const animatedStyle = tmpResult.useAnimatedStyle(fn);
  const fn2 = function s() {
    const withSpring = spring.withSpring;
    let num = 0;
    spring;
    if (activeQuestDockMode.get() === hasOwnProperty.EXPANDED) {
      num = c10;
    }
    const obj = { opacity: withSpring(num, metroImportDefault) };
    return obj;
  };
  const tmpResult7 = tmp(height[11]);
  fn2.__closure = { withSpring: tmp(height[12]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED };
  fn2.__workletHash = 799684402037;
  fn2.__initData = __initData4;
  ({ withSpring: tmp(height[12]).withSpring, activeQuestDockMode, QuestDockMode, PROMOTED_LABEL_OPACITY, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED });
  const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
  const EXPANDED = QuestDockMode.EXPANDED;
  const tmp8 = width(height[13])(activeQuestDockMode);
  const tmpResult8 = tmp(height[14]);
  const isBountiesAndroidQuestBarSmokeAnimationEnabled = tmpResult8.useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
  const tmpResult9 = tmp(height[15]);
  const tmp10 = tmpResult9.isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
  const tmpResult10 = tmp(height[16]);
  size = tmpResult10.useSmokeArtSize();
  width = size.width;
  height = size.height;
  const items = [width, height];
  const memo = obj2.useMemo(() => {
    size = { width, height };
    return size;
  }, items);
  const tmpResult11 = tmp(height[9]);
  bountyCreative = tmpResult11.useBountyCreative(questDockBounty);
  const items1 = [bountyCreative];
  const tmpResult12 = tmp(height[17]);
  const actionSheetPressHandler = tmpResult12.useActionSheetPressHandler(bountyCreative);
  const callback = obj2.useCallback(() => {
    const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: { content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE } };
    const obj = QuestDisclosureModalActionCreatorsDefault;
    ({ content: QuestTypes.QuestContent.QUEST_BAR_MOBILE, ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE, sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE });
    obj.showModal(obj2);
  }, items1);
  const obj5 = { onSubmenuPress: actionSheetPressHandler, hideBlurWhenCollapsed: true, promotedLabelLeading: true, collapsedContent: closure_8(width(height[21]), {}), secondaryContentWidth: tmp(height[21]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH, children: items4 };
  const tmp7Result = width(height[27]);
  const obj6 = { style: items2, pointerEvents: "none", accessible: false, importantForAccessibility: "no-hide-descendants", children: closure_8(tmp7Result5, obj7, str2) };
  items2 = [tmp4.smokeArt, memo];
  obj7 = { style: items3, needsOffscreenAlphaCompositing: tmp10, children: closure_8(tmp7Result6, obj8) };
  items3 = [tmp4.smokeArtFade, animatedStyle];
  obj8 = { surface: tmp(height[16]).QuestDockBountySmokeSurface.COLLAPSED, paused: tmp8 === EXPANDED };
  tmp7Result5 = width(height[22]);
  str2 = "no-offscreen-compositing";
  tmp7Result6 = width(height[16]);
  if (tmp10) {
    str2 = "offscreen-compositing";
  }
  items4 = [closure_8(closure_4, obj6), ];
  let tmp18Result = null != questDockBounty.productIcon;
  const obj9 = { style: tmp4.wrapper, children: items5 };
  if (tmp18Result) {
    const obj10 = { style: tmp4.productIcon, source: obj11, resizeMode: "cover", accessible: false, importantForAccessibility: "no" };
    obj11 = { uri: questDockBounty.productIcon };
    tmp18Result = closure_8(tmp7(tmp2[23]), obj10);
  }
  items5 = [tmp18Result, ];
  const obj12 = { style: tmp4.crossFadeWrapper, children: items7 };
  const obj13 = { style: items6, children: closure_8(closure_4, obj14) };
  items6 = [tmp4.copy, animatedStyle];
  obj14 = { accessible: true, accessibilityRole: "text", accessibilityLabel: str, accessibilityElementsHidden: tmp8 === EXPANDED, importantForAccessibility: str3, children: closure_8(tmp(height[24]).Text, obj15) };
  str3 = "yes";
  const tmp7Result7 = width(height[22]);
  if (tmp8 === EXPANDED) {
    str3 = "no-hide-descendants";
  }
  obj15 = { variant: "text-sm/medium", color: "text-strong", lineClamp: 2, accessible: false, style: tmp4.title, children: str };
  items7 = [closure_8(tmp7Result7, obj13), ];
  const obj16 = { style: items8, children: closure_8(closure_4, obj17) };
  items8 = [tmp4.promotedLabel, animatedStyle1];
  let str4 = "none";
  const tmp7Result8 = width(height[22]);
  if (tmp8 === EXPANDED) {
    str4 = "auto";
  }
  obj17 = { pointerEvents: str4, accessibilityElementsHidden: tmp8 !== EXPANDED, importantForAccessibility: str5, children: closure_8(PressableOpacity, obj18) };
  str5 = "no-hide-descendants";
  if (tmp8 === EXPANDED) {
    str5 = "yes";
  }
  obj18 = { onPress: callback, accessibilityRole: "button", children: closure_8(Text, obj19) };
  PressableOpacity = tmp(tmp2[26]).PressableOpacity;
  obj19 = { variant: "text-sm/medium", color: "text-default", children: intl.string(tmp(height[25]).t.o6FLcF) };
  Text = tmp(tmp2[24]).Text;
  intl = tmp(tmp2[25]).intl;
  items7[1] = closure_8(tmp7Result8, obj16);
  items5[1] = closure_9(closure_4, obj12);
  items4[1] = closure_9(closure_4, obj9);
  return closure_9(tmp7Result, obj5);
}));
size = size_mod;
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default memoResult;