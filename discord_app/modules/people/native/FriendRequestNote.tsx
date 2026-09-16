// === Module 13270: FriendRequestNote ===

// Module 13270 (FriendRequestNote)
import nativeDefault from "native" /* 576 */;
import PeopleListTracking from "PeopleListTracking" /* 13272 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import RelationshipStore from "RelationshipStore" /* 4286 */;

const require = globalThis.__r;

require = fn;
get_ActivityIndicator = fn(17);
({ Pressable: closure_4, View: hasOwnProperty } = get_ActivityIndicator);
const RelationshipTypes = fn(1074).RelationshipTypes;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
const createStyles = fn(4638);
let obj2 = { container: { width: "100%", position: "relative", padding: nativeDefault.space.PX_12, borderRadius: nativeDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" }, spoiler: null, hidden: null };
const rect = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: nativeDefault.radii.md };
obj2.spoiler = rect;
obj2.hidden = { opacity: 0 };
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
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
};