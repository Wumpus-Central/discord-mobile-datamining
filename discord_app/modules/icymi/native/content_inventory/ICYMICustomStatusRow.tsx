// discord_app/modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx
import ThemesDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import getSystemLocale from "../../../../intl/index.native.tsx";
import Button from "../../../../design/void/native.tsx";
import Text from "../../../../design/components/Text/native/Text.tsx";
import registerAssetDefault from "../../../../../_runtime/10447_registerAsset.js";
import closure_3 from "../../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../../_runtime/00019_noop.js";
import { View } from "../../../../../_runtime/00017_get_ActivityIndicator.js";
import closure_6 from "../../../../stores/UserStore.tsx";
import closure_7 from "../../ICYMIStore.tsx";
import jsxProd from "../../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../../design/components/Styles/native/createStyles.tsx";
import createICYMIStyles from "../createICYMIStyles.tsx";

require = arg1;
function UploadPlaceholder() {
  let obj = { style: callback3(false).uploadContainer, children: null };
  obj = { source: registerAssetDefault, size: Button.IconSizes.SMALL };
  const items = [callback(Button.Icon, obj), ];
  obj = { variant: "text-md/normal", color: "text-strong", children: null };
  const intl = getSystemLocale.intl;
  obj[2] = intl.string(getSystemLocale.t["3UB9ad"]);
  items[1] = callback(Text.Text, obj);
  obj[1] = items;
  return callback2(View, obj);
}
({ jsx: closure_8, jsxs: c9, Fragment: c10 } = jsxProd);
const PX_8 = ThemesDefault.space.PX_8;
let closure_12 = createCacheKey.createStyles((backgroundColor) => {
  const background = { backgroundColor, overflow: "hidden" };
  return { background };
});
let closure_13 = createICYMIStyles.createICYMIStyles((gap) => {
  let num = 56;
  if (!arg1) {
    num = ThemesDefault.space.PX_40;
  }
  let obj = { bubbles: { position: "absolute", top: num }, middleBubble: null, bottomBubble: null, title: null, timestamp: null, cardContainer: null, card: null, textOnly: null, emojiTextContainer: null, emojiText: null, leftAlign: null, uploadContainer: null, buttonIcon: null };
  obj = { marginLeft: 32, borderRadius: ThemesDefault.radii.round, height: 12, width: 12, overflow: "hidden" };
  obj[1] = obj;
  obj = { marginLeft: 44, marginTop: -4, borderRadius: ThemesDefault.radii.round, height: 32, width: 32, overflow: "hidden" };
  obj[2] = obj;
  obj[3] = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[4] = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 };
  obj[5] = { position: "relative", marginLeft: gap.inset };
  const obj2 = { gap: gap.margin, alignItems: "center", justifyContent: "center", padding: gap.margin, borderRadius: ThemesDefault.radii.lg, width: "100%", zIndex: 1, marginBottom: null, overflow: "hidden" };
  let num2 = 17;
  if (arg1) {
    num2 = 0;
  }
  obj2[7] = num2;
  obj[6] = obj2;
  obj1 = { display: "flex", flexDirection: "row", alignItems: "center", gap: ThemesDefault.space.PX_8 };
  obj[7] = { paddingVertical: gap.margin + ThemesDefault.space.PX_12 };
  obj[8] = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: gap.margin };
  obj[9] = { flexShrink: 1 };
  obj[10] = { justifyContent: "flex-start" };
  const obj3 = { paddingVertical: gap.margin + ThemesDefault.space.PX_12 };
  obj[11] = { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: ThemesDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: ThemesDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, gap: ThemesDefault.space.PX_4, flexDirection: "row" };
  const obj4 = { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: ThemesDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: ThemesDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: ThemesDefault.radii.lg, gap: ThemesDefault.space.PX_4, flexDirection: "row" };
  obj[12] = { alignItems: "center", justifyContent: "center", borderRadius: ThemesDefault.radii.md, height: 28, width: 40 };
  return obj;
});
const result = require("set").fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default function GravityCustomStatusEntryRow(id) {
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  let React;
  closure_5 = undefined;
  c6 = undefined;
  c7 = undefined;
  const tmp = callback3(renderForScreenshot);
  React = tmp;
  let obj = id(renderForScreenshot[13]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(tmp3[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = closure_12(backgroundColor);
  closure_5 = tmp5Result;
  let tmp2Result = tmp2(tmp3[14]);
  const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  tmp2Result = tmp2(tmp3[15]);
  let items = [c6];
  let str = customStatusExtra.emoji_id;
  str = undefined;
  const stateFromStores = tmp2Result.useStateFromStores(items, () => _undefined.getUser(userId));
  if (str != null) {
    str = str.toString();
  }
  let emoji_id = null;
  if ("0" !== str) {
    emoji_id = customStatusExtra.emoji_id;
  }
  obj = { id: emoji_id, name: null, animated: null };
  let str2 = customStatusExtra.emoji_name;
  if (str2 == null) {
    str2 = "";
  }
  obj[1] = str2;
  obj[2] = customStatusExtra.emoji_animated;
  const tmp10 = c6;
  const tmp15 = userId(renderForScreenshot[16])({ userId });
  const tmp5 = closure_12;
  const displayNameStylesFont = id(renderForScreenshot[17]).useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result3 = null != customStatusExtra.status;
  if (tmp31Result3) {
    tmp31Result3 = customStatusExtra.status.length > 0;
  }
  const tmp2Result1 = id(renderForScreenshot[17]);
  const gameMentionsAsPlainText = id(renderForScreenshot[18]).useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj.id) {
    let tmp14Result = tmp14(tmp3[19]);
    let num3 = 40;
    if (tmp2Result3.isAndroid()) {
      num3 = 36;
    }
    obj = { lineHeight: null, fontSize: 36, marginTop: null };
    obj[0] = num3;
    const tmp20 = closure_8;
    tmp2Result3 = tmp2(tmp3[20]);
    let num4 = 4;
    if (tmp2Result4.isAndroid()) {
      num4 = 0;
    }
    obj1 = { style: null, size: 40, animate: null, emoji: null };
    obj[2] = num4;
    obj1[0] = obj;
    let flag = obj.animated;
    if (flag == null) {
      flag = false;
    }
    obj1[2] = flag;
    obj1[3] = obj;
    let tmp20Result = tmp20(tmp14Result, obj1);
    tmp2Result4 = tmp2(tmp3[20]);
  } else {
    tmp20Result = null;
  }
  const tmp2Result2 = id(renderForScreenshot[18]);
  let items1 = [tmp10];
  const stateFromStores1 = id(renderForScreenshot[15]).useStateFromStores(items1, () => _undefined.getUser(userId));
  const tmp2Result5 = id(renderForScreenshot[15]);
  [size, c7] = variant(React.useState({ width: 0, height: 0 }), 2);
  let items2 = [variant];
  const hasStatus = React.useMemo(() => {
    if ("ownStatus" === variant.kind) {
      let obj = { hasStatus: null };
      obj[0] = tmp.hasStatus;
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  const tmp23 = variant(React.useState({ width: 0, height: 0 }), 2);
  let items3 = [c7];
  let items4 = [id];
  let items5 = [tmp5Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
  ({ handlePressPrimary: arr6[4], handlePressSecondary: arr6[5], kind: arr6[6] } = variant);
  const stateFromStores2 = id(renderForScreenshot[15]).useStateFromStores(items3, () => {
    const notificationItemResult = _undefined2.notificationItem();
    let tmp2 = null != notificationItemResult;
    if (tmp2) {
      tmp2 = notificationItemResult.id === id;
    }
    return tmp2;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let tmp27 = "otherUserStatus" === variant.kind;
    if (tmp27) {
      tmp14Result = tmp14(tmp3[26]);
      tmp27 = tmp14Result.age(id) < 30 * tmp14(tmp3[27]).Millis.MINUTE;
      const ageResult = tmp14Result.age(id);
    }
    let obj2 = { contentId: null, userId: null, type: "hotwheels_custom_status", renderForScreenshot: null, title: null, subtitle: null, highlight: null, children: null };
    obj2[0] = id;
    obj2[1] = userId;
    obj2[3] = renderForScreenshot;
    let obj3 = { style: null, children: null };
    obj3[0] = tmp.title;
    let tmp32;
    if (null != displayNameStylesFont) {
      let obj4 = { fontFamily: null };
      obj4[0] = displayNameStylesFont;
      tmp32 = obj4;
    }
    let obj5 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: null, children: null };
    obj5[2] = tmp32;
    const tmp14Result1 = tmp14(tmp3[28]);
    obj5[3] = tmp14(tmp3[29]).getName(stateFromStores1);
    const items6 = [closure_8(tmp2(tmp3[11]).Text, obj5), ];
    let obj6 = { style: null, children: null };
    obj6[0] = tmp.timestamp;
    let tmp31Result = hasStatus;
    if (hasStatus) {
      let obj7 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: null };
      const tmp2Result7 = tmp2(tmp3[30]);
      obj7[3] = tmp2Result7.getRelativeTimestamp(tmp14(tmp3[26]).extractTimestamp(id));
      tmp31Result = tmp31(tmp2(tmp3[11]).Text, obj7);
      const tmp14Result3 = tmp14(tmp3[26]);
    }
    const items7 = [tmp31Result, , ];
    tmp31Result = null;
    if (tmp27) {
      tmp31Result = tmp31(tmp14(tmp3[31]), {});
    }
    items7[1] = tmp31Result;
    let tmp31Result1 = null;
    if (tmp27) {
      const obj8 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: null };
      const intl = tmp2(tmp3[12]).intl;
      obj8[3] = intl.string(tmp2(tmp3[12]).t.tWnHcL);
      tmp31Result1 = tmp31(tmp2(tmp3[11]).Text, obj8);
    }
    items7[2] = tmp31Result1;
    obj6[1] = items7;
    items6[1] = closure_9(closure_5, obj6);
    obj3[1] = items6;
    obj2[4] = closure_9(closure_5, obj3);
    let tmp31Result2 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj9 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: null };
      const intl2 = tmp2(tmp3[12]).intl;
      obj9[3] = intl2.string(tmp2(tmp3[12]).t.fxOLPR);
      tmp31Result2 = tmp31(tmp2(tmp3[11]).Text, obj9);
    }
    obj2[5] = tmp31Result2;
    obj2[6] = stateFromStores2;
    const obj10 = { cutouts: null, style: null, children: null };
    obj10[0] = [];
    obj10[1] = tmp.bubbles;
    const obj11 = { style: null };
    const items8 = [tmp.middleBubble, tmp5Result.background];
    obj11[0] = items8;
    const tmp14Result2 = tmp14(tmp3[29]);
    const items9 = [closure_8(closure_5, obj11), ];
    const obj12 = { style: null };
    const items10 = [tmp.bottomBubble, tmp5Result.background];
    obj12[0] = items10;
    items9[1] = closure_8(closure_5, obj12);
    obj10[2] = items9;
    const items11 = [closure_9(tmp14(tmp3[32]), obj10), ];
    const obj13 = { style: null, children: null };
    obj13[0] = tmp.cardContainer;
    const tmp14Result4 = tmp14(tmp3[32]);
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      const obj14 = { shape: null, x: null, y: null, width: 46, height: 34, cornerRadius: null };
      obj14[0] = tmp2(tmp3[32]).CutoutShape.RoundedRect;
      obj14[1] = size.width - tmp14(tmp3[6]).space.PX_16 - 40 - 3;
      obj14[2] = size.height - 14 - 3;
      obj14[5] = tmp14(tmp3[6]).radii.md + 3;
      items12 = [obj14, ];
      const obj15 = { shape: null, x: null, y: null, width: 46, height: 34, cornerRadius: null };
      obj15[0] = tmp2(tmp3[32]).CutoutShape.RoundedRect;
      obj15[1] = size.width - tmp14(tmp3[6]).space.PX_16 - 86 - PX_8;
      obj15[2] = size.height - 14 - 3;
      obj15[5] = tmp14(tmp3[6]).radii.md + 3;
      items12[1] = obj15;
    }
    const obj16 = { cutouts: null, children: null };
    obj16[0] = items12;
    const obj17 = { onLayout: null, onPress: null, underlayColor: null, style: null, children: null };
    obj17[0] = function onLayout(nativeEvent) {
      _undefined2({ width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height });
    };
    obj17[1] = variant.handlePressPrimary;
    obj17[2] = hexWithOpacityResult;
    const items13 = [tmp.card, tmp5Result.background, ];
    let textOnly = null;
    if (null == tmp20Result) {
      textOnly = tmp.textOnly;
    }
    items13[2] = textOnly;
    obj17[3] = items13;
    const obj18 = { style: null, children: null };
    const items14 = [tmp.emojiTextContainer];
    obj18[0] = items14;
    const items15 = [tmp20Result, , ];
    if (tmp31Result3) {
      const obj19 = { style: null, variant: "text-md/normal", children: null };
      obj19[0] = tmp.emojiText;
      obj19[2] = gameMentionsAsPlainText;
      tmp31Result3 = tmp31(tmp2(tmp3[11]).Text, obj19);
    }
    items15[1] = tmp31Result3;
    let tmp31Result4 = !hasStatus;
    if (!hasStatus) {
      const obj20 = { variant: "text-md/normal", children: null };
      const intl3 = tmp2(tmp3[12]).intl;
      obj20[1] = intl3.string(tmp2(tmp3[12]).t["6ojWO0"]);
      tmp31Result4 = tmp31(tmp2(tmp3[11]).Text, obj20);
    }
    items15[2] = tmp31Result4;
    obj18[1] = items15;
    const items16 = [closure_9(closure_5, obj18), ];
    let tmp31Result5 = !hasStatus;
    if (!hasStatus) {
      tmp31Result5 = tmp31(UploadPlaceholder, {});
    }
    items16[1] = tmp31Result5;
    obj17[4] = items16;
    obj16[1] = closure_9(tmp2(tmp3[21]).PressableHighlight, obj17);
    const items17 = [closure_8(tmp14(tmp3[32]), obj16), tmp25];
    obj13[1] = items17;
    items11[1] = closure_9(closure_5, obj13);
    obj2[7] = items11;
    return closure_9(tmp14Result1, obj2);
  }
  const tmp2Result6 = id(renderForScreenshot[15]);
};