// discord_app/modules/threads/native/components/redesign/ThreadListEmpty.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import native from "../../../../../design/void/native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../../design/components/Button/native/Button.native.tsx";
import _modDef11720 from "../../../../../../_runtime/metro/11720__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const createStyles = fn(4836);
let obj = {
  container: { flex: 1, justifyContent: "center", alignItems: "center" },
  iconWrapper: {
    backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
    borderRadius: nativeDefault.radii.round,
    padding: 12,
  },
  title: { textAlign: "center", marginTop: 16, marginHorizontal: 16 },
  subtext: { textAlign: "center", marginTop: 4, marginHorizontal: 16, marginBottom: 16 },
};
let closure_6 = createStyles.createStyles(obj);
const obj3 = {
  backgroundColor: nativeDefault.colors.BACKGROUND_MOD_SUBTLE,
  borderRadius: nativeDefault.radii.round,
  padding: 12,
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/threads/native/components/redesign/ThreadListEmpty.tsx");

export default noop.memo((onCreateThreadPress) => {
  onCreateThreadPress = onCreateThreadPress.onCreateThreadPress;
  const tmp = closure_6();
  const obj = { style: tmp.container, children: null };
  const obj2 = {
    style: tmp.iconWrapper,
    children: React4(native.Icon, { source: _modDef11720, size: native.Icon.Sizes.MEDIUM }),
  };
  const items = [React4(View, obj2), , ,];
  const obj4 = {
    style: tmp.title,
    accessibilityRole: "header",
    maxFontSizeMultiplier: 2,
    variant: "heading-lg/semibold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  obj4.children = intl.string(util.t.HgTQ8p);
  items[1] = React4(Text_Text.Text, obj4);
  const obj5 = {
    style: tmp.subtext,
    maxFontSizeMultiplier: 2,
    variant: "text-sm/medium",
    color: "text-default",
    children: null,
  };
  const intl2 = util.intl;
  obj5.children = intl2.string(util.t.jmq9GC);
  items[2] = React4(Text_Text.Text, obj5);
  let tmp4Result = null != onCreateThreadPress;
  if (tmp4Result) {
    const obj6 = { onPress: onCreateThreadPress, text: null };
    const intl3 = util.intl;
    obj6.text = intl3.string(util.t.rBIGBL);
    tmp4Result = React4(components_Button_Button.Button, obj6);
  }
  items[3] = tmp4Result;
  obj.children = items;
  return hasOwnProperty(View, obj);
});
