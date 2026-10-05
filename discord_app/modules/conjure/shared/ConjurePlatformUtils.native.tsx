// === Module 8702: ConjurePlatformUtils ===

// Module 8702 (ConjurePlatformUtils)
import BigFlagUtilsAll from "BigFlagUtils" /* 1097 */;
import OAuth2Scopes from "OAuth2Scopes" /* 8015 */;
import Constants from "Constants" /* 8707 */;
import ApplicationIntegrationType from "ApplicationIntegrationType" /* 8708 */;
import ApplicationUtils from "ApplicationUtils" /* 8709 */;
import PushNotificationDefault from "PushNotification" /* 8966 */;
import conjurePreviewCall from "conjurePreviewCall" /* 8970 */;
import conjurePreviewNativeSurfaces from "conjurePreviewNativeSurfaces" /* 8974 */;
import restartConjureAppFramesDefault from "restartConjureAppFrames" /* 8977 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import FramesStore from "FramesStore" /* 8703 */;
import AppStateStore from "AppStateStore" /* 1986 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;
import FramesConstants from "FramesConstants" /* 8704 */;
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 8973 */;
import conjurePreviewOperationSurfaces from "conjurePreviewOperationSurfaces" /* 8976 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _null, _require, c5, endResult, importAll, native, obj18;

let c10;
let c9;
let metroImportAll;
function previewFrameIdentity(arg0) {
  const project = ConjureProjectStore.getProject(arg0);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (null == prop) {
    return null;
  } else {
    const frame = FramesStore.getFrame(authStore(prop, React4));
    let iframeId = null;
    if (metroImportAll(frame)) {
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
    const frame = FramesStore.getFrame(authStore(prop, React4));
    let tmp8 = null;
    if (null != frame) {
      tmp8 = { applicationId: prop, launched: metroImportAll(frame) };
      obj = { applicationId: prop, launched: metroImportAll(frame) };
    }
    tmp3 = tmp8;
  }
  return null != tmp3;
}
function waitForPreviewFrameIdentity(arg0, PREVIEW_FRAME_WAIT_MS) {
  let resolved;
  let closure_0 = arg0;
  let closure_1 = PREVIEW_FRAME_WAIT_MS;
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
    resolved = Promise.resolve(tmp3);
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
        tmp16 = { applicationId: prop1, launched: closure_8(frame1) };
        const obj2 = { applicationId: prop1, launched: closure_8(frame1) };
      }
      tmp11 = tmp16;
    }
    if (null != tmp11) {
      const self = this;
      const self2 = this;
      resolved = new Promise((arg0) => {
        let closure_2;
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
              const frame1 = FramesStore.getFrame(authStore(prop1, React4));
              let tmp22 = null;
              if (null != frame1) {
                tmp22 = { applicationId: prop1, launched: metroImportAll(frame1) };
                obj = { applicationId: prop1, launched: metroImportAll(frame1) };
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
  let closure_4;
  let obj2;
  _require = control;
  let closure_1 = id;
  obj = require("conjurePreviewCall");
  const previewCallTypesResult = obj.previewCallTypes(control);
  importAll = previewCallTypesResult;
  obj2 = { type: previewCallTypesResult.request, id: id.id };
  const merged = Object.assign(result);
  const obj3 = require("WebView");
  const webViewProxy = obj3.getWebViewProxy(iframeId);
  const timestamp = Date.now();
  const promise = new Promise((arg0, arg1) => {
    let closure_3;
    const f151477 = () => {

    };
    let closure_0 = arg0;
    let closure_1 = arg1;
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
        const tmp7 = _null;
        const tmp8 = obj;
        if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
          if (null != _null) {
            const _clearInterval = clearInterval;
            clearInterval(_null);
          }
          _null = null;
        } else {
          const tmp4Result = conjurePreviewCall;
          if (tmp4Result.isResultEnvelope(parsed, tmp7.result, tmp8.id)) {
            cleanup();
            closure_0(parsed);
          }
        }
      } catch (err) {
      }
    });
    let injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(timeout));
    injectJavaScriptResult.catch(f151477);
    const interval = setInterval(function post() {
      const injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(closure_3));
      injectJavaScriptResult.catch(f151477);
    }, closure_1.retryMs);
  });
  return promise;
}
let obj = function _relayPreviewCapture() {
  obj = _asyncToGenerator(async (id, arg1, arg2) => {
    let closure_5;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c7 = 0;
    let c8 = 0;
    let c6 = 0;
    return (async (arg0, value, arg2) => {
      if (c8 === 2) {
        c8 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp45;
        try {
          let closure_3;
          let obj10;
          let spec;
          let onAccepted;
          c8 = 2;
          if (0 === c7) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c8 = 3;
              return { value, done: true };
            } else {
              closure_4 = tmp;
              id = closure_1;
              closure_3 = undefined;
              obj10 = undefined;
              tmp45 = undefined;
              spec = closure_2.spec;
              onAccepted = closure_2.onAccepted;
              if (true === closure_2.probe) {
                let str2 = "unavailable";
                if (previewFrameHeld(id)) {
                  str2 = "accepted";
                }
                c8 = 3;
                return { value: { status: str2 }, done: true };
              } else {
                let mode;
                if (spec != null) {
                  mode = spec.mode;
                }
                if ("widget" === mode) {
                  c8 = 3;
                  return { value: { status: "unavailable" }, done: true };
                } else {
                  c7 = 1;
                  c8 = 1;
                  const obj7 = { value: waitForPreviewFrameIdentity(id, require("conjurePreviewCall").PREVIEW_FRAME_WAIT_MS), done: false };
                  return obj7;
                }
              }
            }
          } else {
            if (1 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else if (arg0 === 2) {
                c8 = 3;
                return { value, done: true };
              } else {
                closure_3 = value;
                if (null == closure_3) {
                  c8 = 3;
                  return { value: { status: "unavailable" }, done: true };
                } else if (null == onAccepted) {
                  obj10 = { uploadToken: "r" };
                } else {
                  c7 = 2;
                  c8 = 1;
                  const obj11 = { value: onAccepted(), done: false };
                  return obj11;
                }
              }
            } else if (2 === c7) {
              if (arg0 === 1) {
                c8 = 3;
                throw value;
              } else {
                obj10 = value;
                if (arg0 === 2) {
                  c8 = 3;
                  return { value, done: true };
                }
              }
            } else if (3 === c7) {
              let obj13;
              c6 = 0;
              if (tmp45 instanceof closure_132_0(closure_132_3[11]).PreviewFrameCallTimeout) {
                obj13 = { status: "failed" };
              } else {
                obj13 = { status: "unavailable" };
              }
              c8 = 3;
              return { value: obj13, done: true };
            } else if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              c8 = 3;
              return { value, done: true };
            } else {
              tmp45 = value;
              if ("accepted" === tmp45.phase) {
                obj = { status: "accepted" };
              } else {
                obj = { status: "failed", code: tmp45.code, message: tmp45.error };
              }
              c6 = 0;
              c8 = 3;
              return { value: obj, done: true };
            }
            if (null == obj10) {
              c8 = 3;
              return { value: { status: "unavailable" }, done: true };
            } else {
              let obj20;
              c6 = 1;
              if (null == spec) {
                obj18 = {};
              } else {
                obj18 = { spec };
              }
              const obj19 = {};
              obj18 = Object.assign(obj18);
              if (null == obj10.uploadToken) {
                obj20 = {};
              } else {
                obj20 = { uploadToken: obj10.uploadToken };
              }
              const merged = Object.assign(obj20);
              const obj21 = { id, timeoutMs: closure_132_0(closure_132_3[11]).CAPTURE_NOW_ACCEPT_TIMEOUT_MS, retryMs: obj18 };
              obj18 = closure_132_0(closure_132_3[11]).CAPTURE_NOW_RETRY_MS;
              c7 = 4;
              c8 = 1;
              const obj22 = { value: closure_132_16(closure_3, "capture-now", obj19, obj21), done: false };
              return obj22;
            }
          }
        } catch (tmp45) {
          if (0 === c6) {
            c8 = 3;
            throw tmp45;
          } else {
            c7 = 3;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
obj = function _inspectConjurePreviewPoint() {
  obj = _asyncToGenerator(async (arg0, arg1) => {
    let closure_0 = arg0;
    let closure_1 = arg1;
    if (c6 === 2) {
      c6 = 3;
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
      let c4;
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
            let closure_3 = tmp;
            let closure_2 = tmp4;
            closure_0 = undefined;
            const tmp20 = previewFrameIdentity(closure_0);
            if (null == tmp20) {
              c6 = 3;
              const obj4 = { value: { status: "failed" }, done: true };
              return obj4;
            } else {
              c4 = 1;
              const obj9 = require("conjureInspectPoint");
              const result = obj9.inspectPreviewPointRequest(closure_1);
              const obj5 = { id: "inspect-" + sum + "-" + Date.now(), timeoutMs: require("conjurePreviewCall").INSPECT_ANSWER_TIMEOUT_MS, retryMs: require("conjurePreviewCall").CONTROL_RETRY_MS };
              sum = sum + 1;
              const _Date = Date;
              const _HermesInternal = HermesInternal;
              c5 = 2;
              c6 = 1;
              const obj6 = { value: callNativePreviewFrame(tmp20, "control", result, obj5), done: false };
              return obj6;
            }
          }
        } else if (1 === c5) {
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
          closure_0 = value;
          c4 = 0;
          c6 = 3;
          const obj10 = { value: obj.inspectResultFromResponse(closure_0), done: true };
          obj = closure_131_0(closure_131_3[14]);
          return obj10;
        }
      } catch (tmp10) {
        if (0 === c4) {
          c6 = 3;
          throw tmp10;
        } else {
          c5 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
obj = function _relayPreviewControl() {
  obj = _asyncToGenerator(async (arg0, id, arg2, arg3) => {
    let closure_6;
    let closure_7;
    let closure_0 = arg0;
    let closure_2 = arg2;
    let closure_3 = arg3;
    let c9 = 0;
    let c10 = 0;
    let c8 = 0;
    return (async (arg0, value, arg2, arg3) => {
      let obj22;
      if (c10 === 2) {
        c10 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let tmp77;
        try {
          let closure_5;
          let tmp;
          c10 = 2;
          if (0 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              c10 = 3;
              return { value, done: true };
            } else {
              closure_4 = undefined;
              closure_5 = undefined;
              tmp = undefined;
              tmp77 = undefined;
              native = undefined;
              if (previewFrameHeld(closure_0)) {
                const obj16 = require("conjurePreviewControlLease");
                closure_4 = obj16.acquireConjureControlLease(closure_0);
                native = 2;
                endResult = waitForPreviewFrameIdentity(closure_0, require("conjurePreviewCall").PREVIEW_FRAME_WAIT_MS);
                c9 = 3;
                c10 = 1;
                return { value: endResult, done: false };
              } else {
                c10 = 3;
                return { value: { status: "unavailable" }, done: true };
              }
            }
          } else if (1 === c9) {
            native = 0;
            endResult = closure_4();
            throw tmp77;
          } else if (2 === c9) {
            endResult = tmp77;
            native = 1;
            if (tmp77 instanceof closure_134_0(closure_134_3[11]).PreviewFrameCallTimeout) {
              endResult = { status: "failed", message: "the preview frame did not answer the control batch" };
            } else {
              endResult = { status: "unavailable" };
            }
            native = 0;
            closure_4();
            c10 = 3;
            return { value: endResult, done: true };
          } else if (3 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value, done: true };
            } else {
              closure_5 = value;
              if (null == closure_5) {
                native = 0;
                closure_4();
                c10 = 3;
                return { value: { status: "unavailable" }, done: true };
              } else {
                endResult = undefined;
                if (closure_3 != null) {
                  endResult = closure_3();
                }
                c9 = 4;
                c10 = 1;
                return { value: endResult, done: false };
              }
            }
          } else if (4 === c9) {
            if (arg0 === 1) {
              c10 = 3;
              throw value;
            } else if (arg0 === 2) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value, done: true };
            } else if (false === value) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value: { status: "unavailable" }, done: true };
            } else if ("desktop" === closure_2.viewport) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value: { status: "failed", message: "the phone preview has no desktop lens" }, done: true };
            } else if ("landscape" === closure_2.orientation) {
              native = 0;
              closure_4();
              c10 = 3;
              return { value: { status: "failed", message: "the phone preview cannot turn sideways" }, done: true };
            } else {
              const obj20 = closure_134_0(closure_134_3[16]);
              tmp = obj20.beginNativeSurfaceSessionForFrame(closure_5, closure_2.native);
              native = 3;
              const obj13 = { id, timeoutMs: obj22.controlAnswerTimeoutMs(closure_2), retryMs: closure_134_0(closure_134_3[11]).CONTROL_RETRY_MS };
              c9 = 6;
              c10 = 1;
              obj22 = closure_134_0(closure_134_3[11]);
              const obj14 = { value: closure_134_16(closure_5, "control", closure_2, obj13), done: false };
              return obj14;
            }
          } else if (5 === c9) {
            native = 2;
            endResult = tmp.end();
            throw tmp77;
          } else if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            endResult = tmp;
            tmp.end();
            native = 0;
            closure_4();
            c10 = 3;
            return { value, done: true };
          } else {
            tmp77 = value;
            if (typeof tmp77.ok === "boolean") {
              const _Array = Array;
              endResult = Array.isArray;
              if (endResult(tmp77.results)) {
                let obj17;
                closure_4 = 0;
                endResult = [];
                closure_4 = HermesBuiltin.arraySpread(endResult, closure_134_22.drain(closure_0), closure_4);
                closure_4 = HermesBuiltin.arraySpread(endResult, tmp.drain(), closure_4);
                native = endResult;
                if (0 === native.length) {
                  obj17 = tmp77;
                } else {
                  obj17 = { native };
                  const merged = Object.assign(tmp77);
                  endResult = native;
                }
                endResult = { status: "completed", response: obj17 };
                tmp.end();
                native = 0;
                closure_4();
                c10 = 3;
                return { value: endResult, done: true };
              }
            }
            endResult = tmp;
            tmp.end();
            native = 0;
            closure_4();
            c10 = 3;
            return { value: { status: "failed", message: "the preview frame returned a malformed control result" }, done: true };
          }
        } catch (tmp77) {
          if (0 === native) {
            c10 = 3;
            throw tmp77;
          } else if (1 === native) {
            c9 = 1;
          } else if (2 === native) {
            c9 = 2;
          } else {
            c9 = 5;
          }
        }
      }
    })();
  });
  return obj(...arguments);
};
({ isLaunched: metroImportAll, MAIN_SURFACE: c9, makeFrameId: c10 } = FramesConstants);
const LocalNotificationTypes = Constants.LocalNotificationTypes;
const items = [OAuth2Scopes.OAuth2Scopes.BOT, OAuth2Scopes.OAuth2Scopes.APPLICATIONS_COMMANDS];
let c18 = 0;
let c21 = 0;
let result = conjurePreviewControlLease.subscribeConjureControlReleased(function(arg0) {
  let c0;
  let closure_4;
  let obj3;
  let sum;
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
    obj = { id: "control-end-" + sum + "-" + Date.now(), timeoutMs: require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS, retryMs: require("conjurePreviewCall").CONTROL_RETRY_MS };
    sum = c21 + 1;
    c21 = sum;
    const _Date = Date;
    const _HermesInternal = HermesInternal;
    _require = "control-end";
    obj3 = undefined;
    const obj2 = require("conjurePreviewCall");
    const previewCallTypesResult = obj2.previewCallTypes("control-end");
    let c2 = previewCallTypesResult;
    obj3 = { type: previewCallTypesResult.request, id: obj.id };
    const merged = Object.assign({});
    const obj4 = require("WebView");
    const webViewProxy = obj4.getWebViewProxy(tmp3);
    const _Date2 = Date;
    const timestamp = Date.now();
    const self = this;
    const self2 = this;
    const promise = new Promise((arg0, arg1) => {
      let closure_3;
      const f151477 = () => {

      };
      let closure_0 = arg0;
      let closure_1 = arg1;
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
          const tmp7 = _null;
          const tmp8 = obj;
          if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
            if (null != _null) {
              const _clearInterval = clearInterval;
              clearInterval(_null);
            }
            _null = null;
          } else {
            const tmp4Result = conjurePreviewCall;
            if (tmp4Result.isResultEnvelope(parsed, tmp7.result, tmp8.id)) {
              cleanup();
              closure_0(parsed);
            }
          }
        } catch (err) {
        }
      });
      let injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(timeout));
      injectJavaScriptResult.catch(f151477);
      const interval = setInterval(function post() {
        const injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(closure_3));
        injectJavaScriptResult.catch(f151477);
      }, closure_1.retryMs);
    });
    promise.catch(() => {

    });
  }
});
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
      tmp8 = { applicationId: prop, launched: closure_8(frame) };
      const obj2 = { applicationId: prop, launched: closure_8(frame) };
    }
    tmp3 = tmp8;
  }
  let launched;
  if (tmp3 != null) {
    launched = tmp3.launched;
  }
  let tmp11 = null;
  if (true === launched) {
    tmp11 = { applicationId: tmp3.applicationId };
    const obj3 = { applicationId: tmp3.applicationId };
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
    return {
      identity: tmp13,
      dismiss() {

        },
      open() {
          obj = conjurePreviewNativeSurfaces;
          return obj.beginNativeSurfaceSessionForFrame(iframeId, undefined, { beneathBatches: true });
        }
    };
  }
});
obj = {
  openConjureAppInstallModal(application) {
    let applicationId;
    let deserializeResult;
    let guildId;
    let onClose;
    let scopes;
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
    const tmp7 = ApplicationUtils;
    const openOAuth2Modal = tmp7.openOAuth2Modal;
    obj = {
      clientId: applicationId,
      guildId,
      disableGuildSelect: true,
      integrationType: ApplicationIntegrationType.ApplicationIntegrationType.GUILD_INSTALL,
      scopes,
      permissions: deserializeResult,
      callback() {
        return true;
      },
      dismissOAuthModal: onClose
    };
    scopes = undefined;
    if (oauth2InstallParams != null) {
      scopes = oauth2InstallParams.scopes;
    }
    if (scopes == null) {
      scopes = items;
    }
    let permissions;
    if (oauth2InstallParams != null) {
      permissions = oauth2InstallParams.permissions;
    }
    deserializeResult = undefined;
    if (null != permissions) {
      const deserializer = BigFlagUtilsAll;
      deserializeResult = deserializer.deserialize(oauth2InstallParams.permissions);
    }
    openOAuth2Modal(obj);
    return Promise.resolve();
  },
  isWindowFocused() {
    return "active" === AppStateStore.getState();
  },
  areTurnNotificationsDisabled() {
    return false;
  },
  presentTurnNotification(arg0) {
    let body;
    let guildId;
    let obj2;
    let obj4;
    let projectId;
    let title;
    ({ projectId, guildId } = arg0);
    ({ title, body } = arg0);
    obj = { category: "local", alertTitle: title, alertBody: body, userInfo: obj2 };
    const presentLocalNotification = PushNotificationDefault.presentLocalNotification;
    obj2 = { type: LocalNotificationTypes.CONJURE, projectId, channel_id: projectId };
    PushNotificationDefault;
    if (null != guildId) {
      obj4 = { guildId };
      const obj3 = { guildId };
    } else {
      obj4 = {};
    }
    const merged = Object.assign(obj4);
    const result = presentLocalNotification(obj);
  },
  relayPreviewCapture() {
    return obj(...arguments);
  },
  relayPreviewControl() {
    return obj(...arguments);
  },
  abortPreviewControl(projectId) {
    let c0;
    let obj3;
    let sum;
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
      obj = { id: "control-abort-" + sum + "-" + Date.now(), timeoutMs: require("conjurePreviewCall").CONTROL_END_TIMEOUT_MS, retryMs: require("conjurePreviewCall").CONTROL_RETRY_MS };
      sum = c21 + 1;
      c21 = sum;
      const _Date = Date;
      const _HermesInternal = HermesInternal;
      _require = "control-abort";
      obj3 = undefined;
      const obj2 = require("conjurePreviewCall");
      const previewCallTypesResult = obj2.previewCallTypes("control-abort");
      let c2 = previewCallTypesResult;
      obj3 = { type: previewCallTypesResult.request, id: obj.id };
      const merged = Object.assign({});
      const obj4 = require("WebView");
      const webViewProxy = obj4.getWebViewProxy(tmp3);
      const _Date2 = Date;
      const timestamp = Date.now();
      const self = this;
      const self2 = this;
      const promise = new Promise((arg0, arg1) => {
        let closure_3;
        const f151477 = () => {

        };
        let closure_0 = arg0;
        let closure_1 = arg1;
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
            const tmp7 = _null;
            const tmp8 = obj;
            if (obj.isResultEnvelope(parsed, _null.ack, obj.id)) {
              if (null != _null) {
                const _clearInterval = clearInterval;
                clearInterval(_null);
              }
              _null = null;
            } else {
              const tmp4Result = conjurePreviewCall;
              if (tmp4Result.isResultEnvelope(parsed, tmp7.result, tmp8.id)) {
                cleanup();
                closure_0(parsed);
              }
            }
          } catch (err) {
          }
        });
        let injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(timeout));
        injectJavaScriptResult.catch(f151477);
        const interval = setInterval(function post() {
          const injectJavaScriptResult = closure_4.injectJavaScript(obj(obj3[13])(closure_3));
          injectJavaScriptResult.catch(f151477);
        }, closure_1.retryMs);
      });
      const catchPromise = promise.catch(() => {

      });
    }
  },
  releasePreviewControl(projectId) {
    obj = conjurePreviewControlLease;
    const result = obj.releaseConjureControlLeases(projectId);
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
const result1 = size.fileFinishedImporting("modules/conjure/shared/ConjurePlatformUtils.native.tsx");

export default obj;
export const inspectConjurePreviewPoint = function inspectConjurePreviewPoint() {
  return obj(...arguments);
};