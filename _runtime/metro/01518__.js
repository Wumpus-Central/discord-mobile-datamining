// _runtime/metro/01518__.js
import nanoid from "../01512_nanoid.js";
import _mod1516 from "01516__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1516.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
