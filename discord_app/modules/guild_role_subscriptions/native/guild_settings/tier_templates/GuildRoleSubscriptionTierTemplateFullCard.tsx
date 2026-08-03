// === Module 16713: SectionSeparator ===

// Module 16713 (SectionSeparator)
import "noop";
import { View } from "set";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
let closure_6;
const require = arg1;
function SectionSeparator() {
  let obj = { children: null };
  const items = [callback(require(1297) /* Button */.Spacer, { size: 24 }), , ];
  obj = { style: createCacheKey().separator };
  items[1] = callback(View, obj);
  items[2] = callback(require(1297) /* Button */.Spacer, { size: 24 });
  obj[0] = items;
  return callback2(closure_5, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = createCacheKey();
  let obj = { style: tmp.benefitRowContainer, children: null };
  obj = { children: callback(importDefault(15106), {}) };
  const items = [callback(View, obj), ];
  obj = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj1 = { style: null, variant: "text-sm/normal", color: "interactive-text-default", children: null };
    obj1[0] = tmp.benefitDescription;
    obj1[3] = description;
    tmp4Result = callback(require(4251) /* Text */.Text, obj1);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  items[1] = closure_6(View, obj);
  obj[1] = items;
  return closure_6(View, obj);
}
function BenefitSection(arg0) {
  let children;
  let sectionTitle;
  const obj = { children: null };
  ({ sectionTitle, children } = arg0);
  const items = [callback(require(14340) /* SectionTitle */.SectionTitle, { children: sectionTitle }), callback(require(1297) /* Button */.Spacer, { size: 14 }), children];
  obj[0] = items;
  return callback2(closure_5, obj);
}
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, content: null, separator: null, benefitRowContainer: null, benefitTextContainer: null, benefitDescription: null, channelTitle: null, channelIcon: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { color: require("Themes").colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { color: require("Themes").colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createCacheKey[3] = { paddingTop: 24 };
let obj2 = { color: require("Themes").colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createCacheKey[4] = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER };
createCacheKey[5] = { flexDirection: "row", justifyContent: "flex-start" };
createCacheKey[6] = { flex: 1, justifyContent: "center", marginLeft: 16 };
createCacheKey[7] = { marginTop: 2 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center" };
createCacheKey[9] = { marginEnd: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj3 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER };
const result = require("jsxProd").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let handleSelectTemplateInPreview;
  let image;
  let name;
  let role_color;
  template = template.template;
  let _require;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = createCacheKey();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  let items = [callback(_require(16714).GuildRoleSubscriptionTierTemplateBasicInfo, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj3, children: null };
  const obj4 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = _require(1236).intl;
  obj4[3] = intl.string(_require(1236).t.CjC5XZ);
  const items1 = [callback(_require(4251).Text, obj4), callback(_require(1297).Spacer, { size: 4 }), , , , , , , , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = _require(1236).intl;
  obj5[2] = intl2.string(_require(1236).t.bCb3c8);
  items1[2] = callback(_require(4251).Text, obj5);
  items1[3] = callback(_require(1297).Spacer, { size: 24 });
  const obj6 = { variant: "text-xs/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl3 = _require(1236).intl;
  obj6[3] = intl3.string(_require(1236).t.ZKyfEo);
  items1[4] = callback(_require(4251).Text, obj6);
  items1[5] = callback(_require(1297).Spacer, { size: 8 });
  items1[6] = callback(_require(16715).GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = callback(SectionSeparator, {});
  const obj7 = { sectionTitle: null, children: null };
  const intl4 = _require(1236).intl;
  obj7[0] = intl4.string(_require(1236).t.Ofvpfs);
  const obj8 = { gap: 14, children: null };
  obj8[1] = channels.map((children) => {
    let obj = _undefined(outer1_2[16]);
    obj = { style: _undefined.channelTitle, children: null };
    obj = { style: _undefined.channelIcon, size: "xs" };
    const items = [outer1_4(obj.getPrivateChannelIconComponent(children.type), obj), outer1_4(_undefined(outer1_2[7]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
    obj[1] = items;
    return outer1_4(outer1_9, { title: outer1_6(outer1_3, obj), description: children.description }, children.id);
  });
  obj7[1] = callback(_require(9587).GappedList, obj8);
  items1[8] = callback(BenefitSection, obj7);
  items1[9] = callback(SectionSeparator, {});
  const obj9 = { sectionTitle: null, children: null };
  const intl5 = _require(1236).intl;
  obj9[0] = intl5.string(_require(1236).t.w7KA8R);
  const obj10 = { gap: 14, children: null };
  obj10[1] = additional_perks.map((children) => {
    let obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
    obj = { title: callback(_undefined(table[7]).Text, obj) };
    return callback(closure_9, obj, arg1);
  });
  obj9[1] = callback(_require(9587).GappedList, obj10);
  items1[10] = callback(BenefitSection, obj9);
  obj2[3] = items1;
  items[2] = callback2(_require(5311).BottomSheetScrollView, obj2);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(_require(5309).BottomSheet, obj);
};