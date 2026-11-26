// _runtime/metro/01516__.js
import nanoid from "../01510_nanoid.js";
import _mod1514 from "01514__.js";

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1514.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}
