// === Module 18279: ConjurePublishRemixRow ===

// Module 18279 (ConjurePublishRemixRow)
import nativeDefault from "native" /* 575 */;
import components_Button_Button from "components/Button/Button" /* 5511 */;
import ChevronLargeDownIcon from "ChevronLargeDownIcon" /* 14790 */;
import noop from "module_19" /* 19 */;

const require = globalThis.__r;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: hasOwnProperty, jsxs: closure_6 } = jsxProd);
const createStyles = fn(4913);
let obj2 = { row: { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 }, label: null };
let obj3 = { flexDirection: "row", alignItems: "center", justifyContent: "space-between", gap: nativeDefault.space.PX_16 };
obj2.label = { flexShrink: 1, gap: nativeDefault.space.PX_4 };
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/publish/native/ConjurePublishRemixRow.tsx");

export default function ConjurePublishRemixRow(remix) {
  let disabled;
  const tmp = closure_7();
  const options = iter.options;
  value = iter.value;
  importDefault = value;
  const setValue = iter.setValue;
  const canChange = iter.canChange;
  const intl = options(setValue[5]).intl;
  const stringResult = intl.string(require("module_4190")["Z/NFcQ"]);
  c4 = stringResult;
  items = [options, value, setValue];
  const memo = canChange.useMemo(() => options.map((label) => {
    const obj = { label: label.label, trailingIndicator: null, action: null };
    let CheckmarkLargeIcon;
    if (label.value === closure_1) {
      CheckmarkLargeIcon = options(7340).CheckmarkLargeIcon;
    }
    obj.trailingIndicator = CheckmarkLargeIcon;
    obj.action = function action() {
      return dependencyMap(label.value);
    };
    return obj;
  }), items);
  const found = options.find((value) => value.value === c1);
  if (null == found) {
    return null;
  } else {
    disabled = !canChange;
    if (canChange) {
      disabled = remix.disabled;
    }
    let obj = { style: tmp.row, children: null };
    const obj2 = { style: tmp.label, children: null };
    const obj3 = { variant: "body-sm/medium", color: "text-subtle", children: stringResult };
    const items1 = [found(tmp2(tmp3[8]).Text, obj3), ];
    const obj4 = { variant: "body-xs/normal", color: "text-muted", children: null };
    const intl2 = tmp2(tmp3[5]).intl;
    obj4.children = intl2.string(tmp4(tmp3[6])["PuID+v"]);
    items1[1] = found(tmp2(tmp3[8]).Text, obj4);
    obj2.children = items1;
    const items2 = [disabled(c4, obj2), ];
    const obj5 = {
      items: memo,
      title: stringResult,
      enabled: !disabled,
      children(arg0) {
          ({ ref, onPress, accessibilityActions, onAccessibilityAction } = arg0);
          const obj = { ref, variant: "tertiary", size: "sm", text: found.label, icon: null, iconPosition: "end", disabled: null, accessibilityHint: null, onPress: null, accessibilityActions: null, onAccessibilityAction: null };
          let tmpResult;
          if (canChange) {
            tmpResult = hasOwnProperty(ChevronLargeDownIcon.ChevronLargeDownIcon, { size: "xs" });
          }
          obj.icon = tmpResult;
          obj.disabled = disabled;
          obj.accessibilityHint = accessibilityHint;
          obj.onPress = onPress;
          obj.accessibilityActions = accessibilityActions;
          obj.onAccessibilityAction = onAccessibilityAction;
          return hasOwnProperty(components_Button_Button.Button, obj);
        }
    };
    items2[1] = found(tmp2(tmp3[9]).ContextMenu, obj5);
    obj.children = items2;
    return disabled(c4, obj);
  }
  tmp4 = importDefault;
};