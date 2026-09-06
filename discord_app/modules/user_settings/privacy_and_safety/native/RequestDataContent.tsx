// === Module 14862: RequestDataContent ===

// Module 14862 (RequestDataContent)
import util from "util" /* 1114 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 4904 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 14863 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const HelpdeskArticles = fn(1074).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const constants = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
const createStyles = fn(4560);
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default noop.memo(() => {
  const tmp = closure_11();
  let obj = require("useNavigation");
  _require = obj.useNavigation();
  const tmp2 = _slicedToArray(noop.useState(false), 2);
  importDefault = tmp2[1];
  obj = {};
  obj = { value: constants.USERS, label: null, checked: false };
  let intl = require("util").intl;
  obj.label = intl.string(require("util").t["rfe/x8"]);
  obj[constants.USERS] = obj;
  const obj1 = { value: constants.ANALYTICS, label: null, checked: false };
  let intl2 = require("util").intl;
  obj1.label = intl2.string(require("util").t["j+d6RN"]);
  obj[constants.ANALYTICS] = obj1;
  let obj2 = { value: constants.ACTIVITIES, label: null, checked: false };
  let intl3 = require("util").intl;
  obj2.label = intl3.string(require("util").t.KO88BS);
  obj[constants.ACTIVITIES] = obj2;
  let obj3 = { value: constants.ADS, label: null, checked: false };
  let intl4 = require("util").intl;
  obj3.label = intl4.string(require("util").t.wb7QJ3);
  obj[constants.ADS] = obj3;
  const obj4 = { value: constants.MESSAGES, label: null, checked: false };
  const intl5 = require("util").intl;
  obj4.label = intl5.string(require("util").t["0dO1t+"]);
  obj[constants.MESSAGES] = obj4;
  const obj5 = { value: constants.GUILDS, label: null, checked: false };
  const intl6 = require("util").intl;
  obj5.label = intl6.string(require("util").t.JN9c36);
  obj[constants.GUILDS] = obj5;
  const obj6 = { value: constants.ZENDESK, label: null, checked: false };
  const intl7 = require("util").intl;
  obj6.label = intl7.string(require("util").t.yaLeEB);
  obj[constants.ZENDESK] = obj6;
  const tmp3 = _slicedToArray(noop.useState(obj), 2);
  first = tmp3[0];
  _slicedToArray = tmp3[1];
  let keys = Object.keys(first);
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.header, children: null };
  let mapped = keys.map((item, index, arg2) => {
    ({ label, checked } = first[item]);
    closure_0 = item;
    return closure_1_8(closure_0(first[8]).TableCheckboxRow, {
      label,
      checked,
      onPress: (checked) => {
        closure_1_3((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[checked]);
          obj.checked = checked;
          obj[checked] = obj;
          return obj;
        });
      },
      start: 0 === index,
      end: index === arg2.length - 1
    }, item);
  });
  const obj9 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl8 = require("util").intl;
  obj9.children = intl8.string(require("util").t.jxXMEz);
  const items = [closure_8(require("Text/Text").Text, obj9), ];
  const obj10 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = require("util").intl;
  const obj11 = { helpdeskArticle: require("HelpdeskUtils").getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
  obj10.children = intl9.format(require("util").t.vtRhDA, obj11);
  items[1] = closure_8(require("Text/Text").Text, obj10);
  obj8.children = items;
  const items1 = [closure_9(closure_5, obj8), , ];
  const obj15 = require("HelpdeskUtils");
  items1[1] = closure_8(closure_5, { style: tmp.checkboxContainer, children: closure_8(require("TableRowGroup").TableRowGroup, { title: "", hasIcons: false, children: mapped }) });
  const obj13 = { text: null, onPress: null, loading: null };
  const intl10 = require("util").intl;
  obj13.text = intl10.string(require("util").t.NYgNg9);
  obj13.onPress = function onPress() {
    const keys = Object.keys(first);
    const found = keys.filter((item) => dependencyMap[item].checked);
    const mapped = found.map((item) => dependencyMap[item].value);
    if (0 !== mapped.length) {
      closure_1(true);
      let obj = DataHarvestActionCreators;
      const dataHarvest = obj.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = { title: null, body: null };
            const intl3 = closure_0(first[7]).intl;
            obj.title = intl3.string(closure_0(first[7]).t.i2iul5);
            const intl4 = closure_0(first[7]).intl;
            obj.body = intl4.string(closure_0(first[7]).t["6Nmv4i"]);
            closure_1(first[13]).show(obj);
            closure_1_0.pop();
            const obj3 = closure_1(first[13]);
          }
        }
        closure_1(first[13]);
        obj = { title: null, body: null };
        const intl = closure_0(first[7]).intl;
        obj.title = intl.string(closure_0(first[7]).t.OjbtDm);
        const intl2 = closure_0(first[7]).intl;
        obj.body = intl2.string(closure_0(first[7]).t["0F5Jyt"]);
        obj.show(obj);
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
          const intl = closure_1_0(1114).intl;
          message = intl.string(closure_1_0(1114).t["0F5Jyt"]);
        }
        closure_1_1(4904);
        const obj = { title: null, body: null };
        const intl2 = closure_1_0(1114).intl;
        obj.title = intl2.string(closure_1_0(1114).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      }).finally(() => closure_1_1(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = { title: null, body: null };
            const intl3 = closure_0(first[7]).intl;
            obj.title = intl3.string(closure_0(first[7]).t.i2iul5);
            const intl4 = closure_0(first[7]).intl;
            obj.body = intl4.string(closure_0(first[7]).t["6Nmv4i"]);
            closure_1(first[13]).show(obj);
            closure_1_0.pop();
            const obj3 = closure_1(first[13]);
          }
        }
        closure_1(first[13]);
        obj = { title: null, body: null };
        const intl = closure_0(first[7]).intl;
        obj.title = intl.string(closure_0(first[7]).t.OjbtDm);
        const intl2 = closure_0(first[7]).intl;
        obj.body = intl2.string(closure_0(first[7]).t["0F5Jyt"]);
        obj.show(obj);
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
          const intl = closure_1_0(1114).intl;
          message = intl.string(closure_1_0(1114).t["0F5Jyt"]);
        }
        closure_1_1(4904);
        const obj = { title: null, body: null };
        const intl2 = closure_1_0(1114).intl;
        obj.title = intl2.string(closure_1_0(1114).t.OjbtDm);
        obj.body = message;
        obj.show(obj);
      });
    } else {
      obj = { title: null, body: null };
      let intl = util.intl;
      obj.title = intl.string(util.t.OjbtDm);
      let intl2 = util.intl;
      obj.body = intl2.string(util.t.W1Rw3D);
      AlertActionCreatorsDefault.show(obj);
    }
  };
  obj13.loading = tmp2[0];
  items1[2] = closure_8(require("components/Button/Button").Button, obj13);
  obj7.children = items1;
  return closure_9(closure_6, obj7);
});