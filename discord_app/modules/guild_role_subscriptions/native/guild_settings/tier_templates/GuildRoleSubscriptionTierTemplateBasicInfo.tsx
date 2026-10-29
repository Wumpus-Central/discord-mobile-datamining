// === Module 19873: GuildRoleSubscriptionTierTemplateBasicInfo ===

// Module 19873 (GuildRoleSubscriptionTierTemplateBasicInfo)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1125 */;
import native from "native" /* 1199 */;
import Text_Text from "Text/Text" /* 5271 */;
import components_Button_Button from "components/Button/Button" /* 5281 */;
import FastImageDefault from "FastImage" /* 5707 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 17097 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5005);
let obj2 = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj2.image = size;
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  const cResult = c.c(37);
  template = template.template;
  const handleSelectTemplateInPreview = template.handleSelectTemplateInPreview;
  ({ subscriptionPlanTextStyle, descriptionTextStyle, closeActionSheet } = template);
  const descriptionTextProps = template.descriptionTextProps;
  const tmp4 = closure_6();
  ({ image, name, price_tier, description } = template.listings[0]);
  ({ container, header } = tmp4);
  if (cResult[0] !== image) {
    const obj2 = { uri: image };
    cResult[0] = image;
    cResult[1] = obj2;
    let tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.image) {
    if (cResult[3] === tmp5) {
      let tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = React4(native.Spacer, { size: 16 });
      cResult[5] = tmp11;
      let tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { flexShrink: 1 };
      cResult[6] = obj3;
      let tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { flexWrap: "wrap" };
      cResult[7] = obj4;
      let tmp13 = obj4;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== name) {
      const obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp13, children: name };
      const tmp16 = React4(Text_Text.Text, obj5);
      cResult[8] = name;
      cResult[9] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = React4(native.Spacer, { size: 4 });
      cResult[10] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    if (cResult[11] !== price_tier) {
      const result = GuildRoleSubscriptionTypeUtils.formatMonthlyPriceLabel(price_tier);
      cResult[11] = price_tier;
      cResult[12] = result;
      let tmp20 = result;
      const tmpResult = GuildRoleSubscriptionTypeUtils;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === subscriptionPlanTextStyle) {
      if (cResult[14] === tmp20) {
        let tmp22 = cResult[15];
      }
      if (cResult[16] === tmp22) {
        if (cResult[17] === tmp14) {
          let tmp25 = cResult[18];
        }
        if (cResult[19] === tmp4.header) {
          if (cResult[20] === tmp25) {
            if (cResult[21] === tmp6) {
              let tmp29 = cResult[22];
            }
            if (cResult[23] === description) {
              if (cResult[24] === descriptionTextProps) {
                if (cResult[25] === descriptionTextStyle) {
                  let tmp33 = cResult[26];
                }
                const _Symbol5 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl = util.intl;
                  const stringResult = intl.string(util.t["1W7mCt"]);
                  cResult[27] = stringResult;
                  let tmp39 = stringResult;
                } else {
                  tmp39 = cResult[27];
                }
                if (cResult[28] === closeActionSheet) {
                  if (cResult[29] === handleSelectTemplateInPreview) {
                    if (cResult[30] === template) {
                      let tmp41 = cResult[31];
                    }
                    if (cResult[32] === tmp4.container) {
                      if (cResult[33] === tmp29) {
                        if (cResult[34] === tmp33) {
                          if (cResult[35] === tmp41) {
                            let tmp44 = cResult[36];
                          }
                          return tmp44;
                        }
                      }
                    }
                    const obj6 = { style: container, children: null };
                    const items = [tmp29, tmp33, tmp41];
                    obj6.children = items;
                    const tmp47 = hasOwnProperty(View, obj6);
                    cResult[32] = tmp4.container;
                    cResult[33] = tmp29;
                    cResult[34] = tmp33;
                    cResult[35] = tmp41;
                    cResult[36] = tmp47;
                    tmp44 = tmp47;
                  }
                }
                const obj7 = {
                  text: tmp39,
                  onPress() {
                                  return handleSelectTemplateInPreview(template, closeActionSheet);
                                },
                  grow: true
                };
                const tmp43 = React4(components_Button_Button.Button, obj7);
                cResult[28] = closeActionSheet;
                cResult[29] = handleSelectTemplateInPreview;
                cResult[30] = template;
                cResult[31] = tmp43;
                tmp41 = tmp43;
              }
            }
            const obj8 = { variant: "text-sm/normal", style: descriptionTextStyle };
            const merged = Object.assign(descriptionTextProps);
            obj8.children = description;
            const tmp38 = React4(Text_Text.Text, obj8);
            cResult[23] = description;
            cResult[24] = descriptionTextProps;
            cResult[25] = descriptionTextStyle;
            cResult[26] = tmp38;
            tmp33 = tmp38;
          }
        }
        const obj9 = { style: header, children: null };
        const items1 = [tmp6, tmp9, tmp25];
        obj9.children = items1;
        const tmp32 = hasOwnProperty(View, obj9);
        cResult[19] = tmp4.header;
        cResult[20] = tmp25;
        cResult[21] = tmp6;
        cResult[22] = tmp32;
        tmp29 = tmp32;
      }
      const obj10 = { style: tmp12, children: null };
      const items2 = [tmp14, tmp17, tmp22];
      obj10.children = items2;
      const tmp28 = hasOwnProperty(View, obj10);
      cResult[16] = tmp22;
      cResult[17] = tmp14;
      cResult[18] = tmp28;
      tmp25 = tmp28;
    }
    const obj11 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: tmp20 };
    const tmp24 = React4(Text_Text.Text, obj11);
    cResult[13] = subscriptionPlanTextStyle;
    cResult[14] = tmp20;
    cResult[15] = tmp24;
    tmp22 = tmp24;
  }
  const tmp7 = React4(FastImageDefault, { source: tmp5, style: tmp4.image });
  cResult[2] = tmp4.image;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const obj12 = { source: tmp5, style: tmp4.image };
}) : (function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
  template = template.template;
  ({ handleSelectTemplateInPreview: importDefault, closeActionSheet: dependencyMap, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  ({ image, name, price_tier, description } = template.listings[0]);
  const items = [React4(FastImageDefault, { source: { uri: image }, style: tmp.image }), React4(native.Spacer, { size: 16 }), ];
  const obj4 = { style: { flexShrink: 1 }, children: null };
  const items1 = [React4(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), React4(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: GuildRoleSubscriptionTypeUtils.formatMonthlyPriceLabel(price_tier) };
  items1[2] = React4(Text_Text.Text, obj5);
  obj4.children = items1;
  items[2] = hasOwnProperty(View, obj4);
  obj2.children = items;
  const items2 = [hasOwnProperty(View, obj2), , ];
  const obj7 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj7.children = description;
  items2[1] = React4(Text_Text.Text, obj7);
  const obj8 = { text: null, onPress: null, grow: true };
  const intl = util.intl;
  obj8.text = intl.string(util.t["1W7mCt"]);
  obj8.onPress = function onPress() {
    return importDefault(template, dependencyMap);
  };
  items2[2] = React4(components_Button_Button.Button, obj8);
  obj.children = items2;
  return hasOwnProperty(View, obj);
});