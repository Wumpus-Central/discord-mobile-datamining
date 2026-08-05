// _runtime/06980_uniqWith.js

export default function uniqWith(arg0, fn) {
  if (typeof fn === "function") {
    const tmp = fn;
  }
  if (arg0) {
    if (arg0.length) {
      require(6981) /* baseUniq */(arg0, undefined, tmp);
    }
    return [];
  }
};