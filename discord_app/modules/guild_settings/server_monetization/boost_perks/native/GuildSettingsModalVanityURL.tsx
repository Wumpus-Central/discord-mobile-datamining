// discord_app/modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx
import nativeDefault from "../../../../../../discord_common/js/packages/tokens/native.tsx";
import util from "../../../../../intl/index.native.tsx";
import Text_Text from "../../../../../design/components/Text/native/Text.tsx";
import TextInput from "../../../../../design/components/TextInput/native/TextInput.native.tsx";
import HeaderActionButton from "../../../../../design/components/Navigator/native/HeaderActionButton.native.tsx";
import getInviteURLDefault from "../../../../instant_invite/getInviteURL.tsx";
import GuildSettingsVanityURLUtils from "../GuildSettingsVanityURLUtils.tsx";
import ChangeVanityURLActionCreatorsDefault from "../../../../../actions/ChangeVanityURLActionCreators.tsx";
import _modDef17645 from "../../../../../../_runtime/metro/17645__.js";
import noop from "../../../../../../_runtime/metro/00019__.js";
import ChangeVanityURLModalStore from "../../../../../stores/ChangeVanityURLModalStore.tsx";
import GuildStore from "../../../../../stores/GuildStore.tsx";
import GuildSettingsStore from "../../../GuildSettingsStore.tsx";

