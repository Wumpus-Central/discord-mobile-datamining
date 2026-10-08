// discord_app/modules/premium/native/PremiumPerkCard.tsx
import c from "../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import HelpdeskUtilsDefault from "../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../design/components/Button/native/Button.native.tsx";
import useFontScale from "../../screen/native/useFontScale.tsx";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import AnalyticsLocationDefault from "../../app_analytics/AnalyticsLocation.tsx";
import openUserSettings from "../../user_settings/core/native/openUserSettings.tsx";
import _modDef13525 from "../../../../_runtime/metro/13525__.js";
import _modDef13526 from "../../../../_runtime/metro/13526__.js";
import _modDef13527 from "../../../../_runtime/metro/13527__.js";
import _modDef13528 from "../../../../_runtime/metro/13528__.js";
import _modDef13529 from "../../../../_runtime/metro/13529__.js";
import _modDef13530 from "../../../../_runtime/metro/13530__.js";
import _modDef13531 from "../../../../_runtime/metro/13531__.js";
import _modDef13532 from "../../../../_runtime/metro/13532__.js";
import _modDef13533 from "../../../../_runtime/metro/13533__.js";
import _modDef13534 from "../../../../_runtime/metro/13534__.js";
import _modDef13535 from "../../../../_runtime/metro/13535__.js";
import _modDef13536 from "../../../../_runtime/metro/13536__.js";
import _modDef13537 from "../../../../_runtime/metro/13537__.js";
import _modDef13538 from "../../../../_runtime/metro/13538__.js";
import _modDef13539 from "../../../../_runtime/metro/13539__.js";
import _modDef13540 from "../../../../_runtime/metro/13540__.js";
import _modDef13541 from "../../../../discord_assets/assets/images/perks/xbox_game_pass.jpg.js";
import PillTextDefault from "components/PillText.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ View: closure_4, ScrollView: hasOwnProperty } = get_ActivityIndicator);
const PremiumTypes = fn(1391).PremiumTypes;
const Constants = fn(1085);
({ HelpdeskArticles: closure_7, UserSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const PerkCardVariant = { NARROW: 0, [0]: "NARROW", WIDE: 1, [1]: "WIDE" };
const frozen = Object.freeze({
  [PerkCardVariant.NARROW]: { width: 300, height: 364, scaledFontHeight: 440 },
  [PerkCardVariant.WIDE]: { width: 320, height: 364, scaledFontHeight: 440 },
});
let ReactCompilerGating = fn(558);
const tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? function usePerkCardHeight(arg0) {
      return useFontScale.useFontScale() > 1 ? frozen[arg0].scaledFontHeight : frozen[arg0].height;
    }
  : function usePerkCardHeight(arg0) {
      return useFontScale.useFontScale() > 1 ? frozen[arg0].scaledFontHeight : frozen[arg0].height;
    };
let closure_13 = tmp6;
const createStyles = fn(5090);
let closure_14 = createStyles.createStyles((arg0) => {
  const obj = {
    container: null,
    headerComponent: null,
    image: null,
    title: null,
    description: null,
    button: null,
    imageContainer: null,
    imageOverlayText: null,
    imageOverlayTextContainer: null,
    pillTextContainer: null,
  };
  const merged = Object.assign(nativeDefault.shadows.SHADOW_LOW);
  obj.container = {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    width: frozen[arg0].width,
  };
  const obj2 = {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    width: frozen[arg0].width,
  };
  obj.headerComponent = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  };
  const obj3 = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
    overflow: "hidden",
  };
  obj.image = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  };
  obj.title = { marginTop: 16, marginHorizontal: 16 };
  let num = 8;
  if (arg0 === obj.WIDE) {
    num = 24;
  }
  const merged1 = Object.assign(arg0 === obj.NARROW && { height: "100%" });
  obj.description = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  obj.button = { marginTop: "auto", marginHorizontal: 16, marginBottom: 16 };
  obj.imageContainer = { position: "relative", alignItems: "center", justifyContent: "center" };
  const obj4 = {
    width: "100%",
    borderTopLeftRadius: nativeDefault.radii.sm,
    borderTopRightRadius: nativeDefault.radii.sm,
  };
  const obj5 = { marginTop: 8, marginHorizontal: 16, marginBottom: num };
  const tmp5 = arg0 === obj.NARROW && { height: "100%" };
  obj.imageOverlayText = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  const obj6 = { color: nativeDefault.colors.WHITE, fontSize: 14 };
  obj.imageOverlayTextContainer = {
    position: "absolute",
    bottom: "10%",
    borderRadius: nativeDefault.radii.round,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_STRONG,
    paddingHorizontal: 12,
    paddingVertical: 4,
    justifyContent: "center",
    alignItems: "center",
  };
  obj.pillTextContainer = { position: "absolute", width: "auto", top: -8, left: 10 };
  return obj;
});
ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPerkCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumPerkCard(arg0) {
      const obj = c;
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
          const intl = util.intl;
          stringResult = intl.string(util.t.jVcuVY);
        }
        cResult[0] = cta;
        cResult[1] = stringResult;
        let tmp4 = stringResult;
      } else {
        tmp4 = cResult[1];
      }
      if (undefined === variant) {
        variant = obj.WIDE;
      }
      const tmp7 = closure_14(variant);
      const tmp9 = closure_13(obj.NARROW);
      if (null != imageSrc) {
        if (null != imageOverlayText) {
          let imageContainer = tmp7.imageContainer;
          if (cResult[2] === imageStyle) {
            if (cResult[3] === tmp7.image) {
              let tmp20 = cResult[4];
            }
            if (cResult[5] === imageSrc) {
              if (cResult[6] === tmp20) {
                let tmp21 = cResult[7];
              }
              ({ imageOverlayTextContainer, imageOverlayText: imageOverlayText2 } = tmp7);
              if (cResult[8] !== imageOverlayText) {
                const formatted = imageOverlayText.toUpperCase();
                cResult[8] = imageOverlayText;
                cResult[9] = formatted;
                let tmp25 = formatted;
              } else {
                tmp25 = cResult[9];
              }
              if (cResult[10] === tmp7.imageOverlayText) {
                if (cResult[11] === tmp25) {
                  let tmp27 = cResult[12];
                }
                if (cResult[13] === tmp7.imageOverlayTextContainer) {
                  if (cResult[14] === tmp27) {
                    let tmp30 = cResult[15];
                  }
                  if (cResult[16] === tmp7.imageContainer) {
                    if (cResult[17] === tmp30) {
                    }
                  }
                  const obj2 = { style: imageContainer, children: null };
                  imageContainer = [tmp21, tmp30];
                  obj2.children = imageContainer;
                  const tmp37 = collapsed(React4, obj2);
                  cResult[16] = tmp7.imageContainer;
                  cResult[17] = tmp30;
                  cResult[18] = tmp21;
                  cResult[19] = tmp37;
                }
                const obj3 = { style: imageOverlayTextContainer, children: tmp27 };
                const tmp33 = options(React4, obj3);
                cResult[13] = tmp7.imageOverlayTextContainer;
                cResult[14] = tmp27;
                cResult[15] = tmp33;
                tmp30 = tmp33;
              }
              const obj4 = { style: imageOverlayText2, variant: "text-md/bold", children: tmp25 };
              const tmp29 = options(Text_Text.Text, obj4);
              cResult[10] = tmp7.imageOverlayText;
              cResult[11] = tmp25;
              cResult[12] = tmp29;
              tmp27 = tmp29;
            }
            const obj5 = { style: tmp20, source: imageSrc };
            const tmp24 = options(FastImageDefault, obj5);
            cResult[5] = imageSrc;
            cResult[6] = tmp20;
            cResult[7] = tmp24;
            tmp21 = tmp24;
          }
          const items = [tmp7.image, imageStyle];
          cResult[2] = imageStyle;
          cResult[3] = tmp7.image;
          cResult[4] = items;
          tmp20 = items;
        } else {
          if (cResult[20] === imageStyle) {
            if (cResult[21] === tmp7.image) {
              let tmp15 = cResult[22];
            }
            if (cResult[23] === imageSrc) {
              if (cResult[24] === tmp15) {
                let tmp16 = cResult[25];
              }
              let tmp10 = tmp16;
            }
            const obj6 = { style: tmp15, source: imageSrc };
            const tmp19 = options(FastImageDefault, obj6);
            cResult[23] = imageSrc;
            cResult[24] = tmp15;
            cResult[25] = tmp19;
            tmp16 = tmp19;
          }
          const items1 = [tmp7.image, imageStyle];
          cResult[20] = imageStyle;
          cResult[21] = tmp7.image;
          cResult[22] = items1;
          tmp15 = items1;
        }
      } else {
        tmp10 = null;
        if (null != headerComponent) {
          if (cResult[26] === headerComponent) {
            if (cResult[27] === tmp7.headerComponent) {
              let tmp11 = cResult[28];
            }
            tmp10 = tmp11;
          }
          const obj7 = { style: tmp7.headerComponent, children: headerComponent };
          const tmp14 = options(React4, obj7);
          cResult[26] = headerComponent;
          cResult[27] = tmp7.headerComponent;
          cResult[28] = tmp14;
          tmp11 = tmp14;
        }
      }
      if (null != description) {
        if (cResult[29] !== description) {
          const obj8 = { variant: "text-sm/normal", children: description };
          const tmp42 = options(Text_Text.Text, obj8);
          cResult[29] = description;
          cResult[30] = tmp42;
        }
      } else {
        let tmp39 = null;
        if (null != bodyComponent) {
          tmp39 = bodyComponent;
        }
        if (cResult[31] === tmp9) {
          if (cResult[32] === variant) {
            let tmp44 = cResult[33];
          }
          if (cResult[34] === style) {
            if (cResult[35] === tmp7.container) {
              if (cResult[36] === tmp44) {
                let tmp46 = cResult[37];
              }
              if (cResult[38] === pillText) {
                if (cResult[39] === tmp7.pillTextContainer) {
                  let tmp47 = cResult[40];
                }
                if (cResult[41] === tmp7.title) {
                  if (cResult[42] === titleStyle) {
                    let tmp51 = cResult[43];
                  }
                  if (cResult[44] === tmp51) {
                    if (cResult[45] === title) {
                      let tmp52 = cResult[46];
                    }
                    if (cResult[47] === tmp39) {
                      if (cResult[48] === tmp7.description) {
                        let tmp55 = cResult[49];
                      }
                      if (cResult[50] === buttonOnPress) {
                        if (cResult[51] === tmp4) {
                          if (cResult[52] === tmp7.button) {
                            let tmp59 = cResult[53];
                          }
                          if (cResult[54] === tmp10) {
                            if (cResult[55] === tmp59) {
                              if (cResult[56] === tmp46) {
                                if (cResult[57] === tmp47) {
                                  if (cResult[58] === tmp52) {
                                    if (cResult[59] === tmp55) {
                                      let tmp63 = cResult[60];
                                    }
                                    return tmp63;
                                  }
                                }
                              }
                            }
                          }
                          const obj9 = { style: tmp46, children: null };
                          const items2 = [tmp47, tmp10, tmp52, tmp55, tmp59];
                          obj9.children = items2;
                          const tmp66 = collapsed(React4, obj9);
                          cResult[54] = tmp10;
                          cResult[55] = tmp59;
                          cResult[56] = tmp46;
                          cResult[57] = tmp47;
                          cResult[58] = tmp52;
                          cResult[59] = tmp55;
                          cResult[60] = tmp66;
                          tmp63 = tmp66;
                        }
                      }
                      let tmp60 = null != buttonOnPress;
                      if (tmp60) {
                        const obj10 = { style: tmp7.button, children: null };
                        const obj11 = { size: "sm", variant: "secondary", text: tmp4, onPress: buttonOnPress };
                        obj10.children = options(components_Button_Button.Button, obj11);
                        tmp60 = options(React4, obj10);
                      }
                      cResult[50] = buttonOnPress;
                      cResult[51] = tmp4;
                      cResult[52] = tmp7.button;
                      cResult[53] = tmp60;
                      tmp59 = tmp60;
                    }
                    const obj12 = { style: tmp7.description, children: tmp39 };
                    const tmp58 = options(hasOwnProperty, obj12);
                    cResult[47] = tmp39;
                    cResult[48] = tmp7.description;
                    cResult[49] = tmp58;
                    tmp55 = tmp58;
                  }
                  const obj13 = {
                    style: tmp51,
                    variant: "heading-lg/extrabold",
                    accessibilityRole: "header",
                    children: title,
                  };
                  const tmp54 = options(Text_Text.Text, obj13);
                  cResult[44] = tmp51;
                  cResult[45] = title;
                  cResult[46] = tmp54;
                  tmp52 = tmp54;
                }
                const items3 = [tmp7.title, titleStyle];
                cResult[41] = tmp7.title;
                cResult[42] = titleStyle;
                cResult[43] = items3;
                tmp51 = items3;
              }
              let tmp48 = null != pillText;
              if (tmp48) {
                const obj14 = { pillText, style: tmp7.pillTextContainer };
                tmp48 = options(PillTextDefault, obj14);
              }
              cResult[38] = pillText;
              cResult[39] = tmp7.pillTextContainer;
              cResult[40] = tmp48;
              tmp47 = tmp48;
            }
          }
          const items4 = [tmp7.container, tmp44, style];
          cResult[34] = style;
          cResult[35] = tmp7.container;
          cResult[36] = tmp44;
          cResult[37] = items4;
          tmp46 = items4;
        }
        let tmp45 = variant === tmp8.NARROW;
        if (tmp45) {
          const obj15 = { height: tmp9 };
          tmp45 = obj15;
        }
        cResult[31] = tmp9;
        cResult[32] = variant;
        cResult[33] = tmp45;
        tmp44 = tmp45;
      }
      tmp8 = obj;
    }
  : function PremiumPerkCard(variant) {
      ({ description, bodyComponent, headerComponent, imageSrc, imageStyle, buttonOnPress, cta } = variant);
      ({ style, title, titleStyle } = variant);
      if (cta === undefined) {
        const intl = util.intl;
        cta = intl.string(util.t.jVcuVY);
      }
      let WIDE = variant.variant;
      if (WIDE === undefined) {
        WIDE = obj.WIDE;
      }
      ({ imageOverlayText, pillText } = variant);
      const tmp4 = closure_14(WIDE);
      if (null != imageSrc) {
        if (null != imageOverlayText) {
          const obj2 = { style: tmp4.imageContainer, children: null };
          const obj3 = { style: null, source: null };
          const items = [tmp4.image, imageStyle];
          obj3.style = items;
          obj3.source = imageSrc;
          const items1 = [options(FastImageDefault, obj3)];
          const obj4 = { style: tmp4.imageOverlayTextContainer, children: null };
          imageSrc = Text_Text.Text;
          const obj5 = {
            style: tmp4.imageOverlayText,
            variant: "text-md/bold",
            children: imageOverlayText.toUpperCase(),
          };
          obj4.children = options(imageSrc, obj5);
          items1[1] = options(React4, obj4);
          obj2.children = items1;
          let tmp13 = collapsed(React4, obj2);
        } else {
          const obj6 = { style: null, source: null };
          const items2 = [tmp4.image, imageStyle];
          obj6.style = items2;
          obj6.source = imageSrc;
          tmp13 = options(FastImageDefault, obj6);
        }
      } else {
        let tmp7 = null;
        if (null != headerComponent) {
          obj = { style: tmp4.headerComponent, children: headerComponent };
          tmp7 = options(React4, obj);
        }
        if (null != description) {
          const obj7 = { variant: "text-sm/normal", children: description };
          let tmp21 = options(Text_Text.Text, obj7);
        } else {
          tmp21 = null;
          if (null != bodyComponent) {
            tmp21 = bodyComponent;
          }
        }
        const items3 = [tmp4.container, ,];
        let tmp27 = WIDE === tmp5.NARROW;
        if (tmp27) {
          const obj8 = { height: tmp6 };
          tmp27 = obj8;
        }
        const obj9 = { style: null, children: null };
        items3[1] = tmp27;
        items3[2] = style;
        obj9.style = items3;
        let tmp28 = null != pillText;
        if (tmp28) {
          const obj10 = { pillText, style: tmp4.pillTextContainer };
          tmp28 = options(PillTextDefault, obj10);
        }
        const items4 = [tmp28, tmp7, , ,];
        const obj11 = { style: null, variant: "heading-lg/extrabold", accessibilityRole: "header", children: null };
        const items5 = [tmp4.title, titleStyle];
        obj11.style = items5;
        obj11.children = title;
        items4[2] = options(Text_Text.Text, obj11);
        const obj12 = { style: tmp4.description, children: tmp21 };
        items4[3] = options(hasOwnProperty, obj12);
        let tmp32Result = null != buttonOnPress;
        if (tmp32Result) {
          const obj13 = { style: tmp4.button, children: null };
          const obj14 = { size: "sm", variant: "secondary", text: cta, onPress: buttonOnPress };
          obj13.children = options(components_Button_Button.Button, obj14);
          tmp32Result = options(React4, obj13);
        }
        items4[4] = tmp32Result;
        obj9.children = items4;
        return collapsed(React4, obj9);
      }
      tmp5 = obj;
    };
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
  subscriptionPlansLoaded = subscriptionPlansLoaded(13524).useSubscriptionPlansLoaded();
  let obj = subscriptionPlansLoaded(13524);
  const maxFileSizeForPremiumType = subscriptionPlansLoaded(4726).getMaxFileSizeForPremiumType(PremiumTypes.TIER_2);
  const callback = noop.useCallback(() => {
    const obj2 = { screen: constants.COLLECTIBLES_SHOP, params: null };
    const obj = subscriptionPlansLoaded(7084);
    obj2.params = { analyticsSource: AnalyticsLocationDefault.PREMIUM_MARKETING_PERK_CARD };
    obj.openUserSettings(obj2);
  }, []);
  const callback1 = noop.useCallback(() => {
    subscriptionPlansLoaded(7084).openUserSettings({ screen: constants.PROFILE_CUSTOMIZATION });
  }, []);
  const items = [subscriptionPlansLoaded];
  const callback2 = noop.useCallback(() => {
    subscriptionPlansLoaded(7084).openUserSettings({ screen: constants.APPEARANCE_THEME_PICKER });
  }, []);
  const callback3 = noop.useCallback(() => {
    const obj2 = {
      screen: constants.GUILD_BOOSTING,
      params: { shouldFetchSubscriptionPlans: !subscriptionPlansLoaded },
    };
    openUserSettings.openUserSettings(obj2);
  }, items);
  const obj3 = {
    customProfile: null,
    clientThemes: null,
    serverBoosts: null,
    greyServerBoosts: null,
    customAppIcons: null,
    emoji: null,
    customSounds: null,
    sticker: null,
    earlyAccess: null,
    memberPricing: null,
    largeUploads: null,
    hdVideo: null,
    superReactions: null,
    entranceSounds: null,
    badge: null,
    greyBadge: null,
    xboxGamePass: null,
  };
  const obj4 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const callback4 = noop.useCallback(() => {
    subscriptionPlansLoaded(7084).openUserSettings({ screen: constants.APP_ICONS });
  }, []);
  const intl = subscriptionPlansLoaded(1126).intl;
  obj4.title = intl.string(subscriptionPlansLoaded(1126).t.KcyDwF);
  const intl2 = subscriptionPlansLoaded(1126).intl;
  obj4.description = intl2.string(subscriptionPlansLoaded(1126).t.Mt3U1W);
  obj4.imageSrc = _modDef13525;
  obj4.buttonOnPress = callback1;
  obj3.customProfile = obj4;
  const obj5 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl3 = subscriptionPlansLoaded(1126).intl;
  obj5.title = intl3.string(subscriptionPlansLoaded(1126).t.kWM48G);
  const intl4 = subscriptionPlansLoaded(1126).intl;
  obj5.description = intl4.string(subscriptionPlansLoaded(1126).t.CjRASJ);
  obj5.imageSrc = _modDef13526;
  obj5.buttonOnPress = callback2;
  obj3.clientThemes = obj5;
  const obj6 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl5 = subscriptionPlansLoaded(1126).intl;
  obj6.title = intl5.string(subscriptionPlansLoaded(1126).t["NyDu/6"]);
  const intl6 = subscriptionPlansLoaded(1126).intl;
  obj6.description = intl6.string(subscriptionPlansLoaded(1126).t["4pEwXL"]);
  obj6.imageSrc = _modDef13527;
  obj6.buttonOnPress = callback3;
  obj3.serverBoosts = obj6;
  const obj7 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl7 = subscriptionPlansLoaded(1126).intl;
  obj7.title = intl7.string(subscriptionPlansLoaded(1126).t["NyDu/6"]);
  const intl8 = subscriptionPlansLoaded(1126).intl;
  obj7.description = intl8.string(subscriptionPlansLoaded(1126).t["4pEwXL"]);
  obj7.imageSrc = _modDef13528;
  const intl9 = subscriptionPlansLoaded(1126).intl;
  obj7.imageOverlayText = intl9.string(subscriptionPlansLoaded(1126).t["/VzCKE"]);
  obj3.greyServerBoosts = obj7;
  const obj8 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl10 = subscriptionPlansLoaded(1126).intl;
  obj8.title = intl10.string(subscriptionPlansLoaded(1126).t.OuItFi);
  const intl11 = subscriptionPlansLoaded(1126).intl;
  obj8.description = intl11.string(subscriptionPlansLoaded(1126).t.mPyrE6);
  obj8.imageSrc = _modDef13529;
  obj8.buttonOnPress = callback4;
  obj3.customAppIcons = obj8;
  const obj9 = { title: null, description: null, imageSrc: null };
  const intl12 = subscriptionPlansLoaded(1126).intl;
  obj9.title = intl12.string(subscriptionPlansLoaded(1126).t["R2IV/Q"]);
  const intl13 = subscriptionPlansLoaded(1126).intl;
  obj9.description = intl13.string(subscriptionPlansLoaded(1126).t.R5Xag2);
  obj9.imageSrc = _modDef13530;
  obj3.emoji = obj9;
  const obj10 = { title: null, description: null, imageSrc: null };
  const intl14 = subscriptionPlansLoaded(1126).intl;
  obj10.title = intl14.string(subscriptionPlansLoaded(1126).t.LWsArT);
  const intl15 = subscriptionPlansLoaded(1126).intl;
  obj10.description = intl15.string(subscriptionPlansLoaded(1126).t["4lSyCY"]);
  obj10.imageSrc = _modDef13531;
  obj3.customSounds = obj10;
  const obj11 = { title: null, description: null, imageSrc: null };
  const intl16 = subscriptionPlansLoaded(1126).intl;
  obj11.title = intl16.string(subscriptionPlansLoaded(1126).t.tzdIwI);
  const intl17 = subscriptionPlansLoaded(1126).intl;
  obj11.description = intl17.string(subscriptionPlansLoaded(1126).t.hJG8ZN);
  obj11.imageSrc = _modDef13532;
  obj3.sticker = obj11;
  const obj12 = { title: null, description: null, imageSrc: null };
  const intl18 = subscriptionPlansLoaded(1126).intl;
  obj12.title = intl18.string(subscriptionPlansLoaded(1126).t.EYxi0o);
  const intl19 = subscriptionPlansLoaded(1126).intl;
  obj12.description = intl19.string(subscriptionPlansLoaded(1126).t.M9AIt1);
  obj12.imageSrc = _modDef13533;
  obj3.earlyAccess = obj12;
  const obj13 = { title: null, description: null, imageSrc: null, buttonOnPress: null };
  const intl20 = subscriptionPlansLoaded(1126).intl;
  obj13.title = intl20.string(subscriptionPlansLoaded(1126).t["H4/NBN"]);
  const intl21 = subscriptionPlansLoaded(1126).intl;
  obj13.description = intl21.string(subscriptionPlansLoaded(1126).t.wo3D3T);
  obj13.imageSrc = _modDef13534;
  obj13.buttonOnPress = callback;
  obj3.memberPricing = obj13;
  const obj14 = { title: null, description: null, imageSrc: null };
  const intl22 = subscriptionPlansLoaded(1126).intl;
  obj14.title = intl22.formatToPlainString(subscriptionPlansLoaded(1126).t.jqhAdL, {
    premiumMaxSize: maxFileSizeForPremiumType,
  });
  const intl23 = subscriptionPlansLoaded(1126).intl;
  obj14.description = intl23.formatToPlainString(subscriptionPlansLoaded(1126).t["HI+cfm"], {
    premiumMaxSize: maxFileSizeForPremiumType,
  });
  obj14.imageSrc = _modDef13535;
  obj3.largeUploads = obj14;
  const obj15 = { title: null, description: null, imageSrc: null };
  const intl24 = subscriptionPlansLoaded(1126).intl;
  obj15.title = intl24.string(subscriptionPlansLoaded(1126).t.RSXQYO);
  const intl25 = subscriptionPlansLoaded(1126).intl;
  obj15.description = intl25.string(subscriptionPlansLoaded(1126).t.ymCPxp);
  obj15.imageSrc = _modDef13536;
  obj3.hdVideo = obj15;
  const obj16 = { title: null, description: null, imageSrc: null };
  const intl26 = subscriptionPlansLoaded(1126).intl;
  obj16.title = intl26.string(subscriptionPlansLoaded(1126).t["6S7kO7"]);
  const intl27 = subscriptionPlansLoaded(1126).intl;
  obj16.description = intl27.string(subscriptionPlansLoaded(1126).t.A0U9fk);
  obj16.imageSrc = _modDef13537;
  obj3.superReactions = obj16;
  const obj17 = { title: null, description: null, imageSrc: null };
  const intl28 = subscriptionPlansLoaded(1126).intl;
  obj17.title = intl28.string(subscriptionPlansLoaded(1126).t["f4M+H9"]);
  const intl29 = subscriptionPlansLoaded(1126).intl;
  obj17.description = intl29.string(subscriptionPlansLoaded(1126).t["7ZCYvC"]);
  obj17.imageSrc = _modDef13538;
  obj3.entranceSounds = obj17;
  const obj18 = { title: null, description: null, imageSrc: null };
  const intl30 = subscriptionPlansLoaded(1126).intl;
  obj18.title = intl30.string(subscriptionPlansLoaded(1126).t.dcFfSJ);
  const intl31 = subscriptionPlansLoaded(1126).intl;
  obj18.description = intl31.string(subscriptionPlansLoaded(1126).t["37MFFq"]);
  obj18.imageSrc = _modDef13539;
  obj3.badge = obj18;
  const obj19 = { title: null, description: null, imageSrc: null, imageOverlayText: null };
  const intl32 = subscriptionPlansLoaded(1126).intl;
  obj19.title = intl32.string(subscriptionPlansLoaded(1126).t.dcFfSJ);
  const intl33 = subscriptionPlansLoaded(1126).intl;
  obj19.description = intl33.string(subscriptionPlansLoaded(1126).t["37MFFq"]);
  obj19.imageSrc = _modDef13540;
  const intl34 = subscriptionPlansLoaded(1126).intl;
  obj19.imageOverlayText = intl34.string(subscriptionPlansLoaded(1126).t["/VzCKE"]);
  obj3.greyBadge = obj19;
  const obj20 = { title: null, imageSrc: null, imageStyle: null, bodyComponent: null };
  const intl35 = subscriptionPlansLoaded(1126).intl;
  obj20.title = intl35.string(subscriptionPlansLoaded(1126).t.aJE9i1);
  let obj2 = subscriptionPlansLoaded(4726);
  obj20.imageSrc = { uri: _modDef13541 };
  obj20.imageStyle = { aspectRatio: 1.9789473684210526 };
  const obj22 = { variant: "text-sm/normal", children: null };
  const intl36 = subscriptionPlansLoaded(1126).intl;
  const obj23 = { termsLink: null };
  const obj21 = { uri: _modDef13541 };
  obj23.termsLink = HelpdeskUtilsDefault.getArticleURL(NITRO_2_POINT_0.NITRO_2_POINT_0);
  obj22.children = intl36.format(subscriptionPlansLoaded(1126).t["9Wv+8h"], obj23);
  obj20.bodyComponent = closure_9(subscriptionPlansLoaded(5086).Text, obj22);
  obj3.xboxGamePass = obj20;
  return obj3;
};
