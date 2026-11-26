// discord_app/modules/conjure/publish/useConjurePublishAction.tsx
import DispatcherDefault from "../../../Dispatcher.tsx";
import UserActionCreators from "../../../actions/UserActionCreators.tsx";
import ConjureProjectTypes from "../projects/ConjureProjectTypes.tsx";
import ApplicationActionCreators from "../../applications/ApplicationActionCreators.tsx";
import ConjureUtils from "../shared/ConjureUtils.tsx";
import conjureAppInServer from "../projects/conjureAppInServer.tsx";
import ConjurePublishTypes from "ConjurePublishTypes.tsx";
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
function readPublishSubject(id, arg1) {
  const project = ConjureProjectStore.getProject(id);
  if (null == project) {
    return null;
  } else {
    let tmp2 = null;
    if ("guild" === project.install_scope) {
      let guild_id = project.guild_id;
      if (guild_id == null) {
        guild_id = arg1;
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
    const obj3 = {
      project,
      guildId: tmp2,
      appChannelId: findConjureChannelIdResult,
      ownerInstallMissing: null,
      input: null,
    };
    let tmp8 = "user" === project.install_scope;
    if (tmp8) {
      tmp8 = application_id(project);
    }
    if (tmp8) {
      const integrationStatus = ConjureProjectStore.getIntegrationStatus(id);
      let prop;
      if (integrationStatus != null) {
        prop = integrationStatus.owner_authorization_revoked;
      }
      tmp8 = true === prop;
    }
    obj3.ownerInstallMissing = tmp8;
    const obj4 = {
      installScope: project.install_scope,
      status: ConjurePublishStatusStore.getPublishStatus(id),
      integrationStatus: ConjureProjectStore.getIntegrationStatus(id),
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
    let tmp13 = null;
    if (null != findConjureChannelIdResult) {
      const channel = ChannelStore.getChannel(findConjureChannelIdResult);
      let name1;
      if (channel != null) {
        name1 = channel.name;
      }
      if (name1 == null) {
        name1 = null;
      }
      tmp13 = name1;
    }
    obj4.appChannelName = tmp13;
    obj4.appChannelPending = ConjurePublishStatusStore.isAppChannelPending(id);
    let tmp17 = null;
    if (null != guild) {
      let canResult1 = PermissionStore.can(Permissions.MANAGE_GUILD, guild);
      if (!canResult1) {
        let someResult = application_id(project);
        if (someResult) {
          const result = ConjureProjectTypes.conjureProjectServerIds(project);
          someResult = result.some((item) => {
            guild = guild.getGuild(item);
            let canResult = null != guild;
            if (canResult) {
              canResult = PermissionStore.can(constants.MANAGE_GUILD, guild);
            }
            return canResult;
          });
        }
        canResult1 = someResult;
      }
      tmp17 = canResult1;
    }
    obj4.canManageGuild = tmp17;
    let canResult = null;
    if (null != guild) {
      canResult = PermissionStore.can(Permissions.MANAGE_CHANNELS, guild);
    }
    obj4.canManageChannels = canResult;
    obj4.usesAppChannels = ConjureProjectTypes.projectUsesAppChannels(project);
    obj4.botInGuild = conjureAppInServer.readConjureBotInGuild(project, tmp2);
    let flag2 = false;
    if (obj10.usesPreviewApp(project)) {
      const application = ApplicationStore.getApplication(project.application_id);
      let name2;
      if (application != null) {
        name2 = application.name;
      }
      flag2 = null != name2 && name2 !== project.name;
      const tmp33 = null != name2 && name2 !== project.name;
    }
    obj4.liveNameOutdated = flag2;
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
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp6 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
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
          closure_4 = tmp3;
          closure_3 = tmp35;
          closure_131_0 = closure_0;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_6 = undefined;
          closure_131_7 = undefined;
          closure_131_8 = undefined;
          function fail(arg0) {
            closure_1_4.push(arg0);
          }
          closure_131_5 = fail;
          project = project.getProject(closure_0);
          closure_131_1 = project;
          let prop;
          if (project != null) {
            prop = project.preview_application_id;
          }
          closure_131_2 = prop;
          if (null != project) {
            if (null != prop) {
              closure_131_3 = require("ConjureInstallTarget").conjureInstallGuildId(project, closure_1);
              closure_131_4 = [];
              const obj13 = require("ConjureInstallTarget");
              let application = require("ApplicationActionCreators").fetchApplication(prop);
              c6 = 1;
              c7 = 1;
              const obj5 = { value: application.catch(fail), done: false };
              return obj5;
            }
          }
          c7 = 3;
          return { value: "failed", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_131_7 = function close() {};
          const promise = new Promise((arg0) => {
            closure_7 = arg0;
          });
          closure_131_8 = promise;
          c5 = 1;
          const obj7 = { applicationId: closure_131_2, application: null, guildId: null, onClose: null };
          const application1 = closure_132_5.getApplication(closure_131_2);
          application = application1;
          if (application1 == null) {
            application = null;
          }
          obj7.application = application;
          obj7.guildId = closure_131_3;
          obj7.onClose = closure_131_7;
          c6 = 4;
          c7 = 1;
          const obj9 = { value: closure_132_1(closure_132_2[16]).openConjureAppInstallModal(obj7), done: false };
          return obj9;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        c7 = 3;
        return { value: "failed", done: true };
      } else if (3 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj10 = { value, done: true };
          return obj10;
        } else {
          const project1 = closure_132_0(closure_132_2[17]).getProject(closure_131_0);
          c6 = 6;
          c7 = 1;
          const obj11 = { value: project1.catch(closure_131_5), done: false };
          return obj11;
        }
      } else if (4 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj12 = { value, done: true };
          return obj12;
        } else {
          c6 = 5;
          c7 = 1;
          const obj15 = { value: closure_131_8, done: false };
          return obj15;
        }
      } else if (5 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 0;
          c7 = 3;
          const obj16 = { value, done: true };
          return obj16;
        } else {
          closure_131_6 = value;
          c5 = 0;
          const result = closure_132_0(closure_132_2[14]).repairConjureGuildHints(closure_131_1, closure_131_3);
          c6 = 3;
          c7 = 1;
          const obj17 = { value: result.catch(closure_131_5), done: false };
          return obj17;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c7 = 3;
        const obj19 = { value, done: true };
        return obj19;
      } else {
        let str = "cancelled";
        if (closure_131_6) {
          let str2 = "approved";
          if (closure_131_4.length > 0) {
            str2 = "failed";
          }
          str = str2;
        }
        c7 = 3;
        const obj = { value: str, done: true };
        return obj;
      }
    } catch (tmp34) {
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp34;
      } else {
        c6 = tmp;
      }
      tmp35 = c5;
    }
  }
};
let closure_21 = async function _startPublish(arg0, arg1, arg2, arg3) {
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
        return { value: "HermesInternal", done: "+95" };
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
                closure_133_22(closure_132_7, true);
              }
              const obj3 = closure_133_0(closure_133_2[18]);
              const publishProjectResult = closure_133_0(closure_133_2[18]).publishProject(
                closure_132_7,
                closure_132_3,
                closure_132_2,
              );
              closure_133_0(closure_133_2[18])
                .publishProject(closure_132_7, closure_132_3, closure_132_2)
                .then((ok) => {
                  if (true === ok.ok) {
                    return ok;
                  } else {
                    if (ok.code === closure_0(11476).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                      project = closure_0(7667).getProject(projectId);
                      project.catch(() => {});
                      const tmp9Result = closure_0(7667);
                    }
                    const _Error = Error;
                    const error = new Error(closure_1(11476)(ok));
                    throw error;
                  }
                })
                .then(
                  (result) => {
                    const channel_skipped = result;
                    const intl = project(1112).intl;
                    closure_5.showConfirmation(intl.string(closure_1_1(4245).S6Px3n));
                    const conjurePublishEval = project(11477).requestConjurePublishEval(projectId);
                    if (null != channel_skipped.guildId) {
                      const tmpResult = project(6134);
                      const profile = tmpResult.fetchProfile(project(7692).conjureProductionBotUserId(closure_4), {
                        withMutualGuilds: true,
                      });
                      profile.catch(() => {});
                      const tmpResult3 = project(7692);
                    }
                    const obj = project(11477);
                    result = project(11471).refreshPublishedProject(projectId, { isPreview: false });
                    const tmpResult4 = project(11471);
                    const catchPromise1 = result.catch(() => {});
                    const nextPromise = result
                      .catch(() => {})
                      .then(() => {
                        let tmp;
                        if (closure_2_9) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = closure_3_23(projectId, closure_2_6);
                          }
                        }
                        return tmp;
                      });
                    result
                      .catch(() => {})
                      .then(() => {
                        let tmp;
                        if (closure_2_9) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = closure_3_23(projectId, closure_2_6);
                          }
                        }
                        return tmp;
                      })
                      .finally(() => {
                        closure_2_1(572).dispatch({
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
                        if (closure_2_9) {
                          if (true !== channel_skipped.channel_skipped) {
                            tmp = closure_3_23(projectId, closure_2_6);
                          }
                        }
                        return tmp;
                      })
                      .finally(() => {
                        closure_2_1(572).dispatch({
                          type: "CONJURE_PROJECT_APP_CHANNEL_PENDING",
                          projectId,
                          pending: false,
                        });
                      });
                  },
                  (message) => {
                    closure_1(572).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
                    if (message instanceof Error) {
                      message = message.message;
                    } else {
                      const intl = closure_0(1112).intl;
                      message = intl.string(closure_1(4245).gMWZeG);
                    }
                    const obj = closure_1(572);
                    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false };
                    closure_1(572).dispatch({ type: "CONJURE_PROJECT_PUBLISH_FAILED", projectId, message });
                    closure_1_5.showError(message);
                    const tmp2Result = closure_1(572);
                  },
                );
              let nextPromise = closure_133_0(closure_133_2[18])
                .publishProject(closure_132_7, closure_132_3, closure_132_2)
                .then((ok) => {
                  if (true === ok.ok) {
                    return ok;
                  } else {
                    if (ok.code === closure_0(11476).PREVIEW_BOT_NOT_INSTALLED_CODE) {
                      project = closure_0(7667).getProject(projectId);
                      project.catch(() => {});
                      const tmp9Result = closure_0(7667);
                    }
                    const _Error = Error;
                    const error = new Error(closure_1(11476)(ok));
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
function waitForAppChannel() {
  const self = this;
  const apply = closure_24.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_24 = async function _waitForAppChannel(arg0) {
  if (c7 === 2) {
    c7 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp5 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
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
          closure_5 = tmp3;
          closure_4 = tmp2;
          closure_132_0 = closure_0;
          closure_132_1 = closure_1;
          let appChannelId;
          closure_132_2 = undefined;
          closure_132_3 = undefined;
          const _Date3 = Date;
          const sum = Date.now() + 5000;
          closure_132_2 = sum;
          const tmp41 = readPublishSubject(closure_0, closure_1);
          if (tmp41 != null) {
            appChannelId = tmp41.appChannelId;
          }
          c2 = appChannelId;
          if (appChannelId == null) {
            c2 = null;
          }
          closure_132_3 = c2;
          if (null == closure_132_3) {
            const _Date = Date;
            if (Date.now() < sum) {
              const promise = new Promise((arg0) => setTimeout(arg0, 250));
              c6 = 1;
              c7 = 1;
              const obj4 = { value: promise, done: false };
              return obj4;
            }
          }
          c7 = 3;
        }
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 !== 2) {
        const tmp12 = closure_133_18(closure_132_0, closure_132_1);
        let appChannelId1;
        if (tmp12 != null) {
          appChannelId1 = tmp12.appChannelId;
        }
        c3 = appChannelId1;
        if (appChannelId1 == null) {
          c3 = null;
        }
        closure_132_3 = c3;
        if (null == closure_132_3) {
          const _Date2 = Date;
        }
      }
      c7 = 3;
      const obj = { value, done: true };
      return obj;
    } catch (tmp28) {
      c7 = tmp;
      throw tmp28;
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
  if (c10 === 2) {
    c10 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp7 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      const obj2 = { value, done: true };
      return obj2;
    } else {
      return { value: "HermesInternal", done: "+95" };
    }
  } else {
    try {
      c10 = 2;
      if (0 === c9) {
        if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_6 = tmp4;
          closure_5 = tmp8;
          closure_133_3 = undefined;
          closure_133_0 = closure_0;
          closure_133_1 = closure_1;
          closure_133_2 = closure_2;
          let obj4 = closure_3;
          if (closure_3 === undefined) {
            obj4 = {};
          }
          closure_133_3 = obj4;
          let guildId;
          let platform;
          closure_133_6 = undefined;
          closure_133_7 = undefined;
          closure_133_8 = undefined;
          closure_133_9 = undefined;
          c9 = 1;
          c10 = 1;
          return { value: "Path", done: true };
        }
      } else {
        if (1 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            guildId = closure_133_2.guildId;
            platform = closure_133_2.platform;
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
                let ownerInstallMissing;
                if (closure_133_6 != null) {
                  ownerInstallMissing = closure_133_6.ownerInstallMissing;
                }
                if (true === ownerInstallMissing) {
                  closure_134_25.add(closure_133_0);
                  c8 = 2;
                  c9 = 4;
                  c10 = 1;
                  const obj7 = {
                    value: closure_134_0(closure_134_2[17]).installConjureProjectForOwner(closure_133_0),
                    done: false,
                  };
                  return obj7;
                }
              }
            }
            c10 = 3;
            c10 = 3;
            const obj9 = { value, done: true };
            return obj9;
          }
        } else if (2 === tmp8) {
          c8 = 0;
          closure_134_25.delete(closure_133_0);
          throw closure_7;
        } else if (3 === tmp8) {
          c8 = 1;
          const intl = closure_134_0(closure_134_2[19]).intl;
          platform.showError(intl.string(closure_134_1(closure_134_2[20]).gMWZeG));
          c8 = 0;
          closure_134_25.delete(closure_133_0);
          c10 = 3;
          const obj10 = { value: undefined, done: true };
          return obj10;
        } else if (4 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            closure_134_25.delete(closure_133_0);
            c10 = 3;
            const obj11 = { value, done: true };
            return obj11;
          } else {
            c8 = 0;
            closure_134_25.delete(closure_133_0);
          }
        } else if (5 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 !== 2) {
            const result = value.promptPublishApproval(closure_133_8);
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj = { value, done: true };
          return obj;
        }
        if (null != closure_133_6) {
          if (null != closure_133_7) {
            if ("nothing_built" !== closure_133_7) {
              const status3 = closure_133_6.input.status;
              let safetyHold;
              if (status3 != null) {
                safetyHold = status3.safetyHold;
              }
              if (true !== safetyHold) {
                let publishApprovalUrl = null;
                if (closure_134_17(closure_133_0)) {
                  publishApprovalUrl = closure_134_14.getPublishApprovalUrl(closure_133_0);
                }
                closure_133_8 = publishApprovalUrl;
                if (null != closure_133_8) {
                  if (closure_134_12(closure_133_6.project)) {
                    c9 = 5;
                    c10 = 1;
                    const obj12 = {
                      value: closure_134_0(closure_134_2[27])(closure_134_2[26], closure_134_2.paths),
                      done: false,
                    };
                    return obj12;
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
                    const obj14 = closure_134_0(closure_134_2[28]);
                    const obj13 = {
                      entryPoint: closure_133_1,
                      publishState: closure_133_7,
                      surface: null,
                      installScope: null,
                    };
                    const status4 = closure_133_6.input.status;
                    let surface;
                    if (status4 != null) {
                      surface = status4.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj13.surface = surface;
                    obj13.installScope = closure_133_6.project.install_scope;
                    const result1 = closure_134_0(closure_134_2[29]).trackConjurePublishActionClicked(
                      closure_133_0,
                      obj13,
                    );
                    if (null == closure_133_9.disabledReason) {
                      closure_134_0(closure_134_2[18]).preparePublish(closure_133_0);
                      if (null == closure_133_9.confirmReason) {
                        c9 = 6;
                        c10 = 1;
                        const obj16 = {
                          value: closure_134_28(closure_133_0, closure_133_9, closure_133_2, closure_133_3),
                          done: false,
                        };
                        return obj16;
                      } else {
                        platform.showPublishBlocked(
                          closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS,
                          closure_133_9.confirmReason,
                          () => {
                            closure_2_28(closure_1_0, closure_1_9, closure_1_2, closure_1_3).catch(() => {});
                          },
                        );
                      }
                      const obj5 = closure_134_0(closure_134_2[18]);
                    } else {
                      platform.showPublishBlocked(
                        closure_134_0(closure_134_2[30]).ConjurePublishBlockedReason.MISSING_MANAGE_SERVER,
                        closure_133_9.disabledReason,
                      );
                    }
                    const obj15 = closure_134_0(closure_134_2[29]);
                  }
                }
              } else {
                platform.showSafetyHold(closure_133_0);
              }
            }
          }
        }
      }
    } catch (tmp131) {
      closure_7 = tmp131;
      if (tmp5 === c8) {
        c10 = tmp3;
        throw tmp131;
      } else if (tmp2 === tmp133) {
        c9 = tmp;
      } else {
        c9 = tmp3;
      }
    }
  }
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
  c9 = 0;
  c10 = 0;
  c8 = 0;
  return (async (arg0, value, arg2, arg3) => {
    if (c10 === 2) {
      c10 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp7 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c10 = 2;
        if (0 === c9) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c10 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_6 = tmp4;
            closure_5 = tmp8;
            closure_133_0 = closure_0;
            closure_133_1 = intent;
            closure_133_2 = closure_2;
            closure_133_3 = closure_3;
            closure_133_4 = undefined;
            closure_133_5 = undefined;
            closure_133_6 = undefined;
            closure_133_7 = undefined;
            ({ guildId: closure_133_4, platform } = closure_2);
            closure_133_5 = platform;
            if (!projectPublishing.isProjectPublishing(closure_0)) {
              if ("consent_then_publish" === intent.intent) {
                const requestConsent = platform.requestConsent;
                f138552 = requestConsent;
                if (requestConsent == null) {
                  f138552 = (arg0) => closure_2_19(arg0, closure_1_4);
                }
                set.add(closure_0);
                c8 = 2;
                c9 = 3;
                c10 = 1;
                const obj4 = { value: f138552(closure_0), done: false };
                return obj4;
              } else {
                closure_133_7 = closure_134_18(closure_133_0, closure_133_4);
                if (null != closure_133_7) {
                  c9 = 4;
                  c10 = 1;
                  const obj5 = {
                    value: (function startPublish() {
                      const self = this;
                      const apply = closure_1_21.apply;
                      if (typeof apply === "unknown") {
                        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
                      } else {
                        applyArgumentsResult = apply(self, arguments);
                      }
                      return applyArgumentsResult;
                    })(closure_133_7, closure_133_1, closure_133_2, closure_133_3),
                    done: false,
                  };
                  return obj5;
                }
              }
            }
          }
        } else if (1 === tmp8) {
          c8 = 0;
          closure_134_25.delete(closure_133_0);
          throw closure_7;
        } else if (2 === tmp8) {
          c8 = 1;
          closure_133_6 = "failed";
          c8 = 0;
          closure_134_25.delete(closure_133_0);
          if ("failed" === closure_133_6) {
            const intl = closure_134_0(closure_134_2[19]).intl;
            closure_133_5.showError(intl.string(closure_134_1(closure_134_2[20]).gMWZeG));
            c10 = 3;
            const obj6 = { value: undefined, done: true };
            return obj6;
          } else {
            c10 = 3;
            return { value: "HermesInternal", done: "+95" };
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c10 = 3;
            throw value;
          } else if (arg0 === 2) {
            c8 = 0;
            closure_134_25.delete(closure_133_0);
            c10 = 3;
            const obj7 = { value, done: true };
            return obj7;
          } else {
            closure_133_6 = value;
            c8 = 1;
          }
        } else if (arg0 === 1) {
          c10 = 3;
          throw value;
        } else if (arg0 === 2) {
          c10 = 3;
          const obj = { value, done: true };
          return obj;
        }
        c10 = 3;
        return { value: "HermesInternal", done: "+95" };
      } catch (tmp49) {
        closure_7 = tmp49;
        if (tmp5 === c8) {
          c10 = tmp3;
          throw tmp49;
        } else if (tmp2 === tmp51) {
          c9 = tmp2;
        } else {
          c9 = tmp;
        }
      }
    }
  })();
};
let ConjureProjectStore = fn(6934);
({ canPublishProject: closure_11, isProjectOwner: closure_12 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const Permissions = fn(1071).Permissions;
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
  items = [
    usesAppChannels,
    botInGuild,
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
        tmp5 = closure_2_11(tmp2.project);
      }
      const obj = {
        viewerCanPublish: tmp5,
        ownerInstallMissing: null,
        project: null,
        guildId: null,
        appChannelId: null,
        publishing: null,
        failure: null,
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
      let ownerInstallMissing;
      if (tmp2 != null) {
        ownerInstallMissing = tmp2.ownerInstallMissing;
      }
      obj.ownerInstallMissing = true === ownerInstallMissing;
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
      let tmp11 = null != closure_0;
      if (tmp11) {
        let flag2 = false;
        if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
          const publishProgress = ConjurePublishStatusStore.getPublishProgress(closure_0);
          let stage;
          if (publishProgress != null) {
            stage = publishProgress.stage;
          }
          let tmp14 = null == stage;
          if (!tmp14) {
            tmp14 = "preparing" === stage;
          }
          if (!tmp14) {
            tmp14 = "approval" === stage;
          }
          flag2 = tmp14;
        }
        tmp11 = false === flag2;
      }
      if (tmp11) {
        let isProjectPublishingResult = ConjurePublishStatusStore.isProjectPublishing(closure_0);
        if (!isProjectPublishingResult) {
          const publishStatus = ConjurePublishStatusStore.getPublishStatus(closure_0);
          let publishing;
          if (publishStatus != null) {
            publishing = publishStatus.publishing;
          }
          isProjectPublishingResult = true === publishing;
        }
        tmp11 = isProjectPublishingResult;
      }
      obj.publishing = tmp11;
      let publishFailure = null;
      if (null != closure_0) {
        publishFailure = ConjurePublishStatusStore.getPublishFailure(closure_0);
      }
      obj.failure = publishFailure;
      let publishApprovalUrl = null;
      if (null != closure_0) {
        let flag3 = false;
        if (null != ConjurePublishStatusStore.getPublishApprovalUrl(closure_0)) {
          const publishProgress1 = ConjurePublishStatusStore.getPublishProgress(closure_0);
          let stage1;
          if (publishProgress1 != null) {
            stage1 = publishProgress1.stage;
          }
          let tmp25 = null == stage1;
          if (!tmp25) {
            tmp25 = "preparing" === stage1;
          }
          if (!tmp25) {
            tmp25 = "approval" === stage1;
          }
          flag3 = tmp25;
        }
        publishApprovalUrl = null;
        if (flag3) {
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
      let flag4;
      if (tmp2 != null) {
        flag4 = tmp2.input.appChannelPending;
      }
      if (flag4 == null) {
        flag4 = false;
      }
      obj.appChannelPending = flag4;
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
      let flag5;
      if (tmp2 != null) {
        flag5 = tmp2.input.usesAppChannels;
      }
      if (flag5 == null) {
        flag5 = false;
      }
      obj.usesAppChannels = flag5;
      botInGuild = undefined;
      if (tmp2 != null) {
        botInGuild = tmp2.input.botInGuild;
      }
      if (botInGuild == null) {
        botInGuild = null;
      }
      obj.botInGuild = botInGuild;
      let flag6;
      if (tmp2 != null) {
        flag6 = tmp2.input.liveNameOutdated;
      }
      if (flag6 == null) {
        flag6 = false;
      }
      obj.liveNameOutdated = flag6;
      return obj;
    },
    items1,
  );
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
  ({ viewerCanPublish, ownerInstallMissing, failure, appChannelId } = stateFromStoresObject);
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
      const profile = obj2.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), {
        withMutualGuilds: true,
      });
      profile.catch(() => {});
    }
  }, items3);
  application_id = undefined;
  if (project != null) {
    application_id = project.application_id;
  }
  if (application_id == null) {
    application_id = null;
  }
  let isConjureLiveResult = null != publishState;
  if (isConjureLiveResult) {
    isConjureLiveResult = tmp3(tmp4[32]).isConjureLive(publishState);
    const tmp3Result = tmp3(tmp4[32]);
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
  let tmp19 = null;
  let obj2 = require("initialize");
  if (publishing) {
    tmp19 = arg0;
  }
  let stringResult = context(guildId1[33])(tmp19);
  const items6 = [arg0, context];
  if (null != context) {
    if (null != memo) {
      if (null != memo1) {
        let obj3 = {
          canPublish: viewerCanPublish,
          publishing,
          awaitingApproval: null != approvalUrl,
          ownerInstallMissing,
        };
        const result = tmp3(tmp4[28]).conjurePublishButtonState(memo, obj3);
        if ("hidden" === result) {
          return null;
        } else {
          if (null == approvalUrl) {
            let label = memo1.label;
          } else {
            const intl = tmp3(tmp4[19]).intl;
            label = intl.string(tmp17(tmp4[20]).qru9M5);
          }
          const obj4 = {};
          const merged = Object.assign(memo1);
          obj4.state = result;
          obj4.status = memo.status;
          obj4.guildId = guildId;
          obj4.appChannelId = appChannelId;
          let tmp25 = null;
          if (!publishing) {
            tmp25 = failure;
          }
          obj4.failure = tmp25;
          obj4.showsProgress = null != stringResult;
          if (publishing) {
            if (stringResult == null) {
              const intl2 = tmp3(tmp4[19]).intl;
              stringResult = intl2.string(tmp17(tmp4[20]).Rhx0rn);
            }
            label = stringResult;
          }
          obj4.label = label;
          if (!publishing) {
            publishing = true === context.busy;
          }
          obj4.disabled = publishing;
          obj4.run = tmp21;
          return obj4;
        }
        const tmp3Result2 = tmp3(tmp4[28]);
      }
    }
  }
  return null;
}
export const ConjurePublishActionContext = context;
export function publishGuildId(project, fallbackGuildId) {
  let tmp = null;
  if ("guild" === project.install_scope) {
    let guild_id = project.guild_id;
    if (guild_id == null) {
      guild_id = fallbackGuildId;
    }
    tmp = guild_id;
  }
  return tmp;
}
export function isConjureLiveNameOutdated(application_id) {
  if (obj.usesPreviewApp(application_id)) {
    const application = ApplicationStore.getApplication(application_id.application_id);
    let name;
    if (application != null) {
      name = application.name;
    }
    return null != name && name !== application_id.name;
  } else {
    return false;
  }
  obj = ConjureProjectTypes;
}
export { approvalPending };
export { requestConjureInstallConsent };
export { waitForAppChannel };
export { runConjurePublishAction };
