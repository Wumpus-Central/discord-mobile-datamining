// === Module 1922: mergeGuildAvatar ===

// Module 1922 (mergeGuildAvatar)
import clearAllDefault from "clearAll" /* 1220 */;
import isDiscordFrontendDevelopment from "isDiscordFrontendDevelopment" /* 1370 */;
import hasFlagAll from "hasFlag" /* 1403 */;
import parseAvatarDecorationData from "parseAvatarDecorationData" /* 1899 */;
import parseSkuIdFromServerData from "parseSkuIdFromServerData" /* 1900 */;
import validatePremiumType from "validatePremiumType" /* 1928 */;
import isUserPrimaryGuildEqual from "isUserPrimaryGuildEqual" /* 1932 */;
import items2 from "items" /* 1933 */;
import parseServerPremiumState from "parseServerPremiumState" /* 1937 */;
import frozen from "frozen" /* 1943 */;
import PermissionOverwriteType from "PermissionOverwriteType" /* 1954 */;
import setPremiumTypeActual from "setPremiumTypeActual" /* 1923 */;
import createdAt from "createdAt" /* 1930 */;
import fetchFingerprint from "fetchFingerprint" /* 1218 */;
import ME from "ME" /* 676 */;
import { UNSELECTED_PREMIUM_TYPE_OVERRIDE as closure_10 } from "GuildFeatures" /* 1924 */;

