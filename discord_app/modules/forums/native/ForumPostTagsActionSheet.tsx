// === Module 10460: ForumPostTagsActionSheet ===

// Module 10460 (ForumPostTagsActionSheet)
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5056 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 9328 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 10461 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

const require = fn;
const View = fn(17).View;
const MAX_FORUM_POST_TAGS = fn(6974).MAX_FORUM_POST_TAGS;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5092);
let closure_9 = createStyles.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
const ReactCompilerGating = fn(558);
const size = fn(2);
const result = size.fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function ForumPostTagsActionSheet(thread) {
  const cResult = thread(onClose[7]).c(42);
  thread = thread.thread;
  ({ canManageThread, onSave } = thread);
  ({ title, tags, onClose } = thread);
  let tmp4 = undefined === canManageThread;
  if (!tmp4) {
    tmp4 = canManageThread;
  }
  canManageThread = tmp4;
  if (cResult[0] !== title) {
    let stringResult = title;
    if (undefined === title) {
      const intl = tmp(onClose[8]).intl;
      stringResult = intl.string(tmp(onClose[8]).t["436ZFw"]);
    }
    cResult[0] = title;
    cResult[1] = stringResult;
    let tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_9();
  let obj = thread(onClose[7]);
  let appliedTags = thread(onClose[9]).useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  if (cResult[2] !== appliedTags) {
    let _Set = Set;
    let set = new Set(appliedTags);
    cResult[2] = appliedTags;
    cResult[3] = set;
    let tmp9 = set;
  } else {
    tmp9 = cResult[3];
  }
  const tmp16 = canManageThread(first.useState(tmp9), 2);
  first = tmp16[0];
  closure_5 = tmp16[1];
  closure_6 = tmp18;
  const tmpResult = thread(onClose[9]);
  const visibleForumTags = thread(onClose[9]).useVisibleForumTags(thread.parentChannel);
  if (cResult[4] === first.size >= closure_6) {
    if (cResult[5] === first) {
      let tmp20 = cResult[6];
    }
    onPress = tmp20;
    if (cResult[7] === onSave) {
      if (cResult[8] === first) {
        if (cResult[11] !== onClose) {
          class E {
            constructor() {
              tmp = undefined;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          cResult[11] = onClose;
          cResult[12] = E;
        } else {
          class E {
            constructor() {
              tmp = undefined;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
        }
        const _Symbol = Symbol;
        if (cResult[13] === Symbol.for("react.memo_cache_sentinel")) {
          class E {
            constructor() {
              tmp = undefined;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          const stringResult1 = obj4.string(tmp(onClose[8]).t["+HS9+m"]);
          cResult[13] = stringResult1;
          const tmp25 = stringResult1;
        } else {
          class E {
            constructor() {
              tmp = undefined;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
        }
        if (cResult[14] === tmp7.subtitle) {
          class E {
            constructor() {
              tmp = undefined;
              if (onClose != null) {
                tmp = onClose();
              }
              return tmp;
            }
          }
          if (cResult[17] === tmp18) {
            class E {
              constructor() {
                tmp = undefined;
                if (onClose != null) {
                  tmp = onClose();
                }
                return tmp;
              }
            }
          }
          if (cResult[23] === tmp18) {
            class E {
              constructor() {
                tmp = undefined;
                if (onClose != null) {
                  tmp = onClose();
                }
                return tmp;
              }
            }
          }
          class X {
            constructor(arg0) {
              hasItem = closure_4.has(thread);
              tmp2 = jsx;
              obj = { tag: thread, disabled: null, onPress: null, selected: null };
              tmp4 = !canManageThread;
              tmp3 = closure_1(closure_2[13]);
              if (canManageThread) {
                tmp5 = closure_6;
                if (closure_6) {
                  tmp5 = !hasItem;
                }
                tmp4 = tmp5;
              }
              obj.disabled = tmp4;
              obj.onPress = closure_7;
              obj.selected = hasItem;
              return tmp2(tmp3, obj, thread.id);
            }
          }
          cResult[23] = tmp18;
          cResult[24] = tmp4;
          cResult[25] = first;
          cResult[26] = tmp20;
          cResult[27] = X;
        }
        let obj2 = { title: tmp5, subtitle: tmp25, subtitleStyle: tmp7.subtitle };
        const tmp29 = onPress(tmp(onClose[12]).BottomSheetTitleHeader, obj2);
        cResult[14] = tmp7.subtitle;
        cResult[15] = tmp5;
        cResult[16] = tmp29;
      }
    }
    cResult[7] = onSave;
    cResult[8] = first;
    cResult[9] = thread;
    cResult[10] = tmp22;
  }
  function toggleTag(arg0) {
    if (null != arg0) {
      const _Set = Set;
      const set = new Set(first);
      if (set.has(arg0)) {
        set.delete(arg0);
        closure_5(set);
      } else if (!closure_6) {
        set.add(arg0);
      }
    }
  }
  cResult[4] = first.size >= closure_6;
  cResult[5] = first;
  cResult[6] = toggleTag;
  tmp20 = toggleTag;
  const tmpResult2 = thread(onClose[9]);
}) : (function ForumPostTagsActionSheet(thread) {
  thread = thread.thread;
  let flag = thread.canManageThread;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    const intl = thread(1126).intl;
    title = intl.string(thread(1126).t["436ZFw"]);
  }
  ({ tags, onClose: _slicedToArray } = thread);
  first = undefined;
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
  let appliedTags = thread(6976).useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  let obj = thread(6976);
  [first, closure_5] = first.useState(new Set(appliedTags));
  closure_6 = first.size >= closure_6;
  let set = new Set(appliedTags);
  const visibleForumTags = thread(6976).useVisibleForumTags(thread.parentChannel);
  let obj2 = {
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
  const obj3 = { title, subtitle: null, subtitleStyle: null };
  const intl2 = tmp4(1126).intl;
  obj3.subtitle = intl2.string(thread(1126).t["+HS9+m"]);
  obj3.subtitleStyle = tmp3.subtitle;
  obj2.header = toggleTag(thread(6838).BottomSheetTitleHeader, obj3);
  const tmp4Result = thread(6976);
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
        return onPress(AvailableForumTagDefault, obj, tag.id);
      })
    }),

  ];
  const obj5 = { style: tmp3.saveButton, children: null };
  const obj6 = { text: null, onPress: null };
  const intl3 = tmp4(1126).intl;
  obj6.text = intl3.string(thread(1126).t["R3BPH+"]);
  obj6.onPress = function handleSave() {
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
  obj5.children = toggleTag(thread(5379).Button, obj6);
  items[1] = toggleTag(closure_5, obj5);
  obj2.children = items;
  return closure_8(thread(6898).ActionSheet, obj2);
});