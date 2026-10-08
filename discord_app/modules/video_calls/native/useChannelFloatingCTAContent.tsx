// discord_app/modules/video_calls/native/useChannelFloatingCTAContent.tsx
import dismissible_content from "../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/dismissible_content.tsx";
import useGameConsoleAccountsDefault from "../../game_console/useGameConsoleAccounts.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import MediaEngineStore from "../../../stores/MediaEngineStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";

const require = globalThis.__r;

require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/native/useChannelFloatingCTAContent.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useChannelFloatingCTAContent(arg0) {
      _require = arg0;
      const cResult = require("c").c(9);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RTCConnectionStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            tmp2 = RTCConnectionStore.getChannelId() === tmp;
          }
          return tmp2;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      const obj3 = useGameConsoleAccountsDefault();
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const items1 = [MediaEngineStore];
        const fn2 = function _() {
          return anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled();
        };
        cResult[3] = items1;
        cResult[4] = fn2;
        let tmp9 = fn2;
        let tmp8 = items1;
      } else {
        tmp8 = cResult[3];
        tmp9 = cResult[4];
      }
      const tmpResult = require("useStateFromStores");
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(tmp8, tmp9);
      if (cResult[5] === obj3) {
        if (cResult[6] === stateFromStores1) {
          if (cResult[7] === stateFromStores) {
            let tmp12 = cResult[8];
          }
          return tmp12;
        }
      }
      const items2 = [];
      if (stateFromStores1) {
        items2.push(tmp(2048).DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
      }
      if (stateFromStores) {
        items2.push(tmp(2048).DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
      }
      if (obj3.some((twoWayLink) => twoWayLink.twoWayLink)) {
        items2.push(tmp(2048).DismissibleContent.DONUT_MOBILE_NUX);
      }
      cResult[5] = obj3;
      cResult[6] = stateFromStores1;
      cResult[7] = stateFromStores;
      cResult[8] = items2;
      tmp12 = items2;
      const tmpResult2 = require("useStateFromStores");
    }
  : function useChannelFloatingCTAContent(arg0) {
      _require = arg0;
      let items = [RTCConnectionStore];
      stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          tmp2 = RTCConnectionStore.getChannelId() === tmp;
        }
        return tmp2;
      });
      let tmp2 = require("useGameConsoleAccounts")();
      importDefault = tmp2;
      const obj = require("useStateFromStores");
      const items1 = [MediaEngineStore];
      const stateFromStores1 = require("useStateFromStores").useStateFromStores(items1, () =>
        anyLocalVideoAutoDisabled.isAnyLocalVideoAutoDisabled(),
      );
      const items2 = [stateFromStores1, tmp2, stateFromStores];
      return stateFromStores1.useMemo(() => {
        const items = [];
        if (stateFromStores1) {
          items.push(dismissible_content.DismissibleContent.VOICE_PANEL_BAD_CONNECTION_CTA);
        }
        if (stateFromStores) {
          items.push(dismissible_content.DismissibleContent.SOUNDBOARD_MOBILE_FLOATING_CTA);
        }
        if (closure_1.some((twoWayLink) => twoWayLink.twoWayLink)) {
          items.push(dismissible_content.DismissibleContent.DONUT_MOBILE_NUX);
        }
        return items;
      }, items2);
    };
