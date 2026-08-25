// === Module 12262: onCreateGuild ===

// Module 12262 (onCreateGuild)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import NavigationStack from "NavigationStack" /* 5889 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "noop" /* 19 */;
import { Keyboard } from "get ActivityIndicator" /* 17 */;
import closure_6 from "initialize" /* 4206 */;
import ME from "ME" /* 676 */;
import { GuildTemplateId } from "GuildTemplateId" /* 12263 */;
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics" /* 8662 */;
import { jsx } from "jsxProd" /* 21 */;

require = arg1;
function onCreateGuild() {
  const self = this;
  const apply = _onCreateGuild.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _onCreateGuild() {
  const self = this;
  const tmp = callback((arg0) => {
    closure_0 = arg0;
    c3 = 0;
    c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c4 = 2;
          if (0 === c3) {
            if (arg0 === 1) {
              c4 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c4 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              dependencyMap = tmp5;
              const callback2 = tmp2;
              obj1 = closure_1_1(closure_1_2[8]);
              c3 = 1;
              c4 = 1;
              obj1 = { value: null, done: false };
              obj1[0] = obj1.transitionToGuildSync(callback);
              return obj1;
            }
          } else if (arg0 === 1) {
            c4 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c4 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          } else {
            const guildProgress = callback(12034).createGuildProgress(callback);
            callback2(9701)();
            const obj6 = callback(12034);
            const result = callback2(12264).closeCreateGuildOnboardingModal();
            const obj7 = callback2(12264);
            const result1 = callback(12300).showInstantInviteModal(callback);
            const obj8 = callback(12300);
            const obj2 = { flow_type: null, from_step: null, to_step: "modal_closed" };
            obj2[0] = constants2.GUILD_CREATE_MODAL;
            obj2[1] = constants3.CREATE_SERVER;
            callback2(698).track(constants.USER_FLOW_TRANSITION, obj2);
            c4 = 3;
            return { value: "HermesInternal", done: "HermesInternal" };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  closure_16 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
function _onCreateServer() {
  const self = this;
  const tmp = callback((arg0, arg1, arg2) => {
    closure_0 = arg0;
    closure_1 = arg1;
    closure_2 = arg2;
    c4 = 0;
    c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: "HermesInternal" };
        }
      } else {
        try {
          c3 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c3 = 3;
              throw arg1;
            } else if (arg0 === 2) {
              c3 = 3;
              obj = { value: null, done: true };
              obj[0] = arg1;
              return obj;
            } else {
              let arr = closure_0;
              if (id.id !== closure_1_10.CREATE) {
                c4 = 1;
                c3 = 1;
                obj1 = { value: null, done: false };
                obj1[0] = closure_1_15(tmp14);
                return obj1;
              } else {
                const obj2 = { guildId: null };
                obj2[0] = tmp14;
                arr = arr.push(closure_1_11.CHANNEL_PROMPT, obj2);
              }
            }
          } else if (arg0 === 1) {
            c3 = 3;
            throw arg1;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value: null, done: true };
            obj[0] = arg1;
            return obj;
          }
          c3 = 3;
          return { value: "HermesInternal", done: "HermesInternal" };
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  closure_17 = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, AnalyticsSections: closure_8, NOOP: c9 } = ME);
({ CreateGuildModalStates: unpackModuleId, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: map1 } = NUXGuildTemplatesAnalytics);
let obj = { impression_group: require("encodeProperties").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("set").fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  obj = {
    screens: React.useMemo(() => {
      obj = {};
      obj = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null
      };
      let obj2 = callback(5376);
      obj[4] = obj2.getHeaderCloseButton(() => {
        callback(12239).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
        obj = callback(12239);
        callback(1222).transitionTo(fallbackRoute.fallbackRoute);
        const obj2 = callback(1222);
        const result = callback2(12264).closeCreateGuildOnboardingModal();
      });
      obj[5] = function render() {
        return callback3(callback2(12266), { trigger: constants.NUF });
      };
      obj[constants.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return callback3(callback2(12268), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
        }
      };
      obj[constants.CREATION_INTENT] = obj;
      obj[constants.CREATE_SERVER] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg0;
          const callback2 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer(closure_1, id, guildTemplate) {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11900), obj);
        }
      };
      obj2 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          obj = { location: "Onboarding Join Guild Modal", onClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12271), obj);
        }
      };
      obj[constants.JOIN_SERVER] = obj2;
      obj1 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg0;
          const callback2 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer(closure_1, id, guildTemplate) {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11900), obj);
        }
      };
      obj[constants.ACCEPT_INVITE] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12272), obj);
        }
      };
      const obj3 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12272), obj);
        }
      };
      obj[constants.CHANNEL_PROMPT] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          obj = {
            hasSkip: true,
            hasBack: false,
            onCancel: closure_9,
            onSuccess() {
              return closure_1_15(guildId);
            },
            guildId,
            buttonText: null
          };
          const intl = guildId(1236).intl;
          obj[5] = intl.string(guildId(1236).t["uHXB+F"]);
          return callback3(callback2(12301), obj);
        }
      };
      const obj5 = { impressionName: "Array", impressionProperties: true, fullscreen: true, ignoreKeyboard: null, headerTitle: null, headerLeft: null, render: true };
      obj5[1] = closure_18;
      obj5[4] = function headerTitle() {
        return null;
      };
      obj5[5] = function headerLeft() {
        return null;
      };
      obj5[6] = function render() {
        return callback3(callback2(12283), { isNestedNavigator: true });
      };
      obj[constants.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, []),
    onWillFocus: Keyboard.dismiss,
    headerBackTitle: null,
    initialRouteName: null
  };
  let intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["13/7kX"]);
  obj[3] = constants.GUILD_TEMPLATES;
  return jsx(NavigationStack.Navigator, {
    screens: React.useMemo(() => {
      obj = {};
      obj = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null
      };
      let obj2 = callback(5376);
      obj[4] = obj2.getHeaderCloseButton(() => {
        callback(12239).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
        obj = callback(12239);
        callback(1222).transitionTo(fallbackRoute.fallbackRoute);
        const obj2 = callback(1222);
        const result = callback2(12264).closeCreateGuildOnboardingModal();
      });
      obj[5] = function render() {
        return callback3(callback2(12266), { trigger: constants.NUF });
      };
      obj[constants.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return callback3(callback2(12268), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
        }
      };
      obj[constants.CREATION_INTENT] = obj;
      obj[constants.CREATE_SERVER] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg0;
          const callback2 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer(closure_1, id, guildTemplate) {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11900), obj);
        }
      };
      obj2 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          obj = { location: "Onboarding Join Guild Modal", onClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12271), obj);
        }
      };
      obj[constants.JOIN_SERVER] = obj2;
      obj1 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const callback = arg0;
          const callback2 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer(closure_1, id, guildTemplate) {
              const self = this;
              const apply = closure_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = callback(1236).intl;
          obj.customTitle = intl.string(callback(1236).t["5HZu07"]);
          return callback3(callback2(11900), obj);
        }
      };
      obj[constants.ACCEPT_INVITE] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12272), obj);
        }
      };
      const obj3 = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: callback2(12264).closeCreateGuildModal };
          return callback3(callback2(12272), obj);
        }
      };
      obj[constants.CHANNEL_PROMPT] = {
        impressionName: callback(503).ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
        impressionProperties: closure_18,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          obj = {
            hasSkip: true,
            hasBack: false,
            onCancel: closure_9,
            onSuccess() {
              return closure_1_15(guildId);
            },
            guildId,
            buttonText: null
          };
          const intl = guildId(1236).intl;
          obj[5] = intl.string(guildId(1236).t["uHXB+F"]);
          return callback3(callback2(12301), obj);
        }
      };
      const obj5 = { impressionName: "Array", impressionProperties: true, fullscreen: true, ignoreKeyboard: null, headerTitle: null, headerLeft: null, render: true };
      obj5[1] = closure_18;
      obj5[4] = function headerTitle() {
        return null;
      };
      obj5[5] = function headerLeft() {
        return null;
      };
      obj5[6] = function render() {
        return callback3(callback2(12283), { isNestedNavigator: true });
      };
      obj[constants.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, []),
    onWillFocus: Keyboard.dismiss,
    headerBackTitle: null,
    initialRouteName: null
  });
};