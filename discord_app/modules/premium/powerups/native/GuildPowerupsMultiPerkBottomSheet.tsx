// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../safe_area/useSafeAreaInsets.native.tsx";
import _modDef2553 from "../GuildPowerups.messages.js";
import themes from "../../../../design/utils/shared/themes.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import useGuildPowerupRollbackEnabledDefault from "../hooks/useGuildPowerupRollbackEnabled.tsx";
import usePowerupActiveStatus from "../hooks/usePowerupActiveStatus.tsx";
import useHasAllocateBoostPermissionDefault from "../hooks/useHasAllocateBoostPermission.tsx";
import useCalculatePowerupCardStatus from "../utils/useCalculatePowerupCardStatus.tsx";
import useGetGuildPowerupBannerImageDefault from "../hooks/useGetGuildPowerupBannerImage.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter.tsx";
import useCanGuildPowerupBeToggledDefault from "../hooks/useCanGuildPowerupBeToggled.tsx";
import useGuildPowerupOnActivateDefault from "hooks/useGuildPowerupOnActivate.tsx";
import useGuildPowerupOnShowDeactivateDefault from "hooks/useGuildPowerupOnShowDeactivate.tsx";
import useGuildPowerupColorConfigDefault from "hooks/useGuildPowerupColorConfig.tsx";
import usePowerupGroupConfigDefault from "hooks/usePowerupGroupConfig.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const usePowerupActiveStatusDefault = usePowerupActiveStatus;

