// discord_app/modules/user_settings/UserSettingsProtoActionCreators.tsx
import LoggerDefault from "../debug/Logger.tsx";
import _modDef38 from "../../../_runtime/metro/00038__.js";
import AnalyticsUtilsDefault from "../../utils/AnalyticsUtils.tsx";
import asyncGeneratorStep from "../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../_runtime/metro/00019__.js";
import UserSettingsProtoStore from "UserSettingsProtoStore.tsx";
import Dispatcher from "../../Dispatcher.tsx";

let obj = fn;
function updateUserGuildSettings(guildId, arg1, INFREQUENT_USER_ACTION) {
  closure_0 = guildId;
  closure_1 = arg1;
  return obj.updateAsync(
    "guilds",
    async (guilds) => {
      obj = obj(1223);
      return obj.mutateUserGuildSettingsInternal(guilds, closure_0, closure_1);
    },
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
  await closure_2_11.updateAsync(
    "userContent",
    async (recurringDismissibleContentStates) => {
      const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
      const merged1 = Object.assign(closure_1);
      recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0] = {};
    },
    constants.INFREQUENT_USER_ACTION,
  );
  return arg1;
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
  return arg1;
};
const UserSettingsConstants = fn(1084);
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
const Constants = fn(1074);
({ AbortCodes: closure_7, Endpoints: closure_8, AnalyticEvents: closure_9 } = Constants);
const UserSettingsProtoLastWriteTimes = "UserSettingsProtoLastWriteTimes";
let timestamp = Date.now();
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
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
    obj.persistChanges = closure_3(async (arg0, value) => {
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp6 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          obj = { value, done: true };
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
                let obj6 = protoToSave(tmp82[10]);
                const protoToB64Result = obj6.protoToB64(obj.ProtoClass, editInfo.protoToSave);
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
                    let obj1 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                    request.body = obj1;
                    c4 = 2;
                    c5 = 1;
                    const obj2 = { value: HTTP.patch(request), done: false };
                    return obj2;
                  }
                }
                const logger5 = obj.logger;
                logger5.log("Not persisting proto because there is nothing to change");
                const beforeSendCallbacks = obj.beforeSendCallbacks;
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
                const obj3 = { rateLimited: true, timeout };
                closure_129_0.dispatchChanges(obj3);
              }
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj4 = { value, done: true };
              return obj4;
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
                obj1 = tmp3(tmp82[5]);
                const obj5 = {
                  type: "USER_SETTINGS_PROTO_UPDATE",
                  settings: null,
                  resetEditInfo: true,
                  wasSaved: true,
                  local: false,
                };
                obj6 = { proto: closure_128_2, type: closure_129_0.type };
                obj5.settings = obj6;
                obj1.dispatch(obj5);
                c3 = 0;
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
  return (async (arg0, value) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
        return obj;
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
            obj = { value, done: true };
            return obj;
          } else {
            closure_1 = tmp5;
            let protoFieldClass;
            closure_128_1 = undefined;
            closure_128_2 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj1 = { value: self.loadIfNecessary(), done: false };
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          protoFieldClass = tmp2(1941).getProtoFieldClass(closure_129_4.ProtoClass, closure_129_0);
          closure_128_1 = closure_129_4.getCurrentValue()[closure_129_0];
          const obj6 = tmp2(1941);
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
            const obj2 = { delaySeconds: closure_129_2, jitter: null, onError: null };
            let tmp9 = closure_129_2 === constants.AUTOMATED;
            if (!tmp9) {
              tmp9 = closure_129_2 === constants.DAILY;
            }
            obj2.jitter = tmp9;
            obj2.onError = closure_129_3;
            closure_129_4.markDirty(closure_128_2, obj2);
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
  obj = { timeout: editInfo.timeout };
  if (editInfo.loaded) {
    if (false !== dispatch.dispatch) {
      obj = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: true, local: true };
      obj = { type: self.type, proto };
      obj.settings = obj;
      tmp(573).dispatch(obj);
      const tmpResult = tmp(573);
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
      const result = num * tmp(1090).Millis.SECOND;
      let sum = result;
      if (dispatch.jitter) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const random = Math.random();
        sum = result + Math.floor(random * Math.min(result, 30 * tmp(1090).Millis.SECOND));
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
      obj.protoToSave = obj(1223).mergeTopLevelFields(self.ProtoClass, editInfo.protoToSave, proto);
      const obj5 = obj(1223);
    }
    self.dispatchChanges(obj);
  } else {
    const _Error = Error;
    throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
  }
};
prototype["dispatchChanges"] = function dispatchChanges(changes) {
  obj = { type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: null };
  obj = { changes, type: this.type };
  obj.settings = obj;
  obj.dispatch(obj);
};
prototype["saveLastSendTime"] = function saveLastSendTime() {
  const Storage = obj(510).Storage;
  obj = Storage.get(UserSettingsProtoLastWriteTimes);
  if (obj == null) {
    obj = {};
  }
  obj[this.type] = Date.now();
  const Storage2 = obj(510).Storage;
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
  return (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
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
            const obj1 = { url: closure_1_8.USER_SETTINGS_PROTO(self.type), rejectWithError: false };
            c4 = 2;
            c5 = 1;
            const obj2 = { value: HTTP.get(obj1), done: false };
            return obj2;
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
            const obj3 = { value, done: true };
            return obj3;
          } else {
            settings = value.body.settings;
            closure_128_1 = closure_0(tmp36[10]).b64ToProto(closure_129_1.ProtoClass, settings);
            if (null == closure_128_1) {
              closure_129_1.dispatchChanges({ loading: false, loaded: true });
              c3 = 0;
              c5 = 3;
              const obj4 = { value: undefined, done: true };
              return obj4;
            } else {
              closure_128_2 = tmp3(tmp36[13])[closure_129_1.type];
              closure_128_3 = closure_0(tmp36[10]).runMigrations(closure_128_1, closure_128_2);
              proto = closure_128_3.proto;
              isDirty = closure_128_3.isDirty;
              cleanupFuncs = closure_128_3.cleanupFuncs;
              const obj11 = closure_0(tmp36[10]);
              const obj5 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: null, local: false };
              const obj6 = { type: closure_129_1.type, proto: closure_128_1 };
              obj5.settings = obj6;
              let tmp17 = isDirty;
              if (!isDirty) {
                tmp17 = closure_129_0;
              }
              obj5.resetEditInfo = tmp17;
              c4 = 3;
              c5 = 1;
              const obj7 = { value: tmp3(tmp36[5]).dispatch(obj5), done: false };
              return obj7;
            }
            const obj10 = closure_0(tmp36[10]);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          if (isDirty) {
            const result = closure_129_1.markDirtyFromMigration(proto, cleanupFuncs);
          }
          c3 = 0;
          c5 = 3;
          obj = { value: closure_128_1, done: true };
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
    obj = { dispatch: false, delaySeconds: 0, cleanup };
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
  return obj.updateAsync("guilds", async (arg0) => f74607(arg0), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, arg1) {
  closure_0 = id;
  const f74597 = (arg0) => {
    arg0.guildThemeSourcePreference = guildThemeSourcePreference;
  };
  return obj.updateAsync(
    "guilds",
    async (guilds) => {
      obj = obj(1223);
      return obj.mutateUserGuildSettingsInternal(guilds, closure_0, closure_1);
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
}
obj = Object.create(UserSettingsProtoActionCreators.prototype);
obj.beforeSendCallbacks = [];
obj.lastSendTime = 0;
obj.persistChanges = asyncGeneratorStep(async (arg0, value) => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
            let obj6 = protoToSave(tmp82[10]);
            const protoToB64Result = obj6.protoToB64(obj.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                obj.saveLastSendTime();
                const HTTP = protoToSave(tmp82[11]).HTTP;
                const request = { url: closure_1_8.USER_SETTINGS_PROTO(obj.type), body: null, rejectWithError: false };
                let obj1 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                request.body = obj1;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.patch(request), done: false };
                return obj2;
              }
            }
            const logger5 = obj.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = obj.beforeSendCallbacks;
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
            const obj3 = { rateLimited: true, timeout };
            closure_129_0.dispatchChanges(obj3);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
            obj1 = tmp3(tmp82[5]);
            const obj5 = {
              type: "USER_SETTINGS_PROTO_UPDATE",
              settings: null,
              resetEditInfo: true,
              wasSaved: true,
              local: false,
            };
            obj6 = { proto: closure_128_2, type: closure_129_0.type };
            obj5.settings = obj6;
            obj1.dispatch(obj5);
            c3 = 0;
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
obj.ProtoClass = fn(1187).PreloadedUserSettings;
obj.type = UserSettingsTypes.PRELOADED_USER_SETTINGS;
obj.logger = new LoggerDefault(obj.ProtoClass.typeName);
obj = Object.create(UserSettingsProtoActionCreators.prototype);
obj.beforeSendCallbacks = [];
obj.lastSendTime = 0;
obj.persistChanges = asyncGeneratorStep(async (arg0, value) => {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
            let obj6 = protoToSave(tmp82[10]);
            const protoToB64Result = obj6.protoToB64(obj.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                obj.saveLastSendTime();
                const HTTP = protoToSave(tmp82[11]).HTTP;
                const request = { url: closure_1_8.USER_SETTINGS_PROTO(obj.type), body: null, rejectWithError: false };
                let obj1 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                request.body = obj1;
                c4 = 2;
                c5 = 1;
                const obj2 = { value: HTTP.patch(request), done: false };
                return obj2;
              }
            }
            const logger5 = obj.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = obj.beforeSendCallbacks;
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
            const obj3 = { rateLimited: true, timeout };
            closure_129_0.dispatchChanges(obj3);
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 0;
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
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
            obj1 = tmp3(tmp82[5]);
            const obj5 = {
              type: "USER_SETTINGS_PROTO_UPDATE",
              settings: null,
              resetEditInfo: true,
              wasSaved: true,
              local: false,
            };
            obj6 = { proto: closure_128_2, type: closure_129_0.type };
            obj5.settings = obj6;
            obj1.dispatch(obj5);
            c3 = 0;
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
obj.ProtoClass = fn(1222).FrecencyUserSettings;
obj.type = UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS;
let tmp10 = new LoggerDefault(obj.ProtoClass.typeName);
obj.logger = new LoggerDefault(obj.ProtoClass.typeName);
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export const UserSettingsDelay = fn(1084).UserSettingsDelay;
export function markUserSettingsLoadOkayForDevelopment() {}
export { UserSettingsProtoActionCreators };
export const PreloadedUserSettingsActionCreators = obj;
export const FrecencyUserSettingsActionCreators = obj;
export const UserSettingsActionCreatorsByType = {
  [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj,
  [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj,
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
        UNSPECIFIED = obj(1187).GuildThemeSourcePreference.UNSPECIFIED;
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
  guildThemeSourcePreference = guildThemeSourcePreference(1187).GuildThemeSourcePreference.UNSPECIFIED;
  const f74597 = (arg0) => {
    arg0.guildThemeSourcePreference = guildThemeSourcePreference;
  };
  return obj.updateAsync(
    "guilds",
    async (guilds) => {
      obj = obj(1223);
      return obj.mutateUserGuildSettingsInternal(guilds, closure_0, closure_1);
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, INFREQUENT_USER_ACTION) {
  closure_0 = arg1;
  closure_1 = arg2;
  closure_129_0 = arg0;
  closure_129_1 = (channels) => {
    obj = obj(1223);
    return obj.mutateUserChannelSettingsInternal(channels, closure_0, closure_1);
  };
  return obj.updateAsync(
    "guilds",
    async (guilds) => {
      obj = obj(1223);
      return obj.mutateUserGuildSettingsInternal(guilds, closure_0, closure_1);
    },
    INFREQUENT_USER_ACTION,
  );
};
export const addDismissedContent = function addDismissedContent(CHANNEL_NOTICE_INVITE) {
  closure_0 = CHANNEL_NOTICE_INVITE;
  if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    let hasBitResult = null != dismissedContents;
    if (hasBitResult) {
      obj = closure_0(1942);
      hasBitResult = obj.hasBit(dismissedContents, CHANNEL_NOTICE_INVITE);
    }
    if (!hasBitResult) {
      obj = { content_type: closure_0(1943).DismissibleContent[CHANNEL_NOTICE_INVITE] };
      AnalyticsUtilsDefault.track(constants.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj);
    }
  }
  return obj.updateAsync(
    "userContent",
    async (dismissedContents) => {
      obj = obj(1942);
      if (obj.hasBit(dismissedContents.dismissedContents, closure_0)) {
        return false;
      } else {
        dismissedContents.dismissedContents = tmp(1942).addBit(dismissedContents.dismissedContents, tmp3);
      }
      tmp = obj;
      tmp3 = closure_0;
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
      obj = obj(1942);
      if (obj.hasBit(dismissedContents.dismissedContents, closure_0)) {
        dismissedContents.dismissedContents = tmp(1942).removeBit(dismissedContents.dismissedContents, tmp3);
      } else {
        return false;
      }
      tmp = obj;
      tmp3 = closure_0;
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
  const f74607 = (guilds) => {
    if (null != guilds.guilds) {
      const _Object = Object;
      const values = Object.values(guilds.guilds);
      for (const item10013 of values) {
        let tmp5 = item10013;
        if (null != item10013) {
          tmp5.guildDismissibleContentStates = {};
          let _Uint8Array = Uint8Array;
          let tmp7 = new.target;
          let tmp8 = new.target;
          let uint8Array = new Uint8Array();
          tmp5.dismissedGuildContent = uint8Array;
        }
        continue;
      }
    }
  };
  return obj.updateAsync("guilds", async (arg0) => f74607(arg0), UserSettingsDelay.INFREQUENT_USER_ACTION);
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
        let tmp3 = item10020;
        let tmp5 = closure_1_0;
        let tmp7 = dependencyMap;
        obj = closure_1_0(dependencyMap[19]);
        if (obj.isSingleUseDismissibleContent(item10020)) {
          let tmp5Result = tmp5(tmp7[16]);
          uint8Array = tmp5Result.addBit(uint8Array, tmp3);
        } else {
          tmp5Result = tmp5(tmp7[20]);
          arg0.recurringDismissibleContentStates[tmp3] = tmp5Result.getDismissedRecurringDismissibleContentState(tmp3);
        }
        continue;
      }
      recurringDismissibleContentStates.dismissedContents = uint8Array;
    },
    UserSettingsDelay.INFREQUENT_USER_ACTION,
  );
};
