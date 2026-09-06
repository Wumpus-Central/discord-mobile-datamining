// === Module 12301: GuildDirectorySearchModal ===

// Module 12301 (GuildDirectorySearchModal)
import useInitialValueDefault from "useInitialValue" /* 5598 */;
import GuildDirectorySearchDefault from "GuildDirectorySearch" /* 12302 */;
import noop from "module_19" /* 19 */;

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