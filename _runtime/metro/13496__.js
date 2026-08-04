// _runtime/metro/13496__.js
arg5.default = undefined;
let closure_0 = { url: "http://localhost:8081" };
arg5.default = () => {
  let obj = arg0;
  if (arg0 === undefined) {
    obj = {};
  }
  return () => {
    closure_0 = Object.assign({}, obj, closure_0);
    obj = {
      onCommand(type) {
        if ("editor.open" === type.type) {
          const payload = type.payload;
          let num = payload.lineNumber;
          const _HermesInternal = HermesInternal;
          let obj = { file: null, lineNumber: null };
          obj[0] = payload.file;
          const combined = "" + url.url + "/open-stack-frame";
          if (!num) {
            num = 1;
          }
          obj[1] = num;
          const _fetch = fetch;
          obj = { method: "POST", body: null };
          const _JSON = JSON;
          obj[1] = JSON.stringify(obj);
          const response = fetch(combined, obj);
        }
      }
    };
    return obj;
  };
};