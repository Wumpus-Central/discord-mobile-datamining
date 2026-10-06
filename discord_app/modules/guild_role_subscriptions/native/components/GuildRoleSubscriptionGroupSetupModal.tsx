// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import Constants from "../../../../Constants.tsx";
import intl2 from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import RoleTierEditStore from "../RoleTierEditStore.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _asyncToGenerator_mod from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import react_mod from "../../../../../_runtime/00019_react.js";
import GuildRoleSubscriptionsConstants from "../../GuildRoleSubscriptionsConstants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, c4, c6, closure_10, dependencyMap, editStateId, importAll, state;

let c10;
let unpackModuleId;
function createGroupFromStore() {
  return obj(...arguments);
}
let obj = function _createGroupFromStore() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2, arg3) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let closure_3 = arg3;
    if (c6 === 2) {
      c6 = 3;
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
        let id;
        let groupCover;
        let groupDescription;
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp3;
            closure_1 = closure_2;
            closure_2 = closure_3;
            id = undefined;
            state = state.getState();
            groupCover = state.groupCover;
            groupDescription = state.groupDescription;
            const tmp22 = closure_1;
            if (null != groupCover) {
              const obj4 = { description: groupDescription };
              c5 = 1;
              c6 = 1;
              const obj5 = { value: tmp22(closure_0, obj4), done: false };
              return obj5;
            }
          }
        } else if (1 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            id = value;
            if (null != id) {
              const obj7 = { cover_image: groupCover.uri, description: groupDescription };
              c5 = 2;
              c6 = 1;
              const obj8 = { value: closure_1(closure_0, obj7), done: false };
              return obj8;
            }
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_2(id);
          c6 = 3;
          obj = { value: id.id, done: true };
          return obj;
        }
        c6 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp12) {
        c6 = 3;
        throw tmp12;
      }
    }
  });
  return obj(...arguments);
};
let closure_4 = ["editStateId"];
let _slicedToArray = _slicedToArray_mod;
let _asyncToGenerator = _asyncToGenerator_mod;
let react = react_mod;
const useRoleTierEditStore = RoleTierEditStore.useRoleTierEditStore;
({ GuildRoleSubscriptionsTierScenes: c10, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: unpackModuleId } =
  GuildRoleSubscriptionsConstants);
