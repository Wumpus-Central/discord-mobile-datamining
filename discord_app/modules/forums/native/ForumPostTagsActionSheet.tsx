// discord_app/modules/forums/native/ForumPostTagsActionSheet.tsx
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import noop from "../../../../_runtime/00019_noop.js";
import { View } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { MAX_FORUM_POST_TAGS } from "../ForumConstants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = fn;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
const result = require("obj132").fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default function ForumPostTagsActionSheet(thread) {
  thread = thread.thread;
  let flag = thread.canManageThread;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    const intl = thread(1236).intl;
    title = intl.string(thread(1236).t["436ZFw"]);
  }
  ({ tags, onClose: closure_3 } = thread);
  let first;
  closure_5 = undefined;
  closure_6 = undefined;
  function toggleTag(closure_5, arg1, id) {
    if (null != closure_5) {
      const _Set = Set;
      const set = new Set(first);
      if (set.has(closure_5)) {
        set.delete(closure_5);
        callback2(set);
      } else if (!closure_6) {
        set.add(closure_5);
      }
    }
  }
  const tmp3 = callback3();
  let obj = thread(7237);
  let appliedTags = obj.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  const tmp9 = callback(first.useState(new Set(appliedTags)), 2);
  first = tmp9[0];
  closure_5 = tmp9[1];
  closure_6 = first.size >= closure_6;
  let set = new Set(appliedTags);
  const visibleForumTags = thread(7237).useVisibleForumTags(thread.parentChannel);
  obj = { title, subtitle: null, subtitleStyle: null };
  const intl2 = tmp4(1236).intl;
  obj[1] = intl2.string(thread(1236).t["+HS9+m"]);
  obj[2] = tmp3.subtitle;
  obj[1] = toggleTag(thread(6949).BottomSheetTitleHeader, obj);
  const tmp4Result = thread(7237);
  let items = [
    toggleTag(closure_5, {
      style: tmp3.tagsContainer,
      children: visibleForumTags.map((item, index) => {
        const hasItem = first.has(item);
        const obj = { tag: item, disabled: null, onPress: null, selected: null };
        let tmp4 = !flag;
        if (flag) {
          let tmp5 = closure_6;
          if (closure_6) {
            tmp5 = !hasItem;
          }
          tmp4 = tmp5;
        }
        obj[1] = tmp4;
        obj[2] = toggleTag;
        obj[3] = hasItem;
        return toggleTag(flag(dependencyMap[10]), obj, item.id);
      })
    }),

  ];
  let obj2 = { style: tmp3.saveButton, children: null };
  const obj3 = { text: null, onPress: null };
  const intl3 = tmp4(1236).intl;
  obj3[0] = intl3.string(thread(1236).t["R3BPH+"]);
  obj3[1] = function onPress() {
    Array.from(first);
    if (null != closure_2) {
      const items = [];
      HermesBuiltin.arraySpread(first, 0);
      tmp4(items);
    } else if (null != thread) {
      flag(dependencyMap[12]).updateForumPostTags(tmp5.id, tmp3);
      const obj = flag(dependencyMap[12]);
    }
    flag(dependencyMap[13]).hideActionSheet();
    const obj2 = flag(dependencyMap[13]);
  };
  obj2[1] = toggleTag(thread(4745).Button, obj3);
  items[1] = toggleTag(closure_5, obj2);
  obj[2] = items;
  return callback2(thread(7175).ActionSheet, obj);
};