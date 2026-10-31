// === Module 19991: GuildSettingsRoleSubscriptionTierTemplateSelection ===

// Module 19991 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import nativeDefault from "native" /* 575 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5760 */;
import NavigatorHeader from "NavigatorHeader" /* 6998 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 17191 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 19951 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 19992 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 17210 */;

require = fn;
function TierTemplatesRenderer(groupListingId) {
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    let tmp3 = closure_13(closure_6, obj2);
  } else if (null != error) {
    let obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const items = ["Error: ", error.message];
    obj.children = items;
    tmp3 = closure_14(guildId(5624).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        const obj3 = { data: templates, horizontal: true, contentContainerStyle: null, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
        const obj4 = { paddingLeft: PX_16, paddingRight: PX_16 };
        obj3.contentContainerStyle = obj4;
        obj3.keyExtractor = function keyExtractor(category) {
          return category.category;
        };
        obj3.ItemSeparatorComponent = function ItemSeparatorComponent() {
          const obj = { style: null };
          const size = { height: "100%", width };
          obj.style = size;
          return closure_1_13(closure_1_8, obj);
        };
        obj3.snapToInterval = guildId(19992).CARD_WIDTH + PX_16;
        obj3.renderItem = function renderItem(template) {
          return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = closure_13(guildId(7294).FlashList, obj3);
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
  let tmp = closure_16();
  importDefault = tmp;
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = guildId(groupListingId[12]).useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj = guildId(groupListingId[12]);
  const first = guildId(groupListingId[13]).useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(groupListingId[13]);
  const groupListingsFetchContext = guildId(groupListingId[14]).useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  let obj3 = guildId(groupListingId[14]);
  const tmp9 = first1(require("useRequest")(stateFromStores(groupListingId[16]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const tmp8 = require("useRequest");
  navigation = guildId(groupListingId[18]).useNavigation();
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
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_13(guildId(groupListingId[22]).PencilIcon, { color: closure_1_1.editIcon.color, size: "xs" }) };
        const items = [closure_2_13(closure_2_8, obj2), ];
        const obj4 = { children: null };
        const obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
        const intl = guildId(groupListingId[23]).intl;
        obj5.children = intl.string(guildId(groupListingId[23]).t.WNWtkB);
        obj4.children = closure_2_13(guildId(groupListingId[9]).Text, obj5);
        items[1] = closure_2_13(closure_2_8, obj4);
        obj.children = items;
        return closure_2_14(callback1, obj);
      },
      headerTitle() {
        return closure_1_13(closure_1_8, {});
      },
      headerLeft: NavigatorHeader.getHeaderBackButton(callback)
    };
    navigation.setOptions(obj);
  }, items4);
  let obj4 = { type: null, name: null, properties: null };
  const tmp2Result = guildId(groupListingId[18]);
  obj4.type = guildId(groupListingId[26]).ImpressionTypes.PAGE;
  obj4.name = guildId(groupListingId[26]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
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
  let intl = tmp2(tmp3[23]).intl;
  obj7.children = intl.string(guildId(groupListingId[23]).t.uYFiKr);
  const items7 = [closure_13(guildId(groupListingId[9]).Text, obj7), closure_13(guildId(groupListingId[28]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl2 = tmp2(tmp3[23]).intl;
  obj8.children = intl2.string(guildId(groupListingId[23]).t["ne+rg6"]);
  items7[2] = closure_13(guildId(groupListingId[9]).Text, obj8);
  items7[3] = closure_13(guildId(groupListingId[28]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl3 = tmp2(tmp3[23]).intl;
  obj9.children = intl3.format(guildId(groupListingId[23]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = closure_13(guildId(groupListingId[9]).Text, obj9);
  items7[5] = closure_13(guildId(groupListingId[28]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading: null, error: null, guildId: null, groupListingId: null };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj10.loading = loading;
  obj10.error = error;
  obj10.guildId = guildId;
  obj10.groupListingId = groupListingId;
  items7[6] = closure_13(TierTemplatesRenderer, obj10);
  obj6.children = items7;
  obj5.children = closure_14(closure_8, obj6);
  return closure_13(guildId(groupListingId[27]).RoleSubscriptionSettingsDisabledContextProvider, obj5);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, TouchableOpacity: closure_7, View: closure_8 } = get_ActivityIndicator);
const usePriceTiers = fn(19942).usePriceTiers;
const Constants = fn(1072);
({ AnalyticEvents: closure_11, GuildSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
const PX_16 = nativeDefault.space.PX_16;
const createStyles = fn(5014);
let obj2 = { container: { marginTop: PX_16 }, title: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, text: { marginLeft: PX_16, marginRight: PX_16 }, activityIndicator: null, editIcon: null, startFromScratch: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.activityIndicator = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.editIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: nativeDefault.space.PX_4 };
let obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: nativeDefault.space.PX_4 };
obj2.startFromScratch = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: nativeDefault.space.PX_12 };
let closure_16 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  const obj = { guildId: guildId.guildId, children: null };
  const merged = Object.assign(guildId);
  obj.children = map1(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, {});
  return map1(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};