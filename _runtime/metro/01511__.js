// === Module 1511: ? ===

// Module 1511

export function createParamsFromAction(routeParamList) {
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
}