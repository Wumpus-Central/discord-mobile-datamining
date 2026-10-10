// discord_app/modules/guild_role_subscriptions/native/guild_settings/GuildSettingsRoleSubscriptionTiers.tsx
import _mod12 from "../../../../../_runtime/metro/00012__.js";
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../../_runtime/02000_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../../action_sheet/native/ActionSheetActionCreators.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import FastImageDefault from "../../../../components_native/common/FastImage.tsx";
import PriceUtils from "../../../../utils/PriceUtils.tsx";
import TouchableHitBoxDefault from "../../../../design/void/TouchableHitBox/native/TouchableHitBox.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import GuildRoleSubscriptionTypeUtils from "../../GuildRoleSubscriptionTypeUtils.tsx";
import GuildSettingsRoleSubscriptionContainerDefault from "GuildSettingsRoleSubscriptionContainer.tsx";
import GuildRoleSettingsActionCreatorsAll from "../GuildRoleSettingsActionCreators.tsx";
import GuildRoleSubscriptionsActionCreatorExtrasAll from "../../GuildRoleSubscriptionsActionCreatorExtras.native.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildSettingsStore from "../../../guild_settings/GuildSettingsStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import GuildRoleSubscriptionsStore from "../../GuildRoleSubscriptionsStore.tsx";

