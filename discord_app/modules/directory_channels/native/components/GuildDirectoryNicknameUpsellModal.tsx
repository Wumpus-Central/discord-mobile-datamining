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
import useSafeAreaInsetsKeyboardAwareDefault from "../../../safe_area/useSafeAreaInsetsKeyboardAware.native.tsx";
import GuildPromptsActionCreatorsDefault from "../../../guild/GuildPromptsActionCreators.tsx";
import GuildDirectoryNicknameUpsellModalActionCreatorsDefault from "GuildDirectoryNicknameUpsellModalActionCreators.tsx";
import asyncGeneratorStep from "../../../../../_runtime/00005_asyncGeneratorStep.js";
import _slicedToArray from "../../../../../_runtime/metro/00032__.js";
import noop from "../../../../../_runtime/metro/00019__.js";
import GuildStore from "../../../../stores/GuildStore.tsx";

const GuildIconDefault = GuildIcon;

const FreeFormInputGroupDefault = tmp5(6605);
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
      throw arg1;
    } else if (arg0 !== 2) {
      closure_129_1();
      c3 = 0;
    }
    return arg1;
  };
  const tmp = closure_12();
  let obj = initialize;
  const items = [GuildStore];
  const stateFromStores = obj.useStateFromStores(items, () => GuildStore.getGuild(_require));
  const insets = useSafeAreaInsetsKeyboardAwareDefault().insets;
  [obj2, c2] = ref(noop.useState(null), 2);
  const tmp7 = ref(noop.useState(""), 2);
  value = tmp7[0];
  ref = noop.useRef(null);
  obj = { ref, contentContainerStyle: null, children: null };
  const items1 = [tmp.container];
  obj = { paddingBottom: insets.bottom + nativeDefault.space.PX_16, paddingTop: insets.top };
  items1[1] = obj;
  obj.contentContainerStyle = items1;
  const obj1 = { style: tmp.guildIcon, guild: stateFromStores, size: null };
  const tmp11 = closure_7;
  const tmp6 = ref(noop.useState(null), 2);
  obj1.size = GuildIcon.GuildIconSizes.XLARGE;
  const items2 = [closure_10(GuildIconDefault, obj1), , , ,];
  obj2 = { style: tmp.header, children: null };
  const obj3 = {
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
  obj3.children = intl.format(util.t["d+6kzl"], { guildName: name });
  const items3 = [closure_10(Text_Text.Text, obj3)];
  const obj4 = { style: tmp.description, variant: "text-sm/medium", color: "text-default", children: null };
  const intl2 = tmp2(1114).intl;
  obj4.children = intl2.string(util.t.b3L8yx);
  items3[1] = closure_10(Text_Text.Text, obj4);
  obj2.children = items3;
  items2[1] = closure_11(closure_6, obj2);
  const obj5 = {
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
  const intl3 = tmp2(1114).intl;
  obj5.label = intl3.string(util.t.ilDlmW);
  const intl4 = tmp2(1114).intl;
  obj5.placeholder = intl4.string(util.t.RfWvWI);
  obj5.value = value;
  obj5.onChangeText = tmp7[1];
  ({ input: obj9.style, redesignTextInput: obj9.textStyle } = tmp);
  obj5.clearButtonVisibility = native.ClearButtonVisibility.WITH_CONTENT;
  let firstFieldErrorMessage;
  if (obj1 != null) {
    firstFieldErrorMessage = obj1.getFirstFieldErrorMessage("name");
  }
  obj5.error = firstFieldErrorMessage;
  obj5.onFocus = function onFocus() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  obj5.onBlur = function onBlur() {
    const timerId = setTimeout(() => {
      const current = ref.current;
      if (current != null) {
        current.scrollToEnd();
      }
    }, 100);
  };
  items2[2] = closure_10(FreeFormInputGroupDefault, obj5);
  items2[3] = closure_10(closure_6, { style: tmp.redesignGrowSpacing });
  const obj7 = { style: tmp.redesignButtonContainer, children: null };
  const obj8 = { size: "lg", text: null, onPress: null };
  const intl5 = tmp2(1114).intl;
  obj8.text = intl5.string(util.t.Np4yXU);
  obj8.onPress = function handleSubmit() {
    const self = this;
    const apply = closure_5.apply;
    if (typeof apply === "unknown") {
      let applyArgumentsResult = HermesBuiltin.applyArguments(self);
    } else {
      applyArgumentsResult = apply(self, arguments);
    }
    return applyArgumentsResult;
  };
  obj7.children = closure_10(components_Button_Button.Button, obj8);
  items2[4] = closure_10(closure_6, obj7);
  obj.children = items2;
  return closure_11(tmp11, obj);
}
get_ActivityIndicator = fn(17);
({ View: metroRequire, ScrollView: closure_7 } = get_ActivityIndicator);
const GuildPrompts = fn(12651).GuildPrompts;
const jsxProd = fn(21);
({ jsx: c10, jsxs: closure_11 } = jsxProd);
fn(4560);
let createStyles = {
  container: null,
  guildIcon: null,
  title: null,
  description: null,
  header: null,
  input: null,
  redesignTextInput: null,
  redesignGrowSpacing: null,
  redesignButtonContainer: null,
};
createStyles = { flex: 1, flexGrow: 2, marginTop: fn(5682).NAV_BAR_HEIGHT };
createStyles.container = createStyles;
createStyles.guildIcon = { alignSelf: "center", marginTop: 16 };
createStyles.title = { marginBottom: 8, textAlign: "center" };
createStyles.description = { textAlign: "center" };
createStyles.header = { alignItems: "center", justifyContent: "center", padding: 16 };
createStyles.input = { marginHorizontal: 16 };
createStyles.redesignTextInput = { borderRadius: nativeDefault.radii.lg };
let obj1 = { borderRadius: nativeDefault.radii.lg };
createStyles.redesignGrowSpacing = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
const obj2 = { flexGrow: 2, minHeight: nativeDefault.space.PX_24 };
createStyles.redesignButtonContainer = { paddingHorizontal: nativeDefault.space.PX_16 };
let closure_12 = createStyles.createStyles(createStyles);
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
      obj = {
        fullscreen: true,
        headerLeft: NavigatorHeader.getHeaderCloseButton(handleClose),
        headerTitle() {
          return null;
        },
        render() {
          return closure_2_10(GuildDirectoryNicknameUpsell, { guildId, handleClose });
        },
      };
      obj[UPSELL_SCREEN_KEY] = obj;
      return obj;
    }),
    initialRouteName: UPSELL_SCREEN_KEY,
  });
}
