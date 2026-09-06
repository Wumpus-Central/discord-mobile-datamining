// discord_app/modules/forwarding/ForwardDestinationUtils.tsx
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import StickersUtils from "../stickers/StickersUtils.tsx";
import SlowmodeUtils from "../chat/SlowmodeUtils.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import StickersStore from "../stickers/StickersStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

require = fn;
const ChannelRecord = fn(1961);
({
  ChannelRecordBase: hasOwnProperty,
  isGuildChannelType: metroRequire,
  createChannelRecord: closure_7,
} = ChannelRecord);
const Constants = fn(1074);
({ MessageFlags: closure_12, Permissions: map1 } = Constants);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  const mapped = selectedDestinations.map(found(10981).getChannelIdFromDestinationId);
  found = mapped.find(found(1369).isNotNullish);
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
};
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(components, channel, type, fn) {
  _require = type;
  if (null != fn) {
    const tmp2 = fn(type);
    if (null != tmp2) {
      return tmp2;
    }
  }
  if (null != components) {
    let tmp5 = components.components.length > 0;
    if (tmp5) {
      tmp5 = components.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    }
    let tmp6 = components.messageSnapshots.length > 0;
    if (tmp6) {
      let message = components.messageSnapshots[0].message;
      let tmp7 = message.components.length > 0;
      if (tmp7) {
        tmp7 = message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
      }
      tmp6 = tmp7;
    }
    if (null != channel) {
      let obj = require("AgeGateUtils");
      if (obj.isChannelOrGuildNSFW(channel)) {
        if (tmp) {
          let tmp11Result = tmp11(4771);
        }
        obj = { label: null, lineClamp: 2 };
        const intl = tmp11(1114).intl;
        obj.label = intl.string(tmp11(1114).t.KgPx1D);
        return obj;
      }
      if (tmp) {
        if (closure_6(type.type)) {
          if (components.attachments.length > 0) {
            if (!PermissionStore.can(constants2.ATTACH_FILES, type)) {
              obj = { label: null };
              const intl2 = tmp11(1114).intl;
              obj.label = intl2.string(tmp11(1114).t.P7yvbm);
              return obj;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            tmp11Result = tmp11(4897);
            if (!tmp11Result.canEmbedLinks(type, PermissionStore)) {
              if (!tmp11Result1.shouldStripEmbeds(components)) {
                const obj1 = { label: null };
                const intl3 = tmp11(1114).intl;
                obj1.label = intl3.string(tmp11(1114).t.Wr4RIX);
                return obj1;
              }
              tmp11Result1 = tmp11(4897);
            }
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp5) {
            if (!tmp11Result2.canEmbedLinks(type, PermissionStore)) {
              const obj2 = { label: null };
              const intl4 = tmp11(1114).intl;
              obj2.label = intl4.string(tmp11(1114).t.Wr4RIX);
              return obj2;
            }
            tmp11Result2 = tmp11(4897);
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          let arraySpreadResult = HermesBuiltin.arraySpread(tmp11(4899).getMessageStickers(components), 0);
          arraySpreadResult = HermesBuiltin.arraySpread(
            messageSnapshots3.flatMap((message) => type(dependencyMap[12]).getMessageStickers(message.message)),
            arraySpreadResult,
          );
          if (items.length > 0) {
            if (!PermissionStore.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (
                items.some((id) => {
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
                })
              ) {
                const obj3 = { label: null };
                const intl5 = tmp11(1114).intl;
                obj3.label = intl5.string(tmp11(1114).t["0Yyrua"]);
                return obj3;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!PermissionStore.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj4 = { label: null };
              const intl6 = tmp11(1114).intl;
              obj4.label = intl6.string(tmp11(1114).t.quj4DY);
              return obj4;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
          const tmp11Result3 = tmp11(4899);
        }
      }
    }
  }
};
export const isRatelimitedInChannel = function isRatelimitedInChannel(rateLimitPerUser, can) {
  let tmp = null != rateLimitPerUser.rateLimitPerUser;
  if (tmp) {
    tmp = rateLimitPerUser.rateLimitPerUser > 0;
  }
  if (tmp) {
    tmp = !SlowmodeUtils.canBypassSlowmodeHelper(rateLimitPerUser, can);
  }
  return tmp;
};
export const useSelectedDestinationNames = function useSelectedDestinationNames(arg0) {
  _require = arg0;
  const items = [UserStore, ChannelStore, RelationshipStore];
  const items1 = [arg0];
  return require("initialize").useStateFromStoresArray(
    items,
    () => {
      const mapped = closure_0.map((id) => {
        id = id.id;
        if ("user" === id.type) {
          user = user.getUser(id);
          let tmp13 = null;
          if (null != user) {
            nickname = nickname.getNickname(user.id);
            if (nickname == null) {
              nickname = closure_1_1(4404).getName(user);
              const obj2 = closure_1_1(4404);
            }
            tmp13 = nickname;
          }
          return tmp13;
        } else {
          channel = channel.getChannel(id);
          let channelName = null;
          if (null != channel) {
            const obj = closure_1_0(4713);
            channelName = obj.computeChannelName(channel, user, nickname, true);
          }
          return channelName;
        }
      });
      return mapped.filter(GlobalUtils.isNotNullish);
    },
    items1,
  );
};
export const useDestinationNamesWithSlowmode = function useDestinationNamesWithSlowmode(selectedDestinations) {
  _require = selectedDestinations;
  const items = [ChannelStore, PermissionStore];
  const items1 = [selectedDestinations];
  const stateFromStoresArray = require("initialize").useStateFromStoresArray(
    items,
    () => {
      const mapped = selectedDestinations.map((type) => {
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
          tmp2 = !selectedDestinations(dependencyMap[17]).canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
          const obj = selectedDestinations(dependencyMap[17]);
        }
        return tmp2;
      });
    },
    items1,
  );
  let obj = require("initialize");
  const items2 = [UserStore, RelationshipStore];
  const items3 = [stateFromStoresArray];
  return require("initialize").useStateFromStoresArray(
    items2,
    () =>
      stateFromStoresArray.map((item) =>
        selectedDestinations(closure_1_2[19]).computeChannelName(item, closure_1_11, closure_1_10, true),
      ),
    items3,
  );
};