const GuildPowerupsSectionHeaderDefault = tmp5(12226);
const View = _mod17.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((arg0) => {
  const obj = {
    container: { gap: nativeDefault.space.PX_8 },
    cardsContainer: null,
    titleContainer: null,
    bodyContainer: null,
    imageContainer: null,
    imageContainerActive: null,
    imageContainerExpiring: null,
    imageContainerRemoving: null,
    image: null,
    disabled: null,
    badge: null,
  };
  const obj2 = { gap: nativeDefault.space.PX_8 };
  obj.cardsContainer = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
  obj.titleContainer = { flexDirection: "column", gap: 4 };
  obj.bodyContainer = { justifyContent: "space-between", alignItems: "center", flexDirection: "row" };
  const obj4 = {
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderStyle: "solid",
    backgroundColor: null,
  };
  let str = "#ffffff";
  const obj3 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
  if (arg0) {
    str = "#000000";
  }
  const tmp3Result = _modDef683(str);
  obj4.backgroundColor = _modDef683(str).alpha(0.04).hex();
  obj.imageContainer = obj4;
  const obj5 = { borderColor: null };
  const alphaResult = _modDef683(str).alpha(0.04);
  const tmpResult = _modDef683;
  const tmpResultResult = _modDef683(nativeDefault.unsafe_rawColors.GREEN_360);
  obj5.borderColor = _modDef683(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35).hex();
  obj.imageContainerActive = obj5;
  const obj6 = { borderColor: null };
  const alphaResult1 = _modDef683(nativeDefault.unsafe_rawColors.GREEN_360).alpha(0.35);
  const tmpResult3 = _modDef683;
  const tmpResult1Result = _modDef683(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj6.borderColor = _modDef683(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerExpiring = obj6;
  const obj7 = { borderColor: null };
  const alphaResult2 = _modDef683(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35);
  const tmpResult4 = _modDef683;
  const tmpResult2Result = _modDef683(nativeDefault.unsafe_rawColors.YELLOW_300);
  obj7.borderColor = _modDef683(nativeDefault.unsafe_rawColors.YELLOW_300).alpha(0.35).hex();
  obj.imageContainerRemoving = obj7;
  obj.image = { width: "75%", height: 180, resizeMode: "contain" };
  obj.disabled = { opacity: 0.5 };
  const rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
  obj.badge = rect;
  return obj;
});
let createStyles = createStyles_mod;
let obj = {
  cardsContainer: { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 },
  disabledReasonContainer: null,
};
let obj2 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
obj.disabledReasonContainer = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(48);
      ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
      const tmp5 = useThemeDefault();
      if (cResult[0] !== tmp5) {
        const isThemeLightResult = themes.isThemeLight(tmp5);
        cResult[0] = tmp5;
        cResult[1] = isThemeLightResult;
        let tmp6 = isThemeLightResult;
        const tmpResult = themes;
      } else {
        tmp6 = cResult[1];
      }
      const tmp8 = closure_6(tmp6);
      const tmp9 = useHasAllocateBoostPermissionDefault(guildId);
      const tmp10 = usePowerupActiveStatusDefault(guildId, powerup);
      const tmp11 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
      const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(
        powerup,
        tmp10,
        tmp11,
      );
      if (cResult[2] !== tmp10) {
        const result = usePowerupActiveStatus.isPowerupActiveStatusActive(tmp10);
        cResult[2] = tmp10;
        cResult[3] = result;
        let tmp13 = result;
        const tmpResult4 = usePowerupActiveStatus;
      } else {
        tmp13 = cResult[3];
      }
      closure_0 = tmp13;
      const textColor = useGuildPowerupColorConfigDefault(tmp13).textColor;
      let str = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
      const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, tmp13).disabled;
      const tmp15 = useGuildPowerupOnActivateDefault(guildId, powerup);
      const onActivate = tmp15.onActivate;
      const isLoading = tmp15.isLoading;
      const tmp16 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      closure_2 = tmp16;
      let disabled2 = disabled;
      if (disabled) {
        disabled2 = tmp9;
      }
      if (disabled2) {
        disabled2 = tmp8.disabled;
      }
      if (cResult[4] === tmp8.container) {
        if (cResult[5] === disabled2) {
          let tmp17 = cResult[6];
        }
        let type;
        if (calculatePowerupCardStatus != null) {
          type = calculatePowerupCardStatus.type;
        }
        let type1;
        if (calculatePowerupCardStatus != null) {
          type1 = calculatePowerupCardStatus.type;
        }
        let type2;
        if (calculatePowerupCardStatus != null) {
          type2 = calculatePowerupCardStatus.type;
        }
        if (cResult[7] === tmp8.imageContainer) {
          if (cResult[8] === tmp20) {
            if (cResult[9] === tmp22) {
              if (cResult[10] === tmp24) {
                let tmp25 = cResult[11];
              }
              if (str == null) {
                str = "";
              }
              if (cResult[12] === tmp8.image) {
                if (cResult[13] === str) {
                  if (cResult[14] === tmp26) {
                    let tmp27 = cResult[15];
                  }
                  if (cResult[16] === isNewPerk) {
                    if (cResult[17] === tmp8.badge) {
                      let tmp30 = cResult[18];
                    }
                    if (cResult[19] === tmp27) {
                      if (cResult[20] === tmp30) {
                        if (cResult[21] === tmp25) {
                          let tmp33 = cResult[22];
                        }
                        if (cResult[23] === powerup.title) {
                          if (cResult[24] === textColor) {
                            let tmp37 = cResult[25];
                          }
                          if (cResult[26] === powerup.cost) {
                            if (cResult[27] === calculatePowerupCardStatus) {
                              if (cResult[29] === tmp8.titleContainer) {
                                if (cResult[30] === tmp37) {
                                  if (cResult[31] === tmp40) {
                                    let tmp45 = cResult[32];
                                  }
                                  if (cResult[33] === tmp9) {
                                    if (cResult[34] === disabled) {
                                      if (cResult[35] === tmp13) {
                                        if (cResult[36] === isLoading) {
                                          if (cResult[37] === onActivate) {
                                            if (cResult[38] === tmp16) {
                                              let tmp49 = cResult[39];
                                            }
                                            if (cResult[40] === tmp8.bodyContainer) {
                                              if (cResult[41] === tmp45) {
                                                if (cResult[42] === tmp49) {
                                                  let tmp54 = cResult[43];
                                                }
                                                if (cResult[44] === tmp33) {
                                                  if (cResult[45] === tmp54) {
                                                    if (cResult[46] === tmp17) {
                                                      let tmp58 = cResult[47];
                                                    }
                                                    return tmp58;
                                                  }
                                                }
                                                const obj2 = { style: tmp17, children: null };
                                                const items = [tmp33, tmp54];
                                                obj2.children = items;
                                                const tmp61 = hasOwnProperty(View, obj2);
                                                cResult[44] = tmp33;
                                                cResult[45] = tmp54;
                                                cResult[46] = tmp17;
                                                cResult[47] = tmp61;
                                                tmp58 = tmp61;
                                              }
                                            }
                                            const obj3 = { style: tmp8.bodyContainer, children: null };
                                            const items1 = [tmp45, tmp49];
                                            obj3.children = items1;
                                            const tmp57 = hasOwnProperty(View, obj3);
                                            cResult[40] = tmp8.bodyContainer;
                                            cResult[41] = tmp45;
                                            cResult[42] = tmp49;
                                            cResult[43] = tmp57;
                                            tmp54 = tmp57;
                                          }
                                        }
                                      }
                                    }
                                  }
                                  if (!tmp9) {
                                    cResult[33] = tmp9;
                                    cResult[34] = disabled;
                                    cResult[35] = tmp13;
                                    cResult[36] = isLoading;
                                    cResult[37] = onActivate;
                                    cResult[38] = tmp16;
                                    cResult[39] = tmp9;
                                    tmp49 = tmp9;
                                  } else {
                                    const obj4 = {
                                      disabled,
                                      loading: isLoading,
                                      variant: null,
                                      text: null,
                                      onPress: null,
                                    };
                                    let str5 = "primary";
                                    if (tmp13) {
                                      str5 = "secondary";
                                    }
                                    obj4.variant = str5;
                                    const intl2 = util.intl;
                                    const tmp4Result = _modDef2553;
                                    obj4.text = intl2.string(tmp13 ? tmp4Result.TZsu1U : tmp4Result.gSxlHf);
                                    obj4.onPress = function onPress() {
                                      if (closure_0) {
                                        closure_2();
                                      } else {
                                        onActivate();
                                      }
                                    };
                                    React4(components_Button_Button.Button, obj4);
                                  }
                                }
                              }
                              const obj5 = { style: tmp8.titleContainer, children: null };
                              const items2 = [tmp37, cResult[28]];
                              obj5.children = items2;
                              const tmp48 = hasOwnProperty(View, obj5);
                              cResult[29] = tmp8.titleContainer;
                              cResult[30] = tmp37;
                              cResult[31] = cResult[28];
                              cResult[32] = tmp48;
                              tmp45 = tmp48;
                            }
                          }
                          if (null != calculatePowerupCardStatus) {
                            const obj6 = { status: calculatePowerupCardStatus };
                            let tmp42 = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj6);
                          } else {
                            const obj7 = { cost: powerup.cost };
                            tmp42 = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj7);
                          }
                          powerup = powerup.cost;
                          cResult[26] = powerup;
                          cResult[27] = calculatePowerupCardStatus;
                          cResult[28] = tmp42;
                        }
                        const obj8 = { variant: "heading-md/semibold", color: textColor, children: powerup.title };
                        const tmp39 = React4(Text_Text.Text, obj8);
                        cResult[23] = powerup.title;
                        cResult[24] = textColor;
                        cResult[25] = tmp39;
                        tmp37 = tmp39;
                      }
                    }
                    const obj9 = { style: tmp25, children: null };
                    const items3 = [tmp27, tmp30];
                    obj9.children = items3;
                    const tmp36 = hasOwnProperty(View, obj9);
                    cResult[19] = tmp27;
                    cResult[20] = tmp30;
                    cResult[21] = tmp25;
                    cResult[22] = tmp36;
                    tmp33 = tmp36;
                  }
                  let tmp31 = isNewPerk;
                  if (isNewPerk) {
                    const obj10 = { text: null, style: null };
                    const intl = util.intl;
                    obj10.text = intl.string(util.t.y2b7CA);
                    obj10.style = tmp8.badge;
                    tmp31 = React4(native.TextBadge, obj10);
                  }
                  cResult[16] = isNewPerk;
                  cResult[17] = tmp8.badge;
                  cResult[18] = tmp31;
                  tmp30 = tmp31;
                }
              }
              const obj11 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp8.image };
              const tmp29 = React4(GuildPowerupsImageDefault, obj11);
              cResult[12] = tmp8.image;
              cResult[13] = str;
              cResult[14] = !forceStaticImage;
              cResult[15] = tmp29;
              tmp27 = tmp29;
            }
          }
        }
        const items4 = [
          tmp8.imageContainer,
          "active" === type && tmp8.imageContainerActive,
          "expiring" === type1 && tmp8.imageContainerExpiring,
          "removing" === type2 && tmp8.imageContainerRemoving,
        ];
        cResult[7] = tmp8.imageContainer;
        cResult[8] = "active" === type && tmp8.imageContainerActive;
        cResult[9] = "expiring" === type1 && tmp8.imageContainerExpiring;
        cResult[10] = "removing" === type2 && tmp8.imageContainerRemoving;
        cResult[11] = items4;
        tmp25 = items4;
      }
      const items5 = [tmp8.container, disabled2];
      cResult[4] = tmp8.container;
      cResult[5] = disabled2;
      cResult[6] = items5;
      tmp17 = items5;
      const tmpResult3 = useCalculatePowerupCardStatus;
    }
  : (arg0) => {
      ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
      c1 = undefined;
      const tmp4 = closure_6(themes.isThemeLight(useThemeDefault()));
      const tmp5 = useHasAllocateBoostPermissionDefault(guildId);
      const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
      const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
      const calculatePowerupCardStatus = useCalculatePowerupCardStatus.useCalculatePowerupCardStatus(
        powerup,
        tmp6,
        tmp7,
      );
      const result = usePowerupActiveStatus.isPowerupActiveStatusActive(tmp6);
      c0 = result;
      const tmp10 = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
      const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, result).disabled;
      ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
      closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      const items = [tmp4.container];
      let disabled2 = disabled;
      if (disabled) {
        disabled2 = tmp5;
      }
      if (disabled2) {
        disabled2 = tmp4.disabled;
      }
      const obj4 = { style: items, children: null };
      items[1] = disabled2;
      const items1 = [tmp4.imageContainer, , ,];
      let type;
      if (calculatePowerupCardStatus != null) {
        type = calculatePowerupCardStatus.type;
      }
      items1[1] = "active" === type && tmp4.imageContainerActive;
      let type1;
      if (calculatePowerupCardStatus != null) {
        type1 = calculatePowerupCardStatus.type;
      }
      items1[2] = "expiring" === type1 && tmp4.imageContainerExpiring;
      let type2;
      if (calculatePowerupCardStatus != null) {
        type2 = calculatePowerupCardStatus.type;
      }
      const obj5 = { style: items1, children: null };
      items1[3] = "removing" === type2 && tmp4.imageContainerRemoving;
      let str = tmp10;
      const tmp11 = useGuildPowerupOnActivateDefault(guildId, powerup);
      const tmp17 = "removing" === type2 && tmp4.imageContainerRemoving;
      if (tmp10 == null) {
        str = "";
      }
      const items2 = [
        React4(GuildPowerupsImageDefault, { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image }),
      ];
      if (isNewPerk) {
        const obj7 = { text: null, style: null };
        const intl = util.intl;
        obj7.text = intl.string(util.t.y2b7CA);
        obj7.style = tmp4.badge;
        isNewPerk = React4(native.TextBadge, obj7);
      }
      items2[1] = isNewPerk;
      obj5.children = items2;
      const items3 = [hasOwnProperty(View, obj5)];
      const obj8 = { style: tmp4.bodyContainer, children: null };
      const obj9 = { style: tmp4.titleContainer, children: null };
      const obj6 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
      const tmp3Result = GuildPowerupsImageDefault;
      const items4 = [
        React4(Text_Text.Text, {
          variant: "heading-md/semibold",
          color: useGuildPowerupColorConfigDefault(result).textColor,
          children: powerup.title,
        }),
      ];
      if (null != calculatePowerupCardStatus) {
        const obj11 = { status: calculatePowerupCardStatus };
        let tmp18Result = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj11);
      } else {
        const obj12 = { cost: powerup.cost };
        tmp18Result = React4(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj12);
      }
      items4[1] = tmp18Result;
      obj9.children = items4;
      const items5 = [hasOwnProperty(View, obj9)];
      if (!tmp5) {
        items5[1] = tmp5;
        obj8.children = items5;
        items3[1] = hasOwnProperty(View, obj8);
        obj4.children = items3;
        return hasOwnProperty(View, obj4);
      } else {
        const obj13 = { disabled, loading: isLoading, variant: null, text: null, onPress: null };
        let str2 = "primary";
        if (result) {
          str2 = "secondary";
        }
        obj13.variant = str2;
        const intl2 = util.intl;
        const tmp3Result2 = _modDef2553;
        obj13.text = intl2.string(result ? tmp3Result2.TZsu1U : tmp3Result2.gSxlHf);
        obj13.onPress = function onPress() {
          if (c0) {
            closure_2();
          } else {
            _undefined();
          }
        };
        React4(components_Button_Button.Button, obj13);
      }
      const obj10 = {
        variant: "heading-md/semibold",
        color: useGuildPowerupColorConfigDefault(result).textColor,
        children: powerup.title,
      };
    };
