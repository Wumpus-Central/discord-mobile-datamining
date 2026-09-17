// === Module 18060: GuildRoleSubscriptionTierTemplateBasicInfo ===

// Module 18060 (GuildRoleSubscriptionTierTemplateBasicInfo)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import Text_Text from "Text/Text" /* 4636 */;
import BaseTextButton from "BaseTextButton" /* 5063 */;
import FastImageDefault from "FastImage" /* 5675 */;
import PriceUtils from "PriceUtils" /* 7348 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15346 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1374).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4640);
let obj2 = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: null, templateCTAButton: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj2.image = size;
obj2.templateCTAButton = { borderRadius: nativeDefault.radii.sm };
let closure_8 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export const GuildRoleSubscriptionTierTemplateBasicInfo = function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
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
};