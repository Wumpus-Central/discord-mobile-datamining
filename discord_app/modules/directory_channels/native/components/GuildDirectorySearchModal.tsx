// === Module 12553: GuildDirectorySearchModal ===

// Module 12553 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 5810 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 12554 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const size = fn(2);
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
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
};