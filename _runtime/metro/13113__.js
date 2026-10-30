// === Module 13113: ? ===

// Module 13113

export function flatten(arr) {
  const items = [];
  const item = arr.forEach((arr) => {
    if (Array.isArray(arr)) {
      let item = arr.forEach((arr) => {
        if (Array.isArray(arr)) {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              let item = arr.forEach((arr) => {
                if (Array.isArray(arr)) {
                  let item = arr.forEach(/* F127498 */ function() { ... });
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