// === Module 17240: useConjureOwnImages ===

// Module 17240 (useConjureOwnImages)
import _modDef3849 from "module_3849" /* 3849 */;
import _objectWithoutProperties from "_objectWithoutProperties" /* 109 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
function _toPropertyKey(obj) {
  let StringResult = obj;
  if (typeof obj === "object") {
    StringResult = obj;
    if (obj) {
      const _Symbol = Symbol;
      if (undefined !== obj[Symbol.toPrimitive]) {
        const call = tmp3.call;
        if (typeof call === "unknown") {
          let callResult = tmp3("string");
        } else {
          callResult = call(obj, "string");
        }
        StringResult = callResult;
        if (typeof callResult === "object") {
          const _TypeError = TypeError;
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
const ConjureConnectionStore = fn(13213);
({ deleteStagedAttachment: metroRequire, importAttachmentFromUrl: closure_7 } = ConjureConnectionStore);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/clarification/useConjureOwnImages.tsx");

export function inertOwnImageControls(image, selected) {
  return {
    image,
    selected,
    busy: null,
    error: null,
    onPick() {

    },
    onRemove() {

    },
    onUpload() {

    },
    onLink() {
      return Promise.resolve(false);
    }
  };
}
export const useConjureOwnImages = function useConjureOwnImages(projectId, first1, arg2) {
  _require = projectId;
  importDefault = first1;
  dependencyMap = arg2;
  [first, _slicedToArray] = first1.useState({});
  [first1, closure_6] = first1.useState({});
  [first2, closure_8] = first1.useState({});
  let intl = require("util").intl;
  const stringResult = intl.string(_modDef3849.wTsP5l);
  let items = [first];
  const items1 = [first1, first, first2];
  const callback = first1.useCallback((arg0) => {
    let tmp = first[arg0];
    if (tmp == null) {
      tmp = null;
    }
    return tmp;
  }, items);
  const callback1 = first1.useCallback((arg0) => {
    let tmp = arg0;
    if (null == first[arg0.id]) {
      return tmp2;
    } else if (true === tmp.multi_select) {
      tmp = first2[tmp.id];
      let tmp6 = true === tmp;
    } else {
      let kind;
      if (dependencyMap[tmp.id] != null) {
        kind = tmp4.kind;
      }
      tmp6 = "image" === kind;
    }
  }, items1);
  const items2 = [stringResult, first, first2];
  const items3 = [stringResult, first1, first, projectId, callback1, arg2, first1];
  const callback2 = first1.useCallback((arg0) => {
    let tmp2;
    if (null != first[arg0.id]) {
      if (true === first2[arg0.id]) {
        const obj = { attachment: tmp.attachment, text: stringResult };
        tmp2 = obj;
      }
    }
    return tmp2;
  }, items2);
  return {
    imageFor: callback,
    selectedFor: callback1,
    multiPartFor: callback2,
    controlsFor: first1.useCallback((id, arg1) => {
      id = id.id;
      dependencyMap = true === id.multi_select;
      let tmp = closure_3[id];
      if (tmp == null) {
        tmp = null;
      }
      c2 = tmp;
      if (arg1) {
        let obj2 = {
          image: tmp,
          selected: callback1(id),
          busy: null,
          error: null,
          onPick() {

            },
          onRemove() {

            },
          onUpload() {

            },
          onLink() {
              return Promise.resolve(false);
            }
        };
        return obj2;
      } else {
        closure_3 = dependencyMap[id];
        let obj = { image: tmp, selected: callback1(id), busy: null, error: null, onPick: null, onRemove: null, onUpload: null, onLink: null };
        let busy;
        if (first1[id] != null) {
          busy = tmp5.busy;
        }
        if (busy == null) {
          busy = null;
        }
        obj.busy = busy;
        let error;
        if (first1[id] != null) {
          error = tmp7.error;
        }
        if (error == null) {
          error = null;
        }
        obj.error = error;
        obj.onPick = function onPick() {
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
                obj[id] = { kind: "image", attachment: attachment.attachment, text };
                return obj;
              });
            }
          }
        };
        obj.onRemove = function onRemove() {
          if (null != c2) {
            timestampProducer(closure_0, tmp.attachment.id).catch(() => {

            });
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
            const promise = timestampProducer(closure_0, tmp.attachment.id);
          }
        };
        obj.onUpload = function onUpload(promise) {
          closure_0 = { busy: "upload", error: null };
          closure_1_6((arg0) => {
            obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0] = obj;
            return obj;
          });
          promise.then((errorText) => {
            if ("errorText" in errorText) {
              const obj2 = { busy: null, error: null };
              const obj3 = { source: "upload", text: errorText.errorText };
              obj2.error = obj3;
              closure_130_0 = obj2;
              closure_1_6((arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = obj;
                return obj;
              });
            } else {
              { attachment: null }.attachment = errorText;
              closure_1_4((arg0) => {
                if (null != arg0[closure_0]) {
                  closure_6(id, tmp2.attachment.id).catch(/* F157646 */ function() { ... });
                  const promise = closure_6(id, tmp2.attachment.id);
                }
                obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = obj;
                return obj;
              });
              closure_129_0 = { busy: null, error: null };
              closure_1_6((arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = obj;
                return obj;
              });
              if (closure_1) {
                closure_1_8((arg0) => {
                  obj = {};
                  const merged = Object.assign(arg0);
                  obj[obj] = true;
                  return obj;
                });
              } else {
                dependencyMap((arg0) => {
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
              const obj = { attachment: null };
            }
          }, () => {
            const obj = { busy: null, error: null };
            const obj2 = { source: "upload", text: null };
            const intl = id(1126).intl;
            obj2.text = intl.string(closure_1(3849)["kUw/b1"]);
            obj.error = obj2;
            return closure_1_6((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = obj;
              return obj;
            });
          });
        };
        obj.onLink = function onLink(arg0) {
          closure_0 = { busy: "link", error: null };
          closure_1_6((arg0) => {
            obj = {};
            const merged = Object.assign(arg0);
            obj[closure_0] = obj;
            return obj;
          });
          return first2(id, arg0).then((attachment) => {
            closure_1_4((arg0) => {
              if (null != arg0[closure_0]) {
                closure_6(id, tmp2.attachment.id).catch(/* F157646 */ function() { ... });
                const promise = closure_6(id, tmp2.attachment.id);
              }
              obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = obj;
              return obj;
            });
            closure_129_0 = { busy: null, error: null };
            closure_1_6((arg0) => {
              obj = {};
              const merged = Object.assign(arg0);
              obj[closure_0] = obj;
              return obj;
            });
            if (closure_1) {
              closure_1_8((arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                obj[obj] = true;
                return obj;
              });
            } else {
              dependencyMap((arg0) => {
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
          }, (message) => {
            if (message instanceof Error) {
              if ("" !== message.message) {
                message = message.message;
              }
              const obj2 = { source: "link", text: message };
              { busy: null, error: null }.error = obj2;
              closure_1_6((arg0) => {
                obj = {};
                const merged = Object.assign(arg0);
                obj[closure_0] = obj;
                return obj;
              });
              return false;
            }
            const intl = id(1126).intl;
            message = intl.string(closure_1(3849).l79PMc);
          });
        };
        return obj;
      }
    }, items3)
  };
};