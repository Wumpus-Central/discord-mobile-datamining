// discord_app/modules/quests/native/openQuestCollectibleRewardModal.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c5;
let closure_6;
let error;
const require = arg1;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = createCacheKey();
  let obj = require("../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = require("../utils/QuestRewardUtils.tsx") /* _getDefaultRewardName */;
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = { children: null };
  const claimedCollectibleRewardMessage = require("../hooks/QuestHooks.tsx") /* useQuests */.useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = require("../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  obj[2] = intl.format(require("../../../intl/index.native.tsx") /* getSystemLocale */.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj), ];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = callback(require("../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj1);
  obj[0] = items1;
  return callback2(closure_6, obj);
}
({ jsx: c5, Fragment: closure_6, jsxs: error } = jsxProd);
createCacheKey = { title: null };
createCacheKey = { textAlign: "center", marginHorizontal: require("Themes").space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/quests/native/openQuestCollectibleRewardModal.tsx");

export const openQuestCollectibleRewardModal = function openQuestCollectibleRewardModal(onSuccess) {
  let product;
  let require;
  ({ quest: require, product } = onSuccess);
  let obj = require("../lib/getQuestLogger.tsx") /* getQuestLogger */;
  obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = { product: null, renderMessages: null, onSuccess: null };
    obj[0] = product;
    obj[1] = function renderMessages() {
      return outer1_5(outer1_9, { quest: closure_0 });
    };
    obj[2] = onSuccess.onSuccess;
    require("../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx").open(obj);
    const obj4 = require("../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx");
  } else {
    questLogger.warn("Product is null");
  }
};