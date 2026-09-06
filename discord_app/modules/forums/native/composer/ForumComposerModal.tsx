// discord_app/modules/forums/native/composer/ForumComposerModal.tsx
import SnowflakeUtilsDefault from "../../../../utils/SnowflakeUtils.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import KeyboardUIStore from "../../../keyboard/native/KeyboardUIStore.native.tsx";
import KeyboardTypes from "../../../keyboard/native/KeyboardTypes.tsx";
import KeyboardManagerUtilsAll from "../../../../utils/native/KeyboardManagerUtils.tsx";
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import DraftActionCreatorsDefault from "../../../../actions/DraftActionCreators.tsx";
import UploadAttachmentActionCreatorsDefault from "../../../../actions/UploadAttachmentActionCreators.tsx";
import ForumComposerModalActionCreators from "ForumComposerModalActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import NativeMenuStore from "../../../native_menu/native/NativeMenuStore.tsx";
import ChannelStore from "../../../../stores/ChannelStore.tsx";
import DraftStore from "../../../../stores/DraftStore.tsx";
import UploadAttachmentStore from "../../../../stores/UploadAttachmentStore.tsx";
import ForumPostMessagesStore from "../../ForumPostMessagesStore.tsx";

require = fn;
const View = fn(17).View;
const DraftType = fn(4901).DraftType;
const jsx = fn(21).jsx;
fn(4560);
let createStyles = { container: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
let closure_12 = createStyles.createStyles(createStyles);
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
        let tmp52Result = ForumComposerModalActionCreators;
        let result = tmp52Result.closeCreateForumPostModal();
        DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ThreadSettings);
        DraftActionCreatorsDefault.clearDraft(parentChannelId, DraftType.ChannelMessage);
        UploadAttachmentActionCreatorsDefault.clearAll(parentChannelId, DraftType.ChannelMessage);
      } else {
        tmp52Result = KeyboardUIStore;
        let obj = { type: KeyboardTypes.KeyboardTypes.SYSTEM };
        tmp52Result.setKeyboardType(obj);
        const draft = DraftStore.getDraft(parentChannelId, DraftType.ChannelMessage);
        let threadSettings = DraftStore.getThreadSettings(parentChannelId);
        if (threadSettings == null) {
          threadSettings = DraftStore.getThreadDraftWithParentMessageId(
            SnowflakeUtilsDefault.castChannelIdAsMessageId(parentChannelId),
          );
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
          obj = {
            title: null,
            body: null,
            confirmText: null,
            cancelText: null,
            onConfirm: null,
            onCancel: null,
            hideActionSheet: true,
            isDismissable: true,
          };
          const intl = util.intl;
          obj.title = intl.string(util.t.Fz1512);
          const intl2 = util.intl;
          obj.body = intl2.string(util.t.YBgepz);
          const intl3 = util.intl;
          obj.confirmText = intl3.string(util.t.Rnli6C);
          const intl4 = util.intl;
          obj.cancelText = intl4.string(util.t["3NnH6V"]);
          obj.onConfirm = function onConfirm() {
            parentChannelId(isEdit[22]);
            const obj = { guildId: stateFromStores.guild_id, channelId: stateFromStores.id };
            const result = obj.maybeTrackForumNewPostDraftCreated(obj);
            const result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          };
          obj.onCancel = function onCancel() {
            const result = parentChannelId(isEdit[18]).closeCreateForumPostModal();
            const obj = parentChannelId(isEdit[18]);
            threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ThreadSettings);
            const obj2 = threadId(isEdit[13]);
            threadId(isEdit[13]).clearDraft(closure_1_0, DraftType.ChannelMessage);
            const obj3 = threadId(isEdit[13]);
            threadId(isEdit[14]).clearAll(closure_1_0, DraftType.ChannelMessage);
          };
          actions_AlertActionCreatorsDefault.show(obj);
        }
      }
    }
  }
  let obj = parentChannelId(isEdit[16]);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  const tmp = closure_12();
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  const items2 = [ChannelStore];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(isEdit[16]).useStateFromStores(
    items2,
    () => ChannelStore.getChannel(threadId),
    items3,
  );
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
          obj = { value: threadId(isEdit[15])(parentChannelId.analyticsLocations).analyticsLocations, children: null };
          obj = { style: tmp.container, importantForAccessibility: null, children: null };
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj.importantForAccessibility = str;
          const obj1 = {
            parentChannel: stateFromStores,
            thread: stateFromStores1,
            message: stateFromStores2,
            threadSettingsDraft: tmp6,
            onClose: handleClose,
            isEdit,
          };
          obj.children = jsx(tmp2(tmp3[24]), {
            parentChannel: stateFromStores,
            thread: stateFromStores1,
            message: stateFromStores2,
            threadSettingsDraft: tmp6,
            onClose: handleClose,
            isEdit,
          });
          obj.children = (
            <stateFromStores style={tmp.container} importantForAccessibility={null}>
              {null}
            </stateFromStores>
          );
          tmp11Result = jsx(tmp4(tmp3[15]).AnalyticsLocationProvider, {
            style: tmp.container,
            importantForAccessibility: null,
            children: null,
          });
        } else {
          tmp11Result = null;
        }
      } else {
        tmp11Result = null;
      }
    }
  }
  return tmp11Result;
}
