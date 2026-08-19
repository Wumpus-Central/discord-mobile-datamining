// === Module 16956: DraftBadge ===

// Module 16956 (DraftBadge)
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import ACTION_SHEET_HEIGHT_HALFDefault from "ACTION_SHEET_HEIGHT_HALF" /* 4342 */;
import Text from "Text" /* 4734 */;
import preloadDefault from "preload" /* 5449 */;
import renderDefault from "render" /* 8910 */;
import getRoleEmojisAll from "getRoleEmojis" /* 14573 */;
import ApplicationRejectedNoticeDefault from "ApplicationRejectedNotice" /* 16955 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import handleFormInit from "handleFormInit" /* 8875 */;
import createGuildRecordFromRust from "createGuildRecordFromRust" /* 1910 */;
import makeGroupListingIndexSubscriptionListingTag from "makeGroupListingIndexSubscriptionListingTag" /* 4015 */;
import { MAX_SUBSCRIPTION_TIERS } from "MAX_SUBSCRIPTION_TIERS" /* 14551 */;
import ME from "ME" /* 676 */;
import { SubscriptionIntervalTypes } from "GuildFeatures" /* 1924 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

require = fn;
function DraftBadge() {
  const tmp = callback4();
  const obj = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.vosPk5);
  obj[1] = callback2(Text.Text, obj);
  return callback2(closure_7, obj);
}
function ArchivedBadge() {
  const tmp = callback4();
  const obj = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.nhbtEl);
  obj[1] = callback2(Text.Text, obj);
  return callback2(closure_7, obj);
}
function UnsavedBadge() {
  const tmp = callback4();
  const obj = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: null };
  const intl = getSystemLocale.intl;
  obj[3] = intl.string(getSystemLocale.t.aiwXeq);
  obj[1] = callback2(Text.Text, obj);
  return callback2(closure_7, obj);
}
function Row(disabled) {
  disabled = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (disabled === undefined) {
    disabled = false;
  }
  const tmp = callback4();
  const style = [tmp.tierManagementButton, ];
  if (disabled) {
    disabled = tmp.disabled;
  }
  style[1] = disabled;
  return callback(renderDefault, { style, accessibilityRole: "button", onPress, onLongPress, disabled, children });
}
function EditListingButton(editStateId) {
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const tmp = callback4();
  let obj = editStateId(647);
  const items = [closure_11];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_11.getSubscriptionListing(editStateId));
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
  obj1 = getRoleEmojisAll;
  let obj2 = getRoleEmojisAll;
  const first = callback(obj2.usePriceTier(editStateId), 1)[0];
  let obj3 = getRoleEmojisAll;
  const first1 = callback(obj3.useImage(editStateId, 250), 1)[0];
  if (stateFromStores != null) {
    const first2 = stateFromStores.subscription_plans[0];
  }
  if (undefined === first) {
    obj = { onPress: null, onLongPress: null, children: null };
    obj[0] = editStateId.onPress;
    obj[1] = function onLongPress() {
      const obj = { editStateId, guildId: closure_1, groupListingId: closure_2 };
      obj.openLazy(editStateId(dependencyMap[14])(dependencyMap[13], dependencyMap.paths), "TierArchiveOrDelete", obj);
    };
    tmp11Result = null != first1;
    if (tmp11Result) {
      obj = { style: null, resizeMode: "cover", source: null };
      obj[0] = tmp.tierIcon;
      obj1 = { uri: null };
      obj1[0] = first1;
      obj[2] = obj1;
      tmp11Result = callback(preloadDefault, obj);
    }
    const items1 = [tmp11Result, , ];
    obj2 = { style: null, children: null };
    obj2[0] = tmp.tierColumn;
    obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
    obj3[2] = callback(obj1.useName(editStateId), 1)[0];
    const items2 = [callback(tmp2(4734).Text, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = tmp.detailsRow;
    if (tmp11Result) {
      tmp11Result = callback(DraftBadge, {});
    }
    const items3 = [tmp11Result, , , ];
    if (flag2) {
      flag2 = callback(ArchivedBadge, {});
    }
    let tmp11Result1 = undefined === stateFromStores;
    items3[1] = flag2;
    if (tmp11Result1) {
      tmp11Result1 = callback(UnsavedBadge, {});
    }
    const obj5 = { children: null };
    items3[2] = tmp11Result1;
    const obj6 = { style: null, variant: "text-sm/medium", color: "interactive-text-default", children: null };
    obj6[0] = tmp.tierPrice;
    obj6[3] = "";
    items3[3] = callback(tmp2(4734).Text, obj6);
    obj4[1] = items3;
    items2[1] = callback2(closure_7, obj4);
    obj2[1] = items2;
    items1[1] = callback2(closure_7, obj2);
    items1[2] = callback(tmp2(9925).PencilIcon, {});
    obj[2] = items1;
    obj5[0] = callback2(Row, obj);
    return callback(closure_7, obj5);
  } else if (null != first2) {
    const intl = tmp2(1236).intl;
    const obj7 = { price: null, interval: null };
    let tmp2Result = tmp2(5316);
    obj7[0] = tmp2Result.formatPrice(first, first2.currency);
    tmp2Result = tmp2(14577);
    obj7[1] = tmp2Result.formatPlanInterval(first2);
    let formatToPlainStringResult = intl.formatToPlainString(tmp2(1236).t.CgmBaG, obj7);
  } else {
    const intl2 = tmp2(1236).intl;
    const obj8 = { price: null, interval: null };
    obj8[0] = tmp2(5316).formatPrice(first, constants.USD);
    const tmp2Result1 = tmp2(5316);
    const obj9 = { interval: null, interval_count: 1 };
    obj9[0] = SubscriptionIntervalTypes.MONTH;
    obj8[1] = tmp2(14577).formatPlanInterval(obj9);
    formatToPlainStringResult = intl2.formatToPlainString(tmp2(1236).t.CgmBaG, obj8);
    const tmp2Result2 = tmp2(14577);
  }
}
function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
  guildId = guildId.guildId;
  let first;
  let callback;
  let stateFromStores;
  let tmp = callback4();
  let obj = guildId(first[26]);
  const navigation = obj.useNavigation();
  obj1 = guildId(first[27]);
  const groupListingsFetchContext = obj1.useGroupListingsFetchContext();
  let obj2 = guildId(first[28]);
  const roleSubscriptionSettingsDisabled = obj2.useRoleSubscriptionSettingsDisabled();
  let obj3 = guildId(first[29]);
  const guildEligibleForTierTemplates = obj3.useGuildEligibleForTierTemplates(guildId);
  let obj4 = guildId(first[30]);
  const groupListingsForGuild = obj4.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((item, index) => item.id)[0];
  let obj5 = guildEligibleForTierTemplates(first[21]);
  const editStateIds = obj5.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  let obj6 = editStateIds;
  const tmp12 = first1(editStateIds.useState({}), 2);
  const first2 = tmp12[0];
  closure_7 = tmp12[1];
  const items = [editStateIds, first2];
  const memo = editStateIds.useMemo(() => {
    const mapped = editStateIds.map((item, index) => {
      let tmp = table[item];
      if (tmp == null) {
        tmp = item;
      }
      return tmp;
    });
    return guildId(first[31]).uniq(mapped);
  }, items);
  const layoutEffect = editStateIds.useLayoutEffect(() => {
    navigation.setOptions({
      headerTitle() {
        const obj = { title: null, subtitle: null };
        const intl = callback(1236).intl;
        obj[0] = intl.string(callback(1236).t.pXbGYc);
        const intl2 = callback(1236).intl;
        obj[1] = intl2.string(callback(1236).t["KzCF/6"]);
        return callback2(callback(6314).NavigatorHeader, obj);
      }
    });
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
  let id;
  if (first != null) {
    id = first.id;
  }
  items1[3] = id;
  callback = editStateIds.useCallback(() => {
    if (guildEligibleForTierTemplates) {
      let tmpResult = guildEligibleForTierTemplates(first[33]);
      let obj = { guildId: null, groupListingId: null };
      obj[0] = guildId;
      let id;
      if (first != null) {
        id = first.id;
      }
      obj[1] = id;
      const result = tmpResult.pushTierTemplateSelectionScene(navigation, obj);
    } else {
      tmpResult = guildEligibleForTierTemplates(first[34]);
      obj = { guildId: null, groupListingId: null, onAfterTierCreation: null };
      obj[0] = guildId;
      let id1;
      if (first != null) {
        id1 = first.id;
      }
      obj[1] = id1;
      obj[2] = function onAfterTierCreation() {
        navigation.navigate(closure_1_14.ROLE_SUBSCRIPTIONS_TIERS);
      };
      const result1 = tmpResult.openTierCreationModal(obj);
    }
  }, items1);
  const tmp4 = navigation(first[25])();
  const items2 = [stateFromStores];
  stateFromStores = guildId(first[20]).useStateFromStores(items2, () => stateFromStores.getProps().subsection);
  const items3 = [stateFromStores, callback];
  const effect = obj6.useEffect(() => {
    if (stateFromStores === closure_1_15.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
      callback();
    }
  }, items3);
  if (groupListingsFetchContext) {
    let mapped;
    if (memo != null) {
      mapped = memo.map((item, index) => {
        closure_0 = item;
        return closure_1_17(EditListingButton, {
          editStateId: item,
          guildId: closure_0,
          groupListingId: first1,
          onPress() {
            const guild = closure_1_10.getGuild(closure_0);
            navigation(first[35])(null != guild, "guild must not be null");
            let obj = guildEligibleForTierTemplates(first[33]);
            let id;
            if (first != null) {
              id = first.id;
            }
            obj = {
              groupListingId: id,
              initialEditStateId: closure_0,
              onBeforeDispatchNewListing(id) {
                id = id.id;
                closure_1 = id;
                closure_1_7((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = id;
                  return obj;
                });
              }
            };
            obj.pushTierEditScene(navigation, obj);
          }
        }, item);
      });
    }
    obj = { style: null, children: null };
    obj[0] = tmp.container;
    obj = { style: null, children: null };
    obj1 = { paddingBottom: null };
    obj1[0] = navigation(first[24])().bottom;
    obj[0] = obj1;
    obj2 = { style: null, children: null };
    obj2[0] = tmp4.header;
    let tmp2Result = tmp2(tmp3[36]);
    let intl = tmp5(tmp3[15]).intl;
    obj2[1] = intl.string(tmp5(tmp3[15]).t["7iBIoO"]);
    const items4 = [callback2(tmp2Result, obj2), , , ];
    obj3 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj3[0] = tmp.tierManagementDescription;
    let intl2 = tmp5(tmp3[15]).intl;
    obj4 = { maxTiers: null };
    obj4[0] = MAX_SUBSCRIPTION_TIERS;
    obj3[3] = intl2.format(tmp5(tmp3[15]).t.nHRSvM, obj4);
    items4[1] = callback2(tmp5(tmp3[18]).Text, obj3);
    items4[2] = mapped;
    obj5 = { onPress: null, disabled: null, children: null };
    obj5[0] = callback;
    obj5[1] = roleSubscriptionSettingsDisabled;
    obj6 = { source: null };
    tmp2Result = tmp2(tmp3[22]);
    obj6[0] = tmp2(tmp3[37]);
    const items5 = [callback2(tmp2Result, obj6), ];
    const obj7 = { style: null, variant: "text-md/medium", color: "mobile-text-heading-primary", children: null };
    obj7[0] = tmp.createTierLabel;
    const intl3 = tmp5(tmp3[15]).intl;
    obj7[3] = intl3.string(tmp5(tmp3[15]).t.PiFnny);
    items5[1] = callback2(tmp5(tmp3[18]).Text, obj7);
    obj5[2] = items5;
    items4[3] = callback3(Row, obj5);
    obj[1] = items4;
    obj[1] = callback3(closure_7, obj);
    return callback2(callback, obj);
  } else {
    const obj8 = { style: null, children: null };
    obj8[0] = tmp.spinner;
    obj8[1] = callback2(first2, {});
    return callback2(closure_7, obj8);
  }
  const tmp5Result = guildId(first[20]);
}
({ ActivityIndicator: closure_6, View: error, ScrollView: closure_8 } = get_ActivityIndicator);
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = ME);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createCacheKey = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: ThemesDefault.radii.sm, flexDirection: "row", alignItems: "center", alignSelf: "stretch", justifyContent: "flex-start", height: 72, padding: 16, marginHorizontal: 16, marginBottom: 8 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 };
createCacheKey[4] = { backgroundColor: ThemesDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, marginEnd: 12, height: 40, width: 40 };
createCacheKey[5] = { marginStart: 6 };
createCacheKey[6] = { backgroundColor: ThemesDefault.unsafe_rawColors.YELLOW_300, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 4 };
createCacheKey[7] = { color: ThemesDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
createCacheKey[8] = { backgroundColor: ThemesDefault.unsafe_rawColors.PRIMARY_500, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 4 };
createCacheKey[9] = { textTransform: "uppercase" };
createCacheKey[10] = { backgroundColor: ThemesDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: ThemesDefault.radii.sm, paddingHorizontal: 4 };
createCacheKey[11] = { textTransform: "uppercase" };
createCacheKey[12] = { flexDirection: "row", alignItems: "center", marginTop: 3 };
createCacheKey[13] = { marginStart: 12 };
createCacheKey[14] = { marginTop: 12 };
createCacheKey[15] = { opacity: 0.5 };
let closure_19 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default function GuildSettingsRoleSubscriptionsTiers(guildId) {
  guildId = guildId.guildId;
  const obj = { guildId, children: callback2(GuildSettingsRoleSubscriptionsTiersInner, { guildId }) };
  return callback2(ApplicationRejectedNoticeDefault, obj);
};