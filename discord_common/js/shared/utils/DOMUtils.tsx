// discord_common/js/shared/utils/DOMUtils.tsx
import set from "../../../../_runtime/00002_set.js";

const re0 = /input/i;
const re1 = /textarea/i;
let set = new Set(["text", "password", "number", "date", "datetime-local", "time", "week", "month", "email", "search", "tel", "url"]);
let result = set.fileFinishedImporting("../discord_common/js/shared/utils/DOMUtils.tsx");

export const isElement = function isElement(ownerDocument, name) {
  if (null == ownerDocument) {
    return false;
  } else {
    let defaultView;
    if (ownerDocument != null) {
      ownerDocument = ownerDocument.ownerDocument;
      if (ownerDocument != null) {
        defaultView = ownerDocument.defaultView;
      }
    }
    if (null == defaultView) {
      return false;
    } else {
      let str;
      if (name != null) {
        str = name.name;
      }
      if (str == null) {
        str = "Element";
      }
      return null != defaultView[str] && ownerDocument instanceof defaultView[str];
    }
  }
};
export const cssValueToNumber = function cssValueToNumber(joined) {
  const parsed = parseInt(joined, 10);
  let num = 0;
  if (!isNaN(parsed)) {
    num = parsed;
  }
  return num;
};
export const isInputLikeElement = function isInputLikeElement(getAttribute) {
  if (null == getAttribute) {
    return false;
  } else if ("true" === getAttribute.getAttribute("contenteditable")) {
    return true;
  } else if (regex2.test(getAttribute.tagName)) {
    return true;
  } else {
    if (regex.test(getAttribute.tagName)) {
      let str2 = getAttribute.getAttribute("type");
      if (str2 == null) {
        str2 = "text";
      }
      if (set.has(str2)) {
        return true;
      }
    }
    return false;
  }
};
export const removeNode = function removeNode(parentNode) {
  if (null != parentNode.parentNode) {
    parentNode = parentNode.parentNode;
    parentNode.removeChild(parentNode);
  }
};
export const eventOwnerDocument = function eventOwnerDocument(target) {
  target = target.target;
  if (null == target) {
    return null;
  } else if ("ownerDocument" in target) {
    let ownerDocument = target.ownerDocument;
  } else {
    ownerDocument = null;
    if ("document" in target) {
      ownerDocument = target.document;
    }
  }
};
export const clickedOnVisibleImage = function clickedOnVisibleImage(arg0, arg1, arg2, arg3) {
  ({ width, height } = arg2);
  ({ width: width2, height: height2 } = arg3);
  ({ top, left } = arg3);
  const bound = Math.min(width2 / width, height2 / height, 1);
  const result = width * bound;
  const result1 = height * bound;
  const sum = (height2 - result1) / 2 + left;
  const sum1 = (width2 - result) / 2 + top;
  let tmp6 = arg1 >= sum && arg1 <= sum + result1;
  if (tmp6) {
    tmp6 = arg0 >= sum1;
  }
  if (tmp6) {
    tmp6 = arg0 <= sum1 + result;
  }
  return tmp6;
};
export const getParentElementByClassName = function getParentElementByClassName(parentElement) {
  parentElement = parentElement.parentElement;
  if (null != parentElement) {
    const classList = parentElement.classList;
    while (!classList.contains(arg1)) {
      parentElement = parentElement.parentElement;
    }
    return parentElement;
  }
  return null;
};
export const getParentElementByAttribute = function getParentElementByAttribute(parentElement) {
  parentElement = parentElement.parentElement;
  if (null != parentElement) {
    while (null == parentElement.getAttribute(arg1)) {
      parentElement = parentElement.parentElement;
    }
    return parentElement;
  }
  return null;
};