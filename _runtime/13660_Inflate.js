// _runtime/13660_Inflate.js
import assign from "13651_assign.js";
import ZStream from "13653_ZStream.js";
import _mod13655 from "metro/13655__.js";
import assign2 from "13659_assign.js";
import _mod13664 from "metro/13664__.js";

require = arg1;
const dependencyMap = arg6;
class Inflate {
  constructor(arg0) {
    self = this;
    tmp = Inflate;
    if (this instanceof Inflate) {
      tmp4 = closure_0;
      tmp5 = closure_1;
      obj = require("assign");
      obj = arg0;
      if (!arg0) {
        obj = {};
      }
      self.options = obj.assign({ chunkSize: 16384, windowBits: 0, to: "" }, obj);
      options = self.options;
      raw = options.raw;
      if (raw) {
        num = 0;
        raw = options.windowBits >= 0;
      }
      if (raw) {
        num2 = 16;
        raw = options.windowBits < 16;
      }
      if (raw) {
        options.windowBits = -options.windowBits;
        num3 = 0;
        if (0 === options.windowBits) {
          num4 = -15;
          options.windowBits = -15;
        }
      }
      num5 = 0;
      tmp6 = options.windowBits >= 0;
      if (tmp6) {
        num6 = 16;
        tmp6 = options.windowBits < 16;
      }
      tmp7 = !tmp6;
      if (tmp6) {
        windowBits = arg0;
        if (arg0) {
          windowBits = arg0.windowBits;
        }
        tmp7 = windowBits;
      }
      if (!tmp7) {
        num7 = 32;
        options.windowBits = options.windowBits + 32;
      }
      num8 = 15;
      tmp8 = options.windowBits > 15;
      if (tmp8) {
        num9 = 48;
        tmp8 = options.windowBits < 48;
      }
      if (tmp8) {
        if (!(15 & options.windowBits)) {
          options.windowBits = options.windowBits | 15;
        }
      }
      self.err = 0;
      str = "";
      self.msg = "";
      flag = false;
      self.ended = false;
      self.chunks = [];
      tmp9 = new.target;
      tmp10 = new.target;
      tmp11 = new require("ZStream")();
      tmp12 = tmp11;
      self.strm = tmp11;
      self.strm.avail_out = 0;
      tmp4Result = require("InflateState");
      inflateInit2Result = tmp4Result.inflateInit2(self.strm, options.windowBits);
      if (inflateInit2Result !== require("metro/13664__.js").Z_OK) {
        tmp19 = globalThis;
        _Error = Error;
        tmp20 = new.target;
        tmp21 = new.target;
        error = new Error(require("metro/13655__.js")[inflateInit2Result]);
        tmp23 = error;
        throw error;
      } else {
        tmp14 = new.target;
        tmp15 = new.target;
        tmp16 = new require("GZheader")();
        tmp17 = tmp16;
        self.header = tmp16;
        tmp4Result1 = require("InflateState");
        inflateGetHeaderResult = tmp4Result1.inflateGetHeader(self.strm, self.header);
        return;
      }
    } else {
      tmpResult = tmp(arg0);
      tmp3 = tmpResult;
      return tmpResult;
    }
  }
  push(arg0, arg1) {
    strm = this.strm;
    if (this.ended) {
      flag5 = false;
      return false;
    } else {
      tmp = arg1;
      tmp2 = arg1;
      if (arg1 === ~~arg1) {
        tmp8 = arg0;
        if (typeof arg0 === "string") {
          tmp15 = closure_0;
          tmp16 = closure_1;
          obj = require("assign");
          strm.input = obj.binstring2buf(arg0);
          num = 0;
          strm.next_in = 0;
          strm.avail_in = strm.input.length;
          flag2 = false;
          flag3 = true;
          str2 = "string";
          tmp17 = globalThis;
          str3 = "[object ArrayBuffer]";
          flag4 = false;
        } else {
          tmp18 = toString;
          call = toString.call;
          str = "[object ArrayBuffer]";
          if ("[object ArrayBuffer]" !== (typeof call === "unknown" ? tmp18() : call(arg0))) {
            strm.input = arg0;
          }
        }
        tmp9 = globalThis;
        _Uint8Array = Uint8Array;
        tmp10 = new.target;
        tmp11 = new.target;
        tmp12 = arg0;
        uint8Array = new Uint8Array(arg0);
        tmp14 = uint8Array;
        strm.input = uint8Array;
      } else {
        flag = true;
        if (true === arg1) {
          tmp5 = closure_0;
          tmp6 = closure_1;
          Z_NO_FLUSH = require("metro/13664__.js").Z_FINISH;
        } else {
          tmp3 = closure_0;
          tmp4 = closure_1;
          Z_NO_FLUSH = require("metro/13664__.js").Z_NO_FLUSH;
        }
        tmp7 = Z_NO_FLUSH;
      }
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
    tmp = closure_0;
    tmp2 = closure_1;
    if (arg0 === require("metro/13664__.js").Z_OK) {
      str = "string";
      if ("string" === self.options.to) {
        chunks = self.chunks;
        str2 = "";
        self.result = chunks.join("");
      } else {
        tmpResult = require("assign");
        self.result = tmpResult.flattenChunks(self.chunks);
      }
    }
    self.chunks = [];
    self.err = arg0;
    self.msg = self.strm.msg;
    return;
  }
}
function inflate(arg0, windowBits) {
  let arr = Inflate(windowBits);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = _mod13655[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
}
arg5.Inflate = Inflate;
arg5.inflate = inflate;
arg5.inflateRaw = function inflateRaw(arg0, windowBits) {
  let obj = windowBits;
  if (!windowBits) {
    obj = {};
  }
  obj.raw = true;
  let arr = Inflate(obj);
  arr = arr.push(arg0, true);
  if (arr.err) {
    let msg = arr.msg;
    if (!msg) {
      msg = _mod13655[arr.err];
    }
    throw msg;
  } else {
    return arr.result;
  }
};
arg5.ungzip = inflate;
