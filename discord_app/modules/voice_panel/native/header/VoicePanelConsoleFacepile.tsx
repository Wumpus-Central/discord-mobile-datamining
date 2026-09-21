// === Module 17589: VoicePanelConsoleFacepile ===

// Module 17589 (VoicePanelConsoleFacepile)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import GlobalUtils from "GlobalUtils" /* 1370 */;
import NativeViewDefault from "NativeView" /* 5806 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 10041 */;
import getConsoleIconDefault from "getConsoleIcon" /* 10059 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
function getConsoleInfo(type) {
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const obj2 = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_XBOX, connectLabel: null, connectSublabel: null };
    const intl3 = util.intl;
    obj2.connectLabel = intl3.string(util.t.QN7HXV);
    const intl4 = util.intl;
    obj2.connectSublabel = intl4.string(util.t["M/Ld86"]);
    return obj2;
  } else if (tmp.PLAYSTATION === type) {
    const obj = { icon: getConsoleIconDefault(type.type), color: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION, connectLabel: null, connectSublabel: null };
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
const createStyles = fn(4756);
let obj2 = { consoleIconContainer: { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, consoleIcon: null };
const obj3 = { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.consoleIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default function VoicePanelConsoleFacepile() {
  let tmp = closure_6();
  _require = tmp;
  const tmp2 = useGameConsoleAccountsDefault();
  importDefault = tmp2;
  let items = [tmp2];
  const items1 = [tmp];
  const items2 = noop.useMemo(() => {
    const mapped = closure_1.map(getConsoleInfo);
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items);
  const renderItem = noop.useCallback((backgroundColor) => {
    const obj = { style: null, children: null };
    const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    obj.style = items;
    obj.children = jsx(native.Icon, { style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
    return <tmp style={null}>{null}</tmp>;
  }, items1);
  return jsx(require("native").SummarizedIconRow, { items: items2, renderItem, offsetAmount: -3 });
};
export { getConsoleInfo };