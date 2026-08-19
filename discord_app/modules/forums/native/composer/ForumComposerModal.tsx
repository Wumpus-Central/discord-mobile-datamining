// discord_app/modules/forums/native/composer/ForumComposerModal.tsx
import noopAll from "../../../../../_runtime/00019_noop.js";
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import initialize from "../../../native_menu/native/NativeMenuStore.tsx";
import ensureGuildLoaded from "../../../../stores/ChannelStore.tsx";
import handleChanged from "../../../../stores/DraftStore.tsx";
import { DraftType } from "../../../../stores/DraftStore.tsx";
import map from "../../../../stores/UploadAttachmentStore.tsx";
import handleLoadThreadsSuccess from "../../ForumPostMessagesStore.tsx";
import { jsx } from "../../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

const require = fn;
noopAll;
const createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
let closure_12 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/forums/native/composer/ForumComposerModal.tsx");

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
        let tmp52Result = parentChannelId(isEdit[18]);
        let result = tmp52Result.closeCreateForumPostModal();
        threadId(isEdit[13]).clearDraft(parentChannelId, DraftType.ThreadSettings);
        const obj13 = threadId(isEdit[13]);
        threadId(isEdit[13]).clearDraft(parentChannelId, DraftType.ChannelMessage);
        const obj14 = threadId(isEdit[13]);
        threadId(isEdit[14]).clearAll(parentChannelId, DraftType.ChannelMessage);
        const obj15 = threadId(isEdit[14]);
      } else {
        tmp52Result = parentChannelId(isEdit[19]);
        let obj = { type: null };
        obj[0] = parentChannelId(isEdit[20]).KeyboardTypes.SYSTEM;
        tmp52Result.setKeyboardType(obj);
        const draft = closure_1_7.getDraft(parentChannelId, DraftType.ChannelMessage);
        let threadSettings = closure_1_7.getThreadSettings(parentChannelId);
        if (threadSettings == null) {
          threadSettings = closure_1_7.getThreadDraftWithParentMessageId(threadId(isEdit[21]).castChannelIdAsMessageId(parentChannelId));
          const obj4 = threadId(isEdit[21]);
        }
        if (isEdit) {
          let result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          const obj8 = parentChannelId(isEdit[18]);
          threadId(isEdit[13]).clearDraft(parentChannelId, DraftType.ThreadSettings);
          const obj9 = threadId(isEdit[13]);
          threadId(isEdit[13]).clearDraft(parentChannelId, DraftType.ChannelMessage);
          const obj10 = threadId(isEdit[13]);
          threadId(isEdit[14]).clearAll(parentChannelId, DraftType.ChannelMessage);
          const obj11 = threadId(isEdit[14]);
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
          const result2 = importAll(isEdit[10]).dismissGlobalKeyboard();
          const obj5 = importAll(isEdit[10]);
          obj = { title: null, body: null, confirmText: null, cancelText: null, onConfirm: null, onCancel: null, hideActionSheet: true, isDismissable: true };
          const intl = parentChannelId(isEdit[12]).intl;
          obj[0] = intl.string(parentChannelId(isEdit[12]).t.Fz1512);
          const intl2 = parentChannelId(isEdit[12]).intl;
          obj[1] = intl2.string(parentChannelId(isEdit[12]).t.YBgepz);
          const intl3 = parentChannelId(isEdit[12]).intl;
          obj[2] = intl3.string(parentChannelId(isEdit[12]).t.Rnli6C);
          const intl4 = parentChannelId(isEdit[12]).intl;
          obj[3] = intl4.string(parentChannelId(isEdit[12]).t["3NnH6V"]);
          obj[4] = function onConfirm() {
            parentChannelId(isEdit[22]);
            const obj = { guildId: closure_4.guild_id, channelId: closure_4.id };
            const result = obj.maybeTrackForumNewPostDraftCreated(obj);
            const result1 = parentChannelId(isEdit[18]).closeCreateForumPostModal();
          };
          obj[5] = function onCancel() {
            const result = parentChannelId(isEdit[18]).closeCreateForumPostModal();
            const obj = parentChannelId(isEdit[18]);
            threadId(isEdit[13]).clearDraft(closure_0, closure_1_8.ThreadSettings);
            const obj2 = threadId(isEdit[13]);
            threadId(isEdit[13]).clearDraft(closure_0, closure_1_8.ChannelMessage);
            const obj3 = threadId(isEdit[13]);
            threadId(isEdit[14]).clearAll(closure_0, closure_1_8.ChannelMessage);
          };
          threadId(isEdit[11]).show(obj);
          const obj6 = threadId(isEdit[11]);
        }
      }
    }
  }
  let obj = parentChannelId(isEdit[16]);
  const items = [closure_6];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(parentChannelId), items1);
  const tmp = callback();
  const tmp2 = threadId;
  const tmp4 = parentChannelId;
  const items2 = [closure_6];
  const items3 = [threadId];
  const stateFromStores1 = parentChannelId(isEdit[16]).useStateFromStores(items2, () => closure_1_6.getChannel(threadId), items3);
  let obj3 = parentChannelId(isEdit[16]);
  const tmp6 = threadId(isEdit[17])(parentChannelId);
  const items4 = [closure_10];
  const stateFromStores2 = parentChannelId(isEdit[16]).useStateFromStores(items4, () => {
    let firstMessage = null;
    if (null != threadId) {
      firstMessage = null;
      if (null != closure_2) {
        firstMessage = closure_1_10.getMessage(tmp).firstMessage;
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
          obj = { value: null, children: null };
          obj[0] = threadId(isEdit[15])(parentChannelId.analyticsLocations).analyticsLocations;
          obj = { style: null, importantForAccessibility: null, children: null };
          obj[0] = tmp.container;
          let str;
          if (stateFromStores3) {
            str = "no-hide-descendants";
          }
          obj[1] = str;
          obj1 = { parentChannel: null, thread: null, message: null, threadSettingsDraft: null, onClose: null, isEdit: null };
          obj1[0] = stateFromStores;
          obj1[1] = stateFromStores1;
          obj1[2] = stateFromStores2;
          obj1[3] = tmp6;
          obj1[4] = handleClose;
          obj1[5] = isEdit;
          obj[2] = jsx(tmp2(tmp3[24]), { parentChannel: null, thread: null, message: null, threadSettingsDraft: null, onClose: null, isEdit: null });
          obj[1] = <stateFromStores style={null} importantForAccessibility={null}>{null}</stateFromStores>;
          tmp11Result = jsx(tmp4(tmp3[15]).AnalyticsLocationProvider, { style: null, importantForAccessibility: null, children: null });
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