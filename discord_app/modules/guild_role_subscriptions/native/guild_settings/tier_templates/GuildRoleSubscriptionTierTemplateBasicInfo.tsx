// === Module 19936: GuildRoleSubscriptionTierTemplateBasicInfo ===

// Module 19936 (GuildRoleSubscriptionTierTemplateBasicInfo)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1114 */;
import native from "native" /* 1188 */;
import Text_Text from "Text/Text" /* 5619 */;
import components_Button_Button from "components/Button/Button" /* 5629 */;
import FastImageDefault from "FastImage" /* 5712 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 17151 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5009);
let obj2 = { container: { paddingBottom: 24 }, header: { flexDirection: "row" }, image: null };
let size = { width: 48, height: 48, borderRadius: nativeDefault.radii.sm };
obj2.image = size;
let closure_6 = createStyles.createStyles(obj2);
size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateBasicInfo.tsx");

export function GuildRoleSubscriptionTierTemplateBasicInfo(template) {
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
}