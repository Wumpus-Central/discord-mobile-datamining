// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import AnalyticsUtilsDefault from "../../../../../utils/AnalyticsUtils.tsx";
import asyncRequireImpl from "../../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import AppAnalyticsUtils from "../../../../app_analytics/AppAnalyticsUtils.tsx";
import useTypeConsolidationTextTransform from "../../../../design/useTypeConsolidationTextTransform.tsx";
import _modDef7354 from "../../../../../../_runtime/metro/07354__.js";
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils.tsx";
import GuildRoleSubscriptionTierTemplateActionCreators from "../../../tier_templates/GuildRoleSubscriptionTierTemplateActionCreators.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = closure_11();
  const typeConsolidationEyebrow = useTypeConsolidationTextTransform.useTypeConsolidationEyebrow(
    "TierTemplatePreviewCard",
    "text-xs/bold",
  );
  const obj2 = { variant: typeConsolidationEyebrow.variant, color: "text-muted", style: null, children: null };
  const items = [tmp.contentHeader, typeConsolidationEyebrow.style];
  obj2.style = items;
  const items1 = [
    React7(Text_Text.Text, {
      variant: typeConsolidationEyebrow.variant,
      color: "text-default",
      style: tmp.contentHeader,
      children: count,
    }),
    " ",
    title,
  ];
  obj2.children = items1;
  return closure_1_10(Text_Text.Text, obj2);
}
function Separator() {
  return React7(timestampProducer, { style: closure_11().separator });
}
function BenefitShowCase(children) {
  const title = children.title;
  let tmp3 = title;
  if (typeof title === "string") {
    const obj2 = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = React7(Text_Text.Text, obj2);
  }
  const obj = { children: null };
  const items = [
    tmp3,
    React7(native.Spacer, { size: 2 }),
    React7(Text_Text.Text, {
      variant: "text-sm/medium",
      color: "interactive-text-default",
      children: children.description,
    }),
  ];
  obj.children = items;
  return closure_1_10(timestampProducer, obj);
}
function ChannelBenefitShowCase(channel) {
  ({ description, type, name } = channel.channel);
  const obj2 = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const items = [
    React7(GuildRoleSubscriptionTierTemplateUtils.getPrivateChannelIconComponent(type), { size: "xs" }),
    React7(native.Spacer, { size: 4 }),
    React7(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: name }),
  ];
  obj2.children = items;
  return React7(BenefitShowCase, { title: closure_1_10(timestampProducer, obj2), description });
}
function ViewEntireTemplateFooter() {
  const tmp = closure_11();
  const obj = { style: tmp.viewEntireTemplateFooter, children: null };
  const obj2 = { children: null };
  const obj3 = {
    variant: "text-sm/semibold",
    color: "interactive-text-hover",
    style: { marginTop: -1 },
    children: null,
  };
  const intl = util.intl;
  obj3.children = intl.string(util.t.kejaOD);
  const items = [
    React7(Text_Text.Text, obj3),
    React7(native.Spacer, { size: 3 }),
    React7(timestampProducer, { style: tmp.viewEntireTemplateFooterUnderline }),
  ];
  obj2.children = items;
  const items1 = [closure_1_10(timestampProducer, obj2)];
  const obj5 = { children: null };
  const obj6 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef7354, style: null };
  const obj7 = { transform: null };
  const items2 = [{ rotate: "180deg" }];
  obj7.transform = items2;
  obj6.style = obj7;
  obj5.children = React7(native.Icon, obj6);
  items1[1] = React7(timestampProducer, obj5);
  obj.children = items1;
  return closure_1_10(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, GuildSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
const createStyles = fn(4722);
let obj2 = {
  container: {
    padding: 16,
    borderRadius: nativeDefault.radii.md,
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
    width: 319,
  },
  subscriptionPlanTextStyle: null,
  descriptionPlanTextStyle: null,
  separator: null,
  contentContainer: null,
  contentHeader: null,
  viewEntireTemplateFooter: null,
  viewEntireTemplateFooterUnderline: null,
};
let obj3 = {
  padding: 16,
  borderRadius: nativeDefault.radii.md,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL,
  width: 319,
};
obj2.subscriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj4 = { color: nativeDefault.colors.TEXT_SUBTLE };
obj2.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
let size = {
  width: "100%",
  height: 1,
  backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER,
  marginVertical: 16,
};
obj2.separator = size;
let obj5 = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
obj2.contentContainer = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
  paddingBottom: 0,
};
obj2.contentHeader = { textTransform: "uppercase" };
let obj6 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderTopRightRadius: nativeDefault.radii.sm,
  borderTopLeftRadius: nativeDefault.radii.sm,
  padding: 16,
  paddingBottom: 0,
};
obj2.viewEntireTemplateFooter = {
  paddingVertical: 16,
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
  borderBottomLeftRadius: nativeDefault.radii.sm,
  borderBottomRightRadius: nativeDefault.radii.sm,
  marginLeft: -16,
  marginRight: -16,
  marginTop: 16,
};
const rect = {
  position: "absolute",
  left: 0,
  right: 0,
  height: 1,
  bottom: 0,
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
};
obj2.viewEntireTemplateFooterUnderline = rect;
let closure_11 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx",
);

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  let navigation;
  closure_7 = undefined;
  let callback1;
  const tmp = closure_11();
  navigation = template(navigation[16]).useNavigation();
  let obj = template(navigation[16]);
  const addNewEditStateFromTemplate = groupListingId(navigation[17]).useEditStateIds(
    groupListingId,
    template.editGroupId,
    { includeSoftDeleted: true },
  ).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const handleCreateFromTemplate = addNewEditStateFromTemplate.useCallback((selectedTemplate, arg1) => {
    const result = GuildRoleSubscriptionTierTemplateActionCreators.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    const obj3 = AnalyticsUtilsDefault;
    const obj4 = { exit_reason: "template_selected" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj3.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj4);
    const replaced = navigation.replace(constants2.ROLE_SUBSCRIPTIONS_TIER_EDIT, {
      groupListingId,
      initialEditStateId: tmp5,
    });
    const obj5 = { groupListingId, initialEditStateId: tmp5 };
    const tmpResult = AppAnalyticsUtils;
  }, items);
  let obj2 = groupListingId(navigation[17]);
  let obj3 = addNewEditStateFromTemplate;
  const suggestedUnusedPrices = template(navigation[21]).useSuggestedUnusedPrices(
    guildId,
    priceTiers,
    first.price_tier,
  );
  let tmp8 = null != suggestedUnusedPrices;
  if (tmp8) {
    tmp8 = suggestedUnusedPrices.length > 0;
  }
  closure_7 = tmp8;
  const items1 = [handleCreateFromTemplate, suggestedUnusedPrices, tmp8];
  callback1 = obj3.useCallback((selectedTemplate, arg1) => {
    if (closure_7) {
      const obj2 = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
      ActionSheetActionCreatorsDefault.openLazy(
        asyncRequireImpl(18157, dependencyMap.paths),
        "TierTemplatePriceReselectionCard",
        obj2,
      );
    } else {
      handleCreateFromTemplate(selectedTemplate, arg1);
    }
  }, items1);
  let obj5 = { style: tmp.container, children: null };
  const items2 = [
    closure_9(template(navigation[22]).GuildRoleSubscriptionTierTemplateBasicInfo, {
      template,
      handleSelectTemplateInPreview: callback1,
      subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle,
      descriptionTextStyle: tmp.descriptionPlanTextStyle,
      closeActionSheet: false,
      descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" },
    }),
  ];
  const obj7 = {
    style: tmp.contentContainer,
    onPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(18153, dependencyMap.paths), "TierTemplateCard", {
        template,
        guildId,
        handleSelectTemplateInPreview: callback1,
      });
    },
    children: null,
  };
  const obj8 = {
    renderGap() {
      return closure_1_9(Separator, {});
    },
    children: null,
  };
  const obj9 = { children: null };
  const obj10 = { title: null, count: null };
  const intl = tmp2(tmp3[14]).intl;
  obj10.title = intl.formatToPlainString(template(navigation[14]).t.y7dUrm, { numChannels: channels.length });
  obj10.count = channels.length;
  const items3 = [
    closure_9(ContentHeader, obj10),
    closure_9(template(navigation[12]).Spacer, { size: 12 }),
    closure_9(ChannelBenefitShowCase, { channel: channels[0] }),
    closure_9(template(navigation[12]).Spacer, { size: 6 }),
  ];
  obj9.children = items3;
  const items4 = [closure_10(suggestedUnusedPrices, obj9)];
  const obj11 = { children: null };
  const obj12 = { title: null, count: null };
  const intl2 = tmp2(tmp3[14]).intl;
  obj12.title = intl2.formatToPlainString(template(navigation[14]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj12.count = additional_perks.length;
  const items5 = [
    closure_9(ContentHeader, obj12),
    closure_9(template(navigation[12]).Spacer, { size: 12 }),
    closure_9(BenefitShowCase, { title: first1.name, description: first1.description }),
    closure_9(template(navigation[12]).Spacer, { size: 6 }),
  ];
  obj11.children = items5;
  items4[1] = closure_10(suggestedUnusedPrices, obj11);
  obj8.children = items4;
  const items6 = [closure_10(template(navigation[23]).GappedList, obj8), closure_9(ViewEntireTemplateFooter, {})];
  obj7.children = items6;
  items2[1] = closure_10(handleCreateFromTemplate, obj7);
  obj5.children = items2;
  return closure_10(suggestedUnusedPrices, obj5);
}
export const CARD_WIDTH = 319;
