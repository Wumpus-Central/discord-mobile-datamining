// === Module 16852: VibegrationsPlatformUtils ===

// Module 16852 (VibegrationsPlatformUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9483 */;
import ApplicationUtils from "ApplicationUtils" /* 9821 */;
import PushNotificationDefault from "PushNotification" /* 9932 */;
import vibegrationsPreviewCall from "vibegrationsPreviewCall" /* 16853 */;
import vibegrationsPreviewControlLease from "vibegrationsPreviewControlLease" /* 16854 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FramesStore from "FramesStore" /* 9748 */;
import AppStateStore from "AppStateStore" /* 1896 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 16851 */;

require = fn;
function previewFrameHeld(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const frame = FramesStore.getFrame(closure_1_10(prop, React7));
    let tmp8 = null;
    if (null != frame) {
      const obj = { applicationId: prop, launched: React6(frame) };
      tmp8 = obj;
    }
    tmp3 = tmp8;
  }
  return null != tmp3;
}
function waitForLaunchedPreviewFrame(arg0, PREVIEW_FRAME_WAIT_MS) {
  closure_0 = arg0;
  closure_1 = PREVIEW_FRAME_WAIT_MS;
  let project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    let frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let tmp8 = null;
    if (null != frame) {
      let obj2 = { applicationId: prop, launched: closure_8(frame) };
      tmp8 = obj2;
    }
    tmp3 = tmp8;
  }
  let launched;
  if (tmp3 != null) {
    launched = tmp3.launched;
  }
  let tmp11 = null;
  if (true === launched) {
    let obj3 = { applicationId: tmp3.applicationId };
    tmp11 = obj3;
  }
  if (null != tmp11) {
    let resolved = Promise.resolve(tmp11);
  } else {
    let project1 = VibegrationsProjectStore.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp13 = null;
    if (null != prop1) {
      let frame1 = FramesStore.getFrame(closure_10(prop1, closure_9));
      let tmp18 = null;
      if (null != frame1) {
        let obj4 = { applicationId: prop1, launched: closure_8(frame1) };
        tmp18 = obj4;
      }
      tmp13 = tmp18;
    }
    if (null != tmp13) {
      resolved = new Promise((arg0) => {
        closure_0 = arg0;
        closure_1 = Date.now() + closure_1;
        const interval = setInterval(() => {
          const project = VibegrationsProjectStore.getProject(closure_0);
          let prop;
          if (project != null) {
            prop = project.preview_application_id;
          }
          let tmp4 = null;
          if (null != prop) {
            const frame = FramesStore.getFrame(closure_3_10(prop, React7));
            let tmp9 = null;
            if (null != frame) {
              const obj2 = { applicationId: prop, launched: React6(frame) };
              tmp9 = obj2;
            }
            tmp4 = tmp9;
          }
          let launched;
          if (tmp4 != null) {
            launched = tmp4.launched;
          }
          let tmp12 = null;
          if (true === launched) {
            const obj3 = { applicationId: tmp4.applicationId };
            tmp12 = obj3;
          }
          let tmp13 = null != tmp12;
          if (!tmp13) {
            const _Date = Date;
            tmp13 = Date.now() >= closure_1;
          }
          if (!tmp13) {
            const project1 = VibegrationsProjectStore.getProject(closure_0);
            let prop1;
            if (project1 != null) {
              prop1 = project1.preview_application_id;
            }
            let tmp18 = null;
            if (null != prop1) {
              const frame1 = FramesStore.getFrame(closure_3_10(prop1, React7));
              let tmp23 = null;
              if (null != frame1) {
                const obj4 = { applicationId: prop1, launched: React6(frame1) };
                tmp23 = obj4;
              }
              tmp18 = tmp23;
            }
            tmp13 = null == tmp18;
          }
          if (tmp13) {
            const _clearInterval = clearInterval;
            clearInterval(closure_2);
            closure_0(tmp12);
          }
        }, 100);
      });
    } else {
      resolved = Promise.resolve(null);
    }
  }
  return resolved;
}
function callNativePreviewFrame(arg0, arg1, id) {
  _require = arg0;
  const previewCallTypesResult = require("vibegrationsPreviewCall").previewCallTypes(arg0);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(arg1);
  let obj = require("vibegrationsPreviewCall");
  const webViewProxy = require("WebView").getWebViewProxy(require("FramesNativeManager").FRAME_WEB_VIEW_KEY);
  const timestamp = Date.now();
  const obj3 = require("WebView");
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    id = arg1;
    function cleanup() {
      clearTimeout(closure_3);
      if (null != c2) {
        const _clearInterval = clearInterval;
        clearInterval(c2);
      }
      closure_4.remove();
    }
    const timeout = setTimeout(() => {
      clearTimeout(closure_3);
      if (null != c2) {
        const _clearInterval = clearInterval;
        clearInterval(c2);
      }
      closure_4.remove();
      const previewFrameCallTimeout = new vibegrationsPreviewCall.PreviewFrameCallTimeout(closure_0, closure_1.timeoutMs);
      closure_1(previewFrameCallTimeout);
    }, id.timeoutMs);
    closure_4 = closure_4.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        if (obj.isResultEnvelope(parsed, previewCallTypesResult.ack, closure_1.id)) {
          if (null != c2) {
            const _clearInterval = clearInterval;
            clearInterval(c2);
          }
          c2 = null;
        } else {
          if (tmp5Result.isResultEnvelope(parsed, previewCallTypesResult.result, closure_1.id)) {
            cleanup();
            closure_0(parsed);
          }
          tmp5Result = vibegrationsPreviewCall;
        }
        obj = vibegrationsPreviewCall;
      } catch (err) {
        return tmp;
      }
    });
    closure_4.injectJavaScript(id(obj2[14])(timeout)).catch(() => {

    });
    const interval = setInterval(function post() {
      closure_4.injectJavaScript(closure_1(obj2[14])(closure_3)).catch(() => {

      });
    }, id.retryMs);
  });
}
let closure_16 = async function _relayPreviewCapture(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp2;
          closure_4 = tmp4;
          closure_132_0 = closure_1;
          closure_132_1 = undefined;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          let probe = closure_2;
          if (closure_2 == null) {
            probe = {};
          }
          ({ spec: closure_132_1, onAccepted: closure_132_2 } = probe);
          if (true === probe.probe) {
            let str = "unavailable";
            if (previewFrameHeld(closure_0)) {
              str = "accepted";
            }
            const obj4 = { status: str };
            c9 = 3;
            const obj5 = { value: obj4, done: true };
            return obj5;
          } else {
            c8 = 1;
            c9 = 1;
            const obj6 = { value: waitForLaunchedPreviewFrame(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
            return obj6;
          }
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else if (null == value) {
            c9 = 3;
            const obj8 = { value: { status: "unavailable" }, done: true };
            return obj8;
          } else if (null == closure_132_2) {
            let obj9 = { uploadToken: "r" };
          } else {
            c8 = 2;
            c9 = 1;
            const obj10 = { value: closure_132_2(), done: false };
            return obj10;
          }
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else {
            obj9 = value;
            if (arg0 === 2) {
              c9 = 3;
              const obj11 = { value, done: true };
              return obj11;
            }
          }
        } else if (3 === tmp7) {
          c7 = 0;
          c9 = 3;
        } else if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          c9 = 3;
          const obj14 = { value, done: true };
          return obj14;
        } else {
          closure_132_4 = value;
          if ("accepted" !== closure_132_4.phase) {
            const obj = { status: "failed", code: closure_132_4.code, message: closure_132_4.error };
          }
          c7 = 0;
          c9 = 3;
        }
        closure_132_3 = obj9;
        if (null == closure_132_3) {
          c9 = 3;
          const obj16 = { value: { status: "unavailable" }, done: true };
          return obj16;
        } else {
          c7 = 1;
          if (null == closure_132_1) {
            let obj17 = {};
          } else {
            obj17 = { spec: closure_132_1 };
          }
          let obj18 = {};
          const merged = Object.assign(obj17);
          if (null == closure_132_3.uploadToken) {
            let obj19 = {};
          } else {
            obj19 = { uploadToken: closure_132_3.uploadToken };
          }
          const merged1 = Object.assign(obj19);
          const obj20 = { id: closure_132_0, timeoutMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_ACCEPT_TIMEOUT_MS, retryMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_RETRY_MS };
          obj18 = closure_133_15("capture-now", obj18, obj20);
          c8 = 4;
          c9 = 1;
        }
      }
    } catch (tmp46) {
      closure_6 = tmp46;
      if (tmp3 === c7) {
        c9 = tmp;
        throw tmp46;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_17 = async function _relayPreviewControl(arg0) {
  if (c9 === 2) {
    c9 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
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
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp4;
          closure_4 = tmp6;
          closure_132_0 = closure_1;
          closure_132_1 = closure_2;
          closure_132_2 = closure_3;
          closure_132_3 = undefined;
          closure_132_4 = undefined;
          if (previewFrameHeld(closure_0)) {
            closure_132_3 = require("vibegrationsPreviewControlLease").acquireVibegrationsControlLease(closure_0);
            c7 = 2;
            c8 = 3;
            c9 = 1;
            const obj4 = { value: waitForLaunchedPreviewFrame(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
            return obj4;
          } else {
            c9 = 3;
            const obj5 = { value: { status: "unavailable" }, done: true };
            return obj5;
          }
        }
      } else if (1 === tmp9) {
        c7 = 0;
        closure_132_3();
        throw closure_6;
      } else if (2 === tmp9) {
        c7 = 1;
        c7 = 0;
        closure_132_3();
        c9 = 3;
      } else if (3 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          closure_132_3();
          c9 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else if (null == value) {
          c7 = 0;
          closure_132_3();
          c9 = 3;
          const obj9 = { value: { status: "unavailable" }, done: true };
          return obj9;
        } else {
          let tmp29;
          if (closure_132_2 != null) {
            tmp29 = closure_132_2();
          }
          c8 = 4;
          c9 = 1;
          const obj10 = { value: tmp29, done: false };
          return obj10;
        }
      } else if (4 === tmp9) {
        if (arg0 === 1) {
          c9 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 0;
          closure_132_3();
          c9 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else if (false === value) {
          c7 = 0;
          closure_132_3();
          c9 = 3;
          const obj12 = { value: { status: "unavailable" }, done: true };
          return obj12;
        } else if ("desktop" === closure_132_1.viewport) {
          c7 = 0;
          closure_132_3();
          c9 = 3;
          const obj13 = { value: { status: "failed", message: "the phone preview has no desktop lens" }, done: true };
          return obj13;
        } else {
          const obj15 = { id: closure_132_0, timeoutMs: closure_133_0(closure_133_3[11]).controlAnswerTimeoutMs(closure_132_1), retryMs: closure_133_0(closure_133_3[11]).CONTROL_RETRY_MS };
          c8 = 5;
          c9 = 1;
          const obj16 = { value: closure_133_15("control", closure_132_1, obj15), done: false };
          return obj16;
        }
      } else if (arg0 === 1) {
        c9 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 0;
        closure_132_3();
        c9 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_132_4 = value;
        if (typeof closure_132_4.ok !== "boolean") {
          c7 = 0;
          closure_132_3();
          c9 = 3;
        } else {
          const _Array = Array;
        }
        const obj18 = { status: "completed", response: closure_132_4 };
      }
    } catch (tmp54) {
      closure_6 = tmp54;
      if (tmp5 === c7) {
        c9 = tmp3;
        throw tmp54;
      } else if (tmp2 === tmp56) {
        c8 = tmp2;
      } else {
        c8 = tmp;
      }
    }
  }
};
const FramesConstants = fn(9749);
({ isLaunched: closure_8, MAIN_SURFACE: closure_9, makeFrameId: c10 } = FramesConstants);
const LocalNotificationTypes = fn(13925).LocalNotificationTypes;
const items = [fn(8571).OAuth2Scopes.BOT, fn(8571).OAuth2Scopes.APPLICATIONS_COMMANDS];
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

export default {
  openVibegrationsAppInstallModal(application) {
    application = application.application;
    let oauth2InstallParams;
    ({ applicationId, guildId, onClose } = application);
    if (application != null) {
      const integrationTypesConfig = application.integrationTypesConfig;
      if (integrationTypesConfig != null) {
        const tmp4 = integrationTypesConfig[ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL];
        if (tmp4 != null) {
          oauth2InstallParams = tmp4.oauth2InstallParams;
        }
      }
    }
    if (oauth2InstallParams == null) {
      let installParams;
      if (application != null) {
        installParams = application.installParams;
      }
      oauth2InstallParams = installParams;
    }
    const obj2 = { clientId: applicationId, guildId, disableGuildSelect: true, integrationType: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL, scopes: null, permissions: null, callback: null, dismissOAuthModal: null };
    let scopes;
    if (oauth2InstallParams != null) {
      scopes = oauth2InstallParams.scopes;
    }
    if (scopes == null) {
      scopes = items;
    }
    obj2.scopes = scopes;
    let permissions;
    if (oauth2InstallParams != null) {
      permissions = oauth2InstallParams.permissions;
    }
    let deserializeResult;
    if (null != permissions) {
      const deserializer = BigFlagUtilsAll;
      deserializeResult = deserializer.deserialize(oauth2InstallParams.permissions);
    }
    obj2.permissions = deserializeResult;
    obj2.callback = function callback() {
      return true;
    };
    obj2.dismissOAuthModal = onClose;
    ApplicationUtils.openOAuth2Modal(obj2);
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === AppStateStore.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    const obj2 = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
    if (null != guildId) {
      const obj4 = { guildId };
      let obj5 = obj4;
    } else {
      obj5 = {};
    }
    const merged = Object.assign(obj5);
    obj2.userInfo = { type: LocalNotificationTypes.VIBEGRATIONS, projectId, channel_id: projectId };
    const result = PushNotificationDefault.presentLocalNotification(obj2);
  },
  relayPreviewCapture() {
    const self = this;
    const apply = closure_16.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  relayPreviewControl() {
    const self = this;
    const apply = closure_17.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  releasePreviewControl(projectId) {
    const result = vibegrationsPreviewControlLease.releaseVibegrationsControlLeases(projectId);
  },
  beginPreviewOperation(projectId) {
    const result = vibegrationsPreviewControlLease.beginVibegrationsControlOperation(projectId);
  },
  endPreviewOperation(projectId) {
    const result = vibegrationsPreviewControlLease.endVibegrationsControlOperation(projectId);
  }
};