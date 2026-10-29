// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
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
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const MAX_SUBSCRIPTION_TIERS = fn(17071).MAX_SUBSCRIPTION_TIERS;
const Constants = fn(1084);
({ GuildSettingsSections: map1, GuildSettingsSubsections: closure_14 } = Constants);
const jsxProd = fn(21);
({ jsx: closure_15, jsxs: closure_16 } = jsxProd);
const createStyles = fn(5005);
let obj2 = {
  container: { height: "100%" },
  content: { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingTop: nativeDefault.space.PX_16 },
  tierIcon: null,
  tierPrice: null,
  tierPriceWithoutBadge: null,
  draftBadge: null,
  draftBadgeLabel: null,
  archiveBadge: null,
  archiveBadgeLabel: null,
  unsavedBadge: null,
  unsavedBadgeLabel: null,
  detailsRow: null,
  spinner: null,
};
let size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, height: 40, width: 40 };
obj2.tierIcon = size;
obj2.tierPrice = { marginStart: 6 };
obj2.tierPriceWithoutBadge = { marginStart: 0 };
let obj3 = { paddingHorizontal: nativeDefault.modules.mobile.TABLE_ROW_PADDING, paddingTop: nativeDefault.space.PX_16 };
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
obj2.detailsRow = { flexDirection: "row", alignItems: "center" };
obj2.spinner = { marginTop: 12 };
let closure_17 = createStyles.createStyles(obj2);
let ReactCompilerGating = fn(558);
let closure_18 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DraftBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_17();
      ({ draftBadge, draftBadgeLabel } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.vosPk5);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.draftBadgeLabel) {
        const obj2 = { style: draftBadgeLabel, variant: "text-xs/semibold", children: first };
        const tmp9 = value2(Text_Text.Text, obj2);
        cResult[1] = tmp4.draftBadgeLabel;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.draftBadge) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = value2(React5, { style: draftBadge, children: tmp7 });
      cResult[3] = tmp4.draftBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function DraftBadge() {
      const tmp = closure_17();
      const obj = { style: tmp.draftBadge, children: null };
      const obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.vosPk5);
      obj.children = value2(Text_Text.Text, obj2);
      return value2(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_19 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ArchivedBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_17();
      ({ archiveBadge, archiveBadgeLabel } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.nhbtEl);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.archiveBadgeLabel) {
        const obj2 = {
          style: archiveBadgeLabel,
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          children: first,
        };
        const tmp9 = value2(Text_Text.Text, obj2);
        cResult[1] = tmp4.archiveBadgeLabel;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.archiveBadge) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = value2(React5, { style: archiveBadge, children: tmp7 });
      cResult[3] = tmp4.archiveBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function ArchivedBadge() {
      const tmp = closure_17();
      const obj = { style: tmp.archiveBadge, children: null };
      const obj2 = {
        style: tmp.archiveBadgeLabel,
        variant: "text-xs/semibold",
        color: "text-overlay-light",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.nhbtEl);
      obj.children = value2(Text_Text.Text, obj2);
      return value2(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_20 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UnsavedBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_17();
      ({ unsavedBadge, unsavedBadgeLabel } = tmp4);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.aiwXeq);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== tmp4.unsavedBadgeLabel) {
        const obj2 = {
          style: unsavedBadgeLabel,
          variant: "text-xs/semibold",
          color: "text-overlay-light",
          children: first,
        };
        const tmp9 = value2(Text_Text.Text, obj2);
        cResult[1] = tmp4.unsavedBadgeLabel;
        cResult[2] = tmp9;
        let tmp7 = tmp9;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === tmp4.unsavedBadge) {
        if (cResult[4] === tmp7) {
          let tmp10 = cResult[5];
        }
        return tmp10;
      }
      const tmp11 = value2(React5, { style: unsavedBadge, children: tmp7 });
      cResult[3] = tmp4.unsavedBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function UnsavedBadge() {
      const tmp = closure_17();
      const obj = { style: tmp.unsavedBadge, children: null };
      const obj2 = {
        style: tmp.unsavedBadgeLabel,
        variant: "text-xs/semibold",
        color: "text-overlay-light",
        children: null,
      };
      const intl = util.intl;
      obj2.children = intl.string(util.t.aiwXeq);
      obj.children = value2(Text_Text.Text, obj2);
      return value2(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditListingButton(editStateId) {
      const cResult = editStateId(576).c(37);
      editStateId = editStateId.editStateId;
      const guildId = editStateId.guildId;
      const groupListingId = editStateId.groupListingId;
      const onPress = editStateId.onPress;
      let tierIcon = closure_17();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== editStateId) {
        const fn = function s() {
          return GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId);
        };
        cResult[1] = editStateId;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = editStateId(576);
      const stateFromStores = editStateId(573).useStateFromStores(first, tmp6);
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
      let tmp8 = !flag2;
      if (!flag2) {
        tmp8 = !flag;
      }
      if (tmp8) {
        tmp8 = undefined !== stateFromStores;
      }
      const tmpResult = editStateId(573);
      const first1 = _slicedToArray(groupListingId(17093).useName(editStateId), 1)[0];
      const obj3 = groupListingId(17093);
      const first2 = _slicedToArray(groupListingId(17093).usePriceTier(editStateId), 1)[0];
      const obj4 = groupListingId(17093);
      const first3 = _slicedToArray(groupListingId(17093).useImage(editStateId, 250), 1)[0];
      if (stateFromStores != null) {
        const first4 = stateFromStores.subscription_plans[0];
      }
      if (cResult[3] === first2) {
        if (cResult[4] === first4) {
          let str = cResult[5];
        }
        if (cResult[6] !== tmp8) {
          let tmp16 = tmp8;
          if (tmp8) {
            tmp16 = closure_15(closure_18, {});
          }
          cResult[6] = tmp8;
          cResult[7] = tmp16;
          let tmp15 = tmp16;
        } else {
          tmp15 = cResult[7];
        }
        if (cResult[8] !== flag2) {
          let tmp20 = flag2;
          if (flag2) {
            tmp20 = closure_15(closure_19, {});
          }
          cResult[8] = flag2;
          cResult[9] = tmp20;
          let tmp19 = tmp20;
        } else {
          tmp19 = cResult[9];
        }
        if (cResult[10] !== (undefined === stateFromStores)) {
          let tmp25 = tmp23;
          if (tmp23) {
            tmp25 = closure_15(closure_20, {});
          }
          cResult[10] = tmp23;
          cResult[11] = tmp25;
          let tmp24 = tmp25;
        } else {
          tmp24 = cResult[11];
        }
        if (!tmp8) {
          tmp8 = flag2;
        }
        if (!tmp8) {
          tmp8 = tmp23;
        }
        let tierPriceWithoutBadge = !tmp8;
        if (!tmp8) {
          tierPriceWithoutBadge = tierIcon.tierPriceWithoutBadge;
        }
        if (cResult[12] === tierIcon.tierPrice) {
          if (cResult[13] === tierPriceWithoutBadge) {
            let tmp28 = cResult[14];
          }
          if (cResult[15] === str) {
            if (cResult[16] === tmp28) {
              let tmp29 = cResult[17];
            }
            if (cResult[18] === tierIcon.detailsRow) {
              if (cResult[19] === tmp15) {
                if (cResult[20] === tmp19) {
                  if (cResult[21] === tmp24) {
                    if (cResult[22] === tmp29) {
                      let tmp32 = cResult[23];
                    }
                    if (cResult[24] === first3) {
                      if (cResult[25] === tierIcon.tierIcon) {
                        if (cResult[27] === editStateId) {
                          if (cResult[28] === groupListingId) {
                            if (cResult[29] === guildId) {
                              let tmp42 = cResult[30];
                            }
                            if (cResult[31] === first1) {
                              if (cResult[32] === onPress) {
                                if (cResult[33] === tmp32) {
                                  if (cResult[34] === tmp36) {
                                    if (cResult[35] === tmp42) {
                                      let tmp43 = cResult[36];
                                    }
                                    return tmp43;
                                  }
                                }
                              }
                            }
                            const obj2 = {
                              label: first1,
                              subLabel: tmp32,
                              icon: tmp36,
                              arrow: true,
                              onPress,
                              onLongPress: tmp42,
                            };
                            const tmp45 = closure_15(tmp(6963).TableRow, obj2);
                            cResult[31] = first1;
                            cResult[32] = onPress;
                            cResult[33] = tmp32;
                            cResult[34] = tmp36;
                            cResult[35] = tmp42;
                            cResult[36] = tmp45;
                            tmp43 = tmp45;
                          }
                        }
                        const fn2 = function q() {
                          ActionSheetActionCreatorsDefault.openLazy(
                            asyncRequireImpl(19827, dependencyMap.paths),
                            "TierArchiveOrDelete",
                            { editStateId, guildId, groupListingId },
                          );
                        };
                        cResult[27] = editStateId;
                        cResult[28] = groupListingId;
                        cResult[29] = guildId;
                        cResult[30] = fn2;
                        tmp42 = fn2;
                      }
                    }
                    if (null != first3) {
                      const obj6 = { style: tierIcon.tierIcon, resizeMode: "cover", source: null };
                      const obj7 = { uri: first3 };
                      obj6.source = obj7;
                      let tmp38 = closure_15(guildId(5707), obj6);
                    } else {
                      const obj8 = { IconComponent: tmp(11096).TagsIcon };
                      tmp38 = closure_15(tmp(6963).TableRow.Icon, obj8);
                    }
                    cResult[24] = first3;
                    tierIcon = tierIcon.tierIcon;
                    cResult[25] = tierIcon;
                    cResult[26] = tmp38;
                  }
                }
              }
            }
            const obj9 = { style: tierIcon.detailsRow, children: null };
            const items1 = [tmp15, tmp19, tmp24, tmp29];
            obj9.children = items1;
            const tmp35 = closure_16(closure_7, obj9);
            cResult[18] = tierIcon.detailsRow;
            cResult[19] = tmp15;
            cResult[20] = tmp19;
            cResult[21] = tmp24;
            cResult[22] = tmp29;
            cResult[23] = tmp35;
            tmp32 = tmp35;
          }
          const obj10 = { style: tmp28, variant: "text-sm/medium", color: "interactive-text-default", children: str };
          const tmp31 = closure_15(tmp(5271).Text, obj10);
          cResult[15] = str;
          cResult[16] = tmp28;
          cResult[17] = tmp31;
          tmp29 = tmp31;
        }
        const items2 = [tierIcon.tierPrice, tierPriceWithoutBadge];
        cResult[12] = tierIcon.tierPrice;
        cResult[13] = tierPriceWithoutBadge;
        cResult[14] = items2;
        tmp28 = items2;
      }
      if (undefined === first2) {
        cResult[3] = first2;
        cResult[4] = first4;
        cResult[5] = "";
        str = "";
      } else if (null != first4) {
        const intl = tmp(1125).intl;
        const obj11 = { price: tmp(7399).formatPrice(first2, first4.currency), interval: null };
        const tmpResult4 = tmp(7399);
        obj11.interval = tmp(17097).formatPlanInterval(first4);
        let formatToPlainStringResult = intl.formatToPlainString(tmp(1125).t.CgmBaG, obj11);
        const tmpResult5 = tmp(17097);
      } else {
        formatToPlainStringResult = tmp(17097).formatMonthlyPriceLabel(first2);
        const tmpResult6 = tmp(17097);
      }
      const obj5 = groupListingId(17093);
    }
  : function EditListingButton(editStateId) {
      editStateId = editStateId.editStateId;
      ({ guildId: importDefault, groupListingId: importAll } = editStateId);
      const tmp = closure_17();
      const items = [GuildRoleSubscriptionsStore];
      const stateFromStores = editStateId(573).useStateFromStores(items, () =>
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
      let tmp5 = !flag2;
      if (!flag2) {
        tmp5 = !flag;
      }
      if (tmp5) {
        tmp5 = undefined !== stateFromStores;
      }
      const obj = editStateId(573);
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.usePriceTier(editStateId), 1)[0];
      const first1 = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId, 250), 1)[0];
      if (stateFromStores != null) {
        const first2 = stateFromStores.subscription_plans[0];
      }
      if (undefined === first) {
        const obj5 = {
          label: _slicedToArray(obj2.useName(editStateId), 1)[0],
          subLabel: null,
          icon: null,
          arrow: true,
          onPress: null,
          onLongPress: null,
        };
        const obj6 = { style: tmp.detailsRow, children: null };
        let tmp11Result = tmp5;
        if (tmp5) {
          tmp11Result = closure_15(closure_18, {});
        }
        const items1 = [tmp11Result, , ,];
        let tmp11Result4 = flag2;
        if (flag2) {
          tmp11Result4 = closure_15(closure_19, {});
        }
        items1[1] = tmp11Result4;
        let tmp11Result5 = tmp18;
        if (undefined === stateFromStores) {
          tmp11Result5 = closure_15(closure_20, {});
        }
        items1[2] = tmp11Result5;
        const items2 = [tmp.tierPrice];
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
        items1[3] = closure_15(tmp2(5271).Text, obj7);
        obj6.children = items1;
        obj5.subLabel = closure_16(closure_7, obj6);
        if (null != first1) {
          const obj8 = { style: tmp.tierIcon, resizeMode: "cover", source: null };
          const obj9 = { uri: first1 };
          obj8.source = obj9;
          let tmp11Result6 = closure_15(FastImageDefault, obj8);
        } else {
          const obj10 = { IconComponent: tmp2(11096).TagsIcon };
          tmp11Result6 = closure_15(tmp2(6963).TableRow.Icon, obj10);
        }
        obj5.icon = tmp11Result6;
        obj5.onPress = editStateId.onPress;
        obj5.onLongPress = function onLongPress() {
          ActionSheetActionCreatorsDefault.openLazy(
            asyncRequireImpl(19827, dependencyMap.paths),
            "TierArchiveOrDelete",
            { editStateId, guildId, groupListingId },
          );
        };
        return closure_15(tmp2(6963).TableRow, obj5);
      } else if (null != first2) {
        const intl = tmp2(1125).intl;
        const obj11 = { price: tmp2(7399).formatPrice(first, first2.currency), interval: null };
        const tmp2Result = tmp2(7399);
        obj11.interval = tmp2(17097).formatPlanInterval(first2);
        let formatToPlainStringResult = intl.formatToPlainString(tmp2(1125).t.CgmBaG, obj11);
        const tmp2Result3 = tmp2(17097);
      } else {
        formatToPlainStringResult = tmp2(17097).formatMonthlyPriceLabel(first);
        const tmp2Result4 = tmp2(17097);
      }
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
      const cResult = guildId(first[18]).c(58);
      guildId = guildId.guildId;
      closure_17();
      const bottom = navigation(first[25])().bottom;
      let obj = guildId(first[18]);
      let tmp = guildId;
      navigation = guildId(first[26]).useNavigation();
      let obj2 = guildId(first[26]);
      const groupListingsFetchContext = guildId(first[27]).useGroupListingsFetchContext();
      const obj3 = guildId(first[27]);
      const roleSubscriptionSettingsDisabled = guildId(first[28]).useRoleSubscriptionSettingsDisabled();
      const obj4 = guildId(first[28]);
      const guildEligibleForTierTemplates = guildId(first[29]).useGuildEligibleForTierTemplates(guildId);
      const obj5 = guildId(first[29]);
      const groupListingsForGuild = guildId(first[30]).useGroupListingsForGuild(guildId);
      first = groupListingsForGuild[0];
      if (cResult[0] !== groupListingsForGuild) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function h(id) {
            return id.id;
          };
          cResult[2] = fn;
          let tmp11 = fn;
        } else {
          tmp11 = cResult[2];
        }
        const mapped = groupListingsForGuild.map(tmp11);
        cResult[0] = groupListingsForGuild;
        cResult[1] = mapped;
      } else {
        const first1 = cResult[1][0];
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { includeSoftDeleted: true };
          cResult[3] = obj7;
          let tmp16 = obj7;
        } else {
          tmp16 = cResult[3];
        }
        const editStateIds = guildEligibleForTierTemplates(tmp2[21]).useEditStateIds(
          first1,
          guildId,
          tmp16,
        ).editStateIds;
        const _Symbol3 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = {};
          cResult[4] = obj9;
          let tmp18 = obj9;
        } else {
          tmp18 = cResult[4];
        }
        const tmp20 = first1(first2.useState(tmp18), 2);
        first2 = tmp20[0];
        closure_6 = tmp20[1];
        if (cResult[5] === editStateIds) {
          if (cResult[6] === first2) {
            const _Symbol4 = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              function handleListingCreated(arg0, arg1) {
                closure_0 = arg0;
                closure_1 = arg1;
                closure_6((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = closure_0;
                  return obj;
                });
              }
              cResult[10] = handleListingCreated;
              let tmp27 = handleListingCreated;
            } else {
              tmp27 = cResult[10];
            }
            closure_7 = tmp27;
            if (cResult[11] !== navigation) {
              class K {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1125).intl;
                      obj.title = intl.string(guildId(1125).t.pXbGYc);
                      const intl2 = guildId(1125).intl;
                      obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                      return closure_1_15(guildId(6984).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
              cResult[11] = navigation;
              cResult[12] = K;
            } else {
              class K {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1125).intl;
                      obj.title = intl.string(guildId(1125).t.pXbGYc);
                      const intl2 = guildId(1125).intl;
                      obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                      return closure_1_15(guildId(6984).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            const layoutEffect = obj10.useLayoutEffect(K);
            if (first != null) {
              class K {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1125).intl;
                      obj.title = intl.string(guildId(1125).t.pXbGYc);
                      const intl2 = guildId(1125).intl;
                      obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                      return closure_1_15(guildId(6984).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            if (cResult[13] === undefined) {
              class K {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1125).intl;
                      obj.title = intl.string(guildId(1125).t.pXbGYc);
                      const intl2 = guildId(1125).intl;
                      obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                      return closure_1_15(guildId(6984).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            if (first != null) {
              class K {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1125).intl;
                      obj.title = intl.string(guildId(1125).t.pXbGYc);
                      const intl2 = guildId(1125).intl;
                      obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                      return closure_1_15(guildId(6984).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            const fn2 = function j() {
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
            };
            cResult[13] = undefined;
            cResult[14] = guildId;
            cResult[15] = guildEligibleForTierTemplates;
            cResult[16] = navigation;
            cResult[17] = fn2;
          }
        }
        if (cResult[8] !== first2) {
          class K {
            constructor() {
              obj = {
                headerTitle() {
                  const obj = { title: null, subtitle: null };
                  const intl = guildId(1125).intl;
                  obj.title = intl.string(guildId(1125).t.pXbGYc);
                  const intl2 = guildId(1125).intl;
                  obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                  return closure_1_15(guildId(6984).NavigatorHeader, obj);
                },
              };
              setOptionsResult = closure_1.setOptions(obj);
              return;
            }
          }
          cResult[8] = first2;
          cResult[9] = X;
        } else {
          class K {
            constructor() {
              obj = {
                headerTitle() {
                  const obj = { title: null, subtitle: null };
                  const intl = guildId(1125).intl;
                  obj.title = intl.string(guildId(1125).t.pXbGYc);
                  const intl2 = guildId(1125).intl;
                  obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
                  return closure_1_15(guildId(6984).NavigatorHeader, obj);
                },
              };
              setOptionsResult = closure_1.setOptions(obj);
              return;
            }
          }
        }
        const mapped1 = editStateIds.map(X);
        obj10 = first2;
        const obj8 = guildEligibleForTierTemplates(tmp2[21]);
        const uniqResult = tmp(tmp2[31]).uniq(mapped1);
        cResult[5] = editStateIds;
        cResult[6] = first2;
        cResult[7] = uniqResult;
        let tmpResult = tmp(tmp2[31]);
      }
      const obj6 = guildId(first[30]);
    }
  : function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
      guildId = guildId.guildId;
      let first;
      let onPress;
      let stateFromStores;
      let tmp = closure_17();
      const navigation = guildId(first[26]).useNavigation();
      let obj = guildId(first[26]);
      const tmp2 = navigation;
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
            const intl = guildId(1125).intl;
            obj.title = intl.string(guildId(1125).t.pXbGYc);
            const intl2 = guildId(1125).intl;
            obj.subtitle = intl2.string(guildId(1125).t["KzCF/6"]);
            return closure_1_15(guildId(6984).NavigatorHeader, obj);
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
        if (stateFromStores === constants.ROLE_SUBSCRIPTION_TIER_TEMPLATE) {
          callback();
        }
      }, items3);
      if (groupListingsFetchContext) {
        let mapped;
        if (memo != null) {
          mapped = memo.map((editStateId) => {
            guildId = editStateId;
            return closure_1_15(
              closure_1_21,
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
                  guildEligibleForTierTemplates(19829).pushTierEditScene(navigation, {
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
                  let obj = guildEligibleForTierTemplates(19829);
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
        const items4 = [tmp.content];
        const obj10 = { paddingBottom: navigation(first[25])().bottom };
        items4[1] = obj10;
        obj9.style = items4;
        const obj11 = { title: null, description: null, hasIcons: true, children: null };
        let intl = tmp4(tmp3[14]).intl;
        obj11.title = intl.string(tmp4(tmp3[14]).t["7iBIoO"]);
        let intl2 = tmp4(tmp3[14]).intl;
        const obj12 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
        obj11.description = intl2.format(tmp4(tmp3[14]).t.nHRSvM, obj12);
        const items5 = [mapped];
        const obj13 = { label: null, icon: null, onPress: null, disabled: null };
        const intl3 = tmp4(tmp3[14]).intl;
        obj13.label = intl3.string(tmp4(tmp3[14]).t.PiFnny);
        const obj14 = { size: "md", color: tmp2(tmp3[10]).colors.ICON_BRAND };
        obj13.icon = closure_15(tmp4(tmp3[36]).CirclePlusIcon, obj14);
        obj13.onPress = onPress;
        obj13.disabled = roleSubscriptionSettingsDisabled;
        items5[1] = closure_15(tmp4(tmp3[23]).TableRow, obj13);
        obj11.children = items5;
        obj9.children = closure_16(tmp4(tmp3[37]).TableRowGroup, obj11);
        obj8.children = closure_15(closure_7, obj9);
        return closure_15(onPress, obj8);
      } else {
        const obj15 = { style: tmp.spinner, children: closure_15(first2, {}) };
        return closure_15(closure_7, obj15);
      }
      const tmp4Result = guildId(first[20]);
    };
ReactCompilerGating = fn(558);
let obj7 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED,
  borderRadius: nativeDefault.radii.sm,
  paddingHorizontal: 4,
};
size = fn(2);
let result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscriptionsTiers(guildId) {
      const cResult = c.c(5);
      guildId = guildId.guildId;
      if (cResult[0] !== guildId) {
        const obj2 = { guildId };
        const tmp6 = value2(closure_22, obj2);
        cResult[0] = guildId;
        cResult[1] = tmp6;
        let tmp3 = tmp6;
      } else {
        tmp3 = cResult[1];
      }
      if (cResult[2] === guildId) {
        if (cResult[3] === tmp3) {
          let tmp7 = cResult[4];
        }
        return tmp7;
      }
      const tmp8 = value2(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
      cResult[2] = guildId;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function GuildSettingsRoleSubscriptionsTiers(guildId) {
      guildId = guildId.guildId;
      const obj = { guildId, children: value2(closure_22, { guildId }) };
      return value2(GuildSettingsRoleSubscriptionContainerDefault, obj);
    };
