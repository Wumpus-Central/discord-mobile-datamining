// discord_app/modules/message_request/native/MessageRequestMutualServers.tsx
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4640);
let closure_6 = createStyles.createStyles({
  container: { flexDirection: "row", alignItems: "center", gap: 4 },
  label: { flexShrink: 1 },
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default function MessageRequestMutualServers(textVariant) {
  ({ onPress, iconSize } = textVariant);
  ({ userId, style } = textVariant);
  if (iconSize === undefined) {
    iconSize = iconSize(5672).GuildIconSizes.XXSMALL_12;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = closure_6();
  const mutualGuildsForMessageRequests = iconSize(17130).useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = tmp4(1115).intl;
    const obj2 = { count: length };
    let formatResult = intl2.format(tmp4(1115).t.eE3oep, obj2);
  } else {
    const intl = tmp4(1115).intl;
    formatResult = intl.string(tmp4(1115).t.jpY0X5);
  }
  const obj3 = { style: null, children: null };
  const items = [tmp3.container, style];
  obj3.style = items;
  let tmp9 = length > 0;
  if (tmp9) {
    const obj4 = {
      size: iconSize,
      names: substr.map((name) => name.name),
      children: substr.map((guild) => React4(GuildIconDefault, { guild, size: iconSize }, guild.id)),
    };
    tmp9 = closure_4(tmp4(12769).GuildIconPile, obj4);
  }
  const items1 = [tmp9];
  const obj5 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: null };
  let combined = formatResult;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  obj5.children = combined;
  items1[1] = closure_4(iconSize(4636).Text, obj5);
  obj3.children = items1;
  const tmp7Result = closure_5(View, obj3);
  let tmp11Result = tmp7Result;
  if (null != onPress) {
    tmp11Result = tmp7Result;
    if (length > 0) {
      const obj6 = { accessibilityRole: "button", onPress, children: tmp7Result };
      tmp11Result = closure_4(tmp4(5210).PressableOpacity, obj6);
    }
  }
  return tmp11Result;
}
