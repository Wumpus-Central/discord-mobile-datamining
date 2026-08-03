import _slicedToArray from "_slicedToArray";
import noop from "noop";
import { ScrollView } from "get ActivityIndicator";
import { NOTE_MAX_LENGTH } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
let closure_9 = createCacheKey.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const result = require("get ActivityIndicator").fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let navigation;
  let note;
  let first;
  let c6;
  let obj = userId(onClose[6]);
  navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[7])(userId);
  note = tmp5.note;
  let obj1 = note;
  let str = note;
  if (note == null) {
    str = "";
  }
  const tmp6 = navigation(note.useState(str), 2);
  first = tmp6[0];
  c6 = tmp8;
  const items = [navigation, userId, note, first, onSave, onClose];
  const layoutEffect = obj1.useLayoutEffect(() => {
    let obj = { headerLeft: null, headerRight: null };
    obj[0] = userId(onClose[8]).getHeaderConditionalBackButton(() => new Promise((arg0) => {
      let closure_0 = arg0;
      let str = noop;
      if (noop == null) {
        str = "";
      }
      const tmp = outer1_2;
      const tmp2 = outer1_1(outer1_2[9]);
      tmp2({
        hasEdits: str !== closure_5,
        onHasEdits: outer1_0(outer1_2[10]).dismissKeyboard,
        resetPending() {
          let str = noop;
          if (noop == null) {
            str = "";
          }
          return closure_6(str);
        },
        onConfirm() {
          callback(true);
          if (outer1_2 != null) {
            outer1_2();
          }
        }
      });
    }));
    obj[1] = function headerRight(arg0) {
      const obj = {};
      const merged = Object.assign(arg0);
      const intl = outer1_0(outer1_2[12]).intl;
      obj.label = intl.string(outer1_0(outer1_2[12]).t["R3BPH+"]);
      let str = noop;
      if (noop == null) {
        str = "";
      }
      obj.disabled = str === closure_5;
      obj.onPress = function onPress() {
        outer1_1(outer1_2[13]).updateNote(closure_0, closure_5);
        if (callback != null) {
          callback();
        }
        if (callback2 != null) {
          callback2();
        }
      };
      return outer1_7(outer1_0(outer1_2[11]).HeaderTextButton, obj);
    };
    navigation.setOptions(obj);
  }, items);
  obj = { contentContainerStyle: callback2().contentContainer, keyboardShouldPersistTaps: "always", children: null };
  obj = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[12]).intl;
  obj[1] = intl.string(userId(onClose[12]).t["mQKv+v"]);
  const items1 = [callback(userId(onClose[14]).Text, obj), ];
  obj1 = { value: first, onChange: tmp8, maxLength: c6, autoFocus: true, autoCorrect: false, autoCapitalize: "none", placeholder: null, accessibilityLabel: null };
  const intl2 = tmp2(tmp3[12]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[12]).t;
  if (tmp5.loading) {
    let stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj1[6] = stringResult;
  const intl3 = tmp2(tmp3[12]).intl;
  obj1[7] = intl3.string(userId(onClose[12]).t["mQKv+v"]);
  items1[1] = callback(userId(onClose[15]).TextArea, obj1);
  obj[2] = items1;
  return closure_8(first, obj);
};