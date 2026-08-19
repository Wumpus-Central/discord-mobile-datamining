// === Module 10180: ForumComposerHeader ===

// Module 10180 (ForumComposerHeader)
import noopAll from "noop" /* 19 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Text from "Text" /* 4734 */;
import computeChannelNameDefault from "computeChannelName" /* 4984 */;
import PressableBase from "PressableBase" /* 5433 */;
import XSmallIcon from "XSmallIcon" /* 6368 */;
import BookCheckIcon from "BookCheckIcon" /* 6871 */;
import ForumIcon from "ForumIcon" /* 6883 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

require = fn;
noopAll;
({ StyleSheet: c3, View: c4 } = get_ActivityIndicator);
({ jsx: c5, jsxs: closure_6 } = jsxProd);
let closure_7 = createCacheKey.createStyles((height) => {
  const obj = { marginHorizontal: ThemesDefault.space.PX_16 };
  obj[2] = obj;
  obj1 = {};
  const merged = Object.assign(closure_3.absoluteFillObject);
  obj1.height = closure_3.hairlineWidth;
  obj1.backgroundColor = ThemesDefault.colors.BORDER_SUBTLE;
  obj1.top = undefined;
  obj[3] = obj1;
  obj[4] = { paddingHorizontal: ThemesDefault.space.PX_16 };
  return obj;
});
const result = require("obj132").fileFinishedImporting("modules/forums/native/composer/ForumComposerHeader.tsx");

export default function ForumComposerHeader(height) {
  ({ title, channel, onClose: require } = height);
  ({ submitting, onGuidelinesPress } = height);
  const tmp = callback2(height.height);
  let obj = { style: tmp.button, accessibilityRole: "button", accessibilityLabel: null, disabled: null, onPress: null, children: null };
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
  obj1 = { style: tmp.headerBarText, children: null };
  if ("" === title) {
    const intl2 = getSystemLocale.intl;
    title = intl2.string(getSystemLocale.t["7EjFCk"]);
  }
  const items2 = [callback(Text.Text, { lineClamp: 1, ellipsizeMode: "tail", variant: "text-md/semibold", color: "mobile-text-heading-primary", children: title }), callback(Text.Text, { variant: "text-xs/medium", color: "text-default", children: computeChannelNameDefault(channel) })];
  obj1[1] = items2;
  items1[1] = callback(closure_4, obj1);
  obj[1] = items1;
  items[1] = callback(closure_4, obj);
  let length;
  if (channel != null) {
    length = channel.topic.length;
  }
  let tmp6Result = null;
  if (length > 0) {
    const obj2 = { accessibilityRole: "button", accessibilityLabel: null, style: null, onPress: null, children: null };
    const intl3 = getSystemLocale.intl;
    obj2[1] = intl3.string(getSystemLocale.t.yR6HwZ);
    obj2[2] = tmp.button;
    obj2[3] = onGuidelinesPress;
    obj2[4] = callback(BookCheckIcon.BookCheckIcon, {});
    tmp6Result = callback(PressableBase.PressableOpacity, obj2);
  }
  items[2] = tmp6Result;
  items[3] = callback(closure_4, { style: tmp.headerBarSeparator });
  obj[1] = items;
  return callback(closure_4, obj);
};