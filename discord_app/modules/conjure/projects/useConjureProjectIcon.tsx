// === Module 12428: useConjureProjectIcon ===

// Module 12428 (useConjureProjectIcon)
import AvatarUtilsDefault from "AvatarUtils" /* 1410 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6875 */;
import size from "module_2" /* 2 */;

const result = size.fileFinishedImporting("modules/conjure/projects/useConjureProjectIcon.tsx");

export default function useConjureProjectIcon(preview_application_id, size) {
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
};
export function conjureProjectIconMetrics(dependencyMap) {
  return { glyphSize: Math.round(0.6 * dependencyMap), radius: dependencyMap / 4 };
}