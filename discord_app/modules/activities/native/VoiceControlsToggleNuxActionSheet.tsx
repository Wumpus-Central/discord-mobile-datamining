// === Module 17242: VoiceControlsToggleNuxActionSheet ===

// Module 17242 (VoiceControlsToggleNuxActionSheet)
import nativeDefault from "native" /* 587 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import AccessibilityStore from "AccessibilityStore" /* 4885 */;

const require = globalThis.__r;

const require = fn;
const View = fn(17).View;
const ContentDismissActionType = fn(2048).ContentDismissActionType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const src = { videoURI: "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.mp4" };
let c11 = "https://cdn.discordapp.com/assets/activities/platform/activities_pipfab_tutorial_redesign.png";
const createStyles = fn(4896);
let obj2 = { videoContainer: { borderRadius: nativeDefault.radii.sm, overflow: "hidden" }, bottomSheetWrapper: { paddingHorizontal: 24 }, contentContainer: { flex: 1, alignItems: "center", paddingTop: 24, paddingBottom: 16 }, title: { marginTop: 16, textAlign: "center" }, body: { marginTop: 8, marginBottom: 24, textAlign: "center" } };
let closure_12 = createStyles.createStyles(obj2);
let c13 = 2.0875;
const ReactCompilerGating = fn(558);
let obj3 = { borderRadius: nativeDefault.radii.sm, overflow: "hidden" };
let size = fn(2);
let result = size.fileFinishedImporting("modules/activities/native/VoiceControlsToggleNuxActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((markAsDismissed) => {
  const cResult = markAsDismissed(isScreenLandscape[9]).c(37);
  markAsDismissed = markAsDismissed.markAsDismissed;
  const tmp4 = closure_12();
  const obj = markAsDismissed(isScreenLandscape[9]);
  const tmp = markAsDismissed;
  [tmp6, importDefault] = noop.useState(0);
  const tmp5 = _slicedToArray(noop.useState(0), 2);
  isScreenLandscape = markAsDismissed(isScreenLandscape[10]).useIsScreenLandscape();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [AccessibilityStore];
    class S {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[0] = items;
    cResult[1] = S;
    tmp8 = items;
  } else {
    [tmp8, tmp9] = cResult;
  }
  const obj2 = markAsDismissed(isScreenLandscape[10]);
  const stateFromStores = tmp(isScreenLandscape[11]).useStateFromStores(tmp8, S);
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
        return closure_1_6.useReducedMotion;
      }
    }
    let tmp12 = fn;
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
        return closure_1_6.useReducedMotion;
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
      constructor(arg0) {
        return closure_3(markAsDismissed.nativeEvent.layout.width);
      }
    }
    cResult[6] = tmp12;
    class S {
      constructor() {
        return closure_1_6.useReducedMotion;
      }
    }
    cResult[7] = O;
  } else {
    class O {
      constructor(arg0) {
        return closure_3(markAsDismissed.nativeEvent.layout.width);
      }
    }
  }
  let result = tmp6 / num2;
  if (cResult[8] === tmp4.videoContainer) {
    class O {
      constructor(arg0) {
        return closure_3(markAsDismissed.nativeEvent.layout.width);
      }
    }
  }
  const size = { style: tmp4.videoContainer, src, poster, width: tmp6, height: result, muted: true, paused: stateFromStores };
  const tmpResult = tmp(isScreenLandscape[11]);
  cResult[8] = tmp4.videoContainer;
  cResult[9] = result;
  cResult[10] = stateFromStores;
  cResult[11] = tmp6;
  cResult[12] = closure_8(require("common/Video"), size);
  const tmp16 = closure_8(require("common/Video"), size);
}) : ((markAsDismissed) => {
  markAsDismissed = markAsDismissed.markAsDismissed;
  importDefault = undefined;
  let isScreenLandscape;
  const tmp = closure_12();
  [tmp3, c1] = noop.useState(0);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  isScreenLandscape = markAsDismissed(isScreenLandscape[10]).useIsScreenLandscape();
  const obj = markAsDismissed(isScreenLandscape[10]);
  const items = [AccessibilityStore];
  let num = 1.5;
  const stateFromStores = markAsDismissed(isScreenLandscape[11]).useStateFromStores(items, () => useReducedMotion.useReducedMotion);
  if (isScreenLandscape) {
    num = c13;
  }
  const obj3 = {
    startExpanded: true,
    onDismiss() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    children: null
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
    children: null
  };
  const size = { style: tmp.videoContainer, src, poster, width: tmp3, height: tmp3 / num, muted: true, paused: stateFromStores };
  const items1 = [closure_8(require("common/Video"), size), , , ];
  const obj6 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = tmp4(tmp5[13]).intl;
  obj6.children = intl.string(markAsDismissed(isScreenLandscape[13]).t.pT6hue);
  items1[1] = closure_8(markAsDismissed(isScreenLandscape[14]).Text, obj6);
  const obj7 = { style: tmp.body, variant: "text-sm/normal", children: null };
  const intl2 = tmp4(tmp5[13]).intl;
  obj7.children = intl2.string(markAsDismissed(isScreenLandscape[13]).t.tNm8AZ);
  items1[2] = closure_8(markAsDismissed(isScreenLandscape[14]).Text, obj7);
  const obj8 = {
    onPress() {
      return markAsDismissed(ContentDismissActionType.UNKNOWN);
    },
    text: null
  };
  const intl3 = tmp4(tmp5[13]).intl;
  obj8.text = intl3.string(markAsDismissed(isScreenLandscape[13]).t["NX+WJN"]);
  items1[3] = closure_8(markAsDismissed(isScreenLandscape[15]).Button, obj8);
  obj5.children = items1;
  obj4.children = closure_9(View, obj5);
  obj3.children = closure_8(View, obj4);
  return closure_8(markAsDismissed(isScreenLandscape[16]).BottomSheet, obj3);
});