// === Module 17396: QuestEmbedPreview ===

// Module 17396 (QuestEmbedPreview)
import CodedLink from "CodedLink" /* 5886 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9855 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 5084 */;
import UserStore from "UserStore" /* 1385 */;

require = fn;
const MessageTypes = fn(1072).MessageTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = noop.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[5])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  items = [UserStore];
  const stateFromStores = questId(504).useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = noop.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        const obj = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: tmp3, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
        const _Date = Date;
        const date = new Date();
        obj.timestamp = date;
        obj.mentions = [];
        obj.mention_roles = [];
        obj.attachments = [];
        obj.embeds = [];
        obj.reactions = [];
        const obj2 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: questId, url: QuestCopyUtils.getQuestUrl(questId) };
        items = [obj2];
        obj.codedLinks = items;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    let obj2 = { title: null, children: null };
    const intl = tmp2(1113).intl;
    obj2.title = intl.string(tmp2(1113).t["habP/M"]);
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj2.children = jsx(stateFromStores(10064), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(17395), { title: null, children: null });
    const tmp9 = stateFromStores(17395);
  }
  return tmp6;
}