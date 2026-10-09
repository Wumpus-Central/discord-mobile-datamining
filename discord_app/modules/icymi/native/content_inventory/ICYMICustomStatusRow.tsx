// === Module 16879: ICYMICustomStatusRow ===

// Module 16879 (ICYMICustomStatusRow)
import c from "c" /* 576 */;
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import native from "native" /* 1200 */;
import TrashIcon from "TrashIcon" /* 5048 */;
import Text_Text from "Text/Text" /* 5087 */;
import Pressables from "Pressables" /* 6191 */;
import ReactionIcon from "ReactionIcon" /* 8941 */;
import PencilIcon from "PencilIcon" /* 9694 */;
import _modDef11637 from "module_11637" /* 11637 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 12784 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1390 */;
import ICYMIStore from "ICYMIStore" /* 8437 */;

require = fn;
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
let c11 = 40;
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(5091);
let closure_13 = createStyles.createStyles((backgroundColor) => {
  const obj = { background: { backgroundColor, overflow: "hidden" } };
  return obj;
});
const createICYMIStyles = fn(16820);
let closure_14 = createICYMIStyles.createICYMIStyles((gap, arg1) => {
  let num = 56;
  if (!arg1) {
    num = nativeDefault.space.PX_40;
  }
  const obj = { bubbles: { position: "absolute", top: num }, middleBubble: null, bottomBubble: null, title: null, timestamp: null, cardContainer: null, card: null, textOnly: null, emojiTextContainer: null, emojiText: null, leftAlign: null, uploadContainer: null, buttonIcon: null };
  const size = { marginLeft: 32, borderRadius: nativeDefault.radii.round, height: 12, width: 12, overflow: "hidden" };
  obj.middleBubble = size;
  const size1 = { marginLeft: 44, marginTop: -4, borderRadius: nativeDefault.radii.round, height: 32, width: 32, overflow: "hidden" };
  obj.bottomBubble = size1;
  obj.title = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.timestamp = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 };
  obj.cardContainer = { position: "relative", marginLeft: gap.inset };
  const obj3 = { gap: gap.margin, alignItems: "center", justifyContent: "center", padding: gap.margin, borderRadius: nativeDefault.radii.lg, width: "100%", zIndex: 1, marginBottom: null, overflow: "hidden" };
  let num2 = 17;
  if (arg1) {
    num2 = 0;
  }
  obj3.marginBottom = num2;
  obj.card = obj3;
  const obj2 = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.textOnly = { paddingVertical: gap.margin + nativeDefault.space.PX_12 };
  obj.emojiTextContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: gap.margin };
  obj.emojiText = { flexShrink: 1 };
  obj.leftAlign = { justifyContent: "flex-start" };
  const obj4 = { paddingVertical: gap.margin + nativeDefault.space.PX_12 };
  obj.uploadContainer = { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" };
  const size2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, height: 28, width };
  obj.buttonIcon = size2;
  return obj;
});
let ReactCompilerGating = fn(558);
let closure_15 = ReactCompilerGating.isReactCompilerEnabled() ? (function UploadPlaceholder() {
  const cResult = c.c(4);
  const tmp4 = closure_14(false);
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const obj2 = { source: _modDef11637, size: native.IconSizes.SMALL };
    const tmp8 = closure_1_8(native.Icon, obj2);
    cResult[0] = tmp8;
    let first = tmp8;
  } else {
    first = cResult[0];
  }
  if (cResult[1] === Symbol.for("react.memo_cache_sentinel")) {
    const obj3 = { variant: "text-md/normal", color: "text-strong", children: null };
    const intl = util.intl;
    obj3.children = intl.string(util.t["3UB9ad"]);
    const tmp11 = closure_1_8(Text_Text.Text, obj3);
    cResult[1] = tmp11;
    let tmp9 = tmp11;
  } else {
    tmp9 = cResult[1];
  }
  if (cResult[2] !== tmp4.uploadContainer) {
    const obj4 = { style: tmp4.uploadContainer, children: null };
    const items = [first, tmp9];
    obj4.children = items;
    const tmp15 = options(View, obj4);
    cResult[2] = tmp4.uploadContainer;
    cResult[3] = tmp15;
    let tmp12 = tmp15;
  } else {
    tmp12 = cResult[3];
  }
  return tmp12;
}) : (function UploadPlaceholder() {
  const obj = { style: closure_14(false).uploadContainer, children: null };
  const items = [closure_1_8(native.Icon, { source: _modDef11637, size: native.IconSizes.SMALL }), ];
  const obj3 = { variant: "text-md/normal", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3UB9ad"]);
  items[1] = closure_1_8(Text_Text.Text, obj3);
  obj.children = items;
  return options(View, obj);
});
ReactCompilerGating = fn(558);
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function GravityCustomStatusEntryRow(id) {
  const cResult = id(576).c(113);
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot, variant } = id);
  closure_14(renderForScreenshot);
  const obj = id(576);
  const gradientBottom = id(9279).useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(587).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp6Result = closure_13(backgroundColor);
  if (cResult[0] !== tmp6Result.background.backgroundColor) {
    const hexWithOpacityResult = tmp(4928).hexWithOpacity(tmp6Result.background.backgroundColor, 0.6);
    cResult[0] = tmp6Result.background.backgroundColor;
    cResult[1] = hexWithOpacityResult;
    const tmpResult = tmp(4928);
  }
  if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [UserStore];
    cResult[2] = items;
    let tmp12 = items;
  } else {
    tmp12 = cResult[2];
  }
  if (cResult[3] !== userId) {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
    cResult[3] = userId;
    cResult[4] = A;
  } else {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  const obj2 = id(9279);
  const stateFromStores = id(504).useStateFromStores(tmp12, A);
  if (customStatusExtra.emoji_id != null) {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  if ("0" !== undefined) {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  const emoji_name = customStatusExtra.emoji_name;
  if (emoji_name == null) {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  if (cResult[5] === customStatusExtra.emoji_animated) {
    class A {
      constructor() {
        return closure_6.getUser(userId);
      }
    }
  }
  cResult[5] = customStatusExtra.emoji_animated;
  cResult[6] = null;
  cResult[7] = emoji_name;
  cResult[8] = { id: null, name: emoji_name, animated: customStatusExtra.emoji_animated };
  const obj3 = { id: null, name: emoji_name, animated: customStatusExtra.emoji_animated };
  const tmpResult2 = id(504);
}) : (function GravityCustomStatusEntryRow(id) {
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  closure_5 = undefined;
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_14(renderForScreenshot);
  noop = tmp;
  const gradientBottom = id(renderForScreenshot[15]).useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(renderForScreenshot[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = closure_13(backgroundColor);
  closure_5 = tmp5Result;
  let obj = id(renderForScreenshot[15]);
  const hexWithOpacityResult = id(renderForScreenshot[16]).hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  const tmp2Result = id(renderForScreenshot[16]);
  let items = [c6];
  let str1;
  const stateFromStores = id(renderForScreenshot[17]).useStateFromStores(items, () => UserStore.getUser(userId));
  if (customStatusExtra.emoji_id != null) {
    str1 = str.toString();
  }
  let emoji_id = null;
  if ("0" !== str1) {
    emoji_id = customStatusExtra.emoji_id;
  }
  let obj2 = { id: emoji_id, name: null, animated: null };
  let str2 = customStatusExtra.emoji_name;
  if (str2 == null) {
    str2 = "";
  }
  obj2.name = str2;
  obj2.animated = customStatusExtra.emoji_animated;
  const tmp10 = c6;
  const tmp2Result9 = id(renderForScreenshot[17]);
  const tmp15 = userId(renderForScreenshot[18])({ userId });
  const displayNameStylesFont = id(renderForScreenshot[19]).useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result10 = null != customStatusExtra.status;
  if (tmp31Result10) {
    tmp31Result10 = customStatusExtra.status.length > 0;
  }
  const tmp2Result10 = id(renderForScreenshot[19]);
  const gameMentionsAsPlainText = id(renderForScreenshot[20]).useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj2.id) {
    const tmp14Result = tmp14(renderForScreenshot[21]);
    let num3 = 40;
    if (tmp2Result12.isAndroid()) {
      num3 = 36;
    }
    let obj3 = { lineHeight: num3, fontSize: 36, marginTop: null };
    tmp2Result12 = tmp2(renderForScreenshot[22]);
    let num4 = 4;
    if (tmp2Result13.isAndroid()) {
      num4 = 0;
    }
    let obj4 = { style: null, size: 40, animate: null, emoji: null };
    obj3.marginTop = num4;
    obj4.style = obj3;
    let flag = obj2.animated;
    if (flag == null) {
      flag = false;
    }
    obj4.animate = flag;
    obj4.emoji = obj2;
    let tmp20Result = closure_8(tmp14Result, obj4);
    tmp2Result13 = tmp2(renderForScreenshot[22]);
  } else {
    tmp20Result = null;
  }
  const tmp2Result11 = id(renderForScreenshot[20]);
  let items1 = [tmp10];
  const stateFromStores1 = id(renderForScreenshot[17]).useStateFromStores(items1, () => UserStore.getUser(userId));
  const tmp2Result14 = id(renderForScreenshot[17]);
  [size, c7] = variant(noop.useState({ width: 0, height: 0 }), 2);
  let items2 = [variant];
  const hasStatus = noop.useMemo(() => {
    if ("ownStatus" === variant.kind) {
      const obj2 = { hasStatus: tmp.hasStatus };
      let obj = obj2;
    } else {
      obj = { hasStatus: true };
    }
    return obj;
  }, items2).hasStatus;
  const tmp23 = variant(noop.useState({ width: 0, height: 0 }), 2);
  let items3 = [c7];
  let items4 = [id];
  let items5 = [tmp5Result.background, hexWithOpacityResult, renderForScreenshot, tmp.buttonIcon, , , ];
  ({ handlePressPrimary: arr6[4], handlePressSecondary: arr6[5], kind: arr6[6] } = variant);
  const stateFromStores2 = id(renderForScreenshot[17]).useStateFromStores(items3, () => {
    const notificationItemResult = ICYMIStore.notificationItem();
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
      const tmp14Result7 = tmp14(renderForScreenshot[28]);
      tmp27 = tmp14(renderForScreenshot[28]).age(id) < 30 * tmp14(renderForScreenshot[29]).Millis.MINUTE;
      const ageResult = tmp14(renderForScreenshot[28]).age(id);
    }
    const element = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot, title: null, subtitle: null, highlight: null, children: null };
    let obj5 = { style: tmp.title, children: null };
    let tmp32;
    if (null != displayNameStylesFont) {
      let obj6 = { fontFamily: displayNameStylesFont };
      tmp32 = obj6;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp32, children: null };
    const tmp14Result8 = tmp14(renderForScreenshot[34]);
    obj7.children = tmp14(renderForScreenshot[30]).getName(stateFromStores1);
    const items6 = [closure_8(tmp2(renderForScreenshot[13]).Text, obj7), ];
    const obj8 = { style: tmp.timestamp, children: null };
    let tmp31Result = hasStatus;
    if (hasStatus) {
      const obj9 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: null };
      const tmp2Result16 = tmp2(renderForScreenshot[31]);
      obj9.children = tmp2Result16.getRelativeTimestamp(tmp14(renderForScreenshot[28]).extractTimestamp(id));
      tmp31Result = closure_8(tmp2(renderForScreenshot[13]).Text, obj9);
      const tmp14Result10 = tmp14(renderForScreenshot[28]);
    }
    const items7 = [tmp31Result, , ];
    let tmp31Result7 = null;
    if (tmp27) {
      tmp31Result7 = closure_8(tmp14(renderForScreenshot[32]), {});
    }
    items7[1] = tmp31Result7;
    let tmp31Result8 = null;
    if (tmp27) {
      const obj10 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: null };
      const intl = tmp2(renderForScreenshot[14]).intl;
      obj10.children = intl.string(tmp2(renderForScreenshot[14]).t.tWnHcL);
      tmp31Result8 = closure_8(tmp2(renderForScreenshot[13]).Text, obj10);
    }
    items7[2] = tmp31Result8;
    obj8.children = items7;
    items6[1] = closure_9(closure_5, obj8);
    obj5.children = items6;
    element.title = closure_9(closure_5, obj5);
    let tmp31Result9 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj11 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: null };
      const intl2 = tmp2(renderForScreenshot[14]).intl;
      obj11.children = intl2.string(tmp2(renderForScreenshot[14]).t.fxOLPR);
      tmp31Result9 = closure_8(tmp2(renderForScreenshot[13]).Text, obj11);
    }
    element.subtitle = tmp31Result9;
    element.highlight = stateFromStores2;
    const obj12 = { cutouts: [], style: tmp.bubbles, children: null };
    const obj13 = { style: null };
    const items8 = [tmp.middleBubble, tmp5Result.background];
    obj13.style = items8;
    const tmp14Result9 = tmp14(renderForScreenshot[30]);
    const items9 = [closure_8(closure_5, obj13), ];
    const obj14 = { style: null };
    const items10 = [tmp.bottomBubble, tmp5Result.background];
    obj14.style = items10;
    items9[1] = closure_8(closure_5, obj14);
    obj12.children = items9;
    const items11 = [closure_9(tmp14(renderForScreenshot[33]), obj12), ];
    const obj15 = { style: tmp.cardContainer, children: null };
    const tmp14Result11 = tmp14(renderForScreenshot[33]);
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      const size1 = { shape: tmp2(renderForScreenshot[33]).CutoutShape.RoundedRect, x: size.width - tmp14(renderForScreenshot[6]).space.PX_16 - c11 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(renderForScreenshot[6]).radii.md + 3 };
      items12 = [size1, ];
      const size2 = { shape: tmp2(renderForScreenshot[33]).CutoutShape.RoundedRect, x: size.width - tmp14(renderForScreenshot[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(renderForScreenshot[6]).radii.md + 3 };
      items12[1] = size2;
    }
    const obj16 = { cutouts: items12, children: null };
    const obj17 = {
      onLayout(nativeEvent) {
          const size = { width: nativeEvent.nativeEvent.layout.width, height: nativeEvent.nativeEvent.layout.height };
          _undefined(size);
        },
      onPress: variant.handlePressPrimary,
      underlayColor: hexWithOpacityResult,
      style: null,
      children: null
    };
    const items13 = [tmp.card, tmp5Result.background, ];
    let textOnly = null;
    if (null == tmp20Result) {
      textOnly = tmp.textOnly;
    }
    items13[2] = textOnly;
    obj17.style = items13;
    const obj18 = { style: tmp.emojiTextContainer, children: null };
    const items14 = [tmp20Result, , ];
    if (tmp31Result10) {
      const obj19 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp31Result10 = closure_8(tmp2(renderForScreenshot[13]).Text, obj19);
    }
    items14[1] = tmp31Result10;
    let tmp31Result11 = !hasStatus;
    if (!hasStatus) {
      const obj20 = { variant: "text-md/normal", children: null };
      const intl3 = tmp2(renderForScreenshot[14]).intl;
      obj20.children = intl3.string(tmp2(renderForScreenshot[14]).t["6ojWO0"]);
      tmp31Result11 = closure_8(tmp2(renderForScreenshot[13]).Text, obj20);
    }
    items14[2] = tmp31Result11;
    obj18.children = items14;
    const items15 = [closure_9(closure_5, obj18), ];
    let tmp31Result12 = !hasStatus;
    if (!hasStatus) {
      tmp31Result12 = closure_8(closure_15, {});
    }
    items15[1] = tmp31Result12;
    obj17.children = items15;
    obj16.children = closure_9(tmp2(renderForScreenshot[23]).PressableHighlight, obj17);
    const items16 = [closure_8(tmp14(renderForScreenshot[33]), obj16), tmp25];
    obj15.children = items16;
    items11[1] = closure_9(closure_5, obj15);
    element.children = items11;
    return closure_9(tmp14Result8, element);
  }
  const tmp2Result15 = id(renderForScreenshot[17]);
});