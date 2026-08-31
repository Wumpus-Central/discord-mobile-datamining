// === Module 12411: flatten ===

// Module 12411 (flatten)
arg5.flatten = function flatten(arr) {
  const items = [];
  const item = arr.forEach((arr) => {
    if (Array.isArray(arr)) {
      let item = arr.forEach((arr) => {
        if (Array.isArray(arr)) {
          let item = arr.forEach((arr) => {
            if (Array.isArray(arr)) {
              let item = arr.forEach((arr) => {
                if (Array.isArray(arr)) {
                  let item = arr.forEach(() => { ... });
                } else {
                  arr = arr.push(arr);
                }
              });
            } else {
              arr = arr.push(arr);
            }
          });
        } else {
          arr = arr.push(arr);
        }
      });
    } else {
      arr = arr.push(arr);
    }
  });
  return items;
};