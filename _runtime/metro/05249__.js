// _runtime/metro/05249__.js

export default {
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
          const obj = { onError: result.onErrorStopParsing };
          const dOMParser1 = new result.DOMParser(obj);
          return dOMParser1;
        } catch (err) {}
      }
    }
  },
};
