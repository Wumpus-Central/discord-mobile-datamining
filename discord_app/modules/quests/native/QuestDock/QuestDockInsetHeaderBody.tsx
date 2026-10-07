// === Module 15017: QuestDockInsetHeaderBody ===

// Module 15017 (QuestDockInsetHeaderBody)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import QuestRewardTileDefault from "QuestRewardTile" /* 10963 */;
import QuestDockRewardTileDefault from "QuestDockRewardTile" /* 10964 */;
import QuestDockBlurredContentBackgroundDefault from "QuestDockBlurredContentBackground" /* 14978 */;
import PremiumRewardGradientDefault from "PremiumRewardGradient" /* 14981 */;
import noop from "module_19" /* 19 */;

const native = Button(1188);
const Text_Text = Button(4892);
const components_Button_Button = Button(5601);
const QuestDockHooks = Button(14909);
require = fn;
const View = fn(17).View;
const QuestDockConstants = fn(14912);
const QUEST_DOCK_EXPANDED_PADDING_BOTTOM = QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_BOTTOM;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const PX_80 = nativeDefault.space.PX_80;
const createStyles = fn(4896);
let obj = { rewardTile: { borderRadius: nativeDefault.radii.lg }, wrapper: { flexGrow: 1, flexShrink: 0, justifyContent: "flex-end", paddingHorizontal: QuestDockConstants.QUEST_DOCK_EXPANDED_PADDING_HORIZONTAL, paddingBottom: QUEST_DOCK_EXPANDED_PADDING_BOTTOM }, rewardContentContainer: { position: "relative" }, rewardContentWrapper: null, contentBadge: null, rewardContent: null, rewardContentCopy: null, premiumRewardPerkPill: null, titleRow: null, questDockCtaWrapper: null, questDockCta: null, questDockCtaRow: null, questDockCtaSaparator: null };
let obj3 = { borderRadius: nativeDefault.radii.lg };
obj.rewardContentWrapper = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
const rect = { position: "absolute", top: -10, right: nativeDefault.space.PX_12, zIndex: 1 };
obj.contentBadge = rect;
obj.rewardContent = { alignItems: "center", flexDirection: "row", gap: 16 };
obj.rewardContentCopy = { flexGrow: 1, flexShrink: 1, gap: 4 };
obj.premiumRewardPerkPill = { alignSelf: "flex-start" };
let obj4 = { borderRadius: nativeDefault.modules.mobile.QUEST_DOCK_BORDER_RADIUS, overflow: "hidden", padding: 8, paddingRight: 16 };
obj.titleRow = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCtaWrapper = { marginTop: 12, paddingHorizontal: 4, paddingTop: 16, position: "relative" };
let obj5 = { flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8, flexWrap: "wrap" };
obj.questDockCta = { borderRadius: nativeDefault.radii.round };
let obj6 = { borderRadius: nativeDefault.radii.round };
obj.questDockCtaRow = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
const rect1 = { position: "absolute", left: -12, right: -12, top: 0, backgroundColor: nativeDefault.colors.BORDER_SUBTLE, height: 1, opacity: 1 };
obj.questDockCtaSaparator = rect1;
let closure_8 = createStyles.createStyles(obj);
fn(558);
let obj7 = { alignSelf: "stretch", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const tmp3 = closure_8();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp3.rewardTile) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.height = PX_80;
  obj2.width = PX_80;
  obj2.style = tmp3.rewardTile;
  const tmp7 = hasOwnProperty(QuestDockRewardTileDefault, obj2);
  cResult[0] = arg0;
  cResult[1] = tmp3.rewardTile;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : ((arg0) => {
  const obj = {};
  const tmp = closure_8();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return hasOwnProperty(QuestDockRewardTileDefault, obj);
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(3);
  const tmp3 = closure_8();
  if (cResult[0] === arg0) {
    if (cResult[1] === tmp3.rewardTile) {
      let tmp4 = cResult[2];
    }
    return tmp4;
  }
  const obj2 = {};
  const merged = Object.assign(arg0);
  obj2.height = PX_80;
  obj2.width = PX_80;
  obj2.style = tmp3.rewardTile;
  const tmp7 = hasOwnProperty(QuestRewardTileDefault, obj2);
  cResult[0] = arg0;
  cResult[1] = tmp3.rewardTile;
  cResult[2] = tmp7;
  tmp4 = tmp7;
}) : ((arg0) => {
  const obj = {};
  const tmp = closure_8();
  const merged = Object.assign(arg0);
  obj.height = PX_80;
  obj.width = PX_80;
  obj.style = tmp.rewardTile;
  return hasOwnProperty(QuestRewardTileDefault, obj);
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/QuestDock/QuestDockInsetHeaderBody.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let Button = require;
  const cResult = c.c(58);
  ({ rewardTile, premiumRewardPerkPill, contentBadge, title, description, ctaText, onCtaPress, renderCtaIcon, ctaButtonVariant, secondaryCta, ctaLoading, showBonusOrbsGradient } = arg0);
  let str = "primary";
  if (undefined !== ctaButtonVariant) {
    str = ctaButtonVariant;
  }
  const tmp5 = closure_8();
  const isQuestDockExpanded = QuestDockHooks.useIsQuestDockExpanded();
  const bound = Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  if (cResult[0] !== bound) {
    const obj2 = { paddingBottom: bound };
    cResult[0] = bound;
    cResult[1] = obj2;
    let tmp9 = obj2;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] === tmp5.wrapper) {
    if (cResult[3] === tmp9) {
      let tmp10 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp13 = hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {});
      cResult[5] = tmp13;
      let tmp11 = tmp13;
    } else {
      tmp11 = cResult[5];
    }
    if (cResult[6] === premiumRewardPerkPill) {
      if (cResult[7] === tmp5.premiumRewardPerkPill) {
        let tmp14 = cResult[8];
      }
      if (cResult[9] !== title) {
        const obj3 = { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title };
        const tmp21 = hasOwnProperty(Text_Text.Text, obj3);
        cResult[9] = title;
        cResult[10] = tmp21;
        let tmp19 = tmp21;
      } else {
        tmp19 = cResult[10];
      }
      if (cResult[11] === tmp5.titleRow) {
        if (cResult[12] === tmp19) {
          let tmp22 = cResult[13];
        }
        if (cResult[14] !== description) {
          const obj4 = { color: "text-default", variant: "text-sm/normal", children: description };
          const tmp28 = hasOwnProperty(Text_Text.Text, obj4);
          cResult[14] = description;
          cResult[15] = tmp28;
          let tmp26 = tmp28;
        } else {
          tmp26 = cResult[15];
        }
        if (cResult[16] === tmp5.rewardContentCopy) {
          if (cResult[17] === tmp22) {
            if (cResult[18] === tmp26) {
              if (cResult[19] === tmp14) {
                let tmp29 = cResult[20];
              }
              if (cResult[21] === rewardTile) {
                if (cResult[22] === tmp5.rewardContent) {
                  if (cResult[23] === tmp29) {
                    let tmp33 = cResult[24];
                  }
                  if (cResult[25] === tmp5.rewardContentWrapper) {
                    if (cResult[26] === tmp33) {
                      let tmp37 = cResult[27];
                    }
                    if (cResult[28] === contentBadge) {
                      if (cResult[29] === tmp5.contentBadge) {
                        let tmp41 = cResult[30];
                      }
                      if (cResult[31] === tmp5.rewardContentContainer) {
                        if (cResult[32] === tmp37) {
                          if (cResult[33] === tmp41) {
                            let tmp46 = cResult[34];
                          }
                          if (cResult[35] !== tmp5.questDockCtaSaparator) {
                            const obj5 = { style: tmp5.questDockCtaSaparator };
                            const tmp53 = hasOwnProperty(View, obj5);
                            cResult[35] = tmp5.questDockCtaSaparator;
                            cResult[36] = tmp53;
                            let tmp50 = tmp53;
                          } else {
                            tmp50 = cResult[36];
                          }
                          if (cResult[37] === str) {
                            if (cResult[38] === tmp3) {
                              if (cResult[39] === ctaText) {
                                if (cResult[40] === isQuestDockExpanded) {
                                  if (cResult[41] === onCtaPress) {
                                    if (cResult[42] === renderCtaIcon) {
                                      if (cResult[43] === tmp5.questDockCta) {
                                        if (cResult[45] === secondaryCta) {
                                          if (cResult[46] === tmp5.questDockCtaRow) {
                                            if (cResult[47] === tmp54) {
                                              let tmp61 = cResult[48];
                                            }
                                            if (cResult[49] === tmp5.questDockCtaWrapper) {
                                              if (cResult[50] === tmp50) {
                                                if (cResult[51] === tmp61) {
                                                  let tmp65 = cResult[52];
                                                }
                                                if (cResult[53] === tmp4) {
                                                  if (cResult[54] === tmp46) {
                                                    if (cResult[55] === tmp65) {
                                                      if (cResult[56] === tmp10) {
                                                        let tmp69 = cResult[57];
                                                      }
                                                      return tmp69;
                                                    }
                                                  }
                                                }
                                                const obj6 = { visible: tmp4, glow: true, style: tmp10, children: null };
                                                const items = [tmp46, tmp65];
                                                obj6.children = items;
                                                const tmp71 = timestampProducer(PremiumRewardGradientDefault, obj6);
                                                cResult[53] = tmp4;
                                                cResult[54] = tmp46;
                                                cResult[55] = tmp65;
                                                cResult[56] = tmp10;
                                                cResult[57] = tmp71;
                                                tmp69 = tmp71;
                                              }
                                            }
                                            const obj7 = { style: tmp5.questDockCtaWrapper, children: null };
                                            const items1 = [tmp50, tmp61];
                                            obj7.children = items1;
                                            const tmp68 = timestampProducer(View, obj7);
                                            cResult[49] = tmp5.questDockCtaWrapper;
                                            cResult[50] = tmp50;
                                            cResult[51] = tmp61;
                                            cResult[52] = tmp68;
                                            tmp65 = tmp68;
                                          }
                                        }
                                        const obj8 = { style: tmp5.questDockCtaRow, children: null };
                                        const items2 = [secondaryCta, cResult[44]];
                                        obj8.children = items2;
                                        const tmp64 = timestampProducer(View, obj8);
                                        cResult[45] = secondaryCta;
                                        cResult[46] = tmp5.questDockCtaRow;
                                        cResult[47] = cResult[44];
                                        cResult[48] = tmp64;
                                        tmp61 = tmp64;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                          if ("primary" === str) {
                            Button = components_Button_Button.Button;
                            const obj9 = { variant: "primary", grow: true, onPress: onCtaPress, loading: tmp3, icon: null, text: null };
                            let renderCtaIconResult;
                            if (renderCtaIcon != null) {
                              renderCtaIconResult = renderCtaIcon();
                            }
                            obj9.icon = renderCtaIconResult;
                            obj9.text = ctaText;
                            let tmp57Result = hasOwnProperty(Button, obj9);
                          } else {
                            const obj10 = { style: tmp5.questDockCta, onPress: onCtaPress, loading: tmp3, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
                            tmp57Result = hasOwnProperty(native.ShinyButton, obj10);
                          }
                          cResult[37] = str;
                          cResult[38] = tmp3;
                          cResult[39] = ctaText;
                          cResult[40] = isQuestDockExpanded;
                          cResult[41] = onCtaPress;
                          cResult[42] = renderCtaIcon;
                          renderCtaIcon = tmp5.questDockCta;
                          cResult[43] = renderCtaIcon;
                          cResult[44] = tmp57Result;
                        }
                      }
                      const obj11 = { style: tmp5.rewardContentContainer, children: null };
                      const items3 = [tmp37, tmp41];
                      obj11.children = items3;
                      const tmp49 = timestampProducer(View, obj11);
                      cResult[31] = tmp5.rewardContentContainer;
                      cResult[32] = tmp37;
                      cResult[33] = tmp41;
                      cResult[34] = tmp49;
                      tmp46 = tmp49;
                    }
                    let tmp43 = null != contentBadge;
                    if (tmp43) {
                      const obj12 = { style: tmp5.contentBadge, children: contentBadge };
                      tmp43 = hasOwnProperty(View, obj12);
                    }
                    cResult[28] = contentBadge;
                    cResult[29] = tmp5.contentBadge;
                    cResult[30] = tmp43;
                    tmp41 = tmp43;
                  }
                  const obj13 = { style: tmp5.rewardContentWrapper, children: null };
                  const items4 = [tmp11, tmp33];
                  obj13.children = items4;
                  const tmp40 = timestampProducer(View, obj13);
                  cResult[25] = tmp5.rewardContentWrapper;
                  cResult[26] = tmp33;
                  cResult[27] = tmp40;
                  tmp37 = tmp40;
                }
              }
              const obj14 = { style: tmp5.rewardContent, children: null };
              const items5 = [rewardTile, tmp29];
              obj14.children = items5;
              const tmp36 = timestampProducer(View, obj14);
              cResult[21] = rewardTile;
              cResult[22] = tmp5.rewardContent;
              cResult[23] = tmp29;
              cResult[24] = tmp36;
              tmp33 = tmp36;
            }
          }
        }
        const obj15 = { style: tmp5.rewardContentCopy, children: null };
        const items6 = [tmp14, tmp22, tmp26];
        obj15.children = items6;
        const tmp32 = timestampProducer(View, obj15);
        cResult[16] = tmp5.rewardContentCopy;
        cResult[17] = tmp22;
        cResult[18] = tmp26;
        cResult[19] = tmp14;
        cResult[20] = tmp32;
        tmp29 = tmp32;
      }
      const obj16 = { style: tmp5.titleRow, children: tmp19 };
      const tmp25 = hasOwnProperty(View, obj16);
      cResult[11] = tmp5.titleRow;
      cResult[12] = tmp19;
      cResult[13] = tmp25;
      tmp22 = tmp25;
    }
    let tmp16 = null != premiumRewardPerkPill;
    if (tmp16) {
      const obj17 = { style: tmp5.premiumRewardPerkPill, children: premiumRewardPerkPill };
      tmp16 = hasOwnProperty(View, obj17);
    }
    cResult[6] = premiumRewardPerkPill;
    cResult[7] = tmp5.premiumRewardPerkPill;
    cResult[8] = tmp16;
    tmp14 = tmp16;
  }
  const items7 = [tmp5.wrapper, tmp9];
  cResult[2] = tmp5.wrapper;
  cResult[3] = tmp9;
  cResult[4] = items7;
  tmp10 = items7;
  const ButtonResult = QuestDockHooks;
}) : ((showBonusOrbsGradient) => {
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
  const isQuestDockExpanded = QuestDockHooks.useIsQuestDockExpanded();
  const obj2 = { visible: flag, glow: true, style: null, children: null };
  const items = [tmp.wrapper, ];
  const obj3 = { paddingBottom: null };
  obj3.paddingBottom = Math.max(useSafeAreaInsetsDefault().bottom, QUEST_DOCK_EXPANDED_PADDING_BOTTOM);
  items[1] = obj3;
  obj2.style = items;
  const obj4 = { style: tmp.rewardContentContainer, children: null };
  const obj5 = { style: tmp.rewardContentWrapper, children: null };
  const items1 = [hasOwnProperty(QuestDockBlurredContentBackgroundDefault, {}), ];
  const obj6 = { style: tmp.rewardContent, children: null };
  const items2 = [rewardTile, ];
  const obj7 = { style: tmp.rewardContentCopy, children: null };
  let tmp8Result = null != premiumRewardPerkPill;
  if (tmp8Result) {
    const obj8 = { style: tmp.premiumRewardPerkPill, children: premiumRewardPerkPill };
    tmp8Result = hasOwnProperty(View, obj8);
  }
  const items3 = [tmp8Result, , ];
  const tmp6 = PremiumRewardGradientDefault;
  items3[1] = hasOwnProperty(View, { style: tmp.titleRow, children: hasOwnProperty(Text_Text.Text, { variant: "heading-md/medium", color: "mobile-text-heading-primary", children: title }) });
  items3[2] = hasOwnProperty(Text_Text.Text, { color: "text-default", variant: "text-sm/normal", children: description });
  obj7.children = items3;
  items2[1] = timestampProducer(View, obj7);
  obj6.children = items2;
  items1[1] = timestampProducer(View, obj6);
  obj5.children = items1;
  const items4 = [timestampProducer(View, obj5), ];
  let tmp8Result3 = null != contentBadge;
  if (tmp8Result3) {
    const obj10 = { style: tmp.contentBadge, children: contentBadge };
    tmp8Result3 = hasOwnProperty(View, obj10);
  }
  items4[1] = tmp8Result3;
  obj4.children = items4;
  const items5 = [timestampProducer(View, obj4), ];
  const obj11 = { style: tmp.questDockCtaWrapper, children: null };
  const items6 = [hasOwnProperty(View, { style: tmp.questDockCtaSaparator }), ];
  const obj13 = { style: tmp.questDockCtaRow, children: null };
  const items7 = [secondaryCta, ];
  if ("primary" === ctaButtonVariant) {
    const obj14 = { variant: "primary", grow: true, onPress: onCtaPress, loading: ctaLoading, icon: null, text: null };
    let renderCtaIconResult;
    if (renderCtaIcon != null) {
      renderCtaIconResult = renderCtaIcon();
    }
    obj14.icon = renderCtaIconResult;
    obj14.text = ctaText;
    let tmp8Result4 = hasOwnProperty(components_Button_Button.Button, obj14);
  } else {
    const obj15 = { style: tmp.questDockCta, onPress: onCtaPress, loading: ctaLoading, renderIcon: renderCtaIcon, text: ctaText, shineDisabled: !isQuestDockExpanded };
    tmp8Result4 = hasOwnProperty(native.ShinyButton, obj15);
  }
  items7[1] = tmp8Result4;
  obj13.children = items7;
  items6[1] = timestampProducer(View, obj13);
  obj11.children = items6;
  items5[1] = timestampProducer(View, obj11);
  obj2.children = items5;
  return timestampProducer(tmp6, obj2);
}));
export const QuestDockBodyRewardTile = tmp4;
export const QuestDockBodyQuestRewardTile = tmp5;