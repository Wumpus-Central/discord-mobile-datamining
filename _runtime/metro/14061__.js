// === Module 14061: ? ===

// Module 14061
let _globalThis = typeof globalThis === "object";
if (typeof globalThis === "object") {
  _globalThis = globalThis;
}
let tmp = _globalThis;
if (tmp) {
  const _Math = Math;
  tmp = _globalThis.Math === Math;
}
if (tmp) {
  tmp = _globalThis;
}
if (!tmp) {
  const _window = window;
  let _window2 = typeof window === "object";
  if (typeof window === "object") {
    _window2 = window;
  }
  let tmp2 = _window2;
  if (tmp2) {
    const _Math2 = Math;
    tmp2 = _window2.Math === Math;
  }
  if (tmp2) {
    tmp2 = _window2;
  }
  tmp = tmp2;
}
if (!tmp) {
  const _self = self;
  let _self2 = typeof self === "object";
  if (typeof self === "object") {
    _self2 = self;
  }
  let tmp3 = _self2;
  if (tmp3) {
    const _Math3 = Math;
    tmp3 = _self2.Math === Math;
  }
  if (tmp3) {
    tmp3 = _self2;
  }
  tmp = tmp3;
}
if (!tmp) {
  let tmp5 = typeof global === "object";
  if (typeof global === "object") {
    tmp5 = global;
  }
  let tmp6 = tmp5;
  if (tmp6) {
    const _Math4 = Math;
    tmp6 = tmp5.Math === Math;
  }
  if (tmp6) {
    tmp6 = tmp5;
  }
  tmp = tmp6;
}
if (!tmp) {
  let self = typeof this === "object";
  if (typeof this === "object") {
    self = this;
  }
  let tmp7 = self;
  if (tmp7) {
    const _Math5 = Math;
    tmp7 = self.Math === Math;
  }
  if (tmp7) {
    tmp7 = self;
  }
  tmp = tmp7;
}
if (!tmp) {
  const _Function = Function;
  tmp = Function("return this")();
}

export default tmp;