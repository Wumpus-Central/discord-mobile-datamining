// === Module 7388: toSubmission ===

// Module 7388 (toSubmission)
import set from "set" /* 2 */;
import WidgetType from "WidgetType" /* 7377 */;

let ApplicationWidget;
class ApplicationWidget {
  constructor(arg0) {
    ({ id, applicationId } = global);
    obj = Object.create(new.target.prototype);
    obj.id = id;
    obj.type = require("WidgetType").WidgetType.APPLICATION;
    obj.applicationId = applicationId;
    return obj;
  }
}
const prototype = ApplicationWidget.prototype;
prototype["toSubmission"] = function toSubmission() {
  obj = { id: this.id, data: obj };
  obj = { type: this.type, application_id: this.applicationId };
  return obj;
};
prototype["isUpdatable"] = function isUpdatable() {
  return true;
};
prototype["isDiscardable"] = function isDiscardable() {
  return false;
};
prototype["isValid"] = function isValid() {
  return true;
};
prototype["isEqual"] = function isEqual(applicationId) {
  let tmp = applicationId instanceof ApplicationWidget;
  if (tmp) {
    const self = this;
    tmp = applicationId.applicationId === this.applicationId;
  }
  return tmp;
};
prototype["getUniqueKey"] = function getUniqueKey() {
  return "" + this.type + "-" + this.applicationId;
};
prototype["getProfileAnalyticsOptions"] = function getProfileAnalyticsOptions() {
  return { widgetType: this.type, applicationId: this.applicationId };
};
prototype["getProfileEditAnalyticsOptions"] = function getProfileEditAnalyticsOptions() {
  return { widgetEdited: this.type, applicationId: this.applicationId };
};
const result = set.fileFinishedImporting("modules/user_profile/UserProfileApplicationWidgetTypes.tsx");

export { ApplicationWidget };
export const isApplicationWidgetWithId = function isApplicationWidgetWithId(applicationId) {
  let tmp = null != arg1;
  if (tmp) {
    tmp = applicationId instanceof ApplicationWidget;
  }
  if (tmp) {
    tmp = applicationId.applicationId === arg1;
  }
  return tmp;
};