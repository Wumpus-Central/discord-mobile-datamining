// === Module 17930: GuildSettingsRoleSubscriptionTiers ===

// Module 17930 (GuildSettingsRoleSubscriptionTiers)
import _mod12 from "module_12" /* 12 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import asyncRequire from "asyncRequire" /* 1987 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4854 */;
import Text_Text from "Text/Text" /* 4886 */;
import FastImageDefault from "FastImage" /* 5974 */;
import PriceUtils from "PriceUtils" /* 6736 */;
import TouchableHitBoxDefault from "TouchableHitBox" /* 9442 */;
import GuildRoleSubscriptionsConstants from "GuildRoleSubscriptionsConstants" /* 15023 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15045 */;
import GuildRoleSubscriptionTypeUtils from "GuildRoleSubscriptionTypeUtils" /* 15049 */;
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer" /* 17929 */;
import GuildRoleSettingsActionCreatorsAll from "GuildRoleSettingsActionCreators" /* 17933 */;
import GuildRoleSubscriptionsActionCreatorExtrasAll from "GuildRoleSubscriptionsActionCreatorExtras" /* 17934 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildRoleSubscriptionsStore from "GuildRoleSubscriptionsStore" /* 4502 */;
import Constants from "Constants" /* 1085 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let editStateId, guild, navigation;

let closure_14;
let closure_15;
let closure_17;
let closure_18;
let map1;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let size;
function getPriceText(first1, first3) {
  let obj2;
  let obj3;
  let obj5;
  let obj6;
  let obj7;
  let str = "";
  if (undefined !== first1) {
    let formatToPlainStringResult;
    if (null != first3) {
      const intl = intl4.intl;
      const formatToPlainString = intl.formatToPlainString;
      const obj = { price: obj2.formatPrice(first1, first3.currency), interval: obj3.formatPlanInterval(first3) };
      const CgmBaG = intl4.t.CgmBaG;
      obj2 = PriceUtils;
      obj3 = GuildRoleSubscriptionTypeUtils;
      formatToPlainStringResult = formatToPlainString(CgmBaG, obj);
    } else {
      const intl2 = intl4.intl;
      const formatToPlainString2 = intl2.formatToPlainString;
      const obj4 = { price: obj5.formatPrice(first1, map1.USD), interval: obj6.formatPlanInterval(obj7) };
      const CgmBaG2 = intl4.t.CgmBaG;
      obj5 = PriceUtils;
      obj7 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
      obj6 = GuildRoleSubscriptionTypeUtils;
      formatToPlainStringResult = formatToPlainString2(CgmBaG2, obj4);
    }
    str = formatToPlainStringResult;
  }
  return str;
}
({ ActivityIndicator: metroRequire, View: metroImportDefault, ScrollView: metroImportAll } = react_native);
const MAX_SUBSCRIPTION_TIERS = GuildRoleSubscriptionsConstants.MAX_SUBSCRIPTION_TIERS;
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = Constants);
const SubscriptionIntervalTypes = PremiumConstants.SubscriptionIntervalTypes;
({ jsx: closure_17, jsxs: closure_18 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: { height: "100%" }, tierManagementDescription: { marginBottom: 16, paddingHorizontal: 16 }, tierManagementButton: obj2, tierColumn: { flexDirection: "column", justifyContent: "center", alignItems: "flex-start", flex: 1 }, tierIcon: size, tierPrice: { marginStart: 6 }, draftBadge: obj3, draftBadgeLabel: obj4, archiveBadge: obj5, archiveBadgeLabel: { textTransform: "uppercase" }, unsavedBadge: obj6, unsavedBadgeLabel: { textTransform: "uppercase" }, detailsRow: { flexDirection: "row", alignItems: "center", marginTop: 3 }, createTierLabel: { marginStart: 12 }, spinner: { marginTop: 12 }, disabled: { opacity: 0.5 } };
obj2 = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: nativeDefault.radii.sm, flexDirection: "row", alignItems: "center", alignSelf: "stretch", justifyContent: "flex-start", height: 72, padding: 16, marginHorizontal: 16, marginBottom: 8 };
createStyles = createStyles.createStyles;
size = { backgroundColor: nativeDefault.colors.BACKGROUND_SURFACE_HIGH, borderRadius: 20, marginEnd: 12, height: 40, width: 40 };
obj3 = { backgroundColor: nativeDefault.unsafe_rawColors.YELLOW_300, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj4 = { color: nativeDefault.unsafe_rawColors.PRIMARY_860, textTransform: "uppercase" };
obj5 = { backgroundColor: nativeDefault.unsafe_rawColors.PRIMARY_500, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
obj6 = { backgroundColor: nativeDefault.colors.BACKGROUND_MOD_MUTED, borderRadius: nativeDefault.radii.sm, paddingHorizontal: 4 };
let closure_19 = createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_21 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let draftBadge;
  let draftBadgeLabel;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_19();
  ({ draftBadge, draftBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.vosPk5);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.draftBadgeLabel) {
    const obj2 = { style: draftBadgeLabel, variant: "text-xs/semibold", children: first };
    const tmp9 = closure_17(Text_Text.Text, obj2);
    cResult[1] = tmp4.draftBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.draftBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_17(metroImportDefault, { style: draftBadge, children: tmp7 });
  cResult[3] = tmp4.draftBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.draftBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: intl.string(intl4.t.vosPk5) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_22 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let archiveBadge;
  let archiveBadgeLabel;
  let first;
  let tmp7;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_19();
  ({ archiveBadge, archiveBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.nhbtEl);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.archiveBadgeLabel) {
    const obj2 = { style: archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: first };
    const tmp9 = closure_17(Text_Text.Text, obj2);
    cResult[1] = tmp4.archiveBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.archiveBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_17(metroImportDefault, { style: archiveBadge, children: tmp7 });
  cResult[3] = tmp4.archiveBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.archiveBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.archiveBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.nhbtEl) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_23 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  let unsavedBadge;
  let unsavedBadgeLabel;
  const obj = react2;
  const cResult = obj.c(6);
  const tmp4 = closure_19();
  ({ unsavedBadge, unsavedBadgeLabel } = tmp4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = intl4.intl;
    const stringResult = intl.string(intl4.t.aiwXeq);
    cResult[0] = stringResult;
    first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== tmp4.unsavedBadgeLabel) {
    const obj2 = { style: unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: first };
    const tmp9 = closure_17(Text_Text.Text, obj2);
    cResult[1] = tmp4.unsavedBadgeLabel;
    cResult[2] = tmp9;
    tmp7 = tmp9;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] === tmp4.unsavedBadge) {
    let tmp10;
    if (cResult[4] === tmp7) {
      tmp10 = cResult[5];
    }
    return tmp10;
  }
  const tmp11 = closure_17(metroImportDefault, { style: unsavedBadge, children: tmp7 });
  cResult[3] = tmp4.unsavedBadge;
  cResult[4] = tmp7;
  cResult[5] = tmp11;
  tmp10 = tmp11;
}) : (() => {
  let Text;
  let intl;
  let obj2;
  const tmp = closure_19();
  const obj = { style: tmp.unsavedBadge, children: closure_17(Text, obj2) };
  obj2 = { style: tmp.unsavedBadgeLabel, variant: "text-xs/semibold", color: "text-overlay-light", children: intl.string(intl4.t.aiwXeq) };
  Text = Text_Text.Text;
  intl = intl4.intl;
  return closure_17(metroImportDefault, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_24 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let children;
  let disabled;
  let onLongPress;
  let onPress;
  const obj = react2;
  const cResult = obj.c(9);
  ({ children, onPress, onLongPress, disabled } = arg0);
  const tmp4 = closure_19();
  if (cResult[0] === tmp4.tierManagementButton) {
    let tmp6;
    if (cResult[1] === (undefined !== disabled && disabled && tmp4.disabled)) {
      tmp6 = cResult[2];
    }
    if (cResult[3] === children) {
      if (cResult[4] === (undefined !== disabled && disabled)) {
        if (cResult[5] === onLongPress) {
          if (cResult[6] === onPress) {
            let tmp7;
            if (cResult[7] === tmp6) {
              tmp7 = cResult[8];
            }
            return tmp7;
          }
        }
      }
    }
    const obj2 = { style: tmp6, accessibilityRole: "button", onPress, onLongPress, disabled: undefined !== disabled && disabled, children };
    const tmp10 = closure_17(TouchableHitBoxDefault, obj2);
    cResult[3] = children;
    cResult[4] = undefined !== disabled && disabled;
    cResult[5] = onLongPress;
    cResult[6] = onPress;
    cResult[7] = tmp6;
    cResult[8] = tmp10;
    tmp7 = tmp10;
  }
  const items = [tmp4.tierManagementButton, undefined !== disabled && disabled && tmp4.disabled];
  cResult[0] = tmp4.tierManagementButton;
  cResult[1] = undefined !== disabled && disabled && tmp4.disabled;
  cResult[2] = items;
  tmp6 = items;
}) : ((disabled) => {
  let children;
  let onLongPress;
  let onPress;
  let disabled2 = disabled.disabled;
  ({ children, onPress, onLongPress } = disabled);
  if (disabled2 === undefined) {
    disabled2 = false;
  }
  const tmp = closure_19();
  const style = [tmp.tierManagementButton, ];
  disabled = disabled2;
  const tmp3 = TouchableHitBoxDefault;
  if (disabled2) {
    disabled = tmp.disabled;
  }
  style[1] = disabled;
  return closure_17(tmp3, { style, accessibilityRole: "button", onPress, onLongPress, disabled: disabled2, children });
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_25 = ReactCompilerGating.isReactCompilerEnabled() ? ((editStateId) => {
  let first;
  let items1;
  let items2;
  let items3;
  let obj7;
  let tmp17;
  let tmp7;
  let obj = editStateId(576);
  const cResult = obj.c(40);
  editStateId = editStateId.editStateId;
  const guildId = editStateId.guildId;
  const groupListingId = editStateId.groupListingId;
  const onPress = editStateId.onPress;
  const tmp4 = closure_19();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildRoleSubscriptionsStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== editStateId) {
    const fn = function l() {
      return GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId);
    };
    cResult[1] = editStateId;
    cResult[2] = fn;
    tmp7 = fn;
  } else {
    tmp7 = cResult[2];
  }
  const tmpResult = editStateId(573);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp7);
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
  const obj3 = groupListingId(15045);
  const first1 = _slicedToArray(obj3.useName(editStateId), 1)[0];
  const obj4 = groupListingId(15045);
  const first2 = _slicedToArray(obj4.usePriceTier(editStateId), 1)[0];
  const obj5 = groupListingId(15045);
  const first3 = _slicedToArray(obj5.useImage(editStateId, 250), 1)[0];
  let first4;
  if (stateFromStores != null) {
    first4 = stateFromStores.subscription_plans[0];
  }
  if (cResult[3] === first2) {
    let tmp13;
    if (cResult[4] === first4) {
      tmp13 = cResult[5];
    }
    if (cResult[6] === editStateId) {
      if (cResult[7] === groupListingId) {
        let tmp15;
        if (cResult[8] === guildId) {
          tmp15 = cResult[9];
        }
        if (cResult[10] === first3) {
          let tmp16;
          let tmp21;
          let tmp25;
          let tmp30;
          if (cResult[11] === tmp4.tierIcon) {
            tmp16 = cResult[12];
          }
          if (cResult[13] !== first1) {
            let obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
            class H {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { editStateId, guildId, groupListingId };
                obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
              }
            }
            const tmp23 = closure_17(editStateId(4886).Text, obj2);
            cResult[13] = first1;
            cResult[14] = tmp23;
            tmp21 = tmp23;
          } else {
            tmp21 = cResult[14];
          }
          class H {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { editStateId, guildId, groupListingId };
              obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
            }
          }
          if (cResult[17] !== flag2) {
            if (flag2) {
              class H {
                constructor() {
                  const obj = ActionSheetActionCreatorsDefault;
                  const obj2 = { editStateId, guildId, groupListingId };
                  obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                }
              }
            }
            class H {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { editStateId, guildId, groupListingId };
                obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
              }
            }
            cResult[17] = flag2;
            cResult[18] = flag2;
            tmp25 = tmp26;
          } else {
            tmp25 = cResult[18];
          }
          if (cResult[19] !== (undefined === stateFromStores)) {
            if (undefined === stateFromStores) {
              class H {
                constructor() {
                  const obj = ActionSheetActionCreatorsDefault;
                  const obj2 = { editStateId, guildId, groupListingId };
                  obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                }
              }
            }
            class H {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { editStateId, guildId, groupListingId };
                obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
              }
            }
            cResult[19] = undefined === stateFromStores;
            cResult[20] = undefined === stateFromStores;
            tmp30 = tmp31;
          } else {
            tmp30 = cResult[20];
          }
          if (cResult[21] === tmp13) {
            let tmp34;
            if (cResult[22] === tmp4.tierPrice) {
              tmp34 = cResult[23];
            }
            if (cResult[24] === tmp4.detailsRow) {
              if (cResult[25] === tmp34) {
                if (cResult[26] === tmp24) {
                  if (cResult[27] === tmp25) {
                    let tmp37;
                    if (cResult[28] === tmp30) {
                      tmp37 = cResult[29];
                    }
                    if (cResult[30] === tmp4.tierColumn) {
                      if (cResult[31] === tmp37) {
                        let tmp40;
                        let tmp44;
                        if (cResult[32] === tmp21) {
                          tmp40 = cResult[33];
                        }
                        const _Symbol = Symbol;
                        class H {
                          constructor() {
                            const obj = ActionSheetActionCreatorsDefault;
                            const obj2 = { editStateId, guildId, groupListingId };
                            obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                          }
                        }
                        if (tmp43 === Symbol.for("react.memo_cache_sentinel")) {
                          const tmp46 = closure_17(editStateId(10058).PencilIcon, {});
                          class H {
                            constructor() {
                              const obj = ActionSheetActionCreatorsDefault;
                              const obj2 = { editStateId, guildId, groupListingId };
                              obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                            }
                          }
                          cResult[34] = tmp46;
                          tmp44 = tmp46;
                        } else {
                          tmp44 = cResult[34];
                        }
                        if (cResult[35] === onPress) {
                          if (cResult[36] === tmp40) {
                            if (cResult[37] === tmp15) {
                              let tmp47;
                              if (cResult[38] === tmp16) {
                                tmp47 = cResult[39];
                              }
                              return tmp47;
                            }
                          }
                        }
                        const obj6 = { children: closure_18(closure_24, obj7) };
                        obj7 = { onPress, onLongPress: tmp15, children: items1 };
                        items1 = [tmp16, tmp40, tmp44];
                        const tmp52 = closure_17(closure_7, obj6);
                        cResult[35] = onPress;
                        cResult[36] = tmp40;
                        cResult[37] = tmp15;
                        cResult[38] = tmp16;
                        cResult[39] = tmp52;
                        tmp47 = tmp52;
                      }
                    }
                    class H {
                      constructor() {
                        const obj = ActionSheetActionCreatorsDefault;
                        const obj2 = { editStateId, guildId, groupListingId };
                        obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
                      }
                    }
                    const obj8 = { style: tmp4.tierColumn, children: items2 };
                    items2 = [tmp21, tmp37];
                    const tmp42 = closure_18(closure_7, obj8);
                    cResult[30] = tmp4.tierColumn;
                    cResult[31] = tmp37;
                    cResult[32] = tmp21;
                    cResult[33] = tmp42;
                    tmp40 = tmp42;
                  }
                }
              }
            }
            class H {
              constructor() {
                const obj = ActionSheetActionCreatorsDefault;
                const obj2 = { editStateId, guildId, groupListingId };
                obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
              }
            }
            const obj9 = { style: tmp4.detailsRow, children: items3 };
            items3 = [tmp24, tmp25, tmp30, tmp34];
            const tmp39 = closure_18(closure_7, obj9);
            cResult[24] = tmp4.detailsRow;
            cResult[25] = tmp34;
            cResult[26] = tmp24;
            cResult[27] = tmp25;
            cResult[28] = tmp30;
            cResult[29] = tmp39;
            tmp37 = tmp39;
          }
          const obj10 = { style: tmp4.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: tmp13 };
          const tmp36 = closure_17(editStateId(4886).Text, obj10);
          cResult[21] = tmp13;
          cResult[22] = tmp4.tierPrice;
          cResult[23] = tmp36;
          tmp34 = tmp36;
        }
        class H {
          constructor() {
            const obj = ActionSheetActionCreatorsDefault;
            const obj2 = { editStateId, guildId, groupListingId };
            obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
          }
        }
        if (tmp17) {
          class H {
            constructor() {
              const obj = ActionSheetActionCreatorsDefault;
              const obj2 = { editStateId, guildId, groupListingId };
              obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
            }
          }
          tmp20[0] = tmp4.tierIcon;
          const obj11 = { uri: first3 };
          tmp20[2] = obj11;
          tmp17 = closure_17(guildId(5974), tmp20);
        }
        cResult[10] = first3;
        cResult[11] = tmp4.tierIcon;
        cResult[12] = tmp17;
        tmp16 = tmp17;
      }
    }
    class H {
      constructor() {
        const obj = ActionSheetActionCreatorsDefault;
        const obj2 = { editStateId, guildId, groupListingId };
        obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
      }
    }
    cResult[6] = editStateId;
    cResult[7] = groupListingId;
    cResult[8] = guildId;
    cResult[9] = H;
    tmp15 = H;
  }
  const tmp14 = getPriceText(first2, first4);
  cResult[3] = first2;
  cResult[4] = first4;
  cResult[5] = tmp14;
  tmp13 = tmp14;
}) : ((editStateId) => {
  let groupListingId;
  let guildId;
  let items1;
  let items2;
  let items3;
  let obj7;
  editStateId = editStateId.editStateId;
  ({ guildId: importDefault, groupListingId: importAll } = editStateId);
  const onPress = editStateId.onPress;
  const tmp = closure_19();
  let obj = editStateId(573);
  const items = [GuildRoleSubscriptionsStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId));
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
  let tmp11Result3 = !flag2 && !flag && undefined !== stateFromStores;
  let obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first = _slicedToArray(obj2.useName(editStateId), 1)[0];
  const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first1 = _slicedToArray(obj3.usePriceTier(editStateId), 1)[0];
  const obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
  const first2 = _slicedToArray(obj4.useImage(editStateId, 250), 1)[0];
  let first3;
  if (stateFromStores != null) {
    first3 = stateFromStores.subscription_plans[0];
  }
  let tmp11Result = null != first2;
  const obj5 = {
    onPress,
    onLongPress() {
      const obj = ActionSheetActionCreatorsDefault;
      const obj2 = { editStateId, guildId: importDefault, groupListingId: importAll };
      obj.openLazy(asyncRequire(17931, dependencyMap.paths), "TierArchiveOrDelete", obj2);
    },
    children: items1
  };
  const tmp10 = getPriceText(first1, first3);
  if (tmp11Result) {
    const obj6 = { style: tmp.tierIcon, resizeMode: "cover", source: obj7 };
    obj7 = { uri: first2 };
    tmp11Result = closure_17(FastImageDefault, obj6);
  }
  items1 = [tmp11Result, , ];
  const obj8 = { style: tmp.tierColumn, children: items2 };
  items2 = [closure_17(editStateId(4886).Text, { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: first }), ];
  const obj9 = { style: tmp.detailsRow, children: items3 };
  if (tmp11Result3) {
    tmp11Result3 = closure_17(closure_21, {});
  }
  items3 = [tmp11Result3, , , ];
  if (flag2) {
    flag2 = closure_17(closure_22, {});
  }
  let tmp11Result4 = undefined === stateFromStores;
  items3[1] = flag2;
  if (tmp11Result4) {
    tmp11Result4 = closure_17(closure_23, {});
  }
  items3[2] = tmp11Result4;
  const obj10 = { children: closure_18(closure_24, obj5) };
  const obj11 = { style: tmp.tierPrice, variant: "text-sm/medium", color: "interactive-text-default", children: tmp10 };
  items3[3] = closure_17(editStateId(4886).Text, obj11);
  items2[1] = closure_18(closure_7, obj9);
  items1[1] = closure_18(closure_7, obj8);
  items1[2] = closure_17(editStateId(10058).PencilIcon, {});
  return closure_17(closure_7, obj10);
});
ReactCompilerGating = ReactCompilerGating_mod;
let closure_26 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let first;
  let first2;
  let props;
  let tmp11;
  let tmp16;
  let tmp17;
  let tmp = guildId;
  let obj = guildId(first[19]);
  const cResult = obj.c(62);
  guildId = guildId.guildId;
  closure_19();
  const bottom = navigation(first[26])().bottom;
  navigation(first[27])();
  let obj2 = guildId(first[28]);
  navigation = obj2.useNavigation();
  const obj3 = guildId(first[29]);
  const groupListingsFetchContext = obj3.useGroupListingsFetchContext();
  const obj4 = guildId(first[30]);
  const roleSubscriptionSettingsDisabled = obj4.useRoleSubscriptionSettingsDisabled();
  const obj5 = guildId(first[31]);
  const guildEligibleForTierTemplates = obj5.useGuildEligibleForTierTemplates(guildId);
  const obj6 = guildId(first[32]);
  const groupListingsForGuild = obj6.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  if (cResult[0] !== groupListingsForGuild) {
    let tmp13;
    const _Symbol = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const fn = function p(id) {
        return id.id;
      };
      cResult[2] = fn;
      tmp13 = fn;
    } else {
      tmp13 = cResult[2];
    }
    const mapped = groupListingsForGuild.map(tmp13);
    cResult[0] = groupListingsForGuild;
    cResult[1] = mapped;
    tmp11 = mapped;
  } else {
    tmp11 = cResult[1];
  }
  const first1 = tmp11[0];
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { includeSoftDeleted: true };
    cResult[3] = obj7;
    tmp16 = obj7;
  } else {
    tmp16 = cResult[3];
  }
  const obj8 = guildEligibleForTierTemplates(first[23]);
  const editStateIds = obj8.useEditStateIds(first1, guildId, tmp16).editStateIds;
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = {};
    cResult[4] = obj9;
    tmp17 = obj9;
  } else {
    tmp17 = cResult[4];
  }
  const tmp18 = first1(first2.useState(tmp17), 2);
  const obj10 = first2;
  first2 = tmp18[0];
  let closure_6 = tmp18[1];
  if (cResult[5] === editStateIds) {
    let tmp24;
    const _Symbol2 = Symbol;
    if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
      const fn2 = function q(arg0, arg1) {
        let closure_0 = arg0;
        let closure_1 = arg1;
        closure_6((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          obj[closure_1] = closure_0;
          return obj;
        });
      };
      cResult[10] = fn2;
      tmp24 = fn2;
    } else {
      tmp24 = cResult[10];
    }
    let closure_7 = tmp24;
    if (cResult[11] !== navigation) {
      class W {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[34]).NavigatorHeader;
              intl = guildId(first[15]).intl;
              intl2 = guildId(first[15]).intl;
              return closure_1_17(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
      cResult[11] = navigation;
      cResult[12] = W;
    } else {
      class W {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[34]).NavigatorHeader;
              intl = guildId(first[15]).intl;
              intl2 = guildId(first[15]).intl;
              return closure_1_17(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    const layoutEffect = obj10.useLayoutEffect(W);
    const tmp27 = cResult[13];
    if (first != null) {
      class W {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[34]).NavigatorHeader;
              intl = guildId(first[15]).intl;
              intl2 = guildId(first[15]).intl;
              return closure_1_17(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    if (tmp27 === undefined) {
      class W {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[34]).NavigatorHeader;
              intl = guildId(first[15]).intl;
              intl2 = guildId(first[15]).intl;
              return closure_1_17(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    if (first != null) {
      class W {
        constructor() {
          let obj = {
            headerTitle() {
              let intl;
              let intl2;
              const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
              const NavigatorHeader = guildId(first[34]).NavigatorHeader;
              intl = guildId(first[15]).intl;
              intl2 = guildId(first[15]).intl;
              return closure_1_17(NavigatorHeader, obj);
            }
          };
          navigation.setOptions(obj);
        }
      }
    }
    class J {
      constructor() {
        let id;
        let id1;
        if (guildEligibleForTierTemplates) {
          const obj2 = { guildId, groupListingId: id };
          id = undefined;
          const pushTierTemplateSelectionScene = GuildRoleSettingsActionCreatorsAll.pushTierTemplateSelectionScene;
          GuildRoleSettingsActionCreatorsAll;
          if (first != null) {
            id = first.id;
          }
          const result = pushTierTemplateSelectionScene(navigation, obj2);
        } else {
          const obj = {
            guildId,
            groupListingId: id1,
            onAfterTierCreation() {
                navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
              }
          };
          id1 = undefined;
          const openTierCreationModal = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal;
          GuildRoleSubscriptionsActionCreatorExtrasAll;
          if (first != null) {
            id1 = first.id;
          }
          const result1 = openTierCreationModal(obj);
        }
      }
    }
    cResult[13] = undefined;
    cResult[14] = guildId;
    cResult[15] = guildEligibleForTierTemplates;
    cResult[16] = navigation;
    cResult[17] = J;
  }
  if (cResult[8] !== first2) {
    class W {
      constructor() {
        let obj = {
          headerTitle() {
            let intl;
            let intl2;
            const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
            const NavigatorHeader = guildId(first[34]).NavigatorHeader;
            intl = guildId(first[15]).intl;
            intl2 = guildId(first[15]).intl;
            return closure_1_17(NavigatorHeader, obj);
          }
        };
        navigation.setOptions(obj);
      }
    }
    cResult[8] = first2;
    cResult[9] = X;
  } else {
    class W {
      constructor() {
        let obj = {
          headerTitle() {
            let intl;
            let intl2;
            const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
            const NavigatorHeader = guildId(first[34]).NavigatorHeader;
            intl = guildId(first[15]).intl;
            intl2 = guildId(first[15]).intl;
            return closure_1_17(NavigatorHeader, obj);
          }
        };
        navigation.setOptions(obj);
      }
    }
  }
  const mapped1 = editStateIds.map(X);
  const tmpResult = tmp(tmp2[33]);
  cResult[5] = editStateIds;
  cResult[6] = first2;
  cResult[7] = tmpResult.uniq(mapped1);
  tmpResult.uniq(mapped1);
}) : ((guildId) => {
  let intl;
  let intl2;
  let intl3;
  let items4;
  let items5;
  let obj10;
  let obj13;
  let obj9;
  guildId = guildId.guildId;
  navigation = undefined;
  let first;
  let onPress;
  let stateFromStores;
  let tmp = closure_19();
  const bottom = navigation(first[26])().bottom;
  const tmp4 = navigation(first[27])();
  let obj = guildId(first[28]);
  navigation = obj.useNavigation();
  let obj2 = guildId(first[29]);
  const groupListingsFetchContext = obj2.useGroupListingsFetchContext();
  const obj3 = guildId(first[30]);
  const roleSubscriptionSettingsDisabled = obj3.useRoleSubscriptionSettingsDisabled();
  const obj4 = guildId(first[31]);
  const guildEligibleForTierTemplates = obj4.useGuildEligibleForTierTemplates(guildId);
  const obj5 = guildId(first[32]);
  const groupListingsForGuild = obj5.useGroupListingsForGuild(guildId);
  first = groupListingsForGuild[0];
  const first1 = groupListingsForGuild.map((id) => id.id)[0];
  const obj6 = guildEligibleForTierTemplates(first[23]);
  const editStateIds = obj6.useEditStateIds(first1, guildId, { includeSoftDeleted: true }).editStateIds;
  const tmp12 = first1(editStateIds.useState({}), 2);
  const first2 = tmp12[0];
  let closure_7 = tmp12[1];
  const items = [editStateIds, first2];
  const memo = editStateIds.useMemo(() => {
    const mapped = editStateIds.map((item) => {
      let tmp = first2[item];
      if (tmp == null) {
        tmp = item;
      }
      return tmp;
    });
    const obj = _mod12;
    return obj.uniq(mapped);
  }, items);
  const layoutEffect = editStateIds.useLayoutEffect(() => {
    let obj = {
      headerTitle() {
        let intl;
        let intl2;
        const obj = { title: intl.string(guildId(first[15]).t.pXbGYc), subtitle: intl2.string(guildId(first[15]).t["KzCF/6"]) };
        const NavigatorHeader = guildId(first[34]).NavigatorHeader;
        intl = guildId(first[15]).intl;
        intl2 = guildId(first[15]).intl;
        return closure_1_17(NavigatorHeader, obj);
      }
    };
    navigation.setOptions(obj);
  });
  const items1 = [guildEligibleForTierTemplates, guildId, navigation, ];
  let id;
  const obj7 = editStateIds;
  const useCallback = editStateIds.useCallback;
  if (first != null) {
    id = first.id;
  }
  items1[3] = id;
  onPress = useCallback(() => {
    let id;
    let id1;
    if (guildEligibleForTierTemplates) {
      const obj2 = { guildId, groupListingId: id };
      id = undefined;
      const pushTierTemplateSelectionScene = GuildRoleSettingsActionCreatorsAll.pushTierTemplateSelectionScene;
      GuildRoleSettingsActionCreatorsAll;
      if (first != null) {
        id = first.id;
      }
      const result = pushTierTemplateSelectionScene(navigation, obj2);
    } else {
      const obj = {
        guildId,
        groupListingId: id1,
        onAfterTierCreation() {
            navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
          }
      };
      id1 = undefined;
      const openTierCreationModal = GuildRoleSubscriptionsActionCreatorExtrasAll.openTierCreationModal;
      GuildRoleSubscriptionsActionCreatorExtrasAll;
      if (first != null) {
        id1 = first.id;
      }
      const result1 = openTierCreationModal(obj);
    }
  }, items1);
  const items2 = [stateFromStores];
  const tmp5Result = guildId(first[22]);
  stateFromStores = tmp5Result.useStateFromStores(items2, () => stateFromStores.getProps().subsection);
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
        let initialEditStateId;
        guildId = editStateId;
        let obj = {
          editStateId,
          guildId,
          groupListingId: first1,
          onPress() {
            guild = guild.getGuild(guildId);
            closure_1_1(closure_1_3[37])(null != guild, "guild must not be null");
            let id;
            const pushTierEditScene = guildEligibleForTierTemplates(closure_1_3[35]).pushTierEditScene;
            guildEligibleForTierTemplates(closure_1_3[35]);
            if (first != null) {
              id = first.id;
            }
            let obj = {
              groupListingId: id,
              initialEditStateId,
              onBeforeDispatchNewListing(id) {
                id = id.id;
                let closure_1 = closure_0;
                closure_2_7((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_1] = id;
                  return obj;
                });
              }
            };
            pushTierEditScene(navigation, obj);
          }
        };
        return closure_1_17(closure_1_25, obj, editStateId);
      });
    }
    const obj8 = { style: tmp.container, children: closure_18(closure_7, obj9) };
    obj9 = { style: obj10, children: items4 };
    obj10 = { paddingBottom: bottom };
    const obj11 = { style: tmp4.header, children: intl.string(guildId(first[15]).t["7iBIoO"]) };
    const tmp2Result = navigation(first[38]);
    intl = tmp5(tmp3[15]).intl;
    items4 = [closure_17(tmp2Result, obj11), , , ];
    const obj12 = { style: tmp.tierManagementDescription, variant: "text-sm/medium", color: "text-default", children: intl2.format(guildId(first[15]).t.nHRSvM, obj13) };
    const Text = tmp5(tmp3[20]).Text;
    intl2 = tmp5(tmp3[15]).intl;
    obj13 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
    items4[1] = closure_17(Text, obj12);
    items4[2] = mapped;
    const obj14 = { onPress, disabled: roleSubscriptionSettingsDisabled, children: items5 };
    const obj15 = { source: navigation(first[39]) };
    const tmp2Result2 = navigation(first[24]);
    items5 = [closure_17(tmp2Result2, obj15), ];
    const obj16 = { style: tmp.createTierLabel, variant: "text-md/medium", color: "mobile-text-heading-primary", children: intl3.string(guildId(first[15]).t.PiFnny) };
    const Text2 = tmp5(tmp3[20]).Text;
    intl3 = tmp5(tmp3[15]).intl;
    items5[1] = closure_17(Text2, obj16);
    items4[3] = closure_18(closure_24, obj14);
    return closure_17(onPress, obj8);
  } else {
    const obj17 = { style: tmp.spinner, children: closure_17(first2, {}) };
    return closure_17(closure_7, obj17);
  }
});
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let tmp3;
  const obj = react2;
  const cResult = obj.c(5);
  guildId = guildId.guildId;
  if (cResult[0] !== guildId) {
    const obj2 = { guildId };
    const tmp6 = closure_17(closure_26, obj2);
    cResult[0] = guildId;
    cResult[1] = tmp6;
    tmp3 = tmp6;
  } else {
    tmp3 = cResult[1];
  }
  if (cResult[2] === guildId) {
    let tmp7;
    if (cResult[3] === tmp3) {
      tmp7 = cResult[4];
    }
    return tmp7;
  }
  const tmp8 = closure_17(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
  cResult[2] = guildId;
  cResult[3] = tmp3;
  cResult[4] = tmp8;
  tmp7 = tmp8;
}) : ((guildId) => {
  guildId = guildId.guildId;
  const obj = { guildId, children: closure_17(closure_26, { guildId }) };
  const tmp = GuildSettingsRoleSubscriptionContainerDefault;
  return closure_17(tmp, obj);
});
size = size_mod;
let result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx");

export default tmp6;