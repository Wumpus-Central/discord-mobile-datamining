// === Module 7508: AutomodMessageUtils ===

// Module 7508 (AutomodMessageUtils)
import useChannelName from "useChannelName" /* 4713 */;
import AutomodMessageEmbedKeys from "AutomodMessageEmbedKeys" /* 7509 */;
import AutomodQuarantineUserActionMessageEmbedKeys from "AutomodQuarantineUserActionMessageEmbedKeys" /* 7510 */;
import AutomodQuarantineUserMessageEmbedKeys from "AutomodQuarantineUserMessageEmbedKeys" /* 7515 */;
import AutomodNotificationEmbedKeys from "AutomodNotificationEmbedKeys" /* 7516 */;
import AutomodAlert from "AutomodAlert" /* 7517 */;
import AutomodFeedback from "AutomodFeedback" /* 7518 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;
import PermissionStore from "PermissionStore" /* 4199 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;
import UserStore from "UserStore" /* 1371 */;

const util = prop(1114);
const AutomodInteractionCallbackTypeEmbedKeys = prop(7513);
const AutomodDecisionOutcomeEmbedKeys = prop(7514);
require = fn;
function getDecisionOutcomeFromMessage(embeds) {
  const DECISION_OUTCOME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.DECISION_OUTCOME;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  const QUARANTINE_USER = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.QUARANTINE_USER;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  const QUARANTINE_USER_ACTION = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  const BLOCK_PROFILE_UPDATE_TYPE = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.BLOCK_PROFILE_UPDATE_TYPE;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  const QUARANTINE_EVENT = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.QUARANTINE_EVENT;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
function _getUserProfileRuleHeaderText(profileUpdateTypeFromMessage, quarantineActionFromMessage, quarantineEventFromMessage) {
  if (AutomodQuarantineUserActionMessageEmbedKeys.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE === quarantineActionFromMessage) {
    if (tmp(7511).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE === profileUpdateTypeFromMessage) {
      const intl6 = tmp(1114).intl;
      let stringResult = intl6.string(tmp(1114).t.t98DPb);
    } else if (tmp(7511).AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET === profileUpdateTypeFromMessage) {
      const intl5 = tmp(1114).intl;
      stringResult = intl5.string(tmp(1114).t["7u/rlU"]);
    }
    return stringResult;
  } else if (tmp(7510).AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER === quarantineActionFromMessage) {
    if (tmp(7512).AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND === quarantineEventFromMessage) {
      const intl4 = tmp(1114).intl;
      let stringResult1 = intl4.string(tmp(1114).t.PmSMMS);
    } else if (tmp(7512).AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN === quarantineEventFromMessage) {
      const intl3 = tmp(1114).intl;
      stringResult1 = intl3.string(tmp(1114).t.m9wWzo);
    } else if (tmp(7512).AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE === quarantineEventFromMessage) {
      const intl2 = tmp(1114).intl;
      stringResult1 = intl2.string(tmp(1114).t.KNSkC6);
    } else if (tmp(7512).AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE === quarantineEventFromMessage) {
      const intl7 = tmp(1114).intl;
      stringResult1 = intl7.string(tmp(1114).t.qV4K6j);
    }
    return stringResult1;
  } else if (tmp(7510).AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN === quarantineActionFromMessage) {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.MrYeyS);
  }
}
function extractAutomodMessageFields(message) {
  let INTERACTION_CALLBACK_TYPE = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.CHANNEL_ID;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION;
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
  const result = AutomodAlert.parseAlertActionsExecution(tmp11);
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
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.RULE_NAME;
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
  obj.ruleName = tmp19;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.DECISION_ID;
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
  obj.decisionId = tmp25;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.KEYWORD;
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
  obj.keyword = tmp31;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT;
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
  obj.keywordMatchedContent = tmp37;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID;
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
  obj.flaggedMessageId = tmp43;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.TIMEOUT_DURATION;
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
  obj.timeoutDuration = tmp49;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.QUARANTINE_USER;
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
  obj.quarantineType = tmp55;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION;
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
  obj.quarantineAction = tmp61;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.DECISION_REASON;
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
  obj.decisionReason = tmp67;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.APPLICATION_NAME;
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
  obj.applicationName = tmp73;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.INTERACTION_USER_ID;
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
  obj.interactionUserId = tmp79;
  INTERACTION_CALLBACK_TYPE = tmp(7509).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
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
  obj.interactionCallbackType = tmp85;
  obj.embedChannel = ChannelStore.getChannel(tmp5);
  obj.embedChannelId = tmp5;
  obj.alertActionsExecution = result;
  return obj;
}
const Constants = fn(1074);
({ MessageEmbedTypes: closure_8, MessageTypes: closure_9, NOOP_NULL: c10, Permissions: closure_11 } = Constants);
const size = fn(2);
let result = size.fileFinishedImporting("modules/guild_automod/AutomodMessageUtils.tsx");

