// _runtime/metro/01513__.js
import nanoid from "../01507_nanoid.js";
import _mod1511 from "01511__.js";

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1511.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}
