// === Module 16011: VoiceControlsToggleActionSheet ===

// Module 16011 (VoiceControlsToggleActionSheet)
import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { View } from "get ActivityIndicator";
import maybeApplyNoTextColorForLightCustomTheme from "maybeApplyNoTextColorForLightCustomTheme";
import { ContentDismissActionType } from "ContentDismissActionType";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let c9;
let metroImportAll;
const require = arg1;
({ jsx: metroImportAll, jsxs: c9 } = jsxProd);
let closure_10 = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
createCacheKey = { videoContainer: null, bottomSheetWrapper: null, contentContainer: null, title: null, body: null };
createCacheKey = { borderRadius: require("Themes").radii.sm, overflow: "hidden" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: 24 };
createCacheKey[2] = { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 };
createCacheKey[3] = { marginTop: 16, textAlign: "center" };
createCacheKey[4] = { marginTop: 8, marginBottom: 24, textAlign: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("get ActivityIndicator").fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  let c1;
  let tmp3;
  markAsDismissed = markAsDismissed.markAsDismissed;
  let importDefault;
  let isScreenLandscape;
  const tmp = createCacheKey();
  [tmp3, c1] = callback(React.useState(0), 2);
  let obj = markAsDismissed(isScreenLandscape[8]);
  isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = markAsDismissed(isScreenLandscape[9]);
  const items = [maybeApplyNoTextColorForLightCustomTheme];
  let num = 1.5;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = 2.0875;
  }
  obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(outer1_7.UNKNOWN);
    },
    children: null
  };
  obj = { style: tmp.bottomSheetWrapper, children: null };
  obj1 = {
    style: tmp.contentContainer,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      let result = width;
      if (isScreenLandscape) {
        result = width / 2;
      }
      c1(result);
    },
    children: null
  };
  const items1 = [callback2(importDefault(isScreenLandscape[11]), { style: tmp.videoContainer, src: closure_10, poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png", width: tmp3, height: tmp3 / num, muted: true, paused: stateFromStores }), , , ];
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(tmp5[13]).intl;
  obj3[4] = intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue);
  items1[1] = callback2(markAsDismissed(isScreenLandscape[12]).Text, obj3);
  const obj4 = { style: tmp.body, variant: "text-sm/normal", children: null };
  const intl2 = tmp4(tmp5[13]).intl;
  obj4[2] = intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ);
  items1[2] = callback2(markAsDismissed(isScreenLandscape[12]).Text, obj4);
  const obj5 = {
    onPress() {
      return markAsDismissed(outer1_7.UNKNOWN);
    },
    text: null
  };
  const intl3 = tmp4(tmp5[13]).intl;
  obj5[1] = intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"]);
  items1[3] = callback2(markAsDismissed(isScreenLandscape[14]).Button, obj5);
  obj1[2] = items1;
  obj[1] = callback3(View, obj1);
  obj[2] = callback2(View, obj);
  return callback2(markAsDismissed(isScreenLandscape[10]).BottomSheet, obj);
};