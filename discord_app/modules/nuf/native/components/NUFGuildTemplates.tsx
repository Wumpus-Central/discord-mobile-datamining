// === Module 12370: NUFGuildTemplates ===

// Module 12370 (NUFGuildTemplates)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import router_utils from "router_utils" /* 1112 */;
import intl2 from "intl" /* 1126 */;
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1260 */;
import GuildActionCreatorsDefault from "GuildActionCreators" /* 5712 */;
import NavigatorHeader from "NavigatorHeader" /* 6017 */;
import Navigator2 from "Navigator" /* 6503 */;
import NewUserAnalyticsUtils from "NewUserAnalyticsUtils" /* 12347 */;
import create_guild_CreateGuildConstants from "create_guild/CreateGuildConstants" /* 12371 */;
import CreateGuildModalActionCreatorsDefault from "CreateGuildModalActionCreators" /* 12372 */;
import GuildTemplatesDefault from "GuildTemplates" /* 12374 */;
import CreationIntentDefault from "CreationIntent" /* 12389 */;
import components_JoinServerDefault from "components/JoinServer" /* 12396 */;
import AcceptInviteContainerDefault from "AcceptInviteContainer" /* 12397 */;
import HubEmailConnectionModalDefault from "HubEmailConnectionModal" /* 12409 */;
import _asyncToGenerator from "_asyncToGenerator" /* 5 */;
import react from "react" /* 19 */;
import DefaultRouteStore from "DefaultRouteStore" /* 4709 */;
import Constants from "Constants" /* 1085 */;
import CreateGuildConstants from "CreateGuildConstants" /* 6475 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let c9;
let closure_12;
let map1;
let metroImportAll;
let metroImportDefault;
let unpackModuleId;
function onCreateGuild() {
  return obj(...arguments);
}
let obj = function _onCreateGuild() {
  obj = _asyncToGenerator(async (arg0) => {
    let obj2;
    let closure_0 = arg0;
    if (c4 === 2) {
      c4 = 3;
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
            let closure_2 = tmp4;
            let closure_1 = tmp;
            c3 = 1;
            c4 = 1;
            const obj5 = { value: obj2.transitionToGuildSync(closure_0), done: false };
            obj2 = GuildActionCreatorsDefault;
            return obj5;
          }
        } else if (arg0 === 1) {
          c4 = 3;
          throw value;
        } else if (arg0 === 2) {
          c4 = 3;
          obj = { value, done: true };
          return obj;
        } else {
          const obj6 = closure_130_0(closure_130_2[9]);
          const guildProgress = obj6.createGuildProgress(closure_0);
          closure_130_1(closure_130_2[10])();
          const obj7 = closure_130_1(closure_130_2[11]);
          const result = obj7.closeCreateGuildOnboardingModal();
          const obj8 = closure_130_0(closure_130_2[12]);
          const result1 = obj8.showInstantInviteModal(closure_0);
          const obj10 = { flow_type: closure_130_8.GUILD_CREATE_MODAL, from_step: closure_130_11.CREATE_SERVER, to_step: "modal_closed" };
          const obj9 = closure_130_1(closure_130_2[13]);
          obj9.track(closure_130_7.USER_FLOW_TRANSITION, obj10);
          c4 = 3;
          return { value: "IconComponent", done: null };
        }
      } catch (tmp8) {
        c4 = 3;
        throw tmp8;
      }
    }
  });
  return obj(...arguments);
};
obj = function _onCreateServer() {
  let constants2;
  obj = _asyncToGenerator(async (arg0, guildId, arg2) => {
    let closure_0 = arg0;
    const id = arg2;
    let c4 = 0;
    let c3 = 0;
    return (async (arg0, value, arg2) => {
      if (c3 === 2) {
        c3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp2 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          return { value, done: true };
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
              return { value, done: true };
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
            return { value, done: true };
          }
          c3 = 3;
          return { value: "IconComponent", done: null };
        } catch (tmp7) {
          c3 = 3;
          throw tmp7;
        }
      }
    })();
  });
  return obj(...arguments);
};
function getScreens() {
  let constants2;
  let fallbackRoute;
  let obj3;
  let onCancel;
  function headerTitle() {
    return null;
  }
  function render(guildTemplate) {
    return jsx(CreationIntentDefault, { guildTemplate: guildTemplate.guildTemplate, trigger: constants.NUF });
  }
  const headerTitle2 = function headerTitle() {
    return null;
  };
  const render2 = function render(arg0, arg1) {
    let intl;
    const guildTemplate = arg0;
    let closure_1 = arg1;
    obj = {
      onCreate(guild) {
        function onCreateServer() {
          return closure_1_17(...arguments);
        }
        return onCreateServer(closure_1, guild.guild.id, guildTemplate.guildTemplate);
      },
      customTitle: intl.string(guildTemplate(closure_2[21]).t["5HZu07"])
    };
    const tmp = closure_1(closure_2[20]);
    const merged = Object.assign(arg0);
    intl = guildTemplate(closure_2[21]).intl;
    return closure_14(tmp, obj);
  };
  const headerTitle3 = function headerTitle() {
    return null;
  };
  const render3 = function render() {
    components_JoinServerDefault;
    return <tmp location="Onboarding Join Guild Modal" onClose={CreateGuildModalActionCreatorsDefault.closeCreateGuildModal} />;
  };
  const headerTitle4 = function headerTitle() {
    return null;
  };
  function headerLeft() {
    return null;
  }
  const render4 = function render(code) {
    AcceptInviteContainerDefault;
    return <tmp code={code.code} onPressClose={CreateGuildModalActionCreatorsDefault.closeCreateGuildModal} />;
  };
  const headerTitle5 = function headerTitle() {
    return null;
  };
  const render5 = function render(guildId) {
    let intl;
    guildId = guildId.guildId;
    obj = {
      hasSkip: true,
      hasBack: false,
      onCancel,
      onSuccess() {
        return onCreateGuild(guildId);
      },
      guildId,
      buttonText: intl.string(guildId(closure_2[21]).t["uHXB+F"])
    };
    const tmp = closure_1(closure_2[24]);
    intl = guildId(closure_2[21]).intl;
    return closure_14(tmp, obj);
  };
  obj = {};
  let obj2 = {
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties: obj,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft: obj3.getHeaderCloseButton(() => {
      obj = NewUserAnalyticsUtils;
      obj.trackNUFStep(constants2.STEP_GUILD_TEMPLATE, constants2.STEP_FRIEND_LIST, { skip: true });
      const obj2 = router_utils;
      obj2.transitionTo(fallbackRoute.fallbackRoute);
      const obj3 = CreateGuildModalActionCreatorsDefault;
      const result = obj3.closeCreateGuildOnboardingModal();
    }),
    render() {
      return jsx(GuildTemplatesDefault, { trigger: constants.NUF });
    }
  };
  const GUILD_TEMPLATES = unpackModuleId.GUILD_TEMPLATES;
  obj3 = NavigatorHeader;
  obj[GUILD_TEMPLATES] = obj2;
  obj[unpackModuleId.CREATION_INTENT] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION, impressionProperties: obj, fullscreen: true, headerTitle, render };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_INTENT_SELECTION, impressionProperties: obj, fullscreen: true, headerTitle, render });
  obj[unpackModuleId.CREATE_SERVER] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle2, render: render2 };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CUSTOMIZE, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle2, render: render2 });
  obj[unpackModuleId.JOIN_SERVER] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle3, render: render3 };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_JOIN, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle3, render: render3 });
  obj[unpackModuleId.ACCEPT_INVITE] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle4, headerLeft, render: render4 };
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_ACCEPT_INVITE, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle4, headerLeft, render: render4 });
  obj[unpackModuleId.CHANNEL_PROMPT] = { impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle5, render: render5 };
  const obj9 = {
    impressionName: "Array",
    impressionProperties: obj,
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
    }
  };
  obj[unpackModuleId.JOIN_STUDENT_HUB] = obj9;
  ({ impressionName: discord_common_AnalyticsUtils.ImpressionNames.GUILD_ADD_CHANNEL_PROMPT, impressionProperties: obj, fullscreen: true, headerTitle: headerTitle5, render: render5 });
  return obj;
}
const Keyboard = react_native.Keyboard;
({ AnalyticEvents: metroImportDefault, AnalyticsSections: metroImportAll, NOOP: c9 } = Constants);
const GuildTemplateId = create_guild_CreateGuildConstants.GuildTemplateId;
({ CreateGuildModalStates: unpackModuleId, GuildTemplateTriggers: closure_12, NUXGuildTemplatesAnalytics: map1 } = CreateGuildConstants);
const jsx = Fragment.jsx;
obj = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_ADD_FLOW };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let tmp7;
  obj = react2;
  const cResult = obj.c(2);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const tmp6 = getScreens();
    cResult[0] = tmp6;
    first = tmp6;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const Navigator = Navigator2.Navigator;
    const intl = intl2.intl;
    const tmp11 = <Navigator screens={first} onWillFocus={Keyboard.dismiss} headerBackTitle={intl.string(intl2.t["13/7kX"])} initialRouteName={unpackModuleId.GUILD_TEMPLATES} />;
    cResult[1] = tmp11;
    tmp7 = tmp11;
  } else {
    tmp7 = cResult[1];
  }
  return tmp7;
}) : (() => {
  const Navigator = Navigator2.Navigator;
  const intl = intl2.intl;
  return <Navigator screens={react.useMemo(() => getScreens(), [])} onWillFocus={Keyboard.dismiss} headerBackTitle={intl.string(intl2.t["13/7kX"])} initialRouteName={unpackModuleId.GUILD_TEMPLATES} />;
});
let result = size.fileFinishedImporting("modules/nuf/native/components/NUFGuildTemplates.tsx");

export default tmp4;