// === Module 1377: UserStore ===

// Module 1377 (UserStore)
import _mod12 from "module_12" /* 12 */;
import GlobalUtils from "GlobalUtils" /* 1375 */;
import PremiumConstants from "PremiumConstants" /* 1379 */;
import UserStoreUtils from "UserStoreUtils" /* 1388 */;
import FlagUtilsAll from "FlagUtils" /* 1390 */;
import PrimaryGuildUtils from "PrimaryGuildUtils" /* 1393 */;
import DisplayNameStylesUtils from "DisplayNameStylesUtils" /* 1394 */;
import CustomTypingIndicatorTypes from "CustomTypingIndicatorTypes" /* 1398 */;
import PremiumStateUtils from "PremiumStateUtils" /* 1399 */;
import FamilyCenterModels from "FamilyCenterModels" /* 1400 */;
import AvatarDecorationUtils from "AvatarDecorationUtils" /* 1972 */;
import mappers from "mappers" /* 1973 */;
import isActivityParticipantValidGuildMemberDefault from "isActivityParticipantValidGuildMember" /* 1984 */;
import Server from "Server" /* 1985 */;
import OverridePremiumTypeStore from "OverridePremiumTypeStore" /* 1378 */;
import UserRecord from "UserRecord" /* 1391 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;
import MobileCacheSnapshotStore from "MobileCacheSnapshotStore" /* 1084 */;
import Constants from "Constants" /* 1085 */;
import size from "module_2" /* 2 */;

let clip_participants, message_preview, moderator_report, set;

