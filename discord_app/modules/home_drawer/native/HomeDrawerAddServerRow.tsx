// discord_app/modules/home_drawer/native/HomeDrawerAddServerRow.tsx
import c from "../../../../_runtime/00576_c.js";
import util from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerShared from "HomeDrawerShared.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const jsx = fn(21).jsx;
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = ReactCompilerGating.isReactCompilerEnabled()
  ? function HomeDrawerAddServerRowExpandedChildren() {
      const cResult = c.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const obj2 = { title: null, subtitle: null };
        const obj3 = { variant: "text-md/medium", color: "text-default", children: null };
        const intl = util.intl;
        obj3.children = intl.string(util.t.l5WIbf);
        obj2.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
        const tmp6 = jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
        cResult[0] = tmp6;
        let first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : function HomeDrawerAddServerRowExpandedChildren() {
      const obj = { title: null, subtitle: null };
      const obj2 = { variant: "text-md/medium", color: "text-default", children: null };
      const intl = util.intl;
      obj2.children = intl.string(util.t.l5WIbf);
      obj.title = jsx(Text_Text.Text, { variant: "text-md/medium", color: "text-default", children: null });
      return jsx(HomeDrawerShared.HomeDrawerSharedItem, { title: null, subtitle: null });
    };
