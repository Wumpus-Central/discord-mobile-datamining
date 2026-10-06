// === Module 7789: ? ===

// Module 7789
import decodeAstJson2 from "decodeAstJson" /* 7790 */;
import react_nativeDefault from "react-native" /* 7791 */;


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