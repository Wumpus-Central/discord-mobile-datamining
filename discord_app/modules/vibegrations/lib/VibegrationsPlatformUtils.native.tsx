// === Module 9392: VibegrationsPlatformUtils ===

// Module 9392 (VibegrationsPlatformUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1086 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 9399 */;
import ApplicationUtils from "ApplicationUtils" /* 9400 */;
import PushNotificationDefault from "PushNotification" /* 9640 */;
import vibegrationsPreviewCall from "vibegrationsPreviewCall" /* 9644 */;
import vibegrationsPreviewControlLease from "vibegrationsPreviewControlLease" /* 13278 */;
import vibegrationsPreviewNativeSurfaces from "vibegrationsPreviewNativeSurfaces" /* 13279 */;
import restartVibegrationsAppFramesDefault from "restartVibegrationsAppFrames" /* 13282 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import FramesStore from "FramesStore" /* 9393 */;
import AppStateStore from "AppStateStore" /* 1979 */;
import VibegrationsProjectStore from "VibegrationsProjectStore" /* 9389 */;

require = fn;
function previewFrameIdentity(arg0) {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (null == prop) {
    return null;
  } else {
    const frame = FramesStore.getFrame(closure_1_10(prop, React7));
    let iframeId = null;
    if (React6(frame)) {
      iframeId = frame.data.iframeId;
    }
    return iframeId;
  }
}
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
function launchedPreviewFrame(arg0) {
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
  let launched;
  if (tmp3 != null) {
    launched = tmp3.launched;
  }
  let tmp11 = null;
  if (true === launched) {
    const obj2 = { applicationId: tmp3.applicationId };
    tmp11 = obj2;
  }
  return tmp11;
}
function waitForPreviewFrame(value, arg1, fn) {
  closure_0 = value;
  closure_1 = arg1;
  closure_2 = fn;
  const tmp = fn(value);
  if (null != tmp) {
    let resolved = Promise.resolve(tmp);
  } else {
    let project = VibegrationsProjectStore.getProject(value);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    let tmp3 = null;
    if (null != prop) {
      let frame = FramesStore.getFrame(closure_10(prop, closure_9));
      let tmp8 = null;
      if (null != frame) {
        let obj = { applicationId: prop, launched: closure_8(frame) };
        tmp8 = obj;
      }
      tmp3 = tmp8;
    }
    if (null != tmp3) {
      resolved = new Promise((arg0) => {
        closure_0 = arg0;
        closure_1 = Date.now() + closure_1;
        const interval = setInterval(() => {
          const tmp2 = closure_2(closure_0);
          let tmp3 = null != tmp2;
          if (!tmp3) {
            const _Date = Date;
            tmp3 = Date.now() >= closure_1;
          }
          if (!tmp3) {
            const project = VibegrationsProjectStore.getProject(closure_0);
            let prop;
            if (project != null) {
              prop = project.preview_application_id;
            }
            let tmp9 = null;
            if (null != prop) {
              const frame = FramesStore.getFrame(closure_3_10(prop, React7));
              let tmp14 = null;
              if (null != frame) {
                const obj = { applicationId: prop, launched: React6(frame) };
                tmp14 = obj;
              }
              tmp9 = tmp14;
            }
            tmp3 = null == tmp9;
          }
          if (tmp3) {
            const _clearInterval = clearInterval;
            clearInterval(closure_2);
            closure_0(tmp2);
          }
        }, 100);
      });
    } else {
      resolved = Promise.resolve(null);
    }
  }
  return resolved;
}
function callNativePreviewFrame(control, result, id) {
  _require = control;
  const previewCallTypesResult = require("vibegrationsPreviewCall").previewCallTypes(control);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(result);
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
let closure_18 = async function _relayPreviewCapture(arg0) {
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
            const obj6 = {
              value: (function waitForLaunchedPreviewFrame(arg0, PREVIEW_FRAME_WAIT_MS) {
                          return closure_1_16(arg0, PREVIEW_FRAME_WAIT_MS, closure_1_15);
                        })(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS),
              done: false
            };
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
          obj18 = closure_133_17("capture-now", obj18, obj20);
          c8 = 4;
          c9 = 1;
        }
      }
    } catch (tmp45) {
      closure_6 = tmp45;
      if (tmp3 === c7) {
        c9 = tmp;
        throw tmp45;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_20 = async function _inspectVibegrationsPreviewPoint(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_2 = tmp3;
          closure_1 = tmp7;
          closure_129_0 = undefined;
          c3 = 1;
          const obj4 = { id: null, timeoutMs: null, retryMs: null };
          sum = sum + 1;
          const _Date = Date;
          const result = require("vibegrationsInspectPoint").inspectPreviewPointRequest(closure_0);
          const _HermesInternal = HermesInternal;
          obj4.id = "inspect-" + sum + "-" + Date.now();
          obj4.timeoutMs = require("vibegrationsPreviewCall").INSPECT_ANSWER_TIMEOUT_MS;
          obj4.retryMs = require("vibegrationsPreviewCall").CONTROL_RETRY_MS;
          c4 = 2;
          c5 = 1;
          const obj5 = { value: callNativePreviewFrame("control", result, obj4), done: false };
          return obj5;
        }
      } else if (1 === tmp7) {
        c3 = 0;
        c5 = 3;
        const obj6 = { value: { status: "failed" }, done: true };
        return obj6;
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c5 = 3;
        const obj7 = { value, done: true };
        return obj7;
      } else {
        closure_129_0 = value;
        c3 = 0;
        c5 = 3;
        const obj9 = { value: closure_130_0(closure_130_3[15]).inspectResultFromResponse(closure_129_0), done: true };
        return obj9;
      }
    } catch (tmp13) {
      if (tmp4 === c3) {
        c5 = tmp2;
        throw tmp13;
      } else {
        c4 = tmp;
      }
    }
  }
};
let closure_21 = async function _relayPreviewControl(arg0) {
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp9 === 3) {
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
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp4;
          closure_5 = tmp7;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          closure_133_3 = closure_3;
          closure_133_4 = undefined;
          closure_133_5 = undefined;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          closure_133_8 = undefined;
          if (previewFrameHeld(closure_0)) {
            closure_133_4 = require("vibegrationsPreviewControlLease").acquireVibegrationsControlLease(closure_0);
            c8 = 2;
            c9 = 3;
            c10 = 1;
            const obj4 = {
              value: (function waitForPreviewFrameIdentity(arg0, PREVIEW_FRAME_WAIT_MS) {
                          return closure_1_16(arg0, PREVIEW_FRAME_WAIT_MS, closure_1_13);
                        })(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS),
              done: false
            };
            return obj4;
          } else {
            c10 = 3;
            const obj5 = { value: { status: "unavailable" }, done: true };
            return obj5;
          }
        }
      } else if (1 === tmp10) {
        c8 = 0;
        closure_133_4();
        throw closure_7;
      } else if (2 === tmp10) {
        c8 = 1;
        c8 = 0;
        closure_133_4();
        c10 = 3;
      } else if (3 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          closure_133_4();
          c10 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_133_5 = value;
          if (null == closure_133_5) {
            c8 = 0;
            closure_133_4();
            c10 = 3;
            const obj9 = { value: { status: "unavailable" }, done: true };
            return obj9;
          } else {
            let tmp62;
            if (closure_133_3 != null) {
              tmp62 = closure_133_3();
            }
            c9 = 4;
            c10 = 1;
            const obj10 = { value: tmp62, done: false };
            return obj10;
          }
        }
      } else if (4 === tmp10) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 0;
          closure_133_4();
          c10 = 3;
          const obj11 = { value, done: true };
          return obj11;
        } else if (false === value) {
          c8 = 0;
          closure_133_4();
          c10 = 3;
          const obj12 = { value: { status: "unavailable" }, done: true };
          return obj12;
        } else if ("desktop" === closure_133_2.viewport) {
          c8 = 0;
          closure_133_4();
          c10 = 3;
          const obj13 = { value: { status: "failed", message: "the phone preview has no desktop lens" }, done: true };
          return obj13;
        } else {
          closure_133_6 = closure_134_0(closure_134_3[17]).beginNativeSurfaceSessionForFrame(closure_133_5, closure_133_2.native);
          c8 = 3;
          const obj15 = { id: closure_133_1, timeoutMs: null, retryMs: null };
          const obj18 = closure_134_0(closure_134_3[17]);
          obj15.timeoutMs = closure_134_0(closure_134_3[11]).controlAnswerTimeoutMs(closure_133_2);
          obj15.retryMs = closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS;
          c9 = 6;
          c10 = 1;
          const obj16 = { value: closure_134_17("control", closure_133_2, obj15), done: false };
          return obj16;
        }
      } else if (5 === tmp10) {
        c8 = 2;
        closure_133_6.end();
        throw closure_7;
      } else if (arg0 === 1) {
        c10 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 2;
        closure_133_6.end();
        c8 = 0;
        closure_133_4();
        c10 = 3;
        const obj17 = { value, done: true };
        return obj17;
      } else {
        closure_133_7 = value;
        if (typeof closure_133_7.ok === "boolean") {
          const _Array = Array;
          if (Array.isArray(closure_133_7.results)) {
            closure_4 = 0;
            items = [];
            closure_4 = HermesBuiltin.arraySpread(closure_134_22.drain(closure_133_0), closure_4);
            closure_4 = HermesBuiltin.arraySpread(closure_133_6.drain(), closure_4);
            closure_133_8 = items;
            if (0 === closure_133_8.length) {
              let obj = closure_133_7;
            } else {
              obj = {};
              const merged = Object.assign(closure_133_7);
              obj.native = closure_133_8;
            }
            { status: "completed", response: null }[1] = obj;
            c8 = 2;
            closure_133_6.end();
            c8 = 0;
            closure_133_4();
            c10 = 3;
          }
        }
        c8 = 2;
        closure_133_6.end();
        c8 = 0;
        closure_133_4();
        c10 = 3;
        const obj19 = { value: { status: "failed", message: "the preview frame returned a malformed control result" }, done: true };
        return obj19;
      }
    } catch (tmp86) {
      closure_7 = tmp86;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp86;
      } else if (tmp2 === tmp88) {
        c9 = tmp2;
      } else if (tmp === tmp88) {
        c9 = tmp;
      } else {
        c9 = tmp6;
      }
    }
  }
};
const FramesConstants = fn(9394);
({ isLaunched: closure_8, MAIN_SURFACE: closure_9, makeFrameId: c10 } = FramesConstants);
const LocalNotificationTypes = fn(9398).LocalNotificationTypes;
let items = [fn(8689).OAuth2Scopes.BOT, fn(8689).OAuth2Scopes.APPLICATIONS_COMMANDS];
let c19 = 0;
const vibegrationsPreviewOperationSurfaces = fn(13281);
let closure_22 = vibegrationsPreviewOperationSurfaces.createPreviewOperationSurfaces((arg0) => {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let tmp8 = null;
    if (null != frame) {
      const obj2 = { applicationId: prop, launched: closure_8(frame) };
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
    const obj3 = { applicationId: tmp3.applicationId };
    tmp11 = obj3;
  }
  if (null == tmp11) {
    return null;
  } else {
    const project1 = VibegrationsProjectStore.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp13 = null;
    if (null != prop1) {
      const frame1 = FramesStore.getFrame(closure_10(prop1, closure_9));
      let iframeId = null;
      if (closure_8(frame1)) {
        iframeId = frame1.data.iframeId;
      }
      tmp13 = iframeId;
    }
    iframeId = tmp13;
    const obj4 = {
      identity: tmp13,
      dismiss() {

        },
      open() {
          return vibegrationsPreviewNativeSurfaces.beginNativeSurfaceSessionForFrame(iframeId, undefined, { beneathBatches: true });
        }
    };
    return obj4;
  }
});
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
    const apply = closure_18.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  relayPreviewControl() {
    const self = this;
    const apply = closure_21.apply;
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
    closure_22.begin(projectId);
  },
  endPreviewOperation(projectId) {
    closure_22.end(projectId);
  },
  reloadAppFrames(application_id) {
    restartVibegrationsAppFramesDefault(application_id);
  }
};
export const inspectVibegrationsPreviewPoint = function inspectVibegrationsPreviewPoint() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};