// discord_app/modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx
import initialize from "../../../../../discord_common/js/packages/flux/index.tsx";
import nativeDefault from "../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../intl/index.native.tsx";
import native from "../../../../design/void/native.tsx";
import Text_Text from "../../../../design/components/Text/native/Text.tsx";
import components_Button_Button from "../../../../design/components/Button/native/Button.native.tsx";
import GuildIcon from "../../../guild/native/GuildIcon.tsx";
import useInitialValueDefault from "../../../../hooks/useInitialValue.tsx";
import NavigatorHeader from "../../../../design/components/Navigator/native/NavigatorHeader.native.tsx";
import FreeFormInputGroupDefault from "../../../../design/void/Form/native/FreeFormInputGroup.tsx";
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import GuildPromptsActionCreatorsDefault from "../../../guild/GuildPromptsActionCreators.tsx";
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "GuildDirectoryNicknameUpsellModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const require = globalThis.__r;
const GuildIconDefault = GuildIcon;

require = fn;
function GuildDirectoryNicknameUpsell(arg0) {
  ({ guildId: require, handleClose: importDefault } = arg0);
  dependencyMap = undefined;
  let ref;
  noop = async function _handleSubmit() {
    closure_1 = tmp3;
    dependencyMap(null);
    await closure_0(tmp30[12]).updateGuildSelfMember(closure_2_0, { nick });
    if (1 === tmp7) {
      c3 = 0;
      closure_128_0 = tmp30;
      const aPIError = new closure_0(tmp30[13]).APIError(closure_128_0);
      closure_129_2(aPIError);
      c5 = 3;
    } else if (arg0 === 1) {
      c5 = 3;
      throw value;
    } else if (arg0 !== 2) {
      closure_129_1();
      c3 = 0;
    }
    return value;
  };
  const tmp = closure_12();
  const items = [GuildStore];
  const stateFromStores = initialize.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(noop.useState(null), 2);
  const tmp7 = ref(noop.useState(""), 2);
  value = tmp7[0];
  ref = noop.useRef(null);
  const obj3 = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp.container];
  const tmp6 = ref(noop.useState(null), 2);
  items1[1] = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  obj3.contentContainerStyle = items1;
  const obj5 = { style: tmp.guildIcon, guild: stateFromStores, size: null };
  const obj4 = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  obj5.size = GuildIcon.GuildIconSizes.XLARGE;
  const items2 = [closure_10(GuildIconDefault, obj5), , , ,];
  const obj6 = { style: tmp.header, children: null };
  const obj7 = {
    style: tmp.title,
    accessibilityRole: "header",
    variant: "heading-xl/extrabold",
    color: "mobile-text-heading-primary",
    children: null,
  };
  const intl = util.intl;
  let name;
  if (stateFromStores != null) {
    name = stateFromStores.name;
  }
  obj7.children = intl.format(util.t["d+6kzl"], { guildName: name });
  const items3 = [closure_10(Text_Text.Text, obj7)];
  const obj8 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = util.intl;
  obj8.children = intl2.string(util.t.b3L8yx);
  items3[1] = closure_10(Text_Text.Text, obj8);
  obj6.children = items3;
  items2[1] = closure_11(closure_6, obj6);
  const obj10 = {
    label: null,
    placeholder: null,
    value: null,
    onChangeText: null,
    style: null,
    textStyle: null,
    clearButtonVisibility: null,
    error: null,
    onFocus: null,
    onBlur: null,
  };
  const intl3 = util.intl;
  obj10.label = intl3.string(util.t.ilDlmW);
  const intl4 = util.intl;
  obj10.placeholder = intl4.string(util.t.RfWvWI);
  obj10.value = value;
  obj10.onChangeText = tmp7[1];
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  obj10.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (obj2 != null) {
    firstFieldErrorMessage = obj2.getFirstFieldErrorMessage("name");
  }
  obj10.error = firstFieldErrorMessage;
  obj10.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj10.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = closure_10(FreeFormInputGroupDefault, obj10);
  items2[3] = closure_10(closure_6, { style: tmp.redesignGrowSpacing });
  const obj12 = { style: tmp.redesignButtonContainer, children: null };
  const obj22 = { size: "lg", text: null, onPress: null };
  const intl5 = util.intl;
  obj22.text = intl5.string(util.t.Np4yXU);
  obj22.onPress = function handleSubmit() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj12.children = closure_10(components_Button_Button.Button, obj22);
  items2[4] = closure_10(closure_6, obj12);
  obj3.children = items2;
  return closure_11(closure_7, obj3);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildPrompts = fn(12999).GuildPrompts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
const createStyles = fn(4829);
let obj2 = {
  container: { flex: 1, flexGrow: 2, marginTop: fn(5987).NAV_BAR_HEIGHT },
  guildIcon: { alignSelf: "center", marginTop: 16 },
  title: { marginBottom: 8, textAlign: "center" },
  description: { textAlign: "center" },
  header: { alignItems: "center", justifyContent: "center", padding: 16 },
  input: { marginHorizontal: 16 },
  redesignTextInput: null,
  redesignGrowSpacing: null,
  redesignButtonContainer: null,
};
let obj3 = { flex: 1, flexGrow: 2, marginTop: fn(5987).NAV_BAR_HEIGHT };
obj2.redesignTextInput = { borderRadius: nativeDefault.radii.lg };
let obj4 = { borderRadius: nativeDefault.radii.lg };
obj2.redesignGrowSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
let obj5 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
obj2.redesignButtonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(obj2);
const UPSELL_SCREEN_KEY = "UPSELL_SCREEN_KEY";
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/directory_channels/native/components/GuildDirectoryNicknameUpsellModal.tsx",
);

export default function GuildDirectoryNicknameUpsellModal(arg0) {
  _require = arg0;
  return closure_10(require("Navigator").Navigator, {
    screens: useInitialValueDefault(() => {
      ({ guildId: closure_0, onHide: closure_1 } = guildId);
      function handleClose() {
        GuildPromptsActionCreatorsDefault.viewPrompt(constants.REAL_NAME_PROMPT, guildId);
        closure_1_1();
        GuildDirectoryNicknameUpsellModalActionCreatorsDefault.close();
      }
      let obj = {};
      const obj2 = {
        fullscreen: true,
        headerLeft: NavigatorHeader.getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return closure_2_10(GuildDirectoryNicknameUpsell, { guildId, handleClose });
        },
      };
      obj[UPSELL_SCREEN_KEY] = obj2;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY,
  });
}
