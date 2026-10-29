// discord_app/modules/html_parser/index.tsx
import _mod9371 from "../../../_runtime/metro/09371__.js";
import HTMLParserConstants from "HTMLParserConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function findTextStart(arr) {
  let num = 0;
  if (0 < arr.length) {
    const charCodeAtResult = arr.charCodeAt(0);
    let num3 = 0;
    num = 0;
    if (tmp3) {
      const sum = num3 + 1;
      num = sum;
      while (sum < arr.length) {
        let charCodeAtResult1 = arr.charCodeAt(sum);
        let tmp7 =
          charCodeAtResult1 === constants2.SPACE ||
          charCodeAtResult1 === constants2.LINE_FEED ||
          charCodeAtResult1 === constants2.TAB ||
          charCodeAtResult1 === constants2.CARRIAGE_RETURN ||
          charCodeAtResult1 === constants2.FORM_FEED;
        num3 = sum;
        num = sum;
        if (!tmp7) {
          break;
        }
      }
    }
    tmp3 =
      charCodeAtResult === constants2.SPACE ||
      charCodeAtResult === constants2.LINE_FEED ||
      charCodeAtResult === constants2.TAB ||
      charCodeAtResult === constants2.CARRIAGE_RETURN ||
      charCodeAtResult === constants2.FORM_FEED;
  }
  return num;
}
function findTextEnd(text) {
  let num = textStart;
  if (textStart === undefined) {
    num = 0;
  }
  let tmp = length;
  if (text.length > num) {
    const charCodeAtResult = text.charCodeAt(length - 1);
    let tmp3 = length;
    tmp = length;
    if (tmp2) {
      const diff = tmp3 - 1;
      tmp = diff;
      while (diff > num) {
        let charCodeAtResult1 = text.charCodeAt(diff - 1);
        let tmp7 =
          charCodeAtResult1 === constants2.SPACE ||
          charCodeAtResult1 === constants2.LINE_FEED ||
          charCodeAtResult1 === constants2.TAB ||
          charCodeAtResult1 === constants2.CARRIAGE_RETURN ||
          charCodeAtResult1 === constants2.FORM_FEED;
        tmp3 = diff;
        tmp = diff;
        if (!tmp7) {
          break;
        }
      }
    }
    tmp2 =
      charCodeAtResult === constants2.SPACE ||
      charCodeAtResult === constants2.LINE_FEED ||
      charCodeAtResult === constants2.TAB ||
      charCodeAtResult === constants2.CARRIAGE_RETURN ||
      charCodeAtResult === constants2.FORM_FEED;
  }
  return tmp;
}
function collapseBlankLines(arr, trailingNewlines) {
  let tmp = trailingNewlines;
  let index = arr.indexOf("\n");
  let str = "";
  let num = 0;
  let num2 = 0;
  let str2 = "";
  let num3 = -1;
  if (-1 !== index) {
    while (true) {
      let sum = num3 + 1;
      let tmp8 = sum;
      let flag = true;
      let tmp4 = index;
      if (sum < index) {
        while (true) {
          let charCodeAtResult = arr.charCodeAt(tmp8);
          let tmp11 = charCodeAtResult === constants2.SPACE;
          if (!tmp11) {
            tmp11 = charCodeAtResult === constants2.TAB;
          }
          if (!tmp11) {
            tmp11 = charCodeAtResult === constants2.FORM_FEED;
          }
          flag = false;
          if (!tmp11) {
            break;
          } else {
            let sum1 = tmp8 + 1;
            tmp8 = sum1;
            flag = true;
            if (sum1 >= index) {
              break;
            }
          }
        }
      }
      if (tmp > 0) {
        if (flag) {
          let sum2 = str + arr.slice(num, sum);
          let text = sum2;
          if (tmp < constants.PARAGRAPH) {
            text = `${tmp17}
  `;
          }
          let sum3 = index + 1;
          let LINE = tmp + 1;
          let tmp16 = text;
          index = arr.indexOf("\n", index + 1);
          tmp = LINE;
          num = sum3;
          str = tmp16;
          num3 = tmp4;
          num2 = sum3;
          str2 = tmp16;
          if (-1 === index) {
            break;
          }
        }
      }
      LINE = constants.LINE;
      sum3 = num;
      tmp16 = str;
    }
  }
  let sum4 = arr;
  if (0 !== num2) {
    sum4 = str2 + arr.slice(num2);
  }
  return sum4;
}
function trimTrailingLineIndentation(runs) {
  if (runs.length > 0) {
    while (true) {
      let tmp = runs[runs.length - 1];
      let length = tmp.text.length;
      let tmp2 = length;
      if (length > 0) {
        let text2 = tmp.text;
        let charCodeAtResult = text2.charCodeAt(length - 1);
        let tmp3 =
          charCodeAtResult === constants2.SPACE ||
          charCodeAtResult === constants2.TAB ||
          charCodeAtResult === constants2.FORM_FEED;
        let tmp4 = length;
        tmp2 = length;
        if (tmp3) {
          let diff = tmp4 - 1;
          tmp2 = diff;
          while (diff > 0) {
            let text = tmp.text;
            let charCodeAtResult1 = text.charCodeAt(diff - 1);
            let tmp8 =
              charCodeAtResult1 === constants2.SPACE ||
              charCodeAtResult1 === constants2.TAB ||
              charCodeAtResult1 === constants2.FORM_FEED;
            tmp4 = diff;
            tmp2 = diff;
            if (!tmp8) {
              break;
            }
          }
        }
      }
      if (tmp2 === tmp.text.length) {
        break;
      } else {
        if (0 !== tmp2) {
          let text1 = tmp.text;
          tmp.text = text1.slice(0, tmp2);
          break;
        } else {
          let arr = runs.pop();
          if (runs.length > 0) {
            continue;
          } else {
            break;
          }
          break;
        }
        break;
      }
    }
  }
}
function appendRun(trailingNewlines, text) {
  let tmp = item10025;
  if (item10025 === undefined) {
    tmp = React6;
  }
  const index = text.indexOf("\n");
  if (trailingNewlines.trailingNewlines > 0) {
    if (-1 !== index) {
      let num3 = 0;
      let flag = true;
      if (0 < index) {
        while (true) {
          let charCodeAtResult = text.charCodeAt(num3);
          let tmp5 = charCodeAtResult === constants2.SPACE;
          if (!tmp5) {
            tmp5 = charCodeAtResult === constants2.TAB;
          }
          if (!tmp5) {
            tmp5 = charCodeAtResult === constants2.FORM_FEED;
          }
          flag = false;
          if (!tmp5) {
            break;
          } else {
            let sum = num3 + 1;
            num3 = sum;
            flag = true;
            if (sum >= index) {
              break;
            }
          }
        }
      }
      if (flag) {
        trimTrailingLineIndentation(trailingNewlines.runs);
      }
    }
  }
  const arr = collapseBlankLines(text, trailingNewlines.trailingNewlines);
  let substr = arr;
  if (0 === trailingNewlines.runs.length) {
    substr = arr.slice(findTextStart(arr));
  }
  if (0 !== substr.length) {
    if (null != trailingNewlines.runs[trailingNewlines.runs.length - 1]) {
      if (tmp26.bold === tmp.bold) {
        if (tmp26.italic === tmp.italic) {
          if (tmp26.underline === tmp.underline) {
            if (tmp26.heading === tmp.heading) {
              if (tmp26.link === tmp.link) {
                tmp26.text = tmp26.text + substr;
              }
              let diff = substr.length - 1;
              let num4 = 0;
              let num5 = 0;
              if (0 <= diff) {
                while (true) {
                  if (substr.charCodeAt(diff) === constants2.LINE_FEED) {
                    let sum1 = num4 + 1;
                  } else {
                    let charCodeAtResult1 = substr.charCodeAt(diff);
                    let tmp20 =
                      charCodeAtResult1 === constants2.SPACE ||
                      charCodeAtResult1 === constants2.TAB ||
                      charCodeAtResult1 === constants2.FORM_FEED;
                    sum1 = num4;
                    num5 = num4;
                    if (!tmp20) {
                      break;
                    }
                  }
                  diff = diff - 1;
                  num4 = sum1;
                  num5 = sum1;
                }
              }
              let bound = num5;
              if (findTextStart(substr) === substr.length) {
                const _Math = Math;
                bound = Math.min(constants.PARAGRAPH, trailingNewlines.trailingNewlines + num5);
              }
              trailingNewlines.trailingNewlines = bound;
            }
          }
        }
      }
    }
    const runs = trailingNewlines.runs;
    const obj = {};
    const merged = Object.assign(tmp);
    obj.text = substr;
    runs.push(obj);
  }
}
function flushSpacing(pendingBreaks) {
  if (0 === pendingBreaks.pendingBreaks) {
    const held = pendingBreaks.held;
    for (const item10025 of held) {
      let tmp9 = appendRun(arg0, item10025.text, item10025);
      continue;
    }
  } else if (pendingBreaks.runs.length > 0) {
    if (pendingBreaks.trailingNewlines > 0) {
      trimTrailingLineIndentation(pendingBreaks.runs);
    }
    const repeat = "\n".repeat;
    const _Math = Math;
    appendRun(pendingBreaks, "\n".repeat(Math.max(0, pendingBreaks.pendingBreaks - pendingBreaks.trailingNewlines)));
  }
  pendingBreaks.held = [];
  pendingBreaks.pendingBreaks = 0;
}
function appendText(atBoundary, substr) {
  let num = 0;
  if (atBoundary.atBoundary) {
    num = findTextStart(substr);
  }
  const tmp2 = findTextEnd(substr, num);
  let tmp4 = atBoundary.styles.bold > 0;
  if (!tmp4) {
    tmp4 = null != atBoundary.heading;
  }
  const obj = { bold: tmp4, italic: atBoundary.styles.italic > 0, underline: atBoundary.styles.underline > 0 };
  if (null != atBoundary.heading) {
    const obj2 = { heading: atBoundary.heading };
    let obj3 = obj2;
  } else {
    obj3 = {};
  }
  const merged = Object.assign(obj3);
  if (null != atBoundary.links[atBoundary.links.length - 1]) {
    const obj4 = { link: tmp3 };
    let obj5 = obj4;
  } else {
    obj5 = {};
  }
  const merged1 = Object.assign(obj5);
  if (tmp2 > num) {
    flushSpacing(atBoundary);
    appendRun(atBoundary, substr.slice(num, tmp2), obj);
    atBoundary.afterMarker = false;
    atBoundary.atBoundary = false;
  }
  if (tmp2 < substr.length) {
    const held = atBoundary.held;
    const obj6 = {};
    const merged2 = Object.assign(obj);
    obj6.text = substr.slice(tmp2);
    held.push(obj6);
  }
}
({
  BARE_UNKNOWN_TAG: c2,
  BLOCK_BREAKS: c3,
  BULLET: closure_4,
  DEFAULT_MAX_HTML_LENGTH: hasOwnProperty,
  HIGH_SURROGATE: metroRequire,
  HTML_WHITESPACE_CODES: closure_7,
  KNOWN_UNSUPPORTED_HTML_TAGS: closure_8,
  PLAIN_STYLE: closure_9,
  SLASH_PREFIXED_MARKER: c10,
  SLASH_SEPARATED_UNKNOWN_TAG: closure_11,
  TAG_BEHAVIORS: closure_12,
  TAG_NAME: map1,
  VOID_HTML_TAGS: closure_14,
} = HTMLParserConstants);
let result = size.fileFinishedImporting("modules/html_parser/index.tsx");

