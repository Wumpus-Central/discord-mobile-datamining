// === Module 15771: ManageSponsoredContentScreen ===

// Module 15771 (ManageSponsoredContentScreen)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl3 from "intl" /* 1126 */;
import preloaded_user_settings from "preloaded_user_settings" /* 1197 */;
import UserSettings from "UserSettings" /* 2028 */;
import HelpdeskUtilsDefault from "HelpdeskUtils" /* 2115 */;
import _modDef2161 from "module_2161" /* 2161 */;
import TableRowGroup3 from "TableRowGroup" /* 6074 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import createStyles from "createStyles" /* 4890 */;
import size from "module_2" /* 2 */;

let adTopic, set;

let hasOwnProperty;
let metroRequire;
let obj3;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let obj = {};
obj[preloaded_user_settings.AdTopic.REAL_MONEY_GAMING] = _modDef2161.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_9 = ReactCompilerGating.isReactCompilerEnabled() ? ((adTopic) => {
  obj = adTopic(576);
  const cResult = obj.c(14);
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(2028).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  if (cResult[0] === adTopic) {
    let tmp4;
    let tmp8;
    let tmp9;
    let tmp11;
    if (cResult[1] === setting) {
      tmp4 = cResult[2];
    }
    if (cResult[3] !== adTopic) {
      const fn = function u(arg0) {
        const AdTopicOptOuts = UserSettings.AdTopicOptOuts;
        set = new Set(AdTopicOptOuts.getSetting());
        if (arg0) {
          set.delete(adTopic);
        } else {
          set.add(adTopic);
        }
        const AdTopicOptOuts2 = UserSettings.AdTopicOptOuts;
        const items = [...set];
        AdTopicOptOuts2.updateSetting(items);
      };
      cResult[3] = adTopic;
      cResult[4] = fn;
      tmp8 = fn;
    } else {
      tmp8 = cResult[4];
    }
    if (cResult[5] !== obj[adTopic]) {
      const intl = tmp(1126).intl;
      const stringResult = intl.string(obj[adTopic]);
      cResult[5] = obj[adTopic];
      cResult[6] = stringResult;
      tmp9 = stringResult;
    } else {
      tmp9 = cResult[6];
    }
    if (cResult[7] !== tmp4) {
      const intl2 = tmp(1126).intl;
      const string = intl2.string;
      const tmp13 = _modDef2161;
      const stringResult1 = string(tmp4 ? tmp13.B9PPxE : tmp13.Y9ZOp8);
      cResult[7] = tmp4;
      cResult[8] = stringResult1;
      tmp11 = stringResult1;
    } else {
      tmp11 = cResult[8];
    }
    if (cResult[9] === tmp8) {
      if (cResult[10] === tmp9) {
        if (cResult[11] === tmp11) {
          let tmp16;
          if (cResult[12] === !tmp4) {
            tmp16 = cResult[13];
          }
          return tmp16;
        }
      }
    }
    const obj2 = { label: tmp9, subLabel: tmp11, value: !tmp4, onValueChange: tmp8 };
    const tmp18 = closure_5(adTopic(6698).TableSwitchRow, obj2);
    cResult[9] = tmp8;
    cResult[10] = tmp9;
    cResult[11] = tmp11;
    cResult[12] = !tmp4;
    cResult[13] = tmp18;
    tmp16 = tmp18;
  }
  const hasItem = setting.includes(adTopic);
  cResult[0] = adTopic;
  cResult[1] = setting;
  cResult[2] = hasItem;
  tmp4 = hasItem;
}) : ((adTopic) => {
  let intl;
  let string;
  let tmp4;
  adTopic = adTopic.adTopic;
  let AdTopicOptOuts = adTopic(2028).AdTopicOptOuts;
  const setting = AdTopicOptOuts.useSetting();
  const hasItem = setting.includes(adTopic);
  const tmp2 = obj[adTopic];
  obj = {
    label: intl.string(tmp2),
    subLabel: string(hasItem ? tmp4.B9PPxE : tmp4.Y9ZOp8),
    value: !hasItem,
    onValueChange(arg0) {
      const AdTopicOptOuts = UserSettings.AdTopicOptOuts;
      set = new Set(AdTopicOptOuts.getSetting());
      if (arg0) {
        set.delete(adTopic);
      } else {
        set.add(adTopic);
      }
      const AdTopicOptOuts2 = UserSettings.AdTopicOptOuts;
      const items = [...set];
      AdTopicOptOuts2.updateSetting(items);
    }
  };
  const TableSwitchRow = adTopic(6698).TableSwitchRow;
  intl = adTopic(1126).intl;
  const intl2 = adTopic(1126).intl;
  string = intl2.string;
  tmp4 = _modDef2161;
  return closure_5(TableSwitchRow, obj);
});
let obj2 = { content: obj3 };
obj3 = { paddingHorizontal: nativeDefault.space.PX_16, paddingTop: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(obj2);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let format;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let prop;
  let tmp11;
  let tmp16;
  obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_10();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { hasIcons: false, description: format(prop, obj3) };
    const TableRowGroup = TableRowGroup3.TableRowGroup;
    const intl = intl3.intl;
    format = intl.format;
    obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
    prop = _modDef2161["z/MfaY"];
    obj4 = HelpdeskUtilsDefault;
    const tmp10 = hasOwnProperty(TableRowGroup, obj2);
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = {
      hasIcons: false,
      title: intl2.string(_modDef2161.OkmBx0),
      children: closure_8.map((adTopic) => {
          obj = { adTopic };
          return closure_1_5(closure_1_9, obj, adTopic);
        })
    };
    const TableRowGroup2 = TableRowGroup3.TableRowGroup;
    intl2 = intl3.intl;
    const tmp15 = hasOwnProperty(TableRowGroup2, obj5);
    cResult[1] = tmp15;
    tmp11 = tmp15;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== tmp4.content) {
    const obj6 = { style: tmp4.content, children: items };
    items = [first, tmp11];
    const tmp19 = metroRequire(View, obj6);
    cResult[2] = tmp4.content;
    cResult[3] = tmp19;
    tmp16 = tmp19;
  } else {
    tmp16 = cResult[3];
  }
  return tmp16;
}) : (() => {
  let format;
  let intl2;
  let items;
  let obj3;
  let obj4;
  let prop;
  obj = { style: closure_10().content, children: items };
  const obj2 = { hasIcons: false, description: format(prop, obj3) };
  const TableRowGroup = TableRowGroup3.TableRowGroup;
  const intl = intl3.intl;
  format = intl.format;
  obj3 = { helpdeskArticle: obj4.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
  prop = _modDef2161["z/MfaY"];
  obj4 = HelpdeskUtilsDefault;
  items = [hasOwnProperty(TableRowGroup, obj2), ];
  const obj5 = {
    hasIcons: false,
    title: intl2.string(_modDef2161.OkmBx0),
    children: closure_8.map((adTopic) => {
      obj = { adTopic };
      return closure_1_5(closure_1_9, obj, adTopic);
    })
  };
  const TableRowGroup2 = TableRowGroup3.TableRowGroup;
  intl2 = intl3.intl;
  items[1] = hasOwnProperty(TableRowGroup2, obj5);
  return metroRequire(View, obj);
});
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx");

export default tmp4;