// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/01896_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../guild_settings/GuildSettingsStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";

require = fn;
function DraftBadge() {
  const tmp = closure_19();
  let obj = { style: tmp.draftBadge, children: null };
  obj = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.vosPk5);
  obj.children = closure_1_17(Text_Text.Text, obj);
  return closure_1_17(React5, obj);
}
function ArchivedBadge() {
  const tmp = closure_19();
  let obj = { style: tmp.archiveBadge, children: null };
  obj = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.nhbtEl);
  obj.children = closure_1_17(Text_Text.Text, obj);
  return closure_1_17(React5, obj);
}
function UnsavedBadge() {
  const tmp = closure_19();
  let obj = { style: tmp.unsavedBadge, children: null };
  obj = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.aiwXeq);
  obj.children = closure_1_17(Text_Text.Text, obj);
  return closure_1_17(React5, obj);
}
function Row(disabled) {
  disabled = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = closure_19();
  const style = [tmp.tierManagementButton];
  if (disabled) {
    disabled = tmp.disabled;
  }
  style[1] = disabled;
  return closure_1_17(TouchableHitBoxDefault, {
    style,
    accessibilityRole: "button",
    onPress,
    onLongPress,
    disabled,
    children,
  });
}
function EditListingButton(editStateId) {
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const tmp = closure_19();
  let obj = editStateId(563);
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = obj.useStateFromStores(items, () =>
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
  let tmp11Result = !flag2;
  if (!flag2) {
    tmp11Result = !flag;
  }
  if (tmp11Result) {
    tmp11Result = undefined !== stateFromStores;
  }
  let obj1 = GuildRoleSubscriptionListingEditStateUtilsAll;
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.usePriceTier(editStateId), 1)[0];
  let obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.useImage(editStateId, 250), 1)[0];
  if (stateFromStores != null) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    obj = {
      onPress: editStateId.onPress,
      onLongPress() {
        const obj = { editStateId, guildId, groupListingId };
        obj.openLazy(asyncRequireImpl(17736, dependencyMap.paths), "TierArchiveOrDelete", obj);
      },
      children: null,
    };
    tmp11Result = null != first1;
    if (tmp11Result) {
      obj = { style: tmp.tierIcon, resizeMode: "cover", source: null };
      obj1 = { uri: first1 };
      obj.source = obj1;
      tmp11Result = tmp11(FastImageDefault, obj);
    }
    const items1 = [tmp11Result, ,];
    obj2 = { style: tmp.tierColumn, children: null };
    obj3 = {
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: _slicedToArray(obj1.useName(editStateId), 1)[0],
    };
    const items2 = [closure_17(tmp2(4556).Text, obj3)];
    const obj4 = { style: tmp.detailsRow, children: null };
    if (tmp11Result) {
      tmp11Result = tmp11(DraftBadge, {});
    }
    const items3 = [tmp11Result, , ,];
    if (flag2) {
      flag2 = tmp11(ArchivedBadge, {});
    }
    let tmp11Result1 = undefined === stateFromStores;
    items3[1] = flag2;
    if (tmp11Result1) {
      tmp11Result1 = tmp11(UnsavedBadge, {});
    }
    const obj5 = { children: null };
    items3[2] = tmp11Result1;
    const obj6 = { style: tmp.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: "" };
    items3[3] = closure_17(tmp2(4556).Text, obj6);
    obj4.children = items3;
    items2[1] = closure_18(closure_7, obj4);
    obj2.children = items2;
    items1[1] = closure_18(closure_7, obj2);
    items1[2] = closure_17(tmp2(10250).PencilIcon, {});
    obj.children = items1;
    obj5.children = closure_18(Row, obj);
    return closure_17(closure_7, obj5);
  } else if (null != first2) {
    const intl = tmp2(1114).intl;
    const obj7 = { price: null, interval: null };
    let tmp2Result = tmp2(7234);
    obj7.price = tmp2Result.formatPrice(first, first2.currency);
    tmp2Result = tmp2(15231);
    obj7.interval = tmp2Result.formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1114).t.CgmBaG, obj7);
  } else {
    const intl2 = tmp2(1114).intl;
    const obj8 = { price: tmp2(7234).formatPrice(first, constants.USD), interval: null };
    const tmp2Result1 = tmp2(7234);
    const obj9 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
    obj8.interval = tmp2(15231).formatPlanInterval(obj9);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1114).t.CgmBaG, obj8);
    const tmp2Result2 = tmp2(15231);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_19();
  let obj = guildId(first[26]);
  const navigation = obj.useNavigation();
  let obj1 = guildId(first[27]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = guildId(first[28]);
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  let obj3 = guildId(first[29]);
  const guildEligibleForTierTemplates = obj3.useGuildEligibleForTierTemplates(guildId);
  let obj4 = guildId(first[30]);
  const groupListingsForGuild = obj4.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  let obj5 = guildEligibleForTierTemplates(first[21]);
  const editStateIds = obj5.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  let obj6 = editStateIds;
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
        const intl = guildId(1114).intl;
        obj.title = intl.string(guildId(1114).t.pXbGYc);
        const intl2 = guildId(1114).intl;
        obj.subtitle = intl2.string(guildId(1114).t["KzCF/6"]);
        return closure_1_17(guildId(5624).NavigatorHeader, obj);
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
      let tmpResult = tmp(17738);
      let obj = { guildId, groupListingId: null };
      let id;
      if (first != null) {
        id = first.id;
      }
      obj.groupListingId = id;
      const result = tmpResult.pushTierTemplateSelectionScene(navigation, obj);
    } else {
      tmpResult = tmp(17739);
      obj = { guildId, groupListingId: null, onAfterTierCreation: null };
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      obj.groupListingId = id1;
      obj.onAfterTierCreation = function onAfterTierCreation() {
        navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
      };
      const result1 = tmpResult.openTierCreationModal(obj);
    }
  }, items1);
  const tmp4 = navigation(first[25])();
  const items2 = [stateFromStores];
  stateFromStores = guildId(first[20]).useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, onPress];
  const effect = obj6.useEffect(() => {
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
              let obj = guildEligibleForTierTemplates(17738);
              let id;
              if (first != null) {
                id = first.id;
              }
              obj = {
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
              obj.pushTierEditScene(navigation, obj);
            },
          },
          editStateId,
        );
      });
    }
    obj = { style: tmp.container, children: null };
    obj = { style: null, children: null };
    obj1 = { paddingBottom: navigation(first[24])().bottom };
    obj.style = obj1;
    obj2 = { style: tmp4.header, children: null };
    let tmp2Result = tmp2(tmp3[36]);
    let intl = tmp5(tmp3[15]).intl;
    obj2.children = intl.string(tmp5(tmp3[15]).t["7iBIoO"]);
    const items4 = [closure_17(tmp2Result, obj2), , ,];
    obj3 = { style: tmp.tierManagementDescription, variant: "text-sm/medium", color: "text-default", children: null };
    let intl2 = tmp5(tmp3[15]).intl;
    obj4 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    obj3.children = intl2.format(tmp5(tmp3[15]).t.nHRSvM, obj4);
    items4[1] = closure_17(tmp5(tmp3[18]).Text, obj3);
    items4[2] = mapped;
    obj5 = { onPress, disabled: roleSubscriptionSettingsDisabled, children: null };
    obj6 = { source: null };
    tmp2Result = tmp2(tmp3[22]);
    obj6.source = tmp2(tmp3[37]);
    const items5 = [closure_17(tmp2Result, obj6)];
    const obj7 = {
      style: tmp.createTierLabel,
      variant: "text-md/medium",
      color: "mobile-text-heading-primary",
      children: null,
    };
    const intl3 = tmp5(tmp3[15]).intl;
    obj7.children = intl3.string(tmp5(tmp3[15]).t.PiFnny);
    items5[1] = closure_17(tmp5(tmp3[18]).Text, obj7);
    obj5.children = items5;
    items4[3] = closure_18(Row, obj5);
    obj.children = items4;
    obj.children = closure_18(closure_7, obj);
    return closure_17(onPress, obj);
  } else {
    const obj8 = { style: tmp.spinner, children: closure_17(first2, {}) };
    return closure_17(closure_7, obj8);
  }
  const tmp5Result = guildId(first[20]);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const MAX_SUBSCRIPTION_TIERS = fn(15205).MAX_SUBSCRIPTION_TIERS;