let c9;
let metroImportAll;
let metroImportDefault;
function mergeGuildAvatar(id, guildId, avatar) {
  if (null == obj[id]) {
    return false;
  } else {
    let result;
    if (null == avatar) {
      result = obj.removeGuildAvatarHash(guildId);
    } else {
      result = obj.addGuildAvatarHash(guildId, avatar);
    }
    tmp[obj[id].id] = result;
    if (obj[id] !== result) {
      closure_12 = closure_12 + 1;
    }
    return obj[id] !== result;
  }
}
function mergeUserPrimaryGuild(id, primary_guild) {
  let tmp3 = null != tmp2;
  if (tmp3) {
    const obj = PrimaryGuildUtils;
    const result = obj.isUserPrimaryGuildEqual(tmp2.primaryGuild, primary_guild.primary_guild);
    let tmp8 = !result;
    if (tmp8) {
      let flag = null == tmp2.primaryGuild || null != primary_guild.primary_guild;
      if (flag) {
        const tmp5Result = PrimaryGuildUtils;
        obj[id].primaryGuild = tmp5Result.ensureUserPrimaryGuild(primary_guild.primary_guild);
        tmp[obj[id].id] = obj[id];
        closure_12 = closure_12 + 1;
        flag = true;
      }
      tmp8 = flag;
    }
    tmp3 = tmp8;
  }
  return tmp3;
}
function transformUser(mfa_enabled) {
  mfa_enabled = mfa_enabled.mfa_enabled;
  if (null != mfa_enabled) {
    mfa_enabled.mfaEnabled = mfa_enabled;
    delete mfa_enabled["mfa_enabled"];
  }
  const obj = UserStoreUtils;
  const premiumTypeFromRawValue = obj.getPremiumTypeFromRawValue(mfa_enabled.premium_type);
  if (undefined !== premiumTypeFromRawValue) {
    mfa_enabled.premiumType = premiumTypeFromRawValue;
    delete mfa_enabled["premium_type"];
  }
  const nsfw_allowed = mfa_enabled.nsfw_allowed;
  if (null != nsfw_allowed) {
    mfa_enabled.nsfwAllowed = nsfw_allowed;
    delete mfa_enabled["nsfw_allowed"];
  }
  const age_verification_status = mfa_enabled.age_verification_status;
  if (null != age_verification_status) {
    mfa_enabled.ageVerificationStatus = age_verification_status;
    delete mfa_enabled["age_verification_status"];
  }
  const public_flags = mfa_enabled.public_flags;
  if (null != public_flags) {
    mfa_enabled.publicFlags = public_flags;
    delete mfa_enabled["public_flags"];
  }
  const purchased_flags = mfa_enabled.purchased_flags;
  if (undefined !== purchased_flags) {
    mfa_enabled.purchasedFlags = purchased_flags;
    delete mfa_enabled["purchased_flags"];
  }
  const premium_usage_flags = mfa_enabled.premium_usage_flags;
  if (undefined !== premium_usage_flags) {
    mfa_enabled.premiumUsageFlags = premium_usage_flags;
    delete mfa_enabled["premium_usage_flags"];
  }
  if (null === mfa_enabled.banner_color) {
    delete mfa_enabled["banner_color"];
  }
  const avatar_decoration_data = mfa_enabled.avatar_decoration_data;
  if (undefined !== avatar_decoration_data) {
    const tmp2Result = AvatarDecorationUtils;
    mfa_enabled.avatarDecorationData = tmp2Result.parseAvatarDecorationData(avatar_decoration_data);
    delete mfa_enabled["avatar_decoration_data"];
  }
  const collectibles = mfa_enabled.collectibles;
  if (undefined !== collectibles) {
    delete mfa_enabled["collectibles"];
    const tmp2Result6 = mappers;
    mfa_enabled.collectibles = tmp2Result6.parseServerUserCollectibles(collectibles);
  }
  const global_name = mfa_enabled.global_name;
  if (undefined !== global_name) {
    mfa_enabled.globalName = global_name;
    delete mfa_enabled["global_name"];
  }
  const primary_guild = mfa_enabled.primary_guild;
  if (undefined !== primary_guild) {
    const tmp2Result7 = PrimaryGuildUtils;
    mfa_enabled.primary_guild = tmp2Result7.ensureUserPrimaryGuild(primary_guild);
  }
  const display_name_styles = mfa_enabled.display_name_styles;
  if (undefined !== display_name_styles) {
    const tmp2Result8 = DisplayNameStylesUtils;
    mfa_enabled.displayNameStyles = tmp2Result8.parseServerDisplayNameStyles(display_name_styles);
    delete mfa_enabled["display_name_styles"];
  }
  const typing_indicator_style = mfa_enabled.typing_indicator_style;
  if (undefined !== typing_indicator_style) {
    const tmp2Result9 = CustomTypingIndicatorTypes;
    mfa_enabled.typingIndicatorStyle = tmp2Result9.parseServerTypingIndicatorStyle(typing_indicator_style);
    delete mfa_enabled["typing_indicator_style"];
  }
  const vad_colors = mfa_enabled.vad_colors;
  if (undefined !== vad_colors) {
    mfa_enabled.vadColors = vad_colors;
    delete mfa_enabled["vad_colors"];
  }
  const premium_state = mfa_enabled.premium_state;
  if (undefined !== premium_state) {
    const tmp2Result10 = PremiumStateUtils;
    mfa_enabled.premiumState = tmp2Result10.parseServerPremiumState(premium_state);
    delete mfa_enabled["premium_state"];
  }
  const restricted_schedule = mfa_enabled.restricted_schedule;
  if (undefined !== restricted_schedule) {
    const RestrictedScheduleRecord = FamilyCenterModels.RestrictedScheduleRecord;
    let fromServerResult = RestrictedScheduleRecord.fromServer(restricted_schedule);
    if (fromServerResult == null) {
      fromServerResult = null;
    }
    mfa_enabled.restrictedSchedule = fromServerResult;
    delete mfa_enabled["restricted_schedule"];
  }
  const app_transaction_ids = mfa_enabled.app_transaction_ids;
  if (undefined !== app_transaction_ids) {
    mfa_enabled.appTransactionIds = app_transaction_ids;
    delete mfa_enabled["app_transaction_ids"];
  }
  return mfa_enabled;
}
function mergeUser(user, arg1) {
  let mergeResult;
  let tmp21;
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  const tmp2 = undefined !== user.id && user.id === AuthenticationStore.getId();
  if (null == obj[user.id]) {
    transformUser(user);
    const self = this;
    const self2 = this;
    const tmp26 = new UserRecord(user);
    const premiumType3 = tmp26.premiumType;
    mergeResult = tmp26;
    tmp21 = premiumType3;
    if (undefined !== premiumType3) {
      mergeResult = tmp26;
      tmp21 = premiumType3;
      if (tmp2) {
        const obj7 = UserStoreUtils;
        const isStaffEnvResult = obj7.isStaffEnv(tmp26);
        let premiumType4 = tmp26.premiumType;
        if (isStaffEnvResult) {
          let premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
          if (premiumTypeOverride === closure_10) {
            premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeActual();
          }
          premiumType4 = premiumTypeOverride;
        }
        tmp26.premiumType = premiumType4;
        let perks2 = tmp26.perks;
        if (isStaffEnvResult) {
          let perksActual = null;
          if (null !== OverridePremiumTypeStore.getPremiumTypeOverride()) {
            perksActual = OverridePremiumTypeStore.getPerksActual();
          }
          perks2 = perksActual;
        }
        tmp26.perks = perks2;
        mergeResult = tmp26;
        tmp21 = premiumType3;
      }
    }
  } else {
    mergeResult = obj;
    if (flag) {
      transformUser(user);
      let premiumType = user.premium_type;
      if (premiumType == null) {
        premiumType = user.premiumType;
      }
      let isStaffEnvRawDataResult = undefined !== premiumType && tmp2;
      if (isStaffEnvRawDataResult) {
        const obj2 = UserStoreUtils;
        isStaffEnvRawDataResult = obj2.isStaffEnvRawData(user);
      }
      if (isStaffEnvRawDataResult) {
        const obj3 = UserStoreUtils;
        const isStaffEnvRawDataResult1 = obj3.isStaffEnvRawData(user);
        let premiumType2 = user.premium_type;
        if (premiumType2 == null) {
          premiumType2 = user.premiumType;
        }
        if (isStaffEnvRawDataResult1) {
          let premiumTypeOverride1 = OverridePremiumTypeStore.getPremiumTypeOverride();
          if (premiumTypeOverride1 === closure_10) {
            premiumTypeOverride1 = OverridePremiumTypeStore.getPremiumTypeActual();
          }
          premiumType2 = premiumTypeOverride1;
        }
        if (undefined !== user.premiumType) {
          user.premiumType = premiumType2;
        } else if (undefined !== user.premium_type) {
          user.premium_type = premiumType2;
        }
        let perks = user.perks;
        if (isStaffEnvRawDataResult1) {
          let perksActual1 = null;
          if (null !== OverridePremiumTypeStore.getPremiumTypeOverride()) {
            perksActual1 = OverridePremiumTypeStore.getPerksActual();
          }
          perks = perksActual1;
        }
        user.perks = perks;
      }
      const tmp16 = null == obj[user.id].primaryGuild && null == user.primary_guild;
      if (tmp16 !== true) {
        const tmp17 = null != obj[user.id].primaryGuild && null == user.primary_guild;
        if (tmp17 !== true) {
          const obj5 = PrimaryGuildUtils;
          if (obj5.isUserPrimaryGuildEqual(obj[user.id].primaryGuild, user.primary_guild) !== true) {
            const tmp18Result = PrimaryGuildUtils;
            user.primary_guild = tmp18Result.ensureUserPrimaryGuild(user.primary_guild);
          }
        }
        user.primary_guild = obj[user.id].primaryGuild;
      }
      mergeResult = obj.merge(user);
      tmp21 = premiumType;
    }
  }
  const validatePremiumType = UserStoreUtils.validatePremiumType;
  UserStoreUtils;
  const obj9 = UserStoreUtils;
  validatePremiumType(obj9.isStaffEnv(mergeResult), tmp21, mergeResult.premiumType);
  obj[user.id] = mergeResult;
  if (obj[user.id] !== mergeResult) {
    closure_12 = closure_12 + 1;
  }
  return obj[user.id] !== mergeResult;
}
function mergeUsersFromMessage(message, arg1) {
  let closure_0 = arg1;
  const tmp = null != message.author && "SENDING" !== message.state && message.author.id !== AuthenticationStore.getId();
  if (tmp) {
    mergeUser(message.author, arg1);
  }
  const mentions = message.mentions;
  if (mentions != null) {
    let item = mentions.forEach((id) => {
      if (id.id !== AuthenticationStore.getId()) {
        mergeUser(id, closure_0);
      }
    });
  }
  const interaction = message.interaction;
  let user;
  if (interaction != null) {
    user = interaction.user;
  }
  let tmp7 = null != user;
  if (tmp7) {
    const interaction2 = message.interaction;
    let user1;
    if (interaction2 != null) {
      user1 = interaction2.user;
    }
    tmp7 = user1.id !== AuthenticationStore.getId();
  }
  if (tmp7) {
    mergeUser(message.interaction.user, arg1);
  }
  const attachments = message.attachments;
  if (attachments != null) {
    const item1 = attachments.forEach((clip_participants) => {
      clip_participants = clip_participants.clip_participants;
      if (clip_participants != null) {
        const item = clip_participants.forEach((id) => {
          if (id.id !== AuthenticationStore.getId()) {
            mergeUser(id, closure_1_0);
          }
        });
      }
    });
  }
  let resolved = message.resolved;
  users = undefined;
  if (resolved != null) {
    users = resolved.users;
  }
  if (null != users) {
    for (const key10045 in resolved.users) {
      let tmp23 = resolved.users[key10045];
      if (tmp23.id === AuthenticationStore.getId()) {
        continue;
      } else {
        let tmp15 = mergeUser(tmp23, arg1);
        continue;
      }
      continue;
    }
  }
  const interaction_metadata = message.interaction_metadata;
  let user2;
  if (interaction_metadata != null) {
    user2 = interaction_metadata.user;
  }
  const tmp17 = null != user2 && message.interaction_metadata.user.id !== AuthenticationStore.getId();
  if (tmp17) {
    mergeUser(message.interaction_metadata.user, arg1);
  }
  if (null != message.message_snapshots) {
    const message_snapshots = message.message_snapshots;
    const item2 = message_snapshots.forEach((moderator_report) => {
      moderator_report = moderator_report.moderator_report;
      let user;
      if (moderator_report != null) {
        const reported_member = moderator_report.reported_member;
        if (reported_member != null) {
          user = reported_member.user;
        }
      }
      if (null != user) {
        mergeUser(moderator_report.moderator_report.reported_member.user, closure_0);
      }
      const moderator_report2 = moderator_report.moderator_report;
      let user1;
      if (moderator_report2 != null) {
        const reporting_member = moderator_report2.reporting_member;
        if (reporting_member != null) {
          user1 = reporting_member.user;
        }
      }
      if (null != user1) {
        mergeUser(moderator_report.moderator_report.reporting_member.user, closure_0);
      }
      const message = moderator_report.message;
      users = undefined;
      const _Object = Object;
      if (message != null) {
        const resolved = message.resolved;
        if (resolved != null) {
          users = resolved.users;
        }
      }
      if (users == null) {
        users = {};
      }
      const values2 = values(users);
      const item = values2.forEach((id) => {
        if (id.id !== AuthenticationStore.getId()) {
          mergeUser(id, closure_1_0);
        }
      });
    });
  }
}
function handleConnectionOpen(arg0) {
  let guilds;
  let obj;
  let user;
  ({ user, users, guilds } = arg0);
  delete user["premium"];
  delete user["banner_color"];
  mergeUser(user);
  let item = users.forEach((item) => {
    mergeUser(item);
  });
  const item1 = guilds.forEach((members) => {
    members = members.members;
    const item = members.forEach((avatar) => {
      id = members.id;
      avatar = avatar.avatar;
      if (null != users[avatar.user.id]) {
        let result;
        if (null == avatar) {
          result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        users[users[avatar.user.id].id] = result;
        if (users[avatar.user.id] !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = avatar.user;
      if (null != users[avatar.user.id]) {
        const obj3 = PrimaryGuildUtils;
        const result1 = obj3.isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        const tmp10 = !result1;
        if (tmp10) {
          const tmp5 = null == users[avatar.user.id].primaryGuild || null != user.primary_guild;
          if (tmp5) {
            const tmp7Result = PrimaryGuildUtils;
            users[avatar.user.id].primaryGuild = tmp7Result.ensureUserPrimaryGuild(user.primary_guild);
            users[users[avatar.user.id].id] = users[avatar.user.id];
            closure_12 = closure_12 + 1;
          }
        }
      }
    });
  });
  const tmp4 = obj;
  if (null != obj[AuthenticationStore.getId(AuthenticationStore)]) {
    obj = { id, username: "Wumpus", discriminator: "0", globalName: "Wumpus", avatar: "c1f86b313385cb97985f1b118851c28c" };
    const self = this;
    const self2 = this;
    tmp4[id] = new UserRecord(obj);
    const tmp8 = new UserRecord(obj);
  }
}
function handleConnectionOpenSupplemental(arg0) {
  let guilds;
  let lazyPrivateChannels;
  ({ guilds, lazyPrivateChannels } = arg0);
  let item = guilds.forEach((members) => {
    members = members.members;
    const item = members.forEach((avatar) => {
      id = members.id;
      avatar = avatar.avatar;
      if (null != users[avatar.user.id]) {
        let result;
        if (null == avatar) {
          result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        users[users[avatar.user.id].id] = result;
        if (users[avatar.user.id] !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = avatar.user;
      if (null != users[avatar.user.id]) {
        const obj3 = PrimaryGuildUtils;
        const result1 = obj3.isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        const tmp10 = !result1;
        if (tmp10) {
          const tmp5 = null == users[avatar.user.id].primaryGuild || null != user.primary_guild;
          if (tmp5) {
            const tmp7Result = PrimaryGuildUtils;
            users[avatar.user.id].primaryGuild = tmp7Result.ensureUserPrimaryGuild(user.primary_guild);
            users[users[avatar.user.id].id] = users[avatar.user.id];
            closure_12 = closure_12 + 1;
          }
        }
      }
    });
  });
  if (lazyPrivateChannels != null) {
    const item1 = lazyPrivateChannels.forEach((rawRecipients) => {
      rawRecipients = rawRecipients.rawRecipients;
      if (rawRecipients != null) {
        const item = rawRecipients.forEach((item) => {
          closure_1_17(item);
        });
      }
    });
  }
}
function isIncompleteUser(arg0) {
  return !("incomplete" in arg0);
}
function handleInitialize(users) {
  if (null != users.users) {
    users = users.users;
    const iter = users[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp5 = nextResult;
      let tmp7 = nextResult.id in obj;
      if (tmp7) {
        tmp7 = isIncompleteUser(tmp5);
      }
      if (!tmp7) {
        let self = this;
        let self2 = this;
        id = tmp5.id;
        let tmp13 = new UserRecord(nextResult);
        obj[id] = tmp13;
      }
      continue;
    }
  }
}
function handleUserUpdate(user) {
  user = user.user;
  if (user.id !== AuthenticationStore.getId()) {
    mergeUser(user);
  } else {
    return false;
  }
}
function handleRestrictedScheduleUpdate(id) {
  const obj = { id: id.userId, restricted_schedule: id.restrictedSchedule };
  return mergeUser(obj);
}
function handleUserProfileFetchSuccess(userProfile) {
  userProfile = userProfile.userProfile;
  if (userProfile.user.id !== AuthenticationStore.getId()) {
    mergeUser(userProfile.user);
  } else {
    return false;
  }
}
function handleCurrentUserUpdate(user) {
  mergeUser(user.user);
}
function updatePremiumType(user) {
  let premiumType;
  user = user.user;
  const obj = { id: user.id, premiumType };
  premiumType = user.premiumType;
  const obj2 = UserStoreUtils;
  if (obj2.isStaffEnv(user)) {
    let premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeOverride();
    if (premiumTypeOverride === closure_10) {
      premiumTypeOverride = OverridePremiumTypeStore.getPremiumTypeActual();
    }
    premiumType = premiumTypeOverride;
  }
  return mergeUser(obj, true);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((item) => {
    mergeUsersFromMessage(item, true);
  });
  return false;
}
function handleConversationMessagesFetchSuccess(messages) {
  messages = messages.messages;
  const combined = messages.concat(messages.messageReferences);
  const item = combined.forEach((item) => {
    mergeUsersFromMessage(item, true);
  });
  return false;
}
function handleChannelConversationsFetchSuccess(rawConversations) {
  rawConversations = rawConversations.rawConversations;
  let item = rawConversations.forEach((messages) => {
    messages = messages.messages;
    let item;
    if (messages != null) {
      item = messages.forEach((item) => {
        closure_1_18(item, true);
      });
    }
    return item;
  });
  return false;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  const item = pins.forEach((message) => {
    mergeUsersFromMessage(message.message, true);
  });
  return false;
}
function handleThreadListSync(mostRecentMessages) {
  mostRecentMessages = mostRecentMessages.mostRecentMessages;
  if (mostRecentMessages != null) {
    const item = mostRecentMessages.forEach((item) => {
      mergeUsersFromMessage(item, false);
    });
  }
  return false;
}
function handleLoadSearchResults(data) {
  data = data.data;
  let item = data.forEach((item) => {
    let channels;
    let messages;
    ({ messages, channels } = item);
    item = messages.forEach((arr) => {
      const item = arr.forEach((item) => {
        closure_1_18(item, true);
      });
    });
    const item1 = channels.forEach((type) => {
      const tmp2 = type.type !== constants.DM && type.type !== tmp.GROUP_DM;
      if (!tmp2) {
        const recipients = type.recipients;
        if (recipients != null) {
          const item = recipients.forEach((item) => closure_1_17(item));
        }
        if (null != type.recipient) {
          closure_1_17(type.recipient);
        }
      }
    });
  });
  return false;
}
function handleSmartSearchFetchSuccess(messages) {
  messages = messages.messages;
  const item = messages.forEach((item) => {
    mergeUsersFromMessage(item, true);
  });
  return false;
}
function handleLoadThreadsSuccess(arg0) {
  let firstMessages;
  let owners;
  ({ firstMessages, owners } = arg0);
  if (null != firstMessages) {
    const item = firstMessages.forEach((item) => {
      mergeUsersFromMessage(item, true);
    });
  }
  if (null != owners) {
    const item1 = owners.forEach((user) => mergeUser(user.user, true));
  }
}
function handleLoadForumPosts(threads) {
  const values = Object.values(threads.threads);
  const item = values.forEach((item) => {
    let first_message;
    let most_recent_message;
    let owner;
    ({ first_message, most_recent_message, owner } = item);
    if (null != first_message) {
      mergeUsersFromMessage(first_message, true);
    }
    if (null != most_recent_message) {
      mergeUsersFromMessage(most_recent_message, true);
    }
    const tmp5 = null != owner && null != owner.user;
    if (tmp5) {
      mergeUser(owner.user, true);
    }
  });
}
function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
  const values = Object.values(supplementalData.supplementalData);
  const item = values.forEach((message_preview) => {
    message_preview = message_preview.message_preview;
    if (null != message_preview) {
      mergeUsersFromMessage(message_preview, true);
    }
  });
}
function handleFetchUsersForGuildEventSuccess(arg0) {
  let guildScheduledEventUsers;
  ({ guildScheduledEventUsers, guildId: require } = arg0);
  const item = guildScheduledEventUsers.forEach((item) => {
    let member;
    let user;
    ({ user, member } = item);
    if (null != user) {
      mergeUser(user);
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        if (null != obj[user.id]) {
          let result;
          if (null == avatar) {
            result = obj.removeGuildAvatarHash(require);
          } else {
            result = obj.addGuildAvatarHash(require, avatar);
          }
          tmp5[obj[user.id].id] = result;
          if (obj[user.id] !== result) {
            closure_12 = closure_12 + 1;
          }
        }
      }
    }
  });
}
function handleLoadNotificationCenterItems(items) {
  items = items.items;
  const item = items.forEach((other_user) => {
    if (null != other_user.other_user) {
      mergeUser(other_user.other_user);
    }
  });
}
function handleNotificationCenterItemCreate(item) {
  item = item.item;
  if (null != item.other_user) {
    mergeUser(item.other_user);
  }
}
function handleIncomingMessage(message) {
  message = message.message;
  mergeUsersFromMessage(message, true);
  if (null != message.flags) {
    const obj = FlagUtilsAll;
    if (obj.hasFlag(message.flags, metroImportAll.URGENT)) {
      const tmp6 = obj[AuthenticationStore.getId(AuthenticationStore)];
      let flag = null != tmp6;
      const tmp5 = obj;
      if (flag) {
        id = AuthenticationStore.getId();
        set = tmp6.set;
        const tmp2Result = FlagUtilsAll;
        tmp5[id] = set("flags", tmp2Result.setFlag(tmp6.flags, metroImportDefault.HAS_UNREAD_URGENT_MESSAGES, true));
        flag = true;
      }
      return flag;
    }
  }
  return false;
}
function handleCreateChannel(channel) {
  const rawRecipients = channel.channel.rawRecipients;
  if (null != rawRecipients) {
    const item = rawRecipients.forEach((item) => mergeUser(item));
  }
  return false;
}
function handleUpdateChannels(arg0) {
  const iter = arg0.channels[Symbol.iterator]();
  while (iter !== undefined) {
    let rawRecipients = iter.next().rawRecipients;
    let arr = rawRecipients;
    if (null != rawRecipients) {
      let item = arr.forEach((item) => mergeUser(item));
    }
    continue;
  }
  return false;
}
function handlePresenceUpdates(updates) {
  updates = updates.updates;
  const mapped = updates.map((item) => {
    let tmp2 = closure_11[item.user.id];
    id = tmp2;
    if (null == tmp2) {
      return false;
    } else {
      const reduced = closure_44.reduce((acc, item) => {
        const user = item.user;
        let tmp2 = acc;
        if (user.hasOwnProperty(item)) {
          set = result.set;
          const obj = _mod12;
          result = set(obj.camelCase(item), item.user[item]);
          tmp2 = acc || result !== result;
          const tmp7 = acc || result !== result;
        }
        return tmp2;
      }, false);
      let tmp5 = reduced;
      if (tmp5) {
        let tmp7 = id;
        tmp[id.id] = id;
        tmp5 = reduced;
      }
      return tmp5;
    }
  });
  return mapped.some((item) => item);
}
function handleLoadedBans(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => mergeUser(user.user));
}
function handleLoadedBansBatch(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => mergeUser(user.user));
}
function handleBan(user) {
  return mergeUser(user.user);
}
function handleRecipient(isMember) {
  isMember = isMember.isMember && mergeUser(isMember.user);
  return isMember;
}
function handleGuildMembers(user) {
  let avatar;
  let guildId;
  ({ guildId, avatar } = user);
  let flag = false;
  const tmp = mergeUser(user.user);
  if (null != obj[user.user.id]) {
    let result;
    if (null == avatar) {
      result = obj.removeGuildAvatarHash(guildId);
    } else {
      result = obj.addGuildAvatarHash(guildId, avatar);
    }
    tmp2[obj[user.user.id].id] = result;
    flag = tmp4;
    if (flag) {
      closure_12 = closure_12 + 1;
      flag = tmp4;
    }
  }
  if (!flag) {
    flag = tmp;
  }
  return flag;
}
function handleGuildMemberListUpdate(arg0) {
  const iter = arg0.ops[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if ("INSERT" === nextResult.op) {
      let member = tmp2.item.member;
      let user;
      if (member != null) {
        user = member.user;
      }
      let tmp6 = user;
      if (null == user) {
        continue;
      } else {
        let tmp9 = mergeUserPrimaryGuild(tmp6.id, tmp6);
      }
    }
    continue;
  }
  return false;
}
function handleGuildMembersChunkBatch(arg0) {
  let closure_0 = false;
  function _loop(iter) {
    closure_0 = iter;
    const members = iter.members;
    let tmp = members.reduce((acc, avatar) => {
      guildId = guildId.guildId;
      avatar = avatar.avatar;
      let flag = false;
      const tmp = closure_2_17(avatar.user);
      if (null != closure_2_11[avatar.user.id]) {
        let result;
        if (null == avatar) {
          result = obj.removeGuildAvatarHash(guildId);
        } else {
          result = obj.addGuildAvatarHash(guildId, avatar);
        }
        tmp2[closure_2_11[avatar.user.id].id] = result;
        flag = tmp4;
        if (flag) {
          closure_12 = closure_12 + 1;
          flag = tmp4;
        }
      }
      if (!flag) {
        flag = tmp;
      }
      if (!flag) {
        flag = acc;
      }
      return flag;
    }, false) || closure_0;
    closure_0 = tmp;
  }
  const iter = arg0.chunks[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  return closure_0;
}
function handlePassiveUpdateV2(guildId) {
  let flag = false;
  const iter = guildId.members[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    if (mergeUser(nextResult.user)) {
      flag = true;
    }
    if (mergeGuildAvatar(tmp2.user.id, guildId.guildId, tmp2.avatar)) {
      flag = true;
    }
    continue;
  }
  return flag;
}
function handleLocalMessagesLoaded(users) {
  let flag = false;
  users = users.users;
  if (users == null) {
    users = [];
  }
  const iter = users[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let _Object = Object;
    let tmp2 = nextResult;
    if (!Object.hasOwn(obj, nextResult.id)) {
      let tmp6 = mergeUser(tmp2) || flag;
      flag = tmp6;
    }
    continue;
  }
  return flag;
}
function handleThreadMemberListUpdate(members) {
  members = members.members;
  let c0 = false;
  const item = members.forEach((member) => {
    const tmp = null != member.member && mergeUser(member.member.user);
    if (tmp) {
      c0 = true;
    }
    const tmp3 = null != member.presence && mergeUser(member.presence.user);
    if (tmp3) {
      c0 = true;
    }
  });
  return c0;
}
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  let c0 = false;
  if (addedMembers != null) {
    const item = addedMembers.forEach((member) => {
      const tmp = null != member.member && mergeUser(member.member.user);
      if (tmp) {
        c0 = true;
      }
      const tmp3 = null != member.presence && mergeUser(member.presence.user);
      if (tmp3) {
        c0 = true;
      }
    });
  }
  return c0;
}
function handleGuildCreate(guild) {
  guild = guild.guild;
  const members = guild.members;
  const item = members.forEach((user) => {
    let avatar;
    let bot;
    let discriminator;
    let obj;
    let username;
    user = user.user;
    id = user.id;
    const avatar2 = user.avatar;
    ({ username, avatar, discriminator, bot } = user);
    if (id !== AuthenticationStore.getId()) {
      obj = { id, username, avatar, discriminator, bot };
      mergeUser(obj);
    }
    const id2 = guild.id;
    if (null != obj[id]) {
      let result;
      if (null == avatar2) {
        result = obj2.removeGuildAvatarHash(id2);
      } else {
        result = obj2.addGuildAvatarHash(id2, avatar2);
      }
      tmp3[obj[id].id] = result;
      if (obj[id] !== result) {
        closure_12 = closure_12 + 1;
      }
    }
  });
}
function handleRelationshipAdd(relationship) {
  return mergeUser(relationship.relationship.user);
}
function handleGameRelationshipAdd(gameRelationship) {
  return mergeUser(gameRelationship.gameRelationship.user);
}
function handleLoadRelationships(relationships) {
  relationships = relationships.relationships;
  return relationships.reduce((acc, user) => {
    const tmp = mergeUser(user.user) || acc;
    return tmp;
  }, false);
}
function handleFriendSuggestionCreate(suggestion) {
  return mergeUser(suggestion.suggestion.suggested_user);
}
function handleLoadFriendSuggestions(suggestions) {
  suggestions = suggestions.suggestions;
  return suggestions.reduce((acc, suggested_user) => {
    const tmp = mergeUser(suggested_user.suggested_user) || acc;
    return tmp;
  }, false);
}
function handleAuditLogFetched(users) {
  users = users.users;
  const item = users.forEach(function(id) {
    if (null == users[id.id]) {
      const self = this;
      const self2 = this;
      id = id.id;
      tmp[id] = new UserRecord(id);
      const tmp4 = new UserRecord(id);
    }
  });
}
function handleGiftCodeResolve(giftCode) {
  giftCode = giftCode.giftCode;
  const tmp = null != giftCode.user && mergeUser(giftCode.user);
  return tmp;
}
function handleGuildPremiumSubscriptionsFetchSuccess(appliedBoosts) {
  appliedBoosts = appliedBoosts.appliedBoosts;
  const item = appliedBoosts.forEach((user) => {
    user = user.user;
    if (null != user) {
      mergeUser(user);
    }
  });
}
function handleGuildJoinRequest(request) {
  let actioned_by_user;
  let user;
  ({ user, actioned_by_user } = request.request);
  let flag = false;
  if (null != user) {
    flag = mergeUser(user);
  }
  let tmp2 = flag;
  if (null != actioned_by_user) {
    tmp2 = flag || mergeUser(actioned_by_user);
    const tmp3 = flag || mergeUser(actioned_by_user);
  }
  return tmp2;
}
function handleInitialFamilyCenterLoad(familyCenterTeenActivity) {
  const items = [...familyCenterTeenActivity.users];
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  return items.reduce((acc, item) => {
    const tmp = mergeUser(item) || acc;
    return tmp;
  }, false);
}
function handleLinkedUserFetch(users) {
  users = users.users;
  return users.reduce((acc, item) => {
    const tmp = mergeUser(item) || acc;
    return tmp;
  }, false);
}
function handleRequestLinkSuccess(users) {
  users = users.users;
  return users.reduce((acc, item) => {
    const tmp = mergeUser(item) || acc;
    return tmp;
  }, false);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined !== familyCenterTeenActivity) {
    users = familyCenterTeenActivity.users;
    return users.reduce((acc, item) => {
      const tmp = mergeUser(item) || acc;
      return tmp;
    }, false);
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  users = familyCenterTeenActivity.familyCenterTeenActivity.users;
  return users.reduce((acc, item) => {
    const tmp = mergeUser(item) || acc;
    return tmp;
  }, false);
}
function handleMemberSafetyGuildMemberSearchSuccess(members) {
  let closure_0;
  members = members.members;
  id = AuthenticationStore.getId();
  return members.reduce((acc, member) => {
    let tmp = acc;
    if (member.member.user.id !== closure_0) {
      tmp = mergeUser(member.member.user) || acc;
      mergeUser(member.member.user) || acc;
    }
    return tmp;
  }, false);
}
function handleLoadICYMIHydratedItems(messageItems) {
  messageItems = messageItems.messageItems;
  const item = messageItems.forEach((message) => {
    if (null != message.message) {
      mergeUsersFromMessage(message.message, true);
    }
  }, false);
}
function handleEmbeddedActivityUpdateV2(instance) {
  const participants = instance.instance.participants;
  return participants.reduce((acc, member) => {
    const tmp = isActivityParticipantValidGuildMemberDefault(member) && mergeUser(member.member.user) || acc;
    return tmp;
  }, false);
}
function handleInitiateAgeVerification(arg0) {
  if (arg0 == null) {
    throw new TypeError("Cannot destructure 'undefined' or 'null'.");
  } else {
    const obj2 = AuthenticationStore[AuthenticationStore.getId(AuthenticationStore)];
    let flag = null != obj2;
    if (flag) {
      id = AuthenticationStore.getId();
      AuthenticationStore[id] = obj2.set("ageVerificationStatus", Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING);
      flag = true;
    }
    return flag;
  }
}
function handleCloseAgeVerificationModal(status) {
  status = status.status;
  const obj2 = AuthenticationStore[AuthenticationStore.getId(AuthenticationStore)];
  let tmp2 = null != obj2;
  if (tmp2) {
    let flag = obj2.ageVerificationStatus === Server.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    if (flag) {
      id = AuthenticationStore.getId();
      AuthenticationStore[id] = obj2.set("ageVerificationStatus", status);
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleInteractionModalCreate(resolved) {
  resolved = resolved.resolved;
  users = undefined;
  if (resolved != null) {
    users = resolved.users;
  }
  if (null != users) {
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp8 = resolved.users[tmp4];
        if (tmp8.id === AuthenticationStore.getId()) {
          continue;
        } else {
          let tmp6 = mergeUser(tmp8, true);
          continue;
        }
        continue;
      }
    }
  }
  return false;
}
function handleGuildStickersFetchSuccess(stickers) {
  stickers = stickers.stickers;
  return stickers.reduce((acc, user) => {
    const tmp = null != user.user && mergeUser(user.user) || acc;
    return tmp;
  }, false);
}
({ UserFlags: metroImportDefault, MessageFlags: metroImportAll, ChannelTypes: c9 } = Constants);
let closure_10 = PremiumConstants.UNSELECTED_PREMIUM_TYPE_OVERRIDE;
let users = {};
let closure_12 = 0;
let c13 = "47835198259242069";
let closure_44 = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
class UserStore extends MobileCacheSnapshotStore {
  constructor() {
    const obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental,
      UPDATE_CLIENT_PREMIUM_TYPE: updatePremiumType,
      OVERLAY_INITIALIZE: handleInitialize,
      CACHE_LOADED(users) {
        return closure_0.handleLoadCache(users);
      },
      USER_UPDATE: handleUserUpdate,
      USER_RESTRICTED_SCHEDULE_UPDATE: handleRestrictedScheduleUpdate,
      USER_PROFILE_FETCH_SUCCESS: handleUserProfileFetchSuccess,
      CURRENT_USER_UPDATE: handleCurrentUserUpdate,
      PRESENCE_UPDATES: handlePresenceUpdates,
      SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
      SMART_SEARCH_FETCH_SUCCESS: handleSmartSearchFetchSuccess,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
      LOAD_MESSAGES_SUCCESS: handleLoadMessages,
      LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
      LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
      CONVERSATION_MESSAGES_FETCH_SUCCESS: handleConversationMessagesFetchSuccess,
      CHANNEL_CONVERSATIONS_FETCH_SUCCESS: handleChannelConversationsFetchSuccess,
      LOAD_PINNED_MESSAGES_SUCCESS: handleLoadPinnedMessages,
      THREAD_LIST_SYNC: handleThreadListSync,
      MESSAGE_CREATE: handleIncomingMessage,
      MESSAGE_UPDATE: handleIncomingMessage,
      GUILD_SETTINGS_LOADED_BANS: handleLoadedBans,
      GUILD_SETTINGS_LOADED_BANS_BATCH: handleLoadedBansBatch,
      GUILD_CREATE: handleGuildCreate,
      GUILD_BAN_ADD: handleBan,
      GUILD_BAN_REMOVE: handleBan,
      CHANNEL_RECIPIENT_ADD: handleRecipient,
      CHANNEL_RECIPIENT_REMOVE: handleRecipient,
      GUILD_STICKERS_FETCH_SUCCESS: handleGuildStickersFetchSuccess,
      GUILD_JOIN_REQUEST_CREATE: handleGuildJoinRequest,
      GUILD_JOIN_REQUEST_UPDATE: handleGuildJoinRequest,
      GUILD_MEMBER_ADD: handleGuildMembers,
      GUILD_MEMBER_UPDATE: handleGuildMembers,
      GUILD_MEMBERS_CHUNK_BATCH: handleGuildMembersChunkBatch,
      GUILD_MEMBER_LIST_UPDATE: handleGuildMemberListUpdate,
      THREAD_MEMBER_LIST_UPDATE: handleThreadMemberListUpdate,
      THREAD_MEMBERS_UPDATE: handleThreadMembersUpdate,
      CHANNEL_CREATE: handleCreateChannel,
      CHANNEL_UPDATES: handleUpdateChannels,
      RELATIONSHIP_ADD: handleRelationshipAdd,
      GAME_RELATIONSHIP_ADD: handleGameRelationshipAdd,
      LOAD_RELATIONSHIPS_SUCCESS: handleLoadRelationships,
      FRIEND_SUGGESTION_CREATE: handleFriendSuggestionCreate,
      LOAD_FRIEND_SUGGESTIONS_SUCCESS: handleLoadFriendSuggestions,
      AUDIT_LOG_FETCH_SUCCESS: handleAuditLogFetched,
      AUDIT_LOG_FETCH_NEXT_PAGE_SUCCESS: handleAuditLogFetched,
      GIFT_CODE_RESOLVE_SUCCESS: handleGiftCodeResolve,
      GUILD_APPLIED_BOOSTS_FETCH_SUCCESS: handleGuildPremiumSubscriptionsFetchSuccess,
      LOAD_THREADS_SUCCESS: handleLoadThreadsSuccess,
      LOAD_ARCHIVED_THREADS_SUCCESS: handleLoadThreadsSuccess,
      LOAD_FORUM_POSTS: handleLoadForumPosts,
      GUILD_SCHEDULED_EVENT_USERS_FETCH_SUCCESS: handleFetchUsersForGuildEventSuccess,
      LOAD_NOTIFICATION_CENTER_ITEMS_SUCCESS: handleLoadNotificationCenterItems,
      NOTIFICATION_CENTER_ITEM_CREATE: handleNotificationCenterItemCreate,
      LOAD_MESSAGE_REQUESTS_SUPPLEMENTAL_DATA_SUCCESS: handleLoadMessageRequestsSupplementalDataSuccess,
      PASSIVE_UPDATE_V2: handlePassiveUpdateV2,
      LOCAL_MESSAGES_LOADED: handleLocalMessagesLoaded,
      FAMILY_CENTER_INITIAL_LOAD: handleInitialFamilyCenterLoad,
      FAMILY_CENTER_LINKED_USERS_FETCH_SUCCESS: handleLinkedUserFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_FETCH_SUCCESS: handleTeenActivityFetch,
      FAMILY_CENTER_TEEN_ACTIVITY_MORE_FETCH_SUCCESS: handleTeenActivityMoreFetch,
      FAMILY_CENTER_REQUEST_LINK_SUCCESS: handleRequestLinkSuccess,
      MEMBER_SAFETY_GUILD_MEMBER_SEARCH_SUCCESS: handleMemberSafetyGuildMemberSearchSuccess,
      LOAD_ICYMI_HYDRATED: handleLoadICYMIHydratedItems,
      EMBEDDED_ACTIVITY_UPDATE_V2: handleEmbeddedActivityUpdateV2,
      INITIATE_AGE_VERIFICATION: handleInitiateAgeVerification,
      CLOSE_AGE_VERIFICATION_MODAL: handleCloseAgeVerificationModal,
      INTERACTION_MODAL_CREATE: handleInteractionModalCreate
    };
    const tmp2 = new tmp(obj, handleSmartSearchFetchSuccess, handleCloseAgeVerificationModal, new.target);
    let closure_0 = tmp2;
    return tmp2;
  }
  initialize() {
    this.waitFor(AuthenticationStore, OverridePremiumTypeStore);
  }
  takeSnapshot() {
    let items;
    let obj2;
    const obj = { version: UserStore.LATEST_SNAPSHOT_VERSION, data: obj2 };
    obj2 = { users: items.filter(GlobalUtils.isNotNullish) };
    items = [this.getCurrentUser()];
    return obj;
  }
  handleLoadCache(users) {
    const snapshot = this.readSnapshot(UserStore.LATEST_SNAPSHOT_VERSION);
    if (null != snapshot) {
      users = snapshot.users;
      for (const item10012 of users) {
        let self = this;
        let self2 = this;
        id = item10012.id;
        let tmp8 = new UserRecord(item10012);
        obj[id] = tmp8;
        continue;
      }
    }
    if (null != users.users) {
      const users2 = users.users;
      const iter = users2[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        let tmp14 = nextResult;
        let tmp17 = nextResult.id in obj;
        if (tmp17) {
          tmp17 = isIncompleteUser(tmp14);
        }
        if (!tmp17) {
          let self3 = this;
          let self4 = this;
          let id2 = tmp14.id;
          let tmp24 = new UserRecord(nextResult);
          obj[id2] = tmp24;
        }
        continue;
      }
    }
    const items = [, ];
    ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = users);
    for (const item10056 of items) {
      for (const item10061 of item10056) {
        let rawRecipients = item10061.rawRecipients;
        if (rawRecipients != null) {
          let item = rawRecipients.forEach((item) => mergeUser(item, false));
        }
        continue;
      }
      continue;
    }
  }
  getUserStoreVersion() {
    return closure_12;
  }
  getUser(arg0) {
    if (null != arg0) {
      return obj[arg0];
    }
  }
  getUsers() {
    return obj;
  }
  forEach(fn) {
    for (const key10005 in obj) {
      if (false === fn(obj[key10005])) {
        break;
      }
    }
  }
  findByTag(match, match2) {
    for (const key10005 in obj) {
      let obj = obj[key10005];
      if (null != match2) {
        if (obj.username === match) {
          if (obj.discriminator === match2) {
            return obj;
          }
        }
      }
      if (null != match2) {
        continue;
      } else {
        if (obj.username !== match) {
          continue;
        } else if (!obj.hasUniqueUsername()) {
          continue;
        } else {
          return obj;
        }
        continue;
      }
      continue;
    }
  }
  filter(fn) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    const items = [];
    for (const key10006 in obj) {
      let tmp5 = obj[key10006];
      if (!fn(tmp5)) {
        continue;
      } else {
        let arr = items.push(tmp5);
        continue;
      }
      continue;
    }
    if (flag) {
      const sorted = items.sort((username, username2) => {
        let num = 1;
        if (username.username <= username2.username) {
          let num2 = 0;
          if (username.username < username2.username) {
            num2 = -1;
          }
          num = num2;
        }
        return num;
      });
    }
    return items;
  }
  getCurrentUser() {
    return obj[AuthenticationStore.getId(AuthenticationStore)];
  }
}
const prototype = UserStore.prototype;
UserStore.displayName = "UserStore";
UserStore.LATEST_SNAPSHOT_VERSION = 1;
const userStore = new UserStore();
let result = size.fileFinishedImporting("stores/UserStore.tsx");

export default userStore;
export { users };
export const ASSISTANT_WUMPUS_VOICE_USER = "47835198259242069";
export { transformUser };
export { mergeUser };