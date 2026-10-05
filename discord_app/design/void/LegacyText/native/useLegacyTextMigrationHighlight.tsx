// discord_app/design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx
import get_initialized from "../../../../../discord_common/js/packages/flux/index.tsx";
import react from "../../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import createStyles from "../../../components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let obj = { highlight: { borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER } };
({ borderWidth: 1, borderColor: nativeDefault.colors.STATUS_DANGER });
let closure_3 = createStyles.createStyles(obj);
const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let tmp5;
      let tmp6;
      const obj = react;
      const cResult = obj.c(2);
      const tmp4 = closure_3();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function n() {
          return DevSettingsStore.get("highlight_mana_text");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp5 = items;
        tmp6 = fn;
      } else {
        [tmp5, tmp6] = cResult;
      }
      let highlight = null;
      const tmpResult = get_initialized;
      if (tmpResult.useStateFromStores(tmp5, tmp6)) {
        highlight = tmp4.highlight;
      }
      return highlight;
    }
  : () => {
      const items = [DevSettingsStore];
      let highlight = null;
      const tmp = closure_3();
      const obj = get_initialized;
      if (obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"))) {
        highlight = tmp.highlight;
      }
      return highlight;
    };
const result = size.fileFinishedImporting("design/void/LegacyText/native/useLegacyTextMigrationHighlight.tsx");

export const useLegacyTextMigrationHighlight = tmp2;
