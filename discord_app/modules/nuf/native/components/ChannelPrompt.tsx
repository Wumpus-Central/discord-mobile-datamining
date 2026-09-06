// === Module 12745: ChannelPrompt ===

// Module 12745 (ChannelPrompt)
import util from "util" /* 1114 */;
import NavigatorHeader from "NavigatorHeader" /* 5624 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 2012 */;
import GuildStore from "GuildStore" /* 1979 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = { flex: { flex: 1 }, safePadding: null, contentContainer: null, guildIcon: null, guildName: null, title: null, subTitle: null, topicInput: null, buttonWrapper: null, error: null };
createStyles = { marginTop: fn(5682).NAV_BAR_HEIGHT, flex: 1 };
createStyles.safePadding = createStyles;
createStyles.contentContainer = { paddingHorizontal: 16 };
createStyles.guildIcon = { alignSelf: "center" };
createStyles.guildName = { marginTop: 8, textAlign: "center" };
createStyles.title = { marginTop: 16, textAlign: "center" };
createStyles.subTitle = { marginTop: 8, textAlign: "center" };
createStyles.topicInput = { marginTop: 24 };
createStyles.buttonWrapper = { marginTop: 8 };
createStyles.error = { marginTop: 4 };
let closure_12 = createStyles.createStyles(createStyles);
const size = fn(2);
const result = size.fileFinishedImporting("modules/nuf/native/components/ChannelPrompt.tsx");

export default function ChannelPrompt(guildId) {
  guildId = guildId.guildId;
  const hasBack = guildId.hasBack;
  const hasSkip = guildId.hasSkip;
  const onCancel = guildId.onCancel;
  const onSuccess = guildId.onSuccess;
  value = undefined;
  c6 = undefined;
  c7 = undefined;
  const tmp = closure_12();
  let obj = guildId(hasSkip[9]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp5 = onSuccess(value.useState(""), 2);
  value = tmp5[0];
  [tmp8, c6] = onSuccess(value.useState(false), 2);
  const tmp7 = onSuccess(value.useState(false), 2);
  [obj2, c7] = onSuccess(value.useState(null), 2);
  obj2 = guildId(hasSkip[10]);
  const navigation = obj2.useNavigation();
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = value.useLayoutEffect(() => {
    if (hasBack) {
      let obj = NavigatorHeader;
      let fn = obj.getHeaderBackButton(onCancel);
    } else {
      fn = () => null;
    }
    obj = { headerLeft: fn, headerRight: null };
    if (hasSkip) {
      const intl = util.intl;
      let fn2 = NavigatorHeader.getHeaderTextButton(intl.string(util.t["5Wxrcd"]), onSuccess);
    } else {
      fn2 = () => null;
    }
    obj.headerRight = fn2;
    navigation.setOptions(obj);
  }, items1);
  const items2 = [guildId, onSuccess, value];
  const callback = value.useCallback(onCancel(function*() {
    _undefined2(null);
    _undefined(true);
    defaultChannel = defaultChannel.getDefaultChannel(guildId);
    const intl = guildId(tmp33[12]).intl;
    if (defaultChannel != null) {
      const parent_id = defaultChannel.parent_id;
    }
    yield tmp3(tmp33[13]).createTextChannel(guildId, topic, parent_id, intl.formatToPlainString(closure_0(tmp33[12]).t.V4lepJ, { topic }));
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp33;
      const aPIError = new guildId(tmp33[14]).APIError(closure_128_0);
      closure_129_7(aPIError);
      closure_129_6(false);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_4();
      c3 = 0;
    }
    return arg1;
  }), items2);
  let tmp14Result = null;
  if (null != stateFromStores) {
    obj = { top: true, style: tmp.safePadding, children: null };
    obj = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
    const obj1 = { style: tmp.guildIcon, value: stateFromStores.name, icon: null, selected: true };
    let guildIconURL = null;
    if (null != stateFromStores.icon) {
      let tmp17Result = tmp17(tmp3[17]);
      obj2 = { id: null, icon: null, canAnimate: true, size: 128 };
      ({ id: obj8.id, icon: obj8.icon } = stateFromStores);
      guildIconURL = tmp17Result.getGuildIconURL(obj2);
    }
    obj1.icon = guildIconURL;
    const items3 = [closure_10(hasBack(tmp3[16]), obj1), , , , , , ];
    let obj3 = { style: tmp.guildName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items3[1] = closure_10(tmp2(tmp3[18]).Text, obj3);
    const obj4 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj4.children = intl.string(tmp2(tmp3[12]).t["8VRa7d"]);
    items3[2] = closure_10(tmp2(tmp3[18]).Text, obj4);
    const obj5 = { style: tmp.subTitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[12]).intl;
    obj5.children = intl2.string(tmp2(tmp3[12]).t["+855Pm"]);
    items3[3] = closure_10(tmp2(tmp3[18]).Text, obj5);
    const obj6 = { style: tmp.topicInput, label: null, value: null, error: null, onChangeText: null, onSubmitEditing: null, maxLength: 100, placeholder: null, returnKeyType: "done", autoFocus: true };
    tmp17Result = tmp17(tmp3[19]);
    const intl3 = tmp2(tmp3[12]).intl;
    obj6.label = intl3.string(tmp2(tmp3[12]).t.bY20tU);
    obj6.value = value;
    let firstFieldErrorMessage;
    if (obj1 != null) {
      firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
    }
    obj6.error = firstFieldErrorMessage;
    obj6.onChangeText = tmp5[1];
    obj6.onSubmitEditing = callback;
    const intl4 = tmp2(tmp3[12]).intl;
    obj6.placeholder = intl4.string(tmp2(tmp3[12]).t.xGOYA8);
    items3[4] = closure_10(tmp17Result, obj6);
    const obj7 = { style: tmp.buttonWrapper, children: null };
    const obj8 = { size: "md", text: guildId.buttonText, onPress: callback, loading: tmp8, disabled: tmp8, grow: true };
    obj7.children = closure_10(tmp2(tmp3[20]).Button, obj8);
    items3[5] = closure_10(c7, obj7);
    let hasFieldErrorsResult;
    if (obj1 != null) {
      hasFieldErrorsResult = obj1.hasFieldErrors();
    }
    tmp14Result = null;
    if (hasFieldErrorsResult) {
      const obj9 = { style: tmp.error, children: null };
      let anyErrorMessage;
      if (obj1 != null) {
        anyErrorMessage = obj1.getAnyErrorMessage();
      }
      obj9.children = anyErrorMessage;
      tmp14Result = tmp14(tmp17(tmp3[21]), obj9);
      const tmp17Result1 = tmp17(tmp3[21]);
    }
    items3[6] = tmp14Result;
    obj.children = items3;
    obj.children = closure_11(c6, obj);
    tmp14Result = tmp14(tmp2(tmp3[15]).SafeAreaPaddingView, obj);
    const tmp18 = hasBack(tmp3[16]);
  }
  return tmp14Result;
};