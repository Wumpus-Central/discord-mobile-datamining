// === Module 13120: FriendRequestNote ===

// Module 13120 (FriendRequestNote)
import nativeDefault from "native" /* 576 */;
import PeopleListTracking from "PeopleListTracking" /* 13122 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4209 */;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
fn(4560);
let createStyles = { container: null, spoiler: null, hidden: null };
createStyles = { width: "100%", position: "relative", padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" };
createStyles.container = createStyles;
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
createStyles.spoiler = rect;
createStyles.hidden = { opacity: 0 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
  ({ userId: require, backgroundColor, analyticsLocation } = styles);
  noop = undefined;
  const tmp = closure_10();
  let obj = require("HideFriendRequestNotesUtils");
  const hideFriendRequestNotes = obj.useHideFriendRequestNotes();
  let obj1 = require("initialize");
  const items = [RelationshipStore];
  const stateFromStoresObject = obj1.useStateFromStoresObject(items, () => ({ note: RelationshipStore.getNote(require), type: RelationshipStore.getRelationshipType(require) }));
  const note = stateFromStoresObject.note;
  [tmp7, c3] = note(noop.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const items1 = [analyticsLocation, note];
  const callback = noop.useCallback(() => {
    _undefined(true);
    const obj = { analyticsLocation, noteLength: null };
    let num;
    if (note != null) {
      num = note.length;
    }
    if (num == null) {
      num = 0;
    }
    obj.noteLength = num;
    const result = obj.trackViewFriendRequestNote(obj);
  }, items1);
  let tmp13Result = null;
  if (!hideFriendRequestNotes) {
    tmp13Result = null;
    if (null != note) {
      tmp13Result = null;
      if ("" !== note) {
        obj = { style: null, onPress: null, children: null };
        const items2 = [tmp.container, styles.styles];
        obj.style = items2;
        obj.onPress = callback;
        let hidden;
        if (!tmp7) {
          hidden = tmp.hidden;
        }
        obj = { style: hidden, children: null };
        obj1 = { accessible: tmp7, accessibilityElementsHidden: !tmp7, accessibilityLabel: str, variant: "redesign/message-preview/normal", children: note };
        obj.children = closure_8(require("Text/Text").Text, obj1);
        const items3 = [closure_8(closure_5, obj), ];
        let tmp15Result = null;
        if (!tmp7) {
          const items4 = [tmp.spoiler, ];
          let tmp12;
          if (null != backgroundColor) {
            const obj2 = { backgroundColor };
            tmp12 = obj2;
          }
          const obj3 = { style: null, children: null };
          items4[1] = tmp12;
          obj3.style = items4;
          const obj4 = { icon: closure_8(require("EyeIcon").EyeIcon, { size: "sm" }), variant: "secondary", size: "sm", onPress: callback, text: null };
          const intl = require("util").intl;
          obj4.text = intl.string(require("util").t.sB0q4C);
          obj3.children = closure_8(require("components/Button/Button").Button, obj4);
          tmp15Result = closure_8(closure_5, obj3);
        }
        items3[1] = tmp15Result;
        obj.children = items3;
        tmp13Result = closure_9(closure_4, obj);
      }
    }
  }
  return tmp13Result;
};