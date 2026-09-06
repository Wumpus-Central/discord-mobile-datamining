// === Module 11462: ActivityFlagUtils ===

// Module 11462 (ActivityFlagUtils)
import Storage2 from "Storage" /* 510 */;
import FlagUtils from "FlagUtils" /* 1384 */;
import UserSettings from "UserSettings" /* 1935 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7739 */;
import Constants from "Constants" /* 1074 */;
import size from "module_2" /* 2 */;

({ ActivityFlags: c3, ActivityPartyPrivacy: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/ActivityFlagUtils.tsx");

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
    const AllowActivityPartyPrivacyFriends2 = UserSettings.AllowActivityPartyPrivacyFriends;
    const setting = AllowActivityPartyPrivacyFriends2.getSetting();
    const AllowActivityPartyPrivacyVoiceChannel2 = UserSettings.AllowActivityPartyPrivacyVoiceChannel;
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
  } else {
    value = PRIVATE === constants2.PUBLIC;
    if (!value) {
      const Storage = Storage2.Storage;
      value = Storage.get("ACTIVITIES_FORCE_PUBLIC");
    }
    if (!value) {
      return tmp6;
    } else {
      const AllowActivityPartyPrivacyFriends = UserSettings.AllowActivityPartyPrivacyFriends;
      const setting2 = AllowActivityPartyPrivacyFriends.getSetting();
      const AllowActivityPartyPrivacyVoiceChannel = UserSettings.AllowActivityPartyPrivacyVoiceChannel;
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
  let hasFlagResult = FlagUtils.hasFlag(num, constants.CONTEXTLESS);
  if (hasFlagResult) {
    hasFlagResult = isEmbeddedActivityDefault(remoteApplicationActivity);
  }
  return hasFlagResult;
};