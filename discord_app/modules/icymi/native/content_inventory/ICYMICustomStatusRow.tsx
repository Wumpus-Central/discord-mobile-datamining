// === Module 16511: ICYMICustomStatusRow ===

// Module 16511 (ICYMICustomStatusRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import native from "native" /* 1178 */;
import TrashIcon from "TrashIcon" /* 4518 */;
import Text_Text from "Text/Text" /* 4556 */;
import Pressables from "Pressables" /* 5123 */;
import ReactionIcon from "ReactionIcon" /* 8757 */;
import PencilIcon from "PencilIcon" /* 10250 */;
import _modDef11245 from "module_11245" /* 11245 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11734 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1371 */;
import ICYMIStore from "ICYMIStore" /* 8335 */;

require = fn;
function UploadPlaceholder() {
  let obj = { style: closure_13(false).uploadContainer, children: null };
  obj = { source: _modDef11245, size: native.IconSizes.SMALL };
  const items = [React6(native.Icon, obj), ];
  obj = { variant: "text-md/normal", color: "text-strong", children: null };
  const intl = util.intl;
  obj.children = intl.string(util.t["3UB9ad"]);
  items[1] = React6(Text_Text.Text, obj);
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4560);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  let obj = { background: null };
  obj = { backgroundColor, overflow: "hidden" };
  obj.background = obj;
  return obj;
});
const createICYMIStyles = fn(16452);
let closure_13 = createICYMIStyles.createICYMIStyles((gap, arg1) => {
  let num = 56;
  if (!arg1) {
    num = nativeDefault.space.PX_40;
  }
  let obj = { bubbles: { position: "absolute", top: num }, middleBubble: null, bottomBubble: null, title: null, timestamp: null, cardContainer: null, card: null, textOnly: null, emojiTextContainer: null, emojiText: null, leftAlign: null, uploadContainer: null, buttonIcon: null };
  const size = { marginLeft: 32, borderRadius: nativeDefault.radii.round, height: 12, width: 12, overflow: "hidden" };
  obj.middleBubble = size;
  const size1 = { marginLeft: 44, marginTop: -4, borderRadius: nativeDefault.radii.round, height: 32, width: 32, overflow: "hidden" };
  obj.bottomBubble = size1;
  obj = { display: "flex", flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_8 };
  obj.title = obj;
  obj.timestamp = { display: "flex", flexDirection: "row", alignItems: "center", gap: 6 };
  obj.cardContainer = { position: "relative", marginLeft: gap.inset };
  obj = { gap: gap.margin, alignItems: "center", justifyContent: "center", padding: gap.margin, borderRadius: nativeDefault.radii.lg, width: "100%", zIndex: 1, marginBottom: null, overflow: "hidden" };
  let num2 = 17;
  if (arg1) {
    num2 = 0;
  }
  obj.marginBottom = num2;
  obj.card = obj;
  obj.textOnly = { paddingVertical: gap.margin + nativeDefault.space.PX_12 };
  obj.emojiTextContainer = { flexDirection: "row", alignItems: "center", justifyContent: "center", gap: gap.margin };
  obj.emojiText = { flexShrink: 1 };
  obj.leftAlign = { justifyContent: "flex-start" };
  const obj1 = { paddingVertical: gap.margin + nativeDefault.space.PX_12 };
  obj.uploadContainer = { marginHorizontal: gap.margin, marginBottom: gap.margin, alignItems: "center", justifyContent: "center", minHeight: nativeDefault.space.PX_48, width: "100%", borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_STRONG, borderWidth: 1, borderRadius: nativeDefault.radii.lg, gap: nativeDefault.space.PX_4, flexDirection: "row" };
  const size2 = { alignItems: "center", justifyContent: "center", borderRadius: nativeDefault.radii.md, height: 28, width: 40 };
  obj.buttonIcon = size2;
  return obj;
});
let size = fn(2);
const result = size.fileFinishedImporting("modules/icymi/native/content_inventory/ICYMICustomStatusRow.tsx");

