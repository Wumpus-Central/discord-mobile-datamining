// === Module 13058: UserProfileEditNote ===

// Module 13058 (UserProfileEditNote)
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;

require = fn;
const ScrollView = fn(17).ScrollView;
const NOTE_MAX_LENGTH = fn(1074).NOTE_MAX_LENGTH;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
const createStyles = fn(4560);
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
  let ref;
  let obj = userId(onClose[6]);
  const navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[7])(userId);
  const note = tmp5.note;
  let obj1 = navigation;
  let str = note;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(navigation.useState(str), 2);
  maxLength = tmp6[0];
  closure_7 = tmp8;
  ref = obj1.useRef(null);
  const items = [flag];
  const effect = obj1.useEffect(() => {
    if (flag) {
      const current = ref.current;
      if (current != null) {
        current.focus();
      }
    }
  }, items);
  const items1 = [navigation, userId, note, maxLength, onSave, onClose];
  const layoutEffect = obj1.useLayoutEffect(() => {
    let obj = {
      headerLeft: NavigatorHeader.getHeaderConditionalBackButton(() => new Promise((arg0) => {
        closure_0 = arg0;
        let str = closure_5;
        if (closure_5 == null) {
          str = "";
        }
        const tmp2 = closure_1_1(10923);
        tmp2({
          hasEdits: str !== closure_6,
          onHasEdits: closure_1_0(4425).dismissKeyboard,
          resetPending() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onConfirm() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          }
        });
        const obj = {
          hasEdits: str !== closure_6,
          onHasEdits: closure_1_0(4425).dismissKeyboard,
          resetPending() {
            let str = closure_1_5;
            if (closure_1_5 == null) {
              str = "";
            }
            return closure_1_7(str);
          },
          onConfirm() {
            closure_0(true);
            if (dependencyMap != null) {
              dependencyMap();
            }
          }
        };
      })),
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = userId(onClose[12]).intl;
        obj.label = intl.string(userId(onClose[12]).t["R3BPH+"]);
        let str = note;
        if (note == null) {
          str = "";
        }
        obj.disabled = str === first;
        obj.onPress = function onPress() {
          onSave(onClose[13]).updateNote(closure_1_0, closure_1_6);
          if (closure_1_1 != null) {
            closure_1_1();
          }
          if (closure_1_2 != null) {
            closure_1_2();
          }
        };
        return closure_7(userId(onClose[11]).HeaderTextButton, obj);
      }
    };
    navigation.setOptions(obj);
  }, items1);
  obj = { contentContainerStyle: closure_9().contentContainer, keyboardShouldPersistTaps: "always", children: null };
  obj = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[12]).intl;
  obj.children = intl.string(userId(onClose[12]).t["mQKv+v"]);
  const items2 = [closure_7(userId(onClose[14]).Text, obj), ];
  obj1 = { ref, value: maxLength, onChange: tmp8, maxLength, autoCorrect: false, autoCapitalize: "none", placeholder: null, accessibilityLabel: null };
  const intl2 = tmp2(tmp3[12]).intl;
  const string = intl2.string;
  const t = tmp2(tmp3[12]).t;
  if (tmp5.loading) {
    let stringResult = string(t["WLKx/9"]);
  } else {
    stringResult = string(t.tRZR6T);
  }
  obj1.placeholder = stringResult;
  const intl3 = tmp2(tmp3[12]).intl;
  obj1.accessibilityLabel = intl3.string(userId(onClose[12]).t["mQKv+v"]);
  items2[1] = closure_7(userId(onClose[15]).TextArea, obj1);
  obj.children = items2;
  return ref(note, obj);
};