export default function useAutomodMessageFields(arg0) {
  _require = arg0;
  const items = [arg0];
  const memo = noop.useMemo(() => extractAutomodMessageFields(closure_0), items);
  require("initialize");
  const items1 = [ChannelStore];
  const items2 = [memo.embedChannelId];
  const obj = {};
  const stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(memo.embedChannelId), items2);
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
  let prop = require;
  let obj = dependencyMap;
  let APPLICATION_NAME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
      const tmp12 = rawValue;
    }
    const tmp10 = tmp12;
  }
  APPLICATION_NAME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = _slicedToArray(embeds1, 1)[0];
  let tmp16;
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
      const tmp18 = rawValue1;
    }
    tmp16 = tmp18;
  }
  if (null != tmp16) {
    let username = author;
    let username2 = UserStore.getUser(interactionUserId);
    if (tmp10 === AutomodInteractionCallbackTypeEmbedKeys.AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
      if (null != username2) {
        if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = util.intl;
          prop = util.t["Xy2Iw+"];
          obj = { applicationName: tmp16, interactionUser: null, integrationOwner: null };
          username2 = username2.username;
          obj.interactionUser = username2;
          username = username.username;
          obj.integrationOwner = username;
          let formatToPlainStringResult = intl6.formatToPlainString(prop, obj);
        } else {
          const intl5 = util.intl;
          obj = { applicationName: tmp16, interactionUser: username2.username, integrationOwner: username.username };
          formatToPlainStringResult = intl5.formatToPlainString(util.t["MCK/t7"], obj);
        }
      }
    }
    if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl4 = util.intl;
      obj = { applicationName: tmp16, integrationOwner: username.username };
      let formatToPlainStringResult1 = intl4.formatToPlainString(util.t["0Kmtr7"], obj);
    } else {
      const intl3 = util.intl;
      const obj1 = { applicationName: tmp16, integrationOwner: username.username };
      formatToPlainStringResult1 = intl3.formatToPlainString(util.t.I0FiWp, obj1);
    }
    return formatToPlainStringResult1;
  } else {
    if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl2 = util.intl;
      let stringResult = intl2.string(util.t.Oo38tv);
    } else {
      const intl = util.intl;
      stringResult = intl.string(util.t["2kuGkD"]);
    }
    return stringResult;
  }
  tmp3 = getQuarantineEventFromMessage(message);
};
export const getActionHeaderText = function getActionHeaderText(embeds, channel, arg2, integrationOwnerHook) {
  let intl = arg2;
  if (arg2 === undefined) {
    intl = closure_1_10;
  }
  if (null != channel) {
    let obj2 = useChannelName;
    let channelName = obj2.computeChannelName(channel, UserStore, RelationshipStore);
    let obj = dependencyMap;
    let format = require;
    let obj3 = dependencyMap;
    let v4xL9Sk = require;
  } else {
    const intl2 = util.intl;
    channelName = intl2.string(util.t.J90oLW);
    obj = dependencyMap;
    format = require;
    obj3 = dependencyMap;
    v4xL9Sk = require;
  }
  const tmp9 = getProfileUpdateTypeFromMessage(embeds);
  const tmp10 = getQuarantineActionFromMessage(embeds);
  const tmp11 = getQuarantineEventFromMessage(embeds);
  const tmp13 = getDecisionOutcomeFromMessage(embeds);
  let GUILD_ROOM_NOTE_OUTCOME = v4xL9Sk(7509).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
      const tmp18 = rawValue;
    }
    const tmp16 = tmp18;
  }
  GUILD_ROOM_NOTE_OUTCOME = v4xL9Sk(7509).AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = embeds.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = tmp14(embeds1, 1)[0];
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
    }
  }
  if (null != tmp12) {
    const tmp28 = _getUserProfileRuleHeaderText(tmp9, tmp10, tmp11);
    if (null != tmp28) {
      return tmp28;
    }
  }
  if (null == channel) {
    let tmp30 = closure_1_10;
  } else {
    tmp30 = intl;
  }
  GUILD_ROOM_NOTE_OUTCOME = format(7509).AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME;
  let embeds2 = embeds.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = tmp14(embeds2, 1)[0];
  let tmp32;
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
      const tmp34 = rawValue2;
    }
    tmp32 = tmp34;
  }
  if (null == tmp32) {
    if (null != null) {
      return null;
    } else {
      GUILD_ROOM_NOTE_OUTCOME = format(7509).AutomodMessageEmbedKeys.GUILD_ROOM_NOTE_OUTCOME;
      let embeds3 = embeds.embeds;
      if (embeds3 == null) {
        embeds3 = [];
      }
      const first3 = tmp14(embeds3, 1)[0];
      let tmp39;
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
          const tmp41 = rawValue3;
        }
        tmp39 = tmp41;
      }
      if (null == tmp39) {
        if (null != null) {
          return null;
        } else {
          if (null == tmp22) {
            if (tmp13 !== v4xL9Sk(7514).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
              intl = v4xL9Sk(1114).intl;
              obj = { channelName, channelHook: tmp30 };
              let formatResult = intl.format(v4xL9Sk(1114).t.IZg0VQ, obj);
            } else {
              const intl5 = v4xL9Sk(1114).intl;
              obj = { channelName, channelHook: tmp30 };
              formatResult = intl5.format(v4xL9Sk(1114).t.lOIOSK, obj);
            }
          }
          if (tmp16 !== v4xL9Sk(7513).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
            if (tmp13 !== v4xL9Sk(7514).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
              const intl7 = v4xL9Sk(1114).intl;
              const obj1 = { applicationName: tmp22, channelName, channelHook: tmp30, integrationOwnerHook };
              let formatResult1 = intl7.format(v4xL9Sk(1114).t.AXQufN, obj1);
            } else {
              const intl6 = v4xL9Sk(1114).intl;
              obj2 = { applicationName: tmp22, channelName, channelHook: tmp30, integrationOwnerHook };
              formatResult1 = intl6.format(v4xL9Sk(1114).t.s3tjMN, obj2);
            }
          } else {
            intl = arg4;
          }
          if (tmp13 !== v4xL9Sk(7514).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
            const intl9 = v4xL9Sk(1114).intl;
            v4xL9Sk = v4xL9Sk(1114).t["4xL9Sk"];
            obj3 = { applicationName: tmp22, interactionUserHook: intl, integrationOwnerHook };
            let formatResult2 = intl9.format(v4xL9Sk, obj3);
          } else {
            const intl8 = v4xL9Sk(1114).intl;
            const obj4 = { applicationName: tmp22, interactionUserHook: intl, integrationOwnerHook };
            formatResult2 = intl8.format(v4xL9Sk(1114).t.S3lNIT, obj4);
          }
        }
      } else {
        if ("blocked" === tmp39) {
          let v9x7Jdd = format(1114).t["9x7Jdd"];
        } else {
          v9x7Jdd = format(1114).t["srla2+"];
        }
        const intl4 = format(1114).intl;
        format = intl4.format;
        obj = { channelName, channelHook: intl };
        format(v9x7Jdd, obj);
      }
    }
  } else {
    if ("blocked" === tmp32) {
      let bma6cs = format(1114).t.cLQrqz;
    } else {
      bma6cs = format(1114).t.bma6cs;
    }
    const intl3 = format(1114).intl;
    const obj5 = { channelName, channelHook: intl };
    intl3.format(bma6cs, obj5);
  }
};
export const getQuarantineReasonString = function getQuarantineReasonString(quarantineType) {
  if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.NICKNAME === quarantineType) {
    const intl5 = tmp(1114).intl;
    return intl5.string(tmp(1114).t["fkBQa/"]);
  } else if (tmp(7515).AutomodQuarantineUserMessageEmbedKeys.USERNAME === quarantineType) {
    const intl4 = tmp(1114).intl;
    return intl4.string(tmp(1114).t.pJQVnr);
  } else if (tmp(7515).AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME === quarantineType) {
    const intl3 = tmp(1114).intl;
    return intl3.string(tmp(1114).t.V9eJ85);
  } else if (tmp(7515).AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG === quarantineType) {
    const intl2 = tmp(1114).intl;
    return intl2.string(tmp(1114).t.Rtum01);
  } else {
    const intl = tmp(1114).intl;
    return intl.string(tmp(1114).t.pJQVnr);
  }
};
export const extractAutomodNotificationFields = function extractAutomodNotificationFields(message) {
  let NOTIFICATION_TYPE = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.JOIN_ATTEMPTS;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.RAID_DATETIME;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.DMS_SENT;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.RAID_TYPE;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.RESOLVED_REASON;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.DECISION_ID;
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
  NOTIFICATION_TYPE = tmp(7516).AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
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
  obj.joinAttempts = parsed;
  let date;
  if (null != tmp17) {
    const _Date = Date;
    date = new Date(tmp17);
  }
  obj.raidDatetime = date;
  let parsed1;
  if (null != tmp23) {
    const _parseInt2 = parseInt;
    parsed1 = parseInt(tmp23);
  }
  obj.dmsSent = parsed1;
  let tmp62;
  if (null != tmp29) {
    tmp62 = tmp29;
  }
  obj.raidType = tmp62;
  let tmp63;
  if (null != tmp35) {
    tmp63 = tmp35;
  }
  obj.resolvedReason = tmp63;
  let tmp64;
  if (null != tmp41) {
    tmp64 = tmp41;
  }
  obj.decisionId = tmp64;
  let date1;
  if (null != tmp47) {
    const _Date2 = Date;
    date1 = new Date(tmp47);
  }
  obj.suspiciousMentionActivityUntil = date1;
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
    const intl5 = util.intl;
    return intl5.string(util.t.Gh3A0O);
  } else if (AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY === resolvedReason) {
    const intl4 = tmp3(1114).intl;
    return intl4.string(tmp3(1114).t["riQ+HH"]);
  } else if (tmp3(7518).RaidResolutionType.DM_SPAM === resolvedReason) {
    const intl3 = tmp3(1114).intl;
    return intl3.string(tmp3(1114).t.j5V0ij);
  } else if (tmp3(7518).RaidResolutionType.JOIN_RAID === resolvedReason) {
    const intl2 = tmp3(1114).intl;
    return intl2.string(tmp3(1114).t.qhaRbG);
  } else {
    const intl = tmp3(1114).intl;
    return intl.string(tmp3(1114).t.GPg6JM);
  }
};
export const getUserIdOfAutomodAction = function getUserIdOfAutomodAction(message) {
  const ACTION_BY_USER_ID = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.ACTION_BY_USER_ID;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
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