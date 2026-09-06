// === Module 7922: ? ===

// Module 7922

export const getModalRouteKeys = (arr, arg1) => {
  closure_0 = arg1;
  return arr.reduce((arr, key) => {
    let options;
    if (closure_0[key.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    let tmp2 = arr.length && !presentation;
    if (!tmp2) {
      tmp2 = "modal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "transparentModal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "containedModal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "containedTransparentModal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "fullScreenModal" === presentation;
    }
    if (!tmp2) {
      tmp2 = "formSheet" === presentation;
    }
    if (!tmp2) {
      tmp2 = "pageSheet" === presentation;
    }
    if (tmp2) {
      arr.push(key.key);
    }
    return arr;
  }, []);
};