// === Module 10839: conjurePreviewTicket ===

// Module 10839 (conjurePreviewTicket)
import getChannelIdForEmbeddedSurfaceDefault from "getChannelIdForEmbeddedSurface" /* 6836 */;
import conjurePreviewSurface2 from "conjurePreviewSurface" /* 10840 */;
import createProxyTicket from "createProxyTicket" /* 10842 */;
import ConjureLastIntegrationStatusStore from "ConjureLastIntegrationStatusStore" /* 10833 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6831 */;

require = fn;
const isLaunched = fn(6834).isLaunched;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/preview/conjurePreviewTicket.tsx");

export function prefetchConjurePreviewTicket(projectId, arg1) {
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
      const tmp10Result = conjurePreviewSurface2;
      const conjurePreviewSurface = tmp10Result.getConjurePreviewSurface(conjurePreviewSurface2.getConjurePreviewGuildId(project));
      const tmp10Result3 = conjurePreviewSurface2;
      createProxyTicket.prefetchProxyTicket(prop, getChannelIdForEmbeddedSurfaceDefault(conjurePreviewSurface), conjurePreviewSurface.type);
      const tmp10Result4 = createProxyTicket;
    }
    obj6 = conjurePreviewSurface2;
  }
}