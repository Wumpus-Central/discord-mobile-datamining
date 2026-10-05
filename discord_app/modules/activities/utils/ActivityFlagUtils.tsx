// === Module 11123: ActivityFlagUtils ===

// Module 11123 (ActivityFlagUtils)
import Storage2 from "Storage" /* 510 */;
import FlagUtils from "FlagUtils" /* 1390 */;
import UserSettings from "UserSettings" /* 2028 */;
import isEmbeddedActivityDefault from "isEmbeddedActivity" /* 7229 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let c3;
let closure_4;
({ ActivityFlags: c3, ActivityPartyPrivacy: closure_4 } = Constants);
const result = size.fileFinishedImporting("modules/activities/utils/ActivityFlagUtils.tsx");

export const computeActivityFlags = function computeActivityFlags(activity) {
  let tmp12;
  let flag2 = arg2;
  if (arg2 === undefined) {
    flag2 = false;
  }
  let flag3 = tmp13Result;
  if (tmp13Result === undefined) {
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
    let tmp27;
    let tmp28;
    const AllowActivityPartyPrivacyFriends2 = UserSettings.AllowActivityPartyPrivacyFriends;
    const setting = AllowActivityPartyPrivacyFriends2.getSetting();
    const AllowActivityPartyPrivacyVoiceChannel2 = UserSettings.AllowActivityPartyPrivacyVoiceChannel;
    const PARTY_PRIVACY_FRIENDS2 = constants.PARTY_PRIVACY_FRIENDS;
    const setting1 = AllowActivityPartyPrivacyVoiceChannel2.getSetting();
    if (setting) {
      tmp27 = tmp22 | PARTY_PRIVACY_FRIENDS2;
    } else {
      tmp27 = tmp22 & ~PARTY_PRIVACY_FRIENDS2;
    }
    const PARTY_PRIVACY_VOICE_CHANNEL2 = constants.PARTY_PRIVACY_VOICE_CHANNEL;
    if (setting1) {
      tmp28 = tmp27 | PARTY_PRIVACY_VOICE_CHANNEL2;
    } else {
      tmp28 = tmp27 & ~PARTY_PRIVACY_VOICE_CHANNEL2;
    }
    tmp12 = tmp22 | tmp28;
  } else {
    let value = PRIVATE === constants2.PUBLIC;
    if (!value) {
      const Storage = Storage2.Storage;
      value = Storage.get("ACTIVITIES_FORCE_PUBLIC");
    }
    tmp12 = tmp6;
    if (value) {
      let tmp18;
      let tmp19;
      let tmp20;
      const AllowActivityPartyPrivacyFriends = UserSettings.AllowActivityPartyPrivacyFriends;
      const setting2 = AllowActivityPartyPrivacyFriends.getSetting();
      const AllowActivityPartyPrivacyVoiceChannel = UserSettings.AllowActivityPartyPrivacyVoiceChannel;
      const PARTY_PRIVACY_FRIENDS = constants.PARTY_PRIVACY_FRIENDS;
      const setting3 = AllowActivityPartyPrivacyVoiceChannel.getSetting();
      if (setting2) {
        tmp18 = tmp6 | PARTY_PRIVACY_FRIENDS;
        tmp19 = constants;
      } else {
        tmp18 = tmp6 & ~PARTY_PRIVACY_FRIENDS;
        tmp19 = constants;
      }
      const PARTY_PRIVACY_VOICE_CHANNEL = tmp19.PARTY_PRIVACY_VOICE_CHANNEL;
      if (setting3) {
        tmp20 = tmp18 | PARTY_PRIVACY_VOICE_CHANNEL;
      } else {
        tmp20 = tmp18 & ~PARTY_PRIVACY_VOICE_CHANNEL;
      }
      tmp12 = tmp6 | tmp20;
    }
  }
  return tmp12;
};
export const isContextlessEmbeddedActivity = function isContextlessEmbeddedActivity(remoteApplicationActivity) {
  let num;
  const hasFlag = FlagUtils.hasFlag;
  FlagUtils;
  if (remoteApplicationActivity != null) {
    num = remoteApplicationActivity.flags;
  }
  if (num == null) {
    num = 0;
  }
  const hasFlagResult = hasFlag(num, constants.CONTEXTLESS) && isEmbeddedActivityDefault(remoteApplicationActivity);
  return hasFlagResult;
};