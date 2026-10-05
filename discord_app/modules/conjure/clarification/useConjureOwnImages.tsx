// discord_app/modules/conjure/clarification/useConjureOwnImages.tsx
import _modDef3723 from "../intl/ConjureUntranslated.messages.js";
import _objectWithoutProperties from "../../../../_runtime/metro/00109__objectWithoutProperties.js";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, dependencyMap, id, importDefault;

let metroImportDefault;
let metroRequire;
function onPick() {}
function onRemove() {}
function onUpload() {}
function onLink() {
  return Promise.resolve(false);
}
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (StringResult) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const callResult = obj[Symbol.toPrimitive].call(obj[Symbol.toPrimitive], "string");
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
          const self = this;
          const self2 = this;
          const typeError = new TypeError("@@toPrimitive must return a primitive value.");
          throw typeError;
        }
      } else {
        const _String = String;
        StringResult = String(obj);
      }
    }
  }
  let text = StringResult;
  if (typeof StringResult !== "symbol") {
    text = `${tmp}`;
  }
  return text;
}
({ deleteStagedAttachment: metroRequire, importAttachmentFromUrl: metroImportDefault } = ConjureConnectionStore);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureOwnImages.tsx");

export function inertOwnImageControls(image, selected) {
  return { image, selected, busy: null, error: null, onPick, onRemove, onUpload, onLink };
}
export const useConjureOwnImages = function useConjureOwnImages(projectId, first1, arg2) {
  let closure_2;
  let closure_4;
  let closure_6;
  let closure_8;
  let first;
  let first2;
  _require = projectId;
  importDefault = first1;
  dependencyMap = arg2;
  [first, _slicedToArray] = first1.useState({});
  [first1, closure_6] = first1.useState({});
  [first2, closure_8] = first1.useState({});
  let intl = require("intl").intl;
  const stringResult = intl.string(_modDef3723.wTsP5l);
  const text = stringResult;
  let items = [first];
  const items1 = [first1, first, first2];
  const callback = first1.useCallback((arg0) => {
    let tmp = first[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }, items);
  const callback1 = first1.useCallback((multi_select) => {
    let tmp = null != first[multi_select.id];
    if (tmp) {
      let tmp5;
      if (true === multi_select.multi_select) {
        tmp5 = true === first2[multi_select.id];
      } else {
        let kind;
        if (first1[multi_select.id] != null) {
          kind = tmp3.kind;
        }
        tmp5 = "image" === kind;
      }
      tmp = tmp5;
    }
    return tmp;
  }, items1);
  const items2 = [stringResult, first, first2];
  const items3 = [stringResult, first1, first, projectId, callback1, arg2, first1];
  const callback2 = first1.useCallback((arg0) => {
    let tmp2;
    if (null != first[arg0.id]) {
      if (true === first2[arg0.id]) {
        tmp2 = { attachment: first[arg0.id].attachment, text };
        const obj = { attachment: first[arg0.id].attachment, text };
      }
    }
    return tmp2;
  }, items2);
  let obj = {
    imageFor: callback,
    selectedFor: callback1,
    multiPartFor: callback2,
    controlsFor: first1.useCallback((id, arg1) => {
      let _null;
      let busy;
      let closure_1;
      let closure_3;
      let error;
      const f153488 = (arg0) => {
        obj = {};
        const merged = Object.assign(arg0);
        obj[obj] = true;
        return obj;
      };
      id = id.id;
      first1 = true === id.multi_select;
      let tmp = first[id];
      if (tmp == null) {
        tmp = null;
      }
      let c2 = tmp;
      if (arg1) {
        let obj2 = { image: tmp, selected: callback1(id), busy: null, error: null, onPick, onRemove, onUpload, onLink };
        return obj2;
      } else {
        let tmp2 = first1;
        first = first1[id];
        let obj = {
          image: tmp,
          selected: callback1(id),
          busy,
          error,
          onPick() {
            let attachment;
            if (null != c2) {
              if (closure_1) {
                closure_8((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  obj[id] = true !== arg0[id];
                  return obj;
                });
              } else {
                _null((arg0) => {
                  const obj = {};
                  const merged = Object.assign(arg0);
                  const obj2 = { kind: "image", attachment: attachment.attachment, text };
                  obj[id] = obj2;
                  return obj;
                });
              }
            }
          },
          onRemove() {
            if (null != c2) {
              const promise = metroRequire(projectId, tmp.attachment.id);
              promise.catch(() => {});
              closure_4((arg0) => {
                const obj = Object.create(null);
                obj[id] = 0;
                return Object.assign(arg0, obj);
              });
              closure_8((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                obj[id] = false;
                return obj;
              });
              _null((dependencyMap) => {
                let kind;
                if (dependencyMap[id] != null) {
                  kind = tmp2.kind;
                }
                if ("image" !== kind) {
                  return dependencyMap;
                } else {
                  const items = [id];
                  return first(dependencyMap, items.map(closure_8));
                }
              });
            }
          },
          onUpload(promise) {
            let closure_0 = { busy: "upload", error: null };
            closure_1_6((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = obj;
              return obj;
            });
            promise.then(
              (errorText) => {
                let obj;
                if ("errorText" in errorText) {
                  const obj3 = { source: "upload", text: errorText.errorText };
                  closure_1_6((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_0] = obj;
                    return obj;
                  });
                } else {
                  closure_1_4((arg0) => {
                    if (null != arg0[closure_0]) {
                      const promise = closure_6(id, arg0[closure_0].attachment.id);
                      promise.catch(() => {});
                    }
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_0] = obj;
                    return obj;
                  });
                  closure_0 = { busy: null, error: null };
                  closure_1_6((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_0] = obj;
                    return obj;
                  });
                  if (closure_1) {
                    closure_1_8(f153488);
                  } else {
                    _null((arg0) => {
                      let tmp2 = arg0;
                      if (arg0[closure_0] === closure_2_3) {
                        obj = {};
                        const merged = Object.assign(arg0);
                        const obj2 = { kind: "image", attachment: obj.attachment, text };
                        obj[tmp] = obj2;
                        tmp2 = obj;
                      }
                      return tmp2;
                    });
                  }
                }
              },
              () => {
                let intl;
                let obj;
                const obj2 = { source: "upload", text: intl.string(closure_1(c2[5])["kUw/b1"]) };
                intl = id(c2[4]).intl;
                return closure_1_6((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = obj;
                  return obj;
                });
              },
            );
          },
          onLink(arg0) {
            let closure_0 = { busy: "link", error: null };
            let tmp = closure_1_6((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = obj;
              return obj;
            });
            let promise = first2(id, arg0);
            return promise.then(
              (attachment) => {
                let obj = { attachment };
                const tmp = closure_1_4((arg0) => {
                  if (null != arg0[closure_0]) {
                    const promise = closure_6(id, arg0[closure_0].attachment.id);
                    promise.catch(() => {});
                  }
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = obj;
                  return obj;
                });
                closure_0 = { busy: null, error: null };
                let tmp2 = closure_1_6((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[closure_0] = obj;
                  return obj;
                });
                if (closure_1) {
                  closure_1_8(f153488);
                } else {
                  _null((arg0) => {
                    let tmp2 = arg0;
                    if (arg0[closure_0] === closure_2_3) {
                      obj = {};
                      const merged = Object.assign(arg0);
                      const obj2 = { kind: "image", attachment: obj.attachment, text };
                      obj[tmp] = obj2;
                      tmp2 = obj;
                    }
                    return tmp2;
                  });
                }
                return true;
              },
              (message) => {
                let obj2;
                if (message instanceof Error) {
                  if ("" !== message.message) {
                    message = message.message;
                  }
                  let obj = { busy: null, error: obj2 };
                  obj2 = { source: "link", text: message };
                  closure_1_6((arg0) => {
                    obj = {};
                    const merged = Object.assign(arg0);
                    obj[closure_0] = obj;
                    return obj;
                  });
                  return false;
                }
                const intl = id(c2[4]).intl;
                message = intl.string(closure_1(c2[5]).l79PMc);
              },
            );
          },
        };
        busy = undefined;
        const tmp4 = first1;
        if (first1[id] != null) {
          busy = tmp5.busy;
        }
        if (busy == null) {
          busy = null;
        }
        error = undefined;
        if (tmp4[id] != null) {
          error = tmp7.error;
        }
        if (error == null) {
          error = null;
        }
        return obj;
      }
    }, items3),
  };
  return obj;
};
