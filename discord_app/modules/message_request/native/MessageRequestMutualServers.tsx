// discord_app/modules/message_request/native/MessageRequestMutualServers.tsx
import "noop";
import { View } from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c4;
let c5;
const require = arg1;
({ jsx: c4, jsxs: c5 } = jsxProd);
let closure_6 = createCacheKey.createStyles({ container: { flexDirection: "row", alignItems: "center", gap: 4 }, label: { flexShrink: 1 } });
const result = require("jsxProd").fileFinishedImporting("modules/message_request/native/MessageRequestMutualServers.tsx");

export default function MessageRequestMutualServers(textVariant) {
  let iconSize;
  let onPress;
  let style;
  let userId;
  ({ onPress, iconSize } = textVariant);
  ({ userId, style } = textVariant);
  if (iconSize === undefined) {
    iconSize = iconSize(5818).GuildIconSizes.XXSMALL_12;
  }
  let str = textVariant.textVariant;
  if (str === undefined) {
    str = "text-xs/medium";
  }
  const suffix = textVariant.suffix;
  const tmp3 = callback2();
  let obj = iconSize(16027);
  const mutualGuildsForMessageRequests = obj.useMutualGuildsForMessageRequests(userId);
  const substr = mutualGuildsForMessageRequests.slice(0, 3);
  if (mutualGuildsForMessageRequests.length > 0) {
    const intl2 = tmp4(1236).intl;
    obj = { count: null };
    obj[0] = length;
    let formatResult = intl2.format(tmp4(1236).t.eE3oep, obj);
  } else {
    const intl = tmp4(1236).intl;
    formatResult = intl.string(tmp4(1236).t.jpY0X5);
  }
  obj = { style: items, children: null };
  items = [tmp3.container, style];
  let tmp9 = length > 0;
  if (tmp9) {
    const obj1 = { size: null, names: null, children: null };
    obj1[0] = iconSize;
    obj1[1] = substr.map((name) => name.name);
    obj1[2] = substr.map((guild) => outer1_4(outer1_1(outer1_2[4]), { guild, size: iconSize }, guild.id));
    tmp9 = callback(tmp4(12035).GuildIconPile, obj1);
  }
  const items1 = [tmp9, ];
  const obj2 = { variant: str, color: "text-muted", lineClamp: 1, style: tmp3.label, children: null };
  let combined = formatResult;
  if (null != suffix) {
    const _HermesInternal = HermesInternal;
    combined = "" + formatResult + " \u00B7 " + suffix;
  }
  obj2[4] = combined;
  items1[1] = callback(iconSize(4340).Text, obj2);
  obj[1] = items1;
  const tmp7Result = closure_5(View, obj);
  let tmp11Result = tmp7Result;
  if (null != onPress) {
    tmp11Result = tmp7Result;
    if (length > 0) {
      const obj3 = { accessibilityRole: "button", onPress: null, children: null };
      obj3[1] = onPress;
      obj3[2] = tmp7Result;
      tmp11Result = tmp11(tmp4(4886).PressableOpacity, obj3);
    }
  }
  return tmp11Result;
};