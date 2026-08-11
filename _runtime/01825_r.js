// _runtime/01825_r.js
const fn = function r() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute > 0.0031308) {
    const _Math = Math;
    const _Math2 = Math;
    let result = (Math.sign(num) || 1) * (1.055 * Math.pow(absolute, 0.4166666666666667) - 0.055);
    const tmp3 = Math.sign(num) || 1;
  } else {
    result = 12.92 * num;
  }
  return result;
};
fn.__closure = {};
fn.__workletHash = 9046778946531;
fn.__initData = { code: "function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;}" };
const fn2 = function n(alpha) {
  let b;
  let g;
  let r;
  ({ r, g, b } = alpha);
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (r === undefined) {
    r = 0;
  }
  const absolute = Math.abs(r);
  if (absolute > 0.0031308) {
    const _Math = Math;
    const _Math2 = Math;
    let result = (Math.sign(r) || 1) * (1.055 * Math.pow(absolute, 0.4166666666666667) - 0.055);
    const tmp4 = Math.sign(r) || 1;
  } else {
    result = 12.92 * r;
  }
  const obj = { r: result, g: null, b: null, alpha: null };
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (g === undefined) {
    g = 0;
  }
  const absolute1 = Math.abs(g);
  if (absolute1 > 0.0031308) {
    const _Math3 = Math;
    const _Math4 = Math;
    let result1 = (Math.sign(g) || 1) * (1.055 * Math.pow(absolute1, 0.4166666666666667) - 0.055);
    const tmp7 = Math.sign(g) || 1;
  } else {
    result1 = 12.92 * g;
  }
  obj[1] = result1;
  if (typeof fn !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (b === undefined) {
    b = 0;
  }
  const absolute2 = Math.abs(b);
  if (absolute2 > 0.0031308) {
    const _Math5 = Math;
    const _Math6 = Math;
    let result2 = (Math.sign(b) || 1) * (1.055 * Math.pow(absolute2, 0.4166666666666667) - 0.055);
    const tmp10 = Math.sign(b) || 1;
  } else {
    result2 = 12.92 * b;
  }
  obj[2] = result2;
  obj[3] = alpha.alpha;
  return obj;
};
fn2.__closure = { channelFromLrgb: fn };
fn2.__workletHash = 2514333579516;
fn2.__initData = { code: "function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){const{channelFromLrgb}=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};}" };
const fn3 = function t() {
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute <= 0.04045) {
    let result = num / 12.92;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    result = (Math.sign(num) || 1) * Math.pow((absolute + 0.055) / 1.055, 2.4);
    const tmp2 = Math.sign(num) || 1;
  }
  return result;
};
fn3.__closure = {};
fn3.__workletHash = 7878321042954;
fn3.__initData = { code: "function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);}" };
const fn4 = function o(alpha) {
  let b;
  let g;
  let r;
  ({ r, g, b } = alpha);
  if (typeof fn3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (r === undefined) {
    r = 0;
  }
  const absolute = Math.abs(r);
  if (absolute <= 0.04045) {
    let result = r / 12.92;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    result = (Math.sign(r) || 1) * Math.pow((absolute + 0.055) / 1.055, 2.4);
    const tmp3 = Math.sign(r) || 1;
  }
  const obj = { r: result, g: null, b: null, alpha: null };
  if (typeof fn3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (g === undefined) {
    g = 0;
  }
  const absolute1 = Math.abs(g);
  if (absolute1 <= 0.04045) {
    let result1 = g / 12.92;
  } else {
    const _Math3 = Math;
    const _Math4 = Math;
    result1 = (Math.sign(g) || 1) * Math.pow((absolute1 + 0.055) / 1.055, 2.4);
    const tmp6 = Math.sign(g) || 1;
  }
  obj[1] = result1;
  if (typeof fn3 !== "function") {
    HermesBuiltin.throwTypeError();
  }
  if (b === undefined) {
    b = 0;
  }
  const absolute2 = Math.abs(b);
  if (absolute2 <= 0.04045) {
    let result2 = b / 12.92;
  } else {
    const _Math5 = Math;
    const _Math6 = Math;
    result2 = (Math.sign(b) || 1) * Math.pow((absolute2 + 0.055) / 1.055, 2.4);
    const tmp9 = Math.sign(b) || 1;
  }
  obj[2] = result2;
  obj[3] = alpha.alpha;
  return obj;
};
fn4.__closure = { channelToLrgb: fn3 };
fn4.__workletHash = 7438857771706;
fn4.__initData = { code: "function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){const{channelToLrgb}=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};}" };
arg5.default = { convert: { fromRgb: fn4, toRgb: fn2 } };