// === Module 17604: SectionSeparator ===

// Module 17604 (SectionSeparator)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 709 */;
import Button from "Button" /* 1296 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1627 */;
import Text from "Text" /* 4474 */;
import SectionTitle from "SectionTitle" /* 15062 */;
import SubscriptionGatedChannelIconDefault from "SubscriptionGatedChannelIcon" /* 15938 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function SectionSeparator() {
  let obj = { children: null };
  const items = [callback(Button.Spacer, { size: 24 }), , ];
  obj = { style: callback3().separator };
  items[1] = callback(View, obj);
  items[2] = callback(Button.Spacer, { size: 24 });
  obj[0] = items;
  return callback2(closure_5, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = callback3();
  let obj = { style: tmp.benefitRowContainer, children: null };
  obj = { children: callback(SubscriptionGatedChannelIconDefault, {}) };
  const items = [callback(View, obj), ];
  obj = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title, ];
  let tmp4Result = null;
  if (null != description) {
    obj1 = { style: null, variant: "text-sm/normal", color: "interactive-text-default", children: null };
    obj1[0] = tmp.benefitDescription;
    obj1[3] = description;
    tmp4Result = callback(Text.Text, obj1);
  }
  items1[1] = tmp4Result;
  obj[1] = items1;
  items[1] = closure_6(View, obj);
  obj[1] = items;
  return closure_6(View, obj);
}
function BenefitSection(arg0) {
  const obj = { children: null };
  ({ sectionTitle, children } = arg0);
  const items = [callback(SectionTitle.SectionTitle, { children: sectionTitle }), callback(Button.Spacer, { size: 14 }), children];
  obj[0] = items;
  return callback2(closure_5, obj);
}
noopAll;
({ jsx: c4, Fragment: c5, jsxs: closure_6 } = jsxProd);
createCacheKey = { container: null, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, content: null, separator: null, benefitRowContainer: null, benefitTextContainer: null, benefitDescription: null, channelTitle: null, channelIcon: null };
createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[2] = { color: ThemesDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createCacheKey[3] = { paddingTop: 24 };
let obj2 = { color: ThemesDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createCacheKey[4] = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createCacheKey[5] = { flexDirection: "row", justifyContent: "flex-start" };
createCacheKey[6] = { flex: 1, justifyContent: "center", marginLeft: 16 };
createCacheKey[7] = { marginTop: 2 };
createCacheKey[8] = { flexDirection: "row", alignItems: "center" };
createCacheKey[9] = { marginEnd: 8 };
let closure_7 = createCacheKey.createStyles(createCacheKey);
let obj3 = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: ThemesDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  template = template.template;
  let _require;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = callback3();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  let items = [callback(_require(17605).GuildRoleSubscriptionTierTemplateBasicInfo, obj), callback(View, { style: tmp.separator }), ];
  const obj2 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: obj3, children: null };
  const obj4 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = _require(1233).intl;
  obj4[3] = intl.string(_require(1233).t.CjC5XZ);
  const items1 = [callback(_require(4474).Text, obj4), callback(_require(1296).Spacer, { size: 4 }), , , , , , , , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = _require(1233).intl;
  obj5[2] = intl2.string(_require(1233).t.bCb3c8);
  items1[2] = callback(_require(4474).Text, obj5);
  items1[3] = callback(_require(1296).Spacer, { size: 24 });
  const obj6 = { variant: "text-xs/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl3 = _require(1233).intl;
  obj6[3] = intl3.string(_require(1233).t.ZKyfEo);
  items1[4] = callback(_require(4474).Text, obj6);
  items1[5] = callback(_require(1296).Spacer, { size: 8 });
  items1[6] = callback(_require(17606).GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = callback(SectionSeparator, {});
  const obj7 = { sectionTitle: null, children: null };
  const intl4 = _require(1233).intl;
  obj7[0] = intl4.string(_require(1233).t.Ofvpfs);
  obj1 = { style: tmp.separator };
  obj3 = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
  obj7[1] = callback(_require(9205).GappedList, {
    gap: 14,
    children: channels.map((children) => {
      let obj = lib(closure_1_2[16]);
      obj = { style: lib.channelTitle, children: null };
      obj = { style: lib.channelIcon, size: "xs" };
      const items = [closure_1_4(obj.getPrivateChannelIconComponent(children.type), obj), closure_1_4(lib(closure_1_2[7]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj[1] = items;
      return closure_1_4(closure_1_9, { title: closure_1_6(closure_1_3, obj), description: children.description }, children.id);
    })
  });
  items1[8] = callback(BenefitSection, obj7);
  items1[9] = callback(SectionSeparator, {});
  const obj9 = { sectionTitle: null, children: null };
  const intl5 = _require(1233).intl;
  obj9[0] = intl5.string(_require(1233).t.w7KA8R);
  const obj8 = {
    gap: 14,
    children: channels.map((children) => {
      let obj = lib(closure_1_2[16]);
      obj = { style: lib.channelTitle, children: null };
      obj = { style: lib.channelIcon, size: "xs" };
      const items = [closure_1_4(obj.getPrivateChannelIconComponent(children.type), obj), closure_1_4(lib(closure_1_2[7]).Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj[1] = items;
      return closure_1_4(closure_1_9, { title: closure_1_6(closure_1_3, obj), description: children.description }, children.id);
    })
  };
  obj9[1] = callback(_require(9205).GappedList, {
    gap: 14,
    children: additional_perks.map((children) => {
      let obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      obj = { title: callback(lib(table[7]).Text, obj) };
      return callback(closure_9, obj, arg1);
    })
  });
  items1[10] = callback(BenefitSection, obj9);
  obj2[3] = items1;
  items[2] = callback2(_require(5632).BottomSheetScrollView, obj2);
  obj[1] = items;
  obj[2] = callback2(View, obj);
  return callback(_require(5630).BottomSheet, obj);
};