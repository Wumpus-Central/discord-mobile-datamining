// _runtime/metro/05074__.js
arg5.default = {
  get(arg0) {
    if (arg0) {
      return arg0;
    } else {
      if (typeof globalThis.DOMParser !== "undefined") {
        const dOMParser = new globalThis.DOMParser();
        return dOMParser;
      } else {
        try {
          const result = globalThis.__non_webpack_require__("@xmldom/xmldom");
          const obj = { onError: null };
          obj[0] = result.onErrorStopParsing;
          const dOMParser1 = new result.DOMParser(obj);
          return dOMParser1;
        } catch (err) {
        }
      }
    }
  }
};