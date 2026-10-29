// discord_app/modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx
import c from "../../../../../_runtime/00576_c.js";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import _modDef3864 from "../../intl/ConjureUntranslated.messages.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import Pressables from "../../../../design/void/Pressables/native/Pressables.tsx";
import ConjureProjectIconDefault from "ConjureProjectIcon.tsx";
import useConjurePublishedServerNameDefault from "../../publish/useConjurePublishedServerName.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_4, jsxs: hasOwnProperty } = jsxProd);
const hitSlop = { top: 12, bottom: 12, left: 12, right: 12 };
const createStyles = fn(5005);
let obj2 = {
  row: { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 },
  titles: { flex: 1, justifyContent: "center" },
};
let closure_7 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { flex: 1, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_12 };
const size = fn(2);
const result = size.fileFinishedImporting("modules/conjure/projects/native/ConjureProjectHeaderTitle.tsx");

export default ReactCompilerGating.isReactCompilerEnabled()
  ? function ConjureProjectHeaderTitle(arg0) {
      const cResult = c.c(15);
      ({ project, title, onPressIcon } = arg0);
      const tmp4 = closure_7();
      let str;
      if (project != null) {
        str = project.id;
      }
      if (str == null) {
        str = "";
      }
      const tmp6Result = useConjurePublishedServerNameDefault(str);
      if (cResult[0] === onPressIcon) {
        if (cResult[1] === project) {
          let tmp8 = cResult[2];
        }
        if (cResult[3] !== title) {
          const obj2 = {
            accessibilityRole: "header",
            "aria-level": "1",
            lineClamp: 1,
            maxFontSizeMultiplier: 2,
            variant: "redesign/heading-18/semibold",
            color: "mobile-text-heading-primary",
            children: title,
          };
          const tmp14 = React4(Text_Text.Text, obj2);
          cResult[3] = title;
          cResult[4] = tmp14;
          let tmp12 = tmp14;
        } else {
          tmp12 = cResult[4];
        }
        if (cResult[5] !== tmp6Result) {
          let tmp16 = null;
          if (null != tmp6Result) {
            const obj3 = {
              lineClamp: 1,
              maxFontSizeMultiplier: 2,
              variant: "text-xs/normal",
              color: "text-subtle",
              children: tmp6Result,
            };
            tmp16 = React4(Text_Text.Text, obj3);
          }
          cResult[5] = tmp6Result;
          cResult[6] = tmp16;
          let tmp15 = tmp16;
        } else {
          tmp15 = cResult[6];
        }
        if (cResult[7] === tmp4.titles) {
          if (cResult[8] === tmp12) {
            if (cResult[9] === tmp15) {
              let tmp18 = cResult[10];
            }
            if (cResult[11] === tmp4.row) {
              if (cResult[12] === tmp8) {
                if (cResult[13] === tmp18) {
                  let tmp22 = cResult[14];
                }
                return tmp22;
              }
            }
            const obj4 = { style: tmp4.row, children: null };
            const items = [tmp8, tmp18];
            obj4.children = items;
            const tmp25 = hasOwnProperty(View, obj4);
            cResult[11] = tmp4.row;
            cResult[12] = tmp8;
            cResult[13] = tmp18;
            cResult[14] = tmp25;
            tmp22 = tmp25;
          }
        }
        const obj5 = { style: tmp4.titles, children: null };
        const items1 = [tmp12, tmp15];
        obj5.children = items1;
        const tmp21 = hasOwnProperty(View, obj5);
        cResult[7] = tmp4.titles;
        cResult[8] = tmp12;
        cResult[9] = tmp15;
        cResult[10] = tmp21;
        tmp18 = tmp21;
      }
      let tmp9 = null;
      if (null != project) {
        const obj6 = {
          onPress: onPressIcon,
          hitSlop,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = util.intl;
        obj6.accessibilityLabel = intl.string(_modDef3864.FzfmQ8);
        const obj7 = { project, size: "list" };
        obj6.children = React4(ConjureProjectIconDefault, obj7);
        tmp9 = React4(Pressables.PressableOpacity, obj6);
      }
      cResult[0] = onPressIcon;
      cResult[1] = project;
      cResult[2] = tmp9;
      tmp8 = tmp9;
    }
  : function ConjureProjectHeaderTitle(project) {
      project = project.project;
      ({ title, onPressIcon } = project);
      const tmp = closure_7();
      let str;
      if (project != null) {
        str = project.id;
      }
      if (str == null) {
        str = "";
      }
      const tmp4Result = useConjurePublishedServerNameDefault(str);
      const obj = { style: tmp.row, children: null };
      let tmp8 = null;
      if (null != project) {
        const obj2 = {
          onPress: onPressIcon,
          hitSlop,
          accessibilityRole: "button",
          accessibilityLabel: null,
          children: null,
        };
        const intl = util.intl;
        obj2.accessibilityLabel = intl.string(_modDef3864.FzfmQ8);
        const obj3 = { project, size: "list" };
        obj2.children = React4(ConjureProjectIconDefault, obj3);
        tmp8 = React4(Pressables.PressableOpacity, obj2);
      }
      const items = [tmp8];
      const obj4 = { style: tmp.titles, children: null };
      const items1 = [
        React4(Text_Text.Text, {
          accessibilityRole: "header",
          "aria-level": "1",
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          variant: "redesign/heading-18/semibold",
          color: "mobile-text-heading-primary",
          children: title,
        }),
      ];
      let tmp12Result = null;
      if (null != tmp4Result) {
        const obj5 = {
          lineClamp: 1,
          maxFontSizeMultiplier: 2,
          variant: "text-xs/normal",
          color: "text-subtle",
          children: tmp4Result,
        };
        tmp12Result = React4(Text_Text.Text, obj5);
      }
      items1[1] = tmp12Result;
      obj4.children = items1;
      items[1] = hasOwnProperty(View, obj4);
      obj.children = items;
      return hasOwnProperty(View, obj);
    };
