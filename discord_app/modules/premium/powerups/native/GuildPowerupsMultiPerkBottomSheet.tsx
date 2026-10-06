// discord_app/modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef683 from "../../../../../_runtime/metro/00683__.js";
import intl3 from "../../../../intl/index.native.tsx";
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
import GuildPowerupsDisabledWarningDefault from "GuildPowerupsDisabledWarning.tsx";
import useGuildPowerupColorConfigDefault from "hooks/useGuildPowerupColorConfig.tsx";
import usePowerupGroupConfigDefault from "hooks/usePowerupGroupConfig.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const usePowerupActiveStatusDefault = usePowerupActiveStatus;
let BottomSheet, importDefault;

let closure_4;
let hasOwnProperty;
let obj2;
let obj3;
let tmp5;
const GuildPowerupsSectionHeaderDefault = tmp5(12226);
const View = react_native.View;
({ jsx: closure_4, jsxs: hasOwnProperty } = Fragment);
let createStyles = createStyles_mod;
let closure_6 = createStyles.createStyles((arg0) => {
  let alphaResult;
  let alphaResult1;
  let alphaResult2;
  let alphaResult3;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let rect;
  const obj = {
    container: { gap: nativeDefault.space.PX_8 },
    cardsContainer: { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 },
    titleContainer: { flexDirection: "column", gap: 4 },
    bodyContainer: { justifyContent: "space-between", alignItems: "center", flexDirection: "row" },
    imageContainer: obj4,
    imageContainerActive: obj5,
    imageContainerExpiring: obj6,
    imageContainerRemoving: obj7,
    image: { width: "75%", height: 180, resizeMode: "contain" },
    disabled: { opacity: 0.5 },
    badge: rect,
  };
  ({ gap: nativeDefault.space.PX_8 });
  ({ gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 });
  let str = "#ffffff";
  obj4 = {
    borderRadius: nativeDefault.radii.md,
    borderWidth: 1,
    borderColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
    borderStyle: "solid",
    backgroundColor: alphaResult.hex(),
  };
  const tmp3 = _modDef683;
  if (arg0) {
    str = "#000000";
  }
  const tmp3Result = tmp3(str);
  alphaResult = tmp3Result.alpha(0.04);
  obj5 = { borderColor: alphaResult1.hex() };
  const tmpResult = _modDef683;
  const tmpResultResult = tmpResult(nativeDefault.unsafe_rawColors.GREEN_360);
  alphaResult1 = tmpResultResult.alpha(0.35);
  obj6 = { borderColor: alphaResult2.hex() };
  const tmpResult3 = _modDef683;
  const tmpResult1Result = tmpResult3(nativeDefault.unsafe_rawColors.YELLOW_300);
  alphaResult2 = tmpResult1Result.alpha(0.35);
  obj7 = { borderColor: alphaResult3.hex() };
  const tmpResult4 = _modDef683;
  const tmpResult2Result = tmpResult4(nativeDefault.unsafe_rawColors.YELLOW_300);
  alphaResult3 = tmpResult2Result.alpha(0.35);
  rect = { position: "absolute", top: nativeDefault.space.PX_8, right: nativeDefault.space.PX_8 };
  return obj;
});
createStyles = createStyles_mod;
let obj = { cardsContainer: obj2, disabledReasonContainer: obj3 };
obj2 = { gap: nativeDefault.space.PX_24, marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { marginHorizontal: nativeDefault.space.PX_16, marginBottom: nativeDefault.space.PX_16 };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let forceStaticImage;
      let guildId;
      let intl;
      let isNewPerk;
      let items;
      let items1;
      let items2;
      let items3;
      let powerup;
      let str5;
      let string;
      let tmp13;
      let tmp4Result;
      let tmp6;
      const obj = react;
      const cResult = obj.c(48);
      ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
      const tmp5 = useThemeDefault();
      if (cResult[0] !== tmp5) {
        const tmpResult = themes;
        const isThemeLightResult = tmpResult.isThemeLight(tmp5);
        cResult[0] = tmp5;
        cResult[1] = isThemeLightResult;
        tmp6 = isThemeLightResult;
      } else {
        tmp6 = cResult[1];
      }
      const tmp8 = closure_6(tmp6);
      const tmp9 = useHasAllocateBoostPermissionDefault(guildId);
      const tmp10 = usePowerupActiveStatusDefault(guildId, powerup);
      const tmp11 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
      const tmpResult3 = useCalculatePowerupCardStatus;
      const calculatePowerupCardStatus = tmpResult3.useCalculatePowerupCardStatus(powerup, tmp10, tmp11);
      if (cResult[2] !== tmp10) {
        const tmpResult4 = usePowerupActiveStatus;
        const result = tmpResult4.isPowerupActiveStatusActive(tmp10);
        cResult[2] = tmp10;
        cResult[3] = result;
        tmp13 = result;
      } else {
        tmp13 = cResult[3];
      }
      let closure_0 = tmp13;
      const textColor = useGuildPowerupColorConfigDefault(tmp13).textColor;
      let str = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
      const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, tmp13).disabled;
      const tmp15 = useGuildPowerupOnActivateDefault(guildId, powerup);
      const onActivate = tmp15.onActivate;
      const isLoading = tmp15.isLoading;
      const tmp16 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      let closure_2 = tmp16;
      if (cResult[4] === tmp8.container) {
        let tmp18;
        if (cResult[5] === (disabled && tmp9 && tmp8.disabled)) {
          tmp18 = cResult[6];
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
          if (cResult[8] === ("active" === type && tmp8.imageContainerActive)) {
            if (cResult[9] === ("expiring" === type1 && tmp8.imageContainerExpiring)) {
              let tmp26;
              if (cResult[10] === ("removing" === type2 && tmp8.imageContainerRemoving)) {
                tmp26 = cResult[11];
              }
              if (str == null) {
                str = "";
              }
              if (cResult[12] === tmp8.image) {
                if (cResult[13] === str) {
                  let tmp28;
                  if (cResult[14] === !forceStaticImage) {
                    tmp28 = cResult[15];
                  }
                  if (cResult[16] === isNewPerk) {
                    let tmp31;
                    if (cResult[17] === tmp8.badge) {
                      tmp31 = cResult[18];
                    }
                    if (cResult[19] === tmp28) {
                      if (cResult[20] === tmp31) {
                        let tmp34;
                        if (cResult[21] === tmp26) {
                          tmp34 = cResult[22];
                        }
                        if (cResult[23] === powerup.title) {
                          let tmp38;
                          let tmp43;
                          if (cResult[24] === textColor) {
                            tmp38 = cResult[25];
                          }
                          if (cResult[26] === powerup.cost) {
                            let tmp41;
                            if (cResult[27] === calculatePowerupCardStatus) {
                              tmp41 = cResult[28];
                            }
                            if (cResult[29] === tmp8.titleContainer) {
                              if (cResult[30] === tmp38) {
                                let tmp45;
                                if (cResult[31] === tmp41) {
                                  tmp45 = cResult[32];
                                }
                                if (cResult[33] === tmp9) {
                                  if (cResult[34] === disabled) {
                                    if (cResult[35] === tmp13) {
                                      if (cResult[36] === isLoading) {
                                        if (cResult[37] === onActivate) {
                                          let tmp49;
                                          if (cResult[38] === tmp16) {
                                            tmp49 = cResult[39];
                                          }
                                          if (cResult[40] === tmp8.bodyContainer) {
                                            if (cResult[41] === tmp45) {
                                              let tmp53;
                                              if (cResult[42] === tmp49) {
                                                tmp53 = cResult[43];
                                              }
                                              if (cResult[44] === tmp34) {
                                                if (cResult[45] === tmp53) {
                                                  let tmp57;
                                                  if (cResult[46] === tmp18) {
                                                    tmp57 = cResult[47];
                                                  }
                                                  return tmp57;
                                                }
                                              }
                                              const obj2 = { style: tmp18, children: items };
                                              items = [tmp34, tmp53];
                                              const tmp60 = hasOwnProperty(View, obj2);
                                              cResult[44] = tmp34;
                                              cResult[45] = tmp53;
                                              cResult[46] = tmp18;
                                              cResult[47] = tmp60;
                                              tmp57 = tmp60;
                                            }
                                          }
                                          const obj3 = { style: tmp8.bodyContainer, children: items1 };
                                          items1 = [tmp45, tmp49];
                                          const tmp56 = hasOwnProperty(View, obj3);
                                          cResult[40] = tmp8.bodyContainer;
                                          cResult[41] = tmp45;
                                          cResult[42] = tmp49;
                                          cResult[43] = tmp56;
                                          tmp53 = tmp56;
                                        }
                                      }
                                    }
                                  }
                                }
                                let tmp51Result = tmp9;
                                if (tmp51Result) {
                                  const obj4 = {
                                    disabled,
                                    loading: isLoading,
                                    variant: str5,
                                    text: string(tmp13 ? tmp4Result.TZsu1U : tmp4Result.gSxlHf),
                                    onPress() {
                                      if (closure_0) {
                                        closure_2();
                                      } else {
                                        onActivate();
                                      }
                                    },
                                  };
                                  str5 = "primary";
                                  const Button = components_Button_Button.Button;
                                  if (tmp13) {
                                    str5 = "secondary";
                                  }
                                  const intl2 = intl3.intl;
                                  string = intl2.string;
                                  tmp4Result = _modDef2553;
                                  tmp51Result = React3(Button, obj4);
                                }
                                cResult[33] = tmp9;
                                cResult[34] = disabled;
                                cResult[35] = tmp13;
                                cResult[36] = isLoading;
                                cResult[37] = onActivate;
                                cResult[38] = tmp16;
                                cResult[39] = tmp51Result;
                                tmp49 = tmp51Result;
                              }
                            }
                            const obj5 = { style: tmp8.titleContainer, children: items2 };
                            items2 = [tmp38, tmp41];
                            const tmp48 = hasOwnProperty(View, obj5);
                            cResult[29] = tmp8.titleContainer;
                            cResult[30] = tmp38;
                            cResult[31] = tmp41;
                            cResult[32] = tmp48;
                            tmp45 = tmp48;
                          }
                          if (null != calculatePowerupCardStatus) {
                            const obj6 = { status: calculatePowerupCardStatus };
                            tmp43 = React3(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj6);
                          } else {
                            const obj7 = { cost: powerup.cost };
                            tmp43 = React3(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj7);
                          }
                          cResult[26] = powerup.cost;
                          cResult[27] = calculatePowerupCardStatus;
                          cResult[28] = tmp43;
                          tmp41 = tmp43;
                        }
                        const obj8 = { variant: "heading-md/semibold", color: textColor, children: powerup.title };
                        const tmp40 = React3(Text_Text.Text, obj8);
                        cResult[23] = powerup.title;
                        cResult[24] = textColor;
                        cResult[25] = tmp40;
                        tmp38 = tmp40;
                      }
                    }
                    const obj9 = { style: tmp26, children: items3 };
                    items3 = [tmp28, tmp31];
                    const tmp37 = hasOwnProperty(View, obj9);
                    cResult[19] = tmp28;
                    cResult[20] = tmp31;
                    cResult[21] = tmp26;
                    cResult[22] = tmp37;
                    tmp34 = tmp37;
                  }
                  let tmp32 = isNewPerk;
                  if (tmp32) {
                    const obj10 = { text: intl.string(intl3.t.y2b7CA), style: tmp8.badge };
                    const TextBadge = native.TextBadge;
                    intl = intl3.intl;
                    tmp32 = React3(TextBadge, obj10);
                  }
                  cResult[16] = isNewPerk;
                  cResult[17] = tmp8.badge;
                  cResult[18] = tmp32;
                  tmp31 = tmp32;
                }
              }
              const obj11 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp8.image };
              const tmp30 = React3(GuildPowerupsImageDefault, obj11);
              cResult[12] = tmp8.image;
              cResult[13] = str;
              cResult[14] = !forceStaticImage;
              cResult[15] = tmp30;
              tmp28 = tmp30;
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
        tmp26 = items4;
      }
      const items5 = [tmp8.container, disabled && tmp9 && tmp8.disabled];
      cResult[4] = tmp8.container;
      cResult[5] = disabled && tmp9 && tmp8.disabled;
      cResult[6] = items5;
      tmp18 = items5;
    }
  : (arg0) => {
      let c1;
      let forceStaticImage;
      let guildId;
      let intl;
      let isLoading;
      let isNewPerk;
      let items2;
      let items3;
      let items4;
      let items5;
      let powerup;
      let str2;
      let string;
      let tmp19Result;
      let tmp3Result2;
      ({ guildId, powerup, isNewPerk, forceStaticImage } = arg0);
      c1 = undefined;
      const obj = themes;
      const tmp4 = closure_6(obj.isThemeLight(useThemeDefault()));
      let tmp19Result2 = useHasAllocateBoostPermissionDefault(guildId);
      const tmp6 = usePowerupActiveStatusDefault(guildId, powerup);
      const tmp7 = useGuildPowerupRollbackEnabledDefault(guildId, powerup, "GuildPowerupsMultiPerkBottomSheet");
      const obj2 = useCalculatePowerupCardStatus;
      const calculatePowerupCardStatus = obj2.useCalculatePowerupCardStatus(powerup, tmp6, tmp7);
      const obj3 = usePowerupActiveStatus;
      const result = obj3.isPowerupActiveStatusActive(tmp6);
      let c0 = result;
      const textColor = useGuildPowerupColorConfigDefault(result).textColor;
      const tmp10 = useGetGuildPowerupBannerImageDefault(powerup, true, forceStaticImage);
      const disabled = useCanGuildPowerupBeToggledDefault(guildId, powerup, result).disabled;
      ({ onActivate: c1, isLoading } = useGuildPowerupOnActivateDefault(guildId, powerup));
      useGuildPowerupOnActivateDefault(guildId, powerup);
      let closure_2 = useGuildPowerupOnShowDeactivateDefault(guildId, powerup);
      const items = [tmp4.container];
      const obj4 = { style: items, children: items3 };
      const tmp14 = disabled && tmp19Result2 && tmp4.disabled;
      items[1] = tmp14;
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
      const obj5 = { style: items1, children: items2 };
      const tmp18 = "removing" === type2 && tmp4.imageContainerRemoving;
      items1[3] = tmp18;
      let str = tmp10;
      const tmp3Result = GuildPowerupsImageDefault;
      if (tmp10 == null) {
        str = "";
      }
      items2 = [,];
      const obj6 = { imageUrl: str, isAnimated: !forceStaticImage, style: tmp4.image };
      items2[0] = React3(tmp3Result, obj6);
      if (isNewPerk) {
        const obj7 = { text: intl.string(intl3.t.y2b7CA), style: tmp4.badge };
        const TextBadge = native.TextBadge;
        intl = intl3.intl;
        isNewPerk = React3(TextBadge, obj7);
      }
      items2[1] = isNewPerk;
      items3 = [hasOwnProperty(View, obj5)];
      const obj9 = { style: tmp4.titleContainer, children: items4 };
      items4 = [,];
      const obj10 = { variant: "heading-md/semibold", color: textColor, children: powerup.title };
      const obj8 = { style: tmp4.bodyContainer, children: items5 };
      items4[0] = React3(Text_Text.Text, obj10);
      if (null != calculatePowerupCardStatus) {
        const obj11 = { status: calculatePowerupCardStatus };
        tmp19Result = React3(GuildPowerupsCardFooter.GuildPowerupCardFooterStatus, obj11);
      } else {
        const obj12 = { cost: powerup.cost };
        tmp19Result = React3(GuildPowerupsCardFooter.GuildPowerupCardFooterCost, obj12);
      }
      items4[1] = tmp19Result;
      items5 = [hasOwnProperty(View, obj9)];
      if (tmp19Result2) {
        const obj13 = {
          disabled,
          loading: isLoading,
          variant: str2,
          text: string(result ? tmp3Result2.TZsu1U : tmp3Result2.gSxlHf),
          onPress() {
            if (c0) {
              closure_2();
            } else {
              _undefined();
            }
          },
        };
        str2 = "primary";
        const Button = components_Button_Button.Button;
        if (result) {
          str2 = "secondary";
        }
        const intl2 = intl3.intl;
        string = intl2.string;
        tmp3Result2 = _modDef2553;
        tmp19Result2 = React3(Button, obj13);
      }
      items5[1] = tmp19Result2;
      items3[1] = hasOwnProperty(View, obj8);
      return hasOwnProperty(View, obj4);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let forceStaticImages;
      let listing;
      let onDismiss;
      let obj = guildId(576);
      const cResult = obj.c(26);
      guildId = guildId.guildId;
      ({ listing, onDismiss } = guildId);
      const tmp4 = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const tmp6 = usePowerupGroupConfigDefault(guildId, listing);
      importDefault = tmp6;
      if (null == tmp6) {
        return null;
      } else {
        let tmp7;
        if (cResult[0] !== bottom) {
          const obj2 = { paddingBottom: bottom };
          cResult[0] = bottom;
          cResult[1] = obj2;
          tmp7 = obj2;
        } else {
          tmp7 = cResult[1];
        }
        if (cResult[2] === tmp6.description) {
          let tmp8;
          if (cResult[3] === tmp6.title) {
            tmp8 = cResult[4];
          }
          if (cResult[5] === tmp6.disabledReason) {
            let tmp12;
            let tmp15;
            if (cResult[6] === tmp4.disabledReasonContainer) {
              tmp12 = cResult[7];
            }
            if (cResult[8] === tmp6.forceStaticImages) {
              if (cResult[9] === guildId) {
                if (cResult[10] === listing.powerups) {
                  tmp15 = cResult[11];
                }
                if (cResult[15] === tmp4.cardsContainer) {
                  let tmp18;
                  if (cResult[16] === tmp15) {
                    tmp18 = cResult[17];
                  }
                  if (cResult[18] === tmp7) {
                    if (cResult[19] === tmp8) {
                      if (cResult[20] === tmp12) {
                        let tmp21;
                        if (cResult[21] === tmp18) {
                          tmp21 = cResult[22];
                        }
                        if (cResult[23] === onDismiss) {
                          let tmp25;
                          if (cResult[24] === tmp21) {
                            tmp25 = cResult[25];
                          }
                          return tmp25;
                        }
                        class P {
                          constructor(arg0) {
                            obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                            return jsx(f60575, obj, guildId.skuId);
                          }
                        }
                        tmp27[2] = onDismiss;
                        tmp27[3] = tmp21;
                        const tmp28 = closure_4(guildId(6652).BottomSheet, tmp27);
                        cResult[23] = onDismiss;
                        cResult[24] = tmp21;
                        cResult[25] = tmp28;
                        tmp25 = tmp28;
                      }
                    }
                  }
                  class P {
                    constructor(arg0) {
                      obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                      return jsx(f60575, obj, guildId.skuId);
                    }
                  }
                  tmp23[0] = tmp7;
                  const items = [tmp8, tmp12, tmp18];
                  tmp23[1] = items;
                  const tmp24 = closure_5(guildId(6119).BottomSheetScrollView, tmp23);
                  cResult[18] = tmp7;
                  cResult[19] = tmp8;
                  cResult[20] = tmp12;
                  cResult[21] = tmp18;
                  cResult[22] = tmp24;
                  tmp21 = tmp24;
                }
                class P {
                  constructor(arg0) {
                    obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                    return jsx(f60575, obj, guildId.skuId);
                  }
                }
                const obj3 = { style: tmp14, children: tmp15 };
                const tmp20 = closure_4(View, obj3);
                cResult[15] = tmp4.cardsContainer;
                cResult[16] = tmp15;
                cResult[17] = tmp20;
                tmp18 = tmp20;
              }
            }
            if (cResult[12] === tmp6.forceStaticImages) {
              let tmp16;
              if (cResult[13] === guildId) {
                tmp16 = cResult[14];
              }
              const powerups = listing.powerups;
              const mapped = powerups.map(tmp16);
              class P {
                constructor(arg0) {
                  obj = { guildId, powerup: guildId, forceStaticImage: closure_1.forceStaticImages };
                  return jsx(f60575, obj, guildId.skuId);
                }
              }
              cResult[8] = tmp6.forceStaticImages;
              cResult[9] = guildId;
              cResult[10] = listing.powerups;
              cResult[11] = mapped;
              tmp15 = mapped;
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
    }
  : (guildId) => {
      let BottomSheetScrollView;
      let forceStaticImages;
      let items;
      let obj2;
      let obj3;
      let obj7;
      let powerups;
      guildId = guildId.guildId;
      const listing = guildId.listing;
      const onDismiss = guildId.onDismiss;
      const tmp = closure_7();
      const bottom = useSafeAreaInsetsDefault().bottom;
      const tmp4 = usePowerupGroupConfigDefault(guildId, listing);
      importDefault = tmp4;
      let tmp6Result2 = null;
      if (null != tmp4) {
        let obj = {
          scrollable: true,
          startExpanded: true,
          onDismiss,
          children: closure_5(BottomSheetScrollView, obj2),
        };
        BottomSheet = guildId(6652).BottomSheet;
        obj2 = { contentContainerStyle: obj3, children: items };
        obj3 = { paddingBottom: bottom };
        BottomSheetScrollView = guildId(6119).BottomSheetScrollView;
        const obj5 = { title: null, description: null };
        ({ title: obj4.title, description: obj4.description } = tmp4);
        items = [closure_4(GuildPowerupsSectionHeaderDefault, obj5), ,];
        let tmp6Result = null != tmp4.disabledReason;
        if (tmp6Result) {
          const obj6 = {
            style: tmp.disabledReasonContainer,
            children: closure_4(GuildPowerupsDisabledWarningDefault, obj7),
          };
          obj7 = { text: tmp4.disabledReason };
          tmp6Result = closure_4(View, obj6);
        }
        items[1] = tmp6Result;
        const obj13 = {
          style: tmp.cardsContainer,
          children: powerups.map((powerup) => {
            const obj = { guildId, powerup, forceStaticImage: forceStaticImages.forceStaticImages };
            return React3(closure_8, obj, powerup.skuId);
          }),
        };
        powerups = listing.powerups;
        items[2] = closure_4(View, obj13);
        tmp6Result2 = closure_4(BottomSheet, obj);
      }
      return tmp6Result2;
    };
let result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsMultiPerkBottomSheet.tsx");

export default tmp4;
