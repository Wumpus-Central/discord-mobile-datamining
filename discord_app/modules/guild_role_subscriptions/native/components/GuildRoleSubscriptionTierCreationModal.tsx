// === Module 17935: GuildRoleSubscriptionTierCreationModal ===

// Module 17935 (GuildRoleSubscriptionTierCreationModal)
import util from "util" /* 1126 */;
import ToastUtils from "ToastUtils" /* 4567 */;
import GuildRoleSubscriptionListingEditStateUtilsAll from "GuildRoleSubscriptionListingEditStateUtils" /* 15045 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RoleTierEditStore from "RoleTierEditStore" /* 17926 */;

const require = globalThis.__r;

require = fn;
const GuildRoleSubscriptionsConstants = fn(15023);
({ GuildRoleSubscriptionsTierScenes: closure_8, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: closure_9 } = GuildRoleSubscriptionsConstants);
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  const cResult = require("c").c(22);
  guildId = guildId.guildId;
  _require = guildId;
  let groupListingId = guildId.groupListingId;
  const onClose = guildId.onClose;
  onAfterTierCreation = guildId.onAfterTierCreation;
  [editStateId, _slicedToArray] = handleCreateOrUpdateFromEditState.useState(guildId.editStateId);
  let obj = require("c");
  let obj2 = handleCreateOrUpdateFromEditState;
  const createOrUpdateListingFromEditState = onClose(onAfterTierCreation[8]).useCreateOrUpdateListingFromEditState();
  handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
  const error = createOrUpdateListingFromEditState.error;
  if (cResult[0] === editStateId) {
    if (cResult[1] === groupListingId) {
      if (cResult[2] === guildId) {
        if (cResult[3] === handleCreateOrUpdateFromEditState) {
          if (cResult[4] === onAfterTierCreation) {
            if (cResult[5] === onClose) {
              let tmp7 = cResult[6];
            }
            if (cResult[7] !== error) {
              class O {
                constructor() {
                  obj = error;
                  if (null != error) {
                    tmp = closure_0;
                    tmp2 = closure_3;
                    obj2 = closure_0(closure_3[9]);
                    anyErrorMessage = obj.getAnyErrorMessage();
                    if (anyErrorMessage == null) {
                      intl = tmp(tmp2[10]).intl;
                      anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                    }
                    presentErrorResult = obj2.presentError(anyErrorMessage);
                  }
                  return;
                }
              }
              const items = [error];
              cResult[7] = error;
              cResult[8] = O;
              cResult[9] = items;
              let tmp9 = items;
            } else {
              class O {
                constructor() {
                  obj = error;
                  if (null != error) {
                    tmp = closure_0;
                    tmp2 = closure_3;
                    obj2 = closure_0(closure_3[9]);
                    anyErrorMessage = obj.getAnyErrorMessage();
                    if (anyErrorMessage == null) {
                      intl = tmp(tmp2[10]).intl;
                      anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                    }
                    presentErrorResult = obj2.presentError(anyErrorMessage);
                  }
                  return;
                }
              }
              tmp9 = cResult[9];
            }
            const layoutEffect = obj2.useLayoutEffect(O, tmp9);
            const _Symbol = Symbol;
            if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
              class O {
                constructor() {
                  obj = error;
                  if (null != error) {
                    tmp = closure_0;
                    tmp2 = closure_3;
                    obj2 = closure_0(closure_3[9]);
                    anyErrorMessage = obj.getAnyErrorMessage();
                    if (anyErrorMessage == null) {
                      intl = tmp(tmp2[10]).intl;
                      anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                    }
                    presentErrorResult = obj2.presentError(anyErrorMessage);
                  }
                  return;
                }
              }
              const items1 = [, , , , ];
              ({ DETAILS: arr2[0], CHANNEL_BENEFITS: arr2[1], INTANGIBLE_BENEFITS: arr2[2], DESIGN: arr2[3], CONFIRMATION: arr2[4] } = closure_8);
              cResult[10] = items1;
              const tmp12 = items1;
            } else {
              class O {
                constructor() {
                  obj = error;
                  if (null != error) {
                    tmp = closure_0;
                    tmp2 = closure_3;
                    obj2 = closure_0(closure_3[9]);
                    anyErrorMessage = obj.getAnyErrorMessage();
                    if (anyErrorMessage == null) {
                      intl = tmp(tmp2[10]).intl;
                      anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                    }
                    presentErrorResult = obj2.presentError(anyErrorMessage);
                  }
                  return;
                }
              }
            }
            if (cResult[11] === guildId) {
              class O {
                constructor() {
                  obj = error;
                  if (null != error) {
                    tmp = closure_0;
                    tmp2 = closure_3;
                    obj2 = closure_0(closure_3[9]);
                    anyErrorMessage = obj.getAnyErrorMessage();
                    if (anyErrorMessage == null) {
                      intl = tmp(tmp2[10]).intl;
                      anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                    }
                    presentErrorResult = obj2.presentError(anyErrorMessage);
                  }
                  return;
                }
              }
              if (cResult[14] === guildId) {
                class O {
                  constructor() {
                    obj = error;
                    if (null != error) {
                      tmp = closure_0;
                      tmp2 = closure_3;
                      obj2 = closure_0(closure_3[9]);
                      anyErrorMessage = obj.getAnyErrorMessage();
                      if (anyErrorMessage == null) {
                        intl = tmp(tmp2[10]).intl;
                        anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                      }
                      presentErrorResult = obj2.presentError(anyErrorMessage);
                    }
                    return;
                  }
                }
                if (cResult[17] === editStateId) {
                  class O {
                    constructor() {
                      obj = error;
                      if (null != error) {
                        tmp = closure_0;
                        tmp2 = closure_3;
                        obj2 = closure_0(closure_3[9]);
                        anyErrorMessage = obj.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          intl = tmp(tmp2[10]).intl;
                          anyErrorMessage = intl.string(tmp(tmp2[10]).t.R0RpRX);
                        }
                        presentErrorResult = obj2.presentError(anyErrorMessage);
                      }
                      return;
                    }
                  }
                }
                let obj4 = { guildId, editStateId, groupListingId, children: tmp18 };
                const tmp23 = jsx(tmp(tmp2[13]).EditStateContextProvider, { guildId, editStateId, groupListingId, children: tmp18 });
                cResult[17] = editStateId;
                cResult[18] = groupListingId;
                cResult[19] = guildId;
                cResult[20] = tmp18;
                cResult[21] = tmp23;
              }
              let obj5 = { guildId, children: tmp13 };
              const tmp20 = jsx(tmp(tmp2[12]).RoleSubscriptionSettingsDisabledContextProvider, { guildId, children: tmp13 });
              cResult[14] = guildId;
              cResult[15] = tmp13;
              cResult[16] = tmp20;
            }
            const obj6 = { guildId, modalKey, onDone: tmp7, steps: tmp12 };
            const tmp17 = jsx(groupListingId(tmp2[11]), { guildId, modalKey, onDone: tmp7, steps: tmp12 });
            cResult[11] = guildId;
            cResult[12] = tmp7;
            cResult[13] = tmp17;
          }
        }
      }
    }
  }
  _require = editStateId(function*() {
    if (v3 === 2) {
      v3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        v3 = 2;
        if (0 === groupListingId) {
          if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            const guildId = tmp4;
            const obj4 = {
              guildId,
              editStateId,
              groupListingId,
              onBeforeDispatchNewListing(id) {
                        return closure_1_5(id.id);
                      }
            };
            groupListingId = 1;
            v3 = 1;
            const obj5 = { value: handleCreateOrUpdateFromEditState(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          v3 = 3;
          throw value;
        } else if (arg0 === 2) {
          v3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            error.resetImperatively();
            v3();
            onAfterTierCreation();
          }
          v3 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        v3 = tmp;
        throw tmp16;
      }
    }
  });
  function handleCreate() {
    const self = this;
    const apply = closure_0.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  cResult[0] = editStateId;
  cResult[1] = groupListingId;
  cResult[2] = guildId;
  cResult[3] = handleCreateOrUpdateFromEditState;
  cResult[4] = onAfterTierCreation;
  cResult[5] = onClose;
  cResult[6] = handleCreate;
  tmp7 = handleCreate;
  let obj3 = onClose(onAfterTierCreation[8]);
}) : ((guildId) => {
  guildId = guildId.guildId;
  const groupListingId = guildId.groupListingId;
  ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
  editStateId = undefined;
  _slicedToArray = undefined;
  noop = undefined;
  error = undefined;
  closure_8 = async function _handleCreate2() {
    if (c2 === 2) {
      c2 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c2 = 2;
        if (0 === c1) {
          if (arg0 === 1) {
            c2 = 3;
            throw value;
          } else if (arg0 === 2) {
            c2 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp4;
            const obj4 = {
              guildId,
              editStateId,
              groupListingId,
              onBeforeDispatchNewListing(id) {
                        return closure_1_5(id.id);
                      }
            };
            c1 = 1;
            c2 = 1;
            const obj5 = { value: noop(obj4), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c2 = 3;
          throw value;
        } else if (arg0 === 2) {
          c2 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (value) {
            error.resetImperatively();
            closure_128_2();
            closure_128_3();
          }
          c2 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c2 = tmp;
        throw tmp16;
      }
    }
  };
  [editStateId, _slicedToArray] = noop.useState(guildId.editStateId);
  const createOrUpdateListingFromEditState = GuildRoleSubscriptionListingEditStateUtilsAll.useCreateOrUpdateListingFromEditState();
  ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
  let items = [error];
  const layoutEffect = noop.useLayoutEffect(() => {
    if (null != error) {
      let anyErrorMessage = error.getAnyErrorMessage();
      if (anyErrorMessage == null) {
        const intl = util.intl;
        anyErrorMessage = intl.string(util.t.R0RpRX);
      }
      ToastUtils.presentError(anyErrorMessage);
    }
  }, items);
  const memo = noop.useMemo(() => {
    const items = [, , , , ];
    ({ DETAILS: arr[0], CHANNEL_BENEFITS: arr[1], INTANGIBLE_BENEFITS: arr[2], DESIGN: arr[3], CONFIRMATION: arr[4] } = closure_8);
    return items;
  }, []);
  let obj2 = { guildId, editStateId, groupListingId, children: null };
  let obj3 = {
    guildId,
    children: jsx(groupListingId(17936), {
      guildId,
      modalKey,
      onDone: function handleCreate() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      steps: memo
    })
  };
  obj2.children = jsx(guildId(17921).RoleSubscriptionSettingsDisabledContextProvider, {
    guildId,
    children: jsx(groupListingId(17936), {
      guildId,
      modalKey,
      onDone: function handleCreate() {
        const self = this;
        const apply = closure_8.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      },
      steps: memo
    })
  });
  return jsx(guildId(17944).EditStateContextProvider, { guildId, editStateId, groupListingId, children: null });
});