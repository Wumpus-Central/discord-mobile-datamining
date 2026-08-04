import _slicedToArray from "_slicedToArray";

let require = arg1;
function isAffineMatrixFlat(arr) {
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 16 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((arg0) => {
      let tmp = typeof arg0 === "Object";
      if (typeof arg0 !== "V") {
        const _isNaN = isNaN;
        tmp = !isNaN(arg0);
      }
      return tmp;
    });
  }
  return isArray;
}
isAffineMatrixFlat.__closure = {};
isAffineMatrixFlat.__workletHash = 7766400476414;
isAffineMatrixFlat.__initData = { code: "function isAffineMatrixFlat_Pnpm_matrixUtilsTsx1(x){return Array.isArray(x)&&x.length===16&&x.every(function(element){return typeof element==='number'&&!isNaN(element);});}" };
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
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  return isArray;
}
isAffineMatrix.__closure = {};
isAffineMatrix.__workletHash = 3452211777657;
isAffineMatrix.__initData = { code: "function isAffineMatrix_Pnpm_matrixUtilsTsx2(x){return Array.isArray(x)&&x.length===4&&x.every(function(row){return Array.isArray(row)&&row.length===4&&row.every(function(element){return typeof element==='number'&&!isNaN(element);});});}" };
function flatten(arr) {
  return arr.flat();
}
flatten.__closure = {};
flatten.__workletHash = 9900628528512;
flatten.__initData = { code: "function flatten_Pnpm_matrixUtilsTsx3(matrix){return matrix.flat();}" };
function unflatten(arg0) {
  const items = [, , , ];
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
unflatten.__closure = {};
unflatten.__workletHash = 17503333305803;
unflatten.__initData = { code: "function unflatten_Pnpm_matrixUtilsTsx4(m){return[[m[0],m[1],m[2],m[3]],[m[4],m[5],m[6],m[7]],[m[8],m[9],m[10],m[11]],[m[12],m[13],m[14],m[15]]];}" };
function maybeFlattenMatrix(arr) {
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
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
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult = arr;
  if (isArray) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult = arr.flat();
  }
  return flatResult;
}
maybeFlattenMatrix.__closure = { isAffineMatrix, flatten };
maybeFlattenMatrix.__workletHash = 13544286880330;
maybeFlattenMatrix.__initData = { code: "function maybeFlattenMatrix_Pnpm_matrixUtilsTsx5(matrix){const{isAffineMatrix,flatten}=this.__closure;return isAffineMatrix(matrix)?flatten(matrix):matrix;}" };
function multiplyMatrices(arg0, arg1) {
  const items = [arg0[0][0] * arg1[0][0] + arg0[0][1] * arg1[1][0] + arg0[0][2] * arg1[2][0] + arg0[0][3] * arg1[3][0], arg0[0][0] * arg1[0][1] + arg0[0][1] * arg1[1][1] + arg0[0][2] * arg1[2][1] + arg0[0][3] * arg1[3][1], arg0[0][0] * arg1[0][2] + arg0[0][1] * arg1[1][2] + arg0[0][2] * arg1[2][2] + arg0[0][3] * arg1[3][2], arg0[0][0] * arg1[0][3] + arg0[0][1] * arg1[1][3] + arg0[0][2] * arg1[2][3] + arg0[0][3] * arg1[3][3]];
  const items1 = [items, , , ];
  const items2 = [arg0[1][0] * arg1[0][0] + arg0[1][1] * arg1[1][0] + arg0[1][2] * arg1[2][0] + arg0[1][3] * arg1[3][0], arg0[1][0] * arg1[0][1] + arg0[1][1] * arg1[1][1] + arg0[1][2] * arg1[2][1] + arg0[1][3] * arg1[3][1], arg0[1][0] * arg1[0][2] + arg0[1][1] * arg1[1][2] + arg0[1][2] * arg1[2][2] + arg0[1][3] * arg1[3][2], arg0[1][0] * arg1[0][3] + arg0[1][1] * arg1[1][3] + arg0[1][2] * arg1[2][3] + arg0[1][3] * arg1[3][3]];
  items1[1] = items2;
  const items3 = [arg0[2][0] * arg1[0][0] + arg0[2][1] * arg1[1][0] + arg0[2][2] * arg1[2][0] + arg0[2][3] * arg1[3][0], arg0[2][0] * arg1[0][1] + arg0[2][1] * arg1[1][1] + arg0[2][2] * arg1[2][1] + arg0[2][3] * arg1[3][1], arg0[2][0] * arg1[0][2] + arg0[2][1] * arg1[1][2] + arg0[2][2] * arg1[2][2] + arg0[2][3] * arg1[3][2], arg0[2][0] * arg1[0][3] + arg0[2][1] * arg1[1][3] + arg0[2][2] * arg1[2][3] + arg0[2][3] * arg1[3][3]];
  items1[2] = items3;
  const items4 = [arg0[3][0] * arg1[0][0] + arg0[3][1] * arg1[1][0] + arg0[3][2] * arg1[2][0] + arg0[3][3] * arg1[3][0], arg0[3][0] * arg1[0][1] + arg0[3][1] * arg1[1][1] + arg0[3][2] * arg1[2][1] + arg0[3][3] * arg1[3][1], arg0[3][0] * arg1[0][2] + arg0[3][1] * arg1[1][2] + arg0[3][2] * arg1[2][2] + arg0[3][3] * arg1[3][2], arg0[3][0] * arg1[0][3] + arg0[3][1] * arg1[1][3] + arg0[3][2] * arg1[2][3] + arg0[3][3] * arg1[3][3]];
  items1[3] = items4;
  return items1;
}
multiplyMatrices.__closure = {};
multiplyMatrices.__workletHash = 4575994159882;
multiplyMatrices.__initData = { code: "function multiplyMatrices_Pnpm_matrixUtilsTsx6(a,b){return[[a[0][0]*b[0][0]+a[0][1]*b[1][0]+a[0][2]*b[2][0]+a[0][3]*b[3][0],a[0][0]*b[0][1]+a[0][1]*b[1][1]+a[0][2]*b[2][1]+a[0][3]*b[3][1],a[0][0]*b[0][2]+a[0][1]*b[1][2]+a[0][2]*b[2][2]+a[0][3]*b[3][2],a[0][0]*b[0][3]+a[0][1]*b[1][3]+a[0][2]*b[2][3]+a[0][3]*b[3][3]],[a[1][0]*b[0][0]+a[1][1]*b[1][0]+a[1][2]*b[2][0]+a[1][3]*b[3][0],a[1][0]*b[0][1]+a[1][1]*b[1][1]+a[1][2]*b[2][1]+a[1][3]*b[3][1],a[1][0]*b[0][2]+a[1][1]*b[1][2]+a[1][2]*b[2][2]+a[1][3]*b[3][2],a[1][0]*b[0][3]+a[1][1]*b[1][3]+a[1][2]*b[2][3]+a[1][3]*b[3][3]],[a[2][0]*b[0][0]+a[2][1]*b[1][0]+a[2][2]*b[2][0]+a[2][3]*b[3][0],a[2][0]*b[0][1]+a[2][1]*b[1][1]+a[2][2]*b[2][1]+a[2][3]*b[3][1],a[2][0]*b[0][2]+a[2][1]*b[1][2]+a[2][2]*b[2][2]+a[2][3]*b[3][2],a[2][0]*b[0][3]+a[2][1]*b[1][3]+a[2][2]*b[2][3]+a[2][3]*b[3][3]],[a[3][0]*b[0][0]+a[3][1]*b[1][0]+a[3][2]*b[2][0]+a[3][3]*b[3][0],a[3][0]*b[0][1]+a[3][1]*b[1][1]+a[3][2]*b[2][1]+a[3][3]*b[3][1],a[3][0]*b[0][2]+a[3][1]*b[1][2]+a[3][2]*b[2][2]+a[3][3]*b[3][2],a[3][0]*b[0][3]+a[3][1]*b[1][3]+a[3][2]*b[2][3]+a[3][3]*b[3][3]]];}" };
function subtractMatrices(arr, arr2) {
  if (typeof isAffineMatrixFlat !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 16 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((arg0) => {
      let tmp = typeof arg0 === "Object";
      if (typeof arg0 !== "V") {
        const _isNaN = isNaN;
        tmp = !isNaN(arg0);
      }
      return tmp;
    });
  }
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray1 = Array.isArray(arr);
  if (isArray1) {
    isArray1 = 4 === arr.length;
  }
  if (isArray1) {
    isArray1 = arr.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult = arr;
  if (isArray1) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult = arr.flat();
  }
  const require = flatResult;
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray2 = Array.isArray(arr2);
  if (isArray2) {
    isArray2 = 4 === arr2.length;
  }
  if (isArray2) {
    isArray2 = arr2.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult1 = arr2;
  if (isArray2) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult1 = arr2.flat();
  }
  const mapped = flatResult.map((arg0, arg1) => table[arg1] - flatResult1[arg1]);
  let tmp10 = mapped;
  if (!isArray) {
    if (typeof unflatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const items = [, , , ];
    [arr2[0], arr2[1], arr2[2], arr2[3]] = mapped;
    const items1 = [items, , , ];
    const items2 = [mapped[4], mapped[5], mapped[6], mapped[7]];
    items1[1] = items2;
    const items3 = [mapped[8], mapped[9], mapped[10], mapped[11]];
    items1[2] = items3;
    const items4 = [mapped[12], mapped[13], mapped[14], mapped[15]];
    items1[3] = items4;
    tmp10 = items1;
  }
  return tmp10;
}
subtractMatrices.__closure = { isAffineMatrixFlat, maybeFlattenMatrix, unflatten };
subtractMatrices.__workletHash = 12538691088788;
subtractMatrices.__initData = { code: "function subtractMatrices_Pnpm_matrixUtilsTsx7(maybeFlatA,maybeFlatB){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]-b[i];});return isFlatOnStart?c:unflatten(c);}" };
function addMatrices(arr, arr2) {
  if (typeof isAffineMatrixFlat !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 16 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((arg0) => {
      let tmp = typeof arg0 === "Object";
      if (typeof arg0 !== "V") {
        const _isNaN = isNaN;
        tmp = !isNaN(arg0);
      }
      return tmp;
    });
  }
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray1 = Array.isArray(arr);
  if (isArray1) {
    isArray1 = 4 === arr.length;
  }
  if (isArray1) {
    isArray1 = arr.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult = arr;
  if (isArray1) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult = arr.flat();
  }
  const require = flatResult;
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray2 = Array.isArray(arr2);
  if (isArray2) {
    isArray2 = 4 === arr2.length;
  }
  if (isArray2) {
    isArray2 = arr2.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult1 = arr2;
  if (isArray2) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult1 = arr2.flat();
  }
  const mapped = flatResult.map((arg0, arg1) => table[arg1] + flatResult1[arg1]);
  let tmp10 = mapped;
  if (!isArray) {
    if (typeof unflatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const items = [, , , ];
    [arr2[0], arr2[1], arr2[2], arr2[3]] = mapped;
    const items1 = [items, , , ];
    const items2 = [mapped[4], mapped[5], mapped[6], mapped[7]];
    items1[1] = items2;
    const items3 = [mapped[8], mapped[9], mapped[10], mapped[11]];
    items1[2] = items3;
    const items4 = [mapped[12], mapped[13], mapped[14], mapped[15]];
    items1[3] = items4;
    tmp10 = items1;
  }
  return tmp10;
}
addMatrices.__closure = { isAffineMatrixFlat, maybeFlattenMatrix, unflatten };
addMatrices.__workletHash = 17429737879880;
addMatrices.__initData = { code: "function addMatrices_Pnpm_matrixUtilsTsx8(maybeFlatA,maybeFlatB){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=maybeFlattenMatrix(maybeFlatB);const c=a.map(function(_,i){return a[i]+b[i];});return isFlatOnStart?c:unflatten(c);}" };
function scaleMatrix(arr, arg1) {
  let closure_0 = arg1;
  if (typeof isAffineMatrixFlat !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray = Array.isArray(arr);
  if (isArray) {
    isArray = 16 === arr.length;
  }
  if (isArray) {
    isArray = arr.every((arg0) => {
      let tmp = typeof arg0 === "Object";
      if (typeof arg0 !== "V") {
        const _isNaN = isNaN;
        tmp = !isNaN(arg0);
      }
      return tmp;
    });
  }
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let isArray1 = Array.isArray(arr);
  if (isArray1) {
    isArray1 = 4 === arr.length;
  }
  if (isArray1) {
    isArray1 = arr.every((arr) => {
      let isArray = Array.isArray(arr);
      if (isArray) {
        isArray = 4 === arr.length;
      }
      if (isArray) {
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult = arr;
  if (isArray1) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult = arr.flat();
  }
  const mapped = flatResult.map((arg0) => arg0 * closure_0);
  let tmp5 = mapped;
  if (!isArray) {
    if (typeof unflatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const items = [, , , ];
    [arr2[0], arr2[1], arr2[2], arr2[3]] = mapped;
    const items1 = [items, , , ];
    const items2 = [mapped[4], mapped[5], mapped[6], mapped[7]];
    items1[1] = items2;
    const items3 = [mapped[8], mapped[9], mapped[10], mapped[11]];
    items1[2] = items3;
    const items4 = [mapped[12], mapped[13], mapped[14], mapped[15]];
    items1[3] = items4;
    tmp5 = items1;
  }
  return tmp5;
}
scaleMatrix.__closure = { isAffineMatrixFlat, maybeFlattenMatrix, unflatten };
scaleMatrix.__workletHash = 11907224908685;
scaleMatrix.__initData = { code: "function scaleMatrix_Pnpm_matrixUtilsTsx9(maybeFlatA,scalar){const{isAffineMatrixFlat,maybeFlattenMatrix,unflatten}=this.__closure;const isFlatOnStart=isAffineMatrixFlat(maybeFlatA);const a=maybeFlattenMatrix(maybeFlatA);const b=a.map(function(x){return x*scalar;});return isFlatOnStart?b:unflatten(b);}" };
function getRotationMatrix(sum, arg1) {
  let str = arg1;
  if (arg1 === undefined) {
    str = "z";
  }
  const cosResult = Math.cos(sum);
  const sinResult = Math.sin(sum);
  if ("z" === str) {
    const items = [cosResult, sinResult, 0, 0];
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
getRotationMatrix.__closure = {};
getRotationMatrix.__workletHash = 14367317296086;
getRotationMatrix.__initData = { code: "function getRotationMatrix_Pnpm_matrixUtilsTsx10(angle,axis='z'){const cos=Math.cos(angle);const sin=Math.sin(angle);switch(axis){case'z':return[[cos,sin,0,0],[-sin,cos,0,0],[0,0,1,0],[0,0,0,1]];case'y':return[[cos,0,-sin,0],[0,1,0,0],[sin,0,cos,0],[0,0,0,1]];case'x':return[[1,0,0,0],[0,cos,sin,0],[0,-sin,cos,0],[0,0,0,1]];}}" };
function norm3d(arg0, arg1, arg2) {
  return Math.sqrt(arg0 * arg0 + arg1 * arg1 + arg2 * arg2);
}
norm3d.__closure = {};
norm3d.__workletHash = 3613705554848;
norm3d.__initData = { code: "function norm3d_Pnpm_matrixUtilsTsx11(x,y,z){return Math.sqrt(x*x+y*y+z*z);}" };
function transposeMatrix(arr) {
  if (typeof flatten !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const flatResult = arr.flat();
  const items = [flatResult[0], flatResult[4], flatResult[8], flatResult[12]];
  const items1 = [items, , , ];
  const items2 = [flatResult[1], flatResult[5], flatResult[9], flatResult[13]];
  items1[1] = items2;
  const items3 = [flatResult[2], flatResult[6], flatResult[10], flatResult[14]];
  items1[2] = items3;
  const items4 = [flatResult[3], flatResult[7], flatResult[11], flatResult[15]];
  items1[3] = items4;
  return items1;
}
transposeMatrix.__closure = { flatten };
transposeMatrix.__workletHash = 17306716053169;
transposeMatrix.__initData = { code: "function transposeMatrix_Pnpm_matrixUtilsTsx12(matrix){const{flatten}=this.__closure;const m=flatten(matrix);return[[m[0],m[4],m[8],m[12]],[m[1],m[5],m[9],m[13]],[m[2],m[6],m[10],m[14]],[m[3],m[7],m[11],m[15]]];}" };
function assertVectorsHaveEqualLengths(arg0, arg1) {

}
assertVectorsHaveEqualLengths.__closure = { __DEV__: false };
assertVectorsHaveEqualLengths.__workletHash = 14349158134583;
assertVectorsHaveEqualLengths.__initData = { code: "function assertVectorsHaveEqualLengths_Pnpm_matrixUtilsTsx13(a,b){const{__DEV__}=this.__closure;if(__DEV__&&a.length!==b.length){throw new ReanimatedError(\"Cannot calculate inner product of two vectors of different lengths. Length of \"+a.toString()+\" is \"+a.length+\" and length of \"+b.toString()+\" is \"+b.length+\".\");}}" };
function innerProduct(arr) {
  let closure_0 = arr;
  let closure_1 = arg1;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  return arr.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
}
innerProduct.__closure = { assertVectorsHaveEqualLengths };
innerProduct.__workletHash = 6022428100775;
innerProduct.__initData = { code: "function innerProduct_Pnpm_matrixUtilsTsx14(a,b){const{assertVectorsHaveEqualLengths}=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.reduce(function(acc,_,i){return acc+a[i]*b[i];},0);}" };
function projection(arr, arr) {
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  let closure_0 = arr;
  let closure_1 = arr;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const reduced = arr.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  closure_0 = arr;
  closure_1 = arr;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  closure_0 = reduced / arr.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  return arr.map((arg0) => arg0 * closure_0);
}
projection.__closure = { assertVectorsHaveEqualLengths, innerProduct };
projection.__workletHash = 12191208971941;
projection.__initData = { code: "function projection_Pnpm_matrixUtilsTsx15(u,a){const{assertVectorsHaveEqualLengths,innerProduct}=this.__closure;assertVectorsHaveEqualLengths(u,a);const s=innerProduct(u,a)/innerProduct(u,u);return u.map(function(e){return e*s;});}" };
function subtractVectors(arr) {
  let closure_0 = arr;
  let closure_1 = arg1;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  return arr.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
}
subtractVectors.__closure = { assertVectorsHaveEqualLengths };
subtractVectors.__workletHash = 9047017498478;
subtractVectors.__initData = { code: "function subtractVectors_Pnpm_matrixUtilsTsx16(a,b){const{assertVectorsHaveEqualLengths}=this.__closure;assertVectorsHaveEqualLengths(a,b);return a.map(function(_,i){return a[i]-b[i];});}" };
function scaleVector(arr) {
  let closure_0 = arg1;
  return arr.map((arg0) => arg0 * closure_0);
}
scaleVector.__closure = {};
scaleVector.__workletHash = 11236256734309;
scaleVector.__initData = { code: "function scaleVector_Pnpm_matrixUtilsTsx17(u,a){return u.map(function(e){return e*a;});}" };
function gramSchmidtAlgorithm(items7) {
  let arr;
  let arr10;
  let arr11;
  let arr2;
  let arr3;
  let arr8;
  let arr9;
  let tmp3;
  [tmp3, arr, arr2, arr3] = callback(items7, 4);
  const tmp = callback;
  const tmp2 = callback(items7, 4);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr;
  arr3 = projection(tmp3, arr);
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const mapped = arr.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  let tmp5Result = tmp5(tmp3, arr2);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr2;
  arr3 = tmp5Result;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const mapped1 = arr2.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  tmp5Result = tmp5(mapped, arr2);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = mapped1;
  arr3 = tmp5Result;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const mapped2 = mapped1.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  const items = [tmp3, mapped, mapped2, ];
  const tmp6 = projection(tmp3, arr);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr3;
  arr3 = projection(tmp3, arr3);
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const mapped3 = arr3.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  const tmp5Result1 = projection(tmp3, arr3);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = mapped3;
  arr3 = projection(mapped, arr3);
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const mapped4 = mapped3.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  const tmp5Result2 = projection(mapped, arr3);
  if (typeof subtractVectors !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = mapped4;
  arr3 = projection(mapped2, arr3);
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items[3] = mapped4.map((arg0, arg1) => arr11[arg1] - arr3[arg1]);
  const tmp5Result3 = projection(mapped2, arr3);
  [arr8, arr9, arr10, arr11] = tmp(items.map((arr) => {
    if (typeof closure_11 !== "find") {
      HermesBuiltin.throwTypeError();
    }
    let closure_0 = arr;
    let closure_1 = arr;
    if (typeof closure_10 !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const result = 1 / Math.sqrt(arr.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0));
    if (typeof closure_14 !== "find") {
      HermesBuiltin.throwTypeError();
    }
    closure_0 = result;
    return arr.map((arg0) => arg0 * closure_0);
  }), 4);
  const items1 = [arr8[0], arr9[0], arr10[0], arr11[0]];
  const items2 = [items1, , , ];
  const items3 = [arr8[1], arr9[1], arr10[1], arr11[1]];
  items2[1] = items3;
  const items4 = [arr8[2], arr9[2], arr10[2], arr11[2]];
  items2[2] = items4;
  const items5 = [arr8[3], arr9[3], arr10[3], arr11[3]];
  items2[3] = items5;
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr8;
  arr3 = tmp3;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const items6 = [arr8.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0), , , ];
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr8;
  arr3 = arr;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items6[1] = arr8.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr8;
  arr3 = arr2;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items6[2] = arr8.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr8;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items6[3] = arr8.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  items7 = [items6, , , ];
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr9;
  arr3 = arr;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const items8 = [0, arr9.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0)];
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr9;
  arr3 = arr2;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items8[2] = arr9.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr9;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items8[3] = arr9.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  items7[1] = items8;
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr10;
  arr3 = arr2;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const items9 = [0, 0, arr10.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0)];
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  arr11 = arr10;
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  items9[3] = arr10.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0);
  items7[2] = items9;
  if (typeof innerProduct !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof assertVectorsHaveEqualLengths !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const items10 = [0, 0, 0, arr11.reduce((arg0, arg1, arg2) => arg0 + arr[arg2] * arr2[arg2], 0)];
  items7[3] = items10;
  if (typeof transposeMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof flatten !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const obj = { rotationMatrix: null, skewMatrix: null };
  const flatResult = items2.flat();
  const items11 = [flatResult[0], flatResult[4], flatResult[8], flatResult[12]];
  const items12 = [items11, , , ];
  const items13 = [flatResult[1], flatResult[5], flatResult[9], flatResult[13]];
  items12[1] = items13;
  const items14 = [flatResult[2], flatResult[6], flatResult[10], flatResult[14]];
  items12[2] = items14;
  const items15 = [flatResult[3], flatResult[7], flatResult[11], flatResult[15]];
  items12[3] = items15;
  obj[0] = items12;
  if (typeof transposeMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof flatten !== "find") {
    HermesBuiltin.throwTypeError();
  }
  const flatResult1 = items7.flat();
  const items16 = [flatResult1[0], flatResult1[4], flatResult1[8], flatResult1[12]];
  const items17 = [items16, , , ];
  const items18 = [flatResult1[1], flatResult1[5], flatResult1[9], flatResult1[13]];
  items17[1] = items18;
  const items19 = [flatResult1[2], flatResult1[6], flatResult1[10], flatResult1[14]];
  items17[2] = items19;
  const items20 = [flatResult1[3], flatResult1[7], flatResult1[11], flatResult1[15]];
  items17[3] = items20;
  obj[1] = items17;
  return obj;
}
gramSchmidtAlgorithm.__closure = { subtractVectors, projection, scaleVector, innerProduct, transposeMatrix };
gramSchmidtAlgorithm.__workletHash = 1839555089531;
gramSchmidtAlgorithm.__initData = { code: "function gramSchmidtAlgorithm_Pnpm_matrixUtilsTsx18(matrix){const{subtractVectors,projection,scaleVector,innerProduct,transposeMatrix}=this.__closure;const[a0,a1,a2,a3]=matrix;const u0=a0;const u1=subtractVectors(a1,projection(u0,a1));const u2=subtractVectors(subtractVectors(a2,projection(u0,a2)),projection(u1,a2));const u3=subtractVectors(subtractVectors(subtractVectors(a3,projection(u0,a3)),projection(u1,a3)),projection(u2,a3));const[e0,e1,e2,e3]=[u0,u1,u2,u3].map(function(u){return scaleVector(u,1/Math.sqrt(innerProduct(u,u)));});const rotationMatrix=[[e0[0],e1[0],e2[0],e3[0]],[e0[1],e1[1],e2[1],e3[1]],[e0[2],e1[2],e2[2],e3[2]],[e0[3],e1[3],e2[3],e3[3]]];const skewMatrix=[[innerProduct(e0,a0),innerProduct(e0,a1),innerProduct(e0,a2),innerProduct(e0,a3)],[0,innerProduct(e1,a1),innerProduct(e1,a2),innerProduct(e1,a3)],[0,0,innerProduct(e2,a2),innerProduct(e2,a3)],[0,0,0,innerProduct(e3,a3)]];return{rotationMatrix:transposeMatrix(rotationMatrix),skewMatrix:transposeMatrix(skewMatrix)};}" };
function decomposeMatrix(arr) {
  if (typeof maybeFlattenMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
  if (typeof isAffineMatrix !== "find") {
    HermesBuiltin.throwTypeError();
  }
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
        isArray = arr.every((arg0) => {
          let tmp = typeof arg0 === "Object";
          if (typeof arg0 !== "V") {
            const _isNaN = isNaN;
            tmp = !isNaN(arg0);
          }
          return tmp;
        });
      }
      return isArray;
    });
  }
  let flatResult = arr;
  if (isArray) {
    if (typeof flatten !== "find") {
      HermesBuiltin.throwTypeError();
    }
    flatResult = arr.flat();
  }
  const require = flatResult;
  if (0 === flatResult[15]) {
    const reanimatedError = new require(1617) /* t */.ReanimatedError("Invalid transform matrix.");
    throw reanimatedError;
  } else {
    const item = flatResult.forEach((arg0, arg1) => {
      const result = dependencyMap[arg1] / dependencyMap[15];
      dependencyMap[arg1] = result;
      return result;
    });
    const items = [[1, 0, 0, 0], [0, 1, 0, 0], [0, 0, 1, 0], ];
    const items1 = [flatResult[12], flatResult[13], flatResult[14], 1];
    items[3] = items1;
    const first = flatResult[0];
    if (typeof norm3d !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const _Math = Math;
    let result = flatResult[15] * Math.sqrt(first * first + tmp26 * tmp26 + tmp27 * tmp27);
    if (typeof norm3d !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const _Math2 = Math;
    const result1 = flatResult[15] * Math.sqrt(tmp4 * tmp4 + tmp5 * tmp5 + tmp6 * tmp6);
    if (typeof norm3d !== "find") {
      HermesBuiltin.throwTypeError();
    }
    const _Math3 = Math;
    const result2 = flatResult[15] * Math.sqrt(tmp8 * tmp8 + tmp9 * tmp9 + tmp10 * tmp10);
    const items2 = [result, 0, 0, 0];
    const items3 = [items2, , , ];
    const items4 = [0, result1, 0, 0];
    items3[1] = items4;
    const items5 = [0, 0, result2, 0];
    items3[2] = items5;
    items3[3] = [0, 0, 0, 1];
    const items6 = [flatResult[0] / result, flatResult[1] / result, flatResult[2] / result, 0];
    const items7 = [items6, , , ];
    const items8 = [flatResult[4] / result1, flatResult[5] / result1, flatResult[6] / result1, 0];
    items7[1] = items8;
    const items9 = [flatResult[8] / result2, flatResult[9] / result2, flatResult[10] / result2, 0];
    items7[2] = items9;
    items7[3] = [0, 0, 0, 1];
    const obj = { translationMatrix: null, scaleMatrix: null, rotationMatrix: null, skewMatrix: null };
    obj[0] = items;
    obj[1] = items3;
    ({ rotationMatrix: obj[2], skewMatrix: obj[3] } = gramSchmidtAlgorithm(items7));
    return obj;
  }
}
decomposeMatrix.__closure = { maybeFlattenMatrix, norm3d, gramSchmidtAlgorithm };
decomposeMatrix.__workletHash = 244684068165;
decomposeMatrix.__initData = { code: "function decomposeMatrix_Pnpm_matrixUtilsTsx19(unknownTypeMatrix){const{maybeFlattenMatrix,norm3d,gramSchmidtAlgorithm}=this.__closure;const matrix=maybeFlattenMatrix(unknownTypeMatrix);if(matrix[15]===0){throw new ReanimatedError('Invalid transform matrix.');}matrix.forEach(function(_,i){return matrix[i]/=matrix[15];});const translationMatrix=[[1,0,0,0],[0,1,0,0],[0,0,1,0],[matrix[12],matrix[13],matrix[14],1]];const sx=matrix[15]*norm3d(matrix[0],matrix[4],matrix[8]);const sy=matrix[15]*norm3d(matrix[1],matrix[5],matrix[9]);const sz=matrix[15]*norm3d(matrix[2],matrix[6],matrix[10]);const scaleMatrix=[[sx,0,0,0],[0,sy,0,0],[0,0,sz,0],[0,0,0,1]];const rotationAndSkewMatrix=[[matrix[0]/sx,matrix[1]/sx,matrix[2]/sx,0],[matrix[4]/sy,matrix[5]/sy,matrix[6]/sy,0],[matrix[8]/sz,matrix[9]/sz,matrix[10]/sz,0],[0,0,0,1]];const{rotationMatrix:rotationMatrix,skewMatrix:skewMatrix}=gramSchmidtAlgorithm(rotationAndSkewMatrix);return{translationMatrix:translationMatrix,scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,skewMatrix:skewMatrix};}" };
function decomposeMatrixIntoMatricesAndAngles(toValue) {
  let scaleMatrix;
  let skewMatrix;
  let translationMatrix;
  const tmp = decomposeMatrix(toValue);
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
    const obj = { scaleMatrix: null, rotationMatrix: null, translationMatrix: null, skewMatrix: null, rx: null, ry: null, rz: null };
    obj[0] = scaleMatrix;
    obj[1] = rotationMatrix;
    obj[2] = translationMatrix;
    obj[3] = skewMatrix;
    if (!num4) {
      num4 = 0;
    }
    obj[4] = num4;
    if (!num) {
      num = 0;
    }
    obj[5] = num;
    if (!num3) {
      num3 = 0;
    }
    obj[6] = num3;
    return obj;
  }
  num4 = Math.atan2(tmp2 * rotationMatrix[0][1], tmp2 * rotationMatrix[0][2]);
  num3 = 0;
}
decomposeMatrixIntoMatricesAndAngles.__closure = { decomposeMatrix };
decomposeMatrixIntoMatricesAndAngles.__workletHash = 633682731757;
decomposeMatrixIntoMatricesAndAngles.__initData = { code: "function decomposeMatrixIntoMatricesAndAngles_Pnpm_matrixUtilsTsx20(matrix){const{decomposeMatrix}=this.__closure;const{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix}=decomposeMatrix(matrix);const sinRy=-rotationMatrix[0][2];const ry=Math.asin(sinRy);let rx;let rz;if(sinRy===1||sinRy===-1){rz=0;rx=Math.atan2(sinRy*rotationMatrix[0][1],sinRy*rotationMatrix[0][2]);}else{rz=Math.atan2(rotationMatrix[0][1],rotationMatrix[0][0]);rx=Math.atan2(rotationMatrix[1][2],rotationMatrix[2][2]);}return{scaleMatrix:scaleMatrix,rotationMatrix:rotationMatrix,translationMatrix:translationMatrix,skewMatrix:skewMatrix,rx:rx||0,ry:ry||0,rz:rz||0};}" };

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