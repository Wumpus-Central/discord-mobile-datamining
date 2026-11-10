// === Module 13401: ? ===

// Module 13401

export function flatten(arr) {
  items = [];
  const item = arr.forEach((arr) => {
    if (Array.isArray(arr)) {
      let item = arr.forEach((arr) => {
        if (Array.isArray(arr)) {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              let item = arr.forEach((arr) => {
                if (Array.isArray(arr)) {
                  let item = arr.forEach(/* F130672 */ function() { ... });
                } else {
                  arr = closure_1_0.push(arr);
                }
              });
            } else {
              arr = closure_1_0.push(arr);
            }
          });
        } else {
          arr = closure_1_0.push(arr);
        }
      });
    } else {
      arr = closure_1_0.push(arr);
    }
  });
  return items;
}