// === Module 14399: RequestDataContent ===

// Module 14399 (RequestDataContent)
import util from "util" /* 1115 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5203 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 14400 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const constants = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
const createStyles = fn(4836);
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default noop.memo(() => {
  const tmp = closure_11();
  _require = require("useNavigation").useNavigation();
  [obj17.loading, importDefault] = noop.useState(false);
  let obj2 = {};
  let obj3 = { value: constants.USERS, label: null, checked: false };
  let intl = require("util").intl;
  obj3.label = intl.string(require("util").t["rfe/x8"]);
  obj2[constants.USERS] = obj3;
  let obj4 = { value: constants.ANALYTICS, label: null, checked: false };
  let intl2 = require("util").intl;
  obj4.label = intl2.string(require("util").t["j+d6RN"]);
  obj2[constants.ANALYTICS] = obj4;
  const obj5 = { value: constants.ACTIVITIES, label: null, checked: false };
  let intl3 = require("util").intl;
  obj5.label = intl3.string(require("util").t.KO88BS);
  obj2[constants.ACTIVITIES] = obj5;
  const obj6 = { value: constants.ADS, label: null, checked: false };
  let intl4 = require("util").intl;
  obj6.label = intl4.string(require("util").t.wb7QJ3);
  obj2[constants.ADS] = obj6;
  const obj7 = { value: constants.MESSAGES, label: null, checked: false };
  const intl5 = require("util").intl;
  obj7.label = intl5.string(require("util").t["0dO1t+"]);
  obj2[constants.MESSAGES] = obj7;
  const obj8 = { value: constants.GUILDS, label: null, checked: false };
  const intl6 = require("util").intl;
  obj8.label = intl6.string(require("util").t.JN9c36);
  obj2[constants.GUILDS] = obj8;
  const obj9 = { value: constants.ZENDESK, label: null, checked: false };
  const intl7 = require("util").intl;
  obj9.label = intl7.string(require("util").t.yaLeEB);
  obj2[constants.ZENDESK] = obj9;
  const tmp3 = _slicedToArray(noop.useState(obj2), 2);
  first = tmp3[0];
  _slicedToArray = tmp3[1];
  let keys = Object.keys(first);
  const obj10 = { style: tmp.content, children: null };
  const obj11 = { style: tmp.header, children: null };
  let mapped = keys.map((item, index, arg2) => {
    ({ label, checked } = first[item]);
    closure_0 = item;
    return closure_1_8(closure_0(first[8]).TableCheckboxRow, {
      label,
      checked,
      onPress: (checked) => {
        closure_1_3((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = {};
          const merged1 = Object.assign(arg0[checked]);
          obj2.checked = checked;
          obj[checked] = obj2;
          return obj;
        });
      },
      start: 0 === index,
      end: index === arg2.length - 1
    }, item);
  });
  const obj12 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl8 = require("util").intl;
  obj12.children = intl8.string(require("util").t.jxXMEz);
  const items = [closure_8(require("Text/Text").Text, obj12), ];
  const obj13 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = require("util").intl;
  const obj14 = { helpdeskArticle: null };
  let obj = require("useNavigation");
  obj14.helpdeskArticle = require("HelpdeskUtils").getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS);
  obj13.children = intl9.format(require("util").t.vtRhDA, obj14);
  items[1] = closure_8(require("Text/Text").Text, obj13);
  obj11.children = items;
  const items1 = [closure_9(closure_5, obj11), , ];
  const obj15 = require("HelpdeskUtils");
  items1[1] = closure_8(closure_5, { style: tmp.checkboxContainer, children: closure_8(require("TableRowGroup").TableRowGroup, { title: "", hasIcons: false, children: mapped }) });
  const obj17 = { text: null, onPress: null, loading: null };
  const intl10 = require("util").intl;
  obj17.text = intl10.string(require("util").t.NYgNg9);
  obj17.onPress = function onPress() {
    const keys = Object.keys(first);
    const found = keys.filter((item) => dependencyMap[item].checked);
    const mapped = found.map((item) => dependencyMap[item].value);
    if (0 !== mapped.length) {
      closure_1(true);
      const dataHarvest = DataHarvestActionCreators.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: null, body: null };
            const intl3 = closure_0(first[7]).intl;
            obj2.title = intl3.string(closure_0(first[7]).t.i2iul5);
            const intl4 = closure_0(first[7]).intl;
            obj2.body = intl4.string(closure_0(first[7]).t["6Nmv4i"]);
            closure_1(first[13]).show(obj2);
            closure_1_0.pop();
            const obj3 = closure_1(first[13]);
          }
        }
        const obj4 = { title: null, body: null };
        const intl = closure_0(first[7]).intl;
        obj4.title = intl.string(closure_0(first[7]).t.OjbtDm);
        const intl2 = closure_0(first[7]).intl;
        obj4.body = intl2.string(closure_0(first[7]).t["0F5Jyt"]);
        closure_1(first[13]).show(obj4);
        const obj = closure_1(first[13]);
      }, (message) => {
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        if (!message) {
          let message1;
          if (message != null) {
            const body = message.body;
            if (body != null) {
              message1 = body.message;
            }
          }
          message = message1;
        }
        if (!message) {
          const intl = closure_1_0(1115).intl;
          message = intl.string(closure_1_0(1115).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = closure_1_0(1115).intl;
        obj2.title = intl2.string(closure_1_0(1115).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5203).show(obj2);
        const obj = closure_1_1(5203);
      }).finally(() => closure_1_1(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: null, body: null };
            const intl3 = closure_0(first[7]).intl;
            obj2.title = intl3.string(closure_0(first[7]).t.i2iul5);
            const intl4 = closure_0(first[7]).intl;
            obj2.body = intl4.string(closure_0(first[7]).t["6Nmv4i"]);
            closure_1(first[13]).show(obj2);
            closure_1_0.pop();
            const obj3 = closure_1(first[13]);
          }
        }
        const obj4 = { title: null, body: null };
        const intl = closure_0(first[7]).intl;
        obj4.title = intl.string(closure_0(first[7]).t.OjbtDm);
        const intl2 = closure_0(first[7]).intl;
        obj4.body = intl2.string(closure_0(first[7]).t["0F5Jyt"]);
        closure_1(first[13]).show(obj4);
        const obj = closure_1(first[13]);
      }, (message) => {
        message = undefined;
        if (message != null) {
          message = message.message;
        }
        if (!message) {
          let message1;
          if (message != null) {
            const body = message.body;
            if (body != null) {
              message1 = body.message;
            }
          }
          message = message1;
        }
        if (!message) {
          const intl = closure_1_0(1115).intl;
          message = intl.string(closure_1_0(1115).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = closure_1_0(1115).intl;
        obj2.title = intl2.string(closure_1_0(1115).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5203).show(obj2);
        const obj = closure_1_1(5203);
      });
    } else {
      let obj3 = { title: null, body: null };
      let intl = util.intl;
      obj3.title = intl.string(util.t.OjbtDm);
      let intl2 = util.intl;
      obj3.body = intl2.string(util.t.W1Rw3D);
      AlertActionCreatorsDefault.show(obj3);
    }
  };
  items1[2] = closure_8(require("components/Button/Button").Button, obj17);
  obj10.children = items1;
  return closure_9(closure_6, obj10);
});