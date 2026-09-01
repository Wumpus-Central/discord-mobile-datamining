// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import { GuildDirectoryCreate } from "../GuildDirectoryConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
noopAll;
createCacheKey = { safeArea: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  const _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = { name: closure_1_3.CREATE_OR_ADD, params: null };
    obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    obj1 = {};
    const obj2 = { fullscreen: true, impressionName: callback(closure_1_2[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE, headerLeft: null, headerTitle: null, render: null };
    let obj5 = callback(closure_1_2[6]);
    obj2[2] = obj5.getHeaderCloseButton(closure_1_1(closure_1_2[7]).close);
    obj2[3] = function headerTitle() {
      return null;
    };
    obj2[4] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(11878), {});
    };
    obj1[closure_1_3.CREATE_OR_ADD] = obj2;
    obj1[closure_1_3.DESCRIPTION] = {
      fullscreen: true,
      impressionName: callback(closure_1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11886), {});
      }
    };
    const obj3 = {
      fullscreen: true,
      impressionName: callback(closure_1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11886), {});
      }
    };
    obj1[closure_1_3.TEMPLATES] = {
      fullscreen: true,
      impressionName: callback(closure_1_2[5]).ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11890), {});
      }
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: callback(closure_1_2[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11900), {});
      }
    };
    obj1[closure_1_3.CREATE] = obj5;
    obj[0] = obj1;
    obj[1] = items;
    return obj;
  }));
  let obj = { screens, initialRouteStack: initialStack, headerBackTitle: null };
  const intl = require("../../../../intl/index.native.tsx").intl;
  obj[2] = intl.string(require("../../../../intl/index.native.tsx").t["13/7kX"]);
  return jsx(require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, { screens, initialRouteStack: initialStack, headerBackTitle: null });
};
export const GuildDirectoryAddModalScreen = function GuildDirectoryAddModalScreen(children) {
  const tmp = callback();
  return jsx(SafeAreaPaddingView.SafeAreaPaddingView, { top: true, style: callback().safeArea, children: children.children });
};