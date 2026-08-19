// discord_app/modules/directory_channels/native/components/GuildDirectoryAddModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import SafeAreaPaddingView from "../../../../components_native/common/SafeAreaView.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import _modDef11475 from "GuildDirectoryAddModalActionCreators.tsx";
import { GuildDirectoryCreate } from "../GuildDirectoryConstants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
const createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[0] = createCacheKey;
let closure_5 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryAddModal.tsx");

export default function GuildDirectoryAddModal(arg0) {
  const _require = arg0;
  ({ screens, initialStack } = useInitialValueDefault(() => {
    let obj = {};
    let merged = Object.assign(callback);
    obj[1] = obj;
    const items = [obj];
    obj = { screens: null, initialStack: null };
    obj1 = {};
    const obj2 = { fullscreen: true, impressionName: callback(dependencyMap[5]).ImpressionNames.HUB_EXISTING_GUILD_CHOOSE, headerLeft: null, headerTitle: null, render: null };
    let obj5 = callback(dependencyMap[6]);
    obj2[2] = obj5.getHeaderCloseButton(_modDef11475.close);
    obj2[3] = function headerTitle() {
      return null;
    };
    obj2[4] = function render(arg0) {
      const merged = Object.assign(arg0);
      return callback2(callback(11478), {});
    };
    obj1[GuildDirectoryCreate.CREATE_OR_ADD] = obj2;
    obj1[GuildDirectoryCreate.DESCRIPTION] = {
      fullscreen: true,
      impressionName: callback(dependencyMap[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11486), {});
      }
    };
    const obj3 = {
      fullscreen: true,
      impressionName: callback(dependencyMap[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11486), {});
      }
    };
    obj1[GuildDirectoryCreate.TEMPLATES] = {
      fullscreen: true,
      impressionName: callback(dependencyMap[5]).ImpressionNames.HUB_CREATE_GUILD_TEMPLATE,
      headerTitle() {
        return null;
      },
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11490), {});
      }
    };
    obj5 = {
      headerTitle() {
        return null;
      },
      fullscreen: true,
      impressionName: callback(dependencyMap[5]).ImpressionNames.HUB_CREATE_GUILD_CUSTOMIZE,
      render(arg0) {
        const merged = Object.assign(arg0);
        return callback2(callback(11500), {});
      }
    };
    obj1[GuildDirectoryCreate.CREATE] = obj5;
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