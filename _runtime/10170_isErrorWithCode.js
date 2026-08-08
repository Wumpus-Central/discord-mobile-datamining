// _runtime/10170_isErrorWithCode.js
arg5.errorCodes = Object.freeze({ OPERATION_CANCELED: "OPERATION_CANCELED", IN_PROGRESS: "ASYNC_OP_IN_PROGRESS", UNABLE_TO_OPEN_FILE_TYPE: "UNABLE_TO_OPEN_FILE_TYPE", NULL_PRESENTER: "NULL_PRESENTER" });
arg5.isErrorWithCode = (obj) => {
  let tmp = obj instanceof Error;
  if (!tmp) {
    let tmp2 = typeof obj === "object";
    if (typeof obj === "object") {
      tmp2 = null != obj;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = "code" in obj;
  }
  return tmp;
};