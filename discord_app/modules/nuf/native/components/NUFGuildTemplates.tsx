// discord_app/modules/nuf/native/components/NUFGuildTemplates.tsx
import GuildTemplateId from "GuildTemplateId";
import CreationIntent from "CreationIntent";
import { Keyboard } from "transitionTo";
import initialize from "initialize";
import ME from "ME";
import { GuildTemplateId } from "GuildTemplateId";
import NUXGuildTemplatesAnalytics from "NUXGuildTemplatesAnalytics";
import { jsx } from "getSystemLocale";

let c9;
let closure_12;
let error;
let map1;
let metroImportAll;
let unpackModuleId;
const require = arg1;
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
    let closure_0 = arg0;
    let c3 = 0;
    let c4 = 0;
    return (function*(arg0) {
      if (c4 === 2) {
        c4 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              const dependencyMap = tmp5;
              const callback2 = tmp2;
              let obj1 = outer1_1(outer1_2[8]);
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
            const guildProgress = callback(11747).createGuildProgress(callback);
            callback2(9469)();
            const obj6 = callback(11747);
            const result = callback2(11975).closeCreateGuildOnboardingModal();
            const obj7 = callback2(11975);
            const result1 = callback(12011).showInstantInviteModal(callback);
            const obj8 = callback(12011);
            const obj2 = { flow_type: null, from_step: null, to_step: "modal_closed" };
            obj2[0] = constants2.GUILD_CREATE_MODAL;
            obj2[1] = constants3.CREATE_SERVER;
            callback2(698).track(constants.USER_FLOW_TRANSITION, obj2);
            c4 = 3;
            return { value: "HermesInternal", done: null };
          }
        } catch (tmp9) {
          c4 = tmp;
          throw tmp9;
        }
      }
    })();
  });
  const _onCreateGuild = tmp;
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
    let closure_0 = arg0;
    let closure_1 = arg1;
    let closure_2 = arg2;
    let c4 = 0;
    let c3 = 0;
    return (function*(arg0, arg1, arg2) {
      if (c3 === 2) {
        c3 = 3;
        HermesBuiltin.throwTypeError();
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw arg1;
        } else if (arg0 === 2) {
          let obj = { value: null, done: true };
          obj[0] = arg1;
          return obj;
        } else {
          return { value: "HermesInternal", done: null };
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
              if (id.id !== outer1_10.CREATE) {
                c4 = 1;
                c3 = 1;
                const obj1 = { value: null, done: false };
                obj1[0] = outer1_15(tmp14);
                return obj1;
              } else {
                const obj2 = { guildId: null };
                obj2[0] = tmp14;
                arr = arr.push(outer1_11.CHANNEL_PROMPT, obj2);
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
          return { value: "HermesInternal", done: null };
        } catch (tmp8) {
          c3 = tmp;
          throw tmp8;
        }
      }
    })();
  });
  const _onCreateServer = tmp;
  const apply = tmp.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
({ AnalyticEvents: error, AnalyticsSections: metroImportAll, NOOP: c9 } = ME);
({ CreateGuildModalStates: unpackModuleId, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: map1 } = NUXGuildTemplatesAnalytics);
let obj = { impression_group: require("encodeProperties").ImpressionGroups.GUILD_ADD_FLOW };
let result = require("get ActivityIndicator").fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  let obj = { screens: null, onWillFocus: null, headerBackTitle: null, initialRouteName: null };
  obj[0] = React.useMemo(() => {
    let obj = {};
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
    let obj2 = callback(5238);
    obj[4] = obj2.getHeaderCloseButton(() => {
      callback(11950).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
      const obj = callback(11950);
      callback(1222).transitionTo(fallbackRoute.fallbackRoute);
      const obj2 = callback(1222);
      const result = callback2(11975).closeCreateGuildOnboardingModal();
    });
    obj[5] = function render() {
      return callback3(callback2(11977), { trigger: constants.NUF });
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
        return callback3(callback2(11979), { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
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
        const obj = {};
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
        return callback3(callback2(11617), obj);
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
        const obj = { location: "Onboarding Join Guild Modal", onClose: null };
        obj[1] = callback2(11975).closeCreateGuildModal;
        return callback3(callback2(11982), obj);
      }
    };
    obj[constants.JOIN_SERVER] = obj2;
    const obj1 = {
      impressionName: callback(503).ImpressionNames.GUILD_ADD_CUSTOMIZE,
      impressionProperties: closure_18,
      fullscreen: true,
      headerTitle() {
        return null;
      },
      render(arg0, arg1) {
        const callback = arg0;
        const callback2 = arg1;
        const obj = {};
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
        return callback3(callback2(11617), obj);
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
        const obj = { code: code.code, onPressClose: null };
        obj[1] = callback2(11975).closeCreateGuildModal;
        return callback3(callback2(11983), obj);
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
        const obj = { code: code.code, onPressClose: null };
        obj[1] = callback2(11975).closeCreateGuildModal;
        return callback3(callback2(11983), obj);
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
        const obj = {
          hasSkip: true,
          hasBack: false,
          onCancel: closure_9,
          onSuccess() {
            return outer1_15(guildId);
          },
          guildId,
          buttonText: null
        };
        const intl = guildId(1236).intl;
        obj[5] = intl.string(guildId(1236).t["uHXB+F"]);
        return callback3(callback2(12012), obj);
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
      return callback3(callback2(11994), { isNestedNavigator: true });
    };
    obj[constants.JOIN_STUDENT_HUB] = obj5;
    return obj;
  }, []);
  obj[1] = Keyboard.dismiss;
  let intl = require(1236) /* getSystemLocale */.intl;
  obj[2] = intl.string(require(1236) /* getSystemLocale */.t["13/7kX"]);
  obj[3] = constants.GUILD_TEMPLATES;
  return jsx(require(5665) /* NavigationStack */.Navigator, { screens: null, onWillFocus: null, headerBackTitle: null, initialRouteName: null });
};