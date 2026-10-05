// discord_app/modules/premium/native/PremiumPerkCard.tsx
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl37 from "../../../intl/index.native.tsx";
import PremiumConstants from "../PremiumConstants.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import AssetRegistryDefault from "../../../../_runtime/13206_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../../_runtime/13207_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../../_runtime/13208_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../../_runtime/13209_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../../_runtime/13210_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../../_runtime/13211_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../../_runtime/13212_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../../_runtime/13213_AssetRegistry.js";
import AssetRegistryDefault9 from "../../../../_runtime/13214_AssetRegistry.js";
import AssetRegistryDefault10 from "../../../../_runtime/13215_AssetRegistry.js";
import AssetRegistryDefault11 from "../../../../_runtime/13216_AssetRegistry.js";
import AssetRegistryDefault12 from "../../../../_runtime/13217_AssetRegistry.js";
import AssetRegistryDefault13 from "../../../../_runtime/13218_AssetRegistry.js";
import AssetRegistryDefault14 from "../../../../_runtime/13219_AssetRegistry.js";
import AssetRegistryDefault15 from "../../../../_runtime/13220_AssetRegistry.js";
import AssetRegistryDefault16 from "../../../../_runtime/13221_AssetRegistry.js";
import _modDef13222 from "../../../../discord_assets/assets/images/perks/xbox_game_pass.jpg.js";
import PillTextDefault from "components/PillText.tsx";
import react from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import Constants from "../../../Constants.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let c10;
let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
({ View: closure_4, ScrollView: hasOwnProperty } = react_native);
const PremiumTypes = PremiumConstants.PremiumTypes;
({ HelpdeskArticles: metroImportDefault, UserSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
const PerkCardVariant = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({
  [PerkCardVariant.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 },
  [PerkCardVariant.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 },
});
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const obj = useFontScale;
      return obj.useFontScale() > 1 ? frozen[arg0].scaledFontHeight : frozen[arg0].height;
    }
  : (arg0) => {
      const obj = useFontScale;
      return obj.useFontScale() > 1 ? frozen[arg0].scaledFontHeight : frozen[arg0].height;
    };
let closure_13 = tmp6;
let closure_14 = createStyles.createStyles((arg0) => {
  let obj2;
  let obj5;
  const obj = {
    container: obj2,
    headerComponent: {
      width: "100%",
      borderTopLeftRadius: nativeDefault.radii.sm,
      borderTopRightRadius: nativeDefault.radii.sm,
      overflow: "hidden",
    },
    image: { width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm },
    title: { marginTop: 16, marginHorizontal: 16 },
    description: obj5,
    button: { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 },
    imageContainer: { position: "relative", alignItems: "center", justifyContent: "center" },
    imageOverlayText: { color: nativeDefault.colors.WHITE, fontSize: 14 },
    imageOverlayTextContainer: {
      position: "absolute",
      bottom: "10%",
      borderRadius: nativeDefault.radii.round,
      backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
      paddingHorizontal: 12,
      paddingVertical: 4,
      justifyContent: "center",
      alignItems: "center",
    },
    pillTextContainer: { position: "absolute", width: "auto", top: -8, left: 10 },
  };
  obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    width: frozen[arg0].width,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  ({
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  });
  let num = 8;
  ({ width: "100%", borderTopLeftRadius: nativeDefault.radii.sm, borderTopRightRadius: nativeDefault.radii.sm });
  const tmp4 = obj;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  obj5 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp5 = arg0 === tmp4.NARROW && { height: "100%" };
  const merged1 = Object.assign(tmp5);
  ({ color: nativeDefault.colors.WHITE, fontSize: 14 });
  ({
    position: "absolute",
    bottom: "10%",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  });
  return obj;
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp7 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let bodyComponent;
      let buttonOnPress;
      let cta;
      let description;
      let headerComponent;
      let imageOverlayText;
      let imageOverlayText2;
      let imageOverlayTextContainer;
      let imageSrc;
      let imageStyle;
      let items;
      let items3;
      let obj11;
      let pillText;
      let style;
      let title;
      let titleStyle;
      let tmp10;
      let tmp39;
      let tmp4;
      let variant;
      const obj = react2;
      const cResult = obj.c(61);
      ({
        style,
        title,
        titleStyle,
        description,
        bodyComponent,
        headerComponent,
        imageSrc,
        imageStyle,
        buttonOnPress,
        cta,
        variant,
        imageOverlayText,
        pillText,
      } = arg0);
      if (cResult[0] !== cta) {
        let stringResult = cta;
        if (undefined === cta) {
          const intl = intl37.intl;
          stringResult = intl.string(intl37.t.jVcuVY);
        }
        cResult[0] = cta;
        cResult[1] = stringResult;
        tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (undefined === variant) {
        variant = obj.WIDE;
      }
      const tmp7 = closure_14(variant);
      const tmp9 = closure_13(obj.NARROW);
      const tmp8 = obj;
      if (null != imageSrc) {
        if (null != imageOverlayText) {
          if (cResult[2] === imageStyle) {
            let tmp21;
            if (cResult[3] === tmp7.image) {
              tmp21 = cResult[4];
            }
            if (cResult[5] === imageSrc) {
              let tmp22;
              let tmp26;
              if (cResult[6] === tmp21) {
                tmp22 = cResult[7];
              }
              ({ imageOverlayTextContainer, imageOverlayText: imageOverlayText2 } = tmp7);
              if (cResult[8] !== imageOverlayText) {
                const formatted = imageOverlayText.toUpperCase();
                cResult[8] = imageOverlayText;
                cResult[9] = formatted;
                tmp26 = formatted;
              } else {
                tmp26 = cResult[9];
              }
              if (cResult[10] === tmp7.imageOverlayText) {
                let tmp28;
                if (cResult[11] === tmp26) {
                  tmp28 = cResult[12];
                }
                if (cResult[13] === tmp7.imageOverlayTextContainer) {
                  let tmp31;
                  if (cResult[14] === tmp28) {
                    tmp31 = cResult[15];
                  }
                  if (cResult[16] === tmp7.imageContainer) {
                    if (cResult[17] === tmp31) {
                      let tmp35;
                      if (cResult[18] === tmp22) {
                        tmp35 = cResult[19];
                      }
                      tmp10 = tmp35;
                    }
                  }
                  const obj2 = { style: tmp20, children: items };
                  items = [tmp22, tmp31];
                  const tmp38 = authStore(React3, obj2);
                  cResult[16] = tmp7.imageContainer;
                  cResult[17] = tmp31;
                  cResult[18] = tmp22;
                  cResult[19] = tmp38;
                  tmp35 = tmp38;
                }
                const obj3 = { style: imageOverlayTextContainer, children: tmp28 };
                const tmp34 = React4(React3, obj3);
                cResult[13] = tmp7.imageOverlayTextContainer;
                cResult[14] = tmp28;
                cResult[15] = tmp34;
                tmp31 = tmp34;
              }
              const obj4 = { style: imageOverlayText2, variant: "text-md/bold", children: tmp26 };
              const tmp30 = React4(Text_Text.Text, obj4);
              cResult[10] = tmp7.imageOverlayText;
              cResult[11] = tmp26;
              cResult[12] = tmp30;
              tmp28 = tmp30;
            }
            const obj5 = { style: tmp21, source: imageSrc };
            const tmp25 = React4(FastImageDefault, obj5);
            cResult[5] = imageSrc;
            cResult[6] = tmp21;
            cResult[7] = tmp25;
            tmp22 = tmp25;
          }
          const items1 = [tmp7.image, imageStyle];
          cResult[2] = imageStyle;
          cResult[3] = tmp7.image;
          cResult[4] = items1;
          tmp21 = items1;
        } else {
          if (cResult[20] === imageStyle) {
            let tmp15;
            if (cResult[21] === tmp7.image) {
              tmp15 = cResult[22];
            }
            if (cResult[23] === imageSrc) {
              let tmp16;
              if (cResult[24] === tmp15) {
                tmp16 = cResult[25];
              }
              tmp10 = tmp16;
            }
            const obj6 = { style: tmp15, source: imageSrc };
            const tmp19 = React4(FastImageDefault, obj6);
            cResult[23] = imageSrc;
            cResult[24] = tmp15;
            cResult[25] = tmp19;
            tmp16 = tmp19;
          }
          const items2 = [tmp7.image, imageStyle];
          cResult[20] = imageStyle;
          cResult[21] = tmp7.image;
          cResult[22] = items2;
          tmp15 = items2;
        }
      } else {
        tmp10 = null;
        if (null != headerComponent) {
          if (cResult[26] === headerComponent) {
            let tmp11;
            if (cResult[27] === tmp7.headerComponent) {
              tmp11 = cResult[28];
            }
            tmp10 = tmp11;
          }
          const obj7 = { style: tmp7.headerComponent, children: headerComponent };
          const tmp14 = React4(React3, obj7);
          cResult[26] = headerComponent;
          cResult[27] = tmp7.headerComponent;
          cResult[28] = tmp14;
          tmp11 = tmp14;
        }
      }
      if (null != description) {
        let tmp40;
        if (cResult[29] !== description) {
          const obj8 = { variant: "text-sm/normal", children: description };
          const tmp42 = React4(Text_Text.Text, obj8);
          cResult[29] = description;
          cResult[30] = tmp42;
          tmp40 = tmp42;
        } else {
          tmp40 = cResult[30];
        }
        tmp39 = tmp40;
      } else {
        tmp39 = null;
        if (null != bodyComponent) {
          tmp39 = bodyComponent;
        }
      }
      if (cResult[31] === tmp9) {
        let tmp43;
        if (cResult[32] === variant) {
          tmp43 = cResult[33];
        }
        if (cResult[34] === style) {
          if (cResult[35] === tmp7.container) {
            let tmp45;
            if (cResult[36] === tmp43) {
              tmp45 = cResult[37];
            }
            if (cResult[38] === pillText) {
              let tmp46;
              if (cResult[39] === tmp7.pillTextContainer) {
                tmp46 = cResult[40];
              }
              if (cResult[41] === tmp7.title) {
                let tmp50;
                if (cResult[42] === titleStyle) {
                  tmp50 = cResult[43];
                }
                if (cResult[44] === tmp50) {
                  let tmp51;
                  if (cResult[45] === title) {
                    tmp51 = cResult[46];
                  }
                  if (cResult[47] === tmp39) {
                    let tmp54;
                    if (cResult[48] === tmp7.description) {
                      tmp54 = cResult[49];
                    }
                    if (cResult[50] === buttonOnPress) {
                      if (cResult[51] === tmp4) {
                        let tmp58;
                        if (cResult[52] === tmp7.button) {
                          tmp58 = cResult[53];
                        }
                        if (cResult[54] === tmp10) {
                          if (cResult[55] === tmp58) {
                            if (cResult[56] === tmp45) {
                              if (cResult[57] === tmp46) {
                                if (cResult[58] === tmp51) {
                                  let tmp62;
                                  if (cResult[59] === tmp54) {
                                    tmp62 = cResult[60];
                                  }
                                  return tmp62;
                                }
                              }
                            }
                          }
                        }
                        const obj9 = { style: tmp45, children: items3 };
                        items3 = [tmp46, tmp10, tmp51, tmp54, tmp58];
                        const tmp65 = authStore(React3, obj9);
                        cResult[54] = tmp10;
                        cResult[55] = tmp58;
                        cResult[56] = tmp45;
                        cResult[57] = tmp46;
                        cResult[58] = tmp51;
                        cResult[59] = tmp54;
                        cResult[60] = tmp65;
                        tmp62 = tmp65;
                      }
                    }
                    let tmp59 = null != buttonOnPress;
                    if (tmp59) {
                      const obj10 = { style: tmp7.button, children: React4(components_Button_Button.Button, obj11) };
                      obj11 = { size: "sm", variant: "secondary", text: tmp4, onPress: buttonOnPress };
                      tmp59 = React4(React3, obj10);
                    }
                    cResult[50] = buttonOnPress;
                    cResult[51] = tmp4;
                    cResult[52] = tmp7.button;
                    cResult[53] = tmp59;
                    tmp58 = tmp59;
                  }
                  const obj12 = { style: tmp7.description, children: tmp39 };
                  const tmp57 = React4(hasOwnProperty, obj12);
                  cResult[47] = tmp39;
                  cResult[48] = tmp7.description;
                  cResult[49] = tmp57;
                  tmp54 = tmp57;
                }
                const obj13 = {
                  style: tmp50,
                  variant: "heading-lg/extrabold",
                  accessibilityRole: "header",
                  children: title,
                };
                const tmp53 = React4(Text_Text.Text, obj13);
                cResult[44] = tmp50;
                cResult[45] = title;
                cResult[46] = tmp53;
                tmp51 = tmp53;
              }
              const items4 = [tmp7.title, titleStyle];
              cResult[41] = tmp7.title;
              cResult[42] = titleStyle;
              cResult[43] = items4;
              tmp50 = items4;
            }
            let tmp47 = null != pillText;
            if (tmp47) {
              const obj14 = { pillText, style: tmp7.pillTextContainer };
              tmp47 = React4(PillTextDefault, obj14);
            }
            cResult[38] = pillText;
            cResult[39] = tmp7.pillTextContainer;
            cResult[40] = tmp47;
            tmp46 = tmp47;
          }
        }
        const items5 = [tmp7.container, tmp43, style];
        cResult[34] = style;
        cResult[35] = tmp7.container;
        cResult[36] = tmp43;
        cResult[37] = items5;
        tmp45 = items5;
      }
      let tmp44 = variant === tmp8.NARROW;
      if (tmp44) {
        tmp44 = { height: tmp9 };
        const obj15 = { height: tmp9 };
      }
      cResult[31] = tmp9;
      cResult[32] = variant;
      cResult[33] = tmp44;
      tmp43 = tmp44;
    }
  : (variant) => {
      let Text;
      let bodyComponent;
      let buttonOnPress;
      let cta;
      let description;
      let headerComponent;
      let imageOverlayText;
      let imageSrc;
      let imageStyle;
      let items;
      let items1;
      let items2;
      let items4;
      let items5;
      let obj;
      let obj14;
      let obj5;
      let pillText;
      let style;
      let title;
      let titleStyle;
      let tmp20;
      let tmp7;
      ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
      ({ style, title, titleStyle } = variant);
      if (cta === undefined) {
        const intl = intl37.intl;
        cta = intl.string(intl37.t.jVcuVY);
      }
      let WIDE = variant.variant;
      if (WIDE === undefined) {
        WIDE = obj.WIDE;
      }
      ({ imageOverlayText, pillText } = variant);
      const tmp4 = closure_14(WIDE);
      const tmp5 = obj;
      const tmp6 = closure_13(obj.NARROW);
      if (null != imageSrc) {
        let tmp13;
        if (null != imageOverlayText) {
          const obj3 = { style: items, source: imageSrc };
          items = [tmp4.image, imageStyle];
          const obj2 = { style: tmp4.imageContainer, children: items1 };
          items1 = [React4(FastImageDefault, obj3)];
          const obj4 = { style: tmp4.imageOverlayTextContainer, children: React4(Text, obj5) };
          obj5 = { style: tmp4.imageOverlayText, variant: "text-md/bold", children: imageOverlayText.toUpperCase() };
          Text = Text_Text.Text;
          items1[1] = React4(React3, obj4);
          tmp13 = authStore(React3, obj2);
        } else {
          const obj6 = { style: items2, source: imageSrc };
          items2 = [tmp4.image, imageStyle];
          tmp13 = React4(FastImageDefault, obj6);
        }
        tmp7 = tmp13;
      } else {
        tmp7 = null;
        if (null != headerComponent) {
          obj = { style: tmp4.headerComponent, children: headerComponent };
          tmp7 = React4(React3, obj);
        }
      }
      if (null != description) {
        const obj7 = { variant: "text-sm/normal", children: description };
        tmp20 = React4(Text_Text.Text, obj7);
      } else {
        tmp20 = null;
        if (null != bodyComponent) {
          tmp20 = bodyComponent;
        }
      }
      const items3 = [tmp4.container, ,];
      let tmp26 = WIDE === tmp5.NARROW;
      if (tmp26) {
        tmp26 = { height: tmp6 };
        const obj8 = { height: tmp6 };
      }
      const obj9 = { style: items3, children: items4 };
      items3[1] = tmp26;
      items3[2] = style;
      let tmp27 = null != pillText;
      if (tmp27) {
        const obj10 = { pillText, style: tmp4.pillTextContainer };
        tmp27 = React4(PillTextDefault, obj10);
      }
      items4 = [tmp27, tmp7, , ,];
      const obj11 = { style: items5, variant: "heading-lg/extrabold", accessibilityRole: "header", children: title };
      items5 = [tmp4.title, titleStyle];
      items4[2] = React4(Text_Text.Text, obj11);
      const obj12 = { style: tmp4.description, children: tmp20 };
      items4[3] = React4(hasOwnProperty, obj12);
      let tmp31Result = null != buttonOnPress;
      if (tmp31Result) {
        const obj13 = { style: tmp4.button, children: React4(components_Button_Button.Button, obj14) };
        obj14 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
        tmp31Result = React4(React3, obj13);
      }
      items4[4] = tmp31Result;
      return authStore(React3, obj9);
    };
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default tmp7;
export const PerkCardTypes = {
  CUSTOM_PROFILE: "customProfile",
  CLIENT_THEMES: "clientThemes",
  SERVER_BOOSTS: "serverBoosts",
  GREYED_SERVER_BOOSTS: "greyServerBoosts",
  CUSTOM_APP_ICONS: "customAppIcons",
  EMOJI: "emoji",
  CUSTOM_SOUNDS: "customSounds",
  STICKER: "sticker",
  EARLY_ACCESS: "earlyAccess",
  MEMBER_PRICING: "memberPricing",
  LARGE_UPLOADS: "largeUploads",
  HD_VIDEO: "hdVideo",
  SUPER_REACTIONS: "superReactions",
  ENTRACE_SOUNDS: "entranceSounds",
  BADGE: "badge",
  GREYED_BADGE: "greyBadge",
  XBOX_GAME_PASS: "xboxGamePass",
};
export { PerkCardVariant };
export const PERK_CARD_SIZES = frozen;
export const usePerkCardHeight = tmp6;
export const usePremiumPerkCard = function usePremiumPerkCard() {
  let Text;
  let format;
  let intl;
  let intl10;
  let intl11;
  let intl12;
  let intl13;
  let intl14;
  let intl15;
  let intl16;
  let intl17;
  let intl18;
  let intl19;
  let intl2;
  let intl20;
  let intl21;
  let intl22;
  let intl23;
  let intl24;
  let intl25;
  let intl26;
  let intl27;
  let intl28;
  let intl29;
  let intl3;
  let intl30;
  let intl31;
  let intl32;
  let intl33;
  let intl34;
  let intl35;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let obj10;
  let obj11;
  let obj12;
  let obj13;
  let obj14;
  let obj15;
  let obj16;
  let obj17;
  let obj18;
  let obj19;
  let obj20;
  let obj22;
  let obj23;
  let obj24;
  let obj4;
  let obj5;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let prop;
  let subscriptionPlansLoaded;
  let obj = subscriptionPlansLoaded(13205);
  subscriptionPlansLoaded = obj.useSubscriptionPlansLoaded();
  let obj2 = subscriptionPlansLoaded(4528);
  const maxFileSizeForPremiumType = obj2.getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  const callback = react.useCallback(() => {
    const obj2 = {
      screen: constants.COLLECTIBLES_SHOP,
      params: { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD },
    };
    const obj = subscriptionPlansLoaded(dependencyMap[9]);
    ({ analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD });
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[9]);
    const obj2 = { screen: constants.PROFILE_CUSTOMIZATION };
    obj.openUserSettings(obj2);
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[9]);
    const obj2 = { screen: constants.APPEARANCE_THEME_PICKER };
    obj.openUserSettings(obj2);
  }, []);
  const callback3 = react.useCallback(() => {
    let obj3;
    const obj2 = { screen: metroImportAll.GUILD_BOOSTING, params: obj3 };
    obj3 = { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded };
    const obj = openUserSettings;
    obj.openUserSettings(obj2);
  }, items);
  let obj3 = {
    customProfile: obj4,
    clientThemes: obj5,
    serverBoosts: obj6,
    greyServerBoosts: obj7,
    customAppIcons: obj8,
    emoji: obj9,
    customSounds: obj10,
    sticker: obj11,
    earlyAccess: obj12,
    memberPricing: obj13,
    largeUploads: obj14,
    hdVideo: obj15,
    superReactions: obj16,
    entranceSounds: obj17,
    badge: obj18,
    greyBadge: obj19,
    xboxGamePass: obj20,
  };
  obj4 = {
    title: intl.string(subscriptionPlansLoaded(1126).t.KcyDwF),
    description: intl2.string(subscriptionPlansLoaded(1126).t.Mt3U1W),
    imageSrc: AssetRegistryDefault,
    buttonOnPress: callback1,
  };
  const callback4 = react.useCallback(() => {
    const obj = subscriptionPlansLoaded(dependencyMap[9]);
    const obj2 = { screen: constants.APP_ICONS };
    obj.openUserSettings(obj2);
  }, []);
  intl = subscriptionPlansLoaded(1126).intl;
  intl2 = subscriptionPlansLoaded(1126).intl;
  obj5 = {
    title: intl3.string(subscriptionPlansLoaded(1126).t.kWM48G),
    description: intl4.string(subscriptionPlansLoaded(1126).t.CjRASJ),
    imageSrc: AssetRegistryDefault2,
    buttonOnPress: callback2,
  };
  intl3 = subscriptionPlansLoaded(1126).intl;
  intl4 = subscriptionPlansLoaded(1126).intl;
  obj6 = {
    title: intl5.string(subscriptionPlansLoaded(1126).t["NyDu/6"]),
    description: intl6.string(subscriptionPlansLoaded(1126).t["4pEwXL"]),
    imageSrc: AssetRegistryDefault3,
    buttonOnPress: callback3,
  };
  intl5 = subscriptionPlansLoaded(1126).intl;
  intl6 = subscriptionPlansLoaded(1126).intl;
  obj7 = {
    title: intl7.string(subscriptionPlansLoaded(1126).t["NyDu/6"]),
    description: intl8.string(subscriptionPlansLoaded(1126).t["4pEwXL"]),
    imageSrc: AssetRegistryDefault4,
    imageOverlayText: intl9.string(subscriptionPlansLoaded(1126).t["/VzCKE"]),
  };
  intl7 = subscriptionPlansLoaded(1126).intl;
  intl8 = subscriptionPlansLoaded(1126).intl;
  intl9 = subscriptionPlansLoaded(1126).intl;
  obj8 = {
    title: intl10.string(subscriptionPlansLoaded(1126).t.OuItFi),
    description: intl11.string(subscriptionPlansLoaded(1126).t.mPyrE6),
    imageSrc: AssetRegistryDefault5,
    buttonOnPress: callback4,
  };
  intl10 = subscriptionPlansLoaded(1126).intl;
  intl11 = subscriptionPlansLoaded(1126).intl;
  obj9 = {
    title: intl12.string(subscriptionPlansLoaded(1126).t["R2IV/Q"]),
    description: intl13.string(subscriptionPlansLoaded(1126).t.R5Xag2),
    imageSrc: AssetRegistryDefault6,
  };
  intl12 = subscriptionPlansLoaded(1126).intl;
  intl13 = subscriptionPlansLoaded(1126).intl;
  obj10 = {
    title: intl14.string(subscriptionPlansLoaded(1126).t.LWsArT),
    description: intl15.string(subscriptionPlansLoaded(1126).t["4lSyCY"]),
    imageSrc: AssetRegistryDefault7,
  };
  intl14 = subscriptionPlansLoaded(1126).intl;
  intl15 = subscriptionPlansLoaded(1126).intl;
  obj11 = {
    title: intl16.string(subscriptionPlansLoaded(1126).t.tzdIwI),
    description: intl17.string(subscriptionPlansLoaded(1126).t.hJG8ZN),
    imageSrc: AssetRegistryDefault8,
  };
  intl16 = subscriptionPlansLoaded(1126).intl;
  intl17 = subscriptionPlansLoaded(1126).intl;
  obj12 = {
    title: intl18.string(subscriptionPlansLoaded(1126).t.EYxi0o),
    description: intl19.string(subscriptionPlansLoaded(1126).t.M9AIt1),
    imageSrc: AssetRegistryDefault9,
  };
  intl18 = subscriptionPlansLoaded(1126).intl;
  intl19 = subscriptionPlansLoaded(1126).intl;
  obj13 = {
    title: intl20.string(subscriptionPlansLoaded(1126).t["H4/NBN"]),
    description: intl21.string(subscriptionPlansLoaded(1126).t.wo3D3T),
    imageSrc: AssetRegistryDefault10,
    buttonOnPress: callback,
  };
  intl20 = subscriptionPlansLoaded(1126).intl;
  intl21 = subscriptionPlansLoaded(1126).intl;
  obj14 = {
    title: intl22.formatToPlainString(subscriptionPlansLoaded(1126).t.jqhAdL, {
      premiumMaxSize: maxFileSizeForPremiumType,
    }),
    description: intl23.formatToPlainString(subscriptionPlansLoaded(1126).t["HI+cfm"], {
      premiumMaxSize: maxFileSizeForPremiumType,
    }),
    imageSrc: AssetRegistryDefault11,
  };
  intl22 = subscriptionPlansLoaded(1126).intl;
  intl23 = subscriptionPlansLoaded(1126).intl;
  obj15 = {
    title: intl24.string(subscriptionPlansLoaded(1126).t.RSXQYO),
    description: intl25.string(subscriptionPlansLoaded(1126).t.ymCPxp),
    imageSrc: AssetRegistryDefault12,
  };
  intl24 = subscriptionPlansLoaded(1126).intl;
  intl25 = subscriptionPlansLoaded(1126).intl;
  obj16 = {
    title: intl26.string(subscriptionPlansLoaded(1126).t["6S7kO7"]),
    description: intl27.string(subscriptionPlansLoaded(1126).t.A0U9fk),
    imageSrc: AssetRegistryDefault13,
  };
  intl26 = subscriptionPlansLoaded(1126).intl;
  intl27 = subscriptionPlansLoaded(1126).intl;
  obj17 = {
    title: intl28.string(subscriptionPlansLoaded(1126).t["f4M+H9"]),
    description: intl29.string(subscriptionPlansLoaded(1126).t["7ZCYvC"]),
    imageSrc: AssetRegistryDefault14,
  };
  intl28 = subscriptionPlansLoaded(1126).intl;
  intl29 = subscriptionPlansLoaded(1126).intl;
  obj18 = {
    title: intl30.string(subscriptionPlansLoaded(1126).t.dcFfSJ),
    description: intl31.string(subscriptionPlansLoaded(1126).t["37MFFq"]),
    imageSrc: AssetRegistryDefault15,
  };
  intl30 = subscriptionPlansLoaded(1126).intl;
  intl31 = subscriptionPlansLoaded(1126).intl;
  obj19 = {
    title: intl32.string(subscriptionPlansLoaded(1126).t.dcFfSJ),
    description: intl33.string(subscriptionPlansLoaded(1126).t["37MFFq"]),
    imageSrc: AssetRegistryDefault16,
    imageOverlayText: intl34.string(subscriptionPlansLoaded(1126).t["/VzCKE"]),
  };
  intl32 = subscriptionPlansLoaded(1126).intl;
  intl33 = subscriptionPlansLoaded(1126).intl;
  intl34 = subscriptionPlansLoaded(1126).intl;
  obj20 = {
    title: intl35.string(subscriptionPlansLoaded(1126).t.aJE9i1),
    imageSrc: { uri: _modDef13222 },
    imageStyle: { aspectRatio: 1.9789473684210526 },
    bodyComponent: closure_9(Text, obj22),
  };
  intl35 = subscriptionPlansLoaded(1126).intl;
  obj22 = { variant: "text-sm/normal", children: format(prop, obj23) };
  ({ uri: _modDef13222 });
  Text = subscriptionPlansLoaded(4886).Text;
  const intl36 = subscriptionPlansLoaded(1126).intl;
  format = intl36.format;
  obj23 = { termsLink: obj24.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0) };
  prop = subscriptionPlansLoaded(1126).t["9Wv+8h"];
  obj24 = HelpdeskUtilsDefault;
  return obj3;
};
