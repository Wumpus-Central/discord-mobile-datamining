// discord_app/modules/message_request/native/MessageRequestMutualServers.tsx
import GuildIconDefault from "../../guild/native/GuildIcon.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

const require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
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
    iconSize = iconSize(5584).GuildIconSizes.XXSMALL_12;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = closure_6();
  let obj = iconSize(16880);
  const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = tmp4(1114).intl;
    obj = { count: length };
    let formatResult = intl2.format(tmp4(1114).t.eE3oep, obj);
  } else {
    const intl = tmp4(1114).intl;
    formatResult = intl.string(tmp4(1114).t.jpY0X5);
  }
  obj = { style: null, children: null };
  const items = [tmp3.container, style];
  obj.style = items;
  let tmp9 = length > 0;
  if (tmp9) {
    const obj1 = {
      size: iconSize,
      names: substr.map((name) => name.name),
      children: substr.map((guild) => React4(GuildIconDefault, { guild, size: iconSize }, guild.id)),
    };
    tmp9 = closure_4(tmp4(12618).GuildIconPile, obj1);
  }
  const items1 = [tmp9];
  const obj2 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: null };
  let combined = formatResult;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  obj2.children = combined;
  items1[1] = closure_4(iconSize(4556).Text, obj2);
  obj.children = items1;
  const tmp7Result = closure_5(View, obj);
  let tmp11Result = tmp7Result;
  if (null != onPress) {
    tmp11Result = tmp7Result;
    if (length > 0) {
      const obj3 = { accessibilityRole: "button", onPress, children: tmp7Result };
      tmp11Result = tmp11(tmp4(5123).PressableOpacity, obj3);
    }
  }
  return tmp11Result;
}
