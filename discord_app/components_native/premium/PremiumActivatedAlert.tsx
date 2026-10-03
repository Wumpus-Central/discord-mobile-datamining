// === Module 10441: PremiumActivatedAlert ===

// Module 10441 (PremiumActivatedAlert)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumUtils from "PremiumUtils" /* 4528 */;
import useThemeDefault from "useTheme" /* 4791 */;
import common_AlertDefault from "common/Alert" /* 5783 */;
import _modDef6942 from "module_6942" /* 6942 */;
import _modDef6943 from "module_6943" /* 6943 */;
import _modDef7738 from "module_7738" /* 7738 */;
import _modDef10442 from "module_10442" /* 10442 */;
import _modDef10443 from "module_10443" /* 10443 */;
import _modDef10444 from "module_10444" /* 10444 */;
import _modDef10445 from "module_10445" /* 10445 */;
import _modDef10446 from "module_10446" /* 10446 */;
import _modDef10447 from "module_10447" /* 10447 */;
import _modDef10448 from "module_10448" /* 10448 */;
import _modDef10449 from "module_10449" /* 10449 */;
import _modDef10450 from "module_10450" /* 10450 */;
import _modDef10451 from "module_10451" /* 10451 */;
import _modDef10452 from "module_10452" /* 10452 */;
import _modDef10453 from "module_10453" /* 10453 */;
import _modDef10454 from "module_10454" /* 10454 */;
import _modDef10455 from "module_10455" /* 10455 */;
import _modDef10456 from "module_10456" /* 10456 */;
import _modDef10457 from "module_10457" /* 10457 */;
import _modDef10458 from "module_10458" /* 10458 */;
import _modDef10459 from "module_10459" /* 10459 */;
import _modDef10460 from "module_10460" /* 10460 */;
import _modDef10461 from "module_10461" /* 10461 */;
import _modDef10462 from "module_10462" /* 10462 */;
import ShineAnimationDefault from "ShineAnimation" /* 10463 */;
import noop from "module_19" /* 19 */;

