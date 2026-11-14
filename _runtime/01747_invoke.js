// === Module 1747: invoke ===

// Module 1747 (invoke)
import _createClassDefault from "_createClass" /* 42 */;
import _classCallCheck from "_classCallCheck" /* 41 */;

const FileReader = arg1;
function invoke(fn) {
  try {
    if (fn != null) {
      fn();
    }
  } catch (tmp4) {
    const _console = console;
    console.error(tmp4);
  }
}
const re3 = /;\s*charset\s*=\s*("([^"]*)"|([^;\s]*))/i;
class FileReader {
  constructor() {
    tmp = c2(this, FileReader);
    this.EMPTY = 0;
    this.LOADING = 1;
    this.DONE = 2;
    this.readyState = 0;
    this.result = null;
    this.error = null;
    this.onload = null;
    this.onerror = null;
    this.onloadend = null;
    return;
  }
}
const entry = {
  key: "readAsArrayBuffer",
  value: function readAsArrayBuffer(arg0) {
    closure_0 = arg0;
    this.read(() => {
      let __getBytes;
      if (closure_0 != null) {
        __getBytes = closure_0.__getBytes;
      }
      if (typeof __getBytes !== "function") {
        const _Error = Error;
        const error = new Error("[Worklets] FileReader can only read a Blob created by the Worklets networking module.");
        throw error;
      } else {
        return obj.toArrayBuffer(closure_0.__getBytes());
      }
      obj = FileReader(1743);
    });
  }
};
const items = [
  entry,
  {
    key: "readAsText",
    value: function readAsText(arg0, arg1) {
      closure_0 = arg0;
      closure_1 = arg1;
      this.read(() => {
        let __getBytes;
        if (closure_0 != null) {
          __getBytes = closure_0.__getBytes;
        }
        if (typeof __getBytes !== "function") {
          const _Error = Error;
          const error = new Error("[Worklets] FileReader can only read a Blob created by the Worklets networking module.");
          throw error;
        } else {
          const __getBytesResult = closure_0.__getBytes();
          let tmp6 = closure_1;
          if (closure_1 == null) {
            const match = re3.exec(closure_0.type);
            let tmp4;
            if (null !== match) {
              let str = match[2];
              if (str == null) {
                str = match[3];
              }
              if (str == null) {
                str = "";
              }
              let tmp5;
              if ("" !== str) {
                tmp5 = str;
              }
              tmp4 = tmp5;
            }
            tmp6 = tmp4;
          }
          const _globalThis = globalThis;
          if (undefined !== __workletsNetworking) {
            let decodeTextResult = __workletsNetworking.decodeText(FileReader(1743).toArrayBuffer(__getBytesResult), tmp6);
            const obj3 = FileReader(1743);
          } else {
            decodeTextResult = FileReader(1744).utf8Decode(__getBytesResult);
            const obj2 = FileReader(1744);
          }
          return decodeTextResult;
        }
      });
    }
  },
  {
    key: "read",
    value: function read(arg0) {
      const self = this;
      closure_0 = arg0;
      if (1 === this.readyState) {
        const _Error = Error;
        const error = new Error("[Worklets] Failed to execute 'read' on 'FileReader': the object is already loading.");
        throw error;
      } else {
        self.result = null;
        self.error = null;
        self.readyState = 1;
        const _setTimeout = setTimeout;
        const timerId = setTimeout(() => {
          try {
            let tmp2 = self;
            self.result = closure_0();
            let flag = false;
            tmp2.readyState = 2;
            if (flag) {
              let onload = tmp2.onerror;
            } else {
              onload = tmp2.onload;
            }
            invoke(onload);
            invoke(tmp2.onloadend);
          } catch (tmp4) {
            tmp2 = self;
            self.error = tmp4;
            flag = true;
          }
        });
      }
    }
  }
];
let tmp2 = _createClassDefault(FileReader, items);
tmp2.EMPTY = 0;
tmp2.LOADING = 1;
tmp2.DONE = 2;

export const FileReader = tmp2;