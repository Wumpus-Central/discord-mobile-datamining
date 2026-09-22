// === Module 8949: showReportModalForUserWidget ===

// Module 8949 (showReportModalForUserWidget)
import ReportModals from "ReportModals" /* 8912 */;
import ApplicationStore from "ApplicationStore" /* 4984 */;

const require = globalThis.__r;

require = fn;
const user_profile_widget = "user_profile_widget";
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/showReportModalForUserWidget.tsx");

export const USER_PROFILE_WIDGET_REPORT_ENTRYPOINT = "user_profile_widget";
export const showReportModalForUserWidget = function showReportModalForUserWidget(user_id, applicationId) {
  _require = user_id;
  importDefault = applicationId;
  if (applicationId instanceof require("UserProfileApplicationWidgetTypes").ApplicationWidget) {
    applicationId = applicationId.applicationId;
    if (ApplicationStore.isHydrated(applicationId)) {
      let application = ApplicationStore.getApplication(applicationId);
      let prop;
      if (application != null) {
        prop = application.vibegrationsProjectId;
      }
      if (null != prop) {
        let obj = { application, entrypoint: user_profile_widget };
        let result = tmp(tmp2[2]).showReportModalForApp(obj);
        const tmpResult = tmp(tmp2[2]);
      } else {
        let result1 = tmp(tmp2[2]).showReportModalForWidget(user_id, applicationId);
        const tmpResult3 = tmp(tmp2[2]);
      }
    } else {
      const application1 = require("ApplicationActionCreators").fetchApplication(applicationId);
      let obj3 = require("ApplicationActionCreators");
      application1.then(() => {
        const application = ApplicationStore.getApplication(applicationId);
        let prop;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        if (null != prop) {
          const obj3 = { application, entrypoint: user_profile_widget };
          const result = ReportModals.showReportModalForApp(obj3);
        } else {
          const result1 = ReportModals.showReportModalForWidget(closure_0, closure_1);
        }
      }).catch(() => ReportModals.showReportModalForWidget(closure_0, closure_1));
      const nextPromise = application1.then(() => {
        const application = ApplicationStore.getApplication(applicationId);
        let prop;
        if (application != null) {
          prop = application.vibegrationsProjectId;
        }
        if (null != prop) {
          const obj3 = { application, entrypoint: user_profile_widget };
          const result = ReportModals.showReportModalForApp(obj3);
        } else {
          const result1 = ReportModals.showReportModalForWidget(closure_0, closure_1);
        }
      });
    }
  } else {
    const result2 = tmp(tmp2[2]).showReportModalForWidget(user_id, applicationId);
    const tmpResult4 = tmp(tmp2[2]);
  }
};