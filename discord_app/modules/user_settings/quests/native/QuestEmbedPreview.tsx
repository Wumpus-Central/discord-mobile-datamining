// discord_app/modules/user_settings/quests/native/QuestEmbedPreview.tsx
import CodedLink from "../../../coded_links/CodedLink.tsx";
import QuestCopyUtils from "../../../quests/utils/QuestCopyUtils.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MessageRecord from "../../../../records/MessageRecord.tsx";
import UserStore from "../../../../stores/UserStore.tsx";

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = noop.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[5])();
    obj.setOptions({
      renderCodedLinks: true,
      renderEmbeds: true,
      renderComponents: true,
      shouldDisableInteractiveComponents: true,
    });
    return obj;
  }, []);
  let items = [UserStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = noop.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        const obj = {
          id: "1000000000000000000",
          type: MessageTypes.DEFAULT,
          channel_id: "1000000000000000001",
          author: tmp3,
          content: "",
          timestamp: null,
          edited_timestamp: null,
          tts: false,
          mention_everyone: false,
          mentions: null,
          mention_roles: null,
          attachments: null,
          embeds: null,
          reactions: null,
          pinned: false,
          webhook_id: null,
          codedLinks: null,
        };
        const _Date = Date;
        const date = new Date();
        obj.timestamp = date;
        obj.mentions = [];
        obj.mention_roles = [];
        obj.attachments = [];
        obj.embeds = [];
        obj.reactions = [];
        const obj2 = {
          type: CodedLink.CodedLinkType.QUESTS_EMBED,
          code: questId,
          url: QuestCopyUtils.getQuestUrl(questId),
        };
        const items = [obj2];
        obj.codedLinks = items;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    let obj2 = { title: null, children: null };
    const intl = tmp2(1115).intl;
    obj2.title = intl.string(tmp2(1115).t["habP/M"]);
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj2.children = jsx(stateFromStores(8890), {
      rowGenerator: memo,
      message: memo1,
      horizontalOffset: 0,
      pointerEvents: "none",
    });
    tmp6 = jsx(stateFromStores(15379), { title: null, children: null });
    const tmp9 = stateFromStores(15379);
  }
  return tmp6;
};
