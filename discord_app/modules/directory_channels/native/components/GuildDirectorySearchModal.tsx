// discord_app/modules/directory_channels/native/components/GuildDirectorySearchModal.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const jsx = Fragment.jsx;
const SEARCH_SCREEN_KEY = "SEARCH_SCREEN_KEY";
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let tmp4;
      let tmp6;
      _require = arg0;
      const obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] !== arg0) {
        const fn = function o() {
          return {
            [closure_2_4]: {
              fullscreen: true,
              headerShown: false,
              render() {
                const obj = {};
                const tmp = closure_2_1(closure_2_2[2]);
                const merged = Object.assign(closure_0);
                return closure_2_3(tmp, obj);
              },
            },
          };
        };
        cResult[0] = arg0;
        cResult[1] = fn;
        tmp4 = fn;
      } else {
        tmp4 = cResult[1];
      }
      const tmp5 = useInitialValueDefault(tmp4);
      if (cResult[2] !== tmp5) {
        const tmp9 = jsx(tmp(6496).Navigator, { screens: tmp5, initialRouteName: SEARCH_SCREEN_KEY });
        cResult[2] = tmp5;
        cResult[3] = tmp9;
        tmp6 = tmp9;
      } else {
        tmp6 = cResult[3];
      }
      return tmp6;
    }
  : (arg0) => {
      _require = arg0;
      const Navigator = require("Navigator").Navigator;
      return (
        <Navigator
          screens={useInitialValueDefault(() => {
            let obj = {
              fullscreen: true,
              headerShown: false,
              render() {
                const obj = {};
                const tmp = closure_2_1(closure_2_2[2]);
                const merged = Object.assign(closure_0);
                return closure_2_3(tmp, obj);
              },
            };
            return { [closure_2_4]: obj };
          })}
          initialRouteName={SEARCH_SCREEN_KEY}
        />
      );
    };
const result = size.fileFinishedImporting("modules/directory_channels/native/components/GuildDirectorySearchModal.tsx");

export default tmp3;
