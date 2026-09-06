// _runtime/metro/05158__.js
const dependencyMap = arg4;
const exports = arg5;
((arg0) => {
  if (typeof exports === "object") {
    dependencyMap.exports = arg0();
  } else {
    if (typeof globalThis.define === "function") {
      if (globalThis.define.amd) {
        globalThis.define(arg0);
      }
    }
    try {
      let _self = window;
      _self.SparkMD5 = arg0();
    } catch (err) {
      _self = tmp.self;
    }
  }
})((arg0) => {
  closure_0 = arg0;
  function md5cycle(items, items2) {
    let sum47 = items[1];
    const sum = items[0] + ((((sum47 & tmp2) | (~sum47 & tmp3)) + items2[0] - 680876936) | 0);
    const sum1 = tmp3 + ((((tmp5 & sum47) | (~tmp5 & tmp2)) + items2[1] - 389564586) | 0);
    const tmp7 = (((sum1 << 12) | (sum1 >>> 20)) + ((((sum << 7) | (sum >>> 25)) + sum47) | 0)) | 0;
    const sum2 = tmp2 + ((((tmp7 & tmp5) | (~tmp7 & sum47)) + items2[2] + 606105819) | 0);
    const sum3 = sum47 + ((((tmp9 & tmp7) | (~tmp9 & tmp5)) + items2[3] - 1044525330) | 0);
    const tmp11 = (((sum3 << 22) | (sum3 >>> 10)) + ((((sum2 << 17) | (sum2 >>> 15)) + tmp7) | 0)) | 0;
    const sum4 = tmp5 + ((((tmp11 & tmp9) | (~tmp11 & tmp7)) + items2[4] - 176418897) | 0);
    const sum5 = tmp7 + ((((tmp13 & tmp11) | (~tmp13 & tmp9)) + items2[5] + 1200080426) | 0);
    const tmp15 = (((sum5 << 12) | (sum5 >>> 20)) + ((((sum4 << 7) | (sum4 >>> 25)) + tmp11) | 0)) | 0;
    const sum6 = tmp9 + ((((tmp15 & tmp13) | (~tmp15 & tmp11)) + items2[6] - 1473231341) | 0);
    const sum7 = tmp11 + ((((tmp17 & tmp15) | (~tmp17 & tmp13)) + items2[7] - 45705983) | 0);
    const tmp19 = (((sum7 << 22) | (sum7 >>> 10)) + ((((sum6 << 17) | (sum6 >>> 15)) + tmp15) | 0)) | 0;
    const sum8 = tmp13 + ((((tmp19 & tmp17) | (~tmp19 & tmp15)) + items2[8] + 1770035416) | 0);
    const sum9 = tmp15 + ((((tmp21 & tmp19) | (~tmp21 & tmp17)) + items2[9] - 1958414417) | 0);
    const tmp23 = (((sum9 << 12) | (sum9 >>> 20)) + ((((sum8 << 7) | (sum8 >>> 25)) + tmp19) | 0)) | 0;
    const sum10 = tmp17 + ((((tmp23 & tmp21) | (~tmp23 & tmp19)) + items2[10] - 42063) | 0);
    const sum11 = tmp19 + ((((tmp25 & tmp23) | (~tmp25 & tmp21)) + items2[11] - 1990404162) | 0);
    const tmp27 = (((sum11 << 22) | (sum11 >>> 10)) + ((((sum10 << 17) | (sum10 >>> 15)) + tmp23) | 0)) | 0;
    const sum12 = tmp21 + ((((tmp27 & tmp25) | (~tmp27 & tmp23)) + items2[12] + 1804603682) | 0);
    const sum13 = tmp23 + ((((tmp29 & tmp27) | (~tmp29 & tmp25)) + items2[13] - 40341101) | 0);
    const tmp31 = (((sum13 << 12) | (sum13 >>> 20)) + ((((sum12 << 7) | (sum12 >>> 25)) + tmp27) | 0)) | 0;
    const sum14 = tmp25 + ((((tmp31 & tmp29) | (tmp32 & tmp27)) + items2[14] - 1502002290) | 0);
    const tmp35 = (~((sum14 << 17) | (sum14 >>> 15)) + tmp31) | 0;
    const sum15 = tmp27 + ((((tmp34 & tmp31) | (tmp35 & tmp29)) + items2[15] + 1236535329) | 0);
    const tmp37 = (((sum15 << 22) | (sum15 >>> 10)) + ((((sum14 << 17) | (sum14 >>> 15)) + tmp31) | 0)) | 0;
    const sum16 = tmp29 + ((((tmp37 & tmp31) | (tmp34 & tmp32)) + items2[1] - 165796510) | 0);
    const sum17 = tmp31 + ((((tmp39 & tmp34) | (tmp37 & tmp35)) + items2[6] - 1069501632) | 0);
    const tmp41 = (((sum17 << 9) | (sum17 >>> 23)) + ((((sum16 << 5) | (sum16 >>> 27)) + tmp37) | 0)) | 0;
    const sum18 = tmp34 + ((((tmp41 & tmp37) | (tmp39 & ~tmp37)) + items2[11] + 643717713) | 0);
    const sum19 = tmp37 + ((((tmp43 & tmp39) | (tmp41 & ~tmp39)) + items2[0] - 373897302) | 0);
    const tmp45 = (((sum19 << 20) | (sum19 >>> 12)) + ((((sum18 << 14) | (sum18 >>> 18)) + tmp41) | 0)) | 0;
    const sum20 = tmp39 + ((((tmp45 & tmp41) | (tmp43 & ~tmp41)) + items2[5] - 701558691) | 0);
    const sum21 = tmp41 + ((((tmp47 & tmp43) | (tmp45 & ~tmp43)) + items2[10] + 38016083) | 0);
    const tmp49 = (((sum21 << 9) | (sum21 >>> 23)) + ((((sum20 << 5) | (sum20 >>> 27)) + tmp45) | 0)) | 0;
    const sum22 = tmp43 + ((((tmp49 & tmp45) | (tmp47 & ~tmp45)) + items2[15] - 660478335) | 0);
    const sum23 = tmp45 + ((((tmp51 & tmp47) | (tmp49 & ~tmp47)) + items2[4] - 405537848) | 0);
    const tmp53 = (((sum23 << 20) | (sum23 >>> 12)) + ((((sum22 << 14) | (sum22 >>> 18)) + tmp49) | 0)) | 0;
    const sum24 = tmp47 + ((((tmp53 & tmp49) | (tmp51 & ~tmp49)) + items2[9] + 568446438) | 0);
    const sum25 = tmp49 + ((((tmp55 & tmp51) | (tmp53 & ~tmp51)) + items2[14] - 1019803690) | 0);
    const tmp57 = (((sum25 << 9) | (sum25 >>> 23)) + ((((sum24 << 5) | (sum24 >>> 27)) + tmp53) | 0)) | 0;
    const sum26 = tmp51 + ((((tmp57 & tmp53) | (tmp55 & ~tmp53)) + items2[3] - 187363961) | 0);
    const sum27 = tmp53 + ((((tmp59 & tmp55) | (tmp57 & ~tmp55)) + items2[8] + 1163531501) | 0);
    const tmp61 = (((sum27 << 20) | (sum27 >>> 12)) + ((((sum26 << 14) | (sum26 >>> 18)) + tmp57) | 0)) | 0;
    const sum28 = tmp55 + ((((tmp61 & tmp57) | (tmp59 & ~tmp57)) + items2[13] - 1444681467) | 0);
    const sum29 = tmp57 + ((((tmp63 & tmp59) | (tmp61 & ~tmp59)) + items2[2] - 51403784) | 0);
    const tmp65 = (((sum29 << 9) | (sum29 >>> 23)) + ((((sum28 << 5) | (sum28 >>> 27)) + tmp61) | 0)) | 0;
    const sum30 = tmp59 + ((((tmp65 & tmp61) | (tmp63 & ~tmp61)) + items2[7] + 1735328473) | 0);
    const sum31 = tmp61 + ((((tmp67 & tmp63) | (tmp65 & ~tmp63)) + items2[12] - 1926607734) | 0);
    const tmp69 = (((sum31 << 20) | (sum31 >>> 12)) + ((((sum30 << 14) | (sum30 >>> 18)) + tmp65) | 0)) | 0;
    const sum32 = tmp63 + (((tmp69 ^ tmp67 ^ tmp65) + items2[5] - 378558) | 0);
    const sum33 = tmp65 + (((tmp71 ^ tmp69 ^ tmp67) + items2[8] - 2022574463) | 0);
    const tmp73 = (((sum33 << 11) | (sum33 >>> 21)) + ((((sum32 << 4) | (sum32 >>> 28)) + tmp69) | 0)) | 0;
    const sum34 = tmp67 + (((tmp73 ^ tmp71 ^ tmp69) + items2[11] + 1839030562) | 0);
    const sum35 = tmp69 + (((tmp75 ^ tmp73 ^ tmp71) + items2[14] - 35309556) | 0);
    const tmp77 = (((sum35 << 23) | (sum35 >>> 9)) + ((((sum34 << 16) | (sum34 >>> 16)) + tmp73) | 0)) | 0;
    const sum36 = tmp71 + (((tmp77 ^ tmp75 ^ tmp73) + items2[1] - 1530992060) | 0);
    const sum37 = tmp73 + (((tmp79 ^ tmp77 ^ tmp75) + items2[4] + 1272893353) | 0);
    const tmp81 = (((sum37 << 11) | (sum37 >>> 21)) + ((((sum36 << 4) | (sum36 >>> 28)) + tmp77) | 0)) | 0;
    const sum38 = tmp75 + (((tmp81 ^ tmp79 ^ tmp77) + items2[7] - 155497632) | 0);
    const sum39 = tmp77 + (((tmp83 ^ tmp81 ^ tmp79) + items2[10] - 1094730640) | 0);
    const tmp85 = (((sum39 << 23) | (sum39 >>> 9)) + ((((sum38 << 16) | (sum38 >>> 16)) + tmp81) | 0)) | 0;
    const sum40 = tmp79 + (((tmp85 ^ tmp83 ^ tmp81) + items2[13] + 681279174) | 0);
    const sum41 = tmp81 + (((tmp87 ^ tmp85 ^ tmp83) + items2[0] - 358537222) | 0);
    const tmp89 = (((sum41 << 11) | (sum41 >>> 21)) + ((((sum40 << 4) | (sum40 >>> 28)) + tmp85) | 0)) | 0;
    const sum42 = tmp83 + (((tmp89 ^ tmp87 ^ tmp85) + items2[3] - 722521979) | 0);
    const sum43 = tmp85 + (((tmp91 ^ tmp89 ^ tmp87) + items2[6] + 76029189) | 0);
    const tmp93 = (((sum43 << 23) | (sum43 >>> 9)) + ((((sum42 << 16) | (sum42 >>> 16)) + tmp89) | 0)) | 0;
    const sum44 = tmp87 + (((tmp93 ^ tmp91 ^ tmp89) + items2[9] - 640364487) | 0);
    const sum45 = tmp89 + (((tmp95 ^ tmp93 ^ tmp91) + items2[12] - 421815835) | 0);
    const tmp97 = (((sum45 << 11) | (sum45 >>> 21)) + ((((sum44 << 4) | (sum44 >>> 28)) + tmp93) | 0)) | 0;
    const sum46 = tmp91 + (((tmp97 ^ tmp95 ^ tmp93) + items2[15] + 530742520) | 0);
    sum47 = tmp93 + (((tmp99 ^ tmp97 ^ tmp95) + items2[2] - 995338651) | 0);
    sum47 = (((sum47 << 23) | (sum47 >>> 9)) + tmp99) | 0;
    sum47 = tmp95 + (((tmp99 ^ (sum47 | ~tmp97)) + items2[0] - 198630844) | 0);
    sum47 = (((sum47 << 6) | (sum47 >>> 26)) + sum47) | 0;
    sum47 = tmp97 + (((sum47 ^ (sum47 | ~tmp99)) + items2[7] + 1126891415) | 0);
    sum47 = (((sum47 << 10) | (sum47 >>> 22)) + sum47) | 0;
    sum47 = tmp99 + (((sum47 ^ (sum47 | ~sum47)) + items2[14] - 1416354905) | 0);
    sum47 = (((sum47 << 15) | (sum47 >>> 17)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[5] - 57434055) | 0);
    sum47 = (((sum47 << 21) | (sum47 >>> 11)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[12] + 1700485571) | 0);
    sum47 = (((sum47 << 6) | (sum47 >>> 26)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[3] - 1894986606) | 0);
    sum47 = (((sum47 << 10) | (sum47 >>> 22)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[10] - 1051523) | 0);
    sum47 = (((sum47 << 15) | (sum47 >>> 17)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[1] - 2054922799) | 0);
    sum47 = (((sum47 << 21) | (sum47 >>> 11)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[8] + 1873313359) | 0);
    sum47 = (((sum47 << 6) | (sum47 >>> 26)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[15] - 30611744) | 0);
    sum47 = (((sum47 << 10) | (sum47 >>> 22)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[6] - 1560198380) | 0);
    sum47 = (((sum47 << 15) | (sum47 >>> 17)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[13] + 1309151649) | 0);
    sum47 = (((sum47 << 21) | (sum47 >>> 11)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[4] - 145523070) | 0);
    sum47 = (((sum47 << 6) | (sum47 >>> 26)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[11] - 1120210379) | 0);
    sum47 = (((sum47 << 10) | (sum47 >>> 22)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[2] + 718787259) | 0);
    sum47 = (((sum47 << 15) | (sum47 >>> 17)) + sum47) | 0;
    sum47 = sum47 + (((sum47 ^ (sum47 | ~sum47)) + items2[9] - 343485551) | 0);
    items[0] = (sum47 + items[0]) | 0;
    items[1] = (((((sum47 << 21) | (sum47 >>> 11)) + sum47) | 0) + items[1]) | 0;
    items[2] = (sum47 + items[2]) | 0;
    items[3] = (sum47 + items[3]) | 0;
  }
  function md51(hello) {
    items = [1732584193, -271733879, -1732584194, 271733878];
    let num = 64;
    let num2 = 64;
    if (64 <= hello.length) {
      const substr = hello.substring(num - 64, num);
      const items1 = [];
      let num3 = 0;
      do {
        do {
          let charCodeAtResult = substr.charCodeAt(num3);
          let sum = charCodeAtResult + (substr.charCodeAt(num3 + 1) << 8);
          let tmp5 = substr.charCodeAt(num3 + 2) << 16;
          items1[num3 >> 2] = sum + tmp5 + (substr.charCodeAt(num3 + 3) << 24);
          num3 = num3 + 4;
        } while (num3 < 64);
        let tmpResult = tmp(items, items1);
        num = num + 64;
        num2 = num;
      } while (num <= length);
      tmp = md5cycle;
    }
    const substr1 = hello.substring(num2 - 64);
    const items2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let num4 = 0;
    let num5 = 0;
    if (0 < substr1.length) {
      do {
        let tmp7 = num4 >> 2;
        items2[tmp7] = items2[tmp7] | (substr1.charCodeAt(num4) << ((num4 % 4) << 3));
        num4 = num4 + 1;
        num5 = num4;
      } while (num4 < length2);
    }
    items2[num5 >> 2] = items2[num5 >> 2] | (128 << ((num5 % 4) << 3));
    if (55 < num5) {
      md5cycle(items, items2);
      let num6 = 0;
      do {
        items2[num6] = 0;
        num6 = num6 + 1;
      } while (num6 < 16);
    }
    const match = 8 * hello.length.toString(16).match(/(.*?)(.{0,8})$/);
    const parsed = parseInt(match[2], 16);
    const str = 8 * hello.length;
    const str2 = 8 * hello.length.toString(16);
    items2[14] = parsed;
    items2[15] = parseInt(match[1], 16) || 0;
    md5cycle(items, items2);
    return items;
  }
  class SparkMD5 {
    constructor() {
      resetResult = this.reset();
      return;
    }
    append(arg0) {
      self = this;
      obj = /[\u0080-\uFFFF]/;
      unescapeResult = arg0;
      if (obj.test(arg0)) {
        tmp2 = globalThis;
        _unescape = unescape;
        _encodeURIComponent = encodeURIComponent;
        unescapeResult = unescape(encodeURIComponent(arg0));
      }
      appendBinaryResult = this.appendBinary(unescapeResult);
      return self;
    }
    appendBinary(arg0) {
      self = this;
      this._buff = this._buff + arg0;
      this._length = this._length + arg0.length;
      length = this._buff.length;
      num = 64;
      num2 = 64;
      if (64 <= length) {
        str = self._buff;
        tmp = md5cycle;
        substr = str.substring(num - 64, num);
        items = [];
        tmp3 = num;
        num3 = 0;
        do {
          do {
            charCodeAtResult = substr.charCodeAt(num3);
            sum = charCodeAtResult + (substr.charCodeAt(num3 + 1) << 8);
            tmp6 = substr.charCodeAt(num3 + 2) << 16;
            items[num3 >> 2] = sum + tmp6 + (substr.charCodeAt(num3 + 3) << 24);
            num3 = num3 + 4;
          } while (num3 < 64);
          tmpResult = tmp(tmp2, items);
          num = num + 64;
          num2 = num;
        } while (num <= length);
      }
      str2 = self._buff;
      self._buff = str2.substring(num2 - 64);
      return self;
    }
    end(arg0) {
      self = this;
      _buff = this._buff;
      length = _buff.length;
      items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
      for (let num = 0; num < length; num = num + 1) {
        tmp = num >> 2;
        items[tmp] = items[tmp] | (_buff.charCodeAt(num) << ((num % 4) << 3));
      }
      _finishResult = self._finish(items, length);
      _hash = self._hash;
      num2 = 0;
      if (0 < _hash.length) {
        tmp3 = _hash[num2];
        tmp4 = num2;
        str = "";
        num3 = 0;
        do {
          do {
            tmp5 = closure_1;
            result = 8 * num3;
            text = `${closure_1[(tmp3 >> (tmp6 + 4)) & 15] + closure_1[(tmp3 >> tmp6) & 15]}`;
            num3 = num3 + 1;
            str = text;
          } while (num3 < 4);
          _hash[num2] = text;
          num2 = num2 + 1;
        } while (num2 < _hash.length);
      }
      joined = _hash.join("");
      applyResult = joined;
      if (arg0) {
        items1 = [];
        length2 = joined.length;
        tmp9 = globalThis;
        num4 = 16;
        num5 = 0;
        if (0 < length2 - 1) {
          do {
            _parseInt = parseInt;
            arr = items1.push(parseInt(joined.substr(num5, 2), 16));
            num5 = num5 + 2;
            diff = length2 - 1;
          } while (num5 < diff);
        }
        _String = String;
        fromCharCode = String.fromCharCode;
        _String2 = String;
        applyResult = fromCharCode.apply(String, items1);
      }
      resetResult = self.reset();
      return applyResult;
    }
    reset() {
      return { _buff: "", _length: 0, _hash: [1732584193, -271733879, -1732584194, 271733878] };
    }
    getState() {
      obj = { buff: this._buff, length: this._length, hash: _hash.slice() };
      _hash = this._hash;
      return obj;
    }
    setState(arg0) {
      obj = { _buff: arg0.buff, _length: arg0.length, _hash: arg0.hash };
      return obj;
    }
    destroy() {
      delete tmp2[tmp];
      delete tmp2[tmp];
      delete tmp2[tmp];
      return;
    }
    _finish(arg0, arg1) {
      self = this;
      tmp = arg1 >> 2;
      arg0[tmp] = arg0[tmp] | (128 << ((arg1 % 4) << 3));
      if (arg1 > 55) {
        tmp2 = md5cycle;
        num = 0;
        tmp3 = md5cycle(self._hash, arg0);
        num2 = 1;
        num3 = 16;
        num4 = 0;
        do {
          arg0[num4] = 0;
          num4 = num4 + 1;
        } while (num4 < 16);
      }
      str = 8 * self._length;
      str2 = str.toString(16);
      match = str2.match(/(.*?)(.{0,8})$/);
      parsed = parseInt(match[2], 16);
      tmp6 = parseInt(match[1], 16) || 0;
      arg0[14] = parsed;
      arg0[15] = tmp6;
      tmp7 = md5cycle(self._hash, arg0);
      return;
    }
    static hash(arg0, arg1) {
      obj = /[\u0080-\uFFFF]/;
      tmp = SparkMD5;
      unescapeResult = arg0;
      if (obj.test(arg0)) {
        tmp3 = globalThis;
        _unescape = unescape;
        _encodeURIComponent = encodeURIComponent;
        unescapeResult = unescape(encodeURIComponent(arg0));
      }
      return SparkMD5.hashBinary(unescapeResult, arg1);
    }
    static hashBinary(arg0, arg1) {
      arr = md51(arg0);
      num = 0;
      if (0 < arr.length) {
        tmp = arr[num];
        tmp2 = num;
        str = "";
        num2 = 0;
        do {
          do {
            tmp3 = closure_1;
            result = 8 * num2;
            text = `${closure_1[(tmp >> (tmp4 + 4)) & 15] + closure_1[(tmp >> tmp4) & 15]}`;
            num2 = num2 + 1;
            str = text;
          } while (num2 < 4);
          arr[num] = text;
          num = num + 1;
        } while (num < arr.length);
      }
      joined = arr.join("");
      applyResult = joined;
      if (arg1) {
        items = [];
        length = joined.length;
        tmp7 = globalThis;
        num3 = 2;
        num4 = 16;
        num5 = 0;
        if (0 < length - 1) {
          do {
            _parseInt = parseInt;
            arr = items.push(parseInt(joined.substr(num5, 2), 16));
            num5 = num5 + 2;
            diff = length - 1;
          } while (num5 < diff);
        }
        _String = String;
        fromCharCode = String.fromCharCode;
        _String2 = String;
        applyResult = fromCharCode.apply(String, items);
      }
      return applyResult;
    }
    static ArrayBuffer() {
      resetResult = this.reset();
      return;
    }
  }
  let items = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
  const md51Result = md51("hello");
  let num = 0;
  if (0 < md51Result.length) {
    let num2 = 0;
    do {
      do {
        let result = 8 * num2;
        let text = `${arr[(tmp >> (tmp3 + 4)) & 15] + arr[(tmp >> tmp3) & 15]}`;
        num2 = num2 + 1;
        let str = text;
      } while (num2 < 4);
      md51Result[num] = text;
      num = num + 1;
    } while (num < md51Result.length);
  }
  if ("5d41402abc4b2a76b9719d911017c592" !== md51Result.join("")) {
    globalThis.add32 = function add32(arg0, arg1) {
      const sum = (65535 & arg0) + (65535 & arg1);
      return (((arg0 >> 16) + (arg1 >> 16) + (sum >> 16)) << 16) | (65535 & sum);
    };
  }
  let slice = typeof ArrayBuffer === "undefined";
  if (typeof ArrayBuffer !== "undefined") {
    let _ArrayBuffer2 = ArrayBuffer;
    slice = ArrayBuffer.prototype.slice;
  }
  if (!slice) {
    let _ArrayBuffer = ArrayBuffer;
    ArrayBuffer.prototype.slice = function (arg0, arg1) {
      const self = this;
      let byteLength = this.byteLength;
      if ((arg0 | 0 || 0) < 0) {
        const _Math2 = Math;
        let bound = Math.max(tmp + byteLength, 0);
      } else {
        const _Math = Math;
        bound = Math.min(tmp, byteLength);
      }
      if (arg1 === closure_0) {
        if (bound > byteLength) {
          const _ArrayBuffer2 = ArrayBuffer;
          let arrayBuffer = new ArrayBuffer(0);
        } else {
          const diff = byteLength - bound;
          const _ArrayBuffer = ArrayBuffer;
          arrayBuffer = new ArrayBuffer(diff);
          const _Uint8Array = Uint8Array;
          const uint8Array = new Uint8Array(arrayBuffer);
          const _Uint8Array2 = Uint8Array;
          const uint8Array1 = new Uint8Array(self, bound, diff);
          const result = uint8Array.set(uint8Array1);
        }
        return arrayBuffer;
      } else if ((arg1 | 0 || 0) < 0) {
        const _Math4 = Math;
        byteLength = tmp5 + byteLength;
        let bound1 = Math.max(byteLength, 0);
      } else {
        const _Math3 = Math;
        bound1 = Math.min(tmp5, byteLength);
      }
    };
  }
  SparkMD5.ArrayBuffer.prototype.append = function (byteLength) {
    const self = this;
    let buffer = this._buff.buffer;
    const uint8Array = new Uint8Array(buffer.byteLength + byteLength.byteLength);
    const uint8Array1 = new Uint8Array(buffer);
    const result = uint8Array.set(uint8Array1);
    const uint8Array2 = new Uint8Array(byteLength);
    const result1 = uint8Array.set(uint8Array2, buffer.byteLength);
    this._length = this._length + byteLength.byteLength;
    let num = 64;
    let num2 = 64;
    if (64 <= uint8Array.length) {
      const subarrayResult = uint8Array.subarray(num - 64, num);
      items = [];
      let num3 = 0;
      do {
        do {
          items[num3 >> 2] =
            subarrayResult[num3] +
            (subarrayResult[num3 + 1] << 8) +
            (subarrayResult[num3 + 2] << 16) +
            (subarrayResult[num3 + 3] << 24);
          num3 = num3 + 4;
        } while (num3 < 64);
        let tmp5Result = tmp5(tmp6, items);
        num = num + 64;
        num2 = num;
      } while (num <= length);
      tmp5 = md5cycle;
    }
    const diff = num2 - 64;
    if (diff < uint8Array.length) {
      const _Uint8Array2 = Uint8Array;
      buffer = uint8Array.buffer;
      let uint8Array3 = new Uint8Array(buffer.slice(diff));
    } else {
      const _Uint8Array = Uint8Array;
      uint8Array3 = new Uint8Array(0);
    }
    self._buff = uint8Array3;
    return self;
  };
  SparkMD5.ArrayBuffer.prototype.end = function (arg0) {
    let diff;
    const self = this;
    const _buff = this._buff;
    items = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let num = 0; num < length; num = num + 1) {
      let tmp = num >> 2;
      items[tmp] = items[tmp] | (_buff[num] << ((num % 4) << 3));
    }
    self._finish(items, _buff.length);
    const _hash = self._hash;
    let num2 = 0;
    if (0 < _hash.length) {
      let num3 = 0;
      do {
        do {
          let tmp5 = items;
          let result = 8 * num3;
          let text = `${items[(tmp3 >> (tmp6 + 4)) & 15] + items[(tmp3 >> tmp6) & 15]}`;
          num3 = num3 + 1;
          let str = text;
        } while (num3 < 4);
        _hash[num2] = text;
        num2 = num2 + 1;
      } while (num2 < _hash.length);
    }
    const joined = _hash.join("");
    let applyResult = joined;
    if (arg0) {
      const items1 = [];
      let num5 = 0;
      if (0 < joined.length - 1) {
        do {
          let _parseInt = parseInt;
          let arr = items1.push(parseInt(joined.substr(num5, 2), 16));
          num5 = num5 + 2;
          diff = length2 - 1;
        } while (num5 < diff);
      }
      const _String = String;
      const _String2 = String;
      applyResult = fromCharCode.apply(String, items1);
    }
    self.reset();
    return applyResult;
  };
  SparkMD5.ArrayBuffer.prototype.reset = () => {
    const obj = {};
    const uint8Array = new Uint8Array(0);
    obj._buff = uint8Array;
    obj._length = 0;
    obj._hash = [1732584193, -271733879, -1732584194, 271733878];
    return obj;
  };
  SparkMD5.ArrayBuffer.prototype.getState = function () {
    const self = this;
    const getState = SparkMD5.prototype.getState;
    const call = getState.call;
    const tmp = typeof call === "unknown" ? getState() : call(self);
    const uint8Array = new Uint8Array(tmp.buff);
    tmp.buff = fromCharCode.apply(null, uint8Array);
    return tmp;
  };
  SparkMD5.ArrayBuffer.prototype.setState = function (buff) {
    buff = buff.buff;
    const arrayBuffer = new ArrayBuffer(length);
    const uint8Array = new Uint8Array(arrayBuffer);
    for (let num = 0; num < length; num = num + 1) {
      uint8Array[num] = buff.charCodeAt(num);
    }
    const self = this;
    buff.buff = uint8Array;
    const setState = SparkMD5.prototype.setState;
    const call = setState.call;
    return typeof call === "unknown" ? setState(buff) : call(self, buff);
  };
  SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
  SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
  SparkMD5.ArrayBuffer.hash = (arg0, arg1) => {
    let diff1;
    const uint8Array = new Uint8Array(arg0);
    items = [1732584193, -271733879, -1732584194, 271733878];
    let num = 64;
    let num2 = 64;
    if (64 <= uint8Array.length) {
      const subarrayResult = uint8Array.subarray(num - 64, num);
      const items1 = [];
      let num3 = 0;
      do {
        do {
          items1[num3 >> 2] =
            subarrayResult[num3] +
            (subarrayResult[num3 + 1] << 8) +
            (subarrayResult[num3 + 2] << 16) +
            (subarrayResult[num3 + 3] << 24);
          num3 = num3 + 4;
        } while (num3 < 64);
        let tmpResult = tmp(items, items1);
        num = num + 64;
        num2 = num;
      } while (num <= length);
      tmp = md5cycle;
    }
    const diff = num2 - 64;
    if (diff < uint8Array.length) {
      let subarrayResult1 = uint8Array.subarray(diff);
    } else {
      const _Uint8Array = Uint8Array;
      subarrayResult1 = new Uint8Array(0);
    }
    const items2 = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    let num5 = 0;
    let num6 = 0;
    if (0 < subarrayResult1.length) {
      do {
        let tmp8 = num5 >> 2;
        items2[tmp8] = items2[tmp8] | (subarrayResult1[num5] << ((num5 % 4) << 3));
        num5 = num5 + 1;
        num6 = num5;
      } while (num5 < length2);
    }
    items2[num6 >> 2] = items2[num6 >> 2] | (128 << ((num6 % 4) << 3));
    if (55 < num6) {
      md5cycle(items, items2);
      let num7 = 0;
      do {
        items2[num7] = 0;
        num7 = num7 + 1;
      } while (num7 < 16);
    }
    const match = 8 * uint8Array.length.toString(16).match(/(.*?)(.{0,8})$/);
    const parsed = parseInt(match[2], 16);
    const str = 8 * uint8Array.length;
    const str2 = 8 * uint8Array.length.toString(16);
    items2[14] = parsed;
    items2[15] = parseInt(match[1], 16) || 0;
    md5cycle(items, items2);
    let num8 = 0;
    if (0 < items.length) {
      let num9 = 0;
      do {
        do {
          let tmp18 = items;
          let result = 8 * num9;
          let text = `${items[(tmp16 >> (tmp19 + 4)) & 15] + items[(tmp16 >> tmp19) & 15]}`;
          num9 = num9 + 1;
          let str3 = text;
        } while (num9 < 4);
        items[num8] = text;
        num8 = num8 + 1;
      } while (num8 < items.length);
    }
    const joined = items.join("");
    let applyResult = joined;
    if (arg1) {
      const items3 = [];
      let num10 = 0;
      if (0 < joined.length - 1) {
        do {
          let _parseInt = parseInt;
          let arr = items3.push(parseInt(joined.substr(num10, 2), 16));
          num10 = num10 + 2;
          diff1 = length3 - 1;
        } while (num10 < diff1);
      }
      const _String = String;
      const _String2 = String;
      applyResult = fromCharCode.apply(String, items3);
    }
    return applyResult;
  };
  return SparkMD5;
});
