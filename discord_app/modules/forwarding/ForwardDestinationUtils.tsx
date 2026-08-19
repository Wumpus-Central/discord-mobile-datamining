// === Module 7590: useSelectedDestinationChannel ===

// Module 7590 (useSelectedDestinationChannel)
import canBypassSlowmodeHelper from "canBypassSlowmodeHelper" /* 7441 */;
import noop from "noop" /* 19 */;
import loadSavedGuildStickers from "loadSavedGuildStickers" /* 6769 */;
import createChannelRecord from "createChannelRecord" /* 1395 */;
import ensureGuildLoaded from "ensureGuildLoaded" /* 1391 */;
import getUncachedChannelPermissions from "getUncachedChannelPermissions" /* 4021 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = fn;
({ ChannelRecordBase: c5, isGuildChannelType: closure_6, createChannelRecord: error } = createChannelRecord);
({ MessageFlags: closure_12, Permissions: map1 } = ME);
const result = require("obj132").fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  const mapped = selectedDestinations.map(found(7591).getChannelIdFromDestinationId);
  found = mapped.find(found(1370).isNotNullish);
  const items = [closure_8];
  const items1 = [found];
  const stateFromStores = found(589).useStateFromStores(items, () => closure_1_8.getChannel(found), items1);
  const items2 = [stateFromStores];
  return React.useMemo(() => {
    let tmp = stateFromStores;
    if (stateFromStores == null) {
      const obj = { id: "1", type: null };
      obj[1] = found(dependencyMap[11]).ChannelTypes.DM;
      tmp = closure_1_7(obj);
    }
    return tmp;
  }, items2);
};
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(components, channel, type, fn) {
  const _require = type;
  if (null != fn) {
    const tmp2 = fn(type);
    if (null != tmp2) {
      return tmp2;
    }
  }
  if (null != components) {
    let tmp5 = components.components.length > 0;
    if (tmp5) {
      tmp5 = components.components[0].type === _require(1954).ComponentType.CHECKPOINT_CARD;
    }
    let tmp6 = components.messageSnapshots.length > 0;
    if (tmp6) {
      let message = components.messageSnapshots[0].message;
      let tmp7 = message.components.length > 0;
      if (tmp7) {
        tmp7 = message.components[0].type === _require(1954).ComponentType.CHECKPOINT_CARD;
      }
      tmp6 = tmp7;
    }
    if (null != channel) {
      let obj = _require(5252);
      if (obj.isChannelOrGuildNSFW(channel)) {
        if (tmp) {
          let tmp11Result = tmp11(5252);
        }
        obj = { label: null, lineClamp: 2 };
        const intl = tmp11(1236).intl;
        obj[0] = intl.string(tmp11(1236).t.KgPx1D);
        return obj;
      }
      if (tmp) {
        if (callback(type.type)) {
          if (components.attachments.length > 0) {
            if (!closure_9.can(constants2.ATTACH_FILES, type)) {
              obj = { label: null };
              const intl2 = tmp11(1236).intl;
              obj[0] = intl2.string(tmp11(1236).t.P7yvbm);
              return obj;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            tmp11Result = tmp11(4821);
            if (!tmp11Result.canEmbedLinks(type, closure_9)) {
              if (!tmp11Result1.shouldStripEmbeds(components)) {
                obj1 = { label: null };
                const intl3 = tmp11(1236).intl;
                obj1[0] = intl3.string(tmp11(1236).t.Wr4RIX);
                return obj1;
              }
              tmp11Result1 = tmp11(4821);
            }
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp5) {
            if (!tmp11Result2.canEmbedLinks(type, closure_9)) {
              const obj2 = { label: null };
              const intl4 = tmp11(1236).intl;
              obj2[0] = intl4.string(tmp11(1236).t.Wr4RIX);
              return obj2;
            }
            tmp11Result2 = tmp11(4821);
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          let arraySpreadResult = HermesBuiltin.arraySpread(tmp11(4823).getMessageStickers(components), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(messageSnapshots3.flatMap((item, index) => type(table[12]).getMessageStickers(item.message)), arraySpreadResult);
          if (items.length > 0) {
            if (!closure_9.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (items.some((item, index) => {
                const stickerById = closure_1_4.getStickerById(item.id);
                let isGuildStickerResult = null != stickerById;
                if (isGuildStickerResult) {
                  isGuildStickerResult = type(dependencyMap[12]).isGuildSticker(stickerById);
                  const obj = type(dependencyMap[12]);
                }
                if (isGuildStickerResult) {
                  isGuildStickerResult = stickerById.guild_id !== type.guild_id || undefined;
                }
                return isGuildStickerResult;
              })) {
                const obj3 = { label: null };
                const intl5 = tmp11(1236).intl;
                obj3[0] = intl5.string(tmp11(1236).t["0Yyrua"]);
                return obj3;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!closure_9.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj4 = { label: null };
              const intl6 = tmp11(1236).intl;
              obj4[0] = intl6.string(tmp11(1236).t.quj4DY);
              return obj4;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
          const tmp11Result3 = tmp11(4823);
        }
      }
    }
  }
};
export const isRatelimitedInChannel = function isRatelimitedInChannel(channel, closure_1_6) {
  let tmp = null != channel.rateLimitPerUser;
  if (tmp) {
    tmp = channel.rateLimitPerUser > 0;
  }
  if (tmp) {
    tmp = !canBypassSlowmodeHelper.canBypassSlowmodeHelper(channel, closure_1_6);
  }
  return tmp;
};
export const useSelectedDestinationNames = function useSelectedDestinationNames(arg0) {
  const _require = arg0;
  const items = [closure_11, closure_8, closure_10];
  const items1 = [arg0];
  return _require(589).useStateFromStoresArray(items, () => {
    const mapped = lib.map((item, index) => {
      const id = item.id;
      if ("user" === item.type) {
        user = user.getUser(id);
        let tmp13 = null;
        if (null != user) {
          nickname = nickname.getNickname(user.id);
          if (nickname == null) {
            nickname = callback2(4219).getName(user);
            const obj2 = callback2(4219);
          }
          tmp13 = nickname;
        }
        return tmp13;
      } else {
        channel = channel.getChannel(id);
        let channelName = null;
        if (null != channel) {
          const obj = callback(4984);
          channelName = obj.computeChannelName(channel, user, nickname, true);
        }
        return channelName;
      }
    });
    return mapped.filter(lib(dependencyMap[9]).isNotNullish);
  }, items1);
};
export const useDestinationNamesWithSlowmode = function useDestinationNamesWithSlowmode(selectedDestinations) {
  const _require = selectedDestinations;
  const items = [closure_8, closure_9];
  const items1 = [selectedDestinations];
  const stateFromStoresArray = _require(589).useStateFromStoresArray(items, () => {
    const mapped = selectedDestinations.map((item, index) => {
      let channel = null;
      if ("channel" === item.type) {
        channel = channel.getChannel(tmp);
      }
      return channel;
    });
    const found = mapped.filter(selectedDestinations(dependencyMap[9]).isNotNullish);
    return found.filter((item, index) => {
      let tmp2 = null != item.rateLimitPerUser;
      if (tmp2) {
        tmp2 = item.rateLimitPerUser > 0;
      }
      if (tmp2) {
        tmp2 = !callback(table[17]).canBypassSlowmodeHelper(item, closure_9);
        const obj = callback(table[17]);
      }
      return tmp2;
    });
  }, items1);
  let obj = _require(589);
  const items2 = [closure_11, closure_10];
  const items3 = [stateFromStoresArray];
  return _require(589).useStateFromStoresArray(items2, () => stateFromStoresArray.map((item, index) => callback(table[19]).computeChannelName(item, closure_11, closure_10, true)), items3);
};