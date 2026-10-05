// === Module 17813: GuildSettingsModalVanityURL ===

// Module 17813 (GuildSettingsModalVanityURL)
import nativeDefault from "native" /* 587 */;
import Constants from "Constants" /* 1085 */;
import intl7 from "intl" /* 1126 */;
import Text_Text from "Text/Text" /* 4886 */;
import TextInput_TextInput from "TextInput/TextInput" /* 6098 */;
import HeaderActionButton2 from "HeaderActionButton" /* 6880 */;
import getInviteURLDefault from "getInviteURL" /* 7255 */;
import GuildSettingsVanityURLUtils from "GuildSettingsVanityURLUtils" /* 17659 */;
import ChangeVanityURLActionCreatorsDefault from "ChangeVanityURLActionCreators" /* 17815 */;
import AssetRegistryDefault from "AssetRegistry" /* 17816 */;
import react from "react" /* 19 */;
import react_native from "react-native" /* 17 */;
import ChangeVanityURLModalStore from "ChangeVanityURLModalStore" /* 17814 */;
import GuildStore from "GuildStore" /* 2074 */;
import GuildSettingsStore from "GuildSettingsStore" /* 9248 */;
import Fragment from "Fragment" /* 21 */;
import createStyles_mod from "createStyles" /* 4890 */;
import ReactCompilerGating from "ReactCompilerGating" /* 558 */;
import size from "module_2" /* 2 */;

let guildId, navigation, props;

