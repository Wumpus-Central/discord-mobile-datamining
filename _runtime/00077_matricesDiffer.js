// _runtime/00077_matricesDiffer.js
arg5.default = function matricesDiffer(arg0, arg1) {
  let tmp = arg0 !== arg1;
  if (tmp) {
    let tmp2 = !arg0;
    if (arg0) {
      tmp2 = !arg1;
    }
    if (!tmp2) {
      tmp2 = arg0[12] !== arg1[12];
    }
    if (!tmp2) {
      tmp2 = arg0[13] !== arg1[13];
    }
    if (!tmp2) {
      tmp2 = arg0[14] !== arg1[14];
    }
    if (!tmp2) {
      tmp2 = arg0[5] !== arg1[5];
    }
    if (!tmp2) {
      tmp2 = arg0[10] !== arg1[10];
    }
    if (!tmp2) {
      tmp2 = arg0[0] !== arg1[0];
    }
    if (!tmp2) {
      tmp2 = arg0[1] !== arg1[1];
    }
    if (!tmp2) {
      tmp2 = arg0[2] !== arg1[2];
    }
    if (!tmp2) {
      tmp2 = arg0[3] !== arg1[3];
    }
    if (!tmp2) {
      tmp2 = arg0[4] !== arg1[4];
    }
    if (!tmp2) {
      tmp2 = arg0[6] !== arg1[6];
    }
    if (!tmp2) {
      tmp2 = arg0[7] !== arg1[7];
    }
    if (!tmp2) {
      tmp2 = arg0[8] !== arg1[8];
    }
    if (!tmp2) {
      tmp2 = arg0[9] !== arg1[9];
    }
    if (!tmp2) {
      tmp2 = arg0[11] !== arg1[11];
    }
    if (!tmp2) {
      tmp2 = arg0[15] !== arg1[15];
    }
    tmp = tmp2;
  }
  return tmp;
};