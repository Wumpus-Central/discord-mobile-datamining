// discord_app/modules/home_drawer/native/HomeDrawerAddServerRow.tsx
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import HomeDrawerShared from "HomeDrawerShared.tsx";
import react from "../../../../_runtime/00019_react.js";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const jsx = Fragment.jsx;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled()
  ? () => {
      let first;
      let intl;
      const obj = react2;
      const cResult = obj.c(1);
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
        ({ variant: "text-md/medium", color: "text-default", children: intl.string(intl2.t.l5WIbf) });
        const Text = Text_Text.Text;
        intl = intl2.intl;
        const tmp6 = <HomeDrawerSharedItem title={null} subtitle={null} />;
        cResult[0] = tmp6;
        first = tmp6;
      } else {
        first = cResult[0];
      }
      return first;
    }
  : () => {
      let intl;
      const HomeDrawerSharedItem = HomeDrawerShared.HomeDrawerSharedItem;
      ({ variant: "text-md/medium", color: "text-default", children: intl.string(intl2.t.l5WIbf) });
      const Text = Text_Text.Text;
      intl = intl2.intl;
      return <HomeDrawerSharedItem title={null} subtitle={null} />;
    };
const result = size.fileFinishedImporting("modules/home_drawer/native/HomeDrawerAddServerRow.tsx");

export const HomeDrawerAddServerRowExpandedChildren = tmp3;
