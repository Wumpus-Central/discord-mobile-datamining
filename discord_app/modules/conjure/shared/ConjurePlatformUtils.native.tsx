// discord_app/modules/conjure/shared/ConjurePlatformUtils.native.tsx
import BigFlagUtilsAll from "../../../../discord_common/js/shared/utils/BigFlagUtils.tsx";
import ApplicationIntegrationType from "../../../../discord_common/js/shared/shared-constants/ApplicationIntegrationType.tsx";
import ApplicationUtils from "../../../utils/native/ApplicationUtils.tsx";
import PushNotificationDefault from "../../../lib/pushnotification/PushNotification.tsx";
import conjurePreviewSurface from "../preview/conjurePreviewSurface.tsx";
import conjurePreviewCall from "../preview/conjurePreviewCall.tsx";
import conjurePreviewControlLease2 from "../preview/conjurePreviewControlLease.tsx";
import conjurePreviewNativeSurfaces from "../preview/conjurePreviewNativeSurfaces.tsx";
import restartConjureAppFramesDefault from "../preview/native/restartConjureAppFrames.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
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
    const conjureBuilderPreviewFrame = conjurePreviewSurface.getConjureBuilderPreviewFrame(prop);
    let iframeId = null;
    if (isLaunched(conjureBuilderPreviewFrame)) {
      iframeId = conjureBuilderPreviewFrame.data.iframeId;
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
    const conjureBuilderPreviewFrame = conjurePreviewSurface.getConjureBuilderPreviewFrame(prop);
    let tmp7 = null;
    if (null != conjureBuilderPreviewFrame) {
      const obj2 = { applicationId: prop, launched: isLaunched(conjureBuilderPreviewFrame) };
      tmp7 = obj2;
    }
    tmp3 = tmp7;
  }
  return null != tmp3;
}
function waitForPreviewFrameIdentity(arg0, PREVIEW_FRAME_WAIT_MS) {
  _require = arg0;
  closure_1 = PREVIEW_FRAME_WAIT_MS;
  let project = ConjureProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    let conjureBuilderPreviewFrame = require("conjurePreviewSurface").getConjureBuilderPreviewFrame(prop);
    let iframeId = null;
    if (isLaunched(conjureBuilderPreviewFrame)) {
      iframeId = conjureBuilderPreviewFrame.data.iframeId;
    }
    tmp3 = iframeId;
    let obj2 = require("conjurePreviewSurface");
  }
  if (null != tmp3) {
    let resolved = Promise.resolve(tmp3);
  } else {
    let project1 = ConjureProjectStore.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp10 = null;
    if (null != prop1) {
      let conjureBuilderPreviewFrame1 = require("conjurePreviewSurface").getConjureBuilderPreviewFrame(prop1);
      let tmp14 = null;
      if (null != conjureBuilderPreviewFrame1) {
        const obj4 = { applicationId: prop1, launched: isLaunched(conjureBuilderPreviewFrame1) };
        tmp14 = obj4;
      }
      tmp10 = tmp14;
      let obj3 = require("conjurePreviewSurface");
    }
    if (null != tmp10) {
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
            const conjureBuilderPreviewFrame = closure_0(dependencyMap[10]).getConjureBuilderPreviewFrame(prop);
            let iframeId = null;
            if (closure_1_7(conjureBuilderPreviewFrame)) {
              iframeId = conjureBuilderPreviewFrame.data.iframeId;
            }
            tmp4 = iframeId;
            const obj = closure_0(dependencyMap[10]);
          }
          let tmp10 = null != tmp4;
          if (!tmp10) {
            const _Date = Date;
            tmp10 = Date.now() >= closure_1;
          }
          if (!tmp10) {
            const project1 = ConjureProjectStore.getProject(closure_0);
            let prop1;
            if (project1 != null) {
              prop1 = project1.preview_application_id;
            }
            let tmp16 = null;
            if (null != prop1) {
              const conjureBuilderPreviewFrame1 = conjurePreviewSurface.getConjureBuilderPreviewFrame(prop1);
              let tmp20 = null;
              if (null != conjureBuilderPreviewFrame1) {
                const obj3 = { applicationId: prop1, launched: isLaunched(conjureBuilderPreviewFrame1) };
                tmp20 = obj3;
              }
              tmp16 = tmp20;
            }
            tmp10 = null == tmp16;
          }
          if (tmp10) {
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
      const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj2.timeoutMs);
      closure_1(previewFrameCallTimeout);
    }, obj2.timeoutMs);
    closure_4 = closure_4.addOnMessageListener((data) => {
      try {
        const _JSON = JSON;
        const parsed = JSON.parse(data.data);
        if (obj.isResultEnvelope(parsed, _null.ack, obj2.id)) {
          if (null != _null) {
            const _clearInterval = clearInterval;
            clearInterval(_null);
          }
          _null = null;
        } else {
          if (tmp5Result.isResultEnvelope(parsed, tmp8.result, obj2.id)) {
            cleanup();
            closure_0(parsed);
          }
          tmp5Result = conjurePreviewCall;
        }
        obj = conjurePreviewCall;
        tmp8 = _null;
      } catch (err) {
        return tmp;
      }
    });
    closure_4.injectJavaScript(require("getPostMessageJavaScript")(timeout)).catch(() => {

    });
    const interval = setInterval(function post() {
      closure_4.injectJavaScript(obj2(obj4[13])(closure_3)).catch(() => {

      });
    }, obj2.retryMs);
  });
}
let closure_14 = async function _relayPreviewCapture(arg0) {
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
              let obj10 = { uploadToken: "create" };
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
          obj19 = closure_132_13(tmp64, "capture-now", obj19, obj21);
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
let closure_16 = async function _inspectConjurePreviewPoint(arg0) {
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
let closure_17 = async function _relayPreviewControl(arg0) {
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
            let tmp59;
            if (closure_133_3 != null) {
              tmp59 = closure_133_3();
            }
            c9 = 5;
            c10 = 1;
            const obj10 = { value: tmp59, done: false };
            return obj10;
          }
        }
      } else if (4 === tmp10) {
        c8 = 2;
        closure_133_6.end();
        throw closure_7;
      } else if (5 === tmp10) {
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
        } else {
          closure_133_6 = closure_134_0(closure_134_3[16]).beginNativeSurfaceSessionForFrame(closure_133_5);
          c8 = 3;
          const obj14 = { id: closure_133_1, timeoutMs: null, retryMs: null };
          const obj17 = closure_134_0(closure_134_3[16]);
          obj14.timeoutMs = closure_134_0(closure_134_3[11]).controlAnswerTimeoutMs(closure_133_2);
          obj14.retryMs = closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS;
          c9 = 6;
          c10 = 1;
          const obj15 = { value: closure_134_13(closure_133_5, "control", closure_133_2, obj14), done: false };
          return obj15;
        }
      } else if (arg0 === 1) {
        c10 = 3;
        throw value;
      } else if (arg0 === 2) {
        c8 = 2;
        closure_133_6.end();
        c8 = 0;
        closure_133_4();
        c10 = 3;
        const obj16 = { value, done: true };
        return obj16;
      } else {
        closure_133_7 = value;
        if (typeof closure_133_7.ok === "boolean") {
          const _Array = Array;
          if (Array.isArray(closure_133_7.results)) {
            closure_4 = 0;
            items = [];
            closure_4 = HermesBuiltin.arraySpread(closure_134_19.drain(closure_133_0), closure_4);
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
        const obj18 = { value: { status: "failed", message: "the preview frame returned a malformed control result" }, done: true };
        return obj18;
      }
    } catch (tmp84) {
      closure_7 = tmp84;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp84;
      } else if (tmp2 === tmp86) {
        c9 = tmp2;
      } else if (tmp === tmp86) {
        c9 = tmp;
      } else {
        c9 = tmp6;
      }
    }
  }
};
const isLaunched = fn(10613).isLaunched;
const LocalNotificationTypes = fn(12367).LocalNotificationTypes;
let items = [fn(8433).OAuth2Scopes.BOT, fn(8433).OAuth2Scopes.APPLICATIONS_COMMANDS];
let c15 = 0;
let c18 = 0;
const conjurePreviewControlLease = fn(12372);
let result = conjurePreviewControlLease.subscribeConjureControlReleased((arg0) => {
  const project = ConjureProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const conjureBuilderPreviewFrame = require("conjurePreviewSurface").getConjureBuilderPreviewFrame(prop);
    let iframeId = null;
    if (isLaunched(conjureBuilderPreviewFrame)) {
      iframeId = conjureBuilderPreviewFrame.data.iframeId;
    }
    tmp3 = iframeId;
    const obj = require("conjurePreviewSurface");
  }
  if (null != tmp3) {
    const obj2 = { id: null, timeoutMs: null, retryMs: null };
    const sum = c18 + 1;
    c18 = sum;
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    obj2.id = "control-end-" + sum + "-" + Date.now();
    obj2.timeoutMs = require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS;
    obj2.retryMs = require("conjurePreviewCall").CONTROL_RETRY_MS;
    _require = "control-end";
    obj4 = undefined;
    const previewCallTypesResult = require("conjurePreviewCall").previewCallTypes("control-end");
    c2 = previewCallTypesResult;
    obj4 = { type: previewCallTypesResult.request, id: obj2.id };
    const merged = Object.assign({});
    const obj3 = require("conjurePreviewCall");
    const webViewProxy = require("WebView").getWebViewProxy(tmp3);
    const _Date2 = Date;
    const timestamp = Date.now();
    const promise = new Promise((arg0, arg1) => {
      closure_0 = arg0;
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
        const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj2.timeoutMs);
        closure_1(previewFrameCallTimeout);
      }, obj2.timeoutMs);
      closure_4 = closure_4.addOnMessageListener((data) => {
        try {
          const _JSON = JSON;
          const parsed = JSON.parse(data.data);
          if (obj.isResultEnvelope(parsed, _null.ack, obj2.id)) {
            if (null != _null) {
              const _clearInterval = clearInterval;
              clearInterval(_null);
            }
            _null = null;
          } else {
            if (tmp5Result.isResultEnvelope(parsed, tmp8.result, obj2.id)) {
              cleanup();
              closure_0(parsed);
            }
            tmp5Result = conjurePreviewCall;
          }
          obj = conjurePreviewCall;
          tmp8 = _null;
        } catch (err) {
          return tmp;
        }
      });
      closure_4.injectJavaScript(require("getPostMessageJavaScript")(timeout)).catch(() => {

      });
      const interval = setInterval(function post() {
        closure_4.injectJavaScript(obj2(obj4[13])(closure_3)).catch(() => {

        });
      }, obj2.retryMs);
    });
    promise.catch(() => {

    });
    const obj5 = require("WebView");
  }
});
const conjurePreviewOperationSurfaces = fn(12375);
let closure_19 = conjurePreviewOperationSurfaces.createPreviewOperationSurfaces((arg0) => {
  const project = ConjureProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  let tmp3 = null;
  if (null != prop) {
    const conjureBuilderPreviewFrame = iframeId(12368).getConjureBuilderPreviewFrame(prop);
    let tmp7 = null;
    if (null != conjureBuilderPreviewFrame) {
      const obj3 = { applicationId: prop, launched: isLaunched(conjureBuilderPreviewFrame) };
      tmp7 = obj3;
    }
    tmp3 = tmp7;
    const obj2 = iframeId(12368);
  }
  let launched;
  if (tmp3 != null) {
    launched = tmp3.launched;
  }
  let tmp10 = null;
  if (true === launched) {
    const obj4 = { applicationId: tmp3.applicationId };
    tmp10 = obj4;
  }
  if (null == tmp10) {
    return null;
  } else {
    const project1 = ConjureProjectStore.getProject(arg0);
    let prop1;
    if (project1 != null) {
      prop1 = project1.preview_application_id;
    }
    let tmp12 = null;
    if (null != prop1) {
      const conjureBuilderPreviewFrame1 = iframeId(12368).getConjureBuilderPreviewFrame(prop1);
      iframeId = null;
      if (isLaunched(conjureBuilderPreviewFrame1)) {
        iframeId = conjureBuilderPreviewFrame1.data.iframeId;
      }
      tmp12 = iframeId;
      const obj5 = iframeId(12368);
    }
    iframeId = tmp12;
    const obj6 = {
      identity: tmp12,
      dismiss() {

        },
      open() {
          return conjurePreviewNativeSurfaces.beginNativeSurfaceSessionForFrame(iframeId, { beneathBatches: true });
        }
    };
    return obj6;
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
    if ("active" === AppStateStore.getState()) {
      ({ projectId, guildId } = arg0);
      ({ title, body } = arg0);
      let obj2 = { category: "local", alertTitle: title, alertBody: body, userInfo: null };
      const obj3 = { type: LocalNotificationTypes.CONJURE, projectId, channel_id: projectId };
      if (null != guildId) {
        const obj5 = { guildId };
        let obj = obj5;
      } else {
        obj = {};
      }
      const merged = Object.assign(obj);
      obj2.userInfo = obj3;
      obj2 = PushNotificationDefault.presentLocalNotification(obj2);
    }
  },
  relayPreviewCapture() {
    const self = this;
    const apply = closure_14.apply;
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
  abortPreviewControl(projectId) {
    const project = ConjureProjectStore.getProject(projectId);
    let prop;
    if (project != null) {
      prop = project.preview_application_id;
    }
    let tmp3 = null;
    if (null != prop) {
      const conjureBuilderPreviewFrame = require("conjurePreviewSurface").getConjureBuilderPreviewFrame(prop);
      let iframeId = null;
      if (isLaunched(conjureBuilderPreviewFrame)) {
        iframeId = conjureBuilderPreviewFrame.data.iframeId;
      }
      tmp3 = iframeId;
      let obj = require("conjurePreviewSurface");
    }
    if (null != tmp3) {
      const obj2 = { id: null, timeoutMs: null, retryMs: null };
      const sum = c18 + 1;
      c18 = sum;
      const _Date = Date;
      const _HermesInternal = HermesInternal;
      obj2.id = "control-abort-" + sum + "-" + Date.now();
      obj2.timeoutMs = require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS;
      obj2.retryMs = require("conjurePreviewCall").CONTROL_RETRY_MS;
      _require = "control-abort";
      obj4 = undefined;
      const previewCallTypesResult = require("conjurePreviewCall").previewCallTypes("control-abort");
      c2 = previewCallTypesResult;
      obj4 = { type: previewCallTypesResult.request, id: obj2.id };
      const merged = Object.assign({});
      const obj3 = require("conjurePreviewCall");
      const webViewProxy = require("WebView").getWebViewProxy(tmp3);
      const _Date2 = Date;
      const timestamp = Date.now();
      const promise = new Promise((arg0, arg1) => {
        closure_0 = arg0;
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
          const previewFrameCallTimeout = new conjurePreviewCall.PreviewFrameCallTimeout(c0, obj2.timeoutMs);
          closure_1(previewFrameCallTimeout);
        }, obj2.timeoutMs);
        closure_4 = closure_4.addOnMessageListener((data) => {
          try {
            const _JSON = JSON;
            const parsed = JSON.parse(data.data);
            if (obj.isResultEnvelope(parsed, _null.ack, obj2.id)) {
              if (null != _null) {
                const _clearInterval = clearInterval;
                clearInterval(_null);
              }
              _null = null;
            } else {
              if (tmp5Result.isResultEnvelope(parsed, tmp8.result, obj2.id)) {
                cleanup();
                closure_0(parsed);
              }
              tmp5Result = conjurePreviewCall;
            }
            obj = conjurePreviewCall;
            tmp8 = _null;
          } catch (err) {
            return tmp;
          }
        });
        closure_4.injectJavaScript(require("getPostMessageJavaScript")(timeout)).catch(() => {

        });
        const interval = setInterval(function post() {
          closure_4.injectJavaScript(obj2(obj4[13])(closure_3)).catch(() => {

          });
        }, obj2.retryMs);
      });
      promise.catch(() => {

      });
      const obj5 = require("WebView");
    }
  },
  releasePreviewControl(projectId) {
    const result = conjurePreviewControlLease2.releaseConjureControlLeases(projectId);
  },
  beginPreviewOperation(projectId) {
    closure_19.begin(projectId);
  },
  endPreviewOperation(projectId) {
    closure_19.end(projectId);
  },
  reloadAppFrames(application_id) {
    restartConjureAppFramesDefault(application_id);
  }
};
export const inspectConjurePreviewPoint = function inspectConjurePreviewPoint() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};