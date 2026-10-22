// discord_app/modules/conjure/publish/useConjurePublishAction.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import conjureAppInServer from "../projects/conjureAppInServer.tsx";
import conjurePublishAction2 from "conjurePublishAction.tsx";
import asyncGeneratorStep from "../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ApplicationStore from "../../applications/ApplicationStore.tsx";
import UserProfileStore from "../../user_profile/UserProfileStore.tsx";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import GuildChannelStore from "../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../stores/GuildStore.tsx";
import PermissionStore from "../../../stores/PermissionStore.tsx";
import ConjureProjectStore_mod from "../projects/ConjureProjectStore.tsx";
import ConjurePublishStatusStore from "ConjurePublishStatusStore.tsx";

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
      status: ConjurePublishStatusStore.getPublishStatus(projectId),
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
    obj4.appChannelPending = ConjurePublishStatusStore.isAppChannelPending(projectId);
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
    obj4.usesAppChannels = ConjureProjectTypes.projectUsesAppChannels(project);
    obj4.botInGuild = conjureAppInServer.readConjureBotInGuild(project, tmp2);
    let flag = false;
    if (!obj8.isPreviewlessProject(project)) {
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
function requestConjureInstallConsent() {
  const self = this;
  const apply = closure_19.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_19 = async function _requestConjureInstallConsent(arg0) {
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
          const project1 = closure_131_0(closure_131_2[17]).getProject(closure_130_0);
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
function startPublish() {
  const self = this;
  const apply = closure_21.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_21 = async function _startPublish(arg0, arg1, arg2) {
  let project = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  c7 = 0;
  c8 = 0;
  c6 = 0;
  return (async (arg0, value, arg2) => {
    if (c8 === 2) {
      c8 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_4 = tmp4;
            closure_3 = tmp8;
            closure_131_0 = project;
            closure_131_1 = closure_1;
            closure_131_2 = undefined;
            closure_131_3 = undefined;
            closure_131_4 = undefined;
            closure_131_5 = undefined;
            closure_131_6 = undefined;
            closure_131_7 = undefined;
            closure_131_8 = undefined;
            project = project.project;
            closure_131_3 = project;
            ({ platform: closure_131_4, guildId: closure_131_5 } = dependencyMap);
            const id = project.id;
            closure_131_6 = id;
            set.add(id);
            c6 = 2;
            c7 = 3;
            c8 = 1;
            const obj5 = { value: require("conjurePublishConnection").requestPublishOptions(id), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c6 = 0;
          closure_132_24.delete(closure_131_6);
          throw closure_5;
        } else if (2 === tmp8) {
          c6 = 1;
          closure_131_9 = closure_5;
          let _delete = closure_131_4;
          let showError = closure_131_4.showError;
          let _Error = Error;
          if (closure_131_9 instanceof Error) {
            let message = closure_131_9.message;
          } else {
            const intl2 = closure_132_0(closure_132_2[19]).intl;
            message = intl2.string(closure_132_1(closure_132_2[20]).gMWZeG);
          }
          showError(message);
          c6 = 0;
          _delete = closure_132_24.delete;
          showError = _delete(closure_131_6);
          c8 = 3;
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c8 = 3;
              throw value;
            } else if (arg0 === 2) {
              c6 = 0;
              closure_132_24.delete(closure_131_6);
              c8 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_131_7 = value;
              if (1 === closure_131_7.destinations.length) {
                let selected_destination_id = closure_131_7.selected_destination_id;
              } else {
                c7 = 4;
                c8 = 1;
                const obj7 = { value: closure_131_4.promptPublishDestination(closure_131_7), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c8 = 3;
            throw value;
          } else {
            selected_destination_id = value;
            if (arg0 === 2) {
              c6 = 0;
              closure_132_24.delete(closure_131_6);
              c8 = 3;
              let obj = { value, done: true };
              return obj;
            }
          }
          closure_131_2 = selected_destination_id;
          c6 = 0;
          closure_132_24.delete(closure_131_6);
          if (null == closure_131_2) {
            c8 = 3;
          } else if (!closure_132_14.isProjectPublishing(closure_131_6)) {
            const publishStatus = closure_132_14.getPublishStatus(closure_131_6);
            let publishing;
            if (publishStatus != null) {
              publishing = publishStatus.publishing;
            }
            if (true !== publishing) {
              let tmp30 = null != closure_131_0.guildId;
              if (tmp30) {
                const status = closure_131_0.input.status;
                let surface;
                if (status != null) {
                  surface = status.surface;
                }
                tmp30 = "activity" === surface;
              }
              if (tmp30) {
                tmp30 = null == closure_131_0.appChannelId;
              }
              if (tmp30) {
                tmp30 = !closure_131_1.isUpdate;
              }
              closure_131_8 = tmp30;
              if (closure_131_8) {
                closure_132_22(closure_131_6, true);
              }
              const obj3 = closure_132_0(closure_132_2[18]);
              const publishProjectResult = closure_132_0(closure_132_2[18]).publishProject(
                closure_131_6,
                closure_131_2,
              );
              closure_132_0(closure_132_2[18])
                .publishProject(closure_131_6, closure_131_2)
                .then((ok) => {
                  if (true === ok.ok) {
                    return ok;
                  } else {
                    if (ok.code === closure_0(11817).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                      project = closure_0(10690).getProject(projectId);
                      project.catch(() => {});
                      const tmp9Result = closure_0(10690);
                    }
                    const _Error = Error;
                    const error = new Error(closure_1(11817)(ok));
                    throw error;
                  }
                })
                .then(
                  (result) => {
                    const channel_skipped = result;
                    const intl = project(1128).intl;
                    closure_4.showConfirmation(intl.string(closure_1_1(3830).S6Px3n));
                    if (null != channel_skipped.guildId) {
                      const tmpResult = project(8643);
                      const profile = tmpResult.fetchProfile(project(10701).conjureProductionBotUserId(closure_3), {
                        withMutualGuilds: true,
                      });
                      profile.catch(() => {});
                      const tmpResult3 = project(10701);
                    }
                    result = project(10755).refreshPublishedProject(projectId, { isPreview: false });
                    const tmpResult4 = project(10755);
                    const catchPromise1 = result.catch(() => {});
                    const nextPromise = result
                      .catch(() => {})
                      .then(() => {
                        let tmp;
                        if (closure_2_8) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = (function waitForAppChannel() {
                              const self = this;
                              const apply = closure_1_23.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(projectId, closure_2_5);
                          }
                        }
                        return tmp;
                      });
                    result
                      .catch(() => {})
                      .then(() => {
                        let tmp;
                        if (closure_2_8) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = (function waitForAppChannel() {
                              const self = this;
                              const apply = closure_1_23.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(projectId, closure_2_5);
                          }
                        }
                        return tmp;
                      })
                      .finally(() => {
                        closure_2_1(584).dispatch({
                          type: "CONJURE_PROJECT_APP_CHANNEL_PENDING",
                          projectId,
                          pending: false,
                        });
                      })
                      .catch(() => {});
                    const cleanupPromise = result
                      .catch(() => {})
                      .then(() => {
                        let tmp;
                        if (closure_2_8) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = (function waitForAppChannel() {
                              const self = this;
                              const apply = closure_1_23.apply;
                              if (typeof apply === "unknown") {
                                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                              } else {
                                applyArgumentsResult = apply(self, arguments);
                              }
                              return applyArgumentsResult;
                            })(projectId, closure_2_5);
                          }
                        }
                        return tmp;
                      })
                      .finally(() => {
                        closure_2_1(584).dispatch({
                          type: "CONJURE_PROJECT_APP_CHANNEL_PENDING",
                          projectId,
                          pending: false,
                        });
                      });
                  },
                  (message) => {
                    closure_1(584).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
                    if (message instanceof Error) {
                      message = message.message;
                    } else {
                      const intl = closure_0(1128).intl;
                      message = intl.string(closure_1(3830).gMWZeG);
                    }
                    closure_1_4.showError(message);
                    const obj = closure_1(584);
                    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                  },
                );
              let nextPromise = closure_132_0(closure_132_2[18])
                .publishProject(closure_131_6, closure_131_2)
                .then((ok) => {
                  if (true === ok.ok) {
                    return ok;
                  } else {
                    if (ok.code === closure_0(11817).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                      project = closure_0(10690).getProject(projectId);
                      project.catch(() => {});
                      const tmp9Result = closure_0(10690);
                    }
                    const _Error = Error;
                    const error = new Error(closure_1(11817)(ok));
                    throw error;
                  }
                });
            }
          }
          let intl = closure_132_0(closure_132_2[19]).intl;
          closure_131_4.showError(intl.string(closure_132_1(closure_132_2[20])["TD/ze/"]));
        }
      } catch (tmp84) {
        closure_5 = tmp84;
        if (tmp5 === c6) {
          c8 = tmp3;
          throw tmp84;
        } else if (tmp2 === tmp86) {
          c7 = tmp2;
        } else {
          c7 = tmp;
        }
      }
    }
  })();
};
function setAppChannelPending(projectId, arg1) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: true });
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
  if (c7 === 2) {
    c7 = 3;
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
      c7 = 2;
      if (0 === c6) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_5 = tmp2;
          closure_133_0 = closure_0;
          closure_133_1 = dependencyMap;
          closure_133_2 = undefined;
          closure_133_3 = undefined;
          const platform = dependencyMap.platform;
          if (true !== dependencyMap.busy) {
            if (!set.has(closure_0)) {
              const tmp10 = readPublishSubject(closure_0, tmp33);
              if (null != tmp10) {
                publishApprovalUrl = publishApprovalUrl.getPublishApprovalUrl(closure_0);
                closure_133_2 = publishApprovalUrl;
                if (null != publishApprovalUrl) {
                  if (__initData(tmp10.project)) {
                    c6 = 1;
                    c7 = 1;
                    const obj4 = { value: require("asyncRequireImpl")(paths[25], paths.paths), done: false };
                    return obj4;
                  }
                }
                if (!obj8.isProjectPublishing(closure_0)) {
                  const status = tmp10.input.status;
                  let publishing;
                  if (status != null) {
                    publishing = status.publishing;
                  }
                  if (true !== publishing) {
                    const conjurePublishAction = require("conjurePublishAction").resolveConjurePublishAction(
                      tmp10.input,
                    );
                    closure_133_3 = conjurePublishAction;
                    const obj9 = require("conjurePublishAction");
                    const obj5 = {
                      entryPoint: tmp31,
                      publishState: null,
                      surface: null,
                      installScope: null,
                      action: null,
                    };
                    const status3 = tmp10.input.status;
                    let state;
                    if (status3 != null) {
                      state = status3.state;
                    }
                    let publishState = state;
                    if (state == null) {
                      publishState = null;
                    }
                    obj5.publishState = publishState;
                    const status2 = tmp10.input.status;
                    let surface;
                    if (status2 != null) {
                      surface = status2.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj5.surface = surface;
                    obj5.installScope = tmp10.project.install_scope;
                    obj5.action = conjurePublishAction.action;
                    const result = require("ConjureAnalytics").trackConjurePublishActionClicked(closure_0, obj5);
                    if (null == conjurePublishAction.disabledReason) {
                      require("conjurePublishConnection").preparePublish(closure_0);
                      if (null == conjurePublishAction.confirmReason) {
                        c6 = 2;
                        c7 = 1;
                        const obj6 = { value: continuePublish(closure_0, conjurePublishAction, tmp32), done: false };
                        return obj6;
                      } else {
                        platform.showPublishBlocked(
                          require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS,
                          conjurePublishAction.confirmReason,
                          () => {
                            closure_2_27(closure_1_0, publishState, closure_1_1).catch(() => {});
                          },
                        );
                      }
                      const tmp36Result = require("conjurePublishConnection");
                    } else {
                      platform.showPublishBlocked(
                        require("conjurePublishBlockedReason").ConjurePublishBlockedReason.MISSING_MANAGE_SERVER,
                        conjurePublishAction.disabledReason,
                      );
                    }
                    const obj10 = require("ConjureAnalytics");
                  }
                }
                obj8 = publishApprovalUrl;
              }
            }
          }
          c7 = 3;
        }
      } else if (1 === tmp5) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 !== 2) {
          const result1 = value.promptPublishApproval(closure_133_2);
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c7 = 3;
      const obj7 = { value, done: true };
      return obj7;
    } catch (tmp25) {
      c7 = tmp;
      throw tmp25;
    }
  }
};
function continuePublish() {
  const self = this;
  const apply = closure_28.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_28 = async function _continuePublish(arg0, arg1, arg2) {
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
        return { value: "IconComponent", done: null };
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
            const tmp71 = readPublishSubject(closure_0, guildId);
            if (null != tmp71) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  c10 = 1;
                  c11 = 1;
                  const obj4 = { value: startPublish(tmp71, intent, closure_2), done: false };
                  return obj4;
                } else {
                  set.add(closure_0);
                  c9 = 1;
                  const requestConsent = closure_2.platform.requestConsent;
                  f159172 = requestConsent;
                  if (requestConsent == null) {
                    f159172 = (arg0) => closure_2_18(arg0, closure_1_3);
                  }
                  c10 = 3;
                  c11 = 1;
                  const obj5 = { value: f159172(closure_0), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c11 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (2 === tmp7) {
          c9 = 0;
          closure_135_24.delete(closure_134_0);
          throw closure_8;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c11 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 0;
            closure_135_24.delete(closure_134_0);
            c11 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c9 = 0;
            closure_135_24.delete(closure_134_0);
            if (closure_135_14.isProjectPublishing(closure_134_0)) {
              c11 = 3;
              return { value: "IconComponent", done: null };
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
                const obj8 = {
                  installScope: closure_134_4.project.install_scope,
                  previewReady: null,
                  integrationInstalled: null,
                  botPermissionsChanged: null,
                };
                let preview_ready;
                if (closure_134_5 != null) {
                  preview_ready = closure_134_5.preview_ready;
                }
                obj8.previewReady = true === preview_ready;
                let prop;
                if (closure_134_5 != null) {
                  prop = closure_134_5.integration_installed;
                }
                integrationInstalled = prop;
                if (prop == null) {
                  integrationInstalled = null;
                }
                obj8.integrationInstalled = integrationInstalled;
                let prop1;
                if (closure_134_5 != null) {
                  prop1 = closure_134_5.bot_permissions_changed;
                }
                obj8.botPermissionsChanged = true === prop1;
                if (!obj9.requiresPermissionReview(obj8)) {
                  c10 = 4;
                  c11 = 1;
                  const obj10 = { value: closure_135_20(closure_134_4, closure_134_1, closure_134_2), done: false };
                  return obj10;
                }
                obj9 = closure_135_0(closure_135_2[30]);
              }
              c11 = 3;
              return { value: "IconComponent", done: null };
            }
          }
        } else if (arg0 === 1) {
          c11 = 3;
          throw value;
        } else if (arg0 === 2) {
          c11 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c11 = 3;
        return { value: "IconComponent", done: null };
      } catch (tmp45) {
        closure_8 = tmp45;
        if (tmp4 === c9) {
          c11 = tmp2;
          throw tmp45;
        } else {
          c10 = tmp;
        }
      }
    }
  })();
};
let ConjureProjectStore = fn(6759);
({ canPublishProject: closure_11, isProjectOwner: closure_12 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const Permissions = fn(1087).Permissions;
let context = noop.createContext(null);
const set = new Set();
const size = fn(2);
let result = size.fileFinishedImporting("modules/conjure/publish/useConjurePublishAction.tsx");

export default function useConjurePublishAction(projectId, arg1) {
  _require = projectId;
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
    botInGuild,
    appChannelName,
    guildName,
    integrationStatus,
    appChannelPending,
    status,
    installScope,
  ];
  const items1 = [projectId, guildId1];
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
        tmp5 = closure_2_11(tmp2.project);
      }
      const obj = {
        canPublish: tmp5,
        project: null,
        guildId: null,
        appChannelId: null,
        publishing: null,
        approvalUrl: null,
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
      let tmp10 = null != closure_0;
      if (tmp10) {
        tmp10 = null == ConjurePublishStatusStore.getPublishApprovalUrl(closure_0);
      }
      if (tmp10) {
        let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(closure_0);
        if (!isProjectPublishingResult) {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          isProjectPublishingResult = true === publishing;
        }
        tmp10 = isProjectPublishingResult;
      }
      obj.publishing = tmp10;
      let publishApprovalUrl = null;
      if (null != closure_0) {
        publishApprovalUrl = ConjurePublishStatusStore.getPublishApprovalUrl(closure_0);
      }
      obj.approvalUrl = publishApprovalUrl;
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
      let flag2;
      if (tmp2 != null) {
        flag2 = tmp2.input.appChannelPending;
      }
      if (flag2 == null) {
        flag2 = false;
      }
      obj.appChannelPending = flag2;
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
      let flag3;
      if (tmp2 != null) {
        flag3 = tmp2.input.usesAppChannels;
      }
      if (flag3 == null) {
        flag3 = false;
      }
      obj.usesAppChannels = flag3;
      botInGuild = undefined;
      if (tmp2 != null) {
        botInGuild = tmp2.input.botInGuild;
      }
      if (botInGuild == null) {
        botInGuild = null;
      }
      obj.botInGuild = botInGuild;
      let flag4;
      if (tmp2 != null) {
        flag4 = tmp2.input.liveNameOutdated;
      }
      if (flag4 == null) {
        flag4 = false;
      }
      obj.liveNameOutdated = flag4;
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
  botInGuild = stateFromStoresObject.botInGuild;
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
  ({ canPublish, approvalUrl, appChannelId } = stateFromStoresObject);
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
  let tmp9 = "guild" === installScope1;
  if (tmp9) {
    const status3 = memo.status;
    let surface;
    if (status3 != null) {
      surface = status3.surface;
    }
    tmp9 = "bot" === surface;
  }
  closure_18 = tmp9;
  let id;
  if (project != null) {
    id = project.id;
  }
  const items3 = [id, guildId, tmp9, state];
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
  let tmp14 = null != state;
  if (tmp14) {
    tmp14 = "unpublished" !== state;
  }
  closure_20 = tmp14;
  const items4 = [application_id, tmp14];
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
  const items6 = [projectId, context];
  if (null != context) {
    if (canPublish) {
      if (null != memo1) {
        if (null == approvalUrl) {
          let label = memo1.label;
        } else {
          const intl = tmp3(tmp4[19]).intl;
          label = intl.string(context(tmp4[20]).qru9M5);
        }
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
        if (publishing) {
          const intl2 = tmp3(tmp4[19]).intl;
          label = intl2.string(context(tmp4[20]).Rhx0rn);
        }
        obj3.label = label;
        if (!publishing) {
          publishing = true === context.busy;
        }
        obj3.disabled = publishing;
        obj3.run = tmp17;
        return obj3;
      }
    }
  }
  return null;
}
export const ConjurePublishActionContext = context;
export const publishGuildId = function publishGuildId(project, fallbackGuildId) {
  let tmp = null;
  if ("user" !== project.install_scope) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = fallbackGuildId;
    }
    tmp = guild_id;
  }
  return tmp;
};
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
  obj = ConjureProjectTypes;
};
export { requestConjureInstallConsent };
export { runConjurePublishAction };
