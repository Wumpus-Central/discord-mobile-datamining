// _runtime/09850_isErrorWithCode.js
arg5.errorCodes = Object.freeze({ OPERATION_CANCELED: "OPERATION_CANCELED", IN_PROGRESS: "ASYNC_OP_IN_PROGRESS", UNABLE_TO_OPEN_FILE_TYPE: "UNABLE_TO_OPEN_FILE_TYPE", NULL_PRESENTER: "NULL_PRESENTER" });
arg5.isErrorWithCode = (arg0) => {
  let tmp = arg0 instanceof Error;
  if (!tmp) {
    let tmp2 = typeof arg0 === "ay";
    if (typeof arg0 !== "window") {
      tmp2 = null != arg0;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = "code" in arg0;
  }
  return tmp;
};