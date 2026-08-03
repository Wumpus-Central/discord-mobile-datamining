
export default function _readOnlyError(arg0) {
  const typeError = new TypeError("\"" + arg0 + "\" is read-only");
  throw typeError;
};