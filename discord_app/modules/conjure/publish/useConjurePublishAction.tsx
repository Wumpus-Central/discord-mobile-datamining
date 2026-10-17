// === Module 11673: useConjurePublishAction ===

// Module 11673 (useConjurePublishAction)
import DispatcherDefault from "Dispatcher" /* 584 */;
import util from "util" /* 1128 */;
import _modDef3883 from "module_3883" /* 3883 */;
import ConjureProjectTypes from "ConjureProjectTypes" /* 6294 */;
import ApplicationActionCreators from "ApplicationActionCreators" /* 6357 */;
import ConjureUtils from "ConjureUtils" /* 7222 */;
import UserActionCreators from "UserActionCreators" /* 8579 */;
import ConjureActionCreators from "ConjureActionCreators" /* 10983 */;
import conjureAppInServer from "conjureAppInServer" /* 10987 */;
import conjurePublishFailureMessage from "conjurePublishFailureMessage" /* 11675 */;
import conjurePublishAction2 from "conjurePublishAction" /* 11676 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;
import ApplicationStore from "ApplicationStore" /* 5540 */;
import UserProfileStore from "UserProfileStore" /* 7586 */;
import ChannelStore from "ChannelStore" /* 2068 */;
import GuildChannelStore from "GuildChannelStore" /* 4843 */;
import GuildStore from "GuildStore" /* 2090 */;
import PermissionStore from "PermissionStore" /* 4845 */;
import ConjureProjectStore_mod from "ConjureProjectStore" /* 6293 */;
import ConjurePublishStatusStore from "ConjurePublishStatusStore" /* 10977 */;

