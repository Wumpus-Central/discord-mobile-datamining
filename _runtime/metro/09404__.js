// _runtime/metro/09404__.js
import cloneNode from "../09393_cloneNode.js";

require = arg1;
const dependencyMap = arg6;

export function getChildren(children) {
  return cloneNode.hasChildren(children) ? children.children : [];
}
export function getParent(parent) {
  return parent.parent || null;
}
export function getSiblings(parent) {
  if (null != (parent.parent || null)) {
    return cloneNode.hasChildren(tmp) ? tmp.children : [];
  } else {
    const items = [parent];
    ({ prev, next } = parent);
    if (null != prev) {
      do {
        let arr = items.unshift(prev);
        prev = prev.prev;
      } while (null != prev);
    }
    if (null != next) {
      do {
        let arr3 = items.push(next);
        next = next.next;
      } while (null != next);
    }
    return items;
  }
}
export function getAttributeValue(attribs, arg1) {
  attribs = attribs.attribs;
  let tmp;
  if (null !== attribs) {
    if (undefined !== attribs) {
      tmp = attribs[arg1];
    }
  }
  return tmp;
}
export function hasAttrib(attribs, key10009) {
  let tmp = null != attribs.attribs;
  if (!tmp) {
    if (tmp) {
      tmp = null != attribs.attribs[key10009];
    }
    return tmp;
  } else {
    const _Object = Object;
    hasOwnProperty = Object.prototype.hasOwnProperty;
    const call = hasOwnProperty.call;
    attribs = attribs.attribs;
    typeof call === "unknown" ? hasOwnProperty(key10009) : call(attribs, key10009);
  }
}
export function getName(name) {
  return name.name;
}
export function nextElementSibling(next) {
  next = next.next;
  let tmp = next;
  if (null !== next) {
    let iter = next;
    tmp = next;
    if (!cloneNode.isTag(next)) {
      const next2 = iter.next;
      tmp = next2;
      while (null !== next2) {
        iter = next2;
        tmp = next2;
        if (cloneNode.isTag(next2)) {
          break;
        }
      }
    }
  }
  return tmp;
}
export function prevElementSibling(prev) {
  prev = prev.prev;
  let tmp = prev;
  if (null !== prev) {
    let tmp4 = prev;
    tmp = prev;
    if (!cloneNode.isTag(prev)) {
      const prev2 = tmp4.prev;
      tmp = prev2;
      while (null !== prev2) {
        tmp4 = prev2;
        tmp = prev2;
        if (cloneNode.isTag(prev2)) {
          break;
        }
      }
    }
  }
  return tmp;
}
