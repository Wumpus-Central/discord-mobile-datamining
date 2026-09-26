// discord_app/modules/forwarding/ForwardDestinationUtils.tsx
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import StickersUtils from "../stickers/StickersUtils.tsx";
import SlowmodeUtils from "../chat/SlowmodeUtils.tsx";
import ForwardAgeRestrictedDestinationsExperimentDefault from "ForwardAgeRestrictedDestinationsExperiment.tsx";
import noop from "../../../_runtime/metro/00019__.js";
import StickersStore from "../stickers/StickersStore.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";

const require = globalThis.__r;

require = fn;
const ChannelRecord = fn(2049);
({
  ChannelRecordBase: hasOwnProperty,
  isGuildChannelType: metroRequire,
  createChannelRecord: closure_7,
} = ChannelRecord);
const Constants = fn(1074);
({ MessageFlags: closure_12, Permissions: map1 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = function useSelectedDestinationChannel(selectedDestinations) {
  const mapped = selectedDestinations.map(found(10444).getChannelIdFromDestinationId);
  found = mapped.find(found(1370).isNotNullish);
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
          tmp12(5046);
        }
        const obj2 = { label: null, lineClamp: 2 };
        const intl = tmp12(1115).intl;
        obj2.label = intl.string(tmp12(1115).t.KgPx1D);
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
          let result = tmp12(5048).shouldShowTiggerPawtect();
          if (result) {
            result = tmp12(5735).isFeatureAgeGated(tmp12(5736).AgeGatedFeature.AGE_GATED_SPACES);
            const tmp12Result10 = tmp12(5735);
          }
          let tmp19 = !tmp18;
          if (false !== nsfwAllowed) {
            tmp19 = !result;
          }
          let disableAgeRestrictedDestinations = !tmp19;
          if (!tmp19) {
            disableAgeRestrictedDestinations = ForwardAgeRestrictedDestinationsExperimentDefault.getConfig({
              location: "getDestinationIsUnavailable",
            }).disableAgeRestrictedDestinations;
          }
          flag2 = disableAgeRestrictedDestinations;
          const tmp12Result9 = tmp12(5048);
        }
        tmp12Result8 = tmp12(5046);
      }
      if (flag2) {
        const obj3 = { label: null, lineClamp: 2 };
        const intl7 = tmp12(1115).intl;
        obj3.label = intl7.string(tmp12(1115).t.QHrFo6);
        return obj3;
      } else if (tmp2) {
        if (closure_6(type.type)) {
          if (components.attachments.length > 0) {
            if (!PermissionStore.can(constants2.ATTACH_FILES, type)) {
              const obj4 = { label: null };
              const intl2 = tmp12(1115).intl;
              obj4.label = intl2.string(tmp12(1115).t.P7yvbm);
              return obj4;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            if (!tmp12Result11.canEmbedLinks(type, PermissionStore)) {
              if (!tmp12Result12.shouldStripEmbeds(components)) {
                const obj5 = { label: null };
                const intl3 = tmp12(1115).intl;
                obj5.label = intl3.string(tmp12(1115).t.Wr4RIX);
                return obj5;
              }
              tmp12Result12 = tmp12(5196);
            }
            tmp12Result11 = tmp12(5196);
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp6) {
            if (!tmp12Result13.canEmbedLinks(type, PermissionStore)) {
              const obj6 = { label: null };
              const intl4 = tmp12(1115).intl;
              obj6.label = intl4.string(tmp12(1115).t.Wr4RIX);
              return obj6;
            }
            tmp12Result13 = tmp12(5196);
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          const tmp12Result14 = tmp12(5198);
          HermesBuiltin.arraySpread(
            messageSnapshots3.flatMap((message) => type(dependencyMap[12]).getMessageStickers(message.message)),
            HermesBuiltin.arraySpread(tmp12(5198).getMessageStickers(components), 0),
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
                const obj8 = { label: null };
                const intl5 = tmp12(1115).intl;
                obj8.label = intl5.string(tmp12(1115).t["0Yyrua"]);
                return obj8;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!PermissionStore.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj9 = { label: null };
              const intl6 = tmp12(1115).intl;
              obj9.label = intl6.string(tmp12(1115).t.quj4DY);
              return obj9;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
          const arraySpreadResult = HermesBuiltin.arraySpread(tmp12(5198).getMessageStickers(components), 0);
        }
      }
      obj = require("AgeGateUtils");
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
              nickname = closure_1_1(4678).getName(user);
              const obj2 = closure_1_1(4678);
            }
            tmp13 = nickname;
          }
          return tmp13;
        } else {
          channel = channel.getChannel(id);
          let channelName = null;
          if (null != channel) {
            const obj = closure_1_0(4989);
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
          tmp2 = !selectedDestinations(dependencyMap[21]).canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
          const obj = selectedDestinations(dependencyMap[21]);
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
        selectedDestinations(closure_1_2[23]).computeChannelName(item, closure_1_11, closure_1_10, true),
      ),
    items3,
  );
};
