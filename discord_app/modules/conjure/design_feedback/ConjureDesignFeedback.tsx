// === Module 16544: ConjureDesignFeedback ===

// Module 16544 (ConjureDesignFeedback)
import size from "module_2" /* 2 */;

function labelConjureDesignTarget(target) {
  const str = target.name;
  const trimmed = str.trim();
  let tmp2 = "Label";
  switch (target.role) {
    case "button":
    {
      let obj;
      tmp2 = "Button";
      if (null == `Button`) {
        let obj3;
        if ("" === trimmed) {
          let tag;
          if ("" !== target.role) {
            tag = target.role;
          } else {
            tag = target.tag;
          }
          obj3 = { kind: tag, name: "" };
          const obj2 = { kind: tag, name: "" };
        } else {
          obj3 = { kind: "", name: trimmed };
        }
        obj = obj3;
      } else {
        obj = { kind: tmp2, name: trimmed };
      }
      return obj;
    }
    case "link":
    {
      tmp2 = "Link";
      break;
    }
    case "heading":
    {
      tmp2 = "Heading";
      break;
    }
    case "textbox":
    {
      tmp2 = "Input";
      break;
    }
    case "checkbox":
    {
      tmp2 = "Checkbox";
      break;
    }
    case "radio":
    {
      tmp2 = "Radio";
      break;
    }
    case "combobox":
    {
      tmp2 = "Dropdown";
      break;
    }
    case "slider":
    {
      tmp2 = "Slider";
      break;
    }
    case "switch":
    {
      tmp2 = "Toggle";
      break;
    }
    case "img":
    {
      tmp2 = "Image";
      break;
    }
    case "list":
    {
      tmp2 = "List";
      break;
    }
    case "listitem":
    {
      tmp2 = "List item";
      break;
    }
    case "tab":
    {
      tmp2 = "Tab";
      break;
    }
    case "menuitem":
    {
      tmp2 = "Menu item";
      break;
    }
    case "dialog":
    {
      tmp2 = "Dialog";
      break;
    }
    case "progressbar":
    {
      tmp2 = "Progress bar";
      break;
    }
    case "separator":
    {
      tmp2 = "Divider";
      break;
    }
    case "label":
    {
      break;
    }
    default:
    {
      tmp2 = "Container";
      switch (target.tag) {
        case "img":
        {
          tmp2 = "Image";
          break;
        }
        case "picture":
        {
          tmp2 = "Image";
          break;
        }
        case "svg":
        {
          tmp2 = "Icon";
          break;
        }
        case "video":
        {
          tmp2 = "Video";
          break;
        }
        case "canvas":
        {
          tmp2 = "Canvas";
          break;
        }
        case "p":
        {
          tmp2 = "Text";
          break;
        }
        case "span":
        {
          tmp2 = "Text";
          break;
        }
        case "strong":
        {
          tmp2 = "Text";
          break;
        }
        case "em":
        {
          tmp2 = "Text";
          break;
        }
        case "small":
        {
          tmp2 = "Text";
          break;
        }
        case "blockquote":
        {
          tmp2 = "Text";
          break;
        }
        case "code":
        {
          tmp2 = "Text";
          break;
        }
        case "li":
        {
          tmp2 = "Text";
          break;
        }
        case "form":
        {
          tmp2 = "Form";
          break;
        }
        case "ul":
        {
          tmp2 = "List";
          break;
        }
        case "ol":
        {
          tmp2 = "List";
          break;
        }
        case "table":
        {
          tmp2 = "Table";
          break;
        }
        case "header":
        {
          tmp2 = "Header";
          break;
        }
        case "footer":
        {
          tmp2 = "Footer";
          break;
        }
        case "nav":
        {
          tmp2 = "Navigation";
          break;
        }
        case "section":
        {
          tmp2 = "Section";
          break;
        }
        case "article":
        {
          tmp2 = "Section";
          break;
        }
        case "main":
        {
          tmp2 = "Section";
          break;
        }
        case "aside":
        {
          tmp2 = "Section";
          break;
        }
        case "figure":
        {
          tmp2 = "Section";
          break;
        }
        case "div":
        {
          break;
        }
        default:
        {
          tmp2 = null;
          break;
        }
      }
      break;
    }
  }
}
function targetLine(target) {
  const items = ["<" + target.tag + ">"];
  if ("" !== target.role) {
    const _HermesInternal = HermesInternal;
    items.push("role=" + target.role);
  }
  const str2 = target.name;
  const trimmed = str2.trim();
  if ("" !== trimmed) {
    const _HermesInternal2 = HermesInternal;
    items.push("name=\"" + trimmed + "\"");
  }
  const tmp4 = null != target.value && "" !== target.value;
  if (tmp4) {
    const _HermesInternal3 = HermesInternal;
    items.push("value=\"" + target.value + "\"");
  }
  const tmp6 = null != target.path && "" !== target.path;
  if (tmp6) {
    const _HermesInternal4 = HermesInternal;
    items.push("path=\"" + target.path + "\"");
  }
  if (null != target.marker) {
    const _HermesInternal5 = HermesInternal;
    items.push("marker=\"" + target.marker + "\"");
  }
  items.push("at x=" + target.rect.x + " y=" + target.rect.y);
  items.push("size " + target.rect.width + "x" + target.rect.height);
  items.push("ref=" + target.ref);
  return items.join(" ");
}
const frozen = Object.freeze({ x: 0.5, y: 0.5 });
let c1 = 1000;
let c4 = "[vibegrations:selected] ";
const re5 = /^My design feedback: (\d+) comments? on the app\.$/;
const re6 = /^(\d+)\. (.+)$/;
const re7 = /^ {3}Feedback: ?(.*)$/;
const re8 = /^Page: (.+), viewport \d+x\d+\.$/;
const re9 = /^Note for the whole batch: ?(.*)$/;
const re10 = /name="([^"]*)"/;
const re11 = /\brole=(\S+)/;
const re12 = /^<([a-zA-Z0-9-]+)>/;
let result = size.fileFinishedImporting("modules/conjure/design_feedback/ConjureDesignFeedback.tsx");

