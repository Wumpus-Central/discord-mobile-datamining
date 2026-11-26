// === Module 18513: showConjureProjectServerSheet ===

// Module 18513 (showConjureProjectServerSheet)
import nativeDefault from "native" /* 575 */;
import ActionSheetActionCreators from "ActionSheetActionCreators" /* 5257 */;
import TableRadioRow from "TableRadioRow" /* 7253 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import noop from "module_19" /* 19 */;

require = fn;
function ConjureProjectServerSheet(projectId) {
  pending = undefined;
  dependencyMap = async function _confirm() {
    if (c3 === 2) {
      c3 = 3;
      throw new TypeError("Generator functions may not be called on executing generators");
    } else if (tmp4 === 3) {
      if (arg0 === 1) {
        throw value;
      } else if (arg0 === 2) {
        const obj3 = { value, done: true };
        return obj3;
      } else {
        return { value: "HermesInternal", done: "+95" };
      }
    } else {
      try {
        c3 = 2;
        if (0 === dependencyMap) {
          if (arg0 === 1) {
            c3 = 3;
            throw value;
          } else if (arg0 === 2) {
            c3 = 3;
            const obj4 = { value, done: true };
            return obj4;
          } else {
            closure_0 = tmp2;
            closure_128_0 = undefined;
            dependencyMap = 1;
            c3 = 1;
            const obj5 = { value: _require.submit(), done: false };
            return obj5;
          }
        } else if (arg0 === 1) {
          c3 = 3;
          throw value;
        } else if (arg0 === 2) {
          c3 = 3;
          const obj6 = { value, done: true };
          return obj6;
        } else {
          closure_128_0 = value;
          if (null != closure_128_0) {
            tmp5(5257).hideAllActionSheets();
            const obj = tmp5(5257);
            const obj7 = { text: closure_128_0, variant: "success" };
            tmp5(5725).open(ConjureProjectServerSheet, obj7);
            const obj2 = tmp5(5725);
          }
          c3 = 3;
          return { value: "HermesInternal", done: "+95" };
        }
      } catch (tmp15) {
        c3 = tmp;
        throw tmp15;
      }
    }
  };
  const tmp4 = pending(18508)(projectId.projectId);
  _require = tmp4;
  ({ moving, guilds, guild, rows, pending } = tmp4);
  const error = tmp4.error;
  const intl = require("util").intl;
  const tmp7 = pending(4245);
  let obj = { header: null, children: null };
  const tmp = closure_8();
  obj.header = closure_5(require("BottomSheetTitleHeader").BottomSheetTitleHeader, { title: intl.formatToPlainString(moving ? tmp7.M4jq44 : tmp7.PE4egI, { app: tmp4.appName }) });
  let obj3 = { style: tmp.content, children: null };
  let tmp5Result = null;
  if (null != guild) {
    let obj4 = { title: null, hasIcons: false, value: null, onChange: null, children: null };
    const intl2 = tmp6(1112).intl;
    obj4.title = intl2.string(tmp2(4245).Uq5hU9);
    obj4.value = guild.id;
    obj4.onChange = tmp4.pickGuild;
    obj4.children = guilds.map((id) => hasOwnProperty(TableRadioRow.TableRadioRow, { value: id.id, label: id.name, disabled: pending }, id.id));
    tmp5Result = closure_5(tmp6(7251).TableRadioGroup, obj4);
  }
  items = [tmp5Result, , , , ];
  let tmp5Result3 = null;
  if (rows.length > 0) {
    let obj5 = { rows };
    tmp5Result3 = closure_5(tmp2(18514), obj5);
  }
  items[1] = tmp5Result3;
  let tmp5Result4 = null;
  if (null != error) {
    let obj6 = { variant: "body-sm/medium", color: "text-feedback-critical", accessibilityRole: "alert", children: error };
    tmp5Result4 = closure_5(tmp6(5634).Text, obj6);
  }
  items[2] = tmp5Result4;
  const intl3 = tmp6(1112).intl;
  const tmp2Result = pending(4245);
  let obj2 = { title: intl.formatToPlainString(moving ? tmp7.M4jq44 : tmp7.PE4egI, { app: tmp4.appName }) };
  items[3] = closure_5(require("components/Button/Button").Button, {
    variant: "primary",
    text: intl3.string(moving ? tmp2Result.MHSKBb : tmp2Result["+uQwxA"]),
    loading: pending,
    disabled: null == guild,
    onPress: function confirm() {
      const self = this;
      const apply = closure_2.apply;
      if (typeof apply === "unknown") {
        let applyArgumentsResult = HermesBuiltin.applyArguments(self);
      } else {
        applyArgumentsResult = apply(self, arguments);
      }
      return applyArgumentsResult;
    }
  });
  const obj8 = { variant: "secondary", text: null, disabled: null, onPress: null };
  const intl4 = tmp6(1112).intl;
  obj8.text = intl4.string(require("util").t["ETE/oC"]);
  obj8.disabled = pending;
  obj8.onPress = function onPress() {
    return pending(closure_2[7]).hideActionSheet(ConjureProjectServerSheet);
  };
  items[4] = closure_5(require("components/Button/Button").Button, obj8);
  obj3.children = items;
  obj.children = closure_6(View, obj3);
  return closure_5(require("ActionSheet").ActionSheet, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
ConjureProjectServerSheet = "ConjureProjectServerSheet";
const createStyles = fn(5043);
let obj2 = { content: { gap: nativeDefault.space.PX_16 } };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/server_share/native/showConjureProjectServerSheet.tsx");

export default function showConjureProjectServerSheet(arg0) {
  const obj2 = { key: ConjureProjectServerSheet, stackingBehavior: "stack", content: null };
  const merged = Object.assign(arg0);
  obj2.content = hasOwnProperty(ConjureProjectServerSheet, {});
  ActionSheetActionCreators.showActionSheet(obj2);
};