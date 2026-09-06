// === Module 17125: getConsoleInfo ===

// Module 17125 (getConsoleInfo)
import ThemesDefault from "Themes" /* 576 */;
import getSystemLocale from "getSystemLocale" /* 1114 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9214 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import closure_3 from "noop" /* 19 */;
import { PlatformTypes } from "ME" /* 1074 */;
import { jsx } from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4560 */;

require = arg1;
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
createCacheKey = { consoleIconContainer: null, consoleIcon: null };
createCacheKey = { borderRadius: ThemesDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: ThemesDefault.colors.WHITE };
let closure_6 = createCacheKey.createStyles(createCacheKey);
const obj1 = { tintColor: ThemesDefault.colors.WHITE };
const result = require("set").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  const tmp = callback();
  const _require = tmp;
  const tmp2 = useGameConsoleAccountsDefault();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = React.useMemo(() => {
    const mapped = lib2.map(closure_1_7);
    return mapped.filter(lib(closure_1_2[8]).isNotNullish);
  }, items);
  const renderItem = React.useCallback((backgroundColor) => {
    let obj = { style: items, children: null };
    items = [lib.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    obj = { style: lib.consoleIcon, size: lib(closure_1_2[10]).Icon.Sizes.MEDIUM, source: backgroundColor.icon };
    obj[1] = closure_1_5(lib(closure_1_2[10]).Icon, obj);
    return closure_1_5(lib2(closure_1_2[9]), obj);
  }, items1);
  return jsx(_require(1178).SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };