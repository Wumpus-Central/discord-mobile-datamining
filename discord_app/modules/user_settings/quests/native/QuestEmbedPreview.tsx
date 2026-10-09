// === Module 15366: QuestEmbedPreview ===

// Module 15366 (QuestEmbedPreview)
import initialize from "initialize" /* 504 */;
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import CodedLink from "CodedLink" /* 5076 */;
import RowGeneratorDefault from "RowGenerator" /* 7728 */;
import QuestCopyUtils from "QuestCopyUtils" /* 9165 */;
import ChatItemDefault from "ChatItem" /* 9346 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 15365 */;
import noop from "module_19" /* 19 */;
import MessageRecord from "MessageRecord" /* 4720 */;
import UserStore from "UserStore" /* 1390 */;

require = fn;
const MessageTypes = fn(1085).MessageTypes;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = ReactCompilerGating.isReactCompilerEnabled() ? (function QuestEmbedPreview(questId) {
  let tmp2 = dependencyMap;
  const cResult = c.c(9);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = new RowGeneratorDefault();
    obj2.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    cResult[0] = obj2;
    let first = obj2;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    const fn = function h() {
      return currentUser.getCurrentUser();
    };
    cResult[1] = items;
    cResult[2] = fn;
    let tmp11 = fn;
    let tmp10 = items;
  } else {
    tmp10 = cResult[1];
    tmp11 = cResult[2];
  }
  const stateFromStores = initialize.useStateFromStores(tmp10, tmp11);
  let tmp14 = null;
  if (null != questId) {
    tmp14 = null;
    if (null != stateFromStores) {
      if (cResult[3] === stateFromStores) {
      }
      const obj3 = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: stateFromStores, content: "", timestamp: null, edited_timestamp: null, tts: false, mention_everyone: false, mentions: null, mention_roles: null, attachments: null, embeds: null, reactions: null, pinned: false, webhook_id: null, codedLinks: null };
      const _Date = Date;
      const date = new Date();
      obj3.timestamp = date;
      obj3.mentions = [];
      obj3.mention_roles = [];
      obj3.attachments = [];
      obj3.embeds = [];
      obj3.reactions = [];
      const obj4 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: questId, url: QuestCopyUtils.getQuestUrl(questId) };
      const items1 = [obj4];
      obj3.codedLinks = items1;
      const tmp25 = new MessageRecord(obj3);
      cResult[3] = stateFromStores;
      cResult[4] = questId;
      cResult[5] = tmp25;
      const tmpResult2 = QuestCopyUtils;
    }
  }
  if (null == tmp14) {
    return null;
  } else {
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = util.intl;
      const stringResult = intl.string(util.t["habP/M"]);
      cResult[6] = stringResult;
      let tmp28 = stringResult;
    } else {
      tmp28 = cResult[6];
    }
    if (cResult[7] !== tmp14) {
      const obj5 = { title: tmp28, children: null };
      const obj6 = { rowGenerator: first, message: tmp14, horizontalOffset: 0, pointerEvents: "none" };
      tmp2 = jsx(ChatItemDefault, { rowGenerator: first, message: tmp14, horizontalOffset: 0, pointerEvents: "none" });
      obj5.children = tmp2;
      const tmp34 = jsx(MobileQuestPreviewContainerDefault, { title: tmp28, children: null });
      cResult[7] = tmp14;
      cResult[8] = tmp34;
    }
  }
  const tmpResult = initialize;
}) : (function QuestEmbedPreview(questId) {
  questId = questId.questId;
  const memo = noop.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[7])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
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
    const intl = tmp2(1126).intl;
    obj2.title = intl.string(tmp2(1126).t["habP/M"]);
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    obj2.children = jsx(stateFromStores(9346), { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" });
    tmp6 = jsx(stateFromStores(15365), { title: null, children: null });
    const tmp9 = stateFromStores(15365);
  }
  return tmp6;
});