// === Module 12519: ChannelPrompt ===

// Module 12519 (ChannelPrompt)
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "comparator" /* 1981 */;
import closure_9 from "createGuildRecordFromRust" /* 1908 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
({ ScrollView: closure_6, View: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { flex: { flex: 1 }, safePadding: null, contentContainer: null, guildIcon: null, guildName: null, title: null, subTitle: null, topicInput: null, buttonWrapper: null, error: null };
createCacheKey = { marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT, flex: 1 };
createCacheKey[1] = createCacheKey;
createCacheKey[2] = { paddingHorizontal: 16 };
createCacheKey[3] = { alignSelf: "center" };
createCacheKey[4] = { marginTop: 8, textAlign: "center" };
createCacheKey[5] = { marginTop: 16, textAlign: "center" };
createCacheKey[6] = { marginTop: 8, textAlign: "center" };
createCacheKey[7] = { marginTop: 24 };
createCacheKey[8] = { marginTop: 8 };
createCacheKey[9] = { marginTop: 4 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const result = require("set").fileFinishedImporting("modules/nuf/native/components/ChannelPrompt.tsx");

export default function ChannelPrompt(guildId) {
  guildId = guildId.guildId;
  const hasBack = guildId.hasBack;
  const hasSkip = guildId.hasSkip;
  const onCancel = guildId.onCancel;
  const onSuccess = guildId.onSuccess;
  let first;
  c6 = undefined;
  c7 = undefined;
  let navigation;
  const tmp = callback();
  let obj = guildId(hasSkip[9]);
  const items = [closure_9];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_9.getGuild(guildId));
  const tmp5 = onSuccess(first.useState(""), 2);
  first = tmp5[0];
  [tmp8, c6] = onSuccess(first.useState(false), 2);
  const tmp7 = onSuccess(first.useState(false), 2);
  [obj2, c7] = onSuccess(first.useState(null), 2);
  obj2 = guildId(hasSkip[10]);
  navigation = obj2.useNavigation();
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = first.useLayoutEffect(() => {
    if (hasBack) {
      let obj = guildId(hasSkip[11]);
      let fn = obj.getHeaderBackButton(onCancel);
    } else {
      fn = () => null;
    }
    obj = { headerLeft: fn, headerRight: null };
    if (hasSkip) {
      const intl = guildId(hasSkip[12]).intl;
      let fn2 = guildId(hasSkip[11]).getHeaderTextButton(intl.string(guildId(hasSkip[12]).t["5Wxrcd"]), onSuccess);
      const obj3 = guildId(hasSkip[11]);
    } else {
      fn2 = () => null;
    }
    obj[1] = fn2;
    navigation.setOptions(obj);
  }, items1);
  const items2 = [guildId, onSuccess, first];
  callback = first.useCallback(onCancel(function*() {
    closure_1 = tmp3;
    closure_1_7(null);
    closure_1_6(true);
    const defaultChannel = closure_1_8.getDefaultChannel(closure_1_0);
    c3 = 1;
    const intl = closure_1_0(closure_1_2[12]).intl;
    obj1 = { topic: null };
    obj1[0] = c5;
    const formatToPlainStringResult = intl.formatToPlainString(closure_1_0(closure_1_2[12]).t.V4lepJ, obj1);
    const obj6 = closure_1_1(closure_1_2[13]);
    if (defaultChannel != null) {
      const parent_id = defaultChannel.parent_id;
    }
    yield obj6.createTextChannel(closure_1_0, c5, parent_id, formatToPlainStringResult);
    if (1 === tmp7) {
      c3 = 0;
      closure_0 = closure_2;
      const aPIError = new closure_1_0(closure_1_2[14]).APIError(closure_0);
      callback2(aPIError);
      callback(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      v0();
      c3 = 0;
    }
    c3 = 0;
    return arg1;
  }), items2);
  let tmp14Result = null;
  if (null != stateFromStores) {
    obj = { top: true, style: null, children: null };
    obj[1] = tmp.safePadding;
    obj = { style: null, contentInset: null, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: null, children: null };
    obj[0] = tmp.flex;
    obj[1] = { top: 0 };
    obj[5] = tmp.contentContainer;
    obj1 = { style: null, value: null, icon: null, selected: true };
    obj1[0] = tmp.guildIcon;
    obj1[1] = stateFromStores.name;
    let guildIconURL = null;
    if (null != stateFromStores.icon) {
      let tmp17Result = tmp17(tmp3[17]);
      obj2 = { id: null, icon: null, canAnimate: true, size: 128 };
      ({ id: obj8[0], icon: obj8[1] } = stateFromStores);
      guildIconURL = tmp17Result.getGuildIconURL(obj2);
    }
    obj1[2] = guildIconURL;
    const items3 = [closure_10(hasBack(tmp3[16]), obj1), , , , , , ];
    let obj3 = { style: null, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: null };
    obj3[0] = tmp.guildName;
    obj3[4] = stateFromStores.name;
    items3[1] = closure_10(tmp2(tmp3[18]).Text, obj3);
    const obj4 = { style: null, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    obj4[0] = tmp.title;
    let intl = tmp2(tmp3[12]).intl;
    obj4[4] = intl.string(tmp2(tmp3[12]).t["8VRa7d"]);
    items3[2] = closure_10(tmp2(tmp3[18]).Text, obj4);
    const obj5 = { style: null, variant: "text-sm/medium", color: "text-default", children: null };
    obj5[0] = tmp.subTitle;
    const intl2 = tmp2(tmp3[12]).intl;
    obj5[3] = intl2.string(tmp2(tmp3[12]).t["+855Pm"]);
    items3[3] = closure_10(tmp2(tmp3[18]).Text, obj5);
    let obj6 = { style: null, label: null, value: null, error: null, onChangeText: null, onSubmitEditing: null, maxLength: 100, placeholder: null, returnKeyType: "done", autoFocus: true };
    obj6[0] = tmp.topicInput;
    tmp17Result = tmp17(tmp3[19]);
    const intl3 = tmp2(tmp3[12]).intl;
    obj6[1] = intl3.string(tmp2(tmp3[12]).t.bY20tU);
    obj6[2] = first;
    let firstFieldErrorMessage;
    if (obj1 != null) {
      firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
    }
    obj6[3] = firstFieldErrorMessage;
    obj6[4] = tmp5[1];
    obj6[5] = callback;
    const intl4 = tmp2(tmp3[12]).intl;
    obj6[7] = intl4.string(tmp2(tmp3[12]).t.xGOYA8);
    items3[4] = closure_10(tmp17Result, obj6);
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.buttonWrapper;
    const obj8 = { size: "md", text: null, onPress: null, loading: null, disabled: null, grow: true };
    obj8[1] = guildId.buttonText;
    obj8[2] = callback;
    obj8[3] = tmp8;
    obj8[4] = tmp8;
    obj7[1] = closure_10(tmp2(tmp3[20]).Button, obj8);
    items3[5] = closure_10(c7, obj7);
    let hasFieldErrorsResult;
    if (obj1 != null) {
      hasFieldErrorsResult = obj1.hasFieldErrors();
    }
    tmp14Result = null;
    if (hasFieldErrorsResult) {
      const obj9 = { style: null, children: null };
      obj9[0] = tmp.error;
      let anyErrorMessage;
      if (obj1 != null) {
        anyErrorMessage = obj1.getAnyErrorMessage();
      }
      obj9[1] = anyErrorMessage;
      tmp14Result = tmp14(tmp17(tmp3[21]), obj9);
      const tmp17Result1 = tmp17(tmp3[21]);
    }
    items3[6] = tmp14Result;
    obj[6] = items3;
    obj[2] = closure_11(c6, obj);
    tmp14Result = tmp14(tmp2(tmp3[15]).SafeAreaPaddingView, obj);
    const tmp15 = closure_11;
    const tmp16 = c6;
    const tmp18 = hasBack(tmp3[16]);
  }
  return tmp14Result;
};