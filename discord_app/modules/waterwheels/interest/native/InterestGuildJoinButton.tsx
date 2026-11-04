// === Module 19839: InterestGuildJoinButton ===

// Module 19839 (InterestGuildJoinButton)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import _modDef2537 from "module_2537" /* 2537 */;
import components_Button_Button from "components/Button/Button" /* 5768 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsx = fn(21).jsx;
const createStyles = fn(5141);
let obj2 = { button: { width: nativeDefault.space.PX_64 + nativeDefault.space.PX_8 } };
let closure_6 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/waterwheels/interest/native/InterestGuildJoinButton.tsx");

export default function InterestGuildJoinButton(guild) {
  const guildId = guild.guildId;
  const joins = guild.joins;
  let flag = guild.fullWidth;
  if (flag === undefined) {
    flag = false;
  }
  const joined = noop.useSyncExternalStore(joins.subscribe, joins.getSnapshot).joined;
  const hasItem = joined.includes(guildId);
  let button;
  if (!flag) {
    button = tmp.button;
  }
  const obj = { style: button, children: null };
  let str = "sm";
  if (flag) {
    str = "lg";
  }
  const obj2 = { size: str, text: null, accessibilityLabel: null, variant: null, disabled: null, onPress: null };
  const intl = util.intl;
  if (hasItem) {
    let VJlc0S = _modDef2537.X4zfDg;
  } else {
    VJlc0S = util.t.VJlc0S;
  }
  obj2.text = intl.string(VJlc0S);
  const intl2 = util.intl;
  const tmp9 = _modDef2537;
  obj2.accessibilityLabel = intl2.formatToPlainString(hasItem ? tmp9.t1du0D : tmp9.NOfX8z, { guild: guild.guildName });
  let str2 = "primary";
  if (hasItem) {
    str2 = "secondary";
  }
  obj2.variant = str2;
  obj2.disabled = hasItem;
  obj2.onPress = function onPress() {
    return joins.join(guildId);
  };
  obj.children = jsx(components_Button_Button.Button, { size: str, text: null, accessibilityLabel: null, variant: null, disabled: null, onPress: null });
  return <View style={button}>{null}</View>;
};