let c10;
let c3;
let c9;
let closure_4;
let obj2;
let obj3;
let obj4;
let unpackModuleId;
({ View: c3, Image: closure_4 } = react_native);
const GuildFeatures = Constants.GuildFeatures;
({ jsx: c9, jsxs: c10, Fragment: unpackModuleId } = Fragment);
let createStyles = createStyles_mod;
let obj = { wrapper: obj2, section: obj3, hints: obj4, center: { alignItems: "center", flexDirection: "column" }, image: { width: 135, height: 183, marginBottom: 27 } };
obj2 = { flex: 1, justifyContent: "space-between", paddingTop: nativeDefault.space.PX_32 };
createStyles = createStyles.createStyles;
obj3 = { paddingHorizontal: nativeDefault.space.PX_12 };
obj4 = { marginTop: nativeDefault.space.PX_8, gap: nativeDefault.space.PX_4 };
let closure_12 = createStyles(obj);
const PureComponent = react.PureComponent;
class GuildSettingsModalVanityURL extends PureComponent {
  constructor() {
    const applyArgumentsResult = HermesBuiltin.applyArguments(this, new.target);
    require = applyArgumentsResult;
    let str = applyArgumentsResult.props.vanityURLCode;
    if (str == null) {
      str = "";
    }
    applyArgumentsResult.state = { isEditing: false, vanityURLCode: str };
    applyArgumentsResult.handleStartEditing = function handleStartEditing() {
      const obj = ChangeVanityURLActionCreatorsDefault;
      obj.openModal(require.props.guild.id, require.state.vanityURLCode);
      require.setState({ isEditing: true });
    };
    applyArgumentsResult.handleChange = function handleChange(vanityURLCode) {
      const obj = { vanityURLCode };
      require.setState(obj);
    };
    applyArgumentsResult.handleCancel = function handleCancel() {
      let state;
      const promise = new Promise((fn) => {
        const obj = ChangeVanityURLActionCreatorsDefault;
        obj.closeModal();
        state.setState({ isEditing: false });
        fn(true);
      });
      return promise;
    };
    applyArgumentsResult.handleSave = function handleSave() {
      require.setState({ isEditing: false });
      const obj = ChangeVanityURLActionCreatorsDefault;
      obj.changeVanityURL(require.props.guild.id, require.state.vanityURLCode);
    };
    return applyArgumentsResult;
  }
  componentDidMount() {
    this.updateNavigator(undefined, this.state);
  }
  componentDidUpdate(vanityURLCode, arg1) {
    const self = this;
    if (this.props.vanityURLCode !== vanityURLCode.vanityURLCode) {
      let str = self.props.vanityURLCode;
      const setState = self.setState;
      if (str == null) {
        str = "";
      }
      const obj = { vanityURLCode: str };
      setState(obj);
    }
    self.updateNavigator(vanityURLCode, arg1);
  }
  updateNavigator(submitting, isEditing) {
    let fn2;
    const self = this;
    ({ submitting, navigation } = this.props);
    isEditing = this.state.isEditing;
    const tmp = null != submitting && submitting === submitting.submitting && isEditing === isEditing.isEditing;
    if (!tmp) {
      let fn;
      const setOptions = navigation.setOptions;
      if (submitting) {
        fn = () => null;
      } else if (isEditing) {
        let obj = self(6010);
        fn = obj.getHeaderConditionalBackButton(this.handleCancel);
      }
      const obj2 = { headerLeft: fn, headerRight: fn2 };
      if (submitting) {
        fn2 = () => closure_1_9(self(dependencyMap[9]).HeaderSubmittingIndicator, {});
      } else {
        fn2 = isEditing ? (() => {
          let intl;
          const obj = { onPress: self.handleSave, text: intl.string(intl7.t["R3BPH+"]) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return React4(HeaderActionButton, obj);
        }) : (() => {
          let intl;
          const obj = { onPress: self.handleStartEditing, text: intl.string(intl7.t.bt75uw) };
          const HeaderActionButton = HeaderActionButton2.HeaderActionButton;
          intl = intl7.intl;
          return React4(HeaderActionButton, obj);
        });
      }
      setOptions(obj2);
    }
  }
  componentWillUnmount() {
    const obj = ChangeVanityURLActionCreatorsDefault;
    obj.closeModal();
  }
  render() {
    let errorDetails;
    let guild;
    let intl2;
    let intl3;
    let intl4;
    let intl5;
    let intl6;
    let isEditing;
    let items;
    let items1;
    let items2;
    let items3;
    let obj13;
    let obj3;
    let styles;
    const self = this;
    ({ errorDetails, guild, styles } = this.props);
    ({ isEditing, vanityURLCode } = this.state);
    let tmp;
    if (null != vanityURLCode) {
      if ("" !== vanityURLCode) {
        const obj2 = { variant: "text-sm/medium", color: "text-muted", children: intl6.format(intl7.t.FcGpNU, obj3) };
        const tmp22 = getInviteURLDefault(vanityURLCode);
        const Text5 = Text_Text.Text;
        intl6 = intl7.intl;
        obj3 = { url: tmp22 };
        tmp = React4(Text5, obj2);
      }
    }
    let tmp2 = vanityURLCode;
    if (!isEditing) {
      let combined;
      if ("" !== vanityURLCode) {
        const _HermesInternal = HermesInternal;
        combined = "discord.gg/" + vanityURLCode;
      } else {
        const intl = intl7.intl;
        combined = intl.string(intl7.t["FaXGO/"]);
      }
      tmp2 = combined;
    }
    let errorMessageFromErrorCode;
    if (null != errorDetails) {
      const obj = GuildSettingsVanityURLUtils;
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
    const obj4 = { style: items, children: items3 };
    items = [styles.wrapper, self.props.contentContainerStyle];
    const obj5 = { style: styles.section, children: items1 };
    items1 = [, ];
    const obj6 = { disabled: !isEditing, value: tmp2, onChange: self.handleChange, autoFocus: isEditing, errorMessage: errorMessageFromErrorCode };
    items1[0] = React4(TextInput_TextInput.TextInput, obj6);
    const obj7 = { style: styles.hints, children: items2 };
    const obj8 = { variant: "text-sm/medium", color: "text-muted", children: intl2.string(intl7.t.IhWDcu) };
    const Text = Text_Text.Text;
    intl2 = intl7.intl;
    items2 = [React4(Text, obj8), , , , ];
    const obj9 = { variant: "text-sm/medium", color: "text-muted", children: intl3.string(intl7.t["1mRkFr"]) };
    const Text2 = Text_Text.Text;
    intl3 = intl7.intl;
    items2[1] = React4(Text2, obj9);
    const obj10 = { variant: "text-sm/medium", color: "text-muted", children: intl4.string(intl7.t["eH/HMz"]) };
    const Text3 = Text_Text.Text;
    intl4 = intl7.intl;
    items2[2] = React4(Text3, obj10);
    if (tmp17Result) {
      const obj11 = { variant: "text-sm/medium", color: "text-muted", children: intl5.string(intl7.t.o3kmm3) };
      const Text4 = Text_Text.Text;
      intl5 = intl7.intl;
      tmp17Result = React4(Text4, obj11);
    }
    items2[3] = tmp17Result;
    items2[4] = tmp;
    items1[1] = authStore(_false, obj7);
    items3 = [authStore(_false, obj5), ];
    const obj12 = { style: styles.center, children: React4(React3, obj13) };
    obj13 = { source: AssetRegistryDefault, style: styles.image, resizeMode: "contain" };
    items3[1] = React4(_false, obj12);
    return authStore(_false, obj4);
  }
}
const prototype = GuildSettingsModalVanityURL.prototype;
const tmp6 = ReactCompilerGating.isReactCompilerEnabled() ? ((guildId) => {
  let errorDetails;
  let first;
  let items3;
  let props2;
  let submitting;
  let tmp10;
  let tmp11;
  let tmp14;
  let tmp15;
  let tmp8;
  const obj = guildId(576);
  const cResult = obj.c(15);
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp4 = closure_12();
  const obj2 = guildId(1490);
  navigation = obj2.useNavigation();
  if (cResult[0] === Symbol.for("react.memo_cache_sentinel")) {
    const items = [GuildStore];
    cResult[0] = items;
    first = items;
  } else {
    first = cResult[0];
  }
  if (cResult[1] !== guildId) {
    const fn = function s() {
      return GuildStore.getGuild(guildId);
    };
    cResult[1] = guildId;
    cResult[2] = fn;
    tmp8 = fn;
  } else {
    tmp8 = cResult[2];
  }
  const tmpResult = guildId(504);
  const stateFromStores = tmpResult.useStateFromStores(first, tmp8);
  if (cResult[3] === Symbol.for("react.memo_cache_sentinel")) {
    const items1 = [GuildSettingsStore];
    class L {
      constructor() {
        return props2.getProps().vanityURLCode;
      }
    }
    cResult[3] = items1;
    cResult[4] = L;
    tmp11 = L;
    tmp10 = items1;
  } else {
    tmp10 = cResult[3];
    tmp11 = cResult[4];
  }
  const tmpResult3 = guildId(504);
  const stateFromStores1 = tmpResult3.useStateFromStores(tmp10, tmp11);
  if (cResult[5] === Symbol.for("react.memo_cache_sentinel")) {
    const items2 = [ChangeVanityURLModalStore];
    class L {
      constructor() {
        return props2.getProps().vanityURLCode;
      }
    }
    cResult[5] = items2;
    cResult[6] = tmp17;
    tmp15 = tmp17;
    tmp14 = items2;
  } else {
    tmp14 = cResult[5];
    tmp15 = cResult[6];
  }
  const tmpResult4 = guildId(504);
  const stateFromStoresObject = tmpResult4.useStateFromStoresObject(tmp14, tmp15);
  ({ submitting, errorDetails } = stateFromStoresObject);
  if (cResult[7] === contentContainerStyle) {
    if (cResult[8] === errorDetails) {
      if (cResult[9] === stateFromStores) {
        if (cResult[10] === navigation) {
          if (cResult[11] === tmp4) {
            if (cResult[12] === submitting) {
              let tmp19;
              if (cResult[13] === stateFromStores1) {
                tmp19 = cResult[14];
              }
              return tmp19;
            }
          }
        }
      }
    }
  }
  let tmp20 = null;
  if (null != stateFromStores) {
    const obj3 = { children: items3 };
    class L {
      constructor() {
        return props2.getProps().vanityURLCode;
      }
    }
    const obj4 = { guild: stateFromStores, vanityURLCode: stateFromStores1, submitting, errorDetails, navigation, styles: tmp4, contentContainerStyle };
    items3 = [closure_9(GuildSettingsModalVanityURL, obj4), closure_9(guildId(6536).NavScrim, {})];
    tmp20 = closure_10(closure_11, obj3);
  }
  cResult[7] = contentContainerStyle;
  cResult[8] = errorDetails;
  cResult[9] = stateFromStores;
  cResult[10] = navigation;
  cResult[11] = tmp4;
  cResult[12] = submitting;
  cResult[13] = stateFromStores1;
  cResult[14] = tmp20;
  tmp19 = tmp20;
}) : ((guildId) => {
  let items3;
  let props2;
  guildId = guildId.guildId;
  const contentContainerStyle = guildId.contentContainerStyle;
  const tmp = closure_12();
  const obj = guildId(1490);
  navigation = obj.useNavigation();
  const items = [GuildStore];
  const obj2 = guildId(504);
  const stateFromStores = obj2.useStateFromStores(items, () => GuildStore.getGuild(guildId));
  const items1 = [GuildSettingsStore];
  const obj3 = guildId(504);
  const stateFromStores1 = obj3.useStateFromStores(items1, () => props2.getProps().vanityURLCode);
  const items2 = [ChangeVanityURLModalStore];
  const obj4 = guildId(504);
  const stateFromStoresObject = obj4.useStateFromStoresObject(items2, () => {
    props = props.getProps();
    return { submitting: props.submitting, errorDetails: props.errorDetails };
  });
  let tmp10 = null;
  const tmp2 = guildId;
  if (null != stateFromStores) {
    const obj5 = { children: items3 };
    const obj6 = { guild: stateFromStores, vanityURLCode: stateFromStores1, submitting: tmp8, errorDetails: tmp9, navigation, styles: tmp, contentContainerStyle };
    items3 = [closure_9(GuildSettingsModalVanityURL, obj6), closure_9(tmp2(6536).NavScrim, {})];
    tmp10 = closure_10(closure_11, obj5);
  }
  return tmp10;
});
const result = size.fileFinishedImporting("modules/guild_settings/server_monetization/boost_perks/native/GuildSettingsModalVanityURL.tsx");

export default tmp6;