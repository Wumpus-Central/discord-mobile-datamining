// === Module 19039: GuildSettingsRoleSubscriptionTierTemplateSelection ===

// Module 19039 (GuildSettingsRoleSubscriptionTierTemplateSelection)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1267 */;
import AppAnalyticsUtils from "AppAnalyticsUtils" /* 5673 */;
import NavigatorHeader from "NavigatorHeader" /* 6872 */;
import GroupListingsFetchContext from "GroupListingsFetchContext" /* 16300 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 18996 */;
import GuildRoleSubscriptionTierTemplatePreviewCardDefault from "GuildRoleSubscriptionTierTemplatePreviewCard" /* 19040 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildRoleSubscriptionTierTemplatesStore from "GuildRoleSubscriptionTierTemplatesStore" /* 16321 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, TouchableOpacity: closure_7, View: closure_8 } = get_ActivityIndicator);
const usePriceTiers = fn(18988).usePriceTiers;
const Constants = fn(1087);
({ AnalyticEvents: closure_11, GuildSettingsSections: closure_12 } = Constants);
const jsxProd = fn(21);
({ jsx: map1, jsxs: closure_14 } = jsxProd);
let c15 = 16;
const createStyles = fn(4945);
let obj2 = { container: { marginTop: 16 }, title: { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY }, text: { marginLeft: 16, marginRight: 16 }, activityIndicator: null, editIcon: null, startFromScratch: null };
let obj3 = { color: nativeDefault.colors.MOBILE_TEXT_HEADING_PRIMARY };
obj2.activityIndicator = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let obj4 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
obj2.editIcon = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
obj2.startFromScratch = { display: "flex", flexDirection: "row", alignItems: "center", marginRight: 12 };
let closure_16 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_17 = ReactCompilerGating.isReactCompilerEnabled() ? (function TierTemplatesRenderer(groupListingId) {
  let Text = guildId;
  let tmp = dependencyMap;
  const cResult = guildId(576).c(14);
  ({ templates, error, guildId } = groupListingId);
  groupListingId = groupListingId.groupListingId;
  let color = closure_16();
  const tiers = usePriceTiers(guildId).tiers;
  if (groupListingId.loading) {
    if (cResult[0] !== color.activityIndicator.color) {
      const obj2 = { color: color.activityIndicator.color };
      const tmp21 = closure_13(closure_6, obj2);
      color = color.activityIndicator.color;
      cResult[0] = color;
      cResult[1] = tmp21;
    }
  } else if (null != error) {
    if (cResult[2] !== error.message) {
      Text = Text(5195).Text;
      const obj3 = { variant: "text-xs/normal", color: "text-feedback-critical", children: null };
      const items = ["Error: ", error.message];
      obj3.children = items;
      tmp = closure_14(Text, obj3);
      error = error.message;
      cResult[2] = error;
      cResult[3] = tmp;
    }
  } else {
    let tmp4 = null;
    if (null != templates) {
      tmp4 = null;
      if (0 !== templates.length) {
        const _Symbol = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { paddingLeft: v16, paddingRight: v16 };
          const fn = function u(category) {
            return category.category;
          };
          const fn2 = function p() {
            const obj = { style: null };
            const size = { height: "100%", width };
            obj.style = size;
            return closure_1_13(closure_1_8, obj);
          };
          class T {
            constructor(arg0) {
              obj = { template: groupListingId.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
              return jsx(closure_1(closure_3[12]), obj);
            }
          }
          cResult[4] = obj4;
          cResult[5] = fn;
          cResult[6] = fn2;
          let sum = fn2;
          let tmp5 = obj4;
        } else {
          tmp5 = cResult[4];
          sum = cResult[6];
        }
        if (cResult[7] === groupListingId) {
          if (cResult[8] === guildId) {
            if (cResult[9] === tiers) {
              let tmp9 = cResult[10];
            }
            if (cResult[11] === tmp9) {
            }
            const obj5 = { data: templates, horizontal: true, contentContainerStyle: tmp5, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
            class T {
              constructor(arg0) {
                obj = { template: groupListingId.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
                return jsx(closure_1(closure_3[12]), obj);
              }
            }
            obj5.ItemSeparatorComponent = sum;
            sum = Text(19040).CARD_WIDTH + v16;
            obj5.snapToInterval = sum;
            obj5.renderItem = tmp9;
            const tmp13 = closure_13(Text(7168).FlashList, obj5);
            cResult[11] = tmp9;
            cResult[12] = templates;
            cResult[13] = tmp13;
          }
        }
        class T {
          constructor(arg0) {
            obj = { template: groupListingId.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId };
            return jsx(closure_1(closure_3[12]), obj);
          }
        }
        cResult[7] = groupListingId;
        cResult[8] = guildId;
        cResult[9] = tiers;
        cResult[10] = T;
        tmp9 = T;
      }
    }
    return tmp4;
  }
  let obj = guildId(576);
}) : (function TierTemplatesRenderer(groupListingId) {
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
    tmp3 = closure_14(guildId(5195).Text, obj);
  } else {
    tmp3 = null;
    if (null != templates) {
      tmp3 = null;
      if (0 !== templates.length) {
        const obj3 = { data: templates, horizontal: true, contentContainerStyle: null, keyExtractor: null, ItemSeparatorComponent: null, decelerationRate: "fast", snapToInterval: null, renderItem: null };
        const obj4 = { paddingLeft: v16, paddingRight: v16 };
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
        obj3.snapToInterval = guildId(19040).CARD_WIDTH + v16;
        obj3.renderItem = function renderItem(template) {
          return map1(GuildRoleSubscriptionTierTemplatePreviewCardDefault, { template: template.item, priceTiers: tiers, guildId, groupListingId, editGroupId: guildId });
        };
        tmp3 = closure_13(guildId(7168).FlashList, obj3);
      }
    }
  }
  return tmp3;
});
ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  const cResult = guildId(groupListingId[10]).c(62);
  guildId = guildId.guildId;
  groupListingId = guildId.groupListingId;
  let obj = guildId(groupListingId[10]);
  importDefault = closure_16();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildRoleSubscriptionTierTemplatesStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
    cResult[1] = guildId;
    cResult[2] = I;
  } else {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
  }
  const tmp4 = closure_16();
  const stateFromStores = guildId(groupListingId[14]).useStateFromStores(first, I);
  const tmpResult = guildId(groupListingId[14]);
  const tmpResult4 = guildId(groupListingId[15]);
  const groupListingsFetchContext = guildId(groupListingId[16]).useGroupListingsFetchContext();
  if (groupListingId == null) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
    if (tmpResult4.useGroupListingsForGuild(guildId)[0] != null) {
      class I {
        constructor() {
          return closure_9.getTemplates(guildId);
        }
      }
    }
    groupListingId = tmp10;
  }
  const tmpResult5 = guildId(groupListingId[16]);
  const tmp12 = first1(require("useRequest")(stateFromStores(groupListingId[18]).getTemplates), 2);
  first1 = tmp12[0];
  ({ loading, error } = tmp12[1]);
  const bottom = require("useSafeAreaInsets")().bottom;
  const tmp11 = require("useRequest");
  const navigation = guildId(groupListingId[20]).useNavigation();
  if (cResult[3] === first1) {
    class I {
      constructor() {
        return closure_9.getTemplates(guildId);
      }
    }
  }
  class R {
    constructor() {
      tmp = null != closure_2;
      if (tmp) {
        num = 0;
        tmp = 0 !== closure_2.length;
      }
      if (!tmp) {
        tmp2 = closure_4;
        tmp3 = guildId;
        tmp4 = closure_4(guildId);
      }
      return;
    }
  }
  const items1 = [first1, guildId, stateFromStores];
  cResult[3] = first1;
  cResult[4] = guildId;
  cResult[5] = stateFromStores;
  cResult[6] = R;
  cResult[7] = items1;
  const tmpResult6 = guildId(groupListingId[20]);
}) : (function GuildSettingsRoleSubscriptionTierTemplateSelectionComponent(guildId) {
  guildId = guildId.guildId;
  let groupListingId;
  let first1;
  let navigation;
  let callback;
  let callback1;
  let tmp = closure_16();
  importDefault = tmp;
  let items = [GuildRoleSubscriptionTierTemplatesStore];
  const stateFromStores = guildId(groupListingId[14]).useStateFromStores(items, () => GuildRoleSubscriptionTierTemplatesStore.getTemplates(guildId));
  let obj = guildId(groupListingId[14]);
  const first = guildId(groupListingId[15]).useGroupListingsForGuild(guildId)[0];
  let obj2 = guildId(groupListingId[15]);
  const groupListingsFetchContext = guildId(groupListingId[16]).useGroupListingsFetchContext();
  if (groupListingId == null) {
    let id;
    if (first != null) {
      id = first.id;
    }
    groupListingId = id;
  }
  let obj3 = guildId(groupListingId[16]);
  const tmp9 = first1(require("useRequest")(stateFromStores(groupListingId[18]).getTemplates), 2);
  first1 = tmp9[0];
  ({ loading, error } = tmp9[1]);
  const tmp8 = require("useRequest");
  navigation = guildId(groupListingId[20]).useNavigation();
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
        const obj2 = { style: closure_1_1.editIcon, children: closure_2_13(guildId(groupListingId[24]).PencilIcon, { color: closure_1_1.editIcon.color, size: "xs" }) };
        const items = [closure_2_13(closure_2_8, obj2), ];
        const obj4 = { children: null };
        const obj5 = { variant: "text-md/medium", color: "interactive-text-active", children: null };
        const intl = guildId(groupListingId[25]).intl;
        obj5.children = intl.string(guildId(groupListingId[25]).t.WNWtkB);
        obj4.children = closure_2_13(guildId(groupListingId[11]).Text, obj5);
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
  const tmp2Result = guildId(groupListingId[20]);
  obj4.type = guildId(groupListingId[27]).ImpressionTypes.PAGE;
  obj4.name = guildId(groupListingId[27]).ImpressionNames.ROLE_SUBSCRIPTION_LISTING_TEMPLATE_SELECTOR;
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
  let intl = tmp2(tmp3[25]).intl;
  obj7.children = intl.string(guildId(groupListingId[25]).t.uYFiKr);
  const items7 = [closure_13(guildId(groupListingId[11]).Text, obj7), closure_13(guildId(groupListingId[29]).Spacer, { size: 8 }), , , , , ];
  const obj8 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl2 = tmp2(tmp3[25]).intl;
  obj8.children = intl2.string(guildId(groupListingId[25]).t["ne+rg6"]);
  items7[2] = closure_13(guildId(groupListingId[11]).Text, obj8);
  items7[3] = closure_13(guildId(groupListingId[29]).Spacer, { size: 8 });
  const obj9 = { variant: "text-sm/medium", style: tmp.text, children: null };
  const intl3 = tmp2(tmp3[25]).intl;
  obj9.children = intl3.format(guildId(groupListingId[25]).t.iQML2g, { creatorPortalUrl: "https://discord.com/creator-portal/learn-from-creators?tab=lightning-lessons" });
  items7[4] = closure_13(guildId(groupListingId[11]).Text, obj9);
  items7[5] = closure_13(guildId(groupListingId[29]).Spacer, { size: 24 });
  const obj10 = { templates: stateFromStores, loading: null, error: null, guildId: null, groupListingId: null };
  if (!loading) {
    loading = !groupListingsFetchContext;
  }
  obj10.loading = loading;
  obj10.error = error;
  obj10.guildId = guildId;
  obj10.groupListingId = groupListingId;
  items7[6] = closure_13(closure_17, obj10);
  obj6.children = items7;
  obj5.children = closure_14(closure_8, obj6);
  return closure_13(guildId(groupListingId[30]).RoleSubscriptionSettingsDisabledContextProvider, obj5);
});
ReactCompilerGating = fn(558);
let obj5 = { color: nativeDefault.colors.INTERACTIVE_TEXT_ACTIVE, marginRight: 4 };
let size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/tier_templates/GuildSettingsRoleSubscriptionTierTemplateSelection.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  const cResult = c.c(5);
  if (cResult[0] !== guildId) {
    const obj2 = {};
    const merged = Object.assign(guildId);
    const tmp10 = map1(closure_18, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp10;
    let tmp4 = tmp10;
  } else {
    tmp4 = cResult[1];
  }
  if (cResult[2] === guildId.guildId) {
    if (cResult[3] === tmp4) {
      let tmp11 = cResult[4];
    }
    return tmp11;
  }
  const tmp12 = map1(GroupListingsFetchContext.GroupListingsFetchContextProvider, { guildId: guildId.guildId, children: tmp4 });
  cResult[2] = guildId.guildId;
  cResult[3] = tmp4;
  cResult[4] = tmp12;
  tmp11 = tmp12;
  const obj3 = { guildId: guildId.guildId, children: tmp4 };
}) : (function GuildSettingsRoleSubscriptionTierTemplateSelection(guildId) {
  const obj = { guildId: guildId.guildId, children: null };
  const merged = Object.assign(guildId);
  obj.children = map1(closure_18, {});
  return map1(GroupListingsFetchContext.GroupListingsFetchContextProvider, obj);
});