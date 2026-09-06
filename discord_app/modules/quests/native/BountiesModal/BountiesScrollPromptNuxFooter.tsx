// discord_app/modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx
import _mod17 from "../../../../../_runtime/metro/00017__.js";
import util from "../../../../intl/index.native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

const View = _mod17.View;
({ jsx: c3, jsxs: closure_4 } = jsxProd);
let closure_5 = createStyles.createStyles(() => ({
  root: { alignItems: "center", gap: 2 },
  titleText: { textAlign: "center" },
  swipeText: { textAlign: "center", textTransform: "uppercase" },
}));
const result = size.fileFinishedImporting("modules/quests/native/BountiesModal/BountiesScrollPromptNuxFooter.tsx");

export default function BountiesScrollPromptFooter() {
  const tmp = closure_5();
  let obj = { style: tmp.root, children: null };
  obj = { variant: "text-md/semibold", color: "text-default", style: tmp.titleText, children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t.H57f41);
  const items = [React3(Text_Text.Text, obj)];
  obj = { variant: "text-xxs/semibold", color: "text-muted", style: tmp.swipeText, children: null };
  const intl2 = util.intl;
  obj.children = intl2.string(util.t.tG0zsk);
  items[1] = React3(Text_Text.Text, obj);
  obj.children = items;
  return React4(View, obj);
}
