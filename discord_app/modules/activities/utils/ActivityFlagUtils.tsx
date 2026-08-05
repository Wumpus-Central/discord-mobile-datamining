// discord_app/modules/activities/utils/ActivityFlagUtils.tsx
import ME from "ME";
import { Storage } from "../../../../discord_common/js/packages/storage/Storage.tsx";
import { hasFlag } from "../../../../discord_common/js/shared/utils/FlagUtils.tsx";
import { explicitContentFromProto } from "../../user_settings/UserSettings.tsx";
import { isEmbeddedActivity } from "isEmbeddedActivity.tsx";

let c3;
let c4;
({ ActivityFlags: c3, ActivityPartyPrivacy: c4 } = ME);
const result = require("Storage").fileFinishedImporting("modules/activities/utils/ActivityFlagUtils.tsx");

export const computeActivityFlags = function computeActivityFlags(activity, flag, arg2, canLaunchFrameResult, privacy) {
  if (flag === undefined) {
    flag = false;
  }
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let flag3 = canLaunchFrameResult;
  if (canLaunchFrameResult === undefined) {
    flag3 = false;
  }
  let PRIVATE = privacy;
  if (privacy === undefined) {
    PRIVATE = constants2.PRIVATE;
  }
  const secrets = activity.secrets;
  let num = 0;
  if (flag) {
    num = constants.INSTANCE | 0;
  }
  let join;
  if (secrets != null) {
    join = secrets.join;
  }
  let tmp4 = num;
  if (null != join) {
    tmp4 = num | constants.JOIN;
  }
  let tmp6 = tmp4;
  if (flag3) {
    tmp6 = tmp4 | constants.CONTEXTLESS;
  }
  if (flag2) {
    const AllowActivityPartyPrivacyFriends2 = explicitContentFromProto /* explicitContentFromProto */.AllowActivityPartyPrivacyFriends;
    const setting = AllowActivityPartyPrivacyFriends2.getSetting();
    const AllowActivityPartyPrivacyVoiceChannel2 = explicitContentFromProto /* explicitContentFromProto */.AllowActivityPartyPrivacyVoiceChannel;
    const PARTY_PRIVACY_FRIENDS2 = constants.PARTY_PRIVACY_FRIENDS;
    const setting1 = AllowActivityPartyPrivacyVoiceChannel2.getSetting();
    if (setting) {
      let tmp28 = tmp23 | PARTY_PRIVACY_FRIENDS2;
    } else {
      tmp28 = tmp23 & ~PARTY_PRIVACY_FRIENDS2;
    }
    const PARTY_PRIVACY_VOICE_CHANNEL2 = constants.PARTY_PRIVACY_VOICE_CHANNEL;
    if (setting1) {
      let tmp29 = tmp28 | PARTY_PRIVACY_VOICE_CHANNEL2;
    } else {
      tmp29 = tmp28 & ~PARTY_PRIVACY_VOICE_CHANNEL2;
    }
    const tmp22 = constants;
  } else {
    let value = PRIVATE === constants2.PUBLIC;
    if (!value) {
      const Storage = Storage /* Storage */.Storage;
      value = Storage.get("ACTIVITIES_FORCE_PUBLIC");
    }
    if (!value) {
      return tmp6;
    } else {
      const AllowActivityPartyPrivacyFriends = explicitContentFromProto /* explicitContentFromProto */.AllowActivityPartyPrivacyFriends;
      const setting2 = AllowActivityPartyPrivacyFriends.getSetting();
      const AllowActivityPartyPrivacyVoiceChannel = explicitContentFromProto /* explicitContentFromProto */.AllowActivityPartyPrivacyVoiceChannel;
      const PARTY_PRIVACY_FRIENDS = constants.PARTY_PRIVACY_FRIENDS;
      const setting3 = AllowActivityPartyPrivacyVoiceChannel.getSetting();
      if (setting2) {
        let tmp18 = tmp6 | PARTY_PRIVACY_FRIENDS;
        let tmp19 = tmp17;
      } else {
        tmp18 = tmp6 & ~PARTY_PRIVACY_FRIENDS;
        tmp19 = tmp17;
      }
      const PARTY_PRIVACY_VOICE_CHANNEL = tmp19.PARTY_PRIVACY_VOICE_CHANNEL;
      if (setting3) {
        let tmp20 = tmp18 | PARTY_PRIVACY_VOICE_CHANNEL;
      } else {
        tmp20 = tmp18 & ~PARTY_PRIVACY_VOICE_CHANNEL;
      }
    }
  }
};
export const isContextlessEmbeddedActivity = function isContextlessEmbeddedActivity(remoteApplicationActivity) {
  let num;
  if (remoteApplicationActivity != null) {
    num = remoteApplicationActivity.flags;
  }
  if (num == null) {
    num = 0;
  }
  let hasFlagResult = hasFlag /* hasFlag */.hasFlag(num, constants.CONTEXTLESS);
  if (hasFlagResult) {
    hasFlagResult = isEmbeddedActivity(remoteApplicationActivity);
  }
  return hasFlagResult;
};