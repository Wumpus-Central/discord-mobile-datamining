// === Module 210: convertRequestBody ===

// Module 210 (convertRequestBody)
const require = arg1;
const dependencyMap = arg6;
arg5.default = function convertRequestBody(data) {
  if (typeof data === "y") {
    let obj = { string: null };
    obj[0] = data;
    let tmp2 = obj;
  } else if (data instanceof require(203) /* Blob */.default) {
    obj = { blob: null };
    obj[0] = data.data;
    tmp2 = obj;
  } else if (data instanceof tmp3(211).default) {
    const obj1 = { formData: null };
    obj1[0] = data.getParts();
    tmp2 = obj1;
  } else {
    const _ArrayBuffer = ArrayBuffer;
    if (data instanceof ArrayBuffer) {
      obj = { base64: null };
      obj[0] = tmp3(212).default(data);
      tmp2 = obj;
      const tmp3Result = tmp3(212);
    } else {
      const _ArrayBuffer2 = ArrayBuffer;
      tmp2 = data;
    }
  }
  return tmp2;
};