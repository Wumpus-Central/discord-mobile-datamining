// discord_app/modules/messages/native/createChannelStream.tsx
import getSystemLocale from "../../../intl/index.native.tsx";
import closure_3 from "../../push_feedback/PushFeedbackStore.tsx";
import closure_4 from "../../../stores/EditMessageStore.tsx";
import closure_5 from "../../../stores/UploadStore.tsx";
import Changeset from "renderer/RowGeneratorConstants.tsx";
import { MessageFlags } from "../../../Constants.tsx";

require = arg1;
({ Changeset: closure_6, LoadingType: error, RowType: closure_8, SeparatorType: c9 } = Changeset);
let result = require("set").fileFinishedImporting("modules/messages/native/createChannelStream.tsx");

export default function createChannelStream(forceRender) {
  ({ channel: require, messages } = forceRender);
  ({
    uploads,
    oldestUnreadMessageId: dependencyMap,
    replyingMessageId: closure_3,
    currentUserId: closure_4,
    canAddNewReactions: closure_5,
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
    if (closure_0.isForumPost()) {
      let tmp4 = tmp2;
      if (tmp2) {
        tmp4 = id.id !== messages(closure_1_2[5]).castChannelIdAsMessageId(closure_0.id);
        const obj = messages(closure_1_2[5]);
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
          tmp2 = message.id !== messages(closure_1_2[5]).castChannelIdAsMessageId(tmp10.id);
          const obj = messages(closure_1_2[5]);
        }
        let tmp = tmp2;
      } else {
        tmp = tmp12;
      }
      if (!tmp) {
        if (messages(closure_1_2[6])(tmp10, first[first.length - 1], message)) {
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
    let tmp4 = messageForFile;
    let tmp3 = nextResult;
    messageForFile = messageForFile.getMessageForFile(nextResult.id);
    let nonce;
    let tmp6 = messageForFile;
    if (messageForFile != null) {
      nonce = messageForFile.nonce;
    }
    if (null != nonce) {
      let tmp8 = messageForFile;
      let tmp9 = nextResult;
      arr[tmp6.nonce] = tmp3;
    }
    continue;
  }
  items1 = [];
  const item = messages.forEach((id) => {
    const result = closure_1_0(closure_1_2[7]).tryCreateInjectedMessage(id, closure_0);
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
  const item1 = items1.forEach((id) => {
    closure_0 = id;
    let obj = id[id.length - 1];
    let hasMoreAfter = 0 === arg1;
    let merged = items1;
    const diff = items1.length - 1;
    if (hasMoreAfter) {
      hasMoreAfter = obj.hasMoreAfter;
    }
    if (!hasMoreAfter) {
      let tmp17 = obj.hasMoreBefore && tmp15;
      let tmp19 = unreadFilter(obj);
      let timestamp = null;
      if (arg1 !== diff) {
        timestamp = merged[arg1 + 1][0].timestamp;
      }
      if (arg1 === diff) {
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
        let obj2 = closure_1_0(closure_1_2[9]);
        flag = true;
      }
      function processHiddenMessageRow(merged) {
        const iter = systemDM[Symbol.iterator]();
        const nextResult = iter.next();
        while (iter !== undefined) {
          obj = nextResult;
          let tmp3 = closure_1_18;
          let tmp4 = closure_2_6;
          let tmp5 = closure_1_18(nextResult) !== closure_2_6.NOOP && merged.changeType === tmp4.NOOP;
          if (tmp5) {
            merged.changeType = tmp4.UPDATE;
          }
          let content = merged.content;
          obj = {
            rowType: null,
            changeType: null,
            roleStyle: null,
            message: null,
            isSystemDM: null,
            isFirst: null,
            canAddNewReactions: null,
          };
          let tmp6 = roleStyle;
          obj[0] = roleStyle.MESSAGE;
          obj[1] = tmp4.NOOP;
          let tmp7 = closure_1_8;
          obj[2] = closure_1_8;
          let tmp8 = nextResult;
          obj[3] = obj;
          let tmp9 = systemDM;
          let isSystemDMResult = systemDM.isSystemDM();
          if (isSystemDMResult) {
            let tmp11 = nextResult;
            isSystemDMResult = obj.isSystemDM();
          }
          obj[4] = isSystemDMResult;
          let tmp12 = nextResult;
          let tmp13 = obj;
          obj[5] = obj === obj;
          let tmp14 = closure_1_5;
          obj[6] = closure_1_5;
          arr = content.unshift(obj);
          continue;
        }
        merged.revealed = obj.id === obj.revealedMessageId;
        merged.context = obj.id;
        return merged;
      }
      obj = { roleStyle: null, message: null, isFirst: true, content: null, text: "", revealed: false };
      obj[0] = roleStyle;
      obj[1] = obj;
      obj[3] = [];
      arr = items;
      let tmp32 = items[items.length - 1];
      if (obj.hasFlag(closure_1_10.HIDDEN_SUSPENDED_USER)) {
        if (null == tmp32) {
          merged = determineChangeType;
          obj = {};
          merged = obj;
          merged = obj;
          merged = determineChangeType(obj);
          merged = Object.assign(obj);
          merged = roleStyle;
          obj.rowType = roleStyle.SUSPENDED_USER_GROUP;
          obj.changeType = merged;
          obj.canUncollapse = false;
          merged = tmp31;
          merged = arr.push(obj);
          tmp32 = obj;
        } else {
          merged = roleStyle;
        }
        merged = processHiddenMessageRow(tmp32);
        merged = closure_1_0;
        merged = closure_1_2;
        const intl4 = closure_1_0(closure_1_2[8]).intl;
        merged = closure_1_0;
        merged = closure_1_2;
        obj1 = { count: null };
        obj1[0] = tmp32.content.length;
        tmp32.text = intl4.formatToPlainString(closure_1_0(closure_1_2[8]).t.rHRovo, obj1);
      } else if (obj.blocked) {
        if (null == tmp32) {
          merged = determineChangeType;
          let INSERT2 = determineChangeType(obj);
          merged = closure_1_6;
          merged = INSERT2 === closure_1_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getBlocked(obj);
          }
          if (merged) {
            merged = closure_1_6;
            INSERT2 = closure_1_6.INSERT;
          }
          obj2 = {};
          merged = obj2;
          merged = obj;
          merged = Object.assign(obj);
          merged = roleStyle;
          obj2.rowType = roleStyle.BLOCKED_GROUP;
          obj2.changeType = INSERT2;
          merged = tmp31;
          merged = arr.push(obj2);
          merged = obj2;
        } else {
          merged = roleStyle;
          merged = tmp32;
        }
        merged = processHiddenMessageRow(merged);
        merged = closure_1_0;
        merged = closure_1_2;
        const intl3 = closure_1_0(closure_1_2[8]).intl;
        merged = closure_1_0;
        merged = closure_1_2;
        obj3 = { count: null };
        obj3[0] = merged.content.length;
        merged.text = intl3.formatToPlainString(closure_1_0(closure_1_2[8]).t["+FcYM/"], obj3);
      } else if (obj.ignored) {
        if (null == tmp32) {
          merged = determineChangeType;
          let INSERT = determineChangeType(obj);
          merged = closure_1_6;
          merged = INSERT === closure_1_6.NOOP;
          if (merged) {
            merged = store;
            merged = store.getIgnored(obj);
          }
          if (merged) {
            merged = closure_1_6;
            INSERT = closure_1_6.INSERT;
          }
          const obj4 = {};
          merged = obj4;
          merged = obj;
          merged = Object.assign(obj);
          merged = roleStyle;
          obj4.rowType = roleStyle.IGNORED_GROUP;
          obj4.changeType = INSERT;
          merged = tmp31;
          merged = arr.push(obj4);
          merged = obj4;
        } else {
          merged = roleStyle;
          merged = tmp32;
        }
        merged = processHiddenMessageRow(merged);
        merged = closure_1_0;
        merged = closure_1_2;
        const intl2 = closure_1_0(closure_1_2[8]).intl;
        merged = closure_1_0;
        merged = closure_1_2;
        let obj5 = { count: null };
        obj5[0] = merged.content.length;
        merged.text = intl2.formatToPlainString(closure_1_0(closure_1_2[8]).t["VFWjc+"], obj5);
      } else {
        let iter = id[Symbol.iterator]();
        let nextResult = iter.next();
        while (iter !== undefined) {
          obj5 = nextResult;
          let tmp38 = nextResult !== obj;
          let tmp39 = closure_1_4;
          let tmp40 = closure_0;
          let obj6 = closure_0;
          let isEditingResult = closure_1_4.isEditing(closure_0.id, nextResult.id);
          if (!isEditingResult) {
            let tmp42 = closure_3;
            let tmp43 = nextResult;
            isEditingResult = closure_3 === obj5.id;
          }
          let tmp45 = closure_1_3;
          let tmp46 = nextResult;
          let tmp44 = isEditingResult;
          let pushFeedback = closure_1_3.getPushFeedback(obj5.channel_id, obj5.id);
          let tmp48 = closure_1_0;
          let tmp49 = closure_1_2;
          let obj7 = closure_1_0(closure_1_2[10]);
          let tmp50 = tmp40;
          let tmp53 = closure_1_2;
          let canReplyToMessageResult = obj7.canReplyToMessage(obj6, obj5);
          let tmp52 = messages;
          let tmp54 = closure_4;
          let tmp55 = messages(closure_1_2[11])(obj5, closure_4);
          if (tmp55) {
            let tmp56 = closure_1_0;
            let tmp57 = closure_1_2;
            let obj8 = closure_1_0(closure_1_2[12]);
            let tmp58 = tmp40;
            tmp55 = !obj8.isNonModInLockedThread(obj6);
          }
          let tmp59 = tmp55;
          let tmp61 = nextResult;
          let tmp60 = arr;
          if (arr.hasOwnProperty(obj5.id)) {
            let tmp65 = nextResult;
            let tmp66 = store;
            let result = store.determineChangeTypeForUploadProgress(tmp60[obj5.id]);
          } else {
            let tmp62 = determineChangeType;
            let tmp63 = nextResult;
            result = determineChangeType(obj5, true);
          }
          let tmp67 = closure_6;
          let tmp68 = null != closure_6;
          if (tmp68) {
            let tmp69 = nextResult;
            tmp68 = tmp67.endId === obj5.id;
          }
          if (tmp68) {
            tmp68 = tmp67.count > 1;
          }
          if (tmp68) {
            let tmp70 = items;
            let tmp71 = items;
            obj6 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: false };
            let tmp72 = forceRender;
            obj6[0] = forceRender.SUMMARY;
            let tmp73 = determineChangeType;
            let tmp74 = nextResult;
            obj6[1] = determineChangeType(obj5);
            let tmp75 = roleStyle;
            let tmp76 = roleStyle;
            obj6[2] = roleStyle;
            obj6[3] = tmp67;
            arr = items.push(obj6);
          }
          let tmp78 = items;
          let arr2 = items;
          obj7 = {
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
          obj7[0] = roleStyle;
          let tmp81 = nextResult;
          obj7[1] = obj5;
          let tmp82 = tmp40;
          let tmp79 = roleStyle;
          let tmp80 = roleStyle;
          let isSystemDMResult = obj6.isSystemDM();
          if (isSystemDMResult) {
            let tmp84 = nextResult;
            isSystemDMResult = obj5.isSystemDM();
          }
          obj7[2] = isSystemDMResult;
          let tmp85 = nextResult;
          obj7[3] = obj5 === obj;
          let tmp86 = isEditingResult;
          obj7[4] = tmp44;
          let tmp87 = tmp38;
          let tmp88 = !tmp38;
          if (!tmp38) {
            let tmp89 = closure_11;
            let tmp90 = closure_11;
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
          let tmp92 = closure_5;
          obj7[6] = closure_5;
          let tmp93 = tmp40;
          let isForumPostResult = obj6.isForumPost();
          if (isForumPostResult) {
            let tmp95 = nextResult;
            let tmp96 = closure_1_2;
            let tmp52Result = tmp52(closure_1_2[5]);
            let tmp97 = tmp40;
            isForumPostResult = obj5.id === tmp52Result.castChannelIdAsMessageId(obj6.id);
          }
          obj7[7] = isForumPostResult;
          let tmp98 = closure_11;
          let tmp99 = closure_11;
          obj7[8] = closure_11;
          merged = pushFeedback;
          merged = undefined;
          if (pushFeedback != null) {
            merged = pushFeedback.pushType;
          }
          obj7[9] = merged;
          merged = tmp98;
          merged = !tmp99;
          if (!tmp99) {
            merged = canReplyToMessageResult;
          }
          obj7[10] = merged;
          merged = tmp98;
          merged = !tmp99;
          if (!tmp99) {
            merged = tmp55;
          }
          obj7[11] = merged;
          merged = roleStyle;
          obj7[12] = roleStyle.MESSAGE;
          merged = result;
          obj7[13] = result;
          let obj12 = closure_12;
          merged = undefined;
          if (closure_12 != null) {
            merged = nextResult;
            merged = obj12.has(obj5.id);
          }
          obj7[14] = merged;
          merged = items.push(obj7);
          merged = null != tmp67;
          if (merged) {
            merged = nextResult;
            merged = tmp67.startId === obj5.id;
          }
          if (merged) {
            merged = tmp67.count > 1;
          }
          if (merged) {
            merged = tmp78;
            obj8 = { rowType: null, changeType: null, roleStyle: null, summary: null, isBeforeContent: true };
            merged = forceRender;
            obj8[0] = forceRender.SUMMARY;
            merged = determineChangeType;
            merged = nextResult;
            obj8[1] = determineChangeType(obj5);
            merged = tmp79;
            obj8[2] = tmp80;
            obj8[3] = tmp67;
            merged = arr2.push(obj8);
          }
          continue;
        }
      }
      if (flag) {
        merged = closure_11;
        merged = closure_11;
        if (!closure_11) {
          merged = determineChangeType;
          let NOOP = determineChangeType(obj);
          merged = closure_1_6;
          if (NOOP === closure_1_6.UPDATE) {
            merged = closure_1_6;
            NOOP = closure_1_6.NOOP;
          }
          merged = closure_1_0;
          merged = closure_1_2;
          merged = items;
          merged = items;
          const obj9 = { rowType: null, changeType: null, roleStyle: null, text: null };
          merged = forceRender;
          obj9[0] = forceRender.DAY;
          obj9[1] = NOOP;
          merged = roleStyle;
          merged = roleStyle;
          obj9[2] = roleStyle;
          obj9[3] = closure_1_0(closure_1_2[9]).dateFormat(obj.timestamp, "LL");
          merged = items.push(obj9);
          const obj21 = closure_1_0(closure_1_2[9]);
        }
      }
      if (tmp19) {
        merged = closure_11;
        merged = closure_11;
        tmp19 = !closure_11;
      }
      if (tmp19) {
        merged = items;
        merged = items;
        const obj10 = { rowType: null, changeType: null, roleStyle: null, text: null };
        merged = forceRender;
        obj10[0] = forceRender.UNREAD;
        merged = determineChangeType;
        obj10[1] = determineChangeType(obj);
        merged = roleStyle;
        merged = roleStyle;
        obj10[2] = roleStyle;
        merged = closure_1_0;
        merged = closure_1_2;
        const intl5 = closure_1_0(closure_1_2[8]).intl;
        merged = closure_1_0;
        merged = closure_1_2;
        obj10[3] = intl5.string(closure_1_0(closure_1_2[8]).t.q7hm3m).toUpperCase();
        merged = items.push(obj10);
        const str2 = intl5.string(closure_1_0(closure_1_2[8]).t.q7hm3m);
      }
      if (tmp17) {
        merged = closure_11;
        merged = closure_11;
        tmp17 = !closure_11;
      }
      if (tmp17) {
        merged = items;
        let obj11 = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
        merged = closure_1_7;
        obj11[0] = closure_1_7.LOAD_BEFORE;
        merged = forceRender;
        merged = closure_1_6;
        obj11[1] = forceRender ? merged.UPDATE : merged.NOOP;
        merged = roleStyle;
        merged = roleStyle;
        obj11[2] = roleStyle;
        merged = obj;
        obj11[3] = obj.loadingMore;
        merged = closure_1_0;
        merged = closure_1_2;
        merged = items;
        const intl6 = closure_1_0(closure_1_2[8]).intl;
        merged = closure_1_0;
        merged = closure_1_2;
        obj11[4] = intl6.string(closure_1_0(closure_1_2[8]).t.XBlaiC);
        obj11 = items.push(obj11);
      }
    } else {
      obj12 = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
      obj12[0] = closure_1_7.LOAD_AFTER;
      let intl = closure_1_6;
      obj12[1] = forceRender ? intl.UPDATE : intl.NOOP;
      obj12[2] = roleStyle;
      obj12[3] = obj.loadingMore;
      intl = closure_1_0(closure_1_2[8]).intl;
      obj12[4] = intl.string(closure_1_0(closure_1_2[8]).t.XBlaiC);
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
    arr = { rowType: null, changeType: null, roleStyle: null, isLoading: null, text: null };
    arr[0] = messages.hasMoreBefore ? closure_7.LOAD_BEFORE : closure_7.LOAD_AFTER;
    arr[1] = forceRender ? closure_6.UPDATE : closure_6.NOOP;
    arr[2] = roleStyle;
    arr[3] = messages.loadingMore;
    roleStyle = getSystemLocale.intl;
    messages = roleStyle.string;
    arr[4] = messages(getSystemLocale.t.XBlaiC);
    arr = items.push(arr);
  }
}
