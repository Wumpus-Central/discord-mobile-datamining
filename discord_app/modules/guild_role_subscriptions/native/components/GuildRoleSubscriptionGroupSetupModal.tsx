// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
let closure_12 = async function _createGroupFromStore(arg0, value) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      let obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c6 = 2;
      if (0 === c5) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_4 = tmp4;
          closure_132_0 = closure_0;
          closure_132_1 = closure_2;
          closure_132_2 = closure_3;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          closure_132_5 = undefined;
          state = state.getState();
          const groupCover = state.groupCover;
          closure_132_3 = groupCover;
          const groupDescription = state.groupDescription;
          closure_132_4 = groupDescription;
          if (null != groupCover) {
            const obj1 = { description: groupDescription };
            c5 = 1;
            c6 = 1;
            const obj2 = { value: tmp24(tmp23, obj1), done: false };
            return obj2;
          }
          tmp23 = closure_0;
          tmp24 = closure_1;
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_132_5 = value;
          if (null != closure_132_5) {
            const obj4 = { cover_image: closure_132_3.uri, description: closure_132_4 };
            c5 = 2;
            c6 = 1;
            const obj5 = { value: closure_132_1(closure_132_0, obj4), done: false };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c6 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_132_2(closure_132_5);
        c6 = 3;
        obj = { value: closure_132_5.id, done: true };
        return obj;
      }
      c6 = 3;
      return { value: "HermesInternal", done: null };
    } catch (tmp13) {
      c6 = tmp;
      throw tmp13;
    }
  }
};
class GuildRoleSubscriptionGroupSetupModal {
  constructor(arg0) {
    merged = Object.assign(global, Object.assign({ editStateId: 0 }));
    closure_0 = merged;
    guildId = undefined;
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    c9 = undefined;
    closure_11 = undefined;
    closure_10 = async function _handleCreateGroupAndTier(arg0, value) {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          let obj = { value, done: true };
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
        }
      } else {
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              obj = { value, done: true };
              return obj;
            } else {
              dependencyMap = tmp5;
              closure_2 = tmp2;
              closure_130_0 = undefined;
              let id;
              if (id != null) {
                id = id.id;
              }
              merged = id;
              if (id == null) {
                c4 = 1;
                c5 = 1;
                const obj1 = {
                  value: (function createGroupFromStore() {
                    const self = this;
                    const apply = closure_1_12.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(guildId, _slicedToArray, asyncGeneratorStep, _undefined),
                  done: false,
                };
                return obj1;
              } else {
                closure_130_0 = merged;
                if (null != closure_130_0) {
                  if (null != closure_131_9) {
                    const anyErrorMessage = closure_131_9.getAnyErrorMessage();
                    closure_1 = anyErrorMessage;
                    if (anyErrorMessage == null) {
                      const intl = merged(1114).intl;
                      closure_1 = intl.string(merged(1114).t.ZUEGFn);
                    }
                    merged(4258).presentError(closure_1);
                    const obj8 = merged(4258);
                  }
                  const obj2 = {
                    guildId: closure_131_1,
                    editStateId: closure_131_6,
                    groupListingId: closure_130_0,
                    onBeforeDispatchNewListing(id) {
                      return closure_1_7(id.id);
                    },
                  };
                  c4 = 2;
                  c5 = 1;
                  const obj3 = { value: closure_131_8(obj2), done: false };
                  return obj3;
                } else {
                  c5 = 3;
                }
              }
            }
          } else if (1 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              merged = value;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (value) {
              closure_131_0.onClose();
            }
          }
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } catch (tmp33) {
          c5 = tmp;
          throw tmp33;
        }
      }
    };
    guildId = merged.guildId;
    obj = closure_6;
    tmp2 = closure_4(closure_6.useState(), 2);
    [closure_2, closure_3] = tmp2;
    tmp3 = closure_0;
    tmp4 = closure_3;
    obj2 = closure_0(closure_3[7]);
    closure_4 = obj2.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    obj3 = closure_0(closure_3[7]);
    updateSubscriptionsSettings = obj3.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: closure_5, error } = updateSubscriptionsSettings);
    tmp6 = closure_4(closure_6.useState(global.editStateId), 2);
    first = tmp6[0];
    closure_6 = first;
    closure_7 = tmp6[1];
    obj4 = closure_2(closure_3[8]);
    createOrUpdateListingFromEditState = obj4.useCreateOrUpdateListingFromEditState();
    closure_8 = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
    if (error == null) {
      error = createOrUpdateListingFromEditState.error;
    }
    c9 = error;
    items = [];
    items[0] = error;
    effect = obj.useEffect(() => {
      if (null != error) {
        let anyErrorMessage = error.getAnyErrorMessage();
        if (anyErrorMessage == null) {
          const intl = tmp(1114).intl;
          anyErrorMessage = intl.string(tmp(1114).t.R0RpRX);
        }
        ToastUtils.presentError(anyErrorMessage);
      }
    }, items);
    memo = obj.useMemo(() => {
      const items = [, , , , , ,];
      ({
        GATING: arr[0],
        GROUP: arr[1],
        DETAILS: arr[2],
        CHANNEL_BENEFITS: arr[3],
        INTANGIBLE_BENEFITS: arr[4],
        DESIGN: arr[5],
      } = constants);
      items[6] = { scene: constants.CONFIRMATION, extraProps: { isForGroupSetupModal: true } };
      return items;
    }, []);
    closure_11 = memo;
    items1 = [];
    items1[0] = memo;
    memo1 = obj.useMemo(() => {
      let obj = {};
      obj = { impressionName: merged(_undefined[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING };
      obj[constants.GATING] = obj;
      obj = { impressionName: merged(_undefined[11]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP };
      obj[constants.DETAILS] = obj;
      return obj;
    }, []);
    callback = obj.useCallback((arg0) => {
      closure_0 = arg0;
      const obj = { setup_modal_step: memo.findIndex((item) => item === closure_0) + 1 };
      obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj);
    }, items1);
    obj = { guildId, editStateId: first, groupListingId: null, children: null };
    obj1 = { guildId, children: null };
    obj2 = {};
    tmp13 = guildId(tmp4[15]);
    merged1 = Object.assign(merged);
    obj2.modalKey = c9;
    obj2.onDone = function handleCreateGroupAndTier() {
      const self = this;
      const apply = closure_10.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj2.steps = memo;
    obj2.onClose = callback;
    obj2.stepScreenPropsMap = memo1;
    obj1.children = closure_11(tmp13, obj2);
    obj.children = closure_11(tmp3(tmp4[14]).RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return closure_11(tmp3(tmp4[13]).EditStateContextProvider, obj);
  }
}
const useRoleTierEditStore = fn(17729).useRoleTierEditStore;
const GuildRoleSubscriptionsConstants = fn(15205);
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_9 } =
  GuildRoleSubscriptionsConstants);
const AnalyticEvents = fn(1074).AnalyticEvents;
const jsx = fn(21).jsx;
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx",
);

export default GuildRoleSubscriptionGroupSetupModal;
