// discord_app/modules/guild_automod/native/components/AddRuleRow.tsx
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../../_runtime/00576_react.js";
import intl2 from "../../../../intl/index.native.tsx";
import TableRow2 from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AutomodTriggerConfigs from "../../AutomodTriggerConfigs.tsx";
import react from "../../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let first;
      let obj4;
      let onPress;
      let tmp7;
      let triggerType;
      const obj = react2;
      const cResult = obj.c(6);
      ({ triggerType, onPress } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const Icon = TableRow2.TableRow.Icon;
        const tmp6 = <Icon IconComponent={CirclePlusIcon.CirclePlusIcon} />;
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== triggerType) {
        const intl = intl2.intl;
        const format = intl.format;
        const obj3 = { ruleName: obj4.getDefaultRuleName() };
        const dNjRAf = intl2.t.dNjRAf;
        obj4 = AutomodTriggerConfigs.triggerConfigs[triggerType];
        const formatResult = format(dNjRAf, obj3);
        cResult[1] = triggerType;
        cResult[2] = formatResult;
        tmp7 = formatResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === onPress) {
        let tmp9;
        if (cResult[4] === tmp7) {
          tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp10 = jsx(TableRow2.TableRow, { icon: first, label: tmp7, onPress });
      cResult[3] = onPress;
      cResult[4] = tmp7;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      let obj4;
      let onPress;
      let triggerType;
      ({ triggerType, onPress } = arg0);
      const TableRow = TableRow2.TableRow;
      ({ IconComponent: CirclePlusIcon.CirclePlusIcon });
      const Icon = TableRow2.TableRow.Icon;
      const intl = intl2.intl;
      const format = intl.format;
      const obj3 = { ruleName: obj4.getDefaultRuleName() };
      const dNjRAf = intl2.t.dNjRAf;
      obj4 = AutomodTriggerConfigs.triggerConfigs[triggerType];
      return <TableRow icon={null} label={format(dNjRAf, obj3)} onPress={onPress} />;
    };
const result = size.fileFinishedImporting("modules/guild_automod/native/components/AddRuleRow.tsx");

export default tmp3;
