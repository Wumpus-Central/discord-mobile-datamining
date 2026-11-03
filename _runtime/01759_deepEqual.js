// === Module 1759: deepEqual ===

// Module 1759 (deepEqual)
function deepEqual(obj, obj2) {
  if (obj === obj2) {
    return true;
  } else {
    if (typeof obj === "object") {
      if (typeof obj2 === "object") {
        if (null !== obj) {
          if (null !== obj2) {
            const _Array4 = Array;
            if (Array.isArray(obj)) {
              const _Array = Array;
              if (Array.isArray(obj2)) {
                if (obj.length !== obj2.length) {
                  return false;
                } else {
                  let num = 0;
                  if (0 < obj.length) {
                    while (deepEqual(obj[num], obj2[num])) {
                      num = num + 1;
                    }
                    return false;
                  }
                  return true;
                }
              }
            }
            const _Array2 = Array;
            if (!Array.isArray(obj)) {
              const _Array3 = Array;
              if (!Array.isArray(obj2)) {
                const _Object = Object;
                const keys = Object.keys(obj);
                const _Object2 = Object;
                const keys1 = Object.keys(obj2);
                if (keys.length !== keys1.length) {
                  return false;
                } else {
                  const _Set = Set;
                  const set = new Set(keys1);
                  for (const item10030 of keys) {
                    if (set.has(item10030)) {
                      if (deepEqual(arg0[item10030], arg1[item10030])) {
                        continue;
                      } else {
                        obj2.return();
                        let flag2 = false;
                        return false;
                      }
                    } else {
                      obj2.return();
                      let flag = false;
                      return false;
                    }
                  }
                  return true;
                }
              }
            }
            return false;
          }
        }
      }
    }
    return false;
  }
}

export { deepEqual };