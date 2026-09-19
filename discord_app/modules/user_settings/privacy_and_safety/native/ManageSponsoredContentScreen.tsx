// === Module 16181: ManageSponsoredContentScreen ===

// Module 16181 (ManageSponsoredContentScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import UserSettings from "UserSettings" /* 2019 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2108 */;
import _modDef2154 from "module_2154" /* 2154 */;
import TableRowGroup from "TableRowGroup" /* 5899 */;
import noop from "module_19" /* 19 */;

require = fn;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(2019).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = adTopic(1115).intl;
  obj.label = intl.string(obj[adTopic]);
  const intl2 = adTopic(1115).intl;
  const tmp3 = _modDef2154;
  obj.subLabel = intl2.string(hasItem ? tmp3.B9PPxE : tmp3.Y9ZOp8);
  obj.value = !hasItem;
  obj.onValueChange = function onValueChange(arg0) {
    const AdTopicOptOuts = UserSettings.AdTopicOptOuts;
    const set = new Set(AdTopicOptOuts.getSetting());
    if (arg0) {
      set.delete(adTopic);
    } else {
      set.add(adTopic);
    }
    const AdTopicOptOuts2 = UserSettings.AdTopicOptOuts;
    const items = [...set];
    AdTopicOptOuts2.updateSetting(items);
  };
  return closure_5(adTopic(7440).TableSwitchRow, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1186).AdTopic.REAL_MONEY_GAMING] = _modDef2154.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
const createStyles = fn(4756);
let obj3 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  obj = { style: closure_10().content, children: null };
  const obj2 = { hasIcons: false, description: null };
  const intl = util.intl;
  const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
  obj2.description = intl.format(_modDef2154["z/MfaY"], obj3);
  const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj2), ];
  const obj5 = { hasIcons: false, title: null, children: null };
  const intl2 = util.intl;
  obj5.title = intl2.string(_modDef2154.OkmBx0);
  obj5.children = closure_8.map((adTopic) => closure_1_5(AdTopicRow, { adTopic }, adTopic));
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
  obj.children = items;
  return timestampProducer(View, obj);
};