export const DEFAULT_MAX_HTML_LENGTH = HTMLParserConstants.DEFAULT_MAX_HTML_LENGTH;
export function parseHTMLFromText(summaryLocalized) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let maxLength = obj.maxLength;
  if (maxLength === undefined) {
    maxLength = closure_5;
  }
  if (!summaryLocalized.includes("<")) {
    if (!summaryLocalized.includes("&")) {
      let replaced = summaryLocalized;
      if (summaryLocalized.includes("\r")) {
        replaced = summaryLocalized.replace(/\r\n?/g, "\n");
      }
      const tmpResult = collapseBlankLines(replaced, 0);
      const tmp4 = findTextStart(tmpResult);
      const tmp6 = findTextEnd(tmpResult, tmp4);
      if (tmp6 > tmp4) {
        let obj2 = { text: tmpResult.slice(tmp4, tmp6) };
        let merged = Object.assign(closure_9);
        let items = [obj2];
        let items1 = items;
      } else {
        items1 = [];
      }
      return items1;
    }
  }
  const bound = Math.max(0, Math.floor(maxLength));
  let diff = bound;
  if (regex2.test(summaryLocalized.charAt(bound - 1))) {
    diff = bound - 1;
  }
  const str4 = summaryLocalized.slice(0, diff);
  let replaced1 = str4;
  if (str4.includes("\r")) {
    replaced1 = str4.replace(/\r\n?/g, "\n");
  }
  let obj3 = {
    markup: replaced1,
    runs: [],
    styles: { bold: 0, italic: 0, underline: 0 },
    links: [],
    lists: [],
    itemDepth: 0,
    hiddenDepth: 0,
    ending: false,
    held: [],
    pendingBreaks: 0,
    atBoundary: true,
    afterMarker: false,
    trailingNewlines: 0,
  };
  const Parser = obj3(9371).Parser;
  const fn = () => HermesBuiltin.applyArguments(new.target, new.target);
  class fn extends Parser {
    onclosetag(arg0, arg1) {
      tmp = closure_0;
      markup = closure_0.markup;
      str = markup.slice(summaryLocalized, arg1);
      str2 = str.toLowerCase();
      closure_1 = undefined;
      onclosetagResult = super.onclosetag(summaryLocalized, arg1);
      replaced = str2.replace(/\/+$/, "");
      if (closure_0.hiddenDepth <= 0) {
        tmp10 = closure_1;
        if (closure_1 !== str2) {
          tmp4 = TAG_BEHAVIORS;
          if (!TAG_BEHAVIORS.has(replaced)) {
            tmp5 = VOID_HTML_TAGS;
            if (!VOID_HTML_TAGS.has(replaced)) {
              tmp6 = closure_8;
              if (!closure_8.has(replaced)) {
                markup1 = tmp.markup;
                str3 = ">";
                index = markup1.indexOf(">", arg1);
                num = -1;
                if (-1 !== index) {
                  tmp8 = appendText;
                  markup2 = tmp.markup;
                  num2 = 1;
                  tmp9 = appendText(tmp, markup2.slice(this.startIndex, index + 1));
                }
              }
            }
          }
        }
      }
      return;
    }
  }
  closure_3 = fn.prototype;
  const fn1 = new fn(
    {
      onopentagname() {
        obj3.unfinishedTag = fn1.startIndex;
      },
      onopentag(br, attribs) {
        obj3.unfinishedTag = undefined;
        value = __initData.get(br);
        if (obj3.hiddenDepth <= 0) {
          let hidden;
          if (value != null) {
            hidden = value.hidden;
          }
          if (true !== hidden) {
            if (null != value) {
              let LINE = value.breaks;
              if (null != LINE) {
                if (!tmp.afterMarker) {
                  if (tmp.itemDepth > 0) {
                    LINE = constants.LINE;
                  }
                  tmp.pendingBreaks = Math.max(tmp.pendingBreaks, LINE);
                }
                tmp.atBoundary = true;
              }
              if (null != value.style) {
                const styles = tmp.styles;
                const style = value.style;
                styles[style] = styles[style] + 1;
              }
              if (true === value.link) {
                const links = tmp.links;
                links.push(
                  (function getLink(href) {
                    if (null != href) {
                      try {
                        const _URL = URL;
                        const uRL = new URL(href);
                        const items = ["http:", "https:", "mailto:"];
                        href = undefined;
                        if (items.includes(uRL.protocol)) {
                          href = uRL.href;
                        }
                        return href;
                      } catch (err) {
                        return tmp;
                      }
                    }
                  })(attribs.href),
                );
              }
              if (null != value.heading) {
                tmp.heading = value.heading;
              }
              if (null != value.list) {
                const lists = tmp.lists;
                const obj2 = { ordered: "ordered" === value.list, index: 0 };
                lists.push(obj2);
              }
              if (true !== value.lineBreak) {
                if (true === value.item) {
                  flushSpacing(tmp);
                  let ordered;
                  if (tmp.lists[tmp.lists.length - 1] != null) {
                    ordered = tmp58.ordered;
                  }
                  if (true === ordered) {
                    const sum = tmp58.index + 1;
                    tmp58.index = sum;
                    let text = `${tmp48}. `;
                  } else {
                    text = React4;
                  }
                  appendRun(tmp, text);
                  tmp.itemDepth = tmp.itemDepth + 1;
                  tmp.afterMarker = true;
                }
              } else {
                flushSpacing(tmp);
                if (null == tmp.heading) {
                  tmp55(tmp, "\n", React6);
                  tmp.atBoundary = true;
                  tmp.afterMarker = false;
                }
                obj3 = {
                  bold: tmp.styles.bold > 0 || null != tmp.heading,
                  italic: tmp.styles.italic > 0,
                  underline: tmp.styles.underline > 0,
                };
                if (null != tmp.heading) {
                  const obj4 = { heading: tmp.heading };
                  let obj5 = obj4;
                } else {
                  obj5 = {};
                }
                const merged = Object.assign(obj5);
                if (null != tmp.links[tmp.links.length - 1]) {
                  const obj6 = { link: tmp36 };
                  let obj7 = obj6;
                } else {
                  obj7 = {};
                }
                const merged1 = Object.assign(obj7);
                const tmp37 = tmp.styles.bold > 0 || null != tmp.heading;
              }
            } else {
              const markup1 = tmp.markup;
              const substr = markup1.slice(fn1.startIndex, fn1.endIndex + 1);
              let isMatch = regex5.test(br);
              if (isMatch) {
                const isMatch1 = regex.test(substr);
                let hasItem = !isMatch1;
                if (!isMatch1) {
                  hasItem = !regex4.test(substr);
                }
                if (!hasItem) {
                  hasItem = set2.has(br);
                }
                if (!hasItem) {
                  hasItem = set.has(br);
                }
                if (!hasItem) {
                  if (tmp.closingTags != null) {
                    const closingTags = tmp.closingTags;
                    let num = closingTags.get(br);
                    if (num == null) {
                      num = -1;
                    }
                    hasItem = num > tmp11;
                  } else {
                    const markup2 = tmp.markup;
                    if (markup2.includes("</")) {
                      const markup = tmp.markup;
                      const _Map2 = Map;
                      const map = new Map();
                      const obj = {
                        onclosetag(arg0) {
                          const startIndex = parser.startIndex;
                          const formatted = markup.slice(startIndex, startIndex + arg0.length + 2).toLowerCase();
                          if (formatted === "</" + arg0) {
                            const result = map.set(arg0, startIndex);
                          }
                          const str = markup.slice(startIndex, startIndex + arg0.length + 2);
                        },
                      };
                      const parser = new _mod9371.Parser(obj, { decodeEntities: true, recognizeSelfClosing: true });
                      parser.end(markup);
                      map1 = map;
                    } else {
                      const _Map = Map;
                      map1 = new Map();
                    }
                    tmp.closingTags = map1;
                  }
                }
                isMatch = hasItem;
              }
              if (!isMatch) {
                appendText(tmp, substr);
              }
            }
          }
        }
        obj3.hiddenDepth = obj3.hiddenDepth + 1;
      },
      onclosetag(arg0, arg1) {
        if (!arg1) {
          closure_1 = arg0;
        }
        if (!obj3.ending) {
          if (obj3.hiddenDepth > 0) {
            obj3.hiddenDepth = obj3.hiddenDepth - 1;
          } else {
            value = __initData.get(arg0);
            if (null != value) {
              let LINE = value.breaks;
              if (null != LINE) {
                {
                  if (obj3.itemDepth > 0) {
                    LINE = constants.LINE;
                  }
                  obj3.pendingBreaks = Math.max(obj3.pendingBreaks, LINE);
                }
                obj3.atBoundary = true;
                obj3.afterMarker = false;
              }
              if (null != value.style) {
                const styles = obj3.styles;
                const style = value.style;
                styles[style] = styles[style] - 1;
              }
              if (true === value.link) {
                const links = obj3.links;
                links.pop();
              }
              if (null != value.heading) {
                obj3.heading = undefined;
              }
              if (null != value.list) {
                const lists = obj3.lists;
                lists.pop();
              }
              if (true === value.item) {
                obj3.itemDepth = obj3.itemDepth - 1;
              }
            }
          }
        }
      },
      oncomment() {
        const markup = obj3.markup;
        const substr = markup.slice(fn1.startIndex, fn1.endIndex + 1);
        let isMatch = 0 === obj3.hiddenDepth;
        if (isMatch) {
          isMatch = regex3.test(substr);
        }
        if (isMatch) {
          appendText(obj3, substr);
        }
      },
      ontext(substr) {
        if (0 === obj3.hiddenDepth) {
          appendText(tmp, substr);
        }
      },
    },
    { decodeEntities: true, recognizeSelfClosing: true },
  );
  fn1.write(obj3.markup);
  obj3.ending = true;
  fn1.end();
  closure_129_0 = obj3;
  ({ markup, unfinishedTag } = obj3);
  if (unfinishedTag == null) {
    unfinishedTag = fn1.startIndex;
  }
  const str6 = markup.slice(unfinishedTag);
  let isMatch = "" === str6;
  if (!isMatch) {
    isMatch = /^<\/?br\/?$/i.test(str6);
    let obj6 = /^<\/?br\/?$/i;
  }
  if (!isMatch) {
    let obj5 = {
      ontext(substr) {
        appendText(obj3, substr);
      },
    };
    let parser = new obj3(9371).Parser(obj5, { decodeEntities: true });
    parser.end(str6.replace(/</g, "&lt;"));
  }
  const runs = obj3.runs;
  if (runs.length > 0) {
    let text = tmp23.text;
    runs[runs.length - 1].text = text.slice(0, findTextEnd(runs[runs.length - 1].text));
    while (runs[runs.length - 1].text.length <= 0) {
      let arr = runs.pop();
      if (runs.length <= 0) {
        break;
      }
    }
  }
  return runs;
}
