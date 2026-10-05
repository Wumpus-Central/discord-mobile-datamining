// discord_app/modules/media_uploads/DetectedFileSize.tsx
import _asyncToGenerator from "../../../_runtime/metro/00005__asyncToGenerator.js";
import size from "../../../_runtime/metro/00002__.js";

let c1, c2;

let obj = function _getDetectedFileSize() {
  obj = _asyncToGenerator(async function (arg0) {
    let closure_0 = arg0;
    if (c1 === 2) {
      c1 = 3;
      const str = "Generator functions may not be called on executing generators";
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp2 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c4;
      try {
        c1 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c1 = 3;
            throw value;
          } else if (arg0 === 2) {
            c1 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else if (closure_0.size > 0) {
            c1 = 3;
            const obj4 = { value: closure_0.size, done: true };
            return obj4;
          } else {
            c4 = 1;
            let self = this;
            let self2 = this;
            const promise = new Promise((data, arg1) => {
              closure_0 = data;
              let closure_1 = arg1;
              const fileReader = new FileReader();
              const timeout = setTimeout(() => {
                const error = new Error("File read timeout");
                closure_1(error);
              }, 10000);
              fileReader.onload = function (target) {
                clearTimeout(closure_2);
                target = target.target;
                let result;
                if (target != null) {
                  result = target.result;
                }
                if (result instanceof ArrayBuffer) {
                  closure_0(result.byteLength);
                } else {
                  const _Error = Error;
                  const self = this;
                  const self2 = this;
                  const error = new Error("Unexpected FileReader result type");
                  closure_1(error);
                }
              };
              fileReader.onerror = () => {
                clearTimeout(closure_2);
                const error = new Error("Could not read file");
                closure_1(error);
              };
              const asArrayBuffer = fileReader.readAsArrayBuffer(closure_0);
            });
            c2 = 2;
            c1 = 1;
            const obj5 = { value: promise, done: false };
            return obj5;
          }
        } else if (1 === tmp3) {
          c4 = 0;
          c1 = 3;
          return { value: 0, done: true };
        } else if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 0;
          c1 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c4 = 0;
          c1 = 3;
          obj = { value, done: true };
          return obj;
        }
      } catch (tmp7) {
        let closure_3 = tmp7;
        if (0 === c4) {
          c1 = 3;
          throw tmp7;
        } else {
          c2 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
let result = size.fileFinishedImporting("modules/media_uploads/DetectedFileSize.tsx");

export const getDetectedFileSize = function getDetectedFileSize() {
  return obj(...arguments);
};