const Constants = fn(1074);
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = Constants);
const SubscriptionIntervalTypes = fn(1373).SubscriptionIntervalTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
fn(4560);
let createStyles = {
  container: { height: "100%" },
  tierManagementDescription: { marginBottom: 16, paddingHorizontal: 16 },
  tierManagementButton: null,
  tierColumn: null,
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
createStyles = {
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
createStyles.tierManagementButton = createStyles;
createStyles.tierColumn = { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 };
let size = {
  backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH,
  borderRadius: 20,
  marginEnd: 12,
  height: 40,
  width: 40,
};
createStyles.tierIcon = size;
createStyles.tierPrice = { marginStart: 6 };
createStyles.draftBadge = {
  backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
let obj1 = {
  backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
createStyles.draftBadgeLabel = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
let obj2 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
createStyles.archiveBadge = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
createStyles.archiveBadgeLabel = { textTransform: "uppercase" };
let obj3 = {
  backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
createStyles.unsavedBadge = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
createStyles.unsavedBadgeLabel = { textTransform: "uppercase" };
createStyles.detailsRow = { flexDirection: "row", alignItems: "center", marginTop: 3 };
createStyles.createTierLabel = { marginStart: 12 };
createStyles.spinner = { marginTop: 12 };
createStyles.disabled = { opacity: 0.5 };
let closure_19 = createStyles.createStyles(createStyles);
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx",
);

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_1_17(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return closure_1_17(GuildSettingsRoleSubscriptionContainerDefault, obj);
}
