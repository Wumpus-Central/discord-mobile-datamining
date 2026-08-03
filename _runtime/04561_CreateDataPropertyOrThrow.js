
export default function CreateDataPropertyOrThrow(arg0, arg1, arg2) {
  if (require(4500) /* isObject */(arg0)) {
    if (tmp(4547)(arg1)) {
      if (!tmp(4562)(arg0, arg1, arg2)) {
        const tmp15 = new tmp(541)("unable to create data property");
        throw tmp15;
      }
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};