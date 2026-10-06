// === Module 13347: GuildBoostingUpsell ===

// Module 13347 (GuildBoostingUpsell)
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl9 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import shared from "shared" /* 4735 */;
import useThemeDefault from "useTheme" /* 4797 */;
import BoostGemIcon from "BoostGemIcon" /* 4832 */;
import Text_Text from "Text/Text" /* 4892 */;
import ReactionIcon from "ReactionIcon" /* 8444 */;
import UploadIcon from "UploadIcon" /* 8907 */;
import PremiumFeatureListDefault from "PremiumFeatureList" /* 8923 */;
import ShieldUserIcon from "ShieldUserIcon" /* 9267 */;
import StarIcon from "StarIcon" /* 9956 */;
import HeadphonesIcon from "HeadphonesIcon" /* 12202 */;
import StickerIcon from "StickerIcon" /* 12205 */;
import AssetRegistryDefault from "AssetRegistry" /* 13189 */;
import AssetRegistryDefault2 from "AssetRegistry" /* 13198 */;
import AssetRegistryDefault3 from "AssetRegistry" /* 13199 */;
import useSubscriptionPlansLoaded from "useSubscriptionPlansLoaded" /* 13224 */;
import AssetRegistryDefault4 from "AssetRegistry" /* 13326 */;
import AssetRegistryDefault5 from "AssetRegistry" /* 13348 */;
import BoostTier3Icon2 from "BoostTier3Icon" /* 13349 */;
import AssetRegistryDefault6 from "AssetRegistry" /* 13351 */;
import AssetRegistryDefault7 from "AssetRegistry" /* 13352 */;
import AssetRegistryDefault8 from "AssetRegistry" /* 13353 */;
import AssetRegistryDefault9 from "AssetRegistry" /* 13354 */;
import AssetRegistryDefault10 from "AssetRegistry" /* 13355 */;
import AssetRegistryDefault11 from "AssetRegistry" /* 13356 */;
import GuildSubscriptionNoGuilds from "GuildSubscriptionNoGuilds" /* 13357 */;
import PremiumSubscriptionPricingUpsellDefault from "PremiumSubscriptionPricingUpsell" /* 13361 */;
import GuildBoostingGuildListDefault from "GuildBoostingGuildList" /* 13362 */;
import PremiumSubscriptionUpsellDefault from "PremiumSubscriptionUpsell" /* 13363 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import SortedGuildStore from "SortedGuildStore" /* 5623 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let StyleSheet;
let c3;
let closure_4;
let metroImportAll;
let metroImportDefault;
let obj2;
({ View: c3, Image: closure_4, StyleSheet } = react_native);
const FractionalPremiumStates = PremiumConstants.FractionalPremiumStates;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let obj = { root: { paddingHorizontal: 16, paddingVertical: 32 }, title: { marginTop: 16 }, features: { marginTop: 16 }, cardText: { lineHeight: 20, marginTop: 8, textAlign: "center" }, guildList: { marginTop: 16 }, logoPremiumGuild: { resizeMode: "contain", width: "100%", height: 34, maxWidth: 320, marginTop: 16 }, imgPremiumGuild: { width: 95, height: 65 }, imgNoGuilds: { width: 178, height: 112, marginTop: 32 }, header: { alignItems: "center" }, upsell: obj2, subscriptionUpsell: { marginTop: 32 } };
obj2 = { marginTop: 32, paddingTop: 16, borderTopWidth: 2 * StyleSheet.hairlineWidth, borderTopColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_9 = createStyles.createStyles(obj);
class FEATURES_PREMIUM_GUILD_USER {
  constructor() {
    let intl;
    let intl2;
    let intl3;
    let obj = { icon: AssetRegistryDefault4, label: intl.string(intl9.t["GS+bL0"]), IconComponent: BoostGemIcon.BoostGemIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
    intl = intl9.intl;
    const items = [obj, , ];
    const obj2 = {
      icon: AssetRegistryDefault5,
      label: intl2.string(intl9.t.a7LWeM),
      IconComponent(arg0) {
        const obj = { color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
        const BoostTier3Icon = BoostTier3Icon2.BoostTier3Icon;
        const merged = Object.assign(arg0);
        return closure_1_7(BoostTier3Icon, obj);
      }
    };
    intl2 = intl9.intl;
    items[1] = obj2;
    const obj3 = { icon: AssetRegistryDefault6, label: intl3.string(intl9.t.E76jz8), color: nativeDefault.unsafe_rawColors.YELLOW_300, IconComponent: ShieldUserIcon.ShieldUserIcon };
    intl3 = intl9.intl;
    items[2] = obj3;
    return items;
  }
}
function FEATURES_PREMIUM_GUILD() {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  const obj = { icon: AssetRegistryDefault7, label: intl.string(intl9.t.Ts7BVI), IconComponent: ReactionIcon.ReactionIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_YELLOW };
  intl = intl9.intl;
  const items = [obj, , , , ];
  const obj2 = { icon: AssetRegistryDefault8, label: intl2.string(intl9.t.QcJbt6), IconComponent: StickerIcon.StickerIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_PURPLE };
  intl2 = intl9.intl;
  items[1] = obj2;
  const obj3 = { icon: AssetRegistryDefault9, label: intl3.string(intl9.t.rFNkf5), color: "#4173da", IconComponent: HeadphonesIcon.HeadphonesIcon };
  intl3 = intl9.intl;
  items[2] = obj3;
  const obj4 = { icon: AssetRegistryDefault10, label: intl4.string(intl9.t["BpjjS/"]), IconComponent: UploadIcon.UploadIcon, color: nativeDefault.unsafe_rawColors.GUILD_BOOSTING_PINK };
  intl4 = intl9.intl;
  items[3] = obj4;
  const obj5 = { icon: AssetRegistryDefault11, label: intl5.string(intl9.t["9g5Lgb"]), IconComponent: StarIcon.StarIcon, color: nativeDefault.unsafe_rawColors.PREMIUM_PERK_GOLD };
  intl5 = intl9.intl;
  items[4] = obj5;
  return items;
}
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((hasAvailableSlots) => {
  let flattenedGuildIds;
  let fractionalState;
  let header;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isInReverseTrial;
  let items1;
  let items2;
  let items4;
  let items6;
  let items7;
  let onLearnMorePremium;
  let root;
  let tmp11Result;
  let tmp15;
  let tmp5;
  let tmp6;
  const obj = react2;
  const cResult = obj.c(58);
  ({ onLearnMorePremium, fractionalState, isInReverseTrial } = hasAvailableSlots);
  hasAvailableSlots = hasAvailableSlots.hasAvailableSlots;
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
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp5, tmp6);
  const tmpResult4 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = tmpResult4.useSubscriptionPlansLoaded();
  const tmpResult5 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = tmpResult5.useGuildSubscriptionNoGuildsSource();
  const tmp12 = useThemeDefault();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    if (!isInReverseTrial) {
      if (!hasAvailableSlots) {
        return null;
      }
    }
  }
  ({ root, header } = tmp4);
  if (cResult[2] !== tmp4.imgPremiumGuild) {
    const obj2 = { style: tmp4.imgPremiumGuild, source: AssetRegistryDefault };
    const tmp18 = metroImportDefault(React3, obj2);
    cResult[2] = tmp4.imgPremiumGuild;
    cResult[3] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[3];
  }
  const tmpResult6 = shared;
  if (tmpResult6.isThemeDark(tmp12)) {
    tmp11Result = AssetRegistryDefault2;
  } else {
    tmp11Result = AssetRegistryDefault3;
  }
  if (cResult[4] === tmp4.logoPremiumGuild) {
    let tmp20;
    let tmp22;
    let tmp24;
    let tmp27;
    let tmp29;
    if (cResult[5] === tmp11Result) {
      tmp20 = cResult[6];
    }
    const _Symbol = Symbol;
    const title = tmp4.title;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl9.intl;
      const stringResult = intl.string(intl9.t.hw6WTd);
      cResult[7] = stringResult;
      tmp22 = stringResult;
    } else {
      tmp22 = cResult[7];
    }
    if (cResult[8] !== tmp4.title) {
      const obj3 = { style: title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp22 };
      const tmp26 = metroImportDefault(Text_Text.Text, obj3);
      cResult[8] = tmp4.title;
      cResult[9] = tmp26;
      tmp24 = tmp26;
    } else {
      tmp24 = cResult[9];
    }
    const _Symbol2 = Symbol;
    const cardText = tmp4.cardText;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl9.intl;
      const stringResult1 = intl2.string(intl9.t.K5jBdG);
      cResult[10] = stringResult1;
      tmp27 = stringResult1;
    } else {
      tmp27 = cResult[10];
    }
    if (cResult[11] !== tmp4.cardText) {
      const obj4 = { style: cardText, variant: "text-md/medium", children: tmp27 };
      const tmp31 = metroImportDefault(Text_Text.Text, obj4);
      cResult[11] = tmp4.cardText;
      cResult[12] = tmp31;
      tmp29 = tmp31;
    } else {
      tmp29 = cResult[12];
    }
    if (cResult[13] === tmp4.header) {
      if (cResult[14] === tmp24) {
        if (cResult[15] === tmp29) {
          if (cResult[16] === tmp15) {
            let tmp32;
            let tmp36;
            let tmp38;
            let tmp41;
            let tmp44;
            let tmp47;
            let tmp49;
            let tmp52;
            let tmp55;
            if (cResult[17] === tmp20) {
              tmp32 = cResult[18];
            }
            const _Symbol3 = Symbol;
            const title2 = tmp4.title;
            if (cResult[19] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = intl9.intl;
              const stringResult2 = intl3.string(intl9.t.RvfRTB);
              cResult[19] = stringResult2;
              tmp36 = stringResult2;
            } else {
              tmp36 = cResult[19];
            }
            if (cResult[20] !== tmp4.title) {
              const obj5 = { style: title2, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp36 };
              const tmp40 = metroImportDefault(Text_Text.Text, obj5);
              cResult[20] = tmp4.title;
              cResult[21] = tmp40;
              tmp38 = tmp40;
            } else {
              tmp38 = cResult[21];
            }
            const _Symbol4 = Symbol;
            const features = tmp4.features;
            if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp43 = FEATURES_PREMIUM_GUILD_USER();
              cResult[22] = tmp43;
              tmp41 = tmp43;
            } else {
              tmp41 = cResult[22];
            }
            if (cResult[23] !== tmp4.features) {
              const obj6 = { style: features, features: tmp41 };
              const tmp46 = metroImportDefault(PremiumFeatureListDefault, obj6);
              cResult[23] = tmp4.features;
              cResult[24] = tmp46;
              tmp44 = tmp46;
            } else {
              tmp44 = cResult[24];
            }
            const _Symbol5 = Symbol;
            const title3 = tmp4.title;
            if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
              const intl4 = intl9.intl;
              const stringResult3 = intl4.string(intl9.t["/pVhjb"]);
              cResult[25] = stringResult3;
              tmp47 = stringResult3;
            } else {
              tmp47 = cResult[25];
            }
            if (cResult[26] !== tmp4.title) {
              const obj7 = { style: title3, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: tmp47 };
              const tmp51 = metroImportDefault(Text_Text.Text, obj7);
              cResult[26] = tmp4.title;
              cResult[27] = tmp51;
              tmp49 = tmp51;
            } else {
              tmp49 = cResult[27];
            }
            const _Symbol6 = Symbol;
            const features2 = tmp4.features;
            if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp54 = FEATURES_PREMIUM_GUILD();
              cResult[28] = tmp54;
              tmp52 = tmp54;
            } else {
              tmp52 = cResult[28];
            }
            if (cResult[29] !== tmp4.features) {
              const obj8 = { style: features2, features: tmp52 };
              const tmp57 = metroImportDefault(PremiumFeatureListDefault, obj8);
              cResult[29] = tmp4.features;
              cResult[30] = tmp57;
              tmp55 = tmp57;
            } else {
              tmp55 = cResult[30];
            }
            if (cResult[31] === fractionalState) {
              let tmp58;
              if (cResult[32] === subscriptionPlansLoaded) {
                tmp58 = cResult[33];
              }
              if (cResult[34] === stateFromStores) {
                if (cResult[35] === isInReverseTrial) {
                  if (cResult[36] === guildSubscriptionNoGuildsSource) {
                    if (cResult[37] === tmp4.cardText) {
                      if (cResult[38] === tmp4.guildList) {
                        let tmp61;
                        if (cResult[39] === tmp4.imgNoGuilds) {
                          tmp61 = cResult[40];
                        }
                        if (cResult[41] === subscriptionPlansLoaded) {
                          if (cResult[42] === onLearnMorePremium) {
                            let tmp68;
                            if (cResult[43] === tmp4.subscriptionUpsell) {
                              tmp68 = cResult[44];
                            }
                            if (cResult[45] === tmp4.upsell) {
                              if (cResult[46] === tmp58) {
                                if (cResult[47] === tmp61) {
                                  let tmp71;
                                  if (cResult[48] === tmp68) {
                                    tmp71 = cResult[49];
                                  }
                                  if (cResult[50] === tmp4.root) {
                                    if (cResult[51] === tmp32) {
                                      if (cResult[52] === tmp38) {
                                        if (cResult[53] === tmp44) {
                                          if (cResult[54] === tmp49) {
                                            if (cResult[55] === tmp55) {
                                              let tmp75;
                                              if (cResult[56] === tmp71) {
                                                tmp75 = cResult[57];
                                              }
                                              return tmp75;
                                            }
                                          }
                                        }
                                      }
                                    }
                                  }
                                  const obj9 = { style: root, children: items1 };
                                  items1 = [tmp32, tmp38, tmp44, tmp49, tmp55, tmp71];
                                  const tmp78 = metroImportAll(_false, obj9);
                                  cResult[50] = tmp4.root;
                                  cResult[51] = tmp32;
                                  cResult[52] = tmp38;
                                  cResult[53] = tmp44;
                                  cResult[54] = tmp49;
                                  cResult[55] = tmp55;
                                  cResult[56] = tmp71;
                                  cResult[57] = tmp78;
                                  tmp75 = tmp78;
                                }
                              }
                            }
                            const obj10 = { style: tmp4.upsell, children: items2 };
                            items2 = [tmp58, tmp61, tmp68];
                            const tmp74 = metroImportAll(_false, obj10);
                            cResult[45] = tmp4.upsell;
                            cResult[46] = tmp58;
                            cResult[47] = tmp61;
                            cResult[48] = tmp68;
                            cResult[49] = tmp74;
                            tmp71 = tmp74;
                          }
                        }
                        let tmp69 = null;
                        if (subscriptionPlansLoaded) {
                          const obj11 = { onLearnMorePremium, style: tmp4.subscriptionUpsell };
                          tmp69 = metroImportDefault(PremiumSubscriptionUpsellDefault, obj11);
                        }
                        cResult[41] = subscriptionPlansLoaded;
                        cResult[42] = onLearnMorePremium;
                        cResult[43] = tmp4.subscriptionUpsell;
                        cResult[44] = tmp69;
                        tmp68 = tmp69;
                      }
                    }
                  }
                }
              }
              let tmp63Result = null;
              if (!isInReverseTrial) {
                let tmp67;
                const obj12 = { children: null };
                if (stateFromStores) {
                  const obj13 = { style: tmp4.cardText, variant: "text-md/medium", children: intl7.string(intl9.t.WRzob8) };
                  const Text3 = Text_Text.Text;
                  intl7 = intl9.intl;
                  const items3 = [metroImportDefault(Text3, obj13), , ];
                  const obj14 = { style: items4, variant: "text-md/bold", children: intl8.string(intl9.t.j4bXcm) };
                  items4 = [tmp4.cardText];
                  const Text4 = Text_Text.Text;
                  intl8 = intl9.intl;
                  items3[1] = metroImportDefault(Text4, obj14);
                  const obj15 = { style: tmp4.guildList };
                  items3[2] = metroImportDefault(GuildBoostingGuildListDefault, obj15);
                  obj12.children = items3;
                  tmp67 = obj12;
                } else {
                  const obj16 = { style: tmp4.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
                  const items5 = [metroImportDefault(React3, obj16), , ];
                  const obj17 = { style: items6, variant: "text-md/bold", children: intl5.string(intl9.t.FHm4bZ) };
                  items6 = [tmp4.cardText];
                  const Text = Text_Text.Text;
                  intl5 = intl9.intl;
                  items5[1] = metroImportDefault(Text, obj17);
                  const obj18 = { style: tmp4.cardText, variant: "text-md/medium", children: intl6.string(intl9.t.PSLiiu) };
                  const Text2 = Text_Text.Text;
                  intl6 = intl9.intl;
                  items5[2] = metroImportDefault(Text2, obj18);
                  obj12.children = items5;
                  tmp67 = obj12;
                }
                tmp63Result = metroImportAll(_false, tmp67);
              }
              cResult[34] = stateFromStores;
              cResult[35] = isInReverseTrial;
              cResult[36] = guildSubscriptionNoGuildsSource;
              cResult[37] = tmp4.cardText;
              cResult[38] = tmp4.guildList;
              cResult[39] = tmp4.imgNoGuilds;
              cResult[40] = tmp63Result;
              tmp61 = tmp63Result;
            }
            let tmp59 = null;
            if (subscriptionPlansLoaded) {
              tmp59 = null;
              if (fractionalState === FractionalPremiumStates.NONE) {
                tmp59 = metroImportDefault(PremiumSubscriptionPricingUpsellDefault, {});
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
    const obj19 = { style: header, children: items7 };
    items7 = [tmp15, tmp20, tmp24, tmp29];
    const tmp35 = metroImportAll(_false, obj19);
    cResult[13] = tmp4.header;
    cResult[14] = tmp24;
    cResult[15] = tmp29;
    cResult[16] = tmp15;
    cResult[17] = tmp20;
    cResult[18] = tmp35;
    tmp32 = tmp35;
  }
  const obj20 = { style: tmp4.logoPremiumGuild, source: tmp11Result };
  const tmp21 = metroImportDefault(React3, obj20);
  cResult[4] = tmp4.logoPremiumGuild;
  cResult[5] = tmp11Result;
  cResult[6] = tmp21;
  tmp20 = tmp21;
}) : ((arg0) => {
  let flattenedGuildIds;
  let fractionalState;
  let hasAvailableSlots;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let isInReverseTrial;
  let items1;
  let items2;
  let items3;
  let items5;
  let items7;
  let onLearnMorePremium;
  let tmp7Result;
  ({ fractionalState, isInReverseTrial } = arg0);
  ({ onLearnMorePremium, hasAvailableSlots } = arg0);
  const tmp = closure_9();
  const items = [SortedGuildStore];
  const obj = get_initialized;
  const stateFromStores = obj.useStateFromStores(items, () => flattenedGuildIds.getFlattenedGuildIds().length > 0);
  const obj2 = useSubscriptionPlansLoaded;
  const subscriptionPlansLoaded = obj2.useSubscriptionPlansLoaded();
  const obj3 = GuildSubscriptionNoGuilds;
  const guildSubscriptionNoGuildsSource = obj3.useGuildSubscriptionNoGuildsSource();
  const tmp8 = useThemeDefault();
  if (fractionalState !== FractionalPremiumStates.NONE) {
    let tmp11Result2;
    if (!isInReverseTrial) {
      tmp11Result2 = null;
    }
    return tmp11Result2;
  }
  const obj5 = { style: tmp.header, children: items1 };
  items1 = [, , , ];
  const obj4 = { style: tmp.root, children: items2 };
  const obj6 = { style: tmp.imgPremiumGuild, source: AssetRegistryDefault };
  items1[0] = metroImportDefault(React3, obj6);
  const obj7 = { style: tmp.logoPremiumGuild, source: tmp7Result };
  const tmp2Result = shared;
  if (tmp2Result.isThemeDark(tmp8)) {
    tmp7Result = AssetRegistryDefault2;
  } else {
    tmp7Result = AssetRegistryDefault3;
  }
  items1[1] = metroImportDefault(React3, obj7);
  const obj8 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl.string(intl9.t.hw6WTd) };
  const Text = Text_Text.Text;
  intl = intl9.intl;
  items1[2] = metroImportDefault(Text, obj8);
  const obj9 = { style: tmp.cardText, variant: "text-md/medium", children: intl2.string(intl9.t.K5jBdG) };
  const Text2 = Text_Text.Text;
  intl2 = intl9.intl;
  items1[3] = metroImportDefault(Text2, obj9);
  items2 = [metroImportAll(_false, obj5), , , , , ];
  const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl3.string(intl9.t.RvfRTB) };
  const Text3 = Text_Text.Text;
  intl3 = intl9.intl;
  items2[1] = metroImportDefault(Text3, obj10);
  const obj11 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD_USER() };
  const tmp7Result3 = PremiumFeatureListDefault;
  items2[2] = metroImportDefault(tmp7Result3, obj11);
  const obj12 = { style: tmp.title, accessibilityRole: "header", variant: "heading-lg/semibold", color: "mobile-text-heading-primary", children: intl4.string(intl9.t["/pVhjb"]) };
  const Text4 = Text_Text.Text;
  intl4 = intl9.intl;
  items2[3] = metroImportDefault(Text4, obj12);
  const obj13 = { style: tmp.features, features: FEATURES_PREMIUM_GUILD() };
  const tmp7Result4 = PremiumFeatureListDefault;
  items2[4] = metroImportDefault(tmp7Result4, obj13);
  let tmp13Result = null;
  const obj14 = { style: tmp.upsell, children: items3 };
  if (subscriptionPlansLoaded) {
    tmp13Result = null;
    if (fractionalState === FractionalPremiumStates.NONE) {
      tmp13Result = metroImportDefault(PremiumSubscriptionPricingUpsellDefault, {});
    }
  }
  items3 = [tmp13Result, , ];
  let tmp11Result = null;
  if (!isInReverseTrial) {
    let tmp20;
    const obj15 = { children: null };
    if (stateFromStores) {
      const obj16 = { style: tmp.cardText, variant: "text-md/medium", children: intl7.string(intl9.t.WRzob8) };
      const Text7 = Text_Text.Text;
      intl7 = intl9.intl;
      const items4 = [metroImportDefault(Text7, obj16), , ];
      const obj17 = { style: items5, variant: "text-md/bold", children: intl8.string(intl9.t.j4bXcm) };
      items5 = [tmp.cardText];
      const Text8 = Text_Text.Text;
      intl8 = intl9.intl;
      items4[1] = metroImportDefault(Text8, obj17);
      const obj18 = { style: tmp.guildList };
      items4[2] = metroImportDefault(GuildBoostingGuildListDefault, obj18);
      obj15.children = items4;
      tmp20 = obj15;
    } else {
      const obj19 = { style: tmp.imgNoGuilds, source: guildSubscriptionNoGuildsSource };
      const items6 = [metroImportDefault(React3, obj19), , ];
      const obj20 = { style: items7, variant: "text-md/bold", children: intl5.string(intl9.t.FHm4bZ) };
      items7 = [tmp.cardText];
      const Text5 = Text_Text.Text;
      intl5 = intl9.intl;
      items6[1] = metroImportDefault(Text5, obj20);
      const obj21 = { style: tmp.cardText, variant: "text-md/medium", children: intl6.string(intl9.t.PSLiiu) };
      const Text6 = Text_Text.Text;
      intl6 = intl9.intl;
      items6[2] = metroImportDefault(Text6, obj21);
      obj15.children = items6;
      tmp20 = obj15;
    }
    tmp11Result = metroImportAll(_false, tmp20);
  }
  items3[1] = tmp11Result;
  let tmp13Result2 = null;
  if (subscriptionPlansLoaded) {
    const obj22 = { onLearnMorePremium, style: tmp.subscriptionUpsell };
    tmp13Result2 = metroImportDefault(PremiumSubscriptionUpsellDefault, obj22);
  }
  items3[2] = tmp13Result2;
  items2[5] = metroImportAll(_false, obj14);
  tmp11Result2 = metroImportAll(_false, obj4);
});
const result = size.fileFinishedImporting("components_native/premium/GuildBoostingUpsell.tsx");

export default tmp5;
export { FEATURES_PREMIUM_GUILD_USER };