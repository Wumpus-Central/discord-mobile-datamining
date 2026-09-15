// === Module 12444: GuildDirectoryAddModal ===

// Module 12444 (GuildDirectoryAddModal)
import discord_common_AnalyticsUtils from "discord_common/AnalyticsUtils" /* 1249 */;
import useInitialValueDefault from "useInitialValue" /* 5683 */;
import NavigatorHeader from "NavigatorHeader" /* 5709 */;
import common_SafeAreaView from "common/SafeAreaView" /* 7230 */;
import GuildDirectoryAddModalActionCreatorsDefault from "GuildDirectoryAddModalActionCreators" /* 12443 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const GuildDirectoryCreate = fn(12445).GuildDirectoryCreate;
const jsx = fn(21).jsx;
const createStyles = fn(4639);
let obj2 = { safeArea: { marginTop: fn(5767).NAV_BAR_HEIGHT, flex: 1 } };
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
        return closure_1_4(closure_1_1(12446), {});
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
        return closure_1_4(closure_1_1(12454), {});
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
        return closure_1_4(closure_1_1(12454), {});
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
        return closure_1_4(closure_1_1(12458), {});
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
        return closure_1_4(closure_1_1(12458), {});
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
        return closure_1_4(closure_1_1(12468), {});
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