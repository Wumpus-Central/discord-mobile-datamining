// discord_app/modules/nuf/native/components/NUFGuildTemplates.tsx
import util from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import DefaultRouteStore from "../../../../stores/DefaultRouteStore.tsx";

require = fn;
function onCreateGuild() {
  const self = this;
  const apply = closure_16.apply;
  if (typeof apply === "unknown") {
    let applyArgumentsResult = HermesBuiltin.applyArguments(self);
  } else {
    applyArgumentsResult = apply(self, arguments);
  }
  return applyArgumentsResult;
}
let closure_16 = async function _onCreateGuild(arg0, value) {
  if (c4 === 2) {
    c4 = 3;
    throw new TypeError("Generator functions may not be called on executing generators");
  } else if (tmp4 === 3) {
    if (arg0 === 1) {
      throw value;
    } else if (arg0 === 2) {
      obj = { value, done: true };
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
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          let obj1 = GuildActionCreatorsDefault;
          c3 = 1;
          c4 = 1;
          obj1 = { value: null, done: false };
          obj1.value = obj1.transitionToGuildSync(closure_0);
          return obj1;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        obj = { value, done: true };
        return obj;
      } else {
        const guildProgress = closure_130_0(closure_130_2[9]).createGuildProgress(closure_129_0);
        closure_130_1(closure_130_2[10])();
        const obj6 = closure_130_0(closure_130_2[9]);
        const result = closure_130_1(closure_130_2[11]).closeCreateGuildOnboardingModal();
        const obj7 = closure_130_1(closure_130_2[11]);
        const result1 = closure_130_0(closure_130_2[12]).showInstantInviteModal(closure_129_0);
        const obj8 = closure_130_0(closure_130_2[12]);
        const obj2 = {
          flow_type: closure_130_8.GUILD_CREATE_MODAL,
          from_step: closure_130_11.CREATE_SERVER,
          to_step: "modal_closed",
        };
        closure_130_1(closure_130_2[13]).track(closure_130_7.USER_FLOW_TRANSITION, obj2);
        c4 = 3;
        return { value: "HermesInternal", done: null };
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
let closure_17 = async function _onCreateServer(arg0, arg1, arg2) {
  closure_0 = arg0;
  closure_1 = arg1;
  let id = arg2;
  c4 = 0;
  c3 = 0;
  return (async (arg0, value, arg2) => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp3 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        obj = { value, done: true };
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
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            obj = { value, done: true };
            return obj;
          } else {
            let arr = closure_0;
            if (id.id !== constants.CREATE) {
              c4 = 1;
              c3 = 1;
              const obj1 = { value: onCreateGuild(tmp13), done: false };
              return obj1;
            } else {
              const obj2 = { guildId: tmp13 };
              arr = arr.push(constants2.CHANNEL_PROMPT, obj2);
            }
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          obj = { value, done: true };
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
};
const Keyboard = fn(17).Keyboard;
const Constants = fn(1074);
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, NOOP: closure_9 } = Constants);
const GuildTemplateId = fn(12707).GuildTemplateId;
const CreateGuildConstants = fn(6980);
({
  CreateGuildModalStates: closure_11,
  GuildTemplateTriggers: closure_12,
  NUXGuildTemplatesAnalytics: map1,
} = CreateGuildConstants);
const jsx = fn(21).jsx;
let obj = { impression_group: fn(1250).ImpressionGroups.GUILD_ADD_FLOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default function NUFGuildTemplates() {
  obj = {
    screens: noop.useMemo(() => {
      obj = {};
      obj = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null,
      };
      let obj2 = NavigatorHeader;
      obj.headerLeft = obj2.getHeaderCloseButton(() => {
        closure_1_0(12683).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
        obj = closure_1_0(12683);
        closure_1_0(1100).transitionTo(fallbackRoute.fallbackRoute);
        const obj2 = closure_1_0(1100);
        const result = closure_1_1(12708).closeCreateGuildOnboardingModal();
      });
      obj.render = function render() {
        return closure_1_14(closure_1_1(12710), { trigger: constants.NUF });
      };
      obj[constants.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return closure_1_14(closure_1_1(12712), {
            guildTemplate: guildTemplate.guildTemplate,
            trigger: constants.NUF,
          });
        },
      };
      obj[constants.CREATION_INTENT] = obj;
      obj[constants.CREATE_SERVER] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const guildTemplate = arg0;
          closure_1 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer() {
              const self = this;
              const apply = closure_1_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = guildTemplate(1114).intl;
          obj.customTitle = intl.string(guildTemplate(1114).t["5HZu07"]);
          return closure_14(closure_1(12333), obj);
        },
      };
      obj2 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          obj = { location: "Onboarding Join Guild Modal", onClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12715), obj);
        },
      };
      obj[constants.JOIN_SERVER] = obj2;
      const obj1 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const guildTemplate = arg0;
          closure_1 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer() {
              const self = this;
              const apply = closure_1_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = guildTemplate(1114).intl;
          obj.customTitle = intl.string(guildTemplate(1114).t["5HZu07"]);
          return closure_14(closure_1(12333), obj);
        },
      };
      obj[constants.ACCEPT_INVITE] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12716), obj);
        },
      };
      const obj3 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12716), obj);
        },
      };
      obj[constants.CHANNEL_PROMPT] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          obj = {
            hasSkip: true,
            hasBack: false,
            onCancel,
            onSuccess() {
              return closure_2_15(guildId);
            },
            guildId,
            buttonText: null,
          };
          const intl = guildId(1114).intl;
          obj.buttonText = intl.string(guildId(1114).t["uHXB+F"]);
          return closure_14(closure_1(12745), obj);
        },
      };
      const obj5 = {
        impressionName: "Array",
        impressionProperties,
        fullscreen: true,
        ignoreKeyboard: null,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render() {
          return closure_1_14(closure_1_1(12727), { isNestedNavigator: true });
        },
      };
      obj[constants.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, []),
    onWillFocus: Keyboard.dismiss,
    headerBackTitle: null,
    initialRouteName: null,
  };
  let intl = util.intl;
  obj.headerBackTitle = intl.string(util.t["13/7kX"]);
  obj.initialRouteName = constants.GUILD_TEMPLATES;
  return jsx(Navigator.Navigator, {
    screens: noop.useMemo(() => {
      obj = {};
      obj = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft: null,
        render: null,
      };
      let obj2 = NavigatorHeader;
      obj.headerLeft = obj2.getHeaderCloseButton(() => {
        closure_1_0(12683).trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
        obj = closure_1_0(12683);
        closure_1_0(1100).transitionTo(fallbackRoute.fallbackRoute);
        const obj2 = closure_1_0(1100);
        const result = closure_1_1(12708).closeCreateGuildOnboardingModal();
      });
      obj.render = function render() {
        return closure_1_14(closure_1_1(12710), { trigger: constants.NUF });
      };
      obj[constants.GUILD_TEMPLATES] = obj;
      obj = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildTemplate) {
          return closure_1_14(closure_1_1(12712), {
            guildTemplate: guildTemplate.guildTemplate,
            trigger: constants.NUF,
          });
        },
      };
      obj[constants.CREATION_INTENT] = obj;
      obj[constants.CREATE_SERVER] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const guildTemplate = arg0;
          closure_1 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer() {
              const self = this;
              const apply = closure_1_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = guildTemplate(1114).intl;
          obj.customTitle = intl.string(guildTemplate(1114).t["5HZu07"]);
          return closure_14(closure_1(12333), obj);
        },
      };
      obj2 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render() {
          obj = { location: "Onboarding Join Guild Modal", onClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12715), obj);
        },
      };
      obj[constants.JOIN_SERVER] = obj2;
      const obj1 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(arg0, arg1) {
          const guildTemplate = arg0;
          closure_1 = arg1;
          obj = {};
          const merged = Object.assign(arg0);
          obj.onCreate = function onCreate(guild) {
            return (function onCreateServer() {
              const self = this;
              const apply = closure_1_17.apply;
              if (typeof apply === "unknown") {
                let applyArgumentsResult = HermesBuiltin.applyArguments(self);
              } else {
                applyArgumentsResult = apply(self, arguments);
              }
              return applyArgumentsResult;
            })(closure_1, guild.guild.id, guildTemplate.guildTemplate);
          };
          const intl = guildTemplate(1114).intl;
          obj.customTitle = intl.string(guildTemplate(1114).t["5HZu07"]);
          return closure_14(closure_1(12333), obj);
        },
      };
      obj[constants.ACCEPT_INVITE] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12716), obj);
        },
      };
      const obj3 = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render(code) {
          obj = { code: code.code, onPressClose: closure_1_1(12708).closeCreateGuildModal };
          return closure_1_14(closure_1_1(12716), obj);
        },
      };
      obj[constants.CHANNEL_PROMPT] = {
        impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
        impressionProperties,
        fullscreen: true,
        headerTitle() {
          return null;
        },
        render(guildId) {
          guildId = guildId.guildId;
          obj = {
            hasSkip: true,
            hasBack: false,
            onCancel,
            onSuccess() {
              return closure_2_15(guildId);
            },
            guildId,
            buttonText: null,
          };
          const intl = guildId(1114).intl;
          obj.buttonText = intl.string(guildId(1114).t["uHXB+F"]);
          return closure_14(closure_1(12745), obj);
        },
      };
      const obj5 = {
        impressionName: "Array",
        impressionProperties,
        fullscreen: true,
        ignoreKeyboard: null,
        headerTitle() {
          return null;
        },
        headerLeft() {
          return null;
        },
        render() {
          return closure_1_14(closure_1_1(12727), { isNestedNavigator: true });
        },
      };
      obj[constants.JOIN_STUDENT_HUB] = obj5;
      return obj;
    }, []),
    onWillFocus: Keyboard.dismiss,
    headerBackTitle: null,
    initialRouteName: null,
  });
}
