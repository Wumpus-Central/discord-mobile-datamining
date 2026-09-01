// === Module 15460: AdTopicRow ===

// Module 15460 (AdTopicRow)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import combinedDefault from "combined" /* 1995 */;
import messagesProxyDefault from "messagesProxy" /* 2043 */;
import TableRowGroupTitle from "TableRowGroupTitle" /* 5992 */;
import { View } from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(4166).AdTopicOptOuts;
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
    const AdTopicOptOuts = adTopic(closure_1_2[6]).AdTopicOptOuts;
    const set = new Set(AdTopicOptOuts.getSetting());
    if (arg0) {
      set.delete(adTopic);
    } else {
      set.add(adTopic);
    }
    const AdTopicOptOuts2 = adTopic(closure_1_2[6]).AdTopicOptOuts;
    const items = [...set];
    AdTopicOptOuts2.updateSetting(items);
  };
  return closure_5(adTopic(5993).TableSwitchRow, obj);
}
noopAll;
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let obj = {};
obj[require("create").AdTopic.REAL_MONEY_GAMING] = messagesProxyDefault.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
obj = { content: null };
obj = { paddingHorizontal: ThemesDefault.space.PX_16, paddingTop: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
obj[0] = obj;
let closure_10 = createCacheKey.createStyles(obj);
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  obj = { style: callback3().content, children: null };
  obj = { hasIcons: false, description: null };
  const intl = getSystemLocale.intl;
  obj = { helpdeskArticle: combinedDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj[1] = intl.format(messagesProxyDefault["z/MfaY"], obj);
  const items = [callback(TableRowGroupTitle.TableRowGroup, obj), ];
  obj1 = { hasIcons: false, title: null, children: null };
  const intl2 = getSystemLocale.intl;
  obj1[1] = intl2.string(messagesProxyDefault.OkmBx0);
  obj1[2] = closure_8.map((adTopic) => callback(closure_9, { adTopic }, adTopic));
  items[1] = callback(TableRowGroupTitle.TableRowGroup, obj1);
  obj[1] = items;
  return callback2(View, obj);
};