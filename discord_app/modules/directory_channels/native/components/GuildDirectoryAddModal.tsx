// === Module 12461: GuildDirectoryAddModal ===

// Module 12461 (GuildDirectoryAddModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useInitialValueDefault from "useInitialValue" /* 5686 */;
import NavigatorHeader from "NavigatorHeader" /* 5712 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7237 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12460 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GuildDirectoryCreate = fn(12462).GuildDirectoryCreate;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = { safeArea: { marginTop: fn(5770).NAV_BAR_HEIGHT, flex: 1 } };
let closure_5 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    const obj = { name: GuildDirectoryCreate.CREATE_OR_ADD, params: null };
    let merged = Object.assign(closure_0);
    obj.params = {};
    const items = [obj];
    const obj3 = { screens: null, initialStack: null };
    const obj4 = {};
    const obj5 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_EXISTING_GUILD_CHOOSE,
      headerLeft: NavigatorHeader.getHeaderCloseButton(GuildDirectoryAddModalActionCreatorsDefault.close),
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12463), {});
      }
    };
    obj4[GuildDirectoryCreate.CREATE_OR_ADD] = obj5;
    const obj2 = {};
    obj4[GuildDirectoryCreate.DESCRIPTION] = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12471), {});
      }
    };
    const obj7 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12471), {});
      }
    };
    obj4[GuildDirectoryCreate.TEMPLATES] = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12475), {});
      }
    };
    const obj8 = {
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12475), {});
      }
    };
    obj4[GuildDirectoryCreate.CREATE] = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: discord_common_AnalyticsUtils.ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return closure_1_4(closure_1_1(12485), {});
      }
    };
    obj3.screens = obj4;
    obj3.initialStack = items;
    return obj3;
  }));
  let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
  const intl = require("util").intl;
  obj.headerBackTitle = intl.string(require("util").t["13/7kX"]);
  return jsx(require("Navigator").Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = closure_5();
  return jsx(common_SafeAreaView.SafeAreaPaddingView, { top: true, style: closure_5().safeArea, children: children.children });
};