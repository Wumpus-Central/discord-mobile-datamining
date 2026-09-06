// === Module 17783: GuildRoleSubscriptionTierTemplatePreviewCard ===

// Module 17783 (GuildRoleSubscriptionTierTemplatePreviewCard)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import Text_Text from "Text/Text" /* 4556 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import _modDef7158 from "module_7158" /* 7158 */;
import GuildRoleSubscriptionTierTemplateUtils from "GuildRoleSubscriptionTierTemplateUtils" /* 17787 */;
import GuildRoleSubscriptionTierTemplateActionCreators from "GuildRoleSubscriptionTierTemplateActionCreators" /* 17789 */;
import noop from "module_19" /* 19 */;

require = fn;
function ContentHeader(arg0) {
  ({ count, title } = arg0);
  const tmp = closure_11();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader, children: null };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [React7(Text_Text.Text, obj), " ", title];
  obj.children = items;
  return closure_1_10(Text_Text.Text, obj);
}
function Separator() {
  return React7(timestampProducer, { style: closure_11().separator });
}
function BenefitShowCase(children) {
  const title = children.title;
  let tmp3 = title;
  if (typeof title === "string") {
    let obj = { variant: "text-md/semibold", color: "text-default", children: title };
    tmp3 = React7(Text_Text.Text, obj);
  }
  obj = { children: null };
  const items = [tmp3, React7(native.Spacer, { size: 2 }), React7(Text_Text.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: children.description })];
  obj.children = items;
  return closure_1_10(timestampProducer, obj);
}
function ChannelBenefitShowCase(channel) {
  ({ description, type, name } = channel.channel);
  let obj = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const items = [React7(obj.getPrivateChannelIconComponent(type), { size: "xs" }), React7(native.Spacer, { size: 4 }), React7(Text_Text.Text, { variant: "text-md/semibold", color: "text-default", children: name })];
  obj.children = items;
  obj = { title: closure_1_10(timestampProducer, obj), description };
  return React7(BenefitShowCase, obj);
}
function ViewEntireTemplateFooter() {
  const tmp = closure_11();
  let obj = { style: tmp.viewEntireTemplateFooter, children: null };
  obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.kejaOD);
  const items = [React7(Text_Text.Text, obj), React7(native.Spacer, { size: 3 }), React7(timestampProducer, { style: tmp.viewEntireTemplateFooterUnderline })];
  obj.children = items;
  const items1 = [closure_1_10(timestampProducer, obj), ];
  const obj2 = { children: null };
  const obj3 = { size: native.Icon.Sizes.REFRESH_SMALL_16, source: _modDef7158, style: null };
  const obj4 = { transform: null };
  const items2 = [{ rotate: "180deg" }];
  obj4.transform = items2;
  obj3.style = obj4;
  obj2.children = React7(native.Icon, obj3);
  items1[1] = React7(timestampProducer, obj2);
  obj.children = items1;
  return closure_1_10(timestampProducer, obj);
}
get_ActivityIndicator = fn(17);
({ TouchableOpacity: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const Constants = fn(1074);
({ AnalyticEvents: closure_7, GuildSettingsSections: closure_8 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10 } = jsxProd);
fn(4560);
let createStyles = { container: null, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, separator: null, contentContainer: null, contentHeader: null, viewEntireTemplateFooter: null, viewEntireTemplateFooterUnderline: null };
createStyles = { padding: 16, borderRadius: nativeDefault.radii.md, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_NORMAL, width: 319 };
createStyles.container = createStyles;
createStyles.subscriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_SUBTLE };
let obj1 = { color: nativeDefault.colors.TEXT_SUBTLE };
createStyles.descriptionPlanTextStyle = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
let size = { width: "100%", height: 1, backgroundColor: nativeDefault.colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
createStyles.separator = size;
let obj2 = { color: nativeDefault.colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
createStyles.contentContainer = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16, paddingBottom: 0 };
createStyles.contentHeader = { textTransform: "uppercase" };
let obj3 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: nativeDefault.radii.sm, borderTopLeftRadius: nativeDefault.radii.sm, padding: 16, paddingBottom: 0 };
createStyles.viewEntireTemplateFooter = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: nativeDefault.radii.sm, borderBottomRightRadius: nativeDefault.radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
const rect = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED };
createStyles.viewEntireTemplateFooterUnderline = rect;
let closure_11 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  let navigation;
  closure_7 = undefined;
  let callback1;
  const tmp = closure_11();
  let obj = template(navigation[15]);
  navigation = obj.useNavigation();
  let obj1 = groupListingId(navigation[16]);
  const addNewEditStateFromTemplate = obj1.useEditStateIds(groupListingId, template.editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  let obj2 = addNewEditStateFromTemplate;
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  const handleCreateFromTemplate = addNewEditStateFromTemplate.useCallback((selectedTemplate, arg1) => {
    let obj = GuildRoleSubscriptionTierTemplateActionCreators;
    const result = obj.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      ActionSheetActionCreatorsDefault.hideActionSheet();
    }
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    obj = { exit_reason: "template_selected" };
    const obj3 = AnalyticsUtilsDefault;
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj3.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    obj = { groupListingId, initialEditStateId: tmp5 };
    const replaced = navigation.replace(constants2.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj);
    const tmpResult = AppAnalyticsUtils;
  }, items);
  let obj3 = template(navigation[20]);
  const suggestedUnusedPrices = obj3.useSuggestedUnusedPrices(guildId, priceTiers, first.price_tier);
  let tmp8 = null != suggestedUnusedPrices;
  if (tmp8) {
    tmp8 = suggestedUnusedPrices.length > 0;
  }
  closure_7 = tmp8;
  const items1 = [handleCreateFromTemplate, suggestedUnusedPrices, tmp8];
  callback1 = obj2.useCallback((selectedTemplate, arg1) => {
    if (closure_7) {
      const obj = { selectedTemplate, handleCreateFromTemplate, newPricesToPick: suggestedUnusedPrices };
      obj.openLazy(asyncRequireImpl(17788, dependencyMap.paths), "TierTemplatePriceReselectionCard", obj);
    } else {
      handleCreateFromTemplate(selectedTemplate, arg1);
    }
  }, items1);
  obj = { style: tmp.container, children: null };
  obj = { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" } };
  const items2 = [closure_9(template(navigation[21]).GuildRoleSubscriptionTierTemplateBasicInfo, obj), ];
  obj1 = {
    style: tmp.contentContainer,
    onPress() {
      const obj = { template, guildId, handleSelectTemplateInPreview: callback1 };
      obj.openLazy(asyncRequireImpl(17784, dependencyMap.paths), "TierTemplateCard", obj);
    },
    children: null
  };
  obj2 = {
    renderGap() {
      return closure_1_9(Separator, {});
    },
    children: null
  };
  obj3 = { children: null };
  const obj4 = { title: null, count: null };
  const intl = tmp2(tmp3[13]).intl;
  obj4.title = intl.formatToPlainString(template(navigation[13]).t.y7dUrm, { numChannels: channels.length });
  obj4.count = channels.length;
  const items3 = [closure_9(ContentHeader, obj4), closure_9(template(navigation[11]).Spacer, { size: 12 }), closure_9(ChannelBenefitShowCase, { channel: channels[0] }), closure_9(template(navigation[11]).Spacer, { size: 6 })];
  obj3.children = items3;
  const items4 = [closure_10(suggestedUnusedPrices, obj3), ];
  const obj5 = { children: null };
  const obj6 = { title: null, count: null };
  const intl2 = tmp2(tmp3[13]).intl;
  obj6.title = intl2.formatToPlainString(template(navigation[13]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj6.count = additional_perks.length;
  const items5 = [closure_9(ContentHeader, obj6), closure_9(template(navigation[11]).Spacer, { size: 12 }), closure_9(BenefitShowCase, { title: first1.name, description: first1.description }), closure_9(template(navigation[11]).Spacer, { size: 6 })];
  obj5.children = items5;
  items4[1] = closure_10(suggestedUnusedPrices, obj5);
  obj2.children = items4;
  const items6 = [closure_10(template(navigation[22]).GappedList, obj2), closure_9(ViewEntireTemplateFooter, {})];
  obj1.children = items6;
  items2[1] = closure_10(handleCreateFromTemplate, obj1);
  obj.children = items2;
  return closure_10(suggestedUnusedPrices, obj);
};
export const CARD_WIDTH = 319;