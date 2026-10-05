// === Module 16453: ICYMICustomStatusRow ===

// Module 16453 (ICYMICustomStatusRow)
import react_native from "react-native" /* 17 */;
import react2 from "react" /* 576 */;
import nativeDefault from "native" /* 587 */;
import intl4 from "intl" /* 1126 */;
import native from "native" /* 1188 */;
import TrashIcon from "TrashIcon" /* 4847 */;
import Text_Text from "Text/Text" /* 4886 */;
import Pressables from "Pressables" /* 5909 */;
import ReactionIcon from "ReactionIcon" /* 8411 */;
import PencilIcon from "PencilIcon" /* 10058 */;
import AssetRegistryDefault from "AssetRegistry" /* 11042 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11366 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react_mod from "react" /* 19 */;
import UserStore from "UserStore" /* 1377 */;
import ICYMIStore from "ICYMIStore" /* 8011 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4890 */;
import createICYMIStyles from "createICYMIStyles" /* 16394 */;
import ReactCompilerGating_mod from "ReactCompilerGating" /* 558 */;
import size_mod from "module_2" /* 2 */;

let id;

let c10;
let c9;
let metroImportAll;
let react = react_mod;
const View = react_native.View;
({ jsx: metroImportAll, jsxs: c9, Fragment: c10 } = Fragment);
let c11 = 40;
const PX_8 = nativeDefault.space.PX_8;
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { background: obj2 };
  return obj;
});
let closure_14 = createICYMIStyles.createICYMIStyles((gap, arg1) => {
  let num2;
  let obj3;
  let size1;
  let size2;
  let num = 56;
  if (!arg1) {
    num = nativeDefault.space.PX_40;
  }
  const obj = { bubbles: { position: "absolute", top: num }, middleBubble: size, bottomBubble: size1, title: { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 }, timestamp: { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 }, cardContainer: { position: "relative", marginLeft: gap.inset }, card: obj3, textOnly: { paddingVertical: gap.margin + nativeDefault.space.PX_12 }, emojiTextContainer: { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: gap.margin }, emojiText: { flexShrink: 1 }, leftAlign: { justifyContent: "flex-start" }, uploadContainer: { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" }, buttonIcon: size2 };
  size = { marginLeft: 32, borderRadius: nativeDefault.radii.round, height: 12, width: 12, overflow: "hidden" };
  size1 = { marginLeft: 44, marginTop: -4, borderRadius: nativeDefault.radii.round, height: 32, width: 32, overflow: "hidden" };
  ({ display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 });
  obj3 = { gap: gap.margin, alignItems: "center", justifyContent: "center", padding: gap.margin, borderRadius: nativeDefault.radii.lg, width: "100%", zIndex: 1, marginBottom: num2, overflow: "hidden" };
  num2 = 17;
  if (arg1) {
    num2 = 0;
  }
  ({ paddingVertical: gap.margin + nativeDefault.space.PX_12 });
  ({ marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" });
  size2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, height: 28, width };
  return obj;
});
let ReactCompilerGating = ReactCompilerGating_mod;
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (() => {
  let first;
  let intl;
  let items;
  let tmp12;
  let tmp9;
  const obj = react2;
  const cResult = obj.c(4);
  const tmp4 = closure_14(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.SMALL };
    const Icon = native.Icon;
    const tmp8 = metroImportAll(Icon, obj2);
    cResult[0] = tmp8;
    first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", color: "text-strong", children: intl.string(intl4.t["3UB9ad"]) };
    const Text = Text_Text.Text;
    intl = intl4.intl;
    const tmp11 = metroImportAll(Text, obj3);
    cResult[1] = tmp11;
    tmp9 = tmp11;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.uploadContainer) {
    const obj4 = { style: tmp4.uploadContainer, children: items };
    items = [first, tmp9];
    const tmp15 = React4(View, obj4);
    cResult[2] = tmp4.uploadContainer;
    cResult[3] = tmp15;
    tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (() => {
  let intl;
  let items;
  const obj = { style: closure_14(false).uploadContainer, children: items };
  const obj2 = { source: AssetRegistryDefault, size: native.IconSizes.SMALL };
  const Icon = native.Icon;
  items = [metroImportAll(Icon, obj2), ];
  const obj3 = { variant: "text-md/normal", color: "text-strong", children: intl.string(intl4.t["3UB9ad"]) };
  const Text = Text_Text.Text;
  intl = intl4.intl;
  items[1] = metroImportAll(Text, obj3);
  return React4(View, obj);
});
ReactCompilerGating = ReactCompilerGating_mod;
const tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? ((id) => {
  let customStatusExtra;
  let renderForScreenshot;
  let tmp12;
  let variant;
  const obj = id(576);
  const cResult = obj.c(115);
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot, variant } = id);
  closure_14(renderForScreenshot);
  const obj2 = id(7507);
  const gradientBottom = obj2.useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(587).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp6Result = closure_13(backgroundColor);
  if (cResult[0] !== tmp6Result.background.backgroundColor) {
    const tmpResult = id(4727);
    cResult[0] = tmp6Result.background.backgroundColor;
    cResult[1] = tmpResult.hexWithOpacity(tmp6Result.background.backgroundColor, 0.6);
    const hexWithOpacityResult = tmpResult.hexWithOpacity(tmp6Result.background.backgroundColor, 0.6);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    tmp12 = items;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== userId) {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
    cResult[3] = userId;
    cResult[4] = B;
  } else {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  const emoji_id = customStatusExtra.emoji_id;
  const tmpResult2 = id(504);
  const stateFromStores = tmpResult2.useStateFromStores(tmp12, B);
  if (emoji_id != null) {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  if ("0" !== undefined) {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  const emoji_name = customStatusExtra.emoji_name;
  if (emoji_name == null) {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  if (cResult[5] === customStatusExtra.emoji_animated) {
    class B {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  const obj3 = { id: null, name: emoji_name, animated: customStatusExtra.emoji_animated };
  cResult[5] = customStatusExtra.emoji_animated;
  cResult[6] = null;
  cResult[7] = emoji_name;
  cResult[8] = obj3;
}) : ((id) => {
  let PressableHighlight;
  let _undefined;
  let c7;
  let closure_4;
  let customStatusExtra;
  let flag;
  let getRelativeTimestamp;
  let intl;
  let intl2;
  let intl3;
  let items10;
  let items11;
  let items13;
  let items14;
  let items15;
  let items16;
  let items17;
  let items6;
  let items7;
  let items8;
  let items9;
  let num4;
  let obj17;
  let obj5;
  let renderForScreenshot;
  let str2;
  let tmp14Result10;
  let tmp14Result9;
  let tmp20Result;
  let tmp31Result9;
  let underlayColor;
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  let closure_5;
  let c6;
  c7 = undefined;
  let tmp = closure_14(renderForScreenshot);
  react = tmp;
  const tmp2 = id;
  let obj = id(renderForScreenshot[15]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(renderForScreenshot[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = closure_13(backgroundColor);
  closure_5 = tmp5Result;
  const tmp2Result = tmp2(renderForScreenshot[16]);
  const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  let items = [c6];
  let str1;
  const tmp2Result9 = tmp2(renderForScreenshot[17]);
  const stateFromStores = tmp2Result9.useStateFromStores(items, () => UserStore.getUser(userId));
  const tmp10 = c6;
  if (customStatusExtra.emoji_id != null) {
    str1 = str.toString();
  }
  let emoji_id = null;
  if ("0" !== str1) {
    emoji_id = customStatusExtra.emoji_id;
  }
  let obj2 = { id: emoji_id, name: str2, animated: customStatusExtra.emoji_animated };
  str2 = customStatusExtra.emoji_name;
  if (str2 == null) {
    str2 = "";
  }
  const tmp15 = userId(renderForScreenshot[18])({ userId });
  const tmp2Result10 = tmp2(renderForScreenshot[19]);
  const displayNameStylesFont = tmp2Result10.useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result10 = null != customStatusExtra.status;
  if (tmp31Result10) {
    tmp31Result10 = customStatusExtra.status.length > 0;
  }
  const tmp2Result11 = tmp2(renderForScreenshot[20]);
  const gameMentionsAsPlainText = tmp2Result11.useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj2.id) {
    let num3 = 40;
    const tmp14Result = userId(renderForScreenshot[21]);
    const tmp2Result12 = tmp2(renderForScreenshot[22]);
    if (tmp2Result12.isAndroid()) {
      num3 = 36;
    }
    let obj3 = { lineHeight: num3, fontSize: 36, marginTop: num4 };
    num4 = 4;
    const tmp2Result13 = tmp2(renderForScreenshot[22]);
    if (tmp2Result13.isAndroid()) {
      num4 = 0;
    }
    let obj4 = { style: obj3, size: 40, animate: flag, emoji: obj2 };
    flag = obj2.animated;
    if (flag == null) {
      flag = false;
    }
    tmp20Result = closure_8(tmp14Result, obj4);
  } else {
    tmp20Result = null;
  }
  let items1 = [tmp10];
  const tmp2Result14 = tmp2(renderForScreenshot[17]);
  const stateFromStores1 = tmp2Result14.useStateFromStores(items1, () => UserStore.getUser(userId));
  [size, c7] = variant(react.useState({ width: 0, height: 0 }), 2);
  let items2 = [variant];
  variant(react.useState({ width: 0, height: 0 }), 2);
  const hasStatus = react.useMemo(() => {
    let obj;
    if ("ownStatus" === variant.kind) {
      obj = { hasStatus: tmp.hasStatus };
      const obj2 = { hasStatus: tmp.hasStatus };
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  let items3 = [c7];
  let items4 = [id];
  let items5 = [tmp5Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
  ({ handlePressPrimary: arr6[4], handlePressSecondary: arr6[5], kind: arr6[6] } = variant);
  const tmp2Result15 = tmp2(renderForScreenshot[17]);
  const stateFromStores2 = tmp2Result15.useStateFromStores(items3, () => {
    const notificationItemResult = ICYMIStore.notificationItem();
    return null != notificationItemResult && notificationItemResult.id === id;
  }, items4);
  if (null == stateFromStores) {
    return null;
  } else {
    let items12;
    let tmp27 = "otherUserStatus" === variant.kind;
    if (tmp27) {
      const tmp14Result7 = userId(renderForScreenshot[28]);
      const ageResult = tmp14Result7.age(id);
      tmp27 = ageResult < 30 * tmp14(renderForScreenshot[29]).Millis.MINUTE;
    }
    const element = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot, title: closure_9(closure_5, obj5), subtitle: tmp31Result9, highlight: stateFromStores2, children: items11 };
    obj5 = { style: tmp.title, children: items6 };
    let tmp32;
    const tmp14Result8 = userId(renderForScreenshot[34]);
    const Text = tmp2(renderForScreenshot[13]).Text;
    if (null != displayNameStylesFont) {
      let obj6 = { fontFamily: displayNameStylesFont };
      tmp32 = obj6;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp32, children: tmp14Result9.getName(stateFromStores1) };
    tmp14Result9 = userId(renderForScreenshot[30]);
    items6 = [closure_8(Text, obj7), ];
    let tmp31Result = hasStatus;
    const obj8 = { style: tmp.timestamp, children: items7 };
    if (tmp31Result) {
      const obj9 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: getRelativeTimestamp(tmp14Result10.extractTimestamp(id)) };
      const Text2 = tmp2(renderForScreenshot[13]).Text;
      getRelativeTimestamp = tmp2(renderForScreenshot[31]).getRelativeTimestamp;
      tmp2(renderForScreenshot[31]);
      tmp14Result10 = userId(renderForScreenshot[28]);
      tmp31Result = closure_8(Text2, obj9);
    }
    items7 = [tmp31Result, , ];
    let tmp31Result7 = null;
    if (tmp27) {
      tmp31Result7 = closure_8(tmp14(renderForScreenshot[32]), {});
    }
    items7[1] = tmp31Result7;
    let tmp31Result8 = null;
    if (tmp27) {
      const obj10 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: intl.string(tmp2(renderForScreenshot[14]).t.tWnHcL) };
      const Text3 = tmp2(renderForScreenshot[13]).Text;
      intl = tmp2(renderForScreenshot[14]).intl;
      tmp31Result8 = closure_8(Text3, obj10);
    }
    items7[2] = tmp31Result8;
    items6[1] = closure_9(closure_5, obj8);
    tmp31Result9 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj11 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: intl2.string(tmp2(renderForScreenshot[14]).t.fxOLPR) };
      const Text4 = tmp2(renderForScreenshot[13]).Text;
      intl2 = tmp2(renderForScreenshot[14]).intl;
      tmp31Result9 = closure_8(Text4, obj11);
    }
    const obj13 = { style: items8 };
    items8 = [tmp.middleBubble, tmp5Result.background];
    const obj12 = { cutouts: [], style: tmp.bubbles, children: items9 };
    items9 = [, ];
    const tmp14Result11 = userId(renderForScreenshot[33]);
    items9[0] = closure_8(closure_5, obj13);
    const obj14 = { style: items10 };
    items10 = [tmp.bottomBubble, tmp5Result.background];
    items9[1] = closure_8(closure_5, obj14);
    items11 = [closure_9(tmp14Result11, obj12), ];
    const obj15 = { style: tmp.cardContainer, children: items17 };
    const tmp14Result12 = userId(renderForScreenshot[33]);
    if (renderForScreenshot) {
      items12 = [];
    } else {
      const size1 = { shape: tmp2(renderForScreenshot[33]).CutoutShape.RoundedRect, x: size.width - userId(renderForScreenshot[6]).space.PX_16 - c11 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: userId(renderForScreenshot[6]).radii.md + 3 };
      items12 = [size1, ];
      const size2 = { shape: tmp2(renderForScreenshot[33]).CutoutShape.RoundedRect, x: size.width - userId(renderForScreenshot[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: userId(renderForScreenshot[6]).radii.md + 3 };
      items12[1] = size2;
    }
    const obj16 = { cutouts: items12, children: closure_9(PressableHighlight, obj17) };
    obj17 = {
      onLayout(nativeEvent) {
          size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
          _undefined(size);
        },
      onPress: variant.handlePressPrimary,
      underlayColor: hexWithOpacityResult,
      style: items13,
      children: items16
    };
    items13 = [tmp.card, tmp5Result.background, ];
    let textOnly = null;
    PressableHighlight = tmp2(renderForScreenshot[23]).PressableHighlight;
    if (null == tmp20Result) {
      textOnly = tmp.textOnly;
    }
    items13[2] = textOnly;
    const obj18 = { style: items14, children: items15 };
    items14 = [tmp.emojiTextContainer];
    items15 = [tmp20Result, , ];
    if (tmp31Result10) {
      const obj19 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp31Result10 = closure_8(tmp2(renderForScreenshot[13]).Text, obj19);
    }
    items15[1] = tmp31Result10;
    let tmp31Result11 = !hasStatus;
    if (tmp31Result11) {
      const obj20 = { variant: "text-md/normal", children: intl3.string(tmp2(renderForScreenshot[14]).t["6ojWO0"]) };
      const Text5 = tmp2(renderForScreenshot[13]).Text;
      intl3 = tmp2(renderForScreenshot[14]).intl;
      tmp31Result11 = closure_8(Text5, obj20);
    }
    items15[2] = tmp31Result11;
    items16 = [closure_9(closure_5, obj18), ];
    items16[1] = !hasStatus && closure_8(closure_15, {});
    const tmp31Result12 = !hasStatus && closure_8(closure_15, {});
    items17 = [closure_8(tmp14Result12, obj16), tmp25];
    items11[1] = closure_9(closure_5, obj15);
    return closure_9(tmp14Result8, element);
  }
});
let size = size_mod;
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default tmp3;