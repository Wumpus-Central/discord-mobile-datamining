// === Module 12785: pseudos ===

// Module 12785 (pseudos)

export const pseudos = {
  empty(arg0, adapter) {
    adapter = adapter.adapter;
    const children = adapter.getChildren(arg0);
    return !children.some((item) => {
      let isTagResult = adapter.isTag(item);
      if (!isTagResult) {
        isTagResult = "" !== adapter.getText(item);
      }
      return isTagResult;
    });
  },
  (prev, adapter) => {
    adapter = adapter.adapter;
    if (adapter.prevElementSibling) {
      return null == adapter.prevElementSibling(prev);
    } else {
      const siblings = adapter.getSiblings(prev);
      const found = siblings.find((item) => adapter.isTag(item));
      let tmpResult = null != found;
      if (tmpResult) {
        tmpResult = tmp(prev, found);
      }
      return tmpResult;
    }
  },
  (arg0, arg1) => {
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let diff = siblings.length - 1;
    if (0 <= diff) {
      while (!equals(arg0, siblings[diff])) {
        if (!adapter.isTag(siblings[diff])) {
          diff = diff - 1;
        }
      }
      return true;
    }
    return false;
  },
  (arg0, arg1) => {
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let num = 0;
    if (0 < siblings.length) {
      while (!equals(arg0, siblings[num])) {
        if (!adapter.isTag(tmp2)) {
          num = num + 1;
        }
      }
      return true;
    }
    return false;
  },
  (arg0, arg1) => {
    ({ adapter, equals } = arg1);
    const siblings = adapter.getSiblings(arg0);
    let diff = siblings.length - 1;
    if (0 <= diff) {
      while (!equals(arg0, siblings[diff])) {
        if (!adapter.isTag(tmp3)) {
          diff = diff - 1;
        }
      }
      return true;
    }
    return false;
  },
  (arg0, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const name = adapter.getName(arg0);
    const siblings = adapter.getSiblings(arg0);
    return siblings.every((item) => {
      let tmp = equals(closure_0, item);
      if (!tmp) {
        tmp = !adapter.isTag(item);
      }
      if (!tmp) {
        tmp = adapter.getName(item) !== closure_3;
      }
      return tmp;
    });
  },
  (arg0, adapter) => {
    closure_0 = arg0;
    adapter = adapter.adapter;
    const equals = adapter.equals;
    const siblings = adapter.getSiblings(arg0);
    return siblings.every((item) => {
      let tmp = equals(closure_0, item);
      if (!tmp) {
        tmp = !adapter.isTag(item);
      }
      return tmp;
    });
  }
};
export function verifyPseudoArgs(pseudos, name, data, arg3) {
  if (null === data) {
    if (pseudos.length > arg3) {
      const _Error2 = Error;
      const concat2 = "Pseudo-class :".concat;
      const error = new Error("Pseudo-class :".concat(name, " requires an argument"));
      throw error;
    }
  } else if (pseudos.length === arg3) {
    const _Error = Error;
    const concat = "Pseudo-class :".concat;
    const error1 = new Error("Pseudo-class :".concat(name, " doesn't have any arguments"));
    throw error1;
  }
}