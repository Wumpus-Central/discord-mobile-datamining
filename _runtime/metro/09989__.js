// === Module 9989: ? ===

// Module 9989
import _mod9985 from "module_9985" /* 9985 */;
import QRPolynomial from "QRPolynomial" /* 9990 */;
import _mod9991 from "module_9991" /* 9991 */;

const obj = {
  PATTERN_POSITION_TABLE: items,
  G15: 1335,
  G18: 7973,
  G15_MASK: 21522,
  getBCHTypeInfo(arg0) {
    let diff;
    let tmp2 = obj;
    const bCHDigit = obj.getBCHDigit(tmp);
    let tmp4 = tmp;
    let tmp5 = tmp;
    if (bCHDigit - obj.getBCHDigit(obj.G15) >= 0) {
      do {
        let tmp6 = obj;
        let bCHDigit1 = obj.getBCHDigit(tmp4);
        let tmp8 = tmp4 ^ obj.G15 << bCHDigit1 - obj.getBCHDigit(obj.G15);
        let bCHDigit2 = obj.getBCHDigit(tmp8);
        tmp4 = tmp8;
        tmp5 = tmp8;
        tmp2 = obj;
        diff = bCHDigit2 - obj.getBCHDigit(obj.G15);
      } while (diff >= 0);
    }
    return (arg0 << 10 | tmp5) ^ tmp2.G15_MASK;
  },
  getBCHTypeNumber(typeNumber) {
    let diff;
    const bCHDigit = obj.getBCHDigit(tmp);
    let tmp3 = tmp;
    let tmp4 = tmp;
    if (bCHDigit - obj.getBCHDigit(obj.G18) >= 0) {
      do {
        let tmp5 = obj;
        let bCHDigit1 = obj.getBCHDigit(tmp3);
        let tmp7 = tmp3 ^ obj.G18 << bCHDigit1 - obj.getBCHDigit(obj.G18);
        let bCHDigit2 = obj.getBCHDigit(tmp7);
        tmp3 = tmp7;
        tmp4 = tmp7;
        diff = bCHDigit2 - obj.getBCHDigit(obj.G18);
      } while (diff >= 0);
    }
    return typeNumber << 12 | tmp4;
  },
  getBCHDigit(G15) {
    let tmp = G15;
    let num = 0;
    let num2 = 0;
    if (0 != G15) {
      do {
        num = num + 1;
        tmp = tmp >>> 1;
        num2 = num;
      } while (0 !== tmp);
    }
    return num2;
  },
  getPatternPosition(typeNumber) {
    return obj.PATTERN_POSITION_TABLE[typeNumber - 1];
  },
  getMask(arg0, arg1, diff3) {
    if (0 === arg0) {
      return (arg1 + diff3) % 2 === 0;
    } else if (1 === arg0) {
      return arg1 % 2 === 0;
    } else if (2 === arg0) {
      return diff3 % 3 === 0;
    } else if (3 === arg0) {
      return (arg1 + diff3) % 3 === 0;
    } else if (4 === arg0) {
      const _Math = Math;
      const _Math2 = Math;
      const rounded = Math.floor(arg1 / 2);
      return (rounded + Math.floor(diff3 / 3)) % 2 === 0;
    } else if (5 === arg0) {
      return arg1 * diff3 % 2 + arg1 * diff3 % 3 === 0;
    } else if (6 === arg0) {
      return (arg1 * diff3 % 2 + arg1 * diff3 % 3) % 2 === 0;
    } else if (7 === arg0) {
      return (arg1 * diff3 % 3 + (arg1 + diff3) % 2) % 2 === 0;
    } else {
      const _Error = Error;
      error = new Error("bad maskPattern:" + arg0);
      throw error;
    }
  },
  getErrorCorrectPolynomial(diff) {
    const tmp = new QRPolynomial([1], 0);
    let multiplyResult = tmp;
    let num = 0;
    let tmp2 = tmp;
    if (0 < diff) {
      do {
        let tmp3 = require;
        let tmp4 = dependencyMap;
        let tmp5 = QRPolynomial;
        let obj2 = _mod9991;
        let items = [1, obj2.gexp(num)];
        let tmp6 = new.target;
        let tmp7 = new.target;
        let tmp8 = items;
        let num2 = 0;
        tmp5 = new tmp5(items, 0);
        let tmp10 = tmp5;
        multiplyResult = multiplyResult.multiply(tmp5);
        num = num + 1;
        tmp2 = multiplyResult;
      } while (num < diff);
    }
    return tmp2;
  },
  getLengthInBits(arg0, arg1) {
    if (1 <= arg1) {
      if (arg1 < 10) {
        if (_mod9985.MODE_NUMBER === arg0) {
          return 10;
        } else if (tmp20(9985).MODE_ALPHA_NUM === arg0) {
          return 9;
        } else {
          if (tmp20(9985).MODE_8BIT_BYTE !== arg0) {
            if (tmp20(9985).MODE_KANJI !== arg0) {
              const _Error4 = Error;
              error = new Error("mode:" + arg0);
              throw error;
            }
          }
          return 8;
        }
      }
    }
    if (arg1 < 27) {
      if (_mod9985.MODE_NUMBER === arg0) {
        return 12;
      } else if (tmp13(9985).MODE_ALPHA_NUM === arg0) {
        return 11;
      } else if (tmp13(9985).MODE_8BIT_BYTE === arg0) {
        return 16;
      } else if (tmp13(9985).MODE_KANJI === arg0) {
        return 10;
      } else {
        const _Error3 = Error;
        const error1 = new Error("mode:" + arg0);
        throw error1;
      }
    } else if (arg1 < 41) {
      if (_mod9985.MODE_NUMBER === arg0) {
        return 14;
      } else if (tmp6(9985).MODE_ALPHA_NUM === arg0) {
        return 13;
      } else if (tmp6(9985).MODE_8BIT_BYTE === arg0) {
        return 16;
      } else if (tmp6(9985).MODE_KANJI === arg0) {
        return 12;
      } else {
        const _Error2 = Error;
        const error2 = new Error("mode:" + arg0);
        throw error2;
      }
    } else {
      const _Error = Error;
      const error3 = new Error("type:" + arg1);
      throw error3;
    }
  },
  getLostPoint(self) {
    let sum4;
    const moduleCount = self.getModuleCount();
    let num = 0;
    let num2 = 0;
    let num3 = 0;
    if (0 < moduleCount) {
      do {
        let tmp2 = num;
        let tmp3 = num2;
        let num4 = 0;
        let tmp4 = num2;
        if (0 < moduleCount) {
          let tmp6 = num4;
          let tmp7 = tmp3;
          let num5 = -1;
          let num6 = 0;
          do {
            do {
              let sum = num + num5;
              let tmp9 = num5;
              let tmp10 = num6;
              let tmp11 = num6;
              if (sum >= 0) {
                let num7 = -1;
                let tmp13 = num6;
                tmp11 = num6;
                if (moduleCount > sum) {
                  do {
                    let sum1 = num4 + num7;
                    let tmp15 = sum1 < 0;
                    let tmp16 = num7;
                    let tmp17 = tmp13;
                    if (sum1 >= 0) {
                      tmp15 = moduleCount <= sum1;
                    }
                    if (!tmp15) {
                      let tmp18 = tmp12;
                      if (0 === num5) {
                        tmp18 = 0 === num7;
                      }
                      tmp15 = tmp18;
                    }
                    let tmp19 = tmp13;
                    if (!tmp15) {
                      let sum2 = tmp13;
                      if (tmp5 == self.isDark(sum, sum1)) {
                        sum2 = tmp13 + 1;
                      }
                      tmp19 = sum2;
                    }
                    num7 = num7 + 1;
                    tmp13 = tmp19;
                    tmp11 = tmp19;
                  } while (num7 <= 1);
                }
              }
              num5 = num5 + 1;
              num6 = tmp11;
            } while (num5 <= 1);
            let sum3 = tmp3;
            if (5 < tmp11) {
              sum3 = tmp3 + (3 + tmp11 - 5);
            }
            num4 = num4 + 1;
            tmp3 = sum3;
            tmp4 = sum3;
          } while (num4 < moduleCount);
        }
        num = num + 1;
        num2 = tmp4;
        num3 = tmp4;
      } while (num < moduleCount);
    }
    let tmp22 = num3;
    let num8 = 0;
    let tmp23 = num3;
    if (0 < moduleCount - 1) {
      do {
        sum4 = num8 + 1;
        let tmp25 = num8;
        let tmp26 = tmp22;
        let num9 = 0;
        let tmp27 = tmp22;
        if (0 < moduleCount - 1) {
          do {
            let tmp28 = num9;
            let tmp29 = tmp26;
            let num10 = 0;
            if (self.isDark(num8, num9)) {
              num10 = 1;
            }
            let sum5 = num10;
            if (self.isDark(sum4, num9)) {
              sum5 = num10 + 1;
            }
            sum6 = num9 + 1;
            let sum7 = sum5;
            if (self.isDark(num8, sum6)) {
              sum7 = sum5 + 1;
            }
            let sum8 = sum7;
            if (self.isDark(sum4, sum6)) {
              sum8 = sum7 + 1;
            }
            let tmp34 = 0 !== sum8;
            if (0 !== sum8) {
              tmp34 = 4 !== sum8;
            }
            let sum9 = tmp26;
            if (!tmp34) {
              sum9 = tmp26 + 3;
            }
            tmp26 = sum9;
            tmp27 = sum9;
            num9 = sum6;
          } while (sum6 < moduleCount - 1);
        }
        tmp22 = tmp27;
        tmp23 = tmp27;
        num8 = sum4;
      } while (sum4 < moduleCount - 1);
    }
    let tmp36 = tmp23;
    let num11 = 0;
    let tmp37 = tmp23;
    if (0 < moduleCount) {
      do {
        let tmp38 = num11;
        let tmp39 = tmp36;
        let num12 = 0;
        let tmp40 = tmp36;
        if (0 < moduleCount - 6) {
          do {
            let isDarkResult = self.isDark(num11, num12);
            let tmp42 = num12;
            let tmp43 = tmp39;
            if (isDarkResult) {
              isDarkResult = !self.isDark(num11, num12 + 1);
            }
            if (isDarkResult) {
              isDarkResult = self.isDark(num11, num12 + 2);
            }
            if (isDarkResult) {
              isDarkResult = self.isDark(num11, num12 + 3);
            }
            if (isDarkResult) {
              isDarkResult = self.isDark(num11, num12 + 4);
            }
            if (isDarkResult) {
              isDarkResult = !self.isDark(num11, num12 + 5);
            }
            if (isDarkResult) {
              isDarkResult = self.isDark(num11, num12 + 6);
            }
            let sum10 = tmp39;
            if (isDarkResult) {
              sum10 = tmp39 + 40;
            }
            num12 = num12 + 1;
            tmp39 = sum10;
            tmp40 = sum10;
          } while (num12 < moduleCount - 6);
        }
        num11 = num11 + 1;
        tmp36 = tmp40;
        tmp37 = tmp40;
      } while (num11 < moduleCount);
    }
    let tmp45 = tmp37;
    let num13 = 0;
    let tmp46 = tmp37;
    if (0 < moduleCount) {
      do {
        let tmp47 = num13;
        let tmp48 = tmp45;
        let num14 = 0;
        let tmp49 = tmp45;
        if (0 < moduleCount - 6) {
          do {
            let isDarkResult1 = self.isDark(num14, num13);
            let tmp51 = num14;
            let tmp52 = tmp48;
            if (isDarkResult1) {
              isDarkResult1 = !self.isDark(num14 + 1, num13);
            }
            if (isDarkResult1) {
              isDarkResult1 = self.isDark(num14 + 2, num13);
            }
            if (isDarkResult1) {
              isDarkResult1 = self.isDark(num14 + 3, num13);
            }
            if (isDarkResult1) {
              isDarkResult1 = self.isDark(num14 + 4, num13);
            }
            if (isDarkResult1) {
              isDarkResult1 = !self.isDark(num14 + 5, num13);
            }
            if (isDarkResult1) {
              isDarkResult1 = self.isDark(num14 + 6, num13);
            }
            let sum11 = tmp48;
            if (isDarkResult1) {
              sum11 = tmp48 + 40;
            }
            num14 = num14 + 1;
            tmp48 = sum11;
            tmp49 = sum11;
          } while (num14 < moduleCount - 6);
        }
        num13 = num13 + 1;
        tmp45 = tmp49;
        tmp46 = tmp49;
      } while (num13 < moduleCount);
    }
    let num15 = 0;
    let num16 = 0;
    let num17 = 0;
    if (0 < moduleCount) {
      do {
        let tmp54 = num15;
        let tmp55 = num16;
        let num18 = 0;
        let tmp56 = num15;
        if (0 < moduleCount) {
          do {
            let tmp57 = tmp54;
            let tmp58 = num18;
            let sum12 = tmp54;
            if (self.isDark(num18, num16)) {
              sum12 = tmp54 + 1;
            }
            num18 = num18 + 1;
            tmp54 = sum12;
            tmp56 = sum12;
          } while (num18 < moduleCount);
        }
        num16 = num16 + 1;
        num15 = tmp56;
        num17 = tmp56;
      } while (num16 < moduleCount);
    }
    return tmp46 + 10 * (Math.abs(100 * num17 / moduleCount / moduleCount - 50) / 5);
  }
};
items = [[], [6, 18], [6, 22], [6, 26], [6, 30], [6, 34], [6, 22, 38], [6, 24, 42], [6, 26, 46], [6, 28, 50], [6, 30, 54], [6, 32, 58], [6, 34, 62], [6, 26, 46, 66], [6, 26, 48, 70], [6, 26, 50, 74], [6, 30, 54, 78], [6, 30, 56, 82], [6, 30, 58, 86], [6, 34, 62, 90], [6, 28, 50, 72, 94], [6, 26, 50, 74, 98], [6, 30, 54, 78, 102], [6, 28, 54, 80, 106], [6, 32, 58, 84, 110], [6, 30, 58, 86, 114], [6, 34, 62, 90, 118], [6, 26, 50, 74, 98, 122], [6, 30, 54, 78, 102, 126], [6, 26, 52, 78, 104, 130], [6, 30, 56, 82, 108, 134], [6, 34, 60, 86, 112, 138], [6, 30, 58, 86, 114, 142], [6, 34, 62, 90, 118, 146], [6, 30, 54, 78, 102, 126, 150], [6, 24, 50, 76, 102, 128, 154], [6, 28, 54, 80, 106, 132, 158], [6, 32, 58, 84, 110, 136, 162], [6, 26, 54, 82, 110, 138, 166], [6, 30, 58, 86, 114, 142, 170]];

export default obj;