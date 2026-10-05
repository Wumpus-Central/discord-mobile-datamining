// === Module 1503: ? ===

// Module 1503

export const createParamsFromAction = function createParamsFromAction(routeParamList) {
  let name;
  let params;
  routeParamList = routeParamList.routeParamList;
  ({ name, params } = routeParamList.action.payload);
  let tmp = params;
  if (undefined !== routeParamList[name]) {
    const obj = {};
    const merged = Object.assign(routeParamList[name]);
    const merged1 = Object.assign(params);
    tmp = obj;
  }
  return tmp;
};