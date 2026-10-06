// === Module 2033: UserSettingsProtoActionCreators ===

// Module 2033 (UserSettingsProtoActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import _modDef38 from "module_38" /* 38 */;
import Storage3 from "Storage" /* 510 */;
import DurationsDefault from "Durations" /* 1102 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import frecency_user_settings from "frecency_user_settings" /* 1232 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import AnalyticsUtilsDefault from "AnalyticsUtils" /* 1252 */;
import Uint8ArrayUtils from "Uint8ArrayUtils" /* 2035 */;
import _asyncToGenerator_mod from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import UserSettingsConstants from "UserSettingsConstants" /* 1095 */;
import Constants from "Constants" /* 1085 */;
import Dispatcher_mod from "Dispatcher" /* 584 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, c5, guildDismissibleContentStates, recurringDismissibleContentStates;

let c9;
let metroImportAll;
let metroImportDefault;
const f135807 = async () => {
  let closure_1;
  let obj11;
  let obj5;
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    let c3;
    let proto;
    try {
      let closure_0;
      let body2;
      let timeout;
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
          closure_0 = tmp4;
          body2 = undefined;
          proto = undefined;
          c3 = undefined;
          timeout = undefined;
          tmp(proto[8])(true, "this cannot run in the overlay");
          const logger7 = obj.logger;
          logger7.log("Persisting proto");
          const editInfo = obj.getEditInfo().editInfo;
          if (null != editInfo.protoToSave) {
            const beforeSendCallbacks = obj.beforeSendCallbacks;
            const item = beforeSendCallbacks.forEach((processProto) => processProto.processProto(protoToSave.protoToSave));
            const obj7 = closure_0(proto[10]);
            const protoToB64Result = obj7.protoToB64(obj.ProtoClass, editInfo.protoToSave);
            if (null != protoToB64Result) {
              if ("" !== protoToB64Result) {
                c3 = 1;
                obj.saveLastSendTime();
                const HTTP = closure_0(proto[11]).HTTP;
                const request = { url: closure_1_8.USER_SETTINGS_PROTO(obj.type), body: obj5, rejectWithError: false };
                const patch = HTTP.patch;
                obj5 = { settings: protoToB64Result, required_data_version: editInfo.offlineEditDataVersion };
                c4 = 2;
                c5 = 1;
                const obj6 = { value: patch(request), done: false };
                return obj6;
              }
            }
            const logger5 = obj.logger;
            logger5.log("Not persisting proto because there is nothing to change");
          } else {
            const logger4 = obj.logger;
            logger4.log("Not persisting proto because the proto was null");
          }
        }
      } else if (1 === c4) {
        c3 = 0;
        const config = proto;
        if (429 !== config.status) {
          if (400 === config.status) {
            let tmp54;
            const body = config.body;
            let code;
            if (body != null) {
              code = body.code;
            }
            if (code === constants.INVALID_USER_SETTINGS_DATA) {
              const logger3 = closure_129_0.logger;
              logger3.log("Reloading do to invalid data");
              const errorCallbacks = closure_129_0.getEditInfo().editInfo.errorCallbacks;
              const item1 = errorCallbacks.forEach((fn) => fn(config));
              const ifNecessary = closure_129_0.loadIfNecessary(true);
              tmp54 = config;
            }
            throw tmp54;
          }
          const logger2 = closure_129_0.logger;
          logger2.log("Unknown user settings error");
          const errorCallbacks1 = closure_129_0.getEditInfo().editInfo.errorCallbacks;
          const item2 = errorCallbacks1.forEach((fn) => fn(config));
          tmp54 = config;
        } else {
          const logger6 = closure_129_0.logger;
          logger6.log("Rate limited, scheduling retry");
          const _parseInt = parseInt;
          c3 = parseInt(config.headers["retry-after"]);
          const _isNaN = isNaN;
          if (isNaN(c3)) {
            c3 = 60;
          }
          const _setTimeout = setTimeout;
          const _Math = Math;
          const persistChanges = closure_129_0.persistChanges;
          const result = 30 * tmp(proto[9]).Millis.SECOND;
          timeout = setTimeout(persistChanges, min(result, c3 * tmp(proto[9]).Millis.SECOND));
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
        obj = closure_0(proto[10]);
        proto = obj.b64ToProto(closure_129_0.ProtoClass, body2.settings);
        if (null == proto) {
          c3 = 0;
          c5 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const obj10 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: obj11, resetEditInfo: true, wasSaved: true, local: false };
          obj11 = { proto, type: closure_129_0.type };
          const obj2 = tmp(proto[5]);
          obj2.dispatch(obj10);
          c3 = 0;
        }
      }
      c5 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp79) {
      proto = tmp79;
      if (0 === c3) {
        c5 = 3;
        throw tmp79;
      } else {
        c4 = 1;
      }
    }
  }
};
function updateUserGuildSettings(guildId, arg1, INFREQUENT_USER_ACTION) {
  let closure_0 = guildId;
  let closure_1 = arg1;
  return obj.updateAsync("guilds", async (guilds) => {
    obj = closure_0(dependencyMap[10]);
    return obj.mutateUserGuildSettingsInternal(guilds, closure_0, f85796);
  }, INFREQUENT_USER_ACTION);
}
function updateRecurringDismissibleContentState() {
  return obj(...arguments);
}
let obj = function _updateRecurringDismissibleContentState() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let c2;
    let c3;
    let closure_0;
    let closure_1;
    await closure_2_11.updateAsync("userContent", async (recurringDismissibleContentStates) => {
      recurringDismissibleContentStates = recurringDismissibleContentStates.recurringDismissibleContentStates;
      obj = {};
      const merged = Object.assign(recurringDismissibleContentStates.recurringDismissibleContentStates[closure_0]);
      const merged1 = Object.assign(closure_1);
      recurringDismissibleContentStates[closure_0] = obj;
    }, constants.INFREQUENT_USER_ACTION);
    return value;
  });
  return obj(...arguments);
};
obj = function _updateGuildDismissedContent() {
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let c3;
    let c4;
    let closure_0;
    let closure_2 = arg2;
    let closure_1 = closure_2;
    await updateUserGuildSettings(closure_1, (guildDismissibleContentStates) => {
      guildDismissibleContentStates = guildDismissibleContentStates.guildDismissibleContentStates;
      obj = {};
      const merged = Object.assign(guildDismissibleContentStates.guildDismissibleContentStates[closure_0]);
      const merged1 = Object.assign(closure_1);
      guildDismissibleContentStates[closure_0] = obj;
    }, constants.INFREQUENT_USER_ACTION);
    return value;
  });
  return obj(...arguments);
};
obj = function _checkAllDismissedContents() {
  let paths;
  obj = _asyncToGenerator(async () => {
    let c2;
    let c3;
    let closure_1;
    await require("asyncRequire")(paths[19], paths.paths);
    let closure_0 = value.getDismissedRecurringDismissibleContentState;
    return closure_129_11.updateAsync("userContent", async (recurringDismissibleContentStates) => {
      let uint8Array = new Uint8Array();
      const ALL_DISMISSIBLE_CONTENT = closure_0(c2[21]).ALL_DISMISSIBLE_CONTENT;
      for (const item10020 of ALL_DISMISSIBLE_CONTENT) {
        obj = closure_0(c2[21]);
        if (obj.isSingleUseDismissibleContent(item10020)) {
          let tmp4Result = closure_0(c2[16]);
          uint8Array = tmp4Result.addBit(uint8Array, item10020);
        } else {
          recurringDismissibleContentStates.recurringDismissibleContentStates[item10020] = closure_1_0(item10020);
        }
        continue;
      }
      recurringDismissibleContentStates.dismissedContents = uint8Array;
    }, closure_129_6.INFREQUENT_USER_ACTION);
  });
  return obj(...arguments);
};
let _asyncToGenerator = _asyncToGenerator_mod;
const UserSettingsTypes = UserSettingsConstants.UserSettingsTypes;
({ AbortCodes: metroImportDefault, Endpoints: metroImportAll, AnalyticEvents: c9 } = Constants);
const UserSettingsProtoLastWriteTimes = "UserSettingsProtoLastWriteTimes";
const UserSettingsDelay = UserSettingsConstants.UserSettingsDelay;
let timestamp = Date.now();
let Dispatcher = Dispatcher_mod;
const subscription = Dispatcher.subscribe("CONNECTION_OPEN", () => {
  const timestamp = Date.now();
});
Dispatcher = Dispatcher_mod;
const subscription1 = Dispatcher.subscribe("CONNECTION_CLOSED", () => {
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
  constructor(ProtoClass, type) {
    obj = Object.create(new.target.prototype);
    obj.beforeSendCallbacks = [];
    obj.lastSendTime = 0;
    obj.persistChanges = _asyncToGenerator(f135807);
    obj.ProtoClass = ProtoClass;
    obj.type = type;
    obj.logger = new LoggerDefault(obj.ProtoClass.typeName);
    new LoggerDefault(obj.ProtoClass.typeName);
    return obj;
  }
  getEditInfo() {
    return UserSettingsProtoStore.getFullState()[this.type];
  }
  getCurrentValue() {
    return this.getEditInfo().proto;
  }
  updateAsync(favorites, update, INFREQUENT_USER_ACTION, onSaveFailed) {
    let closure_0 = favorites;
    let closure_1 = update;
    _asyncToGenerator = onSaveFailed;
    const self = this;
    return (async () => {
      let c2;
      let closure_0;
      let tmp8;
      if (c3 === 2) {
        c3 = 3;
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
          let tmp;
          let closure_1;
          let closure_2;
          c3 = 2;
          if (0 === INFREQUENT_USER_ACTION) {
            if (arg0 === 1) {
              c3 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              tmp = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              INFREQUENT_USER_ACTION = 1;
              c3 = 1;
              const obj4 = { value: self.loadIfNecessary(), done: false };
              return obj4;
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            const obj5 = tmp(INFREQUENT_USER_ACTION[7]);
            tmp = obj5.getProtoFieldClass(closure_129_4.ProtoClass, closure_129_0);
            closure_1 = closure_129_4.getCurrentValue()[closure_129_0];
            const obj6 = tmp(INFREQUENT_USER_ACTION[7]);
            closure_2 = obj6.createModifiedProto(closure_1, closure_129_1, tmp, closure_129_4.ProtoClass, closure_129_0);
            if (null != closure_2) {
              const logger = closure_129_4.logger;
              const _String = String;
              const _HermesInternal = HermesInternal;
              logger.log("Updating " + String(closure_129_0) + " with delay " + closure_129_2);
              const obj7 = { delaySeconds: closure_129_2, jitter: tmp8, onError: closure_129_3 };
              tmp8 = closure_129_2 === constants.AUTOMATED;
              const markDirty = closure_129_4.markDirty;
              const tmp41 = closure_2;
              if (!tmp8) {
                tmp8 = closure_129_2 === constants.DAILY;
              }
              markDirty(tmp41, obj7);
            }
            c3 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp13) {
          c3 = 3;
          throw tmp13;
        }
      }
    })();
  }
  markDirty(proto, dispatch) {
    let obj3;
    const self = this;
    _modDef38(true, "this cannot run in the overlay");
    const editInfo = this.getEditInfo().editInfo;
    obj = { timeout: editInfo.timeout };
    if (editInfo.loaded) {
      if (false !== dispatch.dispatch) {
        const obj2 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: obj3, partial: true, local: true };
        obj3 = { type: self.type, proto };
        const tmp2Result = Dispatcher;
        tmp2Result.dispatch(obj2);
      }
      let num = dispatch.delaySeconds;
      if (num == null) {
        num = 0;
      }
      const tmp10 = null != obj.timeout && num < editInfo.timeoutDelay && !editInfo.rateLimited;
      if (tmp10) {
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
          sum = result + floor(random * Math.min(result, 30 * DurationsDefault.Millis.SECOND));
        }
        const logger = self.logger;
        logger.log("Scheduling save from markDirty");
        const _setTimeout = setTimeout;
        obj.timeout = setTimeout(self.persistChanges, sum);
        obj.timeoutDelay = num;
      }
      if (null != dispatch.cleanup) {
        const items = [];
        HermesBuiltin.arraySpread(items, dispatch.cleanup, HermesBuiltin.arraySpread(items, editInfo.cleanupFuncs, 0));
        obj.cleanupFuncs = items;
      }
      let hasItem = null == dispatch.onError;
      if (!hasItem) {
        const errorCallbacks = editInfo.errorCallbacks;
        hasItem = errorCallbacks.includes(dispatch.onError);
      }
      if (!hasItem) {
        const items1 = [];
        items1[HermesBuiltin.arraySpread(items1, editInfo.errorCallbacks, 0)] = dispatch.onError;
        obj.errorCallbacks = items1;
      }
      if (null == editInfo.protoToSave) {
        obj.protoToSave = proto;
      } else {
        const obj5 = user_settings_UserSettingsUtils;
        obj.protoToSave = obj5.mergeTopLevelFields(self.ProtoClass, editInfo.protoToSave, proto);
      }
      self.dispatchChanges(obj);
    } else {
      const _Error = Error;
      throw Error("Cannot edit user settings proto because we have not yet loaded the stored version from the DB");
    }
  }
  dispatchChanges(changes) {
    let obj3;
    const obj2 = { type: "USER_SETTINGS_PROTO_UPDATE_EDIT_INFO", settings: obj3 };
    obj3 = { changes, type: this.type };
    obj = Dispatcher;
    obj.dispatch(obj2);
  }
  saveLastSendTime() {
    const Storage = Storage3.Storage;
    obj = Storage.get(UserSettingsProtoLastWriteTimes);
    if (obj == null) {
      obj = {};
    }
    obj[this.type] = Date.now();
    const Storage2 = Storage3.Storage;
    const result = Storage2.set(UserSettingsProtoLastWriteTimes, obj);
  }
  loadIfUncached(FRECENCY_AND_FAVORITES_SETTINGS, arg1) {
    const hasLoadedResult = UserSettingsProtoStore.hasLoaded(FRECENCY_AND_FAVORITES_SETTINGS) && true !== arg1;
    if (!hasLoadedResult) {
      const self = this;
      const ifNecessary = this.loadIfNecessary(arg1);
    }
  }
  loadIfNecessary(arg0) {
    let closure_0 = arg0;
    const self = this;
    return (async () => {
      let closure_1;
      let obj9;
      let tmp14;
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
        let c3;
        let closure_2;
        try {
          let settings;
          let tmp;
          let closure_3;
          let proto;
          let isDirty;
          let cleanupFuncs;
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
              closure_0 = tmp4;
              settings = undefined;
              tmp = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              proto = undefined;
              isDirty = undefined;
              cleanupFuncs = undefined;
              const editInfo = self.getEditInfo().editInfo;
              const tmp64 = closure_0;
              if (!tmp64) {
                c5 = 3;
                return { value: "IconComponent", done: null };
              }
              const logger = self.logger;
              logger.log("Loading proto");
              self.dispatchChanges({ loading: true });
              c3 = 1;
              const HTTP = closure_0(closure_2[11]).HTTP;
              const obj4 = { url: closure_1_8.USER_SETTINGS_PROTO(self.type), rejectWithError: false };
              const get = HTTP.get;
              c4 = 2;
              c5 = 1;
              const obj5 = { value: get(obj4), done: false };
              return obj5;
            }
          } else if (1 === c4) {
            c3 = 0;
            let closure_7 = closure_2;
            closure_129_1.dispatchChanges({ loading: false });
            throw closure_7;
          } else if (2 === c4) {
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
              const obj10 = closure_0(closure_2[10]);
              tmp = obj10.b64ToProto(closure_129_1.ProtoClass, settings);
              if (null == tmp) {
                closure_129_1.dispatchChanges({ loading: false, loaded: true });
                c3 = 0;
                c5 = 3;
                const obj7 = { value: undefined, done: true };
                return obj7;
              } else {
                closure_2 = tmp(closure_2[13])[closure_129_1.type];
                const obj11 = closure_0(closure_2[10]);
                closure_3 = obj11.runMigrations(tmp, closure_2);
                proto = closure_3.proto;
                isDirty = closure_3.isDirty;
                cleanupFuncs = closure_3.cleanupFuncs;
                const obj8 = { type: "USER_SETTINGS_PROTO_UPDATE", settings: obj9, resetEditInfo: tmp14, local: false };
                obj9 = { type: closure_129_1.type, proto: tmp };
                tmp14 = isDirty;
                const dispatch = tmp(closure_2[5]).dispatch;
                const tmp60 = tmp(closure_2[5]);
                if (!isDirty) {
                  tmp14 = closure_129_0;
                }
                c4 = 3;
                c5 = 1;
                const obj12 = { value: dispatch(obj8), done: false };
                return obj12;
              }
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 0;
            c5 = 3;
            const obj13 = { value, done: true };
            return obj13;
          } else {
            const tmp6 = isDirty;
            if (tmp6) {
              const result = closure_129_1.markDirtyFromMigration(proto, cleanupFuncs);
            }
            c3 = 0;
            c5 = 3;
            obj = { value: tmp, done: true };
            return obj;
          }
        } catch (tmp33) {
          closure_2 = tmp33;
          if (0 === c3) {
            c5 = 3;
            throw tmp33;
          } else {
            c4 = 1;
          }
        }
      }
    })();
  }
  markDirtyFromMigration(proto, cleanupFuncs) {
    _modDef38(true, "this cannot run in the overlay");
    const logger = this.logger;
    logger.log("Marking dirty due to migrates");
    const tmp3 = _modDef38;
    tmp3(null == this.getEditInfo().editInfo.offlineEditDataVersion, "offline changes are not supported with migrations");
    obj = { cleanup: cleanupFuncs, dispatch: false, delaySeconds: UserSettingsDelay.AUTOMATED, jitter: true };
    this.markDirty(proto, obj);
  }
  markDirtyIfHasPendingChange(cleanup) {
    let ProtoClass;
    let markDirty;
    const self = this;
    const beforeSendCallbacks = this.beforeSendCallbacks;
    if (beforeSendCallbacks.some((hasChanges) => hasChanges.hasChanges())) {
      ({ ProtoClass, markDirty } = self);
      obj = { dispatch: false, delaySeconds: 0, cleanup };
      markDirty(ProtoClass.create(), obj);
    }
  }
  scheduleSaveFromOfflineEdit() {
    _modDef38(true, "this cannot run in the overlay");
    const logger = this.logger;
    logger.log("Scheduling save from offline edit");
    const editInfo = this.getEditInfo().editInfo;
    _modDef38(null != editInfo.protoToSave, "protoToSave cannot be null");
    _modDef38(null != editInfo.offlineEditDataVersion, "offlineEditDataVersion cannot be null");
    _modDef38(null == editInfo.timeout, "timeout must not be set already");
    const sum = 5000 + Math.floor(5000 * Math.random());
    obj = { timeout: setTimeout(this.persistChanges, sum), timeoutDelay: sum };
    this.dispatchChanges(obj);
  }
}
const prototype = UserSettingsProtoActionCreators.prototype;
function updateUserAllGuildSettings(arg0, INFREQUENT_USER_ACTION) {
  let closure_0 = arg0;
  return obj.updateAsync("guilds", async (arg0) => f85799(arg0), INFREQUENT_USER_ACTION);
}
function setGuildThemeSourcePreferenceOverride(id, arg1) {
  let closure_0 = id;
  const f85788 = (arg0) => {
    arg0.guildThemeSourcePreference = UNSPECIFIED;
  };
  return obj.updateAsync("guilds", async (guilds) => {
    obj = closure_0(dependencyMap[10]);
    return obj.mutateUserGuildSettingsInternal(guilds, closure_0, f85796);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
}
const PreloadedUserSettings = preloaded_user_settings.PreloadedUserSettings;
const PRELOADED_USER_SETTINGS = UserSettingsTypes.PRELOADED_USER_SETTINGS;
obj = Object.create(UserSettingsProtoActionCreators.prototype);
obj.beforeSendCallbacks = [];
obj.lastSendTime = 0;
obj.persistChanges = _asyncToGenerator(f135807);
obj.ProtoClass = PreloadedUserSettings;
obj.type = PRELOADED_USER_SETTINGS;
let tmp10 = new LoggerDefault(obj.ProtoClass.typeName);
obj.logger = tmp10;
const FrecencyUserSettings = frecency_user_settings.FrecencyUserSettings;
const FRECENCY_AND_FAVORITES_SETTINGS = UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS;
let obj2 = Object.create(UserSettingsProtoActionCreators.prototype);
obj2.beforeSendCallbacks = [];
obj2.lastSendTime = 0;
obj2.persistChanges = _asyncToGenerator(f135807);
obj2.ProtoClass = FrecencyUserSettings;
obj2.type = FRECENCY_AND_FAVORITES_SETTINGS;
obj2.logger = new LoggerDefault(obj2.ProtoClass.typeName);
const tmp12 = new LoggerDefault(obj2.ProtoClass.typeName);
let result = size.fileFinishedImporting("modules/user_settings/UserSettingsProtoActionCreators.tsx");

export { UserSettingsDelay };
export function markUserSettingsLoadOkayForDevelopment() {

}
export { UserSettingsProtoActionCreators };
export const PreloadedUserSettingsActionCreators = obj;
export const FrecencyUserSettingsActionCreators = obj2;
export const UserSettingsActionCreatorsByType = { [UserSettingsTypes.PRELOADED_USER_SETTINGS]: obj, [UserSettingsTypes.FRECENCY_AND_FAVORITES_SETTINGS]: obj2 };
export { updateUserAllGuildSettings };
export { updateUserGuildSettings };
export const setDefaultGuildThemePreference = function setDefaultGuildThemePreference(GUILD) {
  let closure_0 = GUILD;
  return obj.updateAsync("appearance", async (defaultGuildThemePreference) => {
    let UNSPECIFIED = defaultGuildThemePreference.defaultGuildThemePreference;
    if (UNSPECIFIED == null) {
      UNSPECIFIED = preloaded_user_settings.GuildThemeSourcePreference.UNSPECIFIED;
    }
    if (UNSPECIFIED === GUILD) {
      return false;
    } else {
      defaultGuildThemePreference.defaultGuildThemePreference = tmp3;
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { setGuildThemeSourcePreferenceOverride };
export const clearGuildThemeSourcePreferenceOverride = function clearGuildThemeSourcePreferenceOverride(arg0) {
  let closure_0;
  const UNSPECIFIED = require("preloaded_user_settings").GuildThemeSourcePreference.UNSPECIFIED;
  _require = arg0;
  const f85788 = (arg0) => {
    arg0.guildThemeSourcePreference = UNSPECIFIED;
  };
  return obj.updateAsync("guilds", async (guilds) => {
    obj = closure_0(dependencyMap[10]);
    return obj.mutateUserGuildSettingsInternal(guilds, closure_0, f85796);
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const updateUserChannelSettings = function updateUserChannelSettings(arg0, arg1, arg2, INFREQUENT_USER_ACTION) {
  let closure_1 = arg2;
  let closure_0 = arg0;
  const f85796 = (channels) => {
    obj = closure_0(dependencyMap[10]);
    return obj.mutateUserChannelSettingsInternal(channels, closure_0, f85796);
  };
  return obj.updateAsync("guilds", async (guilds) => {
    obj = closure_0(dependencyMap[10]);
    return obj.mutateUserGuildSettingsInternal(guilds, closure_0, f85796);
  }, INFREQUENT_USER_ACTION);
};
export const addDismissedContent = function addDismissedContent(CHANNEL_NOTICE_INVITE) {
  _require = CHANNEL_NOTICE_INVITE;
  if (!UserSettingsProtoStore.hasLoaded(UserSettingsTypes.PRELOADED_USER_SETTINGS)) {
    const userContent = UserSettingsProtoStore.settings.userContent;
    let dismissedContents;
    if (userContent != null) {
      dismissedContents = userContent.dismissedContents;
    }
    let hasBitResult = null != dismissedContents;
    if (hasBitResult) {
      obj = require("Uint8ArrayUtils");
      hasBitResult = obj.hasBit(dismissedContents, CHANNEL_NOTICE_INVITE);
    }
    if (!hasBitResult) {
      const obj2 = { content_type: require("dismissible_content").DismissibleContent[CHANNEL_NOTICE_INVITE] };
      const track = AnalyticsUtilsDefault.track;
      const DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN = constants.DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN;
      AnalyticsUtilsDefault;
      track(DISMISSIBLE_CONTENT_DISMISSED_BEFORE_CONNECTION_OPEN, obj2);
    }
  }
  return obj.updateAsync("userContent", async (dismissedContents) => {
    obj = Uint8ArrayUtils;
    if (obj.hasBit(dismissedContents.dismissedContents, CHANNEL_NOTICE_INVITE)) {
      return false;
    } else {
      const tmpResult = Uint8ArrayUtils;
      dismissedContents.dismissedContents = tmpResult.addBit(dismissedContents.dismissedContents, CHANNEL_NOTICE_INVITE);
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export { updateRecurringDismissibleContentState };
export const updateGuildDismissedContent = function updateGuildDismissedContent() {
  return obj(...arguments);
};
export const removeDismissedContent = function removeDismissedContent(DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL) {
  let closure_0 = DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL;
  return obj.updateAsync("userContent", async (dismissedContents) => {
    obj = Uint8ArrayUtils;
    if (obj.hasBit(dismissedContents.dismissedContents, DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL)) {
      const tmpResult = Uint8ArrayUtils;
      dismissedContents.dismissedContents = tmpResult.removeBit(dismissedContents.dismissedContents, DOUBLE_TAP_TO_REACT_EXPANDED_UPSELL);
    } else {
      return false;
    }
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const removeDismissedRecurringContent = function removeDismissedRecurringContent(GUILD_POWERUP_NOTIFICATION) {
  return updateRecurringDismissibleContentState(GUILD_POWERUP_NOTIFICATION, { lastDismissedVersion: 0, lastDismissedAtMs: "0", lastDismissedObjectId: "0", numTimesDismissed: 0 });
};
export const clearGuildDismissedContents = function clearGuildDismissedContents() {
  const f85799 = function(guilds) {
    if (null != guilds.guilds) {
      const _Object = Object;
      const values = Object.values(guilds.guilds);
      for (const item10013 of values) {
        if (null != item10013) {
          item10013.guildDismissibleContentStates = {};
          let _Uint8Array = Uint8Array;
          let self = this;
          let self2 = this;
          let uint8Array = new Uint8Array();
          item10013.dismissedGuildContent = uint8Array;
        }
        continue;
      }
    }
  };
  return obj.updateAsync("guilds", async (arg0) => f85799(arg0), UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const clearDismissedContents = function clearDismissedContents() {
  return obj.updateAsync("userContent", async (arg0) => {
    const uint8Array = new Uint8Array();
    arg0.dismissedContents = uint8Array;
    arg0.recurringDismissibleContentStates = {};
  }, UserSettingsDelay.INFREQUENT_USER_ACTION);
};
export const checkAllDismissedContents = function checkAllDismissedContents() {
  return obj(...arguments);
};