require = fn;
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
        tmp2.primaryGuild = isUserPrimaryGuildEqual.ensureUserPrimaryGuild(primary_guild.primary_guild);
        tmp[tmp2.id] = tmp2;
        closure_12 = closure_12 + 1;
        flag = true;
        const tmp5Result = isUserPrimaryGuildEqual;
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
    let tmp4Result = parseAvatarDecorationData;
    mfa_enabled.avatarDecorationData = tmp4Result.parseAvatarDecorationData(avatar_decoration_data);
    delete tmp[tmp3];
  }
  const collectibles = mfa_enabled.collectibles;
  if (undefined !== collectibles) {
    delete tmp[tmp3];
    tmp4Result = parseSkuIdFromServerData;
    mfa_enabled.collectibles = tmp4Result.parseServerUserCollectibles(collectibles);
  }
  const global_name = mfa_enabled.global_name;
  if (undefined !== global_name) {
    mfa_enabled.globalName = global_name;
    delete tmp[tmp3];
  }
  const primary_guild = mfa_enabled.primary_guild;
  if (undefined !== primary_guild) {
    mfa_enabled.primary_guild = isUserPrimaryGuildEqual.ensureUserPrimaryGuild(primary_guild);
    const tmp4Result1 = isUserPrimaryGuildEqual;
  }
  const display_name_styles = mfa_enabled.display_name_styles;
  if (undefined !== display_name_styles) {
    mfa_enabled.displayNameStyles = items2.parseServerDisplayNameStyles(display_name_styles);
    delete tmp[tmp3];
    const tmp4Result2 = items2;
  }
  const premium_state = mfa_enabled.premium_state;
  if (undefined !== premium_state) {
    mfa_enabled.premiumState = parseServerPremiumState.parseServerPremiumState(premium_state);
    delete tmp[tmp3];
    const tmp4Result3 = parseServerPremiumState;
  }
  const restricted_schedule = mfa_enabled.restricted_schedule;
  if (undefined !== restricted_schedule) {
    const RestrictedScheduleRecord = frozen.RestrictedScheduleRecord;
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
function mergeUser(user, closure_0) {
  let flag = closure_0;
  if (closure_0 === undefined) {
    flag = true;
  }
  let tmp2 = undefined !== user.id;
  if (tmp2) {
    tmp2 = user.id === store2.getId();
  }
  if (null == obj[user.id]) {
    transformUser(user);
    const tmp26 = new closure_5(user);
    const premiumType3 = tmp26.premiumType;
    let mergeResult = tmp26;
    let tmp19 = premiumType3;
    if (tmp28) {
      let premiumType4 = tmp26.premiumType;
      if (obj6.isStaffEnv(tmp26)) {
        let premiumTypeOverride = store.getPremiumTypeOverride();
        if (premiumTypeOverride === closure_10) {
          premiumTypeOverride = store.getPremiumTypeActual();
        }
        premiumType4 = premiumTypeOverride;
      }
      tmp26.premiumType = premiumType4;
      mergeResult = tmp26;
      tmp19 = premiumType3;
      obj6 = validatePremiumType;
    }
    tmp28 = undefined !== premiumType3 && tmp2;
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
      }
      if (isStaffEnvRawDataResult) {
        let premiumType2 = user.premium_type;
        if (premiumType2 == null) {
          premiumType2 = user.premiumType;
        }
        if (obj3.isStaffEnvRawData(user)) {
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
        obj3 = validatePremiumType;
      }
      if (tmp14 !== true) {
        if (tmp15 !== true) {
          if (obj4.isUserPrimaryGuildEqual(obj.primaryGuild, user.primary_guild) !== true) {
            user.primary_guild = isUserPrimaryGuildEqual.ensureUserPrimaryGuild(user.primary_guild);
            const tmp16Result = isUserPrimaryGuildEqual;
          }
          obj4 = isUserPrimaryGuildEqual;
        }
        user.primary_guild = obj.primaryGuild;
        tmp15 = null != obj.primaryGuild && null == user.primary_guild;
      }
      mergeResult = obj.merge(user);
      tmp19 = premiumType;
      tmp14 = null == obj.primaryGuild && null == user.primary_guild;
    }
  }
  const obj7 = validatePremiumType;
  obj7.validatePremiumType(validatePremiumType.isStaffEnv(mergeResult), tmp19, mergeResult.premiumType);
  obj[user.id] = mergeResult;
  if (obj[user.id] !== mergeResult) {
    closure_12 = closure_12 + 1;
  }
  return obj[user.id] !== mergeResult;
}
function mergeUsersFromMessage(message, closure_0) {
  let tmp = null != message.author;
  if (tmp) {
    tmp = "SENDING" !== message.state;
  }
  if (tmp) {
    tmp = message.author.id !== store2.getId();
  }
  if (tmp) {
    mergeUser(message.author, closure_0);
  }
  const mentions = message.mentions;
  if (mentions != null) {
    let item = mentions.forEach((item, index) => {
      if (item.id !== closure_1_6.getId()) {
        mergeUser(item, closure_0);
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
    mergeUser(message.interaction.user, closure_0);
  }
  const attachments = message.attachments;
  if (attachments != null) {
    const item1 = attachments.forEach((item, index) => {
      const clip_participants = item.clip_participants;
      if (clip_participants != null) {
        item = clip_participants.forEach((item, index) => {
          if (item.id !== closure_1_6.getId()) {
            closure_1_17(item, closure_0);
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
      let tmp23 = resolved.users[key10045];
      if (tmp23.id === store2.getId()) {
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
  let tmp17 = null != user2;
  if (tmp17) {
    tmp17 = message.interaction_metadata.user.id !== store2.getId();
  }
  if (tmp17) {
    mergeUser(message.interaction_metadata.user, closure_0);
  }
  if (null != message.message_snapshots) {
    const message_snapshots = message.message_snapshots;
    const item2 = message_snapshots.forEach((item, index) => {
      const moderator_report = item.moderator_report;
      let user;
      if (moderator_report != null) {
        const reported_member = moderator_report.reported_member;
        if (reported_member != null) {
          user = reported_member.user;
        }
      }
      if (null != user) {
        mergeUser(item.moderator_report.reported_member.user, closure_0);
      }
      const moderator_report2 = item.moderator_report;
      let user1;
      if (moderator_report2 != null) {
        const reporting_member = moderator_report2.reporting_member;
        if (reporting_member != null) {
          user1 = reporting_member.user;
        }
      }
      if (null != user1) {
        mergeUser(item.moderator_report.reporting_member.user, closure_0);
      }
      const message = item.message;
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
      item = values.forEach((item, index) => {
        if (item.id !== closure_1_6.getId()) {
          closure_1_17(item, closure_0);
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
  let item = users.forEach((item, index) => {
    callback(item);
  });
  const item1 = guilds.forEach((item, index) => {
    closure_0 = item;
    const members = item.members;
    item = members.forEach((item, index) => {
      const id = item.id;
      const avatar = item.avatar;
      if (null != closure_1_11[item.user.id]) {
        if (null == avatar) {
          let result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        closure_1_11[obj.id] = result;
        if (obj !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = item.user;
      if (null != closure_1_11[item.user.id]) {
        const result1 = item(closure_1_3[6]).isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        if (!result1) {
          if (tmp5) {
            tmp4.primaryGuild = item(closure_1_3[6]).ensureUserPrimaryGuild(user.primary_guild);
            closure_1_11[tmp4.id] = tmp4;
            closure_12 = closure_12 + 1;
            const tmp7Result = item(closure_1_3[6]);
          }
          tmp5 = null == tmp4.primaryGuild || null != user.primary_guild;
        }
        const obj3 = item(closure_1_3[6]);
      }
    });
  });
  if (null != obj[store2.getId(store2)]) {
    obj = { id: null, username: "Wumpus", discriminator: "0", globalName: "Wumpus", avatar: "c1f86b313385cb97985f1b118851c28c" };
    obj[0] = c13;
    const tmp12 = new closure_5(obj);
    tmp6[c13] = tmp12;
  }
  tmp6 = obj;
}
function handleConnectionOpenSupplemental(arg0) {
  ({ guilds, lazyPrivateChannels } = arg0);
  let item = guilds.forEach((item, index) => {
    closure_0 = item;
    const members = item.members;
    item = members.forEach((item, index) => {
      const id = item.id;
      const avatar = item.avatar;
      if (null != closure_1_11[item.user.id]) {
        if (null == avatar) {
          let result = obj.removeGuildAvatarHash(id);
        } else {
          result = obj.addGuildAvatarHash(id, avatar);
        }
        closure_1_11[obj.id] = result;
        if (obj !== result) {
          closure_12 = closure_12 + 1;
        }
      }
      const user = item.user;
      if (null != closure_1_11[item.user.id]) {
        const result1 = item(closure_1_3[6]).isUserPrimaryGuildEqual(tmp4.primaryGuild, user.primary_guild);
        if (!result1) {
          if (tmp5) {
            tmp4.primaryGuild = item(closure_1_3[6]).ensureUserPrimaryGuild(user.primary_guild);
            closure_1_11[tmp4.id] = tmp4;
            closure_12 = closure_12 + 1;
            const tmp7Result = item(closure_1_3[6]);
          }
          tmp5 = null == tmp4.primaryGuild || null != user.primary_guild;
        }
        const obj3 = item(closure_1_3[6]);
      }
    });
  });
  if (lazyPrivateChannels != null) {
    const item1 = lazyPrivateChannels.forEach((item, index) => {
      const rawRecipients = item.rawRecipients;
      if (rawRecipients != null) {
        item = rawRecipients.forEach((item, index) => {
          callback(item);
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
        let tmp15 = new closure_5(nextResult);
        obj[tmp5.id] = tmp15;
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
  const item = messages.forEach((item, index) => {
    callback(item, true);
  });
  return false;
}
function handleConversationFetchSuccess(messages) {
  messages = messages.messages;
  const combined = messages.concat(messages.messageReferences);
  const item = combined.forEach((item, index) => {
    callback(item, true);
  });
  return false;
}
function handleConversationsFetchSuccess(rawConversations) {
  rawConversations = rawConversations.rawConversations;
  let item = rawConversations.forEach((item, index) => {
    const messages = item.messages;
    item = undefined;
    if (messages != null) {
      item = messages.forEach((item, index) => {
        callback(item, true);
      });
    }
    return item;
  });
  return false;
}
function handleLoadPinnedMessages(pins) {
  pins = pins.pins;
  const item = pins.forEach((item, index) => {
    callback(item.message, true);
  });
  return false;
}
function handleThreadListSync(mostRecentMessages) {
  mostRecentMessages = mostRecentMessages.mostRecentMessages;
  if (mostRecentMessages != null) {
    const item = mostRecentMessages.forEach((item, index) => {
      callback(item, false);
    });
  }
  return false;
}
function handleLoadSearchResults(data) {
  data = data.data;
  let item = data.forEach((item, index) => {
    ({ messages, channels } = item);
    item = messages.forEach((item, index) => {
      item = item.forEach((item, index) => {
        callback(item, true);
      });
    });
    const item1 = channels.forEach((item, index) => {
      if (!tmp2) {
        const recipients = item.recipients;
        if (recipients != null) {
          item = recipients.forEach((item, index) => callback(item));
        }
        if (null != item.recipient) {
          callback(item.recipient);
        }
      }
      tmp2 = item.type !== constants.DM && item.type !== tmp.GROUP_DM;
    });
  });
  return false;
}
function handleLoadThreadsSuccess(arg0) {
  ({ firstMessages, owners } = arg0);
  if (null != firstMessages) {
    const item = firstMessages.forEach((item, index) => {
      callback2(item, true);
    });
  }
  if (null != owners) {
    const item1 = owners.forEach((item, index) => callback(item.user, true));
  }
}
function handleLoadForumPosts(threads) {
  const values = Object.values(threads.threads);
  const item = values.forEach((item, index) => {
    ({ first_message, most_recent_message, owner } = item);
    if (null != first_message) {
      callback2(first_message, true);
    }
    if (null != most_recent_message) {
      callback2(most_recent_message, true);
    }
    if (tmp5) {
      callback(owner.user, true);
    }
    tmp5 = null != owner && null != owner.user;
  });
}
function handleLoadMessageRequestsSupplementalDataSuccess(supplementalData) {
  const values = Object.values(supplementalData.supplementalData);
  const item = values.forEach((item, index) => {
    const message_preview = item.message_preview;
    if (null != message_preview) {
      callback(message_preview, true);
    }
  });
}
function handleFetchUsersForGuildEventSuccess(arg0) {
  ({ guildScheduledEventUsers, guildId: require } = arg0);
  const item = guildScheduledEventUsers.forEach((item, index) => {
    ({ user, member } = item);
    if (null != user) {
      mergeUser(user);
      let avatar;
      if (member != null) {
        avatar = member.avatar;
      }
      if (null != avatar) {
        if (null != closure_1_11[user.id]) {
          if (null == avatar) {
            let result = obj.removeGuildAvatarHash(closure_0);
          } else {
            result = obj.addGuildAvatarHash(closure_0, avatar);
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
  const item = items.forEach((item, index) => {
    if (null != item.other_user) {
      callback(item.other_user);
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
        obj[id] = obj3.set("flags", hasFlagAll.setFlag(obj3.flags, constants.HAS_UNREAD_URGENT_MESSAGES, true));
        flag = true;
        const tmp2Result = hasFlagAll;
      }
      return flag;
    }
  }
  return false;
}
function handleCreateChannel(channel) {
  const rawRecipients = channel.channel.rawRecipients;
  if (null != rawRecipients) {
    const item = rawRecipients.forEach((item, index) => callback(item));
  }
  return false;
}
function handleUpdateChannels(arg0) {
  const iter = arg0.channels[Symbol.iterator]();
  while (iter !== undefined) {
    let rawRecipients = iter.next().rawRecipients;
    let arr = rawRecipients;
    if (null != rawRecipients) {
      let item = arr.forEach((item, index) => callback(item));
    }
    continue;
  }
  return false;
}
function handlePresenceUpdates(updates) {
  updates = updates.updates;
  const mapped = updates.map((item, index) => {
    closure_0 = item;
    const id = tmp2;
    if (null == table[item.user.id]) {
      return false;
    } else {
      const reduced = closure_43.reduce((acc, item, index) => {
        const user = item.user;
        let tmp2 = acc;
        if (user.hasOwnProperty(item)) {
          const result = closure_1.set(item(closure_1_3[14]).camelCase(item), item.user[item]);
          let tmp7 = acc;
          if (!acc) {
            tmp7 = result !== closure_1;
          }
          closure_1 = result;
          tmp2 = tmp7;
          obj = item(closure_1_3[14]);
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
  return mapped.some((item, index) => item);
}
function handleLoadedBans(bans) {
  bans = bans.bans;
  const item = bans.forEach((item, index) => callback(item.user));
}
function handleLoadedBansBatch(bans) {
  bans = bans.bans;
  const item = bans.forEach((item, index) => callback(item.user));
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
  c0 = false;
  function _loop(iter) {
    closure_0 = iter;
    const members = iter.members;
    closure_0 = members.reduce((acc, item, index) => {
      guildId = guildId.guildId;
      const avatar = item.avatar;
      let flag = false;
      if (null != closure_1_11[item.user.id]) {
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
        flag = acc;
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
  c0 = false;
  const item = members.forEach((item, index) => {
    let tmp = null != item.member;
    if (tmp) {
      tmp = mergeUser(item.member.user);
    }
    if (tmp) {
      c0 = true;
    }
    let tmp3 = null != item.presence;
    if (tmp3) {
      tmp3 = mergeUser(item.presence.user);
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
    const item = addedMembers.forEach((item, index) => {
      let tmp = null != item.member;
      if (tmp) {
        tmp = mergeUser(item.member.user);
      }
      if (tmp) {
        c0 = true;
      }
      let tmp3 = null != item.presence;
      if (tmp3) {
        tmp3 = mergeUser(item.presence.user);
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
  const item = members.forEach((item, index) => {
    const user = item.user;
    const id = user.id;
    const avatar2 = item.avatar;
    ({ username, avatar, discriminator, bot } = user);
    if (id !== closure_1_6.getId()) {
      obj = { id: null, username: null, avatar: null, discriminator: null, bot: null };
      obj[0] = id;
      obj[1] = username;
      obj[2] = avatar;
      obj[3] = discriminator;
      obj[4] = bot;
      mergeUser(obj);
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
  return relationships.reduce((acc, item, index) => callback(item.user) || acc, false);
}
function handleFriendSuggestionCreate(suggestion) {
  return mergeUser(suggestion.suggestion.suggested_user);
}
function handleLoadFriendSuggestions(suggestions) {
  suggestions = suggestions.suggestions;
  return suggestions.reduce((acc, item, index) => callback(item.suggested_user) || acc, false);
}
function handleAuditLogFetched(users) {
  users = users.users;
  const item = users.forEach((item, index) => {
    if (null == table[item.id]) {
      const tmp6 = new closure_5(item);
      tmp[item.id] = tmp6;
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
  const item = appliedBoosts.forEach((item, index) => {
    const user = item.user;
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
  return items.reduce((acc, item, index) => callback(item) || acc, false);
}
function handleLinkedUserFetch(users) {
  users = users.users;
  return users.reduce((acc, item, index) => callback(item) || acc, false);
}
function handleRequestLinkSuccess(users) {
  users = users.users;
  return users.reduce((acc, item, index) => callback(item) || acc, false);
}
function handleTeenActivityFetch(familyCenterTeenActivity) {
  familyCenterTeenActivity = familyCenterTeenActivity.familyCenterTeenActivity;
  if (undefined !== familyCenterTeenActivity) {
    const users = familyCenterTeenActivity.users;
    return users.reduce((acc, item, index) => callback(item) || acc, false);
  }
}
function handleTeenActivityMoreFetch(familyCenterTeenActivity) {
  const users = familyCenterTeenActivity.familyCenterTeenActivity.users;
  return users.reduce((acc, item, index) => callback(item) || acc, false);
}
function handleMemberSafetyGuildMemberSearchSuccess(members) {
  members = members.members;
  const id = store2.getId();
  return members.reduce((acc, item, index) => {
    let tmp = acc;
    if (item.member.user.id !== closure_0) {
      tmp = mergeUser(item.member.user) || acc;
      const tmp3 = mergeUser(item.member.user) || acc;
    }
    return tmp;
  }, false);
}
function handleLoadICYMIHydratedItems(messageItems) {
  messageItems = messageItems.messageItems;
  const item = messageItems.forEach((item, index) => {
    if (null != item.message) {
      callback(item.message, true);
    }
  }, false);
}
function handleEmbeddedActivityUpdateV2(instance) {
  const participants = instance.instance.participants;
  return participants.reduce((acc, item, index) => {
    let tmp = callback(table[15])(item);
    if (tmp) {
      tmp = callback2(item.member.user);
    }
    if (!tmp) {
      tmp = acc;
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
      const id = store2.getId();
      store2[id] = obj2.set("ageVerificationStatus", PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING);
      flag = true;
    }
    return flag;
  }
}
function handleCloseAgeVerificationModal(status) {
  const obj2 = store2[store2.getId(store2)];
  let tmp2 = null != obj2;
  if (tmp2) {
    let flag = obj2.ageVerificationStatus === PermissionOverwriteType.AgeVerificationStatusUkAndAusOnly.CLIENT_ONLY_PENDING;
    if (flag) {
      const id = store2.getId();
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
        let tmp8 = resolved.users[tmp4];
        if (tmp8.id === store2.getId()) {
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
  return stickers.reduce((acc, item, index) => {
    let tmp = null != item.user;
    if (tmp) {
      tmp = callback(item.user);
    }
    if (!tmp) {
      tmp = acc;
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
      INTERACTION_MODAL_CREATE: handleInteractionModalCreate
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
      let tmp10 = new closure_5(item10012);
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
      if (tmp19) {
        tmp19 = isIncompleteUser(tmp16);
      }
      if (!tmp19) {
        let tmp28 = new closure_5(nextResult);
        obj[tmp16.id] = tmp28;
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
        let item = rawRecipients.forEach((item, index) => callback(item, false));
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
prototype["forEach"] = function forEach(fn) {
  for (const key10005 in obj) {
    if (false === arg0(obj[key10005])) {
      break;
    }
  }
};
prototype["findByTag"] = function findByTag(match, match2) {
  for (const key10005 in obj) {
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
prototype["filter"] = function filter(fn) {
  let flag = arg1;
  if (arg1 === undefined) {
    flag = false;
  }
  const items = [];
  for (const key10006 in obj) {
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
let result = require("obj132").fileFinishedImporting("stores/UserStore.tsx");

export default userStore;
export const users = obj;
export const ASSISTANT_WUMPUS_VOICE_USER = "47835198259242069";
export { transformUser };
export { mergeUser };