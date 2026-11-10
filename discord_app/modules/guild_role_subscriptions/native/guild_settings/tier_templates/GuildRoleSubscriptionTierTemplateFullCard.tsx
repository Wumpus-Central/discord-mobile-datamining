// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import GuildRoleSubscriptionCard from "../../components/listing_elements/GuildRoleSubscriptionCard.tsx";
import GuildRoleSubscriptionGatedChannelIconDefault from "../../premium_channel/GuildRoleSubscriptionGatedChannelIcon.tsx";
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function SectionSeparator() {
  const obj = { style: null };
  items = [,];
  ({ separator: arr[0], sectionSeparator: arr[1] } = closure_6());
  obj.style = items;
  return React4(View, obj);
}
function BenefitRow(description) {
  description = description.description;
  const tmp = closure_6();
  const obj = { style: tmp.benefitRowContainer, children: null };
  items = [React4(View, { children: React4(GuildRoleSubscriptionGatedChannelIconDefault, {}) })];
  const obj3 = { style: tmp.benefitTextContainer, children: null };
  const items1 = [description.title];
  let tmp4Result = null;
  if (null != description) {
    const obj4 = {
      style: tmp.benefitDescription,
      variant: "body-sm/normal",
      color: "interactive-text-default",
      children: description,
    };
    tmp4Result = React4(Text_Text.Text, obj4);
  }
  items1[1] = tmp4Result;
  obj3.children = items1;
  items[1] = hasOwnProperty(View, obj3);
  obj.children = items;
  return hasOwnProperty(View, obj);
}
function BenefitSection(arg0) {
  ({ sectionTitle, children } = arg0);
  const obj = { style: closure_6().benefitSection, children: null };
  items = [React4(GuildRoleSubscriptionCard.SectionTitle, { children: sectionTitle }), children];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(5142);
let obj2 = {
  container: { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 },
  header: null,
  subscriptionPlanTextStyle: null,
  descriptionPlanTextStyle: null,
  content: null,
  separator: null,
  sectionSeparator: null,
  benefitSection: null,
  benefitRowContainer: null,
  benefitTextContainer: null,
  benefitDescription: null,
  channelTitle: null,
  channelIcon: null,
};
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, flex: 1 };
obj2.header = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
let obj4 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16 };
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
const obj5 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.descriptionPlanTextStyle = {
  color: nativeDefault.colors.TEXT_DEFAULT,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
};
let obj6 = {
  color: nativeDefault.colors.TEXT_DEFAULT,
  paddingTop: nativeDefault.space.PX_16,
  paddingBottom: nativeDefault.space.PX_24,
};
obj2.content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
const obj7 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_24 };
obj2.separator = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
let obj8 = { borderBottomWidth: 1, borderColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER };
obj2.sectionSeparator = { marginVertical: nativeDefault.space.PX_24 };
obj2.benefitSection = { gap: 14 };
obj2.benefitRowContainer = { flexDirection: "row", justifyContent: "flex-start" };
let obj9 = { marginVertical: nativeDefault.space.PX_24 };
obj2.benefitTextContainer = { flex: 1, justifyContent: "center", marginLeft: nativeDefault.space.PX_16 };
obj2.benefitDescription = { marginTop: 2 };
obj2.channelTitle = { flexDirection: "row", alignItems: "center" };
let obj10 = { flex: 1, justifyContent: "center", marginLeft: nativeDefault.space.PX_16 };
obj2.channelIcon = { marginEnd: nativeDefault.space.PX_8 };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplateFullCard.tsx",
);

export default function GuildRoleSubscriptionTierTemplateFullCard(template) {
  template = template.template;
  ({ guildId, handleSelectTemplateInPreview } = template);
  const tmp = closure_6();
  _require = tmp;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  ({ image, name, role_color } = first);
  let obj = { scrollable: true, startExpanded: true, children: null };
  let obj2 = { style: tmp.container, children: null };
  let obj3 = {
    style: tmp.header,
    children: closure_4(
      require("GuildRoleSubscriptionTierTemplateBasicInfo").GuildRoleSubscriptionTierTemplateBasicInfo,
      {
        template,
        handleSelectTemplateInPreview,
        subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
        descriptionTextStyle: tmp.descriptionPlanTextStyle,
        closeActionSheet: true,
      },
    ),
  };
  items = [closure_4(View, obj3), closure_4(View, { style: tmp.separator })];
  const obj6 = { scrollsToTop: false, contentContainerStyle: null, children: null };
  const items1 = [
    tmp.content,
    { paddingBottom: nativeDefault.space.PX_32 + nativeDefault.space.PX_16 + useSafeAreaInsetsDefault().bottom },
  ];
  obj6.contentContainerStyle = items1;
  const obj8 = { variant: "body-sm/semibold", color: "text-default", children: null };
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
  const obj9 = { variant: "body-sm/normal", color: "text-muted", children: null };
  const intl2 = require("util").intl;
  obj9.children = intl2.string(require("util").t.bCb3c8);
  items2[2] = closure_4(require("Text/Text").Text, obj9);
  items2[3] = closure_4(require("native").Spacer, { size: 24 });
  const obj10 = { variant: "body-sm/medium", color: "text-default", children: null };
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
  obj11.children = channels.map((children) => {
    const obj2 = { style: closure_0.channelTitle, children: null };
    items = [
      React4(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(children.type), {
        style: closure_0.channelIcon,
        size: "xs",
      }),
      React4(Text_Text.Text, {
        variant: "body-md/medium",
        color: "mobile-text-heading-primary",
        children: children.name,
      }),
    ];
    obj2.children = items;
    const obj3 = { style: closure_0.channelIcon, size: "xs" };
    const obj4 = { variant: "body-md/medium", color: "mobile-text-heading-primary", children: children.name };
    return React4(BenefitRow, { title: hasOwnProperty(View, obj2), description: children.description }, children.id);
  });
  items2[8] = closure_4(BenefitSection, obj11);
  items2[9] = closure_4(SectionSeparator, {});
  const obj12 = { sectionTitle: null, children: null };
  const intl5 = require("util").intl;
  obj12.sectionTitle = intl5.string(require("util").t.w7KA8R);
  obj12.children = additional_perks.map((children, index) =>
    closure_1_4(
      BenefitRow,
      {
        title: closure_1_4(closure_0(dependencyMap[6]).Text, {
          variant: "body-md/medium",
          color: "mobile-text-heading-primary",
          children: children.name,
        }),
      },
      index,
    ),
  );
  items2[10] = closure_4(BenefitSection, obj12);
  obj6.children = items2;
  items[2] = closure_5(require("BottomSheetModal").BottomSheetScrollView, obj6);
  obj2.children = items;
  obj.children = closure_5(View, obj2);
  return closure_4(require("Sheet/BottomSheet").BottomSheet, obj);
}
