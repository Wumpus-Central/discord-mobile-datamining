// discord_app/modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx
import _mod17 from "../../../../../../_runtime/metro/00017__.js";
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../../../Constants.tsx";
import CheckpointTextDefault from "../CheckpointText.tsx";
import UserStore from "../../../../../stores/UserStore.tsx";
import jsxProd from "../../../../../../_runtime/react/00021_jsxProd.js";
import createStyles from "../../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;

const View = _mod17.View;
const HelpdeskArticles = Constants.HelpdeskArticles;
({ jsx: metroRequire, jsxs: closure_7 } = jsxProd);
let obj = {
  container: { width: "100%", flexGrow: 1 },
  title: { transformOrigin: "left", width: 340 },
  titleText: { textTransform: "uppercase", fontSize: 72, lineHeight: 72, letterSpacing: -2.88 },
  subtitle: { maxWidth: 327, marginTop: nativeDefault.space.PX_12 },
  link: { textDecorationLine: "underline" },
  footer: null,
  content: null,
  knickKnacks: null,
};
let obj2 = { maxWidth: 327, marginTop: nativeDefault.space.PX_12 };
obj.footer = { flexGrow: 0, flexShrink: 0, gap: nativeDefault.space.PX_24 };
obj.content = { flex: 1, justifyContent: "center" };
let obj3 = { flexGrow: 0, flexShrink: 0, gap: nativeDefault.space.PX_24 };
obj.knickKnacks = { marginTop: nativeDefault.space.PX_16 };
let closure_8 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/checkpoint/native/components/screens/CheckpointWelcomeScreen.tsx");

export default function CheckpointWelcomeScreen() {
  function handleLearnMore() {
    const obj = handleLearnMore(4417);
    obj.openURL(handleLearnMore(2025).getArticleURL(constants.CHECKPOINT));
  }
  const tmp = closure_8();
  _require = tmp;
  const bound = Math.min(handleLearnMore(1478)().width / 392, 1);
  const items = [UserStore];
  const stateFromStores = require("initialize").useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj = require("initialize");
  const name = require("UserUtils").useName(stateFromStores);
  const obj3 = { children: null };
  const obj4 = { style: tmp.container, children: null };
  const obj5 = { style: tmp.content, children: null };
  const obj6 = { style: null, children: null };
  const items1 = [tmp.title];
  const obj7 = { transform: null };
  const items2 = [{ scale: bound }];
  obj7.transform = items2;
  items1[1] = obj7;
  obj6.style = items1;
  const obj2 = require("UserUtils");
  const obj8 = { style: tmp.titleText, variant: "display-lg", children: null };
  const tmp5 = handleLearnMore(15907);
  const intl = require("util").intl;
  obj8.children = intl.string(handleLearnMore(2998)["CdU/PF"]);
  obj6.children = closure_6(handleLearnMore(15909), obj8);
  const items3 = [closure_6(View, obj6), ,];
  const obj9 = { style: tmp.subtitle, children: null };
  const obj10 = { variant: "heading-xl/medium", children: null };
  const tmp6 = handleLearnMore(15909);
  const intl2 = require("util").intl;
  obj10.children = intl2.format(handleLearnMore(3030).xhZ23b, { username: name });
  obj9.children = closure_6(handleLearnMore(15909), obj10);
  items3[1] = closure_6(View, obj9);
  items3[2] = closure_6(handleLearnMore(15910), { style: tmp.knickKnacks });
  obj5.children = items3;
  const items4 = [closure_7(View, obj5)];
  const obj12 = { style: tmp.footer, children: null };
  const obj13 = { Icon: null, label: null, onPress: null };
  const obj11 = { style: tmp.knickKnacks };
  const tmp7 = handleLearnMore(15909);
  obj13.Icon = require("PlayIcon").PlayIcon;
  const intl3 = require("util").intl;
  obj13.label = intl3.string(require("util").t.I0v0Qv);
  obj13.onPress = function onPress() {};
  const items5 = [closure_6(handleLearnMore(15911), obj13)];
  const obj14 = { variant: "text-sm/medium", children: null };
  const tmp8 = handleLearnMore(15911);
  const intl4 = require("util").intl;
  obj14.children = intl4.format(handleLearnMore(3030).hcNhyq, {
    learnMoreHook(children, arg1) {
      return timestampProducer(
        CheckpointTextDefault,
        { variant: "text-sm/medium", style: link.link, onPress: handleLearnMore, accessibilityRole: "link", children },
        arg1,
      );
    },
  });
  items5[1] = closure_6(handleLearnMore(15909), obj14);
  obj12.children = items5;
  items4[1] = closure_7(View, obj12);
  obj4.children = items4;
  obj3.children = closure_7(View, obj4);
  return closure_6(tmp5, obj3);
}
