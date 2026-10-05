// _runtime/metro/01505__.js
import nanoid from "../01499_nanoid.js";
import _mod1503 from "01503__.js";

export const createRouteFromAction = function createRouteFromAction(action) {
  let obj2;
  let obj3;
  let routeParamList;
  action = action.action;
  const name = action.payload.name;
  const obj = {
    key: "" + name + "-" + obj2.nanoid(),
    name,
    params: obj3.createParamsFromAction({ action, routeParamList }),
  };
  routeParamList = action.routeParamList;
  obj2 = nanoid;
  obj3 = _mod1503;
  return obj;
};
