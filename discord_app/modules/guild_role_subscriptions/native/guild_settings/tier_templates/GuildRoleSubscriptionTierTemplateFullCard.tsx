// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx
import c from "../../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GuildRoleSubscriptionCard from "../../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(5090);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 },
  subscriptionPlanTextStyle: null,
  descriptionPlanTextStyle: null,
  content: null,
  separator: null,
  benefitRowContainer: null,
  benefitTextContainer: null,
  benefitDescription: null,
  channelTitle: null,
  channelIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.content = { paddingTop: 24 };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.separator = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
obj2.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
obj2.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: 16 };
obj2.benefitDescription = { marginTop: 2 };
obj2.channelTitle = { flexDirection: "row", alignItems: "center" };
obj2.channelIcon = { marginEnd: 8 };
let closure_7 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_8 = ReactCompilerGating.isReactCompilerEnabled()
  ? function SectionSeparator() {
      const cResult = c.c(6);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp7 = React4(native.Spacer, { size: 24 });
        cResult[0] = tmp7;
        let first = tmp7;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.separator) {
        const obj2 = { style: tmp4.separator };
        const tmp11 = React4(View, obj2);
        cResult[1] = tmp4.separator;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp14 = React4(native.Spacer, { size: 24 });
        cResult[3] = tmp14;
        let tmp12 = tmp14;
      } else {
        tmp12 = cResult[3];
      }
      if (cResult[4] !== tmp8) {
        const obj3 = { children: null };
        const items = [first, tmp8, tmp12];
        obj3.children = items;
        const tmp18 = timestampProducer(hasOwnProperty, obj3);
        cResult[4] = tmp8;
        cResult[5] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[5];
      }
      return tmp15;
    }
  : function SectionSeparator() {
      const obj = { children: null };
      const items = [React4(native.Spacer, { size: 24 }), ,];
      const tmp = closure_7();
      items[1] = React4(View, { style: closure_7().separator });
      items[2] = React4(native.Spacer, { size: 24 });
      obj.children = items;
      return timestampProducer(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BenefitRow(arg0) {
      const cResult = c.c(11);
      ({ title, description } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
        const tmp9 = React4(View, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === description) {
        if (cResult[2] === tmp4.benefitDescription) {
          let tmp10 = cResult[3];
        }
        if (cResult[4] === tmp4.benefitTextContainer) {
          if (cResult[5] === tmp10) {
            if (cResult[6] === title) {
              let tmp13 = cResult[7];
            }
            if (cResult[8] === tmp4.benefitRowContainer) {
              if (cResult[9] === tmp13) {
                let tmp17 = cResult[10];
              }
              return tmp17;
            }
            const obj3 = { style: tmp4.benefitRowContainer, children: null };
            const items = [first, tmp13];
            obj3.children = items;
            const tmp20 = timestampProducer(View, obj3);
            cResult[8] = tmp4.benefitRowContainer;
            cResult[9] = tmp13;
            cResult[10] = tmp20;
            tmp17 = tmp20;
          }
        }
        const obj4 = { style: tmp4.benefitTextContainer, children: null };
        const items1 = [title, tmp10];
        obj4.children = items1;
        const tmp16 = timestampProducer(View, obj4);
        cResult[4] = tmp4.benefitTextContainer;
        cResult[5] = tmp10;
        cResult[6] = title;
        cResult[7] = tmp16;
        tmp13 = tmp16;
      }
      let tmp11 = null;
      if (null != description) {
        const obj5 = {
          style: tmp4.benefitDescription,
          variant: "text-sm/normal",
          color: "interactive-text-default",
          children: description,
        };
        tmp11 = React4(Text_Text.Text, obj5);
      }
      cResult[1] = description;
      cResult[2] = tmp4.benefitDescription;
      cResult[3] = tmp11;
      tmp10 = tmp11;
    }
  : function BenefitRow(description) {
      description = description.description;
      const tmp = closure_7();
      const obj = { style: tmp.benefitRowContainer, children: null };
      const items = [React4(View, { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) })];
      const obj3 = { style: tmp.benefitTextContainer, children: null };
      const items1 = [description.title];
      let tmp4Result = null;
      if (null != description) {
        const obj4 = {
          style: tmp.benefitDescription,
          variant: "text-sm/normal",
          color: "interactive-text-default",
          children: description,
        };
        tmp4Result = React4(Text_Text.Text, obj4);
      }
      items1[1] = tmp4Result;
      obj3.children = items1;
      items[1] = timestampProducer(View, obj3);
      obj.children = items;
      return timestampProducer(View, obj);
    };
ReactCompilerGating = fn(558);
let closure_10 = ReactCompilerGating.isReactCompilerEnabled()
  ? function BenefitSection(arg0) {
      const cResult = c.c(6);
      ({ sectionTitle, children } = arg0);
      if (cResult[0] !== sectionTitle) {
        const obj2 = { children: sectionTitle };
        const tmp6 = React4(GuildRoleSubscriptionCard.SectionTitle, obj2);
        cResult[0] = sectionTitle;
        cResult[1] = tmp6;
        let tmp4 = tmp6;
      } else {
        tmp4 = cResult[1];
      }
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp9 = React4(native.Spacer, { size: 14 });
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === children) {
        if (cResult[4] === tmp4) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const obj3 = { children: null };
      const items = [tmp4, tmp7, children];
      obj3.children = items;
      const tmp11 = timestampProducer(hasOwnProperty, obj3);
      cResult[3] = children;
      cResult[4] = tmp4;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function BenefitSection(arg0) {
      const obj = { children: null };
      ({ sectionTitle, children } = arg0);
      const items = [
        React4(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }),
        React4(native.Spacer, { size: 14 }),
        children,
      ];
      obj.children = items;
      return timestampProducer(hasOwnProperty, obj);
    };
ReactCompilerGating = fn(558);
let obj6 = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildRoleSubscriptionTierTemplateFullCard(arg0) {
      const cResult = require("c").c(62);
      ({ template, guildId, handleSelectTemplateInPreview } = arg0);
      const tmp4 = closure_7();
      _require = tmp4;
      let obj = require("c");
      const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
        "TierTemplateFullCard",
        "text-xs/bold",
      );
      ({ image, name, channels: channelTitle, additional_perks, role_color } = template.listings[0]);
      if (cResult[0] === handleSelectTemplateInPreview) {
        if (cResult[1] === tmp4.descriptionPlanTextStyle) {
          if (cResult[2] === tmp4.subscriptionPlanTextStyle) {
            if (cResult[3] === template) {
              let tmp8 = cResult[4];
            }
            if (cResult[5] !== tmp4.separator) {
              let obj3 = { style: tmp4.separator };
              const tmp13 = closure_4(View, obj3);
              cResult[5] = tmp4.separator;
              cResult[6] = tmp13;
              let tmp10 = tmp13;
            } else {
              tmp10 = cResult[6];
            }
            const sum = 32 + tmp6;
            if (cResult[7] !== sum) {
              let obj4 = { paddingBottom: sum };
              cResult[7] = sum;
              cResult[8] = obj4;
              let tmp15 = obj4;
            } else {
              tmp15 = cResult[8];
            }
            const _Symbol = Symbol;
            if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
              const obj5 = { textTransform: "uppercase" };
              cResult[9] = obj5;
              let tmp17 = obj5;
            } else {
              tmp17 = cResult[9];
            }
            if (cResult[10] !== typeConsolidationEyebrow.style) {
              let items = [tmp17, typeConsolidationEyebrow.style];
              cResult[10] = typeConsolidationEyebrow.style;
              cResult[11] = items;
              let tmp18 = items;
            } else {
              tmp18 = cResult[11];
            }
            const _Symbol2 = Symbol;
            if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
              const intl = tmp(1126).intl;
              const stringResult = intl.string(tmp(1126).t.CjC5XZ);
              cResult[12] = stringResult;
              let tmp19 = stringResult;
            } else {
              tmp19 = cResult[12];
            }
            if (cResult[13] !== tmp18) {
              const obj6 = { variant: "text-sm/bold", color: "text-default", style: tmp18, children: tmp19 };
              const tmp23 = closure_4(tmp(5086).Text, obj6);
              cResult[13] = tmp18;
              cResult[14] = tmp23;
              let tmp21 = tmp23;
            } else {
              tmp21 = cResult[14];
            }
            const _Symbol3 = Symbol;
            if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
              const tmp26 = closure_4(tmp(1200).Spacer, { size: 4 });
              cResult[15] = tmp26;
              let tmp24 = tmp26;
            } else {
              tmp24 = cResult[15];
            }
            const _Symbol4 = Symbol;
            if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
              const obj7 = { variant: "text-sm/normal", color: "text-muted", children: null };
              const intl2 = tmp(1126).intl;
              obj7.children = intl2.string(tmp(1126).t.bCb3c8);
              const tmp30 = closure_4(tmp(5086).Text, obj7);
              const tmp31 = closure_4(tmp(1200).Spacer, { size: 24 });
              cResult[16] = tmp30;
              cResult[17] = tmp31;
              let tmp28 = tmp31;
              let tmp27 = tmp30;
            } else {
              tmp27 = cResult[16];
              tmp28 = cResult[17];
            }
            const _Symbol5 = Symbol;
            if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
              const obj8 = { textTransform: "uppercase" };
              cResult[18] = obj8;
              let tmp32 = obj8;
            } else {
              tmp32 = cResult[18];
            }
            if (cResult[19] !== typeConsolidationEyebrow.style) {
              const items1 = [tmp32, typeConsolidationEyebrow.style];
              cResult[19] = typeConsolidationEyebrow.style;
              cResult[20] = items1;
              let tmp33 = items1;
            } else {
              tmp33 = cResult[20];
            }
            const _Symbol6 = Symbol;
            if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
              const intl3 = tmp(1126).intl;
              const stringResult1 = intl3.string(tmp(1126).t.ZKyfEo);
              cResult[21] = stringResult1;
              let tmp34 = stringResult1;
            } else {
              tmp34 = cResult[21];
            }
            if (cResult[22] === typeConsolidationEyebrow.variant) {
              if (cResult[23] === tmp33) {
                let tmp36 = cResult[24];
              }
              const _Symbol7 = Symbol;
              if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
                const tmp41 = closure_4(tmp(1200).Spacer, { size: 8 });
                cResult[25] = tmp41;
                let tmp39 = tmp41;
              } else {
                tmp39 = cResult[25];
              }
              if (cResult[26] === guildId) {
                if (cResult[27] === image) {
                  if (cResult[28] === name) {
                    if (cResult[29] === role_color) {
                      let tmp42 = cResult[30];
                    }
                    const _Symbol8 = Symbol;
                    if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp48 = closure_4(closure_8, {});
                      cResult[31] = tmp48;
                      let tmp45 = tmp48;
                    } else {
                      tmp45 = cResult[31];
                    }
                    const _Symbol9 = Symbol;
                    if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl4 = tmp(1126).intl;
                      const stringResult2 = intl4.string(tmp(1126).t.Ofvpfs);
                      cResult[32] = stringResult2;
                      let tmp49 = stringResult2;
                    } else {
                      tmp49 = cResult[32];
                    }
                    if (cResult[33] === channelTitle) {
                      if (cResult[34] === tmp4.channelIcon) {
                        if (cResult[35] === tmp4.channelTitle) {
                          if (cResult[40] !== cResult[36]) {
                            const obj9 = { sectionTitle: tmp49, children: null };
                            const obj10 = { gap: 14, children: tmp51 };
                            obj9.children = closure_4(tmp(9493).GappedList, obj10);
                            const tmp58 = closure_4(closure_10, obj9);
                            cResult[40] = tmp51;
                            cResult[41] = tmp58;
                            let tmp55 = tmp58;
                          } else {
                            tmp55 = cResult[41];
                          }
                          const _Symbol10 = Symbol;
                          if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                            const tmp62 = closure_4(closure_8, {});
                            cResult[42] = tmp62;
                            let tmp59 = tmp62;
                          } else {
                            tmp59 = cResult[42];
                          }
                          const _Symbol11 = Symbol;
                          if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                            const intl5 = tmp(1126).intl;
                            const stringResult3 = intl5.string(tmp(1126).t.w7KA8R);
                            cResult[43] = stringResult3;
                            let tmp63 = stringResult3;
                          } else {
                            tmp63 = cResult[43];
                          }
                          if (cResult[44] !== additional_perks) {
                            const _Symbol12 = Symbol;
                            if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                              function te(children, arg1) {
                                return closure_1_4(
                                  closure_1_9,
                                  {
                                    title: closure_1_4(closure_0(dependencyMap[9]).Text, {
                                      variant: "text-md/medium",
                                      color: "mobile-text-heading-primary",
                                      children: children.name,
                                    }),
                                  },
                                  arg1,
                                );
                              }
                              cResult[46] = te;
                              let tmp66 = te;
                            } else {
                              tmp66 = cResult[46];
                            }
                            const mapped = additional_perks.map(tmp66);
                            cResult[44] = additional_perks;
                            cResult[45] = mapped;
                          } else {
                            if (cResult[47] !== cResult[45]) {
                              const obj11 = { sectionTitle: tmp63, children: null };
                              const obj12 = { gap: 14, children: tmp65 };
                              obj11.children = closure_4(tmp(9493).GappedList, obj12);
                              const tmp72 = closure_4(closure_10, obj11);
                              cResult[47] = tmp65;
                              cResult[48] = tmp72;
                              let tmp69 = tmp72;
                            } else {
                              tmp69 = cResult[48];
                            }
                            if (cResult[49] === tmp4.content) {
                              if (cResult[50] === tmp21) {
                                if (cResult[51] === tmp36) {
                                  if (cResult[52] === tmp42) {
                                    if (cResult[53] === tmp55) {
                                      if (cResult[54] === tmp69) {
                                        if (cResult[55] === tmp15) {
                                          let tmp73 = cResult[56];
                                        }
                                        if (cResult[57] === tmp4.container) {
                                          if (cResult[58] === tmp8) {
                                            if (cResult[59] === tmp73) {
                                              if (cResult[60] === tmp10) {
                                                let tmp76 = cResult[61];
                                              }
                                              return tmp76;
                                            }
                                          }
                                        }
                                        const obj13 = { scrollable: true, startExpanded: true, children: null };
                                        const obj14 = { style: tmp7, children: null };
                                        const items2 = [tmp8, tmp10, tmp73];
                                        obj14.children = items2;
                                        obj13.children = closure_6(View, obj14);
                                        const tmp80 = closure_4(tmp(6829).BottomSheet, obj13);
                                        cResult[57] = tmp4.container;
                                        cResult[58] = tmp8;
                                        cResult[59] = tmp73;
                                        cResult[60] = tmp10;
                                        cResult[61] = tmp80;
                                        tmp76 = tmp80;
                                      }
                                    }
                                  }
                                }
                              }
                            }
                            const obj15 = {
                              scrollsToTop: false,
                              style: tmp4.content,
                              contentContainerStyle: tmp15,
                              children: null,
                            };
                            const items3 = [
                              tmp21,
                              tmp24,
                              tmp27,
                              tmp28,
                              tmp36,
                              tmp39,
                              tmp42,
                              tmp45,
                              tmp55,
                              tmp59,
                              tmp69,
                            ];
                            obj15.children = items3;
                            const tmp75 = closure_6(tmp(6298).BottomSheetScrollView, obj15);
                            cResult[49] = tmp4.content;
                            cResult[50] = tmp21;
                            cResult[51] = tmp36;
                            cResult[52] = tmp42;
                            cResult[53] = tmp55;
                            cResult[54] = tmp69;
                            cResult[55] = tmp15;
                            cResult[56] = tmp75;
                            tmp73 = tmp75;
                          }
                        }
                      }
                    }
                    if (cResult[37] === tmp4.channelIcon) {
                      if (cResult[38] === tmp4.channelTitle) {
                        let tmp52 = cResult[39];
                      }
                      const mapped1 = channelTitle.map(tmp52);
                      cResult[33] = channelTitle;
                      ({ channelIcon: tmp3[34], channelTitle } = tmp4);
                      cResult[35] = channelTitle;
                      cResult[36] = mapped1;
                    }
                    const fn = function q(children) {
                      const obj2 = { style: closure_0.channelTitle, children: null };
                      const items = [
                        React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
                          style: closure_0.channelIcon,
                          size: "xs",
                        }),
                        React4(Text_Text.Text, {
                          variant: "text-md/medium",
                          color: "mobile-text-heading-primary",
                          children: children.name,
                        }),
                      ];
                      obj2.children = items;
                      const obj3 = { style: closure_0.channelIcon, size: "xs" };
                      const obj4 = {
                        variant: "text-md/medium",
                        color: "mobile-text-heading-primary",
                        children: children.name,
                      };
                      return React4(
                        closure_9,
                        { title: timestampProducer(View, obj2), description: children.description },
                        children.id,
                      );
                    };
                    cResult[37] = tmp4.channelIcon;
                    cResult[38] = tmp4.channelTitle;
                    cResult[39] = fn;
                    tmp52 = fn;
                  }
                }
              }
              const obj16 = { roleColor: role_color, roleImage: image, roleName: name, guildId };
              const tmp44 = closure_4(tmp(18314).GuildRoleSubscriptionRolePreview, obj16);
              cResult[26] = guildId;
              cResult[27] = image;
              cResult[28] = name;
              cResult[29] = role_color;
              cResult[30] = tmp44;
              tmp42 = tmp44;
            }
            const obj17 = {
              variant: typeConsolidationEyebrow.variant,
              color: "text-default",
              style: tmp33,
              children: tmp34,
            };
            const tmp38 = closure_4(tmp(5086).Text, obj17);
            cResult[22] = typeConsolidationEyebrow.variant;
            cResult[23] = tmp33;
            cResult[24] = tmp38;
            tmp36 = tmp38;
          }
        }
      }
      const tmp9 = closure_4(
        require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo,
        {
          template,
          handleSelectTemplateInPreview,
          subscriptionPlanTextStyle: tmp4.subscriptionPlanTextStyle,
          descriptionTextStyle: tmp4.descriptionPlanTextStyle,
          closeActionSheet: true,
        },
      );
      cResult[0] = handleSelectTemplateInPreview;
      cResult[1] = tmp4.descriptionPlanTextStyle;
      cResult[2] = tmp4.subscriptionPlanTextStyle;
      cResult[3] = template;
      cResult[4] = tmp9;
      tmp8 = tmp9;
      const obj18 = {
        template,
        handleSelectTemplateInPreview,
        subscriptionPlanTextStyle: tmp4.subscriptionPlanTextStyle,
        descriptionTextStyle: tmp4.descriptionPlanTextStyle,
        closeActionSheet: true,
      };
      let obj2 = require("useTypeConsolidationTextTransform");
    }
  : function GuildRoleSubscriptionTierTemplateFullCard(template) {
      template = template.template;
      ({ guildId, handleSelectTemplateInPreview } = template);
      const tmp = closure_7();
      _require = tmp;
      const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
        "TierTemplateFullCard",
        "text-xs/bold",
      );
      const first = template.listings[0];
      ({ channels, additional_perks } = first);
      ({ image, name, role_color } = first);
      let obj2 = { scrollable: true, startExpanded: true, children: null };
      let obj3 = { style: tmp.container, children: null };
      let items = [
        closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, {
          template,
          handleSelectTemplateInPreview,
          subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
          descriptionTextStyle: tmp.descriptionPlanTextStyle,
          closeActionSheet: true,
        }),
        closure_4(View, { style: tmp.separator }),
      ];
      const obj6 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: null, children: null };
      let obj = require("useTypeConsolidationTextTransform");
      let obj4 = {
        template,
        handleSelectTemplateInPreview,
        subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
        descriptionTextStyle: tmp.descriptionPlanTextStyle,
        closeActionSheet: true,
      };
      const obj5 = { style: tmp.separator };
      obj6.contentContainerStyle = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
      const obj8 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
      const items1 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
      obj8.style = items1;
      const intl = require("util").intl;
      obj8.children = intl.string(require("util").t.CjC5XZ);
      const items2 = [
        closure_4(require("Text/Text").Text, obj8),
        closure_4(require("native").Spacer, { size: 4 }),
        ,
        ,
        ,
        ,
        ,
        ,
        ,
        ,
      ];
      const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
      const intl2 = require("util").intl;
      obj9.children = intl2.string(require("util").t.bCb3c8);
      items2[2] = closure_4(require("Text/Text").Text, obj9);
      items2[3] = closure_4(require("native").Spacer, { size: 24 });
      const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null };
      const items3 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
      obj10.style = items3;
      const intl3 = require("util").intl;
      obj10.children = intl3.string(require("util").t.ZKyfEo);
      items2[4] = closure_4(require("Text/Text").Text, obj10);
      items2[5] = closure_4(require("native").Spacer, { size: 8 });
      items2[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, {
        roleColor: role_color,
        roleImage: image,
        roleName: name,
        guildId,
      });
      items2[7] = closure_4(closure_8, {});
      const obj11 = { sectionTitle: null, children: null };
      const intl4 = require("util").intl;
      obj11.sectionTitle = intl4.string(require("util").t.Ofvpfs);
      const obj7 = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
      obj11.children = closure_4(require("LayoutUtils").GappedList, {
        gap: 14,
        children: channels.map((children) => {
          const obj2 = { style: closure_0.channelTitle, children: null };
          const items = [
            React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
              style: closure_0.channelIcon,
              size: "xs",
            }),
            React4(Text_Text.Text, {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: children.name,
            }),
          ];
          obj2.children = items;
          const obj3 = { style: closure_0.channelIcon, size: "xs" };
          const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
          return React4(
            closure_9,
            { title: timestampProducer(View, obj2), description: children.description },
            children.id,
          );
        }),
      });
      items2[8] = closure_4(closure_10, obj11);
      items2[9] = closure_4(closure_8, {});
      const obj13 = { sectionTitle: null, children: null };
      const intl5 = require("util").intl;
      obj13.sectionTitle = intl5.string(require("util").t.w7KA8R);
      const obj12 = {
        gap: 14,
        children: channels.map((children) => {
          const obj2 = { style: closure_0.channelTitle, children: null };
          const items = [
            React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
              style: closure_0.channelIcon,
              size: "xs",
            }),
            React4(Text_Text.Text, {
              variant: "text-md/medium",
              color: "mobile-text-heading-primary",
              children: children.name,
            }),
          ];
          obj2.children = items;
          const obj3 = { style: closure_0.channelIcon, size: "xs" };
          const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
          return React4(
            closure_9,
            { title: timestampProducer(View, obj2), description: children.description },
            children.id,
          );
        }),
      };
      obj13.children = closure_4(require("LayoutUtils").GappedList, {
        gap: 14,
        children: additional_perks.map((children, index) =>
          closure_1_4(
            closure_1_9,
            {
              title: closure_1_4(closure_0(dependencyMap[9]).Text, {
                variant: "text-md/medium",
                color: "mobile-text-heading-primary",
                children: children.name,
              }),
            },
            index,
          ),
        ),
      });
      items2[10] = closure_4(closure_10, obj13);
      obj6.children = items2;
      items[2] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj6);
      obj3.children = items;
      obj2.children = closure_6(View, obj3);
      return closure_4(require("Sheet/BottomSheet").BottomSheet, obj2);
    };
