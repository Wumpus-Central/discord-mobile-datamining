// discord_app/modules/premium/powerups/native/GuildPowerupsPerkCard.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import shared from "../../../../design/shared.tsx";
import useThemeDefault from "../../../../hooks/useTheme.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../../_runtime/05605_LinearGradient.js";
import ManaTypeConsolidationExperiment from "../../../design/ManaTypeConsolidationExperiment.tsx";
import GuildPowerupsImageDefault from "GuildPowerupsImage.tsx";
import GuildPowerupsCardFooter2 from "GuildPowerupsCardFooter.tsx";
import GuildPowerupsCardDefault from "GuildPowerupsCard.tsx";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let rect;
let closure_3 = [
  "title",
  "description",
  "imageUrl",
  "isImageAnimated",
  "riveComponent",
  "style",
  "onPress",
  "status",
  "badge",
];
const View = react_native.View;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  card: { padding: 0, overflow: "hidden" },
  contentContainer: obj3,
  imageContainer: { width: "100%", height: 160 },
  gradient: { position: "absolute", left: 0, right: 0, top: 0, height: "100%" },
  headerContainer: obj4,
  badge: rect,
};
obj2 = { marginHorizontal: nativeDefault.space.PX_16 };
createStyles = createStyles.createStyles;
obj3 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj4 = { gap: nativeDefault.space.PX_4 };
rect = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let badge;
      let description;
      let imageUrl;
      let intl;
      let intl2;
      let isImageAnimated;
      let items;
      let items1;
      let items2;
      let items3;
      let onPress;
      let riveComponent;
      let status;
      let style;
      let title;
      let tmp10;
      let tmp11;
      let tmp12;
      let tmp13;
      let tmp21;
      let tmp24;
      let tmp4;
      let tmp5;
      let tmp6;
      let tmp7;
      let tmp8;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(62);
      if (cResult[0] !== arg0) {
        ({ title, description, imageUrl, isImageAnimated, riveComponent, style, onPress, status, badge } = arg0);
        const tmp16 = _objectWithoutProperties(arg0, closure_3);
        cResult[0] = arg0;
        cResult[1] = badge;
        cResult[2] = description;
        cResult[3] = tmp16;
        cResult[4] = imageUrl;
        cResult[5] = onPress;
        cResult[6] = riveComponent;
        cResult[7] = status;
        cResult[8] = style;
        cResult[9] = isImageAnimated;
        cResult[10] = title;
        tmp13 = title;
        tmp12 = isImageAnimated;
        tmp11 = style;
        tmp10 = status;
        tmp9 = riveComponent;
        tmp8 = onPress;
        tmp7 = imageUrl;
        tmp6 = tmp16;
        tmp5 = description;
        tmp4 = badge;
      } else {
        tmp4 = cResult[1];
        tmp5 = cResult[2];
        tmp6 = cResult[3];
        tmp7 = cResult[4];
        tmp8 = cResult[5];
        tmp9 = cResult[6];
        tmp10 = cResult[7];
        tmp11 = cResult[8];
        tmp12 = cResult[9];
        tmp13 = cResult[10];
      }
      const tmp18 = closure_8();
      const tmp20 = useThemeDefault();
      if (cResult[11] !== tmp20) {
        const tmpResult = shared;
        const isThemeDarkResult = tmpResult.isThemeDark(tmp20);
        cResult[11] = tmp20;
        cResult[12] = isThemeDarkResult;
        tmp21 = isThemeDarkResult;
      } else {
        tmp21 = cResult[12];
      }
      const tmpResult2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = tmpResult2.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
      if (cResult[13] !== tmp21) {
        const tmp25 = tmp21 ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
        cResult[13] = tmp21;
        cResult[14] = tmp25;
        tmp24 = tmp25;
      } else {
        tmp24 = cResult[14];
      }
      if (cResult[15] === tmp11) {
        let tmp26;
        if (cResult[16] === tmp18.container) {
          tmp26 = cResult[17];
        }
        if (cResult[18] === tmp7) {
          if (cResult[19] === (undefined === tmp12 || tmp12)) {
            let tmp27;
            if (cResult[20] === tmp9) {
              tmp27 = cResult[21];
            }
            if (cResult[22] === tmp24) {
              let tmp32;
              if (cResult[23] === tmp18.gradient) {
                tmp32 = cResult[24];
              }
              if (cResult[25] === tmp18.imageContainer) {
                if (cResult[26] === tmp27) {
                  let tmp35;
                  if (cResult[27] === tmp32) {
                    tmp35 = cResult[28];
                  }
                  let str2;
                  if (manaTypeConsolidationExperiment) {
                    str2 = "text-strong";
                  }
                  let str3 = "heading-md/bold";
                  if (manaTypeConsolidationExperiment) {
                    str3 = "experimental/heading-md/semibold";
                  }
                  if (cResult[29] === str2) {
                    if (cResult[30] === str3) {
                      let tmp39;
                      if (cResult[31] === tmp13) {
                        tmp39 = cResult[32];
                      }
                      let str4 = "text-sm/medium";
                      if (manaTypeConsolidationExperiment) {
                        str4 = "experimental/body-sm/normal";
                      }
                      if (cResult[33] === tmp5) {
                        let tmp42;
                        if (cResult[34] === str4) {
                          tmp42 = cResult[35];
                        }
                        if (cResult[36] === tmp18.headerContainer) {
                          if (cResult[37] === tmp39) {
                            let tmp45;
                            if (cResult[38] === tmp42) {
                              tmp45 = cResult[39];
                            }
                            if (cResult[40] === tmp6) {
                              let tmp49;
                              if (cResult[41] === tmp10) {
                                tmp49 = cResult[42];
                              }
                              if (cResult[43] === tmp18.contentContainer) {
                                if (cResult[44] === tmp45) {
                                  let tmp55;
                                  if (cResult[45] === tmp49) {
                                    tmp55 = cResult[46];
                                  }
                                  if (cResult[47] === tmp4) {
                                    let tmp59;
                                    if (cResult[48] === tmp18.badge) {
                                      tmp59 = cResult[49];
                                    }
                                    if (cResult[50] === tmp4) {
                                      let tmp62;
                                      if (cResult[51] === tmp18.badge) {
                                        tmp62 = cResult[52];
                                      }
                                      if (cResult[53] === tmp8) {
                                        if (cResult[54] === tmp10) {
                                          if (cResult[55] === tmp18.card) {
                                            if (cResult[56] === tmp55) {
                                              if (cResult[57] === tmp59) {
                                                if (cResult[58] === tmp62) {
                                                  if (cResult[59] === tmp26) {
                                                    let tmp65;
                                                    if (cResult[60] === tmp35) {
                                                      tmp65 = cResult[61];
                                                    }
                                                    return tmp65;
                                                  }
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                      const obj2 = {
                                        containerStyle: tmp26,
                                        style: tmp18.card,
                                        status: tmp10,
                                        onPress: tmp8,
                                        children: items,
                                      };
                                      items = [tmp35, tmp55, tmp59, tmp62];
                                      const tmp67 = metroImportDefault(GuildPowerupsCardDefault, obj2);
                                      cResult[53] = tmp8;
                                      cResult[54] = tmp10;
                                      cResult[55] = tmp18.card;
                                      cResult[56] = tmp55;
                                      cResult[57] = tmp59;
                                      cResult[58] = tmp62;
                                      cResult[59] = tmp26;
                                      cResult[60] = tmp35;
                                      cResult[61] = tmp67;
                                      tmp65 = tmp67;
                                    }
                                    let tmp63 = "beta" === tmp4;
                                    if (tmp63) {
                                      const obj3 = {
                                        text: intl2.string(intl3.t.oW0eUd),
                                        color: native.BadgeColors.BRAND,
                                        style: tmp18.badge,
                                      };
                                      const TextBadge2 = native.TextBadge;
                                      intl2 = intl3.intl;
                                      tmp63 = metroRequire(TextBadge2, obj3);
                                    }
                                    cResult[50] = tmp4;
                                    cResult[51] = tmp18.badge;
                                    cResult[52] = tmp63;
                                    tmp62 = tmp63;
                                  }
                                  let tmp60 = "new" === tmp4;
                                  if (tmp60) {
                                    const obj4 = { text: intl.string(intl3.t.y2b7CA), style: tmp18.badge };
                                    const TextBadge = native.TextBadge;
                                    intl = intl3.intl;
                                    tmp60 = metroRequire(TextBadge, obj4);
                                  }
                                  cResult[47] = tmp4;
                                  cResult[48] = tmp18.badge;
                                  cResult[49] = tmp60;
                                  tmp59 = tmp60;
                                }
                              }
                              const obj5 = { style: tmp18.contentContainer, children: items1 };
                              items1 = [tmp45, tmp49];
                              const tmp58 = metroImportDefault(View, obj5);
                              cResult[43] = tmp18.contentContainer;
                              cResult[44] = tmp45;
                              cResult[45] = tmp49;
                              cResult[46] = tmp58;
                              tmp55 = tmp58;
                            }
                            const obj6 = { status: tmp10 };
                            const GuildPowerupsCardFooter = GuildPowerupsCardFooter2.GuildPowerupsCardFooter;
                            const merged = Object.assign(tmp6);
                            const tmp54 = metroRequire(GuildPowerupsCardFooter, obj6);
                            cResult[40] = tmp6;
                            cResult[41] = tmp10;
                            cResult[42] = tmp54;
                            tmp49 = tmp54;
                          }
                        }
                        const obj7 = { style: tmp18.headerContainer, children: items2 };
                        items2 = [tmp39, tmp42];
                        const tmp48 = metroImportDefault(View, obj7);
                        cResult[36] = tmp18.headerContainer;
                        cResult[37] = tmp39;
                        cResult[38] = tmp42;
                        cResult[39] = tmp48;
                        tmp45 = tmp48;
                      }
                      const obj8 = { variant: str4, children: tmp5 };
                      const tmp44 = metroRequire(Text_Text.Text, obj8);
                      cResult[33] = tmp5;
                      cResult[34] = str4;
                      cResult[35] = tmp44;
                      tmp42 = tmp44;
                    }
                  }
                  const obj9 = { color: str2, variant: str3, children: tmp13 };
                  const tmp41 = metroRequire(Text_Text.Text, obj9);
                  cResult[29] = str2;
                  cResult[30] = str3;
                  cResult[31] = tmp13;
                  cResult[32] = tmp41;
                  tmp39 = tmp41;
                }
              }
              const obj10 = { style: tmp18.imageContainer, children: items3 };
              items3 = [tmp27, tmp32];
              const tmp38 = metroImportDefault(View, obj10);
              cResult[25] = tmp18.imageContainer;
              cResult[26] = tmp27;
              cResult[27] = tmp32;
              cResult[28] = tmp38;
              tmp35 = tmp38;
            }
            const obj11 = { colors: tmp24, style: tmp18.gradient };
            const tmp34 = metroRequire(LinearGradientDefault, obj11);
            cResult[22] = tmp24;
            cResult[23] = tmp18.gradient;
            cResult[24] = tmp34;
            tmp32 = tmp34;
          }
        }
        let tmp30Result = tmp9;
        if (tmp9 == null) {
          let str = tmp7;
          const tmp19Result = GuildPowerupsImageDefault;
          if (tmp7 == null) {
            str = "";
          }
          const obj12 = { imageUrl: str, isAnimated: undefined === tmp12 || tmp12 };
          tmp30Result = metroRequire(tmp19Result, obj12);
        }
        cResult[18] = tmp7;
        cResult[19] = undefined === tmp12 || tmp12;
        cResult[20] = tmp9;
        cResult[21] = tmp30Result;
        tmp27 = tmp30Result;
      }
      const items4 = [tmp18.container, tmp11];
      cResult[15] = tmp11;
      cResult[16] = tmp18.container;
      cResult[17] = items4;
      tmp26 = items4;
    }
  : (arg0) => {
      let badge;
      let description;
      let imageUrl;
      let intl;
      let intl2;
      let isImageAnimated;
      let items;
      let items1;
      let items2;
      let items3;
      let items4;
      let onPress;
      let riveComponent;
      let status;
      let str2;
      let style;
      let title;
      ({ imageUrl, isImageAnimated } = arg0);
      ({ title, description } = arg0);
      if (isImageAnimated === undefined) {
        isImageAnimated = true;
      }
      ({ riveComponent, status, badge } = arg0);
      ({ style, onPress } = arg0);
      const merged = Object.assign(
        arg0,
        Object.assign({
          title: 0,
          description: 0,
          imageUrl: 0,
          isImageAnimated: 0,
          riveComponent: 0,
          style: 0,
          onPress: 0,
          status: 0,
          badge: 0,
        }),
      );
      const tmp2 = closure_8();
      const tmp5 = useThemeDefault();
      const obj = shared;
      const isThemeDarkResult = obj.isThemeDark(tmp5);
      const obj2 = ManaTypeConsolidationExperiment;
      const manaTypeConsolidationExperiment = obj2.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
      const obj3 = { containerStyle: items, style: tmp2.card, status, onPress, children: items2 };
      items = [,];
      const tmp9 = isThemeDarkResult ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
      items[0] = tmp2.container;
      items[1] = style;
      const obj4 = { style: tmp2.imageContainer, children: items1 };
      const tmp3Result = GuildPowerupsCardDefault;
      if (riveComponent == null) {
        const tmp3Result2 = GuildPowerupsImageDefault;
        if (imageUrl == null) {
          imageUrl = "";
        }
        const obj5 = { imageUrl, isAnimated: isImageAnimated };
        riveComponent = metroRequire(tmp3Result2, obj5);
      }
      items1 = [riveComponent];
      const obj6 = { colors: tmp9, style: tmp2.gradient };
      items1[1] = metroRequire(LinearGradientDefault, obj6);
      items2 = [metroImportDefault(View, obj4), , ,];
      let str;
      const obj7 = { style: tmp2.contentContainer, children: items4 };
      const obj8 = { style: tmp2.headerContainer, children: items3 };
      const Text = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str = "text-strong";
      }
      const obj9 = { color: str, variant: str2, children: title };
      str2 = "heading-md/bold";
      if (manaTypeConsolidationExperiment) {
        str2 = "experimental/heading-md/semibold";
      }
      items3 = [metroRequire(Text, obj9)];
      let str3 = "text-sm/medium";
      const Text2 = Text_Text.Text;
      if (manaTypeConsolidationExperiment) {
        str3 = "experimental/body-sm/normal";
      }
      items3[1] = metroRequire(Text2, { variant: str3, children: description });
      items4 = [metroImportDefault(View, obj8)];
      const obj10 = { status };
      const GuildPowerupsCardFooter = GuildPowerupsCardFooter2.GuildPowerupsCardFooter;
      const merged1 = Object.assign(merged);
      items4[1] = metroRequire(GuildPowerupsCardFooter, obj10);
      items2[1] = metroImportDefault(View, obj7);
      let tmp15Result = "new" === badge;
      if (tmp15Result) {
        const obj11 = { text: intl.string(intl3.t.y2b7CA), style: tmp2.badge };
        const TextBadge = native.TextBadge;
        intl = intl3.intl;
        tmp15Result = metroRequire(TextBadge, obj11);
      }
      items2[2] = tmp15Result;
      let tmp15Result2 = "beta" === badge;
      if (tmp15Result2) {
        const obj12 = { text: intl2.string(intl3.t.oW0eUd), color: native.BadgeColors.BRAND, style: tmp2.badge };
        const TextBadge2 = native.TextBadge;
        intl2 = intl3.intl;
        tmp15Result2 = metroRequire(TextBadge2, obj12);
      }
      items2[3] = tmp15Result2;
      return metroImportDefault(tmp3Result, obj3);
    };
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default tmp5;
