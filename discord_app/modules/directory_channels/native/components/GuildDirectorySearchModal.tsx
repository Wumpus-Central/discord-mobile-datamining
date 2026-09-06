// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModal.tsx
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import GuildDirectorySearchDefault from "GuildDirectorySearch.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

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
        },
      },
    })),
    initialRouteName: SEARCH_SCREEN_KEY,
  });
}
