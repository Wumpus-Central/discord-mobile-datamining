// _runtime/12775_funescape.js
import SelectorType from "12774_SelectorType.js";

const require = globalThis.__r;

function funescape(arg0, match, arg2) {
  let fromCharCode = globalThis;
  let diff = parseInt(match, 16) - 65536;
  let tmp2 = match;
  {
    tmp2 = match;
    if (!arg2) {
      if (diff < 0) {
        const _String2 = fromCharCode.String;
        fromCharCode = _String2.fromCharCode;
        diff = diff + 65536;
        let fromCharCodeResult = fromCharCode(diff);
      } else {
        const _String = String;
        fromCharCodeResult = String.fromCharCode((diff >> 10) | 55296, (1023 & diff) | 56320);
      }
    }
  }
  return tmp2;
}
function parseSelector(items, str, sum) {
  _require = str;
  dependencyMap = sum;
  function stripWhitespace(arg0) {
    const sum = closure_1 + arg0;
    closure_1 = sum;
    if (sum < str.length) {
      const charCodeAtResult = str.charCodeAt(closure_1);
      let tmp2 = 32 === charCodeAtResult;
      if (!tmp2) {
        tmp2 = 9 === charCodeAtResult;
      }
      if (!tmp2) {
        tmp2 = 10 === charCodeAtResult;
      }
      if (!tmp2) {
        tmp2 = 12 === charCodeAtResult;
      }
      if (!tmp2) {
        tmp2 = 13 === charCodeAtResult;
      }
      if (tmp2) {
        const sum1 = closure_1 + 1;
        closure_1 = sum1;
        while (sum1 < str.length) {
          let charCodeAtResult1 = str.charCodeAt(closure_1);
          let tmp7 =
            32 === charCodeAtResult1 ||
            9 === charCodeAtResult1 ||
            10 === charCodeAtResult1 ||
            12 === charCodeAtResult1 ||
            13 === charCodeAtResult1;
          if (!tmp7) {
            break;
          }
        }
      }
    }
  }
  function readValueWithParenthesis() {
    const sum = closure_1 + 1;
    closure_1 = sum;
    let arr = str;
    let num = 1;
    let num2 = 1;
    if (sum < str.length) {
      while (true) {
        let arr2 = str;
        let tmp4 = str;
        let obj = str;
        if (40 === str.charCodeAt(closure_1)) {
          let diff = closure_1 - 1;
          let num3 = 0;
          let tmp7 = diff;
          let tmp8 = arr2;
          let tmp9 = arr2;
          let num4 = 0;
          if (92 === arr2.charCodeAt(diff)) {
            do {
              num3 = num3 + 1;
              let diff1 = tmp7 - 1;
              tmp7 = diff1;
              tmp8 = str;
              tmp9 = str;
              num4 = num3;
              charCodeAtResult = str.charCodeAt(diff1);
            } while (92 === charCodeAtResult);
          }
          obj = tmp9;
          tmp4 = tmp8;
          if (1 & ~num4) {
            let sum1 = num + 1;
          }
          let sum2 = closure_1 + 1;
          closure_1 = sum2;
          arr = tmp8;
          num2 = sum1;
          if (0 >= sum1) {
            break;
          } else {
            num = sum1;
            arr = tmp8;
            num2 = sum1;
            if (sum2 >= arr2.length) {
              break;
            }
          }
        }
        let tmp15 = 41 !== arr2.charCodeAt(closure_1);
        let tmp16 = tmp4;
        if (!tmp15) {
          let diff2 = closure_1 - 1;
          let num5 = 0;
          let tmp19 = diff2;
          let num6 = 0;
          if (92 === obj.charCodeAt(diff2)) {
            do {
              num5 = num5 + 1;
              let diff3 = tmp19 - 1;
              tmp19 = diff3;
              tmp4 = str;
              num6 = num5;
              charCodeAtResult1 = str.charCodeAt(diff3);
            } while (92 === charCodeAtResult1);
          }
          tmp15 = !(1 & ~num6);
          tmp16 = tmp4;
        }
        tmp8 = tmp16;
        sum1 = num;
        if (!tmp15) {
          sum1 = num - 1;
          tmp8 = tmp16;
        }
      }
    }
    if (num2) {
      const _Error = Error;
      const error = new Error("Parenthesis not matched");
      throw error;
    } else {
      str = arr.slice(sum, closure_1 - 1);
      return str.replace(re3, funescape);
    }
  }
  function ensureNotTraversal() {
    if (items2.length > 0) {
      const type = items2[items2.length - 1].type;
      if (SelectorType.SelectorType.Adjacent !== type) {
        if (SelectorType.SelectorType.Child !== type) {
          if (SelectorType.SelectorType.Descendant !== type) {
            if (SelectorType.SelectorType.Parent !== type) {
              if (SelectorType.SelectorType.Sibling !== type) {
                let flag = false;
              }
              if (flag) {
                const _Error = Error;
                const error = new Error("Did not expect successive traversals.");
                throw error;
              }
            }
          }
        }
      }
      flag = true;
    }
  }
  function addSpecialAttribute(id, Element) {
    const obj = {
      type: SelectorType.SelectorType.Attribute,
      name: id,
      action: Element,
      value: null,
      namespace: null,
      ignoreCase: "quirks",
    };
    str = str.slice(closure_1 + 1);
    const match = str.match(re2);
    if (match) {
      const first = match[0];
      closure_1 = closure_1 + (1 + first.length);
      obj.value = first.replace(re3, funescape);
      items2.push(obj);
    } else {
      const _Error = Error;
      const concat = "Expected name, found ".concat;
      const error = new Error("Expected name, found ".concat(arr.slice(closure_1)));
      throw error;
    }
    arr = str;
  }
  items = [];
  let items2 = items;
  stripWhitespace(0);
  if (str.length === dependencyMap) {
    return tmp2;
  } else {
    let arr13 = items;
    let arr14 = items;
    let arr15 = items;
    if (tmp2 < str.length) {
      while (true) {
        let charCodeAtResult = str.charCodeAt(dependencyMap);
        if (32 !== charCodeAtResult) {
          if (9 !== charCodeAtResult) {
            if (10 !== charCodeAtResult) {
              if (12 !== charCodeAtResult) {
                if (13 !== charCodeAtResult) {
                  if (62 === charCodeAtResult) {
                    let tmp261 = _require;
                    let Child = require("SelectorType").SelectorType.Child;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp261(12774).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Child;
                        let stripWhitespaceResult1 = stripWhitespace(1);
                        let tmp22 = arr13;
                        let tmp23 = arr14;
                      }
                    }
                    let ensureNotTraversalResult = ensureNotTraversal();
                    let obj2 = { type: Child };
                    let arr = arr13.push(obj2);
                  } else if (60 === charCodeAtResult) {
                    let tmp256 = _require;
                    let Parent = require("SelectorType").SelectorType.Parent;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp256(12774).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Parent;
                        let stripWhitespaceResult2 = stripWhitespace(1);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      }
                    }
                    let ensureNotTraversalResult1 = ensureNotTraversal();
                    let obj3 = { type: Parent };
                    let arr2 = arr13.push(obj3);
                  } else if (126 === charCodeAtResult) {
                    let tmp251 = _require;
                    let Sibling = require("SelectorType").SelectorType.Sibling;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp251(12774).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Sibling;
                        let stripWhitespaceResult3 = stripWhitespace(1);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      }
                    }
                    let ensureNotTraversalResult2 = ensureNotTraversal();
                    let obj4 = { type: Sibling };
                    let arr3 = arr13.push(obj4);
                  } else if (43 === charCodeAtResult) {
                    let tmp246 = _require;
                    let Adjacent = require("SelectorType").SelectorType.Adjacent;
                    if (arr13.length > 0) {
                      if (arr13[arr13.length - 1].type === tmp246(12774).SelectorType.Descendant) {
                        arr13[arr13.length - 1].type = Adjacent;
                        let stripWhitespaceResult4 = stripWhitespace(1);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      }
                    }
                    let ensureNotTraversalResult3 = ensureNotTraversal();
                    let obj5 = { type: Adjacent };
                    let arr4 = arr13.push(obj5);
                  } else if (46 === charCodeAtResult) {
                    let addSpecialAttributeResult = addSpecialAttribute(
                      "class",
                      require("SelectorType").AttributeAction.Element,
                    );
                    tmp22 = arr13;
                    tmp23 = arr14;
                  } else if (35 === charCodeAtResult) {
                    let addSpecialAttributeResult1 = addSpecialAttribute(
                      "id",
                      require("SelectorType").AttributeAction.Equals,
                    );
                    tmp22 = arr13;
                    tmp23 = arr14;
                  } else if (91 === charCodeAtResult) {
                    let stripWhitespaceResult5 = stripWhitespace(1);
                    if (124 === str.charCodeAt(dependencyMap)) {
                      let str25 = str.slice(dependencyMap + 1);
                      let match = str25.match(items2);
                      if (match) {
                        let first = match[0];
                        dependencyMap = dependencyMap + (1 + first.length);
                        let replaced = first.replace(closure_3, funescape);
                        let tmp136 = null;
                      } else {
                        let tmp161 = globalThis;
                        let _Error12 = Error;
                        let str26 = "Expected name, found ";
                        let concat10 = "Expected name, found ".concat;
                        let tmp163 = new.target;
                        let tmp164 = new.target;
                        let error = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error;
                      }
                    } else {
                      let slice = str.slice;
                      let tmp300 = dependencyMap;
                      if (str.startsWith("*|", dependencyMap)) {
                        let str23 = slice(tmp300 + 2);
                        let match1 = str23.match(items2);
                        if (match1) {
                          let first1 = match1[0];
                          dependencyMap = dependencyMap + (2 + first1.length);
                          replaced = first1.replace(closure_3, funescape);
                          tmp136 = "*";
                        } else {
                          let tmp149 = globalThis;
                          let _Error11 = Error;
                          let str24 = "Expected name, found ";
                          let concat9 = "Expected name, found ".concat;
                          let tmp151 = new.target;
                          let tmp152 = new.target;
                          let error1 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                          throw error1;
                        }
                      } else {
                        let str19 = slice(tmp300);
                        let tmp121 = items2;
                        let match2 = str19.match(items2);
                        if (match2) {
                          let first2 = match2[0];
                          dependencyMap = dependencyMap + first2.length;
                          let replaced1 = first2.replace(closure_3, funescape);
                          let tmp134 = 124 === str.charCodeAt(dependencyMap);
                          if (tmp134) {
                            tmp134 = 61 !== str.charCodeAt(dependencyMap + 1);
                          }
                          tmp136 = null;
                          replaced = replaced1;
                          if (tmp134) {
                            let str21 = str.slice(dependencyMap + 1);
                            let match3 = str21.match(tmp121);
                            if (match3) {
                              let first3 = match3[0];
                              dependencyMap = dependencyMap + (1 + first3.length);
                              replaced = first3.replace(closure_3, funescape);
                              tmp136 = replaced1;
                            } else {
                              let tmp140 = globalThis;
                              let _Error10 = Error;
                              let str22 = "Expected name, found ";
                              let concat8 = "Expected name, found ".concat;
                              let tmp142 = new.target;
                              let tmp143 = new.target;
                              let error2 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                              throw error2;
                            }
                          }
                        } else {
                          let tmp123 = globalThis;
                          let _Error9 = Error;
                          let str20 = "Expected name, found ";
                          let concat7 = "Expected name, found ".concat;
                          let tmp125 = new.target;
                          let tmp126 = new.target;
                          let error3 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                          throw error3;
                        }
                      }
                    }
                    let stripWhitespaceResult6 = stripWhitespace(0);
                    let tmp171 = _require;
                    let Equals = require("SelectorType").AttributeAction.Exists;
                    value = map.get(str.charCodeAt(dependencyMap));
                    let charCodeAt = str.charCodeAt;
                    let tmp176 = dependencyMap;
                    if (value) {
                      if (61 !== charCodeAt(tmp176 + 1)) {
                        let tmp235 = globalThis;
                        let _Error15 = Error;
                        let tmp236 = new.target;
                        let str31 = "Expected `=`";
                        let tmp237 = new.target;
                        let error4 = new Error("Expected `=`");
                        throw error4;
                      } else {
                        let stripWhitespaceResult7 = stripWhitespace(2);
                        Equals = value;
                      }
                    } else if (61 === charCodeAt(tmp176)) {
                      Equals = tmp171(12774).AttributeAction.Equals;
                      let stripWhitespaceResult8 = stripWhitespace(1);
                    }
                    let flag = null;
                    let str27 = "";
                    if ("exists" !== Equals) {
                      let charCodeAtResult1 = str.charCodeAt(dependencyMap);
                      let tmp178 = 39 === charCodeAtResult1 || 34 === charCodeAtResult1;
                      if (tmp178) {
                        let charCodeAtResult2 = str.charCodeAt(dependencyMap);
                        sum = dependencyMap + 1;
                        let tmp204 = sum;
                        if (sum < str.length) {
                          let tmp209 = sum;
                          if (str.charCodeAt(sum) !== charCodeAtResult2) {
                            let sum1 = tmp209 + 1;
                            tmp204 = sum1;
                            while (sum1 < str.length) {
                              tmp209 = sum1;
                              if (str.charCodeAt(sum1) !== charCodeAtResult2) {
                                continue;
                              } else {
                                let diff = sum1 - 1;
                                let num7 = 0;
                                let tmp212 = diff;
                                let num8 = 0;
                                if (92 === str.charCodeAt(diff)) {
                                  do {
                                    num7 = num7 + 1;
                                    let diff1 = tmp212 - 1;
                                    tmp212 = diff1;
                                    num8 = num7;
                                    charCodeAtResult3 = str.charCodeAt(diff1);
                                  } while (92 === charCodeAtResult3);
                                }
                                tmp209 = sum1;
                                tmp204 = sum1;
                                if (1 & ~num8) {
                                  break;
                                }
                              }
                              continue;
                            }
                          } else {
                            let diff2 = sum - 1;
                            let num5 = 0;
                            let tmp206 = diff2;
                            if (92 === str.charCodeAt(diff2)) {
                              do {
                                num5 = num5 + 1;
                                let diff3 = tmp206 - 1;
                                tmp206 = diff3;
                                charCodeAtResult4 = str.charCodeAt(diff3);
                              } while (92 === charCodeAtResult4);
                            }
                            tmp209 = sum;
                            tmp204 = sum;
                          }
                        }
                        if (str.charCodeAt(tmp204) !== charCodeAtResult2) {
                          let tmp230 = globalThis;
                          let _Error14 = Error;
                          let tmp231 = new.target;
                          let str30 = "Attribute value didn't end";
                          let tmp232 = new.target;
                          let error5 = new Error("Attribute value didn't end");
                          throw error5;
                        } else {
                          let str43 = str.slice(dependencyMap + 1, tmp204);
                          let replaced2 = str43.replace(closure_3, funescape);
                          dependencyMap = tmp204 + 1;
                        }
                      } else {
                        let tmp179 = dependencyMap;
                        if (dependencyMap < str.length) {
                          let charCodeAtResult5 = str.charCodeAt(dependencyMap);
                          let tmp180 =
                            32 === charCodeAtResult5 ||
                            9 === charCodeAtResult5 ||
                            10 === charCodeAtResult5 ||
                            12 === charCodeAtResult5 ||
                            13 === charCodeAtResult5;
                          if (tmp180) {
                            let diff4 = dependencyMap - 1;
                            let num = 0;
                            let tmp184 = diff4;
                            if (92 === str.charCodeAt(diff4)) {
                              do {
                                num = num + 1;
                                let diff5 = tmp184 - 1;
                                tmp184 = diff5;
                                charCodeAtResult6 = str.charCodeAt(diff5);
                              } while (92 === charCodeAtResult6);
                            }
                          }
                          let sum2 = dependencyMap + 1;
                          dependencyMap = sum2;
                          while (sum2 < str.length) {
                            let charCodeAtResult7 = str.charCodeAt(dependencyMap);
                            let tmp189 =
                              32 === charCodeAtResult7 ||
                              9 === charCodeAtResult7 ||
                              10 === charCodeAtResult7 ||
                              12 === charCodeAtResult7 ||
                              13 === charCodeAtResult7;
                            if (tmp189) {
                              let diff6 = dependencyMap - 1;
                              let num3 = 0;
                              let tmp193 = diff6;
                              let num4 = 0;
                              if (92 === str.charCodeAt(diff6)) {
                                do {
                                  num3 = num3 + 1;
                                  let diff7 = tmp193 - 1;
                                  tmp193 = diff7;
                                  num4 = num3;
                                  charCodeAtResult8 = str.charCodeAt(diff7);
                                } while (92 === charCodeAtResult8);
                              }
                              if (1 & ~num4) {
                                break;
                              }
                            }
                            continue;
                          }
                        }
                        let str28 = str.slice(tmp179, dependencyMap);
                        replaced2 = str28.replace(closure_3, funescape);
                      }
                      let stripWhitespaceResult9 = stripWhitespace(0);
                      let tmp217 = 32 | str.charCodeAt(dependencyMap);
                      if (115 === tmp217) {
                        let stripWhitespaceResult10 = stripWhitespace(1);
                        flag = false;
                        str27 = replaced2;
                      } else {
                        flag = null;
                        str27 = replaced2;
                        if (105 === tmp217) {
                          let stripWhitespaceResult11 = stripWhitespace(1);
                          flag = true;
                          str27 = replaced2;
                        }
                      }
                    }
                    if (93 !== str.charCodeAt(dependencyMap)) {
                      let tmp225 = globalThis;
                      let _Error13 = Error;
                      let tmp226 = new.target;
                      let str29 = "Attribute selector didn't terminate";
                      let tmp227 = new.target;
                      let error6 = new Error("Attribute selector didn't terminate");
                      throw error6;
                    } else {
                      dependencyMap = dependencyMap + 1;
                      let obj6 = {
                        type: null,
                        name: null,
                        action: null,
                        value: null,
                        namespace: null,
                        ignoreCase: null,
                      };
                      obj6.type = require("SelectorType").SelectorType.Attribute;
                      obj6.name = replaced;
                      obj6.action = Equals;
                      obj6.value = str27;
                      obj6.namespace = tmp136;
                      obj6.ignoreCase = flag;
                      let arr5 = arr14.push(obj6);
                      tmp22 = arr13;
                      tmp23 = arr14;
                    }
                  } else if (58 === charCodeAtResult) {
                    if (58 === str.charCodeAt(dependencyMap + 1)) {
                      let obj7 = { type: null, name: null, data: null };
                      obj7.type = require("SelectorType").SelectorType.PseudoElement;
                      let str16 = str.slice(dependencyMap + 2);
                      let match4 = str16.match(items2);
                      if (match4) {
                        let first4 = match4[0];
                        dependencyMap = dependencyMap + (2 + first4.length);
                        let str18 = first4.replace(closure_3, funescape);
                        obj7.name = str18.toLowerCase();
                        let valueWithParenthesis = null;
                        if (40 === str.charCodeAt(dependencyMap)) {
                          valueWithParenthesis = readValueWithParenthesis();
                        }
                        obj7.data = valueWithParenthesis;
                        let arr6 = arr14.push(obj7);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      } else {
                        let tmp107 = globalThis;
                        let _Error8 = Error;
                        let str17 = "Expected name, found ";
                        let concat6 = "Expected name, found ".concat;
                        let tmp109 = new.target;
                        let tmp110 = new.target;
                        let error7 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error7;
                      }
                    } else {
                      let str42 = str.slice(dependencyMap + 1);
                      let match5 = str42.match(items2);
                      if (match5) {
                        let first5 = match5[0];
                        dependencyMap = dependencyMap + (1 + first5.length);
                        let str9 = first5.replace(closure_3, funescape);
                        let formatted = str9.toLowerCase();
                        let replaced3 = null;
                        if (40 === str.charCodeAt(dependencyMap)) {
                          if (set.has(formatted)) {
                            let charCodeAtResult9 = str.charCodeAt(dependencyMap + 1);
                            let tmp84 = 39 === charCodeAtResult9 || 34 === charCodeAtResult9;
                            if (tmp84) {
                              let tmp97 = globalThis;
                              let _Error7 = Error;
                              let str14 = "Pseudo-selector ";
                              let concat5 = "Pseudo-selector ".concat;
                              let str15 = " cannot be quoted";
                              let tmp98 = new.target;
                              let tmp99 = new.target;
                              let error8 = new Error("Pseudo-selector ".concat(formatted, " cannot be quoted"));
                              throw error8;
                            } else {
                              let items1 = [];
                              dependencyMap = parseSelector(items1, str, dependencyMap + 1);
                              if (41 !== str.charCodeAt(dependencyMap)) {
                                let tmp92 = globalThis;
                                let _Error6 = Error;
                                let str11 = "Missing closing parenthesis in :";
                                let concat4 = "Missing closing parenthesis in :".concat;
                                let str12 = " (";
                                let combined = "Missing closing parenthesis in :".concat(formatted, " (");
                                let str13 = ")";
                                let tmp93 = new.target;
                                let tmp94 = new.target;
                                let error9 = new Error(combined.concat(str, ")"));
                                throw error9;
                              } else {
                                dependencyMap = dependencyMap + 1;
                                replaced3 = items1;
                              }
                            }
                          } else {
                            let valueWithParenthesis2 = readValueWithParenthesis();
                            let str10 = valueWithParenthesis2;
                            if (set1.has(formatted)) {
                              let charCodeAtResult10 = valueWithParenthesis2.charCodeAt(0);
                              let tmp80 =
                                charCodeAtResult10 ===
                                valueWithParenthesis2.charCodeAt(valueWithParenthesis2.length - 1);
                              if (tmp80) {
                                let tmp81 = 39 === charCodeAtResult10 || 34 === charCodeAtResult10;
                                tmp80 = tmp81;
                              }
                              str10 = valueWithParenthesis2;
                              if (tmp80) {
                                str10 = valueWithParenthesis2.slice(1, -1);
                              }
                            }
                            replaced3 = str10.replace(closure_3, funescape);
                          }
                        }
                        let obj8 = { type: null, name: null, data: null };
                        obj8.type = require("SelectorType").SelectorType.Pseudo;
                        obj8.name = formatted;
                        obj8.data = replaced3;
                        let arr7 = arr14.push(obj8);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      } else {
                        let tmp66 = globalThis;
                        let _Error5 = Error;
                        let str8 = "Expected name, found ";
                        let concat3 = "Expected name, found ".concat;
                        let tmp68 = new.target;
                        let tmp69 = new.target;
                        let error10 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error10;
                      }
                    }
                  } else if (44 === charCodeAtResult) {
                    let length = arr13.length;
                    if (length) {
                      length = arr13[arr13.length - 1].type === require("SelectorType").SelectorType.Descendant;
                    }
                    if (length) {
                      let arr8 = arr13.pop();
                    }
                    if (0 === arr13.length) {
                      let tmp60 = globalThis;
                      let _Error4 = Error;
                      let tmp61 = new.target;
                      let str7 = "Empty sub-selector";
                      let tmp62 = new.target;
                      let error11 = new Error("Empty sub-selector");
                      throw error11;
                    } else {
                      let arr9 = items.push(arr13);
                      items2 = [];
                      let stripWhitespaceResult12 = stripWhitespace(1);
                      tmp22 = items2;
                      tmp23 = items2;
                    }
                  } else if (str.startsWith("/*", dependencyMap)) {
                    let index = str.indexOf("*/", dependencyMap + 2);
                    if (index < 0) {
                      let tmp50 = globalThis;
                      let _Error3 = Error;
                      let tmp51 = new.target;
                      let str6 = "Comment was not terminated";
                      let tmp52 = new.target;
                      let error12 = new Error("Comment was not terminated");
                      throw error12;
                    } else {
                      dependencyMap = index + 2;
                      tmp22 = arr13;
                      tmp23 = arr14;
                      if (0 === arr14.length) {
                        let stripWhitespaceResult13 = stripWhitespace(0);
                        tmp22 = arr13;
                        tmp23 = arr14;
                      }
                    }
                  } else {
                    if (42 === charCodeAtResult) {
                      dependencyMap = dependencyMap + 1;
                      let str3 = "*";
                    } else if (124 === charCodeAtResult) {
                      str3 = "";
                      if (124 === str.charCodeAt(dependencyMap + 1)) {
                        let tmp289 = _require;
                        let ColumnCombinator = require("SelectorType").SelectorType.ColumnCombinator;
                        if (arr13.length > 0) {
                          if (arr13[arr13.length - 1].type === tmp289(12774).SelectorType.Descendant) {
                            arr13[arr13.length - 1].type = ColumnCombinator;
                            let stripWhitespaceResult14 = stripWhitespace(2);
                            tmp22 = arr13;
                            tmp23 = arr14;
                          }
                        }
                        let ensureNotTraversalResult4 = ensureNotTraversal();
                        let obj = { type: ColumnCombinator };
                        let arr10 = arr13.push(obj);
                      }
                    } else {
                      let tmp287 = items2;
                      arr15 = arr13;
                      if (items2.test(str.slice(dependencyMap))) {
                        str = str.slice(dependencyMap);
                        let match6 = str.match(tmp287);
                        if (!match6) {
                          break;
                        } else {
                          let first6 = match6[0];
                          dependencyMap = dependencyMap + first6.length;
                          str3 = first6.replace(closure_3, funescape);
                        }
                      }
                    }
                    let tmp26 = 124 === str.charCodeAt(dependencyMap);
                    if (tmp26) {
                      tmp26 = 124 !== str.charCodeAt(dependencyMap + 1);
                    }
                    if (!tmp26) {
                      if ("*" === str3) {
                        let obj9 = { type: null, namespace: null };
                        obj9.type = require("SelectorType").SelectorType.Universal;
                        obj9.namespace = null;
                        let obj10 = obj9;
                      } else {
                        obj10 = { type: null, name: null, namespace: null };
                        obj10.type = require("SelectorType").SelectorType.Tag;
                        obj10.name = str3;
                        obj10.namespace = null;
                      }
                      let arr11 = arr14.push(obj10);
                      tmp22 = arr13;
                      tmp23 = arr14;
                    } else if (42 === str.charCodeAt(dependencyMap + 1)) {
                      dependencyMap = dependencyMap + 2;
                      let str5 = "*";
                    } else {
                      let str41 = str.slice(dependencyMap + 1);
                      let match7 = str41.match(items2);
                      if (match7) {
                        let first7 = match7[0];
                        dependencyMap = dependencyMap + (1 + first7.length);
                        str5 = first7.replace(closure_3, funescape);
                      } else {
                        let tmp31 = globalThis;
                        let _Error2 = Error;
                        let str4 = "Expected name, found ";
                        let concat2 = "Expected name, found ".concat;
                        let tmp33 = new.target;
                        let tmp34 = new.target;
                        let error13 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
                        throw error13;
                      }
                    }
                  }
                }
                arr13 = tmp22;
                arr14 = tmp23;
                arr15 = tmp22;
              }
            }
          }
        }
        let tmp266 = 0 !== arr14.length;
        if (tmp266) {
          tmp266 = arr14[0].type === require("SelectorType").SelectorType.Descendant;
        }
        if (!tmp266) {
          let ensureNotTraversalResult5 = ensureNotTraversal();
          let obj11 = { type: null };
          obj11.type = require("SelectorType").SelectorType.Descendant;
          let arr12 = arr14.push(obj11);
        }
        let stripWhitespaceResult15 = stripWhitespace(1);
        tmp22 = arr13;
        tmp23 = arr14;
      }
      let _Error = Error;
      let concat = "Expected name, found ".concat;
      const error14 = new Error("Expected name, found ".concat(str.slice(dependencyMap)));
      throw error14;
    }
    let length2 = arr15.length;
    if (length2) {
      length2 = arr15[arr15.length - 1].type === require("SelectorType").SelectorType.Descendant;
    }
    if (length2) {
      arr15.pop();
    }
    if (0 === arr15.length) {
      const _Error16 = Error;
      const error15 = new Error("Empty sub-selector");
      throw error15;
    } else {
      items.push(arr15);
      return dependencyMap;
    }
  }
}
const re2 = /^[^\\#]?(?:\\(?:[\da-f]{1,6}\s?|.)|[\w\-\u00b0-\uFFFF])+/;
const re3 = /\\([\da-f]{1,6}\s?|(\s)|.)/gi;
let items = [126, SelectorType.AttributeAction.Element];
let items1 = [items, , , , ,];
let items2 = [94, SelectorType.AttributeAction.Start];
items1[1] = items2;
const items3 = [36, SelectorType.AttributeAction.End];
items1[2] = items3;
const items4 = [42, SelectorType.AttributeAction.Any];
items1[3] = items4;
const items5 = [33, SelectorType.AttributeAction.Not];
items1[4] = items5;
const items6 = [124, SelectorType.AttributeAction.Hyphen];
items1[5] = items6;
const map = new Map(items1);
const set = new Set(["has", "not", "matches", "is", "where", "host", "host-context"]);
const set1 = new Set(["contains", "icontains"]);

export function isTraversal(type) {
  type = type.type;
  if (SelectorType.SelectorType.Adjacent !== type) {
    if (SelectorType.SelectorType.Child !== type) {
      if (SelectorType.SelectorType.Descendant !== type) {
        if (SelectorType.SelectorType.Parent !== type) {
          if (SelectorType.SelectorType.Sibling !== type) {
            if (SelectorType.SelectorType.ColumnCombinator !== type) {
              return false;
            }
          }
        }
      }
    }
  }
  return true;
}
export function parse(arr) {
  const items = [];
  const tmp = parseSelector(items, "".concat(arr), 0);
  if (tmp < arr.length) {
    const _Error = Error;
    const concat = "Unmatched selector: ".concat;
    const error = new Error("Unmatched selector: ".concat(arr.slice(tmp)));
    throw error;
  } else {
    return items;
  }
}
