// discord_app/modules/forwarding/ForwardDestinationUtils.tsx
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import GlobalUtils from "../../utils/GlobalUtils.tsx";
import StickersUtils from "../stickers/StickersUtils.tsx";
import SlowmodeUtils from "../chat/SlowmodeUtils.tsx";
import ForwardAgeRestrictedDestinationsExperimentDefault from "ForwardAgeRestrictedDestinationsExperiment.tsx";
import react from "../../../_runtime/00019_react.js";
import StickersStore from "../stickers/StickersStore.tsx";
import ChannelRecord from "../../records/ChannelRecord.tsx";
import ChannelStore from "../../stores/ChannelStore.tsx";
import PermissionStore from "../../stores/PermissionStore.tsx";
import RelationshipStore from "../../stores/RelationshipStore.tsx";
import UserStore from "../../stores/UserStore.tsx";
import Constants from "../../Constants.tsx";
import ReactCompilerGating_mod from "../react_compiler/ReactCompilerGating.tsx";
import size from "../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require, id, nickname, user;

let closure_12;
let hasOwnProperty;
let map1;
let metroImportDefault;
let metroRequire;
({
  ChannelRecordBase: hasOwnProperty,
  isGuildChannelType: metroRequire,
  createChannelRecord: metroImportDefault,
} = ChannelRecord);
({ MessageFlags: closure_12, Permissions: map1 } = Constants);
let ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arr) => {
      let closure_0;
      let tmp11;
      let tmp4;
      let tmp6;
      let tmp8;
      let tmp9;
      const obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] !== arr) {
        const mapped = arr.map(tmp(10711).getChannelIdFromDestinationId);
        const found = mapped.find(tmp(1375).isNotNullish);
        cResult[0] = arr;
        cResult[1] = found;
        tmp4 = found;
      } else {
        tmp4 = cResult[1];
      }
      _require = tmp4;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[2] = items;
        tmp6 = items;
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[4];
        tmp9 = cResult[5];
      }
      const tmpResult = require("get initialized");
      const stateFromStores = tmpResult.useStateFromStores(tmp6, tmp8, tmp9);
      if (cResult[6] !== stateFromStores) {
        let tmp13 = stateFromStores;
        if (stateFromStores == null) {
          const obj2 = { id: "1", type: require("ChannelTypes").ChannelTypes.DM };
          tmp13 = closure_7(obj2);
        }
        cResult[6] = stateFromStores;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      } else {
        tmp11 = cResult[7];
      }
      return tmp11;
    }
  : (arr) => {
      let found;
      const mapped = arr.map(found(10711).getChannelIdFromDestinationId);
      found = mapped.find(found(1375).isNotNullish);
      let obj = found(504);
      const items = [ChannelStore];
      const items1 = [found];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(found), items1);
      const items2 = [stateFromStores];
      return react.useMemo(() => {
        let tmp = stateFromStores;
        if (stateFromStores == null) {
          const obj = { id: "1", type: ChannelTypes.ChannelTypes.DM };
          tmp = metroImportDefault(obj);
        }
        return tmp;
      }, items2);
    };
