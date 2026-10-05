// === Module 13328: GuildBoostingUpsell ===

// Module 13328 (GuildBoostingUpsell)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import shared from "shared" /* 4729 */;
import useThemeDefault from "useTheme" /* 4791 */;
import BoostGemIcon from "BoostGemIcon" /* 4826 */;
import Text_Text from "Text/Text" /* 4886 */;
import ReactionIcon from "ReactionIcon" /* 8411 */;
import UploadIcon from "UploadIcon" /* 8878 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8894 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9232 */;
import StarIcon from "StarIcon" /* 9943 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12187 */;
import StickerIcon from "StickerIcon" /* 12190 */;
import _modDef13170 from "module_13170" /* 13170 */;
import _modDef13179 from "module_13179" /* 13179 */;
import _modDef13180 from "module_13180" /* 13180 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13205 */;
import _modDef13307 from "module_13307" /* 13307 */;
import _modDef13329 from "module_13329" /* 13329 */;
import BoostTier3Icon from "BoostTier3Icon" /* 13330 */;
import _modDef13332 from "module_13332" /* 13332 */;
import _modDef13333 from "module_13333" /* 13333 */;
import _modDef13334 from "module_13334" /* 13334 */;
import _modDef13335 from "module_13335" /* 13335 */;
import _modDef13336 from "module_13336" /* 13336 */;
import _modDef13337 from "module_13337" /* 13337 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13338 */;
import PremiumSubscriptionPricingUpsellDefault from "PremiumSubscriptionPricingUpsell" /* 13342 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 13343 */;
import PremiumSubscriptionUpsellDefault from "PremiumSubscriptionUpsell" /* 13344 */;
import noop from "module_19" /* 19 */;
import SortedGuildStore from "SortedGuildStore" /* 5616 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4, StyleSheet } = get_ActivityIndicator);
const FractionalPremiumStates = fn(1379).FractionalPremiumStates;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE }, subscriptionUpsell: { marginTop: 32 } };
let closure_9 = createStyles.createStyles(obj2);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    obj = { icon: closure_1(closure_2[7]), label: null, IconComponent: null, color: null };
    intl = closure_0(closure_2[8]).intl;
    obj.label = intl.string(closure_0(closure_2[8]).t["GS+bL0"]);
    obj.IconComponent = closure_0(closure_2[9]).BoostGemIcon;
    obj.color = closure_1(closure_2[6]).unsafe_rawColors.GUILD_BOOSTING_PINK;
    items = [, , ];
    items[0] = obj;
    obj1 = { icon: closure_1(closure_2[10]), label: null, IconComponent: null };
    intl2 = closure_0(closure_2[8]).intl;
    obj1.label = intl2.string(closure_0(closure_2[8]).t.a7LWeM);
    obj1.IconComponent = function IconComponent(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      obj.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
      return closure_1_7(BoostTier3Icon.BoostTier3Icon, obj);
    };
    items[1] = obj1;
    obj4 = { icon: closure_1(closure_2[12]), label: null, color: null, IconComponent: null };
    intl3 = closure_0(closure_2[8]).intl;
    obj4.label = intl3.string(closure_0(closure_2[8]).t.E76jz8);
    obj4.color = closure_1(closure_2[6]).unsafe_rawColors.YELLOW_300;
    obj4.IconComponent = closure_0(closure_2[13]).ShieldUserIcon;
    items[2] = obj4;
    return items;
  }
}
function FEATURES_PREMIUM_GUILD() {
  const obj = { icon: _modDef13333, label: null, IconComponent: null, color: null };
  const intl = util.intl;
  obj.label = intl.string(util.t.Ts7BVI);
  obj.IconComponent = ReactionIcon.ReactionIcon;
  obj.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW;
  const items = [obj, , , , ];
  const obj2 = { icon: _modDef13334, label: null, IconComponent: null, color: null };
  const intl2 = util.intl;
  obj2.label = intl2.string(util.t.QcJbt6);
  obj2.IconComponent = StickerIcon.StickerIcon;
  obj2.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE;
  items[1] = obj2;
  const obj3 = { icon: _modDef13335, label: null, color: "#4173da", IconComponent: null };
  const intl3 = util.intl;
  obj3.label = intl3.string(util.t.rFNkf5);
  obj3.IconComponent = HeadphonesIcon.HeadphonesIcon;
  items[2] = obj3;
  const obj4 = { icon: _modDef13336, label: null, IconComponent: null, color: null };
  const intl4 = util.intl;
  obj4.label = intl4.string(util.t["BpjjS/"]);
  obj4.IconComponent = UploadIcon.UploadIcon;
  obj4.color = nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK;
  items[3] = obj4;
  const obj5 = { icon: _modDef13337, label: null, IconComponent: null, color: null };
  const intl5 = util.intl;
  obj5.label = intl5.string(util.t["9g5Lgb"]);
  obj5.IconComponent = StarIcon.StarIcon;
  obj5.color = nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD;
  items[4] = obj5;
  return items;
}
const ReactCompilerGating = fn(558);
let obj3 = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((hasAvailableSlots) => {
  const cResult = c.c(58);
  ({ onLearnMorePremium, fractionalState, isInReverseTrial } = hasAvailableSlots);
  const tmp4 = closure_9();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [SortedGuildStore];
    const fn = function u() {
      return flattenedGuildIds.getFlattenedGuildIds().length > 0;
    };
    cResult[0] = items;
    cResult[1] = fn;
    tmp5 = items;
    tmp6 = fn;
  } else {
    [tmp5, tmp6] = cResult;
  }
  const stateFromStores = initialize.useStateFromStores(tmp5, tmp6);
  const tmpResult = initialize;
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const tmpResult4 = useSubscriptionPlansLoaded;
  const guildSubscriptionNoGuildsSource = GuildSubscriptionNoGuilds.useGuildSubscriptionNoGuildsSource();
  const tmpResult5 = GuildSubscriptionNoGuilds;
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      if (!hasAvailableSlots.hasAvailableSlots) {
        return null;
      }
    }
  }
  ({ root, header } = tmp4);
  if (cResult[2] !== tmp4.imgPremiumGuild) {
    const obj2 = { style: tmp4.imgPremiumGuild, source: _modDef13170 };
    const tmp18 = React5(React4, obj2);
    cResult[2] = tmp4.imgPremiumGuild;
    cResult[3] = tmp18;
    let tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  const tmp12 = useThemeDefault();
  if (tmpResult6.isThemeDark(tmp12)) {
    let tmp11Result = _modDef13179;
  } else {
    tmp11Result = _modDef13180;
  }
  if (cResult[4] === tmp4.logoPremiumGuild) {
    if (cResult[5] === tmp11Result) {
      let tmp20 = cResult[6];
    }
    const _Symbol = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t.hw6WTd);
      cResult[7] = stringResult;
      let tmp22 = stringResult;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp4.title) {
      const obj3 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp22 };
      const tmp26 = React5(Text_Text.Text, obj3);
      cResult[8] = tmp4.title;
      cResult[9] = tmp26;
      let tmp24 = tmp26;
    } else {
      tmp24 = cResult[9];
    }
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = util.intl;
      const stringResult1 = intl2.string(util.t.K5jBdG);
      cResult[10] = stringResult1;
      let tmp27 = stringResult1;
    } else {
      tmp27 = cResult[10];
    }
    if (cResult[11] !== tmp4.cardText) {
      const obj4 = { style: tmp4.cardText, variant: "text-md/medium", children: tmp27 };
      const tmp31 = React5(Text_Text.Text, obj4);
      cResult[11] = tmp4.cardText;
      cResult[12] = tmp31;
      let tmp29 = tmp31;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp24) {
        if (cResult[15] === tmp29) {
          if (cResult[16] === tmp15) {
            if (cResult[17] === tmp20) {
              let tmp32 = cResult[18];
            }
            const _Symbol3 = Symbol;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = util.intl;
              const stringResult2 = intl3.string(util.t.RvfRTB);
              cResult[19] = stringResult2;
              let tmp36 = stringResult2;
            } else {
              tmp36 = cResult[19];
            }
            if (cResult[20] !== tmp4.title) {
              const obj5 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp36 };
              const tmp40 = React5(Text_Text.Text, obj5);
              cResult[20] = tmp4.title;
              cResult[21] = tmp40;
              let tmp38 = tmp40;
            } else {
              tmp38 = cResult[21];
            }
            const _Symbol4 = Symbol;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp43 = FEATURES_PREMIUM_GUILD_USER();
              cResult[22] = tmp43;
              let tmp41 = tmp43;
            } else {
              tmp41 = cResult[22];
            }
            if (cResult[23] !== tmp4.features) {
              const obj6 = { style: tmp4.features, features: tmp41 };
              const tmp46 = React5(PremiumFeatureListDefault, obj6);
              cResult[23] = tmp4.features;
              cResult[24] = tmp46;
              let tmp44 = tmp46;
            } else {
              tmp44 = cResult[24];
            }
            const _Symbol5 = Symbol;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = util.intl;
              const stringResult3 = intl4.string(util.t["/pVhjb"]);
              cResult[25] = stringResult3;
              let tmp47 = stringResult3;
            } else {
              tmp47 = cResult[25];
            }
            if (cResult[26] !== tmp4.title) {
              const obj7 = { style: tmp4.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp47 };
              const tmp51 = React5(Text_Text.Text, obj7);
              cResult[26] = tmp4.title;
              cResult[27] = tmp51;
              let tmp49 = tmp51;
            } else {
              tmp49 = cResult[27];
            }
            const _Symbol6 = Symbol;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp54 = FEATURES_PREMIUM_GUILD();
              cResult[28] = tmp54;
              let tmp52 = tmp54;
            } else {
              tmp52 = cResult[28];
            }
            if (cResult[29] !== tmp4.features) {
              const obj8 = { style: tmp4.features, features: tmp52 };
              const tmp57 = React5(PremiumFeatureListDefault, obj8);
              cResult[29] = tmp4.features;
              cResult[30] = tmp57;
              let tmp55 = tmp57;
            } else {
              tmp55 = cResult[30];
            }
            if (cResult[31] === fractionalState) {
              if (cResult[32] === subscriptionPlansLoaded) {
                let tmp58 = cResult[33];
              }
              if (cResult[34] === stateFromStores) {
                if (cResult[35] === isInReverseTrial) {
                  if (cResult[36] === guildSubscriptionNoGuildsSource) {
                    if (cResult[37] === tmp4.cardText) {
                      if (cResult[38] === tmp4.guildList) {
                        if (cResult[39] === tmp4.imgNoGuilds) {
                          let tmp61 = cResult[40];
                        }
                        if (cResult[41] === subscriptionPlansLoaded) {
                          if (cResult[42] === onLearnMorePremium) {
                            if (cResult[43] === tmp4.subscriptionUpsell) {
                              let tmp69 = cResult[44];
                            }
                            if (cResult[45] === tmp4.upsell) {
                              if (cResult[46] === tmp58) {
                                if (cResult[47] === tmp61) {
                                  if (cResult[48] === tmp69) {
                                    let tmp72 = cResult[49];
                                  }
                                  if (cResult[50] === tmp4.root) {
                                    if (cResult[51] === tmp32) {
                                      if (cResult[52] === tmp38) {
                                        if (cResult[53] === tmp44) {
                                          if (cResult[54] === tmp49) {
                                            if (cResult[55] === tmp55) {
                                              if (cResult[56] === tmp72) {
                                                let tmp76 = cResult[57];
                                              }
                                              return tmp76;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj9 = { style: root, children: null };
                                  const items1 = [tmp32, tmp38, tmp44, tmp49, tmp55, tmp72];
                                  obj9.children = items1;
                                  const tmp79 = closure_1_8(React3, obj9);
                                  cResult[50] = tmp4.root;
                                  cResult[51] = tmp32;
                                  cResult[52] = tmp38;
                                  cResult[53] = tmp44;
                                  cResult[54] = tmp49;
                                  cResult[55] = tmp55;
                                  cResult[56] = tmp72;
                                  cResult[57] = tmp79;
                                  tmp76 = tmp79;
                                }
                              }
                            }
                            const obj10 = { style: tmp4.upsell, children: null };
                            const items2 = [tmp58, tmp61, tmp69];
                            obj10.children = items2;
                            const tmp75 = closure_1_8(React3, obj10);
                            cResult[45] = tmp4.upsell;
                            cResult[46] = tmp58;
                            cResult[47] = tmp61;
                            cResult[48] = tmp69;
                            cResult[49] = tmp75;
                            tmp72 = tmp75;
                          }
                        }
                        let tmp70 = null;
                        if (subscriptionPlansLoaded) {
                          const obj11 = { onLearnMorePremium, style: tmp4.subscriptionUpsell };
                          tmp70 = React5(PremiumSubscriptionUpsellDefault, obj11);
                        }
                        cResult[41] = subscriptionPlansLoaded;
                        cResult[42] = onLearnMorePremium;
                        cResult[43] = tmp4.subscriptionUpsell;
                        cResult[44] = tmp70;
                        tmp69 = tmp70;
                      }
                    }
                  }
                }
              }
              if (isInReverseTrial) {
                cResult[34] = stateFromStores;
                cResult[35] = isInReverseTrial;
                cResult[36] = guildSubscriptionNoGuildsSource;
                cResult[37] = tmp4.cardText;
                cResult[38] = tmp4.guildList;
                cResult[39] = tmp4.imgNoGuilds;
                cResult[40] = null;
                tmp61 = null;
              } else {
                const obj12 = { children: null };
                if (stateFromStores) {
                  const obj13 = { style: tmp4.cardText, variant: "text-md/medium", children: null };
                  const intl7 = util.intl;
                  obj13.children = intl7.string(util.t.WRzob8);
                  const items3 = [React5(Text_Text.Text, obj13), , ];
                  const obj14 = { style: null, variant: "text-md/bold", children: null };
                  const items4 = [tmp4.cardText];
                  obj14.style = items4;
                  const intl8 = util.intl;
                  obj14.children = intl8.string(util.t.j4bXcm);
                  items3[1] = React5(Text_Text.Text, obj14);
                  const obj15 = { style: tmp4.guildList };
                  items3[2] = React5(GuildBoostingGuildListDefault, obj15);
                  obj12.children = items3;
                  let tmp67 = obj12;
                } else {
                  const obj16 = { style: tmp4.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
                  const items5 = [React5(React4, obj16), , ];
                  const obj17 = { style: null, variant: "text-md/bold", children: null };
                  const items6 = [tmp4.cardText];
                  obj17.style = items6;
                  const intl5 = util.intl;
                  obj17.children = intl5.string(util.t.FHm4bZ);
                  items5[1] = React5(Text_Text.Text, obj17);
                  const obj18 = { style: tmp4.cardText, variant: "text-md/medium", children: null };
                  const intl6 = util.intl;
                  obj18.children = intl6.string(util.t.PSLiiu);
                  items5[2] = React5(Text_Text.Text, obj18);
                  obj12.children = items5;
                  tmp67 = obj12;
                }
                closure_1_8(React3, tmp67);
              }
            }
            let tmp59 = null;
            if (subscriptionPlansLoaded) {
              tmp59 = null;
              if (fractionalState === FractionalPremiumStates.NONE) {
                tmp59 = React5(PremiumSubscriptionPricingUpsellDefault, {});
              }
            }
            cResult[31] = fractionalState;
            cResult[32] = subscriptionPlansLoaded;
            cResult[33] = tmp59;
            tmp58 = tmp59;
          }
        }
      }
    }
    const obj19 = { style: header, children: null };
    const items7 = [tmp15, tmp20, tmp24, tmp29];
    obj19.children = items7;
    const tmp35 = closure_1_8(React3, obj19);
    cResult[13] = tmp4.header;
    cResult[14] = tmp24;
    cResult[15] = tmp29;
    cResult[16] = tmp15;
    cResult[17] = tmp20;
    cResult[18] = tmp35;
    tmp32 = tmp35;
  }
  const tmp21 = React5(React4, { style: tmp4.logoPremiumGuild, source: tmp11Result });
  cResult[4] = tmp4.logoPremiumGuild;
  cResult[5] = tmp11Result;
  cResult[6] = tmp21;
  tmp20 = tmp21;
  const obj20 = { style: tmp4.logoPremiumGuild, source: tmp11Result };
  tmpResult6 = shared;
}) : ((arg0) => {
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
  const items = [SortedGuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const subscriptionPlansLoaded = useSubscriptionPlansLoaded.useSubscriptionPlansLoaded();
  const guildSubscriptionNoGuildsSource = GuildSubscriptionNoGuilds.useGuildSubscriptionNoGuildsSource();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      let tmp11Result = null;
    }
    return tmp11Result;
  }
  const obj4 = { style: tmp.root, children: null };
  const obj5 = { style: tmp.header, children: null };
  const tmp8 = useThemeDefault();
  const items1 = [React5(React4, { style: tmp.imgPremiumGuild, source: _modDef13170 }), , , ];
  const obj7 = { style: tmp.logoPremiumGuild, source: null };
  const obj6 = { style: tmp.imgPremiumGuild, source: _modDef13170 };
  if (tmp2Result.isThemeDark(tmp8)) {
    let tmp7Result = _modDef13179;
  } else {
    tmp7Result = _modDef13180;
  }
  obj7.source = tmp7Result;
  items1[1] = React5(React4, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl = util.intl;
  obj8.children = intl.string(util.t.hw6WTd);
  items1[2] = React5(Text_Text.Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: null };
  const intl2 = util.intl;
  obj9.children = intl2.string(util.t.K5jBdG);
  items1[3] = React5(Text_Text.Text, obj9);
  obj5.children = items1;
  const items2 = [closure_1_8(React3, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl3 = util.intl;
  obj10.children = intl3.string(util.t.RvfRTB);
  items2[1] = React5(Text_Text.Text, obj10);
  const obj11 = { style: tmp.features, features: null };
  tmp2Result = shared;
  obj11.features = FEATURES_PREMIUM_GUILD_USER();
  items2[2] = React5(PremiumFeatureListDefault, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: null };
  const intl4 = util.intl;
  obj12.children = intl4.string(util.t["/pVhjb"]);
  items2[3] = React5(Text_Text.Text, obj12);
  const obj13 = { style: tmp.features, features: null };
  const tmp7Result3 = PremiumFeatureListDefault;
  obj13.features = FEATURES_PREMIUM_GUILD();
  items2[4] = React5(PremiumFeatureListDefault, obj13);
  const obj14 = { style: tmp.upsell, children: null };
  let tmp13Result = null;
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp13Result = React5(PremiumSubscriptionPricingUpsellDefault, {});
    }
  }
  const items3 = [tmp13Result, , ];
  if (isInReverseTrial) {
    items3[1] = null;
    let tmp13Result2 = null;
    if (subscriptionPlansLoaded) {
      const obj15 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
      tmp13Result2 = React5(PremiumSubscriptionUpsellDefault, obj15);
    }
    items3[2] = tmp13Result2;
    obj14.children = items3;
    items2[5] = closure_1_8(React3, obj14);
    obj4.children = items2;
    tmp11Result = closure_1_8(React3, obj4);
  } else {
    const obj16 = { children: null };
    if (stateFromStores) {
      const obj17 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl7 = util.intl;
      obj17.children = intl7.string(util.t.WRzob8);
      const items4 = [React5(Text_Text.Text, obj17), , ];
      const obj18 = { style: null, variant: "text-md/bold", children: null };
      const items5 = [tmp.cardText];
      obj18.style = items5;
      const intl8 = util.intl;
      obj18.children = intl8.string(util.t.j4bXcm);
      items4[1] = React5(Text_Text.Text, obj18);
      const obj19 = { style: tmp.guildList };
      items4[2] = React5(GuildBoostingGuildListDefault, obj19);
      obj16.children = items4;
      let tmp19 = obj16;
    } else {
      const obj20 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items6 = [React5(React4, obj20), , ];
      const obj21 = { style: null, variant: "text-md/bold", children: null };
      const items7 = [tmp.cardText];
      obj21.style = items7;
      const intl5 = util.intl;
      obj21.children = intl5.string(util.t.FHm4bZ);
      items6[1] = React5(Text_Text.Text, obj21);
      const obj22 = { style: tmp.cardText, variant: "text-md/medium", children: null };
      const intl6 = util.intl;
      obj22.children = intl6.string(util.t.PSLiiu);
      items6[2] = React5(Text_Text.Text, obj22);
      obj16.children = items6;
      tmp19 = obj16;
    }
    closure_1_8(React3, tmp19);
  }
  const tmp7Result4 = PremiumFeatureListDefault;
});
export { FEATURES_PREMIUM_GUILD_USER };