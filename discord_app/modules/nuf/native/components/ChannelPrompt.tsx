// discord_app/modules/nuf/native/components/ChannelPrompt.tsx
import intl5 from "../../../../intl/index.native.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import NavigatorConstants from "../../../../design/components/Navigator/native/NavigatorConstants.native.tsx";
import _asyncToGenerator from "../../../../../_runtime/metro/00005__asyncToGenerator.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../../_runtime/00019_react.js";
import react_native from "../../../../../_runtime/00017_react-native.js";
import GuildChannelStore from "../../../../stores/GuildChannelStore.tsx";
import GuildStore from "../../../../stores/GuildStore.tsx";
import Fragment from "../../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../../design/components/Styles/native/createStyles.tsx";
import size from "../../../../../_runtime/metro/00002__.js";

let c4, c5, navigation;

let c10;
let metroImportDefault;
let metroRequire;
let obj2;
let unpackModuleId;
({ ScrollView: metroRequire, View: metroImportDefault } = react_native);
({ jsx: c10, jsxs: unpackModuleId } = Fragment);
let obj = {
  flex: { flex: 1 },
  safePadding: obj2,
  contentContainer: { paddingHorizontal: 16 },
  guildIcon: { alignSelf: "center" },
  guildName: { marginTop: 8, textAlign: "center" },
  title: { marginTop: 16, textAlign: "center" },
  subTitle: { marginTop: 8, textAlign: "center" },
  topicInput: { marginTop: 24 },
  buttonWrapper: { marginTop: 8 },
  error: { marginTop: 4 },
};
obj2 = { marginTop: NavigatorConstants.NAV_BAR_HEIGHT, flex: 1 };
let closure_12 = createStyles.createStyles(obj);
const result = size.fileFinishedImporting("modules/nuf/native/components/ChannelPrompt.tsx");

