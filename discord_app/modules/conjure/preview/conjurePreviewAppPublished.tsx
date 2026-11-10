// === Module 11083: conjurePreviewAppPublished ===

// Module 11083 (conjurePreviewAppPublished)
import size from "module_2" /* 2 */;

const map = new Map();
let result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewAppPublished.tsx");

export function nextConjurePreviewAppPublished(arg0, arg1) {
  closure_0 = arg0;
  closure_1 = arg1;
  function finish() {

  }
  const obj = {
    published: new Promise((arg0) => {
      closure_0 = arg0;
      function onPublished() {
        finish(true);
      }
      let set = closure_0.get(closure_0);
      if (set == null) {
        const _Set = Set;
        set = new Set();
      }
      const result = closure_0.set(closure_0, set);
      setTimeout(() => finish(false), set);
      finish = function finish(arg0) {
        clearTimeout(finish);
        set.delete(onPublished);
        let tmp4 = 0 === set.size;
        if (tmp4) {
          tmp4 = map.get(closure_0) === set;
        }
        if (tmp4) {
          map.delete(closure_0);
        }
        closure_0(arg0);
      };
      set.add(onPublished);
    }),
    cancel() {
      return finish(false);
    }
  };
  return obj;
}
export function notifyConjurePreviewAppPublished(projectId) {
  let items1 = map.get(projectId);
  if (items1 == null) {
    items1 = [];
  }
  items = [...items1];
  for (const item10014 of items) {
    let item10014Result = item10014();
    continue;
  }
}