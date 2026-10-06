// === Module 11073: ForumPostTagsActionSheet ===

// Module 11073 (ForumPostTagsActionSheet)
import react_native from "react-native" /* 17 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4860 */;
import ForumConstants from "ForumConstants" /* 6786 */;
import ForumActionCreatorsDefault from "ForumActionCreators" /* 7552 */;
import AvailableForumTagDefault from "AvailableForumTag" /* 11074 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import react from "react" /* 19 */;
import Fragment from "Fragment" /* 21 */;
import createStyles from "createStyles" /* 4896 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let addResult, arr1, arraySpreadResult, deleteResult, hideActionSheetResult, num, onPress, set, tmp10, tmp11, tmp2, tmp5Result, tmp8, updateForumPostTagsResult;

let metroImportAll;
let metroImportDefault;
let View = react_native.View;
const MAX_FORUM_POST_TAGS = ForumConstants.MAX_FORUM_POST_TAGS;
({ jsx: metroImportDefault, jsxs: metroImportAll } = Fragment);
let closure_9 = createStyles.createStyles({ tagsContainer: { display: "flex", flexDirection: "row", flexWrap: "wrap" }, saveButton: { marginTop: 8, marginHorizontal: 16, marginBottom: 16 }, subtitle: { marginTop: 4 } });
let tmp3 = ReactCompilerGating.isReactCompilerEnabled() ? (function(thread) {
  let canManageThread;
  let closure_5;
  let first;
  let onClose;
  let onSave;
  let tags;
  let title;
  let tmp5;
  let tmp9;
  let tmp = thread;
  let obj = thread(onClose[7]);
  const cResult = obj.c(42);
  thread = thread.thread;
  ({ canManageThread, onSave } = thread);
  ({ title, tags, onClose } = thread);
  let tmp4 = undefined === canManageThread;
  const parentChannel = thread.parentChannel;
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
    tmp5 = stringResult;
  } else {
    tmp5 = cResult[1];
  }
  const tmp7 = closure_9();
  const tmpResult = tmp(onClose[9]);
  let appliedTags = tmpResult.useAppliedTags(thread);
  if (null != tags) {
    appliedTags = tags;
  }
  if (cResult[2] !== appliedTags) {
    let _Set = Set;
    let self = this;
    let self2 = this;
    set = new Set(appliedTags);
    cResult[2] = appliedTags;
    cResult[3] = set;
    tmp9 = set;
  } else {
    tmp9 = cResult[3];
  }
  const tmp14 = canManageThread(first.useState(tmp9), 2);
  first = tmp14[0];
  View = tmp14[1];
  let closure_6 = tmp16;
  const tmpResult2 = tmp(onClose[9]);
  const visibleForumTags = tmpResult2.useVisibleForumTags(parentChannel);
  if (cResult[4] === first.size >= closure_6) {
    let tmp18;
    if (cResult[5] === first) {
      tmp18 = cResult[6];
    }
    onPress = tmp18;
    if (cResult[7] === onSave) {
      if (cResult[8] === first) {
        let tmp22;
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
          class V {
            constructor() {
              tmp2 = closure_4;
              arr1 = Array.from(closure_4);
              if (null != onSave) {
                items = [];
                num = 0;
                tmp10 = items;
                tmp11 = tmp2;
                arraySpreadResult = HermesBuiltin.arraySpread(items, tmp2, 0);
                tmp5Result = tmp5(items);
              } else if (null != thread) {
                tmp7 = closure_1;
                tmp8 = closure_2;
                obj = closure_1(closure_2[10]);
                updateForumPostTagsResult = obj.updateForumPostTags(tmp6.id, tmp4);
              }
              obj2 = closure_1(closure_2[11]);
              hideActionSheetResult = obj2.hideActionSheet();
              return;
            }
          }
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
        class V {
          constructor() {
            tmp2 = closure_4;
            arr1 = Array.from(closure_4);
            if (null != onSave) {
              items = [];
              num = 0;
              tmp10 = items;
              tmp11 = tmp2;
              arraySpreadResult = HermesBuiltin.arraySpread(items, tmp2, 0);
              tmp5Result = tmp5(items);
            } else if (null != thread) {
              tmp7 = closure_1;
              tmp8 = closure_2;
              obj = closure_1(closure_2[10]);
              updateForumPostTagsResult = obj.updateForumPostTags(tmp6.id, tmp4);
            }
            obj2 = closure_1(closure_2[11]);
            hideActionSheetResult = obj2.hideActionSheet();
            return;
          }
        }
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
          class V {
            constructor() {
              tmp2 = closure_4;
              arr1 = Array.from(closure_4);
              if (null != onSave) {
                items = [];
                num = 0;
                tmp10 = items;
                tmp11 = tmp2;
                arraySpreadResult = HermesBuiltin.arraySpread(items, tmp2, 0);
                tmp5Result = tmp5(items);
              } else if (null != thread) {
                tmp7 = closure_1;
                tmp8 = closure_2;
                obj = closure_1(closure_2[10]);
                updateForumPostTagsResult = obj.updateForumPostTags(tmp6.id, tmp4);
              }
              obj2 = closure_1(closure_2[11]);
              hideActionSheetResult = obj2.hideActionSheet();
              return;
            }
          }
          cResult[13] = stringResult1;
          tmp22 = stringResult1;
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
          if (cResult[17] === first.size >= closure_6) {
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
          if (cResult[23] === first.size >= closure_6) {
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
                tmp5 = closure_6 && !hasItem;
                tmp4 = tmp5;
              }
              obj.disabled = tmp4;
              obj.onPress = closure_7;
              obj.selected = hasItem;
              return tmp2(tmp3, obj, thread.id);
            }
          }
          cResult[23] = first.size >= closure_6;
          cResult[24] = tmp4;
          cResult[25] = first;
          cResult[26] = tmp18;
          cResult[27] = X;
        }
        let obj2 = { title: tmp5, subtitle: tmp22, subtitleStyle: tmp7.subtitle };
        cResult[14] = tmp7.subtitle;
        cResult[15] = tmp5;
        cResult[16] = onPress(tmp(onClose[12]).BottomSheetTitleHeader, obj2);
        const tmp26 = onPress(tmp(onClose[12]).BottomSheetTitleHeader, obj2);
      }
    }
    class V {
      constructor() {
        tmp2 = closure_4;
        arr1 = Array.from(closure_4);
        if (null != onSave) {
          items = [];
          num = 0;
          tmp10 = items;
          tmp11 = tmp2;
          arraySpreadResult = HermesBuiltin.arraySpread(items, tmp2, 0);
          tmp5Result = tmp5(items);
        } else if (null != thread) {
          tmp7 = closure_1;
          tmp8 = closure_2;
          obj = closure_1(closure_2[10]);
          updateForumPostTagsResult = obj.updateForumPostTags(tmp6.id, tmp4);
        }
        obj2 = closure_1(closure_2[11]);
        hideActionSheetResult = obj2.hideActionSheet();
        return;
      }
    }
    cResult[7] = onSave;
    cResult[8] = first;
    cResult[9] = thread;
    cResult[10] = V;
  }
  class H {
    constructor(arg0) {
      if (null != thread) {
        tmp = globalThis;
        _Set = Set;
        tmp2 = closure_4;
        self = this;
        self2 = this;
        set = new Set(closure_4);
        tmp3 = set;
        if (set.has(thread)) {
          deleteResult = set.delete(thread);
        } else {
          tmp4 = closure_6;
          if (tmp4) {
            return;
          } else {
            addResult = set.add(thread);
          }
        }
        tmp7 = closure_5;
        tmp8 = closure_5(set);
      }
      return;
    }
  }
  cResult[4] = first.size >= closure_6;
  cResult[5] = first;
  cResult[6] = H;
  tmp18 = H;
}) : ((thread) => {
  let BottomSheetTitleHeader;
  let Button;
  let closure_5;
  let first;
  let intl2;
  let intl3;
  let items;
  let obj3;
  let obj6;
  let tags;
  let title;
  thread = thread.thread;
  let flag = thread.canManageThread;
  const parentChannel = thread.parentChannel;
  if (flag === undefined) {
    flag = true;
  }
  ({ onSave: dependencyMap, title } = thread);
  if (title === undefined) {
    let tmp = thread;
    const intl = thread(1126).intl;
    title = intl.string(thread(1126).t["436ZFw"]);
  }
  ({ tags, onClose: _slicedToArray } = thread);
  first = undefined;
  closure_5 = undefined;
  let closure_6;
  function toggleTag(BottomSheetTitleHeader) {
    if (null != BottomSheetTitleHeader) {
      const _Set = Set;
      const self = this;
      const self2 = this;
      set = new Set(first);
      if (set.has(BottomSheetTitleHeader)) {
        set.delete(BottomSheetTitleHeader);
      } else if (!closure_6) {
        set.add(BottomSheetTitleHeader);
      }
      closure_5(set);
    }
  }
  let tmp3 = closure_9();
  let tmp4 = thread;
  let obj = thread(6788);
  let appliedTags = obj.useAppliedTags(thread);
  const useState = first.useState;
  let _Set = Set;
  if (null != tags) {
    appliedTags = tags;
  }
  const _Set1 = new _Set(appliedTags);
  [first, closure_5] = useState(_Set1);
  closure_6 = first.size >= closure_6;
  const tmp4Result = tmp4(6788);
  const visibleForumTags = tmp4Result.useVisibleForumTags(parentChannel);
  let obj2 = {
    onDismiss() {
      let tmp;
      if (_slicedToArray != null) {
        tmp = _slicedToArray();
      }
      return tmp;
    },
    header: toggleTag(BottomSheetTitleHeader, obj3),
    children: items
  };
  const ActionSheet = tmp4(6708).ActionSheet;
  obj3 = { title, subtitle: intl2.string(tmp4(1126).t["+HS9+m"]), subtitleStyle: tmp3.subtitle };
  BottomSheetTitleHeader = tmp4(6651).BottomSheetTitleHeader;
  intl2 = tmp4(1126).intl;
  items = [, ];
  const obj4 = {
    style: tmp3.tagsContainer,
    children: visibleForumTags.map((tag) => {
      let tmp4;
      const hasItem = first.has(tag);
      const obj = { tag, disabled: tmp4, onPress: toggleTag, selected: hasItem };
      tmp4 = !flag;
      const tmp3 = AvailableForumTagDefault;
      if (flag) {
        tmp4 = closure_6 && !hasItem;
      }
      return metroImportDefault(tmp3, obj, tag.id);
    })
  };
  items[0] = toggleTag(closure_5, obj4);
  const obj5 = { style: tmp3.saveButton, children: toggleTag(Button, obj6) };
  obj6 = {
    text: intl3.string(tmp4(1126).t["R3BPH+"]),
    onPress() {
      Array.from(first);
      if (null != dependencyMap) {
        const items = [];
        HermesBuiltin.arraySpread(items, first, 0);
        tmp5(items);
      } else if (null != thread) {
        const obj = ForumActionCreatorsDefault;
        obj.updateForumPostTags(tmp6.id, tmp4);
      }
      const obj2 = ActionSheetActionCreatorsDefault;
      obj2.hideActionSheet();
    }
  };
  Button = tmp4(5601).Button;
  intl3 = tmp4(1126).intl;
  items[1] = toggleTag(closure_5, obj5);
  return closure_8(ActionSheet, obj2);
});
const result = size.fileFinishedImporting("modules/forums/native/ForumPostTagsActionSheet.tsx");

export default tmp3;