// === Module 18025: GuildRoleSubscriptionTierTemplateFullCard ===

// Module 18025 (GuildRoleSubscriptionTierTemplateFullCard)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import native from "native" /* 1188 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1618 */;
import Text_Text from "Text/Text" /* 4892 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 15070 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16095 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 18028 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, _require;

let closure_4;
let hasOwnProperty;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
const View = react_native.View;
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, subscriptionPlanTextStyle: obj3, descriptionPlanTextStyle: obj4, content: { paddingTop: 24 }, separator: obj5, benefitRowContainer: { flexDirection: "row", justifyContent: "flex-start" }, benefitTextContainer: { flex: 1, justifyContent: "center", marginLeft: 16 }, benefitDescription: { marginTop: 2 }, channelTitle: { flexDirection: "row", alignItems: "center" }, channelIcon: { marginEnd: 8 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj4 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj5 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let closure_7 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_8 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let items;
  let tmp12;
  let tmp15;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp7 = React3(native.Spacer, { size: 24 });
    cResult[0] = tmp7;
    first = tmp7;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.separator) {
    const obj2 = { style: tmp4.separator };
    const tmp11 = React3(View, obj2);
    cResult[1] = tmp4.separator;
    cResult[2] = tmp11;
    tmp8 = tmp11;
  } else {
    tmp8 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp14 = React3(native.Spacer, { size: 24 });
    cResult[3] = tmp14;
    tmp12 = tmp14;
  } else {
    tmp12 = cResult[3];
  }
  if (cResult[4] !== tmp8) {
    const obj3 = { children: items };
    items = [first, tmp8, tmp12];
    const tmp18 = metroRequire(hasOwnProperty, obj3);
    cResult[4] = tmp8;
    cResult[5] = tmp18;
    tmp15 = tmp18;
  } else {
    tmp15 = cResult[5];
  }
  return tmp15;
}) : (() => {
  let items;
  const obj = { children: items };
  items = [, , ];
  const tmp = closure_7();
  items[0] = React3(native.Spacer, { size: 24 });
  const obj2 = { style: tmp.separator };
  items[1] = React3(View, obj2);
  items[2] = React3(native.Spacer, { size: 24 });
  return metroRequire(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let description;
  let first;
  let items;
  let items1;
  let title;
  const obj = react2;
  const cResult = obj.c(11);
  ({ title, description } = arg0);
  const tmp4 = closure_7();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { children: React3(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
    const tmp9 = React3(View, obj2);
    cResult[0] = tmp9;
    first = tmp9;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === description) {
    let tmp10;
    if (cResult[2] === tmp4.benefitDescription) {
      tmp10 = cResult[3];
    }
    if (cResult[4] === tmp4.benefitTextContainer) {
      if (cResult[5] === tmp10) {
        let tmp13;
        if (cResult[6] === title) {
          tmp13 = cResult[7];
        }
        if (cResult[8] === tmp4.benefitRowContainer) {
          let tmp17;
          if (cResult[9] === tmp13) {
            tmp17 = cResult[10];
          }
          return tmp17;
        }
        const obj3 = { style: tmp4.benefitRowContainer, children: items };
        items = [first, tmp13];
        const tmp20 = metroRequire(View, obj3);
        cResult[8] = tmp4.benefitRowContainer;
        cResult[9] = tmp13;
        cResult[10] = tmp20;
        tmp17 = tmp20;
      }
    }
    const obj4 = { style: tmp4.benefitTextContainer, children: items1 };
    items1 = [title, tmp10];
    const tmp16 = metroRequire(View, obj4);
    cResult[4] = tmp4.benefitTextContainer;
    cResult[5] = tmp10;
    cResult[6] = title;
    cResult[7] = tmp16;
    tmp13 = tmp16;
  }
  let tmp11 = null;
  if (null != description) {
    const obj5 = { style: tmp4.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp11 = React3(Text_Text.Text, obj5);
  }
  cResult[1] = description;
  cResult[2] = tmp4.benefitDescription;
  cResult[3] = tmp11;
  tmp10 = tmp11;
}) : ((description) => {
  let items;
  let items1;
  description = description.description;
  const title = description.title;
  const tmp = closure_7();
  const obj = { style: tmp.benefitRowContainer, children: items };
  items = [, ];
  const obj2 = { children: React3(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
  items[0] = React3(View, obj2);
  const obj3 = { style: tmp.benefitTextContainer, children: items1 };
  items1 = [title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj4 = { style: tmp.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = React3(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  items[1] = metroRequire(View, obj3);
  return metroRequire(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_10 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let items;
  let sectionTitle;
  let tmp4;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  ({ sectionTitle, children } = arg0);
  if (cResult[0] !== sectionTitle) {
    const obj2 = { children: sectionTitle };
    const tmp6 = React3(GuildRoleSubscriptionCard.SectionTitle, obj2);
    cResult[0] = sectionTitle;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp9 = React3(native.Spacer, { size: 14 });
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === children) {
    let tmp10;
    if (cResult[4] === tmp4) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const obj3 = { children: items };
  items = [tmp4, tmp7, children];
  const tmp11 = metroRequire(hasOwnProperty, obj3);
  cResult[3] = children;
  cResult[4] = tmp4;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : ((arg0) => {
  let children;
  let items;
  let sectionTitle;
  const obj = { children: items };
  ({ sectionTitle, children } = arg0);
  items = [React3(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), React3(native.Spacer, { size: 14 }), children];
  return metroRequire(hasOwnProperty, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let additional_perks;
  let channels;
  let closure_0;
  let guildId;
  let handleSelectTemplateInPreview;
  let image;
  let intl2;
  let items2;
  let items3;
  let name;
  let obj10;
  let obj12;
  let obj14;
  let role_color;
  let template;
  let obj = require("react");
  const cResult = obj.c(62);
  ({ template, guildId, handleSelectTemplateInPreview } = arg0);
  const tmp4 = closure_7();
  _require = tmp4;
  let obj2 = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj2.useTypeConsolidationEyebrow("TierTemplateFullCard", "text-xs/bold");
  ({ image, name, channels, additional_perks, role_color } = template.listings[0]);
  if (cResult[0] === handleSelectTemplateInPreview) {
    if (cResult[1] === tmp4.descriptionPlanTextStyle) {
      if (cResult[2] === tmp4.subscriptionPlanTextStyle) {
        let tmp8;
        let tmp10;
        let tmp15;
        let tmp17;
        let tmp18;
        let tmp19;
        let tmp21;
        let tmp24;
        let tmp28;
        let tmp27;
        let tmp32;
        let tmp33;
        let tmp34;
        if (cResult[3] === template) {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== tmp4.separator) {
          let obj3 = { style: tmp4.separator };
          const tmp13 = closure_4(View, obj3);
          cResult[5] = tmp4.separator;
          cResult[6] = tmp13;
          tmp10 = tmp13;
        } else {
          tmp10 = cResult[6];
        }
        const sum = 32 + tmp6;
        const content = tmp4.content;
        if (cResult[7] !== sum) {
          let obj4 = { paddingBottom: sum };
          cResult[7] = sum;
          cResult[8] = obj4;
          tmp15 = obj4;
        } else {
          tmp15 = cResult[8];
        }
        const _Symbol = Symbol;
        if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
          let obj5 = { textTransform: "uppercase" };
          cResult[9] = obj5;
          tmp17 = obj5;
        } else {
          tmp17 = cResult[9];
        }
        if (cResult[10] !== typeConsolidationEyebrow.style) {
          let items = [tmp17, typeConsolidationEyebrow.style];
          cResult[10] = typeConsolidationEyebrow.style;
          cResult[11] = items;
          tmp18 = items;
        } else {
          tmp18 = cResult[11];
        }
        const _Symbol2 = Symbol;
        if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(require("intl").t.CjC5XZ);
          cResult[12] = stringResult;
          tmp19 = stringResult;
        } else {
          tmp19 = cResult[12];
        }
        if (cResult[13] !== tmp18) {
          const obj6 = { variant: "text-sm/bold", color: "text-default", style: tmp18, children: tmp19 };
          const tmp23 = closure_4(require("Text/Text").Text, obj6);
          cResult[13] = tmp18;
          cResult[14] = tmp23;
          tmp21 = tmp23;
        } else {
          tmp21 = cResult[14];
        }
        const _Symbol3 = Symbol;
        if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
          const tmp26 = closure_4(require("native").Spacer, { size: 4 });
          cResult[15] = tmp26;
          tmp24 = tmp26;
        } else {
          tmp24 = cResult[15];
        }
        const _Symbol4 = Symbol;
        if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(require("intl").t.bCb3c8) };
          const Text = tmp(4892).Text;
          intl2 = tmp(1126).intl;
          const tmp30 = closure_4(Text, obj7);
          const tmp31 = closure_4(require("native").Spacer, { size: 24 });
          cResult[16] = tmp30;
          cResult[17] = tmp31;
          tmp28 = tmp31;
          tmp27 = tmp30;
        } else {
          tmp27 = cResult[16];
          tmp28 = cResult[17];
        }
        const _Symbol5 = Symbol;
        const variant = typeConsolidationEyebrow.variant;
        if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { textTransform: "uppercase" };
          cResult[18] = obj8;
          tmp32 = obj8;
        } else {
          tmp32 = cResult[18];
        }
        if (cResult[19] !== typeConsolidationEyebrow.style) {
          const items1 = [tmp32, typeConsolidationEyebrow.style];
          cResult[19] = typeConsolidationEyebrow.style;
          cResult[20] = items1;
          tmp33 = items1;
        } else {
          tmp33 = cResult[20];
        }
        const _Symbol6 = Symbol;
        if (cResult[21] === Symbol.for("react.memo_cache_sentinel")) {
          const intl3 = tmp(1126).intl;
          const stringResult1 = intl3.string(require("intl").t.ZKyfEo);
          cResult[21] = stringResult1;
          tmp34 = stringResult1;
        } else {
          tmp34 = cResult[21];
        }
        if (cResult[22] === typeConsolidationEyebrow.variant) {
          let tmp36;
          let tmp39;
          if (cResult[23] === tmp33) {
            tmp36 = cResult[24];
          }
          const _Symbol7 = Symbol;
          if (cResult[25] === Symbol.for("react.memo_cache_sentinel")) {
            const tmp41 = closure_4(require("native").Spacer, { size: 8 });
            cResult[25] = tmp41;
            tmp39 = tmp41;
          } else {
            tmp39 = cResult[25];
          }
          if (cResult[26] === guildId) {
            if (cResult[27] === image) {
              if (cResult[28] === name) {
                let tmp42;
                let tmp45;
                let tmp49;
                let tmp51;
                if (cResult[29] === role_color) {
                  tmp42 = cResult[30];
                }
                const _Symbol8 = Symbol;
                if (cResult[31] === Symbol.for("react.memo_cache_sentinel")) {
                  const tmp48 = closure_4(closure_8, {});
                  cResult[31] = tmp48;
                  tmp45 = tmp48;
                } else {
                  tmp45 = cResult[31];
                }
                const _Symbol9 = Symbol;
                if (cResult[32] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl4 = tmp(1126).intl;
                  const stringResult2 = intl4.string(require("intl").t.Ofvpfs);
                  cResult[32] = stringResult2;
                  tmp49 = stringResult2;
                } else {
                  tmp49 = cResult[32];
                }
                if (cResult[33] === channels) {
                  if (cResult[34] === tmp4.channelIcon) {
                    let tmp54;
                    let tmp58;
                    let tmp62;
                    let tmp64;
                    let tmp67;
                    if (cResult[35] === tmp4.channelTitle) {
                      tmp51 = cResult[36];
                    }
                    if (cResult[40] !== tmp51) {
                      const obj9 = { sectionTitle: tmp49, children: closure_4(require("LayoutUtils").GappedList, obj10) };
                      obj10 = { gap: 14, children: tmp51 };
                      const tmp57 = closure_4(closure_10, obj9);
                      cResult[40] = tmp51;
                      cResult[41] = tmp57;
                      tmp54 = tmp57;
                    } else {
                      tmp54 = cResult[41];
                    }
                    const _Symbol10 = Symbol;
                    if (cResult[42] === Symbol.for("react.memo_cache_sentinel")) {
                      const tmp61 = closure_4(closure_8, {});
                      cResult[42] = tmp61;
                      tmp58 = tmp61;
                    } else {
                      tmp58 = cResult[42];
                    }
                    const _Symbol11 = Symbol;
                    if (cResult[43] === Symbol.for("react.memo_cache_sentinel")) {
                      const intl5 = tmp(1126).intl;
                      const stringResult3 = intl5.string(require("intl").t.w7KA8R);
                      cResult[43] = stringResult3;
                      tmp62 = stringResult3;
                    } else {
                      tmp62 = cResult[43];
                    }
                    if (cResult[44] !== additional_perks) {
                      let tmp65;
                      const _Symbol12 = Symbol;
                      if (cResult[46] === Symbol.for("react.memo_cache_sentinel")) {
                        function te(children, arg1) {
                          const obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
                          const obj2 = { title: closure_1_4(closure_0(dependencyMap[9]).Text, obj) };
                          return closure_1_4(closure_1_9, obj2, arg1);
                        }
                        cResult[46] = te;
                        tmp65 = te;
                      } else {
                        tmp65 = cResult[46];
                      }
                      const mapped = additional_perks.map(tmp65);
                      cResult[44] = additional_perks;
                      cResult[45] = mapped;
                      tmp64 = mapped;
                    } else {
                      tmp64 = cResult[45];
                    }
                    if (cResult[47] !== tmp64) {
                      const obj11 = { sectionTitle: tmp62, children: closure_4(require("LayoutUtils").GappedList, obj12) };
                      obj12 = { gap: 14, children: tmp64 };
                      const tmp70 = closure_4(closure_10, obj11);
                      cResult[47] = tmp64;
                      cResult[48] = tmp70;
                      tmp67 = tmp70;
                    } else {
                      tmp67 = cResult[48];
                    }
                    if (cResult[49] === tmp4.content) {
                      if (cResult[50] === tmp21) {
                        if (cResult[51] === tmp36) {
                          if (cResult[52] === tmp42) {
                            if (cResult[53] === tmp54) {
                              if (cResult[54] === tmp67) {
                                let tmp71;
                                if (cResult[55] === tmp15) {
                                  tmp71 = cResult[56];
                                }
                                if (cResult[57] === tmp4.container) {
                                  if (cResult[58] === tmp8) {
                                    if (cResult[59] === tmp71) {
                                      let tmp74;
                                      if (cResult[60] === tmp10) {
                                        tmp74 = cResult[61];
                                      }
                                      return tmp74;
                                    }
                                  }
                                }
                                const obj13 = { scrollable: true, startExpanded: true, children: closure_6(View, obj14) };
                                obj14 = { style: tmp7, children: items2 };
                                items2 = [tmp8, tmp10, tmp71];
                                BottomSheet = tmp(6652).BottomSheet;
                                const tmp78 = closure_4(BottomSheet, obj13);
                                cResult[57] = tmp4.container;
                                cResult[58] = tmp8;
                                cResult[59] = tmp71;
                                cResult[60] = tmp10;
                                cResult[61] = tmp78;
                                tmp74 = tmp78;
                              }
                            }
                          }
                        }
                      }
                    }
                    const obj15 = { scrollsToTop: false, style: content, contentContainerStyle: tmp15, children: items3 };
                    items3 = [tmp21, tmp24, tmp27, tmp28, tmp36, tmp39, tmp42, tmp45, tmp54, tmp58, tmp67];
                    const tmp73 = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj15);
                    cResult[49] = tmp4.content;
                    cResult[50] = tmp21;
                    cResult[51] = tmp36;
                    cResult[52] = tmp42;
                    cResult[53] = tmp54;
                    cResult[54] = tmp67;
                    cResult[55] = tmp15;
                    cResult[56] = tmp73;
                    tmp71 = tmp73;
                  }
                }
                if (cResult[37] === tmp4.channelIcon) {
                  let tmp52;
                  if (cResult[38] === tmp4.channelTitle) {
                    tmp52 = cResult[39];
                  }
                  const mapped1 = channels.map(tmp52);
                  cResult[33] = channels;
                  cResult[34] = tmp4.channelIcon;
                  cResult[35] = tmp4.channelTitle;
                  cResult[36] = mapped1;
                  tmp51 = mapped1;
                }
                const fn = function q(children) {
                  let items;
                  const obj2 = { style: closure_0.channelTitle, children: items };
                  items = [, ];
                  const obj = GuildRoleSubscriptionTierTemplateUtils;
                  const obj3 = { style: closure_0.channelIcon, size: "xs" };
                  items[0] = React3(obj.getPrivateChannelIconComponent(children.type), obj3);
                  const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
                  items[1] = React3(Text_Text.Text, obj4);
                  const obj5 = { title: metroRequire(View, obj2), description: children.description };
                  return React3(closure_9, obj5, children.id);
                };
                cResult[37] = tmp4.channelIcon;
                cResult[38] = tmp4.channelTitle;
                cResult[39] = fn;
                tmp52 = fn;
              }
            }
          }
          const obj16 = { roleColor: role_color, roleImage: image, roleName: name, guildId };
          const tmp44 = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, obj16);
          cResult[26] = guildId;
          cResult[27] = image;
          cResult[28] = name;
          cResult[29] = role_color;
          cResult[30] = tmp44;
          tmp42 = tmp44;
        }
        const obj17 = { variant, color: "text-default", style: tmp33, children: tmp34 };
        const tmp38 = closure_4(require("Text/Text").Text, obj17);
        cResult[22] = typeConsolidationEyebrow.variant;
        cResult[23] = tmp33;
        cResult[24] = tmp38;
        tmp36 = tmp38;
      }
    }
  }
  const obj18 = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp4.subscriptionPlanTextStyle, descriptionTextStyle: tmp4.descriptionPlanTextStyle, closeActionSheet: true };
  const tmp9 = closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, obj18);
  cResult[0] = handleSelectTemplateInPreview;
  cResult[1] = tmp4.descriptionPlanTextStyle;
  cResult[2] = tmp4.subscriptionPlanTextStyle;
  cResult[3] = template;
  cResult[4] = tmp9;
  tmp8 = tmp9;
}) : ((template) => {
  let GappedList;
  let GappedList2;
  let additional_perks;
  let channels;
  let closure_0;
  let guildId;
  let handleSelectTemplateInPreview;
  let image;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let items;
  let items1;
  let items2;
  let items3;
  let name;
  let obj12;
  let obj14;
  let obj3;
  let obj7;
  let role_color;
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_7();
  _require = tmp;
  let obj = require("useTypeConsolidationTextTransform");
  const typeConsolidationEyebrow = obj.useTypeConsolidationEyebrow("TierTemplateFullCard", "text-xs/bold");
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const bottom = useSafeAreaInsetsDefault().bottom;
  ({ image, name, role_color } = first);
  let obj2 = { scrollable: true, startExpanded: true, children: closure_6(View, obj3) };
  obj3 = { style: tmp.container, children: items };
  BottomSheet = require("Sheet/BottomSheet").BottomSheet;
  let obj4 = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  items = [closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, obj4), , ];
  let obj5 = { style: tmp.separator };
  items[1] = closure_4(View, obj5);
  const obj6 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj7, children: items2 };
  obj7 = { paddingBottom: 32 + bottom };
  const BottomSheetScrollView = require("BottomSheetModal").BottomSheetScrollView;
  const obj8 = { variant: "text-sm/bold", color: "text-default", style: items1, children: intl.string(require("intl").t.CjC5XZ) };
  items1 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  const Text = require("Text/Text").Text;
  intl = require("intl").intl;
  items2 = [closure_4(Text, obj8), closure_4(require("native").Spacer, { size: 4 }), , , , , , , , , ];
  const obj9 = { variant: "text-sm/normal", color: "text-muted", children: intl2.string(require("intl").t.bCb3c8) };
  const Text2 = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items2[2] = closure_4(Text2, obj9);
  items2[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: items3, children: intl3.string(require("intl").t.ZKyfEo) };
  items3 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  const Text3 = require("Text/Text").Text;
  intl3 = require("intl").intl;
  items2[4] = closure_4(Text3, obj10);
  items2[5] = closure_4(require("native").Spacer, { size: 8 });
  items2[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items2[7] = closure_4(closure_8, {});
  const obj11 = { sectionTitle: intl4.string(require("intl").t.Ofvpfs), children: closure_4(GappedList, obj12) };
  intl4 = require("intl").intl;
  obj12 = {
    gap: 14,
    children: channels.map((children) => {
      let items;
      const obj2 = { style: closure_0.channelTitle, children: items };
      items = [, ];
      const obj = GuildRoleSubscriptionTierTemplateUtils;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      items[0] = React3(obj.getPrivateChannelIconComponent(children.type), obj3);
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      items[1] = React3(Text_Text.Text, obj4);
      const obj5 = { title: metroRequire(View, obj2), description: children.description };
      return React3(closure_9, obj5, children.id);
    })
  };
  GappedList = require("LayoutUtils").GappedList;
  items2[8] = closure_4(closure_10, obj11);
  items2[9] = closure_4(closure_8, {});
  const obj13 = { sectionTitle: intl5.string(require("intl").t.w7KA8R), children: closure_4(GappedList2, obj14) };
  intl5 = require("intl").intl;
  obj14 = {
    gap: 14,
    children: additional_perks.map((children, index) => {
      const obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      const obj2 = { title: closure_1_4(closure_0(dependencyMap[9]).Text, obj) };
      return closure_1_4(closure_1_9, obj2, index);
    })
  };
  GappedList2 = require("LayoutUtils").GappedList;
  items2[10] = closure_4(closure_10, obj13);
  items[2] = closure_6(BottomSheetScrollView, obj6);
  return closure_4(BottomSheet, obj2);
});
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default tmp5;