const AnalyticEvents = Constants.AnalyticEvents;
const jsx = Fragment.jsx;
let tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (editStateId) => {
      let closure_7;
      let createSubscriptionGroupListing;
      let first1;
      let handleCreateOrUpdateFromEditState;
      let tmp4;
      let tmp5;
      let updateSubscriptionsSettings;
      const tmp = _require;
      const tmp2 = dependencyMap;
      obj = require("react");
      const cResult = obj.c(29);
      if (cResult[0] !== editStateId) {
        editStateId = editStateId.editStateId;
        const tmp8 = first1(editStateId, createSubscriptionGroupListing);
        _require = tmp8;
        cResult[0] = editStateId;
        cResult[1] = editStateId;
        cResult[2] = tmp8;
        tmp5 = tmp8;
        tmp4 = editStateId;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
      }
      let guildId = tmp5.guildId;
      let obj2 = handleCreateOrUpdateFromEditState;
      const tmp9 = updateSubscriptionsSettings(handleCreateOrUpdateFromEditState.useState(), 2);
      const first = tmp9[0];
      dependencyMap = tmp9[1];
      const tmpResult = tmp(15045);
      createSubscriptionGroupListing = tmpResult.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
      const tmpResult2 = tmp(15045);
      const updateSubscriptionsSettings1 = tmpResult2.useUpdateSubscriptionsSettings();
      updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
      let error = updateSubscriptionsSettings1.error;
      const tmp12 = updateSubscriptionsSettings(handleCreateOrUpdateFromEditState.useState(tmp4), 2);
      first1 = tmp12[0];
      _asyncToGenerator = tmp12[1];
      let obj5 = first(15060);
      const createOrUpdateListingFromEditState = obj5.useCreateOrUpdateListingFromEditState();
      handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
      if (error == null) {
        error = createOrUpdateListingFromEditState.error;
      }
      if (cResult[3] === createSubscriptionGroupListing) {
        if (cResult[4] === first1) {
          if (cResult[5] === error) {
            let id;
            const tmp15 = cResult[6];
            if (first != null) {
              id = first.id;
            }
            if (tmp15 === id) {
              if (cResult[7] === guildId) {
                if (cResult[8] === handleCreateOrUpdateFromEditState) {
                  if (cResult[9] === tmp5) {
                    let tmp17;
                    let tmp19;
                    let tmp18;
                    let tmp22;
                    let tmp24;
                    let tmp25;
                    if (cResult[10] === updateSubscriptionsSettings) {
                      tmp17 = cResult[11];
                    }
                    if (cResult[12] !== error) {
                      const fn = function x() {
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
                      };
                      const items = [error];
                      cResult[12] = error;
                      cResult[13] = fn;
                      cResult[14] = items;
                      tmp19 = items;
                      tmp18 = fn;
                    } else {
                      tmp18 = cResult[13];
                      tmp19 = cResult[14];
                    }
                    const effect = obj2.useEffect(tmp18, tmp19);
                    const _Symbol = Symbol;
                    if (cResult[15] === Symbol.for("react.memo_cache_sentinel")) {
                      const items1 = [, , , , , ,];
                      ({
                        GATING: arr2[0],
                        GROUP: arr2[1],
                        DETAILS: arr2[2],
                        CHANNEL_BENEFITS: arr2[3],
                        INTANGIBLE_BENEFITS: arr2[4],
                        DESIGN: arr2[5],
                      } = closure_10);
                      let obj3 = { scene: closure_10.CONFIRMATION, extraProps: { isForGroupSetupModal: true } };
                      items1[6] = obj3;
                      cResult[15] = items1;
                      tmp22 = items1;
                    } else {
                      tmp22 = cResult[15];
                    }
                    closure_10 = tmp22;
                    const _Symbol2 = Symbol;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj4 = {
                        impressionName: tmp(1260).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING,
                      };
                      cResult[16] = obj4;
                      tmp24 = obj4;
                    } else {
                      tmp24 = cResult[16];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj6 = {};
                      obj6[closure_10.GATING] = tmp24;
                      let obj7 = {
                        impressionName: tmp(1260).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP,
                      };
                      const DETAILS = closure_10.DETAILS;
                      obj6[DETAILS] = obj7;
                      cResult[17] = obj6;
                      tmp25 = obj6;
                    } else {
                      tmp25 = cResult[17];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      class X {
                        constructor(arg0) {
                          closure_0 = arg0;
                          const findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = AppAnalyticsUtilsDefault;
                          const obj2 = { setup_modal_step: findIndexResult + 1 };
                          obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
                        }
                      }
                      cResult[18] = X;
                    } else {
                      class X {
                        constructor(arg0) {
                          closure_0 = arg0;
                          const findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = AppAnalyticsUtilsDefault;
                          const obj2 = { setup_modal_step: findIndexResult + 1 };
                          obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
                        }
                      }
                    }
                    if (cResult[19] === tmp17) {
                      class X {
                        constructor(arg0) {
                          closure_0 = arg0;
                          const findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = AppAnalyticsUtilsDefault;
                          const obj2 = { setup_modal_step: findIndexResult + 1 };
                          obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
                        }
                      }
                      if (cResult[22] === guildId) {
                        class X {
                          constructor(arg0) {
                            closure_0 = arg0;
                            const findIndexResult = closure_10.findIndex((item) => item === closure_0);
                            obj = AppAnalyticsUtilsDefault;
                            const obj2 = { setup_modal_step: findIndexResult + 1 };
                            obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
                          }
                        }
                        if (cResult[25] === first1) {
                          class X {
                            constructor(arg0) {
                              closure_0 = arg0;
                              const findIndexResult = closure_10.findIndex((item) => item === closure_0);
                              obj = AppAnalyticsUtilsDefault;
                              const obj2 = { setup_modal_step: findIndexResult + 1 };
                              obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
                            }
                          }
                        }
                        let tmp42 = jsx(tmp(17990).EditStateContextProvider, {
                          guildId,
                          editStateId: first1,
                          groupListingId: null,
                          children: tmp37,
                        });
                        cResult[25] = first1;
                        cResult[26] = guildId;
                        cResult[27] = tmp37;
                        cResult[28] = tmp42;
                      }
                      cResult[22] = guildId;
                      cResult[23] = tmp28;
                      cResult[24] = jsx(tmp(17967).RoleSubscriptionSettingsDisabledContextProvider, {
                        guildId,
                        children: tmp28,
                      });
                      const tmp39 = jsx(tmp(17967).RoleSubscriptionSettingsDisabledContextProvider, {
                        guildId,
                        children: tmp28,
                      });
                    }
                    const obj10 = { modalKey, onDone: tmp17, steps: tmp22, onClose: X, stepScreenPropsMap: tmp25 };
                    guildId(17982);
                    const merged = Object.assign(tmp5);
                    const tmp36 = (
                      <tmp31 modalKey={modalKey} onDone={tmp17} steps={tmp22} onClose={X} stepScreenPropsMap={tmp25} />
                    );
                    cResult[19] = tmp17;
                    cResult[20] = tmp5;
                    cResult[21] = tmp36;
                  }
                }
              }
            }
          }
        }
      }
      _require = _asyncToGenerator(async () => {
        let anyErrorMessage;
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp4 === 3) {
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
            let groupListingId;
            let id;
            c5 = 2;
            if (0 === c4) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_3 = tmp;
                groupListingId = undefined;
                id = undefined;
                if (id != null) {
                  id = id.id;
                }
                if (id == null) {
                  c4 = 1;
                  c5 = 1;
                  const obj4 = { value: createGroupFromStore(guildId, c4, c5, closure_3), done: false };
                  return obj4;
                }
              }
            } else {
              if (1 === tmp5) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj5 = { value, done: true };
                  return obj5;
                } else {
                  id = value;
                }
              } else if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                obj = { value, done: true };
                return obj;
              } else if (value) {
                id.onClose();
              }
              c5 = 3;
              return { value: "IconComponent", done: null };
            }
            groupListingId = id;
            if (null != groupListingId) {
              if (null != anyErrorMessage) {
                const presentError = groupListingId(closure_2_3[12]).presentError;
                const tmp42 = groupListingId(closure_2_3[12]);
                anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                guildId = anyErrorMessage;
                if (anyErrorMessage == null) {
                  const intl = groupListingId(closure_2_3[13]).intl;
                  guildId = intl.string(groupListingId(closure_2_3[13]).t.ZUEGFn);
                }
                presentError(guildId);
              }
              const obj6 = {
                guildId,
                editStateId,
                groupListingId,
                onBeforeDispatchNewListing(id) {
                  return closure_1_7(id.id);
                },
              };
              c4 = 2;
              c5 = 1;
              const obj7 = { value: handleCreateOrUpdateFromEditState(obj6), done: false };
              return obj7;
            }
          } catch (tmp34) {
            c5 = 3;
            throw tmp34;
          }
        }
      });
      cResult[3] = createSubscriptionGroupListing;
      cResult[4] = first1;
      cResult[5] = error;
      if (first != null) {
        class X {
          constructor(arg0) {
            closure_0 = arg0;
            const findIndexResult = closure_10.findIndex((item) => item === closure_0);
            obj = AppAnalyticsUtilsDefault;
            const obj2 = { setup_modal_step: findIndexResult + 1 };
            obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
          }
        }
      }
      function handleCreateGroupAndTier() {
        return closure_0(...arguments);
      }
      cResult[6] = undefined;
      cResult[7] = guildId;
      cResult[8] = handleCreateOrUpdateFromEditState;
      cResult[9] = tmp5;
      cResult[10] = updateSubscriptionsSettings;
      cResult[11] = handleCreateGroupAndTier;
      tmp17 = handleCreateGroupAndTier;
    }
  : (editStateId) => {
      let _undefined;
      let c2;
      let c3;
      let c5;
      let closure_7;
      let closure_8;
      let error;
      editStateId = editStateId.editStateId;
      const merged = Object.assign(editStateId, Object.assign({ editStateId: 0 }));
      importAll = undefined;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      editStateId = undefined;
      closure_7 = undefined;
      react = undefined;
      error = undefined;
      let memo;
      obj = function _handleCreateGroupAndTier2() {
        obj = _asyncToGenerator(async () => {
          if (c5 === 2) {
            c5 = 3;
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
              let closure_3;
              let groupListingId;
              c5 = 2;
              if (0 === c4) {
                if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  closure_3 = tmp4;
                  let closure_2 = tmp;
                  groupListingId = undefined;
                  id = undefined;
                  if (id != null) {
                    id = id.id;
                  }
                  if (id == null) {
                    c4 = 1;
                    c5 = 1;
                    const obj4 = { value: closure_1_14(guildId, closure_2_4, closure_2_5, _undefined), done: false };
                    return obj4;
                  }
                }
              } else {
                if (1 === c4) {
                  if (arg0 === 1) {
                    c5 = 3;
                    throw value;
                  } else if (arg0 === 2) {
                    c5 = 3;
                    const obj5 = { value, done: true };
                    return obj5;
                  } else {
                    id = value;
                  }
                } else if (arg0 === 1) {
                  c5 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c5 = 3;
                  obj = { value, done: true };
                  return obj;
                } else if (value) {
                  closure_131_0.onClose();
                }
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
              groupListingId = id;
              if (null != groupListingId) {
                if (null != closure_131_9) {
                  const presentError = id(closure_3[12]).presentError;
                  const tmp41 = id(closure_3[12]);
                  const anyErrorMessage = closure_131_9.getAnyErrorMessage();
                  let closure_1 = anyErrorMessage;
                  if (anyErrorMessage == null) {
                    const intl = id(closure_3[13]).intl;
                    closure_1 = intl.string(id(closure_3[13]).t.ZUEGFn);
                  }
                  presentError(closure_1);
                }
                const obj6 = {
                  guildId: closure_131_1,
                  editStateId: closure_131_6,
                  groupListingId,
                  onBeforeDispatchNewListing(id) {
                    return closure_1_7(id.id);
                  },
                };
                c4 = 2;
                c5 = 1;
                const obj7 = { value: closure_131_8(obj6), done: false };
                return obj7;
              }
            } catch (tmp33) {
              c5 = 3;
              throw tmp33;
            }
          }
        });
        return obj(...arguments);
      };
      const guildId = merged.guildId;
      obj = react;
      [c2, c3] = react.useState();
      const tmp3 = merged;
      const tmp4 = dependencyMap;
      _slicedToArray(react.useState(), 2);
      let obj2 = merged(15045);
      closure_4 = obj2.useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
      let obj3 = merged(15045);
      const updateSubscriptionsSettings = obj3.useUpdateSubscriptionsSettings();
      ({ updateSubscriptionsSettings: c5, error } = updateSubscriptionsSettings);
      [editStateId, closure_7] = react.useState(editStateId);
      let obj4 = GuildRoleSubscriptionListingEditStateUtilsAll;
      const createOrUpdateListingFromEditState = obj4.useCreateOrUpdateListingFromEditState();
      react = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
      if (error == null) {
        error = createOrUpdateListingFromEditState.error;
      }
      let items = [error];
      const effect = obj.useEffect(() => {
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
      memo = obj.useMemo(() => {
        const items = [, , , , , ,];
        ({
          GATING: arr[0],
          GROUP: arr[1],
          DETAILS: arr[2],
          CHANNEL_BENEFITS: arr[3],
          INTANGIBLE_BENEFITS: arr[4],
          DESIGN: arr[5],
        } = obj);
        items[6] = { scene: obj.CONFIRMATION, extraProps: { isForGroupSetupModal: true } };
        return items;
      }, []);
      const items1 = [memo];
      const memo1 = obj.useMemo(() => {
        obj = {};
        obj[obj.GATING] = {
          impressionName: merged(c3[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING,
        };
        ({ impressionName: merged(c3[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING });
        obj[obj.DETAILS] = {
          impressionName: merged(c3[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP,
        };
        ({ impressionName: merged(c3[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP });
        return obj;
      }, []);
      const callback = obj.useCallback((arg0) => {
        let closure_0 = arg0;
        const findIndexResult = memo.findIndex((item) => item === closure_0);
        obj = AppAnalyticsUtilsDefault;
        const obj2 = { setup_modal_step: findIndexResult + 1 };
        obj.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, obj2);
      }, items1);
      const EditStateContextProvider = tmp3(17990).EditStateContextProvider;
      let obj6 = { guildId, children: null };
      const RoleSubscriptionSettingsDisabledContextProvider =
        tmp3(17967).RoleSubscriptionSettingsDisabledContextProvider;
      let obj7 = {
        modalKey: memo,
        onDone: function handleCreateGroupAndTier() {
          return obj(...arguments);
        },
        steps: memo,
        onClose: callback,
        stepScreenPropsMap: memo1,
      };
      guildId(17982);
      const merged1 = Object.assign(merged);
      return (
        <EditStateContextProvider guildId={guildId} editStateId={editStateId} groupListingId={null}>
          {null}
        </EditStateContextProvider>
      );
    };
tmp3.modalConfig = { closable: false };
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx",
);

export default tmp3;
