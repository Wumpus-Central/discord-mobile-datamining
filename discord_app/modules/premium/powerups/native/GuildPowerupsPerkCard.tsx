// === Module 12263: GuildPowerupsPerkCard ===

// Module 12263 (GuildPowerupsPerkCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import shared from "shared" /* 4930 */;
import useThemeDefault from "useTheme" /* 4992 */;
import Text_Text from "Text/Text" /* 5087 */;
import LinearGradientDefault from "LinearGradient" /* 5388 */;
import ManaTypeConsolidationExperiment from "ManaTypeConsolidationExperiment" /* 6662 */;
import GuildPowerupsImageDefault from "GuildPowerupsImage" /* 12213 */;
import GuildPowerupsCardFooter from "GuildPowerupsCardFooter" /* 12214 */;
import GuildPowerupsCardDefault from "GuildPowerupsCard" /* 12259 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import noop from "module_19" /* 19 */;

require = fn;
let closure_3 = ["title", "description", "imageUrl", "isImageAnimated", "riveComponent", "style", "onPress", "status", "badge"];
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(5091);
let obj2 = { container: { marginHorizontal: nativeDefault.space.PX_16 }, card: { padding: 0, overflow: "hidden" }, contentContainer: null, imageContainer: null, gradient: null, headerContainer: null, badge: null };
let obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
obj2.contentContainer = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj2.imageContainer = { width: "100%", height: 160 };
obj2.gradient = { position: "absolute", left: 0, right: 0, top: 0, height: "100%" };
let obj4 = { gap: nativeDefault.space.PX_16, padding: nativeDefault.space.PX_16 };
obj2.headerContainer = { gap: nativeDefault.space.PX_4 };
const rect = { position: "absolute", top: nativeDefault.space.PX_12, right: nativeDefault.space.PX_12 };
obj2.badge = rect;
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj5 = { gap: nativeDefault.space.PX_4 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/powerups/native/GuildPowerupsPerkCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildPowerupsPerkCard(arg0) {
  const cResult = c.c(62);
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
    let tmp13 = title;
    let tmp11 = style;
    let tmp10 = status;
    let tmp9 = riveComponent;
    let tmp8 = onPress;
    let tmp7 = imageUrl;
    let tmp6 = tmp16;
    let tmp5 = description;
    let tmp4 = badge;
  } else {
    tmp4 = cResult[1];
    tmp5 = cResult[2];
    tmp6 = cResult[3];
    tmp7 = cResult[4];
    tmp8 = cResult[5];
    tmp9 = cResult[6];
    tmp10 = cResult[7];
    tmp11 = cResult[8];
    tmp13 = cResult[10];
  }
  const tmp18 = closure_8();
  const tmp20 = useThemeDefault();
  if (cResult[11] !== tmp20) {
    const isThemeDarkResult = shared.isThemeDark(tmp20);
    cResult[11] = tmp20;
    cResult[12] = isThemeDarkResult;
    let tmp21 = isThemeDarkResult;
    const tmpResult = shared;
  } else {
    tmp21 = cResult[12];
  }
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  if (cResult[13] !== tmp21) {
    const tmp25 = tmp21 ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
    cResult[13] = tmp21;
    cResult[14] = tmp25;
  } else {
    if (cResult[15] === tmp11) {
      if (cResult[16] === tmp18.container) {
        let tmp27 = cResult[17];
      }
      if (cResult[18] === tmp7) {
        if (cResult[19] === tmp17) {
          if (cResult[20] === tmp9) {
            let tmp28 = cResult[21];
          }
          if (cResult[22] === tmp24) {
            if (cResult[23] === tmp18.gradient) {
              let tmp33 = cResult[24];
            }
            if (cResult[25] === tmp18.imageContainer) {
              if (cResult[26] === tmp28) {
                if (cResult[27] === tmp33) {
                  let tmp36 = cResult[28];
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
                    if (cResult[31] === tmp13) {
                      let tmp40 = cResult[32];
                    }
                    let str4 = "text-sm/medium";
                    if (manaTypeConsolidationExperiment) {
                      str4 = "experimental/body-sm/normal";
                    }
                    if (cResult[33] === tmp5) {
                      if (cResult[34] === str4) {
                        let tmp43 = cResult[35];
                      }
                      if (cResult[36] === tmp18.headerContainer) {
                        if (cResult[37] === tmp40) {
                          if (cResult[38] === tmp43) {
                            let tmp46 = cResult[39];
                          }
                          if (cResult[40] === tmp6) {
                            if (cResult[41] === tmp10) {
                              let tmp50 = cResult[42];
                            }
                            if (cResult[43] === tmp18.contentContainer) {
                              if (cResult[44] === tmp46) {
                                if (cResult[45] === tmp50) {
                                  let tmp56 = cResult[46];
                                }
                                if (cResult[47] === tmp4) {
                                  if (cResult[48] === tmp18.badge) {
                                    let tmp60 = cResult[49];
                                  }
                                  if (cResult[50] === tmp4) {
                                    if (cResult[51] === tmp18.badge) {
                                      let tmp63 = cResult[52];
                                    }
                                    if (cResult[53] === tmp8) {
                                      if (cResult[54] === tmp10) {
                                        if (cResult[55] === tmp18.card) {
                                          if (cResult[56] === tmp56) {
                                            if (cResult[57] === tmp60) {
                                              if (cResult[58] === tmp63) {
                                                if (cResult[59] === tmp27) {
                                                  if (cResult[60] === tmp36) {
                                                    let tmp66 = cResult[61];
                                                  }
                                                  return tmp66;
                                                }
                                              }
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj2 = { containerStyle: tmp27, style: tmp18.card, status: tmp10, onPress: tmp8, children: null };
                                    const items = [tmp36, tmp56, tmp60, tmp63];
                                    obj2.children = items;
                                    const tmp68 = React5(GuildPowerupsCardDefault, obj2);
                                    cResult[53] = tmp8;
                                    cResult[54] = tmp10;
                                    cResult[55] = tmp18.card;
                                    cResult[56] = tmp56;
                                    cResult[57] = tmp60;
                                    cResult[58] = tmp63;
                                    cResult[59] = tmp27;
                                    cResult[60] = tmp36;
                                    cResult[61] = tmp68;
                                    tmp66 = tmp68;
                                  }
                                  let tmp64 = "beta" === tmp4;
                                  if (tmp64) {
                                    const obj3 = { text: null, color: null, style: null };
                                    const intl2 = util.intl;
                                    obj3.text = intl2.string(util.t.oW0eUd);
                                    obj3.color = native.BadgeColors.BRAND;
                                    obj3.style = tmp18.badge;
                                    tmp64 = timestampProducer(native.TextBadge, obj3);
                                  }
                                  cResult[50] = tmp4;
                                  cResult[51] = tmp18.badge;
                                  cResult[52] = tmp64;
                                  tmp63 = tmp64;
                                }
                                let tmp61 = "new" === tmp4;
                                if (tmp61) {
                                  const obj4 = { text: null, style: null };
                                  const intl = util.intl;
                                  obj4.text = intl.string(util.t.y2b7CA);
                                  obj4.style = tmp18.badge;
                                  tmp61 = timestampProducer(native.TextBadge, obj4);
                                }
                                cResult[47] = tmp4;
                                cResult[48] = tmp18.badge;
                                cResult[49] = tmp61;
                                tmp60 = tmp61;
                              }
                            }
                            const obj5 = { style: tmp18.contentContainer, children: null };
                            const items1 = [tmp46, tmp50];
                            obj5.children = items1;
                            const tmp59 = React5(View, obj5);
                            cResult[43] = tmp18.contentContainer;
                            cResult[44] = tmp46;
                            cResult[45] = tmp50;
                            cResult[46] = tmp59;
                            tmp56 = tmp59;
                          }
                          const obj6 = {};
                          const merged = Object.assign(tmp6);
                          obj6.status = tmp10;
                          const tmp55 = timestampProducer(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj6);
                          cResult[40] = tmp6;
                          cResult[41] = tmp10;
                          cResult[42] = tmp55;
                          tmp50 = tmp55;
                        }
                      }
                      const obj7 = { style: tmp18.headerContainer, children: null };
                      const items2 = [tmp40, tmp43];
                      obj7.children = items2;
                      const tmp49 = React5(View, obj7);
                      cResult[36] = tmp18.headerContainer;
                      cResult[37] = tmp40;
                      cResult[38] = tmp43;
                      cResult[39] = tmp49;
                      tmp46 = tmp49;
                    }
                    const obj8 = { variant: str4, children: tmp5 };
                    const tmp45 = timestampProducer(Text_Text.Text, obj8);
                    cResult[33] = tmp5;
                    cResult[34] = str4;
                    cResult[35] = tmp45;
                    tmp43 = tmp45;
                  }
                }
                const obj9 = { color: str2, variant: str3, children: tmp13 };
                const tmp42 = timestampProducer(Text_Text.Text, obj9);
                cResult[29] = str2;
                cResult[30] = str3;
                cResult[31] = tmp13;
                cResult[32] = tmp42;
                tmp40 = tmp42;
              }
            }
            const obj10 = { style: tmp18.imageContainer, children: null };
            const items3 = [tmp28, tmp33];
            obj10.children = items3;
            const tmp39 = React5(View, obj10);
            cResult[25] = tmp18.imageContainer;
            cResult[26] = tmp28;
            cResult[27] = tmp33;
            cResult[28] = tmp39;
            tmp36 = tmp39;
          }
          const obj11 = { colors: tmp24, style: tmp18.gradient };
          const tmp35 = timestampProducer(LinearGradientDefault, obj11);
          cResult[22] = tmp24;
          cResult[23] = tmp18.gradient;
          cResult[24] = tmp35;
          tmp33 = tmp35;
        }
      }
      let tmp31Result = tmp9;
      if (tmp9 == null) {
        let str = tmp7;
        if (tmp7 == null) {
          str = "";
        }
        const obj12 = { imageUrl: str, isAnimated: tmp17 };
        tmp31Result = timestampProducer(GuildPowerupsImageDefault, obj12);
        const tmp19Result = GuildPowerupsImageDefault;
      }
      cResult[18] = tmp7;
      cResult[19] = tmp17;
      cResult[20] = tmp9;
      cResult[21] = tmp31Result;
      tmp28 = tmp31Result;
    }
    const items4 = [tmp18.container, tmp11];
    cResult[15] = tmp11;
    cResult[16] = tmp18.container;
    cResult[17] = items4;
    tmp27 = items4;
  }
  const tmpResult2 = ManaTypeConsolidationExperiment;
}) : (function GuildPowerupsPerkCard(arg0) {
  ({ imageUrl, isImageAnimated } = arg0);
  ({ title, description } = arg0);
  if (isImageAnimated === undefined) {
    isImageAnimated = true;
  }
  ({ riveComponent, status, badge } = arg0);
  ({ style, onPress } = arg0);
  const merged = Object.assign(arg0, Object.assign({ title: 0, description: 0, imageUrl: 0, isImageAnimated: 0, riveComponent: 0, style: 0, onPress: 0, status: 0, badge: 0 }));
  const tmp2 = closure_8();
  const tmp5 = useThemeDefault();
  const isThemeDarkResult = shared.isThemeDark(tmp5);
  const manaTypeConsolidationExperiment = ManaTypeConsolidationExperiment.useManaTypeConsolidationExperiment("GuildPowerupsPerkCard");
  const obj3 = { containerStyle: null, style: tmp2.card, status, onPress, children: null };
  const items = [tmp2.container, style];
  obj3.containerStyle = items;
  const obj4 = { style: tmp2.imageContainer, children: null };
  const tmp9 = isThemeDarkResult ? ["#0f101100", "#0f101166"] : ["#0f101100", "#0f10111a"];
  if (riveComponent == null) {
    if (imageUrl == null) {
      imageUrl = "";
    }
    const obj5 = { imageUrl, isAnimated: isImageAnimated };
    riveComponent = timestampProducer(GuildPowerupsImageDefault, obj5);
    const tmp3Result2 = GuildPowerupsImageDefault;
  }
  const items1 = [riveComponent, timestampProducer(LinearGradientDefault, { colors: tmp9, style: tmp2.gradient })];
  obj4.children = items1;
  const items2 = [React5(View, obj4), , , ];
  const obj7 = { style: tmp2.contentContainer, children: null };
  const obj8 = { style: tmp2.headerContainer, children: null };
  let str;
  if (manaTypeConsolidationExperiment) {
    str = "text-strong";
  }
  const obj9 = { color: str, variant: null, children: null };
  let str2 = "heading-md/bold";
  if (manaTypeConsolidationExperiment) {
    str2 = "experimental/heading-md/semibold";
  }
  obj9.variant = str2;
  obj9.children = title;
  const items3 = [timestampProducer(Text_Text.Text, obj9), ];
  let str3 = "text-sm/medium";
  if (manaTypeConsolidationExperiment) {
    str3 = "experimental/body-sm/normal";
  }
  items3[1] = timestampProducer(Text_Text.Text, { variant: str3, children: description });
  obj8.children = items3;
  const items4 = [React5(View, obj8), ];
  const obj10 = {};
  const merged1 = Object.assign(merged);
  obj10.status = status;
  items4[1] = timestampProducer(GuildPowerupsCardFooter.GuildPowerupsCardFooter, obj10);
  obj7.children = items4;
  items2[1] = React5(View, obj7);
  let tmp15Result = "new" === badge;
  if (tmp15Result) {
    const obj11 = { text: null, style: null };
    const intl = util.intl;
    obj11.text = intl.string(util.t.y2b7CA);
    obj11.style = tmp2.badge;
    tmp15Result = timestampProducer(native.TextBadge, obj11);
  }
  items2[2] = tmp15Result;
  let tmp15Result2 = "beta" === badge;
  if (tmp15Result2) {
    const obj12 = { text: null, color: null, style: null };
    const intl2 = util.intl;
    obj12.text = intl2.string(util.t.oW0eUd);
    obj12.color = native.BadgeColors.BRAND;
    obj12.style = tmp2.badge;
    tmp15Result2 = timestampProducer(native.TextBadge, obj12);
  }
  items2[3] = tmp15Result2;
  obj3.children = items2;
  return React5(GuildPowerupsCardDefault, obj3);
});