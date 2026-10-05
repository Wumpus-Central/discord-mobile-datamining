// discord_app/modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl5 from "../../../../intl/index.native.tsx";
import AlertDefault from "../../../../components_native/common/Alert.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let onClose;
      let onConfirm;
      let tmp10;
      let tmp4;
      let tmp5;
      let tmp6;
      const obj = react2;
      const cResult = obj.c(7);
      ({ onClose, onConfirm } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = intl5.intl;
        const stringResult = intl.string(intl5.t.aNCYas);
        const intl2 = intl5.intl;
        const formatResult = intl2.format(intl5.t.RWBa5X, {});
        const intl3 = intl5.intl;
        const stringResult1 = intl3.string(intl5.t["cY+Oob"]);
        cResult[0] = stringResult;
        cResult[1] = formatResult;
        cResult[2] = stringResult1;
        tmp4 = stringResult;
        tmp5 = formatResult;
        tmp6 = stringResult1;
      } else {
        [tmp4, tmp5, tmp6] = cResult;
      }
      if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
        const intl4 = intl5.intl;
        const stringResult2 = intl4.string(intl5.t["ETE/oC"]);
        cResult[3] = stringResult2;
        tmp10 = stringResult2;
      } else {
        tmp10 = cResult[3];
      }
      if (cResult[4] === onClose) {
        let tmp12;
        if (cResult[5] === onConfirm) {
          tmp12 = cResult[6];
        }
        return tmp12;
      }
      AlertDefault;
      const tmp14 = (
        <tmp13
          onClose={onClose}
          onConfirm={onConfirm}
          title={tmp4}
          body={tmp5}
          confirmText={tmp6}
          confirmColor={AlertDefault.Colors.GREEN}
          cancelText={tmp10}
        />
      );
      cResult[4] = onClose;
      cResult[5] = onConfirm;
      cResult[6] = tmp14;
      tmp12 = tmp14;
    }
  : (arg0) => {
      let onClose;
      let onConfirm;
      ({ onClose, onConfirm } = arg0);
      AlertDefault;
      const intl = intl5.intl;
      const intl2 = intl5.intl;
      const intl3 = intl5.intl;
      const intl4 = intl5.intl;
      return (
        <tmp
          onClose={onClose}
          onConfirm={onConfirm}
          title={intl.string(intl5.t.aNCYas)}
          body={intl2.format(intl5.t.RWBa5X, {})}
          confirmText={intl3.string(intl5.t["cY+Oob"])}
          confirmColor={AlertDefault.Colors.GREEN}
          cancelText={intl4.string(intl5.t["ETE/oC"])}
        />
      );
    };
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildScheduledEventResetWarningAlert.tsx",
);

export default tmp3;
