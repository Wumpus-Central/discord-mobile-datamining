// === Module 7676: prefetchConjurePreviewFrame ===

// Module 7676 (prefetchConjurePreviewFrame)
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 7677 */;
import frameLaunchSteps from "frameLaunchSteps" /* 7679 */;
import FrameLaunchTimingTypes from "FrameLaunchTimingTypes" /* 7685 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 7668 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6934 */;

require = fn;
const isLaunched = fn(6937).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/prefetchConjurePreviewFrame.tsx");

export function prefetchConjurePreviewFrame(projectId, arg1) {
  let obj = arg1;
  if (arg1 === undefined) {
    obj = {};
  }
  let flag = obj.known;
  if (flag === undefined) {
    flag = false;
  }
  const project = ConjureProjectStore.getProject(projectId);
  let prop;
  if (project != null) {
    prop = project.preview_application_id;
  }
  if (null != prop) {
    if (!isLaunched(obj6.getConjureBuilderPreviewFrame(prop))) {
      if (!flag) {
        let integrationStatus = ConjureProjectStore.getIntegrationStatus(projectId);
        if (integrationStatus == null) {
          integrationStatus = ConjureLastIntegrationStatusStore.getIntegrationStatus(projectId);
        }
        let preview_ready;
        if (integrationStatus != null) {
          preview_ready = integrationStatus.preview_ready;
        }
      }
      const conjurePreviewGuildId = conjurePreviewSurface2.getConjurePreviewGuildId(project);
      const tmp10Result = conjurePreviewSurface2;
      const conjurePreviewSurface = conjurePreviewSurface2.getConjurePreviewSurface(conjurePreviewGuildId);
      const tmp10Result3 = conjurePreviewSurface2;
      frameLaunchSteps.prefetchFrameLaunch(FrameLaunchTimingTypes.LaunchTrigger.CONJURE_PREVIEW_PREFETCH, prop, conjurePreviewSurface);
      const tmp10Result4 = frameLaunchSteps;
    }
    obj6 = conjurePreviewSurface2;
  }
}