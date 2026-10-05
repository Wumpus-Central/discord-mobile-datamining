// === Module 9762: useIsSelectedResourceChannel ===

// Module 9762 (useIsSelectedResourceChannel)
import Constants from "Constants" /* 1085 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import ChannelConstants from "ChannelConstants" /* 2058 */;
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel" /* 9763 */;
import ChannelSectionStore from "ChannelSectionStore" /* 6783 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import SelectedChannelStore from "SelectedChannelStore" /* 2103 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, tmp5, tmp6, tmp7;

const EMPTY_STRING_SNOWFLAKE_ID = Constants.EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = ChannelConstants.ChannelFlags;
const tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let closure_0;
  let first;
  _require = arg0;
  let obj = require("react");
  const cResult = obj.c(3);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    class S {
      constructor() {
        channel = closure_4.getChannel(closure_0);
        if (null != channel) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          tmp4 = ChannelFlags;
          if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
            tmp5 = closure_1;
            tmp6 = closure_5;
            tmp7 = closure_3;
            if (closure_1(tmp3[8])(channel, closure_5, closure_3)) {
              return channel.guild_id;
            }
          }
        }
        return;
      }
    }
    cResult[1] = arg0;
    cResult[2] = S;
  } else {
    class S {
      constructor() {
        channel = closure_4.getChannel(closure_0);
        if (null != channel) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          tmp4 = ChannelFlags;
          if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
            tmp5 = closure_1;
            tmp6 = closure_5;
            tmp7 = closure_3;
            if (closure_1(tmp3[8])(channel, closure_5, closure_3)) {
              return channel.guild_id;
            }
          }
        }
        return;
      }
    }
  }
  const tmpResult = require("useStateFromStores");
  const stateFromStores = tmpResult.useStateFromStores(first, S);
  const useCanSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome;
  require("OnboardingHomeUtils");
  if (stateFromStores == null) {
    class S {
      constructor() {
        channel = closure_4.getChannel(closure_0);
        if (null != channel) {
          tmp2 = closure_0;
          tmp3 = closure_2;
          obj = closure_0(closure_2[7]);
          tmp4 = ChannelFlags;
          if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
            tmp5 = closure_1;
            tmp6 = closure_5;
            tmp7 = closure_3;
            if (closure_1(tmp3[8])(channel, closure_5, closure_3)) {
              return channel.guild_id;
            }
          }
        }
        return;
      }
    }
  }
  const tmp11 = null != stateFromStores && useCanSeeOnboardingHome(stateFromStores);
  return tmp11;
}) : ((arg0) => {
  let closure_0;
  _require = arg0;
  let obj = require("useStateFromStores");
  const items = [ChannelStore, SelectedChannelStore, ChannelSectionStore];
  const stateFromStores = obj.useStateFromStores(items, () => {
    const channel = ChannelStore.getChannel(closure_0);
    if (null != channel) {
      const obj = FlagUtils;
      if (obj.hasFlag(channel.flags, ChannelFlags.IS_GUILD_RESOURCE_CHANNEL)) {
        if (isSelectedFromHomeChannelDefault(channel, SelectedChannelStore, ChannelSectionStore)) {
          return channel.guild_id;
        }
      }
    }
  });
  let tmp3 = stateFromStores;
  const useCanSeeOnboardingHome = require("OnboardingHomeUtils").useCanSeeOnboardingHome;
  require("OnboardingHomeUtils");
  if (stateFromStores == null) {
    tmp3 = EMPTY_STRING_SNOWFLAKE_ID;
  }
  const tmp4 = null != stateFromStores && useCanSeeOnboardingHome(tmp3);
  return tmp4;
});
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default tmp2;