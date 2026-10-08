// discord_app/components_native/premium/PremiumActivatedAlert.tsx
import c from "../../../_runtime/00576_c.js";
import util from "../../intl/index.native.tsx";
import native from "../../design/void/native.tsx";
import PremiumUtils from "../../utils/PremiumUtils.tsx";
import useThemeDefault from "../../hooks/useTheme.tsx";
import common_AlertDefault from "../common/Alert.tsx";
import _modDef7144 from "../../../_runtime/metro/07144__.js";
import _modDef7145 from "../../../_runtime/metro/07145__.js";
import _modDef8070 from "../../../_runtime/metro/08070__.js";
import _modDef10052 from "../../../_runtime/metro/10052__.js";
import _modDef10053 from "../../../_runtime/metro/10053__.js";
import _modDef10054 from "../../../_runtime/metro/10054__.js";
import _modDef10055 from "../../../_runtime/metro/10055__.js";
import _modDef10056 from "../../../_runtime/metro/10056__.js";
import _modDef10057 from "../../../_runtime/metro/10057__.js";
import _modDef10058 from "../../../_runtime/metro/10058__.js";
import _modDef10059 from "../../../_runtime/metro/10059__.js";
import _modDef10060 from "../../../_runtime/metro/10060__.js";
import _modDef10061 from "../../../_runtime/metro/10061__.js";
import _modDef10062 from "../../../_runtime/metro/10062__.js";
import _modDef10063 from "../../../_runtime/metro/10063__.js";
import _modDef10064 from "../../../_runtime/metro/10064__.js";
import _modDef10065 from "../../../_runtime/metro/10065__.js";
import _modDef10066 from "../../../_runtime/metro/10066__.js";
import _modDef10067 from "../../../_runtime/metro/10067__.js";
import _modDef10068 from "../../../_runtime/metro/10068__.js";
import _modDef10069 from "../../../_runtime/metro/10069__.js";
import _modDef10070 from "../../../_runtime/metro/10070__.js";
import _modDef10071 from "../../../_runtime/metro/10071__.js";
import _modDef10072 from "../../../_runtime/metro/10072__.js";
import ShineAnimationDefault from "ShineAnimation.tsx";
import noop from "../../../_runtime/metro/00019__.js";

