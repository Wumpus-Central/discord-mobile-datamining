// discord_app/modules/forums/native/composer/ForumComposerHeader.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../../discord_common/js/packages/tokens/native.tsx";
import { ForumIcon } from "../../../../design/components/Icon/native/redesign/generated/ForumIcon.tsx";
import { XSmallIcon } from "../../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import { Text } from "../../../../design/components/Text/native/Text.tsx";
import { PressableBase } from "../../../../design/void/Pressables/native/Pressables.tsx";
import { getSystemLocale } from "../../../../intl/index.native.tsx";
import { computeChannelName } from "../../../channel/useChannelName.tsx";

let c3;
let c4;
let c5;
let closure_6;
const require = arg1;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((height) => {
  obj = { headerBar: obj, headerBarContent: { flexDirection: "row", alignItems: "center", flex: 1 }, headerBarText: null, headerBarSeparator: null, button: null };
  obj = { height, flexDirection: "row", alignItems: "center" };
  obj = { marginHorizontal: Themes.space.PX_16 };
  obj[2] = obj;
  const obj1 = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj1.height = closure_3.hairlineWidth;
  obj1.backgroundColor = Themes.colors.BORDER_SUBTLE;
  obj1.top = undefined;
  obj[3] = obj1;
  obj[4] = { paddingHorizontal: Themes.space.PX_16 };
  return obj;
});
const result = require("jsxProd").fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  let channel;
  let onGuidelinesPress;
  let require;
  let submitting;
  let title;
  ({ title, channel, onClose: require } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = callback2(height.height);
  let obj = { style: tmp.headerBar, children: null };
  obj = { style: tmp.button, accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t.cpT0Cq);
  obj[3] = submitting;
  obj[4] = function onPress() {
    return callback(false);
  };
  obj[5] = callback(XSmallIcon.XSmallIcon, {});
  const items = [callback(PressableBase.PressableOpacity, obj), , , ];
  obj = { style: tmp.headerBarContent, children: null };
  const items1 = [callback(ForumIcon.ForumIcon, { size: "sm" }), ];
  const obj1 = { style: tmp.headerBarText, children: null };
  if ("" === title) {
    const intl2 = tmp7(1236).intl;
    title = intl2.string(tmp7(1236).t["7EjFCk"]);
  }
  const items2 = [callback(Text.Text, { lineClamp: 1, ellipsizeMode: "tail", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), callback(Text.Text, { variant: "text-xs/medium", color: "text-default", children: computeChannelName(channel) })];
  obj1[1] = items2;
  items1[1] = closure_6(closure_4, obj1);
  obj[1] = items1;
  items[1] = closure_6(closure_4, obj);
  let length;
  if (channel != null) {
    length = channel.topic.length;
  }
  let tmp6Result = null;
  if (length > 0) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl3 = tmp7(1236).intl;
    obj2[1] = intl3.string(tmp7(1236).t.yR6HwZ);
    obj2[2] = tmp.button;
    obj2[3] = onGuidelinesPress;
    obj2[4] = tmp6(tmp7(4845).BookCheckIcon, {});
    tmp6Result = tmp6(tmp7(4887).PressableOpacity, obj2);
  }
  items[2] = tmp6Result;
  items[3] = callback(closure_4, { style: tmp.headerBarSeparator });
  obj[1] = items;
  return closure_6(closure_4, obj);
};