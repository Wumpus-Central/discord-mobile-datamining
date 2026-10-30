// discord_app/modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3865 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
const createStyles = fn(5009);
let obj2 = {
  row: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 },
  titles: { flex: 1, justifyContent: "center" },
};
let closure_7 = createStyles.createStyles(obj2);
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default function ConjureProjectHeaderTitle(project) {
  project = project.project;
  ({ title, onPressIcon } = project);
  const tmp = closure_7();
  const obj = { style: tmp.row, children: null };
  let tmp4 = null;
  if (null != project) {
    const obj2 = {
      onPress: onPressIcon,
      hitSlop,
      accessibilityRole: "button",
      accessibilityLabel: null,
      children: null,
    };
    const intl = util.intl;
    obj2.accessibilityLabel = intl.string(_modDef3865.FzfmQ8);
    const obj3 = { project, size: "list" };
    obj2.children = React4(ConjureProjectIconDefault, obj3);
    tmp4 = React4(Pressables.PressableOpacity, obj2);
  }
  const items = [
    tmp4,
    React4(View, {
      style: tmp.titles,
      children: React4(Text_Text.Text, {
        accessibilityRole: "header",
        "aria-level": "1",
        lineClamp: 1,
        maxFontSizeMultiplier: 2,
        variant: "redesign/heading-18/semibold",
        color: "mobile-text-heading-primary",
        children: title,
      }),
    }),
  ];
  obj.children = items;
  return hasOwnProperty(View, obj);
}
