// discord_app/modules/conjure/preview/prefetchConjurePreviewFrame.tsx
import getChannelIdForEmbeddedSurfaceDefault from "../../embedded_apps/utils/getChannelIdForEmbeddedSurface.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import conjurePreviewSurface2 from "conjurePreviewSurface.tsx";
import createProxyTicket from "../../activities/createProxyTicket.tsx";
import loadEmbeddedAppCSPForLaunchDefault from "../../embedded_apps/csp/loadEmbeddedAppCSPForLaunch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import ConjureLastIntegrationStatusStore from "../projects/ConjureLastIntegrationStatusStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

require = fn;
let closure_7 = async function _loadPolicyAndApplication(arg0) {
  if (c1 === 2) {
    c1 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "HermesInternal" };
    }
  } else {
    try {
      c1 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c1 = 3;
          throw value;
        } else if (arg0 === 2) {
          c1 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          const items = [loadEmbeddedAppCSPForLaunchDefault(closure_0)];
          const useApplication = ApplicationActionCreators.useApplication;
          const items1 = [closure_0];
          items[1] = useApplication.fetchMany(items1);
          c2 = 1;
          c1 = 1;
          const obj4 = { value: Promise.allSettled(items), done: false };
          return obj4;
        }
      } else if (arg0 === 1) {
        c1 = 3;
        throw value;
      } else if (arg0 === 2) {
        c1 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c1 = 3;
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } catch (tmp5) {
      c1 = tmp;
      throw tmp5;
    }
  }
};
const isLaunched = fn(6847).isLaunched;
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
      const tmp11Result = conjurePreviewSurface2;
      const conjurePreviewSurface = tmp11Result.getConjurePreviewSurface(
        conjurePreviewSurface2.getConjurePreviewGuildId(project),
      );
      const tmp11Result3 = conjurePreviewSurface2;
      createProxyTicket.prefetchProxyTicket(
        prop,
        getChannelIdForEmbeddedSurfaceDefault(conjurePreviewSurface),
        conjurePreviewSurface.type,
      );
      (function loadPolicyAndApplication() {
        const self = this;
        const apply = closure_1_7.apply;
        if (typeof apply === "unknown") {
          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
        } else {
          applyArgumentsResult = apply(self, arguments);
        }
        return applyArgumentsResult;
      })(prop);
      const tmp11Result4 = createProxyTicket;
    }
    obj6 = conjurePreviewSurface2;
  }
}
