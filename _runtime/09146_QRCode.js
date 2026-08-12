// _runtime/09146_QRCode.js
import { QR8bitByte } from "09147_QR8bitByte.js";
import { QRRSBlock } from "09149_QRRSBlock.js";
import { QRBitBuffer } from "09151_QRBitBuffer.js";
import { QRPolynomial } from "09153_QRPolynomial.js";
import { 09152__ } from "metro/09152__.js";
class QRCode {
  constructor(arg0, arg1) {
    return;
  }
}
const prototype = QRCode.prototype;
prototype.addData = function(arg0) {
  const dataList = this.dataList;
  dataList.push(new QR8bitByte(arg0));
  this.dataCache = null;
};
prototype.isDark = function(arg0, arg1) {
  if (arg0 >= 0) {
    const self = this;
    if (this.moduleCount > arg0) {
      if (arg1 >= 0) {
        if (self.moduleCount > arg1) {
          return self.modules[arg0][arg1];
        }
      }
    }
  }
  const error = new Error(arg0 + "," + arg1);
  throw error;
};
prototype.getModuleCount = function() {
  return this.moduleCount;
};
prototype.make = function() {
  let tmp13;
  const self = this;
  let num = 1;
  if (this.typeNumber < 1) {
    while (true) {
      let tmp = require;
      let tmp2 = dependencyMap;
      let obj = QRRSBlock;
      let rSBlocks = obj.getRSBlocks(num, self.errorCorrectLevel);
      let tmp3 = new.target;
      let tmp4 = new.target;
      let obj2 = new QRBitBuffer();
      let tmp5 = num;
      let num2 = 0;
      let num3 = 0;
      let num4 = 0;
      if (0 < rSBlocks.length) {
        do {
          num3 = num3 + rSBlocks[num2].dataCount;
          num2 = num2 + 1;
          num4 = num3;
          length = rSBlocks.length;
        } while (num2 < length);
      }
      let tmp6 = obj2;
      let num5 = 0;
      if (0 < self.dataList.length) {
        do {
          let obj3 = self.dataList[num5];
          let putResult = obj2.put(obj3.mode, 4);
          let tmp9 = require;
          let tmp10 = dependencyMap;
          length = obj3.getLength();
          let obj4 = 09152__;
          let putResult1 = obj2.put(length, obj4.getLengthInBits(obj3.mode, num));
          let writeResult = obj3.write(obj2);
          num5 = num5 + 1;
          length2 = self.dataList.length;
        } while (num5 < length2);
      }
      tmp13 = num;
      if (obj2.getLengthInBits() <= 8 * num4) {
        break;
      } else {
        num = num + 1;
        tmp13 = num;
        if (num >= 40) {
          break;
        }
      }
    }
    self.typeNumber = tmp13;
  }
  const impl = self.makeImpl(false, self.getBestMaskPattern());
};
prototype.makeImpl = function(arg0, arg1) {
  const self = this;
  this.moduleCount = 4 * this.typeNumber + 17;
  let array = new Array(this.moduleCount);
  this.modules = array;
  let num = 0;
  if (0 < this.moduleCount) {
    do {
      let _Array = Array;
      let tmp2 = new.target;
      let tmp3 = new.target;
      array = new Array(self.moduleCount);
      let tmp5 = array;
      self.modules[num] = array;
      let tmp6 = num;
      let num2 = 0;
      if (0 < self.moduleCount) {
        do {
          self.modules[num][num2] = null;
          num2 = num2 + 1;
          moduleCount = self.moduleCount;
        } while (num2 < moduleCount);
      }
      num = num + 1;
    } while (num < self.moduleCount);
  }
  const result = self.setupPositionProbePattern(0, 0);
  const result1 = self.setupPositionProbePattern(self.moduleCount - 7, 0);
  const result2 = self.setupPositionProbePattern(0, self.moduleCount - 7);
  const result3 = self.setupPositionAdjustPattern();
  self.setupTimingPattern();
  self.setupTypeInfo(arg0, arg1);
  if (self.typeNumber >= 7) {
    self.setupTypeNumber(arg0);
  }
  if (null == self.dataCache) {
    self.dataCache = QRCode.createData(self.typeNumber, self.errorCorrectLevel, self.dataList);
  }
  self.mapData(self.dataCache, arg1);
};
prototype.setupPositionProbePattern = function(arg0, arg1) {
  const self = this;
  let num = -1;
  do {
    let tmp = num;
    if (arg0 + num > -1) {
      let num2 = -1;
      if (self.moduleCount > arg0 + num) {
        do {
          let tmp2 = arg1 + num2 <= -1;
          let tmp3 = num2;
          if (!tmp2) {
            tmp2 = self.moduleCount <= arg1 + num2;
          }
          if (!tmp2) {
            let tmp5 = tmp15;
            let sum = arg1 + num2;
            if (0 <= num) {
              tmp5 = tmp14;
            }
            if (tmp5) {
              let tmp6 = 0 === num2;
              if (0 !== num2) {
                tmp6 = 6 === num2;
              }
              tmp5 = tmp6;
            }
            if (!tmp5) {
              let tmp7 = 0 <= num2;
              if (0 <= num2) {
                tmp7 = num2 <= 6;
              }
              if (tmp7) {
                let tmp8 = tmp13;
                if (0 !== num) {
                  tmp8 = tmp12;
                }
                tmp7 = tmp8;
              }
              tmp5 = tmp7;
            }
            if (!tmp5) {
              let tmp9 = tmp11;
              if (2 <= num) {
                tmp9 = tmp10;
              }
              if (tmp9) {
                tmp9 = 2 <= num2;
              }
              if (tmp9) {
                tmp9 = num2 <= 4;
              }
              tmp5 = tmp9;
            }
            self.modules[arg0 + num][sum] = tmp5;
          }
          num2 = num2 + 1;
        } while (num2 <= 7);
      }
    }
    num = num + 1;
  } while (num <= 7);
};
prototype.getBestMaskPattern = function() {
  let tmp7;
  const self = this;
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  do {
    let impl = self.makeImpl(true, num);
    let tmp2 = require;
    let tmp3 = dependencyMap;
    let obj = 09152__;
    let lostPoint = obj.getLostPoint(self);
    let tmp5 = 0 === num;
    let tmp6 = num;
    tmp7 = num2;
    let tmp8 = num3;
    if (0 !== num) {
      tmp5 = tmp8 > lostPoint;
    }
    if (tmp5) {
      tmp7 = num;
      tmp8 = lostPoint;
    }
    num = num + 1;
    num3 = tmp8;
    num2 = tmp7;
  } while (num < 8);
  return tmp7;
};
prototype.createMovieClip = function(createEmptyMovieClip) {
  const self = this;
  const emptyMovieClip = createEmptyMovieClip.createEmptyMovieClip(arg1, arg2);
  this.make();
  let num = 0;
  if (0 < this.modules.length) {
    do {
      let tmp2 = num;
      let sum = tmp2 + 1;
      let tmp4 = num;
      for (let num2 = 0; num2 < self.modules[num].length; num2 = num2 + 1) {
        let tmp5 = num2;
        if (self.modules[num][num2]) {
          let tmp6 = num2;
          let beginFillResult = emptyMovieClip.beginFill(0, 100);
          let moveToResult = emptyMovieClip.moveTo(tmp6, tmp2);
          let sum1 = tmp6 + 1;
          let lineToResult = emptyMovieClip.lineTo(sum1, tmp2);
          let lineToResult1 = emptyMovieClip.lineTo(sum1, sum);
          let lineToResult2 = emptyMovieClip.lineTo(tmp6, sum);
          let endFillResult = emptyMovieClip.endFill();
        }
      }
      num = num + 1;
    } while (num < self.modules.length);
  }
  return emptyMovieClip;
};
prototype.setupTimingPattern = function() {
  const self = this;
  let num = 8;
  if (8 < this.moduleCount - 8) {
    do {
      let tmp = num;
      if (null == self.modules[num][6]) {
        self.modules[num][6] = num % 2 === 0;
      }
      num = num + 1;
    } while (num < self.moduleCount - 8);
  }
  let num2 = 8;
  if (8 < self.moduleCount - 8) {
    do {
      let tmp2 = num2;
      if (null == self.modules[6][num2]) {
        self.modules[6][num2] = num2 % 2 === 0;
      }
      num2 = num2 + 1;
    } while (num2 < self.moduleCount - 8);
  }
};
prototype.setupPositionAdjustPattern = function() {
  const self = this;
  const patternPosition = 09152__.getPatternPosition(this.typeNumber);
  for (let num = 0; num < patternPosition.length; num = num + 1) {
    let tmp = num;
    for (let num2 = 0; num2 < patternPosition.length; num2 = num2 + 1) {
      let tmp2 = patternPosition[num];
      let tmp3 = patternPosition[num2];
      let tmp4 = num2;
      let num3 = -2;
      if (null == self.modules[tmp2][tmp3]) {
        let tmp8 = num3;
        let num4 = -2;
        do {
          do {
            let tmp10 = num4;
            let tmp11 = tmp7;
            let sum = tmp3 + num4;
            if (-2 !== num3) {
              tmp11 = tmp6;
            }
            if (!tmp11) {
              tmp11 = -2 === num4;
            }
            if (!tmp11) {
              tmp11 = 2 === num4;
            }
            if (!tmp11) {
              let tmp12 = tmp5;
              if (0 === num3) {
                tmp12 = 0 === num4;
              }
              tmp11 = tmp12;
            }
            self.modules[tmp2 + num3][sum] = tmp11;
            num4 = num4 + 1;
          } while (num4 <= 2);
          num3 = num3 + 1;
        } while (num3 <= 2);
      }
    }
  }
};
prototype.setupTypeNumber = function(arg0) {
  let num2;
  const self = this;
  const bCHTypeNumber = 09152__.getBCHTypeNumber(this.typeNumber);
  let num = 0;
  do {
    let tmp2 = !arg0;
    let tmp3 = num;
    if (!arg0) {
      tmp2 = 1 === (bCHTypeNumber >> num & 1);
    }
    let _Math = Math;
    self.modules[Math.floor(Math, num / 3)][num % 3 + self.moduleCount - 8 - 3] = tmp2;
    num = num + 1;
    num2 = 0;
  } while (num < 18);
  do {
    let tmp4 = !arg0;
    let tmp5 = num2;
    if (!arg0) {
      tmp4 = 1 === (bCHTypeNumber >> num2 & 1);
    }
    let _Math2 = Math;
    self.modules[num2 % 3 + self.moduleCount - 8 - 3][Math.floor(num2 / 3)] = tmp4;
    num2 = num2 + 1;
  } while (num2 < 18);
};
prototype.setupTypeInfo = function(arg0, arg1) {
  let num2;
  const self = this;
  const bCHTypeInfo = 09152__.getBCHTypeInfo(this.errorCorrectLevel << 3 | arg1);
  let num = 0;
  do {
    let tmp3 = !arg0;
    let tmp4 = num;
    if (!arg0) {
      tmp3 = 1 === (bCHTypeInfo >> num & 1);
    }
    if (num < 6) {
      self.modules[num][8] = tmp3;
    } else if (num < 8) {
      self.modules[num + 1][8] = tmp3;
    } else {
      self.modules[self.moduleCount - 15 + num][8] = tmp3;
    }
    num = num + 1;
    num2 = 0;
  } while (num < 15);
  do {
    let tmp5 = !arg0;
    let tmp6 = num2;
    if (!arg0) {
      tmp5 = 1 === (bCHTypeInfo >> num2 & 1);
    }
    if (num2 < 8) {
      self.modules[8][self.moduleCount - num2 - 1] = tmp5;
    } else if (num2 < 9) {
      self.modules[8][15 - num2 - 1 + 1] = tmp5;
    } else {
      self.modules[8][15 - num2 - 1] = tmp5;
    }
    num2 = num2 + 1;
  } while (num2 < 15);
  self.modules[self.moduleCount - 8][8] = !arg0;
};
prototype.mapData = function(arg0, arg1) {
  const self = this;
  const diff = this.moduleCount - 1;
  const diff1 = this.moduleCount - 1;
  if (0 < diff1) {
    while (true) {
      let tmp3 = diff1;
      let tmp4 = num;
      let tmp5 = num2;
      let tmp6 = diff;
      let tmp7 = num3;
      let tmp8 = num;
      let tmp9 = num2;
      let tmp10 = diff;
      let diff2 = diff1;
      if (6 === diff1) {
        diff2 = diff1 - 1;
        tmp8 = num;
        tmp9 = num2;
        tmp10 = diff;
      }
      let tmp12 = diff2;
      let tmp13 = tmp8;
      let tmp14 = tmp9;
      let tmp15 = tmp10;
      let num4 = 0;
      while (true) {
        do {
          let diff3 = diff2 - num4;
          let tmp17 = num4;
          let tmp18 = tmp13;
          let tmp19 = tmp14;
          let sum = tmp13;
          let num5 = tmp14;
          if (null == self.modules[tmp10][diff3]) {
            let flag = false;
            if (tmp13 < arg0.length) {
              flag = 1 === (arg0[tmp13] >>> tmp14 & 1);
            }
            let tmp21 = require;
            let tmp22 = dependencyMap;
            let obj = 09152__;
            let tmp23 = flag;
            if (obj.getMask(arg1, tmp10, diff3)) {
              tmp23 = !flag;
            }
            self.modules[tmp10][diff3] = tmp23;
            num5 = tmp14 - 1;
            sum = tmp13;
            if (-1 === num5) {
              sum = tmp13 + 1;
              num5 = 7;
            }
          }
          num4 = num4 + 1;
          tmp13 = sum;
          tmp14 = num5;
        } while (num4 < 2);
        let sum1 = tmp10 + num3;
        if (sum1 < 0) {
          break;
        } else {
          tmp8 = sum;
          tmp9 = num5;
          tmp10 = sum1;
          if (self.moduleCount <= sum1) {
            break;
          }
        }
      }
    }
  }
};
QRCode.PAD0 = 236;
QRCode.PAD1 = 17;
QRCode.createData = (arg0, arg1, arg2) => {
  let length;
  let length2;
  let result1;
  const rSBlocks = QRRSBlock.getRSBlocks(arg0, arg1);
  const obj2 = new QRBitBuffer();
  let num = 0;
  if (0 < arg2.length) {
    do {
      let obj3 = arg2[num];
      let putResult = obj2.put(obj3.mode, 4);
      let tmp3 = require;
      let tmp4 = dependencyMap;
      length = obj3.getLength();
      let obj4 = 09152__;
      let putResult1 = obj2.put(length, obj4.getLengthInBits(obj3.mode, arg0));
      let writeResult = obj3.write(obj2);
      num = num + 1;
      length = arg2.length;
    } while (num < length);
  }
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  if (0 < rSBlocks.length) {
    do {
      num2 = num2 + rSBlocks[num3].dataCount;
      num3 = num3 + 1;
      num4 = num2;
      length2 = rSBlocks.length;
    } while (num3 < length2);
  }
  const result = 8 * num4;
  if (obj2.getLengthInBits() > result) {
    const _Error = Error;
    const error = new Error("code length overflow. (" + obj2.getLengthInBits() + ">" + result + ")");
    throw error;
  } else {
    if (obj2.getLengthInBits() + 4 <= result) {
      obj2.put(0, 4);
    }
    if (obj2.getLengthInBits() % 8 !== 0) {
      do {
        let putBitResult = obj2.putBit(false);
        result1 = obj2.getLengthInBits() % 8;
      } while (result1 !== 0);
    }
    if (obj2.getLengthInBits() < result) {
      obj2.put(QRCode.PAD0, 8);
      if (obj2.getLengthInBits() < result) {
        obj2.put(QRCode.PAD1, 8);
        while (obj2.getLengthInBits() < result) {
          let putResult5 = obj2.put(tmp13.PAD0, 8);
          if (obj2.getLengthInBits() >= result) {
            break;
          }
        }
        tmp13 = QRCode;
      }
    }
    return QRCode.createBytes(obj2, rSBlocks);
  }
  const obj = QRRSBlock;
};
QRCode.createBytes = (arg0, arg1) => {
  let length2;
  let array = new Array(arg1.length);
  array = new Array(arg1.length);
  let num = 0;
  let num2 = 0;
  let num3 = 0;
  let num4 = 0;
  let num5 = 0;
  let num6 = 0;
  if (0 < arg1.length) {
    do {
      let dataCount = arg1[num].dataCount;
      let diff = arg1[num].totalCount - dataCount;
      let _Math = Math;
      let bound = Math.max(num3, dataCount);
      let _Math2 = Math;
      let bound1 = Math.max(num2, diff);
      let _Array = Array;
      let tmp6 = new.target;
      let tmp7 = new.target;
      let tmp8 = dataCount;
      let array1 = new Array(dataCount);
      let tmp10 = array1;
      array[num] = array1;
      let tmp11 = num;
      let tmp12 = num4;
      let num7 = 0;
      if (0 < array[num].length) {
        do {
          array[num][num7] = 255 & arg0.buffer[num7 + num4];
          num7 = num7 + 1;
          length = array[num].length;
        } while (num7 < length);
      }
      let tmp14 = require;
      let tmp15 = dependencyMap;
      let sum = num4 + dataCount;
      let obj = 09152__;
      let errorCorrectPolynomial = obj.getErrorCorrectPolynomial(diff);
      let tmp16 = QRPolynomial;
      let tmp17 = new.target;
      let tmp18 = new.target;
      tmp16 = new tmp16(array[num], errorCorrectPolynomial.getLength() - 1);
      let tmp19 = tmp16;
      let modResult = tmp16.mod(errorCorrectPolynomial);
      let _Array2 = Array;
      let tmp20 = new.target;
      let tmp21 = new.target;
      let array2 = new Array(errorCorrectPolynomial.getLength() - 1);
      let tmp23 = array2;
      array[num] = array2;
      for (let num8 = 0; num8 < array[num].length; num8 = num8 + 1) {
        let diff1 = num8 + modResult.getLength() - array[num].length;
        let tmp25 = num8;
        let num9 = 0;
        if (0 <= diff1) {
          num9 = modResult.get(diff1);
        }
        array[num][num8] = num9;
      }
      num = num + 1;
      num2 = bound1;
      num3 = bound;
      num4 = sum;
      num5 = bound1;
      num6 = bound;
    } while (num < arg1.length);
  }
  let num10 = 0;
  let num11 = 0;
  let num12 = 0;
  if (0 < arg1.length) {
    do {
      num10 = num10 + arg1[num11].totalCount;
      num11 = num11 + 1;
      num12 = num10;
      length2 = arg1.length;
    } while (num11 < length2);
  }
  const array3 = new Array(num12);
  let num13 = 0;
  let num14 = 0;
  let num15 = 0;
  if (0 < num6) {
    do {
      let tmp27 = num13;
      let tmp28 = num14;
      let num16 = 0;
      let tmp29 = num13;
      if (0 < arg1.length) {
        do {
          let tmp30 = tmp27;
          let tmp31 = num16;
          let sum1 = tmp27;
          if (num14 < array[num16].length) {
            sum1 = tmp27 + 1;
            array3[tmp27] = array[num16][num14];
          }
          num16 = num16 + 1;
          tmp27 = sum1;
          tmp29 = sum1;
        } while (num16 < arg1.length);
      }
      num14 = num14 + 1;
      num13 = tmp29;
      num15 = tmp29;
    } while (num14 < num6);
  }
  let num17 = 0;
  if (0 < num5) {
    do {
      let tmp33 = num15;
      let tmp34 = num17;
      let num18 = 0;
      let tmp35 = num15;
      if (0 < arg1.length) {
        do {
          let tmp36 = tmp33;
          let tmp37 = num18;
          let sum2 = tmp33;
          if (num17 < array[num18].length) {
            sum2 = tmp33 + 1;
            array3[tmp33] = array[num18][num17];
          }
          num18 = num18 + 1;
          tmp33 = sum2;
          tmp35 = sum2;
        } while (num18 < arg1.length);
      }
      num17 = num17 + 1;
      num15 = tmp35;
    } while (num17 < num5);
  }
  return array3;
};

export default QRCode;