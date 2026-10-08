// === Module 12551: CreateGameInvitePostModal ===

// Module 12551 (CreateGameInvitePostModal)
import nativeDefault from "native" /* 587 */;
import util from "util" /* 1126 */;
import asyncRequireImpl from "asyncRequireImpl" /* 1999 */;
import ActionSheetActionCreatorsDefault from "ActionSheetActionCreators" /* 5054 */;
import useAnalyticsLocationsDefault from "useAnalyticsLocations" /* 6841 */;
import _slicedToArray from "module_32" /* 32 */;
import noop from "module_19" /* 19 */;
import ChannelStore from "ChannelStore" /* 2063 */;

require = fn;
function CreateGameInvitePostContent(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let tags;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = closure_11();
  const insets = tags(6656)({ includeKeyboardHeight: true }).insets;
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
  const createGameInvitePost = parentChannel(12552).useCreateGameInvitePost({
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      parentChannel(onSave[16]).transitionToThread(channel);
      const obj = parentChannel(onSave[16]);
      const result = parentChannel(onSave[12]).closeCreateGameInvitePostModal();
    }
  });
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, hasTagRequiredError, isSlowmodeEnabled, submitting, canSubmit, submit } = createGameInvitePost);
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
    obj.openLazy(asyncRequireImpl(10438, dependencyMap.paths), "ForumPostTagsActionSheet", obj2);
  }, items2);
  const obj5 = { style: tmp.closeButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  let intl = parentChannel(1126).intl;
  obj5.accessibilityLabel = intl.string(parentChannel(1126).t.cpT0Cq);
  obj5.onPress = function onPress() {
    return parentChannel(onSave[12]).closeCreateGameInvitePostModal();
  };
  obj5.children = closure_8(parentChannel(6210).XSmallIcon, {});
  const items4 = [closure_8(parentChannel(6189).PressableOpacity, obj5), ];
  const obj6 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = parentChannel(1126).intl;
  obj6.children = intl2.string(tags(3763).tOsHsu);
  items4[1] = closure_8(parentChannel(5086).Text, obj6);
  obj4.children = items4;
  const items5 = [closure_9(View, obj4), , ];
  const obj7 = { style: tmp.body, children: null };
  const obj8 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true };
  const intl3 = parentChannel(1126).intl;
  obj8.label = intl3.string(tags(3763)["/mEbGf"]);
  const intl4 = parentChannel(1126).intl;
  obj8.placeholder = intl4.string(tags(3763)["SU/IAE"]);
  obj8.value = tmp5;
  obj8.onChange = tmp6;
  obj8.maxLength = parentChannel(6960).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  const items6 = [closure_8(parentChannel(6763).TextArea, obj8), , ];
  let tmp15Result = availableTags.length > 0;
  if (tmp15Result) {
    const obj9 = { label: null, subLabel: null, arrow: true, trailing: null, onPress: null };
    const intl5 = tmp9(1126).intl;
    obj9.label = intl5.string(tmp9(1126).t.KM6lRG);
    let joined;
    if (tags.length > 0) {
      const mapped = tags.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj9.subLabel = joined;
    const obj10 = { style: tmp.tagsTrailing, children: null };
    const obj11 = { variant: "text-md/medium", color: "text-muted", children: tags.length };
    obj10.children = closure_8(tmp9(5086).Text, obj11);
    obj9.trailing = closure_8(View, obj10);
    obj9.onPress = callback1;
    tmp15Result = closure_8(tmp9(6184).TableRow, obj9);
  }
  const obj12 = { hasIcons: false, children: null };
  const items7 = [tmp15Result, ];
  const obj13 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl6 = tmp9(1126).intl;
  obj13.label = intl6.string(tags(3763).Xd2NFi);
  const intl7 = tmp9(1126).intl;
  obj13.subLabel = intl7.string(tags(3763).G91SYQ);
  obj13.value = voiceChatEnabled;
  obj13.onValueChange = callback;
  obj13.disabled = voiceToggleDisabled;
  items7[1] = closure_8(parentChannel(6882).TableSwitchRow, obj13);
  obj12.children = items7;
  items6[1] = closure_9(parentChannel(6267).TableRowGroup, obj12);
  let tmp15Result3 = null;
  if (hasTagRequiredError) {
    const obj14 = { variant: "text-sm/medium", color: "text-feedback-critical", children: null };
    const intl8 = tmp9(1126).intl;
    obj14.children = intl8.string(tmp9(1126).t.xPfNQi);
    tmp15Result3 = closure_8(tmp9(5086).Text, obj14);
  }
  items6[2] = tmp15Result3;
  obj7.children = items6;
  items5[1] = closure_9(View, obj7);
  const obj15 = { style: null, children: null };
  const items8 = [tmp.footer, { marginBottom: insets.bottom }];
  obj15.style = items8;
  let tmp15Result4 = null;
  if (isSlowmodeEnabled) {
    const obj16 = { style: tmp.slowmodeRow, children: null };
    const obj17 = { channel: parentChannel, hasTypingText: false, slowmodeType: SlowmodeType.CreateThread };
    obj16.children = closure_8(tmp2(11675), obj17);
    tmp15Result4 = closure_8(View, obj16);
  }
  const items9 = [tmp15Result4, ];
  const obj18 = { variant: "primary", size: "lg", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl9 = tmp9(1126).intl;
  obj18.text = intl9.string(parentChannel(1126).t.CumH4u);
  obj18.loading = submitting;
  obj18.disabled = !canSubmit;
  obj18.onPress = submit;
  items9[1] = closure_8(parentChannel(5375).Button, obj18);
  obj15.children = items9;
  items5[2] = closure_9(View, obj15);
  obj3.children = items5;
  return closure_9(View, obj3);
}
const View = fn(17).View;
const SlowmodeType = fn(7363).SlowmodeType;
const jsxProd = fn(21);
({ jsx: closure_8, jsxs: closure_9 } = jsxProd);
function NOOP_UPLOAD() {
  const error = new Error("Game invite posts do not support attachments");
  return Promise.reject(error);
}
const createStyles = fn(5090);
let obj2 = { container: { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW }, header: null, closeButton: null, body: null, tagsTrailing: null, footer: null, slowmodeRow: null };
let obj3 = { flex: 1, backgroundColor: nativeDefault.colors.BACKGROUND_BASE_LOW };
obj2.header = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
let obj4 = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: nativeDefault.colors.BORDER_SUBTLE };
obj2.closeButton = { position: "absolute", left: nativeDefault.space.PX_16 };
let obj5 = { position: "absolute", left: nativeDefault.space.PX_16 };
obj2.body = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.tagsTrailing = { flexDirection: "row", alignItems: "center", gap: 4 };
let obj6 = { flex: 1, padding: nativeDefault.space.PX_16, gap: nativeDefault.space.PX_16 };
obj2.footer = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
let obj7 = { borderTopWidth: 1, borderTopColor: nativeDefault.colors.BORDER_SUBTLE, padding: nativeDefault.space.PX_16 };
obj2.slowmodeRow = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
let closure_11 = createStyles.createStyles(obj2);
const ReactCompilerGating = fn(558);
let obj8 = { alignSelf: "center", marginBottom: nativeDefault.space.PX_8 };
const size = fn(2);
let result = size.fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default ReactCompilerGating.isReactCompilerEnabled() ? (function CreateGameInvitePostModal(parentChannelId) {
  let AnalyticsLocationProvider = parentChannelId;
  let tmp = dependencyMap;
  const cResult = parentChannelId(576).c(10);
  parentChannelId = parentChannelId.parentChannelId;
  const analyticsLocations = useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations;
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [ChannelStore];
    cResult[0] = items;
    let first = items;
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
    let tmp6 = items1;
    let tmp5 = fn;
  } else {
    tmp5 = cResult[2];
    tmp6 = cResult[3];
  }
  let result = AnalyticsLocationProvider(504);
  const stateFromStores = result.useStateFromStores(first, tmp5, tmp6);
  if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
    const fn2 = function v() {
      const result = parentChannelId(dependencyMap[12]).closeCreateGameInvitePostModal();
      return true;
    };
    cResult[4] = fn2;
    let tmp7 = fn2;
  } else {
    tmp7 = cResult[4];
  }
  const result1 = AnalyticsLocationProvider(6209);
  result1.useNavigatorBackPressHandler(tmp7);
  let tmp9 = null;
  if (null != stateFromStores) {
    tmp9 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      if (cResult[5] !== stateFromStores) {
        const obj2 = { parentChannel: stateFromStores };
        const tmp13 = closure_8(CreateGameInvitePostContent, obj2);
        cResult[5] = stateFromStores;
        cResult[6] = tmp13;
        let tmp10 = tmp13;
      } else {
        tmp10 = cResult[6];
      }
      if (cResult[7] === analyticsLocations) {
      }
      AnalyticsLocationProvider = AnalyticsLocationProvider(6841).AnalyticsLocationProvider;
      const obj3 = { value: analyticsLocations, children: tmp10 };
      tmp = closure_8(AnalyticsLocationProvider, obj3);
      cResult[7] = analyticsLocations;
      cResult[8] = tmp10;
      cResult[9] = tmp;
    }
  }
  return tmp9;
}) : (function CreateGameInvitePostModal(parentChannelId) {
  parentChannelId = parentChannelId.parentChannelId;
  const items = [ChannelStore];
  const items1 = [parentChannelId];
  const stateFromStores = parentChannelId(504).useStateFromStores(items, () => ChannelStore.getChannel(parentChannelId), items1);
  const obj = parentChannelId(504);
  const tmp2 = parentChannelId;
  parentChannelId(6209).useNavigatorBackPressHandler(() => {
    const result = parentChannelId(dependencyMap[12]).closeCreateGameInvitePostModal();
    return true;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      const obj2 = { value: useAnalyticsLocationsDefault(parentChannelId.analyticsLocations).analyticsLocations, children: null };
      const obj4 = { parentChannel: stateFromStores };
      obj2.children = closure_8(CreateGameInvitePostContent, obj4);
      tmp4 = closure_8(tmp2(6841).AnalyticsLocationProvider, obj2);
    }
  }
  return tmp4;
});