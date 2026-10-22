// === Module 11409: activityWebViewController ===

// Module 11409 (activityWebViewController)
import util from "util" /* 1128 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5896 */;
import EmbeddedAppTypes from "EmbeddedAppTypes" /* 6763 */;
import leaveEmbeddedActivity from "leaveEmbeddedActivity" /* 10740 */;
import makeIframeIdDefault from "makeIframeId" /* 11410 */;
import createWebViewControllerDefault from "createWebViewController" /* 11411 */;
import makeShellBridgeSecretDefault from "makeShellBridgeSecret" /* 11433 */;
import EmbeddedActivitiesStore from "EmbeddedActivitiesStore" /* 4820 */;

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/activityWebViewController.tsx");

export const getOrCreateActivityWebViewController = function getOrCreateActivityWebViewController(applicationId) {
  if (null != _undefined) {
    const obj = { iframeId: _undefined.iframeId, shellBridgeSecret: _undefined.shellBridgeSecret };
    return obj;
  } else {
    let obj2 = { iframeId: null, shellBridgeSecret: null };
    let obj3 = { contextSource: null, shellBridgeSecret: null, getOrigin: null, onDisallowedNavigation: null };
    let obj4 = { type: null, applicationId: null };
    const tmp6 = makeIframeIdDefault();
    obj4.type = EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY;
    obj4.applicationId = applicationId;
    obj3.contextSource = obj4;
    obj3.shellBridgeSecret = makeShellBridgeSecretDefault();
    obj3.getOrigin = function getOrigin() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let url;
        if (selfEmbeddedActivityForLocation != null) {
          url = selfEmbeddedActivityForLocation.url;
        }
        tmp2 = url;
      }
      return tmp2;
    };
    obj3.onDisallowedNavigation = function onDisallowedNavigation() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation = EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let applicationId;
        if (selfEmbeddedActivityForLocation != null) {
          applicationId = selfEmbeddedActivityForLocation.applicationId;
        }
        tmp2 = applicationId;
      }
      if (tmp5) {
        const obj3 = { location: connectedActivityLocation, applicationId: tmp2, showFeedback: false };
        const result = leaveEmbeddedActivity.leaveEmbeddedActivity(obj3);
        const obj5 = { body: null, confirmText: null };
        const intl = util.intl;
        obj5.body = intl.string(util.t.tYBBWz);
        const intl2 = util.intl;
        obj5.confirmText = intl2.string(util.t.BddRzS);
        actions_AlertActionCreatorsDefault.show(obj5);
      }
      tmp5 = null != connectedActivityLocation && null != tmp2;
    };
    const tmp7Result = createWebViewControllerDefault(tmp6, obj3);
    _undefined = tmp7Result;
    obj2.iframeId = tmp7Result.iframeId;
    obj2.shellBridgeSecret = _undefined.shellBridgeSecret;
    return obj2;
  }
};
export const releaseActivityWebView = function releaseActivityWebView() {
  let iframeId;
  if (_undefined != null) {
    iframeId = _undefined.iframeId;
  }
  if (_undefined != null) {
    _undefined.release();
  }
  _undefined = undefined;
  return iframeId;
};