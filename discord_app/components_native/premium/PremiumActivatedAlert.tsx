// === Module 10065: PremiumActivatedAlert ===

// Module 10065 (PremiumActivatedAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import PremiumUtils from "PremiumUtils" /* 4769 */;
import useThemeDefault from "useTheme" /* 5031 */;
import common_AlertDefault from "common/Alert" /* 5398 */;
import FastImageDefault from "FastImage" /* 6156 */;
import _modDef7155 from "module_7155" /* 7155 */;
import _modDef7156 from "module_7156" /* 7156 */;
import _modDef8096 from "module_8096" /* 8096 */;
import _modDef10066 from "module_10066" /* 10066 */;
import _modDef10067 from "module_10067" /* 10067 */;
import _modDef10068 from "module_10068" /* 10068 */;
import _modDef10069 from "module_10069" /* 10069 */;
import _modDef10070 from "module_10070" /* 10070 */;
import _modDef10071 from "module_10071" /* 10071 */;
import _modDef10072 from "module_10072" /* 10072 */;
import _modDef10073 from "module_10073" /* 10073 */;
import _modDef10074 from "module_10074" /* 10074 */;
import _modDef10075 from "module_10075" /* 10075 */;
import _modDef10076 from "module_10076" /* 10076 */;
import _modDef10077 from "module_10077" /* 10077 */;
import _modDef10078 from "module_10078" /* 10078 */;
import _modDef10079 from "module_10079" /* 10079 */;
import _modDef10080 from "module_10080" /* 10080 */;
import _modDef10081 from "module_10081" /* 10081 */;
import _modDef10082 from "module_10082" /* 10082 */;
import _modDef10083 from "module_10083" /* 10083 */;
import _modDef10084 from "module_10084" /* 10084 */;
import _modDef10085 from "module_10085" /* 10085 */;
import _modDef10086 from "module_10086" /* 10086 */;
import ShineAnimationDefault from "ShineAnimation" /* 10087 */;
import noop from "module_19" /* 19 */;

