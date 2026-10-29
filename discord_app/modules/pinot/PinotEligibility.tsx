// discord_app/modules/pinot/PinotEligibility.tsx
import Constants from "../../Constants.tsx";
import ChannelTypes from "../../../discord_common/js/shared/shared-constants/ChannelTypes.tsx";
import PermissionUtilsAll from "../../utils/PermissionUtils.tsx";
import PinotTypes from "PinotTypes.tsx";
import PinotConstants from "PinotConstants.tsx";
import size from "../../../_runtime/metro/00002__.js";

function isChannelPinotPromotableForFeature(id, guild_id, guildFeature) {
  let tmp = guild_id.guild_id === id.id;
  if (tmp) {
    const features = id.features;
    let tmp3 = !features.has(guildFeature.guildFeature);
    if (tmp3) {
      let str = "channel_type";
      if (set.has(guild_id.type)) {
        let str2 = "nsfw";
        if (!guild_id.isNSFW()) {
          let tmp8 = "not_public";
          if (obj.canEveryoneRole(Permissions.VIEW_CHANNEL, guild_id)) {
            tmp8 = "not_public";
            if (tmp5Result.canEveryoneRole(Permissions.READ_MESSAGE_HISTORY, guild_id)) {
              tmp8 = null;
            }
            tmp5Result = PermissionUtilsAll;
          }
          str2 = tmp8;
          obj = PermissionUtilsAll;
        }
        str = str2;
      }
      tmp3 = null == str && !guild_id.hasFlag(guildFeature.channelFlag);
      const tmp10 = null == str && !guild_id.hasFlag(guildFeature.channelFlag);
    }
    tmp = tmp3;
  }
  return tmp;
}
({ PinotChannelFlags, PinotGuildFeatures } = PinotConstants);
const Permissions = Constants.Permissions;
let obj = {};
obj[PinotTypes.PinotFeatureKey.CHANNEL_SUMMARIES] = {
  key: PinotTypes.PinotFeatureKey.CHANNEL_SUMMARIES,
  guildFeature: PinotGuildFeatures.SWP_CHANNEL_SUMMARIES_DISABLED,
  channelFlag: PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED,
};
const obj2 = {
  key: PinotTypes.PinotFeatureKey.CHANNEL_SUMMARIES,
  guildFeature: PinotGuildFeatures.SWP_CHANNEL_SUMMARIES_DISABLED,
  channelFlag: PinotChannelFlags.SWP_CHANNEL_SUMMARIES_EXCLUDED,
};
obj[PinotTypes.PinotFeatureKey.CHANNEL_MESSAGES] = {
  key: PinotTypes.PinotFeatureKey.CHANNEL_MESSAGES,
  guildFeature: PinotGuildFeatures.SWP_CHANNEL_MESSAGES_DISABLED,
  channelFlag: PinotChannelFlags.SWP_CHANNEL_MESSAGES_EXCLUDED,
};
const frozen = Object.freeze(obj);
const items = [
  ChannelTypes.ChannelTypes.GUILD_TEXT,
  ChannelTypes.ChannelTypes.GUILD_ANNOUNCEMENT,
  ChannelTypes.ChannelTypes.GUILD_FORUM,
];
const set = new Set(items);
const result = size.fileFinishedImporting("modules/pinot/PinotEligibility.tsx");

export const PINOT_FEATURES = frozen;
export const PINOT_CHANNEL_TYPES = set;
export function getPinotIneligibleReason(type) {
  let str = "channel_type";
  if (set.has(type.type)) {
    let str2 = "nsfw";
    if (!type.isNSFW()) {
      let tmp4 = "not_public";
      if (obj.canEveryoneRole(Permissions.VIEW_CHANNEL, type)) {
        tmp4 = "not_public";
        if (tmpResult.canEveryoneRole(Permissions.READ_MESSAGE_HISTORY, type)) {
          tmp4 = null;
        }
        tmpResult = PermissionUtilsAll;
      }
      str2 = tmp4;
      obj = PermissionUtilsAll;
    }
    str = str2;
  }
  return str;
}
export function isPinotFeatureEnabled(features, guildFeature) {
  features = features.features;
  return !features.has(guildFeature.guildFeature);
}
export { isChannelPinotPromotableForFeature };
export function isChannelPinotPromotable(guild, channel) {
  closure_0 = guild;
  closure_1 = channel;
  let someResult = null != guild && null != channel;
  if (someResult) {
    const _Object = Object;
    const values = Object.values(frozen);
    someResult = values.some((item) => isChannelPinotPromotableForFeature(closure_0, closure_1, item));
  }
  return someResult;
}
