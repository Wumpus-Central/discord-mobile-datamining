// discord_app/modules/auth/native/components/ExternalLink.tsx
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import noop from "../../../../../_runtime/metro/00019__.js";

const require = globalThis.__r;

const require = fn;
get_ActivityIndicator = fn(17);
({ Linking: closure_4, ScrollView: hasOwnProperty, View: metroRequire } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4636);
let closure_9 = createStyles.createStyles((arg0) => {
  const container = {
    backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW,
    height: "100%",
    display: "flex",
    justifyContent: null,
    paddingLeft: null,
    paddingRight: null,
  };
  let str = "center";
  if (arg0) {
    str = "space-between";
  }
  container.justifyContent = str;
  const space = nativeDefault.space;
  container.paddingLeft = arg0 ? space.PX_24 : space.PX_16;
  const space2 = nativeDefault.space;
  container.paddingRight = arg0 ? space2.PX_24 : space2.PX_16;
  return { container, description: { textAlign: "center", marginTop: 8 } };
});
const size = fn(2);
const result = size.fileFinishedImporting("modules/auth/native/components/ExternalLink.tsx");

export default function ExternalLink(externalURL) {
  externalURL = externalURL.externalURL;
  importDefault = undefined;
  let onPress;
  const tmp = closure_9(require("useWideAuthView")());
  importDefault = externalURL(onPress[6]).useNavigation();
  const items = [externalURL];
  onPress = noop.useCallback(() => {
    React4.openURL(externalURL);
  }, items);
  const items1 = [onPress];
  const effect = noop.useEffect(() => {
    callback();
  }, items1);
  const obj2 = {
    alwaysBounceVertical: false,
    keyboardShouldPersistTaps: "handled",
    contentContainerStyle: tmp.container,
    children: null,
  };
  const obj3 = { children: null };
  const obj4 = { children: null };
  const obj = externalURL(onPress[6]);
  const intl = externalURL(onPress[8]).intl;
  obj4.children = intl.string(externalURL(onPress[8]).t["0Niu/F"]);
  const items2 = [closure_7(require("AuthHeader"), obj4)];
  const obj5 = { style: tmp.description, variant: "text-md/medium", color: "text-default", children: null };
  const intl2 = externalURL(onPress[8]).intl;
  obj5.children = intl2.string(externalURL(onPress[8]).t.nToOEg);
  items2[1] = closure_7(externalURL(onPress[9]).Text, obj5);
  obj3.children = items2;
  const items3 = [closure_8(closure_6, obj3)];
  const obj6 = { children: null };
  const obj7 = { shrink: true, variant: "primary", text: null, onPress: null };
  const intl3 = externalURL(onPress[8]).intl;
  obj7.text = intl3.string(externalURL(onPress[8]).t["2ixEBi"]);
  obj7.onPress = onPress;
  const items4 = [closure_7(externalURL(onPress[11]).Button, obj7)];
  const obj8 = { shrink: true, variant: "secondary", text: null, onPress: null };
  const intl4 = externalURL(onPress[8]).intl;
  obj8.text = intl4.string(externalURL(onPress[8]).t.j3cG2p);
  obj8.onPress = function onPress() {
    return closure_1.pop();
  };
  items4[1] = closure_7(externalURL(onPress[11]).Button, obj8);
  obj6.children = items4;
  items3[1] = closure_8(externalURL(onPress[10]).ButtonGroup, obj6);
  obj2.children = items3;
  return closure_8(closure_5, obj2);
}
