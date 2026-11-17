// === Module 14844: ? ===

// Module 14844
import dumpMapSyntax from "dumpMapSyntax" /* 14867 */;
import _mod14886 from "module_14886" /* 14886 */;

require = arg1;
const dependencyMap = arg6;
function createSyntax(types) {
  _require = types;
  const arr = require("module_14857")(types);
  const tmp = require("module_14845")(types);
  let tmp3 = require("module_14866")(arr);
  obj = {
    List: require("module_14854"),
    SyntaxError: require("sourceFragment"),
    TokenStream: require("TokenStream"),
    Lexer: require("dumpMapSyntax"),
    vendorPrefix: require("module_14881").vendorPrefix,
    keyword: require("module_14881").keyword,
    property: require("module_14881").property,
    isCustomProperty: require("module_14881").isCustomProperty,
    definitionSyntax: require("module_14884"),
    lexer: null,
    createLexer(arg0) {
      return new dumpMapSyntax(arg0, obj, obj.lexer.structure);
    },
    tokenize: require("module_14852"),
    parse: tmp,
    walk: arr,
    generate: require("processChildren")(types),
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("module_14885"),
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