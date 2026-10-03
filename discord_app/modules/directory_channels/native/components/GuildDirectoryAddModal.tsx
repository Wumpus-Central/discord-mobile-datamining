// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import c from "../../../../../_runtime/00576_c.js";
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import GuildDirectoryCreateOrAddDefault from "GuildDirectoryCreateOrAdd.tsx";
import GuildDirectoryCreateOrAddDescriptionDefault from "GuildDirectoryCreateOrAddDescription.tsx";
import GuildDirectoryTemplatesDefault from "GuildDirectoryTemplates.tsx";
import CreateGuildContainerDefault from "../../../create_guild/native/components/CreateGuildContainer.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
function getScreens() {
  const obj = {};
  const obj2 = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
    headerLeft: NavigatorHeader.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close),
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GuildDirectoryCreateOrAddDefault, {});
    },
  };
  obj[GuildDirectoryCreate.CREATE_OR_ADD] = obj2;
  obj[GuildDirectoryCreate.DESCRIPTION] = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GuildDirectoryCreateOrAddDescriptionDefault, {});
    },
  };
  const obj4 = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GuildDirectoryCreateOrAddDescriptionDefault, {});
    },
  };
  obj[GuildDirectoryCreate.TEMPLATES] = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GuildDirectoryTemplatesDefault, {});
    },
  };
  const obj5 = {
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
    headerTitle() {
      return null;
    },
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(GuildDirectoryTemplatesDefault, {});
    },
  };
  obj[GuildDirectoryCreate.CREATE] = {
    headerTitle() {
      return null;
    },
    fullscreen: true,
    impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
    render(arg0) {
      const merged = Object.assign(arg0);
      return jsx(CreateGuildContainerDefault, {});
    },
  };
  return obj;
}
const GuildDirectoryCreate = fn(11938).GuildDirectoryCreate;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { safeArea: { marginTop: fn(6068).NAV_BAR_HEIGHT, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
fn(558);
let obj3 = { marginTop: fn(6068).NAV_BAR_HEIGHT, flex: 1 };
const ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (children) => {
      const cResult = c.c(3);
      children = children.children;
      const tmp4 = closure_5();
      if (cResult[0] === children) {
        if (cResult[1] === tmp4.safeArea) {
          let tmp5 = cResult[2];
        }
        return tmp5;
      }
      const tmp6 = jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: tmp4.safeArea, children });
      cResult[0] = children;
      cResult[1] = tmp4.safeArea;
      cResult[2] = tmp6;
      tmp5 = tmp6;
      const obj2 = { top: true, style: tmp4.safeArea, children };
    }
  : (children) => {
      const tmp = closure_5();
      return jsx(common_SafeAreaView.SafeAreaPaddingView, {
        top: true,
        style: closure_5().safeArea,
        children: children.children,
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(6);
      if (cResult[0] !== arg0) {
        const fn = function l() {
          const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: null };
          const merged = Object.assign(closure_0);
          obj.params = {};
          const items = [obj];
          return { screens: getScreens(), initialStack: items };
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        let tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      let obj = require("c");
      ({ screens, initialStack } = useInitialValueDefault(tmp4));
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = tmp(1126).intl;
        const stringResult = intl.string(tmp(1126).t["13/7kX"]);
        cResult[2] = stringResult;
        let tmp6 = stringResult;
      } else {
        tmp6 = cResult[2];
      }
      if (cResult[3] === initialStack) {
        if (cResult[4] === screens) {
          let tmp8 = cResult[5];
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
      const tmp5 = useInitialValueDefault(tmp4);
    }
  : (arg0) => {
      _require = arg0;
      ({ screens, initialStack } = useInitialValueDefault(() => {
        const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: null };
        const merged = Object.assign(closure_0);
        obj.params = {};
        const items = [obj];
        return { screens: getScreens(), initialStack: items };
      }));
      let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
      const intl = require("util").intl;
      obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
      return jsx(require("Navigator").Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
    };
export const GuildDirectoryAddModalScreen = tmp3;
