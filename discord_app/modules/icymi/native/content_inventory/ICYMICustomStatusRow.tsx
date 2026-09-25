// === Module 16126: ICYMICustomStatusRow ===

// Module 16126 (ICYMICustomStatusRow)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1115 */;
import native from "native" /* 1177 */;
import TrashIcon from "TrashIcon" /* 4786 */;
import Text_Text from "Text/Text" /* 4825 */;
import Pressables from "Pressables" /* 5428 */;
import ReactionIcon from "ReactionIcon" /* 8211 */;
import PencilIcon from "PencilIcon" /* 9702 */;
import _modDef10802 from "module_10802" /* 10802 */;
import ArrowAngleLeftUpIcon from "ArrowAngleLeftUpIcon" /* 11220 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import UserStore from "UserStore" /* 1372 */;
import ICYMIStore from "ICYMIStore" /* 7775 */;

require = fn;
function UploadPlaceholder() {
  const obj = { style: closure_13(false).uploadContainer, children: null };
  const items = [React6(native.Icon, { source: _modDef10802, size: native.IconSizes.SMALL }), ];
  const obj3 = { variant: "text-md/normal", color: "text-strong", children: null };
  const intl = util.intl;
  obj3.children = intl.string(util.t["3UB9ad"]);
  items[1] = React6(Text_Text.Text, obj3);
  obj.children = items;
  return React7(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9, Fragment: c10 } = jsxProd);
