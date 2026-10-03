// discord_app/modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import vibegrationsPreviewCall from "vibegrationsPreviewCall.tsx";
import vibegrationsPreviewControlLease2 from "vibegrationsPreviewControlLease.tsx";
import vibegrationsPreviewNativeSurfaces from "vibegrationsPreviewNativeSurfaces.tsx";
import restartVibegrationsAppFramesDefault from "../native/restartVibegrationsAppFrames.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import FramesStore from "../../frames/FramesStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import VibegrationsProjectStore from "../stores/VibegrationsProjectStore.tsx";

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
    const frame = FramesStore.getFrame(v65535(prop, options));
    let iframeId = null;
    if (closure_1_8(frame)) {
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
    const frame = FramesStore.getFrame(v65535(prop, options));
    let tmp8 = null;
    if (null != frame) {
      const obj = { applicationId: prop, launched: closure_1_8(frame) };
      tmp8 = obj;
    }
    tmp3 = tmp8;
  }
  return null != tmp3;
}
function waitForPreviewFrameIdentity(arg0, PREVIEW_FRAME_WAIT_MS) {
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
    let iframeId = null;
    if (closure_8(frame)) {
      iframeId = frame.data.iframeId;
    }
    tmp3 = iframeId;
  }
  if (null != tmp3) {
    let resolved = Promise.resolve(tmp3);
  } else {
    let project1 = VibegrationsProjectStore.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp11 = null;
    if (null != prop1) {
      let frame1 = FramesStore.getFrame(closure_10(prop1, closure_9));
      let tmp16 = null;
      if (null != frame1) {
        const obj2 = { applicationId: prop1, launched: closure_8(frame1) };
        tmp16 = obj2;
      }
      tmp11 = tmp16;
    }
    if (null != tmp11) {
      resolved = new Promise((arg0) => {
        closure_0 = arg0;
        closure_1 = Date.now() + closure_1;
        const interval = setInterval(() => {
          project = project.getProject(closure_0);
          let prop;
          if (project != null) {
            prop = project.preview_application_id;
          }
          let tmp4 = null;
          if (null != prop) {
            frame = frame.getFrame(closure_1_10(prop, closure_1_9));
            let iframeId = null;
            if (closure_1_8(frame)) {
              iframeId = frame.data.iframeId;
            }
            tmp4 = iframeId;
          }
          let tmp11 = null != tmp4;
          if (!tmp11) {
            const _Date = Date;
            tmp11 = Date.now() >= closure_1;
          }
          if (!tmp11) {
            const project1 = VibegrationsProjectStore.getProject(closure_0);
            let prop1;
            if (project1 != null) {
              prop1 = project1.preview_application_id;
            }
            let tmp17 = null;
            if (null != prop1) {
              const frame1 = FramesStore.getFrame(v65535(prop1, options));
              let tmp22 = null;
              if (null != frame1) {
                const obj = { applicationId: prop1, launched: closure_3_8(frame1) };
                tmp22 = obj;
              }
              tmp17 = tmp22;
            }
            tmp11 = null == tmp17;
          }
          if (tmp11) {
            const _clearInterval = clearInterval;
            clearInterval(closure_2);
            closure_0(tmp4);
          }
        }, 100);
      });
    } else {
      resolved = Promise.resolve(null);
    }
  }
  return resolved;
}
function callNativePreviewFrame(iframeId, control, result, id) {
  _require = control;
  closure_1 = id;
  const previewCallTypesResult = require("vibegrationsPreviewCall").previewCallTypes(control);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(result);
  const obj = require("vibegrationsPreviewCall");
  const webViewProxy = require("WebView").getWebViewProxy(iframeId);
  const timestamp = Date.now();
  const obj3 = require("WebView");
  return new Promise((arg0, arg1) => {
    closure_0 = arg0;
    closure_1 = arg1;
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
      const previewFrameCallTimeout = new vibegrationsPreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
      closure_1(previewFrameCallTimeout);
    }, closure_1.timeoutMs);
    closure_4 = closure_4.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        obj = vibegrationsPreviewCall;
        if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
          if (null != _null) {
            const _clearInterval = clearInterval;
            clearInterval(_null);
          }
          _null = null;
        } else {
          if (tmp5Result.isResultEnvelope(parsed, tmp8.result, tmp9.id)) {
            cleanup();
            closure_0(parsed);
          }
          tmp5Result = vibegrationsPreviewCall;
        }
        tmp8 = _null;
        tmp9 = obj;
      } catch (err) {
        return tmp;
      }
    });
    closure_4.injectJavaScript(obj(obj3[13])(timeout)).catch(() => {

    });
    const interval = setInterval(function post() {
      closure_4.injectJavaScript(obj(obj3[13])(closure_3)).catch(() => {

      });
    }, closure_1.retryMs);
  });
}
let closure_17 = async function _relayPreviewCapture(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_132_5 = undefined;
          let probe = closure_2;
          if (closure_2 == null) {
            probe = {};
          }
          ({ spec: closure_132_1, onAccepted: closure_132_2 } = probe);
          if (true === probe.probe) {
            let str2 = "unavailable";
            if (previewFrameHeld(closure_0)) {
              str2 = "accepted";
            }
            const obj4 = { status: str2 };
            c9 = 3;
            const obj5 = { value: obj4, done: true };
            return obj5;
          } else {
            c8 = 1;
            c9 = 1;
            const obj6 = { value: waitForPreviewFrameIdentity(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
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
          } else {
            closure_132_3 = value;
            if (null == closure_132_3) {
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
          closure_132_5 = value;
          if ("accepted" !== closure_132_5.phase) {
            const obj = { status: "failed", code: closure_132_5.code, message: closure_132_5.error };
          }
          c7 = 0;
          c9 = 3;
        }
        closure_132_4 = obj9;
        if (null == closure_132_4) {
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
          if (null == closure_132_4.uploadToken) {
            let obj19 = {};
          } else {
            obj19 = { uploadToken: closure_132_4.uploadToken };
          }
          const merged1 = Object.assign(obj19);
          const obj20 = { id: closure_132_0, timeoutMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_ACCEPT_TIMEOUT_MS, retryMs: closure_133_0(closure_133_3[11]).CAPTURE_NOW_RETRY_MS };
          obj18 = closure_133_16(tmp64, "capture-now", obj18, obj20);
          c8 = 4;
          c9 = 1;
        }
      }
    } catch (tmp49) {
      closure_6 = tmp49;
      if (tmp3 === c7) {
        c9 = tmp;
        throw tmp49;
      } else {
        c8 = tmp;
      }
    }
  }
};
let closure_19 = async function _inspectVibegrationsPreviewPoint(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
          closure_3 = tmp3;
          closure_2 = tmp7;
          closure_130_0 = undefined;
          const tmp24 = previewFrameIdentity(closure_0);
          if (null == tmp24) {
            c6 = 3;
            const obj4 = { value: { status: "failed" }, done: true };
            return obj4;
          } else {
            c4 = 1;
            const result = require("vibegrationsInspectPoint").inspectPreviewPointRequest(closure_1);
            const obj5 = { id: null, timeoutMs: null, retryMs: null };
            sum = sum + 1;
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            obj5.id = "inspect-" + sum + "-" + Date.now();
            obj5.timeoutMs = require("vibegrationsPreviewCall").INSPECT_ANSWER_TIMEOUT_MS;
            obj5.retryMs = require("vibegrationsPreviewCall").CONTROL_RETRY_MS;
            c5 = 2;
            c6 = 1;
            const obj6 = { value: callNativePreviewFrame(tmp24, "control", result, obj5), done: false };
            return obj6;
          }
        }
      } else if (1 === tmp7) {
        c4 = 0;
        c6 = 3;
        const obj7 = { value: { status: "failed" }, done: true };
        return obj7;
      } else if (arg0 === 1) {
        c6 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 0;
        c6 = 3;
        const obj8 = { value, done: true };
        return obj8;
      } else {
        closure_130_0 = value;
        c4 = 0;
        c6 = 3;
        const obj10 = { value: closure_131_0(closure_131_3[14]).inspectResultFromResponse(closure_130_0), done: true };
        return obj10;
      }
    } catch (tmp13) {
      if (tmp4 === c4) {
        c6 = tmp2;
        throw tmp13;
      } else {
        c5 = tmp;
      }
    }
  }
};
let closure_20 = async function _relayPreviewControl(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
            const obj4 = { value: waitForPreviewFrameIdentity(closure_0, require("vibegrationsPreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
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
          closure_133_6 = closure_134_0(closure_134_3[16]).beginNativeSurfaceSessionForFrame(closure_133_5, closure_133_2.native);
          c8 = 3;
          const obj15 = { id: closure_133_1, timeoutMs: null, retryMs: null };
          const obj18 = closure_134_0(closure_134_3[16]);
          obj15.timeoutMs = closure_134_0(closure_134_3[11]).controlAnswerTimeoutMs(closure_133_2);
          obj15.retryMs = closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS;
          c9 = 6;
          c10 = 1;
          const obj16 = { value: closure_134_16(closure_133_5, "control", closure_133_2, obj15), done: false };
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
    } catch (tmp87) {
      closure_7 = tmp87;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp87;
      } else if (tmp2 === tmp89) {
        c9 = tmp2;
      } else if (tmp === tmp89) {
        c9 = tmp;
      } else {
        c9 = tmp6;
      }
    }
  }
};
const FramesConstants = fn(8704);
({ isLaunched: closure_8, MAIN_SURFACE: closure_9, makeFrameId: c10 } = FramesConstants);
const LocalNotificationTypes = fn(8707).LocalNotificationTypes;
let items = [fn(8015).OAuth2Scopes.BOT, fn(8015).OAuth2Scopes.APPLICATIONS_COMMANDS];
let c18 = 0;
let c21 = 0;
const vibegrationsPreviewControlLease = fn(8973);
let result = vibegrationsPreviewControlLease.subscribeVibegrationsControlReleased((arg0) => {
  const project = VibegrationsProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const frame = FramesStore.getFrame(closure_10(prop, closure_9));
    let iframeId = null;
    if (closure_8(frame)) {
      iframeId = frame.data.iframeId;
    }
    tmp3 = iframeId;
  }
  if (null != tmp3) {
    let obj = { id: null, timeoutMs: null, retryMs: null };
    const sum = c21 + 1;
    c21 = sum;
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    obj.id = "control-end-" + sum + "-" + Date.now();
    obj.timeoutMs = require("vibegrationsPreviewCall").CONTROL_END_TIMEOUT_MS;
    obj.retryMs = require("vibegrationsPreviewCall").CONTROL_RETRY_MS;
    _require = "control-end";
    obj3 = undefined;
    const previewCallTypesResult = require("vibegrationsPreviewCall").previewCallTypes("control-end");
    c2 = previewCallTypesResult;
    obj3 = { type: previewCallTypesResult.request, id: obj.id };
    const merged = Object.assign({});
    const obj2 = require("vibegrationsPreviewCall");
    const webViewProxy = require("WebView").getWebViewProxy(tmp3);
    const _Date2 = Date;
    const timestamp = Date.now();
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
      closure_1 = arg1;
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
        const previewFrameCallTimeout = new vibegrationsPreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
        closure_1(previewFrameCallTimeout);
      }, closure_1.timeoutMs);
      closure_4 = closure_4.addOnMessageListener((data) => {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(data.data);
          obj = vibegrationsPreviewCall;
          if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
            if (null != _null) {
              const _clearInterval = clearInterval;
              clearInterval(_null);
            }
            _null = null;
          } else {
            if (tmp5Result.isResultEnvelope(parsed, tmp8.result, tmp9.id)) {
              cleanup();
              closure_0(parsed);
            }
            tmp5Result = vibegrationsPreviewCall;
          }
          tmp8 = _null;
          tmp9 = obj;
        } catch (err) {
          return tmp;
        }
      });
      closure_4.injectJavaScript(obj(obj3[13])(timeout)).catch(() => {

      });
      const interval = setInterval(function post() {
        closure_4.injectJavaScript(obj(obj3[13])(closure_3)).catch(() => {

        });
      }, closure_1.retryMs);
    });
    promise.catch(() => {

    });
    const obj4 = require("WebView");
  }
});
const vibegrationsPreviewOperationSurfaces = fn(8976);
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
const result1 = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsPlatformUtils.native.tsx");

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
    const apply = closure_17.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  relayPreviewControl() {
    const self = this;
    const apply = closure_20.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  },
  releasePreviewControl(projectId) {
    const result = vibegrationsPreviewControlLease2.releaseVibegrationsControlLeases(projectId);
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
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};