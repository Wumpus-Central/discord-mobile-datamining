// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import BaseTextButton from "../../../../../design/components/Button/native/BaseTextButton.native.tsx";
import FastImageDefault from "../../../../../components_native/common/FastImage.tsx";
import PriceUtils from "../../../../../utils/PriceUtils.tsx";
import GuildRoleSubscriptionTypeUtils from "../../../GuildRoleSubscriptionTypeUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const CurrencyCodes = fn(1085).CurrencyCodes;
const jsxProd = fn(21);
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = {
  container: { paddingBottom: 24 },
  header: { flexDirection: "row" },
  image: null,
  templateCTAButton: null,
};
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
createStyles.image = size;
createStyles = { borderRadius: nativeDefault.radii.sm };
createStyles.templateCTAButton = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx",
);

export const GuildRoleSubscriptionTierTemplateBasicInfo = function GuildRoleSubscriptionTierTemplateBasicInfo(
  template,
) {
  template = template.template;
  ({ handleSelectTemplateInPreview: importDefault, closeActionSheet: dependencyMap, descriptionTextProps } = template);
  ({ subscriptionPlanTextStyle, descriptionTextStyle } = template);
  const tmp = closure_8();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.header, children: null };
  ({ image, name, price_tier, description } = template.listings[0]);
  obj = { source: { uri: image }, style: tmp.image };
  const items = [timestampProducer(FastImageDefault, obj), timestampProducer(native.Spacer, { size: 16 })];
  const obj1 = { style: { flexShrink: 1 }, children: null };
  const items1 = [
    timestampProducer(Text_Text.Text, {
      variant: "heading-md/semibold",
      color: "mobile-text-heading-primary",
      style: { flexWrap: "wrap" },
      children: name,
    }),
    timestampProducer(native.Spacer, { size: 4 }),
  ];
  const obj2 = { variant: "heading-md/medium", style: subscriptionPlanTextStyle, children: null };
  const intl = util.intl;
  const obj3 = { price: null, interval: null };
  let obj6 = PriceUtils;
  obj3.price = obj6.formatPrice(price_tier, CurrencyCodes.USD);
  obj3.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval({
    interval: SubscriptionIntervalTypes.MONTH,
    interval_count: 1,
  });
  obj2.children = intl.format(util.t.CgmBaG, obj3);
  items1[2] = timestampProducer(Text_Text.Text, obj2);
  obj1.children = items1;
  items[2] = React5(View, obj1);
  obj.children = items;
  const items2 = [React5(View, obj), ,];
  const obj5 = { variant: "text-sm/normal", style: descriptionTextStyle };
  const merged = Object.assign(descriptionTextProps);
  obj5.children = description;
  items2[1] = timestampProducer(Text_Text.Text, obj5);
  obj6 = { text: null, pillStyle: null, onPress: null, grow: true };
  const intl2 = util.intl;
  obj6.text = intl2.string(util.t["1W7mCt"]);
  obj6.pillStyle = tmp.templateCTAButton;
  obj6.onPress = function onPress() {
    return importDefault(template, dependencyMap);
  };
  items2[2] = timestampProducer(BaseTextButton.BaseTextButton, obj6);
  obj.children = items2;
  return React5(View, obj);
};