ReactCompilerGating = ReactCompilerGating_mod;
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp8;
      let tmp9;
      _require = arg0;
      let obj = require("react");
      const cResult = obj.c(4);
      const tmp = _require;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [UserStore, ChannelStore, RelationshipStore];
        cResult[0] = items;
        first = items;
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
                  const obj2 = closure_1_1(closure_1_2[24]);
                  nickname = obj2.getName(user);
                }
                tmp13 = nickname;
              }
              return tmp13;
            } else {
              channel = channel.getChannel(id);
              let channelName = null;
              if (null != channel) {
                const obj = closure_1_0(closure_1_2[25]);
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
        tmp9 = items1;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
        tmp9 = cResult[3];
      }
      const tmpResult = tmp(504);
      return tmpResult.useStateFromStoresArray(first, tmp8, tmp9);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [UserStore, ChannelStore, RelationshipStore];
      const items1 = [arg0];
      return obj.useStateFromStoresArray(
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
                  const obj2 = closure_1_1(closure_1_2[24]);
                  nickname = obj2.getName(user);
                }
                tmp13 = nickname;
              }
              return tmp13;
            } else {
              channel = channel.getChannel(id);
              let channelName = null;
              if (null != channel) {
                const obj = closure_1_0(closure_1_2[25]);
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
ReactCompilerGating = ReactCompilerGating_mod;
let tmp6 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let closure_0;
      let first;
      let tmp10;
      let tmp13;
      let tmp14;
      let tmp7;
      let tmp8;
      _require = arg0;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(8);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore, PermissionStore];
        cResult[0] = items;
        first = items;
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
            let tmp2 = null != rateLimitPerUser.rateLimitPerUser && rateLimitPerUser.rateLimitPerUser > 0;
            if (tmp2) {
              const obj = closure_1_0(closure_1_2[23]);
              tmp2 = !obj.canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
            }
            return tmp2;
          });
        };
        const items1 = [arg0];
        cResult[1] = arg0;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp8 = items1;
        tmp7 = fn;
      } else {
        tmp7 = cResult[2];
        tmp8 = cResult[3];
      }
      const tmpResult = tmp(504);
      const stateFromStoresArray = tmpResult.useStateFromStoresArray(first, tmp7, tmp8);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const items2 = [UserStore, RelationshipStore];
        cResult[4] = items2;
        tmp10 = items2;
      } else {
        tmp10 = cResult[4];
      }
      if (cResult[5] !== stateFromStoresArray) {
        const fn2 = function p() {
          return stateFromStoresArray.map((item) => {
            const obj = closure_1_0(closure_1_2[25]);
            return obj.computeChannelName(item, closure_1_11, closure_1_10, true);
          });
        };
        const items3 = [stateFromStoresArray];
        cResult[5] = stateFromStoresArray;
        cResult[6] = fn2;
        cResult[7] = items3;
        tmp14 = items3;
        tmp13 = fn2;
      } else {
        tmp13 = cResult[6];
        tmp14 = cResult[7];
      }
      const tmpResult2 = tmp(504);
      return tmpResult2.useStateFromStoresArray(tmp10, tmp13, tmp14);
    }
  : (arg0) => {
      let closure_0;
      _require = arg0;
      let obj = require("get initialized");
      const items = [ChannelStore, PermissionStore];
      const items1 = [arg0];
      const stateFromStoresArray = obj.useStateFromStoresArray(
        items,
        () => {
          const mapped = closure_0.map((type) => {
            channel = null;
            if ("channel" === type.type) {
              channel = channel.getChannel(tmp);
            }
            return channel;
          });
          const found = mapped.filter(GlobalUtils.isNotNullish);
          return found.filter((rateLimitPerUser) => {
            let tmp2 = null != rateLimitPerUser.rateLimitPerUser && rateLimitPerUser.rateLimitPerUser > 0;
            if (tmp2) {
              const obj = closure_1_0(closure_1_2[23]);
              tmp2 = !obj.canBypassSlowmodeHelper(rateLimitPerUser, closure_1_9);
            }
            return tmp2;
          });
        },
        items1,
      );
      const items2 = [UserStore, RelationshipStore];
      const items3 = [stateFromStoresArray];
      const obj2 = require("get initialized");
      return obj2.useStateFromStoresArray(
        items2,
        () =>
          stateFromStoresArray.map((item) => {
            const obj = closure_1_0(closure_1_2[25]);
            return obj.computeChannelName(item, closure_1_11, closure_1_10, true);
          }),
        items3,
      );
    };
function isRatelimitedInChannel(channel, can) {
  let tmp = null != channel.rateLimitPerUser && channel.rateLimitPerUser > 0;
  if (tmp) {
    const obj = SlowmodeUtils;
    tmp = !obj.canBypassSlowmodeHelper(channel, can);
  }
  return tmp;
}
let result = size.fileFinishedImporting("modules/forwarding/ForwardDestinationUtils.tsx");

