// discord_app/components_native/premium/PremiumTierCard.tsx
import nativeDefault from "../../../discord_common/js/packages/tokens/native.tsx";
import ConstantsIOS from "../../ConstantsIOS.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../_runtime/05388_LinearGradient.js";
import FastImageDefault from "../common/FastImage.tsx";
import Card from "../../design/components/Card/native/Card.native.tsx";
import _modDef7149 from "../../../_runtime/metro/07149__.js";
import _modDef7150 from "../../../_runtime/metro/07150__.js";
import _modDef8078 from "../../../_runtime/metro/08078__.js";
import _modDef10042 from "../../../_runtime/metro/10042__.js";
import _modDef13784 from "../../../_runtime/metro/13784__.js";
import _modDef13785 from "../../../_runtime/metro/13785__.js";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const getPremiumGradientColor = fn(7145).getPremiumGradientColor;
const PremiumTypes = fn(1392).PremiumTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, Fragment: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5091);
let obj2 = {
  header: { marginTop: 24, padding: 16 },
  textLogoTier0: { width: 158, height: 32 },
  textLogoTier1: { width: 185, height: 32 },
  textLogoTier2: { width: 80, height: 32 },
  wumpusLogo: { position: "absolute", top: 0, right: 24, zIndex: 1 },
  wumpusLogoTier0: { width: 83, height: 100 },
  wumpusLogoTier1: { width: 86, height: 100 },
  wumpusLogoTier2: { width: 133, height: 100 },
  body: {
    padding: 16,
    borderBottomRightRadius: nativeDefault.radii.xs,
    borderBottomLeftRadius: nativeDefault.radii.xs,
  },
};
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = {
  padding: 16,
  borderBottomRightRadius: nativeDefault.radii.xs,
  borderBottomLeftRadius: nativeDefault.radii.xs,
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumTierCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (premiumType) => {
      const cResult = premiumType(576).c(50);
      premiumType = premiumType.premiumType;
      ({ children, style } = premiumType);
      const tmp4 = closure_9();
      importDefault = tmp4;
      if (cResult[0] !== premiumType) {
        function getTextLogo() {
          if (PremiumTypes.TIER_0 === premiumType) {
            return _modDef13784;
          } else if (PremiumTypes.TIER_1 === premiumType) {
            return _modDef13785;
          } else if (PremiumTypes.TIER_2 === premiumType) {
            return _modDef8078;
          }
        }
        cResult[0] = premiumType;
        cResult[1] = getTextLogo;
        let tmp5 = getTextLogo;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== premiumType) {
        function getWumpus() {
          if (PremiumTypes.TIER_0 === premiumType) {
            return _modDef7149;
          } else if (PremiumTypes.TIER_1 === premiumType) {
            return _modDef7150;
          } else if (PremiumTypes.TIER_2 === premiumType) {
            return _modDef10042;
          }
        }
        cResult[2] = premiumType;
        cResult[3] = getWumpus;
        let tmp6 = getWumpus;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === premiumType) {
        if (cResult[5] === tmp4.textLogoTier0) {
          if (cResult[6] === tmp4.textLogoTier1) {
            if (cResult[7] === tmp4.textLogoTier2) {
              let tmp7 = cResult[8];
            }
            if (cResult[9] === premiumType) {
              if (cResult[10] === tmp4.wumpusLogoTier0) {
                if (cResult[11] === tmp4.wumpusLogoTier1) {
                  if (cResult[12] === tmp4.wumpusLogoTier2) {
                    let tmp8 = cResult[13];
                  }
                  if (cResult[14] !== premiumType) {
                    const tmp11 = getPremiumGradientColor(premiumType);
                    cResult[14] = premiumType;
                    cResult[15] = tmp11;
                    let tmp9 = tmp11;
                  } else {
                    tmp9 = cResult[15];
                  }
                  if (cResult[16] !== premiumType) {
                    const premiumTypeDisplayName = tmp(4728).getPremiumTypeDisplayName(premiumType);
                    cResult[16] = premiumType;
                    cResult[17] = premiumTypeDisplayName;
                    let tmp12 = premiumTypeDisplayName;
                    const tmpResult = tmp(4728);
                  } else {
                    tmp12 = cResult[17];
                  }
                  if (cResult[18] !== tmp7) {
                    const tmp7Result = tmp7();
                    cResult[18] = tmp7;
                    cResult[19] = tmp7Result;
                    let tmp14 = tmp7Result;
                  } else {
                    tmp14 = cResult[19];
                  }
                  if (cResult[20] !== tmp5) {
                    const tmp5Result = tmp5();
                    cResult[20] = tmp5;
                    cResult[21] = tmp5Result;
                    let tmp16 = tmp5Result;
                  } else {
                    tmp16 = cResult[21];
                  }
                  if (cResult[22] === tmp12) {
                    if (cResult[23] === tmp14) {
                      if (cResult[24] === tmp16) {
                        let tmp18 = cResult[25];
                      }
                      if (cResult[26] === tmp4.header) {
                        if (cResult[27] === tmp18) {
                          if (cResult[28] === tmp9) {
                            let tmp22 = cResult[29];
                          }
                          if (cResult[30] !== tmp8) {
                            const tmp8Result = tmp8();
                            cResult[30] = tmp8;
                            cResult[31] = tmp8Result;
                            let tmp27 = tmp8Result;
                          } else {
                            tmp27 = cResult[31];
                          }
                          if (cResult[32] === tmp4.wumpusLogo) {
                            if (cResult[33] === tmp27) {
                              let tmp29 = cResult[34];
                            }
                            if (cResult[35] !== tmp6) {
                              const tmp6Result = tmp6();
                              cResult[35] = tmp6;
                              cResult[36] = tmp6Result;
                              let tmp30 = tmp6Result;
                            } else {
                              tmp30 = cResult[36];
                            }
                            if (cResult[37] === tmp29) {
                              if (cResult[38] === tmp30) {
                                let tmp32 = cResult[39];
                              }
                              if (cResult[40] === children) {
                                if (cResult[41] === tmp4.body) {
                                  let tmp36 = cResult[42];
                                }
                                if (cResult[43] === tmp22) {
                                  if (cResult[44] === tmp32) {
                                    if (cResult[45] === tmp36) {
                                      let tmp40 = cResult[46];
                                    }
                                    if (cResult[47] === tmp40) {
                                      if (cResult[48] === style) {
                                        let tmp44 = cResult[49];
                                      }
                                      return tmp44;
                                    }
                                    const obj2 = { variant: "surface-high", style, children: tmp40 };
                                    const tmp46 = closure_6(tmp(6188).Card, obj2);
                                    cResult[47] = tmp40;
                                    cResult[48] = style;
                                    cResult[49] = tmp46;
                                    tmp44 = tmp46;
                                  }
                                }
                                const obj3 = { children: null };
                                const items = [tmp22, tmp32, tmp36];
                                obj3.children = items;
                                const tmp43 = closure_8(closure_7, obj3);
                                cResult[43] = tmp22;
                                cResult[44] = tmp32;
                                cResult[45] = tmp36;
                                cResult[46] = tmp43;
                                tmp40 = tmp43;
                              }
                              const obj4 = { style: tmp4.body, children };
                              const tmp39 = closure_6(View, obj4);
                              cResult[40] = children;
                              cResult[41] = tmp4.body;
                              cResult[42] = tmp39;
                              tmp36 = tmp39;
                            }
                            const obj5 = {
                              accessible: false,
                              importantForAccessibility: "no",
                              style: tmp29,
                              source: tmp30,
                            };
                            const tmp35 = closure_6(FastImageDefault, obj5);
                            cResult[37] = tmp29;
                            cResult[38] = tmp30;
                            cResult[39] = tmp35;
                            tmp32 = tmp35;
                          }
                          const items1 = [tmp4.wumpusLogo, tmp27];
                          cResult[32] = tmp4.wumpusLogo;
                          cResult[33] = tmp27;
                          cResult[34] = items1;
                          tmp29 = items1;
                        }
                      }
                      const obj6 = {
                        style: tmp4.header,
                        start: tmp(1105).HorizontalGradient.START,
                        end: tmp(1105).HorizontalGradient.END,
                        colors: tmp9,
                        children: tmp18,
                      };
                      const tmp26 = closure_6(LinearGradientDefault, obj6);
                      cResult[26] = tmp4.header;
                      cResult[27] = tmp18;
                      cResult[28] = tmp9;
                      cResult[29] = tmp26;
                      tmp22 = tmp26;
                    }
                  }
                  const obj7 = {
                    accessible: true,
                    accessibilityLabel: tmp12,
                    accessibilityRole: "header",
                    style: tmp14,
                    source: tmp16,
                  };
                  const tmp21 = closure_6(FastImageDefault, obj7);
                  cResult[22] = tmp12;
                  cResult[23] = tmp14;
                  cResult[24] = tmp16;
                  cResult[25] = tmp21;
                  tmp18 = tmp21;
                }
              }
            }
            function getWumpusStyles() {
              if (PremiumTypes.TIER_0 === premiumType) {
                return closure_1.wumpusLogoTier0;
              } else if (PremiumTypes.TIER_1 === premiumType) {
                return closure_1.wumpusLogoTier1;
              } else if (PremiumTypes.TIER_2 === premiumType) {
                return closure_1.wumpusLogoTier2;
              }
            }
            cResult[9] = premiumType;
            cResult[10] = tmp4.wumpusLogoTier0;
            cResult[11] = tmp4.wumpusLogoTier1;
            cResult[12] = tmp4.wumpusLogoTier2;
            cResult[13] = getWumpusStyles;
            tmp8 = getWumpusStyles;
          }
        }
      }
      function getTextLogoStyles() {
        if (PremiumTypes.TIER_0 === premiumType) {
          return closure_1.textLogoTier0;
        } else if (PremiumTypes.TIER_1 === premiumType) {
          return closure_1.textLogoTier1;
        } else if (PremiumTypes.TIER_2 === premiumType) {
          return closure_1.textLogoTier2;
        }
      }
      cResult[4] = premiumType;
      cResult[5] = tmp4.textLogoTier0;
      cResult[6] = tmp4.textLogoTier1;
      cResult[7] = tmp4.textLogoTier2;
      cResult[8] = getTextLogoStyles;
      tmp7 = getTextLogoStyles;
      const obj = premiumType(576);
    }
  : (premiumType) => {
      premiumType = premiumType.premiumType;
      ({ children, style } = premiumType);
      const tmp = closure_9();
      const obj = {
        style: tmp.header,
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        colors: getPremiumGradientColor(premiumType),
        children: null,
      };
      const obj2 = {
        accessible: true,
        accessibilityLabel: null,
        accessibilityRole: "header",
        style: null,
        source: null,
      };
      const tmp7 = LinearGradientDefault;
      const tmp9 = FastImageDefault;
      obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
      if (PremiumTypes.TIER_0 === premiumType) {
        let textLogoTier2 = tmp.textLogoTier0;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        textLogoTier2 = tmp.textLogoTier1;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        textLogoTier2 = tmp.textLogoTier2;
      }
      obj2.style = textLogoTier2;
      if (PremiumTypes.TIER_0 === premiumType) {
        let tmp5Result = _modDef13784;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        tmp5Result = _modDef13785;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        tmp5Result = _modDef8078;
      }
      obj2.source = tmp5Result;
      obj.children = timestampProducer(tmp9, obj2);
      const items = [timestampProducer(tmp7, obj), ,];
      const items1 = [tmp.wumpusLogo];
      if (PremiumTypes.TIER_0 === premiumType) {
        let wumpusLogoTier2 = tmp.wumpusLogoTier0;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        wumpusLogoTier2 = tmp.wumpusLogoTier1;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        wumpusLogoTier2 = tmp.wumpusLogoTier2;
      }
      const obj4 = { accessible: false, importantForAccessibility: "no", style: items1, source: null };
      items1[1] = wumpusLogoTier2;
      if (PremiumTypes.TIER_0 === premiumType) {
        let tmp5Result4 = _modDef7149;
      } else if (PremiumTypes.TIER_1 === premiumType) {
        tmp5Result4 = _modDef7150;
      } else if (PremiumTypes.TIER_2 === premiumType) {
        tmp5Result4 = _modDef10042;
      }
      const obj5 = { children: null };
      obj4.source = tmp5Result4;
      items[1] = timestampProducer(FastImageDefault, obj4);
      items[2] = timestampProducer(View, { style: tmp.body, children });
      obj5.children = items;
      const children1 = closure_1_8(React5, obj5);
      return timestampProducer(Card.Card, { variant: "surface-high", style, children: children1 });
    };
