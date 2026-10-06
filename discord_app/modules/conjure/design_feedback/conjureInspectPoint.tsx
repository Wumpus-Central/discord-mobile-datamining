// === Module 9005: conjureInspectPoint ===

// Module 9005 (conjureInspectPoint)
import conjurePreviewCall from "conjurePreviewCall" /* 9003 */;
import size_mod from "module_2" /* 2 */;

function targetFromPreviewElement(element) {
  let str;
  let str3;
  if (null != element) {
    if (typeof element.ref === "string") {
      if (typeof element.tag === "string") {
        const rect = element.rect;
        if (null != rect) {
          if (typeof rect.x === "number") {
            if (typeof rect.y === "number") {
              if (typeof rect.width === "number") {
                if (typeof rect.height === "number") {
                  const obj2 = { ref: element.ref, role: str3, name: str, tag: element.tag, rect: size };
                  str3 = "";
                  if (typeof element.role === "string") {
                    str3 = element.role;
                  }
                  str = "";
                  if (typeof element.name === "string") {
                    str = element.name;
                  }
                  size = { x: null, y: null, width: null, height: null };
                  ({ x: obj.x, y: obj.y, width: obj.width, height: obj.height } = rect);
                  if (typeof element.value === "string") {
                    obj2.value = element.value;
                  }
                  const path = element.path;
                  let tmp = typeof path === "string";
                  if (typeof path === "string") {
                    tmp = "" !== element.path;
                  }
                  if (tmp) {
                    obj2.path = element.path;
                  }
                  if (typeof element.marker === "string") {
                    obj2.marker = element.marker;
                  }
                  return obj2;
                }
              }
            }
          }
        }
        return null;
      }
    }
  }
  return null;
}
const frozen = Object.freeze({ x: -1, y: -1 });
let size = size_mod;
const result = size.fileFinishedImporting("modules/conjure/design_feedback/conjureInspectPoint.tsx");

export { targetFromPreviewElement };
export const CONJURE_INSPECT_CLEAR_POINT = frozen;
export const inspectPreviewPointRequest = function inspectPreviewPointRequest(arg0) {
  let items;
  const point = { action: "inspect", x: arg0.x, y: arg0.y };
  const obj = { steps: items, timeoutMs: conjurePreviewCall.INSPECT_TIMEOUT_MS, passive: true };
  items = [point];
  return obj;
};
export const inspectResultFromResponse = function inspectResultFromResponse(results) {
  results = undefined;
  const _Array = Array;
  if (results != null) {
    results = results.results;
  }
  let first;
  if (isArray(results)) {
    first = results.results[0];
  }
  if (null == first) {
    return { status: "failed" };
  } else if (first.ok) {
    let obj2;
    const tmp4 = targetFromPreviewElement(first.element);
    if (null == tmp4) {
      obj2 = { status: "failed" };
    } else {
      obj2 = { status: "picked", target: tmp4 };
    }
    return obj2;
  } else {
    let obj;
    if ("not_found" === first.code) {
      obj = { status: "none" };
    } else {
      obj = "invalid_command" === first.code ? { status: "unsupported" } : { status: "failed" };
    }
    return obj;
  }
};