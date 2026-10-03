// discord_app/modules/guild_automod/native/components/AddRuleRow.tsx
import c from "../../../../../_runtime/00576_c.js";
import util from "../../../../intl/index.native.tsx";
import TableRow from "../../../../design/components/TableRow/native/TableRow.native.tsx";
import CirclePlusIcon from "../../../../design/components/Icon/native/redesign/generated/CirclePlusIcon.tsx";
import AutomodTriggerConfigs from "../../AutomodTriggerConfigs.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/guild_automod/native/components/AddRuleRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      const cResult = c.c(6);
      ({ triggerType, onPress } = arg0);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { IconComponent: CirclePlusIcon.CirclePlusIcon };
        const tmp6 = jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== triggerType) {
        const intl = util.intl;
        const obj3 = { ruleName: AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName() };
        const formatResult = intl.format(util.t.dNjRAf, obj3);
        cResult[1] = triggerType;
        cResult[2] = formatResult;
        let tmp7 = formatResult;
      } else {
        tmp7 = cResult[2];
      }
      if (cResult[3] === onPress) {
        if (cResult[4] === tmp7) {
          let tmp9 = cResult[5];
        }
        return tmp9;
      }
      const tmp10 = jsx(TableRow.TableRow, { icon: first, label: tmp7, onPress });
      cResult[3] = onPress;
      cResult[4] = tmp7;
      cResult[5] = tmp10;
      tmp9 = tmp10;
    }
  : (arg0) => {
      ({ triggerType, onPress } = arg0);
      const obj = {
        icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }),
        label: null,
        onPress: null,
      };
      const intl = util.intl;
      const obj3 = { ruleName: null };
      const obj2 = { IconComponent: CirclePlusIcon.CirclePlusIcon };
      obj3.ruleName = AutomodTriggerConfigs.triggerConfigs[triggerType].getDefaultRuleName();
      obj.label = intl.format(util.t.dNjRAf, obj3);
      obj.onPress = onPress;
      return jsx(TableRow.TableRow, {
        icon: jsx(TableRow.TableRow.Icon, { IconComponent: CirclePlusIcon.CirclePlusIcon }),
        label: null,
        onPress: null,
      });
    };