require = fn;
function getActivatedImage(cResult, arg1) {
  if (PremiumUtils.Branding.TIER_0 === cResult) {
    if (tmpResult.isThemeDark(arg1)) {
      let tmp10Result = _modDef10453;
    } else {
      tmp10Result = _modDef10454;
    }
    return tmp10Result;
  } else if (PremiumUtils.Branding.TIER_1 === cResult) {
    if (tmpResult4.isThemeDark(arg1)) {
      let tmp8Result = _modDef10455;
    } else {
      tmp8Result = _modDef10456;
    }
    return tmp8Result;
  } else if (PremiumUtils.Branding.TIER_2 === cResult) {
    if (tmpResult5.isThemeDark(arg1)) {
      let tmp6Result = _modDef10457;
    } else {
      tmp6Result = _modDef10458;
    }
    return tmp6Result;
  } else if (PremiumUtils.Branding.BUNDLE === cResult) {
    if (tmpResult6.isThemeDark(arg1)) {
      let tmp4Result = _modDef10459;
    } else {
      tmp4Result = _modDef10460;
    }
    return tmp4Result;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === cResult) {
    return _modDef10461;
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
({ Image: c3, ImageBackground: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const SubscriptionStatusTypes = fn(1085).SubscriptionStatusTypes;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
let createStyles = fn(4890);
let obj2 = { alert: { overflow: "hidden", paddingBottom: 24 }, header: { alignSelf: "stretch", margin: -16, padding: 16, height: 100, position: "relative" }, headerImage: { position: "absolute", left: "50%" }, body: { paddingHorizontal: 16, marginTop: 40, maxWidth: 300, alignSelf: "center", alignItems: "center" }, logoPlusPremiumGuild: { marginTop: 3, width: 101, height: 19 }, description: { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_400 } };
let closure_9 = createStyles.createStyles(obj2);
createStyles = fn(4890);
let closure_10 = createStyles.createStyles((arg0) => {
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
createStyles = fn(4890);
let closure_11 = createStyles.createStyles((arg0) => {
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
let obj3 = { fontSize: 14, lineHeight: 16, textAlign: "center", marginTop: 20, color: fn(5620).DARK_PRIMARY_300_LIGHT_PRIMARY_400 };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/PremiumActivatedAlert.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  const cResult = c.c(48);
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
  const tmp12 = closure_10(tmp9);
  const tmp13 = closure_11(tmp9);
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
      let tmp7Result = _modDef10442;
    } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
      tmp7Result = _modDef10443;
    } else {
      if (PremiumUtils.Branding.TIER_2 === tmp9) {
        tmp7Result = _modDef10444;
      } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
          tmp7Result = _modDef10446;
        }
      }
      tmp7Result = _modDef10445;
    }
    cResult[3] = tmp9;
    cResult[4] = tmp7Result;
  } else if (cResult[5] !== tmp9) {
    if (PremiumUtils.Branding.TIER_0 === tmp9) {
      let tmp7Result3 = _modDef10450;
    } else {
      if (PremiumUtils.Branding.TIER_1 === tmp9) {
        tmp7Result3 = _modDef10451;
      } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
        if (PremiumUtils.Branding.TIER_2 !== tmp9) {
          if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
            tmp7Result3 = _modDef10452;
          }
        }
      }
      tmp7Result3 = _modDef7738;
    }
    cResult[5] = tmp9;
    cResult[6] = tmp7Result3;
  } else {
    if (cResult[7] === tmp11.logo) {
      if (cResult[8] === tmp21) {
        let tmp24 = cResult[9];
      }
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp4.logoPlusPremiumGuild) {
          let tmp28 = cResult[12];
        }
        if (cResult[13] !== tmp9) {
          if (PremiumUtils.Branding.TIER_0 === tmp9) {
            let tmp7Result4 = _modDef6942;
          } else if (PremiumUtils.Branding.TIER_1 === tmp9) {
            tmp7Result4 = _modDef6943;
          } else {
            if (PremiumUtils.Branding.TIER_2 === tmp9) {
              tmp7Result4 = _modDef10447;
            } else if (PremiumUtils.Branding.BUNDLE !== tmp9) {
              if (PremiumUtils.Branding.PREMIUM_GUILD === tmp9) {
                tmp7Result4 = _modDef10449;
              }
            }
            tmp7Result4 = _modDef10448;
          }
          cResult[13] = tmp9;
          cResult[14] = tmp7Result4;
        } else {
          if (cResult[15] === tmp12.headerImage) {
            if (cResult[16] === tmp4.headerImage) {
              let tmp35 = cResult[17];
            }
            if (cResult[18] === tmp35) {
              if (cResult[19] === tmp32) {
                let tmp36 = cResult[20];
              }
              if (cResult[21] === tmp4.header) {
                if (cResult[22] === tmp36) {
                  if (cResult[23] === tmp18) {
                    if (cResult[24] === tmp24) {
                      if (cResult[25] === tmp28) {
                        let tmp40 = cResult[26];
                      }
                      if (cResult[27] === tmp9) {
                        if (cResult[28] === tmp8) {
                          let tmp45 = cResult[29];
                        }
                        if (cResult[30] === tmp13.animation) {
                          if (cResult[31] === tmp45) {
                            let tmp48 = cResult[32];
                          }
                          if (cResult[33] === tmp9) {
                            if (cResult[34] === renewalMutations) {
                              let tmp52 = cResult[35];
                            }
                            if (cResult[36] === tmp4.description) {
                              if (cResult[37] === tmp52) {
                                let tmp55 = cResult[38];
                              }
                              if (cResult[39] === tmp4.body) {
                                if (cResult[40] === tmp48) {
                                  if (cResult[41] === tmp55) {
                                    let tmp58 = cResult[42];
                                  }
                                  if (cResult[43] === onClose) {
                                    if (cResult[44] === tmp4.alert) {
                                      if (cResult[45] === tmp40) {
                                        if (cResult[46] === tmp58) {
                                          let tmp62 = cResult[47];
                                        }
                                        return tmp62;
                                      }
                                    }
                                  }
                                  const obj6 = { onClose, confirmText: tmp14, style: tmp16, children: null };
                                  const items = [tmp40, tmp58];
                                  obj6.children = items;
                                  const tmp64 = closure_1_8(common_AlertDefault, obj6);
                                  cResult[43] = onClose;
                                  cResult[44] = tmp4.alert;
                                  cResult[45] = tmp40;
                                  cResult[46] = tmp58;
                                  cResult[47] = tmp64;
                                  tmp62 = tmp64;
                                }
                              }
                              const obj7 = { style: tmp44, children: null };
                              const items1 = [tmp48, tmp55];
                              obj7.children = items1;
                              const tmp61 = closure_1_8(hasOwnProperty, obj7);
                              cResult[39] = tmp4.body;
                              cResult[40] = tmp48;
                              cResult[41] = tmp55;
                              cResult[42] = tmp61;
                              tmp58 = tmp61;
                            }
                            const obj8 = { style: tmp51, children: tmp52 };
                            const tmp57 = React5(native.LegacyText, obj8);
                            cResult[36] = tmp4.description;
                            cResult[37] = tmp52;
                            cResult[38] = tmp57;
                            tmp55 = tmp57;
                          }
                          const tmp54 = getDescription(tmp9, renewalMutations);
                          cResult[33] = tmp9;
                          cResult[34] = renewalMutations;
                          cResult[35] = tmp54;
                          tmp52 = tmp54;
                        }
                        const obj9 = { source: tmp45, style: tmp13.animation };
                        const tmp50 = React5(ShineAnimationDefault, obj9);
                        cResult[30] = tmp13.animation;
                        cResult[31] = tmp45;
                        cResult[32] = tmp50;
                        tmp48 = tmp50;
                      }
                      const tmp47 = getActivatedImage(tmp9, tmp8);
                      cResult[27] = tmp9;
                      cResult[28] = tmp8;
                      cResult[29] = tmp47;
                      tmp45 = tmp47;
                    }
                  }
                }
              }
              const obj10 = { style: tmp17, source: tmp18, children: null };
              const items2 = [tmp24, tmp28, tmp36];
              obj10.children = items2;
              const tmp43 = closure_1_8(React4, obj10);
              cResult[21] = tmp4.header;
              cResult[22] = tmp36;
              cResult[23] = tmp18;
              cResult[24] = tmp24;
              cResult[25] = tmp28;
              cResult[26] = tmp43;
              tmp40 = tmp43;
            }
            const obj11 = { source: tmp32, style: tmp35 };
            const tmp39 = React5(React3, obj11);
            cResult[18] = tmp35;
            cResult[19] = tmp32;
            cResult[20] = tmp39;
            tmp36 = tmp39;
          }
          const items3 = [tmp12.headerImage, tmp4.headerImage];
          cResult[15] = tmp12.headerImage;
          cResult[16] = tmp4.headerImage;
          cResult[17] = items3;
          tmp35 = items3;
        }
      }
      let tmp29 = null;
      if (tmp9 === PremiumUtils.Branding.BUNDLE) {
        const obj12 = { source: _modDef10462, style: tmp4.logoPlusPremiumGuild };
        tmp29 = React5(React3, obj12);
      }
      cResult[10] = tmp9;
      cResult[11] = tmp4.logoPlusPremiumGuild;
      cResult[12] = tmp29;
      tmp28 = tmp29;
    }
    const obj13 = { source: cResult[6], style: tmp11.logo };
    const tmp27 = React5(React3, obj13);
    cResult[7] = tmp11.logo;
    cResult[8] = cResult[6];
    cResult[9] = tmp27;
    tmp24 = tmp27;
  }
}) : ((onClose) => {
  const subscription = onClose.subscription;
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
  const tmp10 = closure_10(premiumBranding);
  const obj6 = { onClose: onClose.onClose, confirmText: null, style: null, children: null };
  const tmp11 = closure_11(premiumBranding);
  const intl = util.intl;
  obj6.confirmText = intl.string(util.t.TkTvBz);
  obj6.style = tmp.alert;
  const obj7 = { style: tmp.header, source: null, children: null };
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result5 = _modDef10442;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result5 = _modDef10443;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result5 = _modDef10444;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result5 = _modDef10445;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result5 = _modDef10446;
  }
  obj7.source = tmp4Result5;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result6 = _modDef10450;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result6 = _modDef10451;
  } else {
    if (PremiumUtils.Branding.BUNDLE !== premiumBranding) {
      if (PremiumUtils.Branding.TIER_2 !== premiumBranding) {
        if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
          tmp4Result6 = _modDef10452;
        }
      }
    }
    tmp4Result6 = _modDef7738;
  }
  const items = [React5(React3, { source: tmp4Result6, style: tmp9.logo }), , ];
  let tmp16Result = null;
  if (premiumBranding === PremiumUtils.Branding.BUNDLE) {
    const obj9 = { source: _modDef10462, style: tmp.logoPlusPremiumGuild };
    tmp16Result = React5(React3, obj9);
  }
  items[1] = tmp16Result;
  if (PremiumUtils.Branding.TIER_0 === premiumBranding) {
    let tmp4Result7 = _modDef6942;
  } else if (PremiumUtils.Branding.TIER_1 === premiumBranding) {
    tmp4Result7 = _modDef6943;
  } else if (PremiumUtils.Branding.TIER_2 === premiumBranding) {
    tmp4Result7 = _modDef10447;
  } else if (PremiumUtils.Branding.BUNDLE === premiumBranding) {
    tmp4Result7 = _modDef10448;
  } else if (PremiumUtils.Branding.PREMIUM_GUILD === premiumBranding) {
    tmp4Result7 = _modDef10449;
  }
  const obj10 = { source: tmp4Result7, style: null };
  const items1 = [tmp10.headerImage, tmp.headerImage];
  obj10.style = items1;
  items[2] = React5(React3, obj10);
  obj7.children = items;
  const items2 = [closure_1_8(React4, obj7), ];
  const obj11 = { style: tmp.body, children: null };
  const obj12 = { source: null, style: null };
  const obj8 = { source: tmp4Result6, style: tmp9.logo };
  const tmp4Result = common_AlertDefault;
  obj12.source = getActivatedImage(premiumBranding, tmp6);
  obj12.style = tmp11.animation;
  const items3 = [React5(ShineAnimationDefault, obj12), ];
  const tmp4Result8 = ShineAnimationDefault;
  items3[1] = React5(native.LegacyText, { style: tmp.description, children: getDescription(premiumBranding, renewalMutations) });
  obj11.children = items3;
  items2[1] = closure_1_8(hasOwnProperty, obj11);
  obj6.children = items2;
  return closure_1_8(tmp4Result, obj6);
});