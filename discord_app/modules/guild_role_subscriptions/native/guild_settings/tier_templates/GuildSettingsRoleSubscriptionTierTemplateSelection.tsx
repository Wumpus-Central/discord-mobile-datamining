// === Module 18023: GuildSettingsRoleSubscriptionTierTemplateSelection ===

// Module 18023 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5076 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 15046 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17972 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 17980 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 18024 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 15067 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4896 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let importDefault, navigation;

let c9;
let closure_12;
let closure_14;
let closure_15;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
({ ActivityIndicator: metroRequire, TouchableOpacity: metroImportDefault, View: metroImportAll, FlatList: c9 } = react_native);
const usePriceTiers = RoleTierEditStore.usePriceTiers;
({ AnalyticEvents: closure_12, GuildSettingsSections: map1 } = Constants);
({ jsx: closure_14, jsxs: closure_15 } = Fragment);
let c16 = 16;
let createStyles = createStyles_mod;
let obj = { container: { marginTop: 16 }, title: obj2, text: { marginLeft: 16, marginRight: 16 }, activityIndicator: obj3, editIcon: obj4, startFromScratch: { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 } };
obj2 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
createStyles = createStyles.createStyles;
obj3 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let closure_17 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? ((groupListingId) => {
  let error;
  let guildId;
  let items;
  let templates;
  let tmp6;
  let obj = guildId(576);
  const cResult = obj.c(14);
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const loading = groupListingId.loading;
  const tmp4 = closure_17();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    let tmp15;
    if (cResult[0] !== tmp4.activityIndicator.color) {
      const obj2 = { color: tmp4.activityIndicator.color };
      const tmp18 = closure_14(closure_6, obj2);
      cResult[0] = tmp4.activityIndicator.color;
      cResult[1] = tmp18;
      tmp15 = tmp18;
    } else {
      tmp15 = cResult[1];
    }
    tmp6 = tmp15;
  } else if (null != error) {
    let tmp12;
    if (cResult[2] !== error.message) {
      const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
      items = ["Error: ", error.message];
      const tmp14 = closure_15(guildId(4892).Text, obj3);
      cResult[2] = error.message;
      cResult[3] = tmp14;
      tmp12 = tmp14;
    } else {
      tmp12 = cResult[3];
    }
    tmp6 = tmp12;
  } else {
    tmp6 = null;
    if (null != templates) {
      tmp6 = null;
      if (0 !== templates.length) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { paddingLeft: v16, paddingRight: v16 };
          class I {
            constructor(category) {
              return category.category;
            }
          }
          class T {
            constructor() {
              const obj = { style: size };
              size = { height: "100%", width };
              return closure_1_14(closure_1_8, obj);
            }
          }
          cResult[4] = obj4;
          cResult[5] = I;
          cResult[6] = T;
        }
        const fn = function _(template) {
          const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
          return authStore2(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
        };
        cResult[7] = groupListingId;
        cResult[8] = guildId;
        cResult[9] = tiers;
        cResult[10] = fn;
      }
    }
  }
  return tmp6;
}) : ((groupListingId) => {
  let error;
  let guildId;
  let items;
  let obj4;
  let templates;
  let tmp3;
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  const loading = groupListingId.loading;
  const tmp = closure_17();
  const tiers = usePriceTiers(guildId).tiers;
  if (loading) {
    const obj2 = { color: tmp.activityIndicator.color };
    tmp3 = closure_14(closure_6, obj2);
  } else if (null != error) {
    const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: items };
    items = ["Error: ", error.message];
    tmp3 = closure_15(guildId(4892).Text, obj3);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        let obj = {
          data: templates,
          horizontal: true,
          contentContainerStyle: obj4,
          keyExtractor(category) {
                  return category.category;
                },
          ItemSeparatorComponent() {
                  const obj = { style: size };
                  size = { height: "100%", width };
                  return closure_1_14(closure_1_8, obj);
                },
          decelerationRate: "fast",
          snapToInterval: guildId(18024).CARD_WIDTH + v16,
          renderItem(template) {
                  const obj = { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                  return authStore2(GuildRoleSubscriptionTierTemplatePreviewCardDefault, obj);
                }
        };
        obj4 = { paddingLeft: v16, paddingRight: v16 };
        tmp3 = closure_14(closure_9, obj);
      }
    }
  }
  return tmp3;
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_19 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let closure_1;
  let error;
  let first;
  let first2;
  let groupListingId;
  let loading;
  let tmp7;
  let tmp = guildId;
  let obj = guildId(groupListingId[10]);
  const cResult = obj.c(62);
  guildId = guildId.guildId;
  groupListingId = guildId.groupListingId;
  importDefault = closure_17();
  const tmp4 = closure_17();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleSubscriptionTierTemplatesStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function u() {
      return GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = tmp(groupListingId[13]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
  const tmpResult4 = tmp(groupListingId[14]);
  const first1 = tmpResult4.useGroupListingsForGuild(guildId)[0];
  const tmpResult5 = tmp(groupListingId[15]);
  const groupListingsFetchContext = tmpResult5.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first1 != null) {
      id = first1.id;
    }
    groupListingId = id;
  }
  const tmp12 = require("useRequest");
  const tmp13 = first2(tmp12(stateFromStores(groupListingId[17]).getTemplates), 2);
  first2 = tmp13[0];
  ({ loading, error } = tmp13[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmpResult6 = tmp(groupListingId[19]);
  navigation = tmpResult6.useNavigation();
  if (cResult[3] === first2) {
    if (cResult[4] === guildId) {
      let tmp16;
      let tmp17;
      let tmp20;
      if (cResult[5] === stateFromStores) {
        tmp16 = cResult[6];
        tmp17 = cResult[7];
      }
      const effect = navigation.useEffect(tmp16, tmp17);
      if (cResult[8] !== guildId) {
        class C {
          constructor() {
            const track = AnalyticsUtilsDefault.track;
            const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
            const obj = { exit_reason: "voluntarily_exit" };
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
          }
        }
        cResult[8] = guildId;
        cResult[9] = C;
        tmp20 = C;
      } else {
        class C {
          constructor() {
            const track = AnalyticsUtilsDefault.track;
            const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
            const obj = { exit_reason: "voluntarily_exit" };
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
          }
        }
      }
      C = tmp20;
      if (cResult[10] === groupListingId) {
        class C {
          constructor() {
            const track = AnalyticsUtilsDefault.track;
            const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
            const obj = { exit_reason: "voluntarily_exit" };
            AnalyticsUtilsDefault;
            const obj2 = AppAnalyticsUtils;
            const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
            track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
          }
        }
      }
      const fn3 = function z() {
        const track = AnalyticsUtilsDefault.track;
        const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
        const obj = { exit_reason: "create_from_scratch" };
        AnalyticsUtilsDefault;
        const obj2 = AppAnalyticsUtils;
        const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
        track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
        const obj3 = GuildRoleSubscriptionsActionCreatorExtrasAll;
        const obj4 = {
          guildId,
          groupListingId,
          onAfterTierCreation() {
            navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
          }
        };
        const result = obj3.openTierCreationModal(obj4);
      };
      cResult[10] = groupListingId;
      cResult[11] = guildId;
      cResult[12] = navigation;
      cResult[13] = fn3;
    }
  }
  const fn2 = function f() {
    const tmp = null != stateFromStores && 0 !== stateFromStores.length;
    if (!tmp) {
      first2(guildId);
    }
  };
  const items1 = [first2, guildId, stateFromStores];
  cResult[3] = first2;
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = fn2;
  cResult[7] = items1;
  tmp17 = items1;
  tmp16 = fn2;
}) : ((guildId) => {
  let closure_1;
  let error;
  let intl;
  let intl2;
  let intl3;
  let items5;
  let items6;
  let items7;
  let loading;
  let obj6;
  guildId = guildId.guildId;
  let groupListingId;
  let first1;
  navigation = undefined;
  let callback;
  let callback1;
  let tmp = closure_17();
  importDefault = tmp;
  let obj = guildId(groupListingId[13]);
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj2 = guildId(groupListingId[14]);
  const first = obj2.useGroupListingsForGuild(guildId)[0];
  let obj3 = guildId(groupListingId[15]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  const tmp8 = require("useRequest");
  const tmp9 = first1(tmp8(stateFromStores(groupListingId[17]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp2Result = guildId(groupListingId[19]);
  navigation = tmp2Result.useNavigation();
  const items1 = [first1, guildId, stateFromStores];
  const effect = navigation.useEffect(() => {
    const tmp = null != stateFromStores && 0 !== stateFromStores.length;
    if (!tmp) {
      first1(guildId);
    }
  }, items1);
  const items2 = [guildId];
  callback = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "voluntarily_exit" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
  }, items2);
  const items3 = [guildId, groupListingId, navigation];
  callback1 = navigation.useCallback(() => {
    const track = AnalyticsUtilsDefault.track;
    const ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED = constants.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED;
    const obj = { exit_reason: "create_from_scratch" };
    AnalyticsUtilsDefault;
    const obj2 = AppAnalyticsUtils;
    const merged = Object.assign(obj2.collectGuildAnalyticsMetadata(guildId));
    track(ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR_EXITED, obj);
    const obj3 = GuildRoleSubscriptionsActionCreatorExtrasAll;
    const obj4 = {
      guildId,
      groupListingId,
      onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      }
    };
    const result = obj3.openTierCreationModal(obj4);
  }, items3);
  const items4 = [navigation, callback1, callback, tmp];
  const layoutEffect = navigation.useLayoutEffect(() => {
    let obj2;
    let onPress;
    let obj = {
      headerRight() {
        let Text;
        let intl;
        let items;
        let obj3;
        let obj5;
        const obj = { onPress, style: closure_1_1.startFromScratch, activeOpacity: 0.5, children: items };
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_14(guildId(groupListingId[23]).PencilIcon, obj3) };
        obj3 = { color: closure_1_1.editIcon.color, size: "xs" };
        items = [closure_2_14(closure_2_8, obj2), ];
        const obj4 = { children: closure_2_14(Text, obj5) };
        obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: intl.string(guildId(groupListingId[24]).t.WNWtkB) };
        Text = guildId(groupListingId[11]).Text;
        intl = guildId(groupListingId[24]).intl;
        items[1] = closure_2_14(closure_2_8, obj4);
        return closure_2_15(callback1, obj);
      },
      headerTitle() {
        return closure_1_14(closure_1_8, {});
      },
      headerLeft: obj2.getHeaderBackButton(callback)
    };
    const setOptions = navigation.setOptions;
    obj2 = NavigatorHeader;
    setOptions(obj);
  }, items4);
  let obj4 = { type: guildId(groupListingId[26]).ImpressionTypes.PAGE, name: guildId(groupListingId[26]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR, properties: { guild_id: guildId } };
  const tmp16 = require("useTrackImpression");
  tmp16(obj4);
  let obj5 = { guildId, children: closure_15(closure_8, obj6) };
  obj6 = { style: items5, children: items7 };
  items5 = [tmp.container, { paddingBottom: bottom }];
  const RoleSubscriptionSettingsDisabledContextProvider = tmp2(tmp3[29]).RoleSubscriptionSettingsDisabledContextProvider;
  const obj7 = { variant: "heading-xl/semibold", style: items6, children: intl.string(guildId(groupListingId[24]).t.uYFiKr) };
  items6 = [, ];
  ({ title: arr7[0], text: arr7[1] } = tmp);
  let Text = tmp2(tmp3[11]).Text;
  intl = tmp2(tmp3[24]).intl;
  items7 = [closure_14(Text, obj7), closure_14(guildId(groupListingId[28]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: intl2.string(guildId(groupListingId[24]).t["ne+rg6"]) };
  const Text2 = tmp2(tmp3[11]).Text;
  intl2 = tmp2(tmp3[24]).intl;
  items7[2] = closure_14(Text2, obj8);
  items7[3] = closure_14(guildId(groupListingId[28]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: intl3.format(guildId(groupListingId[24]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" }) };
  const Text3 = tmp2(tmp3[11]).Text;
  intl3 = tmp2(tmp3[24]).intl;
  items7[4] = closure_14(Text3, obj9);
  items7[5] = closure_14(guildId(groupListingId[28]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading, error, guildId, groupListingId };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  items7[6] = closure_14(closure_18, obj10);
  return closure_14(RoleSubscriptionSettingsDisabledContextProvider, obj5);
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp4;
  const obj = react2;
  const cResult = obj.c(5);
  if (cResult[0] !== guildId) {
    const obj2 = {};
    const merged = Object.assign(guildId);
    const tmp10 = authStore2(closure_19, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp10;
    tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === guildId.guildId) {
    let tmp11;
    if (cResult[3] === tmp4) {
      tmp11 = cResult[4];
    }
    return tmp11;
  }
  const obj3 = { guildId: guildId.guildId, children: tmp4 };
  const tmp12 = authStore2(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj3);
  cResult[2] = guildId.guildId;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
}) : ((guildId) => {
  let obj2;
  const obj = { guildId: guildId.guildId, children: authStore2(closure_19, obj2) };
  obj2 = {};
  const GroupListingsFetchContextProvider = GroupListingsFetchContext.GroupListingsFetchContextProvider;
  const merged = Object.assign(guildId);
  return authStore2(GroupListingsFetchContextProvider, obj);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default tmp6;