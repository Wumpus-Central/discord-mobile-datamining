// discord_app/modules/threads/native/components/redesign/ThreadListEmpty.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import _modDef12238 from "../../../../../../_runtime/metro/12238__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4560);
let obj = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconWrapper: null,
  title: null,
  subtext: null,
};
obj = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  padding: 12,
};
obj.iconWrapper = obj;
obj.title = { textAlign: "center", marginTop: 16, marginHorizontal: 16 };
obj.subtext = { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 };
let closure_6 = createStyles.createStyles(obj);
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default noop.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = closure_6();
  let obj = { style: tmp.container, children: null };
  obj = { style: tmp.iconWrapper, children: null };
  obj = { source: _modDef12238, size: native.Icon.Sizes.MEDIUM };
  obj.children = React4(native.Icon, obj);
  const items = [React4(View, obj), , ,];
  const obj1 = {
    style: tmp.title,
    accessibilityRole: "header",
    maxFontSizeMultiplier: 2,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj1.children = intl.string(util.t.HgTQ8p);
  items[1] = React4(Text_Text.Text, obj1);
  const obj2 = {
    style: tmp.subtext,
    maxFontSizeMultiplier: 2,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl2 = util.intl;
  obj2.children = intl2.string(util.t.jmq9GC);
  items[2] = React4(Text_Text.Text, obj2);
  let tmp4Result = null != onCreateThreadPress;
  if (tmp4Result) {
    const obj3 = { onPress: onCreateThreadPress, text: null };
    const intl3 = tmp5(1114).intl;
    obj3.text = intl3.string(tmp5(1114).t.rBIGBL);
    tmp4Result = React4(tmp5(4975).Button, obj3);
  }
  items[3] = tmp4Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});
