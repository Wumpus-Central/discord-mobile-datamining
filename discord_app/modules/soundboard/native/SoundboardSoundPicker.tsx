// discord_app/modules/soundboard/native/SoundboardSoundPicker.tsx
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import searchSounds from "../searchSounds.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__.js";
import noop from "../../../../_runtime/metro/00019__.js";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";

require = fn;
const View = fn(17).View;
const ExpressionPickerStore = fn(19210);
({ setSearchQuery: closure_6, useExpressionPickerStore: metroImportDefault } = ExpressionPickerStore);
const SoundboardPickerType = fn(6371).SoundboardPickerType;
const EXPRESSION_FOOTER_HEIGHT = fn(1072).EXPRESSION_FOOTER_HEIGHT;
const jsxProd = fn(21);
({ jsx: closure_12, jsxs: map1 } = jsxProd);
const createStyles = fn(5306);
const obj = {
  title: { marginBottom: 8 },
  container: { flex: 1, alignItems: "center" },
  header: {
    paddingHorizontal: fn(19211).SOUND_ROW_HORIZONTAL_PADDING,
    padding: nativeDefault.space.PX_8,
    width: "100%",
  },
  body: { flex: 1, width: "100%" },
};
let closure_14 = createStyles.createStyles(obj);
let obj3 = {
  paddingHorizontal: fn(19211).SOUND_ROW_HORIZONTAL_PADDING,
  padding: nativeDefault.space.PX_8,
  width: "100%",
};
const size = fn(2);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default noop.memo(function SoundboardSoundPicker(channel) {
  channel = channel.channel;
  ({ analyticsSource, startExpanded } = channel);
  if (startExpanded === undefined) {
    startExpanded = true;
  }
  availableSounds = undefined;
  _slicedToArray = undefined;
  const tmp = closure_14();
  [tmp3, tmp4] = noop.useState(0);
  const ref = noop.useRef(null);
  const tmp2 = _slicedToArray(noop.useState(0), 2);
  const sharedValue = channel(availableSounds[12]).useSharedValue(0);
  const obj2 = channel(availableSounds[12]);
  items = [UserStore];
  const stateFromStores = channel(availableSounds[13]).useStateFromStores(items, () => currentUser.getCurrentUser());
  const obj3 = channel(availableSounds[13]);
  const items1 = [RTCConnectionStore];
  const stateFromStores1 = channel(availableSounds[13]).useStateFromStores(items1, () =>
    mediaSessionId.getMediaSessionId(),
  );
  const obj4 = channel(availableSounds[13]);
  ({ categories, availableSounds } = stateFromStores(availableSounds[14])(channel, {
    filterOutEmptyCurrentGuild: true,
  }));
  const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
  const tmp12 = stateFromStores(availableSounds[14])(channel, { filterOutEmptyCurrentGuild: true });
  const obj5 = channel(availableSounds[15]);
  [tmp15, c3] = noop.useState(
    channel(availableSounds[15]).searchSounds(tmp13, availableSounds, stateFromStores, channel),
  );
  const tmp14 = _slicedToArray(
    noop.useState(channel(availableSounds[15]).searchSounds(tmp13, availableSounds, stateFromStores, channel)),
    2,
  );
  const searchCategories = channel(availableSounds[14]).useSearchCategories(categories, tmp15, tmp13);
  const obj6 = channel(availableSounds[14]);
  if (analyticsSource === stateFromStores(availableSounds[18]).VOICE_PANEL_DOCK) {
    const items2 = [tmp11(tmp7[18]).VOICE_PANEL_DOCK];
    let items3 = items2;
  } else {
    items3 = [];
  }
  const items4 = [channel, stateFromStores, availableSounds];
  const callback = noop.useCallback((arg0) => {
    timestampProducer(arg0);
    _undefined(searchSounds.searchSounds(arg0, availableSounds, stateFromStores, channel));
  }, items4);
  const obj7 = { type: null, name: null, properties: null };
  const tmp17 = stateFromStores(availableSounds[17]);
  obj7.type = channel(availableSounds[20]).ImpressionTypes.HALFSHEET;
  obj7.name = channel(availableSounds[20]).ImpressionNames.SOUNDBOARD_POPOUT;
  obj7.properties = {
    source: analyticsSource,
    guild_id: channel.guild_id,
    media_session_id: stateFromStores1,
    type: SoundboardPickerType.FULL_PICKER,
  };
  stateFromStores(availableSounds[19])(obj7);
  const obj8 = {
    source: analyticsSource,
    guild_id: channel.guild_id,
    media_session_id: stateFromStores1,
    type: SoundboardPickerType.FULL_PICKER,
  };
  const tmp11Result = stateFromStores(availableSounds[19]);
  const sharedValue1 = channel(availableSounds[12]).useSharedValue(-1);
  const tmp6Result = channel(availableSounds[12]);
  const sharedValue2 = channel(availableSounds[12]).useSharedValue(false);
  const obj9 = {
    value: tmp17(items3, stateFromStores(availableSounds[18]).SOUNDBOARD_ACTION_SHEET).analyticsLocations,
    children: null,
  };
  const tmp6Result4 = channel(availableSounds[12]);
  let isIOSResult = channel(availableSounds[21]).isIOS();
  if (isIOSResult) {
    const obj10 = {
      animatedSheetIndex: sharedValue1,
      portalHostName: "soundboard-footer",
      followSystemKeyboard: true,
      constrainToActionSheet: true,
    };
    isIOSResult = closure_12(tmp11(tmp7[22]), obj10);
  }
  const items5 = [isIOSResult];
  const obj11 = { animatedIndex: sharedValue1, scrollable: true, startExpanded, footer: null, children: null };
  const tmp6Result5 = channel(availableSounds[21]);
  let tmp26;
  if (tmp6Result6.isAndroid()) {
    tmp26 = closure_12(tmp6(tmp7[24]).PortalHost, { name: "soundboard-footer" });
  }
  obj11.footer = tmp26;
  const obj12 = { style: tmp.container, children: null };
  const obj13 = { accessibilityRole: "header", variant: "heading-lg/semibold", style: tmp.title, children: null };
  const intl = tmp6(tmp7[26]).intl;
  obj13.children = intl.string(channel(availableSounds[26]).t.ABjMWI);
  const items6 = [closure_12(channel(availableSounds[25]).Text, obj13), , ,];
  const obj14 = { style: tmp.header, children: null };
  const obj15 = { size: "md", placeholder: null, onChange: null };
  const intl2 = tmp6(tmp7[26]).intl;
  obj15.placeholder = intl2.string(channel(availableSounds[26]).t.sKt3xS);
  obj15.onChange = callback;
  obj14.children = closure_12(channel(availableSounds[27]).SearchBar, obj15);
  items6[1] = closure_12(View, obj14);
  const obj16 = { style: tmp.body, children: null };
  const obj17 = {
    listRef: ref,
    channel,
    insetBottom: null,
    scrollPosition: null,
    setCategoryIndex: null,
    categories: null,
    shouldShowPremiumUpsell: null,
  };
  const sum =
    EXPRESSION_FOOTER_HEIGHT + stateFromStores(availableSounds[16])({ isKeyboardAwareOnAndroid: false }).insets.bottom;
  obj17.insetBottom = sum + stateFromStores(availableSounds[11]).space.PX_16;
  obj17.scrollPosition = sharedValue;
  obj17.setCategoryIndex = tmp4;
  obj17.categories = searchCategories;
  obj17.shouldShowPremiumUpsell = sharedValue2;
  obj16.children = closure_12(channel(availableSounds[28]).SoundboardSoundPickerList, obj17);
  items6[2] = closure_12(View, obj16);
  items6[3] = closure_12(stateFromStores(availableSounds[29]), { shouldShow: sharedValue2 });
  obj12.children = items6;
  const items7 = [
    closure_13(View, obj12),
    closure_12(stateFromStores(availableSounds[30]), {
      guildId: channel.guild_id,
      listRef: ref,
      categories,
      categoryIndex: tmp3,
    }),
  ];
  obj11.children = items7;
  items5[1] = closure_13(channel(availableSounds[23]).BottomSheet, obj11);
  obj9.children = items5;
  return closure_13(channel(availableSounds[17]).AnalyticsLocationProvider, obj9);
});
