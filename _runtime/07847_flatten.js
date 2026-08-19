// _runtime/07847_flatten.js
arg5.flatten = function flatten(arr) {
  const items = [];
  const item = arr.forEach((item, index) => {
    if (Array.isArray(item)) {
      item = item.forEach((item, index) => {
        if (Array.isArray(item)) {
          item = item.forEach((item, index) => {
            if (Array.isArray(item)) {
              item = item.forEach((item, index) => {
                if (Array.isArray(item)) {
                  item = item.forEach(() => { ... });
                } else {
                  arr = arr.push(item);
                }
              });
            } else {
              arr = arr.push(item);
            }
          });
        } else {
          arr = arr.push(item);
        }
      });
    } else {
      arr = arr.push(item);
    }
  });
  return items;
};