export default function GravityCustomStatusEntryRow(id) {
  id = id.id;
  const userId = id.userId;
  ({ customStatusExtra, renderForScreenshot } = id);
  const variant = id.variant;
  closure_5 = undefined;
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_13(renderForScreenshot);
  noop = tmp;
  let obj = id(renderForScreenshot[13]);
  const gradientBottom = obj.useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(renderForScreenshot[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = closure_12(backgroundColor);
  closure_5 = tmp5Result;
  let tmp2Result = tmp2(renderForScreenshot[14]);
  const hexWithOpacityResult = tmp2Result.hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  tmp2Result = tmp2(renderForScreenshot[15]);
  let items = [c6];
  let str;
  const stateFromStores = tmp2Result.useStateFromStores(items, () => UserStore.getUser(userId));
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
  obj.name = str2;
  obj.animated = customStatusExtra.emoji_animated;
  const tmp10 = c6;
  const tmp15 = userId(renderForScreenshot[16])({ userId });
  const displayNameStylesFont = id(renderForScreenshot[17]).useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result3 = null != customStatusExtra.status;
  if (tmp31Result3) {
    tmp31Result3 = customStatusExtra.status.length > 0;
  }
  const tmp2Result1 = id(renderForScreenshot[17]);
  const gameMentionsAsPlainText = id(renderForScreenshot[18]).useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj.id) {
    let tmp14Result = tmp14(renderForScreenshot[19]);
    let num3 = 40;
    if (tmp2Result3.isAndroid()) {
      num3 = 36;
    }
    obj = { lineHeight: num3, fontSize: 36, marginTop: null };
    tmp2Result3 = tmp2(renderForScreenshot[20]);
    let num4 = 4;
    if (tmp2Result4.isAndroid()) {
      num4 = 0;
    }
    let obj1 = { style: null, size: 40, animate: null, emoji: null };
    obj.marginTop = num4;
    obj1.style = obj;
    let flag = obj.animated;
    if (flag == null) {
      flag = false;
    }
    obj1.animate = flag;
    obj1.emoji = obj;
    let tmp20Result = closure_8(tmp14Result, obj1);
    tmp2Result4 = tmp2(renderForScreenshot[20]);
  } else {
    tmp20Result = null;
  }
  const tmp2Result2 = id(renderForScreenshot[18]);
  let items1 = [tmp10];
  const stateFromStores1 = id(renderForScreenshot[15]).useStateFromStores(items1, () => UserStore.getUser(userId));
  const tmp2Result5 = id(renderForScreenshot[15]);
  [size, c7] = variant(noop.useState({ width: 0, height: 0 }), 2);
  let items2 = [variant];
  const hasStatus = noop.useMemo(() => {
    if ("ownStatus" === variant.kind) {
      let obj = { hasStatus: tmp.hasStatus };
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
  const stateFromStores2 = id(renderForScreenshot[15]).useStateFromStores(items3, () => {
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
      tmp14Result = tmp14(renderForScreenshot[26]);
      tmp27 = tmp14Result.age(id) < 30 * tmp14(renderForScreenshot[27]).Millis.MINUTE;
      const ageResult = tmp14Result.age(id);
    }
    const element = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot, title: null, subtitle: null, highlight: null, children: null };
    let obj2 = { style: tmp.title, children: null };
    let tmp32;
    if (null != displayNameStylesFont) {
      let obj3 = { fontFamily: displayNameStylesFont };
      tmp32 = obj3;
    }
    const obj4 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp32, children: null };
    const tmp14Result1 = tmp14(renderForScreenshot[28]);
    obj4.children = tmp14(renderForScreenshot[29]).getName(stateFromStores1);
    const items6 = [closure_8(tmp2(renderForScreenshot[11]).Text, obj4), ];
    const obj5 = { style: tmp.timestamp, children: null };
    let tmp31Result = hasStatus;
    if (hasStatus) {
      const obj6 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: null };
      const tmp2Result7 = tmp2(renderForScreenshot[30]);
      obj6.children = tmp2Result7.getRelativeTimestamp(tmp14(renderForScreenshot[26]).extractTimestamp(id));
      tmp31Result = closure_8(tmp2(renderForScreenshot[11]).Text, obj6);
      const tmp14Result3 = tmp14(renderForScreenshot[26]);
    }
    const items7 = [tmp31Result, , ];
    tmp31Result = null;
    if (tmp27) {
      tmp31Result = closure_8(tmp14(renderForScreenshot[31]), {});
    }
    items7[1] = tmp31Result;
    let tmp31Result1 = null;
    if (tmp27) {
      const obj7 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: null };
      const intl = tmp2(renderForScreenshot[12]).intl;
      obj7.children = intl.string(tmp2(renderForScreenshot[12]).t.tWnHcL);
      tmp31Result1 = closure_8(tmp2(renderForScreenshot[11]).Text, obj7);
    }
    items7[2] = tmp31Result1;
    obj5.children = items7;
    items6[1] = closure_9(closure_5, obj5);
    obj2.children = items6;
    element.title = closure_9(closure_5, obj2);
    let tmp31Result2 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj8 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: null };
      const intl2 = tmp2(renderForScreenshot[12]).intl;
      obj8.children = intl2.string(tmp2(renderForScreenshot[12]).t.fxOLPR);
      tmp31Result2 = closure_8(tmp2(renderForScreenshot[11]).Text, obj8);
    }
    element.subtitle = tmp31Result2;
    element.highlight = stateFromStores2;
    const obj9 = { cutouts: [], style: tmp.bubbles, children: null };
    const obj10 = { style: null };
    const items8 = [tmp.middleBubble, tmp5Result.background];
    obj10.style = items8;
    const tmp14Result2 = tmp14(renderForScreenshot[29]);
    const items9 = [closure_8(closure_5, obj10), ];
    const obj11 = { style: null };
    const items10 = [tmp.bottomBubble, tmp5Result.background];
    obj11.style = items10;
    items9[1] = closure_8(closure_5, obj11);
    obj9.children = items9;
    const items11 = [closure_9(tmp14(renderForScreenshot[32]), obj9), ];
    const obj12 = { style: tmp.cardContainer, children: null };
    const tmp14Result4 = tmp14(renderForScreenshot[32]);
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      size = { shape: tmp2(renderForScreenshot[32]).CutoutShape.RoundedRect, x: null, y: null, width: 46, height: 34, cornerRadius: null };
      size.x = size.width - tmp14(renderForScreenshot[6]).space.PX_16 - 40 - 3;
      size.y = size.height - 14 - 3;
      size.cornerRadius = tmp14(renderForScreenshot[6]).radii.md + 3;
      items12 = [size, ];
      const size1 = { shape: tmp2(renderForScreenshot[32]).CutoutShape.RoundedRect, x: size.width - tmp14(renderForScreenshot[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(renderForScreenshot[6]).radii.md + 3 };
      items12[1] = size1;
    }
    const obj13 = { cutouts: items12, children: null };
    const obj14 = {
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
    obj14.style = items13;
    const obj15 = { style: null, children: null };
    const items14 = [tmp.emojiTextContainer];
    obj15.style = items14;
    const items15 = [tmp20Result, , ];
    if (tmp31Result3) {
      const obj16 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp31Result3 = closure_8(tmp2(renderForScreenshot[11]).Text, obj16);
    }
    items15[1] = tmp31Result3;
    let tmp31Result4 = !hasStatus;
    if (!hasStatus) {
      const obj17 = { variant: "text-md/normal", children: null };
      const intl3 = tmp2(renderForScreenshot[12]).intl;
      obj17.children = intl3.string(tmp2(renderForScreenshot[12]).t["6ojWO0"]);
      tmp31Result4 = closure_8(tmp2(renderForScreenshot[11]).Text, obj17);
    }
    items15[2] = tmp31Result4;
    obj15.children = items15;
    const items16 = [closure_9(closure_5, obj15), ];
    let tmp31Result5 = !hasStatus;
    if (!hasStatus) {
      tmp31Result5 = closure_8(UploadPlaceholder, {});
    }
    items16[1] = tmp31Result5;
    obj14.children = items16;
    obj13.children = closure_9(tmp2(renderForScreenshot[21]).PressableHighlight, obj14);
    const items17 = [closure_8(tmp14(renderForScreenshot[32]), obj13), tmp25];
    obj12.children = items17;
    items11[1] = closure_9(closure_5, obj12);
    element.children = items11;
    return closure_9(tmp14Result1, element);
  }
  const tmp2Result6 = id(renderForScreenshot[15]);
};