// === Module 17203: _createGroupFromStore ===

// Module 17203 (_createGroupFromStore)
import getRoleEmojisAll from "getRoleEmojis" /* 14744 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "asyncGeneratorStep" /* 5 */;
import closure_6 from "noop" /* 19 */;
import { useRoleTierEditStore } from "usePriceTiers" /* 17160 */;
import MAX_SUBSCRIPTION_TIERS from "MAX_SUBSCRIPTION_TIERS" /* 14722 */;
import { AnalyticEvents } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = arg1;
function _createGroupFromStore() {
  const self = this;
  const tmp = callback2((arg0, arg1, arg2, arg3) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    closure_3 = arg3;
    c5 = 0;
    c6 = 0;
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
          return { value: "HermesInternal", done: null };
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
              const state = closure_1_7.getState();
              groupCover = state.groupCover;
              groupDescription = state.groupDescription;
              if (null != groupCover) {
                obj1 = { description: null };
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
          return { value: "HermesInternal", done: null };
        } catch (tmp13) {
          c6 = tmp;
          throw tmp13;
        }
      }
    })();
  });
  closure_12 = tmp;
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
    closure_2 = undefined;
    closure_3 = undefined;
    closure_4 = undefined;
    closure_5 = undefined;
    closure_6 = undefined;
    closure_7 = undefined;
    closure_8 = undefined;
    c9 = undefined;
    closure_11 = undefined;
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
            return { value: "HermesInternal", done: null };
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
                closure_3 = tmp5;
                closure_2 = tmp2;
                closure_0 = undefined;
                let id;
                if (closure_1_2 != null) {
                  id = closure_1_2.id;
                }
                closure_0 = id;
                if (id == null) {
                  c4 = 1;
                  c5 = 1;
                  obj1 = { value: null, done: false };
                  obj1[0] = (function createGroupFromStore(closure_1_1, c4, c5, closure_1_3) {
                    const self = this;
                    const apply = closure_12.apply;
                    if (typeof apply === "unknown") {
                      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                    } else {
                      applyArgumentsResult = apply(self, arguments);
                    }
                    return applyArgumentsResult;
                  })(closure_1_1, c4, c5, closure_1_3);
                  return obj1;
                } else if (null != closure_0) {
                  if (null != anyErrorMessage) {
                    anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                    closure_1 = anyErrorMessage;
                    if (anyErrorMessage == null) {
                      const intl = closure_1_0(closure_1_3[10]).intl;
                      closure_1 = intl.string(closure_1_0(closure_1_3[10]).t.ZUEGFn);
                    }
                    closure_1_0(closure_1_3[9]).presentError(closure_1);
                    const obj8 = closure_1_0(closure_1_3[9]);
                  }
                  const obj2 = { guildId: null, editStateId: null, groupListingId: null, onBeforeDispatchNewListing: null };
                  obj2[0] = closure_1;
                  obj2[1] = closure_6;
                  obj2[2] = closure_1_0;
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
      closure_10 = tmp;
      let apply = tmp.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    guildId = merged.guildId;
    obj = closure_6;
    tmp2 = closure_4(closure_6.useState(), 2);
    [closure_2, closure_3] = tmp2;
    tmp3 = closure_0;
    tmp4 = closure_3;
    obj2 = require("useFetchListingsForGuild");
    closure_4 = obj2.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
    obj3 = require("useFetchListingsForGuild");
    updateSubscriptionsSettings = obj3.useUpdateSubscriptionsSettings();
    ({ updateSubscriptionsSettings: closure_5, error } = updateSubscriptionsSettings);
    tmp6 = closure_4(closure_6.useState(global.editStateId), 2);
    first = tmp6[0];
    closure_6 = first;
    closure_7 = tmp6[1];
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
    obj1[1] = closure_11(tmp13, obj2);
    obj[3] = closure_11(require("useRoleSubscriptionSettingsDisabled").RoleSubscriptionSettingsDisabledContextProvider, obj1);
    return closure_11(require("useEditStateContext").EditStateContextProvider, obj);
  }
}
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: c9 } = MAX_SUBSCRIPTION_TIERS);
GuildRoleSubscriptionGroupSetupModal.modalConfig = { closable: false };
const result = require("set").fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx");

export default GuildRoleSubscriptionGroupSetupModal;