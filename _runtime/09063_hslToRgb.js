// _runtime/09063_hslToRgb.js
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
function call() {
  const items = [...arguments];
  return "\\(\\s*(" + items.join(")\\s*,?\\s*(") + ")\\s*\\)";
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

export default function normalizeColor(num) {
  if (typeof num === "number") {
    let tmp14 = null;
    if (num >>> 0 === num) {
      tmp14 = null;
      if (num >= 0) {
        tmp14 = null;
        if (num <= 4294967295) {
          tmp14 = num;
        }
      }
    }
    return tmp14;
  } else if (typeof num !== "string") {
    return null;
  } else {
    let tmp10 = match;
    if (undefined !== match) {
      let str8 = tmp10.hex6;
      match = str8.exec(num);
      if (match) {
        const _parseInt = parseInt;
        return parseInt(match[1] + "ff", 16) >>> 0;
      }
    } else {
      match = { rgb: null, rgba: null, hsl: null, hsla: null, hwb: null, hex3: null, hex4: null, hex6: null, hex8: null };
      let _RegExp = globalThis;
      const _RegExp3 = RegExp;
      let tmp6 = call;
      let str5 = "[-+]?\\d*\\.?\\d+";
      const regExp = new RegExp("rgb" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+"));
      match[0] = regExp;
      const _RegExp4 = RegExp;
      const tmp20 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+");
      let tmp5 = callWithSlashSeparator;
      const _HermesInternal = HermesInternal;
      const regExp1 = new RegExp("rgba(" + tmp20 + "|" + callWithSlashSeparator("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+") + ")");
      match[1] = regExp1;
      const _RegExp5 = RegExp;
      str8 = "[-+]?\\d*\\.?\\d+%";
      const regExp2 = new RegExp("hsl" + call("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%"));
      match[2] = regExp2;
      let str7 = "[-+]?\\d*\\.?\\d+";
      let str3 = "[-+]?\\d*\\.?\\d+%";
      let str = "[-+]?\\d*\\.?\\d+%";
      let str4 = "[-+]?\\d*\\.?\\d+";
      let _RegExp2 = RegExp;
      const tmp29 = commaSeparatedCall("[-+]?\\d*\\.?\\d+", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+%", "[-+]?\\d*\\.?\\d+");
    }
    str = tmp5(str7, str3, str, str4);
    str3 = str9;
    str4 = ")";
    _RegExp2 = new _RegExp2("hsla(" + tmp29 + str9 + str + ")");
    tmp5 = _RegExp2;
    match[3] = _RegExp2;
    _RegExp = _RegExp.RegExp;
    tmp6 = tmp6(str5, str8, str8);
    str5 = new.target;
    str7 = `hwb${tmp6}`;
    _RegExp = new _RegExp(`hwb${tmp6}`);
    match[4] = _RegExp;
    match[5] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    match[6] = /^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/;
    match[7] = /^#([0-9a-fA-F]{6})$/;
    match[8] = /^#([0-9a-fA-F]{8})$/;
    tmp10 = match;
  }
};