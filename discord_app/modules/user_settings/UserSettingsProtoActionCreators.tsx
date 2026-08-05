// discord_app/modules/user_settings/UserSettingsProtoActionCreators.tsx
import importDefaultResult from "timestamp";
import handleConnectionClosedOrResumed from "handleConnectionClosedOrResumed";
import MAX_FAVORITES from "MAX_FAVORITES";
import ME from "ME";
import importDefaultResult1 from "dispatcher";
import importDefaultResult2 from "dispatcher";

let c9;
let error;
let metroImportAll;
let obj = arg1;
function updateUserGuildSettings(closure_0, arg1, INFREQUENT_USER_ACTION) {
  let closure_1 = arg1;
  return obj.updateAsync("guilds", (guilds) => callback(outer1_2[9]).mutateUserGuildSettingsInternal(guilds, callback, f69402), INFREQUENT_USER_ACTION);
}
function updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, arg1) {
  const self = this;
  const apply = _updateRecurringDismissibleContentState.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateRecurringDismissibleContentState() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let c3 = 0;
    let c2 = 0;
    return (function*(arg0, arg1) {
      yield outer1_11.updateAsync("userContent", (recurringDismissibleContentStates) => {
        const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
        const merged1 = Object.assign(closure_1);
        recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0] = {};
      }, outer1_6.INFREQUENT_USER_ACTION);
      return arg1;
    })();
  });
  const _updateRecurringDismissibleContentState = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _updateGuildDismissedContent() {
  const self = this;
  const tmp = importDefaultResult((arg0, arg1, arg2) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      let closure_1 = closure_2;
      yield outer1_12(closure_1, (guildDismissibleContentStates) => {
        const merged = Object.assign(guildDismissibleContentStates.guildDismissibleContentStates[closure_0]);
        const merged1 = Object.assign(closure_1);
        guildDismissibleContentStates.guildDismissibleContentStates[closure_0] = {};
      }, outer1_6.INFREQUENT_USER_ACTION);
      return arg1;
    })();
  });
  const _updateGuildDismissedContent = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let c3 = importDefaultResult;
