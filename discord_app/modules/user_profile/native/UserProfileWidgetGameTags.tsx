// === Module 12067: UserProfileWidgetGameTags ===

// Module 12067 (UserProfileWidgetGameTags)
import nativeDefault from "native" /* 575 */;
import util from "util" /* 1113 */;
import AccessibilityAnnouncer2 from "AccessibilityAnnouncer" /* 5252 */;
import Text_Text from "Text/Text" /* 5866 */;
import UserProfileAnalyticsUtils from "UserProfileAnalyticsUtils" /* 8480 */;
import WidgetUtils from "WidgetUtils" /* 12023 */;
import openUserProfileAddTagActionSheetDefault from "openUserProfileAddTagActionSheet" /* 12068 */;
import noop from "module_19" /* 19 */;
import AuthenticationStore from "AuthenticationStore" /* 502 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
let closure_7 = fn(8413).TrackUserProfileEditActions;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const hitSlop = { top: 7, bottom: 7 };
let closure_11 = Math.max(14, 0);
const createStyles = fn(5243);
let obj = { tags: { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 }, tag: null, addTag: null };
let obj3 = { flexDirection: "row", flexWrap: "wrap", gap: nativeDefault.space.PX_4 };
obj.tag = { minHeight: 30, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { minHeight: 30, flexDirection: "row", alignItems: "center", gap: nativeDefault.space.PX_4, paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderColor: nativeDefault.colors.BORDER_SUBTLE };
obj.addTag = { minHeight: 30, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE };
let closure_12 = createStyles.createStyles(obj);
let obj5 = { minHeight: 30, justifyContent: "center", paddingHorizontal: nativeDefault.space.PX_8, paddingVertical: nativeDefault.space.PX_4, borderRadius: nativeDefault.radii.sm, borderWidth: 1, borderStyle: "dashed", borderColor: nativeDefault.colors.BORDER_SUBTLE };
const size = fn(2);
let result = size.fileFinishedImporting("modules/user_profile/native/UserProfileWidgetGameTags.tsx");

export default noop.memo(function UserProfileWidgetGameTags(gameName) {
  ({ tags, gameId: require, editableTagsWidgetType } = gameName);
  let ref;
  c5 = undefined;
  const tmp = closure_12();
  dependencyMap = tmp;
  ref = ref.useRef(null);
  closure_4 = ref.useRef(new Map());
  if (tags == null) {
    tags = [];
  }
  const flatMapResult = tags.flatMap((tag) => {
    const widgetGameTagMetadata = gameId(tag[7]).getWidgetGameTagMetadata(tag);
    if (null != widgetGameTagMetadata) {
      const obj2 = { tag, meta: widgetGameTagMetadata };
      items = [obj2];
      let items1 = items;
    } else {
      items1 = [];
    }
    return items1;
  });
  c5 = flatMapResult;
  if (0 !== flatMapResult.length) {
    let obj = { style: tmp.tags, children: null };
    items = [
      flatMapResult.map((tag) => {
          tag = tag.tag;
          const meta = tag.meta;
          let obj = { style: tag.tag, children: null };
          items = [closure_1_8(meta.icon, { size: "xs", color: editableTagsWidgetType(tag[6]).colors.TEXT_MUTED }), , ];
          let obj2 = { size: "xs", color: editableTagsWidgetType(tag[6]).colors.TEXT_MUTED };
          items[1] = closure_1_8(gameId(tag[13]).Text, { variant: "body-sm/normal", color: "text-muted", children: meta.getText() });
          let tmp3Result = null != editableTagsWidgetType;
          if (tmp3Result) {
            const obj4 = {
              ref(arg0) {
                  if (null != arg0) {
                    const current2 = ref.current;
                    const result = current2.set(tag, arg0);
                  } else {
                    const current = ref.current;
                    current.delete(tag);
                  }
                },
              onPress() {
                  closure_0 = tag;
                  const findIndexResult = c5.findIndex((tag) => tag.tag === closure_0);
                  tag = undefined;
                  if (c5[findIndexResult + 1] != null) {
                    tag = tmp5.tag;
                  }
                  items = [tag, ];
                  let tag1;
                  if (c5[findIndexResult - 1] != null) {
                    tag1 = tmp7.tag;
                  }
                  items[1] = tag1;
                  WidgetUtils.removeTagFromGame(editableTagsWidgetType, gameId, tag);
                  const AccessibilityAnnouncer = AccessibilityAnnouncer2.AccessibilityAnnouncer;
                  const intl = util.intl;
                  AccessibilityAnnouncer.announce(intl.string(util.t.SPQyjm));
                  let obj2 = UserProfileAnalyticsUtils;
                  let result = obj2.trackUserProfileEditAction({ userId: AuthenticationStore.getId(), action: constants.TAG_REMOVED, widgetEdited: editableTagsWidgetType, gameId });
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
                      tmp2 = ref;
                    }
                    const result = gameId(closure_2[12]).setAccessibilityFocus({ ref: tmp2 });
                  }, 100);
                  const obj3 = { userId: AuthenticationStore.getId(), action: constants.TAG_REMOVED, widgetEdited: editableTagsWidgetType, gameId };
                },
              accessibilityRole: "button",
              hitSlop,
              accessibilityLabel: null,
              children: null
            };
            let intl = gameId(tmp5[10]).intl;
            const obj5 = { tag: meta.getText() };
            obj4.accessibilityLabel = intl.formatToPlainString(gameId(tmp5[10]).t.GCn1ne, obj5);
            const obj6 = { size: "xs", color: editableTagsWidgetType(tmp5[6]).colors.ICON_MUTED };
            obj4.children = closure_1_8(gameId(tmp5[14]).XSmallIcon, obj6);
            tmp3Result = closure_1_8(ref, obj4);
          }
          items[2] = tmp3Result;
          obj.children = items;
          return closure_1_9(c5, obj, tag);
        }),

    ];
    let tmp7 = null != editableTagsWidgetType;
    if (tmp7) {
      let obj2 = {
        ref,
        style: tmp.addTag,
        onPress() {
              return openUserProfileAddTagActionSheetDefault({ widgetType: editableTagsWidgetType, gameId });
            },
        accessibilityRole: "button",
        hitSlop,
        accessibilityLabel: null,
        children: null
      };
      let intl = util.intl;
      let obj3 = { gameName: gameName.gameName };
      obj2.accessibilityLabel = intl.formatToPlainString(util.t.uLUHj4, obj3);
      let obj4 = { variant: "body-sm/normal", color: "text-muted", children: null };
      const intl2 = util.intl;
      obj4.children = intl2.string(util.t.fZSejy);
      obj2.children = closure_8(Text_Text.Text, obj4);
      tmp7 = closure_8(closure_4, obj2);
    }
    items[1] = tmp7;
    obj.children = items;
    let tmp5Result = closure_9(c5, obj);
  } else {
    tmp5Result = null;
  }
  return tmp5Result;
});