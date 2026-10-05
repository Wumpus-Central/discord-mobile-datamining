// _runtime/metro/07565__.js

export const getModalRouteKeys = (arr, arg1) => {
  let closure_0 = arg1;
  return arr.reduce((arr, key) => {
    let options;
    if (closure_0[key.key] != null) {
      options = tmp.options;
    }
    if (options == null) {
      options = {};
    }
    const presentation = options.presentation;
    const tmp2 =
      (arr.length && !presentation) ||
      "modal" === presentation ||
      "transparentModal" === presentation ||
      "containedModal" === presentation ||
      "containedTransparentModal" === presentation ||
      "fullScreenModal" === presentation ||
      "formSheet" === presentation ||
      "pageSheet" === presentation;
    if (tmp2) {
      arr = arr.push(key.key);
    }
    return arr;
  }, []);
};
