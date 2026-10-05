// _runtime/metro/07778__.js
import decodeAstJson2 from "../07779_decodeAstJson.js";
import react_nativeDefault from "../07780_react-native.js";

export const parse = function parse(arg0, arg1, arg2) {
  const decodeAstJson = decodeAstJson2.decodeAstJson;
  decodeAstJson2;
  let json;
  const parseToAstString = react_nativeDefault.parseToAstString;
  react_nativeDefault;
  if (null != arg1) {
    const _JSON = JSON;
    json = JSON.stringify(arg1);
  }
  return decodeAstJson(parseToAstString(arg0, json, arg2));
};
export const unparse = function unparse(arg0) {
  const unparseFromAstString = react_nativeDefault.unparseFromAstString;
  react_nativeDefault;
  const obj = decodeAstJson2;
  return unparseFromAstString(obj.encodeAstJson(arg0));
};
