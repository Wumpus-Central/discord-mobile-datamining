// === Module 11248: ForumPostTagsActionSheet ===

// Module 11248 (ForumPostTagsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7898 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 11249 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const MAX_FORUM_POST_TAGS = fn(7273).MAX_FORUM_POST_TAGS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
let closure_9 = createStyles.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default function ForumPostTagsActionSheet(thread) {
  thread = thread.thread;
  let flag = thread.canManageThread;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    const intl = thread(1114).intl;
    title = intl.string(thread(1114).t["436ZFw"]);
  }
  ({ tags, onClose: _slicedToArray } = thread);
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  function toggleTag(BottomSheetTitleHeader) {
    if (null != BottomSheetTitleHeader) {
      const _Set = Set;
      const set = new Set(first);
      if (set.has(BottomSheetTitleHeader)) {
        set.delete(BottomSheetTitleHeader);
        closure_5(set);
      } else if (!closure_6) {
        set.add(BottomSheetTitleHeader);
      }
    }
  }
  const tmp3 = closure_9();
  let obj = thread(7275);
  let appliedTags = obj.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  const tmp9 = _slicedToArray(first.useState(new Set(appliedTags)), 2);
  first = tmp9[0];
  closure_5 = tmp9[1];
  closure_6 = first.size >= closure_6;
  let set = new Set(appliedTags);
  const visibleForumTags = thread(7275).useVisibleForumTags(thread.parentChannel);
  obj = {
    onDismiss() {
      let tmp;
      if (_slicedToArray != null) {
        tmp = _slicedToArray();
      }
      return tmp;
    },
    header: null,
    children: null
  };
  obj = { title, subtitle: null, subtitleStyle: null };
  const intl2 = tmp4(1114).intl;
  obj.subtitle = intl2.string(thread(1114).t["+HS9+m"]);
  obj.subtitleStyle = tmp3.subtitle;
  obj.header = toggleTag(thread(7149).BottomSheetTitleHeader, obj);
  const tmp4Result = thread(7275);
  let items = [
    toggleTag(closure_5, {
      style: tmp3.tagsContainer,
      children: visibleForumTags.map((tag) => {
        const hasItem = first.has(tag);
        const obj = { tag, disabled: null, onPress: null, selected: null };
        let tmp4 = !flag;
        if (flag) {
          let tmp5 = closure_6;
          if (closure_6) {
            tmp5 = !hasItem;
          }
          tmp4 = tmp5;
        }
        obj.disabled = tmp4;
        obj.onPress = toggleTag;
        obj.selected = hasItem;
        return React5(AvailableForumTagDefault, obj, tag.id);
      })
    }),

  ];
  let obj2 = { style: tmp3.saveButton, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = tmp4(1114).intl;
  obj3.text = intl3.string(thread(1114).t["R3BPH+"]);
  obj3.onPress = function onPress() {
    Array.from(first);
    if (null != dependencyMap) {
      const items = [];
      HermesBuiltin.arraySpread(first, 0);
      tmp4(items);
    } else if (null != thread) {
      ForumActionCreatorsDefault.updateForumPostTags(tmp5.id, tmp3);
    }
    ActionSheetActionCreatorsDefault.hideActionSheet();
  };
  obj2.children = toggleTag(thread(4975).Button, obj3);
  items[1] = toggleTag(closure_5, obj2);
  obj.children = items;
  return closure_8(thread(7198).ActionSheet, obj);
};