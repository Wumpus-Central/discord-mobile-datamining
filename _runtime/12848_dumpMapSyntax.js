// _runtime/12848_dumpMapSyntax.js
import _mod12853 from "metro/12853__.js";
import _mod12854 from "metro/12854__.js";
import prepareTokens from "12855_prepareTokens.js";
import _mod12856 from "metro/12856__.js";
import _mod12857 from "metro/12857__.js";
import _mod12858 from "metro/12858__.js";
import ident_token from "12859_ident-token.js";
import _mod12862 from "metro/12862__.js";
import _mod12863 from "metro/12863__.js";
import _slicedToArray from "metro/00032__.js";
import Tokenizer_mod from "12849_Tokenizer.js";

const require = globalThis.__r;

function dumpMapSyntax(descriptors, compact, arg2) {
  const obj = {};
  for (const key10007 in arg0) {
    if (!arg0[key10007].syntax) {
      continue;
    } else {
      if (arg2) {
        let syntax = arg0[key10007].syntax;
      } else {
        let obj2 = { compact: arg1 };
        syntax = _mod12853(arg0[key10007].syntax, obj2);
      }
      obj[key10007] = syntax;
      continue;
    }
    continue;
  }
  return obj;
}
function dumpAtruleMapSyntax(atrules, compact, arg2) {
  const obj = {};
  const entries = Object.entries(atrules);
  while (tmp2 !== undefined) {
    [, tmp7] = tmp3;
    let tmp8 = tmp7;
    let prelude = tmp7.prelude;
    if (!prelude) {
      let obj2 = { prelude, descriptors: null };
      let descriptors = tmp8.descriptors;
      if (descriptors) {
        descriptors = dumpMapSyntax(tmp8.descriptors, compact, arg2);
      }
      obj2.descriptors = descriptors;
      obj[tmp6] = obj2;
      continue;
    } else if (arg2) {
      let syntax = tmp8.prelude.syntax;
    } else {
      let obj3 = { compact };
      syntax = _mod12853(tmp8.prelude.syntax, obj3);
    }
  }
  return obj;
}
function matchSyntax(self, descriptor, value, arg3) {
  const arr = prepareTokens(value, self.syntax);
  let num = 0;
  let flag = false;
  if (0 < arr.length) {
    flag = true;
    while ("var(" !== str.toLowerCase()) {
      let sum = num + 1;
      num = sum;
      flag = false;
      if (sum >= arr.length) {
        break;
      }
    }
    str = arr[num].value;
  }
  if (flag) {
    const _Error = Error;
    const error = new Error("Matching for a tree with var() is not supported");
    const obj = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    let obj2 = obj;
  } else {
    let matchAsTreeResult;
    if (arg3) {
      matchAsTreeResult = _mod12856.matchAsTree(arr, self.valueCommonSyntax, self);
      const tmpResult = _mod12856;
    }
    if (!arg3) {
      const str2 = _mod12856.matchAsTree(arr, descriptor.match, self);
      matchAsTreeResult = str2;
      if (!str2.match) {
        const syntaxMatchError = new _mod12857.SyntaxMatchError(str2.reason, descriptor.syntax, value, str2);
        obj2 = { matched: null, iterations: str2.iterations, error: syntaxMatchError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      }
      const tmpResult2 = _mod12856;
    }
    const obj3 = { matched: null, iterations: null, error: null, getTrace: null, isType: null, isProperty: null, isKeyword: null };
    ({ match: obj4.matched, iterations: obj4.iterations } = matchAsTreeResult);
    obj3.getTrace = _mod12854.getTrace;
    obj3.isType = _mod12854.isType;
    obj3.isProperty = _mod12854.isProperty;
    obj3.isKeyword = _mod12854.isKeyword;
    obj2 = obj3;
  }
  return obj2;
}
let Tokenizer = Tokenizer_mod;
const React3 = Tokenizer.buildMatchGraph("inherit | initial | unset");
let Tokenizer = Tokenizer_mod;
const valueCommonSyntax2 = Tokenizer.buildMatchGraph("inherit | initial | unset | <-ms-legacy-expression>");
class Lexer {
  constructor(arg0, arg1, arg2) {
    obj = { valueCommonSyntax: closure_3, syntax: require, generic: false, atrules: {}, properties: {}, types: {} };
    structureFromConfig = importDefault;
    if (!importDefault) {
      tmp2 = closure_0;
      tmp3 = closure_1;
      obj2 = closure_0(closure_1[7]);
      structureFromConfig = obj2.getStructureFromConfig(global);
    }
    obj.structure = structureFromConfig;
    if (global) {
      if (global.types) {
        for (const key10020 in arg0.types) {
          tmp6 = key10020;
          addType_Result = obj.addType_(key10020, arg0.types[key10020]);
          continue;
        }
      }
      if (global.generic) {
        flag = true;
        obj.generic = true;
        tmp4 = closure_0;
        tmp5 = closure_1;
        for (const key10029 in closure_0(closure_1[8])) {
          tmp8 = key10029;
          tmp9 = closure_0;
          tmp10 = closure_1;
          addType_Result1 = obj.addType_(key10029, closure_0(closure_1[8])[key10029]);
          continue;
        }
      }
      if (global.atrules) {
        for (const key10033 in arg0.atrules) {
          tmp12 = key10033;
          addAtrule_Result = obj.addAtrule_(key10033, arg0.atrules[key10033]);
          continue;
        }
      }
      if (global.properties) {
        for (const key10037 in arg0.properties) {
          tmp14 = key10037;
          addProperty_Result = obj.addProperty_(key10037, arg0.properties[key10037]);
          continue;
        }
      }
    }
    return;
  }
}
Lexer.prototype = {
  structure: {},
  checkStructure(arg0) {
    function collectWarning(node, message) {
      items.push({ node, message });
    }
    const structure = this.structure;
    const items = [];
    const syntax = this.syntax;
    syntax.walk(arg0, (type) => {
      type = type.type;
      if (structure.hasOwnProperty(type.type)) {
        structure[type].check(type, collectWarning);
      } else {
        const obj = { node: type, message: `Unknown node type \`${type}\`` };
        items.push(obj);
      }
    });
    return items.length && items;
  },
  createDescriptor(prelude, Type, anonymous, arg3) {
    _require = prelude;
    let tmp = arg3;
    if (arg3 === undefined) {
      tmp = null;
    }
    let obj = { type: Type, name: anonymous };
    let obj2 = { type: Type, name: anonymous, parent: tmp, syntax: null, match: null };
    if (typeof prelude === "function") {
      obj2.match = require("Tokenizer").buildMatchGraph(prelude, obj);
      const obj5 = require("Tokenizer");
    } else {
      if (typeof prelude === "string") {
        const _Object = Object;
        const obj3 = {
          get() {
                Object.defineProperty(obj2, "syntax", { value: require("metro/12850__.js")(closure_0) });
                return obj2.syntax;
              }
        };
        Object.defineProperty(obj2, "syntax", obj3);
      } else {
        obj2.syntax = prelude;
      }
      const _Object2 = Object;
      const obj4 = {
        get() {
            obj = { value: null };
            obj2 = require("Tokenizer");
            obj.value = obj2.buildMatchGraph(obj2.syntax, obj);
            Object.defineProperty(obj2, "match", obj);
            return obj2.match;
          }
      };
      Object.defineProperty(obj2, "match", obj4);
    }
    return obj2;
  },
  addAtrule_(key10033, prelude) {
    const self = this;
    closure_1 = key10033;
    if (prelude) {
      const obj = { type: "Atrule", name: key10033, prelude: null, descriptors: null };
      let descriptor = null;
      if (prelude.prelude) {
        descriptor = self.createDescriptor(prelude.prelude, "AtrulePrelude", key10033);
      }
      obj.prelude = descriptor;
      let reduced = null;
      if (prelude.descriptors) {
        const _Object = Object;
        const keys = Object.keys(prelude.descriptors);
        reduced = keys.reduce((acc, item) => {
          acc[item] = self.createDescriptor(prelude.descriptors[item], "AtruleDescriptor", item, closure_1);
          return acc;
        }, {});
      }
      obj.descriptors = reduced;
      self.atrules[key10033] = obj;
    }
  },
  addProperty_(key10037, prelude) {
    if (prelude) {
      const self = this;
      this.properties[key10037] = this.createDescriptor(prelude, "Property", key10037);
    }
  },
  addType_(key10020, prelude) {
    if (prelude) {
      const self = this;
      this.types[key10020] = this.createDescriptor(prelude, "Type", key10020);
      if (prelude === ident_token["-ms-legacy-expression"]) {
        self.valueCommonSyntax = valueCommonSyntax2;
      }
    }
  },
  checkAtruleName(color) {
    if (!this.getAtrule(color)) {
      const syntaxReferenceError = new _mod12857.SyntaxReferenceError("Unknown at-rule", "@" + color);
      return syntaxReferenceError;
    }
  },
  checkAtrulePrelude(color, value) {
    const self = this;
    const checkAtruleNameResult = this.checkAtruleName(color);
    if (checkAtruleNameResult) {
      return checkAtruleNameResult;
    } else {
      const atrule = self.getAtrule(color);
      if (!atrule.prelude) {
        if (value) {
          const _SyntaxError = SyntaxError;
          let syntaxError = new SyntaxError("At-rule `@" + color + "` should not contain a prelude");
        }
        return syntaxError;
      }
      let syntaxError1;
      if (atrule.prelude) {
        if (!value) {
          const _SyntaxError2 = SyntaxError;
          syntaxError1 = new SyntaxError("At-rule `@" + color + "` should contain a prelude");
        }
      }
      syntaxError = syntaxError1;
    }
  },
  checkAtruleDescriptorName(color, color) {
    const self = this;
    const checkAtruleNameResult = this.checkAtruleName(color);
    if (checkAtruleNameResult) {
      return checkAtruleNameResult;
    } else {
      const atrule = self.getAtrule(color);
      const keywordResult = _mod12862.keyword(color);
      if (atrule.descriptors) {
        let syntaxReferenceError;
        if (!atrule.descriptors[keywordResult.name]) {
          if (!atrule.descriptors[keywordResult.basename]) {
            syntaxReferenceError = new _mod12857.SyntaxReferenceError("Unknown at-rule descriptor", color);
          }
        }
        let syntaxError = syntaxReferenceError;
      } else {
        const _SyntaxError = SyntaxError;
        syntaxError = new SyntaxError("At-rule `@" + color + "` has no known descriptors");
      }
      return syntaxError;
    }
  },
  checkPropertyName(property) {
    if (obj.property(property).custom) {
      const _Error = Error;
      let error = new Error("Lexer matching doesn't applicable for custom properties");
    } else {
      const self = this;
      if (!this.getProperty(property)) {
        error = new _mod12857.SyntaxReferenceError("Unknown property", property);
      }
    }
    return error;
  },
  matchAtrulePrelude(color, value) {
    const self = this;
    const checkAtrulePreludeResult = this.checkAtrulePrelude(color, value);
    if (checkAtrulePreludeResult) {
      const obj2 = { matched: null, iterations: "Boolean", error: checkAtrulePreludeResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      let obj = obj2;
    } else if (value) {
      obj = matchSyntax(self, self.getAtrule(color).prelude, value, false);
    } else {
      obj = { matched: null, iterations: "Boolean", error: true, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  matchAtruleDescriptor(color, color, value) {
    const self = this;
    const result = this.checkAtruleDescriptorName(color, color);
    if (result) {
      const obj2 = { matched: null, iterations: "Boolean", error: result, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      return obj2;
    } else {
      const atrule = self.getAtrule(color);
      const keywordResult = _mod12862.keyword(color);
      let tmp7 = atrule.descriptors[keywordResult.name];
      if (!tmp7) {
        tmp7 = atrule.descriptors[keywordResult.basename];
      }
      return matchSyntax(self, tmp7, value, false);
    }
  },
  matchDeclaration(type) {
    if ("Declaration" !== type.type) {
      const _Error = Error;
      const error = new Error("Not a Declaration node");
      const obj = { matched: null, iterations: "Boolean", error, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      let matchPropertyResult = obj;
    } else {
      const self = this;
      matchPropertyResult = this.matchProperty(type.property, type.value);
    }
    return matchPropertyResult;
  },
  matchProperty(property, value) {
    const self = this;
    const checkPropertyNameResult = this.checkPropertyName(property);
    if (checkPropertyNameResult) {
      const obj = { matched: null, iterations: "Boolean", error: checkPropertyNameResult, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
      let tmp5 = obj;
    } else {
      tmp5 = matchSyntax(self, self.getProperty(property), value, true);
    }
    return tmp5;
  },
  matchType(reference, value) {
    const self = this;
    const type = this.getType(reference);
    if (type) {
      let obj = matchSyntax(self, type, value, false);
    } else {
      const syntaxReferenceError = new _mod12857.SyntaxReferenceError("Unknown type", reference);
      obj = { matched: null, iterations: "Boolean", error: syntaxReferenceError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  match(type, value) {
    if (typeof type === "string") {
      let match = typeof type !== "string";
      if (typeof type !== "string") {
        match = type.match;
      }
      const self = this;
      let descriptor = type;
      if (!match) {
        descriptor = self.createDescriptor(type, "Type", "anonymous");
      }
      let obj = matchSyntax(self, descriptor, value, false);
    } else {
      const syntaxReferenceError = new _mod12857.SyntaxReferenceError("Bad syntax");
      obj = { matched: null, iterations: "Boolean", error: syntaxReferenceError, getTrace: _mod12854.getTrace, isType: _mod12854.isType, isProperty: _mod12854.isProperty, isKeyword: _mod12854.isKeyword };
    }
    return obj;
  },
  findValueFragments(property, value, arg2, arg3) {
    return _mod12863.matchFragments(this, value, this.matchProperty(property, value), arg2, arg3);
  },
  findDeclarationValueFragments(value, arg1, arg2) {
    return _mod12863.matchFragments(this, value.value, this.matchDeclaration(value), arg1, arg2);
  },
  findAllFragments(arg0, arg1, arg2) {
    closure_0 = arg1;
    closure_1 = arg2;
    const items = [];
    const syntax = this.syntax;
    const obj = { visit: "Declaration", enter: null };
    const fn = function(value) {
      const push = items.push;
      push.apply(items, this.findDeclarationValueFragments(value, closure_0, closure_1));
    };
    obj.enter = fn.bind(this);
    syntax.walk(arg0, obj);
    return items;
  },
  getAtrule(color) {
    if (flag === undefined) {
      flag = true;
    }
    const self = this;
    const keywordResult = _mod12862.keyword(color);
    if (keywordResult.vendor) {
      if (flag) {
        let tmp2 = self.atrules[keywordResult.name] || self.atrules[keywordResult.basename];
        const tmp3 = self.atrules[keywordResult.name] || self.atrules[keywordResult.basename];
      }
      if (!tmp2) {
        tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = self.atrules[keywordResult.name];
  },
  getAtrulePrelude(color) {
    if (flag === undefined) {
      flag = true;
    }
    const atrule = this.getAtrule(color, flag);
    let prelude = atrule;
    if (atrule) {
      prelude = atrule.prelude;
    }
    if (!prelude) {
      prelude = null;
    }
    return prelude;
  },
  getAtruleDescriptor(key10009, arg1) {
    const self = this;
    const atrules = this.atrules;
    let tmp = atrules.hasOwnProperty(key10009) && self.atrules.declarators;
    if (tmp) {
      tmp = self.atrules[key10009].declarators[arg1];
    }
    if (!tmp) {
      tmp = null;
    }
    return tmp;
  },
  getProperty(property) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = true;
    }
    const self = this;
    const propertyResult = _mod12862.property(property);
    if (propertyResult.vendor) {
      if (flag) {
        let tmp2 = self.properties[propertyResult.name] || self.properties[propertyResult.basename];
        const tmp3 = self.properties[propertyResult.name] || self.properties[propertyResult.basename];
      }
      if (!tmp2) {
        tmp2 = null;
      }
      return tmp2;
    }
    tmp2 = self.properties[propertyResult.name];
  },
  getType(key10009) {
    const types = this.types;
    let tmp = null;
    if (types.hasOwnProperty(key10009)) {
      tmp = this.types[key10009];
    }
    return tmp;
  },
  validate() {
    const self = this;
    const obj = {};
    let found = obj;
    let obj2 = {};
    let found1 = obj2;
    for (const key10009 in this.types) {
      let tmp11 = self.types[key10009];
      found = self;
      found1 = key10009;
      obj2 = obj;
      if (obj.hasOwnProperty(key10009)) {
        continue;
      } else {
        obj[key10009] = false;
        if (null === tmp11.syntax) {
          continue;
        } else {
          let tmp3 = found(found1[12])(tmp11.syntax, (type) => {
            if ("Type" === type.type) {
              if ("Type" === type.type) {
                let properties = closure_1_0.types;
                let tmp = closure_1_0;
              } else {
                tmp = closure_1_0;
                properties = closure_1_0.properties;
              }
              obj = "Type" === type.type ? closure_2_0 : closure_2_1;
              let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
              if (!hasOwnPropertyResult) {
                if (!hasOwnPropertyResult) {
                  closure_1_2[closure_1_1] = true;
                }
              } else {
                name = type.name;
                closure_0 = tmp;
                if (obj.hasOwnProperty(name)) {
                } else {
                  obj[name] = false;
                  if (null !== tmp4.syntax) {
                    closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                      if ("Type" === type.type) {
                        if ("Type" === type.type) {
                          let properties = closure_1_0.types;
                          let tmp = closure_1_0;
                        } else {
                          tmp = closure_1_0;
                          properties = closure_1_0.properties;
                        }
                        obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                        let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                        if (!hasOwnPropertyResult) {
                          if (!hasOwnPropertyResult) {
                            closure_1_2[closure_1_1] = true;
                          }
                        } else {
                          name = type.name;
                          closure_0 = tmp;
                          if (obj.hasOwnProperty(name)) {
                          } else {
                            obj[name] = false;
                            if (null !== tmp4.syntax) {
                              closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                                if ("Type" === type.type) {
                                  if ("Type" === type.type) {
                                    let properties = closure_1_0.types;
                                    let tmp = closure_1_0;
                                  } else {
                                    tmp = closure_1_0;
                                    properties = closure_1_0.properties;
                                  }
                                  obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                                  let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                                  if (!hasOwnPropertyResult) {
                                    if (!hasOwnPropertyResult) {
                                      closure_1_2[closure_1_1] = true;
                                    }
                                  } else {
                                    name = type.name;
                                    closure_0 = tmp;
                                    if (obj.hasOwnProperty(name)) {
                                    } else {
                                      obj[name] = false;
                                      if (null !== tmp4.syntax) {
                                        closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                                          if ("Type" === type.type) {
                                            if ("Type" === type.type) {
                                              let properties = closure_1_0.types;
                                              let tmp = closure_1_0;
                                            } else {
                                              tmp = closure_1_0;
                                              properties = closure_1_0.properties;
                                            }
                                            obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                                            let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                                            if (!hasOwnPropertyResult) {
                                              if (!hasOwnPropertyResult) {
                                                closure_1_2[closure_1_1] = true;
                                              }
                                            } else {
                                              name = type.name;
                                              closure_0 = tmp;
                                              if (obj.hasOwnProperty(name)) {
                                              } else {
                                                obj[name] = false;
                                                if (null !== tmp4.syntax) {
                                                  closure_1_0(closure_1_1[12])(tmp4.syntax, /* F127677 */ function() { ... }, globalThis);
                                                }
                                              }
                                            }
                                          }
                                        }, globalThis);
                                      }
                                    }
                                  }
                                }
                              }, globalThis);
                            }
                          }
                        }
                      }
                    }, globalThis);
                  }
                }
              }
            }
          }, globalThis);
          continue;
        }
        continue;
      }
      continue;
    }
    for (const key10021 in self.properties) {
      let tmp13 = self.properties[key10021];
      found = self;
      found1 = key10021;
      if (obj2.hasOwnProperty(key10021)) {
        continue;
      } else {
        obj2[key10021] = false;
        if (null === tmp13.syntax) {
          continue;
        } else {
          let tmp7 = found(found1[12])(tmp13.syntax, (type) => {
            if ("Type" === type.type) {
              if ("Type" === type.type) {
                let properties = closure_1_0.types;
                let tmp = closure_1_0;
              } else {
                tmp = closure_1_0;
                properties = closure_1_0.properties;
              }
              obj = "Type" === type.type ? closure_2_0 : closure_2_1;
              let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
              if (!hasOwnPropertyResult) {
                if (!hasOwnPropertyResult) {
                  closure_1_2[closure_1_1] = true;
                }
              } else {
                name = type.name;
                closure_0 = tmp;
                if (obj.hasOwnProperty(name)) {
                } else {
                  obj[name] = false;
                  if (null !== tmp4.syntax) {
                    closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                      if ("Type" === type.type) {
                        if ("Type" === type.type) {
                          let properties = closure_1_0.types;
                          let tmp = closure_1_0;
                        } else {
                          tmp = closure_1_0;
                          properties = closure_1_0.properties;
                        }
                        obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                        let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                        if (!hasOwnPropertyResult) {
                          if (!hasOwnPropertyResult) {
                            closure_1_2[closure_1_1] = true;
                          }
                        } else {
                          name = type.name;
                          closure_0 = tmp;
                          if (obj.hasOwnProperty(name)) {
                          } else {
                            obj[name] = false;
                            if (null !== tmp4.syntax) {
                              closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                                if ("Type" === type.type) {
                                  if ("Type" === type.type) {
                                    let properties = closure_1_0.types;
                                    let tmp = closure_1_0;
                                  } else {
                                    tmp = closure_1_0;
                                    properties = closure_1_0.properties;
                                  }
                                  obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                                  let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                                  if (!hasOwnPropertyResult) {
                                    if (!hasOwnPropertyResult) {
                                      closure_1_2[closure_1_1] = true;
                                    }
                                  } else {
                                    name = type.name;
                                    closure_0 = tmp;
                                    if (obj.hasOwnProperty(name)) {
                                    } else {
                                      obj[name] = false;
                                      if (null !== tmp4.syntax) {
                                        closure_1_0(closure_1_1[12])(tmp4.syntax, (type) => {
                                          if ("Type" === type.type) {
                                            if ("Type" === type.type) {
                                              let properties = closure_1_0.types;
                                              let tmp = closure_1_0;
                                            } else {
                                              tmp = closure_1_0;
                                              properties = closure_1_0.properties;
                                            }
                                            obj = "Type" === type.type ? closure_2_0 : closure_2_1;
                                            let hasOwnPropertyResult = properties.hasOwnProperty(type.name);
                                            if (!hasOwnPropertyResult) {
                                              if (!hasOwnPropertyResult) {
                                                closure_1_2[closure_1_1] = true;
                                              }
                                            } else {
                                              name = type.name;
                                              closure_0 = tmp;
                                              if (obj.hasOwnProperty(name)) {
                                              } else {
                                                obj[name] = false;
                                                if (null !== tmp4.syntax) {
                                                  closure_1_0(closure_1_1[12])(tmp4.syntax, /* F127677 */ function() { ... }, globalThis);
                                                }
                                              }
                                            }
                                          }
                                        }, globalThis);
                                      }
                                    }
                                  }
                                }
                              }, globalThis);
                            }
                          }
                        }
                      }
                    }, globalThis);
                  }
                }
              }
            }
          }, globalThis);
          continue;
        }
        continue;
      }
      continue;
    }
    const keys = Object.keys(obj);
    found = keys.filter((item) => found[item]);
    const keys1 = Object.keys(obj2);
    found1 = keys1.filter((item) => found1[item]);
    if (found.length) {
      const obj3 = { types: found, properties: found1 };
      let tmp9 = obj3;
    } else {
      tmp9 = null;
    }
    return tmp9;
  },
  dump(arg0, arg1) {
    const self = this;
    const obj = { generic: this.generic, types: null, properties: null, atrules: null };
    const types = this.types;
    const obj2 = {};
    for (const key10011 in types) {
      if (!types[key10011].syntax) {
        continue;
      } else {
        if (arg0) {
          let syntax = types[key10011].syntax;
        } else {
          let obj3 = { compact: tmp };
          syntax = _mod12853(types[key10011].syntax, obj3);
        }
        obj2[key10011] = syntax;
        continue;
      }
      continue;
    }
    obj.types = obj2;
    const properties = self.properties;
    const obj4 = {};
    for (const key10026 in properties) {
      if (!properties[key10026].syntax) {
        continue;
      } else {
        if (arg0) {
          let syntax2 = properties[key10026].syntax;
        } else {
          let obj5 = { compact: tmp4 };
          syntax2 = _mod12853(properties[key10026].syntax, obj5);
        }
        obj4[key10026] = syntax2;
        continue;
      }
      continue;
    }
    obj.properties = obj4;
    obj.atrules = dumpAtruleMapSyntax(self.atrules, !arg1, arg0);
    return obj;
  },
  toString() {
    return JSON.stringify(this.dump());
  }
};

export default Lexer;