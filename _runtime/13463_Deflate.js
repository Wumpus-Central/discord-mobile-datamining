// _runtime/13463_Deflate.js
import _mod13462 from "metro/13462__.js";
import ZStream from "13464_ZStream.js";
import deflateInit from "13465_deflateInit.js";
import _mod13466 from "metro/13466__.js";
import string2buf from "13470_string2buf.js";

class Deflate {
  constructor(arg0) {
    const self = this;
    if (this instanceof Deflate) {
      let obj = arg0;
      const assign = _mod13462.assign;
      _mod13462;
      if (!arg0) {
        obj = {};
      }
      self.options = assign(
        { level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" },
        obj,
      );
      const options = self.options;
      if (options.raw) {
        if (options.windowBits > 0) {
          options.windowBits = -options.windowBits;
        }
        self.err = 0;
        self.msg = "";
        self.ended = false;
        self.chunks = [];
        const self2 = this;
        const self3 = this;
        self.strm = new ZStream();
        self.strm.avail_out = 0;
        const tmp7 = new ZStream();
        const tmp4Result = deflateInit;
        const deflateInit2Result = tmp4Result.deflateInit2(
          self.strm,
          options.level,
          options.method,
          options.windowBits,
          options.memLevel,
          options.strategy,
        );
        if (0 !== deflateInit2Result) {
          const _Error2 = Error;
          const self8 = this;
          const self9 = this;
          const error = new Error(_mod13466[deflateInit2Result]);
          throw error;
        } else {
          if (options.header) {
            const tmp4Result4 = deflateInit;
            tmp4Result4.deflateSetHeader(self.strm, options.header);
          }
          if (options.dictionary) {
            let dictionary;
            if (typeof options.dictionary === "string") {
              const tmp4Result5 = string2buf;
              dictionary = tmp4Result5.string2buf(options.dictionary);
            } else if ("[object ArrayBuffer]" === toString.call(options.dictionary)) {
              const _Uint8Array = Uint8Array;
              const self4 = this;
              const self5 = this;
              dictionary = new Uint8Array(options.dictionary);
            } else {
              dictionary = options.dictionary;
            }
            const tmp4Result6 = deflateInit;
            const deflateSetDictionaryResult = tmp4Result6.deflateSetDictionary(self.strm, dictionary);
            if (0 !== deflateSetDictionaryResult) {
              const _Error = Error;
              const self6 = this;
              const self7 = this;
              const error1 = new Error(_mod13466[deflateSetDictionaryResult]);
              throw error1;
            } else {
              self._dict_set = true;
            }
          }
        }
      }
      const gzip = options.gzip && options.windowBits > 0 && options.windowBits < 16;
      if (gzip) {
        options.windowBits = options.windowBits + 16;
      }
    } else {
      const tmpResult = Deflate(arg0);
      return tmpResult;
    }
  }
  push(input, last_flush) {
    let deflateResult;
    const self = this;
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    if (this.ended) {
      return false;
    } else {
      let tmp2 = last_flush;
      if (last_flush !== ~~last_flush) {
        let num = 0;
        if (true === last_flush) {
          num = 4;
        }
        tmp2 = num;
      }
      if (typeof input === "string") {
        const obj = string2buf;
        strm.input = obj.string2buf(input);
      } else if ("[object ArrayBuffer]" === toString.call(input)) {
        const _Uint8Array = Uint8Array;
        const self2 = this;
        const self3 = this;
        const uint8Array = new Uint8Array(input);
        strm.input = uint8Array;
      } else {
        strm.input = input;
      }
      strm.next_in = 0;
      strm.avail_in = strm.input.length;
      let flag2 = 2 !== tmp2;
      const tmp10 = 4 !== tmp2;
      while (true) {
        if (0 === strm.avail_out) {
          let self4 = this;
          let self5 = this;
          let buf8 = new _mod13462.Buf8(chunkSize);
          strm.output = buf8;
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        let obj2 = deflateInit;
        deflateResult = obj2.deflate(strm, tmp2);
        let tmp19 = 1 !== deflateResult;
        if (tmp19) {
          if (0 !== deflateResult) {
            break;
          }
        }
        let tmp20 = 0 !== strm.avail_out;
        if (tmp20) {
          let tmp21 = 0 !== strm.avail_in;
          if (!tmp21) {
            let tmp22 = tmp10 && flag2;
            tmp21 = tmp22;
          }
          tmp20 = tmp21;
        }
        if (!tmp20) {
          if ("string" === self.options.to) {
            let onData2 = self.onData;
            let tmp16Result = string2buf;
            let buf2binstring = tmp16Result.buf2binstring;
            let tmp16Result4 = _mod13462;
            let onData2Result = onData2(buf2binstring(tmp16Result4.shrinkBuf(strm.output, strm.next_out)));
          } else {
            let onData = self.onData;
            let tmp16Result5 = _mod13462;
            let onDataResult = onData(tmp16Result5.shrinkBuf(strm.output, strm.next_out));
          }
        }
        if (4 === tmp2) {
          let tmp16Result6 = deflateInit;
          let deflateEndResult = tmp16Result6.deflateEnd(self.strm);
          let onEndResult = self.onEnd(deflateEndResult);
          let flag3 = true;
          self.ended = true;
          flag2 = 0 === deflateEndResult;
        } else if (!flag2) {
          let onEndResult1 = self.onEnd(0);
          strm.avail_out = 0;
          flag2 = true;
        }
        return flag2;
      }
      self.onEnd(deflateResult);
      self.ended = true;
      return false;
    }
  }
  onData(arg0) {
    const chunks = this.chunks;
    chunks.push(arg0);
  }
  onEnd(err) {
    const self = this;
    if (0 === err) {
      if ("string" === self.options.to) {
        const chunks = self.chunks;
        self.result = chunks.join("");
      } else {
        const obj = _mod13462;
        self.result = obj.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = err;
    self.msg = self.strm.msg;
  }
}
const gzip_export = function gzip(arg0, arg1) {
  const tmp = arg1 || {};
  tmp.gzip = true;
  const arr = Deflate(tmp);
  arr.push(arg0, true);
  if (arr.err) {
    const msg = arr.msg || _mod13466[arr.err];
    throw msg;
  } else {
    return arr.result;
  }
};

export { Deflate };
export const deflate = function deflate(arg0, arg1) {
  const arr = Deflate(arg1);
  arr.push(arg0, true);
  if (arr.err) {
    const msg = arr.msg || _mod13466[arr.err];
    throw msg;
  } else {
    return arr.result;
  }
};
export const deflateRaw = function deflateRaw(arg0, arg1) {
  const tmp = arg1 || {};
  tmp.raw = true;
  const arr = Deflate(tmp);
  arr.push(arg0, true);
  if (arr.err) {
    const msg = arr.msg || _mod13466[arr.err];
    throw msg;
  } else {
    return arr.result;
  }
};
export { gzip_export as gzip };
