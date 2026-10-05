// discord_app/modules/auth/native/components/ExternalLink.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let dependencyMap, externalURL, importDefault, navigation;

let closure_4;
let hasOwnProperty;
let metroImportAll;
let metroImportDefault;
let metroRequire;
({ Linking: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = react_native);
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles((arg0) => {
  let space;
  let space2;
  let str;
  const container = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height: "100%",
    display: "flex",
    justifyContent: str,
    paddingLeft: arg0 ? space.PX_24 : space.PX_16,
    paddingRight: arg0 ? space2.PX_24 : space2.PX_16,
  };
  str = "center";
  if (arg0) {
    str = "space-between";
  }
  space = nativeDefault.space;
  space2 = nativeDefault.space;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (externalURL) => {
      let closure_2;
      let intl;
      let items1;
      let items2;
      let items3;
      let tmp11;
      let tmp14;
      let tmp20;
      let tmp24;
      let tmp7;
      let tmp9;
      const obj = externalURL(576);
      const cResult = obj.c(22);
      externalURL = externalURL.externalURL;
      const tmp5 = closure_9(navigation(6432)());
      const obj2 = externalURL(1490);
      const tmp4 = navigation;
      navigation = obj2.useNavigation();
      if (cResult[0] !== externalURL) {
        const fn = function l() {
          React3.openURL(externalURL);
        };
        cResult[0] = externalURL;
        cResult[1] = fn;
        tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      dependencyMap = tmp7;
      if (cResult[2] !== tmp7) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const items = [tmp7];
        cResult[2] = tmp7;
        cResult[3] = B;
        cResult[4] = items;
        tmp9 = items;
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(B, tmp9);
      const container = tmp5.container;
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const obj3 = { children: intl.string(externalURL(1126).t["0Niu/F"]) };
        const tmp4Result = tmp4(6462);
        intl = tmp(1126).intl;
        const tmp13 = closure_7(tmp4Result, obj3);
        cResult[5] = tmp13;
        tmp11 = tmp13;
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      const description = tmp5.description;
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const stringResult = obj4.string(externalURL(1126).t.nToOEg);
        cResult[6] = stringResult;
        tmp14 = stringResult;
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[7] !== tmp5.description) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const obj5 = { children: items1 };
        items1 = [tmp11];
        const obj6 = { style: description, variant: "text-md/medium", color: "text-default", children: tmp14 };
        items1[1] = closure_7(externalURL(4886).Text, obj6);
        cResult[7] = tmp5.description;
        cResult[8] = closure_8(closure_6, obj5);
        const tmp19 = closure_8(closure_6, obj5);
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const stringResult1 = obj7.string(externalURL(1126).t["2ixEBi"]);
        cResult[9] = stringResult1;
        tmp20 = stringResult1;
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[10] !== tmp7) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const obj8 = { shrink: true, variant: "primary", text: tmp20, onPress: tmp7 };
        cResult[10] = tmp7;
        cResult[11] = closure_7(externalURL(5594).Button, obj8);
        const tmp23 = closure_7(externalURL(5594).Button, obj8);
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const stringResult2 = obj9.string(externalURL(1126).t.j3cG2p);
        cResult[12] = stringResult2;
        tmp24 = stringResult2;
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[13] !== navigation) {
        class B {
          constructor() {
            closure_2();
          }
        }
        const obj10 = {
          shrink: true,
          variant: "secondary",
          text: tmp24,
          onPress() {
            return navigation.pop();
          },
        };
        cResult[13] = navigation;
        cResult[14] = closure_7(externalURL(5594).Button, obj10);
        const tmp27 = closure_7(externalURL(5594).Button, obj10);
      } else {
        class B {
          constructor() {
            closure_2();
          }
        }
      }
      if (cResult[15] === tmp22) {
        class B {
          constructor() {
            closure_2();
          }
        }
        if (cResult[18] === tmp5.container) {
          class B {
            constructor() {
              closure_2();
            }
          }
        }
        const obj11 = {
          alwaysBounceVertical: false,
          keyboardShouldPersistTaps: "handled",
          contentContainerStyle: container,
          children: items2,
        };
        items2 = [tmp16, tmp28];
        cResult[18] = tmp5.container;
        cResult[19] = tmp28;
        cResult[20] = tmp16;
        cResult[21] = closure_8(closure_5, obj11);
        const tmp33 = closure_8(closure_5, obj11);
      }
      const obj12 = { children: items3 };
      items3 = [tmp22, tmp26];
      cResult[15] = tmp22;
      cResult[16] = tmp26;
      cResult[17] = closure_8(externalURL(5592).ButtonGroup, obj12);
      const tmp29 = closure_8(externalURL(5592).ButtonGroup, obj12);
    }
  : (externalURL) => {
      let closure_1;
      let intl;
      let intl2;
      let intl3;
      let intl4;
      let items2;
      let items3;
      let items4;
      externalURL = externalURL.externalURL;
      importDefault = undefined;
      let onPress;
      const tmp = closure_9(require("useWideAuthView")());
      const obj = externalURL(onPress[8]);
      importDefault = obj.useNavigation();
      const items = [externalURL];
      onPress = react.useCallback(() => {
        React3.openURL(externalURL);
      }, items);
      const items1 = [onPress];
      const effect = react.useEffect(() => {
        callback();
      }, items1);
      const obj2 = {
        alwaysBounceVertical: false,
        keyboardShouldPersistTaps: "handled",
        contentContainerStyle: tmp.container,
        children: items3,
      };
      const obj3 = { children: items2 };
      const obj4 = { children: intl.string(externalURL(onPress[10]).t["0Niu/F"]) };
      const tmp4 = require("AuthHeader");
      intl = externalURL(onPress[10]).intl;
      items2 = [closure_7(tmp4, obj4)];
      const obj5 = {
        style: tmp.description,
        variant: "text-md/medium",
        color: "text-default",
        children: intl2.string(externalURL(onPress[10]).t.nToOEg),
      };
      const Text = externalURL(onPress[11]).Text;
      intl2 = externalURL(onPress[10]).intl;
      items2[1] = closure_7(Text, obj5);
      items3 = [closure_8(closure_6, obj3)];
      const obj6 = { children: items4 };
      const ButtonGroup = externalURL(onPress[13]).ButtonGroup;
      const obj7 = {
        shrink: true,
        variant: "primary",
        text: intl3.string(externalURL(onPress[10]).t["2ixEBi"]),
        onPress,
      };
      const Button = externalURL(onPress[12]).Button;
      intl3 = externalURL(onPress[10]).intl;
      items4 = [closure_7(Button, obj7)];
      const obj8 = {
        shrink: true,
        variant: "secondary",
        text: intl4.string(externalURL(onPress[10]).t.j3cG2p),
        onPress() {
          return closure_1.pop();
        },
      };
      const Button2 = externalURL(onPress[12]).Button;
      intl4 = externalURL(onPress[10]).intl;
      items4[1] = closure_7(Button2, obj8);
      items3[1] = closure_8(ButtonGroup, obj6);
      return closure_8(closure_5, obj2);
    };
const result = size.fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default tmp4;