const PX_8 = nativeDefault.space.PX_8;
const createStyles = fn(4829);
let closure_12 = createStyles.createStyles((backgroundColor) => {
  const obj = { background: { backgroundColor, overflow: "hidden" } };
  return obj;
});
const createICYMIStyles = fn(16067);
let closure_13 = createICYMIStyles.createICYMIStyles((gap, arg1) => {
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
  const gradientBottom = id(renderForScreenshot[13]).useGradientBottom();
  let backgroundColor;
  if (gradientBottom != null) {
    backgroundColor = gradientBottom.backgroundColor;
  }
  if (backgroundColor == null) {
    backgroundColor = userId(renderForScreenshot[6]).colors.CARD_BACKGROUND_DEFAULT;
  }
  const tmp5Result = closure_12(backgroundColor);
  closure_5 = tmp5Result;
  let obj = id(renderForScreenshot[13]);
  const hexWithOpacityResult = id(renderForScreenshot[14]).hexWithOpacity(tmp5Result.background.backgroundColor, 0.6);
  c6 = hexWithOpacityResult;
  const tmp2Result = id(renderForScreenshot[14]);
  let items = [c6];
  let str1;
  const stateFromStores = id(renderForScreenshot[15]).useStateFromStores(items, () => UserStore.getUser(userId));
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
  const tmp2Result9 = id(renderForScreenshot[15]);
  const tmp15 = userId(renderForScreenshot[16])({ userId });
  const displayNameStylesFont = id(renderForScreenshot[17]).useDisplayNameStylesFont({ displayNameStyles: tmp15 });
  let tmp31Result10 = null != customStatusExtra.status;
  if (tmp31Result10) {
    tmp31Result10 = customStatusExtra.status.length > 0;
  }
  const tmp2Result10 = id(renderForScreenshot[17]);
  const gameMentionsAsPlainText = id(renderForScreenshot[18]).useGameMentionsAsPlainText(customStatusExtra.status);
  if (null != obj2.id) {
    const tmp14Result = tmp14(renderForScreenshot[19]);
    let num3 = 40;
    if (tmp2Result12.isAndroid()) {
      num3 = 36;
    }
    let obj3 = { lineHeight: num3, fontSize: 36, marginTop: null };
    tmp2Result12 = tmp2(renderForScreenshot[20]);
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
    tmp2Result13 = tmp2(renderForScreenshot[20]);
  } else {
    tmp20Result = null;
  }
  const tmp2Result11 = id(renderForScreenshot[18]);
  let items1 = [tmp10];
  const stateFromStores1 = id(renderForScreenshot[15]).useStateFromStores(items1, () => UserStore.getUser(userId));
  const tmp2Result14 = id(renderForScreenshot[15]);
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
      const tmp14Result7 = tmp14(renderForScreenshot[26]);
      tmp27 = tmp14(renderForScreenshot[26]).age(id) < 30 * tmp14(renderForScreenshot[27]).Millis.MINUTE;
      const ageResult = tmp14(renderForScreenshot[26]).age(id);
    }
    const element = { contentId: id, userId, type: "hotwheels_custom_status", renderForScreenshot, title: null, subtitle: null, highlight: null, children: null };
    let obj5 = { style: tmp.title, children: null };
    let tmp32;
    if (null != displayNameStylesFont) {
      let obj6 = { fontFamily: displayNameStylesFont };
      tmp32 = obj6;
    }
    const obj7 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", style: tmp32, children: null };
    const tmp14Result8 = tmp14(renderForScreenshot[28]);
    obj7.children = tmp14(renderForScreenshot[29]).getName(stateFromStores1);
    const items6 = [closure_8(tmp2(renderForScreenshot[11]).Text, obj7), ];
    const obj8 = { style: tmp.timestamp, children: null };
    let tmp31Result = hasStatus;
    if (hasStatus) {
      const obj9 = { lineClamp: 1, variant: "text-sm/normal", color: "text-muted", children: null };
      const tmp2Result16 = tmp2(renderForScreenshot[30]);
      obj9.children = tmp2Result16.getRelativeTimestamp(tmp14(renderForScreenshot[26]).extractTimestamp(id));
      tmp31Result = closure_8(tmp2(renderForScreenshot[11]).Text, obj9);
      const tmp14Result10 = tmp14(renderForScreenshot[26]);
    }
    const items7 = [tmp31Result, , ];
    let tmp31Result7 = null;
    if (tmp27) {
      tmp31Result7 = closure_8(tmp14(renderForScreenshot[31]), {});
    }
    items7[1] = tmp31Result7;
    let tmp31Result8 = null;
    if (tmp27) {
      const obj10 = { lineClamp: 1, variant: "text-sm/medium", color: "text-brand", children: null };
      const intl = tmp2(renderForScreenshot[12]).intl;
      obj10.children = intl.string(tmp2(renderForScreenshot[12]).t.tWnHcL);
      tmp31Result8 = closure_8(tmp2(renderForScreenshot[11]).Text, obj10);
    }
    items7[2] = tmp31Result8;
    obj8.children = items7;
    items6[1] = closure_9(closure_5, obj8);
    obj5.children = items6;
    element.title = closure_9(closure_5, obj5);
    let tmp31Result9 = null;
    if ("otherUserStatus" === variant.kind) {
      const obj11 = { variant: "text-sm/normal", lineClamp: 1, color: "text-default", children: null };
      const intl2 = tmp2(renderForScreenshot[12]).intl;
      obj11.children = intl2.string(tmp2(renderForScreenshot[12]).t.fxOLPR);
      tmp31Result9 = closure_8(tmp2(renderForScreenshot[11]).Text, obj11);
    }
    element.subtitle = tmp31Result9;
    element.highlight = stateFromStores2;
    const obj12 = { cutouts: [], style: tmp.bubbles, children: null };
    const obj13 = { style: null };
    const items8 = [tmp.middleBubble, tmp5Result.background];
    obj13.style = items8;
    const tmp14Result9 = tmp14(renderForScreenshot[29]);
    const items9 = [closure_8(closure_5, obj13), ];
    const obj14 = { style: null };
    const items10 = [tmp.bottomBubble, tmp5Result.background];
    obj14.style = items10;
    items9[1] = closure_8(closure_5, obj14);
    obj12.children = items9;
    const items11 = [closure_9(tmp14(renderForScreenshot[32]), obj12), ];
    const obj15 = { style: tmp.cardContainer, children: null };
    const tmp14Result11 = tmp14(renderForScreenshot[32]);
    if (renderForScreenshot) {
      let items12 = [];
    } else {
      const size1 = { shape: tmp2(renderForScreenshot[32]).CutoutShape.RoundedRect, x: size.width - tmp14(renderForScreenshot[6]).space.PX_16 - 40 - 3, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(renderForScreenshot[6]).radii.md + 3 };
      items12 = [size1, ];
      const size2 = { shape: tmp2(renderForScreenshot[32]).CutoutShape.RoundedRect, x: size.width - tmp14(renderForScreenshot[6]).space.PX_16 - 86 - PX_8, y: size.height - 14 - 3, width: 46, height: 34, cornerRadius: tmp14(renderForScreenshot[6]).radii.md + 3 };
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
    const obj18 = { style: null, children: null };
    const items14 = [tmp.emojiTextContainer];
    obj18.style = items14;
    const items15 = [tmp20Result, , ];
    if (tmp31Result10) {
      const obj19 = { style: tmp.emojiText, variant: "text-md/normal", children: gameMentionsAsPlainText };
      tmp31Result10 = closure_8(tmp2(renderForScreenshot[11]).Text, obj19);
    }
    items15[1] = tmp31Result10;
    let tmp31Result11 = !hasStatus;
    if (!hasStatus) {
      const obj20 = { variant: "text-md/normal", children: null };
      const intl3 = tmp2(renderForScreenshot[12]).intl;
      obj20.children = intl3.string(tmp2(renderForScreenshot[12]).t["6ojWO0"]);
      tmp31Result11 = closure_8(tmp2(renderForScreenshot[11]).Text, obj20);
    }
    items15[2] = tmp31Result11;
    obj18.children = items15;
    const items16 = [closure_9(closure_5, obj18), ];
    let tmp31Result12 = !hasStatus;
    if (!hasStatus) {
      tmp31Result12 = closure_8(UploadPlaceholder, {});
    }
    items16[1] = tmp31Result12;
    obj17.children = items16;
    obj16.children = closure_9(tmp2(renderForScreenshot[21]).PressableHighlight, obj17);
    const items17 = [closure_8(tmp14(renderForScreenshot[32]), obj16), tmp25];
    obj15.children = items17;
    items11[1] = closure_9(closure_5, obj15);
    element.children = items11;
    return closure_9(tmp14Result8, element);
  }
  const tmp2Result15 = id(renderForScreenshot[15]);
};