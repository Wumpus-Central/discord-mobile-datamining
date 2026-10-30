// === Module 12790: create ===

// Module 12790 (create)
import dumpMapSyntax from "dumpMapSyntax" /* 12813 */;
import _mod12832 from "module_12832" /* 12832 */;

require = arg1;
const dependencyMap = arg6;
function createSyntax(types) {
  _require = types;
  const arr = require("module_12803")(types);
  const tmp = require("module_12791")(types);
  let tmp3 = require("module_12812")(arr);
  obj = {
    List: require("module_12800"),
    SyntaxError: require("sourceFragment"),
    TokenStream: require("TokenStream"),
    Lexer: require("dumpMapSyntax"),
    vendorPrefix: require("module_12827").vendorPrefix,
    keyword: require("module_12827").keyword,
    property: require("module_12827").property,
    isCustomProperty: require("module_12827").isCustomProperty,
    definitionSyntax: require("module_12830"),
    lexer: null,
    createLexer(arg0) {
      return new dumpMapSyntax(arg0, obj, obj.lexer.structure);
    },
    tokenize: require("module_12798"),
    parse: tmp,
    walk: arr,
    generate: require("processChildren")(types),
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("module_12831"),
    fromPlainObject: tmp3.fromPlainObject,
    toPlainObject: tmp3.toPlainObject,
    createSyntax(arg0) {
      return createSyntax(types(obj[12])({}, arg0));
    },
    fork(fn) {
      const tmp3 = _mod12832({}, closure_0);
      if (typeof fn === "function") {
        const _Object = Object;
        let tmp6 = fn(tmp3, Object.assign);
      } else {
        tmp6 = _mod12832(tmp3, fn);
      }
      return createSyntax(tmp6);
    }
  };
  const obj2 = { generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node };
  const tmp2 = require("processChildren")(types);
  obj.lexer = new require("dumpMapSyntax")({ generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node }, obj);
  return obj;
}

export (arg0) => createSyntax(_mod12832({}, arg0))