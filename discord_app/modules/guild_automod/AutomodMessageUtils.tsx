// === Module 7221: getDecisionOutcomeFromMessage ===

// Module 7221 (getDecisionOutcomeFromMessage)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import AutomodQuarantineUserActionMessageEmbedKeys from "AutomodQuarantineUserActionMessageEmbedKeys" /* 7223 */;
import AutomodQuarantineUserMessageEmbedKeys from "AutomodQuarantineUserMessageEmbedKeys" /* 7228 */;
import Feedback from "Feedback" /* 7231 */;
import closure_2 from "_slicedToArray" /* 32 */;
import closure_3 from "noop" /* 19 */;
import closure_4 from "ensureGuildLoaded" /* 1387 */;
import closure_5 from "getUncachedChannelPermissions" /* 4091 */;
import closure_6 from "markAllUserIdListsStale" /* 4100 */;
import closure_7 from "mergeGuildAvatar" /* 1922 */;
import ME from "ME" /* 676 */;

require = arg1;
function getDecisionOutcomeFromMessage(embeds) {
  DECISION_OUTCOME = DECISION_OUTCOME(7222).AutomodMessageEmbedKeys.DECISION_OUTCOME;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function getQuarantineTypeFromMessage(embeds) {
  QUARANTINE_USER = QUARANTINE_USER(7222).AutomodMessageEmbedKeys.QUARANTINE_USER;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function getQuarantineActionFromMessage(embeds) {
  QUARANTINE_USER_ACTION = QUARANTINE_USER_ACTION(7222).AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function getProfileUpdateTypeFromMessage(embeds) {
  BLOCK_PROFILE_UPDATE_TYPE = BLOCK_PROFILE_UPDATE_TYPE(7222).AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function getQuarantineEventFromMessage(embeds) {
  QUARANTINE_EVENT = QUARANTINE_EVENT(7222).AutomodMessageEmbedKeys.QUARANTINE_EVENT;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function _getUserProfileRuleHeaderText(arg0, arg1, arg2) {
  if (AutomodQuarantineUserActionMessageEmbedKeys.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE === arg1) {
    if (tmp(7224).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE === arg0) {
      const intl6 = tmp(1236).intl;
      let stringResult = intl6.string(tmp(1236).t.t98DPb);
    } else if (tmp(7224).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET === arg0) {
      const intl5 = tmp(1236).intl;
      stringResult = intl5.string(tmp(1236).t["7u/rlU"]);
    }
    return stringResult;
  } else if (tmp(7223).AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER === arg1) {
    if (tmp(7225).AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND === arg2) {
      const intl4 = tmp(1236).intl;
      let stringResult1 = intl4.string(tmp(1236).t.PmSMMS);
    } else if (tmp(7225).AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN === arg2) {
      const intl3 = tmp(1236).intl;
      stringResult1 = intl3.string(tmp(1236).t.m9wWzo);
    } else if (tmp(7225).AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE === arg2) {
      const intl2 = tmp(1236).intl;
      stringResult1 = intl2.string(tmp(1236).t.KNSkC6);
    } else if (tmp(7225).AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE === arg2) {
      const intl7 = tmp(1236).intl;
      stringResult1 = intl7.string(tmp(1236).t.qV4K6j);
    }
    return stringResult1;
  } else if (tmp(7223).AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN === arg1) {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.MrYeyS);
  }
}
function extractAutomodMessageFields(message) {
  INTERACTION_CALLBACK_TYPE = INTERACTION_CALLBACK_TYPE(7222).AutomodMessageEmbedKeys.CHANNEL_ID;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp5;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp7 = rawValue;
    }
    tmp5 = tmp7;
  }
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = tmp3(embeds1, 1)[0];
  let tmp11;
  if (null != first1) {
    if (first1.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue1;
      if (first1 != null) {
        const fields1 = first1.fields;
        if (fields1 != null) {
          const found1 = fields1.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found1 != null) {
            rawValue1 = found1.rawValue;
          }
        }
      }
      const tmp13 = rawValue1;
    }
    tmp11 = tmp13;
  }
  const result = INTERACTION_CALLBACK_TYPE(7230).parseAlertActionsExecution(tmp11);
  let embeds2 = message.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = tmp3(embeds2, 1)[0];
  let str;
  if (first2 != null) {
    str = first2.rawDescription;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: str, ruleName: null, decisionId: null, keyword: null, keywordMatchedContent: null, flaggedMessageId: null, timeoutDuration: null, quarantineType: null, quarantineAction: null, decisionReason: null, applicationName: null, interactionUserId: null, interactionCallbackType: null, embedChannel: null, embedChannelId: null, alertActionsExecution: null };
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.RULE_NAME;
  let embeds3 = message.embeds;
  if (embeds3 == null) {
    embeds3 = [];
  }
  const first3 = tmp3(embeds3, 1)[0];
  let tmp19;
  if (null != first3) {
    if (first3.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue2;
      if (first3 != null) {
        const fields2 = first3.fields;
        if (fields2 != null) {
          const found2 = fields2.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found2 != null) {
            rawValue2 = found2.rawValue;
          }
        }
      }
      const tmp21 = rawValue2;
    }
    tmp19 = tmp21;
  }
  obj[1] = tmp19;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.DECISION_ID;
  let embeds4 = message.embeds;
  if (embeds4 == null) {
    embeds4 = [];
  }
  const first4 = tmp3(embeds4, 1)[0];
  let tmp25;
  if (null != first4) {
    if (first4.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue3;
      if (first4 != null) {
        const fields3 = first4.fields;
        if (fields3 != null) {
          const found3 = fields3.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found3 != null) {
            rawValue3 = found3.rawValue;
          }
        }
      }
      const tmp27 = rawValue3;
    }
    tmp25 = tmp27;
  }
  obj[2] = tmp25;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.KEYWORD;
  let embeds5 = message.embeds;
  if (embeds5 == null) {
    embeds5 = [];
  }
  const first5 = tmp3(embeds5, 1)[0];
  let tmp31;
  if (null != first5) {
    if (first5.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue4;
      if (first5 != null) {
        const fields4 = first5.fields;
        if (fields4 != null) {
          const found4 = fields4.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found4 != null) {
            rawValue4 = found4.rawValue;
          }
        }
      }
      const tmp33 = rawValue4;
    }
    tmp31 = tmp33;
  }
  obj[3] = tmp31;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT;
  let embeds6 = message.embeds;
  if (embeds6 == null) {
    embeds6 = [];
  }
  const first6 = tmp3(embeds6, 1)[0];
  let tmp37;
  if (null != first6) {
    if (first6.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue5;
      if (first6 != null) {
        const fields5 = first6.fields;
        if (fields5 != null) {
          const found5 = fields5.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found5 != null) {
            rawValue5 = found5.rawValue;
          }
        }
      }
      const tmp39 = rawValue5;
    }
    tmp37 = tmp39;
  }
  obj[4] = tmp37;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID;
  let embeds7 = message.embeds;
  if (embeds7 == null) {
    embeds7 = [];
  }
  const first7 = tmp3(embeds7, 1)[0];
  let tmp43;
  if (null != first7) {
    if (first7.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue6;
      if (first7 != null) {
        const fields6 = first7.fields;
        if (fields6 != null) {
          const found6 = fields6.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found6 != null) {
            rawValue6 = found6.rawValue;
          }
        }
      }
      const tmp45 = rawValue6;
    }
    tmp43 = tmp45;
  }
  obj[5] = tmp43;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.TIMEOUT_DURATION;
  let embeds8 = message.embeds;
  if (embeds8 == null) {
    embeds8 = [];
  }
  const first8 = tmp3(embeds8, 1)[0];
  let tmp49;
  if (null != first8) {
    if (first8.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue7;
      if (first8 != null) {
        const fields7 = first8.fields;
        if (fields7 != null) {
          const found7 = fields7.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found7 != null) {
            rawValue7 = found7.rawValue;
          }
        }
      }
      const tmp51 = rawValue7;
    }
    tmp49 = tmp51;
  }
  obj[6] = tmp49;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.QUARANTINE_USER;
  let embeds9 = message.embeds;
  if (embeds9 == null) {
    embeds9 = [];
  }
  const first9 = tmp3(embeds9, 1)[0];
  let tmp55;
  if (null != first9) {
    if (first9.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue8;
      if (first9 != null) {
        const fields8 = first9.fields;
        if (fields8 != null) {
          const found8 = fields8.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found8 != null) {
            rawValue8 = found8.rawValue;
          }
        }
      }
      const tmp57 = rawValue8;
    }
    tmp55 = tmp57;
  }
  obj[7] = tmp55;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION;
  let embeds10 = message.embeds;
  if (embeds10 == null) {
    embeds10 = [];
  }
  const first10 = tmp3(embeds10, 1)[0];
  let tmp61;
  if (null != first10) {
    if (first10.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue9;
      if (first10 != null) {
        const fields9 = first10.fields;
        if (fields9 != null) {
          const found9 = fields9.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found9 != null) {
            rawValue9 = found9.rawValue;
          }
        }
      }
      const tmp63 = rawValue9;
    }
    tmp61 = tmp63;
  }
  obj[8] = tmp61;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.DECISION_REASON;
  let embeds11 = message.embeds;
  if (embeds11 == null) {
    embeds11 = [];
  }
  const first11 = tmp3(embeds11, 1)[0];
  let tmp67;
  if (null != first11) {
    if (first11.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue10;
      if (first11 != null) {
        const fields10 = first11.fields;
        if (fields10 != null) {
          const found10 = fields10.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found10 != null) {
            rawValue10 = found10.rawValue;
          }
        }
      }
      const tmp69 = rawValue10;
    }
    tmp67 = tmp69;
  }
  obj[9] = tmp67;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds12 = message.embeds;
  if (embeds12 == null) {
    embeds12 = [];
  }
  const first12 = tmp3(embeds12, 1)[0];
  let tmp73;
  if (null != first12) {
    if (first12.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue11;
      if (first12 != null) {
        const fields11 = first12.fields;
        if (fields11 != null) {
          const found11 = fields11.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found11 != null) {
            rawValue11 = found11.rawValue;
          }
        }
      }
      const tmp75 = rawValue11;
    }
    tmp73 = tmp75;
  }
  obj[10] = tmp73;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.INTERACTION_USER_ID;
  let embeds13 = message.embeds;
  if (embeds13 == null) {
    embeds13 = [];
  }
  const first13 = tmp3(embeds13, 1)[0];
  let tmp79;
  if (null != first13) {
    if (first13.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue12;
      if (first13 != null) {
        const fields12 = first13.fields;
        if (fields12 != null) {
          const found12 = fields12.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found12 != null) {
            rawValue12 = found12.rawValue;
          }
        }
      }
      const tmp81 = rawValue12;
    }
    tmp79 = tmp81;
  }
  obj[11] = tmp79;
  INTERACTION_CALLBACK_TYPE = tmp(7222).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  let embeds14 = message.embeds;
  if (embeds14 == null) {
    embeds14 = [];
  }
  const first14 = tmp3(embeds14, 1)[0];
  let tmp85;
  if (null != first14) {
    if (first14.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue13;
      if (first14 != null) {
        const fields13 = first14.fields;
        if (fields13 != null) {
          const found13 = fields13.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found13 != null) {
            rawValue13 = found13.rawValue;
          }
        }
      }
      const tmp87 = rawValue13;
    }
    tmp85 = tmp87;
  }
  obj[12] = tmp85;
  obj[13] = channel.getChannel(tmp5);
  obj[14] = tmp5;
  obj[15] = result;
  return obj;
}
({ MessageEmbedTypes: closure_8, MessageTypes: c9, NOOP_NULL: c10, Permissions: unpackModuleId } = ME);
let result = require("set").fileFinishedImporting("modules/guild_automod/AutomodMessageUtils.tsx");

