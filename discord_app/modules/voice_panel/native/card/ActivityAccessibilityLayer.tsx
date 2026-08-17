// discord_app/modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx
import SCREEN_READER_ENABLED_GETTER from "../../../a11y/native/useIsScreenReaderEnabled.native.tsx";
import closure_2 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_3 from "../../../../../_runtime/00019_noop.js";
import get_ActivityIndicator from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import { IS_IOS } from "../../VoicePanelConstants.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";

require = arg1;
function FocusedActivityAccessibilityLayer(activityName) {
  activityName = activityName.activityName;
  let _require;
  let ref;
  ({ channelId, children } = activityName);
  const tmp = callback3();
  [tmp3, c0] = callback(React.useState(false), 2);
  ref = React.useRef(null);
  callback = React.useCallback(() => {
    _undefined(true);
  }, []);
  const callback1 = React.useCallback(() => {
    _undefined(false);
    let obj = _undefined(ref[6]);
    obj = { ref, delay: 300 };
    const result = obj.setAccessibilityFocus(obj);
  }, []);
  if (null != activityName) {
    const intl2 = _require(ref[7]).intl;
    let obj = { name: null };
    obj[0] = activityName;
    let formatToPlainStringResult = intl2.formatToPlainString(_require(ref[7]).t.XSfwGL, obj);
    let tmp8 = ref;
    let tmp10 = _require;
  } else {
    tmp8 = ref;
    const intl = _require(ref[7]).intl;
    formatToPlainStringResult = intl.string(_require(ref[7]).t.KYNi2m);
    tmp10 = _require;
  }
  obj = { style: tmp.fill, children: null };
  obj = { nativeID: "voice-panel-activity-" + channelId, accessibilityViewIsModal: tmp3, onAccessibilityEscape: null, accessibilityElementsHidden: null, importantForAccessibility: null, style: null, children: null };
  let tmp16;
  if (tmp3) {
    tmp16 = callback1;
  }
  obj[2] = tmp16;
  obj[3] = !tmp3;
  let str = "no-hide-descendants";
  if (tmp3) {
    str = "auto";
  }
  obj[4] = str;
  obj[5] = tmp.fill;
  obj[6] = children;
  const items = [closure_8(tmp10(tmp8[8]).AccessibilityView, obj), ];
  obj1 = { ref, style: absoluteFill.absoluteFill, pointerEvents: null, accessible: true, accessibilityRole: "button", accessibilityLabel: null, accessibilityHint: null, accessibilityElementsHidden: null, importantForAccessibility: null, onPress: null };
  let str2 = "auto";
  let str3 = "auto";
  if (tmp3) {
    str3 = "none";
  }
  obj1[2] = str3;
  obj1[5] = formatToPlainStringResult;
  const intl3 = tmp10(tmp8[7]).intl;
  obj1[6] = intl3.string(tmp10(tmp8[7]).t["8DaKO6"]);
  obj1[7] = tmp3;
  if (tmp3) {
    str2 = "no-hide-descendants";
  }
  obj1[8] = str2;
  obj1[9] = callback;
  items[1] = closure_8(closure_4, obj1);
  obj[1] = items;
  return closure_9(closure_6, obj);
}
({ Pressable: c4, StyleSheet: c5, View: closure_6 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
let closure_10 = createCacheKey.createStyles({ fill: { flex: 1 } });
let result = require("set").fileFinishedImporting("modules/voice_panel/native/card/ActivityAccessibilityLayer.tsx");

export default function ActivityAccessibilityLayer(isActivityFocused) {
  const merged = Object.assign(isActivityFocused, Object.create(null));
  let obj = SCREEN_READER_ENABLED_GETTER;
  if (IS_IOS) {
    if (obj.useIsScreenReaderEnabled()) {
      if (isActivityFocused.isActivityFocused) {
        obj = {};
        const merged1 = Object.assign(merged);
        let children = callback2(FocusedActivityAccessibilityLayer, obj);
      }
      return children;
    }
  }
  children = merged.children;
};