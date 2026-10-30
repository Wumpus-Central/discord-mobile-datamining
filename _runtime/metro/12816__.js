// _runtime/metro/12816__.js
import _mod12817 from "12817__.js";

class Tokenizer {
  constructor(arg0) {
    return;
  }
}
Tokenizer.prototype = {
  charCodeAt(sum) {
    let num = 0;
    if (sum < this.str.length) {
      num = this.str.charCodeAt(sum);
    }
    return num;
  },
  charCode() {
    return this.charCodeAt(this.pos);
  },
  nextCharCode() {
    return this.charCodeAt(this.pos + 1);
  },
  nextNonWsCode(pos) {
    return this.charCodeAt(this.findWsEnd(pos));
  },
  findWsEnd(pos) {
    const self = this;
    let sum = pos;
    let tmp2 = pos;
    if (pos < this.str.length) {
      while (true) {
        let str = self.str;
        let charCodeAtResult = str.charCodeAt(sum);
        if (13 !== charCodeAtResult) {
          if (10 !== charCodeAtResult) {
            if (12 !== charCodeAtResult) {
              if (32 !== charCodeAtResult) {
                tmp2 = sum;
                if (9 !== charCodeAtResult) {
                  break;
                }
              }
              break;
            }
          }
        }
        sum = sum + 1;
        tmp2 = sum;
        if (sum >= self.str.length) {
          break;
        }
      }
    }
    return tmp2;
  },
  substringToPos(wsEnd) {
    this.pos = wsEnd;
    return this.str.substring(this.pos, wsEnd);
  },
  eat(arg0) {
    const self = this;
    if (this.charCode() !== arg0) {
      const _String = String;
      self.error(`Expect \`${String.fromCharCode(arg0)}\``);
    }
    self.pos = self.pos + 1;
  },
  peek() {
    const self = this;
    let str = "";
    if (this.pos < this.str.length) {
      self.pos = +self.pos + 1;
      str = self.str.charAt(tmp);
    }
    return str;
  },
  error(arg0) {
    throw new _mod12817(arg0, this.str, this.pos);
  },
};

export default Tokenizer;
