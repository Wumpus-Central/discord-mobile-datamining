// === Module 17891: ManageSponsoredContentScreen ===

// Module 17891 (ManageSponsoredContentScreen)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2061 */;
import _modDef2107 from "module_2107" /* 2107 */;
import UserSettings from "UserSettings" /* 4839 */;
import TableRowGroup from "TableRowGroup" /* 7060 */;
import noop from "module_19" /* 19 */;

require = fn;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(4839).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = adTopic(1113).intl;
  obj.label = intl.string(obj[adTopic]);
  const intl2 = adTopic(1113).intl;
  const tmp3 = _modDef2107;
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
  return closure_5(adTopic(7369).TableSwitchRow, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1072).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1196).AdTopic.REAL_MONEY_GAMING] = _modDef2107.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
const createStyles = fn(5014);
let obj3 = { content: { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 } };
let closure_10 = createStyles.createStyles(obj3);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  obj = { style: closure_10().content, children: null };
  const obj2 = { hasIcons: false, description: null };
  const intl = util.intl;
  const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
  obj2.description = intl.format(_modDef2107["z/MfaY"], obj3);
  const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj2), ];
  const obj5 = { hasIcons: false, title: null, children: null };
  const intl2 = util.intl;
  obj5.title = intl2.string(_modDef2107.OkmBx0);
  obj5.children = closure_8.map((adTopic) => closure_1_5(AdTopicRow, { adTopic }, adTopic));
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
  obj.children = items;
  return timestampProducer(View, obj);
};