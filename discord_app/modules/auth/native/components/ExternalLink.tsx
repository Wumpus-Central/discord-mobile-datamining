// discord_app/modules/auth/native/components/ExternalLink.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Linking: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4890);
let closure_9 = createStyles.createStyles((arg0) => {
  const container = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height: "100%",
    display: "flex",
    justifyContent: null,
    paddingLeft: null,
    paddingRight: null,
  };
  let str = "center";
  if (arg0) {
    str = "space-between";
  }
  container.justifyContent = str;
  const space = nativeDefault.space;
  container.paddingLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = nativeDefault.space;
  container.paddingRight = arg0 ? space2.PX_24 : space2.PX_16;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (externalURL) => {
      const cResult = externalURL(576).c(22);
      externalURL = externalURL.externalURL;
      const tmp5 = closure_9(navigation(6432)());
      const obj = externalURL(576);
      const tmp4 = navigation;
      navigation = externalURL(1490).useNavigation();
      if (cResult[0] !== externalURL) {
        const fn = function l() {
          React4.openURL(externalURL);
        };
        cResult[0] = externalURL;
        cResult[1] = fn;
        let tmp7 = fn;
      } else {
        tmp7 = cResult[1];
      }
      dependencyMap = tmp7;
      if (cResult[2] !== tmp7) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const items = [tmp7];
        cResult[2] = tmp7;
        cResult[3] = B;
        cResult[4] = items;
        let tmp9 = items;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        tmp9 = cResult[4];
      }
      const effect = noop.useEffect(B, tmp9);
      if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const obj3 = { children: null };
        const intl = tmp(1126).intl;
        obj3.children = intl.string(tmp(1126).t["0Niu/F"]);
        const tmp13 = closure_7(tmp4(6462), obj3);
        cResult[5] = tmp13;
        const tmp11 = tmp13;
        const tmp4Result = tmp4(6462);
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[6] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const stringResult = obj4.string(tmp(1126).t.nToOEg);
        cResult[6] = stringResult;
        const tmp14 = stringResult;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[7] !== tmp5.description) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const obj5 = { children: null };
        const items1 = [tmp11];
        const obj6 = { style: tmp5.description, variant: "text-md/medium", color: "text-default", children: tmp14 };
        items1[1] = closure_7(tmp(4886).Text, obj6);
        obj5.children = items1;
        const tmp19 = closure_8(closure_6, obj5);
        cResult[7] = tmp5.description;
        cResult[8] = tmp19;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[9] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const stringResult1 = obj7.string(tmp(1126).t["2ixEBi"]);
        cResult[9] = stringResult1;
        const tmp20 = stringResult1;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[10] !== tmp7) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const obj8 = { shrink: true, variant: "primary", text: tmp20, onPress: tmp7 };
        const tmp23 = closure_7(tmp(5594).Button, obj8);
        cResult[10] = tmp7;
        cResult[11] = tmp23;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[12] === Symbol.for("react.memo_cache_sentinel")) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        const stringResult2 = obj9.string(tmp(1126).t.j3cG2p);
        cResult[12] = stringResult2;
        const tmp24 = stringResult2;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[13] !== navigation) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
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
        const tmp27 = closure_7(tmp(5594).Button, obj10);
        cResult[13] = navigation;
        cResult[14] = tmp27;
      } else {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
      }
      if (cResult[15] === tmp22) {
        class B {
          constructor() {
            tmp = closure_2();
            return;
          }
        }
        if (cResult[18] === tmp5.container) {
          class B {
            constructor() {
              tmp = closure_2();
              return;
            }
          }
        }
        const obj11 = {
          alwaysBounceVertical: false,
          keyboardShouldPersistTaps: "handled",
          contentContainerStyle: tmp5.container,
          children: null,
        };
        const items2 = [tmp16, tmp28];
        obj11.children = items2;
        const tmp33 = closure_8(closure_5, obj11);
        cResult[18] = tmp5.container;
        cResult[19] = tmp28;
        cResult[20] = tmp16;
        cResult[21] = tmp33;
      }
      const obj12 = { children: null };
      const items3 = [tmp22, tmp26];
      obj12.children = items3;
      const tmp29 = closure_8(externalURL(5592).ButtonGroup, obj12);
      cResult[15] = tmp22;
      cResult[16] = tmp26;
      cResult[17] = tmp29;
      const obj2 = externalURL(1490);
    }
  : (externalURL) => {
      externalURL = externalURL.externalURL;
      importDefault = undefined;
      let onPress;
      const tmp = closure_9(require("useWideAuthView")());
      importDefault = externalURL(onPress[8]).useNavigation();
      const items = [externalURL];
      onPress = noop.useCallback(() => {
        React4.openURL(externalURL);
      }, items);
      const items1 = [onPress];
      const effect = noop.useEffect(() => {
        callback();
      }, items1);
      const obj2 = {
        alwaysBounceVertical: false,
        keyboardShouldPersistTaps: "handled",
        contentContainerStyle: tmp.container,
        children: null,
      };
      const obj3 = { children: null };
      const obj4 = { children: null };
      const obj = externalURL(onPress[8]);
      const intl = externalURL(onPress[10]).intl;
      obj4.children = intl.string(externalURL(onPress[10]).t["0Niu/F"]);
      const items2 = [closure_7(require("AuthHeader"), obj4)];
      const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
      const intl2 = externalURL(onPress[10]).intl;
      obj5.children = intl2.string(externalURL(onPress[10]).t.nToOEg);
      items2[1] = closure_7(externalURL(onPress[11]).Text, obj5);
      obj3.children = items2;
      const items3 = [closure_8(closure_6, obj3)];
      const obj6 = { children: null };
      const obj7 = { shrink: true, variant: "primary", text: null, onPress: null };
      const intl3 = externalURL(onPress[10]).intl;
      obj7.text = intl3.string(externalURL(onPress[10]).t["2ixEBi"]);
      obj7.onPress = onPress;
      const items4 = [closure_7(externalURL(onPress[12]).Button, obj7)];
      const obj8 = { shrink: true, variant: "secondary", text: null, onPress: null };
      const intl4 = externalURL(onPress[10]).intl;
      obj8.text = intl4.string(externalURL(onPress[10]).t.j3cG2p);
      obj8.onPress = function onPress() {
        return closure_1.pop();
      };
      items4[1] = closure_7(externalURL(onPress[12]).Button, obj8);
      obj6.children = items4;
      items3[1] = closure_8(externalURL(onPress[13]).ButtonGroup, obj6);
      obj2.children = items3;
      return closure_8(closure_5, obj2);
    };
