// === Module 19947: GuildSettingsRoleSubscriptionTiers ===

// Module 19947 (GuildSettingsRoleSubscriptionTiers)
import _mod12 from "module_12" /* 12 */;
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1994 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5258 */;
import Text_Text from "Text/Text" /* 5624 */;
import FastImageDefault from "FastImage" /* 5717 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 17203 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 19946 */;
import GuildRoleSettingsActionCreatorsAll from "GuildRoleSettingsActionCreators" /* 19950 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 19951 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9075 */;
import GuildStore from "GuildStore" /* 4885 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4939 */;

require = fn;
function DraftBadge() {
  const tmp = closure_17();
  const obj = { style: tmp.draftBadge, children: null };
  const obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.vosPk5);
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(React5, obj);
}
function ArchivedBadge() {
  const tmp = closure_17();
  const obj = { style: tmp.archiveBadge, children: null };
  const obj2 = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.nhbtEl);
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(React5, obj);
}
function UnsavedBadge() {
  const tmp = closure_17();
  const obj = { style: tmp.unsavedBadge, children: null };
  const obj2 = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = util.intl;
  obj2.children = intl.string(util.t.aiwXeq);
  obj.children = __initData(Text_Text.Text, obj2);
  return __initData(React5, obj);
}
function EditListingButton(editStateId) {
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const tmp = closure_17();
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = editStateId(563).useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId));
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
  let tmp5 = !flag2;
  if (!flag2) {
    tmp5 = !flag;
  }
  if (tmp5) {
    tmp5 = undefined !== stateFromStores;
  }
  const obj = editStateId(563);
  const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId), 1)[0];
  const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId, 250), 1)[0];
  if (stateFromStores != null) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    const obj5 = { label: _slicedToArray(obj2.useName(editStateId), 1)[0], subLabel: null, icon: null, arrow: true, onPress: null, onLongPress: null };
    const obj6 = { style: tmp.detailsRow, children: null };
    let tmp11Result = tmp5;
    if (tmp5) {
      tmp11Result = closure_15(DraftBadge, {});
    }
    const items1 = [tmp11Result, , , ];
    let tmp11Result4 = flag2;
    if (flag2) {
      tmp11Result4 = closure_15(ArchivedBadge, {});
    }
    items1[1] = tmp11Result4;
    let tmp11Result5 = tmp18;
    if (undefined === stateFromStores) {
      tmp11Result5 = closure_15(UnsavedBadge, {});
    }
    items1[2] = tmp11Result5;
    const items2 = [tmp.tierPrice, ];
    if (!tmp5) {
      tmp5 = flag2;
    }
    if (!tmp5) {
      tmp5 = tmp18;
    }
    let tierPriceWithoutBadge = !tmp5;
    if (!tmp5) {
      tierPriceWithoutBadge = tmp.tierPriceWithoutBadge;
    }
    const obj7 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    items2[1] = tierPriceWithoutBadge;
    obj7.style = items2;
    obj7.children = "";
    items1[3] = closure_15(tmp2(5624).Text, obj7);
    obj6.children = items1;
    obj5.subLabel = closure_16(closure_7, obj6);
    if (null != first1) {
      const obj8 = { style: tmp.tierIcon, resizeMode: "cover", source: null };
      const obj9 = { uri: first1 };
      obj8.source = obj9;
      let tmp11Result6 = closure_15(FastImageDefault, obj8);
    } else {
      const obj10 = { IconComponent: tmp2(11137).TagsIcon };
      tmp11Result6 = closure_15(tmp2(6975).TableRow.Icon, obj10);
    }
    obj5.icon = tmp11Result6;
    obj5.onPress = editStateId.onPress;
    obj5.onLongPress = function onLongPress() {
      ActionSheetActionCreatorsDefault.openLazy(asyncRequireImpl(19948, dependencyMap.paths), "TierArchiveOrDelete", { editStateId, guildId, groupListingId });
    };
    return closure_15(tmp2(6975).TableRow, obj5);
  } else if (null != first2) {
    const intl = tmp2(1113).intl;
    const obj11 = { price: tmp2(7413).formatPrice(first, first2.currency), interval: null };
    const tmp2Result = tmp2(7413);
    obj11.interval = tmp2(17207).formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1113).t.CgmBaG, obj11);
    const tmp2Result3 = tmp2(17207);
  } else {
    formatToPlainStringResult = tmp2(17207).formatMonthlyPriceLabel(first);
    const tmp2Result4 = tmp2(17207);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_17();
  const navigation = guildId(first[24]).useNavigation();
  let obj = guildId(first[24]);
  const tmp2 = navigation;
  const groupListingsFetchContext = guildId(first[25]).useGroupListingsFetchContext();
  let obj2 = guildId(first[25]);
  const roleSubscriptionSettingsDisabled = guildId(first[26]).useRoleSubscriptionSettingsDisabled();
  const obj3 = guildId(first[26]);
  const guildEligibleForTierTemplates = guildId(first[27]).useGuildEligibleForTierTemplates(guildId);
  const obj4 = guildId(first[27]);
  const groupListingsForGuild = guildId(first[28]).useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  const obj5 = guildId(first[28]);
  const editStateIds = guildEligibleForTierTemplates(first[19]).useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const tmp11 = first1(editStateIds.useState({}), 2);
  const first2 = tmp11[0];
  closure_7 = tmp11[1];
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
        const intl = guildId(1113).intl;
        obj.title = intl.string(guildId(1113).t.pXbGYc);
        const intl2 = guildId(1113).intl;
        obj.subtitle = intl2.string(guildId(1113).t["KzCF/6"]);
        return closure_1_15(guildId(6998).NavigatorHeader, obj);
      }
    });
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
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
  const obj6 = guildEligibleForTierTemplates(first[19]);
  const obj7 = editStateIds;
  const items2 = [stateFromStores];
  stateFromStores = guildId(first[18]).useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, onPress];
  const effect = obj7.useEffect(() => {
    if (stateFromStores === constants.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (memo != null) {
      mapped = memo.map((editStateId) => {
        guildId = editStateId;
        return closure_1_15(EditListingButton, {
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
            guildEligibleForTierTemplates(19950).pushTierEditScene(navigation, {
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
              }
            });
            let obj = guildEligibleForTierTemplates(19950);
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
              }
            };
          }
        }, editStateId);
      });
    }
    const obj8 = { style: tmp.container, children: null };
    const obj9 = { style: null, children: null };
    const items4 = [tmp.content, ];
    const obj10 = { paddingBottom: navigation(first[23])().bottom };
    items4[1] = obj10;
    obj9.style = items4;
    const obj11 = { title: null, description: null, hasIcons: true, children: null };
    let intl = tmp4(tmp3[14]).intl;
    obj11.title = intl.string(tmp4(tmp3[14]).t["7iBIoO"]);
    let intl2 = tmp4(tmp3[14]).intl;
    const obj12 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    obj11.description = intl2.format(tmp4(tmp3[14]).t.nHRSvM, obj12);
    const items5 = [mapped, ];
    const obj13 = { label: null, icon: null, onPress: null, disabled: null };
    const intl3 = tmp4(tmp3[14]).intl;
    obj13.label = intl3.string(tmp4(tmp3[14]).t.PiFnny);
    const obj14 = { size: "md", color: tmp2(tmp3[10]).colors.ICON_BRAND };
    obj13.icon = closure_15(tmp4(tmp3[35]).CirclePlusIcon, obj14);
    obj13.onPress = onPress;
    obj13.disabled = roleSubscriptionSettingsDisabled;
    items5[1] = closure_15(tmp4(tmp3[20]).TableRow, obj13);
    obj11.children = items5;
    obj9.children = closure_16(tmp4(tmp3[34]).TableRowGroup, obj11);
    obj8.children = closure_15(closure_7, obj9);
    return closure_15(onPress, obj8);
  } else {
    const obj15 = { style: tmp.spinner, children: closure_15(first2, {}) };
    return closure_15(closure_7, obj15);
  }
  const tmp4Result = guildId(first[18]);
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const MAX_SUBSCRIPTION_TIERS = fn(17183).MAX_SUBSCRIPTION_TIERS;
const Constants = fn(1072);
({ GuildSettingsSections: map1, GuildSettingsSubsections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5014);
let obj2 = { container: { height: "100%" }, content: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingTop: nativeDefault.space.PX_16 }, tierIcon: null, tierPrice: null, tierPriceWithoutBadge: null, draftBadge: null, draftBadgeLabel: null, archiveBadge: null, archiveBadgeLabel: null, unsavedBadge: null, unsavedBadgeLabel: null, detailsRow: null, spinner: null };
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, height: 40, width: 40 };
obj2.tierIcon = size;
obj2.tierPrice = { marginStart: 6 };
obj2.tierPriceWithoutBadge = { marginStart: 0 };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingTop: nativeDefault.space.PX_16 };
obj2.draftBadge = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
let obj4 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj2.draftBadgeLabel = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
let obj5 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj2.archiveBadge = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj2.archiveBadgeLabel = { textTransform: "uppercase" };
let obj6 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj2.unsavedBadge = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj2.unsavedBadgeLabel = { textTransform: "uppercase" };
obj2.detailsRow = { flexDirection: "row", alignItems: "center" };
obj2.spinner = { marginTop: 12 };
let closure_17 = createStyles.createStyles(obj2);
size = fn(2);
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: __initData(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return __initData(GuildSettingsRoleSubscriptionContainerDefault, obj);
};