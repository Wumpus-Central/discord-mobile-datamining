arg5.varint64read = undefined;
arg5.varint64write = undefined;
arg5.int64fromString = undefined;
arg5.int64toString = undefined;
arg5.varint32write = undefined;
arg5.varint32read = undefined;
arg5.varint64read = function varint64read() {
  const self = this;
  let num = 0;
  let num2 = 0;
  self.pos = +self.pos + 1;
  const tmp3 = num2 | (127 & self.buf[+self.pos]) << num;
  while (128 & self.buf[+self.pos]) {
    num = num + 7;
    num2 = tmp3;
    if (num < 28) {
      continue;
    } else {
      let tmp5 = +self.pos;
      self.pos = tmp5 + 1;
      let tmp6 = self.buf[tmp5];
      let num3 = 15;
      let tmp7 = tmp3 | (15 & tmp6) << 28;
      let num4 = 112;
      let num5 = 4;
      let tmp8 = (112 & tmp6) >> 4;
      let num6 = 3;
      let num7 = 31;
      let tmp9 = tmp8;
      if (128 & tmp6) {
        let tmp11 = +self.pos;
        self.pos = tmp11 + 1;
        let tmp12 = self.buf[tmp11];
        let tmp13 = tmp9 | (127 & tmp12) << num6;
        let tmp14 = num6;
        while (128 & tmp12) {
          num6 = num6 + 7;
          tmp9 = tmp13;
          if (num6 <= 31) {
            continue;
          } else {
            let tmp16 = globalThis;
            let _Error = Error;
            let tmp17 = new.target;
            let str = "invalid varint";
            let tmp18 = new.target;
            let error = new Error("invalid varint");
            let tmp20 = error;
            throw error;
          }
        }
        let assertBoundsResult = self.assertBounds();
        let items = [tmp7, tmp13];
        return items;
      } else {
        let assertBoundsResult1 = self.assertBounds();
        let items1 = [tmp7, tmp8];
        return items1;
      }
    }
  }
  self.assertBounds();
  const items2 = [tmp3, 0];
  return items2;
};
arg5.varint64write = function varint64write(lo, hi, buf) {
  let num = 0;
  while (true) {
    let tmp = lo >>> num;
    let tmp2 = tmp >>> 7;
    let tmp3 = tmp2 === 0;
    let tmp4 = num;
    if (tmp2 === 0) {
      tmp3 = 0 == hi;
    }
    let tmp5 = !tmp3;
    let tmp6 = tmp;
    if (tmp5) {
      tmp6 = 128 | tmp;
    }
    let arr = buf.push(255 & tmp6);
    if (!tmp5) {
      break;
    } else {
      num = num + 7;
      if (num < 28) {
        continue;
      } else {
        let num2 = 4;
        let num3 = 15;
        let tmp8 = lo >>> 28 & 15 | (7 & hi) << 4;
        let num4 = 3;
        let tmp9 = hi >> 3;
        let tmp10 = tmp8;
        if (tmp9) {
          tmp10 = 128 | tmp8;
        }
        arr = buf.push(255 & tmp10);
        let num5 = 31;
        if (tmp9) {
          while (true) {
            let tmp12 = hi >>> num4;
            let tmp13 = tmp12 >>> 7 !== 0;
            let tmp14 = num4;
            let tmp15 = tmp12;
            if (tmp13) {
              tmp15 = 128 | tmp12;
            }
            let arr1 = buf.push(255 & tmp15);
            if (!tmp13) {
              break;
            } else {
              num4 = num4 + 7;
              if (num4 < 31) {
                continue;
              } else {
                let num6 = 1;
                let arr2 = buf.push(hi >>> 31 & 1);
              }
            }
          }
        }
      }
    }
  }
};
let c0 = 4294967296;
arg5.int64fromString = function int64fromString(trimmed) {
  let substr = trimmed;
  if ("-" == trimmed[0]) {
    substr = trimmed.slice(1);
  }
  const NumberResult = Number(substr.slice(-24, -18));
  let num2 = 0;
  let result = NumberResult;
  if (NumberResult >= c0) {
    num2 = NumberResult / tmp3 | 0;
    result = NumberResult % tmp3;
  }
  const result1 = num2 * 1000000;
  const sum = result * 1000000 + Number(substr.slice(-18, -12));
  let sum1 = result1;
  let result2 = sum;
  if (sum >= c0) {
    sum1 = result1 + (sum / tmp3 | 0);
    result2 = sum % tmp3;
  }
  const result3 = sum1 * 1000000;
  const sum2 = result2 * 1000000 + Number(substr.slice(-12, -6));
  let sum3 = result3;
  let result4 = sum2;
  if (sum2 >= c0) {
    sum3 = result3 + (sum2 / tmp3 | 0);
    result4 = sum2 % tmp3;
  }
  const result5 = sum3 * 1000000;
  const sum4 = result4 * 1000000 + Number(substr.slice(-6, undefined));
  let sum5 = result5;
  let result6 = sum4;
  if (sum4 >= c0) {
    sum5 = result5 + (sum4 / tmp3 | 0);
    result6 = sum4 % tmp3;
  }
  const items = ["-" == trimmed[0], result6, sum5];
  return items;
};
arg5.int64toString = function int64toString(lo, hi) {
  if (hi <= 2097151) {
    return "" + (c0 * hi + (lo >>> 0));
  } else {
    const sum = (16777215 & lo) + 6777216 * tmp14 + 6710656 * tmp15;
    const sum1 = tmp14 + 8147497 * tmp15;
    let sum2 = sum1;
    let result = sum;
    if (10000000 <= sum) {
      const _Math = Math;
      sum2 = sum1 + Math.floor(sum / 10000000);
      result = sum % 10000000;
    }
    const result1 = 2 * tmp15;
    let sum3 = result1;
    let result2 = sum2;
    if (sum2 >= 10000000) {
      const _Math2 = Math;
      sum3 = result1 + Math.floor(sum2 / 10000000);
      result2 = sum2 % 10000000;
    }
    let str = "";
    let str2 = "";
    if (sum3) {
      const _String = String;
      str2 = String(sum3);
    }
    let StringResult = str;
    if (result2) {
      const _String2 = String;
      StringResult = String(result2);
    }
    let sum4 = StringResult;
    if (sum3) {
      const slice = "0000000".slice;
      sum4 = "0000000".slice(StringResult.length) + StringResult;
    }
    const sum5 = str2 + sum4;
    if (result) {
      const _String3 = String;
      str = String(result);
    }
    const slice2 = "0000000".slice;
    return sum5 + ("0000000".slice(str.length) + str);
  }
};
arg5.varint32write = function varint32write(NumberResult, buf) {
  let num = 0;
  let tmp = NumberResult;
  if (NumberResult >= 0) {
    let tmp4 = NumberResult;
    let tmp5 = NumberResult;
    if (NumberResult > 127) {
      do {
        let arr = buf.push(127 & tmp4 | 128);
        tmp4 = tmp4 >>> 7;
        tmp5 = tmp4;
      } while (127 < tmp4);
    }
    buf.push(tmp5);
  } else {
    do {
      let arr1 = buf.push(127 & tmp | 128);
      tmp = tmp >> 7;
      num = num + 1;
    } while (num < 9);
    buf.push(1);
  }
};
arg5.varint32read = function varint32read() {
  const self = this;
  this.pos = +this.pos + 1;
  if (128 & this.buf[+this.pos]) {
    self.pos = +self.pos + 1;
    const tmp7 = tmp3 | (127 & self.buf[+self.pos]) << 7;
    if (128 & self.buf[+self.pos]) {
      self.pos = +self.pos + 1;
      const tmp11 = tmp7 | (127 & self.buf[+self.pos]) << 14;
      if (128 & self.buf[+self.pos]) {
        self.pos = +self.pos + 1;
        const tmp15 = tmp11 | (127 & self.buf[+self.pos]) << 21;
        if (128 & self.buf[+self.pos]) {
          self.pos = +self.pos + 1;
          let tmp18 = self.buf[tmp17];
          let num5 = 5;
          if (128 & tmp18) {
            self.pos = +self.pos + 1;
            tmp18 = tmp21;
            while (128 & self.buf[+self.pos]) {
              num5 = num5 + 1;
              tmp18 = tmp21;
              if (num5 >= 10) {
                break;
              }
            }
          }
          if (128 & tmp18) {
            const _Error = Error;
            const error = new Error("invalid varint");
            throw error;
          } else {
            self.assertBounds();
            return (tmp15 | tmp19 << 28) >>> 0;
          }
          tmp19 = 15 & tmp18;
        } else {
          self.assertBounds();
          return tmp15;
        }
      } else {
        self.assertBounds();
        return tmp11;
      }
    } else {
      self.assertBounds();
      return tmp7;
    }
  } else {
    self.assertBounds();
    return tmp3;
  }
};