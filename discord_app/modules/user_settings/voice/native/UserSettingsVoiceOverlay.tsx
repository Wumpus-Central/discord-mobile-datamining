// discord_app/modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx
import useStateFromStores from "../../../../../discord_common/js/packages/flux/useStateFromStores.tsx";
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import TableSwitchRow from "../../../../design/components/TableRow/native/TableSwitchRow.native.tsx";
import UserSettingsVoice from "UserSettingsVoice.tsx";
import MobileVoiceOverlayActionCreatorsDefault from "../../../voice_overlay/native/MobileVoiceOverlayActionCreators.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";
import MobileVoiceOverlayStore from "../../../../stores/native/MobileVoiceOverlayStore.tsx";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_settings/voice/native/UserSettingsVoiceOverlay.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function UserSettingsVoiceOverlay() {
      const cResult = c.c(7);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [MobileVoiceOverlayStore];
        const fn = function s() {
          return enabled.getEnabled();
        };
        cResult[0] = items;
        cResult[1] = fn;
        tmp4 = items;
        tmp5 = fn;
      } else {
        [tmp4, tmp5] = cResult;
      }
      const stateFromStores = useStateFromStores.useStateFromStores(tmp4, tmp5);
      if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(util.t.bNqkD9);
        cResult[2] = stringResult;
        let tmp8 = stringResult;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl2 = util.intl;
        const stringResult1 = intl2.string(util.t["9CSZJm"]);
        const intl3 = util.intl;
        const stringResult2 = intl3.string(util.t.Wfoivk);
        cResult[3] = stringResult1;
        cResult[4] = stringResult2;
        let tmp11 = stringResult2;
        let tmp10 = stringResult1;
      } else {
        tmp10 = cResult[3];
        tmp11 = cResult[4];
      }
      if (cResult[5] !== stateFromStores) {
        const obj2 = { title: tmp8, hasIcons: false, children: null };
        const obj3 = {
          label: tmp10,
          subLabel: tmp11,
          value: stateFromStores,
          onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
        };
        obj2.children = jsx(TableSwitchRow.TableSwitchRow, {
          label: tmp10,
          subLabel: tmp11,
          value: stateFromStores,
          onValueChange: MobileVoiceOverlayActionCreatorsDefault.setEnabled,
        });
        const tmp17 = jsx(UserSettingsVoice.UserSettingsTableRowGroup, {
          title: tmp8,
          hasIcons: false,
          children: null,
        });
        cResult[5] = stateFromStores;
        cResult[6] = tmp17;
        let tmp14 = tmp17;
      } else {
        tmp14 = cResult[6];
      }
      return tmp14;
    }
  : function UserSettingsVoiceOverlay() {
      const items = [MobileVoiceOverlayStore];
      const stateFromStores = useStateFromStores.useStateFromStores(items, () => enabled.getEnabled());
      const obj2 = { title: null, hasIcons: false, children: null };
      const intl = util.intl;
      obj2.title = intl.string(util.t.bNqkD9);
      const obj3 = { label: null, subLabel: null, value: null, onValueChange: null };
      const intl2 = util.intl;
      obj3.label = intl2.string(util.t["9CSZJm"]);
      const intl3 = util.intl;
      obj3.subLabel = intl3.string(util.t.Wfoivk);
      obj3.value = stateFromStores;
      obj3.onValueChange = MobileVoiceOverlayActionCreatorsDefault.setEnabled;
      obj2.children = jsx(TableSwitchRow.TableSwitchRow, {
        label: null,
        subLabel: null,
        value: null,
        onValueChange: null,
      });
      return jsx(UserSettingsVoice.UserSettingsTableRowGroup, { title: null, hasIcons: false, children: null });
    };
