// discord_app/modules/quests/native/QuestDock/QuestDockBountyHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import spring from "../../../../design/animation/reanimated/spring/spring.tsx";
import QuestTypes from "../../QuestTypes.tsx";
import AnalyticsTypes from "../../lib/analytics/AnalyticsTypes.tsx";
import QuestDisclosureModalActionCreatorsDefault from "../QuestDisclosureModal/QuestDisclosureModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, StyleSheet } = get_ActivityIndicator);
const QuestConstants = fn(5623);
({ QuestDockMode: hasOwnProperty, QuestsExperimentLocations: metroRequire } = QuestConstants);
const QuestDockConstants = fn(14896);
({ QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED: closure_7 } = QuestDockConstants);
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const PX_32 = nativeDefault.space.PX_32;
let c10 = 0.7;
const createStyles = fn(4890);
let obj = {
  wrapper: {
    alignItems: "center",
    alignSelf: "stretch",
    display: "flex",
    flexDirection: "row",
    gap: nativeDefault.space.PX_12,
    justifyContent: "flex-start",
    flex: 1,
    paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
  },
  productIcon: null,
  crossFadeWrapper: null,
  copy: null,
  promotedLabel: null,
  smokeArt: null,
  smokeArtFade: null,
  title: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
  borderRadius: nativeDefault.radii.sm,
  flexGrow: 0,
  flexShrink: 0,
  height: PX_32,
  width: PX_32,
};
obj.productIcon = size;
obj.crossFadeWrapper = { alignSelf: "stretch", flex: 1 };
obj.copy = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", right: 0, top: 0 };
obj.promotedLabel = { bottom: 0, justifyContent: "center", left: 0, position: "absolute", top: 0 };
obj.smokeArt = { position: "absolute", left: -QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT, bottom: 0 };
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj.smokeArtFade = {};
obj.title = { lineHeight: 16 };
let closure_11 = createStyles.createStyles(obj);
const __initData = {
  code: "function QuestDockBountyHeaderTsx1(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData2 = {
  code: "function QuestDockBountyHeaderTsx2(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData3 = {
  code: "function QuestDockBountyHeaderTsx3(){const{withSpring,activeQuestDockMode,QuestDockMode,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?0:1,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const __initData4 = {
  code: "function QuestDockBountyHeaderTsx4(){const{withSpring,activeQuestDockMode,QuestDockMode,PROMOTED_LABEL_OPACITY,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED}=this.__closure;return{opacity:withSpring(activeQuestDockMode.get()===QuestDockMode.EXPANDED?PROMOTED_LABEL_OPACITY:0,QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED)};}",
};
const ReactCompilerGating = fn(558);
let obj3 = {
  alignItems: "center",
  alignSelf: "stretch",
  display: "flex",
  flexDirection: "row",
  gap: nativeDefault.space.PX_12,
  justifyContent: "flex-start",
  flex: 1,
  paddingLeft: nativeDefault.space.PX_12 - QUEST_DOCK_COLLAPSED_HEADER_PADDING_LEFT,
};
let obj4 = {};
size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockBountyHeader.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        const cResult = activeQuestDockMode(576).c(67);
        let obj = activeQuestDockMode(576);
        const questDockBounty = activeQuestDockMode(14925).useQuestDockBounty();
        const tmp5 = closure_11();
        let str = questDockBounty.productName;
        if (str == null) {
          str = "";
        }
        activeQuestDockMode = noop.useContext(tmp(14897).QuestDockGestureContext).activeQuestDockMode;
        let obj2 = activeQuestDockMode(14925);
        const fn = function o() {
          let num = 1;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 0;
          }
          return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        };
        const tmpResult = activeQuestDockMode(4612);
        fn.__closure = {
          withSpring: activeQuestDockMode(5597).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        fn.__workletHash = 16909083558605;
        fn.__initData = __initData;
        const animatedStyle = tmpResult.useAnimatedStyle(fn);
        const obj3 = {
          withSpring: activeQuestDockMode(5597).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        const fn2 = function s() {
          let num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = c10;
          }
          return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        };
        const tmpResult7 = activeQuestDockMode(4612);
        fn2.__closure = {
          withSpring: activeQuestDockMode(5597).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          PROMOTED_LABEL_OPACITY,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        fn2.__workletHash = 273450441779;
        fn2.__initData = __initData2;
        const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
        const obj4 = {
          withSpring: activeQuestDockMode(5597).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          PROMOTED_LABEL_OPACITY,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        const tmp9 = bountyCreative(7941)(activeQuestDockMode);
        const isBountiesAndroidQuestBarSmokeAnimationEnabled = activeQuestDockMode(
          15007,
        ).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
        if (cResult[0] !== isBountiesAndroidQuestBarSmokeAnimationEnabled) {
          const tmp12 = tmp(1369).isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
          cResult[0] = isBountiesAndroidQuestBarSmokeAnimationEnabled;
          cResult[1] = tmp12;
          let tmp11 = tmp12;
          const tmpResult9 = tmp(1369);
        } else {
          tmp11 = cResult[1];
        }
        const tmpResult8 = activeQuestDockMode(15007);
        const smokeArtSize = activeQuestDockMode(15006).useSmokeArtSize();
        ({ width, height } = smokeArtSize);
        if (cResult[2] === height) {
          if (cResult[3] === width) {
            let tmp14 = cResult[4];
          }
          bountyCreative = tmp(14925).useBountyCreative(questDockBounty);
          const tmpResult11 = tmp(14925);
          const actionSheetPressHandler = tmp(14893).useActionSheetPressHandler(bountyCreative);
          if (cResult[5] !== bountyCreative) {
            const fn3 = function w() {
              const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: null };
              const obj = QuestDisclosureModalActionCreatorsDefault;
              obj2.trackingCtx = {
                content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
                ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
                sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
              };
              obj.showModal(obj2);
            };
            cResult[5] = bountyCreative;
            cResult[6] = fn3;
            let tmp17 = fn3;
          } else {
            tmp17 = cResult[6];
          }
          const _Symbol = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp21 = closure_8(tmp8(15014), {});
            cResult[7] = tmp21;
            let tmp19 = tmp21;
          } else {
            tmp19 = cResult[7];
          }
          if (cResult[8] === tmp14) {
            if (cResult[9] === tmp5.smokeArt) {
              let tmp22 = cResult[10];
            }
            let str3 = "no-offscreen-compositing";
            if (tmp11) {
              str3 = "offscreen-compositing";
            }
            if (cResult[11] === animatedStyle) {
              if (cResult[12] === tmp5.smokeArtFade) {
                let tmp23 = cResult[13];
              }
              if (cResult[14] !== (tmp9 === QuestDockMode.EXPANDED)) {
                const obj5 = { surface: tmp(15006).QuestDockBountySmokeSurface.COLLAPSED, paused: tmp24 };
                const tmp28 = closure_8(tmp8(15006), obj5);
                cResult[14] = tmp24;
                cResult[15] = tmp28;
                let tmp25 = tmp28;
                const tmp8Result = tmp8(15006);
              } else {
                tmp25 = cResult[15];
              }
              if (cResult[16] === tmp11) {
                if (cResult[17] === str3) {
                  if (cResult[18] === tmp23) {
                    if (cResult[19] === tmp25) {
                      let tmp29 = cResult[20];
                    }
                    if (cResult[21] === tmp22) {
                      if (cResult[22] === tmp29) {
                        let tmp32 = cResult[23];
                      }
                      if (cResult[24] === questDockBounty.productIcon) {
                        if (cResult[25] === tmp5.productIcon) {
                          let tmp36 = cResult[26];
                        }
                        if (cResult[27] === animatedStyle) {
                          if (cResult[28] === tmp5.copy) {
                            let tmp39 = cResult[29];
                          }
                          let str5 = "yes";
                          if (tmp24) {
                            str5 = "no-hide-descendants";
                          }
                          if (cResult[30] === tmp5.title) {
                            if (cResult[31] === str) {
                              let tmp40 = cResult[32];
                            }
                            if (cResult[33] === tmp24) {
                              if (cResult[34] === str5) {
                                if (cResult[35] === tmp40) {
                                  if (cResult[36] === str) {
                                    let tmp43 = cResult[37];
                                  }
                                  if (cResult[38] === tmp39) {
                                    if (cResult[39] === tmp43) {
                                      let tmp47 = cResult[40];
                                    }
                                    if (cResult[41] === animatedStyle1) {
                                      if (cResult[42] === tmp5.promotedLabel) {
                                        let tmp50 = cResult[43];
                                      }
                                      let str6 = "none";
                                      if (tmp24) {
                                        str6 = "auto";
                                      }
                                      let str7 = "no-hide-descendants";
                                      if (tmp24) {
                                        str7 = "yes";
                                      }
                                      const _Symbol2 = Symbol;
                                      if (cResult[44] === Symbol.for("react.memo_cache_sentinel")) {
                                        const obj6 = {
                                          variant: "text-sm/medium",
                                          color: "text-default",
                                          children: null,
                                        };
                                        const intl = tmp(1126).intl;
                                        obj6.children = intl.string(tmp(1126).t.o6FLcF);
                                        const tmp53 = closure_8(tmp(4886).Text, obj6);
                                        cResult[44] = tmp53;
                                        let tmp51 = tmp53;
                                      } else {
                                        tmp51 = cResult[44];
                                      }
                                      if (cResult[45] !== tmp17) {
                                        const obj7 = { onPress: tmp17, accessibilityRole: "button", children: tmp51 };
                                        const tmp56 = closure_8(tmp(5909).PressableOpacity, obj7);
                                        cResult[45] = tmp17;
                                        cResult[46] = tmp56;
                                        let tmp54 = tmp56;
                                      } else {
                                        tmp54 = cResult[46];
                                      }
                                      if (cResult[47] === str6) {
                                        if (cResult[48] === tmp57) {
                                          if (cResult[49] === str7) {
                                            if (cResult[50] === tmp54) {
                                              let tmp58 = cResult[51];
                                            }
                                            if (cResult[52] === tmp50) {
                                              if (cResult[53] === tmp58) {
                                                let tmp62 = cResult[54];
                                              }
                                              if (cResult[55] === tmp5.crossFadeWrapper) {
                                                if (cResult[56] === tmp47) {
                                                  if (cResult[57] === tmp62) {
                                                    let tmp65 = cResult[58];
                                                  }
                                                  if (cResult[59] === tmp5.wrapper) {
                                                    if (cResult[60] === tmp36) {
                                                      if (cResult[61] === tmp65) {
                                                        let tmp69 = cResult[62];
                                                      }
                                                      if (cResult[63] === actionSheetPressHandler) {
                                                        if (cResult[64] === tmp69) {
                                                          if (cResult[65] === tmp32) {
                                                            let tmp73 = cResult[66];
                                                          }
                                                          return tmp73;
                                                        }
                                                      }
                                                      const obj8 = {
                                                        onSubmenuPress: actionSheetPressHandler,
                                                        hideBlurWhenCollapsed: true,
                                                        promotedLabelLeading: true,
                                                        collapsedContent: tmp19,
                                                        secondaryContentWidth:
                                                          tmp(15014).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH,
                                                        children: null,
                                                      };
                                                      const items = [tmp32, tmp69];
                                                      obj8.children = items;
                                                      const tmp76 = closure_9(tmp8(14996), obj8);
                                                      cResult[63] = actionSheetPressHandler;
                                                      cResult[64] = tmp69;
                                                      cResult[65] = tmp32;
                                                      cResult[66] = tmp76;
                                                      tmp73 = tmp76;
                                                      const tmp8Result2 = tmp8(14996);
                                                    }
                                                  }
                                                  const obj9 = { style: tmp5.wrapper, children: null };
                                                  const items1 = [tmp36, tmp65];
                                                  obj9.children = items1;
                                                  const tmp72 = closure_9(closure_4, obj9);
                                                  cResult[59] = tmp5.wrapper;
                                                  cResult[60] = tmp36;
                                                  cResult[61] = tmp65;
                                                  cResult[62] = tmp72;
                                                  tmp69 = tmp72;
                                                }
                                              }
                                              const obj10 = { style: tmp5.crossFadeWrapper, children: null };
                                              const items2 = [tmp47, tmp62];
                                              obj10.children = items2;
                                              const tmp68 = closure_9(closure_4, obj10);
                                              cResult[55] = tmp5.crossFadeWrapper;
                                              cResult[56] = tmp47;
                                              cResult[57] = tmp62;
                                              cResult[58] = tmp68;
                                              tmp65 = tmp68;
                                            }
                                            const obj11 = { style: tmp50, children: tmp58 };
                                            const tmp64 = closure_8(tmp8(6570), obj11);
                                            cResult[52] = tmp50;
                                            cResult[53] = tmp58;
                                            cResult[54] = tmp64;
                                            tmp62 = tmp64;
                                          }
                                        }
                                      }
                                      const obj12 = {
                                        pointerEvents: str6,
                                        accessibilityElementsHidden: !tmp24,
                                        importantForAccessibility: str7,
                                        children: tmp54,
                                      };
                                      const tmp61 = closure_8(closure_4, obj12);
                                      cResult[47] = str6;
                                      cResult[48] = !tmp24;
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
                                  const tmp49 = closure_8(tmp8(6570), obj13);
                                  cResult[38] = tmp39;
                                  cResult[39] = tmp43;
                                  cResult[40] = tmp49;
                                  tmp47 = tmp49;
                                }
                              }
                            }
                            const obj14 = {
                              accessible: true,
                              accessibilityRole: "text",
                              accessibilityLabel: str,
                              accessibilityElementsHidden: tmp24,
                              importantForAccessibility: str5,
                              children: tmp40,
                            };
                            const tmp46 = closure_8(closure_4, obj14);
                            cResult[33] = tmp24;
                            cResult[34] = str5;
                            cResult[35] = tmp40;
                            cResult[36] = str;
                            cResult[37] = tmp46;
                            tmp43 = tmp46;
                          }
                          const obj15 = {
                            variant: "text-sm/medium",
                            color: "text-strong",
                            lineClamp: 2,
                            accessible: false,
                            style: tmp5.title,
                            children: str,
                          };
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
                        const obj16 = {
                          style: tmp5.productIcon,
                          source: null,
                          resizeMode: "cover",
                          accessible: false,
                          importantForAccessibility: "no",
                        };
                        const obj17 = { uri: questDockBounty.productIcon };
                        obj16.source = obj17;
                        tmp37 = closure_8(tmp8(5974), obj16);
                      }
                      cResult[24] = questDockBounty.productIcon;
                      cResult[25] = tmp5.productIcon;
                      cResult[26] = tmp37;
                      tmp36 = tmp37;
                    }
                    const obj18 = {
                      style: tmp22,
                      pointerEvents: "none",
                      accessible: false,
                      importantForAccessibility: "no-hide-descendants",
                      children: tmp29,
                    };
                    const tmp35 = closure_8(closure_4, obj18);
                    cResult[21] = tmp22;
                    cResult[22] = tmp29;
                    cResult[23] = tmp35;
                    tmp32 = tmp35;
                  }
                }
              }
              const obj19 = { style: tmp23, needsOffscreenAlphaCompositing: tmp11, children: tmp25 };
              const tmp31 = closure_8(tmp8(6570), obj19, str3);
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
          const tmpResult12 = tmp(14893);
        }
        const size = { width, height };
        cResult[2] = height;
        cResult[3] = width;
        cResult[4] = size;
        tmp14 = size;
        const tmpResult10 = activeQuestDockMode(15006);
      }
    : () => {
        const questDockBounty = activeQuestDockMode(height[9]).useQuestDockBounty();
        const tmp4 = closure_11();
        let str = questDockBounty.productName;
        if (str == null) {
          str = "";
        }
        activeQuestDockMode = bountyCreative.useContext(tmp(tmp2[10]).QuestDockGestureContext).activeQuestDockMode;
        let obj = activeQuestDockMode(height[9]);
        const fn = function o() {
          let num = 1;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = 0;
          }
          return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        };
        const tmpResult = activeQuestDockMode(height[11]);
        fn.__closure = {
          withSpring: activeQuestDockMode(height[12]).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        fn.__workletHash = 1400703902479;
        fn.__initData = __initData3;
        const animatedStyle = tmpResult.useAnimatedStyle(fn);
        const obj3 = {
          withSpring: activeQuestDockMode(height[12]).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        const fn2 = function s() {
          let num = 0;
          if (activeQuestDockMode.get() === QuestDockMode.EXPANDED) {
            num = c10;
          }
          return { opacity: spring.withSpring(num, QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED) };
        };
        const tmpResult7 = activeQuestDockMode(height[11]);
        fn2.__closure = {
          withSpring: activeQuestDockMode(height[12]).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          PROMOTED_LABEL_OPACITY,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        fn2.__workletHash = 799684402037;
        fn2.__initData = __initData4;
        const animatedStyle1 = tmpResult7.useAnimatedStyle(fn2);
        const obj4 = {
          withSpring: activeQuestDockMode(height[12]).withSpring,
          activeQuestDockMode,
          QuestDockMode,
          PROMOTED_LABEL_OPACITY,
          QUEST_DOCK_MODE_CHANGE_PHYSICS_CLAMPED,
        };
        const tmp8 = width(height[13])(activeQuestDockMode);
        const isBountiesAndroidQuestBarSmokeAnimationEnabled = activeQuestDockMode(
          height[14],
        ).useIsBountiesAndroidQuestBarSmokeAnimationEnabled(constants.QUESTS_BAR_MOBILE);
        const tmpResult8 = activeQuestDockMode(height[14]);
        const tmp10 = activeQuestDockMode(height[15]).isAndroid() && isBountiesAndroidQuestBarSmokeAnimationEnabled;
        const tmpResult9 = activeQuestDockMode(height[15]);
        let size = activeQuestDockMode(height[16]).useSmokeArtSize();
        width = size.width;
        height = size.height;
        const items = [width, height];
        const memo = obj2.useMemo(() => {
          const size = { width, height };
          return size;
        }, items);
        const tmpResult10 = activeQuestDockMode(height[16]);
        bountyCreative = activeQuestDockMode(height[9]).useBountyCreative(questDockBounty);
        const tmpResult11 = activeQuestDockMode(height[9]);
        const items1 = [bountyCreative];
        const tmpResult12 = activeQuestDockMode(height[17]);
        const callback = obj2.useCallback(() => {
          const obj2 = { creative: bountyCreative, isTargetedDisclosure: true, trackingCtx: null };
          const obj = QuestDisclosureModalActionCreatorsDefault;
          obj2.trackingCtx = {
            content: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
            ctaContent: AnalyticsTypes.QuestContentCTA.CONTEXT_MENU_OPEN_DISCLOSURE,
            sourceQuestContent: QuestTypes.QuestContent.QUEST_BAR_MOBILE,
          };
          obj.showModal(obj2);
        }, items1);
        const obj5 = {
          onSubmenuPress: activeQuestDockMode(height[17]).useActionSheetPressHandler(bountyCreative),
          hideBlurWhenCollapsed: true,
          promotedLabelLeading: true,
          collapsedContent: null,
          secondaryContentWidth: null,
          children: null,
        };
        const actionSheetPressHandler = activeQuestDockMode(height[17]).useActionSheetPressHandler(bountyCreative);
        obj5.collapsedContent = closure_8(width(height[21]), {});
        obj5.secondaryContentWidth = activeQuestDockMode(height[21]).QUEST_DOCK_BOUNTY_ILLUSTRATION_RESERVED_WIDTH;
        const obj6 = {
          style: null,
          pointerEvents: "none",
          accessible: false,
          importantForAccessibility: "no-hide-descendants",
          children: null,
        };
        const items2 = [tmp4.smokeArt, memo];
        obj6.style = items2;
        const obj7 = { style: null, needsOffscreenAlphaCompositing: tmp10, children: null };
        const items3 = [tmp4.smokeArtFade, animatedStyle];
        obj7.style = items3;
        const tmp7Result = width(height[27]);
        const obj8 = { surface: null, paused: null };
        const tmp7Result5 = width(height[22]);
        obj8.surface = activeQuestDockMode(height[16]).QuestDockBountySmokeSurface.COLLAPSED;
        obj8.paused = tmp8 === QuestDockMode.EXPANDED;
        obj7.children = closure_8(width(height[16]), obj8);
        let str2 = "no-offscreen-compositing";
        if (tmp10) {
          str2 = "offscreen-compositing";
        }
        obj6.children = closure_8(tmp7Result5, obj7, str2);
        const items4 = [closure_8(closure_4, obj6)];
        const obj9 = { style: tmp4.wrapper, children: null };
        let tmp18Result = null != questDockBounty.productIcon;
        if (tmp18Result) {
          const obj10 = {
            style: tmp4.productIcon,
            source: null,
            resizeMode: "cover",
            accessible: false,
            importantForAccessibility: "no",
          };
          const obj11 = { uri: questDockBounty.productIcon };
          obj10.source = obj11;
          tmp18Result = closure_8(tmp7(tmp2[23]), obj10);
        }
        const items5 = [tmp18Result];
        const obj12 = { style: tmp4.crossFadeWrapper, children: null };
        const obj13 = { style: null, children: null };
        const items6 = [tmp4.copy, animatedStyle];
        obj13.style = items6;
        const obj14 = {
          accessible: true,
          accessibilityRole: "text",
          accessibilityLabel: str,
          accessibilityElementsHidden: tmp8 === QuestDockMode.EXPANDED,
          importantForAccessibility: null,
          children: null,
        };
        let str3 = "yes";
        const tmp7Result6 = width(height[16]);
        if (tmp8 === QuestDockMode.EXPANDED) {
          str3 = "no-hide-descendants";
        }
        obj14.importantForAccessibility = str3;
        obj14.children = closure_8(activeQuestDockMode(height[24]).Text, {
          variant: "text-sm/medium",
          color: "text-strong",
          lineClamp: 2,
          accessible: false,
          style: tmp4.title,
          children: str,
        });
        obj13.children = closure_8(closure_4, obj14);
        const items7 = [closure_8(width(height[22]), obj13)];
        const obj16 = { style: null, children: null };
        const items8 = [tmp4.promotedLabel, animatedStyle1];
        obj16.style = items8;
        let str4 = "none";
        const obj15 = {
          variant: "text-sm/medium",
          color: "text-strong",
          lineClamp: 2,
          accessible: false,
          style: tmp4.title,
          children: str,
        };
        const tmp7Result7 = width(height[22]);
        if (tmp8 === QuestDockMode.EXPANDED) {
          str4 = "auto";
        }
        const obj17 = {
          pointerEvents: str4,
          accessibilityElementsHidden: tmp8 !== QuestDockMode.EXPANDED,
          importantForAccessibility: null,
          children: null,
        };
        let str5 = "no-hide-descendants";
        if (tmp8 === QuestDockMode.EXPANDED) {
          str5 = "yes";
        }
        obj17.importantForAccessibility = str5;
        const obj18 = { onPress: callback, accessibilityRole: "button", children: null };
        const obj19 = { variant: "text-sm/medium", color: "text-default", children: null };
        const intl = tmp(tmp2[25]).intl;
        obj19.children = intl.string(activeQuestDockMode(height[25]).t.o6FLcF);
        obj18.children = closure_8(activeQuestDockMode(height[24]).Text, obj19);
        obj17.children = closure_8(activeQuestDockMode(height[26]).PressableOpacity, obj18);
        obj16.children = closure_8(closure_4, obj17);
        items7[1] = closure_8(width(height[22]), obj16);
        obj12.children = items7;
        items5[1] = closure_9(closure_4, obj12);
        obj9.children = items5;
        items4[1] = closure_9(closure_4, obj9);
        obj5.children = items4;
        return closure_9(tmp7Result, obj5);
      },
);
