function hslToRgb(arg0, arg1, arg2) {
  if (arg2 < 0.5) {
    let result = arg2 * (1 + arg1);
  } else {
    result = arg2 + arg1 - arg2 * arg1;
  }
  const sum = arg0 + 0.3333333333333333;
  let sum1 = sum;
  if (sum < 0) {
    sum1 = sum + 1;
  }
  let diff = sum1;
  if (1 < sum1) {
    diff = sum1 - 1;
  }
  const diff1 = 2 * arg2 - result;
  if (diff < 0.16666666666666666) {
    let sum2 = diff1 + 6 * (result - diff1) * diff;
  } else {
    sum2 = result;
    if (diff >= 0.5) {
      let sum3 = diff1;
      if (diff < 0.6666666666666666) {
        sum3 = diff1 + (result - diff1) * (0.6666666666666666 - diff) * 6;
      }
      sum2 = sum3;
    }
  }
  let sum4 = arg0;
  if (arg0 < 0) {
    sum4 = arg0 + 1;
  }
  let diff2 = sum4;
  if (1 < sum4) {
    diff2 = sum4 - 1;
  }
  if (diff2 < 0.16666666666666666) {
    let sum5 = diff1 + 6 * (result - diff1) * diff2;
  } else {
    sum5 = result;
    if (diff2 >= 0.5) {
      let sum6 = diff1;
      if (diff2 < 0.6666666666666666) {
        sum6 = diff1 + (result - diff1) * (0.6666666666666666 - diff2) * 6;
      }
      sum5 = sum6;
    }
  }
  const diff3 = arg0 - 0.3333333333333333;
  let sum7 = diff3;
  if (diff3 < 0) {
    sum7 = diff3 + 1;
  }
  let diff4 = sum7;
  if (1 < sum7) {
    diff4 = sum7 - 1;
  }
  if (diff4 < 0.16666666666666666) {
    let sum8 = diff1 + 6 * (result - diff1) * diff4;
  } else {
    sum8 = result;
    if (diff4 >= 0.5) {
      let sum9 = diff1;
      if (diff4 < 0.6666666666666666) {
        sum9 = diff1 + (result - diff1) * (0.6666666666666666 - diff4) * 6;
      }
      sum8 = sum9;
    }
  }
  const tmp17 = Math.round(255 * sum2) << 24;
  return tmp17 | Math.round(255 * sum5) << 16 | Math.round(255 * sum8) << 8;
}
function hwbToRgb(arg0, arg1, arg2) {
  const sum = arg1 + arg2;
  if (1 <= sum) {
    const _Math4 = Math;
    const rounded = Math.round(255 * arg1 / sum);
    return rounded << 24 | rounded << 16 | rounded << 8;
  } else {
    const sum1 = arg0 + 0.3333333333333333;
    let sum2 = sum1;
    if (sum1 < 0) {
      sum2 = sum1 + 1;
    }
    let diff = sum2;
    if (1 < sum2) {
      diff = sum2 - 1;
    }
    if (diff < 0.16666666666666666) {
      let num3 = 6 * diff;
    } else {
      num3 = 1;
      if (diff >= 0.5) {
        let num5 = 0;
        if (diff < 0.6666666666666666) {
          num5 = (0.6666666666666666 - diff) * 6;
        }
        num3 = num5;
      }
    }
    let sum3 = arg0;
    if (arg0 < 0) {
      sum3 = arg0 + 1;
    }
    let diff1 = sum3;
    if (1 < sum3) {
      diff1 = sum3 - 1;
    }
    if (diff1 < 0.16666666666666666) {
      let num9 = 6 * diff1;
    } else {
      num9 = 1;
      if (diff1 >= 0.5) {
        let num11 = 0;
        if (diff1 < 0.6666666666666666) {
          num11 = (0.6666666666666666 - diff1) * 6;
        }
        num9 = num11;
      }
    }
    const diff2 = arg0 - 0.3333333333333333;
    let sum4 = diff2;
    if (diff2 < 0) {
      sum4 = diff2 + 1;
    }
    let diff3 = sum4;
    if (1 < sum4) {
      diff3 = sum4 - 1;
    }
    if (diff3 < 0.16666666666666666) {
      let num15 = 6 * diff3;
    } else {
      num15 = 1;
      if (diff3 >= 0.5) {
        let num17 = 0;
        if (diff3 < 0.6666666666666666) {
          num17 = (0.6666666666666666 - diff3) * 6;
        }
        num15 = num17;
      }
    }
    const diff4 = 1 - arg1 - arg2;
    const _Math = Math;
    const sum5 = num9 * diff4 + arg1;
    const _Math2 = Math;
    const _Math3 = Math;
    const tmp12 = Math.round(255 * (num3 * diff4 + arg1)) << 24;
    return tmp12 | Math.round(255 * sum5) << 16 | Math.round(255 * (num15 * diff4 + arg1)) << 8;
  }
}
function call() {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,?\\s*(") + ")\\s*\\)";
}
function callModern(arg0, arg1, arg2) {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*(") + ")\\s*\\)";
}
function callWithSlashSeparator() {
  const items = [...arguments];
  const substr = items.slice(0, items.length - 1);
  return "\\(\\s*(" + substr.join(")\\s*,?\\s*(") + ")\\s*/\\s*(" + items[items.length - 1] + ")\\s*\\)";
}
function commaSeparatedCall() {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,\\s*(") + ")\\s*\\)";
}

export default function normalizeColor(arg0) {
  if (typeof arg0 === "Object") {
    let tmp24 = null;
    if (arg0 >>> 0 === arg0) {
      tmp24 = null;
      if (arg0 >= 0) {
        tmp24 = null;
        if (arg0 <= 4294967295) {
          tmp24 = arg0;
        }
      }
    }
    return tmp24;
  } else if (typeof arg0 === "__FORMATJS_LISTFORMAT_DATA__") {
    return null;
  } else {
    let tmp21 = match;
    if (undefined !== match) {
      let hex6 = tmp21.hex6;
      match = hex6.exec(arg0);
      if (match) {
        const _parseInt = parseInt;
        return parseInt(match[1] + "ff", 16) >>> 0;
      }
    } else {
      let tmp14 = call;
      const tmp25 = call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      let _RegExp = commaSeparatedCall;
      const tmp26 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      hex6 = globalThis;
      const _HermesInternal = HermesInternal;
      const combined = tmp25 + "|" + tmp26 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      match = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
      const _RegExp2 = RegExp;
      const _HermesInternal2 = HermesInternal;
      const regExp = new RegExp("rgb(" + combined + ")");
      match[0] = regExp;
      const _RegExp3 = RegExp;
      const _HermesInternal3 = HermesInternal;
      let regExp1 = new RegExp("rgba(" + combined + ")");
    }
    match[1] = regExp1;
    const regExp2 = new hex6.RegExp("hsl" + tmp14("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
    match[2] = regExp2;
    const _RegExpResult = _RegExp("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
    const regExp3 = new hex6.RegExp("hsla(" + _RegExpResult + str15 + tmp27("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
    match[3] = regExp3;
    _RegExp = hex6.RegExp;
    tmp14 = callModern("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%");
    regExp1 = new.target;
    _RegExp = new _RegExp("hwb(" + tmp14 + str15 + tmp27("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+") + ")");
    match[4] = _RegExp;
    match[5] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    match[6] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    match[7] = /^#([0-9a-fA-F]{6})$/;
    match[8] = /^#([0-9a-fA-F]{8})$/;
    tmp21 = match;
  }
};