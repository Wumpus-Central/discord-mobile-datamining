// discord_app/modules/people/native/FriendRequestNote.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import PeopleListTracking from "../PeopleListTracking.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react_mod from "../../../../_runtime/00019_react.js";
import react_native from "../../../../_runtime/00017_react-native.js";
import RelationshipStore from "../../../stores/RelationshipStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

const require = globalThis.__r;
let userId;

let c9;
let closure_4;
let hasOwnProperty;
let metroImportAll;
let obj2;
let rect;
let react = react_mod;
({ Pressable: closure_4, View: hasOwnProperty } = react_native);
const RelationshipTypes = Constants.RelationshipTypes;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
let createStyles = createStyles_mod;
let obj = { container: obj2, spoiler: rect, hidden: { opacity: 0 } };
obj2 = {
  width: "100%",
  position: "relative",
  padding: nativeDefault.space.PX_12,
  borderRadius: nativeDefault.radii.md,
  minHeight: 56,
  flexDirection: "row",
  alignItems: "center",
};
createStyles = createStyles.createStyles;
rect = {
  position: "absolute",
  top: 0,
  left: 0,
  right: 0,
  bottom: 0,
  justifyContent: "center",
  alignItems: "center",
  borderRadius: nativeDefault.radii.md,
};
let closure_10 = createStyles(obj);
const tmp5 = ReactCompilerGating.isReactCompilerEnabled()
  ? (userId) => {
      let Button;
      let analyticsLocation;
      let backgroundColor;
      let first;
      let intl;
      let items1;
      let obj6;
      let styles;
      let tmp11;
      let tmp8;
      let obj = userId(analyticsLocation[9]);
      const cResult = obj.c(27);
      userId = userId.userId;
      ({ styles, backgroundColor, analyticsLocation } = userId);
      const tmp4 = closure_10();
      const obj2 = userId(analyticsLocation[10]);
      const hideFriendRequestNotes = obj2.useHideFriendRequestNotes();
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [RelationshipStore];
        let num = 0;
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== userId) {
        const fn = function v() {
          const obj = { note: RelationshipStore.getNote(userId), type: RelationshipStore.getRelationshipType(userId) };
          return obj;
        };
        cResult[1] = userId;
        cResult[2] = fn;
        tmp8 = fn;
      } else {
        tmp8 = cResult[2];
      }
      const tmpResult = userId(analyticsLocation[11]);
      const stateFromStoresObject = tmpResult.useStateFromStoresObject(first, tmp8);
      const note = stateFromStoresObject.note;
      const tmp10 = note(react.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
      [tmp11, react] = tmp10;
      if (cResult[3] === analyticsLocation) {
        let tmp15;
        let length;
        const tmp12 = cResult[4];
        if (note != null) {
          length = note.length;
        }
        if (tmp12 === length) {
          tmp15 = cResult[5];
        }
        if (!hideFriendRequestNotes) {
          if (null != note) {
            if ("" !== note) {
              if (cResult[6] === tmp4.container) {
                let tmp18;
                let hidden;
                if (cResult[7] === styles) {
                  tmp18 = cResult[8];
                }
                if (!tmp11) {
                  hidden = tmp4.hidden;
                }
                if (cResult[9] === note) {
                  if (cResult[10] === tmp11) {
                    if (cResult[11] === !tmp11) {
                      let tmp20;
                      if (cResult[12] === "") {
                        tmp20 = cResult[13];
                      }
                      if (cResult[14] === hidden) {
                        let tmp23;
                        if (cResult[15] === tmp20) {
                          tmp23 = cResult[16];
                        }
                        if (cResult[17] === backgroundColor) {
                          if (cResult[18] === tmp15) {
                            if (cResult[19] === tmp4.spoiler) {
                              let tmp27;
                              if (cResult[20] === tmp11) {
                                tmp27 = cResult[21];
                              }
                              if (cResult[22] === tmp15) {
                                if (cResult[23] === tmp27) {
                                  if (cResult[24] === tmp18) {
                                    let tmp32;
                                    if (cResult[25] === tmp23) {
                                      tmp32 = cResult[26];
                                    }
                                    return tmp32;
                                  }
                                }
                              }
                              const obj3 = { style: tmp18, onPress: tmp15, children: items1 };
                              items1 = [tmp23, tmp27];
                              const tmp35 = closure_9(closure_4, obj3);
                              cResult[22] = tmp15;
                              cResult[23] = tmp27;
                              cResult[24] = tmp18;
                              cResult[25] = tmp23;
                              cResult[26] = tmp35;
                              tmp32 = tmp35;
                            }
                          }
                        }
                        let tmp29Result = null;
                        if (!tmp11) {
                          const items2 = [tmp4.spoiler];
                          let tmp31;
                          if (null != backgroundColor) {
                            tmp31 = { backgroundColor };
                            const obj4 = { backgroundColor };
                          }
                          items2[1] = tmp31;
                          const obj5 = { style: items2, children: closure_8(Button, obj6) };
                          obj6 = {
                            icon: closure_8(userId(analyticsLocation[15]).EyeIcon, { size: "sm" }),
                            variant: "secondary",
                            size: "sm",
                            onPress: tmp15,
                            text: intl.string(userId(analyticsLocation[16]).t.sB0q4C),
                          };
                          Button = tmp(analyticsLocation[14]).Button;
                          intl = tmp(analyticsLocation[16]).intl;
                          tmp29Result = closure_8(closure_5, obj5);
                        }
                        cResult[17] = backgroundColor;
                        cResult[18] = tmp15;
                        cResult[19] = tmp4.spoiler;
                        cResult[20] = tmp11;
                        cResult[21] = tmp29Result;
                        tmp27 = tmp29Result;
                      }
                      const obj7 = { style: hidden, children: tmp20 };
                      const tmp26 = closure_8(closure_5, obj7);
                      cResult[14] = hidden;
                      cResult[15] = tmp20;
                      cResult[16] = tmp26;
                      tmp23 = tmp26;
                    }
                  }
                }
                const obj8 = {
                  accessible: tmp11,
                  accessibilityElementsHidden: !tmp11,
                  accessibilityLabel: "",
                  variant: "redesign/message-preview/normal",
                  children: note,
                };
                const tmp22 = closure_8(userId(analyticsLocation[13]).Text, obj8);
                cResult[9] = note;
                cResult[10] = tmp11;
                cResult[11] = !tmp11;
                cResult[12] = "";
                cResult[13] = tmp22;
                tmp20 = tmp22;
              }
              const items3 = [tmp4.container, styles];
              cResult[6] = tmp4.container;
              cResult[7] = styles;
              cResult[8] = items3;
              tmp18 = items3;
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
        let num;
        react(true);
        const obj = { analyticsLocation, noteLength: num };
        num = undefined;
        const trackViewFriendRequestNote = PeopleListTracking.trackViewFriendRequestNote;
        PeopleListTracking;
        if (note != null) {
          num = note.length;
        }
        if (num == null) {
          num = 0;
        }
        const result = trackViewFriendRequestNote(obj);
      };
      cResult[4] = length1;
      cResult[5] = fn2;
      tmp15 = fn2;
    }
  : (styles) => {
      let Button;
      let Text;
      let _undefined;
      let analyticsLocation;
      let backgroundColor;
      let c3;
      let intl;
      let items2;
      let items3;
      let obj5;
      let obj8;
      let tmp7;
      ({ userId: require, backgroundColor, analyticsLocation } = styles);
      react = undefined;
      styles = styles.styles;
      const tmp = closure_10();
      let obj = require("HideFriendRequestNotesUtils");
      const hideFriendRequestNotes = obj.useHideFriendRequestNotes();
      const items = [RelationshipStore];
      const obj2 = require("get initialized");
      const stateFromStoresObject = obj2.useStateFromStoresObject(items, () => {
        const obj = { note: RelationshipStore.getNote(require), type: RelationshipStore.getRelationshipType(require) };
        return obj;
      });
      const note = stateFromStoresObject.note;
      [tmp7, c3] = note(react.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
      const items1 = [analyticsLocation, note];
      note(react.useState(stateFromStoresObject.type === RelationshipTypes.PENDING_OUTGOING), 2);
      const callback = react.useCallback(() => {
        let num;
        _undefined(true);
        const obj = { analyticsLocation, noteLength: num };
        num = undefined;
        const trackViewFriendRequestNote = PeopleListTracking.trackViewFriendRequestNote;
        PeopleListTracking;
        if (note != null) {
          num = note.length;
        }
        if (num == null) {
          num = 0;
        }
        const result = trackViewFriendRequestNote(obj);
      }, items1);
      let tmp13Result = null;
      if (!hideFriendRequestNotes) {
        tmp13Result = null;
        if (null != note) {
          tmp13Result = null;
          if ("" !== note) {
            const obj3 = { style: items2, onPress: callback, children: items3 };
            items2 = [tmp.container, styles];
            let hidden;
            if (!tmp7) {
              hidden = tmp.hidden;
            }
            const obj4 = { style: hidden, children: closure_8(Text, obj5) };
            obj5 = {
              accessible: tmp7,
              accessibilityElementsHidden: !tmp7,
              accessibilityLabel: "",
              variant: "redesign/message-preview/normal",
              children: note,
            };
            Text = require("Text/Text").Text;
            items3 = [closure_8(closure_5, obj4)];
            let tmp15Result = null;
            if (!tmp7) {
              const items4 = [tmp.spoiler];
              let tmp12;
              if (null != backgroundColor) {
                tmp12 = { backgroundColor };
                const obj6 = { backgroundColor };
              }
              items4[1] = tmp12;
              const obj7 = { style: items4, children: closure_8(Button, obj8) };
              obj8 = {
                icon: closure_8(require("EyeIcon").EyeIcon, { size: "sm" }),
                variant: "secondary",
                size: "sm",
                onPress: callback,
                text: intl.string(require("intl").t.sB0q4C),
              };
              Button = require("components/Button/Button").Button;
              intl = require("intl").intl;
              tmp15Result = closure_8(closure_5, obj7);
            }
            items3[1] = tmp15Result;
            tmp13Result = closure_9(closure_4, obj3);
          }
        }
      }
      return tmp13Result;
    };
let result = size.fileFinishedImporting("modules/people/native/FriendRequestNote.tsx");

export default tmp5;
