// discord_app/modules/soundboard/native/SoundboardSoundPicker.tsx
import react_native from "../../../../_runtime/00017_react-native.js";
import nativeDefault from "../../../../discord_common/js/packages/tokens/native.tsx";
import Constants from "../../../Constants.tsx";
import SoundboardConstants from "../SoundboardConstants.tsx";
import searchSounds from "../searchSounds.tsx";
import SoundboardStyleConstants from "SoundboardStyleConstants.tsx";
import _slicedToArray from "../../../../_runtime/metro/00032__slicedToArray.js";
import react from "../../../../_runtime/00019_react.js";
import ExpressionPickerStore from "../../expression_picker/ExpressionPickerStore.tsx";
import RTCConnectionStore from "../../../stores/RTCConnectionStore.tsx";
import UserStore from "../../../stores/UserStore.tsx";
import Fragment from "../../../../_runtime/react/00021_Fragment.js";
import createStyles from "../../../design/components/Styles/native/createStyles.tsx";
import ReactCompilerGating from "../../react_compiler/ReactCompilerGating.tsx";
import size from "../../../../_runtime/metro/00002__.js";

let BottomSheet, channel;

let closure_12;
let map1;
let metroImportDefault;
let metroRequire;
let obj2;
const View = react_native.View;
({ setSearchQuery: metroRequire, useExpressionPickerStore: metroImportDefault } = ExpressionPickerStore);
const SoundboardPickerType = SoundboardConstants.SoundboardPickerType;
const SOUND_ROW_HORIZONTAL_PADDING = SoundboardStyleConstants.SOUND_ROW_HORIZONTAL_PADDING;
const EXPRESSION_FOOTER_HEIGHT = Constants.EXPRESSION_FOOTER_HEIGHT;
({ jsx: closure_12, jsxs: map1 } = Fragment);
let obj = {
  title: { marginBottom: 8 },
  container: { flex: 1, alignItems: "center" },
  header: obj2,
  body: { flex: 1, width: "100%" },
};
obj2 = { paddingHorizontal: SOUND_ROW_HORIZONTAL_PADDING, padding: nativeDefault.space.PX_8, width: "100%" };
let closure_14 = createStyles.createStyles(obj);
const memoResult = react.memo(
  ReactCompilerGating.isReactCompilerEnabled()
    ? (channel) => {
        let analyticsSource;
        let availableSounds;
        let categories;
        let currentUser;
        let initialScrollLocation;
        let mediaSessionId;
        let ref;
        let stateFromStores;
        let tmp12;
        let tmp13;
        let tmp8;
        let tmp9;
        let obj = channel(ref[13]);
        const cResult = obj.c(64);
        channel = channel.channel;
        ({ analyticsSource, initialScrollLocation } = channel);
        closure_14();
        stateFromStores(availableSounds.useState(0), 2);
        ref = availableSounds.useRef(null);
        const obj2 = channel(ref[14]);
        const sharedValue = obj2.useSharedValue(0);
        if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
          const items = [UserStore];
          const fn = function b() {
            return currentUser.getCurrentUser();
          };
          cResult[0] = items;
          cResult[1] = fn;
          tmp8 = items;
          tmp9 = fn;
        } else {
          [tmp8, tmp9] = cResult;
        }
        const tmpResult = channel(ref[15]);
        stateFromStores = tmpResult.useStateFromStores(tmp8, tmp9);
        if (cResult[2] === Symbol.for("react.memo_cache_sentinel")) {
          const items1 = [RTCConnectionStore];
          class U {
            constructor() {
              return mediaSessionId.getMediaSessionId();
            }
          }
          cResult[2] = items1;
          cResult[3] = U;
          tmp13 = U;
          tmp12 = items1;
        } else {
          tmp12 = cResult[2];
          tmp13 = cResult[3];
        }
        const tmpResult3 = channel(ref[15]);
        const stateFromStores1 = tmpResult3.useStateFromStores(tmp12, tmp13);
        if (cResult[4] === Symbol.for("react.memo_cache_sentinel")) {
          const obj3 = { filterOutEmptyCurrentGuild: true };
          cResult[4] = obj3;
          class U {
            constructor() {
              return mediaSessionId.getMediaSessionId();
            }
          }
        }
        ({ categories, availableSounds } = initialScrollLocation(ref[16])(channel, tmp16));
        initialScrollLocation(ref[16])(channel, tmp16);
        if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
          class D {
            constructor(searchQuery) {
              return searchQuery.searchQuery;
            }
          }
          cResult[5] = D;
          class U {
            constructor() {
              return mediaSessionId.getMediaSessionId();
            }
          }
        } else {
          class D {
            constructor(searchQuery) {
              return searchQuery.searchQuery;
            }
          }
        }
        const tmp19 = closure_7(tmp18);
        if (cResult[6] === availableSounds) {
          class D {
            constructor(searchQuery) {
              return searchQuery.searchQuery;
            }
          }
        }
        const tmpResult4 = channel(ref[17]);
        cResult[6] = availableSounds;
        cResult[7] = channel;
        cResult[8] = stateFromStores;
        cResult[9] = tmp19;
        cResult[10] = tmpResult4.searchSounds(tmp19, availableSounds, stateFromStores, channel);
        tmpResult4.searchSounds(tmp19, availableSounds, stateFromStores, channel);
      }
    : (channel) => {
        let SearchField;
        let SoundboardSoundPickerList;
        let _undefined;
        let availableSounds;
        let c5;
        let categories;
        let currentUser;
        let intl;
        let intl2;
        let items4;
        let items5;
        let items6;
        let mediaSessionId;
        let obj17;
        let obj19;
        let obj7;
        let sum;
        let tmp15;
        let tmp27;
        let tmp3;
        let tmp4;
        channel = channel.channel;
        const initialScrollLocation = channel.initialScrollLocation;
        let stateFromStores;
        availableSounds = undefined;
        c5 = undefined;
        const analyticsSource = channel.analyticsSource;
        const tmp = closure_14();
        [tmp3, tmp4] = stateFromStores(availableSounds.useState(0), 2);
        const tmp2 = stateFromStores(availableSounds.useState(0), 2);
        let ref = availableSounds.useRef(null);
        let obj = channel(ref[14]);
        const sharedValue = obj.useSharedValue(0);
        const items = [UserStore];
        const obj2 = channel(ref[15]);
        stateFromStores = obj2.useStateFromStores(items, () => currentUser.getCurrentUser());
        const items1 = [RTCConnectionStore];
        const obj3 = channel(ref[15]);
        const stateFromStores1 = obj3.useStateFromStores(items1, () => mediaSessionId.getMediaSessionId());
        ({ categories, availableSounds } = initialScrollLocation(ref[16])(channel, {
          filterOutEmptyCurrentGuild: true,
        }));
        initialScrollLocation(ref[16])(channel, { filterOutEmptyCurrentGuild: true });
        const tmp13 = closure_7((searchQuery) => searchQuery.searchQuery);
        const useState = availableSounds.useState;
        const obj4 = channel(ref[17]);
        [tmp15, c5] = stateFromStores(useState(obj4.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
        stateFromStores(useState(obj4.searchSounds(tmp13, availableSounds, stateFromStores, channel)), 2);
        const obj5 = channel(ref[16]);
        const searchCategories = obj5.useSearchCategories(categories, tmp15, tmp13);
        const insets = initialScrollLocation(ref[18])({ isKeyboardAwareOnAndroid: false }).insets;
        const items2 = [channel, stateFromStores, availableSounds];
        const tmp17 = initialScrollLocation(ref[19]);
        const analyticsLocations = tmp17(initialScrollLocation(ref[20]).SOUNDBOARD_ACTION_SHEET).analyticsLocations;
        const callback = availableSounds.useCallback((View) => {
          metroRequire(View);
          const obj = searchSounds;
          _undefined(obj.searchSounds(View, availableSounds, stateFromStores, channel));
        }, items2);
        const obj6 = {
          type: channel(ref[21]).ImpressionTypes.HALFSHEET,
          name: channel(ref[21]).ImpressionNames.SOUNDBOARD_POPOUT,
          properties: obj7,
        };
        obj7 = {
          source: analyticsSource,
          guild_id: channel.guild_id,
          media_session_id: stateFromStores1,
          type: SoundboardPickerType.FULL_PICKER,
        };
        const tmp19 = initialScrollLocation(ref[22]);
        tmp19(obj6);
        const obj8 = channel(ref[14]);
        const sharedValue1 = obj8.useSharedValue(-1);
        const obj9 = channel(ref[14]);
        const sharedValue2 = obj9.useSharedValue(false);
        ref = availableSounds.useRef(false);
        const items3 = [initialScrollLocation];
        const callback1 = availableSounds.useCallback(() => {
          const current = null == initialScrollLocation || ref.current;
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
        const obj10 = { value: analyticsLocations, children: items4 };
        const AnalyticsLocationProvider = channel(ref[19]).AnalyticsLocationProvider;
        const obj11 = channel(ref[23]);
        let isIOSResult = obj11.isIOS();
        if (isIOSResult) {
          const obj12 = {
            animatedSheetIndex: sharedValue1,
            portalHostName: "soundboard-footer",
            followSystemKeyboard: true,
          };
          isIOSResult = closure_12(tmp11(tmp7[24]), obj12);
        }
        items4 = [isIOSResult];
        const obj13 = {
          animatedIndex: sharedValue1,
          scrollable: true,
          startExpanded: true,
          onExpand: callback1,
          footer: tmp27,
          children: items6,
        };
        BottomSheet = tmp6(tmp7[32]).BottomSheet;
        tmp27 = undefined;
        const tmp6Result = channel(ref[23]);
        if (tmp6Result.isAndroid()) {
          tmp27 = closure_12(tmp6(tmp7[25]).PortalHost, { name: "soundboard-footer" });
        }
        const obj14 = { style: tmp.container, children: items5 };
        const obj15 = {
          accessibilityRole: "header",
          variant: "heading-lg/bold",
          style: tmp.title,
          children: intl.string(channel(ref[26]).t.ABjMWI),
        };
        const Text = tmp6(tmp7[27]).Text;
        intl = tmp6(tmp7[26]).intl;
        items5 = [closure_12(Text, obj15), , ,];
        const obj16 = { style: tmp.header, children: closure_12(SearchField, obj17) };
        obj17 = { size: "md", placeholder: intl2.string(channel(ref[26]).t.sKt3xS), onChange: callback };
        SearchField = tmp6(tmp7[28]).SearchField;
        intl2 = tmp6(tmp7[26]).intl;
        items5[1] = closure_12(c5, obj16);
        const obj18 = { style: tmp.body, children: closure_12(SoundboardSoundPickerList, obj19) };
        obj19 = {
          listRef: ref,
          channel,
          insetBottom: sum + initialScrollLocation(ref[11]).space.PX_16,
          scrollPosition: sharedValue,
          setCategoryIndex: tmp4,
          categories: searchCategories,
          shouldShowPremiumUpsell: sharedValue2,
        };
        SoundboardSoundPickerList = tmp6(tmp7[29]).SoundboardSoundPickerList;
        sum = EXPRESSION_FOOTER_HEIGHT + insets.bottom;
        items5[2] = closure_12(c5, obj18);
        items5[3] = closure_12(initialScrollLocation(ref[30]), { shouldShow: sharedValue2 });
        items6 = [closure_13(c5, obj14)];
        const obj20 = { guildId: channel.guild_id, listRef: ref, categories, categoryIndex: tmp3 };
        items6[1] = closure_12(initialScrollLocation(ref[31]), obj20);
        items4[1] = closure_13(BottomSheet, obj13);
        return closure_13(AnalyticsLocationProvider, obj10);
      },
);
const result = size.fileFinishedImporting("modules/soundboard/native/SoundboardSoundPicker.tsx");

export default memoResult;
