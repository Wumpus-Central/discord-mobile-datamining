// discord_app/modules/create_guild/native/CreateGuild.tsx
import noop from "noop";
import { ScrollView } from "set";
import mergeGuildAvatar from "mergeGuildAvatar";
import { MarketingURLs } from "ME";
import jsxProd from "jsxProd";
import createCacheKey from "createCacheKey";

let error;
let metroImportAll;
const require = arg1;
({ jsx: error, jsxs: metroImportAll } = jsxProd);
createCacheKey = { flex: { flex: 1 }, contentContainer: null, header: null, description: null, iconUploader: null, hint: null };
createCacheKey = { backgroundColor: require("Themes").colors.BACKGROUND_BASE_LOWER, paddingHorizontal: 16, paddingBottom: 16 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { textAlign: "center" };
createCacheKey[3] = { lineHeight: 18, textAlign: "center", marginBottom: 24 };
createCacheKey[4] = { alignSelf: "center", marginBottom: 4 };
createCacheKey[5] = { marginBottom: 8 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
let result = require("mergeGuildAvatar").fileFinishedImporting("modules/create_guild/native/CreateGuild.tsx");

export default function CreateGuild(arg0) {
  let autoFocus;
  let customButtonLabel;
  let customDescription;
  let customTitle;
  let error;
  let guild;
  let onCreate;
  let onIconPress;
  let onNameChange;
  let onStaffOnlyChange;
  let submitting;
  ({ guild, error, customTitle, customDescription, customButtonLabel, autoFocus } = arg0);
  ({ onIconPress, onNameChange, onStaffOnlyChange, onCreate, submitting } = arg0);
  if (autoFocus === undefined) {
    autoFocus = true;
  }
  let isScreenReaderEnabled;
  let ref;
  let tmp = createCacheKey();
  currentUser = currentUser.getCurrentUser();
  let isStaffResult;
  if (currentUser != null) {
    isStaffResult = currentUser.isStaff();
  }
  let obj1 = isScreenReaderEnabled(4700);
  isScreenReaderEnabled = obj1.useIsScreenReaderEnabled();
  ref = React.useRef(null);
  const items = [isScreenReaderEnabled];
  const effect = React.useEffect(() => {
    let tmp = isScreenReaderEnabled;
    if (isScreenReaderEnabled) {
      tmp = null != ref.current;
    }
    if (tmp) {
      let obj = isScreenReaderEnabled(outer1_2[8]);
      obj = { ref: null, delay: 100 };
      obj[0] = ref;
      const result = obj.setAccessibilityFocus(obj);
    }
  }, items);
  let obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
  obj = { ref, style: tmp.header, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  if (customTitle == null) {
    const intl = tmp4(1236).intl;
    customTitle = intl.string(tmp4(1236).t.XioBx6);
  }
  obj[5] = customTitle;
  const items1 = [closure_7(isScreenReaderEnabled(4299).Text, obj), , , , , , , ];
  obj1 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  if (customDescription == null) {
    const intl2 = tmp4(1236).intl;
    customDescription = intl2.string(tmp4(1236).t["/k/L/j"]);
  }
  obj1[3] = customDescription;
  items1[1] = closure_7(isScreenReaderEnabled(4299).Text, obj1);
  items1[2] = closure_7(ref(11196), { iconBackgroundColor: tmp.contentContainer.backgroundColor, style: tmp.iconUploader, onPress: onIconPress, icon: guild.icon });
  const obj3 = { isClearable: true, label: null, errorMessage: null, value: null, onChange: null, autoFocus: null, autoCorrect: false, returnKeyType: "done" };
  const intl3 = tmp4(1236).intl;
  obj3[1] = intl3.string(isScreenReaderEnabled(1236).t.dBih7e);
  let firstFieldErrorMessage;
  if (error != null) {
    firstFieldErrorMessage = error.getFirstFieldErrorMessage("name");
  }
  obj3[2] = firstFieldErrorMessage;
  obj3[3] = guild.name;
  obj3[4] = onNameChange;
  if (autoFocus) {
    autoFocus = !isScreenReaderEnabled;
  }
  let tmp9Result = !!isStaffResult;
  obj3[5] = autoFocus;
  items1[3] = closure_7(isScreenReaderEnabled(7790).TextInput, obj3);
  if (tmp9Result) {
    const obj4 = { onValueChange: null, value: null, start: true, end: true, label: "Staff Only", subLabel: null };
    obj4[0] = onStaffOnlyChange;
    obj4[1] = guild.staffOnly;
    const intl4 = tmp4(1236).intl;
    obj4[5] = intl4.string(tmp4(1236).t.edQ5va);
    tmp9Result = tmp9(tmp4(5768).TableSwitchRow, obj4);
  }
  items1[4] = tmp9Result;
  const obj5 = { style: tmp.hint, variant: "text-xs/medium", color: "text-muted", children: null };
  const intl5 = tmp4(1236).intl;
  obj5[3] = intl5.format(isScreenReaderEnabled(1236).t["2bprXx"], { guidelinesURL: MarketingURLs.GUIDELINES });
  items1[5] = closure_7(isScreenReaderEnabled(4299).Text, obj5);
  const obj7 = { disabled: "" === guild.name, size: "md", grow: true, text: null, onPress: null, loading: null };
  if (customButtonLabel == null) {
    const intl6 = tmp4(1236).intl;
    customButtonLabel = intl6.string(tmp4(1236).t["O0p/lS"]);
  }
  obj7[3] = customButtonLabel;
  obj7[4] = onCreate;
  obj7[5] = submitting;
  items1[6] = closure_7(isScreenReaderEnabled(4714).Button, obj7);
  let firstFieldErrorMessage1;
  if (error != null) {
    firstFieldErrorMessage1 = error.getFirstFieldErrorMessage("name");
  }
  tmp9Result = null;
  if (null == firstFieldErrorMessage1) {
    let message;
    if (error != null) {
      message = error.message;
    }
    tmp9Result = null;
    if (null != message) {
      let message1;
      if (error != null) {
        message1 = error.message;
      }
      tmp9Result = null;
      if ("" !== message1) {
        let message2;
        if (error != null) {
          message2 = error.message;
        }
        const obj8 = { children: null };
        obj8[0] = message2;
        tmp9Result = tmp9(ref(8469), obj8);
        const tmp12Result = ref(8469);
      }
    }
  }
  items1[7] = tmp9Result;
  obj[6] = closure_8(isScreenReaderEnabled(4712).Stack, { children: items1 });
  return closure_7(ScrollView, obj);
};