// discord_app/modules/conjure/linked_apps/native/ConjureLinkedAppDataPicker.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import _modDef4131 from "../../intl/ConjureUntranslated.messages.js";
import TableRadioRow from "../../../../design/components/TableRow/native/TableRadioRow.native.tsx";
import ConjureLinkedAppHeaderDefault from "ConjureLinkedAppHeader.tsx";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_6, jsxs: metroImportDefault } = jsxProd);
const createStyles = fn(5306);
const obj2 = {
  sentence: { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 },
  choices: null,
};
let obj3 = { flexDirection: "row", flexWrap: "wrap", alignItems: "center", columnGap: nativeDefault.space.PX_8 };
obj2.choices = { marginTop: nativeDefault.space.PX_8 };
let closure_8 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/linked_apps/native/ConjureLinkedAppDataPicker.tsx");

export default function ConjureLinkedAppDataPicker(arg0) {
  ({ link, disabled } = arg0);
  importDefault = undefined;
  const tmp = closure_8();
  [tmp3, c1] = noop.useState(false);
  ({ sentence, options } = link.data);
  const obj = { spacing: nativeDefault.space.PX_4, children: null };
  items = [
    closure_6(ConjureLinkedAppHeaderDefault, {
      caller: link.sides.caller,
      target: link.sides.target,
      callerProject: link.callerProject,
      targetProject: link.targetProject,
      flow: link.flow,
    }),
    ,
    ,
  ];
  let tmp9Result = null;
  if (null != link.purpose) {
    const obj3 = { variant: "body-sm/normal", color: "text-default", lineClamp: 1, children: link.purpose };
    tmp9Result = closure_6(disabled(5929).Text, obj3);
  }
  items[1] = tmp9Result;
  let tmp5Result = null;
  if (null != sentence) {
    const obj4 = { style: tmp.sentence, children: null };
    const obj5 = { variant: "body-sm/normal", color: "text-subtle", children: sentence };
    const items1 = [closure_6(disabled(5929).Text, obj5)];
    let tmp9Result3 = null;
    if (tmp4) {
      tmp9Result3 = null;
      if (!tmp3) {
        const obj6 = { variant: "tertiary", size: "sm", text: null, disabled: null, onPress: null };
        const intl = disabled(1113).intl;
        obj6.text = intl.string(_modDef4131.I5F6YX);
        obj6.disabled = disabled;
        obj6.onPress = function onPress() {
          return _undefined(true);
        };
        tmp9Result3 = closure_6(disabled(5936).Button, obj6);
      }
    }
    items1[1] = tmp9Result3;
    obj4.children = items1;
    tmp5Result = closure_7(View, obj4);
  }
  items[2] = tmp5Result;
  let tmp9Result4 = null;
  if (tmp3) {
    tmp9Result4 = null;
    if (tmp4) {
      const obj7 = { style: tmp.choices, children: null };
      const obj15 = { hasIcons: false, accessibilityLabel: null, value: null, onChange: null, children: null };
      ({ aria: obj8.accessibilityLabel, value: obj8.value, onChange: obj8.onChange } = link);
      obj15.children = options.map((build) =>
        timestampProducer(
          TableRadioRow.TableRadioRow,
          { value: build.build, label: build.label, disabled },
          build.build,
        ),
      );
      obj7.children = closure_6(disabled(7745).TableRadioGroup, obj15);
      tmp9Result4 = closure_6(View, obj7);
    }
  }
  items[3] = tmp9Result4;
  obj.children = items;
  return closure_7(disabled(6337).Stack, obj);
}
