// === Module 10766: ForumComposerModal ===

// Module 10766 (ForumComposerModal)
import SnowflakeUtilsDefault from "SnowflakeUtils" /* 11 */;
import nativeDefault from "native" /* 575 */;
import KeyboardUIStore from "KeyboardUIStore" /* 1499 */;
import KeyboardTypes from "KeyboardTypes" /* 1627 */;
import DraftActionCreatorsDefault from "DraftActionCreators" /* 8179 */;
import UploadAttachmentActionCreatorsDefault from "UploadAttachmentActionCreators" /* 10062 */;
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators" /* 10765 */;
import showForumComposerCloseAlertDefault from "showForumComposerCloseAlert" /* 10768 */;
import noop from "module_19" /* 19 */;
import NativeMenuStore from "NativeMenuStore" /* 10274 */;
import ChannelStore from "ChannelStore" /* 4892 */;
import DraftStore from "DraftStore" /* 8117 */;
import UploadAttachmentStore from "UploadAttachmentStore" /* 8124 */;
import ForumPostMessagesStore from "ForumPostMessagesStore" /* 8119 */;

require = fn;
const View = fn(17).View;
const DraftType = fn(8117).DraftType;
const jsx = fn(21).jsx;
const createStyles = fn(5043);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW } };
let closure_11 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

export default function ForumComposerModal(parentChannelId) {
  parentChannelId = parentChannelId.parentChannelId;
  const threadId = parentChannelId.threadId;
  ({ messageId: dependencyMap, isEdit } = parentChannelId);
  if (isEdit === undefined) {
    isEdit = false;
  }
  function handleClose(arg0) {
    if (null != stateFromStores) {
      if (arg0) {
        let result = ForumComposerModalActionCreators.closeCreateForumPostModal();
        const tmp33Result = ForumComposerModalActionCreators;
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
                    const result = parentChannelId(8116).maybeTrackForumNewPostDraftCreated({ guildId: stateFromStores.guild_id, channelId: stateFromStores.id });
                    const obj = parentChannelId(8116);
                    const obj2 = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
                    const result1 = parentChannelId(10765).closeCreateForumPostModal();
                  },
            onCancel() {
                    const result = parentChannelId(10765).closeCreateForumPostModal();
                    const obj = parentChannelId(10765);
                    threadId(8179).clearDraft(closure_1_0, DraftType.ThreadSettings);
                    const obj2 = threadId(8179);
                    threadId(8179).clearDraft(closure_1_0, DraftType.ChannelMessage);
                    const obj3 = threadId(8179);
                    threadId(10062).clearAll(closure_1_0, DraftType.ChannelMessage);
                  }
          };
          showForumComposerCloseAlertDefault(obj2);
        }
        const tmp33Result2 = KeyboardUIStore;
      }
    }
  }
  const tmp = closure_11();
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  items = [handleClose];
  const items1 = [parentChannelId];
  const stateFromStores = parentChannelId(504).useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  let obj = parentChannelId(504);
  const items2 = [handleClose];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(504).useStateFromStores(items2, () => ChannelStore.getChannel(threadId), items3);
  let obj3 = parentChannelId(504);
  const tmp6 = threadId(10767)(parentChannelId);
  const items4 = [ForumPostMessagesStore];
  const stateFromStores2 = parentChannelId(504).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != dependencyMap) {
        firstMessage = ForumPostMessagesStore.getMessage(tmp).firstMessage;
      }
    }
    return firstMessage;
  });
  let obj4 = parentChannelId(504);
  const items5 = [stateFromStores];
  const stateFromStores3 = parentChannelId(504).useStateFromStores(items5, () => stateFromStores.isOpen());
  const obj5 = parentChannelId(504);
  parentChannelId(7197).useNavigatorBackPressHandler(() => {
    handleClose(false);
    return true;
  });
  let tmp11Result = null;
  if (null != stateFromStores) {
    tmp11Result = null;
    if (stateFromStores.isForumLikeChannel()) {
      if (isEdit) {
        if (!isEdit) {
          let obj2 = { value: threadId(6379)(parentChannelId.analyticsLocations).analyticsLocations, children: null };
          let obj7 = { style: tmp.container, importantForAccessibility: null, children: null };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj7.importantForAccessibility = str;
          let obj8 = { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit };
          obj7.children = jsx(tmp2(10769), { parentChannel: stateFromStores, thread: stateFromStores1, message: stateFromStores2, threadSettingsDraft: tmp6, onClose: handleClose, isEdit });
          obj2.children = <isEdit style={tmp.container} importantForAccessibility={null}>{null}</isEdit>;
          tmp11Result = jsx(tmp4(6379).AnalyticsLocationProvider, { value: threadId(6379)(parentChannelId.analyticsLocations).analyticsLocations, children: null });
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