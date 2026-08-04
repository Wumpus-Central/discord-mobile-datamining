// _runtime/00619_baseIsArguments.js

export default function baseIsArguments(arg0) {
  let tmp3 = require(620) /* isObjectLike */(arg0);
  if (tmp3) {
    tmp3 = "[object Arguments]" == require(607) /* toStringTag */(arg0);
  }
  return tmp3;
};