// === Module 7030: AutomodMessageUtils ===

// Module 7030 (AutomodMessageUtils)
import intl10 from "intl" /* 1126 */;
import useChannelName from "useChannelName" /* 5049 */;
import AutomodMessageEmbedKeys from "AutomodMessageEmbedKeys" /* 7031 */;
import AutomodQuarantineUserActionMessageEmbedKeys from "AutomodQuarantineUserActionMessageEmbedKeys" /* 7032 */;
import AutomodBlockProfileUpdateMessageEmbedKeys from "AutomodBlockProfileUpdateMessageEmbedKeys" /* 7033 */;
import AutomodQuarantineEventMessageEmbedKeys from "AutomodQuarantineEventMessageEmbedKeys" /* 7034 */;
import AutomodInteractionCallbackTypeEmbedKeys from "AutomodInteractionCallbackTypeEmbedKeys" /* 7035 */;
import AutomodDecisionOutcomeEmbedKeys from "AutomodDecisionOutcomeEmbedKeys" /* 7036 */;
import AutomodQuarantineUserMessageEmbedKeys from "AutomodQuarantineUserMessageEmbedKeys" /* 7037 */;
import AutomodNotificationEmbedKeys from "AutomodNotificationEmbedKeys" /* 7038 */;
import AutomodAlert from "AutomodAlert" /* 7039 */;
import AutomodFeedback from "AutomodFeedback" /* 7040 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import PermissionStore from "PermissionStore" /* 4515 */;
import RelationshipStore from "RelationshipStore" /* 4525 */;
import UserStore from "UserStore" /* 1377 */;
import Constants from "Constants" /* 1085 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require;

let c10;
let c9;
let metroImportAll;
let unpackModuleId;
function getDecisionOutcomeFromMessage(embeds) {
  const DECISION_OUTCOME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.DECISION_OUTCOME;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
  let tmp2;
  if (null != first) {
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
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
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
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
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
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
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
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
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return null != tmp2 ? tmp2 : undefined;
}
function _getUserProfileRuleHeaderText(profileUpdateTypeFromMessage, quarantineActionFromMessage, quarantineEventFromMessage) {
  if (AutomodQuarantineUserActionMessageEmbedKeys.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_PROFILE_UPDATE === quarantineActionFromMessage) {
    let stringResult;
    if (AutomodBlockProfileUpdateMessageEmbedKeys.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_UPDATE === profileUpdateTypeFromMessage) {
      const intl6 = intl10.intl;
      stringResult = intl6.string(intl10.t.t98DPb);
    } else if (AutomodBlockProfileUpdateMessageEmbedKeys.AutomodBlockProfileUpdateMessageEmbedKeys.NICKNAME_RESET === profileUpdateTypeFromMessage) {
      const intl5 = intl10.intl;
      stringResult = intl5.string(intl10.t["7u/rlU"]);
    }
    return stringResult;
  } else if (AutomodQuarantineUserActionMessageEmbedKeys.AutomodQuarantineUserActionMessageEmbedKeys.QUARANTINE_USER === quarantineActionFromMessage) {
    let stringResult1;
    if (AutomodQuarantineEventMessageEmbedKeys.AutomodQuarantineEventMessageEmbedKeys.MESSAGE_SEND === quarantineEventFromMessage) {
      const intl4 = intl10.intl;
      stringResult1 = intl4.string(intl10.t.PmSMMS);
    } else if (AutomodQuarantineEventMessageEmbedKeys.AutomodQuarantineEventMessageEmbedKeys.GUILD_JOIN === quarantineEventFromMessage) {
      const intl3 = intl10.intl;
      stringResult1 = intl3.string(intl10.t.m9wWzo);
    } else if (AutomodQuarantineEventMessageEmbedKeys.AutomodQuarantineEventMessageEmbedKeys.USERNAME_UPDATE === quarantineEventFromMessage) {
      const intl2 = intl10.intl;
      stringResult1 = intl2.string(intl10.t.KNSkC6);
    } else if (AutomodQuarantineEventMessageEmbedKeys.AutomodQuarantineEventMessageEmbedKeys.CLAN_TAG_UPDATE === quarantineEventFromMessage) {
      const intl7 = intl10.intl;
      stringResult1 = intl7.string(intl10.t.qV4K6j);
    }
    return stringResult1;
  } else if (AutomodQuarantineUserActionMessageEmbedKeys.AutomodQuarantineUserActionMessageEmbedKeys.BLOCK_GUEST_JOIN === quarantineActionFromMessage) {
    const intl = intl10.intl;
    return intl.string(intl10.t.MrYeyS);
  }
}
function extractAutomodMessageFields(message) {
  let tmp19;
  let tmp25;
  let tmp31;
  let tmp37;
  let tmp43;
  let tmp49;
  let tmp55;
  let tmp61;
  let tmp67;
  let tmp73;
  let tmp79;
  let tmp85;
  const CHANNEL_ID = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.CHANNEL_ID;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
  let tmp5;
  if (null != first) {
    let tmp7;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp7 = rawValue;
    }
    tmp5 = tmp7;
  }
  const ALERT_ACTIONS_EXECUTION = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.ALERT_ACTIONS_EXECUTION;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = _slicedToArray(embeds1, 1)[0];
  let tmp11;
  if (null != first1) {
    let tmp13;
    if (first1.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp13 = rawValue1;
    }
    tmp11 = tmp13;
  }
  const tmpResult = AutomodAlert;
  const result = tmpResult.parseAlertActionsExecution(tmp11);
  let embeds2 = message.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = _slicedToArray(embeds2, 1)[0];
  let str;
  if (first2 != null) {
    str = first2.rawDescription;
  }
  if (str == null) {
    str = "";
  }
  const obj = { content: str, ruleName: tmp19, decisionId: tmp25, keyword: tmp31, keywordMatchedContent: tmp37, flaggedMessageId: tmp43, timeoutDuration: tmp49, quarantineType: tmp55, quarantineAction: tmp61, decisionReason: tmp67, applicationName: tmp73, interactionUserId: tmp79, interactionCallbackType: tmp85, embedChannel: ChannelStore.getChannel(tmp5), embedChannelId: tmp5, alertActionsExecution: result };
  const RULE_NAME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.RULE_NAME;
  let embeds3 = message.embeds;
  if (embeds3 == null) {
    embeds3 = [];
  }
  const first3 = _slicedToArray(embeds3, 1)[0];
  tmp19 = undefined;
  if (null != first3) {
    let tmp21;
    if (first3.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp21 = rawValue2;
    }
    tmp19 = tmp21;
  }
  const DECISION_ID = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.DECISION_ID;
  let embeds4 = message.embeds;
  if (embeds4 == null) {
    embeds4 = [];
  }
  const first4 = _slicedToArray(embeds4, 1)[0];
  tmp25 = undefined;
  if (null != first4) {
    let tmp27;
    if (first4.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp27 = rawValue3;
    }
    tmp25 = tmp27;
  }
  const KEYWORD = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.KEYWORD;
  let embeds5 = message.embeds;
  if (embeds5 == null) {
    embeds5 = [];
  }
  const first5 = _slicedToArray(embeds5, 1)[0];
  tmp31 = undefined;
  if (null != first5) {
    let tmp33;
    if (first5.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp33 = rawValue4;
    }
    tmp31 = tmp33;
  }
  const KEYWORD_MATCHED_CONTENT = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.KEYWORD_MATCHED_CONTENT;
  let embeds6 = message.embeds;
  if (embeds6 == null) {
    embeds6 = [];
  }
  const first6 = _slicedToArray(embeds6, 1)[0];
  tmp37 = undefined;
  if (null != first6) {
    let tmp39;
    if (first6.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp39 = rawValue5;
    }
    tmp37 = tmp39;
  }
  const FLAGGED_MESSAGE_ID = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.FLAGGED_MESSAGE_ID;
  let embeds7 = message.embeds;
  if (embeds7 == null) {
    embeds7 = [];
  }
  const first7 = _slicedToArray(embeds7, 1)[0];
  tmp43 = undefined;
  if (null != first7) {
    let tmp45;
    if (first7.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp45 = rawValue6;
    }
    tmp43 = tmp45;
  }
  const TIMEOUT_DURATION = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.TIMEOUT_DURATION;
  let embeds8 = message.embeds;
  if (embeds8 == null) {
    embeds8 = [];
  }
  const first8 = _slicedToArray(embeds8, 1)[0];
  tmp49 = undefined;
  if (null != first8) {
    let tmp51;
    if (first8.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp51 = rawValue7;
    }
    tmp49 = tmp51;
  }
  const QUARANTINE_USER = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.QUARANTINE_USER;
  let embeds9 = message.embeds;
  if (embeds9 == null) {
    embeds9 = [];
  }
  const first9 = _slicedToArray(embeds9, 1)[0];
  tmp55 = undefined;
  if (null != first9) {
    let tmp57;
    if (first9.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp57 = rawValue8;
    }
    tmp55 = tmp57;
  }
  const QUARANTINE_USER_ACTION = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.QUARANTINE_USER_ACTION;
  let embeds10 = message.embeds;
  if (embeds10 == null) {
    embeds10 = [];
  }
  const first10 = _slicedToArray(embeds10, 1)[0];
  tmp61 = undefined;
  if (null != first10) {
    let tmp63;
    if (first10.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp63 = rawValue9;
    }
    tmp61 = tmp63;
  }
  const DECISION_REASON = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.DECISION_REASON;
  let embeds11 = message.embeds;
  if (embeds11 == null) {
    embeds11 = [];
  }
  const first11 = _slicedToArray(embeds11, 1)[0];
  tmp67 = undefined;
  if (null != first11) {
    let tmp69;
    if (first11.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp69 = rawValue10;
    }
    tmp67 = tmp69;
  }
  const APPLICATION_NAME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds12 = message.embeds;
  if (embeds12 == null) {
    embeds12 = [];
  }
  const first12 = _slicedToArray(embeds12, 1)[0];
  tmp73 = undefined;
  if (null != first12) {
    let tmp75;
    if (first12.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp75 = rawValue11;
    }
    tmp73 = tmp75;
  }
  const INTERACTION_USER_ID = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.INTERACTION_USER_ID;
  let embeds13 = message.embeds;
  if (embeds13 == null) {
    embeds13 = [];
  }
  const first13 = _slicedToArray(embeds13, 1)[0];
  tmp79 = undefined;
  if (null != first13) {
    let tmp81;
    if (first13.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp81 = rawValue12;
    }
    tmp79 = tmp81;
  }
  const INTERACTION_CALLBACK_TYPE = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  let embeds14 = message.embeds;
  if (embeds14 == null) {
    embeds14 = [];
  }
  const first14 = _slicedToArray(embeds14, 1)[0];
  tmp85 = undefined;
  if (null != first14) {
    let tmp87;
    if (first14.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp87 = rawValue13;
    }
    tmp85 = tmp87;
  }
  return obj;
}
({ MessageEmbedTypes: metroImportAll, MessageTypes: c9, NOOP_NULL: c10, Permissions: unpackModuleId } = Constants);
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((message) => {
  let embedChannelId;
  let tmp10;
  let tmp4;
  let tmp7;
  let tmp9;
  const obj = require("react");
  const cResult = obj.c(9);
  const tmp = _require;
  if (cResult[0] !== message) {
    const tmp6 = extractAutomodMessageFields(message);
    cResult[0] = message;
    cResult[1] = tmp6;
    tmp4 = tmp6;
  } else {
    tmp4 = cResult[1];
  }
  _require = tmp4;
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[2] = items;
    tmp7 = items;
  } else {
    tmp7 = cResult[2];
  }
  if (cResult[3] !== tmp4.embedChannelId) {
    const fn = function l() {
      return ChannelStore.getChannel(embedChannelId.embedChannelId);
    };
    const items1 = [tmp4.embedChannelId];
    cResult[3] = tmp4.embedChannelId;
    cResult[4] = fn;
    cResult[5] = items1;
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[4];
    tmp10 = cResult[5];
  }
  const tmpResult = tmp(504);
  const stateFromStores = tmpResult.useStateFromStores(tmp7, tmp9, tmp10);
  if (cResult[6] === stateFromStores) {
    let tmp12;
    if (cResult[7] === tmp4) {
      tmp12 = cResult[8];
    }
    return tmp12;
  }
  const obj2 = { embedChannel: stateFromStores };
  const merged = Object.assign(tmp4);
  cResult[6] = stateFromStores;
  cResult[7] = tmp4;
  cResult[8] = obj2;
  tmp12 = obj2;
}) : ((arg0) => {
  let closure_0;
  let stateFromStores;
  _require = arg0;
  const items = [arg0];
  const memo = react.useMemo(() => extractAutomodMessageFields(closure_0), items);
  const items1 = [ChannelStore];
  const items2 = [memo.embedChannelId];
  const obj2 = { embedChannel: stateFromStores };
  const obj = require("get initialized");
  stateFromStores = obj.useStateFromStores(items1, () => ChannelStore.getChannel(memo.embedChannelId), items2);
  const merged = Object.assign(memo);
  return obj2;
});
let result = size.fileFinishedImporting("modules/guild_automod/AutomodMessageUtils.tsx");

export default tmp3;
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
  let tmp11;
  const tmp = getProfileUpdateTypeFromMessage(message);
  const tmp2 = getQuarantineActionFromMessage(message);
  const tmp3 = getQuarantineEventFromMessage(message);
  if (null != getQuarantineTypeFromMessage(message)) {
    const tmp5 = _getUserProfileRuleHeaderText(tmp, tmp2, tmp3);
    if (null != tmp5) {
      return tmp5;
    }
  }
  const tmp6 = getDecisionOutcomeFromMessage(message);
  const INTERACTION_CALLBACK_TYPE = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
  if (null != first) {
    let tmp13;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp13 = rawValue;
    }
    tmp11 = tmp13;
  }
  const APPLICATION_NAME = AutomodMessageEmbedKeys.AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = _slicedToArray(embeds1, 1)[0];
  let tmp17;
  if (null != first1) {
    let tmp19;
    if (first1.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp19 = rawValue1;
    }
    tmp17 = tmp19;
  }
  if (null != tmp17) {
    let formatToPlainStringResult1;
    const user = UserStore.getUser(interactionUserId);
    if (tmp11 === AutomodInteractionCallbackTypeEmbedKeys.AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
      if (null != user) {
        let formatToPlainStringResult;
        if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl6 = intl10.intl;
          const obj2 = { applicationName: tmp17, interactionUser: user.username, integrationOwner: author.username };
          formatToPlainStringResult = intl6.formatToPlainString(intl10.t["Xy2Iw+"], obj2);
        } else {
          const intl5 = intl10.intl;
          const obj3 = { applicationName: tmp17, interactionUser: user.username, integrationOwner: author.username };
          formatToPlainStringResult = intl5.formatToPlainString(intl10.t["MCK/t7"], obj3);
        }
        formatToPlainStringResult1 = formatToPlainStringResult;
      }
      return formatToPlainStringResult1;
    }
    if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl4 = intl10.intl;
      const obj4 = { applicationName: tmp17, integrationOwner: author.username };
      formatToPlainStringResult1 = intl4.formatToPlainString(intl10.t["0Kmtr7"], obj4);
    } else {
      const intl3 = intl10.intl;
      const obj = { applicationName: tmp17, integrationOwner: author.username };
      formatToPlainStringResult1 = intl3.formatToPlainString(intl10.t.I0FiWp, obj);
    }
  } else {
    let stringResult;
    if (tmp6 !== AutomodDecisionOutcomeEmbedKeys.AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
      const intl2 = intl10.intl;
      stringResult = intl2.string(intl10.t.Oo38tv);
    } else {
      const intl = intl10.intl;
      stringResult = intl.string(intl10.t["2kuGkD"]);
    }
    return stringResult;
  }
};
export const getActionHeaderText = function getActionHeaderText(embeds, channel, arg2) {
  let channelName;
  let fn;
  let tmp20;
  let tmp6;
  let tmp8;
  let tmp = arg2;
  if (arg2 === undefined) {
    tmp = authStore;
  }
  if (null != channel) {
    const obj = useChannelName;
    channelName = obj.computeChannelName(channel, UserStore, RelationshipStore);
    tmp6 = require;
    tmp8 = require;
  } else {
    const intl = intl10.intl;
    channelName = intl.string(intl10.t.J90oLW);
    tmp6 = require;
    tmp8 = require;
  }
  const tmp13 = getProfileUpdateTypeFromMessage(embeds);
  const tmp14 = getQuarantineActionFromMessage(embeds);
  const tmp15 = getQuarantineEventFromMessage(embeds);
  const tmp16 = getQuarantineTypeFromMessage(embeds);
  const tmp17 = getDecisionOutcomeFromMessage(embeds);
  const INTERACTION_CALLBACK_TYPE = tmp8(7031).AutomodMessageEmbedKeys.INTERACTION_CALLBACK_TYPE;
  embeds = embeds.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
  if (null != first) {
    let tmp22;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp22 = rawValue;
    }
    tmp20 = tmp22;
  }
  const APPLICATION_NAME = tmp8(7031).AutomodMessageEmbedKeys.APPLICATION_NAME;
  let embeds1 = embeds.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = _slicedToArray(embeds1, 1)[0];
  if (null != first1) {
    if (first1.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
  if (null != tmp16) {
    const tmp32 = _getUserProfileRuleHeaderText(tmp13, tmp14, tmp15);
    if (null != tmp32) {
      return tmp32;
    }
  }
  if (null == channel) {
    fn = (arg0) => arg0;
  } else {
    fn = tmp;
    if (!tmp33) {
      fn = authStore;
    }
  }
  let closure_0 = tmp6(7031).AutomodMessageEmbedKeys.VOICE_CHANNEL_STATUS_OUTCOME;
  let embeds2 = embeds.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = _slicedToArray(embeds2, 1)[0];
  let tmp35;
  if (null != first2) {
    let tmp37;
    if (first2.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp37 = rawValue2;
    }
    tmp35 = tmp37;
  }
  let formatResult = null;
  if (null != tmp35) {
    let bma6cs;
    if ("blocked" === tmp35) {
      bma6cs = tmp6(1126).t.cLQrqz;
    } else {
      bma6cs = tmp6(1126).t.bma6cs;
    }
    const intl2 = tmp6(1126).intl;
    const obj2 = { channelName, channelHook: tmp };
    formatResult = intl2.format(bma6cs, obj2);
  }
  if (null != formatResult) {
    return formatResult;
  } else {
    const GUILD_ROOM_NOTE_OUTCOME = tmp6(7031).AutomodMessageEmbedKeys.GUILD_ROOM_NOTE_OUTCOME;
    let embeds3 = embeds.embeds;
    if (embeds3 == null) {
      embeds3 = [];
    }
    const first3 = _slicedToArray(embeds3, 1)[0];
    let tmp42;
    if (null != first3) {
      let tmp44;
      if (first3.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
        tmp44 = rawValue3;
      }
      tmp42 = tmp44;
    }
    let formatResult1 = null;
    if (null != tmp42) {
      let v9x7Jdd;
      if ("blocked" === tmp42) {
        v9x7Jdd = tmp6(1126).t["9x7Jdd"];
      } else {
        v9x7Jdd = tmp6(1126).t["srla2+"];
      }
      const intl3 = tmp6(1126).intl;
      const obj3 = { channelName, channelHook: tmp };
      formatResult1 = intl3.format(v9x7Jdd, obj3);
    }
    if (null == formatResult1) {
      let formatResult4;
      if (null != tmp26) {
        let formatResult3;
        if (tmp20 === tmp8(7035).AutomodInteractionCallbackTypeEmbedKeys.MODAL) {
          if (null != interactionUserHook) {
            let formatResult2;
            if (tmp17 !== tmp8(7036).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
              const intl9 = tmp8(1126).intl;
              const obj4 = { applicationName: tmp26, interactionUserHook, integrationOwnerHook };
              formatResult2 = intl9.format(tmp8(1126).t["4xL9Sk"], obj4);
            } else {
              const intl8 = tmp8(1126).intl;
              const obj5 = { applicationName: tmp26, interactionUserHook, integrationOwnerHook };
              formatResult2 = intl8.format(tmp8(1126).t.S3lNIT, obj5);
            }
            formatResult3 = formatResult2;
          }
          formatResult4 = formatResult3;
        }
        if (tmp17 !== tmp8(7036).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
          const intl7 = tmp8(1126).intl;
          const obj6 = { applicationName: tmp26, channelName, channelHook: fn, integrationOwnerHook };
          formatResult3 = intl7.format(tmp8(1126).t.AXQufN, obj6);
        } else {
          const intl6 = tmp8(1126).intl;
          const obj7 = { applicationName: tmp26, channelName, channelHook: fn, integrationOwnerHook };
          formatResult3 = intl6.format(tmp8(1126).t.s3tjMN, obj7);
        }
      } else if (tmp17 !== tmp8(7036).AutomodDecisionOutcomeEmbedKeys.BLOCKED) {
        const intl5 = tmp8(1126).intl;
        const obj8 = { channelName, channelHook: fn };
        formatResult4 = intl5.format(tmp8(1126).t.IZg0VQ, obj8);
      } else {
        const intl4 = tmp8(1126).intl;
        const obj9 = { channelName, channelHook: fn };
        formatResult4 = intl4.format(tmp8(1126).t.lOIOSK, obj9);
      }
      formatResult1 = formatResult4;
    }
    return formatResult1;
  }
};
export const getQuarantineReasonString = function getQuarantineReasonString(quarantineType) {
  if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.NICKNAME === quarantineType) {
    const intl5 = intl10.intl;
    return intl5.string(intl10.t["fkBQa/"]);
  } else if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.USERNAME === quarantineType) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t.pJQVnr);
  } else if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.GLOBAL_NAME === quarantineType) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.V9eJ85);
  } else if (AutomodQuarantineUserMessageEmbedKeys.AutomodQuarantineUserMessageEmbedKeys.CLAN_TAG === quarantineType) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.Rtum01);
  } else {
    const intl = intl10.intl;
    return intl.string(intl10.t.pJQVnr);
  }
};
export const extractAutomodNotificationFields = function extractAutomodNotificationFields(message) {
  let date;
  let date1;
  let parsed;
  let parsed1;
  let tmp60;
  let tmp61;
  let tmp62;
  const NOTIFICATION_TYPE = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.NOTIFICATION_TYPE;
  let embeds = message.embeds;
  if (embeds == null) {
    embeds = [];
  }
  const first = _slicedToArray(embeds, 1)[0];
  let tmp5;
  if (null != first) {
    let tmp7;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp7 = rawValue;
    }
    tmp5 = tmp7;
  }
  const JOIN_ATTEMPTS = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.JOIN_ATTEMPTS;
  let embeds1 = message.embeds;
  if (embeds1 == null) {
    embeds1 = [];
  }
  const first1 = _slicedToArray(embeds1, 1)[0];
  let tmp11;
  if (null != first1) {
    let tmp13;
    if (first1.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp13 = rawValue1;
    }
    tmp11 = tmp13;
  }
  const RAID_DATETIME = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.RAID_DATETIME;
  let embeds2 = message.embeds;
  if (embeds2 == null) {
    embeds2 = [];
  }
  const first2 = _slicedToArray(embeds2, 1)[0];
  let tmp17;
  if (null != first2) {
    let tmp19;
    if (first2.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp19 = rawValue2;
    }
    tmp17 = tmp19;
  }
  const DMS_SENT = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.DMS_SENT;
  let embeds3 = message.embeds;
  if (embeds3 == null) {
    embeds3 = [];
  }
  const first3 = _slicedToArray(embeds3, 1)[0];
  let tmp23;
  if (null != first3) {
    let tmp25;
    if (first3.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp25 = rawValue3;
    }
    tmp23 = tmp25;
  }
  const RAID_TYPE = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.RAID_TYPE;
  let embeds4 = message.embeds;
  if (embeds4 == null) {
    embeds4 = [];
  }
  const first4 = _slicedToArray(embeds4, 1)[0];
  let tmp29;
  if (null != first4) {
    let tmp31;
    if (first4.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp31 = rawValue4;
    }
    tmp29 = tmp31;
  }
  const RESOLVED_REASON = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.RESOLVED_REASON;
  let embeds5 = message.embeds;
  if (embeds5 == null) {
    embeds5 = [];
  }
  const first5 = _slicedToArray(embeds5, 1)[0];
  let tmp35;
  if (null != first5) {
    let tmp37;
    if (first5.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp37 = rawValue5;
    }
    tmp35 = tmp37;
  }
  const DECISION_ID = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.DECISION_ID;
  let embeds6 = message.embeds;
  if (embeds6 == null) {
    embeds6 = [];
  }
  const first6 = _slicedToArray(embeds6, 1)[0];
  let tmp41;
  if (null != first6) {
    let tmp43;
    if (first6.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp43 = rawValue6;
    }
    tmp41 = tmp43;
  }
  let closure_0 = AutomodNotificationEmbedKeys.AutomodNotificationEmbedKeys.SUSPICIOUS_MENTION_ACTIVITY_UNTIL;
  let embeds7 = message.embeds;
  if (embeds7 == null) {
    embeds7 = [];
  }
  const first7 = _slicedToArray(embeds7, 1)[0];
  let tmp47;
  if (null != first7) {
    let tmp49;
    if (first7.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp49 = rawValue7;
    }
    tmp47 = tmp49;
  }
  let tmp52 = null;
  if (null != tmp5) {
    tmp52 = tmp5;
  }
  const obj = { notificationType: tmp52, joinAttempts: parsed, raidDatetime: date, dmsSent: parsed1, raidType: tmp60, resolvedReason: tmp61, decisionId: tmp62, suspiciousMentionActivityUntil: date1 };
  parsed = undefined;
  if (null != tmp11) {
    const _parseInt = parseInt;
    parsed = parseInt(tmp11);
  }
  date = undefined;
  if (null != tmp17) {
    const _Date = Date;
    const self = this;
    const self2 = this;
    date = new Date(tmp17);
  }
  parsed1 = undefined;
  if (null != tmp23) {
    const _parseInt2 = parseInt;
    parsed1 = parseInt(tmp23);
  }
  tmp60 = undefined;
  if (null != tmp29) {
    tmp60 = tmp29;
  }
  tmp61 = undefined;
  if (null != tmp35) {
    tmp61 = tmp35;
  }
  tmp62 = undefined;
  if (null != tmp41) {
    tmp62 = tmp41;
  }
  date1 = undefined;
  if (null != tmp47) {
    const _Date2 = Date;
    const self3 = this;
    const self4 = this;
    date1 = new Date(tmp47);
  }
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
    const intl5 = intl10.intl;
    return intl5.string(intl10.t.Gh3A0O);
  } else if (AutomodFeedback.RaidResolutionType.LEGITIMATE_ACTIVITY === resolvedReason) {
    const intl4 = intl10.intl;
    return intl4.string(intl10.t["riQ+HH"]);
  } else if (AutomodFeedback.RaidResolutionType.DM_SPAM === resolvedReason) {
    const intl3 = intl10.intl;
    return intl3.string(intl10.t.j5V0ij);
  } else if (AutomodFeedback.RaidResolutionType.JOIN_RAID === resolvedReason) {
    const intl2 = intl10.intl;
    return intl2.string(intl10.t.qhaRbG);
  } else {
    const intl = intl10.intl;
    return intl.string(intl10.t.GPg6JM);
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
    let tmp4;
    if (first.type === metroImportAll.AUTO_MODERATION_MESSAGE) {
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
      tmp4 = rawValue;
    }
    tmp2 = tmp4;
  }
  return tmp2;
};