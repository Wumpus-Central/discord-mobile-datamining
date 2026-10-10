// === Module 15118: RequestDataContent ===

// Module 15118 (RequestDataContent)
import util from "util" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5299 */;
import TableCheckboxRow from "TableCheckboxRow" /* 6176 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 15119 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ View: hasOwnProperty, ScrollView: metroRequire } = get_ActivityIndicator);
const HelpdeskArticles = fn(1085).HelpdeskArticles;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const constants = { USERS: "Account", MESSAGES: "Messages", GUILDS: "Servers", ANALYTICS: "Analytics", ACTIVITIES: "Activities", ADS: "Ads", ZENDESK: "Zendesk" };
const createStyles = fn(5092);
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function RequestDataContent() {
  const cResult = navigation(first1[7]).c(37);
  const tmp4 = closure_11();
  let obj = navigation(first1[7]);
  navigation = navigation(first1[8]).useNavigation();
  let obj2 = navigation(first1[8]);
  let obj3 = noop;
  const tmp6 = _slicedToArray;
  [tmp8, importDefault] = noop.useState(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    let obj4 = { value: constants.USERS, label: null, checked: false };
    let intl = tmp(tmp2[9]).intl;
    obj4.label = intl.string(tmp(tmp2[9]).t["rfe/x8"]);
    cResult[0] = obj4;
    let first = obj4;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj5 = { value: constants.ANALYTICS, label: null, checked: false };
    let intl2 = tmp(tmp2[9]).intl;
    obj5.label = intl2.string(tmp(tmp2[9]).t["j+d6RN"]);
    cResult[1] = obj5;
    let tmp11 = obj5;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { value: constants.ACTIVITIES, label: null, checked: false };
    let intl3 = tmp(tmp2[9]).intl;
    obj6.label = intl3.string(tmp(tmp2[9]).t.KO88BS);
    cResult[2] = obj6;
    let tmp13 = obj6;
  } else {
    tmp13 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { value: constants.ADS, label: null, checked: false };
    let intl4 = tmp(tmp2[9]).intl;
    obj7.label = intl4.string(tmp(tmp2[9]).t.wb7QJ3);
    cResult[3] = obj7;
    let tmp15 = obj7;
  } else {
    tmp15 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { value: constants.MESSAGES, label: null, checked: false };
    const intl5 = tmp(tmp2[9]).intl;
    obj8.label = intl5.string(tmp(tmp2[9]).t["0dO1t+"]);
    cResult[4] = obj8;
    let tmp17 = obj8;
  } else {
    tmp17 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { value: constants.GUILDS, label: null, checked: false };
    const intl6 = tmp(tmp2[9]).intl;
    obj9.label = intl6.string(tmp(tmp2[9]).t.JN9c36);
    cResult[5] = obj9;
    let tmp19 = obj9;
  } else {
    tmp19 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {};
    obj10[constants.USERS] = first;
    obj10[constants.ANALYTICS] = tmp11;
    obj10[constants.ACTIVITIES] = tmp13;
    obj10[constants.ADS] = tmp15;
    obj10[constants.MESSAGES] = tmp17;
    obj10[constants.GUILDS] = tmp19;
    const obj12 = { value: null, label: null, checked: false };
    ({ ZENDESK: obj11.value, ZENDESK } = constants);
    const intl7 = tmp(tmp2[9]).intl;
    obj12.label = intl7.string(tmp(tmp2[9]).t.yaLeEB);
    obj10[ZENDESK] = obj12;
    cResult[6] = obj10;
    let tmp21 = obj10;
  } else {
    tmp21 = cResult[6];
  }
  const tmp6Result = tmp6(obj3.useState(tmp21), 2);
  first1 = tmp6Result[0];
  _slicedToArray = tmp6Result[1];
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    function handleCheckboxChange(arg0) {
      closure_0 = arg0;
      return (checked) => {
        closure_1_3((arg0) => {
          const obj = {};
          const merged = Object.assign(arg0);
          const obj2 = {};
          const merged1 = Object.assign(arg0[checked]);
          obj2.checked = checked;
          obj[checked] = obj2;
          return obj;
        });
      };
    }
    cResult[7] = handleCheckboxChange;
    let tmp25 = handleCheckboxChange;
  } else {
    tmp25 = cResult[7];
  }
  noop = tmp25;
  if (cResult[8] === first1) {
    if (cResult[9] === navigation) {
      let tmp26 = cResult[10];
    }
    if (cResult[11] !== first1) {
      const _Object = Object;
      let keys = Object.keys(first1);
      let mapped = keys.map((item, index, arg2) => {
        ({ label, checked } = first1[item]);
        return closure_2_8(TableCheckboxRow.TableCheckboxRow, { label, checked, onPress: closure_4(item), start: 0 === index, end: index === arg2.length - 1 }, item);
      });
      cResult[11] = first1;
      cResult[12] = mapped;
      let tmp27 = mapped;
    } else {
      tmp27 = cResult[12];
    }
    const _Symbol = Symbol;
    ({ content, header, title } = tmp4);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      const intl8 = tmp(tmp2[9]).intl;
      const stringResult = intl8.string(tmp(tmp2[9]).t.jxXMEz);
      cResult[13] = stringResult;
      let tmp29 = stringResult;
    } else {
      tmp29 = cResult[13];
    }
    if (cResult[14] !== tmp4.title) {
      const obj13 = { style: title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp29 };
      const tmp33 = closure_8(tmp(tmp2[13]).Text, obj13);
      cResult[14] = tmp4.title;
      cResult[15] = tmp33;
      let tmp31 = tmp33;
    } else {
      tmp31 = cResult[15];
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      const intl9 = tmp(tmp2[9]).intl;
      const obj15 = { helpdeskArticle: require("HelpdeskUtils").getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
      const formatResult = intl9.format(tmp(tmp2[9]).t.vtRhDA, obj15);
      cResult[16] = formatResult;
      let tmp34 = formatResult;
      const obj14 = require("HelpdeskUtils");
    } else {
      tmp34 = cResult[16];
    }
    if (cResult[17] !== tmp4.description) {
      const obj16 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp34 };
      const tmp40 = closure_8(tmp(tmp2[13]).Text, obj16);
      cResult[17] = tmp4.description;
      cResult[18] = tmp40;
      let tmp38 = tmp40;
    } else {
      tmp38 = cResult[18];
    }
    if (cResult[19] === tmp4.header) {
      if (cResult[20] === tmp31) {
        if (cResult[21] === tmp38) {
          let tmp41 = cResult[22];
        }
        if (cResult[23] !== tmp27) {
          const obj17 = { title: "", hasIcons: false, children: tmp27 };
          const tmp47 = closure_8(tmp(tmp2[15]).TableRowGroup, obj17);
          cResult[23] = tmp27;
          cResult[24] = tmp47;
          let tmp45 = tmp47;
        } else {
          tmp45 = cResult[24];
        }
        if (cResult[25] === tmp4.checkboxContainer) {
          if (cResult[26] === tmp45) {
            let tmp48 = cResult[27];
          }
          const _Symbol3 = Symbol;
          if (cResult[28] === Symbol.for("react.memo_cache_sentinel")) {
            const intl10 = tmp(tmp2[9]).intl;
            const stringResult1 = intl10.string(tmp(tmp2[9]).t.NYgNg9);
            cResult[28] = stringResult1;
            let tmp52 = stringResult1;
          } else {
            tmp52 = cResult[28];
          }
          if (cResult[29] === tmp26) {
            if (cResult[30] === tmp8) {
              let tmp54 = cResult[31];
            }
            if (cResult[32] === tmp4.content) {
              if (cResult[33] === tmp41) {
                if (cResult[34] === tmp48) {
                  if (cResult[35] === tmp54) {
                    let tmp57 = cResult[36];
                  }
                  return tmp57;
                }
              }
            }
            const obj18 = { style: content, children: null };
            const items = [tmp41, tmp48, tmp54];
            obj18.children = items;
            const tmp60 = closure_9(closure_6, obj18);
            cResult[32] = tmp4.content;
            cResult[33] = tmp41;
            cResult[34] = tmp48;
            cResult[35] = tmp54;
            cResult[36] = tmp60;
            tmp57 = tmp60;
          }
          const obj19 = { text: tmp52, onPress: tmp26, loading: tmp8 };
          const tmp56 = closure_8(tmp(tmp2[16]).Button, obj19);
          cResult[29] = tmp26;
          cResult[30] = tmp8;
          cResult[31] = tmp56;
          tmp54 = tmp56;
        }
        const obj20 = { style: tmp4.checkboxContainer, children: tmp45 };
        const tmp51 = closure_8(closure_5, obj20);
        cResult[25] = tmp4.checkboxContainer;
        cResult[26] = tmp45;
        cResult[27] = tmp51;
        tmp48 = tmp51;
      }
    }
    const obj36 = { style: header, children: null };
    const items1 = [tmp31, tmp38];
    obj36.children = items1;
    const tmp44 = closure_9(closure_5, obj36);
    cResult[19] = tmp4.header;
    cResult[20] = tmp31;
    cResult[21] = tmp38;
    cResult[22] = tmp44;
    tmp41 = tmp44;
  }
  function handleRequestData() {
    const keys = Object.keys(first1);
    const found = keys.filter((item) => dependencyMap[item].checked);
    const mapped = found.map((item) => dependencyMap[item].value);
    if (0 !== mapped.length) {
      closure_1_1(true);
      const dataHarvest = DataHarvestActionCreators.requestDataHarvest(mapped);
      dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: null, body: null };
            const intl3 = navigation(first1[9]).intl;
            obj2.title = intl3.string(navigation(first1[9]).t.i2iul5);
            const intl4 = navigation(first1[9]).intl;
            obj2.body = intl4.string(navigation(first1[9]).t["6Nmv4i"]);
            require("AlertActionCreators").show(obj2);
            closure_1_0.pop();
            const obj3 = require("AlertActionCreators");
          }
        }
        const obj4 = { title: null, body: null };
        const intl = navigation(first1[9]).intl;
        obj4.title = intl.string(navigation(first1[9]).t.OjbtDm);
        const intl2 = navigation(first1[9]).intl;
        obj4.body = intl2.string(navigation(first1[9]).t["0F5Jyt"]);
        require("AlertActionCreators").show(obj4);
        const obj = require("AlertActionCreators");
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
          const intl = navigation(1126).intl;
          message = intl.string(navigation(1126).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = navigation(1126).intl;
        obj2.title = intl2.string(navigation(1126).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5299).show(obj2);
        const obj = closure_1_1(5299);
      }).finally(() => closure_1_1(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: null, body: null };
            const intl3 = navigation(first1[9]).intl;
            obj2.title = intl3.string(navigation(first1[9]).t.i2iul5);
            const intl4 = navigation(first1[9]).intl;
            obj2.body = intl4.string(navigation(first1[9]).t["6Nmv4i"]);
            require("AlertActionCreators").show(obj2);
            closure_1_0.pop();
            const obj3 = require("AlertActionCreators");
          }
        }
        const obj4 = { title: null, body: null };
        const intl = navigation(first1[9]).intl;
        obj4.title = intl.string(navigation(first1[9]).t.OjbtDm);
        const intl2 = navigation(first1[9]).intl;
        obj4.body = intl2.string(navigation(first1[9]).t["0F5Jyt"]);
        require("AlertActionCreators").show(obj4);
        const obj = require("AlertActionCreators");
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
          const intl = navigation(1126).intl;
          message = intl.string(navigation(1126).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = navigation(1126).intl;
        obj2.title = intl2.string(navigation(1126).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5299).show(obj2);
        const obj = closure_1_1(5299);
      });
    } else {
      let obj3 = { title: null, body: null };
      let intl = util.intl;
      obj3.title = intl.string(util.t.OjbtDm);
      let intl2 = util.intl;
      obj3.body = intl2.string(util.t.W1Rw3D);
      AlertActionCreatorsDefault.show(obj3);
    }
  }
  cResult[8] = first1;
  cResult[9] = navigation;
  cResult[10] = handleRequestData;
  tmp26 = handleRequestData;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
}) : (function RequestDataContent() {
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
    return closure_1_8(closure_0(first[12]).TableCheckboxRow, {
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
  obj17.onPress = function handleRequestData() {
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
            const intl3 = closure_0(first[9]).intl;
            obj2.title = intl3.string(closure_0(first[9]).t.i2iul5);
            const intl4 = closure_0(first[9]).intl;
            obj2.body = intl4.string(closure_0(first[9]).t["6Nmv4i"]);
            closure_1(first[10]).show(obj2);
            closure_1_0.pop();
            const obj3 = closure_1(first[10]);
          }
        }
        const obj4 = { title: null, body: null };
        const intl = closure_0(first[9]).intl;
        obj4.title = intl.string(closure_0(first[9]).t.OjbtDm);
        const intl2 = closure_0(first[9]).intl;
        obj4.body = intl2.string(closure_0(first[9]).t["0F5Jyt"]);
        closure_1(first[10]).show(obj4);
        const obj = closure_1(first[10]);
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
          const intl = closure_1_0(1126).intl;
          message = intl.string(closure_1_0(1126).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = closure_1_0(1126).intl;
        obj2.title = intl2.string(closure_1_0(1126).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5299).show(obj2);
        const obj = closure_1_1(5299);
      }).finally(() => closure_1_1(false));
      const nextPromise = dataHarvest.then((body) => {
        if (null != body) {
          if (null != body.body) {
            const obj2 = { title: null, body: null };
            const intl3 = closure_0(first[9]).intl;
            obj2.title = intl3.string(closure_0(first[9]).t.i2iul5);
            const intl4 = closure_0(first[9]).intl;
            obj2.body = intl4.string(closure_0(first[9]).t["6Nmv4i"]);
            closure_1(first[10]).show(obj2);
            closure_1_0.pop();
            const obj3 = closure_1(first[10]);
          }
        }
        const obj4 = { title: null, body: null };
        const intl = closure_0(first[9]).intl;
        obj4.title = intl.string(closure_0(first[9]).t.OjbtDm);
        const intl2 = closure_0(first[9]).intl;
        obj4.body = intl2.string(closure_0(first[9]).t["0F5Jyt"]);
        closure_1(first[10]).show(obj4);
        const obj = closure_1(first[10]);
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
          const intl = closure_1_0(1126).intl;
          message = intl.string(closure_1_0(1126).t["0F5Jyt"]);
        }
        const obj2 = { title: null, body: null };
        const intl2 = closure_1_0(1126).intl;
        obj2.title = intl2.string(closure_1_0(1126).t.OjbtDm);
        obj2.body = message;
        closure_1_1(5299).show(obj2);
        const obj = closure_1_1(5299);
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
}));