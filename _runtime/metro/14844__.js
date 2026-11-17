// _runtime/metro/14844__.js
import dumpMapSyntax from "../14867_dumpMapSyntax.js";
import _mod14886 from "14886__.js";

require = arg1;
const dependencyMap = arg6;
function createSyntax(types) {
  _require = types;
  const arr = require("14857__.js")(types);
  const tmp = require("14845__.js")(types);
  let tmp3 = require("14866__.js")(arr);
  obj = {
    List: require("14854__.js"),
    SyntaxError: require("sourceFragment"),
    TokenStream: require("TokenStream"),
    Lexer: require("dumpMapSyntax"),
    vendorPrefix: require("14881__.js").vendorPrefix,
    keyword: require("14881__.js").keyword,
    property: require("14881__.js").property,
    isCustomProperty: require("14881__.js").isCustomProperty,
    definitionSyntax: require("14884__.js"),
    lexer: null,
    createLexer(arg0) {
      return new dumpMapSyntax(arg0, obj, obj.lexer.structure);
    },
    tokenize: require("14852__.js"),
    parse: tmp,
    walk: arr,
    generate: require("processChildren")(types),
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("14885__.js"),
    fromPlainObject: tmp3.fromPlainObject,
    toPlainObject: tmp3.toPlainObject,
    createSyntax(arg0) {
      return createSyntax(types(obj[12])({}, arg0));
    },
    fork(fn) {
      const tmp3 = _mod14886({}, closure_0);
      if (typeof fn === "function") {
        const _Object = Object;
        let tmp6 = fn(tmp3, Object.assign);
      } else {
        tmp6 = _mod14886(tmp3, fn);
      }
      return createSyntax(tmp6);
    }
  };
  const obj2 = { generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node };
  const tmp2 = require("processChildren")(types);
  obj.lexer = new require("dumpMapSyntax")({ generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node }, obj);
  return obj;
}

export (arg0) => createSyntax(_mod14886({}, arg0))