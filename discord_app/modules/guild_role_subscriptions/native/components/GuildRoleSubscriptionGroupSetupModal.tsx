// discord_app/modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx
import util from "../../../../intl/index.native.tsx";
import ToastUtils from "../../../toast/native/ToastUtils.tsx";
import AppAnalyticsUtilsDefault from "../../../app_analytics/AppAnalyticsUtils.tsx";
import GuildRoleSubscriptionListingEditStateUtilsAll from "../../edit_state/GuildRoleSubscriptionListingEditStateUtils.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import _objectWithoutProperties from "../../../../../_runtime/metro/00109__objectWithoutProperties.js";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
function createGroupFromStore() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_15 = async function _createGroupFromStore(arg0) {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: "IconComponent" };
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
          const obj3 = { value, done: true };
          return obj3;
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
            const obj4 = { description: groupDescription };
            c5 = 1;
            c6 = 1;
            const obj5 = { value: importDefault(closure_0, obj4), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp4) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_132_5 = value;
          if (null != closure_132_5) {
            const obj7 = { cover_image: closure_132_3.uri, description: closure_132_4 };
            c5 = 2;
            c6 = 1;
            const obj8 = { value: closure_132_1(closure_132_0, obj7), done: false };
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
        closure_132_2(closure_132_5);
        c6 = 3;
        const obj = { value: closure_132_5.id, done: true };
        return obj;
      }
      c6 = 3;
      return { value: "IconComponent", done: "IconComponent" };
    } catch (tmp13) {
      c6 = tmp;
      throw tmp13;
    }
  }
};
let closure_4 = ["editStateId"];
const useRoleTierEditStore = fn(17902).useRoleTierEditStore;
const GuildRoleSubscriptionsConstants = fn(15019);
({ GuildRoleSubscriptionsTierScenes: c10, GUILD_ROLE_SUBSCRIPTION_GROUP_SETUP_KEY: closure_11 } =
  GuildRoleSubscriptionsConstants);
