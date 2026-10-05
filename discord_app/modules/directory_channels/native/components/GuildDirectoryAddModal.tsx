// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import directory_channels_GuildDirectoryConstants from "../GuildDirectoryConstants.tsx";
import GuildDirectoryCreateOrAddDefault from "GuildDirectoryCreateOrAdd.tsx";
import GuildDirectoryCreateOrAddDescriptionDefault from "GuildDirectoryCreateOrAddDescription.tsx";
import GuildDirectoryTemplatesDefault from "GuildDirectoryTemplates.tsx";
import CreateGuildContainerDefault from "../../../create_guild/native/components/CreateGuildContainer.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, children;

let obj2;
function getScreens() {
  let obj3;
  function headerTitle() {
    return null;
  }
  function render(arg0) {
    GuildDirectoryCreateOrAddDescriptionDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  }
  const headerTitle2 = function headerTitle() {
    return null;
  };
  const render2 = function render(arg0) {
    GuildDirectoryTemplatesDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  };
  const headerTitle3 = function headerTitle() {
    return null;
  };
  const render3 = function render(arg0) {
    CreateGuildContainerDefault;
    const merged = Object.assign(arg0);
    return <tmp />;
  };
  const obj = {};
  const CREATE_OR_ADD = GuildDirectoryCreate.CREATE_OR_ADD;
  const obj2 = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
    headerLeft: obj3.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close),
    headerTitle() {
      return null;
    },
    render(arg0) {
      GuildDirectoryCreateOrAddDefault;
      const merged = Object.assign(arg0);
      return <tmp />;
    },
  };
  obj[CREATE_OR_ADD] = obj2;
  obj3 = NavigatorHeader;
  obj[GuildDirectoryCreate.DESCRIPTION] = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    headerTitle,
    render,
  };
  ({
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    headerTitle,
    render,
  });
  obj[GuildDirectoryCreate.TEMPLATES] = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
    headerTitle: headerTitle2,
    render: render2,
  };
  ({
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
    headerTitle: headerTitle2,
    render: render2,
  });
  obj[GuildDirectoryCreate.CREATE] = {
    headerTitle: headerTitle3,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    render: render3,
  };
  ({
    headerTitle: headerTitle3,
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    render: render3,
  });
  return obj;
}
const GuildDirectoryCreate = directory_channels_GuildDirectoryConstants.GuildDirectoryCreate;
const jsx = Fragment.jsx;
let obj = { safeArea: obj2 };
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_5 = createStyles.createStyles(obj);
let ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const obj = react2;
      const cResult = obj.c(3);
      children = children.children;
      const tmp4 = closure_5();
      if (cResult[0] === children) {
        let tmp5;
        if (cResult[1] === tmp4.safeArea) {
          tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: tmp4.safeArea, children });
      cResult[0] = children;
      cResult[1] = tmp4.safeArea;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (children) => {
      children = children.children;
      return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children });
    };
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let initialStack;
      let screens;
      let tmp4;
      let tmp6;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(6);
      if (cResult[0] !== arg0) {
        const fn = function l() {
          let obj2;
          const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: obj2 };
          obj2 = {};
          const merged = Object.assign(closure_0);
          const items = [obj];
          const obj3 = { screens: getScreens(), initialStack: items };
          return obj3;
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      ({ screens, initialStack } = useInitialValueDefault(tmp4));
      useInitialValueDefault(tmp4);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(require("intl").t["13/7kX"]);
        cResult[2] = stringResult;
        tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === initialStack) {
        let tmp8;
        if (cResult[4] === screens) {
          tmp8 = cResult[5];
        }
        return tmp8;
      }
      const tmp9 = jsx(require("Navigator").Navigator, {
        screens,
        initialRouteStack: initialStack,
        headerBackTitle: tmp6,
      });
      cResult[3] = initialStack;
      cResult[4] = screens;
      cResult[5] = tmp9;
      tmp8 = tmp9;
    }
  : (arg0) => {
      let closure_0;
      let initialStack;
      let screens;
      const f109815 = () => {
        let obj2;
        const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: obj2 };
        obj2 = {};
        const merged = Object.assign(closure_0);
        const items = [obj];
        const obj3 = { screens: getScreens(), initialStack: items };
        return obj3;
      };
      _require = arg0;
      ({ screens, initialStack } = useInitialValueDefault(f109815));
      useInitialValueDefault(f109815);
      const Navigator = require("Navigator").Navigator;
      const intl = require("intl").intl;
      return (
        <Navigator
          screens={screens}
          initialRouteStack={initialStack}
          headerBackTitle={intl.string(require("intl").t["13/7kX"])}
        />
      );
    };
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default tmp4;
export const GuildDirectoryAddModalScreen = tmp3;
