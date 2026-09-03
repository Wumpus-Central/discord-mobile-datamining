// === Module 12545: CreateGameInvitePostContent ===

// Module 12545 (CreateGameInvitePostContent)
import ThemesDefault from "Themes" /* 709 */;
import contextDefault from "context" /* 5962 */;
import closure_3 from "_slicedToArray" /* 32 */;
import closure_4 from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import closure_6 from "ensureGuildLoaded" /* 1386 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
function CreateGameInvitePostContent(parentChannel) {
  parentChannel = parentChannel.parentChannel;
  let first;
  dependencyMap = undefined;
  let noMicTag;
  const tmp = callback3();
  const insets = first(5603)({ includeKeyboardHeight: true }).insets;
  let availableTags = parentChannel.availableTags;
  if (availableTags == null) {
    availableTags = [];
  }
  [tmp5, tmp6] = noMicTag(React.useState(""), 2);
  const tmp7 = noMicTag(React.useState([]), 2);
  first = tmp7[0];
  dependencyMap = tmp7[1];
  let items = [first];
  const memo = React.useMemo(() => new Set(first.map((id) => id.id)), items);
  let obj = parentChannel(12546);
  obj = {
    parentChannel,
    description: tmp5,
    appliedTagIds: memo,
    upload: NOOP_UPLOAD,
    onThreadCreated(channel) {
      parentChannel(lib[13]).transitionToThread(channel);
      const obj = parentChannel(lib[13]);
      const result = parentChannel(lib[10]).closeCreateGameInvitePostModal();
    }
  };
  const createGameInvitePost = obj.useCreateGameInvitePost(obj);
  noMicTag = createGameInvitePost.noMicTag;
  const items1 = [noMicTag];
  ({ voiceChatEnabled, voiceToggleDisabled, submitting, canSubmit, submit } = createGameInvitePost);
  const items2 = [parentChannel, first];
  const callback = React.useCallback((arg0) => {
    closure_0 = arg0;
    if (null != noMicTag) {
      lib((arr) => {
        const found = arr.filter((id) => id.id !== id.id);
        let tmp2 = found;
        if (!closure_0) {
          const items = [];
          items[HermesBuiltin.arraySpread(found, 0)] = closure_1_3;
          tmp2 = items;
        }
        return tmp2;
      });
    }
  }, items1);
  obj = { style: items3, children: null };
  items3 = [tmp.container, { paddingTop: insets.top }];
  obj1 = { style: tmp.header, children: null };
  const callback1 = React.useCallback(() => {
    let obj = first(lib[14]);
    obj = { parentChannel, onSave: lib, title: null, tags: null };
    const intl = parentChannel(lib[17]).intl;
    obj[2] = intl.string(parentChannel(lib[17]).t.HPu3kq);
    obj[3] = first;
    obj.openLazy(parentChannel(lib[16])(lib[15], lib.paths), "ForumPostTagsActionSheet", obj);
  }, items2);
  const obj2 = { style: tmp.closeButton, accessibilityRole: "button", accessibilityLabel: null, onPress: null, children: null };
  let intl = parentChannel(1233).intl;
  obj2[2] = intl.string(parentChannel(1233).t.cpT0Cq);
  obj2[3] = function onPress() {
    return parentChannel(lib[10]).closeCreateGameInvitePostModal();
  };
  obj2[4] = callback(parentChannel(5560).XSmallIcon, {});
  const items4 = [callback(parentChannel(5077).PressableOpacity, obj2), ];
  const obj3 = { variant: "text-md/semibold", color: "mobile-text-heading-primary", children: null };
  const intl2 = parentChannel(1233).intl;
  obj3[2] = intl2.string(first(3436).tOsHsu);
  items4[1] = callback(parentChannel(4474).Text, obj3);
  obj1[1] = items4;
  const items5 = [callback2(View, obj1), , ];
  const obj4 = { style: tmp.body, children: null };
  const obj5 = { label: null, placeholder: null, value: null, onChange: null, maxLength: null, autoFocus: true };
  const intl3 = parentChannel(1233).intl;
  obj5[0] = intl3.string(first(3436)["/mEbGf"]);
  const intl4 = parentChannel(1233).intl;
  obj5[1] = intl4.string(first(3436)["SU/IAE"]);
  obj5[2] = tmp5;
  obj5[3] = tmp6;
  obj5[4] = parentChannel(6128).GAME_INVITE_POST_MESSAGE_MAX_LENGTH;
  const items6 = [callback(parentChannel(7820).TextArea, obj5), ];
  let tmp15Result = availableTags.length > 0;
  if (tmp15Result) {
    const obj6 = { label: null, subLabel: null, arrow: true, trailing: null, onPress: null };
    const intl5 = tmp9(1233).intl;
    obj6[0] = intl5.string(tmp9(1233).t.KM6lRG);
    let joined;
    if (first.length > 0) {
      const mapped = first.map((name) => name.name);
      joined = mapped.join(", ");
    }
    obj6[1] = joined;
    const obj7 = { style: null, children: null };
    obj7[0] = tmp.tagsTrailing;
    const obj8 = { variant: "text-md/medium", color: "text-muted", children: null };
    obj8[2] = first.length;
    obj7[1] = tmp15(tmp9(4474).Text, obj8);
    obj6[3] = tmp15(tmp14, obj7);
    obj6[4] = callback1;
    tmp15Result = tmp15(tmp9(5608).TableRow, obj6);
  }
  const obj9 = { hasIcons: false, children: null };
  const items7 = [tmp15Result, ];
  const obj10 = { label: null, subLabel: null, value: null, onValueChange: null, disabled: null };
  const intl6 = tmp9(1233).intl;
  obj10[0] = intl6.string(first(3436).Xd2NFi);
  const intl7 = tmp9(1233).intl;
  obj10[1] = intl7.string(first(3436).G91SYQ);
  obj10[2] = voiceChatEnabled;
  obj10[3] = callback;
  obj10[4] = voiceToggleDisabled;
  items7[1] = callback(parentChannel(6002).TableSwitchRow, obj10);
  obj9[1] = items7;
  items6[1] = callback2(parentChannel(6001).TableRowGroup, obj9);
  obj4[1] = items6;
  items5[1] = callback2(View, obj4);
  const obj11 = { style: items8, children: null };
  items8 = [tmp.footer, { marginBottom: insets.bottom }];
  const obj12 = { variant: "primary", size: "lg", grow: true, text: null, loading: null, disabled: null, onPress: null };
  const intl8 = tmp9(1233).intl;
  obj12[3] = intl8.string(parentChannel(1233).t.CumH4u);
  obj12[4] = submitting;
  obj12[5] = !canSubmit;
  obj12[6] = submit;
  obj11[1] = callback(parentChannel(4929).Button, obj12);
  items5[2] = callback(View, obj11);
  obj[1] = items5;
  return callback2(View, obj);
}
({ jsx: error, jsxs: closure_8 } = jsxProd);
function NOOP_UPLOAD() {
  error = new Error("Game invite posts do not support attachments");
  return Promise.reject(error);
}
createCacheKey = { container: null, header: null, closeButton: null, body: null, tagsTrailing: null, footer: null };
createCacheKey = { flex: 1, backgroundColor: ThemesDefault.colors.BACKGROUND_BASE_LOW };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
let obj1 = { height: 44, flexDirection: "row", alignItems: "center", justifyContent: "center", borderBottomWidth: 1, borderBottomColor: ThemesDefault.colors.BORDER_SUBTLE };
createCacheKey[2] = { position: "absolute", left: ThemesDefault.space.PX_16 };
let obj2 = { position: "absolute", left: ThemesDefault.space.PX_16 };
createCacheKey[3] = { flex: 1, padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[4] = { flexDirection: "row", alignItems: "center", gap: 4 };
let obj3 = { flex: 1, padding: ThemesDefault.space.PX_16, gap: ThemesDefault.space.PX_16 };
createCacheKey[5] = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, padding: ThemesDefault.space.PX_16 };
let closure_10 = createCacheKey.createStyles(createCacheKey);
let obj4 = { borderTopWidth: 1, borderTopColor: ThemesDefault.colors.BORDER_SUBTLE, padding: ThemesDefault.space.PX_16 };
let result = require("set").fileFinishedImporting("modules/game_invite_channels/native/CreateGameInvitePostModal.tsx");

export default function CreateGameInvitePostModal(parentChannelId) {
  parentChannelId = parentChannelId.parentChannelId;
  let obj = parentChannelId(586);
  const items = [closure_6];
  const items1 = [parentChannelId];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_6.getChannel(parentChannelId), items1);
  parentChannelId(5510).useNavigatorBackPressHandler(() => {
    const result = parentChannelId(table[10]).closeCreateGameInvitePostModal();
    return true;
  });
  let tmp4 = null;
  if (null != stateFromStores) {
    tmp4 = null;
    if (stateFromStores.isGameInvitesChannel()) {
      obj = { value: null, children: null };
      obj[0] = contextDefault(parentChannelId.analyticsLocations).analyticsLocations;
      obj = { parentChannel: null };
      obj[0] = stateFromStores;
      obj[1] = callback(CreateGameInvitePostContent, obj);
      tmp4 = callback(parentChannelId(5962).AnalyticsLocationProvider, obj);
    }
  }
  return tmp4;
};