const UserSettingsTypes = MAX_FAVORITES.UserSettingsTypes;
const UserSettingsDelay = MAX_FAVORITES.UserSettingsDelay;
({ AbortCodes: error, Endpoints: metroImportAll, AnalyticEvents: c9 } = ME);
const UserSettingsProtoLastWriteTimes = "UserSettingsProtoLastWriteTimes";
let timestamp = Date.now();
const subscription = require("dispatcher").subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
const subscription1 = require("dispatcher").subscribe("CONNECTION_CLOSED", () => {
  const timestamp = Date.now();
});
if (typeof document !== "undefined") {
  const _document = document;
  const listener = document.addEventListener("mousedown", () => {

  });
  const _document2 = document;
  const listener1 = document.addEventListener("keydown", () => {

  });
}
class UserSettingsProtoActionCreators {
  constructor(arg0, arg1) {
    obj = Object.create(new.target.prototype);
    obj.beforeSendCallbacks = [];
    obj.lastSendTime = 0;
    PreloadedUserSettings = obj;
    obj.persistChanges = closure_3(function*() {
      if (config === 2) {
        config = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp6 === 3) {
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
          config = 2;
          if (0 === timeout) {
            if (arg0 === 1) {
              config = 3;
              throw arg1;
            } else if (arg0 === 2) {
              config = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let body = tmp3;
              let editInfo = tmp7;
              editInfo = undefined;
              body = undefined;
              let closure_2;
              let c3;
              timeout = undefined;
              let logResult = outer1_1;
              logResult = outer1_2;
              logResult = outer1_1(outer1_2[7])(true, "this cannot run in the overlay");
              logResult = outer1_0;
              const logger7 = outer1_0.logger;
              logResult = logger7.log("Persisting proto");
              logResult = outer1_0;
              editInfo = outer1_0.getEditInfo().editInfo;
              if (null != editInfo.protoToSave) {
                const item = outer1_0.beforeSendCallbacks.forEach((processProto) => processProto.processProto(editInfo.protoToSave));
                let obj6 = outer1_0(outer1_2[9]);
                const protoToB64Result = obj6.protoToB64(outer1_0.ProtoClass, editInfo.protoToSave);
                if (null != protoToB64Result) {
                  if ("" !== protoToB64Result) {
                    c3 = 1;
                    outer1_0.saveLastSendTime();
                    const HTTP = outer1_0(outer1_2[10]).HTTP;
                    let obj1 = { url: null, body: null, rejectWithError: false };
                    obj1[0] = outer1_8.USER_SETTINGS_PROTO(outer1_0.type);
                    const obj2 = { settings: null, required_data_version: null };
                    obj2[0] = protoToB64Result;
                    obj2[1] = editInfo.offlineEditDataVersion;
                    obj1[1] = obj2;
                    timeout = 2;
                    config = 1;
                    const obj3 = { value: null, done: false };
                    obj3[0] = HTTP.patch(obj1);
                    return obj3;
                  }
                }
                const logger5 = outer1_0.logger;
                logger5.log("Not persisting proto because there is nothing to change");
                const beforeSendCallbacks = outer1_0.beforeSendCallbacks;
              } else {
                const logger4 = outer1_0.logger;
                logger4.log("Not persisting proto because the proto was null");
              }
            }
          } else {
            if (1 === tmp7) {
              c3 = 0;
              config = closure_2;
              if (429 !== config.status) {
                if (400 === config.status) {
                  body = config.body;
                  let code;
                  if (body != null) {
                    code = body.code;
                  }
                  if (code === outer1_7.INVALID_USER_SETTINGS_DATA) {
                    const logger3 = outer1_0.logger;
                    logger3.log("Reloading do to invalid data");
                    const item1 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
                    const ifNecessary = outer1_0.loadIfNecessary(true);
                    let tmp57 = config;
                    const errorCallbacks = outer1_0.getEditInfo().editInfo.errorCallbacks;
                  }
                  throw tmp57;
                }
                const logger2 = outer1_0.logger;
                logger2.log("Unknown user settings error");
                const item2 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
                tmp57 = config;
                const errorCallbacks1 = outer1_0.getEditInfo().editInfo.errorCallbacks;
              } else {
                const logger6 = editInfo.logger;
                logger6.log("Rate limited, scheduling retry");
                const _parseInt = parseInt;
                c3 = parseInt(config.headers["retry-after"]);
                const _isNaN = isNaN;
                if (isNaN(c3)) {
                  c3 = 60;
                }
                const _setTimeout = setTimeout;
                const _Math = Math;
                const result = 30 * outer1_1(outer1_2[8]).Millis.SECOND;
                timeout = setTimeout(outer1_0.persistChanges, Math.min(result, c3 * outer1_1(outer1_2[8]).Millis.SECOND));
                const obj4 = { rateLimited: true, timeout: null };
                obj4[1] = timeout;
                outer1_0.dispatchChanges(obj4);
              }
            } else if (arg0 === 1) {
              config = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 0;
              config = 3;
              const obj5 = { value: null, done: true };
              obj5[0] = arg1;
              return obj5;
            } else {
              body = arg1.body;
              if (body.out_of_date) {
                const logger = editInfo.logger;
                logger.log("Proto was out of date, discarding changes");
              }
              const cleanupFuncs = editInfo.getEditInfo().editInfo.cleanupFuncs;
              const item3 = cleanupFuncs.forEach((arg0) => arg0());
              obj = outer1_0(outer1_2[9]);
              closure_2 = obj.b64ToProto(editInfo.ProtoClass, body.settings);
              if (null != closure_2) {
                obj1 = outer1_1(outer1_2[4]);
                obj6 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: true, wasSaved: true, local: false };
                const obj7 = { proto: null, type: null };
                obj7[0] = closure_2;
                obj7[1] = editInfo.type;
                obj6[1] = obj7;
                obj1.dispatch(obj6);
                c3 = 0;
              }
            }
            c3 = 0;
            config = 3;
            return { value: "HermesInternal", done: null };
          }
          config = 3;
        } catch (tmp82) {
          closure_2 = tmp82;
          if (tmp4 === c3) {
            config = tmp2;
            throw tmp82;
          } else {
            timeout = logResult;
          }
        }
      }
    });
    obj.ProtoClass = global;
    obj.type = arg1;
    tmp2 = new require("timestamp")(obj.ProtoClass.typeName);
    obj.logger = tmp2;
    return obj;
  }
}
const prototype = UserSettingsProtoActionCreators.prototype;
prototype["getEditInfo"] = function getEditInfo() {
  return handleConnectionClosedOrResumed.getFullState()[this.type];
};
prototype["getCurrentValue"] = function getCurrentValue() {
  return this.getEditInfo().proto;
};
prototype["updateAsync"] = function updateAsync(favorites, arg1, INFREQUENT_USER_ACTION, onSaveFailed) {
  let closure_0 = favorites;
  let closure_1 = arg1;
  let closure_2 = INFREQUENT_USER_ACTION;
  const self = this;
  return onSaveFailed(function*() {
    if (c3 === 2) {
      c3 = 3;
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
        c3 = 2;
        if (0 === closure_2) {
          if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp5;
            let protoFieldClass = tmp2;
            protoFieldClass = undefined;
            closure_1 = undefined;
            closure_2 = undefined;
            closure_2 = 1;
            c3 = 1;
            const obj1 = { value: null, done: false };
            obj1[0] = outer1_4.loadIfNecessary();
            return obj1;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          protoFieldClass = outer1_0(1356).getProtoFieldClass(handleConnectionClosedOrResumed.ProtoClass, protoFieldClass);
          closure_1 = handleConnectionClosedOrResumed.getCurrentValue()[protoFieldClass];
          const obj6 = outer1_0(1356);
          closure_2 = obj6.createModifiedProto(closure_1, closure_1, protoFieldClass, handleConnectionClosedOrResumed.ProtoClass, protoFieldClass);
          if (null != closure_2) {
            const logger = handleConnectionClosedOrResumed.logger;
            const _String = String;
            const _HermesInternal = HermesInternal;
            logger.log("Updating " + String(protoFieldClass) + " with delay " + closure_2);
            const obj2 = { delaySeconds: null, jitter: null, onError: null };
            obj2[0] = closure_2;
            let tmp9 = closure_2 === outer1_6.AUTOMATED;
            if (!tmp9) {
              tmp9 = dependencyMap === outer1_6.DAILY;
            }
            obj2[1] = tmp9;
            obj2[2] = c3;
            handleConnectionClosedOrResumed.markDirty(closure_2, obj2);
            const tmp44 = closure_2;
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
prototype["markDirty"] = function markDirty(protoToSave, dispatch) {
  const self = this;
  require("../../../_runtime/metro/00038__.js")(true, "this cannot run in the overlay");
  const editInfo = this.getEditInfo().editInfo;
  let obj = { timeout: editInfo.timeout };
  if (editInfo.loaded) {
    if (false !== dispatch.dispatch) {
      obj = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, partial: true, local: true };
      obj = { type: null, proto: null };
      obj[0] = self.type;
      obj[1] = protoToSave;
      obj[1] = obj;
      tmp(709).dispatch(obj);
      const tmpResult = tmp(709);
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
      const result = num * tmp(687).Millis.SECOND;
      let sum = result;
      if (dispatch.jitter) {
        const _Math = Math;
        const _Math2 = Math;
        const _Math3 = Math;
        const random = Math.random();
        sum = result + Math.floor(random * Math.min(result, 30 * tmp(687).Millis.SECOND));
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
      obj.protoToSave = protoToSave;
    } else {
      obj.protoToSave = obj(1342).mergeTopLevelFields(self.ProtoClass, editInfo.protoToSave, protoToSave);
      const obj5 = obj(1342);
    }
    self.dispatchChanges(obj);
  } else {
    const _Error = Error;
    throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
  }
};
prototype["dispatchChanges"] = function dispatchChanges(changes) {
  let obj = require("../../Dispatcher.tsx");
  obj = { changes, type: this.type };
  obj.dispatch({ type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: obj });
};
prototype["saveLastSendTime"] = function saveLastSendTime() {
  const Storage = obj(595).Storage;
  obj = Storage.get(UserSettingsProtoLastWriteTimes);
  if (obj == null) {
    obj = {};
  }
  obj[this.type] = Date.now();
  const Storage2 = obj(595).Storage;
  const result = Storage2.set(UserSettingsProtoLastWriteTimes, obj);
};
prototype["loadIfUncached"] = function loadIfUncached(FRECENCY_AND_FAVORITES_SETTINGS) {
  let hasLoadedResult = handleConnectionClosedOrResumed.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS);
  if (hasLoadedResult) {
    hasLoadedResult = true !== arg1;
  }
  if (!hasLoadedResult) {
    const self = this;
    const ifNecessary = this.loadIfNecessary(arg1);
  }
};
prototype["loadIfNecessary"] = function loadIfNecessary(arg0) {
  let closure_0 = arg0;
  const self = this;
  return importDefaultResult(function*() {
    if (isDirty === 2) {
      isDirty = 3;
      HermesBuiltin.throwTypeError();
    } else if (tmp6 === 3) {
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
        isDirty = 2;
        if (0 === proto) {
          if (arg0 === 1) {
            isDirty = 3;
            throw arg1;
          } else if (arg0 === 2) {
            isDirty = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            let closure_1 = tmp3;
            let settings = tmp7;
            settings = undefined;
            closure_1 = undefined;
            let closure_2;
            let c3;
            proto = undefined;
            isDirty = undefined;
            let cleanupFuncs;
            const editInfo = outer1_1.getEditInfo().editInfo;
            if (!outer1_0) {
              isDirty = 3;
              return { value: "HermesInternal", done: null };
            }
            const logger = outer1_1.logger;
            logger.log("Loading proto");
            outer1_1.dispatchChanges({ loading: true });
            c3 = 1;
            const HTTP = outer1_0(outer1_2[10]).HTTP;
            const obj1 = { url: null, rejectWithError: false };
            obj1[0] = outer1_8.USER_SETTINGS_PROTO(outer1_1.type);
            proto = 2;
            isDirty = 1;
            const obj2 = { value: null, done: false };
            obj2[0] = HTTP.get(obj1);
            return obj2;
          }
        } else if (1 === tmp7) {
          c3 = 0;
          const outer1_7 = closure_2;
          closure_1.dispatchChanges({ loading: false });
          throw outer1_7;
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            isDirty = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 0;
            isDirty = 3;
            const obj3 = { value: null, done: true };
            obj3[0] = arg1;
            return obj3;
          } else {
            settings = arg1.body.settings;
            closure_1 = outer1_0(outer1_2[9]).b64ToProto(closure_1.ProtoClass, settings);
            if (null == closure_1) {
              outer1_1.dispatchChanges({ loading: false, loaded: true });
              c3 = 0;
              isDirty = 3;
              const obj4 = { value: null, done: true };
              obj4[0] = undefined;
              return obj4;
            } else {
              closure_2 = outer1_1(outer1_2[12])[closure_1.type];
              c3 = outer1_0(outer1_2[9]).runMigrations(closure_1, closure_2);
              proto = c3.proto;
              isDirty = c3.isDirty;
              cleanupFuncs = c3.cleanupFuncs;
              const obj11 = outer1_0(outer1_2[9]);
              const obj5 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: null, local: false };
              const obj6 = { type: null, proto: null };
              obj6[0] = closure_1.type;
              obj6[1] = closure_1;
              obj5[1] = obj6;
              let tmp17 = isDirty;
              if (!isDirty) {
                tmp17 = settings;
              }
              obj5[2] = tmp17;
              proto = 3;
              isDirty = 1;
              const obj7 = { value: null, done: false };
              obj7[0] = outer1_1(outer1_2[4]).dispatch(obj5);
              return obj7;
            }
            const obj10 = outer1_0(outer1_2[9]);
          }
        } else if (arg0 === 1) {
          isDirty = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          isDirty = 3;
          const obj8 = { value: null, done: true };
          obj8[0] = arg1;
          return obj8;
        } else {
          if (isDirty) {
            const result = closure_1.markDirtyFromMigration(proto, cleanupFuncs);
          }
          c3 = 0;
          isDirty = 3;
          obj = { value: null, done: true };
          obj[0] = closure_1;
          return obj;
        }
      } catch (tmp36) {
        closure_2 = tmp36;
        if (tmp4 === c3) {
          isDirty = tmp2;
          throw tmp36;
        } else {
          proto = tmp;
        }
      }
    }
  })();
};
prototype["markDirtyFromMigration"] = function markDirtyFromMigration(c4, cleanupFuncs) {
  require("../../../_runtime/metro/00038__.js")(true, "this cannot run in the overlay");
  const logger = this.logger;
  logger.log("Marking dirty due to migrates");
  require("../../../_runtime/metro/00038__.js")(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations");
  this.markDirty(c4, { cleanup: cleanupFuncs, dispatch: false, delaySeconds: UserSettingsDelay.AUTOMATED, jitter: true });
};
prototype["markDirtyIfHasPendingChange"] = function markDirtyIfHasPendingChange(arg0) {
  let ProtoClass;
  let markDirty;
  const self = this;
  if (beforeSendCallbacks.some((hasChanges) => hasChanges.hasChanges())) {
    ({ ProtoClass, markDirty } = self);
    const obj = { dispatch: false, delaySeconds: 0, cleanup: null };
    obj[2] = arg0;
    markDirty(ProtoClass.create(), obj);
  }
};
prototype["scheduleSaveFromOfflineEdit"] = function scheduleSaveFromOfflineEdit() {
  require("../../../_runtime/metro/00038__.js")(true, "this cannot run in the overlay");
  const logger = this.logger;
  logger.log("Scheduling save from offline edit");
  const editInfo = this.getEditInfo().editInfo;
  require("../../../_runtime/metro/00038__.js")(null != editInfo.protoToSave, "protoToSave cannot be null");
  require("../../../_runtime/metro/00038__.js")(null != editInfo.offlineEditDataVersion, "offlineEditDataVersion cannot be null");
  require("../../../_runtime/metro/00038__.js")(null == editInfo.timeout, "timeout must not be set already");
  const sum = 5000 + Math.floor(5000 * Math.random());
  this.dispatchChanges({ timeout: setTimeout(this.persistChanges, sum), timeoutDelay: sum });
};
function updateUserAllGuildSettings(arg0, INFREQUENT_USER_ACTION) {
  let closure_0 = arg0;
  return obj.updateAsync("guilds", (arg0) => f69405(arg0), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, arg1) {
  let closure_0 = arg1;
  closure_0 = id;
  const f69395 = (arg0) => {
    arg0.guildThemeSourcePreference = closure_0;
  };
  return obj.updateAsync("guilds", (guilds) => callback(outer1_2[9]).mutateUserGuildSettingsInternal(guilds, callback, f69402), UserSettingsDelay.INFREQUENT_USER_ACTION);
}
obj = Object.create(UserSettingsProtoActionCreators.prototype);
obj.beforeSendCallbacks = [];
obj.lastSendTime = 0;
obj.persistChanges = importDefaultResult(function*() {
  if (config === 2) {
    config = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp6 === 3) {
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
      config = 2;
      if (0 === timeout) {
        if (arg0 === 1) {
          config = 3;
          throw arg1;
        } else if (arg0 === 2) {
          config = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let body = tmp3;
          let editInfo = tmp7;
          editInfo = undefined;
          body = undefined;
          let closure_2;
          let c3;
          timeout = undefined;
          let logResult = outer1_1;
          logResult = outer1_2;
          logResult = outer1_1(outer1_2[7])(true, "this cannot run in the overlay");
          logResult = outer1_0;
          const logger7 = outer1_0.logger;
          logResult = logger7.log("Persisting proto");
          logResult = outer1_0;
          editInfo = outer1_0.getEditInfo().editInfo;
          if (null != editInfo.protoToSave) {
            const item = outer1_0.beforeSendCallbacks.forEach((processProto) => processProto.processProto(editInfo.protoToSave));
            let obj6 = outer1_0(outer1_2[9]);
            const protoToB64Result = obj6.protoToB64(outer1_0.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                outer1_0.saveLastSendTime();
                const HTTP = outer1_0(outer1_2[10]).HTTP;
                let obj1 = { url: null, body: null, rejectWithError: false };
                obj1[0] = outer1_8.USER_SETTINGS_PROTO(outer1_0.type);
                const obj2 = { settings: null, required_data_version: null };
                obj2[0] = protoToB64Result;
                obj2[1] = editInfo.offlineEditDataVersion;
                obj1[1] = obj2;
                timeout = 2;
                config = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.patch(obj1);
                return obj3;
              }
            }
            const logger5 = outer1_0.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = outer1_0.beforeSendCallbacks;
          } else {
            const logger4 = outer1_0.logger;
            logger4.log("Not persisting proto because the proto was null");
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          config = closure_2;
          if (429 !== config.status) {
            if (400 === config.status) {
              body = config.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === outer1_7.INVALID_USER_SETTINGS_DATA) {
                const logger3 = outer1_0.logger;
                logger3.log("Reloading do to invalid data");
                const item1 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
                const ifNecessary = outer1_0.loadIfNecessary(true);
                let tmp57 = config;
                const errorCallbacks = outer1_0.getEditInfo().editInfo.errorCallbacks;
              }
              throw tmp57;
            }
            const logger2 = outer1_0.logger;
            logger2.log("Unknown user settings error");
            const item2 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
            tmp57 = config;
            const errorCallbacks1 = outer1_0.getEditInfo().editInfo.errorCallbacks;
          } else {
            const logger6 = editInfo.logger;
            logger6.log("Rate limited, scheduling retry");
            const _parseInt = parseInt;
            c3 = parseInt(config.headers["retry-after"]);
            const _isNaN = isNaN;
            if (isNaN(c3)) {
              c3 = 60;
            }
            const _setTimeout = setTimeout;
            const _Math = Math;
            const result = 30 * outer1_1(outer1_2[8]).Millis.SECOND;
            timeout = setTimeout(outer1_0.persistChanges, Math.min(result, c3 * outer1_1(outer1_2[8]).Millis.SECOND));
            const obj4 = { rateLimited: true, timeout: null };
            obj4[1] = timeout;
            outer1_0.dispatchChanges(obj4);
          }
        } else if (arg0 === 1) {
          config = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          config = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          body = arg1.body;
          if (body.out_of_date) {
            const logger = editInfo.logger;
            logger.log("Proto was out of date, discarding changes");
          }
          const cleanupFuncs = editInfo.getEditInfo().editInfo.cleanupFuncs;
          const item3 = cleanupFuncs.forEach((arg0) => arg0());
          obj = outer1_0(outer1_2[9]);
          closure_2 = obj.b64ToProto(editInfo.ProtoClass, body.settings);
          if (null != closure_2) {
            obj1 = outer1_1(outer1_2[4]);
            obj6 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: true, wasSaved: true, local: false };
            const obj7 = { proto: null, type: null };
            obj7[0] = closure_2;
            obj7[1] = editInfo.type;
            obj6[1] = obj7;
            obj1.dispatch(obj6);
            c3 = 0;
          }
        }
        c3 = 0;
        config = 3;
        return { value: "HermesInternal", done: null };
      }
      config = 3;
    } catch (tmp82) {
      closure_2 = tmp82;
      if (tmp4 === c3) {
        config = tmp2;
        throw tmp82;
      } else {
        timeout = logResult;
      }
    }
  }
});
obj.ProtoClass = require("create").PreloadedUserSettings;
obj.type = UserSettingsTypes.PRELOADED_USER_SETTINGS;
obj.logger = new require("ME")(obj.ProtoClass.typeName);
obj = Object.create(UserSettingsProtoActionCreators.prototype);
obj.beforeSendCallbacks = [];
obj.lastSendTime = 0;
obj.persistChanges = importDefaultResult(function*() {
  if (config === 2) {
    config = 3;
    HermesBuiltin.throwTypeError();
  } else if (tmp6 === 3) {
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
      config = 2;
      if (0 === timeout) {
        if (arg0 === 1) {
          config = 3;
          throw arg1;
        } else if (arg0 === 2) {
          config = 3;
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          let body = tmp3;
          let editInfo = tmp7;
          editInfo = undefined;
          body = undefined;
          let closure_2;
          let c3;
          timeout = undefined;
          let logResult = outer1_1;
          logResult = outer1_2;
          logResult = outer1_1(outer1_2[7])(true, "this cannot run in the overlay");
          logResult = outer1_0;
          const logger7 = outer1_0.logger;
          logResult = logger7.log("Persisting proto");
          logResult = outer1_0;
          editInfo = outer1_0.getEditInfo().editInfo;
          if (null != editInfo.protoToSave) {
            const item = outer1_0.beforeSendCallbacks.forEach((processProto) => processProto.processProto(editInfo.protoToSave));
            let obj6 = outer1_0(outer1_2[9]);
            const protoToB64Result = obj6.protoToB64(outer1_0.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                outer1_0.saveLastSendTime();
                const HTTP = outer1_0(outer1_2[10]).HTTP;
                let obj1 = { url: null, body: null, rejectWithError: false };
                obj1[0] = outer1_8.USER_SETTINGS_PROTO(outer1_0.type);
                const obj2 = { settings: null, required_data_version: null };
                obj2[0] = protoToB64Result;
                obj2[1] = editInfo.offlineEditDataVersion;
                obj1[1] = obj2;
                timeout = 2;
                config = 1;
                const obj3 = { value: null, done: false };
                obj3[0] = HTTP.patch(obj1);
                return obj3;
              }
            }
            const logger5 = outer1_0.logger;
            logger5.log("Not persisting proto because there is nothing to change");
            const beforeSendCallbacks = outer1_0.beforeSendCallbacks;
          } else {
            const logger4 = outer1_0.logger;
            logger4.log("Not persisting proto because the proto was null");
          }
        }
      } else {
        if (1 === tmp7) {
          c3 = 0;
          config = closure_2;
          if (429 !== config.status) {
            if (400 === config.status) {
              body = config.body;
              let code;
              if (body != null) {
                code = body.code;
              }
              if (code === outer1_7.INVALID_USER_SETTINGS_DATA) {
                const logger3 = outer1_0.logger;
                logger3.log("Reloading do to invalid data");
                const item1 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
                const ifNecessary = outer1_0.loadIfNecessary(true);
                let tmp57 = config;
                const errorCallbacks = outer1_0.getEditInfo().editInfo.errorCallbacks;
              }
              throw tmp57;
            }
            const logger2 = outer1_0.logger;
            logger2.log("Unknown user settings error");
            const item2 = outer1_0.getEditInfo().editInfo.errorCallbacks.forEach((arg0) => arg0());
            tmp57 = config;
            const errorCallbacks1 = outer1_0.getEditInfo().editInfo.errorCallbacks;
          } else {
            const logger6 = editInfo.logger;
            logger6.log("Rate limited, scheduling retry");
            const _parseInt = parseInt;
            c3 = parseInt(config.headers["retry-after"]);
            const _isNaN = isNaN;
            if (isNaN(c3)) {
              c3 = 60;
            }
            const _setTimeout = setTimeout;
            const _Math = Math;
            const result = 30 * outer1_1(outer1_2[8]).Millis.SECOND;
            timeout = setTimeout(outer1_0.persistChanges, Math.min(result, c3 * outer1_1(outer1_2[8]).Millis.SECOND));
            const obj4 = { rateLimited: true, timeout: null };
            obj4[1] = timeout;
            outer1_0.dispatchChanges(obj4);
          }
        } else if (arg0 === 1) {
          config = 3;
          throw arg1;
        } else if (arg0 === 2) {
          c3 = 0;
          config = 3;
          const obj5 = { value: null, done: true };
          obj5[0] = arg1;
          return obj5;
        } else {
          body = arg1.body;
          if (body.out_of_date) {
            const logger = editInfo.logger;
            logger.log("Proto was out of date, discarding changes");
          }
          const cleanupFuncs = editInfo.getEditInfo().editInfo.cleanupFuncs;
          const item3 = cleanupFuncs.forEach((arg0) => arg0());
          obj = outer1_0(outer1_2[9]);
          closure_2 = obj.b64ToProto(editInfo.ProtoClass, body.settings);
          if (null != closure_2) {
            obj1 = outer1_1(outer1_2[4]);
            obj6 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: null, resetEditInfo: true, wasSaved: true, local: false };
            const obj7 = { proto: null, type: null };
            obj7[0] = closure_2;
            obj7[1] = editInfo.type;
            obj6[1] = obj7;
            obj1.dispatch(obj6);
            c3 = 0;
          }
        }
        c3 = 0;
        config = 3;
        return { value: "HermesInternal", done: null };
      }
      config = 3;
    } catch (tmp82) {
      closure_2 = tmp82;
      if (tmp4 === c3) {
        config = tmp2;
        throw tmp82;
      } else {
        timeout = logResult;
      }
    }
  }
});
obj.ProtoClass = require("create").FrecencyUserSettings;
obj.type = UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS;
let tmp9 = new require("ME")(obj.ProtoClass.typeName);
obj.logger = new require("ME")(obj.ProtoClass.typeName);
let tmp11 = new require("ME")(obj.ProtoClass.typeName);
let result = require("MAX_FAVORITES").fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export const UserSettingsDelay = require("MAX_FAVORITES").UserSettingsDelay;
export function markUserSettingsLoadOkayForDevelopment() {

}
export { UserSettingsProtoActionCreators };
export const PreloadedUserSettingsActionCreators = obj;
export const FrecencyUserSettingsActionCreators = obj;
export const UserSettingsActionCreatorsByType = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj };
export { updateUserAllGuildSettings };
export { updateUserGuildSettings };
export const setDefaultGuildThemePreference = function setDefaultGuildThemePreference(GUILD) {
  let closure_0 = GUILD;
  return obj.updateAsync("appearance", (defaultGuildThemePreference) => {
    let UNSPECIFIED = defaultGuildThemePreference.defaultGuildThemePreference;
    if (UNSPECIFIED == null) {
      UNSPECIFIED = GUILD(outer1_2[13]).GuildThemeSourcePreference.UNSPECIFIED;
    }
    if (UNSPECIFIED === GUILD) {
      return false;
    } else {
      defaultGuildThemePreference.defaultGuildThemePreference = tmp3;
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { setGuildThemeSourcePreferenceOverride };
export const clearGuildThemeSourcePreferenceOverride = function clearGuildThemeSourcePreferenceOverride(closure_0) {
  obj = obj(1306).GuildThemeSourcePreference.UNSPECIFIED;
  obj = closure_0;
  const f69395 = (arg0) => {
    arg0.guildThemeSourcePreference = closure_0;
  };
  return obj.updateAsync("guilds", (guilds) => callback(outer1_2[9]).mutateUserGuildSettingsInternal(guilds, callback, f69402), UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, INFREQUENT_USER_ACTION) {
  let closure_0 = arg1;
  let f69402 = arg2;
  closure_0 = arg0;
  f69402 = (channels) => callback(outer1_2[9]).mutateUserChannelSettingsInternal(channels, callback, f69402);
  return obj.updateAsync("guilds", (guilds) => callback(outer1_2[9]).mutateUserGuildSettingsInternal(guilds, callback, f69402), INFREQUENT_USER_ACTION);
};
export const addDismissedContent = function addDismissedContent(closure_0) {
  let obj = closure_0;
  if (!handleConnectionClosedOrResumed.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const userContent = handleConnectionClosedOrResumed.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    let hasBitResult = null != dismissedContents;
    if (hasBitResult) {
      obj = obj(1357);
      hasBitResult = obj.hasBit(dismissedContents, closure_0);
    }
    if (!hasBitResult) {
      obj = { content_type: null };
      obj[0] = obj(1358).DismissibleContent[closure_0];
      require("../../utils/AnalyticsUtils.tsx").track(constants.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj);
      const obj2 = require("../../utils/AnalyticsUtils.tsx");
    }
  }
  return obj.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, callback)) {
      return false;
    } else {
      dismissedContents.dismissedContents = tmp(tmp2[15]).addBit(dismissedContents.dismissedContents, tmp3);
    }
    obj = callback(outer1_2[15]);
    tmp = callback;
    tmp2 = outer1_2;
    tmp3 = callback;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { updateRecurringDismissibleContentState };
export const updateGuildDismissedContent = function updateGuildDismissedContent(closure_0, closure_2, arg2) {
  const self = this;
  const apply = _updateGuildDismissedContent.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const removeDismissedContent = function removeDismissedContent(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  let closure_0 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  return obj.updateAsync("userContent", (dismissedContents) => {
    if (obj.hasBit(dismissedContents.dismissedContents, DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
      dismissedContents.dismissedContents = tmp(tmp2[15]).removeBit(dismissedContents.dismissedContents, tmp3);
    } else {
      return false;
    }
    obj = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL(outer1_2[15]);
    tmp = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
    tmp2 = outer1_2;
    tmp3 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const removeDismissedRecurringContent = function removeDismissedRecurringContent(GUILD_POWERUP_NOTIFICATION) {
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
};
export const clearGuildDismissedContents = function clearGuildDismissedContents() {
  const f69405 = (guilds) => {
    if (null != guilds.guilds) {
      const _Object = Object;
      const values = Object.values(guilds.guilds);
      for (const item10013 of values) {
        let tmp5 = item10013;
        if (null != item10013) {
          let tmp6 = item10013;
          tmp5.guildDismissibleContentStates = {};
          let _Uint8Array = Uint8Array;
          let tmp7 = new.target;
          let tmp8 = new.target;
          let uint8Array = new Uint8Array();
          let tmp10 = uint8Array;
          tmp5.dismissedGuildContent = uint8Array;
        }
        continue;
      }
    }
  };
  return obj.updateAsync("guilds", (arg0) => f69405(arg0), UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearDismissedContents = function clearDismissedContents() {
  return obj.updateAsync("userContent", (arg0) => {
    const uint8Array = new Uint8Array();
    arg0.dismissedContents = uint8Array;
    arg0.recurringDismissibleContentStates = {};
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const checkAllDismissedContents = function checkAllDismissedContents() {
  return obj.updateAsync("userContent", (recurringDismissibleContentStates) => {
    let uint8Array = new Uint8Array();
    for (const item10020 of tmp2) {
      let tmp3 = item10020;
      let tmp4 = callback;
      let tmp5 = callback;
      let tmp6 = table;
      let tmp7 = table;
      let obj = callback(table[18]);
      if (obj.isSingleUseDismissibleContent(item10020)) {
        let tmp11 = tmp4;
        let tmp12 = tmp6;
        let tmp5Result = tmp5(tmp7[15]);
        let tmp13 = uint8Array;
        let tmp14 = item10020;
        uint8Array = tmp5Result.addBit(uint8Array, tmp3);
      } else {
        let tmp8 = item10020;
        let tmp9 = tmp4;
        let tmp10 = tmp6;
        tmp5Result = tmp5(tmp7[19]);
        arg0.recurringDismissibleContentStates[tmp3] = tmp5Result.getDismissedRecurringDismissibleContentState(tmp3);
      }
      continue;
    }
    recurringDismissibleContentStates.dismissedContents = uint8Array;
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};