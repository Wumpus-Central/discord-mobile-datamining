// === Module 12652: useConjureVoiceChannelPin ===

// Module 12652 (useConjureVoiceChannelPin)
import useChannelName from "useChannelName" /* 5652 */;
import conjureVoiceChannelPin from "conjureVoiceChannelPin" /* 10959 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4863 */;
import GuildChannelStore from "GuildChannelStore" /* 4944 */;
import PermissionStore from "PermissionStore" /* 4946 */;
import RelationshipStore from "RelationshipStore" /* 4956 */;
import UserStore from "UserStore" /* 1383 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6844 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 10871 */;

const require = globalThis.__r;

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4944).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1072);
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/useConjureVoiceChannelPin.tsx");

export function useConjureVoiceChannelPinOutcome(projectId) {
  _require = projectId;
  const items = [ConjureVoiceChannelPinStore];
  stateFromStores = require("initialize").useStateFromStores(items, () => ConjureVoiceChannelPinStore.getOutcome(closure_0));
  let obj = require("initialize");
  const items1 = [ChannelStore, UserStore, RelationshipStore];
  const items2 = [stateFromStores];
  const obj2 = require("initialize");
  return {
    outcome: stateFromStores,
    pinnedName: require("initialize").useStateFromStores(items1, () => {
      let status;
      if (stateFromStores != null) {
        status = stateFromStores.status;
      }
      let channel = null;
      if ("pinned" === status) {
        channel = ChannelStore.getChannel(stateFromStores.channelId);
      }
      let channelName = null;
      if (null != channel) {
        channelName = useChannelName.computeChannelName(channel, UserStore, RelationshipStore);
      }
      return channelName;
    }, items2)
  };
}
export function useConjureVoiceChannelPinForm(projectId) {
  _require = projectId;
  let items = [ConjureProjectStore];
  const items1 = [projectId];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  closure_129_0 = guild_id;
  let obj = require("initialize");
  const items2 = [GuildChannelStore, PermissionStore];
  const items3 = [guild_id];
  const channels = require("initialize").useStateFromStoresArray(items2, () => {
    if (null == closure_0) {
      let items = [];
    } else {
      const mapped = GuildChannelStore.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY].map((channel) => channel.channel);
      items = mapped.filter((type) => {
        let canResult = type.type === constants.GUILD_VOICE;
        if (canResult) {
          canResult = closure_1_8.can(constants2.MANAGE_CHANNELS, type);
        }
        return canResult;
      });
      const arr = GuildChannelStore.getChannels(tmp)[GUILD_VOCAL_CHANNELS_KEY];
    }
    return items;
  }, items3);
  const setPicked = _slicedToArray(selected.useState(null), 2);
  dependencyMap = setPicked[0];
  const tmpResult = require("initialize");
  [tmp7, asyncGeneratorStep] = selected.useState(false);
  const tmp6 = _slicedToArray(selected.useState(false), 2);
  [tmp9, _slicedToArray] = selected.useState(false);
  selected = channels.find((id) => id.id === closure_1);
  if (selected == null) {
    selected = null;
  }
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items4 = [application_id, projectId, selected];
  const items5 = [projectId];
  const pin = obj3.useCallback(asyncGeneratorStep(async () => {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj2 = { value, done: true };
        return obj2;
      } else {
        return { value: "HermesInternal", done: "HermesInternal" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === c2) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_128_0 = undefined;
            let prop = null;
            if (null != selected) {
              if (prop != application_id) {
                asyncGeneratorStep(true);
                _slicedToArray(false);
                c2 = 1;
                c3 = 1;
                const obj5 = { value: tmp2(tmp5[13]).pinVoiceChannel(selected.id, tmp21), done: false };
                return obj5;
              }
            }
            c3 = 3;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          closure_129_2(false);
          if (!closure_128_0) {
            closure_129_3(true);
          }
        }
        prop = tmp2(tmp5[13]).resolveVoiceChannelPin;
        const obj = { status: "pinned", channelId: closure_129_4.id };
        prop(closure_129_0, obj);
        const tmp17 = tmp2(tmp5[13]);
      } catch (tmp29) {
        c3 = tmp;
        throw tmp29;
      }
    }
  }), items4);
  let guildId;
  const skip = obj3.useCallback(() => conjureVoiceChannelPin.resolveVoiceChannelPin(closure_0, { status: "skipped" }), items5);
  if (stateFromStores != null) {
    guildId = stateFromStores.guild_id;
  }
  if (guildId == null) {
    guildId = null;
  }
  return { guildId, channels, selected, setPicked: setPicked[1], pinning, failed, pin, skip };
}