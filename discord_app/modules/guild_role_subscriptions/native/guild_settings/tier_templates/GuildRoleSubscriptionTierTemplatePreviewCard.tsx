// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx
import react2 from "../../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import intl3 from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequire from "../../../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import useTypeConsolidationTextTransform from "../../../../design/useTypeConsolidationTextTransform.tsx";
import AssetRegistryDefault from "../../../../../../_runtime/06660_AssetRegistry.js";
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils.tsx";
import GuildRoleSubscriptionTierTemplateActionCreators from "../../../tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx";
import react from "../../../../../../_runtime/00019_react.js";
import react_native from "../../../../../../_runtime/00017_react-native.js";
import Constants from "../../../../../Constants.tsx";
import Fragment from "../../../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../../react_compiler/ReactCompilerGating.tsx";
import size_mod from "../../../../../../_runtime/metro/00002__.js";

let navigation, template;

let c10;
let c9;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let rect;
let size;
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = react_native);
({ AnalyticEvents: metroImportDefault, GuildSettingsSections: metroImportAll } = Constants);
({ jsx: c9, jsxs: c10 } = Fragment);
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  subscriptionPlanTextStyle: obj3,
  descriptionPlanTextStyle: obj4,
  separator: size,
  contentContainer: obj5,
  contentHeader: { textTransform: "uppercase" },
  viewEntireTemplateFooter: obj6,
  viewEntireTemplateFooterUnderline: rect,
};
obj2 = {
  padding: 16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  width: 319,
};
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj4 = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
size = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
obj5 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
  paddingBottom: 0,
};
obj6 = {
  paddingVertical: 16,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  marginLeft: -16,
  marginRight: -16,
  marginTop: 16,
};
rect = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
let closure_11 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_12 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let count;
      let items;
      let title;
      const obj = react2;
      const cResult = obj.c(12);
      ({ count, title } = arg0);
      const tmp4 = closure_11();
      const obj2 = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("TierTemplatePreviewCard", "text-xs/bold");
      if (cResult[0] === typeConsolidationEyebrow.style) {
        let tmp6;
        if (cResult[1] === tmp4.contentHeader) {
          tmp6 = cResult[2];
        }
        if (cResult[3] === count) {
          if (cResult[4] === typeConsolidationEyebrow.variant) {
            let tmp7;
            if (cResult[5] === tmp4.contentHeader) {
              tmp7 = cResult[6];
            }
            if (cResult[7] === typeConsolidationEyebrow.variant) {
              if (cResult[8] === tmp6) {
                if (cResult[9] === tmp7) {
                  let tmp10;
                  if (cResult[10] === title) {
                    tmp10 = cResult[11];
                  }
                  return tmp10;
                }
              }
            }
            const obj3 = {
              variant: typeConsolidationEyebrow.variant,
              color: "text-muted",
              style: tmp6,
              children: items,
            };
            items = [tmp7, " ", title];
            const tmp12 = authStore(Text_Text.Text, obj3);
            cResult[7] = typeConsolidationEyebrow.variant;
            cResult[8] = tmp6;
            cResult[9] = tmp7;
            cResult[10] = title;
            cResult[11] = tmp12;
            tmp10 = tmp12;
          }
        }
        const obj4 = {
          variant: typeConsolidationEyebrow.variant,
          color: "text-default",
          style: tmp4.contentHeader,
          children: count,
        };
        const tmp9 = React4(Text_Text.Text, obj4);
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
    }
  : (arg0) => {
      let count;
      let items;
      let items1;
      let title;
      ({ count, title } = arg0);
      const tmp = closure_11();
      const obj = useTypeConsolidationTextTransform;
      const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("TierTemplatePreviewCard", "text-xs/bold");
      const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: items, children: items1 };
      items = [tmp.contentHeader, typeConsolidationEyebrow.style];
      const Text = Text_Text.Text;
      items1 = [, ,];
      const obj3 = {
        variant: typeConsolidationEyebrow.variant,
        color: "text-default",
        style: tmp.contentHeader,
        children: count,
      };
      items1[0] = React4(Text_Text.Text, obj3);
      items1[1] = " ";
      items1[2] = title;
      return authStore(Text, obj2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_13 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp3;
      const obj = react2;
      const cResult = obj.c(2);
      const tmp2 = closure_11();
      if (cResult[0] !== tmp2.separator) {
        const obj2 = { style: tmp2.separator };
        const tmp6 = React4(metroRequire, obj2);
        cResult[0] = tmp2.separator;
        cResult[1] = tmp6;
        tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      return tmp3;
    }
  : () => {
      const obj = { style: closure_11().separator };
      return React4(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_14 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let description;
      let items;
      let title;
      let tmp4;
      let tmp6;
      let tmp9;
      const obj = react2;
      const cResult = obj.c(8);
      ({ title, description } = arg0);
      if (cResult[0] !== title) {
        let tmp5 = title;
        if (typeof title === "string") {
          const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
          tmp5 = React4(Text_Text.Text, obj2);
        }
        cResult[0] = title;
        cResult[1] = tmp5;
        tmp4 = tmp5;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp8 = React4(native.Spacer, { size: 2 });
        cResult[2] = tmp8;
        tmp6 = tmp8;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== description) {
        const obj3 = { variant: "text-sm/medium", color: "interactive-text-default", children: description };
        const tmp11 = React4(Text_Text.Text, obj3);
        cResult[3] = description;
        cResult[4] = tmp11;
        tmp9 = tmp11;
      } else {
        tmp9 = cResult[4];
      }
      if (cResult[5] === tmp4) {
        let tmp12;
        if (cResult[6] === tmp9) {
          tmp12 = cResult[7];
        }
        return tmp12;
      }
      const obj4 = { children: items };
      items = [tmp4, tmp6, tmp9];
      const tmp13 = authStore(metroRequire, obj4);
      cResult[5] = tmp4;
      cResult[6] = tmp9;
      cResult[7] = tmp13;
      tmp12 = tmp13;
    }
  : (title) => {
      let items;
      title = title.title;
      let tmp3 = title;
      const description = title.description;
      if (typeof title === "string") {
        const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
        tmp3 = React4(Text_Text.Text, obj2);
      }
      const obj = { children: items };
      items = [
        tmp3,
        React4(native.Spacer, { size: 2 }),
        React4(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: description }),
      ];
      return authStore(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled()
  ? (channel) => {
      let description;
      let items;
      let name;
      let tmp10;
      let tmp13;
      let tmp4;
      let tmp6;
      let tmp7;
      let type;
      const obj = react2;
      const cResult = obj.c(14);
      ({ description, type, name } = channel.channel);
      if (cResult[0] !== type) {
        const tmpResult = GuildRoleSubscriptionTierTemplateUtils;
        const privateChannelIconComponent = tmpResult.getPrivateChannelIconComponent(type);
        cResult[0] = type;
        cResult[1] = privateChannelIconComponent;
        tmp4 = privateChannelIconComponent;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { flexDirection: "row", alignItems: "center" };
        cResult[2] = obj2;
        tmp6 = obj2;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] !== tmp4) {
        const tmp9 = React4(tmp4, { size: "xs" });
        cResult[3] = tmp4;
        cResult[4] = tmp9;
        tmp7 = tmp9;
      } else {
        tmp7 = cResult[4];
      }
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp12 = React4(native.Spacer, { size: 4 });
        cResult[5] = tmp12;
        tmp10 = tmp12;
      } else {
        tmp10 = cResult[5];
      }
      if (cResult[6] !== name) {
        const obj3 = { variant: "text-md/semibold", color: "text-default", children: name };
        const tmp15 = React4(Text_Text.Text, obj3);
        cResult[6] = name;
        cResult[7] = tmp15;
        tmp13 = tmp15;
      } else {
        tmp13 = cResult[7];
      }
      if (cResult[8] === tmp7) {
        let tmp16;
        if (cResult[9] === tmp13) {
          tmp16 = cResult[10];
        }
        if (cResult[11] === description) {
          let tmp18;
          if (cResult[12] === tmp16) {
            tmp18 = cResult[13];
          }
          return tmp18;
        }
        const obj4 = { title: tmp16, description };
        const tmp21 = React4(closure_14, obj4);
        cResult[11] = description;
        cResult[12] = tmp16;
        cResult[13] = tmp21;
        tmp18 = tmp21;
      }
      const obj5 = { style: tmp6, children: items };
      items = [tmp7, tmp10, tmp13];
      const tmp17 = authStore(metroRequire, obj5);
      cResult[8] = tmp7;
      cResult[9] = tmp13;
      cResult[10] = tmp17;
      tmp16 = tmp17;
    }
  : (channel) => {
      let description;
      let items;
      let name;
      let type;
      ({ description, type, name } = channel.channel);
      const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: items };
      items = [, ,];
      const obj = GuildRoleSubscriptionTierTemplateUtils;
      items[0] = React4(obj.getPrivateChannelIconComponent(type), { size: "xs" });
      items[1] = React4(native.Spacer, { size: 4 });
      items[2] = React4(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: name });
      const obj3 = { title: authStore(metroRequire, obj2), description };
      return React4(closure_14, obj3);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let closure_16 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let Icon;
      let intl;
      let items;
      let items1;
      let items2;
      let obj6;
      let obj7;
      let tmp10;
      let tmp15;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(8);
      const tmp4 = closure_11();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = {
          variant: "text-sm/semibold",
          color: "interactive-text-hover",
          style: { marginTop: -1 },
          children: intl.string(intl3.t.kejaOD),
        };
        const Text = Text_Text.Text;
        intl = intl3.intl;
        const tmp8 = React4(Text, obj2);
        const tmp9 = React4(native.Spacer, { size: 3 });
        cResult[0] = tmp8;
        cResult[1] = tmp9;
        tmp5 = tmp8;
        tmp6 = tmp9;
      } else {
        [tmp5, tmp6] = cResult;
      }
      if (cResult[2] !== tmp4.viewEntireTemplateFooterUnderline) {
        const obj3 = { children: items };
        items = [tmp5, tmp6];
        const obj4 = { style: tmp4.viewEntireTemplateFooterUnderline };
        items[2] = React4(metroRequire, obj4);
        const tmp14 = authStore(metroRequire, obj3);
        cResult[2] = tmp4.viewEntireTemplateFooterUnderline;
        cResult[3] = tmp14;
        tmp10 = tmp14;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { children: React4(Icon, obj6) };
        obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, style: obj7 };
        Icon = native.Icon;
        obj7 = { transform: items1 };
        items1 = [{ rotate: "180deg" }];
        const tmp19 = React4(metroRequire, obj5);
        cResult[4] = tmp19;
        tmp15 = tmp19;
      } else {
        tmp15 = cResult[4];
      }
      if (cResult[5] === tmp4.viewEntireTemplateFooter) {
        let tmp20;
        if (cResult[6] === tmp10) {
          tmp20 = cResult[7];
        }
        return tmp20;
      }
      const obj8 = { style: tmp4.viewEntireTemplateFooter, children: items2 };
      items2 = [tmp10, tmp15];
      const tmp21 = authStore(metroRequire, obj8);
      cResult[5] = tmp4.viewEntireTemplateFooter;
      cResult[6] = tmp10;
      cResult[7] = tmp21;
      tmp20 = tmp21;
    }
  : () => {
      let Icon;
      let intl;
      let items;
      let items1;
      let items2;
      let obj6;
      let obj7;
      const tmp = closure_11();
      const obj = { style: tmp.viewEntireTemplateFooter, children: items1 };
      const obj2 = { children: items };
      const obj3 = {
        variant: "text-sm/semibold",
        color: "interactive-text-hover",
        style: { marginTop: -1 },
        children: intl.string(intl3.t.kejaOD),
      };
      const Text = Text_Text.Text;
      intl = intl3.intl;
      items = [React4(Text, obj3), React4(native.Spacer, { size: 3 })];
      const obj4 = { style: tmp.viewEntireTemplateFooterUnderline };
      items[2] = React4(metroRequire, obj4);
      items1 = [authStore(metroRequire, obj2)];
      const obj5 = { children: React4(Icon, obj6) };
      obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: AssetRegistryDefault, style: obj7 };
      Icon = native.Icon;
      obj7 = { transform: items2 };
      items2 = [{ rotate: "180deg" }];
      items1[1] = React4(metroRequire, obj5);
      return authStore(metroRequire, obj);
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (template) => {
      let additional_perks;
      let channels;
      let first;
      let guildId;
      let items;
      let items1;
      let items2;
      let priceTiers;
      let tmp56;
      let obj = template(navigation[7]);
      const cResult = obj.c(54);
      template = template.template;
      ({ priceTiers, guildId } = template);
      const groupListingId = template.groupListingId;
      const editGroupId = template.editGroupId;
      const tmp4 = closure_11();
      let obj2 = template(navigation[18]);
      navigation = obj2.useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        let obj3 = { includeSoftDeleted: true };
        cResult[0] = obj3;
        first = obj3;
      } else {
        first = cResult[0];
      }
      let obj4 = groupListingId(tmp2[19]);
      const addNewEditStateFromTemplate = obj4.useEditStateIds(
        groupListingId,
        editGroupId,
        first,
      ).addNewEditStateFromTemplate;
      ({ channels, additional_perks } = template.listings[0]);
      const first1 = channels[0];
      const first2 = additional_perks[0];
      if (cResult[1] === addNewEditStateFromTemplate) {
        if (cResult[2] === groupListingId) {
          if (cResult[3] === guildId) {
            let tmp10;
            if (cResult[4] === navigation) {
              tmp10 = cResult[5];
            }
            const handleCreateFromTemplate = tmp10;
            let tmpResult = tmp(tmp2[23]);
            const useSuggestedUnusedPrices = tmpResult.useSuggestedUnusedPrices;
            const suggestedUnusedPrices = useSuggestedUnusedPrices(guildId, priceTiers, tmp7);
            let closure_7 = tmp13;
            if (cResult[6] === tmp10) {
              if (cResult[7] === (null != suggestedUnusedPrices && suggestedUnusedPrices.length > 0)) {
                let tmp14;
                let tmp15;
                if (cResult[8] === suggestedUnusedPrices) {
                  tmp14 = cResult[9];
                }
                const handleSelectTemplateInPreview = tmp14;
                const _Symbol = Symbol;
                const container = tmp4.container;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  const obj5 = { numberOfLines: 2, ellipsizeMode: "tail" };
                  cResult[10] = obj5;
                  tmp15 = obj5;
                } else {
                  tmp15 = cResult[10];
                }
                if (cResult[11] === tmp14) {
                  if (cResult[12] === tmp4.descriptionPlanTextStyle) {
                    if (cResult[13] === tmp4.subscriptionPlanTextStyle) {
                      const _Symbol2 = Symbol;
                      const contentContainer = tmp4.contentContainer;
                      if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                        class W {
                          constructor() {
                            return closure_1_9(closure_1_13, {});
                          }
                        }
                        cResult[16] = W;
                      } else {
                        class W {
                          constructor() {
                            return closure_1_9(closure_1_13, {});
                          }
                        }
                      }
                      if (cResult[17] !== channels.length) {
                        class W {
                          constructor() {
                            return closure_1_9(closure_1_13, {});
                          }
                        }
                        const obj6 = { numChannels: channels.length };
                        cResult[17] = channels.length;
                        cResult[18] = obj7.formatToPlainString(template(navigation[16]).t.y7dUrm, obj6);
                        const formatToPlainStringResult = obj7.formatToPlainString(
                          template(navigation[16]).t.y7dUrm,
                          obj6,
                        );
                      } else {
                        class W {
                          constructor() {
                            return closure_1_9(closure_1_13, {});
                          }
                        }
                      }
                      if (cResult[19] === channels.length) {
                        let tmp26;
                        let tmp31;
                        class W {
                          constructor() {
                            return closure_1_9(closure_1_13, {});
                          }
                        }
                        const _Symbol3 = Symbol;
                        if (cResult[22] === Symbol.for("react.memo_cache_sentinel")) {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                          const tmp27 = closure_9(template(navigation[14]).Spacer, { size: 12 });
                          cResult[22] = tmp27;
                          tmp26 = tmp27;
                        } else {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                        }
                        if (cResult[23] !== first1) {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                          const obj8 = { channel: first1 };
                          cResult[23] = first1;
                          cResult[24] = closure_9(closure_15, obj8);
                          const tmp30 = closure_9(closure_15, obj8);
                        } else {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                        }
                        const _Symbol4 = Symbol;
                        if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                          const tmp32 = closure_9(template(navigation[14]).Spacer, { size: 6 });
                          cResult[25] = tmp32;
                          tmp31 = tmp32;
                        } else {
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                        }
                        if (cResult[26] === tmp25) {
                          let tmp38;
                          class W {
                            constructor() {
                              return closure_1_9(closure_1_13, {});
                            }
                          }
                          if (cResult[29] !== additional_perks.length) {
                            class W {
                              constructor() {
                                return closure_1_9(closure_1_13, {});
                              }
                            }
                            const obj9 = { numBenefits: additional_perks.length };
                            const formatToPlainStringResult1 = obj12.formatToPlainString(
                              template(navigation[16]).t.MR7oOF,
                              obj9,
                            );
                            cResult[29] = additional_perks.length;
                            cResult[30] = formatToPlainStringResult1;
                            tmp38 = formatToPlainStringResult1;
                          } else {
                            class W {
                              constructor() {
                                return closure_1_9(closure_1_13, {});
                              }
                            }
                          }
                          if (cResult[31] === additional_perks.length) {
                            let tmp44;
                            class W {
                              constructor() {
                                return closure_1_9(closure_1_13, {});
                              }
                            }
                            const _Symbol5 = Symbol;
                            if (cResult[34] === Symbol.for("react.memo_cache_sentinel")) {
                              class W {
                                constructor() {
                                  return closure_1_9(closure_1_13, {});
                                }
                              }
                              const tmp45 = closure_9(template(navigation[14]).Spacer, { size: 12 });
                              cResult[34] = tmp45;
                              tmp44 = tmp45;
                            } else {
                              class W {
                                constructor() {
                                  return closure_1_9(closure_1_13, {});
                                }
                              }
                            }
                            if (cResult[35] === first2.description) {
                              class W {
                                constructor() {
                                  return closure_1_9(closure_1_13, {});
                                }
                              }
                              const _Symbol6 = Symbol;
                              if (cResult[38] === Symbol.for("react.memo_cache_sentinel")) {
                                class W {
                                  constructor() {
                                    return closure_1_9(closure_1_13, {});
                                  }
                                }
                                cResult[38] = closure_9(template(navigation[14]).Spacer, { size: 6 });
                                const tmp51 = closure_9(template(navigation[14]).Spacer, { size: 6 });
                              } else {
                                class W {
                                  constructor() {
                                    return closure_1_9(closure_1_13, {});
                                  }
                                }
                              }
                              if (cResult[39] === tmp40) {
                                class W {
                                  constructor() {
                                    return closure_1_9(closure_1_13, {});
                                  }
                                }
                                if (cResult[42] === tmp33) {
                                  let tmp59;
                                  class W {
                                    constructor() {
                                      return closure_1_9(closure_1_13, {});
                                    }
                                  }
                                  const _Symbol7 = Symbol;
                                  if (cResult[45] === Symbol.for("react.memo_cache_sentinel")) {
                                    class W {
                                      constructor() {
                                        return closure_1_9(closure_1_13, {});
                                      }
                                    }
                                    const tmp61 = closure_9(closure_16, {});
                                    cResult[45] = tmp61;
                                    tmp59 = tmp61;
                                  } else {
                                    class W {
                                      constructor() {
                                        return closure_1_9(closure_1_13, {});
                                      }
                                    }
                                  }
                                  function handleViewEntireTemplate() {
                                    const obj = ActionSheetActionCreatorsDefault;
                                    const obj2 = { template, guildId, handleSelectTemplateInPreview };
                                    obj.openLazy(asyncRequire(18025, dependencyMap.paths), "TierTemplateCard", obj2);
                                  }
                                  if (cResult[46] === handleViewEntireTemplate) {
                                    class W {
                                      constructor() {
                                        return closure_1_9(closure_1_13, {});
                                      }
                                    }
                                  }
                                  const obj10 = {
                                    style: contentContainer,
                                    onPress: handleViewEntireTemplate,
                                    children: items,
                                  };
                                  items = [,];
                                  class N {
                                    constructor(selectedTemplate, arg1) {
                                      if (closure_7) {
                                        const obj2 = {
                                          selectedTemplate,
                                          handleCreateFromTemplate,
                                          newPricesToPick: suggestedUnusedPrices,
                                        };
                                        const obj = ActionSheetActionCreatorsDefault;
                                        obj.openLazy(
                                          asyncRequire(18029, dependencyMap.paths),
                                          "TierTemplatePriceReselectionCard",
                                          obj2,
                                        );
                                      } else {
                                        handleCreateFromTemplate(selectedTemplate, arg1);
                                      }
                                    }
                                  }
                                  items[1] = tmp59;
                                  cResult[46] = handleViewEntireTemplate;
                                  cResult[47] = tmp4.contentContainer;
                                  cResult[48] = tmp56;
                                  cResult[49] = closure_10(handleCreateFromTemplate, obj10);
                                  const tmp65 = closure_10(handleCreateFromTemplate, obj10);
                                }
                                const obj11 = { renderGap: W, children: items1 };
                                items1 = [tmp33, tmp52];
                                const tmp58 = closure_10(template(navigation[25]).GappedList, obj11);
                                cResult[42] = tmp33;
                                class N {
                                  constructor(selectedTemplate, arg1) {
                                    if (closure_7) {
                                      const obj2 = {
                                        selectedTemplate,
                                        handleCreateFromTemplate,
                                        newPricesToPick: suggestedUnusedPrices,
                                      };
                                      const obj = ActionSheetActionCreatorsDefault;
                                      obj.openLazy(
                                        asyncRequire(18029, dependencyMap.paths),
                                        "TierTemplatePriceReselectionCard",
                                        obj2,
                                      );
                                    } else {
                                      handleCreateFromTemplate(selectedTemplate, arg1);
                                    }
                                  }
                                }
                                cResult[43] = tmp52;
                                cResult[44] = tmp58;
                                tmp56 = tmp58;
                              }
                              const obj13 = { children: items2 };
                              items2 = [tmp40, tmp44, tmp46];
                              class N {
                                constructor(selectedTemplate, arg1) {
                                  if (closure_7) {
                                    const obj2 = {
                                      selectedTemplate,
                                      handleCreateFromTemplate,
                                      newPricesToPick: suggestedUnusedPrices,
                                    };
                                    const obj = ActionSheetActionCreatorsDefault;
                                    obj.openLazy(
                                      asyncRequire(18029, dependencyMap.paths),
                                      "TierTemplatePriceReselectionCard",
                                      obj2,
                                    );
                                  } else {
                                    handleCreateFromTemplate(selectedTemplate, arg1);
                                  }
                                }
                              }
                              cResult[39] = tmp40;
                              cResult[40] = tmp46;
                              cResult[41] = closure_10(suggestedUnusedPrices, obj13);
                              const tmp55 = closure_10(suggestedUnusedPrices, obj13);
                            }
                            const obj14 = { title: null, description: null };
                            ({ name: obj15.title, description: obj15.description } = first2);
                            const tmp49 = closure_9(closure_14, obj14);
                            class N {
                              constructor(selectedTemplate, arg1) {
                                if (closure_7) {
                                  const obj2 = {
                                    selectedTemplate,
                                    handleCreateFromTemplate,
                                    newPricesToPick: suggestedUnusedPrices,
                                  };
                                  const obj = ActionSheetActionCreatorsDefault;
                                  obj.openLazy(
                                    asyncRequire(18029, dependencyMap.paths),
                                    "TierTemplatePriceReselectionCard",
                                    obj2,
                                  );
                                } else {
                                  handleCreateFromTemplate(selectedTemplate, arg1);
                                }
                              }
                            }
                            cResult[36] = first2.name;
                            cResult[37] = tmp49;
                          }
                          const obj16 = { title: tmp38, count: additional_perks.length };
                          cResult[31] = additional_perks.length;
                          const tmp43 = closure_9(closure_12, obj16);
                          class N {
                            constructor(selectedTemplate, arg1) {
                              if (closure_7) {
                                const obj2 = {
                                  selectedTemplate,
                                  handleCreateFromTemplate,
                                  newPricesToPick: suggestedUnusedPrices,
                                };
                                const obj = ActionSheetActionCreatorsDefault;
                                obj.openLazy(
                                  asyncRequire(18029, dependencyMap.paths),
                                  "TierTemplatePriceReselectionCard",
                                  obj2,
                                );
                              } else {
                                handleCreateFromTemplate(selectedTemplate, arg1);
                              }
                            }
                          }
                          cResult[33] = tmp43;
                        }
                        const obj17 = { children: tmp36 };
                        class N {
                          constructor(selectedTemplate, arg1) {
                            if (closure_7) {
                              const obj2 = {
                                selectedTemplate,
                                handleCreateFromTemplate,
                                newPricesToPick: suggestedUnusedPrices,
                              };
                              const obj = ActionSheetActionCreatorsDefault;
                              obj.openLazy(
                                asyncRequire(18029, dependencyMap.paths),
                                "TierTemplatePriceReselectionCard",
                                obj2,
                              );
                            } else {
                              handleCreateFromTemplate(selectedTemplate, arg1);
                            }
                          }
                        }
                        tmp36[0] = tmp25;
                        tmp36[1] = tmp26;
                        tmp36[2] = tmp28;
                        tmp36[3] = tmp31;
                        cResult[26] = tmp25;
                        cResult[27] = tmp28;
                        cResult[28] = closure_10(suggestedUnusedPrices, obj17);
                        const tmp37 = closure_10(suggestedUnusedPrices, obj17);
                      }
                      class N {
                        constructor(selectedTemplate, arg1) {
                          if (closure_7) {
                            const obj2 = {
                              selectedTemplate,
                              handleCreateFromTemplate,
                              newPricesToPick: suggestedUnusedPrices,
                            };
                            const obj = ActionSheetActionCreatorsDefault;
                            obj.openLazy(
                              asyncRequire(18029, dependencyMap.paths),
                              "TierTemplatePriceReselectionCard",
                              obj2,
                            );
                          } else {
                            handleCreateFromTemplate(selectedTemplate, arg1);
                          }
                        }
                      }
                      cResult[19] = channels.length;
                      cResult[20] = tmp20;
                      cResult[21] = tmp25;
                    }
                  }
                }
                const obj31 = {
                  template,
                  handleSelectTemplateInPreview: tmp14,
                  subscriptionPlanTextStyle: tmp4.subscriptionPlanTextStyle,
                  descriptionTextStyle: null,
                  closeActionSheet: false,
                  descriptionTextProps: tmp15,
                };
                class N {
                  constructor(selectedTemplate, arg1) {
                    if (closure_7) {
                      const obj2 = {
                        selectedTemplate,
                        handleCreateFromTemplate,
                        newPricesToPick: suggestedUnusedPrices,
                      };
                      const obj = ActionSheetActionCreatorsDefault;
                      obj.openLazy(asyncRequire(18029, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj2);
                    } else {
                      handleCreateFromTemplate(selectedTemplate, arg1);
                    }
                  }
                }
                cResult[11] = tmp14;
                cResult[12] = tmp4.descriptionPlanTextStyle;
                cResult[13] = tmp4.subscriptionPlanTextStyle;
                cResult[14] = template;
                cResult[15] = closure_9(template(navigation[24]).GuildRoleSubscriptionTierTemplateBasicInfo, obj31);
                const tmp18 = closure_9(template(navigation[24]).GuildRoleSubscriptionTierTemplateBasicInfo, obj31);
              }
            }
            class N {
              constructor(selectedTemplate, arg1) {
                if (closure_7) {
                  const obj2 = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
                  const obj = ActionSheetActionCreatorsDefault;
                  obj.openLazy(asyncRequire(18029, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj2);
                } else {
                  handleCreateFromTemplate(selectedTemplate, arg1);
                }
              }
            }
            cResult[6] = tmp10;
            cResult[7] = null != suggestedUnusedPrices && suggestedUnusedPrices.length > 0;
            cResult[8] = suggestedUnusedPrices;
            cResult[9] = N;
            tmp14 = N;
          }
        }
      }
      class L {
        constructor(selectedTemplate, arg1) {
          const obj = GuildRoleSubscriptionTierTemplateActionCreators;
          const result = obj.stashTemplateChannels(selectedTemplate, guildId);
          const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
          if (arg1) {
            const obj2 = ActionSheetActionCreatorsDefault;
            obj2.hideActionSheet();
          }
          const track = AnalyticsUtilsDefault.track;
          const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED =
            metroImportDefault.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
          const obj3 = { exit_reason: "template_selected" };
          AnalyticsUtilsDefault;
          const tmpResult = AppAnalyticsUtils;
          const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guildId));
          track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj3);
          const obj4 = { groupListingId, initialEditStateId: tmp5 };
          const replaced = navigation.replace(metroImportAll.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj4);
        }
      }
      cResult[1] = addNewEditStateFromTemplate;
      cResult[2] = groupListingId;
      cResult[3] = guildId;
      cResult[4] = navigation;
      cResult[5] = L;
      tmp10 = L;
    }
  : (template) => {
      let additional_perks;
      let channels;
      let guildId;
      let intl;
      let intl2;
      let items2;
      let items3;
      let items4;
      let items5;
      let items6;
      let priceTiers;
      template = template.template;
      ({ priceTiers, guildId } = template);
      const groupListingId = template.groupListingId;
      navigation = undefined;
      const editGroupId = template.editGroupId;
      const tmp = closure_11();
      let obj = template(navigation[18]);
      navigation = obj.useNavigation();
      let obj2 = groupListingId(navigation[19]);
      const addNewEditStateFromTemplate = obj2.useEditStateIds(groupListingId, editGroupId, {
        includeSoftDeleted: true,
      }).addNewEditStateFromTemplate;
      const first = template.listings[0];
      ({ channels, additional_perks } = first);
      const first1 = additional_perks[0];
      let obj3 = addNewEditStateFromTemplate;
      const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
      const price_tier = first.price_tier;
      const first2 = channels[0];
      const handleCreateFromTemplate = addNewEditStateFromTemplate.useCallback((selectedTemplate, arg1) => {
        const obj = GuildRoleSubscriptionTierTemplateActionCreators;
        const result = obj.stashTemplateChannels(selectedTemplate, guildId);
        const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
        if (arg1) {
          const obj2 = ActionSheetActionCreatorsDefault;
          obj2.hideActionSheet();
        }
        const track = AnalyticsUtilsDefault.track;
        const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED =
          metroImportDefault.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
        const obj3 = { exit_reason: "template_selected" };
        AnalyticsUtilsDefault;
        const tmpResult = AppAnalyticsUtils;
        const merged = Object.assign(tmpResult.collectGuildAnalyticsMetadata(guildId));
        track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj3);
        const obj4 = { groupListingId, initialEditStateId: tmp5 };
        const replaced = navigation.replace(metroImportAll.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj4);
      }, items);
      const useSuggestedUnusedPrices = template(navigation[23]).useSuggestedUnusedPrices;
      template(navigation[23]);
      const suggestedUnusedPrices = useSuggestedUnusedPrices(guildId, priceTiers, price_tier);
      let closure_7 = tmp10;
      const items1 = [handleCreateFromTemplate, suggestedUnusedPrices, tmp10];
      const callback1 = obj3.useCallback((selectedTemplate, arg1) => {
        if (closure_7) {
          const obj2 = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
          const obj = ActionSheetActionCreatorsDefault;
          obj.openLazy(asyncRequire(18029, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj2);
        } else {
          handleCreateFromTemplate(selectedTemplate, arg1);
        }
      }, items1);
      let obj4 = { style: tmp.container, children: items2 };
      items2 = [,];
      const obj5 = {
        template,
        handleSelectTemplateInPreview: callback1,
        subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
        descriptionTextStyle: tmp.descriptionPlanTextStyle,
        closeActionSheet: false,
        descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" },
      };
      items2[0] = closure_9(template(navigation[24]).GuildRoleSubscriptionTierTemplateBasicInfo, obj5);
      const obj6 = {
        style: tmp.contentContainer,
        onPress() {
          const obj = ActionSheetActionCreatorsDefault;
          const obj2 = { template, guildId, handleSelectTemplateInPreview: callback1 };
          obj.openLazy(asyncRequire(18025, dependencyMap.paths), "TierTemplateCard", obj2);
        },
        children: items6,
      };
      const obj7 = {
        renderGap() {
          return closure_1_9(closure_1_13, {});
        },
        children: items4,
      };
      const obj8 = { children: items3 };
      const obj9 = {
        title: intl.formatToPlainString(template(navigation[16]).t.y7dUrm, { numChannels: channels.length }),
        count: channels.length,
      };
      const GappedList = tmp2(tmp3[25]).GappedList;
      intl = tmp2(tmp3[16]).intl;
      items3 = [
        closure_9(closure_12, obj9),
        closure_9(tmp2(navigation[14]).Spacer, { size: 12 }),
        closure_9(closure_15, { channel: first2 }),
        closure_9(tmp2(navigation[14]).Spacer, { size: 6 }),
      ];
      items4 = [closure_10(suggestedUnusedPrices, obj8)];
      const obj10 = { children: items5 };
      const obj11 = {
        title: intl2.formatToPlainString(template(navigation[16]).t.MR7oOF, { numBenefits: additional_perks.length }),
        count: additional_perks.length,
      };
      intl2 = tmp2(tmp3[16]).intl;
      items5 = [closure_9(closure_12, obj11), closure_9(tmp2(navigation[14]).Spacer, { size: 12 }), ,];
      const obj12 = { title: first1.name, description: first1.description };
      items5[2] = closure_9(closure_14, obj12);
      items5[3] = closure_9(template(navigation[14]).Spacer, { size: 6 });
      items4[1] = closure_10(suggestedUnusedPrices, obj10);
      items6 = [closure_10(GappedList, obj7), closure_9(closure_16, {})];
      items2[1] = closure_10(handleCreateFromTemplate, obj6);
      return closure_10(suggestedUnusedPrices, obj4);
    };
size = size_mod;
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx",
);

export default tmp6;
export const CARD_WIDTH = 319;