export const CONJURE_DESIGN_ANCHOR_CENTER = frozen;
export const conjureDesignAnchorFor = function conjureDesignAnchorFor(rect, arg1, arg2) {
  let height;
  let width;
  ({ width, height } = rect.rect);
  if (width >= 1) {
    let point;
    if (height >= 1) {
      point = { x: Math.min(1, Math.max(0, (arg1 - tmp) / width)), y: Math.min(1, Math.max(0, (arg2 - tmp2) / height)) };
      const _Math = Math;
      const _Math2 = Math;
      const _Math3 = Math;
      const _Math4 = Math;
    }
    return point;
  }
  point = frozen;
};
export const CONJURE_DESIGN_COMMENT_MAX = 1000;
export const isConjureDesignCommentUsable = function isConjureDesignCommentUsable(value) {
  return "" !== value.trim();
};
export const hitTestConjureDesignTargets = function hitTestConjureDesignTargets(arg0, arg1, arg2) {
  let width;
  let x;
  let y;
  let tmp = null;
  let num = Infinity;
  const iter = arg0[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let rect = nextResult.rect;
    ({ x, y, width } = rect);
    let height = rect.height;
    if (width >= 1) {
      if (height >= 1) {
        if (arg1 >= x) {
          if (arg2 >= y) {
            if (arg1 <= x + width) {
              if (arg2 <= y + height) {
                let result = width * height;
                if (result < num) {
                  tmp = nextResult;
                  num = result;
                }
              }
            }
          }
        }
      }
    }
    continue;
  }
  return tmp;
};
export { labelConjureDesignTarget };
export const describeConjureDesignTarget = function describeConjureDesignTarget(target) {
  const items = [, ];
  ({ kind: arr[0], name: arr[1] } = labelConjureDesignTarget(target));
  labelConjureDesignTarget(target);
  const found = items.filter((item) => "" !== item);
  return found.join(" ");
};
export const formatConjureDesignRemark = function formatConjureDesignRemark(target, str) {
  const items = [, ];
  ({ kind: arr[0], name: arr[1] } = labelConjureDesignTarget(target));
  labelConjureDesignTarget(target);
  const found = items.filter((item) => "" !== item);
  const joined = found.join(": ");
  const tmp3 = targetLine(target);
  return "" + c4 + joined + " \u2014 " + tmp3 + "\n" + str.trim();
};
export const parseConjureDesignRemark = function parseConjureDesignRemark(content) {
  if (content.startsWith(c4)) {
    const index = content.indexOf("\n");
    let substr = content;
    if (-1 !== index) {
      substr = content.slice(0, index);
    }
    let str3 = "";
    if (-1 !== index) {
      str3 = content.slice(index + 1);
    }
    const substr1 = substr.slice(24);
    const index1 = substr1.indexOf(" \u2014 ");
    let str5 = substr1;
    if (-1 !== index1) {
      str5 = substr1.slice(0, index1);
    }
    const trimmed = str5.trim();
    let tmp6 = null;
    if ("" !== trimmed) {
      tmp6 = { label: trimmed, body: str3 };
      const obj = { label: trimmed, body: str3 };
    }
    return tmp6;
  } else {
    return null;
  }
};
export const formatConjureDesignFeedback = function formatConjureDesignFeedback(arg0) {
  let annotations;
  let context;
  let metaComment;
  ({ annotations, metaComment, context } = arg0);
  const found = annotations.filter((comment) => {
    const str = comment.comment;
    return "" !== str.trim();
  });
  const items = [];
  let str = "1 comment";
  let push = items.push;
  if (1 !== found.length) {
    let _HermesInternal = HermesInternal;
    str = "" + found.length + " comments";
  }
  push("My design feedback: " + str + " on the app.");
  if (null != context) {
    let url;
    const str13 = context.title;
    let trimmed = str13.trim();
    if ("" !== trimmed) {
      const _HermesInternal2 = HermesInternal;
      url = "" + trimmed + " (" + context.url + ")";
    } else {
      url = context.url;
    }
    const _HermesInternal3 = HermesInternal;
    items.push("Page: " + url + ", viewport " + context.viewport.width + "x" + context.viewport.height + ".");
    items.push("Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.");
  }
  const item = found.forEach((target, index) => {
    items.push("");
    const sum = index + 1;
    items.push("" + sum + ". " + targetLine(target.target));
    const push = items.push;
    const str = target.comment;
    const trimmed = str.trim();
    let combined = trimmed;
    if (trimmed.length > c1) {
      const _HermesInternal = HermesInternal;
      combined = "" + trimmed.slice(0, tmp5) + "\u2026";
    }
    push("   Feedback: " + combined);
  });
  const trimmed1 = metaComment.trim();
  if ("" !== trimmed1) {
    items.push("");
    const _HermesInternal4 = HermesInternal;
    items.push("Note for the whole batch: " + trimmed1);
  }
  return items.join("\n");
};
export const parseConjureDesignFeedback = function parseConjureDesignFeedback(raw) {
  let regex;
  let regex2;
  let regex3;
  let trimmed;
  const parts = raw.split("\n");
  let str = parts[0];
  const exec = re5.exec;
  if (str == null) {
    str = "";
  }
  let match = exec(str);
  if (null == match) {
    return null;
  } else {
    let tmp31 = null;
    let tmp16 = null;
    const items = [];
    let tmp9 = null;
    const substr = parts.slice(1);
    for (const item10019 of substr) {
      let match1 = re6.exec(item10019);
      if (null == match1) {
        let match2 = re9.exec(item10019);
        if (null == match2) {
          if (null == tmp9) {
            let match3 = re8.exec(item10019);
            if (null != match3) {
              tmp31 = tmp29[1];
            }
          } else {
            let tmp23;
            let match4 = re7.exec(item10019);
            let comment = tmp9.comment;
            let push = comment.push;
            if (null != match4) {
              tmp23 = tmp21[1];
            } else {
              tmp23 = item10019;
            }
            let arr = push(tmp23);
          }
        } else {
          tmp16 = tmp14[1];
          tmp9 = null;
        }
      } else {
        let obj = { detail: tmp7[2], comment: [] };
        tmp9 = obj;
        let arr2 = items.push(obj);
      }
      continue;
    }
    let tmp32 = null;
    if (0 !== items.length) {
      const _Number = Number;
      tmp32 = null;
      if (items.length === Number(match[1])) {
        let obj2 = {
          count: items.length,
          page: tmp31,
          raw,
          note: trimmed,
          items: items.map((item) => {
                  let comment;
                  let detail;
                  let obj;
                  let str5;
                  ({ detail, comment } = item);
                  const match = regex.exec(detail);
                  let str;
                  if (match != null) {
                    if (match[1] != null) {
                      str = str2.trim();
                    }
                  }
                  if (str == null) {
                    str = "";
                  }
                  const match1 = regex2.exec(detail);
                  let str3;
                  if (match1 != null) {
                    str3 = match1[1];
                  }
                  if (str3 == null) {
                    str3 = "";
                  }
                  const match2 = regex3.exec(detail);
                  let str4;
                  if (match2 != null) {
                    str4 = match2[1];
                  }
                  if (str4 == null) {
                    str4 = "";
                  }
                  if ("" !== str3) {
                    str4 = str3;
                  }
                  if ("" !== str) {
                    obj = { label: str, kind: str4 };
                    const obj2 = { label: str, kind: str4 };
                  } else {
                    let tmp4 = detail;
                    if ("" !== str4) {
                      tmp4 = str4;
                    }
                    obj = { label: tmp4, kind: "" };
                  }
                  const obj3 = { detail, comment: str5.trim() };
                  const merged = Object.assign(obj);
                  str5 = comment.join("\n");
                  return obj3;
                })
        };
        trimmed = null;
        if (null != tmp16) {
          const str2 = "";
          trimmed = null;
          if ("" !== tmp16.trim()) {
            trimmed = tmp16.trim();
          }
        }
        tmp32 = obj2;
      }
    }
    return tmp32;
  }
};