// === Module 12256: GuildPowerupsLevelCard ===

// Module 12256 (GuildPowerupsLevelCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BoostGemIcon from "BoostGemIcon" /* 5027 */;
import Text_Text from "Text/Text" /* 5087 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6662 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12192 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12209 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12214 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12217 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12258 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 12259 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const GuildPowerupsConstants = fn(4969);
({ LevelCardPosition: hasOwnProperty, PowerupActiveStatusType: metroRequire } = GuildPowerupsConstants);
const Constants = fn(1085);
({ BoostedGuildTiers: closure_7, HorizontalGradient: closure_8 } = Constants);
const TIER_CARDS = fn(12257).TIER_CARDS;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 }, progressContainer: { marginVertical: nativeDefault.space.PX_24, position: "relative" }, progress: null, progressStart: null, progressEnd: null, boostContainerBackground: null, boostContainer: null, boostContainerActive: null, boostContainerInactive: null, contentContainer: null, perkRowContainer: null, perkRow: null, perkRowStyle: null, perkText: null, footerContainer: null };
let obj3 = { marginVertical: nativeDefault.space.PX_24, position: "relative" };
obj2.progress = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj4 = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.progressStart = { marginStart: nativeDefault.space.PX_16 };
let obj5 = { marginStart: nativeDefault.space.PX_16 };
obj2.progressEnd = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
let size = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: nativeDefault.space.PX_16 - 2, top: -11 };
obj2.boostContainerBackground = size;
const size1 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, position: "absolute", width: 24, height: 24, top: -9, start: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.boostContainer = size1;
let obj6 = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
obj2.boostContainerActive = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
let obj7 = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
obj2.boostContainerInactive = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
let obj8 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj2.contentContainer = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
let obj9 = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
obj2.perkRowContainer = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.perkRow = { flexDirection: "row", alignItems: "center" };
obj2.perkRowStyle = { flexDirection: "row", alignItems: "center" };
const obj10 = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj2.perkText = { marginStart: nativeDefault.space.PX_8 };
let obj11 = { marginStart: nativeDefault.space.PX_8 };
obj2.footerContainer = { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildLevelPowerupHeader(arg0) {
  const cResult = c.c(30);
  ({ active, nextActive, position } = arg0);
  const tmp4 = closure_12();
  if (active) {
    if (false !== nextActive) {
      if (cResult[0] !== tmp4.boostContainerActive.backgroundColor) {
        const items = [tmp4.boostContainerActive.backgroundColor, tmp4.boostContainerActive.backgroundColor];
        cResult[0] = tmp4.boostContainerActive.backgroundColor;
        cResult[1] = items;
      }
    }
  }
  if (active) {
    if (false === nextActive) {
      if (cResult[2] === tmp4.boostContainerActive.backgroundColor) {
        if (cResult[3] === tmp4.boostContainerInactive.backgroundColor) {
          let tmp6 = cResult[4];
        }
        let tmp5 = tmp6;
      }
      const items1 = [tmp4.boostContainerActive.backgroundColor, tmp4.boostContainerInactive.backgroundColor];
      cResult[2] = tmp4.boostContainerActive.backgroundColor;
      cResult[3] = tmp4.boostContainerInactive.backgroundColor;
      cResult[4] = items1;
      tmp6 = items1;
    }
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp4.progressStart;
    }
    if (cResult[7] === tmp4.progress) {
      if (cResult[8] === progressStart) {
        if (cResult[9] === tmp10) {
          let tmp11 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          if (cResult[12] === tmp11) {
            let tmp12 = cResult[13];
          }
          if (cResult[14] === tmp4.boostContainer) {
            if (cResult[15] === tmp4.boostContainerBackground) {
              let tmp17 = cResult[16];
            }
            let boostContainerActive = active;
            if (active) {
              boostContainerActive = tmp4.boostContainerActive;
            }
            if (cResult[17] === tmp4.boostContainer) {
              if (cResult[18] === boostContainerActive) {
                let tmp21 = cResult[19];
              }
              const colors = nativeDefault.colors;
              const tmp23 = active ? colors.WHITE : colors.TEXT_MUTED;
              if (cResult[20] !== tmp23) {
                const obj3 = { size: "xs", color: tmp23 };
                const tmp26 = collapsed(BoostGemIcon.BoostGemIcon, obj3);
                cResult[20] = tmp23;
                cResult[21] = tmp26;
                let tmp24 = tmp26;
              } else {
                tmp24 = cResult[21];
              }
              if (cResult[22] === tmp21) {
                if (cResult[23] === tmp24) {
                  let tmp27 = cResult[24];
                }
                if (cResult[25] === tmp4.progressContainer) {
                  if (cResult[26] === tmp27) {
                    if (cResult[27] === tmp12) {
                      if (cResult[28] === tmp17) {
                        let tmp31 = cResult[29];
                      }
                      return tmp31;
                    }
                  }
                }
                const obj4 = { style: tmp4.progressContainer, children: null };
                const items2 = [tmp12, tmp17, tmp27];
                obj4.children = items2;
                const tmp34 = closure_1_11(View, obj4);
                cResult[25] = tmp4.progressContainer;
                cResult[26] = tmp27;
                cResult[27] = tmp12;
                cResult[28] = tmp17;
                cResult[29] = tmp34;
                tmp31 = tmp34;
              }
              const obj5 = { style: tmp21, children: tmp24 };
              const tmp30 = collapsed(View, obj5);
              cResult[22] = tmp21;
              cResult[23] = tmp24;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            const items3 = [tmp4.boostContainer, boostContainerActive];
            cResult[17] = tmp4.boostContainer;
            cResult[18] = boostContainerActive;
            cResult[19] = items3;
            tmp21 = items3;
          }
          const obj6 = { style: null };
          const items4 = [, ];
          ({ boostContainer: arr5[0], boostContainerBackground: arr5[1] } = tmp4);
          obj6.style = items4;
          const tmp20 = collapsed(View, obj6);
          cResult[14] = tmp4.boostContainer;
          cResult[15] = tmp4.boostContainerBackground;
          cResult[16] = tmp20;
          tmp17 = tmp20;
        }
        const obj11 = { start: null, end: null, colors: null, style: null };
        ({ START: obj2.start, END: obj2.end } = closure_1_8);
        obj11.colors = tmp5;
        obj11.style = tmp11;
        const tmp16 = collapsed(LinearGradientDefault, obj11);
        cResult[11] = tmp5;
        cResult[12] = tmp11;
        cResult[13] = tmp16;
        tmp12 = tmp16;
      }
    }
    const items5 = [tmp4.progress, progressStart, position === constants.END && tmp4.progressEnd];
    cResult[7] = tmp4.progress;
    cResult[8] = progressStart;
    cResult[9] = position === constants.END && tmp4.progressEnd;
    cResult[10] = items5;
    tmp11 = items5;
  }
  if (cResult[5] !== tmp4.boostContainerInactive.backgroundColor) {
    const items6 = [tmp4.boostContainerInactive.backgroundColor, tmp4.boostContainerInactive.backgroundColor];
    cResult[5] = tmp4.boostContainerInactive.backgroundColor;
    cResult[6] = items6;
    tmp5 = items6;
  } else {
    tmp5 = cResult[6];
  }
}) : (function GuildLevelPowerupHeader(arg0) {
  ({ active, nextActive, position } = arg0);
  const tmp = closure_12();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      let items6 = items;
    }
    const obj = { style: tmp.progressContainer, children: null };
    const obj3 = { start: null, end: null, colors: null, style: null };
    ({ START: obj2.start, END: obj2.end } = closure_1_8);
    obj3.colors = items6;
    const items1 = [tmp.progress, , ];
    let progressStart = position === constants.START;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === constants.END && tmp.progressEnd;
    obj3.style = items1;
    const items2 = [collapsed(LinearGradientDefault, obj3), , ];
    const obj4 = { style: null };
    const items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    obj4.style = items3;
    items2[1] = collapsed(View, obj4);
    const items4 = [tmp.boostContainer, ];
    let boostContainerActive = active;
    if (active) {
      boostContainerActive = tmp.boostContainerActive;
    }
    const obj5 = { style: null, children: null };
    items4[1] = boostContainerActive;
    obj5.style = items4;
    const colors = nativeDefault.colors;
    const obj9 = { size: "xs", color: active ? colors.WHITE : colors.TEXT_MUTED };
    obj5.children = collapsed(BoostGemIcon.BoostGemIcon, obj9);
    items2[2] = collapsed(View, obj5);
    obj.children = items2;
    return closure_1_11(View, obj);
  }
  if (active) {
    if (false === nextActive) {
      const items5 = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
      items6 = items5;
    }
  }
  items6 = [tmp.boostContainerInactive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
});
ReactCompilerGating = fn(558);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupLevelBody(index) {
  const cResult = perks(manaTypeConsolidationExperiment[9]).c(21);
  perks = index.index;
  const tmp4 = closure_12();
  importDefault = tmp4;
  const obj = perks(manaTypeConsolidationExperiment[9]);
  manaTypeConsolidationExperiment = perks(manaTypeConsolidationExperiment[12]).useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
  const tmp7 = require("useGuildPowerupColorConfig")(index.isActive);
  const textColor = tmp7.textColor;
  const iconColor = tmp7.iconColor;
  let tier = TIER_CARDS[perks];
  let tmp8 = null;
  if (null != tier) {
    if (cResult[1] === iconColor) {
      if (cResult[2] === perks) {
        if (cResult[3] === manaTypeConsolidationExperiment) {
          if (cResult[4] === tmp4.perkRowStyle) {
            if (cResult[5] === tmp4.perkText) {
              if (cResult[6] === textColor) {
                if (cResult[7] === tier.perks) {
                }
              }
            }
          }
        }
      }
    }
    if (tier.tier === TIER_3.TIER_3) {
      const perks1 = tier.perks;
      let substr = perks1.slice(0, -1);
    } else {
      substr = tier.perks;
    }
    tmp8 = substr == tmp8;
    let mapped;
    if (!tmp8) {
      mapped = substr.map((perkIcon, index) => {
        const obj2 = { style: closure_1.perkRowStyle, children: null };
        const items = [collapsed(GuildBoostingMarketingUtils.getIconForPerk(perkIcon.perkIcon), { color: iconColor, size: "sm" }), ];
        const obj4 = { color: textColor, style: closure_1.perkText, variant: null, children: null };
        let str = "text-sm/medium";
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        obj4.variant = str;
        obj4.children = perkIcon.getCopy();
        items[1] = collapsed(Text_Text.Text, obj4);
        obj2.children = items;
        return closure_2_11(View, obj2, "perk-" + perks + "-" + index);
      });
    }
    cResult[1] = iconColor;
    cResult[2] = perks;
    cResult[3] = manaTypeConsolidationExperiment;
    cResult[4] = tmp4.perkRowStyle;
    cResult[5] = tmp4.perkText;
    cResult[6] = textColor;
    perks = tier.perks;
    cResult[7] = perks;
    tier = tier.tier;
    cResult[8] = tier;
    cResult[9] = mapped;
  } else {
    const _Symbol = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [];
      cResult[0] = items;
      let first = items;
    } else {
      first = cResult[0];
    }
    let str2 = "text-sm/medium";
    ({ perkRowContainer, perkRow } = tmp4);
    if (manaTypeConsolidationExperiment) {
      str2 = "experimental/body-sm/normal";
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = tmp(tmp2[16]).intl;
      const stringResult = intl.string(tmp6(tmp2[17]).nIj3LZ);
      cResult[10] = stringResult;
      let tmp16 = stringResult;
    } else {
      tmp16 = cResult[10];
    }
    if (cResult[11] === str2) {
      if (cResult[12] === textColor) {
        let tmp18 = cResult[13];
      }
      if (cResult[14] === tmp4.perkRow) {
        if (cResult[15] === tmp18) {
          let tmp21 = cResult[16];
        }
        if (cResult[17] === first) {
          if (cResult[18] === tmp4.perkRowContainer) {
            if (cResult[19] === tmp21) {
              let tmp25 = cResult[20];
            }
            return tmp25;
          }
        }
        const obj3 = { style: perkRowContainer, children: null };
        const items1 = [first, tmp21];
        obj3.children = items1;
        const tmp28 = closure_11(iconColor, obj3);
        cResult[17] = first;
        cResult[18] = tmp4.perkRowContainer;
        cResult[19] = tmp21;
        cResult[20] = tmp28;
        tmp25 = tmp28;
      }
      let obj4 = { style: perkRow, children: tmp18 };
      const tmp24 = closure_10(iconColor, obj4);
      cResult[14] = tmp4.perkRow;
      cResult[15] = tmp18;
      cResult[16] = tmp24;
      tmp21 = tmp24;
    }
    const obj5 = { color: textColor, variant: str2, children: tmp16 };
    const tmp20 = closure_10(tmp(tmp2[15]).Text, obj5);
    cResult[11] = str2;
    cResult[12] = textColor;
    cResult[13] = tmp20;
    tmp18 = tmp20;
  }
  let obj2 = perks(manaTypeConsolidationExperiment[12]);
  tmp6 = importDefault;
}) : (function GuildPowerupLevelBody(index) {
  index = index.index;
  let manaTypeConsolidationExperiment;
  const tmp = closure_12();
  importDefault = tmp;
  manaTypeConsolidationExperiment = index(manaTypeConsolidationExperiment[12]).useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
  const tmp6 = require("useGuildPowerupColorConfig")(index.isActive);
  const textColor = tmp6.textColor;
  const iconColor = tmp6.iconColor;
  let items = [index, iconColor, textColor, tmp, manaTypeConsolidationExperiment];
  let obj2 = { style: tmp.perkRowContainer, children: null };
  const items1 = [
    textColor.useMemo(() => {
      if (null == TIER_CARDS[index]) {
        return [];
      } else {
        if (tmp.tier === React5.TIER_3) {
          const perks = tmp.perks;
          let substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (substr != null) {
          mapped = substr.map((perkIcon, index) => {
            const obj2 = { style: closure_1_1.perkRowStyle, children: null };
            const items = [closure_2_10(index(manaTypeConsolidationExperiment[14]).getIconForPerk(perkIcon.perkIcon), { color: color2, size: "sm" }), ];
            const obj4 = { color, style: closure_1_1.perkText, variant: null, children: null };
            let str = "text-sm/medium";
            if (closure_1_2) {
              str = "experimental/body-sm/normal";
            }
            obj4.variant = str;
            obj4.children = perkIcon.getCopy();
            items[1] = closure_2_10(index(manaTypeConsolidationExperiment[15]).Text, obj4);
            obj2.children = items;
            return closure_2_11(iconColor, obj2, "perk-" + closure_1_0 + "-" + index);
          });
        }
        return mapped;
      }
    }, items),

  ];
  const obj3 = { style: tmp.perkRow, children: null };
  let obj4 = { color: textColor, variant: null, children: null };
  let str = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  obj4.variant = str;
  const intl = index(tmp3[16]).intl;
  obj4.children = intl.string(require("module_2597").nIj3LZ);
  obj3.children = closure_10(index(manaTypeConsolidationExperiment[15]).Text, obj4);
  items1[1] = closure_10(iconColor, obj3);
  obj2.children = items1;
  return closure_11(iconColor, obj2);
});
let closure_14 = tmp5;
ReactCompilerGating = fn(558);
const obj12 = { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 };
size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsLevelCard(arg0) {
  const cResult = c.c(32);
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp4 = closure_12();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp7 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp8 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp7, false);
  const tmp10 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  closure_1 = tmp10;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  if (cResult[0] === isScrollingRef) {
    if (cResult[1] === tmp10) {
      let tmp15 = cResult[2];
    }
    let tmp17;
    if (null != nextPowerup) {
      tmp17 = tmp8.type !== constants2.INACTIVE;
    }
    if (cResult[3] === tmp7.type !== constants2.INACTIVE) {
      if (cResult[4] === MIDDLE) {
        if (cResult[5] === tmp17) {
          let tmp19 = cResult[6];
        }
        let str;
        if (manaTypeConsolidationExperiment) {
          str = "text-strong";
        }
        let str2 = "heading-lg/semibold";
        if (manaTypeConsolidationExperiment) {
          str2 = "experimental/heading-md/semibold";
        }
        if (cResult[7] === powerup.title) {
          if (cResult[8] === str) {
            if (cResult[9] === str2) {
              let tmp23 = cResult[10];
            }
            if (cResult[11] === index) {
              if (cResult[12] === tmp18) {
                let tmp26 = cResult[13];
              }
              if (cResult[14] === powerup.cost) {
                if (cResult[15] === calculatePowerupCardStatus) {
                  let tmp30 = cResult[16];
                }
                if (cResult[17] === tmp4.footerContainer) {
                  if (cResult[18] === tmp30) {
                    let tmp33 = cResult[19];
                  }
                  if (cResult[20] === tmp4.contentContainer) {
                    if (cResult[21] === tmp23) {
                      if (cResult[22] === tmp26) {
                        if (cResult[23] === tmp33) {
                          let tmp37 = cResult[24];
                        }
                        if (cResult[25] === tmp15) {
                          if (cResult[26] === calculatePowerupCardStatus) {
                            if (cResult[27] === tmp4.card) {
                              if (cResult[28] === tmp4.cardContainer) {
                                if (cResult[29] === tmp37) {
                                  if (cResult[30] === tmp19) {
                                    let tmp41 = cResult[31];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                          }
                        }
                        const obj4 = { containerStyle: null, style: null, onPress: null, status: null, children: null };
                        ({ cardContainer: obj10.containerStyle, card: obj10.style } = tmp4);
                        obj4.onPress = tmp15;
                        obj4.status = calculatePowerupCardStatus;
                        const items = [tmp19, tmp37];
                        obj4.children = items;
                        const tmp43 = closure_1_11(GuildPowerupsCardDefault, obj4);
                        cResult[25] = tmp15;
                        cResult[26] = calculatePowerupCardStatus;
                        cResult[27] = tmp4.card;
                        cResult[28] = tmp4.cardContainer;
                        cResult[29] = tmp37;
                        cResult[30] = tmp19;
                        cResult[31] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                  const obj5 = { style: tmp4.contentContainer, children: null };
                  const items1 = [tmp23, tmp26, tmp33];
                  obj5.children = items1;
                  const tmp40 = closure_1_11(View, obj5);
                  cResult[20] = tmp4.contentContainer;
                  cResult[21] = tmp23;
                  cResult[22] = tmp26;
                  cResult[23] = tmp33;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                }
                const obj6 = { style: tmp4.footerContainer, children: tmp30 };
                const tmp36 = collapsed(View, obj6);
                cResult[17] = tmp4.footerContainer;
                cResult[18] = tmp30;
                cResult[19] = tmp36;
                tmp33 = tmp36;
              }
              const obj7 = { cost: powerup.cost, status: calculatePowerupCardStatus };
              const tmp32 = collapsed(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj7);
              cResult[14] = powerup.cost;
              cResult[15] = calculatePowerupCardStatus;
              cResult[16] = tmp32;
              tmp30 = tmp32;
            }
            const obj8 = { isActive: tmp18, index };
            const tmp29 = collapsed(closure_14, obj8);
            cResult[11] = index;
            cResult[12] = tmp18;
            cResult[13] = tmp29;
            tmp26 = tmp29;
          }
        }
        const obj9 = { color: str, variant: str2, children: powerup.title };
        const tmp25 = collapsed(Text_Text.Text, obj9);
        cResult[7] = powerup.title;
        cResult[8] = str;
        cResult[9] = str2;
        cResult[10] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj17 = { position: MIDDLE, active: tmp7.type !== constants2.INACTIVE, nextActive: tmp17 };
    const tmp22 = collapsed(closure_13, obj17);
    cResult[3] = tmp7.type !== constants2.INACTIVE;
    cResult[4] = MIDDLE;
    cResult[5] = tmp17;
    cResult[6] = tmp22;
    tmp19 = tmp22;
  }
  const fn = function c() {
    if (!isScrollingRef.current) {
      closure_1();
    }
  };
  cResult[0] = isScrollingRef;
  cResult[1] = tmp10;
  cResult[2] = fn;
  tmp15 = fn;
}) : (function GuildPowerupsLevelCard(arg0) {
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = closure_12();
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const tmp9 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  closure_1 = tmp9;
  if (0 === index) {
    let MIDDLE = constants.START;
  } else if (null == nextPowerup) {
    MIDDLE = constants.END;
  } else {
    MIDDLE = constants.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  const callback = noop.useCallback(() => {
    if (!isScrollingRef.current) {
      closure_1();
    }
  }, items);
  const obj3 = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: null };
  const obj4 = { position: MIDDLE, active: tmp6.type !== constants2.INACTIVE, nextActive: null };
  let tmp20;
  if (null != nextPowerup) {
    tmp20 = tmp7.type !== constants2.INACTIVE;
  }
  obj4.nextActive = tmp20;
  const items1 = [collapsed(closure_13, obj4), ];
  const obj5 = { style: tmp.contentContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj6 = { color: str, variant: null, children: null };
  let str2 = "heading-lg/semibold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj6.variant = str2;
  obj6.children = powerup.title;
  const items2 = [collapsed(Text_Text.Text, obj6), collapsed(closure_14, { isActive: tmp6.type !== constants2.INACTIVE, index }), ];
  const obj7 = { style: tmp.footerContainer, children: collapsed(GuildPowerupsCardFooter.GuildPowerupsCardFooter, { cost: powerup.cost, status: calculatePowerupCardStatus }) };
  items2[2] = collapsed(View, obj7);
  obj5.children = items2;
  items1[1] = closure_1_11(View, obj5);
  obj3.children = items1;
  return closure_1_11(GuildPowerupsCardDefault, obj3);
});
export const GuildPowerupLevelBody = tmp5;