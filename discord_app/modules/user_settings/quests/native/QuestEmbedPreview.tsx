// === Module 15174: QuestEmbedPreview ===

// Module 15174 (QuestEmbedPreview)
import CodedLink from "CodedLink" /* 4548 */;
import QuestCopyUtils from "QuestCopyUtils" /* 11295 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4210 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
const MessageTypes = fn(1074).MessageTypes;
const jsx = fn(21).jsx;
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = noop.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[5])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let obj = questId(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = noop.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        let obj = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: tmp3, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
        const _Date = Date;
        const date = new Date();
        obj.timestamp = date;
        obj.mentions = [];
        obj.mention_roles = [];
        obj.attachments = [];
        obj.embeds = [];
        obj.reactions = [];
        obj = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: tmp, url: QuestCopyUtils.getQuestUrl(tmp) };
        const items = [obj];
        obj.codedLinks = items;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    obj = { title: null, children: null };
    const intl = tmp2(1114).intl;
    obj.title = intl.string(tmp2(1114).t["habP/M"]);
    obj = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj.children = jsx(stateFromStores(8652), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(15173), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    const tmp9 = stateFromStores(15173);
  }
  return tmp6;
};