require = fn;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    if (tmpResult.isThemeDark(arg1)) {
      let tmp10Result = _modDef10063;
    } else {
      tmp10Result = _modDef10064;
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    if (tmpResult4.isThemeDark(arg1)) {
      let tmp8Result = _modDef10065;
    } else {
      tmp8Result = _modDef10066;
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    if (tmpResult5.isThemeDark(arg1)) {
      let tmp6Result = _modDef10067;
    } else {
      tmp6Result = _modDef10068;
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    if (tmpResult6.isThemeDark(arg1)) {
      let tmp4Result = _modDef10069;
    } else {
      tmp4Result = _modDef10070;
    }
    return tmp4Result;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === cResult) {
    return _modDef10071;
  }
}
function getDescription(arg0, arg1) {
  if (PremiumUtils.Branding.TIER_0 !== arg0) {
    if (PremiumUtils.Branding.TIER_1 !== arg0) {
      if (PremiumUtils.Branding.TIER_2 === arg0) {
        const intl2 = util.intl;
        return intl2.string(util.t.aTUr3Z);
      } else {
        const intl = util.intl;
        const obj = { planName: null };
        ({ planId: obj3.planId, additionalPlans: obj3.additionalPlans } = arg1);
        obj.planName = PremiumUtils.getExternalPlanDisplayName({ planId: null, additionalPlans: null });
        return intl.format(util.t.YJUUH3, obj);
      }
    }
  }
  const intl3 = util.intl;
  return intl3.string(util.t.knvOVz);
}
get_ActivityIndicator = fn(17);
({ Image: c3, View: closure_4, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let createStyles = fn(5090);
let obj2 = {
  alert: { overflow: "hidden", paddingBottom: 24 },
  header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" },
  headerBackground: null,
  headerImage: null,
  body: null,
  logoPlusPremiumGuild: null,
  description: null,
};
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = {
  fontSize: 14,
  lineHeight: 16,
  textAlign: "center",
  marginTop: 20,
  color: fn(5974).DARK_PRIMARY_300_LIGHT_PRIMARY_400,
};
let closure_8 = createStyles.createStyles(obj2);
createStyles = fn(5090);
let closure_9 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.TIER_0 === arg0) {
    const obj2 = { headerImage: { marginLeft: -27, width: 88, top: 18 } };
    return obj2;
  } else if (PremiumUtils.Branding.TIER_1 === arg0) {
    const obj3 = { headerImage: { marginLeft: -27, width: 87, top: 18 } };
    return obj3;
  } else if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj4 = { headerImage: { marginLeft: -29.5, width: 91, top: 18 } };
    return obj4;
  } else if (PremiumUtils.Branding.TIER_2 === arg0) {
    const obj5 = { headerImage: { marginLeft: -58, width: 122, height: 90, top: 18 } };
    return obj5;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
    const obj = { headerImage: { marginLeft: -54, width: 140, top: 18 } };
    return obj;
  }
});
createStyles = fn(5090);
let closure_10 = createStyles.createStyles((arg0) => {
  if (PremiumUtils.Branding.BUNDLE === arg0) {
    const obj2 = { animation: { borderRadius: 6 } };
    return obj2;
  } else {
    if (PremiumUtils.Branding.TIER_0 !== arg0) {
      if (PremiumUtils.Branding.TIER_1 !== arg0) {
        if (PremiumUtils.Branding.TIER_2 !== arg0) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === arg0) {
            const obj = { animation: { borderRadius: 9 } };
            return obj;
          }
        }
      }
    }
    const obj3 = { animation: { borderRadius: 5 } };
    return obj3;
  }
});
const ReactCompilerGating = fn(558);
let obj4 = {
  fontSize: 14,
  lineHeight: 16,
  textAlign: "center",
  marginTop: 20,
  color: fn(5974).DARK_PRIMARY_300_LIGHT_PRIMARY_400,
};
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function PremiumActivatedAlert(arg0) {
      const cResult = c.c(51);
      ({ subscription, onClose } = arg0);
      const tmp4 = closure_8();
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
        const premiumBranding = PremiumUtils.getPremiumBranding(renewalMutations);
        cResult[0] = renewalMutations;
        cResult[1] = premiumBranding;
        let tmp9 = premiumBranding;
        const tmpResult = PremiumUtils;
      } else {
        tmp9 = cResult[1];
      }
      if (PremiumUtils.Branding.TIER_0 === tmp9) {
        const obj2 = { logo: { width: 82, height: 44 } };
        let tmp11 = obj2;
      } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
        const obj3 = { logo: { width: 82, height: 32 } };
        tmp11 = obj3;
      } else {
        if (PremiumUtils.Branding.BUNDLE !== tmp9) {
          if (PremiumUtils.Branding.TIER_2 !== tmp9) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              const obj4 = { logo: { width: 82, height: 18 } };
              tmp11 = obj4;
            }
          }
        }
        const obj5 = { logo: { width: 79, height: 32 } };
        tmp11 = obj5;
      }
      const tmp12 = closure_9(tmp9);
      const tmp13 = closure_10(tmp9);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.TkTvBz);
        cResult[2] = stringResult;
        let tmp14 = stringResult;
      } else {
        tmp14 = cResult[2];
      }
      if (cResult[3] !== tmp9) {
        if (PremiumUtils.Branding.TIER_0 === tmp9) {
          let tmp7Result = _modDef10052;
        } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
          tmp7Result = _modDef10053;
        } else {
          if (PremiumUtils.Branding.TIER_2 === tmp9) {
            tmp7Result = _modDef10054;
          } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
              tmp7Result = _modDef10056;
            }
          }
          tmp7Result = _modDef10055;
        }
        cResult[3] = tmp9;
        cResult[4] = tmp7Result;
      } else {
        if (cResult[5] === tmp4.headerBackground) {
          if (cResult[6] === tmp18) {
            let tmp21 = cResult[7];
          }
          if (cResult[8] !== tmp9) {
            if (PremiumUtils.Branding.TIER_0 === tmp9) {
              let tmp7Result3 = _modDef10060;
            } else {
              if (PremiumUtils.Branding.TIER_1 === tmp9) {
                tmp7Result3 = _modDef10061;
              } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
                if (PremiumUtils.Branding.TIER_2 !== tmp9) {
                  if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                    tmp7Result3 = _modDef10062;
                  }
                }
              }
              tmp7Result3 = _modDef8070;
            }
            cResult[8] = tmp9;
            cResult[9] = tmp7Result3;
          } else {
            if (cResult[10] === tmp11.logo) {
              if (cResult[11] === tmp25) {
                let tmp28 = cResult[12];
              }
              if (cResult[13] === tmp9) {
                if (cResult[14] === tmp4.logoPlusPremiumGuild) {
                  let tmp32 = cResult[15];
                }
                if (cResult[16] !== tmp9) {
                  if (PremiumUtils.Branding.TIER_0 === tmp9) {
                    let tmp7Result4 = _modDef7144;
                  } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
                    tmp7Result4 = _modDef7145;
                  } else {
                    if (PremiumUtils.Branding.TIER_2 === tmp9) {
                      tmp7Result4 = _modDef10057;
                    } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
                      if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                        tmp7Result4 = _modDef10059;
                      }
                    }
                    tmp7Result4 = _modDef10058;
                  }
                  cResult[16] = tmp9;
                  cResult[17] = tmp7Result4;
                } else {
                  if (cResult[18] === tmp12.headerImage) {
                    if (cResult[19] === tmp4.headerImage) {
                      let tmp39 = cResult[20];
                    }
                    if (cResult[21] === tmp36) {
                      if (cResult[22] === tmp39) {
                        let tmp40 = cResult[23];
                      }
                      if (cResult[24] === tmp4.header) {
                        if (cResult[25] === tmp40) {
                          if (cResult[26] === tmp21) {
                            if (cResult[27] === tmp28) {
                              if (cResult[28] === tmp32) {
                                let tmp44 = cResult[29];
                              }
                              if (cResult[30] === tmp9) {
                                if (cResult[31] === tmp8) {
                                  let tmp49 = cResult[32];
                                }
                                if (cResult[33] === tmp13.animation) {
                                  if (cResult[34] === tmp49) {
                                    let tmp52 = cResult[35];
                                  }
                                  if (cResult[36] === tmp9) {
                                    if (cResult[37] === renewalMutations) {
                                      let tmp56 = cResult[38];
                                    }
                                    if (cResult[39] === tmp4.description) {
                                      if (cResult[40] === tmp56) {
                                        let tmp59 = cResult[41];
                                      }
                                      if (cResult[42] === tmp4.body) {
                                        if (cResult[43] === tmp52) {
                                          if (cResult[44] === tmp59) {
                                            let tmp62 = cResult[45];
                                          }
                                          if (cResult[46] === onClose) {
                                            if (cResult[47] === tmp4.alert) {
                                              if (cResult[48] === tmp44) {
                                                if (cResult[49] === tmp62) {
                                                  let tmp66 = cResult[50];
                                                }
                                                return tmp66;
                                              }
                                            }
                                          }
                                          const obj6 = { onClose, confirmText: tmp14, style: tmp16, children: null };
                                          const items = [tmp44, tmp62];
                                          obj6.children = items;
                                          const tmp68 = React5(common_AlertDefault, obj6);
                                          cResult[46] = onClose;
                                          cResult[47] = tmp4.alert;
                                          cResult[48] = tmp44;
                                          cResult[49] = tmp62;
                                          cResult[50] = tmp68;
                                          tmp66 = tmp68;
                                        }
                                      }
                                      const obj7 = { style: tmp48, children: null };
                                      const items1 = [tmp52, tmp59];
                                      obj7.children = items1;
                                      const tmp65 = React5(React4, obj7);
                                      cResult[42] = tmp4.body;
                                      cResult[43] = tmp52;
                                      cResult[44] = tmp59;
                                      cResult[45] = tmp65;
                                      tmp62 = tmp65;
                                    }
                                    const obj8 = { style: tmp55, children: tmp56 };
                                    const tmp61 = timestampProducer(native.LegacyText, obj8);
                                    cResult[39] = tmp4.description;
                                    cResult[40] = tmp56;
                                    cResult[41] = tmp61;
                                    tmp59 = tmp61;
                                  }
                                  const tmp58 = getDescription(tmp9, renewalMutations);
                                  cResult[36] = tmp9;
                                  cResult[37] = renewalMutations;
                                  cResult[38] = tmp58;
                                  tmp56 = tmp58;
                                }
                                const obj9 = { source: tmp49, style: tmp13.animation };
                                const tmp54 = timestampProducer(ShineAnimationDefault, obj9);
                                cResult[33] = tmp13.animation;
                                cResult[34] = tmp49;
                                cResult[35] = tmp54;
                                tmp52 = tmp54;
                              }
                              const tmp51 = getActivatedImage(tmp9, tmp8);
                              cResult[30] = tmp9;
                              cResult[31] = tmp8;
                              cResult[32] = tmp51;
                              tmp49 = tmp51;
                            }
                          }
                        }
                      }
                      const obj10 = { style: tmp17, children: null };
                      const items2 = [tmp21, tmp28, tmp32, tmp40];
                      obj10.children = items2;
                      const tmp47 = React5(React4, obj10);
                      cResult[24] = tmp4.header;
                      cResult[25] = tmp40;
                      cResult[26] = tmp21;
                      cResult[27] = tmp28;
                      cResult[28] = tmp32;
                      cResult[29] = tmp47;
                      tmp44 = tmp47;
                    }
                    const obj11 = { source: tmp36, style: tmp39 };
                    const tmp43 = timestampProducer(React3, obj11);
                    cResult[21] = tmp36;
                    cResult[22] = tmp39;
                    cResult[23] = tmp43;
                    tmp40 = tmp43;
                  }
                  const items3 = [tmp12.headerImage, tmp4.headerImage];
                  cResult[18] = tmp12.headerImage;
                  cResult[19] = tmp4.headerImage;
                  cResult[20] = items3;
                  tmp39 = items3;
                }
              }
              let tmp33 = null;
              if (tmp9 === PremiumUtils.Branding.BUNDLE) {
                const obj12 = { source: _modDef10072, style: tmp4.logoPlusPremiumGuild };
                tmp33 = timestampProducer(React3, obj12);
              }
              cResult[13] = tmp9;
              cResult[14] = tmp4.logoPlusPremiumGuild;
              cResult[15] = tmp33;
              tmp32 = tmp33;
            }
            const obj13 = { source: cResult[9], style: tmp11.logo };
            const tmp31 = timestampProducer(React3, obj13);
            cResult[10] = tmp11.logo;
            cResult[11] = cResult[9];
            cResult[12] = tmp31;
            tmp28 = tmp31;
          }
        }
        const obj14 = { source: cResult[4], style: tmp4.headerBackground };
        const tmp24 = timestampProducer(React3, obj14);
        cResult[5] = tmp4.headerBackground;
        cResult[6] = cResult[4];
        cResult[7] = tmp24;
        tmp21 = tmp24;
      }
    }
  : function PremiumActivatedAlert(onClose) {
      const subscription = onClose.subscription;
      const tmp = closure_8();
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
      const premiumBranding = PremiumUtils.getPremiumBranding(renewalMutations);
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        const obj2 = { logo: { width: 82, height: 44 } };
        let tmp9 = obj2;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        const obj3 = { logo: { width: 82, height: 32 } };
        tmp9 = obj3;
      } else {
        if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
          if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
              const obj4 = { logo: { width: 82, height: 18 } };
              tmp9 = obj4;
            }
          }
        }
        const obj5 = { logo: { width: 79, height: 32 } };
        tmp9 = obj5;
      }
      const tmp10 = closure_9(premiumBranding);
      const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
      const tmp11 = closure_10(premiumBranding);
      const intl = util.intl;
      obj6.confirmText = intl.string(util.t.TkTvBz);
      obj6.style = tmp.alert;
      const obj7 = { style: tmp.header, children: null };
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        let tmp4Result5 = _modDef10052;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result5 = _modDef10053;
      } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        tmp4Result5 = _modDef10054;
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        tmp4Result5 = _modDef10055;
      } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
        tmp4Result5 = _modDef10056;
      }
      const items = [timestampProducer(React3, { source: tmp4Result5, style: tmp.headerBackground }), , ,];
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        let tmp4Result6 = _modDef10060;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result6 = _modDef10061;
      } else {
        if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
          if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
            if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
              tmp4Result6 = _modDef10062;
            }
          }
        }
        tmp4Result6 = _modDef8070;
      }
      items[1] = timestampProducer(React3, { source: tmp4Result6, style: tmp9.logo });
      let tmp15Result = null;
      if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
        const obj10 = { source: _modDef10072, style: tmp.logoPlusPremiumGuild };
        tmp15Result = timestampProducer(React3, obj10);
      }
      items[2] = tmp15Result;
      if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
        let tmp4Result7 = _modDef7144;
      } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
        tmp4Result7 = _modDef7145;
      } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
        tmp4Result7 = _modDef10057;
      } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
        tmp4Result7 = _modDef10058;
      } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
        tmp4Result7 = _modDef10059;
      }
      const obj11 = { source: tmp4Result7, style: null };
      const items1 = [tmp10.headerImage, tmp.headerImage];
      obj11.style = items1;
      items[3] = timestampProducer(React3, obj11);
      obj7.children = items;
      const items2 = [React5(React4, obj7)];
      const obj12 = { style: tmp.body, children: null };
      const obj13 = { source: null, style: null };
      const obj8 = { source: tmp4Result5, style: tmp.headerBackground };
      const obj9 = { source: tmp4Result6, style: tmp9.logo };
      const tmp4Result = common_AlertDefault;
      obj13.source = getActivatedImage(premiumBranding, tmp6);
      obj13.style = tmp11.animation;
      const items3 = [timestampProducer(ShineAnimationDefault, obj13)];
      const tmp4Result8 = ShineAnimationDefault;
      items3[1] = timestampProducer(native.LegacyText, {
        style: tmp.description,
        children: getDescription(premiumBranding, renewalMutations),
      });
      obj12.children = items3;
      items2[1] = React5(React4, obj12);
      obj6.children = items2;
      return React5(tmp4Result, obj6);
    };
