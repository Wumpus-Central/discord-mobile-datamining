// === Module 12190: GuildPowerupsBottomSheet ===

// Module 12190 (GuildPowerupsBottomSheet)
import react_native from "react-native" /* 17 */;
import get_initialized from "get initialized" /* 504 */;
import react from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import _modDef2553 from "module_2553" /* 2553 */;
import GameServerHostingRive from "GameServerHostingRive" /* 4684 */;
import GameServerConstants from "GameServerConstants" /* 4775 */;
import Powerups from "Powerups" /* 4777 */;
import CircleInformationIcon2 from "CircleInformationIcon" /* 4818 */;
import Text_Text from "Text/Text" /* 4892 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6652 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 9285 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12170 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12174 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12185 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12191 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12192 */;
import GuildPowerupsBoostGemDefault from "GuildPowerupsBoostGem" /* 12193 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12195 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12196 */;
import useGuildPowerupLevelPerksDefault from "useGuildPowerupLevelPerks" /* 12198 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12199 */;
import useGuildPowerupCardFooterConfigDefault from "useGuildPowerupCardFooterConfig" /* 12207 */;
import useCanGuildPowerupBeToggledDefault from "useCanGuildPowerupBeToggled" /* 12208 */;
import useGuildPowerupOnActivateDefault from "useGuildPowerupOnActivate" /* 12209 */;
import useGuildPowerupOnShowDeactivateDefault from "useGuildPowerupOnShowDeactivate" /* 12213 */;
import GuildPowerupAnalytics from "GuildPowerupAnalytics" /* 12217 */;
import useGuildPowerupConfigureCallbackDefault from "useGuildPowerupConfigureCallback" /* 12218 */;
import GuildPowerupsDisabledWarningDefault from "GuildPowerupsDisabledWarning" /* 12219 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4774 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let obj10;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
let obj8;
let obj9;
const View = react_native.View;
({ GuildPowerupType: hasOwnProperty, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: metroRequire } = GuildPowerupsConstants);
let closure_7 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, headerContainer: obj3, statusContainer: obj4, levelContainer: obj5, perkContainer: { flexDirection: "row", alignItems: "center", justifyContent: "space-between" }, perkIcon: { width: 20, height: 20 }, perkText: obj6, footerContainer: obj7, image: { width: "100%", height: 160 }, description: obj8, cooldownInfo: obj9, gemContainer: obj10 };
obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
obj4 = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj5 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj6 = { marginStart: nativeDefault.space.PX_8 };
obj7 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj8 = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
obj9 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj10 = { marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let items1;
  let items2;
  let obj10;
  let obj9;
  let powerup;
  let tmp10;
  let tmp33Result;
  let tmp9;
  let useReducedMotion;
  const obj = react;
  const cResult = obj.c(23);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const obj2 = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp6, tmp7);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    const fn = function u() {
      return useReducedMotion.useReducedMotion;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp10 = fn;
    tmp9 = items;
  } else {
    [tmp9, tmp10] = cResult;
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp9, tmp10);
  if (cResult[2] === str) {
    if (cResult[3] === powerup.skuId === closure_7) {
      if (cResult[4] === powerup.type) {
        if (cResult[5] === tmp4.gemContainer) {
          if (cResult[6] === tmp4.image) {
            let tmp15;
            let tmp19;
            if (cResult[7] === stateFromStores) {
              tmp15 = cResult[8];
            }
            if (cResult[9] !== powerup.title) {
              const obj3 = { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title };
              const tmp21 = metroImportAll(Text_Text.Text, obj3);
              cResult[9] = powerup.title;
              cResult[10] = tmp21;
              tmp19 = tmp21;
            } else {
              tmp19 = cResult[10];
            }
            if (cResult[11] === str2) {
              if (cResult[12] === powerup.cost) {
                if (cResult[13] === calculatePowerupCardStatus) {
                  let tmp22;
                  if (cResult[14] === tmp4.statusContainer) {
                    tmp22 = cResult[15];
                  }
                  if (cResult[16] === tmp4.headerContainer) {
                    if (cResult[17] === tmp19) {
                      let tmp25;
                      if (cResult[18] === tmp22) {
                        tmp25 = cResult[19];
                      }
                      if (cResult[20] === tmp15) {
                        let tmp29;
                        if (cResult[21] === tmp25) {
                          tmp29 = cResult[22];
                        }
                        return tmp29;
                      }
                      const obj4 = { children: items1 };
                      items1 = [tmp15, tmp25];
                      const tmp32 = React4(View, obj4);
                      cResult[20] = tmp15;
                      cResult[21] = tmp25;
                      cResult[22] = tmp32;
                      tmp29 = tmp32;
                    }
                  }
                  const obj5 = { style: tmp4.headerContainer, children: items2 };
                  items2 = [tmp19, tmp22];
                  const tmp28 = React4(View, obj5);
                  cResult[16] = tmp4.headerContainer;
                  cResult[17] = tmp19;
                  cResult[18] = tmp22;
                  cResult[19] = tmp28;
                  tmp25 = tmp28;
                }
              }
            }
            const obj6 = { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp4.statusContainer };
            const tmp24 = metroImportAll(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj6);
            cResult[11] = str2;
            cResult[12] = powerup.cost;
            cResult[13] = calculatePowerupCardStatus;
            cResult[14] = tmp4.statusContainer;
            cResult[15] = tmp24;
            tmp22 = tmp24;
          }
        }
      }
    }
  }
  if (powerup.type === hasOwnProperty.LEVEL) {
    const obj7 = { style: tmp4.gemContainer };
    tmp33Result = metroImportAll(GuildPowerupsBoostGemDefault, obj7);
  } else if (powerup.skuId === closure_7) {
    const obj8 = { style: tmp4.image, children: metroImportAll(GameServerHostingRive.GameServerHostingRive, obj9) };
    obj9 = { stateMachine: "SM_Auto", dataBinding: obj10 };
    obj10 = { reducedMotion: stateFromStores };
    tmp33Result = metroImportAll(View, obj8);
  } else {
    const obj11 = { imageUrl: str, style: tmp4.image, isAnimated: true };
    tmp33Result = metroImportAll(GuildPowerupsImageDefault, obj11);
  }
  cResult[2] = str;
  cResult[3] = powerup.skuId === closure_7;
  cResult[4] = powerup.type;
  cResult[5] = tmp4.gemContainer;
  cResult[6] = tmp4.image;
  cResult[7] = stateFromStores;
  cResult[8] = tmp33Result;
  tmp15 = tmp33Result;
}) : ((arg0) => {
  let guildId;
  let items1;
  let items2;
  let obj4;
  let obj5;
  let powerup;
  let tmp14;
  let tmp15;
  let useReducedMotion;
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp5 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const obj = useCalculatePowerupCardStatus;
  const calculatePowerupCardStatus = obj.useCalculatePowerupCardStatus(powerup, tmp4, tmp5);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  const items = [AccessibilityStore];
  let str2;
  const tmp6Result = get_initialized;
  const stateFromStores = tmp6Result.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (powerup.skuId === closure_7) {
    str2 = "+";
  }
  if (powerup.type === hasOwnProperty.LEVEL) {
    const obj2 = { style: tmp.gemContainer };
    tmp15 = metroImportAll(GuildPowerupsBoostGemDefault, obj2);
    tmp14 = metroImportAll;
  } else if (tmp10 === closure_7) {
    const obj3 = { style: tmp.image, children: metroImportAll(GameServerHostingRive.GameServerHostingRive, obj4) };
    obj4 = { stateMachine: "SM_Auto", dataBinding: obj5 };
    obj5 = { reducedMotion: stateFromStores };
    tmp15 = metroImportAll(View, obj3);
    tmp14 = metroImportAll;
  } else {
    tmp14 = metroImportAll;
    const obj6 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp15 = metroImportAll(GuildPowerupsImageDefault, obj6);
  }
  const obj7 = { children: items1 };
  items1 = [tmp15, ];
  const obj8 = { style: tmp.headerContainer, children: items2 };
  items2 = [, ];
  const obj9 = { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title };
  items2[0] = tmp14(Text_Text.Text, obj9);
  const obj10 = { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer };
  items2[1] = tmp14(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj10);
  items1[1] = React4(View, obj8);
  return React4(View, obj7);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? ((powerup) => {
  let closure_0;
  let tmp4;
  let obj = require("react");
  const cResult = obj.c(12);
  powerup = powerup.powerup;
  const tmp2 = closure_11();
  _require = tmp2;
  const arr = useGuildPowerupLevelPerksDefault(powerup);
  if (cResult[0] === arr) {
    if (cResult[1] === tmp2.perkContainer) {
      if (cResult[2] === tmp2.perkIcon) {
        if (cResult[3] === tmp2.perkText) {
          tmp4 = cResult[4];
        }
        if (cResult[9] === tmp2.levelContainer) {
          let tmp7;
          if (cResult[10] === tmp4) {
            tmp7 = cResult[11];
          }
          return tmp7;
        }
        let obj2 = { style: tmp3, children: tmp4 };
        const tmp10 = closure_8(View, obj2);
        cResult[9] = tmp2.levelContainer;
        cResult[10] = tmp4;
        cResult[11] = tmp10;
        tmp7 = tmp10;
      }
    }
  }
  if (cResult[5] === tmp2.perkContainer) {
    if (cResult[6] === tmp2.perkIcon) {
      let tmp5;
      if (cResult[7] === tmp2.perkText) {
        tmp5 = cResult[8];
      }
      const mapped = arr.map(tmp5);
      cResult[0] = arr;
      cResult[1] = tmp2.perkContainer;
      cResult[2] = tmp2.perkIcon;
      cResult[3] = tmp2.perkText;
      cResult[4] = mapped;
      tmp4 = mapped;
    }
  }
  const fn = function s(children, arg1) {
    let items;
    const obj2 = { style: closure_0.perkContainer, children: items };
    const obj = GuildBoostingMarketingUtils;
    const iconForPerk = obj.getIconForPerk(children.perkIcon);
    items = [, ];
    const obj3 = { style: closure_0.perkText, variant: "text-md/medium", children: children.description };
    items[0] = metroImportAll(Text_Text.Text, obj3);
    const obj4 = { style: closure_0.perkIcon };
    items[1] = metroImportAll(iconForPerk, obj4);
    return React4(View, obj2, "perk-" + arg1 + "-" + children.perkIcon);
  };
  cResult[5] = tmp2.perkContainer;
  cResult[6] = tmp2.perkIcon;
  cResult[7] = tmp2.perkText;
  cResult[8] = fn;
  tmp5 = fn;
}) : ((powerup) => {
  powerup = powerup.powerup;
  const tmp = closure_11();
  let closure_0 = tmp;
  const arr = useGuildPowerupLevelPerksDefault(powerup);
  let obj = {
    style: tmp.levelContainer,
    children: arr.map((children, index) => {
      let items;
      const obj2 = { style: closure_0.perkContainer, children: items };
      const obj = GuildBoostingMarketingUtils;
      const iconForPerk = obj.getIconForPerk(children.perkIcon);
      items = [, ];
      const obj3 = { style: closure_0.perkText, variant: "text-md/medium", children: children.description };
      items[0] = metroImportAll(Text_Text.Text, obj3);
      const obj4 = { style: closure_0.perkIcon };
      items[1] = metroImportAll(iconForPerk, obj4);
      return React4(View, obj2, "perk-" + index + "-" + children.perkIcon);
    })
  };
  return closure_8(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? ((powerup) => {
  let intl;
  let items;
  let items1;
  let obj6;
  const obj = react;
  const cResult = obj.c(11);
  powerup = powerup.powerup;
  const tmp4 = closure_11();
  const type = powerup.type;
  if (hasOwnProperty.PERK === type) {
    if (cResult[0] === powerup.description) {
      let tmp10;
      if (cResult[1] === tmp4.description) {
        tmp10 = cResult[2];
      }
      if (cResult[3] === powerup.deactivationCooldownPeriodDays) {
        let tmp13;
        if (cResult[4] === tmp4.cooldownInfo) {
          tmp13 = cResult[5];
        }
        if (cResult[6] === tmp10) {
          let tmp20;
          if (cResult[7] === tmp13) {
            tmp20 = cResult[8];
          }
          return tmp20;
        }
        const obj2 = { children: items };
        items = [tmp10, tmp13];
        const tmp23 = React4(authStore, obj2);
        cResult[6] = tmp10;
        cResult[7] = tmp13;
        cResult[8] = tmp23;
        tmp20 = tmp23;
      }
      let tmp15 = null != powerup.deactivationCooldownPeriodDays && powerup.deactivationCooldownPeriodDays > 0;
      if (tmp15) {
        const obj3 = { style: tmp4.cooldownInfo, children: items1 };
        const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
        items1 = [metroImportAll(CircleInformationIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2553.GMhQcE, obj6) };
        const Text = Text_Text.Text;
        intl = intl4.intl;
        obj6 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
        items1[1] = metroImportAll(Text, obj5);
        tmp15 = React4(View, obj3);
      }
      cResult[3] = powerup.deactivationCooldownPeriodDays;
      cResult[4] = tmp4.cooldownInfo;
      cResult[5] = tmp15;
      tmp13 = tmp15;
    }
    const obj7 = { style: tmp4.description, variant: "text-md/medium", children: powerup.description };
    const tmp12 = metroImportAll(Text_Text.Text, obj7);
    cResult[0] = powerup.description;
    cResult[1] = tmp4.description;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else if (tmp5.LEVEL === type) {
    let tmp6;
    if (cResult[9] !== powerup) {
      const obj8 = { powerup };
      const tmp9 = metroImportAll(closure_13, obj8);
      cResult[9] = powerup;
      cResult[10] = tmp9;
      tmp6 = tmp9;
    } else {
      tmp6 = cResult[10];
    }
    return tmp6;
  }
}) : ((powerup) => {
  let intl;
  let items1;
  let obj6;
  powerup = powerup.powerup;
  const tmp = closure_11();
  const type = powerup.type;
  if (hasOwnProperty.PERK === type) {
    const obj2 = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [metroImportAll(Text_Text.Text, obj2), ];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays && powerup.deactivationCooldownPeriodDays > 0;
    if (tmp5Result) {
      const obj3 = { style: tmp.cooldownInfo, children: items1 };
      const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const CircleInformationIcon = CircleInformationIcon2.CircleInformationIcon;
      items1 = [metroImportAll(CircleInformationIcon, obj4), ];
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: intl.formatToPlainString(_modDef2553.GMhQcE, obj6) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      obj6 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      items1[1] = metroImportAll(Text, obj5);
      tmp5Result = React4(View, obj3);
    }
    const obj7 = { children: items };
    items[1] = tmp5Result;
    return React4(authStore, obj7);
  } else if (tmp2.LEVEL === type) {
    const obj = { powerup };
    return metroImportAll(closure_13, obj);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let guildId;
  let intl;
  let intl2;
  let isPowerupActive;
  let items;
  let powerup;
  let reason;
  let showConfigureButton;
  let showToggleButton;
  let stringResult;
  const obj = react;
  const cResult = obj.c(29);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  const tmp6 = useHasAllocateBoostPermissionDefault(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(guildId, powerup));
  useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  if (cResult[0] === guildId) {
    if (cResult[1] === showConfigureButton) {
      let tmp8;
      if (cResult[2] === powerup) {
        tmp8 = cResult[3];
      }
      ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
      useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
      const tmp12 = useGuildPowerupOnActivateDefault(guildId, powerup);
      const onActivate = tmp12.onActivate;
      const isLoading = tmp12.isLoading;
      const tmp13 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      let closure_2 = tmp13;
      const tmp14 = useGuildPowerupConfigureCallbackDefault(guildId, powerup);
      if (tmp6) {
        let tmp16;
        if (cResult[4] !== powerup.skuId) {
          const hasItem = metroRequire.has(powerup.skuId);
          cResult[4] = powerup.skuId;
          cResult[5] = hasItem;
          tmp16 = hasItem;
        } else {
          tmp16 = cResult[5];
        }
        const tmp19 = !tmp8 && isPowerupActive && powerup.type === hasOwnProperty.PERK && tmp16 || powerup.skuId === closure_7;
        if (cResult[6] === tmp19) {
          let tmp22;
          if (cResult[7] === tmp4.description) {
            tmp22 = cResult[8];
          }
          if (cResult[9] === disabled) {
            let tmp25;
            if (cResult[10] === reason) {
              tmp25 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              let tmp29;
              if (cResult[13] === tmp8) {
                tmp29 = cResult[14];
              }
              if (cResult[15] === disabled) {
                if (cResult[16] === isLoading) {
                  if (cResult[17] === isPowerupActive) {
                    if (cResult[18] === onActivate) {
                      if (cResult[19] === tmp13) {
                        if (cResult[20] === powerup.skuId) {
                          let tmp32;
                          if (cResult[21] === showToggleButton) {
                            tmp32 = cResult[22];
                          }
                          if (cResult[23] === tmp4.footerContainer) {
                            if (cResult[24] === tmp22) {
                              if (cResult[25] === tmp25) {
                                if (cResult[26] === tmp29) {
                                  let tmp38;
                                  if (cResult[27] === tmp32) {
                                    tmp38 = cResult[28];
                                  }
                                  return tmp38;
                                }
                              }
                            }
                          }
                          const obj2 = { style: tmp4.footerContainer, children: items };
                          items = [tmp22, tmp25, tmp29, tmp32];
                          const tmp41 = React4(View, obj2);
                          cResult[23] = tmp4.footerContainer;
                          cResult[24] = tmp22;
                          cResult[25] = tmp25;
                          cResult[26] = tmp29;
                          cResult[27] = tmp32;
                          cResult[28] = tmp41;
                          tmp38 = tmp41;
                        }
                      }
                    }
                  }
                }
              }
              let tmp35Result = showToggleButton && powerup.skuId !== closure_7;
              if (tmp35Result) {
                let str = "primary";
                const Button2 = components_Button_Button.Button;
                if (isPowerupActive) {
                  str = "secondary";
                }
                const obj3 = {
                  variant: str,
                  text: stringResult,
                  loading: isLoading,
                  disabled,
                  onPress() {
                                  if (isPowerupActive) {
                                    if (closure_2 != null) {
                                      tmp5();
                                    }
                                  } else if (onActivate != null) {
                                    tmp2();
                                  }
                                }
                };
                const intl3 = intl4.intl;
                const string = intl3.string;
                const tmp5Result = _modDef2553;
                if (isPowerupActive) {
                  stringResult = string(tmp5Result.TZsu1U);
                } else {
                  stringResult = string(tmp5Result.gSxlHf);
                }
                tmp35Result = metroImportAll(Button2, obj3);
              }
              cResult[15] = disabled;
              cResult[16] = isLoading;
              cResult[17] = isPowerupActive;
              cResult[18] = onActivate;
              cResult[19] = tmp13;
              cResult[20] = powerup.skuId;
              cResult[21] = showToggleButton;
              cResult[22] = tmp35Result;
              tmp32 = tmp35Result;
            }
            let tmp30 = tmp8;
            if (tmp30) {
              const obj4 = { variant: "primary", text: intl2.string(_modDef2553.g5Ds69), onPress: tmp14 };
              const Button = components_Button_Button.Button;
              intl2 = intl4.intl;
              tmp30 = metroImportAll(Button, obj4);
            }
            cResult[12] = tmp14;
            cResult[13] = tmp8;
            cResult[14] = tmp30;
            tmp29 = tmp30;
          }
          let tmp26 = disabled && null != reason;
          if (tmp26) {
            const obj5 = { text: reason };
            tmp26 = metroImportAll(GuildPowerupsDisabledWarningDefault, obj5);
          }
          cResult[9] = disabled;
          cResult[10] = reason;
          cResult[11] = tmp26;
          tmp25 = tmp26;
        }
        let tmp23 = tmp19;
        if (tmp23) {
          const obj6 = { style: tmp4.description, variant: "text-md/bold", children: intl.string(_modDef2553["jo5++h"]) };
          const Text = Text_Text.Text;
          intl = intl4.intl;
          tmp23 = metroImportAll(Text, obj6);
        }
        cResult[6] = tmp19;
        cResult[7] = tmp4.description;
        cResult[8] = tmp23;
        tmp22 = tmp23;
      } else {
        return null;
      }
    }
  }
  let tmp9 = showConfigureButton;
  if (tmp9) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      const tmpResult = GuildSettingsServerTagUtils;
      result = tmpResult.canUseMobileServerTagSettings(guildId);
    }
    tmp9 = result;
  }
  cResult[0] = guildId;
  cResult[1] = showConfigureButton;
  cResult[2] = powerup;
  cResult[3] = tmp9;
  tmp8 = tmp9;
}) : ((arg0) => {
  let c1;
  let disabled;
  let guildId;
  let intl;
  let intl2;
  let isLoading;
  let isPowerupActive;
  let items;
  let powerup;
  let reason;
  let showConfigureButton;
  let showToggleButton;
  let stringResult;
  ({ guildId, powerup } = arg0);
  isPowerupActive = undefined;
  c1 = undefined;
  let closure_2;
  const tmp = closure_11();
  const tmp4 = useHasAllocateBoostPermissionDefault(guildId);
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = tmp5);
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      const tmp6Result = GuildSettingsServerTagUtils;
      result = tmp6Result.canUseMobileServerTagSettings(guildId);
    }
    showConfigureButton = result;
  }
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  useGuildPowerupOnActivateDefault(guildId, powerup);
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  if (tmp4) {
    let tmp14 = !showConfigureButton;
    const hasItem = metroRequire.has(powerup.skuId);
    if (!showConfigureButton) {
      tmp14 = isPowerupActive;
    }
    if (tmp14) {
      tmp14 = powerup.type === hasOwnProperty.PERK;
    }
    if (tmp14) {
      tmp14 = hasItem;
    }
    if (!tmp14) {
      tmp14 = powerup.skuId === closure_7;
    }
    const obj = { style: tmp.footerContainer, children: items };
    if (tmp14) {
      const obj2 = { style: tmp.description, variant: "text-md/bold", children: intl.string(_modDef2553["jo5++h"]) };
      const Text = Text_Text.Text;
      intl = intl4.intl;
      tmp14 = metroImportAll(Text, obj2);
    }
    items = [tmp14, , , ];
    let tmp21 = disabled && null != reason;
    if (tmp21) {
      const obj3 = { text: reason };
      tmp21 = metroImportAll(GuildPowerupsDisabledWarningDefault, obj3);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj4 = { variant: "primary", text: intl2.string(_modDef2553.g5Ds69), onPress: tmp10 };
      const Button = components_Button_Button.Button;
      intl2 = intl4.intl;
      showConfigureButton = metroImportAll(Button, obj4);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_7;
    }
    if (showToggleButton) {
      let str = "primary";
      const Button2 = components_Button_Button.Button;
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj5 = {
        variant: str,
        text: stringResult,
        loading: isLoading,
        disabled,
        onPress() {
              if (isPowerupActive) {
                if (closure_2 != null) {
                  tmp5();
                }
              } else if (c1 != null) {
                tmp2();
              }
            }
      };
      const intl3 = intl4.intl;
      const string = intl3.string;
      const tmp2Result = _modDef2553;
      if (isPowerupActive) {
        stringResult = string(tmp2Result.TZsu1U);
      } else {
        stringResult = string(tmp2Result.gSxlHf);
      }
      showToggleButton = metroImportAll(Button2, obj5);
    }
    items[3] = showToggleButton;
    return React4(View, obj);
  } else {
    return null;
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let guildId;
  let items;
  let obj4;
  let powerup;
  const obj = react;
  const cResult = obj.c(10);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  const obj2 = GuildPowerupAnalytics;
  const logPowerupModalOpened = obj2.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  if (cResult[0] === guildId) {
    let tmp6;
    let tmp7;
    let tmp8;
    if (cResult[1] === powerup) {
      tmp6 = cResult[2];
      tmp7 = cResult[3];
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          let tmp12;
          if (cResult[8] === tmp8) {
            tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
    const obj3 = { startExpanded: true, children: React4(View, obj4) };
    obj4 = { style: tmp4.container, children: items };
    items = [tmp6, tmp7, tmp8];
    BottomSheet = Sheet_BottomSheet.BottomSheet;
    const tmp16 = metroImportAll(BottomSheet, obj3);
    cResult[5] = tmp4.container;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp8;
    cResult[9] = tmp16;
    tmp12 = tmp16;
  }
  const tmp9 = metroImportAll(closure_12, { guildId, powerup });
  const tmp10 = metroImportAll(closure_14, { guildId, powerup });
  const tmp11 = metroImportAll(closure_15, { guildId, powerup });
  cResult[0] = guildId;
  cResult[1] = powerup;
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = tmp11;
  tmp8 = tmp11;
  tmp7 = tmp10;
  tmp6 = tmp9;
}) : ((arg0) => {
  let guildId;
  let items;
  let obj3;
  let powerup;
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const obj = GuildPowerupAnalytics;
  const logPowerupModalOpened = obj.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  const obj2 = { startExpanded: true, children: React4(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  BottomSheet = Sheet_BottomSheet.BottomSheet;
  items = [metroImportAll(closure_12, { guildId, powerup }), metroImportAll(closure_14, { guildId, powerup }), metroImportAll(closure_15, { guildId, powerup })];
  return metroImportAll(BottomSheet, obj2);
});
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default tmp5;