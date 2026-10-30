// === Module 9397: ? ===

// Module 9397
import cloneNode from "cloneNode" /* 9393 */;
import replaceQuotes2 from "replaceQuotes" /* 9398 */;

const require = globalThis.__r;

let fn = this;
if (this) {
  fn = this.__importDefault;
}
if (!fn) {
  fn = (__esModule) => {
    if (!__esModule) {
      const obj = { default: __esModule };
      let tmp = obj;
    } else {
      tmp = __esModule;
    }
    return tmp;
  };
}
function getOuterHTML(arg0, arg1) {
  return replaceQuotes.default(arg0, arg1);
}
function getText(name) {
  if (Array.isArray(name)) {
    const mapped = name.map(getText);
    let str = mapped.join("");
  } else if (cloneNode.isTag(name)) {
    let str2 = "\n";
    if ("br" !== name.name) {
      str2 = getText(name.children);
    }
    str = str2;
  } else if (cloneNode.isCDATA(name)) {
    str = getText(name.children);
  } else {
    str = "";
    if (cloneNode.isText(name)) {
      str = name.data;
    }
  }
  return str;
}
function textContent(elementsByTagName) {
  if (Array.isArray(elementsByTagName)) {
    const mapped = elementsByTagName.map(textContent);
    return mapped.join("");
  } else {
    if (cloneNode.hasChildren(elementsByTagName)) {
      if (!cloneNode.isComment(elementsByTagName)) {
        return textContent(elementsByTagName.children);
      }
    }
    let str = "";
    if (cloneNode.isText(elementsByTagName)) {
      str = elementsByTagName.data;
    }
    return str;
  }
}
function innerText(children) {
  if (Array.isArray(children)) {
    const mapped = children.map(innerText);
    return mapped.join("");
  } else {
    if (cloneNode.hasChildren(children)) {
      return innerText(children.children);
    }
    let str = "";
    if (cloneNode.isText(children)) {
      str = children.data;
    }
    return str;
  }
}
const replaceQuotes = fn(replaceQuotes2);

export { getOuterHTML };
export function getInnerHTML(children, arg1) {
  _require = arg1;
  let str = "";
  if (require("cloneNode").hasChildren(children)) {
    children = children.children;
    const mapped = children.map((item) => replaceQuotes.default(item, closure_0));
    str = mapped.join("");
  }
  return str;
}
export { getText };
export { textContent };
export { innerText };