// === Module 12223: GuildPowerupsLevelCard ===

// Module 12223 (GuildPowerupsLevelCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import BoostGemIcon2 from "BoostGemIcon" /* 4826 */;
import Text_Text from "Text/Text" /* 4886 */;
import LinearGradientDefault from "LinearGradient" /* 5605 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6470 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12159 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12176 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12181 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12184 */;
import GuildBoostingMarketingConstants from "GuildBoostingMarketingConstants" /* 12224 */;
import useGuildPowerupOnShowMoreDefault from "useGuildPowerupOnShowMore" /* 12225 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 12226 */;
import react from "react" /* 19 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4768 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault;

let c10;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj10;
let obj11;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
let size;
let size1;
let unpackModuleId;
const View = react_native.View;
({ LevelCardPosition: hasOwnProperty, PowerupActiveStatusType: metroRequire } = GuildPowerupsConstants);
({ BoostedGuildTiers: metroImportDefault, HorizontalGradient: metroImportAll } = Constants);
const TIER_CARDS = GuildBoostingMarketingConstants.TIER_CARDS;
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { cardContainer: { flex: 1 }, card: { padding: 0, overflow: "hidden", flex: 1 }, progressContainer: obj2, progress: obj3, progressStart: obj4, progressEnd: obj5, boostContainerBackground: size, boostContainer: size1, boostContainerActive: obj6, boostContainerInactive: obj7, contentContainer: obj8, perkRowContainer: obj9, perkRow: { flexDirection: "row", alignItems: "center" }, perkRowStyle: { flexDirection: "row", alignItems: "center" }, perkText: obj10, footerContainer: obj11 };
obj2 = { marginVertical: nativeDefault.space.PX_24, position: "relative" };
createStyles = createStyles.createStyles;
obj3 = { height: 6, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj4 = { marginStart: nativeDefault.space.PX_16 };
obj5 = { marginEnd: nativeDefault.space.PX_16, borderTopEndRadius: nativeDefault.radii.round, borderBottomEndRadius: nativeDefault.radii.round };
size = { backgroundColor: nativeDefault.colors.CARD_BACKGROUND_DEFAULT, width: 28, height: 28, start: nativeDefault.space.PX_16 - 2, top: -11 };
size1 = { padding: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.round, position: "absolute", width: 24, height: 24, top: -9, start: nativeDefault.space.PX_16, alignItems: "center", justifyContent: "center", backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
obj7 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE };
obj8 = { padding: nativeDefault.space.PX_16, paddingTop: 0, flex: 1 };
obj9 = { flexDirection: "column", marginTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_8 };
obj10 = { marginStart: nativeDefault.space.PX_8 };
obj11 = { marginTop: "auto", paddingTop: nativeDefault.space.PX_16 };
let closure_12 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let active;
  let items1;
  let items3;
  let nextActive;
  let position;
  let tmp5;
  const obj = react2;
  const cResult = obj.c(30);
  ({ active, nextActive, position } = arg0);
  const tmp4 = closure_12();
  if (active) {
    if (false !== nextActive) {
      let tmp7;
      if (cResult[0] !== tmp4.boostContainerActive.backgroundColor) {
        const items = [tmp4.boostContainerActive.backgroundColor, tmp4.boostContainerActive.backgroundColor];
        cResult[0] = tmp4.boostContainerActive.backgroundColor;
        cResult[1] = items;
        tmp7 = items;
      } else {
        tmp7 = cResult[1];
      }
      tmp5 = tmp7;
    }
    const progressStart = position === hasOwnProperty.START && tmp4.progressStart;
    if (cResult[7] === tmp4.progress) {
      if (cResult[8] === progressStart) {
        let tmp10;
        if (cResult[9] === (position === hasOwnProperty.END && tmp4.progressEnd)) {
          tmp10 = cResult[10];
        }
        if (cResult[11] === tmp5) {
          let tmp11;
          if (cResult[12] === tmp10) {
            tmp11 = cResult[13];
          }
          if (cResult[14] === tmp4.boostContainer) {
            let tmp16;
            if (cResult[15] === tmp4.boostContainerBackground) {
              tmp16 = cResult[16];
            }
            if (cResult[17] === tmp4.boostContainer) {
              let tmp21;
              let tmp24;
              if (cResult[18] === (active && tmp4.boostContainerActive)) {
                tmp21 = cResult[19];
              }
              const colors = nativeDefault.colors;
              const tmp23 = active ? colors.WHITE : colors.TEXT_MUTED;
              if (cResult[20] !== tmp23) {
                const obj3 = { size: "xs", color: tmp23 };
                const tmp26 = authStore(BoostGemIcon2.BoostGemIcon, obj3);
                cResult[20] = tmp23;
                cResult[21] = tmp26;
                tmp24 = tmp26;
              } else {
                tmp24 = cResult[21];
              }
              if (cResult[22] === tmp21) {
                let tmp27;
                if (cResult[23] === tmp24) {
                  tmp27 = cResult[24];
                }
                if (cResult[25] === tmp4.progressContainer) {
                  if (cResult[26] === tmp27) {
                    if (cResult[27] === tmp11) {
                      let tmp31;
                      if (cResult[28] === tmp16) {
                        tmp31 = cResult[29];
                      }
                      return tmp31;
                    }
                  }
                }
                const obj4 = { style: tmp4.progressContainer, children: items1 };
                items1 = [tmp11, tmp16, tmp27];
                const tmp34 = unpackModuleId(View, obj4);
                cResult[25] = tmp4.progressContainer;
                cResult[26] = tmp27;
                cResult[27] = tmp11;
                cResult[28] = tmp16;
                cResult[29] = tmp34;
                tmp31 = tmp34;
              }
              const obj5 = { style: tmp21, children: tmp24 };
              const tmp30 = authStore(View, obj5);
              cResult[22] = tmp21;
              cResult[23] = tmp24;
              cResult[24] = tmp30;
              tmp27 = tmp30;
            }
            const items2 = [tmp4.boostContainer, active && tmp4.boostContainerActive];
            cResult[17] = tmp4.boostContainer;
            cResult[18] = active && tmp4.boostContainerActive;
            cResult[19] = items2;
            tmp21 = items2;
          }
          const obj6 = { style: items3 };
          items3 = [, ];
          ({ boostContainer: arr5[0], boostContainerBackground: arr5[1] } = tmp4);
          const tmp19 = authStore(View, obj6);
          cResult[14] = tmp4.boostContainer;
          cResult[15] = tmp4.boostContainerBackground;
          cResult[16] = tmp19;
          tmp16 = tmp19;
        }
        const obj11 = { start: null, end: null, colors: tmp5, style: tmp10 };
        ({ START: obj2.start, END: obj2.end } = metroImportAll);
        const tmp15 = authStore(LinearGradientDefault, obj11);
        cResult[11] = tmp5;
        cResult[12] = tmp10;
        cResult[13] = tmp15;
        tmp11 = tmp15;
      }
    }
    const items4 = [tmp4.progress, progressStart, position === hasOwnProperty.END && tmp4.progressEnd];
    cResult[7] = tmp4.progress;
    cResult[8] = progressStart;
    cResult[9] = position === hasOwnProperty.END && tmp4.progressEnd;
    cResult[10] = items4;
    tmp10 = items4;
  }
  if (active) {
    if (false === nextActive) {
      if (cResult[2] === tmp4.boostContainerActive.backgroundColor) {
        let tmp6;
        if (cResult[3] === tmp4.boostContainerInactive.backgroundColor) {
          tmp6 = cResult[4];
        }
        tmp5 = tmp6;
      }
      const items5 = [tmp4.boostContainerActive.backgroundColor, tmp4.boostContainerInactive.backgroundColor];
      cResult[2] = tmp4.boostContainerActive.backgroundColor;
      cResult[3] = tmp4.boostContainerInactive.backgroundColor;
      cResult[4] = items5;
      tmp6 = items5;
    }
  }
  if (cResult[5] !== tmp4.boostContainerInactive.backgroundColor) {
    const items6 = [tmp4.boostContainerInactive.backgroundColor, tmp4.boostContainerInactive.backgroundColor];
    cResult[5] = tmp4.boostContainerInactive.backgroundColor;
    cResult[6] = items6;
    tmp5 = items6;
  } else {
    tmp5 = cResult[6];
  }
}) : ((arg0) => {
  let BoostGemIcon;
  let active;
  let items1;
  let items2;
  let items3;
  let items6;
  let nextActive;
  let obj9;
  let position;
  ({ active, nextActive, position } = arg0);
  const tmp = closure_12();
  if (active) {
    if (false !== nextActive) {
      const items = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerActive.backgroundColor];
      items6 = items;
    }
    const obj = { style: tmp.progressContainer, children: items2 };
    const obj3 = { start: null, end: null, colors: items6, style: items1 };
    ({ START: obj2.start, END: obj2.end } = metroImportAll);
    items1 = [tmp.progress, , ];
    let progressStart = position === hasOwnProperty.START;
    const tmp7 = LinearGradientDefault;
    if (progressStart) {
      progressStart = tmp.progressStart;
    }
    items1[1] = progressStart;
    items1[2] = position === hasOwnProperty.END && tmp.progressEnd;
    items2 = [authStore(tmp7, obj3), , ];
    const obj4 = { style: items3 };
    items3 = [, ];
    ({ boostContainer: arr6[0], boostContainerBackground: arr6[1] } = tmp);
    items2[1] = authStore(View, obj4);
    const items4 = [tmp.boostContainer, ];
    const tmp10 = active && tmp.boostContainerActive;
    items4[1] = tmp10;
    const obj5 = { style: items4, children: authStore(BoostGemIcon, obj9) };
    BoostGemIcon = BoostGemIcon2.BoostGemIcon;
    const colors = nativeDefault.colors;
    obj9 = { size: "xs", color: active ? colors.WHITE : colors.TEXT_MUTED };
    items2[2] = authStore(View, obj5);
    return unpackModuleId(View, obj);
  }
  if (active) {
    if (false === nextActive) {
      const items5 = [tmp.boostContainerActive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
      items6 = items5;
    }
  }
  items6 = [tmp.boostContainerInactive.backgroundColor, tmp.boostContainerInactive.backgroundColor];
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((index) => {
  let closure_1;
  let first;
  let items1;
  let manaTypeConsolidationExperiment;
  let perkRow;
  let perkRowContainer;
  let tmp14;
  let obj = index(manaTypeConsolidationExperiment[9]);
  const cResult = obj.c(21);
  index = index.index;
  const isActive = index.isActive;
  const tmp4 = closure_12();
  importDefault = tmp4;
  let obj2 = index(manaTypeConsolidationExperiment[12]);
  manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
  const tmp7 = require("useGuildPowerupColorConfig")(isActive);
  const textColor = tmp7.textColor;
  const iconColor = tmp7.iconColor;
  const tmp6 = importDefault;
  if (null != TIER_CARDS[index]) {
    let substr;
    if (cResult[1] === iconColor) {
      if (cResult[2] === index) {
        if (cResult[3] === manaTypeConsolidationExperiment) {
          if (cResult[4] === tmp4.perkRowStyle) {
            if (cResult[5] === tmp4.perkText) {
              if (cResult[6] === textColor) {
                if (cResult[7] === TIER_CARDS[index].perks) {
                  let tmp11;
                  if (cResult[8] === TIER_CARDS[index].tier) {
                    tmp11 = cResult[9];
                  }
                  first = tmp11;
                }
              }
            }
          }
        }
      }
    }
    if (TIER_CARDS[index].tier === TIER_3.TIER_3) {
      const perks = tmp8.perks;
      substr = perks.slice(0, -1);
    } else {
      substr = tmp8.perks;
    }
    let mapped;
    if (substr != null) {
      mapped = substr.map((perkIcon, index) => {
        let items;
        let str;
        const obj2 = { style: closure_1.perkRowStyle, children: items };
        items = [, ];
        const obj = GuildBoostingMarketingUtils;
        const obj3 = { color: iconColor, size: "sm" };
        items[0] = authStore(obj.getIconForPerk(perkIcon.perkIcon), obj3);
        const obj4 = { color: textColor, style: closure_1.perkText, variant: str, children: perkIcon.getCopy() };
        str = "text-sm/medium";
        const Text = Text_Text.Text;
        if (manaTypeConsolidationExperiment) {
          str = "experimental/body-sm/normal";
        }
        items[1] = authStore(Text, obj4);
        return unpackModuleId(View, obj2, "perk-" + index + "-" + index);
      });
    }
    cResult[1] = iconColor;
    cResult[2] = index;
    cResult[3] = manaTypeConsolidationExperiment;
    cResult[4] = tmp4.perkRowStyle;
    cResult[5] = tmp4.perkText;
    cResult[6] = textColor;
    cResult[7] = TIER_CARDS[index].perks;
    cResult[8] = TIER_CARDS[index].tier;
    cResult[9] = mapped;
    tmp11 = mapped;
  } else {
    const _Symbol = Symbol;
    let str = "react.memo_cache_sentinel";
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      let items = [];
      cResult[0] = items;
      first = items;
    } else {
      first = cResult[0];
    }
  }
  let str2 = "text-sm/medium";
  ({ perkRowContainer, perkRow } = tmp4);
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/body-sm/normal";
  }
  if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = tmp(tmp2[16]).intl;
    const stringResult = intl.string(tmp6(manaTypeConsolidationExperiment[17]).nIj3LZ);
    cResult[10] = stringResult;
    tmp14 = stringResult;
  } else {
    tmp14 = cResult[10];
  }
  if (cResult[11] === str2) {
    let tmp16;
    if (cResult[12] === textColor) {
      tmp16 = cResult[13];
    }
    if (cResult[14] === tmp4.perkRow) {
      let tmp18;
      if (cResult[15] === tmp16) {
        tmp18 = cResult[16];
      }
      if (cResult[17] === first) {
        if (cResult[18] === tmp4.perkRowContainer) {
          let tmp22;
          if (cResult[19] === tmp18) {
            tmp22 = cResult[20];
          }
          return tmp22;
        }
      }
      let obj3 = { style: perkRowContainer, children: items1 };
      items1 = [first, tmp18];
      const tmp25 = closure_11(iconColor, obj3);
      cResult[17] = first;
      cResult[18] = tmp4.perkRowContainer;
      cResult[19] = tmp18;
      cResult[20] = tmp25;
      tmp22 = tmp25;
    }
    let obj4 = { style: perkRow, children: tmp16 };
    const tmp21 = closure_10(iconColor, obj4);
    cResult[14] = tmp4.perkRow;
    cResult[15] = tmp16;
    cResult[16] = tmp21;
    tmp18 = tmp21;
  }
  const tmp17 = closure_10(index(manaTypeConsolidationExperiment[15]).Text, { color: textColor, variant: str2, children: tmp14 });
  cResult[11] = str2;
  cResult[12] = textColor;
  cResult[13] = tmp17;
  tmp16 = tmp17;
}) : ((index) => {
  let Text;
  let closure_1;
  let intl;
  let items1;
  let obj4;
  let str;
  let tmp5;
  index = index.index;
  let manaTypeConsolidationExperiment;
  const isActive = index.isActive;
  const tmp = closure_12();
  importDefault = tmp;
  let obj = index(manaTypeConsolidationExperiment[12]);
  manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupLevelBody");
  const tmp6 = require("useGuildPowerupColorConfig")(isActive);
  const textColor = tmp6.textColor;
  const iconColor = tmp6.iconColor;
  let items = [index, iconColor, textColor, tmp, manaTypeConsolidationExperiment];
  let obj2 = { style: tmp.perkRowContainer, children: items1 };
  items1 = [
    textColor.useMemo(() => {
      let color;
      let color2;
      if (null == TIER_CARDS[index]) {
        return [];
      } else {
        let substr;
        if (TIER_CARDS[index].tier === metroImportDefault.TIER_3) {
          const perks = tmp.perks;
          substr = perks.slice(0, -1);
        } else {
          substr = tmp.perks;
        }
        let mapped;
        if (substr != null) {
          mapped = substr.map((perkIcon, index) => {
            let items;
            let str;
            const obj2 = { style: closure_1_1.perkRowStyle, children: items };
            items = [, ];
            const obj = index(manaTypeConsolidationExperiment[14]);
            const obj3 = { color: color2, size: "sm" };
            items[0] = closure_2_10(obj.getIconForPerk(perkIcon.perkIcon), obj3);
            const obj4 = { color, style: closure_1_1.perkText, variant: str, children: perkIcon.getCopy() };
            str = "text-sm/medium";
            const Text = index(manaTypeConsolidationExperiment[15]).Text;
            if (closure_1_2) {
              str = "experimental/body-sm/normal";
            }
            items[1] = closure_2_10(Text, obj4);
            return closure_2_11(iconColor, obj2, "perk-" + closure_1_0 + "-" + index);
          });
        }
        return mapped;
      }
    }, items),

  ];
  let obj3 = { style: tmp.perkRow, children: closure_10(Text, obj4) };
  obj4 = { color: textColor, variant: str, children: intl.string(tmp5(manaTypeConsolidationExperiment[17]).nIj3LZ) };
  str = "text-sm/medium";
  Text = index(manaTypeConsolidationExperiment[15]).Text;
  const tmp2 = index;
  tmp5 = importDefault;
  if (manaTypeConsolidationExperiment) {
    str = "experimental/body-sm/normal";
  }
  intl = tmp2(tmp3[16]).intl;
  items1[1] = closure_10(iconColor, obj3);
  return closure_11(iconColor, obj2);
});
let closure_14 = tmp6;
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let MIDDLE;
  let guildId;
  let index;
  let isScrollingRef;
  let items;
  let items1;
  let nextPowerup;
  let powerup;
  let obj = react2;
  const cResult = obj.c(32);
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp4 = closure_12();
  let obj2 = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp7 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp8 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  let obj3 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj3.useCalculatePowerupCardStatus(powerup, tmp7, false);
  const type = tmp7.type;
  const INACTIVE = metroRequire.INACTIVE;
  const type2 = tmp8.type;
  const INACTIVE2 = metroRequire.INACTIVE;
  const tmp10 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let closure_1 = tmp10;
  if (0 === index) {
    MIDDLE = hasOwnProperty.START;
  } else if (null == nextPowerup) {
    MIDDLE = hasOwnProperty.END;
  } else {
    MIDDLE = hasOwnProperty.MIDDLE;
  }
  if (cResult[0] === isScrollingRef) {
    let tmp15;
    if (cResult[1] === tmp10) {
      tmp15 = cResult[2];
    }
    let tmp17;
    if (null != nextPowerup) {
      tmp17 = type2 !== INACTIVE2;
    }
    if (cResult[3] === type !== INACTIVE) {
      if (cResult[4] === MIDDLE) {
        let tmp19;
        if (cResult[5] === tmp17) {
          tmp19 = cResult[6];
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
            let tmp23;
            if (cResult[9] === str2) {
              tmp23 = cResult[10];
            }
            if (cResult[11] === index) {
              let tmp26;
              if (cResult[12] === type !== INACTIVE) {
                tmp26 = cResult[13];
              }
              if (cResult[14] === powerup.cost) {
                let tmp30;
                if (cResult[15] === calculatePowerupCardStatus) {
                  tmp30 = cResult[16];
                }
                if (cResult[17] === tmp4.footerContainer) {
                  let tmp33;
                  if (cResult[18] === tmp30) {
                    tmp33 = cResult[19];
                  }
                  if (cResult[20] === tmp4.contentContainer) {
                    if (cResult[21] === tmp23) {
                      if (cResult[22] === tmp26) {
                        let tmp37;
                        if (cResult[23] === tmp33) {
                          tmp37 = cResult[24];
                        }
                        if (cResult[25] === tmp15) {
                          if (cResult[26] === calculatePowerupCardStatus) {
                            if (cResult[27] === tmp4.card) {
                              if (cResult[28] === tmp4.cardContainer) {
                                if (cResult[29] === tmp37) {
                                  let tmp41;
                                  if (cResult[30] === tmp19) {
                                    tmp41 = cResult[31];
                                  }
                                  return tmp41;
                                }
                              }
                            }
                          }
                        }
                        let obj4 = { containerStyle: null, style: null, onPress: tmp15, status: calculatePowerupCardStatus, children: items };
                        ({ cardContainer: obj10.containerStyle, card: obj10.style } = tmp4);
                        items = [tmp19, tmp37];
                        const tmp43 = unpackModuleId(GuildPowerupsCardDefault, obj4);
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
                  let obj5 = { style: tmp4.contentContainer, children: items1 };
                  items1 = [tmp23, tmp26, tmp33];
                  const tmp40 = unpackModuleId(View, obj5);
                  cResult[20] = tmp4.contentContainer;
                  cResult[21] = tmp23;
                  cResult[22] = tmp26;
                  cResult[23] = tmp33;
                  cResult[24] = tmp40;
                  tmp37 = tmp40;
                }
                let obj6 = { style: tmp4.footerContainer, children: tmp30 };
                const tmp36 = authStore(View, obj6);
                cResult[17] = tmp4.footerContainer;
                cResult[18] = tmp30;
                cResult[19] = tmp36;
                tmp33 = tmp36;
              }
              let obj7 = { cost: powerup.cost, status: calculatePowerupCardStatus };
              const tmp32 = authStore(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj7);
              cResult[14] = powerup.cost;
              cResult[15] = calculatePowerupCardStatus;
              cResult[16] = tmp32;
              tmp30 = tmp32;
            }
            let obj8 = { isActive: type !== INACTIVE, index };
            const tmp29 = authStore(closure_14, obj8);
            cResult[11] = index;
            cResult[12] = type !== INACTIVE;
            cResult[13] = tmp29;
            tmp26 = tmp29;
          }
        }
        let obj9 = { color: str, variant: str2, children: powerup.title };
        const tmp25 = authStore(Text_Text.Text, obj9);
        cResult[7] = powerup.title;
        cResult[8] = str;
        cResult[9] = str2;
        cResult[10] = tmp25;
        tmp23 = tmp25;
      }
    }
    const obj17 = { position: MIDDLE, active: type !== INACTIVE, nextActive: tmp17 };
    const tmp22 = authStore(closure_13, obj17);
    cResult[3] = type !== INACTIVE;
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
}) : ((arg0) => {
  let MIDDLE;
  let guildId;
  let index;
  let isScrollingRef;
  let items1;
  let items2;
  let nextPowerup;
  let obj8;
  let powerup;
  let str2;
  let tmp20;
  ({ guildId, powerup, nextPowerup, index, isScrollingRef } = arg0);
  const tmp = closure_12();
  const obj = ManaTypeConsolidationExperiment;
  const manaTypeConsolidationExperiment = obj.useManaTypeConsolidationExperiment("GuildPowerupsLevelCard");
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = usePowerupActiveStatusDefault(guildId, nextPowerup);
  const obj2 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp6, false);
  const type = tmp6.type;
  const INACTIVE = metroRequire.INACTIVE;
  const type2 = tmp7.type;
  const INACTIVE2 = metroRequire.INACTIVE;
  const tmp9 = useGuildPowerupOnShowMoreDefault(guildId, powerup);
  let closure_1 = tmp9;
  if (0 === index) {
    MIDDLE = hasOwnProperty.START;
  } else if (null == nextPowerup) {
    MIDDLE = hasOwnProperty.END;
  } else {
    MIDDLE = hasOwnProperty.MIDDLE;
  }
  const items = [isScrollingRef, tmp9];
  const callback = react.useCallback(() => {
    if (!isScrollingRef.current) {
      closure_1();
    }
  }, items);
  const obj4 = { position: MIDDLE, active: type !== INACTIVE, nextActive: tmp20 };
  tmp20 = undefined;
  const obj3 = { containerStyle: tmp.cardContainer, style: tmp.card, onPress: callback, status: calculatePowerupCardStatus, children: items1 };
  const tmp5Result = GuildPowerupsCardDefault;
  if (null != nextPowerup) {
    tmp20 = type2 !== INACTIVE2;
  }
  items1 = [authStore(closure_13, obj4), ];
  let str;
  const obj5 = { style: tmp.contentContainer, children: items2 };
  const Text = Text_Text.Text;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj6 = { color: str, variant: str2, children: powerup.title };
  str2 = "heading-lg/semibold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  items2 = [authStore(Text, obj6), authStore(closure_14, { isActive: type !== INACTIVE, index }), ];
  const obj7 = { style: tmp.footerContainer, children: authStore(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj8) };
  obj8 = { cost: powerup.cost, status: calculatePowerupCardStatus };
  items2[2] = authStore(View, obj7);
  items1[1] = unpackModuleId(View, obj5);
  return unpackModuleId(tmp5Result, obj3);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsLevelCard.tsx");

export default tmp7;
export const GuildPowerupLevelBody = tmp6;