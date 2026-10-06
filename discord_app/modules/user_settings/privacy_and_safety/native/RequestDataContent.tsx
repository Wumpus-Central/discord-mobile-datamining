// discord_app/modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx
import Constants from "../../../../Constants.tsx";
import intl11 from "../../../../intl/index.native.tsx";
import AlertActionCreatorsDefault from "../../../../actions/AlertActionCreators.tsx";
import TableCheckboxRow2 from "../../../../design/components/TableRow/native/TableCheckboxRow.native.tsx";
import DataHarvestActionCreators from "../../../harvester/DataHarvestActionCreators.tsx";
import _slicedToArray_mod from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require,
  cleanupPromise,
  closure_0,
  flag,
  navigation,
  obj1,
  showResult,
  tmp11,
  tmp13,
  tmp15,
  tmp2,
  tmp3,
  tmp7,
  tmp8,
  tmp9;

let c9;
let hasOwnProperty;
let metroImportAll;
let metroRequire;
let _slicedToArray = _slicedToArray_mod;
({ View: hasOwnProperty, ScrollView: metroRequire } = react_native);
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const constants = {
  USERS: "Account",
  MESSAGES: "Messages",
  GUILDS: "Servers",
  ANALYTICS: "Analytics",
  ACTIVITIES: "Activities",
  ADS: "Ads",
  ZENDESK: "Zendesk",
};
let closure_11 = createStyles.createStyles({
  content: { padding: 16 },
  header: { marginBottom: 8 },
  title: { marginBottom: 8 },
  description: { marginBottom: 0 },
  checkboxContainer: { marginBottom: 16 },
});
const memo = react.memo;
const memoResult = memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? () => {
        let ZENDESK;
        let closure_3;
        let content;
        let first;
        let first1;
        let header;
        let intl;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl7;
        let items;
        let obj15;
        let title;
        let tmp10;
        let tmp12;
        let tmp14;
        let tmp16;
        let tmp18;
        let tmp20;
        let tmp24;
        const tmp = navigation;
        let obj = navigation(first1[7]);
        const cResult = obj.c(37);
        const tmp4 = closure_11();
        let obj2 = navigation(first1[8]);
        navigation = obj2.useNavigation();
        [r10021, importDefault] = C.useState(false);
        _slicedToArray(C.useState(false), 2);
        const obj3 = C;
        const tmp6 = _slicedToArray;
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const obj4 = { value: constants.USERS, label: intl.string(tmp(first1[9]).t["rfe/x8"]), checked: false };
          intl = tmp(tmp2[9]).intl;
          cResult[0] = obj4;
          first = obj4;
        } else {
          first = cResult[0];
        }
        if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
          const obj5 = { value: constants.ANALYTICS, label: intl2.string(tmp(first1[9]).t["j+d6RN"]), checked: false };
          intl2 = tmp(tmp2[9]).intl;
          cResult[1] = obj5;
          tmp10 = obj5;
        } else {
          tmp10 = cResult[1];
        }
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const obj6 = { value: constants.ACTIVITIES, label: intl3.string(tmp(first1[9]).t.KO88BS), checked: false };
          intl3 = tmp(tmp2[9]).intl;
          cResult[2] = obj6;
          tmp12 = obj6;
        } else {
          tmp12 = cResult[2];
        }
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const obj7 = { value: constants.ADS, label: intl4.string(tmp(first1[9]).t.wb7QJ3), checked: false };
          intl4 = tmp(tmp2[9]).intl;
          cResult[3] = obj7;
          tmp14 = obj7;
        } else {
          tmp14 = cResult[3];
        }
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj8 = { value: constants.MESSAGES, label: intl5.string(tmp(first1[9]).t["0dO1t+"]), checked: false };
          intl5 = tmp(tmp2[9]).intl;
          cResult[4] = obj8;
          tmp16 = obj8;
        } else {
          tmp16 = cResult[4];
        }
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          const obj9 = { value: constants.GUILDS, label: intl6.string(tmp(first1[9]).t.JN9c36), checked: false };
          intl6 = tmp(tmp2[9]).intl;
          cResult[5] = obj9;
          tmp18 = obj9;
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
          ({ ZENDESK: obj11.value, ZENDESK } = constants);
          const obj13 = { value: null, label: intl7.string(tmp(first1[9]).t.yaLeEB), checked: false };
          intl7 = tmp(tmp2[9]).intl;
          obj10[ZENDESK] = obj13;
          cResult[6] = obj10;
          tmp20 = obj10;
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
                closure_1_3(() => {
                  /* body not rendered: F153246 */
                });
              };
            }
          }
          cResult[7] = C;
          tmp24 = C;
        } else {
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              return (checked) => {
                closure_1_3(() => {
                  /* body not rendered: F153246 */
                });
              };
            }
          }
        }
        C = tmp24;
        if (cResult[8] === first1) {
          let tmp27;
          let tmp31;
          class C {
            constructor(arg0) {
              closure_0 = arg0;
              return (checked) => {
                closure_1_3(() => {
                  /* body not rendered: F153246 */
                });
              };
            }
          }
          if (cResult[11] !== first1) {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
            let keys = Object.keys(first1);
            let mapped = keys.map((item, index, arg2) => {
              let checked;
              let label;
              ({ label, checked } = first1[item]);
              const obj = { label, checked, onPress: C(item), start: 0 === index, end: index === arg2.length - 1 };
              const TableCheckboxRow = TableCheckboxRow2.TableCheckboxRow;
              return metroImportAll(TableCheckboxRow, obj, item);
            });
            cResult[11] = first1;
            cResult[12] = mapped;
          } else {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
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
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
            const stringResult = obj12.string(tmp(first1[9]).t.jxXMEz);
            cResult[13] = stringResult;
            tmp27 = stringResult;
          } else {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
          }
          if (cResult[14] !== tmp4.title) {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
            const obj14 = {
              style: title,
              variant: "heading-xl/extrabold",
              color: "mobile-text-heading-primary",
              children: tmp27,
            };
            cResult[14] = tmp4.title;
            cResult[15] = closure_8(tmp(first1[13]).Text, obj14);
            const tmp30 = closure_8(tmp(first1[13]).Text, obj14);
          } else {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
          }
          const _Symbol2 = Symbol;
          const description = tmp4.description;
          if (cResult[16] === Symbol.for("react.memo_cache_sentinel")) {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
            const format = tmp32.format;
            const obj16 = { helpdeskArticle: obj15.getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
            const vtRhDA = tmp(tmp2[9]).t.vtRhDA;
            obj15 = require("HelpdeskUtils");
            const formatResult = format(vtRhDA, obj16);
            cResult[16] = formatResult;
            tmp31 = formatResult;
          } else {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
          }
          if (cResult[17] !== tmp4.description) {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
            const obj17 = { style: description, variant: "text-sm/medium", color: "text-default", children: tmp31 };
            cResult[17] = tmp4.description;
            cResult[18] = closure_8(tmp(first1[13]).Text, obj17);
            const tmp37 = closure_8(tmp(first1[13]).Text, obj17);
          } else {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
          }
          if (cResult[19] === tmp4.header) {
            class C {
              constructor(arg0) {
                closure_0 = arg0;
                return (checked) => {
                  closure_1_3(() => {
                    /* body not rendered: F153246 */
                  });
                };
              }
            }
          }
          const obj29 = { style: header, children: items };
          items = [tmp29, tmp36];
          cResult[19] = tmp4.header;
          cResult[20] = tmp29;
          cResult[21] = tmp36;
          cResult[22] = closure_9(closure_5, obj29);
          const tmp41 = closure_9(closure_5, obj29);
        }
        class G {
          constructor() {
            keys = Object.keys(closure_2);
            found = keys.filter((item) => first1[item].checked);
            mapped = found.map((item) => first1[item].value);
            if (0 !== mapped.length) {
              tmp = closure_1;
              flag = true;
              tmp2 = closure_1(true);
              tmp3 = closure_0;
              tmp4 = closure_2;
              obj = closure_0(closure_2[11]);
              dataHarvest = obj.requestDataHarvest(mapped);
              nextPromise = dataHarvest.then(
                (body) => {
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  if (null != body) {
                    if (null != body.body) {
                      const obj2 = {
                        title: intl3.string(navigation(first1[9]).t.i2iul5),
                        body: intl4.string(navigation(first1[9]).t["6Nmv4i"]),
                      };
                      const show2 = require("AlertActionCreators").show;
                      require("AlertActionCreators");
                      intl3 = navigation(first1[9]).intl;
                      intl4 = navigation(first1[9]).intl;
                      show2(obj2);
                      closure_1_0.pop();
                    }
                  }
                  const obj = {
                    title: intl.string(navigation(first1[9]).t.OjbtDm),
                    body: intl2.string(navigation(first1[9]).t["0F5Jyt"]),
                  };
                  const show = require("AlertActionCreators").show;
                  require("AlertActionCreators");
                  intl = navigation(first1[9]).intl;
                  intl2 = navigation(first1[9]).intl;
                  show(obj);
                },
                (message) => {
                  let intl2;
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
                    const intl = navigation(first1[9]).intl;
                    message = intl.string(navigation(first1[9]).t["0F5Jyt"]);
                  }
                  const obj = { title: intl2.string(navigation(first1[9]).t.OjbtDm), body: message };
                  const show = closure_1_1(first1[10]).show;
                  closure_1_1(first1[10]);
                  intl2 = navigation(first1[9]).intl;
                  show(obj);
                },
              );
              cleanupPromise = nextPromise.finally(() => closure_1_1(false));
            } else {
              tmp6 = closure_1;
              tmp7 = closure_2;
              tmp8 = closure_1(closure_2[10]);
              obj1 = { title: null, body: null };
              tmp9 = closure_0;
              tmp10 = closure_2;
              show = tmp8.show;
              intl = closure_0(closure_2[9]).intl;
              tmp11 = closure_0;
              tmp12 = closure_2;
              obj1.title = intl.string(closure_0(closure_2[9]).t.OjbtDm);
              tmp13 = closure_0;
              tmp14 = closure_2;
              intl2 = closure_0(closure_2[9]).intl;
              tmp15 = closure_0;
              tmp16 = closure_2;
              obj1.body = intl2.string(closure_0(closure_2[9]).t.W1Rw3D);
              showResult = show(obj1);
            }
            return;
          }
        }
        cResult[8] = first1;
        cResult[9] = navigation;
        cResult[10] = G;
      }
    : () => {
        let closure_1;
        let closure_3;
        let first;
        let first1;
        let format;
        let intl;
        let intl10;
        let intl2;
        let intl3;
        let intl4;
        let intl5;
        let intl6;
        let intl7;
        let intl8;
        let items;
        let items1;
        let obj14;
        let obj15;
        let vtRhDA;
        const tmp = closure_11();
        let obj = require("useNavigation");
        _require = obj.useNavigation();
        [first, importDefault] = react.useState(false);
        let obj2 = {};
        const useState = react.useState;
        const USERS = constants.USERS;
        const obj3 = { value: constants.USERS, label: intl.string(require("intl").t["rfe/x8"]), checked: false };
        intl = require("intl").intl;
        obj2[USERS] = obj3;
        const ANALYTICS = constants.ANALYTICS;
        const obj4 = { value: constants.ANALYTICS, label: intl2.string(require("intl").t["j+d6RN"]), checked: false };
        intl2 = require("intl").intl;
        obj2[ANALYTICS] = obj4;
        const ACTIVITIES = constants.ACTIVITIES;
        const obj5 = { value: constants.ACTIVITIES, label: intl3.string(require("intl").t.KO88BS), checked: false };
        intl3 = require("intl").intl;
        obj2[ACTIVITIES] = obj5;
        const ADS = constants.ADS;
        const obj6 = { value: constants.ADS, label: intl4.string(require("intl").t.wb7QJ3), checked: false };
        intl4 = require("intl").intl;
        obj2[ADS] = obj6;
        const MESSAGES = constants.MESSAGES;
        const obj7 = { value: constants.MESSAGES, label: intl5.string(require("intl").t["0dO1t+"]), checked: false };
        intl5 = require("intl").intl;
        obj2[MESSAGES] = obj7;
        const GUILDS = constants.GUILDS;
        const obj8 = { value: constants.GUILDS, label: intl6.string(require("intl").t.JN9c36), checked: false };
        intl6 = require("intl").intl;
        obj2[GUILDS] = obj8;
        const ZENDESK = constants.ZENDESK;
        const obj9 = { value: constants.ZENDESK, label: intl7.string(require("intl").t.yaLeEB), checked: false };
        intl7 = require("intl").intl;
        obj2[ZENDESK] = obj9;
        [first1, _slicedToArray] = useState(obj2);
        let keys = Object.keys(first1);
        const obj10 = { style: tmp.content, children: items1 };
        const obj11 = { style: tmp.header, children: items };
        let mapped = keys.map((item, index, arg2) => {
          let checked;
          let label;
          ({ label, checked } = first1[item]);
          let obj = {
            label,
            checked,
            onPress: (checked) => {
              closure_1_3((arg0) => {
                const obj = {};
                const merged = Object.assign(arg0);
                const obj2 = { checked };
                const merged1 = Object.assign(arg0[checked]);
                obj[checked] = obj2;
                return obj;
              });
            },
            start: 0 === index,
            end: index === arg2.length - 1,
          };
          closure_0 = item;
          return closure_1_8(closure_0(first1[12]).TableCheckboxRow, obj, item);
        });
        const obj12 = {
          style: tmp.title,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: intl8.string(require("intl").t.jxXMEz),
        };
        const Text = require("Text/Text").Text;
        intl8 = require("intl").intl;
        items = [closure_8(Text, obj12)];
        const obj13 = {
          style: tmp.description,
          variant: "text-sm/medium",
          color: "text-default",
          children: format(vtRhDA, obj14),
        };
        const Text2 = require("Text/Text").Text;
        const intl9 = require("intl").intl;
        format = intl9.format;
        obj14 = { helpdeskArticle: obj15.getArticleURL(HelpdeskArticles.GDPR_PACKAGE_CONTENTS) };
        vtRhDA = require("intl").t.vtRhDA;
        obj15 = require("HelpdeskUtils");
        items[1] = closure_8(Text2, obj13);
        items1 = [closure_9(closure_5, obj11), ,];
        const obj16 = {
          style: tmp.checkboxContainer,
          children: closure_8(require("TableRowGroup").TableRowGroup, { title: "", hasIcons: false, children: mapped }),
        };
        items1[1] = closure_8(closure_5, obj16);
        const obj17 = {
          text: intl10.string(require("intl").t.NYgNg9),
          onPress() {
            let intl;
            let intl2;
            const keys = Object.keys(first1);
            const found = keys.filter((item) => first1[item].checked);
            const mapped = found.map((item) => first1[item].value);
            if (0 !== mapped.length) {
              closure_1(true);
              let obj = DataHarvestActionCreators;
              const dataHarvest = obj.requestDataHarvest(mapped);
              const nextPromise = dataHarvest.then(
                (body) => {
                  let intl;
                  let intl2;
                  let intl3;
                  let intl4;
                  if (null != body) {
                    if (null != body.body) {
                      const obj2 = {
                        title: intl3.string(closure_0(first1[9]).t.i2iul5),
                        body: intl4.string(closure_0(first1[9]).t["6Nmv4i"]),
                      };
                      const show2 = closure_1(first1[10]).show;
                      closure_1(first1[10]);
                      intl3 = closure_0(first1[9]).intl;
                      intl4 = closure_0(first1[9]).intl;
                      show2(obj2);
                      closure_1_0.pop();
                    }
                  }
                  const obj = {
                    title: intl.string(closure_0(first1[9]).t.OjbtDm),
                    body: intl2.string(closure_0(first1[9]).t["0F5Jyt"]),
                  };
                  const show = closure_1(first1[10]).show;
                  closure_1(first1[10]);
                  intl = closure_0(first1[9]).intl;
                  intl2 = closure_0(first1[9]).intl;
                  show(obj);
                },
                (message) => {
                  let intl2;
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
                    const intl = closure_1_0(first1[9]).intl;
                    message = intl.string(closure_1_0(first1[9]).t["0F5Jyt"]);
                  }
                  const obj = { title: intl2.string(closure_1_0(first1[9]).t.OjbtDm), body: message };
                  const show = closure_1_1(first1[10]).show;
                  closure_1_1(first1[10]);
                  intl2 = closure_1_0(first1[9]).intl;
                  show(obj);
                },
              );
              nextPromise.finally(() => closure_1_1(false));
            } else {
              let obj2 = { title: intl.string(intl11.t.OjbtDm), body: intl2.string(intl11.t.W1Rw3D) };
              let show = AlertActionCreatorsDefault.show;
              AlertActionCreatorsDefault;
              intl = intl11.intl;
              intl2 = intl11.intl;
              show(obj2);
            }
          },
          loading: first,
        };
        const Button = require("components/Button/Button").Button;
        intl10 = require("intl").intl;
        items1[2] = closure_8(Button, obj17);
        return closure_9(closure_6, obj10);
      },
);
const result = size.fileFinishedImporting("modules/user_settings/privacy_and_safety/native/RequestDataContent.tsx");

export default memoResult;
