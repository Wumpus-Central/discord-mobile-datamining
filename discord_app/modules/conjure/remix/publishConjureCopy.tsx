// === Module 11310: publishConjureCopy ===

// Module 11310 (publishConjureCopy)
import router_utils from "router_utils" /* 1098 */;
import transitionToGuild from "transitionToGuild" /* 8459 */;
import conjurePreviewModes from "conjurePreviewModes" /* 11311 */;
import useConjurePublishAction from "useConjurePublishAction" /* 11313 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;

require = fn;
function needsInstallConsent(arg0) {
  const integrationStatus = ConjureProjectStore.getIntegrationStatus(arg0);
  const project = ConjureProjectStore.getProject(arg0);
  let install_scope;
  if (project != null) {
    install_scope = project.install_scope;
  }
  if (install_scope == null) {
    install_scope = null;
  }
  const obj2 = { installScope: install_scope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
  let preview_ready;
  if (integrationStatus != null) {
    preview_ready = integrationStatus.preview_ready;
  }
  obj2.previewReady = true === preview_ready;
  let prop;
  if (integrationStatus != null) {
    prop = integrationStatus.integration_installed;
  }
  if (prop == null) {
    prop = null;
  }
  obj2.integrationInstalled = prop;
  let prop1;
  if (integrationStatus != null) {
    prop1 = integrationStatus.bot_permissions_changed;
  }
  obj2.botPermissionsChanged = true === prop1;
  return conjurePreviewModes.requiresPermissionReview(obj2);
}
let closure_7 = async function _publishConjureCopy(arg0) {
  if (c8 === 2) {
    c8 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp8 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: null };
    }
  } else {
    try {
      c8 = 2;
      if (0 === c7) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c8 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_4 = tmp4;
          closure_3 = tmp9;
          closure_131_0 = closure_0;
          closure_131_1 = closure_1;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          integrationStatus = integrationStatus.getIntegrationStatus(closure_0);
          let preview_ready;
          if (integrationStatus != null) {
            preview_ready = integrationStatus.preview_ready;
          }
          if (true !== preview_ready) {
            c8 = 3;
            return { value: null, done: true };
          } else if (needsInstallConsent(closure_0)) {
            c5 = 1;
            c7 = 3;
            c8 = 1;
            const obj5 = { value: useConjurePublishAction.requestConjureInstallConsent(closure_0, closure_1), done: false };
            return obj5;
          }
        }
      } else if (1 === tmp9) {
        c5 = 0;
        c8 = 3;
        return { value: null, done: true };
      } else if (2 === tmp9) {
        c5 = 0;
        closure_131_4 = closure_6;
        const _Error = Error;
        if (closure_131_4 instanceof Error) {
          let message = closure_131_4.message;
        } else {
          const intl = closure_132_0(closure_132_2[7]).intl;
          message = intl.string(closure_132_1(closure_132_2[8]).gMWZeG);
        }
        closure_131_2 = message;
      } else if (3 === tmp9) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c8 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 0;
          if (closure_132_6(closure_131_0)) {
            c8 = 3;
            return { value: null, done: true };
          }
        }
      } else if (4 === tmp9) {
        if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c8 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          closure_131_3 = value;
          let tmp21 = null;
          if (true !== closure_131_3.ok) {
            tmp21 = closure_132_1(closure_132_2[6])(closure_131_3);
          }
          closure_131_2 = tmp21;
          c5 = 0;
          if (null != closure_131_2) {
            const obj10 = { type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId: closure_131_0, message: closure_131_2 };
            closure_132_1(closure_132_2[9]).dispatch(obj10);
            c8 = 3;
            return { value: null, done: true };
          } else {
            c5 = 3;
            c7 = 7;
            c8 = 1;
            const obj12 = { value: closure_132_0(closure_132_2[10]).refreshPublishedProject(closure_131_0, { isPreview: false }), done: false };
            return obj12;
          }
        }
      } else {
        if (5 === tmp9) {
          c5 = 0;
          value = {};
          closure_132_0(closure_132_2[4]).waitForAppChannel(closure_131_0, closure_131_1);
          c7 = 6;
          c8 = 1;
          const obj4 = closure_132_0(closure_132_2[4]);
        } else if (6 === tmp9) {
          if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 3;
            const obj14 = { value, done: true };
            return obj14;
          } else {
            value.appChannelId = value;
            c8 = 3;
            const obj15 = { value, done: true };
            return obj15;
          }
        } else if (arg0 === 1) {
          c8 = 3;
          throw value;
        } else if (arg0 !== 2) {
          c5 = 0;
        }
        c5 = 0;
        c8 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c5 = 2;
      c7 = 4;
      c8 = 1;
      const obj16 = { value: closure_132_0(closure_132_2[5]).publishProject(closure_131_0), done: false };
      return obj16;
    } catch (tmp66) {
      closure_6 = tmp66;
      if (tmp5 === c5) {
        c8 = tmp3;
        throw tmp66;
      } else if (tmp2 === tmp68) {
        c7 = tmp2;
      } else if (tmp === tmp68) {
        c7 = tmp;
      } else {
        c7 = tmp6;
      }
    }
  }
};
const Routes = fn(1071).Routes;
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/remix/publishConjureCopy.tsx");

export function publishConjureCopy() {
  const self = this;
  const apply = closure_7.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
export function openConjureCopy(guildId, appChannelId) {
  if (null != appChannelId) {
    router_utils.transitionTo(Routes.CHANNEL(guildId, appChannelId));
  } else {
    transitionToGuild.transitionToGuild(guildId);
  }
}