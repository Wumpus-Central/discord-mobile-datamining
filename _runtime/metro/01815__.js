// _runtime/metro/01815__.js
let fn4;
let obj2;
const channelFromLrgb = function r() {
  let result;
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute > 0.0031308) {
    const _Math = Math;
    const _Math2 = Math;
    const tmp3 = Math.sign(num) || 1;
    result = tmp3 * (1.055 * Math.pow(absolute, 0.4166666666666667) - 0.055);
  } else {
    result = 12.92 * num;
  }
  return result;
};
channelFromLrgb.__closure = {};
channelFromLrgb.__workletHash = 9046778946531;
channelFromLrgb.__initData = {
  code: "function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;}",
};
const fn2 = function n(arg0) {
  let b;
  let g;
  let r;
  ({ r, g, b } = arg0);
  if (typeof fn === "function") {
    let result;
    if (r === undefined) {
      r = 0;
    }
    const _Math = Math;
    const absolute = Math.abs(r);
    if (absolute > 0.0031308) {
      const _Math2 = Math;
      const _Math3 = Math;
      const tmp7 = Math.sign(r) || 1;
      result = tmp7 * (1.055 * Math.pow(absolute, 0.4166666666666667) - 0.055);
    } else {
      result = 12.92 * r;
    }
    const obj = { r: result, g: null, b: null, alpha: null };
    if (typeof fn === "function") {
      let result1;
      if (g === undefined) {
        g = 0;
      }
      const _Math4 = Math;
      const absolute1 = Math.abs(g);
      if (absolute1 > 0.0031308) {
        const _Math5 = Math;
        const _Math6 = Math;
        const tmp11 = Math.sign(g) || 1;
        result1 = tmp11 * (1.055 * Math.pow(absolute1, 0.4166666666666667) - 0.055);
      } else {
        result1 = 12.92 * g;
      }
      obj.g = result1;
      if (typeof fn === "function") {
        let result2;
        if (b === undefined) {
          b = 0;
        }
        const _Math7 = Math;
        const absolute2 = Math.abs(b);
        if (absolute2 > 0.0031308) {
          const _Math8 = Math;
          const _Math9 = Math;
          const tmp15 = Math.sign(b) || 1;
          result2 = tmp15 * (1.055 * Math.pow(absolute2, 0.4166666666666667) - 0.055);
        } else {
          result2 = 12.92 * b;
        }
        obj.b = result2;
        obj.alpha = tmp;
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn2.__closure = { channelFromLrgb };
fn2.__workletHash = 2514333579516;
fn2.__initData = {
  code: "function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){const{channelFromLrgb}=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};}",
};
const fn3 = function t() {
  let result;
  let num = arg0;
  if (arg0 === undefined) {
    num = 0;
  }
  const absolute = Math.abs(num);
  if (absolute <= 0.04045) {
    result = num / 12.92;
  } else {
    const _Math = Math;
    const _Math2 = Math;
    const tmp2 = Math.sign(num) || 1;
    result = tmp2 * Math.pow((absolute + 0.055) / 1.055, 2.4);
  }
  return result;
};
fn3.__closure = {};
fn3.__workletHash = 7878321042954;
fn3.__initData = {
  code: "function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);}",
};
let obj = { convert: obj2 };
obj2 = { fromRgb: fn4, toRgb: fn2 };
fn4 = function o(arg0) {
  let b;
  let g;
  let r;
  ({ r, g, b } = arg0);
  if (typeof fn3 === "function") {
    let result;
    if (r === undefined) {
      r = 0;
    }
    const _Math = Math;
    const absolute = Math.abs(r);
    if (absolute <= 0.04045) {
      result = r / 12.92;
    } else {
      const _Math2 = Math;
      const _Math3 = Math;
      const tmp5 = Math.sign(r) || 1;
      result = tmp5 * Math.pow((absolute + 0.055) / 1.055, 2.4);
    }
    const obj = { r: result, g: null, b: null, alpha: null };
    if (typeof fn3 === "function") {
      let result1;
      if (g === undefined) {
        g = 0;
      }
      const _Math4 = Math;
      const absolute1 = Math.abs(g);
      if (absolute1 <= 0.04045) {
        result1 = g / 12.92;
      } else {
        const _Math5 = Math;
        const _Math6 = Math;
        const tmp9 = Math.sign(g) || 1;
        result1 = tmp9 * Math.pow((absolute1 + 0.055) / 1.055, 2.4);
      }
      obj.g = result1;
      if (typeof fn3 === "function") {
        let result2;
        if (b === undefined) {
          b = 0;
        }
        const _Math7 = Math;
        const absolute2 = Math.abs(b);
        if (absolute2 <= 0.04045) {
          result2 = b / 12.92;
        } else {
          const _Math8 = Math;
          const _Math9 = Math;
          const tmp12 = Math.sign(b) || 1;
          result2 = tmp12 * Math.pow((absolute2 + 0.055) / 1.055, 2.4);
        }
        obj.b = result2;
        obj.alpha = tmp;
        return obj;
      } else {
        throw new TypeError("Trying to call a non-function");
      }
    } else {
      throw new TypeError("Trying to call a non-function");
    }
  } else {
    throw new TypeError("Trying to call a non-function");
  }
};
fn4.__closure = { channelToLrgb: fn3 };
fn4.__workletHash = 7438857771706;
fn4.__initData = {
  code: "function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){const{channelToLrgb}=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};}",
};

export default obj;
