// _runtime/04488_DefinePropertyOrThrow.js

export default function DefinePropertyOrThrow(arg0, arg1, arg2) {
  if (require(4438) /* isObject */(arg0)) {
    if (tmp(4485)(arg1)) {
      let tmp13 = arg2;
      if (!tmp(4489)(arg2)) {
        tmp13 = tmp(4490)(arg2);
      }
      if (tmp(4489)(tmp13)) {
        let tmpResult = tmp(4492);
        tmpResult = tmp(4493);
        return tmpResult(tmpResult, tmp(4494), tmp(4495), arg0, arg1, tmp14);
      } else {
        const tmp17 = new tmp(541)("Assertion failed: Desc is not a valid Property Descriptor");
        throw tmp17;
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