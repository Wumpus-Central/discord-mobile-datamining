// === Module 14287: ? ===

// Module 14287
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import { HelpdeskArticles } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4668 */;

const require = arg1;
let c4 = importAllResult;
({ View: c5, ScrollView: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
let closure_11 = createCacheKey.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const memoResult = importAllResult.memo(() => {
  const tmp = callback4();
  let obj = _require(first[6]);
  _require = obj.useNavigation();
  const tmp2 = callback(importAllResult.useState(false), 2);
  importDefault = tmp2[1];
  obj = {};
  obj = { value: constants.USERS, label: null, checked: false };
  let intl = _require(first[7]).intl;
  obj[1] = intl.string(_require(first[7]).t["rfe/x8"]);
  obj[constants.USERS] = obj;
  obj1 = { value: constants.ANALYTICS, label: null, checked: false };
  let intl2 = _require(first[7]).intl;
  obj1[1] = intl2.string(_require(first[7]).t["j+d6RN"]);
  obj[constants.ANALYTICS] = obj1;
  let obj2 = { value: constants.ACTIVITIES, label: null, checked: false };
  let intl3 = _require(first[7]).intl;
  obj2[1] = intl3.string(_require(first[7]).t.KO88BS);
  obj[constants.ACTIVITIES] = obj2;
  let obj3 = { value: constants.ADS, label: null, checked: false };
  let intl4 = _require(first[7]).intl;
  obj3[1] = intl4.string(_require(first[7]).t.wb7QJ3);
  obj[constants.ADS] = obj3;
  const obj4 = { value: constants.MESSAGES, label: null, checked: false };
  const intl5 = _require(first[7]).intl;
  obj4[1] = intl5.string(_require(first[7]).t["0dO1t+"]);
  obj[constants.MESSAGES] = obj4;
  const obj5 = { value: constants.GUILDS, label: null, checked: false };
  const intl6 = _require(first[7]).intl;
  obj5[1] = intl6.string(_require(first[7]).t.JN9c36);
  obj[constants.GUILDS] = obj5;
  const obj6 = { value: constants.ZENDESK, label: null, checked: false };
  const intl7 = _require(first[7]).intl;
  obj6[1] = intl7.string(_require(first[7]).t.yaLeEB);
  obj[constants.ZENDESK] = obj6;
  const tmp3 = callback(importAllResult.useState(obj), 2);
  first = tmp3[0];
  callback = tmp3[1];
  let keys = Object.keys(first);
  const obj7 = { style: tmp.content, children: null };
  const obj8 = { style: tmp.header, children: null };
  let mapped = keys.map((arg0, arg1, arg2) => {
    ({ label, checked } = first[arg0]);
    const callback = arg0;
    return closure_1_8(callback(first[8]).TableCheckboxRow, {
      label,
      checked,
      onPress: (arg0) => {
        closure_0 = arg0;
        closure_1_3((arg0) => {
          let obj = {};
          const merged = Object.assign(arg0);
          obj = {};
          const merged1 = Object.assign(arg0[closure_0]);
          obj.checked = closure_0;
          obj[closure_0] = obj;
          return obj;
        });
      },
      start: 0 === arg1,
      end: arg1 === arg2.length - 1
    }, arg0);
  });
  const obj9 = { style: tmp.title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl8 = _require(first[7]).intl;
  obj9[3] = intl8.string(_require(first[7]).t.jxXMEz);
  const items = [callback2(_require(first[9]).Text, obj9), ];
  const obj10 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl9 = _require(first[7]).intl;
  const obj11 = { helpdeskArticle: importDefault(first[10]).getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
  obj10[3] = intl9.format(_require(first[7]).t.vtRhDA, obj11);
  items[1] = callback2(_require(first[9]).Text, obj10);
  obj8[1] = items;
  const items1 = [callback3(closure_5, obj8), , ];
  const obj15 = importDefault(first[10]);
  items1[1] = callback2(closure_5, { style: tmp.checkboxContainer, children: callback2(_require(first[11]).TableRowGroup, { title: "", hasIcons: false, children: mapped }) });
  const obj13 = { text: null, onPress: null, loading: null };
  const intl10 = _require(first[7]).intl;
  obj13[0] = intl10.string(_require(first[7]).t.NYgNg9);
  obj13[1] = function onPress() {
    const keys = Object.keys(first);
    const found = keys.filter((arg0) => dependencyMap[arg0].checked);
    const mapped = found.map((arg0) => dependencyMap[arg0].value);
    if (0 !== mapped.length) {
      callback2(true);
      let obj = callback(first[14]);
      const dataHarvest = obj.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = { title: null, body: null };
            const intl3 = closure_1_0(closure_1_2[7]).intl;
            obj[0] = intl3.string(closure_1_0(closure_1_2[7]).t.i2iul5);
            const intl4 = closure_1_0(closure_1_2[7]).intl;
            obj[1] = intl4.string(closure_1_0(closure_1_2[7]).t["6Nmv4i"]);
            closure_1_1(closure_1_2[13]).show(obj);
            arr = arr.pop();
            const obj3 = closure_1_1(closure_1_2[13]);
          }
        }
        obj = closure_1_1(closure_1_2[13]);
        obj = { title: null, body: null };
        const intl = closure_1_0(closure_1_2[7]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_2[7]).t.OjbtDm);
        const intl2 = closure_1_0(closure_1_2[7]).intl;
        obj[1] = intl2.string(closure_1_0(closure_1_2[7]).t["0F5Jyt"]);
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
          const intl = arr(1236).intl;
          message = intl.string(arr(1236).t["0F5Jyt"]);
        }
        let obj = callback(4832);
        obj = { title: null, body: null };
        const intl2 = arr(1236).intl;
        obj[0] = intl2.string(arr(1236).t.OjbtDm);
        obj[1] = message;
        obj.show(obj);
      }).finally(() => callback(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            let obj = { title: null, body: null };
            const intl3 = closure_1_0(closure_1_2[7]).intl;
            obj[0] = intl3.string(closure_1_0(closure_1_2[7]).t.i2iul5);
            const intl4 = closure_1_0(closure_1_2[7]).intl;
            obj[1] = intl4.string(closure_1_0(closure_1_2[7]).t["6Nmv4i"]);
            closure_1_1(closure_1_2[13]).show(obj);
            arr = arr.pop();
            const obj3 = closure_1_1(closure_1_2[13]);
          }
        }
        obj = closure_1_1(closure_1_2[13]);
        obj = { title: null, body: null };
        const intl = closure_1_0(closure_1_2[7]).intl;
        obj[0] = intl.string(closure_1_0(closure_1_2[7]).t.OjbtDm);
        const intl2 = closure_1_0(closure_1_2[7]).intl;
        obj[1] = intl2.string(closure_1_0(closure_1_2[7]).t["0F5Jyt"]);
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
          const intl = arr(1236).intl;
          message = intl.string(arr(1236).t["0F5Jyt"]);
        }
        let obj = callback(4832);
        obj = { title: null, body: null };
        const intl2 = arr(1236).intl;
        obj[0] = intl2.string(arr(1236).t.OjbtDm);
        obj[1] = message;
        obj.show(obj);
      });
    } else {
      obj = { title: null, body: null };
      let intl = callback(first[7]).intl;
      obj[0] = intl.string(callback(first[7]).t.OjbtDm);
      let intl2 = callback(first[7]).intl;
      obj[1] = intl2.string(callback(first[7]).t.W1Rw3D);
      callback2(first[13]).show(obj);
      const obj2 = callback2(first[13]);
    }
  };
  obj13[2] = tmp2[0];
  items1[2] = callback2(_require(first[12]).Button, obj13);
  obj7[1] = items1;
  return callback3(closure_6, obj7);
});
const result = require("set").fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;