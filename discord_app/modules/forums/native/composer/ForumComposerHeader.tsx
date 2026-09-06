// discord_app/modules/forums/native/composer/ForumComposerHeader.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import useChannelNameDefault from "../../../channel/useChannelName.tsx";
import ForumIcon from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import XSmallIcon from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
get_ActivityIndicator = fn(17);
({ StyleSheet: c3, View: closure_4 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: metroRequire } = jsxProd);
const createStyles = fn(4560);
let closure_7 = createStyles.createStyles((height) => {
  let obj = {
    headerBar: null,
    headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 },
    headerBarText: null,
    headerBarSeparator: null,
    button: null,
  };
  obj = { height, flexDirection: "row", alignItems: "center" };
  obj.headerBar = obj;
  obj = { marginHorizontal: nativeDefault.space.PX_16 };
  obj.headerBarText = obj;
  const obj1 = {};
  const merged = Object.assign(React3.absoluteFillObject);
  obj1.height = React3.hairlineWidth;
  obj1.backgroundColor = nativeDefault.colors.BORDER_SUBTLE;
  obj1.top = undefined;
  obj.headerBarSeparator = obj1;
  obj.button = { paddingHorizontal: nativeDefault.space.PX_16 };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  ({ title, channel, onClose: require } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = closure_7(height.height);
  let obj = { style: tmp.headerBar, children: null };
  obj = {
    style: tmp.button,
    accessibilityRole: "button",
    accessibilityLabel: null,
    disabled: null,
    onPress: null,
    children: null,
  };
  const intl = util.intl;
  obj.accessibilityLabel = intl.string(util.t.cpT0Cq);
  obj.disabled = submitting;
  obj.onPress = function onPress() {
    return require(false);
  };
  obj.children = hasOwnProperty(XSmallIcon.XSmallIcon, {});
  const items = [hasOwnProperty(Pressables.PressableOpacity, obj), , ,];
  obj = { style: tmp.headerBarContent, children: null };
  const items1 = [hasOwnProperty(ForumIcon.ForumIcon, { size: "sm" })];
  const obj1 = { style: tmp.headerBarText, children: null };
  if ("" === title) {
    const intl2 = tmp7(1114).intl;
    title = intl2.string(tmp7(1114).t["7EjFCk"]);
  }
  const items2 = [
    hasOwnProperty(Text_Text.Text, {
      lineClamp: 1,
      ellipsizeMode: "tail",
      variant: "text-md/semibold",
      color: "mobile-text-heading-primary",
      children: title,
    }),
    hasOwnProperty(Text_Text.Text, {
      variant: "text-xs/medium",
      color: "text-default",
      children: useChannelNameDefault(channel),
    }),
  ];
  obj1.children = items2;
  items1[1] = timestampProducer(React4, obj1);
  obj.children = items1;
  items[1] = timestampProducer(React4, obj);
  let length;
  if (channel != null) {
    length = channel.topic.length;
  }
  let tmp6Result = null;
  if (length > 0) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl3 = tmp7(1114).intl;
    obj2.accessibilityLabel = intl3.string(tmp7(1114).t.yR6HwZ);
    obj2.style = tmp.button;
    obj2.onPress = onGuidelinesPress;
    obj2.children = tmp6(tmp7(5075).BookCheckIcon, {});
    tmp6Result = tmp6(tmp7(5123).PressableOpacity, obj2);
  }
  items[2] = tmp6Result;
  items[3] = hasOwnProperty(React4, { style: tmp.headerBarSeparator });
  obj.children = items;
  return timestampProducer(React4, obj);
}
