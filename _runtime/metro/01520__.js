// _runtime/metro/01520__.js
import nanoid from "../01514_nanoid.js";
import _mod1518 from "01518__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1518.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
