// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import discord_common_AnalyticsUtils from "../../../../../discord_common/js/packages/analytics-utils/AnalyticsUtils.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const GuildDirectoryCreate = fn(12310).GuildDirectoryCreate;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { safeArea: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1 };
createStyles.safeArea = createStyles;
let closure_5 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: null };
    obj = {};
    let merged = Object.assign(closure_0);
    obj.params = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    const obj1 = {};
    const obj2 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
      headerLeft: null,
      headerTitle: null,
      render: null,
    };
    let obj5 = NavigatorHeader;
    obj2.headerLeft = obj5.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close);
    obj2.headerTitle = function headerTitle() {
      return null;
    };
    obj2.render = function render(arg0) {
      const merged = Object.assign(arg0);
      return closure_1_4(closure_1_1(12311), {});
    };
    obj1[GuildDirectoryCreate.CREATE_OR_ADD] = obj2;
    obj1[GuildDirectoryCreate.DESCRIPTION] = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12319), {});
      },
    };
    const obj3 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12319), {});
      },
    };
    obj1[GuildDirectoryCreate.TEMPLATES] = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12323), {});
      },
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12333), {});
      },
    };
    obj1[GuildDirectoryCreate.CREATE] = obj5;
    obj.screens = obj1;
    obj.initialStack = items;
    return obj;
  }));
  let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
  const intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return jsx(require("Navigator").Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
}
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, {
    top: true,
    style: closure_5().safeArea,
    children: children.children,
  });
};
