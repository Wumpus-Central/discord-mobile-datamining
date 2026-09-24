// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const SELECT_NAMES = fn(16027).SELECT_NAMES;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4829);
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
const size = fn(2);
const result = size.fileFinishedImporting("modules/mfa/native/screens/SelectScreen.tsx");

export default function SelectScreen(mfaChallenge) {
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
}
