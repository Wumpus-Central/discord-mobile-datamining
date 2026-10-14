// === Module 10741: ConjurePublishActionCreators ===

// Module 10741 (ConjurePublishActionCreators)
import ConjureAnalytics from "ConjureAnalytics" /* 10682 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import UserStore from "UserStore" /* 1390 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10678 */;

require = fn;
function unpublishProject() {
  const self = this;
  const apply = closure_8.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_8 = async function _unpublishProject(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "IconComponent", done: null };
    }
  } else {
    try {
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_3 = tmp3;
          closure_2 = tmp5;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_0 = closure_0;
          ({ guildId: closure_130_1, alsoRemovePreviewBot: closure_130_2 } = closure_1);
          c6 = 1;
          c7 = 1;
          return { value: "Set", done: true };
        }
      } else if (1 === tmp8) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          c5 = 1;
          const HTTP = closure_131_0(closure_131_2[5]).HTTP;
          const request = { url: closure_131_6.CONJURE_PROJECT_UNPUBLISH(closure_130_0), body: null, rejectWithError: false };
          const obj7 = { guild_id: closure_130_1, also_remove_preview_bot: closure_130_2 };
          request.body = obj7;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else if (2 === tmp8) {
        c5 = 0;
        const result = closure_131_0(closure_131_2[6]).refreshConjureInstallState(closure_130_0);
        throw closure_4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        const result1 = closure_131_0(closure_131_2[6]).refreshConjureInstallState(closure_130_0);
        c7 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        c5 = 0;
        const result2 = closure_131_0(closure_131_2[6]).refreshConjureInstallState(closure_130_0);
        c7 = 3;
        const obj10 = { value, done: true };
        return obj10;
      }
    } catch (tmp31) {
      closure_4 = tmp31;
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp31;
      } else {
        c6 = tmp;
      }
    }
  }
};
let closure_9 = async function _unpublishUserApp() {
  closure_2 = tmp2;
  closure_1 = tmp3;
  closure_129_0 = closure_0;
  await unpublishProject(closure_0, {}).catch(() => null);
  closure_129_1 = value;
  if (closure_129_1 != null) {
    const ok = closure_129_1.ok;
  }
  if (true !== ok) {
    return false;
  }
  const publishStatus = closure_130_5.getPublishStatus(closure_129_0);
  if (null != publishStatus) {
    closure_130_1(closure_130_2[7]).dispatch({ type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE", projectId: closure_129_0, published: false, hasUnpublishedChanges: false, surface: publishStatus.surface, previewAppChannels: publishStatus.previewAppChannels });
    closure_130_1(closure_130_2[7]);
  }
  const currentUser = closure_130_4.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  closure_129_3 = id;
  if (null != closure_129_3) {
    const profile = closure_130_0(closure_130_2[8]).fetchProfile(closure_129_3);
    profile.catch(() => {

    });
    closure_130_0(closure_130_2[8]);
  }
  return true;
};
let closure_10 = async function _refreshPublishedProject(arg0, arg1) {
  closure_0 = arg0;
  let isPreview = arg1;
  c4 = 0;
  c5 = 0;
  let iter = (async (arg0, value) => {
    if (c5 === 2) {
      c5 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      try {
        c5 = 2;
        if (0 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj5 = { value, done: true };
            return obj5;
          } else {
            closure_3 = tmp5;
            closure_2 = tmp2;
            let isPreview2;
            closure_130_0 = closure_0;
            isPreview2 = isPreview.isPreview;
            let body;
            closure_130_3 = undefined;
            closure_130_4 = undefined;
            let project;
            closure_130_6 = undefined;
            c4 = 1;
            c5 = 1;
            return { value: "Set", done: true };
          }
        } else if (1 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            c4 = 2;
            c5 = 1;
            const obj8 = { value: closure_131_0(closure_131_2[6]).getProject(closure_130_0), done: false };
            return obj8;
          }
        } else {
          if (2 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj10 = { value, done: true };
              return obj10;
            } else {
              body = value.body;
              closure_130_3 = body.bot_permissions_changed;
              closure_130_4 = body.integration_installed;
              project = body.project;
              if (isPreview2) {
                let application_id = tmp63.preview_application_id;
              } else {
                application_id = tmp63.application_id;
              }
              closure_130_6 = application_id;
              if (null != closure_130_6) {
                const obj12 = { type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId: closure_130_6 };
                closure_131_1(closure_131_2[7]).dispatch(obj12);
                const obj9 = closure_131_1(closure_131_2[7]);
                c4 = 3;
                c5 = 1;
                const obj13 = { value: closure_131_0(closure_131_2[9]).fetchApplication(closure_130_6), done: false };
                return obj13;
              } else {
                const obj15 = { isPreview: isPreview2 };
                closure_131_0(closure_131_2[4]).trackConjureDeployed(closure_130_0, obj15);
                c5 = 3;
                const obj7 = closure_131_0(closure_131_2[4]);
              }
            }
          } else if (3 === tmp5) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj16 = { value, done: true };
              return obj16;
            } else {
              const widgetConfigs = closure_131_0(closure_131_2[10]).fetchWidgetConfigs(closure_130_6, { force: true });
              c4 = 4;
              c5 = 1;
              const obj17 = {
                value: widgetConfigs.catch(() => {

                          }),
                done: false
              };
              return obj17;
            }
          } else if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj18 = { value, done: true };
            return obj18;
          } else if (!isPreview2) {
            const result = closure_131_0(closure_131_2[11]).reloadConjureAppFrames(closure_130_6);
            const obj = closure_131_0(closure_131_2[11]);
          }
          let tmp11 = closure_130_4;
          if (closure_130_4) {
            tmp11 = !closure_130_3;
          }
          if (tmp11) {
            const result1 = closure_131_0(closure_131_2[12]).reloadAppFramesAfterDeploy(closure_130_6);
            const obj2 = closure_131_0(closure_131_2[12]);
          }
        }
      } catch (tmp50) {
        c5 = tmp;
        throw tmp50;
      }
    }
  })();
  iter.next();
  return iter;
};
const Endpoints = fn(1085).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  const obj2 = { location: "publish", code: ConjureAnalytics.ConjureErrorCodes.PUBLISH_FAILED, message: null, details: null, isPreview: null };
  let str = "";
  if (isPreview) {
    str = "-preview";
  }
  obj2.message = "publish" + str + " failed";
  obj2.details = message;
  obj2.isPreview = isPreview;
  ConjureAnalytics.trackConjureErrored(projectId, obj2);
};
export { unpublishProject };
export const unpublishUserApp = function unpublishUserApp() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const refreshPublishedProject = function refreshPublishedProject() {
  const self = this;
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};