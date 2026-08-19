// _runtime/00523_md5cmn.js
function md5cmn(arg0, arg1, arg2, items, arg4, arg5) {
  const sum = (65535 & arg1) + (65535 & arg0);
  const tmp2 = (arg1 >> 16) + (arg0 >> 16) + (sum >> 16) << 16 | 65535 & sum;
  const sum1 = (65535 & items) + (65535 & arg5);
  const tmp4 = (items >> 16) + (arg5 >> 16) + (sum1 >> 16) << 16 | 65535 & sum1;
  const sum2 = (65535 & tmp2) + (65535 & tmp4);
  const tmp6 = (tmp2 >> 16) + (tmp4 >> 16) + (sum2 >> 16) << 16 | 65535 & sum2;
  const sum3 = (65535 & tmp7) + (65535 & arg2);
  return ((tmp6 << arg4 | tmp6 >>> 32 - arg4) >> 16) + (arg2 >> 16) + (sum3 >> 16) << 16 | 65535 & sum3;
}
arg5.default = function md5(str) {
  let length;
  let length2;
  let arr = str;
  if (typeof str === "string") {
    const _unescape = unescape;
    const _encodeURIComponent = encodeURIComponent;
    const unescapeResult = unescape(encodeURIComponent(str));
    const _Uint8Array = Uint8Array;
    const uint8Array = new Uint8Array(unescapeResult.length);
    let num = 0;
    arr = uint8Array;
    if (0 < unescapeResult.length) {
      do {
        uint8Array[num] = unescapeResult.charCodeAt(num);
        num = num + 1;
        arr = uint8Array;
        length = unescapeResult.length;
      } while (num < length);
    }
  }
  if (0 === arr.length) {
    let items = [];
  } else {
    const result = 8 * arr.length;
    const _Uint32Array = Uint32Array;
    const uint32Array = new Uint32Array(14 + (result + 64 >>> 9 << 4) + 1);
    let num2 = 0;
    items = uint32Array;
    if (0 < result) {
      do {
        let tmp = num2 >> 5;
        uint32Array[tmp] = uint32Array[tmp] | (255 & arr[num2 / 8]) << num2 % 32;
        num2 = num2 + 8;
        items = uint32Array;
      } while (num2 < result);
    }
  }
  const result1 = 8 * arr.length;
  items[result1 >> 5] = items[result1 >> 5] | 128 << result1 % 32;
  items[14 + (result1 + 64 >>> 9 << 4) + 1 - 1] = result1;
  let num3 = 271733878;
  let num4 = -1732584194;
  let num5 = -271733879;
  let num6 = 1732584193;
  let num7 = 0;
  let num8 = 271733878;
  let num9 = -1732584194;
  let num10 = -271733879;
  let num11 = 1732584193;
  if (0 < items.length) {
    do {
      let tmp7 = md5cmn(num5 & num4 | ~num5 & num3, num6, num5, items[num7], 7, -680876936);
      let sum = num7 + 1;
      let tmp11 = md5cmn(tmp7 & num5 | ~tmp7 & num4, num3, tmp7, items[sum], 12, -389564586);
      let sum1 = num7 + 2;
      let tmp15 = md5cmn(tmp11 & tmp7 | ~tmp11 & num5, num4, tmp11, items[sum1], 17, 606105819);
      let sum2 = num7 + 3;
      let tmp19 = md5cmn(tmp15 & tmp11 | ~tmp15 & tmp7, num5, tmp15, items[sum2], 22, -1044525330);
      let sum3 = num7 + 4;
      let tmp23 = md5cmn(tmp19 & tmp15 | ~tmp19 & tmp11, tmp7, tmp19, items[sum3], 7, -176418897);
      let sum4 = num7 + 5;
      let tmp27 = md5cmn(tmp23 & tmp19 | ~tmp23 & tmp15, tmp11, tmp23, items[sum4], 12, 1200080426);
      let sum5 = num7 + 6;
      let tmp31 = md5cmn(tmp27 & tmp23 | ~tmp27 & tmp19, tmp15, tmp27, items[sum5], 17, -1473231341);
      let sum6 = num7 + 7;
      let tmp35 = md5cmn(tmp31 & tmp27 | ~tmp31 & tmp23, tmp19, tmp31, items[sum6], 22, -45705983);
      let sum7 = num7 + 8;
      let tmp39 = md5cmn(tmp35 & tmp31 | ~tmp35 & tmp27, tmp23, tmp35, items[sum7], 7, 1770035416);
      let sum8 = num7 + 9;
      let tmp43 = md5cmn(tmp39 & tmp35 | ~tmp39 & tmp31, tmp27, tmp39, items[sum8], 12, -1958414417);
      let sum9 = num7 + 10;
      let tmp47 = md5cmn(tmp43 & tmp39 | ~tmp43 & tmp35, tmp31, tmp43, items[sum9], 17, -42063);
      let sum10 = num7 + 11;
      let tmp51 = md5cmn(tmp47 & tmp43 | ~tmp47 & tmp39, tmp35, tmp47, items[sum10], 22, -1990404162);
      let sum11 = num7 + 12;
      let tmp55 = md5cmn(tmp51 & tmp47 | ~tmp51 & tmp43, tmp39, tmp51, items[sum11], 7, 1804603682);
      let sum12 = num7 + 13;
      let tmp59 = md5cmn(tmp55 & tmp51 | ~tmp55 & tmp47, tmp43, tmp55, items[sum12], 12, -40341101);
      let sum13 = num7 + 14;
      let tmp61 = ~tmp59;
      let tmp64 = md5cmn(tmp59 & tmp55 | tmp61 & tmp51, tmp47, tmp59, items[sum13], 17, -1502002290);
      let sum14 = num7 + 15;
      let tmp66 = ~tmp64;
      let tmp69 = md5cmn(tmp64 & tmp59 | tmp66 & tmp55, tmp51, tmp64, items[sum14], 22, 1236535329);
      let tmp72 = md5cmn(tmp69 & tmp59 | tmp64 & tmp61, tmp55, tmp69, items[sum], 5, -165796510);
      let tmp75 = md5cmn(tmp72 & tmp64 | tmp69 & tmp66, tmp59, tmp72, items[sum5], 9, -1069501632);
      let tmp78 = md5cmn(tmp75 & tmp69 | tmp72 & ~tmp69, tmp64, tmp75, items[sum10], 14, 643717713);
      let tmp81 = md5cmn(tmp78 & tmp72 | tmp75 & ~tmp72, tmp69, tmp78, items[num7], 20, -373897302);
      let tmp84 = md5cmn(tmp81 & tmp75 | tmp78 & ~tmp75, tmp72, tmp81, items[sum4], 5, -701558691);
      let tmp87 = md5cmn(tmp84 & tmp78 | tmp81 & ~tmp78, tmp75, tmp84, items[sum9], 9, 38016083);
      let tmp90 = md5cmn(tmp87 & tmp81 | tmp84 & ~tmp81, tmp78, tmp87, items[sum14], 14, -660478335);
      let tmp93 = md5cmn(tmp90 & tmp84 | tmp87 & ~tmp84, tmp81, tmp90, items[sum3], 20, -405537848);
      let tmp96 = md5cmn(tmp93 & tmp87 | tmp90 & ~tmp87, tmp84, tmp93, items[sum8], 5, 568446438);
      let tmp99 = md5cmn(tmp96 & tmp90 | tmp93 & ~tmp90, tmp87, tmp96, items[sum13], 9, -1019803690);
      let tmp102 = md5cmn(tmp99 & tmp93 | tmp96 & ~tmp93, tmp90, tmp99, items[sum2], 14, -187363961);
      let tmp105 = md5cmn(tmp102 & tmp96 | tmp99 & ~tmp96, tmp93, tmp102, items[sum7], 20, 1163531501);
      let tmp108 = md5cmn(tmp105 & tmp99 | tmp102 & ~tmp99, tmp96, tmp105, items[sum12], 5, -1444681467);
      let tmp111 = md5cmn(tmp108 & tmp102 | tmp105 & ~tmp102, tmp99, tmp108, items[sum1], 9, -51403784);
      let tmp114 = md5cmn(tmp111 & tmp105 | tmp108 & ~tmp105, tmp102, tmp111, items[sum6], 14, 1735328473);
      let tmp117 = md5cmn(tmp114 & tmp108 | tmp111 & ~tmp108, tmp105, tmp114, items[sum11], 20, -1926607734);
      let tmp120 = md5cmn(tmp117 ^ tmp114 ^ tmp111, tmp108, tmp117, items[sum4], 4, -378558);
      let tmp123 = md5cmn(tmp120 ^ tmp117 ^ tmp114, tmp111, tmp120, items[sum7], 11, -2022574463);
      let tmp126 = md5cmn(tmp123 ^ tmp120 ^ tmp117, tmp114, tmp123, items[sum10], 16, 1839030562);
      let tmp129 = md5cmn(tmp126 ^ tmp123 ^ tmp120, tmp117, tmp126, items[sum13], 23, -35309556);
      let tmp132 = md5cmn(tmp129 ^ tmp126 ^ tmp123, tmp120, tmp129, items[sum], 4, -1530992060);
      let tmp135 = md5cmn(tmp132 ^ tmp129 ^ tmp126, tmp123, tmp132, items[sum3], 11, 1272893353);
      let tmp138 = md5cmn(tmp135 ^ tmp132 ^ tmp129, tmp126, tmp135, items[sum6], 16, -155497632);
      let tmp141 = md5cmn(tmp138 ^ tmp135 ^ tmp132, tmp129, tmp138, items[sum9], 23, -1094730640);
      let tmp144 = md5cmn(tmp141 ^ tmp138 ^ tmp135, tmp132, tmp141, items[sum12], 4, 681279174);
      let tmp147 = md5cmn(tmp144 ^ tmp141 ^ tmp138, tmp135, tmp144, items[num7], 11, -358537222);
      let tmp150 = md5cmn(tmp147 ^ tmp144 ^ tmp141, tmp138, tmp147, items[sum2], 16, -722521979);
      let tmp153 = md5cmn(tmp150 ^ tmp147 ^ tmp144, tmp141, tmp150, items[sum5], 23, 76029189);
      let tmp156 = md5cmn(tmp153 ^ tmp150 ^ tmp147, tmp144, tmp153, items[sum8], 4, -640364487);
      let tmp159 = md5cmn(tmp156 ^ tmp153 ^ tmp150, tmp147, tmp156, items[sum11], 11, -421815835);
      let tmp162 = md5cmn(tmp159 ^ tmp156 ^ tmp153, tmp150, tmp159, items[sum14], 16, 530742520);
      let tmp165 = md5cmn(tmp162 ^ tmp159 ^ tmp156, tmp153, tmp162, items[sum1], 23, -995338651);
      let tmp168 = md5cmn(tmp162 ^ (tmp165 | ~tmp159), tmp156, tmp165, items[num7], 6, -198630844);
      let tmp171 = md5cmn(tmp165 ^ (tmp168 | ~tmp162), tmp159, tmp168, items[sum6], 10, 1126891415);
      let tmp174 = md5cmn(tmp168 ^ (tmp171 | ~tmp165), tmp162, tmp171, items[sum13], 15, -1416354905);
      let tmp177 = md5cmn(tmp171 ^ (tmp174 | ~tmp168), tmp165, tmp174, items[sum4], 21, -57434055);
      let tmp180 = md5cmn(tmp174 ^ (tmp177 | ~tmp171), tmp168, tmp177, items[sum11], 6, 1700485571);
      let tmp183 = md5cmn(tmp177 ^ (tmp180 | ~tmp174), tmp171, tmp180, items[sum2], 10, -1894986606);
      let tmp186 = md5cmn(tmp180 ^ (tmp183 | ~tmp177), tmp174, tmp183, items[sum9], 15, -1051523);
      let tmp189 = md5cmn(tmp183 ^ (tmp186 | ~tmp180), tmp177, tmp186, items[sum], 21, -2054922799);
      let tmp192 = md5cmn(tmp186 ^ (tmp189 | ~tmp183), tmp180, tmp189, items[sum7], 6, 1873313359);
      let tmp195 = md5cmn(tmp189 ^ (tmp192 | ~tmp186), tmp183, tmp192, items[sum14], 10, -30611744);
      let tmp198 = md5cmn(tmp192 ^ (tmp195 | ~tmp189), tmp186, tmp195, items[sum5], 15, -1560198380);
      let tmp201 = md5cmn(tmp195 ^ (tmp198 | ~tmp192), tmp189, tmp198, items[sum12], 21, 1309151649);
      let tmp204 = md5cmn(tmp198 ^ (tmp201 | ~tmp195), tmp192, tmp201, items[sum3], 6, -145523070);
      let tmp207 = md5cmn(tmp201 ^ (tmp204 | ~tmp198), tmp195, tmp204, items[sum10], 10, -1120210379);
      let tmp210 = md5cmn(tmp204 ^ (tmp207 | ~tmp201), tmp198, tmp207, items[sum1], 15, 718787259);
      let tmp213 = md5cmn(tmp207 ^ (tmp210 | ~tmp204), tmp201, tmp210, items[sum8], 21, -343485551);
      let sum15 = (65535 & tmp204) + (65535 & num6);
      num6 = (tmp204 >> 16) + (num6 >> 16) + (sum15 >> 16) << 16 | 65535 & sum15;
      let sum16 = (65535 & tmp213) + (65535 & num5);
      num5 = (tmp213 >> 16) + (num5 >> 16) + (sum16 >> 16) << 16 | 65535 & sum16;
      let sum17 = (65535 & tmp210) + (65535 & num4);
      num4 = (tmp210 >> 16) + (num4 >> 16) + (sum17 >> 16) << 16 | 65535 & sum17;
      let sum18 = (65535 & tmp207) + (65535 & num3);
      num3 = (tmp207 >> 16) + (num3 >> 16) + (sum18 >> 16) << 16 | 65535 & sum18;
      num7 = num7 + 16;
      num8 = num3;
      num9 = num4;
      num10 = num5;
      num11 = num6;
      length2 = items.length;
    } while (num7 < length2);
  }
  const items1 = [num11, num10, num9, num8];
  const items2 = [];
  const result2 = 32 * items1.length;
  let num141 = 0;
  if (0 < result2) {
    do {
      let tmp219 = items1[num141 >> 5] >>> num141 % 32 & 255;
      let _parseInt = parseInt;
      let charAt = "0123456789abcdef".charAt;
      let charAt2 = "0123456789abcdef".charAt;
      let charAtResult = "0123456789abcdef".charAt(tmp219 >>> 4 & 15);
      arr = items2.push(parseInt(charAtResult + "0123456789abcdef".charAt(15 & tmp219), 16));
      num141 = num141 + 8;
    } while (num141 < result2);
  }
  return items2;
};