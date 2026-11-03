// _runtime/metro/01514__.js
import nanoid from "../01508_nanoid.js";
import _mod1512 from "01512__.js";

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1512.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}
