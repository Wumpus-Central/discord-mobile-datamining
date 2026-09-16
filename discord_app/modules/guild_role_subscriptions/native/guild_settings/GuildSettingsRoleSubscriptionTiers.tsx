// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer.tsx";
import GuildRoleSettingsActionCreatorsAll from "../GuildRoleSettingsActionCreators.tsx";
import GuildRoleSubscriptionsActionCreatorExtrasAll from "../../GuildRoleSubscriptionsActionCreatorExtras.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../guild_settings/GuildSettingsStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";

require = fn;
function DraftBadge() {
  const tmp = closure_19();
  const obj = { style: tmp.draftBadge, children: null };
  const obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vosPk5);
  obj.children = closure_1_17(Text_Text.Text, obj2);
  return closure_1_17(React5, obj);
}
function ArchivedBadge() {
  const tmp = closure_19();
  const obj = { style: tmp.archiveBadge, children: null };
  const obj2 = {
    style: tmp.archiveBadgeLabel,
    variant: "text-xs/semibold",
    color: "text-overlay-light",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.nhbtEl);
  obj.children = closure_1_17(Text_Text.Text, obj2);
  return closure_1_17(React5, obj);
}
function UnsavedBadge() {
  const tmp = closure_19();
  const obj = { style: tmp.unsavedBadge, children: null };
  const obj2 = {
    style: tmp.unsavedBadgeLabel,
    variant: "text-xs/semibold",
    color: "text-overlay-light",
    children: null,
  };
  const intl = util.intl;
  obj2.children = intl.string(util.t.aiwXeq);
  obj.children = closure_1_17(Text_Text.Text, obj2);
  return closure_1_17(React5, obj);
}
function Row(disabled) {
  let disabled2 = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (disabled2 === undefined) {
    disabled2 = false;
  }
  const tmp = closure_19();
  const style = [tmp.tierManagementButton];
  disabled = disabled2;
  if (disabled2) {
    disabled = tmp.disabled;
  }
  style[1] = disabled;
  return closure_1_17(TouchableHitBoxDefault, {
    style,
    accessibilityRole: "button",
    onPress,
    onLongPress,
    disabled: disabled2,
    children,
  });
}
function EditListingButton(editStateId) {
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const tmp = closure_19();
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = editStateId(563).useStateFromStores(items, () =>
    GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId),
  );
  let flag;
  if (stateFromStores != null) {
    flag = stateFromStores.published;
  }
  if (flag == null) {
    flag = false;
  }
  let flag2;
  if (stateFromStores != null) {
    flag2 = stateFromStores.archived;
  }
  if (flag2 == null) {
    flag2 = false;
  }
  let tmp11Result3 = !flag2;
  if (!flag2) {
    tmp11Result3 = !flag;
  }
  if (tmp11Result3) {
    tmp11Result3 = undefined !== stateFromStores;
  }
  const obj = editStateId(563);
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId, 250), 1)[0];
  if (stateFromStores != null) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    const obj5 = {
      onPress: editStateId.onPress,
      onLongPress() {
        ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(17947, dependencyMap.paths), "TierArchiveOrDelete", {
          editStateId,
          guildId,
          groupListingId,
        });
      },
      children: null,
    };
    let tmp11Result = null != first1;
    if (tmp11Result) {
      const obj6 = { style: tmp.tierIcon, resizeMode: "cover", source: null };
      const obj7 = { uri: first1 };
      obj6.source = obj7;
      tmp11Result = closure_17(FastImageDefault, obj6);
    }
    const items1 = [tmp11Result, ,];
    const obj8 = { style: tmp.tierColumn, children: null };
    const obj9 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: _slicedToArray(obj2.useName(editStateId), 1)[0],
    };
    const items2 = [closure_17(tmp2(4634).Text, obj9)];
    const obj10 = { style: tmp.detailsRow, children: null };
    if (tmp11Result3) {
      tmp11Result3 = closure_17(DraftBadge, {});
    }
    const items3 = [tmp11Result3, , ,];
    if (flag2) {
      flag2 = closure_17(ArchivedBadge, {});
    }
    let tmp11Result4 = undefined === stateFromStores;
    items3[1] = flag2;
    if (tmp11Result4) {
      tmp11Result4 = closure_17(UnsavedBadge, {});
    }
    const obj11 = { children: null };
    items3[2] = tmp11Result4;
    const obj12 = { style: tmp.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: "" };
    items3[3] = closure_17(tmp2(4634).Text, obj12);
    obj10.children = items3;
    items2[1] = closure_18(closure_7, obj10);
    obj8.children = items2;
    items1[1] = closure_18(closure_7, obj8);
    items1[2] = closure_17(tmp2(10389).PencilIcon, {});
    obj5.children = items1;
    obj11.children = closure_18(Row, obj5);
    return closure_17(closure_7, obj11);
  } else if (null != first2) {
    const intl = tmp2(1115).intl;
    const obj13 = { price: tmp2(7344).formatPrice(first, first2.currency), interval: null };
    const tmp2Result = tmp2(7344);
    obj13.interval = tmp2(15341).formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1115).t.CgmBaG, obj13);
    const tmp2Result4 = tmp2(15341);
  } else {
    const intl2 = tmp2(1115).intl;
    const obj14 = { price: tmp2(7344).formatPrice(first, constants.USD), interval: null };
    const tmp2Result5 = tmp2(7344);
    const obj15 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
    obj14.interval = tmp2(15341).formatPlanInterval(obj15);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1115).t.CgmBaG, obj14);
    const tmp2Result6 = tmp2(15341);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  let navigation;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_19();
  const tmp4 = navigation(first[25])();
  navigation = guildId(first[26]).useNavigation();
  let obj = guildId(first[26]);
  const groupListingsFetchContext = guildId(first[27]).useGroupListingsFetchContext();
  let obj2 = guildId(first[27]);
  const roleSubscriptionSettingsDisabled = guildId(first[28]).useRoleSubscriptionSettingsDisabled();
  const obj3 = guildId(first[28]);
  const guildEligibleForTierTemplates = guildId(first[29]).useGuildEligibleForTierTemplates(guildId);
  const obj4 = guildId(first[29]);
  const groupListingsForGuild = guildId(first[30]).useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  const obj5 = guildId(first[30]);
  const editStateIds = guildEligibleForTierTemplates(first[21]).useEditStateIds(first1, guildId, {
    includeSoftDeleted: true,
  }).editStateIds;
  const tmp12 = first1(editStateIds.useState({}), 2);
  const first2 = tmp12[0];
  closure_7 = tmp12[1];
  const items = [editStateIds, first2];
  const memo = editStateIds.useMemo(() => {
    const mapped = editStateIds.map((item) => {
      let tmp = first2[item];
      if (tmp == null) {
        tmp = item;
      }
      return tmp;
    });
    return _mod12.uniq(mapped);
  }, items);
  const layoutEffect = editStateIds.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = guildId(1115).intl;
        obj.title = intl.string(guildId(1115).t.pXbGYc);
        const intl2 = guildId(1115).intl;
        obj.subtitle = intl2.string(guildId(1115).t["KzCF/6"]);
        return closure_1_17(guildId(5710).NavigatorHeader, obj);
      },
    });
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation];
  let id;
  if (first != null) {
    id = first.id;
  }
  items1[3] = id;
  onPress = editStateIds.useCallback(() => {
    if (guildEligibleForTierTemplates) {
      const obj = { guildId, groupListingId: null };
      let id;
      if (first != null) {
        id = first.id;
      }
      obj.groupListingId = id;
      const result = GuildRoleSettingsActionCreatorsAll.pushTierTemplateSelectionScene(navigation, obj);
      const tmpResult = GuildRoleSettingsActionCreatorsAll;
    } else {
      const obj2 = { guildId, groupListingId: null, onAfterTierCreation: null };
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      obj2.groupListingId = id1;
      obj2.onAfterTierCreation = function onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      };
      const result1 = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal(obj2);
      const tmpResult2 = GuildRoleSubscriptionsActionCreatorExtrasAll;
    }
  }, items1);
  const obj6 = guildEligibleForTierTemplates(first[21]);
  const obj7 = editStateIds;
  const items2 = [stateFromStores];
  stateFromStores = guildId(first[20]).useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, onPress];
  const effect = obj7.useEffect(() => {
    if (stateFromStores === constants2.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (memo != null) {
      mapped = memo.map((editStateId) => {
        guildId = editStateId;
        return closure_1_17(
          EditListingButton,
          {
            editStateId,
            guildId,
            groupListingId: first1,
            onPress() {
              guild = guild.getGuild(guildId);
              closure_1_1(38)(null != guild, "guild must not be null");
              let id;
              if (first != null) {
                id = first.id;
              }
              guildEligibleForTierTemplates(17949).pushTierEditScene(navigation, {
                groupListingId: id,
                initialEditStateId,
                onBeforeDispatchNewListing(id) {
                  id = id.id;
                  closure_1 = closure_0;
                  closure_2_7((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_1] = id;
                    return obj;
                  });
                },
              });
              let obj = guildEligibleForTierTemplates(17949);
              const obj2 = {
                groupListingId: id,
                initialEditStateId,
                onBeforeDispatchNewListing(id) {
                  id = id.id;
                  closure_1 = closure_0;
                  closure_2_7((arg0) => {
                    const obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_1] = id;
                    return obj;
                  });
                },
              };
            },
          },
          editStateId,
        );
      });
    }
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { style: null, children: null };
    const obj10 = { paddingBottom: navigation(first[24])().bottom };
    obj9.style = obj10;
    const obj11 = { style: tmp4.header, children: null };
    let intl = tmp5(tmp3[15]).intl;
    obj11.children = intl.string(tmp5(tmp3[15]).t["7iBIoO"]);
    const items4 = [closure_17(tmp2(tmp3[36]), obj11), , ,];
    const obj12 = {
      style: tmp.tierManagementDescription,
      variant: "text-sm/medium",
      color: "text-default",
      children: null,
    };
    let intl2 = tmp5(tmp3[15]).intl;
    const obj13 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    obj12.children = intl2.format(tmp5(tmp3[15]).t.nHRSvM, obj13);
    items4[1] = closure_17(tmp5(tmp3[18]).Text, obj12);
    items4[2] = mapped;
    const obj14 = { onPress, disabled: roleSubscriptionSettingsDisabled, children: null };
    const obj15 = { source: null };
    const tmp2Result = tmp2(tmp3[36]);
    obj15.source = tmp2(tmp3[37]);
    const items5 = [closure_17(tmp2(tmp3[22]), obj15)];
    const obj16 = {
      style: tmp.createTierLabel,
      variant: "text-md/medium",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl3 = tmp5(tmp3[15]).intl;
    obj16.children = intl3.string(tmp5(tmp3[15]).t.PiFnny);
    items5[1] = closure_17(tmp5(tmp3[18]).Text, obj16);
    obj14.children = items5;
    items4[3] = closure_18(Row, obj14);
    obj9.children = items4;
    obj8.children = closure_18(closure_7, obj9);
    return closure_17(onPress, obj8);
  } else {
    const obj17 = { style: tmp.spinner, children: closure_17(first2, {}) };
    return closure_17(closure_7, obj17);
  }
  const tmp5Result = guildId(first[20]);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const MAX_SUBSCRIPTION_TIERS = fn(15315).MAX_SUBSCRIPTION_TIERS;
const Constants = fn(1074);
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = Constants);
const SubscriptionIntervalTypes = fn(1374).SubscriptionIntervalTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(4638);
let obj2 = {
  container: { height: "100%" },
  tierManagementDescription: { marginBottom: 16, paddingHorizontal: 16 },
  tierManagementButton: {
    backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
    borderRadius: nativeDefault.radii.sm,
    flexDirection: "row",
    alignItems: "center",
    alignSelf: "stretch",
    justifyContent: "flex-start",
    height: 72,
    padding: 16,
    marginHorizontal: 16,
    marginBottom: 8,
  },
  tierColumn: { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 },
  tierIcon: null,
  tierPrice: null,
  draftBadge: null,
  draftBadgeLabel: null,
  archiveBadge: null,
  archiveBadgeLabel: null,
  unsavedBadge: null,
  unsavedBadgeLabel: null,
  detailsRow: null,
  createTierLabel: null,
  spinner: null,
  disabled: null,
};
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: 20,
  marginEnd: 12,
  height: 40,
  width: 40,
};
obj2.tierIcon = size;
obj2.tierPrice = { marginStart: 6 };
let obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: nativeDefault.radii.sm,
  flexDirection: "row",
  alignItems: "center",
  alignSelf: "stretch",
  justifyContent: "flex-start",
  height: 72,
  padding: 16,
  marginHorizontal: 16,
  marginBottom: 8,
};
obj2.draftBadge = {
  backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
let obj4 = {
  backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
obj2.draftBadgeLabel = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
let obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj2.archiveBadge = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
obj2.archiveBadgeLabel = { textTransform: "uppercase" };
let obj6 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
obj2.unsavedBadge = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
obj2.unsavedBadgeLabel = { textTransform: "uppercase" };
obj2.detailsRow = { flexDirection: "row", alignItems: "center", marginTop: 3 };
obj2.createTierLabel = { marginStart: 12 };
obj2.spinner = { marginTop: 12 };
obj2.disabled = { opacity: 0.5 };
let closure_19 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx",
);

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_1_17(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return closure_1_17(GuildSettingsRoleSubscriptionContainerDefault, obj);
}
