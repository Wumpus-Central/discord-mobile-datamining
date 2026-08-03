// === Module 13496: all ===

// Module 13496 (all)

export default (arg0) => {
  if (require(13469) /* all */(arg0)) {
    return arg0;
  } else {
    const tmp5 = new TypeError(String(arg0) + " is not an object");
    throw tmp5;
  }
};