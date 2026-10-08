// discord_app/modules/premium/native/PremiumPlanActionSheetHeader.tsx
import ConstantsIOS from "../../../ConstantsIOS.tsx";
import PremiumUtils from "../../../utils/PremiumUtils.tsx";
import LinearGradientDefault from "../../../../_runtime/05387_LinearGradient.js";
import FastImageDefault from "../../../components_native/common/FastImage.tsx";
import _modDef7141 from "../../../../_runtime/metro/07141__.js";
import _modDef7142 from "../../../../_runtime/metro/07142__.js";
import _modDef7143 from "../../../../_runtime/metro/07143__.js";
import _modDef7144 from "../../../../_runtime/metro/07144__.js";
import _modDef7145 from "../../../../_runtime/metro/07145__.js";
import _modDef7146 from "../../../../_runtime/metro/07146__.js";
import _modDef7147 from "../../../../_runtime/metro/07147__.js";
import _modDef7148 from "../../../../_runtime/metro/07148__.js";
import PremiumPill from "../../user_settings/premium/native/PremiumPill.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const PremiumUtilsDefault = PremiumUtils;

require = fn;
const View = fn(17).View;
const PremiumConstants = fn(1391);
({ PremiumTypes: closure_4, SubscriptionIntervalTypes: hasOwnProperty } = PremiumConstants);
const getPremiumGradientColor = fn(7140).getPremiumGradientColor;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  header: { height: 112, justifyContent: "center", alignItems: "center" },
  logoContainer: { position: "absolute", top: 16, left: 16 },
  imgWumpus: { position: "absolute", height: 90 },
  imgWumpusRight: null,
  imgWumpusBottom: { bottom: 0 },
  discountPill: { marginTop: 10 },
};
let obj3 = { transform: null };
let items = [{ scaleX: -1 }];
obj3.transform = items;
obj2.imgWumpusRight = obj3;
let closure_9 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/premium/native/PremiumPlanActionSheetHeader.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumPlanActionSheetHeader(premiumType) {
      const cResult = premiumType(576).c(58);
      premiumType = premiumType.premiumType;
      ({ trialOffer, discountOffer } = premiumType);
      const tmp4 = closure_9();
      importDefault = tmp4;
      if (cResult[0] !== premiumType) {
        function getLogo() {
          if (React4.TIER_0 === premiumType) {
            return _modDef7141;
          } else if (React4.TIER_1 === premiumType) {
            return _modDef7142;
          } else if (React4.TIER_2 === premiumType) {
            return _modDef7143;
          }
        }
        cResult[0] = premiumType;
        cResult[1] = getLogo;
        let tmp5 = getLogo;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] !== premiumType) {
        function getWumpus() {
          if (React4.TIER_0 === premiumType) {
            return _modDef7144;
          } else if (React4.TIER_1 === premiumType) {
            return _modDef7145;
          } else if (React4.TIER_2 === premiumType) {
            return _modDef7146;
          }
        }
        cResult[2] = premiumType;
        cResult[3] = getWumpus;
        let tmp6 = getWumpus;
      } else {
        tmp6 = cResult[3];
      }
      if (cResult[4] === premiumType) {
        if (cResult[5] === tmp4.imgWumpusBottom) {
          if (cResult[6] === tmp4.imgWumpusRight) {
            let tmp7 = cResult[7];
          }
          if (cResult[8] !== premiumType) {
            function getClouds() {
              if (React4.TIER_0 === premiumType) {
                return _modDef7147;
              } else if (React4.TIER_1 === premiumType) {
                return null;
              } else if (React4.TIER_2 === premiumType) {
                return _modDef7148;
              }
            }
            cResult[8] = premiumType;
            cResult[9] = getClouds;
            let tmp8 = getClouds;
          } else {
            tmp8 = cResult[9];
          }
          if (cResult[10] === premiumType) {
            if (cResult[11] === trialOffer) {
              let tmp9 = cResult[12];
            }
            if (cResult[13] === discountOffer) {
              if (cResult[14] === premiumType) {
                let tmp14 = cResult[15];
              }
              if (cResult[16] !== premiumType) {
                const tmp23 = getPremiumGradientColor(premiumType);
                cResult[16] = premiumType;
                cResult[17] = tmp23;
                let tmp21 = tmp23;
              } else {
                tmp21 = cResult[17];
              }
              if (cResult[18] !== premiumType) {
                const premiumTypeDisplayName = tmp(4726).getPremiumTypeDisplayName(premiumType);
                cResult[18] = premiumType;
                cResult[19] = premiumTypeDisplayName;
                let tmp24 = premiumTypeDisplayName;
                const tmpResult = tmp(4726);
              } else {
                tmp24 = cResult[19];
              }
              if (cResult[20] !== tmp8) {
                let tmp8Result = tmp8();
                if (tmp8Result) {
                  const obj3 = { source: tmp8() };
                  tmp8Result = closure_7(FastImageDefault, obj3);
                }
                cResult[20] = tmp8;
                cResult[21] = tmp8Result;
                let tmp26 = tmp8Result;
              } else {
                tmp26 = cResult[21];
              }
              if (cResult[22] !== tmp5) {
                const tmp5Result = tmp5();
                cResult[22] = tmp5;
                cResult[23] = tmp5Result;
                let tmp31 = tmp5Result;
              } else {
                tmp31 = cResult[23];
              }
              if (cResult[24] !== tmp31) {
                const obj4 = { source: tmp31, resizeMode: "contain" };
                const tmp36 = closure_7(FastImageDefault, obj4);
                cResult[24] = tmp31;
                cResult[25] = tmp36;
                let tmp33 = tmp36;
              } else {
                tmp33 = cResult[25];
              }
              if (cResult[26] === tmp9) {
                if (cResult[27] === premiumType) {
                  if (cResult[28] === tmp4.discountPill) {
                    if (cResult[29] === trialOffer) {
                      let tmp37 = cResult[30];
                    }
                    if (cResult[31] === discountOffer) {
                      if (cResult[32] === tmp14) {
                        if (cResult[33] === premiumType) {
                          if (cResult[34] === tmp4.discountPill) {
                            let tmp40 = cResult[35];
                          }
                          if (cResult[36] === tmp4.logoContainer) {
                            if (cResult[37] === tmp33) {
                              if (cResult[38] === tmp37) {
                                if (cResult[39] === tmp40) {
                                  let tmp43 = cResult[40];
                                }
                                if (cResult[41] !== tmp6) {
                                  const tmp6Result = tmp6();
                                  cResult[41] = tmp6;
                                  cResult[42] = tmp6Result;
                                  let tmp47 = tmp6Result;
                                } else {
                                  tmp47 = cResult[42];
                                }
                                if (cResult[43] !== tmp7) {
                                  const tmp7Result = tmp7();
                                  cResult[43] = tmp7;
                                  cResult[44] = tmp7Result;
                                  let tmp49 = tmp7Result;
                                } else {
                                  tmp49 = cResult[44];
                                }
                                if (cResult[45] === tmp4.imgWumpus) {
                                  if (cResult[46] === tmp49) {
                                    let tmp51 = cResult[47];
                                  }
                                  if (cResult[48] === tmp47) {
                                    if (cResult[49] === tmp51) {
                                      let tmp52 = cResult[50];
                                    }
                                    if (cResult[51] === tmp4.header) {
                                      if (cResult[52] === tmp26) {
                                        if (cResult[53] === tmp43) {
                                          if (cResult[54] === tmp52) {
                                            if (cResult[55] === tmp21) {
                                              if (cResult[56] === tmp24) {
                                                let tmp56 = cResult[57];
                                              }
                                              return tmp56;
                                            }
                                          }
                                        }
                                      }
                                    }
                                    const obj5 = {
                                      style: tmp4.header,
                                      colors: tmp21,
                                      start: tmp(1105).HorizontalGradient.START,
                                      end: tmp(1105).HorizontalGradient.END,
                                      accessible: true,
                                      accessibilityRole: "header",
                                      accessibilityLabel: tmp24,
                                      children: null,
                                    };
                                    const items = [tmp26, tmp43, tmp52];
                                    obj5.children = items;
                                    const tmp60 = closure_8(LinearGradientDefault, obj5);
                                    cResult[51] = tmp4.header;
                                    cResult[52] = tmp26;
                                    cResult[53] = tmp43;
                                    cResult[54] = tmp52;
                                    cResult[55] = tmp21;
                                    cResult[56] = tmp24;
                                    cResult[57] = tmp60;
                                    tmp56 = tmp60;
                                  }
                                  const obj6 = { source: tmp47, style: tmp51, resizeMode: "contain" };
                                  const tmp55 = closure_7(FastImageDefault, obj6);
                                  cResult[48] = tmp47;
                                  cResult[49] = tmp51;
                                  cResult[50] = tmp55;
                                  tmp52 = tmp55;
                                }
                                const items1 = [tmp4.imgWumpus, tmp49];
                                cResult[45] = tmp4.imgWumpus;
                                cResult[46] = tmp49;
                                cResult[47] = items1;
                                tmp51 = items1;
                              }
                            }
                          }
                          const obj7 = { style: tmp4.logoContainer, children: null };
                          const items2 = [tmp33, tmp37, tmp40];
                          obj7.children = items2;
                          const tmp46 = closure_8(View, obj7);
                          cResult[36] = tmp4.logoContainer;
                          cResult[37] = tmp33;
                          cResult[38] = tmp37;
                          cResult[39] = tmp40;
                          cResult[40] = tmp46;
                          tmp43 = tmp46;
                        }
                      }
                    }
                    let tmp41 = null;
                    if (tmp14) {
                      const obj8 = {
                        style: tmp4.discountPill,
                        discountOffer,
                        premiumType,
                        shouldShowDiscountUpsell: true,
                        useWhiteBackground: true,
                      };
                      tmp41 = closure_7(tmp(7149).PremiumPill, obj8);
                    }
                    cResult[31] = discountOffer;
                    cResult[32] = tmp14;
                    cResult[33] = premiumType;
                    cResult[34] = tmp4.discountPill;
                    cResult[35] = tmp41;
                    tmp40 = tmp41;
                  }
                }
              }
              let tmp38 = null;
              if (tmp9) {
                const obj9 = {
                  style: tmp4.discountPill,
                  trialOffer,
                  premiumType,
                  useWhiteBackground: true,
                  hideTrialCountdown: true,
                };
                tmp38 = closure_7(tmp(7149).PremiumPill, obj9);
              }
              cResult[26] = tmp9;
              cResult[27] = premiumType;
              cResult[28] = tmp4.discountPill;
              cResult[29] = trialOffer;
              cResult[30] = tmp38;
              tmp37 = tmp38;
            }
            tmp(4726);
            let tmp19 = null != discountOffer;
            if (tmp19) {
              const discount = discountOffer.discount;
              let hasItem;
              if (discount != null) {
                const planIds = discount.planIds;
                hasItem = planIds.includes(tmp17);
              }
              tmp19 = hasItem;
            }
            cResult[13] = discountOffer;
            cResult[14] = premiumType;
            cResult[15] = tmp19;
            tmp14 = tmp19;
          }
          let tmp11 = null != trialOffer;
          if (tmp11) {
            const subscriptionTrial = trialOffer.subscriptionTrial;
            let skuId;
            if (subscriptionTrial != null) {
              skuId = subscriptionTrial.skuId;
            }
            tmp11 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
          }
          cResult[10] = premiumType;
          cResult[11] = trialOffer;
          cResult[12] = tmp11;
          tmp9 = tmp11;
        }
      }
      function getWumpusStyles() {
        if (React4.TIER_0 !== premiumType) {
          if (React4.TIER_1 !== premiumType) {
            if (React4.TIER_2 === premiumType) {
              return closure_1.imgWumpusRight;
            }
          }
        }
        return closure_1.imgWumpusBottom;
      }
      cResult[4] = premiumType;
      cResult[5] = tmp4.imgWumpusBottom;
      cResult[6] = tmp4.imgWumpusRight;
      cResult[7] = getWumpusStyles;
      tmp7 = getWumpusStyles;
      const obj = premiumType(576);
    }
  : function PremiumPlanActionSheetHeader(arg0) {
      ({ premiumType, trialOffer, discountOffer } = arg0);
      const tmp = closure_9();
      let tmp2 = null != trialOffer;
      if (tmp2) {
        const subscriptionTrial = trialOffer.subscriptionTrial;
        let skuId;
        if (subscriptionTrial != null) {
          skuId = subscriptionTrial.skuId;
        }
        tmp2 = skuId === PremiumUtilsDefault.getSkuIdForPremiumType(premiumType);
      }
      PremiumUtils;
      let tmp10 = null != discountOffer;
      if (tmp10) {
        const discount = discountOffer.discount;
        let hasItem;
        if (discount != null) {
          const planIds = discount.planIds;
          hasItem = planIds.includes(tmp9);
        }
        tmp10 = hasItem;
      }
      const obj2 = {
        style: tmp.header,
        colors: getPremiumGradientColor(premiumType),
        start: ConstantsIOS.HorizontalGradient.START,
        end: ConstantsIOS.HorizontalGradient.END,
        accessible: true,
        accessibilityRole: "header",
        accessibilityLabel: null,
        children: null,
      };
      const tmp14 = LinearGradientDefault;
      obj2.accessibilityLabel = PremiumUtils.getPremiumTypeDisplayName(premiumType);
      if (React4.TIER_0 === premiumType) {
        let tmp13Result = _modDef7147;
      } else {
        tmp13Result = null;
        if (React4.TIER_1 !== premiumType) {
          if (React4.TIER_2 === premiumType) {
            tmp13Result = _modDef7148;
          }
        }
      }
      if (!tmp13Result) {
        const items = [tmp13Result, ,];
        const obj3 = { style: tmp.logoContainer, children: null };
        if (React4.TIER_0 === premiumType) {
          let tmp13Result8 = _modDef7141;
        } else if (React4.TIER_1 === premiumType) {
          tmp13Result8 = _modDef7142;
        } else if (React4.TIER_2 === premiumType) {
          tmp13Result8 = _modDef7143;
        }
        const obj4 = { source: tmp13Result8, resizeMode: "contain" };
        const items1 = [React5(FastImageDefault, obj4), ,];
        let tmp22Result = null;
        if (tmp2) {
          const obj5 = {
            style: tmp.discountPill,
            trialOffer,
            premiumType,
            useWhiteBackground: true,
            hideTrialCountdown: true,
          };
          tmp22Result = React5(PremiumPill.PremiumPill, obj5);
        }
        items1[1] = tmp22Result;
        let tmp22Result2 = null;
        if (tmp10) {
          const obj6 = {
            style: tmp.discountPill,
            discountOffer,
            premiumType,
            shouldShowDiscountUpsell: true,
            useWhiteBackground: true,
          };
          tmp22Result2 = React5(PremiumPill.PremiumPill, obj6);
        }
        items1[2] = tmp22Result2;
        obj3.children = items1;
        items[1] = closure_1_8(View, obj3);
        const tmp13Result7 = FastImageDefault;
        if (React4.TIER_0 === premiumType) {
          let tmp13Result10 = _modDef7144;
        } else if (React4.TIER_1 === premiumType) {
          tmp13Result10 = _modDef7145;
        } else if (React4.TIER_2 === premiumType) {
          tmp13Result10 = _modDef7146;
        }
        const obj7 = { source: tmp13Result10, style: null, resizeMode: "contain" };
        const items2 = [tmp.imgWumpus];
        if (React4.TIER_0 !== premiumType) {
          if (React4.TIER_1 !== premiumType) {
            if (React4.TIER_2 === premiumType) {
              let imgWumpusBottom = tmp.imgWumpusRight;
            }
          }
          items2[1] = imgWumpusBottom;
          obj7.style = items2;
          items[2] = React5(tmp13Result9, obj7);
          obj2.children = items;
          return closure_1_8(tmp14, obj2);
        }
        imgWumpusBottom = tmp.imgWumpusBottom;
        tmp13Result9 = FastImageDefault;
      } else {
        if (React4.TIER_0 === premiumType) {
          let tmp13Result12 = _modDef7147;
        } else {
          tmp13Result12 = null;
          if (React4.TIER_1 !== premiumType) {
            if (React4.TIER_2 === premiumType) {
              tmp13Result12 = _modDef7148;
            }
          }
        }
        const obj8 = { source: tmp13Result12 };
        React5(FastImageDefault, obj8);
        const tmp13Result11 = FastImageDefault;
      }
      const tmp6Result = PremiumUtils;
    };
