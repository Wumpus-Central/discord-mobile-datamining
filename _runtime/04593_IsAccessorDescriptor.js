
export default function IsAccessorDescriptor(arg0) {
  if (undefined === arg0) {
    return false;
  } else if (require(4580) /* isPropertyDescriptor */(arg0)) {
    const tmp7 = tmp(573)(arg0, "[[Get]]");
    let tmp8 = !tmp7;
    if (!tmp7) {
      tmp8 = !tmp(573)(arg0, "[[Set]]");
    }
    return !tmp8;
  } else {
    const tmp5 = new tmp(541)("Assertion failed: `Desc` must be a Property Descriptor");
    throw tmp5;
  }
};