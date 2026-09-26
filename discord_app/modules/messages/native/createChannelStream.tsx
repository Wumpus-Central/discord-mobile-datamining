// discord_app/modules/messages/native/createChannelStream.tsx
import SnowflakeUtilsDefault from "../../../utils/SnowflakeUtils.tsx";
import createConversationHeader from "../../conversations/native/createConversationHeader.tsx";
import isNewMessageGroupDefault from "../isNewMessageGroup.tsx";
import tryInjectMessage from "../tryInjectMessage.tsx";
import PushFeedbackStore from "../../push_feedback/PushFeedbackStore.tsx";
import EditMessageStore from "../../../stores/EditMessageStore.tsx";
import UploadStore from "../../../stores/UploadStore.tsx";

const require = globalThis.__r;

require = fn;
const RowGeneratorConstants = fn(7375);
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
    selectedConversation: closure_7,
    chatManager: closure_8,
    roleStyle,
  } = forceRender);
  forceRender = forceRender.forceRender;
  ({
    updateMessageIds: closure_11,
    isResourceChannel: closure_12,
    unloadableContentEntryMessageIds: closure_13,
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
    const first = items1[0];
    if (null != first) {
      if (forumPost.isForumPost()) {
        let tmp2 = tmp15;
        if (tmp15) {
          tmp2 = message.id !== SnowflakeUtilsDefault.castChannelIdAsMessageId(forumPost.id);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp15;
      }
      if (!tmp) {
        if (!obj2.isConversationStartMessage(constants2, message.id)) {
          if (isNewMessageGroupDefault(forumPost, first[first.length - 1], message)) {
            items = [message];
            arr.unshift(items);
          } else {
            first.unshift(message);
          }
        }
        obj2 = createConversationHeader;
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
    return constants2.determineChangeType({ message, updateMessageIds, forceRender }, flag);
  }
  let items = [];
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
      obj[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  const item = messages.forEach((id) => {
    const result = tryInjectMessage.tryCreateInjectedMessage(id, forumPost);
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
        let tmp25 = item.isDM() && !tmp16.hasMoreBefore && tmp15;
        if (!tmp25) {
          let isThreadResult = obj4.isThread();
          if (isThreadResult) {
            isThreadResult = !obj4.isForumPost();
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
        require("DateUtils");
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
          let obj2 = {
            rowType: constants2.MESSAGE,
            changeType: constants.NOOP,
            roleStyle,
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
          let arr = content.unshift(obj2);
          continue;
        }
        changeType.revealed = message.id === messages.revealedMessageId;
        changeType.context = message.id;
        return changeType;
      }
      let obj2 = { roleStyle, message, isFirst: true, content: [], text: "", revealed: false };
      let tmp32 = items[items.length - 1];
      if (message.hasFlag(forceRender.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp32) {
          const obj5 = {};
          const merged = Object.assign(obj2);
          obj5.rowType = closure_1_8.SUSPENDED_USER_GROUP;
          obj5.changeType = determineChangeType(message);
          obj5.canUncollapse = false;
          items.push(obj5);
          tmp32 = obj5;
          const tmp160 = determineChangeType(message);
        }
        const result = processHiddenMessageRow(tmp32);
        const intl4 = require("util").intl;
        const obj10 = { count: tmp32.content.length };
        tmp32.text = intl4.formatToPlainString(require("util").t.rHRovo, obj10);
      } else if (message.blocked) {
        if (null == tmp32) {
          let INSERT2 = determineChangeType(message);
          let blocked = INSERT2 === constants.NOOP;
          if (blocked) {
            blocked = closure_8.getBlocked(message);
          }
          if (blocked) {
            INSERT2 = constants.INSERT;
          }
          const obj11 = {};
          const merged1 = Object.assign(obj2);
          obj11.rowType = closure_1_8.BLOCKED_GROUP;
          obj11.changeType = INSERT2;
          items.push(obj11);
          let tmp141 = obj11;
        } else {
          tmp141 = tmp32;
        }
        const result1 = processHiddenMessageRow(tmp141);
        const intl3 = require("util").intl;
        const obj12 = { count: tmp141.content.length };
        tmp141.text = intl3.formatToPlainString(require("util").t["+FcYM/"], obj12);
      } else if (message.ignored) {
        if (null == tmp32) {
          let INSERT = determineChangeType(message);
          let ignored = INSERT === constants.NOOP;
          if (ignored) {
            ignored = closure_8.getIgnored(message);
          }
          if (ignored) {
            INSERT = constants.INSERT;
          }
          const obj14 = {};
          const merged2 = Object.assign(obj2);
          obj14.rowType = closure_1_8.IGNORED_GROUP;
          obj14.changeType = INSERT;
          items.push(obj14);
          let tmp123 = obj14;
        } else {
          tmp123 = tmp32;
        }
        const result2 = processHiddenMessageRow(tmp123);
        const intl2 = require("util").intl;
        const obj15 = { count: tmp123.content.length };
        tmp123.text = intl2.formatToPlainString(require("util").t["VFWjc+"], obj15);
      } else {
        let iter = item[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          let obj6 = nextResult;
          let tmp38 = nextResult !== message;
          let obj7 = item;
          let isEditingResult = editing.isEditing(item.id, nextResult.id);
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
            let result3 = closure_8.determineChangeTypeForUploadProgress(tmp60[obj6.id]);
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
            let obj16 = {
              rowType: roleStyle.SUMMARY,
              changeType: null,
              roleStyle: null,
              summary: null,
              isBeforeContent: false,
            };
            obj16.changeType = determineChangeType(obj6);
            obj16.roleStyle = roleStyle;
            obj16.summary = summary;
            let arr13 = items.push(obj16);
          }
          let obj17 = {
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
            conversationHeader: null,
          };
          obj17.message = obj6;
          let isSystemDMResult = obj7.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj6.isSystemDM();
          }
          obj17.isSystemDM = isSystemDMResult;
          obj17.isFirst = obj6 === message;
          obj17.isEditing = tmp44;
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
          obj17.separatorBefore = tmp88;
          obj17.canAddNewReactions = canAddNewReactions;
          let isForumPostResult = obj7.isForumPost();
          if (isForumPostResult) {
            let tmp52Result = messages(id[5]);
            isForumPostResult = obj6.id === tmp52Result.castChannelIdAsMessageId(obj7.id);
          }
          obj17.alwaysShowAddReaction = isForumPostResult;
          obj17.renderContentOnly = renderContentOnly;
          let pushType;
          if (pushFeedback != null) {
            pushType = pushFeedback.pushType;
          }
          obj17.pushFeedbackType = pushType;
          let tmp103 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp103 = canReplyToMessageResult;
          }
          obj17.canReply = tmp103;
          let tmp105 = !renderContentOnly;
          if (!renderContentOnly) {
            tmp105 = tmp55;
          }
          obj17.canEdit = tmp105;
          obj17.rowType = closure_1_8.MESSAGE;
          obj17.changeType = result3;
          let hasItem;
          if (set != null) {
            hasItem = set.has(obj6.id);
          }
          obj17.showContentInventoryEntryFallbackEmbed = hasItem;
          obj17.conversationHeader = messages(id[6])(closure_7, obj6.id);
          let arr14 = items.push(obj17);
          let tmp114 = null != summary;
          if (tmp114) {
            tmp114 = summary.startId === obj6.id;
          }
          if (tmp114) {
            tmp114 = summary.count > 1;
          }
          if (tmp114) {
            let obj18 = {
              rowType: roleStyle.SUMMARY,
              changeType: null,
              roleStyle: null,
              summary: null,
              isBeforeContent: true,
            };
            obj18.changeType = determineChangeType(obj6);
            obj18.roleStyle = roleStyle;
            obj18.summary = summary;
            let arr15 = items.push(obj18);
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
          const obj19 = {
            rowType: roleStyle.DAY,
            changeType: NOOP,
            roleStyle,
            text: require("DateUtils").dateFormat(message.timestamp, "LL"),
          };
          items.push(obj19);
          const obj21 = require("DateUtils");
        }
      }
      if (tmp19) {
        tmp19 = !renderContentOnly;
      }
      if (tmp19) {
        const obj20 = { rowType: roleStyle.UNREAD, changeType: determineChangeType(message), roleStyle, text: null };
        const intl5 = require("util").intl;
        obj20.text = intl5.string(require("util").t.q7hm3m).toUpperCase();
        items.push(obj20);
        const str2 = intl5.string(require("util").t.q7hm3m);
      }
      if (tmp17) {
        tmp17 = !renderContentOnly;
      }
      if (tmp17) {
        let obj22 = {
          rowType: constants2.LOAD_BEFORE,
          changeType: forceRender ? constants.UPDATE : constants.NOOP,
          roleStyle,
          isLoading: message.loadingMore,
          text: null,
        };
        const intl6 = require("util").intl;
        obj22.text = intl6.string(require("util").t.XBlaiC);
        obj22 = items.push(obj22);
      }
    } else {
      let obj23 = { rowType: constants2.LOAD_AFTER, changeType: null, roleStyle: null, isLoading: null, text: null };
      let intl = constants;
      obj23.changeType = forceRender ? intl.UPDATE : intl.NOOP;
      obj23.roleStyle = roleStyle;
      obj23.isLoading = message.loadingMore;
      intl = require("util").intl;
      obj23.text = intl.string(require("util").t.XBlaiC);
      obj23 = items.push(obj23);
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
    let obj2 = {
      rowType: messages.hasMoreBefore ? constants2.LOAD_BEFORE : constants2.LOAD_AFTER,
      changeType: forceRender ? constants.UPDATE : constants.NOOP,
      roleStyle,
      isLoading: messages.loadingMore,
      text: null,
    };
    roleStyle = require("util").intl;
    messages = roleStyle.string;
    obj2.text = messages(require("util").t.XBlaiC);
    obj2 = items.push(obj2);
  }
  obj = {};
}
