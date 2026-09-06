// === Module 16124: VoiceUserNameItem ===

// Module 16124 (VoiceUserNameItem)
import Text_Text from "Text/Text" /* 4556 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 4794 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9176 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(4560);
let closure_8 = createStyles.createStyles({ container: { marginLeft: 8, flex: 1, flexDirection: "row" }, tag: { flexDirection: "row", alignItems: "center", paddingLeft: 8 }, measuringTag: { opacity: 0 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_sidebar/native/VoiceUserNameItem.tsx");

export default function VoiceUserNameItem(arg0) {
  ({ member, user, isGuest } = arg0);
  c0 = undefined;
  c1 = undefined;
  c2 = undefined;
  c3 = undefined;
  ({ guildId, color, variant } = arg0);
  const tmp = closure_8();
  let obj = { userId: user.id, guildId };
  let obj1 = useDisplayNameStylesFont;
  const displayNameStylesFont = obj1.useDisplayNameStylesFont({ displayNameStyles: useDisplayNameStylesDefault(obj) });
  const tmp4 = useDisplayNameStylesDefault(obj);
  [tmp8, c0] = _slicedToArray(noop.useState(0), 2);
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  [tmp10, c1] = _slicedToArray(noop.useState(0), 2);
  const tmp9 = _slicedToArray(noop.useState(0), 2);
  [tmp12, c2] = _slicedToArray(noop.useState(true), 2);
  const tmp11 = _slicedToArray(noop.useState(true), 2);
  [tmp14, c3] = _slicedToArray(noop.useState(0), 2);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  obj = { onLayout: callback, style: null, children: null };
  const items = [tmp.container, ];
  let measuringTag = tmp12;
  const callback2 = noop.useCallback((nativeEvent) => {
    _undefined4(nativeEvent.nativeEvent.layout.width);
    _undefined3(false);
  }, []);
  if (tmp12) {
    measuringTag = tmp.measuringTag;
  }
  items[1] = measuringTag;
  obj.style = items;
  obj = { variant, color, lineClamp: 1, onLayout: callback1, style: null, children: null };
  let tmp20 = null != displayNameStylesFont;
  if (tmp20) {
    obj1 = { fontFamily: displayNameStylesFont };
    tmp20 = obj1;
  }
  obj.style = tmp20;
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = tmp2(4404).getName(user);
    const tmp2Result = tmp2(4404);
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj2 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: null };
    const intl = tmp5(1114).intl;
    const items2 = ["\u00A0", intl.string(tmp5(1114).t["pFO/Ph"])];
    obj2.children = items2;
    isGuest = tmp18(tmp5(4556).Text, obj2);
  }
  items1[1] = isGuest;
  obj.children = items1;
  const items3 = [timestampProducer(Text_Text.Text, obj), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
    const tmp22 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj3 = { onLayout: callback2, style: tmp.tag, children: null };
    const obj4 = { userId: user.id };
    obj3.children = React5(tmp2(16125), obj4);
    tmp12 = React5(tmp19, obj3);
  }
  items3[1] = tmp12;
  obj.children = items3;
  return timestampProducer(View, obj);
};