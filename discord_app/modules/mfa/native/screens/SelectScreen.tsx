// === Module 15501: SelectScreen ===

// Module 15501 (SelectScreen)
import react_native from "react-native" /* 17 */;
import NavigatorConstants from "NavigatorConstants" /* 6068 */;
import useWideAuthViewDefault from "useWideAuthView" /* 6432 */;
import RowButton from "RowButton" /* 8897 */;
import MFAConstants from "MFAConstants" /* 15498 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const require = globalThis.__r;
let _require, importDefault, navigation;

let hasOwnProperty;
let metroRequire;
const View = react_native.View;
const SELECT_NAMES = MFAConstants.SELECT_NAMES;
({ jsx: hasOwnProperty, jsxs: metroRequire } = Fragment);
let closure_7 = createStyles.createStyles((arg0) => {
  let diff;
  const obj = { container: { marginLeft: 16, marginRight: 16 }, selectContainer: { marginTop: diff, marginLeft: 16, marginRight: 16, display: "flex", alignItems: "center" } };
  const NAV_BAR_HEIGHT = NavigatorConstants.NAV_BAR_HEIGHT;
  const tmp3 = arg0;
  if (tmp3) {
    diff = NAV_BAR_HEIGHT;
  } else {
    diff = NAV_BAR_HEIGHT - NavigatorConstants.STATUS_BAR_HEIGHT;
  }
  return obj;
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled() ? ((mfaChallenge) => {
  let first;
  let intl;
  let intl2;
  let items;
  let items1;
  let tmp11;
  let tmp14;
  let tmp18;
  _require = mfaChallenge;
  let obj = require("react");
  const cResult = obj.c(15);
  const tmp4 = navigation(6432)();
  const tmp5 = closure_7(tmp4);
  const obj2 = require("useNavigation");
  navigation = obj2.useNavigation();
  const container = tmp5.container;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "heading-xl/extrabold", children: intl.string(require("intl").t.S9b9bX) };
    const Heading = tmp(4886).Heading;
    intl = tmp(1126).intl;
    const tmp10 = closure_5(Heading, obj3);
    cResult[0] = tmp10;
    first = tmp10;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj4 = { variant: "text-sm/medium", children: intl2.string(require("intl").t.Jz1lXO) };
    const Text = tmp(4886).Text;
    intl2 = tmp(1126).intl;
    const tmp13 = closure_5(Text, obj4);
    cResult[1] = tmp13;
    tmp11 = tmp13;
  } else {
    tmp11 = cResult[1];
  }
  if (cResult[2] !== tmp5.selectContainer) {
    const obj5 = { style: tmp5.selectContainer, children: items };
    items = [first, tmp11];
    const tmp17 = closure_6(View, obj5);
    cResult[2] = tmp5.selectContainer;
    cResult[3] = tmp17;
    tmp14 = tmp17;
  } else {
    tmp14 = cResult[3];
  }
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const obj6 = { marginTop: 16, gap: 8 };
    cResult[4] = obj6;
    tmp18 = obj6;
  } else {
    tmp18 = cResult[4];
  }
  if (cResult[5] === navigation) {
    let tmp19;
    let tmp21;
    if (cResult[6] === mfaChallenge) {
      tmp19 = cResult[7];
    }
    if (cResult[8] !== tmp19) {
      const obj7 = { style: tmp18, children: tmp19 };
      const tmp24 = closure_5(View, obj7);
      cResult[8] = tmp19;
      cResult[9] = tmp24;
      tmp21 = tmp24;
    } else {
      tmp21 = cResult[9];
    }
    if (cResult[10] === tmp5.container) {
      if (cResult[11] === !tmp4) {
        if (cResult[12] === tmp14) {
          let tmp25;
          if (cResult[13] === tmp21) {
            tmp25 = cResult[14];
          }
          return tmp25;
        }
      }
    }
    const obj8 = { top: !tmp4, style: container, children: items1 };
    items1 = [tmp14, tmp21];
    const tmp27 = closure_6(require("common/SafeAreaView").SafeAreaPaddingView, obj8);
    cResult[10] = tmp5.container;
    cResult[11] = !tmp4;
    cResult[12] = tmp14;
    cResult[13] = tmp21;
    cResult[14] = tmp27;
    tmp25 = tmp27;
  }
  const methods = mfaChallenge.mfaChallenge.methods;
  const mapped = methods.map((type) => {
    let closure_1 = type;
    let closure_2 = navigation;
    const obj = {
      label: SELECT_NAMES[type.type],
      onPress() {
        closure_2.push(type.type, closure_0);
      }
    };
    return hasOwnProperty(RowButton.RowButton, obj, type.type);
  });
  cResult[5] = navigation;
  cResult[6] = mfaChallenge;
  cResult[7] = mapped;
  tmp19 = mapped;
}) : ((mfaChallenge) => {
  let intl;
  let intl2;
  let items;
  let items1;
  let methods;
  _require = mfaChallenge;
  const tmp = useWideAuthViewDefault();
  const tmp2 = closure_7(tmp);
  let obj = require("useNavigation");
  importDefault = obj.useNavigation();
  const obj2 = { top: !tmp, style: tmp2.container, children: items1 };
  const obj3 = { style: tmp2.selectContainer, children: items };
  const SafeAreaPaddingView = require("common/SafeAreaView").SafeAreaPaddingView;
  const obj4 = { variant: "heading-xl/extrabold", children: intl.string(require("intl").t.S9b9bX) };
  const Heading = require("Text/Text").Heading;
  intl = require("intl").intl;
  items = [closure_5(Heading, obj4), ];
  const obj5 = { variant: "text-sm/medium", children: intl2.string(require("intl").t.Jz1lXO) };
  const Text = require("Text/Text").Text;
  intl2 = require("intl").intl;
  items[1] = closure_5(Text, obj5);
  items1 = [closure_6(View, obj3), ];
  const obj6 = {
    style: { marginTop: 16, gap: 8 },
    children: methods.map((type) => {
      closure_1 = type;
      let closure_2 = closure_1;
      const obj = {
        label: SELECT_NAMES[type.type],
        onPress() {
          closure_2.push(type.type, closure_0);
        }
      };
      return hasOwnProperty(RowButton.RowButton, obj, type.type);
    })
  };
  methods = mfaChallenge.mfaChallenge.methods;
  items1[1] = closure_5(View, obj6);
  return closure_6(SafeAreaPaddingView, obj2);
});
const result = size.fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default tmp4;