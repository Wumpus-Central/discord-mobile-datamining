// discord_app/modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../Constants.tsx";
import intl3 from "../../../../intl/index.native.tsx";
import preloaded_user_settings from "../../../../../discord_common/js/packages/protos/discord_protos/discord_users/v1/preloaded_user_settings.tsx";
import UserSettings from "../../UserSettings.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import _modDef2161 from "../../../ads/SponsoredContentPreferences.messages.js";
import TableRowGroup3 from "../../../../design/components/TableRow/native/TableRowGroup.native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import ReactCompilerGating_mod from "../../../react_compiler/ReactCompilerGating.tsx";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

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
let closure_9 = ReactCompilerGating.isReactCompilerEnabled()
  ? (adTopic) => {
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
    }
  : (adTopic) => {
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
        },
      };
      const TableSwitchRow = adTopic(6698).TableSwitchRow;
      intl = adTopic(1126).intl;
      const intl2 = adTopic(1126).intl;
      string = intl2.string;
      tmp4 = _modDef2161;
      return closure_5(TableSwitchRow, obj);
    };
let obj2 = { content: obj3 };
obj3 = {
  paddingHorizontal: nativeDefault.space.PX_16,
  paddingTop: nativeDefault.space.PX_16,
  gap: nativeDefault.space.PX_16,
};
let closure_10 = createStyles.createStyles(obj2);
ReactCompilerGating = ReactCompilerGating_mod;
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
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
          }),
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
    }
  : () => {
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
      items = [hasOwnProperty(TableRowGroup, obj2)];
      const obj5 = {
        hasIcons: false,
        title: intl2.string(_modDef2161.OkmBx0),
        children: closure_8.map((adTopic) => {
          obj = { adTopic };
          return closure_1_5(closure_1_9, obj, adTopic);
        }),
      };
      const TableRowGroup2 = TableRowGroup3.TableRowGroup;
      intl2 = intl3.intl;
      items[1] = hasOwnProperty(TableRowGroup2, obj5);
      return metroRequire(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/user_settings/privacy_and_safety/native/ManageSponsoredContentScreen.tsx",
);

export default tmp4;
