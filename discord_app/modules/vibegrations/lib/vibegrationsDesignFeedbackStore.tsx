// === Module 16935: vibegrationsDesignFeedbackStore ===

// Module 16935 (vibegrationsDesignFeedbackStore)
import VibegrationsDesignFeedback from "VibegrationsDesignFeedback" /* 16936 */;
import noop from "module_19" /* 19 */;

require = fn;
function subscribeVibegrationsDesignFeedback(arg0) {
  closure_0 = arg0;
  set.add(arg0);
  return () => {
    set.delete(closure_0);
  };
}
let active = Object.freeze({ active: false, annotations: Object.freeze([]), context: null });
const map = new Map();
const set = new Set();
let c6 = 0;
const size = fn(2);
let result = size.fileFinishedImporting("modules/vibegrations/lib/vibegrationsDesignFeedbackStore.tsx");

export const getVibegrationsDesignFeedback = function getVibegrationsDesignFeedback(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  return value;
};
export const enterVibegrationsDesignFeedback = function enterVibegrationsDesignFeedback(arg0) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  if (!value.active) {
    const obj2 = {};
    const merged = Object.assign(value);
    obj2.active = true;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export const exitVibegrationsDesignFeedback = function exitVibegrationsDesignFeedback(arg0) {
  if (map.has(arg0)) {
    if (!active.active) {
      if (0 === active.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export const setVibegrationsDesignFeedbackContext = function setVibegrationsDesignFeedbackContext(arg0, context) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  if (value.active) {
    const obj2 = {};
    const merged = Object.assign(value);
    obj2.context = context;
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export const addVibegrationsDesignAnnotation = function addVibegrationsDesignAnnotation(arg0, authorId, target, comment) {
  let VIBEGRATIONS_DESIGN_ANCHOR_CENTER = arg4;
  if (arg4 === undefined) {
    VIBEGRATIONS_DESIGN_ANCHOR_CENTER = VibegrationsDesignFeedback.VIBEGRATIONS_DESIGN_ANCHOR_CENTER;
  }
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  const sum = c6 + 1;
  c6 = sum;
  const text = `annotation-${tmp4}`;
  const obj2 = {};
  const merged = Object.assign(value);
  const items = [];
  items[HermesBuiltin.arraySpread(value.annotations, 0)] = { id: text, authorId, target, anchor: VIBEGRATIONS_DESIGN_ANCHOR_CENTER, comment };
  obj2.annotations = items;
  if (!obj2.active) {
    if (0 === obj2.annotations.length) {
      map.delete(arg0);
    }
    (function emit() {
      const items = [...closure_1_5];
      const iter = items[Symbol.iterator]();
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
export const relocateVibegrationsDesignAnnotations = function relocateVibegrationsDesignAnnotations(arg0, size) {
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  active = value.active;
  if (active) {
    active = 0 !== size.size;
  }
  if (active) {
    const obj2 = {};
    let merged = Object.assign(value);
    const annotations = value.annotations;
    obj2.annotations = annotations.map((id) => {
      value = size.get(id.id);
      let tmp2 = id;
      if (null != value) {
        const obj = {};
        const merged = Object.assign(id);
        obj.target = value;
        tmp2 = obj;
      }
      return tmp2;
    });
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export const canEditVibegrationsDesignAnnotation = function canEditVibegrationsDesignAnnotation(authorId, arg1) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = authorId.authorId === arg1;
  }
  return tmp;
};
export const updateVibegrationsDesignAnnotation = function updateVibegrationsDesignAnnotation(arg0, arg1, arg2, comment) {
  closure_0 = arg2;
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
    const tmp5 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = {};
    let merged = Object.assign(value);
    const annotations1 = value.annotations;
    obj2.annotations = annotations1.map((id) => {
      let tmp = id;
      if (id.id === closure_0) {
        const obj = {};
        const merged = Object.assign(id);
        obj.comment = comment;
        tmp = obj;
      }
      return tmp;
    });
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export const removeVibegrationsDesignAnnotation = function removeVibegrationsDesignAnnotation(arg0, arg1, arg2) {
  closure_0 = arg2;
  value = map.get(arg0);
  if (value == null) {
    value = closure_3;
  }
  const annotations = value.annotations;
  const found = annotations.find((id) => id.id === closure_0);
  let tmp3 = null != found;
  if (tmp3) {
    tmp3 = null != arg1 && found.authorId === arg1;
    const tmp5 = null != arg1 && found.authorId === arg1;
  }
  if (tmp3) {
    const obj2 = {};
    const merged = Object.assign(value);
    const annotations1 = value.annotations;
    obj2.annotations = annotations1.filter((id) => id.id !== closure_0);
    if (!obj2.active) {
      if (0 === obj2.annotations.length) {
        map.delete(arg0);
      }
      (function emit() {
        const items = [...closure_1_5];
        const iter = items[Symbol.iterator]();
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
export { subscribeVibegrationsDesignFeedback };
export const useVibegrationsDesignFeedback = function useVibegrationsDesignFeedback(arg0) {
  closure_0 = arg0;
  const items = [arg0];
  const callback = noop.useCallback(() => {
    if (null == closure_0) {
      value = closure_3;
    } else {
      value = map.get(tmp);
      if (value == null) {
        value = closure_3;
      }
    }
    return value;
  }, items);
  return noop.useSyncExternalStore(subscribeVibegrationsDesignFeedback, callback, callback);
};