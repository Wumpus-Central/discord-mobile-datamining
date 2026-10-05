// discord_app/modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx
import react_native from "../../../../../_runtime/00017_react-native.js";
import react2 from "../../../../../_runtime/00576_react.js";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import react from "../../../../../_runtime/00019_react.js";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c3;
let closure_4;
const View = react_native.View;
({ jsx: c3, jsxs: closure_4 } = Fragment);
let closure_5 = createStyles.createStyles({
  header: { alignItems: "center", paddingBottom: 24 },
  headerTitle: { marginTop: 8, marginBottom: 8 },
  headerSubtitle: { textAlign: "center" },
});
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (arg0) => {
      let items;
      let subtitle;
      let title;
      const obj = react2;
      const cResult = obj.c(10);
      ({ title, subtitle } = arg0);
      const tmp4 = closure_5();
      if (cResult[0] === tmp4.headerTitle) {
        let tmp5;
        if (cResult[1] === title) {
          tmp5 = cResult[2];
        }
        if (cResult[3] === tmp4.headerSubtitle) {
          let tmp7;
          if (cResult[4] === subtitle) {
            tmp7 = cResult[5];
          }
          if (cResult[6] === tmp4.header) {
            if (cResult[7] === tmp5) {
              let tmp11;
              if (cResult[8] === tmp7) {
                tmp11 = cResult[9];
              }
              return tmp11;
            }
          }
          const obj2 = { style: tmp4.header, children: items };
          items = [tmp5, tmp7];
          const tmp14 = React3(View, obj2);
          cResult[6] = tmp4.header;
          cResult[7] = tmp5;
          cResult[8] = tmp7;
          cResult[9] = tmp14;
          tmp11 = tmp14;
        }
        let tmp9 = null;
        if (null != subtitle) {
          tmp9 = null;
          if ("" !== subtitle) {
            const obj3 = {
              style: tmp4.headerSubtitle,
              variant: "text-sm/medium",
              color: "text-default",
              children: subtitle,
            };
            tmp9 = _false(Text_Text.Text, obj3);
          }
        }
        cResult[3] = tmp4.headerSubtitle;
        cResult[4] = subtitle;
        cResult[5] = tmp9;
        tmp7 = tmp9;
      }
      const obj4 = {
        style: tmp4.headerTitle,
        accessibilityRole: "header",
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      const tmp6 = _false(Text_Text.Text, obj4);
      cResult[0] = tmp4.headerTitle;
      cResult[1] = title;
      cResult[2] = tmp6;
      tmp5 = tmp6;
    }
  : (subtitle) => {
      let items;
      subtitle = subtitle.subtitle;
      const title = subtitle.title;
      const tmp = closure_5();
      const obj = { style: tmp.header, children: items };
      items = [,];
      const obj2 = {
        style: tmp.headerTitle,
        accessibilityRole: "header",
        variant: "heading-xl/semibold",
        color: "mobile-text-heading-primary",
        children: title,
      };
      items[0] = _false(Text_Text.Text, obj2);
      let tmp4Result = null;
      if (null != subtitle) {
        tmp4Result = null;
        if ("" !== subtitle) {
          const obj3 = {
            style: tmp.headerSubtitle,
            variant: "text-sm/medium",
            color: "text-default",
            children: subtitle,
          };
          tmp4Result = _false(Text_Text.Text, obj3);
        }
      }
      items[1] = tmp4Result;
      return React3(View, obj);
    };
const result = size.fileFinishedImporting(
  "modules/guild_scheduled_events/native/components/EditGuildEventStepHeader.tsx",
);

export default tmp4;
