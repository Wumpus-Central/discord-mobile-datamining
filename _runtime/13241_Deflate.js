// _runtime/13241_Deflate.js
import assign from "13240_assign.js";
import _mod13244 from "metro/13244__.js";
import assign2 from "13248_assign.js";

require = arg1;
const dependencyMap = arg6;
class Deflate {
  constructor(arg0) {
    self = this;
    tmp = Deflate;
    if (this instanceof Deflate) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj = require("assign");
      obj = arg0;
      if (!arg0) {
        obj = {};
      }
      self.options = obj.assign({ level: -1, method: 8, chunkSize: 16384, windowBits: 15, memLevel: 8, strategy: 0, to: "" }, obj);
      options = self.options;
      if (options.raw) {
        num = 0;
        if (options.windowBits > 0) {
          options.windowBits = -options.windowBits;
        }
        num5 = 0;
        self.err = 0;
        str = "";
        self.msg = "";
        flag = false;
        self.ended = false;
        self.chunks = [];
        tmp6 = new.target;
        tmp7 = new.target;
        tmp8 = new require("ZStream")();
        tmp9 = tmp8;
        self.strm = tmp8;
        self.strm.avail_out = 0;
        tmp4Result = require("flush_block_only");
        tmp10 = tmp4Result;
        deflateInit2Result = tmp4Result.deflateInit2(self.strm, options.level, options.method, options.windowBits, options.memLevel, options.strategy);
        if (0 !== deflateInit2Result) {
          tmp22 = globalThis;
          _Error2 = Error;
          tmp23 = new.target;
          tmp24 = new.target;
          error = new Error(require("metro/13244__.js")[deflateInit2Result]);
          tmp26 = error;
          throw error;
        } else {
          if (options.header) {
            tmp4Result1 = require("flush_block_only");
            deflateSetHeaderResult = tmp4Result1.deflateSetHeader(self.strm, options.header);
          }
          if (options.dictionary) {
            if (typeof options.dictionary === "string") {
              tmp4Result2 = require("assign");
              dictionary = tmp4Result2.string2buf(options.dictionary);
            } else {
              tmp27 = toString;
              call = toString.call;
              dictionary2 = options.dictionary;
              str2 = "[object ArrayBuffer]";
              if ("[object ArrayBuffer]" === (typeof call === "unknown" ? tmp27() : call(dictionary2))) {
                tmp13 = globalThis;
                _Uint8Array = Uint8Array;
                tmp14 = new.target;
                tmp15 = new.target;
                dictionary = new Uint8Array(options.dictionary);
              } else {
                dictionary = options.dictionary;
              }
            }
            tmp4Result3 = require("flush_block_only");
            deflateSetDictionaryResult = tmp4Result3.deflateSetDictionary(self.strm, dictionary);
            if (0 !== deflateSetDictionaryResult) {
              tmp17 = globalThis;
              _Error = Error;
              tmp18 = new.target;
              tmp19 = new.target;
              error1 = new Error(require("metro/13244__.js")[deflateSetDictionaryResult]);
              tmp21 = error1;
              throw error1;
            } else {
              flag2 = true;
              self._dict_set = true;
            }
          }
          return;
        }
      }
      gzip = options.gzip;
      if (gzip) {
        num2 = 0;
        gzip = options.windowBits > 0;
      }
      if (gzip) {
        num3 = 16;
        gzip = options.windowBits < 16;
      }
      if (gzip) {
        num4 = 16;
        options.windowBits = options.windowBits + 16;
      }
    } else {
      tmpResult = tmp(arg0);
      tmp3 = tmpResult;
      return tmpResult;
    }
    return;
  }
  push(arg0, arg1) {
    strm = this.strm;
    if (this.ended) {
      flag2 = false;
      return false;
    } else {
      tmp = arg1;
      tmp2 = arg1;
      if (arg1 !== ~~arg1) {
        flag = true;
        num = 0;
        if (true === arg1) {
          num = 4;
        }
        tmp2 = num;
      }
      tmp3 = arg0;
      if (typeof arg0 === "string") {
        tmp10 = closure_0;
        tmp11 = closure_1;
        obj = require("assign");
        strm.input = obj.string2buf(arg0);
        num2 = 0;
        strm.next_in = 0;
        strm.avail_in = strm.input.length;
        str2 = "string";
        num3 = 2;
        tmp12 = 2 !== tmp2;
        num4 = 4;
        tmp13 = 4 !== tmp2;
        num5 = 1;
      } else {
        tmp14 = toString;
        call = toString.call;
        str = "[object ArrayBuffer]";
        if ("[object ArrayBuffer]" !== (typeof call === "unknown" ? tmp14() : call(arg0))) {
          strm.input = arg0;
        }
      }
      tmp4 = globalThis;
      _Uint8Array = Uint8Array;
      tmp5 = new.target;
      tmp6 = new.target;
      tmp7 = arg0;
      uint8Array = new Uint8Array(arg0);
      tmp9 = uint8Array;
      strm.input = uint8Array;
    }
    return;
  }
  onData(arg0) {
    chunks = this.chunks;
    arr = chunks.push(arg0);
    return;
  }
  onEnd(arg0) {
    self = this;
    if (0 === arg0) {
      str = "string";
      if ("string" === self.options.to) {
        chunks = self.chunks;
        str2 = "";
        self.result = chunks.join("");
      } else {
        tmp = closure_0;
        tmp2 = closure_1;
        obj = require("assign");
        self.result = obj.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = arg0;
    self.msg = self.strm.msg;
    return;
  }
}
arg5.Deflate = Deflate;
arg5.deflate = function deflate(arg0, arg1) {
  let arr = Deflate(arg1);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = _mod13244[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
};
arg5.deflateRaw = function deflateRaw(arg0, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  obj.raw = true;
  let arr = Deflate(obj);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = _mod13244[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
};
arg5.gzip = function gzip(arg0, arg1) {
  let obj = arg1;
  if (!arg1) {
    obj = {};
  }
  obj.gzip = true;
  let arr = Deflate(obj);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = _mod13244[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
};