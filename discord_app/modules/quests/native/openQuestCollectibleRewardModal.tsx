// === Module 12038: openQuestCollectibleRewardModal ===

// Module 12038 (openQuestCollectibleRewardModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4752 */;
import getQuestLogger from "getQuestLogger" /* 7943 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11343 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11551 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11736 */;
import UserStore from "UserStore" /* 1372 */;

require = fn;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = closure_8();
  const items = [UserStore];
  const stateFromStores = initialize.useStateFromStores(items, () => currentUser.getCurrentUser());
  const defaultRewardNameWithArticle = QuestRewardUtils.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  const obj4 = { children: null };
  const claimedCollectibleRewardMessage = hooks_QuestHooks.useClaimedCollectibleRewardMessage(quest.config);
  const obj5 = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj5.children = intl.format(util.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [hasOwnProperty(Text_Text.Text, obj5), hasOwnProperty(Text_Text.Text, { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage })];
  obj4.children = items1;
  return React5(timestampProducer, obj4);
}
const QuestsExperimentLocations = fn(5656).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
const createStyles = fn(4756);
let obj2 = { title: { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  ({ quest: require, product } = onSuccess);
  const questLogger = getQuestLogger.getQuestLogger({ location: QuestsExperimentLocations.QUEST_HOME_MOBILE });
  if (null != product) {
    const obj3 = {
      product,
      renderMessages() {
          return hasOwnProperty(QuestCollectibleRewardModalMessages, { quest });
        },
      onSuccess: onSuccess.onSuccess
    };
    ProductPurchaseSuccessActionCreatorsDefault.open(obj3);
  } else {
    questLogger.warn("Product is null");
  }
  const obj2 = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
};