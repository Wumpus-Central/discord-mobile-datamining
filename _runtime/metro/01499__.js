// _runtime/metro/01499__.js
import nanoid from "../01493_nanoid.js";
import _mod1497 from "01497__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1497.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
