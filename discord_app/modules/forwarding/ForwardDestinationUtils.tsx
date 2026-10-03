// === Module 11310: ForwardDestinationUtils ===

// Module 11310 (ForwardDestinationUtils)
import ChannelTypes from "ChannelTypes" /* 1106 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import StickersUtils from "StickersUtils" /* 5428 */;
import SlowmodeUtils from "SlowmodeUtils" /* 7172 */;
import ForwardAgeRestrictedDestinationsExperimentDefault from "ForwardAgeRestrictedDestinationsExperiment" /* 11311 */;
import noop from "module_19" /* 19 */;
import StickersStore from "StickersStore" /* 5687 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4509 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;
import UserStore from "UserStore" /* 1377 */;

const require = globalThis.__r;

require = fn;
const ChannelRecord = fn(2055);
({ ChannelRecordBase: hasOwnProperty, isGuildChannelType: metroRequire, createChannelRecord: closure_7 } = ChannelRecord);
const Constants = fn(1085);
({ MessageFlags: closure_12, Permissions: map1 } = Constants);
fn(558);
let ReactCompilerGating = fn(558);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((arr) => {
  const cResult = require("c").c(8);
  if (cResult[0] !== arr) {
    const mapped = arr.map(tmp(10711).getChannelIdFromDestinationId);
    const found = mapped.find(tmp(1375).isNotNullish);
    cResult[0] = arr;
    cResult[1] = found;
    let tmp4 = found;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[2] = items;
    let tmp6 = items;
  } else {
    tmp6 = cResult[2];
  }
  if (cResult[3] !== tmp4) {
    const fn = function o() {
      return ChannelStore.getChannel(closure_0);
    };
    const items1 = [tmp4];
    cResult[3] = tmp4;
    cResult[4] = fn;
    cResult[5] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[4];
    tmp9 = cResult[5];
  }
  const obj = require("c");
  const stateFromStores = require("initialize").useStateFromStores(tmp6, tmp8, tmp9);
  if (cResult[6] !== stateFromStores) {
    let tmp13 = stateFromStores;
    if (stateFromStores == null) {
      const obj2 = { id: "1", type: tmp(1106).ChannelTypes.DM };
      tmp13 = closure_7(obj2);
    }
    cResult[6] = stateFromStores;
    cResult[7] = tmp13;
    let tmp11 = tmp13;
  } else {
    tmp11 = cResult[7];
  }
  return tmp11;
}) : ((arr) => {
  const mapped = arr.map(found(10711).getChannelIdFromDestinationId);
  found = mapped.find(found(1375).isNotNullish);
  const items = [ChannelStore];
  const items1 = [found];
  const stateFromStores = found(504).useStateFromStores(items, () => ChannelStore.getChannel(found), items1);
  const items2 = [stateFromStores];
  return noop.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      const obj = { id: "1", type: ChannelTypes.ChannelTypes.DM };
      tmp = React5(obj);
    }
    return tmp;
  }, items2);
});
ReactCompilerGating = fn(558);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(4);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore, ChannelStore, RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const mapped = closure_0.map((id) => {
        id = id.id;
        if ("user" === id.type) {
          user = user.getUser(id);
          let tmp13 = null;
          if (null != user) {
            nickname = nickname.getNickname(user.id);
            if (nickname == null) {
              nickname = closure_1_1(4722).getName(user);
              const obj2 = closure_1_1(4722);
            }
            tmp13 = nickname;
          }
          return tmp13;
        } else {
          channel = channel.getChannel(id);
          let channelName = null;
          if (null != channel) {
            const obj = closure_1_0(5043);
            channelName = obj.computeChannelName(channel, user, nickname, true);
          }
          return channelName;
        }
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    };
    const items1 = [arg0];
    cResult[1] = arg0;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp9 = items1;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
    tmp9 = cResult[3];
  }
  let obj = require("c");
  return require("initialize").useStateFromStoresArray(first, tmp8, tmp9);
}) : ((arg0) => {
  _require = arg0;
  const items = [UserStore, ChannelStore, RelationshipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(items, () => {
    const mapped = closure_0.map((id) => {
      id = id.id;
      if ("user" === id.type) {
        user = user.getUser(id);
        let tmp13 = null;
        if (null != user) {
          nickname = nickname.getNickname(user.id);
          if (nickname == null) {
            nickname = closure_1_1(4722).getName(user);
            const obj2 = closure_1_1(4722);
          }
          tmp13 = nickname;
        }
        return tmp13;
      } else {
        channel = channel.getChannel(id);
        let channelName = null;
        if (null != channel) {
          const obj = closure_1_0(5043);
          channelName = obj.computeChannelName(channel, user, nickname, true);
        }
        return channelName;
      }
    });
    return mapped.filter(GlobalUtils.isNotNullish);
  }, items1);
});
function isRatelimitedInChannel(rateLimitPerUser, can) {
  let tmp = null != rateLimitPerUser.rateLimitPerUser;
  if (tmp) {
    tmp = rateLimitPerUser.rateLimitPerUser > 0;
  }
  if (tmp) {
    tmp = !SlowmodeUtils.canBypassSlowmodeHelper(rateLimitPerUser, can);
  }
  return tmp;
}
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = tmp4;
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(components, channel, type, fn) {
  _require = type;
  if (null != fn) {
    const tmp3 = fn(type);
    if (null != tmp3) {
      return tmp3;
    }
  }
  if (null != components) {
    let tmp6 = components.components.length > 0;
    if (tmp6) {
      tmp6 = components.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    }
    let tmp7 = components.messageSnapshots.length > 0;
    if (tmp7) {
      let message = components.messageSnapshots[0].message;
      let tmp8 = message.components.length > 0;
      if (tmp8) {
        tmp8 = message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
      }
      tmp7 = tmp8;
    }
    if (null != channel) {
      if (obj.isChannelOrGuildNSFW(channel)) {
        if (tmp2) {
          tmp12(5100);
        }
        const obj2 = { label: null, lineClamp: 2 };
        const intl = tmp12(1126).intl;
        obj2.label = intl.string(tmp12(1126).t.KgPx1D);
        return obj2;
      }
      let flag2 = false;
      if (type instanceof closure_5) {
        flag2 = false;
        if (tmp12Result8.isChannelOrGuildNSFW(type)) {
          const currentUser = UserStore.getCurrentUser();
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          let result = tmp12(5102).shouldShowTiggerPawtect();
          if (result) {
            result = tmp12(5580).isFeatureAgeGated(tmp12(5581).AgeGatedFeature.AGE_GATED_SPACES);
            const tmp12Result10 = tmp12(5580);
          }
          let tmp19 = !tmp18;
          if (false !== nsfwAllowed) {
            tmp19 = !result;
          }
          let disableAgeRestrictedDestinations = !tmp19;
          if (!tmp19) {
            disableAgeRestrictedDestinations = ForwardAgeRestrictedDestinationsExperimentDefault.getConfig({ location: "getDestinationIsUnavailable" }).disableAgeRestrictedDestinations;
          }
          flag2 = disableAgeRestrictedDestinations;
          const tmp12Result9 = tmp12(5102);
        }
        tmp12Result8 = tmp12(5100);
      }
      if (flag2) {
        const obj3 = { label: null, lineClamp: 2 };
        const intl7 = tmp12(1126).intl;
        obj3.label = intl7.string(tmp12(1126).t.QHrFo6);
        return obj3;
      } else if (tmp2) {
        if (closure_6(type.type)) {
          if (components.attachments.length > 0) {
            if (!PermissionStore.can(constants2.ATTACH_FILES, type)) {
              const obj4 = { label: null };
              const intl2 = tmp12(1126).intl;
              obj4.label = intl2.string(tmp12(1126).t.P7yvbm);
              return obj4;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            if (!tmp12Result11.canEmbedLinks(type, PermissionStore)) {
              if (!tmp12Result12.shouldStripEmbeds(components)) {
                const obj5 = { label: null };
                const intl3 = tmp12(1126).intl;
                obj5.label = intl3.string(tmp12(1126).t.Wr4RIX);
                return obj5;
              }
              tmp12Result12 = tmp12(5426);
            }
            tmp12Result11 = tmp12(5426);
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp6) {
            if (!tmp12Result13.canEmbedLinks(type, PermissionStore)) {
              const obj6 = { label: null };
              const intl4 = tmp12(1126).intl;
              obj6.label = intl4.string(tmp12(1126).t.Wr4RIX);
              return obj6;
            }
            tmp12Result13 = tmp12(5426);
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          const tmp12Result14 = tmp12(5428);
          HermesBuiltin.arraySpread(messageSnapshots3.flatMap((message) => type(dependencyMap[14]).getMessageStickers(message.message)), HermesBuiltin.arraySpread(tmp12(5428).getMessageStickers(components), 0));
          if (items.length > 0) {
            if (!PermissionStore.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (items.some((id) => {
                const stickerById = StickersStore.getStickerById(id.id);
                let isGuildStickerResult = null != stickerById;
                if (isGuildStickerResult) {
                  isGuildStickerResult = StickersUtils.isGuildSticker(stickerById);
                }
                if (isGuildStickerResult) {
                  isGuildStickerResult = stickerById.guild_id !== type.guild_id || undefined;
                  const tmp6 = stickerById.guild_id !== type.guild_id || undefined;
                }
                return isGuildStickerResult;
              })) {
                const obj8 = { label: null };
                const intl5 = tmp12(1126).intl;
                obj8.label = intl5.string(tmp12(1126).t["0Yyrua"]);
                return obj8;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!PermissionStore.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj9 = { label: null };
              const intl6 = tmp12(1126).intl;
              obj9.label = intl6.string(tmp12(1126).t.quj4DY);
              return obj9;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
          const arraySpreadResult = HermesBuiltin.arraySpread(tmp12(5428).getMessageStickers(components), 0);
        }
      }
      obj = require("AgeGateUtils");
    }
  }
};
export { isRatelimitedInChannel };
export const useSelectedDestinationNames = tmp5;
export const useDestinationNamesWithSlowmode = ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  _require = arg0;
  const cResult = require("c").c(8);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore, PermissionStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== arg0) {
    const fn = function s() {
      const mapped = closure_0.map((type) => {
        channel = null;
        if ("channel" === type.type) {
          channel = channel.getChannel(tmp);
        }
        return channel;
      });
      const found = mapped.filter(GlobalUtils.isNotNullish);
      return found.filter((rateLimitPerUser) => {
        let tmp2 = null != rateLimitPerUser.rateLimitPerUser;
        if (tmp2) {
          tmp2 = rateLimitPerUser.rateLimitPerUser > 0;
        }
        if (tmp2) {
          tmp2 = !closure_1_0(dependencyMap[23]).canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
          const obj = closure_1_0(dependencyMap[23]);
        }
        return tmp2;
      });
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
  let obj = require("c");
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(first, tmp7, tmp8);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [UserStore, RelationshipStore];
    cResult[4] = items2;
    let tmp10 = items2;
  } else {
    tmp10 = cResult[4];
  }
  if (cResult[5] !== stateFromStoresArray) {
    const fn2 = function p() {
      return stateFromStoresArray.map((item) => closure_1_0(closure_1_2[25]).computeChannelName(item, closure_1_11, closure_1_10, true));
    };
    const items3 = [stateFromStoresArray];
    cResult[5] = stateFromStoresArray;
    cResult[6] = fn2;
    cResult[7] = items3;
    let tmp14 = items3;
    let tmp13 = fn2;
  } else {
    tmp13 = cResult[6];
    tmp14 = cResult[7];
  }
  const tmpResult = require("initialize");
  return require("initialize").useStateFromStoresArray(tmp10, tmp13, tmp14);
}) : ((arg0) => {
  _require = arg0;
  const items = [ChannelStore, PermissionStore];
  const items1 = [arg0];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(items, () => {
    const mapped = closure_0.map((type) => {
      channel = null;
      if ("channel" === type.type) {
        channel = channel.getChannel(tmp);
      }
      return channel;
    });
    const found = mapped.filter(GlobalUtils.isNotNullish);
    return found.filter((rateLimitPerUser) => {
      let tmp2 = null != rateLimitPerUser.rateLimitPerUser;
      if (tmp2) {
        tmp2 = rateLimitPerUser.rateLimitPerUser > 0;
      }
      if (tmp2) {
        tmp2 = !closure_1_0(dependencyMap[23]).canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
        const obj = closure_1_0(dependencyMap[23]);
      }
      return tmp2;
    });
  }, items1);
  let obj = require("initialize");
  const items2 = [UserStore, RelationshipStore];
  const items3 = [stateFromStoresArray];
  return require("initialize").useStateFromStoresArray(items2, () => stateFromStoresArray.map((item) => closure_1_0(closure_1_2[25]).computeChannelName(item, closure_1_11, closure_1_10, true)), items3);
});