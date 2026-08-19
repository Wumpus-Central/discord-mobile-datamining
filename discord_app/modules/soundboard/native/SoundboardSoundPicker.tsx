// === Module 16282: ? ===

// Module 16282
import ThemesDefault from "Themes" /* 712 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import withEqualityFn from "withEqualityFn" /* 16283 */;
import closure_8 from "createRTCConnection" /* 4539 */;
import closure_9 from "mergeGuildAvatar" /* 1922 */;
import { EXPRESSION_FOOTER_HEIGHT } from "ME" /* 676 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4661 */;

const require = arg1;
let c4 = importAllResult;
({ setSearchQuery: closure_6, useExpressionPickerStore: error } = withEqualityFn);
({ jsx: unpackModuleId, jsxs: closure_12 } = jsxProd);
let obj = { title: { marginBottom: 8 }, container: { flex: 1, alignItems: "center" }, header: null, body: null };
obj = { paddingHorizontal: require("SOUND_BUTTON_HEIGHT").SOUND_ROW_HORIZONTAL_PADDING, padding: ThemesDefault.space.PX_8, width: "100%" };
obj[2] = obj;
obj[3] = { flex: 1, width: "100%" };
let closure_13 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPicker(channel) {
  channel = channel.channel;
  let stateFromStores;
  availableSounds = undefined;
  let callback;
  const tmp = callback4();
  [tmp3, tmp4] = callback(importAllResult.useState(0), 2);
  const ref = importAllResult.useRef(null);
  let obj = channel(availableSounds[11]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = channel(availableSounds[12]);
  const items = [closure_9];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = channel(availableSounds[12]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  const tmp2 = callback(importAllResult.useState(0), 2);
  ({ categories, availableSounds } = stateFromStores(availableSounds[13])(channel, { filterOutEmptyCurrentGuild: true }));
  const tmp13 = callback2((searchQuery) => searchQuery.searchQuery);
  let obj3 = channel(availableSounds[14]);
  const tmp12 = stateFromStores(availableSounds[13])(channel, { filterOutEmptyCurrentGuild: true });
  [tmp15, c3] = callback(importAllResult.useState(obj3.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  let obj4 = channel(availableSounds[13]);
  const searchCategories = obj4.useSearchCategories(categories, tmp15, tmp13);
  const tmp14 = callback(importAllResult.useState(obj3.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  const items2 = [channel, stateFromStores, availableSounds];
  callback = importAllResult.useCallback((arg0) => {
    closure_1_6(arg0);
    _undefined(channel(availableSounds[14]).searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  obj = { type: null, name: null, properties: null };
  const tmp17 = stateFromStores(availableSounds[16]);
  obj[0] = channel(availableSounds[19]).ImpressionTypes.HALFSHEET;
  obj[1] = channel(availableSounds[19]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj[2] = { source: channel.analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1 };
  stateFromStores(availableSounds[18])(obj);
  let obj6 = channel(availableSounds[11]);
  const sharedValue1 = obj6.useSharedValue(-1);
  let obj7 = channel(availableSounds[11]);
  const sharedValue2 = obj7.useSharedValue(false);
  obj = { value: tmp17(stateFromStores(availableSounds[17]).SOUNDBOARD_ACTION_SHEET).analyticsLocations, children: null };
  let obj9 = channel(availableSounds[20]);
  let isIOSResult = obj9.isIOS();
  if (isIOSResult) {
    obj1 = { animatedSheetIndex: null, portalHostName: "soundboard-footer", followSystemKeyboard: true };
    obj1[0] = sharedValue1;
    isIOSResult = callback3(tmp11(tmp7[21]), obj1);
  }
  const items3 = [isIOSResult, ];
  obj2 = { animatedIndex: sharedValue1, scrollable: true, startExpanded: true, footer: null, children: null };
  const tmp19 = stateFromStores(availableSounds[18]);
  let tmp26;
  if (tmp6Result.isAndroid()) {
    tmp26 = callback3(tmp6(tmp7[23]).PortalHost, { name: "soundboard-footer" });
  }
  obj2[3] = tmp26;
  obj3 = { style: tmp.container, children: null };
  obj4 = { accessibilityRole: "header", variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = tmp6(tmp7[25]).intl;
  obj4[3] = intl.string(channel(availableSounds[25]).t.ABjMWI);
  const items4 = [callback3(channel(availableSounds[24]).Text, obj4), , , ];
  const obj5 = { style: tmp.header, children: null };
  obj6 = { size: "md", placeholder: null, onChange: null };
  const intl2 = tmp6(tmp7[25]).intl;
  obj6[1] = intl2.string(channel(availableSounds[25]).t.sKt3xS);
  obj6[2] = callback;
  obj5[1] = callback3(channel(availableSounds[26]).SearchField, obj6);
  items4[1] = callback3(View, obj5);
  obj7 = { style: tmp.body, children: null };
  const obj8 = { listRef: ref, channel, insetBottom: null, scrollPosition: null, setCategoryIndex: null, categories: null, shouldShowPremiumUpsell: null };
  const sum = EXPRESSION_FOOTER_HEIGHT + stateFromStores(availableSounds[15])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj8[2] = sum + stateFromStores(availableSounds[10]).space.PX_16;
  obj8[3] = sharedValue;
  obj8[4] = tmp4;
  obj8[5] = searchCategories;
  obj8[6] = sharedValue2;
  obj7[1] = callback3(channel(availableSounds[27]).SoundboardSoundPickerList, obj8);
  items4[2] = callback3(View, obj7);
  items4[3] = callback3(stateFromStores(availableSounds[28]), { shouldShow: sharedValue2 });
  obj3[1] = items4;
  const items5 = [closure_12(View, obj3), ];
  obj9 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
  items5[1] = callback3(stateFromStores(availableSounds[29]), obj9);
  obj2[4] = items5;
  items3[1] = closure_12(channel(availableSounds[22]).BottomSheet, obj2);
  obj[1] = items3;
  return closure_12(channel(availableSounds[16]).AnalyticsLocationProvider, obj);
});
const result = require("set").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;