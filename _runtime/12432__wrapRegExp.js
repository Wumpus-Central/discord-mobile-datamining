// === Module 12432: _wrapRegExp ===

// Module 12432 (_wrapRegExp)
import _inherits from "_inherits" /* 98 */;
import _setPrototypeOf from "_setPrototypeOf" /* 99 */;

function _wrapRegExp() {
  let self = this;
  class BabelRegExp {
    constructor(arg0, arg1, arg2) {
      value = arg2;
      RegExpResult = RegExp(arg0, arg1);
      obj = closure_1;
      if (!arg2) {
        value = obj.get(arg0);
      }
      result = closure_1.set(RegExpResult, value);
      return closure_1(RegExpResult, _wrapRegExp.prototype);
    }
    exec(arg0) {
      self = this;
      exec = closure_0.exec;
      call = exec.call;
      tmp = typeof call === "unknown" ? exec(arg0) : call(self, arg0);
      if (tmp) {
        indices = tmp;
        obj = closure_1;
        value = closure_1.get(self);
        closure_1 = value;
        tmp3 = globalThis;
        _Object = Object;
        keys = Object.keys(value);
        _Object2 = Object;
        tmp4 = null;
        tmp.groups = keys.reduce((acc, item) => {
          if (typeof value[item] === "number") {
            acc[item] = callResult[arr];
          } else {
            let num3 = 0;
            let tmp = callResult;
            if (undefined === callResult[arr[0]]) {
              let num2 = 0;
              num3 = 0;
              tmp = tmp5;
              if (1 < arr.length) {
                const sum = num2 + 1;
                num3 = sum;
                tmp = callResult;
                while (undefined === callResult[arr[sum]]) {
                  num2 = sum;
                  num3 = sum;
                  tmp = tmp3;
                  if (sum + 1 >= arr.length) {
                    break;
                  }
                }
              }
            }
            acc[item] = tmp[arr[num3]];
          }
          return acc;
        }, Object.create(null));
        indices = tmp.indices;
        if (indices) {
          value1 = obj.get(self);
          closure_1 = value1;
          _Object3 = Object;
          keys1 = Object.keys(value1);
          _Object4 = Object;
          indices.groups = keys1.reduce((acc, item) => {
            if (typeof value[item] === "number") {
              acc[item] = callResult[arr];
            } else {
              let num3 = 0;
              let tmp = callResult;
              if (undefined === callResult[arr[0]]) {
                let num2 = 0;
                num3 = 0;
                tmp = tmp5;
                if (1 < arr.length) {
                  const sum = num2 + 1;
                  num3 = sum;
                  tmp = callResult;
                  while (undefined === callResult[arr[sum]]) {
                    num2 = sum;
                    num3 = sum;
                    tmp = tmp3;
                    if (sum + 1 >= arr.length) {
                      break;
                    }
                  }
                }
              }
              acc[item] = tmp[arr[num3]];
            }
            return acc;
          }, Object.create(null));
        }
      }
      return tmp;
    }
  }
  _wrapRegExp = function _wrapRegExp(arg0, arg1) {
    value = arg1;
    const RegExpResult = RegExp(arg0, undefined);
    if (!arg1) {
      value = weakMap.get(arg0);
    }
    Object.create(_wrapRegExp.prototype);
    const result = weakMap.set(RegExpResult, value);
    return _setPrototypeOf(RegExpResult, _wrapRegExp.prototype);
  };
  regex = RegExp.prototype;
  weakMap = new WeakMap();
  regex(BabelRegExp, RegExp);
  BabelRegExp.prototype[Symbol.replace] = function(arg0, str) {
    let self = this;
    regex = str;
    if (typeof str === "string") {
      weakMap = weakMap.get(self);
      const _Symbol2 = Symbol;
      const call2 = tmp7.call;
      const replaced = str.replace(/\$<([^>]+)(>|$)/g, (arg0, arg1, arg2) => {
        str = "";
        if ("" === arg2) {
          return arg0;
        } else {
          const _Array = Array;
          if (Array.isArray(closure_1[arg1])) {
            str = `$${obj.join("$")}`;
          } else if (typeof obj === "number") {
            str = `$${obj}`;
          }
          return str;
        }
      });
      return typeof call2 === "unknown" ? regex[Symbol.replace](arg0, replaced) : call2(self, arg0, replaced);
    } else if (typeof str === "function") {
      const _Symbol = Symbol;
      let call = tmp3.call;
      const fn = function() {
        if (typeof arguments[arguments.length - 1] !== "object") {
          let push = [].slice;
          const call = push.call;
          if (typeof call === "unknown") {
            let callResult = push();
          } else {
            callResult = call(arguments);
          }
          push = callResult.push;
          value = weakMap.get(self);
          closure_1 = value;
          const _Object = Object;
          const keys = Object.keys(value);
          const _Object2 = Object;
          push(keys.reduce((acc, item) => {
            if (typeof value[item] === "number") {
              acc[item] = callResult[arr];
            } else {
              let num3 = 0;
              let tmp = callResult;
              if (undefined === callResult[arr[0]]) {
                let num2 = 0;
                num3 = 0;
                tmp = tmp5;
                if (1 < arr.length) {
                  const sum = num2 + 1;
                  num3 = sum;
                  tmp = callResult;
                  while (undefined === callResult[arr[sum]]) {
                    num2 = sum;
                    num3 = sum;
                    tmp = tmp3;
                    if (sum + 1 >= arr.length) {
                      break;
                    }
                  }
                }
              }
              acc[item] = tmp[arr[num3]];
            }
            return acc;
          }, Object.create(null)));
        } else {
          self = this;
          return str(...arguments);
        }
      };
      return typeof call === "unknown" ? regex[Symbol.replace](arg0, fn) : call(self, arg0, fn);
    } else {
      const _Symbol3 = Symbol;
      const call3 = tmp11.call;
      return typeof call3 === "unknown" ? regex[Symbol.replace](arg0, str) : call3(self, arg0, str);
    }
  };
  const apply = _wrapRegExp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function dollarmathPlugin(inline, arg1) {
  const merged = Object.assign(Object.assign({
    renderer(arg0) {
      const utils = closure_0.utils;
      return utils.escapeHtml(arg0);
    }
  }, closure_3), arg1);
  const ruler = inline.inline.ruler;
  ruler.before("escape", "math_inline", function math_inline_dollar_rule(src, arg1) {
    src = src.src;
    if (36 !== src.charCodeAt(src.pos)) {
      return false;
    } else {
      if (!closure_0.allow_space) {
        const utils = src.md.utils;
        const src2 = src.src;
        if (utils.isWhiteSpace(src2.charCodeAt(src.pos + 1))) {
          return false;
        }
      }
      if (!closure_0.allow_digits) {
        const str2 = src.src.charAt(src.pos - 1);
        if (str2) {
          if ("" !== str2.trim()) {
            const _isNaN = isNaN;
            const _Number = Number;
            if (!isNaN(Number(str2))) {
              return false;
            }
          }
        }
      }
      const pos = src.pos;
      let num4 = 0;
      if (pos >= 0) {
        let diff = pos - 1;
        const src3 = src.src;
        let num7 = 0;
        num4 = 0;
        if (92 === src3.charCodeAt(diff)) {
          const sum = num7 + 1;
          num4 = sum;
          while (0 <= diff) {
            let diff1 = diff - 1;
            let src4 = src.src;
            num7 = sum;
            diff = diff1;
            num4 = sum;
            if (92 !== src4.charCodeAt(diff1)) {
              break;
            }
          }
        }
      }
      let tmp6 = 0 !== num4;
      if (0 !== num4) {
        tmp6 = num4 % 2 !== 0;
      }
      if (tmp6) {
        return false;
      } else {
        let double_inline = closure_0.double_inline;
        if (double_inline) {
          const src5 = src.src;
          double_inline = 36 === src5.charCodeAt(src.pos + 1);
        }
        let flag4 = false;
        if (double_inline) {
          flag4 = true;
        }
        let num11 = 0;
        const sum1 = src.pos + 1;
        if (flag4) {
          num11 = 1;
        }
        let sum2 = sum1 + num11;
        let str4 = "$";
        let flag6 = false;
        const src1 = src.src;
        const index = src1.indexOf(`$`, sum2);
        let sum4 = sum2;
        while (-1 !== index) {
          let num16 = 0;
          if (index >= 0) {
            let diff2 = index - 1;
            let src6 = src.src;
            let num15 = 0;
            num16 = 0;
            if (92 === src6.charCodeAt(diff2)) {
              let sum3 = num15 + 1;
              num16 = sum3;
              while (0 <= diff2) {
                let diff3 = diff2 - 1;
                let src7 = src.src;
                num15 = sum3;
                diff2 = diff3;
                num16 = sum3;
                if (92 !== src7.charCodeAt(diff3)) {
                  break;
                }
              }
            }
          }
          let tmp16 = 0 !== num16;
          if (0 !== num16) {
            tmp16 = num16 % 2 !== 0;
          }
          if (tmp16) {
            sum4 = index + 1;
            let sum5 = index;
            let flag7 = flag6;
          } else {
            if (flag4) {
              let src8 = src.src;
              if (36 !== src8.charCodeAt(index + 1)) {
                sum4 = index + 1;
                sum5 = index;
                flag7 = flag6;
              }
            }
            sum5 = index;
            if (flag4) {
              sum5 = index + 1;
            }
            flag7 = true;
          }
          sum2 = sum4;
          flag6 = flag7;
          if (!flag7) {
            continue;
          } else if (flag7) {
            if (!closure_0.allow_space) {
              let src9 = src.src;
              let utils2 = src.md.utils;
              if (utils2.isWhiteSpace(src9.charCodeAt(sum5 - 1))) {
                return false;
              }
            }
            if (!closure_0.allow_digits) {
              let str5 = src.src;
              let str6 = str5.charAt(sum5 + 1);
              if (str6) {
                let str7 = "";
                if ("" !== str6.trim()) {
                  let tmp19 = globalThis;
                  let _isNaN2 = isNaN;
                  let _Number2 = Number;
                  if (!isNaN(Number(str6))) {
                    return false;
                  }
                }
              }
            }
            let src10 = src.src;
            let substr = src10.slice(src.pos + 1, sum5);
            if (flag4) {
              let src11 = src.src;
              substr = src11.slice(src.pos + 2, sum5 - 1);
            }
            if (substr) {
              if (!arg1) {
                let str8 = "math_inline";
                if (flag4) {
                  str8 = "math_inline_double";
                }
                let str9 = "math";
                let arr = src.push(str8, "math", 0);
                arr.content = substr;
                if (flag4) {
                  str4 = "$$";
                }
                arr.markup = str4;
              }
              src.pos = sum5 + 1;
              return true;
            } else {
              return false;
            }
          } else {
            return false;
          }
        }
        return false;
      }
    }
  });
  const ruler2 = inline.block.ruler;
  closure_129_0 = merged;
  ruler2.before("fence", "math_block", function math_block_dollar_rule(blkIndent, startLine, arg2, arg3) {
    const sum = blkIndent.bMarks[startLine] + blkIndent.tShift[startLine];
    if (blkIndent.sCount[startLine] - blkIndent.blkIndent >= 4) {
      return false;
    } else if (sum + 2 > tmp2) {
      return false;
    } else {
      const src = blkIndent.src;
      if (36 == src.charCodeAt(sum)) {
        const src2 = blkIndent.src;
        if (36 == src2.charCodeAt(sum + 1)) {
          const src1 = blkIndent.src;
          const str16 = src1.slice(sum, tmp2);
          label = undefined;
          end = tmp2;
          let flag = false;
          if (str16.trim().length > 3) {
            const trimmed = str16.trim();
            if (trimmed.endsWith("$$")) {
              const diff = tmp2 - 2;
              end = diff - (str16.length - str16.trim().length);
              flag = true;
            } else {
              end = tmp2;
              flag = false;
              if (closure_0.allow_labels) {
                const parts = str16.split("");
                const reversed = parts.reverse();
                const match = reversed.join("").match(_wrapRegExp(/^\s*\)([^)$\r\n]+?)\(\s*\${2}/, { label: 1 }));
                if (match) {
                  if (match.groups) {
                    const obj = { label: null, end: null };
                    const parts1 = match.groups.label.split("");
                    const reversed1 = parts1.reverse();
                    obj.label = reversed1.join("");
                    obj.end = tmp2 - ((match.index || 0) + match[0].length);
                    let obj2 = obj;
                    const tmp6 = match.index || 0;
                  }
                  end = tmp2;
                  flag = false;
                  if (undefined !== obj2.label) {
                    ({ label, end } = obj2);
                    flag = true;
                  }
                }
                obj2 = { end: tmp2 };
                const str3 = reversed.join("");
              }
            }
          }
          if (!flag) {
            if (!closure_0.allow_labels) {
              value = weakMap.get(blkIndent);
              if (undefined !== value) {
                if (startLine > value.startLine) {
                  if (startLine < value.lastLine) {
                    if (arg2 > value.lastLine + 1) {
                      const lastLine = value.lastLine;
                      const src3 = blkIndent.src;
                      src3.slice(blkIndent.bMarks[lastLine] + blkIndent.tShift[lastLine], blkIndent.eMarks[lastLine]);
                    }
                    return false;
                  }
                }
              }
            }
          }
          label2 = label;
          let tmp12 = startLine;
          end2 = end;
          let flag2 = flag;
          if (!flag) {
            let tmp13 = startLine;
            label2 = label;
            tmp12 = startLine;
            end2 = end;
            flag2 = flag;
            if (startLine + 1 < arg2) {
              const sum1 = tmp13 + 1;
              const src4 = blkIndent.src;
              const str9 = src4.slice(blkIndent.bMarks[sum1] + blkIndent.tShift[sum1], blkIndent.eMarks[sum1]);
              const trimmed1 = str9.trim();
              while (!trimmed1.endsWith("$$")) {
                label2 = label;
                tmp12 = sum1;
                end2 = tmp15;
                flag2 = flag;
                if ("" != str9.trim()) {
                  if (closure_0.allow_labels) {
                    let parts2 = str9.split("");
                    let reversed2 = parts2.reverse();
                    let str10 = reversed2.join("");
                    let match1 = str10.match(_wrapRegExp(/^\s*\)([^)$\r\n]+?)\(\s*\${2}/, { label: 1 }));
                    if (match1) {
                      if (match1.groups) {
                        let obj3 = { label: null, end: null };
                        let str11 = match1.groups.label;
                        let parts3 = str11.split("");
                        let reversed3 = parts3.reverse();
                        obj3.label = reversed3.join("");
                        let tmp18 = match1.index || 0;
                        obj3.end = tmp15 - (tmp18 + match1[0].length);
                        let obj4 = obj3;
                        if (undefined !== obj4.label) {
                          ({ label: label2, end: end2 } = obj4);
                          flag2 = true;
                          tmp12 = sum1;
                        }
                      }
                    }
                    obj4 = { end: tmp15 };
                  }
                  tmp13 = sum1;
                  label2 = label;
                  tmp12 = sum1;
                  end2 = tmp15;
                  flag2 = flag;
                }
              }
              const diff1 = tmp15 - 2;
              end2 = diff1 - (str9.length - str9.trim().length);
              flag2 = true;
              label2 = label;
              tmp12 = sum1;
            }
          }
          if (flag2) {
            let num2 = 0;
            if (flag2) {
              num2 = 1;
            }
            blkIndent.line = tmp12 + num2;
            let str12 = "math_block";
            if (label2) {
              str12 = "math_block_label";
            }
            const arr = blkIndent.push(str12, "math", 0);
            arr.block = true;
            const src5 = blkIndent.src;
            arr.content = src5.slice(sum + 2, end2).trim();
            arr.markup = "$$";
            items = [startLine, blkIndent.line];
            arr.map = items;
            if (label2) {
              let labelNormalizerResult = label2;
              if (closure_0.labelNormalizer) {
                labelNormalizerResult = closure_0.labelNormalizer(label2);
              }
              arr.info = labelNormalizerResult;
            }
            return true;
          } else {
            const allow_labels = closure_0.allow_labels;
            let tmp21 = !allow_labels;
            if (!allow_labels) {
              tmp21 = tmp12 > startLine;
            }
            if (tmp21) {
              const obj5 = { startLine, lastLine: tmp12 };
              const result = weakMap.set(blkIndent, obj5);
            }
            return false;
          }
        }
      }
      return false;
    }
  });
  closure_0 = { displayMode: false, inline: true };
  inline.renderer.rules.math_inline = (arg0, arg1) => {
    try {
      const obj = { displayMode: closure_0.displayMode };
      let rendererResult = _setPrototypeOf.renderer(tmp2, obj);
      let str3 = "block";
      if (closure_0.inline) {
        str3 = "inline";
      }
      let str4 = "span";
      if (closure_0.displayMode) {
        str4 = "div";
      }
      let str5 = "\n";
      if (closure_0.inline) {
        str5 = "";
      }
      const info = arg0[arg1].info;
      let str7 = "";
      if (info) {
        const _HermesInternal2 = HermesInternal;
        str7 = "id=\"" + info + "\" ";
      }
      const _HermesInternal3 = HermesInternal;
      items = ["<" + str4 + " " + str7 + "class=\"math " + str3 + "\">", , , ];
      let str14 = "";
      if (closure_0.hasLabel) {
        const _HermesInternal4 = HermesInternal;
        str14 = "" + _setPrototypeOf.labelRenderer(info);
      }
      items[1] = str14;
      items[2] = rendererResult;
      const _HermesInternal5 = HermesInternal;
      items[3] = "</" + str4 + ">";
      const found = items.filter((item) => item);
      return found.join(str5) + str5;
    } catch (tmp7) {
      const utils = _inherits.utils;
      const _HermesInternal = HermesInternal;
      rendererResult = utils.escapeHtml("" + tmp + ":" + tmp7.message);
    }
  };
  closure_0 = { displayMode: true, inline: true };
  inline.renderer.rules.math_inline_double = (arg0, arg1) => {
    try {
      const obj = { displayMode: closure_0.displayMode };
      let rendererResult = _setPrototypeOf.renderer(tmp2, obj);
      let str3 = "block";
      if (closure_0.inline) {
        str3 = "inline";
      }
      let str4 = "span";
      if (closure_0.displayMode) {
        str4 = "div";
      }
      let str5 = "\n";
      if (closure_0.inline) {
        str5 = "";
      }
      const info = arg0[arg1].info;
      let str7 = "";
      if (info) {
        const _HermesInternal2 = HermesInternal;
        str7 = "id=\"" + info + "\" ";
      }
      const _HermesInternal3 = HermesInternal;
      items = ["<" + str4 + " " + str7 + "class=\"math " + str3 + "\">", , , ];
      let str14 = "";
      if (closure_0.hasLabel) {
        const _HermesInternal4 = HermesInternal;
        str14 = "" + _setPrototypeOf.labelRenderer(info);
      }
      items[1] = str14;
      items[2] = rendererResult;
      const _HermesInternal5 = HermesInternal;
      items[3] = "</" + str4 + ">";
      const found = items.filter((item) => item);
      return found.join(str5) + str5;
    } catch (tmp7) {
      const utils = _inherits.utils;
      const _HermesInternal = HermesInternal;
      rendererResult = utils.escapeHtml("" + tmp + ":" + tmp7.message);
    }
  };
  closure_0 = { displayMode: true };
  inline.renderer.rules.math_block = (arg0, arg1) => {
    try {
      const obj = { displayMode: closure_0.displayMode };
      let rendererResult = _setPrototypeOf.renderer(tmp2, obj);
      let str3 = "block";
      if (closure_0.inline) {
        str3 = "inline";
      }
      let str4 = "span";
      if (closure_0.displayMode) {
        str4 = "div";
      }
      let str5 = "\n";
      if (closure_0.inline) {
        str5 = "";
      }
      const info = arg0[arg1].info;
      let str7 = "";
      if (info) {
        const _HermesInternal2 = HermesInternal;
        str7 = "id=\"" + info + "\" ";
      }
      const _HermesInternal3 = HermesInternal;
      items = ["<" + str4 + " " + str7 + "class=\"math " + str3 + "\">", , , ];
      let str14 = "";
      if (closure_0.hasLabel) {
        const _HermesInternal4 = HermesInternal;
        str14 = "" + _setPrototypeOf.labelRenderer(info);
      }
      items[1] = str14;
      items[2] = rendererResult;
      const _HermesInternal5 = HermesInternal;
      items[3] = "</" + str4 + ">";
      const found = items.filter((item) => item);
      return found.join(str5) + str5;
    } catch (tmp7) {
      const utils = _inherits.utils;
      const _HermesInternal = HermesInternal;
      rendererResult = utils.escapeHtml("" + tmp + ":" + tmp7.message);
    }
  };
  closure_0 = { displayMode: true, hasLabel: true };
  inline.renderer.rules.math_block_label = (arg0, arg1) => {
    try {
      const obj = { displayMode: closure_0.displayMode };
      let rendererResult = _setPrototypeOf.renderer(tmp2, obj);
      let str3 = "block";
      if (closure_0.inline) {
        str3 = "inline";
      }
      let str4 = "span";
      if (closure_0.displayMode) {
        str4 = "div";
      }
      let str5 = "\n";
      if (closure_0.inline) {
        str5 = "";
      }
      const info = arg0[arg1].info;
      let str7 = "";
      if (info) {
        const _HermesInternal2 = HermesInternal;
        str7 = "id=\"" + info + "\" ";
      }
      const _HermesInternal3 = HermesInternal;
      items = ["<" + str4 + " " + str7 + "class=\"math " + str3 + "\">", , , ];
      let str14 = "";
      if (closure_0.hasLabel) {
        const _HermesInternal4 = HermesInternal;
        str14 = "" + _setPrototypeOf.labelRenderer(info);
      }
      items[1] = str14;
      items[2] = rendererResult;
      const _HermesInternal5 = HermesInternal;
      items[3] = "</" + str4 + ">";
      const found = items.filter((item) => item);
      return found.join(str5) + str5;
    } catch (tmp7) {
      const utils = _inherits.utils;
      const _HermesInternal = HermesInternal;
      rendererResult = utils.escapeHtml("" + tmp + ":" + tmp7.message);
    }
  };
}
let closure_3 = {
  allow_space: true,
  allow_digits: true,
  double_inline: true,
  allow_labels: true,
  labelNormalizer(label2) {
    return label2.replace(/[\s]+/g, "-");
  },
  labelRenderer(info) {
    return "<a href=\"#" + info + "\" class=\"mathlabel\" title=\"Permalink to this equation\">\u00B6</a>";
  }
};
let weakMap = new WeakMap();

export default dollarmathPlugin;
export { dollarmathPlugin };