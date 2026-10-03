// discord_app/modules/search/native/components/list/SearchListSection.tsx
import c from "../../../../../../_runtime/00576_c.js";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import noop from "../../../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
const createStyles = fn(4890);
let closure_5 = createStyles.createStyles({
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    paddingTop: fn(7513).SEARCH_LIST_SECTION_TOP_PADDING,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
});
const ReactCompilerGating = fn(558);
let obj = {
  section: {
    flex: 1,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    textTransform: "none",
    paddingTop: fn(7513).SEARCH_LIST_SECTION_TOP_PADDING,
    paddingHorizontal: 16,
    paddingBottom: 8,
  },
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/search/native/components/list/SearchListSection.tsx");

export default noop.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (arg0) => {
        const cResult = c.c(6);
        ({ title, trailing } = arg0);
        const tmp4 = closure_5();
        if (cResult[0] !== title) {
          const obj2 = {
            maxFontSizeMultiplier: 2,
            accessibilityRole: "header",
            variant: "text-sm/semibold",
            color: "interactive-text-default",
            children: title,
          };
          const tmp7 = React3(Text_Text.Text, obj2);
          cResult[0] = title;
          cResult[1] = tmp7;
          let tmp5 = tmp7;
        } else {
          tmp5 = cResult[1];
        }
        if (cResult[2] === tmp4.section) {
          if (cResult[3] === tmp5) {
            if (cResult[4] === trailing) {
              let tmp8 = cResult[5];
            }
            return tmp8;
          }
        }
        const obj3 = { style: tmp4.section, children: null };
        const items = [tmp5, trailing];
        obj3.children = items;
        const tmp9 = React4(View, obj3);
        cResult[2] = tmp4.section;
        cResult[3] = tmp5;
        cResult[4] = trailing;
        cResult[5] = tmp9;
        tmp8 = tmp9;
      }
    : (arg0) => {
        ({ title, trailing } = arg0);
        const obj = { style: closure_5().section, children: null };
        const items = [
          React3(Text_Text.Text, {
            maxFontSizeMultiplier: 2,
            accessibilityRole: "header",
            variant: "text-sm/semibold",
            color: "interactive-text-default",
            children: title,
          }),
          trailing,
        ];
        obj.children = items;
        return React4(View, obj);
      },
);
