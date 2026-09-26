// discord_app/modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import AccessibilityStore from "../../a11y/AccessibilityStore.tsx";

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2042).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const src = {
  videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4",
};
const createStyles = fn(4836);
const obj2 = {
  videoContainer: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" },
  bottomSheetWrapper: { paddingHorizontal: 24 },
  contentContainer: { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 },
  title: { marginTop: 16, textAlign: "center" },
  body: { marginTop: 8, marginBottom: 24, textAlign: "center" },
};
let closure_11 = createStyles.createStyles(obj2);
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default function VoiceControlsToggleActionSheet(markAsDismissed) {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let isScreenLandscape;
  const tmp = closure_11();
  [tmp3, c1] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  isScreenLandscape = markAsDismissed(isScreenLandscape[8]).useIsScreenLandscape();
  const obj = markAsDismissed(isScreenLandscape[8]);
  const items = [AccessibilityStore];
  let num = 1.5;
  const stateFromStores = markAsDismissed(isScreenLandscape[9]).useStateFromStores(
    items,
    () => useReducedMotion.useReducedMotion,
  );
  if (isScreenLandscape) {
    num = 2.0875;
  }
  const obj3 = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null,
  };
  const obj4 = { style: tmp.bottomSheetWrapper, children: null };
  const obj5 = {
    style: tmp.contentContainer,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      let result = width;
      if (isScreenLandscape) {
        result = width / 2;
      }
      _undefined(result);
    },
    children: null,
  };
  const size = {
    style: tmp.videoContainer,
    src,
    poster: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png",
    width: tmp3,
    height: tmp3 / num,
    muted: true,
    paused: stateFromStores,
  };
  const items1 = [closure_8(require("common/Video"), size), , ,];
  const obj6 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = tmp4(tmp5[13]).intl;
  obj6.children = intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue);
  items1[1] = closure_8(markAsDismissed(isScreenLandscape[12]).Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/normal", children: null };
  const intl2 = tmp4(tmp5[13]).intl;
  obj7.children = intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ);
  items1[2] = closure_8(markAsDismissed(isScreenLandscape[12]).Text, obj7);
  const obj8 = {
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    text: null,
  };
  const intl3 = tmp4(tmp5[13]).intl;
  obj8.text = intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"]);
  items1[3] = closure_8(markAsDismissed(isScreenLandscape[14]).Button, obj8);
  obj5.children = items1;
  obj4.children = closure_9(View, obj5);
  obj3.children = closure_8(View, obj4);
  return closure_8(markAsDismissed(isScreenLandscape[10]).BottomSheet, obj3);
}
