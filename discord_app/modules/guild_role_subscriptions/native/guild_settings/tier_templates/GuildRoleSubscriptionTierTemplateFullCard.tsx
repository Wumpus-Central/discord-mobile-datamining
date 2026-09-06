// === Module 17784: GuildRoleSubscriptionTierTemplateFullCard ===

// Module 17784 (GuildRoleSubscriptionTierTemplateFullCard)
import nativeDefault from "native" /* 576 */;
import native from "native" /* 1178 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1611 */;
import Text_Text from "Text/Text" /* 4556 */;
import GuildRoleSubscriptionCard from "GuildRoleSubscriptionCard" /* 15237 */;
import GuildRoleSubscriptionGatedChannelIconDefault from "GuildRoleSubscriptionGatedChannelIcon" /* 16118 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 17787 */;
import noop from "module_19" /* 19 */;

require = fn;
function SectionSeparator() {
  let obj = { children: null };
  const items = [React4(native.Spacer, { size: 24 }), , ];
  obj = { style: closure_7().separator };
  items[1] = React4(View, obj);
  items[2] = React4(native.Spacer, { size: 24 });
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = closure_7();
  let obj = { style: tmp.benefitRowContainer, children: null };
  obj = { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) };
  const items = [React4(View, obj), ];
  obj = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title, ];
  let tmp4Result = null;
  if (null != description) {
    const obj1 = { style: tmp.benefitDescription, variant: "text-sm/normal", color: "interactive-text-default", children: description };
    tmp4Result = React4(Text_Text.Text, obj1);
  }
  items1[1] = tmp4Result;
  obj.children = items1;
  items[1] = timestampProducer(View, obj);
  obj.children = items;
  return timestampProducer(View, obj);
}
function BenefitSection(arg0) {
  const obj = { children: null };
  ({ sectionTitle, children } = arg0);
  const items = [React4(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), React4(native.Spacer, { size: 14 }), children];
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
fn(4560);
let createStyles = { container: null, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, content: null, separator: null, benefitRowContainer: null, benefitTextContainer: null, benefitDescription: null, channelTitle: null, channelIcon: null };
createStyles = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
createStyles.container = createStyles;
createStyles.subscriptionPlanTextStyle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj1 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createStyles.content = { paddingTop: 24 };
let obj2 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
createStyles.separator = { borderBottomWidth: 1, marginLeft: -16, marginRight: -16, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
createStyles.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
createStyles.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: 16 };
createStyles.benefitDescription = { marginTop: 2 };
createStyles.channelTitle = { flexDirection: "row", alignItems: "center" };
createStyles.channelIcon = { marginEnd: 8 };
let closure_7 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx");

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_7();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: null };
  obj = { style: tmp.container, children: null };
  obj = { template, handleSelectTemplateInPreview, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: true };
  let items = [closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, obj), closure_4(View, { style: tmp.separator }), ];
  const obj2 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom }, children: null };
  const obj4 = { variant: "text-sm/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl = require("util").intl;
  obj4.children = intl.string(require("util").t.CjC5XZ);
  const items1 = [closure_4(require("Text/Text").Text, obj4), closure_4(require("native").Spacer, { size: 4 }), , , , , , , , , ];
  const obj5 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj5.children = intl2.string(require("util").t.bCb3c8);
  items1[2] = closure_4(require("Text/Text").Text, obj5);
  items1[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj6 = { variant: "text-xs/bold", color: "text-default", style: { textTransform: "uppercase" }, children: null };
  const intl3 = require("util").intl;
  obj6.children = intl3.string(require("util").t.ZKyfEo);
  items1[4] = closure_4(require("Text/Text").Text, obj6);
  items1[5] = closure_4(require("native").Spacer, { size: 8 });
  items1[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, { roleColor: role_color, roleImage: image, roleName: name, guildId });
  items1[7] = closure_4(SectionSeparator, {});
  const obj7 = { sectionTitle: null, children: null };
  const intl4 = require("util").intl;
  obj7.sectionTitle = intl4.string(require("util").t.Ofvpfs);
  const obj1 = { style: tmp.separator };
  const obj3 = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
  obj7.children = closure_4(require("LayoutUtils").GappedList, {
    gap: 14,
    children: channels.map((children) => {
      let obj = { style: closure_0.channelTitle, children: null };
      obj = { style: closure_0.channelIcon, size: "xs" };
      const items = [React4(obj.getPrivateChannelIconComponent(children.type), obj), React4(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj.children = items;
      return React4(BenefitRow, { title: timestampProducer(View, obj), description: children.description }, children.id);
    })
  });
  items1[8] = closure_4(BenefitSection, obj7);
  items1[9] = closure_4(SectionSeparator, {});
  const obj9 = { sectionTitle: null, children: null };
  const intl5 = require("util").intl;
  obj9.sectionTitle = intl5.string(require("util").t.w7KA8R);
  const obj8 = {
    gap: 14,
    children: channels.map((children) => {
      let obj = { style: closure_0.channelTitle, children: null };
      obj = { style: closure_0.channelIcon, size: "xs" };
      const items = [React4(obj.getPrivateChannelIconComponent(children.type), obj), React4(Text_Text.Text, { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name })];
      obj.children = items;
      return React4(BenefitRow, { title: timestampProducer(View, obj), description: children.description }, children.id);
    })
  };
  obj9.children = closure_4(require("LayoutUtils").GappedList, {
    gap: 14,
    children: additional_perks.map((children, index) => {
      let obj = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      obj = { title: closure_1_4(closure_0(dependencyMap[7]).Text, obj) };
      return closure_1_4(BenefitRow, obj, index);
    })
  });
  items1[10] = closure_4(BenefitSection, obj9);
  obj2.children = items1;
  items[2] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj2);
  obj.children = items;
  obj.children = closure_6(View, obj);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
};