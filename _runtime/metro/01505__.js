// _runtime/metro/01505__.js
import nanoid from "../01499_nanoid.js";
import _mod1503 from "01503__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1503.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
