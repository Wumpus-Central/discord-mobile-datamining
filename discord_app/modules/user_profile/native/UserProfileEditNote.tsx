// discord_app/modules/user_profile/native/UserProfileEditNote.tsx
import closure_3 from "../../../../_runtime/metro/00032__slicedToArray.js";
import closure_4 from "../../../../_runtime/00019_noop.js";
import { ScrollView } from "../../../../_runtime/00017_get_ActivityIndicator.js";
import { NOTE_MAX_LENGTH } from "../../../Constants.tsx";
import jsxProd from "../../../../_runtime/react/00021_jsxProd.js";
import createCacheKey from "../../../design/components/Styles/native/createStyles.tsx";

const require = arg1;
({ jsx: error, jsxs: closure_8 } = jsxProd);
let closure_9 = createCacheKey.createStyles({
  contentContainer: { paddingVertical: 24, paddingHorizontal: 16, gap: 8 },
});
const result = require("set").fileFinishedImporting("modules/user_profile/native/UserProfileEditNote.tsx");

export default function UserProfileEditNote(userId) {
  userId = userId.userId;
  const onSave = userId.onSave;
  const onClose = userId.onClose;
  let flag = userId.shouldFocusInput;
  if (flag === undefined) {
    flag = false;
  }
  let navigation;
  let note;
  let first;
  let callback;
  let ref;
  let obj = userId(onClose[6]);
  navigation = obj.useNavigation();
  const tmp5 = onSave(onClose[7])(userId);
  note = tmp5.note;
  obj1 = navigation;
  let str = note;
  if (note == null) {
    str = "";
  }
  const tmp6 = flag(navigation.useState(str), 2);
  first = tmp6[0];
  callback = tmp8;
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
  const items1 = [navigation, userId, note, first, onSave, onClose];
  const layoutEffect = obj1.useLayoutEffect(() => {
    let obj = {
      headerLeft: userId(onClose[8]).getHeaderConditionalBackButton(
        () =>
          new Promise((arg0) => {
            closure_0 = arg0;
            let str = closure_5;
            if (closure_5 == null) {
              str = "";
            }
            const tmp = closure_1_2;
            const tmp2 = closure_1_1(closure_1_2[9]);
            tmp2({
              hasEdits: str !== closure_6,
              onHasEdits: closure_1_0(closure_1_2[10]).dismissKeyboard,
              resetPending() {
                let str = closure_5;
                if (closure_5 == null) {
                  str = "";
                }
                return closure_7(str);
              },
              onConfirm() {
                callback(true);
                if (closure_1_2 != null) {
                  closure_1_2();
                }
              },
            });
          }),
      ),
      headerRight(arg0) {
        const obj = {};
        const merged = Object.assign(arg0);
        const intl = closure_1_0(closure_1_2[12]).intl;
        obj.label = intl.string(closure_1_0(closure_1_2[12]).t["R3BPH+"]);
        let str = closure_5;
        if (closure_5 == null) {
          str = "";
        }
        obj.disabled = str === closure_6;
        obj.onPress = function onPress() {
          closure_1_1(closure_1_2[13]).updateNote(closure_0, closure_6);
          if (callback != null) {
            callback();
          }
          if (callback2 != null) {
            callback2();
          }
        };
        return closure_1_7(closure_1_0(closure_1_2[11]).HeaderTextButton, obj);
      },
    };
    navigation.setOptions(obj);
  }, items1);
  obj = { contentContainerStyle: callback2().contentContainer, keyboardShouldPersistTaps: "always", children: null };
  obj = { variant: "text-sm/semibold", children: null };
  let intl = tmp2(tmp3[12]).intl;
  obj[1] = intl.string(userId(onClose[12]).t["mQKv+v"]);
  const items2 = [callback(userId(onClose[14]).Text, obj)];
  obj1 = {
    ref,
    value: first,
    onChange: tmp8,
    maxLength: first,
    autoCorrect: false,
    autoCapitalize: "none",
    placeholder: null,
    accessibilityLabel: null,
  };
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
  items2[1] = callback(userId(onClose[15]).TextArea, obj1);
  obj[2] = items2;
  return ref(note, obj);
}
