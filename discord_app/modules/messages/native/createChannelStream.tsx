// discord_app/modules/messages/native/createChannelStream.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import isNewMessageGroupDefault from "../isNewMessageGroup.tsx";
import tryInjectMessage from "../tryInjectMessage.tsx";
import PushFeedbackStore from "../../push_feedback/PushFeedbackStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import UploadStore from "../../../stores/UploadStore.tsx";

require = fn;
const RowGeneratorConstants = fn(7933);
({
  Changeset: metroRequire,
  LoadingType: closure_7,
  RowType: closure_8,
  SeparatorType: closure_9,
} = RowGeneratorConstants);
const MessageFlags = fn(1074).MessageFlags;
const size = fn(2);
let result = size.fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  ({ channel: require, messages } = forceRender);
  ({
    uploads,
    oldestUnreadMessageId: id,
    replyingMessageId: PushFeedbackStore,
    currentUserId: EditMessageStore,
    canAddNewReactions: UploadStore,
    selectedSummary: closure_6,
    chatManager: closure_7,
    roleStyle,
  } = forceRender);
  forceRender = forceRender.forceRender;
  ({
    updateMessageIds: MessageFlags,
    isResourceChannel: closure_11,
    unloadableContentEntryMessageIds: closure_12,
  } = forceRender);
  let items1;
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
  function insertMessage(message) {
    arr = items1;
    const first = items1[0];
    if (null != first) {
      if (require.isForumPost()) {
        let tmp2 = tmp12;
        if (tmp12) {
          tmp2 = message.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(require.id);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp12;
      }
      if (!tmp) {
        if (isNewMessageGroupDefault(require, first[first.length - 1], message)) {
          items = [message];
          arr = arr.unshift(items);
        } else {
          arr = first.unshift(message);
        }
      }
    }
    items1 = [message];
    arr.unshift(items1);
  }
  function determineChangeType(message) {
    let flag = arg1;
    if (arg1 === undefined) {
      flag = false;
    }
    return constants.determineChangeType({ message, updateMessageIds, forceRender }, flag);
  }
  let items = [];
  let arr = {};
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
      arr[tmp6.nonce] = tmp3;
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
  const item1 = items1.forEach((item, index) => {
    let message = item[item.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = message.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp17 = message.hasMoreBefore && tmp15;
      let tmp19 = unreadFilter(message);
      let timestamp = null;
      if (index !== diff) {
        timestamp = items1[index + 1][0].timestamp;
      }
      if (index === diff) {
        let obj3 = item;
        let tmp25 = item.isDM() && !tmp16.hasMoreBefore && tmp15;
        if (!tmp25) {
          let isThreadResult = obj3.isThread();
          if (isThreadResult) {
            isThreadResult = !obj3.isForumPost();
          }
          if (isThreadResult) {
            isThreadResult = !tmp16.hasMoreBefore;
          }
          if (isThreadResult) {
            isThreadResult = tmp15;
          }
          tmp25 = isThreadResult;
        }
        let flag = false;
        if (tmp25) {
          flag = true;
        }
      } else {
        let obj2 = require("DateUtils");
        flag = true;
      }
      function processHiddenMessageRow(changeType) {
        const iter = item[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          message = nextResult;
          let tmp5 = determineChangeType(nextResult) !== constants.NOOP && changeType.changeType === constants.NOOP;
          if (tmp5) {
            changeType.changeType = constants.UPDATE;
          }
          let content = changeType.content;
          message = {
            rowType: constants2.MESSAGE,
            changeType: constants.NOOP,
            roleStyle,
            message: null,
            isSystemDM: null,
            isFirst: null,
            canAddNewReactions: null,
          };
          message.message = message;
          let isSystemDMResult = require.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = message.isSystemDM();
          }
          message.isSystemDM = isSystemDMResult;
          message.isFirst = message === message;
          message.canAddNewReactions = canAddNewReactions;
          arr = content.unshift(message);
          continue;
        }
        changeType.revealed = message.id === messages.revealedMessageId;
        changeType.context = message.id;
        return changeType;
      }
      message = { roleStyle, message: null, isFirst: true, content: null, text: "", revealed: false };
      message.message = message;
      message.content = [];
      arr = items;
      let tmp32 = items[items.length - 1];
      if (message.hasFlag(updateMessageIds.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp32) {
          message = {};
          const merged = Object.assign(message);
          message.rowType = roleStyle.SUSPENDED_USER_GROUP;
          message.changeType = determineChangeType(message);
          message.canUncollapse = false;
          arr = arr.push(message);
          tmp32 = message;
          const tmp157 = determineChangeType(message);
        }
        const result = processHiddenMessageRow(tmp32);
        const intl4 = require("util").intl;
        const obj1 = { count: tmp32.content.length };
        tmp32.text = intl4.formatToPlainString(require("util").t.rHRovo, obj1);
      } else if (message.blocked) {
        if (null == tmp32) {
          let INSERT2 = determineChangeType(message);
          let blocked = INSERT2 === constants.NOOP;
          if (blocked) {
            blocked = closure_7.getBlocked(message);
          }
          if (blocked) {
            INSERT2 = constants.INSERT;
          }
          obj2 = {};
          const merged1 = Object.assign(message);
          obj2.rowType = roleStyle.BLOCKED_GROUP;
          obj2.changeType = INSERT2;
          arr = arr.push(obj2);
          let tmp138 = obj2;
        } else {
          tmp138 = tmp32;
        }
        const result1 = processHiddenMessageRow(tmp138);
        const intl3 = require("util").intl;
        obj3 = { count: tmp138.content.length };
        tmp138.text = intl3.formatToPlainString(require("util").t["+FcYM/"], obj3);
      } else if (message.ignored) {
        if (null == tmp32) {
          let INSERT = determineChangeType(message);
          let ignored = INSERT === constants.NOOP;
          if (ignored) {
            ignored = closure_7.getIgnored(message);
          }
          if (ignored) {
            INSERT = constants.INSERT;
          }
          const obj4 = {};
          const merged2 = Object.assign(message);
          obj4.rowType = roleStyle.IGNORED_GROUP;
          obj4.changeType = INSERT;
          let arr1 = arr.push(obj4);
          let tmp120 = obj4;
        } else {
          tmp120 = tmp32;
        }
        const result2 = processHiddenMessageRow(tmp120);
        const intl2 = require("util").intl;
        let obj5 = { count: tmp120.content.length };
        tmp120.text = intl2.formatToPlainString(require("util").t["VFWjc+"], obj5);
      } else {
        let iter = item[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          obj5 = nextResult;
          let tmp38 = nextResult !== message;
          let obj6 = item;
          let isEditingResult = editing.isEditing(item.id, nextResult.id);
          if (!isEditingResult) {
            isEditingResult = closure_3 === obj5.id;
          }
          let tmp44 = isEditingResult;
          pushFeedback = pushFeedback.getPushFeedback(obj5.channel_id, obj5.id);
          let obj7 = require("canReplyToMessage");
          let canReplyToMessageResult = obj7.canReplyToMessage(obj6, obj5);
          let tmp55 = messages(id[11])(obj5, closure_4);
          if (tmp55) {
            let obj8 = require("ThreadHooks");
            tmp55 = !obj8.isNonModInLockedThread(obj6);
          }
          let tmp60 = arr;
          if (arr.hasOwnProperty(obj5.id)) {
            let result3 = closure_7.determineChangeTypeForUploadProgress(tmp60[obj5.id]);
          } else {
            result3 = determineChangeType(obj5, true);
          }
          let tmp68 = null != summary;
          if (tmp68) {
            tmp68 = summary.endId === obj5.id;
          }
          if (tmp68) {
            tmp68 = summary.count > 1;
          }
          if (tmp68) {
            obj6 = {
              rowType: forceRender.SUMMARY,
              changeType: null,
              roleStyle: null,
              summary: null,
              isBeforeContent: false,
            };
            obj6.changeType = determineChangeType(obj5);
            obj6.roleStyle = roleStyle;
            obj6.summary = summary;
            let arr2 = items.push(obj6);
          }
          arr1 = items;
          obj7 = {
            roleStyle,
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
          obj7.message = obj5;
          let isSystemDMResult = obj6.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj5.isSystemDM();
          }
          obj7.isSystemDM = isSystemDMResult;
          obj7.isFirst = obj5 === message;
          obj7.isEditing = tmp44;
          let tmp88 = !tmp38;
          if (!tmp38) {
            tmp88 = !renderContentOnly;
          }
          if (tmp88) {
            let tmp91 = flag;
            if (!flag) {
              tmp91 = tmp19;
            }
            if (!tmp91) {
              tmp91 = tmp17;
            }
            tmp88 = tmp91;
          }
          obj7.separatorBefore = tmp88;
          obj7.canAddNewReactions = canAddNewReactions;
          let isForumPostResult = obj6.isForumPost();
          if (isForumPostResult) {
            let tmp52Result = messages(id[5]);
            isForumPostResult = obj5.id === tmp52Result.castChannelIdAsMessageId(obj6.id);
          }
          obj7.alwaysShowAddReaction = isForumPostResult;
          obj7.renderContentOnly = renderContentOnly;
          let pushType;
          if (pushFeedback != null) {
            pushType = pushFeedback.pushType;
          }
          obj7.pushFeedbackType = pushType;
          let tmp103 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp103 = canReplyToMessageResult;
          }
          obj7.canReply = tmp103;
          let tmp105 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp105 = tmp55;
          }
          obj7.canEdit = tmp105;
          obj7.rowType = roleStyle.MESSAGE;
          obj7.changeType = result3;
          let obj12 = closure_12;
          let hasItem;
          if (closure_12 != null) {
            hasItem = obj12.has(obj5.id);
          }
          obj7.showContentInventoryEntryFallbackEmbed = hasItem;
          let arr3 = items.push(obj7);
          let tmp111 = null != summary;
          if (tmp111) {
            tmp111 = summary.startId === obj5.id;
          }
          if (tmp111) {
            tmp111 = summary.count > 1;
          }
          if (tmp111) {
            obj8 = {
              rowType: forceRender.SUMMARY,
              changeType: null,
              roleStyle: null,
              summary: null,
              isBeforeContent: true,
            };
            obj8.changeType = determineChangeType(obj5);
            obj8.roleStyle = roleStyle;
            obj8.summary = summary;
            let arr4 = arr1.push(obj8);
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
          const obj9 = {
            rowType: forceRender.DAY,
            changeType: NOOP,
            roleStyle,
            text: require("DateUtils").dateFormat(message.timestamp, "LL"),
          };
          items.push(obj9);
          const obj21 = require("DateUtils");
        }
      }
      if (tmp19) {
        tmp19 = !renderContentOnly;
      }
      if (tmp19) {
        const obj10 = { rowType: forceRender.UNREAD, changeType: determineChangeType(message), roleStyle, text: null };
        const intl5 = require("util").intl;
        obj10.text = intl5.string(require("util").t.q7hm3m).toUpperCase();
        items.push(obj10);
        const str2 = intl5.string(require("util").t.q7hm3m);
      }
      if (tmp17) {
        tmp17 = !renderContentOnly;
      }
      if (tmp17) {
        let obj11 = {
          rowType: closure_1_7.LOAD_BEFORE,
          changeType: forceRender ? constants.UPDATE : constants.NOOP,
          roleStyle,
          isLoading: message.loadingMore,
          text: null,
        };
        const intl6 = require("util").intl;
        obj11.text = intl6.string(require("util").t.XBlaiC);
        obj11 = items.push(obj11);
      }
    } else {
      obj12 = { rowType: closure_1_7.LOAD_AFTER, changeType: null, roleStyle: null, isLoading: null, text: null };
      let intl = constants;
      obj12.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj12.roleStyle = roleStyle;
      obj12.isLoading = message.loadingMore;
      intl = require("util").intl;
      obj12.text = intl.string(require("util").t.XBlaiC);
      obj12 = items.push(obj12);
    }
  });
  let tmp12 = 0 === items1.length && !messages.loadingMore;
  if (tmp12) {
    tmp12 = messages.hasMoreAfter || messages.hasMoreBefore;
    let tmp13 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (!tmp12) {
    return items;
  } else {
    arr = {
      rowType: messages.hasMoreBefore ? constants.LOAD_BEFORE : constants.LOAD_AFTER,
      changeType: forceRender ? constants.UPDATE : constants.NOOP,
      roleStyle,
      isLoading: messages.loadingMore,
      text: null,
    };
    roleStyle = require("util").intl;
    messages = roleStyle.string;
    arr.text = messages(require("util").t.XBlaiC);
    arr = items.push(arr);
  }
}
