// === Module 11562: createChannelStream ===

// Module 11562 (createChannelStream)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import Constants from "Constants" /* 1085 */;
import createConversationHeader from "createConversationHeader" /* 11563 */;
import isNewMessageGroupDefault from "isNewMessageGroup" /* 11565 */;
import tryInjectMessage from "tryInjectMessage" /* 11566 */;
import PushFeedbackStore_mod from "PushFeedbackStore" /* 11087 */;
import EditMessageStore from "EditMessageStore" /* 7165 */;
import UploadStore from "UploadStore" /* 7466 */;
import RowGeneratorConstants from "RowGeneratorConstants" /* 7592 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;

let c9;
let metroImportAll;
let metroImportDefault;
let metroRequire;
let PushFeedbackStore = PushFeedbackStore_mod;
({ Changeset: metroRequire, LoadingType: metroImportDefault, RowType: metroImportAll, SeparatorType: c9 } = RowGeneratorConstants);
const MessageFlags = Constants.MessageFlags;
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  let canAddNewReactions;
  let closure_11;
  let closure_13;
  let closure_6;
  let closure_7;
  let closure_8;
  let editing;
  let id;
  let intl;
  let messages;
  let pushFeedback;
  let renderContentOnly;
  let roleStyle;
  let summary;
  let updateMessageIds;
  let uploads;
  ({ channel: require, messages } = forceRender);
  ({ uploads, oldestUnreadMessageId: id, replyingMessageId: PushFeedbackStore, currentUserId: EditMessageStore, canAddNewReactions: UploadStore, selectedSummary: closure_6, selectedConversation: closure_7, chatManager: closure_8, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: closure_11, isResourceChannel: closure_12, unloadableContentEntryMessageIds: closure_13 } = forceRender);
  let items1;
  function unreadFilter(id) {
    let tmp3;
    if (require.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp4) {
        id = id.id;
        obj = SnowflakeUtilsDefault;
        tmp4 = id !== obj.castChannelIdAsMessageId(require.id);
      }
      tmp3 = tmp4;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      let tmp;
      if (require.isForumPost()) {
        let tmp2 = tmp15;
        if (tmp2) {
          id = message.id;
          obj = SnowflakeUtilsDefault;
          tmp2 = id !== obj.castChannelIdAsMessageId(require.id);
        }
        tmp = tmp2;
      } else {
        tmp = tmp15;
      }
      if (!tmp) {
        if (null != closure_7) {
          createConversationHeader;
        }
        if (isNewMessageGroupDefault(require, first[first.length - 1], message)) {
          items = [message];
          items1.unshift(items);
        } else {
          first.unshift(message);
        }
      }
    }
    items1 = [message];
    items1.unshift(items1);
  }
  function determineChangeType(message) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    obj = { message, updateMessageIds, forceRender };
    return constants2.determineChangeType(obj, flag);
  }
  let items = [];
  let obj = {};
  const substr = uploads.slice();
  const reversed = substr.reverse();
  let iter = reversed[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    let messageForFile = UploadStore.getMessageForFile(nextResult.id);
    let nonce;
    let tmp6 = messageForFile;
    if (messageForFile != null) {
      nonce = messageForFile.nonce;
    }
    if (null != nonce) {
      let tmp8 = messageForFile;
      obj[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  const item = messages.forEach((id) => {
    obj = tryInjectMessage;
    const result = obj.tryCreateInjectedMessage(id, require);
    const tmp2 = null != result && "before" === result.position;
    if (tmp2) {
      insertMessage(result.message);
      if (id === id.id) {
        id = result.message.id;
      }
    }
    insertMessage(id);
    const tmp8 = null != result && "after" === result.position;
    if (tmp8) {
      insertMessage(result.message);
    }
  });
  const item1 = items1.forEach((item, index) => {
    let flag;
    let hasItem;
    let intl;
    let intl6;
    let isForumPostResult;
    let isSystemDMResult;
    let obj23;
    let pushType;
    let str2;
    let tmp164;
    let tmp85;
    let message = item[item.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = message.hasMoreAfter;
    }
    if (hasMoreAfter) {
      let obj2 = { rowType: constants2.LOAD_AFTER, changeType: forceRender ? summary.UPDATE : summary.NOOP, roleStyle, isLoading: message.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
      let tmp11 = message;
      let tmp13 = id;
      const push = items.push;
      intl = require("intl").intl;
      push(obj2);
    }
    let tmp19 = message.hasMoreBefore && tmp17;
    let tmp20 = unreadFilter(message);
    let timestamp = null;
    if (index !== diff) {
      timestamp = items1[index + 1][0].timestamp;
    }
    if (index === diff) {
      let tmp25 = item.isDM() && !tmp18.hasMoreBefore && tmp17;
      if (!tmp25) {
        tmp25 = obj4.isThread() && !obj4.isForumPost() && !tmp18.hasMoreBefore && tmp17;
        const isThreadResult = obj4.isThread() && !obj4.isForumPost() && !tmp18.hasMoreBefore && tmp17;
      }
      flag = false;
      if (tmp25) {
        flag = true;
      }
    } else {
      require("DateUtils");
      flag = true;
    }
    function processHiddenMessageRow(changeType) {
      let isSystemDMResult;
      const iter = item[Symbol.iterator]();
      const nextResult = iter.next();
      while (iter !== undefined) {
        message = nextResult;
        let tmp5 = determineChangeType(nextResult) !== metroRequire.NOOP && changeType.changeType === metroRequire.NOOP;
        if (tmp5) {
          changeType.changeType = metroRequire.UPDATE;
        }
        let content = changeType.content;
        let obj2 = { rowType: metroImportAll.MESSAGE, changeType: metroRequire.NOOP, roleStyle, message, isSystemDM: isSystemDMResult, isFirst: message === message, canAddNewReactions: UploadStore };
        let unshift = content.unshift;
        isSystemDMResult = require.isSystemDM();
        if (isSystemDMResult) {
          isSystemDMResult = message.isSystemDM();
        }
        let arr = unshift(obj2);
        continue;
      }
      changeType.revealed = message.id === messages.revealedMessageId;
      changeType.context = message.id;
      return changeType;
    }
    const obj5 = { roleStyle, message, isFirst: true, content: [], text: "", revealed: false };
    let tmp30 = items[items.length - 1];
    if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
      if (null == tmp30) {
        const obj10 = { rowType: closure_8.SUSPENDED_USER_GROUP, changeType: tmp164, canUncollapse: false };
        tmp164 = determineChangeType(message);
        const merged = Object.assign(obj5);
        items.push(obj10);
        tmp30 = obj10;
      }
      const result = processHiddenMessageRow(tmp30);
      const intl4 = require("intl").intl;
      const obj11 = { count: tmp30.content.length };
      tmp30.text = intl4.formatToPlainString(require("intl").t.rHRovo, obj11);
    } else if (message.blocked) {
      let tmp145;
      if (null == tmp30) {
        let INSERT2 = determineChangeType(message);
        const blocked = INSERT2 === summary.NOOP && closure_8.getBlocked(message);
        if (blocked) {
          INSERT2 = summary.INSERT;
        }
        const obj12 = { rowType: closure_8.BLOCKED_GROUP, changeType: INSERT2 };
        const merged1 = Object.assign(obj5);
        items.push(obj12);
        tmp145 = obj12;
      } else {
        tmp145 = tmp30;
      }
      const result1 = processHiddenMessageRow(tmp145);
      const intl3 = require("intl").intl;
      const obj15 = { count: tmp145.content.length };
      tmp145.text = intl3.formatToPlainString(require("intl").t["+FcYM/"], obj15);
    } else if (message.ignored) {
      let tmp127;
      if (null == tmp30) {
        let INSERT = determineChangeType(message);
        const ignored = INSERT === summary.NOOP && closure_8.getIgnored(message);
        if (ignored) {
          INSERT = summary.INSERT;
        }
        const obj16 = { rowType: closure_8.IGNORED_GROUP, changeType: INSERT };
        const merged2 = Object.assign(obj5);
        items.push(obj16);
        tmp127 = obj16;
      } else {
        tmp127 = tmp30;
      }
      const result2 = processHiddenMessageRow(tmp127);
      const intl2 = require("intl").intl;
      const obj17 = { count: tmp127.content.length };
      tmp127.text = intl2.formatToPlainString(require("intl").t["VFWjc+"], obj17);
    } else {
      let iter = item[Symbol.iterator]();
      let nextResult = iter.next();
      while (iter !== undefined) {
        let result3;
        let obj6 = nextResult;
        let tmp35 = nextResult !== message;
        let obj7 = item;
        let isEditingResult = EditMessageStore.isEditing(item.id, nextResult.id);
        if (!isEditingResult) {
          isEditingResult = closure_3 === obj6.id;
        }
        let tmp41 = isEditingResult;
        PushFeedbackStore = PushFeedbackStore.getPushFeedback(obj6.channel_id, obj6.id);
        let obj8 = require("canReplyToMessage");
        let canReplyToMessageResult = obj8.canReplyToMessage(obj7, obj6);
        let tmp52 = messages(id[12])(obj6, closure_4);
        if (tmp52) {
          let obj9 = require("ThreadHooks");
          tmp52 = !obj9.isNonModInLockedThread(obj7);
        }
        let tmp57 = message;
        if (message.hasOwnProperty(obj6.id)) {
          result3 = closure_8.determineChangeTypeForUploadProgress(tmp57[obj6.id]);
        } else {
          result3 = determineChangeType(obj6, true);
        }
        let tmp65 = null != summary;
        if (tmp65) {
          tmp65 = summary.endId === obj6.id;
        }
        if (tmp65) {
          tmp65 = summary.count > 1;
        }
        if (tmp65) {
          let obj18 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle, summary, isBeforeContent: false };
          let push2 = items.push;
          let push2Result = push2(obj18);
        }
        let obj19 = { roleStyle, message: obj6, isSystemDM: isSystemDMResult, isFirst: obj6 === message, isEditing: tmp41, separatorBefore: tmp85, canAddNewReactions, alwaysShowAddReaction: isForumPostResult, renderContentOnly, pushFeedbackType: pushType, canReply: !renderContentOnly && canReplyToMessageResult, canEdit: !renderContentOnly && tmp52, rowType: closure_8.MESSAGE, changeType: result3, showContentInventoryEntryFallbackEmbed: hasItem };
        let push3 = items.push;
        isSystemDMResult = obj7.isSystemDM();
        if (isSystemDMResult) {
          isSystemDMResult = obj6.isSystemDM();
        }
        tmp85 = !tmp35 && !renderContentOnly;
        if (tmp85) {
          let tmp88 = flag || tmp20 || tmp19;
          tmp85 = tmp88;
        }
        isForumPostResult = obj7.isForumPost();
        if (isForumPostResult) {
          id = obj6.id;
          let tmp49Result = messages(id[5]);
          isForumPostResult = id === tmp49Result.castChannelIdAsMessageId(obj7.id);
        }
        pushType = undefined;
        if (PushFeedbackStore != null) {
          pushType = PushFeedbackStore.pushType;
        }
        hasItem = undefined;
        if (set != null) {
          hasItem = set.has(obj6.id);
        }
        let push3Result = push3(obj19);
        let result4 = null != constants2;
        if (result4) {
          let obj14 = require("createConversationHeader");
          result4 = obj14.isConversationStartMessage(constants2, obj6.id);
        }
        if (result4) {
          let obj20 = { rowType: roleStyle.CONVERSATION, changeType: determineChangeType(obj6), roleStyle, conversationHeader: messages(id[6])(constants2) };
          let push4 = items.push;
          let push4Result = push4(obj20);
        }
        let tmp118 = null != summary;
        if (tmp118) {
          tmp118 = summary.startId === obj6.id;
        }
        if (tmp118) {
          tmp118 = summary.count > 1;
        }
        if (tmp118) {
          let obj21 = { rowType: roleStyle.SUMMARY, changeType: determineChangeType(obj6), roleStyle, summary, isBeforeContent: true };
          let push5 = items.push;
          let push5Result = push5(obj21);
        }
        continue;
      }
    }
    if (flag) {
      if (!renderContentOnly) {
        let NOOP = determineChangeType(message);
        if (NOOP === summary.UPDATE) {
          NOOP = summary.NOOP;
        }
        const obj22 = { rowType: roleStyle.DAY, changeType: NOOP, roleStyle, text: obj23.dateFormat(message.timestamp, "LL") };
        obj23 = require("DateUtils");
        items.push(obj22);
      }
    }
    if (tmp20) {
      tmp20 = !renderContentOnly;
    }
    if (tmp20) {
      const push6 = items.push;
      const obj24 = { rowType: roleStyle.UNREAD, changeType: determineChangeType(message), roleStyle, text: str2.toUpperCase() };
      const intl5 = require("intl").intl;
      str2 = intl5.string(require("intl").t.q7hm3m);
      push6(obj24);
    }
    if (tmp19) {
      tmp19 = !renderContentOnly;
    }
    if (tmp19) {
      const push7 = items.push;
      const obj25 = { rowType: constants2.LOAD_BEFORE, changeType: forceRender ? summary.UPDATE : summary.NOOP, roleStyle, isLoading: message.loadingMore, text: intl6.string(require("intl").t.XBlaiC) };
      intl6 = require("intl").intl;
      push7(obj25);
    }
  });
  let tmp12 = 0 === items1.length && !messages.loadingMore;
  if (tmp12) {
    let tmp13 = messages.hasMoreAfter || messages.hasMoreBefore;
    tmp12 = tmp13;
  }
  if (tmp12) {
    let obj2 = { rowType: messages.hasMoreBefore ? constants2.LOAD_BEFORE : constants2.LOAD_AFTER, changeType: forceRender ? constants.UPDATE : constants.NOOP, roleStyle, isLoading: messages.loadingMore, text: intl.string(require("intl").t.XBlaiC) };
    let push = items.push;
    intl = require("intl").intl;
    let arr = push(obj2);
  }
  return items;
};