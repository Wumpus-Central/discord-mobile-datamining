// discord_app/stores/UserStore.tsx
import clearAllDefault from "MobileCacheSnapshotStore.tsx";
import hasFlagAll from "../../discord_common/js/shared/utils/FlagUtils.tsx";
import isDiscordFrontendDevelopment from "../utils/GlobalUtils.tsx";
import validatePremiumType from "../modules/user/UserStoreUtils.tsx";
import isUserPrimaryGuildEqual from "../modules/guild_tag/PrimaryGuildUtils.tsx";
import PermissionOverwriteType from "../flow/Server.tsx";
import closure_4 from "../modules/premium/OverridePremiumTypeStore.tsx";
import closure_5 from "../records/UserRecord.tsx";
import closure_6 from "AuthenticationStore.tsx";
import ME from "../Constants.tsx";
import { UNSELECTED_PREMIUM_TYPE_OVERRIDE as closure_10 } from "../modules/premium/PremiumConstants.tsx";

require = arg1;
function mergeGuildAvatar(id, guildId, avatar) {
  if (null == obj[id]) {
    return false;
  } else {
    if (null == avatar) {
      let result = obj.removeGuildAvatarHash(guildId);
    } else {
      result = obj.addGuildAvatarHash(guildId, avatar);
    }
    tmp[obj.id] = result;
    if (obj !== result) {
      closure_12 = closure_12 + 1;
    }
    return obj !== result;
  }
}
function mergeUserPrimaryGuild(id, primary_guild) {
  let tmp3 = null != tmp2;
  if (tmp3) {
    obj = isUserPrimaryGuildEqual;
    const result = obj.isUserPrimaryGuildEqual(tmp2.primaryGuild, primary_guild.primary_guild);
    let tmp8 = !result;
    if (!result) {
      let flag = null == tmp2.primaryGuild || null != primary_guild.primary_guild;
      if (flag) {
        tmp2.primaryGuild = tmp5(1936).ensureUserPrimaryGuild(primary_guild.primary_guild);
        tmp[tmp2.id] = tmp2;
        closure_12 = closure_12 + 1;
        flag = true;
        const tmp5Result = tmp5(1936);
      }
      tmp8 = flag;
    }
    tmp3 = tmp8;
    tmp5 = require;
  }
  return tmp3;
}
function transformUser(mfa_enabled) {
  mfa_enabled = mfa_enabled.mfa_enabled;
  if (null != mfa_enabled) {
    mfa_enabled.mfaEnabled = mfa_enabled;
    delete tmp[tmp2];
  }
  const premiumTypeFromRawValue = validatePremiumType.getPremiumTypeFromRawValue(mfa_enabled.premium_type);
  if (undefined !== premiumTypeFromRawValue) {
    mfa_enabled.premiumType = premiumTypeFromRawValue;
    delete tmp[tmp3];
  }
  const nsfw_allowed = mfa_enabled.nsfw_allowed;
  if (null != nsfw_allowed) {
    mfa_enabled.nsfwAllowed = nsfw_allowed;
    delete tmp[tmp3];
  }
  const age_verification_status = mfa_enabled.age_verification_status;
  if (null != age_verification_status) {
    mfa_enabled.ageVerificationStatus = age_verification_status;
    delete tmp[tmp3];
  }
  const public_flags = mfa_enabled.public_flags;
  if (null != public_flags) {
    mfa_enabled.publicFlags = public_flags;
    delete tmp[tmp3];
  }
  const purchased_flags = mfa_enabled.purchased_flags;
  if (undefined !== purchased_flags) {
    mfa_enabled.purchasedFlags = purchased_flags;
    delete tmp[tmp3];
  }
  const premium_usage_flags = mfa_enabled.premium_usage_flags;
  if (undefined !== premium_usage_flags) {
    mfa_enabled.premiumUsageFlags = premium_usage_flags;
    delete tmp[tmp3];
  }
  if (null === mfa_enabled.banner_color) {
    delete tmp[tmp3];
  }
  const avatar_decoration_data = mfa_enabled.avatar_decoration_data;
  if (undefined !== avatar_decoration_data) {
    let tmp4Result = tmp4(1897);
    mfa_enabled.avatarDecorationData = tmp4Result.parseAvatarDecorationData(avatar_decoration_data);
    delete tmp[tmp3];
  }
  const collectibles = mfa_enabled.collectibles;
  if (undefined !== collectibles) {
    delete tmp[tmp3];
    tmp4Result = tmp4(1898);
    mfa_enabled.collectibles = tmp4Result.parseServerUserCollectibles(collectibles);
  }
  const global_name = mfa_enabled.global_name;
  if (undefined !== global_name) {
    mfa_enabled.globalName = global_name;
    delete tmp[tmp3];
  }
  const primary_guild = mfa_enabled.primary_guild;
  if (undefined !== primary_guild) {
    mfa_enabled.primary_guild = tmp4(1936).ensureUserPrimaryGuild(primary_guild);
    const tmp4Result1 = tmp4(1936);
  }
  const display_name_styles = mfa_enabled.display_name_styles;
  if (undefined !== display_name_styles) {
    mfa_enabled.displayNameStyles = tmp4(1937).parseServerDisplayNameStyles(display_name_styles);
    delete tmp[tmp3];
    const tmp4Result2 = tmp4(1937);
  }
  const typing_indicator_style = mfa_enabled.typing_indicator_style;
  if (undefined !== typing_indicator_style) {
    mfa_enabled.typingIndicatorStyle = tmp4(1941).parseServerTypingIndicatorStyle(typing_indicator_style);
    delete tmp[tmp3];
    const tmp4Result3 = tmp4(1941);
  }
  const premium_state = mfa_enabled.premium_state;
  if (undefined !== premium_state) {
    mfa_enabled.premiumState = tmp4(1942).parseServerPremiumState(premium_state);
    delete tmp[tmp3];
    const tmp4Result4 = tmp4(1942);
  }
  const restricted_schedule = mfa_enabled.restricted_schedule;
  if (undefined !== restricted_schedule) {
    const RestrictedScheduleRecord = tmp4(1943).RestrictedScheduleRecord;
    let fromServerResult = RestrictedScheduleRecord.fromServer(restricted_schedule);
    if (fromServerResult == null) {
      fromServerResult = null;
    }
    mfa_enabled.restrictedSchedule = fromServerResult;
    delete tmp[tmp2];
  }
  const app_transaction_ids = mfa_enabled.app_transaction_ids;
  if (undefined !== app_transaction_ids) {
    mfa_enabled.appTransactionIds = app_transaction_ids;
    delete tmp[tmp2];
  }
  return mfa_enabled;
}
function mergeUser(user, arg1) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = true;
  }
  let tmp2 = undefined !== user.id;
  if (tmp2) {
    tmp2 = user.id === store2.getId();
  }
  if (null == obj[user.id]) {
    transformUser(user);
    const tmp28 = new closure_5(user);
    const premiumType3 = tmp28.premiumType;
    let mergeResult = tmp28;
    let tmp21 = premiumType3;
    if (undefined !== premiumType3) {
      mergeResult = tmp28;
      tmp21 = premiumType3;
      if (tmp2) {
        const isStaffEnvResult = validatePremiumType.isStaffEnv(tmp28);
        let premiumType4 = tmp28.premiumType;
        if (isStaffEnvResult) {
          let premiumTypeOverride = store.getPremiumTypeOverride();
          if (premiumTypeOverride === closure_10) {
            premiumTypeOverride = store.getPremiumTypeActual();
          }
          premiumType4 = premiumTypeOverride;
        }
        tmp28.premiumType = premiumType4;
        let perks2 = tmp28.perks;
        if (isStaffEnvResult) {
          let perksActual = null;
          if (null !== store.getPremiumTypeOverride()) {
            perksActual = obj8.getPerksActual();
          }
          perks2 = perksActual;
          obj8 = store;
        }
        tmp28.perks = perks2;
        mergeResult = tmp28;
        tmp21 = premiumType3;
        const obj7 = validatePremiumType;
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
        isStaffEnvRawDataResult = validatePremiumType.isStaffEnvRawData(user);
        const obj2 = validatePremiumType;
      }
      if (isStaffEnvRawDataResult) {
        const isStaffEnvRawDataResult1 = validatePremiumType.isStaffEnvRawData(user);
        let premiumType2 = user.premium_type;
        if (premiumType2 == null) {
          premiumType2 = user.premiumType;
        }
        if (isStaffEnvRawDataResult1) {
          let premiumTypeOverride1 = store.getPremiumTypeOverride();
          if (premiumTypeOverride1 === closure_10) {
            premiumTypeOverride1 = store.getPremiumTypeActual();
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
          if (null !== store.getPremiumTypeOverride()) {
            perksActual1 = obj4.getPerksActual();
          }
          perks = perksActual1;
          obj4 = store;
        }
        user.perks = perks;
        const obj3 = validatePremiumType;
      }
      if (tmp16 !== true) {
        if (tmp17 !== true) {
          if (obj5.isUserPrimaryGuildEqual(obj.primaryGuild, user.primary_guild) !== true) {
            user.primary_guild = tmp18(1936).ensureUserPrimaryGuild(user.primary_guild);
            const tmp18Result = tmp18(1936);
          }
          obj5 = isUserPrimaryGuildEqual;
          tmp18 = require;
        }
        user.primary_guild = obj.primaryGuild;
        tmp17 = null != obj.primaryGuild && null == user.primary_guild;
      }
      mergeResult = obj.merge(user);
      tmp21 = premiumType;
      tmp16 = null == obj.primaryGuild && null == user.primary_guild;
    }
  }
  const obj9 = validatePremiumType;
  obj9.validatePremiumType(validatePremiumType.isStaffEnv(mergeResult), tmp21, mergeResult.premiumType);
  obj[user.id] = mergeResult;
  if (obj[user.id] !== mergeResult) {
    closure_12 = closure_12 + 1;
  }
  return obj[user.id] !== mergeResult;
}
function mergeUsersFromMessage(message, arg1) {
  closure_0 = arg1;
  let tmp = null != message.author;
  if (tmp) {
    tmp = "SENDING" !== message.state;
  }
  if (tmp) {
    tmp = message.author.id !== store2.getId();
  }
  if (tmp) {
    mergeUser(message.author, arg1);
  }
  const mentions = message.mentions;
  if (mentions != null) {
    let item = mentions.forEach((id) => {
      if (id.id !== closure_1_6.getId()) {
        closure_1_17(id, closure_0);
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
    tmp7 = user1.id !== store2.getId();
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
          if (id.id !== closure_1_6.getId()) {
            closure_1_17(id, closure_0);
          }
        });
      }
    });
  }
  let resolved = message.resolved;
  let users;
  if (resolved != null) {
    users = resolved.users;
  }
  if (null != users) {
    for (const key10045 in resolved.users) {
      let tmp22 = key10045;
      let tmp23 = resolved.users[key10045];
      let tmp24 = store2;
      if (tmp23.id === store2.getId()) {
        continue;
      } else {
        let tmp14 = mergeUser;
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
  let tmp17 = null != user2;
  if (tmp17) {
    tmp17 = message.interaction_metadata.user.id !== store2.getId();
  }
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
        closure_1_17(moderator_report.moderator_report.reported_member.user, closure_0);
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
        closure_1_17(moderator_report.moderator_report.reporting_member.user, closure_0);
      }
      const message = moderator_report.message;
      let users;
      if (message != null) {
        const resolved = message.resolved;
        if (resolved != null) {
          users = resolved.users;
        }
      }
      if (users == null) {
        users = {};
      }
      const values = Object.values(users);
      const item = values.forEach((id) => {
        if (id.id !== closure_1_6.getId()) {
          closure_1_17(id, closure_0);
        }
      });
    });
  }
}
function handleConnectionOpen(user) {
  ({ users, guilds } = user);
  delete tmp2[tmp];
  delete tmp2[tmp];
  mergeUser(user.user);
  let item = users.forEach((arg0) => {
    callback(arg0);
  });
  const item1 = guilds.forEach((members) => {
    closure_0 = members;
    members = members.members;
    const item = members.forEach((avatar) => {
      const id = members.id;
      avatar = avatar.avatar;
      if (null != closure_1_11[avatar.user.id]) {
        if (null == avatar) {
          let result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        tmp[obj.id] = result;
        if (obj !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = avatar.user;
      if (null != closure_1_11[avatar.user.id]) {
        const result1 = members(closure_1_3[6]).isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        if (!result1) {
          if (tmp5) {
            tmp4.primaryGuild = tmp7(tmp8[6]).ensureUserPrimaryGuild(user.primary_guild);
            tmp[tmp4.id] = tmp4;
            closure_12 = closure_12 + 1;
            const tmp7Result = tmp7(tmp8[6]);
          }
          tmp5 = null == tmp4.primaryGuild || null != user.primary_guild;
        }
        const obj3 = members(closure_1_3[6]);
        tmp7 = members;
        tmp8 = closure_1_3;
      }
    });
  });
  if (null != obj[store2.getId(store2)]) {
    obj = {
      id: null,
      username: "Wumpus",
      discriminator: "0",
      globalName: "Wumpus",
      avatar: "c1f86b313385cb97985f1b118851c28c",
    };
    obj[0] = c13;
    const tmp12 = new closure_5(obj);
    obj[c13] = tmp12;
  }
}
function handleConnectionOpenSupplemental(arg0) {
  ({ guilds, lazyPrivateChannels } = arg0);
  let item = guilds.forEach((members) => {
    closure_0 = members;
    members = members.members;
    const item = members.forEach((avatar) => {
      const id = members.id;
      avatar = avatar.avatar;
      if (null != closure_1_11[avatar.user.id]) {
        if (null == avatar) {
          let result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        tmp[obj.id] = result;
        if (obj !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = avatar.user;
      if (null != closure_1_11[avatar.user.id]) {
        const result1 = members(closure_1_3[6]).isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        if (!result1) {
          if (tmp5) {
            tmp4.primaryGuild = tmp7(tmp8[6]).ensureUserPrimaryGuild(user.primary_guild);
            tmp[tmp4.id] = tmp4;
            closure_12 = closure_12 + 1;
            const tmp7Result = tmp7(tmp8[6]);
          }
          tmp5 = null == tmp4.primaryGuild || null != user.primary_guild;
        }
        const obj3 = members(closure_1_3[6]);
        tmp7 = members;
        tmp8 = closure_1_3;
      }
    });
  });
  if (lazyPrivateChannels != null) {
    const item1 = lazyPrivateChannels.forEach((rawRecipients) => {
      rawRecipients = rawRecipients.rawRecipients;
      if (rawRecipients != null) {
        const item = rawRecipients.forEach((arg0) => {
          callback(arg0);
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
      let tmp6 = obj;
      if (tmp7) {
        let tmp8 = isIncompleteUser;
        let tmp9 = nextResult;
        tmp7 = isIncompleteUser(tmp5);
      }
      if (!tmp7) {
        let tmp10 = nextResult;
        let tmp11 = closure_5;
        let tmp12 = new.target;
        let tmp13 = new.target;
        let tmp14 = tmp5;
        let tmp15 = new closure_5(nextResult);
        let tmp16 = tmp15;
        tmp6[tmp5.id] = tmp15;
      }
      continue;
    }
  }
}
function handleUserUpdate(user) {
  user = user.user;
  if (user.id !== store2.getId()) {
    mergeUser(user);
  } else {
    return false;
  }
}
function handleRestrictedScheduleUpdate(id) {
  return mergeUser({ id: id.userId, restricted_schedule: id.restrictedSchedule });
}
function handleUserProfileFetchSuccess(userProfile) {
  userProfile = userProfile.userProfile;
  if (userProfile.user.id !== store2.getId()) {
    mergeUser(userProfile.user);
  } else {
    return false;
  }
}
function handleCurrentUserUpdate(user) {
  mergeUser(user.user);
}
function updatePremiumType(user) {
  user = user.user;
  obj = { id: user.id, premiumType: null };
  let premiumType = user.premiumType;
  if (obj2.isStaffEnv(user)) {
    let premiumTypeOverride = store.getPremiumTypeOverride();
    if (premiumTypeOverride === closure_10) {
      premiumTypeOverride = store.getPremiumTypeActual();
    }
    premiumType = premiumTypeOverride;
  }
  obj[1] = premiumType;
  return mergeUser(obj, true);
}
function handleLoadMessages(messages) {
  messages = messages.messages;
  const item = messages.forEach((arg0) => {
    callback(arg0, true);
  });
  return false;
}
function handleConversationFetchSuccess(messages) {
  messages = messages.messages;
  const combined = messages.concat(messages.messageReferences);
  const item = combined.forEach((arg0) => {
    callback(arg0, true);
  });
  return false;
}
function handleConversationsFetchSuccess(rawConversations) {
  rawConversations = rawConversations.rawConversations;
  let item = rawConversations.forEach((messages) => {
    messages = messages.messages;
    let item;
    if (messages != null) {
      item = messages.forEach((arg0) => {
        callback(arg0, true);
      });
    }
    return item;
  });
  return false;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  const item = pins.forEach((message) => {
    callback(message.message, true);
  });
  return false;
}
function handleThreadListSync(mostRecentMessages) {
  mostRecentMessages = mostRecentMessages.mostRecentMessages;
  if (mostRecentMessages != null) {
    const item = mostRecentMessages.forEach((arg0) => {
      callback(arg0, false);
    });
  }
  return false;
}
function handleLoadSearchResults(data) {
  data = data.data;
  let item = data.forEach((arg0) => {
    ({ messages, channels } = arg0);
    let item = messages.forEach((arr) => {
      const item = arr.forEach((arg0) => {
        callback(arg0, true);
      });
    });
    const item1 = channels.forEach((type) => {
      if (!tmp2) {
        const recipients = type.recipients;
        if (recipients != null) {
          const item = recipients.forEach((arg0) => callback(arg0));
        }
        if (null != type.recipient) {
          callback(type.recipient);
        }
      }
    });
  });
  return false;
}
function handleLoadThreadsSuccess(arg0) {
  ({ firstMessages, owners } = arg0);
  if (null != firstMessages) {
    const item = firstMessages.forEach((arg0) => {
      callback2(arg0, true);
    });
  }
  if (null != owners) {
    const item1 = owners.forEach((user) => callback(user.user, true));
  }
}
function handleLoadForumPosts(threads) {
  const values = Object.values(threads.threads);
  const item = values.forEach((arg0) => {
    ({ first_message, most_recent_message, owner } = arg0);
    if (null != first_message) {
      callback2(first_message, true);
    }
    if (null != most_recent_message) {
      callback2(most_recent_message, true);
    }
    if (tmp5) {
      callback(owner.user, true);
    }
  });
}
function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
  const values = Object.values(supplementalData.supplementalData);
  const item = values.forEach((message_preview) => {
    message_preview = message_preview.message_preview;
    if (null != message_preview) {
      callback(message_preview, true);
    }
  });
}
function handleFetchUsersForGuildEventSuccess(arg0) {
  ({ guildScheduledEventUsers, guildId: require } = arg0);
  const item = guildScheduledEventUsers.forEach((arg0) => {
    ({ user, member } = arg0);
    if (null != user) {
      closure_1_17(user);
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        if (null != closure_1_11[user.id]) {
          if (null == avatar) {
            let result = obj.removeGuildAvatarHash(tmp4);
          } else {
            result = obj.addGuildAvatarHash(tmp4, avatar);
          }
          tmp5[obj.id] = result;
          if (obj !== result) {
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
      callback(other_user.other_user);
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
    obj = hasFlagAll;
    if (obj.hasFlag(message.flags, constants2.URGENT)) {
      const obj3 = obj[store2.getId(store2)];
      let flag = null != obj3;
      if (flag) {
        const id = store2.getId();
        obj[id] = obj3.set("flags", tmp2(1398).setFlag(obj3.flags, constants.HAS_UNREAD_URGENT_MESSAGES, true));
        flag = true;
        const tmp2Result = tmp2(1398);
      }
      return flag;
    }
    tmp2 = importAll;
  }
  return false;
}
function handleCreateChannel(channel) {
  const rawRecipients = channel.channel.rawRecipients;
  if (null != rawRecipients) {
    const item = rawRecipients.forEach((arg0) => callback(arg0));
  }
  return false;
}
function handleUpdateChannels(arg0) {
  const iter = arg0.channels[Symbol.iterator]();
  while (iter !== undefined) {
    let rawRecipients = iter.next().rawRecipients;
    let arr = rawRecipients;
    if (null != rawRecipients) {
      let tmp = rawRecipients;
      let item = arr.forEach((arg0) => callback(arg0));
    }
    continue;
  }
  return false;
}
function handlePresenceUpdates(updates) {
  updates = updates.updates;
  const mapped = updates.map((arg0) => {
    closure_0 = arg0;
    const id = tmp2;
    if (null == table[arg0.user.id]) {
      return false;
    } else {
      const reduced = closure_43.reduce((arg0, key10009) => {
        const user = lib.user;
        let tmp2 = arg0;
        if (user.hasOwnProperty(key10009)) {
          const result = closure_1.set(lib(closure_1_3[15]).camelCase(key10009), lib.user[key10009]);
          let tmp7 = arg0;
          if (!arg0) {
            tmp7 = result !== closure_1;
          }
          closure_1 = result;
          tmp2 = tmp7;
          obj = lib(closure_1_3[15]);
        }
        return tmp2;
      }, false);
      let tmp5 = reduced;
      if (tmp5) {
        tmp[id.id] = id;
        tmp5 = reduced;
      }
      return tmp5;
    }
  });
  return mapped.some((arg0) => arg0);
}
function handleLoadedBans(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => callback(user.user));
}
function handleLoadedBansBatch(bans) {
  bans = bans.bans;
  const item = bans.forEach((user) => callback(user.user));
}
function handleBan(user) {
  return mergeUser(user.user);
}
function handleRecipient(isMember) {
  isMember = isMember.isMember;
  if (isMember) {
    isMember = mergeUser(isMember.user);
  }
  return isMember;
}
function handleGuildMembers(user) {
  ({ guildId, avatar } = user);
  let flag = false;
  if (null != obj[user.user.id]) {
    if (null == avatar) {
      let result = obj.removeGuildAvatarHash(guildId);
    } else {
      result = obj.addGuildAvatarHash(guildId, avatar);
    }
    tmp2[obj.id] = result;
    flag = tmp4;
    if (obj !== result) {
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
      let tmp4 = nextResult;
      let member = tmp2.item.member;
      let user;
      if (member != null) {
        user = member.user;
      }
      let tmp6 = user;
      if (null == user) {
        continue;
      } else {
        let tmp7 = mergeUserPrimaryGuild;
        let tmp8 = user;
        let tmp9 = mergeUserPrimaryGuild(tmp6.id, tmp6);
      }
    } else {
      let tmp3 = nextResult;
    }
    continue;
  }
  return false;
}
function handleGuildMembersChunkBatch(arg0) {
  c0 = false;
  function _loop(iter) {
    closure_0 = iter;
    const members = iter.members;
    closure_0 =
      members.reduce((arg0, avatar) => {
        guildId = guildId.guildId;
        avatar = avatar.avatar;
        let flag = false;
        if (null != closure_1_11[avatar.user.id]) {
          if (null == avatar) {
            let result = obj.removeGuildAvatarHash(guildId);
          } else {
            result = obj.addGuildAvatarHash(guildId, avatar);
          }
          tmp2[obj.id] = result;
          flag = tmp4;
          if (obj !== result) {
            closure_12 = closure_12 + 1;
            flag = tmp4;
          }
        }
        if (!flag) {
          flag = tmp;
        }
        if (!flag) {
          flag = arg0;
        }
        return flag;
      }, false) || closure_0;
  }
  const iter = arg0.chunks[Symbol.iterator]();
  while (iter !== undefined) {
    let _loopResult = _loop(iter.next());
    continue;
  }
  return c0;
}
function handlePassiveUpdateV2(guildId) {
  let flag = false;
  const iter = guildId.members[Symbol.iterator]();
  const nextResult = iter.next();
  while (iter !== undefined) {
    let tmp2 = nextResult;
    let tmp3 = mergeUser;
    if (mergeUser(nextResult.user)) {
      flag = true;
    }
    let tmp4 = mergeGuildAvatar;
    let tmp5 = nextResult;
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
    let tmp3 = obj;
    let tmp2 = nextResult;
    if (!Object.hasOwn(obj, nextResult.id)) {
      let tmp4 = mergeUser;
      let tmp5 = nextResult;
      let tmp6 = mergeUser(tmp2) || flag;
      flag = tmp6;
    }
    continue;
  }
  return flag;
}
function handleThreadMemberListUpdate(members) {
  members = members.members;
  c0 = false;
  const item = members.forEach((member) => {
    let tmp = null != member.member;
    if (tmp) {
      tmp = closure_1_17(member.member.user);
    }
    if (tmp) {
      c0 = true;
    }
    let tmp3 = null != member.presence;
    if (tmp3) {
      tmp3 = closure_1_17(member.presence.user);
    }
    if (tmp3) {
      c0 = true;
    }
  });
  return c0;
}
function handleThreadMembersUpdate(addedMembers) {
  addedMembers = addedMembers.addedMembers;
  c0 = false;
  if (addedMembers != null) {
    const item = addedMembers.forEach((member) => {
      let tmp = null != member.member;
      if (tmp) {
        tmp = closure_1_17(member.member.user);
      }
      if (tmp) {
        c0 = true;
      }
      let tmp3 = null != member.presence;
      if (tmp3) {
        tmp3 = closure_1_17(member.presence.user);
      }
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
    user = user.user;
    const id = user.id;
    const avatar2 = user.avatar;
    ({ username, avatar, discriminator, bot } = user);
    if (id !== closure_1_6.getId()) {
      obj = { id: null, username: null, avatar: null, discriminator: null, bot: null };
      obj[0] = id;
      obj[1] = username;
      obj[2] = avatar;
      obj[3] = discriminator;
      obj[4] = bot;
      closure_1_17(obj);
    }
    const id2 = guild.id;
    if (null != closure_1_11[id]) {
      if (null == avatar2) {
        let result = obj2.removeGuildAvatarHash(id2);
      } else {
        result = obj2.addGuildAvatarHash(id2, avatar2);
      }
      tmp3[obj2.id] = result;
      if (obj2 !== result) {
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
  return relationships.reduce((arg0, user) => callback(user.user) || arg0, false);
}
function handleFriendSuggestionCreate(suggestion) {
  return mergeUser(suggestion.suggestion.suggested_user);
}
function handleLoadFriendSuggestions(suggestions) {
  suggestions = suggestions.suggestions;
  return suggestions.reduce((arg0, suggested_user) => callback(suggested_user.suggested_user) || arg0, false);
}
function handleAuditLogFetched(users) {
  users = users.users;
  const item = users.forEach((id) => {
    if (null == table[id.id]) {
      const tmp6 = new closure_5(id);
      tmp[id.id] = tmp6;
    }
  });
}
function handleGiftCodeResolve(giftCode) {
  giftCode = giftCode.giftCode;
  let tmp = null != giftCode.user;
  if (tmp) {
    tmp = mergeUser(giftCode.user);
  }
  return tmp;
}
function handleGuildPremiumSubscriptionsFetchSuccess(appliedBoosts) {
  appliedBoosts = appliedBoosts.appliedBoosts;
  const item = appliedBoosts.forEach((user) => {
    user = user.user;
    if (null != user) {
      callback(user);
    }
  });
}
function handleGuildJoinRequest(request) {
  ({ user, actioned_by_user } = request.request);
  let flag = false;
  if (null != user) {
    flag = mergeUser(user);
  }
  let tmp2 = flag;
  if (null != actioned_by_user) {
    let tmp3 = flag;
    if (!flag) {
      tmp3 = mergeUser(actioned_by_user);
    }
    tmp2 = tmp3;
  }
  return tmp2;
}
function handleInitialFamilyCenterLoad(familyCenterTeenActivity) {
  const items = [...familyCenterTeenActivity.familyCenterTeenActivity.users];
  return items.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleLinkedUserFetch(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleRequestLinkSuccess(users) {
  users = users.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined !== familyCenterTeenActivity) {
    const users = familyCenterTeenActivity.users;
    return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  const users = familyCenterTeenActivity.familyCenterTeenActivity.users;
  return users.reduce((arg0, arg1) => callback(arg1) || arg0, false);
}
function handleMemberSafetyGuildMemberSearchSuccess(members) {
  members = members.members;
  let id;
  id = store2.getId();
  return members.reduce((arg0, member) => {
    let tmp = arg0;
    if (member.member.user.id !== closure_0) {
      tmp = closure_1_17(member.member.user) || arg0;
      const tmp3 = closure_1_17(member.member.user) || arg0;
    }
    return tmp;
  }, false);
}
function handleLoadICYMIHydratedItems(messageItems) {
  messageItems = messageItems.messageItems;
  const item = messageItems.forEach((message) => {
    if (null != message.message) {
      callback(message.message, true);
    }
  }, false);
}
function handleEmbeddedActivityUpdateV2(instance) {
  const participants = instance.instance.participants;
  return participants.reduce((arg0, member) => {
    let tmp = callback(table[16])(member);
    if (tmp) {
      tmp = callback2(member.member.user);
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  }, false);
}
function handleInitiateAgeVerification(arg0) {
  if (arg0 == null) {
    HermesBuiltin.throwTypeError();
  } else {
    const obj2 = store2[store2.getId(store2)];
    let flag = null != obj2;
    if (flag) {
      const id = obj.getId();
      store2[id] = obj2.set(
        "ageVerificationStatus",
        PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING,
      );
      flag = true;
    }
    return flag;
  }
}
function handleCloseAgeVerificationModal(status) {
  const obj2 = store2[store2.getId(store2)];
  let tmp2 = null != obj2;
  if (tmp2) {
    let flag =
      obj2.ageVerificationStatus === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    if (flag) {
      const id = obj.getId();
      store2[id] = obj2.set("ageVerificationStatus", status.status);
      flag = true;
    }
    tmp2 = flag;
  }
  return tmp2;
}
function handleInteractionModalCreate(resolved) {
  resolved = resolved.resolved;
  let users;
  if (resolved != null) {
    users = resolved.users;
  }
  if (null != users) {
    const keys = Object.keys();
    if (keys !== undefined) {
      while (keys[tmp] !== undefined) {
        let tmp7 = tmp4;
        let tmp8 = resolved.users[tmp4];
        let tmp9 = store2;
        if (tmp8.id === store2.getId()) {
          continue;
        } else {
          let tmp5 = mergeUser;
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
  return stickers.reduce((arg0, user) => {
    let tmp = null != user.user;
    if (tmp) {
      tmp = callback(user.user);
    }
    if (!tmp) {
      tmp = arg0;
    }
    return tmp;
  }, false);
}
clearAllDefault;
({ UserFlags: error, MessageFlags: closure_8, ChannelTypes: c9 } = ME);
let obj = {};
let c12 = 0;
let c13 = "47835198259242069";
let closure_43 = ["username", "avatar", "global_name", "discriminator", "bot", "primary_guild"];
let UserStore;
class UserStore extends tmp2 {
  constructor() {
    closure_0 = undefined;
    obj = {
      CONNECTION_OPEN: handleConnectionOpen,
      CONNECTION_OPEN_SUPPLEMENTAL: handleConnectionOpenSupplemental,
      UPDATE_CLIENT_PREMIUM_TYPE: updatePremiumType,
      OVERLAY_INITIALIZE: handleInitialize,
      CACHE_LOADED(users) {
        return obj.handleLoadCache(users);
      },
      USER_UPDATE: handleUserUpdate,
      USER_RESTRICTED_SCHEDULE_UPDATE: handleRestrictedScheduleUpdate,
      USER_PROFILE_FETCH_SUCCESS: handleUserProfileFetchSuccess,
      CURRENT_USER_UPDATE: handleCurrentUserUpdate,
      PRESENCE_UPDATES: handlePresenceUpdates,
      SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
      MOD_VIEW_SEARCH_MESSAGES_SUCCESS: handleLoadSearchResults,
      LOAD_MESSAGES_SUCCESS: handleLoadMessages,
      LOAD_MESSAGES_AROUND_SUCCESS: handleLoadMessages,
      LOAD_RECENT_MENTIONS_SUCCESS: handleLoadMessages,
      CONVERSATION_FETCH_SUCCESS: handleConversationFetchSuccess,
      CONVERSATIONS_FETCH_SUCCESS: handleConversationsFetchSuccess,
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
      INTERACTION_MODAL_CREATE: handleInteractionModalCreate,
    };
    tmp = new tmp(obj, handleCloseAgeVerificationModal, new.target, tmp);
    // ThrowIfThisInitialized (0x7c)
    closure_0 = tmp;
    return tmp;
  }
}
const prototype = UserStore.prototype;
prototype["initialize"] = function initialize() {
  this.waitFor(closure_6, closure_4);
};
prototype["takeSnapshot"] = function takeSnapshot() {
  obj = { version: UserStore.LATEST_SNAPSHOT_VERSION, data: null };
  obj = { users: null };
  const items = [this.getCurrentUser()];
  obj[0] = items.filter(isDiscordFrontendDevelopment.isNotNullish);
  obj[1] = obj;
  return obj;
};
prototype["handleLoadCache"] = function handleLoadCache(users) {
  const snapshot = this.readSnapshot(UserStore.LATEST_SNAPSHOT_VERSION);
  if (null != snapshot) {
    users = snapshot.users;
    for (const item10012 of users) {
      let tmp4 = obj;
      let tmp5 = obj;
      let tmp6 = closure_5;
      let tmp7 = new.target;
      let tmp8 = new.target;
      let tmp9 = item10012;
      let tmp10 = new closure_5(item10012);
      let tmp11 = tmp10;
      obj[item10012.id] = tmp10;
      continue;
    }
  }
  if (null != users.users) {
    const users2 = users.users;
    const iter = users2[Symbol.iterator]();
    const nextResult = iter.next();
    while (iter !== undefined) {
      let tmp16 = nextResult;
      let tmp19 = nextResult.id in obj;
      let tmp17 = obj;
      let tmp18 = obj;
      if (tmp19) {
        let tmp20 = isIncompleteUser;
        let tmp21 = nextResult;
        tmp19 = isIncompleteUser(tmp16);
      }
      if (!tmp19) {
        let tmp22 = tmp17;
        let tmp23 = nextResult;
        let tmp24 = closure_5;
        let tmp25 = new.target;
        let tmp26 = new.target;
        let tmp27 = tmp16;
        let tmp28 = new closure_5(nextResult);
        let tmp29 = tmp28;
        tmp18[tmp16.id] = tmp28;
      }
      continue;
    }
  }
  const items = [,];
  ({ privateChannels: arr[0], initialGuildChannels: arr[1] } = users);
  for (const item10056 of items) {
    let tmp30 = item10056;
    let tmp31 = item10056;
    for (const item10061 of item10056) {
      let rawRecipients = item10061.rawRecipients;
      if (rawRecipients != null) {
        let item = rawRecipients.forEach((arg0) => callback(arg0, false));
      }
      continue;
    }
    continue;
  }
};
prototype["getUserStoreVersion"] = function getUserStoreVersion() {
  return c12;
};
prototype["getUser"] = function getUser(arg0) {
  if (null != arg0) {
    return obj[arg0];
  }
};
prototype["getUsers"] = function getUsers() {
  return obj;
};
prototype["forEach"] = function forEach(arg0) {
  for (const key10005 in obj) {
    let tmp = key10005;
    let tmp2 = obj;
    if (false === arg0(obj[key10005])) {
      break;
    }
  }
};
prototype["findByTag"] = function findByTag(match, match2) {
  for (const key10005 in obj) {
    let tmp = key10005;
    let tmp2 = obj;
    obj = obj[key10005];
    if (null != arg1) {
      if (obj.username === arg0) {
        if (obj.discriminator === arg1) {
          return obj;
        }
      }
    }
    if (null != arg1) {
      continue;
    } else {
      if (obj.username !== arg0) {
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
};
prototype["filter"] = function filter(arg0) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [];
  for (const key10006 in obj) {
    let tmp3 = key10006;
    let tmp4 = obj;
    let tmp5 = obj[key10006];
    if (!arg0(tmp5)) {
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
};
prototype["getCurrentUser"] = function getCurrentUser() {
  return obj[store2.getId(store2)];
};
UserStore.displayName = "UserStore";
UserStore.LATEST_SNAPSHOT_VERSION = 1;
const userStore = new UserStore();
let result = require("set").fileFinishedImporting("stores/UserStore.tsx");

export default userStore;
export const users = obj;
export const ASSISTANT_WUMPUS_VOICE_USER = "47835198259242069";
export { transformUser };
export { mergeUser };
