// === Module 4562: CreateDataProperty ===

// Module 4562 (CreateDataProperty)

export default function CreateDataProperty(arg0, arg1, arg2) {
  if (require(4500) /* isObject */(arg0)) {
    if (tmp(4547)(arg1)) {
      const obj = { "[[Configurable]]": true, "[[Enumerable]]": true, "[[Value]]": null, "[[Writable]]": true };
      obj[2] = arg2;
      return tmp(4563)(arg0, arg1, obj);
    } else {
      const tmp10 = new tmp(541)("Assertion failed: P is not a Property Key");
      throw tmp10;
    }
  } else {
    const tmp5 = new tmp(541)("Assertion failed: Type(O) is not Object");
    throw tmp5;
  }
};