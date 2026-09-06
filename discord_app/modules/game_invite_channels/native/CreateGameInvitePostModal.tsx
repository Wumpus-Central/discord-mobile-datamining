// === Module 12771: CreateGameInvitePostModal ===

// Module 12771 (CreateGameInvitePostModal)
import nativeDefault from "native" /* 576 */;
import util from "util" /* 1114 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1896 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 4527 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 7162 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 1957 */;

require = fn;
function CreateGameInvitePostContent(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let tags;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = closure_10();
  const insets = tags(6981)({ includeKeyboardHeight: true }).insets;
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
  parentChannel(12772);
  let obj = {
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      parentChannel(onSave[13]).transitionToThread(channel);
      const obj = parentChannel(onSave[13]);
      const result = parentChannel(onSave[10]).closeCreateGameInvitePostModal();
    }
  };
  const createGameInvitePost = obj.useCreateGameInvitePost(obj);
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
  obj = { style: null, children: null };
  const items3 = [tmp.container, { paddingTop: insets.top }];
  obj.style = items3;
  const obj1 = { style: tmp.header, children: null };
  const callback1 = noop.useCallback(() => {
    const obj = { parentChannel, onSave, title: null, tags: null };
    const intl = util.intl;
    obj.title = intl.string(util.t.HPu3kq);
    obj.tags = tags;
    obj.openLazy(asyncRequireImpl(11248, dependencyMap.paths), "ForumPostTagsActionSheet", obj);
  }, items2);
  const obj2 = { style: tmp.closeButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  let intl = parentChannel(1114).intl;
  obj2.accessibilityLabel = intl.string(parentChannel(1114).t.cpT0Cq);
  obj2.onPress = function onPress() {
    return parentChannel(onSave[10]).closeCreateGameInvitePostModal();
  };
  obj2.children = closure_7(parentChannel(5680).XSmallIcon, {});
  const items4 = [closure_7(parentChannel(5123).PressableOpacity, obj2), ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = parentChannel(1114).intl;
  obj3.children = intl2.string(tags(3483).tOsHsu);
  items4[1] = closure_7(parentChannel(4556).Text, obj3);
  obj1.children = items4;
  const items5 = [closure_8(View, obj1), , ];
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true };
  const intl3 = parentChannel(1114).intl;
  obj5.label = intl3.string(tags(3483)["/mEbGf"]);
  const intl4 = parentChannel(1114).intl;
  obj5.placeholder = intl4.string(tags(3483)["SU/IAE"]);
  obj5.value = tmp5;
  obj5.onChange = tmp6;
  obj5.maxLength = parentChannel(7272).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  const items6 = [closure_7(parentChannel(7085).TextArea, obj5), ];
  let tmp15Result = availableTags.length > 0;
  if (tmp15Result) {
    const obj6 = { label: null, subLabel: null, arrow: true, trailing: null, onPress: null };
    const intl5 = tmp9(1114).intl;
    obj6.label = intl5.string(tmp9(1114).t.KM6lRG);
    let joined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj6.subLabel = joined;
    const obj7 = { style: tmp.tagsTrailing, children: null };
    const obj8 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    obj7.children = tmp15(tmp9(4556).Text, obj8);
    obj6.trailing = tmp15(tmp14, obj7);
    obj6.onPress = callback1;
    tmp15Result = tmp15(tmp9(5605).TableRow, obj6);
  }
  const obj9 = { hasIcons: false, children: null };
  const items7 = [tmp15Result, ];
  const obj10 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl6 = tmp9(1114).intl;
  obj10.label = intl6.string(tags(3483).Xd2NFi);
  const intl7 = tmp9(1114).intl;
  obj10.subLabel = intl7.string(tags(3483).G91SYQ);
  obj10.value = voiceChatEnabled;
  obj10.onValueChange = callback;
  obj10.disabled = voiceToggleDisabled;
  items7[1] = closure_7(parentChannel(7201).TableSwitchRow, obj10);
  obj9.children = items7;
  items6[1] = closure_8(parentChannel(5687).TableRowGroup, obj9);
  obj4.children = items6;
  items5[1] = closure_8(View, obj4);
  const obj11 = { style: null, children: null };
  const items8 = [tmp.footer, { marginBottom: insets.bottom }];
  obj11.style = items8;
  const obj12 = { variant: "primary", size: "lg", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl8 = tmp9(1114).intl;
  obj12.text = intl8.string(parentChannel(1114).t.CumH4u);
  obj12.loading = submitting;
  obj12.disabled = !canSubmit;
  obj12.onPress = submit;
  obj11.children = closure_7(parentChannel(4975).Button, obj12);
  items5[2] = closure_7(View, obj11);
  obj.children = items5;
  return closure_8(View, obj);
}
const View = fn(17).View;
const jsxProd = fn(21);
({ jsx: closure_7, jsxs: closure_8 } = jsxProd);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return Promise.reject(error);
}
fn(4560);
let createStyles = { container: null, header: null, closeButton: null, body: null, tagsTrailing: null, footer: null };
createStyles = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
createStyles.container = createStyles;
createStyles.header = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj1 = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
createStyles.closeButton = { position: "absolute", left: nativeDefault.space.PX_16 };
let obj2 = { position: "absolute", left: nativeDefault.space.PX_16 };
createStyles.body = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.tagsTrailing = { flexDirection: "row", alignItems: "center", gap: 4 };
let obj3 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
createStyles.footer = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
let closure_10 = createStyles.createStyles(createStyles);
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default function CreateGameInvitePostModal(parentChannelId) {
  parentChannelId = parentChannelId.parentChannelId;
  let obj = parentChannelId(504);
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  parentChannelId(5630).useNavigatorBackPressHandler(() => {
    const result = parentChannelId(dependencyMap[10]).closeCreateGameInvitePostModal();
    return true;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      obj = { value: useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations, children: null };
      obj = { parentChannel: stateFromStores };
      obj.children = closure_7(CreateGameInvitePostContent, obj);
      tmp4 = closure_7(parentChannelId(7162).AnalyticsLocationProvider, obj);
    }
  }
  return tmp4;
};