// === Module 16583: conjureDesignFeedbackStore ===

// Module 16583 (conjureDesignFeedbackStore)
import ConjureDesignFeedback from "ConjureDesignFeedback" /* 16584 */;
import react from "react" /* 19 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

function subscribeConjureDesignFeedback(arg0) {
  let closure_0 = arg0;
  set.add(arg0);
  return () => {
    set.delete(closure_0);
  };
}
let obj = { active: false, annotations: Object.freeze([]), context: null };
let active = Object.freeze(obj);
const map = new Map();
const set = new Set();
let metroRequire = 0;
function getConjureDesignFeedback(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  return value;
}
function canEditConjureDesignAnnotation(authorId, arg1) {
  return null != arg1 && authorId.authorId === arg1;
}
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let tmp2;
  _require = arg0;
  const obj = require("react");
  const cResult = obj.c(2);
  if (cResult[0] !== arg0) {
    const fn = function s() {
      let value;
      if (null == closure_0) {
        value = active;
      } else {
        value = map.get(tmp);
        if (value == null) {
          value = active;
        }
      }
      return value;
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    tmp2 = fn;
  } else {
    tmp2 = cResult[1];
  }
  return react.useSyncExternalStore(subscribeConjureDesignFeedback, tmp2, tmp2);
}) : ((arg0) => {
  let closure_0 = arg0;
  const items = [arg0];
  const callback = react.useCallback(() => {
    let value;
    if (null == closure_0) {
      value = active;
    } else {
      value = map.get(tmp);
      if (value == null) {
        value = active;
      }
    }
    return value;
  }, items);
  return react.useSyncExternalStore(subscribeConjureDesignFeedback, callback, callback);
});
let result = size.fileFinishedImporting("modules/conjure/design_feedback/conjureDesignFeedbackStore.tsx");

export { getConjureDesignFeedback };
export const enterConjureDesignFeedback = function enterConjureDesignFeedback(arg0) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  if (!value.active) {
    const obj2 = { active: true };
    const merged = Object.assign(value);
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, obj2);
  }
};
export const exitConjureDesignFeedback = function exitConjureDesignFeedback(arg0) {
  if (map.has(arg0)) {
    if (!active.active) {
      if (0 === active.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, active);
  }
};
export const setConjureDesignFeedbackContext = function setConjureDesignFeedbackContext(arg0, context) {
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  if (value.active) {
    const obj2 = { context };
    const merged = Object.assign(value);
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, obj2);
  }
};
export const addConjureDesignAnnotation = function addConjureDesignAnnotation(arg0, authorId, target, comment) {
  let items;
  let CONJURE_DESIGN_ANCHOR_CENTER = arg4;
  if (arg4 === undefined) {
    CONJURE_DESIGN_ANCHOR_CENTER = ConjureDesignFeedback.CONJURE_DESIGN_ANCHOR_CENTER;
  }
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  metroRequire = metroRequire + 1;
  const text = `annotation-${tmp5}`;
  const obj2 = { annotations: items };
  const merged = Object.assign(value);
  items = [];
  items[HermesBuiltin.arraySpread(items, value.annotations, 0)] = { id: text, authorId, target, anchor: CONJURE_DESIGN_ANCHOR_CENTER, comment };
  if (!obj2.active) {
    if (0 === obj2.annotations.length) {
      map.delete(arg0);
    }
    (function emit() {
      const items = [...closure_1_5];
      const iter = items[Symbol.iterator]();
      iter.next();
      if (iter !== undefined) {
        try {
          tmp2();
        } catch (err) {
        }
      }
    })();
    return text;
  }
  const result = map.set(arg0, obj2);
};
export const relocateConjureDesignAnnotations = function relocateConjureDesignAnnotations(arg0, size) {
  let annotations;
  let closure_0 = size;
  let value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  active = value.active && 0 !== size.size;
  if (active) {
    const obj2 = {
      annotations: annotations.map((id) => {
          const value = closure_0.get(id.id);
          let tmp2 = id;
          if (null != value) {
            const obj = { target: value };
            const merged = Object.assign(id);
            tmp2 = obj;
          }
          return tmp2;
        })
    };
    let tmp2 = obj2;
    let merged = Object.assign(value);
    annotations = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, obj2);
  }
};
export { canEditConjureDesignAnnotation };
export const updateConjureDesignAnnotation = function updateConjureDesignAnnotation(arg0, arg1, arg2, arg3) {
  let annotations1;
  let closure_0 = arg2;
  let closure_1 = arg3;
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = {
      annotations: annotations1.map((id) => {
          let tmp = id;
          if (id.id === closure_0) {
            const obj = { comment };
            const merged = Object.assign(id);
            tmp = obj;
          }
          return tmp;
        })
    };
    let merged = Object.assign(value);
    annotations1 = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, obj2);
  }
};
export const removeConjureDesignAnnotation = function removeConjureDesignAnnotation(arg0, arg1, arg2) {
  let annotations1;
  let args;
  let closure_0 = arg2;
  let value = map.get(arg0);
  if (value == null) {
    value = active;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = { annotations: annotations1.filter((id) => id.id !== closure_0) };
    const merged = Object.assign(value);
    annotations1 = value.annotations;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
        iter.next();
        if (iter !== undefined) {
          try {
            tmp2();
          } catch (err) {
          }
        }
      })();
    }
    const result = map.set(arg0, obj2);
  }
};
export { subscribeConjureDesignFeedback };
export const useConjureDesignFeedback = tmp4;