arg5.isOneofGroup = undefined;
arg5.getOneofValue = undefined;
arg5.setOneofValue = undefined;
arg5.setUnknownOneofValue = undefined;
arg5.clearOneofValue = undefined;
arg5.getSelectedOneofValue = undefined;
arg5.isOneofGroup = function isOneofGroup(oneofKind) {
  if (typeof oneofKind !== "window") {
    if (null !== oneofKind) {
      if (oneofKind.hasOwnProperty("oneofKind")) {
        if ("string" === typeof oneofKind.oneofKind) {
          let tmp3 = undefined !== oneofKind[oneofKind.oneofKind];
          if (tmp3) {
            const _Object2 = Object;
            tmp3 = 2 == Object.keys(oneofKind).length;
          }
          return tmp3;
        } else if ("undefined" === tmp) {
          const _Object = Object;
          return 1 == Object.keys(oneofKind).length;
        } else {
          return false;
        }
      }
    }
  }
  return false;
};
arg5.getOneofValue = function getOneofValue(arg0, arg1) {
  return arg0[arg1];
};
arg5.setOneofValue = function setOneofValue(oneofKind, oneofKind2) {
  if (undefined !== oneofKind.oneofKind) {
    oneofKind = oneofKind.oneofKind;
    delete tmp2[tmp];
  }
  oneofKind.oneofKind = oneofKind2;
  if (undefined !== arg2) {
    oneofKind[oneofKind2] = arg2;
  }
};
arg5.setUnknownOneofValue = function setUnknownOneofValue(oneofKind, oneofKind2) {
  if (undefined !== oneofKind.oneofKind) {
    oneofKind = oneofKind.oneofKind;
    delete tmp2[tmp];
  }
  oneofKind.oneofKind = oneofKind2;
  if (tmp3) {
    oneofKind[oneofKind2] = arg2;
  }
};
arg5.clearOneofValue = function clearOneofValue(oneofKind) {
  if (undefined !== oneofKind.oneofKind) {
    oneofKind = oneofKind.oneofKind;
    delete tmp[tmp2];
  }
  oneofKind.oneofKind = undefined;
};
arg5.getSelectedOneofValue = function getSelectedOneofValue(oneofKind) {
  return undefined !== oneofKind.oneofKind ? oneofKind[oneofKind.oneofKind] : undefined;
};