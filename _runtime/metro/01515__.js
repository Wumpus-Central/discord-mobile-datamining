// _runtime/metro/01515__.js
import nanoid from "../01509_nanoid.js";
import _mod1513 from "01513__.js";

require = arg1;
const dependencyMap = arg6;

export function createRouteFromAction(routeParamList) {
  const action = routeParamList.action;
  const name = action.payload.name;
  const obj = { key: "" + name + "-" + nanoid.nanoid(), name, params: null };
  obj.params = _mod1513.createParamsFromAction({ action, routeParamList: routeParamList.routeParamList });
  return obj;
}
