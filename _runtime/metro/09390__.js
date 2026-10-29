// _runtime/metro/09390__.js

export function removeElement(prev) {
  if (prev.prev) {
    prev.prev.next = prev.next;
  }
  if (prev.next) {
    prev.next.prev = prev.prev;
  }
  if (prev.parent) {
    const children = prev.parent.children;
    const lastIndexOfResult = children.lastIndexOf(prev);
    if (lastIndexOfResult >= 0) {
      children.splice(lastIndexOfResult, 1);
    }
  }
  prev.next = null;
  prev.prev = null;
  prev.parent = null;
}
export function replaceElement(prev, next) {
  prev = prev.prev;
  next.prev = prev;
  if (prev) {
    prev.next = next;
  }
  next = prev.next;
  next.next = next;
  if (next) {
    next.prev = next;
  }
  const parent = prev.parent;
  next.parent = parent;
  if (parent) {
    const children = parent.children;
    children[children.lastIndexOf(prev)] = next;
    prev.parent = null;
  }
}
export function appendChild(element, node) {
  if (node.prev) {
    node.prev.next = node.next;
  }
  if (node.next) {
    node.next.prev = node.prev;
  }
  if (node.parent) {
    const children = node.parent.children;
    const lastIndexOfResult = children.lastIndexOf(node);
    if (lastIndexOfResult >= 0) {
      children.splice(lastIndexOfResult, 1);
    }
  }
  node.next = null;
  node.prev = null;
  node.parent = null;
  node.next = null;
  node.parent = element;
  const children1 = element.children;
  if (children1.push(node) > 1) {
    element.children[element.children.length - 2].next = node;
    node.prev = element.children[element.children.length - 2];
  } else {
    node.prev = null;
  }
}
export function append(prev, prev2) {
  if (prev2.prev) {
    prev2.prev.next = prev2.next;
  }
  if (prev2.next) {
    prev2.next.prev = prev2.prev;
  }
  if (prev2.parent) {
    const children = prev2.parent.children;
    const lastIndexOfResult = children.lastIndexOf(prev2);
    if (lastIndexOfResult >= 0) {
      children.splice(lastIndexOfResult, 1);
    }
  }
  prev2.next = null;
  prev2.prev = null;
  prev2.parent = null;
  ({ parent, next } = prev);
  prev2.next = next;
  prev2.prev = prev;
  prev.next = prev2;
  prev2.parent = parent;
  if (next) {
    next.prev = prev2;
    if (parent) {
      const children1 = parent.children;
      children1.splice(children1.lastIndexOf(next), 0, prev2);
    }
  } else if (parent) {
    const children2 = parent.children;
    children2.push(prev2);
  }
}
export function prependChild(parent, prev) {
  if (prev.prev) {
    prev.prev.next = prev.next;
  }
  if (prev.next) {
    prev.next.prev = prev.prev;
  }
  if (prev.parent) {
    const children = prev.parent.children;
    const lastIndexOfResult = children.lastIndexOf(prev);
    if (lastIndexOfResult >= 0) {
      children.splice(lastIndexOfResult, 1);
    }
  }
  prev.next = null;
  prev.prev = null;
  prev.parent = parent;
  prev.prev = null;
  const children1 = parent.children;
  if (1 !== children1.unshift(prev)) {
    parent.children[1].prev = prev;
    prev.next = parent.children[1];
  } else {
    prev.next = null;
  }
}
export function prepend(parent, next) {
  if (next.prev) {
    next.prev.next = next.next;
  }
  if (next.next) {
    next.next.prev = next.prev;
  }
  if (next.parent) {
    const children = next.parent.children;
    const lastIndexOfResult = children.lastIndexOf(next);
    if (lastIndexOfResult >= 0) {
      children.splice(lastIndexOfResult, 1);
    }
  }
  next.next = null;
  next.prev = null;
  next.parent = null;
  parent = parent.parent;
  if (parent) {
    const children1 = parent.children;
    children1.splice(children1.indexOf(parent), 0, next);
  }
  if (parent.prev) {
    parent.prev.next = next;
  }
  next.parent = parent;
  next.prev = parent.prev;
  next.next = parent;
  parent.prev = next;
}
