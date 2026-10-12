// === Module 13248: conjureProjectConnection ===

// Module 13248 (conjureProjectConnection)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureActionCreators from "ConjureActionCreators" /* 11413 */;
import ConjureProjectStore from "ConjureProjectStore" /* 10652 */;

require = fn;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/conjureProjectConnection.tsx");

export const projectStepHandlers = {
  project_named(name, projectId) {
    const project = ConjureProjectStore.getProject(projectId.projectId);
    if (tmp2) {
      const obj2 = { type: "CONJURE_PROJECT_UPDATE_SUCCESS", project: null };
      const obj3 = {};
      const merged = Object.assign(project);
      obj3.name = name.name;
      obj2.project = obj3;
      DispatcherDefault.dispatch(obj2);
    }
    tmp2 = null != project && null != name.name;
  },
  app_icon_set(icon, ws) {
    ws = ws.ws;
    let attachment_id;
    icon = icon.icon;
    if (null != icon) {
      if ("" !== icon) {
        attachment_id = icon.attachment_id;
        const setProjectIconResult = ConjureActionCreators.setProjectIcon(tmp, icon);
        ConjureActionCreators.setProjectIcon(tmp, icon).then((ok) => {
          let str = "failed";
          if (ok.ok) {
            str = "applied";
          }
          let tmp2 = null != attachment_id;
          if (tmp2) {
            tmp2 = "" !== attachment_id;
          }
          if (tmp2) {
            ws.sendAppIconAck(attachment_id, str);
          }
        }).catch(() => {
          let tmp2 = null != attachment_id;
          if (tmp2) {
            tmp2 = "" !== attachment_id;
          }
          if (tmp2) {
            ws.sendAppIconAck(attachment_id, "failed");
          }
        });
        const nextPromise = ConjureActionCreators.setProjectIcon(tmp, icon).then((ok) => {
          let str = "failed";
          if (ok.ok) {
            str = "applied";
          }
          let tmp2 = null != attachment_id;
          if (tmp2) {
            tmp2 = "" !== attachment_id;
          }
          if (tmp2) {
            ws.sendAppIconAck(attachment_id, str);
          }
        });
      }
    }
  }
};