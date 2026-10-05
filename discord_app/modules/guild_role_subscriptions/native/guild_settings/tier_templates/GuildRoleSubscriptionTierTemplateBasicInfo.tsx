// === Module 17980: GuildRoleSubscriptionTierTemplateBasicInfo ===

// Module 17980 (GuildRoleSubscriptionTierTemplateBasicInfo)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1096 */;
import intl3 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import Text_Text from "Text/Text" /* 4886 */;
import BaseTextButton2 from "BaseTextButton" /* 5595 */;
import FastImageDefault from "FastImage" /* 5974 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15049 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let template;

let metroImportDefault;
let metroRequire;
let obj2;
let size;
const View = react_native.View;
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
const CurrencyCodes = Constants.CurrencyCodes;
({ jsx: metroRequire, jsxs: metroImportDefault } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: size, templateCTAButton: obj2 };
size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
createStyles = createStyles.createStyles;
obj2 = { borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles(obj);
let tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((template) => {
  let closeActionSheet;
  let container;
  let description;
  let descriptionTextStyle;
  let header;
  let image;
  let items;
  let items1;
  let items2;
  let name;
  let obj7;
  let price_tier;
  let subscriptionPlanTextStyle;
  let tmp5;
  let tmpResult;
  let tmpResult2;
  const obj = react2;
  const cResult = obj.c(40);
  template = template.template;
  const handleSelectTemplateInPreview = template.handleSelectTemplateInPreview;
  ({ subscriptionPlanTextStyle, descriptionTextStyle, closeActionSheet } = template);
  const descriptionTextProps = template.descriptionTextProps;
  const tmp4 = closure_8();
  ({ image, name, price_tier, description } = template.listings[0]);
  ({ container, header } = tmp4);
  if (cResult[0] !== image) {
    const obj2 = { uri: image };
    cResult[0] = image;
    cResult[1] = obj2;
    tmp5 = obj2;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.image) {
    let tmp6;
    let tmp9;
    let tmp12;
    let tmp13;
    let tmp14;
    let tmp17;
    let tmp20;
    if (cResult[3] === tmp5) {
      tmp6 = cResult[4];
    }
    const _Symbol = Symbol;
    if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp11 = metroRequire(native.Spacer, { size: 16 });
      cResult[5] = tmp11;
      tmp9 = tmp11;
    } else {
      tmp9 = cResult[5];
    }
    const _Symbol2 = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const obj3 = { flexShrink: 1 };
      cResult[6] = obj3;
      tmp12 = obj3;
    } else {
      tmp12 = cResult[6];
    }
    const _Symbol3 = Symbol;
    if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
      const obj4 = { flexWrap: "wrap" };
      cResult[7] = obj4;
      tmp13 = obj4;
    } else {
      tmp13 = cResult[7];
    }
    if (cResult[8] !== name) {
      const obj5 = { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: tmp13, children: name };
      const tmp16 = metroRequire(Text_Text.Text, obj5);
      cResult[8] = name;
      cResult[9] = tmp16;
      tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = metroRequire(native.Spacer, { size: 4 });
      cResult[10] = tmp19;
      tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    if (cResult[11] !== price_tier) {
      const intl = intl3.intl;
      const format = intl.format;
      const obj6 = { price: tmpResult.formatPrice(price_tier, CurrencyCodes.USD), interval: tmpResult2.formatPlanInterval(obj7) };
      const CgmBaG = intl3.t.CgmBaG;
      obj7 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
      tmpResult = PriceUtils;
      tmpResult2 = GuildRoleSubscriptionTypeUtils;
      const formatResult = format(CgmBaG, obj6);
      cResult[11] = price_tier;
      cResult[12] = formatResult;
      tmp20 = formatResult;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === subscriptionPlanTextStyle) {
      let tmp24;
      if (cResult[14] === tmp20) {
        tmp24 = cResult[15];
      }
      if (cResult[16] === tmp24) {
        let tmp27;
        if (cResult[17] === tmp14) {
          tmp27 = cResult[18];
        }
        if (cResult[19] === tmp4.header) {
          if (cResult[20] === tmp27) {
            let tmp31;
            if (cResult[21] === tmp6) {
              tmp31 = cResult[22];
            }
            if (cResult[23] === description) {
              if (cResult[24] === descriptionTextProps) {
                let tmp35;
                let tmp41;
                if (cResult[25] === descriptionTextStyle) {
                  tmp35 = cResult[26];
                }
                const _Symbol5 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = intl3.intl;
                  const stringResult = intl2.string(intl3.t["1W7mCt"]);
                  cResult[27] = stringResult;
                  tmp41 = stringResult;
                } else {
                  tmp41 = cResult[27];
                }
                if (cResult[28] === closeActionSheet) {
                  if (cResult[29] === handleSelectTemplateInPreview) {
                    let tmp43;
                    if (cResult[30] === template) {
                      tmp43 = cResult[31];
                    }
                    if (cResult[32] === tmp4.templateCTAButton) {
                      let tmp44;
                      if (cResult[33] === tmp43) {
                        tmp44 = cResult[34];
                      }
                      if (cResult[35] === tmp4.container) {
                        if (cResult[36] === tmp31) {
                          if (cResult[37] === tmp35) {
                            let tmp47;
                            if (cResult[38] === tmp44) {
                              tmp47 = cResult[39];
                            }
                            return tmp47;
                          }
                        }
                      }
                      const obj8 = { style: container, children: items };
                      items = [tmp31, tmp35, tmp44];
                      const tmp50 = metroImportDefault(View, obj8);
                      cResult[35] = tmp4.container;
                      cResult[36] = tmp31;
                      cResult[37] = tmp35;
                      cResult[38] = tmp44;
                      cResult[39] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj9 = { text: tmp41, pillStyle: tmp4.templateCTAButton, onPress: tmp43, grow: true };
                    const tmp46 = metroRequire(BaseTextButton2.BaseTextButton, obj9);
                    cResult[32] = tmp4.templateCTAButton;
                    cResult[33] = tmp43;
                    cResult[34] = tmp46;
                    tmp44 = tmp46;
                  }
                }
                const fn = function w() {
                  return handleSelectTemplateInPreview(template, closeActionSheet);
                };
                cResult[28] = closeActionSheet;
                cResult[29] = handleSelectTemplateInPreview;
                cResult[30] = template;
                cResult[31] = fn;
                tmp43 = fn;
              }
            }
            const obj10 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
            const Text = Text_Text.Text;
            const merged = Object.assign(descriptionTextProps);
            const tmp40 = metroRequire(Text, obj10);
            cResult[23] = description;
            cResult[24] = descriptionTextProps;
            cResult[25] = descriptionTextStyle;
            cResult[26] = tmp40;
            tmp35 = tmp40;
          }
        }
        const obj11 = { style: header, children: items1 };
        items1 = [tmp6, tmp9, tmp27];
        const tmp34 = metroImportDefault(View, obj11);
        cResult[19] = tmp4.header;
        cResult[20] = tmp27;
        cResult[21] = tmp6;
        cResult[22] = tmp34;
        tmp31 = tmp34;
      }
      const obj12 = { style: tmp12, children: items2 };
      items2 = [tmp14, tmp17, tmp24];
      const tmp30 = metroImportDefault(View, obj12);
      cResult[16] = tmp24;
      cResult[17] = tmp14;
      cResult[18] = tmp30;
      tmp27 = tmp30;
    }
    const obj13 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: tmp20 };
    const tmp26 = metroRequire(Text_Text.Text, obj13);
    cResult[13] = subscriptionPlanTextStyle;
    cResult[14] = tmp20;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  const obj14 = { source: tmp5, style: tmp4.image };
  const tmp7 = metroRequire(FastImageDefault, obj14);
  cResult[2] = tmp4.image;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
}) : ((template) => {
  let CgmBaG;
  let closure_129_1;
  let closure_129_2;
  let description;
  let descriptionTextProps;
  let descriptionTextStyle;
  let format;
  let image;
  let intl2;
  let items;
  let items1;
  let items2;
  let name;
  let obj6;
  let obj7;
  let obj8;
  let obj9;
  let price_tier;
  let subscriptionPlanTextStyle;
  template = template.template;
  ({ handleSelectTemplateInPreview: closure_129_1, closeActionSheet: closure_129_2, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_8();
  const obj = { style: tmp.container, children: items2 };
  const obj2 = { style: tmp.header, children: items };
  ({ image, name, price_tier, description } = template.listings[0]);
  items = [, , ];
  const obj3 = { source: { uri: image }, style: tmp.image };
  items[0] = metroRequire(FastImageDefault, obj3);
  items[1] = metroRequire(native.Spacer, { size: 16 });
  const obj4 = { style: { flexShrink: 1 }, children: items1 };
  items1 = [metroRequire(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), metroRequire(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: format(CgmBaG, obj6) };
  const Text = Text_Text.Text;
  const intl = intl3.intl;
  format = intl.format;
  obj6 = { price: obj7.formatPrice(price_tier, CurrencyCodes.USD), interval: obj8.formatPlanInterval(obj9) };
  CgmBaG = intl3.t.CgmBaG;
  obj7 = PriceUtils;
  obj8 = GuildRoleSubscriptionTypeUtils;
  obj9 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
  items1[2] = metroRequire(Text, obj5);
  items[2] = metroImportDefault(View, obj4);
  items2 = [metroImportDefault(View, obj2), , ];
  const obj10 = { variant: "text-sm/normal", style: descriptionTextStyle, children: description };
  const Text2 = Text_Text.Text;
  const merged = Object.assign(descriptionTextProps);
  items2[1] = metroRequire(Text2, obj10);
  const obj11 = {
    text: intl2.string(intl3.t["1W7mCt"]),
    pillStyle: tmp.templateCTAButton,
    onPress() {
      return closure_1_1(template, closure_1_2);
    },
    grow: true
  };
  const BaseTextButton = BaseTextButton2.BaseTextButton;
  intl2 = intl3.intl;
  items2[2] = metroRequire(BaseTextButton, obj11);
  return metroImportDefault(View, obj);
});
size = size_mod;
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = tmp5;