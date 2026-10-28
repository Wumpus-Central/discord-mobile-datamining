// === Module 12412: useConjureVoiceChannelPin ===

// Module 12412 (useConjureVoiceChannelPin)
import useChannelName from "useChannelName" /* 5640 */;
import conjureVoiceChannelPin from "conjureVoiceChannelPin" /* 10841 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 4856 */;
import GuildChannelStore from "GuildChannelStore" /* 4934 */;
import PermissionStore from "PermissionStore" /* 4936 */;
import RelationshipStore from "RelationshipStore" /* 4946 */;
import UserStore from "UserStore" /* 1389 */;
import ConjureProjectStore from "ConjureProjectStore" /* 6808 */;
import ConjureVoiceChannelPinStore from "ConjureVoiceChannelPinStore" /* 10753 */;

const require = globalThis.__r;

require = fn;
const GUILD_VOCAL_CHANNELS_KEY = fn(4934).GUILD_VOCAL_CHANNELS_KEY;
const Constants = fn(1084);
({ ChannelTypes: map1, Permissions: closure_14 } = Constants);
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjurePinnableVoiceChannels(arg0) {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let items = [GuildChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
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
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp8 = items1;
    let tmp7 = fn;
  } else {
    tmp7 = cResult[2];
    tmp8 = cResult[3];
  }
  const obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
}) : (function useConjurePinnableVoiceChannels(arg0) {
  _require = arg0;
  let items = [GuildChannelStore, PermissionStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
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
  }, items1);
});
fn(558);
ReactCompilerGating = fn(558);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureVoiceChannelPinOutcome(arg0) {
  _require = arg0;
  const cResult = require("c").c(10);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureVoiceChannelPinStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function l() {
      return ConjureVoiceChannelPinStore.getOutcome(closure_0);
    };
    cResult[1] = arg0;
    cResult[2] = fn;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
  }
  let obj = require("c");
  stateFromStores = require("initialize").useStateFromStores(first, tmp6);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [ChannelStore, UserStore, RelationshipStore];
    cResult[3] = items1;
    let tmp8 = items1;
  } else {
    tmp8 = cResult[3];
  }
  if (cResult[4] !== stateFromStores) {
    const fn2 = function c() {
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
    };
    const items2 = [stateFromStores];
    cResult[4] = stateFromStores;
    cResult[5] = fn2;
    cResult[6] = items2;
    let tmp13 = items2;
    let tmp12 = fn2;
  } else {
    tmp12 = cResult[5];
    tmp13 = cResult[6];
  }
  const tmpResult = require("initialize");
  const stateFromStores1 = require("initialize").useStateFromStores(tmp8, tmp12, tmp13);
  if (cResult[7] === stateFromStores) {
    if (cResult[8] === stateFromStores1) {
      let tmp15 = cResult[9];
    }
    return tmp15;
  }
  const obj2 = { outcome: stateFromStores, pinnedName: stateFromStores1 };
  cResult[7] = stateFromStores;
  cResult[8] = stateFromStores1;
  cResult[9] = obj2;
  tmp15 = obj2;
  const tmpResult2 = require("initialize");
}) : (function useConjureVoiceChannelPinOutcome(arg0) {
  _require = arg0;
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
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/voice_channel_pin/useConjureVoiceChannelPin.tsx");

export const useConjureVoiceChannelPinOutcome = tmp3;
export const useConjureVoiceChannelPinForm = ReactCompilerGating.isReactCompilerEnabled() ? (function useConjureVoiceChannelPinForm(arg0) {
  _require = arg0;
  const cResult = require("c").c(21);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ConjureProjectStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      return ConjureProjectStore.getProject(closure_0);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp7 = items1;
    let tmp6 = fn;
  } else {
    tmp6 = cResult[2];
    tmp7 = cResult[3];
  }
  let obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(first, tmp6, tmp7);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const tmp9Result = closure_15(guild_id);
  const tmp11 = _slicedToArray(noop.useState(null), 2);
  first1 = tmp11[0];
  const tmpResult = require("initialize");
  [tmp14, asyncGeneratorStep] = noop.useState(false);
  const tmp13 = _slicedToArray(noop.useState(false), 2);
  [tmp16, _slicedToArray] = noop.useState(false);
  if (cResult[4] === tmp9Result) {
    if (cResult[5] === first1) {
      let tmp17 = cResult[6];
    }
    noop = tmp17;
    let application_id;
    if (stateFromStores != null) {
      application_id = stateFromStores.application_id;
    }
    if (cResult[7] === application_id) {
      if (cResult[8] === arg0) {
        if (cResult[9] === tmp17) {
          let tmp20 = cResult[10];
        }
        if (cResult[11] !== arg0) {
          class D {
            constructor() {
              obj = closure_0(closure_1[15]);
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
          cResult[11] = arg0;
          cResult[12] = D;
        } else {
          class D {
            constructor() {
              obj = closure_0(closure_1[15]);
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (stateFromStores != null) {
          class D {
            constructor() {
              obj = closure_0(closure_1[15]);
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (undefined == null) {
          class D {
            constructor() {
              obj = closure_0(closure_1[15]);
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        if (cResult[13] === tmp9Result) {
          class D {
            constructor() {
              obj = closure_0(closure_1[15]);
              return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
            }
          }
        }
        let obj2 = { guildId: undefined, channels: tmp9Result, selected: tmp17, setPicked: tmp11[1], pinning: tmp14, failed: tmp16, pin: tmp20, skip: D };
        cResult[13] = tmp9Result;
        cResult[14] = tmp16;
        cResult[15] = tmp20;
        cResult[16] = tmp14;
        cResult[17] = tmp17;
        cResult[18] = D;
        cResult[19] = undefined;
        cResult[20] = obj2;
      }
    }
    _require = asyncGeneratorStep(async () => {
      if (v3 === 2) {
        v3 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp4 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        try {
          v3 = 2;
          if (0 === v1) {
            if (arg0 === 1) {
              v3 = 3;
              throw value;
            } else if (arg0 === 2) {
              v3 = 3;
              const obj4 = { value, done: true };
              return obj4;
            } else {
              closure_1 = tmp2;
              closure_128_0 = undefined;
              let tmp10 = null;
              if (null != user) {
                if (tmp10 != application_id) {
                  v1(true);
                  v3(false);
                  v1 = 1;
                  v3 = 1;
                  const obj5 = { value: tmp5(first1[15]).pinVoiceChannel(user.id, tmp14), done: false };
                  return obj5;
                }
              }
              v3 = 3;
            }
          } else if (arg0 === 1) {
            v3 = 3;
            throw value;
          } else if (arg0 === 2) {
            v3 = 3;
            const obj6 = { value, done: true };
            return obj6;
          } else {
            closure_128_0 = value;
            v1(false);
            if (!closure_128_0) {
              v3(true);
            }
          }
          tmp10 = tmp5(first1[15]);
          const obj = { status: "pinned", channelId: user.id };
          const voiceChannelPin = tmp10.resolveVoiceChannelPin(tmp5, obj);
        } catch (tmp22) {
          v3 = tmp;
          throw tmp22;
        }
      }
    });
    function t4() {
      const self = this;
      const apply = closure_0.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
    cResult[7] = application_id;
    cResult[8] = arg0;
    cResult[9] = tmp17;
    cResult[10] = t4;
    tmp20 = t4;
  }
  const found = tmp9Result.find((id) => id.id === first1);
  if (found == null) {
    class D {
      constructor() {
        obj = closure_0(closure_1[15]);
        return obj.resolveVoiceChannelPin(closure_0, { status: "skipped" });
      }
    }
  }
  cResult[4] = tmp9Result;
  cResult[5] = first1;
  cResult[6] = found;
  tmp17 = found;
  const tmp15 = _slicedToArray(noop.useState(false), 2);
}) : (function useConjureVoiceChannelPinForm(arg0) {
  _require = arg0;
  const items = [ConjureProjectStore];
  const items1 = [arg0];
  const stateFromStores = require("initialize").useStateFromStores(items, () => ConjureProjectStore.getProject(closure_0), items1);
  let guild_id;
  if (stateFromStores != null) {
    guild_id = stateFromStores.guild_id;
  }
  if (guild_id == null) {
    guild_id = null;
  }
  const channels = closure_15(guild_id);
  const setPicked = _slicedToArray(selected.useState(null), 2);
  dependencyMap = setPicked[0];
  let obj = require("initialize");
  [tmp6, asyncGeneratorStep] = selected.useState(false);
  const tmp5 = _slicedToArray(selected.useState(false), 2);
  [tmp8, _slicedToArray] = selected.useState(false);
  selected = channels.find((id) => id.id === closure_1);
  if (selected == null) {
    selected = null;
  }
  let application_id;
  if (stateFromStores != null) {
    application_id = stateFromStores.application_id;
  }
  const items2 = [application_id, arg0, selected];
  const items3 = [arg0];
  const pin = obj2.useCallback(asyncGeneratorStep(async () => {
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
        return { value: "IconComponent", done: null };
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
                const obj5 = { value: tmp2(tmp5[15]).pinVoiceChannel(selected.id, tmp21), done: false };
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
        prop = tmp2(tmp5[15]).resolveVoiceChannelPin;
        const obj = { status: "pinned", channelId: closure_129_4.id };
        prop(closure_129_0, obj);
        const tmp17 = tmp2(tmp5[15]);
      } catch (tmp29) {
        c3 = tmp;
        throw tmp29;
      }
    }
  }), items2);
  let guildId;
  const skip = obj2.useCallback(() => conjureVoiceChannelPin.resolveVoiceChannelPin(closure_0, { status: "skipped" }), items3);
  if (stateFromStores != null) {
    guildId = stateFromStores.guild_id;
  }
  if (guildId == null) {
    guildId = null;
  }
  return { guildId, channels, selected, setPicked: setPicked[1], pinning, failed, pin, skip };
});