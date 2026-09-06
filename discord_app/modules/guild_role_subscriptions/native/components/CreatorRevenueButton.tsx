// discord_app/modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx
import ShinyButtonDefault from "ShinyButton.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const jsx = fn(21).jsx;
const createStyles = fn(4560);
let closure_3 = createStyles.createStyles({ container: { borderRadius: 3 } });
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_role_subscriptions/native/components/CreatorRevenueButton.tsx",
);

export const CreatorRevenueButton = function CreatorRevenueButton(arg0) {
  ({ disabled, text, onPress, style, loading } = arg0);
  const obj = { style: null, loading, disabled, onPress, text };
  const items = [closure_3().container, style];
  obj.style = items;
  return jsx(ShinyButtonDefault, { style: null, loading, disabled, onPress, text });
};