export default function useAutomodMessageFields(arg0) {
  const _require = arg0;
  const items = [arg0];
  const memo = React.useMemo(() => closure_1_18(closure_0), items);
  let obj = _require(memo[18]);
  const items1 = [closure_4];
  const items2 = [memo.embedChannelId];
  obj = {};
  const stateFromStores = obj.useStateFromStores(items1, () => closure_1_4.getChannel(memo.embedChannelId), items2);
  const merged = Object.assign(memo);
  obj.embedChannel = stateFromStores;
  return obj;
};
export const isAutomodMessageRecord = function isAutomodMessageRecord(message) {
  return message.type === constants2.AUTO_MODERATION_ACTION;
};
export const isAutomodNotification = function isAutomodNotification(message) {
  const embeds = message.embeds;
  let someResult;
  if (embeds != null) {
    someResult = embeds.some((type) => type.type === constants.AUTO_MODERATION_NOTIFICATION);
  }
  return someResult;
};
export const getActionHeaderTextMobile = function getActionHeaderTextMobile(message, author, interactionUserId) {
  const tmp = getProfileUpdateTypeFromMessage(message);
  const tmp2 = getQuarantineActionFromMessage(message);
  if (null != getQuarantineTypeFromMessage(message)) {
    const tmp5 = _getUserProfileRuleHeaderText(tmp, tmp2, tmp3);
    if (null != tmp5) {
      return tmp5;
    }
  }
  const tmp6 = getDecisionOutcomeFromMessage(message);
  Xy2Iw_ = APPLICATION_NAME;
  let obj = dependencyMap;
  APPLICATION_NAME = APPLICATION_NAME(7222).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp11 = rawValue;
    }
    const tmp9 = tmp11;
  }
  APPLICATION_NAME = Xy2Iw_(7222).AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = callback(embeds1, 1)[0];
  let tmp15;
  if (null != first1) {
    if (first1.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue1;
      if (first1 != null) {
        const fields1 = first1.fields;
        if (fields1 != null) {
          const found1 = fields1.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found1 != null) {
            rawValue1 = found1.rawValue;
          }
        }
      }
      const tmp17 = rawValue1;
    }
    tmp15 = tmp17;
  }
  if (null != tmp15) {
    let username = author;
    let username2 = user.getUser(interactionUserId);
    if (tmp9 === Xy2Iw_(7226).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
      if (null != username2) {
        if (tmp6 !== Xy2Iw_(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = Xy2Iw_(1236).intl;
          Xy2Iw_ = Xy2Iw_(1236).t["Xy2Iw+"];
          obj = { applicationName: null, interactionUser: null, integrationOwner: null };
          obj[0] = tmp15;
          username2 = username2.username;
          obj[1] = username2;
          username = username.username;
          obj[2] = username;
          let formatToPlainStringResult = intl6.formatToPlainString(Xy2Iw_, obj);
        } else {
          const intl5 = Xy2Iw_(1236).intl;
          obj = { applicationName: null, interactionUser: null, integrationOwner: null };
          obj[0] = tmp15;
          obj[1] = username2.username;
          obj[2] = username.username;
          formatToPlainStringResult = intl5.formatToPlainString(Xy2Iw_(1236).t["MCK/t7"], obj);
        }
      }
    }
    if (tmp6 !== Xy2Iw_(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl4 = Xy2Iw_(1236).intl;
      obj = { applicationName: null, integrationOwner: null };
      obj[0] = tmp15;
      obj[1] = username.username;
      let formatToPlainStringResult1 = intl4.formatToPlainString(Xy2Iw_(1236).t["0Kmtr7"], obj);
    } else {
      const intl3 = Xy2Iw_(1236).intl;
      obj1 = { applicationName: null, integrationOwner: null };
      obj1[0] = tmp15;
      obj1[1] = username.username;
      formatToPlainStringResult1 = intl3.formatToPlainString(Xy2Iw_(1236).t.I0FiWp, obj1);
    }
    return formatToPlainStringResult1;
  } else {
    if (tmp6 !== Xy2Iw_(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl2 = Xy2Iw_(1236).intl;
      let stringResult = intl2.string(Xy2Iw_(1236).t.Oo38tv);
    } else {
      const intl = Xy2Iw_(1236).intl;
      stringResult = intl.string(Xy2Iw_(1236).t["2kuGkD"]);
    }
    return stringResult;
  }
  tmp3 = getQuarantineEventFromMessage(message);
  const tmp7 = callback;
};
export const getActionHeaderText = function getActionHeaderText(embeds, channel) {
  let intl = arg2;
  if (arg2 === undefined) {
    intl = closure_10;
  }
  if (null != channel) {
    let obj2 = GUILD_ROOM_NOTE_OUTCOME(4642);
    let channelName = obj2.computeChannelName(channel, closure_7, closure_6);
    let obj = dependencyMap;
    let format = GUILD_ROOM_NOTE_OUTCOME;
    let obj3 = dependencyMap;
  } else {
    const intl2 = GUILD_ROOM_NOTE_OUTCOME(1236).intl;
    channelName = intl2.string(GUILD_ROOM_NOTE_OUTCOME(1236).t.J90oLW);
    obj = dependencyMap;
    format = GUILD_ROOM_NOTE_OUTCOME;
    obj3 = dependencyMap;
  }
  const tmp8 = getProfileUpdateTypeFromMessage(embeds);
  const tmp9 = getQuarantineActionFromMessage(embeds);
  const tmp10 = getQuarantineEventFromMessage(embeds);
  const tmp12 = getDecisionOutcomeFromMessage(embeds);
  GUILD_ROOM_NOTE_OUTCOME = _4xL9Sk(7222).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp17 = rawValue;
    }
    const tmp15 = tmp17;
  }
  GUILD_ROOM_NOTE_OUTCOME = _4xL9Sk(7222).AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = embeds.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = tmp13(embeds1, 1)[0];
  if (null != first1) {
    if (first1.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue1;
      if (first1 != null) {
        const fields1 = first1.fields;
        if (fields1 != null) {
          const found1 = fields1.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found1 != null) {
            rawValue1 = found1.rawValue;
          }
        }
      }
      const tmp23 = rawValue1;
    }
  }
  if (null != tmp11) {
    const tmp27 = _getUserProfileRuleHeaderText(tmp8, tmp9, tmp10);
    if (null != tmp27) {
      return tmp27;
    }
  }
  if (null == channel) {
    let tmp29 = closure_10;
  } else {
    tmp29 = intl;
  }
  GUILD_ROOM_NOTE_OUTCOME = format(7222).AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME;
  let embeds2 = embeds.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = tmp13(embeds2, 1)[0];
  let tmp31;
  if (null != first2) {
    if (first2.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue2;
      if (first2 != null) {
        const fields2 = first2.fields;
        if (fields2 != null) {
          const found2 = fields2.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found2 != null) {
            rawValue2 = found2.rawValue;
          }
        }
      }
      const tmp33 = rawValue2;
    }
    tmp31 = tmp33;
  }
  if (null == tmp31) {
    if (null != null) {
      return null;
    } else {
      GUILD_ROOM_NOTE_OUTCOME = format(7222).AutomodMessageEmbedKeys.GUILD_ROOM_NOTE_OUTCOME;
      let embeds3 = embeds.embeds;
      if (embeds3 == null) {
        embeds3 = [];
      }
      const first3 = tmp13(embeds3, 1)[0];
      let tmp38;
      if (null != first3) {
        if (first3.type === constants.AUTO_MODERATION_MESSAGE) {
          let rawValue3;
          if (first3 != null) {
            const fields3 = first3.fields;
            if (fields3 != null) {
              const found3 = fields3.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
              if (found3 != null) {
                rawValue3 = found3.rawValue;
              }
            }
          }
          const tmp40 = rawValue3;
        }
        tmp38 = tmp40;
      }
      if (null == tmp38) {
        if (null != null) {
          return null;
        } else {
          if (null == tmp21) {
            if (tmp12 !== _4xL9Sk(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
              intl = _4xL9Sk(1236).intl;
              obj = { channelName: null, channelHook: null };
              obj[0] = channelName;
              obj[1] = tmp29;
              let formatResult = intl.format(_4xL9Sk(1236).t.IZg0VQ, obj);
            } else {
              const intl5 = _4xL9Sk(1236).intl;
              obj = { channelName: null, channelHook: null };
              obj[0] = channelName;
              obj[1] = tmp29;
              formatResult = intl5.format(_4xL9Sk(1236).t.lOIOSK, obj);
            }
          }
          if (tmp15 !== _4xL9Sk(7226).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
            if (tmp12 !== _4xL9Sk(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
              const intl7 = _4xL9Sk(1236).intl;
              obj1 = { applicationName: null, channelName: null, channelHook: null, integrationOwnerHook: null };
              obj1[0] = tmp21;
              obj1[1] = channelName;
              obj1[2] = tmp29;
              obj1[3] = arg3;
              let formatResult1 = intl7.format(_4xL9Sk(1236).t.AXQufN, obj1);
            } else {
              const intl6 = _4xL9Sk(1236).intl;
              obj2 = { applicationName: null, channelName: null, channelHook: null, integrationOwnerHook: null };
              obj2[0] = tmp21;
              obj2[1] = channelName;
              obj2[2] = tmp29;
              obj2[3] = arg3;
              formatResult1 = intl6.format(_4xL9Sk(1236).t.s3tjMN, obj2);
            }
          } else {
            intl = arg4;
          }
          if (tmp12 !== _4xL9Sk(7227).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
            const intl9 = _4xL9Sk(1236).intl;
            obj3 = { applicationName: null, interactionUserHook: null, integrationOwnerHook: null };
            obj3[0] = tmp21;
            obj3[1] = intl;
            obj3[2] = arg3;
            let formatResult2 = intl9.format(_4xL9Sk, obj3);
          } else {
            const intl8 = _4xL9Sk(1236).intl;
            const obj4 = { applicationName: null, interactionUserHook: null, integrationOwnerHook: null };
            obj4[0] = tmp21;
            obj4[1] = intl;
            obj4[2] = arg3;
            formatResult2 = intl8.format(_4xL9Sk(1236).t.S3lNIT, obj4);
          }
        }
      } else {
        if ("blocked" === tmp38) {
          srla2_ = format(1236).t["9x7Jdd"];
        } else {
          srla2_ = format(1236).t["srla2+"];
        }
        const intl4 = format(1236).intl;
        format = intl4.format;
        obj = { channelName: null, channelHook: null };
        obj[0] = channelName;
        obj[1] = intl;
        format(srla2_, obj);
      }
    }
  } else {
    if ("blocked" === tmp31) {
      let bma6cs = format(1236).t.cLQrqz;
    } else {
      bma6cs = format(1236).t.bma6cs;
    }
    const intl3 = format(1236).intl;
    const obj5 = { channelName: null, channelHook: null };
    obj5[0] = channelName;
    obj5[1] = intl;
    intl3.format(bma6cs, obj5);
  }
};
export const getQuarantineReasonString = function getQuarantineReasonString(quarantineType) {
  if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.NICKNAME === quarantineType) {
    const intl5 = tmp(1236).intl;
    return intl5.string(tmp(1236).t["fkBQa/"]);
  } else if (tmp(7228).AutomodQuarantineUserMessageEmbedKeys.USERNAME === quarantineType) {
    const intl4 = tmp(1236).intl;
    return intl4.string(tmp(1236).t.pJQVnr);
  } else if (tmp(7228).AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME === quarantineType) {
    const intl3 = tmp(1236).intl;
    return intl3.string(tmp(1236).t.V9eJ85);
  } else if (tmp(7228).AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG === quarantineType) {
    const intl2 = tmp(1236).intl;
    return intl2.string(tmp(1236).t.Rtum01);
  } else {
    const intl = tmp(1236).intl;
    return intl.string(tmp(1236).t.pJQVnr);
  }
};
export const extractAutomodNotificationFields = function extractAutomodNotificationFields(message) {
  _require = _require(7229).AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp5;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp7 = rawValue;
    }
    tmp5 = tmp7;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.JOIN_ATTEMPTS;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = tmp3(embeds1, 1)[0];
  let tmp11;
  if (null != first1) {
    if (first1.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue1;
      if (first1 != null) {
        const fields1 = first1.fields;
        if (fields1 != null) {
          const found1 = fields1.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found1 != null) {
            rawValue1 = found1.rawValue;
          }
        }
      }
      const tmp13 = rawValue1;
    }
    tmp11 = tmp13;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.RAID_DATETIME;
  let embeds2 = message.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = tmp3(embeds2, 1)[0];
  let tmp17;
  if (null != first2) {
    if (first2.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue2;
      if (first2 != null) {
        const fields2 = first2.fields;
        if (fields2 != null) {
          const found2 = fields2.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found2 != null) {
            rawValue2 = found2.rawValue;
          }
        }
      }
      const tmp19 = rawValue2;
    }
    tmp17 = tmp19;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.DMS_SENT;
  let embeds3 = message.embeds;
  if (embeds3 == null) {
    embeds3 = [];
  }
  const first3 = tmp3(embeds3, 1)[0];
  let tmp23;
  if (null != first3) {
    if (first3.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue3;
      if (first3 != null) {
        const fields3 = first3.fields;
        if (fields3 != null) {
          const found3 = fields3.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found3 != null) {
            rawValue3 = found3.rawValue;
          }
        }
      }
      const tmp25 = rawValue3;
    }
    tmp23 = tmp25;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.RAID_TYPE;
  let embeds4 = message.embeds;
  if (embeds4 == null) {
    embeds4 = [];
  }
  const first4 = tmp3(embeds4, 1)[0];
  let tmp29;
  if (null != first4) {
    if (first4.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue4;
      if (first4 != null) {
        const fields4 = first4.fields;
        if (fields4 != null) {
          const found4 = fields4.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found4 != null) {
            rawValue4 = found4.rawValue;
          }
        }
      }
      const tmp31 = rawValue4;
    }
    tmp29 = tmp31;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.RESOLVED_REASON;
  let embeds5 = message.embeds;
  if (embeds5 == null) {
    embeds5 = [];
  }
  const first5 = tmp3(embeds5, 1)[0];
  let tmp35;
  if (null != first5) {
    if (first5.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue5;
      if (first5 != null) {
        const fields5 = first5.fields;
        if (fields5 != null) {
          const found5 = fields5.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found5 != null) {
            rawValue5 = found5.rawValue;
          }
        }
      }
      const tmp37 = rawValue5;
    }
    tmp35 = tmp37;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.DECISION_ID;
  let embeds6 = message.embeds;
  if (embeds6 == null) {
    embeds6 = [];
  }
  const first6 = tmp3(embeds6, 1)[0];
  let tmp41;
  if (null != first6) {
    if (first6.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue6;
      if (first6 != null) {
        const fields6 = first6.fields;
        if (fields6 != null) {
          const found6 = fields6.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found6 != null) {
            rawValue6 = found6.rawValue;
          }
        }
      }
      const tmp43 = rawValue6;
    }
    tmp41 = tmp43;
  }
  _require = tmp(7229).AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
  let embeds7 = message.embeds;
  if (embeds7 == null) {
    embeds7 = [];
  }
  const first7 = tmp3(embeds7, 1)[0];
  let tmp47;
  if (null != first7) {
    if (first7.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue7;
      if (first7 != null) {
        const fields7 = first7.fields;
        if (fields7 != null) {
          const found7 = fields7.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found7 != null) {
            rawValue7 = found7.rawValue;
          }
        }
      }
      const tmp49 = rawValue7;
    }
    tmp47 = tmp49;
  }
  let tmp52 = null;
  if (null != tmp5) {
    tmp52 = tmp5;
  }
  const obj = { notificationType: tmp52, joinAttempts: null, raidDatetime: null, dmsSent: null, raidType: null, resolvedReason: null, decisionId: null, suspiciousMentionActivityUntil: null };
  let parsed;
  if (null != tmp11) {
    const _parseInt = parseInt;
    parsed = parseInt(tmp11);
  }
  obj[1] = parsed;
  let date;
  if (null != tmp17) {
    const _Date = Date;
    date = new Date(tmp17);
  }
  obj[2] = date;
  let parsed1;
  if (null != tmp23) {
    const _parseInt2 = parseInt;
    parsed1 = parseInt(tmp23);
  }
  obj[3] = parsed1;
  let tmp62;
  if (null != tmp29) {
    tmp62 = tmp29;
  }
  obj[4] = tmp62;
  let tmp63;
  if (null != tmp35) {
    tmp63 = tmp35;
  }
  obj[5] = tmp63;
  let tmp64;
  if (null != tmp41) {
    tmp64 = tmp41;
  }
  obj[6] = tmp64;
  let date1;
  if (null != tmp47) {
    const _Date2 = Date;
    date1 = new Date(tmp47);
  }
  obj[7] = date1;
  return obj;
};
export { extractAutomodMessageFields };
export const useAutomodAlertActions = function useAutomodAlertActions(message) {
  let tmp = null;
  if (null != message) {
    let prop = extractAutomodMessageFields(message).alertActionsExecution;
    if (prop == null) {
      prop = null;
    }
    tmp = prop;
  }
  return tmp;
};
export const getRaidAlertResolveCTAText = function getRaidAlertResolveCTAText(resolvedReason) {
  if (null == resolvedReason) {
    const intl5 = getSystemLocale.intl;
    return intl5.string(getSystemLocale.t.Gh3A0O);
  } else if (Feedback.RaidResolutionType.LEGITIMATE_ACTIVITY === resolvedReason) {
    const intl4 = tmp3(1236).intl;
    return intl4.string(tmp3(1236).t["riQ+HH"]);
  } else if (tmp3(7231).RaidResolutionType.DM_SPAM === resolvedReason) {
    const intl3 = tmp3(1236).intl;
    return intl3.string(tmp3(1236).t.j5V0ij);
  } else if (tmp3(7231).RaidResolutionType.JOIN_RAID === resolvedReason) {
    const intl2 = tmp3(1236).intl;
    return intl2.string(tmp3(1236).t.qhaRbG);
  } else {
    const intl = tmp3(1236).intl;
    return intl.string(tmp3(1236).t.GPg6JM);
  }
};
export const getUserIdOfAutomodAction = function getUserIdOfAutomodAction(message) {
  ACTION_BY_USER_ID = ACTION_BY_USER_ID(7229).AutomodNotificationEmbedKeys.ACTION_BY_USER_ID;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = callback(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    if (first.type === constants.AUTO_MODERATION_MESSAGE) {
      let rawValue;
      if (first != null) {
        const fields = first.fields;
        if (fields != null) {
          const found = fields.find((rawName) => rawName.rawName === ACTION_BY_USER_ID);
          if (found != null) {
            rawValue = found.rawValue;
          }
        }
      }
      const tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};