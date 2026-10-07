// discord_app/modules/video_calls/useSelectedParticipant.tsx
import ChannelRTCStore from "../calls/ChannelRTCStore.tsx";

const require = globalThis.__r;

const require = fn;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/video_calls/useSelectedParticipant.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (id) => {
      _require = id;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelRTCStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== id.id) {
        const fn = function o() {
          return ChannelRTCStore.getSelectedParticipant(id.id);
        };
        cResult[1] = id.id;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [ChannelRTCStore];
      return require("initialize").useStateFromStores(items, () => ChannelRTCStore.getSelectedParticipant(id.id));
    };
