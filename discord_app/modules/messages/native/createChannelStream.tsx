// discord_app/modules/messages/native/createChannelStream.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import UnlinkedGamePlayerPlaceholders from "../UnlinkedGamePlayerPlaceholders.tsx";
import isNewMessageGroupDefault from "../isNewMessageGroup.tsx";
import tryInjectMessage from "../tryInjectMessage.tsx";
import PushFeedbackStore from "../../push_feedback/PushFeedbackStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import UploadStore from "../../../stores/UploadStore.tsx";

const require = globalThis.__r;

require = fn;
const RowGeneratorConstants = fn(9094);
({
  Changeset: closure_6,
  LoadingType: metroImportDefault,
  RowType: closure_8,
  SeparatorType: closure_9,
} = RowGeneratorConstants);
const MessageFlags = fn(1072).MessageFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(roleStyle) {
  ({ channel: require, messages } = roleStyle);
  ({
    uploads,
    oldestUnreadMessageId: id,
    replyingMessageId: PushFeedbackStore,
    currentUserId: EditMessageStore,
    canAddNewReactions: UploadStore,
    selectedSummary: closure_6,
    selectedConversation: closure_7,
    chatManager,
  } = roleStyle);
  let intl = roleStyle.roleStyle;
  const forceRender = roleStyle.forceRender;
  ({
    updateMessageIds: closure_11,
    isResourceChannel: closure_12,
    unloadableContentEntryMessageIds: closure_13,
  } = roleStyle);
  let items1;
  length = undefined;
  function unreadFilter(id) {
    if (require.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp2) {
        tmp4 = id.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(require.id);
      }
      let tmp3 = tmp4;
    } else {
      tmp3 = tmp2;
    }
    return tmp3;
  }
  function isCollapsiblePlaceholder(id) {
    let result = id.id !== messages.jumpTargetId;
    if (result) {
      result = UnlinkedGamePlayerPlaceholders.isUnlinkedGamePlayerPlaceholder(closure_1_0, id);
    }
    return result;
  }
  function insertMessage(message) {
    const first = items1[0];
    if (null != first) {
      if (closure_1_0.isForumPost()) {
        let tmp2 = tmp21;
        if (tmp21) {
          tmp2 = message.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(closure_1_0.id);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp21;
      }
      if (!tmp) {
        if (!isNewMessageGroupDefault(closure_1_0, first[first.length - 1], message)) {
          let result = tmp6.id !== messages.jumpTargetId;
          if (result) {
            result = UnlinkedGamePlayerPlaceholders.isUnlinkedGamePlayerPlaceholder(closure_1_0, tmp6);
          }
          let result1 = message.id !== messages.jumpTargetId;
          if (result1) {
            result1 = UnlinkedGamePlayerPlaceholders.isUnlinkedGamePlayerPlaceholder(closure_1_0, message);
          }
          if (result === result1) {
            first.unshift(message);
          }
        }
        items = [message];
        arr.unshift(items);
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
    return chatManager.determineChangeType({ message, updateMessageIds, forceRender }, flag);
  }
  items = [];
  let substr = uploads.slice();
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
      obj[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  const item = messages.forEach((id) => {
    const result = tryInjectMessage.tryCreateInjectedMessage(id, closure_1_0);
    let tmp2 = null != result;
    if (tmp2) {
      tmp2 = "before" === result.position;
    }
    if (tmp2) {
      insertMessage(result.message);
      if (id === id.id) {
        id = result.message.id;
      }
    }
    insertMessage(id);
    let tmp8 = null != result;
    if (tmp8) {
      tmp8 = "after" === result.position;
    }
    if (tmp8) {
      insertMessage(result.message);
    }
  });
  let tmp11 = null;
  if ("getPreviousMessages" in chatManager) {
    const previousMessages = chatManager.getPreviousMessages();
    length = undefined;
    if (previousMessages != null) {
      length = previousMessages.length;
    }
    if (length == null) {
      length = null;
    }
    tmp11 = length;
  }
  length = tmp11;
  const item1 = items1.forEach((arr, index) => {
    closure_0 = arr;
    let message = arr[arr.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = message.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp16 = message.hasMoreBefore && tmp15;
      let tmp18 = unreadFilter(message);
      let timestamp = null;
      if (index !== diff) {
        timestamp = items1[index + 1][0].timestamp;
      }
      if (index === diff) {
        let tmp24 = closure_0.isDM() && !arr.hasMoreBefore && tmp15;
        if (!tmp24) {
          let isThreadResult = obj4.isThread();
          if (isThreadResult) {
            isThreadResult = !obj4.isForumPost();
          }
          if (isThreadResult) {
            isThreadResult = !arr.hasMoreBefore;
          }
          if (isThreadResult) {
            isThreadResult = tmp15;
          }
          tmp24 = isThreadResult;
        }
        let flag = false;
        if (tmp24) {
          flag = true;
        }
      } else {
        require("DateUtils");
        flag = true;
      }
      function processHiddenMessageRow(changeType) {
        const iter = closure_0[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          message = nextResult;
          let tmp5 = determineChangeType(nextResult) !== constants.NOOP && changeType.changeType === constants.NOOP;
          if (tmp5) {
            changeType.changeType = constants.UPDATE;
          }
          let content = changeType.content;
          let obj2 = {
            rowType: constants2.MESSAGE,
            changeType: constants.NOOP,
            roleStyle: intl,
            message: null,
            isSystemDM: null,
            isFirst: null,
            canAddNewReactions: null,
          };
          obj2.message = message;
          let isSystemDMResult = require.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = message.isSystemDM();
          }
          obj2.isSystemDM = isSystemDMResult;
          obj2.isFirst = message === message;
          obj2.canAddNewReactions = canAddNewReactions;
          arr = content.unshift(obj2);
          continue;
        }
        changeType.revealed = message.id === messages.revealedMessageId;
        changeType.context = message.id;
        return changeType;
      }
      let obj2 = { roleStyle: intl, message, isFirst: true, content: [], text: "", revealed: false };
      let tmp31 = items[items.length - 1];
      if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp31) {
          const obj5 = {};
          const merged = Object.assign(obj2);
          obj5.rowType = chatManager.SUSPENDED_USER_GROUP;
          obj5.changeType = determineChangeType(message);
          obj5.canUncollapse = false;
          arr2.push(obj5);
          tmp31 = obj5;
          const tmp197 = determineChangeType(message);
        }
        const result = processHiddenMessageRow(tmp31);
        const intl4 = require("util").intl;
        const obj10 = { count: tmp31.content.length };
        tmp31.text = intl4.formatToPlainString(require("util").t.rHRovo, obj10);
      } else if (message.blocked) {
        if (null == tmp31) {
          let INSERT2 = determineChangeType(message);
          let blocked = INSERT2 === constants.NOOP;
          if (blocked) {
            blocked = chatManager.getBlocked(message);
          }
          if (blocked) {
            INSERT2 = constants.INSERT;
          }
          const obj11 = {};
          const merged1 = Object.assign(obj2);
          obj11.rowType = chatManager.BLOCKED_GROUP;
          obj11.changeType = INSERT2;
          arr2.push(obj11);
          let tmp176 = obj11;
        } else {
          tmp176 = tmp31;
        }
        const result1 = processHiddenMessageRow(tmp176);
        const intl3 = require("util").intl;
        const obj12 = { count: tmp176.content.length };
        tmp176.text = intl3.formatToPlainString(require("util").t["+FcYM/"], obj12);
      } else if (message.ignored) {
        if (null == tmp31) {
          let INSERT = determineChangeType(message);
          let ignored = INSERT === constants.NOOP;
          if (ignored) {
            ignored = chatManager.getIgnored(message);
          }
          if (ignored) {
            INSERT = constants.INSERT;
          }
          const obj14 = {};
          const merged2 = Object.assign(obj2);
          obj14.rowType = chatManager.IGNORED_GROUP;
          obj14.changeType = INSERT;
          arr2.push(obj14);
          let tmp156 = obj14;
        } else {
          tmp156 = tmp31;
        }
        const result2 = processHiddenMessageRow(tmp156);
        const intl2 = require("util").intl;
        const obj15 = { count: tmp156.content.length };
        tmp156.text = intl2.formatToPlainString(require("util").t["VFWjc+"], obj15);
      } else if (isCollapsiblePlaceholder(message)) {
        let tmp132 = !renderContentOnly;
        if (!renderContentOnly) {
          let tmp133 = flag;
          if (!flag) {
            tmp133 = tmp18;
          }
          if (!tmp133) {
            tmp133 = tmp16;
          }
          tmp132 = tmp133;
        }
        let rowType;
        if (tmp31 != null) {
          rowType = tmp31.rowType;
        }
        if (rowType === chatManager.MESSAGE) {
          if (null != tmp31.unlinkedGamePlayerPlaceholders) {
            tmp31.message = message;
            tmp31.separatorBefore = tmp132;
            let obj16 = tmp31;
          }
          const substr = arr.slice();
          items = [];
          const arraySpreadResult = HermesBuiltin.arraySpread(substr.reverse(), 0);
          let prop = obj16.unlinkedGamePlayerPlaceholders;
          if (prop == null) {
            prop = [];
          }
          HermesBuiltin.arraySpread(prop, arraySpreadResult);
          obj16.unlinkedGamePlayerPlaceholders = items;
          obj16.changeType = determineChangeType(message);
          let tmp150 = obj16.changeType === constants.NOOP;
          if (tmp150) {
            tmp150 =
              (null != length && tmp151 !== arr.length) ||
              items.some(
                (message) =>
                  chatManager.determineChangeType({ message, updateMessageIds, forceRender }, false) !== constants.NOOP,
              );
            const tmp152 =
              (null != length && tmp151 !== arr.length) ||
              items.some(
                (message) =>
                  chatManager.determineChangeType({ message, updateMessageIds, forceRender }, false) !== constants.NOOP,
              );
          }
          if (tmp150) {
            obj16.changeType = constants.UPDATE;
          }
        }
        obj16 = {
          roleStyle: tmp29,
          message,
          isFirst: true,
          separatorBefore: tmp132,
          rowType: chatManager.MESSAGE,
          changeType: constants.NOOP,
        };
        arr2.push(obj16);
      } else {
        let iter = arr[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let obj6 = nextResult;
          let tmp38 = nextResult !== message;
          let obj7 = closure_0;
          let isEditingResult = editing.isEditing(closure_0.id, nextResult.id);
          if (!isEditingResult) {
            isEditingResult = closure_3 === obj6.id;
          }
          let tmp44 = isEditingResult;
          pushFeedback = pushFeedback.getPushFeedback(obj6.channel_id, obj6.id);
          let obj8 = require("canReplyToMessage");
          let canReplyToMessageResult = obj8.canReplyToMessage(obj7, obj6);
          let tmp55 = messages(id[12])(obj6, closure_4);
          if (tmp55) {
            let obj9 = require("ThreadHooks");
            tmp55 = !obj9.isNonModInLockedThread(obj7);
          }
          let tmp60 = message;
          if (message.hasOwnProperty(obj6.id)) {
            let result3 = chatManager.determineChangeTypeForUploadProgress(tmp60[obj6.id]);
          } else {
            result3 = determineChangeType(obj6, true);
          }
          let tmp68 = null != summary;
          if (tmp68) {
            tmp68 = summary.endId === obj6.id;
          }
          if (tmp68) {
            tmp68 = summary.count > 1;
          }
          if (tmp68) {
            let obj17 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: false };
            obj17.rowType = intl.SUMMARY;
            obj17.changeType = determineChangeType(obj6);
            obj17.roleStyle = intl;
            obj17.summary = summary;
            let arr17 = items.push(obj17);
          }
          let arr3 = items;
          let obj18 = {
            roleStyle: null,
            message: null,
            isSystemDM: null,
            isFirst: null,
            isEditing: null,
            separatorBefore: null,
            canAddNewReactions: null,
            alwaysShowAddReaction: null,
            renderContentOnly: null,
            pushFeedbackType: null,
            canReply: null,
            canEdit: null,
            rowType: null,
            changeType: null,
            showContentInventoryEntryFallbackEmbed: null,
          };
          let tmp80 = intl;
          obj18.roleStyle = intl;
          obj18.message = obj6;
          let isSystemDMResult = obj7.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj6.isSystemDM();
          }
          obj18.isSystemDM = isSystemDMResult;
          obj18.isFirst = obj6 === message;
          obj18.isEditing = tmp44;
          let tmp88 = !tmp38;
          if (!tmp38) {
            tmp88 = !renderContentOnly;
          }
          if (tmp88) {
            let tmp91 = flag;
            if (!flag) {
              tmp91 = tmp18;
            }
            if (!tmp91) {
              tmp91 = tmp16;
            }
            tmp88 = tmp91;
          }
          obj18.separatorBefore = tmp88;
          obj18.canAddNewReactions = canAddNewReactions;
          let isForumPostResult = obj7.isForumPost();
          if (isForumPostResult) {
            let tmp52Result = messages(id[5]);
            isForumPostResult = obj6.id === tmp52Result.castChannelIdAsMessageId(obj7.id);
          }
          obj18.alwaysShowAddReaction = isForumPostResult;
          obj18.renderContentOnly = renderContentOnly;
          let pushType;
          if (pushFeedback != null) {
            pushType = pushFeedback.pushType;
          }
          obj18.pushFeedbackType = pushType;
          let tmp103 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp103 = canReplyToMessageResult;
          }
          obj18.canReply = tmp103;
          let tmp105 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp105 = tmp55;
          }
          obj18.canEdit = tmp105;
          obj18.rowType = chatManager.MESSAGE;
          obj18.changeType = result3;
          let hasItem;
          if (set != null) {
            hasItem = set.has(obj6.id);
          }
          obj18.showContentInventoryEntryFallbackEmbed = hasItem;
          let arr18 = items.push(obj18);
          let tmp113 = null != constants2;
          if (tmp113) {
            tmp113 = obj6.id === constants2.startMessageId;
          }
          if (tmp113) {
            tmp113 = constants2.messageCount > 1;
          }
          if (tmp113) {
            let obj19 = { rowType: null, changeType: null, roleStyle: null, conversationHeader: null };
            obj19.rowType = intl.CONVERSATION;
            obj19.changeType = determineChangeType(obj6);
            obj19.roleStyle = tmp80;
            obj19.conversationHeader = messages(id[14])(constants2);
            let arr19 = arr3.push(obj19);
          }
          let tmp122 = null != summary;
          if (tmp122) {
            tmp122 = summary.startId === obj6.id;
          }
          if (tmp122) {
            tmp122 = summary.count > 1;
          }
          if (tmp122) {
            let obj20 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: true };
            obj20.rowType = intl.SUMMARY;
            obj20.changeType = determineChangeType(obj6);
            obj20.roleStyle = tmp80;
            obj20.summary = summary;
            let arr20 = arr3.push(obj20);
          }
          continue;
        }
      }
      if (flag) {
        if (!renderContentOnly) {
          let NOOP = determineChangeType(message);
          if (NOOP === constants.UPDATE) {
            NOOP = constants.NOOP;
          }
          const obj21 = {
            rowType: intl.DAY,
            changeType: NOOP,
            roleStyle: intl,
            text: require("DateUtils").dateFormat(message.timestamp, "LL"),
          };
          items.push(obj21);
          const obj24 = require("DateUtils");
        }
      }
      if (tmp18) {
        tmp18 = !renderContentOnly;
      }
      if (tmp18) {
        const obj22 = { rowType: intl.UNREAD, changeType: determineChangeType(message), roleStyle: intl, text: null };
        const intl5 = require("util").intl;
        obj22.text = intl5.string(require("util").t.q7hm3m).toLocaleUpperCase(require("util").intl.currentLocale);
        items.push(obj22);
        const stringResult = intl5.string(require("util").t.q7hm3m);
      }
      if (tmp16) {
        tmp16 = !renderContentOnly;
      }
      if (tmp16) {
        let obj23 = {
          rowType: constants2.LOAD_BEFORE,
          changeType: forceRender ? constants.UPDATE : constants.NOOP,
          roleStyle: intl,
          isLoading: message.loadingMore,
          text: null,
        };
        const intl6 = require("util").intl;
        obj23.text = intl6.string(require("util").t.XBlaiC);
        obj23 = items.push(obj23);
      }
      tmp29 = intl;
    } else {
      let obj25 = { rowType: constants2.LOAD_AFTER, changeType: null, roleStyle: null, isLoading: null, text: null };
      intl = constants;
      obj25.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj25.roleStyle = intl;
      obj25.isLoading = message.loadingMore;
      intl = require("util").intl;
      obj25.text = intl.string(require("util").t.XBlaiC);
      obj25 = items.push(obj25);
    }
  });
  let tmp14 = 0 === items1.length && !messages.loadingMore;
  if (tmp14) {
    tmp14 = messages.hasMoreAfter || messages.hasMoreBefore;
    const tmp15 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (!tmp14) {
    return items;
  } else {
    let obj2 = {
      rowType: messages.hasMoreBefore ? constants2.LOAD_BEFORE : constants2.LOAD_AFTER,
      changeType: forceRender ? constants.UPDATE : constants.NOOP,
      roleStyle: intl,
      isLoading: messages.loadingMore,
      text: null,
    };
    intl = require("util").intl;
    messages = intl.string;
    obj2.text = messages(require("util").t.XBlaiC);
    obj2 = items.push(obj2);
  }
  obj = {};
}
