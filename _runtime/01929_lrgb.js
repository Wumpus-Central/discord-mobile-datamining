// _runtime/01929_lrgb.js
const items = [
  {
    code: "(function pnpm_lrgbTs1(c=0){const abs=Math.abs(c);if(abs>0.0031308){return(Math.sign(c)||1)*(1.055*Math.pow(abs,1/2.4)-0.055);}return c*12.92;})",
  },
];
[tmp2] = items;
function pnpm_lrgbTs1() {
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
}
pnpm_lrgbTs1.__workletHash = 5265218603714;
pnpm_lrgbTs1.__initData = tmp2;
const items1 = [
  {
    code: "(function pnpm_lrgbTs2({r:r,g:g,b:b,alpha:alpha}){let[channelFromLrgb]=this.__closure;return{r:channelFromLrgb(r),g:channelFromLrgb(g),b:channelFromLrgb(b),alpha:alpha};})",
  },
  pnpm_lrgbTs1,
];
let c0;
[tmp3, tmp4] = items1;
function pnpm_lrgbTs2(arg0) {
  ({ g, b, alpha } = arg0);
  return { r: _undefined(arg0.r), g: _undefined(g), b: _undefined(b), alpha };
}
const items2 = [tmp4];
pnpm_lrgbTs2.__closure = items2;
pnpm_lrgbTs2.__workletHash = 7397840547621;
pnpm_lrgbTs2.__initData = tmp3;
const items3 = [
  {
    code: "(function pnpm_lrgbTs3(c=0){const abs=Math.abs(c);if(abs<=0.04045){return c/12.92;}return(Math.sign(c)||1)*Math.pow((abs+0.055)/1.055,2.4);})",
  },
];
[tmp5] = items3;
function pnpm_lrgbTs3() {
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
}
pnpm_lrgbTs3.__workletHash = 12729944084267;
pnpm_lrgbTs3.__initData = tmp5;
const items4 = [
  {
    code: "(function pnpm_lrgbTs4({r:r,g:g,b:b,alpha:alpha}){let[channelToLrgb]=this.__closure;return{r:channelToLrgb(r),g:channelToLrgb(g),b:channelToLrgb(b),alpha:alpha};})",
  },
  pnpm_lrgbTs3,
];
let closure_129_0;
[tmp6, tmp7] = items4;
function pnpm_lrgbTs4(arg0) {
  ({ g, b, alpha } = arg0);
  return { r: _undefined(arg0.r), g: _undefined(g), b: _undefined(b), alpha };
}
const items5 = [tmp7];
pnpm_lrgbTs4.__closure = items5;
pnpm_lrgbTs4.__workletHash = 11818237099427;
pnpm_lrgbTs4.__initData = tmp6;

export default { convert: { fromRgb: pnpm_lrgbTs4, toRgb: pnpm_lrgbTs2 } };
