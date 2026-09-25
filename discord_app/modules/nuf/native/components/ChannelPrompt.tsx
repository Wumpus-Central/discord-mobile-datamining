// === Module 12243: ChannelPrompt ===

// Module 12243 (ChannelPrompt)
import util from "util" /* 1115 */;
import NavigatorHeader from "NavigatorHeader" /* 5931 */;
import asyncGeneratorStep from "asyncGeneratorStep" /* 5 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import GuildChannelStore from "GuildChannelStore" /* 4464 */;
import GuildStore from "GuildStore" /* 2066 */;

require = fn;
get_ActivityIndicator = fn(17);
({ ScrollView: metroRequire, View: closure_7 } = get_ActivityIndicator);
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = { flex: { flex: 1 }, safePadding: { marginTop: fn(5989).NAV_BAR_HEIGHT, flex: 1 }, contentContainer: { paddingHorizontal: 16 }, guildIcon: { alignSelf: "center" }, guildName: { marginTop: 8, textAlign: "center" }, title: { marginTop: 16, textAlign: "center" }, subTitle: { marginTop: 8, textAlign: "center" }, topicInput: { marginTop: 24 }, buttonWrapper: { marginTop: 8 }, error: { marginTop: 4 } };
let closure_12 = createStyles.createStyles(obj2);
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
  const items = [GuildStore];
  const stateFromStores = guildId(hasSkip[9]).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp5 = onSuccess(value.useState(""), 2);
  value = tmp5[0];
  let obj = guildId(hasSkip[9]);
  [tmp8, c6] = onSuccess(value.useState(false), 2);
  const tmp7 = onSuccess(value.useState(false), 2);
  [obj2, c7] = onSuccess(value.useState(null), 2);
  const tmp9 = onSuccess(value.useState(null), 2);
  const navigation = guildId(hasSkip[10]).useNavigation();
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = value.useLayoutEffect(() => {
    if (hasBack) {
      let fn = NavigatorHeader.getHeaderBackButton(onCancel);
    } else {
      fn = () => null;
    }
    const obj2 = { headerLeft: fn, headerRight: null };
    if (hasSkip) {
      const intl = util.intl;
      let fn2 = NavigatorHeader.getHeaderTextButton(intl.string(util.t["5Wxrcd"]), onSuccess);
    } else {
      fn2 = () => null;
    }
    obj2.headerRight = fn2;
    navigation.setOptions(obj2);
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
      throw value;
    } else if (arg0 !== 2) {
      closure_129_4();
      c3 = 0;
    }
    return value;
  }), items2);
  let tmp14Result2 = null;
  if (null != stateFromStores) {
    const obj4 = { top: true, style: tmp.safePadding, children: null };
    const obj5 = { style: tmp.flex, contentInset: { top: 0 }, automaticallyAdjustContentInsets: false, keyboardShouldPersistTaps: "handled", alwaysBounceVertical: false, contentContainerStyle: tmp.contentContainer, children: null };
    const obj6 = { style: tmp.guildIcon, value: stateFromStores.name, icon: null, selected: true };
    let guildIconURL = null;
    if (null != stateFromStores.icon) {
      ({ id: obj8.id, icon: obj8.icon } = stateFromStores);
      guildIconURL = tmp17(tmp3[17]).getGuildIconURL({ id: null, icon: null, canAnimate: true, size: 128 });
      const obj7 = { id: null, icon: null, canAnimate: true, size: 128 };
      const tmp17Result = tmp17(tmp3[17]);
    }
    obj6.icon = guildIconURL;
    const items3 = [closure_10(hasBack(tmp3[16]), obj6), , , , , , ];
    const obj9 = { style: tmp.guildName, lineClamp: 1, variant: "text-sm/semibold", color: "mobile-text-heading-primary", children: stateFromStores.name };
    items3[1] = closure_10(tmp2(tmp3[18]).Text, obj9);
    const obj10 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
    let intl = tmp2(tmp3[12]).intl;
    obj10.children = intl.string(tmp2(tmp3[12]).t["8VRa7d"]);
    items3[2] = closure_10(tmp2(tmp3[18]).Text, obj10);
    const obj11 = { style: tmp.subTitle, variant: "text-sm/medium", color: "text-default", children: null };
    const intl2 = tmp2(tmp3[12]).intl;
    obj11.children = intl2.string(tmp2(tmp3[12]).t["+855Pm"]);
    items3[3] = closure_10(tmp2(tmp3[18]).Text, obj11);
    const obj12 = { style: tmp.topicInput, label: null, value: null, error: null, onChangeText: null, onSubmitEditing: null, maxLength: 100, placeholder: null, returnKeyType: "done", autoFocus: true };
    const tmp16 = c6;
    const tmp18 = hasBack(tmp3[16]);
    const intl3 = tmp2(tmp3[12]).intl;
    obj12.label = intl3.string(tmp2(tmp3[12]).t.bY20tU);
    obj12.value = value;
    let firstFieldErrorMessage;
    if (obj2 != null) {
      firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
    }
    obj12.error = firstFieldErrorMessage;
    obj12.onChangeText = tmp5[1];
    obj12.onSubmitEditing = callback;
    const intl4 = tmp2(tmp3[12]).intl;
    obj12.placeholder = intl4.string(tmp2(tmp3[12]).t.xGOYA8);
    items3[4] = closure_10(hasBack(tmp3[19]), obj12);
    const obj13 = { style: tmp.buttonWrapper, children: null };
    const obj14 = { size: "md", text: guildId.buttonText, onPress: callback, loading: tmp8, disabled: tmp8, grow: true };
    obj13.children = closure_10(tmp2(tmp3[20]).Button, obj14);
    items3[5] = closure_10(c7, obj13);
    let hasFieldErrorsResult;
    if (obj2 != null) {
      hasFieldErrorsResult = obj2.hasFieldErrors();
    }
    let tmp14Result = null;
    if (hasFieldErrorsResult) {
      const obj15 = { style: tmp.error, children: null };
      let anyErrorMessage;
      if (obj2 != null) {
        anyErrorMessage = obj2.getAnyErrorMessage();
      }
      obj15.children = anyErrorMessage;
      tmp14Result = closure_10(tmp17(tmp3[21]), obj15);
      const tmp17Result4 = tmp17(tmp3[21]);
    }
    items3[6] = tmp14Result;
    obj5.children = items3;
    obj4.children = closure_11(tmp16, obj5);
    tmp14Result2 = closure_10(tmp2(tmp3[15]).SafeAreaPaddingView, obj4);
    const tmp17Result3 = hasBack(tmp3[19]);
  }
  return tmp14Result2;
};