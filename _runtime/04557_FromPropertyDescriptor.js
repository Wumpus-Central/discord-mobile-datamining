
export default function FromPropertyDescriptor(arg0) {
  if (undefined !== arg0) {
    if (!require(4551) /* isPropertyDescriptor */(arg0)) {
      const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
      throw tmp5;
    }
    tmp = require;
  }
  return require(4558) /* fromPropertyDescriptor */(arg0);
};