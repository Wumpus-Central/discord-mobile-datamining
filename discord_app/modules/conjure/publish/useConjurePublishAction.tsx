// === Module 11857: useConjurePublishAction ===

// Module 11857 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6832 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6868 */;
import ConjureUtils from "ConjureUtils" /* 7405 */;
import UserActionCreators from "UserActionCreators" /* 8710 */;
import conjureAppInServer from "conjureAppInServer" /* 10843 */;
import ConjurePublishTypes from "ConjurePublishTypes" /* 10918 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11859 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 2043 */;
import UserProfileStore from "UserProfileStore" /* 7760 */;
import ChannelStore from "ChannelStore" /* 4857 */;
import GuildChannelStore from "GuildChannelStore" /* 4935 */;
import GuildStore from "GuildStore" /* 4879 */;
import PermissionStore from "PermissionStore" /* 4937 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6831 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10824 */;

const require = globalThis.__r;

require = fn;
function approvalPending(projectId) {
  if (null == ConjurePublishStatusStore.getPublishApprovalUrl(projectId)) {
    return false;
  } else {
    const publishProgress = ConjurePublishStatusStore.getPublishProgress(projectId);
    let stage;
    if (publishProgress != null) {
      stage = publishProgress.stage;
    }
    let tmp3 = null == stage;
    if (!tmp3) {
      tmp3 = "preparing" === stage;
    }
    if (!tmp3) {
      tmp3 = "approval" === stage;
    }
    return tmp3;
  }
}
function readPublishSubject(id, guildId) {
  const project = ConjureProjectStore.getProject(id);
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
    const obj4 = { installScope: project.install_scope, status: ConjurePublishStatusStore.getPublishStatus(id), integrationStatus: ConjureProjectStore.getIntegrationStatus(id), guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesAppChannels: null, botInGuild: null, liveNameOutdated: null };
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
    obj4.appChannelPending = ConjurePublishStatusStore.isAppChannelPending(id);
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
      return { value: "IconComponent", done: "IconComponent" };
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
              closure_130_3 = require("ConjureInstallTarget").conjureInstallGuildId(project, obj15.getIntegrationStatus(closure_0), closure_1);
              const obj10 = require("ConjureInstallTarget");
              let application = require("ApplicationActionCreators").fetchApplication(prop);
              c4 = 1;
              c5 = 1;
              const obj6 = {
                value: application.catch(() => {

                            }),
                done: false
              };
              return obj6;
            }
          }
          obj15 = project;
        }
      } else if (1 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj7 = { value, done: true };
          return obj7;
        } else {
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
          const obj8 = { value: promise, done: false };
          return obj8;
        }
      } else if (2 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj9 = { value, done: true };
          return obj9;
        } else {
          let result = closure_131_0(closure_131_2[14]).repairConjureGuildHints(closure_130_1, closure_130_3);
          c4 = 3;
          c5 = 1;
          const obj12 = {
            value: result.catch(() => {

                    }),
            done: false
          };
          return obj12;
        }
      } else if (3 === tmp6) {
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj13 = { value, done: true };
          return obj13;
        } else {
          const project1 = closure_131_0(closure_131_2[17]).getProject(closure_130_0);
          c4 = 4;
          c5 = 1;
          const obj14 = {
            value: project1.catch(() => {

                    }),
            done: false
          };
          return obj14;
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
      return { value: "IconComponent", done: "IconComponent" };
    } catch (tmp29) {
      c5 = tmp;
      throw tmp29;
    }
  }
};
function startPublish() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _startPublish(arg0, arg1, arg2, arg3) {
  let project = arg0;
  closure_1 = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c8 = 0;
  c9 = 0;
  c7 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c9 === 2) {
      c9 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        let obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c9 = 2;
        if (0 === c8) {
          if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else if (arg0 === 2) {
            c9 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_5 = tmp4;
            closure_4 = tmp8;
            closure_132_0 = project;
            closure_132_1 = closure_1;
            closure_132_2 = closure_3;
            closure_132_3 = undefined;
            closure_132_4 = undefined;
            closure_132_5 = undefined;
            closure_132_6 = undefined;
            closure_132_7 = undefined;
            closure_132_8 = undefined;
            closure_132_9 = undefined;
            project = project.project;
            closure_132_4 = project;
            ({ platform: closure_132_5, guildId: closure_132_6 } = dependencyMap);
            const id = project.id;
            closure_132_7 = id;
            set.add(id);
            c7 = 2;
            c8 = 3;
            c9 = 1;
            const obj5 = { value: require("conjurePublishConnection").requestPublishOptions(id), done: false };
            return obj5;
          }
        } else if (1 === tmp8) {
          c7 = 0;
          closure_133_25.delete(closure_132_7);
          throw closure_6;
        } else if (2 === tmp8) {
          c7 = 1;
          closure_132_10 = closure_6;
          let _delete = closure_132_5;
          let showError = closure_132_5.showError;
          let _Error = Error;
          if (closure_132_10 instanceof Error) {
            let message = closure_132_10.message;
          } else {
            const intl2 = closure_133_0(closure_133_2[19]).intl;
            message = intl2.string(closure_133_1(closure_133_2[20]).gMWZeG);
          }
          showError(message);
          c7 = 0;
          _delete = closure_133_25.delete;
          showError = _delete(closure_132_7);
          c9 = 3;
        } else {
          if (3 === tmp8) {
            if (arg0 === 1) {
              c9 = 3;
              throw value;
            } else if (arg0 === 2) {
              c7 = 0;
              closure_133_25.delete(closure_132_7);
              c9 = 3;
              const obj6 = { value, done: true };
              return obj6;
            } else {
              closure_132_8 = value;
              if (1 === closure_132_8.destinations.length) {
                let selected_destination_id = closure_132_8.selected_destination_id;
              } else {
                c8 = 4;
                c9 = 1;
                const obj7 = { value: closure_132_5.promptPublishDestination(closure_132_8), done: false };
                return obj7;
              }
            }
          } else if (arg0 === 1) {
            c9 = 3;
            throw value;
          } else {
            selected_destination_id = value;
            if (arg0 === 2) {
              c7 = 0;
              closure_133_25.delete(closure_132_7);
              c9 = 3;
              let obj = { value, done: true };
              return obj;
            }
          }
          closure_132_3 = selected_destination_id;
          c7 = 0;
          closure_133_25.delete(closure_132_7);
          if (null == closure_132_3) {
            c9 = 3;
          } else if (!closure_133_14.isProjectPublishing(closure_132_7)) {
            const publishStatus = closure_133_14.getPublishStatus(closure_132_7);
            let publishing;
            if (publishStatus != null) {
              publishing = publishStatus.publishing;
            }
            if (true !== publishing) {
              let tmp30 = null != closure_132_0.guildId;
              if (tmp30) {
                const status = closure_132_0.input.status;
                let surface;
                if (status != null) {
                  surface = status.surface;
                }
                tmp30 = "activity" === surface;
              }
              if (tmp30) {
                tmp30 = null == closure_132_0.appChannelId;
              }
              if (tmp30) {
                tmp30 = !closure_132_1.isUpdate;
              }
              closure_132_9 = tmp30;
              if (closure_132_9) {
                closure_133_23(closure_132_7, true);
              }
              const obj3 = closure_133_0(closure_133_2[18]);
              const publishProjectResult = closure_133_0(closure_133_2[18]).publishProject(closure_132_7, closure_132_3, closure_132_2);
              closure_133_0(closure_133_2[18]).publishProject(closure_132_7, closure_132_3, closure_132_2).then((ok) => {
                if (true === ok.ok) {
                  return ok;
                } else {
                  if (ok.code === closure_0(11858).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                    project = closure_0(10832).getProject(projectId);
                    project.catch(() => {

                    });
                    const tmp9Result = closure_0(10832);
                  }
                  const _Error = Error;
                  const error = new Error(closure_1(11858)(ok));
                  throw error;
                }
              }).then((result) => {
                const channel_skipped = result;
                const intl = project(1125).intl;
                closure_5.showConfirmation(intl.string(closure_1_1(3864).S6Px3n));
                if (null != channel_skipped.guildId) {
                  const tmpResult = project(8710);
                  const profile = tmpResult.fetchProfile(project(10843).conjureProductionBotUserId(closure_4), { withMutualGuilds: true });
                  profile.catch(() => {

                  });
                  const tmpResult3 = project(10843);
                }
                result = project(10899).refreshPublishedProject(projectId, { isPreview: false });
                const tmpResult4 = project(10899);
                const catchPromise1 = result.catch(() => {

                });
                const nextPromise = result.catch(() => {

                }).then(() => {
                  let tmp;
                  if (closure_2_9) {
                    if (true !== channel_skipped.channel_skipped) {
                      tmp = (function waitForAppChannel() {
                        const self = this;
                        const apply = closure_1_24.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(projectId, closure_2_6);
                    }
                  }
                  return tmp;
                });
                result.catch(() => {

                }).then(() => {
                  let tmp;
                  if (closure_2_9) {
                    if (true !== channel_skipped.channel_skipped) {
                      tmp = (function waitForAppChannel() {
                        const self = this;
                        const apply = closure_1_24.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(projectId, closure_2_6);
                    }
                  }
                  return tmp;
                }).finally(() => {
                  closure_2_1(584).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
                }).catch(() => {

                });
                const cleanupPromise = result.catch(() => {

                }).then(() => {
                  let tmp;
                  if (closure_2_9) {
                    if (true !== channel_skipped.channel_skipped) {
                      tmp = (function waitForAppChannel() {
                        const self = this;
                        const apply = closure_1_24.apply;
                        if (typeof apply === "unknown") {
                          let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                        } else {
                          applyArgumentsResult = apply(self, arguments);
                        }
                        return applyArgumentsResult;
                      })(projectId, closure_2_6);
                    }
                  }
                  return tmp;
                }).finally(() => {
                  closure_2_1(584).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
                });
              }, (message) => {
                closure_1(584).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
                if (message instanceof Error) {
                  message = message.message;
                } else {
                  const intl = closure_0(1125).intl;
                  message = intl.string(closure_1(3864).gMWZeG);
                }
                const obj = closure_1(584);
                const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                closure_1(584).dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId, message });
                closure_1_5.showError(message);
                const tmp2Result = closure_1(584);
              });
              let nextPromise = closure_133_0(closure_133_2[18]).publishProject(closure_132_7, closure_132_3, closure_132_2).then((ok) => {
                if (true === ok.ok) {
                  return ok;
                } else {
                  if (ok.code === closure_0(11858).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                    project = closure_0(10832).getProject(projectId);
                    project.catch(() => {

                    });
                    const tmp9Result = closure_0(10832);
                  }
                  const _Error = Error;
                  const error = new Error(closure_1(11858)(ok));
                  throw error;
                }
              });
            }
          }
          let intl = closure_133_0(closure_133_2[19]).intl;
          closure_132_5.showError(intl.string(closure_133_1(closure_133_2[20])["TD/ze/"]));
        }
      } catch (tmp85) {
        closure_6 = tmp85;
        if (tmp5 === c7) {
          c9 = tmp3;
          throw tmp85;
        } else if (tmp2 === tmp87) {
          c8 = tmp2;
        } else {
          c8 = tmp;
        }
      }
    }
  })();
};
function setAppChannelPending(projectId, arg1) {
  DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: true });
}
let closure_24 = async function _waitForAppChannel(arg0) {
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
      return { value: "IconComponent", done: "IconComponent" };
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
        const tmp12 = closure_131_18(closure_130_0, closure_130_1);
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
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _runConjurePublishAction(arg0) {
  closure_5 = tmp2;
  closure_133_0 = closure_0;
  closure_133_1 = closure_1;
  closure_133_2 = closure_2;
  let flag = closure_3;
  if (closure_3 === undefined) {
    flag = false;
  }
  closure_133_3 = flag;
  await "Reflect";
  if (1 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 === 2) {
      c8 = 3;
      return { value, done: true };
    } else {
      const guildId = closure_133_2.guildId;
      const platform = closure_133_2.platform;
      if (true !== closure_133_2.busy) {
        if (!closure_134_25.has(closure_133_0)) {
          closure_133_6 = closure_134_18(closure_133_0, guildId);
          let publishState;
          if (closure_133_6 != null) {
            const status = closure_133_6.input.status;
            if (status != null) {
              publishState = status.publishState;
            }
          }
          closure_133_7 = publishState;
          if (null != closure_133_6) {
            if (null != closure_133_7) {
              if (obj9.canPublish(closure_133_7)) {
                let publishApprovalUrl = null;
                if (closure_134_17(closure_133_0)) {
                  publishApprovalUrl = closure_134_14.getPublishApprovalUrl(closure_133_0);
                }
                closure_133_8 = publishApprovalUrl;
                if (null != closure_133_8) {
                  if (closure_134_12(closure_133_6.project)) {
                    c7 = 2;
                    c8 = 1;
                    return { value: closure_134_0(closure_134_2[27])(closure_134_2[26], closure_134_2.paths), done: false };
                  }
                }
                if (!closure_134_14.isProjectPublishing(closure_133_0)) {
                  const status2 = closure_133_6.input.status;
                  let publishing;
                  if (status2 != null) {
                    publishing = status2.publishing;
                  }
                  if (true !== publishing) {
                    closure_133_9 = closure_134_0(closure_134_2[28]).resolveConjurePublishAction(closure_133_6.input);
                    closure_134_0(closure_134_2[28]);
                    const obj7 = { entryPoint: closure_133_1, publishState: closure_133_7, surface: null, installScope: null, action: null };
                    const status3 = closure_133_6.input.status;
                    let surface;
                    if (status3 != null) {
                      surface = status3.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj7.surface = surface;
                    obj7.installScope = closure_133_6.project.install_scope;
                    obj7.action = closure_133_9.action;
                    const result = closure_134_0(closure_134_2[29]).trackConjurePublishActionClicked(closure_133_0, obj7);
                    if (null == closure_133_9.disabledReason) {
                      closure_134_0(closure_134_2[18]).preparePublish(closure_133_0);
                      if (null == closure_133_9.confirmReason) {
                        c7 = 3;
                        c8 = 1;
                        return { value: closure_134_28(closure_133_0, closure_133_9, closure_133_2, closure_133_3), done: false };
                      } else {
                        platform.showPublishBlocked(closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS, closure_133_9.confirmReason, () => {
                          closure_2_28(closure_1_0, closure_1_9, closure_1_2, closure_1_3).catch(() => {

                          });
                        });
                      }
                      closure_134_0(closure_134_2[18]);
                    } else {
                      platform.showPublishBlocked(closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_SERVER, closure_133_9.disabledReason);
                    }
                    closure_134_0(closure_134_2[29]);
                  }
                }
              }
              obj9 = closure_134_0(closure_134_2[25]);
            }
          }
        }
      }
      c8 = 3;
    }
  } else if (2 === tmp5) {
    if (arg0 === 1) {
      c8 = 3;
      throw value;
    } else if (arg0 !== 2) {
      const result1 = value.promptPublishApproval(closure_133_8);
    }
  } else if (arg0 === 1) {
    c8 = 3;
    throw value;
  } else if (arg0 === 2) {
    c8 = 3;
    return { value, done: true };
  }
  return value;
};
function continuePublish() {
  const self = this;
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _continuePublish(arg0, arg1, arg2, arg3) {
  closure_0 = arg0;
  let intent = arg1;
  closure_2 = arg2;
  closure_3 = arg3;
  c11 = 0;
  c12 = 0;
  c10 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c12 === 2) {
      c12 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp6 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: "IconComponent" };
      }
    } else {
      try {
        c12 = 2;
        if (0 === c11) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_8 = tmp3;
            closure_7 = tmp7;
            closure_135_0 = closure_0;
            closure_135_1 = intent;
            closure_135_2 = closure_2;
            closure_135_3 = closure_3;
            closure_135_4 = undefined;
            closure_135_5 = undefined;
            closure_135_6 = undefined;
            const guildId = closure_2.guildId;
            closure_135_4 = guildId;
            const tmp77 = readPublishSubject(closure_0, guildId);
            if (null != tmp77) {
              if (!projectPublishing.isProjectPublishing(closure_0)) {
                if ("consent_then_publish" !== intent.intent) {
                  c11 = 1;
                  c12 = 1;
                  const obj4 = { value: startPublish(tmp77, intent, closure_2, closure_3), done: false };
                  return obj4;
                } else {
                  set.add(closure_0);
                  c10 = 1;
                  const requestConsent = closure_2.platform.requestConsent;
                  f163200 = requestConsent;
                  if (requestConsent == null) {
                    f163200 = (arg0) => closure_2_19(arg0, closure_1_4);
                  }
                  c11 = 3;
                  c12 = 1;
                  const obj5 = { value: f163200(closure_0), done: false };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp7) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 3;
            const obj6 = { value, done: true };
            return obj6;
          }
        } else if (2 === tmp7) {
          c10 = 0;
          closure_136_25.delete(closure_135_0);
          throw closure_9;
        } else if (3 === tmp7) {
          if (arg0 === 1) {
            c12 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 0;
            closure_136_25.delete(closure_135_0);
            c12 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            c10 = 0;
            closure_136_25.delete(closure_135_0);
            if (closure_136_14.isProjectPublishing(closure_135_0)) {
              c12 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            } else {
              closure_135_5 = closure_136_18(closure_135_0, closure_135_4);
              let integrationStatus;
              if (closure_135_5 != null) {
                integrationStatus = closure_135_5.input.integrationStatus;
              }
              c5 = integrationStatus;
              if (integrationStatus == null) {
                c5 = null;
              }
              closure_135_6 = c5;
              if (null != closure_135_5) {
                const obj8 = { installScope: closure_135_5.project.install_scope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
                let preview_ready;
                if (closure_135_6 != null) {
                  preview_ready = closure_135_6.preview_ready;
                }
                obj8.previewReady = true === preview_ready;
                let prop;
                if (closure_135_6 != null) {
                  prop = closure_135_6.integration_installed;
                }
                integrationInstalled = prop;
                if (prop == null) {
                  integrationInstalled = null;
                }
                obj8.integrationInstalled = integrationInstalled;
                let prop1;
                if (closure_135_6 != null) {
                  prop1 = closure_135_6.bot_permissions_changed;
                }
                obj8.botPermissionsChanged = true === prop1;
                if (!obj9.requiresPermissionReview(obj8)) {
                  c11 = 4;
                  c12 = 1;
                  const obj10 = { value: closure_136_21(closure_135_5, closure_135_1, closure_135_2, closure_135_3), done: false };
                  return obj10;
                }
                obj9 = closure_136_0(closure_136_2[31]);
              }
              c12 = 3;
              return { value: "IconComponent", done: "IconComponent" };
            }
          }
        } else if (arg0 === 1) {
          c12 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c12 = 3;
        return { value: "IconComponent", done: "IconComponent" };
      } catch (tmp50) {
        closure_9 = tmp50;
        if (tmp4 === c10) {
          c12 = tmp2;
          throw tmp50;
        } else {
          c11 = tmp;
        }
      }
    }
  })();
};
let ConjureProjectStore = fn(6831);
({ canPublishProject: closure_11, isProjectOwner: closure_12 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const Permissions = fn(1084).Permissions;
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
  const items = [usesAppChannels, botInGuild, appChannelName, guildName, integrationStatus, appChannelPending, status, installScope];
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
      tmp5 = closure_2_11(tmp2.project);
    }
    const obj = { viewerCanPublish: tmp5, publishOffered: null, project: null, guildId: null, appChannelId: null, publishing: null, failure: null, approvalUrl: null, installScope: null, status: null, integrationStatus: null, guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesAppChannels: null, botInGuild: null, liveNameOutdated: null };
    status = undefined;
    if (tmp2 != null) {
      status = tmp2.input.status;
    }
    let canPublishResult = null != status;
    if (canPublishResult) {
      canPublishResult = ConjurePublishTypes.canPublish(tmp2.input.status.publishState);
    }
    obj.publishOffered = canPublishResult;
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
    let tmp14 = null != closure_0;
    if (tmp14) {
      let flag2 = false;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress = ConjurePublishStatusStore.getPublishProgress(closure_0);
        let stage;
        if (publishProgress != null) {
          stage = publishProgress.stage;
        }
        let tmp17 = null == stage;
        if (!tmp17) {
          tmp17 = "preparing" === stage;
        }
        if (!tmp17) {
          tmp17 = "approval" === stage;
        }
        flag2 = tmp17;
      }
      tmp14 = false === flag2;
    }
    if (tmp14) {
      let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(closure_0);
      if (!isProjectPublishingResult) {
        const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
        let publishing;
        if (publishStatus != null) {
          publishing = publishStatus.publishing;
        }
        isProjectPublishingResult = true === publishing;
      }
      tmp14 = isProjectPublishingResult;
    }
    obj.publishing = tmp14;
    let publishFailure = null;
    if (null != closure_0) {
      publishFailure = ConjurePublishStatusStore.getPublishFailure(closure_0);
    }
    obj.failure = publishFailure;
    let publishApprovalUrl = null;
    if (null != closure_0) {
      let flag4 = false;
      if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
        const publishProgress1 = ConjurePublishStatusStore.getPublishProgress(closure_0);
        let stage1;
        if (publishProgress1 != null) {
          stage1 = publishProgress1.stage;
        }
        let tmp28 = null == stage1;
        if (!tmp28) {
          tmp28 = "preparing" === stage1;
        }
        if (!tmp28) {
          tmp28 = "approval" === stage1;
        }
        flag4 = tmp28;
      }
      publishApprovalUrl = null;
      if (flag4) {
        publishApprovalUrl = ConjurePublishStatusStore.getPublishApprovalUrl(closure_0);
      }
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
    let status1;
    if (tmp2 != null) {
      status1 = tmp2.input.status;
    }
    if (status1 == null) {
      status1 = null;
    }
    obj.status = status1;
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
    let flag5;
    if (tmp2 != null) {
      flag5 = tmp2.input.appChannelPending;
    }
    if (flag5 == null) {
      flag5 = false;
    }
    obj.appChannelPending = flag5;
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
    let flag6;
    if (tmp2 != null) {
      flag6 = tmp2.input.usesAppChannels;
    }
    if (flag6 == null) {
      flag6 = false;
    }
    obj.usesAppChannels = flag6;
    botInGuild = undefined;
    if (tmp2 != null) {
      botInGuild = tmp2.input.botInGuild;
    }
    if (botInGuild == null) {
      botInGuild = null;
    }
    obj.botInGuild = botInGuild;
    let flag7;
    if (tmp2 != null) {
      flag7 = tmp2.input.liveNameOutdated;
    }
    if (flag7 == null) {
      flag7 = false;
    }
    obj.liveNameOutdated = flag7;
    return obj;
  }, items1);
  ({ publishing, approvalUrl, project } = stateFromStoresObject);
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
  const items2 = [project, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated];
  ({ viewerCanPublish, publishOffered, failure, appChannelId } = stateFromStoresObject);
  memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      const obj = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
      tmp = obj;
    }
    return tmp;
  }, items2);
  let publishState;
  if (memo != null) {
    const status2 = memo.status;
    if (status2 != null) {
      publishState = status2.publishState;
    }
  }
  if (publishState == null) {
    publishState = null;
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
  const items3 = [id, guildId, tmp9, publishState];
  const effect = obj.useEffect(() => {
    isConjureLiveResult = null != project;
    if (isConjureLiveResult) {
      isConjureLiveResult = null != guildId;
    }
    if (isConjureLiveResult) {
      isConjureLiveResult = closure_18;
    }
    if (isConjureLiveResult) {
      isConjureLiveResult = null != publishState;
    }
    if (isConjureLiveResult) {
      isConjureLiveResult = ConjurePublishTypes.isConjureLive(publishState);
    }
    if (isConjureLiveResult) {
      const obj2 = UserActionCreators;
      const profile = obj2.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), { withMutualGuilds: true });
      profile.catch(() => {

      });
    }
  }, items3);
  let application_id;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let isConjureLiveResult = null != publishState;
  if (isConjureLiveResult) {
    isConjureLiveResult = tmp3(tmp4[25]).isConjureLive(publishState);
    const tmp3Result = tmp3(tmp4[25]);
  }
  const items4 = [application_id, isConjureLiveResult];
  const effect1 = obj.useEffect(() => {
    let tmp2 = null != application_id && isConjureLiveResult;
    if (tmp2) {
      tmp2 = null == ApplicationStore.getApplication(application_id);
    }
    if (tmp2) {
      tmp2 = !ApplicationStore.isFetchingApplication(application_id);
    }
    if (tmp2) {
      const application = ApplicationActionCreators.fetchApplication(application_id);
      application.catch(() => {

      });
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
  let tmp19 = null;
  let obj2 = require("initialize");
  if (publishing) {
    tmp19 = arg0;
  }
  let stringResult = context(guildId1[33])(tmp19);
  const items6 = [arg0, context];
  if (null != context) {
    if (viewerCanPublish) {
      if (null != memo1) {
        if (!publishOffered) {
          if (!publishing) {
            return null;
          }
        }
        if (null == approvalUrl) {
          let label = memo1.label;
        } else {
          const intl = tmp3(tmp4[19]).intl;
          label = intl.string(tmp17(tmp4[20]).qru9M5);
        }
        let obj3 = {};
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
        let tmp26 = null;
        if (!publishing) {
          tmp26 = failure;
        }
        obj3.failure = tmp26;
        obj3.showsProgress = null != stringResult;
        obj3.awaitingApproval = null != approvalUrl;
        if (publishing) {
          if (stringResult == null) {
            const intl2 = tmp3(tmp4[19]).intl;
            stringResult = intl2.string(tmp17(tmp4[20]).Rhx0rn);
          }
          label = stringResult;
        }
        obj3.label = label;
        if (!publishing) {
          publishing = true === context.busy;
        }
        obj3.disabled = publishing;
        obj3.run = tmp21;
        return obj3;
      }
    }
  }
  return null;
};
export const ConjurePublishActionContext = context;
export function publishGuildId(project, fallbackGuildId) {
  let tmp = null;
  if ("user" !== project.install_scope) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = fallbackGuildId;
    }
    tmp = guild_id;
  }
  return tmp;
}
export function isConjureLiveNameOutdated(application_id) {
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
}
export { requestConjureInstallConsent };
export { runConjurePublishAction };