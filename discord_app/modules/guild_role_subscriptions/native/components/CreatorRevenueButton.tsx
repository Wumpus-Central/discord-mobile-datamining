// === Module 10107: CreatorRevenueButton ===

// Module 10107 (CreatorRevenueButton)
import ShinyButtonDefault from "ShinyButton" /* 10108 */;
import noop from "module_19" /* 19 */;

const jsx = fn(21).jsx;
const createStyles = fn(5141);
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx");

export function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  const obj = { style: null, loading, disabled, onPress, text };
  items = [closure_3().container, style];
  obj.style = items;
  return jsx(ShinyButtonDefault, { style: null, loading, disabled, onPress, text });
}