export default function ChannelPrompt(guildId) {
  let _undefined;
  let _undefined2;
  let anyErrorMessage;
  let c6;
  let c7;
  let first;
  let firstFieldErrorMessage;
  let guildIconURL;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let items3;
  let obj14;
  let obj2;
  let obj5;
  let tmp17;
  let tmp9;
  guildId = guildId.guildId;
  const hasBack = guildId.hasBack;
  let hasSkip = guildId.hasSkip;
  const onCancel = guildId.onCancel;
  const onSuccess = guildId.onSuccess;
  let value;
  c6 = undefined;
  c7 = undefined;
  const buttonText = guildId.buttonText;
  const tmp = closure_12();
  const tmp3 = hasSkip;
  let obj = guildId(hasSkip[9]);
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const tmp5 = onSuccess(value.useState(""), 2);
  value = tmp5[0];
  const tmp7 = tmp5[1];
  const tmp8 = onSuccess(value.useState(false), 2);
  [tmp9, c6] = tmp8;
  [obj2, c7] = onSuccess(value.useState(null), 2);
  const tmp10 = onSuccess(value.useState(null), 2);
  let obj3 = guildId(hasSkip[10]);
  navigation = obj3.useNavigation();
  const items1 = [navigation, hasBack, hasSkip, onCancel, onSuccess];
  const layoutEffect = value.useLayoutEffect(() => {
    let fn;
    let fn2;
    const setOptions = navigation.setOptions;
    if (hasBack) {
      const obj = NavigatorHeader;
      fn = obj.getHeaderBackButton(onCancel);
    } else {
      fn = () => null;
    }
    const obj2 = { headerLeft: fn, headerRight: fn2 };
    if (hasSkip) {
      const getHeaderTextButton = NavigatorHeader.getHeaderTextButton;
      NavigatorHeader;
      const intl = intl5.intl;
      fn2 = getHeaderTextButton(intl.string(intl5.t["5Wxrcd"]), onSuccess);
    } else {
      fn2 = () => null;
    }
    setOptions(obj2);
  }, items1);
  const items2 = [guildId, onSuccess, value];
  const callback = value.useCallback(
    onCancel(function* () {
      let closure_0;
      let closure_1;
      let closure_2;
      let defaultChannel;
      if (c5 === 2) {
        c5 = 3;
        throw new TypeError("Generator functions may not be called on executing generators");
      } else if (tmp3 === 3) {
        if (arg0 === 1) {
          throw value;
        } else if (arg0 === 2) {
          const obj2 = { value, done: true };
          return obj2;
        } else {
          return { value: "IconComponent", done: null };
        }
      } else {
        let c3;
        try {
          c5 = 2;
          if (0 === c4) {
            if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c5 = 3;
              const obj3 = { value, done: true };
              return obj3;
            } else {
              guildId = tmp4;
              _undefined2(null);
              _undefined(true);
              defaultChannel = defaultChannel.getDefaultChannel(guildId);
              c3 = 1;
              const intl = guildId(hasSkip[12]).intl;
              const obj4 = { topic };
              const formatToPlainStringResult = intl.formatToPlainString(guildId(hasSkip[12]).t.V4lepJ, obj4);
              const tmp50 = tmp(hasSkip[13]);
              let parent_id;
              const createTextChannel = tmp50.createTextChannel;
              if (defaultChannel != null) {
                parent_id = defaultChannel.parent_id;
              }
              c4 = 2;
              c5 = 1;
              const obj5 = {
                value: createTextChannel(guildId, topic, parent_id, formatToPlainStringResult),
                done: false,
              };
              return obj5;
            }
          } else {
            if (1 === c4) {
              c3 = 0;
              guildId = hasSkip;
              const self = this;
              const self2 = this;
              const aPIError = new guildId(hasSkip[14]).APIError(guildId);
              closure_129_7(aPIError);
            } else if (arg0 === 1) {
              c5 = 3;
              throw value;
            } else if (arg0 === 2) {
              c3 = 0;
              c5 = 3;
              const obj = { value, done: true };
              return obj;
            } else {
              closure_129_4();
              c3 = 0;
            }
            closure_129_6(false);
            c5 = 3;
            return { value: "IconComponent", done: null };
          }
        } catch (tmp28) {
          hasSkip = tmp28;
          if (0 === c3) {
            c5 = 3;
            throw tmp28;
          } else {
            c4 = 1;
          }
        }
      }
    }),
    items2,
  );
  let tmp15Result2 = null;
  if (null != stateFromStores) {
    let obj4 = { top: true, style: tmp.safePadding, children: closure_11(tmp17, obj5) };
    obj5 = {
      style: tmp.flex,
      contentInset: { top: 0 },
      automaticallyAdjustContentInsets: false,
      keyboardShouldPersistTaps: "handled",
      alwaysBounceVertical: false,
      contentContainerStyle: tmp.contentContainer,
      children: items3,
    };
    const SafeAreaPaddingView = tmp2(tmp3[15]).SafeAreaPaddingView;
    const obj6 = { style: tmp.guildIcon, value: stateFromStores.name, icon: guildIconURL, selected: true };
    guildIconURL = null;
    tmp17 = c6;
    const tmp19 = hasBack(tmp3[16]);
    if (null != stateFromStores.icon) {
      const obj7 = { id: null, icon: null, canAnimate: true, size: 128 };
      ({ id: obj8.id, icon: obj8.icon } = stateFromStores);
      const tmp18Result = hasBack(tmp3[17]);
      guildIconURL = tmp18Result.getGuildIconURL(obj7);
    }
    items3 = [closure_10(tmp19, obj6), , , , , ,];
    const obj9 = {
      style: tmp.guildName,
      lineClamp: 1,
      variant: "text-sm/semibold",
      color: "mobile-text-heading-primary",
      children: stateFromStores.name,
    };
    items3[1] = closure_10(guildId(tmp3[18]).Text, obj9);
    const obj10 = {
      style: tmp.title,
      accessibilityRole: "header",
      variant: "heading-xl/extrabold",
      color: "mobile-text-heading-primary",
      children: intl.string(guildId(tmp3[12]).t["8VRa7d"]),
    };
    const Text = tmp2(tmp3[18]).Text;
    intl = tmp2(tmp3[12]).intl;
    items3[2] = closure_10(Text, obj10);
    const obj11 = {
      style: tmp.subTitle,
      variant: "text-sm/medium",
      color: "text-default",
      children: intl2.string(guildId(tmp3[12]).t["+855Pm"]),
    };
    const Text2 = tmp2(tmp3[18]).Text;
    intl2 = tmp2(tmp3[12]).intl;
    items3[3] = closure_10(Text2, obj11);
    const obj12 = {
      style: tmp.topicInput,
      label: intl3.string(guildId(tmp3[12]).t.bY20tU),
      value,
      error: firstFieldErrorMessage,
      onChangeText: tmp7,
      onSubmitEditing: callback,
      maxLength: 100,
      placeholder: intl4.string(guildId(tmp3[12]).t.xGOYA8),
      returnKeyType: "done",
      autoFocus: true,
    };
    const tmp18Result3 = hasBack(tmp3[19]);
    intl3 = tmp2(tmp3[12]).intl;
    firstFieldErrorMessage = undefined;
    if (obj2 != null) {
      firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
    }
    intl4 = tmp2(tmp3[12]).intl;
    items3[4] = closure_10(tmp18Result3, obj12);
    const obj13 = { style: tmp.buttonWrapper, children: closure_10(guildId(tmp3[20]).Button, obj14) };
    obj14 = { size: "md", text: buttonText, onPress: callback, loading: tmp9, disabled: tmp9, grow: true };
    items3[5] = closure_10(c7, obj13);
    let hasFieldErrorsResult;
    if (obj2 != null) {
      hasFieldErrorsResult = obj2.hasFieldErrors();
    }
    let tmp15Result = null;
    if (hasFieldErrorsResult) {
      const obj15 = { style: tmp.error, children: anyErrorMessage };
      anyErrorMessage = undefined;
      const tmp18Result4 = hasBack(tmp3[21]);
      if (obj2 != null) {
        anyErrorMessage = obj2.getAnyErrorMessage();
      }
      tmp15Result = closure_10(tmp18Result4, obj15);
    }
    items3[6] = tmp15Result;
    tmp15Result2 = closure_10(SafeAreaPaddingView, obj4);
  }
  return tmp15Result2;
}
