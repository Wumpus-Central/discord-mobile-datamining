// _runtime/metro/12906__.js

export const flatten = function flatten(arr) {
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
                  closure_1_0.push(arr);
                }
              });
            } else {
              closure_1_0.push(arr);
            }
          });
        } else {
          closure_1_0.push(arr);
        }
      });
    } else {
      closure_1_0.push(arr);
    }
  });
  return items;
};