require = fn;
function getPriceText(first2, first1) {
  if (undefined === first2) {
    return "";
  } else if (null != first1) {
    const intl = util.intl;
    const obj = { price: PriceUtils.formatPrice(first2, first1.currency), interval: null };
    obj.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval(first1);
    let formatToPlainStringResult = intl.formatToPlainString(util.t.CgmBaG, obj);
  } else {
    const intl2 = util.intl;
    const obj4 = { price: PriceUtils.formatPrice(first2, constants.USD), interval: null };
    const obj7 = { interval: SubscriptionIntervalTypes.MONTH, interval_count: 1 };
    obj4.interval = GuildRoleSubscriptionTypeUtils.formatPlanInterval(obj7);
    formatToPlainStringResult = intl2.formatToPlainString(util.t.CgmBaG, obj4);
  }
}
get_ActivityIndicator = fn(17);
({ ActivityIndicator: metroRequire, View: closure_7, ScrollView: closure_8 } = get_ActivityIndicator);
const MAX_SUBSCRIPTION_TIERS = fn(15475).MAX_SUBSCRIPTION_TIERS;
const Constants = fn(1085);
({ CurrencyCodes: map1, GuildSettingsSections: closure_14, GuildSettingsSubsections: closure_15 } = Constants);
const SubscriptionIntervalTypes = fn(1392).SubscriptionIntervalTypes;
const jsxProd = fn(21);
({ jsx: closure_17, jsxs: closure_18 } = jsxProd);
const createStyles = fn(5092);
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
let ReactCompilerGating = fn(558);
let closure_21 = ReactCompilerGating.isReactCompilerEnabled()
  ? function DraftBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_19();
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
        const tmp9 = constants(Text_Text.Text, obj2);
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
      const tmp11 = constants(React5, { style: draftBadge, children: tmp7 });
      cResult[3] = tmp4.draftBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function DraftBadge() {
      const tmp = closure_19();
      const obj = { style: tmp.draftBadge, children: null };
      const obj2 = { style: tmp.draftBadgeLabel, variant: "text-xs/semibold", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.vosPk5);
      obj.children = constants(Text_Text.Text, obj2);
      return constants(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_22 = ReactCompilerGating.isReactCompilerEnabled()
  ? function ArchivedBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_19();
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
        const tmp9 = constants(Text_Text.Text, obj2);
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
      const tmp11 = constants(React5, { style: archiveBadge, children: tmp7 });
      cResult[3] = tmp4.archiveBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function ArchivedBadge() {
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
      obj.children = constants(Text_Text.Text, obj2);
      return constants(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_23 = ReactCompilerGating.isReactCompilerEnabled()
  ? function UnsavedBadge() {
      const cResult = c.c(6);
      const tmp4 = closure_19();
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
        const tmp9 = constants(Text_Text.Text, obj2);
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
      const tmp11 = constants(React5, { style: unsavedBadge, children: tmp7 });
      cResult[3] = tmp4.unsavedBadge;
      cResult[4] = tmp7;
      cResult[5] = tmp11;
      tmp10 = tmp11;
    }
  : function UnsavedBadge() {
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
      obj.children = constants(Text_Text.Text, obj2);
      return constants(React5, obj);
    };
ReactCompilerGating = fn(558);
let closure_24 = ReactCompilerGating.isReactCompilerEnabled()
  ? function Row(arg0) {
      const cResult = c.c(9);
      ({ children, onPress, onLongPress, disabled } = arg0);
      const tmp4 = closure_19();
      let disabled2 = tmp3;
      if (undefined !== disabled && disabled) {
        disabled2 = tmp4.disabled;
      }
      if (cResult[0] === tmp4.tierManagementButton) {
        if (cResult[1] === disabled2) {
          let tmp5 = cResult[2];
        }
        if (cResult[3] === children) {
          if (cResult[4] === tmp3) {
            if (cResult[5] === onLongPress) {
              if (cResult[6] === onPress) {
                if (cResult[7] === tmp5) {
                  let tmp6 = cResult[8];
                }
                return tmp6;
              }
            }
          }
        }
        const obj2 = { style: tmp5, accessibilityRole: "button", onPress, onLongPress, disabled: tmp3, children };
        const tmp9 = constants(TouchableHitBoxDefault, obj2);
        cResult[3] = children;
        cResult[4] = tmp3;
        cResult[5] = onLongPress;
        cResult[6] = onPress;
        cResult[7] = tmp5;
        cResult[8] = tmp9;
        tmp6 = tmp9;
      }
      const items = [tmp4.tierManagementButton, disabled2];
      cResult[0] = tmp4.tierManagementButton;
      cResult[1] = disabled2;
      cResult[2] = items;
      tmp5 = items;
    }
  : function Row(disabled) {
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
      return constants(TouchableHitBoxDefault, {
        style,
        accessibilityRole: "button",
        onPress,
        onLongPress,
        disabled: disabled2,
        children,
      });
    };
ReactCompilerGating = fn(558);
let closure_25 = ReactCompilerGating.isReactCompilerEnabled()
  ? function EditListingButton(editStateId) {
      const cResult = editStateId(576).c(40);
      editStateId = editStateId.editStateId;
      const guildId = editStateId.guildId;
      const groupListingId = editStateId.groupListingId;
      const onPress = editStateId.onPress;
      const tmp4 = closure_19();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [GuildRoleSubscriptionsStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== editStateId) {
        const fn = function l() {
          return GuildRoleSubscriptionsStore.getSubscriptionListing(editStateId);
        };
        cResult[1] = editStateId;
        cResult[2] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[2];
      }
      const obj = editStateId(576);
      const stateFromStores = editStateId(573).useStateFromStores(first, tmp7);
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
      let tmp9 = !flag2;
      if (!flag2) {
        tmp9 = !flag;
      }
      if (tmp9) {
        tmp9 = undefined !== stateFromStores;
      }
      const tmpResult = editStateId(573);
      const first1 = _slicedToArray(groupListingId(15497).useName(editStateId), 1)[0];
      const obj3 = groupListingId(15497);
      const first2 = _slicedToArray(groupListingId(15497).usePriceTier(editStateId), 1)[0];
      const obj4 = groupListingId(15497);
      const first3 = _slicedToArray(groupListingId(15497).useImage(editStateId, 250), 1)[0];
      let first4;
      if (stateFromStores != null) {
        first4 = stateFromStores.subscription_plans[0];
      }
      if (cResult[3] === first2) {
        if (cResult[4] === first4) {
          let tmp14 = cResult[5];
        }
        if (cResult[6] === editStateId) {
          if (cResult[7] === groupListingId) {
            if (cResult[8] === guildId) {
              let tmp16 = cResult[9];
            }
            if (cResult[10] === first3) {
              if (cResult[11] === tmp4.tierIcon) {
                let tmp17 = cResult[12];
              }
              if (cResult[13] !== first1) {
                class H {
                  constructor() {
                    obj = closure_1(closure_3[12]);
                    obj1 = { editStateId, guildId, groupListingId };
                    openLazyResult = obj.openLazy(
                      closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                      "TierArchiveOrDelete",
                      obj1,
                    );
                    return;
                  }
                }
                const tmp24 = closure_17(tmp(5088).Text, {
                  variant: "text-md/semibold",
                  color: "mobile-text-heading-primary",
                  children: null,
                });
                cResult[13] = first1;
                cResult[14] = tmp24;
                let tmp22 = tmp24;
                const obj2 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
              } else {
                tmp22 = cResult[14];
              }
              class H {
                constructor() {
                  obj = closure_1(closure_3[12]);
                  obj1 = { editStateId, guildId, groupListingId };
                  openLazyResult = obj.openLazy(
                    closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                    "TierArchiveOrDelete",
                    obj1,
                  );
                  return;
                }
              }
              if (cResult[17] !== flag2) {
                if (flag2) {
                  class H {
                    constructor() {
                      obj = closure_1(closure_3[12]);
                      obj1 = { editStateId, guildId, groupListingId };
                      openLazyResult = obj.openLazy(
                        closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                        "TierArchiveOrDelete",
                        obj1,
                      );
                      return;
                    }
                  }
                }
                class H {
                  constructor() {
                    obj = closure_1(closure_3[12]);
                    obj1 = { editStateId, guildId, groupListingId };
                    openLazyResult = obj.openLazy(
                      closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                      "TierArchiveOrDelete",
                      obj1,
                    );
                    return;
                  }
                }
                cResult[17] = flag2;
                cResult[18] = flag2;
                let tmp26 = tmp27;
              } else {
                tmp26 = cResult[18];
              }
              if (cResult[19] !== (undefined === stateFromStores)) {
                if (tmp30) {
                  class H {
                    constructor() {
                      obj = closure_1(closure_3[12]);
                      obj1 = { editStateId, guildId, groupListingId };
                      openLazyResult = obj.openLazy(
                        closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                        "TierArchiveOrDelete",
                        obj1,
                      );
                      return;
                    }
                  }
                }
                class H {
                  constructor() {
                    obj = closure_1(closure_3[12]);
                    obj1 = { editStateId, guildId, groupListingId };
                    openLazyResult = obj.openLazy(
                      closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                      "TierArchiveOrDelete",
                      obj1,
                    );
                    return;
                  }
                }
                cResult[19] = tmp30;
                cResult[20] = tmp30;
                let tmp31 = tmp32;
              } else {
                tmp31 = cResult[20];
              }
              if (cResult[21] === tmp14) {
                if (cResult[22] === tmp4.tierPrice) {
                  let tmp35 = cResult[23];
                }
                if (cResult[24] === tmp4.detailsRow) {
                  if (cResult[25] === tmp35) {
                    if (cResult[26] === tmp25) {
                      if (cResult[27] === tmp26) {
                        if (cResult[28] === tmp31) {
                          let tmp38 = cResult[29];
                        }
                        if (cResult[30] === tmp4.tierColumn) {
                          if (cResult[31] === tmp38) {
                            if (cResult[32] === tmp22) {
                              let tmp41 = cResult[33];
                            }
                            const _Symbol = Symbol;
                            class H {
                              constructor() {
                                obj = closure_1(closure_3[12]);
                                obj1 = { editStateId, guildId, groupListingId };
                                openLazyResult = obj.openLazy(
                                  closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                                  "TierArchiveOrDelete",
                                  obj1,
                                );
                                return;
                              }
                            }
                            if (tmp44 === Symbol.for("react.memo_cache_sentinel")) {
                              const tmp47 = closure_17(tmp(9723).PencilIcon, {});
                              class H {
                                constructor() {
                                  obj = closure_1(closure_3[12]);
                                  obj1 = { editStateId, guildId, groupListingId };
                                  openLazyResult = obj.openLazy(
                                    closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                                    "TierArchiveOrDelete",
                                    obj1,
                                  );
                                  return;
                                }
                              }
                              cResult[34] = tmp47;
                              let tmp45 = tmp47;
                            } else {
                              tmp45 = cResult[34];
                            }
                            if (cResult[35] === onPress) {
                              if (cResult[36] === tmp41) {
                                if (cResult[37] === tmp16) {
                                  if (cResult[38] === tmp17) {
                                    let tmp48 = cResult[39];
                                  }
                                  return tmp48;
                                }
                              }
                            }
                            const obj6 = { children: null };
                            const obj7 = { onPress, onLongPress: tmp16, children: null };
                            const items1 = [tmp17, tmp41, tmp45];
                            obj7.children = items1;
                            obj6.children = closure_18(closure_24, obj7);
                            const tmp53 = closure_17(closure_7, obj6);
                            cResult[35] = onPress;
                            cResult[36] = tmp41;
                            cResult[37] = tmp16;
                            cResult[38] = tmp17;
                            cResult[39] = tmp53;
                            tmp48 = tmp53;
                          }
                        }
                        class H {
                          constructor() {
                            obj = closure_1(closure_3[12]);
                            obj1 = { editStateId, guildId, groupListingId };
                            openLazyResult = obj.openLazy(
                              closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                              "TierArchiveOrDelete",
                              obj1,
                            );
                            return;
                          }
                        }
                        const obj8 = { style: tmp4.tierColumn, children: null };
                        const items2 = [tmp22, tmp38];
                        obj8.children = items2;
                        const tmp43 = closure_18(closure_7, obj8);
                        cResult[30] = tmp4.tierColumn;
                        cResult[31] = tmp38;
                        cResult[32] = tmp22;
                        cResult[33] = tmp43;
                        tmp41 = tmp43;
                      }
                    }
                  }
                }
                class H {
                  constructor() {
                    obj = closure_1(closure_3[12]);
                    obj1 = { editStateId, guildId, groupListingId };
                    openLazyResult = obj.openLazy(
                      closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                      "TierArchiveOrDelete",
                      obj1,
                    );
                    return;
                  }
                }
                const obj9 = { style: tmp4.detailsRow, children: null };
                const items3 = [tmp25, tmp26, tmp31, tmp35];
                obj9.children = items3;
                const tmp40 = closure_18(closure_7, obj9);
                cResult[24] = tmp4.detailsRow;
                cResult[25] = tmp35;
                cResult[26] = tmp25;
                cResult[27] = tmp26;
                cResult[28] = tmp31;
                cResult[29] = tmp40;
                tmp38 = tmp40;
              }
              const obj10 = {
                style: tmp4.tierPrice,
                variant: "text-sm/medium",
                color: "interactive-text-default",
                children: tmp14,
              };
              const tmp37 = closure_17(tmp(5088).Text, obj10);
              cResult[21] = tmp14;
              cResult[22] = tmp4.tierPrice;
              cResult[23] = tmp37;
              tmp35 = tmp37;
            }
            class H {
              constructor() {
                obj = closure_1(closure_3[12]);
                obj1 = { editStateId, guildId, groupListingId };
                openLazyResult = obj.openLazy(
                  closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                  "TierArchiveOrDelete",
                  obj1,
                );
                return;
              }
            }
            if (tmp18) {
              class H {
                constructor() {
                  obj = closure_1(closure_3[12]);
                  obj1 = { editStateId, guildId, groupListingId };
                  openLazyResult = obj.openLazy(
                    closure_0(closure_3[14])(closure_3[13], closure_3.paths),
                    "TierArchiveOrDelete",
                    obj1,
                  );
                  return;
                }
              }
              tmp21[0] = tmp4.tierIcon;
              const obj11 = { uri: first3 };
              tmp21[2] = obj11;
              tmp18 = closure_17(guildId(6156), tmp21);
            }
            cResult[10] = first3;
            cResult[11] = tmp4.tierIcon;
            cResult[12] = tmp18;
            tmp17 = tmp18;
          }
        }
        class H {
          constructor() {
            obj = closure_1(closure_3[12]);
            obj1 = { editStateId, guildId, groupListingId };
            openLazyResult = obj.openLazy(
              closure_0(closure_3[14])(closure_3[13], closure_3.paths),
              "TierArchiveOrDelete",
              obj1,
            );
            return;
          }
        }
        cResult[6] = editStateId;
        cResult[7] = groupListingId;
        cResult[8] = guildId;
        cResult[9] = H;
        tmp16 = H;
      }
      const tmp15 = getPriceText(first2, first4);
      cResult[3] = first2;
      cResult[4] = first4;
      cResult[5] = tmp15;
      tmp14 = tmp15;
      const obj5 = groupListingId(15497);
    }
  : function EditListingButton(editStateId) {
      editStateId = editStateId.editStateId;
      ({ guildId: importDefault, groupListingId: importAll } = editStateId);
      const tmp = closure_19();
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
      let tmp9Result3 = !flag2;
      if (!flag2) {
        tmp9Result3 = !flag;
      }
      if (tmp9Result3) {
        tmp9Result3 = undefined !== stateFromStores;
      }
      const obj = editStateId(573);
      const obj2 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const obj3 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const first = _slicedToArray(GuildRoleSubscriptionListingEditStateUtilsAll.useImage(editStateId, 250), 1)[0];
      let first1;
      if (stateFromStores != null) {
        first1 = stateFromStores.subscription_plans[0];
      }
      const obj5 = {
        onPress: editStateId.onPress,
        onLongPress() {
          ActionSheetActionCreatorsDefault.openLazy(
            asyncRequireImpl(18500, dependencyMap.paths),
            "TierArchiveOrDelete",
            { editStateId, guildId, groupListingId },
          );
        },
        children: null,
      };
      let tmp9Result = null != first;
      if (tmp9Result) {
        const obj6 = { style: tmp.tierIcon, resizeMode: "cover", source: null };
        const obj7 = { uri: first };
        obj6.source = obj7;
        tmp9Result = closure_17(FastImageDefault, obj6);
      }
      const items1 = [tmp9Result, ,];
      const obj8 = { style: tmp.tierColumn, children: null };
      const items2 = [
        closure_17(editStateId(5088).Text, {
          variant: "text-md/semibold",
          color: "mobile-text-heading-primary",
          children: _slicedToArray(obj2.useName(editStateId), 1)[0],
        }),
      ];
      const obj9 = { style: tmp.detailsRow, children: null };
      if (tmp9Result3) {
        tmp9Result3 = closure_17(closure_21, {});
      }
      const items3 = [tmp9Result3, , ,];
      if (flag2) {
        flag2 = closure_17(closure_22, {});
      }
      let tmp9Result4 = undefined === stateFromStores;
      items3[1] = flag2;
      if (tmp9Result4) {
        tmp9Result4 = closure_17(closure_23, {});
      }
      const obj10 = { children: null };
      items3[2] = tmp9Result4;
      const tmp8 = getPriceText(_slicedToArray(obj3.usePriceTier(editStateId), 1)[0], first1);
      items3[3] = closure_17(editStateId(5088).Text, {
        style: tmp.tierPrice,
        variant: "text-sm/medium",
        color: "interactive-text-default",
        children: getPriceText(_slicedToArray(obj3.usePriceTier(editStateId), 1)[0], first1),
      });
      obj9.children = items3;
      items2[1] = closure_18(closure_7, obj9);
      obj8.children = items2;
      items1[1] = closure_18(closure_7, obj8);
      items1[2] = closure_17(editStateId(9723).PencilIcon, {});
      obj5.children = items1;
      obj10.children = closure_18(closure_24, obj5);
      return closure_17(closure_7, obj10);
    };
ReactCompilerGating = fn(558);
let closure_26 = ReactCompilerGating.isReactCompilerEnabled()
  ? function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
      const cResult = guildId(first[19]).c(62);
      guildId = guildId.guildId;
      closure_19();
      const bottom = navigation(first[26])().bottom;
      navigation(first[27])();
      let obj = guildId(first[19]);
      let tmp = guildId;
      navigation = guildId(first[28]).useNavigation();
      let obj2 = guildId(first[28]);
      const groupListingsFetchContext = guildId(first[29]).useGroupListingsFetchContext();
      const obj3 = guildId(first[29]);
      const roleSubscriptionSettingsDisabled = guildId(first[30]).useRoleSubscriptionSettingsDisabled();
      const obj4 = guildId(first[30]);
      const guildEligibleForTierTemplates = guildId(first[31]).useGuildEligibleForTierTemplates(guildId);
      const obj5 = guildId(first[31]);
      const groupListingsForGuild = guildId(first[32]).useGroupListingsForGuild(guildId);
      first = groupListingsForGuild[0];
      if (cResult[0] !== groupListingsForGuild) {
        const _Symbol = Symbol;
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const fn = function p(id) {
            return id.id;
          };
          cResult[2] = fn;
          let tmp12 = fn;
        } else {
          tmp12 = cResult[2];
        }
        const mapped = groupListingsForGuild.map(tmp12);
        cResult[0] = groupListingsForGuild;
        cResult[1] = mapped;
      } else {
        const first1 = cResult[1][0];
        const _Symbol2 = Symbol;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { includeSoftDeleted: true };
          cResult[3] = obj7;
          let tmp17 = obj7;
        } else {
          tmp17 = cResult[3];
        }
        const editStateIds = guildEligibleForTierTemplates(tmp2[23]).useEditStateIds(
          first1,
          guildId,
          tmp17,
        ).editStateIds;
        const _Symbol3 = Symbol;
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = {};
          cResult[4] = obj9;
          let tmp19 = obj9;
        } else {
          tmp19 = cResult[4];
        }
        const tmp21 = first1(first2.useState(tmp19), 2);
        first2 = tmp21[0];
        closure_6 = tmp21[1];
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
              let tmp28 = handleListingCreated;
            } else {
              tmp28 = cResult[10];
            }
            closure_7 = tmp28;
            if (cResult[11] !== navigation) {
              class W {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1126).intl;
                      obj.title = intl.string(guildId(1126).t.pXbGYc);
                      const intl2 = guildId(1126).intl;
                      obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                      return closure_1_17(guildId(6200).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
              cResult[11] = navigation;
              cResult[12] = W;
            } else {
              class W {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1126).intl;
                      obj.title = intl.string(guildId(1126).t.pXbGYc);
                      const intl2 = guildId(1126).intl;
                      obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                      return closure_1_17(guildId(6200).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            const layoutEffect = obj10.useLayoutEffect(W);
            if (first != null) {
              class W {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1126).intl;
                      obj.title = intl.string(guildId(1126).t.pXbGYc);
                      const intl2 = guildId(1126).intl;
                      obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                      return closure_1_17(guildId(6200).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            if (cResult[13] === undefined) {
              class W {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1126).intl;
                      obj.title = intl.string(guildId(1126).t.pXbGYc);
                      const intl2 = guildId(1126).intl;
                      obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                      return closure_1_17(guildId(6200).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            if (first != null) {
              class W {
                constructor() {
                  obj = {
                    headerTitle() {
                      const obj = { title: null, subtitle: null };
                      const intl = guildId(1126).intl;
                      obj.title = intl.string(guildId(1126).t.pXbGYc);
                      const intl2 = guildId(1126).intl;
                      obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                      return closure_1_17(guildId(6200).NavigatorHeader, obj);
                    },
                  };
                  setOptionsResult = closure_1.setOptions(obj);
                  return;
                }
              }
            }
            class J {
              constructor() {
                tmp = closure_2;
                tmp2 = closure_3;
                if (closure_2) {
                  tmpResult = tmp(tmp2[35]);
                  obj1 = { guildId: null, groupListingId: null };
                  tmp8 = guildId;
                  obj1.guildId = guildId;
                  tmp9 = null;
                  id = undefined;
                  tmp7 = closure_1;
                  if (closure_3 != null) {
                    id = closure_3.id;
                  }
                  obj1.groupListingId = id;
                  result = tmpResult.pushTierTemplateSelectionScene(tmp7, obj1);
                } else {
                  tmpResult1 = tmp(tmp2[36]);
                  obj5 = { guildId: null, groupListingId: null, onAfterTierCreation: null };
                  tmp3 = guildId;
                  obj5.guildId = guildId;
                  tmp4 = null;
                  id1 = undefined;
                  if (closure_3 != null) {
                    id1 = closure_3.id;
                  }
                  obj5.groupListingId = id1;
                  obj5.onAfterTierCreation = function onAfterTierCreation() {
                    navigation.navigate(constants.ROLE_SUBSCRIPTIONS_TIERS);
                  };
                  result1 = tmpResult1.openTierCreationModal(obj5);
                }
                return;
              }
            }
            cResult[13] = undefined;
            cResult[14] = guildId;
            cResult[15] = guildEligibleForTierTemplates;
            cResult[16] = navigation;
            cResult[17] = J;
          }
        }
        if (cResult[8] !== first2) {
          class W {
            constructor() {
              obj = {
                headerTitle() {
                  const obj = { title: null, subtitle: null };
                  const intl = guildId(1126).intl;
                  obj.title = intl.string(guildId(1126).t.pXbGYc);
                  const intl2 = guildId(1126).intl;
                  obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                  return closure_1_17(guildId(6200).NavigatorHeader, obj);
                },
              };
              setOptionsResult = closure_1.setOptions(obj);
              return;
            }
          }
          cResult[8] = first2;
          cResult[9] = X;
        } else {
          class W {
            constructor() {
              obj = {
                headerTitle() {
                  const obj = { title: null, subtitle: null };
                  const intl = guildId(1126).intl;
                  obj.title = intl.string(guildId(1126).t.pXbGYc);
                  const intl2 = guildId(1126).intl;
                  obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
                  return closure_1_17(guildId(6200).NavigatorHeader, obj);
                },
              };
              setOptionsResult = closure_1.setOptions(obj);
              return;
            }
          }
        }
        const mapped1 = editStateIds.map(X);
        obj10 = first2;
        const obj8 = guildEligibleForTierTemplates(tmp2[23]);
        const uniqResult = tmp(tmp2[33]).uniq(mapped1);
        cResult[5] = editStateIds;
        cResult[6] = first2;
        cResult[7] = uniqResult;
        let tmpResult = tmp(tmp2[33]);
      }
      const obj6 = guildId(first[32]);
    }
  : function GuildSettingsRoleSubscriptionsTiersInner(guildId) {
      guildId = guildId.guildId;
      let navigation;
      let first;
      let onPress;
      let stateFromStores;
      let tmp = closure_19();
      const tmp4 = navigation(first[27])();
      navigation = guildId(first[28]).useNavigation();
      let obj = guildId(first[28]);
      const groupListingsFetchContext = guildId(first[29]).useGroupListingsFetchContext();
      let obj2 = guildId(first[29]);
      const roleSubscriptionSettingsDisabled = guildId(first[30]).useRoleSubscriptionSettingsDisabled();
      const obj3 = guildId(first[30]);
      const guildEligibleForTierTemplates = guildId(first[31]).useGuildEligibleForTierTemplates(guildId);
      const obj4 = guildId(first[31]);
      const groupListingsForGuild = guildId(first[32]).useGroupListingsForGuild(guildId);
      first = groupListingsForGuild[0];
      const first1 = groupListingsForGuild.map((id) => id.id)[0];
      const obj5 = guildId(first[32]);
      const editStateIds = guildEligibleForTierTemplates(first[23]).useEditStateIds(first1, guildId, {
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
            const intl = guildId(1126).intl;
            obj.title = intl.string(guildId(1126).t.pXbGYc);
            const intl2 = guildId(1126).intl;
            obj.subtitle = intl2.string(guildId(1126).t["KzCF/6"]);
            return closure_1_17(guildId(6200).NavigatorHeader, obj);
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
      const obj6 = guildEligibleForTierTemplates(first[23]);
      const obj7 = editStateIds;
      const items2 = [stateFromStores];
      stateFromStores = guildId(first[22]).useStateFromStores(items2, () => stateFromStores.getProps().subsection);
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
              closure_1_25,
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
                  guildEligibleForTierTemplates(18502).pushTierEditScene(navigation, {
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
                  let obj = guildEligibleForTierTemplates(18502);
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
        const obj10 = { paddingBottom: navigation(first[26])().bottom };
        obj9.style = obj10;
        const obj11 = { style: tmp4.header, children: null };
        let intl = tmp5(tmp3[15]).intl;
        obj11.children = intl.string(tmp5(tmp3[15]).t["7iBIoO"]);
        const items4 = [closure_17(tmp2(tmp3[38]), obj11), , ,];
        const obj12 = {
          style: tmp.tierManagementDescription,
          variant: "text-sm/medium",
          color: "text-default",
          children: null,
        };
        let intl2 = tmp5(tmp3[15]).intl;
        const obj13 = { maxTiers: MAX_SUBSCRIPTION_TIERS };
        obj12.children = intl2.format(tmp5(tmp3[15]).t.nHRSvM, obj13);
        items4[1] = closure_17(tmp5(tmp3[20]).Text, obj12);
        items4[2] = mapped;
        const obj14 = { onPress, disabled: roleSubscriptionSettingsDisabled, children: null };
        const obj15 = { source: null };
        const tmp2Result = tmp2(tmp3[38]);
        obj15.source = tmp2(tmp3[39]);
        const items5 = [closure_17(tmp2(tmp3[24]), obj15)];
        const obj16 = {
          style: tmp.createTierLabel,
          variant: "text-md/medium",
          color: "mobile-text-heading-primary",
          children: null,
        };
        const intl3 = tmp5(tmp3[15]).intl;
        obj16.children = intl3.string(tmp5(tmp3[15]).t.PiFnny);
        items5[1] = closure_17(tmp5(tmp3[20]).Text, obj16);
        obj14.children = items5;
        items4[3] = closure_18(closure_24, obj14);
        obj9.children = items4;
        obj8.children = closure_18(closure_7, obj9);
        return closure_17(onPress, obj8);
      } else {
        const obj17 = { style: tmp.spinner, children: closure_17(first2, {}) };
        return closure_17(closure_7, obj17);
      }
      const tmp5Result = guildId(first[22]);
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
        const tmp6 = constants(closure_26, obj2);
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
      const tmp8 = constants(GuildSettingsRoleSubscriptionContainerDefault, { guildId, children: tmp3 });
      cResult[2] = guildId;
      cResult[3] = tmp3;
      cResult[4] = tmp8;
      tmp7 = tmp8;
    }
  : function GuildSettingsRoleSubscriptionsTiers(guildId) {
      guildId = guildId.guildId;
      const obj = { guildId, children: constants(closure_26, { guildId }) };
      return constants(GuildSettingsRoleSubscriptionContainerDefault, obj);
    };
