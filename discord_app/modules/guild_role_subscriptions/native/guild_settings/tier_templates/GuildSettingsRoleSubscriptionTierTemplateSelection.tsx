// === Module 17366: TierTemplatesRenderer ===

// Module 17366 (TierTemplatesRenderer)
import ThemesDefault from "Themes" /* 712 */;
import useGroupListingsFetchContext from "useGroupListingsFetchContext" /* 14809 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_10 from "initialize" /* 14830 */;
import { usePriceTiers } from "usePriceTiers" /* 17313 */;
import ME from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function TierTemplatesRenderer(groupListingId) {
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  let tiers;
  tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    let obj = { color: null };
    obj[0] = tmp.activityIndicator.color;
    let tmp3 = callback(closure_6, obj);
  } else if (null != error) {
    obj = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
    const items = ["Error: ", error.message];
    obj[2] = items;
    tmp3 = callback2(guildId(4474).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        obj = { data: null, horizontal: true, contentContainerStyle: null, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
        obj[0] = templates;
        obj1 = { paddingLeft: null, paddingRight: null };
        obj1[0] = c16;
        obj1[1] = c16;
        obj[2] = obj1;
        obj[3] = function keyExtractor(category) {
          return category.category;
        };
        obj[4] = function ItemSeparatorComponent() {
          const style = { height: "100%", width: closure_16 };
          return callback(closure_8, { style });
        };
        obj[6] = guildId(17367).CARD_WIDTH + c16;
        obj[7] = function renderItem(item) {
          return closure_1_14(groupListingId(closure_1_3[10]), { template: item.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = callback(closure_9, obj);
      }
    }
  }
  return tmp3;
}
function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  guildId = guildId.guildId;
  let groupListingId = guildId.groupListingId;
  importDefault = undefined;
  let stateFromStores;
  groupListingId = undefined;
  let first1;
  let navigation;
  let callback;
  let callback1;
  let tmp = callback3();
  importDefault = tmp;
  let obj = guildId(groupListingId[11]);
  let items = [closure_10];
  stateFromStores = obj.useStateFromStores(items, () => closure_1_10.getTemplates(guildId));
  obj1 = guildId(groupListingId[12]);
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
  const tmp9 = first1(importDefault(groupListingId[14])(stateFromStores(groupListingId[15]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const tmp8 = importDefault(groupListingId[14]);
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
    let obj = callback(groupListingId[18]);
    obj = { exit_reason: "voluntarily_exit" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(closure_1_12.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    let obj = callback(groupListingId[18]);
    obj = { exit_reason: "create_from_scratch" };
    const merged = Object.assign(guildId(groupListingId[19]).collectGuildAnalyticsMetadata(guildId));
    obj.track(closure_1_12.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = guildId(groupListingId[19]);
    obj = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(closure_1_13.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = stateFromStores(groupListingId[20]).openTierCreationModal(obj);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj = {
      headerRight() {
        let obj = { onPress: closure_7, style: closure_1.startFromScratch, activeOpacity: 0.5, children: null };
        obj = { style: closure_1.editIcon, children: closure_1_14(closure_1_0(closure_1_3[21]).PencilIcon, obj) };
        obj = { color: closure_1.editIcon.color, size: "xs" };
        const items = [closure_1_14(closure_1_8, obj), ];
        obj1 = { children: null };
        const obj2 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
        const intl = closure_1_0(closure_1_3[22]).intl;
        obj2[2] = intl.string(closure_1_0(closure_1_3[22]).t.WNWtkB);
        obj1[0] = closure_1_14(closure_1_0(closure_1_3[9]).Text, obj2);
        items[1] = closure_1_14(closure_1_8, obj1);
        obj[3] = items;
        return closure_1_15(closure_1_7, obj);
      },
      headerTitle() {
        return callback(closure_8, {});
      },
      headerLeft: guildId(groupListingId[23]).getHeaderBackButton(callback)
    };
    navigation.setOptions(obj);
  }, items4);
  obj = { type: null, name: null, properties: null };
  const tmp2Result = guildId(groupListingId[17]);
  obj[0] = guildId(groupListingId[25]).ImpressionTypes.PAGE;
  obj[1] = guildId(groupListingId[25]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
  obj[2] = { guild_id: guildId };
  importDefault(groupListingId[24])(obj);
  obj = { guildId, children: null };
  obj1 = { style: items5, children: null };
  items5 = [tmp.container, { paddingBottom: importDefault(groupListingId[16])().bottom }];
  obj2 = { variant: "heading-xl/semibold", style: items6, children: null };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let intl = tmp2(tmp3[22]).intl;
  obj2[2] = intl.string(guildId(groupListingId[22]).t.uYFiKr);
  const items7 = [callback(guildId(groupListingId[9]).Text, obj2), callback(guildId(groupListingId[27]).Spacer, { size: 8 }), , , , , ];
  let obj3 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl2 = tmp2(tmp3[22]).intl;
  obj3[2] = intl2.string(guildId(groupListingId[22]).t["ne+rg6"]);
  items7[2] = callback(guildId(groupListingId[9]).Text, obj3);
  items7[3] = callback(guildId(groupListingId[27]).Spacer, { size: 8 });
  const obj4 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl3 = tmp2(tmp3[22]).intl;
  obj4[2] = intl3.format(guildId(groupListingId[22]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = callback(guildId(groupListingId[9]).Text, obj4);
  items7[5] = callback(guildId(groupListingId[27]).Spacer, { size: 24 });
  const obj5 = { templates: stateFromStores, loading: null, error: null, guildId: null, groupListingId: null };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj5[1] = loading;
  obj5[2] = error;
  obj5[3] = guildId;
  obj5[4] = groupListingId;
  items7[6] = callback(TierTemplatesRenderer, obj5);
  obj1[1] = items7;
  obj[1] = closure_15(closure_8, obj1);
  return callback(guildId(groupListingId[26]).RoleSubscriptionSettingsDisabledContextProvider, obj);
}
({ ActivityIndicator: closure_6, TouchableOpacity: error, View: closure_8, FlatList: c9 } = get_ActivityIndicator);
({ AnalyticEvents: closure_12, GuildSettingsSections: map1 } = ME);
({ jsx: closure_14, jsxs: closure_15 } = jsxProd);
let c16 = 16;
createCacheKey = { container: { marginTop: 16 }, title: null, text: null, activityIndicator: null, editIcon: null, startFromScratch: null };
createCacheKey = { color: ThemesDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { marginLeft: 16, marginRight: 16 };
createCacheKey[3] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj1 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_DEFAULT };
createCacheKey[4] = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
createCacheKey[5] = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 };
let closure_17 = createCacheKey.createStyles(createCacheKey);
let obj2 = { color: ThemesDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  let obj = { guildId: guildId.guildId, children: null };
  obj = {};
  const merged = Object.assign(guildId);
  obj[1] = callback(GuildSettingsRoleSubscriptionTierTemplateSelectionComponent, obj);
  return callback(useGroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
};