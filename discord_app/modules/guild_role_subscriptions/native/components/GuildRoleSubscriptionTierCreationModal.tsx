// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import intl2 from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import RoleTierEditStore from "../RoleTierEditStore.tsx";
import GuildRoleSubscriptionsConstants from "../../GuildRoleSubscriptionsConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let _require, c1, c2, guildId;

let c9;
let metroImportAll;
let _slicedToArray = _slicedToArray_mod;
let react = react_mod;
({ GuildRoleSubscriptionsTierScenes: metroImportAll, GUILD_ROLE_SUBSCRIPTION_TIER_CREATION_KEY: c9 } =
  GuildRoleSubscriptionsConstants);
const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (guildId) => {
      let closure_5;
      let editStateId;
      let handleCreateOrUpdateFromEditState;
      let onAfterTierCreation;
      const tmp2 = onAfterTierCreation;
      let obj = guildId(onAfterTierCreation[7]);
      const cResult = obj.c(22);
      guildId = guildId.guildId;
      let groupListingId = guildId.groupListingId;
      const onClose = guildId.onClose;
      onAfterTierCreation = guildId.onAfterTierCreation;
      let obj2 = handleCreateOrUpdateFromEditState;
      [editStateId, _slicedToArray] = handleCreateOrUpdateFromEditState.useState(guildId.editStateId);
      let obj3 = onClose(onAfterTierCreation[8]);
      const createOrUpdateListingFromEditState = obj3.useCreateOrUpdateListingFromEditState();
      handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
      const error = createOrUpdateListingFromEditState.error;
      if (cResult[0] === editStateId) {
        if (cResult[1] === groupListingId) {
          if (cResult[2] === guildId) {
            if (cResult[3] === handleCreateOrUpdateFromEditState) {
              if (cResult[4] === onAfterTierCreation) {
                let tmp7;
                let tmp9;
                let tmp12;
                if (cResult[5] === onClose) {
                  tmp7 = cResult[6];
                }
                if (cResult[7] !== error) {
                  class O {
                    constructor() {
                      if (null != error) {
                        const presentError = ToastUtils.presentError;
                        ToastUtils;
                        let anyErrorMessage = error.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          const intl = intl2.intl;
                          anyErrorMessage = intl.string(intl2.t.R0RpRX);
                        }
                        presentError(anyErrorMessage);
                      }
                    }
                  }
                  const items = [error];
                  cResult[7] = error;
                  cResult[8] = O;
                  cResult[9] = items;
                  tmp9 = items;
                } else {
                  class O {
                    constructor() {
                      if (null != error) {
                        const presentError = ToastUtils.presentError;
                        ToastUtils;
                        let anyErrorMessage = error.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          const intl = intl2.intl;
                          anyErrorMessage = intl.string(intl2.t.R0RpRX);
                        }
                        presentError(anyErrorMessage);
                      }
                    }
                  }
                  tmp9 = cResult[9];
                }
                const layoutEffect = obj2.useLayoutEffect(O, tmp9);
                const _Symbol = Symbol;
                if (cResult[10] === Symbol.for("react.memo_cache_sentinel")) {
                  class O {
                    constructor() {
                      if (null != error) {
                        const presentError = ToastUtils.presentError;
                        ToastUtils;
                        let anyErrorMessage = error.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          const intl = intl2.intl;
                          anyErrorMessage = intl.string(intl2.t.R0RpRX);
                        }
                        presentError(anyErrorMessage);
                      }
                    }
                  }
                  const items1 = [, , , ,];
                  ({
                    DETAILS: arr2[0],
                    CHANNEL_BENEFITS: arr2[1],
                    INTANGIBLE_BENEFITS: arr2[2],
                    DESIGN: arr2[3],
                    CONFIRMATION: arr2[4],
                  } = closure_8);
                  cResult[10] = items1;
                  tmp12 = items1;
                } else {
                  class O {
                    constructor() {
                      if (null != error) {
                        const presentError = ToastUtils.presentError;
                        ToastUtils;
                        let anyErrorMessage = error.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          const intl = intl2.intl;
                          anyErrorMessage = intl.string(intl2.t.R0RpRX);
                        }
                        presentError(anyErrorMessage);
                      }
                    }
                  }
                }
                if (cResult[11] === guildId) {
                  class O {
                    constructor() {
                      if (null != error) {
                        const presentError = ToastUtils.presentError;
                        ToastUtils;
                        let anyErrorMessage = error.getAnyErrorMessage();
                        if (anyErrorMessage == null) {
                          const intl = intl2.intl;
                          anyErrorMessage = intl.string(intl2.t.R0RpRX);
                        }
                        presentError(anyErrorMessage);
                      }
                    }
                  }
                  if (cResult[14] === guildId) {
                    class O {
                      constructor() {
                        if (null != error) {
                          const presentError = ToastUtils.presentError;
                          ToastUtils;
                          let anyErrorMessage = error.getAnyErrorMessage();
                          if (anyErrorMessage == null) {
                            const intl = intl2.intl;
                            anyErrorMessage = intl.string(intl2.t.R0RpRX);
                          }
                          presentError(anyErrorMessage);
                        }
                      }
                    }
                    if (cResult[17] === editStateId) {
                      class O {
                        constructor() {
                          if (null != error) {
                            const presentError = ToastUtils.presentError;
                            ToastUtils;
                            let anyErrorMessage = error.getAnyErrorMessage();
                            if (anyErrorMessage == null) {
                              const intl = intl2.intl;
                              anyErrorMessage = intl.string(intl2.t.R0RpRX);
                            }
                            presentError(anyErrorMessage);
                          }
                        }
                      }
                    }
                    cResult[17] = editStateId;
                    cResult[18] = groupListingId;
                    cResult[19] = guildId;
                    cResult[20] = tmp18;
                    cResult[21] = jsx(guildId(tmp2[13]).EditStateContextProvider, {
                      guildId,
                      editStateId,
                      groupListingId,
                      children: tmp18,
                    });
                    const tmp23 = jsx(guildId(tmp2[13]).EditStateContextProvider, {
                      guildId,
                      editStateId,
                      groupListingId,
                      children: tmp18,
                    });
                  }
                  cResult[14] = guildId;
                  cResult[15] = tmp13;
                  cResult[16] = jsx(guildId(tmp2[12]).RoleSubscriptionSettingsDisabledContextProvider, {
                    guildId,
                    children: tmp13,
                  });
                  const tmp20 = jsx(guildId(tmp2[12]).RoleSubscriptionSettingsDisabledContextProvider, {
                    guildId,
                    children: tmp13,
                  });
                }
                const tmp15 = groupListingId;
                cResult[11] = guildId;
                cResult[12] = tmp7;
                cResult[13] = jsx(groupListingId(tmp2[11]), { guildId, modalKey, onDone: tmp7, steps: tmp12 });
                const tmp17 = jsx(groupListingId(tmp2[11]), { guildId, modalKey, onDone: tmp7, steps: tmp12 });
              }
            }
          }
        }
      }
      _require = editStateId(function* () {
        let v3;
        if (v3 === 2) {
          v3 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp2 === 3) {
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
                guildId = tmp3;
                const obj4 = {
                  guildId,
                  editStateId,
                  groupListingId,
                  onBeforeDispatchNewListing(id) {
                    return closure_1_5(id.id);
                  },
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
          } catch (tmp15) {
            v3 = 3;
            throw tmp15;
          }
        }
      });
      function handleCreate() {
        return closure_0(...arguments);
      }
      cResult[0] = editStateId;
      cResult[1] = groupListingId;
      cResult[2] = guildId;
      cResult[3] = handleCreateOrUpdateFromEditState;
      cResult[4] = onAfterTierCreation;
      cResult[5] = onClose;
      cResult[6] = handleCreate;
      tmp7 = handleCreate;
    }
  : (guildId) => {
      let _undefined;
      let c6;
      let closure_5;
      let editStateId;
      let error;
      guildId = guildId.guildId;
      const groupListingId = guildId.groupListingId;
      ({ onClose: importAll, onAfterTierCreation: dependencyMap } = guildId);
      editStateId = undefined;
      _slicedToArray = undefined;
      react = undefined;
      error = undefined;
      let obj = function _handleCreate2() {
        obj = _asyncToGenerator(async () => {
          if (c2 === 2) {
            c2 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp2 === 3) {
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
                  let closure_0 = tmp3;
                  const obj4 = {
                    guildId,
                    editStateId,
                    groupListingId,
                    onBeforeDispatchNewListing(id) {
                      return closure_1_5(id.id);
                    },
                  };
                  c1 = 1;
                  c2 = 1;
                  const obj5 = { value: _undefined(obj4), done: false };
                  return obj5;
                }
              } else if (arg0 === 1) {
                c2 = 3;
                throw value;
              } else if (arg0 === 2) {
                c2 = 3;
                obj = { value, done: true };
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
            } catch (tmp15) {
              c2 = 3;
              throw tmp15;
            }
          }
        });
        return obj(...arguments);
      };
      [editStateId, _slicedToArray] = react.useState(guildId.editStateId);
      obj = GuildRoleSubscriptionListingEditStateUtilsAll;
      const createOrUpdateListingFromEditState = obj.useCreateOrUpdateListingFromEditState();
      ({ handleCreateOrUpdateFromEditState: c6, error } = createOrUpdateListingFromEditState);
      let items = [error];
      const layoutEffect = react.useLayoutEffect(() => {
        if (null != error) {
          const presentError = ToastUtils.presentError;
          ToastUtils;
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = intl2.intl;
            anyErrorMessage = intl.string(intl2.t.R0RpRX);
          }
          presentError(anyErrorMessage);
        }
      }, items);
      const memo = react.useMemo(() => {
        const items = [, , , ,];
        ({
          DETAILS: arr[0],
          CHANNEL_BENEFITS: arr[1],
          INTANGIBLE_BENEFITS: arr[2],
          DESIGN: arr[3],
          CONFIRMATION: arr[4],
        } = obj);
        return items;
      }, []);
      const EditStateContextProvider = guildId(17944).EditStateContextProvider;
      let obj3 = { guildId, children: null };
      const RoleSubscriptionSettingsDisabledContextProvider =
        guildId(17921).RoleSubscriptionSettingsDisabledContextProvider;
      let obj4 = {
        guildId,
        modalKey,
        onDone: function handleCreate() {
          return obj(...arguments);
        },
        steps: memo,
      };
      return (
        <EditStateContextProvider guildId={guildId} editStateId={editStateId} groupListingId={groupListingId}>
          {null}
        </EditStateContextProvider>
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionTierCreationModal.tsx",
);

export default tmp3;
