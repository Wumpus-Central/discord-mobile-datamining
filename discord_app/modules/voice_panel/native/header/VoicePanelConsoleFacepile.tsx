// discord_app/modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx
import noop from "noop";
import { PlatformTypes } from "ME";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { Button } from "../../../../design/void/native.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { getConsoleIcon } from "../../../game_console/native/getConsoleIcon.tsx";
import { useGameConsoleAccounts } from "../../../game_console/useGameConsoleAccounts.tsx";

let require = arg1;
function getConsoleInfo(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    let obj = { icon: null, color: null, connectLabel: null, connectSublabel: null };
    obj[0] = getConsoleIcon(type.type);
    obj[1] = Themes.unsafe_rawColors.PLATFORM_XBOX;
    const intl3 = getSystemLocale.intl;
    obj[2] = intl3.string(getSystemLocale.t.QN7HXV);
    const intl4 = getSystemLocale.intl;
    obj[3] = intl4.string(getSystemLocale.t["M/Ld86"]);
    return obj;
  } else if (tmp.PLAYSTATION === type) {
    obj = { icon: null, color: null, connectLabel: null, connectSublabel: null };
    obj[0] = getConsoleIcon(type.type);
    obj[1] = Themes.unsafe_rawColors.PLATFORM_PLAYSTATION;
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
createCacheKey = { borderRadius: require("Themes").radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: require("Themes").colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { tintColor: require("Themes").colors.WHITE };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const obj1 = { tintColor: require("Themes").colors.WHITE };
const result = require("jsxProd").fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  let tmp = createCacheKey();
  const require = tmp;
  const tmp2 = useGameConsoleAccounts();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = React.useMemo(() => {
    const mapped = tmp2.map(outer1_7);
    return mapped.filter(tmp(outer1_2[8]).isNotNullish);
  }, items);
  const renderItem = React.useCallback((backgroundColor) => {
    let obj = { style: items, children: null };
    items = [tmp.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    tmp = tmp2(outer1_2[9]);
    obj = { style: tmp.consoleIcon, size: null, source: null };
    obj[1] = tmp(outer1_2[10]).Icon.Sizes.MEDIUM;
    obj[2] = backgroundColor.icon;
    obj[1] = outer1_5(tmp(outer1_2[10]).Icon, obj);
    return outer1_5(tmp, obj);
  }, items1);
  return jsx(Button.SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };