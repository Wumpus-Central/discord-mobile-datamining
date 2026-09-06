// === Module 11786: openQuestCollectibleRewardModal ===

// Module 11786 (openQuestCollectibleRewardModal)
import initialize from "initialize" /* 504 */;
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import Text_Text from "Text/Text" /* 4556 */;
import getQuestLogger from "getQuestLogger" /* 7709 */;
import ProductPurchaseSuccessActionCreatorsDefault from "ProductPurchaseSuccessActionCreators" /* 11077 */;
import QuestRewardUtils from "QuestRewardUtils" /* 11290 */;
import hooks_QuestHooks from "hooks/QuestHooks" /* 11483 */;
import UserStore from "UserStore" /* 1371 */;

require = fn;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = closure_8();
  let obj = initialize;
  const items = [UserStore];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = QuestRewardUtils;
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = { children: null };
  const claimedCollectibleRewardMessage = hooks_QuestHooks.useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = util.intl;
  obj.children = intl.format(util.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [hasOwnProperty(Text_Text.Text, obj), ];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = hasOwnProperty(Text_Text.Text, obj1);
  obj.children = items1;
  return React5(timestampProducer, obj);
}
const QuestsExperimentLocations = fn(5444).QuestsExperimentLocations;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, Fragment: metroRequire, jsxs: closure_7 } = jsxProd);
fn(4560);
let createStyles = { title: null };
createStyles = { textAlign: "center", marginHorizontal: nativeDefault.space.PX_32 };
createStyles.title = createStyles;
let closure_8 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  ({ quest: require, product } = onSuccess);
  let obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = {
      product,
      renderMessages() {
          return hasOwnProperty(QuestCollectibleRewardModalMessages, { quest });
        },
      onSuccess: onSuccess.onSuccess
    };
    ProductPurchaseSuccessActionCreatorsDefault.open(obj);
  } else {
    questLogger.warn("Product is null");
  }
};