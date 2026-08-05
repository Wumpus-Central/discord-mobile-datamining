// discord_app/modules/share/native/SearchableDestinationListHeader.tsx
import "noop";
import { View } from "get ActivityIndicator";
import { jsx } from "jsxProd";
import createCacheKey from "createCacheKey";
import { Background } from "../../../../_runtime/05230_Background.js";
import { HeaderBackImage } from "../../../design/components/Navigator/native/NavigatorHeader.native.tsx";

const require = arg1;
createCacheKey = { container: null, header: null };
createCacheKey = { paddingHorizontal: require("Themes").space.PX_16, paddingVertical: require("Themes").space.PX_8, backgroundColor: require("Themes").colors.MOBILE_ACTIONSHEET_BACKGROUND };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { borderBottomWidth: 0, shadowColor: "transparent", backgroundColor: "transparent" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("jsxProd").fileFinishedImporting("modules/share/native/SearchableDestinationListHeader.tsx");

export default function SearchableDestinationListHeader(arg0) {
  let dependencyMap;
  let headerRight;
  let onClose;
  let require;
  let title;
  ({ subtitle: require, subtitleColor: dependencyMap } = arg0);
  ({ title, headerRight, onClose } = arg0);
  const tmp = createCacheKey();
  let obj = { style: tmp.container, children: null };
  obj = {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerStatusBarHeight: null
  };
  obj[4] = HeaderBackImage.getHeaderCloseButton(onClose);
  obj[5] = headerRight;
  const obj3 = HeaderBackImage;
  const tmp3 = View;
  const tmp4 = require;
  let num;
  if (obj4.isIOS()) {
    if (!tmp4Result.getIsWindowLarge()) {
      num = 0;
    }
    tmp4Result = tmp4(7534);
  }
  obj[6] = num;
  obj[1] = jsx(Background.Header, {
    headerStyle: tmp.header,
    title,
    headerTitle(children) {
      return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
    },
    headerTitleAlign: "center",
    headerLeft: null,
    headerRight: null,
    headerStatusBarHeight: null
  });
  return <tmp3 headerStyle={tmp.header} title={title} headerTitle={function headerTitle(children) {
    return outer1_3(outer1_0(outer1_1[6]).GenericHeaderTitle, { title: children.children, subtitle: closure_0, subtitleColor: closure_1, variant: "redesign/heading-18/bold" });
  }} headerTitleAlign="center" headerLeft={null} headerRight={null} headerStatusBarHeight={null} />;
};