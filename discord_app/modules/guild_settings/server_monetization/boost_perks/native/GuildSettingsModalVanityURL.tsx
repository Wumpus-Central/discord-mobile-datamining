// discord_app/modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx
import get_ActivityIndicator from "registerAsset";
import FormStates from "FormStates";
import createGuildRecordFromRust from "createGuildRecordFromRust";
import handleFormInit from "handleFormInit";
import { GuildFeatures } from "ME";
import jsxProd from "set";
import createCacheKey from "createCacheKey";
import importAllResult from "initialize";
import { registerAsset } from "../../../../../../_runtime/16586_registerAsset.js";
import { ChangeVanityURLActionCreators } from "../../../../../actions/ChangeVanityURLActionCreators.tsx";
import { Text } from "../../../../../design/components/Text/native/Text.tsx";
import { TextInput } from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import { getSystemLocale } from "../../../../../intl/index.native.tsx";
import { getInviteURL } from "../../../../instant_invite/getInviteURL.tsx";
import { getErrorMessageFromErrorCode } from "../GuildSettingsVanityURLUtils.tsx";

let c10;
let c3;
let c4;
let c9;
let unpackModuleId;
let require = arg1;
({ View: c3, Image: c4 } = get_ActivityIndicator);
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = jsxProd);
createCacheKey = { wrapper: null, section: null, hints: null, center: null, image: null };
createCacheKey = { flex: 1, justifyContent: "space-between", paddingTop: require("Themes").space.PX_32 };
createCacheKey[0] = createCacheKey;
createCacheKey[1] = { paddingHorizontal: require("Themes").space.PX_12 };
let obj1 = { paddingHorizontal: require("Themes").space.PX_12 };
createCacheKey[2] = { marginTop: require("Themes").space.PX_8, gap: require("Themes").space.PX_4 };
createCacheKey[3] = { alignItems: "center", flexDirection: "column" };
createCacheKey[4] = { width: 135, height: 183, marginBottom: 27 };
createCacheKey = createCacheKey.createStyles(createCacheKey);
const PureComponent = importAllResult.PureComponent;
class GuildSettingsModalVanityURL extends PureComponent {
  constructor() {
    applyArgumentsResult = HermesBuiltin.applyArguments(new.target, new.target);
    closure_0 = applyArgumentsResult;
    str = applyArgumentsResult.props.vanityURLCode;
    if (str == null) {
      str = "";
    }
    applyArgumentsResult.state = { isEditing: false, vanityURLCode: str };
    applyArgumentsResult.handleStartEditing = function handleStartEditing() {
      outer1_1(outer1_2[12]).openModal(applyArgumentsResult.props.guild.id, applyArgumentsResult.state.vanityURLCode);
      applyArgumentsResult.setState({ isEditing: true });
    };
    applyArgumentsResult.handleChange = function handleChange(vanityURLCode) {
      applyArgumentsResult.setState({ vanityURLCode });
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      return new Promise((arg0) => {
        outer1_1(outer1_2[12]).closeModal();
        state.setState({ isEditing: false });
        arg0(true);
      });
    };
    applyArgumentsResult.handleSave = function handleSave() {
      applyArgumentsResult.setState({ isEditing: false });
      outer1_1(outer1_2[12]).changeVanityURL(applyArgumentsResult.props.guild.id, applyArgumentsResult.state.vanityURLCode);
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalVanityURL.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigator(undefined, this.state);
};
prototype["componentDidUpdate"] = function componentDidUpdate(vanityURLCode) {
  const self = this;
  if (this.props.vanityURLCode !== vanityURLCode.vanityURLCode) {
    let str = self.props.vanityURLCode;
    if (str == null) {
      str = "";
    }
    const obj = { vanityURLCode: null };
    obj[0] = str;
    self.setState(obj);
  }
  self.updateNavigator(vanityURLCode, arg1);
};
prototype["updateNavigator"] = function updateNavigator(submitting, isEditing) {
  let navigation;
  const self = this;
  ({ submitting, navigation } = this.props);
  isEditing = this.state.isEditing;
  let tmp = null != submitting;
  if (tmp) {
    tmp = submitting === submitting.submitting;
  }
  if (tmp) {
    tmp = isEditing === isEditing.isEditing;
  }
  if (!tmp) {
    if (submitting) {
      let fn = () => null;
    } else if (isEditing) {
      let setOptionsResult = self(5223);
      fn = setOptionsResult.getHeaderConditionalBackButton(this.handleCancel);
    }
    setOptionsResult = { headerLeft: null, headerRight: null };
    setOptionsResult[0] = fn;
    if (submitting) {
      let fn2 = () => callback(self(table[9]).HeaderSubmittingIndicator, {});
    } else {
      fn2 = isEditing ? (() => {
        const obj = { onPress: self.handleSave, text: null };
        const intl = self(outer1_2[11]).intl;
        obj[1] = intl.string(self(outer1_2[11]).t["R3BPH+"]);
        return outer1_9(self(outer1_2[10]).HeaderActionButton, obj);
      }) : (() => {
        const obj = { onPress: self.handleStartEditing, text: null };
        const intl = self(outer1_2[11]).intl;
        obj[1] = intl.string(self(outer1_2[11]).t.bt75uw);
        return outer1_9(self(outer1_2[10]).HeaderActionButton, obj);
      });
    }
    setOptionsResult[1] = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  ChangeVanityURLActionCreators.closeModal();
};
prototype["render"] = function render() {
  let errorDetails;
  let guild;
  let isEditing;
  let styles;
  let vanityURLCode;
  const self = this;
  ({ errorDetails, guild, styles } = this.props);
  ({ isEditing, vanityURLCode } = this.state);
  if (null != vanityURLCode) {
    if ("" !== vanityURLCode) {
      let obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl6 = getSystemLocale.intl;
      obj = { url: null };
      obj[0] = getInviteURL(vanityURLCode);
      obj[2] = intl6.format(getSystemLocale.t.FcGpNU, obj);
      const tmp24 = getInviteURL(vanityURLCode);
      const tmp = callback(Text.Text, obj);
    }
  }
  if (isEditing) {
    let errorMessageFromErrorCode;
    if (null != errorDetails) {
      obj = getErrorMessageFromErrorCode;
      errorMessageFromErrorCode = obj.getErrorMessageFromErrorCode(errorDetails.code);
    }
    let hasItem;
    if (guild != null) {
      const features = guild.features;
      hasItem = features.has(GuildFeatures.GUILD_WEB_PAGE_VANITY_URL);
    }
    let tmp17Result = true === hasItem;
    if (tmp17Result) {
      let hasItem1;
      if (guild != null) {
        const features2 = guild.features;
        hasItem1 = features2.has(GuildFeatures.VANITY_URL);
      }
      tmp17Result = true !== hasItem1;
    }
    const obj1 = { style: null, children: null };
    const items = [styles.wrapper, self.props.contentContainerStyle];
    obj1[0] = items;
    const obj2 = { style: null, children: null };
    obj2[0] = styles.section;
    const obj3 = { isDisabled: null, value: null, onChange: null, autoFocus: null, errorMessage: null };
    obj3[0] = !isEditing;
    obj3[1] = vanityURLCode;
    obj3[2] = self.handleChange;
    obj3[3] = isEditing;
    obj3[4] = errorMessageFromErrorCode;
    const items1 = [callback(TextInput.TextInput, obj3), ];
    const obj4 = { style: null, children: null };
    obj4[0] = styles.hints;
    const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = getSystemLocale.intl;
    obj5[2] = intl2.string(getSystemLocale.t.IhWDcu);
    const items2 = [callback(Text.Text, obj5), , , , ];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl3 = getSystemLocale.intl;
    obj6[2] = intl3.string(getSystemLocale.t["1mRkFr"]);
    items2[1] = callback(Text.Text, obj6);
    const obj7 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl4 = getSystemLocale.intl;
    obj7[2] = intl4.string(getSystemLocale.t["eH/HMz"]);
    items2[2] = callback(Text.Text, obj7);
    if (tmp17Result) {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl5 = tmp18(1236).intl;
      obj8[2] = intl5.string(tmp18(1236).t.o3kmm3);
      tmp17Result = tmp17(tmp18(4251).Text, obj8);
    }
    items2[3] = tmp17Result;
    items2[4] = tmp;
    obj4[1] = items2;
    items1[1] = closure_10(closure_3, obj4);
    obj2[1] = items1;
    const items3 = [closure_10(closure_3, obj2), ];
    const obj9 = { style: null, children: null };
    obj9[0] = styles.center;
    const obj10 = { source: null, style: null, resizeMode: "contain" };
    obj10[0] = registerAsset;
    obj10[1] = styles.image;
    obj9[1] = callback(closure_4, obj10);
    items3[1] = callback(closure_3, obj9);
    obj1[1] = items3;
    return closure_10(closure_3, obj1);
  } else if ("" !== vanityURLCode) {
    const _HermesInternal = HermesInternal;
    let combined = "discord.gg/" + vanityURLCode;
  } else {
    const intl = getSystemLocale.intl;
    combined = intl.string(getSystemLocale.t["FaXGO/"]);
  }
};
let obj2 = { marginTop: require("Themes").space.PX_8, gap: require("Themes").space.PX_4 };
const result = require("FormStates").fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx");

export default function ConnectedGuildSettingsModalVanityURL(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1480);
  const navigation = obj.useNavigation();
  const tmp = createCacheKey();
  const tmp2 = guildId;
  const items = [createGuildRecordFromRust];
  const stateFromStores = guildId(589).useStateFromStores(items, () => outer1_6.getGuild(guildId));
  const obj2 = guildId(589);
  const items1 = [handleFormInit];
  const stateFromStores1 = guildId(589).useStateFromStores(items1, () => props2.getProps().vanityURLCode);
  const obj3 = guildId(589);
  const items2 = [FormStates];
  const stateFromStoresObject = guildId(589).useStateFromStoresObject(items2, () => {
    props = props.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { children: null };
    obj = { guild: null, vanityURLCode: null, submitting: null, errorDetails: null, navigation: null, styles: null, contentContainerStyle: null };
    obj[0] = stateFromStores;
    obj[1] = stateFromStores1;
    obj[2] = tmp8;
    obj[3] = tmp9;
    obj[4] = navigation;
    obj[5] = tmp;
    obj[6] = guildId.contentContainerStyle;
    const items3 = [callback(GuildSettingsModalVanityURL, obj), callback(tmp2(5581).NavScrim, {})];
    obj[0] = items3;
    tmp10 = callback2(closure_11, obj);
  }
  return tmp10;
};