require = fn;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    if (tmpResult.isThemeDark(arg1)) {
      let tmp10Result = _modDef10077;
    } else {
      tmp10Result = _modDef10078;
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    if (tmpResult4.isThemeDark(arg1)) {
      let tmp8Result = _modDef10079;
    } else {
      tmp8Result = _modDef10080;
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    if (tmpResult5.isThemeDark(arg1)) {
      let tmp6Result = _modDef10081;
    } else {
      tmp6Result = _modDef10082;
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    if (tmpResult6.isThemeDark(arg1)) {
      let tmp4Result = _modDef10083;
    } else {
      tmp4Result = _modDef10084;
    }
    return tmp4Result;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === cResult) {
    return _modDef10085;
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
({ View: c3, StyleSheet } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let createStyles = fn(5092);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerBackground: null, headerImage: null, body: null, logoPlusPremiumGuild: null, description: null };
let obj3 = {};
const merged = Object.assign(StyleSheet.absoluteFillObject);
obj3.width = undefined;
obj3.height = 100;
obj2.headerBackground = obj3;
obj2.headerImage = { position: "absolute", left: "50%" };
obj2.body = { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" };
obj2.logoPlusPremiumGuild = { marginTop: 3, width: 101, height: 19 };
obj2.description = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5969).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
let closure_7 = createStyles.createStyles(obj2);
createStyles = fn(5092);
let closure_8 = createStyles.createStyles((arg0) => {
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
createStyles = fn(5092);
let closure_9 = createStyles.createStyles((arg0) => {
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
let obj4 = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5969).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function PremiumActivatedAlert(arg0) {
  const cResult = c.c(51);
  ({ subscription, onClose } = arg0);
  const tmp4 = closure_7();
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
  const tmp12 = closure_8(tmp9);
  const tmp13 = closure_9(tmp9);
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
      let tmp7Result = _modDef10066;
    } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
      tmp7Result = _modDef10067;
    } else {
      if (PremiumUtils.Branding.TIER_2 === tmp9) {
        tmp7Result = _modDef10068;
      } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
          tmp7Result = _modDef10070;
        }
      }
      tmp7Result = _modDef10069;
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
          let tmp7Result4 = _modDef10074;
        } else {
          if (PremiumUtils.Branding.TIER_1 === tmp9) {
            tmp7Result4 = _modDef10075;
          } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
            if (PremiumUtils.Branding.TIER_2 !== tmp9) {
              if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                tmp7Result4 = _modDef10076;
              }
            }
          }
          tmp7Result4 = _modDef8096;
        }
        cResult[8] = tmp9;
        cResult[9] = tmp7Result4;
      } else {
        if (cResult[10] === tmp11.logo) {
          if (cResult[11] === tmp24) {
            let tmp27 = cResult[12];
          }
          if (cResult[13] === tmp9) {
            if (cResult[14] === tmp4.logoPlusPremiumGuild) {
              let tmp30 = cResult[15];
            }
            if (cResult[16] !== tmp9) {
              if (PremiumUtils.Branding.TIER_0 === tmp9) {
                let tmp7Result5 = _modDef7155;
              } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
                tmp7Result5 = _modDef7156;
              } else {
                if (PremiumUtils.Branding.TIER_2 === tmp9) {
                  tmp7Result5 = _modDef10071;
                } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
                  if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                    tmp7Result5 = _modDef10073;
                  }
                }
                tmp7Result5 = _modDef10072;
              }
              cResult[16] = tmp9;
              cResult[17] = tmp7Result5;
            } else {
              if (cResult[18] === tmp12.headerImage) {
                if (cResult[19] === tmp4.headerImage) {
                  let tmp37 = cResult[20];
                }
                if (cResult[21] === tmp34) {
                  if (cResult[22] === tmp37) {
                    let tmp38 = cResult[23];
                  }
                  if (cResult[24] === tmp4.header) {
                    if (cResult[25] === tmp38) {
                      if (cResult[26] === tmp21) {
                        if (cResult[27] === tmp27) {
                          if (cResult[28] === tmp30) {
                            let tmp41 = cResult[29];
                          }
                          if (cResult[30] === tmp9) {
                            if (cResult[31] === tmp8) {
                              let tmp46 = cResult[32];
                            }
                            if (cResult[33] === tmp13.animation) {
                              if (cResult[34] === tmp46) {
                                let tmp49 = cResult[35];
                              }
                              if (cResult[36] === tmp9) {
                                if (cResult[37] === renewalMutations) {
                                  let tmp53 = cResult[38];
                                }
                                if (cResult[39] === tmp4.description) {
                                  if (cResult[40] === tmp53) {
                                    let tmp56 = cResult[41];
                                  }
                                  if (cResult[42] === tmp4.body) {
                                    if (cResult[43] === tmp49) {
                                      if (cResult[44] === tmp56) {
                                        let tmp59 = cResult[45];
                                      }
                                      if (cResult[46] === onClose) {
                                        if (cResult[47] === tmp4.alert) {
                                          if (cResult[48] === tmp41) {
                                            if (cResult[49] === tmp59) {
                                              let tmp63 = cResult[50];
                                            }
                                            return tmp63;
                                          }
                                        }
                                      }
                                      const obj6 = { onClose, confirmText: tmp14, style: tmp16, children: null };
                                      const items = [tmp41, tmp59];
                                      obj6.children = items;
                                      const tmp65 = timestampProducer(common_AlertDefault, obj6);
                                      cResult[46] = onClose;
                                      cResult[47] = tmp4.alert;
                                      cResult[48] = tmp41;
                                      cResult[49] = tmp59;
                                      cResult[50] = tmp65;
                                      tmp63 = tmp65;
                                    }
                                  }
                                  const obj7 = { style: tmp45, children: null };
                                  const items1 = [tmp49, tmp56];
                                  obj7.children = items1;
                                  const tmp62 = timestampProducer(React3, obj7);
                                  cResult[42] = tmp4.body;
                                  cResult[43] = tmp49;
                                  cResult[44] = tmp56;
                                  cResult[45] = tmp62;
                                  tmp59 = tmp62;
                                }
                                const obj8 = { style: tmp52, children: tmp53 };
                                const tmp58 = hasOwnProperty(native.LegacyText, obj8);
                                cResult[39] = tmp4.description;
                                cResult[40] = tmp53;
                                cResult[41] = tmp58;
                                tmp56 = tmp58;
                              }
                              const tmp55 = getDescription(tmp9, renewalMutations);
                              cResult[36] = tmp9;
                              cResult[37] = renewalMutations;
                              cResult[38] = tmp55;
                              tmp53 = tmp55;
                            }
                            const obj9 = { source: tmp46, style: tmp13.animation };
                            const tmp51 = hasOwnProperty(ShineAnimationDefault, obj9);
                            cResult[33] = tmp13.animation;
                            cResult[34] = tmp46;
                            cResult[35] = tmp51;
                            tmp49 = tmp51;
                          }
                          const tmp48 = getActivatedImage(tmp9, tmp8);
                          cResult[30] = tmp9;
                          cResult[31] = tmp8;
                          cResult[32] = tmp48;
                          tmp46 = tmp48;
                        }
                      }
                    }
                  }
                  const obj10 = { style: tmp17, children: null };
                  const items2 = [tmp21, tmp27, tmp30, tmp38];
                  obj10.children = items2;
                  const tmp44 = timestampProducer(React3, obj10);
                  cResult[24] = tmp4.header;
                  cResult[25] = tmp38;
                  cResult[26] = tmp21;
                  cResult[27] = tmp27;
                  cResult[28] = tmp30;
                  cResult[29] = tmp44;
                  tmp41 = tmp44;
                }
                const obj11 = { source: tmp34, style: tmp37 };
                const tmp40 = hasOwnProperty(FastImageDefault, obj11);
                cResult[21] = tmp34;
                cResult[22] = tmp37;
                cResult[23] = tmp40;
                tmp38 = tmp40;
              }
              const items3 = [tmp12.headerImage, tmp4.headerImage];
              cResult[18] = tmp12.headerImage;
              cResult[19] = tmp4.headerImage;
              cResult[20] = items3;
              tmp37 = items3;
            }
          }
          let tmp31 = null;
          if (tmp9 === PremiumUtils.Branding.BUNDLE) {
            const obj12 = { source: _modDef10086, style: tmp4.logoPlusPremiumGuild };
            tmp31 = hasOwnProperty(FastImageDefault, obj12);
            const tmp7Result6 = FastImageDefault;
          }
          cResult[13] = tmp9;
          cResult[14] = tmp4.logoPlusPremiumGuild;
          cResult[15] = tmp31;
          tmp30 = tmp31;
        }
        const obj13 = { source: cResult[9], style: tmp11.logo };
        const tmp29 = hasOwnProperty(FastImageDefault, obj13);
        cResult[10] = tmp11.logo;
        cResult[11] = cResult[9];
        cResult[12] = tmp29;
        tmp27 = tmp29;
      }
    }
    const obj14 = { source: cResult[4], style: tmp4.headerBackground };
    const tmp23 = hasOwnProperty(FastImageDefault, obj14);
    cResult[5] = tmp4.headerBackground;
    cResult[6] = cResult[4];
    cResult[7] = tmp23;
    tmp21 = tmp23;
  }
}) : (function PremiumActivatedAlert(onClose) {
  const subscription = onClose.subscription;
  const tmp = closure_7();
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
  const tmp10 = closure_8(premiumBranding);
  const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  const tmp11 = closure_9(premiumBranding);
  const intl = util.intl;
  obj6.confirmText = intl.string(util.t.TkTvBz);
  obj6.style = tmp.alert;
  const obj7 = { style: tmp.header, children: null };
  const tmp4Result = common_AlertDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result10 = _modDef10066;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result10 = _modDef10067;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result10 = _modDef10068;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result10 = _modDef10069;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result10 = _modDef10070;
  }
  const items = [hasOwnProperty(FastImageDefault, { source: tmp4Result10, style: tmp.headerBackground }), , , ];
  const obj8 = { source: tmp4Result10, style: tmp.headerBackground };
  const tmp4Result9 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result12 = _modDef10074;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result12 = _modDef10075;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result12 = _modDef10076;
        }
      }
    }
    tmp4Result12 = _modDef8096;
  }
  items[1] = hasOwnProperty(FastImageDefault, { source: tmp4Result12, style: tmp9.logo });
  let tmp15Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj10 = { source: _modDef10086, style: tmp.logoPlusPremiumGuild };
    tmp15Result = hasOwnProperty(FastImageDefault, obj10);
    const tmp4Result13 = FastImageDefault;
  }
  items[2] = tmp15Result;
  const obj9 = { source: tmp4Result12, style: tmp9.logo };
  const tmp4Result11 = FastImageDefault;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result15 = _modDef7155;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result15 = _modDef7156;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result15 = _modDef10071;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result15 = _modDef10072;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result15 = _modDef10073;
  }
  const obj11 = { source: tmp4Result15, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj11.style = items1;
  items[3] = hasOwnProperty(FastImageDefault, obj11);
  obj7.children = items;
  const items2 = [timestampProducer(React3, obj7), ];
  const obj12 = { style: tmp.body, children: null };
  const obj13 = { source: null, style: null };
  const tmp4Result14 = FastImageDefault;
  obj13.source = getActivatedImage(premiumBranding, tmp6);
  obj13.style = tmp11.animation;
  const items3 = [hasOwnProperty(ShineAnimationDefault, obj13), ];
  const tmp4Result16 = ShineAnimationDefault;
  items3[1] = hasOwnProperty(native.LegacyText, { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) });
  obj12.children = items3;
  items2[1] = timestampProducer(React3, obj12);
  obj6.children = items2;
  return timestampProducer(tmp4Result, obj6);
});