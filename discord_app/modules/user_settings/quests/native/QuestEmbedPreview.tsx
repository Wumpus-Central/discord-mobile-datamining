// === Module 14976: QuestEmbedPreview ===

// Module 14976 (QuestEmbedPreview)
import Fragment from "Fragment" /* 21 */;
import get_initialized from "get initialized" /* 504 */;
import react2 from "react" /* 576 */;
import Constants from "Constants" /* 1085 */;
import intl2 from "intl" /* 1126 */;
import CodedLink from "CodedLink" /* 4875 */;
import RowGeneratorDefault from "RowGenerator" /* 7591 */;
import QuestCopyUtils from "QuestCopyUtils" /* 10010 */;
import MobileQuestPreviewContainerDefault from "MobileQuestPreviewContainer" /* 14975 */;
import react from "react" /* 19 */;
import MessageRecord from "MessageRecord" /* 4520 */;
import UserStore from "UserStore" /* 1377 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const MessageTypes = Constants.MessageTypes;
const jsx = Fragment.jsx;
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function(questId) {
  let currentUser;
  let date;
  let items1;
  let tmp8;
  let tmp9;
  let tmpResult2;
  const obj = react2;
  const cResult = obj.c(9);
  questId = questId.questId;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const self = this;
    const self2 = this;
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
    tmp9 = fn;
    tmp8 = items;
  } else {
    tmp8 = cResult[1];
    tmp9 = cResult[2];
  }
  const tmpResult = get_initialized;
  const stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
  let tmp12 = null;
  if (null != questId) {
    tmp12 = null;
    if (null != stateFromStores) {
      if (cResult[3] === stateFromStores) {
        let tmp13;
        if (cResult[4] === questId) {
          tmp13 = cResult[5];
        }
        tmp12 = tmp13;
      }
      const _Date = Date;
      const self3 = this;
      const self4 = this;
      const obj3 = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: stateFromStores, content: "", timestamp: date, edited_timestamp: null, tts: false, mention_everyone: false, mentions: [], mention_roles: [], attachments: [], embeds: [], reactions: [], pinned: false, webhook_id: null, codedLinks: items1 };
      date = new Date();
      const obj4 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: questId, url: tmpResult2.getQuestUrl(questId) };
      items1 = [obj4];
      const self5 = this;
      const self6 = this;
      tmpResult2 = QuestCopyUtils;
      const tmp19 = new MessageRecord(obj3);
      cResult[3] = stateFromStores;
      cResult[4] = questId;
      cResult[5] = tmp19;
      tmp13 = tmp19;
    }
  }
  let tmp21 = null;
  if (null != tmp12) {
    let tmp22;
    let tmp24;
    const _Symbol = Symbol;
    if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
      const intl = intl2.intl;
      const stringResult = intl.string(intl2.t["habP/M"]);
      cResult[6] = stringResult;
      tmp22 = stringResult;
    } else {
      tmp22 = cResult[6];
    }
    if (cResult[7] !== tmp12) {
      MobileQuestPreviewContainerDefault;
      const tmp28 = <tmp27 title={tmp22}>{null}</tmp27>;
      cResult[7] = tmp12;
      cResult[8] = tmp28;
      tmp24 = tmp28;
    } else {
      tmp24 = cResult[8];
    }
    tmp21 = tmp24;
  }
  return tmp21;
}) : ((questId) => {
  let currentUser;
  questId = questId.questId;
  let tmp2 = questId;
  const memo = react.useMemo(() => {
    const obj = new stateFromStores(dependencyMap[7])();
    obj.setOptions({ renderCodedLinks: true, renderEmbeds: true, renderComponents: true, shouldDisableInteractiveComponents: true });
    return obj;
  }, []);
  let obj = questId(504);
  let items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  const items1 = [questId, stateFromStores];
  const memo1 = react.useMemo(function() {
    let date;
    let items;
    let obj3;
    let tmp2 = null;
    if (null != questId) {
      tmp2 = null;
      if (null != stateFromStores) {
        const _Date = Date;
        const self = this;
        const self2 = this;
        const obj = { id: "1000000000000000000", type: MessageTypes.DEFAULT, channel_id: "1000000000000000001", author: tmp3, content: "", timestamp: date, edited_timestamp: null, tts: false, mention_everyone: false, mentions: [], mention_roles: [], attachments: [], embeds: [], reactions: [], pinned: false, webhook_id: null, codedLinks: items };
        date = new Date();
        const obj2 = { type: CodedLink.CodedLinkType.QUESTS_EMBED, code: questId, url: obj3.getQuestUrl(questId) };
        items = [obj2];
        const self3 = this;
        const self4 = this;
        obj3 = QuestCopyUtils;
        tmp2 = new MessageRecord(obj);
      }
    }
    return tmp2;
  }, items1);
  let tmp6 = null;
  if (null != memo1) {
    stateFromStores(14975);
    const intl = tmp2(1126).intl;
    let obj3 = { rowGenerator: memo, message: memo1, horizontalOffset: 0, pointerEvents: "none" };
    tmp6 = <tmp9 title={intl.string(tmp2(1126).t["habP/M"])}>{null}</tmp9>;
  }
  return tmp6;
});
const result = size.fileFinishedImporting("modules/user_settings/quests/native/QuestEmbedPreview.tsx");

export const QuestEmbedPreview = tmp2;