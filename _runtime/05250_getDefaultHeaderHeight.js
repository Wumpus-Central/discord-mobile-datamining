// _runtime/05250_getDefaultHeaderHeight.js
import { Platform } from "get ActivityIndicator";


export default function getDefaultHeaderHeight(arg0, arg1, arg2) {
  let height;
  let width;
  ({ width, height } = arg0);
  return 56 + arg2;
};