// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const SELECT_NAMES = fn(15498).SELECT_NAMES;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4890);
let closure_7 = createStyles.createStyles((arg0) => {
  const obj = { container: { marginLeft: 16, marginRight: 16 }, selectContainer: null };
  const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
  if (arg0) {
    let diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
  }
  obj.selectContainer = { marginTop: diff, marginLeft: 16, marginRight: 16, display: "flex", alignItems: "center" };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (mfaChallenge) => {
      _require = mfaChallenge;
      const cResult = require("c").c(15);
      const tmp4 = navigation(6432)();
      const tmp5 = closure_7(tmp4);
      const obj = require("c");
      navigation = require("useNavigation").useNavigation();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj3 = { variant: "heading-xl/extrabold", children: null };
        const intl = tmp(1126).intl;
        obj3.children = intl.string(tmp(1126).t.S9b9bX);
        const tmp10 = closure_5(tmp(4886).Heading, obj3);
        cResult[0] = tmp10;
        let first = tmp10;
      } else {
        first = cResult[0];
      }
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const obj4 = { variant: "text-sm/medium", children: null };
        const intl2 = tmp(1126).intl;
        obj4.children = intl2.string(tmp(1126).t.Jz1lXO);
        const tmp13 = closure_5(tmp(4886).Text, obj4);
        cResult[1] = tmp13;
        let tmp11 = tmp13;
      } else {
        tmp11 = cResult[1];
      }
      if (cResult[2] !== tmp5.selectContainer) {
        const obj5 = { style: tmp5.selectContainer, children: null };
        const items = [first, tmp11];
        obj5.children = items;
        const tmp17 = closure_6(View, obj5);
        cResult[2] = tmp5.selectContainer;
        cResult[3] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[3];
      }
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const obj6 = { marginTop: 16, gap: 8 };
        cResult[4] = obj6;
        let tmp18 = obj6;
      } else {
        tmp18 = cResult[4];
      }
      if (cResult[5] === navigation) {
        if (cResult[6] === mfaChallenge) {
          let tmp19 = cResult[7];
        }
        if (cResult[8] !== tmp19) {
          const obj7 = { style: tmp18, children: tmp19 };
          const tmp24 = closure_5(View, obj7);
          cResult[8] = tmp19;
          cResult[9] = tmp24;
          let tmp21 = tmp24;
        } else {
          tmp21 = cResult[9];
        }
        if (cResult[10] === tmp5.container) {
          if (cResult[11] === tmp7) {
            if (cResult[12] === tmp14) {
              if (cResult[13] === tmp21) {
                let tmp25 = cResult[14];
              }
              return tmp25;
            }
          }
        }
        const obj8 = { top: tmp7, style: tmp5.container, children: null };
        const items1 = [tmp14, tmp21];
        obj8.children = items1;
        const tmp27 = closure_6(tmp(6619).SafeAreaPaddingView, obj8);
        cResult[10] = tmp5.container;
        cResult[11] = tmp7;
        cResult[12] = tmp14;
        cResult[13] = tmp21;
        cResult[14] = tmp27;
        tmp25 = tmp27;
      }
      const methods = mfaChallenge.mfaChallenge.methods;
      const mapped = methods.map((type) => {
        closure_1 = type;
        closure_2 = navigation;
        return hasOwnProperty(
          RowButton.RowButton,
          {
            label: SELECT_NAMES[type.type],
            onPress() {
              closure_2.push(type.type, closure_0);
            },
          },
          type.type,
        );
      });
      cResult[5] = navigation;
      cResult[6] = mfaChallenge;
      cResult[7] = mapped;
      tmp19 = mapped;
      const obj2 = require("useNavigation");
    }
  : (mfaChallenge) => {
      _require = mfaChallenge;
      const tmp = useWideAuthViewDefault();
      const tmp2 = closure_7(tmp);
      importDefault = require("useNavigation").useNavigation();
      const obj2 = { top: !tmp, style: tmp2.container, children: null };
      const obj3 = { style: tmp2.selectContainer, children: null };
      const obj4 = { variant: "heading-xl/extrabold", children: null };
      const intl = require("util").intl;
      obj4.children = intl.string(require("util").t.S9b9bX);
      const items = [closure_5(require("Text/Text").Heading, obj4)];
      const obj5 = { variant: "text-sm/medium", children: null };
      const intl2 = require("util").intl;
      obj5.children = intl2.string(require("util").t.Jz1lXO);
      items[1] = closure_5(require("Text/Text").Text, obj5);
      obj3.children = items;
      const items1 = [closure_6(View, obj3)];
      const obj6 = { style: { marginTop: 16, gap: 8 }, children: null };
      const methods = mfaChallenge.mfaChallenge.methods;
      obj6.children = methods.map((type) => {
        closure_2 = type;
        return hasOwnProperty(
          RowButton.RowButton,
          {
            label: SELECT_NAMES[type.type],
            onPress() {
              closure_2.push(type.type, closure_0);
            },
          },
          type.type,
        );
      });
      items1[1] = closure_5(View, obj6);
      obj2.children = items1;
      return closure_6(require("common/SafeAreaView").SafeAreaPaddingView, obj2);
    };
