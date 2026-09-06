// === Module 17125: VoicePanelConsoleFacepile ===

// Module 17125 (VoicePanelConsoleFacepile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import GlobalUtils from "GlobalUtils" /* 1369 */;
import NativeViewDefault from "NativeView" /* 5589 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 9214 */;
import getConsoleIconDefault from "getConsoleIcon" /* 9463 */;
import noop from "module_19" /* 19 */;

require = fn;
function getConsoleInfo(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    let obj = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, connectLabel: null, connectSublabel: null };
    const intl3 = util.intl;
    obj.connectLabel = intl3.string(util.t.QN7HXV);
    const intl4 = util.intl;
    obj.connectSublabel = intl4.string(util.t["M/Ld86"]);
    return obj;
  } else if (tmp.PLAYSTATION === type) {
    obj = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, connectLabel: null, connectSublabel: null };
    const intl = util.intl;
    obj.connectLabel = intl.string(util.t["3qLlTS"]);
    const intl2 = util.intl;
    obj.connectSublabel = intl2.string(util.t["/uR9x1"]);
    return obj;
  } else {
    return null;
  }
}
const PlatformTypes = fn(1074).PlatformTypes;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { consoleIconContainer: null, consoleIcon: null };
createStyles = { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.consoleIconContainer = createStyles;
createStyles.consoleIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_6 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  const tmp = closure_6();
  _require = tmp;
  const tmp2 = useGameConsoleAccountsDefault();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  items = noop.useMemo(() => {
    const mapped = closure_1.map(getConsoleInfo);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const renderItem = noop.useCallback((backgroundColor) => {
    let obj = { style: null, children: null };
    const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    obj.style = items;
    obj = { style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon };
    obj.children = jsx(native.Icon, { style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
    return jsx(NativeViewDefault, { style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
  }, items1);
  return jsx(require("native").SummarizedIconRow, { items, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };