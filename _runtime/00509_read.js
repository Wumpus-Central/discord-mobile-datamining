// === Module 509: read ===

// Module 509 (read)
arg5.read = (arg0, arg1, arg2, exponent) => {
  let num = 0;
  const diff = 8 * arg4 - exponent;
  if (arg2) {
    num = arg4 - 1;
  }
  let num3 = 1;
  let num4 = 1;
  if (arg2) {
    num4 = -1;
  }
  const diff1 = diff - num3;
  let sum = num + num4;
  let sum1 = -7 + diff1;
  let sum2 = tmp5;
  let sum5 = sum;
  let tmp10 = tmp5;
  let tmp11 = sum1;
  if (0 < sum1) {
    do {
      sum2 = 256 * sum2 + arg0[arg1 + sum];
      sum = sum + num4;
      sum1 = sum1 - 8;
      sum5 = sum;
      tmp10 = sum2;
      tmp11 = sum1;
    } while (0 < sum1);
  }
  let sum4 = tmp10 & (num3 << tmp12) - num3;
  let sum3 = tmp11 + exponent;
  let tmp15 = sum4;
  if (sum3 > 0) {
    do {
      sum4 = 256 * sum4 + arg0[arg1 + sum5];
      sum5 = sum5 + num4;
      sum3 = sum3 - 8;
      tmp15 = sum4;
    } while (0 < sum3);
  }
  const diff2 = (num3 << diff1) - num3;
  if (0 === tmp10 >> -tmp11) {
    let diff3 = num3 - tmp17;
    let sum6 = tmp15;
  } else if (tmp18 === diff2) {
    let num6 = NaN;
    if (!tmp15) {
      let num7 = num3;
      if (tmp6) {
        num7 = -1;
      }
      num6 = Infinity * num7;
    }
    return num6;
  } else {
    const _Math = Math;
    sum6 = tmp15 + Math.pow(2, exponent);
    diff3 = tmp18 - tmp17;
  }
  if (arg0[arg1 + num] >> 7) {
    num3 = -1;
  }
  return num3 * sum6 * Math.pow(2, diff3 - exponent);
};
arg5.write = (arg0, arg1, arg2, arg3, exponent) => {
  let num = 0;
  const diff = 8 * arg5 - exponent;
  if (23 === exponent) {
    const _Math = Math;
    const _Math2 = Math;
    num = Math.pow(2, -24) - Math.pow(2, -77);
    const powResult = Math.pow(2, -24);
  }
  let num5 = 0;
  if (!arg3) {
    num5 = arg5 - 1;
  }
  let num7 = -1;
  if (arg3) {
    num7 = 1;
  }
  if (arg1 < 0) {
    let num8 = 1;
  } else {
    num8 = 0;
    if (0 === arg1) {
      num8 = 0;
    }
  }
  const diff1 = diff - 1;
  const diff2 = (1 << diff1) - 1;
  const absolute = Math.abs(arg1);
  if (!isNaN(absolute)) {
    if (absolute !== Infinity) {
      const _Math7 = Math;
      const _Math8 = Math;
      const _Math9 = Math;
      const rounded = Math.floor(Math.log(absolute) / Math.LN2);
      const _Math10 = Math;
      const powResult1 = Math.pow(2, -rounded);
      let result = powResult1;
      let diff3 = rounded;
      if (absolute * powResult1 < 1) {
        diff3 = rounded - 1;
        result = powResult1 * 2;
      }
      if (diff3 + (diff2 >> 1) >= 1) {
        let result1 = num / result;
      } else {
        const _Math3 = Math;
        result1 = num * Math.pow(2, 1 - tmp9);
      }
      const sum = absolute + result1;
      let result2 = result;
      let sum1 = diff3;
      if (sum * result >= 2) {
        sum1 = diff3 + 1;
        result2 = result / 2;
      }
      let num11 = 0;
      let num12 = diff2;
      if (sum1 + (diff2 >> 1) < diff2) {
        if (sum1 + tmp9 >= 1) {
          const _Math6 = Math;
          const diff4 = sum * result2 - 1;
          num11 = diff4 * Math.pow(2, exponent);
          num12 = sum1 + tmp9;
        } else {
          const _Math4 = Math;
          const _Math5 = Math;
          const result3 = sum * Math.pow(2, tmp9 - 1);
          num11 = result3 * Math.pow(2, exponent);
          num12 = 0;
        }
      }
    }
    let result4 = num11;
    let sum2 = num5;
    let diff5 = exponent;
    let tmp21 = num5;
    let tmp22 = num11;
    let tmp23 = exponent;
    if (exponent >= 8) {
      do {
        arg0[arg2 + sum2] = 255 & result4;
        sum2 = sum2 + num7;
        result4 = result4 / 256;
        diff5 = diff5 - 8;
        tmp21 = sum2;
        tmp22 = result4;
        tmp23 = diff5;
      } while (8 <= diff5);
    }
    let result5 = num12 << tmp23 | tmp22;
    let sum3 = diff1 + tmp23;
    let sum4 = tmp21;
    let tmp27 = tmp21;
    if (sum3 > 0) {
      do {
        arg0[arg2 + sum4] = 255 & result5;
        sum4 = sum4 + num7;
        result5 = result5 / 256;
        sum3 = sum3 - 8;
        tmp27 = sum4;
      } while (0 < sum3);
    }
    const diff6 = arg2 + tmp27 - num7;
    arg0[diff6] = arg0[diff6] | 128 * num8;
  }
  let num13 = 0;
  if (isNaN(absolute)) {
    num13 = 1;
  }
  num11 = num13;
  num12 = diff2;
};