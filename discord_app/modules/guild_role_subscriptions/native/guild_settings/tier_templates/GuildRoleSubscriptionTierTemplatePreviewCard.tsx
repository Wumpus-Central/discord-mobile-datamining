// === Module 18311: GuildRoleSubscriptionTierTemplatePreviewCard ===

// Module 18311 (GuildRoleSubscriptionTierTemplatePreviewCard)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1264 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import Text_Text from "Text/Text" /* 5086 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5105 */;
import useTypeConsolidationTextTransform from "useTypeConsolidationTextTransform" /* 6654 */;
import _modDef6837 from "module_6837" /* 6837 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 18315 */;
import GuildRoleSubscriptionTierTemplateActionCreators from "GuildRoleSubscriptionTierTemplateActionCreators" /* 18317 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1085);
({ AnalyticEvents: closure_7, GuildSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(5090);
let obj2 = { container: { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: 319 }, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, separator: null, contentContainer: null, contentHeader: null, viewEntireTemplateFooter: null, viewEntireTemplateFooterUnderline: null };
let obj3 = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: 319 };
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
obj2.separator = size;
let obj5 = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
obj2.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16, paddingBottom: 0 };
obj2.contentHeader = { textTransform: "uppercase" };
let obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16, paddingBottom: 0 };
obj2.viewEntireTemplateFooter = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
const rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
obj2.viewEntireTemplateFooterUnderline = rect;
let closure_11 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_12 = ReactCompilerGating.isReactCompilerEnabled() ? (function ContentHeader(arg0) {
  const cResult = c.c(12);
  ({ count, title } = arg0);
  const tmp4 = closure_11();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TierTemplatePreviewCard", "text-xs/bold");
  if (cResult[0] === typeConsolidationEyebrow.style) {
    if (cResult[1] === tmp4.contentHeader) {
      let tmp6 = cResult[2];
    }
    if (cResult[3] === count) {
      if (cResult[4] === typeConsolidationEyebrow.variant) {
        if (cResult[5] === tmp4.contentHeader) {
          let tmp7 = cResult[6];
        }
        if (cResult[7] === typeConsolidationEyebrow.variant) {
          if (cResult[8] === tmp6) {
            if (cResult[9] === tmp7) {
              if (cResult[10] === title) {
                let tmp10 = cResult[11];
              }
              return tmp10;
            }
          }
        }
        const obj3 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: tmp6, children: null };
        const items = [tmp7, " ", title];
        obj3.children = items;
        const tmp12 = collapsed(Text_Text.Text, obj3);
        cResult[7] = typeConsolidationEyebrow.variant;
        cResult[8] = tmp6;
        cResult[9] = tmp7;
        cResult[10] = title;
        cResult[11] = tmp12;
        tmp10 = tmp12;
      }
    }
    const obj4 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp4.contentHeader, children: count };
    const tmp9 = options(Text_Text.Text, obj4);
    cResult[3] = count;
    cResult[4] = typeConsolidationEyebrow.variant;
    cResult[5] = tmp4.contentHeader;
    cResult[6] = tmp9;
    tmp7 = tmp9;
  }
  const items1 = [tmp4.contentHeader, typeConsolidationEyebrow.style];
  cResult[0] = typeConsolidationEyebrow.style;
  cResult[1] = tmp4.contentHeader;
  cResult[2] = items1;
  tmp6 = items1;
}) : (function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = closure_11();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow("TierTemplatePreviewCard", "text-xs/bold");
  const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
  const items = [tmp.contentHeader, typeConsolidationEyebrow.style];
  obj2.style = items;
  const items1 = [options(Text_Text.Text, { variant: typeConsolidationEyebrow.variant, color: "text-default", style: tmp.contentHeader, children: count }), " ", title];
  obj2.children = items1;
  return collapsed(Text_Text.Text, obj2);
});
ReactCompilerGating = fn(558);
let closure_13 = ReactCompilerGating.isReactCompilerEnabled() ? (function Separator() {
  const cResult = c.c(2);
  const tmp2 = closure_11();
  if (cResult[0] !== tmp2.separator) {
    const obj2 = { style: tmp2.separator };
    const tmp6 = options(newPricesToPick, obj2);
    cResult[0] = tmp2.separator;
    cResult[1] = tmp6;
    let tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  return tmp3;
}) : (function Separator() {
  return options(newPricesToPick, { style: closure_11().separator });
});
ReactCompilerGating = fn(558);
let closure_14 = ReactCompilerGating.isReactCompilerEnabled() ? (function BenefitShowCase(arg0) {
  const cResult = c.c(8);
  ({ title, description } = arg0);
  if (cResult[0] !== title) {
    let tmp5 = title;
    if (typeof title === "string") {
      const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
      tmp5 = options(Text_Text.Text, obj2);
    }
    cResult[0] = title;
    cResult[1] = tmp5;
    let tmp4 = tmp5;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp8 = options(native.Spacer, { size: 2 });
    cResult[2] = tmp8;
    let tmp6 = tmp8;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== description) {
    const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
    const tmp11 = options(Text_Text.Text, obj3);
    cResult[3] = description;
    cResult[4] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[4];
  }
  if (cResult[5] === tmp4) {
    if (cResult[6] === tmp9) {
      let tmp12 = cResult[7];
    }
    return tmp12;
  }
  const obj4 = { children: null };
  const items = [tmp4, tmp6, tmp9];
  obj4.children = items;
  const tmp13 = collapsed(newPricesToPick, obj4);
  cResult[5] = tmp4;
  cResult[6] = tmp9;
  cResult[7] = tmp13;
  tmp12 = tmp13;
}) : (function BenefitShowCase(children) {
  const title = children.title;
  let tmp3 = title;
  if (typeof title === "string") {
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = options(Text_Text.Text, obj2);
  }
  const obj = { children: null };
  const items = [tmp3, options(native.Spacer, { size: 2 }), options(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: children.description })];
  obj.children = items;
  return collapsed(newPricesToPick, obj);
});
ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function ChannelBenefitShowCase(channel) {
  const cResult = c.c(14);
  ({ description, type, name } = channel.channel);
  if (cResult[0] !== type) {
    const privateChannelIconComponent = GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(type);
    cResult[0] = type;
    cResult[1] = privateChannelIconComponent;
    let tmp4 = privateChannelIconComponent;
    const tmpResult = GuildRoleSubscriptionTierTemplateUtils;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { flexDirection: "row", alignItems: "center" };
    cResult[2] = obj2;
    let tmp6 = obj2;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const tmp9 = options(tmp4, { size: "xs" });
    cResult[3] = tmp4;
    cResult[4] = tmp9;
    let tmp7 = tmp9;
  } else {
    tmp7 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp12 = options(native.Spacer, { size: 4 });
    cResult[5] = tmp12;
    let tmp10 = tmp12;
  } else {
    tmp10 = cResult[5];
  }
  if (cResult[6] !== name) {
    const obj3 = { variant: "text-md/semibold", color: "text-default", children: name };
    const tmp15 = options(Text_Text.Text, obj3);
    cResult[6] = name;
    cResult[7] = tmp15;
    let tmp13 = tmp15;
  } else {
    tmp13 = cResult[7];
  }
  if (cResult[8] === tmp7) {
    if (cResult[9] === tmp13) {
      let tmp16 = cResult[10];
    }
    if (cResult[11] === description) {
      if (cResult[12] === tmp16) {
        let tmp18 = cResult[13];
      }
      return tmp18;
    }
    const obj4 = { title: tmp16, description };
    const tmp21 = options(closure_14, obj4);
    cResult[11] = description;
    cResult[12] = tmp16;
    cResult[13] = tmp21;
    tmp18 = tmp21;
  }
  const obj5 = { style: tmp6, children: null };
  const items = [tmp7, tmp10, tmp13];
  obj5.children = items;
  const tmp17 = collapsed(newPricesToPick, obj5);
  cResult[8] = tmp7;
  cResult[9] = tmp13;
  cResult[10] = tmp17;
  tmp16 = tmp17;
}) : (function ChannelBenefitShowCase(channel) {
  ({ description, type, name } = channel.channel);
  const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const items = [options(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(type), { size: "xs" }), options(native.Spacer, { size: 4 }), options(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: name })];
  obj2.children = items;
  return options(closure_14, { title: collapsed(newPricesToPick, obj2), description });
});
ReactCompilerGating = fn(558);
let closure_16 = ReactCompilerGating.isReactCompilerEnabled() ? (function ViewEntireTemplateFooter() {
  const cResult = c.c(8);
  const tmp4 = closure_11();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
    const intl = util.intl;
    obj2.children = intl.string(util.t.kejaOD);
    const tmp8 = options(Text_Text.Text, obj2);
    const tmp9 = options(native.Spacer, { size: 3 });
    cResult[0] = tmp8;
    cResult[1] = tmp9;
    tmp5 = tmp8;
    tmp6 = tmp9;
  } else {
    [tmp5, tmp6] = cResult;
  }
  if (cResult[2] !== tmp4.viewEntireTemplateFooterUnderline) {
    const obj3 = { children: null };
    const items = [tmp5, tmp6, ];
    const obj4 = { style: tmp4.viewEntireTemplateFooterUnderline };
    items[2] = options(newPricesToPick, obj4);
    obj3.children = items;
    const tmp14 = collapsed(newPricesToPick, obj3);
    cResult[2] = tmp4.viewEntireTemplateFooterUnderline;
    cResult[3] = tmp14;
    let tmp10 = tmp14;
  } else {
    tmp10 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { children: null };
    const obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef6837, style: null };
    const obj7 = { transform: null };
    const items1 = [{ rotate: "180deg" }];
    obj7.transform = items1;
    obj6.style = obj7;
    obj5.children = options(native.Icon, obj6);
    const tmp19 = options(newPricesToPick, obj5);
    cResult[4] = tmp19;
    let tmp15 = tmp19;
  } else {
    tmp15 = cResult[4];
  }
  if (cResult[5] === tmp4.viewEntireTemplateFooter) {
    if (cResult[6] === tmp10) {
      let tmp20 = cResult[7];
    }
    return tmp20;
  }
  const obj8 = { style: tmp4.viewEntireTemplateFooter, children: null };
  const items2 = [tmp10, tmp15];
  obj8.children = items2;
  const tmp21 = collapsed(newPricesToPick, obj8);
  cResult[5] = tmp4.viewEntireTemplateFooter;
  cResult[6] = tmp10;
  cResult[7] = tmp21;
  tmp20 = tmp21;
}) : (function ViewEntireTemplateFooter() {
  const tmp = closure_11();
  const obj = { style: tmp.viewEntireTemplateFooter, children: null };
  const obj2 = { children: null };
  const obj3 = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t.kejaOD);
  const items = [options(Text_Text.Text, obj3), options(native.Spacer, { size: 3 }), options(newPricesToPick, { style: tmp.viewEntireTemplateFooterUnderline })];
  obj2.children = items;
  const items1 = [collapsed(newPricesToPick, obj2), ];
  const obj5 = { children: null };
  const obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef6837, style: null };
  const obj7 = { transform: null };
  const items2 = [{ rotate: "180deg" }];
  obj7.transform = items2;
  obj6.style = obj7;
  obj5.children = options(native.Icon, obj6);
  items1[1] = options(newPricesToPick, obj5);
  obj.children = items1;
  return collapsed(newPricesToPick, obj);
});
ReactCompilerGating = fn(558);
let obj7 = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  const cResult = template(navigation[7]).c(54);
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  const tmp4 = closure_11();
  let obj = template(navigation[7]);
  navigation = template(navigation[18]).useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj3 = { includeSoftDeleted: true };
    cResult[0] = obj3;
    let first = obj3;
  } else {
    first = cResult[0];
  }
  let obj2 = template(navigation[18]);
  const addNewEditStateFromTemplate = groupListingId(navigation[19]).useEditStateIds(groupListingId, template.editGroupId, first).addNewEditStateFromTemplate;
  ({ channels, additional_perks } = template.listings[0]);
  const first1 = channels[0];
  const first2 = additional_perks[0];
  if (cResult[1] === addNewEditStateFromTemplate) {
    if (cResult[2] === groupListingId) {
      if (cResult[3] === guildId) {
        if (cResult[4] === navigation) {
          let tmp10 = cResult[5];
        }
        const handleCreateFromTemplate = tmp10;
        const suggestedUnusedPrices = tmp(tmp2[23]).useSuggestedUnusedPrices(guildId, priceTiers, tmp7);
        let tmp12 = null != suggestedUnusedPrices;
        if (tmp12) {
          tmp12 = suggestedUnusedPrices.length > 0;
        }
        closure_7 = tmp12;
        if (cResult[6] === tmp10) {
          if (cResult[7] === tmp12) {
            if (cResult[8] === suggestedUnusedPrices) {
              let tmp13 = cResult[9];
            }
            const handleSelectTemplateInPreview = tmp13;
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              let obj5 = { numberOfLines: 2, ellipsizeMode: "tail" };
              cResult[10] = obj5;
              let tmp14 = obj5;
            } else {
              tmp14 = cResult[10];
            }
            if (cResult[11] === tmp13) {
              if (cResult[12] === tmp4.descriptionPlanTextStyle) {
                if (cResult[13] === tmp4.subscriptionPlanTextStyle) {
                  if (cResult[14] === template) {
                    let tmp15 = cResult[15];
                  }
                  const _Symbol2 = Symbol;
                  if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                    const fn2 = function q() {
                      return closure_1_9(closure_1_13, {});
                    };
                    cResult[16] = fn2;
                    let tmp18 = fn2;
                  } else {
                    tmp18 = cResult[16];
                  }
                  if (cResult[17] !== length) {
                    const intl = tmp(tmp2[16]).intl;
                    const obj6 = { numChannels: length };
                    const formatToPlainStringResult = intl.formatToPlainString(tmp(tmp2[16]).t.y7dUrm, obj6);
                    cResult[17] = length;
                    cResult[18] = formatToPlainStringResult;
                    let tmp19 = formatToPlainStringResult;
                  } else {
                    tmp19 = cResult[18];
                  }
                  if (cResult[19] === length) {
                    if (cResult[20] === tmp19) {
                      let tmp21 = cResult[21];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp27 = closure_9(tmp(tmp2[14]).Spacer, { size: 12 });
                      cResult[22] = tmp27;
                      let tmp25 = tmp27;
                    } else {
                      tmp25 = cResult[22];
                    }
                    if (cResult[23] !== first1) {
                      const obj7 = { channel: first1 };
                      const tmp31 = closure_9(closure_15, obj7);
                      cResult[23] = first1;
                      cResult[24] = tmp31;
                      let tmp28 = tmp31;
                    } else {
                      tmp28 = cResult[24];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp34 = closure_9(tmp(tmp2[14]).Spacer, { size: 6 });
                      cResult[25] = tmp34;
                      let tmp32 = tmp34;
                    } else {
                      tmp32 = cResult[25];
                    }
                    if (cResult[26] === tmp21) {
                      if (cResult[27] === tmp28) {
                        let tmp35 = cResult[28];
                      }
                      if (cResult[29] !== length2) {
                        const intl2 = tmp(tmp2[16]).intl;
                        const obj8 = { numBenefits: length2 };
                        const formatToPlainStringResult1 = intl2.formatToPlainString(tmp(tmp2[16]).t.MR7oOF, obj8);
                        cResult[29] = length2;
                        cResult[30] = formatToPlainStringResult1;
                        let tmp40 = formatToPlainStringResult1;
                      } else {
                        tmp40 = cResult[30];
                      }
                      if (cResult[31] === length2) {
                        if (cResult[32] === tmp40) {
                          let tmp42 = cResult[33];
                        }
                        const _Symbol5 = Symbol;
                        if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp48 = closure_9(tmp(tmp2[14]).Spacer, { size: 12 });
                          cResult[34] = tmp48;
                          let tmp46 = tmp48;
                        } else {
                          tmp46 = cResult[34];
                        }
                        if (cResult[35] === first2.description) {
                          if (cResult[36] === first2.name) {
                            let tmp49 = cResult[37];
                          }
                          const _Symbol6 = Symbol;
                          if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp55 = closure_9(tmp(tmp2[14]).Spacer, { size: 6 });
                            cResult[38] = tmp55;
                          }
                          if (cResult[39] === tmp42) {
                            if (cResult[40] === tmp49) {
                              let tmp56 = cResult[41];
                            }
                            if (cResult[42] === tmp35) {
                              if (cResult[43] === tmp56) {
                                let tmp60 = cResult[44];
                              }
                              const _Symbol7 = Symbol;
                              if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                const tmp66 = closure_9(closure_16, {});
                                cResult[45] = tmp66;
                                let tmp63 = tmp66;
                              } else {
                                tmp63 = cResult[45];
                              }
                              function handleViewEntireTemplate() {
                                ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18312, dependencyMap.paths), "TierTemplateCard", { template, guildId, handleSelectTemplateInPreview });
                              }
                              if (cResult[46] === handleViewEntireTemplate) {
                                if (cResult[47] === tmp4.contentContainer) {
                                  if (cResult[48] === tmp60) {
                                    let tmp67 = cResult[49];
                                  }
                                  if (cResult[50] === tmp4.container) {
                                    if (cResult[51] === tmp67) {
                                      if (cResult[52] === tmp15) {
                                        let tmp71 = cResult[53];
                                      }
                                      return tmp71;
                                    }
                                  }
                                  const obj9 = { style: tmp4.container, children: null };
                                  const items = [tmp15, tmp67];
                                  obj9.children = items;
                                  const tmp74 = closure_10(suggestedUnusedPrices, obj9);
                                  class N {
                                    constructor(arg0, arg1) {
                                      tmp = closure_5;
                                      if (closure_7) {
                                        tmp4 = closure_6;
                                        tmp5 = closure_1;
                                        tmp6 = closure_3;
                                        obj = closure_1(closure_3[10]);
                                        tmp7 = closure_0;
                                        obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                                        obj1.selectedTemplate = template;
                                        obj1.handleCreateFromTemplate = tmp;
                                        obj1.newPricesToPick = closure_6;
                                        str = "TierTemplatePriceReselectionCard";
                                        openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                                      } else {
                                        tmp2 = arg1;
                                        tmpResult = tmp(template, arg1);
                                      }
                                      return;
                                    }
                                  }
                                  cResult[51] = tmp67;
                                  cResult[52] = tmp15;
                                  cResult[53] = tmp74;
                                  tmp71 = tmp74;
                                }
                              }
                              const obj10 = { style: tmp4.contentContainer, onPress: handleViewEntireTemplate, children: null };
                              const items1 = [, ];
                              class N {
                                constructor(arg0, arg1) {
                                  tmp = closure_5;
                                  if (closure_7) {
                                    tmp4 = closure_6;
                                    tmp5 = closure_1;
                                    tmp6 = closure_3;
                                    obj = closure_1(closure_3[10]);
                                    tmp7 = closure_0;
                                    obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                                    obj1.selectedTemplate = template;
                                    obj1.handleCreateFromTemplate = tmp;
                                    obj1.newPricesToPick = closure_6;
                                    str = "TierTemplatePriceReselectionCard";
                                    openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                                  } else {
                                    tmp2 = arg1;
                                    tmpResult = tmp(template, arg1);
                                  }
                                  return;
                                }
                              }
                              items1[1] = tmp63;
                              obj10.children = items1;
                              const tmp70 = closure_10(handleCreateFromTemplate, obj10);
                              cResult[46] = handleViewEntireTemplate;
                              cResult[47] = tmp4.contentContainer;
                              cResult[48] = tmp60;
                              cResult[49] = tmp70;
                              tmp67 = tmp70;
                            }
                            const obj11 = { renderGap: tmp18, children: null };
                            const items2 = [tmp35, tmp56];
                            obj11.children = items2;
                            const tmp62 = closure_10(tmp(tmp2[25]).GappedList, obj11);
                            cResult[42] = tmp35;
                            class N {
                              constructor(arg0, arg1) {
                                tmp = closure_5;
                                if (closure_7) {
                                  tmp4 = closure_6;
                                  tmp5 = closure_1;
                                  tmp6 = closure_3;
                                  obj = closure_1(closure_3[10]);
                                  tmp7 = closure_0;
                                  obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                                  obj1.selectedTemplate = template;
                                  obj1.handleCreateFromTemplate = tmp;
                                  obj1.newPricesToPick = closure_6;
                                  str = "TierTemplatePriceReselectionCard";
                                  openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                                } else {
                                  tmp2 = arg1;
                                  tmpResult = tmp(template, arg1);
                                }
                                return;
                              }
                            }
                            cResult[43] = tmp56;
                            cResult[44] = tmp62;
                            tmp60 = tmp62;
                          }
                          const obj12 = { children: null };
                          const items3 = [tmp42, tmp46, tmp49, ];
                          class N {
                            constructor(arg0, arg1) {
                              tmp = closure_5;
                              if (closure_7) {
                                tmp4 = closure_6;
                                tmp5 = closure_1;
                                tmp6 = closure_3;
                                obj = closure_1(closure_3[10]);
                                tmp7 = closure_0;
                                obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                                obj1.selectedTemplate = template;
                                obj1.handleCreateFromTemplate = tmp;
                                obj1.newPricesToPick = closure_6;
                                str = "TierTemplatePriceReselectionCard";
                                openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                              } else {
                                tmp2 = arg1;
                                tmpResult = tmp(template, arg1);
                              }
                              return;
                            }
                          }
                          obj12.children = items3;
                          const tmp59 = closure_10(suggestedUnusedPrices, obj12);
                          cResult[39] = tmp42;
                          cResult[40] = tmp49;
                          cResult[41] = tmp59;
                          tmp56 = tmp59;
                        }
                        ({ name: obj14.title, description: obj14.description } = first2);
                        const tmp52 = closure_9(closure_14, { title: null, description: null });
                        class N {
                          constructor(arg0, arg1) {
                            tmp = closure_5;
                            if (closure_7) {
                              tmp4 = closure_6;
                              tmp5 = closure_1;
                              tmp6 = closure_3;
                              obj = closure_1(closure_3[10]);
                              tmp7 = closure_0;
                              obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                              obj1.selectedTemplate = template;
                              obj1.handleCreateFromTemplate = tmp;
                              obj1.newPricesToPick = closure_6;
                              str = "TierTemplatePriceReselectionCard";
                              openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                            } else {
                              tmp2 = arg1;
                              tmpResult = tmp(template, arg1);
                            }
                            return;
                          }
                        }
                        cResult[36] = first2.name;
                        cResult[37] = tmp52;
                        tmp49 = tmp52;
                        const obj13 = { title: null, description: null };
                      }
                      const obj15 = { title: tmp40, count: length2 };
                      const tmp45 = closure_9(closure_12, obj15);
                      cResult[31] = length2;
                      class N {
                        constructor(arg0, arg1) {
                          tmp = closure_5;
                          if (closure_7) {
                            tmp4 = closure_6;
                            tmp5 = closure_1;
                            tmp6 = closure_3;
                            obj = closure_1(closure_3[10]);
                            tmp7 = closure_0;
                            obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                            obj1.selectedTemplate = template;
                            obj1.handleCreateFromTemplate = tmp;
                            obj1.newPricesToPick = closure_6;
                            str = "TierTemplatePriceReselectionCard";
                            openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                          } else {
                            tmp2 = arg1;
                            tmpResult = tmp(template, arg1);
                          }
                          return;
                        }
                      }
                      cResult[33] = tmp45;
                      tmp42 = tmp45;
                    }
                    const obj16 = { children: null };
                    class N {
                      constructor(arg0, arg1) {
                        tmp = closure_5;
                        if (closure_7) {
                          tmp4 = closure_6;
                          tmp5 = closure_1;
                          tmp6 = closure_3;
                          obj = closure_1(closure_3[10]);
                          tmp7 = closure_0;
                          obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                          obj1.selectedTemplate = template;
                          obj1.handleCreateFromTemplate = tmp;
                          obj1.newPricesToPick = closure_6;
                          str = "TierTemplatePriceReselectionCard";
                          openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                        } else {
                          tmp2 = arg1;
                          tmpResult = tmp(template, arg1);
                        }
                        return;
                      }
                    }
                    tmp38[0] = tmp21;
                    tmp38[1] = tmp25;
                    tmp38[2] = tmp28;
                    tmp38[3] = tmp32;
                    obj16.children = tmp38;
                    const tmp39 = closure_10(suggestedUnusedPrices, obj16);
                    cResult[26] = tmp21;
                    cResult[27] = tmp28;
                    cResult[28] = tmp39;
                    tmp35 = tmp39;
                  }
                  const obj17 = { title: tmp19, count: length };
                  class N {
                    constructor(arg0, arg1) {
                      tmp = closure_5;
                      if (closure_7) {
                        tmp4 = closure_6;
                        tmp5 = closure_1;
                        tmp6 = closure_3;
                        obj = closure_1(closure_3[10]);
                        tmp7 = closure_0;
                        obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                        obj1.selectedTemplate = template;
                        obj1.handleCreateFromTemplate = tmp;
                        obj1.newPricesToPick = closure_6;
                        str = "TierTemplatePriceReselectionCard";
                        openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                      } else {
                        tmp2 = arg1;
                        tmpResult = tmp(template, arg1);
                      }
                      return;
                    }
                  }
                  cResult[19] = length;
                  cResult[20] = tmp19;
                  cResult[21] = tmp24;
                  tmp21 = tmp24;
                }
              }
            }
            const obj18 = { template, handleSelectTemplateInPreview: tmp13, subscriptionPlanTextStyle: tmp4.subscriptionPlanTextStyle, descriptionTextStyle: null, closeActionSheet: false, descriptionTextProps: null };
            class N {
              constructor(arg0, arg1) {
                tmp = closure_5;
                if (closure_7) {
                  tmp4 = closure_6;
                  tmp5 = closure_1;
                  tmp6 = closure_3;
                  obj = closure_1(closure_3[10]);
                  tmp7 = closure_0;
                  obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
                  obj1.selectedTemplate = template;
                  obj1.handleCreateFromTemplate = tmp;
                  obj1.newPricesToPick = closure_6;
                  str = "TierTemplatePriceReselectionCard";
                  openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
                } else {
                  tmp2 = arg1;
                  tmpResult = tmp(template, arg1);
                }
                return;
              }
            }
            obj18.descriptionTextProps = tmp14;
            const tmp17 = closure_9(tmp(tmp2[24]).GuildRoleSubscriptionTierTemplateBasicInfo, obj18);
            cResult[11] = tmp13;
            cResult[12] = tmp4.descriptionPlanTextStyle;
            cResult[13] = tmp4.subscriptionPlanTextStyle;
            cResult[14] = template;
            cResult[15] = tmp17;
            tmp15 = tmp17;
          }
        }
        class N {
          constructor(arg0, arg1) {
            tmp = closure_5;
            if (closure_7) {
              tmp4 = closure_6;
              tmp5 = closure_1;
              tmp6 = closure_3;
              obj = closure_1(closure_3[10]);
              tmp7 = closure_0;
              obj1 = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
              obj1.selectedTemplate = template;
              obj1.handleCreateFromTemplate = tmp;
              obj1.newPricesToPick = closure_6;
              str = "TierTemplatePriceReselectionCard";
              openLazyResult = obj.openLazy(closure_0(closure_3[12])(closure_3[13], closure_3.paths), "TierTemplatePriceReselectionCard", obj1);
            } else {
              tmp2 = arg1;
              tmpResult = tmp(template, arg1);
            }
            return;
          }
        }
        cResult[6] = tmp10;
        cResult[7] = tmp12;
        cResult[8] = suggestedUnusedPrices;
        cResult[9] = N;
        tmp13 = N;
        let tmpResult = tmp(tmp2[23]);
      }
    }
  }
  const fn = function w(selectedTemplate, arg1) {
    const result = GuildRoleSubscriptionTierTemplateActionCreators.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { exit_reason: "template_selected" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj3.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj4);
    const replaced = navigation.replace(constants2.ROLE_SUBSCRIPTIONS_TIER_EDIT, { groupListingId, initialEditStateId: tmp5 });
    const obj5 = { groupListingId, initialEditStateId: tmp5 };
    const tmpResult = AppAnalyticsUtils;
  };
  cResult[1] = addNewEditStateFromTemplate;
  cResult[2] = groupListingId;
  cResult[3] = guildId;
  cResult[4] = navigation;
  cResult[5] = fn;
  tmp10 = fn;
  let obj4 = groupListingId(navigation[19]);
}) : (function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  let navigation;
  closure_7 = undefined;
  let callback1;
  const tmp = closure_11();
  navigation = template(navigation[18]).useNavigation();
  let obj = template(navigation[18]);
  const addNewEditStateFromTemplate = groupListingId(navigation[19]).useEditStateIds(groupListingId, template.editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const handleCreateFromTemplate = addNewEditStateFromTemplate.useCallback((selectedTemplate, arg1) => {
    const result = GuildRoleSubscriptionTierTemplateActionCreators.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { exit_reason: "template_selected" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj3.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj4);
    const replaced = navigation.replace(constants2.ROLE_SUBSCRIPTIONS_TIER_EDIT, { groupListingId, initialEditStateId: tmp5 });
    const obj5 = { groupListingId, initialEditStateId: tmp5 };
    const tmpResult = AppAnalyticsUtils;
  }, items);
  let obj2 = groupListingId(navigation[19]);
  let obj3 = addNewEditStateFromTemplate;
  const suggestedUnusedPrices = template(navigation[23]).useSuggestedUnusedPrices(guildId, priceTiers, first.price_tier);
  let tmp8 = null != suggestedUnusedPrices;
  if (tmp8) {
    tmp8 = suggestedUnusedPrices.length > 0;
  }
  closure_7 = tmp8;
  const items1 = [handleCreateFromTemplate, suggestedUnusedPrices, tmp8];
  callback1 = obj3.useCallback((selectedTemplate, arg1) => {
    if (closure_7) {
      const obj2 = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18316, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj2);
    } else {
      handleCreateFromTemplate(selectedTemplate, arg1);
    }
  }, items1);
  let obj5 = { style: tmp.container, children: null };
  const items2 = [closure_9(template(navigation[24]).GuildRoleSubscriptionTierTemplateBasicInfo, { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" } }), ];
  const obj7 = {
    style: tmp.contentContainer,
    onPress: function handleViewEntireTemplate() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18312, dependencyMap.paths), "TierTemplateCard", { template, guildId, handleSelectTemplateInPreview: callback1 });
    },
    children: null
  };
  const obj8 = {
    renderGap() {
      return closure_1_9(closure_1_13, {});
    },
    children: null
  };
  const obj9 = { children: null };
  const obj10 = { title: null, count: null };
  const intl = tmp2(tmp3[16]).intl;
  obj10.title = intl.formatToPlainString(template(navigation[16]).t.y7dUrm, { numChannels: channels.length });
  obj10.count = channels.length;
  const items3 = [closure_9(closure_12, obj10), closure_9(template(navigation[14]).Spacer, { size: 12 }), closure_9(closure_15, { channel: channels[0] }), closure_9(template(navigation[14]).Spacer, { size: 6 })];
  obj9.children = items3;
  const items4 = [closure_10(suggestedUnusedPrices, obj9), ];
  const obj11 = { children: null };
  const obj12 = { title: null, count: null };
  const intl2 = tmp2(tmp3[16]).intl;
  obj12.title = intl2.formatToPlainString(template(navigation[16]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj12.count = additional_perks.length;
  const items5 = [closure_9(closure_12, obj12), closure_9(template(navigation[14]).Spacer, { size: 12 }), closure_9(closure_14, { title: first1.name, description: first1.description }), closure_9(template(navigation[14]).Spacer, { size: 6 })];
  obj11.children = items5;
  items4[1] = closure_10(suggestedUnusedPrices, obj11);
  obj8.children = items4;
  const items6 = [closure_10(template(navigation[25]).GappedList, obj8), closure_9(closure_16, {})];
  obj7.children = items6;
  items2[1] = closure_10(handleCreateFromTemplate, obj7);
  obj5.children = items2;
  return closure_10(suggestedUnusedPrices, obj5);
});
export const CARD_WIDTH = 319;