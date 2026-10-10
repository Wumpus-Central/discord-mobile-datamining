// === Module 8768: InviteButton ===

// Module 8768 (InviteButton)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import components_Button_Button from "components/Button/Button" /* 5379 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const InviteSendStates = fn(7423).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(5092);
let closure_5 = createStyles.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default noop.memo(ReactCompilerGating.isReactCompilerEnabled() ? (function InviteButton(arg0) {
  const cResult = c.c(11);
  ({ sendState, disabled, onPressSend } = arg0);
  let flag = undefined !== disabled && disabled;
  const tmp4 = closure_5();
  const intl = util.intl;
  intl.string(util.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const _Symbol4 = Symbol;
    if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
      const intl5 = util.intl;
      const stringResult1 = intl5.string(util.t.jYnGPG);
      cResult[0] = stringResult1;
      let first = stringResult1;
    } else {
      first = cResult[0];
    }
  } else {
    if (InviteSendStates.SENT === sendState) {
      const _Symbol3 = Symbol;
      if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = util.intl;
        const stringResult2 = intl4.string(util.t.dVT149);
        cResult[1] = stringResult2;
        let tmp14 = stringResult2;
      } else {
        tmp14 = cResult[1];
      }
      flag = true;
      let flag2 = false;
      let tmp8 = tmp14;
    } else if (InviteSendStates.ERROR === sendState) {
      const _Symbol2 = Symbol;
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl3 = util.intl;
        const stringResult3 = intl3.string(util.t.wNcfpX);
        cResult[2] = stringResult3;
        let tmp11 = stringResult3;
      } else {
        tmp11 = cResult[2];
      }
      flag = false;
      tmp8 = tmp11;
      flag2 = false;
    } else {
      const _Symbol = Symbol;
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult4 = intl2.string(util.t.jYnGPG);
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
        if (cResult[6] === tmp8) {
          let tmp20 = cResult[7];
        }
        if (cResult[8] === tmp4.buttonWrapper) {
          if (cResult[9] === tmp20) {
            let tmp23 = cResult[10];
          }
          return tmp23;
        }
        const obj2 = { style: tmp4.buttonWrapper, children: tmp20 };
        const tmp26 = <View style={tmp4.buttonWrapper}>{tmp20}</View>;
        cResult[8] = tmp4.buttonWrapper;
        cResult[9] = tmp20;
        cResult[10] = tmp26;
        tmp23 = tmp26;
      }
    }
    const obj3 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: tmp8, onPress: onPressSend, disabled: flag, grow: true };
    const tmp22 = jsx(components_Button_Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: tmp8, onPress: onPressSend, disabled: flag, grow: true });
    cResult[4] = onPressSend;
    cResult[5] = flag;
    cResult[6] = tmp8;
    cResult[7] = tmp22;
    tmp20 = tmp22;
  }
}) : (function InviteButton(onPress) {
  ({ sendState, disabled } = onPress);
  if (disabled === undefined) {
    disabled = false;
  }
  const intl = util.intl;
  intl.string(util.t.jYnGPG);
  if (InviteSendStates.SENDING === sendState) {
    const intl5 = util.intl;
    let stringResult1 = intl5.string(util.t.jYnGPG);
    disabled = false;
    let flag = true;
  } else if (InviteSendStates.SENT === sendState) {
    const intl4 = util.intl;
    stringResult1 = intl4.string(util.t.dVT149);
    disabled = true;
    flag = false;
  } else if (InviteSendStates.ERROR === sendState) {
    const intl3 = util.intl;
    stringResult1 = intl3.string(util.t.wNcfpX);
    disabled = false;
    flag = false;
  } else {
    const intl2 = util.intl;
    stringResult1 = intl2.string(util.t.jYnGPG);
    flag = false;
  }
  const obj = { style: closure_5().buttonWrapper, children: null };
  const obj2 = { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true };
  if (!disabled) {
    disabled = flag;
  }
  obj2.disabled = disabled;
  obj.children = jsx(components_Button_Button.Button, { accessibilityRole: "none", size: "sm", variant: "secondary", text: stringResult1, onPress: onPress.onPressSend, disabled: null, grow: true });
  return <View style={closure_5().buttonWrapper}>{null}</View>;
}));