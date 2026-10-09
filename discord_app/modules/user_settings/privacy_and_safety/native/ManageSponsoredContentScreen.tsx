// discord_app/modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import UserSettings from "../../UserSettings.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef2173 from "../../../ads/SponsoredContentPreferences.messages.js";
import TableRowGroup from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
let obj = {};
obj[fn(1209).AdTopic.REAL_MONEY_GAMING] = _modDef2173.pmIitA;
const keys = Object.keys(obj);
let closure_8 = keys.map(Number);
let ReactCompilerGating = fn(558);
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? function AdTopicRow(adTopic) {
      obj = adTopic(576);
      const cResult = obj.c(14);
      adTopic = adTopic.adTopic;
      let AdTopicOptOuts = adTopic(2041).AdTopicOptOuts;
      const setting = AdTopicOptOuts.useSetting();
      if (cResult[0] === adTopic) {
        if (cResult[1] === setting) {
          let tmp4 = cResult[2];
        }
        if (cResult[3] !== adTopic) {
          function onValueChange(arg0) {
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
          }
          cResult[3] = adTopic;
          cResult[4] = onValueChange;
          let tmp8 = onValueChange;
        } else {
          tmp8 = cResult[4];
        }
        if (cResult[5] !== obj[adTopic]) {
          const intl = tmp(1126).intl;
          const stringResult = intl.string(tmp7);
          cResult[5] = tmp7;
          cResult[6] = stringResult;
          let tmp9 = stringResult;
        } else {
          tmp9 = cResult[6];
        }
        if (cResult[7] !== tmp4) {
          const intl2 = tmp(1126).intl;
          const tmp13 = _modDef2173;
          const stringResult1 = intl2.string(tmp4 ? tmp13.B9PPxE : tmp13.Y9ZOp8);
          cResult[7] = tmp4;
          cResult[8] = stringResult1;
        } else {
          if (cResult[9] === tmp8) {
            if (cResult[10] === tmp9) {
              if (cResult[11] === tmp11) {
                if (cResult[12] === tmp16) {
                  let tmp17 = cResult[13];
                }
                return tmp17;
              }
            }
          }
          const obj2 = { label: tmp9, subLabel: cResult[8], value: !tmp4, onValueChange: tmp8 };
          const tmp19 = closure_5(tmp(6889).TableSwitchRow, obj2);
          cResult[9] = tmp8;
          cResult[10] = tmp9;
          cResult[11] = cResult[8];
          cResult[12] = !tmp4;
          cResult[13] = tmp19;
          tmp17 = tmp19;
        }
      }
      const hasItem = setting.includes(adTopic);
      cResult[0] = adTopic;
      cResult[1] = setting;
      cResult[2] = hasItem;
      tmp4 = hasItem;
    }
  : function AdTopicRow(adTopic) {
      adTopic = adTopic.adTopic;
      let AdTopicOptOuts = adTopic(2041).AdTopicOptOuts;
      const setting = AdTopicOptOuts.useSetting();
      const hasItem = setting.includes(adTopic);
      obj = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl = adTopic(1126).intl;
      obj.label = intl.string(obj[adTopic]);
      const intl2 = adTopic(1126).intl;
      const tmp3 = _modDef2173;
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
      return closure_5(adTopic(6889).TableSwitchRow, obj);
    };
const createStyles = fn(5091);
let obj4 = {
  content: {
    paddingHorizontal: nativeDefault.space.PX_16,
    paddingTop: nativeDefault.space.PX_16,
    gap: nativeDefault.space.PX_16,
  },
};
let closure_10 = createStyles.createStyles(obj4);
ReactCompilerGating = fn(558);
let obj5 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx",
);

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ManageSponsoredContentScreen() {
      const cResult = c.c(4);
      const tmp4 = closure_10();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { hasIcons: false, description: null };
        const intl = util.intl;
        const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
        obj2.description = intl.format(_modDef2173["z/MfaY"], obj3);
        const tmp9 = hasOwnProperty(TableRowGroup.TableRowGroup, obj2);
        cResult[0] = tmp9;
        let first = tmp9;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj5 = { hasIcons: false, title: null, children: null };
        const intl2 = util.intl;
        obj5.title = intl2.string(_modDef2173.OkmBx0);
        obj5.children = closure_8.map((adTopic) => closure_1_5(closure_1_9, { adTopic }, adTopic));
        const tmp14 = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
        cResult[1] = tmp14;
        let tmp10 = tmp14;
      } else {
        tmp10 = cResult[1];
      }
      if (cResult[2] !== tmp4.content) {
        const obj6 = { style: tmp4.content, children: null };
        const items = [first, tmp10];
        obj6.children = items;
        const tmp18 = timestampProducer(View, obj6);
        cResult[2] = tmp4.content;
        cResult[3] = tmp18;
        let tmp15 = tmp18;
      } else {
        tmp15 = cResult[3];
      }
      return tmp15;
    }
  : function ManageSponsoredContentScreen() {
      obj = { style: closure_10().content, children: null };
      const obj2 = { hasIcons: false, description: null };
      const intl = util.intl;
      const obj3 = { helpdeskArticle: HelpdeskUtilsDefault.getArticleURL(HelpdeskArticles.MANAGE_SPONSORED_CONTENT) };
      obj2.description = intl.format(_modDef2173["z/MfaY"], obj3);
      const items = [hasOwnProperty(TableRowGroup.TableRowGroup, obj2)];
      const obj5 = { hasIcons: false, title: null, children: null };
      const intl2 = util.intl;
      obj5.title = intl2.string(_modDef2173.OkmBx0);
      obj5.children = closure_8.map((adTopic) => closure_1_5(closure_1_9, { adTopic }, adTopic));
      items[1] = hasOwnProperty(TableRowGroup.TableRowGroup, obj5);
      obj.children = items;
      return timestampProducer(View, obj);
    };
