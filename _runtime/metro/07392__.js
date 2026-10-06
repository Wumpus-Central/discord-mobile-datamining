// _runtime/metro/07392__.js
let obj = {
  get(arg0) {
    const tmp = arg0;
    if (tmp) {
      return arg0;
    } else {
      if (typeof globalThis.DOMParser !== "undefined") {
        const DOMParser2 = globalThis.DOMParser;
        const self3 = this;
        const self4 = this;
        const dOMParser = new globalThis.DOMParser();
        return dOMParser;
      } else {
        try {
          const result = globalThis.__non_webpack_require__("@xmldom/xmldom");
          const self = this;
          const self2 = this;
          const obj = { onError: result.onErrorStopParsing };
          const dOMParser1 = new result.DOMParser(obj);
          return dOMParser1;
        } catch (err) {}
      }
    }
  },
};

export default obj;
