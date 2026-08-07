// discord_app/modules/user_settings/quests/native/QuestEmbedPreview.tsx
import noop from "noop";
import hasFlag from "hasFlag";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MessageTypes } from "ME";
import { jsx } from "jsxProd";

const require = arg1;
const result = require("mergeGuildAvatar").fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = function QuestEmbedPreview(questId) {
  questId = questId.questId;
  let stateFromStores;
  const memo = React.useMemo(() => {
    const obj = new stateFromStores(table[5])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let obj = questId(589);
  let items = [mergeGuildAvatar];
  stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = React.useMemo(() => {
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        let obj = { id: "1000000000000000000", type: null, channel_id: "1000000000000000001", author: null, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
        obj[1] = outer1_6.DEFAULT;
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
        obj[0] = questId(outer1_2[7]).CodedLinkType.QUESTS_EMBED;
        obj[1] = tmp;
        obj[2] = questId(outer1_2[8]).getQuestUrl(tmp);
        const items = [obj];
        obj[16] = items;
        tmp2 = new outer1_4(obj);
        const obj3 = questId(outer1_2[8]);
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
    obj[1] = jsx(stateFromStores(8529), { rowGenerator: null, message: null, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(14342), { rowGenerator: null, message: null, horizontalOffset: 0, pointerEvents: "none" });
    const tmp9 = stateFromStores(14342);
  }
  return tmp6;
};