// === Module 14525: QuestEmbedPreview ===

// Module 14525 (QuestEmbedPreview)
import noop from "noop" /* 19 */;
import hasFlag from "hasFlag" /* 4031 */;
import mergeGuildAvatar from "mergeGuildAvatar" /* 1922 */;
import { MessageTypes } from "ME" /* 676 */;
import { jsx } from "jsxProd" /* 21 */;

const require = fn;
const result = require("obj132").fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = React.useMemo(() => {
    const obj = new stateFromStores(table[5])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let obj = questId(589);
  let items = [closure_5];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = React.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        let obj = { id: "1000000000000000000", type: null, channel_id: "1000000000000000001", author: null, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
        obj[1] = MessageTypes.DEFAULT;
        obj[3] = tmp3;
        const _Date = Date;
        const date = new Date();
        obj[5] = date;
        obj[9] = [];
        obj[10] = [];
        obj[11] = [];
        obj[12] = [];
        obj[13] = [];
        obj = { type: null, code: null, url: null };
        obj[0] = questId(dependencyMap[7]).CodedLinkType.QUESTS_EMBED;
        obj[1] = questId;
        obj[2] = questId(dependencyMap[8]).getQuestUrl(questId);
        const items = [obj];
        obj[16] = items;
        tmp2 = new closure_1_4(obj);
        const obj3 = questId(dependencyMap[8]);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    obj = { title: null, children: null };
    const intl = tmp2(1236).intl;
    obj[0] = intl.string(tmp2(1236).t["habP/M"]);
    obj = { rowGenerator: null, message: null, horizontalOffset: 0, pointerEvents: "none" };
    obj[0] = memo;
    obj[1] = memo1;
    obj[1] = jsx(stateFromStores(10066), { rowGenerator: null, message: null, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(14524), { rowGenerator: null, message: null, horizontalOffset: 0, pointerEvents: "none" });
    const tmp9 = stateFromStores(14524);
  }
  return tmp6;
};