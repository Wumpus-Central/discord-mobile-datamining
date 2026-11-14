// === Module 7238: conjurePageRoutes ===

// Module 7238 (conjurePageRoutes)
import Constants from "Constants" /* 1072 */;
import ChannelConstants from "ChannelConstants" /* 5162 */;
import matchPathCompat from "matchPathCompat" /* 5354 */;
import RouteUtils from "RouteUtils" /* 5367 */;
import size from "module_2" /* 2 */;

const Routes = Constants.Routes;
const StaticChannelRoute = ChannelConstants.StaticChannelRoute;
const items = [Routes.CONJURE, Routes.CONJURE_PROJECT(":projectId")];
const RouteParam = RouteUtils.RouteParam;
const CHANNELResult = Routes.CHANNEL(RouteParam.guildId(), StaticChannelRoute.CONJURE_PROJECT, ":projectId");
const hasOwnProperty = CHANNELResult;
const result = size.fileFinishedImporting("modules/conjure/pages/conjurePageRoutes.tsx");

export const CONJURE_PAGE_PATHS = items;
export function conjurePageRoute(arg0) {
  if (null == arg0) {
    let CONJURE = Routes.CONJURE;
  } else {
    CONJURE = Routes.CONJURE_PROJECT(arg0);
  }
  return CONJURE;
}
export function isConjurePagePath(pathname) {
  return null != matchPathCompat.matchPath(pathname, { path: items, exact: true });
}
export const CONJURE_SERVER_PROJECT_PATH = CHANNELResult;
export function conjureServerProjectRoute(guildId, arg1) {
  return Routes.CHANNEL(guildId, StaticChannelRoute.CONJURE_PROJECT, arg1);
}
export function conjureServerHomeRoute(arg0) {
  return Routes.CHANNEL(arg0, StaticChannelRoute.CONJURE);
}
export function conjurePageProjectId(pathname) {
  const obj = matchPathCompat;
  const matchPathResult = obj.matchPath(pathname, { path: Routes.CONJURE_PROJECT(":projectId"), exact: true });
  let projectId;
  if (matchPathResult != null) {
    projectId = matchPathResult.params.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}
export function conjureOpenProjectId(pathname) {
  const obj = matchPathCompat;
  const matchPathResult = obj.matchPath(pathname, { path: Routes.CONJURE_PROJECT(":projectId"), exact: true });
  let projectId;
  if (matchPathResult != null) {
    projectId = matchPathResult.params.projectId;
  }
  if (projectId == null) {
    projectId = null;
  }
  if (projectId == null) {
    const obj3 = { path: CHANNELResult, exact: true };
    const matchPathResult1 = matchPathCompat.matchPath(pathname, obj3);
    let projectId1;
    if (matchPathResult1 != null) {
      projectId1 = matchPathResult1.params.projectId;
    }
    projectId = projectId1;
    const tmpResult = matchPathCompat;
  }
  if (projectId == null) {
    projectId = null;
  }
  return projectId;
}