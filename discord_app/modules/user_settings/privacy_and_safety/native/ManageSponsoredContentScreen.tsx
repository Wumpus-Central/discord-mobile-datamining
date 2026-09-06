// === Module 15862: ManageSponsoredContentScreen ===

// Module 15862 (ManageSponsoredContentScreen)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import UserSettings from "UserSettings" /* 1935 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2024 */;
import _modDef2070 from "module_2070" /* 2070 */;
import TableRowGroup from "TableRowGroup" /* 5687 */;
import noop from "module_19" /* 19 */;

require = fn;
function AdTopicRow(adTopic) {
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(1935).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  const obj = { label: null, subLabel: null, value: null, onValueChange: null };
  const intl = adTopic(1114).intl;
  obj.label = intl.string(obj[adTopic]);
  const intl2 = adTopic(1114).intl;
  const tmp3 = _modDef2070;
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
  return closure_5(adTopic(7201).TableSwitchRow, obj);
}
const View = fn(17).View;
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let content = {};
content[fn(1187).AdTopic.REAL_MONEY_GAMING] = _modDef2070.pmIitA;
const keys = Object.keys(content);
let closure_8 = keys.map(Number);
const createStyles = fn(4560);
content = { content: null };
content = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
content.content = content;
let closure_10 = createStyles.createStyles(content);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default function ManageSponsoredContentScreen() {
  let obj = { style: closure_10().content, children: null };
  obj = { hasIcons: false, description: null };
  const intl = util.intl;
  obj = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.QUESTS_PRIVACY_CONTROLS) };
  obj.description = intl.format(_modDef2070["z/MfaY"], obj);
  const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj), ];
  const obj1 = { hasIcons: false, title: null, children: null };
  const intl2 = util.intl;
  obj1.title = intl2.string(_modDef2070.OkmBx0);
  obj1.children = closure_8.map((adTopic) => closure_1_5(AdTopicRow, { adTopic }, adTopic));
  items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj1);
  obj.children = items;
  return timestampProducer(View, obj);
};