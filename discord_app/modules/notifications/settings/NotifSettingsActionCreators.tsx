// === Module 18295: NotifSettingsActionCreators ===

// Module 18295 (NotifSettingsActionCreators)
import LoggerDefault from "Logger" /* 3 */;
import DispatcherDefault from "Dispatcher" /* 572 */;
import settings_NotifSettingsUtils from "settings/NotifSettingsUtils" /* 15849 */;
import notification_settings from "notification_settings" /* 15851 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import NotifSettingsProtoStore from "NotifSettingsProtoStore" /* 15850 */;

const require = globalThis.__r;

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
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c9 = 2;
      if (0 === c8) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_5 = tmp3;
          closure_4 = tmp5;
          closure_132_0 = undefined;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          let effectiveAssignment;
          let body2;
          closure_132_5 = undefined;
          closure_132_6 = undefined;
          closure_132_7 = undefined;
          closure_132_8 = undefined;
          let pendingEdit2;
          const pendingEdit = NotifSettingsProtoStore.pendingEdit;
          closure_132_0 = pendingEdit;
          if (null != pendingEdit) {
            const _clearTimeout = clearTimeout;
            clearTimeout(pendingEdit.timeout);
            pendingEdit.timeout = undefined;
            const obj7 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: pendingEdit, isApplying: true };
            DispatcherDefault.dispatch(obj7);
            if (NotifSettingsProtoStore.applyingEdit !== pendingEdit) {
              logger.log("Unable to take ownership of notification settings apply");
              skipEdit(pendingEdit);
              c9 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            } else {
              const protoToB64Result = require("user_settings/UserSettingsUtils").protoToB64(require("notification_settings").DeclarativeSettings, pendingEdit.partialSettings);
              if (null != protoToB64Result) {
                if ("" !== protoToB64Result) {
                  closure_132_2 = 0;
                  effectiveAssignment = NotifSettingsProtoStore.effectiveAssignment;
                  c7 = 1;
                  const HTTP = require("HTTPUtils").HTTP;
                  const request = { url: constants.ACCOUNT_NOTIFICATION_SETTINGS, body: null, rejectWithError: true };
                  const obj8 = { declarative_settings_proto: protoToB64Result, required_data_version: pendingEdit.offlineEditDataVersion };
                  request.body = obj8;
                  c8 = 2;
                  c9 = 1;
                  const obj10 = { value: HTTP.patch(request), done: false };
                  return obj10;
                }
              }
              logger.log("Not persisting proto because there is nothing to change");
              skipEdit(pendingEdit);
              c9 = 3;
              return { value: "HermesInternal", done: "HermesInternal" };
            }
          } else {
            c9 = 3;
          }
        }
      } else {
        if (1 === tmp8) {
          c7 = 0;
          closure_132_10 = closure_6;
          if (closure_133_4.applyingEdit !== closure_132_0) {
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            let tmp49;
            if (closure_132_10 instanceof closure_133_0(closure_133_2[7]).HTTPResponseError) {
              tmp49 = closure_132_10;
            }
            closure_132_7 = tmp49;
            let status;
            if (closure_132_7 != null) {
              status = closure_132_7.status;
            }
            closure_132_8 = 400 === status;
            const obj11 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT_APPLY_FAILED", edit: closure_132_0, shouldAbandonEdit: closure_132_8 };
            closure_133_1(closure_133_2[4]).dispatch(obj11);
            let status1;
            if (closure_132_7 != null) {
              status1 = closure_132_7.status;
            }
            if (429 === status1) {
              closure_133_7.log("Rate limited, scheduling retry");
              const retryAfter = closure_132_7.retryAfter;
              c3 = retryAfter;
              if (retryAfter == null) {
                c3 = 60;
              }
              closure_132_2 = c3 * closure_133_1(closure_133_2[9]).Millis.SECOND;
            }
            const obj6 = closure_133_1(closure_133_2[4]);
          }
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          body2 = value.body;
          if (closure_133_4.applyingEdit !== closure_132_0) {
            c7 = 0;
            c9 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          } else {
            closure_132_5 = body2.declarative_settings_out_of_date;
            if (closure_132_5) {
              closure_133_7.log("Proto was out of date, discarding changes");
            }
            closure_132_6 = closure_133_0(closure_133_2[5]).b64ToProto(closure_133_0(closure_133_2[6]).DeclarativeSettings, body2.declarative_settings_proto);
            let dataVersion;
            if (closure_132_6 != null) {
              const versions = closure_132_6.versions;
              if (versions != null) {
                dataVersion = versions.dataVersion;
              }
            }
            closure_132_1 = dataVersion;
            const obj = closure_133_0(closure_133_2[5]);
            let declarativeSettings = closure_132_6;
            if (closure_132_6 == null) {
              declarativeSettings = undefined;
            }
            const obj13 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_UPDATE", declarativeSettings, resetApplyingEdit: closure_132_0, resetAnyPending: closure_132_5, effectiveSettings: null, effectiveSettingsAssignment: null };
            const obj2 = closure_133_1(closure_133_2[4]);
            obj13.effectiveSettings = closure_133_0(closure_133_2[8]).parseEffectiveNotifSettings(body2.effective_settings);
            obj13.effectiveSettingsAssignment = effectiveAssignment;
            obj2.dispatch(obj13);
            c1 = closure_132_1;
            if (closure_132_1 == null) {
              c1 = 0;
            }
            const effectiveDataVersion = closure_133_4.effectiveDataVersion;
            c2 = effectiveDataVersion;
            if (effectiveDataVersion == null) {
              c2 = 0;
            }
            closure_132_1 = Math.max(c1, closure_133_4.dataVersion, c2);
            c7 = 0;
            const obj4 = closure_133_0(closure_133_2[8]);
          }
        }
        pendingEdit2 = closure_133_4.pendingEdit;
        if (null != pendingEdit2) {
          if (null != closure_132_1) {
            pendingEdit2.offlineEditDataVersion = closure_132_1;
            if (closure_132_1 > closure_133_4.dataVersion) {
              pendingEdit2.versionSource = "effective";
            }
          }
          const obj15 = { minRescheduleDelayMillis: closure_132_2 };
          closure_133_12(pendingEdit2, obj15);
        }
      }
      if (closure_132_8) {
        const body = closure_132_10.body;
        let code;
        if (body != null) {
          code = body.code;
        }
        if (code === closure_133_5.INVALID_USER_SETTINGS_BYTES) {
          closure_133_7.log("Reloading due to invalid data");
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
          let tmp93 = closure_132_10;
        }
        throw tmp93;
      }
      closure_133_7.log("Unable to save notification settings");
      tmp93 = closure_132_10;
    } catch (tmp112) {
      closure_6 = tmp112;
      if (tmp4 === c7) {
        c9 = tmp2;
        throw tmp112;
      } else {
        c8 = tmp;
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
          const HTTP = require("HTTPUtils").HTTP;
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
function updateNotifSettingValue(updatedSettingId, createNew, effectiveDataVersion) {
  createNew = createNew.createNew;
  const orCreatePendingEdit = NotifSettingsProtoStore.getOrCreatePendingEdit(effectiveDataVersion);
  const setting = NotifSettingsProtoStore.getSetting(updatedSettingId);
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
  if (createNew.update(cloneResult)) {
    orCreatePendingEdit.partialSettings.values[updatedSettingId] = cloneResult;
    if (!tmp9) {
      let num = {}.minRescheduleDelayMillis;
      if (num == null) {
        num = 10;
      }
      orCreatePendingEdit.timeout = setTimeout(persistPendingEdit, num);
    }
    const obj2 = { type: "DECLARATIVE_NOTIFICATION_SETTINGS_EDIT", edit: orCreatePendingEdit, updatedSettingId };
    DispatcherDefault.dispatch(obj2);
    tmp9 = null != orCreatePendingEdit.timeout || NotifSettingsProtoStore.isApplyingEdit;
  }
}
const Constants = fn(1072);
({ AbortCodes: hasOwnProperty, Endpoints: closure_6 } = Constants);
let closure_7 = new LoggerDefault("NotifSettingsActionCreators");
const size = fn(2);
let result = size.fileFinishedImporting("modules/notifications/settings/NotifSettingsActionCreators.tsx");

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
  _require = CALLS;
  const result = require("DeclarativeNotificationSettingsRedesignExperiment").isDeclarativeNotificationSettingsRedesignEnabled("updateNotifSettingToggleValue");
  dependencyMap = result;
  closure_3 = null != NotifSettingsProtoStore.getSetting(CALLS);
  let effectiveDataVersion;
  if (result) {
    effectiveDataVersion = NotifSettingsProtoStore.effectiveDataVersion;
  }
  updateNotifSettingValue(CALLS, {
    createNew() {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      const obj2 = DeclarativeNotifSetting.create();
      let flag = settings_NotifSettingsUtils.getNotifSettingToggleValue(closure_0, result);
      if (flag == null) {
        flag = false;
      }
      obj2.toggle = flag;
      return obj2;
    },
    update(toggle) {
      toggle.toggle = toggle;
      let tmp2 = result;
      if (result) {
        tmp2 = !closure_3;
      }
      if (!tmp2) {
        tmp2 = toggle.toggle !== toggle;
      }
      return tmp2;
    }
  }, effectiveDataVersion);
  const obj = require("DeclarativeNotificationSettingsRedesignExperiment");
  let obj2 = {
    createNew() {
      const DeclarativeNotifSetting = notification_settings.DeclarativeNotifSetting;
      const obj2 = DeclarativeNotifSetting.create();
      let flag = settings_NotifSettingsUtils.getNotifSettingToggleValue(closure_0, result);
      if (flag == null) {
        flag = false;
      }
      obj2.toggle = flag;
      return obj2;
    },
    update(toggle) {
      toggle.toggle = toggle;
      let tmp2 = result;
      if (result) {
        tmp2 = !closure_3;
      }
      if (!tmp2) {
        tmp2 = toggle.toggle !== toggle;
      }
      return tmp2;
    }
  };
}
export function updateNotifSettingRadioValue(updatedSettingId, radio) {
  updateNotifSettingValue(updatedSettingId, {
    update(radio) {
      radio.radio = radio;
      return radio.radio !== radio;
    }
  });
}