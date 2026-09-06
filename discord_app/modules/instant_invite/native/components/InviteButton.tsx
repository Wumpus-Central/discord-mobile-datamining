// discord_app/modules/instant_invite/native/components/InviteButton.tsx
import util from "../../../../intl/index.native.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const InviteSendStates = fn(7736).InviteSendStates;
const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_5 = createStyles.createStyles({ buttonWrapper: { minWidth: 66, flexDirection: "row" } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/instant_invite/native/components/InviteButton.tsx");

export default noop.memo(function InviteButton(onPress) {
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
  let obj = { style: closure_5().buttonWrapper, children: null };
  obj = {
    accessibilityRole: "none",
    size: "sm",
    variant: "secondary",
    text: stringResult1,
    onPress: onPress.onPressSend,
    disabled: null,
    grow: true,
  };
  if (!disabled) {
    disabled = flag;
  }
  obj.disabled = disabled;
  obj.children = jsx(components_Button_Button.Button, {
    accessibilityRole: "none",
    size: "sm",
    variant: "secondary",
    text: stringResult1,
    onPress: onPress.onPressSend,
    disabled: null,
    grow: true,
  });
  return (
    <View
      accessibilityRole="none"
      size="sm"
      variant="secondary"
      text={stringResult1}
      onPress={onPress.onPressSend}
      disabled={null}
      grow
    />
  );
});
