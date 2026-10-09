// discord_app/modules/activities/native/activityWebViewController.tsx
import util from "../../../intl/index.native.tsx";
import actions_AlertActionCreatorsDefault from "../../../actions/native/AlertActionCreators.tsx";
import EmbeddedAppTypes from "../../embedded_apps/EmbeddedAppTypes.tsx";
import leaveEmbeddedActivity from "../leaveEmbeddedActivity.tsx";
import makeIframeIdDefault from "../../embedded_apps/utils/makeIframeId.tsx";
import createWebViewControllerDefault from "../../embedded_apps/native/utils/createWebViewController.tsx";
import EmbeddedActivitiesStore from "../EmbeddedActivitiesStore.tsx";

require = fn;
const size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/activityWebViewController.tsx");

export const getOrCreateActivityWebViewController = function getOrCreateActivityWebViewController(applicationId) {
  if (null != _undefined) {
    return _undefined.iframeId;
  } else {
    let tmp5 = makeIframeIdDefault();
    const obj = { contextSource: null, getOrigin: null, onDisallowedNavigation: null };
    let obj2 = { type: EmbeddedAppTypes.EmbeddedContextSourceType.ACTIVITY, applicationId };
    obj.contextSource = obj2;
    obj.getOrigin = function getOrigin() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation =
          EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
        let url;
        if (selfEmbeddedActivityForLocation != null) {
          url = selfEmbeddedActivityForLocation.url;
        }
        tmp2 = url;
      }
      return tmp2;
    };
    obj.onDisallowedNavigation = function onDisallowedNavigation() {
      const connectedActivityLocation = EmbeddedActivitiesStore.getConnectedActivityLocation();
      let tmp2;
      if (null != connectedActivityLocation) {
        const selfEmbeddedActivityForLocation =
          EmbeddedActivitiesStore.getSelfEmbeddedActivityForLocation(connectedActivityLocation);
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
    _undefined = createWebViewControllerDefault(tmp5, obj);
    return tmp5;
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