require = fn;
get_ActivityIndicator = fn(17);
({ View: c3, Image: closure_4 } = get_ActivityIndicator);
const GuildFeatures = fn(1074).GuildFeatures;
const jsxProd = fn(21);
({ jsx: closure_9, jsxs: c10, Fragment: closure_11 } = jsxProd);
fn(4560);
let createStyles = { wrapper: null, section: null, hints: null, center: null, image: null };
createStyles = { flex: 1, justifyContent: "space-between", paddingTop: nativeDefault.space.PX_32 };
createStyles.wrapper = createStyles;
createStyles.section = { paddingHorizontal: nativeDefault.space.PX_12 };
let obj1 = { paddingHorizontal: nativeDefault.space.PX_12 };
createStyles.hints = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
createStyles.center = { alignItems: "center", flexDirection: "column" };
createStyles.image = { width: 135, height: 183, marginBottom: 27 };
let closure_12 = createStyles.createStyles(createStyles);
const PureComponent = noop.PureComponent;
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
      ChangeVanityURLActionCreatorsDefault.openModal(
        applyArgumentsResult.props.guild.id,
        applyArgumentsResult.state.vanityURLCode,
      );
      applyArgumentsResult.setState({ isEditing: true });
    };
    applyArgumentsResult.handleChange = function handleChange(vanityURLCode) {
      applyArgumentsResult.setState({ vanityURLCode });
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      return new Promise((fn) => {
        ChangeVanityURLActionCreatorsDefault.closeModal();
        state.setState({ isEditing: false });
        fn(true);
      });
    };
    applyArgumentsResult.handleSave = function handleSave() {
      applyArgumentsResult.setState({ isEditing: false });
      ChangeVanityURLActionCreatorsDefault.changeVanityURL(
        applyArgumentsResult.props.guild.id,
        applyArgumentsResult.state.vanityURLCode,
      );
    };
    return applyArgumentsResult;
  }
}
const prototype = GuildSettingsModalVanityURL.prototype;
prototype["componentDidMount"] = function componentDidMount() {
  this.updateNavigator(undefined, this.state);
};
prototype["componentDidUpdate"] = function componentDidUpdate(vanityURLCode, arg1) {
  const self = this;
  if (this.props.vanityURLCode !== vanityURLCode.vanityURLCode) {
    let str = self.props.vanityURLCode;
    if (str == null) {
      str = "";
    }
    const obj = { vanityURLCode: str };
    self.setState(obj);
  }
  self.updateNavigator(vanityURLCode, arg1);
};
prototype["updateNavigator"] = function updateNavigator(submitting, isEditing) {
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
      let setOptionsResult = self(5624);
      fn = setOptionsResult.getHeaderConditionalBackButton(this.handleCancel);
    }
    setOptionsResult = { headerLeft: fn, headerRight: null };
    if (submitting) {
      let fn2 = () => closure_1_9(self(dependencyMap[9]).HeaderSubmittingIndicator, {});
    } else {
      fn2 = isEditing
        ? () => {
            const obj = { onPress: self.handleSave, text: null };
            const intl = util.intl;
            obj.text = intl.string(util.t["R3BPH+"]);
            return React7(HeaderActionButton.HeaderActionButton, obj);
          }
        : () => {
            const obj = { onPress: self.handleStartEditing, text: null };
            const intl = util.intl;
            obj.text = intl.string(util.t.bt75uw);
            return React7(HeaderActionButton.HeaderActionButton, obj);
          };
    }
    setOptionsResult.headerRight = fn2;
    setOptionsResult = navigation.setOptions(setOptionsResult);
  }
};
prototype["componentWillUnmount"] = function componentWillUnmount() {
  ChangeVanityURLActionCreatorsDefault.closeModal();
};
prototype["render"] = function render() {
  const self = this;
  ({ errorDetails, guild, styles } = this.props);
  ({ isEditing, vanityURLCode } = this.state);
  if (null != vanityURLCode) {
    if ("" !== vanityURLCode) {
      let obj = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl6 = util.intl;
      obj = { url: getInviteURLDefault(vanityURLCode) };
      obj.children = intl6.format(util.t.FcGpNU, obj);
      const tmp24 = getInviteURLDefault(vanityURLCode);
      const tmp = React7(Text_Text.Text, obj);
    }
  }
  if (isEditing) {
    let errorMessageFromErrorCode;
    if (null != errorDetails) {
      obj = GuildSettingsVanityURLUtils;
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
    obj1.style = items;
    const obj2 = { style: styles.section, children: null };
    const obj3 = {
      isDisabled: !isEditing,
      value: vanityURLCode,
      onChange: self.handleChange,
      autoFocus: isEditing,
      errorMessage: errorMessageFromErrorCode,
    };
    const items1 = [React7(TextInput.TextInput, obj3)];
    const obj4 = { style: styles.hints, children: null };
    const obj5 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl2 = util.intl;
    obj5.children = intl2.string(util.t.IhWDcu);
    const items2 = [React7(Text_Text.Text, obj5), , , ,];
    const obj6 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl3 = util.intl;
    obj6.children = intl3.string(util.t["1mRkFr"]);
    items2[1] = React7(Text_Text.Text, obj6);
    const obj7 = { variant: "text-sm/medium", color: "text-muted", children: null };
    const intl4 = util.intl;
    obj7.children = intl4.string(util.t["eH/HMz"]);
    items2[2] = React7(Text_Text.Text, obj7);
    if (tmp17Result) {
      const obj8 = { variant: "text-sm/medium", color: "text-muted", children: null };
      const intl5 = util.intl;
      obj8.children = intl5.string(util.t.o3kmm3);
      tmp17Result = React7(Text_Text.Text, obj8);
    }
    items2[3] = tmp17Result;
    items2[4] = tmp;
    obj4.children = items2;
    items1[1] = closure_1_10(React3, obj4);
    obj2.children = items1;
    const items3 = [closure_1_10(React3, obj2)];
    const obj9 = { style: styles.center, children: null };
    const obj10 = { source: _modDef17645, style: styles.image, resizeMode: "contain" };
    obj9.children = React7(React4, obj10);
    items3[1] = React7(React3, obj9);
    obj1.children = items3;
    return closure_1_10(React3, obj1);
  } else if ("" !== vanityURLCode) {
    const _HermesInternal = HermesInternal;
    let combined = "discord.gg/" + vanityURLCode;
  } else {
    const intl = util.intl;
    combined = intl.string(util.t["FaXGO/"]);
  }
};
const size = fn(2);
const result = size.fileFinishedImporting(
  "modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx",
);

export default function ConnectedGuildSettingsModalVanityURL(guildId) {
  guildId = guildId.guildId;
  let obj = guildId(1483);
  const navigation = obj.useNavigation();
  const tmp = closure_12();
  const tmp2 = guildId;
  const items = [GuildStore];
  const stateFromStores = guildId(504).useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const obj2 = guildId(504);
  const items1 = [GuildSettingsStore];
  const stateFromStores1 = guildId(504).useStateFromStores(items1, () => props2.getProps().vanityURLCode);
  const obj3 = guildId(504);
  const items2 = [ChangeVanityURLModalStore];
  const stateFromStoresObject = guildId(504).useStateFromStoresObject(items2, () => {
    props = props.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp10 = null;
  if (null != stateFromStores) {
    obj = { children: null };
    obj = {
      guild: stateFromStores,
      vanityURLCode: stateFromStores1,
      submitting: tmp8,
      errorDetails: tmp9,
      navigation,
      styles: tmp,
      contentContainerStyle: guildId.contentContainerStyle,
    };
    const items3 = [closure_9(GuildSettingsModalVanityURL, obj), closure_9(tmp2(7040).NavScrim, {})];
    obj.children = items3;
    tmp10 = closure_10(closure_11, obj);
  }
  return tmp10;
}
