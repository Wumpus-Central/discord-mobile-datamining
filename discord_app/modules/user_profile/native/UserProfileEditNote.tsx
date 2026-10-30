// === Module 14870: UserProfileEditNote ===

// Module 14870 (UserProfileEditNote)
import NavigatorHeader from "NavigatorHeader" /* 6992 */;
import NoteActionCreatorsDefault from "NoteActionCreators" /* 14871 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const NOTE_MAX_LENGTH = fn(1072).NOTE_MAX_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(5009);
let closure_9 = createStyles.createStyles({ contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 } });
const size = fn(2);
const result = size.fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let flag = userId.shouldFocusInput;
  if (flag === undefined) {
    flag = false;
  }
  let maxLength;
  closure_7 = undefined;
  let callback;
  let ref;
  const tmp = ref();
  const navigation = userId(onClose[6]).useNavigation();
  const tmp5 = onSave(onClose[7])(userId);
  const note = tmp5.note;
  let str = note;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(navigation.useState(str), 2);
  maxLength = tmp6[0];
  closure_7 = tmp8;
  const items = [userId, maxLength, onSave];
  callback = obj2.useCallback(() => {
    NoteActionCreatorsDefault.updateNote(userId, first);
    if (onSave != null) {
      onSave();
    }
  }, items);
  ref = obj2.useRef(null);
  const items1 = [flag];
  const effect = obj2.useEffect(() => {
    if (flag) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items1);
  const items2 = [navigation, note, maxLength, onClose, callback];
  const layoutEffect = obj2.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderConditionalBackButton(() => new Promise((arg0) => {
        closure_0 = arg0;
        let str = closure_5;
        if (closure_5 == null) {
          str = "";
        }
        closure_1_1(11370)({
          location: "UserProfileEditNote",
          hasUnsavedChanges: str !== closure_6,
          onReset() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onContinue() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          },
          onSave
        });
      })),
      headerRight() {
        const obj = { text: null, disabled: null, onPress: null };
        const intl = userId(onClose[12]).intl;
        obj.text = intl.string(userId(onClose[12]).t["R3BPH+"]);
        let str = note;
        if (note == null) {
          str = "";
        }
        obj.disabled = str === first;
        obj.onPress = function onPress() {
          closure_1_8();
          if (closure_1_2 != null) {
            closure_1_2();
          }
        };
        return closure_7(userId(onClose[11]).HeaderActionButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items2);
  const obj3 = { contentContainerStyle: tmp.contentContainer, keyboardShouldPersistTaps: "always", children: null };
  const obj4 = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[12]).intl;
  obj4.children = intl.string(userId(onClose[12]).t["mQKv+v"]);
  const items3 = [closure_7(userId(onClose[13]).Text, obj4), ];
  const obj5 = { ref, value: maxLength, onChange: tmp6[1], maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: null, accessibilityLabel: null };
  const intl2 = tmp2(tmp3[12]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[12]).t;
  if (tmp5.loading) {
    let stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj5.placeholder = stringResult;
  const intl3 = tmp2(tmp3[12]).intl;
  obj5.accessibilityLabel = intl3.string(userId(onClose[12]).t["mQKv+v"]);
  items3[1] = closure_7(userId(onClose[14]).TextArea, obj5);
  obj3.children = items3;
  return callback(note, obj3);
};