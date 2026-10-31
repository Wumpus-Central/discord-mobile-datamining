// discord_app/modules/game_profile/native/profile_sections/communities/GameProfileCommunitiesLocaleFilterActionSheet.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import useSafeAreaInsetsDefault from "../../../../safe_area/useSafeAreaInsets.native.tsx";
import useGameProfileCommunitiesLocaleOptionsDefault from "../../../hooks/useGameProfileCommunitiesLocaleOptions.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
const jsx = fn(21).jsx;
const createStyles = fn(5014);
let closure_4 = createStyles.createStyles((arg0) => {
  const obj = { content: { paddingBottom: arg0 + nativeDefault.space.PX_16 } };
  return obj;
});
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/game_profile/native/profile_sections/communities/GameProfileCommunitiesLocaleFilterActionSheet.tsx",
);

export default function GameProfileCommunitiesLocaleFilterActionSheet(arg0) {
  _require = undefined;
  ({ gameId, locales } = arg0);
  const tmp = closure_4(useSafeAreaInsetsDefault().bottom);
  ({ options, toggleLocale: c0 } = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales));
  const intl = require("util").intl;
  const stringResult = intl.string(require("util").t.OlOHDH);
  const obj = {
    scrollable: true,
    header: jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }),
    dismissAccessibilityLabel: stringResult,
    children: null,
  };
  const obj2 = { contentContainerStyle: tmp.content, children: null };
  const tmp2 = useGameProfileCommunitiesLocaleOptionsDefault(gameId, locales);
  obj2.children = jsx(require("TableRowGroup").TableRowGroup, {
    hasIcons: false,
    children: options.map((locale) => {
      locale = locale.locale;
      ({ label, checked, disabled } = locale);
      return jsx(
        _undefined(dependencyMap[11]).TableCheckboxRow,
        {
          label,
          checked,
          disabled,
          onPress() {
            return locale(locale);
          },
        },
        locale,
      );
    }),
  });
  obj.children = jsx(require("BottomSheetModal").BottomSheetScrollView, {
    contentContainerStyle: tmp.content,
    children: null,
  });
  return jsx(require("ActionSheet").ActionSheet, {
    scrollable: true,
    header: jsx(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: stringResult }),
    dismissAccessibilityLabel: stringResult,
    children: null,
  });
}
export const ACTION_SHEET_KEY = "game-profile-communities-locale-filter";
