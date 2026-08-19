// === Module 12349: FriendRequestNote ===

// Module 12349 (FriendRequestNote)
import ThemesDefault from "Themes" /* 712 */;
import _slicedToArray from "_slicedToArray" /* 32 */;
import noop from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import markAllUserIdListsStale from "markAllUserIdListsStale" /* 4030 */;
import { RelationshipTypes } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import "createCacheKey";

const require = fn;
({ Pressable: c4, View: c5 } = get_ActivityIndicator);
({ jsx: closure_8, jsxs: c9 } = jsxProd);
const createCacheKey = { width: "100%", position: "relative", padding: ThemesDefault.space.PX_12, borderRadius: ThemesDefault.radii.md, minHeight: 56, flexDirection: "row", alignItems: "center" };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { position: "absolute", top: 0, left: 0, right: 0, bottom: 0, justifyContent: "center", alignItems: "center", borderRadius: ThemesDefault.radii.md };
createCacheKey[2] = { opacity: 0 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let result = require("obj132").fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default function FriendRequestNote(styles) {
  ({ userId: require, backgroundColor, analyticsLocation } = styles);
  let React;
  const tmp = callback();
  const HideFriendRequestNotes = require(analyticsLocation[8]).HideFriendRequestNotes;
  const setting = HideFriendRequestNotes.useSetting();
  let obj = require(analyticsLocation[9]);
  const items = [closure_6];
  const stateFromStoresObject = obj.useStateFromStoresObject(items, () => ({ note: closure_1_6.getNote(closure_0), type: closure_1_6.getRelationshipType(closure_0) }));
  const note = stateFromStoresObject.note;
  [tmp7, c3] = note(React.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
  const items1 = [analyticsLocation, note];
  callback = React.useCallback(() => {
    _undefined(true);
    require(analyticsLocation[10]);
    const obj = { analyticsLocation, noteLength: null };
    let num;
    if (note != null) {
      num = note.length;
    }
    if (num == null) {
      num = 0;
    }
    obj[1] = num;
    const result = obj.trackViewFriendRequestNote(obj);
  }, items1);
  let tmp13Result = null;
  if (!setting) {
    tmp13Result = null;
    if (null != note) {
      tmp13Result = null;
      if ("" !== note) {
        obj = { style: null, onPress: null, children: null };
        const items2 = [tmp.container, styles.styles];
        obj[0] = items2;
        obj[1] = callback;
        let hidden;
        if (!tmp7) {
          hidden = tmp.hidden;
        }
        obj = { style: null, children: null };
        obj[0] = hidden;
        obj1 = { accessible: null, accessibilityElementsHidden: null, accessibilityLabel: null, variant: "redesign/message-preview/normal", children: null };
        obj1[0] = tmp7;
        obj1[1] = !tmp7;
        obj1[2] = str;
        obj1[4] = note;
        obj[1] = callback(require(analyticsLocation[11]).Text, obj1);
        const items3 = [callback(closure_5, obj), ];
        let tmp15Result = null;
        if (!tmp7) {
          const items4 = [tmp.spoiler, ];
          let tmp12;
          if (null != backgroundColor) {
            const obj2 = { backgroundColor: null };
            obj2[0] = backgroundColor;
            tmp12 = obj2;
          }
          const obj3 = { style: null, children: null };
          items4[1] = tmp12;
          obj3[0] = items4;
          const obj4 = { icon: null, variant: "secondary", size: "sm", onPress: null, text: null };
          obj4[0] = callback(require(analyticsLocation[13]).EyeIcon, { size: "sm" });
          obj4[3] = callback;
          const intl = require(analyticsLocation[14]).intl;
          obj4[4] = intl.string(require(analyticsLocation[14]).t.sB0q4C);
          obj3[1] = callback(require(analyticsLocation[12]).Button, obj4);
          tmp15Result = callback(closure_5, obj3);
        }
        items3[1] = tmp15Result;
        obj[2] = items3;
        tmp13Result = callback2(closure_4, obj);
      }
    }
  }
  return tmp13Result;
};