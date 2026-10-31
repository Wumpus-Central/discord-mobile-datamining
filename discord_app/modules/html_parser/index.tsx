// discord_app/modules/html_parser/index.tsx
import _mod9406 from "../../../_runtime/metro/09406__.js";
import HTMLParserRunUtils from "HTMLParserRunUtils.tsx";
import HTMLParserLinkUtils from "HTMLParserLinkUtils.tsx";
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
function getBreakStyle(spacingLink) {
  if (null != spacingLink) {
    const obj = {};
    const merged = Object.assign(React7);
    obj.link = spacingLink;
    let tmp = obj;
  } else {
    tmp = React7;
  }
  return tmp;
}
function appendRun(trailingNewlines, repeatResult) {
  let tmp = breakStyle;
  if (breakStyle === undefined) {
    tmp = React7;
  }
  const index = repeatResult.indexOf("\n");
  if (trailingNewlines.trailingNewlines > 0) {
    if (-1 !== index) {
      let num3 = 0;
      let flag = true;
      if (0 < index) {
        while (true) {
          let charCodeAtResult = repeatResult.charCodeAt(num3);
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
  const arr = collapseBlankLines(repeatResult, trailingNewlines.trailingNewlines);
  let substr = arr;
  if (0 === trailingNewlines.runs.length) {
    substr = arr.slice(findTextStart(arr));
  }
  if (0 !== substr.length) {
    HTMLParserRunUtils.mergeRun(trailingNewlines.runs, substr, tmp);
    let diff = substr.length - 1;
    let num5 = 0;
    let num4 = 0;
    if (0 <= diff) {
      while (true) {
        if (substr.charCodeAt(diff) === constants2.LINE_FEED) {
          let sum1 = num5 + 1;
        } else {
          let charCodeAtResult1 = substr.charCodeAt(diff);
          let tmp15 =
            charCodeAtResult1 === constants2.SPACE ||
            charCodeAtResult1 === constants2.TAB ||
            charCodeAtResult1 === constants2.FORM_FEED;
          sum1 = num5;
          num4 = num5;
          if (!tmp15) {
            break;
          }
        }
        diff = diff - 1;
        num5 = sum1;
        num4 = sum1;
      }
    }
    let bound = num4;
    if (findTextStart(substr) === substr.length) {
      const _Math = Math;
      bound = Math.min(constants.PARAGRAPH, trailingNewlines.trailingNewlines + num4);
    }
    trailingNewlines.trailingNewlines = bound;
  }
}
function flushSpacing(pendingBreaks) {
  if (0 === pendingBreaks.pendingBreaks) {
    const held = pendingBreaks.held;
    for (const item10026 of held) {
      let tmp11 = appendRun(arg0, item10026.text, item10026);
      continue;
    }
  } else if (pendingBreaks.runs.length > 0) {
    if (pendingBreaks.trailingNewlines > 0) {
      trimTrailingLineIndentation(pendingBreaks.runs);
    }
    const repeat = "\n".repeat;
    const _Math = Math;
    appendRun(
      pendingBreaks,
      "\n".repeat(Math.max(0, pendingBreaks.pendingBreaks - pendingBreaks.trailingNewlines)),
      getBreakStyle(pendingBreaks.spacingLink),
    );
    const repeatResult = "\n".repeat(Math.max(0, pendingBreaks.pendingBreaks - pendingBreaks.trailingNewlines));
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
    atBoundary.spacingLink = obj.link;
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
function parseMarkupRuns(markup, keepInvalidAnchors) {
  let obj = {
    markup,
    keepInvalidAnchors: null,
    runs: null,
    styles: null,
    links: null,
    lists: null,
    itemDepth: 0,
    hiddenDepth: 0,
    ending: false,
    held: null,
    pendingBreaks: 0,
    atBoundary: true,
    afterMarker: false,
    trailingNewlines: 0,
  };
  keepInvalidAnchors = undefined;
  if (keepInvalidAnchors != null) {
    keepInvalidAnchors = keepInvalidAnchors.keepInvalidAnchors;
  }
  obj.keepInvalidAnchors = true === keepInvalidAnchors;
  obj.runs = [];
  obj.styles = { bold: 0, italic: 0, underline: 0 };
  obj.links = [];
  obj.lists = [];
  obj.held = [];
  const Parser = obj(9406).Parser;
  const fn = () => HermesBuiltin.applyArguments(new.target, new.target);
  class fn extends Parser {
    onclosetag(arg0, arg1) {
      tmp = closure_0;
      markup = closure_0.markup;
      str = markup.slice(markup, keepInvalidAnchors);
      str2 = str.toLowerCase();
      closure_1 = undefined;
      onclosetagResult = super.onclosetag(markup, keepInvalidAnchors);
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
                index = markup1.indexOf(">", keepInvalidAnchors);
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
        obj.unfinishedTag = fn1.startIndex;
      },
      onopentag(br, attribs) {
        obj.unfinishedTag = undefined;
        value = closure_2_12.get(br);
        if (obj.hiddenDepth <= 0) {
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
                let link = HTMLParserLinkUtils.getLink(attribs.href);
                if (link == null) {
                  let str;
                  if (tmp.keepInvalidAnchors) {
                    str = "";
                  }
                  link = str;
                }
                links.push(link);
                tmp.spacingLink = undefined;
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
                    ordered = tmp66.ordered;
                  }
                  if (true === ordered) {
                    const sum = tmp66.index + 1;
                    tmp66.index = sum;
                    let text = `${tmp56}. `;
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
                  if (null != tmp.links[tmp.links.length - 1]) {
                    const obj4 = {};
                    const merged = Object.assign(React7);
                    obj4.link = tmp39;
                    let tmp40 = obj4;
                  } else {
                    tmp40 = React7;
                  }
                  tmp63(tmp, "\n", tmp40);
                  tmp.atBoundary = true;
                  tmp.afterMarker = false;
                }
                const obj5 = {
                  bold: tmp.styles.bold > 0 || null != tmp.heading,
                  italic: tmp.styles.italic > 0,
                  underline: tmp.styles.underline > 0,
                };
                if (null != tmp.heading) {
                  const obj6 = { heading: tmp.heading };
                  let obj7 = obj6;
                } else {
                  obj7 = {};
                }
                const merged1 = Object.assign(obj7);
                if (null != tmp.links[tmp.links.length - 1]) {
                  const obj8 = { link: tmp44 };
                  let obj9 = obj8;
                } else {
                  obj9 = {};
                }
                const merged2 = Object.assign(obj9);
                const tmp45 = tmp.styles.bold > 0 || null != tmp.heading;
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
                      markup = tmp.markup;
                      const _Map2 = Map;
                      const map = new Map();
                      obj = {
                        onclosetag(arg0) {
                          const startIndex = parser.startIndex;
                          const formatted = markup.slice(startIndex, startIndex + arg0.length + 2).toLowerCase();
                          if (formatted === "</" + arg0) {
                            const result = map.set(arg0, startIndex);
                          }
                          const str = markup.slice(startIndex, startIndex + arg0.length + 2);
                        },
                      };
                      const parser = new _mod9406.Parser(obj, { decodeEntities: true, recognizeSelfClosing: true });
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
        obj.hiddenDepth = obj.hiddenDepth + 1;
      },
      onclosetag(arg0, arg1) {
        if (!arg1) {
          closure_1 = arg0;
        }
        if (!obj.ending) {
          if (obj.hiddenDepth > 0) {
            obj.hiddenDepth = obj.hiddenDepth - 1;
          } else {
            value = closure_2_12.get(arg0);
            if (null != value) {
              let LINE = value.breaks;
              if (null != LINE) {
                {
                  if (obj.itemDepth > 0) {
                    LINE = constants.LINE;
                  }
                  obj.pendingBreaks = Math.max(obj.pendingBreaks, LINE);
                }
                obj.atBoundary = true;
                obj.afterMarker = false;
              }
              if (null != value.style) {
                const styles = obj.styles;
                const style = value.style;
                styles[style] = styles[style] - 1;
              }
              if (true === value.link) {
                const links = obj.links;
                links.pop();
                obj.spacingLink = undefined;
              }
              if (null != value.heading) {
                obj.heading = undefined;
              }
              if (null != value.list) {
                const lists = obj.lists;
                lists.pop();
              }
              if (true === value.item) {
                obj.itemDepth = obj.itemDepth - 1;
              }
            }
          }
        }
      },
      oncomment() {
        markup = obj.markup;
        const substr = markup.slice(fn1.startIndex, fn1.endIndex + 1);
        let isMatch = 0 === obj.hiddenDepth;
        if (isMatch) {
          isMatch = regex3.test(substr);
        }
        if (isMatch) {
          appendText(obj, substr);
        }
      },
      ontext(substr) {
        if (0 === obj.hiddenDepth) {
          appendText(tmp, substr);
        }
      },
    },
    { decodeEntities: true, recognizeSelfClosing: true },
  );
  fn1.write(markup);
  obj.ending = true;
  fn1.end();
  closure_129_0 = obj;
  ({ markup, unfinishedTag } = obj);
  if (unfinishedTag == null) {
    unfinishedTag = fn1.startIndex;
  }
  let str = markup.slice(unfinishedTag);
  let isMatch = "" === str;
  if (!isMatch) {
    isMatch = /^<\/?br\/?$/i.test(str);
    let obj4 = /^<\/?br\/?$/i;
  }
  if (!isMatch) {
    let obj3 = {
      ontext(substr) {
        appendText(obj, substr);
      },
    };
    let parser = new obj(9406).Parser(obj3, { decodeEntities: true });
    parser.end(str.replace(/</g, "&lt;"));
  }
  const runs = obj.runs;
  if (runs.length > 0) {
    let text = tmp12.text;
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
export function parseHTMLFromText(arr, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let maxLength = obj.maxLength;
  if (maxLength === undefined) {
    maxLength = hasOwnProperty;
  }
  let flag = obj.parseTextLinks;
  if (flag === undefined) {
    flag = false;
  }
  let hasItem = arr.includes("<");
  if (!hasItem) {
    hasItem = arr.includes("&");
  }
  if (flag) {
    const _Math3 = Math;
    const _Math4 = Math;
    const bound = Math.max(0, Math.floor(maxLength));
    let diff = bound;
    if (regex2.test(arr.charAt(bound - 1))) {
      diff = bound - 1;
    }
    const str7 = arr.slice(0, diff);
    let str9 = str7;
    if (str7.includes("\r")) {
      str9 = str7.replace(/\r\n?/g, "\n");
    }
    if (hasItem) {
      let items1 = parseMarkupRuns(str9, { keepInvalidAnchors: true });
    } else {
      let replaced = str9;
      if (str9.includes("\r")) {
        replaced = str9.replace(/\r\n?/g, "\n");
      }
      const tmp21Result = collapseBlankLines(replaced, 0);
      const tmp24 = findTextStart(tmp21Result);
      const tmp26 = findTextEnd(tmp21Result, tmp24);
      if (tmp26 > tmp24) {
        const obj2 = { text: tmp21Result.slice(tmp24, tmp26) };
        const merged = Object.assign(React7);
        const items = [obj2];
        items1 = items;
      } else {
        items1 = [];
      }
    }
    return HTMLParserLinkUtils.addTextLinks(items1);
  } else {
    if (hasItem) {
      const _Math = Math;
      const _Math2 = Math;
      const bound1 = Math.max(0, Math.floor(maxLength));
      let diff1 = bound1;
      if (regex2.test(arr.charAt(bound1 - 1))) {
        diff1 = bound1 - 1;
      }
      const str4 = arr.slice(0, diff1);
      let replaced1 = str4;
      if (str4.includes("\r")) {
        replaced1 = str4.replace(/\r\n?/g, "\n");
      }
      let items3 = parseMarkupRuns(replaced1);
    } else {
      let replaced2 = arr;
      if (arr.includes("\r")) {
        replaced2 = arr.replace(/\r\n?/g, "\n");
      }
      const tmp2Result = collapseBlankLines(replaced2, 0);
      const tmp5 = findTextStart(tmp2Result);
      const tmp7 = findTextEnd(tmp2Result, tmp5);
      if (tmp7 > tmp5) {
        const obj3 = { text: tmp2Result.slice(tmp5, tmp7) };
        const merged1 = Object.assign(React7);
        const items2 = [obj3];
        items3 = items2;
      } else {
        items3 = [];
      }
    }
    return items3;
  }
}
