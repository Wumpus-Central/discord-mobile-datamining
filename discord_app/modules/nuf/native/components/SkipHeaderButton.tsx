// === Module 12345: SkipHeaderButton ===

// Module 12345 (SkipHeaderButton)
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl2 from "intl" /* 1126 */;
import HeaderShared from "HeaderShared" /* 7498 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let label;

let obj2;
const jsx = Fragment.jsx;
let obj = { button: obj2, insideNavigatorButton: { paddingRight: 16 } };
obj2 = { color: nativeDefault.colors.INTERACTIVE_TEXT_DEFAULT };
let closure_3 = createStyles.createStyles(obj);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((label) => {
  let tmp5;
  const obj = react2;
  const cResult = obj.c(9);
  const tmp4 = closure_3();
  if (cResult[0] !== label.label) {
    label = label.label;
    if (label == null) {
      const intl = intl2.intl;
      label = intl.string(intl2.t["5Wxrcd"]);
    }
    cResult[0] = label.label;
    cResult[1] = label;
    tmp5 = label;
  } else {
    tmp5 = cResult[1];
  }
  let prop;
  if (label.insideNavigator) {
    prop = tmp4.insideNavigatorButton;
  }
  if (cResult[2] === tmp4.button) {
    let tmp8;
    if (cResult[3] === prop) {
      tmp8 = cResult[4];
    }
    if (cResult[5] === tmp5) {
      if (cResult[6] === label) {
        let tmp9;
        if (cResult[7] === tmp8) {
          tmp9 = cResult[8];
        }
        return tmp9;
      }
    }
    const HeaderTextButton = HeaderShared.HeaderTextButton;
    const merged = Object.assign(label);
    const tmp14 = <HeaderTextButton labelStyle={tmp8} label={tmp5} accessibilityLabel={tmp5} />;
    cResult[5] = tmp5;
    cResult[6] = label;
    cResult[7] = tmp8;
    cResult[8] = tmp14;
    tmp9 = tmp14;
  }
  const items = [tmp4.button, prop];
  cResult[2] = tmp4.button;
  cResult[3] = prop;
  cResult[4] = items;
  tmp8 = items;
}) : ((label) => {
  const tmp = closure_3();
  label = label.label;
  if (label == null) {
    const intl = intl2.intl;
    label = intl.string(intl2.t["5Wxrcd"]);
  }
  const HeaderTextButton = HeaderShared.HeaderTextButton;
  const merged = Object.assign(label);
  const items = [tmp.button, ];
  let prop;
  if (label.insideNavigator) {
    prop = tmp.insideNavigatorButton;
  }
  items[1] = prop;
  return <HeaderTextButton labelStyle={items} label={label} accessibilityLabel={label} />;
});
const result = size.fileFinishedImporting("modules/nuf/native/components/SkipHeaderButton.tsx");

export default tmp3;