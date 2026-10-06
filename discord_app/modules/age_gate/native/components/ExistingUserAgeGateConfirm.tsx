// discord_app/modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Constants from "../../../../Constants.tsx";
import intl4 from "../../../../intl/index.native.tsx";
import useNavigation from "../../../../design/components/Navigator/native/useNavigation.native.tsx";
import HelpdeskUtilsDefault from "../../../../utils/HelpdeskUtils.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import common_SafeAreaView from "../../../../components_native/common/SafeAreaView.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c1, c4, dependencyMap, importDefault, navigation;

let c9;
let metroImportAll;
const View = react_native.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let closure_10 = createStyles.createStyles({
  container: { padding: 16, flex: 1, alignItems: "center", justifyContent: "center" },
  header: { textAlign: "center", marginBottom: 8 },
  body: { textAlign: "center", lineHeight: 20, marginBottom: 16 },
  buttonWrapper: { width: "100%" },
});
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let age;
      let closure_129_2;
      let container;
      let header;
      let items;
      let obj6;
      let onConfirm;
      let tmp7;
      let obj = react2;
      const cResult = obj.c(23);
      ({ age, onConfirm } = arg0);
      const tmp4 = closure_10();
      let obj2 = useNavigation;
      navigation = obj2.useNavigation();
      [tmp7, closure_129_2] = _slicedToArray(react.useState(false), 2);
      const tmp6 = _slicedToArray(react.useState(false), 2);
      if (cResult[0] === navigation) {
        let tmp8;
        let tmp9;
        if (cResult[1] === onConfirm) {
          tmp8 = cResult[2];
        }
        ({ container, header } = tmp4);
        if (cResult[3] !== age) {
          const intl = intl4.intl;
          let obj3 = { age };
          const formatResult = intl.format(intl4.t.wumolR, obj3);
          cResult[3] = age;
          cResult[4] = formatResult;
          tmp9 = formatResult;
        } else {
          tmp9 = cResult[4];
        }
        if (cResult[5] === tmp4.header) {
          let tmp11;
          let tmp15;
          let tmp19;
          let tmp22;
          if (cResult[6] === tmp9) {
            tmp11 = cResult[7];
          }
          const _Symbol = Symbol;
          const body = tmp4.body;
          if (cResult[8] === Symbol.for("react.memo_cache_sentinel")) {
            const intl2 = intl4.intl;
            const format = intl2.format;
            let obj4 = { helpURL: obj6.getArticleURL(HelpdeskArticles.AGE_GATE) };
            const n3QjDE = intl4.t.n3QjDE;
            obj6 = HelpdeskUtilsDefault;
            const formatResult1 = format(n3QjDE, obj4);
            cResult[8] = formatResult1;
            tmp15 = formatResult1;
          } else {
            tmp15 = cResult[8];
          }
          if (cResult[9] !== tmp4.body) {
            const obj5 = { style: body, variant: "text-md/medium", color: "interactive-text-default", children: tmp15 };
            const tmp21 = metroImportAll(Text_Text.Text, obj5);
            cResult[9] = tmp4.body;
            cResult[10] = tmp21;
            tmp19 = tmp21;
          } else {
            tmp19 = cResult[10];
          }
          const _Symbol2 = Symbol;
          const buttonWrapper = tmp4.buttonWrapper;
          if (cResult[11] === Symbol.for("react.memo_cache_sentinel")) {
            const intl3 = intl4.intl;
            const stringResult = intl3.string(intl4.t["6tahin"]);
            cResult[11] = stringResult;
            tmp22 = stringResult;
          } else {
            tmp22 = cResult[11];
          }
          if (cResult[12] === tmp8) {
            let tmp24;
            if (cResult[13] === tmp7) {
              tmp24 = cResult[14];
            }
            if (cResult[15] === tmp4.buttonWrapper) {
              let tmp27;
              if (cResult[16] === tmp24) {
                tmp27 = cResult[17];
              }
              if (cResult[18] === tmp4.container) {
                if (cResult[19] === tmp27) {
                  if (cResult[20] === tmp11) {
                    let tmp31;
                    if (cResult[21] === tmp19) {
                      tmp31 = cResult[22];
                    }
                    return tmp31;
                  }
                }
              }
              const obj7 = { top: true, style: container, children: items };
              items = [tmp11, tmp19, tmp27];
              const tmp33 = React4(common_SafeAreaView.SafeAreaPaddingView, obj7);
              cResult[18] = tmp4.container;
              cResult[19] = tmp27;
              cResult[20] = tmp11;
              cResult[21] = tmp19;
              cResult[22] = tmp33;
              tmp31 = tmp33;
            }
            const obj8 = { style: buttonWrapper, children: tmp24 };
            const tmp30 = metroImportAll(View, obj8);
            cResult[15] = tmp4.buttonWrapper;
            cResult[16] = tmp24;
            cResult[17] = tmp30;
            tmp27 = tmp30;
          }
          const obj9 = { loading: tmp7, disabled: tmp7, text: tmp22, onPress: tmp8, grow: true };
          const tmp26 = metroImportAll(components_Button_Button.Button, obj9);
          cResult[12] = tmp8;
          cResult[13] = tmp7;
          cResult[14] = tmp26;
          tmp24 = tmp26;
        }
        const obj10 = {
          style: header,
          variant: "heading-xl/extrabold",
          color: "mobile-text-heading-primary",
          children: tmp9,
        };
        const tmp13 = metroImportAll(Text_Text.Text, obj10);
        cResult[5] = tmp4.header;
        cResult[6] = tmp9;
        cResult[7] = tmp13;
        tmp11 = tmp13;
      }
      let closure_0 = _asyncToGenerator(async () => {
        let closure_2;
        if (c4 === 2) {
          c4 = 3;
          throw new TypeError("Generator functions may not be called on executing generators");
        } else if (tmp3 === 3) {
          if (arg0 === 1) {
            throw value;
          } else if (arg0 === 2) {
            const obj2 = { value, done: true };
            return obj2;
          } else {
            return { value: "IconComponent", done: null };
          }
        } else {
          let c3;
          try {
            c4 = 2;
            if (0 === c1) {
              if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c4 = 3;
                const obj3 = { value, done: true };
                return obj3;
              } else {
                tmp18(true);
                c3 = 1;
                c1 = 2;
                c4 = 1;
                const obj4 = { value: tmp(), done: false };
                return obj4;
              }
            } else {
              if (1 === tmp4) {
                c3 = 0;
                c1.pop();
              } else if (arg0 === 1) {
                c4 = 3;
                throw value;
              } else if (arg0 === 2) {
                c3 = 0;
                c4 = 3;
                const obj = { value, done: true };
                return obj;
              } else {
                if (value.shouldShowError) {
                  c1.pop();
                }
                c3 = 0;
              }
              tmp18(false);
              c4 = 3;
              return { value: "IconComponent", done: null };
            }
          } catch (tmp18) {
            if (0 === c3) {
              c4 = 3;
              throw tmp18;
            } else {
              c1 = 1;
            }
          }
        }
      });
      function handleConfirm() {
        return closure_0(...arguments);
      }
      cResult[0] = navigation;
      cResult[1] = onConfirm;
      cResult[2] = handleConfirm;
      tmp8 = handleConfirm;
    }
  : (onConfirm) => {
      let Button;
      let _undefined;
      let c2;
      let closure_1;
      let format;
      let intl;
      let intl3;
      let items;
      let n3QjDE;
      let obj5;
      let obj6;
      let obj8;
      let tmp3;
      onConfirm = onConfirm.onConfirm;
      dependencyMap = undefined;
      let obj = function _handleConfirm2() {
        obj = _asyncToGenerator(async () => {
          if (c4 === 2) {
            c4 = 3;
            throw new TypeError("Generator functions may not be called on executing generators");
          } else if (tmp3 === 3) {
            if (arg0 === 1) {
              throw value;
            } else if (arg0 === 2) {
              const obj2 = { value, done: true };
              return obj2;
            } else {
              return { value: "IconComponent", done: null };
            }
          } else {
            let c3;
            try {
              c4 = 2;
              if (0 === c1) {
                if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c4 = 3;
                  const obj3 = { value, done: true };
                  return obj3;
                } else {
                  let closure_0 = tmp;
                  _undefined(true);
                  c3 = 1;
                  c1 = 2;
                  c4 = 1;
                  const obj4 = { value: onConfirm(), done: false };
                  return obj4;
                }
              } else {
                if (1 === tmp4) {
                  c3 = 0;
                  closure_128_1.pop();
                } else if (arg0 === 1) {
                  c4 = 3;
                  throw value;
                } else if (arg0 === 2) {
                  c3 = 0;
                  c4 = 3;
                  obj = { value, done: true };
                  return obj;
                } else {
                  if (value.shouldShowError) {
                    closure_128_1.pop();
                  }
                  c3 = 0;
                }
                closure_128_2(false);
                c4 = 3;
                return { value: "IconComponent", done: null };
              }
            } catch (tmp18) {
              let closure_2 = tmp18;
              if (0 === c3) {
                c4 = 3;
                throw tmp18;
              } else {
                c1 = 1;
              }
            }
          }
        });
        return obj(...arguments);
      };
      const age = onConfirm.age;
      const tmp = closure_10();
      obj = onConfirm(1490);
      importDefault = obj.useNavigation();
      [tmp3, c2] = react.useState(false);
      let obj2 = { top: true, style: tmp.container, children: items };
      _slicedToArray(react.useState(false), 2);
      const SafeAreaPaddingView = onConfirm(6626).SafeAreaPaddingView;
      let obj3 = {
        style: tmp.header,
        variant: "heading-xl/extrabold",
        color: "mobile-text-heading-primary",
        children: intl.format(onConfirm(1126).t.wumolR, { age }),
      };
      const Text = onConfirm(4892).Text;
      intl = onConfirm(1126).intl;
      items = [closure_8(Text, obj3), ,];
      let obj4 = {
        style: tmp.body,
        variant: "text-md/medium",
        color: "interactive-text-default",
        children: format(n3QjDE, obj5),
      };
      const Text2 = onConfirm(4892).Text;
      const intl2 = onConfirm(1126).intl;
      format = intl2.format;
      obj5 = { helpURL: obj6.getArticleURL(HelpdeskArticles.AGE_GATE) };
      n3QjDE = onConfirm(1126).t.n3QjDE;
      obj6 = HelpdeskUtilsDefault;
      items[1] = closure_8(Text2, obj4);
      const obj7 = { style: tmp.buttonWrapper, children: closure_8(Button, obj8) };
      obj8 = {
        loading: tmp3,
        disabled: tmp3,
        text: intl3.string(onConfirm(1126).t["6tahin"]),
        onPress: function handleConfirm() {
          return obj(...arguments);
        },
        grow: true,
      };
      Button = onConfirm(5601).Button;
      intl3 = onConfirm(1126).intl;
      items[2] = closure_8(View, obj7);
      return closure_9(SafeAreaPaddingView, obj2);
    };
const result = size.fileFinishedImporting("modules/age_gate/native/components/ExistingUserAgeGateConfirm.tsx");

export default tmp3;
