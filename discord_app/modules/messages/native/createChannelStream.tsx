// === Module 11138: createChannelStream ===

// Module 11138 (createChannelStream)
import getSystemLocale from "getSystemLocale" /* 1236 */;
import resetCache from "resetCache" /* 4063 */;
import useCanUnarchiveThread from "useCanUnarchiveThread" /* 7234 */;
import useCanReplyToMessage from "useCanReplyToMessage" /* 8199 */;
import map from "map" /* 11140 */;
import initialize from "initialize" /* 10640 */;
import initialize2 from "initialize" /* 7435 */;
import initialize3 from "initialize" /* 7582 */;
import Changeset from "Changeset" /* 8158 */;
import { MessageFlags } from "ME" /* 676 */;

require = fn;
({ Changeset: closure_6, LoadingType: error, RowType: closure_8, SeparatorType: c9 } = Changeset);
let result = require("obj132").fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  ({ channel: require, messages } = forceRender);
  ({ uploads, oldestUnreadMessageId: dependencyMap, replyingMessageId: closure_3, currentUserId: closure_4, canAddNewReactions: closure_5, selectedSummary: closure_6, chatManager: closure_7, roleStyle } = forceRender);
  forceRender = forceRender.forceRender;
  ({ updateMessageIds: MessageFlags, isResourceChannel: closure_11, unloadableContentEntryMessageIds: closure_12 } = forceRender);
  let items1;
  function unreadFilter(id) {
    if (closure_0.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp2) {
        tmp4 = id.id !== messages(dependencyMap[5]).castChannelIdAsMessageId(closure_0.id);
        const obj = messages(dependencyMap[5]);
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
      if (closure_0.isForumPost()) {
        let tmp2 = tmp12;
        if (tmp12) {
          tmp2 = message.id !== messages(dependencyMap[5]).castChannelIdAsMessageId(closure_0.id);
          const obj = messages(dependencyMap[5]);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp12;
      }
      if (!tmp) {
        if (messages(dependencyMap[6])(closure_0, first[first.length - 1], message)) {
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
    return store.determineChangeType({ message, updateMessageIds: closure_10, forceRender }, flag);
  }
  let items = [];
  let arr = {};
  const substr = uploads.slice();
  const reversed = substr.reverse();
  let iter = reversed[Symbol.iterator]();
  let nextResult = iter.next();
  while (iter !== undefined) {
    let tmp3 = nextResult;
    messageForFile = messageForFile.getMessageForFile(nextResult.id);
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
  const item = messages.forEach((item, index) => {
    const result = map.tryCreateInjectedMessage(item, closure_0);
    let tmp2 = null != result;
    if (tmp2) {
      tmp2 = "before" === result.position;
    }
    if (tmp2) {
      insertMessage(result.message);
      if (id === item.id) {
        id = result.message.id;
      }
    }
    insertMessage(item);
    let tmp8 = null != result;
    if (tmp8) {
      tmp8 = "after" === result.position;
    }
    if (tmp8) {
      insertMessage(result.message);
    }
  });
  const item1 = items1.forEach((item, index) => {
    closure_0 = item;
    let obj = item[item.length - 1];
    let hasMoreAfter = 0 === index;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = obj.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp17 = obj.hasMoreBefore && tmp15;
      let tmp19 = unreadFilter(obj);
      let timestamp = null;
      if (index !== diff) {
        timestamp = items1[index + 1][0].timestamp;
      }
      if (index === diff) {
        let obj3 = closure_0;
        let tmp25 = closure_0.isDM() && !tmp16.hasMoreBefore && tmp15;
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
        let obj2 = resetCache;
        flag = true;
      }
      function processHiddenMessageRow(changeType) {
        const iter = item[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          obj = nextResult;
          let tmp5 = determineChangeType(nextResult) !== closure_2_6.NOOP && changeType.changeType === closure_2_6.NOOP;
          if (tmp5) {
            changeType.changeType = closure_2_6.UPDATE;
          }
          let content = changeType.content;
          obj = { rowType: null, changeType: null, roleStyle: null, message: null, isSystemDM: null, isFirst: null, canAddNewReactions: null };
          obj[0] = roleStyle.MESSAGE;
          obj[1] = closure_2_6.NOOP;
          obj[2] = closure_1_8;
          obj[3] = obj;
          let isSystemDMResult = item.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj.isSystemDM();
          }
          obj[4] = isSystemDMResult;
          obj[5] = obj === obj;
          obj[6] = closure_1_5;
          arr = content.unshift(obj);
          continue;
        }
        changeType.revealed = obj.id === obj.revealedMessageId;
        changeType.context = obj.id;
        return changeType;
      }
      obj = { roleStyle: null, message: null, isFirst: true, content: null, text: "", revealed: false };
      obj[0] = roleStyle;
      obj[1] = obj;
      obj[3] = [];
      arr = items;
      let tmp32 = items[items.length - 1];
      if (obj.hasFlag(MessageFlags.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp32) {
          obj = {};
          const merged = Object.assign(obj);
          obj.rowType = roleStyle.SUSPENDED_USER_GROUP;
          obj.changeType = determineChangeType(obj);
          obj.canUncollapse = false;
          arr = arr.push(obj);
          tmp32 = obj;
          const tmp157 = determineChangeType(obj);
        }
        const result = processHiddenMessageRow(tmp32);
        const intl4 = getSystemLocale.intl;
        obj1 = { count: null };
        obj1[0] = tmp32.content.length;
        tmp32.text = intl4.formatToPlainString(getSystemLocale.t.rHRovo, obj1);
      } else if (obj.blocked) {
        if (null == tmp32) {
          let INSERT2 = determineChangeType(obj);
          let blocked = INSERT2 === closure_1_6.NOOP;
          if (blocked) {
            blocked = store.getBlocked(obj);
          }
          if (blocked) {
            INSERT2 = closure_1_6.INSERT;
          }
          obj2 = {};
          const merged1 = Object.assign(obj);
          obj2.rowType = roleStyle.BLOCKED_GROUP;
          obj2.changeType = INSERT2;
          arr = arr.push(obj2);
          let tmp138 = obj2;
        } else {
          tmp138 = tmp32;
        }
        const result1 = processHiddenMessageRow(tmp138);
        const intl3 = getSystemLocale.intl;
        obj3 = { count: null };
        obj3[0] = tmp138.content.length;
        tmp138.text = intl3.formatToPlainString(getSystemLocale.t["+FcYM/"], obj3);
      } else if (obj.ignored) {
        if (null == tmp32) {
          let INSERT = determineChangeType(obj);
          let ignored = INSERT === closure_1_6.NOOP;
          if (ignored) {
            ignored = store.getIgnored(obj);
          }
          if (ignored) {
            INSERT = closure_1_6.INSERT;
          }
          const obj4 = {};
          const merged2 = Object.assign(obj);
          obj4.rowType = roleStyle.IGNORED_GROUP;
          obj4.changeType = INSERT;
          let arr1 = arr.push(obj4);
          let tmp120 = obj4;
        } else {
          tmp120 = tmp32;
        }
        const result2 = processHiddenMessageRow(tmp120);
        const intl2 = getSystemLocale.intl;
        let obj5 = { count: null };
        obj5[0] = tmp120.content.length;
        tmp120.text = intl2.formatToPlainString(getSystemLocale.t["VFWjc+"], obj5);
      } else {
        let iter = item[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          obj5 = nextResult;
          let tmp38 = nextResult !== obj;
          let obj6 = closure_0;
          let isEditingResult = closure_1_4.isEditing(closure_0.id, nextResult.id);
          if (!isEditingResult) {
            isEditingResult = closure_3 === obj5.id;
          }
          let tmp44 = isEditingResult;
          let pushFeedback = closure_1_3.getPushFeedback(obj5.channel_id, obj5.id);
          let obj7 = useCanReplyToMessage;
          let canReplyToMessageResult = obj7.canReplyToMessage(obj6, obj5);
          let tmp55 = messages(dependencyMap[11])(obj5, closure_4);
          if (tmp55) {
            let obj8 = useCanUnarchiveThread;
            tmp55 = !obj8.isNonModInLockedThread(obj6);
          }
          let tmp60 = arr;
          if (arr.hasOwnProperty(obj5.id)) {
            let result3 = store.determineChangeTypeForUploadProgress(tmp60[obj5.id]);
          } else {
            result3 = determineChangeType(obj5, true);
          }
          let tmp68 = null != closure_6;
          if (tmp68) {
            tmp68 = closure_6.endId === obj5.id;
          }
          if (tmp68) {
            tmp68 = closure_6.count > 1;
          }
          if (tmp68) {
            obj6 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: false };
            obj6[0] = forceRender.SUMMARY;
            obj6[1] = determineChangeType(obj5);
            obj6[2] = roleStyle;
            obj6[3] = closure_6;
            let arr2 = items.push(obj6);
          }
          arr1 = items;
          obj7 = { roleStyle: null, message: null, isSystemDM: null, isFirst: null, isEditing: null, separatorBefore: null, canAddNewReactions: null, alwaysShowAddReaction: null, renderContentOnly: null, pushFeedbackType: null, canReply: null, canEdit: null, rowType: null, changeType: null, showContentInventoryEntryFallbackEmbed: null };
          obj7[0] = roleStyle;
          obj7[1] = obj5;
          let isSystemDMResult = obj6.isSystemDM();
          if (isSystemDMResult) {
            isSystemDMResult = obj5.isSystemDM();
          }
          obj7[2] = isSystemDMResult;
          obj7[3] = obj5 === obj;
          obj7[4] = tmp44;
          let tmp88 = !tmp38;
          if (!tmp38) {
            tmp88 = !closure_11;
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
          obj7[5] = tmp88;
          obj7[6] = closure_5;
          let isForumPostResult = obj6.isForumPost();
          if (isForumPostResult) {
            let tmp52Result = messages(dependencyMap[5]);
            isForumPostResult = obj5.id === tmp52Result.castChannelIdAsMessageId(obj6.id);
          }
          obj7[7] = isForumPostResult;
          obj7[8] = closure_11;
          let pushType;
          if (pushFeedback != null) {
            pushType = pushFeedback.pushType;
          }
          obj7[9] = pushType;
          let tmp103 = !closure_11;
          if (!closure_11) {
            tmp103 = canReplyToMessageResult;
          }
          obj7[10] = tmp103;
          let tmp105 = !closure_11;
          if (!closure_11) {
            tmp105 = tmp55;
          }
          obj7[11] = tmp105;
          obj7[12] = roleStyle.MESSAGE;
          obj7[13] = result3;
          let obj12 = closure_12;
          let hasItem;
          if (closure_12 != null) {
            hasItem = obj12.has(obj5.id);
          }
          obj7[14] = hasItem;
          let arr3 = items.push(obj7);
          let tmp111 = null != closure_6;
          if (tmp111) {
            tmp111 = closure_6.startId === obj5.id;
          }
          if (tmp111) {
            tmp111 = closure_6.count > 1;
          }
          if (tmp111) {
            obj8 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: true };
            obj8[0] = forceRender.SUMMARY;
            obj8[1] = determineChangeType(obj5);
            obj8[2] = roleStyle;
            obj8[3] = closure_6;
            let arr4 = arr1.push(obj8);
          }
          continue;
        }
      }
      if (flag) {
        if (!closure_11) {
          let NOOP = determineChangeType(obj);
          if (NOOP === closure_1_6.UPDATE) {
            NOOP = closure_1_6.NOOP;
          }
          const obj9 = { rowType: null, changeType: null, roleStyle: null, text: null };
          obj9[0] = forceRender.DAY;
          obj9[1] = NOOP;
          obj9[2] = roleStyle;
          obj9[3] = resetCache.dateFormat(obj.timestamp, "LL");
          items.push(obj9);
        }
      }
      if (tmp19) {
        tmp19 = !closure_11;
      }
      if (tmp19) {
        const obj10 = { rowType: null, changeType: null, roleStyle: null, text: null };
        obj10[0] = forceRender.UNREAD;
        obj10[1] = determineChangeType(obj);
        obj10[2] = roleStyle;
        const intl5 = getSystemLocale.intl;
        obj10[3] = intl5.string(getSystemLocale.t.q7hm3m).toUpperCase();
        items.push(obj10);
        const str2 = intl5.string(getSystemLocale.t.q7hm3m);
      }
      if (tmp17) {
        tmp17 = !closure_11;
      }
      if (tmp17) {
        let obj11 = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
        obj11[0] = closure_1_7.LOAD_BEFORE;
        obj11[1] = forceRender ? closure_1_6.UPDATE : closure_1_6.NOOP;
        obj11[2] = roleStyle;
        obj11[3] = obj.loadingMore;
        const intl6 = getSystemLocale.intl;
        obj11[4] = intl6.string(getSystemLocale.t.XBlaiC);
        obj11 = items.push(obj11);
      }
    } else {
      obj12 = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
      obj12[0] = closure_1_7.LOAD_AFTER;
      let intl = closure_1_6;
      obj12[1] = forceRender ? intl.UPDATE : intl.NOOP;
      obj12[2] = roleStyle;
      obj12[3] = obj.loadingMore;
      intl = getSystemLocale.intl;
      obj12[4] = intl.string(getSystemLocale.t.XBlaiC);
      obj12 = items.push(obj12);
    }
  });
  let tmp12 = 0 === items1.length && !messages.loadingMore;
  if (tmp12) {
    tmp12 = messages.hasMoreAfter || messages.hasMoreBefore;
  }
  if (!tmp12) {
    return items;
  } else {
    arr = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
    arr[0] = messages.hasMoreBefore ? constants2.LOAD_BEFORE : constants2.LOAD_AFTER;
    arr[1] = forceRender ? constants.UPDATE : constants.NOOP;
    arr[2] = roleStyle;
    arr[3] = messages.loadingMore;
    roleStyle = getSystemLocale.intl;
    messages = roleStyle.string;
    arr[4] = messages(getSystemLocale.t.XBlaiC);
    arr = items.push(arr);
  }
};