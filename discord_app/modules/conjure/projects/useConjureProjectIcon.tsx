// === Module 12173: useConjureProjectIcon ===

// Module 12173 (useConjureProjectIcon)
import c from "c" /* 576 */;
import AvatarUtilsDefault from "AvatarUtils" /* 1414 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6811 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

function conjureProjectIconMetrics(dependencyMap) {
  return { glyphSize: Math.round(0.6 * dependencyMap), radius: dependencyMap / 4 };
}
const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureProjectIcon(preview_application_id, size) {
  const cResult = c.c(9);
  let application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  const data = ApplicationActionCreators.useApplication(application_id).data;
  if (cResult[0] === data) {
    if (cResult[1] === application_id) {
      if (cResult[2] === size) {
        let tmp4 = cResult[3];
      }
      if (cResult[4] !== size) {
        const obj2 = { glyphSize: null, radius: null };
        const _Math = Math;
        obj2.glyphSize = Math.round(0.6 * size);
        obj2.radius = size / 4;
        cResult[4] = size;
        cResult[5] = obj2;
        let tmp8 = obj2;
      } else {
        tmp8 = cResult[5];
      }
      if (cResult[6] === tmp4) {
        if (cResult[7] === tmp8) {
          let tmp10 = cResult[8];
        }
        return tmp10;
      }
      const obj4 = { url: tmp4 };
      const merged = Object.assign(tmp8);
      cResult[6] = tmp4;
      cResult[7] = tmp8;
      cResult[8] = obj4;
      tmp10 = obj4;
    }
  }
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let applicationIconURL;
  if (null != icon) {
    const obj5 = { id: application_id, icon: data.icon, size };
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj5);
  }
  cResult[0] = data;
  cResult[1] = application_id;
  cResult[2] = size;
  cResult[3] = applicationIconURL;
  tmp4 = applicationIconURL;
  const tmpResult = ApplicationActionCreators;
}) : (function useConjureProjectIcon(preview_application_id, size) {
  let application_id = preview_application_id.preview_application_id;
  if (application_id == null) {
    application_id = preview_application_id.application_id;
  }
  const data = ApplicationActionCreators.useApplication(application_id).data;
  let icon;
  if (data != null) {
    icon = data.icon;
  }
  let applicationIconURL;
  if (null != icon) {
    const obj3 = { id: application_id, icon: data.icon, size };
    applicationIconURL = AvatarUtilsDefault.getApplicationIconURL(obj3);
  }
  const obj4 = { url: applicationIconURL };
  const merged = Object.assign({ glyphSize: Math.round(0.6 * size), radius: size / 4 });
  return obj4;
});
export { conjureProjectIconMetrics };