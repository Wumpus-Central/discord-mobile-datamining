// discord_app/modules/conjure/publish/useConjurePublishAction.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import Constants from "../../../Constants.tsx";
import intl2 from "../../../intl/index.native.tsx";
import _modDef3753 from "../intl/ConjureUntranslated.messages.js";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import ConjureProjectStore2 from "../projects/ConjureProjectStore.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import openConjurePublishDestination from "openConjurePublishDestination.tsx";
import conjurePublishAction2 from "conjurePublishAction.tsx";
import _asyncToGenerator from "../../../../_runtime/metro/00005__asyncToGenerator.js";
import react from "../../../../_runtime/00019_react.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureConnectionStore from "../connection/ConjureConnectionStore.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
const ConjureProjectStore = ConjureProjectStore2;
let _require, c12, c13, c4, c5, closure_10;

let closure_12;
let unpackModuleId;
const f125864 = () => {};
function readPublishSubject(projectId, guildId) {
  let canResult;
  let canResult1;
  let name;
  let obj4;
  let obj5;
  let tmp21;
  let tmp9;
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
      const obj2 = ConjureUtils;
      findConjureChannelIdResult = obj2.findConjureChannelId(tmp2, project.application_id);
    }
    let guild = null;
    if (null != tmp2) {
      guild = GuildStore.getGuild(tmp2);
    }
    const obj3 = { project, guildId: tmp2, appChannelId: findConjureChannelIdResult, input: obj4 };
    obj4 = {
      installScope: project.install_scope,
      status: ConjureProjectStore.getPublishStatus(projectId),
      integrationStatus: ConjureProjectStore.getIntegrationStatus(projectId),
      guildName: name,
      appChannelName: tmp9,
      appChannelPending: ConjureProjectStore.isAppChannelPending(projectId),
      canManageGuild: canResult,
      canManageChannels: canResult1,
      usesNativeAppChannels: obj5.projectUsesNativeAppChannels(project),
      botInGuild: tmp21,
    };
    name = undefined;
    if (guild != null) {
      name = guild.name;
    }
    if (name == null) {
      name = null;
    }
    tmp9 = null;
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
    canResult = null;
    if (null != guild) {
      canResult = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
    }
    canResult1 = null;
    if (null != guild) {
      canResult1 = PermissionStore.can(Permissions.MANAGE_CHANNELS, guild);
    }
    guild_id = tmp2;
    tmp21 = null;
    obj5 = ConjureTypes;
    if (null != tmp2) {
      const getMutualGuilds = UserProfileStore.getMutualGuilds;
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
      const mutualGuilds = getMutualGuilds(id);
      let someResult = null;
      if (null != mutualGuilds) {
        someResult = mutualGuilds.some((guild) => guild.guild.id === guild_id);
      }
      tmp21 = someResult;
    }
    return obj3;
  }
}
function openDestinationFor(applicationId, destination, openProfile) {
  obj = openConjurePublishDestination;
  const obj2 = {
    applicationId: applicationId.project.application_id,
    guildId: applicationId.guildId,
    appChannelId: applicationId.appChannelId,
    openProfile: openProfile.openProfile,
    openAutomodSettings: openProfile.openAutomodSettings,
  };
  return obj.openConjurePublishDestination(destination, obj2);
}
function requestConjureInstallConsent() {
  return obj(...arguments);
}
let obj = function _requestConjureInstallConsent() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let closure_2;
    let closure_3;
    let closure_0 = arg0;
    let closure_1 = arg1;
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
        let guildId;
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
            const applicationId = tmp2;
            project = undefined;
            guildId = undefined;
            const obj15 = project;
            project = project.getProject(closure_0);
            let prop;
            if (project != null) {
              prop = project.preview_application_id;
            }
            if (null != project) {
              if (null != prop) {
                const obj9 = require("ConjureInstallTarget");
                guildId = obj9.conjureInstallGuildId(project, obj15.getIntegrationStatus(closure_0), closure_1);
                if (null == application.getApplication(prop)) {
                  const obj11 = require("ApplicationActionCreators");
                  application = obj11.fetchApplication(prop);
                  c4 = 1;
                  c5 = 1;
                  const obj6 = {
                    value: application.catch(() => {}),
                    done: false,
                  };
                  return obj6;
                }
              }
            }
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj7 = { value, done: true };
            return obj7;
          }
        } else if (2 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            const obj5 = closure_131_0(closure_131_2[14]);
            let result = obj5.repairConjureGuildHints(project, guildId);
            c4 = 3;
            c5 = 1;
            const obj10 = {
              value: result.catch(() => {}),
              done: false,
            };
            return obj10;
          }
        } else if (3 === c4) {
          if (arg0 === 1) {
            c5 = 3;
            throw value;
          } else if (arg0 === 2) {
            c5 = 3;
            const obj12 = { value, done: true };
            return obj12;
          } else {
            const obj2 = closure_131_0(closure_131_2[17]);
            const project1 = obj2.getProject(closure_0);
            c4 = 4;
            c5 = 1;
            const obj13 = {
              value: project1.catch(() => {}),
              done: false,
            };
            return obj13;
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        }
        const self = this;
        const self2 = this;
        const promise = new Promise((onClose) => {
          obj = { applicationId, application, guildId, onClose };
          const openConjureAppInstallModal = closure_1(applicationId[16]).openConjureAppInstallModal;
          closure_1(applicationId[16]);
          application = application.getApplication(applicationId);
          if (application == null) {
            application = null;
          }
          const result = openConjureAppInstallModal(obj);
        });
        c4 = 2;
        c5 = 1;
        const obj14 = { value: promise, done: false };
        return obj14;
      } catch (tmp27) {
        c5 = 3;
        throw tmp27;
      }
    }
  });
  return obj(...arguments);
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
    tmp2.catch(() => {});
  }
  if ("channel" === destination) {
    obj = project(platform[21]);
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    obj.dispatch(obj2);
  }
  let promise = closure_12(id);
  let nextPromise = promise.then(function (ok) {
    if (true !== ok.ok) {
      const _Error = Error;
      const self = this;
      const self2 = this;
      const error = new Error(project(platform[18])(ok));
      throw error;
    } else {
      return ok;
    }
  });
  promise = nextPromise.then(
    () => {
      obj = ConjureActionCreators;
      const result = obj.refreshPublishedProject(id, { isPreview: false });
      return result.catch(() => {});
    },
    () => {},
  );
  let nextPromise1 = nextPromise.then(
    () => {
      let projectId;
      if (null != project.guildId) {
        const fetchProfile = UserActionCreators.fetchProfile;
        UserActionCreators;
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
        const profile = fetchProfile(id, { withMutualGuilds: true });
        profile.catch(f125864);
      }
      if (null != destination) {
        const nextPromise = promise.then(() => {
          function waitForAppChannel() {
            return closure_1_22(...arguments);
          }
          let tmp;
          if ("channel" === destination) {
            tmp = waitForAppChannel(projectId, guildId);
          }
          return tmp;
        });
        const cleanupPromise = nextPromise.finally(() => {
          obj = project(platform[21]);
          const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
          obj.dispatch(obj2);
        });
        const nextPromise1 = cleanupPromise.then(() => {
          let tmp = readPublishSubject(projectId, guildId);
          if (tmp == null) {
            tmp = closure_1_0;
          }
          obj = closure_0(platform[13]);
          const obj2 = {
            applicationId: tmp.project.application_id,
            guildId: tmp.guildId,
            appChannelId: tmp.appChannelId,
            openProfile: closure_1_2.openProfile,
            openAutomodSettings: closure_1_2.openAutomodSettings,
          };
          return obj.openConjurePublishDestination(destination, obj2);
        });
        nextPromise1.catch(() => {});
      }
    },
    (message) => {
      obj = DispatcherDefault;
      const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
      obj.dispatch(obj2);
      const showError = platform.showError;
      if (message instanceof Error) {
        message = message.message;
      } else {
        const intl = intl2.intl;
        message = intl.string(_modDef3753.gMWZeG);
      }
      showError(message);
    },
  );
  if (null != tmp2) {
    if (null != project.guildId) {
      const nextPromise2 = nextPromise.then(() => {});
      nextPromise2.catch(() => {});
      const obj5 = {
        projectId: id,
        guildId: project.guildId,
        applicationId: null,
        projectName: null,
        publish: nextPromise2,
        initialDraft: tmp2,
      };
      ({ application_id: obj3.applicationId, name: obj3.projectName } = project);
      platform.openPublishNotes(obj5);
    }
  }
}
obj = function _waitForAppChannel() {
  obj = _asyncToGenerator(async function (arg0, arg1) {
    let closure_0 = arg0;
    let closure_1 = arg1;
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
            let closure_3 = tmp;
            let closure_2 = tmp2;
            let appChannelId;
            const _Date3 = Date;
            const sum = Date.now() + 5000;
            let c2 = sum;
            const tmp30 = readPublishSubject(closure_0, closure_1);
            if (tmp30 != null) {
              appChannelId = tmp30.appChannelId;
            }
            if (null == appChannelId) {
              const _Date = Date;
              if (Date.now() < sum) {
                const self = this;
                const self2 = this;
                const promise = new Promise((arg0) => setTimeout(arg0, 250));
                c4 = 1;
                c5 = 1;
                const obj4 = { value: promise, done: false };
                return obj4;
              }
            }
          }
        } else if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const tmp11 = closure_131_17(closure_0, closure_1);
          let appChannelId1;
          if (tmp11 != null) {
            appChannelId1 = tmp11.appChannelId;
          }
          if (null == appChannelId1) {
            const _Date2 = Date;
          }
        }
        c5 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp18) {
        c5 = 3;
        throw tmp18;
      }
    }
  });
  return obj(...arguments);
};
function runConjurePublishAction() {
  return obj(...arguments);
}
obj = function _runConjurePublishAction() {
  let projectPublishing;
  obj = _asyncToGenerator(async (arg0, arg1, arg2) => {
    let integrationInstalled;
    let preview_ready1;
    let prop1;
    let publishState;
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    if (c13 === 2) {
      c13 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "IconComponent", done: null };
      }
    } else {
      let c11;
      try {
        let conjurePublishAction;
        let surface;
        let closure_5;
        let guildId;
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
            let closure_9 = tmp;
            let closure_8 = tmp4;
            closure_1 = closure_2;
            conjurePublishAction = undefined;
            surface = undefined;
            closure_5 = undefined;
            guildId = closure_2.guildId;
            const platform = closure_2.platform;
            if (true !== closure_2.busy) {
              if (!set.has(closure_0)) {
                const tmp40 = readPublishSubject(closure_0, guildId);
                if (null != tmp40) {
                  if (!projectPublishing.isProjectPublishing(closure_0)) {
                    const obj2 = require("conjurePublishAction");
                    conjurePublishAction = obj2.resolveConjurePublishAction(tmp40.input);
                    if (null != conjurePublishAction) {
                      const obj5 = {
                        entryPoint: tmp81,
                        publishState,
                        surface,
                        installScope: tmp40.project.install_scope,
                        action: conjurePublishAction.action,
                      };
                      const status2 = tmp40.input.status;
                      let state;
                      const trackConjurePublishActionClicked =
                        require("ConjureAnalytics").trackConjurePublishActionClicked;
                      const tmp87 = require("ConjureAnalytics");
                      if (status2 != null) {
                        state = status2.state;
                      }
                      publishState = state;
                      if (state == null) {
                        publishState = null;
                      }
                      const status = tmp40.input.status;
                      surface = undefined;
                      if (status != null) {
                        surface = status.surface;
                      }
                      if (surface == null) {
                        surface = null;
                      }
                      const result = trackConjurePublishActionClicked(closure_0, obj5);
                      if ("open" !== conjurePublishAction.intent) {
                        if (null == conjurePublishAction.disabledReason) {
                          const integrationStatus = tmp40.input.integrationStatus;
                          let preview_ready;
                          if (integrationStatus != null) {
                            preview_ready = integrationStatus.preview_ready;
                          }
                          if (true === preview_ready) {
                            if ("consent_then_publish" !== conjurePublishAction.intent) {
                              startPublish(tmp40, conjurePublishAction, tmp82);
                            } else {
                              set.add(closure_0);
                              c11 = 1;
                              const requestConsent = platform.requestConsent;
                              let f153697 = requestConsent;
                              if (requestConsent == null) {
                                f153697 = (arg0) => closure_2_19(arg0, closure_1_2);
                              }
                              c12 = 2;
                              c13 = 1;
                              const obj6 = { value: f153697(closure_0), done: false };
                              return obj6;
                            }
                          } else {
                            platform.showPublishBlocked(
                              require("conjurePublishBlockedReason").ConjurePublishBlockedReason.NO_PREVIEW,
                            );
                          }
                        }
                      } else if (null != conjurePublishAction.destination) {
                        const promise = openDestinationFor(tmp40, conjurePublishAction.destination, platform);
                        promise.catch(() => {});
                      }
                    }
                  }
                }
              }
            }
          }
        } else if (1 === c12) {
          c11 = 0;
          closure_137_23.delete(closure_0);
          throw closure_10;
        } else if (arg0 === 1) {
          c13 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 0;
          closure_137_23.delete(closure_0);
          c13 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          c11 = 0;
          closure_137_23.delete(closure_0);
          if (closure_137_13.isProjectPublishing(closure_0)) {
            c13 = 3;
            return { value: "IconComponent", done: null };
          } else {
            surface = closure_137_17(closure_0, guildId);
            let integrationStatus1;
            if (surface != null) {
              integrationStatus1 = surface.input.integrationStatus;
            }
            let c6 = integrationStatus1;
            if (integrationStatus1 == null) {
              c6 = null;
            }
            closure_5 = c6;
            if (null != surface) {
              const obj7 = {
                installScope: surface.project.install_scope,
                previewReady: true === preview_ready1,
                integrationInstalled,
                botPermissionsChanged: true === prop1,
              };
              preview_ready1 = undefined;
              const requiresPermissionReview = closure_137_0(closure_137_2[26]).requiresPermissionReview;
              const tmp78 = closure_137_0(closure_137_2[26]);
              if (closure_5 != null) {
                preview_ready1 = closure_5.preview_ready;
              }
              let prop;
              if (closure_5 != null) {
                prop = closure_5.integration_installed;
              }
              integrationInstalled = prop;
              if (prop == null) {
                integrationInstalled = null;
              }
              prop1 = undefined;
              if (closure_5 != null) {
                prop1 = closure_5.bot_permissions_changed;
              }
              if (!requiresPermissionReview(obj7)) {
                closure_137_21(surface, conjurePublishAction, closure_1);
              }
            }
            c13 = 3;
            return { value: "IconComponent", done: null };
          }
        }
        c13 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp58) {
        closure_10 = tmp58;
        if (0 === c11) {
          c13 = 3;
          throw tmp58;
        } else {
          c12 = 1;
        }
      }
    }
  });
  return obj(...arguments);
};
({ draftPatchNotes: unpackModuleId, publishProject: closure_12 } = ConjureConnectionStore);
const canPublishProject = ConjureProjectStore2.canPublishProject;
const Permissions = Constants.Permissions;
let context = react.createContext(null);
const set = new Set();
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(arg0, arg1) {
  let appChannelId;
  let appChannelName;
  let appChannelPending;
  let canPublish;
  let closure_0;
  let guildId;
  let guildName;
  let installScope;
  let integrationStatus;
  let project;
  let publishing;
  let state;
  let status;
  let status1;
  let usesNativeAppChannels;
  _require = arg0;
  context = arg1;
  obj = guildId;
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
  const items = [
    usesNativeAppChannels,
    appChannelName,
    guildName,
    integrationStatus,
    appChannelPending,
    status,
    installScope,
  ];
  const items1 = [arg0, guildId1];
  const obj2 = require("get initialized");
  const stateFromStoresObject = obj2.useStateFromStoresObject(
    items,
    () => {
      let appChannelId;
      let flag;
      let flag2;
      let isProjectPublishingResult;
      let tmp2 = null;
      if (null != closure_0) {
        tmp2 = null;
        if (null != guildId1) {
          tmp2 = readPublishSubject(closure_0, tmp3);
        }
      }
      obj = {
        canPublish: null != tmp2 && canPublishProject(tmp2.project),
        project,
        guildId,
        appChannelId,
        publishing: isProjectPublishingResult,
        installScope,
        status,
        integrationStatus,
        guildName,
        appChannelName,
        appChannelPending: flag,
        canManageGuild,
        canManageChannels,
        usesNativeAppChannels: flag2,
        botInGuild,
      };
      project = undefined;
      if (tmp2 != null) {
        project = tmp2.project;
      }
      if (project == null) {
        project = null;
      }
      guildId = undefined;
      if (tmp2 != null) {
        guildId = tmp2.guildId;
      }
      if (guildId == null) {
        guildId = null;
      }
      appChannelId = undefined;
      if (tmp2 != null) {
        appChannelId = tmp2.appChannelId;
      }
      if (appChannelId == null) {
        appChannelId = null;
      }
      installScope = undefined;
      isProjectPublishingResult = null != closure_0 && ConjureProjectStore.isProjectPublishing(closure_0);
      if (tmp2 != null) {
        installScope = tmp2.input.installScope;
      }
      if (installScope == null) {
        installScope = null;
      }
      status = undefined;
      if (tmp2 != null) {
        status = tmp2.input.status;
      }
      if (status == null) {
        status = null;
      }
      integrationStatus = undefined;
      if (tmp2 != null) {
        integrationStatus = tmp2.input.integrationStatus;
      }
      if (integrationStatus == null) {
        integrationStatus = null;
      }
      guildName = undefined;
      if (tmp2 != null) {
        guildName = tmp2.input.guildName;
      }
      if (guildName == null) {
        guildName = null;
      }
      appChannelName = undefined;
      if (tmp2 != null) {
        appChannelName = tmp2.input.appChannelName;
      }
      if (appChannelName == null) {
        appChannelName = null;
      }
      flag = undefined;
      if (tmp2 != null) {
        flag = tmp2.input.appChannelPending;
      }
      if (flag == null) {
        flag = false;
      }
      canManageGuild = undefined;
      if (tmp2 != null) {
        canManageGuild = tmp2.input.canManageGuild;
      }
      if (canManageGuild == null) {
        canManageGuild = null;
      }
      canManageChannels = undefined;
      if (tmp2 != null) {
        canManageChannels = tmp2.input.canManageChannels;
      }
      if (canManageChannels == null) {
        canManageChannels = null;
      }
      flag2 = undefined;
      if (tmp2 != null) {
        flag2 = tmp2.input.usesNativeAppChannels;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      botInGuild = undefined;
      if (tmp2 != null) {
        botInGuild = tmp2.input.botInGuild;
      }
      if (botInGuild == null) {
        botInGuild = null;
      }
      return obj;
    },
    items1,
  );
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
  const items2 = [
    project,
    installScope,
    status,
    integrationStatus,
    guildName,
    appChannelName,
    appChannelPending,
    canManageGuild,
    canManageChannels,
    usesNativeAppChannels,
    botInGuild,
  ];
  ({ canPublish, appChannelId } = stateFromStoresObject);
  const memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      tmp = {
        installScope,
        status,
        integrationStatus,
        guildName,
        appChannelName,
        appChannelPending,
        canManageGuild,
        canManageChannels,
        usesNativeAppChannels,
        botInGuild,
      };
      obj = {
        installScope,
        status,
        integrationStatus,
        guildName,
        appChannelName,
        appChannelPending,
        canManageGuild,
        canManageChannels,
        usesNativeAppChannels,
        botInGuild,
      };
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
  let closure_17 = tmp7;
  let id;
  const useEffect = obj.useEffect;
  if (project != null) {
    id = project.id;
  }
  const items3 = [id, guildId, tmp7, state];
  const effect = useEffect(() => {
    const tmp2 = null != project && null != guildId && closure_17 && null != state && "unpublished" !== state;
    if (tmp2) {
      const fetchProfile = UserActionCreators.fetchProfile;
      UserActionCreators;
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
      const profile = fetchProfile(id, { withMutualGuilds: true });
      profile.catch(f125864);
    }
  }, items3);
  const items4 = [memo];
  const memo1 = obj.useMemo(() => {
    let conjurePublishAction = null;
    if (null != memo) {
      obj = conjurePublishAction2;
      conjurePublishAction = obj.resolveConjurePublishAction(tmp);
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
        const obj3 = { status: status1, guildId, appChannelId, publishing, disabled: publishing, run: tmp12 };
        const merged = Object.assign(memo1);
        status1 = undefined;
        if (memo != null) {
          status1 = memo.status;
        }
        if (status1 == null) {
          status1 = null;
        }
        if (!publishing) {
          let flag = true;
          publishing = true === context.busy;
        }
        if (!publishing) {
          publishing = null != memo1.disabledReason;
        }
        tmp13 = obj3;
      }
    }
  }
  return tmp13;
}
export const ConjurePublishActionContext = context;
export { requestConjureInstallConsent };
export const openConjurePublishedApp = function openConjurePublishedApp(projectId, guildId) {
  let tmp4;
  const tmp = readPublishSubject(projectId, guildId.guildId);
  if (null != tmp) {
    const obj2 = { status: tmp4 };
    const resolveConjurePublishAction = conjurePublishAction2.resolveConjurePublishAction;
    conjurePublishAction2;
    const merged = Object.assign(tmp.input);
    tmp4 = null;
    if (null != tmp.input.status) {
      obj = { state: "up_to_date" };
      const merged1 = Object.assign(tmp.input.status);
      tmp4 = obj;
    }
    const conjurePublishAction = resolveConjurePublishAction(obj2);
    let destination;
    if (conjurePublishAction != null) {
      destination = conjurePublishAction.destination;
    }
    if (null != destination) {
      const platform = guildId.platform;
      const obj4 = {
        applicationId: tmp.project.application_id,
        guildId: null,
        appChannelId: null,
        openProfile: null,
        openAutomodSettings: null,
      };
      ({ guildId: obj3.guildId, appChannelId: obj3.appChannelId } = tmp);
      ({ openProfile: obj3.openProfile, openAutomodSettings: obj3.openAutomodSettings } = platform);
      const tmp8Result = openConjurePublishDestination;
      const result = tmp8Result.openConjurePublishDestination(destination, obj4);
      result.catch(() => {});
    }
  }
};
export { runConjurePublishAction };
