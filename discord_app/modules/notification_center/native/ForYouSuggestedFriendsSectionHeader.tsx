// discord_app/modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import react2 from "../../../../_runtime/00576_react.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl2 from "../../../intl/index.native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import react from "../../../../_runtime/00019_react.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let showDivider;

let obj2;
let obj3;
const View = react_native.View;
const jsx = Fragment.jsx;
let createStyles = createStyles_mod;
let obj = { container: obj2, noDivider: { borderTopWidth: 0, marginTop: 0 }, text: obj3 };
obj2 = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  marginTop: 12,
  marginBottom: 8,
  paddingHorizontal: 24,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "space-between",
};
createStyles = createStyles.createStyles;
obj3 = { marginTop: nativeDefault.space.PX_16 };
let closure_4 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (showDivider) => {
      const obj = react2;
      const cResult = obj.c(9);
      showDivider = showDivider.showDivider;
      const tmp4 = closure_4();
      if (cResult[0] === tmp4.container) {
        let tmp6;
        let tmp8;
        let tmp10;
        if (cResult[1] === (!showDivider && tmp4.noDivider)) {
          tmp6 = cResult[2];
        }
        const _Symbol = Symbol;
        const text = tmp4.text;
        if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
          const intl = intl2.intl;
          const stringResult = intl.string(intl2.t["1uAmCw"]);
          cResult[3] = stringResult;
          tmp8 = stringResult;
        } else {
          tmp8 = cResult[3];
        }
        if (cResult[4] !== tmp4.text) {
          const tmp12 = jsx(Text_Text.Text, {
            style: text,
            color: "text-muted",
            variant: "text-sm/semibold",
            children: tmp8,
          });
          cResult[4] = tmp4.text;
          cResult[5] = tmp12;
          tmp10 = tmp12;
        } else {
          tmp10 = cResult[5];
        }
        if (cResult[6] === tmp6) {
          let tmp13;
          if (cResult[7] === tmp10) {
            tmp13 = cResult[8];
          }
          return tmp13;
        }
        const tmp16 = <View style={tmp6}>{tmp10}</View>;
        cResult[6] = tmp6;
        cResult[7] = tmp10;
        cResult[8] = tmp16;
        tmp13 = tmp16;
      }
      const items = [tmp4.container, !showDivider && tmp4.noDivider];
      cResult[0] = tmp4.container;
      cResult[1] = !showDivider && tmp4.noDivider;
      cResult[2] = items;
      tmp6 = items;
    }
  : (showDivider) => {
      let intl;
      showDivider = showDivider.showDivider;
      const tmp = closure_4();
      const items = [tmp.container];
      const noDivider = !showDivider && tmp.noDivider;
      items[1] = noDivider;
      ({ style: tmp.text, color: "text-muted", variant: "text-sm/semibold", children: intl.string(intl2.t["1uAmCw"]) });
      const Text = Text_Text.Text;
      intl = intl2.intl;
      return <View style={items}>{null}</View>;
    };
const result = size.fileFinishedImporting("modules/notification_center/native/ForYouSuggestedFriendsSectionHeader.tsx");

export default tmp4;
