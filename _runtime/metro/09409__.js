// === Module 9409: ? ===

// Module 9409
import uint16Array from "uint16Array" /* 9410 */;
import _mod9411 from "module_9411" /* 9411 */;
import replaceCodePoint from "replaceCodePoint" /* 9412 */;

let self = this;
let c0 = require;
let self2 = this;
if (this) {
  self2 = self.__createBinding;
}
if (self2) {
  let __setModuleDefault = self;
  if (self) {
    __setModuleDefault = self.__setModuleDefault;
  }
  if (__setModuleDefault) {
    let fn = self;
    if (self) {
      fn = self.__importStar;
    }
    if (!fn) {
      fn = (__esModule) => {
        if (__esModule) {
          if (__esModule.__esModule) {
            return __esModule;
          }
        }
        const obj = {};
        if (null != __esModule) {
          for (const key10009 in arg0) {
            let tmp9 = "default" !== key10009;
            if (!tmp9) {
              if (!tmp9) {
                continue;
              } else {
                let tmp6 = self2(obj, arg0, key10009);
                continue;
              }
              continue;
            } else {
              let _Object = Object;
              hasOwnProperty = Object.prototype.hasOwnProperty;
              let call = hasOwnProperty.call;
              if (typeof call === "unknown") {
                let hasOwnPropertyResult = hasOwnProperty(key10009);
              } else {
                hasOwnPropertyResult = call(arg0, key10009);
              }
            }
          }
        }
        __setModuleDefault(obj, __esModule);
        return obj;
      };
    }
    let fn2 = self;
    if (self) {
      fn2 = self.__importDefault;
    }
    if (!fn2) {
      fn2 = (__esModule) => {
        if (!__esModule) {
          const obj = { default: __esModule };
          let tmp = obj;
        } else {
          tmp = __esModule;
        }
        return tmp;
      };
    }
    const _Object3 = Object;
    exports.htmlDecodeTree = undefined;
    exports.xmlDecodeTree = undefined;
    exports.decodeCodePoint = undefined;
    exports.replaceCodePoint = undefined;
    exports.fromCodePoint = undefined;
    exports.BinTrieFlags = undefined;
    exports.DecodingMode = undefined;
    exports.EntityDecoder = undefined;
    exports.determineBranch = undefined;
    exports.decodeHTML = undefined;
    exports.decodeHTMLAttribute = undefined;
    exports.decodeHTMLStrict = undefined;
    exports.decodeXML = undefined;
    const fn2Result = fn2(uint16Array);
    exports.htmlDecodeTree = fn2Result.default;
    const fn2Result1 = fn2(_mod9411);
    exports.xmlDecodeTree = fn2Result1.default;
    const fnResult = fn(replaceCodePoint);
    let hasOwnProperty = fnResult;
    exports.decodeCodePoint = fnResult.default;
    const _Object4 = Object;
    let obj = {
      enumerable: true,
      get() {
            return _var(obj18[2]).replaceCodePoint;
          }
    };
    Object.defineProperty(exports, "replaceCodePoint", obj);
    const _Object5 = Object;
    const obj2 = {
      enumerable: true,
      get() {
            return _var(obj18[2]).fromCodePoint;
          }
    };
    Object.defineProperty(exports, "fromCodePoint", obj2);
    const obj3 = { NUM: 35 };
    obj3[35] = "NUM";
    obj3.SEMI = 59;
    obj3[59] = "SEMI";
    obj3.EQUALS = 61;
    obj3[61] = "EQUALS";
    obj3.ZERO = 48;
    obj3[48] = "ZERO";
    obj3.NINE = 57;
    obj3[57] = "NINE";
    obj3.LOWER_A = 97;
    obj3[97] = "LOWER_A";
    obj3.LOWER_F = 102;
    obj3[102] = "LOWER_F";
    obj3.LOWER_X = 120;
    obj3[120] = "LOWER_X";
    obj3.LOWER_Z = 122;
    obj3[122] = "LOWER_Z";
    obj3.UPPER_A = 65;
    obj3[65] = "UPPER_A";
    obj3.UPPER_F = 70;
    obj3[70] = "UPPER_F";
    obj3.UPPER_Z = 90;
    obj3[90] = "UPPER_Z";
    let BinTrieFlags = exports.BinTrieFlags;
    if (!BinTrieFlags) {
      const obj4 = {};
      exports.BinTrieFlags = obj4;
      BinTrieFlags = obj4;
    }
    BinTrieFlags.VALUE_LENGTH = 49152;
    BinTrieFlags[49152] = "VALUE_LENGTH";
    BinTrieFlags.BRANCH_LENGTH = 16256;
    BinTrieFlags[16256] = "BRANCH_LENGTH";
    BinTrieFlags.JUMP_TABLE = 127;
    BinTrieFlags[127] = "JUMP_TABLE";
    const obj5 = { EntityStart: 0 };
    obj5[0] = "EntityStart";
    obj5.NumericStart = 1;
    obj5[1] = "NumericStart";
    obj5.NumericDecimal = 2;
    obj5[2] = "NumericDecimal";
    obj5.NumericHex = 3;
    obj5[3] = "NumericHex";
    obj5.NamedEntity = 4;
    obj5[4] = "NamedEntity";
    let DecodingMode = exports.DecodingMode;
    if (!DecodingMode) {
      const obj6 = {};
      exports.DecodingMode = obj6;
      DecodingMode = obj6;
    }
    DecodingMode.Legacy = 0;
    DecodingMode[0] = "Legacy";
    DecodingMode.Strict = 1;
    DecodingMode[1] = "Strict";
    DecodingMode.Attribute = 2;
    DecodingMode[2] = "Attribute";
    class EntityDecoder {
      constructor(arg0, arg1, arg2) {
        return;
      }
      startEntity(arg0) {
        return;
      }
      write(arg0, arg1) {
        self = this;
        state = this.state;
        tmp = closure_7;
        if (closure_7.EntityStart === state) {
          tmp2 = closure_4;
          if (global.charCodeAt(require) === closure_4.NUM) {
            self.state = tmp.NumericStart;
            num = 1;
            self.consumed = self.consumed + 1;
            stateNumericStartResult = self.stateNumericStart(global, require + 1);
          } else {
            self.state = tmp.NamedEntity;
            stateNumericStartResult = self.stateNamedEntity(global, require);
          }
          return stateNumericStartResult;
        } else if (tmp.NumericStart === state) {
          return self.stateNumericStart(global, require);
        } else if (tmp.NumericDecimal === state) {
          return self.stateNumericDecimal(global, require);
        } else if (tmp.NumericHex === state) {
          return self.stateNumericHex(global, require);
        } else if (tmp.NamedEntity === state) {
          return self.stateNamedEntity(global, require);
        } else {
          return;
        }
      }
      stateNumericStart(arg0, arg1) {
        sum = require;
        if (require >= global.length) {
          return -1;
        } else {
          self = this;
          num = 32;
          tmp2 = closure_4;
          if ((32 | global.charCodeAt(sum)) === closure_4.LOWER_X) {
            tmp5 = closure_7;
            self.state = closure_7.NumericHex;
            num2 = 1;
            self.consumed = self.consumed + 1;
            sum = sum + 1;
            stateNumericHexResult = self.stateNumericHex(global, sum);
          } else {
            tmp3 = closure_7;
            self.state = closure_7.NumericDecimal;
            stateNumericHexResult = self.stateNumericDecimal(global, sum);
          }
          tmp6 = stateNumericHexResult;
        }
        return;
      }
      addToNumericResult(arg0, arg1, arg2, arg3) {
        if (require !== importDefault) {
          self = this;
          tmp = global;
          tmp2 = importAll;
          diff = importDefault - require;
          tmp4 = globalThis;
          _Math = Math;
          _parseInt = parseInt;
          result = this.result * Math.pow(importAll, diff);
          this.result = result + parseInt(global.substr(require, diff), importAll);
          this.consumed = this.consumed + diff;
        }
        return;
      }
      stateNumericHex(arg0, arg1) {
        self = this;
        sum = require;
        tmp2 = require;
        if (require < global.length) {
          while (true) {
            charCodeAtResult = global.charCodeAt(sum);
            tmp4 = closure_4;
            tmp5 = charCodeAtResult >= closure_4.ZERO;
            tmp6 = sum;
            if (tmp5) {
              tmp5 = charCodeAtResult <= tmp4.NINE;
            }
            if (!tmp5) {
              if (charCodeAtResult < tmp4.UPPER_A) {
                if (charCodeAtResult < tmp4.LOWER_A) {
                  break;
                } else if (charCodeAtResult > tmp4.LOWER_F) {
                  break;
                }
              }
            }
            sum = sum + 1;
            tmp2 = sum;
          }
          num = 16;
          tmp7 = self;
          tmp8 = global;
          tmp9 = require;
          tmp10 = sum;
          addToNumericResultResult = self.addToNumericResult(global, require, tmp6, 16);
          num2 = 3;
          return self.emitNumericEntity(charCodeAtResult, 3);
        }
        addToNumericResultResult1 = self.addToNumericResult(global, require, tmp2, 16);
        return -1;
      }
      stateNumericDecimal(arg0, arg1) {
        self = this;
        sum = require;
        tmp2 = require;
        if (require < global.length) {
          while (true) {
            charCodeAtResult = global.charCodeAt(sum);
            tmp4 = charCodeAtResult >= closure_4.ZERO;
            tmp5 = sum;
            if (tmp4) {
              tmp4 = charCodeAtResult <= closure_4.NINE;
            }
            if (!tmp4) {
              break;
            } else {
              sum = sum + 1;
              tmp2 = sum;
            }
          }
          num = 10;
          tmp6 = self;
          tmp7 = global;
          tmp8 = require;
          tmp9 = sum;
          addToNumericResultResult = self.addToNumericResult(global, require, tmp5, 10);
          num2 = 2;
          return self.emitNumericEntity(charCodeAtResult, 2);
        }
        addToNumericResultResult1 = self.addToNumericResult(global, require, tmp2, 10);
        return -1;
      }
      emitNumericEntity(arg0, arg1) {
        self = this;
        if (this.consumed <= require) {
          errors3 = self.errors;
          tmp6 = null;
          tmp7 = null === errors3;
          if (!tmp7) {
            tmp7 = undefined === errors3;
          }
          if (!tmp7) {
            result = errors3.absenceOfDigitsInNumericCharacterReference(self.consumed);
          }
          num3 = 0;
          return 0;
        } else {
          tmp9 = global;
          tmp10 = closure_4;
          if (global === closure_4.SEMI) {
            num2 = 1;
            self.consumed = self.consumed + 1;
          } else {
            tmp = closure_8;
            if (self.decodeMode === closure_8.Strict) {
              num = 0;
              return 0;
            }
          }
          tmp2 = closure_5;
          emitCodePointResult = self.emitCodePoint(closure_5.replaceCodePoint(self.result), self.consumed);
          if (self.errors) {
            if (global !== tmp10.SEMI) {
              errors = self.errors;
              result1 = errors.missingSemicolonAfterCharacterReference();
            }
            errors2 = self.errors;
            result2 = errors2.validateNumericCharacterReference(self.result);
          }
          return self.consumed;
        }
      }
      stateNamedEntity(arg0, arg1) {
        self = this;
        sum2 = require;
        decodeTree = this.decodeTree;
        tmp2 = decodeTree[this.treeIndex];
        tmp3 = (tmp2 & closure_6.VALUE_LENGTH) >> 14;
        if (require < global.length) {
          while (true) {
            charCodeAtResult = global.charCodeAt(sum2);
            _Math = Math;
            sum = self.treeIndex + Math.max(1, tmp3);
            tmp6 = closure_6;
            tmp7 = (tmp2 & closure_6.BRANCH_LENGTH) >> 7;
            tmp8 = tmp2 & closure_6.JUMP_TABLE;
            tmp9 = tmp3;
            tmp10 = sum2;
            if (0 === tmp7) {
              num3 = -1;
              if (0 !== tmp8) {
                num3 = -1;
                if (charCodeAtResult === tmp8) {
                  num3 = sum;
                }
              }
              num = num3;
            } else if (tmp8) {
              diff = charCodeAtResult - tmp8;
              num2 = -1;
              if (diff >= 0) {
                num2 = -1;
                if (diff < tmp7) {
                  num2 = decodeTree[sum + diff] - 1;
                }
              }
              num = num2;
            } else {
              diff1 = sum + tmp7 - 1;
              tmp12 = sum;
              num = -1;
              if (sum <= diff1) {
                while (true) {
                  tmp13 = tmp12 + diff1 >>> 1;
                  tmp14 = decodeTree[tmp13];
                  tmp15 = diff1;
                  sum1 = tmp12;
                  if (tmp14 < charCodeAtResult) {
                    sum1 = tmp13 + 1;
                    diff2 = diff1;
                  } else if (tmp14 <= charCodeAtResult) {
                    break;
                  } else {
                    diff2 = tmp13 - 1;
                  }
                  diff1 = diff2;
                  tmp12 = sum1;
                  num = -1;
                }
                num = decodeTree[tmp13 + tmp7];
              }
            }
            self.treeIndex = num;
            if (self.treeIndex < 0) {
              break;
            } else {
              tmp25 = decodeTree[self.treeIndex];
              tmp26 = closure_6;
              tmp27 = (tmp25 & closure_6.VALUE_LENGTH) >> 14;
              if (0 !== tmp27) {
                tmp19 = closure_4;
                if (charCodeAtResult === closure_4.SEMI) {
                  return self.emitNamedEntityData(self.treeIndex, tmp27, self.consumed + self.excess);
                } else {
                  tmp20 = closure_8;
                  if (self.decodeMode !== closure_8.Strict) {
                    self.result = self.treeIndex;
                    self.consumed = self.consumed + self.excess;
                    self.excess = 0;
                  }
                }
              }
              sum2 = sum2 + 1;
              self.excess = self.excess + 1;
              tmp3 = tmp27;
              tmp2 = tmp25;
            }
          }
          num4 = 0;
          if (0 !== self.result) {
            tmp28 = closure_8;
            if (self.decodeMode !== closure_8.Attribute) {
              num4 = self.emitNotTerminatedNamedEntity();
            } else {
              num4 = 0;
              if (0 !== tmp3) {
                tmp29 = closure_4;
                tmp24 = charCodeAtResult === closure_4.EQUALS;
                if (!tmp24) {
                  tmp21 = charCodeAtResult >= tmp29.UPPER_A && charCodeAtResult <= tmp29.UPPER_Z;
                  if (!tmp21) {
                    tmp22 = charCodeAtResult >= tmp29.LOWER_A && charCodeAtResult <= tmp29.LOWER_Z;
                    tmp21 = tmp22;
                  }
                  if (!tmp21) {
                    tmp23 = charCodeAtResult >= tmp29.ZERO && charCodeAtResult <= tmp29.NINE;
                    tmp21 = tmp23;
                  }
                  tmp24 = tmp21;
                }
                num4 = 0;
              }
            }
          }
          return num4;
        }
        return -1;
      }
      emitNotTerminatedNamedEntity() {
        result = this.result;
        emitNamedEntityDataResult = this.emitNamedEntityData(result, (this.decodeTree[result] & closure_6.VALUE_LENGTH) >> 14, this.consumed);
        errors = this.errors;
        tmp2 = null === errors;
        if (!tmp2) {
          tmp2 = undefined === errors;
        }
        if (!tmp2) {
          result1 = errors.missingSemicolonAfterCharacterReference();
        }
        return this.consumed;
      }
      emitNamedEntityData(arg0, arg1, arg2) {
        self = this;
        decodeTree = this.decodeTree;
        if (1 === require) {
          tmp2 = closure_6;
          tmp = decodeTree[global] & ~closure_6.VALUE_LENGTH;
        } else {
          tmp = decodeTree[global + 1];
        }
        emitCodePointResult = this.emitCodePoint(tmp, importDefault);
        if (3 === require) {
          num = 2;
          emitCodePointResult1 = self.emitCodePoint(decodeTree[global + 2], importDefault);
        }
        return importDefault;
      }
      end() {
        self = this;
        state = this.state;
        tmp = closure_7;
        if (closure_7.NamedEntity === state) {
          num7 = 0;
          num8 = 0;
          if (0 !== self.result) {
            tmp5 = closure_8;
            if (self.decodeMode !== closure_8.Attribute) {
              num8 = self.emitNotTerminatedNamedEntity();
            } else {
              num8 = 0;
            }
          }
          return num8;
        } else if (tmp.NumericDecimal === state) {
          num5 = 2;
          num6 = 0;
          return self.emitNumericEntity(0, 2);
        } else if (tmp.NumericHex === state) {
          num3 = 3;
          num4 = 0;
          return self.emitNumericEntity(0, 3);
        } else if (tmp.NumericStart === state) {
          errors = self.errors;
          tmp2 = null;
          tmp3 = null === errors;
          if (!tmp3) {
            tmp3 = undefined === errors;
          }
          if (!tmp3) {
            result = errors.absenceOfDigitsInNumericCharacterReference(self.consumed);
          }
          num2 = 0;
          return 0;
        } else if (tmp.EntityStart === state) {
          num = 0;
          return 0;
        } else {
          return;
        }
      }
    }
    exports.EntityDecoder = EntityDecoder;
    exports.determineBranch = function determineBranch(entityTrie, trieCurrent, arg2, arg3) {
      let tmp5;
      if (0 === (trieCurrent & BinTrieFlags.BRANCH_LENGTH) >> 7) {
        let num7 = -1;
        if (0 !== tmp2) {
          num7 = -1;
          if (arg3 === tmp2) {
            num7 = arg2;
          }
        }
        return num7;
      } else if (tmp2) {
        const diff = arg3 - tmp2;
        let num4 = -1;
        if (diff >= 0) {
          num4 = -1;
          if (diff < tmp) {
            num4 = entityTrie[arg2 + diff] - 1;
          }
        }
        return num4;
      } else {
        let diff1 = arg2 + tmp - 1;
        let tmp4 = arg2;
        if (arg2 <= diff1) {
          while (true) {
            tmp5 = tmp4 + diff1 >>> 1;
            let tmp6 = entityTrie[tmp5];
            let sum = tmp4;
            if (tmp6 < arg3) {
              sum = tmp5 + 1;
              let diff2 = diff1;
            } else if (tmp6 <= arg3) {
              break;
            } else {
              diff2 = tmp5 - 1;
            }
            diff1 = diff2;
            tmp4 = sum;
          }
          return entityTrie[tmp5 + tmp];
        }
        return -1;
      }
    };
    c0 = "";
    Object.create(EntityDecoder.prototype);
    const obj8 = {
      decodeTree: fn2Result.default,
      (arg0) => {
            const sum = c0 + hasOwnProperty.fromCodePoint(arg0);
            c0 = sum;
            return sum;
          },
      errors: undefined,
      state: obj5.EntityStart,
      consumed: 1,
      result: 0,
      treeIndex: 0,
      excess: 1,
      decodeMode: DecodingMode.Strict
    };
    function decodeWithTrie(arg0, arg1) {

    }
    c0 = "";
    Object.create(EntityDecoder.prototype);
    const obj18 = {
      decodeTree: fn2Result1.default,
      (arg0) => {
            const sum = c0 + hasOwnProperty.fromCodePoint(arg0);
            c0 = sum;
            return sum;
          },
      errors: undefined,
      state: obj5.EntityStart,
      consumed: 1,
      result: 0,
      treeIndex: 0,
      excess: 1,
      decodeMode: DecodingMode.Strict
    };
    decodeWithTrie = function decodeWithTrie(arg0, arg1) {

    };
    exports.decodeHTML = function decodeHTML(arr, mode) {
      let Legacy = mode;
      if (undefined === mode) {
        Legacy = DecodingMode.Legacy;
      }
      if (typeof decodeWithTrie === "function") {
        const index = arr.indexOf("&", 0);
        let index1 = index;
        let num3 = 0;
        let num4 = 0;
        if (index >= 0) {
          c0 = c0 + arr.slice(num3, index1);
          obj18.startEntity(Legacy);
          const writeResult = obj18.write(arr, index1 + 1);
          while (writeResult >= 0) {
            let sum = index1 + writeResult;
            let sum1 = sum;
            if (0 === writeResult) {
              sum1 = sum + 1;
            }
            index1 = arr.indexOf("&", sum1);
            num3 = sum;
            num4 = sum;
          }
          num4 = index1 + obj18.end();
        }
        c0 = "";
        return c0 + arr.slice(num4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    exports.decodeHTMLAttribute = function decodeHTMLAttribute(arr) {
      if (typeof decodeWithTrie === "function") {
        const index = arr.indexOf("&", 0);
        let index1 = index;
        let num3 = 0;
        let num4 = 0;
        if (index >= 0) {
          c0 = c0 + arr.slice(num3, index1);
          obj18.startEntity(tmp);
          const writeResult = obj18.write(arr, index1 + 1);
          while (writeResult >= 0) {
            let sum = index1 + writeResult;
            let sum1 = sum;
            if (0 === writeResult) {
              sum1 = sum + 1;
            }
            index1 = arr.indexOf("&", sum1);
            num3 = sum;
            num4 = sum;
          }
          num4 = index1 + obj18.end();
        }
        c0 = "";
        return c0 + arr.slice(num4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    exports.decodeHTMLStrict = function decodeHTMLStrict(arr) {
      if (typeof decodeWithTrie === "function") {
        const index = arr.indexOf("&", 0);
        let index1 = index;
        let num3 = 0;
        let num4 = 0;
        if (index >= 0) {
          c0 = c0 + arr.slice(num3, index1);
          obj18.startEntity(tmp);
          const writeResult = obj18.write(arr, index1 + 1);
          while (writeResult >= 0) {
            let sum = index1 + writeResult;
            let sum1 = sum;
            if (0 === writeResult) {
              sum1 = sum + 1;
            }
            index1 = arr.indexOf("&", sum1);
            num3 = sum;
            num4 = sum;
          }
          num4 = index1 + obj18.end();
        }
        c0 = "";
        return c0 + arr.slice(num4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
    exports.decodeXML = function decodeXML(arr) {
      if (typeof decodeWithTrie === "function") {
        const index = arr.indexOf("&", 0);
        let index1 = index;
        let num3 = 0;
        let num4 = 0;
        if (index >= 0) {
          c0 = c0 + arr.slice(num3, index1);
          obj18.startEntity(tmp);
          const writeResult = obj18.write(arr, index1 + 1);
          while (writeResult >= 0) {
            let sum = index1 + writeResult;
            let sum1 = sum;
            if (0 === writeResult) {
              sum1 = sum + 1;
            }
            index1 = arr.indexOf("&", sum1);
            num3 = sum;
            num4 = sum;
          }
          num4 = index1 + obj18.end();
        }
        c0 = "";
        return c0 + arr.slice(num4);
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    };
  } else {
    const _Object2 = Object;
  }
} else {
  let _Object = Object;
}