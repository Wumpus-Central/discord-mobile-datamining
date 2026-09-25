// === Module 16214: VibegrationsDesignFeedback ===

// Module 16214 (VibegrationsDesignFeedback)
import size from "module_2" /* 2 */;

function labelVibegrationsDesignTarget(target) {
  let obj = target;
  const trimmed = target.name.trim();
  let tmp2 = "Label";
  switch (target.role) {
    case "button":
      tmp2 = "Button";
      if (null == `Button`) {
        if ("" !== trimmed) {
          const obj2 = { kind: "", name: trimmed };
        }
        if ("" !== obj.role) {
          let tag = obj.role;
        } else {
          tag = obj.tag;
        }
        obj = { kind: tag, name: "" };
      } else {
        const obj3 = { kind: tmp2, name: trimmed };
        return obj3;
      }
    break;
    case "link":
      tmp2 = "Link";
    break;
    case "heading":
      tmp2 = "Heading";
    break;
    case "textbox":
      tmp2 = "Input";
    break;
    case "checkbox":
      tmp2 = "Checkbox";
    break;
    case "radio":
      tmp2 = "Radio";
    break;
    case "combobox":
      tmp2 = "Dropdown";
    break;
    case "slider":
      tmp2 = "Slider";
    break;
    case "switch":
      tmp2 = "Toggle";
    break;
    case "img":
      tmp2 = "Image";
    break;
    case "list":
      tmp2 = "List";
    break;
    case "listitem":
      tmp2 = "List item";
    break;
    case "tab":
      tmp2 = "Tab";
    break;
    case "menuitem":
      tmp2 = "Menu item";
    break;
    case "dialog":
      tmp2 = "Dialog";
    break;
    case "progressbar":
      tmp2 = "Progress bar";
    break;
    case "separator":
      tmp2 = "Divider";
    break;
    case "label":
    break;
    default:
      tmp2 = "Container";
      switch (obj.tag) {
        case "img":
          tmp2 = "Image";
        break;
        case "picture":
          tmp2 = "Image";
        break;
        case "svg":
          tmp2 = "Icon";
        break;
        case "video":
          tmp2 = "Video";
        break;
        case "canvas":
          tmp2 = "Canvas";
        break;
        case "p":
          tmp2 = "Text";
        break;
        case "span":
          tmp2 = "Text";
        break;
        case "strong":
          tmp2 = "Text";
        break;
        case "em":
          tmp2 = "Text";
        break;
        case "small":
          tmp2 = "Text";
        break;
        case "blockquote":
          tmp2 = "Text";
        break;
        case "code":
          tmp2 = "Text";
        break;
        case "li":
          tmp2 = "Text";
        break;
        case "form":
          tmp2 = "Form";
        break;
        case "ul":
          tmp2 = "List";
        break;
        case "ol":
          tmp2 = "List";
        break;
        case "table":
          tmp2 = "Table";
        break;
        case "header":
          tmp2 = "Header";
        break;
        case "footer":
          tmp2 = "Footer";
        break;
        case "nav":
          tmp2 = "Navigation";
        break;
        case "section":
          tmp2 = "Section";
        break;
        case "article":
          tmp2 = "Section";
        break;
        case "main":
          tmp2 = "Section";
        break;
        case "aside":
          tmp2 = "Section";
        break;
        case "figure":
          tmp2 = "Section";
        break;
        case "div":
        break;
        default:
          tmp2 = null;
      }
  }
}
function targetLine(target) {
  const items = ["<" + target.tag + ">"];
  if ("" !== target.role) {
    const _HermesInternal = HermesInternal;
    items.push("role=" + target.role);
  }
  const trimmed = target.name.trim();
  if ("" !== trimmed) {
    const _HermesInternal2 = HermesInternal;
    items.push("name=\"" + trimmed + "\"");
  }
  if (tmp4) {
    const _HermesInternal3 = HermesInternal;
    items.push("value=\"" + target.value + "\"");
  }
  if (tmp6) {
    const _HermesInternal4 = HermesInternal;
    items.push("path=\"" + target.path + "\"");
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
let result = size.fileFinishedImporting("modules/vibegrations/lib/VibegrationsDesignFeedback.tsx");

export const VIBEGRATIONS_DESIGN_ANCHOR_CENTER = frozen;
export const vibegrationsDesignAnchorFor = function vibegrationsDesignAnchorFor(rect, arg1, arg2) {
  ({ width, height } = rect.rect);
  if (width >= 1) {
    if (height >= 1) {
      let point = { x: null, y: null };
      const _Math = Math;
      const _Math2 = Math;
      point.x = Math.min(1, Math.max(0, (arg1 - tmp) / width));
      const _Math3 = Math;
      const _Math4 = Math;
      point.y = Math.min(1, Math.max(0, (arg2 - tmp2) / height));
    }
    return point;
  }
  point = frozen;
};
export const VIBEGRATIONS_DESIGN_COMMENT_MAX = 1000;
export const isVibegrationsDesignCommentUsable = function isVibegrationsDesignCommentUsable(str) {
  return "" !== str.trim();
};
export const hitTestVibegrationsDesignTargets = function hitTestVibegrationsDesignTargets(arg0, arg1, arg2) {
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
export { labelVibegrationsDesignTarget };
export const describeVibegrationsDesignTarget = function describeVibegrationsDesignTarget(target) {
  const items = [, ];
  ({ kind: arr[0], name: arr[1] } = labelVibegrationsDesignTarget(target));
  const found = items.filter((item) => "" !== item);
  return found.join(" ");
};
export const formatVibegrationsDesignRemark = function formatVibegrationsDesignRemark(target, str) {
  const items = [, ];
  ({ kind: arr[0], name: arr[1] } = labelVibegrationsDesignTarget(target));
  const found = items.filter((item) => "" !== item);
  const joined = found.join(": ");
  const tmp = labelVibegrationsDesignTarget(target);
  return "" + c4 + joined + " \u2014 " + targetLine(target) + "\n" + str.trim();
};
export const parseVibegrationsDesignRemark = function parseVibegrationsDesignRemark(content) {
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
      const obj = { label: trimmed, body: str3 };
      tmp6 = obj;
    }
    return tmp6;
  } else {
    return null;
  }
};
export const formatVibegrationsDesignFeedback = function formatVibegrationsDesignFeedback(arg0) {
  ({ annotations, metaComment, context } = arg0);
  const found = annotations.filter((comment) => "" !== comment.comment.trim());
  const items = [];
  let str = "1 comment";
  if (1 !== found.length) {
    let _HermesInternal = HermesInternal;
    str = "" + found.length + " comments";
  }
  items.push("My design feedback: " + str + " on the app.");
  if (null == context) {
    const item = found.forEach((target, index) => {
      items.push("");
      const sum = index + 1;
      items.push("" + sum + ". " + targetLine(target.target));
      const trimmed = target.comment.trim();
      let combined = trimmed;
      if (trimmed.length > c1) {
        const _HermesInternal = HermesInternal;
        combined = "" + trimmed.slice(0, tmp5) + "\u2026";
      }
      items.push("   Feedback: " + combined);
    });
    let trimmed = metaComment.trim();
    if ("" !== trimmed) {
      items.push("");
      const _HermesInternal4 = HermesInternal;
      items.push("Note for the whole batch: " + trimmed);
    }
    return items.join("\n");
  } else {
    const trimmed1 = context.title.trim();
    let str6 = "";
    if ("" !== trimmed1) {
      const _HermesInternal2 = HermesInternal;
      let url = `` + trimmed1 + " (" + context.url + ")";
    } else {
      url = context.url;
    }
    const _HermesInternal3 = HermesInternal;
    str6 = HermesInternal.concat;
    items.push(str6(url, ", viewport ", context.viewport.width, "x", context.viewport.height, "."));
    context = items.push("Element coordinates below are viewport coordinates in that frame. The refs come from one snapshot taken when this feedback was collected, so re-snapshot before acting on them.");
  }
};
export const parseVibegrationsDesignFeedback = function parseVibegrationsDesignFeedback(raw) {
  const parts = raw.split("\n");
  let str = parts[0];
  if (str == null) {
    str = "";
  }
  let match = re5.exec(str);
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
            let match4 = re7.exec(item10019);
            let comment = tmp9.comment;
            if (null != match4) {
              let tmp23 = tmp21[1];
            } else {
              tmp23 = item10019;
            }
            let arr = comment.push(tmp23);
          }
        } else {
          tmp16 = tmp14[1];
          tmp9 = null;
        }
      } else {
        let obj = { detail: null, comment: null };
        obj.detail = tmp7[2];
        obj.comment = [];
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
        let obj2 = { count: items.length, page: tmp31, raw, note: null, items: null };
        let trimmed = null;
        if (null != tmp16) {
          trimmed = null;
          if ("" !== tmp16.trim()) {
            trimmed = tmp16.trim();
          }
        }
        obj2.note = trimmed;
        obj2.items = items.map((item) => {
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
            const obj2 = { label: str, kind: str4 };
            let obj = obj2;
          } else {
            let tmp4 = detail;
            if ("" !== str4) {
              tmp4 = str4;
            }
            obj = { label: tmp4, kind: "" };
          }
          const obj3 = {};
          const merged = Object.assign(obj);
          obj3.detail = detail;
          obj3.comment = comment.join("\n").trim();
          return obj3;
        });
        tmp32 = obj2;
      }
    }
    return tmp32;
  }
};