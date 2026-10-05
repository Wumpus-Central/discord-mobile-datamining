// === Module 13471: Inflate ===

// Module 13471 (Inflate)
import _mod13462 from "module_13462" /* 13462 */;
import ZStream from "ZStream" /* 13464 */;
import _mod13466 from "module_13466" /* 13466 */;
import string2buf from "string2buf" /* 13470 */;
import inflateReset from "inflateReset" /* 13472 */;
import _mod13475 from "module_13475" /* 13475 */;
import GZheader from "GZheader" /* 13476 */;

class Inflate {
  constructor(windowBits) {
    const self = this;
    if (this instanceof Inflate) {
      let obj = windowBits;
      const assign = _mod13462.assign;
      _mod13462;
      if (!windowBits) {
        obj = {};
      }
      self.options = assign({ chunkSize: 16384, windowBits: 0, to: "" }, obj);
      const options = self.options;
      const raw = options.raw && options.windowBits >= 0 && options.windowBits < 16;
      if (raw) {
        options.windowBits = -options.windowBits;
        if (0 === options.windowBits) {
          options.windowBits = -15;
        }
      }
      let tmp8 = !tmp7;
      if (options.windowBits >= 0 && options.windowBits < 16) {
        tmp8 = windowBits && windowBits.windowBits;
      }
      if (!tmp8) {
        options.windowBits = options.windowBits + 32;
      }
      const tmp10 = options.windowBits > 15 && options.windowBits < 48;
      if (tmp10) {
        if (!(15 & options.windowBits)) {
          options.windowBits = options.windowBits | 15;
        }
      }
      self.err = 0;
      self.msg = "";
      self.ended = false;
      self.chunks = [];
      const self2 = this;
      const self3 = this;
      self.strm = new ZStream();
      self.strm.avail_out = 0;
      const tmp11 = new ZStream();
      const tmp4Result = inflateReset;
      const inflateInit2Result = tmp4Result.inflateInit2(self.strm, options.windowBits);
      if (inflateInit2Result !== _mod13475.Z_OK) {
        const _Error = Error;
        const self6 = this;
        const self7 = this;
        const error = new Error(_mod13466[inflateInit2Result]);
        throw error;
      } else {
        const self4 = this;
        const self5 = this;
        self.header = new GZheader();
        const tmp14 = new GZheader();
        const tmp4Result2 = inflateReset;
        tmp4Result2.inflateGetHeader(self.strm, self.header);
      }
    } else {
      const tmpResult = Inflate(windowBits);
      return tmpResult;
    }
  }
  push(input, arg1) {
    let Z_OK;
    const self = this;
    const strm = this.strm;
    const chunkSize = this.options.chunkSize;
    const dictionary = this.options.dictionary;
    if (this.ended) {
      return false;
    } else {
      let Z_FINISH = arg1;
      if (arg1 !== ~(~arg1)) {
        let Z_NO_FLUSH;
        if (true === arg1) {
          Z_NO_FLUSH = _mod13475.Z_FINISH;
        } else {
          Z_NO_FLUSH = _mod13475.Z_NO_FLUSH;
        }
        Z_FINISH = Z_NO_FLUSH;
      }
      if (typeof input === "string") {
        const obj = string2buf;
        strm.input = obj.binstring2buf(input);
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
      let flag4 = false;
      while (true) {
        let flag6;
        let flag5 = flag4;
        if (0 === strm.avail_out) {
          let self4 = this;
          let self5 = this;
          let buf8 = new _mod13462.Buf8(chunkSize);
          strm.output = buf8;
          strm.next_out = 0;
          strm.avail_out = chunkSize;
        }
        let obj2 = inflateReset;
        Z_OK = obj2.inflate(strm, _mod13475.Z_NO_FLUSH);
        let tmp21 = Z_OK === _mod13475.Z_NEED_DICT && dictionary;
        if (tmp21) {
          let string2bufResult;
          if (typeof dictionary === "string") {
            let tmp19Result = string2buf;
            string2bufResult = tmp19Result.string2buf(dictionary);
          } else {
            string2bufResult = dictionary;
            if ("[object ArrayBuffer]" === toString.call(dictionary)) {
              let _Uint8Array2 = Uint8Array;
              let self6 = this;
              let self7 = this;
              string2bufResult = new Uint8Array(dictionary);
            }
          }
          let tmp19Result7 = inflateReset;
          Z_OK = tmp19Result7.inflateSetDictionary(self.strm, string2bufResult);
        }
        let tmp24 = Z_OK === _mod13475.Z_BUF_ERROR && true === flag5;
        if (tmp24) {
          Z_OK = _mod13475.Z_OK;
          flag5 = false;
        }
        if (Z_OK !== _mod13475.Z_STREAM_END) {
          if (Z_OK !== _mod13475.Z_OK) {
            break;
          }
        }
        if (strm.next_out) {
          let tmp25 = 0 !== strm.avail_out && Z_OK !== _mod13475.Z_STREAM_END;
          if (tmp25) {
            let tmp26 = 0 !== strm.avail_in;
            if (!tmp26) {
              let tmp27 = Z_FINISH !== _mod13475.Z_FINISH && Z_FINISH !== _mod13475.Z_SYNC_FLUSH;
              tmp26 = tmp27;
            }
            tmp25 = tmp26;
          }
          if (!tmp25) {
            if ("string" === self.options.to) {
              let tmp19Result8 = string2buf;
              let utf8borderResult = tmp19Result8.utf8border(strm.output, strm.next_out);
              let diff = strm.next_out - utf8borderResult;
              let tmp19Result9 = string2buf;
              strm.next_out = diff;
              strm.avail_out = chunkSize - diff;
              let buf2stringResult = tmp19Result9.buf2string(strm.output, utf8borderResult);
              if (diff) {
                let tmp19Result10 = _mod13462;
                let arraySetResult = tmp19Result10.arraySet(strm.output, strm.output, utf8borderResult, diff, 0);
              }
              let onDataResult = self.onData(buf2stringResult);
            } else {
              let onData = self.onData;
              let tmp19Result11 = _mod13462;
              let onDataResult1 = onData(tmp19Result11.shrinkBuf(strm.output, strm.next_out));
            }
          }
        }
        let tmp37 = 0 === strm.avail_in && 0 === strm.avail_out;
        if (tmp37) {
          flag5 = true;
        }
        if (strm.avail_in > 0) {
          flag4 = flag5;
        }
        if (Z_OK === _mod13475.Z_STREAM_END) {
          Z_FINISH = _mod13475.Z_FINISH;
        }
        if (Z_FINISH === _mod13475.Z_FINISH) {
          let tmp19Result12 = inflateReset;
          let inflateEndResult = tmp19Result12.inflateEnd(self.strm);
          let onEndResult = self.onEnd(inflateEndResult);
          self.ended = true;
          flag6 = inflateEndResult === _mod13475.Z_OK;
        } else {
          flag6 = Z_FINISH !== _mod13475.Z_SYNC_FLUSH;
          if (!flag6) {
            let onEndResult1 = self.onEnd(_mod13475.Z_OK);
            strm.avail_out = 0;
            flag6 = true;
          }
        }
        return flag6;
      }
      self.onEnd(Z_OK);
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
    if (err === _mod13475.Z_OK) {
      if ("string" === self.options.to) {
        const chunks = self.chunks;
        self.result = chunks.join("");
      } else {
        const tmpResult = _mod13462;
        self.result = tmpResult.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = err;
    self.msg = self.strm.msg;
  }
}
function inflate(arg0, windowBits) {
  const arr = Inflate(windowBits);
  arr.push(arg0, true);
  if (arr.err) {
    const msg = arr.msg || _mod13466[arr.err];
    throw msg;
  } else {
    return arr.result;
  }
}

export { Inflate };
export { inflate };
export const inflateRaw = function inflateRaw(arg0, arg1) {
  const tmp = arg1 || {};
  tmp.raw = true;
  const arr = Inflate(tmp);
  arr.push(arg0, true);
  if (arr.err) {
    const msg = arr.msg || _mod13466[arr.err];
    throw msg;
  } else {
    return arr.result;
  }
};
export const ungzip = inflate;