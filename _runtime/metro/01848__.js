// === Module 1848: ? ===

// Module 1848
import "module_32";

let items = [{ code: "(function isAffineMatrixFlat_Pnpm_matrixUtilsTsx1(x){return Array.isArray(x)&&x.length===16&&x.every(function(element){return typeof element==='number'&&!isNaN(element);});})" }];
[tmp2] = items;
function isAffineMatrixFlat(arr) {
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 16 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((item) => {
      let tmp = typeof item === "number";
      if (typeof item === "number") {
        const _isNaN = isNaN;
        tmp = !isNaN(item);
      }
      return tmp;
    });
  }
  return isArray;
}
isAffineMatrixFlat.__workletHash = 17071803885375;
isAffineMatrixFlat.__initData = tmp2;
let items1 = [{ code: "(function isAffineMatrix_Pnpm_matrixUtilsTsx2(x){return Array.isArray(x)&&x.length===4&&x.every(function(row){return Array.isArray(row)&&row.length===4&&row.every(function(element){return typeof element==='number'&&!isNaN(element);});});})" }];
[tmp3] = items1;
function isAffineMatrix(arr) {
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 4 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((item) => {
          let tmp = typeof item === "number";
          if (typeof item === "number") {
            const _isNaN = isNaN;
            tmp = !isNaN(item);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  return isArray;
}
isAffineMatrix.__workletHash = 2373922661048;
isAffineMatrix.__initData = tmp3;
let items2 = [{ code: "(function flatten_Pnpm_matrixUtilsTsx3(matrix){return matrix.flat();})" }];
[tmp4] = items2;
function flatten(arr) {
  return arr.flat();
}
flatten.__workletHash = 1734334035009;
flatten.__initData = tmp4;
let items3 = [{ code: "(function unflatten_Pnpm_matrixUtilsTsx4(m){return[[m[0],m[1],m[2],m[3]],[m[4],m[5],m[6],m[7]],[m[8],m[9],m[10],m[11]],[m[12],m[13],m[14],m[15]]];})" }];
[tmp5] = items3;
function unflatten(arg0) {
  items = [, , , ];
  [arr[0], arr[1], arr[2], arr[3]] = arg0;
  const items1 = [items, , , ];
  const items2 = [arg0[4], arg0[5], arg0[6], arg0[7]];
  items1[1] = items2;
  const items3 = [arg0[8], arg0[9], arg0[10], arg0[11]];
  items1[2] = items3;
  const items4 = [arg0[12], arg0[13], arg0[14], arg0[15]];
  items1[3] = items4;
  return items1;
}
unflatten.__workletHash = 10927668448618;
unflatten.__initData = tmp5;
let items4 = [{ code: "(function maybeFlattenMatrix_Pnpm_matrixUtilsTsx5(matrix){let[isAffineMatrix,flatten]=this.__closure;return isAffineMatrix(matrix)?flatten(matrix):matrix;})" }, isAffineMatrix, flatten];
let closure_129_0;
let closure_129_1;
[tmp6, tmp7, tmp8] = items4;
function maybeFlattenMatrix(arg0) {
  let tmp = arg0;
  if (_slicedToArray(arg0)) {
    tmp = _undefined(arg0);
  }
  return tmp;
}
let items5 = [tmp7, tmp8];
maybeFlattenMatrix.__closure = items5;
maybeFlattenMatrix.__workletHash = 8438695427635;
maybeFlattenMatrix.__initData = tmp6;
let items6 = [{ code: "(function multiplyMatrices_Pnpm_matrixUtilsTsx6(a,b){return[[a[0][0]*b[0][0]+a[0][1]*b[1][0]+a[0][2]*b[2][0]+a[0][3]*b[3][0],a[0][0]*b[0][1]+a[0][1]*b[1][1]+a[0][2]*b[2][1]+a[0][3]*b[3][1],a[0][0]*b[0][2]+a[0][1]*b[1][2]+a[0][2]*b[2][2]+a[0][3]*b[3][2],a[0][0]*b[0][3]+a[0][1]*b[1][3]+a[0][2]*b[2][3]+a[0][3]*b[3][3]],[a[1][0]*b[0][0]+a[1][1]*b[1][0]+a[1][2]*b[2][0]+a[1][3]*b[3][0],a[1][0]*b[0][1]+a[1][1]*b[1][1]+a[1][2]*b[2][1]+a[1][3]*b[3][1],a[1][0]*b[0][2]+a[1][1]*b[1][2]+a[1][2]*b[2][2]+a[1][3]*b[3][2],a[1][0]*b[0][3]+a[1][1]*b[1][3]+a[1][2]*b[2][3]+a[1][3]*b[3][3]],[a[2][0]*b[0][0]+a[2][1]*b[1][0]+a[2][2]*b[2][0]+a[2][3]*b[3][0],a[2][0]*b[0][1]+a[2][1]*b[1][1]+a[2][2]*b[2][1]+a[2][3]*b[3][1],a[2][0]*b[0][2]+a[2][1]*b[1][2]+a[2][2]*b[2][2]+a[2][3]*b[3][2],a[2][0]*b[0][3]+a[2][1]*b[1][3]+a[2][2]*b[2][3]+a[2][3]*b[3][3]],[a[3][0]*b[0][0]+a[3][1]*b[1][0]+a[3][2]*b[2][0]+a[3][3]*b[3][0],a[3][0]*b[0][1]+a[3][1]*b[1][1]+a[3][2]*b[2][1]+a[3][3]*b[3][1],a[3][0]*b[0][2]+a[3][1]*b[1][2]+a[3][2]*b[2][2]+a[3][3]*b[3][2],a[3][0]*b[0][3]+a[3][1]*b[1][3]+a[3][2]*b[2][3]+a[3][3]*b[3][3]]];})" }];
[tmp9] = items6;
function multiplyMatrices(arg0, arg1) {
  items = [arg0[0][0] * arg1[0][0] + arg0[0][1] * arg1[1][0] + arg0[0][2] * arg1[2][0] + arg0[0][3] * arg1[3][0], arg0[0][0] * arg1[0][1] + arg0[0][1] * arg1[1][1] + arg0[0][2] * arg1[2][1] + arg0[0][3] * arg1[3][1], arg0[0][0] * arg1[0][2] + arg0[0][1] * arg1[1][2] + arg0[0][2] * arg1[2][2] + arg0[0][3] * arg1[3][2], arg0[0][0] * arg1[0][3] + arg0[0][1] * arg1[1][3] + arg0[0][2] * arg1[2][3] + arg0[0][3] * arg1[3][3]];
  const items1 = [items, , , ];
  const items2 = [arg0[1][0] * arg1[0][0] + arg0[1][1] * arg1[1][0] + arg0[1][2] * arg1[2][0] + arg0[1][3] * arg1[3][0], arg0[1][0] * arg1[0][1] + arg0[1][1] * arg1[1][1] + arg0[1][2] * arg1[2][1] + arg0[1][3] * arg1[3][1], arg0[1][0] * arg1[0][2] + arg0[1][1] * arg1[1][2] + arg0[1][2] * arg1[2][2] + arg0[1][3] * arg1[3][2], arg0[1][0] * arg1[0][3] + arg0[1][1] * arg1[1][3] + arg0[1][2] * arg1[2][3] + arg0[1][3] * arg1[3][3]];
  items1[1] = items2;
  const items3 = [arg0[2][0] * arg1[0][0] + arg0[2][1] * arg1[1][0] + arg0[2][2] * arg1[2][0] + arg0[2][3] * arg1[3][0], arg0[2][0] * arg1[0][1] + arg0[2][1] * arg1[1][1] + arg0[2][2] * arg1[2][1] + arg0[2][3] * arg1[3][1], arg0[2][0] * arg1[0][2] + arg0[2][1] * arg1[1][2] + arg0[2][2] * arg1[2][2] + arg0[2][3] * arg1[3][2], arg0[2][0] * arg1[0][3] + arg0[2][1] * arg1[1][3] + arg0[2][2] * arg1[2][3] + arg0[2][3] * arg1[3][3]];
  items1[2] = items3;
  const items4 = [arg0[3][0] * arg1[0][0] + arg0[3][1] * arg1[1][0] + arg0[3][2] * arg1[2][0] + arg0[3][3] * arg1[3][0], arg0[3][0] * arg1[0][1] + arg0[3][1] * arg1[1][1] + arg0[3][2] * arg1[2][1] + arg0[3][3] * arg1[3][1], arg0[3][0] * arg1[0][2] + arg0[3][1] * arg1[1][2] + arg0[3][2] * arg1[2][2] + arg0[3][3] * arg1[3][2], arg0[3][0] * arg1[0][3] + arg0[3][1] * arg1[1][3] + arg0[3][2] * arg1[2][3] + arg0[3][3] * arg1[3][3]];
  items1[3] = items4;
  return items1;
}
multiplyMatrices.__workletHash = 6730746262187;
multiplyMatrices.__initData = tmp9;
let items7 = [{ code: "(function subtractMatrices_Pnpm_matrixUtilsTsx7(maybeFlatA,maybeFlatB){let[isAffineMatrixFlat,maybeFlattenMatrix,unflatten]=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]-b[i];});return isFlatOnStart?c:unflatten(c);})" }, isAffineMatrixFlat, maybeFlattenMatrix, unflatten];
let closure_130_0;
let closure_130_1;
let closure_130_2;
[tmp10, tmp11, tmp12, tmp13] = items7;
function subtractMatrices(arg0, arg1) {
  const tmp = _slicedToArray(arg0);
  closure_1 = _undefined(arg1);
  const mapped = _undefined(arg0).map((item, index) => arr[index] - closure_1[index]);
  let tmp3 = mapped;
  if (!tmp) {
    tmp3 = _undefined2(mapped);
  }
  return tmp3;
}
let items8 = [tmp11, tmp12, tmp13];
subtractMatrices.__closure = items8;
subtractMatrices.__workletHash = 10556552826861;
subtractMatrices.__initData = tmp10;
let items9 = [{ code: "(function addMatrices_Pnpm_matrixUtilsTsx8(maybeFlatA,maybeFlatB){let[isAffineMatrixFlat,maybeFlattenMatrix,unflatten]=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]+b[i];});return isFlatOnStart?c:unflatten(c);})" }, isAffineMatrixFlat, maybeFlattenMatrix, unflatten];
let closure_131_0;
let closure_131_1;
let closure_131_2;
[tmp14, tmp15, tmp16, tmp17] = items9;
function addMatrices(arg0, arg1) {
  const tmp = _slicedToArray(arg0);
  closure_1 = _undefined(arg1);
  const mapped = _undefined(arg0).map((item, index) => arr[index] + closure_1[index]);
  let tmp3 = mapped;
  if (!tmp) {
    tmp3 = _undefined2(mapped);
  }
  return tmp3;
}
let items10 = [tmp15, tmp16, tmp17];
addMatrices.__closure = items10;
addMatrices.__workletHash = 6692620800593;
addMatrices.__initData = tmp14;
const items11 = [{ code: "(function scaleMatrix_Pnpm_matrixUtilsTsx9(maybeFlatA,scalar){let[isAffineMatrixFlat,maybeFlattenMatrix,unflatten]=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=a.map(function(x){return x*scalar;});return isFlatOnStart?b:unflatten(b);})" }, isAffineMatrixFlat, maybeFlattenMatrix, unflatten];
let closure_132_0;
let closure_132_1;
let closure_132_2;
[tmp18, tmp19, tmp20, tmp21] = items11;
function scaleMatrix(arg0, arg1) {
  closure_0 = arg1;
  const tmp = _slicedToArray(arg0);
  const mapped = _undefined(arg0).map((item) => item * closure_0);
  let tmp3 = mapped;
  if (!tmp) {
    tmp3 = _undefined2(mapped);
  }
  return tmp3;
}
const items12 = [tmp19, tmp20, tmp21];
scaleMatrix.__closure = items12;
scaleMatrix.__workletHash = 16741898956404;
scaleMatrix.__initData = tmp18;
const items13 = [{ code: "(function getRotationMatrix_Pnpm_matrixUtilsTsx10(angle,axis='z'){const cos=Math.cos(angle);const sin=Math.sin(angle);switch(axis){case'z':return[[cos,sin,0,0],[-sin,cos,0,0],[0,0,1,0],[0,0,0,1]];case'y':return[[cos,0,-sin,0],[0,1,0,0],[sin,0,cos,0],[0,0,0,1]];case'x':return[[1,0,0,0],[0,cos,sin,0],[0,-sin,cos,0],[0,0,0,1]];}})" }];
[tmp22] = items13;
function getRotationMatrix(c0) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "z";
  }
  const cosResult = Math.cos(c0);
  const sinResult = Math.sin(c0);
  if ("z" === str) {
    items = [cosResult, sinResult, 0, 0];
    const items1 = [items, , , ];
    const items2 = [-sinResult, cosResult, 0, 0];
    items1[1] = items2;
    items1[2] = [0, 0, 1, 0];
    items1[3] = [0, 0, 0, 1];
    return items1;
  } else if ("y" === str) {
    const items3 = [cosResult, 0, -sinResult, 0];
    const items4 = [items3, [0, 1, 0, 0], , ];
    const items5 = [sinResult, 0, cosResult, 0];
    items4[2] = items5;
    items4[3] = [0, 0, 0, 1];
    return items4;
  } else if ("x" === str) {
    const items6 = [[1, 0, 0, 0], , , ];
    const items7 = [0, cosResult, sinResult, 0];
    items6[1] = items7;
    const items8 = [0, -sinResult, cosResult, 0];
    items6[2] = items8;
    items6[3] = [0, 0, 0, 1];
    return items6;
  }
}
getRotationMatrix.__workletHash = 12656811347575;
getRotationMatrix.__initData = tmp22;
const items14 = [{ code: "(function norm3d_Pnpm_matrixUtilsTsx11(x,y,z){return Math.sqrt(x*x+y*y+z*z);})" }];
[tmp23] = items14;
function norm3d(arg0, arg1, arg2) {
  return Math.sqrt(arg0 * arg0 + arg1 * arg1 + arg2 * arg2);
}
norm3d.__workletHash = 1937689488481;
norm3d.__initData = tmp23;
const items15 = [{ code: "(function transposeMatrix_Pnpm_matrixUtilsTsx12(matrix){let[flatten]=this.__closure;const m=flatten(matrix);return[[m[0],m[4],m[8],m[12]],[m[1],m[5],m[9],m[13]],[m[2],m[6],m[10],m[14]],[m[3],m[7],m[11],m[15]]];})" }, flatten];
let closure_133_0;
[tmp24, tmp25] = items15;
function transposeMatrix(arg0) {
  const tmp = _slicedToArray(arg0);
  items = [tmp[0], tmp[4], tmp[8], tmp[12]];
  const items1 = [items, , , ];
  const items2 = [tmp[1], tmp[5], tmp[9], tmp[13]];
  items1[1] = items2;
  const items3 = [tmp[2], tmp[6], tmp[10], tmp[14]];
  items1[2] = items3;
  const items4 = [tmp[3], tmp[7], tmp[11], tmp[15]];
  items1[3] = items4;
  return items1;
}
const items16 = [tmp25];
transposeMatrix.__closure = items16;
transposeMatrix.__workletHash = 17065680609896;
transposeMatrix.__initData = tmp24;
const items17 = [{ code: "(function assertVectorsHaveEqualLengths_Pnpm_matrixUtilsTsx13(a,b){let[__DEV__]=this.__closure;if(__DEV__&&a.length!==b.length){throw new Error(\"[Reanimated] Cannot calculate inner product of two vectors of different lengths. Length of \"+a.toString()+\" is \"+a.length+\" and length of \"+b.toString()+\" is \"+b.length+\".\");}})" }, false];
let closure_134_0;
[tmp26, tmp27] = items17;
function assertVectorsHaveEqualLengths(arg0, arg1) {
  if (_slicedToArray) {
    if (arg0.length !== arg1.length) {
      const _Error = Error;
      const _HermesInternal = HermesInternal;
      const error = new Error("[Reanimated] Cannot calculate inner product of two vectors of different lengths. Length of " + arg0.toString() + " is " + arg0.length + " and length of " + arg1.toString() + " is " + arg1.length + ".");
      throw error;
    }
  }
}
const items18 = [tmp27];
assertVectorsHaveEqualLengths.__closure = items18;
assertVectorsHaveEqualLengths.__workletHash = 4121485237480;
assertVectorsHaveEqualLengths.__initData = tmp26;
const items19 = [{ code: "(function innerProduct_Pnpm_matrixUtilsTsx14(a,b){let[assertVectorsHaveEqualLengths]=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.reduce(function(acc,_,i){return acc+a[i]*b[i];},0);})" }, assertVectorsHaveEqualLengths];
let closure_135_0;
[tmp28, tmp29] = items19;
function innerProduct(arr, arg1) {
  closure_0 = arr;
  closure_1 = arg1;
  _slicedToArray(arr, arg1);
  return arr.reduce((acc, item, index) => acc + closure_0[index] * closure_1[index], 0);
}
const items20 = [tmp29];
innerProduct.__closure = items20;
innerProduct.__workletHash = 6402058169246;
innerProduct.__initData = tmp28;
const items21 = [{ code: "(function projection_Pnpm_matrixUtilsTsx15(u,a){let[assertVectorsHaveEqualLengths,innerProduct]=this.__closure;assertVectorsHaveEqualLengths(u,a);const s=innerProduct(u,a)/innerProduct(u,u);return u.map(function(e){return e*s;});})" }, assertVectorsHaveEqualLengths, innerProduct];
let closure_136_0;
let closure_136_1;
[tmp30, tmp31, tmp32] = items21;
function projection(arr, arg1) {
  _slicedToArray(arr, arg1);
  closure_0 = _undefined(arr, arg1) / _undefined(arr, arr);
  return arr.map((item) => item * closure_0);
}
const items22 = [tmp31, tmp32];
projection.__closure = items22;
projection.__workletHash = 8489801458972;
projection.__initData = tmp30;
const items23 = [{ code: "(function subtractVectors_Pnpm_matrixUtilsTsx16(a,b){let[assertVectorsHaveEqualLengths]=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.map(function(_,i){return a[i]-b[i];});})" }, assertVectorsHaveEqualLengths];
let closure_137_0;
[tmp33, tmp34] = items23;
function subtractVectors(arr, arg1) {
  closure_0 = arr;
  closure_1 = arg1;
  _slicedToArray(arr, arg1);
  return arr.map((item, index) => closure_0[index] - closure_1[index]);
}
const items24 = [tmp34];
subtractVectors.__closure = items24;
subtractVectors.__workletHash = 1663683837815;
subtractVectors.__initData = tmp33;
const items25 = [{ code: "(function scaleVector_Pnpm_matrixUtilsTsx17(u,a){return u.map(function(e){return e*a;});})" }];
[tmp35] = items25;
function scaleVector(arr, arg1) {
  closure_0 = arg1;
  return arr.map((item) => item * closure_0);
}
scaleVector.__workletHash = 6105665414148;
scaleVector.__initData = tmp35;
const items26 = [{ code: "(function gramSchmidtAlgorithm_Pnpm_matrixUtilsTsx18(matrix){let[subtractVectors,projection,scaleVector,innerProduct,transposeMatrix]=this.__closure;const[a0,a1,a2,a3]=matrix;const u0=a0;const u1=subtractVectors(a1,projection(u0,a1));const u2=subtractVectors(subtractVectors(a2,projection(u0,a2)),projection(u1,a2));const u3=subtractVectors(subtractVectors(subtractVectors(a3,projection(u0,a3)),projection(u1,a3)),projection(u2,a3));const[e0,e1,e2,e3]=[u0,u1,u2,u3].map(function(u){return scaleVector(u,1/Math.sqrt(innerProduct(u,u)));});const rotationMatrix=[[e0[0],e1[0],e2[0],e3[0]],[e0[1],e1[1],e2[1],e3[1]],[e0[2],e1[2],e2[2],e3[2]],[e0[3],e1[3],e2[3],e3[3]]];const skewMatrix=[[innerProduct(e0,a0),innerProduct(e0,a1),innerProduct(e0,a2),innerProduct(e0,a3)],[0,innerProduct(e1,a1),innerProduct(e1,a2),innerProduct(e1,a3)],[0,0,innerProduct(e2,a2),innerProduct(e2,a3)],[0,0,0,innerProduct(e3,a3)]];return{rotationMatrix:transposeMatrix(rotationMatrix),skewMatrix:transposeMatrix(skewMatrix)};})" }, subtractVectors, projection, scaleVector, innerProduct, transposeMatrix];
let _slicedToArray;
let c1;
let c2;
let c3;
let c4;
[tmp36, tmp37, tmp38, tmp39, tmp40, tmp41] = items26;
function gramSchmidtAlgorithm(arg0) {
  [tmp2, tmp3, tmp4, tmp5] = arg0;
  const tmp6 = _slicedToArray(tmp3, _undefined(tmp2, tmp3));
  const tmp = _slicedToArray(arg0, 4);
  const tmp8 = _slicedToArray(_slicedToArray(tmp4, _undefined(tmp2, tmp4)), _undefined(tmp6, tmp4));
  items = [tmp2, tmp6, tmp8, ];
  const tmp7 = _slicedToArray(tmp4, _undefined(tmp2, tmp4));
  const tmp9 = _slicedToArray(tmp5, _undefined(tmp2, tmp5));
  items[3] = _slicedToArray(_slicedToArray(_slicedToArray(tmp5, _undefined(tmp2, tmp5)), _undefined(tmp6, tmp5)), _undefined(tmp8, tmp5));
  const tmp10 = _slicedToArray(_slicedToArray(tmp5, _undefined(tmp2, tmp5)), _undefined(tmp6, tmp5));
  [tmp12, tmp13, tmp14, tmp15] = items.map((item) => _undefined2(item, 1 / Math.sqrt(_undefined3(item, item))));
  const items1 = [tmp12[0], tmp13[0], tmp14[0], tmp15[0]];
  const items2 = [items1, , , ];
  const items3 = [tmp12[1], tmp13[1], tmp14[1], tmp15[1]];
  items2[1] = items3;
  const items4 = [tmp12[2], tmp13[2], tmp14[2], tmp15[2]];
  items2[2] = items4;
  const items5 = [tmp12[3], tmp13[3], tmp14[3], tmp15[3]];
  items2[3] = items5;
  const items6 = [_undefined3(tmp12, tmp2), _undefined3(tmp12, tmp3), _undefined3(tmp12, tmp4), _undefined3(tmp12, tmp5)];
  const items7 = [items6, , , ];
  const items8 = [0, _undefined3(tmp13, tmp3), _undefined3(tmp13, tmp4), _undefined3(tmp13, tmp5)];
  items7[1] = items8;
  const items9 = [0, 0, _undefined3(tmp14, tmp4), _undefined3(tmp14, tmp5)];
  items7[2] = items9;
  const items10 = [0, 0, 0, _undefined3(tmp15, tmp5)];
  items7[3] = items10;
  const tmp11 = _slicedToArray(items.map((item) => _undefined2(item, 1 / Math.sqrt(_undefined3(item, item)))), 4);
  return { rotationMatrix: _undefined4(items2), skewMatrix: _undefined4(items7) };
}
const items27 = [tmp37, tmp38, tmp39, tmp40, tmp41];
gramSchmidtAlgorithm.__closure = items27;
gramSchmidtAlgorithm.__workletHash = 2858953883362;
gramSchmidtAlgorithm.__initData = tmp36;
const items28 = [{ code: "(function decomposeMatrix_Pnpm_matrixUtilsTsx19(unknownTypeMatrix){let[maybeFlattenMatrix,norm3d,gramSchmidtAlgorithm]=this.__closure;const matrix=maybeFlattenMatrix(unknownTypeMatrix);if(matrix[15]===0){throw new Error('[Reanimated] Invalid transform matrix.');}matrix.forEach(function(_,i){return matrix[i]/=matrix[15];});const translationMatrix=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[matrix[12],matrix[13],matrix[14],1]];const sx=matrix[15]*norm3d(matrix[0],matrix[4],matrix[8]);const sy=matrix[15]*norm3d(matrix[1],matrix[5],matrix[9]);const sz=matrix[15]*norm3d(matrix[2],matrix[6],matrix[10]);const scaleMatrix=[[sx,0,0,0],[0,sy,0,0],[0,0,sz,0],[0,0,0,1]];const rotationAndSkewMatrix=[[matrix[0]/sx,matrix[1]/sx,matrix[2]/sx,0],[matrix[4]/sy,matrix[5]/sy,matrix[6]/sy,0],[matrix[8]/sz,matrix[9]/sz,matrix[10]/sz,0],[0,0,0,1]];const{rotationMatrix:rotationMatrix,skewMatrix:skewMatrix}=gramSchmidtAlgorithm(rotationAndSkewMatrix);return{translationMatrix:translationMatrix,scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,skewMatrix:skewMatrix};})" }, maybeFlattenMatrix, norm3d, gramSchmidtAlgorithm];
let closure_138_0;
let closure_138_1;
let closure_138_2;
[tmp42, tmp43, tmp44, tmp45] = items28;
function decomposeMatrix(arg0) {
  const arr = _slicedToArray(arg0);
  if (0 === arr[15]) {
    const _Error = Error;
    const error = new Error("[Reanimated] Invalid transform matrix.");
    throw error;
  } else {
    const item = arr.forEach((item, index) => {
      const result = arr[index] / arr[15];
      arr[index] = result;
      return result;
    });
    items = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], ];
    const items1 = [arr[12], arr[13], arr[14], 1];
    items[3] = items1;
    let result = arr[15] * _undefined(arr[0], arr[4], arr[8]);
    const result1 = arr[15] * _undefined(arr[1], arr[5], arr[9]);
    const result2 = arr[15] * _undefined(arr[2], arr[6], arr[10]);
    const items2 = [result, 0, 0, 0];
    const items3 = [items2, , , ];
    const items4 = [0, result1, 0, 0];
    items3[1] = items4;
    const items5 = [0, 0, result2, 0];
    items3[2] = items5;
    items3[3] = [0, 0, 0, 1];
    const items6 = [arr[0] / result, arr[1] / result, arr[2] / result, 0];
    const items7 = [items6, , , ];
    const items8 = [arr[4] / result1, arr[5] / result1, arr[6] / result1, 0];
    items7[1] = items8;
    const items9 = [arr[8] / result2, arr[9] / result2, arr[10] / result2, 0];
    items7[2] = items9;
    items7[3] = [0, 0, 0, 1];
    const obj = { translationMatrix: items, scaleMatrix: items3, rotationMatrix: null, skewMatrix: null };
    ({ rotationMatrix: obj.rotationMatrix, skewMatrix: obj.skewMatrix } = _undefined2(items7));
    return obj;
  }
}
const items29 = [tmp43, tmp44, tmp45];
decomposeMatrix.__closure = items29;
decomposeMatrix.__workletHash = 7676825914490;
decomposeMatrix.__initData = tmp42;
const items30 = [{ code: "(function decomposeMatrixIntoMatricesAndAngles_Pnpm_matrixUtilsTsx20(matrix){let[decomposeMatrix]=this.__closure;const{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix}=decomposeMatrix(matrix);const sinRy=-rotationMatrix[0][2];const ry=Math.asin(sinRy);let rx;let rz;if(sinRy===1||sinRy===-1){rz=0;rx=Math.atan2(sinRy*rotationMatrix[0][1],sinRy*rotationMatrix[0][2]);}else{rz=Math.atan2(rotationMatrix[0][1],rotationMatrix[0][0]);rx=Math.atan2(rotationMatrix[1][2],rotationMatrix[2][2]);}return{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix,rx:rx||0,ry:ry||0,rz:rz||0};})" }, decomposeMatrix];
let closure_139_0;
[tmp46, tmp47] = items30;
function decomposeMatrixIntoMatricesAndAngles(arg0) {
  const tmp = _slicedToArray(arg0);
  const rotationMatrix = tmp.rotationMatrix;
  ({ scaleMatrix, translationMatrix, skewMatrix } = tmp);
  let num = Math.asin(tmp2);
  if (1 !== -rotationMatrix[0][2]) {
    if (-1 !== tmp2) {
      const _Math = Math;
      let num3 = Math.atan2(rotationMatrix[0][1], rotationMatrix[0][0]);
      const _Math2 = Math;
      let num4 = Math.atan2(rotationMatrix[1][2], rotationMatrix[2][2]);
    }
    const obj = { scaleMatrix, rotationMatrix, translationMatrix, skewMatrix, rx: null, ry: null, rz: null };
    if (!num4) {
      num4 = 0;
    }
    obj.rx = num4;
    if (!num) {
      num = 0;
    }
    obj.ry = num;
    if (!num3) {
      num3 = 0;
    }
    obj.rz = num3;
    return obj;
  }
  num4 = Math.atan2(tmp2 * rotationMatrix[0][1], tmp2 * rotationMatrix[0][2]);
  num3 = 0;
}
const items31 = [tmp47];
decomposeMatrixIntoMatricesAndAngles.__closure = items31;
decomposeMatrixIntoMatricesAndAngles.__workletHash = 12326617770484;
decomposeMatrixIntoMatricesAndAngles.__initData = tmp46;

export { isAffineMatrixFlat };
export { isAffineMatrix };
export { flatten };
export { unflatten };
export { multiplyMatrices };
export { subtractMatrices };
export { addMatrices };
export { scaleMatrix };
export { getRotationMatrix };
export { decomposeMatrix };
export { decomposeMatrixIntoMatricesAndAngles };