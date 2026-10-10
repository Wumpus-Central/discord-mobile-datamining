// === Module 17798: VoicePanelConsoleFacepile ===

// Module 17798 (VoicePanelConsoleFacepile)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import GlobalUtils from "GlobalUtils" /* 1388 */;
import NativeViewDefault from "NativeView" /* 6161 */;
import useGameConsoleAccountsDefault from "useGameConsoleAccounts" /* 11108 */;
import getConsoleIconDefault from "getConsoleIcon" /* 13022 */;
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
const PlatformTypes = fn(1085).PlatformTypes;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let obj2 = { consoleIconContainer: { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, consoleIcon: null };
const obj3 = { borderRadius: nativeDefault.radii.round, padding: 8, margin: -3, borderWidth: 3, borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.consoleIcon = { tintColor: nativeDefault.colors.WHITE };
let closure_6 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
const obj4 = { tintColor: nativeDefault.colors.WHITE };
const size = fn(2);
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function VoicePanelConsoleFacepile() {
  const cResult = require("c").c(8);
  const tmp4 = closure_6();
  _require = tmp4;
  const arr = useGameConsoleAccountsDefault();
  if (cResult[0] !== arr) {
    const mapped = arr.map(getConsoleInfo);
    const found = mapped.filter(tmp(1388).isNotNullish);
    cResult[0] = arr;
    cResult[1] = found;
    let tmp5 = found;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] === tmp4.consoleIcon) {
    if (cResult[3] === tmp4.consoleIconContainer) {
      let tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === tmp8) {
        let tmp9 = cResult[7];
      }
      return tmp9;
    }
    const obj2 = { items: tmp5, renderItem: tmp8, offsetAmount: -3 };
    const tmp11 = jsx(tmp(1200).SummarizedIconRow, { items: tmp5, renderItem: tmp8, offsetAmount: -3 });
    cResult[5] = tmp5;
    cResult[6] = tmp8;
    cResult[7] = tmp11;
    tmp9 = tmp11;
  }
  const fn = function u(backgroundColor) {
    const obj = { style: null, children: null };
    const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
    obj.style = items;
    obj.children = jsx(native.Icon, { style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
    return <tmp style={null}>{null}</tmp>;
  };
  cResult[2] = tmp4.consoleIcon;
  cResult[3] = tmp4.consoleIconContainer;
  cResult[4] = fn;
  tmp8 = fn;
  let obj = require("c");
}) : (function VoicePanelConsoleFacepile() {
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
});
export { getConsoleInfo };