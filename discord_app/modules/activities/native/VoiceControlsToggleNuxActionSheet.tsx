// === Module 17099: VoiceControlsToggleNuxActionSheet ===

// Module 17099 (VoiceControlsToggleNuxActionSheet)
import nativeDefault from "native" /* 576 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4552 */;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(1954).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const src = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
fn(4560);
let createStyles = { videoContainer: null, bottomSheetWrapper: null, contentContainer: null, title: null, body: null };
createStyles = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
createStyles.videoContainer = createStyles;
createStyles.bottomSheetWrapper = { paddingHorizontal: 24 };
createStyles.contentContainer = { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 };
createStyles.title = { marginTop: 16, textAlign: "center" };
createStyles.body = { marginTop: 8, marginBottom: 24, textAlign: "center" };
let closure_11 = createStyles.createStyles(createStyles);
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let isScreenLandscape;
  const tmp = closure_11();
  [tmp3, c1] = _slicedToArray(noop.useState(0), 2);
  let obj = markAsDismissed(isScreenLandscape[8]);
  isScreenLandscape = obj.useIsScreenLandscape();
  let obj1 = markAsDismissed(isScreenLandscape[9]);
  const items = [AccessibilityStore];
  let num = 1.5;
  const stateFromStores = obj1.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = 2.0875;
  }
  obj = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
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
      _undefined(result);
    },
    children: null
  };
  const size = { style: tmp.videoContainer, src, poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png", width: tmp3, height: tmp3 / num, muted: true, paused: stateFromStores };
  const items1 = [closure_8(require("common/Video"), size), , , ];
  const obj2 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(tmp5[13]).intl;
  obj2.children = intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue);
  items1[1] = closure_8(markAsDismissed(isScreenLandscape[12]).Text, obj2);
  const obj3 = { style: tmp.body, variant: "text-sm/normal", children: null };
  const intl2 = tmp4(tmp5[13]).intl;
  obj3.children = intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ);
  items1[2] = closure_8(markAsDismissed(isScreenLandscape[12]).Text, obj3);
  const obj4 = {
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    text: null
  };
  const intl3 = tmp4(tmp5[13]).intl;
  obj4.text = intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"]);
  items1[3] = closure_8(markAsDismissed(isScreenLandscape[14]).Button, obj4);
  obj1.children = items1;
  obj.children = closure_9(View, obj1);
  obj.children = closure_8(View, obj);
  return closure_8(markAsDismissed(isScreenLandscape[10]).BottomSheet, obj);
};