// === Module 10060: ForumComposerModal ===

// Module 10060 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5708 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7405 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8812 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10059 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9612 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import DraftStore from "DraftStore" /* 7031 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7267 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6780 */;

require = fn;
function showForumComposerCloseAlert(arg0) {
  ({ onConfirm, onCancel } = arg0);
  const result = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
  const obj3 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, hideActionSheet: true, isDismissable: true };
  const intl = util.intl;
  obj3.title = intl.string(util.t.Fz1512);
  const intl2 = util.intl;
  obj3.body = intl2.string(util.t.YBgepz);
  const intl3 = util.intl;
  obj3.confirmText = intl3.string(util.t.Rnli6C);
  const intl4 = util.intl;
  obj3.cancelText = intl4.string(util.t["3NnH6V"]);
  obj3.onConfirm = onConfirm;
  obj3.onCancel = onCancel;
  actions_AlertActionCreatorsDefault.show(obj3);
}
const View = fn(17).View;
const DraftType = fn(7031).DraftType;
const jsx = fn(21).jsx;
const createStyles = fn(4890);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_12 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannelId) => {
  const cResult = parentChannelId(isEdit[16]).c(34);
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  const messageId = parentChannelId.messageId;
  isEdit = parentChannelId.isEdit;
  let tmp4 = undefined !== isEdit;
  if (tmp4) {
    tmp4 = isEdit;
  }
  isEdit = tmp4;
  closure_12();
  const analyticsLocations = threadId(tmp2[17])(parentChannelId.analyticsLocations).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== parentChannelId) {
    const fn = function y() {
      return ChannelStore.getChannel(parentChannelId);
    };
    const items1 = [parentChannelId];
    cResult[1] = parentChannelId;
    cResult[2] = fn;
    cResult[3] = items1;
    let tmp10 = items1;
    let tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  let obj = parentChannelId(isEdit[16]);
  const tmp6 = threadId;
  const stateFromStores = parentChannelId(isEdit[18]).useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    let tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== threadId) {
    class L {
      constructor() {
        return closure_6.getChannel(threadId);
      }
    }
    const items3 = [threadId];
    cResult[5] = threadId;
    cResult[6] = L;
    cResult[7] = items3;
    let tmp15 = items3;
  } else {
    class L {
      constructor() {
        return closure_6.getChannel(threadId);
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult = parentChannelId(isEdit[18]);
  const stateFromStores1 = parentChannelId(isEdit[18]).useStateFromStores(tmp12, L, tmp15);
  tmp6(isEdit[19])(parentChannelId);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return closure_6.getChannel(threadId);
      }
    }
    const items4 = [ForumPostMessagesStore];
    cResult[8] = items4;
    const tmp18 = items4;
  } else {
    class L {
      constructor() {
        return closure_6.getChannel(threadId);
      }
    }
  }
  if (cResult[9] === messageId) {
    class L {
      constructor() {
        return closure_6.getChannel(threadId);
      }
    }
    const stateFromStores2 = tmp(tmp2[18]).useStateFromStores(tmp18, K);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return closure_6.getChannel(threadId);
        }
      }
      const items5 = [NativeMenuStore];
      class O {
        constructor() {
          return closure_5.isOpen();
        }
      }
      cResult[12] = items5;
      cResult[13] = O;
      class R {
        constructor(arg0) {
          if (null != closure_4) {
            tmp31 = parentChannelId;
            tmp32 = closure_0;
            tmp33 = closure_3;
            if (parentChannelId) {
              tmp32Result = tmp32(tmp33[20]);
              result = tmp32Result.closeCreateForumPostModal();
              tmp24 = parentChannelId;
              tmp25 = closure_1;
              tmp26 = closure_3;
              obj11 = closure_1(closure_3[13]);
              tmp27 = DraftType;
              clearDraftResult = obj11.clearDraft(parentChannelId, DraftType.ThreadSettings);
              obj12 = closure_1(closure_3[13]);
              clearDraftResult1 = obj12.clearDraft(parentChannelId, DraftType.ChannelMessage);
              obj13 = closure_1(closure_3[14]);
              clearAllResult = obj13.clearAll(parentChannelId, DraftType.ChannelMessage);
            } else {
              tmp32Result1 = tmp32(tmp33[21]);
              obj1 = { type: null };
              tmp = closure_0;
              tmp2 = closure_3;
              obj1.type = closure_0(closure_3[22]).KeyboardTypes.SYSTEM;
              setKeyboardTypeResult = tmp32Result1.setKeyboardType(obj1);
              obj3 = closure_7;
              tmp4 = parentChannelId;
              tmp5 = DraftType;
              draft = closure_7.getDraft(parentChannelId, DraftType.ChannelMessage);
              threadSettings = closure_7.getThreadSettings(parentChannelId);
              if (threadSettings == null) {
                tmp7 = closure_1;
                tmp8 = closure_3;
                obj4 = closure_1(closure_3[23]);
                threadSettings = obj3.getThreadDraftWithParentMessageId(obj4.castChannelIdAsMessageId(tmp4));
              }
              tmp9 = closure_9;
              tmp10 = DraftType;
              tmp11 = isEdit;
              if (isEdit) {
                tmp14 = closure_0;
                tmp15 = closure_3;
                obj6 = closure_0(closure_3[20]);
                result1 = obj6.closeCreateForumPostModal();
                tmp17 = closure_1;
                tmp18 = closure_3;
                obj7 = closure_1(closure_3[13]);
                tmp19 = DraftType;
                clearDraftResult2 = obj7.clearDraft(tmp4, DraftType.ThreadSettings);
                obj8 = closure_1(closure_3[13]);
                clearDraftResult3 = obj8.clearDraft(tmp4, DraftType.ChannelMessage);
                obj9 = closure_1(closure_3[14]);
                clearAllResult1 = obj9.clearAll(tmp4, DraftType.ChannelMessage);
              } else {
                num = 0;
                if (draft.length <= 0) {
                  if (arr2.length <= 0) {
                    str = undefined;
                    if (threadSettings != null) {
                      str = threadSettings.name;
                    }
                    if (str == null) {
                      str = "";
                    }
                  }
                }
                tmp12 = showForumComposerCloseAlert;
                obj14 = { onConfirm: null, onCancel: null };
                obj14.onConfirm = function onConfirm() {
                  const result = parentChannelId(isEdit[24]).maybeTrackForumNewPostDraftCreated({ guildId: stateFromStores.guild_id, channelId: stateFromStores.id });
                  const obj = parentChannelId(isEdit[24]);
                  const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                  const result1 = parentChannelId(isEdit[20]).closeCreateForumPostModal();
                };
                obj14.onCancel = function onCancel() {
                  const result = parentChannelId(isEdit[20]).closeCreateForumPostModal();
                  const obj = parentChannelId(isEdit[20]);
                  threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ThreadSettings);
                  const obj2 = threadId(isEdit[13]);
                  threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ChannelMessage);
                  const obj3 = threadId(isEdit[13]);
                  threadId(isEdit[14]).clearAll(closure_1_0, DraftType.ChannelMessage);
                };
                tmp13 = showForumComposerCloseAlert(obj14);
              }
            }
          }
          return;
        }
      }
    } else {
      class L {
        constructor() {
          return closure_6.getChannel(threadId);
        }
      }
    }
    tmp(tmp2[18]);
    if (cResult[14] === tmp4) {
      class L {
        constructor() {
          return closure_6.getChannel(threadId);
        }
      }
    }
    class R {
      constructor(arg0) {
        if (null != closure_4) {
          tmp31 = parentChannelId;
          tmp32 = closure_0;
          tmp33 = closure_3;
          if (parentChannelId) {
            tmp32Result = tmp32(tmp33[20]);
            result = tmp32Result.closeCreateForumPostModal();
            tmp24 = parentChannelId;
            tmp25 = closure_1;
            tmp26 = closure_3;
            obj11 = closure_1(closure_3[13]);
            tmp27 = DraftType;
            clearDraftResult = obj11.clearDraft(parentChannelId, DraftType.ThreadSettings);
            obj12 = closure_1(closure_3[13]);
            clearDraftResult1 = obj12.clearDraft(parentChannelId, DraftType.ChannelMessage);
            obj13 = closure_1(closure_3[14]);
            clearAllResult = obj13.clearAll(parentChannelId, DraftType.ChannelMessage);
          } else {
            tmp32Result1 = tmp32(tmp33[21]);
            obj1 = { type: null };
            tmp = closure_0;
            tmp2 = closure_3;
            obj1.type = closure_0(closure_3[22]).KeyboardTypes.SYSTEM;
            setKeyboardTypeResult = tmp32Result1.setKeyboardType(obj1);
            obj3 = closure_7;
            tmp4 = parentChannelId;
            tmp5 = DraftType;
            draft = closure_7.getDraft(parentChannelId, DraftType.ChannelMessage);
            threadSettings = closure_7.getThreadSettings(parentChannelId);
            if (threadSettings == null) {
              tmp7 = closure_1;
              tmp8 = closure_3;
              obj4 = closure_1(closure_3[23]);
              threadSettings = obj3.getThreadDraftWithParentMessageId(obj4.castChannelIdAsMessageId(tmp4));
            }
            tmp9 = closure_9;
            tmp10 = DraftType;
            tmp11 = isEdit;
            if (isEdit) {
              tmp14 = closure_0;
              tmp15 = closure_3;
              obj6 = closure_0(closure_3[20]);
              result1 = obj6.closeCreateForumPostModal();
              tmp17 = closure_1;
              tmp18 = closure_3;
              obj7 = closure_1(closure_3[13]);
              tmp19 = DraftType;
              clearDraftResult2 = obj7.clearDraft(tmp4, DraftType.ThreadSettings);
              obj8 = closure_1(closure_3[13]);
              clearDraftResult3 = obj8.clearDraft(tmp4, DraftType.ChannelMessage);
              obj9 = closure_1(closure_3[14]);
              clearAllResult1 = obj9.clearAll(tmp4, DraftType.ChannelMessage);
            } else {
              num = 0;
              if (draft.length <= 0) {
                if (arr2.length <= 0) {
                  str = undefined;
                  if (threadSettings != null) {
                    str = threadSettings.name;
                  }
                  if (str == null) {
                    str = "";
                  }
                }
              }
              tmp12 = showForumComposerCloseAlert;
              obj14 = { onConfirm: null, onCancel: null };
              obj14.onConfirm = function onConfirm() {
                const result = parentChannelId(isEdit[24]).maybeTrackForumNewPostDraftCreated({ guildId: stateFromStores.guild_id, channelId: stateFromStores.id });
                const obj = parentChannelId(isEdit[24]);
                const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                const result1 = parentChannelId(isEdit[20]).closeCreateForumPostModal();
              };
              obj14.onCancel = function onCancel() {
                const result = parentChannelId(isEdit[20]).closeCreateForumPostModal();
                const obj = parentChannelId(isEdit[20]);
                threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ThreadSettings);
                const obj2 = threadId(isEdit[13]);
                threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ChannelMessage);
                const obj3 = threadId(isEdit[13]);
                threadId(isEdit[14]).clearAll(closure_1_0, DraftType.ChannelMessage);
              };
              tmp13 = showForumComposerCloseAlert(obj14);
            }
          }
        }
        return;
      }
    }
    cResult[14] = tmp4;
    cResult[15] = stateFromStores;
    cResult[16] = parentChannelId;
    cResult[17] = R;
    const tmpResult5 = tmp(tmp2[18]);
  }
  class K {
    constructor() {
      firstMessage = null;
      if (null != threadId) {
        tmp3 = messageId;
        firstMessage = null;
        if (null != messageId) {
          tmp4 = closure_10;
          firstMessage = closure_10.getMessage(tmp).firstMessage;
        }
      }
      return firstMessage;
    }
  }
  cResult[9] = messageId;
  cResult[10] = threadId;
  cResult[11] = K;
  const tmpResult4 = parentChannelId(isEdit[18]);
}) : ((parentChannelId) => {
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: importAll, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  function handleClose(arg0) {
    if (null != stateFromStores) {
      if (arg0) {
        let result = ForumComposerModalActionCreators.closeCreateForumPostModal();
        const tmp32Result = ForumComposerModalActionCreators;
        DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ThreadSettings);
        DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ChannelMessage);
        UploadAttachmentActionCreatorsDefault.clearAll(parentChannelId, DraftType.ChannelMessage);
      } else {
        let obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
        KeyboardUIStore.setKeyboardType(obj);
        const draft = DraftStore.getDraft(parentChannelId, DraftType.ChannelMessage);
        let threadSettings = DraftStore.getThreadSettings(parentChannelId);
        if (threadSettings == null) {
          threadSettings = DraftStore.getThreadDraftWithParentMessageId(SnowflakeUtilsDefault.castChannelIdAsMessageId(parentChannelId));
        }
        if (isEdit) {
          let result1 = ForumComposerModalActionCreators.closeCreateForumPostModal();
          DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ThreadSettings);
          DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ChannelMessage);
          UploadAttachmentActionCreatorsDefault.clearAll(parentChannelId, DraftType.ChannelMessage);
        } else {
          if (draft.length <= 0) {
            if (arr2.length <= 0) {
              let str;
              if (threadSettings != null) {
                str = threadSettings.name;
              }
              if (str == null) {
                str = "";
              }
            }
          }
          let obj2 = {
            onConfirm() {
                    const result = parentChannelId(isEdit[24]).maybeTrackForumNewPostDraftCreated({ guildId: stateFromStores.guild_id, channelId: stateFromStores.id });
                    const obj = parentChannelId(isEdit[24]);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result1 = parentChannelId(isEdit[20]).closeCreateForumPostModal();
                  },
            onCancel() {
                    const result = parentChannelId(isEdit[20]).closeCreateForumPostModal();
                    const obj = parentChannelId(isEdit[20]);
                    threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj2 = threadId(isEdit[13]);
                    threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj3 = threadId(isEdit[13]);
                    threadId(isEdit[14]).clearAll(closure_1_0, DraftType.ChannelMessage);
                  }
          };
          showForumComposerCloseAlert(obj2);
        }
        const tmp32Result2 = KeyboardUIStore;
      }
    }
  }
  const tmp = closure_12();
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = parentChannelId(isEdit[18]).useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj = parentChannelId(isEdit[18]);
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(isEdit[18]).useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  let obj3 = parentChannelId(isEdit[18]);
  const tmp6 = threadId(isEdit[19])(parentChannelId);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = parentChannelId(isEdit[18]).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != importAll) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj4 = parentChannelId(isEdit[18]);
  const items5 = [handleClose];
  const stateFromStores3 = parentChannelId(isEdit[18]).useStateFromStores(items5, () => handleClose.isOpen());
  const obj5 = parentChannelId(isEdit[18]);
  parentChannelId(isEdit[25]).useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp11Result = null;
  if (null != stateFromStores) {
    tmp11Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          let obj2 = { value: threadId(isEdit[17])(parentChannelId.analyticsLocations).analyticsLocations, children: null };
          let obj7 = { style: tmp.container, importantForAccessibility: null, children: null };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj7.importantForAccessibility = str;
          let obj8 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit };
          obj7.children = jsx(tmp2(tmp3[26]), { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit });
          obj2.children = <stateFromStores style={tmp.container} importantForAccessibility={null}>{null}</stateFromStores>;
          tmp11Result = jsx(tmp4(tmp3[17]).AnalyticsLocationProvider, { value: threadId(isEdit[17])(parentChannelId.analyticsLocations).analyticsLocations, children: null });
        } else {
          tmp11Result = null;
        }
      } else {
        tmp11Result = null;
      }
    }
  }
  return tmp11Result;
});