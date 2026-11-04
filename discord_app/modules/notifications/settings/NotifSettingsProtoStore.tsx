// === Module 15801: NotifSettingsProtoStore ===

// Module 15801 (NotifSettingsProtoStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import notification_settings from "notification_settings" /* 15802 */;
import EffectiveNotifSettings from "EffectiveNotifSettings" /* 15804 */;
import UserSettingsProtoStore from "UserSettingsProtoStore" /* 1231 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
function hasValidEffectiveSettings() {
  let tmp = null != effectiveSettings;
  if (tmp) {
    tmp = !c14;
  }
  if (tmp) {
    tmp = null != assignment;
  }
  if (tmp) {
    tmp = c4 === assignment;
  }
  if (tmp) {
    let str = "control";
    if (enabled) {
      str = "treatment";
    }
    tmp = effectiveSettings.arm === str;
  }
  if (tmp) {
    tmp = effectiveSettings.account_id === AuthenticationStore.getId();
  }
  if (tmp) {
    let tmp11 = null != c10;
    if (!tmp11) {
      const versions = closure_9.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      tmp11 = effectiveSettings.declarative_data_version >= num;
    }
    tmp = tmp11;
  }
  if (tmp) {
    tmp = c3 === EffectiveNotifSettings.legacySourceFingerprint(effectiveSettings, UserSettingsProtoStore.settings);
  }
  return tmp;
}
function acceptEffectiveSettings(effectiveSettings) {
  let tmp = effectiveSettings.account_id === AuthenticationStore.getId();
  if (tmp) {
    const versions = closure_9.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    let tmp4 = effectiveSettings.declarative_data_version >= num;
    if (tmp4) {
      let account_id;
      if (effectiveSettings != null) {
        account_id = effectiveSettings.account_id;
      }
      let tmp6 = account_id === effectiveSettings.account_id;
      if (tmp6) {
        tmp6 = effectiveSettings.declarative_data_version < effectiveSettings.declarative_data_version;
      }
      let tmp8 = !tmp6;
      if (!tmp6) {
        const versions2 = UserSettingsProtoStore.settings.versions;
        let num2;
        if (versions2 != null) {
          num2 = versions2.dataVersion;
        }
        if (num2 == null) {
          num2 = 0;
        }
        if (effectiveSettings.legacy_data_version >= num2) {
          const _Date = Date;
          c13 = Date.now();
          c3 = EffectiveNotifSettings.legacySourceFingerprint(effectiveSettings, UserSettingsProtoStore.settings);
          c4 = assignment;
          c14 = false;
          c5 = undefined;
          c15 = false;
        }
        tmp8 = tmp10;
      }
      tmp4 = tmp8;
    }
    tmp = tmp4;
  }
  return tmp;
}
let DeclarativeSettings = fn(15802).DeclarativeSettings;
let closure_9 = DeclarativeSettings.create();
let c10;
let c11;
let c12 = false;
let c13 = 0;
let c14 = false;
let c15 = false;
let closure_16 = 0;
let enabled = false;
const PersistedStore = initializeDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {
}
const prototype = NotifSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(effectiveSettings) {
  this.waitFor(AuthenticationStore, UserSettingsProtoStore);
  if (null != effectiveSettings) {
    c2 = EffectiveNotifSettings.parseEffectiveNotifSettings(effectiveSettings.effectiveSettings);
    let num = effectiveSettings.effectiveFetchedAt;
    if (num == null) {
      num = 0;
    }
    c13 = num;
    c3 = effectiveSettings.effectiveSourceFingerprint;
    let prop;
    if (typeof effectiveSettings.effectiveSettingsAssignment === "string") {
      prop = effectiveSettings.effectiveSettingsAssignment;
    }
    c4 = prop;
    c14 = null == prop;
    let proto = effectiveSettings.proto;
    if (proto == null) {
      proto = null;
    }
    const b64ToProtoResult = user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, proto);
    if (null != b64ToProtoResult) {
      closure_9 = b64ToProtoResult;
    }
    const tmp7Result = user_settings_UserSettingsUtils;
    let protoToSave = effectiveSettings.protoToSave;
    if (protoToSave == null) {
      protoToSave = null;
    }
    const b64ToProtoResult1 = user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, protoToSave);
    if (null != b64ToProtoResult1) {
      const obj = { partialSettings: b64ToProtoResult1, offlineEditDataVersion: null, versionSource: null };
      let num2 = effectiveSettings.offlineEditDataVersion;
      if (num2 == null) {
        num2 = 0;
      }
      obj.offlineEditDataVersion = num2;
      let str = "proto";
      if ("effective" === effectiveSettings.offlineEditVersionSource) {
        str = "effective";
      }
      obj.versionSource = str;
      c11 = obj;
    }
    const tmp7Result2 = user_settings_UserSettingsUtils;
  }
};
prototype["getState"] = function getState() {
  const obj = { proto: user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, closure_9), effectiveSettings, effectiveFetchedAt, effectiveSourceFingerprint, effectiveSettingsAssignment: null };
  let offlineEditDataVersion = dependencyMap;
  let tmp2;
  if (!c14) {
    tmp2 = c4;
  }
  obj.effectiveSettingsAssignment = tmp2;
  let versionSource = _undefined;
  if (_undefined == null) {
    versionSource = _undefined2;
  }
  if (null == versionSource) {
    return obj;
  } else {
    if (null == _undefined) {
      obj.protoToSave = user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, versionSource.partialSettings);
      offlineEditDataVersion = versionSource.offlineEditDataVersion;
      obj.offlineEditDataVersion = offlineEditDataVersion;
      versionSource = versionSource.versionSource;
      obj.offlineEditVersionSource = versionSource;
      const tmpResult = user_settings_UserSettingsUtils;
    }
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    const cloneResult = DeclarativeSettings.clone(_undefined.partialSettings);
    const DeclarativeSettings2 = notification_settings.DeclarativeSettings;
    DeclarativeSettings2.mergePartial(cloneResult, _undefined2.partialSettings);
  }
};
Object.defineProperty(prototype, "hasLoaded", {
  get: function hasLoaded() {
    return c12;
  },
  set: undefined
});
Object.defineProperty(prototype, "pendingEdit", {
  get: function pendingEdit() {
    return c11;
  },
  set: undefined
});
Object.defineProperty(prototype, "applyingEdit", {
  get: function applyingEdit() {
    return c10;
  },
  set: undefined
});
Object.defineProperty(prototype, "isApplyingEdit", {
  get: function isApplyingEdit() {
    return null != this.applyingEdit;
  },
  set: undefined
});
Object.defineProperty(prototype, "hasValidEffectiveSettings", {
  get: function hasValidEffectiveSettings() {
    return hasValidEffectiveSettings();
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsStale", {
  get: function isEffectiveSettingsStale() {
    const tmp = hasValidEffectiveSettings();
    let tmp2 = !tmp;
    if (tmp) {
      const _Date = Date;
      tmp2 = Date.now() - c13 > 300000;
    }
    return tmp2;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsLoading", {
  get: function isEffectiveSettingsLoading() {
    return c15;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveSettingsScreenOpen", {
  get: function isEffectiveSettingsScreenOpen() {
    return closure_16 > 0;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectiveSettingsScreenCount", {
  get: function effectiveSettingsScreenCount() {
    return closure_16;
  },
  set: undefined
});
Object.defineProperty(prototype, "isEffectiveTreatment", {
  get: function isEffectiveTreatment() {
    return enabled;
  },
  set: undefined
});
Object.defineProperty(prototype, "effectiveAssignment", {
  get: function effectiveAssignment() {
    return assignment;
  },
  set: undefined
});
prototype["ownsEffectiveRequest"] = function ownsEffectiveRequest(sum) {
  return c5 === sum;
};
prototype["getEffectiveSetting"] = function getEffectiveSetting(arg0) {
  closure_0 = arg0;
  if (hasValidEffectiveSettings()) {
    const _Object = Object;
    const values = Object.values(effectiveSettings.preferences);
    return values.find((setting_id) => setting_id.setting_id === closure_0);
  }
};
prototype["getOptimisticSetting"] = function getOptimisticSetting(arg0) {
  let tmp;
  if (_undefined2 != null) {
    tmp = _undefined2.partialSettings.values[arg0];
  }
  if (tmp == null) {
    let tmp2;
    if (_undefined != null) {
      tmp2 = _undefined.partialSettings.values[arg0];
    }
    tmp = tmp2;
  }
  return tmp;
};
prototype["getOrCreatePendingEdit"] = function getOrCreatePendingEdit(effectiveDataVersion) {
  let tmp = c11;
  if (c11 == null) {
    const obj = { partialSettings: null, offlineEditDataVersion: null, versionSource: null };
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    obj.partialSettings = DeclarativeSettings.create();
    let num = effectiveDataVersion;
    if (effectiveDataVersion == null) {
      const versions = closure_9.versions;
      let dataVersion;
      if (versions != null) {
        dataVersion = versions.dataVersion;
      }
      num = dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    obj.offlineEditDataVersion = num;
    let str = "proto";
    if (null != effectiveDataVersion) {
      str = "effective";
    }
    obj.versionSource = str;
    tmp = obj;
  }
  return tmp;
};
Object.defineProperty(prototype, "effectiveDataVersion", {
  get: function effectiveDataVersion() {
    let tmp;
    if (hasValidEffectiveSettings()) {
      let prop;
      if (effectiveSettings != null) {
        prop = effectiveSettings.declarative_data_version;
      }
      tmp = prop;
    }
    return tmp;
  },
  set: undefined
});
Object.defineProperty(prototype, "dataVersion", {
  get: function dataVersion() {
    const versions = closure_9.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    return num;
  },
  set: undefined
});
prototype["getSetting"] = function getSetting(arg0) {
  let tmp;
  if (_undefined2 != null) {
    const partialSettings = _undefined2.partialSettings;
    if (partialSettings != null) {
      tmp = partialSettings.values[arg0];
    }
  }
  if (tmp == null) {
    let tmp2;
    if (_undefined != null) {
      const partialSettings2 = _undefined.partialSettings;
      if (partialSettings2 != null) {
        tmp2 = partialSettings2.values[arg0];
      }
    }
    tmp = tmp2;
  }
  if (tmp == null) {
    tmp = closure_9.values[arg0];
  }
  return tmp;
};
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
const items = [
  (offlineEditVersionSource) => {
    let tmp = offlineEditVersionSource;
    if (null != offlineEditVersionSource) {
      const obj = {};
      const merged = Object.assign(offlineEditVersionSource);
      let str = offlineEditVersionSource.offlineEditVersionSource;
      if (str == null) {
        str = "proto";
      }
      obj.offlineEditVersionSource = str;
      ({ effectiveSettings: obj.effectiveSettings, effectiveFetchedAt } = offlineEditVersionSource);
      if (effectiveFetchedAt == null) {
        effectiveFetchedAt = 0;
      }
      obj.effectiveFetchedAt = effectiveFetchedAt;
      ({ effectiveSourceFingerprint: obj.effectiveSourceFingerprint, effectiveSettingsAssignment: obj.effectiveSettingsAssignment } = offlineEditVersionSource);
      tmp = obj;
    }
    return tmp;
  }
];
NotifSettingsProtoStore.migrations = items;
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    notificationSettings = notificationSettings.notificationSettings;
    c5 = undefined;
    c15 = false;
    if (null != notificationSettings.declarativeSettings) {
      const declarativeSettings = notificationSettings.declarativeSettings;
    }
    let tmp = null != _undefined2;
    if (tmp) {
      const versions = declarativeSettings.versions;
      let num;
      if (versions != null) {
        num = versions.dataVersion;
      }
      if (num == null) {
        num = 0;
      }
      let tmp5 = num;
      if ("proto" !== tmp3.versionSource) {
        let bound;
        if (null != effectiveSettings) {
          if (effectiveSettings.account_id === AuthenticationStore.getId()) {
            const _Math = Math;
            bound = Math.max(num, effectiveSettings.declarative_data_version);
          }
        }
        tmp5 = bound;
      }
      tmp = _undefined2.offlineEditDataVersion !== tmp5;
      tmp3 = _undefined2;
    }
    if (tmp) {
      let timeout;
      if (_undefined2 != null) {
        timeout = _undefined2.timeout;
      }
      if (null != timeout) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_undefined2.timeout);
        _undefined2.timeout = undefined;
      }
      _undefined2 = undefined;
    }
    let tmp17 = null != _undefined;
    if (tmp17) {
      const versions2 = declarativeSettings.versions;
      let num2;
      if (versions2 != null) {
        num2 = versions2.dataVersion;
      }
      if (num2 == null) {
        num2 = 0;
      }
      let tmp21 = num2;
      if ("proto" !== tmp19.versionSource) {
        let bound1;
        if (null != effectiveSettings) {
          if (effectiveSettings.account_id === AuthenticationStore.getId()) {
            const _Math2 = Math;
            bound1 = Math.max(num2, effectiveSettings.declarative_data_version);
          }
        }
        tmp21 = bound1;
      }
      tmp17 = _undefined.offlineEditDataVersion !== tmp21;
      tmp19 = _undefined;
    }
    if (tmp17) {
      _undefined = undefined;
    }
    c12 = true;
  },
  CONNECTION_CLOSED: function handleConnectionClosed() {
    let timeout;
    if (_undefined2 != null) {
      timeout = _undefined2.timeout;
    }
    if (null == timeout) {
      return false;
    } else {
      let timeout1;
      if (_undefined2 != null) {
        timeout1 = _undefined2.timeout;
      }
      if (null != timeout1) {
        const _clearTimeout = clearTimeout;
        clearTimeout(_undefined2.timeout);
        _undefined2.timeout = undefined;
      }
    }
  },
  NOTIFICATION_SETTINGS_UPDATE: function handleNotificationSettingsUpdate(settings) {
    const declarativeSettings = settings.settings.declarativeSettings;
    if (null == declarativeSettings) {
      return false;
    } else {
      closure_9 = declarativeSettings;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(resetAnyPending) {
    ({ declarativeSettings, resetApplyingEdit, effectiveSettings, effectiveSettingsAssignment } = resetAnyPending);
    let tmp = null != declarativeSettings;
    if (!tmp) {
      tmp = null != resetApplyingEdit;
    }
    if (tmp) {
      if (resetApplyingEdit !== c10) {
        tmp = tmp3;
      } else {
        if (null == effectiveSettings) {
          if (null != declarativeSettings) {
            closure_9 = declarativeSettings;
          }
          c10 = undefined;
          let tmp5 = null != effectiveSettings && null != effectiveSettingsAssignment;
          if (tmp5) {
            tmp5 = effectiveSettingsAssignment === assignment;
          }
          if (tmp5) {
            acceptEffectiveSettings(effectiveSettings);
          }
          if (resetAnyPending.resetAnyPending) {
            let timeout;
            if (_undefined2 != null) {
              timeout = _undefined2.timeout;
            }
            if (null != timeout) {
              const _clearTimeout = clearTimeout;
              clearTimeout(_undefined2.timeout);
              _undefined2.timeout = undefined;
            }
            _undefined2 = undefined;
          }
        } else {
          const versions = closure_9.versions;
          let num;
          if (versions != null) {
            num = versions.dataVersion;
          }
          if (num == null) {
            num = 0;
          }
        }
        c10 = undefined;
      }
    }
    return tmp;
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT: function handleEdit(edit) {
    edit = edit.edit;
    if (true === edit.isApplying) {
      if (null != c10) {
        return false;
      } else {
        c10 = edit;
        c11 = undefined;
      }
    } else {
      c11 = edit;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function handleEditSkipped(edit) {
    if (edit.edit !== c10) {
      return false;
    } else {
      c10 = undefined;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function handleEditApplyFailed(edit) {
    edit = edit.edit;
    if (edit !== c10) {
      return false;
    } else {
      if (tmp) {
        let timeout;
        if (tmp16 != null) {
          timeout = tmp16.timeout;
        }
        if (null != timeout) {
          const _clearTimeout = clearTimeout;
          clearTimeout(_undefined2.timeout);
          _undefined2.timeout = undefined;
        }
        _undefined2 = undefined;
      } else {
        let tmp2 = edit;
        if (null != tmp16) {
          const obj = {};
          const merged = Object.assign(_undefined2);
          const DeclarativeSettings = notification_settings.DeclarativeSettings;
          const cloneResult = DeclarativeSettings.clone(edit.partialSettings);
          const DeclarativeSettings2 = notification_settings.DeclarativeSettings;
          DeclarativeSettings2.mergePartial(cloneResult, _undefined2.partialSettings);
          obj.partialSettings = cloneResult;
          tmp2 = obj;
        }
        _undefined2 = tmp2;
      }
      c10 = undefined;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    closure_9 = DeclarativeSettings.create();
    let timeout;
    if (_undefined2 != null) {
      timeout = _undefined2.timeout;
    }
    if (null != timeout) {
      const _clearTimeout = clearTimeout;
      clearTimeout(_undefined2.timeout);
      _undefined2.timeout = undefined;
    }
    _undefined2 = undefined;
    c10 = undefined;
    c12 = false;
    c2 = undefined;
    c13 = 0;
    c3 = undefined;
    c4 = undefined;
    c14 = false;
    c5 = undefined;
    c15 = false;
    closure_16 = 0;
    enabled = false;
    assignment = undefined;
  },
  USER_SETTINGS_PROTO_UPDATE() {
    if (null != c2) {
      if (c3 !== obj.legacySourceFingerprint(c2, UserSettingsProtoStore.settings)) {
        c14 = true;
        c5 = undefined;
        c15 = false;
      }
      obj = EffectiveNotifSettings;
    }
    return false;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_START(requestId) {
    requestId = requestId.requestId;
    c15 = true;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_SUCCESS(requestId) {
    if (requestId.requestId !== c5) {
      return false;
    } else {
      c15 = false;
      c5 = undefined;
      acceptEffectiveSettings(tmp);
    }
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_FETCH_FAILURE(requestId) {
    if (requestId.requestId !== c5) {
      return false;
    } else {
      c5 = undefined;
      c15 = false;
    }
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_OPEN() {
    closure_16 = closure_16 + 1;
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_SCREEN_CLOSE() {
    closure_16 = Math.max(0, closure_16 - 1);
  },
  EFFECTIVE_NOTIFICATION_SETTINGS_ARM_CHANGE(arg0) {
    ({ enabled, assignment } = arg0);
    let tmp = null != assignment;
    if (tmp) {
      tmp = assignment !== assignment;
    }
    if (!tmp) {
      let tmp3 = null == assignment;
      if (!tmp3) {
        tmp3 = c4 !== assignment;
      }
      tmp = tmp3;
    }
    if (!tmp) {
      let arm;
      if (effectiveSettings != null) {
        arm = effectiveSettings.arm;
      }
      let str = "control";
      if (enabled) {
        str = "treatment";
      }
      tmp = arm !== str;
    }
    if (tmp) {
      c14 = true;
      c5 = undefined;
      c15 = false;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
export function createPendingEdit(arg0) {
  const obj = { partialSettings: null, offlineEditDataVersion: null, versionSource: null };
  const DeclarativeSettings = notification_settings.DeclarativeSettings;
  obj.partialSettings = DeclarativeSettings.create();
  let num = arg0;
  if (arg0 == null) {
    const versions = closure_9.versions;
    let dataVersion;
    if (versions != null) {
      dataVersion = versions.dataVersion;
    }
    num = dataVersion;
  }
  if (num == null) {
    num = 0;
  }
  obj.offlineEditDataVersion = num;
  let str = "proto";
  if (null != arg0) {
    str = "effective";
  }
  obj.versionSource = str;
  return obj;
}