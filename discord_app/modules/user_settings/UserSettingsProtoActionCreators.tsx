// discord_app/modules/user_settings/UserSettingsProtoActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import DurationsDefault from "../../utils/Durations.tsx";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import Dispatcher_mod from "../../Dispatcher.tsx";

let obj2 = fn;
function updateUserGuildSettings(guildId, arg1, INFREQUENT_USER_ACTION) {
  closure_0 = guildId;
  closure_1 = arg1;
  return obj.updateAsync(
    "guilds",
    async (guilds) => obj2(1222).mutateUserGuildSettingsInternal(guilds, closure_0, closure_1),
    INFREQUENT_USER_ACTION,
  );
}
function updateRecurringDismissibleContentState() {
  const self = this;
  const apply = closure_14.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_14 = async function _updateRecurringDismissibleContentState() {
  await PreloadedUserSettingsActionCreators.updateAsync(
    "userContent",
    async (recurringDismissibleContentStates) => {
      const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
      const merged1 = Object.assign(closure_1);
      recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0] = {};
    },
    constants.INFREQUENT_USER_ACTION,
  );
  return value;
};
let closure_15 = async function _updateGuildDismissedContent() {
  closure_1 = closure_2;
  await updateUserGuildSettings(
    closure_1,
    (guildDismissibleContentStates) => {
      const merged = Object.assign(guildDismissibleContentStates.guildDismissibleContentStates[closure_0]);
      const merged1 = Object.assign(closure_1);
      guildDismissibleContentStates.guildDismissibleContentStates[closure_0] = {};
    },
    constants.INFREQUENT_USER_ACTION,
  );
  return value;
};
const UserSettingsConstants = fn(1084);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const Constants = fn(1074);
({ AbortCodes: closure_7, Endpoints: closure_8, AnalyticEvents: closure_9 } = Constants);
const UserSettingsProtoLastWriteTimes = "UserSettingsProtoLastWriteTimes";
let timestamp = Date.now();
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
let Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_CLOSED", () => {
  const timestamp = Date.now();
});
if (typeof document !== "undefined") {
  const _document = document;
  const listener = document.addEventListener("mousedown", () => {});
  const _document2 = document;
  const listener1 = document.addEventListener("keydown", () => {});
}
class UserSettingsProtoActionCreators {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.beforeSendCallbacks = [];
    obj.lastSendTime = 0;
    closure_0 = obj;
    obj.persistChanges = closure_3(async () => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj3 = { value, done: true };
          return obj3;
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
              const obj4 = { value, done: true };
              return obj4;
            } else {
              const protoToSave = tmp7;
              closure_128_0 = undefined;
              let body2;
              closure_128_2 = undefined;
              closure_128_3 = undefined;
              let timeout;
              tmp3(tmp82[8])(true, "this cannot run in the overlay");
              const logger7 = obj.logger;
              logger7.log("Persisting proto");
              const editInfo = obj.getEditInfo().editInfo;
              closure_128_0 = editInfo;
              if (null != editInfo.protoToSave) {
                const item = obj.beforeSendCallbacks.forEach((processProto) =>
                  processProto.processProto(protoToSave.protoToSave),
                );
                const protoToB64Result = protoToSave(tmp82[10]).protoToB64(obj.ProtoClass, editInfo.protoToSave);
                if (null != protoToB64Result) {
                  if ("" !== protoToB64Result) {
                    c3 = 1;
                    obj.saveLastSendTime();
                    const HTTP = protoToSave(tmp82[11]).HTTP;
                    const request = {
                      url: closure_1_8.USER_SETTINGS_PROTO(obj.type),
                      body: null,
                      rejectWithError: false,
                    };
                    const obj5 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                    request.body = obj5;
                    c4 = 2;
                    c5 = 1;
                    const obj6 = { value: HTTP.patch(request), done: false };
                    return obj6;
                  }
                }
                const logger5 = obj.logger;
                logger5.log("Not persisting proto because there is nothing to change");
                const beforeSendCallbacks = obj.beforeSendCallbacks;
                const obj7 = protoToSave(tmp82[10]);
              } else {
                const logger4 = obj.logger;
                logger4.log("Not persisting proto because the proto was null");
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              closure_128_5 = tmp82;
              if (429 !== closure_128_5.status) {
                if (400 === closure_128_5.status) {
                  const body = closure_128_5.body;
                  let code;
                  if (body != null) {
                    code = body.code;
                  }
                  if (code === constants.INVALID_USER_SETTINGS_DATA) {
                    const logger3 = closure_129_0.logger;
                    logger3.log("Reloading do to invalid data");
                    const item1 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
                    const ifNecessary = closure_129_0.loadIfNecessary(true);
                    let tmp57 = closure_128_5;
                    const errorCallbacks = closure_129_0.getEditInfo().editInfo.errorCallbacks;
                  }
                  throw tmp57;
                }
                const logger2 = closure_129_0.logger;
                logger2.log("Unknown user settings error");
                const item2 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
                tmp57 = closure_128_5;
                const errorCallbacks1 = closure_129_0.getEditInfo().editInfo.errorCallbacks;
              } else {
                const logger6 = closure_129_0.logger;
                logger6.log("Rate limited, scheduling retry");
                const _parseInt = parseInt;
                closure_128_3 = parseInt(closure_128_5.headers["retry-after"]);
                const _isNaN = isNaN;
                if (isNaN(closure_128_3)) {
                  closure_128_3 = 60;
                }
                const _setTimeout = setTimeout;
                const _Math = Math;
                const result = 30 * tmp3(tmp82[9]).Millis.SECOND;
                timeout = setTimeout(
                  closure_129_0.persistChanges,
                  Math.min(result, closure_128_3 * tmp3(tmp82[9]).Millis.SECOND),
                );
                const obj8 = { rateLimited: true, timeout };
                closure_129_0.dispatchChanges(obj8);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj9 = { value, done: true };
              return obj9;
            } else {
              body2 = value.body;
              if (body2.out_of_date) {
                const logger = closure_129_0.logger;
                logger.log("Proto was out of date, discarding changes");
              }
              const cleanupFuncs = closure_129_0.getEditInfo().editInfo.cleanupFuncs;
              const item3 = cleanupFuncs.forEach((fn) => fn());
              obj = protoToSave(tmp82[10]);
              closure_128_2 = obj.b64ToProto(closure_129_0.ProtoClass, body2.settings);
              if (null != closure_128_2) {
                const obj10 = {
                  type: "USER_SETTINGS_PROTO_UPDATE",
                  settings: null,
                  resetEditInfo: true,
                  wasSaved: true,
                  local: false,
                };
                const obj11 = { proto: closure_128_2, type: closure_129_0.type };
                obj10.settings = obj11;
                tmp3(tmp82[5]).dispatch(obj10);
                c3 = 0;
                obj2 = tmp3(tmp82[5]);
              }
            }
            c3 = 0;
            c5 = 3;
            return { value: "HermesInternal", done: null };
          }
          c5 = 3;
        } catch (tmp82) {
          if (tmp4 === c3) {
            c5 = tmp2;
            throw tmp82;
          } else {
            c4 = tmp;
          }
        }
      }
    });
    obj.ProtoClass = global;
    obj.type = fn;
    tmp2 = new closure_1(closure_2[6])(obj.ProtoClass.typeName);
    obj.logger = tmp2;
    return obj;
  }
}
const prototype = UserSettingsProtoActionCreators.prototype;
prototype["getEditInfo"] = function getEditInfo() {
  return UserSettingsProtoStore.getFullState()[this.type];
};
prototype["getCurrentValue"] = function getCurrentValue() {
  return this.getEditInfo().proto;
};
prototype["updateAsync"] = function updateAsync(favorites, update, INFREQUENT_USER_ACTION, onSaveFailed) {
  closure_0 = favorites;
  closure_1 = update;
  closure_2 = INFREQUENT_USER_ACTION;
  asyncGeneratorStep = onSaveFailed;
  const self = this;
  return (async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: null };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_1 = tmp5;
            let protoFieldClass;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj4 = { value: self.loadIfNecessary(), done: false };
            return obj4;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          protoFieldClass = tmp2(1942).getProtoFieldClass(closure_129_4.ProtoClass, closure_129_0);
          closure_128_1 = closure_129_4.getCurrentValue()[closure_129_0];
          const obj6 = tmp2(1942);
          closure_128_2 = obj6.createModifiedProto(
            closure_128_1,
            closure_129_1,
            protoFieldClass,
            closure_129_4.ProtoClass,
            closure_129_0,
          );
          if (null != closure_128_2) {
            const logger = closure_129_4.logger;
            const _String = String;
            const _HermesInternal = HermesInternal;
            logger.log("Updating " + String(closure_129_0) + " with delay " + closure_129_2);
            const obj7 = { delaySeconds: closure_129_2, jitter: null, onError: null };
            let tmp9 = closure_129_2 === constants.AUTOMATED;
            if (!tmp9) {
              tmp9 = closure_129_2 === constants.DAILY;
            }
            obj7.jitter = tmp9;
            obj7.onError = closure_129_3;
            closure_129_4.markDirty(closure_128_2, obj7);
          }
          c3 = 3;
          return { value: "HermesInternal", done: null };
        }
      } catch (tmp14) {
        c3 = tmp;
        throw tmp14;
      }
    }
  })();
};
prototype["markDirty"] = function markDirty(proto, dispatch) {
  const self = this;
  _modDef38(true, "this cannot run in the overlay");
  const editInfo = this.getEditInfo().editInfo;
  const obj = { timeout: editInfo.timeout };
  if (editInfo.loaded) {
    if (false !== dispatch.dispatch) {
      obj2 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: true, local: true };
      const obj3 = { type: self.type, proto };
      obj2.settings = obj3;
      Dispatcher.dispatch(obj2);
      const tmpResult = Dispatcher;
    }
    let num = dispatch.delaySeconds;
    if (num == null) {
      num = 0;
    }
    if (tmp9) {
      const _clearTimeout = clearTimeout;
      clearTimeout(obj.timeout);
      obj.timeout = undefined;
    }
    if (null == obj.timeout) {
      const result = num * DurationsDefault.Millis.SECOND;
      let sum = result;
      if (dispatch.jitter) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const random = Math.random();
        sum = result + Math.floor(random * Math.min(result, 30 * DurationsDefault.Millis.SECOND));
      }
      const logger = self.logger;
      logger.log("Scheduling save from markDirty");
      const _setTimeout = setTimeout;
      obj.timeout = setTimeout(self.persistChanges, sum);
      obj.timeoutDelay = num;
    }
    if (null != dispatch.cleanup) {
      const items = [];
      HermesBuiltin.arraySpread(dispatch.cleanup, HermesBuiltin.arraySpread(editInfo.cleanupFuncs, 0));
      obj.cleanupFuncs = items;
    }
    let hasItem = null == dispatch.onError;
    if (!hasItem) {
      hasItem = editInfo.errorCallbacks.includes(dispatch.onError);
      const errorCallbacks = editInfo.errorCallbacks;
    }
    if (!hasItem) {
      const items1 = [];
      items1[HermesBuiltin.arraySpread(editInfo.errorCallbacks, 0)] = dispatch.onError;
      obj.errorCallbacks = items1;
    }
    if (null == editInfo.protoToSave) {
      obj.protoToSave = proto;
    } else {
      obj.protoToSave = obj2(1222).mergeTopLevelFields(self.ProtoClass, editInfo.protoToSave, proto);
      const obj5 = obj2(1222);
    }
    self.dispatchChanges(obj);
    tmp9 = null != obj.timeout && num < editInfo.timeoutDelay && !editInfo.rateLimited;
  } else {
    const _Error = Error;
    throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
  }
};
prototype["dispatchChanges"] = function dispatchChanges(changes) {
  obj2 = { type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: { changes, type: this.type } };
  Dispatcher.dispatch(obj2);
};
prototype["saveLastSendTime"] = function saveLastSendTime() {
  const Storage = obj2(510).Storage;
  let obj = Storage.get(UserSettingsProtoLastWriteTimes);
  if (obj == null) {
    obj = {};
  }
  obj[this.type] = Date.now();
  const Storage2 = obj2(510).Storage;
  const result = Storage2.set(UserSettingsProtoLastWriteTimes, obj);
};
prototype["loadIfUncached"] = function loadIfUncached(FRECENCY_AND_FAVORITES_SETTINGS, arg1) {
  let hasLoadedResult = UserSettingsProtoStore.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS);
  if (hasLoadedResult) {
    hasLoadedResult = true !== arg1;
  }
  if (!hasLoadedResult) {
    const self = this;
    const ifNecessary = this.loadIfNecessary(arg1);
  }
};
prototype["loadIfNecessary"] = function loadIfNecessary(arg0) {
  closure_0 = arg0;
  const self = this;
  return (async () => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj2 = { value, done: true };
        return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_0 = tmp7;
            let settings;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            closure_128_3 = undefined;
            let proto;
            let isDirty;
            let cleanupFuncs;
            const editInfo = self.getEditInfo().editInfo;
            if (!closure_0) {
              c5 = 3;
              return { value: "HermesInternal", done: null };
            }
            const logger = self.logger;
            logger.log("Loading proto");
            self.dispatchChanges({ loading: true });
            c3 = 1;
            const HTTP = closure_0(tmp36[11]).HTTP;
            const obj4 = { url: closure_1_8.USER_SETTINGS_PROTO(self.type), rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj5 = { value: HTTP.get(obj4), done: false };
            return obj5;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          closure_128_7 = tmp36;
          closure_129_1.dispatchChanges({ loading: false });
          throw closure_128_7;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            settings = value.body.settings;
            closure_128_1 = closure_0(tmp36[10]).b64ToProto(closure_129_1.ProtoClass, settings);
            if (null == closure_128_1) {
              closure_129_1.dispatchChanges({ loading: false, loaded: true });
              c3 = 0;
              c5 = 3;
              const obj7 = { value: undefined, done: true };
              return obj7;
            } else {
              closure_128_2 = tmp3(tmp36[13])[closure_129_1.type];
              closure_128_3 = closure_0(tmp36[10]).runMigrations(closure_128_1, closure_128_2);
              proto = closure_128_3.proto;
              isDirty = closure_128_3.isDirty;
              cleanupFuncs = closure_128_3.cleanupFuncs;
              const obj11 = closure_0(tmp36[10]);
              const obj8 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: null, local: false };
              const obj9 = { type: closure_129_1.type, proto: closure_128_1 };
              obj8.settings = obj9;
              let tmp17 = isDirty;
              if (!isDirty) {
                tmp17 = closure_129_0;
              }
              obj8.resetEditInfo = tmp17;
              c4 = 3;
              c5 = 1;
              const obj13 = { value: tmp3(tmp36[5]).dispatch(obj8), done: false };
              return obj13;
            }
            const obj10 = closure_0(tmp36[10]);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          if (isDirty) {
            const result = closure_129_1.markDirtyFromMigration(proto, cleanupFuncs);
          }
          c3 = 0;
          c5 = 3;
          const obj = { value: closure_128_1, done: true };
          return obj;
        }
      } catch (tmp36) {
        if (tmp4 === c3) {
          c5 = tmp2;
          throw tmp36;
        } else {
          c4 = tmp;
        }
      }
    }
  })();
};
prototype["markDirtyFromMigration"] = function markDirtyFromMigration(proto, cleanupFuncs) {
  _modDef38(true, "this cannot run in the overlay");
  const logger = this.logger;
  logger.log("Marking dirty due to migrates");
  _modDef38(
    null == this.getEditInfo().editInfo.offlineEditDataVersion,
    "offline changes are not supported with migrations",
  );
  this.markDirty(proto, {
    cleanup: cleanupFuncs,
    dispatch: false,
    delaySeconds: UserSettingsDelay.AUTOMATED,
    jitter: true,
  });
};
prototype["markDirtyIfHasPendingChange"] = function markDirtyIfHasPendingChange(cleanup) {
  const self = this;
  if (beforeSendCallbacks.some((hasChanges) => hasChanges.hasChanges())) {
    ({ ProtoClass, markDirty } = self);
    const obj = { dispatch: false, delaySeconds: 0, cleanup };
    markDirty(ProtoClass.create(), obj);
  }
};
prototype["scheduleSaveFromOfflineEdit"] = function scheduleSaveFromOfflineEdit() {
  _modDef38(true, "this cannot run in the overlay");
  const logger = this.logger;
  logger.log("Scheduling save from offline edit");
  const editInfo = this.getEditInfo().editInfo;
  _modDef38(null != editInfo.protoToSave, "protoToSave cannot be null");
  _modDef38(null != editInfo.offlineEditDataVersion, "offlineEditDataVersion cannot be null");
  _modDef38(null == editInfo.timeout, "timeout must not be set already");
  const sum = 5000 + Math.floor(5000 * Math.random());
  this.dispatchChanges({ timeout: setTimeout(this.persistChanges, sum), timeoutDelay: sum });
};
function updateUserAllGuildSettings(arg0, INFREQUENT_USER_ACTION) {
  closure_0 = arg0;
  return obj.updateAsync("guilds", async (arg0) => f75916(arg0), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, arg1) {
  closure_0 = id;
  const f75906 = (arg0) => {
    arg0.guildThemeSourcePreference = guildThemeSourcePreference;
  };
  return obj.updateAsync(
    "guilds",
    async (guilds) => obj2(1222).mutateUserGuildSettingsInternal(guilds, closure_0, closure_1),
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
}
const PreloadedUserSettingsActionCreators = Object.create(UserSettingsProtoActionCreators.prototype);
PreloadedUserSettingsActionCreators.beforeSendCallbacks = [];
PreloadedUserSettingsActionCreators.lastSendTime = 0;
PreloadedUserSettingsActionCreators.persistChanges = asyncGeneratorStep(async () => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const protoToSave = tmp7;
          closure_128_0 = undefined;
          let body2;
          closure_128_2 = undefined;
          closure_128_3 = undefined;
          let timeout;
          tmp3(tmp82[8])(true, "this cannot run in the overlay");
          const logger7 = obj.logger;
          logger7.log("Persisting proto");
          const editInfo = obj.getEditInfo().editInfo;
          closure_128_0 = editInfo;
          if (null != editInfo.protoToSave) {
            const item = obj.beforeSendCallbacks.forEach((processProto) =>
              processProto.processProto(protoToSave.protoToSave),
            );
            const protoToB64Result = protoToSave(tmp82[10]).protoToB64(obj.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                obj.saveLastSendTime();
                const HTTP = protoToSave(tmp82[11]).HTTP;
                const request = { url: closure_1_8.USER_SETTINGS_PROTO(obj.type), body: null, rejectWithError: false };
                const obj5 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                request.body = obj5;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.patch(request), done: false };
                return obj6;
              }
            }
            const logger5 = obj.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = obj.beforeSendCallbacks;
            const obj7 = protoToSave(tmp82[10]);
          } else {
            const logger4 = obj.logger;
            logger4.log("Not persisting proto because the proto was null");
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_5 = tmp82;
          if (429 !== closure_128_5.status) {
            if (400 === closure_128_5.status) {
              const body = closure_128_5.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.INVALID_USER_SETTINGS_DATA) {
                const logger3 = closure_129_0.logger;
                logger3.log("Reloading do to invalid data");
                const item1 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
                const ifNecessary = closure_129_0.loadIfNecessary(true);
                let tmp57 = closure_128_5;
                const errorCallbacks = closure_129_0.getEditInfo().editInfo.errorCallbacks;
              }
              throw tmp57;
            }
            const logger2 = closure_129_0.logger;
            logger2.log("Unknown user settings error");
            const item2 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
            tmp57 = closure_128_5;
            const errorCallbacks1 = closure_129_0.getEditInfo().editInfo.errorCallbacks;
          } else {
            const logger6 = closure_129_0.logger;
            logger6.log("Rate limited, scheduling retry");
            const _parseInt = parseInt;
            closure_128_3 = parseInt(closure_128_5.headers["retry-after"]);
            const _isNaN = isNaN;
            if (isNaN(closure_128_3)) {
              closure_128_3 = 60;
            }
            const _setTimeout = setTimeout;
            const _Math = Math;
            const result = 30 * tmp3(tmp82[9]).Millis.SECOND;
            timeout = setTimeout(
              closure_129_0.persistChanges,
              Math.min(result, closure_128_3 * tmp3(tmp82[9]).Millis.SECOND),
            );
            const obj8 = { rateLimited: true, timeout };
            closure_129_0.dispatchChanges(obj8);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body2 = value.body;
          if (body2.out_of_date) {
            const logger = closure_129_0.logger;
            logger.log("Proto was out of date, discarding changes");
          }
          const cleanupFuncs = closure_129_0.getEditInfo().editInfo.cleanupFuncs;
          const item3 = cleanupFuncs.forEach((fn) => fn());
          obj = protoToSave(tmp82[10]);
          closure_128_2 = obj.b64ToProto(closure_129_0.ProtoClass, body2.settings);
          if (null != closure_128_2) {
            const obj10 = {
              type: "USER_SETTINGS_PROTO_UPDATE",
              settings: null,
              resetEditInfo: true,
              wasSaved: true,
              local: false,
            };
            const obj11 = { proto: closure_128_2, type: closure_129_0.type };
            obj10.settings = obj11;
            tmp3(tmp82[5]).dispatch(obj10);
            c3 = 0;
            obj2 = tmp3(tmp82[5]);
          }
        }
        c3 = 0;
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
      c5 = 3;
    } catch (tmp82) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp82;
      } else {
        c4 = tmp;
      }
    }
  }
});
PreloadedUserSettingsActionCreators.ProtoClass = fn(1186).PreloadedUserSettings;
PreloadedUserSettingsActionCreators.type = UserSettingsTypes.PRELOADED_USER_SETTINGS;
PreloadedUserSettingsActionCreators.logger = new LoggerDefault(PreloadedUserSettingsActionCreators.ProtoClass.typeName);
obj2 = Object.create(UserSettingsProtoActionCreators.prototype);
obj2.beforeSendCallbacks = [];
obj2.lastSendTime = 0;
obj2.persistChanges = asyncGeneratorStep(async () => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const protoToSave = tmp7;
          closure_128_0 = undefined;
          let body2;
          closure_128_2 = undefined;
          closure_128_3 = undefined;
          let timeout;
          tmp3(tmp82[8])(true, "this cannot run in the overlay");
          const logger7 = obj.logger;
          logger7.log("Persisting proto");
          const editInfo = obj.getEditInfo().editInfo;
          closure_128_0 = editInfo;
          if (null != editInfo.protoToSave) {
            const item = obj.beforeSendCallbacks.forEach((processProto) =>
              processProto.processProto(protoToSave.protoToSave),
            );
            const protoToB64Result = protoToSave(tmp82[10]).protoToB64(obj.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                obj.saveLastSendTime();
                const HTTP = protoToSave(tmp82[11]).HTTP;
                const request = { url: closure_1_8.USER_SETTINGS_PROTO(obj.type), body: null, rejectWithError: false };
                const obj5 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                request.body = obj5;
                c4 = 2;
                c5 = 1;
                const obj6 = { value: HTTP.patch(request), done: false };
                return obj6;
              }
            }
            const logger5 = obj.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = obj.beforeSendCallbacks;
            const obj7 = protoToSave(tmp82[10]);
          } else {
            const logger4 = obj.logger;
            logger4.log("Not persisting proto because the proto was null");
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          closure_128_5 = tmp82;
          if (429 !== closure_128_5.status) {
            if (400 === closure_128_5.status) {
              const body = closure_128_5.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === constants.INVALID_USER_SETTINGS_DATA) {
                const logger3 = closure_129_0.logger;
                logger3.log("Reloading do to invalid data");
                const item1 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
                const ifNecessary = closure_129_0.loadIfNecessary(true);
                let tmp57 = closure_128_5;
                const errorCallbacks = closure_129_0.getEditInfo().editInfo.errorCallbacks;
              }
              throw tmp57;
            }
            const logger2 = closure_129_0.logger;
            logger2.log("Unknown user settings error");
            const item2 = closure_129_0.getEditInfo().editInfo.errorCallbacks.forEach((fn) => fn(closure_1_5));
            tmp57 = closure_128_5;
            const errorCallbacks1 = closure_129_0.getEditInfo().editInfo.errorCallbacks;
          } else {
            const logger6 = closure_129_0.logger;
            logger6.log("Rate limited, scheduling retry");
            const _parseInt = parseInt;
            closure_128_3 = parseInt(closure_128_5.headers["retry-after"]);
            const _isNaN = isNaN;
            if (isNaN(closure_128_3)) {
              closure_128_3 = 60;
            }
            const _setTimeout = setTimeout;
            const _Math = Math;
            const result = 30 * tmp3(tmp82[9]).Millis.SECOND;
            timeout = setTimeout(
              closure_129_0.persistChanges,
              Math.min(result, closure_128_3 * tmp3(tmp82[9]).Millis.SECOND),
            );
            const obj8 = { rateLimited: true, timeout };
            closure_129_0.dispatchChanges(obj8);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          body2 = value.body;
          if (body2.out_of_date) {
            const logger = closure_129_0.logger;
            logger.log("Proto was out of date, discarding changes");
          }
          const cleanupFuncs = closure_129_0.getEditInfo().editInfo.cleanupFuncs;
          const item3 = cleanupFuncs.forEach((fn) => fn());
          obj = protoToSave(tmp82[10]);
          closure_128_2 = obj.b64ToProto(closure_129_0.ProtoClass, body2.settings);
          if (null != closure_128_2) {
            const obj10 = {
              type: "USER_SETTINGS_PROTO_UPDATE",
              settings: null,
              resetEditInfo: true,
              wasSaved: true,
              local: false,
            };
            const obj11 = { proto: closure_128_2, type: closure_129_0.type };
            obj10.settings = obj11;
            tmp3(tmp82[5]).dispatch(obj10);
            c3 = 0;
            obj2 = tmp3(tmp82[5]);
          }
        }
        c3 = 0;
        c5 = 3;
        return { value: "HermesInternal", done: null };
      }
      c5 = 3;
    } catch (tmp82) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp82;
      } else {
        c4 = tmp;
      }
    }
  }
});
obj2.ProtoClass = fn(1221).FrecencyUserSettings;
obj2.type = UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS;
let tmp10 = new LoggerDefault(PreloadedUserSettingsActionCreators.ProtoClass.typeName);
obj2.logger = new LoggerDefault(obj2.ProtoClass.typeName);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export const UserSettingsDelay = fn(1084).UserSettingsDelay;
export function markUserSettingsLoadOkayForDevelopment() {}
export { UserSettingsProtoActionCreators };
export { PreloadedUserSettingsActionCreators };
export const FrecencyUserSettingsActionCreators = obj2;
export const UserSettingsActionCreatorsByType = {
  [UserSettingsTypes.PRELOADED_USER_SETTINGS]: PreloadedUserSettingsActionCreators,
  [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj2,
};
export { updateUserAllGuildSettings };
export { updateUserGuildSettings };
export const setDefaultGuildThemePreference = function setDefaultGuildThemePreference(GUILD) {
  closure_0 = GUILD;
  return obj.updateAsync(
    "appearance",
    async (defaultGuildThemePreference) => {
      let UNSPECIFIED = defaultGuildThemePreference.defaultGuildThemePreference;
      if (UNSPECIFIED == null) {
        UNSPECIFIED = obj2(1186).GuildThemeSourcePreference.UNSPECIFIED;
      }
      if (UNSPECIFIED === closure_0) {
        return false;
      } else {
        defaultGuildThemePreference.defaultGuildThemePreference = tmp3;
      }
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export { setGuildThemeSourcePreferenceOverride };
export const clearGuildThemeSourcePreferenceOverride = function clearGuildThemeSourcePreferenceOverride(
  guildThemeSourcePreference,
) {
  obj2(1186).GuildThemeSourcePreference.UNSPECIFIED;
  obj2 = guildThemeSourcePreference;
  const f75906 = (arg0) => {
    arg0.guildThemeSourcePreference = guildThemeSourcePreference;
  };
  return obj.updateAsync(
    "guilds",
    async (guilds) => obj2(1222).mutateUserGuildSettingsInternal(guilds, closure_0, closure_1),
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, INFREQUENT_USER_ACTION) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_129_0 = arg0;
  closure_129_1 = (channels) => obj2(1222).mutateUserChannelSettingsInternal(channels, closure_0, closure_1);
  return obj.updateAsync(
    "guilds",
    async (guilds) => obj2(1222).mutateUserGuildSettingsInternal(guilds, closure_0, closure_1),
    INFREQUENT_USER_ACTION,
  );
};
export const addDismissedContent = function addDismissedContent(CHANNEL_NOTICE_INVITE) {
  obj2 = CHANNEL_NOTICE_INVITE;
  if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    let hasBitResult = null != dismissedContents;
    if (hasBitResult) {
      let obj = obj2(1943);
      hasBitResult = obj.hasBit(dismissedContents, CHANNEL_NOTICE_INVITE);
    }
    if (!hasBitResult) {
      obj2 = AnalyticsUtilsDefault;
      const obj3 = { content_type: obj2(1944).DismissibleContent[CHANNEL_NOTICE_INVITE] };
      obj2.track(constants.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj3);
    }
  }
  return obj.updateAsync(
    "userContent",
    async (dismissedContents) => {
      if (obj.hasBit(dismissedContents.dismissedContents, closure_0)) {
        return false;
      } else {
        dismissedContents.dismissedContents = obj2(1943).addBit(dismissedContents.dismissedContents, closure_0);
        const tmpResult = obj2(1943);
      }
      obj = obj2(1943);
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export { updateRecurringDismissibleContentState };
export const updateGuildDismissedContent = function updateGuildDismissedContent() {
  const self = this;
  const apply = closure_15.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeDismissedContent = function removeDismissedContent(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  closure_0 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  return obj.updateAsync(
    "userContent",
    async (dismissedContents) => {
      if (obj.hasBit(dismissedContents.dismissedContents, closure_0)) {
        dismissedContents.dismissedContents = obj2(1943).removeBit(dismissedContents.dismissedContents, closure_0);
        const tmpResult = obj2(1943);
      } else {
        return false;
      }
      obj = obj2(1943);
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const removeDismissedRecurringContent = function removeDismissedRecurringContent(GUILD_POWERUP_NOTIFICATION) {
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, {
    lastDismissedVersion: 0,
    lastDismissedAtMs: "0",
    lastDismissedObjectId: "0",
    numTimesDismissed: 0,
  });
};
export const clearGuildDismissedContents = function clearGuildDismissedContents() {
  const f75916 = (guilds) => {
    if (null != guilds.guilds) {
      const _Object = Object;
      const values = Object.values(guilds.guilds);
      for (const item10013 of values) {
        if (null != item10013) {
          item10013.guildDismissibleContentStates = {};
          let _Uint8Array = Uint8Array;
          let tmp7 = new.target;
          let tmp8 = new.target;
          let uint8Array = new Uint8Array();
          item10013.dismissedGuildContent = uint8Array;
        }
        continue;
      }
    }
  };
  return obj.updateAsync("guilds", async (arg0) => f75916(arg0), UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearDismissedContents = function clearDismissedContents() {
  return obj.updateAsync(
    "userContent",
    async (arg0) => {
      const uint8Array = new Uint8Array();
      arg0.dismissedContents = uint8Array;
      arg0.recurringDismissibleContentStates = {};
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const checkAllDismissedContents = function checkAllDismissedContents() {
  return obj.updateAsync(
    "userContent",
    async (recurringDismissibleContentStates) => {
      let uint8Array = new Uint8Array();
      for (const item10020 of tmp2) {
        let obj = obj2(dependencyMap[19]);
        if (obj.isSingleUseDismissibleContent(item10020)) {
          let tmp5Result = obj2(dependencyMap[16]);
          uint8Array = tmp5Result.addBit(uint8Array, item10020);
        } else {
          let tmp5Result2 = obj2(dependencyMap[20]);
          arg0.recurringDismissibleContentStates[item10020] =
            tmp5Result2.getDismissedRecurringDismissibleContentState(item10020);
        }
        continue;
      }
      recurringDismissibleContentStates.dismissedContents = uint8Array;
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
