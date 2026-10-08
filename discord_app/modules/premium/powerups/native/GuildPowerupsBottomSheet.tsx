// === Module 12269: GuildPowerupsBottomSheet ===

// Module 12269 (GuildPowerupsBottomSheet)
import _mod17 from "module_17" /* 17 */;
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import _modDef2597 from "module_2597" /* 2597 */;
import GameServerHostingRive from "GameServerHostingRive" /* 4878 */;
import GameServerConstants from "GameServerConstants" /* 4969 */;
import Powerups from "Powerups" /* 4971 */;
import CircleInformationIcon from "CircleInformationIcon" /* 5012 */;
import Text_Text from "Text/Text" /* 5086 */;
import components_Button_Button from "components/Button/Button" /* 5375 */;
import Sheet_BottomSheet from "Sheet/BottomSheet" /* 6829 */;
import GuildSettingsServerTagUtils from "GuildSettingsServerTagUtils" /* 8616 */;
import useGuildPowerupRollbackEnabledDefault from "useGuildPowerupRollbackEnabled" /* 12249 */;
import usePowerupActiveStatusDefault from "usePowerupActiveStatus" /* 12253 */;
import useHasAllocateBoostPermissionDefault from "useHasAllocateBoostPermission" /* 12264 */;
import useCalculatePowerupCardStatus from "useCalculatePowerupCardStatus" /* 12270 */;
import useGetGuildPowerupBannerImageDefault from "useGetGuildPowerupBannerImage" /* 12271 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12275 */;
import useGuildPowerupLevelPerksDefault from "useGuildPowerupLevelPerks" /* 12277 */;
import GuildBoostingMarketingUtils from "GuildBoostingMarketingUtils" /* 12278 */;
import useGuildPowerupCardFooterConfigDefault from "useGuildPowerupCardFooterConfig" /* 12286 */;
import useCanGuildPowerupBeToggledDefault from "useCanGuildPowerupBeToggled" /* 12287 */;
import useGuildPowerupOnActivateDefault from "useGuildPowerupOnActivate" /* 12288 */;
import useGuildPowerupOnShowDeactivateDefault from "useGuildPowerupOnShowDeactivate" /* 12292 */;
import GuildPowerupAnalytics from "GuildPowerupAnalytics" /* 12296 */;
import useGuildPowerupConfigureCallbackDefault from "useGuildPowerupConfigureCallback" /* 12297 */;
import GuildPowerupsDisabledWarningDefault from "GuildPowerupsDisabledWarning" /* 12298 */;
import AccessibilityStore from "AccessibilityStore" /* 5079 */;
import GuildPowerupsConstants from "GuildPowerupsConstants" /* 4968 */;
import jsxProd from "jsxProd" /* 21 */;
import createStyles from "createStyles" /* 5090 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

const GuildPowerupsBoostGemDefault = tmp5(12272);
const GuildPowerupsImageDefault = tmp5(12274);
const View = _mod17.View;
({ GuildPowerupType: hasOwnProperty, GUILD_POWERUP_CONFIGURABLE_SKUS_DESKTOP: metroRequire } = GuildPowerupsConstants);
let closure_7 = GameServerConstants.GAME_SERVER_POWERUP_SKU_ID;
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let obj = { container: { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 }, headerContainer: null, statusContainer: null, levelContainer: null, perkContainer: null, perkIcon: null, perkText: null, footerContainer: null, image: null, description: null, cooldownInfo: null, gemContainer: null };
let obj2 = { padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj.headerContainer = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
let obj3 = { marginTop: nativeDefault.space.PX_24, alignItems: "center" };
obj.statusContainer = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
let obj4 = { justifyContent: "center", gap: nativeDefault.space.PX_8 };
obj.levelContainer = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj.perkContainer = { flexDirection: "row", alignItems: "center", justifyContent: "space-between" };
obj.perkIcon = { width: 20, height: 20 };
let obj5 = { flexDirection: "column", gap: nativeDefault.space.PX_8, marginTop: nativeDefault.space.PX_16 };
obj.perkText = { marginStart: nativeDefault.space.PX_8 };
let obj6 = { marginStart: nativeDefault.space.PX_8 };
obj.footerContainer = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj.image = { width: "100%", height: 160 };
let obj7 = { gap: nativeDefault.space.PX_12, marginTop: nativeDefault.space.PX_8 };
obj.description = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
let obj8 = { marginHorizontal: nativeDefault.space.PX_24, textAlign: "center" };
obj.cooldownInfo = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
let obj9 = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: nativeDefault.space.PX_4, marginTop: nativeDefault.space.PX_8 };
obj.gemContainer = { marginTop: nativeDefault.space.PX_16 };
let closure_11 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBottomSheetHeader(arg0) {
  const cResult = c.c(23);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  let tmp5 = importDefault;
  const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp6, tmp7);
  image = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (image == null) {
    image = "";
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
  const stateFromStores = initialize.useStateFromStores(tmp9, tmp10);
  if (cResult[2] === image) {
    if (cResult[3] === tmp14) {
      if (cResult[4] === powerup.type) {
        if (cResult[5] === tmp4.gemContainer) {
          if (cResult[6] === tmp4.image) {
            if (cResult[7] === stateFromStores) {
              if (cResult[9] !== powerup.title) {
                const obj3 = { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title };
                const tmp21 = closure_1_8(Text_Text.Text, obj3);
                cResult[9] = powerup.title;
                cResult[10] = tmp21;
                let tmp19 = tmp21;
              } else {
                tmp19 = cResult[10];
              }
              if (cResult[11] === str) {
                if (cResult[12] === powerup.cost) {
                  if (cResult[13] === calculatePowerupCardStatus) {
                    if (cResult[14] === tmp4.statusContainer) {
                      let tmp22 = cResult[15];
                    }
                    if (cResult[16] === tmp4.headerContainer) {
                      if (cResult[17] === tmp19) {
                        if (cResult[18] === tmp22) {
                          let tmp25 = cResult[19];
                        }
                        if (cResult[20] === tmp15) {
                          if (cResult[21] === tmp25) {
                            let tmp29 = cResult[22];
                          }
                          return tmp29;
                        }
                        const obj4 = { children: null };
                        const items1 = [tmp15, tmp25];
                        obj4.children = items1;
                        const tmp32 = options(View, obj4);
                        cResult[20] = tmp15;
                        cResult[21] = tmp25;
                        cResult[22] = tmp32;
                        tmp29 = tmp32;
                      }
                    }
                    const obj5 = { style: tmp4.headerContainer, children: null };
                    const items2 = [tmp19, tmp22];
                    obj5.children = items2;
                    const tmp28 = options(View, obj5);
                    cResult[16] = tmp4.headerContainer;
                    cResult[17] = tmp19;
                    cResult[18] = tmp22;
                    cResult[19] = tmp28;
                    tmp25 = tmp28;
                  }
                }
              }
              const obj6 = { cost: powerup.cost, costDecorator: str, status: calculatePowerupCardStatus, style: tmp4.statusContainer };
              const tmp24 = closure_1_8(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj6);
              cResult[11] = str;
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
  }
  if (powerup.type === constants.LEVEL) {
    tmp5 = GuildPowerupsBoostGemDefault;
    const obj7 = { style: tmp4.gemContainer };
    let tmp33Result = closure_1_8(tmp5, obj7);
  } else if (tmp14) {
    const obj8 = { style: tmp4.image, children: null };
    const obj9 = { stateMachine: "SM_Auto", dataBinding: null };
    const obj10 = { reducedMotion: stateFromStores };
    obj9.dataBinding = obj10;
    obj8.children = closure_1_8(GameServerHostingRive.GameServerHostingRive, obj9);
    tmp33Result = closure_1_8(View, obj8);
  } else {
    const obj11 = { imageUrl: image, style: tmp4.image, isAnimated: true };
    tmp33Result = closure_1_8(GuildPowerupsImageDefault, obj11);
  }
  cResult[2] = image;
  cResult[3] = powerup.skuId === closure_7;
  cResult[4] = powerup.type;
  ({ gemContainer: tmp3[5], image } = tmp4);
  cResult[6] = image;
  cResult[7] = stateFromStores;
  cResult[8] = tmp33Result;
  const tmpResult = initialize;
}) : (function GuildPowerupsBottomSheetHeader(arg0) {
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const tmp4 = usePowerupActiveStatusDefault(guildId, powerup);
  const tmp5 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsBottomSheet");
  const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(powerup, tmp4, tmp5);
  let str = useGetGuildPowerupBannerImageDefault(powerup, true);
  if (str == null) {
    str = "";
  }
  const items = [AccessibilityStore];
  let str2;
  const stateFromStores = initialize.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (powerup.skuId === closure_7) {
    str2 = "+";
  }
  if (powerup.type === constants.LEVEL) {
    const obj2 = { style: tmp.gemContainer };
    let tmp15 = closure_1_8(GuildPowerupsBoostGemDefault, obj2);
    let tmp14 = closure_1_8;
  } else if (tmp10 === closure_7) {
    const obj3 = { style: tmp.image, children: null };
    const obj4 = { stateMachine: "SM_Auto", dataBinding: null };
    const obj5 = { reducedMotion: stateFromStores };
    obj4.dataBinding = obj5;
    obj3.children = closure_1_8(GameServerHostingRive.GameServerHostingRive, obj4);
    tmp15 = closure_1_8(View, obj3);
    tmp14 = closure_1_8;
  } else {
    const obj6 = { imageUrl: str, style: tmp.image, isAnimated: true };
    tmp14 = closure_1_8;
    tmp15 = closure_1_8(GuildPowerupsImageDefault, obj6);
  }
  const obj7 = { children: null };
  const items1 = [tmp15, ];
  const obj8 = { style: tmp.headerContainer, children: null };
  const items2 = [tmp14(Text_Text.Text, { variant: "heading-xl/bold", accessibilityRole: "header", children: powerup.title }), tmp14(GuildPowerupsCardFooter.GuildPowerupsCardFooter, { cost: powerup.cost, costDecorator: str2, status: calculatePowerupCardStatus, style: tmp.statusContainer })];
  obj8.children = items2;
  items1[1] = options(View, obj8);
  obj7.children = items1;
  return options(View, obj7);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBottomSheetLevelBody(powerup) {
  const cResult = require("c").c(12);
  const tmp2 = closure_11();
  _require = tmp2;
  perkText = useGuildPowerupLevelPerksDefault(powerup.powerup);
  if (cResult[0] === perkText) {
    if (cResult[1] === tmp2.perkContainer) {
      if (cResult[2] === tmp2.perkIcon) {
        if (cResult[3] === tmp2.perkText) {
          if (cResult[9] === tmp2.levelContainer) {
            if (cResult[10] === tmp4) {
              let tmp8 = cResult[11];
            }
            return tmp8;
          }
          let obj2 = { style: tmp3, children: cResult[4] };
          const tmp11 = closure_8(View, obj2);
          cResult[9] = tmp2.levelContainer;
          cResult[10] = cResult[4];
          cResult[11] = tmp11;
          tmp8 = tmp11;
        }
      }
    }
  }
  if (cResult[5] === tmp2.perkContainer) {
    if (cResult[6] === tmp2.perkIcon) {
      if (cResult[7] === tmp2.perkText) {
        let tmp5 = cResult[8];
      }
      const mapped = perkText.map(tmp5);
      cResult[0] = perkText;
      cResult[1] = tmp2.perkContainer;
      ({ perkIcon: tmp[2], perkText } = tmp2);
      cResult[3] = perkText;
      cResult[4] = mapped;
    }
  }
  const fn = function s(children, arg1) {
    const obj2 = { style: closure_0.perkContainer, children: null };
    const iconForPerk = GuildBoostingMarketingUtils.getIconForPerk(children.perkIcon);
    const items = [closure_2_8(Text_Text.Text, { style: closure_0.perkText, variant: "text-md/medium", children: children.description }), closure_2_8(iconForPerk, { style: closure_0.perkIcon })];
    obj2.children = items;
    return options(View, obj2, "perk-" + arg1 + "-" + children.perkIcon);
  };
  cResult[5] = tmp2.perkContainer;
  cResult[6] = tmp2.perkIcon;
  cResult[7] = tmp2.perkText;
  cResult[8] = fn;
  tmp5 = fn;
  const obj = require("c");
}) : (function GuildPowerupsBottomSheetLevelBody(powerup) {
  const tmp = closure_11();
  closure_0 = tmp;
  const arr = useGuildPowerupLevelPerksDefault(powerup.powerup);
  return closure_8(View, {
    style: tmp.levelContainer,
    children: useGuildPowerupLevelPerksDefault(powerup.powerup).map((children, index) => {
      const obj2 = { style: closure_0.perkContainer, children: null };
      const iconForPerk = GuildBoostingMarketingUtils.getIconForPerk(children.perkIcon);
      const items = [closure_2_8(Text_Text.Text, { style: closure_0.perkText, variant: "text-md/medium", children: children.description }), closure_2_8(iconForPerk, { style: closure_0.perkIcon })];
      obj2.children = items;
      return options(View, obj2, "perk-" + index + "-" + children.perkIcon);
    })
  });
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBottomSheetBody(powerup) {
  const cResult = c.c(11);
  powerup = powerup.powerup;
  const tmp4 = closure_11();
  const type = powerup.type;
  if (constants.PERK === type) {
    if (cResult[0] === powerup.description) {
      if (cResult[1] === tmp4.description) {
        let tmp10 = cResult[2];
      }
      if (cResult[3] === powerup.deactivationCooldownPeriodDays) {
        if (cResult[4] === tmp4.cooldownInfo) {
          let tmp13 = cResult[5];
        }
        if (cResult[6] === tmp10) {
          if (cResult[7] === tmp13) {
            let tmp20 = cResult[8];
          }
          return tmp20;
        }
        const obj2 = { children: null };
        const items = [tmp10, tmp13];
        obj2.children = items;
        const tmp23 = options(collapsed, obj2);
        cResult[6] = tmp10;
        cResult[7] = tmp13;
        cResult[8] = tmp23;
        tmp20 = tmp23;
      }
      let tmp15 = null != powerup.deactivationCooldownPeriodDays;
      if (tmp15) {
        tmp15 = powerup.deactivationCooldownPeriodDays > 0;
      }
      if (tmp15) {
        const obj3 = { style: tmp4.cooldownInfo, children: null };
        const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
        const items1 = [closure_1_8(CircleInformationIcon.CircleInformationIcon, obj4), ];
        const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
        const intl = util.intl;
        const obj6 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
        obj5.children = intl.formatToPlainString(_modDef2597.GMhQcE, obj6);
        items1[1] = closure_1_8(Text_Text.Text, obj5);
        obj3.children = items1;
        tmp15 = options(View, obj3);
      }
      cResult[3] = powerup.deactivationCooldownPeriodDays;
      cResult[4] = tmp4.cooldownInfo;
      cResult[5] = tmp15;
      tmp13 = tmp15;
    }
    const obj7 = { style: tmp4.description, variant: "text-md/medium", children: powerup.description };
    const tmp12 = closure_1_8(Text_Text.Text, obj7);
    cResult[0] = powerup.description;
    cResult[1] = tmp4.description;
    cResult[2] = tmp12;
    tmp10 = tmp12;
  } else if (tmp5.LEVEL === type) {
    if (cResult[9] !== powerup) {
      const obj8 = { powerup };
      const tmp9 = closure_1_8(closure_13, obj8);
      cResult[9] = powerup;
      cResult[10] = tmp9;
      let tmp6 = tmp9;
    } else {
      tmp6 = cResult[10];
    }
    return tmp6;
  }
}) : (function GuildPowerupsBottomSheetBody(powerup) {
  powerup = powerup.powerup;
  const tmp = closure_11();
  const type = powerup.type;
  if (constants.PERK === type) {
    const obj2 = { style: tmp.description, variant: "text-md/medium", children: powerup.description };
    const items = [closure_1_8(Text_Text.Text, obj2), ];
    let tmp5Result = null != powerup.deactivationCooldownPeriodDays;
    if (tmp5Result) {
      tmp5Result = powerup.deactivationCooldownPeriodDays > 0;
    }
    if (tmp5Result) {
      const obj3 = { style: tmp.cooldownInfo, children: null };
      const obj4 = { size: "xs", color: nativeDefault.colors.TEXT_MUTED };
      const items1 = [closure_1_8(CircleInformationIcon.CircleInformationIcon, obj4), ];
      const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl = util.intl;
      const obj6 = { cooldownDays: powerup.deactivationCooldownPeriodDays };
      obj5.children = intl.formatToPlainString(_modDef2597.GMhQcE, obj6);
      items1[1] = closure_1_8(Text_Text.Text, obj5);
      obj3.children = items1;
      tmp5Result = options(View, obj3);
    }
    const obj7 = { children: null };
    items[1] = tmp5Result;
    obj7.children = items;
    return options(collapsed, obj7);
  } else if (tmp2.LEVEL === type) {
    const obj = { powerup };
    return closure_1_8(closure_13, obj);
  }
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBottomSheetFooter(arg0) {
  const cResult = c.c(29);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  const tmp6 = useHasAllocateBoostPermissionDefault(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(guildId, powerup));
  if (cResult[0] === guildId) {
    if (cResult[1] === showConfigureButton) {
      if (cResult[2] === powerup) {
        let tmp8 = cResult[3];
      }
      ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
      const tmp12 = useGuildPowerupOnActivateDefault(guildId, powerup);
      const onActivate = tmp12.onActivate;
      const isLoading = tmp12.isLoading;
      const tmp13 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      closure_2 = tmp13;
      const tmp14 = useGuildPowerupConfigureCallbackDefault(guildId, powerup);
      if (tmp6) {
        if (cResult[4] !== powerup.skuId) {
          const hasItem = set.has(powerup.skuId);
          cResult[4] = powerup.skuId;
          cResult[5] = hasItem;
          let tmp16 = hasItem;
        } else {
          tmp16 = cResult[5];
        }
        let tmp19 = !tmp8;
        if (!tmp8) {
          tmp19 = isPowerupActive;
        }
        if (tmp19) {
          tmp19 = powerup.type === constants.PERK;
        }
        if (tmp19) {
          tmp19 = tmp16;
        }
        if (!tmp19) {
          tmp19 = powerup.skuId === closure_7;
        }
        if (cResult[6] === tmp19) {
          if (cResult[7] === tmp4.description) {
            let tmp22 = cResult[8];
          }
          if (cResult[9] === disabled) {
            if (cResult[10] === reason) {
              let tmp25 = cResult[11];
            }
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp8) {
                let tmp29 = cResult[14];
              }
              if (cResult[15] === disabled) {
                if (cResult[16] === isLoading) {
                  if (cResult[17] === isPowerupActive) {
                    if (cResult[18] === onActivate) {
                      if (cResult[19] === tmp13) {
                        if (cResult[20] === powerup.skuId) {
                          if (cResult[21] === showToggleButton) {
                            let tmp32 = cResult[22];
                          }
                          if (cResult[23] === tmp4.footerContainer) {
                            if (cResult[24] === tmp22) {
                              if (cResult[25] === tmp25) {
                                if (cResult[26] === tmp29) {
                                  if (cResult[27] === tmp32) {
                                    let tmp38 = cResult[28];
                                  }
                                  return tmp38;
                                }
                              }
                            }
                          }
                          const obj2 = { style: tmp4.footerContainer, children: null };
                          const items = [tmp22, tmp25, tmp29, tmp32];
                          obj2.children = items;
                          const tmp41 = options(View, obj2);
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
              let tmp33 = showToggleButton;
              if (showToggleButton) {
                tmp33 = powerup.skuId !== closure_7;
              }
              if (!tmp33) {
                cResult[15] = disabled;
                cResult[16] = isLoading;
                cResult[17] = isPowerupActive;
                cResult[18] = onActivate;
                cResult[19] = tmp13;
                cResult[20] = powerup.skuId;
                cResult[21] = showToggleButton;
                cResult[22] = tmp33;
                tmp32 = tmp33;
              } else {
                let str = "primary";
                if (isPowerupActive) {
                  str = "secondary";
                }
                const obj3 = { variant: str, text: null, loading: null, disabled: null, onPress: null };
                const intl3 = util.intl;
                const string = intl3.string;
                let TZsu1U = _modDef2597;
                if (isPowerupActive) {
                  TZsu1U = TZsu1U.TZsu1U;
                  let stringResult = string(TZsu1U);
                } else {
                  stringResult = string(TZsu1U.gSxlHf);
                }
                obj3.text = stringResult;
                obj3.loading = isLoading;
                obj3.disabled = disabled;
                obj3.onPress = function onPress() {
                  if (isPowerupActive) {
                    if (closure_2 != null) {
                      tmp4();
                    }
                  } else if (onActivate != null) {
                    tmp();
                  }
                };
                closure_1_8(components_Button_Button.Button, obj3);
              }
            }
            let tmp30 = tmp8;
            if (tmp8) {
              const obj4 = { variant: "primary", text: null, onPress: null };
              const intl2 = util.intl;
              obj4.text = intl2.string(_modDef2597.g5Ds69);
              obj4.onPress = tmp14;
              tmp30 = closure_1_8(components_Button_Button.Button, obj4);
            }
            cResult[12] = tmp14;
            cResult[13] = tmp8;
            cResult[14] = tmp30;
            tmp29 = tmp30;
          }
          let tmp26 = disabled;
          if (disabled) {
            tmp26 = null != reason;
          }
          if (tmp26) {
            const obj5 = { text: reason };
            tmp26 = closure_1_8(GuildPowerupsDisabledWarningDefault, obj5);
          }
          cResult[9] = disabled;
          cResult[10] = reason;
          cResult[11] = tmp26;
          tmp25 = tmp26;
        }
        let tmp23 = tmp19;
        if (tmp19) {
          const obj6 = { style: tmp4.description, variant: "text-md/bold", children: null };
          const intl = util.intl;
          obj6.children = intl.string(_modDef2597["jo5++h"]);
          tmp23 = closure_1_8(Text_Text.Text, obj6);
        }
        cResult[6] = tmp19;
        cResult[7] = tmp4.description;
        cResult[8] = tmp23;
        tmp22 = tmp23;
      } else {
        return null;
      }
      const tmp11 = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
    }
  }
  let tmp9 = showConfigureButton;
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      result = GuildSettingsServerTagUtils.canUseMobileServerTagSettings(guildId);
      const tmpResult = GuildSettingsServerTagUtils;
    }
    tmp9 = result;
  }
  cResult[0] = guildId;
  cResult[1] = showConfigureButton;
  cResult[2] = powerup;
  cResult[3] = tmp9;
  tmp8 = tmp9;
  const tmp7 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
}) : (function GuildPowerupsBottomSheetFooter(arg0) {
  ({ guildId, powerup } = arg0);
  isPowerupActive = undefined;
  c1 = undefined;
  closure_2 = undefined;
  const tmp = closure_11();
  const tmp4 = useHasAllocateBoostPermissionDefault(guildId);
  ({ showToggleButton, showConfigureButton, isPowerupActive } = useGuildPowerupCardFooterConfigDefault(guildId, powerup));
  if (showConfigureButton) {
    let result = powerup.skuId !== Powerups.GUILD_POWERUP_TAG_SKU_ID;
    if (!result) {
      result = GuildSettingsServerTagUtils.canUseMobileServerTagSettings(guildId);
      const tmp6Result = GuildSettingsServerTagUtils;
    }
    showConfigureButton = result;
  }
  const tmp5 = useGuildPowerupCardFooterConfigDefault(guildId, powerup);
  ({ disabled, reason } = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive));
  const tmp8 = useCanGuildPowerupBeToggledDefault(guildId, powerup, isPowerupActive);
  ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
  closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
  if (tmp4) {
    let tmp14 = !showConfigureButton;
    const hasItem = set.has(powerup.skuId);
    if (!showConfigureButton) {
      tmp14 = isPowerupActive;
    }
    if (tmp14) {
      tmp14 = powerup.type === constants.PERK;
    }
    if (tmp14) {
      tmp14 = hasItem;
    }
    if (!tmp14) {
      tmp14 = powerup.skuId === closure_7;
    }
    const obj = { style: tmp.footerContainer, children: null };
    if (tmp14) {
      const obj2 = { style: tmp.description, variant: "text-md/bold", children: null };
      const intl = util.intl;
      obj2.children = intl.string(_modDef2597["jo5++h"]);
      tmp14 = closure_1_8(Text_Text.Text, obj2);
    }
    const items = [tmp14, , , ];
    let tmp21 = disabled;
    if (disabled) {
      tmp21 = null != reason;
    }
    if (tmp21) {
      const obj3 = { text: reason };
      tmp21 = closure_1_8(GuildPowerupsDisabledWarningDefault, obj3);
    }
    items[1] = tmp21;
    if (showConfigureButton) {
      const obj4 = { variant: "primary", text: null, onPress: null };
      const intl2 = util.intl;
      obj4.text = intl2.string(_modDef2597.g5Ds69);
      obj4.onPress = tmp10;
      showConfigureButton = closure_1_8(components_Button_Button.Button, obj4);
    }
    items[2] = showConfigureButton;
    if (showToggleButton) {
      showToggleButton = powerup.skuId !== closure_7;
    }
    if (!showToggleButton) {
      items[3] = showToggleButton;
      obj.children = items;
      return options(View, obj);
    } else {
      let str = "primary";
      if (isPowerupActive) {
        str = "secondary";
      }
      const obj5 = { variant: str, text: null, loading: null, disabled: null, onPress: null };
      const intl3 = util.intl;
      const string = intl3.string;
      let TZsu1U = _modDef2597;
      if (isPowerupActive) {
        TZsu1U = TZsu1U.TZsu1U;
        let stringResult = string(TZsu1U);
      } else {
        stringResult = string(TZsu1U.gSxlHf);
      }
      obj5.text = stringResult;
      obj5.loading = isLoading;
      obj5.disabled = disabled;
      obj5.onPress = function onPress() {
        if (isPowerupActive) {
          if (closure_2 != null) {
            tmp4();
          }
        } else if (c1 != null) {
          tmp();
        }
      };
      closure_1_8(components_Button_Button.Button, obj5);
    }
  } else {
    return null;
  }
  const tmp9 = useGuildPowerupOnActivateDefault(guildId, powerup);
});
let ReactCompilerGating = ReactCompilerGating_mod;
let obj10 = { marginTop: nativeDefault.space.PX_16 };
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsBottomSheet(arg0) {
  const cResult = c.c(10);
  ({ guildId, powerup } = arg0);
  const tmp4 = closure_11();
  const logPowerupModalOpened = GuildPowerupAnalytics.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  if (cResult[0] === guildId) {
    if (cResult[1] === powerup) {
      let tmp6 = cResult[2];
      let tmp7 = cResult[3];
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp4.container) {
      if (cResult[6] === tmp6) {
        if (cResult[7] === tmp7) {
          if (cResult[8] === tmp8) {
            let tmp12 = cResult[9];
          }
          return tmp12;
        }
      }
    }
    const obj3 = { startExpanded: true, children: null };
    const obj4 = { style: tmp4.container, children: null };
    const items = [tmp6, tmp7, tmp8];
    obj4.children = items;
    obj3.children = options(View, obj4);
    const tmp16 = closure_1_8(Sheet_BottomSheet.BottomSheet, obj3);
    cResult[5] = tmp4.container;
    cResult[6] = tmp6;
    cResult[7] = tmp7;
    cResult[8] = tmp8;
    cResult[9] = tmp16;
    tmp12 = tmp16;
  }
  const tmp9 = closure_1_8(closure_12, { guildId, powerup });
  const tmp10 = closure_1_8(closure_14, { guildId, powerup });
  const tmp11 = closure_1_8(closure_15, { guildId, powerup });
  cResult[0] = guildId;
  cResult[1] = powerup;
  cResult[2] = tmp9;
  cResult[3] = tmp10;
  cResult[4] = tmp11;
  tmp8 = tmp11;
  tmp7 = tmp10;
  tmp6 = tmp9;
}) : (function GuildPowerupsBottomSheet(arg0) {
  ({ guildId, powerup } = arg0);
  const tmp = closure_11();
  const logPowerupModalOpened = GuildPowerupAnalytics.useLogPowerupModalOpened(guildId, powerup, GuildPowerupAnalytics.ModalType.DETAIL);
  const obj2 = { startExpanded: true, children: null };
  const obj3 = { style: tmp.container, children: null };
  const items = [closure_1_8(closure_12, { guildId, powerup }), closure_1_8(closure_14, { guildId, powerup }), closure_1_8(closure_15, { guildId, powerup })];
  obj3.children = items;
  obj2.children = options(View, obj3);
  return closure_1_8(Sheet_BottomSheet.BottomSheet, obj2);
});