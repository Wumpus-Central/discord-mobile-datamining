// === Module 13186: vibegrationsInspectPoint ===

// Module 13186 (vibegrationsInspectPoint)
import vibegrationsPreviewCall from "vibegrationsPreviewCall" /* 9567 */;
import size from "module_2" /* 2 */;

function targetFromPreviewElement(element) {
  if (null != element) {
    if (typeof element.ref === "string") {
      if (typeof element.tag === "string") {
        const rect = element.rect;
        if (null != rect) {
          if (typeof rect.x === "number") {
            if (typeof rect.y === "number") {
              if (typeof rect.width === "number") {
                if (typeof rect.height === "number") {
                  const obj2 = { ref: element.ref, role: null, name: null, tag: null, rect: null };
                  let str3 = "";
                  if (typeof element.role === "string") {
                    str3 = element.role;
                  }
                  obj2.role = str3;
                  let str = "";
                  if (typeof element.name === "string") {
                    str = element.name;
                  }
                  obj2.name = str;
                  obj2.tag = element.tag;
                  const size = { x: null, y: null, width: null, height: null };
                  ({ x: obj.x, y: obj.y, width: obj.width, height: obj.height } = rect);
                  obj2.rect = size;
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
const result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsInspectPoint.tsx");

export { targetFromPreviewElement };
export const inspectPreviewPointRequest = function inspectPreviewPointRequest(arg0) {
  const obj = { steps: null, timeoutMs: vibegrationsPreviewCall.INSPECT_TIMEOUT_MS, passive: true };
  const point = { action: "inspect", x: arg0.x, y: arg0.y };
  const items = [point];
  obj.steps = items;
  return obj;
};
export const inspectResultFromResponse = function inspectResultFromResponse(results) {
  results = undefined;
  if (results != null) {
    results = results.results;
  }
  let first;
  if (Array.isArray(results)) {
    first = results.results[0];
  }
  if (null == first) {
    return { status: "failed" };
  } else if (first.ok) {
    const tmp4 = targetFromPreviewElement(first.element);
    if (null == tmp4) {
      let obj2 = { status: "failed" };
    } else {
      obj2 = { status: "picked", target: tmp4 };
    }
    return obj2;
  } else {
    if ("not_found" === first.code) {
      let obj = { status: "none" };
    } else {
      obj = "invalid_command" === first.code ? { status: "unsupported" } : { status: "failed" };
    }
    return obj;
  }
};