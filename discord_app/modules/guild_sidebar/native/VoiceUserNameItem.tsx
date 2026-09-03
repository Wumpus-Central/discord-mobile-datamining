// === Module 15960: VoiceUserNameItem ===

// Module 15960 (VoiceUserNameItem)
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 4748 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ jsxs: closure_6, jsx: error } = jsxProd);
let closure_8 = createCacheKey.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const result = require("set").fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default function VoiceUserNameItem(arg0) {
  ({ member, user, isGuest } = arg0);
  let _require;
  importDefault = undefined;
  dependencyMap = undefined;
  let callback;
  ({ guildId, color, variant } = arg0);
  const tmp = callback3();
  let obj = { userId: user.id, guildId };
  obj1 = _require(8944);
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: useDisplayNameStylesDefault(obj) });
  const tmp4 = useDisplayNameStylesDefault(obj);
  [tmp8, c0] = callback(React.useState(0), 2);
  const tmp7 = callback(React.useState(0), 2);
  [tmp10, c1] = callback(React.useState(0), 2);
  const tmp9 = callback(React.useState(0), 2);
  [tmp12, c2] = callback(React.useState(true), 2);
  const tmp11 = callback(React.useState(true), 2);
  [tmp14, c3] = callback(React.useState(0), 2);
  callback = React.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = React.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj = { onLayout: callback, style: null, children: null };
  const items = [tmp.container, ];
  let measuringTag = tmp12;
  const callback2 = React.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
    _undefined3(false);
  }, []);
  if (tmp12) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  obj[1] = items;
  obj = { variant, color, lineClamp: 1, onLayout: callback1, style: null, children: null };
  let tmp20 = null != displayNameStylesFont;
  if (tmp20) {
    obj1 = { fontFamily: null };
    obj1[0] = displayNameStylesFont;
    tmp20 = obj1;
  }
  obj[4] = tmp20;
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = tmp2(4322).getName(user);
    const tmp2Result = tmp2(4322);
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj2 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp5(1233).intl;
    const items2 = ["\u00A0", intl.string(tmp5(1233).t["pFO/Ph"])];
    obj2[3] = items2;
    isGuest = tmp18(tmp5(4474).Text, obj2);
  }
  items1[1] = isGuest;
  obj[5] = items1;
  const items3 = [closure_6(_require(4474).Text, obj), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
    const tmp22 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj3 = { onLayout: null, style: null, children: null };
    obj3[0] = callback2;
    obj3[1] = tmp.tag;
    const obj4 = { userId: null };
    obj4[0] = user.id;
    obj3[2] = callback2(tmp2(15961), obj4);
    tmp12 = callback2(tmp19, obj3);
  }
  items3[1] = tmp12;
  obj[2] = items3;
  return closure_6(View, obj);
};