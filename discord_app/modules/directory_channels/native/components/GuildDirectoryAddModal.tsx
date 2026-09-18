// === Module 12552: GuildDirectoryAddModal ===

// Module 12552 (GuildDirectoryAddModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useInitialValueDefault from "useInitialValue" /* 5768 */;
import NavigatorHeader from "NavigatorHeader" /* 5794 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7319 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12551 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GuildDirectoryCreate = fn(12553).GuildDirectoryCreate;
const jsx = fn(21).jsx;
const createStyles = fn(4722);
let obj2 = { safeArea: { marginTop: fn(5852).NAV_BAR_HEIGHT, flex: 1 } };
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
        return closure_1_4(closure_1_1(12554), {});
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
        return closure_1_4(closure_1_1(12562), {});
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
        return closure_1_4(closure_1_1(12562), {});
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
        return closure_1_4(closure_1_1(12566), {});
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
        return closure_1_4(closure_1_1(12566), {});
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
        return closure_1_4(closure_1_1(12576), {});
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