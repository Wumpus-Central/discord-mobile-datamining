// discord_app/modules/quests/native/openQuestCollectibleRewardModal.tsx
import mergeGuildAvatar from "mergeGuildAvatar";
import { QuestsExperimentLocations } from "QuestsExperimentLocations";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { initialize } from "../../../../discord_common/js/packages/flux/index.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { MODAL_KEY } from "../../collectibles/native/ProductPurchaseSuccessActionCreators.tsx";
import { useQuests } from "../hooks/QuestHooks.tsx";
import { getQuestLogger } from "../lib/getQuestLogger.tsx";
import { _getDefaultRewardName } from "../utils/QuestRewardUtils.tsx";

let c5;
let closure_6;
let error;
const require = arg1;
function QuestCollectibleRewardModalMessages(quest) {
  quest = quest.quest;
  const tmp = createCacheKey();
  let obj = initialize /* initialize */;
  const items = [mergeGuildAvatar];
  const stateFromStores = obj.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj1 = _getDefaultRewardName /* _getDefaultRewardName */;
  const defaultRewardNameWithArticle = obj1.getDefaultRewardNameWithArticle(quest.config, stateFromStores);
  obj = { children: null };
  const claimedCollectibleRewardMessage = useQuests /* useQuests */.useClaimedCollectibleRewardMessage(quest.config);
  obj = { variant: "heading-xl/bold", style: tmp.title, children: null };
  const intl = getSystemLocale /* getSystemLocale */.intl;
  obj[2] = intl.format(getSystemLocale /* getSystemLocale */.t.YNaxMp, { itemName: defaultRewardNameWithArticle });
  const items1 = [callback(Text /* Text */.Text, obj), ];
  obj1 = { variant: "text-md/medium", style: tmp.title, children: claimedCollectibleRewardMessage };
  items1[1] = callback(Text /* Text */.Text, obj1);
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
  let obj = getQuestLogger /* getQuestLogger */;
  obj = { location: QuestsExperimentLocations.QUEST_HOME_MOBILE };
  const questLogger = obj.getQuestLogger(obj);
  if (null != product) {
    obj = { product: null, renderMessages: null, onSuccess: null };
    obj[0] = product;
    obj[1] = function renderMessages() {
      return outer1_5(outer1_9, { quest: closure_0 });
    };
    obj[2] = onSuccess.onSuccess;
    MODAL_KEY.open(obj);
    const obj4 = MODAL_KEY;
  } else {
    questLogger.warn("Product is null");
  }
};