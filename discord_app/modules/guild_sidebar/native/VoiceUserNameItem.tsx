// === Module 16457: VoiceUserNameItem ===

// Module 16457 (VoiceUserNameItem)
import util from "util" /* 1115 */;
import UserUtilsDefault from "UserUtils" /* 4600 */;
import Text_Text from "Text/Text" /* 4752 */;
import useDisplayNameStylesDefault from "useDisplayNameStyles" /* 4989 */;
import useDisplayNameStylesFont from "useDisplayNameStylesFont" /* 9995 */;
import VoiceGuildTagDefault from "VoiceGuildTag" /* 16458 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsxs: metroRequire, jsx: closure_7 } = jsxProd);
const createStyles = fn(4756);
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
  const obj = { userId: user.id, guildId };
  const tmp4 = useDisplayNameStylesDefault({ userId: user.id, guildId });
  const displayNameStylesFont = useDisplayNameStylesFont.useDisplayNameStylesFont({ displayNameStyles: tmp4 });
  [tmp8, c0] = noop.useState(0);
  const tmp7 = _slicedToArray(noop.useState(0), 2);
  [tmp10, c1] = noop.useState(0);
  const tmp9 = _slicedToArray(noop.useState(0), 2);
  [tmp12, c2] = noop.useState(true);
  const tmp11 = _slicedToArray(noop.useState(true), 2);
  [tmp14, c3] = noop.useState(0);
  const callback = noop.useCallback((nativeEvent) => {
    _undefined(nativeEvent.nativeEvent.layout.width);
  }, []);
  const callback1 = noop.useCallback((nativeEvent) => {
    _undefined2(nativeEvent.nativeEvent.layout.width);
  }, []);
  const obj3 = { onLayout: callback, style: null, children: null };
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
  obj3.style = items;
  const obj4 = { variant, color, lineClamp: 1, onLayout: callback1, style: null, children: null };
  let tmp20 = null != displayNameStylesFont;
  if (tmp20) {
    const obj5 = { fontFamily: displayNameStylesFont };
    tmp20 = obj5;
  }
  obj4.style = tmp20;
  let nick;
  if (member != null) {
    nick = member.nick;
  }
  if (nick == null) {
    nick = UserUtilsDefault.getName(user);
    const tmp2Result = UserUtilsDefault;
  }
  const items1 = [nick, ];
  if (isGuest) {
    const obj6 = { variant: "text-sm/normal", lineClamp: 1, color: "status-positive", children: null };
    const intl = util.intl;
    const items2 = ["\u00A0", intl.string(util.t["pFO/Ph"])];
    obj6.children = items2;
    isGuest = timestampProducer(Text_Text.Text, obj6);
  }
  items1[1] = isGuest;
  obj4.children = items1;
  const items3 = [timestampProducer(Text_Text.Text, obj4), ];
  if (!tmp12) {
    tmp12 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
    const tmp22 = 0 !== tmp8 && 0 !== tmp10 && 0 !== tmp14 && tmp8 >= tmp10 + tmp14;
  }
  if (tmp12) {
    const obj7 = { onLayout: callback2, style: tmp.tag, children: null };
    const obj8 = { userId: user.id };
    obj7.children = React5(VoiceGuildTagDefault, obj8);
    tmp12 = React5(View, obj7);
  }
  items3[1] = tmp12;
  obj3.children = items3;
  return timestampProducer(View, obj3);
};