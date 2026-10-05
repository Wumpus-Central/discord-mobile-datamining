// discord_app/modules/create_guild/native/components/CreateGuildModal.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import GuildActionCreatorsDefault from "../../../../actions/GuildActionCreators.tsx";
import Navigator2 from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import useIsWindowSmall from "../../../screen/native/useIsWindowSmall.tsx";
import CreateGuildModalActionCreatorsDefault from "../CreateGuildModalActionCreators.tsx";
import components_JoinServerDefault from "JoinServer.tsx";
import react from "../../../../../_runtime/00019_react.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import CreateGuildConstants from "../CreateGuildConstants.tsx";
import Constants from "../../../../Constants.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, defaultChannel, importDefault;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
function getScreens(arg0, initialRoute, arg2) {
  let closure_1;
  let constants2;
  let constants3;
  let constants4;
  let obj3;
  function headerTitle() {
    return null;
  }
  function render(guildId) {
    guildId = guildId.guildId;
    return jsx(closure_1(dependencyMap[17]), {
      closeOnEditInviteLink: false,
      onClose() {
        const obj = GuildActionCreatorsDefault;
        const result = obj.transitionToGuildSync(guildId);
        const obj2 = CreateGuildModalActionCreatorsDefault;
        const result1 = obj2.closeCreateGuildModal();
        if (null != closure_1) {
          closure_1(guildId);
        }
      },
    });
  }
  const headerTitle2 = function headerTitle() {
    return null;
  };
  function headerLeft() {
    return null;
  }
  const render2 = function render(code) {
    closure_1(dependencyMap[20]);
    return <tmp code={code.code} onPressClose={closure_1(dependencyMap[10]).closeCreateGuildModal} />;
  };
  _require = initialRoute;
  importDefault = arg2;
  impressionProperties = {};
  let obj2 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_LANDING,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    headerLeft: obj3.getHeaderCloseButton(CreateGuildModalActionCreatorsDefault.closeCreateGuildModal),
    render() {
      return jsx(closure_1(dependencyMap[13]), { trigger: constants2.IN_APP });
    },
  };
  const GUILD_TEMPLATES = constants.GUILD_TEMPLATES;
  obj3 = require("NavigatorHeader");
  impressionProperties[GUILD_TEMPLATES] = obj2;
  let obj4 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_INTENT_SELECTION,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(guildTemplate) {
      return jsx(closure_1(dependencyMap[14]), {
        guildTemplate: guildTemplate.guildTemplate,
        trigger: constants2.IN_APP,
      });
    },
  };
  impressionProperties[constants.CREATION_INTENT] = obj4;
  const obj5 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_CUSTOMIZE,
    impressionProperties,
    fullscreen: true,
    headerTitle() {
      return null;
    },
    render(arg0, arg1) {
      let closure_0;
      let intl;
      initialRoute = arg1;
      let obj = {
        onCreate(guild) {
          const id = guild.guild.id;
          const obj = closure_0(dependencyMap[6]);
          const guildProgress = obj.createGuildProgress(id);
          defaultChannel = defaultChannel.getDefaultChannel(id);
          if (null != defaultChannel) {
            const obj2 = closure_1(dependencyMap[7]);
            obj2.init(id, defaultChannel.id, { location: "Guild Create Flow" });
            const obj3 = { guildId: id };
            closure_0.push(constants.GUILD_INVITE, obj3);
            const obj7 = { flow_type: constants4.GUILD_CREATE_MODAL, from_step: null, to_step: null };
            ({ CREATE_SERVER: obj5.from_step, GUILD_INVITE: obj5.to_step } = constants);
            const obj4 = closure_1(dependencyMap[8]);
            obj4.track(constants3.USER_FLOW_TRANSITION, obj7);
          }
        },
        customTitle: intl.string(initialRoute(closure_2[16]).t["5HZu07"]),
      };
      const tmp = closure_1(closure_2[15]);
      const merged = Object.assign(arg0);
      intl = initialRoute(closure_2[16]).intl;
      return closure_10(tmp, obj);
    },
  };
  impressionProperties[constants.CREATE_SERVER] = obj5;
  impressionProperties[constants.GUILD_INVITE] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle,
    render,
  };
  ({
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_GUILD_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle,
    render,
  });
  let obj7 = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_JOIN,
    impressionProperties,
    fullscreen: true,
    headerTitle: arg0
      ? () => {
          const GenericHeaderTitle = initialRoute(dependencyMap[18]).GenericHeaderTitle;
          const intl = initialRoute(dependencyMap[16]).intl;
          return <GenericHeaderTitle title={intl.string(initialRoute(dependencyMap[16]).t.jlfuFW)} />;
        }
      : () => null,
    render(arg0) {
      components_JoinServerDefault;
      const merged = Object.assign(arg0);
      return <tmp initialRoute={initialRoute} onClose={CreateGuildModalActionCreatorsDefault.closeCreateGuildModal} />;
    },
  };
  impressionProperties[constants.JOIN_SERVER] = obj7;
  impressionProperties[constants.ACCEPT_INVITE] = {
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle: headerTitle2,
    headerLeft,
    render: render2,
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
      return jsx(closure_1(dependencyMap[21]), { isNestedNavigator: true });
    },
  };
  impressionProperties[constants.JOIN_STUDENT_HUB] = obj9;
  ({
    impressionName: require("discord_common/AnalyticsUtils").ImpressionNames.GUILD_ADD_ACCEPT_INVITE,
    impressionProperties,
    fullscreen: true,
    headerTitle: headerTitle2,
    headerLeft,
    render: render2,
  });
  return impressionProperties;
}
const Keyboard = react_native.Keyboard;
({ CreateGuildModalStates: metroRequire, GuildTemplateTriggers: metroImportDefault } = CreateGuildConstants);
({ AnalyticEvents: metroImportAll, AnalyticsSections: c9 } = Constants);
const jsx = Fragment.jsx;
let impressionProperties = { impression_group: discord_common_AnalyticsUtils.ImpressionGroups.GUILD_ADD_FLOW };
const tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let channel;
      let first;
      let initialState;
      let obj4;
      let obj6;
      let onSuccess;
      const obj = react2;
      const cResult = obj.c(11);
      ({ channel, initialState, onSuccess } = arg0);
      if (initialState !== metroRequire.JOIN_SERVER) {
        let tmp7;
        if (cResult[1] !== channel) {
          let items1;
          if (null == channel) {
            const items = [{ name: metroRequire.GUILD_TEMPLATES }];
            items1 = items;
            const obj2 = { name: metroRequire.GUILD_TEMPLATES };
          } else {
            const obj3 = { name: metroRequire.GUILD_INVITE, param: obj4 };
            items1 = [obj3];
            obj4 = { channel, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
          }
          cResult[1] = channel;
          cResult[2] = items1;
          tmp7 = items1;
        } else {
          tmp7 = cResult[2];
        }
        first = tmp7;
      } else {
        const _Symbol = Symbol;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { name: metroRequire.JOIN_SERVER, param: obj6 };
          const items2 = [obj5];
          obj6 = { initialRoute: metroRequire.JOIN_SERVER };
          cResult[0] = items2;
          first = items2;
        } else {
          first = cResult[0];
        }
      }
      const tmpResult = useIsWindowSmall;
      const isWindowSmall = tmpResult.useIsWindowSmall();
      if (cResult[3] === initialState) {
        if (cResult[4] === isWindowSmall) {
          let tmp11;
          let tmp14;
          if (cResult[5] === onSuccess) {
            tmp11 = cResult[6];
          }
          const _Symbol2 = Symbol;
          if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
            const intl = intl2.intl;
            const stringResult = intl.string(intl2.t["13/7kX"]);
            cResult[7] = stringResult;
            tmp14 = stringResult;
          } else {
            tmp14 = cResult[7];
          }
          if (cResult[8] === first) {
            let tmp16;
            if (cResult[9] === tmp11) {
              tmp16 = cResult[10];
            }
            return tmp16;
          }
          const tmp19 = jsx(Navigator2.Navigator, {
            screens: tmp11,
            initialRouteStack: first,
            headerBackTitle: tmp14,
            onWillFocus: Keyboard.dismiss,
          });
          cResult[8] = first;
          cResult[9] = tmp11;
          cResult[10] = tmp19;
          tmp16 = tmp19;
        }
      }
      const tmp12 = getScreens(isWindowSmall, initialState, onSuccess);
      cResult[3] = initialState;
      cResult[4] = isWindowSmall;
      cResult[5] = onSuccess;
      cResult[6] = tmp12;
      tmp11 = tmp12;
    }
  : (channel) => {
      channel = channel.channel;
      const initialState = channel.initialState;
      const onSuccess = channel.onSuccess;
      let isWindowSmall;
      let items = [channel, initialState];
      const memo = isWindowSmall.useMemo(() => {
        let items2;
        let obj3;
        let obj5;
        if (initialState === metroRequire.JOIN_SERVER) {
          const obj2 = { name: metroRequire.JOIN_SERVER, param: obj3 };
          const items = [obj2];
          items2 = items;
          obj3 = { initialRoute: metroRequire.JOIN_SERVER };
        } else if (null == channel) {
          const items1 = [{ name: metroRequire.GUILD_TEMPLATES }];
          items2 = items1;
          const obj4 = { name: metroRequire.GUILD_TEMPLATES };
        } else {
          const obj = { name: metroRequire.GUILD_INVITE, param: obj5 };
          items2 = [obj];
          obj5 = { channel: tmp2, onClose: CreateGuildModalActionCreatorsDefault.closeCreateGuildModal };
        }
        return items2;
      }, items);
      let obj = channel(onSuccess[24]);
      isWindowSmall = obj.useIsWindowSmall();
      let items1 = [initialState, isWindowSmall, onSuccess];
      const Navigator = channel(onSuccess[25]).Navigator;
      const intl = channel(onSuccess[16]).intl;
      return (
        <Navigator
          screens={isWindowSmall.useMemo(() => getScreens(isWindowSmall, initialState, onSuccess), items1)}
          initialRouteStack={memo}
          headerBackTitle={intl.string(channel(onSuccess[16]).t["13/7kX"])}
          onWillFocus={Keyboard.dismiss}
        />
      );
    };
let result = size.fileFinishedImporting("modules/create_guild/native/components/CreateGuildModal.tsx");

export default tmp4;
