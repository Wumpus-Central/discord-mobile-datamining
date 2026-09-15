// discord_app/modules/game_invite_channels/native/CreateGameInvitePostModal.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../intl/index.native.tsx";
import asyncRequireImpl from "../../../../_runtime/01897_asyncRequireImpl.js";
import ActionSheetActionCreatorsDefault from "../../action_sheet/native/ActionSheetActionCreators.tsx";
import useAnalyticsLocationsDefault from "../../app_analytics/useAnalyticsLocations.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import ChannelStore from "../../../stores/ChannelStore.tsx";

require = fn;
function CreateGameInvitePostContent(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let tags;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = closure_10();
  const insets = tags(7088)({ includeKeyboardHeight: true }).insets;
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  [tmp5, tmp6] = noMicTag(noop.useState(""), 2);
  const tmp7 = noMicTag(noop.useState([]), 2);
  tags = tmp7[0];
  dependencyMap = tmp7[1];
  let items = [tags];
  const memo = noop.useMemo(() => new Set(first.map((id) => id.id)), items);
  const tmp4 = noMicTag(noop.useState(""), 2);
  const createGameInvitePost = parentChannel(12907).useCreateGameInvitePost({
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      parentChannel(onSave[13]).transitionToThread(channel);
      const obj = parentChannel(onSave[13]);
      const result = parentChannel(onSave[10]).closeCreateGameInvitePostModal();
    },
  });
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, submitting, canSubmit, submit } = createGameInvitePost);
  const items2 = [parentChannel, tags];
  const callback = noop.useCallback((arg0) => {
    closure_0 = arg0;
    if (null != noMicTag) {
      onSave((arr) => {
        const found = arr.filter((id) => id.id !== id.id);
        let tmp2 = found;
        if (!closure_0) {
          const items = [];
          items[HermesBuiltin.arraySpread(found, 0)] = noMicTag;
          tmp2 = items;
        }
        return tmp2;
      });
    }
  }, items1);
  const obj3 = { style: null, children: null };
  const items3 = [tmp.container, { paddingTop: insets.top }];
  obj3.style = items3;
  const obj4 = { style: tmp.header, children: null };
  const callback1 = noop.useCallback(() => {
    const obj2 = { parentChannel, onSave, title: null, tags: null };
    const obj = ActionSheetActionCreatorsDefault;
    const intl = util.intl;
    obj2.title = intl.string(util.t.HPu3kq);
    obj2.tags = tags;
    obj.openLazy(asyncRequireImpl(11386, dependencyMap.paths), "ForumPostTagsActionSheet", obj2);
  }, items2);
  const obj5 = {
    style: tmp.closeButton,
    accessibilityRole: "button",
    accessibilityLabel: null,
    onPress: null,
    children: null,
  };
  let intl = parentChannel(1115).intl;
  obj5.accessibilityLabel = intl.string(parentChannel(1115).t.cpT0Cq);
  obj5.onPress = function onPress() {
    return parentChannel(onSave[10]).closeCreateGameInvitePostModal();
  };
  obj5.children = closure_7(parentChannel(5765).XSmallIcon, {});
  const items4 = [closure_7(parentChannel(5207).PressableOpacity, obj5)];
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = parentChannel(1115).intl;
  obj6.children = intl2.string(tags(3527).tOsHsu);
  items4[1] = closure_7(parentChannel(4635).Text, obj6);
  obj4.children = items4;
  const items5 = [closure_8(View, obj4), ,];
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true };
  const intl3 = parentChannel(1115).intl;
  obj8.label = intl3.string(tags(3527)["/mEbGf"]);
  const intl4 = parentChannel(1115).intl;
  obj8.placeholder = intl4.string(tags(3527)["SU/IAE"]);
  obj8.value = tmp5;
  obj8.onChange = tmp6;
  obj8.maxLength = parentChannel(7379).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  const items6 = [closure_7(parentChannel(7192).TextArea, obj8)];
  let tmp15Result = availableTags.length > 0;
  if (tmp15Result) {
    const obj9 = { label: null, subLabel: null, arrow: true, trailing: null, onPress: null };
    const intl5 = tmp9(1115).intl;
    obj9.label = intl5.string(tmp9(1115).t.KM6lRG);
    let joined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj9.subLabel = joined;
    const obj10 = { style: tmp.tagsTrailing, children: null };
    const obj11 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    obj10.children = closure_7(tmp9(4635).Text, obj11);
    obj9.trailing = closure_7(View, obj10);
    obj9.onPress = callback1;
    tmp15Result = closure_7(tmp9(5690).TableRow, obj9);
  }
  const obj12 = { hasIcons: false, children: null };
  const items7 = [tmp15Result];
  const obj13 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl6 = tmp9(1115).intl;
  obj13.label = intl6.string(tags(3527).Xd2NFi);
  const intl7 = tmp9(1115).intl;
  obj13.subLabel = intl7.string(tags(3527).G91SYQ);
  obj13.value = voiceChatEnabled;
  obj13.onValueChange = callback;
  obj13.disabled = voiceToggleDisabled;
  items7[1] = closure_7(parentChannel(7307).TableSwitchRow, obj13);
  obj12.children = items7;
  items6[1] = closure_8(parentChannel(5772).TableRowGroup, obj12);
  obj7.children = items6;
  items5[1] = closure_8(View, obj7);
  const obj14 = { style: null, children: null };
  const items8 = [tmp.footer, { marginBottom: insets.bottom }];
  obj14.style = items8;
  const obj15 = {
    variant: "primary",
    size: "lg",
    grow: true,
    text: null,
    loading: null,
    disabled: null,
    onPress: null,
  };
  const intl8 = tmp9(1115).intl;
  obj15.text = intl8.string(parentChannel(1115).t.CumH4u);
  obj15.loading = submitting;
  obj15.disabled = !canSubmit;
  obj15.onPress = submit;
  obj14.children = closure_7(parentChannel(5059).Button, obj15);
  items5[2] = closure_7(View, obj14);
  obj3.children = items5;
  return closure_8(View, obj3);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return Promise.reject(error);
}
const createStyles = fn(4639);
let obj2 = {
  container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW },
  header: null,
  closeButton: null,
  body: null,
  tagsTrailing: null,
  footer: null,
};
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = {
  height: 44,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
let obj4 = {
  height: 44,
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  borderBottomWidth: 1,
  borderBottomColor: nativeDefault.colors.BORDER_SUBTLE,
};
obj2.closeButton = { position: "absolute", left: nativeDefault.space.PX_16 };
let obj5 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.tagsTrailing = { flexDirection: "row", alignItems: "center", gap: 4 };
let obj6 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.footer = {
  borderTopWidth: 1,
  borderTopColor: nativeDefault.colors.BORDER_SUBTLE,
  padding: nativeDefault.space.PX_16,
};
let closure_10 = createStyles.createStyles(obj2);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default function CreateGameInvitePostModal(parentChannelId) {
  parentChannelId = parentChannelId.parentChannelId;
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = parentChannelId(504).useStateFromStores(
    items,
    () => ChannelStore.getChannel(parentChannelId),
    items1,
  );
  const obj = parentChannelId(504);
  const tmp2 = parentChannelId;
  parentChannelId(5715).useNavigatorBackPressHandler(() => {
    const result = parentChannelId(dependencyMap[10]).closeCreateGameInvitePostModal();
    return true;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      const obj2 = {
        value: useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations,
        children: null,
      };
      const obj4 = { parentChannel: stateFromStores };
      obj2.children = closure_7(CreateGameInvitePostContent, obj4);
      tmp4 = closure_7(tmp2(7269).AnalyticsLocationProvider, obj2);
    }
  }
  return tmp4;
}
