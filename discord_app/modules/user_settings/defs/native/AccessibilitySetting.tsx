// === Module 15423: AccessibilitySetting ===

// Module 15423 (AccessibilitySetting)
import c from "c" /* 576 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import useSelectedDismissibleContent from "useSelectedDismissibleContent" /* 7090 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ContentDismissActionType = fn(2060).ContentDismissActionType;
const jsx = fn(21).jsx;
let items = [fn(2048).DismissibleContent.MOBILE_ACCESSIBILITY_COLOR_SETTINGS];
fn(558);
const ReactCompilerGating = fn(558);
let tmp2 = ReactCompilerGating.isReactCompilerEnabled() ? (function useTrailing() {
  const cResult = c.c(4);
  const first = _slicedToArray(useSelectedDismissibleContent.useSelectedDismissibleContent(items), 1)[0];
  if (cResult[0] !== first) {
    let tmp7 = null != first;
    if (tmp7) {
      let hasItem;
      if (items != null) {
        hasItem = items.includes(first);
      }
      tmp7 = hasItem;
    }
    cResult[0] = first;
    cResult[1] = tmp7;
    let tmp5 = tmp7;
  } else {
    tmp5 = cResult[1];
  }
  if (cResult[2] !== tmp5) {
    let tmp10 = null;
    if (tmp5) {
      const obj4 = { text: null };
      const intl = util.intl;
      obj4.text = intl.string(util.t.y2b7CA);
      tmp10 = jsx(native.TextBadge, { text: null });
    }
    cResult[2] = tmp5;
    cResult[3] = tmp10;
    let tmp9 = tmp10;
  } else {
    tmp9 = cResult[3];
  }
  return tmp9;
}) : (function useTrailing() {
  [tmp4, r10012] = useSelectedDismissibleContent.useSelectedDismissibleContent(items);
  let tmp5 = null;
  if (null != tmp4) {
    let hasItem;
    if (items != null) {
      hasItem = items.includes(tmp4);
    }
    tmp5 = null;
    if (hasItem) {
      const obj3 = { text: null };
      const intl = util.intl;
      obj3.text = intl.string(util.t.y2b7CA);
      tmp5 = jsx(native.TextBadge, { text: null });
    }
  }
  return tmp5;
});
const SettingBuilders = fn(11262);
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
  const cResult = first(576).c(3);
  const obj = first(576);
  let tmp2 = _slicedToArray(first(7090).useSelectedDismissibleContent(items), 2);
  first = tmp2[0];
  dependencyMap = tmp4;
  if (cResult[0] === tmp2[1]) {
    if (cResult[1] === first) {
      let tmp5 = cResult[2];
    }
    return tmp5;
  }
  const fn = function n() {
    let tmp2 = null != first;
    if (tmp2) {
      let hasItem;
      if (items != null) {
        hasItem = items.includes(tmp);
      }
      tmp2 = hasItem;
    }
    if (tmp2) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
    return true;
  };
  cResult[0] = tmp2[1];
  cResult[1] = first;
  cResult[2] = fn;
  tmp5 = fn;
}) : (function usePreNavigationAction() {
  const tmp = _slicedToArray(first(7090).useSelectedDismissibleContent(items), 2);
  first = tmp[0];
  dependencyMap = tmp3;
  items = [tmp[1], first];
  return noop.useCallback(() => {
    let tmp2 = null != first;
    if (tmp2) {
      let hasItem;
      if (items != null) {
        hasItem = items.includes(tmp);
      }
      tmp2 = hasItem;
    }
    if (tmp2) {
      closure_1(ContentDismissActionType.TAKE_ACTION);
    }
    return true;
  }, items);
});
const route = SettingBuilders.createRoute({
  useTitle() {
    const intl = util.intl;
    return intl.string(util.t.G0neg7);
  },
  parent: null,
  IconComponent: fn(15424).AccessibilityIcon,
  useTrailing: tmp2,
  usePreNavigationAction: ReactCompilerGating.isReactCompilerEnabled() ? (function usePreNavigationAction() {
    const cResult = first(576).c(3);
    const obj = first(576);
    let tmp2 = _slicedToArray(first(7090).useSelectedDismissibleContent(items), 2);
    first = tmp2[0];
    dependencyMap = tmp4;
    if (cResult[0] === tmp2[1]) {
      if (cResult[1] === first) {
        let tmp5 = cResult[2];
      }
      return tmp5;
    }
    const fn = function n() {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = items.includes(tmp);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    };
    cResult[0] = tmp2[1];
    cResult[1] = first;
    cResult[2] = fn;
    tmp5 = fn;
  }) : (function usePreNavigationAction() {
    const tmp = _slicedToArray(first(7090).useSelectedDismissibleContent(items), 2);
    first = tmp[0];
    dependencyMap = tmp3;
    items = [tmp[1], first];
    return noop.useCallback(() => {
      let tmp2 = null != first;
      if (tmp2) {
        let hasItem;
        if (items != null) {
          hasItem = items.includes(tmp);
        }
        tmp2 = hasItem;
      }
      if (tmp2) {
        closure_1(ContentDismissActionType.TAKE_ACTION);
      }
      return true;
    }, items);
  }),
  screen: {
    route: fn(1085).UserSettingsSections.ACCESSIBILITY,
    getComponent() {
      return require("SettingsAccessibilityScreen").default;
    }
  }
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/defs/native/AccessibilitySetting.tsx");

export default route;