// === Module 14928: NotifSettingsProtoStore ===

// Module 14928 (NotifSettingsProtoStore)
import initializeDefault from "initialize" /* 504 */;
import DispatcherDefault from "Dispatcher" /* 584 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1248 */;
import notification_settings from "notification_settings" /* 14929 */;
import size from "module_2" /* 2 */;

let DeclarativeSettings = notification_settings.DeclarativeSettings;
let closure_2 = DeclarativeSettings.create();
let c3;
let c4;
let c5 = false;
const PersistedStore = initializeDefault.PersistedStore;
class NotifSettingsProtoStore extends PersistedStore {
}
const prototype = NotifSettingsProtoStore.prototype;
prototype["initialize"] = function initialize(proto) {
  if (null != proto) {
    proto = proto.proto;
    if (proto == null) {
      proto = null;
    }
    const b64ToProtoResult = user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, proto);
    if (null != b64ToProtoResult) {
      closure_2 = b64ToProtoResult;
    }
    let protoToSave = proto.protoToSave;
    if (protoToSave == null) {
      protoToSave = null;
    }
    const b64ToProtoResult1 = user_settings_UserSettingsUtils.b64ToProto(notification_settings.DeclarativeSettings, protoToSave);
    if (null != b64ToProtoResult1) {
      const obj = { partialSettings: b64ToProtoResult1, offlineEditDataVersion: null };
      let num = proto.offlineEditDataVersion;
      if (num == null) {
        num = 0;
      }
      obj.offlineEditDataVersion = num;
      c4 = obj;
    }
    const tmp5Result = user_settings_UserSettingsUtils;
  }
};
prototype["getState"] = function getState() {
  const obj = { proto: user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, closure_2) };
  let protoToB64Result = dependencyMap;
  let offlineEditDataVersion = _undefined;
  if (_undefined == null) {
    offlineEditDataVersion = _undefined2;
  }
  if (null == offlineEditDataVersion) {
    return obj;
  } else {
    if (null == _undefined) {
      protoToB64Result = user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, offlineEditDataVersion.partialSettings);
      obj.protoToSave = protoToB64Result;
      offlineEditDataVersion = offlineEditDataVersion.offlineEditDataVersion;
      obj.offlineEditDataVersion = offlineEditDataVersion;
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
    return c5;
  },
  set: undefined
});
Object.defineProperty(prototype, "pendingEdit", {
  get: function pendingEdit() {
    return c4;
  },
  set: undefined
});
Object.defineProperty(prototype, "applyingEdit", {
  get: function applyingEdit() {
    return c3;
  },
  set: undefined
});
Object.defineProperty(prototype, "isApplyingEdit", {
  get: function isApplyingEdit() {
    return null != this.applyingEdit;
  },
  set: undefined
});
prototype["getOrCreatePendingEdit"] = function getOrCreatePendingEdit() {
  let tmp = c4;
  if (c4 == null) {
    const obj = { partialSettings: null, offlineEditDataVersion: null };
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    obj.partialSettings = DeclarativeSettings.create();
    const versions = closure_2.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    obj.offlineEditDataVersion = num;
    tmp = obj;
  }
  return tmp;
};
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
    tmp = closure_2.values[arg0];
  }
  return tmp;
};
NotifSettingsProtoStore.displayName = "NotifSettingsProtoStore";
NotifSettingsProtoStore.persistKey = "NotifSettingsProtoStore-Cache";
const notifSettingsProtoStore = new NotifSettingsProtoStore(DispatcherDefault, {
  CONNECTION_OPEN: function handleConnectionOpen(notificationSettings) {
    notificationSettings = notificationSettings.notificationSettings;
    if (null != notificationSettings.declarativeSettings) {
      const declarativeSettings = notificationSettings.declarativeSettings;
    }
    const versions = declarativeSettings.versions;
    let num;
    if (versions != null) {
      num = versions.dataVersion;
    }
    if (num == null) {
      num = 0;
    }
    let tmp = null != _undefined2;
    if (tmp) {
      tmp = _undefined2.offlineEditDataVersion !== num;
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
    let tmp8 = null != _undefined;
    if (tmp8) {
      tmp8 = _undefined.offlineEditDataVersion !== num;
    }
    if (tmp8) {
      _undefined = undefined;
    }
    c5 = true;
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
      closure_2 = declarativeSettings;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE: function handleDeclarativeNotificationSettingsUpdate(resetAnyPending) {
    ({ declarativeSettings, resetApplyingEdit } = resetAnyPending);
    let tmp = null != declarativeSettings;
    if (!tmp) {
      tmp = null != resetApplyingEdit;
    }
    if (tmp) {
      if (resetApplyingEdit === c3) {
        if (null != declarativeSettings) {
          closure_2 = declarativeSettings;
        }
        c3 = undefined;
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
      }
      tmp = tmp3;
    }
    return tmp;
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT: function handleEdit(edit) {
    edit = edit.edit;
    if (true === edit.isApplying) {
      if (null != c3) {
        return false;
      } else {
        c3 = edit;
        c4 = undefined;
      }
    } else {
      c4 = edit;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED: function handleEditSkipped(edit) {
    if (edit.edit !== c3) {
      return false;
    } else {
      c3 = undefined;
    }
  },
  DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED: function handleEditApplyFailed(edit) {
    edit = edit.edit;
    if (edit !== c3) {
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
      c3 = undefined;
    }
  },
  LOGOUT: function handleLogout() {
    const DeclarativeSettings = notification_settings.DeclarativeSettings;
    closure_2 = DeclarativeSettings.create();
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
    c3 = undefined;
    c5 = false;
  }
});
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsProtoStore.tsx");

export default notifSettingsProtoStore;
export const createPendingEdit = function createPendingEdit() {
  const obj = { partialSettings: null, offlineEditDataVersion: null };
  const DeclarativeSettings = notification_settings.DeclarativeSettings;
  obj.partialSettings = DeclarativeSettings.create();
  const versions = closure_2.versions;
  let num;
  if (versions != null) {
    num = versions.dataVersion;
  }
  if (num == null) {
    num = 0;
  }
  obj.offlineEditDataVersion = num;
  return obj;
};