// === Module 11066: conjurePreviewGameCapture ===

// Module 11066 (conjurePreviewGameCapture)
import conjureMediaTickets from "conjureMediaTickets" /* 11069 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6924 */;
import ConjureBuilderPreviewStore from "ConjureBuilderPreviewStore" /* 11067 */;
import ConjureGameCapturesStore from "ConjureGameCapturesStore" /* 11068 */;

require = fn;
function getGameCaptureUrl() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_7 = async function _getGameCaptureUrl() {
  closure_2 = tmp2;
  closure_130_0 = closure_1;
  await conjureMediaTickets.getMediaTicket(closure_0);
  closure_130_1 = value;
  const ticket = closure_130_1.ticket;
  const baseUrl = closure_130_1.baseUrl;
  const _URLSearchParams = URLSearchParams;
  const uRLSearchParams = new URLSearchParams({ ticket, v: closure_130_0.image_etag });
  closure_130_4 = uRLSearchParams;
  const _encodeURIComponent = encodeURIComponent;
  const _HermesInternal = HermesInternal;
  return "" + baseUrl + "/agent/game-captures/" + encodeURIComponent(closure_130_0.id) + "?" + closure_130_4;
};
let closure_9 = async function _fetchGameCapture() {
  closure_5 = tmp2;
  const _fetch = fetch;
  await getGameCaptureUrl(closure_0, closure_1);
  await fetch(value, { cache: "no-store" });
  closure_133_0 = value;
  if (!closure_133_0.ok) {
    const _Error = Error;
    const _HermesInternal = HermesInternal;
    const error = new Error("game capture fetch failed (" + closure_133_0.status + ")");
    throw error;
  }
  const tmp17 = closure_132_0(closure_132_1[5]);
  closure_3 = tmp17;
  const readFileAsBase64 = tmp17.readFileAsBase64;
  await closure_133_0.blob();
  return readFileAsBase64(value);
};
let closure_10 = async function _loadGameCapture(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_0 = undefined;
          closure_130_1 = undefined;
          const _HermesInternal = HermesInternal;
          const combined = "" + closure_0 + ":" + dependencyMap.id + ":" + dependencyMap.image_etag;
          closure_130_0 = combined;
          value = map.get(combined);
          closure_130_1 = value;
          let tmp26 = value;
          if (null == value) {
            const tmp23 = (function fetchGameCapture() {
              const self = this;
              const apply = closure_1_9.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_0, dependencyMap);
            closure_130_1 = tmp23;
            const result = map.set(combined, tmp23);
            tmp26 = tmp23;
          }
          c5 = 1;
          c6 = 2;
          c7 = 1;
          const obj4 = { value: tmp26, done: false };
          return obj4;
        }
      } else if (1 === tmp8) {
        c5 = 0;
        closure_130_2 = closure_4;
        if (closure_131_8.get(closure_130_0) === closure_130_1) {
          closure_131_8.delete(closure_130_0);
        }
        throw closure_130_2;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj5 = { value, done: true };
        return obj5;
      } else {
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
    } catch (tmp27) {
      closure_4 = tmp27;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp27;
      } else {
        c6 = tmp;
      }
    }
  }
};
function selectedGameCapture(applicationId) {
  if (ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() !== applicationId) {
    return null;
  } else {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    if (null != result) {
      if (result.preview_application_id === applicationId) {
        const selectedCapture = ConjureGameCapturesStore.getSelectedCapture(result.id);
        let tmp6 = null;
        if (null != selectedCapture) {
          const obj = { projectId: result.id, capture: selectedCapture };
          tmp6 = obj;
        }
        return tmp6;
      }
    }
    return null;
  }
}
let closure_12 = async function _readConjurePreviewGameCapture(arg0) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj = { value, done: true };
      return obj;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c4 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj2 = { value, done: true };
          return obj2;
        } else {
          closure_1 = tmp6;
          closure_129_0 = undefined;
          closure_129_1 = undefined;
          const tmp20 = selectedGameCapture(closure_0);
          if (null == tmp20) {
            c4 = 3;
            const obj3 = { value: { status: "capture_failed" }, done: true };
            return obj3;
          } else {
            const capture = tmp20.capture;
            closure_129_0 = capture;
            c3 = 1;
            c2 = 2;
            c4 = 1;
            const obj4 = {
              value: (function loadGameCapture() {
                          const self = this;
                          const apply = closure_1_10.apply;
                          if (typeof apply === "unknown") {
                            let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                          } else {
                            applyArgumentsResult = apply(self, arguments);
                          }
                          return applyArgumentsResult;
                        })(tmp20.projectId, capture),
              done: false
            };
            return obj4;
          }
        }
      } else if (1 === tmp6) {
        c3 = 0;
        c4 = 3;
        const obj5 = { value: { status: "capture_failed" }, done: true };
        return obj5;
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 0;
        c4 = 3;
        const obj6 = { value, done: true };
        return obj6;
      } else {
        closure_129_1 = value;
        const size = { status: "ok", image: closure_129_1, width: closure_129_0.width, height: closure_129_0.height };
        c3 = 0;
        c4 = 3;
        const obj7 = { value: size, done: true };
        return obj7;
      }
    } catch (tmp11) {
      if (tmp3 === c3) {
        c4 = tmp2;
        throw tmp11;
      } else {
        c2 = tmp;
      }
    }
  }
};
const map = new Map();
let size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewGameCapture.tsx");

export { getGameCaptureUrl };
export function hasConjurePreviewGameCapture(applicationId) {
  let tmp = null;
  if (ConjureBuilderPreviewStore.getBuilderPreviewApplicationId() === applicationId) {
    const result = ConjureProjectStore.findProjectByApplicationId(applicationId);
    tmp = null;
    if (null != result) {
      tmp = null;
      if (result.preview_application_id === applicationId) {
        const selectedCapture = ConjureGameCapturesStore.getSelectedCapture(result.id);
        let tmp6 = null;
        if (null != selectedCapture) {
          const obj = { projectId: result.id, capture: selectedCapture };
          tmp6 = obj;
        }
        tmp = tmp6;
      }
    }
  }
  return null != tmp;
}
export function readConjurePreviewGameCapture() {
  const self = this;
  const apply = closure_12.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}