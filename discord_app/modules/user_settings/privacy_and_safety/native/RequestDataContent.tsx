// === Module 14666: RequestDataContent ===

// Module 14666 (RequestDataContent)
import util from "util" /* 1126 */;
import AlertActionCreatorsDefault from "AlertActionCreators" /* 5707 */;
import TableCheckboxRow from "TableCheckboxRow" /* 5990 */;
import DataHarvestActionCreators from "DataHarvestActionCreators" /* 14667 */;
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
const createStyles = fn(4890);
let closure_11 = createStyles.createStyles({ content: { padding: 16 }, header: { marginBottom: 8 }, title: { marginBottom: 8 }, description: { marginBottom: 0 }, checkboxContainer: { marginBottom: 16 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  const cResult = navigation(first1[7]).c(37);
  const tmp4 = closure_11();
  let obj = navigation(first1[7]);
  navigation = navigation(first1[8]).useNavigation();
  let obj2 = navigation(first1[8]);
  let obj3 = noop;
  const tmp6 = _slicedToArray;
  [r10021, importDefault] = noop.useState(false);
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
    let tmp10 = obj5;
  } else {
    tmp10 = cResult[1];
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { value: constants.ACTIVITIES, label: null, checked: false };
    let intl3 = tmp(tmp2[9]).intl;
    obj6.label = intl3.string(tmp(tmp2[9]).t.KO88BS);
    cResult[2] = obj6;
    let tmp12 = obj6;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const obj7 = { value: constants.ADS, label: null, checked: false };
    let intl4 = tmp(tmp2[9]).intl;
    obj7.label = intl4.string(tmp(tmp2[9]).t.wb7QJ3);
    cResult[3] = obj7;
    let tmp14 = obj7;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj8 = { value: constants.MESSAGES, label: null, checked: false };
    const intl5 = tmp(tmp2[9]).intl;
    obj8.label = intl5.string(tmp(tmp2[9]).t["0dO1t+"]);
    cResult[4] = obj8;
    let tmp16 = obj8;
  } else {
    tmp16 = cResult[4];
  }
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const obj9 = { value: constants.GUILDS, label: null, checked: false };
    const intl6 = tmp(tmp2[9]).intl;
    obj9.label = intl6.string(tmp(tmp2[9]).t.JN9c36);
    cResult[5] = obj9;
    let tmp18 = obj9;
  } else {
    tmp18 = cResult[5];
  }
  if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
    const obj10 = {};
    obj10[constants.USERS] = first;
    obj10[constants.ANALYTICS] = tmp10;
    obj10[constants.ACTIVITIES] = tmp12;
    obj10[constants.ADS] = tmp14;
    obj10[constants.MESSAGES] = tmp16;
    obj10[constants.GUILDS] = tmp18;
    const obj13 = { value: null, label: null, checked: false };
    ({ ZENDESK: obj11.value, ZENDESK } = constants);
    const intl7 = tmp(tmp2[9]).intl;
    obj13.label = intl7.string(tmp(tmp2[9]).t.yaLeEB);
    obj10[ZENDESK] = obj13;
    cResult[6] = obj10;
    let tmp20 = obj10;
  } else {
    tmp20 = cResult[6];
  }
  const tmp6Result = tmp6(obj3.useState(tmp20), 2);
  first1 = tmp6Result[0];
  _slicedToArray = tmp6Result[1];
  if (cResult[7] === Symbol.for("react.memo_cache_sentinel")) {
    class C {
      constructor(arg0) {
        closure_0 = arg0;
        return (checked) => {
          closure_1_3(() => { ... });
        };
      }
    }
    cResult[7] = C;
  } else {
    class C {
      constructor(arg0) {
        closure_0 = arg0;
        return (checked) => {
          closure_1_3(() => { ... });
        };
      }
    }
  }
  noop = C;
  if (cResult[8] === first1) {
    class C {
      constructor(arg0) {
        closure_0 = arg0;
        return (checked) => {
          closure_1_3(() => { ... });
        };
      }
    }
    if (cResult[11] !== first1) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
      let keys = Object.keys(first1);
      let mapped = keys.map((item, index, arg2) => {
        ({ label, checked } = first1[item]);
        return closure_2_8(TableCheckboxRow.TableCheckboxRow, { label, checked, onPress: C(item), start: 0 === index, end: index === arg2.length - 1 }, item);
      });
      cResult[11] = first1;
      cResult[12] = mapped;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    const _Symbol = Symbol;
    ({ content, header, title } = tmp4);
    if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
      const stringResult = obj12.string(tmp(tmp2[9]).t.jxXMEz);
      cResult[13] = stringResult;
      const tmp27 = stringResult;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    if (cResult[14] !== tmp4.title) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
      const obj15 = { style: title, variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: tmp27 };
      const tmp30 = closure_8(tmp(tmp2[13]).Text, obj15);
      cResult[14] = tmp4.title;
      cResult[15] = tmp30;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    const _Symbol2 = Symbol;
    if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
      const obj17 = { helpdeskArticle: require("HelpdeskUtils").getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
      const formatResult = obj14.format(tmp(tmp2[9]).t.vtRhDA, obj17);
      cResult[16] = formatResult;
      const obj16 = require("HelpdeskUtils");
      const tmp31 = formatResult;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    if (cResult[17] !== tmp4.description) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
      const obj18 = { style: tmp4.description, variant: "text-sm/medium", color: "text-default", children: tmp31 };
      const tmp36 = closure_8(tmp(tmp2[13]).Text, obj18);
      cResult[17] = tmp4.description;
      cResult[18] = tmp36;
    } else {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    if (cResult[19] === tmp4.header) {
      class C {
        constructor(arg0) {
          closure_0 = arg0;
          return (checked) => {
            closure_1_3(() => { ... });
          };
        }
      }
    }
    const obj30 = { style: header, children: null };
    const items = [tmp29, tmp35];
    obj30.children = items;
    const tmp40 = closure_9(closure_5, obj30);
    cResult[19] = tmp4.header;
    cResult[20] = tmp29;
    cResult[21] = tmp35;
    cResult[22] = tmp40;
  }
  class G {
    constructor() {
      keys = Object.keys(closure_2);
      found = keys.filter((item) => dependencyMap[item].checked);
      mapped = found.map((item) => dependencyMap[item].value);
      if (0 !== mapped.length) {
        tmp = closure_1;
        flag = true;
        tmp2 = closure_1(true);
        tmp3 = closure_0;
        tmp4 = closure_2;
        obj = closure_0(closure_2[11]);
        dataHarvest = obj.requestDataHarvest(mapped);
        nextPromise = dataHarvest.then((body) => {
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
          closure_1_1(5707).show(obj2);
          const obj = closure_1_1(5707);
        });
        cleanupPromise = nextPromise.finally(() => closure_1_1(false));
      } else {
        tmp6 = closure_1;
        tmp7 = closure_2;
        obj2 = closure_1(closure_2[10]);
        obj1 = { title: null, body: null };
        tmp8 = closure_0;
        tmp9 = closure_2;
        intl = closure_0(closure_2[9]).intl;
        tmp10 = closure_0;
        tmp11 = closure_2;
        obj1.title = intl.string(closure_0(closure_2[9]).t.OjbtDm);
        tmp12 = closure_0;
        tmp13 = closure_2;
        intl2 = closure_0(closure_2[9]).intl;
        tmp14 = closure_0;
        tmp15 = closure_2;
        obj1.body = intl2.string(closure_0(closure_2[9]).t.W1Rw3D);
        showResult = obj2.show(obj1);
      }
      return;
    }
  }
  cResult[8] = first1;
  cResult[9] = navigation;
  cResult[10] = G;
  const tmp7 = _slicedToArray(noop.useState(false), 2);
}) : (() => {
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
        closure_1_1(5707).show(obj2);
        const obj = closure_1_1(5707);
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
        closure_1_1(5707).show(obj2);
        const obj = closure_1_1(5707);
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