export const useSelectedDestinationChannel = tmp4;
export const getDestinationIsUnavailable = function getDestinationIsUnavailable(components, channel, type, fn) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  _require = type;
  if (null != fn) {
    const tmp4 = fn(type);
    if (null != tmp4) {
      return tmp4;
    }
  }
  if (null != components) {
    let tmp8 = components.messageSnapshots.length > 0;
    const tmp7 =
      components.components.length > 0 &&
      components.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    if (tmp8) {
      let message = components.messageSnapshots[0].message;
      tmp8 =
        message.components.length > 0 && message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
      const tmp9 =
        message.components.length > 0 && message.components[0].type === require("Server").ComponentType.CHECKPOINT_CARD;
    }
    if (null != channel) {
      let obj = require("AgeGateUtils");
      if (obj.isChannelOrGuildNSFW(channel)) {
        if (type instanceof closure_5) {
          require("AgeGateUtils");
        }
        const obj2 = { label: intl.string(require("intl").t.KgPx1D), lineClamp: 2 };
        intl = tmp13(1126).intl;
        return obj2;
      }
      let flag2 = false;
      if (type instanceof closure_5) {
        flag2 = false;
        const tmp13Result8 = require("AgeGateUtils");
        if (tmp13Result8.isChannelOrGuildNSFW(type)) {
          const currentUser = UserStore.getCurrentUser();
          let nsfwAllowed;
          if (currentUser != null) {
            nsfwAllowed = currentUser.nsfwAllowed;
          }
          const tmp13Result9 = require("AgeVerificationUtils");
          let result = tmp13Result9.shouldShowTiggerPawtect();
          if (result) {
            const tmp13Result10 = require("RegionalFeatureConfigUtils");
            result = tmp13Result10.isFeatureAgeGated(tmp13(5581).AgeGatedFeature.AGE_GATED_SPACES);
          }
          let disableAgeRestrictedDestinations = !(false !== nsfwAllowed && !result);
          if (disableAgeRestrictedDestinations) {
            const obj7 = ForwardAgeRestrictedDestinationsExperimentDefault;
            disableAgeRestrictedDestinations = obj7.getConfig({
              location: "getDestinationIsUnavailable",
            }).disableAgeRestrictedDestinations;
          }
          flag2 = disableAgeRestrictedDestinations;
        }
      }
      if (flag2) {
        const obj3 = { label: intl7.string(require("intl").t.QHrFo6), lineClamp: 2 };
        intl7 = tmp13(1126).intl;
        return obj3;
      } else if (type instanceof closure_5) {
        if (closure_6(type.type)) {
          if (components.attachments.length > 0) {
            if (!PermissionStore.can(constants2.ATTACH_FILES, type)) {
              const obj4 = { label: intl2.string(require("intl").t.P7yvbm) };
              intl2 = tmp13(1126).intl;
              return obj4;
            }
          } else {
            const messageSnapshots = components.messageSnapshots;
          }
          if (components.embeds.length > 0) {
            const tmp13Result11 = require("EmbedUtils");
            if (!tmp13Result11.canEmbedLinks(type, PermissionStore)) {
              const tmp13Result12 = require("EmbedUtils");
              if (!tmp13Result12.shouldStripEmbeds(components)) {
                const obj5 = { label: intl3.string(require("intl").t.Wr4RIX) };
                intl3 = tmp13(1126).intl;
                return obj5;
              }
            }
          } else {
            const messageSnapshots2 = components.messageSnapshots;
          }
          if (tmp7) {
            const tmp13Result13 = require("EmbedUtils");
            if (!tmp13Result13.canEmbedLinks(type, PermissionStore)) {
              const obj6 = { label: intl4.string(require("intl").t.Wr4RIX) };
              intl4 = tmp13(1126).intl;
              return obj6;
            }
          }
          const items = [];
          const messageSnapshots3 = components.messageSnapshots;
          const tmp13Result14 = require("StickersUtils");
          const arraySpreadResult = HermesBuiltin.arraySpread(items, tmp13Result14.getMessageStickers(components), 0);
          HermesBuiltin.arraySpread(
            items,
            messageSnapshots3.flatMap((message) => {
              message = message.message;
              const obj = type(dependencyMap[14]);
              return obj.getMessageStickers(message);
            }),
            arraySpreadResult,
          );
          if (items.length > 0) {
            if (!PermissionStore.can(constants2.USE_EXTERNAL_STICKERS, type)) {
              if (
                items.some((id) => {
                  const stickerById = StickersStore.getStickerById(id.id);
                  let isGuildStickerResult = null != stickerById;
                  if (isGuildStickerResult) {
                    const obj = StickersUtils;
                    isGuildStickerResult = obj.isGuildSticker(stickerById);
                  }
                  if (isGuildStickerResult) {
                    isGuildStickerResult = stickerById.guild_id !== type.guild_id || undefined;
                  }
                  return isGuildStickerResult;
                })
              ) {
                const obj8 = { label: intl5.string(require("intl").t["0Yyrua"]) };
                intl5 = tmp13(1126).intl;
                return obj8;
              }
            }
          }
          if (components.hasFlag(constants.IS_VOICE_MESSAGE)) {
            if (!PermissionStore.can(constants2.SEND_VOICE_MESSAGES, type)) {
              const obj9 = { label: intl6.string(require("intl").t.quj4DY) };
              intl6 = tmp13(1126).intl;
              return obj9;
            }
          } else {
            const messageSnapshots4 = components.messageSnapshots;
          }
        }
      }
    }
  }
};
export { isRatelimitedInChannel };
export const useSelectedDestinationNames = tmp5;
export const useDestinationNamesWithSlowmode = tmp6;
