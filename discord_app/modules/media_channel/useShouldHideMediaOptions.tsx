// discord_app/modules/media_channel/useShouldHideMediaOptions.tsx
import ChannelStore from "../../stores/ChannelStore.tsx";

const require = globalThis.__r;

const require = fn;
const ChannelFlags = fn(2070).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/media_channel/useShouldHideMediaOptions.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function useShouldHideMediaOptions(arg0) {
      _require = arg0;
      const cResult = require("c").c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function o() {
          const channel = ChannelStore.getChannel(closure_0);
          let parent_id;
          if (channel != null) {
            parent_id = channel.parent_id;
          }
          let channel1 = null;
          if (null != parent_id) {
            channel1 = null;
            if (channel.isForumPost()) {
              let parent_id1;
              if (channel != null) {
                parent_id1 = channel.parent_id;
              }
              channel1 = ChannelStore.getChannel(parent_id1);
            }
          }
          return channel1;
        };
        cResult[1] = arg0;
        cResult[2] = fn;
        let tmp6 = fn;
      } else {
        tmp6 = cResult[2];
      }
      const obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp6);
      if (cResult[3] !== stateFromStores) {
        let hasFlagResult;
        if (stateFromStores != null) {
          hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
        }
        cResult[3] = stateFromStores;
        cResult[4] = hasFlagResult;
        let tmp7 = hasFlagResult;
      } else {
        tmp7 = cResult[4];
      }
      return true === tmp7;
    }
  : function useShouldHideMediaOptions(arg0) {
      _require = arg0;
      const items = [ChannelStore];
      const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
        const channel = ChannelStore.getChannel(closure_0);
        let parent_id;
        if (channel != null) {
          parent_id = channel.parent_id;
        }
        let channel1 = null;
        if (null != parent_id) {
          channel1 = null;
          if (channel.isForumPost()) {
            let parent_id1;
            if (channel != null) {
              parent_id1 = channel.parent_id;
            }
            channel1 = ChannelStore.getChannel(parent_id1);
          }
        }
        return channel1;
      });
      let hasFlagResult;
      if (stateFromStores != null) {
        hasFlagResult = stateFromStores.hasFlag(ChannelFlags.HIDE_MEDIA_DOWNLOAD_OPTIONS);
      }
      return true === hasFlagResult;
    };
