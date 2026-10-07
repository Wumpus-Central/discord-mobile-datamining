// discord_app/modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx
import FlagUtils from "../../../discord_common/js/shared/utils/FlagUtils.tsx";
import isSelectedFromHomeChannelDefault from "isSelectedFromHomeChannel.native.tsx";
import ChannelSectionStore from "../../stores/ChannelSectionStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import SelectedChannelStore from "../../stores/SelectedChannelStore.tsx";

const require = globalThis.__r;

require = fn;
const EMPTY_STRING_SNOWFLAKE_ID = fn(1085).EMPTY_STRING_SNOWFLAKE_ID;
const ChannelFlags = fn(2058).ChannelFlags;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_onboarding_home/useIsSelectedResourceChannel.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
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
      let obj = require("c");
      const stateFromStores = require("useStateFromStores").useStateFromStores(first, S);
      const tmpResult = require("useStateFromStores");
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
      const tmpResult2 = require("OnboardingHomeUtils");
      return null != stateFromStores && require("OnboardingHomeUtils").useCanSeeOnboardingHome(stateFromStores);
    }
  : (arg0) => {
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
    };
