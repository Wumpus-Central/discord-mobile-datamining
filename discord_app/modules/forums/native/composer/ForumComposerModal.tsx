// === Module 10399: ForumComposerModal ===

// Module 10399 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1482 */;
import KeyboardTypes from "KeyboardTypes" /* 1610 */;
import KeyboardManagerUtilsAll from "KeyboardManagerUtils" /* 1875 */;
import actions_AlertActionCreatorsDefault from "actions/AlertActionCreators" /* 4985 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 7897 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 9461 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10398 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 9835 */;
import ChannelStore from "ChannelStore" /* 1958 */;
import DraftStore from "DraftStore" /* 4981 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 4980 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 7391 */;

require = fn;
const View = fn(17).View;
const DraftType = fn(4981).DraftType;
const jsx = fn(21).jsx;
const createStyles = fn(4640);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_12 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
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
        const tmp52Result = ForumComposerModalActionCreators;
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
          const result2 = KeyboardManagerUtilsAll.dismissGlobalKeyboard();
          let obj2 = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, hideActionSheet: true, isDismissable: true };
          const intl = util.intl;
          obj2.title = intl.string(util.t.Fz1512);
          const intl2 = util.intl;
          obj2.body = intl2.string(util.t.YBgepz);
          const intl3 = util.intl;
          obj2.confirmText = intl3.string(util.t.Rnli6C);
          const intl4 = util.intl;
          obj2.cancelText = intl4.string(util.t["3NnH6V"]);
          obj2.onConfirm = function onConfirm() {
            const result = parentChannelId(isEdit[22]).maybeTrackForumNewPostDraftCreated({ guildId: stateFromStores.guild_id, channelId: stateFromStores.id });
            const obj = parentChannelId(isEdit[22]);
            const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
            const result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          };
          obj2.onCancel = function onCancel() {
            const result = parentChannelId(isEdit[18]).closeCreateForumPostModal();
            const obj = parentChannelId(isEdit[18]);
            threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ThreadSettings);
            const obj2 = threadId(isEdit[13]);
            threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ChannelMessage);
            const obj3 = threadId(isEdit[13]);
            threadId(isEdit[14]).clearAll(closure_1_0, DraftType.ChannelMessage);
          };
          actions_AlertActionCreatorsDefault.show(obj2);
        }
        const tmp52Result2 = KeyboardUIStore;
      }
    }
  }
  const tmp = closure_12();
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = parentChannelId(isEdit[16]).useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj = parentChannelId(isEdit[16]);
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(isEdit[16]).useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  let obj3 = parentChannelId(isEdit[16]);
  const tmp6 = threadId(isEdit[17])(parentChannelId);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = parentChannelId(isEdit[16]).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != importAll) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj4 = parentChannelId(isEdit[16]);
  const items5 = [handleClose];
  const stateFromStores3 = parentChannelId(isEdit[16]).useStateFromStores(items5, () => handleClose.isOpen());
  let obj5 = parentChannelId(isEdit[16]);
  parentChannelId(isEdit[23]).useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp11Result = null;
  if (null != stateFromStores) {
    tmp11Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          let obj2 = { value: threadId(isEdit[15])(parentChannelId.analyticsLocations).analyticsLocations, children: null };
          const obj7 = { style: tmp.container, importantForAccessibility: null, children: null };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj7.importantForAccessibility = str;
          let obj8 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit };
          obj7.children = jsx(tmp2(tmp3[24]), { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit });
          obj2.children = <stateFromStores style={tmp.container} importantForAccessibility={null}>{null}</stateFromStores>;
          tmp11Result = jsx(tmp4(tmp3[15]).AnalyticsLocationProvider, { value: threadId(isEdit[15])(parentChannelId.analyticsLocations).analyticsLocations, children: null });
        } else {
          tmp11Result = null;
        }
      } else {
        tmp11Result = null;
      }
    }
  }
  return tmp11Result;
};