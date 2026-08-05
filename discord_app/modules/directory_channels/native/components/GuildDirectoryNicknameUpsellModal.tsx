// discord_app/modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx
import GuildPrompts from "GuildPrompts";
import _slicedToArray from "_slicedToArray";
import Button from "Button";
import get_ActivityIndicator from "module_8276";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import { GuildPrompts } from "GuildPrompts";
import jsxProd from "module_11930";
import createCacheKey from "createCacheKey";

let c10;
let closure_6;
let error;
let unpackModuleId;
const require = arg1;
function GuildDirectoryNicknameUpsell(arg0) {
  let c2;
  let importDefault;
  let obj2;
  let require;
  ({ guildId: require, handleClose: importDefault } = arg0);
  let dependencyMap;
  let first;
  let ref;
  function _handleSubmit() {
    const self = this;
    const tmp = first(function*() {
      const callback = tmp3;
      outer1_2(null);
      const obj1 = { nick: null };
      obj1[0] = c3;
      c3 = 1;
      const obj2 = outer1_0(outer1_2[12]);
      yield obj2.updateGuildSelfMember(outer1_0, obj1);
      if (1 === tmp7) {
        c3 = 0;
        let closure_0 = callback2;
        const aPIError = new outer1_0(outer1_2[13]).APIError(closure_0);
        callback2(aPIError);
        let c5 = 3;
      } else if (arg0 === 1) {
        c5 = 3;
        throw arg1;
      } else if (arg0 !== 2) {
        callback();
        c3 = 0;
      }
      c3 = 0;
      return arg1;
    });
    const _handleSubmit = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = createCacheKey();
  let obj = require("../../../../../discord_common/js/packages/flux/index.tsx") /* initialize */;
  const items = [createGuildRecordFromRust];
  const stateFromStores = obj.useStateFromStores(items, () => outer1_8.getGuild(closure_0));
  const insets = require("../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx")().insets;
  [obj2, c2] = ref(_handleSubmit.useState(null), 2);
  const tmp7 = ref(_handleSubmit.useState(""), 2);
  first = tmp7[0];
  ref = _handleSubmit.useRef(null);
  obj = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: insets.bottom + require("../../../../../discord_common/js/packages/tokens/native.tsx").space.PX_16, paddingTop: insets.top };
  items1[1] = obj;
  obj[1] = items1;
  let obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: null };
  const tmp11 = closure_7;
  const tmp5 = importDefault;
  const tmp6 = ref(_handleSubmit.useState(null), 2);
  obj1[2] = require("../../../guild/native/GuildIcon.tsx") /* GuildIconSizes */.GuildIconSizes.XLARGE;
  const items2 = [callback(require("../../../guild/native/GuildIcon.tsx"), obj1), , , , ];
  obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = require("../../../../intl/index.native.tsx") /* getSystemLocale */.intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  obj3[4] = intl.format(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t["d+6kzl"], { guildName: name });
  const items3 = [callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj3), ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj4[3] = intl2.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.b3L8yx);
  items3[1] = callback(require("../../../../design/components/Text/native/Text.tsx") /* Text */.Text, obj4);
  obj2[1] = items3;
  items2[1] = closure_11(closure_6, obj2);
  const obj5 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const tmp13 = require("../../../guild/native/GuildIcon.tsx");
  const intl3 = tmp2(1236).intl;
  obj5[0] = intl3.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.ilDlmW);
  const intl4 = tmp2(1236).intl;
  obj5[1] = intl4.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.RfWvWI);
  obj5[2] = first;
  obj5[3] = tmp7[1];
  ({ input: obj9[4], redesignTextInput: obj9[5] } = tmp);
  obj5[6] = require("../../../../design/void/native.tsx") /* Button */.ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (obj1 != null) {
    firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
  }
  obj5[7] = firstFieldErrorMessage;
  obj5[8] = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj5[9] = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = callback(tmp5(8276), obj5);
  items2[3] = callback(closure_6, { style: tmp.redesignGrowSpacing });
  const obj7 = { style: tmp.redesignButtonContainer, children: null };
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[1] = intl5.string(require("../../../../intl/index.native.tsx") /* getSystemLocale */.t.Np4yXU);
  obj8[2] = function handleSubmit() {
    const self = this;
    const apply = _handleSubmit.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7[1] = callback(require("../../../../design/components/Button/native/Button.native.tsx") /* Button */.Button, obj8);
  items2[4] = callback(closure_6, obj7);
  obj[2] = items2;
  return closure_11(tmp11, obj);
}
({ View: closure_6, ScrollView: error } = get_ActivityIndicator);
({ jsx: c10, jsxs: unpackModuleId } = jsxProd);
createCacheKey = { container: null, guildIcon: null, title: null, description: null, header: null, input: null, redesignTextInput: null, redesignGrowSpacing: null, redesignButtonContainer: null };
createCacheKey = { flex: 1, flexGrow: 2, marginTop: require("NAV_BAR_HEIGHT").NAV_BAR_HEIGHT };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { alignSelf: "center", marginTop: 16 };
createCacheKey[2] = { marginBottom: 8, textAlign: "center" };
createCacheKey[3] = { textAlign: "center" };
createCacheKey[4] = { alignItems: "center", justifyContent: "center", padding: 16 };
createCacheKey[5] = { marginHorizontal: 16 };
createCacheKey[6] = { borderRadius: require("Themes").radii.lg };
let obj1 = { borderRadius: require("Themes").radii.lg };
createCacheKey[7] = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
let obj2 = { flexGrow: 2, minHeight: require("Themes").space.PX_24 };
createCacheKey[8] = { paddingHorizontal: require("Themes").space.PX_16 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
let obj3 = { paddingHorizontal: require("Themes").space.PX_16 };
const result = require("noop").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  const _require = arg0;
  let obj = { screens: null, initialRouteName: null };
  obj[0] = require("../../../../hooks/useInitialValue.tsx")(() => {
    let closure_0;
    let closure_1;
    ({ guildId: closure_0, onHide: closure_1 } = callback);
    function handleClose() {
      outer1_1(handleClose[20]).viewPrompt(outer1_9.REAL_NAME_PROMPT, closure_0);
      callback();
      const obj = outer1_1(handleClose[20]);
      outer1_1(handleClose[21]).close();
    }
    let obj = {};
    obj = { fullscreen: true, headerLeft: null, headerTitle: null, render: null };
    obj[1] = callback(outer1_2[22]).getHeaderCloseButton(handleClose);
    obj[2] = function headerTitle() {
      return null;
    };
    obj[3] = function render() {
      return outer1_10(outer1_13, { guildId: closure_0, handleClose });
    };
    obj[outer1_14] = obj;
    return obj;
  });
  obj[1] = UPSELL_SCREEN_KEY;
  return callback(_require("../../../../design/components/Navigator/native/Navigator.native.tsx").Navigator, obj);
};