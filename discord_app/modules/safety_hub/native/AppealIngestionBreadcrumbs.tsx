// discord_app/modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import noop from "../../../../_runtime/metro/00019__.js";

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: c3, jsxs: closure_4 } = jsxProd);
fn(4560);
const createStyles = {
  container: { flex: 0, alignSelf: "stretch", marginBottom: 8 },
  title: { lineHeight: 16, marginBottom: 8 },
  breadCrumbItemContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    marginBottom: 8,
    marginEnd: 32,
    overflow: "visible",
  },
  breadCrumbDot: null,
  breadCrumbBar: null,
  breadCrumbText: null,
};
let size = {
  marginStart: 2,
  marginTop: 8,
  width: 4,
  height: 4,
  borderRadius: 2,
  backgroundColor: nativeDefault.colors.BACKGROUND_BRAND,
};
createStyles.breadCrumbDot = size;
const rect = {
  position: "absolute",
  width: 2,
  top: 10,
  bottom: -12,
  left: 3,
  backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOWEST,
};
createStyles.breadCrumbBar = rect;
createStyles.breadCrumbText = { marginStart: 8, lineHeight: 20 };
let closure_5 = createStyles.createStyles(createStyles);
size = fn(2);
const result = size.fileFinishedImporting("modules/safety_hub/native/AppealIngestionBreadcrumbs.tsx");

export default function AppealIngestionBreadcrumbs(reasons) {
  reasons = reasons.reasons;
  const tmp = closure_5();
  _require = tmp;
  let tmp2 = null;
  if (0 !== reasons.length) {
    let obj = { style: tmp.container, children: null };
    obj = { style: tmp.title, accessibilityRole: "header", variant: "text-xs/bold", children: null };
    const intl = require("util").intl;
    obj.children = intl.string(require("util").t.eQg0Ck);
    let items = [
      closure_3(require("Text/Text").Text, obj),
      reasons.map((children, index) => {
        let obj = { style: closure_0.breadCrumbItemContainer, children: null };
        obj = { style: closure_0.breadCrumbBar };
        const items = [React3(View, obj), ,];
        obj = { style: closure_0.breadCrumbDot };
        items[1] = React3(View, obj);
        items[2] = React3(Text_Text.Text, {
          lineClamp: 2,
          ellipsizeMode: "tail",
          style: closure_0.breadCrumbText,
          variant: "text-md/medium",
          children,
        });
        obj.children = items;
        return React4(View, obj, "" + children + "+" + index);
      }),
    ];
    obj.children = items;
    tmp2 = closure_4(View, obj);
  }
  return tmp2;
}