const AnalyticEvents = fn(1085).AnalyticEvents;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (editStateId) => {
      const cResult = require("c").c(29);
      if (cResult[0] !== editStateId) {
        editStateId = editStateId.editStateId;
        const tmp8 = first1(editStateId, createSubscriptionGroupListing);
        _require = tmp8;
        cResult[0] = editStateId;
        cResult[1] = editStateId;
        cResult[2] = tmp8;
        let tmp4 = editStateId;
      } else {
        tmp4 = cResult[1];
        _require = cResult[2];
      }
      let guildId = tmp5.guildId;
      const tmp9 = updateSubscriptionsSettings(handleCreateOrUpdateFromEditState.useState(), 2);
      const first = tmp9[0];
      dependencyMap = tmp9[1];
      let obj = require("c");
      let obj2 = handleCreateOrUpdateFromEditState;
      createSubscriptionGroupListing =
        require("GuildRoleSubscriptionsHooks").useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
      const tmpResult = require("GuildRoleSubscriptionsHooks");
      const updateSubscriptionsSettings1 = require("GuildRoleSubscriptionsHooks").useUpdateSubscriptionsSettings();
      updateSubscriptionsSettings = updateSubscriptionsSettings1.updateSubscriptionsSettings;
      let error = updateSubscriptionsSettings1.error;
      const tmp12 = updateSubscriptionsSettings(handleCreateOrUpdateFromEditState.useState(tmp4), 2);
      first1 = tmp12[0];
      asyncGeneratorStep = tmp12[1];
      const tmpResult2 = require("GuildRoleSubscriptionsHooks");
      const createOrUpdateListingFromEditState = first(15041).useCreateOrUpdateListingFromEditState();
      handleCreateOrUpdateFromEditState = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
      if (error == null) {
        error = createOrUpdateListingFromEditState.error;
      }
      if (cResult[3] === createSubscriptionGroupListing) {
        if (cResult[4] === first1) {
          if (cResult[5] === error) {
            let id;
            if (first != null) {
              id = first.id;
            }
            if (cResult[6] === id) {
              if (cResult[7] === guildId) {
                if (cResult[8] === handleCreateOrUpdateFromEditState) {
                  if (cResult[9] === tmp5) {
                    if (cResult[10] === updateSubscriptionsSettings) {
                      let tmp16 = cResult[11];
                    }
                    if (cResult[12] !== error) {
                      const fn = function x() {
                        if (null != error) {
                          let anyErrorMessage = error.getAnyErrorMessage();
                          if (anyErrorMessage == null) {
                            const intl = util.intl;
                            anyErrorMessage = intl.string(util.t.R0RpRX);
                          }
                          ToastUtils.presentError(anyErrorMessage);
                        }
                      };
                      const items = [error];
                      cResult[12] = error;
                      cResult[13] = fn;
                      cResult[14] = items;
                      let tmp18 = items;
                      let tmp17 = fn;
                    } else {
                      tmp17 = cResult[13];
                      tmp18 = cResult[14];
                    }
                    const effect = obj2.useEffect(tmp17, tmp18);
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
                      let tmp21 = items1;
                    } else {
                      tmp21 = cResult[15];
                    }
                    closure_10 = tmp21;
                    const _Symbol2 = Symbol;
                    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj4 = {
                        impressionName: tmp(1260).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING,
                      };
                      cResult[16] = obj4;
                      let tmp23 = obj4;
                    } else {
                      tmp23 = cResult[16];
                    }
                    const _Symbol3 = Symbol;
                    if (cResult[17] === Symbol.for("react.memo_cache_sentinel")) {
                      let obj6 = {};
                      obj6[closure_10.GATING] = tmp23;
                      let obj7 = {
                        impressionName: tmp(1260).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP,
                      };
                      obj6[closure_10.DETAILS] = obj7;
                      cResult[17] = obj6;
                      let tmp24 = obj6;
                    } else {
                      tmp24 = cResult[17];
                    }
                    const _Symbol4 = Symbol;
                    if (cResult[18] === Symbol.for("react.memo_cache_sentinel")) {
                      class X {
                        constructor(arg0) {
                          closure_0 = editStateId;
                          findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = closure_1(closure_3[15]);
                          obj1 = { setup_modal_step: findIndexResult + 1 };
                          trackWithMetadataResult = obj.trackWithMetadata(
                            AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
                            obj1,
                          );
                          return;
                        }
                      }
                      cResult[18] = X;
                    } else {
                      class X {
                        constructor(arg0) {
                          closure_0 = editStateId;
                          findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = closure_1(closure_3[15]);
                          obj1 = { setup_modal_step: findIndexResult + 1 };
                          trackWithMetadataResult = obj.trackWithMetadata(
                            AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
                            obj1,
                          );
                          return;
                        }
                      }
                    }
                    if (cResult[19] === tmp16) {
                      class X {
                        constructor(arg0) {
                          closure_0 = editStateId;
                          findIndexResult = closure_10.findIndex((item) => item === closure_0);
                          obj = closure_1(closure_3[15]);
                          obj1 = { setup_modal_step: findIndexResult + 1 };
                          trackWithMetadataResult = obj.trackWithMetadata(
                            AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
                            obj1,
                          );
                          return;
                        }
                      }
                      if (cResult[22] === guildId) {
                        class X {
                          constructor(arg0) {
                            closure_0 = editStateId;
                            findIndexResult = closure_10.findIndex((item) => item === closure_0);
                            obj = closure_1(closure_3[15]);
                            obj1 = { setup_modal_step: findIndexResult + 1 };
                            trackWithMetadataResult = obj.trackWithMetadata(
                              AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
                              obj1,
                            );
                            return;
                          }
                        }
                        if (cResult[25] === first1) {
                          class X {
                            constructor(arg0) {
                              closure_0 = editStateId;
                              findIndexResult = closure_10.findIndex((item) => item === closure_0);
                              obj = closure_1(closure_3[15]);
                              obj1 = { setup_modal_step: findIndexResult + 1 };
                              trackWithMetadataResult = obj.trackWithMetadata(
                                AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
                                obj1,
                              );
                              return;
                            }
                          }
                        }
                        let obj8 = { guildId, editStateId: first1, groupListingId: null, children: tmp36 };
                        const tmp41 = jsx(tmp(17922).EditStateContextProvider, {
                          guildId,
                          editStateId: first1,
                          groupListingId: null,
                          children: tmp36,
                        });
                        cResult[25] = first1;
                        cResult[26] = guildId;
                        cResult[27] = tmp36;
                        cResult[28] = tmp41;
                      }
                      const obj9 = { guildId, children: tmp27 };
                      const tmp38 = jsx(tmp(17897).RoleSubscriptionSettingsDisabledContextProvider, {
                        guildId,
                        children: tmp27,
                      });
                      cResult[22] = guildId;
                      cResult[23] = tmp27;
                      cResult[24] = tmp38;
                    }
                    const obj10 = {};
                    const merged = Object.assign(tmp5);
                    obj10.modalKey = modalKey;
                    obj10.onDone = tmp16;
                    obj10.steps = tmp21;
                    obj10.onClose = X;
                    obj10.stepScreenPropsMap = tmp24;
                    const tmp35 = jsx(guildId(17914), {});
                    cResult[19] = tmp16;
                    cResult[20] = tmp5;
                    cResult[21] = tmp35;
                    const tmp30 = guildId(17914);
                  }
                }
              }
            }
          }
        }
      }
      _require = asyncGeneratorStep(async () => {
        if (c5 === 2) {
          c5 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp5 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: "IconComponent" };
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
                const obj3 = { value, done: true };
                return obj3;
              } else {
                closure_130_0 = undefined;
                let id;
                if (tmp3 != null) {
                  id = tmp3.id;
                }
                closure_0 = id;
                if (id == null) {
                  c4 = 1;
                  c5 = 1;
                  const obj4 = { value: createGroupFromStore(guildId, c4, c5, tmp2), done: false };
                  return obj4;
                } else {
                  closure_130_0 = closure_0;
                  if (null != closure_130_0) {
                    if (null != anyErrorMessage) {
                      anyErrorMessage = anyErrorMessage.getAnyErrorMessage();
                      guildId = anyErrorMessage;
                      if (anyErrorMessage == null) {
                        const intl = closure_0(tmp2[13]).intl;
                        guildId = intl.string(closure_0(tmp2[13]).t.ZUEGFn);
                      }
                      closure_0(tmp2[12]).presentError(guildId);
                      const obj8 = closure_0(tmp2[12]);
                    }
                    const obj5 = {
                      guildId,
                      editStateId,
                      groupListingId: closure_130_0,
                      onBeforeDispatchNewListing(id) {
                        return closure_1_7(id.id);
                      },
                    };
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: handleCreateOrUpdateFromEditState(obj5), done: false };
                    return obj6;
                  } else {
                    c5 = 3;
                  }
                }
              }
            } else if (1 === tmp6) {
              if (arg0 === 1) {
                c5 = 3;
                throw value;
              } else if (arg0 === 2) {
                c5 = 3;
                const obj7 = { value, done: true };
                return obj7;
              } else {
                closure_0 = value;
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 !== 2) {
              if (value) {
                closure_0.onClose();
              }
            }
            c5 = 3;
            const obj = { value, done: true };
            return obj;
          } catch (tmp35) {
            c5 = tmp;
            throw tmp35;
          }
        }
      });
      cResult[3] = createSubscriptionGroupListing;
      cResult[4] = first1;
      cResult[5] = error;
      if (first != null) {
        class X {
          constructor(arg0) {
            closure_0 = editStateId;
            findIndexResult = closure_10.findIndex((item) => item === closure_0);
            obj = closure_1(closure_3[15]);
            obj1 = { setup_modal_step: findIndexResult + 1 };
            trackWithMetadataResult = obj.trackWithMetadata(
              AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED,
              obj1,
            );
            return;
          }
        }
      }
      function handleCreateGroupAndTier() {
        const self = this;
        const apply = closure_0.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      }
      cResult[6] = undefined;
      cResult[7] = guildId;
      cResult[8] = handleCreateOrUpdateFromEditState;
      cResult[9] = tmp5;
      cResult[10] = updateSubscriptionsSettings;
      cResult[11] = handleCreateGroupAndTier;
      tmp16 = handleCreateGroupAndTier;
      let obj5 = first(15041);
    }
  : (editStateId) => {
      let merged = Object.assign(editStateId, Object.assign({ editStateId: 0 }));
      importAll = undefined;
      dependencyMap = undefined;
      _slicedToArray = undefined;
      editStateId = undefined;
      closure_7 = undefined;
      noop = undefined;
      error = undefined;
      let memo;
      constants = async function _handleCreateGroupAndTier2() {
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
            return { value: "IconComponent", done: "IconComponent" };
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
                const obj3 = { value, done: true };
                return obj3;
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
                  const obj4 = {
                    value: createGroupFromStore(guildId, closure_2_4, _slicedToArray, _undefined),
                    done: false,
                  };
                  return obj4;
                } else {
                  closure_130_0 = merged;
                  if (null != closure_130_0) {
                    if (null != closure_131_9) {
                      const anyErrorMessage = closure_131_9.getAnyErrorMessage();
                      closure_1 = anyErrorMessage;
                      if (anyErrorMessage == null) {
                        const intl = merged(1126).intl;
                        closure_1 = intl.string(merged(1126).t.ZUEGFn);
                      }
                      merged(4567).presentError(closure_1);
                      const obj8 = merged(4567);
                    }
                    const obj5 = {
                      guildId: closure_131_1,
                      editStateId: closure_131_6,
                      groupListingId: closure_130_0,
                      onBeforeDispatchNewListing(id) {
                        return closure_1_7(id.id);
                      },
                    };
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: closure_131_8(obj5), done: false };
                    return obj6;
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
                const obj7 = { value, done: true };
                return obj7;
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
            const obj = { value, done: true };
            return obj;
          } catch (tmp34) {
            c5 = tmp;
            throw tmp34;
          }
        }
      };
      const guildId = merged.guildId;
      [c2, c3] = noop.useState();
      const tmp2 = _slicedToArray(noop.useState(), 2);
      closure_4 = merged(15026).useCreateSubscriptionGroupListing().createSubscriptionGroupListing;
      let obj2 = merged(15026);
      const updateSubscriptionsSettings = merged(15026).useUpdateSubscriptionsSettings();
      ({ updateSubscriptionsSettings: c5, error } = updateSubscriptionsSettings);
      [editStateId, closure_7] = noop.useState(editStateId.editStateId);
      let obj3 = merged(15026);
      const createOrUpdateListingFromEditState =
        GuildRoleSubscriptionListingEditStateUtilsAll.useCreateOrUpdateListingFromEditState();
      noop = createOrUpdateListingFromEditState.handleCreateOrUpdateFromEditState;
      if (error == null) {
        error = createOrUpdateListingFromEditState.error;
      }
      let items = [error];
      const effect = obj.useEffect(() => {
        if (null != error) {
          let anyErrorMessage = error.getAnyErrorMessage();
          if (anyErrorMessage == null) {
            const intl = util.intl;
            anyErrorMessage = intl.string(util.t.R0RpRX);
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
      const items1 = [memo];
      const memo1 = obj.useMemo(() => {
        const obj = {};
        obj[constants.GATING] = {
          impressionName: merged(_undefined[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING,
        };
        const obj2 = {
          impressionName: merged(_undefined[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_LANDING,
        };
        obj[constants.DETAILS] = {
          impressionName: merged(_undefined[14]).ImpressionNames.ROLE_SUBSCRIPTION_INITIAL_SETUP_MODAL_TIER_STEP,
        };
        return obj;
      }, []);
      const callback = obj.useCallback((arg0) => {
        closure_0 = arg0;
        const findIndexResult = memo.findIndex((item) => item === closure_0);
        AppAnalyticsUtilsDefault.trackWithMetadata(AnalyticEvents.GUILD_ROLE_SUBSCRIPTION_SETUP_MODAL_CLOSED, {
          setup_modal_step: findIndexResult + 1,
        });
      }, items1);
      let obj5 = { guildId, editStateId, groupListingId: null, children: null };
      let obj6 = { guildId, children: null };
      let obj7 = {};
      const merged1 = Object.assign(merged);
      obj7.modalKey = memo;
      obj7.onDone = function handleCreateGroupAndTier() {
        const self = this;
        const apply = closure_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      };
      obj7.steps = memo;
      obj7.onClose = callback;
      obj7.stepScreenPropsMap = memo1;
      obj6.children = jsx(guildId(17914), {});
      obj5.children = jsx(merged(17897).RoleSubscriptionSettingsDisabledContextProvider, { guildId, children: null });
      return jsx(merged(17922).EditStateContextProvider, {
        guildId,
        editStateId,
        groupListingId: null,
        children: null,
      });
    };
tmp3.modalConfig = { closable: false };
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/GuildRoleSubscriptionGroupSetupModal.tsx",
);

export default tmp3;
