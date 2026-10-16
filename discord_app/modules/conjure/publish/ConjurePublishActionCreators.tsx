// discord_app/modules/conjure/publish/ConjurePublishActionCreators.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ConjureAnalytics from "../shared/ConjureAnalytics.tsx";
import ApplicationWidgetConfigActions from "../../application_widget/ApplicationWidgetConfigActions.tsx";
import ConjurePreviewActionCreators from "../preview/ConjurePreviewActionCreators.tsx";
import conjureLiveRelaunch from "../live_reload/conjureLiveRelaunch.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import UserStore from "../../../stores/UserStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

require = fn;
function unpublishProject() {
  const self = this;
  const apply = closure_9.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_9 = async function _unpublishProject(arg0) {
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
          return { value: "test", done: true };
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
          const HTTP = closure_131_0(closure_131_2[6]).HTTP;
          const request = {
            url: closure_131_7.CONJURE_PROJECT_UNPUBLISH(closure_130_0),
            body: null,
            rejectWithError: false,
          };
          const obj7 = { guild_id: closure_130_1, also_remove_preview_bot: closure_130_2 };
          request.body = obj7;
          c6 = 3;
          c7 = 1;
          const obj8 = { value: HTTP.post(request), done: false };
          return obj8;
        }
      } else if (2 === tmp8) {
        c5 = 0;
        const result = closure_131_0(closure_131_2[7]).refreshConjureInstallState(closure_130_0);
        throw closure_4;
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        const result1 = closure_131_0(closure_131_2[7]).refreshConjureInstallState(closure_130_0);
        c7 = 3;
        const obj9 = { value, done: true };
        return obj9;
      } else {
        c5 = 0;
        const result2 = closure_131_0(closure_131_2[7]).refreshConjureInstallState(closure_130_0);
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
let closure_10 = async function _unpublishUserApp() {
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
  const publishStatus = closure_130_6.getPublishStatus(closure_129_0);
  if (null != publishStatus) {
    closure_130_1(closure_130_2[8]).dispatch({
      type: "CONJURE_PROJECT_PUBLISH_STATUS_UPDATE",
      projectId: closure_129_0,
      published: false,
      hasUnpublishedChanges: false,
      surface: publishStatus.surface,
      previewAppChannels: publishStatus.previewAppChannels,
    });
    closure_130_1(closure_130_2[8]);
  }
  const currentUser = closure_130_4.getCurrentUser();
  if (currentUser != null) {
    const id = currentUser.id;
  }
  closure_129_3 = id;
  if (null != closure_129_3) {
    const profile = closure_130_0(closure_130_2[9]).fetchProfile(closure_129_3);
    profile.catch(() => {});
    closure_130_0(closure_130_2[9]);
  }
  return true;
};
let closure_11 = async function _refreshPublishedProject(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
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
      c5 = 2;
      if (0 === c4) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_3 = tmp5;
          closure_2 = tmp2;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_0 = closure_0;
          ({ isPreview: closure_130_1, install: closure_130_2 } = closure_1);
          let project;
          closure_130_4 = undefined;
          closure_130_5 = undefined;
          closure_130_6 = undefined;
          let body;
          closure_130_8 = undefined;
          closure_130_9 = undefined;
          let project2;
          closure_130_11 = undefined;
          closure_130_12 = undefined;
          c4 = 1;
          c5 = 1;
          return { value: "test", done: true };
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          project = closure_131_5.getProject(closure_130_0);
          if (null == project) {
            closure_130_4 = null;
            let tmp36 = !closure_130_1;
            if (closure_130_1) {
              tmp36 = null != closure_130_2;
            }
            closure_130_5 = tmp36;
            let tmp44Result = null;
            if (null != closure_130_4) {
              let tmp48 = null;
              if (closure_130_5) {
                tmp48 = closure_130_2;
              }
              tmp44Result = closure_131_12(closure_130_4, closure_130_1, tmp48);
            }
            closure_130_6 = tmp44Result;
            c4 = 2;
            c5 = 1;
            const obj5 = { value: closure_131_0(closure_131_2[7]).getProject(closure_130_0), done: false };
            return obj5;
          } else if (closure_130_1) {
            let application_id2 = tmp32.preview_application_id;
          } else {
            application_id2 = tmp32.application_id;
          }
        }
      } else {
        if (2 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            body = value.body;
            closure_130_8 = body.bot_permissions_changed;
            closure_130_9 = body.integration_installed;
            project2 = body.project;
            if (closure_130_1) {
              let application_id = tmp65.preview_application_id;
            } else {
              application_id = tmp65.application_id;
            }
            closure_130_11 = application_id;
            if (null != closure_130_11) {
              const obj8 = { integrationInstalled: closure_130_9, botPermissionsChanged: closure_130_8 };
              closure_130_12 = obj8;
              if (closure_130_11 === closure_130_4) {
                if (null != closure_130_6) {
                  c4 = 3;
                  c5 = 1;
                  const obj9 = { value: closure_130_6, done: false };
                  return obj9;
                }
              }
              c4 = 4;
              c5 = 1;
              const obj10 = { value: closure_131_12(closure_130_11, closure_130_1, closure_130_12), done: false };
              return obj10;
            } else {
              c5 = 3;
            }
          }
        } else if (3 === tmp5) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 !== 2) {
            if (!closure_130_5) {
              closure_131_14(closure_130_11, closure_130_1, closure_130_12);
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c5 = 3;
        const obj11 = { value, done: true };
        return obj11;
      }
    } catch (tmp54) {
      c5 = tmp;
      throw tmp54;
    }
  }
};
function refreshPublishedApplication() {
  const self = this;
  const apply = closure_13.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_13 = async function _refreshPublishedApplication() {
  closure_1 = arg1;
  closure_2 = arg2;
  c5 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c6 === 2) {
      c6 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp5 === 3) {
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
        c6 = 2;
        if (0 === c5) {
          if (arg0 === 1) {
            c6 = 3;
            throw value;
          } else if (arg0 === 2) {
            c6 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_4 = tmp2;
            closure_3 = tmp3;
            closure_131_0 = applicationId;
            closure_131_1 = closure_1;
            closure_131_2 = closure_2;
            const obj4 = { type: "APPLICATION_COMMAND_INDEX_APPLICATION_STALE", applicationId };
            DispatcherDefault.dispatch(obj4);
            const items = [ApplicationActionCreators.fetchApplication(applicationId)];
            const widgetConfigs = ApplicationWidgetConfigActions.fetchWidgetConfigs(applicationId, { force: true });
            items[1] = widgetConfigs.catch(() => {});
            c5 = 1;
            c6 = 1;
            const obj6 = { value: Promise.all(items), done: false };
            return obj6;
          }
        } else if (arg0 === 1) {
          c6 = 3;
          throw value;
        } else if (arg0 === 2) {
          c6 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          if (null !== closure_131_2) {
            closure_132_14(closure_131_0, closure_131_1, closure_131_2);
          }
          c6 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp16) {
        c6 = tmp;
        throw tmp16;
      }
    }
  })();
};
function reloadAfterPublish(application_id, arg1, integrationInstalled) {
  if (arg1) {
    integrationInstalled = undefined;
    if (integrationInstalled != null) {
      integrationInstalled = integrationInstalled.integrationInstalled;
    }
    if (!tmp7) {
      const result = conjureLiveRelaunch.reloadAppFramesAfterDeploy(application_id);
    }
    tmp7 = true !== integrationInstalled || integrationInstalled.botPermissionsChanged;
  } else {
    const result1 = ConjurePreviewActionCreators.reloadConjureAppFrames(application_id);
  }
}
const Endpoints = fn(1087).Endpoints;
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/ConjurePublishActionCreators.tsx");

export const trackPublishFailed = function trackPublishFailed(projectId, message, isPreview) {
  const obj2 = {
    location: "publish",
    code: ConjureAnalytics.ConjureErrorCodes.PUBLISH_FAILED,
    message: null,
    details: null,
    isPreview: null,
  };
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
  const apply = closure_10.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export const refreshPublishedProject = function refreshPublishedProject() {
  const self = this;
  const apply = closure_11.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
