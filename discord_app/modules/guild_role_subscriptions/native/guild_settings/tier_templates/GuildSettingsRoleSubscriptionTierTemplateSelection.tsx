// === Module 17782: GuildSettingsRoleSubscriptionTierTemplateSelection ===

// Module 17782 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import nativeDefault from "native" /* 576 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1242 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 4740 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15213 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 17739 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 17783 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 15234 */;

require = fn;
function TierTemplatesRenderer(groupListingId) {
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    let obj = { color: tmp.activityIndicator.color };
    let tmp3 = closure_14(closure_6, obj);
  } else if (null != error) {
    obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const items = ["Error: ", error.message];
    obj.children = items;
    tmp3 = closure_15(guildId(4556).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        obj = { data: templates, horizontal: true, contentContainerStyle: null, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
        const obj1 = { paddingLeft: v16, paddingRight: v16 };
        obj.contentContainerStyle = obj1;
        obj.keyExtractor = function keyExtractor(category) {
          return category.category;
        };
        obj.ItemSeparatorComponent = function ItemSeparatorComponent() {
          const obj = { style: null };
          const size = { height: "100%", width };
          obj.style = size;
          return closure_1_14(closure_1_8, obj);
        };
        obj.snapToInterval = guildId(17783).CARD_WIDTH + v16;
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
  let obj = guildId(groupListingId[11]);
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj1 = guildId(groupListingId[12]);
  const first = obj1.useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(groupListingId[13]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
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
    const obj = { exit_reason: "voluntarily_exit" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    let obj = { exit_reason: "create_from_scratch" };
    const merged = Object.assign(AppAnalyticsUtils.collectGuildAnalyticsMetadata(guildId));
    obj.track(constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    obj = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal(obj);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let obj = { onPress, style: closure_1_1.startFromScratch, activeOpacity: 0.5, children: null };
        obj = { style: closure_1_1.editIcon, children: null };
        obj = { color: closure_1_1.editIcon.color, size: "xs" };
        obj.children = closure_2_14(guildId(groupListingId[21]).PencilIcon, obj);
        const items = [closure_2_14(closure_2_8, obj), ];
        const obj1 = { children: null };
        const obj2 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
        const intl = guildId(groupListingId[22]).intl;
        obj2.children = intl.string(guildId(groupListingId[22]).t.WNWtkB);
        obj1.children = closure_2_14(guildId(groupListingId[9]).Text, obj2);
        items[1] = closure_2_14(closure_2_8, obj1);
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
  obj = { type: null, name: null, properties: null };
  const tmp2Result = guildId(groupListingId[17]);
  obj.type = guildId(groupListingId[25]).ImpressionTypes.PAGE;
  obj.name = guildId(groupListingId[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
  obj.properties = { guild_id: guildId };
  require("useTrackImpression")(obj);
  obj = { guildId, children: null };
  obj1 = { style: null, children: null };
  const items5 = [tmp.container, { paddingBottom: require("useSafeAreaInsets")().bottom }];
  obj1.style = items5;
  obj2 = { variant: "heading-xl/semibold", style: null, children: null };
  const items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  obj2.style = items6;
  let intl = tmp2(tmp3[22]).intl;
  obj2.children = intl.string(guildId(groupListingId[22]).t.uYFiKr);
  const items7 = [closure_14(guildId(groupListingId[9]).Text, obj2), closure_14(guildId(groupListingId[27]).Spacer, { size: 8 }), , , , , ];
  let obj3 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl2 = tmp2(tmp3[22]).intl;
  obj3.children = intl2.string(guildId(groupListingId[22]).t["ne+rg6"]);
  items7[2] = closure_14(guildId(groupListingId[9]).Text, obj3);
  items7[3] = closure_14(guildId(groupListingId[27]).Spacer, { size: 8 });
  const obj4 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl3 = tmp2(tmp3[22]).intl;
  obj4.children = intl3.format(guildId(groupListingId[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = closure_14(guildId(groupListingId[9]).Text, obj4);
  items7[5] = closure_14(guildId(groupListingId[27]).Spacer, { size: 24 });
  const obj5 = { templates: stateFromStores, loading: null, error: null, guildId: null, groupListingId: null };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj5.loading = loading;
  obj5.error = error;
  obj5.guildId = guildId;
  obj5.groupListingId = groupListingId;
  items7[6] = closure_14(TierTemplatesRenderer, obj5);
  obj1.children = items7;
  obj.children = closure_15(closure_8, obj1);
  return closure_14(guildId(groupListingId[26]).RoleSubscriptionSettingsDisabledContextProvider, obj);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, TouchableOpacity: closure_7, View: closure_8, FlatList: closure_9 } = get_ActivityIndicator);
const usePriceTiers = fn(17729).usePriceTiers;
const Constants = fn(1074);
({ AnalyticEvents: closure_12, GuildSettingsSections: map1 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 16;
fn(4560);
let createStyles = { container: { marginTop: 16 }, title: null, text: null, activityIndicator: null, editIcon: null, startFromScratch: null };
createStyles = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles.title = createStyles;
createStyles.text = { marginLeft: 16, marginRight: 16 };
createStyles.activityIndicator = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj1 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createStyles.editIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
createStyles.startFromScratch = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 };
let closure_17 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj = { guildId: guildId.guildId, children: null };
  obj = {};
  const merged = Object.assign(guildId);
  obj.children = closure_1_14(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj);
  return closure_1_14(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};