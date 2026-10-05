// discord_app/modules/conjure/shared/ConjurePlatformUtils.native.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import conjurePreviewCall from "../preview/conjurePreviewCall.tsx";
import conjurePreviewControlLease2 from "../preview/conjurePreviewControlLease.tsx";
import conjurePreviewNativeSurfaces from "../preview/conjurePreviewNativeSurfaces.tsx";
import restartConjureAppFramesDefault from "../preview/native/restartConjureAppFrames.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import FramesStore from "../../frames/FramesStore.tsx";
import AppStateStore from "../../../stores/native/AppStateStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

const require = globalThis.__r;

require = fn;
function previewFrameIdentity(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
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
  const project = ConjureProjectStore.getProject(arg0);
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
  let project = ConjureProjectStore.getProject(arg0);
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
    let project1 = ConjureProjectStore.getProject(arg0);
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
            const project1 = ConjureProjectStore.getProject(closure_0);
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
  const previewCallTypesResult = require("conjurePreviewCall").previewCallTypes(control);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(result);
  const obj = require("conjurePreviewCall");
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
      const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
      closure_1(previewFrameCallTimeout);
    }, closure_1.timeoutMs);
    closure_4 = closure_4.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        obj = conjurePreviewCall;
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
          tmp5Result = conjurePreviewCall;
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
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp2;
          closure_3 = tmp4;
          closure_131_0 = closure_1;
          closure_131_1 = undefined;
          let onAccepted;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_5 = undefined;
          const spec = importAll.spec;
          closure_131_1 = spec;
          onAccepted = importAll.onAccepted;
          if (true === importAll.probe) {
            let str2 = "unavailable";
            if (previewFrameHeld(closure_0)) {
              str2 = "accepted";
            }
            const obj4 = { status: str2 };
            c8 = 3;
            const obj5 = { value: obj4, done: true };
            return obj5;
          } else {
            let mode;
            if (spec != null) {
              mode = spec.mode;
            }
            if ("widget" === mode) {
              c8 = 3;
              const obj6 = { value: { status: "unavailable" }, done: true };
              return obj6;
            } else {
              c7 = 1;
              c8 = 1;
              const obj7 = { value: waitForPreviewFrameIdentity(closure_0, require("conjurePreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
              return obj7;
            }
          }
        }
      } else {
        if (1 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_131_3 = value;
            if (null == closure_131_3) {
              c8 = 3;
              const obj9 = { value: { status: "unavailable" }, done: true };
              return obj9;
            } else if (null == onAccepted) {
              let obj10 = { uploadToken: "r" };
            } else {
              c7 = 2;
              c8 = 1;
              const obj11 = { value: onAccepted(), done: false };
              return obj11;
            }
          }
        } else if (2 === tmp7) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else {
            obj10 = value;
            if (arg0 === 2) {
              c8 = 3;
              const obj12 = { value, done: true };
              return obj12;
            }
          }
        } else if (3 === tmp7) {
          c6 = 0;
          c8 = 3;
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 0;
          c8 = 3;
          const obj15 = { value, done: true };
          return obj15;
        } else {
          closure_131_5 = value;
          if ("accepted" !== closure_131_5.phase) {
            const obj = { status: "failed", code: closure_131_5.code, message: closure_131_5.error };
          }
          c6 = 0;
          c8 = 3;
        }
        closure_131_4 = obj10;
        if (null == closure_131_4) {
          c8 = 3;
          const obj17 = { value: { status: "unavailable" }, done: true };
          return obj17;
        } else {
          c6 = 1;
          if (null == closure_131_1) {
            let obj18 = {};
          } else {
            obj18 = { spec: closure_131_1 };
          }
          let obj19 = {};
          const merged = Object.assign(obj18);
          if (null == closure_131_4.uploadToken) {
            let obj20 = {};
          } else {
            obj20 = { uploadToken: closure_131_4.uploadToken };
          }
          const merged1 = Object.assign(obj20);
          const obj21 = { id: closure_131_0, timeoutMs: closure_132_0(closure_132_3[11]).CAPTURE_NOW_ACCEPT_TIMEOUT_MS, retryMs: closure_132_0(closure_132_3[11]).CAPTURE_NOW_RETRY_MS };
          obj19 = closure_132_16(tmp64, "capture-now", obj19, obj21);
          c7 = 4;
          c8 = 1;
        }
      }
    } catch (tmp49) {
      closure_5 = tmp49;
      if (tmp3 === c6) {
        c8 = tmp;
        throw tmp49;
      } else {
        c7 = tmp;
      }
    }
  }
};
let closure_19 = async function _inspectConjurePreviewPoint(arg0) {
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
      return { value: "IconComponent", done: null };
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
            const result = require("conjureInspectPoint").inspectPreviewPointRequest(closure_1);
            const obj5 = { id: null, timeoutMs: null, retryMs: null };
            sum = sum + 1;
            const _Date = Date;
            const _HermesInternal = HermesInternal;
            obj5.id = "inspect-" + sum + "-" + Date.now();
            obj5.timeoutMs = require("conjurePreviewCall").INSPECT_ANSWER_TIMEOUT_MS;
            obj5.retryMs = require("conjurePreviewCall").CONTROL_RETRY_MS;
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
      return { value: "IconComponent", done: null };
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
            closure_133_4 = require("conjurePreviewControlLease").acquireConjureControlLease(closure_0);
            c8 = 2;
            c9 = 3;
            c10 = 1;
            const obj4 = { value: waitForPreviewFrameIdentity(closure_0, require("conjurePreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
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
            let tmp65;
            if (closure_133_3 != null) {
              tmp65 = closure_133_3();
            }
            c9 = 4;
            c10 = 1;
            const obj10 = { value: tmp65, done: false };
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
        } else if ("landscape" === closure_133_2.orientation) {
          c8 = 0;
          closure_133_4();
          c10 = 3;
          const obj14 = { value: { status: "failed", message: "the phone preview cannot turn sideways" }, done: true };
          return obj14;
        } else {
          closure_133_6 = closure_134_0(closure_134_3[16]).beginNativeSurfaceSessionForFrame(closure_133_5, closure_133_2.native);
          c8 = 3;
          const obj16 = { id: closure_133_1, timeoutMs: null, retryMs: null };
          const obj19 = closure_134_0(closure_134_3[16]);
          obj16.timeoutMs = closure_134_0(closure_134_3[11]).controlAnswerTimeoutMs(closure_133_2);
          obj16.retryMs = closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS;
          c9 = 6;
          c10 = 1;
          const obj17 = { value: closure_134_16(closure_133_5, "control", closure_133_2, obj16), done: false };
          return obj17;
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
        const obj18 = { value, done: true };
        return obj18;
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
        const obj20 = { value: { status: "failed", message: "the preview frame returned a malformed control result" }, done: true };
        return obj20;
      }
    } catch (tmp90) {
      closure_7 = tmp90;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp90;
      } else if (tmp2 === tmp92) {
        c9 = tmp2;
      } else if (tmp === tmp92) {
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
const conjurePreviewControlLease = fn(8973);
let result = conjurePreviewControlLease.subscribeConjureControlReleased((arg0) => {
  const project = ConjureProjectStore.getProject(arg0);
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
    const obj = { id: null, timeoutMs: null, retryMs: null };
    const sum = c21 + 1;
    c21 = sum;
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    obj.id = "control-end-" + sum + "-" + Date.now();
    obj.timeoutMs = require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS;
    obj.retryMs = require("conjurePreviewCall").CONTROL_RETRY_MS;
    _require = "control-end";
    obj3 = undefined;
    const previewCallTypesResult = require("conjurePreviewCall").previewCallTypes("control-end");
    c2 = previewCallTypesResult;
    obj3 = { type: previewCallTypesResult.request, id: obj.id };
    const merged = Object.assign({});
    const obj2 = require("conjurePreviewCall");
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
        const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
        closure_1(previewFrameCallTimeout);
      }, closure_1.timeoutMs);
      closure_4 = closure_4.addOnMessageListener((data) => {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(data.data);
          obj = conjurePreviewCall;
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
            tmp5Result = conjurePreviewCall;
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
const conjurePreviewOperationSurfaces = fn(8976);
let closure_22 = conjurePreviewOperationSurfaces.createPreviewOperationSurfaces((arg0) => {
  const project = ConjureProjectStore.getProject(arg0);
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
    const project1 = ConjureProjectStore.getProject(arg0);
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
          return conjurePreviewNativeSurfaces.beginNativeSurfaceSessionForFrame(iframeId, undefined, { beneathBatches: true });
        }
    };
    return obj4;
  }
});
const size = fn(2);
const result1 = size.fileFinishedImporting("modules/conjure/shared/ConjurePlatformUtils.native.tsx");

export default {
  openConjureAppInstallModal(application) {
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
    obj2.userInfo = { type: LocalNotificationTypes.CONJURE, projectId, channel_id: projectId };
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
  abortPreviewControl(projectId) {
    const project = ConjureProjectStore.getProject(projectId);
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
      obj.id = "control-abort-" + sum + "-" + Date.now();
      obj.timeoutMs = require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS;
      obj.retryMs = require("conjurePreviewCall").CONTROL_RETRY_MS;
      _require = "control-abort";
      obj3 = undefined;
      const previewCallTypesResult = require("conjurePreviewCall").previewCallTypes("control-abort");
      c2 = previewCallTypesResult;
      obj3 = { type: previewCallTypesResult.request, id: obj.id };
      const merged = Object.assign({});
      const obj2 = require("conjurePreviewCall");
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
          const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj.timeoutMs);
          closure_1(previewFrameCallTimeout);
        }, closure_1.timeoutMs);
        closure_4 = closure_4.addOnMessageListener((data) => {
          try {
            const _JSON = JSON;
            const parsed = JSON.parse(data.data);
            obj = conjurePreviewCall;
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
              tmp5Result = conjurePreviewCall;
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
  },
  releasePreviewControl(projectId) {
    const result = conjurePreviewControlLease2.releaseConjureControlLeases(projectId);
  },
  beginPreviewOperation(projectId) {
    closure_22.begin(projectId);
  },
  endPreviewOperation(projectId) {
    closure_22.end(projectId);
  },
  reloadAppFrames(application_id) {
    restartConjureAppFramesDefault(application_id);
  }
};
export const inspectConjurePreviewPoint = function inspectConjurePreviewPoint() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};