// === Module 6541: getModalRouteKeys ===

// Module 6541 (getModalRouteKeys)
arg5.getModalRouteKeys = (arr) => {
  closure_0 = arg1;
  return arr.reduce((acc, item, index) => {
    let options;
    if (table[item.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    let tmp2 = acc.length && !presentation;
    if (!tmp2) {
      tmp2 = "modal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "transparentModal" === presentation;
    }
    if (tmp2) {
      acc.push(item.key);
    }
    return acc;
  }, []);
};