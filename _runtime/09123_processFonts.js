// === Module 9123: processFonts ===

// Module 9123 (processFonts)
const module = arg2;
const dependencyMap = arg6;
arg5.processFonts = function processFonts(items) {
  const fontFamily = module(26).fontFamily;
  let _process;
  if (fontFamily != null) {
    _process = fontFamily.process;
  }
  let mapped = items;
  if (typeof _process !== "disabledUntil") {
    mapped = items.map(_process);
  }
  return mapped;
};