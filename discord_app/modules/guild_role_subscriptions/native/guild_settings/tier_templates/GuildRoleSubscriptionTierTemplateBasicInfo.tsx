// === Module 17980: GuildRoleSubscriptionTierTemplateBasicInfo ===

// Module 17980 (GuildRoleSubscriptionTierTemplateBasicInfo)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 4886 */;
import BaseTextButton from "BaseTextButton" /* 5595 */;
import FastImageDefault from "FastImage" /* 5974 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15049 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1379).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1096).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: null, templateCTAButton: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj2.image = size;
obj2.templateCTAButton = { borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.sm };
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = ReactCompilerGating.isReactCompilerEnabled() ? ((template) => {
  const cResult = c.c(40);
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
      const tmp11 = timestampProducer(native.Spacer, { size: 16 });
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
      const tmp16 = timestampProducer(Text_Text.Text, obj5);
      cResult[8] = name;
      cResult[9] = tmp16;
      let tmp14 = tmp16;
    } else {
      tmp14 = cResult[9];
    }
    const _Symbol4 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const tmp19 = timestampProducer(native.Spacer, { size: 4 });
      cResult[10] = tmp19;
      let tmp17 = tmp19;
    } else {
      tmp17 = cResult[10];
    }
    if (cResult[11] !== price_tier) {
      const intl = util.intl;
      const obj6 = { price: PriceUtils.formatPrice(price_tier, CurrencyCodes.USD), interval: null };
      const tmpResult = PriceUtils;
      const obj7 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
      obj6.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval(obj7);
      const formatResult = intl.format(util.t.CgmBaG, obj6);
      cResult[11] = price_tier;
      cResult[12] = formatResult;
      let tmp20 = formatResult;
      const tmpResult2 = GuildRoleSubscriptionTypeUtils;
    } else {
      tmp20 = cResult[12];
    }
    if (cResult[13] === subscriptionPlanTextStyle) {
      if (cResult[14] === tmp20) {
        let tmp24 = cResult[15];
      }
      if (cResult[16] === tmp24) {
        if (cResult[17] === tmp14) {
          let tmp27 = cResult[18];
        }
        if (cResult[19] === tmp4.header) {
          if (cResult[20] === tmp27) {
            if (cResult[21] === tmp6) {
              let tmp31 = cResult[22];
            }
            if (cResult[23] === description) {
              if (cResult[24] === descriptionTextProps) {
                if (cResult[25] === descriptionTextStyle) {
                  let tmp35 = cResult[26];
                }
                const _Symbol5 = Symbol;
                if (cResult[27] === Symbol.for("react.memo_cache_sentinel")) {
                  const intl2 = util.intl;
                  const stringResult = intl2.string(util.t["1W7mCt"]);
                  cResult[27] = stringResult;
                  let tmp41 = stringResult;
                } else {
                  tmp41 = cResult[27];
                }
                if (cResult[28] === closeActionSheet) {
                  if (cResult[29] === handleSelectTemplateInPreview) {
                    if (cResult[30] === template) {
                      let tmp43 = cResult[31];
                    }
                    if (cResult[32] === tmp4.templateCTAButton) {
                      if (cResult[33] === tmp43) {
                        let tmp44 = cResult[34];
                      }
                      if (cResult[35] === tmp4.container) {
                        if (cResult[36] === tmp31) {
                          if (cResult[37] === tmp35) {
                            if (cResult[38] === tmp44) {
                              let tmp47 = cResult[39];
                            }
                            return tmp47;
                          }
                        }
                      }
                      const obj8 = { style: container, children: null };
                      const items = [tmp31, tmp35, tmp44];
                      obj8.children = items;
                      const tmp50 = React5(View, obj8);
                      cResult[35] = tmp4.container;
                      cResult[36] = tmp31;
                      cResult[37] = tmp35;
                      cResult[38] = tmp44;
                      cResult[39] = tmp50;
                      tmp47 = tmp50;
                    }
                    const obj9 = { text: tmp41, pillStyle: tmp4.templateCTAButton, onPress: tmp43, grow: true };
                    const tmp46 = timestampProducer(BaseTextButton.BaseTextButton, obj9);
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
            const obj10 = { variant: "text-sm/normal", style: descriptionTextStyle };
            const merged = Object.assign(descriptionTextProps);
            obj10.children = description;
            const tmp40 = timestampProducer(Text_Text.Text, obj10);
            cResult[23] = description;
            cResult[24] = descriptionTextProps;
            cResult[25] = descriptionTextStyle;
            cResult[26] = tmp40;
            tmp35 = tmp40;
          }
        }
        const obj11 = { style: header, children: null };
        const items1 = [tmp6, tmp9, tmp27];
        obj11.children = items1;
        const tmp34 = React5(View, obj11);
        cResult[19] = tmp4.header;
        cResult[20] = tmp27;
        cResult[21] = tmp6;
        cResult[22] = tmp34;
        tmp31 = tmp34;
      }
      const obj12 = { style: tmp12, children: null };
      const items2 = [tmp14, tmp17, tmp24];
      obj12.children = items2;
      const tmp30 = React5(View, obj12);
      cResult[16] = tmp24;
      cResult[17] = tmp14;
      cResult[18] = tmp30;
      tmp27 = tmp30;
    }
    const obj13 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: tmp20 };
    const tmp26 = timestampProducer(Text_Text.Text, obj13);
    cResult[13] = subscriptionPlanTextStyle;
    cResult[14] = tmp20;
    cResult[15] = tmp26;
    tmp24 = tmp26;
  }
  const tmp7 = timestampProducer(FastImageDefault, { source: tmp5, style: tmp4.image });
  cResult[2] = tmp4.image;
  cResult[3] = tmp5;
  cResult[4] = tmp7;
  tmp6 = tmp7;
  const obj14 = { source: tmp5, style: tmp4.image };
}) : ((template) => {
  template = template.template;
  ({ handleSelectTemplateInPreview: importDefault, closeActionSheet: dependencyMap, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_8();
  const obj = { style: tmp.container, children: null };
  const obj2 = { style: tmp.header, children: null };
  ({ image, name, price_tier, description } = template.listings[0]);
  const items = [timestampProducer(FastImageDefault, { source: { uri: image }, style: tmp.image }), timestampProducer(native.Spacer, { size: 16 }), ];
  const obj4 = { style: { flexShrink: 1 }, children: null };
  const items1 = [timestampProducer(Text_Text.Text, { variant: "heading-md/semibold", color: "mobile-text-heading-primary", style: { flexWrap: "wrap" }, children: name }), timestampProducer(native.Spacer, { size: 4 }), ];
  const obj5 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: null };
  const intl = util.intl;
  const obj6 = { price: PriceUtils.formatPrice(price_tier, CurrencyCodes.USD), interval: null };
  const obj3 = { source: { uri: image }, style: tmp.image };
  obj6.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval({ interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 });
  obj5.children = intl.format(util.t.CgmBaG, obj6);
  items1[2] = timestampProducer(Text_Text.Text, obj5);
  obj4.children = items1;
  items[2] = React5(View, obj4);
  obj2.children = items;
  const items2 = [React5(View, obj2), , ];
  const obj10 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj10.children = description;
  items2[1] = timestampProducer(Text_Text.Text, obj10);
  const obj11 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl2 = util.intl;
  obj11.text = intl2.string(util.t["1W7mCt"]);
  obj11.pillStyle = tmp.templateCTAButton;
  obj11.onPress = function onPress() {
    return importDefault(template, dependencyMap);
  };
  items2[2] = timestampProducer(BaseTextButton.BaseTextButton, obj11);
  obj.children = items2;
  return React5(View, obj);
});