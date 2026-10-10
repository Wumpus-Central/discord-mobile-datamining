// === Module 11997: GuildDirectorySearchModal ===

// Module 11997 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 6169 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 11998 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GuildDirectorySearchModal(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] !== arg0) {
    const fn = function o() {
      return {
        [closure_2_4]: {
          fullscreen: true,
          headerShown: false,
          render() {
            const merged = Object.assign(closure_0);
            return jsx(GuildDirectorySearchDefault, {});
          }
        }
      };
    };
    cResult[0] = arg0;
    cResult[1] = fn;
    let tmp4 = fn;
  } else {
    tmp4 = cResult[1];
  }
  const tmp5 = useInitialValueDefault(tmp4);
  if (cResult[2] !== tmp5) {
    const obj2 = { screens: tmp5, initialRouteName: SEARCH_SCREEN_KEY };
    const tmp9 = jsx(require("Navigator").Navigator, { screens: tmp5, initialRouteName: SEARCH_SCREEN_KEY });
    cResult[2] = tmp5;
    cResult[3] = tmp9;
    let tmp6 = tmp9;
  } else {
    tmp6 = cResult[3];
  }
  return tmp6;
}) : (function GuildDirectorySearchModal(arg0) {
  _require = arg0;
  return jsx(require("Navigator").Navigator, {
    screens: useInitialValueDefault(() => ({
      [closure_2_4]: {
        fullscreen: true,
        headerShown: false,
        render() {
          const merged = Object.assign(closure_0);
          return jsx(GuildDirectorySearchDefault, {});
        }
      }
    })),
    initialRouteName: SEARCH_SCREEN_KEY
  });
});