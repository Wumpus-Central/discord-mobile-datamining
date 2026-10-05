// discord_app/modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl5 from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import GlobalUtils from "../../../../utils/GlobalUtils.tsx";
import NativeViewDefault from "../../../core/native/NativeView.tsx";
import useGameConsoleAccountsDefault from "../../../game_console/useGameConsoleAccounts.tsx";
import getConsoleIconDefault from "../../../game_console/native/getConsoleIcon.tsx";
import react from "../../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, importDefault;

let obj2;
function getConsoleInfo(type) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  type = type.type;
  if (PlatformTypes.XBOX === type) {
    const obj2 = {
      icon: getConsoleIconDefault(type.type),
      color: nativeDefault.unsafe_rawColors.PLATFORM_XBOX,
      connectLabel: intl3.string(intl5.t.QN7HXV),
      connectSublabel: intl4.string(intl5.t["M/Ld86"]),
    };
    intl3 = intl5.intl;
    intl4 = intl5.intl;
    return obj2;
  } else if (tmp.PLAYSTATION === type) {
    const obj = {
      icon: getConsoleIconDefault(type.type),
      color: nativeDefault.unsafe_rawColors.PLATFORM_PLAYSTATION,
      connectLabel: intl.string(intl5.t["3qLlTS"]),
      connectSublabel: intl2.string(intl5.t["/uR9x1"]),
    };
    intl = intl5.intl;
    intl2 = intl5.intl;
    return obj;
  } else {
    return null;
  }
}
const PlatformTypes = Constants.PlatformTypes;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { consoleIconContainer: obj2, consoleIcon: { tintColor: nativeDefault.colors.WHITE } };
obj2 = {
  borderRadius: nativeDefault.radii.round,
  padding: 8,
  margin: -3,
  borderWidth: 3,
  borderColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
};
createStyles = createStyles.createStyles;
({ tintColor: nativeDefault.colors.WHITE });
let closure_6 = createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let closure_0;
      let tmp5;
      const tmp = _require;
      const obj = require("react");
      const cResult = obj.c(8);
      const tmp4 = closure_6();
      _require = tmp4;
      const arr = useGameConsoleAccountsDefault();
      if (cResult[0] !== arr) {
        const mapped = arr.map(getConsoleInfo);
        const found = mapped.filter(tmp(1375).isNotNullish);
        cResult[0] = arr;
        cResult[1] = found;
        tmp5 = found;
      } else {
        tmp5 = cResult[1];
      }
      if (cResult[2] === tmp4.consoleIcon) {
        let tmp8;
        if (cResult[3] === tmp4.consoleIconContainer) {
          tmp8 = cResult[4];
        }
        if (cResult[5] === tmp5) {
          let tmp9;
          if (cResult[6] === tmp8) {
            tmp9 = cResult[7];
          }
          return tmp9;
        }
        const tmp11 = jsx(tmp(1188).SummarizedIconRow, { items: tmp5, renderItem: tmp8, offsetAmount: -3 });
        cResult[5] = tmp5;
        cResult[6] = tmp8;
        cResult[7] = tmp11;
        tmp9 = tmp11;
      }
      const fn = function u(backgroundColor) {
        const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
        ({ style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
        NativeViewDefault;
        const Icon = native.Icon;
        return <tmp style={items}>{null}</tmp>;
      };
      cResult[2] = tmp4.consoleIcon;
      cResult[3] = tmp4.consoleIconContainer;
      cResult[4] = fn;
      tmp8 = fn;
    }
  : () => {
      let closure_0;
      let closure_1;
      const tmp = closure_6();
      _require = tmp;
      const tmp2 = useGameConsoleAccountsDefault();
      importDefault = tmp2;
      let items = [tmp2];
      const items1 = [tmp];
      const items2 = react.useMemo(() => {
        const mapped = closure_1.map(getConsoleInfo);
        return mapped.filter(GlobalUtils.isNotNullish);
      }, items);
      const renderItem = react.useCallback((backgroundColor) => {
        const items = [closure_0.consoleIconContainer, { backgroundColor: backgroundColor.color }];
        ({ style: closure_0.consoleIcon, size: native.Icon.Sizes.MEDIUM, source: backgroundColor.icon });
        NativeViewDefault;
        const Icon = native.Icon;
        return <tmp style={items}>{null}</tmp>;
      }, items1);
      return jsx(require("native").SummarizedIconRow, { items: items2, renderItem, offsetAmount: -3 });
    };
const result = size.fileFinishedImporting("modules/voice_panel/native/header/VoicePanelConsoleFacepile.tsx");

export default tmp3;
export { getConsoleInfo };
