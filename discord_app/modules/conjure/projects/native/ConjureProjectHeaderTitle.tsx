// discord_app/modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3849 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
const createStyles = fn(5092);
let obj2 = {
  row: { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 },
  title: { flexShrink: 1 },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flexDirection: "row", alignItems: "center", flexShrink: 1, gap: nativeDefault.space.PX_8 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureProjectHeaderTitle(arg0) {
      const cResult = c.c(13);
      ({ project, title, onPressIcon } = arg0);
      const tmp4 = closure_7();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const intl = util.intl;
        const stringResult = intl.string(_modDef3849.FzfmQ8);
        cResult[0] = stringResult;
        let first = stringResult;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== project) {
        const obj2 = { project, size: "header" };
        const tmp11 = React4(ConjureProjectIconDefault, obj2);
        cResult[1] = project;
        cResult[2] = tmp11;
        let tmp8 = tmp11;
      } else {
        tmp8 = cResult[2];
      }
      if (cResult[3] === onPressIcon) {
        if (cResult[4] === tmp8) {
          let tmp12 = cResult[5];
        }
        if (cResult[6] === tmp4.title) {
          if (cResult[7] === title) {
            let tmp14 = cResult[8];
          }
          if (cResult[9] === tmp4.row) {
            if (cResult[10] === tmp12) {
              if (cResult[11] === tmp14) {
                let tmp17 = cResult[12];
              }
              return tmp17;
            }
          }
          const obj3 = { style: tmp4.row, children: null };
          const items = [tmp12, tmp14];
          obj3.children = items;
          const tmp20 = hasOwnProperty(View, obj3);
          cResult[9] = tmp4.row;
          cResult[10] = tmp12;
          cResult[11] = tmp14;
          cResult[12] = tmp20;
          tmp17 = tmp20;
        }
        const obj4 = {
          style: tmp4.title,
          accessibilityRole: "header",
          "aria-level": "1",
          lineClamp: 1,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          children: title,
        };
        const tmp16 = React4(Text_Text.Text, obj4);
        cResult[6] = tmp4.title;
        cResult[7] = title;
        cResult[8] = tmp16;
        tmp14 = tmp16;
      }
      const tmp13 = React4(Pressables.PressableOpacity, {
        onPress: onPressIcon,
        hitSlop,
        accessibilityRole: "button",
        accessibilityLabel: first,
        children: tmp8,
      });
      cResult[3] = onPressIcon;
      cResult[4] = tmp8;
      cResult[5] = tmp13;
      tmp12 = tmp13;
      const obj5 = {
        onPress: onPressIcon,
        hitSlop,
        accessibilityRole: "button",
        accessibilityLabel: first,
        children: tmp8,
      };
    }
  : function ConjureProjectHeaderTitle(arg0) {
      ({ project, title, onPressIcon } = arg0);
      const tmp = closure_7();
      const obj = { style: tmp.row, children: null };
      const obj2 = {
        onPress: onPressIcon,
        hitSlop,
        accessibilityRole: "button",
        accessibilityLabel: null,
        children: null,
      };
      const intl = util.intl;
      obj2.accessibilityLabel = intl.string(_modDef3849.FzfmQ8);
      obj2.children = React4(ConjureProjectIconDefault, { project, size: "header" });
      const items = [
        React4(Pressables.PressableOpacity, obj2),
        React4(Text_Text.Text, {
          style: tmp.title,
          accessibilityRole: "header",
          "aria-level": "1",
          lineClamp: 1,
          variant: "redesign/heading-18/bold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
