// discord_app/modules/conjure/publish/useConjurePublishAction.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import util from "../../../intl/index.native.tsx";
import _modDef3849 from "../intl/ConjureUntranslated.messages.js";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import ConjureTypes from "../ConjureTypes.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import conjureAppInServer from "../projects/conjureAppInServer.tsx";
import ConjureActionCreators from "../projects/ConjureActionCreators.tsx";
import openConjurePublishDestination from "openConjurePublishDestination.tsx";
import conjurePublishFailureMessageDefault from "conjurePublishFailureMessage.tsx";
import conjurePublishAction2 from "conjurePublishAction.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore from "../projects/ConjureProjectStore.tsx";

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
    const obj4 = {
      installScope: project.install_scope,
      status: ConjureProjectStore.getPublishStatus(projectId),
      integrationStatus: ConjureProjectStore.getIntegrationStatus(projectId),
      guildName: null,
      appChannelName: null,
      appChannelPending: null,
      canManageGuild: null,
      canManageChannels: null,
      usesAppChannels: null,
      botInGuild: null,
      liveNameOutdated: null,
    };
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
    obj4.usesAppChannels = ConjureTypes.projectUsesAppChannels(project);
    obj4.botInGuild = conjureAppInServer.readConjureBotInGuild(project, tmp2);
    let flag = false;
    if (!obj7.isPreviewlessProject(project)) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name2;
      if (application != null) {
        name2 = application.name;
      }
      flag = null != name2 && name2 !== project.name;
      const tmp24 = null != name2 && name2 !== project.name;
    }
    obj4.liveNameOutdated = flag;
    obj3.input = obj4;
    return obj3;
  }
}
function openDestinationFor(applicationId, channel, openProfile) {
  return openConjurePublishDestination.openConjurePublishDestination(channel, {
    applicationId: applicationId.project.application_id,
    guildId: applicationId.guildId,
    appChannelId: applicationId.appChannelId,
    openProfile: openProfile.openProfile,
    openAutomodSettings: openProfile.openAutomodSettings,
  });
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
      return { value: "IconComponent", done: "+51" };
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
              closure_130_3 = require("ConjureInstallTarget").conjureInstallGuildId(
                project,
                project.getIntegrationStatus(closure_0),
                closure_1,
              );
              if (null == application.getApplication(prop)) {
                application = require("ApplicationActionCreators").fetchApplication(prop);
                c4 = 1;
                c5 = 1;
                const obj6 = {
                  value: application.catch(() => {}),
                  done: false,
                };
                return obj6;
              }
              const obj9 = require("ConjureInstallTarget");
            }
          }
          c5 = 3;
          return { value: "IconComponent", done: "+51" };
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
          let result = closure_131_0(closure_131_2[15]).repairConjureGuildHints(closure_130_1, closure_130_3);
          c4 = 3;
          c5 = 1;
          const obj10 = {
            value: result.catch(() => {}),
            done: false,
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
          const project1 = closure_131_0(closure_131_2[18]).getProject(closure_130_0);
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
        const result = closure_1(applicationId[17]).openConjureAppInstallModal(obj2);
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
  const id = project.id;
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
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    project(platform[22]).dispatch(obj2);
    let obj = project(platform[22]);
  }
  let promise = closure_12(id);
  let nextPromise = promise.then((ok) => {
    if (true === ok.ok) {
      return ok;
    } else {
      if (20088 === ok.code) {
        project = ConjureActionCreators.getProject(id);
        project.catch(() => {});
      }
      const _Error = Error;
      const error = new Error(conjurePublishFailureMessageDefault(ok));
      throw error;
    }
  });
  promise = nextPromise.then(
    () => {
      const result = ConjureActionCreators.refreshPublishedProject(id, { isPreview: false });
      return result.catch(() => {});
    },
    () => {},
  );
  nextPromise.then(
    (channel_skipped) => {
      if (null != project.guildId) {
        const obj = UserActionCreators;
        const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), {
          withMutualGuilds: true,
        });
        profile.catch(() => {});
      }
      if (true === channel_skipped.channel_skipped) {
        const obj4 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
        DispatcherDefault.dispatch(obj4);
      }
      if (tmp9) {
        const nextPromise = promise.then(() => {
          let tmp;
          if ("channel" === destination) {
            tmp = (function waitForAppChannel() {
              const self = this;
              const apply = closure_1_22.apply;
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
        const cleanupPromise = promise
          .then(() => {
            let tmp;
            if ("channel" === destination) {
              tmp = (function waitForAppChannel() {
                const self = this;
                const apply = closure_1_22.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(projectId, guildId);
            }
            return tmp;
          })
          .finally(() => {
            project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
          });
        promise
          .then(() => {
            let tmp;
            if ("channel" === destination) {
              tmp = (function waitForAppChannel() {
                const self = this;
                const apply = closure_1_22.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(projectId, guildId);
            }
            return tmp;
          })
          .finally(() => {
            project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
          })
          .then(() => {
            let tmp = readPublishSubject(projectId, guildId);
            if (tmp == null) {
              tmp = project;
            }
            return closure_0(platform[14]).openConjurePublishDestination(destination, {
              applicationId: tmp.project.application_id,
              guildId: tmp.guildId,
              appChannelId: tmp.appChannelId,
              openProfile: closure_1_2.openProfile,
              openAutomodSettings: closure_1_2.openAutomodSettings,
            });
          })
          .catch(() => {});
        const nextPromise1 = promise
          .then(() => {
            let tmp;
            if ("channel" === destination) {
              tmp = (function waitForAppChannel() {
                const self = this;
                const apply = closure_1_22.apply;
                if (typeof apply === "unknown") {
                  let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                } else {
                  applyArgumentsResult = apply(self, arguments);
                }
                return applyArgumentsResult;
              })(projectId, guildId);
            }
            return tmp;
          })
          .finally(() => {
            project(platform[22]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
          })
          .then(() => {
            let tmp = readPublishSubject(projectId, guildId);
            if (tmp == null) {
              tmp = project;
            }
            return closure_0(platform[14]).openConjurePublishDestination(destination, {
              applicationId: tmp.project.application_id,
              guildId: tmp.guildId,
              appChannelId: tmp.appChannelId,
              openProfile: closure_1_2.openProfile,
              openAutomodSettings: closure_1_2.openAutomodSettings,
            });
          });
      }
      tmp9 = null != destination && true !== channel_skipped.channel_skipped;
    },
    (message) => {
      DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false });
      if (message instanceof Error) {
        message = message.message;
      } else {
        const intl = util.intl;
        message = intl.string(_modDef3849.gMWZeG);
      }
      platform.showError(message);
      const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
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
        publish: null,
        initialDraft: null,
      };
      ({ application_id: obj3.applicationId, name: obj3.projectName } = project);
      obj5.publish = nextPromise2;
      obj5.initialDraft = tmp2;
      platform.openPublishNotes(obj5);
    }
  }
}
let closure_22 = async function _waitForAppChannel(arg0) {
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
      return { value: "IconComponent", done: "+51" };
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
  const apply = closure_25.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_25 = async function _runConjurePublishAction(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj3 = { value, done: true };
      return obj3;
    } else {
      return { value: "IconComponent", done: "+51" };
    }
  } else {
    try {
      c5 = 2;
      if (0 === num3) {
        num3 = 1;
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = closure_2;
          ({ guildId, platform, busy } = closure_2);
          if (true !== busy) {
            let confirmReason = set;
            busy = set.has(closure_0);
            if (!busy) {
              busy = readPublishSubject;
              let showPublishBlockedResult1 = readPublishSubject(closure_0, guildId);
              if (null != showPublishBlockedResult1) {
                guildId = projectPublishing;
                busy = projectPublishing.isProjectPublishing(closure_0);
                if (!busy) {
                  let MISSING_MANAGE_CHANNELS = _require;
                  confirmReason = dependencyMap;
                  busy = require("conjurePublishAction").resolveConjurePublishAction(showPublishBlockedResult1.input);
                  if (null != busy) {
                    const result = MISSING_MANAGE_CHANNELS(confirmReason[25]);
                    const obj5 = {
                      entryPoint: tmp23,
                      publishState: null,
                      surface: null,
                      installScope: null,
                      action: null,
                    };
                    const status2 = showPublishBlockedResult1.input.status;
                    let state;
                    if (status2 != null) {
                      state = status2.state;
                    }
                    let publishState = state;
                    if (state == null) {
                      publishState = null;
                    }
                    obj5.publishState = publishState;
                    const status = showPublishBlockedResult1.input.status;
                    let surface;
                    if (status != null) {
                      surface = status.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj5.surface = surface;
                    obj5.installScope = showPublishBlockedResult1.project.install_scope;
                    obj5.action = busy.action;
                    const result1 = result.trackConjurePublishActionClicked(closure_0, obj5);
                    if ("open" === busy.intent) {
                      if (null != busy.destination) {
                        openDestinationFor(showPublishBlockedResult1, busy.destination, platform).catch(() => {});
                        const promise = openDestinationFor(showPublishBlockedResult1, busy.destination, platform);
                      }
                    }
                  }
                  if (null == busy.disabledReason) {
                    const integrationStatus = showPublishBlockedResult1.input.integrationStatus;
                    let preview_ready;
                    if (integrationStatus != null) {
                      preview_ready = integrationStatus.preview_ready;
                    }
                    if (flag === preview_ready) {
                      if (null == busy.confirmReason) {
                        c5 = num3;
                        const obj6 = { value: continuePublish(closure_0, busy, tmp24), done: false };
                        return obj6;
                      } else {
                        MISSING_MANAGE_CHANNELS = MISSING_MANAGE_CHANNELS(confirmReason[26]).ConjurePublishBlockedReason
                          .MISSING_MANAGE_CHANNELS;
                        confirmReason = busy.confirmReason;
                        platform.showPublishBlocked(MISSING_MANAGE_CHANNELS, confirmReason, () => {
                          closure_2_26(closure_0, busy, closure_1).catch(() => {});
                        });
                      }
                    } else {
                      showPublishBlockedResult1 = platform.showPublishBlocked(
                        MISSING_MANAGE_CHANNELS(confirmReason[26]).ConjurePublishBlockedReason.NO_PREVIEW,
                      );
                    }
                  } else {
                    platform.showPublishBlocked(
                      MISSING_MANAGE_CHANNELS(confirmReason[26]).ConjurePublishBlockedReason.MISSING_MANAGE_SERVER,
                      busy.disabledReason,
                    );
                  }
                  const obj2 = require("conjurePublishAction");
                }
              }
            }
          }
        }
      } else {
        num3 = 1;
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj = { value, done: true };
          return obj;
        }
      }
      c5 = 3;
    } catch (tmp17) {
      c5 = tmp;
      throw tmp17;
    }
  }
};
function continuePublish() {
  const self = this;
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _continuePublish(arg0, arg1, arg2) {
  closure_0 = arg0;
  let intent = arg1;
  closure_2 = arg2;
  c10 = 0;
  c11 = 0;
  c9 = 0;
  return (async (arg0, value, arg2) => {
    if (c11 === 2) {
      c11 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "+51" };
      }
    } else {
      try {
        c11 = 2;
        if (0 === c10) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_7 = tmp3;
            closure_6 = tmp7;
            closure_134_0 = closure_0;
            closure_134_1 = intent;
            closure_134_2 = closure_2;
            closure_134_3 = undefined;
            closure_134_4 = undefined;
            closure_134_5 = undefined;
            const guildId = closure_2.guildId;
            closure_134_3 = guildId;
            const tmp74 = readPublishSubject(closure_0, guildId);
            if (null != tmp74) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  startPublish(tmp74, intent, closure_2);
                } else {
                  set.add(closure_0);
                  c9 = 1;
                  const requestConsent = closure_2.platform.requestConsent;
                  f156025 = requestConsent;
                  if (requestConsent == null) {
                    f156025 = (arg0) => closure_2_19(arg0, closure_1_3);
                  }
                  c10 = 2;
                  c11 = 1;
                  const obj4 = { value: f156025(closure_0), done: false };
                  return obj4;
                }
              }
            }
            c11 = 3;
          }
        } else if (1 === tmp7) {
          c9 = 0;
          closure_135_23.delete(closure_134_0);
          throw closure_8;
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c9 = 0;
          closure_135_23.delete(closure_134_0);
          c11 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c9 = 0;
          closure_135_23.delete(closure_134_0);
          if (closure_135_13.isProjectPublishing(closure_134_0)) {
            c11 = 3;
            return { value: "IconComponent", done: "+51" };
          } else {
            closure_134_4 = closure_135_17(closure_134_0, closure_134_3);
            let integrationStatus;
            if (closure_134_4 != null) {
              integrationStatus = closure_134_4.input.integrationStatus;
            }
            c4 = integrationStatus;
            if (integrationStatus == null) {
              c4 = null;
            }
            closure_134_5 = c4;
            if (null != closure_134_4) {
              const obj6 = {
                installScope: closure_134_4.project.install_scope,
                previewReady: null,
                integrationInstalled: null,
                botPermissionsChanged: null,
              };
              let preview_ready;
              if (closure_134_5 != null) {
                preview_ready = closure_134_5.preview_ready;
              }
              obj6.previewReady = true === preview_ready;
              let prop;
              if (closure_134_5 != null) {
                prop = closure_134_5.integration_installed;
              }
              integrationInstalled = prop;
              if (prop == null) {
                integrationInstalled = null;
              }
              obj6.integrationInstalled = integrationInstalled;
              let prop1;
              if (closure_134_5 != null) {
                prop1 = closure_134_5.bot_permissions_changed;
              }
              obj6.botPermissionsChanged = true === prop1;
              if (!obj5.requiresPermissionReview(obj6)) {
                closure_135_21(closure_134_4, closure_134_1, closure_134_2);
              }
              obj5 = closure_135_0(closure_135_2[27]);
            }
          }
        }
        c11 = 3;
        return { value: "IconComponent", done: "+51" };
      } catch (tmp48) {
        closure_8 = tmp48;
        if (tmp4 === c9) {
          c11 = tmp2;
          throw tmp48;
        } else {
          c10 = tmp;
        }
      }
    }
  })();
};
const ConjureConnectionStore = fn(13213);
({ draftPatchNotes: closure_11, publishProject: closure_12 } = ConjureConnectionStore);
const canPublishProject = fn(10651).canPublishProject;
const Permissions = fn(1085).Permissions;
let context = noop.createContext(null);
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(arg0, arg1) {
  _require = arg0;
  context = arg1;
  if (arg1 == null) {
    context = guildId.useContext(memo);
  }
  let guildId1;
  if (context != null) {
    guildId1 = context.guildId;
  }
  if (guildId1 == null) {
    guildId1 = null;
  }
  const items = [
    usesAppChannels,
    appChannelName,
    guildName,
    integrationStatus,
    appChannelPending,
    status,
    installScope,
  ];
  const items1 = [arg0, guildId1];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(
    items,
    () => {
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
      const obj = {
        canPublish: tmp5,
        project: null,
        guildId: null,
        appChannelId: null,
        publishing: null,
        installScope: null,
        status: null,
        integrationStatus: null,
        guildName: null,
        appChannelName: null,
        appChannelPending: null,
        canManageGuild: null,
        canManageChannels: null,
        usesAppChannels: null,
        botInGuild: null,
        liveNameOutdated: null,
      };
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
        flag2 = tmp2.input.usesAppChannels;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj.usesAppChannels = flag2;
      botInGuild = undefined;
      if (tmp2 != null) {
        botInGuild = tmp2.input.botInGuild;
      }
      if (botInGuild == null) {
        botInGuild = null;
      }
      obj.botInGuild = botInGuild;
      let flag3;
      if (tmp2 != null) {
        flag3 = tmp2.input.liveNameOutdated;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      obj.liveNameOutdated = flag3;
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
  usesAppChannels = stateFromStoresObject.usesAppChannels;
  let botInGuild = stateFromStoresObject.botInGuild;
  const liveNameOutdated = stateFromStoresObject.liveNameOutdated;
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
    usesAppChannels,
    botInGuild,
    liveNameOutdated,
  ];
  ({ canPublish, appChannelId } = stateFromStoresObject);
  memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      const obj = {
        installScope,
        status,
        integrationStatus,
        guildName,
        appChannelName,
        appChannelPending,
        canManageGuild,
        canManageChannels,
        usesAppChannels,
        botInGuild,
        liveNameOutdated,
      };
      tmp = obj;
    }
    return tmp;
  }, items2);
  let state;
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
  closure_18 = tmp7;
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
      tmp2 = closure_18;
    }
    if (tmp2) {
      tmp2 = null != state;
    }
    if (tmp2) {
      tmp2 = "unpublished" !== state;
    }
    if (tmp2) {
      const obj = UserActionCreators;
      const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), {
        withMutualGuilds: true,
      });
      profile.catch(() => {});
    }
  }, items3);
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let tmp12 = null != state;
  if (tmp12) {
    tmp12 = "unpublished" !== state;
  }
  closure_20 = tmp12;
  const items4 = [application_id, tmp12];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != application_id && closure_20;
    if (tmp2) {
      tmp2 = null == ApplicationStore.getApplication(application_id);
    }
    if (tmp2) {
      tmp2 = !ApplicationStore.isFetchingApplication(application_id);
    }
    if (tmp2) {
      const application = ApplicationActionCreators.fetchApplication(application_id);
      application.catch(() => {});
    }
  }, items4);
  const items5 = [memo];
  const memo1 = obj.useMemo(() => {
    let conjurePublishAction = null;
    if (null != memo) {
      conjurePublishAction = conjurePublishAction2.resolveConjurePublishAction(tmp);
    }
    return conjurePublishAction;
  }, items5);
  const items6 = [arg0, context];
  let tmp16 = null;
  if (null != context) {
    tmp16 = null;
    if (canPublish) {
      tmp16 = null;
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
        obj3.disabled = publishing;
        obj3.run = tmp15;
        tmp16 = obj3;
      }
    }
  }
  return tmp16;
}
export const ConjurePublishActionContext = context;
export const isConjureLiveNameOutdated = function isConjureLiveNameOutdated(application_id) {
  if (obj.isPreviewlessProject(application_id)) {
    return false;
  } else {
    const application = ApplicationStore.getApplication(application_id.application_id);
    let name;
    if (application != null) {
      name = application.name;
    }
    return null != name && name !== application_id.name;
  }
  obj = ConjureTypes;
};
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
      const obj5 = {
        applicationId: tmp.project.application_id,
        guildId: null,
        appChannelId: null,
        openProfile: null,
        openAutomodSettings: null,
      };
      ({ guildId: obj3.guildId, appChannelId: obj3.appChannelId } = tmp);
      ({ openProfile: obj3.openProfile, openAutomodSettings: obj3.openAutomodSettings } = guildId.platform);
      const result = openConjurePublishDestination.openConjurePublishDestination(destination, obj5);
      result.catch(() => {});
      const tmp8Result = openConjurePublishDestination;
    }
  }
};
export { runConjurePublishAction };
