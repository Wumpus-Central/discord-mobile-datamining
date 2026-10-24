// === Module 9512: GameProfileCommunitiesLocaleFilterActionSheet ===

// Module 9512 (GameProfileCommunitiesLocaleFilterActionSheet)
import nativeDefault from "native" /* 587 */;
import useSafeAreaInsetsDefault from "useSafeAreaInsets" /* 1633 */;
import useGameProfileCommunitiesLocaleOptionsDefault from "useGameProfileCommunitiesLocaleOptions" /* 9513 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(4971);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  return obj;
});
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/game_profile/native/profile_sections/communities/GameProfileCommunitiesLocaleFilterActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
  const cResult = toggleLocale(576).c(12);
  ({ gameId, locales } = arg0);
  const tmp4 = closure_4(useSafeAreaInsetsDefault().bottom);
  const obj = toggleLocale(576);
  ({ options, toggleLocale } = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales));
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const intl = toggleLocale(1128).intl;
    const stringResult = intl.string(toggleLocale(1128).t.OlOHDH);
    cResult[0] = stringResult;
    let first = stringResult;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { title: first };
    const tmp10 = jsx(toggleLocale(7248).BottomSheetTitleHeader, { title: first });
    cResult[1] = tmp10;
    let tmp8 = tmp10;
  } else {
    tmp8 = cResult[1];
  }
  if (cResult[2] === options) {
    if (cResult[3] === toggleLocale) {
      if (cResult[7] !== cResult[4]) {
        const obj3 = { hasIcons: false, children: tmp12 };
        const tmp17 = jsx(toggleLocale(6987).TableRowGroup, { hasIcons: false, children: tmp12 });
        cResult[7] = tmp12;
        cResult[8] = tmp17;
        let tmp15 = tmp17;
      } else {
        tmp15 = cResult[8];
      }
      if (cResult[9] === tmp4.content) {
        if (cResult[10] === tmp15) {
          let tmp18 = cResult[11];
        }
        return tmp18;
      }
      const obj4 = { scrollable: true, header: tmp8, dismissAccessibilityLabel: first, children: null };
      const obj5 = { contentContainerStyle: tmp11, children: tmp15 };
      obj4.children = jsx(toggleLocale(5269).BottomSheetScrollView, { contentContainerStyle: tmp11, children: tmp15 });
      const tmp20 = jsx(toggleLocale(7298).ActionSheet, { scrollable: true, header: tmp8, dismissAccessibilityLabel: first, children: null });
      cResult[9] = tmp4.content;
      cResult[10] = tmp15;
      cResult[11] = tmp20;
      tmp18 = tmp20;
    }
  }
  if (cResult[5] !== toggleLocale) {
    const fn = function y(locale) {
      locale = locale.locale;
      ({ label, checked, disabled } = locale);
      return jsx(toggleLocale(dependencyMap[10]).TableCheckboxRow, {
        label,
        checked,
        disabled,
        onPress() {
          return toggleLocale(locale);
        }
      }, locale);
    };
    cResult[5] = toggleLocale;
    cResult[6] = fn;
    let tmp13 = fn;
  } else {
    tmp13 = cResult[6];
  }
  const mapped = options.map(tmp13);
  cResult[2] = options;
  cResult[3] = toggleLocale;
  cResult[4] = mapped;
  const tmp5 = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales);
}) : (function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
  _require = undefined;
  ({ gameId, locales } = arg0);
  const tmp = closure_4(useSafeAreaInsetsDefault().bottom);
  ({ options, toggleLocale: c0 } = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales));
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.OlOHDH);
  const obj = { scrollable: true, header: jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }), dismissAccessibilityLabel: stringResult, children: null };
  const obj2 = { contentContainerStyle: tmp.content, children: null };
  const tmp2 = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales);
  obj2.children = jsx(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: options.map((locale) => {
      locale = locale.locale;
      ({ label, checked, disabled } = locale);
      return jsx(_undefined(dependencyMap[10]).TableCheckboxRow, {
        label,
        checked,
        disabled,
        onPress() {
          return locale(locale);
        }
      }, locale);
    })
  });
  obj.children = jsx(require("BottomSheetModal").BottomSheetScrollView, { contentContainerStyle: tmp.content, children: null });
  return jsx(require("ActionSheet").ActionSheet, { scrollable: true, header: jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }), dismissAccessibilityLabel: stringResult, children: null });
});
export const ACTION_SHEET_KEY = "game-profile-communities-locale-filter";