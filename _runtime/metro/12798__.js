// === Module 12798: ? ===

// Module 12798
const require = globalThis.__r;

function tokenize(arg0, arg1) {
  let str = arg0;
  _require = arg0;
  let iter = arg1;
  function consumeNumericToken() {
    closure_2 = _mod12794.consumeNumber(closure_0, closure_2);
    let num = 0;
    if (closure_2 < length) {
      num = closure_0.charCodeAt(tmp3);
    }
    const sum = closure_2 + 1;
    let num2 = 0;
    if (sum < length) {
      num2 = closure_0.charCodeAt(sum);
    }
    const sum1 = closure_2 + 2;
    let num3 = 0;
    if (sum1 < length) {
      num3 = closure_0.charCodeAt(sum1);
    }
    if (obj3.isIdentifierStart(num, num2, num3)) {
      BadString = _mod12792.TYPE.Dimension;
      closure_2 = _mod12794.consumeName(closure_0, closure_2);
      const tmpResult = _mod12794;
    } else {
      let num4 = 0;
      if (closure_2 < length) {
        num4 = closure_0.charCodeAt(tmp7);
      }
      if (37 === num4) {
        BadString = _mod12792.TYPE.Percentage;
        closure_2 = +closure_2 + 1;
      } else {
        BadString = _mod12792.TYPE.Number;
      }
    }
    return tmp8;
  }
  function consumeIdentLikeToken() {
    let sum2 = closure_2;
    let _Function = dependencyMap;
    closure_2 = _mod12794.consumeName(closure_0, closure_2);
    if (obj2.cmpStr(closure_0, closure_2, closure_2, "url")) {
      let num = 0;
      if (closure_2 < length) {
        num = closure_0.charCodeAt(tmp3);
      }
      if (40 === num) {
        const findWhiteSpaceEndResult = _mod12794.findWhiteSpaceEnd(closure_0, closure_2 + 1);
        closure_2 = findWhiteSpaceEndResult;
        let num5 = 0;
        if (findWhiteSpaceEndResult < length) {
          num5 = closure_0.charCodeAt(findWhiteSpaceEndResult);
        }
        if (34 !== num5) {
          let num7 = 0;
          if (closure_2 < length) {
            num7 = closure_0.charCodeAt(tmp35);
          }
          if (39 !== num7) {
            BadString = _mod12792.TYPE.Url;
            const findWhiteSpaceEndResult1 = _mod12794.findWhiteSpaceEnd(closure_0, closure_2);
            closure_2 = findWhiteSpaceEndResult1;
            if (findWhiteSpaceEndResult1 < closure_0.length) {
              const charCodeAtResult = closure_0.charCodeAt(closure_2);
              const charCodeCategoryResult = _mod12795.charCodeCategory(charCodeAtResult);
              while (41 !== charCodeCategoryResult) {
                if (_mod12795.charCodeCategory.Eof !== charCodeCategoryResult) {
                  if (_mod12795.charCodeCategory.WhiteSpace === charCodeCategoryResult) {
                    let tmp12Result = _mod12794;
                    let findWhiteSpaceEndResult2 = tmp12Result.findWhiteSpaceEnd(closure_0, closure_2);
                    closure_2 = findWhiteSpaceEndResult2;
                    let num10 = 0;
                    if (findWhiteSpaceEndResult2 < length) {
                      num10 = closure_0.charCodeAt(findWhiteSpaceEndResult2);
                    }
                    if (41 !== num10) {
                      if (closure_2 < closure_0.length) {
                        let tmp12Result5 = _mod12794;
                        closure_2 = tmp12Result5.consumeBadUrlRemnants(closure_0, closure_2);
                        BadString = _mod12792.TYPE.BadUrl;
                      }
                    }
                    if (closure_2 < closure_0.length) {
                      let tmp29 = +closure_2;
                      closure_2 = tmp29 + 1;
                    }
                  } else {
                    if (34 !== charCodeCategoryResult) {
                      if (39 !== charCodeCategoryResult) {
                        if (40 !== charCodeCategoryResult) {
                          if (_mod12795.charCodeCategory.NonPrintable !== charCodeCategoryResult) {
                            if (92 === charCodeCategoryResult) {
                              let tmp12Result6 = _mod12795;
                              let sum = closure_2 + 1;
                              let num9 = 0;
                              if (sum < length) {
                                num9 = closure_0.charCodeAt(sum);
                              }
                              let isValidEscapeResult = tmp12Result6.isValidEscape(charCodeAtResult, num9);
                              let tmp12Result7 = _mod12794;
                              if (isValidEscapeResult) {
                                closure_2 = tmp12Result7.consumeEscaped(closure_0, closure_2) - 1;
                              } else {
                                closure_2 = tmp12Result7.consumeBadUrlRemnants(closure_0, closure_2);
                                BadString = _mod12792.TYPE.BadUrl;
                              }
                            }
                            let sum1 = closure_2 + 1;
                            closure_2 = sum1;
                          }
                        }
                      }
                    }
                    let tmp12Result8 = _mod12794;
                    closure_2 = tmp12Result8.consumeBadUrlRemnants(closure_0, closure_2);
                    BadString = _mod12792.TYPE.BadUrl;
                  }
                }
              }
              closure_2 = +closure_2 + 1;
            }
            const tmp2Result2 = _mod12794;
          }
        }
        _Function = _mod12792.TYPE.Function;
        BadString = _Function;
        sum2 = sum2 + 4;
        closure_2 = sum2;
        const tmp2Result = _mod12794;
      }
    }
    let num3 = 0;
    if (closure_2 < length) {
      num3 = closure_0.charCodeAt(tmp5);
    }
    if (40 === num3) {
      BadString = _mod12792.TYPE.Function;
      closure_2 = +closure_2 + 1;
    } else {
      BadString = _mod12792.TYPE.Ident;
    }
    return tmp6;
  }
  function consumeStringToken(arg0) {
    let tmp = arg0;
    if (!arg0) {
      closure_2 = tmp3 + 1;
      let num = 0;
      if (+closure_2 < length) {
        num = closure_0.charCodeAt(tmp3);
      }
      tmp = num;
    }
    BadString = _mod12792.TYPE.String;
    if (closure_2 < closure_0.length) {
      const charCodeAtResult = closure_0.charCodeAt(closure_2);
      const charCodeCategoryResult = _mod12795.charCodeCategory(charCodeAtResult);
      while (tmp !== charCodeCategoryResult) {
        if (_mod12795.charCodeCategory.Eof !== charCodeCategoryResult) {
          if (_mod12795.charCodeCategory.WhiteSpace === charCodeCategoryResult) {
            let tmp8Result = _mod12795;
            if (tmp8Result.isNewline(charCodeAtResult)) {
              let tmp8Result6 = _mod12794;
              closure_2 = closure_2 + tmp8Result6.getNewlineLength(closure_0, closure_2, charCodeAtResult);
              BadString = _mod12792.TYPE.BadString;
            }
          } else if (92 === charCodeCategoryResult) {
            if (closure_2 !== closure_0.length - 1) {
              let sum = closure_2 + 1;
              let num2 = 0;
              if (sum < length) {
                num2 = closure_0.charCodeAt(sum);
              }
              let tmp8Result7 = _mod12795;
              if (tmp8Result7.isNewline(num2)) {
                let tmp8Result8 = _mod12794;
                closure_2 = closure_2 + tmp8Result8.getNewlineLength(closure_0, closure_2 + 1, num2);
              } else {
                let tmp8Result9 = _mod12795;
                if (tmp8Result9.isValidEscape(charCodeAtResult, num2)) {
                  let tmp8Result10 = _mod12794;
                  closure_2 = tmp8Result10.consumeEscaped(closure_0, closure_2) - 1;
                }
              }
            }
          }
          let sum1 = closure_2 + 1;
          closure_2 = sum1;
        }
      }
      closure_2 = +closure_2 + 1;
    }
  }
  if (!arg1) {
    iter = new require("TokenStream")();
  }
  if (!str) {
    str = "";
  }
  const StringResult = String(str);
  _require = StringResult;
  length = StringResult.length;
  const tmp5 = require("adoptBuffer")(iter.offsetAndType, length + 1);
  const tmp6 = require("adoptBuffer")(iter.balance, length + 1);
  let num = 0;
  if (0 < length) {
    num = StringResult.charCodeAt(0);
  }
  const isBOMResult = require("module_12795").isBOM(num);
  closure_2 = isBOMResult;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (isBOMResult < length) {
    do {
      let charCodeAtResult = StringResult.charCodeAt(closure_2);
      let BadString = 0;
      tmp6[num4] = length;
      let tmp10 = _require;
      let tmp11 = length;
      let obj2 = require("module_12795");
      let charCodeCategoryResult = obj2.charCodeCategory(charCodeAtResult);
      let tmp14 = num3;
      let tmp15 = num4;
      if (require("module_12795").charCodeCategory.WhiteSpace === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.WhiteSpace;
        let tmp10Result = tmp10(tmp11[0]);
        closure_2 = tmp10Result.findWhiteSpaceEnd(StringResult, closure_2 + 1);
      } else if (34 === charCodeCategoryResult) {
        let consumeStringTokenResult = consumeStringToken();
      } else if (35 === charCodeCategoryResult) {
        let tmp10Result11 = tmp10(tmp11[1]);
        let sum = closure_2 + 1;
        let num25 = 0;
        if (sum < length) {
          num25 = StringResult.charCodeAt(sum);
        }
        if (!tmp10Result11.isName(num25)) {
          let tmp10Result12 = tmp10(tmp11[1]);
          let sum1 = closure_2 + 1;
          let num26 = 0;
          if (sum1 < length) {
            num26 = StringResult.charCodeAt(sum1);
          }
          let sum2 = closure_2 + 2;
          let num27 = 0;
          if (sum2 < length) {
            num27 = StringResult.charCodeAt(sum2);
          }
          if (!tmp10Result12.isValidEscape(num26, num27)) {
            BadString = tmp10(tmp11[2]).TYPE.Delim;
            closure_2 = closure_2 + 1;
          }
        }
        BadString = tmp10(tmp11[2]).TYPE.Hash;
        let tmp10Result13 = tmp10(tmp11[0]);
        closure_2 = tmp10Result13.consumeName(StringResult, closure_2 + 1);
      } else if (39 === charCodeCategoryResult) {
        let consumeStringTokenResult1 = consumeStringToken();
      } else if (40 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.LeftParenthesis;
        closure_2 = closure_2 + 1;
      } else if (41 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.RightParenthesis;
        closure_2 = closure_2 + 1;
      } else if (43 === charCodeCategoryResult) {
        let tmp10Result14 = tmp10(tmp11[1]);
        let sum3 = closure_2 + 1;
        let num23 = 0;
        if (sum3 < length) {
          num23 = StringResult.charCodeAt(sum3);
        }
        let sum4 = closure_2 + 2;
        let num24 = 0;
        if (sum4 < length) {
          num24 = StringResult.charCodeAt(sum4);
        }
        if (tmp10Result14.isNumberStart(charCodeAtResult, num23, num24)) {
          let consumeNumericTokenResult = consumeNumericToken();
        } else {
          BadString = tmp10(tmp11[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (44 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.Comma;
        closure_2 = closure_2 + 1;
      } else if (45 === charCodeCategoryResult) {
        let tmp10Result15 = tmp10(tmp11[1]);
        let sum5 = closure_2 + 1;
        let num17 = 0;
        if (sum5 < length) {
          num17 = StringResult.charCodeAt(sum5);
        }
        let sum6 = closure_2 + 2;
        let num18 = 0;
        if (sum6 < length) {
          num18 = StringResult.charCodeAt(sum6);
        }
        if (tmp10Result15.isNumberStart(charCodeAtResult, num17, num18)) {
          let consumeNumericTokenResult1 = consumeNumericToken();
        } else {
          let sum7 = closure_2 + 1;
          let num19 = 0;
          if (sum7 < length) {
            num19 = StringResult.charCodeAt(sum7);
          }
          if (45 === num19) {
            let sum8 = closure_2 + 2;
            let num20 = 0;
            if (sum8 < length) {
              num20 = StringResult.charCodeAt(sum8);
            }
            if (62 === num20) {
              BadString = tmp10(tmp11[2]).TYPE.CDC;
              closure_2 = closure_2 + 3;
            }
          }
          let tmp10Result16 = tmp10(tmp11[1]);
          let sum9 = closure_2 + 1;
          let num21 = 0;
          if (sum9 < length) {
            num21 = StringResult.charCodeAt(sum9);
          }
          let sum10 = closure_2 + 2;
          let num22 = 0;
          if (sum10 < length) {
            num22 = StringResult.charCodeAt(sum10);
          }
          if (tmp10Result16.isIdentifierStart(charCodeAtResult, num21, num22)) {
            let result = consumeIdentLikeToken();
          } else {
            BadString = tmp10(tmp11[2]).TYPE.Delim;
            closure_2 = closure_2 + 1;
          }
        }
      } else if (46 === charCodeCategoryResult) {
        let tmp10Result17 = tmp10(tmp11[1]);
        let sum11 = closure_2 + 1;
        let num15 = 0;
        if (sum11 < length) {
          num15 = StringResult.charCodeAt(sum11);
        }
        let sum12 = closure_2 + 2;
        let num16 = 0;
        if (sum12 < length) {
          num16 = StringResult.charCodeAt(sum12);
        }
        if (tmp10Result17.isNumberStart(charCodeAtResult, num15, num16)) {
          let consumeNumericTokenResult2 = consumeNumericToken();
        } else {
          BadString = tmp10(tmp11[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (47 === charCodeCategoryResult) {
        let sum13 = closure_2 + 1;
        let num14 = 0;
        if (sum13 < length) {
          num14 = StringResult.charCodeAt(sum13);
        }
        if (42 === num14) {
          BadString = tmp10(tmp11[2]).TYPE.Comment;
          let sum14 = StringResult.indexOf("*/", closure_2 + 2) + 2;
          closure_2 = sum14;
          if (1 === sum14) {
            closure_2 = StringResult.length;
          }
        } else {
          BadString = tmp10(tmp11[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (58 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.Colon;
        closure_2 = closure_2 + 1;
      } else if (59 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.Semicolon;
        closure_2 = closure_2 + 1;
      } else if (60 === charCodeCategoryResult) {
        let sum15 = closure_2 + 1;
        let num11 = 0;
        if (sum15 < length) {
          num11 = StringResult.charCodeAt(sum15);
        }
        if (33 === num11) {
          let sum16 = closure_2 + 2;
          let num12 = 0;
          if (sum16 < length) {
            num12 = StringResult.charCodeAt(sum16);
          }
          if (45 === num12) {
            let sum17 = closure_2 + 3;
            let num13 = 0;
            if (sum17 < length) {
              num13 = StringResult.charCodeAt(sum17);
            }
            if (45 === num13) {
              BadString = tmp10(tmp11[2]).TYPE.CDO;
              closure_2 = closure_2 + 4;
            }
          }
        }
        BadString = tmp10(tmp11[2]).TYPE.Delim;
        closure_2 = closure_2 + 1;
      } else if (64 === charCodeCategoryResult) {
        let tmp10Result18 = tmp10(tmp11[1]);
        let sum18 = closure_2 + 1;
        let num8 = 0;
        if (sum18 < length) {
          num8 = StringResult.charCodeAt(sum18);
        }
        let sum19 = closure_2 + 2;
        let num9 = 0;
        if (sum19 < length) {
          num9 = StringResult.charCodeAt(sum19);
        }
        let sum20 = closure_2 + 3;
        let num10 = 0;
        if (sum20 < length) {
          num10 = StringResult.charCodeAt(sum20);
        }
        let isIdentifierStartResult = tmp10Result18.isIdentifierStart(num8, num9, num10);
        let TYPE = tmp10(tmp11[2]).TYPE;
        if (isIdentifierStartResult) {
          BadString = TYPE.AtKeyword;
          let tmp10Result19 = tmp10(tmp11[0]);
          closure_2 = tmp10Result19.consumeName(StringResult, closure_2 + 1);
        } else {
          BadString = TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (91 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.LeftSquareBracket;
        closure_2 = closure_2 + 1;
      } else if (92 === charCodeCategoryResult) {
        let tmp10Result20 = tmp10(tmp11[1]);
        let sum21 = closure_2 + 1;
        let num7 = 0;
        if (sum21 < length) {
          num7 = StringResult.charCodeAt(sum21);
        }
        if (tmp10Result20.isValidEscape(charCodeAtResult, num7)) {
          let result1 = consumeIdentLikeToken();
        } else {
          BadString = tmp10(tmp11[2]).TYPE.Delim;
          closure_2 = closure_2 + 1;
        }
      } else if (93 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.RightSquareBracket;
        closure_2 = closure_2 + 1;
      } else if (123 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.LeftCurlyBracket;
        closure_2 = closure_2 + 1;
      } else if (125 === charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.RightCurlyBracket;
        closure_2 = closure_2 + 1;
      } else if (tmp10(tmp11[1]).charCodeCategory.Digit === charCodeCategoryResult) {
        let consumeNumericTokenResult3 = consumeNumericToken();
      } else if (tmp10(tmp11[1]).charCodeCategory.NameStart === charCodeCategoryResult) {
        let result2 = consumeIdentLikeToken();
      } else if (tmp10(tmp11[1]).charCodeCategory.Eof !== charCodeCategoryResult) {
        BadString = tmp10(tmp11[2]).TYPE.Delim;
        closure_2 = closure_2 + 1;
      }
      let tmp92 = BadString;
      if (tmp14 === BadString) {
        let tmp94 = num2 & 16777215;
        let tmp95 = tmp6[tmp94];
        let tmp96 = tmp95 >> 24;
        tmp6[num4] = tmp94;
        let sum22 = tmp94 + 1;
        tmp6[tmp94] = num4;
        let tmp93 = tmp95;
        tmp14 = tmp96;
        if (sum22 < num4) {
          do {
            if (tmp6[sum22] === length) {
              tmp6[sum22] = num4;
            }
            sum22 = sum22 + 1;
            tmp93 = tmp95;
            tmp14 = tmp96;
          } while (sum22 < num4);
        }
      } else {
        if (tmp10(tmp11[2]).TYPE.LeftParenthesis !== tmp92) {
          if (tmp10(tmp11[2]).TYPE.Function !== tmp92) {
            if (tmp10(tmp11[2]).TYPE.LeftSquareBracket === tmp92) {
              tmp6[num4] = num2;
              let RightSquareBracket = tmp10(tmp11[2]).TYPE.RightSquareBracket;
              tmp93 = RightSquareBracket << 24 | num4;
              tmp14 = RightSquareBracket;
            } else {
              tmp93 = num2;
              if (tmp10(tmp11[2]).TYPE.LeftCurlyBracket === tmp92) {
                tmp6[num4] = num2;
                let RightCurlyBracket = tmp10(tmp11[2]).TYPE.RightCurlyBracket;
                tmp93 = RightCurlyBracket << 24 | num4;
                tmp14 = RightCurlyBracket;
              }
            }
          }
        }
        tmp6[num4] = num2;
        let RightParenthesis = tmp10(tmp11[2]).TYPE.RightParenthesis;
        tmp93 = RightParenthesis << 24 | num4;
        tmp14 = RightParenthesis;
      }
      num4 = num4 + 1;
      tmp5[tmp15] = BadString << 24 | closure_2;
      num2 = tmp93;
      num3 = tmp14;
      num5 = tmp93;
      num6 = num4;
    } while (closure_2 < length);
  }
  tmp5[num6] = require("module_12792").TYPE.EOF << 24 | closure_2;
  tmp6[num6] = length;
  tmp6[length] = length;
  if (0 !== num5) {
    do {
      tmp102 = tmp6[tmp102] & 16777215;
      tmp6[tmp102] = length;
    } while (0 !== num5);
  }
  iter.source = StringResult;
  iter.firstCharOffset = isBOMResult;
  iter.offsetAndType = tmp5;
  iter.tokenCount = num6;
  iter.balance = tmp6;
  iter.reset();
  iter.next();
  return iter;
}

export * from "module_12792";
export * from "module_12795";
export * from "module_12794";
export default tokenize;