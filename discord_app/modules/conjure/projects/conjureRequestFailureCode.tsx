// === Module 11010: conjureRequestFailureCode ===

// Module 11010 (conjureRequestFailureCode)
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/conjureRequestFailureCode.tsx");

export default function conjureRequestFailureCode(body) {
  let code;
  if (body != null) {
    body = body.body;
    if (body != null) {
      code = body.code;
    }
  }
  if (typeof code === "number") {
    return code;
  } else {
    let status;
    if (body != null) {
      status = body.status;
    }
    let tmp3 = null;
    if (typeof status === "number") {
      tmp3 = null;
      if (0 !== status) {
        tmp3 = status;
      }
    }
    return tmp3;
  }
};