// discord_app/modules/quests/native/QuestHomeEmptyState.tsx
import noopAll from "../../../../_runtime/00019_noop.js";
import obj132 from "../../../utils/PlatformUtils.tsx";
import ThemesDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../intl/index.native.tsx";
import map from "../../../design/tokens/native/useToken.tsx";
import useChatLayoutDefault from "../../chat/native/useChatLayout.tsx";
import Text from "../../../design/components/Text/native/Text.tsx";
import LinearGradientDefault from "../../../../_runtime/04756_LinearGradient.js";
import SafeAreaPaddingView from "../../../components_native/common/SafeAreaView.tsx";
import registerAssetDefault from "../../../../_runtime/14417_registerAsset.js";
import get_ActivityIndicator from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { VerticalGradient } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import "createCacheKey";

require = fn;
noopAll;
({ View: c3, ImageBackground: c4 } = get_ActivityIndicator);
({ jsx: closure_6, jsxs: error, Fragment: closure_8 } = jsxProd);
const createCacheKey = { top: -55, paddingHorizontal: ThemesDefault.space.PX_32 };
createCacheKey[2] = createCacheKey;
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { textAlign: "center", marginTop: 4 };
createCacheKey[5] = { flex: 1, width: "100%", aspectRatio: 1.6375545851528384, minWidth: "100%", position: "absolute", bottom: 0, zIndex: -1 };
createCacheKey[6] = { height: 22, width: "100%", position: "absolute", bottom: 0 };
createCacheKey[7] = { marginTop: 16, alignSelf: "center" };
let closure_9 = createCacheKey.createStyles(createCacheKey);
const result = require("obj132").fileFinishedImporting("modules/quests/native/QuestHomeEmptyState.tsx");

export default function QuestHomeEmptyState(subtitle) {
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
  const tmp5 = callback2();
  let obj = map;
  const token = obj.useToken(ThemesDefault.colors.BACKGROUND_BASE_LOWER);
  obj = { bottom: null, style: null, children: null };
  let obj2 = obj132;
  obj[0] = obj2.isAndroid();
  obj[1] = tmp5.container;
  obj = { style: tmp5.container, children: null };
  obj1 = { style: tmp5.emptyStateContainer, children: null };
  obj2 = { style: tmp5.emptyStateContentContainer, children: null };
  const items = [callback(Text.Text, { variant: "heading-xl/bold", color: "mobile-text-heading-primary", style: tmp5.emptyStateContentTitle, children: title }), callback(Text.Text, { variant: "text-md/normal", color: "text-default", style: tmp5.emptyStateContentDescription, children: subtitle }), ];
  let tmp9Result = null != action;
  if (tmp9Result) {
    const obj5 = { style: null, children: null };
    obj5[0] = tmp5.actionWrapper;
    obj5[1] = action;
    tmp9Result = callback(closure_3, obj5);
  }
  items[2] = tmp9Result;
  obj2[1] = items;
  const items1 = [callback(closure_3, obj2), ];
  let tmp11Result = null;
  if (!useChatLayoutDefault().isChatLockedOpen) {
    const obj6 = { children: null };
    const obj7 = { style: null, source: null, resizeMode: "cover" };
    obj7[0] = tmp5.emptyImage;
    obj7[1] = registerAssetDefault;
    const items2 = [callback(closure_4, obj7), ];
    const obj8 = { style: null, end: null, start: null, colors: null };
    obj8[0] = tmp5.gradient;
    ({ END: obj12[1], START: obj12[2] } = VerticalGradient);
    const items3 = ["rgba(0, 0, 0, 0)", token];
    obj8[3] = items3;
    items2[1] = callback(LinearGradientDefault, obj8);
    obj6[0] = items2;
    tmp11Result = callback(closure_8, obj6);
  }
  items1[1] = tmp11Result;
  obj1[1] = items1;
  obj[1] = callback(closure_3, obj1);
  obj[2] = callback(closure_3, obj);
  return callback(SafeAreaPaddingView.SafeAreaPaddingView, obj);
};