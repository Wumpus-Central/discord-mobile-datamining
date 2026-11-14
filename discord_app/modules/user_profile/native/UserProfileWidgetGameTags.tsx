// discord_app/modules/user_profile/native/UserProfileWidgetGameTags.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import AccessibilityAnnouncer2 from "../../../../discord_common/js/packages/design/components/AccessibilityAnnouncer/AccessibilityAnnouncer.android.tsx";
import Text_Text from "../../../design/components/Text/native/Text.tsx";
import XSmallIcon from "../../../design/components/Icon/native/redesign/generated/XSmallIcon.tsx";
import UserProfileAnalyticsUtils from "../UserProfileAnalyticsUtils.tsx";
import WidgetUtils from "../WidgetUtils.tsx";
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet.tsx";
import noop from "../../../../_runtime/metro/00019__.js";
import AuthenticationStore from "../../../stores/AuthenticationStore.tsx";

const require = globalThis.__r;

require = fn;
function GameTag(removeButtonRef) {
  ({ metadata, onRemove } = removeButtonRef);
  const tmp = closure_15();
  const obj = { style: tmp.tag, children: null };
  items = [React5(metadata.icon, { size: xs, color: nativeDefault.colors.TEXT_MUTED }), ,];
  const obj2 = { size: xs, color: nativeDefault.colors.TEXT_MUTED };
  items[1] = React5(Text_Text.Text, {
    variant,
    color: "text-muted",
    lineClamp: 1,
    style: tmp.tagText,
    children: metadata.getText(),
  });
  let tmp4Result = null != onRemove;
  if (tmp4Result) {
    const obj4 = {
      ref: removeButtonRef.removeButtonRef,
      onPress: onRemove,
      accessibilityRole: "button",
      accessibilityLabel: null,
      hitSlop: null,
      children: null,
    };
    const intl = util.intl;
    const obj5 = { tag: metadata.getText() };
    obj4.accessibilityLabel = intl.formatToPlainString(util.t.GCn1ne, obj5);
    obj4.hitSlop = hitSlop;
    const obj6 = { size: xs, color: nativeDefault.colors.ICON_MUTED };
    obj4.children = React5(XSmallIcon.XSmallIcon, obj6);
    tmp4Result = React5(React4, obj4);
  }
  items[2] = tmp4Result;
  obj.children = items;
  return React6(hasOwnProperty, obj);
}
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(8479).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
let xs = "xs";
xs = fn(7638).ICON_SIZE.xs;
const PX_4 = nativeDefault.space.PX_4;
let c13 = "body-sm/normal";
const hitSlop = Math.max((44 - xs) / 2, 0);
const createStyles = fn(5306);
let obj = {
  tags: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 },
  tag: null,
  tagText: null,
  singleLine: null,
  addTag: null,
};
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = {
  minHeight: 30,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 1,
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.tagText = { flexShrink: 1 };
obj.singleLine = { overflow: "hidden" };
let obj4 = {
  minHeight: 30,
  flexDirection: "row",
  alignItems: "center",
  flexShrink: 1,
  gap: nativeDefault.space.PX_4,
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj.addTag = {
  minHeight: 30,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderStyle: "dashed",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
let closure_15 = createStyles.createStyles(obj);
let obj5 = {
  minHeight: 30,
  justifyContent: "center",
  paddingHorizontal: nativeDefault.space.PX_8,
  paddingVertical: PX_4,
  borderRadius: nativeDefault.radii.sm,
  borderWidth: 1,
  borderStyle: "dashed",
  borderColor: nativeDefault.colors.BORDER_SUBTLE,
};
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameTags.tsx");

export default noop.memo(function UserProfileWidgetGameTags(singleLineClamp) {
  ({ tags, gameId: require, editableTagsWidgetType } = singleLineClamp);
  let flag = singleLineClamp.singleLineClamp;
  if (flag === undefined) {
    flag = false;
  }
  let ref;
  noop = undefined;
  c4 = undefined;
  const tmp = closure_15();
  const bound = Math.max(
    Math.max(require("useScaledTextLineHeight").useScaledTextLineHeight(variant), xs) + 2 * (PX_4 + 1),
    30,
  );
  const bound1 = Math.max((44 - bound) / 2, 0);
  ref = noop.useRef(null);
  let obj = require("useScaledTextLineHeight");
  noop = noop.useRef(new Map());
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = gameId(ref[12]).getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const obj2 = { tag, meta: widgetGameTagMetadata };
      items = [obj2];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  c4 = flatMapResult;
  if (0 !== flatMapResult.length) {
    items = [tmp.tags];
    let tmp12;
    if (flag) {
      let items1 = [tmp.singleLine];
      let obj2 = { maxHeight: bound };
      items1[1] = obj2;
      tmp12 = items1;
    }
    let obj3 = { style: null, children: null };
    items[1] = tmp12;
    obj3.style = items;
    const items2 = [
      flatMapResult.map((metadata) => {
        let tag = metadata.tag;
        let obj = { metadata: metadata.meta, onRemove: null, removeButtonRef: null };
        let fn;
        if (null != editableTagsWidgetType) {
          fn = () => {
            closure_0 = tag;
            const findIndexResult = c4.findIndex((tag) => tag.tag === closure_0);
            tag = undefined;
            if (c4[findIndexResult + 1] != null) {
              tag = tmp5.tag;
            }
            items = [tag];
            let tag1;
            if (c4[findIndexResult - 1] != null) {
              tag1 = tmp7.tag;
            }
            items[1] = tag1;
            WidgetUtils.removeTagFromGame(editableTagsWidgetType, gameId, tag);
            const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
            const intl = util.intl;
            AccessibilityAnnouncer.announce(intl.string(util.t.SPQyjm));
            let obj2 = UserProfileAnalyticsUtils;
            let result = obj2.trackUserProfileEditAction({
              userId: AuthenticationStore.getId(),
              action: constants.TAG_REMOVED,
              widgetEdited: editableTagsWidgetType,
              gameId,
            });
            const timerId = setTimeout(() => {
              const mapped = items.map((item) => {
                value = undefined;
                if (null != item) {
                  const current = ref.current;
                  value = current.get(item);
                }
                return value;
              });
              const found = mapped.find((item) => null != item);
              if (null != found) {
                const obj2 = { current: found };
                let tmp2 = obj2;
              } else {
                tmp2 = closure_2_2;
              }
              const result = gameId(ref[16]).setAccessibilityFocus({ ref: tmp2 });
            }, 100);
            const obj3 = {
              userId: AuthenticationStore.getId(),
              action: constants.TAG_REMOVED,
              widgetEdited: editableTagsWidgetType,
              gameId,
            };
          };
        }
        obj.onRemove = fn;
        obj.removeButtonRef = function removeButtonRef(arg0) {
          if (null != arg0) {
            const current2 = ref.current;
            const result = current2.set(tag, arg0);
          } else {
            const current = ref.current;
            current.delete(tag);
          }
        };
        return closure_1_8(GameTag, obj, tag);
      }),
    ];
    let tmp13 = null != editableTagsWidgetType;
    if (tmp13) {
      const obj4 = {
        ref,
        style: tmp.addTag,
        onPress() {
          return openUserProfileAddTagActionSheetDefault({ widgetType: editableTagsWidgetType, gameId });
        },
        accessibilityRole: "button",
        hitSlop: null,
        accessibilityLabel: null,
        children: null,
      };
      const rect = { top: bound1, bottom: bound1 };
      obj4.hitSlop = rect;
      let intl = require("util").intl;
      const obj5 = { gameName: singleLineClamp.gameName };
      obj4.accessibilityLabel = intl.formatToPlainString(require("util").t.uLUHj4, obj5);
      const obj6 = { variant, color: "text-muted", children: null };
      const intl2 = require("util").intl;
      obj6.children = intl2.string(require("util").t.fZSejy);
      obj4.children = closure_8(require("Text/Text").Text, obj6);
      tmp13 = closure_8(c4, obj4);
    }
    items2[1] = tmp13;
    obj3.children = items2;
    let tmp10Result = closure_9(closure_5, obj3);
  } else {
    tmp10Result = null;
  }
  return tmp10Result;
});
