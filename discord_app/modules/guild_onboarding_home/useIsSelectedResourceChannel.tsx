// === Module 10331: useIsSelectedResourceChannel ===

// Module 10331 (useIsSelectedResourceChannel)
import FlagUtils from "FlagUtils" /* 1403 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 10332 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6068 */;
import ChannelStore from "ChannelStore" /* 2064 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2115 */;

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(2071).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function useIsSelectedResourceChannel(arg0) {
  _require = arg0;
  const cResult = require("c").c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function c() {
      const channel = ChannelStore.getChannel(closure_0);
      if (null != channel) {
        if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
          if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
            return channel.guild_id;
          }
        }
        obj = FlagUtils;
      }
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj = require("c");
  const stateFromStores = require("useStateFromStores").useStateFromStores(first, tmp8);
  const tmpResult = require("useStateFromStores");
  let tmp10 = stateFromStores;
  if (stateFromStores == null) {
    tmp10 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmpResult2 = require("OnboardingHomeUtils");
  return null != stateFromStores && require("OnboardingHomeUtils").useCanSeeOnboardingHome(tmp10);
}) : (function useIsSelectedResourceChannel(arg0) {
  _require = arg0;
  const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
  const stateFromStores = require("useStateFromStores").useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
        if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
          return channel.guild_id;
        }
      }
      obj = FlagUtils;
    }
  });
  let obj = require("useStateFromStores");
  let tmp2 = stateFromStores;
  if (stateFromStores == null) {
    tmp2 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const obj2 = require("OnboardingHomeUtils");
  return null != stateFromStores && require("OnboardingHomeUtils").useCanSeeOnboardingHome(tmp2);
});