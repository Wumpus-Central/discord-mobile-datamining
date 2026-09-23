// === Module 18322: GuildSettingsRoleSubscriptionTierTemplateSelection ===

// Module 18322 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1241 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5007 */;
import NavigatorHeader from "NavigatorHeader" /* 5927 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15548 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 18279 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 18323 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 15569 */;

require = fn;
function TierTemplatesRenderer(groupListingId) {
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    let tmp3 = closure_14(closure_6, obj2);
  } else if (null != error) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const items = ["Error: ", error.message];
    obj3.children = items;
    tmp3 = closure_15(guildId(4823).Text, obj3);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        let obj = { data: templates, horizontal: true, contentContainerStyle: null, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
        const obj4 = { paddingLeft: v16, paddingRight: v16 };
        obj.contentContainerStyle = obj4;
        obj.keyExtractor = function keyExtractor(category) {
          return category.category;
        };
        obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
          const obj = { style: null };
          const size = { height: "100%", width };
          obj.style = size;
          return closure_1_14(closure_1_8, obj);
        };
        obj.snapToInterval = guildId(18323).CARD_WIDTH + v16;
        obj.renderItem = function renderItem(template) {
          return closure_2_14(GuildRoleSubscriptionTierTemplatePreviewCardDefault, { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = closure_14(closure_9, obj);
      }
    }
  }
  return tmp3;
}
function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  guildId = guildId.guildId;
  let groupListingId;
  let first1;
  let navigation;
  let callback;
  let callback1;
  let tmp = closure_17();
  importDefault = tmp;
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = guildId(groupListingId[11]).useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj = guildId(groupListingId[11]);
  const first = guildId(groupListingId[12]).useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(groupListingId[12]);
  const groupListingsFetchContext = guildId(groupListingId[13]).useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  let obj3 = guildId(groupListingId[13]);
  const tmp9 = first1(require("useRequest")(stateFromStores(groupListingId[15]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const tmp8 = require("useRequest");
  navigation = guildId(groupListingId[17]).useNavigation();
  const items1 = [first1, guildId, stateFromStores];
  const effect = navigation.useEffect(() => {
    let tmp = null != stateFromStores;
    if (tmp) {
      tmp = 0 !== stateFromStores.length;
    }
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = navigation.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { exit_reason: "voluntarily_exit" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj2);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    const obj = AnalyticsUtilsDefault;
    const obj2 = { exit_reason: "create_from_scratch" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj2);
    const result = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal({
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    });
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        const obj = { onPress, style: closure_1_1.startFromScratch, activeOpacity: 0.5, children: null };
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_14(guildId(groupListingId[21]).PencilIcon, { color: closure_1_1.editIcon.color, size: "xs" }) };
        const items = [closure_2_14(closure_2_8, obj2), ];
        const obj4 = { children: null };
        const obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
        const intl = guildId(groupListingId[22]).intl;
        obj5.children = intl.string(guildId(groupListingId[22]).t.WNWtkB);
        obj4.children = closure_2_14(guildId(groupListingId[9]).Text, obj5);
        items[1] = closure_2_14(closure_2_8, obj4);
        obj.children = items;
        return closure_2_15(callback1, obj);
      },
      headerTitle() {
        return closure_1_14(closure_1_8, {});
      },
      headerLeft: NavigatorHeader.getHeaderBackButton(callback)
    };
    navigation.setOptions(obj);
  }, items4);
  let obj4 = { type: null, name: null, properties: null };
  const tmp2Result = guildId(groupListingId[17]);
  obj4.type = guildId(groupListingId[25]).ImpressionTypes.PAGE;
  obj4.name = guildId(groupListingId[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
  obj4.properties = { guild_id: guildId };
  require("useTrackImpression")(obj4);
  let obj5 = { guildId, children: null };
  const obj6 = { style: null, children: null };
  const items5 = [tmp.container, { paddingBottom: require("useSafeAreaInsets")().bottom }];
  obj6.style = items5;
  const obj7 = { variant: "heading-xl/semibold", style: null, children: null };
  const items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  obj7.style = items6;
  let intl = tmp2(tmp3[22]).intl;
  obj7.children = intl.string(guildId(groupListingId[22]).t.uYFiKr);
  const items7 = [closure_14(guildId(groupListingId[9]).Text, obj7), closure_14(guildId(groupListingId[27]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl2 = tmp2(tmp3[22]).intl;
  obj8.children = intl2.string(guildId(groupListingId[22]).t["ne+rg6"]);
  items7[2] = closure_14(guildId(groupListingId[9]).Text, obj8);
  items7[3] = closure_14(guildId(groupListingId[27]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl3 = tmp2(tmp3[22]).intl;
  obj9.children = intl3.format(guildId(groupListingId[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = closure_14(guildId(groupListingId[9]).Text, obj9);
  items7[5] = closure_14(guildId(groupListingId[27]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading: null, error: null, guildId: null, groupListingId: null };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj10.loading = loading;
  obj10.error = error;
  obj10.guildId = guildId;
  obj10.groupListingId = groupListingId;
  items7[6] = closure_14(TierTemplatesRenderer, obj10);
  obj6.children = items7;
  obj5.children = closure_15(closure_8, obj6);
  return closure_14(guildId(groupListingId[26]).RoleSubscriptionSettingsDisabledContextProvider, obj5);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, TouchableOpacity: closure_7, View: closure_8, FlatList: closure_9 } = get_ActivityIndicator);
const usePriceTiers = fn(18269).usePriceTiers;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 16;
const createStyles = fn(4827);
let obj2 = { container: { marginTop: 16 }, title: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, text: { marginLeft: 16, marginRight: 16 }, activityIndicator: null, editIcon: null, startFromScratch: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.activityIndicator = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.editIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
obj2.startFromScratch = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 };
let closure_17 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  const obj = { guildId: guildId.guildId, children: null };
  const merged = Object.assign(guildId);
  obj.children = closure_1_14(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, {});
  return closure_1_14(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};