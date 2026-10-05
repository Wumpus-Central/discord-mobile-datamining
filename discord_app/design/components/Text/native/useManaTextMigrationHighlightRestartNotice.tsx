// discord_app/design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx
import actions_AlertActionCreatorsDefault from "../../../../actions/native/AlertActionCreators.tsx";
import react from "../../../../../_runtime/00019_react.js";
import DevSettingsStore from "../../../../modules/devtools/dev_settings/DevSettingsStore.tsx";
import ReactCompilerGating from "../../../../modules/react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let _require;

const tmp2 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let ref;
      let tmp4;
      let tmp5;
      let tmp8;
      let tmp9;
      const tmp = _require;
      let obj = require("react");
      const cResult = obj.c(5);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [DevSettingsStore];
        const fn = function s() {
          return DevSettingsStore.get("highlight_mana_text");
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const tmpResult = tmp(504);
      const stateFromStores = tmpResult.useStateFromStores(tmp4, tmp5);
      _require = react.useRef(true);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function h() {
          if (ref.current) {
            tmp.current = false;
          } else {
            const obj = actions_AlertActionCreatorsDefault;
            obj.show({
              title: "Mana Text Migration Highlighter",
              body: "Restart the app (force quit and reopen) to see the change.",
            });
          }
        };
        cResult[2] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] !== stateFromStores) {
        const items1 = [stateFromStores];
        cResult[3] = stateFromStores;
        cResult[4] = items1;
        tmp9 = items1;
      } else {
        tmp9 = cResult[4];
      }
      const effect = react.useEffect(tmp8, tmp9);
    }
  : () => {
      let ref;
      let obj = require("get initialized");
      const items = [DevSettingsStore];
      const stateFromStores = obj.useStateFromStores(items, () => DevSettingsStore.get("highlight_mana_text"));
      _require = react.useRef(true);
      const items1 = [stateFromStores];
      const effect = react.useEffect(() => {
        if (ref.current) {
          tmp.current = false;
        } else {
          const obj = actions_AlertActionCreatorsDefault;
          obj.show({
            title: "Mana Text Migration Highlighter",
            body: "Restart the app (force quit and reopen) to see the change.",
          });
        }
      }, items1);
    };
const result = size.fileFinishedImporting(
  "design/components/Text/native/useManaTextMigrationHighlightRestartNotice.tsx",
);

export const useManaTextMigrationHighlightRestartNotice = tmp2;
