// === Module 13054: ? ===

// Module 13054
import dumpMapSyntax from "dumpMapSyntax" /* 13077 */;
import _mod13096 from "module_13096" /* 13096 */;

require = arg1;
const dependencyMap = arg6;
function createSyntax(types) {
  _require = types;
  const arr = require("module_13067")(types);
  const tmp = require("module_13055")(types);
  let tmp3 = require("module_13076")(arr);
  obj = {
    List: require("module_13064"),
    SyntaxError: require("sourceFragment"),
    TokenStream: require("TokenStream"),
    Lexer: require("dumpMapSyntax"),
    vendorPrefix: require("module_13091").vendorPrefix,
    keyword: require("module_13091").keyword,
    property: require("module_13091").property,
    isCustomProperty: require("module_13091").isCustomProperty,
    definitionSyntax: require("module_13094"),
    lexer: null,
    createLexer(arg0) {
      return new dumpMapSyntax(arg0, obj, obj.lexer.structure);
    },
    tokenize: require("module_13062"),
    parse: tmp,
    walk: arr,
    generate: require("processChildren")(types),
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("module_13095"),
    fromPlainObject: tmp3.fromPlainObject,
    toPlainObject: tmp3.toPlainObject,
    createSyntax(arg0) {
      return createSyntax(types(obj[12])({}, arg0));
    },
    fork(fn) {
      const tmp3 = _mod13096({}, closure_0);
      if (typeof fn === "function") {
        const _Object = Object;
        let tmp6 = fn(tmp3, Object.assign);
      } else {
        tmp6 = _mod13096(tmp3, fn);
      }
      return createSyntax(tmp6);
    }
  };
  const obj2 = { generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node };
  const tmp2 = require("processChildren")(types);
  obj.lexer = new require("dumpMapSyntax")({ generic: true, types: types.types, atrules: types.atrules, properties: types.properties, node: types.node }, obj);
  return obj;
}

export (arg0) => createSyntax(_mod13096({}, arg0))