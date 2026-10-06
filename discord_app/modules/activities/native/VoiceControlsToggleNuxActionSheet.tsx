// === Module 17242: VoiceControlsToggleNuxActionSheet ===

// Module 17242 (VoiceControlsToggleNuxActionSheet)
import react_native from "react-native" /* 17 */;
import nativeDefault from "native" /* 587 */;
import DismissibleContentConstants from "DismissibleContentConstants" /* 2048 */;
import _slicedToArray_mod from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

const require = globalThis.__r;
let BottomSheet, importDefault, markAsDismissed;

let c9;
let metroImportAll;
let obj2;
let _slicedToArray = _slicedToArray_mod;
const View = react_native.View;
const ContentDismissActionType = DismissibleContentConstants.ContentDismissActionType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
const src = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
let c11 = "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png";
let obj = { videoContainer: obj2, bottomSheetWrapper: { paddingHorizontal: 24 }, contentContainer: { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, marginBottom: 24, textAlign: "center" } };
obj2 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let closure_12 = createStyles.createStyles(obj);
let c13 = 2.0875;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  let bottomSheetWrapper;
  let closure_3;
  let contentContainer;
  let isScreenLandscape;
  let tmp12;
  let tmp6;
  let tmp8;
  let tmp9;
  let useReducedMotion;
  const obj = markAsDismissed(isScreenLandscape[9]);
  const cResult = obj.c(37);
  const tmp = markAsDismissed;
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_12();
  [tmp6, importDefault] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const obj2 = markAsDismissed(isScreenLandscape[10]);
  isScreenLandscape = obj2.useIsScreenLandscape();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const tmpResult = tmp(tmp2[11]);
  const stateFromStores = tmpResult.useStateFromStores(tmp8, S);
  let num2 = 1.5;
  if (isScreenLandscape) {
    num2 = c13;
  }
  if (cResult[2] !== isScreenLandscape) {
    const fn = function w(arg0) {
      let result = arg0;
      if (isScreenLandscape) {
        result = arg0 / 2;
      }
      importDefault(result);
    };
    cResult[2] = isScreenLandscape;
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    tmp12 = fn;
  } else {
    tmp12 = cResult[3];
  }
  _slicedToArray = tmp12;
  if (cResult[4] !== markAsDismissed) {
    class E {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
    cResult[4] = markAsDismissed;
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[5] = E;
  } else {
    class E {
      constructor() {
        return markAsDismissed(ContentDismissActionType.UNKNOWN);
      }
    }
  }
  ({ bottomSheetWrapper, contentContainer } = tmp4);
  if (cResult[6] !== tmp12) {
    class O {
      constructor(nativeEvent) {
        return closure_3(nativeEvent.nativeEvent.layout.width);
      }
    }
    cResult[6] = tmp12;
    class S {
      constructor() {
        return useReducedMotion.useReducedMotion;
      }
    }
    cResult[7] = O;
  } else {
    class O {
      constructor(nativeEvent) {
        return closure_3(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  let result = tmp6 / num2;
  if (cResult[8] === tmp4.videoContainer) {
    class O {
      constructor(nativeEvent) {
        return closure_3(nativeEvent.nativeEvent.layout.width);
      }
    }
  }
  size = { style: tmp4.videoContainer, src, poster, width: tmp6, height: result, muted: true, paused: stateFromStores };
  cResult[8] = tmp4.videoContainer;
  cResult[9] = result;
  cResult[10] = stateFromStores;
  cResult[11] = tmp6;
  cResult[12] = closure_8(require("common/Video"), size);
  closure_8(require("common/Video"), size);
}) : ((markAsDismissed) => {
  let _undefined;
  let c1;
  let intl;
  let intl2;
  let intl3;
  let items1;
  let obj4;
  let obj5;
  let tmp3;
  let useReducedMotion;
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let isScreenLandscape;
  const tmp = closure_12();
  [tmp3, c1] = react.useState(0);
  _slicedToArray(react.useState(0), 2);
  const obj = markAsDismissed(isScreenLandscape[10]);
  isScreenLandscape = obj.useIsScreenLandscape();
  const items = [AccessibilityStore];
  let num = 1.5;
  const obj2 = markAsDismissed(isScreenLandscape[11]);
  const stateFromStores = obj2.useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = c13;
  }
  const obj3 = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: closure_8(View, obj4)
  };
  obj4 = { style: tmp.bottomSheetWrapper, children: closure_9(View, obj5) };
  obj5 = {
    style: tmp.contentContainer,
    onLayout(nativeEvent) {
      const width = nativeEvent.nativeEvent.layout.width;
      let result = width;
      if (isScreenLandscape) {
        result = width / 2;
      }
      _undefined(result);
    },
    children: items1
  };
  BottomSheet = tmp4(tmp5[16]).BottomSheet;
  size = { style: tmp.videoContainer, src, poster, width: tmp3, height: tmp3 / num, muted: true, paused: stateFromStores };
  items1 = [closure_8(require("common/Video"), size), , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue) };
  const Text = tmp4(tmp5[14]).Text;
  intl = tmp4(tmp5[13]).intl;
  items1[1] = closure_8(Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/normal", children: intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ) };
  const Text2 = tmp4(tmp5[14]).Text;
  intl2 = tmp4(tmp5[13]).intl;
  items1[2] = closure_8(Text2, obj7);
  const obj8 = {
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    text: intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"])
  };
  const Button = tmp4(tmp5[15]).Button;
  intl3 = tmp4(tmp5[13]).intl;
  items1[3] = closure_8(Button, obj8);
  return closure_8(BottomSheet, obj3);
});
let size = size_mod;
let result = size.fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default tmp3;