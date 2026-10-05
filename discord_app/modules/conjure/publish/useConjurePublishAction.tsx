// === Module 16614: useConjurePublishAction ===

// Module 16614 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1126 */;
import _modDef3723 from "module_3723" /* 3723 */;
import ConjureUtils from "ConjureUtils" /* 6746 */;
import ConjureTypes from "ConjureTypes" /* 6747 */;
import UserActionCreators from "UserActionCreators" /* 7852 */;
import ConjureActionCreators from "ConjureActionCreators" /* 8700 */;
import openConjurePublishDestination from "openConjurePublishDestination" /* 16615 */;
import conjureFeedback from "conjureFeedback" /* 16617 */;
import conjurePublishAction2 from "conjurePublishAction" /* 16618 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5118 */;
import UserProfileStore from "UserProfileStore" /* 7111 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import GuildChannelStore from "GuildChannelStore" /* 4507 */;
import GuildStore from "GuildStore" /* 2074 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import ConjureProjectStore from "ConjureProjectStore" /* 8699 */;

const require = globalThis.__r;

require = fn;
function readPublishSubject(projectId, guildId) {
  const project = ConjureProjectStore.getProject(projectId);
  if (null == project) {
    return null;
  } else {
    let tmp2 = null;
    if ("user" !== project.install_scope) {
      let guild_id = project.guild_id;
      if (guild_id == null) {
        guild_id = guildId;
      }
      tmp2 = guild_id;
    }
    let findConjureChannelIdResult = null;
    if (null != tmp2) {
      findConjureChannelIdResult = ConjureUtils.findConjureChannelId(tmp2, project.application_id);
    }
    guild = null;
    if (null != tmp2) {
      guild = GuildStore.getGuild(tmp2);
    }
    const obj3 = { project, guildId: tmp2, appChannelId: findConjureChannelIdResult, input: null };
    const obj4 = { installScope: project.install_scope, status: ConjureProjectStore.getPublishStatus(projectId), integrationStatus: ConjureProjectStore.getIntegrationStatus(projectId), guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesNativeAppChannels: null, botInGuild: null };
    let name;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    obj4.guildName = name;
    let tmp9 = null;
    if (null != findConjureChannelIdResult) {
      const channel = ChannelStore.getChannel(findConjureChannelIdResult);
      let name1;
      if (channel != null) {
        name1 = channel.name;
      }
      if (name1 == null) {
        name1 = null;
      }
      tmp9 = name1;
    }
    obj4.appChannelName = tmp9;
    obj4.appChannelPending = ConjureProjectStore.isAppChannelPending(projectId);
    let canResult = null;
    if (null != guild) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    obj4.canManageGuild = canResult;
    let canResult1 = null;
    if (null != guild) {
      canResult1 = PermissionStore.can(Permissions.MANAGE_CHANNELS, guild);
    }
    obj4.canManageChannels = canResult1;
    obj4.usesNativeAppChannels = ConjureTypes.projectUsesNativeAppChannels(project);
    guild_id = tmp2;
    let tmp21 = null;
    if (null != tmp2) {
      const application = ApplicationStore.getApplication(project.application_id);
      let id;
      if (application != null) {
        const bot = application.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = project.application_id;
      }
      const mutualGuilds = UserProfileStore.getMutualGuilds(id);
      let someResult = null;
      if (null != mutualGuilds) {
        someResult = mutualGuilds.some((guild) => guild.guild.id === guild_id);
      }
      tmp21 = someResult;
    }
    obj4.botInGuild = tmp21;
    obj3.input = obj4;
    return obj3;
  }
}
function openDestinationFor(applicationId, destination, openProfile) {
  return openConjurePublishDestination.openConjurePublishDestination(destination, { applicationId: applicationId.project.application_id, guildId: applicationId.guildId, appChannelId: applicationId.appChannelId, openProfile: openProfile.openProfile, openAutomodSettings: openProfile.openAutomodSettings });
}
function requestConjureInstallConsent() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_20 = async function _requestConjureInstallConsent(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
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
          const obj4 = { value, done: true };
          return obj4;
        } else {
          const guildId = tmp2;
          const applicationId = tmp3;
          closure_130_0 = closure_0;
          closure_130_1 = undefined;
          closure_130_2 = undefined;
          closure_130_3 = undefined;
          project = project.getProject(closure_0);
          closure_130_1 = project;
          let prop;
          if (project != null) {
            prop = project.preview_application_id;
          }
          closure_130_2 = prop;
          if (null != project) {
            if (null != prop) {
              closure_130_3 = require("ConjureInstallTarget").conjureInstallGuildId(project, project.getIntegrationStatus(closure_0), closure_1);
              if (null == application.getApplication(prop)) {
                application = require("ApplicationActionCreators").fetchApplication(prop);
                c4 = 1;
                c5 = 1;
                const obj6 = {
                  value: application.catch(() => {

                                }),
                  done: false
                };
                return obj6;
              }
              const obj9 = require("ConjureInstallTarget");
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: null };
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj8 = { value, done: true };
          return obj8;
        } else {
          let result = closure_131_0(closure_131_2[14]).repairConjureGuildHints(closure_130_1, closure_130_3);
          c4 = 3;
          c5 = 1;
          const obj10 = {
            value: result.catch(() => {

                    }),
            done: false
          };
          return obj10;
        }
      } else if (3 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          const project1 = closure_131_0(closure_131_2[17]).getProject(closure_130_0);
          c4 = 4;
          c5 = 1;
          const obj13 = {
            value: project1.catch(() => {

                    }),
            done: false
          };
          return obj13;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 3;
        const obj = { value, done: true };
        return obj;
      }
      const promise = new Promise((onClose) => {
        const obj2 = { applicationId, application: null, guildId: null, onClose: null };
        application = application.getApplication(applicationId);
        if (application == null) {
          application = null;
        }
        obj2.application = application;
        obj2.guildId = guildId;
        obj2.onClose = onClose;
        const result = closure_1(applicationId[16]).openConjureAppInstallModal(obj2);
      });
      c4 = 2;
      c5 = 1;
      const obj14 = { value: promise, done: false };
      return obj14;
    } catch (tmp30) {
      c5 = tmp;
      throw tmp30;
    }
  }
};
function startPublish(project, navigatesOnPublish, platform) {
  project = project.project;
  platform = platform.platform;
  const guildId = platform.guildId;
  let id = project.id;
  let destination = null;
  if (navigatesOnPublish.navigatesOnPublish) {
    destination = navigatesOnPublish.destination;
  }
  let tmp2 = null;
  if ("user" !== project.install_scope) {
    tmp2 = null;
    if (null == destination) {
      tmp2 = closure_11(id);
    }
  }
  if (tmp2 != null) {
    tmp2.catch(() => {

    });
  }
  if ("channel" === destination) {
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    project(platform[22]).dispatch(obj2);
    let obj = project(platform[22]);
  }
  let promise = closure_12(id);
  let nextPromise = promise.then((ok) => {
    if (true !== ok.ok) {
      const _Error = Error;
      const error = new Error(project(platform[18])(ok));
      throw error;
    } else {
      return ok;
    }
  });
  promise = nextPromise.then(() => {
    const result = ConjureActionCreators.refreshPublishedProject(id, { isPreview: false });
    return result.catch(() => {

    });
  }, () => {

  });
  nextPromise.then(() => {
    if (null != project.guildId) {
      const application = ApplicationStore.getApplication(project.application_id);
      id = undefined;
      if (application != null) {
        const bot = application.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = project.application_id;
      }
      const profile = UserActionCreators.fetchProfile(id, { withMutualGuilds: true });
      profile.catch(() => {

      });
    }
    if (null != destination) {
      if (set.has(tmp3)) {
        const result = conjureFeedback.skipNextFeedbackForProject(id);
      }
      const nextPromise = promise.then(() => {
        let tmp;
        if ("channel" === destination) {
          tmp = (function waitForAppChannel() {
            const self = this;
            const apply = closure_1_23.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(projectId, guildId);
        }
        return tmp;
      });
      const cleanupPromise = promise.then(() => {
        let tmp;
        if ("channel" === destination) {
          tmp = (function waitForAppChannel() {
            const self = this;
            const apply = closure_1_23.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(projectId, guildId);
        }
        return tmp;
      }).finally(() => {
        project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
      });
      promise.then(() => {
        let tmp;
        if ("channel" === destination) {
          tmp = (function waitForAppChannel() {
            const self = this;
            const apply = closure_1_23.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(projectId, guildId);
        }
        return tmp;
      }).finally(() => {
        project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
      }).then(() => {
        let tmp = readPublishSubject(projectId, guildId);
        if (tmp == null) {
          tmp = project;
        }
        return closure_0(platform[13]).openConjurePublishDestination(destination, { applicationId: tmp.project.application_id, guildId: tmp.guildId, appChannelId: tmp.appChannelId, openProfile: closure_1_2.openProfile, openAutomodSettings: closure_1_2.openAutomodSettings });
      }).catch(() => {

      });
      const nextPromise1 = promise.then(() => {
        let tmp;
        if ("channel" === destination) {
          tmp = (function waitForAppChannel() {
            const self = this;
            const apply = closure_1_23.apply;
            if (typeof apply === "unknown") {
              let applyArgumentsResult = HermesBuiltin.applyArguments(self);
            } else {
              applyArgumentsResult = apply(self, arguments);
            }
            return applyArgumentsResult;
          })(projectId, guildId);
        }
        return tmp;
      }).finally(() => {
        project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
      }).then(() => {
        let tmp = readPublishSubject(projectId, guildId);
        if (tmp == null) {
          tmp = project;
        }
        return closure_0(platform[13]).openConjurePublishDestination(destination, { applicationId: tmp.project.application_id, guildId: tmp.guildId, appChannelId: tmp.appChannelId, openProfile: closure_1_2.openProfile, openAutomodSettings: closure_1_2.openAutomodSettings });
      });
    }
  }, (message) => {
    DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false });
    if (message instanceof Error) {
      message = message.message;
    } else {
      const intl = util.intl;
      message = intl.string(_modDef3723.gMWZeG);
    }
    platform.showError(message);
    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
  });
  if (null != tmp2) {
    if (null != project.guildId) {
      const nextPromise2 = nextPromise.then(() => {

      });
      nextPromise2.catch(() => {

      });
      const obj5 = { projectId: id, guildId: project.guildId, applicationId: null, projectName: null, publish: null, initialDraft: null };
      ({ application_id: obj3.applicationId, name: obj3.projectName } = project);
      obj5.publish = nextPromise2;
      obj5.initialDraft = tmp2;
      platform.openPublishNotes(obj5);
    }
  }
}
let closure_23 = async function _waitForAppChannel(arg0) {
  if (c5 === 2) {
    c5 = 3;
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
          closure_3 = tmp2;
          closure_2 = tmp3;
          closure_130_0 = closure_0;
          closure_130_1 = closure_1;
          let appChannelId;
          closure_130_2 = undefined;
          const _Date3 = Date;
          const sum = Date.now() + 5000;
          closure_130_2 = sum;
          const tmp34 = readPublishSubject(closure_0, closure_1);
          if (tmp34 != null) {
            appChannelId = tmp34.appChannelId;
          }
          if (null == appChannelId) {
            const _Date = Date;
            if (Date.now() < sum) {
              const promise = new Promise((arg0) => setTimeout(arg0, 250));
              c4 = 1;
              c5 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
          c5 = 3;
        }
      } else if (arg0 === 1) {
        c5 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const tmp12 = closure_131_17(closure_130_0, closure_130_1);
        let appChannelId1;
        if (tmp12 != null) {
          appChannelId1 = tmp12.appChannelId;
        }
        if (null == appChannelId1) {
          const _Date2 = Date;
        }
      }
      c5 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp21) {
      c5 = tmp;
      throw tmp21;
    }
  }
};
function runConjurePublishAction() {
  const self = this;
  const apply = closure_26.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_26 = async function _runConjurePublishAction(arg0) {
  if (c13 === 2) {
    c13 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
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
      c13 = 2;
      if (0 === c12) {
        if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c13 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_9 = tmp3;
          closure_8 = tmp7;
          closure_136_0 = closure_0;
          closure_136_1 = dependencyMap;
          closure_136_2 = undefined;
          closure_136_3 = undefined;
          closure_136_4 = undefined;
          closure_136_5 = undefined;
          const guildId = dependencyMap.guildId;
          closure_136_2 = guildId;
          const platform = dependencyMap.platform;
          if (true !== dependencyMap.busy) {
            if (!set.has(closure_0)) {
              const tmp43 = readPublishSubject(closure_0, guildId);
              if (null != tmp43) {
                if (!projectPublishing.isProjectPublishing(closure_0)) {
                  const conjurePublishAction = require("conjurePublishAction").resolveConjurePublishAction(tmp43.input);
                  closure_136_3 = conjurePublishAction;
                  if (null != conjurePublishAction) {
                    const obj5 = { entryPoint: tmp84, publishState: null, surface: null, installScope: null, action: null };
                    const status2 = tmp43.input.status;
                    state = undefined;
                    if (status2 != null) {
                      state = status2.state;
                    }
                    let publishState = state;
                    if (state == null) {
                      publishState = null;
                    }
                    obj5.publishState = publishState;
                    const status = tmp43.input.status;
                    let surface;
                    if (status != null) {
                      surface = status.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj5.surface = surface;
                    obj5.installScope = tmp43.project.install_scope;
                    obj5.action = conjurePublishAction.action;
                    const result = require("ConjureAnalytics").trackConjurePublishActionClicked(closure_0, obj5);
                    if ("open" !== conjurePublishAction.intent) {
                      if (null == conjurePublishAction.disabledReason) {
                        const integrationStatus = tmp43.input.integrationStatus;
                        let preview_ready;
                        if (integrationStatus != null) {
                          preview_ready = integrationStatus.preview_ready;
                        }
                        if (true === preview_ready) {
                          if ("consent_then_publish" !== conjurePublishAction.intent) {
                            startPublish(tmp43, conjurePublishAction, tmp85);
                          } else {
                            set.add(closure_0);
                            c11 = 1;
                            const requestConsent = platform.requestConsent;
                            let f153461 = requestConsent;
                            if (requestConsent == null) {
                              f153461 = (arg0) => closure_2_19(arg0, closure_1_2);
                            }
                            c12 = 2;
                            c13 = 1;
                            const obj7 = { value: f153461(closure_0), done: false };
                            return obj7;
                          }
                        } else {
                          platform.showPublishBlocked(require("conjurePublishBlockedReason").ConjurePublishBlockedReason.NO_PREVIEW);
                        }
                      }
                    } else if (null != conjurePublishAction.destination) {
                      openDestinationFor(tmp43, conjurePublishAction.destination, platform).catch(() => {

                      });
                      const promise = openDestinationFor(tmp43, conjurePublishAction.destination, platform);
                    }
                    const obj8 = require("ConjureAnalytics");
                  }
                  const obj2 = require("conjurePublishAction");
                }
              }
            }
          }
          c13 = 3;
        }
      } else if (1 === tmp7) {
        c11 = 0;
        closure_137_24.delete(closure_136_0);
        throw closure_10;
      } else if (arg0 === 1) {
        c13 = 3;
        throw value;
      } else if (arg0 === 2) {
        c11 = 0;
        closure_137_24.delete(closure_136_0);
        c13 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c11 = 0;
        closure_137_24.delete(closure_136_0);
        if (closure_137_13.isProjectPublishing(closure_136_0)) {
          c13 = 3;
          return { value: "IconComponent", done: null };
        } else {
          closure_136_4 = closure_137_17(closure_136_0, closure_136_2);
          let integrationStatus1;
          if (closure_136_4 != null) {
            integrationStatus1 = closure_136_4.input.integrationStatus;
          }
          c6 = integrationStatus1;
          if (integrationStatus1 == null) {
            c6 = null;
          }
          closure_136_5 = c6;
          if (null != closure_136_4) {
            const obj9 = { installScope: closure_136_4.project.install_scope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
            let preview_ready1;
            if (closure_136_5 != null) {
              preview_ready1 = closure_136_5.preview_ready;
            }
            obj9.previewReady = true === preview_ready1;
            let prop;
            if (closure_136_5 != null) {
              prop = closure_136_5.integration_installed;
            }
            let integrationInstalled = prop;
            if (prop == null) {
              integrationInstalled = null;
            }
            obj9.integrationInstalled = integrationInstalled;
            let prop1;
            if (closure_136_5 != null) {
              prop1 = closure_136_5.bot_permissions_changed;
            }
            obj9.botPermissionsChanged = true === prop1;
            if (!obj6.requiresPermissionReview(obj9)) {
              closure_137_22(closure_136_4, closure_136_3, closure_136_1);
            }
            obj6 = closure_137_0(closure_137_2[27]);
          }
        }
      }
      c13 = 3;
      return { value: "IconComponent", done: null };
    } catch (tmp61) {
      closure_10 = tmp61;
      if (tmp4 === c11) {
        c13 = tmp2;
        throw tmp61;
      } else {
        c12 = tmp;
      }
    }
  }
};
const ConjureConnectionStore = fn(12904);
({ draftPatchNotes: closure_11, publishProject: closure_12 } = ConjureConnectionStore);
const canPublishProject = fn(8699).canPublishProject;
const Permissions = fn(1085).Permissions;
let context = noop.createContext(null);
const set = new Set(["dm", "guild", "channel"]);
const set1 = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(arg0, arg1) {
  _require = arg0;
  context = arg1;
  if (arg1 == null) {
    context = guildId.useContext(state);
  }
  let guildId1;
  if (context != null) {
    guildId1 = context.guildId;
  }
  if (guildId1 == null) {
    guildId1 = null;
  }
  const items = [usesNativeAppChannels, appChannelName, guildName, integrationStatus, appChannelPending, status, installScope];
  const items1 = [arg0, guildId1];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => {
    let tmp2 = null;
    if (null != closure_0) {
      tmp2 = null;
      if (null != guildId1) {
        tmp2 = readPublishSubject(closure_0, tmp3);
      }
    }
    let tmp5 = null != tmp2;
    if (tmp5) {
      tmp5 = canPublishProject(tmp2.project);
    }
    const obj = { canPublish: tmp5, project: null, guildId: null, appChannelId: null, publishing: null, installScope: null, status: null, integrationStatus: null, guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesNativeAppChannels: null, botInGuild: null };
    project = undefined;
    if (tmp2 != null) {
      project = tmp2.project;
    }
    if (project == null) {
      project = null;
    }
    obj.project = project;
    guildId = undefined;
    if (tmp2 != null) {
      guildId = tmp2.guildId;
    }
    if (guildId == null) {
      guildId = null;
    }
    obj.guildId = guildId;
    let appChannelId;
    if (tmp2 != null) {
      appChannelId = tmp2.appChannelId;
    }
    if (appChannelId == null) {
      appChannelId = null;
    }
    obj.appChannelId = appChannelId;
    let isProjectPublishingResult = null != closure_0;
    if (isProjectPublishingResult) {
      isProjectPublishingResult = ConjureProjectStore.isProjectPublishing(closure_0);
    }
    obj.publishing = isProjectPublishingResult;
    installScope = undefined;
    if (tmp2 != null) {
      installScope = tmp2.input.installScope;
    }
    if (installScope == null) {
      installScope = null;
    }
    obj.installScope = installScope;
    status = undefined;
    if (tmp2 != null) {
      status = tmp2.input.status;
    }
    if (status == null) {
      status = null;
    }
    obj.status = status;
    integrationStatus = undefined;
    if (tmp2 != null) {
      integrationStatus = tmp2.input.integrationStatus;
    }
    if (integrationStatus == null) {
      integrationStatus = null;
    }
    obj.integrationStatus = integrationStatus;
    guildName = undefined;
    if (tmp2 != null) {
      guildName = tmp2.input.guildName;
    }
    if (guildName == null) {
      guildName = null;
    }
    obj.guildName = guildName;
    appChannelName = undefined;
    if (tmp2 != null) {
      appChannelName = tmp2.input.appChannelName;
    }
    if (appChannelName == null) {
      appChannelName = null;
    }
    obj.appChannelName = appChannelName;
    let flag;
    if (tmp2 != null) {
      flag = tmp2.input.appChannelPending;
    }
    if (flag == null) {
      flag = false;
    }
    obj.appChannelPending = flag;
    canManageGuild = undefined;
    if (tmp2 != null) {
      canManageGuild = tmp2.input.canManageGuild;
    }
    if (canManageGuild == null) {
      canManageGuild = null;
    }
    obj.canManageGuild = canManageGuild;
    canManageChannels = undefined;
    if (tmp2 != null) {
      canManageChannels = tmp2.input.canManageChannels;
    }
    if (canManageChannels == null) {
      canManageChannels = null;
    }
    obj.canManageChannels = canManageChannels;
    let flag2;
    if (tmp2 != null) {
      flag2 = tmp2.input.usesNativeAppChannels;
    }
    if (flag2 == null) {
      flag2 = false;
    }
    obj.usesNativeAppChannels = flag2;
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    obj.botInGuild = botInGuild;
    return obj;
  }, items1);
  ({ publishing, project } = stateFromStoresObject);
  guildId = stateFromStoresObject.guildId;
  installScope = stateFromStoresObject.installScope;
  status = stateFromStoresObject.status;
  integrationStatus = stateFromStoresObject.integrationStatus;
  guildName = stateFromStoresObject.guildName;
  appChannelName = stateFromStoresObject.appChannelName;
  appChannelPending = stateFromStoresObject.appChannelPending;
  let canManageGuild = stateFromStoresObject.canManageGuild;
  let canManageChannels = stateFromStoresObject.canManageChannels;
  usesNativeAppChannels = stateFromStoresObject.usesNativeAppChannels;
  let botInGuild = stateFromStoresObject.botInGuild;
  const items2 = [project, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesNativeAppChannels, botInGuild];
  ({ canPublish, appChannelId } = stateFromStoresObject);
  const memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      const obj = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesNativeAppChannels, botInGuild };
      tmp = obj;
    }
    return tmp;
  }, items2);
  state = undefined;
  if (memo != null) {
    const status2 = memo.status;
    if (status2 != null) {
      state = status2.state;
    }
  }
  if (state == null) {
    state = null;
  }
  let installScope1;
  if (memo != null) {
    installScope1 = memo.installScope;
  }
  let tmp7 = "guild" === installScope1;
  if (tmp7) {
    const status3 = memo.status;
    let surface;
    if (status3 != null) {
      surface = status3.surface;
    }
    tmp7 = "bot" === surface;
  }
  closure_17 = tmp7;
  let id;
  if (project != null) {
    id = project.id;
  }
  const items3 = [id, guildId, tmp7, state];
  const effect = obj.useEffect(() => {
    let tmp2 = null != project;
    if (tmp2) {
      tmp2 = null != guildId;
    }
    if (tmp2) {
      tmp2 = closure_17;
    }
    if (tmp2) {
      tmp2 = null != state;
    }
    if (tmp2) {
      tmp2 = "unpublished" !== state;
    }
    if (tmp2) {
      const application = ApplicationStore.getApplication(project.application_id);
      let id;
      if (application != null) {
        const bot = application.bot;
        if (bot != null) {
          id = bot.id;
        }
      }
      if (id == null) {
        id = project.application_id;
      }
      const profile = UserActionCreators.fetchProfile(id, { withMutualGuilds: true });
      profile.catch(() => {

      });
    }
  }, items3);
  const items4 = [memo];
  const memo1 = obj.useMemo(() => {
    let conjurePublishAction = null;
    if (null != memo) {
      conjurePublishAction = conjurePublishAction2.resolveConjurePublishAction(tmp);
    }
    return conjurePublishAction;
  }, items4);
  const items5 = [arg0, context];
  let tmp13 = null;
  if (null != context) {
    tmp13 = null;
    if (canPublish) {
      tmp13 = null;
      if (null != memo1) {
        const obj3 = {};
        const merged = Object.assign(memo1);
        let status1;
        if (memo != null) {
          status1 = memo.status;
        }
        if (status1 == null) {
          status1 = null;
        }
        obj3.status = status1;
        obj3.guildId = guildId;
        obj3.appChannelId = appChannelId;
        obj3.publishing = publishing;
        if (!publishing) {
          publishing = true === context.busy;
        }
        if (!publishing) {
          publishing = null != memo1.disabledReason;
        }
        obj3.disabled = publishing;
        obj3.run = tmp12;
        tmp13 = obj3;
      }
    }
  }
  return tmp13;
};
export const ConjurePublishActionContext = context;
export { requestConjureInstallConsent };
export const openConjurePublishedApp = function openConjurePublishedApp(projectId, guildId) {
  const tmp = readPublishSubject(projectId, guildId.guildId);
  if (null != tmp) {
    const obj2 = {};
    const merged = Object.assign(tmp.input);
    let tmp4 = null;
    if (null != tmp.input.status) {
      const obj = {};
      const merged1 = Object.assign(tmp.input.status);
      obj.state = "up_to_date";
      tmp4 = obj;
    }
    obj2.status = tmp4;
    const conjurePublishAction = conjurePublishAction2.resolveConjurePublishAction(obj2);
    let destination;
    if (conjurePublishAction != null) {
      destination = conjurePublishAction.destination;
    }
    if (null != destination) {
      const obj5 = { applicationId: tmp.project.application_id, guildId: null, appChannelId: null, openProfile: null, openAutomodSettings: null };
      ({ guildId: obj3.guildId, appChannelId: obj3.appChannelId } = tmp);
      ({ openProfile: obj3.openProfile, openAutomodSettings: obj3.openAutomodSettings } = guildId.platform);
      const result = openConjurePublishDestination.openConjurePublishDestination(destination, obj5);
      result.catch(() => {

      });
      const tmp8Result = openConjurePublishDestination;
    }
  }
};
export { runConjurePublishAction };