const require = globalThis.__r;
const conjurePublishFailureMessageDefault = conjurePublishFailureMessage;

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
    const obj4 = { installScope: project.install_scope, status: ConjurePublishStatusStore.getPublishStatus(projectId), integrationStatus: ConjureProjectStore.getIntegrationStatus(projectId), guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesAppChannels: null, botInGuild: null, liveNameOutdated: null };
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
let closure_20 = async function _saveConjureFirstPublishDetails(arg0) {
  if (c7 === 2) {
    c7 = 3;
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
          closure_3 = tmp7;
          closure_131_1 = undefined;
          closure_131_2 = undefined;
          closure_131_3 = undefined;
          closure_131_4 = undefined;
          closure_131_0 = closure_0;
          ({ name: closure_131_1, icon: closure_131_2, description: closure_131_3 } = closure_1);
          closure_131_4 = closure_2;
          closure_131_5 = undefined;
          c6 = 1;
          c7 = 1;
          return { value: "Reflect", done: true };
        }
      } else if (1 === tmp7) {
        if (arg0 === 1) {
          c7 = 3;
          throw value;
        } else if (arg0 === 2) {
          c7 = 3;
          const obj5 = { value, done: true };
          return obj5;
        } else {
          closure_131_5 = {};
          if (closure_131_1 !== closure_131_4.name) {
            closure_131_5.name = closure_131_1;
          }
          if (null != closure_131_2) {
            closure_131_5.icon = closure_131_2;
          }
          const trimmed = closure_131_3.trim();
          if (trimmed !== str.trim()) {
            closure_131_5.description = closure_131_3.trim();
          }
          const _Object = Object;
          if (0 === Object.keys(closure_131_5).length) {
            c7 = 3;
            return { value: true, done: true };
          } else {
            c5 = 1;
            c6 = 3;
            c7 = 1;
            const obj6 = { value: closure_132_0(closure_132_2[17]).updateProjectSettings(closure_131_0, closure_131_5), done: false };
            return obj6;
          }
          str = closure_131_4.description;
        }
      } else if (2 === tmp7) {
        c5 = 0;
        c7 = 3;
        return { value: false, done: true };
      } else if (arg0 === 1) {
        c7 = 3;
        throw value;
      } else if (arg0 === 2) {
        c5 = 0;
        c7 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        c5 = 0;
        c7 = 3;
        return { value: true, done: true };
      }
    } catch (tmp34) {
      if (tmp4 === c5) {
        c7 = tmp2;
        throw tmp34;
      } else {
        c6 = tmp;
      }
    }
  }
};
function firstPublishDescription() {
  const self = this;
  const apply = closure_22.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_22 = async function _firstPublishDescription(arg0) {
  if (c3 === 2) {
    c3 = 3;
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
      c3 = 2;
      if (0 === c2) {
        if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          const preview_application_id = closure_0.preview_application_id;
          let isHydratedResult = null == preview_application_id;
          if (!isHydratedResult) {
            isHydratedResult = hydrated.isHydrated(preview_application_id);
          }
          if (!isHydratedResult) {
            let application = require("ApplicationActionCreators").fetchApplication(preview_application_id);
            c2 = 1;
            c3 = 1;
            const obj5 = {
              value: application.catch(() => {

                        }),
              done: false
            };
            return obj5;
          }
        }
      } else if (arg0 === 1) {
        c3 = 3;
        throw value;
      } else if (arg0 === 2) {
        c3 = 3;
        const obj = { value, done: true };
        return obj;
      }
      c3 = 3;
      const obj6 = {
        value: (function savedConjureDescription(id) {
              project = project.getProject(id);
              let prop;
              if (project != null) {
                prop = project.preview_application_id;
              }
              let str = "";
              if (null != prop) {
                application = application.getApplication(prop);
                let str2;
                if (application != null) {
                  str2 = application.description;
                }
                if (str2 == null) {
                  str2 = "";
                }
                str = str2;
              }
              return str;
            })(closure_129_0.id),
        done: true
      };
      return obj6;
    } catch (tmp12) {
      c3 = tmp;
      throw tmp12;
    }
  }
};
function startPublish(project, isUpdate, arg2) {
  _require = project;
  project = project.project;
  ({ platform: dependencyMap, guildId: asyncGeneratorStep } = arg2);
  const id = project.id;
  let tmp = null != project.guildId;
  if (tmp) {
    const status = project.input.status;
    let surface;
    if (status != null) {
      surface = status.surface;
    }
    tmp = "activity" === surface;
  }
  if (tmp) {
    tmp = null == project.appChannelId;
  }
  if (tmp) {
    tmp = !isUpdate.isUpdate;
  }
  closure_5 = tmp;
  if (tmp) {
    let obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: true };
    project(584).dispatch(obj2);
    let obj = project(584);
  }
  const obj3 = require("conjurePublishConnection");
  const publishProjectResult = require("conjurePublishConnection").publishProject(id);
  require("conjurePublishConnection").publishProject(id).then((ok) => {
    if (true === ok.ok) {
      return ok;
    } else {
      if (ok.code === conjurePublishFailureMessage.PREVIEW_BOT_NOT_INSTALLED_CODE) {
        project = ConjureActionCreators.getProject(id);
        project.catch(() => {

        });
        const tmp9Result = ConjureActionCreators;
      }
      const _Error = Error;
      const error = new Error(conjurePublishFailureMessageDefault(ok));
      throw error;
    }
  }).then((result) => {
    project = result;
    const intl = project(dependencyMap[20]).intl;
    closure_2.showConfirmation(intl.string(project(dependencyMap[21]).S6Px3n));
    if (null != project.guildId) {
      const tmpResult = tmp(dependencyMap[24]);
      const profile = tmpResult.fetchProfile(tmp(dependencyMap[13]).conjureProductionBotUserId(project), { withMutualGuilds: true });
      profile.catch(() => {

      });
      const tmpResult3 = tmp(dependencyMap[13]);
    }
    result = project(dependencyMap[22]).refreshPublishedProject(id, { isPreview: false });
    const tmpResult4 = project(dependencyMap[22]);
    const catchPromise1 = result.catch(() => {

    });
    const nextPromise = result.catch(() => {

    }).then(() => {
      let tmp;
      if (closure_5) {
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
          })(id, asyncGeneratorStep);
        }
      }
      return tmp;
    });
    result.catch(() => {

    }).then(() => {
      let tmp;
      if (closure_5) {
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
          })(id, asyncGeneratorStep);
        }
      }
      return tmp;
    }).finally(() => {
      project(dependencyMap[23]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
    }).catch(() => {

    });
    const cleanupPromise = result.catch(() => {

    }).then(() => {
      let tmp;
      if (closure_5) {
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
          })(id, asyncGeneratorStep);
        }
      }
      return tmp;
    }).finally(() => {
      project(dependencyMap[23]).dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId, pending: false });
    });
  }, (message) => {
    DispatcherDefault.dispatch({ type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false });
    if (message instanceof Error) {
      message = message.message;
    } else {
      const intl = util.intl;
      message = intl.string(_modDef3883.gMWZeG);
    }
    dependencyMap.showError(message);
    const obj2 = { type: "CONJURE_PROJECT_APP_CHANNEL_PENDING", projectId: id, pending: false };
  });
  let nextPromise = require("conjurePublishConnection").publishProject(id).then((ok) => {
    if (true === ok.ok) {
      return ok;
    } else {
      if (ok.code === conjurePublishFailureMessage.PREVIEW_BOT_NOT_INSTALLED_CODE) {
        project = ConjureActionCreators.getProject(id);
        project.catch(() => {

        });
        const tmp9Result = ConjureActionCreators;
      }
      const _Error = Error;
      const error = new Error(conjurePublishFailureMessageDefault(ok));
      throw error;
    }
  });
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
  const apply = closure_27.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_27 = async function _runConjurePublishAction(arg0) {
  if (c5 === 2) {
    c5 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp3 === 3) {
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
      let num2 = 0;
      if (0 === num3) {
        num3 = 1;
        if (arg0 === 1) {
          c5 = 3;
          throw value;
        } else if (arg0 === 2) {
          c5 = 3;
          const obj3 = { value, done: true };
          return obj3;
        } else {
          closure_1 = closure_2;
          ({ guildId, platform, busy } = closure_2);
          let flag = true;
          if (true !== busy) {
            busy = set.has(closure_0);
            if (!busy) {
              busy = readPublishSubject;
              const tmp5 = readPublishSubject(closure_0, guildId);
              if (null != tmp5) {
                guildId = projectPublishing;
                busy = projectPublishing.isProjectPublishing(closure_0);
                if (!busy) {
                  num2 = tmp5.input.status;
                  guildId = undefined;
                  busy = undefined;
                  if (num2 != null) {
                    busy = num2.publishing;
                  }
                  if (flag !== busy) {
                    num2 = _require;
                    flag = dependencyMap;
                    busy = require("conjurePublishAction").resolveConjurePublishAction(tmp5.input);
                    const obj6 = require("conjurePublishAction");
                    const obj4 = { entryPoint: tmp23, publishState: null, surface: null, installScope: null, action: null };
                    const status2 = tmp5.input.status;
                    let state;
                    if (status2 != null) {
                      state = status2.state;
                    }
                    let publishState = state;
                    if (state == null) {
                      publishState = null;
                    }
                    obj4.publishState = publishState;
                    const status = tmp5.input.status;
                    let surface;
                    if (status != null) {
                      surface = status.surface;
                    }
                    if (surface == null) {
                      surface = null;
                    }
                    obj4.surface = surface;
                    obj4.installScope = tmp5.project.install_scope;
                    obj4.action = busy.action;
                    const result = require("ConjureAnalytics").trackConjurePublishActionClicked(closure_0, obj4);
                    if (null != busy.disabledReason) {
                      platform.showPublishBlocked(num2(11671).ConjurePublishBlockedReason.MISSING_MANAGE_SERVER, busy.disabledReason);
                    }
                    const obj7 = require("ConjureAnalytics");
                  }
                  num2(11046).preparePublish(closure_0);
                  if (null == busy.confirmReason) {
                    c5 = num3;
                    const obj5 = { value: continuePublish(closure_0, busy, tmp24), done: false };
                    return obj5;
                  } else {
                    num2 = num2(11671).ConjurePublishBlockedReason.MISSING_MANAGE_CHANNELS;
                    flag = busy.confirmReason;
                    platform.showPublishBlocked(num2, flag, () => {
                      closure_2_28(closure_0, busy, closure_1).catch(() => {

                      });
                    });
                  }
                  const num2Result = num2(11046);
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
  const apply = closure_29.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_29 = async function _continuePublish() {
  closure_1 = arg1;
  closure_2 = arg2;
  c14 = 0;
  c15 = 0;
  c12 = 0;
  return (async (arg0, value, arg2) => {
    if (c15 === 2) {
      c15 = 3;
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
        c15 = 2;
        if (0 === c14) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c15 = 3;
            const obj3 = { value, done: true };
            return obj3;
          } else {
            closure_11 = tmp3;
            closure_10 = tmp8;
            closure_138_0 = projectId;
            closure_138_1 = closure_1;
            closure_138_2 = closure_2;
            closure_138_3 = undefined;
            closure_138_4 = undefined;
            closure_138_5 = undefined;
            closure_138_6 = undefined;
            closure_138_7 = undefined;
            closure_138_8 = undefined;
            const guildId = closure_2.guildId;
            closure_138_3 = guildId;
            platform = closure_2.platform;
            closure_138_4 = platform;
            closure_138_5 = readPublishSubject(projectId, guildId);
            if (null != closure_138_5) {
              if (!projectPublishing.isProjectPublishing(projectId)) {
                if (null != platform.promptFirstPublish) {
                  const status = closure_138_5.input.status;
                  let state;
                  if (status != null) {
                    state = status.state;
                  }
                  if ("unpublished" === state) {
                    if (closure_2_12(closure_138_5.project)) {
                      set.add(projectId);
                      c12 = 1;
                      promptFirstPublish = platform.promptFirstPublish;
                      obj4 = { projectId, name: closure_138_5.project.name };
                      c14 = 2;
                      c15 = 1;
                      const obj5 = { value: firstPublishDescription(closure_138_5.project), done: false };
                      return obj5;
                    }
                  }
                }
              }
            }
            c15 = 3;
            c15 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (1 === tmp8) {
          c12 = 0;
          closure_139_25.delete(closure_138_0);
          throw closure_13;
        } else if (2 === tmp8) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 0;
            closure_139_25.delete(closure_138_0);
            c15 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            obj4.description = value;
            c14 = 3;
            c15 = 1;
            const obj7 = { value: promptFirstPublish(obj4), done: false };
            return obj7;
          }
        } else if (3 === tmp8) {
          if (arg0 === 1) {
            c15 = 3;
            throw value;
          } else if (arg0 === 2) {
            c12 = 0;
            closure_139_25.delete(closure_138_0);
            c15 = 3;
            const obj8 = { value, done: true };
            return obj8;
          } else {
            closure_138_6 = value;
            c12 = 0;
            closure_139_25.delete(closure_138_0);
            if (closure_138_6) {
              if (!closure_139_14.isProjectPublishing(closure_138_0)) {
                const tmp51 = closure_139_17(closure_138_0, closure_138_3);
                closure_3 = tmp51;
                if (tmp51 == null) {
                  closure_3 = closure_138_5;
                }
                closure_138_5 = closure_3;
              }
            }
            c15 = 3;
            return { value: "IconComponent", done: null };
          }
        } else if (4 === tmp8) {
          c12 = 0;
          closure_139_25.delete(closure_138_0);
          throw closure_13;
        } else if (arg0 === 1) {
          c15 = 3;
          throw value;
        } else if (arg0 === 2) {
          c12 = 0;
          closure_139_25.delete(closure_138_0);
          c15 = 3;
          const obj = { value, done: true };
          return obj;
        } else {
          c12 = 0;
          closure_139_25.delete(closure_138_0);
          if (closure_139_14.isProjectPublishing(closure_138_0)) {
            c15 = 3;
            return { value: "IconComponent", done: null };
          } else {
            closure_138_7 = closure_139_17(closure_138_0, closure_138_3);
            let integrationStatus;
            if (closure_138_7 != null) {
              integrationStatus = closure_138_7.input.integrationStatus;
            }
            c5 = integrationStatus;
            if (integrationStatus == null) {
              c5 = null;
            }
            closure_138_8 = c5;
            if (null != closure_138_7) {
              const obj9 = { installScope: closure_138_7.project.install_scope, previewReady: null, integrationInstalled: null, botPermissionsChanged: null };
              let preview_ready;
              if (closure_138_8 != null) {
                preview_ready = closure_138_8.preview_ready;
              }
              obj9.previewReady = true === preview_ready;
              let prop;
              if (closure_138_8 != null) {
                prop = closure_138_8.integration_installed;
              }
              integrationInstalled = prop;
              if (prop == null) {
                integrationInstalled = null;
              }
              obj9.integrationInstalled = integrationInstalled;
              let prop1;
              if (closure_138_8 != null) {
                prop1 = closure_138_8.bot_permissions_changed;
              }
              obj9.botPermissionsChanged = true === prop1;
              if (!obj10.requiresPermissionReview(obj9)) {
                closure_139_23(closure_138_7, closure_138_1, closure_138_2);
              }
              obj10 = closure_139_0(closure_139_2[28]);
            }
          }
        }
        if ("consent_then_publish" !== closure_138_1.intent) {
          closure_139_23(closure_138_5, closure_138_1, closure_138_2);
        } else {
          closure_139_25.add(closure_138_0);
          c12 = 2;
          const requestConsent = closure_138_4.requestConsent;
          f157054 = requestConsent;
          if (requestConsent == null) {
            f157054 = (arg0) => closure_2_18(arg0, closure_1_3);
          }
          c14 = 5;
          c15 = 1;
          const obj11 = { value: f157054(closure_138_0), done: false };
          return obj11;
        }
      } catch (tmp105) {
        closure_13 = tmp105;
        if (tmp4 === c12) {
          c15 = tmp2;
          throw tmp105;
        } else if (tmp === tmp107) {
          c14 = tmp;
        } else {
          c14 = tmp5;
        }
      }
    }
  })();
};
let ConjureProjectStore = fn(6293);
({ canPublishProject: closure_11, isProjectOwner: closure_12 } = ConjureProjectStore);
let ConjureProjectStore = ConjureProjectStore_mod;
const Permissions = fn(1087).Permissions;
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
    const obj = { canPublish: tmp5, project: null, guildId: null, appChannelId: null, publishing: null, installScope: null, status: null, integrationStatus: null, guildName: null, appChannelName: null, appChannelPending: null, canManageGuild: null, canManageChannels: null, usesAppChannels: null, botInGuild: null, liveNameOutdated: null };
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
  usesAppChannels = stateFromStoresObject.usesAppChannels;
  botInGuild = stateFromStoresObject.botInGuild;
  const liveNameOutdated = stateFromStoresObject.liveNameOutdated;
  const items2 = [project, installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated];
  ({ canPublish, appChannelId } = stateFromStoresObject);
  memo = obj.useMemo(() => {
    let tmp = null;
    if (null != project) {
      const obj = { installScope, status, integrationStatus, guildName, appChannelName, appChannelPending, canManageGuild, canManageChannels, usesAppChannels, botInGuild, liveNameOutdated };
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
      const profile = obj.fetchProfile(conjureAppInServer.conjureProductionBotUserId(project), { withMutualGuilds: true });
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
  const items6 = [arg0, context];
  let tmp18 = null;
  if (null != context) {
    tmp18 = null;
    if (canPublish) {
      tmp18 = null;
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
        if (publishing) {
          const intl = require("util").intl;
          let label = intl.string(context(tmp4[21]).Rhx0rn);
        } else {
          label = memo1.label;
        }
        obj3.label = label;
        if (!publishing) {
          publishing = true === context.busy;
        }
        obj3.disabled = publishing;
        obj3.run = tmp17;
        tmp18 = obj3;
      }
    }
  }
  return tmp18;
};
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
export const saveConjureFirstPublishDetails = function saveConjureFirstPublishDetails() {
  const self = this;
  const apply = closure_20.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
};
export { runConjurePublishAction };