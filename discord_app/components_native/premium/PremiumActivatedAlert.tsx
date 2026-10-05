// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import react2 from "../../../_runtime/00576_react.js";
import Constants from "../../Constants.tsx";
import intl4 from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import shared from "../../design/shared.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import LegacyTokens from "../../design/migrations/native/LegacyTokens.tsx";
import AlertDefault from "../common/Alert.tsx";
import AssetRegistryDefault from "../../../_runtime/06942_AssetRegistry.js";
import AssetRegistryDefault2 from "../../../_runtime/06943_AssetRegistry.js";
import AssetRegistryDefault3 from "../../../_runtime/07738_AssetRegistry.js";
import AssetRegistryDefault4 from "../../../_runtime/10442_AssetRegistry.js";
import AssetRegistryDefault5 from "../../../_runtime/10443_AssetRegistry.js";
import AssetRegistryDefault6 from "../../../_runtime/10444_AssetRegistry.js";
import AssetRegistryDefault7 from "../../../_runtime/10445_AssetRegistry.js";
import AssetRegistryDefault8 from "../../../_runtime/10446_AssetRegistry.js";
import AssetRegistryDefault9 from "../../../_runtime/10447_AssetRegistry.js";
import AssetRegistryDefault10 from "../../../_runtime/10448_AssetRegistry.js";
import AssetRegistryDefault11 from "../../../_runtime/10449_AssetRegistry.js";
import AssetRegistryDefault12 from "../../../_runtime/10450_AssetRegistry.js";
import AssetRegistryDefault13 from "../../../_runtime/10451_AssetRegistry.js";
import AssetRegistryDefault14 from "../../../_runtime/10452_AssetRegistry.js";
import AssetRegistryDefault15 from "../../../_runtime/10453_AssetRegistry.js";
import AssetRegistryDefault16 from "../../../_runtime/10454_AssetRegistry.js";
import AssetRegistryDefault17 from "../../../_runtime/10455_AssetRegistry.js";
import AssetRegistryDefault18 from "../../../_runtime/10456_AssetRegistry.js";
import AssetRegistryDefault19 from "../../../_runtime/10457_AssetRegistry.js";
import AssetRegistryDefault20 from "../../../_runtime/10458_AssetRegistry.js";
import AssetRegistryDefault21 from "../../../_runtime/10459_AssetRegistry.js";
import AssetRegistryDefault22 from "../../../_runtime/10460_AssetRegistry.js";
import AssetRegistryDefault23 from "../../../_runtime/10461_AssetRegistry.js";
import AssetRegistryDefault24 from "../../../_runtime/10462_AssetRegistry.js";
import ShineAnimationDefault from "ShineAnimation.tsx";
import react from "../../../_runtime/00019_react.js";
import react_native from "../../../_runtime/00017_react-native.js";
import Fragment from "../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let obj2;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    let tmp10Result;
    const tmpResult = shared;
    if (tmpResult.isThemeDark(arg1)) {
      tmp10Result = AssetRegistryDefault15;
    } else {
      tmp10Result = AssetRegistryDefault16;
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    let tmp8Result;
    const tmpResult4 = shared;
    if (tmpResult4.isThemeDark(arg1)) {
      tmp8Result = AssetRegistryDefault17;
    } else {
      tmp8Result = AssetRegistryDefault18;
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    let tmp6Result;
    const tmpResult5 = shared;
    if (tmpResult5.isThemeDark(arg1)) {
      tmp6Result = AssetRegistryDefault19;
    } else {
      tmp6Result = AssetRegistryDefault20;
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    let tmp4Result;
    const tmpResult6 = shared;
    if (tmpResult6.isThemeDark(arg1)) {
      tmp4Result = AssetRegistryDefault21;
    } else {
      tmp4Result = AssetRegistryDefault22;
    }
    return tmp4Result;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === cResult) {
    return AssetRegistryDefault23;
  }
}
function getDescription(arg0, arg1) {
  let obj2;
  let tmpResult;
  if (PremiumUtils.Branding.TIER_0 !== arg0) {
    if (PremiumUtils.Branding.TIER_1 !== arg0) {
      if (PremiumUtils.Branding.TIER_2 === arg0) {
        const intl2 = intl4.intl;
        return intl2.string(intl4.t.aTUr3Z);
      } else {
        const intl = intl4.intl;
        const format = intl.format;
        const obj = { planName: tmpResult.getExternalPlanDisplayName(obj2) };
        const YJUUH3 = intl4.t.YJUUH3;
        obj2 = { planId: null, additionalPlans: null };
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        tmpResult = PremiumUtils;
        return format(YJUUH3, obj);
      }
    }
  }
  const intl3 = intl4.intl;
  return intl3.string(intl4.t.knvOVz);
}
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = react_native);
const SubscriptionStatusTypes = Constants.SubscriptionStatusTypes;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  alert: { overflow: "hidden", paddingBottom: 24 },
  header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" },
  headerImage: { position: "absolute", left: "50%" },
  body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" },
  logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 },
  description: obj2,
};
obj2 = {
  fontSize: 14,
  lineHeight: 16,
  textAlign: "center",
  marginTop: 20,
  color: LegacyTokens.DARK_PRIMARY_300_LIGHT_PRIMARY_400,
};
let closure_9 = createStyles.createStyles(obj);
createStyles = createStyles_mod;
let closure_10 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    return { headerImage: { marginLeft: -27, width: 88, top: 18 } };
  } else if (PremiumUtils.Branding.TIER_1 === arg0) {
    return { headerImage: { marginLeft: -27, width: 87, top: 18 } };
  } else if (PremiumUtils.Branding.BUNDLE === arg0) {
    return { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
  } else if (PremiumUtils.Branding.TIER_2 === arg0) {
    return { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
    return { headerImage: { marginLeft: -54, width: 140, top: 18 } };
  }
});
createStyles = createStyles_mod;
let closure_11 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    return { animation: { borderRadius: 6 } };
  } else {
    if (PremiumUtils.Branding.TIER_0 !== arg0) {
      if (PremiumUtils.Branding.TIER_1 !== arg0) {
        if (PremiumUtils.Branding.TIER_2 !== arg0) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
            return { animation: { borderRadius: 9 } };
          }
        }
      }
    }
    return { animation: { borderRadius: 5 } };
  }
});
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let _alert;
      let header;
      let items;
      let items1;
      let items2;
      let onClose;
      let subscription;
      let tmp11;
      let tmp14;
      let tmp16;
      let tmp18;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(48);
      ({ subscription, onClose } = arg0);
      const tmp4 = closure_9();
      let renewalMutations = subscription;
      if (null != subscription.renewalMutations) {
        const _Object = Object;
        renewalMutations = subscription;
        if (0 !== Object.keys(subscription.renewalMutations).length) {
          renewalMutations = subscription;
          if (subscription.renewalMutations.paymentGatewayPlanId !== subscription.paymentGatewayPlanId) {
            renewalMutations = subscription;
            if (subscription.status !== SubscriptionStatusTypes.CANCELED) {
              renewalMutations = subscription.renewalMutations;
            }
          }
        }
      }
      const tmp8 = useThemeDefault();
      if (cResult[0] !== renewalMutations) {
        const tmpResult = PremiumUtils;
        const premiumBranding = tmpResult.getPremiumBranding(renewalMutations);
        cResult[0] = renewalMutations;
        cResult[1] = premiumBranding;
        tmp9 = premiumBranding;
      } else {
        tmp9 = cResult[1];
      }
      if (PremiumUtils.Branding.TIER_0 === tmp9) {
        tmp11 = { logo: { width: 82, height: 44 } };
        const obj2 = { logo: { width: 82, height: 44 } };
      } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
        tmp11 = { logo: { width: 82, height: 32 } };
        const obj3 = { logo: { width: 82, height: 32 } };
      } else {
        if (PremiumUtils.Branding.BUNDLE !== tmp9) {
          if (PremiumUtils.Branding.TIER_2 !== tmp9) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              tmp11 = { logo: { width: 82, height: 18 } };
              const obj4 = { logo: { width: 82, height: 18 } };
            }
          }
        }
        tmp11 = { logo: { width: 79, height: 32 } };
        const obj5 = { logo: { width: 79, height: 32 } };
      }
      const tmp12 = closure_10(tmp9);
      const tmp13 = closure_11(tmp9);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl4.intl;
        const stringResult = intl.string(intl4.t.TkTvBz);
        cResult[2] = stringResult;
        tmp14 = stringResult;
      } else {
        tmp14 = cResult[2];
      }
      ({ alert: _alert, header } = tmp4);
      if (cResult[3] !== tmp9) {
        let tmp7Result;
        if (PremiumUtils.Branding.TIER_0 === tmp9) {
          tmp7Result = AssetRegistryDefault4;
        } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
          tmp7Result = AssetRegistryDefault5;
        } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
          tmp7Result = AssetRegistryDefault6;
        } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
          tmp7Result = AssetRegistryDefault7;
        } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
          tmp7Result = AssetRegistryDefault8;
        }
        cResult[3] = tmp9;
        cResult[4] = tmp7Result;
        tmp16 = tmp7Result;
      } else {
        tmp16 = cResult[4];
      }
      if (cResult[5] !== tmp9) {
        let tmp7Result3;
        if (PremiumUtils.Branding.TIER_0 === tmp9) {
          tmp7Result3 = AssetRegistryDefault12;
        } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
          tmp7Result3 = AssetRegistryDefault13;
        } else {
          if (PremiumUtils.Branding.BUNDLE !== tmp9) {
            if (PremiumUtils.Branding.TIER_2 !== tmp9) {
              if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                tmp7Result3 = AssetRegistryDefault14;
              }
            }
          }
          tmp7Result3 = AssetRegistryDefault3;
        }
        cResult[5] = tmp9;
        cResult[6] = tmp7Result3;
        tmp18 = tmp7Result3;
      } else {
        tmp18 = cResult[6];
      }
      if (cResult[7] === tmp11.logo) {
        let tmp20;
        if (cResult[8] === tmp18) {
          tmp20 = cResult[9];
        }
        if (cResult[10] === tmp9) {
          let tmp22;
          let tmp26;
          if (cResult[11] === tmp4.logoPlusPremiumGuild) {
            tmp22 = cResult[12];
          }
          if (cResult[13] !== tmp9) {
            let tmp7Result4;
            if (PremiumUtils.Branding.TIER_0 === tmp9) {
              tmp7Result4 = AssetRegistryDefault;
            } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
              tmp7Result4 = AssetRegistryDefault2;
            } else if (PremiumUtils.Branding.TIER_2 === tmp9) {
              tmp7Result4 = AssetRegistryDefault9;
            } else if (PremiumUtils.Branding.BUNDLE === tmp9) {
              tmp7Result4 = AssetRegistryDefault10;
            } else if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              tmp7Result4 = AssetRegistryDefault11;
            }
            cResult[13] = tmp9;
            cResult[14] = tmp7Result4;
            tmp26 = tmp7Result4;
          } else {
            tmp26 = cResult[14];
          }
          if (cResult[15] === tmp12.headerImage) {
            let tmp28;
            if (cResult[16] === tmp4.headerImage) {
              tmp28 = cResult[17];
            }
            if (cResult[18] === tmp28) {
              let tmp29;
              if (cResult[19] === tmp26) {
                tmp29 = cResult[20];
              }
              if (cResult[21] === tmp4.header) {
                if (cResult[22] === tmp29) {
                  if (cResult[23] === tmp16) {
                    if (cResult[24] === tmp20) {
                      let tmp33;
                      if (cResult[25] === tmp22) {
                        tmp33 = cResult[26];
                      }
                      if (cResult[27] === tmp9) {
                        let tmp38;
                        if (cResult[28] === tmp8) {
                          tmp38 = cResult[29];
                        }
                        if (cResult[30] === tmp13.animation) {
                          let tmp41;
                          if (cResult[31] === tmp38) {
                            tmp41 = cResult[32];
                          }
                          if (cResult[33] === tmp9) {
                            let tmp45;
                            if (cResult[34] === renewalMutations) {
                              tmp45 = cResult[35];
                            }
                            if (cResult[36] === tmp4.description) {
                              let tmp48;
                              if (cResult[37] === tmp45) {
                                tmp48 = cResult[38];
                              }
                              if (cResult[39] === tmp4.body) {
                                if (cResult[40] === tmp41) {
                                  let tmp51;
                                  if (cResult[41] === tmp48) {
                                    tmp51 = cResult[42];
                                  }
                                  if (cResult[43] === onClose) {
                                    if (cResult[44] === tmp4.alert) {
                                      if (cResult[45] === tmp33) {
                                        let tmp55;
                                        if (cResult[46] === tmp51) {
                                          tmp55 = cResult[47];
                                        }
                                        return tmp55;
                                      }
                                    }
                                  }
                                  const obj6 = { onClose, confirmText: tmp14, style: _alert, children: items };
                                  items = [tmp33, tmp51];
                                  const tmp57 = metroImportAll(AlertDefault, obj6);
                                  cResult[43] = onClose;
                                  cResult[44] = tmp4.alert;
                                  cResult[45] = tmp33;
                                  cResult[46] = tmp51;
                                  cResult[47] = tmp57;
                                  tmp55 = tmp57;
                                }
                              }
                              const obj7 = { style: tmp37, children: items1 };
                              items1 = [tmp41, tmp48];
                              const tmp54 = metroImportAll(hasOwnProperty, obj7);
                              cResult[39] = tmp4.body;
                              cResult[40] = tmp41;
                              cResult[41] = tmp48;
                              cResult[42] = tmp54;
                              tmp51 = tmp54;
                            }
                            const obj8 = { style: tmp44, children: tmp45 };
                            const tmp50 = metroImportDefault(native.LegacyText, obj8);
                            cResult[36] = tmp4.description;
                            cResult[37] = tmp45;
                            cResult[38] = tmp50;
                            tmp48 = tmp50;
                          }
                          const tmp47 = getDescription(tmp9, renewalMutations);
                          cResult[33] = tmp9;
                          cResult[34] = renewalMutations;
                          cResult[35] = tmp47;
                          tmp45 = tmp47;
                        }
                        const obj9 = { source: tmp38, style: tmp13.animation };
                        const tmp43 = metroImportDefault(ShineAnimationDefault, obj9);
                        cResult[30] = tmp13.animation;
                        cResult[31] = tmp38;
                        cResult[32] = tmp43;
                        tmp41 = tmp43;
                      }
                      const tmp40 = getActivatedImage(tmp9, tmp8);
                      cResult[27] = tmp9;
                      cResult[28] = tmp8;
                      cResult[29] = tmp40;
                      tmp38 = tmp40;
                    }
                  }
                }
              }
              const obj10 = { style: header, source: tmp16, children: items2 };
              items2 = [tmp20, tmp22, tmp29];
              const tmp36 = metroImportAll(React3, obj10);
              cResult[21] = tmp4.header;
              cResult[22] = tmp29;
              cResult[23] = tmp16;
              cResult[24] = tmp20;
              cResult[25] = tmp22;
              cResult[26] = tmp36;
              tmp33 = tmp36;
            }
            const obj11 = { source: tmp26, style: tmp28 };
            const tmp32 = metroImportDefault(_false, obj11);
            cResult[18] = tmp28;
            cResult[19] = tmp26;
            cResult[20] = tmp32;
            tmp29 = tmp32;
          }
          const items3 = [tmp12.headerImage, tmp4.headerImage];
          cResult[15] = tmp12.headerImage;
          cResult[16] = tmp4.headerImage;
          cResult[17] = items3;
          tmp28 = items3;
        }
        let tmp23 = null;
        if (tmp9 === PremiumUtils.Branding.BUNDLE) {
          const obj12 = { source: AssetRegistryDefault24, style: tmp4.logoPlusPremiumGuild };
          tmp23 = metroImportDefault(_false, obj12);
        }
        cResult[10] = tmp9;
        cResult[11] = tmp4.logoPlusPremiumGuild;
        cResult[12] = tmp23;
        tmp22 = tmp23;
      }
      const obj13 = { source: tmp18, style: tmp11.logo };
      const tmp21 = metroImportDefault(_false, obj13);
      cResult[7] = tmp11.logo;
      cResult[8] = tmp18;
      cResult[9] = tmp21;
      tmp20 = tmp21;
    }
  : (subscription) => {
      let intl;
      let items;
      let items1;
      let items2;
      let items3;
      let tmp4Result5;
      let tmp4Result6;
      let tmp4Result7;
      let tmp9;
      subscription = subscription.subscription;
      const onClose = subscription.onClose;
      const tmp = closure_9();
      let renewalMutations = subscription;
      if (null != subscription.renewalMutations) {
        const _Object = Object;
        renewalMutations = subscription;
        if (0 !== Object.keys(subscription.renewalMutations).length) {
          renewalMutations = subscription;
          if (subscription.renewalMutations.paymentGatewayPlanId !== subscription.paymentGatewayPlanId) {
            renewalMutations = subscription;
            if (subscription.status !== SubscriptionStatusTypes.CANCELED) {
              renewalMutations = subscription.renewalMutations;
            }
          }
        }
      }
      const tmp6 = useThemeDefault();
      const obj = PremiumUtils;
      const premiumBranding = obj.getPremiumBranding(renewalMutations);
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        tmp9 = { logo: { width: 82, height: 44 } };
        const obj2 = { logo: { width: 82, height: 44 } };
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp9 = { logo: { width: 82, height: 32 } };
        const obj3 = { logo: { width: 82, height: 32 } };
      } else {
        if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
          if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
              tmp9 = { logo: { width: 82, height: 18 } };
              const obj4 = { logo: { width: 82, height: 18 } };
            }
          }
        }
        tmp9 = { logo: { width: 79, height: 32 } };
        const obj5 = { logo: { width: 79, height: 32 } };
      }
      const tmp10 = closure_10(premiumBranding);
      const obj6 = { onClose, confirmText: intl.string(intl4.t.TkTvBz), style: tmp.alert, children: items2 };
      const tmp11 = closure_11(premiumBranding);
      const tmp4Result = AlertDefault;
      intl = intl4.intl;
      const obj7 = { style: tmp.header, source: tmp4Result5, children: items };
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        tmp4Result5 = AssetRegistryDefault4;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result5 = AssetRegistryDefault5;
      } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        tmp4Result5 = AssetRegistryDefault6;
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        tmp4Result5 = AssetRegistryDefault7;
      } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
        tmp4Result5 = AssetRegistryDefault8;
      }
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        tmp4Result6 = AssetRegistryDefault12;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result6 = AssetRegistryDefault13;
      } else {
        if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
          if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
              tmp4Result6 = AssetRegistryDefault14;
            }
          }
        }
        tmp4Result6 = AssetRegistryDefault3;
      }
      items = [, ,];
      const obj8 = { source: tmp4Result6, style: tmp9.logo };
      items[0] = metroImportDefault(_false, obj8);
      let tmp16Result = null;
      if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
        const obj9 = { source: AssetRegistryDefault24, style: tmp.logoPlusPremiumGuild };
        tmp16Result = metroImportDefault(_false, obj9);
      }
      items[1] = tmp16Result;
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        tmp4Result7 = AssetRegistryDefault;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result7 = AssetRegistryDefault2;
      } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        tmp4Result7 = AssetRegistryDefault9;
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        tmp4Result7 = AssetRegistryDefault10;
      } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
        tmp4Result7 = AssetRegistryDefault11;
      }
      const obj10 = { source: tmp4Result7, style: items1 };
      items1 = [tmp10.headerImage, tmp.headerImage];
      items[2] = metroImportDefault(_false, obj10);
      items2 = [metroImportAll(React3, obj7)];
      const obj11 = { style: tmp.body, children: items3 };
      const obj12 = { source: getActivatedImage(premiumBranding, tmp6), style: tmp11.animation };
      const tmp4Result8 = ShineAnimationDefault;
      items3 = [metroImportDefault(tmp4Result8, obj12)];
      const obj13 = { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) };
      const LegacyText = native.LegacyText;
      items3[1] = metroImportDefault(LegacyText, obj13);
      items2[1] = metroImportAll(hasOwnProperty, obj11);
      return metroImportAll(tmp4Result, obj6);
    };
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default tmp5;
