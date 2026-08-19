// discord_app/modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import useGameConsoleAccountsDefault from "../../../game_console/useGameConsoleAccounts.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import noop from "../../../../../_runtime/00019_noop.js";
import { PlatformTypes } from "../../../../Constants.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
function getConsoleInfo(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    let obj = { icon: null, color: null, connectLabel: null, connectSublabel: null };
    obj[0] = getConsoleIconDefault(type.type);
    obj[1] = ThemesDefault.unsafe_rawColors.PLATFORM_XBOX;
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(getSystemLocale.t.QN7HXV);
    const intl4 = getSystemLocale.intl;
    obj[3] = intl4.string(getSystemLocale.t["M/Ld86"]);
    return obj;
  } else if (tmp.PLAYSTATION === type) {
    obj = { icon: null, color: null, connectLabel: null, connectSublabel: null };
    obj[0] = getConsoleIconDefault(type.type);
    obj[1] = ThemesDefault.unsafe_rawColors.PLATFORM_PLAYSTATION;
    const intl = getSystemLocale.intl;
    obj[2] = intl.string(getSystemLocale.t["3qLlTS"]);
    const intl2 = getSystemLocale.intl;
    obj[3] = intl2.string(getSystemLocale.t["/uR9x1"]);
    return obj;
  } else {
    return null;
  }
}
const createCacheKey = { borderRadius: ThemesDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.WHITE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  const tmp = callback();
  const _require = tmp;
  const tmp2 = useGameConsoleAccountsDefault();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = React.useMemo(() => {
    const mapped = lib2.map(getConsoleInfo);
    return mapped.filter(lib(dependencyMap[8]).isNotNullish);
  }, items);
  const renderItem = React.useCallback((backgroundColor) => {
    const items = [lib.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    const obj = { style: lib.consoleIcon, size: lib(dependencyMap[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon };
    obj[1] = jsx(lib(dependencyMap[10]).Icon, { style: lib.consoleIcon, size: lib(dependencyMap[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon });
    return jsx(lib2(dependencyMap[9]), { style: lib.consoleIcon, size: lib(dependencyMap[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon });
  }, items1);
  return jsx(require("../../../../design/void/native.tsx").SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };