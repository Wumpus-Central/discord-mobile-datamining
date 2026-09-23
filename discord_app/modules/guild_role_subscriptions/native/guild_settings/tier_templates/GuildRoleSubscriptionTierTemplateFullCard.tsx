// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import native from "../../../../../design/void/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GuildRoleSubscriptionCard from "../../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function SectionSeparator() {
  const obj = { children: null };
  const items = [React4(native.Spacer, { size: 24 }), ,];
  const tmp = closure_7();
  items[1] = React4(View, { style: closure_7().separator });
  items[2] = React4(native.Spacer, { size: 24 });
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = closure_7();
  const obj = { style: tmp.benefitRowContainer, children: null };
  const items = [React4(View, { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) })];
  const obj3 = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title];
  let tmp4Result = null;
  if (null != description) {
    const obj4 = {
      style: tmp.benefitDescription,
      variant: "text-sm/normal",
      color: "interactive-text-default",
      children: description,
    };
    tmp4Result = React4(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  obj3.children = items1;
  items[1] = timestampProducer(View, obj3);
  obj.children = items;
  return timestampProducer(View, obj);
}
function BenefitSection(arg0) {
  const obj = { children: null };
  ({ sectionTitle, children } = arg0);
  const items = [
    React4(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }),
    React4(native.Spacer, { size: 14 }),
    children,
  ];
  obj.children = items;
  return timestampProducer(hasOwnProperty, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, Fragment: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4827);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 },
  subscriptionPlanTextStyle: null,
  descriptionPlanTextStyle: null,
  content: null,
  separator: null,
  benefitRowContainer: null,
  benefitTextContainer: null,
  benefitDescription: null,
  channelTitle: null,
  channelIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1, padding: 16 };
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
let obj4 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.content = { paddingTop: 24 };
let obj5 = { color: nativeDefault.colors.TEXT_DEFAULT, paddingTop: 16, paddingBottom: 24 };
obj2.separator = {
  borderBottomWidth: 1,
  marginLeft: -16,
  marginRight: -16,
  borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
};
obj2.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
obj2.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: 16 };
obj2.benefitDescription = { marginTop: 2 };
obj2.channelTitle = { flexDirection: "row", alignItems: "center" };
obj2.channelIcon = { marginEnd: 8 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx",
);

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_7();
  _require = tmp;
  const typeConsolidationEyebrow = require("useTypeConsolidationTextTransform").useTypeConsolidationEyebrow(
    "TierTemplateFullCard",
    "text-xs/bold",
  );
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj2 = { scrollable: true, startExpanded: true, children: null };
  let obj3 = { style: tmp.container, children: null };
  let items = [
    closure_4(require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo, {
      template,
      handleSelectTemplateInPreview,
      subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
      descriptionTextStyle: tmp.descriptionPlanTextStyle,
      closeActionSheet: true,
    }),
    closure_4(View, { style: tmp.separator }),
  ];
  const obj6 = { scrollsToTop: false, style: tmp.content, contentContainerStyle: null, children: null };
  let obj = require("useTypeConsolidationTextTransform");
  let obj4 = {
    template,
    handleSelectTemplateInPreview,
    subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
    descriptionTextStyle: tmp.descriptionPlanTextStyle,
    closeActionSheet: true,
  };
  const obj5 = { style: tmp.separator };
  obj6.contentContainerStyle = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
  const obj8 = { variant: "text-sm/bold", color: "text-default", style: null, children: null };
  const items1 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  obj8.style = items1;
  const intl = require("util").intl;
  obj8.children = intl.string(require("util").t.CjC5XZ);
  const items2 = [
    closure_4(require("Text/Text").Text, obj8),
    closure_4(require("native").Spacer, { size: 4 }),
    ,
    ,
    ,
    ,
    ,
    ,
    ,
    ,
  ];
  const obj9 = { variant: "text-sm/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj9.children = intl2.string(require("util").t.bCb3c8);
  items2[2] = closure_4(require("Text/Text").Text, obj9);
  items2[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj10 = { variant: typeConsolidationEyebrow.variant, color: "text-default", style: null, children: null };
  const items3 = [{ textTransform: "uppercase" }, typeConsolidationEyebrow.style];
  obj10.style = items3;
  const intl3 = require("util").intl;
  obj10.children = intl3.string(require("util").t.ZKyfEo);
  items2[4] = closure_4(require("Text/Text").Text, obj10);
  items2[5] = closure_4(require("native").Spacer, { size: 8 });
  items2[6] = closure_4(require("GuildRoleSubscriptionTierTemplateRolePreview").GuildRoleSubscriptionRolePreview, {
    roleColor: role_color,
    roleImage: image,
    roleName: name,
    guildId,
  });
  items2[7] = closure_4(SectionSeparator, {});
  const obj11 = { sectionTitle: null, children: null };
  const intl4 = require("util").intl;
  obj11.sectionTitle = intl4.string(require("util").t.Ofvpfs);
  const obj7 = { paddingBottom: 32 + useSafeAreaInsetsDefault().bottom };
  obj11.children = closure_4(require("LayoutUtils").GappedList, {
    gap: 14,
    children: channels.map((children) => {
      const obj2 = { style: closure_0.channelTitle, children: null };
      const items = [
        React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
          style: closure_0.channelIcon,
          size: "xs",
        }),
        React4(Text_Text.Text, {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: children.name,
        }),
      ];
      obj2.children = items;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      return React4(
        BenefitRow,
        { title: timestampProducer(View, obj2), description: children.description },
        children.id,
      );
    }),
  });
  items2[8] = closure_4(BenefitSection, obj11);
  items2[9] = closure_4(SectionSeparator, {});
  const obj13 = { sectionTitle: null, children: null };
  const intl5 = require("util").intl;
  obj13.sectionTitle = intl5.string(require("util").t.w7KA8R);
  const obj12 = {
    gap: 14,
    children: channels.map((children) => {
      const obj2 = { style: closure_0.channelTitle, children: null };
      const items = [
        React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
          style: closure_0.channelIcon,
          size: "xs",
        }),
        React4(Text_Text.Text, {
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: children.name,
        }),
      ];
      obj2.children = items;
      const obj3 = { style: closure_0.channelIcon, size: "xs" };
      const obj4 = { variant: "text-md/medium", color: "mobile-text-heading-primary", children: children.name };
      return React4(
        BenefitRow,
        { title: timestampProducer(View, obj2), description: children.description },
        children.id,
      );
    }),
  };
  obj13.children = closure_4(require("LayoutUtils").GappedList, {
    gap: 14,
    children: additional_perks.map((children, index) =>
      closure_1_4(
        BenefitRow,
        {
          title: closure_1_4(closure_0(dependencyMap[7]).Text, {
            variant: "text-md/medium",
            color: "mobile-text-heading-primary",
            children: children.name,
          }),
        },
        index,
      ),
    ),
  });
  items2[10] = closure_4(BenefitSection, obj13);
  obj6.children = items2;
  items[2] = closure_6(require("BottomSheetModal").BottomSheetScrollView, obj6);
  obj3.children = items;
  obj2.children = closure_6(View, obj3);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj2);
}
