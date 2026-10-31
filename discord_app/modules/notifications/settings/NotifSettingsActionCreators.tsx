// === Module 17961: NotifSettingsActionCreators ===

// Module 17961 (NotifSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import user_settings_UserSettingsUtils from "user_settings/UserSettingsUtils" /* 1233 */;
import HTTPUtils from "HTTPUtils" /* 1282 */;
import notification_settings from "notification_settings" /* 15568 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15567 */;

require = fn;
function skipEdit(edit) {
  DispatcherDefault.dispatch({ type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_SKIPPED", edit });
}
function persistPendingEdit() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_10 = async function _persistPendingEdit() {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          let body2;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          closure_130_7 = undefined;
          let pendingEdit2;
          const pendingEdit = NotifSettingsProtoStore.pendingEdit;
          closure_130_0 = pendingEdit;
          if (null != pendingEdit) {
            const _clearTimeout = clearTimeout;
            clearTimeout(pendingEdit.timeout);
            pendingEdit.timeout = undefined;
            const obj6 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: pendingEdit, isApplying: true };
            DispatcherDefault.dispatch(obj6);
            if (NotifSettingsProtoStore.applyingEdit !== pendingEdit) {
              logger.log("Failed to take ownership of apply; current is", NotifSettingsProtoStore.applyingEdit);
              skipEdit(pendingEdit);
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const protoToB64Result = user_settings_UserSettingsUtils.protoToB64(notification_settings.DeclarativeSettings, pendingEdit.partialSettings);
              if (null != protoToB64Result) {
                if ("" !== protoToB64Result) {
                  closure_130_2 = 0;
                  c5 = 1;
                  const HTTP = HTTPUtils.HTTP;
                  const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: null, rejectWithError: true };
                  const obj7 = { declarative_settings_proto: protoToB64Result, required_data_version: pendingEdit.offlineEditDataVersion };
                  request.body = obj7;
                  c6 = 2;
                  c7 = 1;
                  const obj9 = { value: HTTP.patch(request), done: false };
                  return obj9;
                }
              }
              logger.log("Not persisting proto because there is nothing to change");
              skipEdit(pendingEdit);
              c7 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            c7 = 3;
          }
        }
      } else {
        if (1 === tmp7) {
          c5 = 0;
          closure_130_9 = closure_4;
          let tmp36;
          if (closure_130_9 instanceof closure_131_0(closure_131_2[7]).HTTPResponseError) {
            tmp36 = closure_130_9;
          }
          closure_130_6 = tmp36;
          let status;
          if (closure_130_6 != null) {
            status = closure_130_6.status;
          }
          closure_130_7 = 400 === status;
          const obj10 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: closure_130_0, shouldAbandonEdit: closure_130_7 };
          closure_131_1(closure_131_2[4]).dispatch(obj10);
          let status1;
          if (closure_130_6 != null) {
            status1 = closure_130_6.status;
          }
          if (429 === status1) {
            closure_131_7.log("Rate limited, scheduling retry");
            const retryAfter = closure_130_6.retryAfter;
            c1 = retryAfter;
            if (retryAfter == null) {
              c1 = 60;
            }
            closure_130_2 = c1 * closure_131_1(closure_131_2[8]).Millis.SECOND;
          }
          const obj5 = closure_131_1(closure_131_2[4]);
        } else if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else {
          body2 = value.body;
          closure_130_4 = body2.declarative_settings_out_of_date;
          if (closure_130_4) {
            closure_131_7.log("Proto was out of date, discarding changes");
          }
          closure_130_5 = closure_131_0(closure_131_2[5]).b64ToProto(closure_131_0(closure_131_2[6]).DeclarativeSettings, body2.declarative_settings_proto);
          let dataVersion;
          if (closure_130_5 != null) {
            const versions = closure_130_5.versions;
            if (versions != null) {
              dataVersion = versions.dataVersion;
            }
          }
          closure_130_1 = dataVersion;
          const obj = closure_131_0(closure_131_2[5]);
          let declarativeSettings = closure_130_5;
          if (closure_130_5 == null) {
            declarativeSettings = undefined;
          }
          const obj12 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: closure_130_0, resetAnyPending: closure_130_4 };
          closure_131_1(closure_131_2[4]).dispatch(obj12);
          c5 = 0;
          const obj2 = closure_131_1(closure_131_2[4]);
        }
        pendingEdit2 = closure_131_4.pendingEdit;
        if (null != pendingEdit2) {
          if (null != closure_130_1) {
            pendingEdit2.offlineEditDataVersion = closure_130_1;
          }
          const obj13 = { minRescheduleDelayMillis: closure_130_2 };
          closure_131_12(pendingEdit2, obj13);
        }
      }
      if (closure_130_7) {
        const body = closure_130_9.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === closure_131_5.INVALID_USER_SETTINGS_BYTES) {
          closure_131_7.log("Reloading due to invalid data");
          (function reload() {
            const self = this;
            const apply = closure_1_11.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })();
          let tmp77 = closure_130_9;
        }
        throw tmp77;
      }
      closure_131_7.log("Unknown notif settings error %s", closure_130_9);
      tmp77 = closure_130_9;
    } catch (tmp100) {
      closure_4 = tmp100;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp100;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_11 = async function _reload() {
  if (c6 === 2) {
    c6 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          closure_129_2 = undefined;
          orCreatePendingEdit = orCreatePendingEdit.getOrCreatePendingEdit();
          closure_129_0 = orCreatePendingEdit;
          const obj4 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit, isApplying: true };
          DispatcherDefault.dispatch(obj4);
          c4 = 1;
          const HTTP = HTTPUtils.HTTP;
          const obj5 = { url: constants.ACCOUNT_NOTIFICATION_DECLARATIVE_SETTINGS, rejectWithError: true };
          c5 = 2;
          c6 = 1;
          const obj7 = { value: HTTP.get(obj5), done: false };
          return obj7;
        }
      } else if (1 === tmp7) {
        c4 = 0;
        closure_129_3 = closure_3;
        const obj8 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: closure_129_0, shouldAbandonEdit: true };
        closure_130_1(closure_130_2[4]).dispatch(obj8);
        throw closure_129_3;
      } else if (2 === tmp7) {
        if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c6 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          closure_129_1 = value.body.declarative_settings_proto;
          closure_129_2 = closure_130_0(closure_130_2[5]).b64ToProto(closure_130_0(closure_130_2[6]).DeclarativeSettings, closure_129_1);
          const obj11 = closure_130_0(closure_130_2[5]);
          let declarativeSettings = closure_129_2;
          if (closure_129_2 == null) {
            const DeclarativeSettings = closure_130_0(closure_130_2[6]).DeclarativeSettings;
            declarativeSettings = DeclarativeSettings.create();
          }
          const obj10 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: closure_129_0, resetAnyPending: true };
          c5 = 3;
          c6 = 1;
          const obj14 = { value: closure_130_1(closure_130_2[4]).dispatch(obj10), done: false };
          return obj14;
        }
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj15 = { value, done: true };
        return obj15;
      } else {
        c4 = 0;
        c6 = 3;
        const obj = { value: closure_129_2, done: true };
        return obj;
      }
    } catch (tmp24) {
      closure_3 = tmp24;
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp24;
      } else {
        c5 = tmp;
      }
    }
  }
};
function scheduleEditIfNeeded(timeout) {
  let isApplyingEdit = null != timeout.timeout;
  if (!isApplyingEdit) {
    isApplyingEdit = NotifSettingsProtoStore.isApplyingEdit;
  }
  if (!isApplyingEdit) {
    let num = minRescheduleDelayMillis.minRescheduleDelayMillis;
    if (num == null) {
      num = 10;
    }
    timeout.timeout = setTimeout(persistPendingEdit, num);
  }
}
function updateNotifSettingValue(CALLS, arg1) {
  ({ createNew, update } = arg1);
  const orCreatePendingEdit = NotifSettingsProtoStore.getOrCreatePendingEdit();
  const setting = NotifSettingsProtoStore.getSetting(CALLS);
  if (null != setting) {
    const DeclarativeNotifSetting2 = notification_settings.DeclarativeNotifSetting;
    let cloneResult = DeclarativeNotifSetting2.clone(setting);
  } else {
    cloneResult = undefined;
    if (createNew != null) {
      cloneResult = createNew();
    }
    if (cloneResult == null) {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      cloneResult = DeclarativeNotifSetting.create();
    }
  }
  if (update(cloneResult)) {
    orCreatePendingEdit.partialSettings.values[CALLS] = cloneResult;
    if (!tmp9) {
      let num = {}.minRescheduleDelayMillis;
      if (num == null) {
        num = 10;
      }
      orCreatePendingEdit.timeout = setTimeout(persistPendingEdit, num);
    }
    const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit };
    DispatcherDefault.dispatch(obj2);
    tmp9 = null != orCreatePendingEdit.timeout || NotifSettingsProtoStore.isApplyingEdit;
  }
}
const Constants = fn(1072);
({ AbortCodes: hasOwnProperty, Endpoints: metroRequire } = Constants);
let closure_7 = new LoggerDefault("NotifSettingsActionCreators");
const size = fn(2);
const result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

export function schedulePersistPendingEditsIfNeeded() {
  const pendingEdit = NotifSettingsProtoStore.pendingEdit;
  if (null != pendingEdit) {
    if (!tmp2) {
      let num = {}.minRescheduleDelayMillis;
      if (num == null) {
        num = 10;
      }
      pendingEdit.timeout = setTimeout(persistPendingEdit, num);
    }
    tmp2 = null != pendingEdit.timeout || tmp.isApplyingEdit;
  }
}
export function updateNotifSettingToggleValue(CALLS, toggle) {
  updateNotifSettingValue(CALLS, {
    createNew() {
      const DeclarativeNotifSetting = toggle(dependencyMap[6]).DeclarativeNotifSetting;
      const obj = DeclarativeNotifSetting.create();
      obj.toggle = true;
      return obj;
    },
    update(toggle) {
      toggle.toggle = toggle;
      return toggle.toggle !== toggle;
    }
  });
}
export function updateNotifSettingRadioValue(CALLS, radio) {
  updateNotifSettingValue(CALLS, {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    }
  });
}