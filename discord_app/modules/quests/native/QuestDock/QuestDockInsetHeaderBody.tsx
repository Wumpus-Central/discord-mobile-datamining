// === Module 15002: QuestDockInsetHeaderBody ===

// Module 15002 (QuestDockInsetHeaderBody)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4886 */;
import components_Button_Button from "components/Button/Button" /* 5594 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 10950 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 10951 */;
import QuestDockHooks from "QuestDockHooks" /* 14893 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14963 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 14966 */;
import react from "react" /* 19 */;
import QuestDockConstants from "QuestDockConstants" /* 14896 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let rect1;
const View = react_native.View;
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
const PX_80 = nativeDefault.space.PX_80;
let createStyles = createStyles_mod;
let obj = { rewardTile: obj2, wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentContainer: { position: "relative" }, rewardContentWrapper: obj3, contentBadge: rect, rewardContent: { alignItems: "center", flexDirection: "row", gap: 16 }, rewardContentCopy: { flexGrow: 1, flexShrink: 1, gap: 4 }, premiumRewardPerkPill: { alignSelf: "flex-start" }, titleRow: obj4, questDockCtaWrapper: { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" }, questDockCta: obj5, questDockCtaRow: obj6, questDockCtaSaparator: rect1 };
obj2 = { borderRadius: nativeDefault.radii.lg };
createStyles = createStyles.createStyles;
obj3 = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
rect = { position: "absolute", top: -10, right: nativeDefault.space.PX_12, zIndex: 1 };
obj4 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj5 = { borderRadius: nativeDefault.radii.round };
obj6 = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
rect1 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
let closure_8 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = closure_8();
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === tmp3.rewardTile) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { height: PX_80, width: PX_80, style: tmp3.rewardTile };
  const tmp5 = QuestDockRewardTileDefault;
  const merged = Object.assign(arg0);
  const tmp7 = hasOwnProperty(tmp5, obj2);
  cResult[0] = arg0;
  cResult[1] = tmp3.rewardTile;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : ((arg0) => {
  let tmp;
  const obj = { height: PX_80, width: PX_80, style: tmp.rewardTile };
  tmp = closure_8();
  const tmp2 = QuestDockRewardTileDefault;
  const merged = Object.assign(arg0);
  return hasOwnProperty(tmp2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const obj = react2;
  const cResult = obj.c(3);
  const tmp3 = closure_8();
  if (cResult[0] === arg0) {
    let tmp4;
    if (cResult[1] === tmp3.rewardTile) {
      tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = { height: PX_80, width: PX_80, style: tmp3.rewardTile };
  const tmp5 = QuestRewardTileDefault;
  const merged = Object.assign(arg0);
  const tmp7 = hasOwnProperty(tmp5, obj2);
  cResult[0] = arg0;
  cResult[1] = tmp3.rewardTile;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : ((arg0) => {
  let tmp;
  const obj = { height: PX_80, width: PX_80, style: tmp.rewardTile };
  tmp = closure_8();
  const tmp2 = QuestRewardTileDefault;
  const merged = Object.assign(arg0);
  return hasOwnProperty(tmp2, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let contentBadge;
  let ctaButtonVariant;
  let ctaLoading;
  let ctaText;
  let description;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let onCtaPress;
  let premiumRewardPerkPill;
  let renderCtaIcon;
  let renderCtaIconResult;
  let rewardTile;
  let secondaryCta;
  let showBonusOrbsGradient;
  let title;
  let tmp10;
  const obj = react2;
  const cResult = obj.c(58);
  ({ rewardTile, premiumRewardPerkPill, contentBadge, title, description, ctaText, onCtaPress, renderCtaIcon, ctaButtonVariant, secondaryCta, ctaLoading, showBonusOrbsGradient } = arg0);
  let str = "primary";
  if (undefined !== ctaButtonVariant) {
    str = ctaButtonVariant;
  }
  const tmp6 = closure_8();
  const tmpResult = QuestDockHooks;
  const isQuestDockExpanded = tmpResult.useIsQuestDockExpanded();
  const wrapper = tmp6.wrapper;
  const bound = Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  if (cResult[0] !== bound) {
    const obj2 = { paddingBottom: bound };
    cResult[0] = bound;
    cResult[1] = obj2;
    tmp10 = obj2;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === tmp6.wrapper) {
    let tmp11;
    let tmp12;
    if (cResult[3] === tmp10) {
      tmp11 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp14 = hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {});
      cResult[5] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[5];
    }
    if (cResult[6] === premiumRewardPerkPill) {
      let tmp15;
      let tmp20;
      if (cResult[7] === tmp6.premiumRewardPerkPill) {
        tmp15 = cResult[8];
      }
      if (cResult[9] !== title) {
        const obj3 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title };
        const tmp22 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[9] = title;
        cResult[10] = tmp22;
        tmp20 = tmp22;
      } else {
        tmp20 = cResult[10];
      }
      if (cResult[11] === tmp6.titleRow) {
        let tmp23;
        let tmp27;
        if (cResult[12] === tmp20) {
          tmp23 = cResult[13];
        }
        if (cResult[14] !== description) {
          const obj4 = { color: "text-default", variant: "text-sm/normal", children: description };
          const tmp29 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[14] = description;
          cResult[15] = tmp29;
          tmp27 = tmp29;
        } else {
          tmp27 = cResult[15];
        }
        if (cResult[16] === tmp6.rewardContentCopy) {
          if (cResult[17] === tmp23) {
            if (cResult[18] === tmp27) {
              let tmp30;
              if (cResult[19] === tmp15) {
                tmp30 = cResult[20];
              }
              if (cResult[21] === rewardTile) {
                if (cResult[22] === tmp6.rewardContent) {
                  let tmp34;
                  if (cResult[23] === tmp30) {
                    tmp34 = cResult[24];
                  }
                  if (cResult[25] === tmp6.rewardContentWrapper) {
                    let tmp38;
                    if (cResult[26] === tmp34) {
                      tmp38 = cResult[27];
                    }
                    if (cResult[28] === contentBadge) {
                      let tmp42;
                      if (cResult[29] === tmp6.contentBadge) {
                        tmp42 = cResult[30];
                      }
                      if (cResult[31] === tmp6.rewardContentContainer) {
                        if (cResult[32] === tmp38) {
                          let tmp47;
                          let tmp51;
                          let tmp58Result;
                          if (cResult[33] === tmp42) {
                            tmp47 = cResult[34];
                          }
                          if (cResult[35] !== tmp6.questDockCtaSaparator) {
                            const obj5 = { style: tmp6.questDockCtaSaparator };
                            const tmp54 = hasOwnProperty(View, obj5);
                            cResult[35] = tmp6.questDockCtaSaparator;
                            cResult[36] = tmp54;
                            tmp51 = tmp54;
                          } else {
                            tmp51 = cResult[36];
                          }
                          if (cResult[37] === str) {
                            if (cResult[38] === (undefined !== ctaLoading && ctaLoading)) {
                              if (cResult[39] === ctaText) {
                                if (cResult[40] === isQuestDockExpanded) {
                                  if (cResult[41] === onCtaPress) {
                                    if (cResult[42] === renderCtaIcon) {
                                      let tmp55;
                                      if (cResult[43] === tmp6.questDockCta) {
                                        tmp55 = cResult[44];
                                      }
                                      if (cResult[45] === secondaryCta) {
                                        if (cResult[46] === tmp6.questDockCtaRow) {
                                          let tmp61;
                                          if (cResult[47] === tmp55) {
                                            tmp61 = cResult[48];
                                          }
                                          if (cResult[49] === tmp6.questDockCtaWrapper) {
                                            if (cResult[50] === tmp51) {
                                              let tmp65;
                                              if (cResult[51] === tmp61) {
                                                tmp65 = cResult[52];
                                              }
                                              if (cResult[53] === (undefined !== showBonusOrbsGradient && showBonusOrbsGradient)) {
                                                if (cResult[54] === tmp47) {
                                                  if (cResult[55] === tmp65) {
                                                    let tmp69;
                                                    if (cResult[56] === tmp11) {
                                                      tmp69 = cResult[57];
                                                    }
                                                    return tmp69;
                                                  }
                                                }
                                              }
                                              const obj6 = { visible: undefined !== showBonusOrbsGradient && showBonusOrbsGradient, glow: true, style: tmp11, children: items };
                                              items = [tmp47, tmp65];
                                              const tmp71 = metroRequire(PremiumRewardGradientDefault, obj6);
                                              cResult[53] = undefined !== showBonusOrbsGradient && showBonusOrbsGradient;
                                              cResult[54] = tmp47;
                                              cResult[55] = tmp65;
                                              cResult[56] = tmp11;
                                              cResult[57] = tmp71;
                                              tmp69 = tmp71;
                                            }
                                          }
                                          const obj7 = { style: tmp6.questDockCtaWrapper, children: items1 };
                                          items1 = [tmp51, tmp61];
                                          const tmp68 = metroRequire(View, obj7);
                                          cResult[49] = tmp6.questDockCtaWrapper;
                                          cResult[50] = tmp51;
                                          cResult[51] = tmp61;
                                          cResult[52] = tmp68;
                                          tmp65 = tmp68;
                                        }
                                      }
                                      const obj8 = { style: tmp6.questDockCtaRow, children: items2 };
                                      items2 = [secondaryCta, tmp55];
                                      const tmp64 = metroRequire(View, obj8);
                                      cResult[45] = secondaryCta;
                                      cResult[46] = tmp6.questDockCtaRow;
                                      cResult[47] = tmp55;
                                      cResult[48] = tmp64;
                                      tmp61 = tmp64;
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if ("primary" === str) {
                            const obj9 = { variant: "primary", grow: true, onPress: onCtaPress, loading: undefined !== ctaLoading && ctaLoading, icon: renderCtaIconResult, text: ctaText };
                            renderCtaIconResult = undefined;
                            const Button = components_Button_Button.Button;
                            if (renderCtaIcon != null) {
                              renderCtaIconResult = renderCtaIcon();
                            }
                            tmp58Result = hasOwnProperty(Button, obj9);
                          } else {
                            const obj10 = { style: tmp6.questDockCta, onPress: onCtaPress, loading: undefined !== ctaLoading && ctaLoading, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
                            tmp58Result = hasOwnProperty(native.ShinyButton, obj10);
                          }
                          cResult[37] = str;
                          cResult[38] = undefined !== ctaLoading && ctaLoading;
                          cResult[39] = ctaText;
                          cResult[40] = isQuestDockExpanded;
                          cResult[41] = onCtaPress;
                          cResult[42] = renderCtaIcon;
                          cResult[43] = tmp6.questDockCta;
                          cResult[44] = tmp58Result;
                          tmp55 = tmp58Result;
                        }
                      }
                      const obj11 = { style: tmp6.rewardContentContainer, children: items3 };
                      items3 = [tmp38, tmp42];
                      const tmp50 = metroRequire(View, obj11);
                      cResult[31] = tmp6.rewardContentContainer;
                      cResult[32] = tmp38;
                      cResult[33] = tmp42;
                      cResult[34] = tmp50;
                      tmp47 = tmp50;
                    }
                    let tmp44 = null != contentBadge;
                    if (tmp44) {
                      const obj12 = { style: tmp6.contentBadge, children: contentBadge };
                      tmp44 = hasOwnProperty(View, obj12);
                    }
                    cResult[28] = contentBadge;
                    cResult[29] = tmp6.contentBadge;
                    cResult[30] = tmp44;
                    tmp42 = tmp44;
                  }
                  const obj13 = { style: tmp6.rewardContentWrapper, children: items4 };
                  items4 = [tmp12, tmp34];
                  const tmp41 = metroRequire(View, obj13);
                  cResult[25] = tmp6.rewardContentWrapper;
                  cResult[26] = tmp34;
                  cResult[27] = tmp41;
                  tmp38 = tmp41;
                }
              }
              const obj14 = { style: tmp6.rewardContent, children: items5 };
              items5 = [rewardTile, tmp30];
              const tmp37 = metroRequire(View, obj14);
              cResult[21] = rewardTile;
              cResult[22] = tmp6.rewardContent;
              cResult[23] = tmp30;
              cResult[24] = tmp37;
              tmp34 = tmp37;
            }
          }
        }
        const obj15 = { style: tmp6.rewardContentCopy, children: items6 };
        items6 = [tmp15, tmp23, tmp27];
        const tmp33 = metroRequire(View, obj15);
        cResult[16] = tmp6.rewardContentCopy;
        cResult[17] = tmp23;
        cResult[18] = tmp27;
        cResult[19] = tmp15;
        cResult[20] = tmp33;
        tmp30 = tmp33;
      }
      const obj16 = { style: tmp6.titleRow, children: tmp20 };
      const tmp26 = hasOwnProperty(View, obj16);
      cResult[11] = tmp6.titleRow;
      cResult[12] = tmp20;
      cResult[13] = tmp26;
      tmp23 = tmp26;
    }
    let tmp17 = null != premiumRewardPerkPill;
    if (tmp17) {
      const obj17 = { style: tmp6.premiumRewardPerkPill, children: premiumRewardPerkPill };
      tmp17 = hasOwnProperty(View, obj17);
    }
    cResult[6] = premiumRewardPerkPill;
    cResult[7] = tmp6.premiumRewardPerkPill;
    cResult[8] = tmp17;
    tmp15 = tmp17;
  }
  const items7 = [wrapper, tmp10];
  cResult[2] = tmp6.wrapper;
  cResult[3] = tmp10;
  cResult[4] = items7;
  tmp11 = items7;
}) : ((showBonusOrbsGradient) => {
  let contentBadge;
  let ctaButtonVariant;
  let ctaLoading;
  let ctaText;
  let description;
  let items;
  let items1;
  let items2;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let onCtaPress;
  let premiumRewardPerkPill;
  let renderCtaIcon;
  let renderCtaIconResult;
  let rewardTile;
  let secondaryCta;
  let title;
  let tmp8Result4;
  ({ premiumRewardPerkPill, contentBadge, ctaText, onCtaPress, renderCtaIcon, ctaButtonVariant } = showBonusOrbsGradient);
  ({ rewardTile, title, description } = showBonusOrbsGradient);
  if (ctaButtonVariant === undefined) {
    ctaButtonVariant = "primary";
  }
  ({ ctaLoading, secondaryCta } = showBonusOrbsGradient);
  if (ctaLoading === undefined) {
    ctaLoading = false;
  }
  let flag = showBonusOrbsGradient.showBonusOrbsGradient;
  if (flag === undefined) {
    flag = false;
  }
  const tmp = closure_8();
  const obj = QuestDockHooks;
  const isQuestDockExpanded = obj.useIsQuestDockExpanded();
  const bottom = useSafeAreaInsetsDefault().bottom;
  const obj2 = { visible: flag, glow: true, style: items, children: items5 };
  items = [tmp.wrapper, ];
  const obj3 = { paddingBottom: Math.max(bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM) };
  items[1] = obj3;
  const obj4 = { style: tmp.rewardContentContainer, children: items4 };
  const obj5 = { style: tmp.rewardContentWrapper, children: items1 };
  const tmp6 = PremiumRewardGradientDefault;
  items1 = [hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {}), ];
  const obj6 = { style: tmp.rewardContent, children: items2 };
  items2 = [rewardTile, ];
  let tmp8Result = null != premiumRewardPerkPill;
  const obj7 = { style: tmp.rewardContentCopy, children: items3 };
  if (tmp8Result) {
    const obj8 = { style: tmp.premiumRewardPerkPill, children: premiumRewardPerkPill };
    tmp8Result = hasOwnProperty(View, obj8);
  }
  items3 = [tmp8Result, , ];
  const obj9 = { style: tmp.titleRow, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) };
  items3[1] = hasOwnProperty(View, obj9);
  items3[2] = hasOwnProperty(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: description });
  items2[1] = metroRequire(View, obj7);
  items1[1] = metroRequire(View, obj6);
  items4 = [metroRequire(View, obj5), ];
  let tmp8Result3 = null != contentBadge;
  if (tmp8Result3) {
    const obj10 = { style: tmp.contentBadge, children: contentBadge };
    tmp8Result3 = hasOwnProperty(View, obj10);
  }
  items4[1] = tmp8Result3;
  items5 = [metroRequire(View, obj4), ];
  const obj11 = { style: tmp.questDockCtaWrapper, children: items6 };
  items6 = [, ];
  const obj12 = { style: tmp.questDockCtaSaparator };
  items6[0] = hasOwnProperty(View, obj12);
  const obj13 = { style: tmp.questDockCtaRow, children: items7 };
  items7 = [secondaryCta, ];
  if ("primary" === ctaButtonVariant) {
    const obj14 = { variant: "primary", grow: true, onPress: onCtaPress, loading: ctaLoading, icon: renderCtaIconResult, text: ctaText };
    renderCtaIconResult = undefined;
    const Button = components_Button_Button.Button;
    if (renderCtaIcon != null) {
      renderCtaIconResult = renderCtaIcon();
    }
    tmp8Result4 = hasOwnProperty(Button, obj14);
  } else {
    const obj15 = { style: tmp.questDockCta, onPress: onCtaPress, loading: ctaLoading, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
    tmp8Result4 = hasOwnProperty(native.ShinyButton, obj15);
  }
  items7[1] = tmp8Result4;
  items6[1] = metroRequire(View, obj13);
  items5[1] = metroRequire(View, obj11);
  return metroRequire(tmp6, obj2);
}));
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default memoResult;
export const QuestDockBodyRewardTile = tmp5;
export const QuestDockBodyQuestRewardTile = tmp6;