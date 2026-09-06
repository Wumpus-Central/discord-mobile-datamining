// discord_app/modules/mfa/native/screens/SelectScreen.tsx
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import useWideAuthViewDefault from "../../../auth/native/useWideAuthView.tsx";
import RowButton from "../../../../design/components/TableRow/native/RowButton.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const SELECT_NAMES = fn(15665).SELECT_NAMES;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
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
  let obj = require("useNavigation");
  importDefault = obj.useNavigation();
  obj = { top: !tmp, style: tmp2.container, children: null };
  obj = { style: tmp2.selectContainer, children: null };
  const obj1 = { variant: "heading-xl/extrabold", children: null };
  const intl = require("util").intl;
  obj1.children = intl.string(require("util").t.S9b9bX);
  const items = [closure_5(require("Text/Text").Heading, obj1)];
  const obj2 = { variant: "text-sm/medium", children: null };
  const intl2 = require("util").intl;
  obj2.children = intl2.string(require("util").t.Jz1lXO);
  items[1] = closure_5(require("Text/Text").Text, obj2);
  obj.children = items;
  const items1 = [closure_6(View, obj)];
  const obj3 = { style: { marginTop: 16, gap: 8 }, children: null };
  const methods = mfaChallenge.mfaChallenge.methods;
  obj3.children = methods.map((type) => {
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
  items1[1] = closure_5(View, obj3);
  obj.children = items1;
  return closure_6(require("common/SafeAreaView").SafeAreaPaddingView, obj);
}