let ReactCompilerGating = ReactCompilerGating_mod;
let obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      const cResult = guildId(576).c(26);
      guildId = guildId.guildId;
      ({ listing, onDismiss } = guildId);
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const tmp6 = usePowerupGroupConfigDefault(guildId, listing);
      importDefault = tmp6;
      if (null == tmp6) {
        return null;
      } else {
        if (cResult[0] !== bottom) {
          const obj2 = { paddingBottom: bottom };
          cResult[0] = bottom;
          cResult[1] = obj2;
          let tmp7 = obj2;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp6.description) {
          if (cResult[3] === tmp6.title) {
            let tmp8 = cResult[4];
          }
          if (cResult[5] === tmp6.disabledReason) {
            if (cResult[6] === tmp4.disabledReasonContainer) {
              let tmp12 = cResult[7];
            }
            if (cResult[8] === tmp6.forceStaticImages) {
              if (cResult[9] === guildId) {
                if (cResult[10] === listing.powerups) {
                  if (cResult[15] === tmp4.cardsContainer) {
                    if (cResult[16] === tmp15) {
                      let tmp19 = cResult[17];
                    }
                    if (cResult[18] === tmp7) {
                      if (cResult[19] === tmp8) {
                        if (cResult[20] === tmp12) {
                          if (cResult[21] === tmp19) {
                            let tmp22 = cResult[22];
                          }
                          if (cResult[23] === onDismiss) {
                            if (cResult[24] === tmp22) {
                              let tmp26 = cResult[25];
                            }
                            return tmp26;
                          }
                          class P {
                            constructor(arg0) {
                              obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                              return jsx(f60575, obj, guildId.skuId);
                            }
                          }
                          tmp28[2] = onDismiss;
                          tmp28[3] = tmp22;
                          const tmp29 = closure_4(tmp(6652).BottomSheet, tmp28);
                          cResult[23] = onDismiss;
                          cResult[24] = tmp22;
                          cResult[25] = tmp29;
                          tmp26 = tmp29;
                        }
                      }
                    }
                    class P {
                      constructor(arg0) {
                        obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                        return jsx(f60575, obj, guildId.skuId);
                      }
                    }
                    tmp24[0] = tmp7;
                    const items = [tmp8, tmp12, tmp19];
                    tmp24[1] = items;
                    const tmp25 = closure_5(tmp(6119).BottomSheetScrollView, tmp24);
                    cResult[18] = tmp7;
                    cResult[19] = tmp8;
                    cResult[20] = tmp12;
                    cResult[21] = tmp19;
                    cResult[22] = tmp25;
                    tmp22 = tmp25;
                  }
                  class P {
                    constructor(arg0) {
                      obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                      return jsx(f60575, obj, guildId.skuId);
                    }
                  }
                  const obj3 = { style: tmp14, children: cResult[11] };
                  const tmp21 = closure_4(View, obj3);
                  cResult[15] = tmp4.cardsContainer;
                  cResult[16] = cResult[11];
                  cResult[17] = tmp21;
                  tmp19 = tmp21;
                }
              }
            }
            if (cResult[12] === tmp6.forceStaticImages) {
              if (cResult[13] === guildId) {
                let tmp16 = cResult[14];
              }
              const powerups = listing.powerups;
              const mapped = powerups.map(tmp16);
              class P {
                constructor(arg0) {
                  obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                  return jsx(f60575, obj, guildId.skuId);
                }
              }
              cResult[8] = tmp6;
              cResult[9] = guildId;
              listing = listing.powerups;
              cResult[10] = listing;
              cResult[11] = mapped;
            }
            class P {
              constructor(arg0) {
                obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                return jsx(f60575, obj, guildId.skuId);
              }
            }
            cResult[12] = tmp6.forceStaticImages;
            cResult[13] = guildId;
            cResult[14] = P;
            tmp16 = P;
          }
          cResult[5] = tmp6.disabledReason;
          cResult[6] = tmp4.disabledReasonContainer;
          cResult[7] = null != tmp6.disabledReason;
          tmp12 = tmp13;
        }
        ({ title: tmp10[0], description: tmp10[1] } = tmp6);
        const tmp11 = closure_4(GuildPowerupsSectionHeaderDefault, tmp10);
        cResult[2] = tmp6.description;
        cResult[3] = tmp6.title;
        cResult[4] = tmp11;
        tmp8 = tmp11;
      }
      const obj = guildId(576);
    }
  : (guildId) => {
      guildId = guildId.guildId;
      const listing = guildId.listing;
      const tmp = closure_7();
      const tmp4 = usePowerupGroupConfigDefault(guildId, listing);
      importDefault = tmp4;
      let tmp6Result2 = null;
      if (null != tmp4) {
        const obj = { scrollable: true, startExpanded: true, onDismiss: guildId.onDismiss, children: null };
        const obj2 = { contentContainerStyle: null, children: null };
        const obj3 = { paddingBottom: useSafeAreaInsetsDefault().bottom };
        obj2.contentContainerStyle = obj3;
        ({ title: obj4.title, description: obj4.description } = tmp4);
        const items = [closure_4(tmp2(12226), { title: null, description: null }), ,];
        let tmp6Result = null != tmp4.disabledReason;
        if (tmp6Result) {
          const obj6 = { style: tmp.disabledReasonContainer, children: null };
          const obj7 = { text: tmp4.disabledReason };
          obj6.children = closure_4(tmp2(12219), obj7);
          tmp6Result = closure_4(View, obj6);
        }
        items[1] = tmp6Result;
        const obj13 = { style: tmp.cardsContainer, children: null };
        const powerups = listing.powerups;
        obj13.children = powerups.map((powerup) =>
          React4(closure_8, { guildId, powerup, forceStaticImage: forceStaticImages.forceStaticImages }, powerup.skuId),
        );
        items[2] = closure_4(View, obj13);
        obj2.children = items;
        obj.children = closure_5(guildId(6119).BottomSheetScrollView, obj2);
        tmp6Result2 = closure_4(guildId(6652).BottomSheet, obj);
        const obj5 = { title: null, description: null };
      }
      return tmp6Result2;
    };
