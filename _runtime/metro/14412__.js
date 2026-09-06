// _runtime/metro/14412__.js
let closure_0 = { url: "http://localhost:8081" };

export default () => {
  if (arg0 === undefined) {
    let obj = {};
  }
  return () => {
    url = Object.assign({}, url, obj);
    obj = {
      onCommand(type) {
        if ("editor.open" === type.type) {
          const payload = type.payload;
          let num = payload.lineNumber;
          const _HermesInternal = HermesInternal;
          obj = { file: payload.file, lineNumber: null };
          const combined = "" + url.url + "/open-stack-frame";
          if (!num) {
            num = 1;
          }
          obj.lineNumber = num;
          const _fetch = fetch;
          const request = { method: "POST", body: null };
          const _JSON = JSON;
          request.body = JSON.stringify(obj);
          const response = fetch(combined, request);
        }
      },
    };
    return obj;
  };
};
