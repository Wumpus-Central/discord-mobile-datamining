// === Module 10066: GuildDirectorySearchModal ===

// Module 10066 (GuildDirectorySearchModal)
import "noop";
import { jsx } from "jsxProd";

const require = arg1;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const result = require("DefaultState").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default function GuildDirectorySearchModal(arg0) {
  const _require = arg0;
  const obj = { screens: null, initialRouteName: null };
  obj[0] = importDefault(5507)(() => ({
    [outer1_4]: {
      fullscreen: true,
      headerShown: false,
      render() {
        const merged = Object.assign(closure_0);
        return outer1_3(outer1_1(outer1_2[2]), {});
      }
    }
  }));
  obj[1] = SEARCH_SCREEN_KEY;
  return jsx(_require(5574).Navigator, { screens: null, initialRouteName: null });
};