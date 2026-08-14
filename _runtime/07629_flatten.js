// _runtime/07629_flatten.js
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
                  closure_0.push(arr);
                }
              });
            } else {
              closure_0.push(arr);
            }
          });
        } else {
          closure_0.push(arr);
        }
      });
    } else {
      closure_0.push(arr);
    }
  });
  return items;
};