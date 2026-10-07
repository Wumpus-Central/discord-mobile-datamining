// discord_app/modules/nuf/native/components/NUFGuildTemplates.tsx
import c from "../../../../../_runtime/00576_c.js";
import router_utils from "../../../routing/router_utils.tsx";
import util from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import Navigator from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import NewUserAnalyticsUtils from "../NewUserAnalyticsUtils.tsx";
import CreateGuildModalActionCreatorsDefault from "../../../create_guild/native/CreateGuildModalActionCreators.tsx";
import GuildTemplatesDefault from "../../../create_guild/native/components/GuildTemplates.tsx";
import CreationIntentDefault from "../../../create_guild/native/components/CreationIntent.tsx";
import components_JoinServerDefault from "../../../create_guild/native/components/JoinServer.tsx";
import AcceptInviteContainerDefault from "../../../create_guild/native/components/AcceptInviteContainer.tsx";
import HubEmailConnectionModalDefault from "../../../hub/native/components/HubEmailConnectionModal.tsx";
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
let closure_16 = async function _onCreateGuild(arg0) {
  if (c4 === 2) {
    c4 = 3;
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
      c4 = 2;
      if (0 === c3) {
        if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          const obj4 = { value, done: true };
          return obj4;
        } else {
          closure_2 = tmp5;
          closure_1 = tmp2;
          closure_129_0 = closure_0;
          c3 = 1;
          c4 = 1;
          const obj5 = { value: GuildActionCreatorsDefault.transitionToGuildSync(closure_0), done: false };
          return obj5;
        }
      } else if (arg0 === 1) {
        c4 = 3;
        throw value;
      } else if (arg0 === 2) {
        c4 = 3;
        const obj = { value, done: true };
        return obj;
      } else {
        const guildProgress = closure_130_0(closure_130_2[9]).createGuildProgress(closure_129_0);
        closure_130_1(closure_130_2[10])();
        const obj6 = closure_130_0(closure_130_2[9]);
        const result = closure_130_1(closure_130_2[11]).closeCreateGuildOnboardingModal();
        const obj7 = closure_130_1(closure_130_2[11]);
        const result1 = closure_130_0(closure_130_2[12]).showInstantInviteModal(closure_129_0);
        const obj8 = closure_130_0(closure_130_2[12]);
        const obj10 = {
          flow_type: closure_130_8.GUILD_CREATE_MODAL,
          from_step: closure_130_11.CREATE_SERVER,
          to_step: "modal_closed",
        };
        closure_130_1(closure_130_2[13]).track(closure_130_7.USER_FLOW_TRANSITION, obj10);
        c4 = 3;
        return { value: "IconComponent", done: null };
      }
    } catch (tmp9) {
      c4 = tmp;
      throw tmp9;
    }
  }
};
let closure_17 = async function _onCreateServer(arg0) {
  closure_0 = arg0;
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
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "IconComponent", done: null };
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
            const obj3 = { value, done: true };
            return obj3;
          } else if (id.id !== constants.CREATE) {
            c4 = 1;
            c3 = 1;
            const obj4 = { value: onCreateGuild(guildId), done: false };
            return obj4;
          } else {
            const obj5 = { guildId };
            closure_0.push(constants2.CHANNEL_PROMPT, obj5);
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
        return { value: "IconComponent", done: null };
      } catch (tmp8) {
        c3 = tmp;
        throw tmp8;
      }
    }
  })();
};
function getScreens() {
  impressionProperties = {};
  let obj2 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft: NavigatorHeader.getHeaderCloseButton(() => {
      NewUserAnalyticsUtils.trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
      router_utils.transitionTo(fallbackRoute.fallbackRoute);
      const result = CreateGuildModalActionCreatorsDefault.closeCreateGuildOnboardingModal();
    }),
    render() {
      return jsx(GuildTemplatesDefault, { trigger: constants.NUF });
    },
  };
  impressionProperties[constants.GUILD_TEMPLATES] = obj2;
  impressionProperties[constants.CREATION_INTENT] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return jsx(CreationIntentDefault, { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
    },
  };
  const obj4 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return jsx(CreationIntentDefault, { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
    },
  };
  impressionProperties[constants.CREATE_SERVER] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const guildTemplate = arg0;
      closure_1 = arg1;
      const obj = {};
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
      const intl = guildTemplate(1126).intl;
      obj.customTitle = intl.string(guildTemplate(1126).t["5HZu07"]);
      return closure_14(closure_1(11975), obj);
    },
  };
  const obj5 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      const guildTemplate = arg0;
      closure_1 = arg1;
      const obj = {};
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
      const intl = guildTemplate(1126).intl;
      obj.customTitle = intl.string(guildTemplate(1126).t["5HZu07"]);
      return closure_14(closure_1(11975), obj);
    },
  };
  impressionProperties[constants.JOIN_SERVER] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render() {
      const obj = {
        location: "Onboarding Join Guild Modal",
        onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      };
      return jsx(components_JoinServerDefault, {
        location: "Onboarding Join Guild Modal",
        onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      });
    },
  };
  const obj6 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render() {
      const obj = {
        location: "Onboarding Join Guild Modal",
        onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      };
      return jsx(components_JoinServerDefault, {
        location: "Onboarding Join Guild Modal",
        onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      });
    },
  };
  impressionProperties[constants.ACCEPT_INVITE] = {
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
      const obj = { code: code.code, onPressClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      return jsx(AcceptInviteContainerDefault, {
        code: code.code,
        onPressClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      });
    },
  };
  const obj7 = {
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
      const obj = { code: code.code, onPressClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
      return jsx(AcceptInviteContainerDefault, {
        code: code.code,
        onPressClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal,
      });
    },
  };
  impressionProperties[constants.CHANNEL_PROMPT] = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildId) {
      guildId = guildId.guildId;
      const obj = {
        hasSkip: true,
        hasBack: false,
        onCancel,
        onSuccess() {
          return onCreateGuild(guildId);
        },
        guildId,
        buttonText: null,
      };
      const intl = guildId(1126).intl;
      obj.buttonText = intl.string(guildId(1126).t["uHXB+F"]);
      return closure_14(closure_1(12429), obj);
    },
  };
  const obj9 = {
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
      return jsx(HubEmailConnectionModalDefault, { isNestedNavigator: true });
    },
  };
  impressionProperties[constants.JOIN_STUDENT_HUB] = obj9;
  return impressionProperties;
}
const Keyboard = fn(17).Keyboard;
const Constants = fn(1085);
({ AnalyticEvents: closure_7, AnalyticsSections: closure_8, NOOP: closure_9 } = Constants);
const GuildTemplateId = fn(12371).GuildTemplateId;
const CreateGuildConstants = fn(6475);
({
  CreateGuildModalStates: closure_11,
  GuildTemplateTriggers: closure_12,
  NUXGuildTemplatesAnalytics: map1,
} = CreateGuildConstants);
const jsx = fn(21).jsx;
let impressionProperties = { impression_group: fn(1260).ImpressionGroups.GUILD_ADD_FLOW };
const ReactCompilerGating = fn(558);
const size = fn(2);
let result = size.fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      const cResult = c.c(2);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const tmp6 = getScreens();
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { screens: first, onWillFocus: Keyboard.dismiss, headerBackTitle: null, initialRouteName: null };
        const intl = util.intl;
        obj2.headerBackTitle = intl.string(util.t["13/7kX"]);
        obj2.initialRouteName = constants.GUILD_TEMPLATES;
        const tmp11 = jsx(Navigator.Navigator, {
          screens: first,
          onWillFocus: Keyboard.dismiss,
          headerBackTitle: null,
          initialRouteName: null,
        });
        cResult[1] = tmp11;
        let tmp7 = tmp11;
      } else {
        tmp7 = cResult[1];
      }
      return tmp7;
    }
  : () => {
      const obj = {
        screens: noop.useMemo(() => getScreens(), []),
        onWillFocus: Keyboard.dismiss,
        headerBackTitle: null,
        initialRouteName: null,
      };
      const intl = util.intl;
      obj.headerBackTitle = intl.string(util.t["13/7kX"]);
      obj.initialRouteName = constants.GUILD_TEMPLATES;
      return jsx(Navigator.Navigator, {
        screens: noop.useMemo(() => getScreens(), []),
        onWillFocus: Keyboard.dismiss,
        headerBackTitle: null,
        initialRouteName: null,
      });
    };
