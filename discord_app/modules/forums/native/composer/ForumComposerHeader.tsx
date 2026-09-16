// === Module 10405: ForumComposerHeader ===

// Module 10405 (ForumComposerHeader)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import Text_Text from "Text/Text" /* 4634 */;
import useChannelNameDefault from "useChannelName" /* 4791 */;
import BookCheckIcon from "BookCheckIcon" /* 5160 */;
import ForumIcon from "ForumIcon" /* 5173 */;
import Pressables from "Pressables" /* 5208 */;
import XSmallIcon from "XSmallIcon" /* 5766 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4638);
let closure_7 = createStyles.createStyles((height) => {
  const obj = { headerBar: { height, flexDirection: "row", alignItems: "center" }, headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 }, headerBarText: { marginHorizontal: nativeDefault.space.PX_16 }, headerBarSeparator: null, button: null };
  const obj4 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj4.height = React3.hairlineWidth;
  obj4.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
  obj4.top = undefined;
  obj.headerBarSeparator = obj4;
  const obj2 = { height, flexDirection: "row", alignItems: "center" };
  const obj3 = { marginHorizontal: nativeDefault.space.PX_16 };
  obj.button = { paddingHorizontal: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  ({ title, channel, onClose: require } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = closure_7(height.height);
  const obj = { style: tmp.headerBar, children: null };
  const obj2 = { style: tmp.button, accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, children: null };
  const intl = util.intl;
  obj2.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj2.disabled = submitting;
  obj2.onPress = function onPress() {
    return require(false);
  };
  obj2.children = hasOwnProperty(XSmallIcon.XSmallIcon, {});
  const items = [hasOwnProperty(Pressables.PressableOpacity, obj2), , , ];
  const obj3 = { style: tmp.headerBarContent, children: null };
  const items1 = [hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" }), ];
  const obj4 = { style: tmp.headerBarText, children: null };
  if ("" === title) {
    const intl2 = util.intl;
    title = intl2.string(util.t["7EjFCk"]);
  }
  const items2 = [hasOwnProperty(Text_Text.Text, { lineClamp: 1, ellipsizeMode: "tail", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), hasOwnProperty(Text_Text.Text, { variant: "text-xs/medium", color: "text-default", children: useChannelNameDefault(channel) })];
  obj4.children = items2;
  items1[1] = timestampProducer(React4, obj4);
  obj3.children = items1;
  items[1] = timestampProducer(React4, obj3);
  let length;
  if (channel != null) {
    length = channel.topic.length;
  }
  let tmp6Result = null;
  if (length > 0) {
    const obj5 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl3 = util.intl;
    obj5.accessibilityLabel = intl3.string(util.t.yR6HwZ);
    obj5.style = tmp.button;
    obj5.onPress = onGuidelinesPress;
    obj5.children = hasOwnProperty(BookCheckIcon.BookCheckIcon, {});
    tmp6Result = hasOwnProperty(Pressables.PressableOpacity, obj5);
  }
  items[2] = tmp6Result;
  items[3] = hasOwnProperty(React4, { style: tmp.headerBarSeparator });
  obj.children = items;
  return timestampProducer(React4, obj);
};