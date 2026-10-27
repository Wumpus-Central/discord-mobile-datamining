// _runtime/metro/01517__.js
import nanoid from "../01511_nanoid.js";
import _mod1515 from "01515__.js";

require = arg1;
const dependencyMap = arg6;

export const createRouteFromAction = function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1515.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
};
