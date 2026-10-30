// _runtime/12790_create.js
import dumpMapSyntax from "12813_dumpMapSyntax.js";
import _mod12832 from "metro/12832__.js";

require = arg1;
const dependencyMap = arg6;
function createSyntax(types) {
  _require = types;
  const arr = require("metro/12803__.js")(types);
  const tmp = require("metro/12791__.js")(types);
  let tmp3 = require("metro/12812__.js")(arr);
  obj = {
    List: require("metro/12800__.js"),
    SyntaxError: require("sourceFragment"),
    TokenStream: require("TokenStream"),
    Lexer: require("dumpMapSyntax"),
    vendorPrefix: require("metro/12827__.js").vendorPrefix,
    keyword: require("metro/12827__.js").keyword,
    property: require("metro/12827__.js").property,
    isCustomProperty: require("metro/12827__.js").isCustomProperty,
    definitionSyntax: require("metro/12830__.js"),
    lexer: null,
    createLexer(arg0) {
      return new dumpMapSyntax(arg0, obj, obj.lexer.structure);
    },
    tokenize: require("metro/12798__.js"),
    parse: tmp,
    walk: arr,
    generate: require("processChildren")(types),
    find: arr.find,
    findLast: arr.findLast,
    findAll: arr.findAll,
    clone: require("metro/12831__.js"),
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