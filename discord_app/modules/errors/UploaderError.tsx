// === Module 12252: UploaderError ===

// Module 12252 (UploaderError)
import APIError from "APIError" /* 4657 */;

const prototype = function UploaderError(body, arg1) {
  const tmp2 = new tmp(body, arg1, new.target, tmp, new.target);
  tmp2.attachments = [];
  if (tmp3) {
    tmp2.attachments = body.body.attachments;
  }
  return tmp2;
}.prototype;
class prototype extends tmp2 {
}
const size = fn(2);
const result = size.fileFinishedImporting("modules/errors/UploaderError.tsx");

export default prototype;