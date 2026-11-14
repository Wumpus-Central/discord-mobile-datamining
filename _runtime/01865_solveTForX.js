// === Module 1865: solveTForX ===

// Module 1865 (solveTForX)
let items = [{ code: "(function solveTForX_Pnpm_BezierTs1(x,a,b,c){const j=1/Math.max(c,Math.sqrt(x));const k=x*j;const l=k*j;const s=c*j;const q=b*l;const m=s*s+q;const h=-s*(s*s+1.5*q)-a*k*l;const D=h*h-m*m*m;let v;if(m===0||D>1e-12*h*h){const U=-Math.cbrt(h<0?h-Math.sqrt(D):h+Math.sqrt(D));v=U+m/U||0;}else{const r=Math.sqrt(m);v=2*r*Math.cos(Math.acos(Math.max(-1,Math.min(1,-h/(m*r))))/3);}return Math.min(1,k/(v+s));})" }];
[tmp2] = items;
function solveTForX(items, arg1, arg2, arg3) {
  const result = 1 / Math.max(arg3, Math.sqrt(items));
  const result1 = items * result;
  const result2 = result1 * result;
  const result3 = arg3 * result;
  const result4 = arg2 * result2;
  const result5 = result3 * result3;
  const sum = result5 + result4;
  const diff = -result3 * (result5 + 1.5 * result4) - arg1 * result1 * result2;
  const diff1 = diff * diff - sum * sum * sum;
  if (0 !== sum) {
    if (0.000000000001 * diff * diff >= diff1) {
      const _Math4 = Math;
      const sqrtResult = Math.sqrt(sum);
      const _Math5 = Math;
      const _Math6 = Math;
      const _Math7 = Math;
      const _Math8 = Math;
      const result6 = 2 * sqrtResult;
      let result7 = result6 * Math.cos(Math.acos(Math.max(-1, Math.min(1, -diff / (sum * sqrtResult)))) / 3);
    }
    const _Math3 = Math;
    return Math.min(1, result1 / (result7 + result3));
  }
  if (diff < 0) {
    const _Math2 = Math;
    let diff2 = diff - Math.sqrt(diff1);
  } else {
    const _Math = Math;
    diff2 = diff + Math.sqrt(diff1);
  }
  const tmp11 = -Math.cbrt(diff2);
  result7 = tmp11 + sum / tmp11 || 0;
}
solveTForX.__workletHash = 7806626643803;
solveTForX.__initData = tmp2;
let items1 = [{ code: "(function Bezier_Pnpm_BezierTs4(mX1,mY1,mX2,mY2){let[_worklet_191332468781_init_data,_worklet_1591445944816_init_data,solveTForX]=this.__closure;const LinearEasing=function Bezier_Pnpm_BezierTs4([_worklet_191332468781_init_data]){const LinearEasing=function(x){return x;};LinearEasing.__workletHash=191332468781;LinearEasing.__initData=_worklet_191332468781_init_data;return LinearEasing;}([_worklet_191332468781_init_data]);if(!(mX1>=0&&mX1<=1&&mX2>=0&&mX2<=1)){throw new Error('[Reanimated] Bezier x values must be in [0, 1] range.');}if(mX1===mY1&&mX2===mY2){return LinearEasing;}const a=(3*mX1-3*mX2+1)/2;const b=mX2-2*mX1;const c=mX1;const ay=3*mY1-3*mY2+1;const by=3*(mY2-2*mY1);const cy=3*mY1;return function BezierEasing_Pnpm_BezierTs3Factory([_worklet_1591445944816_init_data,solveTForX,a,b,c,ay,by,cy]){const BezierEasing=function(x){if(x<=0){return 0;}if(x>=1){return 1;}const t=solveTForX(x,a,b,c);return((ay*t+by)*t+cy)*t;};BezierEasing.__closure=[solveTForX,a,b,c,ay,by,cy];BezierEasing.__workletHash=1591445944816;BezierEasing.__initData=_worklet_1591445944816_init_data;return BezierEasing;}([_worklet_1591445944816_init_data,solveTForX,a,b,c,ay,by,cy]);})" }, { code: "(function LinearEasing_Pnpm_BezierTs2(x){return x;})" }, { code: "(function BezierEasing_Pnpm_BezierTs3(x){let[solveTForX,a,b,c,ay,by,cy]=this.__closure;if(x<=0){return 0;}if(x>=1){return 1;}const t=solveTForX(x,a,b,c);return((ay*t+by)*t+cy)*t;})" }, solveTForX];
let c0;
let c1;
let c2;
[tmp3, tmp4, tmp5, tmp6] = items1;
class Bezier {
  constructor(arg0, arg1, arg2, arg3) {
    items = [];
    items[0] = closure_0;
    [tmp] = items;
    class LinearEasing {
      constructor(arg0) {
        return arg0;
      }
    }
    LinearEasing.__workletHash = 191332468781;
    LinearEasing.__initData = tmp;
    if (arg0 >= 0) {
      num = 1;
      if (arg0 <= 1) {
        tmp2 = arg2;
        if (arg2 >= 0) {
          if (arg2 <= 1) {
            tmp4 = arg1;
            tmp5 = arg3;
            if (arg0 !== arg1) {
              tmp6 = closure_1;
              items1 = [, , , , , , , ];
              items1[0] = closure_1;
              tmp7 = closure_2;
              items1[1] = closure_2;
              num2 = 3;
              class LinearEasing {
                constructor(arg0) {
                  return arg0;
                }
              }
              items1[2] = (3 * arg0 - 3 * arg2 + 1) / 2;
              items1[3] = arg2 - 2 * arg0;
              items1[4] = arg0;
              items1[5] = 3 * arg1 - 3 * arg3 + 1;
              items1[6] = 3 * (arg3 - 2 * arg1);
              items1[7] = 3 * arg1;
              closure_0 = undefined;
              closure_1 = undefined;
              closure_2 = undefined;
              closure_3 = undefined;
              closure_4 = undefined;
              closure_5 = undefined;
              closure_6 = undefined;
              tmp8 = items1;
              [tmp9, tmp10, tmp11, tmp12, tmp13, tmp14, tmp15, tmp16] = items1;
              class BezierEasing {
                constructor(arg0) {
                  if (arg0 <= 0) {
                    return 0;
                  } else {
                    num = 1;
                    if (arg0 >= 1) {
                      return 1;
                    } else {
                      tmp = closure_0;
                      tmp2 = closure_1;
                      tmp3 = closure_2;
                      tmp4 = closure_3;
                      tmp5 = arg0;
                      tmp6 = closure_0(arg0, closure_1, closure_2, closure_3);
                      tmp7 = closure_4;
                      tmp8 = closure_5;
                      tmp9 = closure_6;
                      return ((closure_4 * tmp6 + closure_5) * tmp6 + closure_6) * tmp6;
                    }
                  }
                }
              }
              items2 = [, , , , , , ];
              items2[0] = tmp10;
              items2[1] = tmp11;
              items2[2] = tmp12;
              items2[3] = tmp13;
              items2[4] = tmp14;
              items2[5] = tmp15;
              items2[6] = tmp16;
              BezierEasing.__closure = items2;
              num3 = 1591445944816;
              BezierEasing.__workletHash = 1591445944816;
              BezierEasing.__initData = tmp9;
              LinearEasing = BezierEasing;
            }
            return LinearEasing;
          }
        }
      }
    }
    error = new Error("[Reanimated] Bezier x values must be in [0, 1] range.");
    throw error;
  }
}
let items2 = [tmp4, tmp5, tmp6];
Bezier.__closure = items2;
Bezier.__workletHash = 8786803679344;
Bezier.__initData = tmp3;

export { Bezier };