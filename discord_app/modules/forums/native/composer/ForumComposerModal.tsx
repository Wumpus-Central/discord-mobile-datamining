// === Module 10073: ForumComposerModal ===

// Module 10073 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import nativeDefault from "native" /* 587 */;
import intl5 from "intl" /* 1126 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1488 */;
import KeyboardTypes from "KeyboardTypes" /* 1616 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1881 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 5715 */;
import DraftStore2 from "DraftStore" /* 7044 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7416 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 8842 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10072 */;
import react from "react" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9625 */;
import ChannelStore from "ChannelStore" /* 2051 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 7280 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 6790 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const DraftStore = DraftStore2;
let clearAllResult, clearAllResult1, clearDraftResult, clearDraftResult1, clearDraftResult2, clearDraftResult3, num, obj1, parentChannelId, setKeyboardTypeResult, tmp11, tmp13, tmp14, tmp16, tmp17, tmp19, tmp2, tmp20, tmp21, tmp26, tmp27, tmp28, tmp29, tmp33, tmp34, tmp35, tmp5, tmp7;

let obj2;
function showForumComposerCloseAlert(arg0) {
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let onCancel;
  let onConfirm;
  ({ onConfirm, onCancel } = arg0);
  const obj = KeyboardManagerUtilsAll;
  const result = obj.dismissGlobalKeyboard();
  const obj2 = { title: intl.string(intl5.t.Fz1512), body: intl2.string(intl5.t.YBgepz), confirmText: intl3.string(intl5.t.Rnli6C), cancelText: intl4.string(intl5.t["3NnH6V"]), onConfirm, onCancel, hideActionSheet: true, isDismissable: true };
  const show = actions_AlertActionCreatorsDefault.show;
  actions_AlertActionCreatorsDefault;
  intl = intl5.intl;
  intl2 = intl5.intl;
  intl3 = intl5.intl;
  intl4 = intl5.intl;
  show(obj2);
}
const View = react_native.View;
const DraftType = DraftStore2.DraftType;
const jsx = Fragment.jsx;
let obj = { container: obj2 };
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
let closure_12 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((parentChannelId) => {
  let first;
  let isEdit;
  let open;
  let tmp10;
  let tmp12;
  let tmp15;
  let tmp18;
  let tmp9;
  const tmp = parentChannelId;
  let obj = parentChannelId(isEdit[16]);
  const cResult = obj.c(34);
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  const messageId = parentChannelId.messageId;
  isEdit = parentChannelId.isEdit;
  let tmp4 = undefined !== isEdit;
  const analyticsLocations = parentChannelId.analyticsLocations;
  if (tmp4) {
    tmp4 = isEdit;
  }
  isEdit = tmp4;
  closure_12();
  const analyticsLocations2 = threadId(tmp2[17])(analyticsLocations).analyticsLocations;
  const tmp6 = threadId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    first = items;
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
    tmp10 = items1;
    tmp9 = fn;
  } else {
    tmp9 = cResult[2];
    tmp10 = cResult[3];
  }
  const tmpResult = tmp(isEdit[18]);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp9, tmp10);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChannelStore];
    cResult[4] = items2;
    tmp12 = items2;
  } else {
    tmp12 = cResult[4];
  }
  if (cResult[5] !== threadId) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const items3 = [threadId];
    cResult[5] = threadId;
    cResult[6] = L;
    cResult[7] = items3;
    tmp15 = items3;
  } else {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    tmp15 = cResult[7];
  }
  const tmpResult4 = tmp(isEdit[18]);
  const stateFromStores1 = tmpResult4.useStateFromStores(tmp12, L, tmp15);
  tmp6(isEdit[19])(parentChannelId);
  if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const items4 = [ForumPostMessagesStore];
    cResult[8] = items4;
    tmp18 = items4;
  } else {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
  }
  if (cResult[9] === messageId) {
    class L {
      constructor() {
        return ChannelStore.getChannel(threadId);
      }
    }
    const tmpResult5 = tmp(isEdit[18]);
    const stateFromStores2 = tmpResult5.useStateFromStores(tmp18, K);
    const _Symbol = Symbol;
    if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
      const items5 = [NativeMenuStore];
      class O {
        constructor() {
          return open.isOpen();
        }
      }
      cResult[12] = items5;
      cResult[13] = O;
      class R {
        constructor(arg0) {
          if (null != closure_4) {
            tmp33 = parentChannelId;
            tmp34 = closure_0;
            tmp35 = closure_3;
            if (parentChannelId) {
              tmp34Result = tmp34(tmp35[20]);
              result = tmp34Result.closeCreateForumPostModal();
              tmp26 = parentChannelId;
              tmp27 = closure_1;
              tmp28 = closure_3;
              obj9 = closure_1(closure_3[13]);
              tmp29 = DraftType;
              clearDraftResult = obj9.clearDraft(parentChannelId, DraftType.ThreadSettings);
              obj10 = closure_1(closure_3[13]);
              clearDraftResult1 = obj10.clearDraft(parentChannelId, DraftType.ChannelMessage);
              obj11 = closure_1(closure_3[14]);
              clearAllResult = obj11.clearAll(parentChannelId, DraftType.ChannelMessage);
            } else {
              tmp = tmp34(tmp35[21]);
              obj = { type: null };
              tmp2 = closure_0;
              tmp3 = closure_3;
              setKeyboardType = tmp.setKeyboardType;
              obj.type = closure_0(closure_3[22]).KeyboardTypes.SYSTEM;
              setKeyboardTypeResult = setKeyboardType(obj);
              tmp5 = closure_7;
              tmp6 = parentChannelId;
              tmp7 = DraftType;
              draft = closure_7.getDraft(parentChannelId, DraftType.ChannelMessage);
              threadSettings = closure_7.getThreadSettings(parentChannelId);
              if (threadSettings == null) {
                tmp9 = closure_1;
                tmp10 = closure_3;
                getThreadDraftWithParentMessageId = tmp5.getThreadDraftWithParentMessageId;
                obj2 = closure_1(closure_3[23]);
                threadSettings = getThreadDraftWithParentMessageId(obj2.castChannelIdAsMessageId(tmp6));
              }
              tmp11 = closure_9;
              tmp12 = DraftType;
              tmp13 = isEdit;
              if (tmp13) {
                tmp16 = closure_0;
                tmp17 = closure_3;
                obj4 = closure_0(closure_3[20]);
                result1 = obj4.closeCreateForumPostModal();
                tmp19 = closure_1;
                tmp20 = closure_3;
                obj5 = closure_1(closure_3[13]);
                tmp21 = DraftType;
                clearDraftResult2 = obj5.clearDraft(tmp6, DraftType.ThreadSettings);
                obj6 = closure_1(closure_3[13]);
                clearDraftResult3 = obj6.clearDraft(tmp6, DraftType.ChannelMessage);
                obj7 = closure_1(closure_3[14]);
                clearAllResult1 = obj7.clearAll(tmp6, DraftType.ChannelMessage);
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
                tmp14 = showForumComposerCloseAlert;
                obj1 = { onConfirm: null, onCancel: null };
                obj1.onConfirm = function onConfirm() {
                  const obj = parentChannelId(isEdit[24]);
                  const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                  const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                  const obj3 = parentChannelId(isEdit[20]);
                  const result1 = obj3.closeCreateForumPostModal();
                };
                obj1.onCancel = function onCancel() {
                  const obj = parentChannelId(isEdit[20]);
                  const result = obj.closeCreateForumPostModal();
                  const obj2 = threadId(isEdit[13]);
                  obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                  const obj3 = threadId(isEdit[13]);
                  obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                  const obj4 = threadId(isEdit[14]);
                  obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                };
                tmp15 = showForumComposerCloseAlert(obj1);
              }
            }
          }
          return;
        }
      }
    } else {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
    }
    tmp(isEdit[18]);
    if (cResult[14] === tmp4) {
      class L {
        constructor() {
          return ChannelStore.getChannel(threadId);
        }
      }
    }
    class R {
      constructor(arg0) {
        if (null != closure_4) {
          tmp33 = parentChannelId;
          tmp34 = closure_0;
          tmp35 = closure_3;
          if (parentChannelId) {
            tmp34Result = tmp34(tmp35[20]);
            result = tmp34Result.closeCreateForumPostModal();
            tmp26 = parentChannelId;
            tmp27 = closure_1;
            tmp28 = closure_3;
            obj9 = closure_1(closure_3[13]);
            tmp29 = DraftType;
            clearDraftResult = obj9.clearDraft(parentChannelId, DraftType.ThreadSettings);
            obj10 = closure_1(closure_3[13]);
            clearDraftResult1 = obj10.clearDraft(parentChannelId, DraftType.ChannelMessage);
            obj11 = closure_1(closure_3[14]);
            clearAllResult = obj11.clearAll(parentChannelId, DraftType.ChannelMessage);
          } else {
            tmp = tmp34(tmp35[21]);
            obj = { type: null };
            tmp2 = closure_0;
            tmp3 = closure_3;
            setKeyboardType = tmp.setKeyboardType;
            obj.type = closure_0(closure_3[22]).KeyboardTypes.SYSTEM;
            setKeyboardTypeResult = setKeyboardType(obj);
            tmp5 = closure_7;
            tmp6 = parentChannelId;
            tmp7 = DraftType;
            draft = closure_7.getDraft(parentChannelId, DraftType.ChannelMessage);
            threadSettings = closure_7.getThreadSettings(parentChannelId);
            if (threadSettings == null) {
              tmp9 = closure_1;
              tmp10 = closure_3;
              getThreadDraftWithParentMessageId = tmp5.getThreadDraftWithParentMessageId;
              obj2 = closure_1(closure_3[23]);
              threadSettings = getThreadDraftWithParentMessageId(obj2.castChannelIdAsMessageId(tmp6));
            }
            tmp11 = closure_9;
            tmp12 = DraftType;
            tmp13 = isEdit;
            if (tmp13) {
              tmp16 = closure_0;
              tmp17 = closure_3;
              obj4 = closure_0(closure_3[20]);
              result1 = obj4.closeCreateForumPostModal();
              tmp19 = closure_1;
              tmp20 = closure_3;
              obj5 = closure_1(closure_3[13]);
              tmp21 = DraftType;
              clearDraftResult2 = obj5.clearDraft(tmp6, DraftType.ThreadSettings);
              obj6 = closure_1(closure_3[13]);
              clearDraftResult3 = obj6.clearDraft(tmp6, DraftType.ChannelMessage);
              obj7 = closure_1(closure_3[14]);
              clearAllResult1 = obj7.clearAll(tmp6, DraftType.ChannelMessage);
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
              tmp14 = showForumComposerCloseAlert;
              obj1 = { onConfirm: null, onCancel: null };
              obj1.onConfirm = function onConfirm() {
                const obj = parentChannelId(isEdit[24]);
                const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                const obj3 = parentChannelId(isEdit[20]);
                const result1 = obj3.closeCreateForumPostModal();
              };
              obj1.onCancel = function onCancel() {
                const obj = parentChannelId(isEdit[20]);
                const result = obj.closeCreateForumPostModal();
                const obj2 = threadId(isEdit[13]);
                obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                const obj3 = threadId(isEdit[13]);
                obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                const obj4 = threadId(isEdit[14]);
                obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
              };
              tmp15 = showForumComposerCloseAlert(obj1);
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
  }
  class K {
    constructor() {
      let firstMessage = null;
      if (null != threadId) {
        firstMessage = null;
        if (null != messageId) {
          firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
        }
      }
      return firstMessage;
    }
  }
  cResult[9] = messageId;
  cResult[10] = threadId;
  cResult[11] = K;
}) : ((parentChannelId) => {
  let isEdit;
  let str;
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: importAll, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  function handleClose(arg0) {
    if (null != stateFromStores) {
      if (arg0) {
        const tmp34Result = ForumComposerModalActionCreators;
        let result = tmp34Result.closeCreateForumPostModal();
        const obj9 = DraftActionCreatorsDefault;
        obj9.clearDraft(parentChannelId, DraftType.ThreadSettings);
        const obj10 = DraftActionCreatorsDefault;
        obj10.clearDraft(parentChannelId, DraftType.ChannelMessage);
        const obj11 = UploadAttachmentActionCreatorsDefault;
        obj11.clearAll(parentChannelId, DraftType.ChannelMessage);
      } else {
        let obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
        const setKeyboardType = KeyboardUIStore.setKeyboardType;
        KeyboardUIStore;
        setKeyboardType(obj);
        const draft = DraftStore.getDraft(parentChannelId, DraftType.ChannelMessage);
        let threadSettings = DraftStore.getThreadSettings(parentChannelId);
        if (threadSettings == null) {
          const getThreadDraftWithParentMessageId = DraftStore.getThreadDraftWithParentMessageId;
          let obj2 = SnowflakeUtilsDefault;
          threadSettings = getThreadDraftWithParentMessageId(obj2.castChannelIdAsMessageId(parentChannelId));
        }
        if (isEdit) {
          let obj4 = ForumComposerModalActionCreators;
          let result1 = obj4.closeCreateForumPostModal();
          const obj5 = DraftActionCreatorsDefault;
          obj5.clearDraft(parentChannelId, DraftType.ThreadSettings);
          const obj6 = DraftActionCreatorsDefault;
          obj6.clearDraft(parentChannelId, DraftType.ChannelMessage);
          const obj7 = UploadAttachmentActionCreatorsDefault;
          obj7.clearAll(parentChannelId, DraftType.ChannelMessage);
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
          let obj3 = {
            onConfirm() {
                    const obj = parentChannelId(isEdit[24]);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result = obj.maybeTrackForumNewPostDraftCreated(obj2);
                    const obj3 = parentChannelId(isEdit[20]);
                    const result1 = obj3.closeCreateForumPostModal();
                  },
            onCancel() {
                    const obj = parentChannelId(isEdit[20]);
                    const result = obj.closeCreateForumPostModal();
                    const obj2 = threadId(isEdit[13]);
                    obj2.clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj3 = threadId(isEdit[13]);
                    obj3.clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj4 = threadId(isEdit[14]);
                    obj4.clearAll(closure_1_0, DraftType.ChannelMessage);
                  }
          };
          showForumComposerCloseAlert(obj3);
        }
      }
    }
  }
  const analyticsLocations = parentChannelId.analyticsLocations;
  const tmp = closure_12();
  const analyticsLocations2 = threadId(isEdit[17])(analyticsLocations).analyticsLocations;
  let obj = parentChannelId(isEdit[18]);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj3 = parentChannelId(isEdit[18]);
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = obj3.useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  const tmp6 = threadId(isEdit[19])(parentChannelId);
  let obj4 = parentChannelId(isEdit[18]);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = obj4.useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != importAll) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj5 = parentChannelId(isEdit[18]);
  const items5 = [handleClose];
  const stateFromStores3 = obj5.useStateFromStores(items5, () => handleClose.isOpen());
  let obj6 = parentChannelId(isEdit[25]);
  obj6.useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp11Result = null;
  const tmp4 = parentChannelId;
  if (null != stateFromStores) {
    tmp11Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          let obj7 = { style: tmp.container, importantForAccessibility: str, children: null };
          str = undefined;
          const AnalyticsLocationProvider = tmp4(tmp3[17]).AnalyticsLocationProvider;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          tmp11Result = <AnalyticsLocationProvider value={analyticsLocations2}>{null}</AnalyticsLocationProvider>;
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
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default tmp3;