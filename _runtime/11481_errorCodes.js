// === Module 11481: errorCodes ===

// Module 11481 (errorCodes)

export const errorCodes = Object.freeze({ OPERATION_CANCELED: "OPERATION_CANCELED", IN_PROGRESS: "ASYNC_OP_IN_PROGRESS", UNABLE_TO_OPEN_FILE_TYPE: "UNABLE_TO_OPEN_FILE_TYPE", NULL_PRESENTER: "NULL_PRESENTER" });
export const isErrorWithCode = (error) => {
  let tmp = error instanceof Error;
  if (!tmp) {
    let tmp2 = typeof error === "object";
    if (typeof error === "object") {
      tmp2 = null != error;
    }
    tmp = tmp2;
  }
  if (tmp) {
    tmp = "code" in error;
  }
  return tmp;
};