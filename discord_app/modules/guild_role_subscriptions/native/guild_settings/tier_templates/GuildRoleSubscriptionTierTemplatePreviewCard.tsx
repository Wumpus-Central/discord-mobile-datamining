// discord_app/modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx
import collectGuildAnalyticsMetadata from "collectGuildAnalyticsMetadata";
import get_ActivityIndicator from "_getTemplates";
import ME from "ME";
import jsxProd from "GuildRoleSubscriptionTierTemplateBasicInfo";
import createCacheKey from "createCacheKey";

let c10;
let c5;
let c9;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
function ContentHeader(arg0) {
  let count;
  let title;
  ({ count, title } = arg0);
  const tmp = createCacheKey();
  let obj = { variant: "text-xs/bold", color: "text-muted", style: tmp.contentHeader, children: null };
  obj = { variant: "text-xs/bold", color: "text-default", style: tmp.contentHeader, children: count };
  const items = [callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), " ", title];
  obj[3] = items;
  return callback2(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
}
function Separator() {
  return callback(closure_6, { style: createCacheKey().separator });
}
function BenefitShowCase(children) {
  const title = children.title;
  let tmp3 = title;
  if (typeof title === "string") {
    let obj = { variant: "text-md/semibold", color: "text-default", children: null };
    obj[2] = title;
    tmp3 = callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj);
  }
  obj = { children: null };
  const items = [tmp3, callback(require("../../../../../design/void/native.tsx") /* Button */.Spacer, { size: 2 }), callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-sm/medium", color: "interactive-text-default", children: children.description })];
  obj[0] = items;
  return closure_10(closure_6, obj);
}
function ChannelBenefitShowCase(channel) {
  let description;
  let name;
  let type;
  ({ description, type, name } = channel.channel);
  let obj = require("GuildRoleSubscriptionTierTemplateUtils.tsx") /* getPrivateChannelIconComponent */;
  obj = { style: { flexDirection: "row", alignItems: "center" }, children: null };
  const items = [callback(obj.getPrivateChannelIconComponent(type), { size: "xs" }), callback(require("../../../../../design/void/native.tsx") /* Button */.Spacer, { size: 4 }), callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, { variant: "text-md/semibold", color: "text-default", children: name })];
  obj[1] = items;
  obj = { title: callback2(closure_6, obj), description };
  return callback(BenefitShowCase, obj);
}
function ViewEntireTemplateFooter() {
  const tmp = createCacheKey();
  let obj = { style: tmp.viewEntireTemplateFooter, children: null };
  obj = { children: null };
  obj = { variant: "text-sm/semibold", color: "interactive-text-hover", style: { marginTop: -1 }, children: null };
  const intl = require("../../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[3] = intl.string(require("../../../../../intl/index.native.tsx") /* getSystemLocale */.t.kejaOD);
  const items = [callback(require("../../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), callback(require("../../../../../design/void/native.tsx") /* Button */.Spacer, { size: 3 }), callback(closure_6, { style: tmp.viewEntireTemplateFooterUnderline })];
  obj[0] = items;
  const items1 = [callback2(closure_6, obj), ];
  const obj2 = { children: null };
  const obj3 = { size: null, source: null, style: null };
  obj3[0] = require("../../../../../design/void/native.tsx") /* Button */.Icon.Sizes.REFRESH_SMALL_16;
  obj3[1] = require("../../../../../../_runtime/05600_registerAsset.js");
  const items2 = [{ rotate: "180deg" }];
  obj3[2] = { transform: items2 };
  obj2[0] = callback(require("../../../../../design/void/native.tsx") /* Button */.Icon, obj3);
  items1[1] = callback(closure_6, obj2);
  obj[1] = items1;
  return callback2(closure_6, obj);
}
({ TouchableOpacity: c5, View: closure_6 } = get_ActivityIndicator);
({ AnalyticEvents: error, GuildSettingsSections: metroImportAll } = ME);
({ jsx: c9, jsxs: c10 } = jsxProd);
createCacheKey = { container: null, subscriptionPlanTextStyle: null, descriptionPlanTextStyle: null, separator: null, contentContainer: null, contentHeader: null, viewEntireTemplateFooter: null, viewEntireTemplateFooterUnderline: null };
createCacheKey = { padding: 16, borderRadius: require("Themes").radii.md, backgroundColor: require("Themes").colors.BACKGROUND_MOD_NORMAL, width: 319 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { color: require("Themes").colors.TEXT_SUBTLE };
let obj1 = { color: require("Themes").colors.TEXT_SUBTLE };
createCacheKey[2] = { color: require("Themes").colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
let obj2 = { color: require("Themes").colors.TEXT_MUTED, paddingTop: 8, paddingBottom: 16 };
createCacheKey[3] = { width: "100%", height: 1, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
let obj3 = { width: "100%", height: 1, backgroundColor: require("Themes").colors.INTERACTIVE_BACKGROUND_HOVER, marginVertical: 16 };
createCacheKey[4] = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("Themes").radii.sm, borderTopLeftRadius: require("Themes").radii.sm, padding: 16, paddingBottom: 0 };
createCacheKey[5] = { textTransform: "uppercase" };
let obj4 = { backgroundColor: require("Themes").colors.BACKGROUND_SURFACE_HIGH, borderTopRightRadius: require("Themes").radii.sm, borderTopLeftRadius: require("Themes").radii.sm, padding: 16, paddingBottom: 0 };
createCacheKey[6] = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
let obj5 = { paddingVertical: 16, display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center", backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOW, borderBottomLeftRadius: require("Themes").radii.sm, borderBottomRightRadius: require("Themes").radii.sm, marginLeft: -16, marginRight: -16, marginTop: 16 };
createCacheKey[7] = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let obj6 = { position: "absolute", left: 0, right: 0, height: 1, bottom: 0, backgroundColor: require("Themes").colors.BACKGROUND_MOD_MUTED };
let result = require("ME").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildRoleSubscriptionTierTemplatePreviewCard.tsx");

export default function GuildRoleSubscriptionTierTemplatePreviewCard(template) {
  let additional_perks;
  let channels;
  let guildId;
  let priceTiers;
  template = template.template;
  ({ priceTiers, guildId } = template);
  const groupListingId = template.groupListingId;
  let navigation;
  let addNewEditStateFromTemplate;
  let callback;
  let suggestedUnusedPrices;
  let c7;
  let callback1;
  let tmp = createCacheKey();
  let obj = template(navigation[15]);
  navigation = obj.useNavigation();
  let obj1 = groupListingId(navigation[16]);
  addNewEditStateFromTemplate = obj1.useEditStateIds(groupListingId, template.editGroupId, { includeSoftDeleted: true }).addNewEditStateFromTemplate;
  const first = template.listings[0];
  ({ channels, additional_perks } = first);
  const first1 = additional_perks[0];
  let obj2 = addNewEditStateFromTemplate;
  const items = [addNewEditStateFromTemplate, groupListingId, navigation, guildId];
  callback = addNewEditStateFromTemplate.useCallback((selectedTemplate) => {
    let obj = template(navigation[17]);
    const result = obj.stashTemplateChannels(selectedTemplate, guildId);
    if (arg1) {
      guildId(tmp2[7]).hideActionSheet();
      const obj2 = guildId(tmp2[7]);
    }
    const tmp = template;
    const tmp3 = guildId;
    const tmp5 = addNewEditStateFromTemplate(selectedTemplate);
    obj = { exit_reason: "template_selected" };
    const obj3 = guildId(navigation[18]);
    const merged = Object.assign(tmp(navigation[19]).collectGuildAnalyticsMetadata(tmp3));
    obj3.track(_undefined.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    obj = { groupListingId, initialEditStateId: tmp5 };
    const replaced = navigation.replace(callback1.ROLE_SUBSCRIPTIONS_TIER_EDIT, obj);
  }, items);
  let obj3 = template(navigation[20]);
  suggestedUnusedPrices = obj3.useSuggestedUnusedPrices(guildId, priceTiers, first.price_tier);
  let tmp8 = null != suggestedUnusedPrices;
  if (tmp8) {
    tmp8 = suggestedUnusedPrices.length > 0;
  }
  c7 = tmp8;
  const items1 = [callback, suggestedUnusedPrices, tmp8];
  callback1 = obj2.useCallback((arg0, arg1) => {
    if (c7) {
      let obj = guildId(navigation[7]);
      obj = { selectedTemplate: null, handleCreateFromTemplate: null, newPricesToPick: null };
      obj[0] = arg0;
      obj[1] = tmp;
      obj[2] = suggestedUnusedPrices;
      obj.openLazy(template(navigation[9])(navigation[10], navigation.paths), "TierTemplatePriceReselectionCard", obj);
    } else {
      tmp(arg0, arg1);
    }
  }, items1);
  obj = { style: tmp.container, children: null };
  obj = { template, handleSelectTemplateInPreview: callback1, subscriptionPlanTextStyle: tmp.subscriptionPlanTextStyle, descriptionTextStyle: tmp.descriptionPlanTextStyle, closeActionSheet: false, descriptionTextProps: { numberOfLines: 2, ellipsizeMode: "tail" } };
  const items2 = [callback(template(navigation[21]).GuildRoleSubscriptionTierTemplateBasicInfo, obj), ];
  obj1 = {
    style: tmp.contentContainer,
    onPress() {
      let obj = guildId(navigation[7]);
      obj = { template, guildId, handleSelectTemplateInPreview: callback1 };
      obj.openLazy(template(navigation[9])(navigation[8], navigation.paths), "TierTemplateCard", obj);
    },
    children: null
  };
  obj2 = {
    renderGap() {
      return callback(closure_13, {});
    },
    children: null
  };
  obj3 = { children: null };
  const obj4 = { title: null, count: null };
  const intl = tmp2(tmp3[13]).intl;
  obj4[0] = intl.formatToPlainString(template(navigation[13]).t.y7dUrm, { numChannels: channels.length });
  obj4[1] = channels.length;
  const items3 = [callback(ContentHeader, obj4), callback(template(navigation[11]).Spacer, { size: 12 }), callback(ChannelBenefitShowCase, { channel: channels[0] }), callback(template(navigation[11]).Spacer, { size: 6 })];
  obj3[0] = items3;
  const items4 = [callback2(suggestedUnusedPrices, obj3), ];
  const obj5 = { children: null };
  const obj6 = { title: null, count: null };
  const intl2 = tmp2(tmp3[13]).intl;
  obj6[0] = intl2.formatToPlainString(template(navigation[13]).t.MR7oOF, { numBenefits: additional_perks.length });
  obj6[1] = additional_perks.length;
  const items5 = [callback(ContentHeader, obj6), callback(template(navigation[11]).Spacer, { size: 12 }), callback(BenefitShowCase, { title: first1.name, description: first1.description }), callback(template(navigation[11]).Spacer, { size: 6 })];
  obj5[0] = items5;
  items4[1] = callback2(suggestedUnusedPrices, obj5);
  obj2[1] = items4;
  const items6 = [callback2(template(navigation[22]).GappedList, obj2), callback(ViewEntireTemplateFooter, {})];
  obj1[2] = items6;
  items2[1] = callback2(callback, obj1);
  obj[1] = items2;
  return callback2(suggestedUnusedPrices, obj);
};
export const CARD_WIDTH = 319;