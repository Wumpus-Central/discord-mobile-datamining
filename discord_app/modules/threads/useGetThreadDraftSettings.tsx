// discord_app/modules/threads/useGetThreadDraftSettings.tsx
import SnowflakeUtilsDefault from "../../utils/SnowflakeUtils.tsx";
import DraftStore from "../../stores/DraftStore.tsx";

const require = globalThis.__r;

const require = fn;
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DraftStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null;
          if (null != closure_0) {
            let threadSettings = DraftStore.getThreadSettings(closure_0);
            if (threadSettings == null) {
              threadSettings = DraftStore.getThreadDraftWithParentMessageId(
                SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
              );
            }
            tmp2 = threadSettings;
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
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [DraftStore];
      return require("initialize").useStateFromStores(items, () => {
        let tmp2 = null;
        if (null != closure_0) {
          let threadSettings = DraftStore.getThreadSettings(closure_0);
          if (threadSettings == null) {
            threadSettings = DraftStore.getThreadDraftWithParentMessageId(
              SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
            );
          }
          tmp2 = threadSettings;
        }
        return tmp2;
      });
    };
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/useGetThreadDraftSettings.tsx");

export default tmp2;
export const useHasThreadDraft = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      _require = arg0;
      const cResult = require("c").c(3);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DraftStore];
        cResult[0] = items;
        let first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== arg0) {
        const fn = function l() {
          let tmp2 = null != closure_0;
          if (tmp2) {
            let threadSettings = DraftStore.getThreadSettings(closure_0);
            if (threadSettings == null) {
              threadSettings = DraftStore.getThreadDraftWithParentMessageId(
                SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
              );
            }
            tmp2 = null != threadSettings;
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
      return require("initialize").useStateFromStores(first, tmp6);
    }
  : (arg0) => {
      _require = arg0;
      const items = [DraftStore];
      return require("initialize").useStateFromStores(items, () => {
        let tmp2 = null != closure_0;
        if (tmp2) {
          let threadSettings = DraftStore.getThreadSettings(closure_0);
          if (threadSettings == null) {
            threadSettings = DraftStore.getThreadDraftWithParentMessageId(
              SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_0),
            );
          }
          tmp2 = null != threadSettings;
        }
        return tmp2;
      });
    };
