// === Module 10993: conjurePreviewConnection ===

// Module 10993 (conjurePreviewConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import conjureChatConnection from "conjureChatConnection" /* 10980 */;
import conjureProjectSockets from "conjureProjectSockets" /* 10982 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10983 */;
import ConjurePreviewActionCreators from "ConjurePreviewActionCreators" /* 10994 */;
import ConjurePlatformUtilsDefault from "ConjurePlatformUtils" /* 10996 */;
import conjurePreviewControlLease from "conjurePreviewControlLease" /* 11016 */;
import conjurePreviewClaims from "conjurePreviewClaims" /* 11035 */;
import ConjurePublishActionCreators from "ConjurePublishActionCreators" /* 11036 */;
import conjureMediaTickets from "conjureMediaTickets" /* 11041 */;
import conjureWorkerFetch from "conjureWorkerFetch" /* 11044 */;
import conjurePreviewModeRequests from "conjurePreviewModeRequests" /* 11045 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;

require = fn;
let closure_4 = async function _getPreviewScreenshotUrl() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await conjureMediaTickets.getMediaTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  closure_130_4 = uRLSearchParams;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  return "" + baseUrl + "/agent/screenshots/" + encodeURIComponent(closure_130_0) + "?" + closure_130_4;
};
let closure_5 = async function _uploadOverlayBackground(arg0) {
  closure_0 = arg0;
  c3 = 0;
  c4 = 0;
  return (async (arg0, value) => {
    if (c4 === 2) {
      c4 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c4 = 2;
        if (0 === c3) {
          if (arg0 === 1) {
            c4 = 3;
            throw value;
          } else if (arg0 === 2) {
            c4 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_2 = tmp2;
            closure_130_0 = undefined;
            const request = { method: "PUT", body };
            c3 = 1;
            c4 = 1;
            const obj5 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/overlay-background", request), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          closure_130_0 = value;
          if (closure_130_0.ok) {
            c4 = 3;
            return { value: "IconComponent", done: null };
          } else {
            const _Error = Error;
            const _HermesInternal = HermesInternal;
            const error = new Error("overlay background upload failed (" + closure_130_0.status + ")");
            throw error;
          }
        }
      } catch (tmp19) {
        c4 = tmp;
        throw tmp19;
      }
    }
  })();
};
let closure_6 = async function _resetOverlayBackground(arg0) {
  if (c3 === 2) {
    c3 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp2;
          closure_129_0 = undefined;
          c2 = 1;
          c3 = 1;
          const obj5 = { value: conjureWorkerFetch.fetchConjureWorker(closure_0, "/agent/overlay-background", { method: "DELETE" }), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        closure_129_0 = value;
        if (closure_129_0.ok) {
          c3 = 3;
          return { value: "IconComponent", done: null };
        } else {
          const _Error = Error;
          const _HermesInternal = HermesInternal;
          const error = new Error("overlay background reset failed (" + closure_129_0.status + ")");
          throw error;
        }
      }
    } catch (tmp18) {
      c3 = tmp;
      throw tmp18;
    }
  }
};
let closure_7 = async function _getOverlayBackgroundUrl() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await conjureMediaTickets.getMediaTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, v: closure_130_0 });
  const _HermesInternal = HermesInternal;
  return "" + closure_130_1.baseUrl + "/agent/overlay-background?" + uRLSearchParams;
};
let closure_8 = async function _relayCaptureRequest(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let probe = arg2;
  c4 = 0;
  c7 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    closure_3 = tmp4;
    closure_131_0 = closure_0;
    closure_131_1 = closure_1;
    closure_131_2 = probe;
    const _Date = Date;
    const timestamp = Date.now();
    let tmp20 = true !== probe.probe;
    if (tmp20) {
      const spec = probe.spec;
      let mode;
      if (spec != null) {
        mode = spec.mode;
      }
      tmp20 = "widget" === mode;
    }
    if (tmp20) {
      const conjurePreviewMode = conjurePreviewModeRequests.requestConjurePreviewMode(closure_0, "widget");
      conjurePreviewModeRequests;
    }
    const obj7 = { probe: null, spec: null, build: null, onAccepted: null, resolveUploadUrl: null };
    ({ probe: obj4.probe, spec: obj4.spec, build: obj4.build } = probe);
    closure_131_4 = asyncGeneratorStep(async () => {
      closure_2_1.sendCaptureAck(user.id, "accepted");
      await v3(closure_1_2[3]).awaitConjurePreviewClaim(closure_2_0, user.id);
      return value;
    });
    obj7.onAccepted = function onAccepted() {
      const self = this;
      const apply = closure_1_4.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    };
    obj7.resolveUploadUrl = function resolveUploadUrl() {
      return (function getClientCaptureUploadUrl() {
        const self = this;
        const apply = closure_1_10.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(closure_1_0);
    };
    await ConjurePlatformUtilsDefault.relayPreviewCapture(closure_0, probe.id, obj7);
    if (1 === tmp7) {
      c6 = 0;
      closure_131_3 = { status: "failed" };
      closure_131_1.sendCaptureAck(closure_131_2.id, closure_131_3.status, closure_131_3.code, closure_131_3.message);
      c7 = 3;
    } else if (arg0 === 1) {
      c7 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_131_3 = value;
      c6 = 0;
    }
    return value;
  })();
};
let closure_9 = async function _relayControlRequest(arg0) {
  closure_131_0 = closure_0;
  closure_131_1 = closure_1;
  closure_131_2 = user;
  const _Date = Date;
  const timestamp = Date.now();
  ({ id, request } = user);
  await ConjurePlatformUtilsDefault.relayPreviewControl(closure_0, id, request, asyncGeneratorStep(async () => {
    closure_2_1.sendControlAck(user.id, "accepted");
    await v3(closure_1_2[3]).awaitConjurePreviewClaim(closure_2_0, user.id);
    return null != value;
  }));
  if (1 === tmp6) {
    c6 = 0;
    closure_131_1.sendControlAck(closure_131_2.id, "failed", undefined, "the client could not drive the preview frame");
    c7 = 3;
  } else if (arg0 === 1) {
    c7 = 3;
    throw value;
  } else if (arg0 !== 2) {
    closure_131_3 = value;
    if ("completed" === closure_131_3.status) {
      closure_131_1.sendControlAck(closure_131_2.id, "completed", closure_131_3.response);
    } else if ("failed" === closure_131_3.status) {
      closure_131_1.sendControlAck(closure_131_2.id, "failed", undefined, closure_131_3.message);
    } else {
      closure_131_1.sendControlAck(closure_131_2.id, "unavailable");
    }
    c6 = 0;
  }
  return value;
};
let closure_10 = async function _getClientCaptureUploadUrl() {
  closure_1 = tmp2;
  await conjureMediaTickets.getMediaTicket(closure_0);
  closure_129_0 = value;
  const ticket = closure_129_0.ticket;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket });
  const _HermesInternal = HermesInternal;
  return "" + closure_129_0.baseUrl + "/agent/screenshots?" + uRLSearchParams;
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewConnection.tsx");

export const previewFrameHandlers = {
  capture_preview(probe, projectId) {
    projectId = projectId.projectId;
    let tmp = true !== probe.probe;
    if (tmp) {
      const spec = probe.spec;
      let mode;
      if (spec != null) {
        mode = spec.mode;
      }
      tmp = "widget" !== mode;
    }
    if (tmp) {
      ConjurePreviewActionCreators.wakeConjurePreview(projectId);
    }
    (function relayCaptureRequest() {
      const self = this;
      const apply = closure_1_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, projectId.ws, probe).catch(() => {

    });
    const promise = (function relayCaptureRequest() {
      const self = this;
      const apply = closure_1_8.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, projectId.ws, probe);
  },
  control_preview(arg0, projectId) {
    projectId = projectId.projectId;
    ConjurePreviewActionCreators.wakeConjurePreview(projectId);
    (function relayControlRequest() {
      const self = this;
      const apply = closure_1_9.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    })(projectId, projectId.ws, arg0).catch(() => {

    });
  },
  control_abort(arg0, projectId) {
    ConjurePlatformUtilsDefault.abortPreviewControl(projectId.projectId);
  },
  control_claim(id, projectId) {
    const conjurePreviewClaim = conjurePreviewClaims.resolveConjurePreviewClaim(projectId.projectId, id.id);
  },
  capture_claim(id, projectId) {
    const conjurePreviewClaim = conjurePreviewClaims.resolveConjurePreviewClaim(projectId.projectId, id.id, id.upload_token);
  },
  preview_operation(phase, projectId) {
    projectId = projectId.projectId;
    if ("begin" === phase.phase) {
      ConjurePreviewActionCreators.wakeConjurePreview(projectId);
      const result = conjurePreviewControlLease.setConjureControlTuning(projectId, "tuning" === phase.mode);
      const result1 = ConjurePlatformUtilsDefault.beginPreviewOperation(projectId);
    } else {
      const result2 = conjurePreviewControlLease.setConjureControlTuning(projectId, false);
      ConjurePlatformUtilsDefault.endPreviewOperation(projectId);
    }
  },
  overlay_background(blur, projectId) {
    DispatcherDefault.dispatch({ type: "CONJURE_OVERLAY_BACKGROUND_SET", projectId: projectId.projectId, blur: blur.blur, imageEtag: blur.image_etag });
  }
};
export const previewStepHandlers = {
  preview_ready(integration_installed, projectId) {
    projectId = projectId.projectId;
    conjureChatConnection.appendTurnStep(projectId, integration_installed);
    let tmp4;
    if (null != integration_installed.integration_installed) {
      if (null != integration_installed.bot_permissions_changed) {
        ({ integration_installed: obj2.integrationInstalled, bot_permissions_changed: obj2.botPermissionsChanged } = integration_installed);
        tmp4 = { integrationInstalled: null, botPermissionsChanged: null };
        const obj3 = { integrationInstalled: null, botPermissionsChanged: null };
      }
    }
    if (tmp5) {
      const obj5 = {};
      const merged = Object.assign(tmp4);
      ({ project: obj4.project, has_activity: obj4.hasActivity } = integration_installed);
      const result = ConjureActionCreators.applyPublishedPreview(projectId, obj5);
      const tmpResult = ConjureActionCreators;
    }
    tmp5 = null != tmp4 && null != integration_installed.project && null != integration_installed.has_activity;
    const result1 = ConjurePublishActionCreators.refreshPublishedProject(projectId, { isPreview: true, install: tmp4 });
    result1.catch(() => {

    });
    const tmpResult2 = ConjurePublishActionCreators;
  }
};
export const sendOverlayBackgroundBlur = function sendOverlayBackgroundBlur(projectId, arg1) {
  const conjureSocket = conjureProjectSockets.getConjureSocket(projectId);
  if (null == conjureSocket) {
    return false;
  } else {
    try {
      const result = conjureSocket.sendOverlayBackgroundBlur(arg1);
      return true;
    } catch (err) {
      return false;
    }
  }
};
export const getPreviewScreenshotUrl = function getPreviewScreenshotUrl() {
  const self = this;
  const apply = closure_4.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const uploadOverlayBackground = function uploadOverlayBackground() {
  const self = this;
  const apply = closure_5.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const resetOverlayBackground = function resetOverlayBackground() {
  const self = this;
  const apply = closure_6.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const getOverlayBackgroundUrl = function getOverlayBackgroundUrl() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};