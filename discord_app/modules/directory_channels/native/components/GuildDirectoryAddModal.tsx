import { SafeAreaPaddingView } from "../../../../components_native/common/SafeAreaView.tsx";
import { NavigationStack } from "../../../../design/components/Navigator/native/Navigator.native.tsx";
import { useInitialValue } from "../../../../hooks/useInitialValue.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import "noop";
import { GuildDirectoryCreate } from "GuildDirectoryCreate";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";

const require = arg1;
createCacheKey = { safeArea: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  let initialStack;
  let screens;
  const _require = arg0;
  ({ screens, initialStack } = useInitialValue(() => {
    let obj = { name: outer1_3.CREATE_OR_ADD, params: null };
    obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    const obj1 = {};
    const obj2 = { fullscreen: true, impressionName: callback(outer1_2[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE, headerLeft: null, headerTitle: null, render: null };
    let obj5 = callback(outer1_2[6]);
    obj2[2] = obj5.getHeaderCloseButton(outer1_1(outer1_2[7]).close);
    obj2[3] = function headerTitle() {
      return null;
    };
    obj2[4] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(11595), {});
    };
    obj1[outer1_3.CREATE_OR_ADD] = obj2;
    obj1[outer1_3.DESCRIPTION] = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11603), {});
      }
    };
    const obj3 = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11603), {});
      }
    };
    obj1[outer1_3.TEMPLATES] = {
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11607), {});
      }
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: callback(outer1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11617), {});
      }
    };
    obj1[outer1_3.CREATE] = obj5;
    obj[0] = obj1;
    obj[1] = items;
    return obj;
  }));
  let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
  const intl = _getSystemLocale.intl;
  obj[2] = intl.string(_getSystemLocale.t["13/7kX"]);
  return jsx(_NavigationStack.Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = createCacheKey();
  return jsx(SafeAreaPaddingView /* SafeAreaPaddingView */.SafeAreaPaddingView, { top: true, style: createCacheKey().safeArea, children: children.children });
};