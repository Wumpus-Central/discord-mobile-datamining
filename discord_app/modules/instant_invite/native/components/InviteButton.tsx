// === Module 9569: InviteButton ===

// Module 9569 (InviteButton)
import react_native from "react-native" /* 17 */;
import Fragment from "Fragment" /* 21 */;
import react2 from "react" /* 576 */;
import intl6 from "intl" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5601 */;
import Constants from "Constants" /* 7239 */;
import react from "react" /* 19 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

const View = react_native.View;
const InviteSendStates = Constants.InviteSendStates;
const jsx = Fragment.jsx;
let closure_5 = createStyles.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const memoResult = react.memo(ReactCompilerGating.isReactCompilerEnabled() ? ((arg0) => {
  let disabled;
  let flag2;
  let onPressSend;
  let sendState;
  let tmp8;
  const obj = react2;
  const cResult = obj.c(11);
  ({ sendState, disabled, onPressSend } = arg0);
  let flag = undefined !== disabled && disabled;
  const tmp4 = closure_5();
  const intl = intl6.intl;
  intl.string(intl6.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    let first;
    const _Symbol4 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = intl6.intl;
      const stringResult1 = intl5.string(intl6.t.jYnGPG);
      cResult[0] = stringResult1;
      first = stringResult1;
    } else {
      first = cResult[0];
    }
    flag = false;
    flag2 = true;
    tmp8 = first;
  } else if (InviteSendStates.SENT === sendState) {
    let tmp14;
    const _Symbol3 = Symbol;
    if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
      const intl4 = intl6.intl;
      const stringResult2 = intl4.string(intl6.t.dVT149);
      cResult[1] = stringResult2;
      tmp14 = stringResult2;
    } else {
      tmp14 = cResult[1];
    }
    flag = true;
    flag2 = false;
    tmp8 = tmp14;
  } else if (InviteSendStates.ERROR === sendState) {
    let tmp11;
    const _Symbol2 = Symbol;
    if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
      const intl3 = intl6.intl;
      const stringResult3 = intl3.string(intl6.t.wNcfpX);
      cResult[2] = stringResult3;
      tmp11 = stringResult3;
    } else {
      tmp11 = cResult[2];
    }
    flag = false;
    tmp8 = tmp11;
    flag2 = false;
  } else {
    const _Symbol = Symbol;
    if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
      const intl2 = intl6.intl;
      const stringResult4 = intl2.string(intl6.t.jYnGPG);
      cResult[3] = stringResult4;
      tmp8 = stringResult4;
    } else {
      tmp8 = cResult[3];
    }
    flag2 = false;
  }
  if (!flag) {
    flag = flag2;
  }
  if (cResult[4] === onPressSend) {
    if (cResult[5] === flag) {
      let tmp19;
      if (cResult[6] === tmp8) {
        tmp19 = cResult[7];
      }
      if (cResult[8] === tmp4.buttonWrapper) {
        let tmp21;
        if (cResult[9] === tmp19) {
          tmp21 = cResult[10];
        }
        return tmp21;
      }
      const tmp24 = <View style={tmp4.buttonWrapper}>{tmp19}</View>;
      cResult[8] = tmp4.buttonWrapper;
      cResult[9] = tmp19;
      cResult[10] = tmp24;
      tmp21 = tmp24;
    }
  }
  const tmp20 = jsx(components_Button_Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: tmp8, onPress: onPressSend, disabled: flag, grow: true });
  cResult[4] = onPressSend;
  cResult[5] = flag;
  cResult[6] = tmp8;
  cResult[7] = tmp20;
  tmp19 = tmp20;
}) : ((onPressSend) => {
  let disabled;
  let flag;
  let sendState;
  ({ sendState, disabled } = onPressSend);
  if (disabled === undefined) {
    disabled = false;
  }
  onPressSend = onPressSend.onPressSend;
  const tmp = closure_5();
  const intl = intl6.intl;
  intl.string(intl6.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = intl6.intl;
    let stringResult1 = intl5.string(intl6.t.jYnGPG);
    disabled = false;
    flag = true;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = intl6.intl;
    stringResult1 = intl4.string(intl6.t.dVT149);
    disabled = true;
    flag = false;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = intl6.intl;
    stringResult1 = intl3.string(intl6.t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = intl6.intl;
    stringResult1 = intl2.string(intl6.t.jYnGPG);
    flag = false;
  }
  const Button = components_Button_Button.Button;
  if (!disabled) {
    disabled = flag;
  }
  return <View style={tmp.buttonWrapper}>{null}</View>;
}));
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default memoResult;