// === Module 15004: AdTopicRow ===

// Module 15004 (AdTopicRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1993 */;
import messagesProxyDefault from "messagesProxy" /* 2041 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 6286 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(4066).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = adTopic(1236).intl;
  obj[0] = intl.string(obj[adTopic]);
  const intl2 = adTopic(1236).intl;
  const tmp3 = messagesProxyDefault;
  obj[1] = intl2.string(hasItem ? tmp3.B9PPxE : tmp3.Y9ZOp8);
  obj[2] = !hasItem;
  obj[3] = function onValueChange(arg0) {
    const AdTopicOptOuts = adTopic(dependencyMap[6]).AdTopicOptOuts;
    const set = new Set(AdTopicOptOuts.getSetting());
    if (arg0) {
      set.delete(adTopic);
    } else {
      set.add(adTopic);
    }
    const AdTopicOptOuts2 = adTopic(dependencyMap[6]).AdTopicOptOuts;
    const items = [...set];
    AdTopicOptOuts2.updateSetting(items);
  };
  return callback(adTopic(7178).TableSwitchRow, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj[require("create").AdTopic.REAL_MONEY_GAMING] = messagesProxyDefault.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const result = require("obj132").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  { style: callback3().content, children: null };
  const intl = getSystemLocale.intl;
  obj = { helpdeskArticle: combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj[1] = intl.format(messagesProxyDefault["z/MfaY"], obj);
  const items = [callback(TableRowGroupTitle.TableRowGroup, obj), ];
  obj1 = { hasIcons: false, title: null, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(messagesProxyDefault.OkmBx0);
  obj1[2] = closure_8.map((item, index) => callback(closure_9, { adTopic: item }, item));
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj1);
  obj[1] = items;
  return callback2(View, obj);
};