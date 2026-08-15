// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
import _slicedToArray from "_slicedToArray";
import ME from "ME";
import noop from "noop";
import { useRoleTierEditStore } from "usePriceTiers";
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS";
import { AnalyticEvents } from "ME";
import { jsx } from "jsxProd";

let c9;
let metroImportAll;
const require = arg1;
function _createGroupFromStore() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c5 = 0;
    let c6 = 0;
    return (function*(arg0, arg1, arg2, arg3) {
      if (c6 === 2) {
        c6 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c6 = 2;
          if (0 === id) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let groupDescription = tmp4;
              const callback = callback2;
              callback2 = groupCover;
              groupCover = undefined;
              groupDescription = undefined;
              id = undefined;
              const state = outer1_7.getState();
              groupCover = state.groupCover;
              groupDescription = state.groupDescription;
              if (null != groupCover) {
                const obj1 = { description: null };
                obj1[0] = groupDescription;
                id = 1;
                c6 = 1;
                const obj2 = { value: null, done: false };
                obj2[0] = tmp25(tmp24, obj1);
                return obj2;
              }
              tmp24 = closure_0;
              tmp25 = callback;
            }
          } else if (1 === tmp4) {
            if (arg0 === 1) {
              c6 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c6 = 3;
              const obj3 = { value: null, done: true };
              obj3[0] = arg1;
              return obj3;
            } else {
              id = arg1;
              if (null != id) {
                const obj4 = { cover_image: null, description: null };
                obj4[0] = groupCover.uri;
                obj4[1] = groupDescription;
                id = 2;
                c6 = 1;
                const obj5 = { value: null, done: false };
                obj5[0] = callback(closure_0, obj4);
                return obj5;
              }
            }
          } else if (arg0 === 1) {
            c6 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value: null, done: true };
            obj6[0] = arg1;
            return obj6;
          } else {
            callback2(id);
            c6 = 3;
            obj = { value: null, done: true };
            obj[0] = id.id;
            return obj;
          }
          c6 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp13) {
          c6 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  const _createGroupFromStore = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
class GuildRoleSubscriptionGroupSetupModal {
  constructor(arg0) {
    merged = Object.assign(global, Object.create(null));
    closure_0 = merged;
    guildId = undefined;
    c2 = undefined;
    useState = undefined;
    useState = undefined;
    c5 = undefined;
    editStateId = undefined;
    useState = undefined;
    closure_8 = undefined;
    c9 = undefined;
    c11 = undefined;
    _handleCreateGroupAndTier = function _handleCreateGroupAndTier() {
      let self = this;
      const tmp = _undefined2(function*() {
        if (c5 === 2) {
          c5 = 3;
          HermesBuiltin.throwTypeError();
        } else if (tmp4 === 3) {
          if (arg0 === 1) {
            throw arg1;
          } else if (arg0 === 2) {
            let obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } else {
          try {
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value: null, done: true };
                obj[0] = arg1;
                return obj;
              } else {
                let closure_3 = tmp5;
                let closure_2 = tmp2;
                let closure_0;
                let id;
                if (outer1_2 != null) {
                  id = outer1_2.id;
                }
                closure_0 = id;
                if (id == null) {
                  c4 = 1;
                  c5 = 1;
                  const obj1 = { value: null, done: false };
                  obj1[0] = (function createGroupFromStore(outer1_1, c4, c5, outer1_3) {
                    const self = this;
                    const apply = closure_12.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(outer1_1, c4, c5, outer1_3);
                  return obj1;
                } else if (null != closure_0) {
                  if (null != anyErrorMessage) {
                    anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                    let closure_1 = anyErrorMessage;
                    if (anyErrorMessage == null) {
                      const intl = outer1_0(outer1_3[10]).intl;
                      closure_1 = intl.string(outer1_0(outer1_3[10]).t.ZUEGFn);
                    }
                    outer1_0(outer1_3[9]).presentError(closure_1);
                    const obj8 = outer1_0(outer1_3[9]);
                  }
                  const obj2 = { guildId: null, editStateId: null, groupListingId: null, onBeforeDispatchNewListing: null };
                  obj2[0] = closure_1;
                  obj2[1] = noop;
                  obj2[2] = outer1_0;
                  obj2[3] = function onBeforeDispatchNewListing(id) {
                    return callback(id.id);
                  };
                  c4 = 2;
                  c5 = 1;
                  const obj3 = { value: null, done: false };
                  obj3[0] = callback(obj2);
                  return obj3;
                } else {
                  c5 = 3;
                }
              }
            } else if (1 === tmp5) {
              if (arg0 === 1) {
                c5 = 3;
                throw arg1;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj4 = { value: null, done: true };
                obj4[0] = arg1;
                return obj4;
              } else {
                closure_0 = arg1;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw arg1;
            } else if (arg0 !== 2) {
              if (arg1) {
                closure_0.onClose();
              }
            }
            c5 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } catch (tmp33) {
            c5 = tmp;
            throw tmp33;
          }
        }
      });
      const _handleCreateGroupAndTier = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    guildId = merged.guildId;
    obj = editStateId;
    tmp2 = useState(editStateId.useState(), 2);
    [c2, useState] = tmp2;
    tmp3 = closure_0;
    tmp4 = useState;
    obj2 = require("useFetchListingsForGuild");
    useState = obj2.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    obj3 = require("useFetchListingsForGuild");
    updateSubscriptionsSettings = obj3.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: c5, error } = updateSubscriptionsSettings);
    tmp6 = useState(editStateId.useState(global.editStateId), 2);
    first = tmp6[0];
    editStateId = first;
    useState = tmp6[1];
    obj4 = require("getRoleEmojis");
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
          const intl = tmp(tmp2[10]).intl;
          anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
        }
        merged(_undefined[9]).presentError(anyErrorMessage);
        const obj2 = merged(_undefined[9]);
      }
    }, items);
    memo = obj.useMemo(() => {
      const items = [, , , , , , ];
      ({ GATING: arr[0], GROUP: arr[1], DETAILS: arr[2], CHANNEL_BENEFITS: arr[3], INTANGIBLE_BENEFITS: arr[4], DESIGN: arr[5] } = constants);
      items[6] = { scene: constants.CONFIRMATION, extraProps: { isForGroupSetupModal: true } };
      return items;
    }, []);
    c11 = memo;
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
      let closure_0 = arg0;
      let obj = guildId(_undefined[12]);
      obj = { setup_modal_step: memo.findIndex((arg0) => arg0 === closure_0) + 1 };
      obj.trackWithMetadata(_handleCreateGroupAndTier.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj);
    }, items1);
    obj = { guildId, editStateId: first, groupListingId: null, children: null };
    obj1 = { guildId, children: null };
    obj2 = {};
    tmp13 = require("orderify");
    merged1 = Object.assign(merged);
    obj2.modalKey = c9;
    obj2.onDone = function handleCreateGroupAndTier() {
      const self = this;
      const apply = _handleCreateGroupAndTier.apply;
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
    obj1[1] = c11(tmp13, obj2);
    obj[3] = c11(require("useRoleSubscriptionSettingsDisabled").RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return c11(require("useEditStateContext").EditStateContextProvider, obj);
  }
}
({ GuildRoleSubscriptionsTierScenes: metroImportAll, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: c9 } = MAX_SUBSCRIPTION_TIERS);
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const result = require("noop").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx");

export default GuildRoleSubscriptionGroupSetupModal;