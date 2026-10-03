// === Module 12950: FriendRequestNote ===

// Module 12950 (FriendRequestNote)
import nativeDefault from "native" /* 587 */;
import PeopleListTracking from "PeopleListTracking" /* 12952 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4519 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const RelationshipTypes = fn(1085).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4890);
let obj2 = { container: { width: "100%", position: "relative", padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" }, spoiler: null, hidden: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
obj2.spoiler = rect;
obj2.hidden = { opacity: 0 };
let closure_10 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj3 = { width: "100%", position: "relative", padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" };
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? ((userId) => {
  const cResult = userId(analyticsLocation[9]).c(27);
  userId = userId.userId;
  ({ styles, backgroundColor, analyticsLocation } = userId);
  const tmp4 = closure_10();
  const obj = userId(analyticsLocation[9]);
  const hideFriendRequestNotes = userId(analyticsLocation[10]).useHideFriendRequestNotes();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [RelationshipStore];
    cResult[0] = items;
    let first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== userId) {
    const fn = function v() {
      return { note: RelationshipStore.getNote(userId), type: RelationshipStore.getRelationshipType(userId) };
    };
    cResult[1] = userId;
    cResult[2] = fn;
    let tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  let obj2 = userId(analyticsLocation[10]);
  const stateFromStoresObject = userId(analyticsLocation[11]).useStateFromStoresObject(first, tmp8);
  const note = stateFromStoresObject.note;
  const tmpResult = userId(analyticsLocation[11]);
  [tmp11, noop] = note(noop.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  if (cResult[3] === analyticsLocation) {
    let length;
    if (note != null) {
      length = note.length;
    }
    if (cResult[4] === length) {
      let tmp14 = cResult[5];
    }
    if (!hideFriendRequestNotes) {
      if (null != note) {
        if ("" !== note) {
          if (cResult[6] === tmp4.container) {
            if (cResult[7] === styles) {
              let tmp17 = cResult[8];
            }
            if (!tmp11) {
              const hidden = tmp4.hidden;
            }
            if (cResult[9] === note) {
              if (cResult[10] === tmp11) {
                if (cResult[11] === tmp18) {
                  if (cResult[12] === str) {
                    let tmp19 = cResult[13];
                  }
                  if (cResult[14] === hidden) {
                    if (cResult[15] === tmp19) {
                      let tmp22 = cResult[16];
                    }
                    if (cResult[17] === backgroundColor) {
                      if (cResult[18] === tmp14) {
                        if (cResult[19] === tmp4.spoiler) {
                          if (cResult[20] === tmp11) {
                            let tmp26 = cResult[21];
                          }
                          if (cResult[22] === tmp14) {
                            if (cResult[23] === tmp26) {
                              if (cResult[24] === tmp17) {
                                if (cResult[25] === tmp22) {
                                  let tmp31 = cResult[26];
                                }
                                return tmp31;
                              }
                            }
                          }
                          const obj3 = { style: tmp17, onPress: tmp14, children: null };
                          const items1 = [tmp22, tmp26];
                          obj3.children = items1;
                          const tmp34 = closure_9(closure_4, obj3);
                          cResult[22] = tmp14;
                          cResult[23] = tmp26;
                          cResult[24] = tmp17;
                          cResult[25] = tmp22;
                          cResult[26] = tmp34;
                          tmp31 = tmp34;
                        }
                      }
                    }
                    let tmp28Result = null;
                    if (!tmp11) {
                      const items2 = [tmp4.spoiler, ];
                      let tmp30;
                      if (null != backgroundColor) {
                        const obj4 = { backgroundColor };
                        tmp30 = obj4;
                      }
                      const obj5 = { style: null, children: null };
                      items2[1] = tmp30;
                      obj5.style = items2;
                      const obj6 = { icon: closure_8(tmp(analyticsLocation[15]).EyeIcon, { size: "sm" }), variant: "secondary", size: "sm", onPress: tmp14, text: null };
                      const intl = tmp(analyticsLocation[16]).intl;
                      obj6.text = intl.string(tmp(analyticsLocation[16]).t.sB0q4C);
                      obj5.children = closure_8(tmp(analyticsLocation[14]).Button, obj6);
                      tmp28Result = closure_8(closure_5, obj5);
                    }
                    cResult[17] = backgroundColor;
                    cResult[18] = tmp14;
                    cResult[19] = tmp4.spoiler;
                    cResult[20] = tmp11;
                    cResult[21] = tmp28Result;
                    tmp26 = tmp28Result;
                  }
                  const obj7 = { style: hidden, children: tmp19 };
                  const tmp25 = closure_8(closure_5, obj7);
                  cResult[14] = hidden;
                  cResult[15] = tmp19;
                  cResult[16] = tmp25;
                  tmp22 = tmp25;
                }
              }
            }
            const obj8 = { accessible: tmp11, accessibilityElementsHidden: !tmp11, accessibilityLabel: str, variant: "redesign/message-preview/normal", children: note };
            const tmp21 = closure_8(tmp(analyticsLocation[13]).Text, obj8);
            cResult[9] = note;
            cResult[10] = tmp11;
            cResult[11] = !tmp11;
            cResult[12] = str;
            cResult[13] = tmp21;
            tmp19 = tmp21;
          }
          const items3 = [tmp4.container, styles];
          cResult[6] = tmp4.container;
          cResult[7] = styles;
          cResult[8] = items3;
          tmp17 = items3;
        }
      }
    }
    return null;
  }
  cResult[3] = analyticsLocation;
  let length1;
  if (note != null) {
    length1 = note.length;
  }
  const fn2 = function x() {
    noop(true);
    const obj2 = { analyticsLocation, noteLength: null };
    let num;
    if (note != null) {
      num = note.length;
    }
    if (num == null) {
      num = 0;
    }
    obj2.noteLength = num;
    const result = PeopleListTracking.trackViewFriendRequestNote(obj2);
  };
  cResult[4] = length1;
  cResult[5] = fn2;
  tmp14 = fn2;
  const tmp10 = note(noop.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
}) : ((styles) => {
  ({ userId: require, backgroundColor, analyticsLocation } = styles);
  noop = undefined;
  const tmp = closure_10();
  const hideFriendRequestNotes = require("HideFriendRequestNotesUtils").useHideFriendRequestNotes();
  const obj = require("HideFriendRequestNotesUtils");
  const items = [RelationshipStore];
  const stateFromStoresObject = require("initialize").useStateFromStoresObject(items, () => ({ note: RelationshipStore.getNote(require), type: RelationshipStore.getRelationshipType(require) }));
  const note = stateFromStoresObject.note;
  let obj2 = require("initialize");
  [tmp7, c3] = note(noop.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const items1 = [analyticsLocation, note];
  const callback = noop.useCallback(() => {
    _undefined(true);
    const obj2 = { analyticsLocation, noteLength: null };
    let num;
    if (note != null) {
      num = note.length;
    }
    if (num == null) {
      num = 0;
    }
    obj2.noteLength = num;
    const result = PeopleListTracking.trackViewFriendRequestNote(obj2);
  }, items1);
  let tmp13Result = null;
  if (!hideFriendRequestNotes) {
    tmp13Result = null;
    if (null != note) {
      tmp13Result = null;
      if ("" !== note) {
        const obj3 = { style: null, onPress: null, children: null };
        const items2 = [tmp.container, styles.styles];
        obj3.style = items2;
        obj3.onPress = callback;
        let hidden;
        if (!tmp7) {
          hidden = tmp.hidden;
        }
        const obj4 = { style: hidden, children: null };
        const obj5 = { accessible: tmp7, accessibilityElementsHidden: !tmp7, accessibilityLabel: str, variant: "redesign/message-preview/normal", children: note };
        obj4.children = closure_8(require("Text/Text").Text, obj5);
        const items3 = [closure_8(closure_5, obj4), ];
        let tmp15Result = null;
        if (!tmp7) {
          const items4 = [tmp.spoiler, ];
          let tmp12;
          if (null != backgroundColor) {
            const obj6 = { backgroundColor };
            tmp12 = obj6;
          }
          const obj7 = { style: null, children: null };
          items4[1] = tmp12;
          obj7.style = items4;
          const obj8 = { icon: closure_8(require("EyeIcon").EyeIcon, { size: "sm" }), variant: "secondary", size: "sm", onPress: callback, text: null };
          const intl = require("util").intl;
          obj8.text = intl.string(require("util").t.sB0q4C);
          obj7.children = closure_8(require("components/Button/Button").Button, obj8);
          tmp15Result = closure_8(closure_5, obj7);
        }
        items3[1] = tmp15Result;
        obj3.children = items3;
        tmp13Result = closure_9(closure_4, obj3);
      }
    }
  }
  return tmp13Result;
});