// === Module 16876: ? ===

// Module 16876
import ThemesDefault from "Themes" /* 709 */;
import closure_3 from "_slicedToArray" /* 32 */;
import importAllResult from "noop" /* 19 */;
import { View } from "get ActivityIndicator" /* 17 */;
import withEqualityFn from "withEqualityFn" /* 16877 */;
import closure_8 from "createRTCConnection" /* 4554 */;
import closure_9 from "mergeGuildAvatar" /* 1921 */;
import { SoundboardPickerType } from "MAX_LENGTH_SOUND_NAME" /* 4967 */;
import { EXPRESSION_FOOTER_HEIGHT } from "ME" /* 673 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

const require = arg1;
let c4 = importAllResult;
({ setSearchQuery: closure_6, useExpressionPickerStore: error } = withEqualityFn);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
let obj = { title: { marginBottom: 8 }, container: { flex: 1, alignItems: "center" }, header: null, body: null };
obj = { paddingHorizontal: require("SOUND_BUTTON_HEIGHT").SOUND_ROW_HORIZONTAL_PADDING, padding: ThemesDefault.space.PX_8, width: "100%" };
obj[2] = obj;
obj[3] = { flex: 1, width: "100%" };
let closure_14 = createCacheKey.createStyles(obj);
const memoResult = importAllResult.memo(function SoundboardSoundPicker(channel) {
  channel = channel.channel;
  const initialScrollLocation = channel.initialScrollLocation;
  let ref;
  let stateFromStores;
  availableSounds = undefined;
  c5 = undefined;
  closure_6 = undefined;
  const tmp = callback3();
  [tmp3, tmp4] = stateFromStores(availableSounds.useState(0), 2);
  ref = availableSounds.useRef(null);
  let obj = channel(ref[12]);
  const sharedValue = obj.useSharedValue(0);
  obj1 = channel(ref[13]);
  const items = [closure_9];
  stateFromStores = obj1.useStateFromStores(items, () => currentUser.getCurrentUser());
  let obj2 = channel(ref[13]);
  const items1 = [closure_8];
  const stateFromStores1 = obj2.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  const tmp2 = stateFromStores(availableSounds.useState(0), 2);
  ({ categories, availableSounds } = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true }));
  const tmp13 = callback((searchQuery) => searchQuery.searchQuery);
  let obj3 = channel(ref[15]);
  const tmp12 = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true });
  [tmp15, c5] = stateFromStores(availableSounds.useState(obj3.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  let obj4 = channel(ref[14]);
  const searchCategories = obj4.useSearchCategories(categories, tmp15, tmp13);
  const tmp14 = stateFromStores(availableSounds.useState(obj3.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
  const items2 = [channel, stateFromStores, availableSounds];
  callback = availableSounds.useCallback((arg0) => {
    ref(arg0);
    _undefined(channel(ref[15]).searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  obj = { type: null, name: null, properties: null };
  const tmp17 = initialScrollLocation(ref[17]);
  obj[0] = channel(ref[20]).ImpressionTypes.HALFSHEET;
  obj[1] = channel(ref[20]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj = { source: channel.analyticsSource, guild_id: channel.guild_id, media_session_id: stateFromStores1, type: SoundboardPickerType.FULL_PICKER };
  obj[2] = obj;
  initialScrollLocation(ref[19])(obj);
  let obj7 = channel(ref[12]);
  const sharedValue1 = obj7.useSharedValue(-1);
  let obj8 = channel(ref[12]);
  const sharedValue2 = obj8.useSharedValue(false);
  closure_6 = availableSounds.useRef(false);
  const items3 = [initialScrollLocation];
  const callback1 = availableSounds.useCallback(() => {
    let current = null == initialScrollLocation;
    if (!current) {
      current = ref.current;
    }
    if (!current) {
      ref.current = true;
      const current2 = ref.current;
      if (current2 != null) {
        const obj = { section: null, item: null, animated: false };
        ({ section: obj[0], item: obj[1] } = initialScrollLocation);
        current2.scrollToLocation(obj);
      }
    }
  }, items3);
  obj1 = { value: tmp17(initialScrollLocation(ref[18]).SOUNDBOARD_ACTION_SHEET).analyticsLocations, children: null };
  let obj10 = channel(ref[21]);
  let isIOSResult = obj10.isIOS();
  if (isIOSResult) {
    obj2 = { animatedSheetIndex: null, portalHostName: "soundboard-footer", followSystemKeyboard: true };
    obj2[0] = sharedValue1;
    isIOSResult = callback2(tmp11(tmp7[22]), obj2);
  }
  const items4 = [isIOSResult, ];
  obj3 = { animatedIndex: sharedValue1, scrollable: true, startExpanded: true, onExpand: callback1, footer: null, children: null };
  const tmp19 = initialScrollLocation(ref[19]);
  let tmp27;
  if (tmp6Result.isAndroid()) {
    tmp27 = callback2(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  obj3[4] = tmp27;
  obj4 = { style: tmp.container, children: null };
  const obj5 = { accessibilityRole: "header", variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = tmp6(tmp7[26]).intl;
  obj5[3] = intl.string(channel(ref[26]).t.ABjMWI);
  const items5 = [callback2(channel(ref[25]).Text, obj5), , , ];
  const obj6 = { style: tmp.header, children: null };
  obj7 = { size: "md", placeholder: null, onChange: null };
  const intl2 = tmp6(tmp7[26]).intl;
  obj7[1] = intl2.string(channel(ref[26]).t.sKt3xS);
  obj7[2] = callback;
  obj6[1] = callback2(channel(ref[27]).SearchField, obj7);
  items5[1] = callback2(c5, obj6);
  obj8 = { style: tmp.body, children: null };
  const obj9 = { listRef: ref, channel, insetBottom: null, scrollPosition: null, setCategoryIndex: null, categories: null, shouldShowPremiumUpsell: null };
  const sum = EXPRESSION_FOOTER_HEIGHT + initialScrollLocation(ref[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj9[2] = sum + initialScrollLocation(ref[11]).space.PX_16;
  obj9[3] = sharedValue;
  obj9[4] = tmp4;
  obj9[5] = searchCategories;
  obj9[6] = sharedValue2;
  obj8[1] = callback2(channel(ref[28]).SoundboardSoundPickerList, obj9);
  items5[2] = callback2(c5, obj8);
  items5[3] = callback2(initialScrollLocation(ref[29]), { shouldShow: sharedValue2 });
  obj4[1] = items5;
  const items6 = [closure_13(c5, obj4), ];
  obj10 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
  items6[1] = callback2(initialScrollLocation(ref[30]), obj10);
  obj3[5] = items6;
  items4[1] = closure_13(channel(ref[23]).BottomSheet, obj3);
  obj1[1] = items4;
  return closure_13(channel(ref[17]).AnalyticsLocationProvider, obj1);
});
const result = require("set").fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;