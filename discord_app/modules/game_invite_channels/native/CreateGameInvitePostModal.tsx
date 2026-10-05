// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModal.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import intl10 from "../../../intl/index.native.tsx";
import asyncRequire from "../../../../_runtime/01987_asyncRequire.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import SlowmodeStore from "../../../stores/SlowmodeStore.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles_mod from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let dependencyMap, parentChannelId, set;

let c9;
let metroImportAll;
let obj2;
let obj3;
let obj4;
let obj5;
let obj6;
let obj7;
function CreateGameInvitePostContent(parentChannel) {
  let canSubmit;
  let hasTagRequiredError;
  let intl;
  let intl2;
  let intl3;
  let intl4;
  let intl5;
  let intl6;
  let intl7;
  let intl8;
  let intl9;
  let isSlowmodeEnabled;
  let items3;
  let items4;
  let items5;
  let items6;
  let items7;
  let items8;
  let items9;
  let joined;
  let obj10;
  let obj11;
  let obj17;
  let onSave;
  let submit;
  let submitting;
  let tmp5;
  let tmp6;
  let voiceChatEnabled;
  let voiceToggleDisabled;
  parentChannel = parentChannel.parentChannel;
  let tags;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = closure_11();
  let tmp2 = tags;
  let tmp3 = dependencyMap;
  const insets = tags(6471)({ includeKeyboardHeight: true }).insets;
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  [tmp5, tmp6] = noMicTag(react.useState(""), 2);
  const tmp4 = noMicTag(react.useState(""), 2);
  const tmp7 = noMicTag(react.useState([]), 2);
  tags = tmp7[0];
  dependencyMap = tmp7[1];
  let items = [tags];
  const memo = react.useMemo(() => {
    set = new Set(first.map((id) => id.id));
    return set;
  }, items);
  let obj = parentChannel(12441);
  let obj2 = {
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      const obj = parentChannel(onSave[16]);
      obj.transitionToThread(channel);
      const obj2 = parentChannel(onSave[12]);
      const result = obj2.closeCreateGameInvitePostModal();
    },
  };
  const createGameInvitePost = obj.useCreateGameInvitePost(obj2);
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, hasTagRequiredError, isSlowmodeEnabled, submitting, canSubmit, submit } =
    createGameInvitePost);
  const items2 = [parentChannel, tags];
  const callback = react.useCallback((arg0) => {
    let closure_0 = arg0;
    if (null != noMicTag) {
      onSave((arr) => {
        let id;
        const found = arr.filter((id) => id.id !== id.id);
        let tmp3 = found;
        if (!closure_0) {
          const items = [];
          items[HermesBuiltin.arraySpread(items, found, 0)] = noMicTag;
          tmp3 = items;
        }
        return tmp3;
      });
    }
  }, items1);
  const obj3 = { style: items3, children: items5 };
  items3 = [tmp.container, { paddingTop: insets.top }];
  const obj4 = { style: tmp.header, children: items4 };
  const callback1 = react.useCallback(() => {
    let intl;
    const openLazy = ActionSheetActionCreatorsDefault.openLazy;
    const obj = { parentChannel, onSave, title: intl.string(intl10.t.HPu3kq), tags };
    ActionSheetActionCreatorsDefault;
    const tmp2 = asyncRequire(11060, dependencyMap.paths);
    intl = intl10.intl;
    openLazy(tmp2, "ForumPostTagsActionSheet", obj);
  }, items2);
  const obj5 = {
    style: tmp.closeButton,
    accessibilityRole: "button",
    accessibilityLabel: intl.string(parentChannel(1126).t.cpT0Cq),
    onPress() {
      const obj = parentChannel(onSave[12]);
      return obj.closeCreateGameInvitePostModal();
    },
    children: closure_8(parentChannel(6017).XSmallIcon, {}),
  };
  const PressableOpacity = parentChannel(5909).PressableOpacity;
  intl = parentChannel(1126).intl;
  items4 = [closure_8(PressableOpacity, obj5)];
  const obj6 = {
    variant: "text-md/semibold",
    color: "mobile-text-heading-primary",
    children: intl2.string(tmp2(3659).tOsHsu),
  };
  const Text = parentChannel(4886).Text;
  intl2 = parentChannel(1126).intl;
  items4[1] = closure_8(Text, obj6);
  items5 = [closure_9(View, obj4), ,];
  const obj7 = { style: tmp.body, children: items6 };
  const obj8 = {
    label: intl3.string(tmp2(3659)["/mEbGf"]),
    placeholder: intl4.string(tmp2(3659)["SU/IAE"]),
    value: tmp5,
    onChange: tmp6,
    maxLength: parentChannel(6775).GAME_INVITE_POST_MESSAGE_MAX_LENGTH,
    autoFocus: true,
  };
  const TextArea = parentChannel(6580).TextArea;
  intl3 = parentChannel(1126).intl;
  intl4 = parentChannel(1126).intl;
  items6 = [closure_8(TextArea, obj8), ,];
  let tmp15Result = availableTags.length > 0;
  const TableRowGroup = parentChannel(6074).TableRowGroup;
  if (tmp15Result) {
    const obj9 = {
      label: intl5.string(parentChannel(1126).t.KM6lRG),
      subLabel: joined,
      arrow: true,
      trailing: closure_8(View, obj10),
      onPress: callback1,
    };
    const TableRow = tmp9(5993).TableRow;
    intl5 = tmp9(1126).intl;
    joined = undefined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj10 = { style: tmp.tagsTrailing, children: closure_8(parentChannel(4886).Text, obj11) };
    obj11 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    tmp15Result = closure_8(TableRow, obj9);
  }
  const obj12 = { hasIcons: false, children: items7 };
  items7 = [tmp15Result];
  const obj13 = {
    label: intl6.string(tmp2(3659).Xd2NFi),
    subLabel: intl7.string(tmp2(3659).G91SYQ),
    value: voiceChatEnabled,
    onValueChange: callback,
    disabled: voiceToggleDisabled,
  };
  const TableSwitchRow = tmp9(6698).TableSwitchRow;
  intl6 = tmp9(1126).intl;
  intl7 = tmp9(1126).intl;
  items7[1] = closure_8(TableSwitchRow, obj13);
  items6[1] = closure_9(TableRowGroup, obj12);
  let tmp15Result3 = null;
  if (hasTagRequiredError) {
    const obj14 = {
      variant: "text-sm/medium",
      color: "text-feedback-critical",
      children: intl8.string(parentChannel(1126).t.xPfNQi),
    };
    const Text2 = tmp9(4886).Text;
    intl8 = tmp9(1126).intl;
    tmp15Result3 = closure_8(Text2, obj14);
  }
  items6[2] = tmp15Result3;
  items5[1] = closure_9(View, obj7);
  const obj15 = { style: items8, children: items9 };
  items8 = [tmp.footer, { marginBottom: insets.bottom }];
  let tmp15Result4 = null;
  if (isSlowmodeEnabled) {
    const obj16 = { style: tmp.slowmodeRow, children: closure_8(tmp2(11597), obj17) };
    obj17 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    tmp15Result4 = closure_8(View, obj16);
  }
  items9 = [tmp15Result4];
  const obj18 = {
    variant: "primary",
    size: "lg",
    grow: true,
    text: intl9.string(parentChannel(1126).t.CumH4u),
    loading: submitting,
    disabled: !canSubmit,
    onPress: submit,
  };
  const Button = tmp9(5594).Button;
  intl9 = tmp9(1126).intl;
  items9[1] = closure_8(Button, obj18);
  items5[2] = closure_9(View, obj15);
  return closure_9(View, obj3);
}
const View = react_native.View;
const SlowmodeType = SlowmodeStore.SlowmodeType;
({ jsx: metroImportAll, jsxs: c9 } = Fragment);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return reject(error);
}
let createStyles = createStyles_mod;
let obj = {
  container: obj2,
  header: obj3,
  closeButton: obj4,
  body: obj5,
  tagsTrailing: { flexDirection: "row", alignItems: "center", gap: 4 },
  footer: obj6,
  slowmodeRow: obj7,
};
obj2 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles = createStyles.createStyles;
obj3 = {
  height: 44,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj4 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj5 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj6 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
obj7 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles(obj);
let tmp4 = ReactCompilerGating.isReactCompilerEnabled()
  ? (parentChannelId) => {
      let first;
      let tmp6;
      let tmp7;
      let tmp8;
      let obj = parentChannelId(576);
      const cResult = obj.c(10);
      parentChannelId = parentChannelId.parentChannelId;
      const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
      if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
        const items = [ChannelStore];
        cResult[0] = items;
        first = items;
      } else {
        first = cResult[0];
      }
      if (cResult[1] !== parentChannelId) {
        const fn = function o() {
          return ChannelStore.getChannel(parentChannelId);
        };
        const items1 = [parentChannelId];
        cResult[1] = parentChannelId;
        cResult[2] = fn;
        cResult[3] = items1;
        tmp7 = items1;
        tmp6 = fn;
      } else {
        tmp6 = cResult[2];
        tmp7 = cResult[3];
      }
      const tmpResult = parentChannelId(504);
      const stateFromStores = tmpResult.useStateFromStores(first, tmp6, tmp7);
      if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
        const fn2 = function v() {
          const obj = parentChannelId(dependencyMap[12]);
          const result = obj.closeCreateGameInvitePostModal();
          return true;
        };
        cResult[4] = fn2;
        tmp8 = fn2;
      } else {
        tmp8 = cResult[4];
      }
      const tmpResult2 = parentChannelId(6016);
      tmpResult2.useNavigatorBackPressHandler(tmp8);
      let tmp10 = null;
      if (null != stateFromStores) {
        tmp10 = null;
        if (stateFromStores.isGameInvitesChannel()) {
          let tmp11;
          if (cResult[5] !== stateFromStores) {
            const obj2 = { parentChannel: stateFromStores };
            const tmp14 = closure_8(CreateGameInvitePostContent, obj2);
            cResult[5] = stateFromStores;
            cResult[6] = tmp14;
            tmp11 = tmp14;
          } else {
            tmp11 = cResult[6];
          }
          if (cResult[7] === analyticsLocations) {
            let tmp15;
            if (cResult[8] === tmp11) {
              tmp15 = cResult[9];
            }
            tmp10 = tmp15;
          }
          const obj3 = { value: analyticsLocations, children: tmp11 };
          const tmp17 = closure_8(parentChannelId(6657).AnalyticsLocationProvider, obj3);
          cResult[7] = analyticsLocations;
          cResult[8] = tmp11;
          cResult[9] = tmp17;
          tmp15 = tmp17;
        }
      }
      return tmp10;
    }
  : (parentChannelId) => {
      let obj4;
      parentChannelId = parentChannelId.parentChannelId;
      const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
      let obj = parentChannelId(504);
      const items = [ChannelStore];
      const items1 = [parentChannelId];
      const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
      const obj3 = parentChannelId(6016);
      obj3.useNavigatorBackPressHandler(() => {
        const obj = parentChannelId(dependencyMap[12]);
        const result = obj.closeCreateGameInvitePostModal();
        return true;
      });
      let tmp4 = null;
      const tmp2 = parentChannelId;
      if (null != stateFromStores) {
        tmp4 = null;
        if (stateFromStores.isGameInvitesChannel()) {
          const obj2 = { value: analyticsLocations, children: closure_8(CreateGameInvitePostContent, obj4) };
          obj4 = { parentChannel: stateFromStores };
          const AnalyticsLocationProvider = tmp2(6657).AnalyticsLocationProvider;
          tmp4 = closure_8(AnalyticsLocationProvider, obj2);
        }
      }
      return tmp4;
    };
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default tmp4;
