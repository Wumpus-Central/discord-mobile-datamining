// _runtime/metro/14196__.js
let closure_0 = { url: "http://localhost:8081" };

export default () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return () => {
    closure_0 = Object.assign({}, closure_0, obj);
    obj = {
      onCommand(type) {
        if ("editor.open" === type.type) {
          const payload = type.payload;
          let num = payload.lineNumber;
          const _HermesInternal = HermesInternal;
          obj = { file: payload.file, lineNumber: num };
          const combined = "" + url.url + "/open-stack-frame";
          if (!num) {
            num = 1;
          }
          const _fetch = fetch;
          const request = { method: "POST", body: JSON.stringify(obj) };
          const _JSON = JSON;
          const response = fetch(combined, request);
        }
      },
    };
    return obj;
  };
};
