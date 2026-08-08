// discord_app/modules/quests/native/QuestHomeEmptyState.tsx
import "noop";
import get_ActivityIndicator from "get ActivityIndicator";
import { VerticalGradient } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";
import { Themes } from "../../../../discord_common/js/packages/tokens/native.tsx";
import { SafeAreaPaddingView } from "../../../components_native/common/SafeAreaView.tsx";
import { Text } from "../../../design/components/Text/native/Text.tsx";
import { map } from "../../../design/tokens/native/useToken.tsx";
import { getSystemLocale } from "../../../intl/index.native.tsx";
import { set } from "../../../utils/PlatformUtils.tsx";
import { useChatLayout } from "../../chat/native/useChatLayout.tsx";

let c3;
let c4;
let closure_6;
let error;
let metroImportAll;
const require = arg1;
({ View: c3, ImageBackground: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: metroImportAll } = jsxProd);
createCacheKey = { container: { flex: 1 }, emptyStateContainer: { justifyContent: "center", alignItems: "center", flex: 1 }, emptyStateContentContainer: null, emptyStateContentTitle: null, emptyStateContentDescription: null, emptyImage: null, gradient: null, actionWrapper: null };
createCacheKey = { top: -55, paddingHorizontal: require("Themes").space.PX_32 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { textAlign: "center", marginTop: 4 };
createCacheKey[5] = { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 };
createCacheKey[6] = { height: 22, width: "100%", position: "absolute", bottom: 0 };
createCacheKey[7] = { marginTop: 16, alignSelf: "center" };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const result = require("ME").fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
  let action;
  let title;
  ({ action, title } = subtitle);
  if (title === undefined) {
    const intl = getSystemLocale.intl;
    title = intl.string(getSystemLocale.t.SdlRnK);
  }
  subtitle = subtitle.subtitle;
  if (subtitle === undefined) {
    const intl2 = getSystemLocale.intl;
    subtitle = intl2.string(getSystemLocale.t["R7mv+G"]);
  }
  const tmp5 = createCacheKey();
  let obj = map;
  const token = obj.useToken(Themes.colors.BACKGROUND_BASE_LOWER);
  obj = { bottom: null, style: null, children: null };
  let obj2 = set;
  obj[0] = obj2.isAndroid();
  obj[1] = tmp5.container;
  obj = { style: tmp5.container, children: null };
  const obj1 = { style: tmp5.emptyStateContainer, children: null };
  obj2 = { style: tmp5.emptyStateContentContainer, children: null };
  const items = [callback(Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title }), callback(Text.Text, { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle }), ];
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.actionWrapper;
    obj5[1] = action;
    tmp9Result = tmp9(tmp10, obj5);
  }
  items[2] = tmp9Result;
  obj2[1] = items;
  const items1 = [closure_7(closure_3, obj2), ];
  let tmp11Result = null;
  if (!useChatLayout().isChatLockedOpen) {
    const obj6 = { children: null };
    const obj7 = { style: null, source: null, resizeMode: "cover" };
    obj7[0] = tmp5.emptyImage;
    obj7[1] = tmp7(14305);
    const items2 = [tmp9(closure_4, obj7), ];
    const obj8 = { style: null, end: null, start: null, colors: null };
    obj8[0] = tmp5.gradient;
    ({ END: obj12[1], START: obj12[2] } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj8[3] = items3;
    items2[1] = tmp9(tmp7(4725), obj8);
    obj6[0] = items2;
    tmp11Result = tmp11(closure_8, obj6);
  }
  items1[1] = tmp11Result;
  obj1[1] = items1;
  obj[1] = closure_7(closure_3, obj1);
  obj[2] = callback(closure_3, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};