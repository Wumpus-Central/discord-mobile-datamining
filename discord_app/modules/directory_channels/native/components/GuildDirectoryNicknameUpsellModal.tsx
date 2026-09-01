// === Module 12200: GuildDirectoryNicknameUpsell ===

// Module 12200 (GuildDirectoryNicknameUpsell)
import initialize from "initialize" /* 589 */;
import ThemesDefault from "Themes" /* 712 */;
import getSystemLocale from "getSystemLocale" /* 1236 */;
import Button from "Button" /* 1297 */;
import Text from "Text" /* 4474 */;
import Button2 from "Button" /* 4928 */;
import useSafeAreaInsetsKeyboardAwareDefault from "useSafeAreaInsetsKeyboardAware" /* 5594 */;
import useInitialValueDefault from "useInitialValue" /* 5941 */;
import GuildIconSizes from "GuildIconSizes" /* 6004 */;
import GuildIconSizesDefault from "GuildIconSizes" /* 6004 */;
import _modDef7704 from "module_7704" /* 7704 */;
import closure_3 from "asyncGeneratorStep" /* 5 */;
import closure_4 from "_slicedToArray" /* 32 */;
import closure_5 from "noop" /* 19 */;
import get_ActivityIndicator from "get ActivityIndicator" /* 17 */;
import closure_8 from "createGuildRecordFromRust" /* 1909 */;
import { GuildPrompts } from "GuildPrompts" /* 12189 */;
import jsxProd from "jsxProd" /* 21 */;
import createCacheKey from "createCacheKey" /* 4478 */;

require = arg1;
function GuildDirectoryNicknameUpsell(arg0) {
  ({ guildId: require, handleClose: importDefault } = arg0);
  dependencyMap = undefined;
  let first;
  let ref;
  function _handleSubmit() {
    const self = this;
    const tmp = first(function*() {
      const callback = tmp3;
      closure_1_2(null);
      obj1 = { nick: null };
      obj1[0] = c3;
      c3 = 1;
      const obj2 = closure_1_0(closure_1_2[12]);
      yield obj2.updateGuildSelfMember(closure_1_0, obj1);
      if (1 === tmp7) {
        c3 = 0;
        closure_0 = callback2;
        const aPIError = new closure_1_0(closure_1_2[13]).APIError(closure_0);
        callback2(aPIError);
        c5 = 3;
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
    closure_5 = tmp;
    const apply = tmp.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  }
  let tmp = callback2();
  let obj = initialize;
  const items = [closure_8];
  const stateFromStores = obj.useStateFromStores(items, () => closure_1_8.getGuild(closure_0));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(_handleSubmit.useState(null), 2);
  const tmp7 = ref(_handleSubmit.useState(""), 2);
  first = tmp7[0];
  ref = _handleSubmit.useRef(null);
  obj = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp.container, ];
  obj = { paddingBottom: insets.bottom + ThemesDefault.space.PX_16, paddingTop: insets.top };
  items1[1] = obj;
  obj[1] = items1;
  obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: null };
  const tmp11 = closure_7;
  const tmp5 = importDefault;
  const tmp6 = ref(_handleSubmit.useState(null), 2);
  obj1[2] = GuildIconSizes.GuildIconSizes.XLARGE;
  const items2 = [callback(GuildIconSizesDefault, obj1), , , , ];
  obj2 = { style: tmp.header, children: null };
  const obj3 = { style: tmp.title, accessibilityRole: "header", variant: "heading-xl/extrabold", color: "mobile-text-heading-primary", children: null };
  const intl = getSystemLocale.intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  obj3[4] = intl.format(getSystemLocale.t["d+6kzl"], { guildName: name });
  const items3 = [callback(Text.Text, obj3), ];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1236).intl;
  obj4[3] = intl2.string(getSystemLocale.t.b3L8yx);
  items3[1] = callback(Text.Text, obj4);
  obj2[1] = items3;
  items2[1] = closure_11(closure_6, obj2);
  const obj5 = { label: null, placeholder: null, value: null, onChangeText: null, style: null, textStyle: null, clearButtonVisibility: null, error: null, onFocus: null, onBlur: null };
  const tmp13 = GuildIconSizesDefault;
  const intl3 = tmp2(1236).intl;
  obj5[0] = intl3.string(getSystemLocale.t.ilDlmW);
  const intl4 = tmp2(1236).intl;
  obj5[1] = intl4.string(getSystemLocale.t.RfWvWI);
  obj5[2] = first;
  obj5[3] = tmp7[1];
  ({ input: obj9[4], redesignTextInput: obj9[5] } = tmp);
  obj5[6] = Button.ClearButtonVisibility.WITH_CONTENT;
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
  items2[2] = callback(_modDef7704, obj5);
  items2[3] = callback(closure_6, { style: tmp.redesignGrowSpacing });
  const obj7 = { style: tmp.redesignButtonContainer, children: null };
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1236).intl;
  obj8[1] = intl5.string(getSystemLocale.t.Np4yXU);
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
  obj7[1] = callback(Button2.Button, obj8);
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
createCacheKey[6] = { borderRadius: ThemesDefault.radii.lg };
let obj1 = { borderRadius: ThemesDefault.radii.lg };
createCacheKey[7] = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
let obj2 = { flexGrow: 2, minHeight: ThemesDefault.space.PX_24 };
createCacheKey[8] = { paddingHorizontal: ThemesDefault.space.PX_16 };
let closure_12 = createCacheKey.createStyles(createCacheKey);
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
let obj3 = { paddingHorizontal: ThemesDefault.space.PX_16 };
const result = require("set").fileFinishedImporting("modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx");

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  const _require = arg0;
  return callback(_require(6008).Navigator, {
    screens: useInitialValueDefault(() => {
      ({ guildId: closure_0, onHide: closure_1 } = callback);
      function handleClose() {
        closure_1_1(handleClose[20]).viewPrompt(closure_1_9.REAL_NAME_PROMPT, closure_0);
        callback();
        const obj = closure_1_1(handleClose[20]);
        closure_1_1(handleClose[21]).close();
      }
      let obj = {};
      obj = {
        fullscreen: true,
        headerLeft: callback(closure_1_2[22]).getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return closure_1_10(closure_1_13, { guildId: closure_0, handleClose });
        }
      };
      obj[closure_1_14] = obj;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY
  });
};