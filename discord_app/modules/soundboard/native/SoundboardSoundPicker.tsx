// discord_app/modules/soundboard/native/SoundboardSoundPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import searchSounds from "../searchSounds.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ExpressionPickerStore = fn(17536);
({ setSearchQuery: metroRequire, useExpressionPickerStore: closure_7 } = ExpressionPickerStore);
const SoundboardPickerType = fn(5227).SoundboardPickerType;
const EXPRESSION_FOOTER_HEIGHT = fn(1074).EXPRESSION_FOOTER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(4757);
let obj = {
  title: { marginBottom: 8 },
  container: { flex: 1, alignItems: "center" },
  header: {
    paddingHorizontal: fn(17537).SOUND_ROW_HORIZONTAL_PADDING,
    padding: nativeDefault.space.PX_8,
    width: "100%",
  },
  body: { flex: 1, width: "100%" },
};
let closure_14 = createStyles.createStyles(obj);
let obj3 = {
  paddingHorizontal: fn(17537).SOUND_ROW_HORIZONTAL_PADDING,
  padding: nativeDefault.space.PX_8,
  width: "100%",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default noop.memo(function SoundboardSoundPicker(channel) {
  channel = channel.channel;
  const initialScrollLocation = channel.initialScrollLocation;
  let stateFromStores;
  availableSounds = undefined;
  c5 = undefined;
  const tmp = closure_14();
  [tmp3, tmp4] = stateFromStores(availableSounds.useState(0), 2);
  let ref = availableSounds.useRef(null);
  const tmp2 = stateFromStores(availableSounds.useState(0), 2);
  const sharedValue = channel(ref[12]).useSharedValue(0);
  let obj = channel(ref[12]);
  const items = [UserStore];
  stateFromStores = channel(ref[13]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj2 = channel(ref[13]);
  const items1 = [RTCConnectionStore];
  const stateFromStores1 = channel(ref[13]).useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
  const obj3 = channel(ref[13]);
  ({ categories, availableSounds } = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true }));
  const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
  const tmp12 = initialScrollLocation(ref[14])(channel, { filterOutEmptyCurrentGuild: true });
  const obj4 = channel(ref[15]);
  [tmp15, c5] = stateFromStores(
    availableSounds.useState(channel(ref[15]).searchSounds(tmp13, availableSounds, stateFromStores, channel)),
    2,
  );
  const tmp14 = stateFromStores(
    availableSounds.useState(channel(ref[15]).searchSounds(tmp13, availableSounds, stateFromStores, channel)),
    2,
  );
  const searchCategories = channel(ref[14]).useSearchCategories(categories, tmp15, tmp13);
  const obj5 = channel(ref[14]);
  const items2 = [channel, stateFromStores, availableSounds];
  const callback = availableSounds.useCallback((arg0) => {
    timestampProducer(arg0);
    _undefined(searchSounds.searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items2);
  const obj6 = { type: null, name: null, properties: null };
  const tmp17 = initialScrollLocation(ref[17]);
  obj6.type = channel(ref[20]).ImpressionTypes.HALFSHEET;
  obj6.name = channel(ref[20]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj6.properties = {
    source: channel.analyticsSource,
    guild_id: channel.guild_id,
    media_session_id: stateFromStores1,
    type: SoundboardPickerType.FULL_PICKER,
  };
  initialScrollLocation(ref[19])(obj6);
  const obj7 = {
    source: channel.analyticsSource,
    guild_id: channel.guild_id,
    media_session_id: stateFromStores1,
    type: SoundboardPickerType.FULL_PICKER,
  };
  const tmp19 = initialScrollLocation(ref[19]);
  const sharedValue1 = channel(ref[12]).useSharedValue(-1);
  const obj8 = channel(ref[12]);
  const sharedValue2 = channel(ref[12]).useSharedValue(false);
  ref = availableSounds.useRef(false);
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
        ({ section: obj.section, item: obj.item } = initialScrollLocation);
        current2.scrollToLocation(obj);
      }
    }
  }, items3);
  const obj10 = {
    value: tmp17(initialScrollLocation(ref[18]).SOUNDBOARD_ACTION_SHEET).analyticsLocations,
    children: null,
  };
  const obj9 = channel(ref[12]);
  let isIOSResult = channel(ref[21]).isIOS();
  if (isIOSResult) {
    const obj12 = { animatedSheetIndex: sharedValue1, portalHostName: "soundboard-footer", followSystemKeyboard: true };
    isIOSResult = closure_12(tmp11(tmp7[22]), obj12);
  }
  const items4 = [isIOSResult];
  const obj13 = {
    animatedIndex: sharedValue1,
    scrollable: true,
    startExpanded: true,
    onExpand: callback1,
    footer: null,
    children: null,
  };
  const obj11 = channel(ref[21]);
  let tmp27;
  if (tmp6Result.isAndroid()) {
    tmp27 = closure_12(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  obj13.footer = tmp27;
  const obj14 = { style: tmp.container, children: null };
  const obj15 = { accessibilityRole: "header", variant: "heading-lg/bold", style: tmp.title, children: null };
  const intl = tmp6(tmp7[26]).intl;
  obj15.children = intl.string(channel(ref[26]).t.ABjMWI);
  const items5 = [closure_12(channel(ref[25]).Text, obj15), , ,];
  const obj16 = { style: tmp.header, children: null };
  const obj17 = { size: "md", placeholder: null, onChange: null };
  const intl2 = tmp6(tmp7[26]).intl;
  obj17.placeholder = intl2.string(channel(ref[26]).t.sKt3xS);
  obj17.onChange = callback;
  obj16.children = closure_12(channel(ref[27]).SearchField, obj17);
  items5[1] = closure_12(c5, obj16);
  const obj18 = { style: tmp.body, children: null };
  const obj19 = {
    listRef: ref,
    channel,
    insetBottom: null,
    scrollPosition: null,
    setCategoryIndex: null,
    categories: null,
    shouldShowPremiumUpsell: null,
  };
  const sum =
    EXPRESSION_FOOTER_HEIGHT + initialScrollLocation(ref[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj19.insetBottom = sum + initialScrollLocation(ref[11]).space.PX_16;
  obj19.scrollPosition = sharedValue;
  obj19.setCategoryIndex = tmp4;
  obj19.categories = searchCategories;
  obj19.shouldShowPremiumUpsell = sharedValue2;
  obj18.children = closure_12(channel(ref[28]).SoundboardSoundPickerList, obj19);
  items5[2] = closure_12(c5, obj18);
  items5[3] = closure_12(initialScrollLocation(ref[29]), { shouldShow: sharedValue2 });
  obj14.children = items5;
  const items6 = [
    closure_13(c5, obj14),
    closure_12(initialScrollLocation(ref[30]), {
      guildId: channel.guild_id,
      listRef: ref,
      categories,
      categoryIndex: tmp3,
    }),
  ];
  obj13.children = items6;
  items4[1] = closure_13(channel(ref[23]).BottomSheet, obj13);
  obj10.children = items4;
  return closure_13(channel(ref[17]).AnalyticsLocationProvider, obj10);
});
